---
layout: page
title: "RatBas (1982)"
permalink: /software/pcx86/lang/other/ratbas/1982/
redirect_from: /apps/pcx86/1982/ratbas/
machines:
  - id: ibm5150-ratbas
    type: pcx86
    config: /machines/pcx86/machine/ibm/5150/cga/256kb/machine.xml
    autoMount:
      A:
        name: PC DOS 1.10
      B:
        name: RatBas (1982)
    autoType: $date\r$time\rB:\rRT\r$25TEST;\r
---

The RatBas Translator was a preprocessing utility created in 1982 by William F. Sharpe and Brent D. Weaver that
could translate a structured dialect of BASIC into code compatible with IBM BASIC.  It was described extensively
in a [PC Magazine (October 1982)](#article-from-pc-magazine-october-1982) article.  NOTE: The article refers to
the program as "RatBAS", but we use the distribution name "RatBas".

The only copy of RatBas we've been able to locate is version 2.13 from a
shareware CD-ROM titled "[PC-SIG Library Eighth Edition From PC-SIG (April 1990)](http://cd.textfiles.com/pcsig08/)"
on [DISK0003](http://cd.textfiles.com/pcsig08/001_100/DISK0003/).

We have archived it as [RatBas 2.13](#directory-listing-of-ratbas-213).  It has been loaded into drive B: in
the machine below, which is running [PC DOS 1.10](/software/pcx86/sys/dos/ibm/1.10/), the most recent version of PC DOS
at the time of this RatBas release.

{% include machine.html id="ibm5150-ratbas" %}

### Directory of RatBas (1982)

     Volume in drive A is RATBAS  213
     Directory of A:\

    CRC      TXT       980  11-08-84  11:29p
    CRCK4    COM      1536  10-21-82  12:54p
    RATBAS   TXT     30080   8-13-82   5:00p
    RATBAS   UM       9856   8-09-82   5:00p
    RT       EXE     35456  11-05-82   1:48a
    RT       UM       3328  10-29-82   4:32a
    SORT     INC       896  10-29-82   4:42a
    TEST     BAS      5632  11-04-82   4:21p
    TEST     RAT      2304  11-01-82   1:30a
            9 file(s)      90068 bytes
                           68608 bytes free

Here's the output of CRCK4:

	A>crck4 *.*

	CRCK ver 4.2B (MS DOS VERSION )
	CTL-S pauses, CTL-C aborts

	--> FILE:  CRC     .TXT         CRC = 68 CF

	--> FILE:  CRCK4   .COM         CRC = BD 22

	--> FILE:  RATBAS  .TXT         CRC = 6A 87

	--> FILE:  RATBAS  .UM          CRC = 17 C7

	--> FILE:  RT      .EXE         CRC = BF 19

	--> FILE:  RT      .UM          CRC = 93 83

	--> FILE:  SORT    .INC         CRC = 9B 87

	--> FILE:  TEST    .BAS         CRC = 53 49

	--> FILE:  TEST    .RAT         CRC = 8E F9

	 ---------------------> SUM OF CRCS = 78 A4

	DONE

The checksums match those in CRC.TXT, with the exception of the checksum for CRC.TXT itself:

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

Article from PC Magazine (October 1982)
---------------------------------------

[Transcribed from the digital copy of PC Magazine archived at [books.google.com](https://books.google.com/books?id=WYnHD9WSWdAC&pg=RA2-PA121#v=onepage&q&f=false)]

### RatBAS BASICS

> The inventors of a new language explain how it allows users to write structured programs while retaining the
advantages of the BASIC interpreter.

Programming languages abound, as do implementations.  Users of the IBM Personal Computer can program in BASIC,
Pascal, FORTRAN, or COBOL using compilers and/or interpreters supported by IBM.  Several other languages have also
been implemented on the PC.  No language is best for all purposes and all programmers.  Moreover. the manner in
which a language is implemented is often as important as the design of the language itself.

Modern languages facilitate modular programming.  One need not consider an entire problem all at once.  Pieces of
the program can be written separately and put together as required to solve the overall problem.  Further advantages
can be gained with a language designed for structured programming, in which control structures are explicit, easily
written, and easily understood.  The trend is toward languages that make the first version of a program somewhat
more difficult to write but greatly increase the likelihood that it will work correctly and substantially lower the
cost of later revisions and enhancements.

#### IBM PC BASIC

Modular and structured programming were virtually impossible with original BASIC.  When implementing for the IBM PC,
Microsoft added a few structured features.  The BASIC compiler provides limited support for modular programming,
but following good programming practices is difficult using standard IBM (MicroSoft) BASIC.

IBM BASIC does offer many advantages, however.  The original language has been enhanced by procedures that are useful
for general programming and with statements and functions that allow efficient use of the hardware available for the
IBM PC.  It is very easy, for example, to write programs providing color graphics displays.  No other implementation
of a language for the IBM PC offers the ability to be compiled or run interpretively.  MicroSoft's Pascal, FORTRAN,
and COBOL programs must be fully compiled.

#### Language Preprocessors

The dilemma facing the programmer is: select BASIC, with its many advantages but serious design flaws, or select one
of the more modern languages.  The latter choice forfeits the opportunity to debug programs in a fully interpretive
mode.

Another alternative, however, is one that makes it possible to obtain the advantages of interpretive execution of BASIC
and also write programs with good structure and at least some modularity.  The needed ingredient is a preprocessor.
A preprocessor translates programs written in a modified language to equivalent programs written in the target language.
The target language is MicroSoft BASIC, as implemented on the IBM Personal Computer.  The modified language is called
RatBAS (rhymes with fat case), for Rational BASIC, and the translator is called RT for RatBAS Translator.

Many preprocessors of this type have been written.  One of the best known is RatFOR, Rational FORTRAN, developed at
Bell Laboratories.  It inspired both our approach and the name of our language.

#### Design Objectives

To preserve the interpretive advantages of BASIC, it was important to minimize the difficulty of converting changes
made in a BASIC program to comparable changes in the RatBAS version.  Making the translation process rapid was equally
important.  This ruled out approaches in which each line of a RatBAS program would be examined in detail by the
translator, with variable names changed.  A one-to-one mapping between RatBAS lines and BASIC lines was desirable.
For these reasons, we decided to make RatBAS similar to BASIC.  We aimed to add benefits to the programming process
without adding onerous costs.

The Pascal language was our model for RatBAS.  Using a Pascal model facilitates conversion of RatBAS programs to
comparable Pascal programs.  It also eases the burden of converting a Pascal programmer to a BASIC (RatBAS) programmer.

#### Line Numbers

BASIC requires that every line have a line number.  The numbers must be ordered from smaller to larger values.
Several statements may be included on one line, but this makes the logic of a program obscure.

Line numbers perform two functions in BASIC.  First, they serve as indicators to the BASIC editor of the appropriate
positions of lines within the program.  Second, they serve as the locations of statements for logical transfers like
GOTO and GO-SUB statements.

Good screen editors now make possible moving blocks of text from place to place, inserting text, and altering left
margins for indentation.  Such editors are much more powerful than the standard BASIC editor and function without the
use of artificial line numbers.  The use of line numbers as editing aids is thus neither necessary nor desirable.

Modern programming languages do not encourage the use of statement labels and transfers to statements based on labels.
Many implementations make such transfers impossible.  Instead. structured statements such as WHILE ... WEND and
FOR ... NEXT are used to make the logic clear and greatly reduce the chance of errors.  Given adequate structure, line
numbers as statement labels are also unnecessary and undesirable.

The absence of line numbers in RatBAS makes writing modular programs easier.  The user need not worry about a conflict
of line numbers in one portion with those in another, or use renumbering to avoid problems in positioning.

Because the BASIC interpreter requires line numbers in the appropriate order, the RatBAS Translator (RT) will add a
line number at the beginning of each line of a program unless instructed to do otherwise.  To facilitate readability,
RatBAS programs may contain blank lines; they are converted to lines with a blank comment (e.g., 310 ') by RT.

#### Lowercase Letters

The BASIC interpreter converts all lowercase letters in BASIC commands and variable names to uppercase.  This reduces
the opportunity to use mnemonics.  Clearly, "NumberOfRows" conveys more meaning than "NUMBEROFROWS."  For this reason,
RatBAS allows upper- and lowercase letters.

#### Variable Types

Many languages allow and some require declarations indicating the name and type (integer, real, etc.) of every variable,
making it possible to check for typographical errors.  The most typical and most difficult to see are the transliterated
characters within a variable name.  In BASIC. such declarations are allowed for arrays only.  The type of a variable
is indicated by the first and/or last character of its name.
 
One can end a variable name with a type designator (% for integer), but this leads to unaesthetic programs.
Alternatively. the user can designate certain letters to indicate a standard type.  The statement "DEFINT I-N" indicates
that all variables with names beginning with I, J, K, L, M, or N are to be of type integer unless their names end with
another type of designator.  To facilitate designation of variable types with the first letter of a name, RT places the
above statement at the beginning of every program it produces.  As in FORTRAN, any variable with a name starting with
I through N will be of type integer; all others will be of type real.  To override these default conditions, the user
can add a type designator as the last character of a variable's name or insert additional DEF- statements in the RatBAS
program.

#### True and False


In BASIC all logical comparisons evaluate to either -1 (true) or 0 (false).  To facilitate readability. RT places the
following statement as the first executable statement of the translated program:

	false = 0: true = not false

One can use statements such as:

	Done = false
	while not done
		....
		if ..... then done = true
	wend

#### Declarations

In BASIC, arrays need not be explicitly declared unless their dimensions exceed 10.  The BASIC interpreter executes
DIM statements while the program is running, which makes it possible to choose a dimension for an array based on the
conditions at the time (e.g.. DIM X(N)) and to dimension arrays only when required.  Unfortunately, the BASIC compiler
does not allow such procedures.  Instead, dimensions must be "hard" (e.g., DIM X(100)) and dimension statements must
physically precede the use of the dimensioned variables.  Function definitions must also physically precede the use
of the related functions.

For programs to be usable in both modes, place all function definitions and array dimension statements at the top of
the program along with any common statements.  A typical program might start with the following:

	'PROGRAM Zilch
	'does useless calculations
	COMMON x$, y$
	'FUNCTIONS
	   Def FNArea(r)=p1*r^2
	   Def FNFoo(x)=x/10
	'ARRAYS
	  DIM LenRow(12) ' lengths of rows
	  DIM LenCol(12) ' lengths of columns

#### RatBAS Specific Statements

Most lines of a RatBAS program are standard BASIC statements, lacking only line numbers.  Fewer than half the lines
of such a program use features that are specific to RatBAS.  Each line must be flagged in a very simple way: by ending
it with a right bracket.

#### If..Then..Else Statements

BASIC provides three major structured statements.  Any number of statements may be included between a WHILE and WEND
or between a FOR and NEXT.  Unfortunately, this is not the case for the IF statement.  Such a statement must occupy one
logical line (up to 255 characters long).

At best this limitation makes it difficult to detect the logic involved in a complicated algorithm.

To solve this problem RatBAS includes an alternative IF structure.  The syntax is:

	IF <condition> THEN]
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

The &lt;condition&gt; may be any expression that will evaluate to true or false; &lt;statement&gt; may be any legal
BASIC (or RatBAS) statement.

Although not required, program readability is greatly enhanced if levels of logic are portrayed by indentation.

	For i=1 to 10
	   x(i)=y(i)
	Next i
	If a>b then]
	     a=3
	else]
	     a=5
	ifend]
	
In RatBAS the IF statement ELSE clause may be omitted.

#### CASE Statements

RatBAS provides an additional structure not present in BASIC.  Its syntax is:

	CASE <lhs> OF]
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

&lt;lhs&gt; may be anything that can be placed on the left side of the equality in an IF statement; &lt;rhs&gt; may be
anything that can be placed on the right side of the equality.  Optionally, &lt;rhs&gt; may be composed of two or more
such expressions, separated by commas.  If OTHERWISE) is omitted, an implicit OTHERWISE) with no statements is assumed.

	CASE name$ OF]
	   "Bill","BILL" :]
	            print "Brent says hello"
	   "Brent","BRENT" :]
	            print "Bill says hello"
	          OTHERWISE]
	            print "I don't know you"
	CEND]

#### Procedures

One of the most vexing aspects of BASIC is its use of subroutines.  Logical programming dictates extensive use of
small, logical modules.  In BASIC. functions and subroutines must be used for this purpose.  Functions are limited
to single statements and consequently are highly restricted.  Subroutines are called by line number rather than name
and have neither arguments nor local variables.

In RatBAS the role of the subroutine is performed by the Procedure.  A RatBAS program has the overall form:

	<declarations>
	      <procedure>
	      <procedure>
	        .
	        .
	<procedure>
	PROGRAM]
	   <program statements>
	END

A procedure without arguments has the form:

	PROCEDURE <procedure name>]
	       <statement>
	       <statement>
	         .
	         .
	PEND]

A procedure name may have any number of characters.  Upper and/or lowercase letters may be used, but no distinction
is made between them: ZILCH and Zilch refer to the same procedure.

A procedure may be invoked simply by ending a statement with its name.

	PROCEDURE Foo]
	   print "this is foo"
	PEND]
	PROGRAM]
	   Foo]
	   input x
	   if x>3 then foo]
	END

A procedure may be called (invoked) within a program or within another procedure; however. the procedure declaration
must physically precede all references to it.  A procedure may not be declared within another procedure.  When called,
the procedure name must be the last item on a statement line.  It may appear in any position in which GOSUB... would
be legal.

#### ERROR Procedure

BASIC allows error trapping.  If such trapping is "enabled," programs will not terminate when an error occurs.
To enable error trapping in a RatBAS program, include a procedure with the reserved name ERROR.  Whenever an error
occurs, this procedure will be invoked.  When the statements in procedure ERROR have been executed, the program will
resume.

#### Procedure Arguments

The lack of "local" variables in BASIC is a serious drawback.  With the sole exception of single statement functions,
every variable is global; only one variable is named X.  One cannot, for example, declare variable X in procedure zilch
to be different from variable X in procedure foo.  There is no direct way to state that variables X and Y in a
procedure are to "stand for" whatever variables are indicated when the procedure is called.  This makes it very
difficult to write modules for use as "black boxes" in programs, due to the possibility of using similar variable names
in other portions of the program with unsuspected and unwanted results.

One programming practice that can help mitigate this problem is to use unique names for variables that are intended to
be local to a procedure.  A generally successful strategy is to select typical names for such variables, and then append
the procedure name to each one using a period as a separator.

	PROCEDURE foo]
	   for i.foo = 1 to 10
	       print i.foo
	   next i.foo
	PEND]

Another good practice is to include a description at the beginning of each procedure of both the "normal" variables
used and what is done to them.

	PROCEDURE Zilch]
	'sorts array X from X(1) to X(N) in increasing order
	
	PEND]

RatBAS provides some help in this regard.  Procedures may have arguments; however, only simple variables are allowed.
Arrays may not be used.

Arguments in a procedure declaration are indicated by a series of variable names, separated by commas and enclosed in
parentheses.

	PROCEDURE Zilch (a.zilch, b.zilch, c.zilch)]

Statements invoking such procedures must provide corresponding arguments.

	Zilch(c,d,e)]

The effect of the above statement would be:

	a.zilch = c
	b.zilch = d
	c.zilch = e
	"do zilch"

Note that arguments c, d, and e are passed to the procedure, but no resulting values are passed back.  This ensures
that no change is made in a global variable, which may be desirable in many cases.  The user may want one or more of
the arguments of a procedure to be passed back when the procedure is called.  If so, the argument variable must be
prefixed with V: (or VAR:) in the procedure declaration.

	PROCEDURE SUM (a.sum, b.sum, V:c.sum)]
	   c.sum = a.sum + b.sum
	PEND]
	PROGRAM]
	   x = 3
	   sum(x,5,z)]
	   print x
	END

The effect of the above is:

	a.sum = x
	b.sum = 5
	c.sum = z
	"Do SUM"
	z = c.sum

A procedure declaration must contain only variables (plus, optionally, V: prefixes).  A procedure call (invocation)
may contain expressions of any type for arguments that are not "variable"--passed back.

#### INCLUDE Files

When writing programs in a modular manner, a user typically accumulates a series of modules ()in RatBAS, usually
Procedures) that can be used in various programs.  By placing one or more such procedures in a file, it is a simple
matter to include them in a new program.  If appropriate variable names and/or arguments have been employed, it is
also possible to treat them as "black boxes," which perform a given function, without bothering about the actual
operations performed internally.

A user can insert files in other files with a good text editor.  RT makes it possible to do this directly.  One need
only insert an INCLUDE statement in the appropriate position in a RatBAS program.

	INCLUDE String.INC]

This places the statements in the file STRING.INC as if they had been at that position in the original.  The file name
may include a disk drive designator:

	INCLUDE b:string.inc]

If no disk drive designator is given, the file is assumed to be on the "include file disk".  When RT is run, the user
may specify that the disk be used for this purpose.  Otherwise, it is the current default disk.

If no file extension is given, .INC is assumed.

	INCLUDE String]

is equivalent to:

	INCLUDE String.INC]

Include files are particularly helpful for situations in which a block of code is to be used in several programs.
If a change must be made in the block, only one file need be edited.  By retranslating all progrnms using the block,
one can obtain new versions with no danger of inconsistent changes.

#### Starting the Translator

To translate a RatBAS program to an equivalent BASIC program, the user simply starts RT from DOS:

	A> RT

The program then requests the name of the file to be translated.  The user then gives the file name (preceded by a
disk drive if needed).  If no extension is given, .RAT is assumed.

The next prompt asks for the disk drive on which any INCLUDE files are located:

	Disk for any Include files [default]:

The user may respond with a drive (e.g., B, or B:) or with only a return: in the latter case tho default drive will be
used.

The program next asks for the name of the file for the BASIC program to be produced.  A file with the same name as the
RatBAS file, but with a .BAS extension is the default; to select it, the user simply presses a carriage return.
Otherwise. a file name (with disk drive if needed) can be given.  A typical set of responses would be:

	RatBAS file: zilch
	Disk for any Include files [default]: (return)
	Output file [zilch.BAS]: (return)

If the default conditions are to be used for the include file disk and the output file, the RatBAS program name can
be followed by a semicolon, thus obviating further responses.

Programs designed to be used with the BASIC interpreter must have a line number for each line.  RT will produce line
numbers for each line unless instructed to do otherwise.  If a progrnm has been debugged and a compiled version is
desired, it is preferable to produce a new BASIC version with line numbers only where needed (e.g., the first line of
a Procedure, lines required by If..Then, and CASE statements).  To do so, the user types /n after the RatBAS program
name.

	RatBAS File: zilch/n

or:

	RatBAS File: zilch/n;

BASIC programs produced with the /n option cannot be run with the interpreter.  It is important to use this option
since the BASIC compiler only optimizes code between line numbers.  As a result, a compiled program produced in this
way will generally be both smaller and faster than one produced from a program that has all lines numbered.

#### RT Output

As the translation process proceeds, RT produces a log of its actions.  Every procedure name is shown along with the
line number at which it is located.  Every statement is indicated by a symbol.  Standard BASIC statements are indicated
by dots.  RatBAS-specific statements are indicated as follows:

	I : If ... THEN
	e : ELSE
	i : IFEND
	
	C : CASE ... OF
	s : :] (case selection)
	o : OTHERWISE
	c : CEND
	
	p : procedure call

This output provides a logical program map, which is often helpful for detecting errors.

When an error is encountered by RT, a message is displayed at the bottom of the screen and the user is given the option
of terminating the translation or continuing.  In the latter event, the BASIC program should not be used, but additional
errors may be found easily.  In some situations, one error leads to another, so this sort of procedure should be used
with caution.

When an INCLUDE file is used, a message is displayed, indicating that it is being read.  Another message is displayed
when the read is completed.

BASIC programs produced by RT contain Procedures (subroutines), followed by a list of procedure locations, followed
by the other statements in the program.  The list of procedure locations begins at line number 20,000.  When debugging
the BASIC program, finding a procedure is a simple matter.  List lines 20000-... to find its location.  Procedure calls
are translated into GOSUB statements, commented with the procedure name to facilitate debugging.  IF and CASE statements
generate IF and GOTO statements; IFEND and CEND statements are converted to comment lines.

---

*RatBAS was developed by William F. Sharpe and Brent D. Weaver for Wells Fargo Investment Advisors, where both authors
are consultants.  Sharpe is also Timken Professor of Finance at Stanford University.  The authors acknowledge William
Fouse, William Jahnke, and Ralph Goldsticker for their assistance in the development of RatBAS.*

*If you would like to receive a complimentary copy of the RatBAS translator, send $10 by check or money order (to cover
the cost of the diskette mailer and postage) to Brent Weaver, Wells Fargo Investment Advisors, P.O. Box 44029, San
Francisco, CA 94144.*
