---
layout: page
title: "PC-SIG Diskette Library (Disk #980)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0980/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0980"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VANILLA SNOBOL4"

    VANILLA SNOBOL4 is an easy-to-learn, flexible language used for
    non-numeric applications, such as artificial intelligence, database
    analysis, text formatting, data conversion, identifying data patterns,
    searching text files, and more.
    
    This version of SNOBOL4 does not have real numbers, and the object
    program and data cannot exceed 30K in size.  Otherwise, VANILLA SNOBOL4
    provides the entire SNOBOL4 programming language as described in
    textbooks.  Source programs for SNOBOL4 are typically 5 to 10 times
    smaller than equivalent C or Pascal programs.  A 150-page language
    tutorial and reference manual are included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES980.TXT

{% raw %}
```
Disk No  980
Program Title: VANILLA SNOBOL4 version 2.14
PC-SIG version 1.3
 
VANILLA SNOBOL4 is an easy-to-learn, flexible language used primarily for
non-numeric applications, such as artificial intelligence, analyzing
databases, text formatting, data conversion, finding patterns in all kinds
of data, searching text files, etc.  The language also has a full array of
mathematical functions.
 
This version of SNOBOL4 does not have real numbers, and the object program
and data cannot exceed 30K in size.  Otherwise, VANILLA SNOBOL4 provides
the entire SNOBOL4 programming language as described in textbooks.
VANILLA SNOBOL4 is being used for teaching in college computer science and
humanities departments.  A 150-page language tutorial and reference manual
is included on this disk.  Source programs for SNOBOL4 are typically five
to ten times smaller than equivalent C or Pascal programs.
 
Usage:  Programming Language.
 
System Requirements:  128K memory and one disk drive.
 
How to Start:  Type PRINTMAN (press enter).
 
Suggested Registration:  None, though an expanded version called SNOBOL4+
is available for purchase.
 
File Descriptions:
 
README   DOC  File decriptions.
VANILLA  DOC  Program introduction.
SNOBOL4  DOC  Catalog of SNOBOL4-related products.
PRINTMAN BAT  Batch file to print documentation.
PM       EXE  File used by PRINTMAN.BAT.
GENTRAN  DOC  Documentation for GENTRAN.SNO.
SNOBOL4  COM  SNOBOL4 compiler and interpreter.
???????  SNO  Various SNOBOL4 programs (19 files).
???????  DAT  Data files (3 files).
???????  IN   Sample text (2 files).
GENTRAN  TTI  Sample control file for GENTRAN.SNO.
???????  INC  Program functions (3 files).
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GENTRAN.DOC

{% raw %}
```






GENERIC TRANSLATOR VERSION 0.2

For use with CATSPAW VANILLA SNOBOL4

Copyright 1987 by Kevin G. Barkes Consulting Services. Non-commercial
reproduction and distribution permitted.  All other rights reserved.

Kevin G. Barkes Consulting Services
4107 Overlook Street
Library, PA 15129
Fido 129/38 (SYS$OUTPUT BBS - 412-854-0511)

This software is provided on an "as-is" basis; no expressed nor implied
warranties are made.

********************************************************************************

HISTORY:

This program was originally written, tested, and debugged (well, as much as it 
is in its current state) in under two hours.

An associate had given me a diskette containing a manuscript which he wanted to
edit and prepare for transmission to his publisher.  The file was in "print
image" format... nicely formatted, with margins, extra word spaces due to
justification, and other conventions which are fine if the file is going to a
line printer.  This file was going to a commercial typesetter, where the
composition people wanted to see a plain ASCII file with no extra spaces,
"standard" typesetting generic coding, and no surprises.

I didn't feel like manually editing the file, and was tired of writing special
programs for each relatively simple conversion which came along.  So I wrote
GENTRAN, which is essentially a global search and replace utility, but which
also contains some of the pattern matching capabilities of SNOBOL4.

The program worked, and I eventually ported it to VAX SPITBOL where it is used
in a commercial printing environment.  That version contains some extra
niceties, is more thoroughly debugged, and runs (as SPITBOL on a VAX is wont
to do) like the proverbial bat.

The original GENTRAN disappeared into the bowels of my hard disk, to resurface
again when I promised Mark Emmer of Catspaw that I'd stick some useful SNOBOL4
software in the files section of his Fido Bulletin Board.

So, here it is, in its original, pristine, unstructured, and somewhat
contorted form.  In a way, this program represents both the best and the worst
of SNOBOL.

I hope it provides a starting point from which you can develop your own
utilities.  The program shows some of SNOBOL's fancy tricks, like user defined
functions, tables, etc.  It also contains non-meaningful labels,
perverted program flow, and other abominations.  In short, it's a
good example of why programmers both love and hate the language.






****************************************************************************

GENTRAN is intended for use in text processing applications, specifically
in preparing files for input into some type of typesetting or composition
system which uses mnemonic coding (such as Datalogics' PAGER).  GENTRAN
does global search and replace, line trimming, quote processing, and supports
some basic pattern matching.


1. INSTALLATION

SNOBOL4 users should enter SNOBOL4 GENTRAN at the DOS prompt.

2. INPUT/OUTPUT

There are three file names which must be specified after running GENTRAN. The
first is the name of the translation table input (.TTI) file.

The .TTI file contains directives (special commands which affect the entire
translation) as well as search and replace strings.

.TTI is the default extension name for these files.  It is not necessary
to enter the .TTI extension.  If the translation table file ends in any other
extension, however, the full file spec must be given.  A translation table
input file named TEST.TTI could be specified merely as "TEST". One named
"TEST.TRA" would have to be entered as "TEST.TRA".

You can also enter directives and search/replace strings interactively.  When
prompted by the program for the .TTI filename, press ENTER.  You can now enter
commands from the keyboard.  Press Control-Z, then ENTER, when you have
completed entering commands. 

The input file is the name of the source, or "raw" file.  The output file is
where the result of the translation will be placed.  You can use the console
keyboard (CON:) for both input and output, if you wish.  This is handy for
debugging purposes when setting up a new .TTI file.

3. DIRECTIVES

Directives are GENTRAN commands which change the behavior of the software
during translations.

Directives can appear anywhere in the .TTI file.  Each directive must appear on
a line by itself, with no other text on the line.  With one exception, all
directives begin with a percent sign (%) followed by a word.  There is no
space between the percent sign and the word. GENTRAN ignores blank lines in
the .TTI file.

The exception is the comment directive, the exclamation mark (!).  Lines
containing an exlamation mark in the first position of the line are not
processed.  This is useful for entering comments in the file.






The other directives are:

IMMEDIATE DIRECTIVES:

(These directives are executed on all lines of the file, prior to search and
replace and %QUOTE operations.)

%TRIM           -- Trims trailing spaces from all lines (the default).

%LTRIM          -- Trims leading spaces and tabs from all lines.

%ATRIM          -- Trims both leading and trailing spaces from all lines.
                   The same as entering:
                   %TRIM
                   %LTRIM
                   in the .TTI file.

%COMPRESS       -- Compresses multiple spaces and tabs from all lines.

%COLLAPSE       -- Trims leading and trailing spaces and compresses multiple
                   spaces and tabs from all lines.
                   The same as entering:
                   %TRIM                                %ATRIM
                   %LTRIM               or              %COMPRESS
                   %COMPRESS

%TRACE          -- Displays the result of the translation to the terminal,
                   in addition to writing the translation to the output
                   file.


DEFERRED DIRECTIVE

This directive is executed following the immediate directives but before
the search and replace strings:

%QUOTE          -- Changes the double quote (") to open and close quotes.

Once "turned on", directives cannot be "turned off."

4.  SEARCH AND REPLACE STRINGS.

After executing all directives, GENTRAN executes each search and replace
statement in the .TTI file.

GENTRAN is case sensitive.  "THIS" will not match "This" or "this".

Strings are delimited by the backslash character (\).  Use quotes to enclose
strings within the delimiters.

If the search string contains quotes, use apostrophes to define strings:

\'"HELLO"'\ \"hello"\ (changes case and strips quotes)






\'"Marys' "'"\  \'"Mary' "'" 's"\  Translates "Marys'" to "Mary's"
Note GENTRAN ignores spaces between quoted strings.

\\ (null string) can be used to translate the search string to null.
For example:

\"green"\ \\

will effectively strip all occurrences of the string "green" in the input
file.

The null string \\ cannot be used as a search string; an error will result.

GENTRAN will not permit you to translate a string to itself.  The following
will generate an error:

\"string"\ \"string"\

You can still get into an endless loop, though, by inopportune replacements,
such as:

\"."\ \".."\

This will replace a single period with two periods. Since GENTRAN will
always find a single period, it will loop through this search and replace
line until you run out of memory or reach an internal SNOBOL limit.

Be careful when entering search and replace strings.  Remember that GENTRAN
goes through the strings one at a time, and that subsequent replacements
can be affected by what occurred previously.  In the examples above showing
how to search and replace quotes, bear in mind that if the %QUOTE directive
had been specified, the replacement would have failed.

That is, if %QUOTE were NOT enabled,
\'"Marys' "'"\  \'"Mary' "'" 's"\ 

would be successful.  If %QUOTE had been enabled, the strings would have
to be:

\"``Marys'''"\ \"``Mary's''"\

6. PATTERNS

GENTRAN recognizes legal SNOBOL function calls in the search & replace
strings.  This vastly increases GENTRAN's power and flexibility.

For example:

\POS(0) "A"\ \DUPL(".",10)\

will replace a capital A in the first position of the line to a string of
10 periods.






You can create temporary variables to rearrange data in the replacement.

\("Mr. " | "Mrs. " | "Miss ") . TITLE BREAK(" ") . NAME)\*(NAME ", " TITLE)\

will replace strings like "Mrs. Jones " with "Jones, Mrs. ".

The search string is compiled by GENTRAN when the TTI file is first read.
If the replacement string is a simple string (or concatenation of strings),
it too is statically compiled when the TTI file is read.  The example above
shows another case:  The replacement expression uses variables assigned during
the pattern match.  These variables cannot be evaluated when the TTI file
is read; they must be evaluated as each record of the input file is processed
(if the search string is found in that record).  The user expresses this
fact by placing the replacement expression in parenthesis, and preceeding it
with SNOBOL4's "defered evaluation operator", the "*".

(Hint:  If you try to use variables and functions in the replacement string,
and omit the "*", you'll likely see the word "PATTERN" in your output.)

Extreme care must taken when using SNOBOL functions to avoid endless looping
or conflicts with reserved function or variable names.

See the SAMPLE.TTI file in this distribution for an example of a .TTI file.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No 980  VANILLA SNOBOL4  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                  PRINTMAN (press enter)                                 ║
║                                                                         ║
║   To run the program, type:                                             ║
║                  SNOBOL4 (press enter)                                  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SNOBOL4.DOC

{% raw %}
```







                             MORE INFORMATION ON SNOBOL4

            Vanilla SNOBOL4 may be as far as your interest in SNOBOL4 goes.
          We've tried to make it a useful entity in its own right -- some-
          thing you can use for file reformatting jobs and quick utilities.
          That's fine -- we hope you like it and find it useful.

            But someone once said that SNOBOL4 patterns were like potato
          chips; it's hard to stop with just one.  If you find that's true,
          you'll want to know about other materials related to the SNOBOL4
          language.

            This file, SNOBOL4.DOC, contains information on SNOBOL4 books
          in print -- from beginner to advanced.  Because the richness of
          the SNOBOL4 language provides so many different ways to attack a
          problem, these books are especially useful -- every author seems
          to bring a different perspective to the language.

            We've also included a description of SNOBOL4+, our professional
          SNOBOL4 product.  Its many extra features provide added conven-
          ience in the PC environment and facilities to tackle large
          problems, as well as a printed manual.

            There's also a section describing other products we manufacture
          or distribute that are useful for non-numeric applications.

            Since many SNOBOL4 users are in the humanities field, we've in-
          cluded a list of textual materials that we have accumulated and
          are now making available.

            For the true SNOBOL4 addict, we've designed an outrageous,
          6-color SNOBOL4 T-shirt to proclaim that you're an iconoclast who
          knows how to solve problems quickly, easily and efficiently.
          We've priced the shirts at a very reasonable $8.95 -- less than a
          box of disks and far more attractive.  These shirts are mighty
          sharp.  You might want to order two in case your spouse or best
          friend makes off with yours.

            Finally, if any of this whets your appetite, there's an order
          form with current prices and ordering information.

                                 Welcome to SNOBOL4!


            CATSPAW, INC.   P.O. BOX 1123   SALIDA, COLORADO 81201   USA











       SNOBOL4.DOC (V1.1)              - 1 -                    Catspaw, Inc.





                                  SNOBOL4 BOOKS...


          Algorithms in SNOBOL4
          ---------------------

            James F. Gimpel.  Originally published in 1976; republished in
          1986 by Catspaw. ISBN 0-939793-00-8, paper ($24.95).  ISBN 0-
          939793-01-6, hardcover ($34.95).  500 pages.  A diskette with all
          the book's functions and programs is available separately.

            This is the famous "Orange Book" which provides powerful ways
          to process text and strings with SNOBOL4.  It explains how to
          process lists, convert files, format text, generate poetry, pro-
          totype a compiler, and play poker -- and that's just a start.  No
          matter what you do with SNOBOL4, you'll find functions and tech-
          niques here that will not only save you time, but amaze you with
          their ingenuity.

            Gimpel writes functions so that they can be plugged into your
          programs, which makes the diskette a valuable, and immediately
          useful, addition to your programming library.

            Chapters are: Preliminaries; Conversions; Basic String Func-
          tions; Basic List Processing; Pattern Theory; Pattern Matching
          Implementation; Pattern Construction; Input/Output; Paragraph
          Formatting; Implementation and Timing; Permutations; Sorting;
          Function Functions; Numbers; Stochastic Strings; Games; Assem-
          blers, Compilers and Macros; Solution to Odd-Numbered Exercises;
          Appendix; Index.


          SNOBOL Programming for the Humanities
          -------------------------------------

            Susan Hockey.  Clarendon Press, Oxford, 1985.  ISBN 0-19-
          824676-5, paperback ($20.00).  Comes with "SNOBOL4 for English
          Majors: The Catspaw Baedecker."

            When asked what is the best introductory text for people whose
          background is in the humanities, rather than the computer sci-
          ences, we recommend this one.  Hockey begins with a simple expla-
          nation of SNOBOL4 syntax, and works through exercises with both
          text and data files, progressing to concordances, frequency
          counts, list processing, and data validation.  There are answers
          in the back.

            Her book is aimed at users with terminals and mainframes,
          rather than personal computers.  We've put together our
          "Baedecker," aimed at complete beginners.  It integrates her book
          with the appropriate sections of the Catspaw tutorial and refer-
          ence manual; our goal is to make it easier to learn and use
          SNOBOL4 if you're doing it at home in your spare time, without a
          teacher or expert at hand.



       SNOBOL4.DOC (V1.1)              - 2 -                    Catspaw, Inc.





          Computers in Linguistics
          ------------------------

            Christopher Butler.  Basil Blackwell Ltd., Oxford, 1985.  ISBN
          0-631-14267, paperback ($15).  270 pages.

            Although the title is general, most of the book is specifically
          devoted to SNOBOL4 and its use in literary and linguistic comput-
          ing -- specialized indices, for instance, or semantic analysis.

            Butler provides a clear SNOBOL4 tutorial, aimed at non-program-
          mers, so that the reader "should attain a level of competence
          which will allow him to write programs for his own purposes, so
          making him much less dependent on the availability of package
          programs or under-employed professional programmers."

            There are answers to the exercises, along with a comprehensive
          bibliography, in this fine introductory text.  Note, though, that
          it presumes an environment of mainframes and terminals, rather
          than personal desktop machines.


          A SNOBOL4 Primer
          ----------------

            Ralph and Madge Griswold.  Prentice-Hall, 1973.  ISBN 0-13-
          815381-7, paperback ($26.50).  192 pages.

            A beginner's introduction to SNOBOL4 for readers with no pro-
          gramming or technical background.  As a programming guide for
          humanities researchers, it predates the books by Hockey and But-
          ler by more than a decade.

            Chapters cover an introduction to computers, the basics of
          SNOBOL4, data types, pattern matching, user-defined functions,
          arrays and tables, input/output, and programming techniques.  An
          excellent chapter on debugging concludes the volume.  There are
          numerous exercises (with solutions provided) and a comprehensive
          glossary.

            Use this volume to complete your SNOBOL4 collection, or to get
          ideas for teaching SNOBOL4 to beginners.















       SNOBOL4.DOC (V1.1)              - 3 -                    Catspaw, Inc.





          The Programmer's Introduction to SNOBOL
          ---------------------------------------

            W. Douglas Maurer.  Elsevier, 1976.  ISBN 0-444-00172-7, paper-
          back ($24.50).  141 pages.

            This book is for people who already program in other languages,
          but want to enjoy programming by taking up SNOBOL4.  It's a slim
          book, but covers a lot of territory, with exercises and answers
          in the back.

            Chapters cover elementary SNOBOL features, pattern-matching,
          associative programming, pattern properties, advanced topics, and
          systems programming.

            You might know someone who's already competent with computers
          and proficient in one or more other languages.  Your colleague is
          always in a foul humor because he has to keep track of memory al-
          location and variable types every time he writes a program.  This
          book offers a good, and fast, way to get your colleague up and
          running with SNOBOL4, thus improving the workplace environment.


          The SNOBOL4 Programming Language, 2nd Edition
          ---------------------------------------------

            R.E. Griswold, J.F. Poage, and I.P. Polonsky.  Prentice-Hall,
          1971.  ISBN 0-13-815373-6, paperback ($30).  256 pages.

            This is the well-known "Green Book," and it is the standard
          reference work on SNOBOL4.  Written by the creators of the lan-
          guage, this book provides its definition.

            The Green Book presumes that SNOBOL4 is running on a mainframe
          in fashion 15 years ago, and thus it is somewhat dated, with ref-
          erences to card punches and readers.

            If that's where most of your experience lies, though, you may
          be more comfortable with their approach, and their use of illus-
          trated bead diagrams to explain pattern-matching: think of the
          scanner as a needle, and the patterns as beads which may or may
          not be in line to be threaded.

            There are no practice exercises, but the authors present many
          algorithms, as well as six sample programs.












       SNOBOL4.DOC (V1.1)              - 4 -                    Catspaw, Inc.





          The Macro Implementation of SNOBOL4
          -----------------------------------

            Ralph Griswold.  W. H. Freeman, 1972.  ISBN 0-7167-0447-1,
          hardcover ($36.50).  324 pages.  A diskette with the SNOBOL4
          macro source code is available separately.

            If you've ever wondered how the SNOBOL4 system does some of its
          seemingly impossible things, then this is the book for you.  From
          compilation to execution, pattern matching to storage regenera-
          tion, the inner workings of the Macro Implementation of SNOBOL4
          are thoroughly described.  Over 100 figures detail the system or-
          ganization and clever storage techniques employed.

            Chapters: Background; Language Features; Factors Affecting the
          Implementation; Structure of the SNOBOL4 System; Data Representa-
          tion; Interpretation; Translation; Implementation of Representa-
          tive Features; Storage Management; The Macro Language; Implemen-
          tation of SIL on Two Machines; History of the SNOBOL4 Project;
          Evaluation of the Results; Alternatives; Appendices.

            There are exercises with each chapter, with solutions provided
          to some, making this an excellent text for a course in machine-
          independent software implementation.

            This is a thoroughly readable and enjoyable text for all seri-
          ous SNOBOL4 users.  Your SNOBOL4 programming will be improved by
          learning how the underlying system functions.

            The diskette provides the SNOBOL4 system source code, fully
          commented.  When reading the book, you now can have the actual
          code at your side to consult.  Note that the nomenclature in the
          book and source code is different -- a table of equivalent names
          is provided with the diskette.

            This disk does NOT contain the 8086 source code for Catspaw's
          Vanilla SNOBOL4 or SNOBOL4+ systems; it uses opcodes for an ab-
          stract machine to describe the compiler and interpreter.  SNOBOL4
          can be ported to other architectures by implementing these
          opcodes for the specific target machine.  It's usually a three to
          six man-month effort, depending upon the implementer's experience
          and enthusiasm.

          LATE BREAKING NEWS ABOUT "THE MACRO IMPLEMENTATION OF SNOBOL4"
          --------------------------------------------------------------

            October 15, 1987 -- We have just been informed by the pub-
          lisher, W.H. Freeman, that they have destroyed the remaining
          stock of this book.  Over 700 books destroyed -- not remaindered
          to another bookseller -- but buried in a Salt Lake City landfill.

            We're outraged, because it was done without notice.  We may try
          to obtain permission to make photocopies of the book, but for
          now, we must withdraw the offering from our catalog.  Sorry.



       SNOBOL4.DOC (V1.1)              - 5 -                    Catspaw, Inc.





                   SNOBOL4+  --  THE PROFESSIONAL SNOBOL4 PACKAGE

            SNOBOL4+ is Catspaw's professional version of the SNOBOL4 pro-
          gramming language.  It offers many features not found in Vanilla
          SNOBOL4.  The added features make your SNOBOL4 programs even more
          concise and easy to write.  Here's a partial list:


          Additional Features
          -------------------

          ASSEMBLY-LANGUAGE INTERFACE -- Create functions to extend func-
          tionality beyond the SNOBOL4 environment.  You can write hardware
          specific functions, interfaces to other software, or perform op-
          erations that are awkward or inefficient in SNOBOL4.

          INCLUDED FILES -- Provides the inclusion of other source code
          files into a program being compiled.  Include files may be
          nested, simplifying the use of source code libraries.

          LARGE MEMORY -- Provides 300K bytes (if available) for user pro-
          gram and data

          ENHANCED PATTERN MATCHING -- You can "back up" during a pattern
          match with a negative argument to the LEN function, while TAB and
          RTAB allow you to position to the left of the current cursor
          position.  A MARB pattern provides a "maximum ARB" capability.

          SYMBOLIC DEBUGGER -- A SNOBOL4 program that may be included with
          the program to be debugged.  It provides tracing, breakpoints,
          variable inspection and modification, and viewing of program
          source lines.


          Additional Functions
          --------------------

          BACKSPACE() -- Backs up a file one record

          BREAKX() -- Provides a more flexible BREAK pattern

          ENVIRONMENT() -- Look up strings from MS-DOS environment block

          EXECUTE() -- Execute MS-DOS commands and other programs from
          within a SNOBOL4 program

          LEQ, LNE, LLE, LGE, LLT -- Extends the LGT lexical comparison
          function

          LOAD() -- Loads external, assembly-language functions

          PATHNAME() -- Retrieve file name from unit number

          REVERSE() -- Reverse a string



       SNOBOL4.DOC (V1.1)              - 6 -                    Catspaw, Inc.





          REWIND() -- Rewinds a file to its beginning

          SUBSTR() -- Extract substring from string

          SAVE() -- Checkpoints state of system to a file for later
          restoration, or distribution with run-time module

          SEEK(), TELL(), TRUNCATE() -- Support for random-access files

          SETBREAK() -- Provides user control of Control-C key

          SORT(), RSORT() -- Built-in Shell sort for tables and arrays


          Enhanced I/O
          ------------

          BINARY I/O -- Raw file I/O without interpretation of ASCII con-
          trol characters.  Provides the greatest control of file contents.

          RANDOM-ACCESS -- Update existing files by opening them for both
          reading and writing, with old contents preserved

          UNIX(tm) I/O -- Read or write Unix formatted records


          Real Number Support
          -------------------

          REALS -- 64-bit precision providing 15 decimal digit accuracy.
          New keywords to control the precision and format of real numbers.

          80(2)87 SUPPORT -- Uses numeric co-processor if available, other-
          wise a built-in software emulator is substituted automatically.

          INFINITY and NAN -- Support for infinity and NAN (Not-A-Number)
          if produced by calculations.

          LN and EXP -- Built-in Logarithm and Exponential function.


          New Command Line Options
          ------------------------

          INTEGER OVERFLOW -- Provides automatic conversion from integer to
          real if an arithmetic operation produces integer overflow.

          MEMORY SIZE -- Adjust SNOBOL4+'s memory usage

          NO-FAIL MODE -- Provides diagnostic checking of undetected state-
          ment failure

          SAVE FILE -- Write SAVE file after compilation.  This binary ob-
          ject file may be distributed with Catspaw's runtime module.



       SNOBOL4.DOC (V1.1)              - 7 -                    Catspaw, Inc.





          STACK SIZE -- Adjust SNOBOL4+'s stack usage


          Additional Operators
          --------------------

          LIST SELECTION -- Provides a list of expressions that are evalu-
          ated sequentially until one succeeds; it then becomes the value
          of the list.  This provides an If-Then-Else control structure in
          convenient expression form.  For example:
             OUT = "N is " (GT(N,0) "POSITIVE", EQ(N,0) "ZERO", "NEGATIVE")

          MULTIPLE ASSIGNS -- Permits multiple assignments within a state-
          ment, as in:  RESULT = A[I = I + 1] = A[I] * 5

          PATTERN MATCH -- The binary question mark operator designates
          pattern matching.  It permits pattern matches to be used within
          an expression, for example:  X = (SUB1 ? PAT1) (SUB2 ? PAT2) + 1


          Program Library
          ---------------

            SNOBOL4+ is accompanied by over 70 files of sample programs and
          functions provide examples in the areas of text processing, pars-
          ing, artificial intelligence (including ELIZA), symbolic mathe-
          matics, cryptography, and data structures.

            Reading these fascinating programs will open your eyes to the
          true expressive power of the language.


          Full Documentation
          ------------------

            Our professional package includes a 240-page printed manual
          (with index) with tutorial and thorough reference manual.  All
          features and functions of SNOBOL4+ are discussed, including the
          assembly language interface.  Customers in North America also
          receive a free subscription to our irregular and irreverent
          newsletter, "A SNOBOL's Chance."  It provides programming tips,
          news and feature articles about SNOBOL4.















       SNOBOL4.DOC (V1.1)              - 8 -                    Catspaw, Inc.





                             OTHER PRODUCTS FROM CATSPAW


          SPITBOL-68K for the Motorola 68000 Family
          -----------------------------------------

            With minor exceptions, SPITBOL (SPeedy ImplemenTation of
          snoBOL) is upward compatible with SNOBOL4.  The limitations are
          minor: standard system functions and operators may not be rede-
          fined with OPSYN, and Quickscan heuristics have been eliminated.
          Internally, these limitations are turned to advantage, because
          when combined with very clever system coding, the result is exe-
          cution times that must be experienced to be believed.

            Under license from Prof. Robert B.K. Dewar, SPITBOL's creator,
          and in cooperation with Mr. Robert Goldberg (Vax and PDP-11 Spit-
          bol), Catspaw has produced a version of Macro SPITBOL for the
          Motorola 68000-family of processors.

            At this time (May, 1988), SPITBOL is available for 68000
          machines running the Unix(tm) operating system, including the Sun
          2 and Sun 3, Apollo Domain, NCR Tower 32, Convergent S series,
          AT&T 7300/3B1 (Unix PC), HP 350, WICAT, and UNISYS 5000.  To get
          some idea of SPITBOL's speed, consider that SPITBOL-68K on a Sun
          3/180 is 50 to 75 times faster than SNOBOL4+ on a PC/XT.

            SPITBOL-68K is compatible with virtual memory.  We've scanned
          strings of 1,500,000 characters on a machine with only 1 megabyte
          of RAM (albeit somewhat slowly because of disk swapping).


          SPITBOL-68K Conversions in Progress
          -----------------------------------

            We have a preliminary version of Spitbol running for the Apple
          Macintosh.  Release during Summer, 1988 is anticipated.  80386,
          Atari, Amiga, and ports will follow.  Call or write to be placed
          on our notification list.


          Proximity Technology's PF474 "Fuzzy String Match" Short Card
          ------------------------------------------------------------

            Catspaw is a registered dealer for Proximity Technology's PF474
          Short Card.  Here's why we think this astounding VLSI chip de-
          serves wider recognition:

            String comparisons succeed when two strings are exactly equal.
          But real-world data is often incomplete or full of variant
          spellings and typographical errors.  Imagine being able to pro-
          vide two strings to a black box, and receive a real number back
          ____________________

            (tm) Unix is a registered trademark of AT&T



       SNOBOL4.DOC (V1.1)              - 9 -                    Catspaw, Inc.





          in the range 0.0 to 1.0, as a measure of the strings' SIMILARITY.

            That's exactly what the PF474 device does, and does quickly.
          As provided on a PC-compatible short-slot card, the PF474 can
          compare thousands of strings per second, depending upon string
          length.  Sample throughput: 109,000 4-character strings per sec-
          ond, 55,000 10-character strings, and 10,000 60-character
          strings.

            In addition to providing a similarity measure for each compari-
          son, the PF474 maintains a ranked list of the 16 best matches.
          This makes it ideal for linear data base searches with an approx-
          imate (or misspelled) key.  Using our interface software, you can
          also "slide" a query string along an arbitrarily long subject,
          finding the best match points, making it ideal for DNA sequence
          scanning.

            The PF474 board is packaged with Friendly Finder -- an off-the-
          shelf application from Proximity Technology that provides menu-
          driven scanning of dBase and ASCII data bases.  Also included is
          a developer's toolkit of C and assembly-language routines to ac-
          cess the chip.

            When the Proximity Board is purchased from Catspaw, we include,
          at no additional cost, a set of SNOBOL4+ interface routines that
          allow string and file scanning.  It's a potent combination.

            Many users augment their systems with 8087 or 80287 chips to
          speed-up numerical calculations.  If your problem domain is tex-
          tual, and the data inexact, why not add a "textual" speed-up
          device instead?


          The Rebus Programming Language
          ------------------------------

            Rebus is a language that provides modern control structures for
          SNOBOL4.  It combines features of Icon and SNOBOL4, giving you
          some of the control structures and syntax of Icon with the pat-
          tern-matching power of SNOBOL4.  Rebus is actually a preprocessor
          that accepts Rebus code and outputs SNOBOL4 code, which in turn
          runs under SNOBOL4+.

            Catspaw offers a diskette that contains the Rebus preprocessor
          and documentation.  It is still in its experimental stages, so
          this is not a polished product.  Since Rebus produces SNOBOL4+
          code, you must have SNOBOL4+ to use Rebus.  By way of example,
          here's the standard word frequency program in Rebus:









       SNOBOL4.DOC (V1.1)              - 10 -                   Catspaw, Inc.





               function main()
                    letter := &lcase || &ucase
                    wpat := break(letter) & span(letter) . word
                    count := table()
                    while text := input do
                         while text ?- wpat do
                              count[word] +:= 1
                    if result := sort(count) then {
                         output := "Word counts"
                         I := 0
                         Repeat output := result[i +:= 1,1] || " - "
                                   || result[i,2]
                         }
                    else output := "There are no words."
               end


          Btrieve(tm) Database System Interface
          -------------------------------------

            The standard for file management on MS-DOS machines is Btrieve
          from SoftCraft, Inc.  Btrieve has been integrated with several
          other programming languages, and Catspaw offers an interface to
          SNOBOL4+.

            Our package allows you to call Btrieve functions from inside a
          SNOBOL4+ program.  Btrieve specializes in finding and updating
          database records (fixed and variable length) in a hurry with its
          tree file structure and indexing system.  You can use Btrieve to
          fetch the data you want, and SNOBOL4+ to work with it.

            Note that the interface does not include Btrieve, which comes
          from SoftCraft, P.O. Box 9802, Austin, Texas 78766, 512-346-8380.


          Artificial Intelligence in SNOBOL4
          ----------------------------------

            SNOBOL4's backtrack searching, recursive abilities, and first-
          class data objects make it suitable for AI applications.  In
          fact, it is easy to implement LISP in SNOBOL4.

            We've taken a superb, but difficult to obtain report -- Michael
          Shafto's "Artificial Intelligence Programming in SNOBOL4" -- and
          placed it on diskette.  We've also included all of Shafto's
          demonstration programs and his SNOLISPIST function library .
          These list processing functions, written in SNOBOL4, simplify the
          task of converting LISP programs into SNOBOL4.









       SNOBOL4.DOC (V1.1)              - 11 -                   Catspaw, Inc.





                                  TEXTUAL MATERIAL

            To accompany all of these wonderful text analysis tools, we've
          assembled interesting and useful text files.


          Common Word List
          ----------------

            Ed Quillen, editor of "A SNOBOL's Chance," is a prolific
          writer.  We've taken a 330,000 word corpus, spanning a collection
          of his newspaper columns and books, and produced a word frequency
          list.  After editing, we had 16,500 unique words left, with num-
          bers indicating each word's relative frequency.

            Two files are provided: an alphabetic sort and a frequency
          sort.  The lists are undoubtedly influenced by genre, but if
          you've been looking for a few thousand common words that can be
          held in memory, this is it.


          Webster's Second Dictionary Word List
          -------------------------------------

            Three lists are provided.  The main list contains over 230,000
          words, in alphabetic order.  A second list contains 76,000 com-
          pound words.  A third list is derived from the first -- all the
          words sorted in reverse order.  That is, sorted by last letter
          first, so a section of the "E" list looks like this:

                . . .
               derange
               grange
               omnirange
               enrange
               orange
               sporange
               megasporange
                . . .

            The dictionary lists have been compressed onto eight 360K
          floppy disks.  Each list contains individual letter files, such
          that each letter file may be expanded to another floppy disk (for
          users without hard disk systems).  There are 2.5 megabytes of
          data (compressed), yielding 6.5 megabytes (uncompressed).


          The King James Bible
          --------------------

            We have the entire King James version of the Bible on seven
          diskettes.  There's 2 megabytes of data (compressed), which pro-
          duces 4.4 megabytes when uncompressed.  The text is upper- and
          lower-case, and includes chapter and verse numbers.



       SNOBOL4.DOC (V1.1)              - 12 -                   Catspaw, Inc.





          Shakespearean and Elizabethan Materials
          ---------------------------------------

            In cooperation with Mr. Louis Ule, we can offer machine-read-
          able texts of the works of William Shakespeare, anonymous Shake-
          speare apocrypha, Christopher Marlowe, and miscellaneous Eliza-
          bethan authors

            Texts have been standardized to American spelling, and include
          everything deemed written by the author with a minimum of emenda-
          tion.  For plays, stage directions and titles are included, but
          there are few borrowings from the later versions.  Texts are
          priced by the number of words; see the order form.  The texts are
          listed here by author and word-length.

            William Shakespeare: Venus and Adonis, 9,745; Sonnets, 17,640;
          Julius Caesar, 19,110; Antony and Cleopatra, 23,742; Richard II,
          28,309; Henry IV Part I, 23,955; Henry V, 25,577.

            Anonymous Shakespeare Apocrypha: Henry IV, Dering manuscript,
          28,618; Woodstock (missing Part I of Shakespeare's Richard II),
          25,722; Richard III, 19,946; Arden of Faversham, 20,222; Famous
          Victories of Henry the Fifth, 13,051; Taming of a Shrew, 12,438;
          Contention of York, Lancaster Part I, 17,676; Part II, 17,803;
          Leir, 21,709; King John Part I, 14,483; Part II, 9,922; Ironside,
          15,769; Edward III, 19,829.

            Christopher Marlowe: Massacre at Paris, 10,353; Edward II,
          21,104; Jew of Malta, 18,325; Doctor Faustus, 1616, 16,140; Doc-
          tor Faustus, 1604, 11,801; Tamburlaine I, 17,831; Tamburlaine II,
          18,122; Passionate Shepherd, 192; Dido, Queen of Carthage,
          13,726; Ovid's Elegies, 20,248; Hero and Leander, original por-
          tion, 6,316; Lucan's Pharsalia, 5,494.

            Other Elizabethan: Anonymous: Cobbler's Tale, 3,737; Gentle-
          man's Tale, 7,319. Lady Mary Wroth: Pamphilia to Amphilantus,
          12,730. Gervais Markham: Devoreux, 15,965. George Chapman: Addi-
          tion to Hero and Leander, 14,468. Robert Green: James IV, 20,456;
          Friar Bacon and Friar Bungay, 16,434. Thomas Kydd: Spanish
          Tragedy, 21,355. Samuel Daniel: Rosamond, 7,108. Third Earl of
          Pembroke: all poems, 7,664. Thomas Nashe: Pasquil to Marforius,
          11,500; Will Summers' Last Will and Testament, 16,873; Lenten
          Stuff, 27,391.














       SNOBOL4.DOC (V1.1)              - 13 -                   Catspaw, Inc.





                                ORDERING INFORMATION

          Legend:
            #  Diskette(s) only.  Documentation is present on the disk.

            *  Shipping charges apply.  See instructions below.

          ***** SOFTWARE *****
          [ ] SNOBOL4+ for MS-DOS, with 240-page tutorial and
              reference manual, 70 files of programs *        $95.00  ______
          
              68K-Spitbol for Unix operating system (specify):
          [ ] For single-u  ser workstations *               $495.00  ______
          [ ] For central-file servers *                     $995.00  ______
          
          [ ] 68K-Spitbol Apple Macintosh (Summer, 1988) *      call
          
          [ ] Rebus language diskette #                       $15.00  ______
          
          [ ] Btrieve/SNOBOL4+ interface *                    $50.00  ______
          
          [ ] SNOBOL4 T-shirts, outrageous 6-color, 100% cotton,
              S(34-36), M(38-40), L(42-44), XL(46-48) *        $8.95  ______
          
              Program diskette for "Algorithms in SNOBOL4."
              See listing under "Books."
          
          ***** HARDWARE *****
          [ ] Proximity Technology Fuzzy Match short-slot ex-
              pansion board with PF474 chip, Friendly Finder,
              Clean Mail, Developer's Toolkit, SNOBOL4+
              interface routines, all manuals: *             $375.00  ______
          
          [ ] Manuals only for above (may be credited toward
              hardware purchase) *                            $15.00  ______
          
          ***** BOOKS *****
              "Algorithms in SNOBOL4," Gimpel, 500 pages.
          [ ]    Paper *                                      $24.95  ______
          [ ]    Hardcover *                                  $34.95  ______
          [ ]    Program diskette #                           $15.00  ______
          
          [ ] "Computers in Linguistics," Butler, paper,
              270 pages *.                                    $15.00  ______
          
          [ ] "SNOBOL Programming for the Humanities," Hockey,
              paper, 178 pages (includes Catspaw Baedeker) *. $20.00  ______
          
          [ ] "SNOBOL4 Programming Language," Griswold, Poage,
              Polonsky, paper, 256 pages *.                   $30.00  ______
          
          [ ] "The Programmer's Introduction to SNOBOL,"
              Maurer, paper, 141 pages *.                     $24.50  ______
          



       SNOBOL4.DOC (V1.1)              - 14 -                   Catspaw, Inc.





          [ ] "A SNOBOL Primer," Griswold & Griswold,
              paper, 192 pages *.                             $26.50  ------
          
              "The Macro Implementation of SNOBOL4,"
          [ ] Griswold, hardcover, 324 pages *.            withdrawn
          [ ] Diskette of Macro source code #                 $15.00  ______
          
              "Artificial Intelligence Programming in SNOBOL4,"
              Shafto, 162 pages + programs, on diskette. #    $15.00  ______
          
          [ ] "The ICON Programming Language," Griswold &
               Griswold, paper, 313 pages *.                  $29.00  ______
          
          [ ] "The Implementation of the ICON Programming Language,"
              Griswold & Griswold, hardcover, 336 pages *.    $39.50  ______
          
          ***** TEXT *****
          [ ] King James Bible, 7 diskette set #              $50.00  ______
          
          [ ] Common Word List, 16,500 common words and
              their relative frequencies #                    $15.00  ______
          
          [ ] Webster's 2nd Dictionary word list.  Normal,
              reverse-sorted, and compound words.
              8 diskette set #                                $60.00  ______
          
          [ ] Elizabethan Texts from Louis Ule.  Specify texts
              desired.  $0.60/thousand words for first 100,000
              words, $0.50/thousand for next 100,000,
              $0.45/thousand thereafter.  #    Minimum order  $20.00  ______



























       SNOBOL4.DOC (V1.1)              - 15 -                   Catspaw, Inc.





          SHIPPING and HANDLING

            Shipping charges are based upon the number of books and book-
          like items (shown with *) purchased, subject to an overall
          minimum charge, to take care of diskette-only purchases.  Foreign
          shipments are sent by insured Air Parcel Post, registered Air
          Small Packet, or registered First Class Airmail.

                            | First Item    Each additional     Minimum
            Destination     |   with *           * item     shipping charge
          ------------------+----------------------------------------------
           Continental US   |   $2.50            $0.50            $1.50   |
            (UPS ground)    |                                             |
          ------------------+---------------------------------------------|
           Continental US   |   $5.00            $1.50            $3.00   |
          (UPS 2nd Day Air) |                                             |
          ------------------+---------------------------------------------|
          Alaska, Hawaii,   |                                             |
            Puerto Rico     |   $7.50            $2.00            $5.00   |
          (UPS 2nd Day Air) |                                             |
          ------------------+---------------------------------------------|
           Canada, Mexico   |  $10.00            $2.00            $6.00   |
          ------------------+---------------------------------------------|
               France       |  $18.50           $10.00           $10.00   |
          ------------------+---------------------------------------------|
          Australia, N.Z.,  |  $25.00           $10.00           $10.00   |
          Japan, Far East   |                                             |
          -----------------------------------------------------------------
          UK, Europe (exc.  |                                             |
            France), all    |  $18.50            $6.50           $10.00   |
          other countries   |                                             |
          ------------------+---------------------------------------------|
          

          PRICES

            Publishers occasionally change the price of the books we stock.
          So the usual caveat applies:  Prices subject to change without
          notice.  Price reductions will be passed along, too.


          PAYMENT

            Payment may be by check, money order, MasterCharge, Visa or
          American Express credit cards.  Checks and money orders MUST be
          in U.S. funds drawn on a U.S. bank; neither we nor any nearby
          financial institutions are equipped to process international
          currency transactions (checks MUST have US Federal Reserve coding
          numbers).  Foreign customers will find credit cards the simplest
          method of transferring funds.







       SNOBOL4.DOC (V1.1)              - 16 -                   Catspaw, Inc.





          TO ORDER

            To order direct, call 719-539-3884 (9 am - 5 pm, Mountain Time,
          Mon - Fri).  Or complete this form and mail to:

                                    Catspaw, Inc.
                                    P.O. Box 1123
                               Salida, Colorado 81201
                                       U.S.A.

                              Subtotal for desired items:  _________
          
                     Colorado residents add 3% state tax:  _________
          
                                                Shipping:  _________
          (Domestic U.S. specify UPS ground or 2 day air)
                                   Total Amount Enclosed:  _________
          
          
          
          Name _______________________________________Title _______________
          Address _________________________________________________________
                  _________________________________________________________
          City _______________________________________State _______________
          Zip _____________Phone(   )_________________(Country)____________
          
          Payment:  [ ] Check or Money Order    [ ] American Express
                    [ ] MasterCard              [ ] Visa

                          __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
          Account Number |__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|__|
          
          Signature _______________________________Exp. Date____________
          
          
          Serial number from your copy of Vanilla SNOBOL4 (if any) ________





















       SNOBOL4.DOC (V1.1)              - 17 -                   Catspaw, Inc.
```
{% endraw %}

## VANILLA.DOC

{% raw %}
```







                                   VANILLA SNOBOL4

            Vanilla SNOBOL4 provides the entire Bell Labs SNOBOL4 program-
          ming language, except for real numbers and external functions.

            The total size of the object program and data cannot exceed 30K
          bytes in this entry-level version.  Vanilla SNOBOL4 and the ac-
          companying documentation are copyrighted materials.  However, it
          may be copied and shared according to these terms:

            1. No fee greater than $10 is charged for use, copying or dis-
               tribution.

            2. SNOBOL4.COM and all documentation are not modified in any
               way, and are distributed together.

            3. The manual may not be packaged with any other product.

            4. Neither SNOBOL4+ (our commercial product), nor its printed
               manual, may be copied.

            Vanilla SNOBOL4 was released because we believe many people
          would enjoy programming in SNOBOL4, if there was a version of the
          language that was widely and freely available.  Contributions are
          NOT requested.  Enjoy and share it!

            This file, VANILLA.DOC, provides an overview of the SNOBOL4
          Programming Language, and why you'll find it to be an interesting
          and useful tool.


                            THE PHILOSOPHY OF SNOBOL4...

            Like most high-level computer languages, SNOBOL4 represents a
          design philosophy.  C, for instance, was designed for power and
          portability.  BASIC was designed for introducing students to com-
          puters, and Pascal for teaching structured programming.

            SNOBOL4's designers felt that programming time and effort
          should be minimized, even if the computer had to do additional
          work.  The philosophy is to allow the programmer to focus on
          solving the problem at hand, rather than on details like dynamic
          memory allocation, variable typing, data conversion, and so on.

            If ease of use coupled with extraordinary power and versatility
          appeals to you, please read on.










       VANILLA.DOC (V1.1)              - 1 -                    Catspaw, Inc.





                               THE STRING LANGUAGE...

            Almost uniquely among computer languages, SNOBOL4 treats a
          string as a distinct data type, rather than as a sequence or
          array of discrete characters.

            That's an abstraction.  Consider a concrete example to fill an
          everyday need -- converting a WordStar file into an ASCII file.

            In most languages, your program would have to examine each
          character in the WordStar file.  If its ASCII value is 127 or
          below, the character is passed on; if above, then 128 is sub-
          tracted.  Then the individual bytes have to be reassembled into a
          string.

            Assuming that the input and output files have been designated
          on the command line, the entire conversion program in SNOBOL4
          looks like this:

                    &Alphabet LEN(128) . Normals LEN(128) . Highs
            Loop    Output = REPLACE(Input, Highs, Normals)   :S(Loop)

            Notice how the REPLACE function operates on the entire string
          at once?  Is there any other language that could do this conver-
          sion in a two-line program?  How much time could you save by
          writing data-conversion programs in SNOBOL4?


                               THE PATTERN LANGUAGE...

            While SNOBOL4 provides a rich repertoire of string functions,
          its other specialty is patterns.  Suppose, for instance, you have
          a list of words, and you want to write out all those that start
          with "b" or "d", followed by a vowel, and end in "ly".  Here's
          the entire program:

          * Match at the start of a word and define a pattern:
               &Anchor = 1
               WantPat = ('b' | 'd') ANY('aeiou') RTAB(2) 'ly'
          
          * Read a line of input, perform the match, write results:
          Fetch     Word = Input                  :F(End)
                    Word WantPat                  :F(Fetch)
                    Output = Word                 :(Fetch)
          End

            SNOBOL4's syntax is so easy that you probably didn't need to
          know it to understand this program.  A line can have a label, an
          operation, or a goto, or any two, or all three.  Statements can
          succeed or fail.  The goto can be conditional upon success or
          failure.

            In the above program, a pattern is first defined.  At Fetch,
          the input is assigned to the variable Word.  If that fails, the



       VANILLA.DOC (V1.1)              - 2 -                    Catspaw, Inc.





          program has run out of input, and the program stops by transfer-
          ring to End.

            Next the word is compared to the pattern.  If that fails, the
          program goes back to Fetch to get the next word.  If the opera-
          tion succeeds, control goes to the next line, where Word is writ-
          ten out, and a transfer made to Fetch to continue the loop.

            Pattern matching is a very-high level language concept.  Pat-
          terns may be arbitrarily complex -- SNOBOL4 will search among the
          many alternatives for a match.  Patterns may even be recursively
          defined:

               LIST = ELEMENT | ELEMENT "," *LIST


                               THE USEFUL LANGUAGE...

            The range of current uses for SNOBOL4 is as diverse as its
          users.  Because programs can be written quickly for testing,
          systems-level programmers use it for prototyping assemblers, com-
          pilers and language translators.

            In many offices, the utilities for reformatting data and text
          are short SNOBOL4 programs.  With its backtrack searching, recur-
          sive abilities, and first-class data objects, SNOBOL4 is finding
          a home in artificial-intelligence research.  Its pattern-matching
          makes it a natural for querying data bases.

            Researchers use it for finding patterns in everything from
          medieval music to DNA sequences.  Newspapers and print shops use
          it for text formatting, translation and typesetting.  Others find
          SNOBOL4 the perfect tool for one-shot "throw-away" programs.

            If the challenge before you is primarily non-numeric, the odds
          are that you can use SNOBOL4 to meet that challenge more quickly
          and easily than with any other language.


                               THE ELEGANT LANGUAGE...

            SNOBOL4 is so powerful that its programs are typically quite
          short.  Source programs are typical 5 to 10 TIMES smaller than
          equivalent C or Pascal programs.

            SNOBOL4 allows an unlimited number of user-defined subroutines.
          By relying upon them, you create programs of structure and ele-
          gance.  Like patterns, subroutines may be recursive.  They're
          also fast to write and easy to update, revise, and maintain.


                            THE EASY-TO-LEARN LANGUAGE...

            Because SNOBOL4's syntax is so simple, it's easy to learn the



       VANILLA.DOC (V1.1)              - 3 -                    Catspaw, Inc.





          basics and be writing useful programs in just a few hours. Human-
          ities professors love it because its short programs are simple to
          explain to students without a computer background.

            But while it is easy to learn, it's not easy to exhaust.  The
          concepts embodied -- patterns, success and failure, tables,
          recursion, run-time code compilation -- will stimulate your
          interest indefinitely.

            Whether you're a systems designer, software developer, language
          enthusiast, end user, or the office PC guru, you can put SNOBOL4
          to work immediately to make your time more productive.


                              THE FLEXIBLE LANGUAGE...

            Not only can you create your own "language within a language"
          with SNOBOL4's roll-your-own functions, but you can define your
          own data types.

            As if that weren't flexibility enough, SNOBOL4 also allows you
          to redefine or extend its operators during execution -- flexibil-
          ity that few other languages dare to offer.

            In fact, you can create and execute new program segments at
          runtime; programs can evolve based upon the data they are pro-
          cessing.  It's trivial to write a SNOBOL4 program that reads,
          compiles and executes other SNOBOL4 programs.  Try doing that in
          BASIC or Pascal!

            One of SNOBOL4's most exquisite features is the TABLE.  In
          essence, it's a one-dimensional array where the index can be any
          data type.  You aren't limited to A[1] or the like; your table
          can have indices like A["what"] or A[7.3].

            The table, almost unique to SNOBOL4, provides associative mem-
          ory referencing -- so that data can be quickly stored and refer-
          enced in its natural form.


                        THE POWERFUL AND PORTABLE LANGUAGE...

            Beyond its specialties of string and pattern-matching, SNOBOL4
          provides a full array of mathematical operations; it's a general-
          purpose programming language.  Pointers, indirect-referencing and
          user-defined data types permit arbitrary data structures such as
          lists, trees, and networks.

            Because the SNOBOL4 language has been implemented on a wide
          range of mainframe and mini-computer systems, programs can be
          developed and tested on a desktop machine, then easily ported to
          the bigger computers, generally with no modification.





       VANILLA.DOC (V1.1)              - 4 -                    Catspaw, Inc.





                             THE UPGRADEABLE LANGUAGE...

            If you become a SNOBOL4 fan, you'll want SNOBOL4+, our $95 pro-
          fessional version (plus shipping).  It allows programs and data
          up to 300K, assembly-language functions, real numbers, and has
          dozens of extensions like: binary and random-access I/O, include
          files, built in Shell sort, Spitbol operators, SAVE files and
          royalty-free runtime, dozens of new functions and keywords and a
          symbolic debugger.  It interfaces easily to specialized systems
          and components, such as SoftCraft's Btrieve(tm) file management
          package and Proximity Technology's "Fuzzy String Match" board.
          You can find more information about SNOBOL4+ in the file
          SNOBOL4.DOC.

            SNOBOL4+ includes a 240-page printed and indexed manual, and
          over 70 files of sample programs and functions.  SNOBOL4+ is not
          a public-domain product, and it may not be copied (except for le-
          gitimate backup purposes).  The printed manual may not be copied.

            SNOBOL4+ owners also get telephone and written support, and
          receive "A SNOBOL's Chance," our relevant and irreverent
          newsletter.

            We also carry all SNOBOL4 books in print, from beginner to
          advanced, as well as textual materials -- see SNOBOL4.DOC.  We
          have versions of SNOBOL4 for most 68000-family systems running
          the Unix(tm) operating system.  An Apple Macintosh version will
          be available in Summer, 1988.

            Enjoy this taste of SNOBOL4, the standard for text manipula-
          tion, pattern-matching, and fun programming.  We hope you develop
          an appetite.

          CATSPAW, INC.   P.O. BOX 1123   SALIDA, COLORADO 81201   USA

            Telephone:   (719) 539-3884

            SNOBOL4 BBS: (719) 539-4830 (3/12/2400, 8 bits, no parity,
                                        spaces to baud detect)












          ____________________

            (tm) Unix is a registered trademark of AT&T



       VANILLA.DOC (V1.1)              - 5 -                    Catspaw, Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0980

     Volume in drive A has no label
     Directory of A:\

    BITZER   SNO      7362  12-04-87  12:00p
    BNF      DAT       118  12-04-87  12:00p
    BNF      IN         73  12-04-87  12:00p
    BNF      SNO      3319  12-04-87  12:00p
    BUDGET   SNO      3688  12-04-87  12:00p
    CAPITAL  DAT       989  12-04-87  12:00p
    CAPITAL  SNO       644  12-04-87  12:00p
    CODE     SNO      2890  12-04-87  12:00p
    CROSS    SNO      1690  12-04-87  12:00p
    DEXP     INC      1063  12-04-87  12:00p
    DIFF     INC       703  12-04-87  12:00p
    DIFF     SNO      4003  12-04-87  12:00p
    FCOUNTS  SNO       245  12-04-87  12:00p
    FILES980 TXT      1826   8-17-88   1:08p
    GENTRAN  DOC      9690  12-04-87  12:00p
    GENTRAN  SNO      8931  12-04-87  12:00p
    GENTRAN  TTI       862  12-04-87  12:00p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   7-07-88  11:00a
    LABCENT  SNO      3612  12-04-87  12:00p
    LENGTH   SNO       140  12-04-87  12:00p
    ORDER    INC      1530  12-04-87  12:00p
    PM       EXE    143636   5-16-88  12:00p
    PRINTMAN BAT      1005  12-04-87  12:00p
    README   DOC      5987   5-16-88  12:00p
    RPOEM    DAT      1204  12-04-87  12:00p
    RPOEM    SNO      6788  12-04-87  12:00p
    SMARTVOW SNO      1434  12-04-87  12:00p
    SNOBOL4  COM     55213   5-16-88  12:00p
    SNOBOL4  DOC     41673   5-16-88  12:00p
    TEXT     IN        269  12-04-87  12:00p
    TICTAC   SNO      4965  12-04-87  12:00p
    TRIPLET  SNO       468  12-04-87  12:00p
    VANILLA  DOC     12746   5-16-88  12:00p
    VOWELS   SNO       946  12-04-87  12:00p
    WDSTAR   SNO       513  12-04-87  12:00p
    WORDS    SNO       603  12-04-87  12:00p
    WORDSIZE SNO      1871  12-04-87  12:00p
           38 file(s)     333585 bytes
                           11264 bytes free
