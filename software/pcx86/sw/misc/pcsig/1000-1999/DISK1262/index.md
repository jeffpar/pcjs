---
layout: page
title: "PC-SIG Diskette Library (Disk #1262)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1262/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1262"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOUG'S PROGRAMMING LANGUAGE (DPL)"

    DPL, or DOUG'S PROGRAMMING LANGUAGE, is a macro language which uses high
    level language syntax for its instructions.
    
    DPL's language does not limit the programmer from using native 8088
    code, but makes programming easier by automatically declaring segments
    and the program entrypoint.  All return codes except end-of-file are
    standard DOS return codes.  The program handles 64K of code and data and
    stack segments.  Variables are automatically declared.
    
    DPL supports simple data types and still permits the programmer to build
    other types.  Basic data types supported are 16 bit integers and ASCIIZ
    strings.  The 16 bit integers are considered to be signed integers and
    therefore will be manipulated appropriately.  Files are supported which
    allow the program to address any disk file or logical device, such as
    the keyboard and screen.
    
    Extensive documentation is available on disk in both standard ASCII and
    WordStar format.  Also available is the DPL source program written in
    TURBO C.  Many application routines and application routine
    construction files are provided, along with a demonstration of the use
    of shade and how to manipulate it.
    File Descriptions:
    
    DPL      DOC  DPL reference manual in WORDSTAR format.
    DDPL     DOC  DPS reference manual in text form.
    READ     ME   Lists files.
    DPL      EXE  DPL prepass macro assembler.
    DPL      C    Source program written in TURBOC.
    DPL           DPL ``MAKE'' file for use with Microsoft MASM.
    DPL      L    Microsoft LINK input file used in DPL make function.
    DPL      LIB  Final output of DPL make function.
    CMP      BAT  Compare source/target disks of DPL release code.
    D        BAT  DOS batch files for assembling/linking DPL programs.
    DV       BAT  Set up output listings for use with Microsoft CODEVIEW.
    MOVE     BAT  Moves entire DPL distribution list to target disk drive.
    MOVEDEV  BAT  Moves ony those files needed to develop code.
    DPL      MAC  DPL macro ``include'' file.
    _CRSR    D    Video cursor positioning.
    _DEC     D    ASCII decimal tosigned 16 bit integer conversion.
    _DPL     D    Startup code executed at the start of DPL program.
    _DV1616  D    16 bit division routine to protects against division by 0.
    _ENC     D    Signed 16 bit integer to ASCII decimal representation.
    _FILEIO  D    File I/O routines for all four file access methods.
    _HSTOI   D    Hexedecimal representation to 16 bit integer conversion.
    _IFS     D    String comparison routines.
    _INKY    D    Single character input routines.
    _ITOBS   D    16 bit integer to binary string representation.
    _ITOHS   D    16 bit integer to hexedecimal representation.
    _SCONCAT D    String concatenation routines.
    _STREND  D    String length calculation routines.
    MOVEAPP  BAT  Batch file to move the sample routines.
    CMPAPP   BAT  Compare source/target disks of DPL release code.
    APP           Application routine's ``MAKE'' file.
    APP      L    Additional ``MAKE'' file for Microsoft LINK.
    APP      LIB  Final output from make function.
    CLICK    D    Make click noise to simulate keyboard clickings.
    CLRSCR   D    Clear screen routine.
    CMDLN    D    Retrieve data from the command line.
    CMPRSS   D    Compress text.
    DELAY    D    Delay x number of clock ticks.
    DOBEEP   D    Beep speaker.
    EDITM    D    Edit a fixed ASCIIZ string from the keyboard.
    EDITS    D    Perform edit of an ASCIIZ string from the keyboard.
    ENVSTR   D    Fetch and environment string.
    EXPR     D    Algebraic evaluator returning 16 bit signed integer.
    FMOVE    D    Move an ASCIIZ string into a file name.
    FSTRNG   D    Search a string for a match.
    GETMWORD D    Return the machine ID word from PROM.
    LWRCS    D    Convert ASCIIZ string to lowercase.
    SCRNBK   D    Backup a video page.
    SHADE    D    Pulldown menuing and display routine.
    SHDDO    D    Additional shade manipulation routines.
    TRIM     D    Trim off blanks from an ASCIIZ string.
    UPRCS    D    Convert ASCIIZ string to uppercase.
    VIDOFF   D    Turn video screen off.
    VIDWRT   D    Direct video text output routines.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DDPL.DOC

{% raw %}
```
          ================================
            Doug's Programming Language
          ================================

                  TABLE OF CONTENTS


               1. What's needed
                    Hardware required.
                    Programs you must supply.
                    Installing the code on a hard drive.
                    Compiling the sample programs.

               2. Basic program structure

               3. Data declarations
                    Predefined global variables
                    DEFINE declaration
                    ENDREC declaration
                    FILE declaration
                    INTEGER declaration
                    RECORD declaration
                    SET declaration
                    STRING declaration

               4. Executable Instructions
                    CURSOR int,int
                    CALL routine param-1 param-2 param-3 param-4
                    CLOSE file
                    DECODE string,integer
                    ENCODE integer,string
                    GOTO addr
                    HSTOI integer,string
                    IF...
                    INKEY str,WAIT
                    ITOBS string,integer,length
                    ITOHS string,integer
                    MATH EXPRESSIONS
                    NOTE file,dd
                    OPEN INPUT, file
                    POINT file,dd
                    READ file,string,length
                    READB file,record
                    RETURN
                    STOP
                    STRING CONCATENATION
                    WRITE file,string
                    WRITEB file,record

               5. Bibliography


MS  DOS  and  Macro  Assembler,  aka,  MASM,  are  trademarks  of 
Microsoft corporation.

Doug's Programming Language  -- DPL, Version 2.22
Copyright (c) 1988 Douglas S. Cody, All rights reserved.


.pa
                    W h a t 's   N e e d e d


Hardware Required.

     The minimal system configurable recommended to use DPL is:

          IBM PC or Compatible w/256k ram.
          MS, PC DOS 2.0 or higher.
          2 floppy disk drives.
          Monochrome or CGA video adapter & monitor.

     The optimal system configurable recommended to use DPL is:

          IBM PC or Compatible w/640k ram.
          MS, PC DOS 2.0 or higher.
          1 floppy disk drive and a hard drive of
          ten megabytes, or higher.
          Monochrome, CGA, EGA video adapter & monitor.



Programs You Must Supply.

     In order to program,  assemble,  and run programs written in 
DPL, the following programs must be made available:

     Microsoft MASM, MAKE, LINK, and LIB, versions 3.0
     through 5.0.

     These  programs will have to be in the current directory  or 
in the "PATH". See your DOS manual for setting "PATH"s.



Installing the Code on a Hard Drive.

     The DPL release diskette contains two batch files for moving 
the  whole release to a target diskette or hard drive.  The first 
batch file is called,  "MOVE.BAT".  It will copy all the core DPL 
routines  and  support files to a given  drive\path.  The  second 
batch  file is called,  "MOVEAPP.BAT",  and it contains  all  the 
sample application routines,  programs,  and support files.  Each 
batch file is invoked like the following example:

          C:\DPL>MOVE A:
          C:\DPL>MOVEAPP A:

     The  parameter  following the batch file name indicates  the 
target [drive][path] that the will receive the DPL files.

To create a backup of the release from drive A: to drive B:

     1. Install a blank, formatted diskette in drive B:
     2. Install the DPL release diskette in drive A:
     3. At the DOS prompt, type "A:" and the ENTER key.
     4. Type "MOVE B:" and the ENTER key. All the core
          routines, libraries & support files will be copied.
     5. Type "MOVEAPP B:" and the ENTER key. All the application
          routines, programs & support file will be copied.

To copy the release from drive A: to the hard drive, C:.

     1. If the current disk is not drive C, then type "C:"
          and the ENTER key.
     2. If the current disk is drive C, then type "CD\"
          and the enter key.
     3. Type "MKDIR DPL" and the ENTER key.
     4. Type "CD DPL" and the ENTER key.
     5. Install the DPL release diskette in drive A:
     6. Type "A:" and the ENTER key.
     7. Type "MOVE C:" and the ENTER key. All the core
          routines, libraries & support files will be copied.
     8. Type "MOVEAPP C:" and the ENTER key. All the application
          routines, programs & support file will be copied.



Compiling the Sample Programs.

U S I N G   F L O P P Y   D I S K S

     For those of you using only two floppy disks, you'll want to 
create  a special development diskette containing only the  files 
needed to develop code.  The batch file named, "MOVEDEV.BAT" will 
copy those files to a target drive. Follow the instructions below 
to create this special disk:

     1. Install the DPL release diskette in drive A:
     2. Install a blank, formatted diskette in drive B: 
     3. At the DOS prompt, type "A:" and the ENTER key.
     4. Type "MOVEDEV B:" and the enter key. All the required
          files will be copied to this diskette.
     5. Copy any DPL source files, such as, LIST.D, to drive B:

     Once  the development diskette is finished,  insert it  into 
drive  A:.  Place  the diskette contain  Microsoft's  MASM.EXE  & 
LINK.EXE into drive B:.  At the DOS prompt,  type "PATH=B:\;" and 
the return key. This allows the Microsoft software to be found by 
DOS  when  attempting to compile the DPL programs.  You  are  now 
ready to compile some code.  The DPL sample program, "LIST.D" has 
been  copied to the development diskette to allow you to practice 
compiling.  To compile this program, type, "D LIST" and the ENTER 
key. The  batch  file,   "D.BAT"  will  invoke  the  DPL  prepass 
compiler, MASM, then LINK.
     Once the compile is done, the DOS prompt will return.





U S I N G   H A R D   D R I V E

     If  you  are  using a hard disk drive,  you're in  the  best 
development environment. This allows you to store all DPL code in 
one  subdirectory,  and  all  the Microsoft  code  in  it's  sub-
directory.  Place the path to the Microsoft software in the envi-
ronment  PATH  by typing "PATH=\[MASM PATH]" at the  DOS  prompt. 
Once this is done,  enter the DPL subdirectory,  and you're ready 
to  work.  Assuming all the code has been installed in this  sub-
directory,  type,  "D  LIST" and the ENTER key.  The batch  file, 
"D.BAT"  will invoke the DPL prepass compiler,  MASM,  then LINK. 
     Once the compile is done, the DOS prompt will return.
.pa
          B a s i c   P r o g r a m   S t r u c t u r e 

DPL is a macro language using high level language syntax for it's 
instructions.  It does not limit the programmer from using native 
8088   code,   but  makes  programming  easier  by  automatically 
declaring  segments and the program entrypoint.  Comments may  be 
declared  in standard 8088 fashion by placing a semi-colon to the 
left of the comment's body of text.  The basic program  structure 
is as follows:

     PROG   NAME
     ;
     ; data goes here
     ;
     BEGIN  NAME
     ;
     ; code goes here
     ;
     ENDPGM NAME

     The keyword "PROG" declares the beginning of the program and 
opens up the data segment.  The data segment will continue  until 
the  keyword "BEGIN" is encountered.  Once "BEGIN" is found,  the 
data segment is ended and the code segment will begin.  The  code 
segment will be ended when the keyword "ENDPGM" is encountered at 
the  end  of the source file.  In between the data and code  seg-
ments, the stack segment is declared using a 256 word stack.
     This main procedure is declared as a "FAR" procedure and  is 
the entrypoint for the program.  Another valid way of declaring a 
program  is using the keyword,  "SUBPGM" in lieu of "PROG".  This 
will  give  the  program a public name as  well  as  declare  the 
entrypoint to be a NEAR procedure.
     The  NAME  of  the  program can be any  name,  but  must  be 
declared  three times in the program.  The NAME declaration  must 
follow the keywords, PROG, SUBPGM, BEGIN, and ENDPGM.
     The  following  are two examples of  the  shortest  programs 
written in DPL:

     Example #1          :    Example #2
                         :
     PROG      NAME      :    SUBPGM    NAME
     ;                   :    ;
     BEGIN     NAME      :    BEGIN     NAME
     ;                   :    ;
     ENDPGM    NAME      :    ENDPGM    NAME

    Since  DPL controls the segment declarations,  the program is 
limited to 64k of code,  64k of data,  and 64k of stack  segment. 
Other segments may be declared, but will be nested depending upon 
location.  If  a segment is declared within the boundaries of the 
"PROG/SUBPGM" and "BEGIN" statement, it will be nested within the 
data segment.  Likewise,  if the segment is declared between  the 
"BEGIN" and "ENDPGM" statement, it will be nested within the code 
segment.
.PA
               D a t a   D e c l a r a t i o n s

     DPL  supports  simple data types,  but does  not  limit  the 
programmer  from  building  other types.  The  basic  data  types 
supported  are  16 bit integers and ASCIIZ strings.  The  16  bit 
integers  are considered to be signed integers and therefore will 
be manipulated appropriately. Files are supported which allow the 
program  to address any disk file or logical device,  such as the 
keyboard or screen.


Predefined Global Variables

     DPL declares certain common variables for the programmer. As 
of  this  revision,  the following  variables  are  automatically 
declared:

     SET       STATUS,00      ; 16 bit integer which contains the 
                              ; return result of various reads
                              ; and writes.
     SET       ZERO,00        ; A integer containing a zero value.
     DEFINE    BEEP,07        ; ASCII Bell alarm (^G)
     DEFINE    EJECT,12       ; ASCII Form Feed (^L)
     SET       @DPLVER        ; Current version of DPL support
                              ; routines
     VIDPAGE   DB   ?         ; Current active video page
     CRTFLAG   DB   ?         ; A byte indicating which video
                              ; adapter is installed:
                              ;   Monochrome    =  00
                              ;   CGA card      =  01
                              ;   EGA Mono emul =  02
                              ;   EGA CGA emul  =  03.
                              ; Bit 0 = Monochrome(0),CGA(1)
                              ; Bit 1 = EGA(1)
                              ; Bit 2 = VGA(not implemented yet)

   The  keyword,  "STATUS",  is  maintained by DPL to return  the 
result  of any attempted read or write using DOS.  The  following 
error codes are returned in STATUS from IO:

0 = All okay                        10 = Invalid environment
1 = End of File encountered         11 = Invalid format
2 = File not found                  12 = Invalid access code
3 = Path not found                  13 = Invalid data
4 = No handle available, all used   14 = not used
5 = Access denied                   15 = Invalid drive specified
6 = invalid handle                  16 = Attempt to remove
7 = Memory control block destroyed       directory
8 = Insufficient memory             17 = Not same device
9 = Invalid memory block address    18 = No more files to be   
                                         found                 

If  you have not noticed,  all the return codes,  except #1,  are 
standard  DOS return codes.  Code #1 serves a  dual  purpose.  In 
reads  and writes,  this value would indicate an EOF.  In opening 
and  closing files,  it retains its original DOS  meaning.  Since 
STATUS  is  just a 16 bit integer,  it may also be  used  by  the 
programmer, for example, to hold a return code from a subroutine.


D E F I N E  --  pre-initialized string declaration

     DEFINE    msg0,'This is the first message declared'
     DEFINE    BEEP,07
     DEFINE    ESC_SEQ,<1BH,'[31;40m'>   ; ANSI.SYS ESC sequence

   The  data  declaration,  "DEFINE"  allows  the  programmer  to 
declare a string with a pre-initialized value.  This string  will 
have it's maximum length determined by the length of the message. 
The  second example above shows how to declare a one byte  string 
using an ASCII control character value.  The length of the string 
will  be  the data length + 1.  The  DEFINE  macro  automatically 
provides a null byte as a string terminator.  This, and all other 
data  declarations,  must  precede  the  "BEGIN"  statement.  The 
maximum  length is determined by MASM's limitations.


E N D R E C  --  End of record marker

          RECORD recname,length
            STRING strname,length
            INTEGER num
          ENDREC recname

     The ENDREC declaration marks the end of the data record.  It 
is  used  in  conjunction  with  the  RECORD  declaration.   This 
statement  must  always be used to terminate a record  to  insure 
correct memory allocation for the entire record.  This,  and  all 
other data declarations, must precede the "BEGIN" statement.


F I L E  --  Define a file device

     FILE     CONSL,     'CON'
     FILE     PRT,       'LPT1',       A
     FILE     AFILE,     'WORK.DAT',   A,   BUFFA
     FILE     DSKFIL,    'WORK.DAT',   B
     FILE     BFILE,     'WORK.DAT',   B,   BUFFB
     FILE     RNDFIL,    'WORK.DAT',   R,   RKEY

     BUFFER    BUFFA,512
     BUFFER    BUFFB,512
     INTEGER   RKEY

   The  file declaration sets up a file declaration for accessing 
DOS devices.  The declaration comes in five parts: 1) the keyword 
FILE,  2)  the  internal  name of the device to be  used  by  the 
program, 3) the external ASCIIZ string name given to DOS when the 
file  is  opened,  4)  the  device class,  and 5)  a  buffer  for 
sequential files,  or record KEY for random files.  The different 
parts  are separated by commas.  The device class  indicates  the 
type of data expected to be written or read from the device/file. 
The  four  classes are "A" for ASCII,  "B" for  binary,  "R"  for 
random access, and default for character devices (default assumes 
variable length ASCII). The files classes, "A", "B", and default, 
are   sequential   access  files.   Buffers  of  256  bytes   are 
automatically declared for "A" and "B" file types. The programmer 
may  declare different buffers for file classes "A" and  "B",  as 
seen  in  the  above examples for "AFILE" and  "BFILE".  This  is 
useful,  for  example  to speedup disk I/O  by  declaring  larger 
buffers, thus requesting fewer reads from DOS.
     NOTE!!!  The buffer size represents the largest single piece 
of data which may be read from the file;  therefore,  in order to 
read strings or records over 256 bytes in length,  the programmer 
MUST  provide a buffer at least the size of the largest string or 
record to be read from that file.
     Random  access files have a KEY declaration.  The key  is  a 
name of an integer to be used in record location calculations. To 
access  a given record in a random file,  put the record location 
number  into  the  key then read or write to the  file.  The  key 
number  is similar in functionality to an  array's  subscript.  A 
good  perspective  of a random file is to view it as an array  of 
records,  where  the  key  is the subscript  to  the  array.  The 
following  code segment shows how to read the 5th record  from  a 
file:

     ;---------------< DATA VARIABLES >----------------

     FILE RFILE,'DATA.FIL',R,RKEY
     INTEGER RKEY
     ;
     RECORD RREC,13
       STRING STR,8
       INTEGER NUM
     ENDREC RREC

     ;---------------< CODE EXECUTION >----------------

     RKEY = 5
     READB RFILE,RREC
     
     ;-------------< END CODE EXECUTION >--------------

The subscript to the file,  RKEY,  is set to the value of 5.  The 
read or write can then be attempted by the program.
 

I N T E G E R  --  16 bit integer declaration

     INTEGER num0

   The  integer  declaration  sets up a 16 bit word in  the  data 
segment without a predefined value.  It is initialized to zero by 
the macro statement.  This, and all other data declarations, must 
precede the "BEGIN" statement.


R E C O R D  --  File record declaration

          RECORD recname,length
            STRING strname,length
            INTEGER num
          ENDREC recname

     This  declaration identifies the "recname" as the  beginning 
of a data record. The above example shows how to declare a record 
with  one  string  element and one integer  element.  The  ENDREC 
statement must be added to terminate the record declaration.  See 
the section on ENDREC. The length given in the RECORD declaration 
is  the total length of all variable elements within the  record. 
STRING  lengths  are  always are 1 greater  than  there  declared 
length.  INTEGERS  are two bytes in length.  RECORDs declarations 
may not be nested.  This,  and all other data declarations,  must 
precede   the  "BEGIN"  statement.   See  the  section  on   FILE 
declarations for more on record size limitations.


S E T  --  16 bit integer declaration

     SET     ONE,1
     SET     X99,99

   The  SET declaration sets up a signed 16 bit word with a  pre-
defined value. It is identical to the INTEGER declaration, except 
the programmer supplies an initial value to the word.  This,  and 
all other data declarations, must precede the "BEGIN" statement.


S T R I N G  -- Undefined string declaration

     STRING    name,length
     STRING    wor_string,132

   The  STRING declaration allows the operator to declare a  null 
string,  X  number of bytes in length.  The total length  of  the 
string is the length + 1.  This, and all other data declarations, 
must  precede  the "BEGIN" statement.  The maximum length may  be 
up to 64k,  but remember,  DPL only provides ONE data segment  of 
up  to  64k;  therefore,  such  a string would  fill  the  entire 
segment.  See the section on FILE declarations for more on string 
lengths.
.pa
         E X E C U T A B L E   I N S T R U C T I O N S


C U R S O R  --  Move the video cursor.

     CURSOR     1,5
     CURSOR     1,int
     CURSOR     int,int
     CURSOR     row,col

   This instruction moves the video cursor to the X/Y  coordinate 
given  by the parameters.  The parameters may be either a numeric 
literal or integer in any combination.  The valid rows are 0 thru 
24.  The valid columns are 0 thru 79. By moving the cursor out of 
the valid ranges effectively makes the cursor disappear.


C A L L  -- DPL call with parameter passing in registers.

     CALL     routine param-1 param-2 param-3 param-4
     CALL     CALC 05 NUM

     The  DPL  pre-pass compiler examines each CALL statement  in 
the source file looking for parameter passing to the  subroutine. 
Parameters may be listed to the right of the subroutine name with 
spaces  between  each one.  The parameters passed are  placed  in 
registers  AX,BX,CX,DX  respectively.  1  - 4 parameters  may  be 
passed to the subroutine.  NOTE:  Parameter passing is limited to 
passing the ADDRESS of the variable,  NOT the actual value of the 
variable.  This  differs with some common programming  languages, 
such as C and PASCAL.  Since DPL does not maintain tight  control 
over  variable  declarations,  it  does not know  the  difference 
between  string  variable  names  and  integer  variable   names; 
therefore,  it  applies a blanket rule of passing addresses only. 
Literal   values  are  the  exception  and  are  passed  to   the 
subroutine.  The  literal  values are limited  to  an  expression 
resulting in a 16 bit value.


C L O S E  -- Close a file.

     CLOSE     file

  This function closes a previously opened file.  If the file was 
opened for output,  and end of file mark is written and the  file 
is closed. All pertinent data is then entered into the directory.  
If the file was opened for input, the file will be closed with no 
changes to the directory.  Once a file is closed,  no more access 
will  be allowed until it is reopened.  The appropriate DOS error 
code will returned in STATUS.

.pa
D E C O D E  --  Convert decimal ASCIIZ string to signed binary
                 integer format.

     DECODE     integer,string

   DECODE  will convert a numeric ASCII string into a  signed  16 
bit  integer  value.  The  value will be stored in  the  provided 
integer.  The conversion will be made from left to right and will 
continue  until a non numeric ASCII character or end of  line  is 
encountered. Valid numeric ASCII characters fall within the range 
of '0' - '9'.  A negative sign is allowed to the right or left of 
the numbers. If a non-numeric value is encountered, A STATUS of 1 
will be returned and the integer will be set to zero.


E N C O D E  -- Convert signed binary integer to ASCIIZ
                decimal string.

     ENCODE     string,integer
 
   This  instruction  will convert a signed 16 bit value into  an 
ASCIIZ string representation. The maximum length of the converted 
string can be 6 characters,  therefore; the target string must be 
a  minimum of 6 characters in order to protect against corrupting 
memory  following the string.  The actual decimal  representation 
created  by ENCODE may be less than 6 characters in  length.  Any 
value over 32767 will be considered negative.
  

G O T O  -- Unconditional jump.

     GOTO     addr

   The  GOTO command is converted into an 8088 'JMP' instruction. 
The  range of the jump will be intra-segment,  unless the  target 
address is a FAR type.  There will not be any check to see if the 
target  address  can be reached by a short  jump.  This  form  of 
optimization will normally be done by the assembler.


H S T O I  -- Hex string to integer conversion.

     HSTOI     integer,string

   This  instruction will convert a HEX string into a  signed  16 
bit binary value.  The conversion will operate from left to right 
and  will end when a non-hex character ("0"-"9",  or "a"-"f")  or 
end of line is encountered.


I F  -- Conditional jump support for byte, word, or
        string comparisons.

     IF BYTE   addr EQ addr GOTO addr
     IF BYTE   addr LT addr CALL addr param param param param
     IF BYTE   addr EQ addr RETURN
     IF WORD   addr LE addr GOTO addr
     IF WORD   addr NE addr CALL addr param param
     IF WORD   addr EQ addr RETURN
     IF STRING addr EQ addr GOTO addr
     IF STRING addr NE addr CALL addr param param param param
     IF STRING addr EQ addr RETURN

  The  DPL  IF statement gives the programmer the  capability  to 
make complex comparison with ease.  The IF statements cover every 
type of comparison and condition. A true result to the comparison 
always  results in a change to the program counter.  The instruc-
tion following the  comparison,  GOTO,  CALL,  or RETURN are  all 
standard  DPL instructions.  See each section for details on  the 
syntax of each of the instructions.
  The  IF  statements allow a full range of tests to be made  for 
integer  comparisons.  String comparisons are limited to "EQ"  or 
"NE" tests. The following is a explanation of each comparison:

     NE - Not equal to
     LT - Less than
     LE - Less than or equal to
     EQ - Equal to
     GE - Greater than or equal to
     GT - Greater than


I N K E Y  --  Scan the keyboard for one character

     INKEY
     INKEY     str
     INKEY     str,WAIT
     INKEY     ,WAIT

   This  instructions  uses the BIOS keyboard  interrupt  16H  to 
retrieve  a typed key.  As the above examples  show,  the  target 
string  is  optional.  The  returned value is stored  in  the  AX 
register  upon  return from the BIOS call.
     The  first  two examples will not stop the execution of  the 
program,  whereas;  the  last two examples wait for a key  to  be 
typed. The DPL keyword STATUS will be set to 1 if a key is found, 
otherwise;  it  will  be set to 0.  The target string must  be  a 
minimum of 2 bytes long. Two bytes will be returned from the BIOS 
and  stored  in the string.  The first byte will be the  "normal" 
key, such as the letter "A". In this case the second byte will be 
reported as a binary zero.  The second byte reported is the  scan 
code.  If  the  key was a function key,  the first byte  will  be 
binary zero, and the second byte will be the scan code.

.pa
I T O B S  --  Convert binary integer to Binary string 

     ITOBS     string,integer,length
     ITOBS     string,0255h,8

   This  command converts a 16 bit integer into a string of  "0"s 
and "1"s for a binary representation. The length of the string is 
determined by the length declaration.  As an example, if just the 
least  significant  byte of the 16 bit word is to  be  converted, 
just give the instruction an 8 byte long length.  The integer may 
be a address or a literal value.


I T O H S  --  Convert binary integer to ASCII hex string

     ITOHS     string,integer
     ITOHS     string,0256

    This  command will take a 16 bit integer value an create a  4 
byte  hex string.  The target string must be a minimum of 4 bytes 
in length, or a memory overrun will occur.


M A T H -- DPL math routines for arithmetic and Boolean
           expression evaluation

     result = int * 05 + int / 2 - 3 SHL 2 MOD 256

   DPL provides for signed 16 bit mathematical expressions with a 
simple left to right evaluation.  The length of the expression is 
limited  to  a maximum string of 132  characters.  The  following 
mathematical operations are valid:

          *    Multiplication      /    Division
          +    Addition            -    Subtraction
          AND  Logical And         OR   Logical OR
          XOR  Exclusive OR        SHL  Shift left
          SHR  Shift Right         MOD  Remainder


N O T E  -- Note the current file pointer.

     NOTE     file,dd

   This  instruction retrieves the current file pointer from  the 
specified  file and stores it in the specified 32 bit  long  word 
storage.  This  instruction is used in conjunction with the POINT 
instruction  to  create  a  limited form  of  random  access  for 
sequential  disk  files.   By  "NOTE"ing  a  file,   then  later, 
"POINT"ing to it, data may be reread or rewritten.

.pa
O P E N  -- Open a file

     OPEN     INPUT, file
     OPEN     OUTPUT, file
     OPEN     IO, file

   DPL  uses the DOS file handle method of file control.  When  a 
file  is opened,  DOS returns a handle which will  be  associated 
with that file until it is CLOSED.  The allowable modes of access 
for files are INPUT, OUTPUT, or, IO.
   In order to access any of the computers devices,  using a file 
is the easiest method. The logical device for the screen/keyboard 
('CON')  may  be opened as INPUT,  OUTPUT,  or  IO.  The  printer 
('LPTx')  would be opened as OUTPUT.
   If a disk file is opened as IO,  DPL attempts to open the file 
without  resetting  the  file pointer.  This is done  so  not  to 
destroy any data in the file.  If the file is not found, then DPL 
will create the file.
   If  a file is opened as OUTPUT,  DPL will open or  create  the 
file,  then  reset the file pointer to the beginning of the file, 
thus  clearing any data from the file.  When the file is  closed, 
the  directory entry is modified to reflect the last update,  and 
current size.
   When reading files,  due to the sequential access  method,  it 
may be necessary to start reading from the beginning. This may be 
accomplished  by closing,  then re-opening the file.  This resets 
the file pointers to the beginning of the file.
  DPL provides for error codes to be returned to the  application 
through  the  STATUS  integer.   This  integer  is  automatically 
declared  by  DPL  and is set to the resulting MS-DOS  value  for 
opening a file.  Consult an MS-DOS manual for the returned values 
for Function 3Dh. These values will be returned in STATUS.


P O I N T  --  Point to a location in the file.

     POINT     file,dd

     This  instruction  moves  the file pointer  to  a  specified 
location in the file.  POINT is used in conjunction with the NOTE 
instruction  to  create  a  limited form  of  random  access  for 
sequential disk files.  POINT has an identical counterpart in the 
C programming language, "LSEEK". By "NOTE"ing a file, then later, 
"POINT"ing to it, data may be reread or rewritten. Applicable DOS 
error codes are returned in STATUS.

.PA
R E A D  -- Read a variable length ASCII string from an opened
            file

     READ      file,string,length

   This command reads data from a device/file and places the data 
in the string.  The maximum amount data read is determined by the 
"length" in the statement.  The string may be shorter if an CR/LF 
is  encountered  during  the read.  If an  error  occurs  in  the 
attempted read, the DOS error code will be returned in STATUS.


R E A D B  -- Read a fixed number of bytes from an opened file

     READB     file,record

   This command reads data from a device/file and places the data 
in the record.  The maximum amount data read is determined by the 
length of the record.  This instruction must be used to read from 
"B"  and  "R" type of files.  The normal READ will  not  work  on 
binary  and  random files.  If an error occurs in  the  attempted 
read, the DOS error code will be returned in STATUS.


R E T U R N  --  Subroutine return statement

     RETURN

   This statement is identical to the return statement in  native 
8088 code.  It may be used by itself,  or in an IF statement. The 
following subroutine demonstrates it's use:

     SUB     PROC   NEAR
          IF WORD FLAG EQ ZERO RETURN
          .
          .
          RETURN
     SUB     ENDP


S T O P  -- Terminate the program's execution

     STOP
     STOP     1
     STOP     int

   This  instruction gives control back to DOS and also allows  a 
completion  code  to be set in DOS.  The completion code  can  be 
tested with the "ERRORLEVEL" DOS command.  Also,  the code can be 
retrieved by another program from DOS. The code may be a literal, 
or  integer  variable.  Just  the least significant byte  of  the 
completion code will be returned to DOS.

.pa
S T R I N G   C O N C A T E N A T I O N

     str0 $= str1 + str2 + str3 + str4 + str5

   DPL allows strings to be concatenated together and the  result 
placed into a target string.  The syntax is almost identical to a 
mathematical  expression except for two things:  1) Only the plus 
sign  ("+") is allowed in the expression,  and 2) in lieu of  the 
equal  sign,  a  special  equate symbol pair,  "$="  is  used  to 
designate string concatenation.


W R I T E  --  Write an ASCIIZ string to an opened file

     WRITE     file,string
     WRITE     file,string,CR
     WRITE     file,,CR

   This statement allows the programmer to write data out to  any 
device/file.  If  the  keyword  CR  (as shown  in  the  last  two 
examples) is given,  then a CR/LF will be appended to the output. 
The  third example shows how a CR/LF can be accomplished  without 
first  printing  a string.  If the programmer wants to  print  an 
integer,  then the integer will first have to be converted into a 
string, then printed.


W R I T E B  --  Write a record to an opened file

     WRITEB    file,record

     This  instruction writes the contents of the record  out  to 
the  given file.  This statement must be used to write to "B" and 
"R" type of files.  The standard WRITE instruction will not  work 
on binary and random files.  The appropriate DOS error codes will 
be returned in STATUS. 

.pa
                    B i b l i o g r a p h y

     The development of DPL has been evolving for over two years. 
Admittedly,  the  direction  has  been on the basis  of  "I  need 
this...",  and "wouldn't it be neat if...".  In other words,  its 
the  product of creeping enhancement,  though the  integrity  has 
been protected by my vision of creating a solid assembly language 
development environment.  During the course of investigation  and 
research,  I have read and studied many publications,  which have 
had a direct influence on this endeavor.  The following is a list 
of these publications:


Borland International, Inc. TURBO C., 1987

IBM AT Technical Reference Manual. IBM Corp., 1985

IBM PC Technical Reference Manual. IBM Corp., 1983

Microsoft Macro Assembler. Microsoft, 1985

Osborne/McGraw Hill. Using TURBO C., 1988

Osborne/McGraw Hill. Advanced TURBO C., 1988

Duncan, Raymond. Advance MS-DOS. Microsoft Press, 1986

Coffron, James W. Programming the 8086/8088. SYBEX, 1983

Hyman, Michael I. Memory Resident Utilities, Interrupts,
     and Disk Management with MS & PC DOS. MIS, 1986

Jourdain, Robert. Programmer's Problem Solver for the IBM
     PC, XT & AT. Brady Communications Co. 1986

Kernighan, Brian W. & Ritchie, Dennis M. The "C"
     Programming Language. Bell Telephone Labs, Inc. 1978

Norton, Peter. Programmer's Guild to the IBM PC.
     Microsoft Press, 1985

Wadlow, Thomas A. Memory Resident Programming on the IBM PC.
     Addison-Wesley Publishing Co., 1987

Young, Michael J. Performance Programming Under MS-DOS.
     SYBEX, 1987

```
{% endraw %}

## FILE1262.TXT

{% raw %}
```
Disk No: 1262
Program Title:  Doug's Programming Language (DPL) version 2.22
PC-SIG version: 1

DPL, or Doug's Programming Language, is a macro language which uses high
level language syntax for its instructions.

DPL's language does not limit the programmer from using native 8088
code, but makes programming easier by automatically declaring segments
and the program entrypoint.  All return codes except end-of-file are
standard DOS return codes.  The program handles 64K of code and data and
stack segments.  Variables are automatically declared.

DPL supports simple data types and still permits the programmer to build
other types.  Basic data types supported are 16 bit integers and ASCIIZ
strings.  The 16 bit integers are considered to be signed integers and
therefore will be manipulated appropriately.  Files are supported which
allow the program to address any disk file or logical device, such as
the keyboard and screen.

Extensive documentation is available on disk in both standard ASCII and
WordStar format.  Also available is the DPL source program written in
TURBO C.  A large number of application routines and application routine
construction files are provided, along with a demonstration of the use
of shade and how to manipulate it.

Usage:  Programming Language.

Special Requirements:  Microsoft MASM, MAKE, LINK, and LIB, versions 3.0
through 5.0.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

DPL      DOC  DPL reference manual in WORDSTAR format.
DDPL     DOC  DPS reference manual in text form.
READ     ME   Lists files.
DPL      EXE  DPL prepass macro assembler.
DPL      C    Source program written in TURBOC.
DPL           DPL 'MAKE' file for use with Microsoft MASM.
DPL      L    Microsoft LINK input file used in DPL make function.
DPL      LIB  Final output of DPL make function.
CMP      BAT  Compare source/target disks of DPL release code.
D        BAT  DOS batch files for assembling, linking programs
              written in DPL.
DV       BAT  Enhanced DOS batch file for setting up output listings
              for use with Microsoft CODEVIEW.
MOVE     BAT  Moves entire DPL distribution list to target disk drive.
MOVEDEV  BAT  Moves ony those files needed to develop code.
DPL      MAC  DPL macro 'include' file.
_CRSR    D    Video cursor positioning.
_DEC     D    ASCII decimal tosigned 16 bit integer conversion.
_DPL     D    Startup code executed at the start of DPL program.
_DV1616  D    16 bit division routine which protects against division
              by 0.
_ENC     D    Signed 16 bit integer to ASCII decimal representation.
_FILEIO  D    File I/O routines for all four file access methods.
_HSTOI   D    Hexedecimal representaiton to 16 bit integer conversion.
_IFS     D    String comparison routines.
_INKY    D    Single character input routines.
_ITOBS   D    16 bit integer to binary string representation.
_ITOHS   D    16 bit integer to hexedecimal representation.
_SCONCAT D    String concatenation routines.
_STREND  D    String length calculation routines.
MOVEAPP  BAT  Batch file to move the sample routines.
CMPAPP   BAT  Compare source/target disks of DPL release code.
APP           Application routine's 'MAKE' file.
APP      L    Additional 'MAKE' file for Microsoft LINK.
APP      LIB  Final output from make function.
CLICK    D    Make click noise to simulate keyboard clickings.
CLRSCR   D    Clear screen routine.
CMDLN    D    Retrieve data from the command line.
CMPRSS   D    Compress text.
DELAY    D    Delay x number of clock ticks.
DOBEEP   D    Beep speaker.
EDITM    D    Edit a fixed ASCIIZ string from the keyboard.
EDITS    D    Perform DOS like edit of an ASCIIZ string from the
              keyboard.
ENVSTR   D    Fetch and environment string.
EXPR     D    Algebraic expression evaluator returing 16 bit signe
              integer.
FMOVE    D    Move an ASCIIZ string into a file name.
FSTRNG   D    Search a string for a match.
GETMWORD D    Return the machine ID word from PROM.
LWRCS    D    Convert ASCIIZ string to lowercase.
SCRNBK   D    Backup a video page.
SHADE    D    Pulldown menuing and display routine.
SHDDO    D    Additional shade manipulation routines.
TRIM     D    Trim off blanks from an ASCIIZ string.
UPRCS    D    Convert ASCIIZ string to uppercase.
VIDOFF   D    Turn video screen off.
VIDWRT   D    Direct video text output routines.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1262

     Volume in drive A has no label
     Directory of A:\

    APP               1536   7-08-88   4:25p
    APP      L         384   7-08-88   4:26p
    APP      LIB     10893   7-11-88   2:40p
    CLICK    D        1024   7-11-88   2:26p
    CLRSCR   D         896   7-11-88   2:26p
    CMDLN    D        3200   7-11-88   2:26p
    CMP      BAT       896   7-12-88   8:22a
    CMPAPP   BAT       896   7-12-88   9:08a
    CMPRSS   D        1664   7-11-88   2:27p
    D        BAT       128   7-12-88   8:20a
    DDPL     DOC     34176   7-13-88  10:52a
    DELAY    D         640   7-11-88   2:27p
    DEMO     D        4224   7-11-88   2:24p
    DOBEEP   D        1024   7-11-88   2:27p
    DPL               1024   1-27-88   3:59p
    DPL      C       11265   7-12-88   8:20a
    DPL      DOC     34176   7-13-88  10:50a
    DPL      EXE     12278   7-12-88   8:20a
    DPL      L         256   1-27-88   3:59p
    DPL      LIB      6769   7-11-88   2:33p
    DPL      MAC      9344   7-11-88   2:20p
    DV       BAT       256   7-12-88   8:21a
    EDITM    D        4608   7-11-88   2:27p
    EDITS    D       12800   7-11-88   2:28p
    ENVSTR   D        4480   7-11-88   2:28p
    EXPR     D       11008   7-12-88   9:04a
    FILE1262 TXT      4613   1-16-89  11:08a
    FMOVE    D        1024   7-11-88   2:28p
    FSTRNG   D        1792   7-11-88   2:29p
    GETMWORD D         512   7-11-88   2:29p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  12-14-88  11:08a
    LIST     D       10880   7-11-88   2:25p
    LWRCS    D        1024   7-11-88   2:29p
    MANUAL   BAT       150   1-16-89  11:35a
    MOVE     BAT       896   7-12-88   8:22a
    MOVEAPP  BAT       896   7-12-88   9:08a
    MOVEDEV  BAT       384   7-12-88   8:22a
    READ     ME       4992   7-27-88   9:27a
    SCRNBK   D        3072   7-11-88   2:29p
    SHADE    D       13312   7-11-88   2:29p
    SHDDO    D       10752   7-11-88   2:30p
    TRIM     D        1152   7-11-88   2:30p
    UPRCS    D        1152   7-11-88   2:30p
    VIDOFF   D        1536   7-11-88   2:30p
    VIDWRT   D        7552   7-11-88   2:30p
    _CRSR    D         512   7-11-88   2:21p
    _DEC     D        1536   7-11-88   2:21p
    _DPL     D        2560   7-11-88   2:21p
    _DV1616  D         896   7-11-88   2:21p
    _ENC     D        1792   7-11-88   2:21p
    _FILEIO  D       24064   7-11-88   2:22p
    _HSTOI   D        1408   7-11-88   2:22p
    _IFS     D        1536   7-11-88   2:22p
    _INKY    D         768   7-11-88   2:22p
    _ITOBS   D        1024   7-11-88   2:23p
    _ITOHS   D         896   7-11-88   2:23p
    _SCONCAT D         640   7-11-88   2:24p
    _STREND  D        1024   7-11-88   2:24p
           59 file(s)     275232 bytes
                           22528 bytes free
