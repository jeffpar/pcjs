---
layout: page
title: "PC-SIG Diskette Library (Disk #776)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0776/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0776"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PSEUDOSAM CROSS ASSEMBLER 18 AND 65"

    PSEUDOSAM 18 and 65 are machine language cross-assembler programs for
    the RCA 1802, 4, 5, 6, and 6502 microprocessors.  These programs let
    you construct 1802 and 6502 code on your IBM PC, to be transferred to
    an 1802 or 6502-based system for use.
    
    The PSEUDOSAM (Pseudo brand Symbolic AsseMbler) assemblers conform to
    common syntax based on the UNIX system V assembler syntax.  The opcode
    and addressing syntax is compatible with the manufacturer's, but label,
    directive, and expression operator syntax will differ.
    
    The author of PSEUDOSAM chose this syntax because of UNIX's popularity,
    and to avoid the problem of maintaining compatibility with the many OEM
    assemblers.  The documentation is well organized and easy to understand,
    although no attempt is made to teach 1802 or 6502 programming.  You
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
;   a18  -o example         ;two object module files
                            ;     code.seg
                            ;     foo.seg
;
;   a18  example            ;one object module file example.obj

         .org 0       ;comment test
         .db 1,2,3,4,5,6,7,8 ;define byte test
lab1:                ;label only test

                     ;blank line and comment only test
         .dw 1,32000  ;define word test
         .rs 10       ;reserve storage test
         .dw 1+lab1   ;add test
         .dw lab1-1   ;subtract test
         .dw 1*lab1   ;multiply test
         .dw 'k'      ;character test
         .db 1,d'6,077,o'77,q'77,0x77,h'77,x'aa,x'a,b'1111,b'1 ;radix test
         .db "k"      ;string test--should give no error
         .db "\n\t\b\r\f\\\'\0\145" ;string escape test sequence
         .dw 1 << 15  ;8000
         .dw x'8000 >> 15  ;0001
         .dw ~x'ffff    ;0000
         .dw -1         ;ffff
         .page
         .dw 10 /2      ;5
         .eject
         .dw 32000/2000 ;16
         .dw 27 %5      ;modulus = 2
         .dw x'5555 ~ x'5555 ;ffff
         .dw x'5555 | x'aaaa ;ffff
         .dw x'5555 ^ x'aaaa ;ffff
start:   .dw x'5555 ^ x'5555 ;0000
         .dw x'5555 & x'aaaa ;0000
         .dw x'5555 & x'5555 ;5555
         .dw 32000 + 1  ;large positive
         .dw -32000 + 1 ;small negative
         .dw 5 + - 3 * 2 /3 ;complex expression
         .dw 5 + (-3)*2/3   ;
         .dw lab2
         .dw lab2+1         ;test expression sync
         .code        ;extraneous switch to current segment
         .segment foo
         foo
         .org x'ff
         .db 1,2
         .code
         .db 3,4
         foo
lab2:    .db,5,6
         .set lab3,lab2
         .equ lab3,start
synctest: .DIRECT   +h88 +w132
         .end  start

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

## MNEMLEV1.ASM

{% raw %}
```
         .org 0       ;comment test
         .db 1,2,3,4,5,6,7,8 ;define byte test
lab1:                ;label only test

                     ;blank line and comment only test
         .dw 1,32000  ;define word test
         .rs 10       ;reserve storage test
         .dw 1+lab1   ;add test
         .dw lab1-1   ;subtract test
         .dw 1*lab1   ;multiply test
         .dw 'k'      ;character test
         .db 1,d'6,077,o'77,q'77,0x77,h'77,x'aa,x'a,b'1111,b'1 ;radix test
         .db "k"      ;string test--should give no error
         .db "\n\t\b\r\f\\\'\0\145" ;string escape test sequence
         .dw 1 << 15  ;8000
         .dw x'8000 >> 15  ;0001
         .dw ~x'ffff    ;0000
         .dw -1         ;ffff
         .page
         .dw 10 /2      ;5
         .eject
         .dw 32000/2000 ;16
         .dw 27 %5      ;modulus = 2
         .dw x'5555 ~ x'5555 ;ffff
         .dw x'5555 | x'aaaa ;ffff
         .dw x'5555 ^ x'aaaa ;ffff
start:   .dw x'5555 ^ x'5555 ;0000
         .dw x'5555 & x'aaaa ;0000
         .dw x'5555 & x'5555 ;5555
         .dw 32000 + 1  ;large positive
         .dw -32000 + 1 ;small negative
         .dw 5 + - 3 * 2 /3 ;complex expression
         .dw 5 + (-3)*2/3   ;
         .dw lab2
         .dw lab2+1         ;test expression sync
         .code        ;extraneous switch to current segment
         .segment foo
         foo
         .org x'ff
         .db 1,2
         .code
         .db 3,4
         foo
lab2:    .db,5,6
         .set lab3,lab2
         .equ lab3,start
codetst:  LDN     1
          LDA     1
          LDX
          LDXA
          LDI     1
          STR     1
          STXD
          INC     1
          DEC     1
          IRX
          GLO     1
          PLO     1
          GHI     1
          PHI     1
          OR
          ORI     1
          XOR
          XRI     1
          AND
          ANI     1
          SHR
          SHRC
          RSHR
          SHL
          SHLC
          RSHL
          ADD
          ADI     1
          ADC
          ADCI    1
          SD
          SDI     1
          SDB
          SDBI    1
          SM
          SMI     1
testbr:   SMB
          SMBI    1
          BR      testbr
          NBR
          BZ      testbr
          BNZ     testbr
          BDF     testbr
          BPZ     testbr
          BGE     testbr
          BNF     testbr
          BM      testbr
          BL      testbr
          BQ      testbr
          BNQ     testbr
          B1      testbr
          BN1     testbr
          B2      testbr
          BN2     testbr
          B3      testbr
          BN3     testbr
          B4      testbr
          BN4     testbr
          LBR     testbr
          NLBR
          LBZ     testbr
          LBNZ    testbr
          LBDF    testbr
          LBNF    testbr
          LBQ     testbr
          LBNQ    testbr
          SKP
          LSKP
          LSZ
          LSNZ
          LSDF
          LSNF
          LSQ
          LSNQ
          LSIE
          IDL
          NOP
          SEP     1
          SEX     1
          SEQ
          REQ
          SAV
          MARK
          RET
          DIS
          OUT     1
          INP     1
synctest:
          .end start
```
{% endraw %}

## MNEMLEV2.ASM

{% raw %}
```
         .direct -m2   ;1805a instruction set enabled
         .org 0       ;comment test
         .db 1,2,3,4,5,6,7,8 ;define byte test
lab1:                ;label only test

                     ;blank line and comment only test
         .dw 1,32000  ;define word test
         .rs 10       ;reserve storage test
         .dw 1+lab1   ;add test
         .dw lab1-1   ;subtract test
         .dw 1*lab1   ;multiply test
         .dw 'k'      ;character test
         .db 1,d'6,077,o'77,q'77,0x77,h'77,x'aa,x'a,b'1111,b'1 ;radix test
         .db "k"      ;string test--should give no error
         .db "\n\t\b\r\f\\\'\0\145" ;string escape test sequence
         .dw 1 << 15  ;8000
         .dw x'8000 >> 15  ;0001
         .dw ~x'ffff    ;0000
         .dw -1         ;ffff
         .page
         .dw 10 /2      ;5
         .eject
         .dw 32000/2000 ;16
         .dw 27 %5      ;modulus = 2
         .dw x'5555 ~ x'5555 ;ffff
         .dw x'5555 | x'aaaa ;ffff
         .dw x'5555 ^ x'aaaa ;ffff
start:   .dw x'5555 ^ x'5555 ;0000
         .dw x'5555 & x'aaaa ;0000
         .dw x'5555 & x'5555 ;5555
         .dw 32000 + 1  ;large positive
         .dw -32000 + 1 ;small negative
         .dw 5 + - 3 * 2 /3 ;complex expression
         .dw 5 + (-3)*2/3   ;
         .dw lab2
         .dw lab2+1         ;test expression sync
         .code        ;extraneous switch to current segment
         .segment foo
         foo
         .org x'ff
         .db 1,2
         .code
         .db 3,4
         foo
lab2:    .db,5,6
         .set lab3,lab2
         .equ lab3,start
codetst:  LDN     1
          LDA     1
          LDX
          LDXA
          LDI     1
          STR     1
          STXD
          INC     1
          DEC     1
          IRX
          GLO     1
          PLO     1
          GHI     1
          PHI     1
          OR
          ORI     1
          XOR
          XRI     1
          AND
          ANI     1
          SHR
          SHRC
          RSHR
          SHL
          SHLC
          RSHL
          ADD
          ADI     1
          ADC
          ADCI    1
          SD
          SDI     1
          SDB
          SDBI    1
          SM
          SMI     1
testbr:   SMB
          SMBI    1
          BR      testbr
          NBR
          BZ      testbr
          BNZ     testbr
          BDF     testbr
          BPZ     testbr
          BGE     testbr
          BNF     testbr
          BM      testbr
          BL      testbr
          BQ      testbr
          BNQ     testbr
          B1      testbr
          BN1     testbr
          B2      testbr
          BN2     testbr
          B3      testbr
          BN3     testbr
          B4      testbr
          BN4     testbr
          LBR     testbr
          NLBR
          LBZ     testbr
          LBNZ    testbr
          LBDF    testbr
          LBNF    testbr
          LBQ     testbr
          LBNQ    testbr
          SKP
          LSKP
          LSZ
          LSNZ
          LSDF
          LSNF
          LSQ
          LSNQ
          LSIE
          IDL
          NOP
          SEP     1
          SEX     1
          SEQ
          REQ
          SAV
          MARK
          RET
          DIS
          OUT     1
          INP     1
          RLXA   r3
          RLDI   5,h'ff00
          RSXD   r0
          RNX    r1
          BCI synctest
          BXI synctest
          ETQ
          LDC
          GEC
          STPC
          DTC
          STM
          SCM1
          SCM2
          SPM1
          SPM2
          XIE
          XID
          CIE
          CID
          SCAL  5,synctest
          scal  rf,testbr
          SRET  rf
          dbnz  r1,synctest
          dadd
          dadi  h'99
          dadc
          daci x'01
          dsm
          dsmi h'21
          dsmb
          dsbi h'01
          dsav
synctest: .DIRECT   +h88 +w132
         .end  start

```
{% endraw %}

## EXAMPLE.ASM

{% raw %}
```
; To become familiar with the segment feature you
; should assemble this file with and without the
; single object module swicth enabled.
;
;   a65  -o example         ;three object module files
                            ;     code.seg
                            ;     memory.seg
                            ;     rom2.seg
;
;   a65  example            ;one object module file example.obj


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
         .equ tab,9
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

## MAC.ASM

{% raw %}
```
;some useful macros to help get you started
;Assemble this file and carefully examine the listing

         ;lo( <expr> ) masks off the least significant byte of <expr>.
         define( lo,
         changequote([,])[($1) & x'0ff]changequote(`,'))

         ;hi( <expr> ) isolates the most significant byte of <expr>
         define( hi,`($1) >> 8')

         .equ test,x'2211
         .db lo(test)
         .db hi(test)
         .end
```
{% endraw %}

## MNEMTEST.ASM

{% raw %}
```
test1234:
test1235:
         .org 0
         adc #forward1
         adc #h'ff
         adc (100),y
         adc (100,x)
         adc 100
         adc 1000
         adc 1000,x
         adc 1000,y
         adc forward1,x
         adc h'ff,x
         and #forward1
         and #h'ff
         and (100),y
         and (100,x)
         and 100
         and 1000
         and 1000,x
         and 1000,y
         and forward1,x
         and h'ff,x
         asl 100
         asl 1000
         asl 1000,x
         asl a
         asl forward1,x
         asl h'ff,x
         bcc reltst
         bcs reltst
         beq reltst
         bit 1000
         bit forward1
         bit h'ff
reltst: bmi reltst
         bne reltst
         bpl reltst
         brk
         bvc reltst
         bvs reltst
         clc
         cld
         cli
         clv
         cmp #forward1
         cmp #h'ff
         cmp (100),y
         cmp (100,x)
         cmp 100
         cmp 1000
         cmp 1000,x
         cmp 1000,y
         cmp forward1,x
         cmp h'ff,x
         cpx #forward1
         cpx #h'ff
         cpx 100
         cpx 1000
         cpy #forward1
         cpy #h'ff
         cpy 100
         cpy 1000
         dec 100
         dec 1000
         dec 1000,x
         dec forward1,x
         dec h'ff,x
         dex
         dey
         eor #forward1
         eor #h'ff
         eor (100),y
         eor (100,x)
         eor 100
         eor 1000
         eor 1000,x
         eor 1000,y
         eor forward1,x
         eor h'ff,x
         inc 100
         inc 1000
         inc 1000,x
         inc forward1,x
         inc h'ff,x
         inx
         iny
         jmp (1000)
         jmp 100
         jmp 1000
         jsr 100
         jsr 1000
         lda #forward1
         lda #h'ff
         lda (100),y
         lda (100,x)
         lda 100
         lda 1000
         lda 1000,x
         lda 1000,y
         lda forward1,x
         lda h'ff,x
         ldx #forward1
         ldx #h'ff
         ldx 0,y
         ldx 100
         ldx 100,y
         ldx 1000
         ldx 1000,y
         ldy #forward1
         ldy #h'ff
         ldy 0,x
         ldy 100
         ldy 100,x
         ldy 1000
         ldy 1000,x
         lsr 100
         lsr 1000
         lsr 1000,x
         lsr a
         lsr forward1,x
         lsr h'ff,x
         nop
         ora #forward1
         ora #h'ff
         ora (100),y
         ora (100,x)
         ora 100
         ora 1000
         ora 1000,x
         ora 1000,y
         ora forward1,x
         ora h'ff,x
         pha
         php
         pla
         plp
         rol 100
         rol 1000
         rol 1000,x
         rol a
         rol forward1,x
         rol h'ff,x
         ror 100
         ror 1000
         ror 1000,x
         ror a
         ror forward1,x
         ror h'ff,x
         rti
         rts
         sbc #forward1
         sbc #h'ff
         sbc (100),y
         sbc (100,x)
         sbc 100
         sbc 1000
         sbc 1000,x
         sbc 1000,y
         sbc forward1,x
         sbc h'ff,x
         sec
         sed
         sei
         sta (100),y
         sta (100,x)
         sta 100
         sta 1000
         sta 1000,x
         sta 1000,y
         sta forward1,x
         sta h'ff,x
         stx 100
         stx 1000
         stx forward1,y
         stx h'ff,y
         sty 100
         sty 1000
         sty forward1,x
         sty h'ff,x
         tax
         tay
         tsx
         txa
         txs
         tya
synctst1:
         adc #forward1
         adc #forward2
         adc (forward3),y
         adc (forward3,x)
         adc forward3
         adc forward4
         adc forward4,x
         adc forward4,y
         adc forward1,x
         adc forward2,x
         and #forward1
         and #forward2
         and (forward3),y
         and (forward3,x)
         and forward3
         and forward4
         and forward4,x
         and forward4,y
         and forward1,x
         and forward2,x
         asl forward3
         asl forward4
         asl forward4,x
         asl a
         asl forward1,x
         asl forward2,x
         bcc reltst2
         bcs reltst2
         beq reltst2
         bit forward4
         bit forward1
         bit forward2
reltst2: bmi reltst2
         bne reltst2
         bpl reltst2
         bvc reltst2
         bvs reltst2
         clc
         cld
         cli
         clv
         cmp #forward1
         cmp #forward2
         cmp (forward3),y
         cmp (forward3,x)
         cmp forward3
         cmp forward4
         cmp forward4,x
         cmp forward4,y
         cmp forward1,x
         cmp forward2,x
         cpx #forward1
         cpx #forward2
         cpx forward3
         cpx forward4
         cpy #forward1
         cpy #forward2
         cpy forward3
         cpy forward4
         dec forward3
         dec forward4
         dec forward4,x
         dec forward1,x
         dec forward2,x
         dex
         dey
         eor #forward1
         eor #forward2
         eor (forward3),y
         eor (forward3,x)
         eor forward3
         eor forward4
         eor forward4,x
         eor forward4,y
         eor forward1,x
         eor forward2,x
         inc forward3
         inc forward4
         inc forward4,x
         inc forward1,x
         inc forward2,x
         inx
         iny
         jmp (forward4)
         jmp forward3
         jmp forward4
         jsr forward3
         jsr forward4
         lda #forward1
         lda #forward2
         lda (forward3),y
         lda (forward3,x)
         lda forward3
         lda forward4
         lda forward4,x
         lda forward4,y
         lda forward1,x
         lda forward2,x
         ldx #forward1
         ldx #forward2
         ldx 0,y
         ldx forward3
         ldx forward3,y
         ldx forward4
         ldx forward4,y
         lsr forward3
         lsr forward4
         lsr forward4,x
         lsr a
         lsr forward1,x
         lsr forward2,x
         nop
         ora #forward1
         ora #forward2
         ora (forward3),y
         ora (forward3,x)
         ora forward3
         ora forward4
         ora forward4,x
         ora forward4,y
         ora forward1,x
         ora forward2,x
         pha
         php
         pla
         plp
         rol forward3
         rol forward4
         rol forward4,x
         rol a
         rol forward1,x
         rol forward2,x
         ror forward3
         ror forward4
         ror forward4,x
         ror a
         ror forward1,x
         ror forward2,x
         rti
         rts
         sbc #forward1
         sbc #forward2
         sbc (forward3),y
         sbc (forward3,x)
         sbc forward3
         sbc forward4
         sbc forward4,x
         sbc forward4,y
         sbc forward1,x
         sbc forward2,x
         sec
         sed
         sei
         sta (forward3),y
         sta (forward3,x)
         sta forward3
         sta forward4
         sta forward4,x
         sta forward4,y
         sta forward1,x
         sta forward2,x
         stx forward3
         stx forward4
         stx forward1,y
         stx forward2,y
         sty forward3
         sty forward4
         sty forward1,x
         sty forward2,x
         tax
         tay
         tsx
         txa
         txs
         tya
synctst2:
        .equ forward1,h'00
        .equ forward2,h'ff
        .equ forward3,100
        .equ forward4,1000
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
;   a65  -o example         ;three object module files
                            ;     code.seg
                            ;     memory.seg
                            ;     rom2.seg
;
;   a65  example            ;one object module file example.obj


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
         .equ tab,9
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
;   a18  -o example         ;two object module files
                            ;     code.seg
                            ;     foo.seg
;
;   a18  example            ;one object module file example.obj

         .org 0       ;comment test
         .db 1,2,3,4,5,6,7,8 ;define byte test
lab1:                ;label only test

                     ;blank line and comment only test
         .dw 1,32000  ;define word test
         .rs 10       ;reserve storage test
         .dw 1+lab1   ;add test
         .dw lab1-1   ;subtract test
         .dw 1*lab1   ;multiply test
         .dw 'k'      ;character test
         .db 1,d'6,077,o'77,q'77,0x77,h'77,x'aa,x'a,b'1111,b'1 ;radix test
         .db "k"      ;string test--should give no error
         .db "\n\t\b\r\f\\\'\0\145" ;string escape test sequence
         .dw 1 << 15  ;8000
         .dw x'8000 >> 15  ;0001
         .dw ~x'ffff    ;0000
         .dw -1         ;ffff
         .page
         .dw 10 /2      ;5
         .eject
         .dw 32000/2000 ;16
         .dw 27 %5      ;modulus = 2
         .dw x'5555 ~ x'5555 ;ffff
         .dw x'5555 | x'aaaa ;ffff
         .dw x'5555 ^ x'aaaa ;ffff
start:   .dw x'5555 ^ x'5555 ;0000
         .dw x'5555 & x'aaaa ;0000
         .dw x'5555 & x'5555 ;5555
         .dw 32000 + 1  ;large positive
         .dw -32000 + 1 ;small negative
         .dw 5 + - 3 * 2 /3 ;complex expression
         .dw 5 + (-3)*2/3   ;
         .dw lab2
         .dw lab2+1         ;test expression sync
         .code        ;extraneous switch to current segment
         .segment foo
         foo
         .org x'ff
         .db 1,2
         .code
         .db 3,4
         foo
lab2:    .db,5,6
         .set lab3,lab2
         .equ lab3,start
synctest: .DIRECT   +h88 +w132
         .end  start

```
{% endraw %}

## FILE0776.TXT

{% raw %}
```
Disk No:  776                                                           
Disk Title: PseudoSam Cross Assembler 18 and 65                         
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: PseudoSam 18 and 65                                      
Author Version: 1.6                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
PSEUDOSAM 18 and 65 are machine language cross-assembler programs for   
the RCA 1802, 4, 5, 6, and 6502 microprocessors.  These programs let    
you construct 1802 and 6502 code on your IBM PC, to be transferred to   
an 1802 or 6502-based system for use.                                   
                                                                        
The PSEUDOSAM (Pseudo brand Symbolic AsseMbler) assemblers conform to   
common syntax based on the UNIX system V assembler syntax.  The opcode  
and addressing syntax is compatible with the manufacturer's, but label, 
directive, and expression operator syntax will differ.                  
                                                                        
The author of PSEUDOSAM chose this syntax because of UNIX's popularity, 
and to avoid the problem of maintaining compatibility with the many OEM 
assemblers.  The documentation is well organized and easy to understand,
although no attempt is made to teach 1802 or 6502 programming.  You     
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
║        <<<<  Disk #776 PSEUDOSAM 18 AND 65 CROSS ASSEMBLER  >>>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To print the documentation for the 18 Cross Assembler you must first    ║
║ change to the A18 subdirectory by typing:     CD\A18                    ║
║                                                                         ║
║ You will then print the documentation by typing:                        ║
║ COPY READI.ME PRN                                                       ║
║                                                                         ║
║ To print the documentation for the 65 Cross Assembler you must first    ║
║ change to the A65 subdirectory by typing:     CD\A65                    ║
║                                                                         ║
║ You will then print the documentation by typing:                        ║
║ COPY READI.ME PRN                                                       ║
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

## MAC.ASM

{% raw %}
```
;some useful macros to help get you started
;Assemble this file and carefully examine the listing

         ;lo( <expr> ) masks off the least significant byte of <expr>.
         define( lo,
         changequote([,])[($1) & x'0ff]changequote(`,'))

         ;hi( <expr> ) isolates the most significant byte of <expr>
         define( hi,`($1) >> 8')

         .equ test,x'2211
         .db lo(test)
         .db hi(test)
         .end
```
{% endraw %}

## MNEMLEV1.ASM

{% raw %}
```
         .org 0       ;comment test
         .db 1,2,3,4,5,6,7,8 ;define byte test
lab1:                ;label only test

                     ;blank line and comment only test
         .dw 1,32000  ;define word test
         .rs 10       ;reserve storage test
         .dw 1+lab1   ;add test
         .dw lab1-1   ;subtract test
         .dw 1*lab1   ;multiply test
         .dw 'k'      ;character test
         .db 1,d'6,077,o'77,q'77,0x77,h'77,x'aa,x'a,b'1111,b'1 ;radix test
         .db "k"      ;string test--should give no error
         .db "\n\t\b\r\f\\\'\0\145" ;string escape test sequence
         .dw 1 << 15  ;8000
         .dw x'8000 >> 15  ;0001
         .dw ~x'ffff    ;0000
         .dw -1         ;ffff
         .page
         .dw 10 /2      ;5
         .eject
         .dw 32000/2000 ;16
         .dw 27 %5      ;modulus = 2
         .dw x'5555 ~ x'5555 ;ffff
         .dw x'5555 | x'aaaa ;ffff
         .dw x'5555 ^ x'aaaa ;ffff
start:   .dw x'5555 ^ x'5555 ;0000
         .dw x'5555 & x'aaaa ;0000
         .dw x'5555 & x'5555 ;5555
         .dw 32000 + 1  ;large positive
         .dw -32000 + 1 ;small negative
         .dw 5 + - 3 * 2 /3 ;complex expression
         .dw 5 + (-3)*2/3   ;
         .dw lab2
         .dw lab2+1         ;test expression sync
         .code        ;extraneous switch to current segment
         .segment foo
         foo
         .org x'ff
         .db 1,2
         .code
         .db 3,4
         foo
lab2:    .db,5,6
         .set lab3,lab2
         .equ lab3,start
codetst:  LDN     1
          LDA     1
          LDX
          LDXA
          LDI     1
          STR     1
          STXD
          INC     1
          DEC     1
          IRX
          GLO     1
          PLO     1
          GHI     1
          PHI     1
          OR
          ORI     1
          XOR
          XRI     1
          AND
          ANI     1
          SHR
          SHRC
          RSHR
          SHL
          SHLC
          RSHL
          ADD
          ADI     1
          ADC
          ADCI    1
          SD
          SDI     1
          SDB
          SDBI    1
          SM
          SMI     1
testbr:   SMB
          SMBI    1
          BR      testbr
          NBR
          BZ      testbr
          BNZ     testbr
          BDF     testbr
          BPZ     testbr
          BGE     testbr
          BNF     testbr
          BM      testbr
          BL      testbr
          BQ      testbr
          BNQ     testbr
          B1      testbr
          BN1     testbr
          B2      testbr
          BN2     testbr
          B3      testbr
          BN3     testbr
          B4      testbr
          BN4     testbr
          LBR     testbr
          NLBR
          LBZ     testbr
          LBNZ    testbr
          LBDF    testbr
          LBNF    testbr
          LBQ     testbr
          LBNQ    testbr
          SKP
          LSKP
          LSZ
          LSNZ
          LSDF
          LSNF
          LSQ
          LSNQ
          LSIE
          IDL
          NOP
          SEP     1
          SEX     1
          SEQ
          REQ
          SAV
          MARK
          RET
          DIS
          OUT     1
          INP     1
synctest:
          .end start
```
{% endraw %}

## MNEMLEV2.ASM

{% raw %}
```
         .direct -m2   ;1805a instruction set enabled
         .org 0       ;comment test
         .db 1,2,3,4,5,6,7,8 ;define byte test
lab1:                ;label only test

                     ;blank line and comment only test
         .dw 1,32000  ;define word test
         .rs 10       ;reserve storage test
         .dw 1+lab1   ;add test
         .dw lab1-1   ;subtract test
         .dw 1*lab1   ;multiply test
         .dw 'k'      ;character test
         .db 1,d'6,077,o'77,q'77,0x77,h'77,x'aa,x'a,b'1111,b'1 ;radix test
         .db "k"      ;string test--should give no error
         .db "\n\t\b\r\f\\\'\0\145" ;string escape test sequence
         .dw 1 << 15  ;8000
         .dw x'8000 >> 15  ;0001
         .dw ~x'ffff    ;0000
         .dw -1         ;ffff
         .page
         .dw 10 /2      ;5
         .eject
         .dw 32000/2000 ;16
         .dw 27 %5      ;modulus = 2
         .dw x'5555 ~ x'5555 ;ffff
         .dw x'5555 | x'aaaa ;ffff
         .dw x'5555 ^ x'aaaa ;ffff
start:   .dw x'5555 ^ x'5555 ;0000
         .dw x'5555 & x'aaaa ;0000
         .dw x'5555 & x'5555 ;5555
         .dw 32000 + 1  ;large positive
         .dw -32000 + 1 ;small negative
         .dw 5 + - 3 * 2 /3 ;complex expression
         .dw 5 + (-3)*2/3   ;
         .dw lab2
         .dw lab2+1         ;test expression sync
         .code        ;extraneous switch to current segment
         .segment foo
         foo
         .org x'ff
         .db 1,2
         .code
         .db 3,4
         foo
lab2:    .db,5,6
         .set lab3,lab2
         .equ lab3,start
codetst:  LDN     1
          LDA     1
          LDX
          LDXA
          LDI     1
          STR     1
          STXD
          INC     1
          DEC     1
          IRX
          GLO     1
          PLO     1
          GHI     1
          PHI     1
          OR
          ORI     1
          XOR
          XRI     1
          AND
          ANI     1
          SHR
          SHRC
          RSHR
          SHL
          SHLC
          RSHL
          ADD
          ADI     1
          ADC
          ADCI    1
          SD
          SDI     1
          SDB
          SDBI    1
          SM
          SMI     1
testbr:   SMB
          SMBI    1
          BR      testbr
          NBR
          BZ      testbr
          BNZ     testbr
          BDF     testbr
          BPZ     testbr
          BGE     testbr
          BNF     testbr
          BM      testbr
          BL      testbr
          BQ      testbr
          BNQ     testbr
          B1      testbr
          BN1     testbr
          B2      testbr
          BN2     testbr
          B3      testbr
          BN3     testbr
          B4      testbr
          BN4     testbr
          LBR     testbr
          NLBR
          LBZ     testbr
          LBNZ    testbr
          LBDF    testbr
          LBNF    testbr
          LBQ     testbr
          LBNQ    testbr
          SKP
          LSKP
          LSZ
          LSNZ
          LSDF
          LSNF
          LSQ
          LSNQ
          LSIE
          IDL
          NOP
          SEP     1
          SEX     1
          SEQ
          REQ
          SAV
          MARK
          RET
          DIS
          OUT     1
          INP     1
          RLXA   r3
          RLDI   5,h'ff00
          RSXD   r0
          RNX    r1
          BCI synctest
          BXI synctest
          ETQ
          LDC
          GEC
          STPC
          DTC
          STM
          SCM1
          SCM2
          SPM1
          SPM2
          XIE
          XID
          CIE
          CID
          SCAL  5,synctest
          scal  rf,testbr
          SRET  rf
          dbnz  r1,synctest
          dadd
          dadi  h'99
          dadc
          daci x'01
          dsm
          dsmi h'21
          dsmb
          dsbi h'01
          dsav
synctest: .DIRECT   +h88 +w132
         .end  start

```
{% endraw %}

## MNEMTEST.ASM

{% raw %}
```
test1234:
test1235:
         .org 0
         adc #forward1
         adc #h'ff
         adc (100),y
         adc (100,x)
         adc 100
         adc 1000
         adc 1000,x
         adc 1000,y
         adc forward1,x
         adc h'ff,x
         and #forward1
         and #h'ff
         and (100),y
         and (100,x)
         and 100
         and 1000
         and 1000,x
         and 1000,y
         and forward1,x
         and h'ff,x
         asl 100
         asl 1000
         asl 1000,x
         asl a
         asl forward1,x
         asl h'ff,x
         bcc reltst
         bcs reltst
         beq reltst
         bit 1000
         bit forward1
         bit h'ff
reltst: bmi reltst
         bne reltst
         bpl reltst
         brk
         bvc reltst
         bvs reltst
         clc
         cld
         cli
         clv
         cmp #forward1
         cmp #h'ff
         cmp (100),y
         cmp (100,x)
         cmp 100
         cmp 1000
         cmp 1000,x
         cmp 1000,y
         cmp forward1,x
         cmp h'ff,x
         cpx #forward1
         cpx #h'ff
         cpx 100
         cpx 1000
         cpy #forward1
         cpy #h'ff
         cpy 100
         cpy 1000
         dec 100
         dec 1000
         dec 1000,x
         dec forward1,x
         dec h'ff,x
         dex
         dey
         eor #forward1
         eor #h'ff
         eor (100),y
         eor (100,x)
         eor 100
         eor 1000
         eor 1000,x
         eor 1000,y
         eor forward1,x
         eor h'ff,x
         inc 100
         inc 1000
         inc 1000,x
         inc forward1,x
         inc h'ff,x
         inx
         iny
         jmp (1000)
         jmp 100
         jmp 1000
         jsr 100
         jsr 1000
         lda #forward1
         lda #h'ff
         lda (100),y
         lda (100,x)
         lda 100
         lda 1000
         lda 1000,x
         lda 1000,y
         lda forward1,x
         lda h'ff,x
         ldx #forward1
         ldx #h'ff
         ldx 0,y
         ldx 100
         ldx 100,y
         ldx 1000
         ldx 1000,y
         ldy #forward1
         ldy #h'ff
         ldy 0,x
         ldy 100
         ldy 100,x
         ldy 1000
         ldy 1000,x
         lsr 100
         lsr 1000
         lsr 1000,x
         lsr a
         lsr forward1,x
         lsr h'ff,x
         nop
         ora #forward1
         ora #h'ff
         ora (100),y
         ora (100,x)
         ora 100
         ora 1000
         ora 1000,x
         ora 1000,y
         ora forward1,x
         ora h'ff,x
         pha
         php
         pla
         plp
         rol 100
         rol 1000
         rol 1000,x
         rol a
         rol forward1,x
         rol h'ff,x
         ror 100
         ror 1000
         ror 1000,x
         ror a
         ror forward1,x
         ror h'ff,x
         rti
         rts
         sbc #forward1
         sbc #h'ff
         sbc (100),y
         sbc (100,x)
         sbc 100
         sbc 1000
         sbc 1000,x
         sbc 1000,y
         sbc forward1,x
         sbc h'ff,x
         sec
         sed
         sei
         sta (100),y
         sta (100,x)
         sta 100
         sta 1000
         sta 1000,x
         sta 1000,y
         sta forward1,x
         sta h'ff,x
         stx 100
         stx 1000
         stx forward1,y
         stx h'ff,y
         sty 100
         sty 1000
         sty forward1,x
         sty h'ff,x
         tax
         tay
         tsx
         txa
         txs
         tya
synctst1:
         adc #forward1
         adc #forward2
         adc (forward3),y
         adc (forward3,x)
         adc forward3
         adc forward4
         adc forward4,x
         adc forward4,y
         adc forward1,x
         adc forward2,x
         and #forward1
         and #forward2
         and (forward3),y
         and (forward3,x)
         and forward3
         and forward4
         and forward4,x
         and forward4,y
         and forward1,x
         and forward2,x
         asl forward3
         asl forward4
         asl forward4,x
         asl a
         asl forward1,x
         asl forward2,x
         bcc reltst2
         bcs reltst2
         beq reltst2
         bit forward4
         bit forward1
         bit forward2
reltst2: bmi reltst2
         bne reltst2
         bpl reltst2
         bvc reltst2
         bvs reltst2
         clc
         cld
         cli
         clv
         cmp #forward1
         cmp #forward2
         cmp (forward3),y
         cmp (forward3,x)
         cmp forward3
         cmp forward4
         cmp forward4,x
         cmp forward4,y
         cmp forward1,x
         cmp forward2,x
         cpx #forward1
         cpx #forward2
         cpx forward3
         cpx forward4
         cpy #forward1
         cpy #forward2
         cpy forward3
         cpy forward4
         dec forward3
         dec forward4
         dec forward4,x
         dec forward1,x
         dec forward2,x
         dex
         dey
         eor #forward1
         eor #forward2
         eor (forward3),y
         eor (forward3,x)
         eor forward3
         eor forward4
         eor forward4,x
         eor forward4,y
         eor forward1,x
         eor forward2,x
         inc forward3
         inc forward4
         inc forward4,x
         inc forward1,x
         inc forward2,x
         inx
         iny
         jmp (forward4)
         jmp forward3
         jmp forward4
         jsr forward3
         jsr forward4
         lda #forward1
         lda #forward2
         lda (forward3),y
         lda (forward3,x)
         lda forward3
         lda forward4
         lda forward4,x
         lda forward4,y
         lda forward1,x
         lda forward2,x
         ldx #forward1
         ldx #forward2
         ldx 0,y
         ldx forward3
         ldx forward3,y
         ldx forward4
         ldx forward4,y
         lsr forward3
         lsr forward4
         lsr forward4,x
         lsr a
         lsr forward1,x
         lsr forward2,x
         nop
         ora #forward1
         ora #forward2
         ora (forward3),y
         ora (forward3,x)
         ora forward3
         ora forward4
         ora forward4,x
         ora forward4,y
         ora forward1,x
         ora forward2,x
         pha
         php
         pla
         plp
         rol forward3
         rol forward4
         rol forward4,x
         rol a
         rol forward1,x
         rol forward2,x
         ror forward3
         ror forward4
         ror forward4,x
         ror a
         ror forward1,x
         ror forward2,x
         rti
         rts
         sbc #forward1
         sbc #forward2
         sbc (forward3),y
         sbc (forward3,x)
         sbc forward3
         sbc forward4
         sbc forward4,x
         sbc forward4,y
         sbc forward1,x
         sbc forward2,x
         sec
         sed
         sei
         sta (forward3),y
         sta (forward3,x)
         sta forward3
         sta forward4
         sta forward4,x
         sta forward4,y
         sta forward1,x
         sta forward2,x
         stx forward3
         stx forward4
         stx forward1,y
         stx forward2,y
         sty forward3
         sty forward4
         sty forward1,x
         sty forward2,x
         tax
         tay
         tsx
         txa
         txs
         tya
synctst2:
        .equ forward1,h'00
        .equ forward2,h'ff
        .equ forward3,100
        .equ forward4,1000
        .end
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0776

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   6-16-87   2:26p
    GO       TXT      1268   7-06-90   2:42a
    FILE0776 TXT      2295   7-10-90   1:27p
    A18          <DIR>    
    A65          <DIR>    
            5 file(s)       3601 bytes

     Directory of A:\A18

    .            <DIR>    
    ..           <DIR>    
    A18      EXE     54240   1-29-90   7:32p
    BROCH    PC      27838   2-05-90  10:44a
    EXAMPLE  ASM      1982   3-15-87   9:39p
    LEVELI   DOC     23780   3-22-90   6:29a
    MNEMLEV1 ASM      3344  11-30-86   6:29p
    MNEMLEV2 ASM      4043   4-14-87   6:11p
    READI    ME       1465   2-07-90   3:39p
            9 file(s)     116692 bytes

     Directory of A:\A65

    .            <DIR>    
    ..           <DIR>    
    A65      EXE     57040   1-29-90   7:33p
    BROCH    PC      27838   2-05-90  10:44a
    EXAMPLE  ASM      2289  11-26-86   9:15p
    LEVELI   DOC     23780   3-22-90   6:29a
    MAC      ASM       448   8-23-88   4:27p
    MNEMTEST ASM      7782  10-07-88   6:07p
    READI    ME       1465   2-07-90   3:39p
            9 file(s)     120642 bytes

    Total files listed:
           23 file(s)     240935 bytes
                           69632 bytes free
