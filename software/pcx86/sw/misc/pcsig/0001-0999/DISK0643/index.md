---
layout: page
title: "PC-SIG Diskette Library (Disk #643)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0643/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0643"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TASM"

    TASM is an assembler that runs on an IBM-PC/XT/AT or compatible and
    creates codes for any of the following processors: 8048, 8051, 8085,
    Z80, 6805, 6502, TMS7000, TMS32010, or 6801/6803.
    
    Features of TASM include: 17 operators for expression parsing, support
    of a subset of C preprocessor commands, macros, multiple statements per
    line, support of three object file formats, only absolute code
    generation, uniform syntax across versions, and support for PROM
    programming.  The source code is available.  Customize TASM to produce
    codes for other processors by creating a proper instruction definition
    table for the target chip.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE643.TXT

{% raw %}
```
Disk No:  643                                                           
Disk Title: Tasm                                                        
PC-SIG Version: S2.8                                                    
                                                                        
Program Title: TASM                                                     
Author Version: 2.8                                                     
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
TASM is an assembler that runs on an IBM-PC/XT/AT or compatible and     
creates codes for any of the following processors: 8048, 8051, 8085,    
Z80, 6805, 6502, TMS7000, TMS32010, or 6801/6803.                       
                                                                        
Features of TASM include: 17 operators for expression parsing, support  
of a subset of C preprocessor commands, macros, multiple statements per 
line, support of three object file formats, only absolute code          
generation, uniform syntax across versions, and support for PROM        
programming.  The source code is available.  Customize TASM to produce  
codes for other processors by creating a proper instruction definition  
table for the target chip.                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TASM_BBS.DOC

{% raw %}
```
                      TASM BBS

The  most  current  version of TASM is available from a  BBS  system 
known as "The Library" based in Seattle, Washington.  STI keeps that 
BBS  up-to-date.   In addition,  you can send electronic mail to  me 
concerning  any  problems  or questions about TASM.   Here  are  the 
details: 

        BBS Name           :  The Library
        Sysop Name         :  The Flying Kiwi
        Number of Lines    :  5
        Phone Number       :  206-641-7978  or 206-562-2447
        Baud Rates         :  300/1200/2400
        Protocols supported:  XMODEM, YMODEM, KERMIT, SEAlink, SuperKERMIT


The above phone number may not allow you to download files.   If so, 
then  make  the following selections to see  the  appropriate  phone 
numbers  for  downloads and call back (enter characters enclosed  in 
<>: 

        <I>  Info
        <5>  Phone Numbers for The Library


To download, make the following selections:

        <F> Files Subsystem
        <1> Computer Subjects
        <5> IBM Files
        <U> Upload/Download
        <D> Download

The  files to download are TASM28_A.ARC and TASM28_B.ARC.    If  you 
do  not have a program to extract the archive files,  also  download 
UNPACK. 


                        Tom Anderson
                        Speech Technology Incorported

```
{% endraw %}

## TASM.DOC

{% raw %}
```






                         TASM USER'S MANUAL


   TASM - A Table Driven Cross Assembler for the MSDOS* Environment





                           Thomas N. Anderson
                     Speech Technology Incorporated
                837 Front Street South, Issaquah, WA   98027


                            August, 1990
                             Version 2.8

[Speech Technology Incorporated  manufactures electronic devices  to
aid  the  visually  impaired  employing  digital  speech   synthesis
technology.]


TASM software  is  Copyright  (C)  1985-1990  by  Speech  Technology
Incorporated.  All rights reserved.

This document  is  Copyright  (C)  1985-1990  by  Speech  Technology
Incorporated.  All rights reserved.   Permission is granted to  copy
this document and related software except for the source code.   The
source code, distributed to registered users, may be copied for  the
sole use of the registered user.

Portions  of  TASM.EXE (C runtime library)  are Copyright  1987   by
Microsoft Corporation.



 * MSDOS is a trademark of Microsoft Corporation.

TASM - Table Driven Assembler Version 2.8                     Page 2

TABLE OF CONTENTS

SECTION                                             PAGE
______________________________________________________________________
INTRODUCTION                                           4
INVOCATION                                             5
 File Names                                            5
 Option: a - Assembly Control                          6
 Option: b - Binary Object Format                      7
 Option: c - Contiguous Block Output                   7
 Option: d - Define a Macro                            7
 Option: e - Expand Source                             7
 Option: f - Fill Memory                               7
 Option: g - Select Object File Format                 8
 Option: h - Hex Object Code Table                     8
 Option: i - Ignore Case in Labels                     8
 Option: l - Label Table                               8
 Option: m - MOS Technology Object Format              8
 Option: o - Set Number of Bytes per Object Record     8
 Option: p - Page Listing File                         8
 Option: q - Disable Listing File                      8
 Option: r - Set Read Buffer Size                      8
 Option: s - Enable Symbol File Generation             9
 Option: t - Table Name                                9
 Option: x - Enable Extended Instruction Set          10
 Option: y - Enable Assembly Timing                   10
ENVIRONMENT VARIABLES                                 11
 TASMTABS                                             11
 TASMOPTS                                             10
EXIT CODES                                            10
SOURCE FILE FORMAT                                    12
EXPRESSIONS                                           13
 Labels                                               13
 Numeric Constants                                    13
 Character Constants                                  14
 String Constants                                     14
 Location Counter Symbol                              14
 Operators                                            14
ASSEMBLER DIRECTIVES                                  17
 ADDINSTR                                             17
 AVSYM                                                17
 BLOCK                                                17
 BSEG/CSEG/DSEG/NSEG/XSEG                             17
 BYTE                                                 18
 CODES/NOCODES                                        18
 DB                                                   18
 DW                                                   18
 DEFINE                                               18
 DEFCONT                                              19
 EJECT                                                19
 ELSE                                                 20
 END                                                  20
 ENDIF                                                20
 EQU                                                  20
 EXPORT                                               21
 IFDEF                                                21
TASM - Table Driven Assembler Version 2.8                     Page 3

 IFNDEF                                               21
 IF                                                   22
 INCLUDE                                              22
 LIST/NOLIST                                          22
 LSFIRST/MSFIRST                                      22
 ORG                                                  22
 PAGE/NOPAGE                                          23
 SET                                                  23
 SYM/AVSYM                                            23
 TEXT                                                 24
 TITLE                                                25
 WORD                                                 25
OBJECT FILE FORMATS                                   26
 Intel Hex Object Format                              26
 MOS Technology Hex Object Format                     27
 Motorola Hex Object Format                           27
 Binary Object Format                                 28
LISTING FILE FORMAT                                   29
PROM PROGRAMMING                                      30
ERROR MESSAGES                                        31
BUGS AND LIMITATIONS                                  34

APPENDIX A - ORDERING INFORMATION                     35
TASM - Table Driven Assembler Version 2.8                     Page 4

INTRODUCTION


TASM is a table driven  cross assembler for the MS-DOS  environment.
Assembly source code, written in the appropriate dialect  (generally
very close to the manufacturers assembly language), can be assembled
with TASM, and the resulting  object code transferred to the  target
microprocessor system via PROM or other mechanisms.

The current microprocessor families supported by TASM are:

        6502                       8048
        6800/6801                  8051
        6805                       8080/8085
        TMS32010                   Z80
        TMS7000

The user so inclined may build tables for other microprocessors. The
descriptions of  the various  existing  tables and  instructions  on
building new tables are not in this document but can be found in the
TASMTABS.DOC file on the TASM distribution disk.

TASM characteristics include:

  1.  Powerful expression parsing (17 operators).
  2.  Supports a subset of the 'C' preprocessor commands.
  3.  Macro capability (through use of DEFINE directive).
  4.  Multiple statements per line.
  5.  Four object file formats:
          Intel hex, MOS Technology hex, Motorola hex, binary.
  6.  Absolute code generation only.
  7.  Source code available (in C).
  8.  Uniform syntax  across  versions  for  different  target machines.
  9.  Features in support of PROM programming (preset memory,
          contiguous block).
  10. Supports extended instructions for many of the supported
          microprocessor families.
  11. Tables read at run time - single TASM executable for all
          table versions.
  12. Symbol table export for inclusion in subsequent assemblies
          (.EXP format).
  13. Symbol table export file compatible with the Avocet 8051
          simulator (.SYM format).

SHAREWARE

TASM is distributed as shareware.   TASM is not public domain.   The
TASM distribution files may be  freely copied (excluding the  source
code files)  and  freely used  for  the purpose  of  evaluating  the
suitability of  TASM for  a given  purpose.   Use of  TASM beyond  a
reasonable evaluation period requires registration.   Prolonged  use
without registration is unethical.

TASM - Table Driven Assembler Version 2.8                     Page 5

INVOCATION

TASM can be invoked as  follows (optional fields shown in  brackets,
symbolic fields in <>):

    tasm -<pn> [-<option_flag ...>] <src_file> [<obj_file>
                               [<lst_file> [<exp_file> [<sym_file>]]]]

    Where  <option_flag> can be one or more of the following:

    -<table>        Specify version (<table> = table designation)
    -t<table>       Table (alternate form of above)
    -a<amask>       Assembly control (optional error checking)
    -b              Produce object in binary (.COM) format
    -c              Object file written as a contiguous block
    -d<macro>       Define a macro (or just a macro label)
    -e              Show source lines after macro expansion
    -f<fillbyte>    Fill entire memory space with <fillbyte> (hex)
    -g<objtype>     Object file (0=Intel, 1=MOS Tech, 2=Motorola, 3=binary)
    -h              Produce hex table of the assembled code (in list file)
    -i              Ignore case for labels
    -l              Produce a label table in the listing
    -m              Produce object in MOS Technology format
    -o<obytes>      Bytes per object record (for hex obj formats)
    -p[<lines>]     Page the listing file (<lines per page>. default=60)
    -q              Quiet, disable the listing file
    -r<kb>          Set read buffer size in Kbytes (default 2 Kbytes)
    -s              Write a symbol table file
    -x[<xmask>]     Enable extended instruction set (if any)
    -y              Time the assembly

The file parameters are defined as follows:

<src_file>  Source file name
<obj_file>  Object code file name
<lst_file>  Listing file name
<exp_file>  Symbol export file (only if the EXPORT directive is used).
<sym_file>  Symbol table file  (only if the "-s"
                option or the SYM/AVSYM directives are used).

The source file must be specified.   If not, some usage  information
is displayed.   Default  file  names for  all  the other  files  are
generated if  they are  not explicitly  provided.   The filename  is
formed by taking the source  filename and changing the extension  to
one of the following:

Extension           File type
________________________________________________________
.OBJ                Object file
.LST                Listing file
.EXP                Symbol export file
.SYM                Symbol table  file

TASM has  no  built-in  instruction set  tables.    Instruction  set
definition files are read at run time.  TASM determines which  table
to use based  on the '-table'  field shown above.   For example,  to
TASM - Table Driven Assembler Version 2.8                     Page 6

assemble the code in a file called source.asm, one would enter:

        tasm -48  source.asm            for an 8048 assembly
        tasm -65  source.asm            for a  6502 assembly
        tasm -51  source.asm            for an 8051 assembly.
        tasm -85  source.asm            for an 8085 assembly.
        tasm -80  source.asm            for a  Z80  assembly.
        tasm -05  source.asm            for a  6805 assembly.
        tasm -68  source.asm            for a  6800/6801 assembly.
        tasm -70  source.asm            for a  TMS7000  assembly.
        tasm -32  source.asm            for a  TMS32010 assembly.

The file name that the tables are read from is formed by taking  the
digits specified  after the  '-'  and appending  it to  'TASM'  then
appending the '.TAB' extension.   Thus, the  '-48' flag would  cause
the tables to be read from the file 'TASM48.TAB'.

It is possible to  designate tables by non  numeric part numbers  if
the '-t' flag is used.  For example, if a user built a table  called
TASMF8.TAB then TASM could be invoked as follows:

        tasm -tf8 source.asm

Each option  flag must  be preceded  by a  dash.   Options need  not
precede the file names, however.  The various options are  described
below:

a - Assembly Control. TASM can provide additional error checking  by
specifying the '-a' option at the time of execution.  If the '-a' is
provided without a  digit following,  then all  the available  error
checking is done.  If a digit follows, then it is used as a mask  to
determine the error checks  to be made.   The bits  of the mask  are
defined as follows:

Bit   Option   Description
__________________________________________________________________
0     -a1      Check for apparent illegal use of indirection
1     -a2      Check for unused data in the arguments
2     -a4      Check for duplicate labels
3     -a8      Check for non-unary operators at start of expression.
4     -a10     Check for off-page jumps for 8051 ACALL/AJMP.

Combinations of the above bits can also be used.  For example, '-a5'
would enable  the checking  for  illegal indirection  and  duplicate
labels.

Illegal indirection applies to micros that use parenthesis around an
argument to indicate indirection.  Since  it is always legal to  put
an extra pair of  parenthesis around any expression  (as far as  the
expression parser is concerned), the  user may think that he/she  is
indicating indirection for  an instruction that  has no  indirection
and TASM would not complain.  Enabling this checking will result  in
an error message (warning) whenever an outer pair of parenthesis  is
used and the  instruction set definition  table does not  explicitly
indicate that to be a valid form of addressing.

TASM - Table Driven Assembler Version 2.8                     Page 7

Unused data in  arguments applies to  cases where a  single byte  of
data is needed from an argument, but the argument contains more than
one byte of data.  If a full sixteen bit address is used in a  'Load
Immediate' type  instruction  that needs  only  a single  byte,  for
example, an error message  would be generated.   Here is an  example
(6502 code):

0001   1234                    .org $1234
tasm: Unused data in MS byte of argument.  Line 0002 in test.asm
0002   1234 A9 34       start  lda  #start

To make the above  checks occur whenever you  do an assembly, add  a
line like this to your AUTOEXEC.BAT file:

        SET TASMOPTS=-a


b  -  Binary Object Format. This option causes the object file to be
written in binary - one byte for each byte of code/data.  Note  that
no address  information  is included  in  the object  file  in  this
format.  The contiguous block (-c)  output mode is forced when  this
option is invoked.  This flag is equivalent to '-g3'.

c - Contiguous Block Output. If  this option is specified, then  all
bytes in the range from the lowest used byte to the highest will  be
defined in the object  file.  Normally, with  the default Intel  Hex
object format enabled,  if the  Program Counter  (PC) jumps  forward
because of an .ORG directive, the  bytes skipped over will not  have
any value  assigned them  in  the object  file.   With  this  option
enabled, no output to  the object file occurs  until the end of  the
assembly at which time the whole  block is written.  This is  useful
when using TASM to  generate code that  will be put  into a PROM  so
that all locations will  have a known value.   This option is  often
used in conjunction with  the -f option to  ensure all unused  bytes
will have a known value.

d - Define a Macro. Macros are defined on the command line generally
to control the assembly  of various IFDEF's that  are in the  source
file.  This  is a  convenient way  to generate  various versions  of
object code from a single source file.

e - Expand  Source. Normally TASM  shows lines in  the listing  file
just as they are in the source file.  If macros are in use (via  the
DEFINE directive) it is sometimes desirable to see the source  lines
after expansion.  Use the '-e' flag to accomplish this.

f  -  Fill  Memory.  This  option  causes the memory image that TASM
maintains to be initialized  to the value specified  by the two  hex
characters immediately following the 'f'.   TASM maintains a  memory
image that is a full 64K bytes in size (even if the target processor
cannot   utilize that  memory  space).   Invocation of  this  option
introduces a delay at start up of up to 2 seconds (time required  to
initialize all 64K bytes).

g -  Object File  Format.  TASM can  generate  object code  in  four
different formats as indicated below:
TASM - Table Driven Assembler Version 2.8                     Page 8

        -g0    for Intel hex (default)
        -g1    for MOS Technology hex (same as -m)
        -g2    for Motorola hex
        -g3    for binary (same as -b)

The '-m' and '-b' flags may also be used, as indicated above.

See the section on OBJECT FILE  FORMATS for descriptions of each  of
the above.


h - Hex Object  Code Table. This  option causes a  hex table of  the
produced object code to  appear in the listing  file.  Each line  of
the table shows sixteen bytes of code.


i - Ignore  Case in Labels.   TASM is  normally case sensitive  when
dealing with labels.  For those that prefer case insensitivity,  the
'-i' command line option can be employed.

l - Label Table.  This option causes a label table to appear in  the
listing file.   Each label  is shown with  its corresponding  value.
Macro labels  (as  established via  the  DEFINE directives)  do  not
appear.

m - MOS Technology Object Format. This option causes the object file
to be written in MOS Technology  hex format rather than the  default
Intel hex  format.    See  section on  OBJECT  FILE  FORMATS  for  a
description of the format.

o - Set Number of Bytes per Object Record.  When  generating  object
code in either the MOS Technology format or the Intel hex format,  a
default of 24 (decimal) bytes of object are defined on each  record.
This can be altered by invoking the '-o' option immediately followed
by  two  hex digits defining the number of bytes per record desired.
For example,  if 32 bytes per record are desired,  one might  invoke
TASM as:

        TASM -48 -o20 source.asm

p - Page Listing File. This  option causes the listing file to  have
top of page headers and form feeds inserted at appropriate intervals
(every sixty lines  of output).   To override the  default of  sixty
lines per page, indicate the desired  number of lines per page as  a
decimal number immediatly following the '-p'.  Here is an example:

        TASM -48 -p56 source.asm

q - Disable  Listing File.   This option  causes all  output to  the
listing file  to  be    suppressed,  unless  a  .LIST  directive  is
encountered in the source file (see LIST/NOLIST directives).

r - Set  Read Buffer Size.  This option overrides  the default  read
buffer size of 2  Kbytes.  The  first hexadecimal digit  immediately
after the 'r' is taken as the number of K bytes to allocate for  the
read  buffer  (.e.g.  '-r8'  indicates  an  8K  byte  buffer,  '-rf'
TASM - Table Driven Assembler Version 2.8                     Page 9

indicates a 15K byte buffer).  Note that that read buffers are taken
from the same  memory pool  as labels  and macro  storage, and  that
additional read buffers are  needed if "includes"  are used.   Thus,
using 8K  byte buffers  may  be suitable  for most  assemblies,  but
programs with large numbers of symbols  may not allow such a  value.
Also, reducing the buffer  size to 1 Kbyte  can increase the  memory
pool available for label storage, if such is needed.

s - Enable Symbol File Generation.    If this flag is set, a  symbol
file is generated at  the end of  the assembly.   The format of  the
file is one line  per label, each label  starts in the first  column
and is  followed by  white space  and then  four hexadecimal  digits
representing the value of the label.   The following illustrates the
format:

        label1         FFFE
        label2         FFFF
        label3         1000

The symbol file name can be provided  as the fifth file name on  the
the command line, or the name will be generated from the source file
name with a  '.SYM' extension.   The symbol table  file can also  be
generated by invoking the SYM  directive.  The AVSYM directive  also
generates the symbol file but in a different format (see section  on
ASSEMBLER DIRECTIVES).

t - Table Name.  As an alternative to specifying the instruction set
table as two decimal digits,  the table indication may be  preceeded
by the '-t' option.  This is useful if the desired table name starts
with a non-numeric.  Thus, a table for an F8 might be selected as:

        TASM -tf8 source.asm

TASM would expect to read the instruction set definition tables from
a file named TASMF8.TAB.

TASM - Table Driven Assembler Version 2.8                    Page 10

x -  Enable Extended  Instruction  Set. If  a processor  family  has
instructions that are  valid for only  certain members, this  option
can be used to  enable those beyond  the basic standard  instruction
set.  A hex digit may follow  the 'x' to indicate a mask value  used
in selecting the  appropriate instruction set.   Bit 0  of the  mask
selects the  basic  instruction set,  thus  a '-x1'  would  have  no
effect.    A  '-x3'  would  enable  the  basic  set  plus   whatever
instructions have bit 1 set in their  class mask.  A '-x' without  a
digit following is equivalent to a '-xf' which sets all four of  the
mask bits.  The  following  table  indicates  the  current  extended
instruction sets available in the TASM tables:

              Base          Extension 1     Extension 2  Extension 3
Base Table    Family        (-x3)           (-x5)        (-x9)
____________________________________________________________________
TASM48.TAB    8048          8041A           8022          8021
TASM65.TAB    6502          R65C02          R65C00/21
TASM05.TAB    6805          M146805 CMOS    HC05C4
TASM80.TAB    Z80           HD64180
TASM68.TAB    6800          6801/6803
TASM51.TAB    8051          
TASM85.TAB    8080          
TASM32.TAB    TMS32010      
TASM70.TAB    TMS7000       

The above table  does not  attempt to show  the many  microprocessor
family members that may apply under a given column.

y - Enable  Assembly Timing.   If this option  is enabled TASM  will
generate a statement of elapsed time and assembled lines per  second
at the end of the assembly.

TASM - Table Driven Assembler Version 2.8                    Page 11

ENVIRONMENT VARIABLES

The TASM  environment  can be  customized  by using  the  enviroment
variables listed below:

TASMTABS. This variable specifies the  path to be searched for  TASM
instruction set definition tables.   If it is  not defined then  the
table(s) must exist  in the current  working directory.   If it  was
desired to put the instruction set definition tables in a  directory
called 'TASM' on a drive called 'C:', the following statement  would
be appropriate in the AUTOEXEC.BAT file:

        set TASMTABS=C:\TASM

TASMOPTS. This variable specifies TASM command line options that are
to be invoked every time TASM is executed.  For example, if TASM  is
being used  for  8048  assemblies with  binary  object  file  output
desired,  the  following  statement  would  be  appropriate  in  the
AUTOEXEC.BAT file:

        set TASMOPTS=-48 -b


EXIT CODES

When TASM  terminates, it  will  return to  DOS the  following  exit
codes:

Exit Code      Meaning
___________________________________________________________
0              Normal completion, no assembly errors
1              Normal completion, with assembly errors
2              Abnormal completion, insufficient memory
3              Abnormal completion, file access error
4              Abnormal completion, general error


Exit codes 2 and above will  also be accompanied by messages to  the
console concerning the error.

TASM - Table Driven Assembler Version 2.8                    Page 12

SOURCE FILE FORMAT

Statements in the source  file must conform to  a format as  follows
(except  for assembler directive statements which are described in a
subsequent section):

        label  operation    operand       comment

All of the fields are optional, under appropriate circumstances.  An
arbitrary amount of white space  (space and tabs) can separate  each
field (as long as the maximum  line length of 255 characters is  not
exceeded).  Each of the fields are described below:

Label Field. If the first character of the line is alphabetic, it is
assumed to  be the  start of  a label.   Subsequent  characters  are
accepted as  part  of that  label  until a  space,  tab, or  ':'  is
encountered.    The   assembler  assigns  a   value  to  the   label
corresponding to  the current  location counter.   Labels  can be  a
maximum of 13 characters long.   Labels can contain upper and  lower
case letters, digits, underscores, and periods (the first  character
must be alphabetic).  Labels are case sensitive - the label  'START'
is a different label  from 'start' - unless  the '-i' (ignore  case)
option is enabled.

Operation  Field.  The  operation  field  contains  an   instruction
mnemonic which specifies the action to be carried out by the  target
processor when this instruction is executed.  The interpretation  of
each  mnemonic  is  dependent  on  the  target  microprocessor   (as
indicated by  the selected  TASM table).   The  operation field  may
begin in any column except the  first.  The operation field is  case
insensitive.

Operand Field. The operand field  specifies the data to be  operated
on by the instruction.   It may  include expressions and/or  special
symbols describing  the addressing  mode  to be  used.   The  actual
format and interpretation is dependent on the target processor.  For
a description of the format for currently supported processors,  see
the TASMTABS.DOC file on the TASM distribution disk.

Comment Field.  The  comment field always  begins with a  semicolon.
The rest of the line  from the semicolon to the  end of the line  is
ignored by TASM, but  passed on to the  listing file for  annotation
purposes.  The comment field must be  the last field on a line,  but
it may be the only field, starting in column one, if desired.

Multiple    Statement  Lines.     If  the  backslash  character   is
encountered on a  source line,   it is  treated as a  newline.   The
remainder of the line  following  the  backslash  will be  processed
as an  independent line  of source  code.   This allows  one to  put
multiple statements  on a line.   This facility is not so useful  of
itself,  but  when coupled  with the  capability   of   the   DEFINE
directive,    powerful    multiple  statement    macros    can    be
constructed  (see   section   on ASSEMBLER DIRECTIVES).   Note  that
when  using  the  statement  separator,  the character   immediately
following  it  should be  considered the  first character  of a  new
line,  and thus must  either be a start of  a label or  white  space
TASM - Table Driven Assembler Version 2.8                    Page 13

(not an instruction).  As the examples show, a space is put  between
the backslash and the start of the next instruction.


Some  examples  of  valid  source  statements follow (6502 mnemonics
shown):

label1   lda      byte1   ;get the first byte
         dec      byte1
         jne      label1
                  
;                 
label2            
         sta      byte2,X
         ;        a multiple statement line follows
         lda      byte1\ sta byte1+4\ lda byte2\ sta byte2+4



EXPRESSIONS

Expressions are  made  up  of various  syntactic  elements  (tokens)
combined according to a  set of syntactical rules.   The tokens  are
summarized as follows:

        1.  Labels
        2.  Constants
        3.  Location Counter Symbol
        4.  Operators
        5.  Parenthesis

Labels. Labels are strings of  characters that have a numeric  value
associated with them, generally representing an address.  Labels can
contain upper  and  lower  case letters,  digits,  underscores,  and
periods.  The first  character must be a  letter (to distinguish  it
from a numeric constant).  The value of a label is limited to 32 bit
precision.  Labels can contain up to 13 characters, all of which are
significant (none are ignored when looking at a label's value, as in
some assemblers).   Case is significant unless the '-i' command line
option is invoked.

Numeric Constants.  Numeric  constants  must  always  begin  with  a
decimal digit (thus hexadecimal constants  that start with a  letter
must be prefixed by a '0' unless the '$' prefix is used).  The radix
is determined by  a letter  immediately following  the digit  string
according to the following table:

       Radix          Suffix                   Prefix
       ______________________________________________________
       2              B or b                   %
       8              O or o                   @
       10             D or d (or nothing)      
       16             H or h                   $

Decimal is the default radix, so decimal constants need no suffix or
prefix.
TASM - Table Driven Assembler Version 2.8                    Page 14

The following representations are equivalent:

       1234H          or     $1234
       100d           or     100
       177400O        or     @177400
       01011000b      or     %01011000

The prefixes are provided for  compatibility with some other  source
code formats but introduce a problem of ambiguity.  Both '%' and '$'
have alternate  uses  ('%'  for modulo,  '$'  for  location  counter
symbol).  The ambiguity is resolved  by examining the context.   The
'%' character is interpreted as the modulo operator only if it is in
a postion suitable for  a binary operator.  Similarly, if the  first
character following  a  '$' is  a  valid hexadecimal  digit,  it  is
assumed to be a radix specifier and not the location counter.

Character  Constants.  Character  constants  are  single  characters
surrounded by  single quotes  (following quote  is optional).    The
ASCII value of the character in  the quotes is returned.  No  escape
provision exists to  represent non-printable  characters within  the
quotes, but this is not necessary since these can be just as  easily
represented as numeric constants (or using the TEXT directive  which
does allow escapes).

String Constants.  String  constants  are  one  or  more  characters
surrounded by double  quotes.   Note that string  constants are  not
allowed in expressions. They are only allowable following the TITLE,
BYTE and  TEXT assembler  directives. The  quoted strings  may  also
contain  escape  sequences  to  put  in  unprintable  values.    The
following escape sequences are supported:

        Escape
        Sequence       Description
        ___________________________________________________________
        \n             Line Feed
        \r             Carriage return
        \b             Backspace
        \t             Tab
        \f             Formfeed
        \\             Backslash
        \"             Quote
        \000           Octal value of character

Location   Counter   Symbol.    The  current value  of the  location
counter (PC) can  be used  in expressions by  placing a  '$' in  the
desired place.  The Location Counter Symbol is allowable anywhere  a
numeric constant is.  (Note that if the '$' is followed by a decimal
digit then  it is    taken to  be  the hexadecimal  radix  indicator
instead of the Location  Counter symbol, as  mentioned above).   The
'*' may also be used to represent the location counter, but is  less
preferred because of its ambiguity with the multiplicative operator.

Operators. Expressions can optionally  contain operators to  perform
some alterations  or  calculations  on  particular  values.      The
operators are summarized as follows:

TASM - Table Driven Assembler Version 2.8                    Page 15

       Operator    Type            Description
       __________________________________________
       +           Additive        addition
       -                           subtraction
                                   
       *           Multiplicative  multiplication
       /                           division
       %                           modulo
       <<                          logical shift left
       >>                          logical shift right
                                   
       ~           Unary           bit inversion (one's complement)
       -                           unary negation
                                   
       =           Relational      equal
       ==                          equal
       !=                          not equal
       <                           less than
       >                           greater than
       <=                          less than or equal
       >=                          greater than or equal
                                   
       &           Binary          binary 'and'
       |                           binary 'or'
       ^                           binary 'exclusive or'

The syntax is much the same as in 'C' with the following notes:

1.  No operator precedence is in effect.  Evaluation is from left to
right unless grouped by  parenthesis (see example below).

2.  All evaluations are done with 32 bit signed precision.

3.  Both  '=' and  '==' are allowable  equality checkers.   This  is
allowed since the syntax does not provide assignment capability  (as
'=' would normally imply).

The relational operators return a value of 1 if the relation is true
and 0 if it is false.  Thirtytwo bit signed arithmetic is used.

It is always a good idea to explicitly indicate the desired order of
evaluation with  parenthesis,  especially  to  maintain  portability
since  TASM does not evaluate expressions in the same manner as many
other assemblers.  To understand how it does arrive  at  the  values
for expressions, consider the following example:

        1 + 2*3 + 4

TASM would evaluate this as:

       (((1 + 2) * 3) + 4) = 13

Typical rules of precedence  would cause the  (2*3) to be  evaluated
first, such as:

        1 + (2*3) + 4      = 11
TASM - Table Driven Assembler Version 2.8                    Page 16

To  make  sure  you  get  the  desired  order  of  evaluation,   use
parenthesis liberally.

Note that  TASM  versions earlier  than  2.7.8 employed  a  somewhat
different method of evaluating expressions (also without precedence)
that essentially resulted in a right to left evaluation.

Here are some examples of valid expressions:

        (0f800H + tab)
        (label_2 >> 8)
        (label_3 << 8) & $f000
        $ + 4
        010010000100100b + 'a'
        (base + ((label_4 >> 5) & (mask << 2))
TASM - Table Driven Assembler Version 2.8                    Page 17

ASSEMBLER DIRECTIVES

Most of  the  assembler directives  have  a format  similar  to  the
machine  instruction  format.     However,  instead  of   specifying
operations for the processor to carry out, the directives cause  the
assembler to perform some function related to the assembly  process.
TASM has two types  of assembler directives -  those that mimic  the
'C'  preprocessor  functions,  and  those  that  resemble  the  more
traditional assembler directive  functions.  Each  of these will  be
discussed.

The 'C' preprocessor style directives are invoked with a '#' as  the
first character of  the line followed  by the appropriate  directive
(just as  in 'C').    Thus, these  directives  cannot have  a  label
preceding them  (on the  same  line).   Note  that in  the  examples
directives are shown in upper  case, however, either upper or  lower
case is acceptable.

ADDINSTR.  This  directive   can  be  used   to  define   additional
instructions for TASM to use in this assembly.  The format is:

[<label>]  .ADDINSTR inst args opcode nbytes modop class shift binor

The fields are separated by white space just as they would appear in
an instruction definition  file. See  the TASMTABS.DOC  file on  the
TASM distribution disk for more detail.

AVSYM.  See SYM/AVSYM.

BLOCK. This directive causes the Instruction Pointer to advance  the
specified number of  bytes without assigning  values to the  skipped
over locations.  The format is:

        [label] .BLOCK        expr

Some valid examples are:

        word1   .BLOCK     2
        byte1   .block     1
        buffer  .block     80

BSEG/CSEG/DSEG/NSEG/XSEG.  These  directives   can  be  invoked   to
indicate the  appropriate  address  space  for  symbols  and  labels
defined in the subsequent code.  The invocation of these  directives
in no way affects the code generated, only provides more information
in the  symbol  table  file  if the  AVSYM  directive  is  employed.
Segment control directives such as these are generally supported  by
assemblers that generate  relocatable object  code.   TASM does  not
generate relocatable object code and does not support a link  phase,
so these directives have  no direct effect  on the resulting  object
code. The segments are defined as follows:

TASM - Table Driven Assembler Version 2.8                    Page 18

        Directive       Segment Description
        _________________________________________________________
        BSEG            Bit  address
        CSEG            Code address
        DSEG            Data address (internal RAM)
        NSEG            Number or constant (EQU)
        XSEG            External data address (external RAM)


BYTE.  This directive allows a value assignment to the byte  pointed
to by the current Instruction Pointer.  The format is:

        [label] .BYTE   expr [, expr ...]

Only the lower eight bits of expr  are used.  Multiple bytes may  be
assigned by separating them with  commas or (for printable  strings)
enclosed in double quotes. Here are some examples:


      label1   .BYTE     10010110B
               .byte     'a'
               .byte     0
               .byte     100010110b,'a',0
               .byte     "Hello", 10, 13, "World"


CODES/NOCODES. These directives can be  used to alternately turn  on
or off the generation of formatted listing output with line numbers,
opcodes, data, etc.   With NOCODES in effect,  the source lines  are
sent to the listing file untouched.  This is useful around blocks of
comments that need a full 80 columns of width for clarity.

DB.  This is alternate form of the BYTE directive.

DW.  This is alternate form of the WORD directive.

DEFINE. The DEFINE  directive is  one of  the most  powerful of  the
directives and allows  string substitution  with optional  arguments
(macros).  The format is as follows:

        #DEFINE  <macro_label>[(<arg_list>)]  [<macro_def>]

        <macro_label> := character string to be expanded when found in
                           the source file.
                      
        <arg_list>    := optional argument list for variable
                         substitution in macro expansion.
                      
        <macro_def>   := character string to replace the occurrences
                         of macro_label in the source file.

The simplest form of the DEFINE directive might look like this:

        #DEFINE         MLABEL

Notice that no substitutionary string is specified.  The purpose  of
TASM - Table Driven Assembler Version 2.8                    Page 19

a statement like this would typically  be to define a label for  the
purpose of controlling some  subsequent conditional assembly  (IFDEF
or IFNDEF).

A more complicated  example, performing  simple substitution,  might
look like this:

        #DEFINE         VAR1_LO         (VAR1 & 255)

This statement would cause all occurrences of the  string  'VAR1_LO'
in the source to be substituted with '(VAR1 & 255)'.

As  a  more  complicated  example,   using  the  argument  expansion
capability, consider this:

        #DEFINE         ADD(xx,yy)      clc\ lda xx\ adc yy\ sta xx

If the source file then contained a line like this:

        ADD(VARX,VARY)

It would be expanded to:

        clc\ lda VARX\ adc VARY\ sta VARX

The above example shows the use of the backslash ('\') character  as
a  multiple  instruction  statement delimiter.  This approach allows
the definition of fairly powerful,  multiple statement  macros.  The
example shown generates 6502 instructions to add one memory location
to another.

Some rules associated with the argument list:

1.  Use a maximum of 10 arguments.

2.  Each argument should be a maximum of 15 characters.

Note that macros can be defined on the TASM command line, also, with
the '-d' option flag.

DEFCONT. This directive can be used to add to the last macro started
with a DEFINE directive.  This  provides a convenient way to  define
long macros without running off the edge of the page. The ADD  macro
shown above could be defined as follows:

        #DEFINE         ADD(xx,yy)     clc
        #DEFCONT                     \ lda xx
        #DEFCONT                     \ adc yy
        #DEFCONT                     \ sta xx

EJECT.  This  directive  can  be used to force a top of form and the
generation of a page header on the list file.  It has no  effect  if
the paging mode is off (see PAGE/NOPAGE).  The format is:

        .EJECT

TASM - Table Driven Assembler Version 2.8                    Page 20

ELSE.  This directive can optionally be used with IFDEF, IFNDEF  and
IF to delineate an  alternate block of code  to be assembled if  the
block  immediately  following  the  IFDEF,  IFNDEF  or  IF  is   not
assembled.

Here are some examples of the use of IFDEF, IFNDEF,  IF,  ELSE,  and
ENDIF:

        #IFDEF   label1
        lda      byte1
        sta      byte2
        #ENDIF   
                 
        #ifdef   label1
        lda      byte1
        #else    
        lda      byte2
        #endif   
                 
        #ifndef  label1
        lda      byte2
        #else    
        lda      byte1
        #endif   

        #if ($ >= 1000h)
        ; generate an invalid statement to cause an error
        ;  when we go over the 4K boundary.
         !!! PROM bounds exceeded.
        #endif

END.     This  directive  should  follow  all  code/data  generating
statements in the  source file.   It forces  the last  record to  be
written to the object file.  The format is:

        [<label>]       .END

ENDIF. This directive  must always  follow an IFDEF,  IFNDEF, or  IF
directive and signifies the end of the conditional block.

EQU. This directive  can be used  to assign values  to labels.   The
labels can  then be  used in  expressions in  place of  the  literal
constant.  The format is:

        <label>   .EQU    <expr>

Here is an example:

        MASK   .EQU   0F0H
        ;             
               lda    IN_BYTE
               and    MASK
               sta    OUT_BYTE

An alternate  form  of 'EQU'  is   '='.    The previous  example  is
equivalent to:
TASM - Table Driven Assembler Version 2.8                    Page 21

        MASK    =   0F0H

or

        MASK    =0FOH
        MASK    =$FO

White space must exist after the label,  but none is required  after
the '='.

EXPORT. This directive can be  used to define labels (symbols)  that
are to  be written  to the  export  symbol file.   The  symbols  are
written as equates (using the .EQU directive) so that the  resulting
file can be  included in a  subsequent assembly.   This feature  can
help overcome some of the deficiencies of TASM due to its lack of  a
relocating linker. The format is:

[<label>]  .EXPORT      <label >

The following example  illustrates the use  of the EXPORT  directive
and the format of the resulting export file:

Source file:

        .EXPORT        read_byte
        .EXPORT        write_byte
        .EXPORT        open_file

Resulting export file:

read_byte      .EQU   $1243
write_byte     .EQU   $12AF
open_file      .EQU   $1301


IFDEF. This directive can be used to optionally assemble a block  of
code.  It has the following form:

        #IFDEF  <macro_label>

When invoked,  the  list of  macro  labels (established  via  DEFINE
directives) is searched.  If the label is found, the following lines
of code are  assembled.   If not found,  the input  file is  skipped
until an ENDIF or ELSE directive is found.

Lines that are skipped over still appear in the listing file, but  a
'~' will appear immediately after the current PC and no object  code
will be generated (this is applicable to IFDEF, IFNDEF, and IF).

IFNDEF. This directive is the opposite of the IFDEF directive.   The
block  of  code  following  is  assembled  only  if  the   specified
macro_label is undefined.  It has the following form:

        #IFNDEF  <macro_label>

When invoked,  the  list of  macro  labels (established  via  DEFINE
TASM - Table Driven Assembler Version 2.8                    Page 22

directives) is searched.  If the  label is not found, the  following
lines of code  are assembled.   If it  is found, the  input file  is
skipped until an ENDIF or ELSE directive is found.

IF.  This directive  can be used to  optionally assemble a block  of
code dependent on the value of a given expression.  The format is as
follows:

        #IF     <expr>

If the expression <expr> evaluates to non-zero, the following  block
of code is assembled (until an ENDIF or ELSE is encountered).

INCLUDE.  The INCLUDE directive reads in and assembles the indicated
source file.  INCLUDEs can be nested up to six levels.  This  allows
a convenient  means to  keep  common definitions,  declarations,  or
subroutines in files  to be included  as needed.   The format is  as
follows:

        #INCLUDE        "<filename>"

The <filename> must  be enclosed in  double quotes.   Here are  some
examples:

        #INCLUDE       "macros.h"
        #include       "equates"
        #include       "subs.asm"

LIST/NOLIST.  These directives can  be used to alternately turn  the
output to the list file on (LIST) or off (NOLIST).  The format is:

        .LIST
        .NOLIST

LSFIRST/MSFIRST. These directives determine  the byte order rule  to
be employed for the WORD directive.  The default (whether correct or
not) for  all TASM  versions  is the  least significant  byte  first
(LSFIRST).  The following illustrates its effect:

        0000  34 12    .word $1234
        0002           .msfirst
        0002  12 34    .word $1234
        0004           .lsfirst
        0004  34 12    .word $1234


ORG. This  directive  provides  the means  to  set  the  Instruction
Pointer (a.k.a. Program Counter) to  the desired value.  The  format
is:

        [<label>] .ORG    <expr>

The <label> is optional.   The Instruction  pointer is assigned  the
value of  the expression,  <expr>.   For example,  to generate  code
starting at address 1000H, the following could be done:

TASM - Table Driven Assembler Version 2.8                    Page 23

        start   .ORG    1000H

The expression  (<expr>)  may  contain  references  to  the  current
Instruction Pointer, thus allowing various manipulations to be done.
For example, to align the Instruction  Pointer on the next 256  byte
boundary, the following could be done:

                .ORG  (($ + 0FFH) & 0FF00H)

ORG can also be used to reserve space without assigning values:

               .ORG    $+8

An alternate form of ORG  is '*=' or '$='.   Thus the following  two
examples are exactly equivalent to the previous example:

                *=*+8
                $=$+8

PAGE/NOPAGE.  These directives can  be used to alternately turn  the
paging mode on (PAGE) or off (NOPAGE).  If paging is in effect, then
every sixty  lines of  output will  be  followed by  a Top  of  Form
character and a  two line header  containing page number,  filename,
and the title.  The format is:

        .PAGE
        .NOPAGE

The number of lines per page can  be set with the '-p' command  line
option.


SET. This directive  allows the  value of  an existing  label to  be
changed.  The format is:

        <label>   .SET    <expr>

The use of the  SET directive should be  avoided since changing  the
value of a label can sometimes cause phase errors between pass 1 and
pass 2 of the assembly.

SYM/AVSYM. These directives can be used to cause a symbol table file
to be generated.  The format is:

        .SYM    ["<symbol_filename>"]
        .AVSYM  ["<symbol_filename>"]

For example:

        .SYM       "symbol.map"
        .SYM       
        .AVSYM     "prog.sym"
        .AVSYM

The two directives are similar, but result in a different format  of
the symbol table file.  The format  of the SYM file is one line  per
TASM - Table Driven Assembler Version 2.8                    Page 24

symbol, each symbol starts  in the first column  and is followed  by
white space and then four hexadecimal digits representing the  value
of the symbol.  The following illustrates the format:

       label1         FFFE
       label2         FFFF
       label3         1000

The AVSYM is provided to generate symbol tables compatible with  the
Avocet 8051 simulator.   The  format is  similar, but  each line  is
prefixed by an 'AS' and each  symbol value is prefixed by a  segment
indicator:

        AS     start          C:1000
        AS     read_byte      C:1243
        AS     write_byte     C:1280
        AS     low_nib_mask   N:000F
        AS     buffer         X:0080

The segment  prefixes  are determined  by  the most  recent  segment
directive invoked (see BSEG/CSEG/DSEG/NSEG/XSEG directives).

TEXT. This directive  allows an ASCII  string to be  used to  assign
values  to  a  sequence  of   locations  starting  at  the   current
Instruction Pointer.  The format is:

        [<label>] .TEXT   "<string>"

The ASCII value of each character in string is taken and assigned to
the next sequential location.   Some escape sequences are  supported
as follows:

        Escape
        Sequence       Description
        ___________________________________________________
        \n             Line Feed
        \r             Carriage return
        \b             Backspace
        \t             Tab
        \f             Formfeed
        \\             Backslash
        \"             Quote
        \000           Octal value of character

Here are some examples:

        message1   .TEXT   "Disk I/O error"
        message2   .text   "Enter file name "
                   .text   "abcdefg\n\r"
                   .text   "I said \"NO\""


TITLE.  This directive allows the user to define a title string that
appears at the top of each page of the list file (assuming the  PAGE
mode is on).  The format is:

TASM - Table Driven Assembler Version 2.8                    Page 25

                .TITLE  "<string>"

The string should not exceed 80 characters.  Here are some examples:

                .TITLE  "Controller version 1.1"
                .title  "This is the title of the assembly"
                .title  ""

WORD. This directive allows a value assignment to the next two bytes
pointed to by the current Instruction Pointer.  The format is:

        [<label>] .WORD  <expr> [, <expr> ...]

The  least  significant  byte  of  <expr>  is  put  at  the  current
Instruction Pointer  with  the most  significant  byte at  the  next
sequential location (unless the MSFIRST directive has been invoked).
Here are some examples:

        data_table     .WORD   (data_table + 1)
                       .word   $1234
                       .Word   (('x' - 'a')  << 2)
                       .Word   12, 55, 32

TASM - Table Driven Assembler Version 2.8                    Page 26

OBJECT FILE FORMATS

TASM supports four object file formats:

        1.  Intel Hex (default).
        2.  MOS Technology Hex.
        3.  Motorola Hex.
        4.  Binary

Each are described below:

Intel Hex Object Format. This is the default format.  This format is
line oriented and  uses only printable  ASCII characters except  for
the carriage return/line feed at the end of each line.  Each line in
the file assumes the following format:

:NNAAAARRHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHCCTT

Where:

All fields marked  'hex' consist  of two or  four ASCII  hexadecimal
digits (0-9, A-F).  A maximum  of 24 data bytes will be  represented
on each line  (override the 24  byte default with  the '-o'  command
line option).

:      = Record Start Character
NN     = Byte Count (hex)
AAAA   = Address of first byte (hex)
RR     = Record Type (hex, 00 except for last record which is 01)
HH     = Data Bytes (hex)
CC     = Check Sum (hex)
TT     = Line Terminator (carriage return, line feed)

The last line of the file will  be a record conforming to the  above
format with a byte count of zero:

         :00000001FF

The checksum is defined as:

sum = byte_cnt+addr_hi+addr_lo+rec_type + (sum of all data bytes)
checksum =  ((-sum) & ffh)
TASM - Table Driven Assembler Version 2.8                    Page 27

MOS Technology Hex Object Format.  This format is line oriented  and
uses  only  printable  ASCII  characters  except  for  the  carriage
return/line feed at the  end of each  line.  Each  line in the  file
assumes the following format:

;NNAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHCCCCTT

All fields marked  'hex' consist  of two or  four ASCII  hexadecimal
digits (0-9, A-F).  A maximum  of 24 data bytes will be  represented
on each line  (override the 24  byte default with  the '-o'  command
line option).

;      = Record Start Character
NN     = Byte Count (hex)
AAAA   = Address of first byte (hex)
HH     = Data Bytes (hex)
CCCC   = Check Sum (hex)
TT     = Line Terminator (carriage return, line feed)

The last line of the file will be a record with a byte count of zero
(';00').

The checksum is defined as:

sum = byte_cnt+addr_hi+addr_lo+rec_type + (sum of all data bytes)
checksum =  (sum & ffffh)


Motorola Hex Object Format.  This format is  line oriented and  uses
only printable ASCII characters except for the carriage  return/line
feed at the end  of each line.   Each line in  the file assumes  the
following format:

S1NNAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHCCCCTT

All fields marked  'hex' consist  of two or  four ASCII  hexadecimal
digits (0-9, A-F).  A maximum  of 24 data bytes will be  represented
on each line  (override the 24  byte default with  the '-o'  command
line option).

S1     = Record Start Prefix
NN     = Byte Count (hex) (data byte count + 3)
AAAA   = Address of first byte (hex)
HH     = Data Bytes (hex)
CC     = Check Sum (hex)
TT     = Line Terminator (carriage return, line feed)

The last line of the file will be a record with a byte count of zero
('S903AAAACCTT'). The checksum is defined as:

sum = byte_cnt+addr_hi+addr_lo+rec_type + (sum of all data bytes)
checksum =  (~sum & ffh)


Binary  Object  Format.   This  file  format   has  only  a   binary
representation of each data byte with no address, checksum or format
TASM - Table Driven Assembler Version 2.8                    Page 28

description, whatsoever.  It is often a convenient format to use  to
pass the data to other programs  on your PC (like a PROM  programmer
package) but because  of the  non-printability and  lack of  address
information, it is  not often  used to  transmit the  code to  other
systems.

Note that when this  object format is selected  (-b option), the  -c
option is forced.   This is done  so that no  ambiguity arises as  a
result of the lack of address information in the file.  Without  the
-c  option,  discontinuous  blocks  of  object  code  would   appear
contiguous.

TASM - Table Driven Assembler Version 2.8                    Page 29

LISTING FILE FORMAT

Each line of source code generates one (or more) lines of output  in
the listing file.  The fields of the output line are as follows:

1.  Current  source  file  line  number  (4 decimal digits).

2.  An optional '+'  appears if this is   an  'INCLUDE'  file.  (One
'+' for each level of INCLUDE invoked).

3.  Current  Instruction Pointer (4  hex digits).   An optional  '~'
follows the Instruction Pointer  if the line of  source code is  not
being assembled because of an IFDEF, IFNDEF, or IF directive.

4.  Resulting  code/data generated  from this source  line (two  hex
digits per byte, each byte separated by a space, up to six bytes per
line).

5.  The source line exactly as it appears in the source file.

If  paging  is  enabled (by either the '-p' option flag or the .PAGE
directive) some additional fields will be inserted into the  listing
file every 60 lines.  These fields are:

        1.  Top of Form (form feed).
        2.  Assembler identifier (e.g. "TASM 6502 Assembler").
        3.  Initial source file name.
        4.  Page number.
        5.  Title.
TASM - Table Driven Assembler Version 2.8                    Page 30

PROM PROGRAMMING

A wide variety of PROM  programming equipment is available that  can
use object code in one or more  of the formats TASM supports.   Here
are some notes concerning the generation of code to be put in PROMs:

1.  PRESET MEMORY.  It is often  desirable to have all bytes in  the
PROM programmed  even if  not  explicitly assigned  a value  in  the
source  code  (e.g.    the  bytes  are  skipped  over  with  a  .ORG
statement).  This can  be accomplished by  using the -c  (contiguous
block) and the  -f (fill) command  line option flags.   The -c  will
ensure that every byte from the lowest byte assigned a value to  the
the highest byte assigned a value will be in the object file with no
gaps.  The  -f flag  will assign the  specified value  to all  bytes
before the assembly begins so that when the object file is  written,
all bytes not assigned a value in the source code will have a  known
value.   As an  example, the  following command  line will  generate
object code  in the  default Intel  Hex format  with all  bytes  not
assigned a value in the source set to EA (hex, 6502 NOP):

                tasm -65 -c -fEA test.asm

2.  CONTIGUOUS BLOCKS.  To ensure that TASM generates object code to
cover the  full  address  range  of the  target  PROM,  put  a  .ORG
statement at the  end of  the source file  set to  the last  address
desired.  For example, to generate code to be put in a 2716 EPROM (2
Kbytes) from hex address $1000 to  $17ff, do something like this  in
the source file:

                         ;start of the file
                         .ORG    $1000
                         ;rest of the source code follows
 
                         <source code>
 
                         ;end of the source code
                         .ORG    $17ff
                         .BYTE   0
                         .END

Now, to invoke TASM to generate  the code in the binary format  with
all unassigned bytes set to 00 (6502 BRK), do the following:

                tasm -65 -b -f00 test.asm

Note that -b forces the -c option.

TASM - Table Driven Assembler Version 2.8                    Page 31

ERROR MESSAGES


ERROR MESSAGE                             DESCRIPTION
_______________________________________________________________________
Unrecognized directive                    A statement  starting with  a
                                          '.' or  '#'  has  a  mnemonic
                                          that  is  not  defined  as  a
                                          directive.

Unrecognized  instruction                 A  statement  has  an  opcode
                                          mnemonic that is not defined.

Unrecognized argument                     A statement has  an   operand
                                          format that is not defined.

Label value misaligned                    The value of a label  appears
                                          to have a different value  on
                                          the second pass  then it  was
                                          computed to have on the first
                                          pass.  This is generally  due
                                          to Zero Page Addressing  mode
                                          problems   with   the    6502
                                          version of TASM.  Labels that
                                          are  used  in  operands   for
                                          statements that could utilize
                                          Zero  Page  addressing   mode
                                          should  always   be   defined
                                          before used as an operand.

Label table overflow                      To  many  labels  have   been
                                          encountered.

No END directive before EOF               The source file did not  have
                                          an END directive in it.  This
                                          is not fatal,  but may  cause
                                          the last  object file  record
                                          to be lost.

No  files  specified                      TASM  was  invoked  with   no
                                          source file specified.

Unknown  option  flag                     TASM  was  invoked  with   an
                                          undefined option flag on  the
                                          command line.

Source file open error                    TASM was not able to open the
                                          specified source file.

List file open error                      TASM was not able to open the
                                          specified list file.

Object file open error                    TASM was not able to open the
                                          specified object file.

Unknown token                             Unexpected  characters   were
TASM - Table Driven Assembler Version 2.8                    Page 32

                                          encountered while parsing  an
                                          expression.

maximum number of macros exceeded         To many macros (DEFINEs) have
                                          been encountered.

macro buffer overflow                     The buffer  from which  space
                                          is   allocated   for    macro
                                          definitions is exhausted.

range of relative branch exceeded         A branch instruction  exceeds
                                          the   maximum   range   (6502
                                          Version).

macro expansion too long.                 The  expansion  of  a   macro
                                          resulted  in   a  line   that
                                          exceeded the maximum length.

Heap overflow on label definition.        TASM was  unable to  allocate
                                          memory to store the label.

No such label yet defined.                A    SET    directive     was
                                          encountered for  a label  not
                                          yet defined.   The  value  of
                                          labels that  are modified  by
                                          the   SET   directive    must
                                          already exist.

No indirection for this instruction.      A   parenthesis   was   found
                                          around      the       operand
                                          expression. This may indicate
                                          an attempt to use indirection
                                          where it is inappropriate.

Non-unary operator at start of expression A non-unary  operator at  the
                                          beginning of an expression is
                                          invalid.

Binary operator where value expected.     Two binary operators in a row
                                          indicate a missing value.

Invalid token where value expected.       Two binary operators in a row
                                          are not allowed.

Duplicate label.                          Duplicate  label  checks  are
                                          optionally enabled by the  '-
                                          a' option.

Label must pre-exist for SET.             The SET directive can only be
                                          applied to an existing label.

Unused data in MS byte of argument.       An instruction  or  directive
                                          used  the  least  significant
                                          byte of an argurment and left
                                          the  most  significant   byte
                                          unused, but it was non-zero.
TASM - Table Driven Assembler Version 2.8                    Page 33

File name too short                       A file  name on  the  command
                                          line   is   fewer   than    3
                                          characters. This  is done  to
                                          prevent a garbled option flag
                                          from being taken as a  source
                                          file,  which   in  turn   can
                                          result  in  the  source  file
                                          taken  as   an  object   file
                                          (which   are   truncated   at
                                          start-up time).

Unkown option Flag.                       Invalid option flag has  been
                                          specified  on   the   command
                                          line.     invoke  TASM   with
                                          nothing on  the command  line
                                          to  see  a   list  of   valid
                                          options.

TASM - Table Driven Assembler Version 2.8                    Page 34

BUGS AND LIMITATIONS

Limitations and Specifications
_____________________________________________________________________
Maximum number of labels                   2000
Maximum length of labels                   13 characters
Maximum address space                      64 Kbytes (65536 bytes)
Maximum number of nested INCLUDES          4
Maximum length of TITLE string             79 characters
Maximum source line length                 255 characters
Maximum length after macro expansion       255 characters
Maximum length of expressions              255 characters
Maximum length of pathnames                79 characters
Maximum length of command line             127 characters
                                           
Maximum number of instructions (per table) 600
Maximum number of macros                   1000
Maximum number of macro arguments          10
Maximum length of macro argument           16 characters
Heap size (for labels, macros, & buffers)  20000 bytes
Memory requirements                        160K

Bugs

1.  The 8048 version of TASM does not check for use of memory beyond
any reasonable bounds (e.g.  an 8048 has a maximum address space  of
4 Kbytes but TASM will let you pretend that you have 64 Kbytes).

2.  Expression evaluation has no operator precedence in effect which
can  make   for  unexpected results  if not explicitly grouped  with
parenthesis.

3.  First page of  listing file will not  show a user defined  title
(defined via TITLE directive).

4.  TASM sometimes does not generate error messages  for  improperly
formed expressions.

5.  TASM does not generate an error message when a EQU directive has
an undefined label on the right hand side.

TASM - Table Driven Assembler Version 2.8                    Page 35

APPENDIX A - ORDERING INFORMATION

TASM is  distributed as  shareware.   The shareware  portion of  the
product may be freely copied and used for evaluation purposes.   Use
of  TASM  beyond   an  evaluation   period  of   90  days   requires
registration. Registered users receive the following benefits:

    1.  The recent version of TASM.
    2.  TASM source code (in C).
    3.  Bound TASM manual.
    4.  Telephone support.
    5.  Knowledge that they are supporting the development of useful
        but inexpensive software.

DESCRIPTION                                  UNIT PRICE    PRICE
____________________________________________________________________

TASM Registration (TASM disk, manual, & source)  $40.00    _______

TASM Site Registration (for sites with multiple   90.00    _______
   users.  Includes same materials as above.)          

TASM User's Manual (included above)               10.00    _______

TASM update for registered users                  10.00    _______
   (latest disk (with source), and manual)             

Subtotal                                                   _______

Tax (Washington state residents add 8.1%)                  _______

Billing fee (for orders not accompanied by check) 10.00    _______

Foreign postage (outside North America) add $10.00         _______
  (Foreign orders must be in US funds drawn on a US bank)

TOTAL (post paid)                                          _______


Which processors are of primary interest to you?  __________________
(This is for information only.  You will receive all current tables).

Shipping Address:

______________________________________________

______________________________________________

______________________________________________

Send check or money order to:

    Speech Technology Incorporated
    Software Division
    837 Front Street South
    Issaquah, WA  98027   USA

```
{% endraw %}

## TASMTABS.DOC

{% raw %}
```
TASM TABLES  Version 2.8                                      Page 1


6502 INSTRUCTIONS AND ADDRESSING MODES

The acceptable 6502 opcode mnemonics for TASM are as follows:

         ADC  AND  ASL  BCC  BCS  BEQ  BNE  BMI  BPL  BVC  BVS  BIT
         BRK  CLC  CLD  CLI  CLV  CMP  CPX  CPY  DEC  DEX  DEY  EOR
         INC  INX  INY  JMP  JSR  LDA  LDX  LDY  LSR  NOP  ORA  PHA
         PHP  PLA  PLP  ROL  ROR  RTI  RTS  SBC  SEC  SED  SEI  STA
         STX  STY  TAX  TAY  TSX  TXA  TXS  TYA

TASM  also  supports the following instructions that are part of the
Rockwell  R65C02  and  R65C00/21  microprocessor  instruction  sets.
Those  that  are  marked  as  set A are applicable to the R65C02 and
those marked as set B are  applicable  to  the  R65C00/21  (A+B  for
both):

        Mnemonic        Description                Address Mode  Set
        ---------------------------------------------------------------
        ADC             Add with carry             (IND)         A
        AND             And memory with A          (IND)         A
        BIT             Test memory bits with A    ABS,X         A
        BIT             Test memory bits with A    ZP,X          A
        BIT             Test memory bits with A    IMM           A
        CMP             Compare memory with A      (IND)         A
        DEC             Decrement A                A             A
        EOR             Exclusive OR memory with A (IND)         A
        INC             Increment A                A             A
        JMP             Jump                       (ABS,X)       A
        LDA             Load A with memory         (IND)         A
        ORA             OR A with memory           (IND)         A
        SBC             Subtract memory form A     (IND)         A
        STA             Store A in memory          (IND)         A
        STZ             Store zero                 ABS           A
        STZ             Store zero                 ABS,X         A
        STZ             Store zero                 ZP            A
        STZ             Store zero                 ZP,X          A
        TRB             Test and reset memory bit  ABS           A
        TRB             Test and reset memory bit  ZP            A
        TSB             Test and set memory bit    ABS           A
        TSB             Test and set memory bit    ZP            A

        BRA             Branch Always              REL           A+B

        BBR0            Branch on Bit 0 Reset      ZP,REL        A+B
        BBR1            Branch on Bit 1 Reset      ZP,REL        A+B
        BBR2            Branch on Bit 2 Reset      ZP,REL        A+B
        BBR3            Branch on Bit 3 Reset      ZP,REL        A+B
        BBR4            Branch on Bit 4 Reset      ZP,REL        A+B
        BBR5            Branch on Bit 5 Reset      ZP,REL        A+B
        BBR6            Branch on Bit 6 Reset      ZP,REL        A+B
        BBR7            Branch on Bit 7 Reset      ZP,REL        A+B

        BBS0            Branch on Bit 0 Set        ZP,REL        A+B
        BBS1            Branch on Bit 1 Set        ZP,REL        A+B
        BBS2            Branch on Bit 2 Set        ZP,REL        A+B
TASM TABLES  Version 2.8                                      Page 2

        BBS3            Branch on Bit 3 Set        ZP,REL        A+B
        BBS4            Branch on Bit 4 Set        ZP,REL        A+B
        BBS5            Branch on Bit 5 Set        ZP,REL        A+B
        BBS6            Branch on Bit 6 Set        ZP,REL        A+B
        BBS7            Branch on Bit 7 Set        ZP,REL        A+B

        MUL             Multiply                   Implied       B

        PHX             Push Index X               Implied       A+B
        PHY             Push Index Y               Implied       A+B
        PLX             Pull Index X               Implied       A+B
        PLY             Pull Index Y               Implied       A+B

        RMB0            Reset Memory Bit 0         ZP            A+B
        RMB1            Reset Memory Bit 1         ZP            A+B
        RMB2            Reset Memory Bit 2         ZP            A+B
        RMB3            Reset Memory Bit 3         ZP            A+B
        RMB4            Reset Memory Bit 4         ZP            A+B
        RMB5            Reset Memory Bit 5         ZP            A+B
        RMB6            Reset Memory Bit 6         ZP            A+B
        RMB7            Reset Memory Bit 7         ZP            A+B

        SMB0            Set   Memory Bit 0         ZP            A+B
        SMB1            Set   Memory Bit 1         ZP            A+B
        SMB2            Set   Memory Bit 2         ZP            A+B
        SMB3            Set   Memory Bit 3         ZP            A+B
        SMB4            Set   Memory Bit 4         ZP            A+B
        SMB5            Set   Memory Bit 5         ZP            A+B
        SMB6            Set   Memory Bit 6         ZP            A+B
        SMB7            Set   Memory Bit 7         ZP            A+B

Addressing  modes  are denoted as follows:

        ABS               Absolute
        ZP                Zero Page
        ABS,X             Absolute X
        ZP,X              Zero Page X
        ABS,Y             Absolute Y
        ZP,Y              Zero Page Y
        A                 Accumulator
        (IND,X)           Indirect X
        (IND),Y           Indirect Y
        (IND)             Indirect
        #IMM              Immediate
        REL               Relative (Branch instructions only)
        ZP,REL            Zero Page, Relative
        Implied           Implied

Note  that Zero Page addressing can not be explicitly requested.  It
is used if the value of the operand is  representable  in  a  single
byte for the applicable statements.

The '-x' command line option can be  used  to  enable  the  extended
instructions.  A  '-x'  with  no  digit  following  will  enable the
standard set plus both extended sets.  The 6502 version of TASM uses
three bits in the instruction class  mask  to  determine  whether  a
TASM TABLES  Version 2.8                                      Page 3

given  instruction  is enabled or not.  Bit 0 enables the basic set,
bit 1 enables set A (R65C02) and bit 2 enables  set  B  (R65C00/21).
The following table shows various options:


        Class Mask        Enabled Instructions
                        BASIC   R65C02  R65C00/21
        --------------------------------------------
        1               yes     no      no
        2               no      yes     no
        3               yes     yes     no
        4               no      no      yes
        5               yes     no      yes
        6               no      yes     yes
        7               yes     yes     yes

Thus,  to enable the basic set plus the R65C02 instructions,  invoke
the '-x3' command line option.

See manufacturer's data for  a  more  complete  description  of  the
meaning    of     the     mnemonics    and     addressing     modes.
TASM TABLES  Version 2.8                                      Page 4

8048 INSTRUCTIONS AND ADDRESSING MODES

The following list shows the acceptable opcode mnemonics  and  their
corresponding  operand  formats for the 8048 version of TASM.  Where
'Rn' is seen,  R0 through R7  may  be  substituted.  Other  symbolic
fields are as follows:

        SYMBOLIC            DESCRIPTION
        -----------------------------------------------
        <addr8>             Absolute address (8 bits)
        <addr11>            Absolute address (11 bits)
        <immed>             Immediate data

Any valid TASM expression can appear in the  place  of  any  of  the
above symbolics.

The lines that are marked with an (8041),  (8022),  or (8021) on the
far  right are extended instructions that are available only if a -x
option has  been  invoked  on  the  command  line.  The  classes  of
instructions  (and their bit assignment in the class mask) are shown
below:

        BIT     PROCESSOR
        -------------------------------
        0       8X48, 8035, 8039, 8049
        1       8X41A
        2       8022
        3       8021

Thus, to enable the basic 8048 set plus the 8022 set, a -x5 could be
used on the command line.

Note that some of the base instructions should be disabled  for  the
8041, 8022, and 8021, but are not.

OPCODE  OPERANDS        DESCRIPTION
-------------------------------------------------------------------
ADD     A,Rn            Add Register to Acc
ADD     A,@R0           Add Indirect RAM to Acc
ADD     A,@R1           Add Indirect RAM to Acc
ADD     A,#<immed>      Add Immediate data to Acc

ADDC    A,Rn            Add Register to Acc with carry
ADDC    A,@R0           Add Indirect RAM to Acc with carry
ADDC    A,@R1           Add Indirect RAM to Acc with carry
ADDC    A,#<immed>      Add Immediate data to Acc with carry

ANL     A,Rn            AND Register to Acc
ANL     A,@R0           AND Indirect RAM to Acc
ANL     A,@R1           AND Indirect RAM to Acc
ANL     A,#<immed>      AND Immediate data to Acc
ANL     BUS,#<immed>    AND Immediate data to BUS
ANL     P1,#<immed>     AND Immediate data to port P1
ANL     P2,#<immed>     AND Immediate data to port P2

ANLD    P4,A            AND Acc to Expander port P4
TASM TABLES  Version 2.8                                      Page 5

ANLD    P5,A            AND Acc to Expander port P5
ANLD    P6,A            AND Acc to Expander port P6
ANLD    P7,A            AND Acc to Expander port P7

CALL    <addr11>        Call subroutine

CLR     A               Clear Acc
CLR     C               Clear Carry
CLR     F0              Clear Flag 0
CLR     F1              Clear Flag 1

CPL     A               Complement Acc
CPL     C               Complement Carry
CPL     F0              Complement Flag F0
CPL     F1              Complement Flag F1

DA      A               Decimal adjust Acc

DEC     A               Decrement Acc
DEC     Rn              Decrement Register

DIS     I               Disable Interrupts
DIS     TCNTI           Disable Timer/Counter Interrupt

DJNZ    Rn,<addr8>      Decrement Register and Jump if nonzero

EN      DMA             Enable DMA                           (8041)
EN      FLAGS           Enable Flags                         (8041)
EN      I               Enable External Interrupt
EN      TCNTI           Enable Timer/Counter Interrupt
ENT0    CLK             Enable Clock Output

IN      A,DBB           Input Data Bus to Acc                (8041)
IN      A,P0            Input Port 0 to Acc                  (8021)
IN      A,P1            Input Port 1 to Acc
IN      A,P2            Input Port 2 to Acc

INC     A               Increment Acc
INC     Rn              Increment Register
INC     @R0             Increment Indirect RAM
INC     @R1             Increment Indirect RAM

INS     A,BUS           Strobed Input of Bus to Acc

JB0     <addr8>         Jump if Acc bit 0 is set
JB1     <addr8>         Jump if Acc bit 1 is set
JB2     <addr8>         Jump if Acc bit 2 is set
JB3     <addr8>         Jump if Acc bit 3 is set
JB4     <addr8>         Jump if Acc bit 4 is set
JB5     <addr8>         Jump if Acc bit 5 is set
JB6     <addr8>         Jump if Acc bit 6 is set
JB7     <addr8>         Jump if Acc bit 7 is set
JMP     <addr11>        Jump
JC      <addr8>         Jump if Carry is set
JF0     <addr8>         Jump if Flag F0 is set
JF1     <addr8>         Jump if Flag F1 is set
TASM TABLES  Version 2.8                                      Page 6

JNC     <addr8>         Jump if Carry is clear
JNI     <addr8>         Jump if Interrupt input is clear
JNIBF   <addr8>         Jump if IBF is clear                 (8041)
JNT0    <addr8>         Jump if T0 is clear
JNT1    <addr8>         Jump if T1 is clear
JNZ     <addr8>         Jump if Acc is not zero
JOBF    <addr8>         Jump if OBF is set                   (8041)
JTF     <addr8>         Jump if Timer Flag is set
JT0     <addr8>         Jump if T0 pin is high
JT1     <addr8>         Jump if T1 pin is high
JZ      <addr8>         Jump if Acc is zero
JMPP    @A              Jump Indirect (current page)

MOV     A,PSW           Move PSW to Acc
MOV     A,Rn            Move Register to Acc
MOV     A,T             Move Timer/Counter to Acc
MOV     A,@R0           Move Indirect RAM to Acc
MOV     A,@R1           Move Indirect RAM to Acc
MOV     A,#<immed>      Move Immediate data to Acc
MOV     PSW,A           Move Acc to PSW
MOV     Rn,A            Move Acc to Register
MOV     Rn,#<immed>     Move Immediate data to Register
MOV     STS,A           Move Acc to STS                      (8041)
MOV     T,A             Move Acc to Timer/Counter
MOV     @R0,A           Move Acc to Indirect RAM
MOV     @R1,A           Move Acc to Indirect RAM
MOV     @R0,#<immed>    Move Immediate data to Indirect RAM
MOV     @R1,#<immed>    Move Immediate data to Indirect RAM

MOVD    A,P4            Move half-byte Port 4 to Acc (lower nibble)
MOVD    A,P5            Move half-byte Port 5 to Acc (lower nibble)
MOVD    A,P6            Move half-byte Port 6 to Acc (lower nibble)
MOVD    A,P7            Move half-byte Port 7 to Acc (lower nibble)
MOVD    P4,A            Move lower nibble of Acc to Port 4
MOVD    P5,A            Move lower nibble of Acc to Port 5
MOVD    P6,A            Move lower nibble of Acc to Port 6
MOVD    P7,A            Move lower nibble of Acc to Port 7

MOVP    A,@A            Move Indirect Program data to Acc
MOVP3   A,@A            Move Indirect Program data to Acc (page 3)

MOVX    A,@R0           Move Indirect External RAM to Acc
MOVX    A,@R1           Move Indirect External RAM to Acc
MOVX    @R0,A           Move Acc to Indirect External RAM
MOVX    @R1,A           Move Acc to Indirect External RAM

NOP                     No operation

ORL     A,Rn            OR Register to Acc
ORL     A,@R0           OR Indirect RAM to Acc
ORL     A,@R1           OR Indirect RAM to Acc
ORL     A,#<immed>      OR Immediate data to Acc
ORL     BUS,#<immed>    OR Immediate data to BUS
ORL     P1,#<immed>     OR Immediate data to port P1
ORL     P2,#<immed>     OR Immediate data to port P2

TASM TABLES  Version 2.8                                      Page 7

ORLD    P4,A            OR lower nibble of Acc with P4
ORLD    P5,A            OR lower nibble of Acc with P5
ORLD    P6,A            OR lower nibble of Acc with P6
ORLD    P7,A            OR lower nibble of Acc with P7

OUTL    BUS,A           Output Acc to Bus
OUT     DBB,A           Output Acc to DBB                    (8041)
OUTL    P0,A            Output Acc to Port P0                (8021)
OUTL    P1,A            Output Acc to Port P1
OUTL    P2,A            Output Acc to Port P2

RAD                     Move A/D Converter to Acc            (8022)

RET                     Return from subroutine
RETI                    Return from Interrupt w/o PSW restore(8022)
RETR                    Return from Interrupt w/  PSW restore

RL      A               Rotate Acc Left
RLC     A               Rotate Acc Left through Carry
RR      A               Rotate Acc Right
RRC     A               Rotate Acc Right through Carry

SEL     AN0             Select Analog Input 0                (8022)
SEL     AN1             Select Analog Input 1                (8022)
SEL     MB0             Select Memory Bank 0
SEL     MB1             Select Memory Bank 1
SEL     RB0             Select Register Bank 0
SEL     RB1             Select Register Bank 1

STOP    TCNT            Stop Timer/Counter
STRT    CNT             Start Counter
STRT    T               Start Timer

SWAP    A               Swap nibbles of Acc

XCH     A,Rn            Exchange Register with Acc
XCH     A,@R0           Exchange Indirect RAM with Acc
XCH     A,@R1           Exchange Indirect RAM with Acc

XCHD    A,@R0           Exchange lower nibble of Indirect RAM w/ Acc
XCHD    A,@R1           Exchange lower nibble of Indirect RAM w/ Acc

XRL     A,Rn            Exclusive OR Register to Acc
XRL     A,@R0           Exclusive OR Indirect RAM to Acc
XRL     A,@R1           Exclusive OR Indirect RAM to Acc
XRL     A,#<immed>      Exclusive OR Immediate data to Acc

See manufacturer's data for  a  more  complete  description  of  the
meaning    of     the     mnemonics    and     addressing     modes.
TASM TABLES  Version 2.8                                      Page 8

8051 INSTRUCTIONS AND ADDRESSING MODES

The following list shows the acceptable opcode mnemonics  and  their
corresponding  operand  formats for the 8051 version of TASM.  Where
'Rn' is seen,  R0 through R7  may  be  substituted.  Other  symbolic
fields are as follows:

        SYMBOLIC            DESCRIPTION
        -----------------------------------------------
        <addr11>            Absolute address (11 bits)
        <addr16>            Absolute address (16 bits)
        <bit>               Bit address
        <immed>             Immediate data
        <direct>            Direct RAM address
        <rel>               Relative address

Any valid TASM expression can appear in the  place  of  any  of  the
above symbolics.

OPCODE  OPERAND             DESCRIPTION
--------------------------------------------------------------------
ACALL   <addr11>            Absolute Call
ADD     A,Rn                Add Register to Acc
ADD     A,@R0               Add Indirect RAM to Acc
ADD     A,@R1               Add Indirect RAM to Acc
ADD     A,#<immed>          Add Immediate data to Acc
ADD     A,<direct>          Add Direct RAM to Acc
ADDC    A,Rn                Add Register to Acc with carry
ADDC    A,@R0               Add Indirect RAM to Acc with carry
ADDC    A,@R1               Add Indirect RAM to Acc with carry
ADDC    A,#<immed>          Add Immediate data to Acc with carry
ADDC    A,<direct>          Add Direct RAM to Acc with carry

AJMP    <addr11>            Absolute Jump

ANL     A,Rn                AND Register and Acc
ANL     A,@R0               AND Indirect RAM and Acc
ANL     A,@R1               AND Indirect RAM and Acc
ANL     A,#<immed>          AND Immediate data and Acc
ANL     A,<direct>          AND Direct RAM and Acc
ANL     C,/<direct>         AND Complement of direct bit to Carry
ANL     C,<direct>          AND direct bit to Carry
ANL     <direct>,A          AND Acc to direct RAM
ANL     <direct>,#<immed>   AND Immediate data and direct RAM

CJNE    A,#<immed>,<rel>    Compare Immediate to Acc   and JNE
CJNE    A,<direct>,<rel>    Compare direct RAM to Acc and JNE
CJNE    Rn,#<immed>,<rel>   Compare Immediate to Register and JNE
CJNE    @R0,#<immed>,<rel>  Compare Immediate to Indirect RAM and JNE
CJNE    @R1,#<immed>,<rel>  Compare Immediate to Indirect RAM and JNE

CLR     A                   Clear Accumulator
CLR     C                   Clear Carry
CLR     <direct>            Clear Direct RAM

CPL     A                   Complement Accumulator
TASM TABLES  Version 2.8                                      Page 9

CPL     C                   Complement Carry
CPL     <direct>            Complement Direct RAM

DA      A                   Decimal Adjust Accumulator
DEC     A                   Decrement Acc
DEC     Rn                  Decrement Register
DEC     @R0                 Decrement Indirect RAM
DEC     @R1                 Decrement Indirect RAM
DEC     <direct>            Decrement Direct RAM

DIV     AB                  Divide Acc by B

DJNZ    Rn,<rel>            Decrement Register and JNZ
DJNZ    <direct>,<rel>      Decrement Direct RAM and JNZ

INC     A                   Increment Acc
INC     Rn                  Increment Register
INC     @R0                 Increment Indirect RAM
INC     @R1                 Increment Indirect RAM
INC     DPTR                Increment Data Pointer
INC     <direct>            Increment Direct RAM

JB      <bit>,<rel>         Jump if Bit is set
JBC     <bit>,<rel>         Jump if Bit is set & clear Bit
JC      <rel>               Jump if Carry is set
JMP     @A+DPTR             Jump indirect relative to Data Pointer
JNB     <bit>,<rel>         Jump if Bit is clear
JNC     <rel>               Jump if Carry is clear
JNZ     <rel>               Jump if Acc is not zero
JZ      <rel>               Jump if Acc is zero

LCALL   <addr16>            Long Subroutine Call
LJMP    <addr16>            Long Jump

MOV     A,Rn                Move Register to Acc
MOV     A,@R0               Move Indirect RAM to Acc
MOV     A,@R1               Move Indirect RAM to Acc
MOV     A,#<immed>          Move Immediate data to Acc
MOV     A,<direct>          Move direct RAM to Acc
MOV     C,<bit>             Move bit to Acc
MOV     DPTR,#<immed>       Move immediate data to Data Pointer
MOV     Rn,A                Move Acc to Register
MOV     Rn,#<immed>         Move Immediate data to Register
MOV     Rn,<direct>         Move Direct RAM to Register
MOV     @R0,A               Move Acc to Indirect RAM
MOV     @R1,A               Move Acc to Indirect RAM
MOV     @R0,#<immed>        Move Immediate data to Indirect RAM
MOV     @R1,#<immed>        Move Immediate data to Indirect RAM
MOV     @R0,<direct>        Move Direct RAM to Indirect RAM
MOV     @R1,<direct>        Move Direct RAM to Indirect RAM
MOV     <direct>,A          Move Acc to Direct RAM
MOV     <bit>,C             Move Carry to Bit
MOV     <direct>,Rn         Move Register to Direct RAM
MOV     <direct>,@R0        Move Indirect RAM to Direct RAM
MOV     <direct>,@R1        Move Indirect RAM to Direct RAM
MOV     <direct>,#<immed>   Move Immediate data to Direct RAM
TASM TABLES  Version 2.8                                     Page 10

MOV     <direct>,<direct>   Move Direct RAM to Direct RAM
MOVC    A,@A+DPTR           Move code byte relative to DPTR to Acc
MOVC    A,@A+PC             Move code byte relative to PC to Acc

MOVX    A,@R0               Move external RAM to Acc
MOVX    A,@R1               Move external RAM to Acc
MOVX    A,@DPTR             Move external RAM to Acc (16 bit addr)
MOVX    @R0,A               Move Acc to external RAM
MOVX    @R1,A               Move Acc to external RAM
MOVX    @DPTR,A             Move Acc to external RAM (16 bit addr)

MUL     AB                  Multiply Acc by B

NOP                         No operation

ORL     A,Rn                OR Register and Acc
ORL     A,@R0               OR Indirect RAM and Acc
ORL     A,@R1               OR Indirect RAM and Acc
ORL     A,#<immed>          OR Immediate data and Acc
ORL     A,<direct>          OR Direct RAM and Acc
ORL     C,/<direct>         OR Complement of direct bit to Carry
ORL     C,<direct>          OR direct bit to Carry
ORL     <direct>,A          OR Acc to direct RAM
ORL     <direct>,#<immed>   OR Immediate data and direct RAM

POP     <direct>            Pop  from Stack and put in Direct RAM
PUSH    <direct>            Push from Direct RAM to Stack

RET                         Return from subroutine
RETI                        Return from Interrupt

RL      A                   Rotate Acc left
RLC     A                   Rotate Acc left through Carry
RR      A                   Rotate Acc right
RRC     A                   Rotate Acc right through Carry

SETB    C                   Set the Carry Bit
SETB    <bit>               Set Direct Bit

SJMP    <rel>               Short jump

SUBB    A,Rn                Subtract Register from Acc with Borrow
SUBB    A,@R0               Subtract Indirect RAM from Acc w/ Borrow
SUBB    A,@R1               Subtract Indirect RAM from Acc w/ Borrow
SUBB    A,#<immed>          Subtract Immediate data from Acc w/ Borrow
SUBB    A,<direct>          Subtract Direct RAM from Acc w/ Borrow

SWAP    A                   Swap nibbles of Acc

XCH     A,Rn                Exchange Acc with Register
XCH     A,@R0               Exchange Acc with Indirect RAM
XCH     A,@R1               Exchange Acc with Indirect RAM
XCH     A,<direct>          Exchange Acc with Direct RAM

XCHD    A,@R0               Exchange Digit in Acc with Indirect RAM
XCHD    A,@R1               Exchange Digit in Acc with Indirect RAM
TASM TABLES  Version 2.8                                     Page 11

XRL     A,Rn                Exclusive OR Register and Acc
XRL     A,@R0               Exclusive OR Indirect RAM and Acc
XRL     A,@R1               Exclusive OR Indirect RAM and Acc
XRL     A,#<immed>          Exclusive OR Immediate data and Acc
XRL     A,<direct>          Exclusive OR Direct RAM and Acc
XRL     <direct>,A          Exclusive OR Acc to direct RAM
XRL     <direct>,#<immed>   Exclusive OR Immediate data and direct RAM

Note  that  the above tables do not automatically define the various
mnemonics that may be  used  for  addressing  the  special  function
registers  of  the  8051.  The  user  may  wish  to set up a file of
equates (EQU's) that can be included in the  source  file  for  this
purpose.  The following illustrates some of the appropriate equates:


P0      .equ    080H    ;Port 0
SP      .equ    081H    ;Stack pointer
DPL     .equ    082H
DPH     .equ    083H
PCON    .equ    087H
TCON    .equ    088H
TMOD    .equ    089H
TL0     .equ    08AH
TL1     .equ    08BH
TH0     .equ    08CH
TH1     .equ    08DH
P1      .equ    090H    ;Port 1
SCON    .equ    098H
SBUF    .equ    099H
P2      .equ    0A0H    ;Port 2
IEC     .equ    0A8H
P3      .equ    0B0H    ;Port 3
IPC     .equ    0B8H
PSW     .equ    0D0H
ACC     .equ    0E0H    ;Accumulator
B       .equ    0F0H    ;Secondary Accumulator
;Now some bit addresses
P0.0    .equ    080H    ;Port 0 bit 0
P0.1    .equ    081H    ;Port 0 bit 1
P0.2    .equ    082H    ;Port 0 bit 2
P0.3    .equ    083H    ;Port 0 bit 3
P0.4    .equ    080H    ;Port 0 bit 4
P0.5    .equ    081H    ;Port 0 bit 5
P0.6    .equ    082H    ;Port 0 bit 6
P0.7    .equ    083H    ;Port 0 bit 7
ACC.0   .equ    0E0H    ;Acc bit 0
ACC.1   .equ    0E1H    ;Acc bit 1
ACC.2   .equ    0E2H    ;Acc bit 2
ACC.3   .equ    0E3H    ;Acc bit 3
ACC.4   .equ    0E4H    ;Acc bit 4
ACC.5   .equ    0E5H    ;Acc bit 5
ACC.6   .equ    0E6H    ;Acc bit 6
ACC.7   .equ    0E7H    ;Acc bit 7

See  the   manufacturer's   data  sheets   for   more   information.
TASM TABLES  Version 2.8                                     Page 12

8085 INSTRUCTIONS AND ADDRESSING MODES

The following list shows the acceptable opcode mnemonics  and  their
corresponding  operand  formats for the 8085  version of TASM.   The
following symbols are used in the table:

        SYMBOLIC            DESCRIPTION
        -----------------------------------------------
        <addr>              Absolute address (16 bits)
        <data>              Immediate data (8 bits)
        <data16>            Immediate data (16 bits)
        <reg>               Register (A,B,C,D,E,H,L)
        <rp>                Register pair (B,D,H,SP)
        <port>              Port address (0-255)
        <int>               Interrupt level (0 - 7)

Any valid TASM expression can appear in the  place  of  any  of  the
above symbolics except <reg>, <rp> and <int>.

OPCODE  OPERAND        DESCRIPTION
--------------------------------------------------------------------
ACI      <data>         Add immediate to A with carry
ADC      <reg>          Add <reg> to A with carry
ADC      M              Add indirect memory (HL) with carry
ADD      <reg>          Add <reg> to A
ADD      M              Add indirect memory (HL) to A
ADI      <data>         Add immediate to A

ANA      <reg>          And register with A
ANA      M              And indirect memory (HL) to A
ANI      <data>         And immediate to A

CALL     <addr>         Call subroutine at <addr>
CC       <addr>         Call subroutine if carry set
CNC      <addr>         Call subroutine if carry clear
CZ       <addr>         Call subroutine if zero
CNZ      <addr>         Call subroutine if non zero
CP       <addr>         Call subroutine if positive
CM       <addr>         Call subroutine if negative
CPE      <addr>         Call subroutine if even parity
CPO      <addr>         Call subroutine if odd  parity
CMA                     Complement A
CMC                     Complemennt carry
CMP      <reg>          Compare register with A
CMP      M              Compare indirect memory (HL) with A
CPI      <data>         Compare immediate data with A

DAA                     Decimal adjust A
DAD      <rp>           Add register pair to HL
DCR      <reg>          Decrement register
DCR      M              Decrement indirect memory (HL)
DCX      <rp>           Decrement register pair

DI                      Disable interrupts
EI                      Enable interrupts
HLT                     Halt
TASM TABLES  Version 2.8                                     Page 13

IN       <port>         Input on port
INR      <reg>          Increment register
INR      M              Increment indirect memory (HL)
INX      <rp>           Increment register pair

JMP      <addr>         Jump
JC       <addr>         Jump if carry set
JNC      <addr>         Jump if carry clear
JZ       <addr>         Jump if zero
JNZ      <addr>         Jump if not zero
JM       <addr>         Jump if minus
JP       <addr>         Jump if plus
JPE      <addr>         Jump if parity even
JPO      <addr>         Jump if parity odd

LDA      <addr>         Load A direct from memory
LDAX     B              Load A indirect from memory using BC
LDAX     D              Load A indirect from memory using DE
LHLD     <addr>         Load HL direct from memory
LXI      <rp>,<data16>  Load register pair with immediate data

MOV      <reg>,<reg>    Move register to register
MOV      <reg>,M        Move indirect memory (HL) to register
MVI      <reg>,<data>   Move immediate data to register

NOP                     No operation

ORA      <reg>          Or register with A
ORA      M              Or indirect memory (HL) with A
ORI      <data>         Or immediate data to A
OUT      <port>         Ouput to port

PCHL                    Jump to instruction at (HL)
POP      <rp>           Pop  register pair (excluding SP) from stack
PUSH     <rp>           Push register pair (excluding SP) onto stack
POP      PSW            Pop  PSW from stack
PUSH     PSW            Pop  PSW onto stack

RAL                     Rotate A left  with carry
RAR                     Rotate A right with carry
RLC                     Rotate A left  with branch carry
RRC                     Rotate A right with branch carry

RET                     Return from subroutine
RZ                      Return if zero
RNZ                     Return if non zero
RC                      Return if carry set
RNC                     Return if carry clear
RM                      Return if minus
RP                      Return if plus
RPE                     Return if parity even
RPO                     Return if parity odd

RIM                     Read interrupt mask
RST      <int>          Restart at vector <int>

TASM TABLES  Version 2.8                                     Page 14

SBB      <reg>          Subtract <reg> from A         with borrow
SBB      M              Subtract indirect memory (HL) with borrow
SBI      <data>         Subtract immediate from A     with borrow
SUB      <reg>          Subtract <reg> from A
SUB      M              Subtract indirect memory (HL) from A
SUI      <data>         Subtract immediate from A

SHLD     <addr>         Store HL
SIM                     Store Interrupt mask
SPHL                    Exchange SP with HL

STA      <addr>         Store A direct memory
STAX     B              Store A indirect using BC
STAX     D              Store A indirect using DE

STC                     Set carry

XRA      <reg>          Exclusive OR A with register
XRA      M              Exclusive Or A with indirect memory (HL)
XRI      <data>         Exclusive Or A with immediate data
XCHG                    Exchange DE with HL
XTHL                    Exchange HL with top of stack

See  the   manufacturer's   data  sheets   for   more   information.
TASM TABLES  Version 2.8                                     Page 15

Z80 INSTRUCTIONS AND ADDRESSING MODES

The following list shows the acceptable opcode mnemonics  and  their
corresponding   operand  formats for the Z80  version of TASM.   The
following symbols are used in the table:
        SYMBOLIC            DESCRIPTION
        -----------------------------------------------
        <addr>              Absolute address (16 bits)
        <bit>               Bit address
        <data>              Immediate data (8 bits)
        <data16>            Immediate data (16 bits)
        <disp>              Relative address
        <reg>               Register (A, B, C, D, E, H, or L)
        <rp>                Register pair (BC, DE, HL, or SP)
        <port>              Port (0 - 255)
        <cond>              Condition
                                NZ - not zero
                                Z  - zero
                                NC - not carry
                                C  - carry
                                PO - parity odd
                                PE - parity even
                                P  - positive
                                M  - minus

Any valid TASM expression can appear in the  place  of the   <addr>,
<bit>, <data>, <data16>, or <disp> symbolics.

OPCODE  OPERAND         DESCRIPTION
--------------------------------------------------------------------
ADC  A,<data>           Add immediate with carry to accumulator
ADC  A,<reg>            Add register with carry to accumulator
ADC  A,(HL)             Add indirect memory with carry to accumulator
ADC  A,(IX+<disp>)      Add indirect memory with carry to accumulator
ADC  A,(IY+<disp>)      Add indirect memory with carry to accumulator
ADC  HL,<rp>            Add register pair with carry to HL

ADD  A,<data>           Add immediate to accumulator
ADD  A,<reg>            Add register to accumulator
ADD  A,(HL)             Add indirect memory to accumulator
ADD  A,(IX+<disp>)      Add indirect memory to accumulator
ADD  A,(IY+<disp>)      Add indirect memory to accumulator
ADD  HL,<rp>            Add register pair to HL
ADD  IX,<rp>            Add register pair to index register
ADD  IY,<rp>            Add register pair to index register

AND  <data>             And immediate with accumulator
AND  <reg>              And register  with accumulator
AND  (HL)               And memory with accumulator
AND  (IX+<disp>)        And memory with accumulator
AND  (IY+<disp>)        And memory with accumulator

BIT  <bit>,<reg>        Test <bit> in register
BIT  <bit>,(HL)         Test <bit> in indirect memory
BIT  <bit>,(IY+<disp>)  Test <bit> in indirect memory
BIT  <bit>,(IX+<disp>)  Test <bit> in indirect memory
TASM TABLES  Version 2.8                                     Page 16

CALL <addr>             Call the routine at <addr>
CALL <cond>,<addr>      Call the routine if <cond> is satisfied

CCF                     Complement carry flag

CP   <data>             Compare immediate data with accumulator
CP   <reg>              Compare register with accumulator
CP   (HL)               Compare indirect memory with accumulator
CP   (IX+<disp>)        Compare indirect memory with accumulator
CP   (IY+<disp>)        Compare indirect memory with accumulator
CPD                     Compare accumulator with memory and
                            decrement address and byte counters
CPDR                    Compare accumulator with memory and
                            decrement address and byte counter,
                            continue until match is found or
                            byte counter is zero

CPI                     Compare accumulator with memory and
                            increment address and byte counters
CPIR                    Compare accumulator with memory and
                            increment address and byte counter,
                            continue until match is found or
                            byte counter is zero
CPL                     Complement the accumulator
DAA                     Decimal adjust accumulator
DEC  <reg>              Decrement register contents
DI                      Disable interrupts
DJNZ <disp>             Decrement reg B and jump relative if zero
EI                      Enable interrupts
EX   AF,AF'             Exchange program status and alt program stat
EX   DE,HL              Exchange DE and HL contents
EX   (SP),HL            Exchange contents of HL and top of stack
EX   (SP),IX            Exchange contents of IX and top of stack
EX   (SP),IY            Exchange contents of IY and top of stack
EXX                     Exchange register pairs and alt reg pairs
HALT                    Program execution stops
IM   0                  Interrupt mode 0
IM   1                  Interrupt mode 1
IM   2                  Interrupt mode 2
IN   A,<port>           Input port to accumulator
INC  <reg>              Increment contents of register
INC  <rp>               Increment contents of register pair
INC  IX                 Increment IX
INC  IY                 Increment IY
INC  (HL)               Increment indirect memory
INC  (IX+<disp>)        Increment indirect memory
INC  (IY+<disp>)        Increment indirect memory
IND                     Input to memory and decrement pointer
INDR                    Input to memory and decrement pointer until
                            byte counter is zero
INI                     Input to memory and increment pointer
INIR                    Input to memory and increment pointer until
                            byte counter is zero
IN   <reg>,(C)          Input to register

JP   <addr>             Jump to location
TASM TABLES  Version 2.8                                     Page 17

JP   <cond>,<addr>      Jump to location if condition satisifed
JP   (HL)               Jump to location pointed to by HL
JP   (IX)               Jump to location pointed to by IX
JP   (IY)               Jump to location pointed to by IY

JR   <disp>             Jump relative
JR   C,<disp>           Jump relative if carry is set
JR   NC,<disp>          Jump relative if carry bit is reset
JR   NZ,<disp>          Jump relative if zero flag is reset
JR   Z,<disp>           Jump relative if zero flag is set

LD   A,I                Move interrupt vector contents to accumulator
LD   A,R                Move refresh reg contents to accumulator
LD   A,(<addr>)         Load accumulator indirect from memory
LD   A,(<rp>)           Load accumulator indirect from memory by <rp>
LD   <reg>,<reg>        Load source register to destination register
LD   <rp>,(<addr>)      Load register pair indirect from memory
LD   IX,(<addr>)        Load IX indirect from memory
LD   IY,(<addr>)        Load IY indirect from memory
LD   I,A                Load interrup vector from accumulator
LD   R,A                Load refresh register from accumulator
LD   <reg>,<data>       Load register with immediate data
LD   <rp>,<data16>      Load register pair with immediate data
LD   IX,<data16>        Load  IX  with immediate data
LD   IY,<data16>        Load  IY  with immediate data
LD   <reg>,(HL)         Load register indirect from memory
LD   <reg>,(IX+<disp>)  Load register indirect from memory
LD   <reg>,(IY+<disp>)  Load register indirect from memory
LD   SP,HL              Load contents of HL to stack pointer
LD   SP,IX              Load contents of IX to stack pointer
LD   SP,IY              Load contents of IY to stack pointer
LD   (addr),A           Load contents of A to memory
LD   (<addr>),HL        Load contents of HL to memory
LD   (<addr>),<rp>      Load contents of register pair to memory
LD   (<addr>),IX        Load contents of IX to memory
LD   (<addr>),IY        Load contents of IY to memory
LD   (HL),<data>        Load immediate into indirect memory
LD   (IX+<disp>),<data> Load immediate into indirect memory
LD   (IY+<disp>),<data> Load immediate into indirect memory
LD   (HL),<reg>         Load register  into indirect memory
LD   (IX+<disp>),<reg>  Load register  into indirect memory
LD   (IY+<disp>),<reg>  Load register  into indirect memory
LD   (<rp>),A           Load accumulator into indirect memory
LDD                     Transfer data between memory and decrement
                            destination and source addresses
LDDR                    Transfer data between memory until byte
                            counter is zero, decrement destintation
                            and source addresses
LDI                     Transfer data between memory and increment
                            destination and source addresses
LDIR                    Transfer data between memory until byte
                            counter is zero, increment destination
                            and source addresses
NEG                     Negate contents of accumulator
NOP                     No operation
OR   <data>             Or immediate with accumulator
TASM TABLES  Version 2.8                                     Page 18

OR   <reg>              Or register with accumulator
OR   (HL)               Or indirect memory with accumulator
OR   (IX+<disp>)        Or indirect memory with accumulator
OR   (IY+<disp>)        Or indirect memory with accumulator
OUT  (C),<reg>          Output from registor
OUTD                    Output from memory, decrement address
OTDR                    Output from memory, decrement address
                            continue until reg B is zero
OUTI                    Output from memory, increment address
OTIR                    Output from memory, increment address
                            continue until reg B is zero
OUT  <port>,A           Output from accumulator
POP  <rp>               Load register pair from top of stack
POP  IX                 Load IX from top of stack
POP  IY                 Load IY from top of stack
PUSH <rp>               Store resister pair on top of stack
PUSH IX                 Store IX on top of stack
PUSH IY                 Store IY on top of stack
RES  <bit>,<reg>        Reset register bit
RES  <bit>,(HL)         Reset bit at indirect memory location
RES  <bit>,(IX+disp)    Reset bit at indirect memory location
RES  <bit>,(IY+<disp>)  Reset bit at indirect memory location
RET                     Return from subroutine
RET  <cond>             Return from subroutine if condition true
RETI                    Return from interrupt
RETN                    Return from non-maskable interrupt
RL   <reg>              Rotate left through carry register contents
RL   (HL)               Rotate left through carry indirect memory
RL   (IX+<disp>)        Rotate left through carry indirect memory
RL   (IY+<disp>)        Rotate left through carry indirect memory
RLA                     Rotate left through carry accumulator
RLC  <reg>              Rotate left branch  carry register contents
RLC  (HL)               Rotate left branch  carry indirect memory
RLC  (IX+<disp>)        Rotate left branch  carry indirect memory
RLC  (IY+<disp>)        Rotate left branch  carry indirect memory
RLCA                    Rotate left accumulator
RLD                     Rotate one BCD digit left between the
                            accumulator and memory
RR   <reg>              Rotate right through carry register contents
RR   (HL)               Rotate right through carry indirect memory
RR   (IX+<disp>)        Rotate right through carry indirect memory
RR   (IY+<disp>)        Rotate right through carry indirect memory
RRA                     Rotate right through carry accumulator
RRC  <reg>              Rotate right branch  carry register contents
RRC  (HL)               Rotate right branch  carry indirect memory
RRC  (IX+<disp>)        Rotate right branch  carry indirect memory
RRC  (IY+<disp>)        Rotate right branch  carry indirect memory
RRCA                    Rotate right branch  carry accumulator
RRD                     Rotate one BCD digit right between the
                            accumulator and memory
RST                     Restart
SBC  A,<data>           Subtract data            from A with borrow
SBC  A,<reg>            Subtract register        from A with borrow
SBC  A,(HL)             Subtract indirect memory from A with borrow
SBC  A,(IX+<disp>)      Subtract indirect memory from A with borrow
SBC  A,(IY+<disp>)      Subtract indirect memory from A with borrow
TASM TABLES  Version 2.8                                     Page 19

SBC  HL,<rp>            Subtract register pair from HL with borrow
SCF                     Set carry flag
SET  <bit>,<reg>        Set register bit
SET  <bit>,(HL)         Set indirect memory bit
SET  <bit>,(IX+<disp>)  Set indirect memory bit
SET  <bit>,(IY+<disp>)  Set indirect memory bit
SLA  <reg>              Shift register left arithmetic
SLA  (HL)               Shift indirect memory left arithmetic
SLA  (IX+<disp>)        Shift indirect memory left arithmetic
SLA  (IY+<disp>)        Shift indirect memory left arithmetic
SRA  <reg>              Shift register right arithmetic
SRA  (HL)               Shift indirect memory right arithmetic
SRA  (IX+<disp>)        Shift indirect memory right arithmetic
SRA  (IY+<disp>)        Shift indirect memory right arithmetic
SRL  <reg>              Shift register right logical
SRL  (HL)               Shift indirect memory right logical
SRL  (IX+<disp>)        Shift indirect memory right logical
SRL  (IY+<disp>)        Shift indirect memory right logical
SUB  <data>             Subtract immediate from accumulator
SUB  <reg>              Subtract register from accumulator
SUB  (HL)               Subtract indirect memory from accumulator
SUB  (IX+<disp>)        Subtract indirect memory from accumulator
SUB  (IY+<disp>)        Subtract indirect memory from accumulator
XOR  <data>             Exclusive or immediate with accumulator
XOR  <reg>              Exclusive or register with accumulator
XOR  (HL)               Exclusive or indirect memory with accumulator
XOR  (IX+<disp>)        Exclusive or indirect memory with accumulator
XOR  (IY+<disp>)        Exclusive or indirect memory with accumulator

See  the   manufacturer's   data  sheets   for   more   information.
TASM TABLES  Version 2.8                                     Page 20

6805 INSTRUCTIONS AND ADDRESSING MODES

The following list shows the acceptable opcode mnemonics  and  their
corresponding  operand  formats for the 6805  version of TASM.   The
following symbols are used in the table:

        SYMBOLIC            DESCRIPTION
        -----------------------------------------------
        <addr>              Absolute address (16 bits)
        <addr8>             Absolute address (8 bits)
        <bit>               Bit address
        <data>              Immediate data (8 bits)
        <rel>               Relative address

Any valid TASM expression can appear in the  place  of the   <addr>,
<addr8>, <bit>, <data>, or <rel> symbolics.

OPCODE  OPERAND         DESCRIPTION
--------------------------------------------------------------
ADC     #<data>         Add with carry, immediate
ADC     ,X              Add with carry, indexed, no offset
ADC     <addr8>,X       Add with carry, indexed, 1 byte offset
ADC     <addr>,X        Add with carry, indexed, 2 byte offset
ADC     <addr8>         Add with carry, direct
ADC     <addr>          Add with carry, extended

ADD     #<data>         Add, immediate
ADD     ,X              Add, indexed, no offset
ADD     <addr8>,X       Add, indexed, 1 byte offset
ADD     <addr>,X        Add, indexed, 2 byte offset
ADD     <addr8>         Add, direct
ADD     <addr>          Add, extended

AND     #<data>         And, immediate
AND     ,X              And, indexed, no offset
AND     <addr8>,X       And, indexed, 1 byte offset
AND     <addr>,X        And, indexed, 2 byte offset
AND     <addr8>         And, direct
AND     <addr>          And, extended

ASLA                    Arithmetic Shift Left, accumulator
ASLX                    Arithmetic Shift Left, index register
ASL     <addr8>         Arithmetic Shift Left, direct
ASL     ,X              Arithmetic Shift Left, indexed, no offset
ASL     <addr8>,X       Arithmetic Shift Left, indexed, 1 byte offset

ASRA                    Arithmetic Shift Right, accumulator
ASRX                    Arithmetic Shift Right, index register
ASR     <addr8>         Arithmetic Shift Right, direct
ASR     ,X              Arithmetic Shift Right, indexed, no offset
ASR     <addr8>,X       Arithmetic Shift Right, indexed, 1 byte offset

BCC     <rel>           Branch if carry clear
BCLR    <bit>,<addr8>   Bit Clear in memory
BCS     <rel>           Branch if carry set
BEQ     <rel>           Branch if equal
TASM TABLES  Version 2.8                                     Page 21

BHCC    <rel>           Branch if half carry clear
BHCS    <rel>           Branch if half carry set
BHI     <rel.           Branch if higher
BHS     <rel>           Branch if higher or same
BIH     <rel>           Branch if interrupt line is high
BIL     <rel>           Branch if interrupt is low

BIT     #<data>         Bit test, immediate
BIT     ,X              Bit test, indexed, no offset
BIT     <addr8>,X       Bit test, indexed, 1 byte offset
BIT     <addr>,X        Bit test, indexed, 2 byte offset
BIT     <addr8>         Bit test, direct
BIT     <addr>          Bit test, extended

BLO     <rel>           Branch if lower
BLS     <rel>           Branch if lower or same
BMC     <rel>           Branch if interrupt mask is clear
BMI     <rel>           Branch if minus
BMS     <rel>           Branch if interuupt mask bit is set
BNE     <rel>           Branch if not equal
BPL     <rel>           Branch if plus
BRA     <rel>           Branch always
BRCLR   <bit>,<addr8>,<rel>     Branch if bit is clear
BRN     <rel>           Branch never
BRSET   <bit>,<addr8>,<rel>     Branch if bit is set
BSET    <bit>,<addr8>   Bit set in memory
BSR     <rel>           Branch to subroutine

CLC                     Clear carry bit
CLI                     Clear interuupt mask bit

CLRA                    Clear, accumulator
CLRX                    Clear, index register
CLR     <addr8>         Clear, direct
CLR     ,X              Clear, indexed, no offset
CLR     <addr8>,X       Clear, indexed, 1 byte offset

CMP     #<data>         Compare Acc, immediate
CMP     ,X              Compare Acc, indexed, no offset
CMP     <addr8>,X       Compare Acc, indexed, 1 byte offset
CMP     <addr>,X        Compare Acc, indexed, 2 byte offset
CMP     <addr8>         Compare Acc, direct
CMP     <addr>          Compare Acc, extended

COMA                    Complement, accumulator
COMX                    Complement, index register
COM     <addr8>         Complement, direct
COM     ,X              Complement, indexed, no offset
COM     <addr8>,X       Complement, indexed, 1 byte offset

CPX     #<data>         Compare Index, immediate
CPX     ,X              Compare Index, indexed, no offset
CPX     <addr8>,X       Compare Index, indexed, 1 byte offset
CPX     <addr>,X        Compare Index, indexed, 2 byte offset
CPX     <addr8>         Compare Index, direct
CPX     <addr>          Compare Index, extended
TASM TABLES  Version 2.8                                     Page 22

DECA                    Decrement, accumulator
DECX                    Decrement, index register
DEX                     Decrement, index register (alternate of DECX)
DEC     <addr8>         Decrement, direct
DEC     ,X              Decrement, indexed, no offset
DEC     <addr8>,X       Decrement, indexed, 1 byte offset

EOR     #<data>         Exclusive OR, immediate
EOR     ,X              Exclusive OR, indexed, no offset
EOR     <addr8>,X       Exclusive OR, indexed, 1 byte offset
EOR     <addr>,X        Exclusive OR, indexed, 2 byte offset
EOR     <addr8>         Exclusive OR, direct
EOR     <addr>          Exclusive OR, extended

INCA                    Increment, accumulator
INCX                    Increment, index register
INX                     Increment, index register (alternate of INCX)
INC     <addr8>         Increment, direct
INC     ,X              Increment, indexed, no offset
INC     <addr8>,X       Increment, indexed, 1 byte offset

JMP     ,X              Jump, indexed, no offset
JMP     <addr8>,X       Jump, indexed, 1 byte offset
JMP     <addr>,X        Jump, indexed, 2 byte offset
JMP     <addr8>         Jump, direct
JMP     <addr>          Jump, extended

JSR     ,X              Jump Subroutine, indexed, no offset
JSR     <addr8>,X       Jump Subroutine, indexed, 1 byte offset
JSR     <addr>,X        Jump Subroutine, indexed, 2 byte offset
JSR     <addr8>         Jump Subroutine, direct
JSR     <addr>          Jump Subroutine, extended

LDA     #<data>         Load Acc, immediate
LDA     ,X              Load Acc, indexed, no offset
LDA     <addr8>,X       Load Acc, indexed, 1 byte offset
LDA     <addr>,X        Load Acc, indexed, 2 byte offset
LDA     <addr8>         Load Acc, direct
LDA     <addr>          Load Acc, extended

LDX     #<data>         Load Index, immediate
LDX     ,X              Load Index, indexed, no offset
LDX     <addr8>,X       Load Index, indexed, 1 byte offset
LDX     <addr>,X        Load Index, indexed, 2 byte offset
LDX     <addr8>         Load Index, direct
LDX     <addr>          Load Index, extended

LSLA                    Logical Shift Left, accumulator
LSLX                    Logical Shift Left, index register
LSL     <addr8>         Logical Shift Left, direct
LSL     ,X              Logical Shift Left, indexed, no offset
LSL     <addr8>,X       Logical Shift Left, indexed, 1 byte offset

LSRA                    Logical Shift Right, accumulator
LSRX                    Logical Shift Right, index register
LSR     <addr8>         Logical Shift Right, direct
TASM TABLES  Version 2.8                                     Page 23

LSR     ,X              Logical Shift Right, indexed, no offset
LSR     <addr8>,X       Logical Shift Right, indexed, 1 byte offset

NEGA                    Negate, accumulator
NEGX                    Negate, index register
NEG     <addr8>         Negate, direct
NEG     ,X              Negate, indexed, no offset
NEG     <addr8>,X       Negate, indexed, 1 byte offset

NOP                     No Operation

ORA     #<data>         Inclusive OR Acc, immediate
ORA     ,X              Inclusive OR Acc, indexed, no offset
ORA     <addr8>,X       Inclusive OR Acc, indexed, 1 byte offset
ORA     <addr>,X        Inclusive OR Acc, indexed, 2 byte offset
ORA     <addr8>         Inclusive OR Acc, direct
ORA     <addr>          Inclusive OR Acc, extended

ROLA                    Rotate Left thru Carry, accumulator
ROLX                    Rotate Left thru Carry, index register
ROL     <addr8>         Rotate Left thru Carry, direct
ROL     ,X              Rotate Left thru Carry, indexed, no offset
ROL     <addr8>,X       Rotate Left thru Carry, indexed, 1 byte offset

RORA                    Rotate Right thru Carry, accumulator
RORX                    Rotate Right thru Carry, index register
ROR     <addr8>         Rotate Right thru Carry, direct
ROR     ,X              Rotate Right thru Carry, indexed, no offset
ROR     <addr8>,X       Rotate Right thru Carry, indexed, 1 byte offset

RSP                     Reset Stack Pointer
RTI                     Return from Interrupt
RTS                     Return from Subroutine

SBC     #<data>         Subtract with Carry, immediate
SBC     ,X              Subtract with Carry, indexed, no offset
SBC     <addr8>,X       Subtract with Carry, indexed, 1 byte offset
SBC     <addr>,X        Subtract with Carry, indexed, 2 byte offset
SBC     <addr8>         Subtract with Carry, direct
SBC     <addr>          Subtract with Carry, extended

SEC                     Set carry bit
SEI                     Set interrupt Mask bit

STA     #<data>         Store Acc, immediate
STA     ,X              Store Acc, indexed, no offset
STA     <addr8>,X       Store Acc, indexed, 1 byte offset
STA     <addr>,X        Store Acc, indexed, 2 byte offset
STA     <addr8>         Store Acc, direct
STA     <addr>          Store Acc, extended

STOP                    Enable IRQ, Stop Oscillator

STX     #<data>         Store Index, immediate
STX     ,X              Store Index, indexed, no offset
STX     <addr8>,X       Store Index, indexed, 1 byte offset
TASM TABLES  Version 2.8                                     Page 24

STX     <addr>,X        Store Index, indexed, 2 byte offset
STX     <addr8>         Store Index, direct
STX     <addr>          Store Index, extended

SUB     #<data>         Subtract, immediate
SUB     ,X              Subtract, indexed, no offset
SUB     <addr8>,X       Subtract, indexed, 1 byte offset
SUB     <addr>,X        Subtract, indexed, 2 byte offset
SUB     <addr8>         Subtract, direct
SUB     <addr>          Subtract, extended

SWI                     Software Interrupt

TAX                     Transfer Acc to Index

TSTA                    Test for neg or zero, accumulator
TSTX                    Test for neg or zero, index register
TST     <addr8>         Test for neg or zero, direct
TST     ,X              Test for neg or zero, indexed, no offset
TST     <addr8>,X       Test for neg or zero, indexed, 1 byte offset

TXA                     Transfer Index to Acc

WAIT                    Enable Interrupt, Stop Processor

See  the   manufacturer's   data  sheets   for   more   information.
TASM TABLES  Version 2.8                                     Page 25

TMS32010 INSTRUCTIONS AND ADDRESSING MODES

The following list shows the acceptable opcode mnemonics  and  their
corresponding   operand  formats for the TMS32010   version of TASM.
The following symbols are used in the table:

        SYMBOLIC            DESCRIPTION
        -----------------------------------------------
        <ar>                Auxiliary register (AR0, AR1)
        <arp>               Auxiliary register pointer
        <dma>               Direct memory address
        <pma>               Program memory address
        <port>              Port address (0 - 7)
        <shift>             Shift count  (0 - 15)
        <const1>            Constant (1 bit)
        <const8>            Constant (8 bit)
        <const13>           Constant (13 bit)

Any valid TASM expression can appear in the  place  of  any  of  the
above symbolics.

OPCODE   OPERAND            DESCRIPTION
--------------------------------------------------------------------
ABS                         Absolute value of ACC

ADD      *+,<shift>,<arp>   Add to ACC with shift
ADD      *-,<shift>,<arp>
ADD      *, <shift>,<arp>
ADD      *+,<shift>
ADD      *-,<shift>
ADD      *, <shift>
ADD      *+
ADD      *-
ADD      *
ADD      <dma>,<shift>
ADD      <dma>

ADDH     *+,<arp>           Add to high-order ACC bits
ADDH     *-,<arp>
ADDH     *, <arp>
ADDH     *+
ADDH     *-
ADDH     *
ADDH     <dma>

ADDS     *+,<arp>           Add to ACC with no sign extension
ADDS     *-,<arp>
ADDS     *, <arp>
ADDS     *+
ADDS     *-
ADDS     *
ADDS     <dma>

AND      *+,<arp>           AND with ACC
AND      *-,<arp>
AND      *, <arp>
TASM TABLES  Version 2.8                                     Page 26

AND      *+
AND      *-
AND      *
AND      <dma>

APAC                        Add P register to ACC

B        <pma>              Branch unconditionally
BANZ     <pma>              Branch on auxiliary register not zero
BGEZ     <pma>              Branch if ACC >= 0
BGZ      <pma>              Branch if ACC >  0
BIOZ     <pma>              Branch on BIO- = 0
BLEZ     <pma>              Branch if ACC <= 0
BLZ      <pma>              Branch if ACC <  0
BNZ      <pma>              Branch if ACC <> 0
BV       <pma>              Branch on overflow
BZ       <pma>              Branch if ACC =  0

CALA                        Call subroutine from ACC
CALL     <pma>              Call subroutine at <pma>

DINT                        Disable interrupt

DMOV     *+,<arp>           Data move in memory
DMOV     *-,<arp>
DMOV     *, <arp>
DMOV     *+
DMOV     *-
DMOV     *
DMOV     <dma>

EINT                        Enable Interrupt

IN       *+,<port> ,<arp>   Input data from port
IN       *-,<port> ,<arp>
IN       * ,<port> ,<arp>
IN       *+,<port>
IN       *-,<port>
IN       * ,<port>
IN       <dma>,<port>

LAC      *+,<shift>,<arp>   Load ACC with shift
LAC      *-,<shift>,<arp>
LAC      *, <shift>,<arp>
LAC      *+,<shift>
LAC      *-,<shift>
LAC      *, <shift>
LAC      *+
LAC      *-
LAC      *
LAC      <dma>,<shift>
LAC      <dma>

LACK     <const8>                   Load ACC with 8 bit constant

LAR      <ar>,*+,<arp>              Load auxiliary Register
TASM TABLES  Version 2.8                                     Page 27

LAR      <ar>,*-,<arp>
LAR      <ar>,*, <arp>
LAR      <ar>,*+
LAR      <ar>,*-
LAR      <ar>,*
LAR      <ar>,<dma>

LARK     <ar>,<const8>              Load aux register with constant
LARP     <const1>                   Load aux register pointer immed

LDP      *+,<arp>                   Load data memory page pointer
LDP      *-,<arp>
LDP      *, <arp>
LDP      *+
LDP      *-
LDP      *
LDP      <dma>

LDPK     <const1>                   Load data page pointer immediate

LST      *+,<arp>                   Load status from data memory
LST      *-,<arp>
LST      *, <arp>
LST      *+
LST      *-
LST      *
LST      <dma>

LT       *+,<arp>                   Load T register
LT       *-,<arp>
LT       *, <arp>
LT       *+
LT       *-
LT       *
LT       <dma>

LTA      *+,<arp>                   Load T register and accumulate
LTA      *-,<arp>                     product
LTA      *, <arp>
LTA      *+
LTA      *-
LTA      *
LTA      <dma>

LTD      *+,<arp>                   Load T reg, accumulate product,
LTD      *-,<arp>                     and move
LTD      *, <arp>
LTD      *+
LTD      *-
LTD      *
LTD      <dma>

MAR      *+,<arp>                   Modify auxiliary register
MAR      *-,<arp>
MAR      *, <arp>
MAR      *+
TASM TABLES  Version 2.8                                     Page 28

MAR      *-
MAR      *
MAR      <dma>

MPY      *+,<arp>                   Multiply
MPY      *-,<arp>
MPY      *, <arp>
MPY      *+
MPY      *-
MPY      *
MPY      <dma>

MPYK     <const13>                  Multiply immediate

NOP                                 No Operation

OR       *+,<arp>                   OR  with low order bits of ACC
OR       *-,<arp>
OR       *, <arp>
OR       *+
OR       *-
OR       *
OR       <dma>

OUT      *+,<port>,<arp>            Output data to port
OUT      *-,<port>,<arp>
OUT      *, <port>,<arp>
OUT      *+,<port>
OUT      *-,<port>
OUT      *, <port>
OUT      <dma>,<port>

PAC                                 Load ACC with P register
POP                                 Pop top of stack to ACC
PUSH                                Push ACC onto stack
RET                                 Return from subroutine
ROVM                                Reset overflow mode register

SACH     *+,<shift>,<arp>           Store ACC high with shift
SACH     *-,<shift>,<arp>             Note: shift can only be 0, 1,
SACH     *, <shift>,<arp>                   or 4
SACH     *+,<shift>
SACH     *-,<shift>
SACH     *, <shift>
SACH     *+
SACH     *-
SACH     *
SACH     <dma>,<shift>
SACH     <dma>

SACL     *+,<arp>                   Store ACC low
SACL     *-,<arp>
SACL     *, <arp>
SACL     *+
SACL     *-
SACL     *
TASM TABLES  Version 2.8                                     Page 29

SACL     <dma>

SAR      <ar>,*+,<arp>              Store auxiliary Register
SAR      <ar>,*-,<arp>
SAR      <ar>,*, <arp>
SAR      <ar>,*+
SAR      <ar>,*-
SAR      <ar>,*
SAR      <ar>,<dma>

SOVM                                Set overflow mode register
SPAC                                Subtract P register from ACC

SST      *+,<arp>                   Store status
SST      *-,<arp>
SST      *, <arp>
SST      *+
SST      *-
SST      *
SST      <dma>

SUB      *+,<shift>,<arp>           Subtract from ACC with shift
SUB      *-,<shift>,<arp>
SUB      *, <shift>,<arp>
SUB      *+,<shift>
SUB      *-,<shift>
SUB      *, <shift>
SUB      *+
SUB      *-
SUB      *
SUB      <dma>,<shift>
SUB      <dma>

SUBC     *+,<arp>                   Conditional subtract
SUBC     *-,<arp>
SUBC     *, <arp>
SUBC     *+
SUBC     *-
SUBC     *
SUBC     <dma>

SUBH     *+,<arp>                   Subtract from high-order ACC
SUBH     *-,<arp>
SUBH     *, <arp>
SUBH     *+
SUBH     *-
SUBH     *
SUBH     <dma>

SUBS     *+,<arp>                   Subtract from low ACC with
SUBS     *-,<arp>                     sign-extension suppressed
SUBS     *, <arp>
SUBS     *+
SUBS     *-
SUBS     *
SUBS     <dma>
TASM TABLES  Version 2.8                                     Page 30

TBLR     *+,<arp>                   Table Read
TBLR     *-,<arp>
TBLR     *, <arp>
TBLR     *+
TBLR     *-
TBLR     *
TBLR     <dma>

TBLW     *+,<arp>                   Table Write
TBLW     *-,<arp>
TBLW     *, <arp>
TBLW     *+
TBLW     *-
TBLW     *
TBLW     <dma>

XOR      *+,<arp>                   Exclusive OR with low bits of ACC
XOR      *-,<arp>
XOR      *, <arp>
XOR      *+
XOR      *-
XOR      *
XOR      <dma>

ZAC                                 Zero the ACC

ZALH     *+,<arp>                   Zero ACC and load high
ZALH     *-,<arp>
ZALH     *, <arp>
ZALH     *+
ZALH     *-
ZALH     *
ZALH     <dma>

ZALS     *+,<arp>                   Zero ACC and load low with
ZALS     *-,<arp>                     sign extension suppressed
ZALS     *, <arp>
ZALS     *+
ZALS     *-
ZALS     *
ZALS     <dma>

See manufacturer's data for more information.

TASM TABLES  Version 2.8                                     Page 31

TMS7000 INSTRUCTIONS AND ADDRESSING MODES

The following list shows the acceptable opcode mnemonics  and  their
corresponding  operand   formats  for the TMS7000  version of  TASM.
The following symbolic fields used in the table:

    SYMBOLIC        DESCRIPTION
    -------------------------------------------
    <iop>           Immediate data (8 bits)
    <Rn>            Register file (memory locations 0 to 127 or
                       0 to 255 depending on on-chip RAM)
    <Pn>            Peripheral file (0-255)
    <rel>           Program address (relative)
    <addr>          Program address (16 bit)
    <trap>          Trap number (0-23)

Any valid TASM expression can appear in the  place  of  any  of  the
above symbolics.

Note  that   TASM  allows   an  alternate   syntax  for   expressing
indirection.  Parenthesis can be  replaced with brackets (which  are
less ambiguous because they do not occur in expressions).  Thus, the
following are equivalent:

    BR      @addr1(B)
    BR      @addr1[B]


OPCODE  OPERANDS
---------------------------------------
ADC    B,A
ADC    %<iop>,A
ADC    %<iop>,B
ADC    %<iop>,<Rn>
ADC    <Rn>,A
ADC    <Rn>,B
ADC    <Rn>,<Rn>

ADD    B,A
ADD    %<iop>,A
ADD    %<iop>,B
ADD    %<iop>,<Rn>
ADD    <Rn>,A
ADD    <Rn>,B
ADD    <Rn>,<Rn>

AND    B,A
AND    %<iop>,A
AND    %<iop>,B
AND    %<iop>,<Rn>
AND    <Rn>,A
AND    <Rn>,B
AND    <Rn>,<Rn>

ANDP   A,<Pn>
ANDP   B,<Pn>
TASM TABLES  Version 2.8                                     Page 32

ANDP   %<iop>,<Pn>

BTJO   B,A,<rel>
BTJO   %<iop>,A,<rel>
BTJO   %<iop>,B,<rel>
BTJO   %<iop>,<Rn>,<rel>
BTJO   <Rn>,A,<rel>
BTJO   <Rn>,B,<rel>
BTJO   <Rn>,<Rn>,<rel>

BTJOP  A,<Pn>,<rel>
BTJOP  B,<Pn>,<rel>
BTJOP  %<iop>,<Pn>,<rel>

BTJZ   B,A,<rel>
BTJZ   %<iop>,A,<rel>
BTJZ   %<iop>,B,<rel>
BTJZ   %<iop>,<Rn>,<rel>
BTJZ   <Rn>,A,<rel>
BTJZ   <Rn>,B,<rel>
BTJZ   <Rn>,<Rn>,<rel>

BTJZP  A,<Pn>,<rel>
BTJZP  B,<Pn>,<rel>
BTJZP  %<iop>,<Pn>,<rel>

BR      @<addr>(B)
BR      @<addr>[B]
BR      @<addr>
BR      *<Rn>

CALL    @<addr>(B)
CALL    @<addr>[B]
CALL    @<addr>
CALL    *<Rn>

CLR     A
CLR     B
CLR     <Rn>
CLRC

CMP     B,A
CMP     %<iop>,A
CMP     %<iop>,B
CMP     %<iop>,<Rn>
CMP     <Rn>,A
CMP     <Rn>,B
CMP     <Rn>,<Rn>

CMPA    @<addr>(B)
CMPA    @<addr>[B]
CMPA    @<addr>
CMPA    *<Rn>

DAC     B,A
DAC     %<iop>,A
TASM TABLES  Version 2.8                                     Page 33

DAC     %<iop>,B
DAC     %<iop>,<Rn>
DAC     <Rn>,A
DAC     <Rn>,B
DAC     <Rn>,<Rn>

DEC     A
DEC     B
DEC     <Rn>

DECD    A
DECD    B
DECD    <Rn>

DINT

DJNZ    A,<rel>
DJNZ    B,<rel>
DJNZ    <Rn>,<rel>

DSB     B,A
DSB     %<iop>,A
DSB     %<iop>,B
DSB     %<iop>,<Rn>
DSB     <Rn>,A
DSB     <Rn>,B
DSB     <Rn>,<Rn>

EINT
IDLE

INC     A
INC     B
INC     <Rn>

INV     A
INV     B
INV     <Rn>

JMP     <rel>

JC      <rel>
JEQ     <rel>
JGE     <rel>
JGT     <rel>
JHS     <rel>
JL      <rel>
JN      <rel>
JNC     <rel>
JNE     <rel>
JNZ     <rel>
JP      <rel>
JPZ     <rel>
JZ      <rel>

LDA     @<addr>(B)
TASM TABLES  Version 2.8                                     Page 34

LDA     @<addr>[B]
LDA     @<addr>
LDA     *<Rn>

LDSP

MOV     A,B
MOV     B,A
MOV     A,<Rn>
MOV     B,<Rn>
MOV     %<iop>,A
MOV     %<iop>,B
MOV     %<iop>,<Rn>
MOV     <Rn>,A
MOV     <Rn>,B
MOV     <Rn>,<Rn>

MOVD    %<iop>[B],<Rn>
MOVD    %<iop>,<Rn>
MOVD    <Rn>,<Rn>

MOVP    A,<Pn>
MOVP    B,<Pn>
MOVP    %<iop>,<Pn>
MOVP    <Pn>,A
MOVP    <Pn>,B

MPY     B,A
MPY     %<iop>,A
MPY     %<iop>,B
MPY     %<iop>,<Rn>
MPY     <Rn>,A
MPY     <Rn>,B
MPY     <Rn>,<Rn>

NOP

OR      B,A
OR      %<iop>,A
OR      %<iop>,B
OR      %<iop>,<Rn>
OR      <Rn>,A
OR      <Rn>,B
OR      <Rn>,<Rn>

ORP     A,<Pn>
ORP     B,<Pn>
ORP     %<iop>,<Pn>

POP     A
POP     B
POP     ST
POP     <Rn>
POPST

PUSH    A
TASM TABLES  Version 2.8                                     Page 35

PUSH    B
PUSH    ST
PUSH    <Rn>
PUSHST

RETI

RETS

RL      A
RL      B
RL      <Rn>

RLC     A
RLC     B
RLC     <Rn>

RR      A
RR      B
RR      <Rn>

RRC     A
RRC     B
RRC     <Rn>

SBB     B,A
SBB     %<iop>,A
SBB     %<iop>,B
SBB     %<iop>,<Rn>
SBB     <Rn>,A
SBB     <Rn>,B
SBB     <Rn>,<Rn>

SETC

STA     @<addr>(B)
STA     @<addr>[B]
STA     @<addr>
STA     *<Rn>

STSP

SUB     B,A
SUB     %<iop>,A
SUB     %<iop>,B
SUB     %<iop>,<Rn>
SUB     <Rn>,A
SUB     <Rn>,B
SUB     <Rn>,<Rn>

SWAP    A
SWAP    B
SWAP    <Rn>

TRAP    <trap>

TASM TABLES  Version 2.8                                     Page 36

TST     A
TSTA
TST     B
TSTB

XCHB    A
XCHB    <Rn>

XOR     B,A
XOR     %<iop>,A
XOR     %<iop>,B
XOR     %<iop>,<Rn>
XOR     <Rn>,A
XOR     <Rn>,B
XOR     <Rn>,<Rn>

XORP    A,<Pn>
XORP    B,<Pn>
XORP    %<iop>,<Pn>

TASM TABLES  Version 2.8                                     Page 37

BUILDING TASM FROM THE SOURCE CODE

TASM  can  be built using the provided 'make'  file,  assuming   the
Microsoft C compiler (version 5.0) is available.  The can be done as
follows:

        make tasm.mak


For UNIX, try this:

        %cc -DUNIX tasm.c macro.c parse.c str.c -o tasm

The header file tasm.h should also be available.

Note  that the UNIX flag is being defined on the command line.  This
causes the following things to happen:

        1.  Tasm.h includes somewhat different system include files
                appropriate for the UNIX environment.

        2.  TASM declares a 64 Kbyte array  in  which  to  hold  the
                assembled    opcodes    and    data  in  a  slightly
                different way.   MS C must use the 'far' keyword for
                such  an  array  to give it a segment  all  its  own
                (assuming use of the small memory model).  Most UNIX
                environments do not have need for such syntax.

TASM TABLES  Version 2.8                                     Page 38

TASM INSTRUCTION SET TABLE DEFINITION

The tables that control TASM's interpretation of the source file are
read from a file at run time.  The table file name is determined  by
taking  the  numeric option field specified on the TASM command line
and appending it to the string "TASM", then a  ".TAB"  extension  is
added.  Thus, if the following command line is entered:

        tasm -51  test.asm

then TASM would read the table file named "TASM51.TAB".


The following rules apply to the structure of the table file:

        1.  The  first  line  of  the  file  should contain a string
                surrounded by double quotes that should identify the
                version of the assembler  table.  This  string  will
                appear at the top of each page in the list file.  It
                should be limited to 24 characters.
        2.  Any line that starts with a '.' is considered a directive.
                The following directives are available:

                DIRECTIVE       MEANING
                ----------------------------------------------------
                MSFIRST         Generate opcodes MS byte first.
                ALTWILD         Use '@' instead of '*' as the
                                wild card in the table.

        3.  Any   line  whose  first  character  is not a '.' and is
                not  alphabetic is considered to be a comment and is
                discarded.

        4.  Any  line  that has an alphabetic character as the first
                character is assumed to be an instruction definition
                record  and  is  parsed  to   build   the   internal
                representation   of   the  instruction  set  tables.
                Eight  fields   (separated  by  white  space)    are
                expected,  as follows:

                Field Name      Description
                --------------------------------------------
                INSTRUCTION     Instruction Mnemonic
                ARGS            Argument definition
                OPCODE          Opcode value
                NBYTES          Number of bytes
                MODOP           Modifier operation
                CLASS           Instruction class
                SHIFT           Argument left shift count
                OR              Argument bitwise OR mask

                INSTRUCTION.  The  INSTRUCTION  field should contain
                the string to be  used  as  the  mnemonic  for  this
                instruction.  Upper case letters should be used (the
                source statements are converted to upper case before
                comparison).
TASM TABLES  Version 2.8                                     Page 39

                ARGS.   The  ARGS  field  should  contain  a  string
                describing  the  format  of  the operand field.  All
                characters are taken literally except the '*'  which
                denotes  the  presence  of  a valid TASM expression.
                Multiple '*'s can be used,  but all but the last one
                must  be  followed  by  a  comma.  If  a  single '*'
                appears in the ARGS field,  then the default  action
                of  TASM  will  be  to  determine  the  value of the
                expression that matches the field and insert one  or
                two  bytes  of  it into the object file depending on
                the NBYTES field.  If multiple '*'s are  used,  then
                special  operators  (MODOP)  must  be  used  to take
                advantage of them (see the examples below).  An ARGS
                field of a pair  of  double  quotes  means  that  no
                arguments are expected.


                OPCODE.  The OPCODE field should contain the  opcode
                value    (two  to  six  hex   digits)   for   this
                instruction  and  address mode.   Each pair  of  hex
                digits  represent  a  single  byte  of  the  opcode,
                ordered with the right most pair being placed in the
                lowest memory location.


                NBYTES.  The NBYTES field should specify the  number
                of  bytes  this  instruction  is to occupy (a single
                decimal  digit).   This number includes both  opcode
                bytes and argument bytes, thus,  the number of bytes
                of argument is computed by subtracting the number of
                bytes  of  opcode  (dictated by the  length  of  the
                OPCODE field) from NBYTES.


                MODOP.  The MODOP field determines  if  any  special
                operations   need   to  be  performed  on  the  code
                generated for this  instruction.  For  example,  the
                zero-page  addressing  mode of the 6502 is a special
                case of the absolute addressing mode, and is handled
                by a special MODOP code (see appendix B).  The  list
                of operators is as follows:


TASM TABLES  Version 2.8                                     Page 40

                MODOP       DESCRIPTION
                ---------------------------------------------------
                NOTOUCH     Do nothing to instruction or args
                JMPPAGE     Put bits 8-10 of first arg into
                            bits 5-7 of opcode (8048 JMP)
                ZPAGE       If arg < 256 then use zero-page (6502)
                R1          Make arg relative to PC (single byte)
                R2          Make arg relative to PC (two byte)
                CREL        Combine LS bytes of first two args
                            making the second one relative to PC
                SWAP        Swap bytes of first arg
                COMBINE     Combine LS bytes of first two args into
                            first arg (arg1 -> LSB, arg2 ->MSB).
                CSWAP       Combine LS bytes of first two args into
                            first arg and swap.
                ZBIT        Z80 bit instructions.
                MBIT        Motorola (6805) bit instructions
                MZERO       Motorola (6805) zero page (direct)
                3ARG        Three args, one byte each.
                3REL        Three args, one byte each, last one
                            relative
                T1          TMS320 instruction with one arg.  Shift
                            according to SHIFT and mask with OR and
                            OR into opcode.  If a second arg exists
                            assume it is an <arp> and OR into   LSB
                            of opcode.
                TDMA        TMS320 instruction with first arg <dma>.
                            Second arg gets shift/and/or  treatment
                            as with T1.
                TAR         TMS320 instruction with first arg <ar>.
                            Second arg gets shift/and/or  treatment
                            as with T1.

                Note  that the reason for the combining of arguments
                (COMBINE and CSWAP) is that TASM  assumes  that  all
                object  bytes  to be inserted in the object file are
                derived from a variable representing  the  value  of
                the  first  argument (argval).  If two arguments are
                in the  ARGS  field,  then  one  of  the  previously
                mentioned  MODOP`s  must  be  used.  They  have  the
                effect of combining the low bytes of the  first  two
                arguments  into the variable (argval) from which the
                object  code  will  be  generated.  TASM`s  argument
                parsing   routine  can  handle  a  large  number  of
                arguments,  but the code that generates  the  object
                code is less capable.

                CLASS.  The  CLASS  field is used to specify whether
                this instruction is part of the standard instruction
                set or a member of a set of  extended  instructions.
                Bit 0 of this field should be set to denote a member
                of  the standard instruction set.  Other bits can be
                used as needed  to  establish  several  classes  (or
                sets)   of  instructions  that  can  be  enabled  or
                disabled via  the  '-x'  command  line  option  (see
                section on 6502 INSTRUCTIONS AND ADDRESSING MODES).
TASM TABLES  Version 2.8                                     Page 41

                SHIFT (optional).   The SHIFT field is used to cause
                the  first  argument of the given instruction to  be
                shifted left the specified number of bits.   (Except
                T1, TDMA, TAR MODOPS as noted below).

                OR  (optional).   The OR field is used to perform  a
                bitwise  OR  with  the first argument of  the  given
                instruction.  Specified as hex digits.  (Except  T1,
                TDMA, TAR MODOPS as noted below).

Note that the SHIFT/OR fields are used somewhat differently for  T1,
TDMA,  and TAR MODOPS.  In those cases,  the SHIFT and OR fields are
used  but the OR field is really an AND mask and the result is  OR'd
with the opcode.

The   following  table   shows   possible    instruction  definition
records,  followed  by  possible  source statements that would match
it,    followed by the resulting object code that would be generated
(in hex):
                                          EXAMPLE         EXAMPLE
INSTRUCTION DEFINITION                    SOURCE          OBJECT
-------------------------------------------------------------------
XYZ  *      FF   3  NOTOUCH 1             xyz 1234h       FF 34 12
XYZ  *      FF   2  NOTOUCH 1             xyz 1234h       FF 34
ZYX  *      FE   3  SWAP    1             zyx 1234h       FE 12 34
ZYX  *      FE   3  R2      1             zyx $+4         FE 01 00
ABC  *,*    FD   3  COMBINE 1             abc 45h,67h     FD 45 67
ABC  *,*    FD   3  CSWAP   1             abc 45h,67h     FD 67 45
ADD  A,#*   FC   2  NOTOUCH 1             add A,#'B'      FC 42
RET  ""     FB   1  NOTOUCH 1             ret             FB
LD   IX,*   21DD 4  NOTOUCH 1             ld  IX,1234h    DD 21 34 12
LD   IX,*   21DD 4  NOTOUCH 1 1 0         ld  IX,1234h    DD 21 68 24
LD   IX,*   21DD 4  NOTOUCH 1 0 1         ld  IX,1234h    DD 21 35 12
LD   IX,*   21DD 4  NOTOUCH 1 1 1         ld  IX,1234h    DD 21 69 24
LD   IX,*   21DD 4  NOTOUCH 1 8 12        ld  IX,34h      DD 21 12 34

The  order  of  the  entries for various addressing modes of a given
instruction is important.  Since the wild card matches anything,  it
is  important to specify the ARGS for the addressing modes that have
the  most  qualifying  characters  first.   For   example,   if   an
instruction  had  two  addressing  modes,   one  that  accepted  any
expression,  and another that required a pound sign in front  of  an
expression,  the  pound  sign  entry  should  go first otherwise all
occurrences of the instruction would match  the  more  general  ARGS
expression   that  it  encountered  first.   The  following  entries
illustrate the proper sequencing:

        ADD #*  12 3 NOTOUCH 1
        ADD *   13 3 NOTOUCH 1

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0643

     Volume in drive A has no label
     Directory of A:\

    TASM     EXE     50803   9-06-90   2:50p
    TASM48   TAB      6403   9-06-90   2:50p
    TASM65   TAB      4706   9-06-90   2:50p
    TASM51   TAB      6635   9-06-90   2:50p
    TASM85   TAB      5727   9-06-90   2:50p
    TASM80   TAB     14826   9-06-90   2:50p
    TASM05   TAB      5675   9-06-90   2:50p
    TASM68   TAB      5294   9-06-90   2:50p
    TASM32   TAB      8967   9-06-90   2:50p
    TASM70   TAB      7088   9-06-90   2:50p
    TASM     DOC     71289   9-05-90   4:56a
    TASMTABS DOC     85059   9-05-90   4:35p
    ADDENDUM DOC       355   9-06-90   2:51p
    README            1584   9-06-90   3:43p
    COPYRIGH T        2206   9-06-90   3:41p
    ORDER    FRM      2157   9-06-90   2:51p
    TASM_BBS DOC      1362   9-06-90   3:41p
    FILE643  TXT      1925  10-10-90  11:24a
    GO       BAT        38  11-02-90   1:51a
    GO       TXT       617  11-02-90   1:50a
           20 file(s)     282716 bytes
                           28672 bytes free
