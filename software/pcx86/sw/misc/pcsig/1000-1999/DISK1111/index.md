---
layout: page
title: "PC-SIG Diskette Library (Disk #1111)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1111/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1111"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "A86/D86 ASSEMBLER/DEBUGGER"

    A86 is an excellent assembler that actually performs better and is
    easier to use than Microsoft's MASM 4.00.  It also assembles your
    programs a lot faster than MASM.  It lets you leave out all
    segmentation directives, if you want.  The segmentation default model is
    compatible with most high-level languages.  You can also access
    subroutines from your own libraries and, if you register, you
    receive the A86LIB tool for creating your own libraries more easily than
    with MASM.  You can use floating point operands in assembly-time
    expression arithmetic.  This is an A86 exclusive.
    
    The manual (included on the disk) is excellent.  You can learn 8086 or
    80286 Assembly language programming with it.  The debugger is great.  It
    has a floating point display window for use with the 8087 or 80287 that
    will knock your socks off.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## A00.DOC

{% raw %}
```
A86 assembler package   V3.22           January 25, 1990

The entire package is Copyright 1986--1990 Eric Isaacson.
All rights reserved.

PLEASE read Chapter 1 for legal terms and conditions, how to 
register for the package, and the overview of the assembler. 

This manual is huge!  A note about printing it occurs at
the bottom of the next page.

If you have never heard of "shareware", and you purchased 
this disk from XYZ Software House, that advertises great 
software for $5 per disk, you may now be asking the following

QUESTION: "What's going on here?  Have I already bought an 
  assembler, or what?" 

ANSWER: Well, no, not exactly.  You've bought a disk that has 
  great software on it; you haven't bought the software yet. 
  A86, like the vast majority of software offered by the $5-
  per-disk distribution houses, is free-distribution software 
  (also known as "shareware", or "user-supported software").  
  That means I retain the rights to A86, but I choose to let 
  people pass it around.  I have no business relationship 
  with any distribution houses in the U.S.; I don't get a 
  penny of the $5 (or whatever) you paid them for the disk 
  containing A86.  So I need and expect to be paid by you, 
  because I make my living out of making and supporting
  shareware products. 

  A few distribution houses do a pretty poor job of revealing 
  the shareware nature of the software they sell.  If you 
  thought you had purchased the software free and clear, you 
  might feel justified in being angry with them for having 
  misled you.  And you might look around for houses that do a 
  better job of informing the public.  But I hope you'll take 
  the time to consider everybody's role in the shareware 
  marketing scene; if you do, I think you'll conclude that 
  although you may have been misled, you haven't really been 
  cheated out of anything. 

  Shareware is great for authors like me, who have spent all 
  their years in their computer holes, learning to be great 
  programmers, and no time in business school learning 
  marketing and distribution techniques.  We simply cast our 
  programs to the winds.  They are distributed at practically 
  no cost to us.  That's why we can charge less than 
  the cost of "commercial" software. 
                                                        0-2
  Shareware is also great for customers like you.  You can 
  try out the software before paying for it.  You'll know 
  that a successful shareware product is good, because only 
  satisfied customers pay for it.  The existence of shareware 
  infuses healthy competition in the entire software market, 
  for both price and quality.  In the case of A86, I'm 
  utterly convinced that you'll never find a better value for 
  an assembler, anywhere. 

  Finally, let's consider the distribution houses.  They 
  provide a legitimate service, for which they charge a 
  reasonable price.  The best houses act as librarians, 
  evaluating and cataloguing software.  Most pay thousands of 
  dollars for advertising.  Their cut is far less than the 
  distributor's cut for "commercial" software (they prosper 
  because their volume is bigger).  Most customers for the 
  distribution houses are repeat customers, who are aware of, 
  and happy with, what they are getting.  If it weren't for 
  your XYZ House, you might never have heard of A86, or might 
  never have figured out where to obtain it. 

  So I hope you'll be happy with shareware, and actively 
  desire to support it.  You'll feel good about promoting a 
  healthy situation for everybody.  And you'll encourage the 
  best programmers in the world to keep writing for you, 
  instead of for the big corporations. 


Now that I've said that, let's move on to the package.   The 
A86 package consists of the four programs A86.COM, XREF.COM, 
EXMAC.COM, and FAKE.EXE; a collection of source, batch, and 
library files used by the demonstration contained in Chapter 
2, and a sequence of DOC files that, when printed out in 
order, make the manual.  Each chapter is a DOC file whose 
name is A??.DOC, where ?? runs from 00 though 17.  Exception: 
chapter 6 is split into A06A.DOC and A06B.DOC.  The second 
file is wider, and should be printed at 12 cpi if you can 
manage it.  The other files can print at 10cpi with margins--
You should set your printer to a 1-inch left margin, as the
DOC files do not attempt to provide a left margin for you.
(You can modify the PAGE.8 program to output the appropriate
codes!)

                                                        0-3
TABLE OF CONTENTS


CHAPTER 1   INTRODUCTION AND LEGAL TERMS

  Introduction                             1-1
  Legal Terms and Conditions               1-1
  Registration Benefits                    1-3
  Overview of A86                          1-4
  About the Author                         1-6
  How to Contact Me                        1-6


CHAPTER 2   A86 DEMONSTRATION

  Demonstration of A86 and Associated Tools                 2-1
  Assembling a Very Short Program: PAGE.COM                 2-1
  Demonstration of Error-Reporting                          2-1
  Assembling a Longer Program with Library Files: REV.COM   2-1
  Using XREF on a medium-sized program: TCOLS.COM           2-2
  Using EXMAC                                               2-2


CHAPTER 3   OPERATION AND REQUIREMENTS

  Creating Programs to Assemble             3-1
  Program Invocation                        3-1
  Assembler Switches                        3-2
  The A86 Environment Variable              3-4
  Using Standard Input as a Command Tail    3-5
  Strategies for Source File Maintenance    3-6
  System Requirements for A86               3-6


CHAPTER 4   ELEMENTS OF THE A86 LANGUAGE

  The A86 Language and the A86 Program               4-1
  General Categories of A86 Elements                 4-1
  Operand Typing and Code Generation                 4-3
  Registers                                          4-3
  Variables                                          4-3
  Labels                                             4-4
  Constants                                          4-4
  Generating Opcodes from General Purpose Mnemonics  4-4


CHAPTER 5   SOME EXCLUSIVE FEATURES OF A86

  The IF Statement                                 5-1
  Multiple operands to PUSH, POP, INC, DEC         5-1
  Conditional Return Instructions                  5-2
  A86 extensions to the MOV and XCHG instructions  5-2
  Local Symbols                                    5-3
  Operands to AAM and AAD Instructions             5-4
  Single-Operand Forms of the TEST Instruction     5-4
  Optimized LEA Instruction                        5-4
                                                           0-4
CHAPTER 6    THE 86 INSTRUCTION SET

  Effective Addresses                            6-1
  Segmentation and Effective Addresses           6-2
  Effective Use of Effective Addresses           6-3
  Encoding of Effective Addresses                6-4
  Table of Effective Address byte values         6-5
  How to Read the Instruction Set Chart          6-6
  The Instruction Set Chart                      6-8


CHAPTER 7   THE FLOATING-POINT PROCESSOR

  The 8087 and 287 Coprocessors          7-1
  Extra Coprocessor Support              7-2
  Emulating the 8087 by Software         7-2
  The Floating Point Stack               7-3
  Floating Point Initializations         7-3
  Built-In Constant Names                7-4
  Special Immediate FLD Form             7-4
  Floating Point Operand Types           7-5
  Operand Choices in A86                 7-6
  The 87 Instruction Set                 7-6


CHAPTER 8   NUMBERS AND EXPRESSIONS

  Numbers and Bases                      8-1
  The RADIX Directive                    8-2
  Floating-point Initializations         8-3
  Overview of Expressions                8-3
  Types of Expression Operands           8-4
  Numbers and Label Addresses            8-4
  Variables                              8-4
  Index Expressions                      8-4
  Arithmetic Operators                   8-4
  HIGH/LOW                               8-4
  BY                                     8-5
  Addition (combination)                 8-5
  Subtraction                            8-6
  Multiplication and Division            8-6
  Shifting Operators                     8-6
  Logical Operators                      8-7
  Boolean Negation Operator              8-7
  Relational Operators                   8-8
  String Comparison Operators            8-8
  Attribute Operators/Specifiers         8-9
  B,W,D,Q,T Memory Variable Specifiers   8-9
  SHORT and LONG operators               8-9
  OFFSET operator                       8-10
  NEAR Operator                         8-11
  Square Brackets Operator              8-11
  Colon Operator                        8-11
  ST Operator                           8-12
  TYPE Operator                         8-12
  THIS and $ Specifiers                 8-12
  Operator Precedence                   8-13
                                                         0-5
CHAPTER 9   DIRECTIVES IN A86

  Segments in A86                                 9-1
  CODE ENDS and DATA ENDS Statements              9-2
  The ORG Directive                               9-2
  The EVEN Directive                              9-3
  Data Allocation Using DB, DW, DD, DQ, and DT    9-3
  The STRUC Directive                             9-6
  Forward References                              9-6
  Forward References in Expressions               9-7
  The EQU Directive                               9-8
  Equates to Built-In Symbols                     9-9
  The NIL Prefix                                  9-9
  Interrupt Equates                               9-9
  Duplicate Definitions                           9-9
  The = Directive                                9-10
  The PROC Directive                             9-10
  The ENDP Directive                             9-11
  The LABEL Directive                            9-11


CHAPTER 10   RELOCATION AND LINKAGE

  .OBJ Production Made Easy                          10-1
  Overview of Relocation and Linkage                 10-3
  The NAME Directive                                 10-5
  The PUBLIC Directive                               10-5
  The EXTRN Directive                                10-6
  MAIN: The Starting Location for a Program          10-7
  The END Directive                                  10-7
  The SEGMENT Directive                              10-8
  DATA SEGMENT, STRUC and CODE SEGMENT Directives   10-11
  The ENDS Directive                                10-11
  Default Outer SEGMENT                             10-12
  The GROUP Directive                               10-12
  The SEG Operator                                  10-13
                                                            0-6
CHAPTER 11   MACROS AND CONDITIONAL ASSEMBLY

  Macro Facility                                     11-1
  Simple Macro Syntax                                11-1
  Formatting in macro definitions and calls          11-2
  Macro operand substitution                         11-2
  Quoted-string operands                             11-3
  Looping by operands in macros                      11-4
  The #L last operator and indefinite repeats        11-5
  Character-loops                                    11-5
  The "B"-before and "A"-after operators             11-6
  Multiple-increments within loops                   11-6
  Negative R-loops                                   11-7
  Nesting of loops in macros                         11-8
  Implied closing of loops                           11-8
  Passing Operands by Value                          11-8
  Passing Operand Size                               11-8
  Generating the Number of an Operand                11-9
  Parenthesized Operand Numbers                      11-9
  Exiting from the Middle of a Macro                11-10
  Local labels in macros                            11-10
  Debugging macro expansions                        11-11
  Conditional Assembly                              11-11
  Conditional Assembly and Macros                   11-13
  Simulating MASM's Conditional Assembly Constructs 11-14
  Conditional Assembly and the XREF Program         11-14
  Declaring Variables in the Assembler Invocation   11-14
  Null Invocation Variable Names                    11-15
  Changing Values of Invocation Variables           11-15


CHAPTER 12   COMPATIBILITY WITH OTHER ASSEMBLERS

  Conversion of MASM programs to A86                12-1
  Compatibility-symbols recognized by A86           12-4
  Conversion of A86 Programs to Intel/IBM/MASM      12-5


CHAPTER 13   ASSOCIATED TOOLS

  XREF Cross-reference and Symbol Listing Facility    13-1
  EXMAC Macro Expansion Tool                          13-2
  A86LIB Source File Library Tool                     13-3
  Using A86.LIB in A86 Assemblies                     13-4
  Environment Variable A86LIB                         13-5
  Forcing a Library Search                            13-5
  Listings with A86                                   13-5
  Mimicking Tool: FAKE.EXE                            13-7

CHAPTER 14   DESCRIPTIONS OF A86 ERROR MESSAGES

CHAPTER 15   RELEASE HISTORY OF A86

CHAPTER 16    RESERVED SYMBOLS IN THE A86 LANGUAGE

INDEX

```
{% endraw %}

## A01.DOC

{% raw %}
```
CHAPTER 1   INTRODUCTION AND LEGAL TERMS


Introduction

A86 is the finest assembler available, at any cost under any
terms, for the 86-family of microprocessors (IBM-PC, compatibles,
and not-so-compatibles).  In contrast to software firms who
attempt to restrict the distribution of their products via
protection-schemes, I encourage free distribution, and trust that
those who use my products will pay for them.

Please keep in mind the fundamental good spirit of
free-distribution software as you endure the following barrage of
legalities.  Then evaluate the outstanding value that the A86
package offers you.  I assure you that you will not be
disappointed.


Legal Terms and Conditions

This package is provided to you under the following conditions:

1. You may copy the A86Vxxx.ZIP and D86Vxxx.ZIP files, and give
   them to anyone who accepts these terms.  The copies you
   distribute must be complete and unmodified.  You do not have
   to be registered to distribute this package.

2. Even if you have not yet obtained full execution rights, you
   may execute the programs in this package, in order to evaluate
   them.  If you decide that any of this package is of use to
   you, you must become a registered user by sending $50 US ($52
   if you are outside North America) to:

      Eric Isaacson
      416 E. University Ave.
      Bloomington, IN 47401-4739

   For your convenience, I now accept Visa and MasterCard, by
   telephone.  My number is (812)339-1811.

   For the convenience of users in Great Britain, I have
   authorized the firm Shareware Marketing to collect
   registrations for me.  We'll try to keep the prices about the
   same whether you register through me or through them; it's
   your choice.  Their address is 87 High Street, Tonbridge, Kent
   TN9 1RX; telephone 0732 771344.  They'll send me a list of
   registered users at the end of every month, and I'll send an
   acknowledgement to each user when I get the list.  So if you
   haven't heard from me by the end of the month following your
   registration with them, please let me know.
                                                              1-2

   Your registration includes a single update diskette (5.25
   inch, double density), that also includes the A86LIB tool
   available to registered users only.  You may order further
   updates for $10 US, or $12 US if you are overseas.  Once you
   register for this package, you are registered for all future
   versions-- you have permanent rights to execute A86 on one
   computer.  As long as I'm in business, you can get the latest
   version for just the update fee.

   I have a combination offer for the A86 and D86 packages.
   Instead of $50 + $50 = $100, I charge $80 ($82 overseas) for
   both.

   I also offer a printed version of this manual, covering both
   A86 and D86. The manual is printed on sheets 8.5 inches high
   and 7 inches wide, with a plastic ring-style binding so the
   book can lay flat.  If you order with your registration the
   manual is an extra $10 to the U.S., $15 overseas. If you've
   already registered and now want the manual, add another $10
   ($12 overseas) for the update disk that the manual is bundled
   with.  There is a limit of one manual per computer registered
   (except you may reorder when there is a substantial revision
   to the manual).

   Indiana residents need to add sales tax.  At the current rate
   of 5%, the prices for Indiana residents are $52.50 for one
   product, $63 one product with manual, $84 both products,
   $94.50 both products with manual, $21 manual if already
   registered.

   Educational institutions and training facilities MUST be
   registered in order to use A86 in courses.  Contact me for
   special terms.

   Companies and government agencies MUST be registered in order
   to use A86 for their work.  Again, contact me for special
   terms.

3. This package may not be sold to anyone.  If the package is
   distributed this package on a diskette, any fees collected
   must be specified as materials/handling, and may not exceed
   $10 for the diskette.

4. The user is completely responsible for determining the fitness
   or usability of this package.  I will not be liable for any
   damages, of any kind, arising from any failure of any programs
   in this package to perform as expected.

5. Only permanent registered users can sell or distribute any
   programs that you have written or modified using this
   assembler.  If you do sell or distribute such programs, you
   must insure that your registered name (company or individual)
   will always be distributed with the program, so that I can
   verify your registration.  Any individual or company found to
   be violating these terms will be liable for triple
   registration fees for every machine they own capable of
   running my assembler (plus any legal and court costs).
                                                              1-3

   NOTE that the only computers that need to be registered are
   those executing the program A86.COM.  The programs produced by
   A86 are entirely yours-- there are no "run-time royalties".

6. A86 takes advantage of situations in which more than one set
   of opcodes can be generated for the same instruction.  (For
   example, MOV AX,BX can be generated using either an 89 or 8B
   opcode, by reversing fields in the following ModRM byte.  Both
   forms are absolutely identical in functionality and execution
   speed.)  A86 adopts an unusual mix of choices in such
   situations.  This creates a code-generation "footprint" that
   occupies no space in your program file, but will enable me to
   tell, and to demonstrate in a court of law, if a non-trivial
   object file has been produced by A86. The specification for
   this "footprint" is sufficiently obscure and complicated that
   it would be impossible to duplicate by accident.  I claim
   exclusive rights to the particular "footprint" I have chosen,
   and prohibit anyone from duplicating it.  This has at least
   two specific implications:

   a. Any assembler that duplicates the "footprint" is mine.  If
      it is not identified as mine and issued under these terms,
      then those who sell or distribute the assembler will be
      subject to prosecution.

   b. Any program marked with the "footprint" has been produced
      by my assembler.  It is subject to condition 5 above.


Registration Benefits

Thank you for enduring the legalities.  They are there to protect
me, and also to convince you that this is my business, from which
I expect to make a living.  I'll now return to a softer sell, to
try to make you want to register for my products.

There is a certain amount of ambiguity about when you're still
evaluating A86, and when you're really using A86 and should
register for it.  Some cases are clear (e.g., you're a school
using A86 to teach a course); but many are not.  In practical
reality, it up to you to decide: you are "on your honor". Also in
practical reality, most users who ought to register haven't, yet.
For most, it's not dishonesty but merely procrastination.  So I
have provided some incentives, to prod you into registering.

One incentive is the printed manual, which only registered users
can purchase. I haven't left anything out of the disk version of
the manual, but the printed version is formatted and bound much
more nicely than if you print it yourself.

Another incentive is the tool A86LIB.COM, that lets you create
libraries of source files, to be automatically searched by A86
whenever your program has undefined symbols.  This means you can
effectively add procedures of arbitrary power and complexity to
A86's language.
                                                              1-4

Also, when you register you're on my mailing list.  I'll
occasionally send you notices about what I've added to A86 and
D86 since the last notice.  When I bring out new products, you'll
hear about them.  (I'm working on a library of source files for
A86, and also a 386 assembler-debugger package.)

Finally, there are the intangible incentives.  You know you've
done the right thing.  You're letting me know that you appreciate
what I've done.  You're letting the world know that quality
software can succeed when distributed as shareware.


Overview of A86

A86 accepts assembly language source files, and transforms them
directly into either: (1) .COM files executable under MS-DOS,
starting at offset 0100 within a code segment; (2) .OBJ files
suitable for feeding to a linker; or (3) object files starting at
offset 0, suitable for copying to ROMs.  A86 is a full featured,
professional quality program. I designed A86 to be as closely
compatible to the standard Intel/IBM assembly language as
possible, given that I insisted upon making design and language
enhancements necessary to make A86 the best possible assembler.
Some of A86's most notable features are:

* A86 is blazingly fast-- 4 times as fast as MASM V5.1. In the
  best conditions (large program, 8MHz AT,  RAM drive) A86
  assembles at a rate of over a thousand lines per second.
  That's per second.  NOT per minute, per second.

* A86 is simple to use.  You can feed it a program containing
  just machine instructions, without the red tape (NAME, ASSUME,
  SEGMENT PARA PUBLIC, PROC, ENDP, END, PUBLIC, EXTRN, etc. etc.)
  necessary with other assemblers.  The output of A86 can be a
  .COM file, ready to execute immediately.  You don't have to go
  through a linker.  Or, if you want to go through a linker, A86
  will produce a correct .OBJ file even if no red tape directives
  are given-- the default settings are compatible with most
  high-level languages.  (If you have programs written for that
  other assembler containing the red tape directives, you may
  leave them in: A86 knows about them, and is programmed to act
  upon them when assembling .OBJ files, and ignore them if
  assembling .COM files.)

* In spite of its simplicity, A86 encourages modular programming,
  even in its .COM mode, with separately-developed source files.
  This is because A86 assembles multiple source files in its
  invocation line; and because A86 assembles source files faster
  than other people's linkers can link their object files.  You
  get all the advantages of relocation/linkage systems (building
  up libraries of reliable program modules that you can piece
  together), without the disadvantages (excessive,
  time-and-source-code-wasting, confusing red tape).
                                                              1-5

* A86 has ample capacity for really large programming projects.
  Its symbol table capacity is approximately 1500 10-letter
  symbols, plus room for 8K bytes of compressed macro definition
  text.  (10 letters is an average symbol length; A86 recognizes
  up to 127 letters in a symbol.) Plus, A86's generic local label
  facility effectively doubles your symbol table capacity.

* A86 has language extension features that, once you start using,
  you'll never want to do without.  These include multiple
  operands to PUSH and POP; conditional returns; MOV from one
  segment register to another; assembly time assertion checking;
  based structures; and IF (flag) (statement).

* A86's macro processor is the best, achieving an optimal balance
  between ease of use and raw power.  Its looping and text
  concatenation abilities let you define sophisticated macros,
  whose calls look just like the machine instructions that
  surround them; without the clumsy invocation syntax required by
  other macro processors of A86's power.

* A86 provides clear, English error messages, given right at the
  point in the source code where A86 detected the error.  The
  messages are actually inserted into your source file, where you
  can read them and correct your code at the same time.  You can
  remove the messages yourself, or A86 will remove them for you
  when it reassembles the file.  (Fear not: your original source
  is preserved in x.OLD if you want it.  Or you can disable this
  feature and send error messages to a .ERR file.)

* A86 provides a full complement of assembly time expression
  arithmetic operators, compatible with Intel/IBM assemblers. A86
  also provides 4-function floating point arithmetic in assembly
  time expressions used for floating point initializations (an
  A86-exclusive feature).

* A86 assembles the floating point instruction set of the
  8087/287/387/IIT coprocessors, and the extended instruction set
  of the 186/286/NEC series, including the NEC-unique
  instructions.

* A86 has a built-in source file library feature.  Any undefined
  symbols in your program are automatically searched for in a
  special library file A86.LIB, and the associated source files
  are automatically assembled.  This makes access to library
  routines as effortless as it is in the "C" programming
  language.  A sample A86.LIB file is included in the shareware
  version of the package.  Only registered users should have the
  tool A86LIB, with which you can create your own library files.

* A86 works with an associated symbolic debugger, D86, to make
  the finest development environment available for the PC.  See
  the D86 package for the details of its features.
                                                              1-6

About the Author

I am a full-time shareware author.  I have worked with Intel
microprocessors since the early days of the 8080.  As an employee
of Intel, I was a part of the two-man team that implemented the
first ASM86 assembler. Having worked with all the processors of
the 86 family from the beginning, I know as much as anyone about
their machine-language architecture.  I have written a book, The
80386/387 Architecture, by Morse, Isaacson, and Albert, published
by Wiley and Sons, ISBN 0-471-85352-6.  Look for it in your
bookstore (or I'll send you a copy for $20, which is $4.95 off
the list price.)

A86 and D86 themselves are extremely mature, solid programs.
They have been in existence since 1984, running first under my
own, proprietary operating system; then later under the Xenix
operating system on Altos computers, used by myself and my
clients.  I have been making a decent living from A86 and D86 for
some time now, and with your much-appreciated support, I will
continue to improve my products, and enhance them with new,
related offerings.


How to Contact Me

I have no plans to move from my present location at least through
the millennium.  So you can write to:

    Eric Isaacson Software
    416 East University Ave.
    Bloomington, IN 47401-4739

or call (812)339-1811.

Sorry, I can't guarantee to return everybody's long distance
calls.  If you'd like to be SURE I'll get back to you, please
invite me to call you back collect, or tell me to charge the cost
of the call to your credit card.

I also accept BBS mail at PC-Link Central, (812)855-7252, which I
try to check into daily.  Type J 3 when you get on that system,
to reach my conference.  Another BBS which I check into about
twice a week is Indiana On-Line, at (812)332-7227-- type J A86 to
reach my conference on that BBS.  I also check into Compuserve
every 10 days or so-- my ID number there is 71520,74.

PLEASE contact me if you find bugs in my programs; I'll fix them!
I accept bug reports from anyone, registered or non-registered,
no questions asked.  It's very frustrating to hear about people
telling each other about bugs, and not telling me.  I still await
Greg Wettstein's bug list.


```
{% endraw %}

## A02.DOC

{% raw %}
```
CHAPTER 2   A86 DEMONSTRATION


To give you a feeling for the operation of A86, I have provided
some source files for you to assemble.  You should make sure your
current directory (or a PATH directory) is the one that contains
this assembler package, and perform the following operations to
see the assembler package in action:


Assembling a Very Short Program: PAGE.COM

First, let's assemble a very short program; a program that sends
an ASCII form feed (hex 0C) to your line printer.  The source for
this program is PAGE.8; type the command TYPE PAGE.8 to see how
simple this program is: note the lack of red tape directives
(NAME, ASSUME, END, PUBLIC, etc.) required by other assemblers.
Now type the command A86 PAGE.8 to assemble the file.  If you are
working on a hard disk, make sure you don't blink your eyes after
typing the command; you'll miss the assembly, because A86 is
FAST, FAST, FAST.

You now have a file PAGE.COM, which is an executable program.  If
you now type the command PAGE with your printer turned on, and if
your printer recognizes the form feed character, then it should
advance to the next page.  You have just created a useful tool.
By altering the DB line in the source code that contains the form
feed, you can create tools to output other control sequences to
your printer.


Demonstration of Error Reporting

Now type the command ERDEMO, invoking the batch file ERDEMO.BAT.
This will invoke an assembly of a source file PAGE.BAD (copied
from PAGE.BL so you can run this demo again), into which I have
deliberately placed an erroneous statement, XCHG BL,AX.  Note
that A86 tells you that it has inserted error messages into
PAGE.BAD, and saved the original source in PAGE.OLD.

Now use your favorite text editor to edit PAGE.BAD.  You can use
your editor's string search function to find a tilde symbol,
which brackets all A86 error messages.  Without altering the
messages, change the BL to BX, and exit your editor.  Now type
the command A86 PAGE.BAD to reassemble the file.  You should get
a successful assembly.  Now type the command TYPE PAGE.BAD, and
note that A86 has removed the error messages for you.  Wasn't
that easy?


Assembling a Longer Program with Library Files: REV.COM

Let's see A86 assemble a program with four source files. Type the
command A86 REV.8 to the console.  A86 will assemble the REV.8
file you specified, see that there are undefined symbols in the
program, then assemble the files LINES.8, MSDOS.8, and USAGE.8,
listed in the library file A86.LIB, which I created using the
tool A86LIB available only to registered users.
                                                              2-2

REV is a tool that exists in the Unix operating system.  It is a
"filter"; that is, it reads from standard input, transforms the
input, and outputs the transformed data to standard output.  The
transformation that REV performs is to reverse all lines, so that
they come out backwards.

The usefulness of REV is in conjunction with other tools. In
particular, suppose you have a list of words that you wanted
sorted according to their last letters, not their first.  You run
the list through REV, to get the words spelled backwards.  Then
you run that output through SORT, to sort them that way. Finally,
you run the output of SORT through REV again, to get the words
spelled forwards again, but still sorted according to their
backwards spellings.

The normal usage of REV is, therefore, in conjunction with
redirection of standard input and output; e.g. REV <infile
>outfile.  If you want to just see if REV works, type REV, the
enter key, your first name, the enter key, your last name, the
enter key, the F6 key, and the enter key.  You'll get your first
and last name spelled backwards.


Using XREF on a medium-sized program: TCOLS.COM

Type the command MTCOLS to execute the batch file MTCOLS.BAT.
Observe that the file assembles the file TCOLS.8 into the program
TCOLS.COM.  Then the batch file runs the XREF program, to produce
a cross reference listing TCOLS.XRF of the program.

Type the command TCOLS.  The TCOLS program you just assembled
will execute, and notice that you have given it no parameters. It
thus gives you a self-documenting message.  Note that towards the
end of the message is an example showing how TCOLS can be used to
print XREF listings.  You can do so now by turning your printer
on and typing an appropriate command; e.g., TCOLS <TCOLS.XRF 4 6
80 66 >PRN for 4 columns, skip 6 lines between pages, which are
80 columns by 66 lines.


Using EXMAC

Type the command MEXP, invoking the batch file MEXP.BAT, which
executes the command EXMAC TCOLS <TCOLS.8 >TCOLS.EXP to create a
version of TCOLS with macros expanded.  Look at the file
TCOLS.EXP, and note that the DEFAULT macro defined there has had
all of its calls expanded.  Type the command A86 TCOLS.EXP and
note that it assembles into TCOLS.COM just as the original file
does.

Type the command EXMAC TCOLS to enter interactive mode.  The
program pauses, waiting for you to type in lines.  Type a garbage
line, e.g. "abc", and see the line echoed back to you.  Now type
the macro call: DEFAULT FOO,7 and see the macro expanded
interactively.  Type Control-Z followed by the enter key to exit
the EXMAC program.  (On most IBM-compatible computers you can
type F6 to get a control-Z.)


```
{% endraw %}

## A03.DOC

{% raw %}
```
CHAPTER 3   OPERATION AND REQUIREMENTS


Creating Programs to Assemble

Before you invoke A86 you must have an assembly-language source
program to assemble.  A source program is an ASCII text file,
created with the text editor of your choice.  The editor must
produce a file that is free of internal records known only to the
editor.  Some of the fancier word processors will require you to
use a "plain text" mode to insure that the file is free of such
records.

This manual will fully explain to you the correct syntax of an
A86 program, but it is not intended to teach you about the
86-family instruction set, or about assembly-language interfacing
to your computer or your operating system.

The instruction set charts in Chapters 6 and 7 give concise,
one-line descriptions of each instruction, but they don't go into
any detail about instruction usage.  For such detail, I recommend
either one of the two books The 8086/8088 Primer by Stephen P.
Morse, or The 80286 Architecture by Morse and Albert.  The latter
book covers the 8087/287 and is recommended if you have a
floating-point coprocessor, or if you wish to explore the
expanded capabilities of the 286.  (My 386 book is the latest in
a series in which those two books are predecessors.)

To learn how to make system calls to input from keyboard or disk,
output to screen, printer or disk, etc., you need a book that
covers the MS-DOS operating system and the BIOS for the IBM-PC,
or whatever computer you have if it's non-IBM-BIOS-compatible (if
you don't know whether or not it's compatible, it probably is).
I used Peter Norton's Programmer's Guide to the IBM-PC.  If
you're less familiar with assembly language, you will probably
want his Assembly Language Guide to the IBM-PC instead.


Program Invocation

To invoke A86, you must provide a program invocation line, either
typed to the console when the DOS command prompt appears, or
included in a batch file.  The program invocation line consists
of the following:

1. The program name A86.

2. The names of the source files you want to assemble.  You may
   use the wild card delimiters * and ? if you wish, to denote a
   group of source files to be assembled.  A86 will sort all
   matching names into alphabetical order for each wild card
   specification; so the files will be assembled in the same
   order even if they get jumbled up within a directory.

   A86 identifies the end of the source file names when it sees a
   name with no extension, or a name with the default object
   extension (COM, BIN or OBJ, as described shortly).  Sorry, you
   cannot have a source file with the default object extension.
                                                              3-2

3. You may optionally provide the word TO, to separate the source
   file names from the output file names.

4. The name of the output program.  If you do not provide an
   extension, A86 will assume one of the following extensions:

   a. .OBJ if you invoked the +O switch, for linkable object file
      production.

   b. .BIN if there is no +O switch, but there is an ORG 0 in
      your program.

   c. .COM otherwise.

   If you want your program file to have no extension, you end
   the file name with a period.

   You have the option to omit both the program file name and the
   symbol table file name from the invocation.  If you do so, A86
   will output the program source.COM (or source.OBJ or
   source.BIN) and the symbol table source.SYM; where "source" is
   a name derived from the list of source files, according to the
   rules described in the section "Strategies for Source File
   Maintenance" later in this chapter.

5. The name of the symbol table file.  You do not need to give
   the .SYM extension: A86 will produce a file with extension
   .SYM in any case.  In earlier versions of A86 I had allowed
   other extensions to be specified, but this meant that by
   carelessly permuting names on the command line, you could
   destroy a source file-- not good!

   You can omit the name of the symbol table file. If you do so,
   A86 will use the same root as the output program name.  If you
   desire no symbol table file, specify the +S switch in your
   invocation line or A86 environment variable (described later
   in this chapter).


Assembler Switches

In addition to input and output file names, you may intersperse
assembler switch settings anywhere after the A86 program name.
They are all acted upon immediately, no matter where they are on
the command line.  Some of the switches are discussed in more
detail elsewhere; I'll summarize them here:

+C  causes the assembler to output symbol names with lower case
    letters to its OBJ and SYM files.  The case of letters is
    still ignored during assembly.  I output the name as it
    appears in the last PUBLIC or EXTRN directive containing it;
    if there is no such directive, I use the first occurrence of
    the symbol to control which letters are output lower case.
    (+C duplicates Microsoft MASM's /mx switch.)
                                                              3-3

+c  causes the assembler to consider the case of letters within
    all non-built-in symbols as significant both during assembly
    and for output.  Thus, for example, you can define different
    symbols X and x.  (+c duplicates MASM's /ml switch.)

+D  causes the default base for numeric constants to be decimal,
    even if the constants have leading zeroes.

-D  causes the default base to be hexadecimal if there is a
    leading zero; decimal otherwise.

+E  causes the error-message-augmented source file to be written
    to yourname.ERR within the current directory, in all cases.
    With +E, A86 will never rewrite your original source file.

-E  causes A86 to insert error messages into your source file,
    whenever the file is in the current directory.  If the file
    is not in the current directory, A86 write an ERR file no
    matter what the E switch setting is.

+F  causes A86 to generate the 287 form of floating point
    instructions (no implicit FWAIT bytes are generated before
    the instructions).  This mode can also be specified in the
    program with the .287 directive.

+f  causes A86 to support emulation of the 8087.  When A86 sees a
    floating point instruction, it generates external references
    to be resolved by the standard emulation library (provided by
    Microsoft, Borland, etc.).  When you LINK your program to the
    emulation library, the floating point instructions are
    emulated by software.  NOTE you must be assembling to a
    linkable OBJ file for this mode to have effect; otherwise, +f
    is ignored.

-F  causes emulation and default-287 to be disabled.  You'll
    still get 287 generation if there is a .287 directive in your
    program.

+Ln  causes A86 to implement one or more of the following minor
    options for code-generation.  All these options enhance MASM
    compatibility.  The first three do so at the expense of
    program size.  The number n should be the sum of the numbers
    for each of the options selected.  For example, +L10 will
    select the options numbered 2 and 8.

    1 causes A86 to generate a longer (3-byte) instruction form
        for an unconditional JMP instruction to a forward
        reference local label, e.g. JMP >L1.  A86 normally
        assumes that since it's a local label, it will be nearby
        and the short, 2-byte form will work.  With this option
        your code will usually be longer than necessary, but
        you'll be spared having to occasionally go back and code
        an explicit JMP LONG >L1.

    2 causes A86 to refrain from optimizing the LEA instruction.
        Without this option A86 will replace an LEA with a
        shorter, equivalent MOV when it sees the chance.
                                                              3-4

    4 causes A86 to generate a slightly more inefficient internal
        format for memory references within an OBJ file.  The
        Power C compiler's MIX utility requires the inefficient
        form. The makers of Power C refused to support their
        customers on this by enhancing MIX, so I am forced to
        offer this option.

    8 causes A86 to assume that all ambiguous forward reference
        operands to instructions other than jumps or calls refer
        to memory variables and not offsets or constant values.
        You can override this on a one-by-one basis, with the
        OFFSET operator.

-L  causes A86 to revert to its default for all the above
options.

+O  causes A86 to produce a linkable .OBJ file when the output
    file name extension is not explicitly given.

-O  causes A86 to produce an executable .COM file when the output
    file name extension is not explicitly given.

+S  suppresses the creation of the symbol table (.SYM) file in
    normal (no errors) assembly.  This is overridden if you give
    an explicit symbols file name in the invocation line.

-S  causes the symbol table file to be created in all cases.

+X  causes A86 to require that undefined names be explicitly
    declared with an EXTRN when A86 is producing a linkable .OBJ
    file.  The X switch has no effect when A86 is making a .COM
    file.

-X  causes A86 to quietly assume that all undefined names are
    valid external references.

The default setting for all the switches is "minus".  Multiple
switches can be specified with a single sign; e.g. +OX is the
same as +O+X.



The A86 Environment Variable

To allow you to customize A86, the assembler examines the MS-DOS
environment variable named "A86" when it is invoked.  If there is
such a variable, its contents are inserted before the invocation
command tail, as if you had typed them yourself.

For example, if you execute the command SET A86=+OX while in DOS
(typically in the AUTOEXEC.BAT file run when the computer is
started), then the O and X switches will be "plus", unless
overridden with a "minus" setting in the command line.
                                                              3-5

You may also include one or more file names in the A86
environment variable.  Those files will always be assembled
first, before the files you specify on the command line.  This
allows you to set up a library of macro definitions, which will
always be automatically available to your programs.  Thus, for
example, the DOS command  SET A86=C:\A86\MACDEF.8 +OX  will cause
both the O and X switches to default ON, but will also cause the
file MACDEF.8 of subdirectory A86 of drive C to always be
assembled.


Using Standard Input as a Command Tail

The following feature is a bit advanced.  If you're not familiar
with the practice of redirecting standard input, you may safely
skip this section.

A86 can also be configured to take its command arguments from
standard input, in addition to the invocation command tail or the
A86 environment variable.  This allows A86 to be used in those
menu-driven systems that don't generate command tails for
programs.  It also allows other programs to create lists of files
to be assembled, then "pipe" the list to A86.

Here's how the feature works: when the command argument A86 is an
ampersand &, A86 will prompt for standard input.  If the
ampersand is seen but there are other things following it, the
ampersand is ignored.

For example, you can place a list of file names and switch
settings into a file called FILELIST.  You can then invoke the
assembler via

A86 <FILELIST &

which will cause the contents of the FILELIST file to be used as
a command line.

You may place an ampersand at the end of your A86 environment
variable.  If you do so, then A86 will prompt for file names
whenever it is invoked without any command arguments (you type
A86 followed immediately by the ENTER key to the MS-DOS prompt).
This is the mode used if you have a menu system that can't
generate an invocation command tail.

Note: when you redirect standard input so that it comes from a
file, A86 will read all the lines of the file (up to a limit of
1023 bytes), and substitute spaces for the line breaks.  Thus you
may give the file names on individual lines, for readability.
However, if the feature is invoked manually (no redirection), so
that you are typing in the line after the prompt, A86 will take
the first line only.  You need to give all your switches and
files on that one line.
                                                              3-6

Strategies for Source File Maintenance

A86 encourages modular programming, by letting you break your
source into separate files, with complete impunity.  A86 has no
concern whatsoever for file breaks-- it treats the sequence of
files as a single source code stream.

You should consider one or more of the following strategies,
which I have adopted in my source file management:

1. I name all my A86 source files with the same extension, which
   is found on no other files. The particular extension I have
   chosen is ".8". I did not choose the more common .ASM, because
   I have a few source files designed for MSDOS's assembler.  If
   you don't like .8, I would suggest .A86.

2. I keep a separate subdirectory on my hard disk for each
   multi-source-file A86 program I have.  Then the simple command
   "A86 *.8" performs the assembly for the current directory's
   program.

3. I exploit the fact that A86 expands wild cards into
   alphabetical order.  Whenever I want a source file to be
   assembled first (e.g., when it contains variable
   declarations), I append a decimal digit to the start of the
   file name: 0 for the first file, 1 for the second, etc., for
   however many files that need to be explicitly ordered.  If a
   file needs to come last, I append a "Z" to the start of the
   file name.

   To accommodate this strategy, I have programmed A86 to a
   somewhat complicated algorithm for determining the default
   output file name.  I use the name of the first source file;
   but I truncate the first character if it is a decimal digit.
   However, you may have a general-purpose file that must come
   first; so I have provided the following exception: if you have
   a source file whose name begins with the digit "9", that name
   (without the 9) is used.  If you don't like this, you can
   always explicitly give the program name you want: "A86 *.8
   MYPROG".


System Requirements for A86

A86 requires MS-DOS V2.00 or later.  No BIOS or lower-level calls
are made by A86, so A86 should run on any MS-DOS machine.  Please
let me know if you find this not to be the case.

A86 itself is a small program, and it is fairly flexible about
the memory it uses.  You can assemble small files with only 32K
bytes of memory beyond the program itself, which in the current
version is under 22K bytes-- a total of 54K bytes beyond the
operating system. The more memory you have, the more capacity A86
has, in symbol table size, source file size, and output file
size.  If it can, A86 will use up to 256K bytes of memory.
                                                              3-7

As I just noted, in a small-memory system A86 severely limits the
size of source files.  But remember that this doesn't hurt you
badly: you can split up source files with impunity.  A86
assembles a sequence of files as if it were a single source
stream (similar to the INCLUDE facility of other assemblers).


```
{% endraw %}

## A04.DOC

{% raw %}
```
CHAPTER 4   ELEMENTS OF THE A86 LANGUAGE

This chapter begins the description of the A86 language.  It's a
bit more tutorial in nature than the rest of the manual.  I'll
start by describing the elementary building blocks of the
language.


The A86 Language and the A86 Program

First, let's establish what we mean when we say A86.  On one
hand, A86 is the name for my assembly language for the Intel 86
family of (IBM-PC and compatible) computers. Statements written
in this language are used to specify machine instructions for the
86 family and to allocate memory space for program data.  On the
other hand, A86 is the name for a program called an assembler,
that translates these human readable statements into a machine
readable form. The input to the assembler is a source file (or a
list of source files) containing assembly language statements.
The output of the assembler is a file containing binary program
code that can either be run as a program on the PC, or combined
with other modules (using a linker) to make a program.


General Categories of A86 Elements

The statements in an A86 source file can be classified in three
general categories: instruction statements, data allocation
statements, and assembler directives.  An instruction statement
uses an easily remembered name (a mnemonic) and possibly one or
more operands to specify a machine instruction to be generated. A
data allocation statement reserves, and optionally initializes,
memory space for program data.  An assembler directive is a
statement that gives special instructions to the assembler.
Directives are unlike the instruction and data allocation
statements in that they do not specify the actual contents of
memory.  Examples of the three types of A86 statements are given
below.  These are provided to give you a general idea of what the
different kinds of statements look like.

Instruction Statements

MOV AX,BX
CALL SORT_PROCEDURE
ADD AL,7

Data Allocation Statements

A_VARIABLE DW 0
DB 'HELLO'

Assembler Directives

CODE SEGMENT
ITEM_COUNT EQU 5
                                                              4-2

The statements in an A86 source file are made up of keywords,
identifiers, numbers, strings, special characters, and comments.
A keyword is a symbol that has special meaning to the assembler,
such as an instruction mnemonic (MOV, CALL) or some other
reserved word in the assembly language (DB, SEGMENT, EQU).
Identifiers are programmer-defined symbols, used to represent
such things as variables, labels in the code, and numerical
constants.  Identifiers may contain letters, numbers, and the
characters _, @, $, and ?, but must begin with a letter, _, or @.
The identifier name is considered unique up to 127 characters,
but it can be of any length (up to 255 characters).   Examples of
identifiers are: COUNT, L1, and A_BYTE.

Numbers in A86 may be expressed as decimal, hexadecimal, octal,
or binary.  These must begin with a decimal digit and, except in
the case of a decimal or hexadecimal number, must end with "x"
followed by a letter identifying the base of the number.  A
number without an identifying base is hexadecimal if the first
digit is 0; decimal if the first digit is 1 through 9.  Examples
of A86 numbers are: 123 (decimal), 0ABC (hexadecimal), 1776xQ
(octal), and 10100110xB (binary).

Strings are characters enclosed in single quotes.  Examples of
strings are: '1st string' and 'SIGN-ON MESSAGE, V1.0'.  The
single quote is one of many special characters used in the
assembly language.  Others, run together in a list, are: ! $ ? ;
: = , [ ] . + - ( ) * / > ".  The space and tab characters are
also special characters, used as separators in the assembly
language.

For compatibility with other assemblers, I now also accept double
quotes for strings.

A comment is a sequence of characters used for program
documentation only; it is ignored by the assembler.  Comments
begin with a semicolon (;) and run to the end of the line on
which they are started.  Examples of lines with comments are
shown below:

; This entire line is a comment.
MOV AX,BX  ; This is a comment next to an instruction statement.

Alternatively, for compatibility with other assemblers, I provide
the COMMENT directive.  The next non-blank character after
COMMENT is a delimiter to a comment that can run across many
lines; all text is ignored, until a second instance of the
delimiter is seen.  For example,

COMMENT 'This comment
runs across two lines'
                                                              4-3

I don't like COMMENT, because I think it's very dangerous.  If,
for example, you have two COMMENTs in your program, and you
forget to close the first one, the assembler will happily ignore
all source code between the comments.  If that source code does
not happen to contain any labels referenced elsewhere, the error
may not be detected until your program blows up.  For multiline
comments, I urge you to simply start each line with a semicolon.

Statements in the A86 are line oriented, which means that
statements may not be broken across line boundaries.  A86 source
lines may be entered in a free form fashion; that is, without
regard to the column orientation of the symbols and special
characters.

PLEASE NOTE: Because an A86 line is free formatted, there is no
need for you to put the operands to your instructions in a
separate column.  You organize things into columns when you want
to visually scan down the column; and you practically never scan
operands separate from their opcodes.  The only reason that 99%
of the assembly-language programs out there in the world have
operands in a separate column is that some IBM assembler written
back in 1953 required it.  It makes no sense to have operands in
a separate column, so STOP DOING IT!


Operand Typing and Code Generation

A86 is a strongly typed assembly language.   What this means is
that operands to instructions (registers, variables, labels,
constants) have a type attribute associated with them which tells
the assembler something about them.  For example, the operand 4
has type number, which tells the assembler that it is a numerical
constant, rather than a register or an address in the code or
data.  The following discussion explains the types associated
with instruction operands and how this type information is used
to generate particular machine opcodes from general purpose
instruction mnemonics.

Registers

The 8086 has 8 general purpose word (two-byte) registers:
AX,BX,CX,DX,SI,DI,BP, and SP.  The first four of those registers
are subdivided into 8 general purpose one-byte registers
AH,AL,BH,BL,CH,CL,DH, and DL.  There are also 4 16-bit segment
registers CS,DS,ES, and SS, used for addressing memory; and the
implicit instruction-pointer register (referred to as IP,
although "IP" is not part of the A86 assembly language).

Variables

A variable is a unit of program data with a symbolic name,
residing at a specific location in 8086 memory.  A variable is
given a type at the time it is defined, which indicates the
number of bytes associated with its symbol.  Variables defined
with a DB statement are given type BYTE (one byte), and those
defined with the DW statement are given type WORD (two bytes).
Examples:
                                                              4-4

BYTE_VAR DB 0   ; A byte variable.
WORD_VAR DW 0   ; A word variable.

Labels

A label is a symbol referring to a location in the program code.
It is defined as an identifier, followed by a colon (:), used to
represent the location of a particular instruction or data
structure.  Such a label may be on a line by itself or it may
immediately precede an instruction statement (on the same line).
In the following example, LABEL_1 and LABEL_2 are both labels for
the MOV AL,BL instruction.

LABEL_1:
LABEL_2: MOV AL,BL

In the A86 assembly language, labels have a type identical to
that of constants.  Thus, the instruction MOV BX,LABEL_2 is
accepted, and the code to move the immediate constant address of
LABEL2 into BX, is generated.

IMPORTANT: you must understand the distinction between a label
and a variable, because you may generate a different instruction
than you intended if you confuse them.  For example, if you
declare  X: DW ?, the colon following the X means that X is a
label; the instruction MOV SI,X moves the immediate constant
address of X into the SI register.  On the other hand, if you
declare X DW ?, with no colon, then X is a word variable; the
same instruction MOV SI,X now does something different: it loads
the run-time value of the memory word X into the SI register.

Constants

A constant is a numerical value computed from an assembly-time
expression.  For example, 123 and 3 + 2 - 1 both represent
constants.  A constant differs from an a variable in that it
specifies a pure number, known by the assembler before the
program is run, rather than a number fetched from memory when the
program is running.


Generating Opcodes from General Purpose Mnemonics

My A86 assembly language is modeled after Intel's ASM86 language,
which uses general purpose mnemonics to represent classes of
machine instructions rather than having a different mnemonic for
each opcode.  For example, the MOV mnemonic is used for all of
the following: move byte register to byte register, load word
register from memory, load byte register with constant, move word
register to memory, move immediate value to word register, move
immediate value to memory, etc.  This feature saves you from
having to distinguish "move" from "load," "move constant" from
"move memory," "move byte" from "move word," etc.
                                                              4-5

Because the same general purpose mnemonic can apply to several
different machine opcodes, A86 uses the type information
associated with an instruction's operands in determining the
particular opcode to produce.  The type information associated
with instruction operands is also used to discover programmer
errors, such as attempting to move a word register to a byte
register.

The examples that follow illustrate the use of operand types in
generating machine opcodes and discovering programmer errors.  In
each of the examples, the MOV instruction produces a different
8086 opcode, or an error.  The symbols used in the examples are
assumed to be defined as follows: BVAR is a byte variable, WVAR
is a word variable, and LAB is a label.  As you examine these MOV
instructions, notice that, in each case, the operand on the right
is considered to be the source and the operand on the left is the
destination.  This is a general rule that applies to all
two-operand instruction statements.

MOV AX,BX     ; (8B) Move word register to word register.
MOV AX,BL     ; ERROR: Type conflict (word,byte).
MOV CX,5      ; (B9) Move constant to word register.
MOV BVAR,AL   ; (A0) Move AL register to byte in memory.
MOV AL,WVAR   ; ERROR: Type conflict (byte,word).
MOV LAB,5     ; ERROR: Can't use label/constant as dest. to MOV.
MOV WVAR,SI   ; (89) Move word register to word in memory.
MOV BL,1024   ; ERROR: Constant is too large to fit in a byte.


```
{% endraw %}

## A05.DOC

{% raw %}
```
CHAPTER 5   SOME EXCLUSIVE FEATURES OF A86


The IF Statement

As a "nudge" in the direction of structured programming, A86
offers the IF statement.  Suppose you want to conditionally skip
around just one instruction.  Ordinarily, this would require, for
example:

  JNZ >L1    ; skip the following move if NZ
  MOV AX,BX  ; make this move only if Z
L1:          ; this label exists only for the above skip

You may replace the above code with the single line:

  IF Z MOV AX,BX

The above line generates exactly the same code as the previous 3
lines-- a conditional jump of the opposite condition, around the
statement given in the tail of the IF statement.  The statement
can be a macro call, giving you the opportunity to skip something
more complicated.

You may use any condition that would follow the "J" in a
conditional jump instruction, except CXZ, which does not have a
reverse condition.  The assembler interprets the condition by
appending a "J" to the beginning of the condition; so that the
symbols "C", "NC", "Z", "NZ", etc. are not reserved by the
assembler, and can be defined in other contexts.


Multiple operands to PUSH, POP, INC, DEC

A86 will accept any number of register operands for the
instructions PUSH, POP, INC, and DEC; it will generate the
appropriate machine instruction for each operand.  For example,
the statement PUSH AX,BX is the same as the two statements PUSH
AX and PUSH BX.

A numeric operand appearing in an INC or DEC statement will cause
the previous INC(s) or DEC(s) to be propagated that number of
times.  For example, the statement INC AX,4 will generate 4 INC
AX instructions.  The statement DEC AL,BX,2 will generate DEC AL,
DEC BX, DEC AL, DEC BX.  Sorry, numeric operands are not allowed
if any of the operands affected was a forward reference or
relocatable quantity; e.g., INC FOO,2 where FOO is undefined.  In
most such cases, you'll want to code the more efficient ADD FOO,2
anyway.
                                                              5-2

Conditional Return Instructions

Programmers accustomed to the conditional return instructions of
the 8080/Z80 will appreciate the following feature: A86 allows
the operand to a conditional jump instruction to be one of the
three RET instructions RET, RETF, or IRET.  The assembler will
find a nearby return instruction of the indicated flavor, and use
that as the target for the conditional jump.  For example, JZ RET
is the replacement for the 8080's RZ return-if-zero instruction.
In other 8086 assembly languages, you have to find the nearby
instruction yourself, attach a label to it, and use that label.
Note that it does not suffice to attach a label to a single RET
instruction and use that label throughout the program: the range
of conditional jumps is only 128 bytes in either direction.

What happens if A86 does not find a nearby return instruction? In
that case, A86 issues an error, "02 Jump > 128", for the next
matching return instruction in the program.  If there is no
subsequent return instruction, the return mnemonic will appear as
an undefined symbol at the end of the program.   In either case,
you correct the problem by inserting a free-standing return
instruction at some nearby point in the program, where it will
not affect the existing code (typically following an
unconditional JMP instruction).  If there is no good place to
insert a return instruction, you can always replace the "Jcond
RET" with an "IF cond RET".


A86 extensions to the MOV and XCHG instructions

There are a number of MOV and XCHG instructions available in A86
that are not a part of the machine instruction set.

First, moves between segment registers, and of immediate
constants into segment registers are allowed.  For example, if
you code MOV ES,DS , the assembler will generate a PUSH DS
followed by a POP ES; which will effect the move that you
intended.   If you code MOV DS,0 , the assembler will generate
PUSH AX; MOV AX,0; MOV DS,AX; POP AX.  This is mainly a
convenience for D86 users to load segment registers manually.

Second, MOV allows 3 operands.  A statement MOV x,y,z is
equivalent to the two statements MOV y,z followed by MOV x,y.
Sorry, but segment overrides are not allowed in conjunction with
3-operand MOVs.  The override preceding the MOV is ambiguous in
its meaning; and overrides within operands cannot be handled
correctly by A86.  You'll have to code two MOV instructions if
you want either or both to have a segment override.

Third, A86 accepts a MOV of a word-sized memory operand into
another word-sized memory operand.  A86 handles this the same way
it handles a MOV of segment registers: it generates a PUSH of the
source followed by a POP of the destination.
                                                              5-3

Finally, A86 allows the XCHG of a segment register (except CS)
with any other word-sized quantity, as well as the XCHG of two
word-sized memory quantities.  If there is no machine instruction
available for XCHG a,b, then A86 generates PUSH a followed by MOV
a,b followed by POP b.


Local Symbols

If you examine most assembly language program symbol tables, you
will find that the symbols can be partitioned into two levels of
significance.   About half the symbols are the names of
procedures and variables having global significance.  If the
names of these symbols are chosen intelligently and carefully,
the program's readability improves drastically. (They usually
aren't chosen well, most often because the assembler restricts
symbols to 6 letters, or because the programmer's habits are
influenced by such assemblers.)

The other half of the symbols in a program have a much lower,
local significance.  They are only place markers used to
implement small loops and local branching (e.g., "skip the next 2
instructions if the Z-flag is set").  Assigning full-blown names
to these symbols reduces the readability of your program in two
ways:  First, it is harder to recognize local jumps for what they
are-- they are usually the assembly language equivalent of high
level language constructs like IF statements and WHILE loops.

Second, it is harder to follow the global, significant symbols
because they are buried in a sea of the place marker symbols in
the symbol table.

A86 solves this problem with local symbols.  If a symbol in your
program consists of a single letter followed by one or more
decimal digits (L3, X123, Y37, etc.), then the symbol is a local
symbol.  Local symbols do not appear in the A86 XREF
cross-reference listing.  They can also be redefined to something
completely different later in the program.  Local symbols can be
of any type: labels, memory variables, etc.

Because local symbols can be redefined, you must take care to
specify which one you are referring to in your program.  If your
reference is a forward reference (the label occurs further down
in the program from the reference), then the reference must be
preceded by a ">".  For example,

L2:
  MOVSB
  INC BX
  LOOP L2    ; lack of ">" means L2 is above this statement
  .
  .
  JNZ >L2    ; ">" indicates L2 is below this statement
  .
  JMP >L2    ; JMP L2 is disallowed here: cannot overlap ranges
  .
L2:
                                                              5-4

I recommend that you assign all your local labels the names L0
through L9.  If your program is so complex that it needs more
than 10 place holders in any one stretch of code, then that
stretch needs to be rewritten.



Operands to AAM and AAD Instructions

Those of you who have examined 86 family opcodes with an eagle
eye will have noticed a somewhat spurious "0A" opcode generated
after every AAM or AAD instruction.  The opcode is there to
provide the constant divisor or multiplicand for the instruction.
Believe it or not, there wasn't enough room in the microcode of
the original 8086 to hold this constant!  Although Intel has
never announced the generality of AAM and AAD, it is there: you
can substitute any other constant for 0A (decimal 10), and that
constant will be used.  A86 supports this by letting you give a
constant byte-sized operand to AAM or AAD.  Particularly useful
are the instructions AAM 16, which unpacks AL into nibbles AH and
AL; and AAD 16, which reverses the process, packing nibbles AH
and AL into AL.

WARNING: A couple of my users point out to me that the AAD
instruction with a general operand won't work on the NEC V20 and
V30 chips.  The operand is assumed to be 10 no matter what it
really is.  Since a large number of PC "speed up" kits involve
switching to NEC chips, this will be seen on many PC's.  You
should not use AAD with an operand if you want your program to
run on everybody's machine.  Too bad.  AAM works fine, though.


Single-Operand Forms of the TEST Instruction

A86 allows the TEST instruction to have a single operand, to set
the flags according to the value of the operand.  If the operand
is a register, A86 generates a TEST of the register with itself.
If the operand is a memory quantity, A86 generates a TEST of the
memory with the constant -1 (i.e., the quantity will be ANDed
with an all 1's constant).  For example, instead of TEST DL,DL,
you can code simply TEST DL.  Instead of TEST WVAR,0FFFF, you can
code simply TEST WVAR.


Optimized LEA Instruction

Many assembly-language programmers are in the habit of using, for
example, LEA SI,MEMLOC instead of the equivalent MOV SI,OFFSET
MEMLOC to load an immediate value that represents the pointer to
a memory location.  However, the LEA instruction form generates
one more byte of object code than the MOV form. A86 recognizes
this situation and generates the more-efficient MOV instruction
when it can.  This also applies to register moves: MOV AX,BX
instead of LEA AX,[BX].
                                                              5-5

I've gotten a little flak from some users about this feature.
They claim it violates my policy against "behind your back"
actions.  But I feel that this feature is completely equivalent
to code optimizations in other situations: the short JMP form
instead of the equivalent near JMP; a byte operand to ADD SI,4
instead of a word operand; the one-byte XCHG AX,BX instead of the
general XCHG rw,ew form; etc, etc, etc. In situations where there
is absolute functional equivalence between forms, A86 tries to
generate the most efficient form.  But for those who are not
convinced, I offer the +L2 switch, described in Chapter 3.

Some users have also gotten the mistaken impression, from reading
Intel's confusing specs, that the longer LEA is sometimes faster
than the shorter MOV.  This is never the case-- those users are
reading the clock counts for the memory-fetch forms of MOV, not
the register-only or immediate-value forms.  If you don't believe
it, try timing 1000 consecutive LEA's in a loop that executes
50000 times, vs. a similar loop with the equivalent MOV.


```
{% endraw %}

## A06A.DOC

{% raw %}
```
CHAPTER 6    THE 86 INSTRUCTION SET


Effective Addresses

Most memory data accessing in the 86 family is accomplished via
the mechanism of the effective address.  Wherever an effective
address specifier "eb", "ew" or "ed" appears in the list of 8086
instructions, you may use a wide variety of actual operands in
that instruction.  These include general registers, memory
variables, and a variety of indexed memory quantities.

GENERAL REGISTERS: Wherever an "ew" appears, you can use any of
the 16-bit registers AX,BX,CX,DX,SI,DI,SP, or BP.  Wherever an
"eb" appears, you can use any of the 8-bit registers
AL,BL,CL,DL,AH,BH,CH, or DH.  For example, the "ADD ew,rw" form
subsumes the 16-bit register-to-register adds; for example, ADD
AX,BX; ADD SI,BP; ADD SP,AX.

MEMORY VARIABLES: Wherever an "ew" appears, you can use a word
memory variable.  Wherever an "eb" appears, you can use a byte
memory variable.  Variables are typically declared in the DATA
segment, using a DW declaration for a word variable, or a DB
declaration for a byte variable.  For example, you can declare
variables:

     DATA_PTR  DW ?
     ESC_CHAR  DB ?

Later, you can load or store these variables:

     MOV SI,DATA_PTR    ; load DATA_PTR into SI for use
     LODSW              ; fetch the word pointed to by DATA_PTR
     MOV DATA_PTR,SI    ; store the value incremented by the LODSW
     MOV BL,ESC_CHAR    ; load the byte variable ESC_CHAR

Alternatively, you can address specific unnamed memory locations
by enclosing the location value in square brackets; for example,

     MOV AL,[02000]     ; load contents of location 02000 into AL

Note that A86 discerned from context (loading into AL) that a
BYTE at 02000 was intended.  Sometimes this is impossible, and
you must specify byte or word:

     INC B[02000]       ; increment the byte at location 02000
     MOV W[02000],0     ; set the WORD at location 02000 to zero
                                                              6-2

INDEXED MEMORY: The 86 supports the use of certain registers as
base pointers and index registers into memory.  BX and BP are the
base registers; SI and DI are the index registers.  You may
combine at most one base register, at most one index register,
and a constant number into a run time pointer that determines the
location of the effective address memory to be used in the
instruction.  These can be given explicitly, by enclosing the
index registers in brackets:

     MOV AX,[BX]
     MOV CX,W[SI+17]
     MOV AX,[BX+SI+5]
     MOV AX,[BX][SI]5   ; another way to write the same instr.

Or, indexing can be accomplished by declaring variables in a
based structure (see the STRUC directive in Chapter 9):

     STRUC [BP]        ; NOTE: based structures are unique to A86!
       BP_SAVE   DW ?  ; BP_SAVE is a word at [BP]
       RET_ADDR  DW ?  ; RET_ADDR is a word at [BP+2]
       PARM1     DW ?  ; PARM1 is a word at [BP+4]
       PARM2     DW ?  ; PARM2 is a word at [BP+6]
     ENDS
     INC PARM1         ; equivalent to INC W[BP+4]

Finally, indexing can be done by mixing explicit components with
declared ones:

     TABLE    DB  4,2,1,3,5
     MOV AL,TABLE[BX]        ; load byte number BX of TABLE


Segmentation and Effective Addresses

The 86 family has four segment registers, CS, DS, ES, and SS,
used to address memory.  Each segment register points to 64K
bytes of memory within the 1-megabyte memory space of the 86.
(The start of the 64K is calculated by multiplying the segment
register value by 16; i.e., by shifting the value left by one hex
digit.)  If your program's code, data and stack areas can all fit
in the same 64K bytes, you can leave all the segment registers
set to the same value.  In that case, you won't have to think
about segment registers--no matter which one is used to address
memory, you'll still get the same 64K.  If your program needs
more than 64K, you must point one or more segment registers to
other parts of the memory space.  In this case, you must take
care that your memory references use the segment registers you
intended.

Each effective address memory access has a default segment
register, to be used if you do not explicitly specify which
segment register you wish.  For most effective addresses, the
default segment register is DS.  The exceptions are those
effective addresses that use the BP register for indexing.  All
BP-indexed memory references have a default of SS.  (This is
because BP is intended to be used for addressing local variables,
stored on the stack.)
                                                              6-3

If you wish your memory access to use a different segment
register, you provide a segment override byte before the
instruction containing the effective address operand.  In the A86
language, you code the override by giving the name of the segment
register you wish before the instruction mnemonic.  For example,
suppose you want to load the AL register with the memory byte
pointed to by BX.  If you code MOV AL,[BX], the DS register will
be used to determine which 64K segment BX is pointing to.  If you
want the byte to come from the CS-segment instead, you code CS
MOV AL,[BX].  Be aware that the segment override byte has effect
only upon the single instruction that follows it.  If you have a
sequence of instructions requiring overrides, you must give an
override byte before every instruction in the sequence.  (In that
case, you may wish to consider changing the value of the default
segment register for the duration of the sequence.)

NOTE: This method for providing segment overrides is unique to
the A86 assembler!  The assemblers provided by Intel and IBM
(MS-DOS) attempt to figure out segment allocation for you, and
plug in segment override bytes "behind your back".  In order to
do this, those assemblers require you to inform them which
variables and structures are pointed to by which segment
registers.  That is what the ASSUME directive in those assemblers
is all about.  I wrote Intel's first 86 assembler, ASM86, so I
have been watching the situation since day one.  Over the years,
I have concluded that the ASSUME mechanism creates far, far more
confusion that it solves.  So I scrapped it; and the result is an
assembler with far less red tape.  But if your program needs more
than 64K, you do have to manage those segment registers yourself;
so take care!


Effective Use of Effective Addresses

Remember that all of the common instructions of the 86 family
allow effective addresses as operands.  (The only major functions
that don't are the AL/AX specific ones: multiply, divide, and
input/output).  This means that you don't have to funnel many
through AL or AX just to do something with them.  You can perform
all the common arithmetic, PUSH/POP, and MOVes from any general
register to any general register; from any memory location
(indexed if you like) to any register; and (this is most often
overlooked) from any register TO memory.  The only thing you
can't do in general is memory-to-memory.  Among the more common
operations that inexperienced 86 programmers overlook are:

   * setting memory variables to immediate values

   * testing memory variables, and comparing them to constants

   * preserving memory variables by PUSHing and POPping them

   * incrementing and decrementing memory variables

   * adding into memory variables
                                                              6-4

Encoding of Effective Addresses

Unless you are concerned with the nitty-gritty details of 86
instruction encoding, you don't need to read this section.

Every instruction with an effective address has an encoded byte,
known as the effective address byte, following the 1-byte opcode
for the instruction. (For obscure reasons, Intel calls this byte
the ModRM byte.)  If the effective address is a memory variable,
or an indexed memory location with a non-zero constant offset,
then the effective address byte will be immediately followed by
the offset amount.  Amounts in the range -128 to +127 are given
by a single signed byte, denoted by "d8" in the table below.
Amounts requiring a 2-byte representation are denoted by "d16" in
the table below.  As with all 16-bit memory quantities in the 86
family, the word is stored with the least significant byte FIRST.

The following table of effective address byte values is organized
into 32 rows and 8 columns.  The 32 rows give the possible values
for the effective address operand: 8 registers and 24 memory
indexing modes.  A 25th indexing mode, [BP] with zero
displacement, has been pre-empted by the simple-memory-variable
case.  If you code [BP] with no displacement, you will get
[BP]+d8, with a d8-value of zero.

The 8 columns of the table reflect further information given by
the effective address byte.  Usually, this is the identity of the
other (always a register) operand of a 2-operand instruction.
Those instructions are identified by a "/r" following the opcode
byte in the instruction list.  Sometimes, the information given
supplements the opcode byte in identifying the instruction
itself.  Those instructions are identified by a "/" followed by a
digit from 0 through 7.  The digit tells which of the 8 columns
you should use to find the effective address byte.

For example, suppose you have a perverse wish to know the precise
bytes encoded by the instruction SUB B[BX+17],100.  This
instruction subtracts an immediate quantity, 100, from an
effective address quantity, B[BX+17].  By consulting the
instruction list, you find the general form SUB eb,ib.  The
opcode bytes given there are 80 /5 ib.  The "/5" denotes an
effective address byte, whose value will be taken from column 5
of the following table.  The offset 17 decimal, which is 11 hex,
will fit in a single "d8" byte, so we take our value from the
"[BX] + d8" row.  The table tells us that the effective address
byte is 6F.  Immediately following the 6F is the offset, 11 hex.
Following that is the ib-value of 100 decimal, which is 64 hex.
So the bytes generated by SUB B[BX+17],100 are 80 6F 11 64.


                                                              6-5

Table of Effective Address byte values

s  =     ES   CS   SS   DS
rb =     AL   CL   DL   BL   AH   CH   DH   BH
rw =     AX   CX   DX   BX   SP   BP   SI   DI
digit=    0    1    2    3    4    5    6    7
                                                  Effective
EA byte                                           address:
values:  00   08   10   18   20   28   30   38    [BX + SI]
         01   09   11   19   21   29   31   39    [BX + DI]
         02   0A   12   1A   22   2A   32   3A    [BP + SI]
         03   0B   13   1B   23   2B   33   3B    [BP + DI]

         04   0C   14   1C   24   2C   34   3C    [SI]
         05   0D   15   1D   25   2D   35   3D    [DI]
         06   0E   16   1E   26   2E   36   3E    d16 (simple var)
         07   0F   17   1F   27   2F   37   3F    [BX]

         40   48   50   58   60   68   70   78    [BX + SI] + d8
         41   49   51   59   61   69   71   79    [BX + DI] + d8
         42   4A   52   5A   62   6A   72   7A    [BP + SI] + d8
         43   4B   53   5B   63   6B   73   7B    [BP + DI] + d8

         44   4C   54   5C   64   6C   74   7C    [SI] + d8
         45   4D   55   5D   65   6D   75   7D    [DI] + d8
         46   4E   56   5E   66   6E   76   7E    [BP] + d8
         47   4F   57   5F   67   6F   77   7F    [BX] + d8

         80   88   90   98   A0   A8   B0   B8    [BX + SI] + d16
         81   89   91   99   A1   A9   B1   B9    [BX + DI] + d16
         82   8A   92   9A   A2   AA   B2   BA    [BP + SI] + d16
         83   8B   93   9B   A3   AB   B3   BB    [BP + DI] + d16

         84   8C   94   9C   A4   AC   B4   BC    [SI] + d16
         85   8D   95   9D   A5   AD   B5   BD    [DI] + d16
         86   8E   96   9E   A6   AE   B6   BE    [BP] + d16
         87   8F   97   9F   A7   AF   B7   BF    [BX] + d16

         C0   C8   D0   D8   E0   E8   F0   F8    ew=AX   eb=AL
         C1   C9   D1   D9   E1   E9   F1   F9    ew=CX   eb=CL
         C2   CA   D2   DA   E2   EA   F2   FA    ew=DX   eb=DL
         C3   CB   D3   DB   E3   EB   F3   FB    ew=BX   eb=BL

         C4   CC   D4   DC   E4   EC   F4   FC    ew=SP   eb=AH
         C5   CD   D5   DD   E5   ED   F5   FD    ew=BP   eb=CH
         C6   CE   D6   DE   E6   EE   F6   FE    ew=SI   eb=DH
         C7   CF   D7   DF   E7   EF   F7   FF    ew=DI   eb=BH

d8 denotes an 8-bit displacement following the EA byte, to be
sign-extended and added to the index.

d16 denotes a 16-bit displacement following the EA byte, to be
added to the index.

Default segment register is SS for effective addresses containing
a BP index; DS for other memory effective addresses.
                                                              6-6





How to Read the Instruction Set Chart

The following chart summarizes the machine instructions you can
program with A86.  In order to use the chart, you need to learn
the meanings of the specifiers (each given by 2 lower case
letters) that follow most of the instruction mnemonics.  Each
specifier indicates the type of operand (register byte, immediate
word, etc.) that follows the mnemonic to produce the given
opcodes.


"c"  means the operand is a code label, pointing to a part of the
    program to be jumped to or called.  A86 will also accept a
    constant offset in this place (or a constant segment-offset
    pair in the case of "cd").  "cb" is a label within about 128
    bytes (in either direction) of the current location.  "cw" is
    a label within the same code segment as this program; "cd" is
    a pair of constants separated by a colon-- the segment value
    to the left of the colon, and the offset to the right.  Note
    that in both the cb and cw cases, the object code generated
    is the offset from the location following the current
    instruction, not the absolute location of the label operand.
    In some assemblers (most notably for the Z-80 processor) you
    have to code this offset explicitly by putting "$-" before
    every relative jump operand in your source code.  You do NOT
    need to, and should not do so with A86.

"e"  means the operand is an Effective Address.  The concept of
    an Effective Address is central to the 86 machine
    architecture, and thus to 86 assembly language programming.
    It is described in detail at the start of this chapter.  We
    summarize here by saying that an Effective Address is either
    a general purpose register, a memory variable, or an indexed
    memory quantity.  For example, the instruction "ADD rb,eb"
    includes the instructions: ADD AL,BL, and ADD CH,BYTEVAR, and
    ADD DL,B[BX+17].

"i"  means the operand is an immediate constant, provided as part
    of the instruction itself.  "ib" is a byte-sized constant;
    "iw" is a constant occupying a full 16-bit word.  The operand
    can also be a label, defined with a colon.  In that case, the
    immediate constant which is the location of the label is
    used.  Examples:  "MOV rw,iw" includes the instructions: MOV
    AX,17, or MOV SI,VAR_ARRAY, where "VAR_ARRAY:" appears
    somewhere in the program, defined with a colon.  NOTE that if
    VAR_ARRAY were defined without a colon, e.g., "VAR_ARRAY DW
    1,2,3", then "MOV SI,VAR_ARRAY" would be a "MOV rw,ew" NOT a
    "MOV rw,iw".  The MOV would move the contents of memory at
    VAR_ARRAY (in this case 1) into SI, instead of the location
    of the memory. To load the location, you can code "MOV
    SI,OFFSET VAR_ARRAY".
                                                              6-7

"m"  means a memory variable or an indexed memory quantity; i.e.,
    any Effective Address EXCEPT a register.

"r"  means the operand is a general purpose register.  The 8 "rb"
    registers are AL,BL,CL,DL,AH,BH,CH,DH; the 8 "rw" registers
    are AX,BX,CX,DX,SI,DI,BP,SP.


WARNING: Instruction forms marked with "*" by the mnemonic are
part of the extended 186/286/NEC instruction set. Instructions
marked with "#" are unique to the NEC processors.  These
instructions will NOT work on the 8088 of the IBM-PC; nor will
they work on the 8086; nor will the NEC instructions work on the
186 or 286. If you wish your programs to run on all PC's, do not
use these instructions!


```
{% endraw %}

## A06B.DOC

{% raw %}
```
                                                              6-8

Opcodes     Instruction    Description

37          AAA            ASCII adjust AL (carry into AH) after addition
D5 0A       AAD            ASCII adjust before division (AX = 10*AH + AL)
D4 0A       AAM            ASCII adjust after multiply (AL/10: AH=Quo AL=Rem)
3F          AAS            ASCII adjust AL (borrow from AH) after subtraction
14 ib       ADC AL,ib      Add with carry immediate byte into AL
15 iw       ADC AX,iw      Add with carry immediate word into AX
80 /2 ib    ADC eb,ib      Add with carry immediate byte into EA byte
10 /r       ADC eb,rb      Add with carry byte register into EA byte
83 /2 ib    ADC ew,ib      Add with carry immediate byte into EA word
81 /2 iw    ADC ew,iw      Add with carry immediate word into EA word
11 /r       ADC ew,rw      Add with carry word register into EA word
12 /r       ADC rb,eb      Add with carry EA byte into byte register
13 /r       ADC rw,ew      Add with carry EA word into word register

04 ib       ADD AL,ib      Add immediate byte into AL
05 iw       ADD AX,iw      Add immediate word into AX
80 /0 ib    ADD eb,ib      Add immediate byte into EA byte
00 /r       ADD eb,rb      Add byte register into EA byte
83 /0 ib    ADD ew,ib      Add immediate byte into EA word
81 /0 iw    ADD ew,iw      Add immediate word into EA word
01 /r       ADD ew,rw      Add word register into EA word
02 /r       ADD rb,eb      Add EA byte into byte register
03 /r       ADD rw,ew      Add EA word into word register
0F 20      #ADD4S          Add CL nibbles BCD from DS:SI into ES:DI (CL even,NZ)

24 ib       AND AL,ib      Logical-AND immediate byte into AL
25 iw       AND AX,iw      Logical-AND immediate word into AX
80 /4 ib    AND eb,ib      Logical-AND immediate byte into EA byte
20 /r       AND eb,rb      Logical-AND byte register into EA byte
83 /4 ib    AND ew,ib      Logical-AND immediate byte into EA word
81 /4 iw    AND ew,iw      Logical-AND immediate word into EA word
21 /r       AND ew,rw      Logical-AND word register into EA word
22 /r       AND rb,eb      Logical-AND EA byte into byte register
23 /r       AND rw,ew      Logical-AND EA word into word register
63 /r      *ARPL ew,rw     Adjust RPL of EA word not smaller than RPL of rw

62 /r      *BOUND rw,md    INT 5 if rw not between [md] and [md+2] inclusive
9A cd       CALL cd        Call far segment, immediate 4-byte address
E8 cw       CALL cw        Call near, offset relative to next instruction
FF /3       CALL ed        Call far segment, address at EA doubleword
FF /2       CALL ew        Call near, offset absolute at EA word
0F FF ib   #CALL80 ib      Call 8080-emulation code at INT number ib
98          CBW            Convert byte into word (AH = top bit of AL)
F8          CLC            Clear carry flag
FC          CLD            Clear direction flag so SI and DI will increment
FA          CLI            Clear interrupt enable flag; interrupts disabled
                                                              6-9

0F 12/0    #CLRBIT eb,CL   Clear bit CL of eb
0F 13/0    #CLRBIT ew,CL   Clear bit CL of ew
0F 1A/0 ib #CLRBIT eb,ib   Clear bit ib of eb
0F 1B/0 ib #CLRBIT ew,ib   Clear bit ib of ew
0F 06      *CLTS           Clear task switched flag
F5          CMC            Complement carry flag
3C ib       CMP AL,ib      Subtract immediate byte from AL for flags only
3D iw       CMP AX,iw      Subtract immediate word from AX for flags only
80 /7 ib    CMP eb,ib      Subtract immediate byte from EA byte for flags only
38 /r       CMP eb,rb      Subtract byte register from EA byte for flags only
83 /7 ib    CMP ew,ib      Subtract immediate byte from EA word for flags only
81 /7 iw    CMP ew,iw      Subtract immediate word from EA word for flags only
39 /r       CMP ew,rw      Subtract word register from EA word for flags only
3A /r       CMP rb,eb      Subtract EA byte from byte register for flags only
3B /r       CMP rw,ew      Subtract EA word from word register for flags only

0F 26      #CMP4S          Compare CL nibbles CD at DS:SI from ES:DI (CL even,NZ)
A6          CMPS mb,mb     Compare bytes ES:[DI] from [SI], advance SI and DI
A7          CMPS mw,mw     Compare words ES:[DI] from [SI], advance SI and DI
A6          CMPSB          Compare bytes ES:[DI] from DS:[SI], advance SI and DI
A7          CMPSW          Compare words ES:[DI] from DS:[SI], advance SI and DI
99          CWD            Convert word to doubleword (DX = top bit of AX)

27          DAA            Decimal adjust AL after addition
2F          DAS            Decimal adjust AL after subtraction
FE /1       DEC eb         Decrement EA byte by 1
FF /1       DEC ew         Decrement EA word by 1
48+rw       DEC rw         Decrement word register by 1
F6 /6       DIV eb         Unsigned divide AX by EA byte (AL=Quo AH=Rem)
F7 /6       DIV ew         Unsigned divide DXAX by EA word (AX=Quo DX=Rem)
C8 iw 00   *ENTER iw,0     Make stack frame, iw bytes local storage, 0 levels
C8 iw 01   *ENTER iw,1     Make stack frame, iw bytes local storage, 1 level
C8 iw ib   *ENTER iw,ib    Make stack frame, iw bytes local storage, ib levels
            Fany           Floating point set is in Chapter 7
F4          HLT            Halt

F6 /7       IDIV eb        Signed divide AX by EA byte (AL=Quo AH=Rem)
F7 /7       IDIV ew        Signed divide DXAX by EA word (AX=Quo DX=Rem)
F6 /5       IMUL eb        Signed multiply (AX = AL * EA byte)
F7 /5       IMUL ew        Signed multiply (DXAX = AX * EA word)
6B /r ib   *IMUL rw,ib     Signed multiply immediate byte into word register
69 /r iw   *IMUL rw,iw     Signed multiply immediate word into word register
69 /r iw   *IMUL rw,ew,iw  Signed multiply (rw = EA word * immediate word)
6B /r ib   *IMUL rw,ew,ib  Signed multiply (rw = EA word * immediate byte)

E4 ib       IN AL,ib       Input byte from immediate port into AL
EC          IN AL,DX       Input byte from port DX into AL
E5 ib       IN AX,ib       Input word from immediate port into AX
ED          IN AX,DX       Input word from port DX into AX

FE /0       INC eb         Increment EA byte by 1
FF /0       INC ew         Increment EA word by 1
40+rw       INC rw         Increment word register by 1
6C         *INS eb,DX      Input byte from port DX into [DI]
6D         *INS ew,DX      Input word from port DX into [DI]
6C         *INSB           Input byte from port DX into ES:[DI]
6D         *INSW           Input word from port DX into ES:[DI]
                                                             6-10

CC          INT 3          Interrupt 3 (trap to debugger) (far call, with flags
CD ib       INT ib         Interrupt numbered by immediate byte     pushed first)
CE          INTO           Interrupt 4 if overflow flag is 1
CF          IRET           Interrupt return (far return and pop flags)

77 cb       JA cb          Jump short if above (CF=0 and ZF=0)    above=UNSIGNED
73 cb       JAE cb         Jump short if above or equal (CF=0)
72 cb       JB cb          Jump short if below (CF=1)             below=UNSIGNED
76 cb       JBE cb         Jump short if below or equal (CF=1 or ZF=1)
72 cb       JC cb          Jump short if carry (CF=1)
E3 cb       JCXZ cb        Jump short if CX register is zero
74 cb       JE cb          Jump short if equal (ZF=1)
7F cb       JG cb          Jump short if greater (ZF=0 and SF=OF)  greater=SIGNED
7D cb       JGE cb         Jump short if greater or equal (SF=OF)
7C cb       JL cb          Jump short if less (SF/=OF)                less=SIGNED
7E cb       JLE cb         Jump short if less or equal (ZF=1 or SF/=OF)

EB cb       JMP cb         Jump short (signed byte relative to next instruction)
EA cd       JMP cd         Jump far (4-byte immediate address)
E9 cw       JMP cw         Jump near (word offset relative to next instruction)
FF /4       JMP ew         Jump near to EA word (absolute offset)
FF /5       JMP md         Jump far (4-byte address in memory doubleword)

76 cb       JNA cb         Jump short if not above (CF=1 or ZF=1)
72 cb       JNAE cb        Jump short if not above or equal (CF=1)
73 cb       JNB cb         Jump short if not below (CF=0)
77 cb       JNBE cb        Jump short if not below or equal (CF=0 and ZF=0)
73 cb       JNC cb         Jump short if not carry (CF=0)
75 cb       JNE cb         Jump short if not equal (ZF=0)
7E cb       JNG cb         Jump short if not greater (ZF=1 or SF/=OF)
7C cb       JNGE cb        Jump short if not greater or equal (SF/=OF)
7D cb       JNL cb         Jump short if not less (SF=OF)
7F cb       JNLE cb        Jump short if not less or equal (ZF=0 and SF=OF)

71 cb       JNO cb         Jump short if not overflow (OF=0)
7B cb       JNP cb         Jump short if not parity (PF=0)
79 cb       JNS cb         Jump short if not sign (SF=0)
75 cb       JNZ cb         Jump short if not zero (ZF=0)
70 cb       JO cb          Jump short if overflow (OF=1)
7A cb       JP cb          Jump short if parity (PF=1)
7A cb       JPE cb         Jump short if parity even (PF=1)
7B cb       JPO cb         Jump short if parity odd (PF=0)
78 cb       JS cb          Jump short if sign (SF=1)
74 cb       JZ cb          Jump short if zero (ZF=1)

9F          LAHF           Load: AH = flags  SF ZF xx AF xx PF xx CF
0F 02 /r   *LAR rw,ew      Load: high(rw) = Access Rights byte, selector ew
C5 /r       LDS rw,ed      Load EA doubleword into DS and word register
8D /r       LEA rw,m       Calculate EA offset given by m, place in rw
C9         *LEAVE          Set SP to BP, then POP BP (reverses previous ENTER)
C4 /r       LES rw,ed      Load EA doubleword into ES and word register

0F 01 /2   *LGDT m         Load 6 bytes at m into Global Descriptor Table reg
0F 01 /3   *LIDT m         Load 6 bytes at m into Interrupt Descriptor Table reg
0F 00 /2   *LLDT ew        Load selector ew into Local Descriptor Table reg
0F 01 /6   *LMSW ew        Load EA word into Machine Status Word
F0          LOCK (prefix)  Assert BUSLOCK signal for the next instruction
                                                             6-11

0F 33/r    #LODBITS rb,rb  Load AX with DS:SI,bit rb (incr. SI,rb), rb+1 bits
0F 3B/0 ib #LODBITS rb,ib  Load AX with DS:SI,bit rb (incr. SI,rb), ib+1 bits
AC          LODS mb        Load byte [SI] into AL, advance SI
AD          LODS mw        Load word [SI] into AX, advance SI
AC          LODSB          Load byte [SI] into AL, advance SI
AD          LODSW          Load word [SI] into AX, advance SI

E2 cb       LOOP cb        noflags DEC CX; jump short if CX/=0
E1 cb       LOOPE cb       noflags DEC CX; jump short if CX/=0 and equal (ZF=1)
E0 cb       LOOPNE cb      noflags DEC CX; jump short if CX/=0 and not equal
E0 cb       LOOPNZ cb      noflags DEC CX; jump short if CX/=0 and ZF=0
E1 cb       LOOPZ cb       noflags DEC CX; jump short if CX/=0 and zero (ZF=1)
0F 03 /r   *LSL rw,ew      Load: rw = Segment Limit, selector ew
0F 00 /3   *LTR ew         Load EA word into Task Register

A0 iw       MOV AL,xb      Move byte variable (offset iw) into AL
A1 iw       MOV AX,xw      Move word variable (offset iw) into AX
8E /3       MOV DS,mw      Move memory word into DS
8E /3       MOV DS,rw      Move word register into DS
C6 /0 ib    MOV eb,ib      Move immediate byte into EA byte
88 /r       MOV eb,rb      Move byte register into EA byte
8E /0       MOV ES,mw      Move memory word into ES
8E /0       MOV ES,rw      Move word register into ES

8C /1       MOV ew,CS      Move CS into EA word
8C /3       MOV ew,DS      Move DS into EA word
C7 /0 iw    MOV ew,iw      Move immediate word into EA word
8C /0       MOV ew,ES      Move ES into EA word
89 /r       MOV ew,rw      Move word register into EA word
8C /2       MOV ew,SS      Move SS into EA word
B0+rb ib    MOV rb,ib      Move immediate byte into byte register
8A /r       MOV rb,eb      Move EA byte into byte register
B8+rw iw    MOV rw,iw      Move immediate word into word register
8B /r       MOV rw,ew      Move EA word into word register

8E /2       MOV SS,mw      Move memory word into SS
8E /2       MOV SS,rw      Move word register into SS
A2 iw       MOV xb,AL      Move AL into byte variable (offset iw)
A3 iw       MOV xw,AX      Move AX into word register (offset iw)
A4          MOVS mb,mb     Move byte [SI] to ES:[DI], advance SI and DI
A5          MOVS mw,mw     Move word [SI] to ES:[DI], advance SI and DI
A4          MOVSB          Move byte DS:[SI] to ES:[DI], advance SI and DI
A5          MOVSW          Move word DS:[SI] to ES:[DI], advance SI and DI
                                                             6-12

F6 /4       MUL eb         Unsigned multiply (AX = AL * EA byte)
F7 /4       MUL ew         Unsigned multiply (DXAX = AX * EA word)
F6 /3       NEG eb         Two's complement negate EA byte
F7 /3       NEG ew         Two's complement negate EA word
            NIL (prefix)   Special "do-nothing" opcode assembles no code
90          NOP            No Operation
F6 /2       NOT eb         Reverse each bit of EA byte
F7 /2       NOT ew         Reverse each bit of EA word
0F 16/0    #NOTBIT eb,CL   Complement bit CL of eb
0F 17/0    #NOTBIT ew,CL   Complement bit CL of ew
0F 1E/0 ib #NOTBIT eb,ib   Complement bit ib of eb
0F 1F/0 ib #NOTBIT ew,ib   Complement bit ib of ew

0C ib       OR AL,ib       Logical-OR immediate byte into AL
0D iw       OR AX,iw       Logical-OR immediate word into AX
80 /1 ib    OR eb,ib       Logical-OR immediate byte into EA byte
08 /r       OR eb,rb       Logical-OR byte register into EA byte
83 /1 ib    OR ew,ib       Logical-OR immediate byte into EA word
81 /1 iw    OR ew,iw       Logical-OR immediate word into EA word
09 /r       OR ew,rw       Logical-OR word register into EA word
0A /r       OR rb,eb       Logical-OR EA byte into byte register
0B /r       OR rw,ew       Logical-OR EA word into word register

E6 ib       OUT ib,AL      Output byte AL to immediate port number ib
E7 ib       OUT ib,AX      Output word AX to immediate port number ib
EE          OUT DX,AL      Output byte AL to port number DX
EF          OUT DX,AX      Output word AX to port number DX
6E         *OUTS DX,eb     Output byte [SI] to port number DX, advance SI
6F         *OUTS DX,ew     Output word [SI] to port number DX, advance SI
6E         *OUTSB          Output byte DS:[SI] to port number DX, advance SI
6F         *OUTSW          Output word DS:[SI] to port number DX, advance SI

1F          POP DS         Set DS to top of stack, increment SP by 2
07          POP ES         Set ES to top of stack, increment SP by 2
8F /0       POP mw         Set memory word to top of stack, increment SP by 2
58+rw       POP rw         Set word register to top of stack, increment SP by 2
17          POP SS         Set SS to top of stack, increment SP by 2
61         *POPA           Pop DI,SI,BP,SP,BX,DX,CX,AX (SP value is ignored)
9D          POPF           Set flags register to top of stack, increment SP by 2

0E          PUSH CS        Set [SP-2] to CS, then decrement SP by 2
1E          PUSH DS        Set [SP-2] to DS, then decrement SP by 2
06          PUSH ES        Set [SP-2] to ES, then decrement SP by 2
6A ib      *PUSH ib        Push sign-extended immediate byte
68 iw      *PUSH iw        Set [SP-2] to immediate word, then decrement SP by 2
FF /6       PUSH mw        Set [SP-2] to memory word, then decrement SP by 2
50+rw       PUSH rw        Set [SP-2] to word register, then decrement SP by 2
16          PUSH SS        Set [SP-2] to SS, then decrement SP by 2
60         *PUSHA          Push AX,CX,DX,BX,original SP,BP,SI,DI
9C          PUSHF          Set [SP-2] to flags register, then decrement SP by 2

D0 /2       RCL eb,1       Rotate 9-bit quantity (CF, EA byte) left once
D2 /2       RCL eb,CL      Rotate 9-bit quantity (CF, EA byte) left CL times
C0 /2 ib   *RCL eb,ib      Rotate 9-bit quantity (CF, EA byte) left ib times
D1 /2       RCL ew,1       Rotate 17-bit quantity (CF, EA word) left once
D3 /2       RCL ew,CL      Rotate 17-bit quantity (CF, EA word) left CL times
C1 /2 ib   *RCL ew,ib      Rotate 17-bit quantity (CF, EA word) left ib times
                                                             6-13

D0 /3       RCR eb,1       Rotate 9-bit quantity (CF, EA byte) right once
D2 /3       RCR eb,CL      Rotate 9-bit quantity (CF, EA byte) right CL times
C0 /3 ib   *RCR eb,ib      Rotate 9-bit quantity (CF, EA byte) right ib times
D1 /3       RCR ew,1       Rotate 17-bit quantity (CF, EA word) right once
D3 /3       RCR ew,CL      Rotate 17-bit quantity (CF, EA word) right CL times
C1 /3 ib   *RCR ew,ib      Rotate 17-bit quantity (CF, EA word) right ib times

F3          REP (prefix)   Repeat following MOVS,LODS,STOS,INS, or OUTS CX times
65         #REPC (prefix)  Repeat following CMPS or SCAS CX times or until CF=0
F3          REPE (prefix)  Repeat following CMPS or SCAS CX times or until ZF=0
64         #REPNC (prfix)  Repeat following CMPS or SCAS CX times or until CF=1
F2          REPNE (prfix)  Repeat following CMPS or SCAS CX times or until ZF=1
F2          REPNZ (prfix)  Repeat following CMPS or SCAS CX times or until ZF=1
F3          REPZ (prefix)  Repeat following CMPS or SCAS CX times or until ZF=0

CB          RETF           Return to far caller (pop offset, then seg)
C3          RET            Return to near caller (pop offset only)
CA iw       RETF iw        RET (far), pop offset, seg, iw bytes
C2 iw       RET iw         RET (near), pop offset, iw bytes pushed before Call

D0 /0       ROL eb,1       Rotate 8-bit EA byte left once
D2 /0       ROL eb,CL      Rotate 8-bit EA byte left CL times
C0 /0 ib   *ROL eb,ib      Rotate 8-bit EA byte left ib times
D1 /0       ROL ew,1       Rotate 16-bit EA word left once
D3 /0       ROL ew,CL      Rotate 16-bit EA word left CL times
C1 /0 ib   *ROL ew,ib      Rotate 16-bit EA word left ib times
0F 28/0    #ROL4 eb        Rotate nibbles: Heb=Leb   HAL,Leb=LAL  LAL=Heb

D0 /1       ROR eb,1       Rotate 8-bit EA byte right once
D2 /1       ROR eb,CL      Rotate 8-bit EA byte right CL times
C0 /1 ib   *ROR eb,ib      Rotate 8-bit EA byte right ib times
D1 /1       ROR ew,1       Rotate 16-bit EA word right once
D3 /1       ROR ew,CL      Rotate 16-bit EA word right CL times
C1 /1 ib   *ROR ew,ib      Rotate 16-bit EA word right ib times
0F 2A/0    #ROR4 eb        Rotate nibbles: Leb=Heb   Heb=LAL  AL=eb

9E          SAHF           Store AH into flags  SF ZF xx AF xx PF xx CF
D0 /4       SAL eb,1       Multiply EA byte by 2, once
D2 /4       SAL eb,CL      Multiply EA byte by 2, CL times
C0 /4 ib   *SAL eb,ib      Multiply EA byte by 2, ib times
D1 /4       SAL ew,1       Multiply EA word by 2, once
D3 /4       SAL ew,CL      Multiply EA word by 2, CL times
C1 /4 ib   *SAL ew,ib      Multiply EA word by 2, ib times

D0 /7       SAR eb,1       Signed divide EA byte by 2, once
D2 /7       SAR eb,CL      Signed divide EA byte by 2, CL times
C0 /7 ib   *SAR eb,ib      Signed divide EA byte by 2, ib times
D1 /7       SAR ew,1       Signed divide EA word by 2, once
D3 /7       SAR ew,CL      Signed divide EA word by 2, CL times
C1 /7 ib   *SAR ew,ib      Signed divide EA word by 2, ib times
                                                             6-14

1C ib       SBB AL,ib      Subtract with borrow immediate byte from AL
1D iw       SBB AX,iw      Subtract with borrow immediate word from AX
80 /3 ib    SBB eb,ib      Subtract with borrow immediate byte from EA byte
18 /r       SBB eb,rb      Subtract with borrow byte register from EA byte
83 /3 ib    SBB ew,ib      Subtract with borrow immediate byte from EA word
81 /3 iw    SBB ew,iw      Subtract with borrow immediate word from EA word
19 /r       SBB ew,rw      Subtract with borrow word register from EA word
1A /r       SBB rb,eb      Subtract with borrow EA byte from byte register
1B /r       SBB rw,ew      Subtract with borrow EA word from word register

AE          SCAS mb        Compare bytes AL - ES:[DI], advance DI
AF          SCAS mw        Compare words AL - ES:[DI], advance DI
AE          SCASB          Compare bytes AX - ES:[DI], advance DI
AF          SCASW          Compare words AX - ES:[DI], advance DI

0F 14/0    #SETBIT eb,CL   Set bit CL of eb
0F 15/0    #SETBIT ew,CL   Set bit CL of ew
0F 1C/0 ib #SETBIT eb,ib   Set bit ib of eb
0F 1D/0 ib #SETBIT ew,ib   Set bit ib of ew
0F 01 /0   *SGDT m         Store 6-byte Global Descriptor Table register to M

D0 /4       SHL eb,1       Multiply EA byte by 2, once
D2 /4       SHL eb,CL      Multiply EA byte by 2, CL times
C0 /4 ib   *SHL eb,ib      Multiply EA byte by 2, ib times
D1 /4       SHL ew,1       Multiply EA word by 2, once
D3 /4       SHL ew,CL      Multiply EA word by 2, CL times
C1 /4 ib   *SHL ew,ib      Multiply EA word by 2, ib times
D0 /5       SHR eb,1       Unsigned divide EA byte by 2, once
D2 /5       SHR eb,CL      Unsigned divide EA byte by 2, CL times
C0 /5 ib   *SHR eb,ib      Unsigned divide EA byte by 2, ib times
D1 /5       SHR ew,1       Unsigned divide EA word by 2, once
D3 /5       SHR ew,CL      Unsigned divide EA word by 2, CL times
C1 /5 ib   *SHR ew,ib      Unsigned divide EA word by 2, ib times

0F 01 /1   *SIDT m         Store 6-byte Interrupt Descriptor Table register to M
0F 00 /0   *SLDT ew        Store Local Descriptor Table register to EA word
0F 01 /4   *SMSW ew        Store Machine Status Word to EA word
F9          STC            Set carry flag
FD          STD            Set direction flag so SI and DI will decrement
FB          STI            Set interrupt enable flag, interrupts enabled

0F 31/r    #STOBITS rb,rb  Store AX to ES:DI,bit rb (incr. DI,rb), rb+1 bits
0F 39/0 ib #STOBITS rb,ib  Store AX to ES:DI,bit rb (incr. DI,rb), ib+1 bits
AA          STOS mb        Store AL to byte [DI], advance DI
AB          STOS mw        Store AX to word [DI], advance DI
AA          STOSB          Store AL to byte ES:[DI], advance DI
AB          STOSW          Store AX to word ES:[DI], advance DI
0F 00 /1   *STR ew         Store Task Register to EA word
                                                             6-15

2C ib       SUB AL,ib      Subtract immediate byte from AL
2D iw       SUB AX,iw      Subtract immediate word from AX
80 /5 ib    SUB eb,ib      Subtract immediate byte from EA byte
28 /r       SUB eb,rb      Subtract byte register from EA byte
83 /5 ib    SUB ew,ib      Subtract immediate byte from EA word
81 /5 iw    SUB ew,iw      Subtract immediate word from EA word
29 /r       SUB ew,rw      Subtract word register from EA word
2A /r       SUB rb,eb      Subtract EA byte from byte register
2B /r       SUB rw,ew      Subtract EA word from word register
0F 22      #SUB4S          Sub CL nibbles BCD at DS:SI from ES:DI (CL even,NZ)

A8 ib       TEST AL,ib     AND immediate byte into AL for flags only
A9 iw       TEST AX,iw     AND immediate word into AX for flags only
F6 /0 ib    TEST eb,ib     AND immediate byte into EA byte for flags only
84 /r       TEST eb,rb     AND byte register into EA byte for flags only
F7 /0 iw    TEST ew,iw     AND immediate word into EA word for flags only
85 /r       TEST ew,rw     AND word register into EA word for flags only
84 /r       TEST rb,eb     AND EA byte into byte register for flags only
85 /r       TEST rw,ew     AND EA word into word register for flags only

0F 10/0    #TESTBIT eb,CL  Test bit CL of eb, set Z flag
0F 11/0    #TESTBIT ew,CL  Test bit CL of ew, set Z flag
0F 18/0 ib #TESTBIT eb,ib  Test bit ib of eb, set Z flag
0F 19/0 ib #TESTBIT ew,ib  Test bit ib of ew, set Z flag
9B          WAIT           Wait until BUSY pin is inactive (HIGH)
0F 00 /4   *VERR ew        Set ZF=1 if segment can be read, selector ew
0F 00 /5   *VERW ew        Set ZF=1 if segment can be written to, selector ew

9r          XCHG AX,rw     Exchange word register with AX
86 /r       XCHG eb,rb     Exchange byte register with EA byte
87 /r       XCHG ew,rw     Exchange word register with EA word
86 /r       XCHG rb,eb     Exchange EA byte with byte register
9r          XCHG rw,AX     Exchange  with word register
87 /r       XCHG rw,ew     Exchange EA word with word register

D7          XLAT mb        Set AL to memory byte [BX + unsigned AL]
D7          XLATB          Set AL to memory byte DS:[BX + unsigned AL]
34 ib       XOR AL,ib      Exclusive-OR immediate byte into AL
35 iw       XOR AX,iw      Exclusive-OR immediate word into AX
80 /6 ib    XOR eb,ib      Exclusive-OR immediate byte into EA byte
30 /r       XOR eb,rb      Exclusive-OR byte register into EA byte
83 /6 ib    XOR ew,ib      Exclusive-OR immediate byte into EA word
81 /6 iw    XOR ew,iw      Exclusive-OR immediate word into EA word
31 /r       XOR ew,rw      Exclusive-OR word register into EA word
32 /r       XOR rb,eb      Exclusive-OR EA byte into byte register
33 /r       XOR rw,ew      Exclusive-OR EA word into word register

*  Starred forms will not execute on 8086/8088!  See note at top of chart.
#  These instructions work only on NEC chips!  See note at top of chart.


```
{% endraw %}

## A07.DOC

{% raw %}
```
CHAPTER 7   THE FLOATING-POINT PROCESSOR


In this chapter, we'll refer to the various Central Processing
Units (CPUs) as the "86".  Thus "86" refers to either the 8088,
8086, 80186, 80286, etc.  We'll refer to the various coprocessors
as the "87".  Thus "87" refers to either the 8087, the 287, the
387, or the special IIT-2C87 processor.


The 8087 and 287 Coprocessors

All IBM-PC's, and most clones, contain a socket for a floating
point coprocessor.  If you shell out between $80 and $300, and
plug the appropriate chip into that socket, then a host of
floating point instructions is added to the assembly language
instruction set.

The original IBM-PC, and the XT, accept the original floating
point chip, the 8087.  The AT accepts a later update, the 287.
From a programming standpoint, the two chips are nearly
identical: the 287 adds the instructions FSETPM and FSTSW AX, and
ignores the instructions FENI and FDISI.  There is, however, a
rather nasty design flaw in the 8087, that was corrected in the
287.

To understand the flaw, you must understand how the 86 and 87
work as coprocessors. Whenever the 86 sees a floating point
instruction, it communicates the instruction, and any associated
memory operands, to the 87.  Then the 86 goes on to its next
instruction, operating in parallel with the 87.  That's OK, so
long as the following instructions don't do one of the following:

  1. Execute another floating point instruction; or

  2. Try to read the results of the still-executing floating
     point instruction.

If they do, then you must provide an instruction called WAIT (or
synonymously FWAIT), which halts the 86 until the 87 is finished.
For almost all floating point instructions, it should not be
necessary to provide an explicit FWAIT; the 86 ought to know that
it should wait.  For the 8087, it IS necessary to give an
explicit FWAIT before each floating point instruction: that is
the flaw.

Because of the flaw, all assemblers supporting the 8087 will
silently insert an FWAIT code (hex 9B) before all 87
instructions, except those few (the FN instructions other than
FNOP) not requiring the FWAIT.  A86 provides the switch +F (the F
must be capitalized), to signal that the 287 is the target
processor.  A86 also provides the directive ".287", compatible
with Microsoft's assembler, that you can insert into your
programs to accomplish the same thing as +F. However, the actions
taken by A86 and Microsoft when seeing .287 are completely
disjoint!  To wit:
                                                              7-2

* A86 ceases outputting FWAIT directives that are unnecessary for
  the 287.  For reasons beyond my comprehension, Microsoft
  continues to put them out.  Can someone enlighten me as to why
  Microsoft is putting out those codes?

* A86 ignores the instructions FENI, FDISI, FNENI, and FNDISI
  after it sees a .287 directive.  Microsoft continues to
  assemble these instructions.

* Microsoft recognizes the new 287 instructions, if and only if
  it sees the .287 directive.  A86 recognizes them even if .287
  is not given.  In general, I don't attempt to police your
  instruction usage-- if you use an instruction available on a
  limited number of processors, I trust that you are programming
  for one of those processors.

In summary, if your program will be running only on machines with
a 287, you can give ".287" directive. Your programs will be
significantly shorter than if they were assembled by Microsoft.
If you want your programs to run on all machines containing a
floating point chip, you should refrain from specifying .287.

WARNING: The most common mistake 87 programmers make is to try to
read the results of an 87 operation in 86 memory, before the
results are ready.  At least on my AT, the system often crashes
when you do this!  If your program runs correctly when single
stepped, but crashes when set loose, then chances are you need an
extra explicit FWAIT somewhere.


Extra Coprocessor Support

A86 now supports two additional coprocessors available for
PC-compatibles: the 80387, available for 386-based machines, and
the IIT-2C87, a 287-plug-compatible chip that adds a couple of
unique instructions. The IIT-2C87 has two extra banks of on-chip
8-number stacks, that can be switched in with the FBANK
instruction, and a matrix multiply instrction that uses all three
banks as input.  (For details contact Specialty Software
Development Corp., 110 Wild Basin Road, Austin TX 78746.) Both
chips incorporate the correction to the 8087's FWAIT design flaw,
so you can assemble with the .287 directive.  The extra
instructions for these chips are marked by "387 only:" and "IIT
only:" in the chart at the end of this chapter.


Emulating the 8087 by Software

There is a software package provided with many compilers
(Borland's Turbo C and most Microsoft compilers, for example)
that emulates the 8087 instruction set.  The emulator is very
cleverly implemented so that the programmer need not know whether
a floating point chip will be available, or whether emulation
will be necessary.  This is done by having the linker replace all
floating point machine instructions with INT calls to certain
interrupts, dedicated to emulation.  The interrupt handlers
interpret the operands to the instructions, and emulate the 8087.
                                                              7-3

You can tell A86 that the emulator might be used, by providing a
+f switch in the invocation line, or in the A86 environment
variable (make sure the f is lower case).  Since your program
will be linked to the emulator, you must be producing an OBJ
file, not a COM file, for emulation support to take effect.
Whenever a floating point instruction is assembled, A86 will
generate an external reference at the opcode for the instruction.
Then, if the emulation package is linked with your program, the
opcodes will be replaced by the INT calls. If a special
non-emulation module is linked, the opcodes will be left alone,
and the floating point instructions will be executed directly.


The Floating Point Stack

The 87 has its own register set, of 8 floating point numbers
occupying 10 bytes each, plus 14 bytes of status and control
information.  Many of the 87's instructions cause the numbers to
act like a stack, much like a Hewlett-Packard calculator.  For
this reason, the numbers are called the floating point stack.

The standard name for the top element of the floating point stack
is either ST or ST(0); the others are named ST(1) through ST(7).
Thus, for example, the instruction to add stack element number 3
into the top stack element is usually coded FADD ST,ST(3).

I find this notation painfully verbose.  Especially bad are the
parentheses, which are hard to type, and which add visual clutter
to the program.  To alleviate this problem while retaining
language compatibility, I name my stack elements simply 0 through
7.  I recognize ST as a synonym for 0.  I allow expression
elements to be concatenated; concatenation is the same as
addition.  Thus, when A86 sees ST(3), it computes 0+3 = 3.  So
you can code the old way, FADD ST,ST(3), or you can code the
concise way, FADD 0,3 or simply FADD 3.


Floating Point Initializations

In general, you use the 87 by loading numbers from 86 memory to
the 87 stack (using FLD instructions), calculating on the 87
stack, and storing the results back to 86 memory (using FST and
FSTP instructions).  There are seven constant numbers built into
the 87 instruction set: zero, one, Pi, and four logarithmic
conversion constants.  These can be loaded using the FLD0, FLD1,
FLDPI, FLDL2T, FLDL2E, FLDLG2, and FLDLN2 instructions.  All
other constants must be declared in, then loaded from, 86 memory.
Integer constant words and doublewords can be loaded via FILD.
Non-integer constant doubleword, quadwords, and ten-byte numbers
can be loaded via FLD.
                                                              7-4

A86 allows you to declare constants loaded via FLD as floating
point numbers, using scientific notation if you like.  As an
exclusive feature, A86 allows you to use any of the 4 arithmetic
functions +, -, *, / in expressions involving floating point
numbers.  A86 will even do type conversion if one of the two
operands is given as an integer; though for clarity I recommend
that you always give floating point constants with their decimal
point.


Built-In Constant Names

A86 offers another exclusive feature: the built-in symbols

    PI   ratio of circumference to diameter of a circle

    L2T  log base 2 of 10

    L2E  log base 2 of the calculus constant e = 2.71828...

    LG2  log base 10 of 2

    LN2  natural log (base e) of 2

You can use these symbols in expressions, to declare useful
constants.  For example, you can declare the degrees-to-radians
conversion constant:

    DEG_TO_RAD  DT  PI/180.



Special Immediate FLD Form

Yet another exclusive A86 feature is the instruction form FLD
constant.  This form is intended primarily to facilitate "fooling
around" with the 87 when using D86; but it is also useful for
quick-and-dirty programs.  For example, the instruction FLD 12.3
generates the following sequence of code bytes (without
explicitly using the local labels given):

    CS FLD T[M1]
    JMP >M2
  M1  DT 12.3
  M2:

Obviously, this form is not terrifically efficient: you can
always save the JMP by placing the constant outside of the
instruction stream; and the CS override might not be needed.  But
the form is very, very convenient!

NOTE that the preceding 2 sections imply that you can get
careless and code, for example, FLD PI when you intended FLDPI.
Though the two are functionally equivalent, the first form takes
a whopping 17 bytes; and second, only 2 bytes.  Be careful!
                                                              7-5

Floating Point Operand Types

The list of floating point instructions contains a variety of
operand types.  Here is a brief explanation of those types:

0        stands for the top element of the floating point stack.
         A synonym for 0 is ST or ST(0).

i        stands for element number i of the floating point stack.
         i can range from 0 through 7.  A synonym for i is ST(i).

mem10r   is a 10-byte memory quantity (typically declared with a
         DT directive) containing a full precision floating point
         number. Intel recommends that you NOT store your numbers
         in full precision; that you use the following double
         precision format instead.  Full precision numbers are
         intended for storage of intermediate results (on the
         stack); they exist to insure maximum accuracy for
         calculations on double precision numbers, which is the
         official external format of 87 numbers.

mem8r    is an 8-byte memory quantity (typically declared with a
         DQ directive) containing a double precision floating
         point number.  This is the best format for floating
         point numbers on the 87.  The 87 takes the same amount
         of time on double precision calculations as it does on
         single precision.  The only extra time is the memory
         access of 4 more bytes; negligible in comparison to the
         calculation time.

mem4r    is a 4-byte quantity (typically defined with a DD
         directive) containing a single precision floating point
         number.

mem10d   is a 10-byte quantity (also defined via DT) containing a
         special Binary Coded Decimal format recognized by the
         FBLD and FBSTP instructions.  This format is useful for
         input and output of floating point numbers.

mem4i    is a 4-byte quantity representing a signed integer in
         two's-complement notation.

mem2i    is a 2-byte quantity representing a signed integer in
         two's-complement notation.

mem14    and mem94 are 14- and 94-byte buffers containing the 87
         machine state.
                                                              7-6

Operand Choices in A86

In the "standard" assembly language, the choice of operands for
floating point instructions seems inconsistent to me.  For
example, to subtract stack i from 0, you must provide two
operands; to do the equivalent comparison, you must provide only
one operand.  A86 smooths out these inconsistencies by allowing
more choices for operands: FADD i is equivalent to FADD 0,i. FCOM
0,i is equivalent to FCOM i.  The same holds for the other main
arithmetic instructions.  FXCH 0,i and FXCH i,0 are allowed. So
if you wish to retain compatibility with other assemblers, you
should use their more restrictive instruction list, not the
following one.


The 87 Instruction Set

Following is the 87 instruction set.  The "w" in the opcode field
is the FWAIT opcode, hex 9B, which is suppressed if .287 is
selected.  Again, "0", "1", and "i" stand for the associated
floating point stack registers, not constant numbers!  Constant
numbers in the descriptions are given with decimal points: 0.0,
1.0, 2.0, 10.0.



    Opcode    Instruction     Description

 w  D9 F0     F2XM1           0 := (2.0 ** 0) - 1.0
 w  DB F1     F4X4            IIT only: 4 by 4 matrix multiply
 w  D9 E1     FABS            0 := |0|
 w  DE C1     FADD            1 := 1 + 0, pop
 w  D8 C0+i   FADD i          0 := i + 0
 w  DC C0+i   FADD i,0        i := i + 0
 w  D8 C0+i   FADD 0,i        0 := i + 0
 w  D8 /0     FADD mem4r      0 := 0 + mem4r
 w  DC /0     FADD mem8r      0 := 0 + mem8r
 w  DE C0+i   FADDP i,0       i := i + 0, pop
 w  DB E8     FBANK 0         IIT only: set bank pointer to default
 w  DB EB     FBANK 1         IIT only: set bank pointer to bank 1
 w  DB EA     FBANK 2         IIT only: set bank pointer to bank 2
 w  DF /4     FBLD mem10d     push, 0 := mem10d
 w  DF /6     FBSTP mem10d    mem10d := 0, pop
                                                              7-7

 w  D9 E0     FCHS            0 := -0
9B  DB E2     FCLEX           clear exceptions
 w  D8 D1     FCOM            compare 0 - 1
 w  D8 D0+i   FCOM 0,i        compare 0 - i
 w  D8 D0+i   FCOM i          compare 0 - i
 w  D8 /2     FCOM mem4r      compare 0 - mem4r
 w  DC /2     FCOM mem8r      compare 0 - mem8r
 w  D8 D9     FCOMP           compare 0 - 1, pop
 w  D8 D8+i   FCOMP 0,i       compare 0 - i, pop
 w  D8 D8+i   FCOMP i         compare 0 - i, pop
 w  D8 /3     FCOMP mem4r     compare 0 - mem4r, pop
 w  DC /3     FCOMP mem8r     compare 0 - mem8r, pop
 w  DE D9     FCOMPP          compare 0 - 1, pop both
 w  D9 FF     FCOS            387 only: push, 1/0 := cosine(old 0)

 w  D9 F6     FDECSTP         decrement stack pointer
 w  DB E1     FDISI           disable interrupts (.287 ignore)

 w  DE F9     FDIV            1 := 1 / 0, pop
 w  D8 F0+i   FDIV i          0 := 0 / i
 w  DC F8+i   FDIV i,0        i := i / 0
 w  D8 F0+i   FDIV 0,i        0 := 0 / i
 w  D8 /6     FDIV mem4r      0 := 0 / mem4r
 w  DC /6     FDIV mem8r      0 := 0 / mem8r

 w  DE F8+i   FDIVP i,0       i := i / 0, pop
 w  DE F1     FDIVR           1 := 0 / 1, pop
 w  D8 F8+i   FDIVR i         0 := i / 0
 w  DC F0+i   FDIVR i,0       i := 0 / i
 w  D8 F8+i   FDIVR 0,i       0 := i / 0
 w  D8 /7     FDIVR mem4r     0 := mem4r / 0
 w  DC /7     FDIVR mem8r     0 := mem8r / 0
 w  DE F0+i   FDIVRP i,0      i := 0 / i, pop

 w  DB E0     FENI            enable interrupts (.287 ignore)
 w  DD C0+i   FFREE i         empty i
 w  DE /0     FIADD mem2i     0 := 0 + mem4i
 w  DA /0     FIADD mem4i     0 := 0 + mem2i
 w  DE /2     FICOM mem2i     compare 0 - mem2i
 w  DA /2     FICOM mem4i     compare 0 - mem4i
 w  DE /3     FICOMP mem2i    compare 0 - mem2i, pop
 w  DA /3     FICOMP mem4i    compare 0 - mem4i, pop

 w  DE /6     FIDIV mem2i     0 := 0 / mem2i
 w  DA /6     FIDIV mem4i     0 := 0 / mem4i
 w  DE /7     FIDIVR mem2i    0 := mem2i / 0
 w  DA /7     FIDIVR mem4i    0 := mem4i / 0
 w  DF /0     FILD mem2i      push, 0 := mem2i
 w  DB /0     FILD mem4i      push, 0 := mem4i
 w  DF /5     FILD mem8i      push, 0 := mem8i
                                                              7-8

 w  DE /1     FIMUL mem2i     0 := 0 * mem2i
 w  DA /1     FIMUL mem4i     0 := 0 * mem4i
 w  D9 F7     FINCSTP         increment stack pointer
9B  DB E3     FINIT           initialize 87
 w  DF /2     FIST mem2i      mem2i := 0
 w  DB /2     FIST mem4i      mem4i := 0
 w  DF /3     FISTP mem2i     mem2i := 0, pop
 w  DB /3     FISTP mem4i     mem4i := 0, pop
 w  DF /7     FISTP mem8i     mem8i := 0, pop

 w  DE /4     FISUB mem2i     0 := 0 - mem2i
 w  DA /4     FISUB mem4i     0 := 0 - mem4i
 w  DE /5     FISUBR mem2i    0 := mem2i - 0
 w  DA /5     FISUBR mem4i    0 := mem4i - 0



 w  D9 C0+i   FLD i           push, 0 := old i
 w  DB /5     FLD mem10r      push, 0 := mem10r
 w  D9 /0     FLD mem4r       push, 0 := mem4r
 w  DD /0     FLD mem8r       push, 0 := mem8r
 w  D9 E8     FLD1            push, 0 := 1.0
 w  D9 /5     FLDCW mem2i     control word := mem2i
 w  D9 /4     FLDENV mem14    environment := mem14
 w  D9 EA     FLDL2E          push, 0 := log base 2.0 of e
 w  D9 E9     FLDL2T          push, 0 := log base 2.0 of 10.0
 w  D9 EC     FLDLG2          push, 0 := log base 10.0 of 2.0
 w  D9 ED     FLDLN2          push, 0 := log base e of 2.0
 w  D9 EB     FLDPI           push, 0 := Pi
 w  D9 EE     FLDZ            push, 0 := +0.0

 w  DE C9     FMUL            1 := 1 * 0, pop
 w  D8 C8+i   FMUL i          0 := 0 * i
 w  DC C8+i   FMUL i,0        i := i * 0
 w  D8 C8+i   FMUL 0,i        0 := 0 * i
 w  D8 /1     FMUL mem4r      0 := 0 * mem4r
 w  DC /1     FMUL mem8r      0 := 0 * mem8r
 w  DE C8+i   FMULP i,0       i := i * 0, pop

    DB E2     FNCLEX          nowait clear exceptions
    DB E1     FNDISI          disable interrupts (.287 ignore)
    DB E0     FNENI           enable interrupts (.287 ignore)
    DB E3     FNINIT          nowait initialize 87
 w  D9 D0     FNOP            no operation

    DD /6     FNSAVE mem94    mem94 := 87 state
    D9 /7     FNSTCW mem2i    mem2i := control word
    D9 /6     FNSTENV mem14   mem14 := environment
    DF E0     FNSTSW AX       AX := status word
    DD /7     FNSTSW mem2i    mem2i := status word
 w  D9 F3     FPATAN          0 := arctan(1/0), pop
 w  D9 F8     FPREM           0 := REPEAT(0 - 1)
 w  D9 F5     FPREM1          387 only: 0 := REPEAT(0 - 1) IEEE compat.
 w  D9 F2     FPTAN           push, 1/0 := tan(old 0)
                                                              7-9

 w  D9 FC     FRNDINT         0 := round(0)
 w  DD /4     FRSTOR mem94    87 state := mem94
 w  DD /6     FSAVE mem94     mem94 := 87 state
 w  D9 FD     FSCALE          0 := 0 * 2.0 ** 1
9B  DB E4     FSETPM          set protection mode
 w  D9 FE     FSIN            387 only: push, 1/0 := sine(old 0)
 w  D9 FB     FSINCOS         387 only: push, 1 := sine, 0 := cos(old 0)
 w  D9 FA     FSQRT           0 := square root of 0

 w  DD D0+i   FST i           i := 0
 w  D9 /2     FST mem4r       mem4r := 0
 w  DD /2     FST mem8r       mem8r := 0
 w  D9 /7     FSTCW mem2i     mem2i := control word
 w  D9 /6     FSTENV mem14    mem14 := environment
 w  DD D8+i   FSTP i          i := 0, pop
 w  DB /7     FSTP mem10r     mem10r := 0, pop
 w  D9 /3     FSTP mem4r      mem4r := 0, pop
 w  DD /3     FSTP mem8r      mem8r := 0, pop
 w  DF E0     FSTSW AX        AX := status word
 w  DD /7     FSTSW mem2i     mem2i := status word

 w  DE E9     FSUB            1 := 1 - 0, pop
 w  D8 E0+i   FSUB i          0 := 0 - i
 w  DC E8+i   FSUB i,0        i := i - 0
 w  D8 E0+i   FSUB 0,i        0 := 0 - i
 w  D8 /4     FSUB mem4r      0 := 0 - mem4r
 w  DC /4     FSUB mem8r      0 := 0 - mem8r
 w  DE E8+i   FSUBP i,0       i := i - 0, pop
 w  DE E1     FSUBR           1 := 0 - 1, pop
 w  D8 E8+i   FSUBR i         0 := i - 0
 w  DC E0+i   FSUBR i,0       i := 0 - i
 w  D8 E8+i   FSUBR 0,i       0 := i - 0
 w  D8 /5     FSUBR mem4r     0 := mem4r - 0
 w  DC /5     FSUBR mem8r     0 := mem8r - 0
 w  DE E0+i   FSUBRP i,0      i := 0 - i, pop

 w  D9 E4     FTST            compare 0 - 0.0
 w  DD E0+i   FUCOM i         387 only: unordered compare 0 - i
 w  DD E1     FUCOM           387 only: unordered compare 0 - 1
 w  DD E8+i   FUCOMP i        387 only: unordered compare 0 - i, pop
 w  DD E9     FUCOMP          387 only: unordered compare 0 - 1, pop
 w  DA E9     FUCOMPP         387 only: unordered compare 0 - 1, pop both
9B            FWAIT           wait for 87 ready
 w  D9 E5     FXAM            C3 -- C0 := type of 0
 w  D9 C9     FXCH            exchange 0 and 1
 w  D9 C8+i   FXCH 0,i        exchange 0 and i
 w  D9 C8+i   FXCH i          exchange 0 and i
 w  D9 C8+i   FXCH i,0        exchange 0 and i
 w  D9 F4     FXTRACT         push, 1 := expo, 0 := sig
 w  D9 F1     FYL2X           0 := 1 * log base 2.0 of 0, pop
 w  D9 F9     FYL2XP1         0 := 1 * log base 2.0 of (0+1.0), pop


```
{% endraw %}

## A08.DOC

{% raw %}
```
CHAPTER 8   NUMBERS AND EXPRESSIONS


Numbers and Bases

A86 supports a variety of formats for numbers.  In non-computer
life, we write numbers in a decimal format.  There are ten
digits, 0 through 9, that we use to describe numbers; and each
digit position is ten times as significant as the position to its
right.   The number ten is called the "base" of the decimal
format.  Computer programmers often find it convenient to use
other bases to specify numbers used in their programs.  The most
commonly-used bases are two (binary format), sixteen (hexadecimal
format), and eight (octal format).

The hexadecimal format requires sixteen digits.  The extra six
digits beyond 0 through 9 are denoted by the first six letters of
the alphabet: A for ten, B for eleven, C for twelve, D for
thirteen, E for fourteen, and F for fifteen.

In A86, a number must always begin with a digit from 0 through 9,
even if the base is hexadecimal.  This is so that A86 can
distinguish between a number and a symbol that happens to have
digits in its name.  If a hexadecimal number would begin with a
letter, you precede the letter with a zero.  For example, hex A0,
which is the same as decimal 160, would be written 0A0.

Because it is necessary for you to append leading zeroes to many
hex numbers, and because you never have to do so for decimal
numbers, I decided to make hexadecimal the default base for
numbers with leading zeroes.  Decimal is still the default base
for numbers beginning with 1 through 9.

Large numbers can be given as the operands to DD, DQ, or DT
directives.  For readability, you may freely intersperse
underscore characters anywhere with your numbers.

The default base can be overridden, with a letter or letters at
the end of the number: B or xB for binary, O or Q for octal, H
for hexadecimal, and D or xD for decimal.  Examples:

 077Q       octal, value is 8*7 + 7 = 63 in decimal notation
 123O       octal if the "O" is a letter: 64 + 2*8 + 3 = 83 decimal
 1230       decimal 1230: shows why you should use "Q" for octal!!
 01234567H  large constant
 0001_0000_0000_0000_0003R real number specified in hexadecimal
 100D       superfluous D indicates decimal base
 0100D      hex number 100D, which is 4096 + 13 = 5009 in decimal
 0100xD     decimal 100, since xD overrides the default hex format
 0110B      hex 110B, which is 4096 + 256 + 11 = 4363 in decimal
 0110xB     binary 4+2 = 6 in decimal notation
 110B       also binary 4+2 = 6, since "B" is not a decimal digit
                                                              8-2

The last five examples above illustrate why an "x" is sometimes
necessary before the base-override letter "B" or "D".  If that
letter can be interpreted as a hex digit, it is; the "x" forces
an override interpretation for the "B" or "D".  By the way, the
usage of lower case for x and upper case for the following
override letter is simply a recommendation; A86 treats upper-and
lower-case letters equivalently.


The RADIX Directive

The above-mentioned set of defaults (hex if leading zero, decimal
otherwise) can be overridden with the RADIX directive.  The RADIX
directive consists of the word RADIX followed by a number from 2
to 16.  The default base for the number is ALWAYS decimal,
regardless of any (or no) previous RADIX commands.  The number
gives the default base for ALL subsequent numbers, up to (but not
including) the next RADIX command.  If there is no number
following RADIX, then A86 returns to its initial mixed default of
hex for leading zeroes, decimal for other leading digits.

For compatibility with IBM's assembler, RADIX can appear with a
leading period; although I curse the pinhead designer who put
that period into IBM's language.

As an alternative to the RADIX directive, I provide the D switch,
which causes A86 to start with decimal defaults.  You can put +D
into the A86 command invocation, or into the A86 environment
variable.  The first RADIX command in the program will override
the D switch setting.

Following are examples of radix usage.  The numbers in the
comments are all in decimal notation.

  DB 10,010     ; produces 10,16 if RADIX was not seen yet
                ;   and +D switch was not specified
RADIX 10
  DB 10,010     ; produces 10,10
RADIX 16
  DB 10,010     ; produces 16,16
RADIX 2
  DB 10,01010   ; produces 2,10
RADIX 3         ; for Martian programmers in Heinlein novels
  DB 10,100     ; produces 3,9
RADIX
  DB 10,010     ; produces 10,16
                                                              8-3

Floating Point Initializations

A86 allows floating point numbers as the operands to DD, DQ, and
DT directives.  The numbers are encoded according to the IEEE
standard, followed by the 8087 and 287 coprocessors.  The format
for floating point constants is as follows: First, there is a
decimal number containing a decimal point.  There must be a
decimal point, or else the number is interpreted as an integer.
There must also be at least one decimal digit, either to the left
or right of the decimal point, or else the decimal point is
interpreted as an addition (structure element) operator.
Optionally, there may follow immediately after the decimal number
the letter E followed by a decimal number.  The E stands for
"exponent", and means "times 10 raised to the power of".  You may
provide a + or - between the E and its number.  Examples:

  0.1             constant one-tenth
  .1              the same
  300.            floating point three hundred
  30.E1           30 * 10**1; i.e., three hundred
  30.E+1          the same
  30.E-1          30 * 10**-1; i.e., three
  30E1            not floating point: hex integer 030E1
  1.234E20        scientific notation: 1.234 times 10 to the 20th
  1.234E-20       a tiny number: 1.234 divided by 10 to the 20th



Overview of Expressions

Most of the operands that you code into your instructions and
data initializations will be simple register names, variable
names, or constants.  However, you will regularly wish to code
operands that are the results of arithmetic calculations,
performed either by the machine when the program is running (for
indexing), or by the assembler (to determine the value to
assemble into the program).  A86 has a full set of operators that
you can use to create expressions to cover these cases:

* Arithmetic Operators
             byte isolation and combination (HIGH, LOW, BY)
             addition and subtraction (+,-)
             multiplication and division (* , /, MOD)
             shifting operators (SHR, SHL, BIT)

* Logical Operators
             (AND, OR, XOR, NOT)

* Boolean Negation Operator
             (!)

* Relational Operators
             (EQ, LE, LT, GE, GT, NE)

* String Comparison Operators
             (EQ, NE, =)
                                                              8-4

* Attribute Operators/Specifiers
             size specifiers (B=BYTE,W=WORD,F=FAR,SHORT,LONG)
             attribute specifiers (OFFSET,NEAR,brackets)
             segment addressing specifier (:)
             compatibility operators (PTR,ST)
             built-in value specifiers (TYPE,THIS,$)

* Special Data Duplication Operator
             (DUP)  --see Chapter 9 for a description


Types of Expression Operands

Numbers and Label Addresses

A number or constant (16-bit number) can be used in most
expressions.   A label (defined with a colon) is also treated as
a constant and so can be used in expressions, except when it is a
forward reference.

Variables

A variable stands for a byte- or word-memory location.   You may
add or subtract constants from variables; when you do so, the
constant is added to the address of the variable.  You typically
do this when the variable is the name of a memory array.

Index Expressions

An index expression consists of a combination of a base register
[BX] or [BP], and/or an index register [SI] or [DI], with an
optional constant added or subtracted.   You will usually want to
precede the bracketed expression with B, W, or F; to specify the
kind of memory unit (byte, word, or far pointer) you are
referring to.  The expression stands for the memory unit whose
address is the run-time value(s) of the base and/or index
registers added to the constant.  See the Effective Address
section and the beginning of this chapter for more details on
indexed memory.


Arithmetic Operators


HIGH/LOW

Syntax:  HIGH operand
         LOW operand

These operators are called the "byte isolation" operators.  The
operand  must evaluate to a 16-bit number.   HIGH returns the
high order byte of the number; LOW the low order byte.

For example,

  MOV AL,HIGH(01234)     ; AL = 012
  TENHEX EQU LOW(0FF10)  ; TENHEX = 010
                                                              8-5

These operators can be applied to each other.   The following
identities apply:

LOW LOW Q = LOW Q
LOW HIGH Q = HIGH Q
HIGH LOW Q = 0
HIGH HIGH Q = 0


BY

Syntax:  operand BY operand

This operator is a "byte combination" operator.  It returns the
word whose high byte is the left operand, and whose low byte is
the right operand.  For example, the expression 3 BY 5 is the
same as hexadecimal 0305.  The BY operator is exclusive to A86. I
added it to cover the following situation: Suppose you are
initializing your registers to immediate values.  Suppose you
want to initialize AH to the ASCII value 'A', and AL to decimal
10.  You could code this as two instructions MOV AH,'A' and MOV
AL,10; but you realize that a single load into the AX register
would save both program space and execution time.  Without the BY
operator, you would have to code MOV AX,0410A, which disguises
the types of the individual byte operands you were thinking
about.  With BY, you can code it properly: MOV AX,'A' BY 10.


Addition (combination)

Syntax:  operand + operand
         operand.operand
         operand PTR operand
         operand operand

As shown in the above syntax, addition can be accomplished in
four ways: with a plus sign, with a dot operator, with a PTR
operator, and simply by juxtaposing two operands next to each
other.  The dot and PTR operators are provided for compatibility
with Intel/IBM assemblers.  The dot is used in structure field
notation; PTR is used in expressions such as BYTE PTR 0.  (See
Chapter 12 for recommendations concerning PTR.)

If either operand is a constant, the answer is an expression with
the typing of the other operand, with the offsets added.  For
example, if BVAR is a byte variable, then BVAR + 100 is the byte
variable 100 bytes beyond BVAR.

Other examples:

   DB 100+17         ; simple addition
   CTRL EQU -040
   MOV AL,CTRL'D'    ; a nice notation for control-D!
   MOV DX,[BP].SMEM  ; --where SMEM was in an unindexed structure
   DQ  10.0 + 7.0    ; floating point addition
                                                              8-6

Subtraction

Syntax:  operand - operand

The subtraction operator may have operands that are:

  a. both absolute numbers

  b. variable names that have the same type

The result is an absolute number; the difference between the two
operands.

Subtraction is also allowed between floating point numbers; the
answer is the floating point difference.


Multiplication and Division

Syntax:   operand * operand     (multiplication)
          operand / operand     (division)
          operand MOD operand   (modulo)

You may only use these operators with absolute or floating point
numbers, and the result is always the same type.  Either operand
may be a numeric expression, as long as the expression evaluates
to an absolute or floating point number.  Examples:

CMP AL,2 * 4    ; compare AL to 8
MOV BX,0123/16  ; BX = 012
DT  1.0 / 7.0



Shifting Operators

Syntax:  operand SHR count   (shift right)
         operand SHL count   (shift left)
         BIT count           (bit number)

The shift operators will perform a "bit-wise" shift of the
operand.  The operand will be shifted "count" bits either to the
right or the left.  Bits shifted into the operand will be set to
0.

The expression "BIT count" is equivalent to "1 SHL count"; i.e.,
BIT returns the mask of the single bit whose number is "count".
The operands must be numeric expressions that evaluate to
absolute numbers.  Examples:

MOV BX, 0FACBH SHR 4   ; BX = 0FACH
OR AL,BIT 6            ; AL = AL OR 040; 040 is the mask for bit 6
                                                              8-7

Logical Operators

Syntax:  operand OR operand
         operand XOR operand
         operand AND operand
         NOT operand

The logical operators may only be used with absolute numbers.
They always return an absolute number.

Logical operators operate on individual bits.   Each bit of the
answer depends only on the corresponding bit in the operand(s).

The functions performed are as follows:

1.  OR: An answer bit is 1 if either or both of the operand bits
    is 1.   An answer bit is 0 only if both operand bits are 0.

Example:

11110000xB OR 00110011xB = 11110011xB


2.  XOR: This is "exclusive OR."  An answer bit is 1 if the
    operand bits are different; an answer bit is 0 if the operand
    bits are the same.   Example:

11110000xB XOR 00110011xB = 11000011xB


3.  AND: An answer bit is 1 only if both operand bits are 1.   An
    answer bit is 0 if either or both operand bits are 0.
    Example:

11110000xB AND 00110011xB = 00110000xB

4.  NOT: An answer bit is the opposite of the operand bit.   It
    is 1 if the operand bit is 0; 0 if the operand bit is 1.
    Example:

NOT 00110011xB = 11001100xB


Boolean Negation Operator

Syntax:  ! operand

The exclamation-point operator, rather than reversing each
individual bit of the operand, considers the entire operand as a
boolean variable to be negated.  If the operand is non-zero (any
of the bits are 1), the answer is 0.  If the operand is zero, the
answer is 0FFFF.
                                                              8-8

Because ! is intended to be used in conditional assembly
expressions (described in Chapter 11), there is also a special
action when ! is applied to an undefined name: the answer is the
defined value 0FFFF, meaning it is TRUE that the symbol is
undefined.  Similarly, when ! is applied to some defined quantity
other than an absolute constant, the answer is 0, meaning it is
FALSE that the operand is undefined.


Relational Operators

Syntax:    operand EQ operand    (equal)
           operand NE operand    (not equal)
           operand LT operand    (less than)
           operand LE operand    (less or equal)
           operand GT operand    (greater than)
           operand GE operand    (greater or equal)

The relational operators may have operands that are:

  a.  both absolute numbers

  b.  variable names that have the same type

The result of a relational operation is always an absolute
number.  They return an 8-or 16-bit result of all 1's for TRUE
and all 0's for FALSE.  Examples:

MOV AL, 3 EQ 0     ; AL = 0 (false)
MOV AX, 2 LE 15    ; AX = 0FFFFH (true)


String Comparison Operators

Syntax:    string EQ string    (equal)
           string NE string    (not equal)
           string = string     (equal ignoring case)

In order to subsume the string comparison facilities offered by
That Other Assembler's special conditional-assembly directives
IFIDN and IFDIF, A86 allows the relational operators EQ and NE to
accept string arguments.  For this syntax to be accepted by A86,
both strings must be bounded using the same delimiter (either
single quotes for both strings, or double quotes for both
strings).  For a match (EQ returns TRUE or NE returns FALSE), the
strings must be the same length, and every character must match
exactly.
                                                              8-9

An additional A86-exclusive feature is the = operator, which
returns TRUE if the characters of the strings differ only in the
bit masked by the value 020.  Thus you may use = to compare a
macro parameter to a string containing nothing but letters.  The
comparison will be TRUE whether the macro parameter is upper-case
or lower-case.  No checking is made to detect non-letters, so if
you use = on strings containing non-letters, you may get some
false TRUE results.  Also, = is accepted when it is applied to
non-strings as well-- the corresponding values are interpreted as
two-byte strings, with the 020 bits masked away before
comparison.



Attribute Operators/Specifiers


B,W,D,Q,T memory variable specifiers

Syntax:  B operand          Q operand
         operand B          operand Q
         W operand          T operand
         operand W          operand T
         D operand
         operand D

B, W, D, F, Q, and T convert the operand into a byte, word,
doubleword, far, quadword, and ten-byte variable, respectively.
The operand can be a constant, or a variable of the other type.
Examples:

ARRAY_PTR:
  DB 100 DUP (?)
WVAR  DW ?
  MOV AL,ARRAY_PTR B  ; load first byte of ARRAY_PTR array into AL
  MOV AL,WVAR B       ; load the low byte of WVAR into AL
  MOV AX,W[01000]     ; load AX with the memory word at loc. 01000
  LDS BX,D[01000]     ; load DS:BX with the doubleword at loc. 01000
  JMP F[01000]        ; jump far to the 4-byte location at 01000
  FLD T[BX]           ; load ten-byte number at [BX] to 87 stack


For compatibility with Intel/IBM assemblers, A86 accepts the more
verbose synonyms BYTE, WORD, DWORD, FAR, QWORD, and TBYTE for
B,W,D,F,Q,T, respectively.


SHORT and LONG Operators

Syntax:    SHORT label
           LONG label
                                                             8-10

The SHORT operator is used to specify that the label referenced
by a JMP instruction is within 127 bytes of the end of the
instruction.  The LONG operator specifies the opposite: that the
label is not within 127 bytes.  The appropriate operator can (and
sometimes must) be used if the label is forward referenced in the
instruction.

When a non-local label is forward referenced, the assembler
assumes that it will require two bytes to represent the relative
offset of the label (so the instruction including the opcode byte
will be three bytes).  By correctly using the SHORT operator, you
can save a byte of code when you use a forward reference. If the
label is not within the specified range, an error will occur. The
following example illustrates the use of the SHORT operator.

JMP FWDLAB        ; three byte instruction
JMP SHORT FWDLAB  ; two byte instruction
JMP >L1           ; two byte instruction assumed for a local label

Because the assembler assumes that a forward reference local
label is SHORT, you may sometimes be forced to override this
assumption if the label is in fact not within 127 bytes of the
JMP.  This is why LONG is provided:

JMP LONG >L9      ; three byte instruction

If you are bothered by this possibility, you can specify the +L
switch, which causes A86 to pessimistically generate the three
byte JMP for all forward references, unless specifically told not
to with SHORT.

NOTE that LONG will have effect only on the operand to an
unconditional JMP instruction; not to conditional jumps.  This is
because the conditional jumps don't have 3-byte forms; the only
conditional jumps are short ones.  If you run into this problem,
then chances are your code is getting out of control--time to
rearrange, or to break off some of the intervening code into
separate procedures.  If you insist upon leaving the code intact,
you can replace the conditional jump with an "IF cond JMP".


OFFSET Operator

Syntax:  OFFSET var-name

OFFSET is used to convert a variable into the constant pointer to
the variable.  For example, if you have declared  XX DW ?, and
you want to load SI with the pointer to the variable XX, you can
code: MOV SI,OFFSET XX.  The simpler instruction MOV SI,XX moves
the variable contents of XX into SI, not the constant pointer to
XX.
                                                             8-11

NEAR Operator

Syntax:  NEAR operand

NEAR converts the operand to have the type of a code label, as if
it were defined by appearing at the beginning of a program line
with a colon after it.  NEAR is provided mainly for compatibility
with Intel/IBM assemblers.


Square Brackets Operator

Syntax:  [operand]

Square brackets around an operand give the operand a memory
variable type.  Square brackets are generally used to enclose the
names of base and index registers: BX, BP, SI, and DI.  When the
size of the memory variable can be deduced from the context of
the expression, square brackets are also used to turn numeric
constants into memory variables.  Examples:

  MOV B[BX+50],047  ; move imm value 047 into mem byte at BX+50
  MOV AL,[050]      ; move byte at memory location 050 into AL
  MOV AL,050        ; move immediate value 050 into AL


Colon Operator

Syntax:   constant:operand
          segreg:operand
          seg_or_group_name:operand

The colon operator is used to attach a segment register value to
an operand.  The segment register value appears to the left of
the colon; the rest of the operand appears to the right of the
colon.

There are three forms to the colon operator.  The first form has
a constant as the segment register value.  This form is used to
create an operand to a long (inter-segment) JMP or CALL
instruction.  An example of this is the instruction JMP 0FFFF:0,
which jumps to the cold-boot reset location of the 86 processor.

The only context other than JMP or CALL in which this first form
is legal, is as the operand to a DD directive or an EQU
directive.  The EQU case has a further restriction: the offset
(the part to the right of the colon) must have a value less than
256.  This is because there simply isn't room in a symbol table
entry for a segment register value AND a 2-byte offset.  I don't
think you will be hurt by this restriction, since references to
other segments are usually to jump tables at the beginning of
those segments.
                                                             8-12

The second form has a segment register name to the left of the
colon.  This is the segment override form, provided for
compatibility with Intel/IBM assemblers.  A86 will generate a
segment override byte when it sees this form, unless the operand
to the right of the colon already has a default segment register
that is the same as the given override.

I prefer the more explicit method of overrides, exclusive to A86:
simply place the segment register name before the instruction
mnemonic.  For example, I prefer ES MOV AL,[BX] to MOV
AL,ES:[BX].

The third form has a segment or group name before the colon. This
form is ignored by A86; it is provided for compatibility with
Turbo C, which likes to include spurious DGROUP: overrides, to
satisfy MASM's ASSUME-checking.


ST Operator

ST is ignored whenever it occurs in an expression.  It is
provided for compatibility with Intel and IBM assemblers. For
example, you can code FLD ST(0),ST(1), which will be taken by A86
as FLD 0,1.


TYPE Operator

Syntax:  TYPE operand

The TYPE operator returns 1 if the operand is a byte variable; 2
if the operand is a word variable; 4 if the operand is a
doubleword variable; 8 if the operand is a quadword variable; 10
if the operand is a ten-byte variable; and the number of bytes
allocated by the structure if the operand is a structure name
(see STRUC in the next chapter).

A common usage of the TYPE operator is to represent the number of
bytes of a named structure.  For example, if you have declared a
structure named LINE (as described in the next chapter) that
defines 82 bytes of storage, then two ways you might refer to the
value symbolically are as follows:

  MOV CX,TYPE LINE     ; loads the size of LINE into CX
  DB TYPE LINE DUP ?   ; allocates an area of memory for a LINE



THIS and $ Specifiers

THIS returns the value of the current location counter.  It is
provided for compatibility with Intel/IBM assemblers.  The dollar
sign $ is the more standard and familiar specifier for this
purpose; it is equivalent to THIS NEAR.  THIS is typically used
with the BYTE and WORD specifiers to create alternate-typed
symbols at the same memory location:
                                                             8-13

     BVAR EQU THIS BYTE
     WVAR  DW ?

I don't recommend the use of THIS.  If you wish to retain Intel
compatibility, you can use the less verbose LABEL directive:

      BVAR LABEL BYTE
      WVAR  DW ?

If you are not concerned with compatibility to lesser assemblers,
A86 offers a variety of less verbose forms.  The most concise is
DB without an operand:

      BVAR DB
      WVAR DW ?

If this is too cryptic for you, there is always BVAR EQU B[$].


Operator Precedence

Consider the expression 1 + 2 * 3.  When A86 sees this
expression, it could perform the multiplication first, giving an
answer of 1+6 = 7; or it could do the addition first, giving an
answer of 3*3 = 9.  In fact, A86 does the multiplication first,
because A86 assigns a higher precedence to multiplication than it
does addition.

The following list specifies the order of precedence A86 assigns
to expression operators. All expressions are evaluated from left
to right following the precedence rules.  You may override this
order of evaluation and precedence through the use of parentheses
( ).  In the example above, you could override the precedence by
parenthesizing the addition: (1+2) * 3.

Some symbols that we have referred to as operators, are treated
by the assembler as operands having built-in values.  These
include B, W, F, $, and ST.  In a similar vein, a segment
override term (a segment register name followed by a colon) is
recorded when it is scanned, but not acted upon until the entire
containing expression is scanned and evaluated.

If two operators are adjacent, the rightmost operator must have
precedence; otherwise, parentheses must be used.  For example,
the expression BIT ! 1 is illegal because the leftmost operator
BIT has the higher precedence of the two adjacent operators BIT
and "!".  You can code BIT (! 1).

--Highest Precedence--
                                                             8-14

1.  Parenthesized expressions
2.  Period
3.  OFFSET, SEG, TYPE, and PTR
4.  HIGH, LOW, and BIT
5.  Multiplication and division: *, /, MOD, SHR, SHL
6.  Addition and subtraction: +,-
       a. unary
       b. binary
7.  Relational: EQ, NE, LT, LE, GT, GE =
8.  Logical NOT and !
9.  Logical AND
10. Logical OR and XOR
11. Colon for long pointer, SHORT, LONG, and BY
12. DUP

--Lowest Precedence--


```
{% endraw %}

## A09.DOC

{% raw %}
```
CHAPTER 9   DIRECTIVES IN A86


Segments in A86

The following discussion applies when A86 is assembling a .COM
See the next chapter for the discussion of segmentation for .OBJ
files.

A86 views the 86 computer's memory space as having two parts: The
first part is the program, whose contents are the object bytes
generated by A86 during its assembly of the source.   A86 calls
this area the CODE SEGMENT.  The second part is the data area,
whose contents are generated by the program after it starts
running.  A86 calls this area the DATA SEGMENT.

Please note well that the only difference between the CODE and
DATA segments is whether the contents are generated by the
program or the assembler.  The names CODE and DATA suggest that
program code is placed in the CODE segment, and data structures
go in the DATA segment.  This is mostly true, but there are
exceptions.  For example, there are many data structures whose
contents are determined by the assembler: pointer tables, arrays
of pre-defined constants, etc.  These tables are assembled in the
CODE segment.

In general, you will want to begin your program with the
directive DATA SEGMENT, followed by an ORG statement giving the
address of the start of your data area.  You then list all your
program variables and uninitialized data structures, using the
directives DB, DW, and STRUC.  A86 will allocate space starting
at the address given in the ORG statement, but it will not
generate any object bytes in that space.  After your data segment
declarations, you provide a CODE SEGMENT directive.  If the
program starts at any location other than the standard 0100, you
give an ORG giving the address of the start of your program.  You
follow this with the program itself, together with any
assembler-generated data structures.  A short program
illustrating this suggested usage follows:

DATA SEGMENT
ORG 08000
  ANSWER_BYTE  DB ?
  CALL_COUNT   DW ?

CODE SEGMENT
  JMP MAIN

TRAN_TABLE:
  DB 16,3,56,23,0,9,12,7

MAIN:
  MOV BX,TRAN_TABLE
  XLATB
  MOV ANSWER_BYTE,AL
  INC CALL_COUNT
  RET
                                                              9-2

A86 allows you to intersperse CODE SEGMENTs and DATA SEGMENTs
throughout your program; but in general it is best to put all
your DATA SEGMENT declarations at the top of your program, to
avoid problems with forward referencing.


CODE ENDS and DATA ENDS Statements

For compatibility with Intel/IBM assemblers, A86 provides the
CODE ENDS and DATA ENDS statements.  The CODE ENDS statement is
ignored; we assume that you have not nested a CODE segment inside
a DATA segment.  The DATA ENDS statement is equivalent to a CODE
SEGMENT statement.



The ORG Directive

Syntax:  ORG address

ORG moves the output pointer (the location counter at which
assembly is currently taking place within the current segment) to
the value of the operand, which should be an absolute constant,
or an expression evaluating to an absolute,
non-forward-referenced constant.

ORG is most often used in a DATA segment, to control the location
of the data area within the segment.  For example, in programs
that fit entirely into 64K, you provide an ORG directive as the
first line within your DATA segment at the top of your program.
The location given by the ORG is some location that you are sure
will be beyond the end of your program.  If you are sure that
your program will not go beyond 8K (02000 hex), your program can
look like this:

DATA SEGMENT
ORG 02000       ; data goes here, beyond the end of the program

(your data segment variable and buffer declarations go here)

DATA ENDS

(your program goes here)
                                                              9-3

There is a special side effect to ORG when it is used in the CODE
segment.  If you begin your code segment with ORG 0, then A86
knows that you are not assembling a .COM program; but are instead
assembling a code segment to be used in some other context
(examples: programming a ROM, or assembling a procedure for older
versions of Turbo Pascal).  The output file will start at 0, not
0100 as in a .COM file; and the default extension for the output
file will be .BIN, not .COM.

Other than in the above example, you should not in general issue
an ORG within the CODE segment that would lower the value of the
output pointer.  This is because you thereby put yourself in
danger of losing part of your assembled program.  If you
re-assemble over space you have already assembled, you will
clobber the previously-assembled code.  Also, be aware that the
size of the output program file is determined by the value of the
code segment output pointer when the program stops.  If you ORG
to a lower value at the end of your program, the output program
file will be truncated to the lower-value address.

Again, almost no program producing a .COM file will need any ORG
directive in the code segment.  There is an implied ORG 0100 at
the start of the program.  You just start coding instructions,
and the assembler will put them in the right place.


The EVEN Directive

Syntax:  EVEN

The EVEN directive coerces the current output pointer to an even
value.  In a DATA SEGMENT or STRUC, it does so by adding 1 to the
pointer if the pointer was odd; doing nothing if the pointer was
already even.  In a code segment, it outputs a NOP if the pointer
was odd.  EVEN is most often used in data segments, before a
sequence of DW directives. The 16-bit machines of the 86 family
fetch words more quickly when they are aligned onto even
addresses; so the EVEN directive insures that your program will
have the faster access to those DW's that follow it.  (This speed
improvement will not be seen on the 8-bit machines, most notably
the 8088 of the original IBM-PC.)


Data Allocation Using DB, DW, DD, DQ, and DT

The 86 computer family supports the three fundamental data types
BYTE, WORD, and DWORD.  A byte is eight bits, a word is 16 bits
(2 bytes), and a doubleword is 32 bits (4 bytes).  In addition,
the 87 floating point processor manipulates 8-byte quantities,
which we call Q-words, and 10-byte quantities, which we call
T-bytes.  The A86 data allocation statement is used to specify
the bytes, words, doublewords, Q-words, and T-bytes which your
program will use as data.  The syntax for the data allocation
statement is as follows:
                                                              9-4

(optional var-name)  DB  (list of values)
(optional var-name)  DW  (list of values)
(optional var-name)  DD  (list of values)
(optional var-name)  DQ  (list of values)
(optional var-name)  DT  (list of values)

The variable name, if present, causes that name to be entered
into the symbol table as a memory variable with type BYTE (for
DB), WORD (for DW), DWORD (for DD), QWORD (for DQ), or TBYTE (for
DT). The variable name should NOT have a colon after it, unless
you wish the name to be a label (instructions referring to it
will interpret the label as the constant pointer to the memory
location, not its contents).

The DB statement is used to reserve bytes of storage; DW is used
to reserve words.  The list of values to the right of the DB or
DW serves two purposes.  It specifies how many bytes or words are
allocated by the statement, as well as what their initial values
should be.  The list of values may contain a single value or more
than one, separated by commas.  The list can even be missing;
meaning that we wish to define a byte or word variable at the
same location as the next variable.

If the data initialization is in the DATA segment, the values
given are ignored, except as place markers to reserve the
appropriate number of units of storage.  The use of "?", which in
.COM mode is a synonym for zero, is recommended in this context
to emphasize the lack of actual memory initialization. When A86
is assembling .OBJ files, the ?-initialization will cause a break
in the segment (unless ? is embedded in a nested DUP containing
non-? terms, in which case it is a synonym for zero).

A special value which can be used in data initializations is the
DUP construct, which allows the allocation and/or initialization
of blocks of data.  The expression  n DUP x  is equivalent to a
list with x repeated n times.  "x" can be either a single value,
a list of values, or another DUP construct nested inside the
first one.  The nested DUP construct needs to be surrounded by
parentheses.  All other assemblers, and earlier versions of A86,
require parentheses around all right operands to DUP, even simple
ones; but this requirement has been removed for simple operands
in the current A86.

Here are some examples of data initialization statements, with
and without DUP constructs:

CODE SEGMENT
  DW 5                  ; allocate one word, init. to 5
  DB 0,3,0              ; allocate three bytes, init. to 0,3,0
  DB 5 DUP 0            ; equivalent to DB 0,0,0,0,0
  DW 2 DUP (0,4 DUP 7)  ; equivalent to DW 0,7,7,7,7,0,7,7,7,7
                                                              9-5

DATA SEGMENT
XX      DW ?            ; define a word variable XX
YYLOW   DB              ; no init value: YYLOW is low byte of word var YY
YY      DW ?
X_ARRAY DB  100 DUP ?   ; X_ARRAY is a 100-byte array
D_REAL  DQ ?            ; double precision floating variable
EX_REAL DT ?            ; extended precision floating variable

A character string value may be used to initialize consecutive
bytes in a DB statement.  Each character will be represented by
its ASCII code.  The characters are stored in the order that they
appear in the string, with the first character assigned to the
lowest-addressed byte.  In the DB statement that follows, five
bytes are initialized with the ASCII representation of the
characters in the string 'HELLO':

DB 'HELLO'

Note that except for string comparisons described in the previous
chapter, the DB directive is the only place in your program that
strings of length greater than 2 may occur.  In all other
contexts (including DW), a string is treated as the constant
number representing the ASCII value of the string; for example,
CMP AL,'@' is the instruction comparing the AL register with the
ASCII value of the at-sign.  Note further that 2-character string
constants, like all constants in the 8086, have their bytes
reversed.  Thus, while DB 'AB' will produce hex 41 followed by
hex 42, the similar looking DW 'AB' reverses the bytes: hex 42
followed by hex 41.

For compatibility, A86 now accepts double quotes, as well as
single quotes, for strings in DB directives.


The DD directive is used to initialize 32-bit doubleword pointers
to locations in arbitrary segments of the 86's memory space.
Values for such pointers are given by two numbers separated by a
colon.  The segment register value appears to the left of the
colon; and the offset appears to the right of the colon.  In
keeping with the reversed-bytes nature of memory storage in the
86 family, the offset comes first in memory.  For example, the
statement

   DD   01234:05678

appearing in a CODE segment will cause the hex bytes 78 56 34 12
to be generated, which is a long pointer to segment 01234, offset
05678.

DD, DQ, and DT can also be used to initialize large integers and
floating point numbers.  Examples:

  DD 500000   ; half million, too big for most 86 instructions
  DD 3.5      ; single precision floating point number
  DQ 3.5      ; the same number in a double precision format
  DT 3.5      ; the same number in an extended precision format
                                                              9-6

The STRUC Directive

The STRUC directive is used to define a template of data to be
addressed by one of the 8086's base and/or index registers.  The
syntax of STRUC is as follows:

(optional strucname)  STRUC  (optional effective address)

The optional structure name given at the beginning of the line
can appear in subsequent expressions in the program, with the
operator TYPE applied to it, to yield the number of bytes in the
structure template.

The STRUC directive causes the assembler to enter a mode similar
to DATA SEGMENT: assembly within the structure declares symbols
(the elements of the structure), using a location counter that
starts out at the address following STRUC.  If no address is
given, assembly starts at location 0.  An option not available to
the DATA SEGMENT is that the address can include one base
register [BX] or [BP] and/or one index register [SI] or [DI]. The
registers are part of the implicit declaration of all structure
elements, with the offset value increasing by the number of bytes
allocated in each structure line. For example:

LINE STRUC [BP]        ; the template starts at [BP]
       DB 80 DUP (?)   ; these 80 bytes advance us to [BP+80]
LSIZE  DB ?            ; this 1 byte advances us to [BP+81]
LPROT  DB ?
     ENDS

The STRUC just given defines the variables LSIZE, equivalent to
B[BP+80], and LPROT, equivalent to B[BP+81].  You can now issue
instructions such as MOV AL,LSIZE; which automatically generates
the correct indexing for you.

The mode entered by STRUC is terminated by the ENDS directive,
which returns the assembler to whatever segment (CODE or DATA) it
was in before the STRUC, with the location counter restored to
its value within that segment before the STRUC was declared.



Forward References

A86 allows names for a variety of program elements to be forward
referenced.  This means that you may use a symbol in one
statement and define it later with another statement.  For
example:

  JNZ TARGET
  .
  .
TARGET:
  ADD AX,10
                                                              9-7

In this example, a conditional jump is made to TARGET, a label
farther down in the code.  When JNZ TARGET is seen, TARGET is
undefined, so this is a forward reference.

Earlier versions of A86 were much more restricted in the kinds of
forward references allowed.  Most of the restrictions have now
been eased, for convenience as well as compatibility with other
assemblers.  In particular, you may now make forward references
to variable names.  You just need to see to it that A86 has
enough information about the type of the operand to generate the
correct instruction.  For example, MOV FOO,AL will cause A86 to
correctly deduce that FOO is a byte variable.  You can even code
a subsequent MOV FOO,1 and A86 will remember that FOO was assumed
to be a byte variable.  But if you code MOV FOO,1 first, A86
won't know whether to issue a byte or a word MOV instruction; and
will thus issue an error message.  You then specify the type by
MOV FOO B,1.

In general, A86's compatibility with That Other assembler has
improved dramatically for forward references.  Now, for most
programs, you need only sprinkle a very few B's and W's into your
references.  And you'll be rewarded: in many cases the word form
is longer than the byte form, so that the other assembler winds
up inserting a wasted NOP in your program.  You'll wind up with
tighter code by using A86!


Forward References in Expressions

A86 now allows you to add or subtract a constant number from a
forward reference symbol; and to append indexing registers to a
forward reference symbol.  This covers a vast majority of
expressions formerly disallowed.  For the remaining, more
complicated expressions, there is a trick you can use to work
your way around almost any case where you might run into a
forward reference restriction.  The trick is to move the
expression evaluation down in your program so that it no longer
contains a forward reference; and forward reference the
evaluation answer.  For example, suppose you wish to advance the
ES segment register to point immediately beyond your program. If
PROG_SIZE is the number of bytes in your program, then you add
(PROGSIZE+15)/16 to the program's segment register value. This
value is known at assembly time; but it isn't known until the end
of the program.  You do the following:

     MOV AX,CS        ; fetch the program's segment value
     ADD AX,SEG_SIZE  ; use a simple forward reference
     MOV ES,AX        ; ES is now loaded as desired

Then at the end of the program you evaluate the expression:

     PROG_SIZE EQU $
     SEG_SIZE EQU (PROG_SIZE+15)/16
                                                              9-8

The EQU Directive

Syntax:  symbol-name EQU expression
         symbol-name EQU built-in-symbol
         symbol-name EQU INT n

The expression field may specify an operand of any type that
could appear as an operand to an instruction.

As a simple example, suppose you are writing a program that
manipulates a table containing 100 names and that you want to
refer to the maximum number of names throughout the source file.
You can, of course, use the number 100 to refer to this maximum
each time, as in MOV CX,100, but this approach suffers from two
weaknesses.  First of all, 100 can mean a lot of things; in the
absence of comments, it is not obvious that a particular use of
100 refers to the maximum number of names.  Secondly, if you
extend the table to allow 200 names, you will have to locate each
100 and change it to a 200.  Suppose, instead, that you define a
symbol to represent the maximum number of names with the
following statement:

MAX_NAMES EQU 100

Now when you use the symbol MAX_NAMES instead of the number 100
(for example, MOV CX,MAX_NAMES), it will be obvious that you are
referring to the maximum number of names in the table.  Also, if
you decide to extend the table, you need only change the 100 in
the EQU directive to a 200 and every reference to MAX_NAMES will
reflect the change.

You could also take advantage of A86's strong typing, by changing
MAX_NAMES to a variable:

MAX_NAMES  DB ?

or even an indexed quantity:

MAX_NAMES EQU [BX+1]

Because the A86 language is strongly typed, the instruction for
loading MAX_NAMES into the CX register remains exactly the same
in all cases: simply MOV CX,MAX_NAMES.
                                                              9-9

Equates to Built-In Symbols

A86 allows you to define synonyms for any of the assembler
reserved symbols, by EQUating an alternate name of your choosing,
to that symbol.  For example, suppose you were coding a source
module that is to be incorporated into several different
programs.  In some programs, a certain variable will exist in the
code segment.  In others, it will exist in the stack segment. You
want to address the variable in the common source module, but you
don't know which segment override to use.  The solution is to
declare a synonym, QS, for the segment register.  QS will be
defined by each program: the code-segment program will have a QS
EQU CS at the top of it; the stack-segment program will have QS
EQU SS.  The source module can use QS as an override, just as if
it were CS or SS.  The code would be, for example, QS MOV
AL,VARNAME.


The NIL Prefix

A86 provides a mnemonic, NIL, that generates no code.  NIL can be
used as a prefix to another instruction (which will have no
effect on that instruction), or it can appear by itself on a
line.  NIL is provided to extend the example in the previous
section, to cover the possibility of no overrides.  If your
source module goes into a program that fits into 64K, so that all
the segment registers have the same value, then code QS EQU NIL
at the top of that program.


Interrupt Equates

A86 allows you to equate your own name to an INT instruction with
a specific interrupt number.  For example, if you place  TRAP EQU
INT 3  at the top of your program, you can use the name TRAP as a
synonym for INT 3  (the debugger trap on the 8086).


Duplicate Definitions

A86 contains the unique feature of duplicate definitions.   We
have already discussed local symbols, which can be redefined to
different values without restriction.  Local symbols are the only
symbols that can be redefined.  However, any symbol can be
defined more than once, as long as the symbol is defined to be
the same value and type in each definition.

This feature has two uses.  First, it eases modular program
development.  For example, if two independently-developed source
files both use the symbol ESC to stand for the ASCII code for
ESCAPE, they can both contain the declaration ESC EQU 01B, with
no problems if they are combined into the same program.
                                                             9-10

The second use for this feature is assertion checking.  Your
deliberate redeclaration of a symbol name is an assertion that
the value of the symbol has not changed; and you want the
assembler to issue you an error message if it has changed.
Example: suppose you have declared a table of options in your
DATA segment; and you have another table of initial values for
those options in your CODE segment.  If you come back months
later and add an option to your tables, you want to be reminded
to update both tables in the same way.  You should declare your
tables as follows:

DATA SEGMENT
  OPTIONS:
    .
    .
  OPT_COUNT EQU $-OPTIONS    ; OPT_COUNT is the size of the table

CODE SEGMENT
  OPT_INITS:
    .
    .
  OPT_COUNT EQU $-OPT_INITS  ; second OPT_COUNT had better be the same!



The = Directive

Syntax:  symbol-name = expression
         symbol-name = built-in-symbol
         symbol-name = INT n

The equals sign directive is provided for compatibility with That
Other assembler.  It is identical to the EQU directive, with one
exception: if the first time a symbol appears in a program is in
an = directive, that symbol will be taken as a local symbol.  It
can be redefined to other values, just like the generic local
symbols (letter followed by digits) that A86 supports. (If you
try to redefine an EQU symbol to a different value, you get an
error message.) The = facility is most often used to define
"assembler variables", that change value as the assembly
progresses.


The PROC Directive

Syntax:   name  PROC NEAR
          name  PROC FAR
          name  PROC

PROC is a directive provided for compatibility with Intel/IBM
assemblers.  I don't like PROC; and I recommend that you do not
use it, even if you are programming for those assemblers.
                                                             9-11

The idea behind PROC is to give the assembler a mechanism whereby
it can decide for you what kind of RET instruction you should be
providing.  If you specify NEAR in your PROC directive, then the
assembler will generate a near (same segment) return when it sees
RET.  If you specify FAR in your PROC directive, the assembler
will generate a far RETF return (which will cause both IP and CS
to be popped from the stack).  If you simply leave well enough
alone, and never code a PROC in your program, then RET will mean
near return throughout your program.

The reason I don't like PROC is because it is yet another attempt
by the assembler to do things "behind your back".  This goes
against the reason why you are programming in assembly language
in the first place, which is to have complete control over the
code generated by your source program.  It leads to nothing but
trouble and confusion.

Another problem with PROC is its verbosity.  It replaces a simple
colon, given right after the label it defines.  This creates a
visual clutter in the program, that makes the program harder to
read.

A86 provides an explicit RETF mnemonic so that you don't need to
use PROC to distinguish between near and far return instructions.
You can use RET or a near return and RETF for a far return. Even
if you are programming in that other assembler, and you need to
code a far return, I recommend that you create a RETF macro (it
would have the single line DB 0CBH), and stay away from PROCs
entirely.


The ENDP Directive

Syntax:  [name] ENDP

The only action A86 takes when it sees an ENDP directive is to
return the assembler to its (sane) default state, in which RET is
a near return.

NOTE that this means that A86 does not support nested PROCs, in
which anything but the innermost PROC has the FAR attribute.  I'm
sorry if I am blunt, but anybody who would subject their program
to that level of syntactic clutter has rocks in their head.


The LABEL Directive

Syntax:  name LABEL NEAR
         name LABEL FAR
         name LABEL BYTE
         name LABEL WORD

LABEL is another directive provided for compatibility with
Intel/IBM assemblers.  A86 provides less verbose ways of
specifying all the above LABEL forms, except for LABEL FAR.
                                                             9-12

LABEL defines "name" to have the type given, and a value equal to
the current output pointer.  Thus, LABEL NEAR is synonymous with
a simple colon following the name; and LABEL BYTE and LABEL WORD
are synonymous with DB and DW, respectively, with no operands.

LABEL FAR does have a unique functionality, not found in other
assemblers.  It identifies "name" as a procedure that can be
called from outside this program's code segment.  Such procedures
should have RETFs instead of RETs. Furthermore, I have provided
the following feature, unique to A86: if you CALL the procedure
from within your program, A86 will generate a PUSH CS instruction
followed by a NEAR call to the procedure.  Other assemblers will
generate a FAR call, having the same functional effect; but the
FAR call consumes more program space, and takes more time to
execute.

WARNING: you cannot use the above CALL feature as a forward
reference; the LABEL FAR definition must precede any CALLs to it.
This is unavoidable, since the assembler must assume that a CALL
to an undefined symbol takes 3 program bytes.  All assemblers
will issue an error in this situation.


```
{% endraw %}

## A10.DOC

{% raw %}
```
CHAPTER 10   RELOCATION AND LINKAGE


A86 allows you to produce either .COM files, which can be run
immediately as standalone programs, or .OBJ files, to be fed to
the MS-DOS LINK program.  In this chapter I'll discuss .OBJ mode
of A86.


.OBJ Production Made Easy

I'll start by giving you the minimum amount of information you
need to know to produce .OBJ files.  If you are writing short
interface routines, and do not want to concern yourself with the
esoterica of .OBJ files (segments, groups, publics, etc.), you
can survive quite nicely by reading only this section.

There are two ways you can cause A86 to produce a .OBJ file as
its object output.  One way is to explicitly give .OBJ as the
output file name: for example, you can assemble the source file
FOO.8 by giving the command "A86 FOO.8 FOO.OBJ".  The other way
is to specify the switch +O (letter O not digit 0).  This is
illustrated by the invocation "A86 +O FOO.8", which will have the
same effect as the first invocation.

My design philosophy for .OBJ production is to accommodate two
types of user.  The first type of user is writing new code, to
link to other (usually high level language) modules.  That person
should be able to write the module with a minimum of red tape,
and have A86 do the right thing.  The second type of user has
existing modules written for Intel/IBM assemblers, and wants to
port them to A86.  A86 should recognize and act upon all the
relocation directives (SEGMENT, GROUP, PUBLIC, EXTRN, NAME, END)
given.  The assembly should work even if several files, assembled
separately under the Intel/IBM assembler, are fed to a single A86
assembly.  You'll see if you read on through this entire chapter
that the multiple-files requirement causes A86 to interpret some
of the relocation directives a little differently (while
achieving compatible results).

Let's suppose you're writing new code: for example, an interface
routine to the "C" language, that multiplies a 16-bit number by
10.  "C" pushes the input number onto the stack, before calling
your routine.  Your code needs to get the number, multiply it by
10, and return the answer in the AX register.  You can code it:

_MUL10:          ; "C" expects all public names to start with "_"
  PUSH BP        ; "C" expects BP to be preserved
  MOV BP,SP      ; we use BP to address the stack
  MOV AX,[BP+4]  ; fetch the number N, beyond BP and the ret addr
  ADD AX,AX      ; 2N
  MOV BX,AX      ; 2N is saved in BX
  ADD AX,AX      ; 4N
  ADD AX,AX      ; 8N
  ADD AX,BX      ; 8N + 2N = 10N
  POP BP         ; BP is restored
  RET            ; go back to caller
                                                             10-2

These 11 lines can be your entire source file!  If you name the
file MUL10.8, A86 will create an object file MUL10.OBJ, that
conforms to the standard SMALL model of computation for high
level languages.  If you use RETF instead of RET (thus, by the
way, getting the operand from BP+6 instead of BP+4), the object
module will conform to the standard LARGE model of computation.
All the red tape information required by the high level language
is provided implicitly by A86.  I'll go through this information
in detail later, but you should need to read about it only if
you're curious.

What happens if you need to access symbols outside the module
you're assembling?  If the type of the symbol is correctly
guessed from the instruction that refers to it, then you can
simply refer to it, and leave it undefined within the module. For
example, if A86 sees the instruction CALL PRINT with PRINT
undefined, it will assume that PRINT is a NEAR procedure.  If
PRINT is never defined within the module, A86 will act as if you
declared PRINT via the directive EXTRN PRINT:NEAR.  The address
of PRINT will be plugged into your instruction by LINK when it
combines A86's .OBJ file with the high level language's .OBJ
files, to make the final program.

In general, the undefined operand to any CALL or JMP instruction
is assumed to be NEAR.  The second (source) operand to a MOV or
arithmetic instruction is assumed to be ABS (i.e., an immediate
constant).  An undefined first (destination) operand is assumed
to be a simple memory variable, of the same size (BYTE or WORD)
as the register given in the second operand.  If your external
symbol does not comply with these guidelines, you need to declare
it with an EXTRN before you use it.  (You can also use EXTRN to
declare types of non-complying forward references within your
module, as you'll see later.)

If you'd like to link the MUL10 procedure to Turbo Pascal V4.0 or
later, you need to append the line CODE SEGMENT PUBLIC to the top
of the program, to name the program segment according to Turbo
Pascal's expectations.  You may dispense with the leading
underscore in the name MUL10-- Turbo Pascal does not require or
expect it.

At this point, if you're a casual user, I think you've read
enough to get going!  Read further only if you wish; or if you
get stuck, and need to master the esoterica.
                                                             10-3

Overview of Relocation and Linkage

When you assemble a program directly into a .COM file, the
program has just two forms: the source program, that you can
understand, and the .COM file, that the computer can "understand"
(i.e., execute).  A .OBJ file is an intermediate format: neither
you nor the (executing) computer can make sense out of a .OBJ
file; only programs like LINK interpret .OBJ files.  The purpose
of a .OBJ file is to allow you to assemble or compile just a part
of a program.  The other parts (also in the form of .OBJ files)
can be produced at a different time; often by a different
assembler or compiler, whose source files are in a different
language.  It's easy to see where the word "linkage" comes from:
the LINK program puts the pieces of a program together.  The
"relocation" comes because the assembler or compiler that makes a
given program piece doesn't know how many other pieces will come
before it, or how big the other pieces will be.  Each piece is
constructed as if it started at location 0 within the program;
then LINK "relocates" the piece to its true location.

Many of the relocation features of 86 assembly language are
couched in terms of LINK's point of view, so we must look at the
way LINK sees things.  LINK calls a .OBJ file an "object module",
or just "module".  Each module has a NAME, that can be referred
to when LINK issues diagnostic messages, such as error messages
and symbol maps.  If a program symbol is used only within a
single module, it does not need to be given to LINK, except
possibly to pass along to a symbolic debugger.  On the other
hand, if a program symbol is defined in one module and referenced
in other modules, then LINK needs to know the name of the symbol,
so it can resolve the references.  Such a symbol is PUBLIC in the
module in which it is defined; it is "external" in the other
modules, containing references to it.  Finally, exactly one
module in a program must contain the starting location for the
program; that module is called the "main module", and it must
supply the starting address (which is not necessarily at the
beginning of the module).

In the 86 family of microprocessors, the LINK system also does
much to manage the memory segments that a program will fit into,
and get its data from.  The (grotesquely ornate) level of support
for segmentation was dictated by Intel when it specified (and IBM
and the compiler makers accepted) the format that .OBJ files will
have.  I attended the fateful meeting at Intel, in which the
crucial design decisions were made.  I regret to say that I sat
quietly, while engineers more senior than I applied their fertile
imaginations to construct fanciful scenarios which they felt had
to be supported by LINK.  Let's now review the resulting
segmentation model.
                                                             10-4

The parts of a program, as viewed by LINK, come in three
different sizes: they can be (1) pieces of a single segment, (2)
an entire single segment, or (3) a sequence of consecutive
segments in 86 memory.  Size (1) should have been called
something like FRAGMENT, but is instead called SEGMENT.  Size (2)
should have been called SEGMENT, but is instead called GROUP.
Size (3) should have been called "group", but is instead called
"class".  Let me cling to the sensible terminology for one more
paragraph, while I describe the worst scenario Intel wanted to
support; then when I discuss individual directives, I'll
regretfully revert to the official terminology.

The scenario is as follows: suppose you have a program that
occupies about 100K bytes of memory.  The program contains a core
of 20K bytes of utility routines that every part of the program
calls.  You'd like every part of the program to be able to call
these routines, using the NEAR form to save memory.  By gum, you
can do it!  You simply(!) slice the program into three fragments:
the utility routines will go into fragment U, and the rest of the
program will be split into equal-sized 40K-byte fragments A and
B.  Now you arrange the fragments in 8086 memory in the order
A,U,B.  The fragments A and U form a 60K-byte block, addressed by
a segment register value G1, that points to the beginning of A.
The fragments U and B form another 60K-byte block addressed by a
segment register value G2, that points to the beginning of U.  If
you set the CS register to G1 when A is executing, and G2 when B
is executing, the U fragment is accessible at all times.  Since
all direct JMPs and CALLs are encoded as relative offsets, the
U-code will execute direct jumps correctly whether addressed by
G1 with a huge offset, or G2 with a small offset.  Of course, if
U contains any absolute pointers referring to itself (such as an
indirect near JMP or CALL), you're in trouble.

It's now been over a decade since the fateful design meeting took
place, and I can report that the above scenario has never taken
place in the real world.  And I can state with some authority
that it never will.  The reason is that the only programs that
exceed 64K bytes in size are coded in high level language, not
assembly language.  High level language compilers follow a very,
very restricted segmentation model-- no existing model comes
remotely close to supporting the scheme suggested by the
scenario.  But the 86 assembly language can support it-- the
directives "G1 GROUP A,U" and "G2 GROUP B,U", followed by chunks
of code of the appropriate object size, headed by directives "A
SEGMENT", "B SEGMENT", and "U SEGMENT".  The LINK program is
supposed to sort things out according to the scenario; but I
can't say (and I have my doubts) if it actually succeeds in doing
so.

The concept of "class" was added as an afterthought, to implement
the more sensible and usable features that outsiders thought
GROUPs were implementing;  namely, the ability to specify that
different (and disjoint!) segments occur consecutively in memory.
This allows programs to be arranged in a consistent manner-- for
example, with all program code followed by all static data
segments followed by all dynamically allocated memory.
                                                             10-5

The NAME Directive

Syntax:  NAME module_name

The NAME directive specifies that "module_name" be given to LINK
as the name of the module produced by this assembly.  The symbol
"module_name" can be used elsewhere in your program without
conflict: it can even, if you like, be a built-in assembler
mnemonic (e.g. "NAME MOV" is acceptable)!

If you do not provide a NAME directive, A86 will use the name of
the output object file, without the .OBJ extension.   If you
provide more than one NAME directive, A86 will use the last one
given, with no error reported.



The PUBLIC Directive

Syntax:  PUBLIC  sym1, sym2, sym3, ...
         PUBLIC

The PUBLIC directive allows you to explicitly list the symbols
defined in this assembly, that can be used by other modules.  If
you do not give any PUBLIC directives in your program, A86 will
use every relocatable label and variable name in your program,
except local labels (the redefinable labels consisting of a
letter followed by digits: L7, M1, Q234, etc.).  Symbols EQUated
to constants, and symbols defined within structures and DATA
SEGMENTs, are not implicitly declared PUBLIC: you have to
explicitly include them in a PUBLIC directive.

A86 maintains an internal flag, telling it whether to figure out
for itself which symbols are PUBLIC, or to let the program
explicitly declare them.  The flag starts out "implicit", and is
set to "explicit" only if A86 sees a PUBLIC directive with no
names at all, or a PUBLIC directive containing at least one name
that would have been implicitly made PUBLIC.

If you are writing new code, you'll probably want to keep the
flag "implicit".  You use the PUBLIC directive only for those
symbols which have the form of local labels, but aren't (e.g., a
memory variable I1987 for 1987 income); and for absolute values
that are globally accessed -- e.g. specify "PUBLIC
OPEN_FILES_LIMIT" for a symbol defined as "OPEN_FILES_LIMIT EQU
20".

If you are porting existing code, that code will already have
PUBLIC directives in it, and A86 will go to "explicit" mode,
duplicating the functionality of other assemblers.

The PUBLIC directive with no names is used to force "explicit"
mode, thus causing (if there are no further PUBLICs with names)
the .OBJ file to declare no symbols PUBLIC.
                                                             10-6

There is another side effect to the PUBLIC directive: if a symbol
is declared PUBLIC in a module, it had better be defined in that
module.  If it isn't then A86 includes it in the .ERR listing of
undefined symbols in the module, and suppresses output of the
object file.


The EXTRN Directive

Syntax:  EXTRN  sym1:type, sym2:type, ...

where "type" is one of:  BYTE WORD DWORD QWORD TBYTE FAR
or synonymously:           B    W    D     Q     T     F
or:                        NEAR  ABS

The EXTRN directive allows you to attach a type to a symbol that
may not yet be defined (and may never be defined) within your
program.  This is often necessary for the assembler to generate
the correct instruction form when the symbol is used as an
operand.  All the possible types except ABS are defined elsewhere
in the A86 language, but I list them again here for convenience:

   B or BYTE:   byte-sized memory variable
   W or WORD:   word (2 byte) sized memory variable
   D or DWORD:  doubleword (4-byte) sized memory variable
   Q or QWORD:  quadword (8-byte) sized memory variable
   T or TWORD:  10-byte-sized memory variable
   NEAR:        program label accessed within a segment
   FAR:         program label accessed from outside this segment
   ABS:         an absolute number (i.e., an immediate constant)

An example of EXTRN usage is as follows: suppose there is a word
memory variable IFARK in your program.  The variable might be
declared at the end of the program; or it might be defined in a
module completely outside of this program.  Without an EXTRN
directive, A86 will assemble an instruction such as "MOV
AX,IFARK" as the loading of an immediate constant IFARK into the
AX register.  If you place the directive "EXTRN IFARK:W" at the
top of your program, you'll get the correct instruction form for
MOV AX,IFARK-- moving a word memory variable into the AX
register.

A86 will allow more than one EXTRN directive for a given symbol,
as long as the same type is given every time.  A86 will even
allow an EXTRN directive for a symbol that has already been
defined, as long as the type declared is consistent with the
symbol's definition.  These allowances exist so that you can
assemble multiple files written for another assembler, that had
been fed separately to that assembler.
                                                             10-7

Note that EXTRN is viewed quite differently by A86 than by other
assemblers.  In fact, if it weren't for those other assemblers,
I'd use the mnemonic DECLARE instead of EXTRN.  A86 doesn't
really use EXTRN to determine which symbols are external-- it
uses those symbols that are undefined at the end of assembly.  As
I stated earlier in the chapter, an undefined symbol can be
referenced without being declared via EXTRN. Conversely, a
defined symbol can be declared (and redeclared) via EXTRN; being
defined, such a symbol will not be specified "external" in the
.OBJ file.

Because EXTRN is useful in forward reference situations, it is
now recognized even when A86 is assembling a .COM file.

For those of you who are accustomed to the more traditional use
of EXTRN, and who do not like external records to be created
"behind your back", A86 offers the "+x" option.  If you include
"+x" in the program invocation, A86 will require that all
undefined symbols be explicitly declared via an EXTRN.  Any
undefined, undeclared symbols will be included in the .ERR
listing of undefined symbols, and object file output will be
suppressed.


MAIN: The Starting Location for a Program

I've already stated that exactly one module in a program is the
"main" module, containing the starting address of the entire
program.  In A86 when assembling .OBJ files, the starting address
is given by the label MAIN.  You simply provide the label "MAIN:"
where you want the program to start.  The module containing MAIN
is the main module.


The END Directive

Syntax:  END
         END start_addr

The END directive is used by other assemblers for two purposes,
both of which are now a little silly.  The first purpose is to
signal the end of assembly.  This was necessary back in the days
when source files were input on media such as paper tape: you had
to tell the assembler explicitly that the content of the tape has
ended.  Today the operating system can tell you when you've
reached the end of the file, so this function is an anachronism.

The second purpose of END is, nonsensically, to allow you to
specify the starting location of the program.  I suppose the
person who wrote the first assembler back in the 1950's was too
short on memory to implement a separate START directive, or a
MAIN label like A86 has, and decided to let END do double duty.
I've always considered the example "END START" to have an
Alice-in-Wonderland quality; it is fuel for the
high-level-language snobs who like to attack assembly language.
Please defeat the snobs, and use "MAIN:" if you are writing new
code.
                                                             10-8

For compatibility, A86 treats "END start_addr" exactly the same
as if you had coded "MAIN EQU start_addr".  Note that if you want
your program to assemble under both A86 and that other assembler,
you can specify "END MAIN"-- A86 treats MAIN EQU MAIN as a legal
redefinition of the symbol MAIN.

A86 ignores END when there is no starting-address operand, thus
allowing assembly of multiple files written for other assemblers.


The SEGMENT Directive

Syntax:  seg_name SEGMENT [align] [combine] ['class_name']

where "align" is one of:  BYTE   WORD   PARA   PAGE
"combine" is one of:      PUBLIC  STACK  COMMON  MEMORY
                            AT number

The SEGMENT directive says that assembled object code will
henceforth go to a block of code whose name is "seg_name".
"seg_name" is a symbol that represents a value that can be loaded
into a segment register.  If "seg_name" is not declared in a
GROUP directive, then its value should in fact be loaded into a
segment register, in order to address the code.  If "seg_name" is
declared in a GROUP directive, then the code is a a part of the
segment addressed by the name of the group.

A program can consist of any number of named segments, to be
combined in numerous exotic ways to produce the final program.
You can redirect your object output from one segment to another
in your assembly, by providing a SEGMENT directive before each
piece of code.  You can even return to a segment you started
earlier, by repeating a SEGMENT with the same name-- the
assembler just picks up where it left off, subject to some
possible skipping for memory alignment, that I'll describe
shortly.

The specifications following the word SEGMENT help to describe
how the code in this module's part of the segment will be
combined with code for the same segment name given in other
modules; and also how this named segment will be grouped with
other named segments.  Other assemblers require the
specifications to be given in the order indicated.  A86 will
accept any order, and will accept commas between the
specifications if you want to provide them.  The only restriction
is that "AT number" must be followed by a comma if it is not the
last specification on the line.
                                                             10-9

The "align" specification tells if each piece of code within the
segment should be aligned so that its starting address is an even
multiple of some number.  BYTE alignment means there is no
requirement; WORD alignment requires each piece to start at a
multiple of 2; PARA alignment, at a multiple of 16; PAGE
alignment, at a multiple of 256.  For example, suppose you have a
segment containing memory variables.  You can declare the segment
with the statement "VAR_DATA SEGMENT WORD", which insures that
the segment is aligned to an even memory address.  That way you
can insure that all 16-bit and bigger memory quantities in the
segment are aligned to even addresses, for faster access on the
16-bit machines of the 86 family.

There are special rules governing alignment for multiple pieces
of the same named segment within the same program module.  Other
assemblers outlaw conflicting alignment specifications in this
situation; A86 accepts them, and uses the strictest specification
given.  Furthermore, the alignment given for any specification
beyond the first will control the alignment for that piece of
code within this module's chunk.  For example, if a program
contains two pieces of code headed by "VAR_DATA SEGMENT WORD",
A86 will insert a byte between the pieces if the first piece has
an odd number of bytes.  This insures correct assembly for
multiple files written for another assembler.

If no "align" type is given for any of the pieces of a named
segment, an alignment of PARA is assumed.


The "combine" specification tells how the chunk of code from this
module will be combined with the chunks of the same named
segment, that come from other modules.  Yes, I know, that sounds
like what "align" does; but "combine" takes a different, more
major point of view:

* PUBLIC is the kind of combination we've been talking about all
  along: each piece of the segment is located off the end of the
  previously linked piece, subject to possible gaps for
  alignment.  The size of the segment is the sum of the sizes of
  the pieces, plus the sizes of the gaps.

* STACK is a combination type reserved for the system's stack
  segment.  To illustrate how STACK segment chunks are combined,
  let's describe the only way a stack segment should ever be
  used.  We'll call the segment STACK; and we declare it as
  follows:

    STACK SEGMENT WORD STACK
        DW 100 DUP (?)
    TOP_OF_STACK:
                                                            10-10

  The code just given declares a stack area of 200 bytes (100
  words) for this module.  If identical code occurs in each of
  three modules which are then linked together, the resulting
  STACK segment will have 600 bytes (the sizes are added), but
  TOP_OF_STACK will be the same address (600) for each module
  (each piece is overlayed at the top of the segment).  That way,
  every module can declare and access the top of the stack, which
  is the only static part of the stack that any code should ever
  refer to.

* COMMON is a type of memory area supported by FORTRAN.  Each
  module's chunk of a COMMON segment starts at location 0, and
  overlaps (usually duplicates) the pieces from all the other
  modules.  The size of a COMMON segment is the size of the
  largest chunk.

* MEMORY is supposed to be another kind of COMMON segment, that
  is distinguished by automatically being located beyond all
  other segments in memory.  The MS_DOS LINK program, however,
  does not implement MEMORY segments, and instead treats them
  identically to PUBLIC (not COMMON!) segments.  I can see no
  useful purpose to the MEMORY combine type, since the
  functionality can be achieved by putting a COMMON segment into
  a 'class' by itself, that goes above all the other classes.  So
  don't use MEMORY.

  Sorry, I don't support the assembly of multiple files written
  for other assemblers, that contain STACK, COMMON, or MEMORY
  segments.  If I did, I would have to detect the file breaks,
  and duplicate the overlapping functionality of these segment
  types.  Since I don't think anybody out there is using these
  esoteric types, I didn't bother to support them to that extent.
  Objections, anyone?

* "AT number" defines a non-combinable segment at the absolute
  memory location whose segment register value is "number".  This
  form is useful for initializing data in fixed locations, such
  as the 86 interrupt vector (IVECTOR SEGMENT AT 0 followed by
  ORG 4 * INT_NUMBER), or for reading fixed memory locations,
  such as the BIOS variables area (BIOS_DATA SEGMENT AT 040).

The combine type specification can be repeated in subsequent
pieces of a given segment, but if it is, it must be the same in
all pieces.

Finally, if no combine type is ever given for a named segment in
a module, that segment is non-combinable-- no other modules may
define that segment; the code given in the one module constitutes
the entire segment.
                                                            10-11

The last specification available on a SEGMENT line is the class
name, which is identified by being enclosed in single quotes.
Unlike a segment name, which can be used as an instruction
operand and hence cannot conflict with other assembler symbols, a
class name can be assigned without regard to its usage elsewhere
in the program.  It can even be a built-in A86 mnemonic.  In
fact, both the SMALL and LARGE high-level-language models specify
the class name 'CODE' for code segments, and the SMALL model
specifies the class name 'DATA'.

If no class name is given for a segment, A86 specifies the null
(zero length) string as the class name.


DATA SEGMENT, STRUC and CODE SEGMENT Directives

The DATA SEGMENT and STRUC directives work in .OBJ mode exactly
as they do in .COM mode-- they define a special assembly mode, in
which declarations are made, but no object code is output.
Offsets within DATA segments and structures are absolute, as in
.COM mode.  Assembly resumes as before when an ENDS or CODE
SEGMENT directive is encountered.

For MASM compatibility (especially in modules written to link to
Turbo Pascal V4.0 programs), I now recognize the keywords CODE,
DATA, and STACK as ordinary relocatable segment names.  The
ordinary functionality takes effect whenever a SEGMENT directive
is given with CODE, DATA or STACK as the segment name, and with
one or more relocatable parameters (e.g., PUBLIC) given after
SEGMENT.


The ENDS Directive

Syntax:  [seg_name] ENDS

The ENDS directive closes out the segment currently being
assembled, and returns assembly to the segment being assembled
before the last SEGMENT directive.  The "seg_name", if given,
must match the name in that last SEGMENT directive.  ENDS allows
you to "nest" segments inside one another.  For example, you can
declare some static data variables that are specific to a certain
section of code at the top of that section:

  _DATA SEGMENT BYTE PUBLIC 'DATA'
      VAR1  DB ?
      VAR2  DB ?
  _DATA ENDS

These four lines can be inserted inside any other segment being
assembled.  They will cause the two variable allocations to be
tacked onto the segment _DATA; and assembly will then continue in
whatever segment surrounded the four lines.  Observe that the
"nesting" does not occur in the final program; only the
presentation of the source code is nested.
                                                            10-12

If you are not nesting segments inside one another, then the ENDS
directive serves only to lend a clean, "block-structured"
appearance to your source code.  It does not assist A86 in any
particular way; in fact, it consumes a bit more object output
memory (slightly reducing object output capacity) if you have
ENDSs, rather than just starting up new segments with SEGMENT
directives.


Default Outer SEGMENT

Other assemblers outlaw any code outside of a SEGMENT
declaration, forcing you to give a SEGMENT declaration before you
can assemble anything.  A86 lets you assemble just your code; you
don't have to worry about SEGMENTs if you don't want to.

If you do provide code outside of all SEGMENT declarations, A86
performs the following steps, to find a reasonable place to put
the code:

1. If there are any segments explicitly declared whose name is or
   ends with "_TEXT", then the first such segment declared is
   used.  It is as if the SEGMENT declaration appeared at the top
   of, rather than within, the program.

2. If there is no such explicit segment, A86 creates a BYTE
   PUBLIC segment of class 'CODE', and proceeds to construct a
   name for the segment.  If there are no RETF instructions in
   the outer segment, the name chosen is "_TEXT", conforming to
   the SMALL model of computation.  If there is a RETF
   instruction, the name chosen is "modulename_TEXT", where
   "modulename" is the name of this module.  Recall that
   "modulename" comes from the NAME directive if there is one;
   from the name of the .OBJ file if there isn't.


The GROUP Directive

Syntax:  group_name GROUP seg_name1, seg_name2, ...

The GROUP directive causes A86 to tell LINK that all the listed
segments can fit into a single 64K-byte block of memory, and
instruct LINK to make that fit.  (If they won't fit, LINK will
issue an error message.)  Having declared the group, you can then
use "group_name" as the segment register value that will allow
simultaneous access to all the named segments.  The order of
names given in the list does not necessarily determine the order
in which the segments will finally appear within the group.

The most useful application of the GROUP directive is to allow
you to structure the pieces of a program, all of whose code and
data will fit into a single 64K segment.  You organize the pieces
into SEGMENTs, and declare all the SEGMENTs to be within the same
GROUP.  When the program starts, all segment registers are set to
point to the GROUP, and you never have to worry about segment
registers again in the program.
                                                            10-13

WARNING: If your segments will be GROUPed in the final program,
you should have the appropriate GROUP directive in every module
assembled.  If you don't, then any memory pointers generated will
be relative to the beginning of the individual named segments,
not to the beginning of the whole group.

Because of the obscure scenario I described in the Overview
section, Intel does not prohibit more than one GROUP from
containing some of the same segments; so neither does A86.  Any
pointers within a segment will be calculated from the beginning
of the last GROUP that the segment was declared within.  But
again, I have my doubts as to whether LINK will handle this
correctly.


The SEG Operator

Syntax:  SEG operand

The SEG operator returns the segment containing its operand-- a
value suitable for loading into one of the segment registers. If
the operand is an explicit far constant such as 01811:0100, the
value returned is the lefthand component of the constant (01811
in this example).  Otherwise, the result depends on A86's output
mode:

When A86 is assembling to an OBJ file, the result is the named
relocatable segment containing the operand.  SEG is most useful
when the operand is not defined in this A86 module: in that case,
the segment value will be plugged in by LINK.

When A86 is assembling to a COM file, SEG always returns the CS
register, with one exception: symbols declared within a SEGMENT
AT structure return the value of the containing segment.  COM
files have no facility for explicitly specifying relocatable
segments, so for compatibility A86 assumes that all non-absolute
segment references are to the program's segment itself.


```
{% endraw %}

## A11.DOC

{% raw %}
```
CHAPTER 11   MACROS AND CONDITIONAL ASSEMBLY


Macro Facility

A86 contains an easy-to-use, but very powerful macro facility.
The facility subsumes the capabilities of most assemblers,
including operand concatenation, repeat, indefinite repeat (often
called IRP), indefinite repeat character (IRPC), passing macro
operands by text or by value, comparing macro operands to
strings, and detecting blank macro operands.  Unlike other
assemblers, A86 integrates these functions into the main macro
facility; so they can be invoked without clumsy syntax, or
strange characters in the macro call operands.


Simple Macro Syntax

All macros must be defined before they are used.  A macro
definition consists of the name of the macro, followed by the
word MACRO, followed by the text of the macro, followed by #EM,
which marks the end of the macro.

Many assembly languages require a list of dummy operand names to
follow the word MACRO.  A86 does not: the operands are denoted in
the text with the fixed names #1, #2, #3, ... up to a limit of
#9, for each operand in order.  If there is anything following
the word MACRO, it is considered part of the macro text.

Examples:

; CLEAR sets the register operand to zero.

CLEAR  MACRO  SUB #1,#1 #EM

  CLEAR AX      ; generates a SUB AX,AX instruction
  CLEAR BX      ; generates a SUB BX,BX instruction


; MOVM moves the second operand to the first operand.
;   Both operands can be memory variables.

MOVM  MACRO
  MOV AL,#2
  MOV #1,AL
#EM

VAR1  DB  ?
VAR2  DB  ?

MOVM VAR1,VAR2  ; generates MOV AL,VAR2 followed by MOV VAR1,AL
                                                             11-2

Formatting in Macro Definitions and Calls

The format of a macro definition is flexible.  If the macro text
consists of a single instruction, the definition can be given in
a single line, as in the CLEAR macro given above.  There is no
particular advantage to doing this, however: A86 prunes all
unnecessary spaces, blank lines, and comments from the macro text
before entering the text into the symbol table.  I recommend the
more spread-out format of the MOVM macro, for program
readability.

All special macro operators within a macro definition begin with
a hash sign # (a hex 23 byte).  The letters following the hash
sign can be given in either upper case or lower case.  Hash-sign
operators are recognized even within quoted strings.  If you wish
the hash sign to be treated literally, and not as the start of a
special macro operator, you must give 2 consecutive hash signs:
##.  For example:

FOO MACRO
  DB '##1'
  DB '#1'
#em

FOO abc      ; produces  DB '#1'  followed by  DB 'abc'

The format of the macro call line is also flexible.  A macro call
consists of the name of the macro, followed by the operands to be
plugged into the macro.  A86 prunes leading and trailing blanks
from the operands of a macro call.  The operands to a macro call
are always separated by commas.  Also, as in all A86 source
lines, a semi-colon occurring outside of a quoted string is the
start of a comment, ignored by A86.  If you want to include
commas, blanks, or semi-colons in your operands, you must enclose
your operand in single quotes.



Macro Operand Substitution

Some macro assemblers expect the operands to macro calls to
follow the same syntax as the operands to instructions.  In those
assemblers, the operands are parsed, and reduced to numeric
values before being plugged into the macro definition text.  This
is called "passing by value".  As its default, A86 does not pass
by value, it passes by text.  The only parsing of operands done
by the macro processor is to determine the start and the finish
of the operand text.  That text is substituted, without regard
for its contents, for the "#n" that appears in the macro
definition.  The text is interpreted by A86 only after a complete
line is expanded and as it is assembled.
                                                             11-3

If the first non-blank character after the macro name is a comma,
then the first operand is null: any occurrences of #1 in the
macro text will be deleted, and replaced with nothing.  Likewise,
any two consecutive commas with no non-blanks between them will
result in the corresponding null operand.  Also, out-of-range
operands are null; for example, #3 is a null operand if only two
operands are provided in the call.

Null operands to macros are not in themselves illegal.  They will
produce errors only if the resulting macro expansion is illegal.

The method of passing by text allows operand text to be plugged
anywhere into a macro, even within symbol names.  For example:

; KF_ENTRY creates an entry in the KFUNCS table, consisting of a
;   pointer to a KF_ action routine.  It also declares the
;   corresponding CF_ symbol, which is the index within the table
;   for that entry.

KF_ENTRY  MACRO
  CF_#1  EQU  ($-KFUNCS)/2+080
  DW  KF_#1
#EM

KFUNCS:
  KF_ENTRY  UP
  KF_ENTRY  DOWN

; The above code is equivalent to:
;
;  KFUNCS:
;    DW KF_UP
;    DW KF_DOWN
;
;  CF_UP    EQU  080
;  CF_DOWN  EQU  081



Quoted String Operands

As mentioned before, if you want to include blanks, commas, or
semicolons in your operands, you enclose the operand in single
quotes.  In the vast majority of cases in which these special
characters need to be part of operands, the user wants them to be
quoted in the final, assembled line also.  Therefore, the quotes
are passed in the operand.  To override this, and strip the
quotes from the string, you precede the quoted string with a hash
sign.  Examples:
                                                             11-4

DBW  MACRO
  DB  #1
  DW  #2
#EM

DBW  'E', E_POINTER
DBW  'W', W_POINTER

; note that if quotes were not passed, the above lines would have
;   to be   DBW  '''E''', E_POINTER;    DBW  '''W''', W_POINTER

FETCH_CHAR  MACRO
  LODSB
  #1
  CALL PROCESS_CHAR
#EM

FETCH_CHAR  STOSB      ; generates STOSB as second instruction
FETCH_CHAR  #'INC DI'  ; generates INC DI as second instruction



Looping by Operands in Macros

A86's macro facility contains two kinds of loops: you can loop
once for each operand in a range of operands; or you can loop
once for each character within an operand.  The first kind of
loop, the R-loop, is discussed in this section; the second kind,
the C-loop, is discussed later.

An R-loop is a stretch of macro-definition code that is repeated
when the macro is expanded.  In addition to the fixed operands #1
through #9, you can specify a variable operand, whose number
changes each time through the loop.  You give the variable
operand one of the 4 names #W, #X, #Y, or #Z.

An R-loop begins with #R, followed immediately by the letter
W,X,Y, or Z naming the variable, followed by the number of the
first operand to be used, followed by the number of the last
operand to be used.  After the #Rxnn is the text to be repeated.
The R-loop ends with #ER.  For example:

STORE3 MACRO
  MOV AX,#1
#RY24               ; "repeat for Y running from 2 through 4"
  MOV #Y,AX
#ER
#EM

STORE3  VAR1,VAR2,VAR3,VAR4

; the above call produces the 4 instructions MOV AX,VAR1; MOV VAR2,AX;
;   MOV VAR3,AX; MOV VAR4,AX.
                                                             11-5

The #L Last Operator and Indefinite Repeats

A86 recognizes the special operator #L, which is the last operand
in a macro call.  #L can appear anywhere in macro text; but its
big power occurs in conjunction with R-loops, to yield an
indefinite-repeat facility.

A common example is as follows: you can take any macro that is
designed for one operand, and easily convert it into a macro that
accepts any number of operands.  You do this by placing the
command #RX1L, "repeat for X running from 1 through L", at the
start of the macro, and the command #ER at the end just before
the #EM.  Finally, you replace all instances of #1 in the macro
with #X.  We see how this works with the CLEAR macro:

CLEAR MACRO #RX1L
  SUB #X,#X
#ER
#EM

CLEAR AX,BX  ; generates both SUB AX,AX and SUB BX,BX in one macro!

It is possible for R-loops to iterate zero times.  In this case,
the loop-text is skipped completely.  For example, CLEAR without
any operands would produce no expanded text.


Character Loops

We have seen the R-loop; now we discuss the other kind of loop in
macros, the character loop, or C-loop.  In the C-loop, the
variable W,X,Y, or Z does not represent an entire operand; it
represents a character within an operand.

You start a C-loop with #C, followed by one of the 4 letters
W,X,Y, or Z, followed by a single operand specifier-- a digit,
the letter L, another one of W,X, Y, or Z defined in an outer
loop, or one of the more complicated specifiers defined later in
this chapter.  Following the #Cxn is the text of the C-loop.  The
C-loop ends with #EC. The macro will loop once for every
character in the operand. That single character will be
substituted for each instance of the indicated variable operand.
For example:

PUSHC  MACRO  #CW1
  PUSH #WX
#EC#EM

PUSHC ABC ; generates 3 instructions PUSH AX | PUSH BX | PUSH CX

If the C-operand is quoted in the macro call, the quotes ARE
removed from the operand before passing characters to the loop.
It is not necessary to precede the quoted string with a hash sign
in this case.  If you do, the hash sign will be passed as the
first character.
                                                             11-6

If the C-operand is a null operand (no characters in it), the
loop text is skipped completely.


The "B"-Before and "A"-After Operators

So far, we have seen that you can specify operands in your macro
in fourteen different ways: 1,2,3,4,5,6,7,8,9,W,X,Y,Z,L.  We now
multiply these 14 possibilities, by introducing the "A" and "B"
operators.  You can precede any of the 14 specifiers with "A" or
"B", to get the adjacent operand after or before the specified
operand.  For example, BL means the operand just before the last
operand; in other words, the second-to-the-last operand.  AZ
means the operand just after the Z operand.  You can even repeat,
up to a limit of 4 "B"s or 3 "A"s:  for example, BBL is the
third-to-last operand.

Note that any operand specifier can appear in contexts other than
by itself following a # within a macro.  For example, BBL could
appear as the upper limit to an R-loop: #RZ1BBL loops with Z
running from the first operand to the third-to-last operand.

In the case of the variable operand to a C-loop, the "A" and "B"
specifiers denote the characters before or after the current
looping-character.  An example of this is given in the next
section.


Multiple Increments within Loops

We have seen that you end an R-loop with a #ER, and you end a
C-loop with a #EC.  We now present another way to end these
loops; a way that lets you specify a larger increment to the
macro's loop counter.  You can end your loops with one of the 4
additional commands #E1, #E2, #E3, or #E4.

For R-loops terminated by #ER, the variable operand advances to
the next operand when the loop is made.  If you end your R-loop
with #E2, the variable operand advances 2 operands, not just one.
For #E3, it advances 3 operands; for #E4, 4 operands.  The #E1
command is the same as #ER.

The most common usage of this feature is as follows:  You will
recall that we generalized the CLEAR macro with the #L-variable,
so that it would take an indefinite number of operands.  Suppose
we want to do the same thing with the DBW macro.  We would like
DBW to take any number of operands, and alternate DBs and DWs
indefinitely on the operands.  This is made possible by creating
an R-loop terminated by #E2:

DBW  MACRO  #RX1L
  DB  #X
  DW  #AX
#E2
#EM

DBW  'E',E_POINTER,  'W',W_POINTER   ; two pairs on same line!
                                                             11-7

The #E2 terminator means that we are looping on a pair of
operands.  Note the crucial usage of the "A"-after operator to
specify the second operand of the operand pair.

A special note applies to the DBW macro above: A86 just happens
to accept a DW directive with no operands (it generates no object
code, and issues no error).  This means that DBW will accept an
odd number of operands with no error, and do the expected thing
(it alternates bytes and words, ending with a byte).

You could likewise generalize a macro with 3 or 4 operands, to an
indefinite number of triples or quadruples; by ending the R-loop
with #E3 or #E4.  The operands in each group would be specified
by #X, #AX, #AAX, and, for #E4, #AAAX.

For C-loops terminated by #E1 through #E4, the character pointer
is advanced the specified number of characters.  You use this in
much the same way as for R-loops, to create loops on pairs,
triplets, and quadruplets of characters.  For example:

PUSHC2  MACRO  #CZ1
  PUSH #Z#AZ
#E2
#EM

PUSHC2  AXBXSIDI  ; generates PUSH AX | PUSH BX | PUSH SI | PUSH DI


Negative R-loops

We now introduce another form of R-loop, called the Q-loop-- the
negative repeat loop.  This loop is the same as the R-loop,
except that the operand number decrements instead of increments;
and the loop exits when the number goes below the finish-number,
not above it.  The Q-loop is specified by #Qxnn instead of #Rxnn,
and #EQ instead of #ER.  You can also use the multiple-decrement
forms #E1 #E2 #E3 or #E4 to terminate an Q-loop.

Example:

MOVN MACRO #QXL2   ; "negative repeat X from L down to 2"
  MOV #BX,#X
#EQ#EM

MOVN AX,BX,CX,DX   ; generates the three instructions:
                   ;    MOV CX,DX
                   ;    MOV BX,CX
                   ;    MOV AX,BX

Note: the above functionality is already built into the MOV
instruction of A86.  The macro shows how you would implement it
if you did not already have this facility.
                                                             11-8

Nesting of Loops in Macros

A86 allows nesting of loops within each other. Since we provide
the 4 identifiers W,X,Y,Z for the loop operands, you can nest to
a level of 4 without restriction-- just use a different letter
for each nesting level.  You can nest even deeper, for example,
by having two nested R-loops that use W is its indexing letter.
The only restriction to this is that you cannot refer to the W of
the outer loop from within the inner W loop.  (I challenge anyone
to come up with an application in which these limitations /
restrictions cause a genuine inconvenience!)


Implied Closing of Loops

If you have a loop or loops ending when the macro ends, and if
the iteration count for those loops is 1, you may omit the #ER,
#EC, or #EQ.  A86 closes all open loops when it sees #EM, with no
error.

For example, if you omit the #ER for the loop version of the
CLEAR macro, it would make no difference-- A86 automatically
places an #ER code into the macro definition for you.


Passing Operands by Value

As already stated, A86's defualt mode for passing operands is by
text-- the characters of the operand are copied to the macro
expansion line as-is, without any evaluation.  You may override
this with the #V operator.  When A86 sees #Vn in a macro
definition, it will evaluate the expression given in the text of
operand n, and pass a string representing the decimal constant
answer, instead of the original text.  The operand must evaluate
to an absolute constant value, less than 65536.  For example:

JLV MACRO
  J#1 LABEL#V2
#EM

JINDEX = 3
JLV NC,JINDEX+1     ; generates JNC LABEL4
JINDEX = 6
JLV Z,JINDEX+2      ; generates JZ LABEL8


Passing Operand Size

The construct #Sn is translated by A86 into the decimal string
representing the number of characters in operand n.  One use of
this would be to make a conditional-assembly test of whether an
operand was passed at all, as we'll see later in this chapter.
Another use is to generate a length byte preceding a string, as
required by some high-level languages such as Turbo Pascal.
Example:
                                                             11-9

LSTRING MACRO
  DB #S1,'#1'
#EM

LSTRING  SAMPLE     ; generates  DB 6,'SAMPLE'


Generating the Number of an Operand

The construct #Nn is translated by A86 into the decimal string
represented by the position number n of the macro operand.  Note
that this value does not depend on the contents of the operand
that was passed to the macro.  Thus, for example, #N2 would
translate simply to 2; so this usage of #N is silly.  #N achieves
usefulness when n is variable: W,X,Y,Z, or L.  I give an example
of #N with a loop-control variable in the next section. Here is
an example of #NL, used to generate an array of strings, preceded
by a byte telling how many strings are in the array:

ZSTRINGS MACRO
  DB #NL           ; generates the number of operands passed
#RX1L
  DB '#X',0
#EM

ZSTRINGS  TOM,DICK,HARRY   ; generates DB 3 followed by strings


Parenthesized Operand Numbers

We've seen that macro operands are usually specified in your
macro definition by a single character: either a single digit or
one of the special letters W,X,Y,Z, or L.  A86 also allows you to
specify a constant operand number up to 255.  You do so by giving
an expression enclosed in parentheses, rather than a single
character.  The expession must evaluate at the time the macro is
defined, to a constant between 0 and 255.  You can use this
feature to translate many programs that use MASM's REPT
directive.  For example, if the following REPT construct occurs
within a MASM macro:

  TEMP = 0
REPT 100
  TEMP = TEMP + 1     ; MASM needs an explicitly-set-up counter
  DB TEMP
ENDM

you may translate it into an A86 loop, as follows:

#RX1(100)      ; the counter X is built into the A86 loop
  DB #NX
#ER

If the REPT does not occur within a macro, you must define a
macro containing the loop, which you may then immediately call.
                                                            11-10

Note that the expression enclosed in praentheses must not itself
contain any macro operators.  Thus, for example, you cannot
specify #(#NY+1) to represent the operand after Y-- you must use
#AY.


Exiting from the Middle of a Macro

For MASM compatibility, A86 offers the #EX operator, which is
equivalent to MASM's EXITM directive.  #EX is typically used in a
conditional assembly block within a loop, to terminate the loop
early.  When the #EX code is seen in a macro expansion, the
expansion ceases at that point, and assembly returns to the
source file (or to the outer macro in a nested call).  You
couldn't use #EM to do this, because that would signal the end of
the macro definition, not just the call.


Local Labels in Macros

Some assemblers have a LOCAL pseudo-op that is used in
conjunction with macros.  Symbols declared LOCAL to a macro have
unique (and bizarre) symbol names substituted for them each time
the macro is called.  This solves the problem of duplicate label
definitions when a macro is called more than once.

In A86, the problem is solved more elegantly, by having a class
of generic local labels throughout assembly, not just in macros.
Recall that symbols consisting of a single letter, followed by
one or more decimal digits, can be redefined.  You can use such
labels in your macro definitions.

I have recommended that local labels outside of macros be
designated L1 through L9.  Within macro definitions, I suggest
that you use labels M1 through M9.  If you used an Ln-label
within a macro, you would have to make sure that you never call
the macro within the range of definition of another Ln-label with
the same name.  By using Mn-labels, you avoid such potential
conflicts.

The following example of a local label within a macro is taken
from the source of the macro processor itself:

; "JHASH label" checks to see if AL is a hash sign.  If it is,
;    it processes the hash sign term, and jumps to label.
;    Otherwise, it drops through to the following code.

JHASH MACRO
  CMP AL,'##'       ; is the scanned character a hash sign?
  JNE >M1           ; skip if not
  CALL MDEF_HASH    ; process the hash sign
  JMP #1            ; jump to the label provided
M1:
  #EM
                                                            11-11

  ...
L3:                 ; loop here to eat empty lines, leading blanks
  CALL SKIP_BLANKS  ; skip over the leading blanks of a line
  INC SI            ; advance source ptr beyond the next non-blank
  JHASH L3          ; if hash sign then process, and eat more blanks
  CMP AL,0A         ; were the blanks terminated by a linefeed?
  JE L3             ; loop if yes, nothing on this line
L5:                 ; loop here after a line is seen to have contents
  CMP AL,';'        ; have we reached the start of a comment?
  JE L1             ; jump if yes, to consume the comment
  JHASH >L6         ; if hash sign then process it; get next char
  ...
L6:
  LODSB             ; fetch the next definition char from the source
  CMP AL,' '        ; is it blank?
  JA L5             ; loop if not, to process it
  ...


Debugging Macro Expansions

There is a tool called EXMAC which will help you troubleshoot
program lines that call macros.  If you are not sure about what
code is being generated by your macro calls, EXMAC will tell you.
See Chapter 13 for details.


Conditional Assembly

A86 has a conditional assembly feature, that allows you to
specify that blocks of source code will or will not be assembled,
according to the values of equated user symbols.  The controlling
symbols can be declared in the program (and can thus be the
result of assembly-time expressions), or they can be declared in
the assembler invocation.

You should keep in mind the difference between conditional
assembly, invoked by #IF, and the structured-programming feature,
invoked by IF without the hash sign.  #IF tests a condition at
assembly time, and can cause code to not be assembled and thus
not appear in the program.  IF causes code to be assembled that
tests a condition at run time, possibly jumping over code.  The
skipped code will always appear in the program.

All conditional assembly lines are identified by a hash sign # as
the first non-blank character of a line.  The hash sign is
followed by one of the four keywords IF, ELSEIF, ELSE or ENDIF.

#IF starts a conditional assembly block.  On the same line,
following the #IF, you provide either a single name, or an
arbitrary expression evaluating to an absolute constant.  In this
context, a single name evaluates to TRUE if it is defined and not
equal to the absolute constant zero.  A name is FALSE if it is
undefined, or if it has been equated to zero.  An expression is
TRUE if nonzero, FALSE if zero.
                                                            11-12

If the #IF expression evaluates to FALSE, then the following
lines of code are skipped, up to the next matching #ELSEIF,
#ELSE, or #ENDIF.  If the expression is TRUE, then the following
lines of code are assembled normally.  If a subsequent matching
#ELSEIF or #ELSE is encountered, then code is skipped up to the
matching #ENDIF.

#ELSEIF provides a multiple-choice facility for #IF-blocks.  You
can give any number of #ELSEIFs between an #IF and its matching
#ENDIF.  Each #ELSEIF has a name or expression following it on
the same line. If the construct following the #IF is FALSE, then
the assembler looks for the first TRUE construct following an
#ELSEIF, and assembles that block of code.  If there are no TRUE
#ELSEIFs, then the #ELSE-block (if there is one) is assembled.

You should use the ! instead of the NOT operator in conditional
assembly expressions.  The ! operator performs the correct
translation of names into TRUE or FALSE values, and handles the
case !undefined without reporting an error.

#ELSE marks the beginning of code to be assembled if all the
previous blocks of an #IF have been skipped over.  There is no
operand after the #ELSE.  There can be at most one #ELSE in an
#IF-block, and it must appear after any #ELSEIFs.

#ENDIF marks the end of an #IF-block.  There is no operand after
#ENDIF.

It is legal to have nested #IF-blocks; that is, #IF-blocks that
are contained within other #IF-blocks.  #ELSEIF, #ELSE, and
#ENDIF always refer to the innermost nested #IF-block.

As an example of conditional assembly, suppose that you have a
program that comes in three versions: one for Texas, one for
Oklahoma, and one for the rest of the nation.  The three programs
differ in a limited number of places.  Instead of keeping three
different versions of the source code, you can keep one version,
and use conditional assembly on the boolean variables TEXAS and
OKLAHOMA to control the assembler output.  A sample block would
be:

#if TEXAS
  DB 0,1,2,3
#elseif OKLAHOMA
  DB 4,5,6,7
#else
  DB 8,9,10,11
#endif

If a block of code is to be assembled only if TEXAS is false,
then you would use the exclamation point operator:

#if !TEXAS
  DB 0FF
#endif
                                                            11-13

Conditional Assembly and Macros

You may have conditional assembly blocks either in macro
definitions or in macro expansions.  The only limitation is that
if you have an #IF-block in a macro expansion, the entire block
(i.e., the matching #ENDIF) must appear in the same macro
expansion.  You cannot, for example, define a macro that is a
synonym for #IF.

To have your conditional assembly block apply to the macro
definition, you provide the block normally within the definition.
For example:

X1 EQU 0
  BAZ MACRO
#if X1
  DB 010
#else
  DB 011
#endif
#EM
  BAZ
X1 EQU 1
  BAZ

In the above sequence of code, the conditional assembly block is
acted upon when the macro BAZ is defined.  The macro therefore
consists of the single line DB 011, with all the conditional
assembly lines removed from the definition.  Thus, both
expansions of BAZ produce the object-code byte of 011, even
though the local label X1 has turned non-zero for the second
invocation.

To have your conditional assembly block appear in the macro
expansion, you must literalize the hash sign on each conditional
assembly line by giving two hash signs:

X1 EQU 0
  BAZ MACRO
##if X1
  DB 010
##else
  DB 011
##endif
#EM
  BAZ
X1 EQU 1
  BAZ

Now the entire conditional assembly block is stored in the macro
definition, and acted upon each time the macro is expanded. Thus,
the two invocations of BAZ will produce the different object
bytes 011 and 010, since X1 has become non-zero for the second
expansion.
                                                            11-14

You will usually want your conditional assembly blocks to be
acted upon at macro definition time, to save symbol table space.
You will thus use the first form, with the single hash signs.


Simulating MASM's Conditional Assembly Constructs

Microsoft's MASM assembler has an abundance of confusing
conditional assembly directives, all of which are subsumed by
A86's #IF expression evaluation policies.  IF and IFDEF are both
covered by A86's #IF directive.  IFE and IFNDEF are duplicated by
#IF followed by the exclamation-point (boolean negation)
operator.  IFB and IFNB test whether a macro operand has been
passed as blank-- they can be simulated by testing the size of
the operand with the #Sn operator.  Finally, IFIDN and IFDIF do
string comparisons of macro operands.  This is more generally
subsumed by the string-comparison capabilities of the operators
EQ, NE, and =.

Examples of translation of each of these constructs is given in
the next chapter, on compatibility with other assemblers.


Conditional Assembly and the XREF Program

Previous versions of A86 contained a warning, that XREF will not
correctly handle conditional-assembly blocks controlled by
variables whose values change during assembly.  Starting with
V3.12, this has been corrected, by writing to the SYM file a log
of each conditional-assembly test result.  XREF will consult the
log to determine which blocks to consider.


Declaring Variables in the Assembler Invocation

To facilitate the effective use of conditional assembly, A86
allows you to declare boolean (true-false) symbols in the command
line that invokes the assembler.  The declarations can appear
anywhere in the list of source file names.  They are
distinguished from the file names by a leading equals sign =.  To
declare a symbol TRUE (value = 1), give the name after the equals
sign.  DO NOT put any spaces between the equals sign and the
name! To declare a symbol FALSE (value = 0), you can give an
equals sign, an exclamation point, then the name.  Again, DO NOT
embed any blanks!  Example: if your source files are src1.8,
src2.8, and src3.8, then you can assemble with TEXAS true by
invoking A86 as follows:

   a86 =TEXAS src1.8 src2.8 src3.8

You can assemble with TEXAS explicitly set to FALSE as follows:

   a86 =!TEXAS src1.8 src2.8 src3.8
                                                            11-15

Note that if TEXAS is used only as a conditional-assembly
control, then you do not need to include the =!TEXAS in the
invocation, because an undefined TEXAS will automatically be
interpreted as false.

A user pointed out to me that it's impossible to get an
equals-sign into an environment variable.  So A86 now accepts an
up-arrow (hex 5E) character in place of an equals-sign for an
invocation variable.


Null Invocation Variable Names

A86 will ignore an equals-sign by itself in the invocation line,
without error.  This allows you to generate assembler invocation
lines using parameters that could be either boolean variable
names, or null strings. For example, in the previously-mentioned
TEXAS-OKLAHOMA-nation example, the program could be invoked via a
.BAT file called "AMAKE.BAT", coded as follows:

      A86 =%1 *.8

You invoke A86 by typing one of the following:

      amake texas
      amake oklahoma
      amake

The third line will produce the assembler invocation  A86 = *.8;
causing no invocation variables to be declared.  Thus both TEXAS
and OKLAHOMA will be false, which is exactly what you want for
the rest-of-the-nation version of the program.


Changing Values of Invocation Variables

The usual prohibition against changing the value of a symbol that
is not a local label does not apply to invocation variables.  For
example, suppose you have a conditional control variable DEBUG,
which will generate diagnostic code for debugging when it is
true.  Suppose further that you have already debugged source
files src1.8 and src3.8; but you are still working on src2.8. You
may invoke A86 as follows:

   A86 src1.8 =DEBUG src2.8 =!DEBUG src3.8

The variable DEBUG will be TRUE only during assembly of src2.8,
just as you want.


```
{% endraw %}

## A12.DOC

{% raw %}
```
CHAPTER 12   COMPATIBILITY WITH OTHER ASSEMBLERS


I gave heavy priority to compatibility when I designed A86; a
priority just a shade behind the higher priorities of
reliability, speed, convenience, and power.  For those of you who
feel that "close, but incompatible" is like saying "a little bit
pregnant", I'm sorry to report that A86 will not assemble all
Intel/IBM/MASM programs, unmodified.  But I do think that a vast
majority of programs can, with a little massaging, be made to
assemble under A86.  Furthermore, the massaging can be done in
such a way as to make the programs still acceptable to that old,
behemoth assembler.

Version 3.00 of A86 has many compatibility features not present
in earlier versions.  Among the features added since A86 was
first released are:  more general forward references, double
quotes for strings, "=" as a synonym for EQU, the RADIX
directive, and the COMMENT directive.  If you tried feeding an
old source file to a previous A86 and were dismayed by the number
of error messages you got, try again: things might be more
manageable now.


Conversion of MASM programs to A86

Following is a list of the things you should watch out for when
converting from MASM to A86:

1. You need to determine whether the program was coded as a COM
   program or as an EXE program.  All COM programs coded for MASM
   will contain an ORG 100H directive somewhere before the start
   of the code.  EXE programs will contain no such ORG, and will
   often contain statements that load named segments into
   registers.  If the program was coded as EXE, you must either
   assemble it (using the +O option) to an OBJ file to be fed to
   LINK, or you must eliminate the instructions that load segment
   registers-- in a COM program they often aren't necessary
   anyway, since COM programs are started with all segment
   registers already pointing to the same value.

   A good general rule is: when it doubt, try assembling to an
   OBJ file.

2. You need to determine whether the program is executing with
   all segment registers pointing to the same value.  Simple COM
   programs that fit into 64K will typically fall into this
   category.  Most EXE programs, programs that use huge amounts
   of memory, and programs (such as memory-resident programs)
   that take over interrupts typically have different values in
   segment registers.
                                                             12-2

   If there are different values in the segment registers, then
   there may be instructions in the program for which the old
   assembler generates segment override prefixes "behind your
   back".  You will need to find such references, and generate
   explicit overrides for them.  If there are data tables within
   the program itself, a CS-override is needed.    If there are
   data structures in the stack segment not accessed via a
   BP-index, an SS-override is needed. If ES points to its own
   segment, then an ES-override is needed for accesses (other
   than STOS and MOVS destinations) to that segment.  In the
   interrupt handlers to memory-resident programs, the "normal"
   handler is often invoked via an indirect CALL or JMP
   instruction that fetches the doubleword address of the normal
   handler from memory, where it was stored by the initialization
   code.  That CALL or JMP often requires a CS-override-- watch
   out!

   If you want to remain compatible with the old assembler, then
   code the overrides by placing the segment register name, with
   a colon, before the memory-access operand in the instruction.
   If you do not need further compatibility, you can place the
   segment register name before the instruction mnemonic.  For
   example:

    MOV AL,CS:TABLE[SI]   ; if you want compatibility do this
    CS MOV AL,TABLE[SI]   ; if not you can do it this way

3. You should use a couple of A86's switches to maximize
   compatibility with MASM.  I've already mentioned the +O switch
   to produce .OBJ files.  You should also assemble with the +D
   switch, which disables A86's unique parsing of constants with
   leading zeroes as hexidecimal.  The RADIX command in your
   program will also do this. And you should use the +L15 switch,
   that disables a few other A86 features that might have reduced
   compatibility. See Chapter 3 for a detailed explanation of
   these switches.

4. A86 is a bit more restrictive with respect to forward
   references than MASM, but not as much as it used to be. You'll
   probably need to resolve just a few ambiguous references by
   appending " B" or " W" to the forward reference name.  One
   common reference that needs a bit more recoding is the
   difference of two forward references, often used to refer to
   the size of a block of allocated memory.  You handle this by
   defining a new symbol representing the size, using an EQU
   right after the block is declared, and then replacing the
   forward-reference difference with the size symbol.

5. A86's macro definition and conditional assembly language is
   different than MASM's.  Most macros can be translated by
   replacing the named parameters of the old macros with the
   dedicated names #n of the A86 macro language; and by replacing
   ENDM with #EM.  Other constructs have straightforward
   translations, as illustrated by the following examples.  Note
   that examples involving macro parameters have double pound
   signs, since the condition will be tested when the macro is
   expanded, not when it is defined.
                                                             12-3

   MASM construct              Equivalent A86 construct

   IFE expr                     #IF ! expr
   IFB <PARM3>                  ##IF !#S3
   IFNB <PARM4>                 ##IF #S4
   IFIDN <PARM1>,<CX>           ##IF "#1" EQ "CX"
   IFDIF <PARM2>,<SI>           ##IF "#2" NE "SI"
   .ERR                         (any undefined symbol)
   .ERRcond                     TRUE EQU 0FFFF
                                TRUE EQU cond
   EXITM                        #EX
   IRP ... ENDM                 #RX1L ... #ER
   REPT 100 ...ENDM             #RX1(100) ... #ER
   IRPC ... ENDM                #CX ... #EC

   The last three constructs, IRP, REPT, and IRPC, usually occur
   within macros; but in MASM they don't have to.  The A86
   equivalents are valid only within macros-- if they occur in
   the MASM program outside of a macro, you duplicate them by
   defining an enclosing macro on the spot, and calling that
   macro once, right after it is defined.

   To retain compatibility, you isolate the old macro definitions
   in an INCLUDE file (A86 will ignore the INCLUDE directive),
   and isolate the A86 macro definitions in a separate file, not
   used in an MASM assembly of the program.

6. A86 supports the STRUC directive, with named structure
   elements, just like MASM, with one exception: A86 does not
   save initial values declared in the STRUC definition, and A86
   does not allow assembly of instances of structure elements.

   For example, the MASM construct

   PAYREC STRUC
      PNAME  DB 'no name given'
      PKEY   DW ?
   ENDS

   PAYREC 3 DUP (?)
   PAYREC <'Eric',1811>

   causes A86 to accept the STRUC definition, and define the
   structure elements PNAME and PKEY correctly; but the PAYREC
   initializations need to be recoded.  If it isn't vital to
   initialize the memory with the specific definition values, you
   could recode the first PAYREC as:

   DB  ((TYPE PAYREC) * 3) DUP ?

   If you must initialize values, you do so line by line:

   DB 'Eric         '
   DW ?

   If there are many such initializations, you could define a
   macro INIT_PAYREC containing the DB and DW lines.
                                                             12-4

7. A86 does not support a couple of the more exotic features of
   MASM assembly language: the RECORD directive and its
   associated operators WIDTH and MASK; and the usage of
   angle-brackets to initialize structure records.  These
   features would have added much complication to the internal
   structure of symbol tables in A86; degrading the speed and the
   reliability of the assembler.  I felt that their use was
   sufficiently rare that it was not worth including them for
   compatibility.

   If your old program does use these features, you will have to
   re-work the areas that use them.  Macros can be used to
   duplicate the record and structure initializations.  Explicit
   symbol declarations can replace the usage of the WIDTH and
   MASK operators.


Compatibility symbols recognized by A86

A86 has been programmed to ignore a variety of lines that have
meaning to Intel/IBM/MASM assemblers; but which do nothing for
A86.  These include lines beginning with a period (except .RADIX,
which is acted upon), percent sign, or dollar sign; and lines
beginning with ASSUME, INCLUDE, PAGE, SUBTTL, and TITLE. If you
are porting your program to A86, and you wish to retain the
option of returning to the other assembler, you may leave those
lines in your program.  If you decide to stay with A86, you can
remove those lines at your leisure.

In addition, there is a class of symbols now recognized by A86 in
its .OBJ mode, but still ignored in .COM mode.  This includes
NAME, END, and PUBLIC.

Named SEGMENT and ENDS directives written for other assemblers
are, of course, recognized by A86's .OBJ mode.  In non-OBJ mode,
A86 treats these as CODE SEGMENT directives.  A special exception
to this is the directive

    segname SEGMENT AT atvalue

which is treated by A86 as if it were the following sequence:

    segname EQU atvalue
    STRUC

This will accomplish what is usually intended when SEGMENT AT is
used in a program intended to be a COM file.
                                                             12-5

Conversion of A86 Programs to Intel/IBM/MASM

I consider this section a bit of a blasphemy, since it's a little
silly to port programs from a superior assembler, to run on an
inferior one.  However, I myself have been motivated to do so
upon occasion, when programming for a client not familiar with
A86; or whose computer doesn't run A86; who therefore wants the
final version to assemble on Intel's assembler.  Since my
assembler/debugger environment is so vastly superior to any other
environment, I develop the program using my assembler, and port
it to the client's environment at the end.

The main key to success in following the above scenarios is to
exercise supreme will power, and not use any of the wonderful
language features that exist on A86, but not on MASM. This is
often not easy; and I have devised some methods for porting my
features to other assemblers:

1. I hate giving long sequences of PUSHes and POPs on separate
   lines.  If the program is to be ported to a lesser assembler,
   then I put the following lines into a file that only A86 will
   see:

      PUSH2 EQU PUSH
      PUSH3 EQU PUSH
      POP2 EQU POP
      POP3 EQU POP

   I define macros PUSH2, PUSH3, POP2, POP3 for the lesser
   assembler, that PUSH or POP the appropriate number of
   operands.  Then, everywhere in the program where I would
   ordinarily use A86's multiple PUSH/POP feature, I use one or
   more of the PUSHn/POPn mnemonics instead.

2. I refrain from using the feature of A86 whereby constants with
   a leading zero are default-hexadecimal.  All my hex constants
   end with H.

3. I will usually go ahead and use my local labels L0 through L9;
   then at the last minute convert them to a long set of labels
   in sequence: Z100, Z101, Z102, etc.  I take care to remove all
   the ">" forward reference specifiers when I make the
   conversion.  The "Z" is used to isolate the local labels at
   the end of the lesser assembler's symbol table listing. This
   improves the quality of the final program so much that it is
   worth the extra effort needed to convert L0--L9's to Z100--
   Zxxx's.

4. I will place declarations B EQU DS:BYTE PTR 0 and W EQU
   DS:WORD PTR 0 at the top of the program.  Recall that A86 has
   a "duplicate definition" feature whereby you can EQU an
   already-existing symbol, as long as it is equated to the value
   it already has.  This feature extends to the built in symbols
   B and W, so A86 will look at those equates and essentially
   ignore them.  On the old assembler, the effect of the
   declarations is to add A86's notation to the old language.
   Example:
                                                             12-6

     B EQU DS:BYTE PTR 0
     W EQU DS:WORD PTR 0
     MOV AX,W[0100]       ; replaces MOV AX, DS:WORD PTR 0100
     MOV AL,B[BX]         ; replaces MOV AL, DS:BYTE PTR [BX]


```
{% endraw %}

## A13.DOC

{% raw %}
```
CHAPTER 13   ASSOCIATED TOOLS


XREF Cross-reference and Symbol Listing Facility


XREF is a tool that creates a cross-referenced symbol table
listing of your program.

To invoke XREF, you must provide a program invocation line,
either typed to the console when the DOS command prompt appears,
or included in a batch file.  The program invocation line
consists of the program name XREF, followed by the name of a .SYM
symbol table file produced by A86 when you assembled your
program.  You do not need to give the .SYM extension. Note that
if you follow normal methodology, the name of the symbol table
file is the same as the name of the program.

XREF will obtain the list of source files from the symbols file,
read those source files, and create a listing file with the same
name as the .SYM file, but with a .XRF extension.

Prior to V3.12, XREF required the list of source files to be
explicitly given, and allowed you to specify the name of the
output file.  To retain compatibility with batch files invoking
the old XREF, the current version ignores anything on the command
tail after the symbols file name.  This means you can no longer
specify a different output file name.  Sorry about that-- I
couldn't think of any other way to be compatible without
overwriting somebody's source files with XREF output.  You can
always rename the file after XREF is completed.

For example, you can type XREF myprog to obtain the cross-
reference for the assembly that produced myprog.SYM.  The output
will be in the file myprog.XRF.

The output of XREF is an alphabetical listing of all the
non-local symbols in your program.  For each symbol, XREF gives
its type, the file in which it was defined, its value, and a list
of all procedures in which the file was used.  If you print this
file, you typically use the TCOLS tool to obtain a multi-column
listing from XREF's single-column output.

Note the use of procedure names to identify references -- this is
unique to the A86 package, and makes the cross-reference listing
truly readable.  Other cross-reference listings give either line
numbers, which are meaningless unless you go find the associated
line; or a file name, which doesn't give you as much useful
information.

Here is a more detailed description of the various pieces of
information provided for each symbol:

1. TYPE.  Labels are indicated by a colon immediately following
   the symbol name.  Special symbols such as macro names are
   denoted by an appropriate word such as "macro" in place of the
   value on the following line.  Other symbol types are described
   by one or two characters, following the symbol name.
   Possibilities for the first character are:
                                                             13-2

        m  for a simple memory variable
        +  for an index memory quantity
        c  for a constant
        i  for an interrupt-equate
        s  for a structure

    If there is a second letter, it is a size attribute: b for
    byte, w for word, f for far (or doubleword).

2. FILE in which the symbol was defined.  The name is stripped of
   its extension, which is presumably the same for all your
   source files.  The name is preceded by = or period, which
   denotes a definition of, not a reference to the symbol.

3. VALUE, given as 4 hex digits, on the line following the
   symbol.  For memory variables, this is the location of the
   variable.  For indexed quantities, this is the
   constant-displacement part of the quantity.  For structures,
   it is the size of the structure.  For interrupt equates, it is
   the number of the interrupt.

4. REFERENCES, given on indented lines following the symbol name.
   All occurrences of the symbol in your program produce a
   reference.  If the symbol is the first thing on a line, it is
   considered a "definition" of that symbol, the reference listed
   is the source file name.  The name is preceded by a period if
   the definition was via a colon (i.e., a label); it is preceded
   by an equals sign otherwise. If the symbol is not the first
   thing on the line, then it is not a definition.  The reference
   listing consists of the name of the last definition that XREF
   scanned (which, if your program is organized in a standard
   way, will be the name of the procedure in which the reference
   occurred.

   Observe that you must use the local-label facility of A86 to
   make this work.  If you don't use local labels as your
   "place-marker" symbols, the symbol XREF gives you will often
   be the name of the last "place-marker" symbol, not the name of
   the last procedure.

   To save space, duplicate reference entries are denoted by a
   single entry, followed by "*n", where n is the decimal number
   of occurrences of that entry.


EXMAC Macro Expansion Tool

There is a tool called EXMAC which will help you troubleshoot A86
program lines that call macros.  If you are not sure about what
code is being generated by your macro calls, EXMAC will tell you.

To use this tool, you must first assemble your macro definitions,
to produce a symbol table file.  A86 will produce a .SYM file
even if there were errors.  If the errors weren't too
catastrophic, the SYM file should be good enough to enable EXMAC
to do its job.
                                                             13-3

EXMAC can be used in two different ways.    First, it can be used
as an interactive program.  You invoke the program in this way by
typing just "EXMAC myprog", where myprog.SYM is the name of the
symbols file.  Then you can type in any number of macro-call
lines.  After each line, the program will display the expanded
program text it produces.  If the program does not think your
line is a macro call, it will simply echo the line back to you.
In this mode, you exit the program by typing control-Z at the
beginning of a line, then terminating the line with the ENTER
(RETURN on some computers) key.  On most IBM-compatible
computers, the control-Z code is also generated by the F6 key,
for convenience.

The second way of using EXMAC is to feed a source file to it.  It
will output the equivalent source file with the macros expanded.
You may then, if you wish, rename the new file as the original
source file, and assemble the new file.  This method is useful if
you get an error on a macro expansion line, and you don't know
where the error came from.   To use EXMAC in this second way, you
simply redirect standard input and output: "EXMAC myprog  <infile
>outfile".  With the redirection, EXMAC will take its input from
the file "infile" instead of the keyboard; and it will send its
output to the file "outfile" instead of the screen.  (If you are
not familiar with redirection of standard input and output, you
might want to read about it in Chapter 6, "Standard Input and
Standard Output", of the MS-DOS reference manual.)


A86LIB Source File Library Tool

There is a tool, A86LIB.COM, available only if you are
registered, that lets you build libraries of source files.  To
use A86LIB, you must first code and debug the A86 source files
that you wish to include in your library.  Then you issue the
command A86LIB followed by the names of the source files.
Wildcards are accepted; so you will typically want to gather the
source files into a single directory, and use the wildcard
specification.  For example, if you use the filename extension .8
for your source files, you can issue the command A86LIB *.8 to
create the library.

The library created consists of a catalog file, always named
A86.LIB, together with the source files that you fed to A86LIB to
create the catalog.

The following observations about A86LIB are in order:

1. Unlike object-code libraries, A86.LIB contains only symbol
   names and file names; it does not contain the code itself. You
   MUST retain the source files used to create A86.LIB, because
   A86 will read those files that it needs after consulting
   A86.LIB to read their names.
                                                             13-4

2. A86LIB records all non-local symbols that start a line, and
   are followed by a colon or an EQU.  (Recall that local symbols
   are those names consisting of a single letter followed by one
   or more decimal digits.)   A86LIB also records all symbols
   appearing on lines starting with the word PUBLIC.

3. If a symbol appears in more than one library source file, it
   will be logged for the first file A86LIB sees, and not the
   subsequent ones.  No error will be reported, unless and until
   A86 tries to assemble both files in one assembly, and sees a
   conflict.

4. A86LIB is simple-minded.  A86LIB does NOT recognize or expand
   macros; nor does it recognize conditional-assembly directives.
   This is because the library files do not stand by themselves;
   the macros and conditional-assembly variables being used might
   well be defined in the main program of the programs accessing
   the library files.

You may update A86.LIB by running A86LIB again; either with new
files or previously-recorded ones.  If A86LIB is given a file it
had already read in a previous run, then A86LIB marks all the
symbols it had logged for the file as deleted, before rereading
the file.  Those symbols that are still in the file are then
"unmarked".  Thus, symbols that have been deleted from the file
disappear functionally from A86.LIB, but still occupy space
within A86.LIB.  What I'm getting at is this: A86LIB will
tolerate alterations in library files quite nicely; but for
optimum storage efficiency you should delete A86.LIB and rebuild
it from scratch any time you delete anything from the library.
A86LIB is so fast that this is never very painful.


Using A86.LIB in A86 Assemblies

Once you have created a library with A86LIB, you access it simply
by calling the procedures in it from your A86 program.  When A86
finishes an assembly and sees that there are undefined symbols in
your program, it will automatically look for copies of A86.LIB in
the current directory (then in other directories, as described in
the next section).  If any of the undefined symbols are found in
the A86.LIB catalog, the files containing them are assembled.
You see this in the list of files output to the console by A86.

The subroutines in your library or libraries are effectively a
permanent part of the A86 language.  They can be called up
effortlessly in your A86 programs.  In time you can build up an
impressive arsenal of library modules, making A86 as easy to
program in as most high-level languages.
                                                             13-5

Environment Variable A86LIB

You can set an environment variable A86LIB to specify which
drives or subdirectories contain A86.LIB files.  The variable
consists of a sequence of path names separated by semicolons,
just like the PATH variable used by the operating system.  For
example, if you include in your AUTOEXEC.BAT file the line

   SET A86LIB=C:\bin\lib;\tools\a86lib

then A86 will look for A86.LIB in the current directory, then it
will look for C:\bin\lib\A86.LIB, then \tools\a86lib\A86.LIB. A86
will keep looking in all three catalog files, assembling the
appropriate source files from any or all of them, until there are
no more undefined symbols, or there are no more source files to
assemble.

For every symbol in an A86.LIB catalog, there is recorded the
name of the library file containing the symbol.  The library file
is assumed to be in the same directory as its A86.LIB file,
unless a complete path name (starting with \ or a drive
specifier) was fed to A86.LIB when A86.LIB was created.


Forcing a Library Search

You may force A86 to assemble library files before moving on to
more of your program's source files.  You do this by placing a
hash sign # (hex code 23) between file names in your invocation
line.  For example, suppose your program has two modules FIRST.8
and LAST.8.  FIRST.8 calls subroutines from your library; but you
need the library files assembled before LAST.8 is assembled. (You
might want this because LAST.8 allocates memory space beyond the
end of your program, which would be the end of LAST.8 if it were
truly the last module.)  You accomplish this by the invocation
line:

  A86 FIRST.8 # LAST.8

Note that there is never any need to force a library search at
the end of your program modules: A86 always makes a library
search there, if you have any undefined symbols.


Listings with A86

A86 does not produce a .LST file, or anything similar to it!  (We
now pause, to allow traditionalists to recover from their
swooning shock.)   OK, everybody back to consciousness?  Good.
Now let's all try to strip away our preconceptions, and look at
things with a fresh viewpoint.

In particular, let's consider what we use a listing file for, and
see how A86 meets those needs.  I've been programming for 20
years; I have generated literally tons of listings. Historically,
here's what I have used listings for:
                                                             13-6

1. To find out what my error messages are.  In the early days of
   Intel, the text editor was so bad that it was actually faster
   to march across the building and physically print the list
   file, than it was to use an editor to find error messages! But
   even with a fast editor, what a pain it is to go into the list
   file, enduring its 120-column wide format on your 80-column
   screen, copy down the errors on paper, then go back to the
   source file to find where the errors were.  Why doesn't the
   assembler just stick the messages directly into your source
   file, where you can view them and edit the source
   simultaneously?  That's what A86, and only A86, does, if you
   want it to.

2. To see what code was generated; those hexadecimal bytes at the
   left of the listing.  That was a real necessity, back in the
   days of hexadecimal debuggers.  There we were, furiously
   patching those hex object bytes.  We needed the listings to
   find our way around the program, while debugging.  Today, we
   have symbolic, disassembling debuggers, such as D86.  The
   power of today's debuggers means that you seldom need to look
   at hex object bytes.  If you do, the debugger can show them to
   you.

3. To get a symbol-table listing.  The necessity of this
   diminishes a great deal when you have a SYMBOLIC debugger; but
   I still like to have a listing from time to time.  So I have
   devised a separate program, XREF, that goes through another
   pass of the source file(s), and creates the most useful
   cross-reference listing.

   You may ask, "Why am I being forced to essentially re-assemble
   my code to get a symbol table, when other assemblers will give
   it to me in the original assembly?"  Don't be fooled.  Those
   other assemblers go through all your source files twice, or
   even three times.  They just do it behind your back, every
   time you want an assembly.  That's one reason why my assembler
   is so much faster than everyone else's.

4. To just look at the code.  I have often in the past needed to
   see that program, spread out on paper, just to get a handle on
   what the program is doing.  But I have needed this less and
   less lately.  Why?  For two reasons.  First, text editors have
   improved.  It's much, much easier than it was before to cruise
   through a file on the screen.  Second, my programs have
   adapted to the screen-viewing methodology.  Almost
   subconsciously, I have started making the conceptual "chunks"
   of my code fit into 1 or 2 24-line screens, rather than 1 or 2
   60-line pages.  This, of course, makes better, more modular
   programs.  (Spaghetti tends to untangle when you chop it up.)
   It's gotten to the point where I can develop (and have
   developed) a 5000-line application, fully debugged, without
   ever making a listing!
                                                             13-7

5. For archival purposes.  I still do this; you should never put
   100% trust in magnetic media.  But I've stripped away the
   reasons for having anything but the source code and the symbol
   table.  So I just copy the source files and the
   cross-reference listing to the printer.  I haven't looked at
   the listings too much; so I haven't bothered with pagination
   control.  If you want to, you can insert form feeds into your
   source; A86 will ignore them.  Or, you can write a simple
   listing tool that recognizes the PAGE directive; A86 ignores
   that directive, also.

As a partial remedy to those who have not been convinced by the
above arguments, I now have a D86 command that sends a
disassembly to a file.  The disassembly is formatted in the style
of an assembler listing file, with locations and hex codes at the
left.  See the D86 manual for details.


Mimicking Tool: FAKE.EXE

As of this writing, Turbo C is aware only of the existence of
Microsoft's MASM for assembling source files it generates.  I
hope to persuade Borland to provide a switch to Turbo C that
causes it to invoke A86 directly.  Until that happens, I offer
the tool FAKE.EXE, that convinces Turbo C that A86 is really
MASM.

To use FAKE.EXE, it must be renamed MASM.EXE in your disk system.
I would have named it MASM myself, except that

1. Bill Gates would probably get mad at me if I did, and

2. You need to decide what to do with your real MASM if you have
   it, before installing FAKE.  You could either place FAKE
   (named MASM.EXE) into the individual directories containing
   Turbo C programs, or you can rename MASM to something like
   MSM.EXE or REALMASM.EXE.

Having renamed FAKE.EXE to MASM.EXE, you may now use the Turbo
C's switch, -B, that allows you to place A86 statements into your
C program.  You don't need to worry about the gory details of
what FAKE does.

If you like gory details, here they are: FAKE filters the command
line handed to it, replacing switches:

   /D becomes =
   /ml becomes +c
   /mx becomes +C
   /E becomes +f

FAKE also eliminates the semicolon, appends .ASM to the source
file name, and turns on the O and S switches.  It then feeds the
resulting filtered command line to A86 for assembly.


```
{% endraw %}

## A14.DOC

{% raw %}
```
CHAPTER 14   DESCRIPTIONS OF A86 ERROR MESSAGES


~01 Unknown Mnemonic~

   Most assembly-language lines start with a built-in instruction
   mnemonic such as MOV or ADD.  The only circumstances in which
   a line can start with non-built-in symbol are if the symbol is
   a macro name or INT equate, or if the symbol is now being
   defined, as indicated by a limited set of following symbols: a
   colon, EQU, DB, DW, etc.  This line started with a
   non-built-in symbol which did not fall into any of the above
   categories.  You might have misspelled an instruction
   mnemonic, or misspelled the following word.

~02 Jump > 128~

   The destination operand of a conditional jump must be a label
   within 128 bytes of the end of the instruction.  (Precisely,
   from -128 to +127 from the next instruction, which is from
   -126 to +129 from the start of the conditional jump.)   This
   error is reported in three possible places:

    1. At the conditional jump.  The operand is more than 126
       bytes before the jump, or the operand is not a label (e.g.
       you tried an indirect conditional jump through a variable,
       which isn't allowed)

    2. At a label definition.  In this case, you use your editor
       to search backwards for references to the label.  One or
       more of the earliest conditional jumps found are too far
       away.

    3. At a RET, RETF, or IRET instruction.  You use your editor
       to search backwards for that flavor of RET used as the
       operand to a conditional jump (the A86 conditional return
       feature). The earliest such jumps not satisfied by a
       previous RET are too far away.

   You usually correct this error by rearranging your code, or
   (better) by breaking intervening code off into subroutines. If
   desperate, you can replace "Jcond" with "IF cond JMP".

~03 [BX+BP] And [SI+DI] Not Allowed~

   The 86 instruction set does not support the combinations of
   indexing registers indicated in the error message.  In
   previous versions of A86, this error was reported in other
   illegal operand combinations; I've attempted to change other
   cases to error 14.  If you ever find otherwise, let me know.

~04 Bad Character In Number~

   All numbers, and only numbers, start with a decimal digit.
   (It's illegal to have a symbol begin with a digit; e.g.
   01MYVAR .)   You have coded something that starts with a
   decimal digit but does not have the correct format for a
   numeric constant.  See Chapter 8 for detailed descriptions of
   the formats of both integer and floating constants.
                                                             14-2

~05 Operands Not Allowed~

   When this error is reported it usually means that you have
   provided something more than just the mnemonic for an
   instruction that does not have any operands: e.g., PUSHF,
   STOSB, STC, FLDPI, CLTS.  It's also called in other contexts
   when the assembler expects nothing more on the line; e.g.,
   NAME with more than just a single name following, or something
   following the word ENDS.

~06 Symbol Required~

   This is reported in numerous situations where A86 requires
   some sort of symbol: either a built-in assembler mnemonic, or
   a symbol you define.  (It's possible that a number or some
   punctuation marks are legal in the context, and that they have
   already been checked for.)  Instead of a symbol, a punctuation
   mark or out-of-context number was seen.  The contexts in which
   this error can occur include:

    * the start of a line (characters hex 3C or greater)

    * after the following at the start of a line: a symbol you
       define, #, #IF, IF, CODE, or DATA

    * where operands to the following directives are expected:
       NAME, PUBLIC, EXTRN, GROUP, SEGMENT

    * after ">" denoting a local-label forward reference

~07 Local Symbol Required~

   This is reported when something other than a generic local
   label (letter followed by one or more digits) follows a ">"
   mark, which denotes a local-label forward reference.  If you
   meant "greater than" you use the GT operator instead.

~08 Too Many Operands~

   This is reported for instructions and directives requiring a
   limited number of operands, for which the limit is exceeded.
   Since operands are separated by commas, you have too many
   commas-- possibly an extra comma between the mnemonic and
   first operand, or at the end of the operands.

~09 Constant Required~

   This is reported for instructions and directives (ENTER, RET,
   RADIX, etc.) requiring operands that are an immediate constant
   number; and for expression operators (*, /, SHL, OR, NOT, BY,
   etc.) whose operands must be constant.  In some cases a
   limited number of forms other than constants are acceptable,
   but the assembler has already checked for and not found those
   possibilities.

~10 More Operands Required~
                                                             14-3

   This is reported for instructions requiring two operands, for
   which you have provided no operands or only one operand.  You
   might have left out the comma separating the operands.

~11 Constant/Label Not Allowed~

   This is reported when you have given a constant number in a
   place where it isn't allowed-- usually as a destination
   operand to an instruction, such as the first operand to a MOV
   or ADD.  If you meant the operand to be the memory location
   with the constant offset, you must convert the type by
   enclosing the operand in brackets [ ] or appending a
   size-specifier (B, W, D, Q, or T) to the number.

~12 Segment Register Not Allowed~

   This is reported when you have used a segment register in an
   instruction where it isn't allowed.  The only instructions
   allowing segment registers as operands are MOV, PUSH, and POP.
   You can't, for example, ADD into a segment register.  If you
   want to do anything with a segment register value, you have to
   MOV it into a general register, perform the operation, then
   MOV the result back to the segment register.

~13 Byte/Word Combination Not Allowed~

   This is reported in a two-byte instruction in which one
   operand is byte-sized and the other word-sized; or in an
   instruction with a byte-sized destination and an immediate
   source whose value is not byte-sized (high byte not 0 or 0FF).
   If one of the operands is a memory variable of the wrong size,
   you either change the declaration of the variable (DB to DW or
   vice versa) or override the size of the variable in this
   instruction only, by appending a " B" or " W" to the memory
   operand.

~14 Bad Operand Combination~

   This is reported when you attempt to add or combine terms in
   an operand expression that do not allow combination.  An
   example of this would be DT 3.7+BX.  Only constants can be
   added to floating point numbers.

   This is also reported when you have two operands that are
   mismatched in size, and the mismatch is something other than
   Byte vs. Word. Example: MOV AL,D[0100].

~15 Bad Subtraction Operands~
                                                             14-4

   This is reported when you attempt to subtract terms in an
   operand expression that do not allow subtraction, or if the
   right-hand side to a subtraction is missing.  If the
   right-hand side to a subtraction is a non-forward-referenced
   constant, then the left side can be almost anything.
   Otherwise, the operands must match; e.g., labels from
   relocatable segments must be in the same segment (in which
   case the answer is an absolute constant; namely, the size of
   the block of memory between the two labels).

~16 Definition Conflicts With Forward Reference~

   This error occurs when the assembler has previously guessed
   the type of a forward-referenced symbol in order to determine
   what kind of instruction to generate, and the guess turned out
   to be wrong.  The error is reported at the time the symbol is
   defined.  For example, when A86 sees MOV AX,FOO, it will
   assume FOO is an immediate value.  This error is reported if
   FOO turns out to be a word variable: FOO DW 0.  You need to
   search backwards from the error message, to references of FOO,
   and specify the type you intend to be used: MOV AX,FOO W.  If
   you really did intend to load the offset of FOO and not the
   memory contents, you can code MOV AX,OFFSET FOO to make the
   error message go away.

~17 Divide Overflow~

   This is reported when the right-hand side to a division or MOD
   operation is zero, or when the result of a division by a large
   (>64K) number is still large.

~18 Same Type Required~

   This is reported when the two operands to a relational
   operator (EQ, NE, GT, GE, LT, or LE) are of different types.
   The operands to a relational operator ought to be both
   absolute integer constants, or labels in the same segment.

~19 CS Destination Not Allowed~

   This is reported if you attempt to specify CS as the
   destination (first) operand to MOV, or as an operand to POP.
   The only acceptable way to load CS on the 8086 is via a far
   JMP, CALL, RETF, or IRET instruction.  The MOV and POP forms
   don't make much sense, so they were outlawed by Intel.

~20 Left Operand Not Allowed~

   This is reported if you have a left-hand side to an expression
   operator that expects only a single operand to its right.
   Those operators are BIT, NOT, OFFSET, TYPE, LOW, HIGH, SHORT,
   LONG, and INT.  (The mnemonic INT is considered an operator
   e.g., in MSDOS EQU INT 33.)  For example, you would get this
   error for the expression 1 NOT 2.

~21 Bad Single Operand~
                                                             14-5

   This is reported if the operand is inappropriate for an
   instruction INC, DEC, PUSH, POP, NOT, NEG, MUL, IMUL, DIV, or
   IDIV, that takes a single operand.  You should look up the
   instruction in the chart in Chapter 6, to determine the proper
   operand forms allowed.

~22 Bad DUP Usage~

   This is reported when a DUP construct occurs out of context
   (e.g. in an instruction operand instead of a data
   initialization); when the total number of bytes generated
   would push the output pointer beyond 64K; or when there is
   improper syntax for a DUP.  See Chapter 9 for the description
   of correct DUP usage.

~23 Number Too Large~

   This is reported when a numeric constant is too large for the
   assembler to store in its operand buffers-- the limit for
   integers is 2**80-1 = 1208925819614629174706175 decimal. The
   error is also given when the exponent part of a floating point
   constant is greater than 65535 in magnitude.

~24 SEGMENT or ENDS Required~

   This is reported if a line beginning with one of the two A86
   keywords CODE or DATA does not continue with one of the
   keywords SEGMENT or ENDS.  If you meant CODE or DATA to be a
   symbol you define, you have to change the name to something
   else, like _CODE or _DATA.

~25 Bad CALL/JMP Operand~

   This is reported if the operand to a call or jump instruction
   cannot be taken as a jump destination.  This occurs if the
   operand is missing, or if it has a size inappropriate for
   address pointers: byte, quadword, or ten-byte.  The error also
   occurs if the operand is a constant number, and you are
   assembling to an OBJ format.  In OBJ format anything jumped to
   within a segment must be specified as a label within some
   segment.

~26 Memory Doubleword Required~

   This is reported if the second operand to an LDS, LES, or
   BOUND instruction is of the wrong type.  The operand should be
   a doubleword memory quantity; but A86 will accept a word
   memory variable or a memory variable of unspecified size.

~27 Bad IN/OUT Operand~

   This is reported when the operands to IN or OUT do not have
   the correct form.  See Chapter 6 for the limited set of forms
   for these instructions.  One of the operands must be AL or AX;
   the other must be DX or a constant between 0 and 255.

~28 type Required~
                                                             14-6

   This is reported when a symbol given in an EXTRN list is not
   followed one of the type names B, W, D, Q, T, F, NEAR, or ABS.
   The more verbose synonyms BYTE, WORD, DWORD, QWORD, and TBYTE
   are also acceptable.

~29 Bad Rotate/Shift Operand~

   This is reported when the count (second) operand to a rotate
   or shift instruction is not appropriate: it should be either
   the name CL or a constant less than 32.  The instructions
   requiring this are ROL, ROR, RCL, RCR, SHL, SHR, SAL, SAR, and
   the NEC-specific instructions SETBIT, TESTBIT, CLRBIT, and
   NOTBIT.

~30 Byte-Sized Constant Required~

   This is reported in contexts where only a byte-sized absolute
   constant is acceptable.  Those contexts are: the operand to a
   BIT or INT operator in an expression; the required operand to
   an INT or CALL80 instruction; the optional operand to an AAM
   or AAD instruction.

~31 Instruction In Data Segment Not Allowed~

   There are only a limited number of directives allowed with a
   STRUC or a DATA segment.  This error is reported when any
   instructions or disallowed directives are seen in one of these
   restricted environments.  You have possibly neglected to
   provide an ENDS directive, returning you to normal assembly.
   In a STRUC, the only directives allowed are DB, DW, DD, DQ,
   DT, another STRUC, ENDS, EQU, SEGMENT, GROUP, MACRO, LABEL,
   EVEN, and ORG.  The DATA segment allows the same directives,
   plus PROC, ENDP, DATA, and CODE.

~32 Bad String~

   This is reported when you start a quoted string, and do not
   provide the closing quote in the same line.  You might have
   left it out; or you might not have intended to code a string
   at all, and accidentally inserted a single- or double-quote
   mark in your line.  Or you might have intended a string
   containing an end-of-line, which isn't allowed.  You must
   instead close the string and code hex bytes 0D,0A to represent
   an end-of-line.

~33 Bad Data Operand~

   This is reported if an inappropriate operand is seen in a data
   initialization (DB, DW, DD, DQ, or DT) directive.  Examples of
   this are indexed quantities such as [BX], non-byte quantities
   in a DB, or floating point constants in a DB or DW.

~34 Index Brackets Required~
                                                             14-7

   This is reported if the name of a register is given in an
   addition/combination operation, but the register is not
   enclosed in square brackets.  The only registers that may be
   added are those presented as indexing registers.  For example,
   don't code BX+2, code [BX+2].

~35 Bad Character~

   This is reported when a punctuation mark or other non-standard
   character is seen where it is not expected.  The characters
   causing this error at the beginning of a line are digits, and
   the marks  / - , + * ( ) & " !   --  other illegal marks at
   the start of a line cause error 6, Symbol Required.  The
   characters causing this error elsewhere (i.e. within operands)
   are all characters except letters, digits, and the marks [ ] +
   - ' " > ( ) * . / :

~36 String > 2 Not Allowed~

   This is reported when a string with 3 or more characters is
   seen outside of the places where such a string is allowed (in
   a DB directive, macro operand, or relocatable SEGMENT
   directive).  One- and two-character strings are treated as
   simple numeric constants; but longer strings require special
   handling and are allowed only in the places mentioned.

~37 Misplaced Built-In Symbol~

   The symbol just before this error message is an A86 built-in
   symbol, that is in a place where it doesn't belong.  Examples
   of this are: mnemonics such as MOV occurring in operands; and
   symbols that aren't mnemonics such as LT occurring at the
   start of the line.  If you thought you could define the symbol
   to the left of this message for your own use, you were wrong.
   You need to change the symbol to something else: TEST to
   _TEST, for example.  If you'd like to know the built-in
   meaning of the symbol, you can look it up in Chapter 16.

~38 Segment Combination Not Allowed~

   This is reported when you attempt to add or combine a segment
   or group name with another quantity.  A86 currently doesn't
   allow this.

~39 Bad Index Register~

   This is reported when you attempt to use a register other than
   SI, DI, BX, or BP for indexing.  Those are the only registers
   that the 86 architecture allows you to place inside brackets,
   to address memory.

~40 Conflicting Multiple Definition Not Allowed~
                                                             14-8

   This is reported when you define a symbol in two places in
   your program, and the definitions aren't the same.  Most often
   you have simply forgotten you already had a symbol somewhere
   of the same name, and you need to change the name of one of
   the two symbols you've defined.  A86 allows the re-use of a
   symbol if it is a generic local label (a letter followed by
   one or more digits), or if is defined with = instead of EQU.
   A86 also allows the redefinition of a symbol if it has exactly
   the same value (e.g. ESC EQU 01B in two places in your
   program).  See the section "Duplicate Definitions" in Chapter
   9 for a detailed discussion of this feature.

~41 ENDS Has No Segment~

   This error occurs when A86 is assembling to an OBJ file, and
   it sees an ENDS at the outermost level of segments-- the ENDS
   has not been preceded by a matching SEGMENT directive.  You
   need to look over your SEGMENT and ENDS directives, to get
   them to match up properly.

~42 Bad IF Operand~

   This is reported when an IF is not followed by one of the
   flag-mnemonics (e.g., E, Z, NC, AE, etc.) that follow "J" in a
   conditional jump instruction.  Most likely the line is a
   conditional assembly line intended for another assembler.  In
   A86, conditional assembly lines begin with a hash sign #.  So
   you change IF, ELSE, ENDIF to #IF, #ELSE, #ENDIF.  You may
   also need to change the condition following IF: IF FOO EQU 0
   becomes #IF !FOO; IFDEF FOO becomes simply #IF FOO. IF
   (expression) must be replaced by the two lines C1 EQU
   (expression) followed by #IF C1 .  See Chapter 11 for the
   details of A86's syntax for conditional assembly.  See Chapter
   5 for the way A86 uses IF when it doesn't have a hash sign #.

~43 Parenthesis/Bracket Mismatch~

   This is reported when there is a lack of balance of
   parentheses ( ) or brackets [ ] in an operand expression--
   there are too many left-sides, too many right-sides, or the
   brackets are interleaved illegally: ( [ ) ].  Most likely you
   have left out an opening or closing parenthesis/bracket in a
   complicated expression; or a spurious extra ( ) [ or ] has
   crept into your code.

~44 Bad Forward Reference Combination~

   This is reported when you try to use forward references in
   expressions that are too complicated for A86 to handle.  You
   can add or subtract constants from forward-referenced symbols;
   but you can't subtract a forward-referenced symbol from
   anything, and you can't add two forward references together.
   You can typically get around restrictions in forward reference
   expressions by moving the expression down to an EQU directive
   after the point that the symbols are defined, and making a
   forward reference to the EQUated symbol that represents the
   evaluated expression.
                                                             14-9

   This error is also reported in some situations involving
   relocatable symbols in OBJ mode -- these symbols are forward
   references in the sense that they are resolved only at link
   time.

~45 Is It Byte Or Word?~

   This is reported when you have a memory operand of unspecified
   size, and A86 needs to know whether the operand is byte-sized
   or word-sized, in order to generate the correct instruction
   form.  All you need to do is to append a B or a W to the
   operand, to specify the size you want.  For example, if you've
   coded INC [BX], you need to decide between INC B[BX] and INC
   W[BX].  If you've coded ADD FOO,4 where FOO is a forward
   reference, you need to specify ADD FOO B,4 or ADD FOO W,4 .

~46 Bad #-Construct~

   This is reported if, within a macro definition, a # is seen
   that is not followed by one of the allowed macro parameter
   constructs described in Chapter 11.  Even in quoted strings,
   the hash sign # must be literalized via ## if it is to be
   taken as-is.

   If you mistakenly provide a macro-loop variable (#W, #X, #Y,
   or #Z) outside of any loop defining that variable, this error
   is detected when the macro is expanded, even though the error
   is in the macro definition.

   The error is also reported if # occurs at the beginning of a
   line, and is not followed by IF, ELSEIF, ELSE, or ENDIF; or if
   a conditional assembly parameter is a built-in mnemonic e.g.
   #IF MOV .  See Chapter 11 for the correct usage of the hash
   sign in both macros and conditional assembly.

~47 #ENDIF Required~

   This is reported if you have an #IF without a corresponding
   #ENDIF before the end of the file (or the end of the macro
   expansion if the #IF was assembled during a macro expansion).
   When this message appears at the end of a file, you need to
   search backwards for #IFs, to find the unclosed block.

~48 #EM Required To End Macro~

   This is reported if you have a MACRO without an end.  In A86,
   the end of a macro is given by #EM.  Most likely your file was
   written for another assembler, and you need to convert macro
   definitions.  You need to change all ENDM directives to #EM.
   You also need to eliminate the named parameters from the MACRO
   line, and replace occurrences of the named parameters with #1,
   #2, #3, etc.  The & concatenation operator can be dropped. See
   Chapter 11 for a full description of A86's macro syntax.

~49 End Delimiter to COMMENT Required~
                                                            14-10

   This is reported when the portion of code skipped in a COMMENT
   directive has run to the end of the file, without the closing
   delimiter being found.  You need to search backwards from the
   end of the file to find the COMMENT directive, figure out
   where you intend the directive to end, and duplicate the
   delimiter (the first non-blank following COMMENT) at that
   end-point.  See Chapter 4 for a full description of the
   COMMENT directive.

~50 Reg,Mem Required~

   This is reported when you have an improper combination of
   operands for a MOV, XCHG, or general arithmetic instruction
   such as ADD, SUB, CMP, XOR, etc.  Most often you have
   attempted to provide two memory operands: MOV VAR1,VAR2 or ADD
   VAR1,VAR2.  One of the operands must be a register.  You can
   effect the memory-to-memory operation by using a register in a
   two-instruction sequence; for example, MOV AX,VAR2 followed by
   ADD VAR1,AX .  For convenience, A86 lets you code the sequence
   with the single line ADD VAR1,AX,VAR2.

   If you don't wish to clobber the contents of any registers,
   and the operands are word-sized, you may PUSH the source
   operand and then POP to the destination operand: PUSH VAR2
   followed by POP VAR1.

~51 Segment Override Not Allowed Here~

   For compatibility with other assemblers, A86 allows segment
   override operators CS:, DS:, ES:, or SS: within expressions in
   instruction operands.  The override informs the assembler that
   the named segment register is to be used for the memory
   reference, so that the assembler might generate a segment
   override opcode byte.  This error is reported when a segment
   override operator occurs out of context: in A86's special
   three-operand form for MOV or arithmetic instructions; within
   a DATA segment or STRUC, or in an EQU directive.  You might
   encounter the last case if you're porting a program written
   for another assembler.  If so, you might have to provide
   explicit overrides wherever the EQUated symbol is used.  It's
   possible, though, that the override is provided only to
   satisfy the other assembler's segment checking mechanism, and
   no overrides are generated at all.  In that case, you can just
   eliminate the override operator.

~52 Byte Operand Required~

   This is reported when an operand to one of the NEC-specific
   instructions STOBITS, LODBITS, ROL4, ROR4 is of the wrong
   type.  STOBITS and LODBITS require the first operand to be a
   byte-sized register and the second operand to be either a
   byte-sized register or an immediate constant.  ROL4 and ROR4
   require the only operand to be a byte-sized register.

~53 Word Register Required~
                                                            14-11

   This is reported when the first operand to any of the
   instructions LDS, LES, LEA, BOUND, IMUL, LAR, or LSL is not a
   word-sized general register (AX,BX,CX,DX,SI,DI,BP, or SP).

~54 Floating-Point Chip Required~

   This is reported when you attempt to assemble a program with
   floating point constants or floating point expressions, and
   you do not have a floating point chip (8087 or 287) in your
   computer system.  A86 uses the 87 to assemble constants and do
   arithmetic.  It's time for you to buy a chip and install it in
   that empty socket!

~55 Bad Floating-Point Operand~

   This is reported when an operand to a floating point
   instruction is not of the correct type.  See Chapter 7 for the
   correct forms for the instruction you're coding.  Some
   possibilities for the error are:

   * a memory operand has unspecified size, or a size not
     compatible with the instruction.  Integer instructions
     (FIxxx) require a W or D operand; floating arithmetic
     instructions require a D or Q operand.

   * you've tried to specify an 86 register instead of a memory
     operand.

   * you've tried A86's special FLD (constant) form in OBJ mode.
     Sorry, I support this only for COM mode (mainly for D86).

   * you've specified two register numbers (0 through 7), but
     neither is 0.

   * you've tried one of the disallowed forms FCOM i,0 or FCOMP
     i,0

~56 Constant 0--7 Required~

   This is reported if a constant number operand to an 87
   instruction, which is supposed to represent an 87 stack number
   (0 through 7), does not have the right value; i.e., it's not
   an integer, or it's not in the range 0 through 7.

~57 Memory Operand Required~

   This is reported when an operand to a floating-point or a 286
   protected-mode instruction must be a memory operand, and the
   operand you've provided isn't one.  See Chapters 7 (for
   floating) or 6 (for protected) for the correct syntax of the
   instruction you're coding.

~58 Segment Or Struc Name Not Allowed~
                                                            14-12

   This error occurs most often when you are attempting to
   assemble as a COM program a file intended to be an EXE
   program.  The COM format does not allow you to refer to the
   value of a named segment, or to make a FAR pointer out of a
   label within the program.  You should either use the +O option
   to produce an OBJ file, or simply eliminate the statements
   intended to set the segment registers-- COM programs are
   started with all segment registers already pointing to the
   same value.

   This error is also reported when you provide the name of a
   structure, or the name of an INT equate, in a place where a
   register or memory operand is expected.

~59 Word Operand Required~

   This is reported when something other than a word-sized
   operand is provided for one of the 286 instructions ARPL,
   SLDT, LLDT, STR, LTR, VERR, VERW, SMSW, or LMSW.

~60 Circular Definition Not Allowed~

   This is reported when a chain of macro calls or references to
   undefined symbols reaches a depth of 1024.  A86 assumes that
   it is in an infinite loop: for example, FOO EQU FOO; or BAZ
   MACRO containing an uncontrolled call to BAZ within itself.


~61 Overlapping Local Not Allowed~

   Recall from Chapter 5 that when you use a local label symbol
   twice, you must distinguish a reference to that symbol by
   prepending a > before the symbol's name if the reference is a
   forward reference.  You get this error if you have followed
   such a forward reference with another reference, without the
   >, before the next incaration of the symbol is defined.
   There's a danger that you intended the reference to be to the
   previous incarnation, which A86 doesn't allow. Example:

   L1:         ; first incarnation of L1
     JNZ >L1   ; reference to second incarnation
     JMP L1    ; ERROR-- which incarnation are we referring to?
   L1:         ; second incarnation of L1

   If you intended the JMP to be to the second L1, you should
   prepend a > to the L1, just like the JNZ.  If you intended the
   JMP to be to the first L1, you must change one of the two
   label names so that their ranges don't overlap.

~62 ORG Required in first DATA SEGMENT~
                                                            14-13

   Previous versions of A86 allowed a default starting offset of
   0 for the DATA SEGMENT.  I hope in the future to change this
   default to the offset immediately following the program (if it
   is a COM file).  As a transition, I am outlawing ORGless DATA
   segments, so if it was your intention to start at offset 0,
   you must now state so explicitly with an ORG 0 following the
   first DATA SEGMENT directive in your program.

~97 Object Overflow~

   This is reported when the assembler runs out of room in its
   output object-code segment (which also holds records used to
   resolve forward references).  This will happen only if your
   object output nears the object capacity, which is 64K if a
   full amount of memory (about 200K) is available to the
   assembler.  If you have a limited amount of memory, you should
   increase the memory available to A86, by buying another board,
   or by having fewer memory-resident programs installed when you
   run A86.  If you are assembling OBJ files, you can break the
   program into smaller assembled modules.

   It's conceivable that this error could result in a D86
   session, when you are using patch-memory mode to type in an
   extremely complicated program.  In that case, you should type
   the program into a text file instead, and use A86 to assemble
   the text file.

~98 Undefined Symbol Not Allowed~

   This error should occur only during a D86 debugging session,
   when you type an immediate-execution assembly language line
   containing a symbol not in the table (typically a mistyping on
   your part).  D86 allows you to add symbols to the table only
   when you are in patch-memory mode (reached by pressing the F7
   key).

~99 Symbol Table Overflow~

   This is reported when the symbol table runs out of space. It's
   unlikely that you'll ever run into this error, since A86's
   capacity is thousands of symbols.  If you do, you'll need to
   reduce the number of symbols in your program.  One way to do
   so is to replace all place-marker symbols with local labels in
   a limited range (like L0--L9).  See Chapter 5 for a
   description of A86's local label facility.


```
{% endraw %}

## A15.DOC

{% raw %}
```
CHAPTER 15   RELEASE HISTORY OF A86

Virtually all releases of A86 include bug fixes.  If I don't say
anything about a release, then it was essentially only bug fixes.

V2.10  June 1986.  Initial public release of the MSDOS version of
       A86.  The last previous version ran under the Xenix
       operating system on the Altos series of computers. For
       this "public offering", I cleanup up the invocation
       syntax, upgraded the error-reporting facility, and started
       added compatbility features.

V2.11  June 1986.  Added RADIX command.

V2.13  July 1986.  Reduced memory requirements.

V2.15  August 1986.  Implemented COMMENT directive for
       compatibility; added floating point instruction set and DQ
       and DT directives.

V2.16  August 1986.  Made internal changes to accommodate forward
       referencing in D86's patch-memory mode.

V2.18  November 1986.

V2.90  March 1987.  Test release for .OBJ support.

V3.00  April 1987.  Major upgrade:

       * added support for linkable .OBJ files

       * added long constants and floating-point constants

       * added A86LIB library tool and A86LIB support

       * added ability to forward-reference variables, and to add
         to and index forward references

       * added 286 protected-mode and NEC-specific instructions

       * added options not to insert errors in source, long
         forward JMP for local labels, and default decimal

       * added "=" equate compatibility feature

       * added double-quoted strings compatibility feature

       * parentheses no longer required for most DUP right
       operands

V3.01  April 1987.  Minor enhancements:

       * original file had been renamed to no extension, not OLD

       * segment overrides outlawed in 3-operand MOV

       * forward references outlawed in numeric-operand INC/DEC
                                                             15-2

       * add "S" suppress-symtab and "C" case-sensitivity
       switches

V3.02  May 1987.

V3.03  May 1987.

V3.04  May 1987.

V3.05  June 1987.  Added the following features for MASM
       compatibility:

       * recognition of SEGMENT AT in non-OBJ mode

       * ignore END directive in non-OBJ mode

V3.07  July 1987.  Added features necessary for Turbo C support
       (+c, +f, +F switches; ignore DGROUP:). Generalized the
       environment variable to include macro files.  Added the
       ampersand feature.  Made = compatible with MASM.

V3.08  July 1987.

V3.09  August 1987.  Legalized MOV segreg,immediate. Duplicated
       MASM functionality for case sensitive mode (A86's +C
       switch).  Added ability to make aliasing EQU to an
       external name.  Made FAKE.EXE into an honest EXE file,
       instead of a COM masquerading as EXE.

V3.10  September 1987.  Added a printed version of the manual.
       Added +c switch, reinstating case sensitivity during
       assembly, but this time without sensitivity in built-in
       symbols.

V3.11  November 1987.  Added the SEG operator for compatibility
       with Turbo C, and made it possible to define relocatable
       segments called CODE, DATA, or STACK, for compatibility
       with Turbo Pascal.

V3.12  February 1988.  Added features:

       * Changed the format of SYM files, so that they are much
         smaller yet hold more information.  This allows D86,
         XREF, and EXMAC to work better with A86.

       * A86 now allows an aribtrary expression to appear in a
         conditional assembly (#IF) directive.

       * Added macro features, for compatibility: #V value
         operator, #S size operator, #N number operator, #EX exit
         directive, string comparison of operands, and large
         operand numbers (up to 255).

       * To overcome a Turbo C bug, allowed embedded blanks in
         symbols declared via an EXTRN directive.  I dropped this
         feature in V3.13; see below.
                                                             15-3

V3.13  March 1988.  Made memory management more flexible, to
       allow A86 to run with less available memory.  Added a
       small feature to ease Turbo C compatibility: if there is a
       segment override to a forward refernce, the reference is
       assumed to be a variable, not an immediate value.  This
       eliminates the need for the EXTRN kluge of the above
       paragraph, so I dropped that kluge.

V3.14  March 1988.

V3.15  May 1988.  Allowed up-arrow in place of equals-sign in
       invocation equates.  Allowed MOV mem,mem and XCHG of a
       variety of new forms, generating sequences of instructions
       to implement the unavailable forms.

V3.17  June 1988.

V3.18  July 1988.  For compatibility: allowed OFFSET segname, and
       implicitly converted a constant with a segment override
       into a memory type.

V3.19  August 1988.

V3.20  July 1989.  Made internal redesign of handling of size-
       override operators (B, W, D, F, etc.) so they are handled
       more consistently.  Outlawed first DATA SEGMENT without a
       strating ORG statement, forcing an explicit ORG 0 for
       future compatibility.  Allowed more forward references,
       including immediate-byte quantities in all applicable
       instruction forms.

V3.21  August 1989.

V3.22  January 1990.  Added support for additional coprocessors:
       the 80387 and the IIT-2C87.  Made numerous minor changes
       to enhance MASM-compatibility.


```
{% endraw %}

## A16.DOC

{% raw %}
```
CHAPTER 16  A86 RESERVED SYMBOLS

$        Current assembly pointer
?        Uninitialized memory slot
AAA      ASCII adjust addition
AAD      ASCII adjust division
AAM      ASCII adjust multiply
AAS      ASCII adjust subtract
ABS      EXTRN specifier
ADC      Add with carry
ADD      Instruction
ADD4S    NEC Instruction
AH       Byte register
AL       Byte register
AND      Instruction/operator
ARPL     286 Prot Instruction
ASSUME   Ignored, compatibility
AT       SEGMENT specifier
AX       Word register

B        Byte memory specifier
BH       Byte register
BIT      Bit-mask operator
BL       Byte register
BOUND    Instruction
BP       Word register
BX       Word register
BY       Bytes-combine operator
BYTE     Byte memory specifier

CALL     Instruction
CALL80   NEC Instruction
CBW      Convert byte to word
CH       Byte register
CL       Byte register
CLC      Clear carry
CLD      Clear direction
CLI      Clear interrupt
CLRBIT   NEC Instruction
CLTS     286 Prot Instruction

CMC      Complement carry
CMP      Compare
CMP4S    NEC Instruction
CMPS     Compare string
CMPSB    Compare string byte
CMPSW    Compare string word
CODE     Segment name
COMMENT  Directive
COMMON   SEGMENT specifier
CS       Segment register
CWD      Convert word to dword
CX       Word register
                                                             16-2

D        Dword specifier
DAA      Decimal adjust add
DAS      Decimal adjust sub
DATA     Segment name
DB       Define bytes
DD       Define dwords
DEC      Decrement
DH       Byte register
DI       Word register
DIV      Divide
DL       Byte register
DQ       Define Qwords
DS       Segment register
DT       Define Twords
DUP      Duplicate operator
DW       Define words
DWORD    Memory specifier
DX       Word register

ELSE     Conditional term
ELSEIF   Conditional term
END      Start specifier
ENDIF    Conditional term
ENDP     End of procedure
ENDS     End of segment
ENTER    Instruction
EQ       Equals operator
EQU      Equate directive
ES       Segment register
EVEN     Coerce to even address
EXTRN    Ignored, compatibility

F        Far specifier
F2XM1    87 Instruction
F4X4     IIT-2C87 Instruction
FABS     87 Instruction
FADD     87 Instruction
FADDP    87 Instruction
FAR      Far specifier
FBANK    IIT-2C87 Instruction
FBLD     87 Instruction
FBSTP    87 Instruction
FCHS     87 Instruction
FCLEX    87 Instruction
FCOM     87 Instruction
FCOMP    87 Instruction
FCOMPP   87 Instruction
FCOS     387 Instruction
                                                             16-3

FDECSTP  87 Instruction
FDISI    87 Instruction
FDIV     87 Instruction
FDIVP    87 Instruction
FDIVR    87 Instruction
FDIVRP   87 Instruction
FENI     87 Instruction
FFREE    87 Instruction
FIADD    87 Instruction
FICOM    87 Instruction
FICOMP   87 Instruction
FIDIV    87 Instruction
FIDIVR   87 Instruction
FILD     87 Instruction

FIMUL    87 Instruction
FINCSTP  87 Instruction
FINIT    87 Instruction
FIST     87 Instruction
FISTP    87 Instruction
FISUB    87 Instruction
FISUBR   87 Instruction

FLD      87 Instruction
FLD1     87 Instruction
FLDCW    87 Instruction
FLDENV   87 Instruction
FLDL2E   87 Instruction
FLDL2T   87 Instruction
FLDLG2   87 Instruction
FLDLN2   87 Instruction
FLDPI    87 Instruction
FLDZ     87 Instruction

FMUL     87 Instruction
FMULP    87 Instruction
FNCLEX   87 Instruction
FNDISI   87 Instruction
FNENI    87 Instruction
FNINIT   87 Instruction

FNOP     87 Instruction
FNSAVE   87 Instruction
FNSTCW   87 Instruction
FNSTENV  87 Instruction
FNSTSW   87 Instruction
FPATAN   87 Instruction
FPREM    87 Instruction
FPREM1   387 Instruction
FPTAN    87 Instruction
FRNDINT  87 Instruction
FRSTOR   87 Instruction
                                                             16-4

FSAVE    87 Instruction
FSCALE   87 Instruction
FSETPM   87 Instruction
FSIN     387 Instruction
FSINCOS  387 Instruction
FSQRT    87 Instruction
FST      87 Instruction
FSTCW    87 Instruction
FSTENV   87 Instruction
FSTP     87 Instruction
FSTSW    87 Instruction

FSUB     87 Instruction
FSUBP    87 Instruction
FSUBR    87 Instruction
FSUBRP   87 Instruction
FTST     87 Instruction
FUCOM    387 Instruction
FUCOMP   387 Instruction
FUCOMPP  387 Instruction
FWAIT    87 Instruction
FXAM     87 Instruction
FXCH     87 Instruction
FXTRACT  87 Instruction
FYL2X    87 Instruction
FYL2XP1  87 Instruction

GE       Greater/equal operator
GROUP    Group of segments
GT       Greater than operator

HIGH     High byte of word op
HLT      Halt

IDIV     Integer divide
IF       Skip/conditional term
IMUL     Integer multiply
IN       Input from port
INC      Increment
INCLUDE  Ignored, compatibility
INS      Input string
INSB     Input string byte
INSW     Input string word
INT      Interrupt
INTO     Interrupt on overflow
IRET     Interrupt return
                                                             16-5

JA       Jump on above
JAE      Jump above equal
JB       Jump on below
JBE      Jump below equal
JC       Jump on carry
JCXZ     Jump on CX zero
JE       Jump on equal
JG       Jump on greater
JGE      Jump greater equal
JL       Jump on less
JLE      Jump less equal

JMP      Jump unconditional
JNA      Jump not above
JNAE     Jump not above equal
JNB      Jump not below
JNBE     Jump not below equal
JNC      Jump not carry
JNE      Jump not equal
JNG      Jump not greater
JNGE     Jump not greater equ
JNL      Jump not less
JNLE     Jump not less equal
JNO      Jump not overflow
JNP      Jump not parity
JNS      Jump not sign
JNZ      Jump not zero

JO       Jump overflow
JP       Jump parity
JPE      Jump parity even
JPO      Jump parity odd
JS       Jump on sign
JZ       Jump on zero

L2E      Real constant
L2T      Real constant
LABEL    Declaration
LAHF     Load AH flags
LAR      286 Prot Instruction
LDS      Load into DS
LE       Less equal operator

LEA      Load eff address
LEAVE    Instruction
LES      Load into ES
LG2      Real constant
LGDT     286 Prot Instruction
LIDT     286 Prot Instruction
LLDT     286 Prot Instruction
LMSW     286 Prot Instruction
LN2      Real constant
                                                             16-6

LOCK     Instruction
LODBITS  NEC Instruction
LODS     Load string
LODSB    Load string byte
LODSW    Load string word
LONG     Operator

LOOP     Instruction
LOOPE    Loop on equal
LOOPNE   Loop not equal
LOOPNZ   Loop not zero
LOOPZ    Loop on zero
LOW      Operator
LSL      286 Prot Instruction
LT       Less than operator
LTR      286 Prot Instruction

MACRO    Directive
MAIN     Program strating label
MEMORY   Segment specifier
MOD      Operator
MOV      Instruction
MOVS     Move string
MOVSB    Move string byte
MOVSW    Move string word
MUL      Multiply

NAME     .OBJ module name
NE       Not equals operator
NEAR     Operator
NEG      Instruction
NIL      No code instruction
NOP      No operation
NOT      Instruction/operator
NOTBIT   NEC Instruction

OFFSET   Operator
OR       Instruction/operator
ORG      Directive
OUT      Output to port
OUTS     Output String
OUTSB    Output string byte
OUTSW    Output string word

PAGE     Ignored, compatibility
PARA     Segment specifier
PI       Real Constant
POP      Instruction
POPA     Pop all
POPF     Pop flags
PROC     Procedure Directive
PTR      Ignored, compatibility
PUBLIC   Ignored, compatibility
PUSH     Instruction
PUSHA    Push all
PUSHF    Push flags
                                                             16-7

Q        Qword specifier
QWORD    Memory specifier
RADIX    Directive
RCL      Rotate carry left
RCR      Rotate carry right
REP      Repeat prefix
REPC     NEC Instruction
REPE     Repeat while equal
REPNC    NEC Instruction
REPNE    Repeat not equal
REPNZ    Repeat while zero
REPZ     Repeat non zero

RET      Return
RETF     Far Return
ROL      Rotate left
ROL4     NEC Instruction
ROR      Rotate right
ROR4     NEC Instruction

SAHF     Store AH to flags
SAL      Shift arith left
SAR      Shift arith right
SBB      Subtract with borrow
SCAS     Scan string
SCASB    Scan string byte
SCASW    Scan string word
SEG      Operator
SEGMENT  Directive
SETBIT   NEC Instruction
SGDT     286 Prot Instruction

SHL      Instruction/operator
SHORT    Operator
SHR      Instruction/operator
SI       Word register
SIDT     286 Prot Instruction
SLDT     286 Prot Instruction
SMSW     286 Prot Instruction

SP       Word register
SS       Segment register
ST       EQU 0 for compatibility
STACK    Segment specifier
STC      Set carry
STD      Set direction
STI      Set interrupts

STOBITS  NEC Instruction
STOS     Store string
STOSB    Store string byte
STOSW    Store string word
STR      286 Prot Instruction
STRUC    Structure directive
SUB      Instruction
SUB4S    NEC Instruction
SUBTTL   Ignored, compatibility
                                                             16-8

T        Tbyte specifier
TBYTE    Memory specifier
TEST     Instruction
TESTBIT  NEC Instruction
THIS     This-location specifier
TITLE    Ignored, compatibility
TYPE     Operator
VERR     286 Prot Instruction
VERW     286 Prot Instruction
W        Word specifier
WAIT     Instruction
WORD     Word specifier
XCHG     Instruction
XLAT     Translate byte
XLATB    Translate byte
XOR      Instruction/operator


```
{% endraw %}

## A17.DOC

{% raw %}
```
INDEX                                                  17-1
287 directive, 7-1
387 support, 7-2
A-after operator in macros, 11-6
A86 environment variable, 3-4
A86.LIB file, 13-3
A86.LIB library catalog, 2-1
A86LIB environment variable, 13-5
A86LIB library tool, 13-3
AAD with operand, 5-4
AAM with operands, 5-4
about the author, 1-6
ABS operator in EXTRN, 10-6
absolute segments in OBJ mode, 10-10
address, my, 1-1
align operand list, 10-9
align specification, 10-9
alignment of words, 9-3
allocation directives, 9-3
alphabetical listing, 13-1
ampersand, use to specify standard input, 3-5
AND expression operator, 8-7
angle brackets in MASM, 12-3
archiving, 13-7
arithmetic on floating-point numbers, 7-4
assembler variables, 9-10
assertion checking, 9-10
ASSUME directive, 6-3
asterisk multiplication operator, 8-6
AT combine type, 10-10
at-sign @, in symbols, 4-2
attribute operators/specifiers, 8-9
AUTOEXEC.BAT, 3-4
B operator in EXTRN, 10-6
B override expression operator, 8-9
B-before operator in macros, 11-6
base registers, 6-2
base, default, 12-2
based structure example, 6-2
based structures, 9-6
bases for numbers, 8-1
bases, ambiguous, 8-1
batch file controls, 11-14
BCD numbers, 7-5
benefits of registration, 1-3
BIN extension for object files, 9-3
BIN extension, 3-2
binary base, 8-1
Binary Coded Decimal numbers, 7-5
biography, 1-6
BIOS interface, books on, 3-1
BIT expression operator, 8-6
books on assembler, recommended, 3-1
Boolean negation operator, 8-7
Borland Turbo C, using A86 with, 13-7
brackets, 8-11
British contact, 1-1
bugs, reporting, 1-6
                                                       17-2
built-in constant names, 7-4
built-in symbols, 16-1
built-in symbols, equates to, 9-8
BY operator, 8-5
BYTE align type, 10-9
BYTE override expression operator, 8-9
BYTE PTR and WORD PTR, 12-6
C programming language, linking to, 10-1
C switch, 3-2
C, inline assembly statements, 13-7
C-loops in macros, 11-5
capacity, 1-5
capacity, source file, 3-6
case sensitivity, 3-2
case-insensitive comparisons, 8-9
catalog file A86.LIB, 13-3
categories of A86 elements, 4-1
cb specifier, 6-6
cd specifier, 6-6
changing the default base, 8-2
character loops in macros, 11-5
characters allowable in symbols, 4-2
characters recognized in A86 language, 4-2
choices for 87 operands, 7-6
class name, specifying, 10-11
classes, 10-4
clear-register macro, 11-1
clear-register macro, 11-5
closing of macro loops, 11-10
code display, 13-6
CODE ENDS directive, 9-2
code generation of forward references, 9-7
code label specifier, 6-6
CODE SEGMENT directive, 9-1
CODE segment, link to Pascal, 10-11
colon operator, 8-11
colon, deciding when to use, 4-4
columnar output, 2-2
COM extension, 3-2
COM programs, how to detect, 12-1
combine operand list, 10-9
combine specification, 10-9
combine types, 10-9
combining switches, 3-4
COMMENT directive, 4-2
comments in macros, removal of, 11-2
comments, 4-2
COMMON combine type, 10-10
comparison of strings, 8-8
compatibility, 12-1
compression of macro text, 11-2
computation models, 10-2
concatenating terms in an expression, 8-5
conditional assembly and macros, 11-13
conditional assembly and XREF, 11-14
conditional assembly, 11-11
conditional calls, see IF, 5-1
                                                       17-3
conditional jump, far, see IF, 5-1
conditional returns, 5-2
constant operand to FLD, 7-4
constants, floating, 8-2
constants, format of, 8-1
constants, large, 9-5
constants, overview, 4-4
contacting me, 1-6
contents, 0-3
control-character notation, 8-5
control-Z key, 2-2
controls, invocation, user-definable, 11-14
conversion of macros, 13-3
crashes, system, on lack of FWAIT, 7-2
creating programs to assemble, 3-1
credit cards, 1-1
cross reference listing, 13-1
cw specifier, 6-6
D operator in EXTRN, 10-6
D override expression operator, 8-9
D switch, 3-3
data allocation statements, samples, 4-1
DATA ENDS directive, 9-2
DATA SEGMENT directive, 9-1
DATA segment, link to Pascal, 10-11
DB directive, 9-3
DD directive, 9-3
DD examples, 9-5
DEC, multiple and numeric operands, 5-1
decimal base, 8-1
decimal output of macro operands, 11-8
default base, changing, 8-2
default base, decimal, 3-3
default bases, 8-1
default forward references, 3-4
default output file name, 3-6
default segment registers, 6-2
default segment, OBJ mode, 10-12
defined symbols, testing for, 8-8
defining macros, 11-1
demonstration, 2-1
description of 87 instructions, 7-6
description of instructions, 6-8
digits in file names, 3-6
digits, hex, 8-1
directives in a86, 9-1
directives, samples, 4-1
displacement field, 6-4
display of symbol values, 13-2
displaying macro expansions, 13-2
division operator, 8-6
dollar sign $, in symbols, 4-2
dollar sign operator, 8-12
DOS interface, books on, 3-1
double hash ## signs in macros, 11-2
double hash signs ## in macros, 11-13
double-precision, 7-5
                                                       17-4
double-quotes in strings, 9-5
doubleword pointer initialization, 9-5
DQ directive, 9-3
DQ example, 9-5
DT directive, 9-3
DT example, 9-5
DUP construct, 9-4
duplicate definitions, 9-9
DW directive, 9-3
DWORD override expression operator, 8-9
E switch, 3-3
EA byte, 6-4
eb specifier, 6-6
editing programs, 3-1
effective address codes table, 6-5
effective addresses, 6-1
effective addresses, encoding, 6-4
ELSE, 11-12
ELSEIF, 11-12
EM end-of-macro symbol, 11-1
emulation, floating-point, 7-2
encoding of effective addresses, 6-4
encoding of floating-point numbers, 8-2
END directive, 10-7
END in non-OBJ mode, 12-4
end of a macro, 11-1
end of file, 10-7
ENDIF, 11-12
ENDM, 12-3
ENDP directive, 9-11
ENDS directive, OBJ mode, 10-11
ENDS directives in COM mode, 9-2
English contact, 1-1
environment string, invocation equates in, 11-15
environment variable A86LIB, 13-5
environment variable, a86, 3-4
EQ expression operator, 8-8
EQ in comparing strings, 8-8
EQU directive, 9-8
equal-sign string compare, 8-9
equals-sign directive, 9-10
equates to built-in symbols, 9-8
equates to interrupts, 9-9
ER end-of-repeat symbol, 11-4
ERDEMO.BAT batch file, 2-1
ERR extension, 3-3
error file redirection, 3-3
error messages, 1-5
error messages, explanation, 14-1
evaluating macro operands, 11-8
EVEN directive, 9-3
ew specifier, 6-6
EX exit macro symbol, 11-10
examples of A86 statements, 4-1
examples of floating constants, 8-3
examples of numbers, 4-2
examples of type matching, 4-5
                                                       17-5
examples of useful memory accesses, 6-3
exclamation point operator, 8-7
exclusive features, 5-1
EXE programs, how to detect, 12-1
exiting from middle of macro, 11-10
EXITM simulation, 11-10
EXITM, 12-3
EXMAC demo, 2-2
EXMAC tool, 13-2
expansions of macros, displaying, 13-2
explicit EXTRNs, 3-4
explicit EXTRNs, forcing, 10-7
explicit OBJ specification, 10-1
explicit public names, 10-5
explicit WAITs, 7-1
exponent specifier, 8-2
expressions in conditional assembly, 11-11
expressions involving forward references, 9-7
extended-precision operands, 7-5
extensions of source files, 3-6
external names and LINK, 10-3
extra coprocessor support, 7-2
EXTRN directive, 10-6
EXTRNs, explicit, 3-4
F operator in EXTRN, 10-6
F override expression operator, 8-9
F switch, 3-3
f switch, 7-3
F6 to terminate file, 2-2
FAKE.EXE, 13-7
far label constants, 8-12
FAR override expression operator, 8-9
FBANK instruction on IIT-2C87, 7-2
FDISI instruction, 7-1
features, exclusive, 5-1
FENI instruction, 7-1
file containing symbols, 13-1
file in which a symbol was defined, 13-2
file lists, 3-6
file maintenance, 3-6
file names, digits in, 3-6
files, source, 3-1
finding symbol values, 13-2
FLD, immediate operand, 7-4
floating constants, examples of, 8-3
floating point operand types, 7-5
floating point operands, choices for, 7-6
floating point stack, 7-3
floating-point constants, format of, 8-2
floating-point emulation, 7-2
floating-point processor, 7-1
footprint, code generation, 1-3
forcing explicit EXTRNs, 10-7
forcing explicit EXTRNs, 3-4
forcing library lookup, 13-5
format of assembler source lines, 4-3
format of macros, 11-2
                                                       17-6
FORTRAN, 10-10
forward references, 12-2
forward references, 9-6
forward references, default, 3-4
fragments, 10-3
FSETPM instruction, 7-1
FSTSW AX form, 7-1
FWAIT instruction, 7-1
Gates, Bill, 13-7
GE expression operator, 8-8
generated code, displaying, 13-6
Great Britain contact, 1-1
greater-mark ">" for local symbols, 5-3
GROUP directive, 10-12
groups, reason for, 10-3
GT expression operator, 8-8
hash sign # in invocation, 13-5
hash sign #, conditional assembly, 11-11
hash signs # in macros, 11-13
hash signs # in macros, 11-2
hash signs #, literalizing in macros, 11-2
hexadecimal base, 8-1
HIGH operator, 8-4
high-level language computation models, 10-2
history of A86, 15-1
ib specifier, 6-6
IBM, 12-1
IBM-PC AT computer, 7-2
IEEE standard for floating-point, 8-2
IF conditional assembly symbol, 11-11
IF statement, 5-1
IFDIF, 12-3
IFE, 12-3
IFIDN, 12-3
IIT-2C87 support, 7-2
immediate operand to FLD, 7-4
implicit public names, 10-5
INC, multiple and numeric operands, 5-1
incentives to register, 1-3
INCLUDE, 12-4
indefinite repeats, 11-5
index expressions, 8-4
index registers, 6-2
indexed memory, 6-2
inferior assemblers, 12-1
inferior assemblers, porting to, 12-5
initializations of floating-point numbers, 7-4
instruction set chart, explanation, 6-6
instruction set, 87, 7-6
instruction statements, samples, 4-1
instructions, list of, 6-8
instructions, special, 6-7
integer operands to 8087, 7-5
Intel assembler, 12-1
Intel meeting, 10-3
interactive macro tool, 13-3
intermediate numeric results, 7-5
                                                       17-7
interrupt equates, 9-9
interrupts, grabbing, 12-2
invocation of A86, 3-1
invocation variables in environment string, 11-15
invocation variables, 11-14
IRET operand, 5-2
IRP and IRPC functionality, 11-1
IRP, 12-3
IRPC, 12-3
iw specifier, 6-6
juxtaposing terms in an expression, 8-5
keyboard entry coding example, 11-3
keywords, 4-2
L last-operand in macros, 11-5
L switch, 3-3
L2E and L2T constants, 7-4
LABEL directive, 9-11
labels, examples, 4-4
language, A86, 4-1
large constant initialization, 9-5
large macro operand numbers, 11-9
large model of segmentation, 10-2
last-operand in macros, 11-5
LE expression operator, 8-8
LEA instruction, optimizing, 3-3
LEA optimization, 5-4
leading underscore, in C, 10-1
legal terms, 1-1
length byte, generating in macro, 11-8
length of a symbol name, 4-2
LG2 constant, 7-4
line-format, 4-3
LINES.8 library file, 2-1
LINK program, 10-3
linkage, 10-1
list of instructions, 6-8
listing macros, 13-3
listing of 87 instructions, 7-6
listing of cross references, 13-1
listing of symbols, 13-1
listings with A86, 13-5
LN2 constant, 7-4
loading named segments, 12-2
local labels in macros, 11-10
local labels, simulating, 12-5
local symbols, 5-3
local symbols, specifying, 9-10
location, this, operator, 8-12
logical operators, 8-7
long default jump, 3-3
LONG expression operator, 8-9
looping in macros, 11-4
loops with large index, 11-9
LOW operator, 8-4
lower case letters in symbols, 3-2
LT expression operator, 8-8
m specifier, 6-6
                                                       17-8
macro compatibility, 12-2
macro exiting from within loop, 11-10
macro expansion demo, 2-2
macro expansions, displaying, 13-2
macro file, default, 3-5
macro loops, closing, 11-10
macro loops, skipping increments, 11-6
macro operand substitution, 11-2
macro operands, computing number, 11-9
macros and conditional assembly, 11-13
macros, 11-1
macros, defining, 11-1
mailing list, 1-4
main module, 10-3
MAIN symbol, 10-7
maintenance of files, 3-6
manual, scope of, 3-1
MASK, 12-4
MASM 8087/287 code generation, 7-1
MASM compatibility, 12-1
MASM compatible CODE, DATA, 10-11
MASM conditional assembly, simulating, 11-14
MASM, mimicking, 13-7
matching of types, examples, 4-5
matrix multiplication on IIT-2C87, 7-2
maximum length of a symbol name (127), 4-2
maximum source file size, 3-6
meeting at Intel, 10-3
MEMORY combine type, 10-10
memory forms, overlooked, 6-3
memory operand forms to 87 instructions, 7-4
memory requirements, 3-6
memory resident code, 12-2
memory variables, specifying, 6-1
menu systems and A86, 3-5
MEXP.BAT batch file, 2-2
Microsoft, 12-1
minus operator, 8-5
MIX tool, compatibility, 3-4
mixing constant types in word inits., 8-5
mnemonics, 8086, 6-8
mnemonics, one for many instructions, 4-4
MOD modulo operator, 8-6
model of segmentation, grotesque, 10-3
ModRM byte, 6-4
modular programming, encouraging, 13-6
module names, 10-5
modules, object, 10-3
Morse, Steve, 3-1
MOV of immediate value into segment reg, 5-2
MOV of memory operands, 5-2
MOV of segment registers, 5-2
MOV substitute for LEA, 5-4
MOV with three operands, 5-2
move-memory macro example, 11-1
MSDOS.8 library file, 2-1
MTCOLS.BAT batch file, 2-2
                                                       17-9
multiple allocation using DUP, 9-4
multiple files in OBJ mode, 10-1
multiple increments in macro loops, 11-6
multiple operands to PUSH,POP,INC,DEC, 5-1
multiply by 10 coding example, 10-1
multiply operator, 8-6
NAME directive, 10-5
NAME in non-OBJ mode, 12-4
name of output files, 3-2
NE expression operator, 8-8
NE in comparing strings, 8-8
NEAR expression operator, 8-11
NEC chips, lack of AAD with operands, 5-4
NEC chips, special instructions, 6-8
negation, Boolean, 8-7
negative R-loops in macros, 11-7
nested IF blocks, 11-12
nested PROCs, lack of, 9-10
nesting of loops in macros, 11-8
NIL prefix, 9-9
non-combinable segments, 10-10
NOP and EVEN directive, 9-3
Norton, Peter, 3-1
NOT expression operator, 8-7
null invocation names, 11-15
null operands to macros, 11-3
number operands in expressions, 8-4
numbers, examples, 4-2
numbers, examples, 8-1
numbers, floating, 8-2
numbers, format of, 8-1
numeric operands to INC,DEC, 5-1
O switch, 10-1
O switch, 3-2
O switch, 3-4
OBJ file generation, 3-4
OBJ internal optimization, 3-4
OBJ production made easy, 10-1
object file name, 3-2
object modules, 10-3
octal base, 8-1
OFFSET expression operator, 8-10
opcodes, 8086, 6-8
opcodes, 87, 7-6
operand choices for 87 instructions, 7-6
operand number, generating, 11-9
operand types to 87 instructions, 7-4
operating system requirements, 3-6
operation of A86, 3-1
operator precedence, 8-13
Optimized LEA instruction, 5-4
OR expression operator, 8-7
ORG directive, 9-2
outer segment, OBJ mode, 10-12
output files, naming, 3-2
overlooked memory forms, 6-3
overrides, segment, 12-2
                                                       17-10
overrides, segment, 6-3
overview of A86, 1-4
overview of expressions, 8-3
PAGE directive, 12-4
PAGE specifier, 10-9
PAGE.8 program, 2-1
PAGE.BAD source file, 2-1
PAGE.COM program, 2-1
PARA specifier, 10-9
parenthesized operand numbers, 11-9
Pascal segment names, 10-11
Pascal, linking to, 10-2
passing macro operands by value, 11-8
period operator, 8-5
permanent switch settings, 3-4
phone number, my, 1-1
phone numbers of my bulletin boards, 1-6
PI constant, 7-4
piping file names to A86, 3-5
plus operator, 8-5
POP, multiple operands, 5-1
port programs to inferior assemblers, 12-5
pound sign #, SEE hash sign
Power C, compatibility, 3-4
powers of ten, 8-2
precedence of operators, 8-13
prices, 1-2
printer eject program, 2-1
PROC directive, 9-10
procedure-level summary listings, 13-1
procedures, 9-10
program location operator, 8-12
program starting location, OBJ mode, 10-7
programs, how to create, 3-1
prompt for file names, 3-5
protected mode instructions, 6-7
PTR operator, 8-5
PUBLIC combine type, 10-9
PUBLIC directive, 10-5
public names and LINK, 10-3
PUSH multiple operands, simulating, 12-5
PUSH, multiple operands, 5-1
Q operator in EXTRN, 10-6
Q override expression operator, 8-9
question mark ?, in symbols, 4-2
question-mark operator, 9-4
quoted-string macro operands, 11-3
QWORD override expression operator, 8-9
R-loops in macros, 11-4
R-loops, negative, 11-7
RADIX directive, 8-2
rb register specifier, 6-7
RECORD, 12-4
red tape, 1-4
red tape, 10-1
redefinable symbols, 5-3
redefining invocation variables, 11-15
                                                       17-11
redefining symbols, 9-9
redirection of error files, 3-3
references to a symbol, 13-2
registers, 8086, 4-3
registers, general, 6-1
registration benefits, 1-3
registration benefits, 13-3
relational operators, 8-8
relocation and linkage, 10-1
repeating code using DUP, 9-4
REPT directive, simulating, 11-9
requirements, system, 3-6
reserved symbols, 16-1
RET instruction, meaning of, 9-10
RET operand, 5-2
RETF instruction and PROC, 9-10
RETF operand, 5-2
REV.8 source file, 2-1
REV.COM program, 2-1
reversing strings example, 2-1
revision history, 15-1
rw register specifier, 6-7
S switch, 3-4
samples of A86 statements, 4-1
scientific notation, 8-2
SEG operator, 10-13
SEGMENT AT, non-OMF, 12-4
SEGMENT directive, non-OBJ mode, 12-4
SEGMENT directive, OBJ mode, 10-8
segment override colon operator, 8-12
segment overrides, 12-2
segment overrides, 6-3
segment registers, default, 6-2
segmentation and memory access, 6-2
segmentation models, 10-2
segments in A86, 9-1
segments, loading named, 12-2
shareware distribution, 0-1
shifting expression operators, 8-6
SHL and SHR expression operator, 8-6
SHORT expression operator, 8-9
simple macro syntax, 11-1
single-precision, 7-5
size of macro operands, 11-8
size of source files, 3-6
size of structures, 8-12
slash division operator, 8-6
slash specifier, 6-4
small model of computation, 10-2
source files, 3-1
source libraries, 13-3
special instructions, 6-8
Specialty Software, 7-2
speed, 1-4
square brackets operator, 8-11
ST floating-point stack specifier, 8-12
STACK combine type, 10-9
                                                       17-12
STACK segment, relocatable, 10-11
stack segments in OBJ mode, 10-9
stack, floating point, 7-3
standard input and output, 13-3
standard input command tail, 3-5
starting location, OBJ mode, 10-7
strategies for file maintenance, 3-6
string allocation, 9-5
string comparison operators, 8-8
STRUC directive, 9-6
STRUC, implicit via SEGMENT AT, 12-4
structure initialization, 12-3
structure, based, example, 6-2
structured programming constructs, 5-1
structures and MASM, 12-3
structures, size of, 8-12
sub-directories of programs, 3-6
substitution of macro operands, 11-2
subtraction operator, 8-6
SUBTTL, 12-4
summary of procedure calls, 13-1
suppressing symbols file, 3-4
switches, assembler, 3-2
switches, combining, 3-4
switches, user-definable, 11-14
SYM extension, 3-2
symbol table file name, 3-2
symbols file, 13-1
symbols file, suppressing, 3-4
symbols listing, 13-1
symbols, allowable characters for, 4-2
symbols, redefining, 9-9
symbols, reserved, 16-1
system crashes on lack of FWAIT, 7-2
system requirements, 3-6
T operator in EXTRN, 10-6
T override expression operator, 8-9
table of contents, 0-3
table of effective address bytes, 6-5
tabs, diatribe against, 4-3
TBYTE override expression operator, 8-9
TCOLS.8 source file, 2-2
TCOLS.COM program, 2-2
telephone number, my, 1-1
telephone numbers of my bulletin boards, 1-6
terms, legal, 1-1
TEST with one operand, 5-4
Texas, 11-12
Texas, 11-14
TEXT segment name, 10-12
THIS operator, 8-12
tips for memory access, 6-3
TITLE, 12-4
TO in invocation, 3-2
Turbo C, using A86 with, 13-7
Turbo Pascal segment names, 10-11
Turbo Pascal, linking to, 10-2
                                                       17-13
type display of symbols, 13-1
type matching, examples, 4-5
TYPE operator, 8-12
types in the a86 language, 4-3
types, assumed, 10-2
undefined symbol types, assumed, 10-2
undefined symbols listing in OBJ mode, 10-6
underscore, in symbols, 4-2
underscore, leading, in C, 10-1
underscores within numbers, 8-1
unusable user symbols, 16-1
up arrow symbol and invocation equates, 11-15
USAGE.8 library file, 2-1
value, passing by, 11-8
values of symbols, 13-2
variable forward references, 9-7
variable operands in expressions, 8-4
variables declared at invocation, 11-14
variables, 9-10
variables, examples, 4-3
verbose forms, floating point, 7-3
verbose PROC, 9-11
version history, 15-1
W operator in EXTRN, 10-6
W override expression operator, 8-9
WAIT instruction, 7-1
Wettstein, Greg, 1-6
WIDTH, 12-4
wild cards in source files, 3-2
wild cards, order of, 3-6
WORD align type, 10-9
WORD override expression operator, 8-9
WORD PTR, 12-6
X specifier for numeric bases, 8-1
X switch, 10-7
X switch, 3-4
XCHG of memory operands, 5-2
XCHG with segment register, 5-2
XOR expression operator, 8-7
XREF and conditional assembly, 11-14
XREF demo, 2-2
XREF tool, 13-1
XRF extension, 13-1

```
{% endraw %}

## AFIX.DOC

{% raw %}
```
AFIX conversion tool, V1.0                 February 18, 1990
Copyright 1990 Eric Isaacson.  All rights reserved.

Eric Isaacson
416 E. University Ave.
Bloomington, IN 47401-4739
(812)339-1811

The AFIX package consists of this AFIX.DOC file, the program 
AFIX.COM, and the set of files with the .FIX extension, that
are fed to the AFIX program.

I consider the legal status of the AFIX package to be the same 
as that of the free-distribution parts of my A86 package: I 
grant permission for anyone to copy the complete, unmodified 
package and use it to try out A86.  There is no separate 
registration fee for AFIX: if you register for A86, that covers 
the usage of AFIX.  See the A86 package (V3.22 or later) for 
details of my copying permissions/restrictions, including my 
reservation of the right to inform specific parties that they 
may not distribute some or all of my software.


Overview of AFIX

In an effort to expand the test base for my A86 assembler, I 
recently converted 61 assembly-language source files, published 
by PC Magazine during the past 3 years.  These files were 
written for various versions of the inferior but more widely-
distributed MASM assembler by Microsoft.  I made the minimum 
modifications necessary so that A86 would assemble the source 
files directly to COM files that are functionally equivalent to 
the files produced by MASM, LINK, and EXE2BIN. I would like to 
make the modified files as widely available as the original MASM 
files; but simply distributing them would violate their 
copyright. 

AFIX was written to solve this legal problem.  For each modified 
source file, I am publishing a special file with the extension 
.FIX, that contains the specifications for modifying the 
original PC Magazine source file.  The FIX files contain 
absolutely nothing from the original .ASM files; so they are 
entirely mine and I can copyright and distribute them as I 
please. 

To run AFIX, you must place AFIX.COM, the original .ASM file, 
and the corresponding .FIX file into your current directory, and 
type AFIX followed by the file name to the DOS prompt.  AFIX 
will verify that the .ASM file has the same size and 16-bit 
checksum as the file I have.  If it does, AFIX will produce an 
A86-compatible file, with the extension .8.  A comment line is 
inserted at the top of the file, giving the A86 invocation line 
that will assemble the program.  If the original file was more 
than 64K in size, the output will be split into multiple files, 
with names ending in _1, _2, etc. 

You do not need to run AFIX for each individual source file: 
AFIX will accept wildcards in the program name.  In fact, if you 
simply type AFIX to the DOS prompt, with no arguments, then 
*.FIX is assumed, and AFIX will convert all programs for which a 
.FIX file and the correct .ASM file both exist.  If you do this, 
you might want to redirect standard output to a disk file, so 
that you can review the status messages at the end: 

    AFIX >AFIX.LOG

If you get AFIX from a disk you have purchased from me or from a 
shareware distribution house, the disk will not contain the .ASM 
files you need-- they are copyrighted and cannot be sold.  
You'll need to download them from a BBS, or from the utilities 
forum of PCMagnet. 


What AFIX Doesn't Do

AFIX is not a general-purpose MASM-to-A86 translation tool-- you 
**cannot** apply it to files you have created.  AFIX is merely a 
tool that allows me to communicate, in a machine-readable 
format, the changes that I manually made to the copyrighted 
source files.  It works only with the .FIX files that I have 
supplied.  I do hope to write a MASM-to-A86 tool that will 
assist you in converting any program; but there are other 
improvements I would like to make to A86 first.  Meanwhile, this 
present effort makes over 2 megabytes of A86 source code 
publicly available.  That should be enough to keep you busy for 
awhile! 


Some Comments About the Converted Programs

This conversion effort has substantially improved both the 
reliability and compatibility of A86.  I made several dozen 
changes for the V3.22 release, to minimize the changes needed 
for the successful conversion.  I added a new switch, +L8, that 
changes assumptions made about untyped forward references, 
reducing the number of B and W type-specifiers needed. The +D 
switch already made the syntax of numeric constants MASM-
compatible.  Thus, for maximum compatibility, the converted 
files are assembled with the +DL8 switch setting. 

Chapter 12 of the A86 manual goes into detail about what needs
to be done to convert files from MASM to A86.  All 61 source
files assemble to complete .COM programs.  The changes made to
these files fell into five categories: 

1. Most of the changes comprised the addition of explicit 
   segment-override operators to memory references.  MASM 
   inserts such overrides behind the programmer's back, as 
   controlled by the confusing and misunderstood ASSUME 
   directive.  These overrides appear primarily in the
   handlers for interrupts taken over by memory-resident
   (TSR) programs.  For simple, non-resident COM programs,
   all segment registers point to the program segment,
   so that overrides aren't needed.

2. Two of the 61 source files contained macros.  A86's
   macro definition syntax is different, so the definitions
   had to be converted.  These were the only two files
   that did not retain MASM-compatibility after conversion.

3. There were some forward-reference symbols whose type
   needed to be specified, usually with the OFFSET operator.

4. There were a few expressions involving forward references
   that A86 couldn't handle.  The expressions were moved into
   EQU directives placed below the symbols referenced.

5. There were a couple of built-in mnemonics, such as WAIT, that 
   doubled as user symbols.  MASM allows this; A86 doesn't.  The 
   symbols were modified by appending an underscore character. 

I verified the correctness of the converted files by generating a 
proprietary version of A86 that mimicked as closely as possible 
the (mostly inferior) code generation of MASM.  This reduced the
number of discrepancies in the resulting .COM files to a small
enough number that I could manually verify their functional
equivalency.  I did not attempt to test the execution of the
programs themselves.

The total size of changes was minuscule in proportion to the 
total size of the source files.  In fact, the one-line comments 
appended to the top of each program totalled more bytes than the 
code changes made!  Without those comments, the total changes 
(moved bytes plus inserted bytes plus deleted bytes) for the 59 
non-macro files were 3363 out of 2231783 bytes.  I can thus 
claim that for COM programs not containing macros, A86 is 99.83% 
MASM-compatible.  Twenty of the files required no changes
whatever. 

```
{% endraw %}

## D00.DOC

{% raw %}
```
D86 debugger package   V3.22                  January 25, 1990

The entire package is Copyright 1986--1990 Eric Isaacson.
All rights reserved.

PLEASE read Chapter 1 for legal terms and conditions, how to
register for the package, and an overview of the debugger.

If you bought a D86 disk from a $5-per-disk distribution house
and are taken aback because you now find you must pay me for the
right to use D86, please read the QUESTION and ANSWER from the
A00.DOC file of the A86 package.



The D86 package consists of the three programs D86.COM, A86.COM, 
and D86CHECK.COM, a source file HEXOUT.8 used by the 
demonstration in Chapter 2, and a sequence of DOC files that, 
when printed out in order, make the manual.  Each chapter is a 
DOC file whose name is D??.DOC, where ?? runs from 00 through 
10. 

                                                             0-2
TABLE OF CONTENTS


CHAPTER 1   INTRODUCTION AND LEGAL TERMS

Introduction                       1-1
Legal Terms and Conditions         1-1
Registration Benefits              1-3
Overview of D86                    1-3
How to Contact Me                  1-5


CHAPTER 2   D86 DEMONSTRATION


CHAPTER 3   REQUIREMENTS AND OPERATION

System Requirements for D86                      3-1
Invoking D86                                     3-1
Finding the Program File                         3-1
Finding the Symbols File                         3-2
Two-Screen Debugging with +V                     3-3
The D86 Screen Display                           3-3
D86 Commands                                     3-4
Immediate Assembly-Language Commands             3-4
Entering Instructions Into Memory                3-5
Entering Data into 8086 Memory                   3-6
Adding Symbols to a Program                      3-6
What to Do if D86 Doesn't Work on Your Computer  3-6
If You'd Like to Be Ambitious                    3-7


CHAPTER 4    D86 CONTROL KEYS

Display Control Keys                          4-1
Instruction Pointer Positioning Control Keys  4-2
Program Execution Control Keys                4-4
Special Action Control Keys                   4-4


CHAPTER 5   COMMAND LANGUAGE
General Operands to Debugger Commands    5-1
Format of Debugger Command Examples      5-1
The Debugger Command Set                 5-1
                                                             0-3

CHAPTER 6   MEMORY DISPLAY OPTIONS

Memory Display Windows                  6-1
Single-Line Memory Windows              6-1
Erasing Memory Display Lines            6-2
Continuation Lines                      6-3
Mixed Format Specification              6-3
Numbers in a Format Specification       6-3
Spacing Between Memory-Display Units    6-4
Special-Action Format Specifiers        6-4
The Data Memory Window                  6-8


CHAPTER 7    FLOATING POINT DEBUGGING

The Floating-Point Display Window          7-1
Exotic Flavors of Floating-Point Numbers   7-3


CHAPTER 8   COMMONLY ASKED QUESTIONS

Setting Registers        8-1
Modifying Memory         8-1
Screen Problems          8-1
Debugging ROM            8-2


CHAPTER 9    RELEASE HISTORY AND FUTURE PLANS

Release History of D86       9-1
Future Plans                 9-2

INDEX



```
{% endraw %}

## D01.DOC

{% raw %}
```
CHAPTER 1   INTRODUCTION AND LEGAL TERMS


Introduction

D86 is a screen-oriented assembly language debugger for the
IBM-PC, compatibles, and most not-so-compatibles (Wang-PC, TI-PC,
Tandy 2000, Sanyo 55x, Zenith Z-100, and DEC Rainbow).  D86 is
the finest debugger available, at any price under any conditions,
for the following:

1. Learning 8086 assembly language.

2. Exploring the machine state of your computer (memory
   structure, registers, etc.)

3. Doing assembly language program development using my A86
   assembler.

4. Doing any kind of debugging involving the floating point (8087
   or 287) coprocessor.

In contrast to software firms who attempt to restrict the
distribution of their software through protection schemes, I
encourage free distribution, and trust that those who use my
products will pay for them.  Please keep in mind the fundamental
good spirit of free-distribution software as you endure the
following barrage of legalities.  Then evaluate the outstanding
value that the D86 package offers you.  I assure you that you
will not be disappointed.


Legal Terms and Conditions

This package is provided to you under the following conditions:

1. You may copy this entire package, and give it to anyone who
   accepts these terms.  The copies you distribute must be
   complete and unmodified.  You do not have to be registered to
   distribute this package.

2. You may execute the programs in this package, in order to
   evaluate them.  If you decide that any of this package is of
   use to you, you must become a registered user by sending $50
   US ($52 overseas) to:

      Eric Isaacson 416 E. University Avenue Bloomington, IN
      47401-4739

   For your convenience, I now accept Visa and MasterCard, by
   telephone.  My number is (812)339-1811.
                                                              1-2

   For the convenience of users in Great Britain, I have
   authorized the firm Shareware Marketing to collect
   registrations for me.  (But the printed version of the manual
   is not yet available from them; if you want it, you should
   order directly from me.)  If you don't want the update right
   away you can ask them to give you a voucher good for an update
   in the future. We'll try to keep the prices about the same
   whether you register through me or through them; it's your
   choice.  Their address is 87 High Street, Tonbridge, Kent TN9
   1RX; telephone 0732 771344. They'll send me a list of
   registered users at the end of every month, and I'll send an
   acknowledgement to each user when I get the list.  So if you
   haven't heard from me by the third week of the month following
   your registration with them, please let me know.

   Your registration includes a single update diskette (5.25
   inch, double density).  You may order further updates for $10
   US, or $12 US if you are overseas.  Once you register for this
   package, you are registered for all future versions.  As long
   as I'm in business, you can get the latest version for just
   the update fee.

   To use D86, you must have the associated assembler, A86.  A
   copy of A86 (without all of its documentation) is included in
   the D86 package.  If you are using D86 to debug only programs
   written in languages other than A86, then you do not need to
   register for A86.  If you are programming in A86, then you
   must register for A86.  There is a discount for combined
   registration of A86 and D86.  Instead of $50+$50 = $100, the
   charge for both packages is $80 ($82 overseas).

   I also offer a printed version of this manual, covering both
   A86 and D86. The manual is printed on sheets 8.5 inches high
   and 7 inches wide, with a plastic ring-style binding so the
   book can lay flat.  If you order with your registration the
   manual is an extra $10 to North America, $15 overseas.  If
   you've already registered and now want the manual, add $10
   ($12 overseas) for the update disk that the manual is bundled
   with.  There is a limit of one manual per computer registered
   (except you may reorder when there is a substantial revision
   to the manual).

   Indiana residents need to add sales tax.  At the current rate
   of 5%, the prices for Indiana residents are $52.50 for one
   product, $63 one product with manual, $84 both products,
   $94.50 both products with manual, $21 manual if already
   registered.

   Educational institutions and training facilities MUST be
   registered in order to use D86 in courses.  Contact me for
   special terms.

   Companies and government agencies MUST be registered in order
   to use D86 for their work.  Again, contact me for special
   terms.
                                                              1-3

3. You may not sell this package to anyone.  If you distribute
   this package on a diskette, any fees you collect must be
   specified as materials/handling, and may not exceed $10 for
   the diskette.

4. You are completely responsible for determining the fitness or
   usability of this package.  I will not be liable for any
   damages, of any kind, arising from any failure of any programs
   in this package to perform as expected.


Registration Benefits

Thank you for enduring the legalities.  They are there to protect
me, and also to convince you that this is my business, from which
I expect to make a living.  I'll now return to a softer sell, to
try to make you want to register for my products.

There is a certain amount of ambiguity about when you're still
evaluating D86, and when you're really using D86 and should
register for it.  Some cases are clear (e.g., you're a school
using D86 to teach a course); but many are not.  In practical
reality, it up to you to decide: you are "on your honor". Also in
practical reality, most users who ought to register haven't, yet.
For most, it's not dishonesty but merely procrastination.  So I
have provided some incentives, to prod you into registering.

One incentive is the printed manual, which only registered users
can purchase.  I haven't left anything out of the disk version of
the manual, but the printed version is formatted and bound much
more nicely than if you print it yourself.

Another incentive is a file REG_ONLY.ZIP containing extra tools
that enhance D86's usefulness.  If you program in languages other
than A86, and produce the program with a linker, you can use the
tool MAPD86 to convert a link MAP listing into a SYM file
readable by D86, so you can do symbolic debugging. If you have a
386-based machine, you can add the D command to D86, allowing you
to set memory breakpoints.

Finally, there are the intangible incentives.  You know you've
done the right thing.  You're letting me know that you appreciate
what I've done.  You're letting the world know that quality
software can succeed when distributed as shareware.
                                                              1-4

Overview of D86

D86 is a screen-oriented program that allows you to troubleshoot
faulty computer programs written for the IBM-PC and all
compatibles, Wang-PC, TI-PC, Tandy 2000, DEC Rainbow, and Sanyo
computer.  It "freezes" the state of your program, and allows you
to investigate the values of registers, flags, and memory.  You
can monitor your program's execution by stepping it one
instruction or procedure at a time; or you can start your program
running, telling D86 to stop it when it reaches certain
locations.  D86 recognizes the symbol-table output of the A86
assembler, creating a symbolic disassembly of your A86 program,
and allowing you to refer to locations and variables by name.

The primary design criterion for D86 is ease of use.  This is
reflected in the most notable features of D86:

* You don't need to ask D86 what the values of registers and
  flags are.  They are there, automatically, at a fixed location
  on the screen.

* You don't need to ask D86 where in your program you are
  stopped.  A disassembly is always generated, at another fixed
  location on the screen. The disassembly gives a hefty chunk of
  your program, not just the single instruction you are at.  A
  cursor next to the disassembly marks the current location.  The
  disassembly chunk remains fixed as you step though it, allowing
  you to follow the flow of the program much more easily.  If you
  wrote the program using A86, the disassembly is symbolic,
  giving instruction operands by name, and labelling disassembly
  locations when possible.

* You don't need to ask D86 what is on the machine stack. A
  display of the top elements of the stack is always generated,
  at yet another fixed location on the screen.

* You can set up windows into memory, displaying memory contents
  in a variety of types.  The types can even be mixed, to display
  complicated structures. The windows will stay at the same
  location until you turn them off, allowing you to watch what
  your program is doing to those memory locations.

* If you have an 8087 or 287 floating-point chip, D86 will
  generate complete window of the 87 state.  The values of the
  stack elements are in a readable decimal format, with
  suppression of unneccessary zeroes, and scientific notation
  only if necessary.

* You can, at any time, enable a help-window, to guide you
  through debugger commands.  You will be astounded by the
  sophistication of this help-facility, especially since other
  debuggers offer no on-line help whatsoever.

* All of the above-mentioned windows, except for the last two,
  exist on the screen at the same time.  You don't have to switch
  between them.
                                                              1-5

* You can single-step your program with single keystrokes, rather
  than sequences of arcane commands.  There are several flavors
  of single-step keys, clustered together on the function-keypad.
  This, combined with the automatic nature of the display, allows
  you to single-step very quickly.  You feel like you are
  actually watching your program run.

* Much of D86's command language is simply the A86 assembly
  language itself. You can type in any A86 instruction, to be
  executed immediately.  You use this to set registers and
  variables, perform arithmetic, jump to another location, etc.
  The immediate-execution feature makes D86 the most effective
  tool available for teaching 86 architecture: the student can
  watch the effects of instructions on registers, flags, and
  memory.

* You can patch programs in memory, using the full power of the
  A86 assembly language.


How to Contact Me

I have no plans to move from my present location at least through
the millennium.  So you can write to:

    Eric Isaacson Software
    416 East University Ave.
    Bloomington, IN 47401-4739

or call (812)339-1811.

Sorry, I can't guarantee to return everybody's long distance
calls.  If you'd like to be SURE I'll get back to you, please
invite me to call you back collect, or tell me to charge the cost
of the call to your credit card.

I also accept BBS mail at PC-Link Central, (812)855-7252, which I
try to check into daily.  Type J 3 when you get on that system,
to reach my conference.  Another BBS which I check into about
twice a week is Indiana On-Line, at (812)332-7227-- type J A86 to
reach my conference on that BBS.  I also check into Compuserve
every 10 days or so-- my ID number there is 71520,74.

PLEASE contact me if you find bugs in my programs; I'll fix them!
I accept bug reports from anyone, registered or non-registered,
no questions asked.  It's very frustrating to hear about people
telling each other about bugs, and not telling me.  I still await
Greg Wettstein's bug list.


```
{% endraw %}

## D02.DOC

{% raw %}
```
CHAPTER 2   D86 DEMONSTRATION

To demonstrate some of the powers of D86, let's walk through a
D86 session.

1. Make sure your current directory contains all the files
   A86.COM, D86.COM, and HEXOUT.8.

2. Assemble the HEXOUT program by typing the command A86
   HEXOUT.8.  The A86 assembler will create the files HEXOUT.COM
   and HEXOUT.SYM.  Look over the listing of the program, to get
   acquainted with what it does.

3. Type the command D86 HEXOUT 41 42 5A followed by the ENTER
   key. Everything following the "D86 " in the line you just
   typed is what you would have typed if you had invoked HEXOUT
   without the debugger-- 41 42 5A are the hex codes that HEXOUT
   will turn into ABZ and send to the console. When the debugger
   takes control, the screen should blank; and the D86 debugger
   screen should appear.  The blinking cursor should be at the
   bottom left.  A sign-on message should appear at the upper
   right.  A disassembly of the HEXOUT program should be in the
   upper left. The label HEXOUT should appear on the first line,
   followed on the second line by the address 0100 and the
   instruction MOV  SI,TAIL_BUFF.  To the left of the address
   should be a reverse video hash sign.  If you have a CGA
   monitor, the hash sign will blink, to compensate for the fact
   that the reverse video isn't as obvious in the lower
   resolution of CGA.

4. Notice the display of register values in the lower left
   corner. The values are all 4-digit hexadecimal.  At the top of
   the second column of registers is a sequence of lower case
   letters. This is the flags display.  Each small letter stands
   for a flag whose value is currently TRUE.  The flags settings
   are those that were handed to D86 by the operating system
   starting the program; for MSDOS V3.1, the settings are "i z
   e".  That display indicates that the interrupt flag "i", the
   zero flag "z", and the parity-even flag "e" are all TRUE; the
   other flags are FALSE. To the right of the registers are six
   lines labelled 1: through 6:.  These are the memory window
   lines. Since you haven't specified any memory windows yet,
   they contain nothing but their numbers.  Below the memory
   window lines is a line labelled 0:.  This is the stack display
   line. The number 0: gives the number of words on the stack,
   currently zero because nothing has been pushed onto the stack.

5. Observe that the sign-on message tells you to press Alt-F10
   for help.  Do so (that is, hold down the Alt key while
   pressing the F10 key).  You are now in help mode, where you
   will remain until you press Alt-F10 again.  D86 will keep
   changing the help window, depending on what it thinks you are
   doing. Right now you have a summary of the main function keys,
   plus a few other things.  Press F10 (without the Alt), and
   you'll get a summary of one-letter debugger commands.  Press
   F10 a second time and you'll get a summary of Ctrl-key
   commands.  Finally, press F10 a third time to return to the
   function-key help screen.
                                                              2-2

6. Let's try an immediate assembly language instruction. Press
   the "M" key, which is the first letter of the immediate
   instruction MOV AX,123.  Note that the reverse video block
   jumps from the hash sign within the disassembly, down to the
   line just above the blinking cursor.  The block is the
   debugger's cursor; the blinking cursor is the program's
   console output cursor.  The debugger does not use the blinking
   cursor because we do not want the program's output to
   interfere with the debugger's output.  Also note that the help
   window is now telling you that you are typing in an assembly
   language line.

7. Complete the line MOV AX,123 followed by the ENTER key (from
   now on I'll assume that you know that lines are followed by
   the ENTER key, and that any periods at the end of a line are
   part of my sentence, and not part of what you type).  The
   debugger immediately executes the assembly language line you
   just typed, setting the register AX.  Note that you did not
   have to learn a debugger command for setting registers; if you
   know A86, you already know how to set registers!  The value of
   AX is now 007B, which may surprise you if you expected 0123.
   A86's default base is 10, so 123 was taken as decimal; which
   is hex 7B.  Type MOV AX,0123 instead, to get a value of hex
   123.

8. Let's now play with the flags display.  Type the line ADD
   AL,05D, which changes AL (the last two digits of AX) to hex
   80, and alters the flags to "o is a ".  The interrupt flag is
   still on; but zero and parity-even are now off.  They have
   been replaced by "o" overflow, "s" sign, and "a" auxiliary
   carry.

9. Type the line consisting of just CMC.  This is the Complement
   Carry instruction.  Observe that the "c" appears.  Notice also
   that the CMC that you typed remains on the screen.  Notice on
   the help window the entry "F3 RepeatCmd".  This tells you that
   the F3 key will repeat the last line command (not function
   key) that you typed.  Press F3 several times, to see the carry
   flag toggle on and off.  Isn't that the cleanest flags display
   you've ever seen?

10. Let's single step an instruction.  Press the F1 key.  This
    executes the program instruction, loading the SI register
    with TAIL_BUFF.  The disassembly cursor moves down to the
    next instruction.  Observe that SI has changed to 0081, which
    is the pointer to the invocation command tail, which should
    contain the string typed after HEXOUT: " 41 42 5A" followed
    by a carriage return code (hex 0D).
                                                              2-3

11. Let's examine memory to verify that last assertion.  Press
    the "1" key. The cursor jumps to the start of memory window
    1, and the help window gives you a huge choice of memory
    types to display.  The entry "ByteHex 2" tells us that "B"
    will cause hex bytes to be displayed.  The "2" indicates that
    the display occupies a fixed number of display bytes for
    every memory unit, namely 2 hex digits.  Type B followed by a
    comma, to indicate that you want nothing but hex bytes to be
    displayed. Now the help window asks for a segment location.
    Let's use the DS register: type DS followed by a comma. Now
    the help window wants an offset within the segment: type SI.
    Before typing the terminating ENTER, backspace out what you
    have typed, and watch the help windows regress appropriately.
    Isn't that impressive?  Now retype the line, "B,DS,SI".  Note
    that when you press ENTER, the line fills out with hex
    values: 20 34 31 20 34 32 20 35 41 0D etc.  (61 instead of 41
    is OK; it means you typed the invocation in lower case.)

12. Let's look at the same line, displayed as text.  Type "2",
    moving to memory line 2, then type the line "T,SI".  This
    time you specified type T for text, and you left out the
    segment register specification.  D86 uses DS when you leave
    out the segment register; so in this case you'll get the same
    segment. This time the display starts with "41 42 5AM"; the
    "M" is the carriage return, which is control-M, ambiguously
    displayed. You can read Chapter 6 later on for descriptions
    of all the types, including other text types allowing
    non-ambiguous displays.

13. Let's execute the next instruction, CALL GET_HEX.  Here we
    have a choice, between executing the procedure all at once,
    or stepping into the procedure to execute its instructions
    one at a time.  Let's try stepping in first: type the F1 key.
    The cursor jumps to location GET_HEX, on the same disassembly
    screen.  The SP register decrements from FFFE to FFFC, and a
    value 0106 appears on the stack.  This is the return address,
    pointing to the instruction following CALL GET_HEX.

14. Watch memory lines 1 and 2 as you press F1 again, single
    stepping the LODSB instruction.  You had set up the lines to
    be pointed to by SI.  Since SI changes when LODSB is
    executed, the memory displays advance to the next byte. Note
    that the AL register contains the value hex 20, a blank.

15. In a normal debugging session, we would continue stepping
    within GET_HEX, but let's not do that right now.  Instead,
    press the F6 "TrapRet" key, which starts the program going,
    trapping at the return address on top of the stack, which was
    0106.  The cursor jumps back up to location 0106, the value
    is no longer on the stack, and SI and the memory displays
    have advanced to 0084.
                                                              2-4

16. Let's try the classic "G" command, common to all debuggers.
    Type the line "G,0103", noticing the help windows as you go
    along.  After you press ENTER, the program runs until it gets
    back to the trap address you provided, 0103. Note that the
    program has called OUT_VALUE to output the "A" that
    corresponds to your input hex 41.  The "A" appears on the
    bottom line, and the blinking cursor advances.

17. Let's execute the next CALL GET_HEX all at once, by pressing
    the F2 ProcStep key.  SI advances again, and AL is loaded
    with the next value 42.

18. Notice that the disassembly is symbolic: the display is CALL
    GET_HEX, not CALL 0112 as lesser debuggers might give you.
    Let's try symbolic input: type the line "B,HEX_DIGIT?",
    causing the debugger to set a fixed trap at location
    HEX_DIGIT?.  Now set your program running with a simple G
    followed by the ENTER key.  The program traps at HEX_DIGIT?.
    Since this location is not in the disassembly window, the
    window is regenerated, and the cursor placed at HEX_DIGIT?.
    The memory displays now point to the final number "5A".

19. Press F3 to repeat the G-command.  The program traps at
    HEX_DIGIT? again, with SI advanced to the "A".  Press F3
    again; advancing SI to the final carriage return.

20. Press F3 yet again.  Since HEX_DIGIT? is never reached again,
    the program runs to its completion.  D86 automatically traps
    at the EXIT instruction: in this case, it is INT 021 with the
    AH register set to hex 4C, the function number for EXIT.  If
    we try to start the program again from here, we will be
    frozen here: we must issue the Q command to exit the session.
    Don't do it yet, though.

21. Before exiting, let's check out HEX_DIGIT? more thoroughly.
    First, we clear the breakpoint we set, by typing "B" followed
    by the ENTER key.

22. Type the command line "J 0200", jumping to a scratch-pad
    memory area.  Then press the F7 key, entering Patch Memory
    mode.  The cursor moves into the disassembled instruction,
    signalling that whatever you type is clobbering it.

23. Type in the lines "INC BL", "MOV AL,BL", and "JMP
    HEX_DIGIT?".  Press ENTER at the beginning of the fourth
    line, exiting Patch Memory mode.  The cursor will return to
    the left of the 0200 INC BL line.

24. Type the immediate command "MOV BL,'0'-2".  The BL register
    should change to the evaluated value, hex 2E.
                                                              2-5

25. Execute the patch subroutine by typing the line "CALL 0200".
    The value BL increments to 2F, which is one less than the
    lowest digit, '0'.  The Carry flag is set, indicating that
    HEX_DIGIT? has correctly judged 2F not to be a hex digit.
    Now press F3 repeatedly, executing your patched subroutine
    for each decimal digit.  The "c" will disappear as the values
    advance; and AL will hold the correct binary value for each
    hex digit BL.  When BL reaches 3A, the "c" comes back on
    again, indicating that we are beyond the decimal digits.
    When BL reaches 41, "c" goes off, and AL values of 10 through
    15 are displayed.  When BL reaches "47" "c" comes on yet
    again, because G is not a decimal digit.  Type "MOV BL,05F",
    followed by "CALL 0200", followed by F3 several more times to
    verify correct action for the range of lower case 'a' through
    'f'. You have, relatively quickly, done a thorough test of
    HEX_DIGIT?.  How long would that have taken on a lesser
    debugger?

26. Type Q followed by ENTER to exit the debugger.


```
{% endraw %}

## D03.DOC

{% raw %}
```
CHAPTER 3   REQUIREMENTS AND OPERATION


System Requirements for D86

D86 currently requires either an IBM-PC or compatible computer, a
Texas Instruments TI-PC, a Wang PC, a Tandy 2000, a DEC Rainbow,
or a Sanyo 550 or 555 computer. The computer must be running
MS-DOS V2.00 or later.  The IBM compatibility must exist at the
BIOS and video interface levels: D86 calls the BIOS to obtain
keystrokes and video status information; and, on an IBM-PC, D86
writes directly to video memory at segment 0B000 (if the BIOS
says monochrome) or 0B800 (if color).

I will be happy to work with you to add support for your
non-IBM-PC compatible MS-DOS computer.  See the end of this
chapter for the first steps in helping me do so.

D86 is fairly flexible about memory management.  If there is
enough memory, D86 will take the combined sizes of D86.COM and
A86.COM (currently about 38K bytes), plus 64K bytes for its own
stack, and leave the rest for the program being debugged.  If
memory is tight, D86 will reduce the memory allocated to its own
stack, down to a minimum of 16K bytes.  The segment occupied by
the program being debugged will be similarly reduced.  If the
program is a COM file, you can tell this by the initial SP value,
which is 0FFFE if there is a full 64K, less if there isn't.
Thus, D86 will work with as little as 70K bytes beyond the
operating system; but the symbols capacity and the program's
memory will be severely limited in that case.  It is best to have
at least 166K bytes of memory available when D86 is running.


Invoking D86

You invoke D86 by issuing the command

   D86 [+V] [progname [command-tail]]

where progname is the name of the program you are debugging.  In
other words, you type a program invocation line just as if you
were about to execute the program without a debugger, except that
you append D86 before the line.

The following sections describe in detail the elements of the D86
invocation line, and how D86 acts on them.



Finding the Program File

On most other debuggers, you have to give the full file name,
with an explicit extension and a specific directory.  With D86,
you don't: D86 uses almost the same algorithm for locating a
program file that COMMAND.COM does:

1. Look for COM, then EXE, then BAT in the current directory.
                                                              3-2

2. Look for COM, then EXE, then BAT in each directory in turn
   given in the PATH environment variable.

The one difference is that D86 will look only for one extension
if you give an explicit extension (and it doesn't have to be COM,
EXE, or BAT).  COMMAND.COM ignores the extension you give-- I
thought that was just too absurd, and didn't duplicate it.

A strange feature that I did duplicate is COMMAND.COM's lack of
concern for whether the program is named COM or EXE.  If the
program file begins with a valid EXE header, it's treated as an
EXE no matter what it is named.  If not, then it's treated as a
COM file.

D86 provides limited support for BAT files.  (That's better than
other debuggers, which provide no support.)  If your program is a
BAT file, D86 reads the first line of the file and pretends that
that was what you typed following "D86" in your invocation.  The
D86 status screen (gotten via Ctrl-S) gives you this line, and
tells you what BAT file it came from.

The BAT file limitations are that D86 doesn't skip over remark
lines, doesn't substitute batch-file parameters, and doesn't
perform console redirection specified in the batch-file line.

You can also invoke D86 with no progname.  The debugger comes up
with no program loaded, allowing you to simply poke around the
machine.

If D86 had a problem loading your program, you'll see all NOPs in
memory instead of instructions.  You can type Ctrl-S to get the
status screen that tells you what the problem was.



Finding the Symbols File

D86 is a symbolic debugger.  It uses a special .SYM file produced
in one of three ways:  First, if your program was produced by
A86, then the .SYM file was produced by A86 at the same time.
Second, if your program was produced by a high-level language
such as Pascal or C, you can feed the linker's .MAP listing to
the special MAPD86 tool, available to registered D86 users only.
Third, you can "reverse engineer" a program by adding symbols
while in D86's patch mode, then create a .SYM file with D86's W
command.
                                                              3-3

When invoked, D86 looks for a file with the program's name and a
.SYM extension.  D86 first looks in the current directory for
this file, and then in each directory specified in the PATH
environment variable.  It is not necessary for the SYM file to
exist.  If there is no SYM file, the debugger simply comes up
with no user symbols defined.  You'll also get no user symbols if
the SYM file was not of a correct format (it wasn't produced in
one of the ways mentioned in the previous paragraph, or it has
been corrupted in some way).  If you were expecting symbols and
didn't get any, you can press Ctrl-S to get the status screen
that tells you what the problem was.


Two-Screen Debugging with +V

The +V option can be used if you have both a monochrome and a
color monitor.  You invoke D86 when the operating system is on
one monitor-- with the +V switch, the debugger will appear on the
other monitor, and program console output will appear on the
operating system's monitor.

In order for the +V option to work, you must initialize both
screens by MODEing to them sometime after powering up the
machine. You should also make sure that the blinking cursor is at
the bottom of the screen on which the debugger will appear (the
simplest way to do this is to type ENTER until the prompt gets to
the bottom).  If you can suppress the blinking cursor, that's
even better.  See in your DOS operating manual for instructions
on how to use MODE to switch between screens.  D86 doesn't do the
initialization, because I couldn't figure out how to get the BIOS
to do so without blanking the screen, and you might not want the
screen blanked every time you start a D86 session.



The D86 Screen Display

When D86 starts up, it generates a full-screen display, and
awaits your debugger commands.

In the top part of the screen is a symbolic disassembly of the
A86 program, with the screen cursor positioned next to the
instruction pointed to by the 8086 instruction pointer.

In the lower left corner is a fixed display of the complete 8086
register set.

At the top of the second column of the register-set display is a
display of the 8086 flags.  Each flag displays as blank if the
flag is off; a lower case letter if the flag is on:
                                                              3-4

     o   for overflow,
     d   for direction,
     i   for interrupts enabled,
     s   for sign,
     z   for zero,
     a   for auxiliary carry,
     e   for parity even, and
     c   for carry.

Across the bottom line of the screen is a display of the contents
of the user stack.  The display begins next to the SP register
value, with the number of elements on the stack.  (The stack is
assumed to have 0 elements when SP is at its original value,
which is 0FFFE for COM files, and a value specified in the header
record for EXE files). The number of elements is followed by a
colon, followed by as many of the top stack elements as fits on
the line.  The initial display will have zero elements; nothing
is yet on the stack.

To the right of the registers are 6 lines, numbered 1 through 6.
On these lines, you can generate windows into 8086 memory,
displaying bytes, words, or ASCII text in a variety of formats.
The windows can be located either at absolute memory locations,
or be pointed to by any of the 8086 registers.  The commands you
issue to generate these windows are described in Chapter 6.


D86 Commands

There are 5 kinds of activities you perform in D86:

   1. Issuing assembly language commands for immediate execution

   2. Issuing debugger commands via lines that begin with a
      single letter

   3. Issuing debugger commands via the function, Ctrl, and
      cursor-control keys on your keyboard

   4. Setting up windows that display memory

   5. Issuing assembly language commands to enter into memory
      (PatchMem)



Immediate Assembly Language Commands

A primary part of the D86 command language is the A86 assembly
language. With it, you can jump to different areas of your
program, set your registers, perform arithmetic, and call any of
the procedures of your program.  Simply type in any legal A86
instruction, and it will be executed immediately.

JMP and RET instructions cause the program counter (and thus also
the disassembly) to move to the indicated destination.  CALL
instructions cause the entire procedure to be executed.
                                                              3-5

WARNING: The immediate-execution feature is a little tricky if
you are in a multi-segment program, of if you jump to exotic
parts of the 86 memory space (i.e., into MSDOS, ROM, video
memory, or the interrupts table). This is because D86 needs a
buffer in which to put the immediate-execution command.  The
buffer should be in your program's CS segment, so that commands
such as jumps and near calls execute correctly.  So D86 must
always search in CS for a satisfactory buffer.  Here is how D86
finds it:

  1. If you declare a label D86_BUFFER, pointing to a buffer
     within your program, then D86 will use that buffer as the
     offset for its immediate instruction.

  2. If not, then if the program's CS register is the same as its
     SS register, D86 will use (SP-300) as its immediate buffer.
     Thus, your stack should have plenty of room (a good practice
     in general).

  3. As a last resort, D86 uses offset 00E0, which points to the
     last 32 bytes of the Program Segment Prefix (PSP).  In that
     case, if you were to issue an immediate command that reads
     from a disk file, you would be in trouble, because the
     disk-read operation clobbers the PSP, and the command would
     not be trapped back to the debugger.

  In cases 1 and 3 above, the segment containing the buffer is
  the program's CS segment, unless that is out of range (below
  the program's original CS, or above the top of available
  program memory).  If the program CS is out of range, the
  program's original CS is used instead.  In that case, immediate
  instructions such JMP, RET, and CALL will not work correctly.

  Note that the above caveats do not apply to single stepping.



Entering Instructions Into Memory

D86 allows you to alter 8086 memory in two ways: first, you can
issue immediate assembly language commands which, when executed,
store values in memory.  The other method is to enter a special
mode, in which you enter instructions directly into 8086 memory.

You enter this mode by typing the F7 (PatchMem) key. The screen
cursor jumps from the left edge of the line at the current
program counter, into the middle of the line where the
instruction is.  You start typing over the instruction, to signal
that you are clobbering the instruction that was there.  If you
did not intend to enter this mode, you can backspace back to the
start of the instruction, and type a carriage return.

Each line you type in is checked for errors.  If there was an
error, a message is displayed, the cursor remains at the same
location, and you try again. If there was no error, the cursor
moves beyond the newly-assembled line, and you can type in
another line.
                                                              3-6

To exit the memory programming mode, you type any of the control
key commands at the beginning of the line.


Entering Data into 8086 Memory

You can deposit data into the 8086 memory space by using the
programming mode described in the above section.  Simply enter DB
and/or DW statements instead of instructions.  Note that ASCII
strings can be entered with the DB instruction; and that arrays
can be initialized via the DUP operator in a DB or DW statement.


Adding Symbols to a Program

Patch mode also allows you to do something that you cannot do in
immediate execution mode: add symbols to the program.  You can do
so by either:

   1. Typing in a new symbol name, followed by a colon; or

   2. Typing in an EQU directive.

There are several uses for this.  First, you might want to create
an abbreviation, by equating a short name to a long one, or to a
hard-to-remember constant value.  Second, you might want to
"reverse engineer" a program for which you have a .COM file, but
not the A86 source code.  Each time you add a label, the
disassembly becomes more readable.  Third, you might want to
label code that you have added in patch mode.

After you have added symbols to the table, you can save the
resulting expanded table with the W command.  Simply type W
followed by the ENTER key at the main debugger command level.

Forward referencing is allowed when you are in patch mode.  You
must be careful, however, to resolve any forward references you
have made.  In particular, you will cause the assembler to become
very confused if you overwrite a forward reference with some
other code before you resolve the reference.  So don't!



What to Do if D86 Doesn't Work on Your Computer

If D86 does not work properly on your system, I would like to
hear about it.

If you saw no debugger screen at all when you tried executing D86
HEXOUT, try D86 +V HEXOUT.  Let me know what happens then.

I have written a tool called D86CHECK, that outputs information
about your computer system.  Please run D86CHECK to get that
information.  If you are sending me a letter in the mail, you can
direct output to your printer; e.g., D86CHECK >PRN.  If you are
sending me a disk, or a message on the bulletin board, you can
redirect output to a file; e.g. D86CHECK >OUTFILE.
                                                              3-7

Give me the output to D86CHECK, and tell me as much as you can
about the problems you are experiencing.  Also tell me the brand
and model of your computer.  I'll try to see to it that the
problem is fixed.

Again, my phone number is (812)339-1811.  I also receive BBS mail
at (812)855-7252 and (812)332-7227.  My address is:

   Eric Isaacson
   416 E. University Ave.
   Bloomington, IN 47401-4739


If You'd Like to Be Ambitious

If you are skilled in assembly language programming, you can
write the BIOS interface routines for D86 yourself, and send them
to me.  That's probably the quickest way you'll get D86 up on
your computer.  To do this, you need to get the files XBIOS.8 and
BIOS.8.  These files are included in the D86 package for versions
V3.11 and earlier.  I deleted them starting with V3.12, to make
room on the distribution diskette; but they are still available
in the file D86BIOS*.ZIP (where * is a digit that will increment
with new versions).  The file can be downloaded from either of
the BBS systems listed in the previous section.

You must add code to BIOS.8 to detect your machine, take a BIOS
keystroke, ring the bell, and copy to your video memory.  If you
do not feel up to actually making the modifications yourself,
then you can send me sufficient documentation about your
computer, that would let me do so.  If you do not know where such
documentation exists, ask your computer dealer or your user's
group.

IMPORTANT NOTE: My efforts in porting D86 are done with the
understanding that you will become a registered user.  I would
prefer that you register in advance; if this makes you nervous,
then I will accept a written promise from you that you will
register when I get D86 working on your machine.  (Advance
registrants will get the fastest turnaround.)


```
{% endraw %}

## D04.DOC

{% raw %}
```
CHAPTER 4    D86 CONTROL KEYS

D86 has a set of functions invoked by single keys.  Keys which
switch the display (for example, to show a help screen) can be
pressed in any context, to be acted upon immediately.  Other
keys, such as the single-stepping keys, can be invoked any time
D86 is awaiting the beginning of an assembly language command.


Display Control Keys

There are numerous keys that let you control the switchable
window in the upper right corner of the screen.  The F10 and
Alt-F10 keys let you toggle between windows, giving you a "tour"
of what's available.  Various keys accessed by using the "Ctrl"
key as a shift key let you move directly to the window of your
choice.

The keys in this section are acted upon in any debugger context,
whether you are in the main command mode or in the middle of one
of the other modes (typing in a debugger command, an
immediate-execute line, a patch-memory line, or a memory window
specification):

ALT-F10   Toggles you between Help and Non-Help modes.  If the
          window is showing you a help page, it will switch to
          the last Non-Help page that was displayed.  If not, the
          window switches to the last Help screen displayed for
          the current context.

          (HELP key on Wang and DEC, F11 key on TI-PC, CTRL-PF5
          key on Sanyo)

F10       In non-help mode, toggles you between the available
          non-help windows: the sign-on/second disassembly
          window, the status window, the memory display window,
          and, if you have a floating-point chip, the
          floating-point display window.

          In help mode, toggles you between the help windows
          available in the current context.

          (Keypad 0 on the DEC, Print Screen on the Z-100)

Ctrl-I    (or TAB) takes you from any other window directly to
          the sign-on/second disassembly window.  This window
          contains the D86 sign-on message until the first time
          that the Instruction Pointer leaves the first
          disassembly page.  From that point on, the sign-on
          message is no longer available, and you get a second
          disassembly page instead.

Ctrl-S    Takes you from any other window directly to the
          debugger status window.

Ctrl-F    Takes you from any other window directly to the
          floating point display window, if your machine has a
          floating point chip in operation.  If not, this key is
          ignored.
                                                              4-2

Ctrl-N    If you have a memory display window in sight, this key
          advances to the Next window full of memory.

          If you do not have a memory display window, but do have
          at least one memory line specification, this key takes
          you from any other window to the memory display window,
          continuing from the end of the last line display.

          If you have no memory line specifications set up, this
          key is ignored.

Ctrl-P    If you have a memory display window in sight, this key
          retreats the pointer to memory displayed, by the amount
          displayed in the window.  If all the memory formats
          specified generate a fixed-size display (such as the
          B,W,T formats), then this will effect a "Previous page"
          function.  If there are formats producing a
          variable-size display (such as the N,D,C,S,L formats),
          then the retreat will be a probably imperfect
          approximation to an appropriate "Previous page" amount.

          If you do not have a memory display window, this key
          will go to one, just like the Ctrl-N key.

Ctrl-Q    If you are not displaying a help window, this key takes
          you to the last help window that was displayed for the
          current context.  If you are already displaying a help
          window, this key toggles through all the help windows
          available for this context.


Instruction Pointer Positioning Control Keys

All the remaining keys in this chapter can be invoked any time
the debugger is in its main command mode, awaiting the first key
of a debugger command or immediate assembly line.  They change
the value of the Instruction Pointer (IP register), and thus they
change the disassembly display.

None of the control keys in this section cause any program code
to be executed, other than the equivalent of a JMP instruction,
to the place that the disassembly cursor winds up.

WARNING: On some debuggers, you can change the location of what
is being disassembled without changing the IP register value.
I've decided on a "what you see is what you get" philosophy,
since you may well be moving the IP cursor to effect a jump in
the program (for example, you might use the Down-Arrow key to
experimentally skip over the execution of one or more
instructions in the program).  If your intention was just to look
around the program before continuing execution at the place you
left off, you may use the HOME key to return to the place where
execution last halted.

Down-Arrow   Jump to the instruction following the current one.
             Visually, the disassembly cursor moves down by one
             instruction line.
                                                              4-3

Up-Arrow     Jump to the instruction preceding the current one.
             Visually, the disassembly cursor moves up by one
             instruction line.  NOTE that the implementation of
             this function is a little tricky, since it's
             impossible to reliably disassemble backwards.  What
             D86 does is retreat a fixed, fair-sized distance,
             disassemble forward until the current instruction is
             reached, and take the instruction disassembled just
             before the current one.  If there is non-instruction
             code in memory shortly before the current position,
             the synchronization may fail, and this instruction
             may put you in the middle of a previous instruction
             instead of the beginning.  If this happens, you may
             adjust by using the Ctrl-D or Ctrl-U keys.

Ctrl-D       This key is identical to the Down-Arrow key, except
             the jump forward is just one byte, instead of a full
             (usually multibyte) instruction.  (IP is
             incremented.)  You use this key when you think
             you've landed in the middle, rather than the start,
             of an instruction.

Ctrl-U       This key decrements IP, moving the cursor "Up" by
             one byte's worth.  Like Ctrl-D, it is used to
             manually synchronize disassembly.

Pg Dn        Jump to the next disassembly page, at the memory
             location immediately following this page.  Repeated
             pressing of this key allows you to scan program code
             quickly.

             (Alt-Down-Arrow on the TI-PC, Ctrl-C on the Victor,
             Next Screen on the DEC, F12 on the Z-100)

Pg Up        Jump to the previous disassembly page, ending with
             the instruction just before the top instruction on
             the current page.  NOTE the warning given with the
             Up-Arrow description, about possible synchronization
             problems, applies here as well.

             (Alt-Up-Arrow on the TI-PC, Ctrl-R on the Victor,
             Prev Screen on the DEC, F11 on the Z-100)

Home         If you have moved the IP cursor since the last
             program instruction executed, then this key returns
             IP to that spot.  If you are already at that spot,
             this key returns you to the program's starting
             location.  For COM files, this is always location
             0100 in the original code segment.  For EXE files,
             this location was derived from the EXE header
             record.  Note that repeated pressing of HOME will
             cause IP to alternate between the two locations, so
             you can't mess yourself up by pressing the key one
             too many times-- just press it again.

             (Ctrl-K on the Victor, Find on the DEC)
                                                              4-4

Ctrl-E       Jump to the End of the program, as determined when
             it was loaded, and possibly advanced if the program
             was patched from the end.



Program Execution Control Keys

Ctrl-X       Single step the current instruction.  If the
             instruction is a call, go into the procedure to
             single step it.  If you want the entire procedure
             executed on a single keystroke, use the F2 key.

F1           Single-step the current instruction just like the
             Ctrl-X key, except that INT instructions are
             executed all at once, not stepped into.  This
             exception was added with D86 V3.21, because stepping
             into DOS or the BIOS is a hazardous operation,
             likely to crash the computer.

             (Keypad 1 on the DEC)

F2           Procedure step: start program, trapping at the
             instruction following the current one.  This is used
             for executing a procedure call all at once; for
             breaking out of a loop; and for executing a repeated
             string operation all at once.

F4           Start the program, setting a trap at the destination
             of the conditional jump instruction currently
             pointed to.  If we are not pointing to a conditional
             jump, then we single step.

F6           Start the program, setting a trap at the address on
             top of the stack (hopefully a procedure return
             address).

F9           Go until here: Start the program from the point at
             which it last stopped, setting a trap at the current
             CS:IP location.  If you didn't move the IP cursor
             since the program stopped, this will simply tell the
             program to go until the next time this same point is
             reached.  If you did change IP, (for example, if you
             paged forward to find an interesting section of
             code), this command saves you from having to go back
             and single-step up to this point.



Special Action Control Keys

F3           Repeat the last typed-in assembly language or
             debugger command

F7           Enter the Patch Memory mode, described in Chapter 3.
                                                              4-5

Shift-F7     Mark the current CS:IP memory location, for use by a
             following F debugger line command.  F can either
             return to this location, or find memory bytes that
             match the ones at this location.

             (Ctrl-7 on the Sanyo, Select on the DEC)

Alt-F9       If you have a Color video board, your debugger
             display may become corrupted by the program's
             console output.  If it does, press Alt-F9 to
             eliminate the corruption.  This key exists only
             temporarily; on later versions of D86, the
             corruption will be corrected automatically.

             (Ctrl-Shift-PF4 on the Sanyo)

Ctrl-T       Reset the debugger's internal Top-of-Stack pointer
             to the current SP value.  This will cause the
             current stack display to become empty, so that
             subsequently pushed values will appear by themselves
             on the stack display.


```
{% endraw %}

## D05.DOC

{% raw %}
```
CHAPTER 5   COMMAND LANGUAGE

In addition to immediate-execution assembly language commands,
there is a set of commands recognized by the debugger.  They are
identified by the first keyword on the line being a single letter
(i.e., the second character of the line is a non-letter, usually
a comma or ENTER).


General Operands to Debugger Commands

Most of the debugger commands consist of their single-letter
identifier, followed by a comma, followed by one or more general
operands, separated by commas.  General operands can be one of
the following:

   a. a numeric constant, whose format is just as in the assembly
      language (leading zero means default hex, otherwise default
      decimal)

   b. a register name

   c. a user symbol from the assembly language program being
      debugged.


Format of Debugger Command Examples

Many of the examples given below will be given in double quotes.
Note that the double quotes are not part of the command.  You are
encouraged to try out the example on the debugger, by typing the
string within the quotes, not including the quotes, and always
followed by the ENTER key. Note further that the double-quoted
string may be broken across two lines of this manual, but that
does not mean you should type an ENTER where the string is broken
--debugger commands always consist of a single line, always
terminated by ENTER.


The Debugger Command Set

Following is a description of the debugger commands recognized:

B  sets and clears the fixed breakpoints of the program.  The
   debugger has four breakpoints.  Two are transitory; they are
   automatically cleared after each return from the program to
   the debugger.  They can be set by the G command. The other two
   are fixed-- they will remain in effect until you explicitly
   clear them.  The fixed breakpoints are controlled by this B
   command.

   You follow the B with zero, one, or two general operands.  If
   there are zero operands (the B is followed immediately by an
   ENTER), then both fixed breakpoints are cleared.  If there are
   one or two operands, then the fixed breakpoints are set to the
   operands.
                                                              5-2

   Note that previously-set breakpoints can be implicitly
   cleared, by overwriting them with other breakpoints.  If your
   B command has one operand, and there was one breakpoint
   previously set, the debugger sets the unused breakpoint, so
   that both remain in effect.  If your B command has one
   operand, and both breakpoints were previously set, the most
   recently set breakpoint is saved, and the older breakpoint is
   overwritten.

   The status screen, displayed by typing Ctrl-S, shows you the
   B-command breakpoints in effect.

   Examples: if you type "b,numout", the debugger will set a
   breakpoint at location NUMOUT, which should be a label in the
   program being debugged. You may start and stop the program
   many times, and the breakpoint will stay there.  You may even
   allow the program to stop at NUMOUT repeatedly; the breakpoint
   is not cleared even if the program stops there.  If you
   subsequently type the command "b,01000", then there will be
   breakpoints at both NUMOUT and location hex 01000.  If you
   then type "b,01200", the first breakpoint NUMOUT is
   overwritten; the two breakpoints now in effect are 01000 and
   01200.  The 01000 breakpoint will be next in line to be
   overwritten.  You may clear both breakpoints by typing "b".
   There is no way to clear one breakpoint at a time.


D  sets or clears a data breakpoint.  This command is available
   only to registered D86 users running on a 386-based machine. A
   data breakpoint causes the program to trap to the debugger
   whenever a specified memory location is accessed.  The trap
   occurs after the instruction causing the access, so you should
   press the Up-arrow key to see the instruction.

   You follow the "D" with a comma, followed by a specification
   parameter.  The parameter consists of up to three characters,
   at most one each from the following categories:

   1. A letter giving the size of the memory element being
      checked: B for byte, W for word, D for doubleword, or a
      minus sign if you are clearing the breakpoint.  Default is
      B.

   2. The letter R if you wish to trap if the memory location is
      either written to or read from.  If you leave the R out,
      the trap will occur only if the memory location is written
      to.

   3. A digit, (0,1,2, or 3) giving the number of the 386
      breakpoint register you are using to set the trap.  Default
      is 0.
                                                              5-3

   You terminate the specification parameter with a comma, then
   provide one or two numbers to specify the memory location you
   are trapping. If you provide two numbers, the first is the
   segment register value and the second is the offset.  If you
   provide only one number, it is the offset-- the value of DS is
   used as the segment register value. As with all value
   parameters in D86, you can give a register name or a label
   instead of a number.  You can also leave out the address
   entirely, to preserve the previous address setting of that
   breakpoint register.

   Note that the 386 requires Word and Doubleword breakpoints to
   be aligned in memory.  If you provide an odd address for a
   Word breakpoint, the 386 will ignore the bottom bit of your
   address.  Similarly, the 386 will ignore the bottom two bits
   of your address for a Doubleword breakpoint.

   Examples: D,R1,ES,0400 sets a byte data read-or-write
   breakpoint, using the 386's register number 1, at memory
   location ES:0400.  D,-1 would clear that breakpoint.  D,R1
   would set it again with its previous value.  D,W,MY_VAR sets a
   Word breakpoint, using the 386's register number 0, at
   location DS:MY_VAR-- the trap will occur if either byte of the
   variable MY_VAR is written to (but MY_VAR should be aligned to
   an even address for this to work).

   If the D command is enabled, you'll get a one-line display of
   the data breakpoint registers in the status window (invoked
   via Ctrl-S).  The registers are presented in order: 0,1,2,3.
   The breakpoint type is given, followed by the 5-digit absolute
   memory address of the breakpoint.


F  finds a string of memory bytes.  The memory to be searched
   starts at the current CS:IP location.  The string being sought
   is contained in memory at the CS:IP location marked with the
   last Shift-F7 command.  The number of bytes in the target
   string is given as the first operand to the F command.  For
   example, "F,1" finds the next instance of a single byte value
   after the current CS:IP.  If the marked location points to a
   NOP, "F,1" will find the next NOP code.

   If you provide a second operand to F, it is a "retreat
   number".  For example, "F 2,10" assumes that you are looking
   for a 2-byte sequence, and you have retreated 10 bytes from
   the starting location for your search.  When the string is
   found, F will retreat 10 bytes from that string.  That way you
   can view the instructions that preceded the found string.  I
   use this feature when I am searching for BIOS and DOS
   interrupt calls in a program.  I want to retreat before the
   calls, to see what function numbers were loaded into
   registers.  I can use the F3 key to repeat the searches,
   giving me a sequence of disassembly displays with the
   interrupt in the middle.
                                                              5-4

   F with no operands returns CS:IP to the marked location, in
   case you want to use F7 to deposit another string to be
   searched.

   If you have never pressed Shift-F7 in this session, the marked
   location is 0C000 of the program's starting segment.  That's
   often a good "scratchpad" area for small programs, far from
   both the program and the stack.


G  starts the user program.  You can give one or two operands to
   G, specifying locations within the program at which you wish
   to return to the debugger.  These are "transitory
   breakpoints"; both of them are cleared when the program
   returns to the debugger for any reason.

   Whenever you start the program, at least one instruction from
   the program will be executed, even if there is a breakpoint at
   the current instruction pointer location.  This means you can
   set a breakpoint at the current location; instructing the
   program to return to the debugger the next time it gets back
   to the current location.


J  jumps to the location indicated by the operand, within the
   current code segment.  J is useful when you are exploring
   memory outside of your program's memory area.  In that case,
   the immediate JMP command is executed from a buffer within
   your program's original code segment.  JMP would therefore
   return you to that segment.  J will keep you in the distant
   segment.


L  creates a disassembly listing, with addresses, hex bytes, and
   disassembled code.  You can output either the entire COM
   program, or a section of memory beginning with the current
   CS:IP location.  You omit the first operand if you want the
   entire COM program.  If you want a section of memory, you
   provide the offset beyond the memory section as the first
   operand.  You give the name of the output file for the listing
   as the second operand.  If you omit the second operand, the
   listing goes to the printer.  Examples: L,,FOO.LST outputs the
   entire COM program to FOO.LST.  L,0200,SEG.LST outputs the
   section of memory from CS:IP up to CS:0200 to SEG.LST.
                                                              5-5

O  sets a special fixed breakpoint.  Whenever your program calls
   MSDOS via INT 021, the debugger will monitor the function
   number passed in the AH register.  If the function number
   falls within the range specified by this command, the program
   will trap back to the debugger.  If you give two operands to
   O, the operands are the lower and upper bounds for the range
   of trapped functions.  If you give one operand, only that
   function number will be trapped.  If you give no operands, any
   previous O-trap setting is cleared.

   For example, note that function 3F hex is the READ function
   for MSDOS version 2.  If you want to trap whenever this READ
   function is invoked, you can issue the command O,03F and then
   start up your program with the G command.  Another example:
   suppose you want to insure that a program does not make any of
   the new Version 3 DOS calls, 59 hex and above.  You can issue
   the command O,059,0FF and then start your program.

   NOTE: if the second operand is less than the first, then the
   range wraps around through zero.  For example, O,059,030 traps
   on 059 through 0FF, and also 0 through 030-- both version 3
   and version 1 calls.

   SECOND NOTE: The EXIT function, hex 4C is always trapped by
   D86, regardless of your O-command settings.  The only way you
   should be able to exit from D86 is via the Q-command.  (If you
   do succeed in exiting some other way, I want to hear about it.
   In that case, D86 will become very confused if you reinvoke it
   before rebooting the computer.)


Q  exits the debugger and goes back to the operating system.


W  writes the program (if it was a COM format) and the symbol
   table back to the disk.  In this present version, you don't
   have any options as to what to name the files.  The program
   name given when D86 was invoked is always used, except that
   the files are always written to the current directory.  The
   program file has the same extension as the file that was
   loaded, and the symbols file has the SYM extension.

   D86 writes the program from location 0100 in the original code
   segment, up to the end-of-file location saved when the program
   was loaded, and possibly extended by a patch-memory operation
   while at the end of the program.  Any symbols added while in
   the patch-memory mode are saved in the symbols file, so that
   you can "reverse engineer" programs for which you do not have
   source, and save the symbol table results you have gleaned.


```
{% endraw %}

## D06.DOC

{% raw %}
```
CHAPTER 6   MEMORY DISPLAY OPTIONS


Memory Display Windows

The debugger allows you to set up windows into your program
memory space. Using these windows, you can view memory in a
variety of formats.  The windows will remain in effect until you
cancel them; updating themselves automatically if the memory
changes.

There are six single-line memory windows always present, in the
lower right portion of the screen.  In addition, you can have the
upper-right window display a 14-line page of memory values.


Single-Line Memory Windows

A single-line memory window line consists of a specification,
typed in by you, followed by a display, supplied by the debugger.

To type in a specification on any one of window lines 1 through
6, simply type the associated digit, 1 through 6, when the
debugger is in its main command mode.  The cursor will jump to
the beginning of the memory-window line you are specifying.  You
then type in a display format specification, followed by the
address of memory you want displayed.

The simplest form of the display format specification is a single
letter, signifying one of the display types available.  The
choices are:

    B  for hexadecimal bytes
    W  for hexadecimal words
    N  for decimal bytes
    D  for decimal words
    Q  for octal bytes
    O  for octal words
    T  for text; each byte reduced to one ASCII display
          character
    A  for ASCII text, each byte occupying 2 display
          characters (the exact display is spelled out later
          in this chapter)
    C  for ASCII characters, occupying 2 bytes if needed,
          otherwise one

A format specification of one of the above letters will cause the
debugger to display the array of bytes starting at the address
you specify, in the format indicated by the letter, as long as
there is room on the line. All letters in a format specification
(or in any other context in the debugger) can be typed in either
upper or lower case.
                                                              6-2

The format specification should be terminated by a comma.  After
the comma (and an optional space), you type the address of memory
you want displayed. This consists of two values, the segment
followed by the offset.  The values should be separated by a
comma. You can omit the segment value if you wish: in that case,
the current value of DS is used. The debugger reminds you that
you have specified this option by following what you type with 2
commas instead of one.

The value you type can take one of the following forms:

   a. a numeric constant, whose format is just as in the assembly
      language (leading zero means default hex, otherwise default
      decimal)

   b. a register name (IP is now accepted as a register name)

   c. a user symbol from the assembly language program being
      debugged.

After you type the address specification, you hit the ENTER key,
and the debugger fills out the rest of the line with the memory
display.

For example, if you want to display hex bytes starting at 01000
hex on display line 2, you type 2b,01000<ENTER>. The cursor jumps
to the line immediately when you type the 2, and it displays the
b,01000 on the line as you type it.  The b says you want hex
bytes, and the 01000 has a leading zero to signify a hexadecimal
address, not decimal.  When you press the ENTER key, the debugger
displays two commas, followed by the hex bytes.  If the memory is
zeroed, you will see 00 00 00 00 00 etc. to the end of the
display line.


Erasing Memory Display Lines

Any memory display window that you specify will remain in effect,
always updated to show the latest memory contents, until you
explicitly erase it. To erase a window, you type the number of
the window, followed by a blank.  The line will also be erased if
you start typing a format specification, and you hit the ENTER
key before you get to your address specification.

In the coming sections, many of the examples assume (and they say
so) that your display is blank before you type in the example.
You can always get a blank display by typing in each number
followed by a blank: "1 2 3 4 5 6 ".

If you accidentally type a digit and DON'T want to erase the line
your cursor has jumped to, press the ESC key to return to the
main command mode.
                                                              6-3

Continuation Lines

You may continue a memory display window onto the next line, by
placing a double quote mark " at the beginning of the next line.
You may do this in one of two ways: you may type the number of
the next line, followed by the double quote mark; or you may
simply type the double quote mark at the command level.  The
first method allows you to specify which window line you want
continued, if there is more than one.  The second method is more
convenient to use.  It places the quote mark on the last blank
line that immediately follows a non-blank line.

You may continue placing " marks on as many lines as you have,
creating a multi-line display.

The debugger follows the " mark with the address of memory being
displayed, followed by the memory, according to the start of the
type specification of the line being continued.  The memory
display is aligned with the display of above line.

If you are creating a multi-line display, and your specification
is a long one, you may wish to start the display at the beginning
of the next line, rather than after the specification on the
first line.  This will often give you more room.  You do this by
terminating the format specification with a slash / instead of a
comma.  For example, to display many hex bytes at the array
BYTE_ARRAY, type 1b/byte_array<ENTER> followed by five double
quote marks, when the memory display is empty.


Mixed Format Specification

Instead of having all your bytes or words on a line displayed in
the same format, you can mix your formats.  You do this by
providing more than one letter in your format specification.  The
debugger will display one memory unit for each letter-type you
specify.  The line will be filled out with the last type given.
For example, if you type 3nwb,01000<ENTER>, you will get a
display on memory line 3 of the decimal byte at 01000, the hex
word at 01001, and an array of hex bytes starting at 01003.


Numbers in a Format Specification

You may precede any letter in a format specification with a
number up to 255. The effect is the same as if you had repeated
the letter the given number of times.  For example, if you type 1
to go to memory line 1, followed by 4w10tb,02000<ENTER>, you will
get 4 hex words at 02000, 10 text characters at 02008, and an
array of hex bytes from 02012 filling out the rest of the line.
                                                              6-4

You may also end your format specification with a number up to
255.  This will cause the entire specification to be repeated the
given number of times. If there is room on the line for the full
number given, the display will stop there-- there will be no
repeating of the last type byte.  If there is not room on the
line for the full number of global iterations, the debugger will
stop at the end of the last iteration that would fit.  For
example, the specification b8 causes 8 hex bytes to be displayed,
and the remainder of the display line to be blank.  The
specification b3w9 will cause the debugger to try to output 9
records, each consisting of a hex byte followed by 3 hex words.
After putting out 2 such records, the debugger will see that
there is not room for a third full record, so it will stop.  This
stopping at the record boundary allows you to continue the
display, with correct alignment, on subsequent lines.


Spacing Between Memory Display Units

In general, the debugger provides a space between each unit (byte
or word) it displays.  There is an exception, however: the
debugger will not space between adjacent text characters (A,C, or
T specifications).

There are special specifiers G, J, and M, described in the
section below, that allow you to override the debugger's spacing
policies.


Special-Action Format Specifiers

In addition to the 9 letters already mentioned that specify data
types, there are 10 other letters, and 2 other characters, that
cause the debugger to perform special actions.  Following is a
complete description of all 21 non-digit characters that can
occur within a format specification:

=  causes a display, using the format of the letter following =,
   of the current memory pointer value, instead of the contents
   of the memory location.  If a letter does not follow the =,
   then W is used; i.e., the pointer is displayed as a 4-digit
   hex word.  There are two uses for this feature that come to
   mind:

   * If your address specification is symbolic, you can display
     the equivalent numeric address with =w, telling you exactly
     where the symbol is in memory.  Note that this display
     implicitly occurs at the beginning of continuation lines. If
     the format specification begins with =, then the implicit
     display is suppressed, because the same address is given
     explicitly by the L.

   * You can display the values of registers in a format other
     than hex.  For example, in the 8086 debugger you can display
     AX as a decimal number by specifying =d1,ax on one of the
     memory display lines.
                                                              6-5

@  causes the debugger to read the next byte it was going to
   display, and instead of displaying the byte, use it as a
   count, to repeat the next letter in the specification.  The
   debugger uses only the bottom 7 bits of the memory byte for
   the count.  For example, if the memory contains a length byte
   followed by that number of text characters, the text could be
   displayed by specifying @t (or @a or @c, depending on what you
   want the display to look like).  If the memory contains 05 41
   42 43 44 45, the @t would cause ABCDE to be displayed.

A  causes a display of a single ASCII byte, always using 2
   display bytes. The following table shows what is displayed for
   unusual bytes:

     range of N        display of N                Example

     00--1F            ^ followed by N+040         02 is ^B
     22                ""
     23                "#
     24                "$
     5E                "^
     7F                ^r  (r stands for rubout)
     80--9F            $ followed by N-080+040     081 is $A
     A0--FE            # followed by N-080         0B1 is #1
     FF                $r

   All other bytes cause a display of a space following by the
   appropriate ASCII byte.  The A specification is used when you
   need guaranteed display length for proper alignment of
   continuation lines; and you do not want the potential loss of
   information provided by the single-byte T specification.

B  causes a display of a single byte as a 2-digit hexadecimal
   number.  Numbers less than hex 10 have a leading 0, so that
   the display is always 2 digits.

C  causes a display of a single ASCII character, just as the A
   specification, except that normal characters (not in the
   table) display as just one byte, without the preceding space.

D  causes the display of a 16-bit word as an unsigned positive
   decimal number. There will be no leading zeros in the display;
   so the length of the display depends on the size of the
   number.

F  causes the display of a floating point number, in one of the
   three formats recognized by the 8087.  You must have a
   floating point chip (8087 or 287) installed in your computer
   for this to work.  You specify which of the three formats you
   are reading by one of three letters immediately following the
   letter F:

   FD  specifies a 4-byte Doubleword (single precision) number
   FQ  specifies an 8-byte Quadword (double precision) number
   FT  specifies a Ten-byte number-- 8087 extended precision.
                                                              6-6

G  causes a gap between the adjacent display formats, of one
   space more than there would have been without the G.  For
   adjacent string bytes, this means a space where there would
   have been none.  For other data types, this means two spaces
   where there would have been one.

J  (join) causes two adjacent data types, that would have had a
   space between them, to have no space.

L  (line) causes the display of an entire text line, using the
   C-format for each character of the line.  The debugger does
   not display the terminating carriage return; nor does it
   display the following linefeed if there is one.  (If you want
   it to, specify LUC or LUUCC instead of L.)  If a carriage
   return is not found and the display line fills, then the
   L-specifier is cut off in mid-string.  Any continuation line
   will start up at the beginning of the format specification, at
   the mid-string place in memory.

M  (mark) causes a vertical-bars symbol to be displayed.  The
   symbol will replace a separating space that would have been
   output in the position.  If you want the space, you can
   provide G on either side (or both sides) of the M.

N  (number) causes the display of an 8-bit byte as an unsigned
   positive decimal number.  There will be no leading zeroes in
   the display; so the length of the display depends on the size
   of the number.

O  causes a display of a 16-bit word as a 6-digit octal number.
   Numbers less than octal 100000 have one or more leading
   zeroes, so that the display is always 6 digits.

Q  causes a display of a single byte as a 3-digit octal number.
   Numbers less than octal 100 have one or more leading zeroes,
   so that the display is always 3 digits.

S  causes the display of an entire null-terminated string, using
   the C-format for each character of the string.  The
   terminating null (hex 00) does not generate a display (if you
   want it to, specify SUC instead of S).  If a null is not found
   and the display line fills, then the S-specifier is cut off in
   mid-string.  Any continuation line would start up at the
   beginning of the format specification, at the mid-string place
   in memory.

T  causes the display of a single ASCII text byte, with a
   guaranteed display space of one character.  The character
   displayed is the same as the second character of the A-format.
   This means that you will not be able to tell the difference
   between normal, displaying ASCII characters, and their control
   and non-ASCII counterparts.  You gain a compact
   representation, but you also gain ambiguity.

U  (unskip) causes the memory display pointer to decrement by one
   byte.   No display is generated by this command.  This command
   is useful in several contexts:
                                                              6-7

   * displaying memory in more than one format.  For example, the
     specification 8b8u2g8a gives a hex-and-ASCII side-by-side
     display, similar to that provided by many memory dump
     programs.

   * displaying memory out of its sequence order.  To test your
     understanding of the special-action letters in a format
     specification, you should convince yourself that the
     specification xb2ujbx99/ gives the same display on the
     following " continuation line as the specification w/ does.

   * displaying the count byte consumed by the @ character.  For
     example, instead of @t, you could specify nu@t, which would
     display the string count as well as the string.  If memory
     were 05 41 42 43 44 45, this would be 5 ABCDE.

W  causes a display of a 16-bit word as a 4-digit hex number.
   Numbers less than hex 1000 have one or more leading zeroes, so
   that the display is always 4 digits.

X  causes the debugger to skip over the memory byte currently
   pointed to, without displaying it.  The memory pointer is thus
   incremented.

Z  is given immediately following another format letter.  It
   causes the display to fill out the line with displays of the
   given preceding format; but instead of starting with the given
   address, the debugger starts with a lower address, and
   displays memory up to but not including the given address.

   The most common usage of Z is to display the memory just
   output by a moving output pointer.  For example, in the 8086
   debugger, you could specify bz,es,di to display the hex bytes
   most recently output by the STOSB instruction.

   Note that Z makes sense only in a limited number of contexts.
   You will almost certainly want to use Z only as the second
   letter of a two-letter specification, as in the example above.
   I further recommend that you use a format letter that
   generates a fixed length display; i.e., B,W,Q,O,T, or C.  If
   you use a variable length display (N,D, or A), the debugger
   will be as pessimistic as possible about the number of display
   characters needed, so that the display will likely terminate
   before the end of the line.

   A continuation of a Z-line will produce the same output as the
   original line.  If you want to continue beyond the address
   given, repeat the specification without the Z.
                                                              6-8

   I now discuss what happens if you use Z in other contexts.
   Unless your taste runs to the bizarre, you should skip this
   paragraph.  Since Z fills out a line, there should be no
   specifiers after Z: they would be ignored.  Also note that Z
   has an effect only on the single letter that precedes it.  If
   you precede Z with more than one letter, you will get a
   confusing effect: the display would start out forward from the
   address, then it would retreat when it got to Z's preceding
   letter.  The Z-array would run up to the address reached
   before, which is forward from the address you specified.


The Data Memory Window

You may cause the switchable window in the upper right quadrant
of the screen to display 14 lines of memory, continuing from the
last of the lines you specified within the 6-line memory area. To
do this, you:

1. Type a format-and-address specification on one of the numbered
   memory lines, as previously described in this chapter.  For
   example, to display Bytes at location DS:0100, type 6b,ds,0100
   followed by the ENTER key.

2. If you have already selected the memory window, you'll
   automatically have a continuation of the memory line you just
   specified, into the upper right quadrant of the screen.  If
   not, you may select the window by pressing either the ctrl-N
   or ctrl-P keys.

Once you have set up a 14-line window, you may page through
memory with the ctrl-N (Next memory page) and ctrl-P (Previous
memory page) keys, described in Chapter 4.

If, after having pressed ctrl-N or ctrl-P several times, you wish
to return to the first window continuing from the address you
specified, you may do so by typing the digit (1 to 6) of the last
specification line, followed immediately by the ESC key to
preserve the specification settings.  The memory window will be
reset to its continuation value.  For example, if your
specification was on line 6, you type 6 followed immediately by
the ESC key.

If you want your 14-line memory window to start at a certain
address instead of continuing from a 1-line display, you can
separate the format and the address with a slash instead of a
comma.  For example, if you want Words at location ES:0, type 6
followed by w/es,0 followed by the ENTER key.


```
{% endraw %}

## D07.DOC

{% raw %}
```
CHAPTER 7    FLOATING POINT DEBUGGING

If your machine has an 8087 or 80287 chip, D86 gives you the best
facilities for debugging code for the chip (which I generically
refer to as "the 87").

The display of the 87's state can be obtained by pressing the
Ctrl-F key.  If you don't have an 87 in your system, you won't
get the display.

You can also display floating point numbers displayed in 86
memory, by using the FD, FQ, and FT specifiers described in
Chapter 6.

In the displays of floating point numbers, both on the 87 stack
and in 86 memory, I've taken great care to provide a display that
is both readable and accurate.  I rejected the algorithms for
display found in the popular reference books on the subject,
because they failed for several classes of extreme values.


The Floating Point Display Window

The floating point display you get with Ctrl-F contains the
following components:

1. The top 8 lines contain the contents of each floating point
   register.  The registers are displayed as a stack, with ST(0)
   on top, numbered with "0:".  The format of the display depends
   on whether the number is a plain, normal number, or whether it
   is one of the exotic, non-normal types the 87 supports.  I'll
   briefly describe the exotic types at the end of this chapter.
   The possible displays are:

   ----       (four hyphens), denoting a stack slot tagged empty.

   nnn        a decimal number, displayed in scientific notation
              if necessary.

   Infinity   for an overflowed result.

   NaN        for Not a Number, followed by the hexadecimal codes
              of the significand field of the NaN

   Den        for denormal, followed by the number of bits of
              precision lost, followed by the value of the
              number.

   Unn        for unnormal, followed by the number of bits of
              precision lost, followed by the value of the
              number.

   Pseudo 0   for a pseudo zero, followed by the contents of the
              exponent field.

2. English-language displays for the infinity, precision, and
   rounding mode settings for the chip.
                                                              7-2

3. The value of the instruction pointer for the instruction that
   caused the last floating-point exception.  If all exceptions
   are masked this doesn't change.

4. The address of the memory operand for the instruction that
   caused the last floating-point exception.  If all exceptions
   are masked this doesn't change either.

5. The value of the Tag register, for registers 7 through 0.
   These register numbers are NOT the same as the stack element
   numbers-- they are rotated by the value of ST, given on the
   next line.  The possible values for the Tag register fields
   are:

   f   for finite non-zero number
   z   for zero
   i   for infinite number
   -   for empty slot

6. The value of the stack pointer ST.  The tag-register number
   for ST(i) is ST plus i.

7. A display of which 87 exceptions are masked; i.e., will not
   cause interrupts.  If the exception is masked, its letter is
   displayed.  If it is not masked (interrupt will occur), a
   blank is displayed.  The letters are:

   p   for precision exception
   u   for underflow exception
   o   for overflow exception
   z   for zero-divide exception
   d   for denormal exception
   i   for invalid operation exception

8. A display of which masked exceptions have occurred since the
   last time the status bits were cleared.  The exceptions have
   the same letters as the masked display.

9. A display of the 87 Condition Flags C3 through C0.  A
   displaying character is shown if the flag is set; a blank is
   shown if the flag is cleared.  The characters are:

   z  for C3  (corresponds to the Zero flag)
   u  for C2  (set if a result is "unordered")
   .  for C1
   c  for C0  (corresponds to the Carry flag)

10. Another display of C3 through C0, this time showing the
   results of an FXAM instruction.  This display is always
   present, even when FXAM is not the last flag-setting
   instruction executed (in which case the display is
   meaningless).
                                                              7-3

Exotic Flavors of Floating Point Numbers

Some of the types of numbers possible in the floating point
register display may seem a little strange to you if you haven't
had much experience with the 87.  It's a bit beyond the scope of
this manual to go into detail about them-- you should consult a
book such as "The 80286 Architecture" by Steve Morse for a
detailed discussion.  But here are brief descriptions to give you
a bit of an idea of what's going on:

NaN (Not-a-Number) values are used to represent results that are
totally different than any floating-point number that could be
provided.  A specific NaN (with hex value C000 0000 0000 0000) is
produced by the 87 whenever it can't cope with something, and the
Invalid Operation exception is masked.  Other NaN values might be
loaded by a program from 86 memory, to be interpreted in any way
the program chooses.

For the rest of this discussion, let's introduce a little
terminology.  Floating point numbers use a format that follows
the same principle as scientific notation.  In scientific
notation, one part of the number gives the significant digits of
the number, always "normalized" to fall between 1 and 10. Another
part of the number gives the magnitude of the number: the power
of ten that you multiply the first part by, to get the true
value.  For example, 2.34 * 10**2 is a normal, scientific
notation for 234.  (It can be written in A86 as 2.34E2).  2.34 *
10**-2 is a normal scientific notation for 0.0234.  Note that
0.234 * 10**-1 is a non-normal representation for the same
number: we have increased the size of the exponent from -2 to -1,
but the significant part is less than 1 instead of being between
1 and 10.

In the 87 formats, everything is binary, with bits instead of
digits.  There is a "significand" field, normalized whenever
possible so that the most significant bit is 1 (the value is
between 1 and 2).  There is the "exponent" field, giving the
(positive or negative) power of two that you multiply the
significand by, to get the true value.

Denormals are produced when the result of an operation is non-
zero, but is so tiny that its exponent is a negative number too
small to be represented in the 15-bit exponent field of an 87
register.  There is a trick called "gradual underflow" that makes
the best of the situation: the smallest possible exponent is
given, together with leading zeroes in the significand to signal
a further reduction in the exponent.  Each leading zero means
there is one less bit with which to represent the significand.

You can see denormals in action by typing Ctrl-F to get the
floating-point display, then typing the following commands to be
executed immediately:

     FINIT
     FLD 10.0
     FLD 1.E-4931
     FDIV 1
                                                              7-4

The result of the division is a denormal because 10 ** -4932 has
a power-of-two exponent too small to be represented in the 15-bit
exponent field of the 87 register.  The display indicates that 2
bits of precision have been lost-- two leading zeroes have been
forced into the significand field of the number.

Now press the F3 key to divide the number by another 10.  Now 5
bits of precision have been lost.  If you keep pressing the F3
key, you get more and more bits of precision lost.  The loss in
accuracy shows up in the number displayed.  Eventually, all bits
are lost, and the number collapses to zero.

What happens when we multiply a denormal number by 10, instead of
dividing it by 10?  The number becomes big enough to no longer
require the denormalization; but there's no way to recover the
bits of precision that have been lost.  To signal that bits have
been lost, the 87 retains the leading zeroes in the significand.
Numbers containing such zeroes without the minimum exponent are
called "unnormals".

A certain kind of unnormal is a "pseudo-zero", obtained when all
the bits of precision are lost.  This can happen when you
multiply two unnormals.  The number of leading zero bits
(precision bits lost) of the answer is the sum of the bits lost
of the operands.  If the total is 64 bits or more, all precision
is lost-- the significand is zero.  But the exponent field is
nonzero, which brands the number as strange-- a true zero has
zeroes in the entire number, including the exponent field.


```
{% endraw %}

## D08.DOC

{% raw %}
```
CHAPTER 8   COMMONLY ASKED QUESTIONS


Setting Registers

Q: Why isn't there a debugger command to modify register
   settings?

A: You can do so with an immediate assembly language command. For
   example, to set the AX register to 100 type MOV AX,100  You
   can now also set segment registers this way: MOV DS,0 REMEMBER
   that if there isn't a leading zero, all constants fed to D86
   are assumed to be decimal.  If you want hex constants, supply
   a leading zero.

Q: How do you reset the CS register?  MOV CS,value doesn't work.

A: You issue a far JMP instruction to be executed immediately.
   For example, to set CS to 0 and IP to 400 hex, type JMP 0:0400



Modifying Memory

Q: Why aren't there commands for changing memory to different hex
   values, or for filling memory with a given value?

A: You can do this very effectively with D86's patch memory mode.
   Just issue an immediate JMP to the location you want modified,
   press the F7 key to enter patch-memory mode, and then issue
   any A86 directive to initialize memory: DB for bytes, DW for
   words, DD for doublewords, etc.  Remember, you have the full
   power of the A86 language at your disposal.  You can provide
   lists of values on a single line:

   DW 0100,0101,MY_SYMBOL

   You can make ASCII initializations with strings on DB lines:

   DB 'This is a string',0D,0A,0

   You can use the DUP construct to fill memory with a given
   value or sequence of values:

   DB 100 DUP 0, 10 DUP (1,2,3)


Screen Problems

Q: My debugger screen gets corrupted whenever the program being
   debugged outputs to the console.  What can I do about it?
                                                              8-2

A: This problem exists because D86 cannot quickly refresh the
   screen on computers using the CGA (Color Graphics Adaptor)
   video interface, without filling the screen with annoying
   "snow".  So on a CGA computer D86 tries to keep track of what
   it has output, and refresh only the parts of the screen that
   have changed.  The strategy fails if the program itself
   changes the screen.  You can restore a trashed screen by
   pressing the Alt-F9 key.

   I haven't had the chance yet to implement a more sophisticated
   screen interface, allowing you to switch between the program's
   and the debugger's screen.  Until I do, you have these
   options:

   * You can keep pressing Alt-F9 a lot.

   * If your program is making simple, teletype-style outputs
     using MS-DOS function calls, you can redirect standard
     output to your printer for the debugging session.

   * If you're really doing serious development of a
     heavily-video program, you should consider getting a second,
     monochrome-interface monitor for your computer.  Starting
     from your CGA display, invoke D86 with the +V option.  D86
     will come up on your monochrome monitor, but the program's
     cursor will remain on the CGA monitor.


Debugging ROM

Q: I tried stepping into a ROM BIOS routine.  It worked for a
   while, but when I got to a certain instruction and stepped,
   the computer crashed.  What's wrong?

A: My official policy on stepping into ROM is, "all bets are
   off".  D86 does better than many debuggers at stepping into
   ROM, but there are still some fairly insurmountable problems.
   First, D86 itself calls the BIOS.  Not all BIOS routines are
   reentrant; you could get unfortunate interactions between the
   call being stepped and calls made by D86 while you are
   stepping.  Second, ROM cannot be modified and hence traps
   cannot be set within ROM.  D86 doesn't try to detect failed
   trap-setting, so the program may be set loose in situations
   where D86 thinks (and you think) it will retain control.

   This will always happen if you try the F2 key in ROM.  It will
   also happen if you try to use the F1 key on an instruction
   that loads a segment register.  For arcane reasons, the
   single-stepping feature built into the 8088 doesn't work on
   such instructions, so D86 must single step them with a trap.
   Thus, F1 on a segment-loading instruction in ROM will set the
   program loose.


```
{% endraw %}

## D09.DOC

{% raw %}
```
CHAPTER 9    RELEASE HISTORY AND FUTURE PLANS


Release History of D86

All releases include bug fixes.

V2.15  August 1986.  Initial public release of the MSDOS version
       of D86. The last previous version ran under the Xenix
       operating system on the Altos series of computers. I
       improved the invocation syntax, incorporated IBM function
       keys into the interface, and added on-line help.

V2.16  August 1986.  Added the ability to make forward references
       in patch-memory mode.

V2.18  November 1986.  Added the "O" command, to trap INT 33
       calls.

V2.19  Test release in conjunction with A86 V2.90 test release

V2.22  April 1987.  Release in conjunction with A86 V3.00.  Added
       support for new 286 and NEC-specific instructions.  Added
       "F" command, and Shift-F7 commands.  Added the floating
       point window.

V2.23  June 1987.  Added support for Sanyo 55x computers.

V2.24  June 1987.  Added support for Tandy 2000 computers.

V3.09  August 1987.  Major upgrade-- first product-quality
       release.  Added:

       * support for EXE files, some support for BAT files

       * second disassembly, extended memory display, and status
         windows

       * floating point memory display types

       * backwards paging and sensible Up-Arrow

       * W command to write program and symbols to disk

       * enhanced HOME key, Ctrl-T set top-of-stack key, and
         ctrl-E go-to-end key

       * change of -V to +V, for A86 syntax compatibility

V3.10  September 1987.   Trap INT 020 and INT 027.

V3.11  November 1987.

V3.12  February 1988.  Interface with the new SYM file format of
       A86.

V3.13  March 1988.  Made memory management more flexible, so D86
       requires less memory to run.
                                                              9-2

V3.14  March 1988.

V3.15  May 1988.  Added data breakpoint for 386-based machines,
       available to registered users only.

V3.17  June 1988.  Added support for the Zenith Z-100.

V3.18  July 1988.  Added MAPD86 tool for registered users only.

V3.19  August 1988.

V3.20  July 1989.  Added F9 key.

V3.21  August 1989.  Added Ctrl-X key, and changed F1 not to step
       into interrupts.

V3.22  January 1990.  Added support for the IIT-2C87 and 80387
       coprocessors.


Future Plans

I'd like to thank all of you who have supported A86 and D86 so
far with your registrations.  Your support has allowed me to
spend the past two years working exclusively on my shareware
products.

D86 is still a fair amount short of my ultimate vision for it. I
got sidetracked into developing my ZIPKEY zipcode directory
package, and have not had the chance to add the following new
features.  But I am still eager to see them, and I hope to add
them this year:

     * save and play back keyboard scripts

     * save and switch to/from the program's full screen

     * expression arithmetic (and indirection) in all operands

     * interrupt a running program from the keyboard

     * conditional and multiple-count trapping

     * do more kinds of memory searches

     * gateway to DOS, with EXIT back to debugging session

I am eager to hear your ideas for what you'd like to see in terms
of expanded features.  I will consider all requests.


```
{% endraw %}

## D10.DOC

{% raw %}
```
INDEX                                                  10-1
386 breakpoints, 5-2
87 debugging, 7-1
A memory specifier, 6-5
adding symbols, 3-6
address, my, 1-1
addresses, displaying, 6-4
advantages of D86, 1-1
Alt-F10 key, 4-1
Alt-F9 key, 4-5
arrays, displaying, 6-1
ASCII byte specifier two byte display, 6-5
at-sign format specifier, 6-5
B breakpoint command, 5-1
B memory specifier, 6-5
BAT files, 3-2
benefits of registration, 1-3
BIOS.8 module, 3-7
blanking memory display lines, 6-2
breakpoints on data references D, 5-2
breakpoints, clearing B, 5-1
breakpoints, displaying B, 5-2
breakpoints, fixed B, 5-1
breakpoints, on system calls with O, 5-5
breakpoints, transient G, 5-4
British contact, 1-2
bug fixes, history, 9-1
bugs, reporting, 1-5
C memory specifier, 6-5
CALL commands, immediate, 3-4
Carry flag, demo, 2-2
CGA adaptor, 8-2
color monitor, 3-2
COM files, 3-1
commands, classes of, 3-4
commonly asked questions, 8-1
condition flags, floating, 7-2
conditional destination trap F4, 4-4
contacting me, 1-5
contents, 0-2
continuation of memory display, 6-3
control keys, display, 4-1
count byte, displaying, 6-7
crashing while debugging ROM, 8-2
credit cards, 1-1
CS register, setting, 8-1
CS trickiness, 3-5
CS, strange values, 5-4
Ctrl-D key, 4-3
Ctrl-E key, 4-4
Ctrl-F key, 4-1
Ctrl-I key, 4-1
Ctrl-N key, 4-2
Ctrl-P key, 4-2
Ctrl-Q key, 4-2
Ctrl-S key, 4-1
Ctrl-T key, 4-5
Ctrl-U key, 4-3
                                                       10-2
D memory specifier, 6-5
D86CHECK program, 3-6
D86_BUFFER, 3-5
data, entering into memory, 3-6
debugger commands, 5-1
decimal byte N memory specifier, 6-6
decimal word D memory specifier, 6-5
decrementing IP, 4-3
demonstraion, 2-1
Den denormal display, 7-1
denormals, 7-3
denormals, example, 7-3
DI, displaying before, Z, 6-7
disassembly to a file, 5-4
disassembly, paging, 4-3
disassembly, second, 4-1
disassembly, synchronizing, 4-3
display control keys, 4-1
display of multi-format memory, 6-7
displaying before a memory address, Z, 6-7
DOC files, 0-1
DOC files, 0-1
DOS call breakpoints O, 5-5
double quotes for memory continuation, 6-3
Down-Arrow key, 4-2
end of program, jump to, 4-4
English contact, 1-2
entering symbols, 3-6
equals-sign format specifier, 6-4
erasing memory display lines, 6-2
ESC key to preserve memory display, 6-2
exception pointer display, 7-2
exceptions, 87 display, 7-2
EXE files, 3-1
EXE files, recognizing, 3-2
execution keys, 4-4
execution point, return to, 4-3
exit breakpoint, permanent, 5-5
exiting the debugger, 5-5
exotic flavors of floating point numbers, 7-3
exponent field, 7-3
F command, 5-3
F memory specifiers, 6-5
F1 key, 4-4
F10 key, 4-1
F2 key, 4-4
F3 key, 4-4
F4 key, 4-4
F6 key, 4-4
F7 key, 3-5
F9 key, 4-4
FD memory specifier, 6-5
file, program, 3-1
file, symbols, 3-2
files, DOC, 0-1
finding strings in memory F, 5-3
finding the program file, 3-1
                                                       10-3
fixed breakpoints, setting B, 5-1
flags display, 3-3
flags, demo, 2-1
floating window key, 4-1
floating-point debugging, 7-1
floating-point memory display, 6-5
format specifiers, special-action, 6-4
formats, mixed memory, 6-3
forward references, 3-6
FQ memory specifier, 6-5
frozen at INT 021 due to exit function, 5-5
FT memory specifier, 6-5
FXAM setting display, 7-2
G command, 5-4
G memory specifier, 6-6
gap memory specifier, 6-6
go until here F9, 4-4
gradual underflow, 7-3
Great Britain contact, 1-2
help mode key, 4-2
help mode, toggling, 4-1
here, go until, F9, 4-4
hex byte B memory specifier, 6-5
hex opcodes, listing, 5-4
hex word W memory specifier, 6-7
HEXOUT.8, 2-1
history of D86, 9-1
Home key to restore IP, 4-2
Home key, 4-3
ideas, your, 9-2
immediate assembly language commands, 3-4
immediate-execute, demo, 2-2
incrementing IP, 4-3
infinity display, 7-1
infinity mode display, 7-2
instruction pointer positioning, 4-2
interfacing D86 to other computers, 3-6
invoking D86, 3-1
IP down and up keys, 4-3
IP, positioning, 4-2
J command, 5-4
J memory specifier, 6-6
JMP commands, immediate, 3-4
joining memory displays, 6-6
jump to start or end, 4-3
jumping within a strange CS, 5-4
keys, display control, 4-1
L command, 5-4
L memory specifier, 6-6
last command, F3 repeat, 4-4
last execution point, return to, 4-4
legal terms, 1-1
length byte specifier, 6-5
length byte, displaying, 6-7
letter commands, 5-1
letters, lower-case display, 3-3
line memory display, 6-6
                                                       10-4
listing to a file, 5-4
M memory specifer, 6-6
mark location key, 4-5
mark memory display, 6-6
marked location, use of with F, 5-3
masked exceptions display, 7-2
memory accesses, trapping on, 5-2
memory display continuation, 6-3
memory display, 6-1
memory display, demo, 2-3
memory display, floating-point, 6-5
memory display, preserving, 6-2
memory displays, erasing, 6-2
memory formats, simple, 6-1
memory modifying examples, 8-1
memory window display key, 4-2
memory window, reset after paging, 6-8
memory, altering, 3-6
MODE command, 3-3
mode displays, floating-point, 7-2
monochrome monitor, 3-2
MOV to segment registers in ROM, 8-2
MS-DOS function breakpoints O, 5-5
multi-format side-by-side display, 6-7
N memory specifier, 6-6
NaNs, 7-3
next memory page key, 4-2
NOPs, 3-2
Not-a-Number, 7-3
null-terminated string display, 6-6
numbered memory windows, 3-3
numbers in a memory format, 6-3
O command, 5-5
O memory specifier, 6-6
octal byte Q memory specifier, 6-6
octal word O memory specifier, 6-6
opcodes, listing, 5-4
operands to debugger commands, 5-1
operating requirements, 3-1
output strings, displaying via Z, 6-7
overview of D86, 1-4
paging the disassembly, 4-3
patch memory, demo, 2-4
patching memory, 3-5
PATH variable and programs, 3-1
PgDn key, 4-3
PgUp key, 4-3
phone number, my, 1-1
phone numbers of my bulletin boards, 1-5
plans, 9-2
precision mode display, 7-2
precision, loss of, 7-3
previous memory page key, 4-2
prices, 1-2
printer for console redirection, 8-2
procedure-stepping key F2, 4-4
program file, finding, 3-1
                                                       10-5
program file, status, 3-2
program start, go to, 4-3
program, saving patched, 5-5
Pseudo 0 display, 7-1
pseudo zeroes, 7-4
PSP for immediate-buffer, 3-5
Q command, 5-5
Q memory specifier, 6-6
questions, commonly asked, 8-1
quitting the debugging session, 5-5
quotes, double, for memory continuation, 6-3
register values, non-hex display of, 6-4
registers, floating point, 7-1
registers, setting, 8-1
registration benefits, 1-3
registration benefits: D command, 5-2
release history, 9-1
repeat count, memory display, 6-4
repeat last command F3, 4-4
repeat-count specifier, 6-5
requests, your, 9-2
requirements, 3-1
restoring trashed screen with Alt-F9, 4-5
RET commands, immediate, 3-4
return to last execution point, 4-3
return, F6 trap on, 4-4
reverse engineering, 3-6
ROM code, CS trickiness, 3-5
ROM debugging, 8-2
rounding mode display, 7-2
S memory specifier, 6-6
saving symbols and program, 5-5
scientific notation, 7-3
screen display, 3-3
screen problems, 8-1
screen, restoring trashed with Alt-F9, 4-5
searching memory F, 5-3
second disassembly key, 4-1
segment registers, setting, 8-1
segments in memory display pointers, 6-2
shareware, 0-1
Shift-F7 key, 4-5
side-by-side display, 6-7
sign-on display, reaching, 4-1
significand, 7-3
single stepping, demo, 2-2
single-line memory windows, 6-1
single-stepping keys, 4-4
skipping backwards in memory display, U, 6-6
skipping forwards in memory display, X, 6-7
spacing a memory display, 6-4
special action control keys, 4-4
special action format specifiers, 6-4
stack pointer, floating point display, 7-2
stack, setting top of with Ctrl-T, 4-5
start of program, go to, 4-3
starting your program with G, 5-4
                                                       10-6
status window key, 4-1
stepping keys, 4-4
STOSB memory display Z, 6-7
strings, null-terminated, display, 6-6
structures, displaying, 6-3
subroutine-stepping key F2, 4-4
suggestions, your, 9-2
SYM extension, 3-2
symbols file, 3-2
symbols, adding, 3-6
symbols, saving, 5-5
synchronizing disassembly, 4-3
system requirements, 3-1
T memory specifier, 6-6
Tab key, 4-1
tag register display, 7-2
telephone number, my, 1-1
telephone numbers of my bulletin boards, 1-5
terms, legal, 1-1
text, one- or two-byte C display, 6-5
text, one-byte T display, 6-6
text, two-byte A display, 6-5
tiny numbers, 7-3
toggling display windows, 4-1
top of stack, setting with Ctrl-T, 4-5
transient breakpoints G, 5-4
trap at present location F9, 4-4
trapping function keys, 4-4
trapping on memory accesses, 5-2
trashed screen, 8-1
trashed screen, Alt-F9 restoring, 4-5
troubleshooting, 3-6
troubleshooting, ambitious, 3-7
TSR code, CS trickiness, 3-5
two-screen debugging, 3-2
U memory specifier, 6-6
underflow, gradual, 7-3
Unn unnormal display, 7-1
unnormals, 7-4
unskipping memory display, 6-6
Up-Arrow key, 4-3
V switch, 3-2
version history, 9-1
vertical bars display, 6-6
W command, 5-5
W memory specifier, 6-7
Wettstein, Greg, 1-5
window, 14-line memory, 6-8
window, memory, reset after paging, 6-8
windows, memory display, 6-1
wishes, your, 9-2
writing program and symbols files, 5-5
X memory specifier, 6-7
XBIOS.8 module, 3-7
Z memory specifer, 6-7

```
{% endraw %}

## FILE1111.TXT

{% raw %}
```
Disk No: 1111                                                           
Disk Title: A86/D86 Assembler/DeBugger                                  
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: A86/D86 Assembler/Debugger                               
Author Version: 3.22                                                    
Author Registration: $40.00 each.                                       
Special Requirements: Hard drive.                                       
                                                                        
A86 is an excellent assembler that actually performs better and is      
easier to use than Microsoft's MASM 4.00.  It also assembles your       
programs a lot faster than MASM.  It lets you leave out all             
segmentation directives, if you want.  The segmentation default model is
compatible with most high-level languages.  You can also access         
subroutines from your own libraries and, if you register, you           
receive the A86LIB tool for creating your own libraries more easily than
with MASM.  You can use floating point operands in assembly-time        
expression arithmetic.  This is an A86 exclusive.                       
                                                                        
The manual (included on the disk) is excellent.  You can learn 8086 or  
80286 Assembly language programming with it.  The debugger is great.  It
has a floating point display window for use with the 8087 or 80287 that 
will knock your socks off.                                              
                                                                        
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
║          <<<<  Disk No 1111 A86/D86 ASSEMBLER & DEBUGGER  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To unarchive the program type: UNPACK                                   ║
║                                                                         ║
║ To print the instructions, type: COPY READ.ME PRN (press enter)         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1111

     Volume in drive A has no label
     Directory of A:\

    A86V322  ZIP    173170   1-25-90   7:48p
    AFIXV100 ZIP     22853   2-18-90   7:18p
    D86V322  ZIP     86246   1-25-90   7:48p
    FILE1111 TXT      2147   3-22-90   3:10p
    GO       BAT        38   6-28-88   3:10p
    GO       TXT       540   1-01-80   4:41a
    PKUNZIP  EXE     21440   7-21-89   1:01a
    READ     ME       4726   2-19-90   9:16a
    UNPACK   BAT        81   1-25-90   6:09p
    ZIPKEY   ADV      3716   5-17-89   2:26p
           10 file(s)     314957 bytes
                            1024 bytes free
