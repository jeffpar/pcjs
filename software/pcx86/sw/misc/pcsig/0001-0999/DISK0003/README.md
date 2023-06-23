---
layout: page
title: "PC-SIG Diskette Library (Disk #3)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0003/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0003"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "RATBAS"

    If you're an advanced Basic programmer, RATBAS could be just what
    you're looking for. It allows basic programs to be written in a more
    structured way without line numbers. Programs written in Rationalized
    BASIC are converted into standard BASIC by the RATBAS translator. In
    effect, RATBAS is a translation program that takes your RATional BASic
    programs and converts them to Standard BASIC. It forms the bridge
    between Pascal-like Rational BASIC and standard BASIC by making the
    conversion process easier. Note, this is not a version of BASIC, but an
    adjunct.
    
    How to Start: To read documentation --strongly recommended-- enter
    TYPE RATBAS.UM and press <ENTER>.  To start program, type RT and press
    <ENTER>
    
    File Descriptions:
    
    TEST     BAS  TEST.RAT after being processed by RT.EXE.
    SORT     INC  An "include" routine which will be used by TEST.RAT
    RATBAS   TXT  Paper on RatBAS by the authors.
    TEST     RAT  A sample program written in RatBAS.
    RATBAS   UM   User's Manual for the RatBAS language.
    RT       UM   User's Manual for RT.EXE.
    RT       EXE  The RatBAS translator.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #3, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  RT      .EXE         CRC = BF 19

--> FILE:  RT      .UM          CRC = 93 83

--> FILE:  RATBAS  .UM          CRC = 17 C7

--> FILE:  TEST    .RAT         CRC = 8E F9

--> FILE:  SORT    .INC         CRC = 9B 87

--> FILE:  TEST    .BAS         CRC = 53 49

--> FILE:  RATBAS  .TXT         CRC = 6A 87

--> FILE:  CRC     .TXT         CRC = AD 7E

--> FILE:  CRCK4   .COM         CRC = BD 22

 ---------------------> SUM OF CRCS = BD 53

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## RATBAS.TXT

{% raw %}
```
.S2
.T"RatBAS, A Software Tool"


          RatBAS -- A Software Tool for Users of BASIC
 
             W.F. Sharpe and   Brent Weaver

                     
                     August, 1982

















W.F. Sharpe is Timken Professor of Finance, Stanford University and 
Special Consultant, Wells Fargo Investment Advisors. 

Brent Weaver is Consultant, Wells Fargo Investment Advisors.

The work reported here was done by the authors for Wells Fargo 
Investment Advisors. We are grateful to William Fouse and William 
Jahnke for support and encouragement and to Ralph Goldsticker for 
valuable suggestions. 

.P

 Abstract
 --------

This document describes a program that translates programs written in 
RatBAS, a modified version of BASIC, to logically equivalent programs 
in BASIC. 

The translator has been implemented on the IBM Personal Computer. One 
can obtain a copy free of charge by sending a single-sided diskette 
(formatted to run under the IBM PC Disk Operating System)  with a 
self-addressed, stamped disk mailer to: 

        Brent Weaver
        Wells Fargo Investment Advisors
        P.O. Box 44029
        San Francisco, Calif. 94144

.P

 Introduction
 ------------

Programming languages abound, as do implementations. Users of the IBM 
Personal Computer can program in BASIC, Pascal, Fortran or COBOL using 
compilers and/or interpreters supported by IBM. Several other 
languages have also been implemented on the IBM PC (e.g. Forth, C, 
ADA). 

No language is best for all purposes and all programmers. Moreover, 
the manner in which a language is implemented is often as important as 
the design of the language itself. 

Modern languages facilitate `modular programming`. One need not 
consider an entire problem all at once. Pieces of the problem can be 
analyzed and program modules written (by one or more people), then the 
pieces can be put together as required to solve the overall problem. 
Further advantages can be gained with a language designed for 
`structured programming`, in which control structures are explicit, 
easily written and easily understood. The trend is toward languages 
that make the first version of a program somewhat more difficult to 
write, but greatly increase the likelihood that it will work correctly 
and substantially lower the cost of later revisions and enhancements 
(whether made by the original programmer or by others). 

Pascal is the most popular language incorporating such features. The C 
language is also highly structured, and Fortran 77 represents an 
attempt to adapt Fortran to include some of these capabilities. 

.P


 IBM PC BASIC
 ------------

Modular and structured programming were virtually impossible with the 
original BASIC language. In its implementation for the IBM PC, 
Microsoft added a few structured features, and their BASIC compiler 
provides limited support for modular programming. But it is difficult 
to follow good programming practices using standard IBM (MicroSoft) 
BASIC. 

IBM BASIC does, however, offer many advantages. The original language 
has been greatly augmented, both with procedures useful for general 
programming and with statements and functions that allow efficient use 
of the hardware available for the IBM PC. For example, it is very easy 
to write programs providing color graphic displays, communications 
with other computers, etc.. 

Moreover, the implementation of BASIC on the IBM PC offers a number of 
very attractive features. BASIC programs can be used in three ways. 
First, a program may be executed `interpretively`. This makes 
debugging and modification simple and rapid; programs are also 
relatively small (taking little disk space). On the other hand, in 
this mode programs run very slowly. 

A second mode involves the `compilation` of a BASIC program to produce 
an optimized machine code program. Such programs are larger (often by 
an order of magnitude) but usually run much faster (execution times 
one-tenth as long are not at all uncommon). Moreover, it is easy to 
write programs that can be debugged in an interpretive mode, then 
compiled to produce a fast machine-language version. 

The third mode represents an attractive middle-ground for many 
applications. The program is compiled to produce a machine-code 
version that runs in tandem with a special run-time machine-code 
program containing most of the code required by BASIC programs. When a 
compiled program of this type is executed, the run-time module is 
obtained automatically -- if it is already in memory, it is simply 
used; otherwise, it is brought in from a disk drive. Programs of this 
type run almost as fast as those that are fully compiled, but occupy 
considerably less space on a disk (often less than the original BASIC 
version). Moreover, programs run in this manner can chain and pass 
information (via COMMON statements) to one another (as can those run 
in an interpretive mode). This makes it possible to solve a problem 
with a number of programs, each of which performs a portion of the 
task, thus obtaining some degree of modularity. 

No other implementation of a languages for the IBM PC offers the same 
array of alternatives. Microsoft's Pascal, Fortran and Cobol programs 
must be fully compiled. The UCSD operating system provides two modes 
for its languages, one of which involves the interpretive execution of 
an intermediate language (P-code), the other the execution of a 
mixture of P-code and machine code. However, it is not feasible to 
debug a program at the P-code level. Moreover, the "native code" 
produced by the UCSD compiler appears to run more slowly than the 
fully compiled code produced by the MicroSoft compilers. 

.P


 Language Preprocessors
 ----------------------

The dilemna facing the programmer is thus clear. Select BASIC, with 
its many advantages but serious design flaws, or one of the more 
modern languages, thus giving up the opportunity to debug programs in 
a fully interpretive mode. 

There is another alternative, however. One that makes it possible to 
obtain the advantages of interpretive execution of BASIC and also 
write programs with good structure and at least some modularity. The 
needed ingredient is `Preprocessor`. 

The idea is simple. One designs a modified version of a target 
language (in this case, BASIC), then writes a program to translate 
programs written in the modified language to equivalent programs 
written in the target language. Early versions of the translator are 
written in the target language; later ones can be written in the 
modified language and then translated to the target language with 
previous versions (each time, new features are added but not used in 
the current version). This process of `bootstrapping` eventually 
provides a program capable of translating a program in the modified 
language to an equivalent one in the target language. 

This paper describes such an approach. The target language is 
MicroSoft BASIC, as implemented on the IBM Personal computer 
(henceforth, simply "BASIC"). The modified language is called RatBAS 
(rhymes with "Fat Case"), for "Rational Basic"; and the translator RT 
(for "RatBAS Translator"). 

Many preprocessors of this type have been written. One of the best 
known is that designed for RATFOR ("Rational Fortran"), developed at 
Bell Laboratories. This served as the inspiration for our approach, as 
well as the name of our language. 


.P


 Design Objectives
 -----------------

To preserve the advantages of interpretive execution of BASIC, it was 
important to make RatBAS sufficiently like BASIC to minimize the 
difficulty of converting changes made in a BASIC program to comparable 
changes in the RatBAS version. It was also important to make the 
translation process very rapid. This ruled out approaches in which 
each line of a RatBAS program would be examined in detail by the 
translator, with variable names changed, etc.. Moreover, it was 
desirable that there be a one-to-one mapping between RatBAS lines and 
BASIC lines whenever possible. Thus we decided to make RatBAS a 
relatively minor modification of BASIC -- one that added little in 
cost to the programming process but (hopefully) much in benefit. 

The remainder of the paper describes the features of the RatBAS 
language, with reasons for their inclusion. By and large, our model 
was the Pascal language and typical implementations of it. Among other 
things, this facilitates conversion of RatBAS programs to comparable 
Pascal programs. It also eases somewhat the burden of converting a 
Pascal programmer to a BASIC (RatBAS) programmer.  

.P


 Line Numbers
 ------------

BASIC is designed so that every line must have a line number, and the 
numbers must be ordered from smaller to larger values. Several 
statements may be included in one line (separated by colons), but this 
makes the logic of a program especially obscure. 

Line numbers perform two functions in BASIC. First, they serve as 
indicators to the BASIC editor of the appropriate positions of lines 
within the program. Second, they serve as indicators to the program 
itself of the locations of statements for logical transfers (e.g. GOTO 
and GOSUB statements). 

Serious users of computers now have good screen editors which make it 
possible to move blocks of text from place to place, insert text, 
alter left margins for indentation, etc.. Such editors are much more 
powerful than standard BASIC editors, and function without the use of 
artificial line numbers. The use of line numbers as editing aids is 
thus neither necessary nor desirable. 

Modern languages do not encourage the use of statement labels and 
transfers to statements based on labels. Indeed, many implementations 
make such transfers impossible. Instead, structured statements (e.g. 
While...Wend,    For...Next) are used to make the logic clear and thus 
greatly reduce the chance of errors. Given adequate structure, line 
numbers as statement labels are also unnecessary and undesirable. 

Thus RatBAS has no line numbers. This makes it much easier to write 
modular programs, for there is no need to worry about a conflict of 
line numbers in one portion with those in another, to engage in 
renumbering to avoid problems in positioning, etc.. 

The BASIC interpreter requires line numbers in the appropriate order. 
Thus RT will add a line number at the beginning of each line of a 
program unless instructed to do otherwise. 

To facilitate readability, RatBAS programs may contain blank lines; 
they are converted to lines with a blank comment (e.g.  310 ' ) by RT. 

.P


 Lower-Case Letters
 ------------------

The BASIC interpreter converts all lower-case letters in BASIC 
commands and variable names to upper-case. This reduces the ability to 
use mnemonics. Clearly, 

         NumberOfRows

conveys more meaning than:

         NUMBEROFROWS

RatBAS thus allows upper and lower case letters.


.P


 Variable Types
 --------------

Many languages allow (and some require) declarations indicating the 
name and type (integer, real, etc.) of every variable. This makes it 
possible to check for typographical errors (the most typical and most 
difficult to see is the transliteration of characters within a 
variable name). Such declarations are only allowed for arrays in 
BASIC. The type of a variable is indicated by the first and/or last 
letter of its name. 

One can end a variable name with a type designator (e.g. % for 
integer), but this leads to unaesthetic programs. Alternatively, one 
can designate certain letters as indicating a standard type. Thus the 
statement 

        DEFINT I-N

indicates that all variables with names beggining with I,J,K,L,M or N 
are to be of type integer unless their names end with another type 
designator. 

It is unfortunate that BASIC is so restricted in this regard. To 
provide a simple way to designate variable types with the first letter 
of a name, RT places the above statement at the beginning of every 
program it produces. Thus (as in Fortran), any variable with a name 
starting with I through N will be of type integer; all others will be 
of type real. To override these default conditions, one can add a type 
designator as the last character of a name or insert alternative 
and/or additional DEF- statements in the RatBAS program. 

.P


 True and False
 --------------

In BASIC, all logical comparisons evaluate to either -1 (if true) or 0 
(if false). To facilitate readability, RT places the following 
statement as the first executable statement of the translated program: 

      false = 0: true = not false

Thus one can use statements such as:

        Done=false
        while not done
            ....
            if ..... then done=true
        wend

.P


 Declarations
 ------------

In BASIC, arrays need not be explicitly declared unless their 
dimension exceeds 10. Moreover, the BASIC interpreter executes DIM 
statements while the program is running. This makes it possible to 
choose a dimension for an array based on the conditions at the time 
(e.g. DIM X(N) ) and to dimension arrays only when required. 
Unfortunately, the compiler does not allow such procedures. Instead, 
dimensions must be "hard" (e.g. DIM X(100)) and dimension statements 
must physically precede the use of the dimensioned variables. Function 
definitions must also physically precede the use of the related 
functions. 

For programs to be used in both modes, it is desirable to place all 
function definitions and array dimension statements at the top of the 
program (along with any common statements). A typical program might 
thus start: 

     'PROGRAM Zilch
     'does useless calculations

     COMMON x$, y$

     'FUNCTIONS
        Def FNArea(r)=pi*r^2
        Def FNFoo(x)=x/10

     'ARRAYS
        DIM LenRow(12) ' lengths of row
        DIM LenCol(12) ' lengths of columns


.P


 RatBAS-specific Statements
 --------------------------

Most lines of a RatBAS program are standard BASIC statements, lacking 
only line numbers. A minority of the lines of such a program use 
features that are specific to RatBAS. Each such line must be "flagged" 
in a very simple way by ending it with a right bracket (]). 

.P


 If.Then..Else Statements
 ------------------------ 

BASIC provides three major structured statements. One may include any 
number of statements between a WHILE and WEND or between a FOR and 
NEXT. Unfortunately, however, this is not the case for the IF 
statement. Such a statement must occupy one logical line (up to 255 
characters long). At best this makes it difficult to detect the logic 
involved in a complicated algorithm. 

To solve this problem, RatBAS includes an alternative IF structure. 
The syntax is: 

           IF  <conditions>     THEN]
                    <statement>
                    <statement>
                        .  
                        .
                 ELSE]
                    <statement>
                    <statement>
                        .
                        .
           IFEND]


<conditions> may be anything legal in a standard BASIC IF statement. 
<statements> may be any legal BASIC (or RatBAS) statements. 

Although indentation is not required, program readability is greatly 
enhanced if levels of logic are portrayed in this manner. Thus: 

        For i=1 to 10
            x(i)=y(i)
        Next i

        If a>b then]
             a=3
          else]
             a=5
        ifend]

In a RatBAS IF statement the ELSE] may be omitted, as in:

       IF a>b THEN]
          a=3
          b=0
       IFEND]

.P


 CASE Statements
 ---------------

RatBAS provides an additional structure not present in BASIC. Its 
syntax is: 

       CASE  <lhs>  OF]

            <rhs> :]
                    <statement>
                    <statement>
                        .
            <rhs> :]
                    <statement>
                        .
                        .
                .
                .
          OTHERWISE]
                    <statement>
                    <statement>
                        .
       CEND]

<lhs> may be anything that may be placed on the left of the equality 
in an IF statement; <rhs> may be anything that may be placed on the 
right of the equality. Optionally, <rhs> may be composed of two or 
more such expressions, separated by commas. If OTHERWISE] is omitted, 
an implicit OTHERWISE] with no statements is assumed. 

To illustrate:

         CASE  name$ OF]
                "Bill","BILL" :]
                               print "Brent says hello"
              "Brent","BRENT" :]
                               print "Bill says hello"
                      OTHERWISE]
                               print "I don't know you"
         CEND]

.P
                         

 Procedures
 ----------

One of the most vexing aspects of BASIC is its use of subroutines. 
Logical programming dictates extensive use of small logical modules. 
In BASIC, functions and subroutines must be used for this purpose. 
Functions are limited to single statements and are thus are highly 
restricted. Subroutines are called by line number, rather than name, 
and have neither arguments nor local variables. 

In RatBAS, the role of the subroutine is performed by the PROCEDURE. A 
RatBAS program has the overall form: 


       <declarations>

       <procedure>
       <procedure>
          .
          .
       <procedure>

       PROGRAM]
          <program statements>
       END

A Procedure without arguments has the form:

       PROCEDURE <procedure name>]
          <statement>
          <statement>
              .
              .
       PEND]

A procedure name may have any number of characters. Upper and/or lower 
case letters may be used, but no distinction will be made between them 
(thus ZILCH and Zilch would refer to the same procedure). 

A procedure may be invoked simply by ending a statement with its name.

For example:

       PROCEDURE Foo]
          print "this is foo"
       PEND]

       PROGRAM]
           Foo]
           input x
           if x>3 then foo]
       END

A procedure may be called within a program or within another 
procedure. However, the procedure declaration must physically precede 
all references to it. A procedure may not be declared within another 
procedure. 

When called (invoked), the procedure name must be the last item on a 
statement line. It may appear in any position in which GOSUB... would 
be legal. 

.P

 Procedure ERROR
 ---------------

BASIC allows `error trapping`. If such trapping is "enabled", programs 
will not terminate when an error occurs. To enable error trapping in a 
RatBAS program, include a procedure with the reserved name ERROR. 
Whenever an error occurs, this procedure will be invoked. When the 
statements in ERROR have been executed, the program will resume.

.P


 Procedure Arguments
 -------------------

The lack of "local" variables in BASIC is a serious drawback. With the 
sole exception of single-statement functions, every variable is 
`global`. Thus there is only one variable named X. One cannot, for 
example, declare variable X in procedure zilch to be different from 
variable X in procedure foo. Moreover, there is no direct way to state 
that variables X and Y in a procedure are to "stand for" whatever 
variables are indicated when the procedure is called. This makes it 
very difficult to write modules to be used as "black boxes" in 
programs, due to the possibility of similar variable names in other 
portions of the program, with unsuspected and unwanted results. 

There is a programming practice that can help mitigate this problem. 
One can to use unique names for variables that are intended to be 
local to a procedure. A generally successful strategy is to select 
typical names for such variables, then append the procedure name to 
each one, with a period as separator. For example: 

      PROCEDURE foo]
           for i.foo = 1 to 10
                print i.foo
           next i.foo
      PEND]

Another good practice is to include a description at the beginning of 
each procedure of the "normal" variables used and what is done to 
them. Thus: 

       PROCEDURE Zilch]
       'sorts array X from X(1) to X(N) in increasing order
           .
           .
       PEND]

RatBAS provides some help in this regard. Procedures may have 
arguments. However, only simple variables are allowed (arrays may not 
be used). 

Arguments in a procedure declaration are indicated by a series of 
variable names, separated by commas and enclosed in parentheses. For 
example: 

      PROCEDURE Zilch (a.zilch, b.zilch, c.zilch)]

Statements invoking such procedures must provide corresponding 
arguments. For example: 

         Zilch (c,d,e)]

The effect of the above statement would be:

        a.zilch = c
        b.zilch = d
        c.zilch = e
        " do zilch "

Note that arguments c,d and e are "passed to" the procedure, but no 
resulting values are "passed back". This ensures that no change is 
made in a "global" variable, which may be desirable in many cases. 
However, one may want one or more of the arguments of a procedure to 
be "passed back" when the procedure is called. If so, the argument 
variable must be prefixed with V: (or VAR:) in the procedure 
declaration. For example: 

         PROCEDURE SUM (a.sum, b.sum, V:c.sum )]
             c.sum = a.sum + b.sum
         PEND]


         PROGRAM]
                  x=3
                  sum (x,5,z)]
                  print x 
         END   

The effect of the above is:

          a.sum = x
          b.sum = 5
          c.sum = z
          " Do SUM"
          z = c.sum

A procedure declaration must contain only variables (plus, optionally, 
V: prefixes). However, a procedure call (invokation) may contain 
expressions of any type for arguments that are not "variable" -- i.e. 
passed back. 

.P


 INCLUDE Files
 -------------

When writing programs in a modular manner, one typically accumulates a 
series of modules (in RatBAS, usually PROCEDURES) that can be used in 
various programs. By placing one or more such procedures in a file, it 
is a simple matter to "include" them in a new program. If appropriate 
variable names and/or arguments have been employed, it is also 
possible to treat them as "black boxes", which perform a given 
function, without bothering about the actual operations performed 
internally. 

One can, of course, insert files in other files with a good text 
editor. However, RT makes it possible to do this directly. One need 
only insert an INCLUDE statement in the appropriate position in a 
RatBAS program. For example: 

        INCLUDE String.INC]

This translate the statements in file STRING.INC as if they had been 
at that position in the original file. The file name may include a 
disk drive designator: 

        INCLUDE b:string.inc]

If no disk drive designator is given, the file is assumed to be on the 
"include file disk". When RT is run, the user may specify the disk to 
be used for this purpose. Otherwise, it is the current default disk. 

If no file extension is given, ".INC" is assumed. Thus:

       INCLUDE String]

is equivalent to:

       INCLUDE String.INC]

.P


 Starting the Translator
 -----------------------

To translate a RatBAS program to an equivalent BASIC program, one 
simply starts program RT from the disk operating system: 

       A> RT

The program then requests the name of the file to be translated.

      RatBAS File: 

The user then gives the file name (preceded by a disk drive if 
needed). If no extension is given, .RAT is assumed. 

The program next prompts for the disk drive on which any INCLUDE files 
are located: 

    Disk for any Include files [default]: 

The user may respond with a drive (e.g. B, or B: ) or with only a 
carriage return; in the latter event the default drive will be used. 

The program next prompts for the name of the file for the BASIC 
program to be produced. A file with the same name as the RatBAS file, 
but with a .BAS extension is the default; to select it, the user 
simply presses a carriage return. Otherwise, a file name (with disk 
drive if needed can be given); if no extension is included, 
.BAS is assumed.

A typical set of responses would be:

     RatBAS file: Zilch
     Disk for any Include Files [default] :      (carriage return)
     Output File [zilch.BAS]:                    (carriage return)

If the default conditions are to be used for the include file disk and 
the output file, the RatBas program name can be followed by a 
semicolon. This will obviate further responses. Thus: 

      A> RT
      RatBAS File: Zilch;

Programs designed to be used with the BASIC interpreter must have a 
line number for each line. RT will produce line numbers for each line 
unless requested to do otherwise. When a program has been debugged and 
a compiled version is desired, it is preferable to produce a new BASIC 
version with line numbers only where needed (e.g. the first line of a 
PROCEDURE, lines inserted by If..Then and CASE statements). To do so, 
follow the RatBas program name with /n. For example: 

       RatBAS File: zilch/n

or:

       RatBAS File : zilch/n;

BASIC programs produced with this option cannot be run with the 
interpreter; when compiling such a program, the /n option must also be 
used with the program name. It is desirable to expend the small extra 
effort, however, since the BASIC compiler only optimizes code between 
line numbers. As a result, a compiled program produced in this way 
will generally be both smaller and faster than one produced from a 
BASIC program with all lines numbered. 

.P


 RT Output
 ---------

As the translation process proceeds, RT produces a log of its actions. 
Every procedure name is shown, along with the line number at which it 
is located. Every statement is indicated by a symbol. Standard BASIC 
statements are indicated by dots. RatBAS-specific statements are 
indicated as follows: 

        I  : If ... THEN
        e  : ELSE
        i  : IFEND

        C  : CASE ... OF
        s  :   :]  (case selection}
        o  : OTHERWISE
        c  : CEND

        p  : procedure call

This output provides a logical "map" of the program which is often 
helpful for detecting errors. 

When an error in the use of RatBAS is encountered by RT, a message is 
printed at the bottom of the screen and the user is given the option 
to terminate the translation or to continue. In the latter event, the 
BASIC program should not be used, but additional errors may be found. 
In some situations, of course, one error leads to another, so this 
sort of procedure should be used with caution. 

There is a remote possibility that a RatBAS program might use too many 
procedures, nested IF and CASE statements, etc.. If this does happen, 
RT will print an appropriate message. This is extremely unlikely, 
however, and the necessary remedial action is generally 
staightforward. 

When an INCLUDE file is used, a message is printed indicating that it 
is being read; another message is printed when it is completed. 

BASIC programs produced by RT contain Procedures (subroutines), 
followed by a list of procedure locations, followed by the statements 
in the program `per se`. The list of procedure locations begins at 
line number 20000. When debugging the BASIC program it is a simple 
matter to find a Procedure -- list lines 20000-... to find its 
location. Procedure calls are translated into GOSUB statements, 
followed by the procedure name to facilitate debugging. IF and CASE 
statements generate BASIC IF and GOTO statements; IFEND and CEND 
statements are converted to comment lines with "Ifend" or "cend" 
included for easy reference. 

.P


 Recommended Use
 ---------------

Over the course of many months we have found that RatBAS can be
used effectively as follows:

     1. Draft a program in RatBAS and enter it via a screen editor

     2. Make a hard-copy listing of the RatBAS version

     3. Translate the RatBAS version to BASIC (with all line numbers)
        (if errors are found by RT, edit the RatBAS file and 
         re-translate; post changes to the RatBAS listing as they
         are made)

     4. Debug the program using the BASIC interpreter. Post
        any changes made to the listing of the RatBAS version,
        making any necessary conversions.
     
     5. Re-edit the RatBAS file; re-translate and verify (using the
        interpreter) that the program is functioning correctly.

     6. Translate the program again, using the /N option.

     7. Compile the program (fully or partially) to produce a
        machine-language version.

In the process of debugging the BASIC program (step 4),the number of 
changes may become excessive; if so, it may be desirable to edit the 
RatBAS file to include the changes, then repeat steps 2 and 3. 

This appears to be a formidable task. However, it can be quite fast 
(RT translates approximately 500 statements per minute), and the gains 
in programming accuracy and efficiency can be substantial for any but 
the simplest programs. 

```
{% endraw %}

## TEST.BAS

{% raw %}
```bas
 105    ' ********* BASIC version of RatBas program ********** 
 110     DefInt i-n 
 115   ' TEST  Program to test RT Translator
 120   '
 125   DIM Names$(200)
 130   '
 135   Maxnames=200
 140   ' Include File Sort.inc
 145    GO TO 25000 ' jump to program 
 200    '----------------------- PROCEDURE SORT
 205     ' Shell Sort
 210   '  global variables   numnames  number of names to be sorted
 215   '                     names$    names to be sorted
 220      jump.sort=numnames
 225      while jump.sort>0
 230         jump.sort=jump.sort\2
 235         limit.sort=numnames-jump.sort
 240         lower.sort=1
 245         while lower.sort<=limit.sort
 250            ibottom.sort=lower.sort
 255            more.sort=true
 260            while ibottom.sort>0 and more.sort
 265               itop.sort=ibottom.sort+jump.sort
 270               IF NAMES$(IBOTTOM.SORT)>NAMES$(ITOP.SORT)  THEN ELSE GO TO  290
 275                  swap names$(ibottom.sort), names$(itop.sort)
 280                  ibottom.sort=ibottom.sort-jump.sort
 285    GO TO   300
 290    ' ELSE] 
 295                  more.sort=false
 300                ' IFEnd] 
 305            wend
 310            lower.sort=lower.sort+1
 315         wend
 320      wend
 325    RETURN ' ------------------------------------------
 330   '
 400    '----------------------- PROCEDURE GETKEY
 405      for i.getkey=1 to 10: fromuser$=inkey$: next
 410      while fromuser$="": fromuser$=inkey$: wend
 415    RETURN ' ------------------------------------------
 420   '
 500    '----------------------- PROCEDURE  GETSELECTION
 505   cls
 510   print "Menu For Sort Program
 515   print
 520   print "1   Enter a List of Names from Keyboard"
 525   print "2   Display the Names"
 530   print "3   Read a list of Names from a disk file"
 535   print "4   Write the list of Names to a disk file"
 540   print "5   Sort the Names alphabetically"
 545   print "10  End the Program
 550   print
 555   print "Strike Function Key for your choice"
 560   choicemade%=false
 565   while not choicemade%
 570    GOSUB  400 ' GETKEY
 575     IF LEN(FROMUSER$)=2  THEN ELSE GO TO  590
 580        ifunc.get=asc(mid$(fromuser$,2,1))-58
 585    GO TO   600
 590    ' ELSE] 
 595        ifunc.get=0
 600      ' IFEnd] 
 605     choicemade%=ifunc.get=10 or (ifunc.get>=1 and ifunc.get<=5)
 610   wend
 615    RETURN ' ------------------------------------------
 620   '
 700    '----------------------- PROCEDURE ENTERNAMES
 705   cls
 710   locate 25,1
 715   Print "Enter Names.  Use a Null Line to quit";
 720   locate 1,1,1
 725   numnames=0
 730   line input namein$
 735   while namein$<>"" and numnames<maxnames
 740      numnames=numnames+1
 745      names$(numnames)=namein$
 750      line input namein$
 755   wend
 760    RETURN ' ------------------------------------------
 765   '
 800    '----------------------- PROCEDURE DISPLAYNAMES
 805   for j=1 to numnames step 20
 810      klast=j+19: if klast>numnames then klast=numnames
 815      cls
 820      for k=j to klast
 825         Print names$(k)
 830      next k
 835      print
 840      print "Press Space Bar to Continue;
 845    GOSUB  400 ' GETKEY
 850   next j
 855    RETURN ' ------------------------------------------
 860   '
 900    '----------------------- PROCEDURE READNAMES
 905   cls
 910   numnames=0
 915   print
 920   Input "Enter Name of File with input ";file$
 925   Open file$ for input as #1
 930   while not eof(1) and numnames<maxnames
 935      line input #1, namein$
 940      numnames=numnames+1
 945      names$(numnames)=namein$
 950      print ".";
 955   wend
 960   close #1
 965    RETURN ' ------------------------------------------
 970   '
 1000    '----------------------- PROCEDURE WRITENAMES
 1005   cls
 1010   print
 1015   Input "Enter Name of File to write names";file$
 1020   Open file$ for output as #1
 1025   for j=1 to numnames
 1030      Print #1, names$(j)
 1035      print ".";
 1040   next j
 1045   close #1
 1050    RETURN ' ------------------------------------------
 1055   '
 25000    ' =================== PROCEDURE LOCATIONS ===========
 25005    '  200 SORT
 25010    '  400 GETKEY
 25015    '  500 GETSELECTION
 25020    '  700 ENTERNAMES
 25025    '  800 DISPLAYNAMES
 25030    '  900 READNAMES
 25035    '  1000 WRITENAMES
 25040    ' ================== PROGRAM ======================== 
 25045    false = 0: true = not false 
 25050   key off
 25055   for k=1 to 10
 25060      key k,""
 25065   next k
 25070   cls
 25075   Print "Program to Sort a List of Names"
 25080   IFUNC.GET=CHOICE
 25085   GOSUB  500 ' GETSELECTION
 25090   CHOICE=IFUNC.GET
 25095   while choice<10
 25100    ' CASE  CHOICE  OF
 25105    IF ( CHOICE =1 )  THEN ELSE GO TO   25120
 25110    GOSUB  700 ' ENTERNAMES
 25115    GO TO   25185
 25120    IF ( CHOICE =2 )  THEN ELSE GO TO   25135
 25125    GOSUB  800 ' DISPLAYNAMES
 25130    GO TO   25185
 25135    IF ( CHOICE =3 )  THEN ELSE GO TO   25150
 25140    GOSUB  900 ' READNAMES
 25145    GO TO   25185
 25150    IF ( CHOICE =4 )  THEN ELSE GO TO   25165
 25155    GOSUB  1000 ' WRITENAMES
 25160    GO TO   25185
 25165    IF ( CHOICE =5 )  THEN ELSE GO TO   25180
 25170    GOSUB  200 ' SORT
 25175    GO TO   25185
 25180    ' OTHERWISE 
 25185    ' CEND
 25190   IFUNC.GET=CHOICE
 25195    GOSUB  500 ' GETSELECTION
 25200   CHOICE=IFUNC.GET
 25205   wend
 25210   END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0003

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       980  11-09-84   7:29a
    CRCK4    COM      1536  10-21-82   7:54p
    RATBAS   TXT     30080   8-14-82
    RATBAS   UM       9856   8-10-82
    RT       EXE     35456  11-05-82   9:48a
    RT       UM       3328  10-29-82  11:32a
    SORT     INC       896  10-29-82  11:42a
    TEST     BAS      5632  11-05-82  12:21a
    TEST     RAT      2304  11-01-82   9:30a
            9 file(s)      90068 bytes
                           68608 bytes free
