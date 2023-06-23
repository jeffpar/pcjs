---
layout: page
title: "PC-SIG Diskette Library (Disk #777)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0777/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0777"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PSEUDOSAM CROSS ASSEMBLER 48 AND 51"

    PSEUDOSAM 48 and 51 are machine language cross-assembler programs
    forthe INTEL 8748 and INTEL 8751 microprocessors.  These programs let
    you construct 8748 and 8751 code on your IBM PC, to be
    transferred to an 8748- or 8751-based system for use.
    
    The PSEUDOSAM (Pseudo brand Symbolic AsseMbler) assemblers conform to
    common syntax, based on the UNIX System V assembler syntax.  The opcode
    and addressing syntax is compatible with the manufacturer's, but label,
    directive, and expression operator syntax will differ.
    
    The author of PSEUDOSAM chose this syntax because of UNIX's popularity,
    and to avoid the problem of maintaining compatibility with the many OEM
    assemblers.  The documentation is well organized and easy to understand,
    although no attempt is made to teach 8748 or 8751 programming.  You
    should have a good understanding of machine language programming and
    also be familiar with basic DOS functions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EXAMPLE.ASM

{% raw %}
```
; To become familiar with the segment feature you
; should assemble this file with and without the
; single object module swicth enabled.
;
;   a48  -o example         ;three object module files
                            ;     code.seg
                            ;     memory.seg
                            ;     rom2.seg
;
;   a48  example            ;one object module file example.obj



         jmp loop
         .org  h'20         ;start assembly at location 20 hex.
         .segment .memory   ;declare a new segmemt for ram memory
                            ;allocation
         .memory            ;select segment .memory as active(locaton counter)
                            ;for the .code segment(created by the assembler) is
                            ;saved for when we switch back.
         .org  h'00         ;not really necessary as origin of 0 is assumed.
regbank0:
b0r0:    .rs   1            ;bank 0 register 0
b0r1:    .rs   1            ;bank 0 register 1
b0r2:    .rs   1            ;bank 0 register 2
b0r3:    .rs   1            ;bank 0 register 3
b0r4:    .rs   1            ;bank 0 register 4
b0r5:    .rs   1            ;bank 0 register 5
b0r6:    .rs   1            ;bank 0 register 6
b0r7:    .rs   1            ;bank 0 register 7
         .org 24
regbank1:
b1r0:    .rs   1            ;bank 1 register 0
b1r1:    .rs   1            ;bank 1 register 1
b1r2:    .rs   1            ;bank 1 register 2
b1r3:    .rs   1            ;bank 1 register 3
b1r4:    .rs   1            ;bank 1 register 4
b1r5:    .rs   1            ;bank 1 register 5
b1r6:    .rs   1            ;bank 1 register 6
b1r7:    .rs   1            ;bank 1 register 7
         .eject             ;lets start on a fresh page of paper.
         .code              ;switch back to code segment
                            ; origin is where we left off.
loop:    mov a,#h'22
         mov r0,#h'11
         add a,r0
         jmp loop2          ;jump off page.
         .equ cr,13         ;equated idienifiers are constant.
         .equ tab,9
         .set temp,23       ;set identifiers may be re-set.
         .set temp,24
         .set temp,25
         .db  1,2,3,4,5,'p'
         .db  6,7,"this is a test\r\n\0"
         .dw  1,h'1234
         .drw 1,h'1234
         .page              ;start on a new 256 byte boundary.
loop2:   jmp loop
         .segment .rom2
         .rom2
         .org h'800
         .db  "this is possibly an external rom programmed seperately."
         .code
         .end loop          ;end of assembly, specifying start address.

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

## MNEM41.ASM

{% raw %}
```
         .org 0
         .command           +m2
         mov sts,a          ;8041 specific opcodes
         en flags
         en dma
         in a,dbb
         out dbb,a
         jnibf branch1
         jobf  branch1      ;end 8041
branch1: add a,#00
         add a,#h'ff
         add a,@r0
         add a,@r1
         add a,r0           ;test all 8048 opcodes in all configurations
         add a,r1           ;all machine mnemonics copyright Intel corp. 1976
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#00
         addc a,#h'ff
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         anl a,#00
         anl a,#h'ff
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl p1,#00
         anl p2,#h'ff
         anld p4,a
         anld p5,a
         anld p6,a
         anld p7,a
         call farloop
         clr a
         clr c
         clr f0
         clr f1
         cpl a
         cpl c
         cpl f0
         cpl f1
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dis i
         dis tcnti
loop1:   djnz r0,loop1
         djnz r1,loop1
         djnz r2,loop1
         djnz r3,loop1
         djnz r4,loop1
         djnz r5,loop1
         djnz r6,loop1
         djnz r7,loop1
         en i
         en tcnti
         in a,p1
         in a,p2
         inc @r0
         inc @r1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         jb0 loop
         jb1 loop
         jb2 loop
         jb3 loop
loop:    jb4 loop
         jb5 loop
         jb6 loop
         jb7 loop
         jc loop
         jf0 loop
         jf1 loop
         jmp farloop
         jmpp @a
         jnc loop
         jnt0 loop
         jnt1 loop
         jnz loop
         jt0 loop
         jt1 loop
         jtf loop
         jz loop
         mov @r0,#h'00
         mov @r0,#h'ff
         mov @r0,a
         mov @r1,#h'00
         mov @r1,#h'ff
         mov @r1,a
         mov a,#h'00
         mov a,#h'ff
         mov a,@r0
         mov a,@r1
         mov a,psw
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,t
         mov psw,a
         mov r0,#h'00
         mov r0,#h'ff
         mov r0,a
         mov r1,#h'00
         mov r1,#h'ff
         mov r1,a
         mov r2,#h'00
         mov r2,#h'ff
         mov r2,a
         mov r3,#h'00
         mov r3,#h'ff
         mov r3,a
         mov r4,#h'00
         mov r4,#h'ff
         mov r4,a
         mov r5,#h'00
         mov r5,#h'ff
         mov r5,a
         mov r6,#h'00
         mov r6,#h'ff
         mov r6,a
         mov r7,#h'00
         mov r7,#h'ff
         mov r7,a
         mov t,a
         movd a,p4
         movd a,p5
         movd a,p6
         movd a,p7
         movd p4,a
         movd p5,a
         movd p6,a
         movd p7,a
         movp a,@a
         movp3 a,@a
         nop
         orl a,#00
         orl a,#h'ff
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl p1,#00
         orl p2,#h'ff
         orld p4,a
         orld p5,a
         orld p6,a
         orld p7,a
         outl p1,a
         outl p2,a
         ret
         retr
         rl a
         rlc a
         rr a
         rrc a
         sel rb0
         sel rb1
         stop tcnt
         strt cnt
         strt t
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xchd a,@r0
         xchd a,@r1
         xrl a,#00
         xrl a,#h'ff
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
synctst1:
         add a,#forward2
         add a,#forward1
         add a,@r0
         add a,@r1
         add a,r0
         add a,r1
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#forward2
         addc a,#forward1
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         anl a,#forward2
         anl a,#forward1
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl p1,#forward2
         anl p2,#forward1
         anld p4,a
         anld p5,a
         anld p6,a
         anld p7,a
         call farloop
         clr a
         clr c
         clr f0
         clr f1
         cpl a
         cpl c
         cpl f0
         cpl f1
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dis i
         dis tcnti
loop2:   djnz r0,loop2
         djnz r1,loop2
         djnz r2,loop2
         djnz r3,loop2
         djnz r4,loop2
         djnz r5,loop2
         djnz r6,loop2
         djnz r7,loop2
         en i
         en tcnti
         in a,p1
         in a,p2
         inc @r0
         inc @r1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
loop3:   jb0 loop3
         jb1 loop3
         jb2 loop3
         jb3 loop3
         jb4 loop3
         jb5 loop3
         jb6 loop3
         jb7 loop3
         jc loop3
         jf0 loop3
         jf1 loop3
         jmp farloop
         jmpp @a
         jnc loop3
         jnt0 loop3
         jnt1 loop3
         jnz loop3
         jt0 loop3
         jt1 loop3
         jtf loop3
         jz loop3
         mov @r0,#forward2
         mov @r0,#forward1
         mov @r0,a
         mov @r1,#forward2
         mov @r1,#forward1
         mov @r1,a
         mov a,#forward2
         mov a,#forward1
         mov a,@r0
         mov a,@r1
         mov a,psw
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,t
         mov psw,a
         mov r0,#forward2
         mov r0,#forward1
         mov r0,a
         mov r1,#forward2
         mov r1,#forward1
         mov r1,a
         mov r2,#forward2
         mov r2,#forward1
         mov r2,a
         mov r3,#forward2
         mov r3,#forward1
         mov r3,a
         mov r4,#forward2
         mov r4,#forward1
         mov r4,a
         mov r5,#forward2
         mov r5,#forward1
         mov r5,a
         mov r6,#forward2
         mov r6,#forward1
         mov r6,a
         mov r7,#forward2
         mov r7,#forward1
         mov r7,a
         mov t,a
         movd a,p4
         movd a,p5
         movd a,p6
         movd a,p7
         movd p4,a
         movd p5,a
         movd p6,a
         movd p7,a
         movp a,@a
         movp3 a,@a
         nop
         orl a,#forward2
         orl a,#forward1
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl p1,#forward2
         orl p2,#forward1
         orld p4,a
         orld p5,a
         orld p6,a
         orld p7,a
         outl p1,a
         outl p2,a
         ret
         retr
         rl a
         rlc a
         rr a
         rrc a
         sel rb0
         sel rb1
         stop tcnt
         strt cnt
         strt t
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xchd a,@r0
         xchd a,@r1
         xrl a,#forward2
         xrl a,#forward1
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         .equ forward1,h'ff
         .equ forward2,h'00
synctst2:
farloop:
         .end
```
{% endraw %}

## MNEMTEST.ASM

{% raw %}
```
         .org 0
         add a,#00
         add a,#h'ff
         add a,@r0
         add a,@r1
         add a,r0           ;test all 8048 opcodes in all configurations
         add a,r1           ;all machine mnemonics copyright Intel corp. 1976
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#00
         addc a,#h'ff
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         anl a,#00
         anl a,#h'ff
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl bus,#00
         anl bus,#h'ff
         anl p1,#00
         anl p2,#h'ff
         anld p4,a
         anld p5,a
         anld p6,a
         anld p7,a
         call farloop
         clr a
         clr c
         clr f0
         clr f1
         cpl a
         cpl c
         cpl f0
         cpl f1
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dis i
         dis tcnti
loop1:   djnz r0,loop1
         djnz r1,loop1
         djnz r2,loop1
         djnz r3,loop1
         djnz r4,loop1
         djnz r5,loop1
         djnz r6,loop1
         djnz r7,loop1
         en i
         en tcnti
         ent0 clk
         in a,p1
         in a,p2
         inc @r0
         inc @r1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         ins a,bus
         jb0 loop
         jb1 loop
         jb2 loop
         jb3 loop
loop:    jb4 loop
         jb5 loop
         jb6 loop
         jb7 loop
         jc loop
         jf0 loop
         jf1 loop
         jmp farloop
         jmpp @a
         jnc loop
         jni loop
         jnt0 loop
         jnt1 loop
         jnz loop
         jt0 loop
         jt1 loop
         jtf loop
         jz loop
         mov @r0,#h'00
         mov @r0,#h'ff
         mov @r0,a
         mov @r1,#h'00
         mov @r1,#h'ff
         mov @r1,a
         mov a,#h'00
         mov a,#h'ff
         mov a,@r0
         mov a,@r1
         mov a,psw
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,t
         mov psw,a
         mov r0,#h'00
         mov r0,#h'ff
         mov r0,a
         mov r1,#h'00
         mov r1,#h'ff
         mov r1,a
         mov r2,#h'00
         mov r2,#h'ff
         mov r2,a
         mov r3,#h'00
         mov r3,#h'ff
         mov r3,a
         mov r4,#h'00
         mov r4,#h'ff
         mov r4,a
         mov r5,#h'00
         mov r5,#h'ff
         mov r5,a
         mov r6,#h'00
         mov r6,#h'ff
         mov r6,a
         mov r7,#h'00
         mov r7,#h'ff
         mov r7,a
         mov t,a
         movd a,p4
         movd a,p5
         movd a,p6
         movd a,p7
         movd p4,a
         movd p5,a
         movd p6,a
         movd p7,a
         movp a,@a
         movp3 a,@a
         movx @r0,a
         movx @r1,a
         movx a,@r0
         movx a,@r1
         nop
         orl a,#00
         orl a,#h'ff
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl bus,#00
         orl bus,#h'ff
         orl p1,#00
         orl p2,#h'ff
         orld p4,a
         orld p5,a
         orld p6,a
         orld p7,a
         outl bus,a
         outl p1,a
         outl p2,a
         ret
         retr
         rl a
         rlc a
         rr a
         rrc a
         sel mb0
         sel mb1
         sel rb0
         sel rb1
         stop tcnt
         strt cnt
         strt t
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xchd a,@r0
         xchd a,@r1
         xrl a,#00
         xrl a,#h'ff
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
synctst1:
         add a,#forward2
         add a,#forward1
         add a,@r0
         add a,@r1
         add a,r0
         add a,r1
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#forward2
         addc a,#forward1
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         anl a,#forward2
         anl a,#forward1
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl bus,#forward2
         anl bus,#forward1
         anl p1,#forward2
         anl p2,#forward1
         anld p4,a
         anld p5,a
         anld p6,a
         anld p7,a
         call farloop
         clr a
         clr c
         clr f0
         clr f1
         cpl a
         cpl c
         cpl f0
         cpl f1
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dis i
         dis tcnti
loop2:   djnz r0,loop2
         djnz r1,loop2
         djnz r2,loop2
         djnz r3,loop2
         djnz r4,loop2
         djnz r5,loop2
         djnz r6,loop2
         djnz r7,loop2
         en i
         en tcnti
         ent0 clk
         in a,p1
         in a,p2
         inc @r0
         inc @r1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         ins a,bus
loop3:   jb0 loop3
         jb1 loop3
         jb2 loop3
         jb3 loop3
         jb4 loop3
         jb5 loop3
         jb6 loop3
         jb7 loop3
         jc loop3
         jf0 loop3
         jf1 loop3
         jmp farloop
         jmpp @a
         jnc loop3
         jni loop3
         jnt0 loop3
         jnt1 loop3
         jnz loop3
         jt0 loop3
         jt1 loop3
         jtf loop3
         jz loop3
         mov @r0,#forward2
         mov @r0,#forward1
         mov @r0,a
         mov @r1,#forward2
         mov @r1,#forward1
         mov @r1,a
         mov a,#forward2
         mov a,#forward1
         mov a,@r0
         mov a,@r1
         mov a,psw
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,t
         mov psw,a
         mov r0,#forward2
         mov r0,#forward1
         mov r0,a
         mov r1,#forward2
         mov r1,#forward1
         mov r1,a
         mov r2,#forward2
         mov r2,#forward1
         mov r2,a
         mov r3,#forward2
         mov r3,#forward1
         mov r3,a
         mov r4,#forward2
         mov r4,#forward1
         mov r4,a
         mov r5,#forward2
         mov r5,#forward1
         mov r5,a
         mov r6,#forward2
         mov r6,#forward1
         mov r6,a
         mov r7,#forward2
         mov r7,#forward1
         mov r7,a
         mov t,a
         movd a,p4
         movd a,p5
         movd a,p6
         movd a,p7
         movd p4,a
         movd p5,a
         movd p6,a
         movd p7,a
         movp a,@a
         movp3 a,@a
         movx @r0,a
         movx @r1,a
         movx a,@r0
         movx a,@r1
         nop
         orl a,#forward2
         orl a,#forward1
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl bus,#forward2
         orl bus,#forward1
         orl p1,#forward2
         orl p2,#forward1
         orld p4,a
         orld p5,a
         orld p6,a
         orld p7,a
         outl bus,a
         outl p1,a
         outl p2,a
         ret
         retr
         rl a
         rlc a
         rr a
         rrc a
         sel mb0
         sel mb1
         sel rb0
         sel rb1
         stop tcnt
         strt cnt
         strt t
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xchd a,@r0
         xchd a,@r1
         xrl a,#forward2
         xrl a,#forward1
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         .equ forward1,h'ff
         .equ forward2,h'00
synctst2:
farloop:
         .end
```
{% endraw %}

## EXAMPLE.ASM

{% raw %}
```
; To become familiar with the segment feature you
; should assemble this file with and without the
; single object module swicth enabled.
;
;   a51  -o example         ;three object module files
                            ;     code.seg
                            ;     memory.seg
                            ;     rom2.seg
;
;   a51  example            ;one object module file
                            ;     example.obj


         ljmp loop
         .org  h'20         ;start assembly at location 20 hex.
         .segment .memory   ;declare a new segmemt for ram memory
                            ;allocation
         .memory            ;select segment .memory as active(locaton counter)
                            ;for the .code segment(created by the assembler) is
                            ;saved for when we switch back.
         .org  h'00         ;not really necessary as origin of 0 is assumed.
regbank0:
b0r0:    .rs   1            ;bank 0 register 0
b0r1:    .rs   1            ;bank 0 register 1
b0r2:    .rs   1            ;bank 0 register 2
b0r3:    .rs   1            ;bank 0 register 3
b0r4:    .rs   1            ;bank 0 register 4
b0r5:    .rs   1            ;bank 0 register 5
b0r6:    .rs   1            ;bank 0 register 6
b0r7:    .rs   1            ;bank 0 register 7
         .org 24
regbank1:
b1r0:    .rs   1            ;bank 1 register 0
b1r1:    .rs   1            ;bank 1 register 1
b1r2:    .rs   1            ;bank 1 register 2
b1r3:    .rs   1            ;bank 1 register 3
b1r4:    .rs   1            ;bank 1 register 4
b1r5:    .rs   1            ;bank 1 register 5
b1r6:    .rs   1            ;bank 1 register 6
b1r7:    .rs   1            ;bank 1 register 7
         .eject             ;lets start on a fresh page of paper.
         .code              ;switch back to code segment
                            ; origin is where we left off.
loop:    mov a,#h'22
         mov r0,#h'11
         add a,r0
         ljmp loop2         ;jump off page.
         .equ cr,13         ;equated identifiers are constant.
         .equ tab,9
         .set temp,23       ;set identifiers may be re-set.
         .set temp,24
         .set temp,25
         .db  1,2,3,4,5,'p'
         .db  6,7,"this is a test\r\n\0"
         .dw  1,h'1234
         .drw 1,h'1234
         .page              ;start on a new 256 byte boundary.
loop2:   ljmp loop
         .segment .rom2
         .rom2
         .org h'800
         .db  "this is possibly an external rom programmed seperately."
         .code
         .end loop          ;end of assembly, specifying start address.

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

## MNEMTEST.ASM

{% raw %}
```
         .org 0
stest:   acall stest
         ajmp *
         ljmp *+5 ;jump over next line of code
         add a,#00
         sjmp *-9 ;jump to stest
         add a,#h'ff
         add a,00
         add a,h'ff
         add a,@r0
         add a,@r1
         add a,r0           ;test all 8051 opcodes in all configurations
         add a,r1           ;all machine mnemonics copyright Intel corp. 1976
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#00
         addc a,#h'ff
         addc a,00
         addc a,h'ff
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         ajmp stest
         anl a,#00
         anl a,#h'ff
         anl a,00
         anl a,h'ff
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl h'00,a
         anl h'ff,a
         anl h'00,#00
         anl h'00,#h'ff
         anl h'ff,#00
         anl h'ff,#h'ff
         anl c,00
         anl c,h'ff
         anl c,/00
         anl c,/h'ff
         cjne a,h'00,stest
         cjne a,h'ff,stest
         cjne a,#h'00,stest
         cjne a,#h'ff,stest
         cjne r0,#h'00,stest
         cjne r7,#h'ff,stest
         cjne @r0,#h'00,stest
         cjne @r1,#h'ff,stest
         clr a
         clr h'00
         clr h'ff
         clr c
         cpl a
         cpl h'00
         cpl h'ff
         cpl c
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dec h'00
         dec h'ff
         dec @r0
         dec @r1
         div ab
loop1:   djnz r0,loop1
         djnz r1,loop1
         djnz r2,loop1
         djnz r3,loop1
         djnz r4,loop1
         djnz r5,loop1
         djnz r6,loop1
         djnz r7,loop1
         djnz h'00,loop1
         djnz h'ff,loop1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         inc h'00
         inc h'ff
         inc @r0
         inc @r1
         inc dptr
         jb  h'00,loop
loop:    jb  h'ff,loop
         jbc  h'00,loop
         jbc  h'ff,loop
         jc loop
         jmp @a+dptr
         jnb  h'00,loop
         jnb  h'ff,loop
         jnc loop
         jnz loop
         jz loop
         lcall stest
         ljmp stest
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,h'00
         mov a,h'ff
         mov a,@r0
         mov a,@r1
         mov a,#h'00
         mov a,#h'ff
         mov r0,#h'00
         mov r0,#h'ff
         mov r0,h'00
         mov r0,h'ff
         mov r0,a
         mov r1,#h'00
         mov r1,#h'ff
         mov r1,h'00
         mov r1,h'ff
         mov r1,a
         mov r2,#h'00
         mov r2,#h'ff
         mov r2,h'00
         mov r2,h'ff
         mov r2,a
         mov r3,#h'00
         mov r3,#h'ff
         mov r3,h'00
         mov r3,h'ff
         mov r3,a
         mov r4,#h'00
         mov r4,#h'ff
         mov r4,h'00
         mov r4,h'ff
         mov r4,a
         mov r5,#h'00
         mov r5,#h'ff
         mov r5,h'00
         mov r5,h'ff
         mov r5,a
         mov r6,#h'00
         mov r6,#h'ff
         mov r6,h'00
         mov r6,h'ff
         mov r6,a
         mov r7,#h'00
         mov r7,#h'ff
         mov r7,h'00
         mov r7,h'ff
         mov r7,a
         mov h'00,a
         mov h'00,r0
         mov h'00,r1
         mov h'00,r2
         mov h'00,r3
         mov h'00,r4
         mov h'00,r5
         mov h'00,r6
         mov h'00,r7
         mov h'00,h'00
         mov h'00,h'ff
         mov h'00,@r0
         mov h'00,@r1
         mov h'00,#h'00
         mov h'00,#h'ff
         mov h'ff,a
         mov h'ff,r0
         mov h'ff,r1
         mov h'ff,r2
         mov h'ff,r3
         mov h'ff,r4
         mov h'ff,r5
         mov h'ff,r6
         mov h'ff,r7
         mov h'ff,h'00
         mov h'ff,h'ff
         mov h'ff,@r0
         mov h'ff,@r1
         mov h'ff,#h'00
         mov h'ff,#h'ff
         mov @r0,#h'00
         mov @r0,#h'ff
         mov @r0,h'00
         mov @r0,h'ff
         mov @r0,a
         mov @r1,#h'00
         mov @r1,#h'ff
         mov @r1,h'00
         mov @r1,h'ff
         mov @r1,a
         mov c,h'00
         mov c,h'ff
         mov h'00,c
         mov h'ff,c
         mov dptr,#h'00ff
         mov dptr,#h'ff00
         movc a,@a+dptr
         movc a,@a+pc
         movx a,@r0
         movx a,@r1
         movx a,@dptr
         movx @r0,a
         movx @r1,a
         movx @dptr,a
         mul ab
         nop
         orl a,#00
         orl a,#h'ff
         orl a,00
         orl a,h'ff
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl h'00,a
         orl h'ff,a
         orl h'00,#00
         orl h'00,#h'ff
         orl h'ff,#00
         orl h'ff,#h'ff
         orl c,00
         orl c,h'ff
         orl c,/00
         orl c,/h'ff
         pop h'00
         pop h'ff
         push h'00
         push h'ff
         ret
         reti
         rl a
         rlc a
         rr a
         rrc a
         setb h'00
         setb h'ff
         setb c
rloop2:  sjmp rloop2
         subb a,#00
         subb a,#h'ff
         subb a,00
         subb a,h'ff
         subb a,@r0
         subb a,@r1
         subb a,r0           ;test all 8051 opcodes in all configurations
         subb a,r1           ;all machine mnemonics copyright Intel corp. 1976
         subb a,r2
         subb a,r3
         subb a,r4
         subb a,r5
         subb a,r6
         subb a,r7
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xch a,h'00
         xch a,h'ff
         xchd a,@r0
         xchd a,@r1
         xrl a,#00
         xrl a,#h'ff
         xrl a,00
         xrl a,h'ff
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl h'00,a
         xrl h'ff,a
         xrl h'00,#00
         xrl h'00,#h'ff
         xrl h'ff,#00
         xrl h'ff,#h'ff
         acall stest
         add a,#forward2
         add a,#forward1
         add a,00
         add a,forward1
         add a,@r0
         add a,@r1
         add a,r0           ;test all 8051 opcodes in all configurations
         add a,r1           ;all machine mnemonics copyright Intel corp. 1976
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#forward2
         addc a,#forward1
         addc a,00
         addc a,forward1
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         ajmp stest
         anl a,#forward2
         anl a,#forward1
         anl a,00
         anl a,forward1
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl forward2,a
         anl forward1,a
         anl forward2,#forward2
         anl forward2,#forward1
         anl forward1,#forward2
         anl forward1,#forward1
         anl c,00
         anl c,forward1
         anl c,/00
         anl c,/forward1
rloop3:  cjne a,forward2,rloop3
         cjne a,forward1,rloop3
         cjne a,#forward2,rloop3
         cjne a,#forward1,rloop3
         cjne r0,#forward2,rloop3
         cjne r1,#forward1,rloop3
         cjne r2,#forward2,rloop3
         cjne r3,#forward1,rloop3
         cjne r4,#forward2,rloop3
         cjne r5,#forward1,rloop3
         cjne r6,#forward2,rloop3
         cjne r7,#forward1,rloop3
         cjne @r0,#forward2,rloop3
         cjne @r1,#forward1,rloop3
         clr a
         clr forward2
         clr forward1
         clr c
         cpl a
         cpl forward2
         cpl forward1
         cpl c
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dec forward2
         dec forward1
         dec @r0
         dec @r1
         div ab
loop2:   djnz r0,loop2
         djnz r1,loop2
         djnz r2,loop2
         djnz r3,loop2
         djnz r4,loop2
         djnz r5,loop2
         djnz r6,loop2
         djnz r7,loop2
         djnz forward2,loop2
         djnz forward1,loop2
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         inc forward2
         inc forward1
         inc @r0
         inc @r1
         inc dptr
         jb  forward2,loop3
loop3:   jb  forward1,loop3
         jbc  forward2,loop3
         jbc  forward1,loop3
         jc loop3
         jmp @a+dptr
         jnb  forward2,loop3
         jnb  forward1,loop3
         jnc loop3
         jnz loop3
         jz loop3
         lcall stest
         ljmp stest
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,forward2
         mov a,forward1
         mov a,@r0
         mov a,@r1
         mov a,#forward2
         mov a,#forward1
         mov r0,#forward2
         mov r0,#forward1
         mov r0,forward2
         mov r0,forward1
         mov r0,a
         mov r1,#forward2
         mov r1,#forward1
         mov r1,forward2
         mov r1,forward1
         mov r1,a
         mov r2,#forward2
         mov r2,#forward1
         mov r2,forward2
         mov r2,forward1
         mov r2,a
         mov r3,#forward2
         mov r3,#forward1
         mov r3,forward2
         mov r3,forward1
         mov r3,a
         mov r4,#forward2
         mov r4,#forward1
         mov r4,forward2
         mov r4,forward1
         mov r4,a
         mov r5,#forward2
         mov r5,#forward1
         mov r5,forward2
         mov r5,forward1
         mov r5,a
         mov r6,#forward2
         mov r6,#forward1
         mov r6,forward2
         mov r6,forward1
         mov r6,a
         mov r7,#forward2
         mov r7,#forward1
         mov r7,forward2
         mov r7,forward1
         mov r7,a
         mov forward2,a
         mov forward2,r0
         mov forward2,r1
         mov forward2,r2
         mov forward2,r3
         mov forward2,r4
         mov forward2,r5
         mov forward2,r6
         mov forward2,r7
         mov forward2,forward2
         mov forward2,forward1
         mov forward2,@r0
         mov forward2,@r1
         mov forward2,#forward2
         mov forward2,#forward1
         mov forward1,a
         mov forward1,r0
         mov forward1,r1
         mov forward1,r2
         mov forward1,r3
         mov forward1,r4
         mov forward1,r5
         mov forward1,r6
         mov forward1,r7
         mov forward1,forward2
         mov forward1,forward1
         mov forward1,@r0
         mov forward1,@r1
         mov forward1,#forward2
         mov forward1,#forward1
         mov @r0,#forward2
         mov @r0,#forward1
         mov @r0,forward2
         mov @r0,forward1
         mov @r0,a
         mov @r1,#forward2
         mov @r1,#forward1
         mov @r1,forward2
         mov @r1,forward1
         mov @r1,a
         mov c,forward2
         mov c,forward1
         mov forward2,c
         mov forward1,c
         mov dptr,#forward2ff
         mov dptr,#forward100
         movc a,@a+dptr
         movc a,@a+pc
         movx a,@r0
         movx a,@r1
         movx a,@dptr
         movx @r0,a
         movx @r1,a
         movx @dptr,a
         mul ab
         nop
         orl a,#forward2
         orl a,#forward1
         orl a,00
         orl a,forward1
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl forward2,a
         orl forward1,a
         orl forward2,#forward2
         orl forward2,#forward1
         orl forward1,#forward2
         orl forward1,#forward1
         orl c,00
         orl c,forward1
         orl c,/00
         orl c,/forward1
         pop forward2
         pop forward1
         push forward2
         push forward1
         ret
         reti
         rl a
         rlc a
         rr a
         rrc a
         setb forward2
         setb forward1
         setb c
rloop:   sjmp rloop
         subb a,#forward2
         subb a,#forward1
         subb a,00
         subb a,forward1
         subb a,@r0
         subb a,@r1
         subb a,r0           ;test all 8051 opcodes in all configurations
         subb a,r1           ;all machine mnemonics copyright Intel corp. 1976
         subb a,r2
         subb a,r3
         subb a,r4
         subb a,r5
         subb a,r6
         subb a,r7
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xch a,forward2
         xch a,forward1
         xchd a,@r0
         xchd a,@r1
         xrl a,#forward2
         xrl a,#forward1
         xrl a,00
         xrl a,forward1
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl forward2,a
         xrl forward1,a
         xrl forward2,#forward2
         xrl forward2,#forward1
         xrl forward1,#forward2
         xrl forward1,#forward1
synctst:
farloop: .equ forward1,h'ff
         .equ forward2,h'00
         .org 0x7916
brtest:  nop
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r7
         xrl a,r6
         xrl a,r7
         xrl a,r7
         djnz r7,brtest
         .end
```
{% endraw %}

## EXAMPL~1.ASM

{% raw %}
```
; To become familiar with the segment feature you
; should assemble this file with and without the
; single object module swicth enabled.
;
;   a51  -o example         ;three object module files
                            ;     code.seg
                            ;     memory.seg
                            ;     rom2.seg
;
;   a51  example            ;one object module file
                            ;     example.obj


         ljmp loop
         .org  h'20         ;start assembly at location 20 hex.
         .segment .memory   ;declare a new segmemt for ram memory
                            ;allocation
         .memory            ;select segment .memory as active(locaton counter)
                            ;for the .code segment(created by the assembler) is
                            ;saved for when we switch back.
         .org  h'00         ;not really necessary as origin of 0 is assumed.
regbank0:
b0r0:    .rs   1            ;bank 0 register 0
b0r1:    .rs   1            ;bank 0 register 1
b0r2:    .rs   1            ;bank 0 register 2
b0r3:    .rs   1            ;bank 0 register 3
b0r4:    .rs   1            ;bank 0 register 4
b0r5:    .rs   1            ;bank 0 register 5
b0r6:    .rs   1            ;bank 0 register 6
b0r7:    .rs   1            ;bank 0 register 7
         .org 24
regbank1:
b1r0:    .rs   1            ;bank 1 register 0
b1r1:    .rs   1            ;bank 1 register 1
b1r2:    .rs   1            ;bank 1 register 2
b1r3:    .rs   1            ;bank 1 register 3
b1r4:    .rs   1            ;bank 1 register 4
b1r5:    .rs   1            ;bank 1 register 5
b1r6:    .rs   1            ;bank 1 register 6
b1r7:    .rs   1            ;bank 1 register 7
         .eject             ;lets start on a fresh page of paper.
         .code              ;switch back to code segment
                            ; origin is where we left off.
loop:    mov a,#h'22
         mov r0,#h'11
         add a,r0
         ljmp loop2         ;jump off page.
         .equ cr,13         ;equated identifiers are constant.
         .equ tab,9
         .set temp,23       ;set identifiers may be re-set.
         .set temp,24
         .set temp,25
         .db  1,2,3,4,5,'p'
         .db  6,7,"this is a test\r\n\0"
         .dw  1,h'1234
         .drw 1,h'1234
         .page              ;start on a new 256 byte boundary.
loop2:   ljmp loop
         .segment .rom2
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
;   a48  -o example         ;three object module files
                            ;     code.seg
                            ;     memory.seg
                            ;     rom2.seg
;
;   a48  example            ;one object module file example.obj



         jmp loop
         .org  h'20         ;start assembly at location 20 hex.
         .segment .memory   ;declare a new segmemt for ram memory
                            ;allocation
         .memory            ;select segment .memory as active(locaton counter)
                            ;for the .code segment(created by the assembler) is
                            ;saved for when we switch back.
         .org  h'00         ;not really necessary as origin of 0 is assumed.
regbank0:
b0r0:    .rs   1            ;bank 0 register 0
b0r1:    .rs   1            ;bank 0 register 1
b0r2:    .rs   1            ;bank 0 register 2
b0r3:    .rs   1            ;bank 0 register 3
b0r4:    .rs   1            ;bank 0 register 4
b0r5:    .rs   1            ;bank 0 register 5
b0r6:    .rs   1            ;bank 0 register 6
b0r7:    .rs   1            ;bank 0 register 7
         .org 24
regbank1:
b1r0:    .rs   1            ;bank 1 register 0
b1r1:    .rs   1            ;bank 1 register 1
b1r2:    .rs   1            ;bank 1 register 2
b1r3:    .rs   1            ;bank 1 register 3
b1r4:    .rs   1            ;bank 1 register 4
b1r5:    .rs   1            ;bank 1 register 5
b1r6:    .rs   1            ;bank 1 register 6
b1r7:    .rs   1            ;bank 1 register 7
         .eject             ;lets start on a fresh page of paper.
         .code              ;switch back to code segment
                            ; origin is where we left off.
loop:    mov a,#h'22
         mov r0,#h'11
         add a,r0
         jmp loop2          ;jump off page.
         .equ cr,13         ;equated idienifiers are constant.
         .equ tab,9
         .set temp,23       ;set identifiers may be re-set.
         .set temp,24
         .set temp,25
         .db  1,2,3,4,5,'p'
         .db  6,7,"this is a test\r\n\0"
         .dw  1,h'1234
         .drw 1,h'1234
         .page              ;start on a new 256 byte boundary.
loop2:   jmp loop
         .segment .rom2
         .rom2
         .org h'800
         .db  "this is possibly an external rom programmed seperately."
         .code
         .end loop          ;end of assembly, specifying start address.

```
{% endraw %}

## FILE0777.TXT

{% raw %}
```
Disk No:  777                                                           
Disk Title: PseudoSam Cross Assembler 48 and 51                         
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: PseudoSam 48 and 51                                      
Author Version: 1.6                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
PSEUDOSAM 48 and 51 are machine language cross-assembler programs       
for the INTEL 8748 and INTEL 8751 microprocessors.  These programs      
let you construct 8748 and 8751 code on your IBM PC, to be              
transferred to an 8748- or 8751-based system for use.                   
                                                                        
The PSEUDOSAM (Pseudo brand Symbolic AsseMbler) assemblers conform to   
common syntax, based on the UNIX System V assembler syntax.  The opcode 
and addressing syntax is compatible with the manufacturer's, but label, 
directive, and expression operator syntax will differ.                  
                                                                        
The author of PSEUDOSAM chose this syntax because of UNIX's popularity, 
and to avoid the problem of maintaining compatibility with the many OEM 
assemblers.  The documentation is well organized and easy to understand,
although no attempt is made to teach 8748 or 8751 programming.  You     
should have a good understanding of machine language programming and    
also be familiar with basic DOS functions.                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  Disk #777 PSEUDOSAM 48 AND 51 CROSS ASSEMBLER  >>>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To print the documentation for the 48 Cross Assembler you must first    ║
║ change to the A48 subdirectory by typing:     CD\A48                    ║
║                                                                         ║
║ You will then print the documentation by typing:                        ║
║ COPY READI.ME PRN                                                       ║
║                                                                         ║
║ To print the documentation for the 51 Cross Assembler you must first    ║
║ change to the A51 subdirectory by typing:     CD\A51                    ║
║                                                                         ║
║ You will then print the documentation by typing:                        ║
║ COPY READ.IME PRN                                                       ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
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

## MNEM41.ASM

{% raw %}
```
         .org 0
         .command           +m2
         mov sts,a          ;8041 specific opcodes
         en flags
         en dma
         in a,dbb
         out dbb,a
         jnibf branch1
         jobf  branch1      ;end 8041
branch1: add a,#00
         add a,#h'ff
         add a,@r0
         add a,@r1
         add a,r0           ;test all 8048 opcodes in all configurations
         add a,r1           ;all machine mnemonics copyright Intel corp. 1976
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#00
         addc a,#h'ff
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         anl a,#00
         anl a,#h'ff
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl p1,#00
         anl p2,#h'ff
         anld p4,a
         anld p5,a
         anld p6,a
         anld p7,a
         call farloop
         clr a
         clr c
         clr f0
         clr f1
         cpl a
         cpl c
         cpl f0
         cpl f1
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dis i
         dis tcnti
loop1:   djnz r0,loop1
         djnz r1,loop1
         djnz r2,loop1
         djnz r3,loop1
         djnz r4,loop1
         djnz r5,loop1
         djnz r6,loop1
         djnz r7,loop1
         en i
         en tcnti
         in a,p1
         in a,p2
         inc @r0
         inc @r1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         jb0 loop
         jb1 loop
         jb2 loop
         jb3 loop
loop:    jb4 loop
         jb5 loop
         jb6 loop
         jb7 loop
         jc loop
         jf0 loop
         jf1 loop
         jmp farloop
         jmpp @a
         jnc loop
         jnt0 loop
         jnt1 loop
         jnz loop
         jt0 loop
         jt1 loop
         jtf loop
         jz loop
         mov @r0,#h'00
         mov @r0,#h'ff
         mov @r0,a
         mov @r1,#h'00
         mov @r1,#h'ff
         mov @r1,a
         mov a,#h'00
         mov a,#h'ff
         mov a,@r0
         mov a,@r1
         mov a,psw
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,t
         mov psw,a
         mov r0,#h'00
         mov r0,#h'ff
         mov r0,a
         mov r1,#h'00
         mov r1,#h'ff
         mov r1,a
         mov r2,#h'00
         mov r2,#h'ff
         mov r2,a
         mov r3,#h'00
         mov r3,#h'ff
         mov r3,a
         mov r4,#h'00
         mov r4,#h'ff
         mov r4,a
         mov r5,#h'00
         mov r5,#h'ff
         mov r5,a
         mov r6,#h'00
         mov r6,#h'ff
         mov r6,a
         mov r7,#h'00
         mov r7,#h'ff
         mov r7,a
         mov t,a
         movd a,p4
         movd a,p5
         movd a,p6
         movd a,p7
         movd p4,a
         movd p5,a
         movd p6,a
         movd p7,a
         movp a,@a
         movp3 a,@a
         nop
         orl a,#00
         orl a,#h'ff
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl p1,#00
         orl p2,#h'ff
         orld p4,a
         orld p5,a
         orld p6,a
         orld p7,a
         outl p1,a
         outl p2,a
         ret
         retr
         rl a
         rlc a
         rr a
         rrc a
         sel rb0
         sel rb1
         stop tcnt
         strt cnt
         strt t
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xchd a,@r0
         xchd a,@r1
         xrl a,#00
         xrl a,#h'ff
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
synctst1:
         add a,#forward2
         add a,#forward1
         add a,@r0
         add a,@r1
         add a,r0
         add a,r1
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#forward2
         addc a,#forward1
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         anl a,#forward2
         anl a,#forward1
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl p1,#forward2
         anl p2,#forward1
         anld p4,a
         anld p5,a
         anld p6,a
         anld p7,a
         call farloop
         clr a
         clr c
         clr f0
         clr f1
         cpl a
         cpl c
         cpl f0
         cpl f1
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dis i
         dis tcnti
loop2:   djnz r0,loop2
         djnz r1,loop2
         djnz r2,loop2
         djnz r3,loop2
         djnz r4,loop2
         djnz r5,loop2
         djnz r6,loop2
         djnz r7,loop2
         en i
         en tcnti
         in a,p1
         in a,p2
         inc @r0
         inc @r1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
loop3:   jb0 loop3
         jb1 loop3
         jb2 loop3
         jb3 loop3
         jb4 loop3
         jb5 loop3
         jb6 loop3
         jb7 loop3
         jc loop3
         jf0 loop3
         jf1 loop3
         jmp farloop
         jmpp @a
         jnc loop3
         jnt0 loop3
         jnt1 loop3
         jnz loop3
         jt0 loop3
         jt1 loop3
         jtf loop3
         jz loop3
         mov @r0,#forward2
         mov @r0,#forward1
         mov @r0,a
         mov @r1,#forward2
         mov @r1,#forward1
         mov @r1,a
         mov a,#forward2
         mov a,#forward1
         mov a,@r0
         mov a,@r1
         mov a,psw
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,t
         mov psw,a
         mov r0,#forward2
         mov r0,#forward1
         mov r0,a
         mov r1,#forward2
         mov r1,#forward1
         mov r1,a
         mov r2,#forward2
         mov r2,#forward1
         mov r2,a
         mov r3,#forward2
         mov r3,#forward1
         mov r3,a
         mov r4,#forward2
         mov r4,#forward1
         mov r4,a
         mov r5,#forward2
         mov r5,#forward1
         mov r5,a
         mov r6,#forward2
         mov r6,#forward1
         mov r6,a
         mov r7,#forward2
         mov r7,#forward1
         mov r7,a
         mov t,a
         movd a,p4
         movd a,p5
         movd a,p6
         movd a,p7
         movd p4,a
         movd p5,a
         movd p6,a
         movd p7,a
         movp a,@a
         movp3 a,@a
         nop
         orl a,#forward2
         orl a,#forward1
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl p1,#forward2
         orl p2,#forward1
         orld p4,a
         orld p5,a
         orld p6,a
         orld p7,a
         outl p1,a
         outl p2,a
         ret
         retr
         rl a
         rlc a
         rr a
         rrc a
         sel rb0
         sel rb1
         stop tcnt
         strt cnt
         strt t
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xchd a,@r0
         xchd a,@r1
         xrl a,#forward2
         xrl a,#forward1
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         .equ forward1,h'ff
         .equ forward2,h'00
synctst2:
farloop:
         .end
```
{% endraw %}

## MNEMTE~1.ASM

{% raw %}
```
         .org 0
stest:   acall stest
         ajmp *
         ljmp *+5 ;jump over next line of code
         add a,#00
         sjmp *-9 ;jump to stest
         add a,#h'ff
         add a,00
         add a,h'ff
         add a,@r0
         add a,@r1
         add a,r0           ;test all 8051 opcodes in all configurations
         add a,r1           ;all machine mnemonics copyright Intel corp. 1976
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#00
         addc a,#h'ff
         addc a,00
         addc a,h'ff
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         ajmp stest
         anl a,#00
         anl a,#h'ff
         anl a,00
         anl a,h'ff
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl h'00,a
         anl h'ff,a
         anl h'00,#00
         anl h'00,#h'ff
         anl h'ff,#00
         anl h'ff,#h'ff
         anl c,00
         anl c,h'ff
         anl c,/00
         anl c,/h'ff
         cjne a,h'00,stest
         cjne a,h'ff,stest
         cjne a,#h'00,stest
         cjne a,#h'ff,stest
         cjne r0,#h'00,stest
         cjne r7,#h'ff,stest
         cjne @r0,#h'00,stest
         cjne @r1,#h'ff,stest
         clr a
         clr h'00
         clr h'ff
         clr c
         cpl a
         cpl h'00
         cpl h'ff
         cpl c
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dec h'00
         dec h'ff
         dec @r0
         dec @r1
         div ab
loop1:   djnz r0,loop1
         djnz r1,loop1
         djnz r2,loop1
         djnz r3,loop1
         djnz r4,loop1
         djnz r5,loop1
         djnz r6,loop1
         djnz r7,loop1
         djnz h'00,loop1
         djnz h'ff,loop1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         inc h'00
         inc h'ff
         inc @r0
         inc @r1
         inc dptr
         jb  h'00,loop
loop:    jb  h'ff,loop
         jbc  h'00,loop
         jbc  h'ff,loop
         jc loop
         jmp @a+dptr
         jnb  h'00,loop
         jnb  h'ff,loop
         jnc loop
         jnz loop
         jz loop
         lcall stest
         ljmp stest
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,h'00
         mov a,h'ff
         mov a,@r0
         mov a,@r1
         mov a,#h'00
         mov a,#h'ff
         mov r0,#h'00
         mov r0,#h'ff
         mov r0,h'00
         mov r0,h'ff
         mov r0,a
         mov r1,#h'00
         mov r1,#h'ff
         mov r1,h'00
         mov r1,h'ff
         mov r1,a
         mov r2,#h'00
         mov r2,#h'ff
         mov r2,h'00
         mov r2,h'ff
         mov r2,a
         mov r3,#h'00
         mov r3,#h'ff
         mov r3,h'00
         mov r3,h'ff
         mov r3,a
         mov r4,#h'00
         mov r4,#h'ff
         mov r4,h'00
         mov r4,h'ff
         mov r4,a
         mov r5,#h'00
         mov r5,#h'ff
         mov r5,h'00
         mov r5,h'ff
         mov r5,a
         mov r6,#h'00
         mov r6,#h'ff
         mov r6,h'00
         mov r6,h'ff
         mov r6,a
         mov r7,#h'00
         mov r7,#h'ff
         mov r7,h'00
         mov r7,h'ff
         mov r7,a
         mov h'00,a
         mov h'00,r0
         mov h'00,r1
         mov h'00,r2
         mov h'00,r3
         mov h'00,r4
         mov h'00,r5
         mov h'00,r6
         mov h'00,r7
         mov h'00,h'00
         mov h'00,h'ff
         mov h'00,@r0
         mov h'00,@r1
         mov h'00,#h'00
         mov h'00,#h'ff
         mov h'ff,a
         mov h'ff,r0
         mov h'ff,r1
         mov h'ff,r2
         mov h'ff,r3
         mov h'ff,r4
         mov h'ff,r5
         mov h'ff,r6
         mov h'ff,r7
         mov h'ff,h'00
         mov h'ff,h'ff
         mov h'ff,@r0
         mov h'ff,@r1
         mov h'ff,#h'00
         mov h'ff,#h'ff
         mov @r0,#h'00
         mov @r0,#h'ff
         mov @r0,h'00
         mov @r0,h'ff
         mov @r0,a
         mov @r1,#h'00
         mov @r1,#h'ff
         mov @r1,h'00
         mov @r1,h'ff
         mov @r1,a
         mov c,h'00
         mov c,h'ff
         mov h'00,c
         mov h'ff,c
         mov dptr,#h'00ff
         mov dptr,#h'ff00
         movc a,@a+dptr
         movc a,@a+pc
         movx a,@r0
         movx a,@r1
         movx a,@dptr
         movx @r0,a
         movx @r1,a
         movx @dptr,a
         mul ab
         nop
         orl a,#00
         orl a,#h'ff
         orl a,00
         orl a,h'ff
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl h'00,a
         orl h'ff,a
         orl h'00,#00
         orl h'00,#h'ff
         orl h'ff,#00
         orl h'ff,#h'ff
         orl c,00
         orl c,h'ff
         orl c,/00
         orl c,/h'ff
         pop h'00
         pop h'ff
         push h'00
         push h'ff
         ret
         reti
         rl a
         rlc a
         rr a
         rrc a
         setb h'00
         setb h'ff
         setb c
rloop2:  sjmp rloop2
         subb a,#00
         subb a,#h'ff
         subb a,00
         subb a,h'ff
         subb a,@r0
         subb a,@r1
         subb a,r0           ;test all 8051 opcodes in all configurations
         subb a,r1           ;all machine mnemonics copyright Intel corp. 1976
         subb a,r2
         subb a,r3
         subb a,r4
         subb a,r5
         subb a,r6
         subb a,r7
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xch a,h'00
         xch a,h'ff
         xchd a,@r0
         xchd a,@r1
         xrl a,#00
         xrl a,#h'ff
         xrl a,00
         xrl a,h'ff
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl h'00,a
         xrl h'ff,a
         xrl h'00,#00
         xrl h'00,#h'ff
         xrl h'ff,#00
         xrl h'ff,#h'ff
         acall stest
         add a,#forward2
         add a,#forward1
         add a,00
         add a,forward1
         add a,@r0
         add a,@r1
         add a,r0           ;test all 8051 opcodes in all configurations
         add a,r1           ;all machine mnemonics copyright Intel corp. 1976
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#forward2
         addc a,#forward1
         addc a,00
         addc a,forward1
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         ajmp stest
         anl a,#forward2
         anl a,#forward1
         anl a,00
         anl a,forward1
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl forward2,a
         anl forward1,a
         anl forward2,#forward2
         anl forward2,#forward1
         anl forward1,#forward2
         anl forward1,#forward1
         anl c,00
         anl c,forward1
         anl c,/00
         anl c,/forward1
rloop3:  cjne a,forward2,rloop3
         cjne a,forward1,rloop3
         cjne a,#forward2,rloop3
         cjne a,#forward1,rloop3
         cjne r0,#forward2,rloop3
         cjne r1,#forward1,rloop3
         cjne r2,#forward2,rloop3
         cjne r3,#forward1,rloop3
         cjne r4,#forward2,rloop3
         cjne r5,#forward1,rloop3
         cjne r6,#forward2,rloop3
         cjne r7,#forward1,rloop3
         cjne @r0,#forward2,rloop3
         cjne @r1,#forward1,rloop3
         clr a
         clr forward2
         clr forward1
         clr c
         cpl a
         cpl forward2
         cpl forward1
         cpl c
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dec forward2
         dec forward1
         dec @r0
         dec @r1
         div ab
loop2:   djnz r0,loop2
         djnz r1,loop2
         djnz r2,loop2
         djnz r3,loop2
         djnz r4,loop2
         djnz r5,loop2
         djnz r6,loop2
         djnz r7,loop2
         djnz forward2,loop2
         djnz forward1,loop2
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         inc forward2
         inc forward1
         inc @r0
         inc @r1
         inc dptr
         jb  forward2,loop3
loop3:   jb  forward1,loop3
         jbc  forward2,loop3
         jbc  forward1,loop3
         jc loop3
         jmp @a+dptr
         jnb  forward2,loop3
         jnb  forward1,loop3
         jnc loop3
         jnz loop3
         jz loop3
         lcall stest
         ljmp stest
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,forward2
         mov a,forward1
         mov a,@r0
         mov a,@r1
         mov a,#forward2
         mov a,#forward1
         mov r0,#forward2
         mov r0,#forward1
         mov r0,forward2
         mov r0,forward1
         mov r0,a
         mov r1,#forward2
         mov r1,#forward1
         mov r1,forward2
         mov r1,forward1
         mov r1,a
         mov r2,#forward2
         mov r2,#forward1
         mov r2,forward2
         mov r2,forward1
         mov r2,a
         mov r3,#forward2
         mov r3,#forward1
         mov r3,forward2
         mov r3,forward1
         mov r3,a
         mov r4,#forward2
         mov r4,#forward1
         mov r4,forward2
         mov r4,forward1
         mov r4,a
         mov r5,#forward2
         mov r5,#forward1
         mov r5,forward2
         mov r5,forward1
         mov r5,a
         mov r6,#forward2
         mov r6,#forward1
         mov r6,forward2
         mov r6,forward1
         mov r6,a
         mov r7,#forward2
         mov r7,#forward1
         mov r7,forward2
         mov r7,forward1
         mov r7,a
         mov forward2,a
         mov forward2,r0
         mov forward2,r1
         mov forward2,r2
         mov forward2,r3
         mov forward2,r4
         mov forward2,r5
         mov forward2,r6
         mov forward2,r7
         mov forward2,forward2
         mov forward2,forward1
         mov forward2,@r0
         mov forward2,@r1
         mov forward2,#forward2
         mov forward2,#forward1
         mov forward1,a
         mov forward1,r0
         mov forward1,r1
         mov forward1,r2
         mov forward1,r3
         mov forward1,r4
         mov forward1,r5
         mov forward1,r6
         mov forward1,r7
         mov forward1,forward2
         mov forward1,forward1
         mov forward1,@r0
         mov forward1,@r1
         mov forward1,#forward2
         mov forward1,#forward1
         mov @r0,#forward2
         mov @r0,#forward1
         mov @r0,forward2
         mov @r0,forward1
         mov @r0,a
         mov @r1,#forward2
         mov @r1,#forward1
         mov @r1,forward2
         mov @r1,forward1
         mov @r1,a
         mov c,forward2
         mov c,forward1
         mov forward2,c
         mov forward1,c
         mov dptr,#forward2ff
         mov dptr,#forward100
         movc a,@a+dptr
         movc a,@a+pc
         movx a,@r0
         movx a,@r1
         movx a,@dptr
         movx @r0,a
         movx @r1,a
         movx @dptr,a
         mul ab
         nop
         orl a,#forward2
         orl a,#forward1
         orl a,00
         orl a,forward1
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl forward2,a
         orl forward1,a
         orl forward2,#forward2
         orl forward2,#forward1
         orl forward1,#forward2
         orl forward1,#forward1
         orl c,00
         orl c,forward1
         orl c,/00
         orl c,/forward1
         pop forward2
         pop forward1
         push forward2
         push forward1
         ret
         reti
         rl a
         rlc a
         rr a
         rrc a
         setb forward2
         setb forward1
         setb c
rloop:   sjmp rloop
         subb a,#forward2
         subb a,#forward1
         subb a,00
         subb a,forward1
         subb a,@r0
         subb a,@r1
         subb a,r0           ;test all 8051 opcodes in all configurations
         subb a,r1           ;all machine mnemonics copyright Intel corp. 1976
         subb a,r2
         subb a,r3
         subb a,r4
         subb a,r5
         subb a,r6
         subb a,r7
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xch a,forward2
         xch a,forward1
         xchd a,@r0
         xchd a,@r1
         xrl a,#forward2
         xrl a,#forward1
         xrl a,00
         xrl a,forward1
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl forward2,a
         xrl forward1,a
         xrl forward2,#forward2
         xrl forward2,#forward1
         xrl forward1,#forward2
         xrl forward1,#forward1
synctst:
farloop: .equ forward1,h'ff
         .equ forward2,h'00
         .org 0x7916
brtest:  nop
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         xrl a,r7
         xrl a,r6
         xrl a,r7
         xrl a,r7
         djnz r7,brtest
         .end
```
{% endraw %}

## MNEMTEST.ASM

{% raw %}
```
         .org 0
         add a,#00
         add a,#h'ff
         add a,@r0
         add a,@r1
         add a,r0           ;test all 8048 opcodes in all configurations
         add a,r1           ;all machine mnemonics copyright Intel corp. 1976
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#00
         addc a,#h'ff
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         anl a,#00
         anl a,#h'ff
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl bus,#00
         anl bus,#h'ff
         anl p1,#00
         anl p2,#h'ff
         anld p4,a
         anld p5,a
         anld p6,a
         anld p7,a
         call farloop
         clr a
         clr c
         clr f0
         clr f1
         cpl a
         cpl c
         cpl f0
         cpl f1
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dis i
         dis tcnti
loop1:   djnz r0,loop1
         djnz r1,loop1
         djnz r2,loop1
         djnz r3,loop1
         djnz r4,loop1
         djnz r5,loop1
         djnz r6,loop1
         djnz r7,loop1
         en i
         en tcnti
         ent0 clk
         in a,p1
         in a,p2
         inc @r0
         inc @r1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         ins a,bus
         jb0 loop
         jb1 loop
         jb2 loop
         jb3 loop
loop:    jb4 loop
         jb5 loop
         jb6 loop
         jb7 loop
         jc loop
         jf0 loop
         jf1 loop
         jmp farloop
         jmpp @a
         jnc loop
         jni loop
         jnt0 loop
         jnt1 loop
         jnz loop
         jt0 loop
         jt1 loop
         jtf loop
         jz loop
         mov @r0,#h'00
         mov @r0,#h'ff
         mov @r0,a
         mov @r1,#h'00
         mov @r1,#h'ff
         mov @r1,a
         mov a,#h'00
         mov a,#h'ff
         mov a,@r0
         mov a,@r1
         mov a,psw
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,t
         mov psw,a
         mov r0,#h'00
         mov r0,#h'ff
         mov r0,a
         mov r1,#h'00
         mov r1,#h'ff
         mov r1,a
         mov r2,#h'00
         mov r2,#h'ff
         mov r2,a
         mov r3,#h'00
         mov r3,#h'ff
         mov r3,a
         mov r4,#h'00
         mov r4,#h'ff
         mov r4,a
         mov r5,#h'00
         mov r5,#h'ff
         mov r5,a
         mov r6,#h'00
         mov r6,#h'ff
         mov r6,a
         mov r7,#h'00
         mov r7,#h'ff
         mov r7,a
         mov t,a
         movd a,p4
         movd a,p5
         movd a,p6
         movd a,p7
         movd p4,a
         movd p5,a
         movd p6,a
         movd p7,a
         movp a,@a
         movp3 a,@a
         movx @r0,a
         movx @r1,a
         movx a,@r0
         movx a,@r1
         nop
         orl a,#00
         orl a,#h'ff
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl bus,#00
         orl bus,#h'ff
         orl p1,#00
         orl p2,#h'ff
         orld p4,a
         orld p5,a
         orld p6,a
         orld p7,a
         outl bus,a
         outl p1,a
         outl p2,a
         ret
         retr
         rl a
         rlc a
         rr a
         rrc a
         sel mb0
         sel mb1
         sel rb0
         sel rb1
         stop tcnt
         strt cnt
         strt t
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xchd a,@r0
         xchd a,@r1
         xrl a,#00
         xrl a,#h'ff
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
synctst1:
         add a,#forward2
         add a,#forward1
         add a,@r0
         add a,@r1
         add a,r0
         add a,r1
         add a,r2
         add a,r3
         add a,r4
         add a,r5
         add a,r6
         add a,r7
         addc a,#forward2
         addc a,#forward1
         addc a,@r0
         addc a,@r1
         addc a,r0
         addc a,r1
         addc a,r2
         addc a,r3
         addc a,r4
         addc a,r5
         addc a,r6
         addc a,r7
         anl a,#forward2
         anl a,#forward1
         anl a,@r0
         anl a,@r1
         anl a,r0
         anl a,r1
         anl a,r2
         anl a,r3
         anl a,r4
         anl a,r5
         anl a,r6
         anl a,r7
         anl bus,#forward2
         anl bus,#forward1
         anl p1,#forward2
         anl p2,#forward1
         anld p4,a
         anld p5,a
         anld p6,a
         anld p7,a
         call farloop
         clr a
         clr c
         clr f0
         clr f1
         cpl a
         cpl c
         cpl f0
         cpl f1
         da a
         dec a
         dec r0
         dec r1
         dec r2
         dec r3
         dec r4
         dec r5
         dec r6
         dec r7
         dis i
         dis tcnti
loop2:   djnz r0,loop2
         djnz r1,loop2
         djnz r2,loop2
         djnz r3,loop2
         djnz r4,loop2
         djnz r5,loop2
         djnz r6,loop2
         djnz r7,loop2
         en i
         en tcnti
         ent0 clk
         in a,p1
         in a,p2
         inc @r0
         inc @r1
         inc a
         inc r0
         inc r1
         inc r2
         inc r3
         inc r4
         inc r5
         inc r6
         inc r7
         ins a,bus
loop3:   jb0 loop3
         jb1 loop3
         jb2 loop3
         jb3 loop3
         jb4 loop3
         jb5 loop3
         jb6 loop3
         jb7 loop3
         jc loop3
         jf0 loop3
         jf1 loop3
         jmp farloop
         jmpp @a
         jnc loop3
         jni loop3
         jnt0 loop3
         jnt1 loop3
         jnz loop3
         jt0 loop3
         jt1 loop3
         jtf loop3
         jz loop3
         mov @r0,#forward2
         mov @r0,#forward1
         mov @r0,a
         mov @r1,#forward2
         mov @r1,#forward1
         mov @r1,a
         mov a,#forward2
         mov a,#forward1
         mov a,@r0
         mov a,@r1
         mov a,psw
         mov a,r0
         mov a,r1
         mov a,r2
         mov a,r3
         mov a,r4
         mov a,r5
         mov a,r6
         mov a,r7
         mov a,t
         mov psw,a
         mov r0,#forward2
         mov r0,#forward1
         mov r0,a
         mov r1,#forward2
         mov r1,#forward1
         mov r1,a
         mov r2,#forward2
         mov r2,#forward1
         mov r2,a
         mov r3,#forward2
         mov r3,#forward1
         mov r3,a
         mov r4,#forward2
         mov r4,#forward1
         mov r4,a
         mov r5,#forward2
         mov r5,#forward1
         mov r5,a
         mov r6,#forward2
         mov r6,#forward1
         mov r6,a
         mov r7,#forward2
         mov r7,#forward1
         mov r7,a
         mov t,a
         movd a,p4
         movd a,p5
         movd a,p6
         movd a,p7
         movd p4,a
         movd p5,a
         movd p6,a
         movd p7,a
         movp a,@a
         movp3 a,@a
         movx @r0,a
         movx @r1,a
         movx a,@r0
         movx a,@r1
         nop
         orl a,#forward2
         orl a,#forward1
         orl a,@r0
         orl a,@r1
         orl a,r0
         orl a,r1
         orl a,r2
         orl a,r3
         orl a,r4
         orl a,r5
         orl a,r6
         orl a,r7
         orl bus,#forward2
         orl bus,#forward1
         orl p1,#forward2
         orl p2,#forward1
         orld p4,a
         orld p5,a
         orld p6,a
         orld p7,a
         outl bus,a
         outl p1,a
         outl p2,a
         ret
         retr
         rl a
         rlc a
         rr a
         rrc a
         sel mb0
         sel mb1
         sel rb0
         sel rb1
         stop tcnt
         strt cnt
         strt t
         swap a
         xch a,@r0
         xch a,@r1
         xch a,r0
         xch a,r1
         xch a,r2
         xch a,r3
         xch a,r4
         xch a,r5
         xch a,r6
         xch a,r7
         xchd a,@r0
         xchd a,@r1
         xrl a,#forward2
         xrl a,#forward1
         xrl a,@r0
         xrl a,@r1
         xrl a,r0
         xrl a,r1
         xrl a,r2
         xrl a,r3
         xrl a,r4
         xrl a,r5
         xrl a,r6
         xrl a,r7
         .equ forward1,h'ff
         .equ forward2,h'00
synctst2:
farloop:
         .end
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0777

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   6-16-87   2:26p
    GO       TXT      1268   7-06-90   2:45a
    FILE0777 TXT      2295   7-10-90  11:26a
    A48          <DIR>    
    A51          <DIR>    
            5 file(s)       3601 bytes

     Directory of A:\A48

    .            <DIR>    
    ..           <DIR>    
    A48      EXE     63408   1-29-90   7:32p
    BROCH    PC      27838   2-05-90  10:44a
    EXAMPLE  ASM      2623  12-08-89  10:01a
    LEVELI   DOC     23780   3-22-90   6:29a
    MNEM41   ASM      9230   1-23-90   9:38a
    MNEMTEST ASM      9610  12-19-87  12:57p
    READI    ME       1465   2-07-90   3:39p
            9 file(s)     137954 bytes

     Directory of A:\A51

    .            <DIR>    
    ..           <DIR>    
    A51      EXE     65760   1-29-90   7:33p
    BROCH    PC      27838   2-05-90  10:44a
    EXAMPLE  ASM      2658   3-07-90   2:51p
    LEVELI   DOC     23780   3-22-90   6:29a
    MNEMTEST ASM     15931   1-30-90   2:03p
    READI    ME       1465   2-07-90   3:39p
            8 file(s)     137432 bytes

    Total files listed:
           22 file(s)     278987 bytes
                           30720 bytes free
