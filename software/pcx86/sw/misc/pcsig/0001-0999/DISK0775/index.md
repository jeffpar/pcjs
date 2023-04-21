---
layout: page
title: "PC-SIG Diskette Library (Disk #775)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0775/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0775"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PSEUDOSAM CROSS ASSEMBLER 68 AND 685"

    PSEUDOSAM 68 and 685 are machine language cross-assembler programs for
    the Motorola 6800, 01, 02, 03, 08, and 6805 microprocessors.  These
    programs let you construct 6800 and 6805 code on your IBM-PC so
    it can be transferred to a 6800 or 6805-based system for
    later use.
    
    The PSEUDOSAM (Pseudo-brand Symbolic AsseMbler) assemblers conform to
    common syntax, based on the UNIX System V assembler syntax.  The opcode
    and addressing syntax is compatible with the manufacturer's, but label,
    directive, and expression operator syntax will differ.
    
    The author of PSEUDOSAM chose this syntax because of UNIX's popularity,
    and to avoid the problem of maintaining compatibility with the many of
    OEM assemblers.  The documentation is well organized and easy to
    understand, although no attempt is made to teach 6800 or 6805
    programming.  The user should have a good understanding of machine
    language programming and also be familiar with basic DOS functions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EXAMPL~1.ASM

{% raw %}
```
; To become familiar with the segment feature you
; should assemble this file with and without the
; single object module swicth enabled.
;
;   a685  -o example         ;three object module files
                            ;     code.seg
                            ;     memory.seg
                            ;     rom2.seg
;
;   a685  example            ;one object module file example.obj


         .db h'00,o'77,h'77,d'77,77,077
         .org  h'20         ;start assembly at location 20 hex.
         .segment .memory   ;declare a new segmemt for ram memory
                            ;allocation
         .memory            ;select segment .memory as active(locaton counter)
                            ;for the .code segment(created by the assembler) is
                            ;saved for when we switch back.
         .org  h'8000       ;Ram starts at 8000 hex.
var1:    .rs 1              ;variable 1
var16:   .rs 2              ;16 bit variable
array:   .rs 100*2          ;100 16 bit word array
         .eject             ;lets start on a fresh page of paper.
                            ;notice that an page eject does not print!
                            ;test list off
         .command -l        ;this should not print
         .db "this is a .db test (fcc on some oem assemblers)"
         .command +l        ;this also should not print
                            ;this line should print
         .code              ;switch back to code segment
                            ; origin is where we left off.
loop:    .dw loop,loop2
         .drw loop,loop2
         .equ cr,13         ;equated idienifiers are constant.
         .equ htab,9
         .set temp,23       ;set identifiers may be re-set.
         .set temp,24
         .set temp,25
         .db  1,2,3,4,5,'p'
         .db  6,7,"this is a test\r\n\0"
         .dw  1,h'1234
         .drw 1,h'1234
         .page              ;start on a new 256 byte boundary.
loop2:   .db loop2 >> 3
         .segment .rom2,-x'800  ;my programmer only likes 0..n addresses
         .rom2
         .org h'800
         .db  "this is possibly an external rom programmed seperately."
         .code
         .end loop          ;end of assembly, specifying start address.

```
{% endraw %}

## EXAMPLE.ASM

{% raw %}
```
; To become familiar with the segment feature you
; should assemble this file with and without the
; single object module swicth enabled.
;
;   a68  -o example         ;three object module files
                            ;     code.seg
                            ;     memory.seg
                            ;     rom2.seg
;
;   a68  example            ;one object module file example.obj


         .db h'00,o'77,h'77,d'77,77,077
         .org  h'20         ;start assembly at location 20 hex.
         .segment .memory   ;declare a new segmemt for ram memory
                            ;allocation
         .memory            ;select segment .memory as active(locaton counter)
                            ;for the .code segment(created by the assembler) is
                            ;saved for when we switch back.
         .org  h'8000       ;Ram starts at 8000 hex.
var1:    .rs 1              ;variable 1
var16:   .rs 2              ;16 bit variable
array:   .rs 100*2          ;100 16 bit word array
         .eject             ;lets start on a fresh page of paper.
                            ;notice that an page eject does not print!
                            ;test list off
         .command -l        ;this should not print
         .db "this is a .db test (fcc on some oem assemblers)"
         .command +l        ;this also should not print
                            ;this line should print
         .code              ;switch back to code segment
                            ; origin is where we left off.
loop:    .dw loop,loop2
         .drw loop,loop2
         .equ cr,13         ;equated idienifiers are constant.
         .equ htab,9
         .set temp,23       ;set identifiers may be re-set.
         .set temp,24
         .set temp,25
         .db  1,2,3,4,5,'p'
         .db  6,7,"this is a test\r\n\0"
         .dw  1,h'1234
         .drw 1,h'1234
         .page              ;start on a new 256 byte boundary.
loop2:   .db loop2 >> 3
         .segment .rom2,-x'800  ;my programmer only likes 0..n addresses
         .rom2
         .org h'800
         .db  "this is possibly an external rom programmed seperately."
         .code
         .end loop          ;end of assembly, specifying start address.

```
{% endraw %}

## FILE0775.TXT

{% raw %}
```
Disk No:  775                                                           
Disk Title: PseudoSam Cross Assembler 68 and 685                        
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: PseudoSam 68 and 685                                     
Author Version: 1.6                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
PSEUDOSAM 68 and 685 are machine language cross-assembler programs for  
the Motorola 6800, 01, 02, 03, 08, and 6805 microprocessors.  These     
programs lets you construct 6800 and 6805 code on your IBM-PC so        
it can be transferred to a 6800 or 6805-based system for                
later use.                                                              
                                                                        
The PSEUDOSAM (Pseudo-brand Symbolic AsseMbler) assemblers conform to   
common syntax, based on the UNIX System V assembler syntax.  The opcode 
and addressing syntax is compatible with the manufacturer's, but label, 
directive, and expression operator syntax will differ.                  
                                                                        
The author of PSEUDOSAM chose this syntax because of UNIX's popularity, 
and to avoid the problem of maintaining compatibility with the many of  
OEM assemblers.  The documentation is well organized and easy to        
understand, although no attempt is made to teach 6800 or 6805           
programming.  The user should have a good understanding of machine      
language programming and also be familiar with basic DOS functions.     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## LABGEN.ASM

{% raw %}
```
; Some useful macros to help get you started.
;
; Please note that all of the examples use 6800 instructions and thus
; will generate error messages when assembled on other assemblers. Just
; ignore (or substitute the equivalent opcode for your processor) those
; messages--the macro ideas depicted are still valid.
;

; Unique generated labels.
;
; Some macros will require "local" labels unique to a given expansion.
; The following macros are one way of creating them.
;

; nlabel creates a new unique identifier (of the form l1nnnn, where n varies)
; each invocation.
;
; nlabel returns the current value of glabel, and then redefines glabel to
; the value one greater than glabel.
;
         define( glabel,10000)
         define( nlabel,``l'glabel`'define(`glabel',iner(glabel))')
;
; Now we have a unique label generator, but each time we call it the label
; will be different, and thus of little use for branches and jumps.
;
; We must assign this unique label string to an identifier for multiple
; uses.
;
         define(local1,nlabel)
local1:  nop
         jmp local1
         jsr local1
         undefine(`local1')
local1:  nop
;
; Above we define local1 to be the string generated by nlabel, use that
; string in several places, and then undefine it. Note that local1 after
; the undefine is "local1" and not a generated string. If defined locals
; are not undefined when we are done with them, we would quickly run out
; of memory space.

;

        define(loop, ` define(local1,nlabel)
local1:  nop
         jmp local1
         undefine(`local1')')

   loop
   loop
   loop

```
{% endraw %}

## LEVELI.DOC

{% raw %}
```










                             PseudoSam Assembler Manual Level I
                             Copyright(c) 1986,87,88 PseudoCorp
                             All right reserved!





Disclaimer:

            PseudoSam software is distributed as is, with no guarantee that
            it will work correctly in all situations.  In no event will the
            Author be liable for any damages, including lost profits,
            lost savings or other incidental or consequential damages
            arising out of the use of or inability to use these
            programs, even if the Author has been advised of the
            possibility of such damages, or for any claim by any other
            party.

            It is the users reponsibility to back up all important files!

            See copyright information in appendix B





                         Table of Contents

Chapter 1  PseudoSam Assemblers vs. other assemblers.

Chapter 2  Running the assembler program.

Chapter 3  Assembler statement syntax.

Chapter 4  Data types.

Chapter 5  Expressions.

Chapter 6  Assembler Directives.
  (also known as assembler pseudo-opcodes, or pseudo-ops)

Appendix A      ASCII character set.

Appendix B      Copyright information.


Chapter 1 PseudoSam assemblers vs. other assemblers

     All PseudoSam(Pseudo brand Symbolic AsseMbler) assemblers conform to
     a common syntax based on the UNIX system V assembler syntax. By
     conforming to this Pseudo standard, conflicts with the manufacturers
     syntax are created.

* The difference between another assembler's name and the PseudoSam name
  of an assembler directive can be circumvented by the .opdef
  directive.

  example

   .opdef  eject,.eject      ;defines eject to be synonymous with .eject
   .opdef  fcc,.db           ;fcc will now form constant characters as it
                             ;should.

*  A file syn.asm is distributed with the assembler with some useful
   redefinitions.










Unix system V is a trademark of AT & T.







Chapter 2  Running the assembler program

1.  Command line switch setting and source file specification.

     Assuming the user has an assembly language source file called foo.asm
     type the following command:

aXX foo

 where the PseudoSam assembler number is substituted for XX.

     The assembler will assemble the program foo.asm using the default
     assembler switch settings. the following files will be generated
     by the assembler:

     foo.lst   ;assembled listing shown the code conversion and
               ; any errors that where discover by the assembler.

     foo.obj   ;assembled object code in Hex format.

**  for a list of switch setting see the .command assembler directive
    description in chapter 6.

*** The assembler uses the following temporary file names.

    z0z0z0z0.tmp
    z1z1z1z1.tmp

    ANY files with these names will be DESTROYED by the
    by the assembler.







Chapter 3  Assembler statement syntax

1. Assembler Statements

     Assembler statements contain from zero to 4 fields as shown in
     following.

<label> <opcode> <expressions> <comment>

     All fields are optional, but they must be in this order.

A.   Labels (<label>) are symbolic names that are assigned the starting
     address of any code generated by the opcode and or expressions
     of the line containing the label declaration.(see section 2).

B.   Operation codes(<opcode>) tell the assembler what machine instruction
     to generate, or what assembler control function to perform.
     The operation code also tells the assembler what expressions are
     required to complete the machine instruction or assembler directive.
     (see chapter 6).

C.   Expression requirements are set by the opcode(see the microprocessor
     manufacturers reference manual or the assembler directives chapter
     for individual opcode requirements).(see chapter 5).

D.   Comments are notes written by the programmer to explain what the
     program is trying to accomplish. Comments generate no code.
     (see section 3).







2.  Labels

     Labels can be unlimited in length, but only the first eight characters
     are used to distinguish between them.  They must conform to the
     following syntax.

     <label>  -> <identifier>':'

     <identifier> -> <alphabetic character> <identifier character string>

     <alphabetic character> -> character in the set ['A'..'Z', 'a'..'z', '.']

     <identifier character string> -> any sequence of characters from the
                                      set ['A'..'Z','a'..'z', '.', '0'..'9']

example
abc:                  ;label referred to as abc
a c:                  ;not a valid label
         foo:         ;label referred to as foo
.123:                 ;label referred to as .123

* Case makes NO difference!

d:      ;is the same as
D:


3.  Comments
     Comments must start with a semi-colon ; and are terminated
     by an end of line or file( <lf>(^J) or <sub>(^Z) ). An end
     of line is inserted by typing the enter or return key by
     most text editors.







Chapter 4     Data types

1.  Integers

    Integer constants can be specified in any of the following forms:

A.  Binary

    b'bb             ;bb=string of binary digits
    B'bb

B.  Decimal

    ndd
    d'dd             ;n=nozero decimal digit
    D'dd             ;dd=string of decimal digits

C.  Octal

    0qq              ;qq=string of octal digits
    o'qq
    O'qq
    q'qq
    Q'qq

D.  Hexidecimal

    0x'hh            ;hh=string of hexidecimal digits
    0X'hh
    h'hh
    H'hh
    x'hh
    X'hh


Examples:

    077        ;octal number 77 = decimal 63
    b'0101     ;binary number 101 = decimal 5
    77         ;decimal number 77 = octal 115
    h'ff       ;hexidecimal ff = decimal 255






2.  Strings:

    Strings consist of a beginning quote " followed by any reasonable number
    of characters followed by an ending quote ". Control characters and double
    quotes " and backslash \ may not be used in strings directly.  These
    special characters are included by using a special escape sequence which
    the assembler translates into the appropriate ASCII code.

Note: Strings may not be used in expressions!
      Although character constants may(see below).

Escape sequences
  "\"" string containing "
  "\\" string containing \
  "\'" string containing '
  "\0" string containing null
  "\n" string containing linefeed
  "\r" string containing carriage return
  "\f" string containing formfeed
  "\t" string containing horizontal tab
  "\nnn" string containing the ASCII character who's code is o'nnn
         (nnn are octal digits).
  * see appendix A for ASCII codes.

3.  Character Constants:

    Character constants consist of  a single quote ' followed by
    a character or an escape sequence(see above) followed by a
    single quote '.

example:
   'A' = ASCII character value for the letter A = 65 (decimal);
   '\''= ASCII character value for the character ' = 39 (decimal).

Character constants are treated as integers by the assembler and
are valid where ever an integer value is valid.

example:
   'A' + 1 = 66

  * see appendix A for ASCII codes.

4.  Symbolic values

    Symbolic values are generally labels, but may be any identifier
    assigned an integer value(using .set or .equ pseudo-ops).

    As a special case the symbol * when used as an operand in an
    expression denotes the value of the location counter (the value
    the program counter will have during operation) at the beginning
    of the current line.






Chapter 5  Expressions

     All expressions evaluate to integer values modulo 65536(2^16) and are
     written in infix notation(the way you normally write them).  Operators
     provided are grouped below in order of precedence.

1. (unary)
~           logical bit wise complement(not) of its operand(one's complement).
-           arithemetic complement, or negation(two's complement).

2. (binary)
*           integer multiply (two's complement).
/           integer divide   (two's complement).
%           modulus          (result is always positive)
>>          logical shift right (left operand shifted right operand times).
<<          logical shift left (left operand shifted right operand times).
~           equivalent to  A or ( ~B ).

3. (binary)
|           logical bitwise or(inclusive-or) of two operands.
^           logical bitwise exclusive-or of two operands.
&           logical bitwise and of two operands.

4. (binary)
+           addition (two's complement).
-           subtraction (two's complement).

     Since this version does not generate relocatable code there exists only
     one "type" of operand that can be in an expression.  So anything goes
     except divide by 0(1 will be substituted ).

examples:
    -1 = h'ffff  (two's complement notation).
    -1 >> 8 = h'00ff
    -1 << 8 = h'ff00
    3 / 2 = 1
    6 / 2 = 3
    5 / 0 = 5
    -2 / 1 = -2
    -3 /-2 = 1
    2 * -3 = -6
    b'00 & b'11 = 0
    b'11 & b'10 = 2
    2 * b'01 & b'10 = 2
    b'01 ^ b'11 = 2
    b'01 | b'11 = 3

Notice that spaces are ignored in expressions.








Chapter 6  Assembler Directives
  (also known as assembler Pseudo-opcodes)

     The assembler recognizes the following directives:

      directive  section    description

      .command    1   ;set assembly options(similar to command line options).

      .org        2   ;set program origin.

      .equ        3   ;equate an identifier to an expression(permanent
                      ; assignment).

      .set        4   ;equate and identifier to an expression(temporary
                      ; assignment).

      .rs         5   ;reserve storage(memory) space.

      .db         6   ;define byte.

      .dw         7   ;define word(16 bit).

      .drw        8   ;define reversed word(16 bit).

      .eject      9   ;form feed in listing

      .page      10   ;align location counter on 256 byte memory
                      ; page boundary.

      .end       11   ;end of program

      .opdef     12   ;equate an identifier with another identifier.

      .segment   13   ;define a memory segment.

      <segment name>
                 14   ;select segment <segment name> as current segment.

      .null      15   ;this is a comment statement.





1. .command    <optionlist>   ;allows the programmer to set option switches
                              ;in the same manner as on the command line.
                              ;(the command line is the line typed to run
                              ; this program).

<optionlist> -> <option> ' ' <optionlist>
<optionlist> ->

<option> -> '-'<available option>
<option> -> '+'<available option>

<available option> -> 'a'<decimal number> ;Hex hode format.
                                          ;i => Intel Hex.


<available option> -> 'w'<decimal number> ;page width in columns(characters).
                                          ;(-,+ are ignored but one must be
                                          ; there).

<available option> -> 'h'<decimal number> ;page height in lines.
                                          ;(-,+ are ignored but one must be
                                          ; there).

<available option> -> 'l'                 ;listing on(+) or off(-)
                                          ;if set on command line it overrides
                                          ;all listing controls in program.

<available option> -> 'm'<decimal number> ;Machine level.
                                          ;1 => 6800,2,8.
                                          ;2 => 6801,3.

<available option> -> 's'                 ;symbol listing on(+) or off(-).

<available option> -> 'o'                 ;selects single object module
                                          ;file only(+), or multiple object
                                          ;module files(-)(one for each
                                          ;defined segment in the program).

<available option> -> 't'<drive>          ;specifies which drive to create
                                          ;all temporary files on(-,+ are
                                          ; ignored but one must be there).
                                          ;ONLY active on command line!

<available option> -> 'p'<drive>          ;specifies which drive to create
                                          ;the listing file on(-,+ are
                                          ; ignored but one must be there).
                                          ;ONLY active on command line!

<drive> -> <drive name>':'                ;e.g.  a:  b:  c:  d:

                           ;MS-DOS
<drive name> -> 'a'        ;drive a --usually a floppy disk
<drive name> -> 'b'        ;drive b --usually a second floppy disk
<drive name> -> 'c'        ;drive c --usually a hard disk, but may
                                      be a ram disk.
<drive name> -> 'd'        ;drive d --usually a ram disk, but may
                                      be a hard disk.

** The default options are:
  Intel: -a1 -m1 -w132 -h66 +l +s +o
  Motorola: -a2 -m1 -w132 -h66 +l +s +o







2. .org   <integer expression>    ;sets the assembler location counter
                                  ;to the value of expression.
                                  ;The expression MUST be evaluatable
                                  ;on the first pass. NO FORWARD
                                  ;REFERENCES!

3. .equ  <identifier> ',' <integer expression>
                                  ;gives identifier the value of the
                                  ;integer expression.
                                  ;<identifier> canNOT be redefined!
                                  ;also forward references are allowed
                                  ;as long as they are resolved by the
                                  ;second pass.

4. .set  <identifier> ',' <integer expression>
                                  ;gives identifier the value of the
                                  ;integer expression.
                                  ;<identifier> CAN be redefined later
                                  ; in the program!
                                  ;also forward references are allowed
                                  ;as long as they are resolved by the
                                  ;second pass.

5. .rs  <integer expression>      ;increments the location counter
                                  ;by the value of <integer expresson>
                                  ;effectively reserving that many bytes
                                  ;of memory.

6. .db  <expression-string list>

<expression-string list> -> <expression>','<expression-string list>
<expression-string list> -> <string>','<expression-string list>
<expression-string list> -> <expression>
<expression-string list> -> <string>

                                  ;creates a byte in the machine code
                                  ;for each <expression> in the list
                                  ;and a byte for each ascii character
                                  ;in the a string.
7. .dw  <expression list>

<expression list> -> <expression>','<expression list>
<expression list> -> <expression>

                                  ;creates a word(16 bit) in the machine code
                                  ;for each <expression> in the list.
                                  ;MOST significant byte is stored at LOWER
                                  ;address.






8. .drw  <expression list>

<expression list> -> <expression>','<expression list>
<expression list> -> <expression>

                                  ;creates a word(16 bit) in the machine code
                                  ;for each <expression> in the list.
                                  ;LEAST significant byte is stored at LOWER
                                  ;address.

9. .eject                         ;causes a form-feed character to be
                                  ;inserted in listing.(new listing page)

10. .page                         ;increments location counter to next
                                  ;256 byte page boundary.

11. .end <integer expression>     ;signals the end of the source program.
                                  ;the optional expression, if supplied,
                                  ;specifies the start address of the
                                  ;program, and is included in the
                                  ;Hex object module output
                                  ;of the active segment when the .end
                                  ;was encountered.


12. .opdef  <identifier>,<identifier>
                                  ;assigns the current definition of
                                  ;the second <identifier> to the
                                  ;first <identifier>.
                                  ;useful for renaming opcodes and
                                  ;pseudo-ops.

13. .segment <identifier> ',' <integer expression>
                                  ;defines a memory segment name.
                                  ;used to separate memory allocation
                                  ;and optionally generate seperate
                                  ;object files.(see 'o' assembly
                                  ;directive to activate).
                                  ;(used to seperate RAM, ROM, or
                                  ; ROMS)
                                  ;the optional <integer expression> is
                                  ;added to the location counter to
                                  ;offset the load address supplied
                                  ;in the object module. (does not
                                  ;affect listings addresses!)
                                  ;
                                  ;note: .code is the predefined default
                                  ;segment and cannot be redefined.

14. <segment name>                ;selects the segment <segment name>
                                  ;as the current memory segment.
                                  ;The location old segment location counter
                                  ;is saved and the previous value of the
                                  ;newly selected segments location counter
                                  ;is used(0 if not previously used).

15.  .null                        ;directs the assembler to treat this
                                  ;statement as a comment.  Useful to
                                  ;nullify opcodes when used in conjunction
                                  ;with the .opdef pseudo-op.







Appendix   A      ASCII character set



dec oct hex char     dec oct hex char  dec oct hex char  dec oct hex char

  0 000  00 ^@ null   32 040  20 sp     64 100  40 @      96 140  60 `
  1 001  01 ^A soh    33 041  21 !      65 101  41 A      97 141  61 a
  2 002  02 ^B stx    34 042  22 "      66 102  42 B      98 142  62 b
  3 003  03 ^C etx    35 043  23 #      67 103  43 C      99 143  63 c
  4 004  04 ^D eot    36 044  24 $      68 104  44 D     100 144  64 d
  5 005  05 ^E enq    37 045  25 %      69 105  45 E     101 145  65 e
  6 006  06 ^F ack    38 046  26 &      70 106  46 F     102 146  66 f
  7 007  07 ^G bel    39 047  27 '      71 107  47 G     103 147  67 g
  8 010  08 ^H bs     40 050  28 (      72 110  48 H     104 150  68 h
  9 011  09 ^I ht     41 051  29 )      73 111  49 I     105 151  69 i
 10 012  0A ^J lf     42 052  2A *      74 112  4A J     106 152  6A j
 11 013  0B ^K vt     43 053  2B +      75 113  4B K     107 153  6B k
 12 014  0C ^L ff     44 054  2C ,      76 114  4C L     108 154  6C l
 13 015  0D ^M cr     45 055  2D -      77 115  4D M     109 155  6D m
 14 016  0E ^N so     46 056  2E .      78 116  4E N     110 156  6E n
 15 017  0F ^O si     47 057  2F /      79 117  4F O     111 157  6F o
 16 020  10 ^P dle    48 060  30 0      80 120  50 P     112 160  70 p
 17 021  11 ^Q dc1    49 061  31 1      81 121  51 Q     113 161  71 q
 18 022  12 ^R dc2    50 062  32 2      82 122  52 R     114 162  72 r
 19 023  13 ^S dc3    51 063  33 3      83 123  53 S     115 163  73 s
 20 024  14 ^T dc4    52 064  34 4      84 124  54 T     116 164  74 t
 21 025  15 ^U nak    53 065  35 5      85 125  55 U     117 165  75 u
 22 026  16 ^V syn    54 066  36 6      86 126  56 V     118 166  76 v
 23 027  17 ^W etb    55 067  37 7      87 127  57 W     119 167  77 w
 24 030  18 ^X can    56 070  38 8      88 130  58 X     120 170  78 x
 25 031  19 ^Y em     57 071  39 9      89 131  59 Y     121 171  79 y
 26 032  1A ^Z sub    58 072  3A :      90 132  5A Z     122 172  7A z
 27 033  1B ^[ esc    59 073  3B ;      91 133  5B [     123 173  7B {
 28 034  1C ^\ fs     60 074  3C <      92 134  5C \     124 174  7C |
 29 035  1D ^] gs     61 075  3D =      93 135  5D ]     125 175  7D }
 30 036  1E ^^ rs     62 076  3E >      94 136  5E ^     126 176  7E ~
 31 037  1F ^_ us     63 077  3F ?      95 137  5F _     127 176  7F del

 ^ denotes control key simultaneous with character key.







Appendix B       Copyright Information:


Disclaimer:

            PseudoSam software is distributed as is, with no guarantee that it
            will work correctly in all situations.  In no event will the
            Author be liable for any damages, including lost profits,
            lost savings or other incidental or consequential damages
            arising out of the use of or inability to use these
            programs, even if the Author has been advised of the
            possibility of such damages, or for any claim by any other
            party.

Copyright Information:

            The entire PseudoSam distribution package, consisting of
            the main program, documentation files, and various data and
            utility files, is copyright (c) 1986, by PseudoCorp.

            The author reserves the exclusive right to distribute this
            package, or any part thereof, for profit.

            The name "PseudoSam (tm)", applied to an assembler
            program, is a trade mark of the PseudoCorp.

            PseudoSam version 1.x.xx and various subsidiary files may be
            copied freely by individuals for non-commercial purposes. It
            is expected that those who find the package useful will
            purchase the commercial version.
            ONLY UNMODIFIED VERSIONS DISPLAYING THE AUTHORS COPYRIGHT
            MAY BE COPIED.

            User groups and clubs are authorized to distribute PseudoSam
            software under the following conditions:

            1.  No charge is made for the software or documentation.  A
                nominal distribution fee may be charged, provided that
                it is no more than $10 total.

            3.  The program and documentation are not modified in ANY
                way, and are distributed together.


```
{% endraw %}

## LEVELI~1.DOC

{% raw %}
```










                             PseudoSam Assembler Manual Level I
                             Copyright(c) 1986,87,88 PseudoCorp
                             All right reserved!





Disclaimer:

            PseudoSam software is distributed as is, with no guarantee that
            it will work correctly in all situations.  In no event will the
            Author be liable for any damages, including lost profits,
            lost savings or other incidental or consequential damages
            arising out of the use of or inability to use these
            programs, even if the Author has been advised of the
            possibility of such damages, or for any claim by any other
            party.

            It is the users reponsibility to back up all important files!

            See copyright information in appendix B





                         Table of Contents

Chapter 1  PseudoSam Assemblers vs. other assemblers.

Chapter 2  Running the assembler program.

Chapter 3  Assembler statement syntax.

Chapter 4  Data types.

Chapter 5  Expressions.

Chapter 6  Assembler Directives.
  (also known as assembler pseudo-opcodes, or pseudo-ops)

Appendix A      ASCII character set.

Appendix B      Copyright information.


Chapter 1 PseudoSam assemblers vs. other assemblers

     All PseudoSam(Pseudo brand Symbolic AsseMbler) assemblers conform to
     a common syntax based on the UNIX system V assembler syntax. By
     conforming to this Pseudo standard, conflicts with the manufacturers
     syntax are created.

* The difference between another assembler's name and the PseudoSam name
  of an assembler directive can be circumvented by the .opdef
  directive.

  example

   .opdef  eject,.eject      ;defines eject to be synonymous with .eject
   .opdef  fcc,.db           ;fcc will now form constant characters as it
                             ;should.

*  A file syn.asm is distributed with the assembler with some useful
   redefinitions.










Unix system V is a trademark of AT & T.







Chapter 2  Running the assembler program

1.  Command line switch setting and source file specification.

     Assuming the user has an assembly language source file called foo.asm
     type the following command:

aXX foo

 where the PseudoSam assembler number is substituted for XX.

     The assembler will assemble the program foo.asm using the default
     assembler switch settings. the following files will be generated
     by the assembler:

     foo.lst   ;assembled listing shown the code conversion and
               ; any errors that where discover by the assembler.

     foo.obj   ;assembled object code in Hex format.

**  for a list of switch setting see the .command assembler directive
    description in chapter 6.

*** The assembler uses the following temporary file names.

    z0z0z0z0.tmp
    z1z1z1z1.tmp

    ANY files with these names will be DESTROYED by the
    by the assembler.







Chapter 3  Assembler statement syntax

1. Assembler Statements

     Assembler statements contain from zero to 4 fields as shown in
     following.

<label> <opcode> <expressions> <comment>

     All fields are optional, but they must be in this order.

A.   Labels (<label>) are symbolic names that are assigned the starting
     address of any code generated by the opcode and or expressions
     of the line containing the label declaration.(see section 2).

B.   Operation codes(<opcode>) tell the assembler what machine instruction
     to generate, or what assembler control function to perform.
     The operation code also tells the assembler what expressions are
     required to complete the machine instruction or assembler directive.
     (see chapter 6).

C.   Expression requirements are set by the opcode(see the microprocessor
     manufacturers reference manual or the assembler directives chapter
     for individual opcode requirements).(see chapter 5).

D.   Comments are notes written by the programmer to explain what the
     program is trying to accomplish. Comments generate no code.
     (see section 3).







2.  Labels

     Labels can be unlimited in length, but only the first eight characters
     are used to distinguish between them.  They must conform to the
     following syntax.

     <label>  -> <identifier>':'

     <identifier> -> <alphabetic character> <identifier character string>

     <alphabetic character> -> character in the set ['A'..'Z', 'a'..'z', '.']

     <identifier character string> -> any sequence of characters from the
                                      set ['A'..'Z','a'..'z', '.', '0'..'9']

example
abc:                  ;label referred to as abc
a c:                  ;not a valid label
         foo:         ;label referred to as foo
.123:                 ;label referred to as .123

* Case makes NO difference!

d:      ;is the same as
D:


3.  Comments
     Comments must start with a semi-colon ; and are terminated
     by an end of line or file( <lf>(^J) or <sub>(^Z) ). An end
     of line is inserted by typing the enter or return key by
     most text editors.







Chapter 4     Data types

1.  Integers

    Integer constants can be specified in any of the following forms:

A.  Binary

    b'bb             ;bb=string of binary digits
    B'bb

B.  Decimal

    ndd
    d'dd             ;n=nozero decimal digit
    D'dd             ;dd=string of decimal digits

C.  Octal

    0qq              ;qq=string of octal digits
    o'qq
    O'qq
    q'qq
    Q'qq

D.  Hexidecimal

    0x'hh            ;hh=string of hexidecimal digits
    0X'hh
    h'hh
    H'hh
    x'hh
    X'hh


Examples:

    077        ;octal number 77 = decimal 63
    b'0101     ;binary number 101 = decimal 5
    77         ;decimal number 77 = octal 115
    h'ff       ;hexidecimal ff = decimal 255






2.  Strings:

    Strings consist of a beginning quote " followed by any reasonable number
    of characters followed by an ending quote ". Control characters and double
    quotes " and backslash \ may not be used in strings directly.  These
    special characters are included by using a special escape sequence which
    the assembler translates into the appropriate ASCII code.

Note: Strings may not be used in expressions!
      Although character constants may(see below).

Escape sequences
  "\"" string containing "
  "\\" string containing \
  "\'" string containing '
  "\0" string containing null
  "\n" string containing linefeed
  "\r" string containing carriage return
  "\f" string containing formfeed
  "\t" string containing horizontal tab
  "\nnn" string containing the ASCII character who's code is o'nnn
         (nnn are octal digits).
  * see appendix A for ASCII codes.

3.  Character Constants:

    Character constants consist of  a single quote ' followed by
    a character or an escape sequence(see above) followed by a
    single quote '.

example:
   'A' = ASCII character value for the letter A = 65 (decimal);
   '\''= ASCII character value for the character ' = 39 (decimal).

Character constants are treated as integers by the assembler and
are valid where ever an integer value is valid.

example:
   'A' + 1 = 66

  * see appendix A for ASCII codes.

4.  Symbolic values

    Symbolic values are generally labels, but may be any identifier
    assigned an integer value(using .set or .equ pseudo-ops).

    As a special case the symbol * when used as an operand in an
    expression denotes the value of the location counter (the value
    the program counter will have during operation) at the beginning
    of the current line.






Chapter 5  Expressions

     All expressions evaluate to integer values modulo 65536(2^16) and are
     written in infix notation(the way you normally write them).  Operators
     provided are grouped below in order of precedence.

1. (unary)
~           logical bit wise complement(not) of its operand(one's complement).
-           arithemetic complement, or negation(two's complement).

2. (binary)
*           integer multiply (two's complement).
/           integer divide   (two's complement).
%           modulus          (result is always positive)
>>          logical shift right (left operand shifted right operand times).
<<          logical shift left (left operand shifted right operand times).
~           equivalent to  A or ( ~B ).

3. (binary)
|           logical bitwise or(inclusive-or) of two operands.
^           logical bitwise exclusive-or of two operands.
&           logical bitwise and of two operands.

4. (binary)
+           addition (two's complement).
-           subtraction (two's complement).

     Since this version does not generate relocatable code there exists only
     one "type" of operand that can be in an expression.  So anything goes
     except divide by 0(1 will be substituted ).

examples:
    -1 = h'ffff  (two's complement notation).
    -1 >> 8 = h'00ff
    -1 << 8 = h'ff00
    3 / 2 = 1
    6 / 2 = 3
    5 / 0 = 5
    -2 / 1 = -2
    -3 /-2 = 1
    2 * -3 = -6
    b'00 & b'11 = 0
    b'11 & b'10 = 2
    2 * b'01 & b'10 = 2
    b'01 ^ b'11 = 2
    b'01 | b'11 = 3

Notice that spaces are ignored in expressions.








Chapter 6  Assembler Directives
  (also known as assembler Pseudo-opcodes)

     The assembler recognizes the following directives:

      directive  section    description

      .command    1   ;set assembly options(similar to command line options).

      .org        2   ;set program origin.

      .equ        3   ;equate an identifier to an expression(permanent
                      ; assignment).

      .set        4   ;equate and identifier to an expression(temporary
                      ; assignment).

      .rs         5   ;reserve storage(memory) space.

      .db         6   ;define byte.

      .dw         7   ;define word(16 bit).

      .drw        8   ;define reversed word(16 bit).

      .eject      9   ;form feed in listing

      .page      10   ;align location counter on 256 byte memory
                      ; page boundary.

      .end       11   ;end of program

      .opdef     12   ;equate an identifier with another identifier.

      .segment   13   ;define a memory segment.

      <segment name>
                 14   ;select segment <segment name> as current segment.

      .null      15   ;this is a comment statement.





1. .command    <optionlist>   ;allows the programmer to set option switches
                              ;in the same manner as on the command line.
                              ;(the command line is the line typed to run
                              ; this program).

<optionlist> -> <option> ' ' <optionlist>
<optionlist> ->

<option> -> '-'<available option>
<option> -> '+'<available option>

<available option> -> 'a'<decimal number> ;Hex hode format.
                                          ;i => Intel Hex.


<available option> -> 'w'<decimal number> ;page width in columns(characters).
                                          ;(-,+ are ignored but one must be
                                          ; there).

<available option> -> 'h'<decimal number> ;page height in lines.
                                          ;(-,+ are ignored but one must be
                                          ; there).

<available option> -> 'l'                 ;listing on(+) or off(-)
                                          ;if set on command line it overrides
                                          ;all listing controls in program.

<available option> -> 'm'<decimal number> ;Machine level.
                                          ;1 => 6800,2,8.
                                          ;2 => 6801,3.

<available option> -> 's'                 ;symbol listing on(+) or off(-).

<available option> -> 'o'                 ;selects single object module
                                          ;file only(+), or multiple object
                                          ;module files(-)(one for each
                                          ;defined segment in the program).

<available option> -> 't'<drive>          ;specifies which drive to create
                                          ;all temporary files on(-,+ are
                                          ; ignored but one must be there).
                                          ;ONLY active on command line!

<available option> -> 'p'<drive>          ;specifies which drive to create
                                          ;the listing file on(-,+ are
                                          ; ignored but one must be there).
                                          ;ONLY active on command line!

<drive> -> <drive name>':'                ;e.g.  a:  b:  c:  d:

                           ;MS-DOS
<drive name> -> 'a'        ;drive a --usually a floppy disk
<drive name> -> 'b'        ;drive b --usually a second floppy disk
<drive name> -> 'c'        ;drive c --usually a hard disk, but may
                                      be a ram disk.
<drive name> -> 'd'        ;drive d --usually a ram disk, but may
                                      be a hard disk.

** The default options are:
  Intel: -a1 -m1 -w132 -h66 +l +s +o
  Motorola: -a2 -m1 -w132 -h66 +l +s +o







2. .org   <integer expression>    ;sets the assembler location counter
                                  ;to the value of expression.
                                  ;The expression MUST be evaluatable
                                  ;on the first pass. NO FORWARD
                                  ;REFERENCES!

3. .equ  <identifier> ',' <integer expression>
                                  ;gives identifier the value of the
                                  ;integer expression.
                                  ;<identifier> canNOT be redefined!
                                  ;also forward references are allowed
                                  ;as long as they are resolved by the
                                  ;second pass.

4. .set  <identifier> ',' <integer expression>
                                  ;gives identifier the value of the
                                  ;integer expression.
                                  ;<identifier> CAN be redefined later
                                  ; in the program!
                                  ;also forward references are allowed
                                  ;as long as they are resolved by the
                                  ;second pass.

5. .rs  <integer expression>      ;increments the location counter
                                  ;by the value of <integer expresson>
                                  ;effectively reserving that many bytes
                                  ;of memory.

6. .db  <expression-string list>

<expression-string list> -> <expression>','<expression-string list>
<expression-string list> -> <string>','<expression-string list>
<expression-string list> -> <expression>
<expression-string list> -> <string>

                                  ;creates a byte in the machine code
                                  ;for each <expression> in the list
                                  ;and a byte for each ascii character
                                  ;in the a string.
7. .dw  <expression list>

<expression list> -> <expression>','<expression list>
<expression list> -> <expression>

                                  ;creates a word(16 bit) in the machine code
                                  ;for each <expression> in the list.
                                  ;MOST significant byte is stored at LOWER
                                  ;address.






8. .drw  <expression list>

<expression list> -> <expression>','<expression list>
<expression list> -> <expression>

                                  ;creates a word(16 bit) in the machine code
                                  ;for each <expression> in the list.
                                  ;LEAST significant byte is stored at LOWER
                                  ;address.

9. .eject                         ;causes a form-feed character to be
                                  ;inserted in listing.(new listing page)

10. .page                         ;increments location counter to next
                                  ;256 byte page boundary.

11. .end <integer expression>     ;signals the end of the source program.
                                  ;the optional expression, if supplied,
                                  ;specifies the start address of the
                                  ;program, and is included in the
                                  ;Hex object module output
                                  ;of the active segment when the .end
                                  ;was encountered.


12. .opdef  <identifier>,<identifier>
                                  ;assigns the current definition of
                                  ;the second <identifier> to the
                                  ;first <identifier>.
                                  ;useful for renaming opcodes and
                                  ;pseudo-ops.

13. .segment <identifier> ',' <integer expression>
                                  ;defines a memory segment name.
                                  ;used to separate memory allocation
                                  ;and optionally generate seperate
                                  ;object files.(see 'o' assembly
                                  ;directive to activate).
                                  ;(used to seperate RAM, ROM, or
                                  ; ROMS)
                                  ;the optional <integer expression> is
                                  ;added to the location counter to
                                  ;offset the load address supplied
                                  ;in the object module. (does not
                                  ;affect listings addresses!)
                                  ;
                                  ;note: .code is the predefined default
                                  ;segment and cannot be redefined.

14. <segment name>                ;selects the segment <segment name>
                                  ;as the current memory segment.
                                  ;The location old segment location counter
                                  ;is saved and the previous value of the
                                  ;newly selected segments location counter
                                  ;is used(0 if not previously used).

15.  .null                        ;directs the assembler to treat this
                                  ;statement as a comment.  Useful to
                                  ;nullify opcodes when used in conjunction
                                  ;with the .opdef pseudo-op.







Appendix   A      ASCII character set



dec oct hex char     dec oct hex char  dec oct hex char  dec oct hex char

  0 000  00 ^@ null   32 040  20 sp     64 100  40 @      96 140  60 `
  1 001  01 ^A soh    33 041  21 !      65 101  41 A      97 141  61 a
  2 002  02 ^B stx    34 042  22 "      66 102  42 B      98 142  62 b
  3 003  03 ^C etx    35 043  23 #      67 103  43 C      99 143  63 c
  4 004  04 ^D eot    36 044  24 $      68 104  44 D     100 144  64 d
  5 005  05 ^E enq    37 045  25 %      69 105  45 E     101 145  65 e
  6 006  06 ^F ack    38 046  26 &      70 106  46 F     102 146  66 f
  7 007  07 ^G bel    39 047  27 '      71 107  47 G     103 147  67 g
  8 010  08 ^H bs     40 050  28 (      72 110  48 H     104 150  68 h
  9 011  09 ^I ht     41 051  29 )      73 111  49 I     105 151  69 i
 10 012  0A ^J lf     42 052  2A *      74 112  4A J     106 152  6A j
 11 013  0B ^K vt     43 053  2B +      75 113  4B K     107 153  6B k
 12 014  0C ^L ff     44 054  2C ,      76 114  4C L     108 154  6C l
 13 015  0D ^M cr     45 055  2D -      77 115  4D M     109 155  6D m
 14 016  0E ^N so     46 056  2E .      78 116  4E N     110 156  6E n
 15 017  0F ^O si     47 057  2F /      79 117  4F O     111 157  6F o
 16 020  10 ^P dle    48 060  30 0      80 120  50 P     112 160  70 p
 17 021  11 ^Q dc1    49 061  31 1      81 121  51 Q     113 161  71 q
 18 022  12 ^R dc2    50 062  32 2      82 122  52 R     114 162  72 r
 19 023  13 ^S dc3    51 063  33 3      83 123  53 S     115 163  73 s
 20 024  14 ^T dc4    52 064  34 4      84 124  54 T     116 164  74 t
 21 025  15 ^U nak    53 065  35 5      85 125  55 U     117 165  75 u
 22 026  16 ^V syn    54 066  36 6      86 126  56 V     118 166  76 v
 23 027  17 ^W etb    55 067  37 7      87 127  57 W     119 167  77 w
 24 030  18 ^X can    56 070  38 8      88 130  58 X     120 170  78 x
 25 031  19 ^Y em     57 071  39 9      89 131  59 Y     121 171  79 y
 26 032  1A ^Z sub    58 072  3A :      90 132  5A Z     122 172  7A z
 27 033  1B ^[ esc    59 073  3B ;      91 133  5B [     123 173  7B {
 28 034  1C ^\ fs     60 074  3C <      92 134  5C \     124 174  7C |
 29 035  1D ^] gs     61 075  3D =      93 135  5D ]     125 175  7D }
 30 036  1E ^^ rs     62 076  3E >      94 136  5E ^     126 176  7E ~
 31 037  1F ^_ us     63 077  3F ?      95 137  5F _     127 176  7F del

 ^ denotes control key simultaneous with character key.







Appendix B       Copyright Information:


Disclaimer:

            PseudoSam software is distributed as is, with no guarantee that it
            will work correctly in all situations.  In no event will the
            Author be liable for any damages, including lost profits,
            lost savings or other incidental or consequential damages
            arising out of the use of or inability to use these
            programs, even if the Author has been advised of the
            possibility of such damages, or for any claim by any other
            party.

Copyright Information:

            The entire PseudoSam distribution package, consisting of
            the main program, documentation files, and various data and
            utility files, is copyright (c) 1986, by PseudoCorp.

            The author reserves the exclusive right to distribute this
            package, or any part thereof, for profit.

            The name "PseudoSam (tm)", applied to an assembler
            program, is a trade mark of the PseudoCorp.

            PseudoSam version 1.x.xx and various subsidiary files may be
            copied freely by individuals for non-commercial purposes. It
            is expected that those who find the package useful will
            purchase the commercial version.
            ONLY UNMODIFIED VERSIONS DISPLAYING THE AUTHORS COPYRIGHT
            MAY BE COPIED.

            User groups and clubs are authorized to distribute PseudoSam
            software under the following conditions:

            1.  No charge is made for the software or documentation.  A
                nominal distribution fee may be charged, provided that
                it is no more than $10 total.

            3.  The program and documentation are not modified in ANY
                way, and are distributed together.


```
{% endraw %}

## MNEMTE~1.ASM

{% raw %}
```
         .org 0
         mult                  ;available only in special 6805's.
         brset  0,h'00,reltst1
         brset  0,h'ff,reltst1
         brset  1,h'00,reltst1
         brset  1,h'ff,reltst1
         brset  2,h'00,reltst1
         brset  2,h'ff,reltst1
         brset  3,h'00,reltst1
         brset  3,h'ff,reltst1
         brset  4,h'00,reltst1
         brset  4,h'ff,reltst1
         brset  5,h'00,reltst1
         brset  5,h'ff,reltst1
         brset  6,h'00,reltst1
         brset  6,h'ff,reltst1
         brset  7,h'00,reltst1
         brset  7,h'ff,reltst1
reltst1: brclr  0,h'00,reltst1
         brclr  0,h'ff,reltst1
         brclr  1,h'00,reltst1
         brclr  1,h'ff,reltst1
         brclr  2,h'00,reltst1
         brclr  2,h'ff,reltst1
         brclr  3,h'00,reltst1
         brclr  3,h'ff,reltst1
         brclr  4,h'00,reltst1
         brclr  4,h'ff,reltst1
         brclr  5,h'00,reltst1
         brclr  5,h'ff,reltst1
         brclr  6,h'00,reltst1
         brclr  6,h'ff,reltst1
         brclr  7,h'00,reltst1
         brclr  7,h'ff,reltst1
         bset  0,h'00
         bset  0,h'ff
         bset  1,h'00
         bset  1,h'ff
         bset  2,h'00
         bset  2,h'ff
         bset  3,h'00
         bset  3,h'ff
         bset  4,h'00
         bset  4,h'ff
         bset  5,h'00
         bset  5,h'ff
         bset  6,h'00
         bset  6,h'ff
         bset  7,h'00
         bset  7,h'ff
         bclr  0,h'00
         bclr  0,h'ff
         bclr  1,h'00
         bclr  1,h'ff
         bclr  2,h'00
         bclr  2,h'ff
         bclr  3,h'00
         bclr  3,h'ff
         bclr  4,h'00
         bclr  4,h'ff
         bclr  5,h'00
         bclr  5,h'ff
         bclr  6,h'00
         bclr  6,h'ff
         bclr  7,h'00
         bclr  7,h'ff
         add #h'00
         add #h'ff
         add 100
         add h'00,x
         add h'ff,x
         add 1000
         add h'00,x1
         add h'ff,x1
         add 1000,x
         add h'00,x2
         add h'ff,x2
         add 1000,x2
         adc #h'00
         adc #h'ff
         adc 100
         adc h'00,x
         adc h'ff,x
         adc 1000
         and #h'00
         and #h'ff
         and 100
         and h'00,x
         and h'ff,x
         and 1000
         bit #h'00
         bit #h'ff
         bit 100
         bit h'00,x
         bit h'ff,x
         bit 1000
         cmp #h'00
         cmp #h'ff
         cmp 100
         cmp h'00,x
         cmp h'ff,x
         cmp 1000
         eor #h'00
         eor #h'ff
         eor 100
         eor h'00,x
         eor h'ff,x
         eor 1000
         lda #h'00
         lda #h'ff
         lda 100
         lda h'00,x
         lda h'ff,x
         lda 1000
         ora #h'00
         ora #h'ff
         ora 100
         ora h'00,x
         ora h'ff,x
         ora 1000
         sta 100
         sta h'00,x
         sta h'ff,x
         sta 1000
         sub #h'00
         sub #h'ff
         sub 100
         sub h'00,x
         sub h'ff,x
         sub 1000
         sbc #h'00
         sbc #h'ff
         sbc 100
         sbc h'00,x
         sbc h'ff,x
         sbc 1000
         clra
         clrx
         clr 100
         clr h'00,x
         clr h'ff,x
         clr 0,x
         coma
         comx
         com 100
         com h'00,x
         com h'ff,x
         com 0,x
         nega
         negx
         neg 100
         neg h'00,x
         neg h'ff,x
         neg 0,x
         deca
         decx
         dec 100
         dec h'00,x
         dec h'ff,x
         dec 0,x
         inca
         incx
         inc 100
         inc h'00,x
         inc h'ff,x
         inc 0,x
         rola
         rolx
         rol 100
         rol h'00,x
         rol h'ff,x
         rol 0,x
         rora
         rorx
         ror 100
         ror h'00,x
         ror h'ff,x
         ror 0,x
         lsla
         lslx
         lsl 100
         lsl h'00,x
         lsl h'ff,x
         lsl 0,x
         asra
         asrx
         asr 100
         asr h'00,x
         asr h'ff,x
         asr 0,x
         lsra
         lsrx
         lsr 100
         lsr h'00,x
         lsr h'ff,x
         lsr 0,x
         tsta
         tstx
         tst 100
         tst h'00,x
         tst h'ff,x
         tst 0,x
         jmp x
         jmp 0,x
         jmp 100,x
         jmp 1000,x
         jmp 100,x1
         jmp 0,x1
         jmp 100
         jmp 1000
         jsr x
         jsr 0,x
         jsr 100,x
         jsr 1000,x
         jsr 100,x1
         jsr 0,x1
         jsr 100
         jsr 1000
         ldx #h'00
         ldx #h'ff
         ldx x
         ldx 0,x
         ldx 100,x
         ldx 1000,x
         ldx 100,x1
         ldx 0,x1
         ldx 100
         ldx 1000
         cpx #h'00
         cpx #h'ff
         cpx x
         cpx 0,x
         cpx 100,x
         cpx 1000,x
         cpx 100,x1
         cpx 0,x1
         cpx 100
         cpx 1000
         stx x
         stx 0,x
         stx 100,x
         stx 1000,x
         stx 100,x1
         stx 0,x1
         stx 100
         stx 1000
         tax
         txa
         nop
         rti
         rts
         swi
         wait
         clc
         cli
         rsp
         sec
         sei
         stop
         bra reltst
         brn reltst
         bhi reltst
         bls reltst
         bcc reltst
         bhs reltst
         bcs reltst
         blo reltst
reltst:  bne reltst
         beq reltst
         bhcc reltst
         bhcs reltst
         bpl reltst
         bmi reltst
         bmc reltst
         bms reltst
         bil reltst
         bih reltst
         bsr reltst
synctst1:
         brset forbit0,forward1,reltst2
         brset forbit0,forward2,reltst2
         brset forbit1,forward1,reltst2
         brset forbit1,forward2,reltst2
         brset forbit2,forward1,reltst2
         brset forbit2,forward2,reltst2
         brset forbit3,forward1,reltst2
         brset forbit3,forward2,reltst2
         brset forbit4,forward1,reltst2
         brset forbit4,forward2,reltst2
         brset forbit5,forward1,reltst2
         brset forbit5,forward2,reltst2
         brset forbit6,forward1,reltst2
         brset forbit6,forward2,reltst2
         brset forbit7,forward1,reltst2
         brset forbit7,forward2,reltst2
reltst2: brclr forbit0,forward1,reltst2
         brclr forbit0,forward2,reltst2
         brclr forbit1,forward1,reltst2
         brclr forbit1,forward2,reltst2
         brclr forbit2,forward1,reltst2
         brclr forbit2,forward2,reltst2
         brclr forbit3,forward1,reltst2
         brclr forbit3,forward2,reltst2
         brclr forbit4,forward1,reltst2
         brclr forbit4,forward2,reltst2
         brclr forbit5,forward1,reltst2
         brclr forbit5,forward2,reltst2
         brclr forbit6,forward1,reltst2
         brclr forbit6,forward2,reltst2
         brclr forbit7,forward1,reltst2
         brclr forbit7,forward2,reltst2
         bset forbit0,forward1
         bset forbit0,forward2
         bset forbit1,forward1
         bset forbit1,forward2
         bset forbit2,forward1
         bset forbit2,forward2
         bset forbit3,forward1
         bset forbit3,forward2
         bset forbit4,forward1
         bset forbit4,forward2
         bset forbit5,forward1
         bset forbit5,forward2
         bset forbit6,forward1
         bset forbit6,forward2
         bset forbit7,forward1
         bset forbit7,forward2
         bclr forbit0,forward1
         bclr forbit0,forward2
         bclr forbit1,forward1
         bclr forbit1,forward2
         bclr forbit2,forward1
         bclr forbit2,forward2
         bclr forbit3,forward1
         bclr forbit3,forward2
         bclr forbit4,forward1
         bclr forbit4,forward2
         bclr forbit5,forward1
         bclr forbit5,forward2
         bclr forbit6,forward1
         bclr forbit6,forward2
         bclr forbit7,forward1
         bclr forbit7,forward2
         add #forward1
         add #forward2
         add 100
         add forward1
         add forward1,x
         add forward2,x
         add 1000
         add forward1,x1
         add forward2,x1
         add 1000,x
         add forward1,x2
         add forward2,x2
         add 1000,x2
         add forward3,x
         add forward1,x1
         add forward2,x1
         add forward3,x2
         adc #forward1
         adc #forward2
         adc 100
         adc forward1,x
         adc forward2,x
         adc 1000
         and #forward1
         and #forward2
         and 100
         and forward1,x
         and forward2,x
         and 1000
         bit #forward1
         bit #forward2
         bit 100
         bit forward1,x
         bit forward2,x
         bit 1000
         cmp #forward1
         cmp #forward2
         cmp 100
         cmp forward1,x
         cmp forward2,x
         cmp 1000
         eor #forward1
         eor #forward2
         eor 100
         eor forward1,x
         eor forward2,x
         eor 1000
         lda #forward1
         lda #forward2
         lda 100
         lda forward1,x
         lda forward2,x
         lda 1000
         ora #forward1
         ora #forward2
         ora 100
         ora forward1,x
         ora forward2,x
         ora 1000
         sta 100
         sta forward1,x
         sta forward2,x
         sta 1000
         sub #forward1
         sub #forward2
         sub 100
         sub forward1,x
         sub forward2,x
         sub 1000
         sbc #forward1
         sbc #forward2
         sbc 100
         sbc forward1,x
         sbc forward2,x
         sbc 1000
         clra
         clrx
         clr 100
         clr forward1
         clr forward2
         clr forward1,x
         clr forward2,x
         clr 0,x
         coma
         comx
         com 100
         com forward1,x
         com forward2,x
         com 0,x
         nega
         negx
         neg 100
         neg forward1,x
         neg forward2,x
         neg 0,x
         deca
         decx
         dec 100
         dec forward1,x
         dec forward2,x
         dec 0,x
         inca
         incx
         inc 100
         inc forward1,x
         inc forward2,x
         inc 0,x
         rola
         rolx
         rol 100
         rol forward1,x
         rol forward2,x
         rol 0,x
         rora
         rorx
         ror 100
         ror forward1,x
         ror forward2,x
         ror 0,x
         lsla
         lslx
         lsl 100
         lsl forward1,x
         lsl forward2,x
         lsl 0,x
         asra
         asrx
         asr 100
         asr forward1,x
         asr forward2,x
         asr 0,x
         lsra
         lsrx
         lsr 100
         lsr forward1,x
         lsr forward2,x
         lsr 0,x
         tsta
         tstx
         tst 100
         tst forward1,x
         tst forward2,x
         tst 0,x
         tst 0,x1
         tst h'ff,x1
         jmp x
         jmp 0,x
         jmp 100,x
         jmp 1000,x
         jmp 100,x1
         jmp 0,x1
         jmp 100
         jmp 1000
         jsr x
         jsr 0,x
         jsr 100,x
         jsr 1000,x
         jsr 100,x1
         jsr 0,x1
         jsr 100
         jsr forward2
         ldx #forward1
         ldx #forward2
         ldx x
         ldx 0,x
         ldx 100,x
         ldx 1000,x
         ldx 100,x1
         ldx 0,x1
         ldx 100
         ldx 1000
         cpx #forward1
         cpx #forward2
         cpx x
         cpx 0,x
         cpx 100,x
         cpx 1000,x
         cpx 100,x1
         cpx 0,x1
         cpx 100
         cpx 1000
         stx x
         stx 0,x
         stx 100,x
         stx 1000,x
         stx 100,x1
         stx 0,x1
         stx 100
         stx 1000
         tax
         txa
         nop
         rti
         rts
         swi
         wait
         clc
         cli
         rsp
         sec
         sei
         stop
         bra reltst3
         brn reltst3
         bhi reltst3
         bls reltst3
         bcc reltst3
         bcs reltst3
reltst3:  bne reltst3
         beq reltst3
         bhcc reltst3
         bhcs reltst3
         bpl reltst3
         bmi reltst3
         bmc reltst3
         bms reltst3
         bil reltst3
         bih reltst3
         bsr reltst3
synctst2:
        .equ forward1,h'00
        .equ forward2,h'ff
        .equ forward3,1000
        .equ forbit0,0
        .equ forbit1,1
        .equ forbit2,2
        .equ forbit3,3
        .equ forbit4,4
        .equ forbit5,5
        .equ forbit6,6
        .equ forbit7,7
        .org h'1000
         .end
```
{% endraw %}

## MNEMTEST.ASM

{% raw %}
```
;        Motorola Instruction Set Example
;
;  The following program listing provides the user with an example
;  of the motorola 6800 addressing modes as implemented by PseudoCode.
;
;  Familiarity with the following is suggested.
;
         .org 0
         adda #h'00           ;immediate addressing
         adda #h'ff
         adda 100             ;direct addressing
         adda > 100           ;forced extended addressing
         adda < forward1      ;forced direct addressing
         adda > forward1      ;forced extended addressing (not needed)
         adda < 100           ;forced direct addressing  (not needed)
         adda h'00,x          ;indexed addressing
         adda h'ff,x
         adda 1000            ;extended addressing
         addb #h'00
         addb #h'ff
         addb 100
         addb h'00,x
         addb h'ff,x
         addb 1000
         adca #h'00
         adca #h'ff
         adca 100
         adca h'00,x
         adca h'ff,x
         adca 1000
         adcb #h'00
         adcb #h'ff
         adcb 100
         adcb h'00,x
         adcb h'ff,x
         adcb 1000
         anda #h'00
         anda #h'ff
         anda 100
         anda h'00,x
         anda h'ff,x
         anda 1000
         andb #h'00
         andb #h'ff
         andb 100
         andb h'00,x
         andb h'ff,x
         andb 1000
         bita #h'00
         bita #h'ff
         bita 100
         bita h'00,x
         bita h'ff,x
         bita 1000
         bitb #h'00
         bitb #h'ff
         bitb 100
         bitb h'00,x
         bitb h'ff,x
         bitb 1000
         cmpa #h'00
         cmpa #h'ff
         cmpa 100
         cmpa h'00,x
         cmpa h'ff,x
         cmpa 1000
         cmpb #h'00
         cmpb #h'ff
         cmpb 100
         cmpb h'00,x
         cmpb h'ff,x
         cmpb 1000
         eora #h'00
         eora #h'ff
         eora 100
         eora h'00,x
         eora h'ff,x
         eora 1000
         eorb #h'00
         eorb #h'ff
         eorb 100
         eorb h'00,x
         eorb h'ff,x
         eorb 1000
         ldaa > 100           ;forced extended addressing
         ldaa < forward1      ;forced direct addressing
         ldaa > forward1      ;forced extended addressing (not needed)
         ldaa < 100           ;forced direct addressing  (not needed)
         ldaa #h'00
         ldaa #h'ff
         ldaa 100
         ldaa h'00,x
         ldaa h'ff,x
         ldaa 1000
         ldab #h'00
         ldab #h'ff
         ldab 100
         ldab h'00,x
         ldab h'ff,x
         ldab 1000
         oraa #h'00
         oraa #h'ff
         oraa 100
         oraa h'00,x
         oraa h'ff,x
         oraa 1000
         orab #h'00
         orab #h'ff
         orab 100
         orab h'00,x
         orab h'ff,x
         orab 1000
         staa 100
         staa h'00,x
         staa h'ff,x
         staa 1000
         stab 100
         stab h'00,x
         stab h'ff,x
         stab 1000
         suba #h'00
         suba #h'ff
         suba 100
         suba h'00,x
         suba h'ff,x
         suba 1000
         subb #h'00
         subb #h'ff
         subb 100
         subb h'00,x
         subb h'ff,x
         subb 1000
         sbca #h'00
         sbca #h'ff
         sbca 100
         sbca h'00,x
         sbca h'ff,x
         sbca 1000
         sbcb #h'00
         sbcb #h'ff
         sbcb 100
         sbcb h'00,x
         sbcb h'ff,x
         sbcb 1000
         cpx #h'00
         cpx #h'ff
         cpx 100
         cpx h'00,x
         cpx h'ff,x
         cpx 1000
         ldx #h'00
         ldx #h'ff
         ldx 100
         ldx h'00,x
         ldx h'ff,x
         ldx 100
         ldx 1000
         ldx  > 100
         ldx  > 1000
         ldx  < 100
         ldx  < 1000
         ldx  > forward3
         ldx  > forward4
         ldx  < forward3
         lds #h'00
         lds #h'ff
         lds 100
         lds h'00,x
         lds h'ff,x
         lds 1000
         stx 100
         stx h'00,x
         stx h'ff,x
         stx 1000
         sts 100
         sts h'00,x
         sts h'ff,x
         sts 1000
         clr 100
         clr h'00,x
         clr h'ff,x
         clr 1000
         com 100
         com h'00,x
         com h'ff,x
         com 1000
         neg 100
         neg h'00,x
         neg h'ff,x
         neg 1000
         dec 100
         dec h'00,x
         dec h'ff,x
         dec 1000
         inc 100
         inc h'00,x
         inc h'ff,x
         inc 1000
         rol 100
         rol h'00,x
         rol h'ff,x
         rol 1000
         ror 100
         ror h'00,x
         ror h'ff,x
         ror 1000
         asl 100
         asl h'00,x
         asl h'ff,x
         asl 1000
         asr 100
         asr h'00,x
         asr h'ff,x
         asr 1000
         lsr 100
         lsr h'00,x
         lsr h'ff,x
         lsr 1000
         tst 100
         tst h'00,x
         tst h'ff,x
         tst 1000
         jmp 100
         jmp h'00,x
         jmp h'ff,x
         jmp 1000
         jsr 100     ;should be extended addressing
         jsr h'00,x
         jsr h'ff,x
         jsr 1000
         aba
         clra
         clrb
         cba
         coma
         comb
         nega
         negb
         daa
         deca
         decb
         inca
         incb
         psha
         pshb
         pula
         pulb
         rola
         rolb
         rora
         rorb
         asla
         aslb
         asra
         asrb
         lsra
         lsrb
         sba
         tab
         tba
         tsta
         tstb
         dex
         des
         inx
         ins
         txs
         tsx
         nop
         rti
         rts
         swi
         wai
         clc
         cli
         clv
         sec
         sei
         sev
         tap
         tpa
         bra reltst
         bcc reltst
         bcs reltst
         beq reltst
         bge reltst
         bgt reltst
reltst:  bhi reltst
         ble reltst
         bls reltst
         blt reltst
         bmi reltst
         bne reltst
         bvc reltst
         bvs reltst
         bpl reltst
         bsr reltst

         adda # forward1
         adda #forward2
         adda forward3
         adda  forward1,x
         adda forward2,x
         adda forward4
         addb # forward1
         addb #forward2
         addb forward3
         addb  forward1,x
         addb forward2,x
         addb forward4
         adca # forward1
         adca #forward2
         adca forward3
         adca  forward1,x
         adca forward2,x
         adca forward4
         adcb # forward1
         adcb #forward2
         adcb forward3
         adcb  forward1,x
         adcb forward2,x
         adcb forward4
         anda # forward1
         anda #forward2
         anda forward3
         anda  forward1,x
         anda forward2,x
         anda forward4
         andb # forward1
         andb #forward2
         andb forward3
         andb  forward1,x
         andb forward2,x
         andb forward4
         bita # forward1
         bita #forward2
         bita forward3
         bita  forward1,x
         bita forward2,x
         bita forward4
         bitb # forward1
         bitb #forward2
         bitb forward3
         bitb  forward1,x
         bitb forward2,x
         bitb forward4
         cmpa # forward1
         cmpa #forward2
         cmpa forward3
         cmpa  forward1,x
         cmpa forward2,x
         cmpa forward4
         cmpb # forward1
         cmpb #forward2
         cmpb forward3
         cmpb  forward1,x
         cmpb forward2,x
         cmpb forward4
         eora # forward1
         eora #forward2
         eora forward3
         eora  forward1,x
         eora forward2,x
         eora forward4
         eorb # forward1
         eorb #forward2
         eorb forward3
         eorb  forward1,x
         eorb forward2,x
         eorb forward4
         ldaa # forward1
         ldaa #forward2
         ldaa forward3
         ldaa  forward1,x
         ldaa forward2,x
         ldaa forward4
         ldab # forward1
         ldab #forward2
         ldab forward3
         ldab  forward1,x
         ldab forward2,x
         ldab forward4
         oraa # forward1
         oraa #forward2
         oraa forward3
         oraa  forward1,x
         oraa forward2,x
         oraa forward4
         orab # forward1
         orab #forward2
         orab forward3
         orab  forward1,x
         orab forward2,x
         orab forward4
         staa forward3
         staa  forward1,x
         staa forward2,x
         staa forward4
         stab forward3
         stab  forward1,x
         stab forward2,x
         stab forward4
         suba # forward1
         suba #forward2
         suba forward3
         suba  forward1,x
         suba forward2,x
         suba forward4
         subb # forward1
         subb #forward2
         subb forward3
         subb  forward1,x
         subb forward2,x
         subb forward4
         sbca # forward1
         sbca #forward2
         sbca forward3
         sbca  forward1,x
         sbca forward2,x
         sbca forward4
         sbcb # forward1
         sbcb #forward2
         sbcb forward3
         sbcb  forward1,x
         sbcb forward2,x
         sbcb forward4
         cpx # forward1
         cpx #forward2
         cpx forward3
         cpx  forward1,x
         cpx forward2,x
         cpx forward4
         ldx # forward1
         ldx #forward2
         ldx forward3
         ldx  forward1,x
         ldx forward2,x
         ldx forward4
         lds # forward1
         lds #forward2
         lds forward3
         lds  forward1,x
         lds forward2,x
         lds forward4
         stx forward3
         stx  forward1,x
         stx forward2,x
         stx forward4
         sts forward3
         sts  forward1,x
         sts forward2,x
         sts forward4
         clr forward3
         clr  forward1,x
         clr forward2,x
         clr forward4
         com forward3
         com  forward1,x
         com forward2,x
         com forward4
         neg forward3
         neg  forward1,x
         neg forward2,x
         neg forward4
         dec forward3
         dec  forward1,x
         dec forward2,x
         dec forward4
         inc forward3
         inc  forward1,x
         inc forward2,x
         inc forward4
         rol forward3
         rol  forward1,x
         rol forward2,x
         rol forward4
         ror forward3
         ror  forward1,x
         ror forward2,x
         ror forward4
         asl forward3
         asl  forward1,x
         asl forward2,x
         asl forward4
         asr forward3
         asr  forward1,x
         asr forward2,x
         asr forward4
         lsr forward3
         lsr  forward1,x
         lsr forward2,x
         lsr forward4
         tst forward3
         tst  forward1,x
         tst forward2,x
         tst forward4
         jmp forward3
         jmp  forward1,x
         jmp forward2,x
         jmp forward4
         jsr forward3
         jsr  forward1,x
         jsr forward2,x
         jsr forward4
         aba
         clra
         clrb
         cba
         coma
         comb
         nega
         negb
         daa
         deca
         decb
         inca
         incb
         psha
         pshb
         pula
         pulb
         rola
         rolb
         rora
         rorb
         asla
         aslb
         asra
         asrb
         lsra
         lsrb
         sba
         tab
         tba
         tsta
         tstb
         dex
         des
         inx
         ins
         txs
         tsx
         nop
         rti
         rts
         swi
         wai
         clc
         cli
         clv
         sec
         sei
         sev
         tap
         tpa
         bra reltst2
         bcc reltst2
         bcs reltst2
         beq reltst2
         bge reltst2
         bgt reltst2
reltst2:  bhi reltst2
         ble reltst2
         bls reltst2
         blt reltst2
         bmi reltst2
         bne reltst2
         bvc reltst2
         bvs reltst2
         bpl reltst2
         bsr reltst2
synctst2:
         .equ forward1,h'00
         .equ forward2,h'ff
         .equ forward3,100
         .equ forward4,1000
         .org 1000
         .end
```
{% endraw %}

## T1.ASM

{% raw %}
```
         .title "Intel compatibility test"
         .opdef dw,.drw
         .opdef db,.db
         .opdef org,.org
         .opdef set,.cset
         .opdef equ,.cequ
         .opdef end,.end
         dw 23,1,2
         dw $23,$1,$2
         dw `23'
         macro testmacro, `dw 23, $1,$2'
         macro testmacro2, `db $1
         db $2,022h,01b,022d,44q
         dw $3,033
         db "this is a test"'
         ;test motorola hex
         changemacroprefix(`@');
         macro testmacro3, `dw 23,@1,@2 ';
         macro testmacro4, `db @1
         db @2,$22,$022
         dw @3,033
         db "this is a test"'
         ;test 1
         testmacro 1,2
         ;test2
         testmacro2 1,2,3
         ;test3
         testmacro3 4,5
         ;test4
         testmacro4 6,7,`8
                  db 9'

         end
```
{% endraw %}

## TEST.ASM

{% raw %}
```
;        Motorola Instruction Set Example
;
;  The following program listing provides the user with an example
;  of the motorola 6800 addressing modes as implemented by PseudoCode.
;
;  Familiarity with the following is suggested.
;
         .command +p a:
         .org 0
         adda #h'00           ;immediate addressing
         adda #h'ff
         adda 100             ;direct addressing
         adda > 100           ;forced extended addressing
         adda < 100           ;forced direct addressing  (not needed)
         adda h'00,x          ;indexed addressing
         adda h'ff,x
         .end
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0775

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   6-16-87   2:26p
    GO       TXT      1268   7-06-90   2:48a
    FILE0775 TXT      2369   7-10-90   1:28p
    A68      EXE     55088   1-29-90   7:33p
    BROCH    PC      27838   2-05-90  10:44a
    EXAMPLE  ASM      2290   5-15-90  10:28a
    LABGEN   ASM      1645  12-16-88   8:25p
    LEVELI   DOC     23780   3-22-90   6:29a
    MNEMTEST ASM     12793   5-22-90   9:49a
    READI    ME       1465   2-07-90   3:39p
    TEST     ASM       626   5-07-90   8:52a
    A685     EXE     55424   1-29-90   7:34p
    BROCH~1  PC      27838   2-05-90  10:44a
    EXAMPL~1 ASM      2292  11-30-86   5:52p
    LEVELI~1 DOC     23780   3-22-90   6:29a
    MNEMTE~1 ASM     13022  11-09-89   6:10p
    READI~1  ME       1465   2-07-90   3:39p
    T1       ASM       855   3-06-90   3:09p
           18 file(s)     253876 bytes
                           57344 bytes free
