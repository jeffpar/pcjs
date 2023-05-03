---
layout: page
title: "PC-SIG Diskette Library (Disk #814)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0814/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0814"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MODULA-2 TUTORIAL 1 OF 2 (ALSO 815)"

    MODULA-2 TUTORIAL teaches you the fundamentals of this complex
    language and will have you up and programming by the end of it.
    
    The first part of this tutorial is composed of those features that are
    common to PASCAL and MODULA-2 and are also of a fundamental nature.  You
    will need to study all of Part I in order to write meaningful MODULA-2
    programs.  If you are already a fairly experienced Pascal programmer,
    you should absorb this material very quickly.
    
    Parts II and III teach those features that are new in MODULA-2 --
    advanced topics and features that allow the programmer to use the full
    power of the language and write larger and more complex programs. File
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHAP01.TXT

{% raw %}
```

                                                     Chapter 1

                                   WHAT IS A COMPUTER PROGRAM?



THIS IS FOR THE COMPUTER NOVICE
______________________________________________________________

If you are a complete novice to computers, you will find the
information in this chapter useful.  If you have some
experience in computer use, and especially programming, you
can completely ignore this chapter.  It will deal with a few
of the most fundamental topics of computers and will have
nothing to do with the Modula-2 programming language.


WHAT IS A COMPUTER PROGRAM?
______________________________________________________________

A computer is nothing more than a very dumb machine that has
the ability to perform mathematical operations very rapidly
and very accurately, but it can do nothing without the aid of
a program written by a human being.  Moreover, if the human
being writes a program that turns good data into garbage, the
computer will very obediently, and very rapidly, turn good
data into garbage.  It is possible to write a large program
with one small error that will do just that.  In some cases,
the error will be obvious, but if the error is subtle, the
answers may appear to be right, and the error will go
unnoticed.  It is up to you, the human programmer, to write
a correct program to tell the computer what to do.  You can
think of the computer as your very obedient slave ready to do
your every whim.  It is up to you to tell your slave what you
want it to do.

A computer program is a recipe which the computer will use on
the input data to derive the desired output data.  It is
similar to the recipe for baking a cake.  The input data is
comparable to the ingredients, including the heat supplied by
the oven.  The program is comparable to the recipe
instructions to mix, stir, wait, heat, cool, and all other
possible operations on the ingredients.  The output of the
computer program can be compared to the final cake sitting on
the counter ready to be cut and served.  A computer then is
composed of two parts, the data upon which the program
operates, and the program.  The data and program are
inseparable as implied by the last sentence.


WHAT ARE CONSTANTS?
______________________________________________________________

Nearly any computer program requires some numbers that never
change throughout the program.  They can be defined once and
used as often as needed during the operation of the program.

                                                           1-1

                       Chapter 1 - What is a Computer Program?

To return to the recipe analogy, once you have defined how big
a tablespoon is, you can use the same tablespoon without
regard to what you are measuring with it.  When writing a
computer program, you can define the value of PI = 3.141592,
and continue to use it wherever it makes sense knowing that
it is available, and correct.


WHAT ARE VARIABLES?
______________________________________________________________

In addition to constants, nearly any computer program uses
some numbers that change in value throughout the program.
They can be defined as variables, then changed to any values
that make sense to the proper operation of the program.  An
example would be the number of eggs in the above recipe.  If
a single layer of cake required 2 eggs, then a triple layer
cake would require 6 eggs.  The number of eggs would therefore
be a variable.


HOW DO WE DEFINE CONSTANTS OR VARIABLES?
______________________________________________________________

All constants and variables have a name and a value.  In the
last example, the name of the variable was "eggs", and the
value was either 2 or 6 depending on when we looked at the
value.  In a computer program, the constants and variables
are given names in much the same manner, after which they can
store any value within the defined range.  Any computer
language has a means by which constants and variables can be
first named, then assigned a value.  The means of doing this
in Modula-2 will be given throughout the remainder of this
tutorial.



WHAT IS SO GOOD ABOUT MODULA-2?
______________________________________________________________

Some computer languages allow the programmer to define
constants and variables in a very haphazard manner and then
combine data in an even more haphazard manner.  For example,
if you added the number of eggs, in the above recipe, to the
number of cups of flour, you would arrive at a valid
mathematical addition, but a totally meaningless number.  Some
programming languages would allow you to do just such an
addition and obediently print out the meaningless answer.
Since Modula-2 requires you to set up your constants and
variables in a very precise manner, the possibility of such
a meaningless answer in minimized.  A well written Modula-2
program has many cross checks to minimize the possibility of
a completely scrambled and meaningless output.

                                                           1-2

                       Chapter 1 - What is a Computer Program?

Notice however, in the last statement, that a "well written"
Modula-2 program was under discussion.  It is still up to the
programmer to define the data structure in such a way that the
program can prevent garbage generation.  In the end, the
program will be no better than the analysis that went into the
program design.

If you are a novice programmer, do not be intimidated by any
of the above statements.  Modula-2 is a well designed tool
that has been used successfully by many computer novices and
professionals.  With these few warnings, you are ready to
begin.









































                                                           1-3

```
{% endraw %}

## CHAP02.TXT

{% raw %}
```

                                                     Chapter 2

                                   GETTING STARTED IN MODULA-2



OUR FIRST MODULA-2 PROGRAM
______________________________________________________________

We are ready to look at our first             ================
instructional program in Modula-2.              PUPPYDOG.MOD
Assuming that you have a full screen          ================
editor of some type, load the program
PUPPYDOG.MOD and display it on your screen or examine a
printed listing of it.  This is an example of the minimum
Modula-2 program.  There is nothing that can be left out of
this program and still have a compilable, executable program.

The first word in the program, MODULE, is the name that
identifies a module, and it must be written as given here, in
all capital letters.  During the first two parts of this
tutorial, we will only use this type of a module.  There are
other types, but we will not look at any of them until we get
to part III of this tutorial.  Modula-2 requires us to name
our module so we give it a name, PuppyDog in this case.  We
could have used any name that qualifies as an identifier but
we have chosen a name that has nothing to do with computers
as an illustration that any name could be used.  In a
practical program, you would probably use a name that was
descriptive of the program in some way.


WHAT IS AN IDENTIFIER?
______________________________________________________________

An identifier is a combination of letters and numbers that
Modula-2 uses to identify a variable, program name, procedure
name, and several other quantities.  In Modula-2, an
identifier is composed of any number of characters.  The
characters may be any mix of alphabetic and numeric
characters, but the first character must be an alphabetic
character.  The case of the alphabetic character is
significant such that PuppyDog, PUPPYDOG, and PuPpYdOg are all
different identifiers.  No spaces or any other special
characters are allowed within an identifier.


BACK TO THE PROGRAM UNDER CONSIDERATION
______________________________________________________________

The header line is terminated with a semicolon according to
the formal definition of Modula-2.  A semicolon is a statement
separator and many semicolons will be used in large programs.
Following the semicolon, we come to the program itself.  The
program statements are enclosed between the two words BEGIN
and END.  In this case there are no statements, but if there

                                                           2-1

                       Chapter 2 - Getting Started in Modula-2

were some, they would be placed between the two indicated
words.  Finally, the module name is repeated after the END and
it is followed by a period.  The module name is repeated in
order to make the program easier to understand by clearly
marking its limits.  In a program as small as this example,
it really doesn't add to the clarity, but in a large program,
it can be of significant help.  The period marks the end of
the listing and can be thought of as similar to the period
that marks the end of a sentence.

The three words, MODULE, BEGIN, and END, are special words in
Modula-2.  They are reserved words because they are used for
a specific purpose and cannot be used in any other way.  They
are not available for your use in any way except for the
defined purpose.  The reserved words in Modula-2 must be
capitalized or the compiler will not consider them as reserved
words.  You will remember that alphabetic characters must have
the correct case in Modula-2.  Some other languages, most
notably Pascal, allow you to use either case anywhere and it
converts them internally so that they are the same.  It would
be permissible for you to use words such as Begin or End as
variables in a Modula-2 program because of the difference in
case, but it would be very poor programming practice and
should be avoided.  We will come across many other reserved
words in these lessons.  There are 40 reserved words in
Modula-2, and they are listed as follows;

     AND           ELSIF             LOOP         REPEAT
     ARRAY         END               MOD          RETURN
     BEGIN         EXIT              MODULE       SET
     BY            EXPORT            NOT          THEN
     CASE          FOR               OF           TO
     CONST         FROM              OR           TYPE
     DEFINITION    IF                POINTER      UNTIL
     DIV           IMPLEMENTATION    PROCEDURE    VAR
     DO            IMPORT            QUALIFIED    WHILE
     ELSE          IN                RECORD       WITH

We will study each of these words and how to use them in this
tutorial.

You should have learned how to use your compiler by now so you
can compile and run this program.  It will do nothing, but
that is significant in itself, because it should at least
return to the operating system after it finishes doing
nothing.  That may sound a little silly, but it does take a
considerable amount of effort to load, transfer control to the
program, and set up linkage back to your Disk Operating
System.

It should be noted at this time that the Modula-2 compiler
doesn't care about extra blanks or linefeeds and the careful
programmer will insert extra blanks and linefeeds as desired
in order to make the program easier to read.  As you continue

                                                           2-2

                       Chapter 2 - Getting Started in Modula-2

to program in Modula-2, you will no doubt develop a style of
your own and hopefully your programs can be read and
understood easily by other programmers.


A PROGRAM THAT DOES SOMETHING
______________________________________________________________

Examine the program named WRITESM.MOD for      ===============
an example of a Modula-2 program that does       WRITESM.MOD
something.  First you should notice that       ===============
the elements of the first program are
still here as they will be in every Modula-2 program.  The
same three reserved words are used here as before, but now
there are some added statements.

The third line begins with the reserved word FROM and is a
special line that must be used in any program that accesses
external procedures.  We will not try to define line three at
this time.  We will only say that every external call in
Modula-2 requires a definition of where to find the procedure.
The module named InOut is a Modula-2 collection of input and
output routines that are available for our use and this line
in the program tells the system to look in the InOut
collection for the procedures named WriteLn and WriteString.
When the program needs these particular subprograms to do what
we ask it to do, it knows where to find them.  We will cover
the import list in detail later in this tutorial.  Until then,
simply use the example programs as a guide when you wish to
write a practice program.


OUR FIRST PROGRAM STATEMENTS
______________________________________________________________

Between the begin and end statements in lines 5 and 19, which
we defined previously as the place where the actual program
is placed, we have a series of WriteString and WriteLn
statements.  These statements are almost self explanatory,
but we will give a few words of explanation about them anyway.
Each line is a call to a procedure which is a very important
feature of Modula-2.  A procedure is a servant that does a
specific job for us in a well defined way.  In the case of the
WriteString, it looks at the string of characters supplied to
it and displays the string of characters on the monitor at the
current cursor position.  The WriteLn procedure serves us by
moving the cursor down one line on the monitor and moving it
to the left side of the screen.

The parentheses are required for the WriteString procedure
because it has data following it.  The data within the
parentheses is data supplied to our slave or helper.  It gets
the string of characters between the quotation marks or the
apostrophes and displays the string on the monitor.  You have

                                                           2-3

                       Chapter 2 - Getting Started in Modula-2

a choice of delimiters so that you can output the delimiters
themselves.  If you desire to output a quotation mark to the
monitor, use apostrophes for delimiters, and if you wish to
output apostrophes, use quotation marks.  If you wish to
output both, break the line up and output it piecemeal as in
lines 14 through 16.

This program should be very clear to you by now.  First we
tell the system where to get the procedures, then we list the
procedures in the order required to produce the desired
results.  It should be apparent that the lines of the program
between the reserved words BEGIN and END are simply executed
in order.  Compile and execute the program and observe the
output on your monitor.  As mentioned earlier, lines 26
through 29 give the result of executing the program, and your
compiler should give you the identical output.  Lines 24
through 31 are within a comment area and will be ignored by
the compiler.  Comments will be discussed in detail in the
next example program.

It should be mentioned at this point that it is possible to
direct the output to the printer or to a disk file but we will
not be doing that for quite some time.  We will stay with the
basic syntax of Modula-2 for now.


MODULA-2 COMMENTS
______________________________________________________________

No program is complete without a few           ===============
comments embedded in the program as notes        MODCOMS.MOD
to the programmer describing the reasons       ===============
for doing some particular thing.  The
notes are particularly helpful to another programmer who needs
to modify the program some day.  It is not necessary for the
computer to understand the notes.  In fact, you don't want the
computer to try to understand the notes, so you tell the
compiler to ignore the notes completely.  How to do this is
the object of our next program named MODCOMS.MOD which you
should examine at this time.

In Modula-2, comments are enclosed in pairs of double
characters.  The comment is started with the (*, and ended
with the *), and can extend over several lines if desired.
The program under consideration at this time, has several
examples of comments in it.  If the comments were completely
removed, the program would be very similar to the last one but
a lot shorter.  Notice that comments can go nearly anywhere
in a program, even before the header statement or after the
ending period.  Comments can even be inserted within a
statement provided they go between tokens.  (See programming
exercise 3 at the end of this chapter.)


                                                           2-4

                       Chapter 2 - Getting Started in Modula-2

A DEBUGGING AID
______________________________________________________________

Comments can be used to remove a section of program from
consideration by the compiler so that a particularly
troublesome section of code can be "commented out" until you
solve some of the other problems in program debugging.  This
is illustrated in lines 18 and 19 which are ignored by the
compiler since they are within a comment area.  It is
important to remember that comments can be nested in Modula-2
so that a section of code can be "commented out" even if it
contains other comments.

This particular program is not meant to be an example of good
commenting.  It is really a sloppy looking program that would
need some work to put it into a good style, but it does
illustrate where it is possible to put comments.  It should
be clear to you now that the result of execution section at
the end of each program is actually a comment as we mentioned
in the last section.


GOOD PROGRAMMING STYLE
______________________________________________________________

Examine the program named GOODFORM.MOD for    ================
an example of a well formatted program.         GOODFORM.MOD
Since Modula-2 allows you to use extra        ================
spaces and blank lines freely, you should
use them in any way you desire to make your programs easy to
understand, and therefore easy to debug and modify.  Special
care has been given to style in this program and it paid off
in a very easy to understand program.  Even with your very
limited knowledge of Modula-2 programming, you can very
quickly decipher what it does.  It is so well formatted that
comments are not needed and they would probably detract from
its readability.  No further comment is needed or will be
given.  Compile and run this program to see if it does what
you think it will do.


REALLY BAD FORMATTING
______________________________________________________________

As you examine UGLYFORM.MOD, you are          ================
seeing an excellent example of bad              UGLYFORM.MOD
formatting.  If you can see at a glance       ================
what this program does, you deserve the
Nobel Prize for understanding software if such a thing exists.
The syntax for this program follows all of the rules of
Modula-2 programming except for good style.  Without saying
anything else about this mess, I would suggest that you try
to compile and run it.  You may be surprised to find that it
does compile and run, and in fact, it is identical to the last

                                                           2-5

                       Chapter 2 - Getting Started in Modula-2

program.  Keep in mind that you can add extra blanks and
linefeeds anyplace you desire in a program to improve its
readability.

Hopefully, the last two programs will be an indication to you
that good programming style is important and can be a
tremendous aid in understanding what a program is intended to
do.  You will develop your own programming style as time goes
by.  It is good for you to spend some effort in making your
program look good, but don't get too excited about it yet.
Initially, you should expend your effort in learning how to
program in Modula-2 with reasonable style and strive to
improve your style as you go along.  It would be good for now
if you simply tried to copy the style given in these lessons.


PROGRAMMING EXERCISES
______________________________________________________________

1.   Write a program that will display your name on the
     monitor.

2.   Write a program that will display your name on the
     monitor along with your address, city, and state in 3
     separate lines.

3.   Add a comment to the MODCOMS.MOD file between the words
     IMPORT and WriteLn to see if the compiler will allow you
     to put a comment within a statement.
























                                                           2-6

```
{% endraw %}

## CHAP03.TXT

{% raw %}
```

                                                     Chapter 3

                                THE SIMPLE MODULA-2 DATA TYPES



TYPES ARE IMPORTANT
______________________________________________________________

The material in this chapter is extremely important to you as
you strive to become a good Modula-2 programmer, but you may
also find it to be somewhat tedious because it contains so
many facts.  This material is needed in order to develop the
topics in the next few chapters, but all of the details are
not necessarily required.  For that reason, you may wish to
go through it rather rapidly picking up the high points and
come back to this chapter for the details later when they will
be much more meaningful.  Do not completely pass over this
material at this time or the next few chapters will be
meaningless.  If you are already highly experienced in other
programming languages, you may be able to survive the next few
chapters without this material, but keep in mind that Modula-
2 has a few unique constructs.

The most important basic principle in this chapter is the
introduction of the data type.  The type of a variable defines
a range of values the variable can have assigned to it and it
also defines a set of operations that are available for use
with the variable.  By the proper application of data typing,
the system checks your usage of values to see that you use
them in a reasonable manner.


MODULA-2 IS CHANGING
______________________________________________________________

Because Modula-2 is changing based on experience with use,
some of these programs may not compile correctly.  Every
effort was made to make the example programs as error free as
possible but due to slight changes in the language, you may
have a few compilation problems.  We will say more about this
after we develop a few topics so we can talk more
intelligently about it.

Of course, due to slight variations in compilers you may have
a few problems also.  Modula-2 is a well designed and defined
language, but there is room for slight differences in
compilers and the way they interpret various constructs.


A PROGRAM WITH VARIABLES
______________________________________________________________

The program named INTVAR.MOD is our first program with some
variables in use.  This program begins in the usual way since
it has a module header and the import list.  Next we come to

                                                           3-1

                             Chapter 3 - The Simple Data Types

a new reserved word, VAR.  This word is       ================
used to indicate to the compiler that we         INTVAR.MOD
wish to define one or more variables.  In     ================
Modula-2, there is a rule that says you
can use nothing until it is defined.  If we wish to use a
variable in the program, we must first define that it will
exist, and what kind of a variable it is, or to be more
specific, what type it is.  After that, it can be used in the
program to do what needs to be done.

Following the reserved word VAR in line 16, we have the
variable named Count defined.  The reserved word INTEGER
following the colon states that the variable named Count will
be of type INTEGER.  This means that it can store any whole
number between -32768 to 32767 on most microcomputers, and a
considerably larger range on larger computers.  Don't worry
too much about this yet, the next program will completely
define what an integer type variable is.  It is important to
recognize that after we have defined the variable named Count,
it still doesn't have a value stored in it, that will come
later.

Line 7 has two more variables defined, namely x, and y.  Once
the reserved word VAR is mentioned, as many variables as
desired can be defined.  They are also integer type variables
and do not have a value stored in them yet.  You can think of
the three variables as three empty boxes, each capable of
storing a number but with no number in them yet.  It would be
perfectly permissible to put all three variables on one line,
or to have separated them such that each was on a separate
line.  At this point, the program doesn't know that there is
any difference between them, because there isn't any.  The
fact that one will contain the sum of the other two has no
meaning yet, the comments are only for us, not the computer.

Note that Modula-2 gives you no way to initialize a variable
when it is declared.  This is permissible in many other
languages.


USING VARIABLES IN A PROGRAM
______________________________________________________________

Now we will examine the program itself.  Line 11 sets the
variable named x to the value 12, in effect putting the number
12 in the box mentioned earlier.  The sign := is the Modula-2
symbol for assignment.  It is most meaningful to read the
symbol "gets the value of" since it is not really stating a
mathematical equality but is saying in effect, "assign the
value of this to the variable at the left."  The entire line
can be read as "x gets the value of 12."  There is now a value
assigned to the variable x declared in the header.  The next
statement assigns the value of 13 to the variable named y.
Finally the value of the data stored in the variable named x

                                                           3-2

                             Chapter 3 - The Simple Data Types

is added to the value of the data stored in the variable named
y, and the sum is stored in the variable named Count.  We have
therefore done our first calculation in Modula-2, but we will
do many more before this tutorial is completed.  The observant
student will notice that each statement is terminated with a
semicolon, a Modula-2 requirement.

The three variables are then displayed on the monitor with
appropriate prose to identify them in lines 17 through 25.
The only new statement here is the WriteInt procedure that
needs a little explanation.  This procedure is used to output
an integer type variable to the monitor or whatever device is
being used.  By definition, it contains two quantities within
the parentheses, the first being the variable name and the
second being the number of columns the output should fill.
If there are not enough columns specified to output the data,
more will be used so that no digits will be truncated.  If all
are not needed, leading blanks will be output.  If the
variable named x had the value of 1234 when we came to program
line 18, all four digits would be output in spite of the
request for three.  Since the variable x has the value of 12,
only two columns will be used and one leading blank will be
output.  In like manner, the value of the variable named y is
allotted 4 columns and the value of Count is to be output in
6 columns.

Lines 27 and 28 of the program assign new values to two of the
variables.  The variable x is assigned the value of FF
hexadecimal which is 255 decimal, and y is assigned the value
of 177 octal which is 127 decimal.  Note that the hexadecimal
number must have a leading digit.  In this case, a zero had
to be prepended.  This is only done as an illustration to you
of how it is done.  If you don't understand these two
numbering systems, simply ignore this until you have a need
for it.

Compile and run this program to see if it does what you expect
it to do.  The important thing to notice in this program is
the variable definition in the definition part of the module
and the variable assignment in the program part.  It should
be obvious, but it would be well to mention that the
definition part of the module extends from the module name to
the reserved word BEGIN and is where all definitions are put.
Likewise, the program part of the module includes all
statements from the begin statement to the end statement.


SIMPLE VARIABLE TYPES
______________________________________________________________

Modula-2 has several predefined data types that you can use
in your programs.  You also have the ability to define any
number of complex types built up from the simple types but we
will not discuss this until we get to chapter 6 of this

                                                           3-3

                             Chapter 3 - The Simple Data Types

tutorial.  The simple types are INTEGER, CARDINAL, REAL,
BOOLEAN, and CHAR.  Each has its own purpose and its own
peculiarities and we will cover each type one at a time.

A few other types may be available with your particular
compiler, but they are not universal, so you must check your
documentation to see if they are available with your system.
The types LONGINT, LONGCARD, and LONGREAL are additional types
that represent long integer, long cardinal, and long real
types respectively.  In each case more storage is required,
but numbers covering a larger range can be stored in variables
of these types.  After you understand the basic types, these
new types will be easy for you to understand, so they will not
be illustrated in this tutorial.


THE SIMPLE VARIABLE - INTEGER
______________________________________________________________

Examine the program named INTMATH.MOD for      ===============
a few examples of integer math operations.       INTMATH.MOD
In the declaration part of the program         ===============
(the part prior to the BEGIN) we have 7
integer type variables defined for use in the program which
we will use to illustrate integer arithmetic in the Modula-2
programming language.

An integer variable, can store any whole number between -32768
and 32767 on most microcomputers.  An attempt to store any
other value in an integer type variable should produce an
error by your compiler but it may produce some other result.
Some compilers may store a -32769, which is one count too low,
as a 32767 which is at the top end of the range.  This is due
to the two's complement arithmetic that you don't need to
understand at this point.  It will be left to you to determine
what your compiler does in such a case.

Line 10 of this program is nothing new to you, it simply
assigns the variable named A the value of 9.  Line 11 adds 4
to the value stored in the variable A and the result, 13, is
stored in the variable named B.  Next, the values stored in
the variables named A and B are added together and the sum,
which is 13, is stored in the variable named IntSum.
Continuing in the same manner, the difference and the product
are calculated and stored.  When we come to integer division,
we are breaking new ground because the result is truncated to
the largest whole number resulting from the division.  Thus
13 DIV 9 results in 1 because the remainder is simply dropped.

The next construct, B MOD A results in the remainder of the
division, which is 4 in this case.  Note that the modulo (MOD)
operator can only be used with a positive denominator in
Modula-2.  Any attempt to use the modulo operator with a
negative denominator will result in a fatal run time error.

                                                           3-4

                             Chapter 3 - The simple Data Types

You will find these operations very useful as you progress as
a Modula-2 programmer.

The intent of the next line is to illustrate that you can do
several math operations in a statement if you are careful to
put the parentheses in the proper places.  The rules about
operator precedence are similar to those for other programming
languages, and they are well defined, but I recommend that you
use lots of parentheses to remove all doubt as to what the
results will be.


THE INC AND DEC OPERATIONS
______________________________________________________________

The results of the operations are each displayed in 6 columns
and we move on to several new operations.  The first new
operation is the INC which is short for increment.  This
simply increments the variable contained within the
parentheses and if a second argument is given, the variable
is incremented by the value of that variable.  In like manner,
the DEC procedure decrements the variable in the parentheses
by one unless a second argument is given in which case the
variable is decremented by the value of that variable.

It may not be clear at this point, but the second variable
itself may be another variable name or even a composite of
several as long as it results in an integer type variable.
This is illustrated in the program in line 33.



THE MIN AND MAX OPERATIONS
______________________________________________________________

Finally, we come to the last two procedures in this program,
the MIN and the MAX.  These two function procedures are built
into the language and therefore do not need to be imported.
They are properly called function procedures because each
returns a value, but it is still proper to refer to them
simply as procedures.  These two procedures will return the
value of the smallest possible integer, -32768 and the largest
possible integer, 32767 for most microcomputers.  These are
the values returned for a 16 bit computer.  It is possible
that you are using a computer and compiler combination that
uses more than 16 bits.  If this is the case, MIN and MAX will
return larger numbers.

Compile and execute this program and observe the output.  If
your compiler results in errors, you may have to make some
changes in order to compile it.  Some of the more popular
Modula-2 compilers do not implement the MIN and MAX
procedures, so you may need to remove or comment out lines 35
and 36 of this program prior to compilation.  The min and max

                                                           3-5

                             Chapter 3 - The Simple Data Types

procedures are relatively new additions to Modula-2 which
explains why they are not yet available with all compilers.


THE SIMPLE VARIABLE - CARDINAL
______________________________________________________________

Examine the file named CARDMATH.MOD for a     ================
few examples of cardinal mathematics and        CARDMATH.MOD
output.  In this file, 7 variables are        ================
defined as type CARDINAL and one more as
type INTEGER.  A cardinal variable can store any whole number
from 0 to 65535 in a 16 bit microcomputer, although the range
may be different if you are using a computer and compiler
combination that uses more bits.

The first few lines are the same as the last program so very
little needs to be said about them except for the subtraction
example.  In this case, the result of the subtraction would
be negative if it were carried out as in the last program so
A is subtracted from B.  It is an error to attempt to store
a negative number in a cardinal type variable.  For that
reason, a cardinal should not be used if there is any chance
that it will be required to go negative.  Programming
experience will be the best teacher when it comes to deciding
what variable types to use in each situation.

In this program the variables are once again displayed, but
now the procedure named WriteCard is used for output because
the variables to be output are of the cardinal type.

The next two statements indicate that integer and cardinal
variables are "assignment compatible", meaning that they can
be assigned to each other with the := operator.  They cannot
however, be mixed in calculations.  Constants in an expression
are assumed to be of the same type as the variables in the
expression and they must agree.  For that reason, the
expression in line 36 is invalid because (-112) is a negative
constant and therefore not cardinal.  In the prior line it is
permissible to subtract the positive number 112 from the value
of A as long as the result is still positive.  As an exercise,
change line 34 such that a number less than 112 is assigned
to the variable named A.  The program will compile without
error but when you run it, you should get a runtime error
because the cardinal assignment is out of range.  Notice that
the constant value of -112 is permissible for use as an
integer constant.

The remaining statements in the program are the same as the
last program so additional explanation is unneeded.  It would
be good to point out that in the case of cardinal, the MIN and
MAX procedures will return values of 0 and 65535 for most 16
bit implementations.  Computers using additional bits will
result in a much larger value for MAX.  Compile and run this

                                                           3-6

                             Chapter 3 - The Simple Data Types

program remembering that it may be necessary to comment out
the MIN and MAX statements to get a successful compilation,
since they may not be available with your compiler.


HOW NEW IS YOUR COMPILER?
______________________________________________________________

Modula-2, as mentioned near the beginning of this chapter, is
a dynamic language that is changing as the base of experience
dictates weaknesses.  This is true of any good modern
programming language.  As originally defined, Modula-2 used
the cardinal type for most operations, assuming cardinal if
the type was not specifically stated and if the type could be
either integer or cardinal.  In his Fourth edition of
"Programming in Modula-2", Niklaus Wirth has changed this to
favor the integer in some situations.  The language will now
be more similar to a few other modern languages, many of which
do not have a cardinal representation.

This change makes this tutorial difficult to write, since all
compilers will not comply with this change for several years.
I will try to point out the places where the changes are
taking place, but I will not be able to find them all.  You
may be required to do a little searching in your compiler
documentation for some of the changes as they come up in the
example programs.



THE SIMPLE VARIABLE - REAL
______________________________________________________________

Examine the program named REALMATH.MOD for    ================
a demonstration of the use of the data          REALMATH.MOD
type REAL.  The definition part of this       ================
program is similar to the last with some
additions to the import list.  Your compiler may use different
names for some of the procedures here, so if you get a compile
error you will need to modify these.  We will study the import
(and export) list in detail later, so be patient.

Several real variables and one each of the integer and
cardinal types are defined for use in the program.  The real
type variable can contain numbers in a wide range and with
fractional parts included.  The exact range, and the accuracy
will vary widely depending on your implementation.  It will
be up to you to check your reference manual for the limits on
your computer and compiler.  A real type number is defined as
one with a decimal point, and in Modula-2, there must be at
least one digit prior to the decimal point, but none are
required following it.  The mathematics are the same as with
the other two except that the division symbol is the slash
(/).  There is no MOD for real type numbers because there is

                                                           3-7

                             Chapter 3 - The Simple Data Types

theoretically no remainder, since a fractional part is
computed as part of the calculation.

The four results are displayed on the monitor with 12 columns
allowed for each result and two extra blanks displayed between
each number.  Unfortunately, we have no control over how many
digits will be displayed following the decimal point.  This
would be nice for outputting data in a financial model where
we would like to have two digits following the decimal point.
When we get to the advanced part of this tutorial, we will
write our own procedure for outputting real values in such a
way that we can call it from any program just like we call
these output procedures.


CONVERSION BETWEEN DATA TYPES
______________________________________________________________

Beginning in line 33, we assign the integer and cardinal
variables some values and convert the values to type real by
using the procedure named FLOAT.  We then convert the variable
Sum to integer and cardinal by use of the procedure named
TRUNC.  The fractional part, if any, will simply be thrown
away.  These procedures will be very useful in many of your

programs.

Lines 40 and 41 once again use the MIN and MAX functions to
return the value of the largest positive real number and the
smallest positive real number for your implementation.  Once
again, your compiler may not support these two functions and
they may have to be commented out in order to compile.  Be
sure to compile and execute this program.


THE REAL MATHEMATICS LIBRARY
______________________________________________________________

Besides the standard arithmetic               ================
operations, Modula-2 provides a library of      REALTRIG.MOD
standard geometric and trigonometric          ================
functions in the library module MathLib0.
These must be imported in order to use them as illustrated in
the example program REALTRIG.MOD which you should examine at
this time.

The program itself should be self explanatory with the
exception of lines 24 and 25 which illustrate the real and
entier functions which convert data between the real and
integer types.  The word entier is French for integer.  Note
that if the real value will not fit into the integer range of
values, the result is undefined by the definition of Modula-
2, but your compiler documentation should define the result
in this case.

                                                           3-8

                             Chapter 3 - The Simple Data Types

THE SIMPLE VARIABLE - BOOLEAN
______________________________________________________________

Examine the file named BOOLMATH.MOD for an    ================
example of boolean variables and some           BOOLMATH.MOD
boolean operations.  A boolean variable       ================
can only have one of two possible values,
TRUE or FALSE.  The values TRUE and FALSE are standard
identifiers which are defined by the Modula-2 system and
available for your use.  These variables cannot be printed
directly but can be used to control other print statements to
print out a representation of their value.  We will see how
later.

We define 3 boolean variables and 3 integer variables and
assign values to the 3 integer variables in the program for
use in these illustrations.  In line 13 the boolean expression
"A = 22" is true, therefore the boolean variable named IsIt
is assigned the value TRUE.  The variable IsIt could be used
later in the program to make a decision, by a yet undefined
method, to do something or bypass it.  In like manner, the
next statement assigns IsIt the value FALSE because A is not
equal to 23.  The remainder of the allowed boolean expressions
are defined in the next few lines and are left for your
inspection and study.

Lines 20 and 21 illustrate forms of the "not equal" operator.
According to the latest definition of Modula-2, the <> is no
longer legal for use and must be changed to the # form.  You
may need to comment out line 21 to compile this program.

Beginning in line 25, composite boolean expressions are
illustrated.  As many boolean expressions as desired can be
combined with AND and OR operators.  If two or more boolean
expressions are combined with the AND, the result is true if
all expressions are true.  If two or more boolean expressions
are combined with the OR, the result is true if any of them
are true.  The NOT operator inverts the sense of what it
modifies, it turns a TRUE to FALSE and vice-versa.  Finally,
a couple of composite boolean expressions are given for
illustration of the amount of complexity that is allowed,
although there is no real limit as to how far you can go with
the complexity.  Good programming practice would dictate that
you keep it simple and understandable.

The ampersand (&) can be used in place of the AND operator,
and the tilde (~) can be used in place of the OR operator, but
the use of the words is considerably clearer.  Their use is
illustrated in lines 35 and 36.




                                                           3-9

                             Chapter 3 - The Simple Data Types

TWO RULES FOR BOOLEAN EVALUATION
______________________________________________________________

First it is important that you use the same type of variables
within a boolean expression.  Real type variables can be
compared to other reals and integers to integers, but reals
cannot be compared to integers.  Cardinal and char types can
also be compared to their own types, but none of the four can
be compared directly to each other.

Secondly, Modula-2 uses a short circuit evaluation technique
for boolean evaluation.  Evaluation proceeds from left to
right and if it finds a result which will positively determine
the outcome, evaluation stops.  For example, if it is
evaluating a string of 5 comparisons all combined with an AND,
and it finds that the second term is false, evaluation stops
there.  Since all terms must be true for the result to be
true, it makes no difference what values the last three are,
the result will be false because of the second term.

Be sure to compile and execute this program even though it has
no output.  You should verify for your own information that
this program will compile and execute correctly with your
system.


THE SIMPLE VARIABLE - CHAR
______________________________________________________________

Examine the program named CHARDEMO.MOD for    ================
an illustration of use of the last simple       CHARDEMO.MOD
variable type, CHAR.  Text data is stored     ================
in a computer in a format utilizing the
char data type.  Although there are exceptions, such as when
text is stored in some form of a packed mode, this is nearly
always true.  This tutorial was written with a word processor
that uses a char type for text storage, and few word
processors use any other method.

Although there are many different ways to store text, only two
are used to any level of significance, EBCDIC and ASCII.  This
merely refers to the way the characters of the alphabet and
all other characters are represented in the computer.  The
ASCII standard defines that the value of 65 will be the letter
A, 66 will be the letter B, etc.  If everyone uses the same
standard, transfer of data from one computer to another is
greatly simplified.

The program named CHARDEMO.MOD has the usual header, imports
the procedure named Write for use in displaying the char type
data, then defines 4 char type variables for use in the
program.  An integer type variable is also defined.  In the
program itself, we begin in lines 11 and 12 by assigning two
of the variables some char data.  Since a char variable is

                                                          3-10

                             Chapter 3 - THe Simple Data Types

capable of storing one letter, numeral, or special character,
each variable is assigned one letter.  The single or double
quotes are used as an indication to the compiler that you
intend for it to use the letter as a char type variable rather
than as another variable name.  Of course if you wanted to use
A as a variable name, you would have to define it in the
definition part of the module.


TWO SPECIAL CHAR PROCEDURES
______________________________________________________________

The next instruction gets the ordinal value of the letter A,
adds 2 to it, and assigns that value to the variable named
Index, which must be an integer (although it could have been
defined as a cardinal type variable).  Refer to the
documentation that came with your computer and you will find
an ASCII table that will define the letter A as 65.  Finally,
the char type variable Dog3 is assigned the character value
of Index.  Your ASCII table should define 67 as the letter C.
It is important to understand that the char variable Dog3
contains the character representation of the letter C, and the
integer variable Index contains the numerical value of the
ASCII representation of the letter C.  It would be perfectly
alright to use the variable Index for any desired numerical
calculations, but not to display the letter C.  On the other
hand, it would be alright to use the variable Dog3 to display
the letter C on the monitor but it could not be used for any
calculations.  The purpose therefore, of the two procedures
named ORD and CHR, is to translate from one type to the other.

The variable Cat4 is assigned the double quote by enclosing
it in the single quotes, and the characters are output in a
funny order to spell "CAT".  The variable Char1 is assigned
the value of S, and the word is completed resulting in the
full word "CATS" on the monitor after the program is compiled
and run.  If this were the only way to use the char type
variable, it would be very tedious and frustrating, but there
are other methods to use the char type that are far more
useful as you will see later in this tutorial.

Next, an additional means of assigning a char type variable
is given.  By assigning the char variable the value 65C, it
is the same as writing CHR(65), resulting in the  variable
having the internal value A.  A number less than 256 followed
by a C is defined by Modula-2 as a char type constant.

Finally, the variable Char1 is assigned the letter a and it
is converted to upper case A with the procedure named CAP.
This procedure will convert the argument to its upper case
equivalent if it is a lower case letter.  If its argument is
an upper case letter or any other character, it will do
nothing to it.  Be sure to compile and execute CHARDEMO.MOD
and observe the output.

                                                          3-11

                             Chapter 3 - The Simple Data Types

One final point should be made about the char type variable.
There are no arithmetic operations that can be done on a char
type variable.  To increment a char type variable for example,
it must be converted to a numerical type, incremented, then
converted back to char.  Note that the actual increment is
performed on the numerical type, not the char type.


USING THE TRANSFER PROCEDURES
______________________________________________________________

Examine the file named TRANSFER.MOD for       ================
several examples of transferring data           TRANSFER.MOD
between the various simple data types.        ================
The transfer functions given here may not
seem too important at this time, but some time spent here will
help to reduce the frustration later when you get seemingly
wrong errors that say you are using incompatible types in a
statement.  All of the program will not be discussed, only
those statements that use some of the more unusual
capabilities of Modula-2.

In line 13, the calculations are done in integer format, but
due to the assignment compatibility of integer and cardinal,
the result is converted to cardinal across the assignment
operator.  In lines 14 and 15, the integer type Int1 is
converted to cardinal and the mathematics are completed in the
cardinal type.  This is an example of type coercion, which
will be explained in a couple of paragraphs.  Line 16 is an
illustration of mixed mathematics using the transfer procedure
INTEGER.  Line 20 is the first example of nested transfer
procedures which must be done because FLOAT can only be used
with cardinal for an argument.  (Keep in mind that Modula-2
is changing such that integer is the preferred type, and some
of this may change.)

The expression in line 22 is an error because the procedure
named TRUNC results in a cardinal which cannot be added to an
integer type variable.  Either of the next two lines fix the
problem by making the addition type-compatible then making use
of the assignment compatibility between integer and cardinal
for line number 23.  The same error occurs in line 26 and is
fixed the same way in either of the next two lines.  Once
again, in line 31, the incompatible type error occurs and is
fixed in either of two ways in the next two lines.

Lines 35 and 36 illustrate converting char data to first
cardinal then real which requires nested transfer procedure
calls.  The last line of the program is a nest of procedures
which converts a character from char to cardinal, then to
real, back to cardinal, and finally back to the original char
variable.  It does nothing except act as a good illustration
to you of what can be done.

                                                          3-12

                             Chapter 3 - The Simple Data Types

TYPE COERCION OR TYPE CONVERSION
______________________________________________________________

All examples in this example program use type conversion
except for the INTEGER and CARDINAL conversions, which are
actually type coercions.  A type conversion is a call to a
function which actually modifies the bit pattern to conform
to the new type, whereas a type transformation, also called
a type coercion, simply copies the bit pattern from one type
to the other with no regard for the meaning of the bits.
Check your compiler documentation for a complete list of type
conversions.  The definition of Modula-2 requires that CHR,
FLOAT, ORD, TRUNC, and VAL be available.

A type transformation requires that the two types involved use
the same amount of storage.  This implies that you must have
some knowledge of the machine representation of the types.
The only type transformations you should make at this point
are between integer and cardinal types, since it would be
difficult for a compiler writer to use a different bit pattern
for each of these types.  More will be said about this later.
Until then, you should use type transformations cautiously,
if at all.

Conversion between types is very important.  You will use
these techniques often so it is important to know how they
work.  A very simple yet helpful memory aid is to remember
that any simple type can be converted to cardinal and cardinal
can be converted to any type.  Most other conversions require
two steps to get from one to the other.  Remember that the
latest update to Modula-2 is changing this.  Don't worry about
this change too much, since you may not even notice the change
as you program.  Compiler writers will try to keep updates
compatible with older versions and will inform you of any
changes.

Chapter 14 will readdress this topic with even more extensive
type transfer procedures.


PROGRAMMING EXERCISES
______________________________________________________________

1.   Write a program in which you define, using the char type
     variable, the letters "a" and "z", and the numbers "0"
     and "9".  Convert them to cardinal, and display the four
     characters and their ASCII (numerical) values.

2.   Write a program that you can easily modify to experiment
     with conversions between the various types that result
     in incorrect conversions to see the results on your
     compiler.  For example, convert a -1 as an integer to a
     cardinal.
                                                          3-13

```
{% endraw %}

## CHAP04.TXT

{% raw %}
```

                                                     Chapter 4

                                  LOOPS AND CONTROL STRUCTURES




WHAT IS STRUCTURED PROGRAMMING?
______________________________________________________________

There is a lot of talk these days about structured
programming, so we should know what it is.  Structured
programming is really another way of saying, "do it right."
Instead of using sloppy coding techniques, you should plan
carefully what you are doing, and instead of using the goto
statement profusely to produce "spaghetti code", you should
use only sequential (statements in succession), iterative
(looping), and decision (selective branching) statements.  It
has been proven that any logic can be reduced to these three
constructs, and that the goto is not required.  Modula-2
forces you to very carefully think out your logic prior to
beginning to code since it does not have a goto statement
available.  Depending on your programming background, this may
come as a bit of a shock to you, but you will find that as you
learn to use Modula-2, you will not miss the goto statement.

Many books are available on structured programming and you
would be advised to purchase one so you can study proper
programming techniques before you embark on a major
programming project.



REPEATING AND DECIDING
______________________________________________________________

Loops are some of the most important and most used constructs
in computer programming and in all parts of your life.  You
use loops all the time for many things.  Walking is a
repetition of putting one foot in front of the other until you
get where you are going.  Eating a sandwich involves a loop
of eating, chewing, swallowing, etc.  In this chapter we will
first cover all of the possible loops you can define in
Modula-2, then go on to the control structures, the decision
makers.

Examine the program LOOPDEMO.MOD.  This is    ================
a rather large program compared to the          LOOPDEMO.MOD
ones we have seen so far, but it is felt      ================
that it would be better to cover all of
the loops in one file than have you compile and run 4
different files.




                                                           4-1

                      Chapter 4 - Loops and Control Structures

THE REPEAT ... UNTIL LOOP
______________________________________________________________

Ignoring the declaration part of the listing and going
straight to the program itself, we come first to the repeat
loop which does just what it says it will do.  It will repeat
until it is told to stop.  The reserved word REPEAT in line
16 and the reserved word UNTIL in line 19 go together, and
everything between them will be executed until the condition
following the UNTIL becomes true.  The condition can be any
expression that will evaluate to a boolean answer, true or
false.  It can even be a composite expression with AND's,
OR's, and NOT's like we studied in the last chapter.  It can
be composed of any of the simple types discussed so far as
long as the terms are all compatible and it evaluates to a
boolean value.  In this case we have a very simple expression,
"Index = 5".  Since the variable named Index is initialized
to 0 and is incremented each time we go through the loop, it
will eventually reach a value of 5 and the loop will
terminate, after which time the expressions following it will
be executed.

We are not quite finished with the repeat loop yet, since we
will have more to say about it when we complete the while
loop.


THE WHILE LOOP
______________________________________________________________

The while loop is very much like the repeat loop except that
the condition is tested at the beginning of the loop and when
the condition becomes false, the loop is terminated.  Once
again, the condition can be as complex as desired but in this
case it is the very simple "Index < 5" following the reserved
word WHILE, in line 24, which will control the loop
termination.  When Index reaches 5, the loop is terminated and
the statements following the loop are executed.

The biggest difference between the repeat and the while loops
is concerned with when the test is made.  In the while loop,
the test is made at the beginning, so it is possible that the

statements inside the loop will not be executed even once.
In the repeat loop, the test is made at the end of the loop,
so the statements in the loop will always be executed at least
once.  It is also good to keep in mind that the repeat stops
when its condition goes true, and the while stops when its
condition goes false.

There is another loop that we can use in which we exit from
the center using any test we can devise.  It will be covered
after we complete the FOR loop.


                                                           4-2

                      Chapter 4 - Loops and Control Structures

THE FOR LOOP
______________________________________________________________

The for loop exists in one form or another in nearly every
programming language and you will use it repeatedly because
it is so useful.  It uses the reserved words FOR, TO, BY, DO,
and END.  It uses any simple variable type except real, and
counts loops depending on what counts you put in for beginning
and ending points.  The first example on line 31 says for the
computer to start Index at 1 and count to 5, going through the
loop once for each value of Index.  The count advances by 1
each time because nothing else is specified and 1 is the
default.  The end of the loop is specified by the reserved
word END in line 33 in this case, and as many statements as
desired can be within the body of the loop.

The next loop starts in line 37 and this time counts  from 5
to 25 but incrementing by 4 each time because of the "BY 4"
part of the line.  The loop will continue until the second
limit is either reached or is going to be exceeded, at which
time the loop will stop.  The beginning and ending limits can
themselves be some kind of a calculated value or a constant,
the only provision being that they must be of the same type
as the loop indexing variable.  In fact they can be negative
and the increment value can be negative.  This is illustrated
in the next loop that starts in line 48 where we count by -7
until we go from 5 to -35.  No further explanation should be
required for this loop.

The next loop, starting in line 54, uses calculated limits to
determine its starting and ending points and it uses the
constant named Where for its incrementing value.  The value
of the constant Where is established in the definition part
of this program as a constant.  It is simply used here and
will be explained in a future lesson when we get to it.  Where
is a constant with a value of 11, and the incrementing value,
used in any for loop must always be a constant, but not
necessarily a predefined constant as is used here.  It can be
an implicit constant as illustrated in line 48.


A CHARACTER TYPE LOOP CONTROL INDEX
______________________________________________________________

The next two for loops use a char type variable and simply
count from A to Z, or backwards in the case of the second one.
The observant student will note that we are incrementing or
decrementing a char type variable each time we go through the
loop.  Even though this is not permitted in assignment
statements, it is permitted in this case.

Several things should be pointed out about the for loop for
you.  The three values must agree in type, that is the index,
the starting point, and the ending point.  The index must not

                                                           4-3

                      Chapter 4 - Loops and Control Structures

be changed by any logic within the loop or the results will
be unpredictable.

The value of the index must be assumed to be undefined after
the loop terminates.  You may discover that it is predictable
on your compiler, but it may not be on some other compiler,
and you may want to transfer your program to another system
someday, so if you find that the value is predictable, you
should not make use of that knowledge.


SUMMARY OF FOR LOOP RULES
______________________________________________________________

Since the for loop is so important, a practical list of usage
rules are given as follows;

1.   You cannot alter the value of the index variable within
     the loop.

2.   The bounds and increment expressions should not depend
     on anything within the body of the loop.

3.   The value of the index variable is undefined following
     loop termination.

4.   The loop index cannot be;
       a.  An imported variable
       b.  A member of a record, array, or set
       c.  A real variable
       d.  A procedure formal parameter

The compiler will detect most of these violations and report
an error, but all compilers will not detect all of these
errors.  You will understand all parts of rule 4 after you
complete this entire tutorial.


THE INFINITE LOOP
______________________________________________________________

The fourth and final loop is an infinite loop as illustrated
in lines 77 through 87.  It uses the reserved words LOOP and
END, and it never terminates by itself.  It is up to you the
programmer to see to it that some means of terminating it is
available, the most usual is through use of the exit
statement.  Anyplace in the loop you can set up some
conditions for exiting based on whatever you desire.
Executing the exit procedure will cause the program control
to leave the loop and begin executing the statements following
the loop.

Now you have been exposed to the four loops available in
Modula-2, the repeat, while, for, and loop.  Spend some time

                                                           4-4

                      Chapter 4 - Loops and Control Structures

studying this program, then compile and run it to see if it
does what you expect it to do.  Loops are very important.  You
will do the vast majority of your logical control in loops and
if statements, so it would pay you to thoroughly understand
both the loop and the if statement.


WHAT IS AN IF STATEMENT?
______________________________________________________________

Examine the program IFDEMO.MOD for an         ================
example of some IF statements in use.            IFDEMO.MOD
Ignoring the header, we notice that the       ================
program is composed of one big loop
starting in line 10 and continuing to line 32.  This loop is
included in order to have a changing variable to illustrate
the use of the if statement.  Within the loop are 3 if
statements.  The if statement is the most widely used
conditional statement in Modula-2.

The first if statement is given in lines 11 through 15
starting with the reserved word IF.  It simply says "if the
value of Index1 is less than 4, then" do everything from the
reserved word THEN to the reserved word END which is
associated with it.  If the value of Index1 is not less than
4, then all of these statements are ignored and the next
statement to be executed will be line 17 since it is the one
following the reserved word END.  In a nutshell, that is all
there is to the simple if statement.  Once again, the
condition in line 11 can be any expression that will evaluate
to a boolean result, and it can be composed of any of the
simple types of data elements.


THE ELSE CLAUSE
______________________________________________________________

The second if statement, beginning in line 17 has an added
feature, the else clause.  If the boolean expression does not
evaluate to true, then instead of the expressions following
the reserved word THEN being executed, the group following the
reserved word ELSE will be executed.  Thus, if the condition
is true, everything from the THEN to the ELSE is executed, but
if it is false, everything from the ELSE to the END is
executed.  The end statement is therefore the terminator for
the effect of the if statement.


WHAT CAN GO IN THE IF STATEMENTS?
______________________________________________________________

You may be wondering what is allowed to go into the group of
executable statements between the then and the else or between
the else and the end.  The answer is, anything you want to put

                                                           4-5

                      Chapter 4 - Loops and Control Structures

there.  You can put other if statements, loops, input or
output statements, calculations, just about anything.  If you
indent the statements properly, you will even be able to read
and understand what you put in there and why you put it there.
Of course, if you put a loop in there, for example, you can
put other constructs within the loop including other if
statements, etc.  Thus you can go as far as you desire in
building up a program.

THE ELSIF CLAUSE
______________________________________________________________


The third and last kind of if statement is given in the third
example starting on line 24 and continuing to line 30.  In
this case, if the expression within the if statement is found
to be false, the statements following the then are skipped and
the next construct is found, the reserved word ELSIF.  If
program control comes here, it has a further expression to
evaluate, which if true, will cause the statements immediately
following its then to be executed.  If this expression is
found to be false, the statements following the else will be
executed.  The net result is that, one and only one of the 3
groups of instructions will be executed each time through the
loop.  It is permissible to add as many elsif cases as desired
to this construct, leading to a many way branch.  In addition,
the else is entirely optional regardless of whether or not the
elsif's are used.  After studying this program, compile and
execute it and examine the result.


LOOPs IN IFs IN LOOPs
______________________________________________________________

Load and display the next example program     ================
LOOPIF.MOD for an example of some of the         LOOPIF.MOD
latest topics being combined.  This           ================
program makes nonsense data but is
valuable because it is small enough to understand quickly to
see how loops and ifs can be nested together.  The entire
program is a for loop containing an if statement.  Each part
of the if statement has a loop nested within it.  There is no
reason why this process could not be continued if there were
a need to.  Study this program, then compile and execute it.


FINALLY, A MEANINGFUL PROGRAM
______________________________________________________________

Load and display the program named            ================
TEMPCONV.MOD for your first look at a           TEMPCONV.MOD
program that really does do something         ================
useful.  This is a program that generates
a list of temperatures in centigrade, converts the list to

                                                           4-6

                      Chapter 4 - Loops and Control Structures

fahrenheit, and displays the list along with a note in the
table at the freezing point and boiling point of water.  You
should have no difficulty understanding this program, so the
fine points will be left up to you.

A few comments on good formatting is in order at this point.
Notice the temperature conversion program and how well it is
formatted.  It is simple to follow the flow of control, and
the program itself needs no comments because of the judicious
choice of variable names.  The block header at the top of the
page is a good example of how you should get used to defining
your programs.  A simple block header of that variety goes a
long way toward making a program maintainable and useful
later.  Take notice also of the way the variables are each
defined in a comment.  A program as simple as this probably
doesn't need this much attention, but it would be good for you
to get into practice early.  It would be good for you to think
of each of your programs as a work of art and strive to make
them look good.

After spending some time studying this        ================
program, compile and execute it.  Load and      DUMBCONV.MOD
study the next program named DUMBCONV.MOD     ================
to see if you can figure out what it does.
If you are really sharp, you will very quickly see that it is
the same program as the last one but without all of the extra
effort to put it into a neat, easy to follow format.  Compile
and execute this program and you will see that they both do
the same thing.  They are identical as far as the computer is
concerned.  But there is a world of difference in the way they
can be understood by a human being.


THE CASE STATEMENT
______________________________________________________________

Examine the program named CASEDEMO.MOD for    ================
an example of the last decision making          CASEDEMO.MOD
construct in Modula-2, the case statement.    ================
A case statement is a "many-way" branch
based on some simple variable.  In this program we have a loop
which sets the variable named Dummy to the values from 1 to
25 successively.  Each time it comes to the case statement
which begins with the reserved word CASE, one of the branches
is taken.  The first branch is taken if the value is from 1
to 5, the second branch is taken if the value is from 6 to 9,
the third is taken if it is either a 10 or 11, etc.  Finally,
if the value is not found in any of the branches, the ELSE
path is taken as would be the case of a 12, a 13, or a few
others.  The important point is that one and only one of the
many paths are taken each time the case construct is entered.
The case variable can be any of the simple types except for
the real type.  For each path, as many statements can be
executed as desired before the "|" is put in to end that path.

                                                           4-7

                      Chapter 4 - Loops and Control Structures

The case statement is a powerful statement when you need it
but you will not use it nearly as often as you will use the
if statement and the various loops.

As with all of the Modula-2 constructs, a few extra rules must
be given for completeness.  The case variable can only be of
a simple type, but not of a real type.  Of course the case
selectors must be of the same type as the case variable and
they cannot be a conditional expression, only a single value,
a range, or a grouping of values as illustrated in the example
program.

The example program named BIGCASE.MOD          ===============
gives an additional example of a case            BIGCASE.MOD
statement.  The primary difference in this     ===============
case demonstration program and the last is
the addition of several conditional and looping statements
within the branches of the case statement.  Little or no
comment is needed, so when you understand what it will do,
compile and execute it.


ONE FINAL CONTROL STRUCTURE
______________________________________________________________

At any point in the main program, you can put the reserved
word RETURN, which will cause a return to the operating system
when executed, effectively terminating the program.  This
would probably be used as the executable statement in an if
statement, but could be included in any control construct.
This usage of the return statement is not illustrated in an
example program in this tutorial.


ONE MISSING CONTROL CONSTRUCT
______________________________________________________________

As mentioned earlier, there is no goto statement available in
the Modula-2 programming language.  After you gain experience
in using a structured language, you will not miss this
construct.



PROGRAMMING EXERCISES
______________________________________________________________

1.   Write a program that will put your name on the monitor
     10 times using a loop.

2.   Write a program that lists the numbers from 1 to 12 on
     the monitor and prints a special message beside the
     number that represents the month of your birthday.

                                                           4-8

                      Chapter 4 - Loops and Control Structures

3.   Write a program that calculates and lists the numbers
     from 1 to 8 along with the factorial of each.  This will
     require use of a loop within a loop.  A factorial is the
     number obtained by multiplying each number less than and
     up to the number in question.  For example, factorial 4
     = 1 * 2 * 3 * 4.  Use a cardinal type variable for the
     result, then change it to an integer to see the
     difference in output due to the range of the two
     different variable types.  This is a good illustration
     of the fact that careful choice of variable type is
     sometimes very important.










































                                                           4-9

```
{% endraw %}

## CHAP05.TXT

{% raw %}
```

                                                     Chapter 5

                                           MODULA-2 PROCEDURES



AN OVERALL PROGRAM OUTLINE
______________________________________________________________

In order to completely define the procedure, we will need to
lay some groundwork in the form of a few definitions.

Program Heading - This is the easiest part since it is only
     one line, at least it has been in all of our programs up
     to this point.  It is simply the MODULE line, and it
     doesn't need to be any more involved than it has been up
     to this point except for one small addition which we will
     cover in a later chapter.

Declaration Part - This is the part of the Modula-2 source
     code in which all constants, variables, and other user
     defined auxiliary operations are defined.  In some of the
     programs we have examined, there have been one or more
     var declarations and in one case a constant was declared.
     These are the only components of the declaration part we
     have used up to this time.  There are actually four
     components in the declaration part, and the procedures
     make up the fourth part.  We will cover the others in the
     next chapter.

Statement Part - This is the last part of any Modula-2
     program, and it is what we have been calling the main
     program.  It always exists bounded by the reserved words
     BEGIN and END just as it has in all of our examples to
     this point.

It is very important that you grasp the above definitions
because we will be referring to them constantly during this
chapter, and throughout the remainder of this tutorial.  With
that introduction, let us look at our first Modula-2 program
with a procedure in it.  It will, in fact, have three
procedures.



WHAT IS A PROCEDURE?
______________________________________________________________

A Procedure is a group of statements, either predefined by the
compiler writer, or defined by you, that can be called upon
to do a specific job.  In this chapter we will see how to
write and use a procedure.  During your future programming
efforts, you will use many procedures.  In fact, you have
already used some because the WriteString, WriteLn, etc.
procedures you have been using are predefined procedures.

                                                           5-1

                                        Chapter 5 - Procedures

Examine the program named PROCED1.MOD for      ===============
your first look at a user defined                PROCED1.MOD
procedure.  In this program, we have the       ===============
usual header with one variable defined.
Ignore the header and move down to the main program beginning
with line 26.  We will come back to all of the statements
prior to the main program in a few minutes.

The main program is very easy to understand based on all of
your past experience with Modula-2.  First we somehow write
a header (WriteHeader), then write a message out 8 times
(WriteMessage), and finally we write an ending out
(WriteEnding).  Notice that with the long names for the
procedure names, no comments are needed because the program
is self documenting.  The only problem we have is, how does
the computer actually do the three steps we have asked for.
That is the purpose for the 3 procedures defined earlier
starting in lines 8, 14, and 20.  Modula-2 requires that
nothing can be used until it has been defined, so the
procedures are required to be defined prior to the main
program.  This may seem a bit backward to you if you are
experienced in some other languages like FORTRAN, BASIC, or
C, but it will make sense as you gain experience.


HOW DO WE DEFINE A PROCEDURE?
______________________________________________________________

We will begin with the procedure at line 8.  We must start
with the reserved word PROCEDURE followed by the name we have
chosen for our procedure, in this case WriteHeader which is
required to follow all of the rules for naming an identifier.
The procedure line must be terminated with a semi-colon.
Following the procedure line, we can include more import
lists, define variables, or any of several other things.  We
will go into a complete definition of this part of the program
in the next chapter, just keep in mind that other quantities
can be inserted here.  We finally come to the procedure body
which contains the actual instructions we wish to execute in
the procedure.  In this case, the procedure body is very
simple, containing only a WriteString and a WriteLn
instruction, but it could have been as complex as we needed
to make it.

At the end of the procedure, we once again use the reserved
word END followed by the same name as we defined for the
procedure name.  In the case of a procedure, the final name
is followed by a semicolon instead of a period.  Other than
this small change, a procedure definition is identical to that
of the program itself.

When the main program comes to the WriteHeader statement in
line 27, it knows that it is not part of its standard list of
executable instructions, so it looks for the user defined

                                                           5-2

                                        Chapter 5 - Procedures

procedure by that name.  When it finds it, it transfers
control of the program sequence to there, and begins executing
those instructions.  When it executes all of the instructions
in the procedure, it finds the end statement of the procedure
and returns to the next statement in the main program.  When
the main program finally runs out of things to do, it arrives
at its own end statement and terminates.

As the program executes the for loop, it is required to call
the WriteMessage procedure 8 times, each time writing its
message on the monitor, and finally the main program finds and
executes the WriteEnding procedure.  This should be very
straightforward and should pose no real problem for you to
understand.  When you think you understand what it should do,
compile and run it.


NOW FOR A PROCEDURE THAT USES SOME DATA
______________________________________________________________

The last program was interesting to show       ===============
you how a procedure works but if you would       PROCED2.MOD
like to see how to get some data from the      ===============
calling program to the procedure, the
program named PROCED2.MOD will illustrate this.  We will once
again go straight to the program starting in line number 25.
We immediately notice that the program is nothing more than
one big for loop which we go through 3 times.  Each time
through the loop we call several procedures, some that are
system defined, and some that are user defined.  This time
instead of the simple procedure name, we have a variable in
the parentheses behind the variable name.  In these
procedures, we will take some data with us to the procedures,
when we call them, just like we have been  doing  with the
WriteString and WriteInt procedures.

When we execute the statement in line 28, because of the
variable named Thing defined in the parentheses, we will take
some data to the procedure named PrintDataOut where it will
be printed.  The procedure PrintDataOut starting in line 9
also contains a pair of parentheses with a variable named
Puppy which is of type integer.  This says that it is
expecting a variable to be passed to it from the calling
program and it expects the variable to be of type integer.
Back in the main program, we see on line 28, that the program
did make the call to the procedure with a variable named Thing
which is an integer type variable, so everything is fine.
The procedure prefers to call the variable passed to it Puppy
but that is perfectly acceptable, it is the same variable.
The procedure writes the value of Puppy, which is really the
variable Thing in the main program, in a line with an
identifying string, then changes the value of Puppy before
returning to the main program.

                                                           5-3

                                        Chapter 5 - Procedures

SOME NEW TERMINOLOGY
______________________________________________________________

The parameter in the calling program is referred to as the
actual parameter, and the parameter in the procedure is called
the formal parameter.  In this procedure then, the actual
parameter is named Thing, and Puppy is the formal parameter.
Note that this terminology is not unique to Modula-2, but is
used to define terms in many modern programming languages.

Upon returning to the main program, we print out another line
with three separate parts (notice the indenting and the way
it makes the program more readable), then calls the next
procedure PrintAndModify which appears to do the same thing
as the last one.  Indeed, studying the procedure itself leads
you to believe they are the same, except for the fact that
this one prefers to use the name Cat for the formal parameter
name.  There is one subtle difference in this procedure, the
reserved word VAR in the header, line 17.


VALUE AND VARIABLE PARAMETERS
______________________________________________________________

In the first procedure, the reserved word VAR was omitted.
This is a signal to the compiler that this procedure will not
receive a reference to the actual parameter variable.
Instead, it will receive a local copy of the variable which
it can use in whatever way it needs to.  When it is finished,
however, it can not return any changes in the variable to the
main program because it can only work with its copy of the
variable.  This is therefore a one-way parameter, since it can
only pass data to the procedure.  This is sometimes called a
"call by value" or a "value parameter" in literature about
Modula-2 and a few other modern programming languages.

In the second procedure, the reserved word VAR was included.
This signals the compiler that the actual variable in this
procedure is meant to be passed to the procedure, and not just
the value of the variable.  The procedure can use this
variable in any way it desires, and since it has access to the
variable in the main program, it can alter it if it so
desires.  This is therefore a two-way parameter, since it can
pass data from the main program to the procedure and back
again.  This is sometimes called a "call by reference" or a
"variable parameter" in software literature.



WHICH SHOULD BE USED?
______________________________________________________________

It is up to you to decide which of the two parameter passing
schemes you should use for each application.  The "two-way"

                                                           5-4

                                        Chapter 5 - Procedures

scheme, the variable parameter, seems to give the greatest
flexibility, so your first thought is to simply use it
everywhere.  But that is not a good idea because it gives
every procedure the ability to corrupt your main program
variables.  In addition, if you use a value parameter in the
procedure definition, you have the ability to call the
procedure with a constant in that part of the call.  A good
example is given in lines 12, 20, 30, 34, and 38 of the
present program.  If WriteInt were defined with a variable
parameter, we could not use a constant here, but instead would
have to set up a variable, assign it the desired value, then
use the variable name instead of the 5.  In addition, when a
value parameter is used, an expression can be used for the
actual parameter such as "Thing + 12".  This cannot be done
with a variable parameter because it is not possible to return
a value to an expression.

There is one other reason to use a variable parameter.  When
a value parameter is used, a copy of the parameter is made and
the copy is passed to the procedure.  If it happens to be a
very large variable, such as a record or an array, (neither
of which we have studied yet), it could be very inefficient
to generate and pass a copy of the entire variable.  You may
choose to make it a variable parameter so that the procedure
can refer back to the original data rather than work with a
local copy.  You must take care that the procedure does not
accidentally corrupt the original data.

Finally, if a value parameter is used, the actual parameter
and the formal parameter only need to be assignment
compatible, so a single procedure could be used for either
integer or cardinal type data.



BACK TO THE PROGRAM ON DISPLAY, PROCED2
______________________________________________________________

We have already mentioned that both of the procedures modify
their respective local variables, but due to the difference
in "call by value" in the first, and "call by reference" in
the second, only the second can actually get the modified data
back to the calling program.  This is why they are named the
way they are.  One other thing should be mentioned.  Since it
is not good practice to modify the variable used to control
the for loop, (and downright erroneous in many cases) we make
a copy of it and call it Thing for use in the calls to the
procedures.  Based on all we have said above, you should be
able to figure out what the program will do, then compile and
run it.




                                                           5-5

                                        Chapter 5 - Procedures

SEVERAL PARAMETERS PASSED AT ONCE
______________________________________________________________

Examine the program named PROCED3.MOD for      ===============
an example of a procedure definition with        PROCED3.MOD
more than one variable being passed to it.     ===============
In this case four parameters are passed to
the procedure.  Three of the parameters are one-way and one
is a two-way parameter.  In this case we simply add the three
numbers and return the result to the main program.  Good
programming practice would dictate the placement of the single
"call by reference" by itself and the others grouped together,
but it is more important to demonstrate to you that they can
be in any order you desire.  This is a very straightforward
example that should pose no problem to you.  Compile and run
it.



SCOPE OF VARIABLES
______________________________________________________________

The program named PROCED4.MOD is an            ===============
illustration of scope of variables, or           PROCED4.MOD
where variables can be used in a program.      ===============
The three variables defined in lines 6, 7,
and 8, are of course available in the main program because
they are defined prior to it.  The two variables defined in
the procedure are available within the procedure because that
is where they are defined.  However, because a variable named
Count is defined both places, they are two completely separate
variables.  The main program can never use the variable Count
defined in the procedure, and the procedure can never use the
variable Count defined in the main program.  They are two
completely separate and unique variables with no ties between
them.  This is useful because when your programs grow, you can
define a variable in a procedure, use it in whatever way you
wish, and not have to worry that you are corrupting some other
global variable.  The variables in the main program are called
global variables because they are available everywhere.

In addition to the above scope rules, the variable named Apple
in the procedure is not available to the main program.  Since
it is defined in the procedure, it can only be used in the
procedure.  The procedure effectively builds a wall around the
variable Apple and its own Count so that neither is available
outside of the procedure.  We will see in the next chapter
that procedures can be nested leading to further hiding of
variables.  This program is intended to illustrate the scope
of variables, and it would be good for you to study it, then
compile and run it.



                                                           5-6

                                        Chapter 5 - Procedures

A PROCEDURE CAN CALL ANOTHER PROCEDURE
______________________________________________________________

The program named PROCED5.MOD illustrates      ===============
procedures that call other procedures.           PROCED5.MOD
Study of this program will reveal that         ===============
procedure Three starting on line 19 calls
procedure Two which in turn calls procedure One.  The main
program calls all three, one at a time, and the result is a
succession of calls which should be rather easy for you to
follow.  The general rule is, "any program or procedure can
call any other procedure that has been previously defined, and
is visible to it."  (We will say more about visibility later.)
Study this program then compile and run it.



A FUNCTION PROCEDURE
______________________________________________________________

Examine the program named FUNCTION.MOD for    ================
an example of a function procedure.  This       FUNCTION.MOD
contains a procedure very much like the       ================
ones we have seen so far with one
difference.  In the procedure heading, line 6, there is an
added ":  INTEGER" at the end of the parameter list.  This is
a signal to the system that this procedure is a function
procedure and it therefore returns a value to the calling
program in a way other than that provided for by parameter
references as we have used before.  In fact, this program
returns a single data value that will be of type integer.

In line 16 of the calling program, we find the call to the
procedure which looks like the others we have used except that
it is used in an assignment statement as though it is an
integer type variable.  This is exactly what it is and when
the call is completed, the QuadOfSum(Dogs,Cats) will be
replaced by the answer and then assigned to the variable Feet.
The entire call can therefore be used anyplace in a program
where it is legal to use an integer type variable.  This is
therefore a single value return and can be very useful in the
right situation.  A function procedure can only return a
simple unstructured type.  These types are, INTEGER, CARDINAL,
REAL, BOOLEAN, subrange, or enumeration.

A relatively recent addition to Modula-2 allows a function
procedure to return any structured type, not only simple
types.  This means that records or arrays can be returned.
This may not be available with your compiler since it is so
new.

One additional point must be made here.  If a function
procedure does not require any parameters, the call to it must
include empty parentheses, and the definition of the procedure

                                                           5-7

                                        Chapter 5 - Procedures

must include empty parentheses also.  This is by definition
of the Modula-2 language.

In the procedure, we had to do one thing slightly different
in order to get the return value and that was to use the
RETURN reserved word.  Whenever we have completed the desired
calculations or whatever we need to do, we put the result that
is to be returned to the main program in the parentheses
following the return and the procedure will terminate, return
to the calling program, and take the value with it as the
answer.  Due to decision making, we may have several return
statements in the procedure but only one will be exercised
with each call.  It is an error to come to the end statement
of a function procedure since that would constitute a return
without the benefit of the return statement, and no value
would be returned to the calling program.


WHAT IS RECURSION?
______________________________________________________________

Recursion is simply a procedure calling       ================
itself.  If you have never been introduced      RECURSON.MOD
to recursion before, that definition          ================
sounds too simple but that is exactly what
it is.  You have probably seen a picture containing a picture
of itself.  The picture in the picture also contains a picture
of itself, the end result being an infinity of pictures.
Examine the file named RECURSON.MOD for an example of a
program with recursion.

In the main program, Count is set to 7 and the procedure is
called taking along Count as a parameter.  In the procedure,
we display a line containing the value of the variable, now
called Index, and decrement it.  If the variable is greater
than zero, we call the same procedure again, this time
entering it with the value of 6.  It would be reasonably
correct to think of the system as creating another copy of
the procedure for this call.  The variable Index would be
reduced to 5, and another copy of the procedure would be
called.  Finally, the variable would be reduced to zero and
the return path from procedure to procedure would be taken
until the main program would be reached, where the program
would terminate.

Rather than making a complete new copy of the procedure for
each recursive call, the same code would be run each time
through and all of the data would be stored away on the
program stack each time through.  You have no need to worry
about this because it is all taken care of for you by the
system.  You simply call the same procedure as though it were
any other procedure and the system will worry about all of the
details except for one.  It is up to you to see that there is
some mechanism by which the process will terminate.  If there

                                                           5-8

                                        Chapter 5 - Procedures

were no decrementing statement in the procedure, this program
would never reach an end and the stack would overflow,
resulting in an error message and termination of the program.
It would be worth your time to remove the decrementing
statement and observe this, after you compile and run it the
way it is now.

Recursion can be very useful for those problems that warrant
its use.  This example is a very stupid use of recursion, but
is an excellent method for giving an example of a program with
recursion that is simple and easy to understand.  Further
examples of recursion will be given later in this tutorial.


DIRECT AND INDIRECT RECURSION
______________________________________________________________

This example uses direct recursion because the procedure calls
itself directly.  It is also possible to use indirect
recursion where procedure A calls B, B calls A, etc.  Either
method is available and useful depending on the particular
circumstances.

WHAT IS AN AUTOMATIC VARIABLE?
______________________________________________________________

They are not actually called automatic variables.  The term
is borrowed from the C programming language, but they act the
same.  When a procedure is called, its local variables do not
exist.  They are generated, stored on a stack, used during the
lifetime of the procedure, and disposed of when control is
given back to the calling program.  The formal parameters are
also handled in the same way.  The variables named Count and
Apple in lines 11 and 12 of PROCED4.MOD are automatic, and so
is Index in RECURSON.MOD.  The way these variables are handled
is the reason recursion works.  More will be said about this
in chapter 13 of this tutorial.

PROGRAMMING EXERCISES
______________________________________________________________

1.   Write a program to write your name, address, and phone
     number on the monitor with each line in a different
     procedure.

2.   Add a statement to the procedure in RECURSON.MOD to
     display the value of Index after the call to itself so
     you can see the value increasing as the recurring calls
     are returned to the next higher level.

3.   Rewrite TEMPCONV.MOD from chapter 4 putting the
     centigrade to fahrenheit formula in a function procedure.

                                                           5-9

```
{% endraw %}

## CHAP06.TXT

{% raw %}
```

                                                     Chapter 6

                                    ARRAYS, TYPES, & CONSTANTS



BEGINNING WITH ARRAYS
______________________________________________________________

Examine the program named ARRAYS.MOD and      ================
we will go right to our first example of         ARRAYS.MOD
an array.  An array is a list made up of      ================
two or more of the same type of element.
This construct is usually called a vector by a mathematician,
and it is sometimes called a table.  Notice the var definition
in the sample program and specifically the variable named
Automobiles.  The reserved word ARRAY followed by the square
brackets with a range of numbers contained within them is the
proper way to define an array of, in this case, cardinal type
variables because of the reserved words OF CARDINAL at the end
of the statement.  This defines 12 different cardinal type
variables, each of which is capable of storing one cardinal
number.  The names of the twelve variables are given by
Automobiles[1], Automobiles[2], ... Automobiles[12].  The
variable name is Automobiles and the array subscripts are the
numbers 1 through 12.  The variables are true cardinal type
variables and can be assigned values, or they can be used in
calculations or in nearly anyplace in a program where it is
legal to use a cardinal type variable.  One place they cannot
be used is as the index for a for loop since a simple variable
type is required there.


WHAT GOOD ARE ARRAYS?
______________________________________________________________

Notice lines 10 through 12 of the program.  In these lines,
each of the 12 variables is assigned a value.  When Index is
1, then Automobiles[1] is assigned 11, then when Index is 2,
Automobiles[2] is assigned 12, etc.

If the 12 variables were defined as 12 separate variables of
whatever names we chose for them, we could not assign them
values in a loop but would have to assign each one
independently.  In this instance, we are generating nonsense
data but in a real program, this loop could be reading in a
series of data from a file such as would be done with a
database.  The advantage of the array should be very clear,
especially if we were to change the array limits to several
thousand elements.

The statement in line 13 assigns a value to one of the
elements at random to illustrate the method.  In this
particular case, the 7th element of the array named
Automobiles is assigned the value of 54.  The address of this
data is therefore the variable name Automobiles[7] and the

                                                           6-1

                      Chapter 6 - Arrays, Types, and Constants

data stored in that address is 54 following execution of line
13.  We have therefore assigned values to the 12 variables by
a nonsensical but known scheme, and now we can use the 12
variables in any way that is legal within Modula-2.

The loop in lines 18 through 24 causes the 12 values to be
displayed on the monitor in a neat orderly fashion.  In line
20 we display the index of the variable in question, and in
line 22, we display the actual variable.  Keep in mind that
the array subscript could have been of type integer and still
be used to display an array of type cardinal provided we
defined Index as an integer type variable and always used it
as such.  Spend enough time with this program so that you
thoroughly understand it, then compile and run it.


WHAT ABOUT AN ILLEGAL SUBSCRIPT?
______________________________________________________________

Modula-2 does strong type checking and limit checking.  If,
in the above program, you tried to assign a value to
Automobiles[13], which doesn't exist, a run time error would
be generated and the program execution would be aborted after
giving you an error indication on the monitor.  This is one
of the advantages of Modula-2 over some of the older
programming languages.  Some compilers give you the ability
to enable or disable this feature.


MULTIPLY DIMENSIONED ARRAYS
______________________________________________________________

Examine the file named ARRAYS2.MOD for an      ===============
example of a program with two-dimensional        ARRAYS2.MOD
arrays.  In this program, the var section      ===============
contains the variable named Checkerboard
which is defined as an 8 element array in which each element
is an 8 element array, therefore being an 8 by 8 square array.
Each element is capable of storing one cardinal type variable.
The variable named Value is defined the same way except that
the method of definition is slightly different.  The two
methods result in the same type and number of variables.

In lines 11 through 16 we have two nested for loops.  The
outer loop causes Index to count from 1 to 8 and for each
value of Index, the variable Count counts through the values
1 to 8 also.  The net result is that we evaluate the
assignments in lines 13 and 14 once for each possible
combination of Index and Count.  For each combination, we
assign some nonsense data to one element of the array variable
named Checkerboard then use the result of that calculation to
assign some nonsense data to the variable named Value.  The
purpose here is to illustrate the method of using the double
subscripted variables.  Next, we display the entire matrix of

                                                           6-2

                      Chapter 6 - Arrays, Types, and Constants

Checkerboard in lines 18 through 25.  The loops cause 8 values
to be displayed on one line so that the entire matrix is
displayed on only 8 lines.  You should study this logic
because you will find output sequences like this to be very
valuable.


CHANGING A FEW OF THE VALUES
______________________________________________________________

In line 27 and following, we change a few of the values at
random for illustrative purposes.  Since Value[3,6] is
assigned the value of 3, it can be used as one of the
subscripts of the next line and in fact it is.  This would be
a rather sloppy programming style but it is a good
illustration of what can be done.  Finally using the same
technique as that for Checkerboard, the array variable named
Value is displayed.


HOW MANY SUBSCRIPTS CAN BE USED?
______________________________________________________________

There is no limit as to how many subscripts can be used in
Modula-2 by definition, but there is a practical limit of
somewhere in the range of 3 or 4.  If you use too many, you
will very quickly get confused and lose control of what the
program is supposed to be doing.  I have never seen more than
3 subscripts used in any programming language, and very few
instances of more than two.  Let the problem definition be
your guide.

This program was pretty straightforward, and if you understand
it, it is time for you to compile and execute it.


THE TYPE DECLARATION
______________________________________________________________

Examine the program named TYPES.MOD for a      ===============
new topic that you will use often,                TYPES.MOD
especially in large programs.  Beginning       ===============
in line 4, we have a group of type
declarations which starts with the reserved word TYPE.  The
first line defines ArrayDef as a new type that can be used in
the same way you would use INTEGER or any of the other simple
type definitions.  In line 12, the variable named Stuff is
defined as a variable of type ArrayDef, and since ArrayDef is
a type defining a 14 element array of integer, then Stuff is
a 14 element array of integer type variables.  It seems like
we didn't save anything and in fact we added a few keystrokes
to the program in order to do this but there is good reason
to define and use a new type.  If you look at line 13 you will
see that we have also defined Stuff2 as the same type of

                                                           6-3

                      Chapter 6 - Arrays, Types, and Constants

array.  We have, in fact, defined them to be type compatible
which will be very important when we get to the program
itself.

Continuing down the list of type declarations (once we use the
reserved word TYPE, we can define as many types as desired),
we define a type with 28 characters, then a type with 60 real
variables, and another with 6 boolean variables.  The next
type definition consists of 12 variables of type DogFood which
is itself a type of 6 booleans, resulting in a type consisting
of 6 times 12 = 72 boolean type variables.  It is possible to
continue building up type definitions like this indefinitely,
and as you build up applications, you will find yourself
building up rather complex type declarations and having a
clear picture of how they go together because it is your
solution to a problem.  The last type to be defined is that
named Boat which has exactly the same size and characteristics
as type Airplane.  We will see shortly that there is a
difference in these two definitions.


MORE TERMINOLOGY
______________________________________________________________

This is a fine point, but it may help you understand the topic
of types better.  Lines 4 through 9 are "named types", and
line 14 is an "anonymous type".  Occasionally in Modula-2, you
will find a case where you must have a name for a type and
cannot therefore use the anonymous type.  Such a case is when
you must do a type transformation, or when you are passing
data of some type to a procedure.  We will make use of this
terminology later in this tutorial.



HOW DO WE USE ALL OF THIS?
______________________________________________________________

In the var part of the definition part of the program, we
declare some variables, two simple types and some of the types
we defined above.  In the program part, we assign some values
to the 72 variables making up the Puppies matrix and the 72
variables making up the Kitties matrix.  All of the elements
of Stuff are then assigned nonsense values.  The really
interesting statement comes in line 30 where we say "Stuff2
:= Stuff;".  In this simple statement, all 14 values stored
in Stuff are copied into the 14 corresponding elements of
Stuff2 without using a loop.  This is possible because the two
variables are type compatible, they have the same type
definition and the same type name.  If you study the
definitions above, you will see that Stuff3 is of the same
number and range of elements and is composed of the same type
of elements as Stuff, namely integer, but they are not type
compatible because were not defined with the same type

                                                           6-4

                      Chapter 6 - Arrays, Types, and Constants

definition statement.  In like manner, even though Puppies and
Kitties are identical in type, they are not type compatible.

The only operations that can be performed on all of the
elements of an array at one time are array assignment, and
array parameter passing.

You have the ability, through careful assignment of variables,
to avoid certain kinds of programming errors.  If certain
variables should never be assigned to each other, a careful
selection of types can prevent it.  Suppose for example that
you have a program working with peaches and books.  You would
never want to copy a matrix of peaches to one defining books,
it just wouldn't make sense.  Those two matrices should be
defined with different type declarations even though they may
be identical in size.  Compile and run this program, even
though it will result in no output, then move the comment
delimiter in line 31 to a position following the assignment
statement and see if it does give you a type incompatibility
error.


DEFINING A CONSTANT
______________________________________________________________

Examine the program named CONSTANT.MOD for    ================
a definition of the constant as used in         CONSTANT.MOD
Modula-2.  We will finally keep the           ================
promise made when we studied LOOPDEMO.MOD
in chapter 4.  The new reserved word CONST is used to define
a constant for use in the program.  The constant MaxSize can
be used anywhere in the program that it is desired to use the
number 12, because it is a synonym for the value 12.  It can
be used as an integer or cardinal number because it is
compatible with both types.  In fact, it is compatible with
the corresponding long types if they are available on your
system.  Two additional constant values are defined for
illustrative purposes only.  In the type declaration section
we use the constant MaxSize to define two types, then use them
to define several variables.

In the program there is one for loop using the same constant
MaxSize as the upper limit.  It doesn't seem to be too useful
yet, but suppose your boss came to you and said to change the
program so that it handled 142 cases instead of 12.  The way
the program is written, you would only have to change the
value of the constant, recompile, and you would be done.  If
you had used the number 12 everywhere, you would have to
replace every 12 with the new number, 142, being careful not
to change the one in line 21 which is a different kind of 12.
Of course even that would not be too difficult in such a
simple program, but in a program with 5000 lines of code, one
simple change could take a week.

                                                           6-5

                      Chapter 6 - Arrays, Types, and Constants

Note that a constant must be initialized, but a variable
cannot be initialized in Modula-2.  Be sure to compile and
execute this program.


THE OPEN ARRAY IN A PROCEDURE
______________________________________________________________

Examine the program named ARAYPASS.MOD for    ================
an example of a program with arrays being       ARAYPASS.MOD
passed to a procedure.  Notice how the        ================
procedures are formatted.  The rows of
asterisks make them really stand out and easy to find.  You
should begin now to develop your own personal style of
formatting in a way that is clear and easy to for you to
follow.

The two procedures in this program are identical except for
the way the arrays are passed to them.  In the first procedure
named AddNumbers, the formal parameter named Donkey is passed
the array from the actual parameter by using the same type
which was used to define one of the arrays.  The procedure
merely adds the values of the elements of the array passed to
it and writes the result out to the monitor.  The way it is
written, it is only capable of adding arrays that are indexed
from 10 to 15.  Any other array will cause a type
incompatibility error.  This is simply called passing an array
to the procedure.

The second procedure named GenAddNumbers has its input array,
better known as the formal parameter, defined as an ARRAY OF
CARDINAL with no limits stated.  This procedure can add all
of the variables in any cardinal array regardless of the range
of its subscripts.  The lower subscript will always be defined
as zero within this type of procedure, and the upper limit of
the array can be found with the predefined function procedure
named HIGH.  It is used as shown in the example.  The first
time this procedure is called in the main program, it is
called with the variable SizeOne.  In the procedure, the array
subscripts for Donkey will be 0 through 5.  When the variable
named SizeTwo is the array sent to the procedure, then the
formal parameter named Donkey will have the limits of 0 and
218.  The second procedure definition method is therefore more
general.  This is called passing an open array to the
procedure.


WHICH ONE SHOULD I USE?
______________________________________________________________

There will be times when you wish to use the general case for
passing a parameter, the open array.  A good example is the
procedure named WriteString that we have been using in this
tutorial.  It would be a bit cumbersome if we were only

                                                           6-6

                      Chapter 6 - Arrays, Types, and Constants

allowed to pass, for example, a 10 character string to it each
time.  Since it can accept a string of any length, it is
evidently defined with an ARRAY OF CHAR as the formal
parameter type in its header.  (We will see in a later chapter
that this particular procedure is exactly that, a procedure
that someone has thoughtfully programmed for you.  You only
need to tell the system where it can be found using the IMPORT
statement.)

There will likewise be times when you will desire to use the
more specific method of definition.  If you are using a lot
of arrays and have a specific operation that needs to be done
to only a few arrays that have a common definition, you would
be wise to use this method.  The computer could then tell you
if you tried to use the procedure on an array that it was not
intended for.  This is making wise use of the type checking
available in the computer.

Note that open arrays are not assignment compatible and are
limited to a singly dimensioned array.


HANDLING STRINGS IN MODULA-2
______________________________________________________________

Examine the last example program for this     ================
chapter, STRINGEX.MOD, for an example of        STRINGEX.MOD
using strings in Modula-2.  This program      ================
is the first program to deviate from the
standard library as defined by Niklaus Wirth.  When he defined
the language, he suggested several library procedures that
should be available in every Modula-2 compiler and most
compiler writers have followed his suggestions quite closely.
He failed to define a standard library for the string handling
procedures.  There is therefore some freedom for each compiler
writer to define the string handling routines in any way he
pleases.  Most however, have followed at least a resemblance
to a standard, so the procedure calls are very similar from
compiler to compiler.  It may be necessary for you to modify
this file to suit your particular compiler.  Check your
compiler documentation for complete information on how strings
are implemented with your compiler.  A complete description
of the Modula-2 libraries and what they are will be given in
chapter 8.


BACK TO THE STRINGEX.MOD PROGRAM
______________________________________________________________

The first thing that is different here is the addition of
another IMPORT statement in line 10, this one importing
procedures from the module named Strings.  This is the module
containing the procedures which we will need in this program.
A string is an array of type char, each element of the array

                                                           6-7

                      Chapter 6 - Arrays, Types, and Constants

being capable of storing one character.  Thus an array of char
type elements is capable of storing a word, a sentence, a
paragraph, or even a whole chapter, depending on how big the
array is.  Using the example given in this program, we will
learn how to manipulate text data.

One additional feature of the example program will be found
on line 24.  In this line the WriteString procedure is used
in a way we have not seen as yet.  Instead of having an
expression in quotes, it has the name of a variable within its
parentheses.  It will display whatever characters are stored
in the string named Stuff defined by the ARRAY OF CHAR.  So
if we learn how to get a string of characters stored in a
variable of type string, we can display anything on the
monitor that we can generate internal to the computer.

According to the definition of Modula-2, a string is an array
of char type variables.  We will get more familiar with
strings as we continue our study.


SOME NEW STRING PROCEDURES
______________________________________________________________

The first line of the program itself, line 34, contains a
string assignment.  In this case, we are telling the system
to copy the constant ABCDEFGHIJKL into the variable named
Horse.  The array into which you are copying must begin at
index 0 in order for this to work because all character
constants start at zero by definition.  The variable Horse,
which only contains room for 12 characters will only receive
the first 12 characters of the constant.  The procedure
Display is called with Horse as the actual parameter and the
parameter is displayed between parentheses for clarity of
understanding, and the 12 characters of the variable are
displayed in their ASCII equivalent.  When you finally run
this program, compare some of the values to the ASCII table
that is included with the DOS documentation that came with
your computer.

In line 37 of the program, the constant 12345 is assigned to
the variable named Cow.  In the next line, the variable Cow
is assigned to the variable Horse, and the display procedure
is called again.  This time, the variable Cow is shorter than
the destination, so the system has to compensate for the
difference.  After it transfers the 5 characters to Horse, it
will place a 0 (zero) in the next position to indicate the end
of the string.  The definition of the string still has 12
places, but there are only 5 places of interest, so the system
will consider all places past the 5th as undefined.  This time
the system only prints out 5 characters in the procedure.
The list of ASCII equivalents shows that the other values are
still there, the output routine simply stopped when it came
to the zero in the sixth position.

                                                           6-8

                      Chapter 6 - Arrays, Types, and Constants

A little refinement of our definition is in order.  If a
string is full, that means if all character positions are
used, a terminating zero is not required.  If a string is not
full, meaning that less characters are actually used than are
defined for the string, a terminating zero is used to indicate
the desired length of the string.

According to the definition of Modula-2, a char type object
is considered to be a string of length 1 and can therefore be
handled in any way that it is legal to handle a string.

Note that the Assign statement may be different for different
compilers because it is not a part of the Modula-2 definition
by Niklaus Wirth.


CONCATENATION
______________________________________________________________

Concatenation is simply putting two strings together to make
up one bigger string.  Beginning in line 41, two new string
variables are assigned string values, S1 and S2, then the two
new variables are concatenated together and assigned to our
old favorite variable named Horse.  The variable named Horse
should now contain the silly expression NeatThings, and when
you run the program, you will find that it does.  It also has
a zero in character position 11, to indicate the end of the
string.  Line 47 concatenates Horse to Cow and stores the
result in Horse, but since the expression is now too long,
part of it will get truncated and simply thrown away.
Finally, Cow is concatenated to Horse, and the result stored
back into Horse.  This has the effect of shifting the prior
contents of Horse right and adding the characters stored in
Cow to the beginning.  Line 45 is an example of a string
assignment.  This is only possible because they are of the
same type which means they were defined with the same type
name.  The variable Cow has a different type so can't be
assigned to either of these two variables.  Note that the type
does not have to start at zero for string assignment to work.

Note that even though Horse was the only variable used in the
calls to Display, any of the other strings could have been
used also.  This is the topic of the fourth programming
exercise below.

Compile and run the program and see if it really does do all
that it should do as described above, keeping in mind that you
may have to modify the file to accommodate your particular
compiler.




                                                           6-9

                      Chapter 6 - Arrays, Types, and Constants

PROGRAMMING EXERCISES
______________________________________________________________

1.   Write a program to store the cardinal values 201 to 212
     in an array then display them on the monitor.

2.   Write a program to store a 10 by 10 array containing the
     products of the indices, therefore a multiplication
     table.  Display the matrix on the monitor in a neat and
     readable format.

3.   Modify the program in 2 above to include a constant so
     that by simply changing the constant, the size of the
     matrix and the range of the table will be changed.

4.   Modify the program named STRINGEX.MOD to include calls
     to Display with each of the string variables at the end
     of the program.



































                                                          6-10

```
{% endraw %}

## CHAP07.TXT

{% raw %}
```

                                                     Chapter 7

                                  OVERALL PROGRAM CONSTRUCTION



HOW TO PUT IT ALL TOGETHER
______________________________________________________________

We have pretty well covered the topic of how to put all the
parts together to build up a program.  In this chapter we will
go over the whole process in order to clear up any loose ends
and have the entire process in one place.  There is nothing
magic about the way the various pieces fit together but the
rules must be followed in order to build a usable program.

Examine the program named OVERPROG.MOD for    ================
our first look at the overall structure of      OVERPROG.MOD
the Modula-2 program.  It would be well       ================
for you to keep in mind that there is a
major category that we have not even hinted at yet, the issue
of modules.  They will be covered in Part III of this
tutorial, and although they are very important, you can begin
writing meaningful programs before you even hear what modules
are or how they are used.


NESTED PROCEDURES
______________________________________________________________

The program on display contains several levels of nested
procedures as an illustration for you.  The main program has
lines 3 through 37 as its declaration part, and lines 38
through 43 as its statement part.  Since the procedure
definitions actually define the procedures called for by the
main program, they correctly belong in the declaration part
of the program.  Only two of the procedures can actually be
called by the main program, Proc1, and Proc2, because they are
the only procedures at the same level as the main program.
The procedure Proc1 is a simple procedure, but Proc2 has
additional procedures in its declaration part.

Procedure Proc2 contains a declaration part in lines 13
through 30, and a statement part in lines 31 through 36.  Its
declaration part contains two procedures, Proc3 and Proc4.
The nesting is carried one step farther in Proc4 which
contains the procedure Proc5 in its declaration part.
Procedures can be nested to whatever level desired according
to the definition of Modula-2.


WHO CAN CALL WHO?
______________________________________________________________

It is important for you to clearly understand which procedure
can call which other procedures.  A procedure can call any

                                                           7-1

                      Chapter 7 - Overall Program Construction

procedure on the same level as itself provided that both have
the same parentage, or any procedure that is included in its
own declaration part at the level of its own declaration part.
For example, the main program can only call Proc1, and Proc2.
The others are nested within Proc2 and are not available to
the main program.  Likewise the statement part of Proc2 can
call Proc1, because it is on the same level, and Proc3 and
Proc4, because they are within its declaration part and at the
same level as its declaration part.  The procedure Proc5 can
only be called by Proc4, because no other procedure is at its
level.  Note that if another triple nesting were included in
Proc1, its third level procedure could not be called by Proc5
because they would not have the same parentage.

There is one additional rule about procedure calling.  A
procedure can call any procedure that is a peer of any of its
ancestors.  This means that the executable part of Proc5 can
call Proc3 or Proc1 because they are peers of Proc4 and Proc2
respectively, which are both ancestors of Proc5.

Nested procedures can be very useful when you wish to use a
procedure that you don't want any other part of the program
to be able to access or even see.  A private procedure can
therefore be written with no concern that the name may clash
with some other part of the program and cause undesirable side
effects.

The important thing to gain from this program is that nesting
is possible and can be very useful, and the definition of a
procedure is the same as that of the main program.  This means
that procedures can be nested within procedures in any way
that helps in designing a clear, understandable program.  Note
that function procedures can also be nested in this manner if
desired.  Compile and run this program and study the output
from it until you understand it completely.


WHERE DO CONSTANTS, TYPES, AND VARIABLES GO?
______________________________________________________________

Examine MOREPROG.MOD, for examples of         ================
where you can put the other definitions in      MOREPROG.MOD
the declaration part of the program and       ================
the procedures.  This is a repeat of the
last program with CONST, TYPE, and VAR declarations added in
every place where it is legal to put them.  This is done as
an example to you of where they can be put, so no explanation
of details will be given.  Notice lines 45 through 48 where
the use of a global type and other types defined in ancestor
procedures are illustrated.  Study these lines until you
understand where the types are coming from.  Some time spent
studying this program should aid you in understanding even
better the overall program construction problem.

                                                           7-2

                      Chapter 7 - Overall Program Construction

WHAT ABOUT ORDER OF DECLARATIONS?
______________________________________________________________

Load the program LASTPROG.MOD for an          ================
example of how the various fields can be        LASTPROG.MOD
ordered in the declaration part of the        ================
program.  Notice that there are 2
procedures, two constants, two types, and two variables
defined, but they are defined in a seemingly random order.
The order is random and was done only to illustrate to you
that the order doesn't matter in Modula-2, as long as
everything is defined before it is used.

In only one case does the order matter.  The compiler is very
picky about where the import list goes because the Modula-2
language definition requires it to be first.  In addition, the
export list, if it exists, must immediately follow the import
list.  We will cover both of these in detail later, for now
simply remember that the order of all declarations can come
in random order as long as they follow the import/export lists
and come before the statement part of the program.


PROGRAMMING EXERCISES
______________________________________________________________

1.   Using the program OVERPROG, add some calls to illegal
     places to see what messages the compiler displays.

2.   Using the program MOREPROG, add some illegal variable
     references to see what messages the compiler displays.






















                                                           7-3

```
{% endraw %}

## CHAP08.TXT

{% raw %}
```

                                                     Chapter 8

                                                  INPUT/OUTPUT



A SIMPLE OUTPUT PROGRAM
______________________________________________________________

Examine the file named SIMPLOUT.MOD for an    ================
example of the simple output functions.         SIMPLOUT.MOD
This program is limited to writing only to    ================
the monitor but we will get to files and
printer output shortly.  First we must establish some basic
principles for use with library procedures.

The first line of the declaration part of the program imports
our two familiar procedures WriteString and WriteLn in the
same manner we are used to.  The next line imports every
procedure in InOut and makes them available for use in the
program without specifically naming each one in the import
list.  The third line imports every procedure from Terminal
so that they too are available for our use.  The procedures
that are imported explicitly can be used in exactly the same
manner that we have been using them all along, simply name the
procedure with any arguments they use.  The procedures
imported as a part of a complete module can only be used with
a qualifier that tells which library module they come from.

An example is the easiest way to describe their use so refer
to the program before you.  Line 11 uses the explicitly
imported procedure from InOut, line 12 uses the same procedure
from InOut, and line 15 uses the procedure of the same name
from Terminal.  Line 11 uses the unqualified procedure call
to the procedure in InOut, and lines 12 and 15 use the
qualified method of calling the procedures from both library
modules.

In this case, the two procedures do the same thing, but it is
not required by Modula-2 that procedures with the same name
do the same thing.  By adding the library module name to the
front of the procedure name with a period between them, we
tell the system which of the two procedures we wish to use.
If we tried to explicitly import the WriteString procedures
from both library modules, we would get a compile error, so
this is the only way to use both procedures with the same name
from different modules.


WHAT IS A LIBRARY MODULE?
______________________________________________________________

What we have been calling a library module is more properly
termed a "module" and is the biggest benefit that Modula-2
enjoys over many of the other available programming languages.
This is the quality that gives Modula-2 the ability to have

                                                           8-1

                                      Chapter 8 - Input/Output

separately compiled modules, because a module is a compilation
unit.  When you get to Part III of this tutorial, you will
learn how to write your own modules containing your own
favorite procedures, and call them in any program in the same
manner that you have been calling the procedures provided by
your compiler writer, such as WriteString, WriteLn, etc.

None of the procedures you have been importing are part of the
Modula-2 language, they are extensions to the language
provided for you by your compiler writer.  Since they are not
standard parts of the language, they may vary from compiler
to compiler.  For that reason, in this tutorial, we have tried
to use those defined by Niklaus Wirth in his definition of the
language, and no others.


STUDY YOUR REFERENCE MANUAL
______________________________________________________________

This would be an excellent place for you to stop and spend
some time reading your reference manual to gain some
familiarity with your particular compiler's capability.  Look
up the section in your manual that is probably called the
Library and read through some of the details given there.  You
will find that there are many things listed there that you
will not understand at this point, but you will also find many
things there that you do understand.  Each module will have
a number of procedures that are exported so that you can
import them and use them.  Each procedure will have a
definition of what arguments are required in order to use it.
Most of these definitions should be understandable to you.
One thing you will find is that only the procedure header is
given along with the formal parameters, with the actual code
of the procedure omitted.  We will study about this in Part
III of this tutorial.  The part that is shown is the
definition module which only gives the calling requirements
which the user must know in order to use the system.  The
implementation module which gives the actual program code of
the procedure is usually not given by compiler writers, and
is not needed by users anyway.

As you study the library modules, you will find procedures to
handle strings and variables and procedures to do conversions
between the two.  You will find mouse drivers, BIOS calls to
the inner workings of your operating system, and many other
kinds of procedures.  All of these procedures are available
for you to use in your programs.  They have been written,
debugged, and documented for your use once you learn to use
them.  In addition, you will have the ability to add to this
list by creating your own modules containing your own
procedures.



                                                           8-2

                                      Chapter 8 - Input/Output

BACK TO THE PROGRAM SIMPLOUT.MOD
______________________________________________________________

Notice that in lines 13, 17, and 22, three different ways are
used to call a procedure named WriteLn, even though there are
actually only two procedures (that happen to do the same
thing).  The observant student will realize that lines 17 and
22 are calling the same procedure, the one in the InOut
module, and line 13 is calling a procedure in the Terminal
module.  A little time spent here will be time well spent in
preparing for the next few programs.  When you think you
understand this program, compile and execute it.


NOW FOR SOME SIMPLE INPUT PROCEDURES
______________________________________________________________

Examine the program named SIMPLIN.MOD for      ===============
our first example of a program with some         SIMPLIN.MOD
data input procedures.  In every program       ===============
we have run so far in this tutorial, all
data has been stored right in the program statements.  It
would be a very sad computer that did not have the ability to
read variable data in from the keyboard and files.  This is
our first program that has the ability to read from an
external device, and it will be limited to reading from the
keyboard.

This program is broken up into four groups of statements, each
illustrating some aspect of reading data from the keyboard.
This could have been four separate files but it will be easier
to compile and run one file.

Beginning with line 14 we have an example of the ReadString
procedure which reads characters until it receives a space,
a tab, a return, or some other nonprintable character.  This
loop will read three words on one line, one word on each of
three lines, or any combination to get three words or groups
of printable ASCII characters.  After each word or group is
read, it is simply displayed on the monitor for your
inspection.


ONE CHARACTER AT A TIME
______________________________________________________________

The group of statements in lines 26 through 29 is a loop in
which 50 ASCII characters are read in and immediately echoed
out to the monitor.  It should be evident to you that the
characters are read one at a time, and since the same variable
is used for each character, they are not stored or saved in
any way.  In actual practice, the characters would be stored
for whatever purpose you intend to use them for.  When you run
this part of the program, it will seem like the computer is

                                                           8-3

                                      Chapter 8 - Input/Output

simply acting like a word processor, echoing your input back
to the monitor.


ONE LINE AT A TIME
______________________________________________________________

The next section, beginning in line 32, reads in a full line
before writing it out to the monitor.  In this program we are
introduced to the EOL which is a constant defined by the
system for our use.  It must be imported from InOut just like
the procedures are, and it is a constant that is equal to the
ASCII value that is returned when we hit the return key.  It
is therefore equal to the End-Of-Line character, which
explains how it got its name.  If we compare the input
character to it, we can determine when we get to the
End-Of-Line.  That is exactly what this loop does.  It
continues to read characters until we find an EOL, then it
terminates the input loop and displays the line of data.
Notice that this time we do not simply read the data and
ignore it but instead add it character by character to the
array named StringOfData.  Of course, the next time through
the loop we overwrite it.  The careful student will also
notice that, in line 45 we wrote a zero character in the
character of the line just past the end of the line.  The zero
is to indicate the end-of-string for the string handling
procedures.  This portion of the program is easy, but will
require a little time on your part to completely dissect it.


READING IN SOME NUMBERS, CARDINAL
______________________________________________________________

Beginning in line 51, we have an example of reading 6 cardinal
type numbers in a loop.  The procedure ReadCard will, when
invoked by your program, read as many digits as you give it.
When it reads any character other than a 0 through 9, it will
terminate reading and return the number to your calling
program.  Notice that this time all 6 numbers are read in,
stored, and when all are in, they are all displayed on one
line.  This should be easy for you to decipher.


COMPILING AND RUNNING THIS PROGRAM
______________________________________________________________

There is no program that you have studied here that is as
important for you to compile and run as this one is.  You
should spend considerable time running this program and
comparing the results with the listing.  Enter some invalid
data when you are running the ReadCard portion of it to see
what it does.  When you are running the "line at a time"
portion, try to enter more than 80 characters to see what it
will do with it.  This is a good point for you to learn what

                                                           8-4

                                      Chapter 8 - Input/Output

happens when errors occur.  After you understand what this
program does, we will proceed to a study of input and output
of data to or from a file.


FILE INPUT/OUTPUT
______________________________________________________________

Examine the file named FILEIO.MOD for your    ================
first example of file reading and writing.       FILEIO.MOD
The library module named InOut has the        ================
ability to either read and write from/to
the keyboard and monitor, or to read and write from/to files.
The present example program redirects the input and output to
files for an illustration of how to do it.  Note that there
is a much more general method of file input and output
available which will be illustrated in the next few example
programs.

Line 16 requests the operator, namely you, to enter a filename
to be used for input.  There is nothing different about this
statement than the others you have been using.  The next line
requests the system to open a file for inputting, and part of
the procedure OpenInput is to go to the keyboard waiting for
the filename to be typed in.  So the message in line 16 is in
preparation for what we know will happen in line 17.  Whatever
filename is typed in is opened for reading if it is found on
the disk.  The "MOD" in the parentheses is a default extension
supplied, (this can be any extension you desire).  If no
extension is supplied by the operator, and if the filename
does not have a period following it, ".MOD" will be added to
the filename.  If the system can find the requested
filename.extension, the Done flag is made true and we can test
it.  In this example, if the flag is returned false, we ask
the operator to try again until he finally inputs a filename
that exists on the default disk/directory.


NOW TO OPEN AN OUTPUT FILE
______________________________________________________________

Once again, in line 21, we request a filename for output
anticipating the operation of the OpenOutput in line 22.  Line
22 waits for a keyboard input of a filename and if the
filename entered has no extension, it adds the extension
".DOG" and attempts to open the file for writing.  When you
input the filename, adding a period to the end of the filename
will prevent the extension being added.  If the
filename.extension does not exist, it will be created for you.
If it does exist, it's contents will be erased.

It is nearly assured that the file will be created and the
Done flag will be supplied as true, but it is good practice
to check the flag anyway.  It will be apparent when we get to

                                                           8-5

                                      Chapter 8 - Input/Output

the program on printer output, that it is impossible to open
a file with certain names, one being PRN, because the name is
reserved for printer identification and the Done flag will be
returned false.

When we arrive at line 25, we should have 2 files ready for
use, one being an input file and the outer being an output
file.


HOW DO I USE THE OPENED FILES?
______________________________________________________________

Anytime you use this technique to open a file for writing, any
output procedure from InOut will now be redirected to that
file.  Anytime you use this technique to open a file for
reading, any input procedure from InOut will access the file
named instead of the keyboard.  In addition, the library
module named RealInOut will also be redirected with InOut.
Any time you read or write, instead of using the keyboard and
monitor, the input and output files will be used.  The input
and output will be the same except for where it goes to and
comes from, and it is possible to only open one and leave the
other intact.  Thus input can be from a file, and output can
still go to the monitor.

When I/O is redirected, the module Terminal is still available
for use with the monitor and keyboard because I/O using this
module can not be redirected.  The module named Terminal does
not have the flexibility of input and output that is found in
InOut so it is a little more difficult to use.  There is a
major drawback when using InOut with the I/O redirected.  You
are limited to one file for input and one file for output at
one time.  Finally, this method cannot be used to open a
"fixed" or prenamed file, since it always surveys the keyboard
for the filename.  It will probably come as no surprise to you
that all of these limitations will be overcome with another
method given in the next two programs.

The program itself should be easy to follow, once you realize
that the flag named Done returns true when a valid character
is found following a Read, and false when an End-Of-File (EOF)
is detected.  The Done flag is set up following each operation
so its use is dictated by which procedure was called last.
The program simply copies all characters from one file to
another.  When completed, the two procedures named CloseInput
and CloseOutput are called to do just that, to close the files
and once again make the I/O available to the keyboard and
monitor.  In this case, however, we immediately terminate the
program without taking advantage of the return to normal.

Compile and run this program, being careful not to give it the
name of an existing file for output, or it will overwrite the
old data in the file and copy new data into it.  That is the

                                                           8-6

                                      Chapter 8 - Input/Output

reason for the silly file extension, DOG.  Few people will
have a file with that extension.  For input, use the present
filename (FILEIO.MOD), for output, use STUFF, STUFF., and
STUFF.STU, observing the resulting new filename each time.


THE COMPLETE FILESYSTEM
______________________________________________________________

Examine the file named VARYFILE.MOD for an    ================
example using the complete FileSystem           VARYFILE.MOD
module.  As stated earlier, Modula-2 does     ================
not have any input/output methods defined
as part of the language.  This is because the I/O available
on computers is so diverse, there would be no way of defining
a method that could be used on all computers.  To eliminate
the problem, Niklaus Wirth simply defined no I/O as part of
the language, but he did suggest a few standard modules to
perform the basic I/O tasks.  Since they are only suggestions,
compiler writers are not constrained to follow them, but in
the interest of portability, most will.  A very limited subset
of all of the procedures are the only ones that will be used
in the tutorial portion of this course.  (A few other
procedures will be used in the example programs given in
chapters 9 and 16.)  It will be up to you to see that the
procedure calls are in order with your compiler, and where
they differ, to modify them.



BACK TO THE PROGRAM NAMED VARYFILE
______________________________________________________________

This time we import several procedures from the library module
named FileSystem for I/O use.  We ask for the input filename
and store it internally in a string variable.  This implies
that we can also define the filename as a constant that is
carried in the program, making it possible to use a certain
preprogrammed filename for input.  We use the procedure Lookup
to open the file.  This procedure uses three arguments within
the parentheses, the first being the internal filename which
is a record of information about the file.  (We will come to
records later, don't worry too much about it at this point.)
The second argument is the name of the file on disk we wish
to access, the external filename, and the third argument is
a boolean variable or constant.  If it is true, and the file
name is not found, a new file of that name will be created.
If it is false, and the file is not found, a new file will not
be created, and the record variable name InFile.res will
return the value notdone.  (That refers to one variable named
res which is a part of the record InFile.)



                                                           8-7

                                      Chapter 8 - Input/Output

WHY TWO FILENAMES?
______________________________________________________________

Two filenames are required in order to make Modula-2 available
on a wide variety of computers.  In this case we are using the
name InFile for our internal filename and this name must
follow all of the Modula-2 rules for naming an identifier.
The external name however must follow all the rules for naming
a file as dictated by the particular operating system, we only
store it in the string named NameOfFile.  Each compiler must
tell you how to name an external file to be compatible with
their particular implementation.  The procedure named Lookup
associates the internal and external filenames with each
other.

Note that the variable named InFile is a record composed of
many parts, but for the immediate future we only need to be
concerned with its definition.  It is defined as a variable
of type File which is imported from the module named
FileSystem.  Until you study the lesson in this tutorial on
records, simply copy the method used here for file
Input/Output.

Once the file is opened, you can use any of the procedures
included in the FileSystem module, being careful to follow the
rules given in your library documentation.  Of course, each
procedure you wish to use must be imported properly.  The
remainder of the program should be self-explanatory and will
be left to your inspection.  With this example in hand, spend
some time studying your FileSystem module to become familiar
with it, then compile the program and execute it to observe
its operation.



NOW FOR MULTIPLE FILE OPERATIONS
______________________________________________________________

Examine the file named PRINTFLE.MOD for an    ================
example program that uses 4 files at once,      PRINTFLE.MOD
and still writes to the monitor.  This        ================
program is very similar to the last in
that it opens one file for reading, but it opens three files
for writing.  Each of the four files has its own internal
filename identifier, a record of type File, and each has its
own external filename.  The three output files are firmly
fixed to certain filenames, rather than ask the operator for
names, and the third filename, listed in line 26, is a very
special name, PRN.  This is not a file but is the access to
the printer.  Anything written to this file will go to your
line printer, so you should turn your printer on in
anticipation of running it.  Your compiler may also allow a
few other names such as LPT0, LPT1, etc, and there may be
other names reserved for serial I/O such as to talk to a

                                                           8-8

                                      Chapter 8 - Input/Output

modem, a joystick, etc.  You will need to consult your
compiler documentation for a complete list of special names.


The program itself is very simple and similar to the last one.
A character is read from the input file, and output to the
three output files and to the monitor.  In the case of
CapFile, the character is capitalized before it is output
simply to indicate to you that the files are indeed different.
Study it until you understand it, then compile and run it.
Look at the contents of the new files to see if they are
correct.


MORE NEAT THINGS WE CAN DO WITH FILES
______________________________________________________________

There are many more things that you can do with the FileSystem
module.  It is possible to open a file, begin reading until
you come to a selected position, and change to a write file
to overwrite some of the data with new data.  You can write
to a file, change it to a read file, reset it to the
beginning, and read the data back out.  You can rename a file,
or delete it.  It will be up to you to study the documentation
for your FileSystem module, and learn how to use it
effectively.


YOU ARE AT A SPECIAL POINT IN MODULA-2
______________________________________________________________

With the completion of this chapter, you have arrived at a
very special point in your study of Modula-2.  Many people
arrive at this point in a language and quit studying,
preferring to use the language in a somewhat limited sense
rather than to go on and learn the advanced topics.  If your
needs are few, you can quit here also and be well assured that
you can write many programs with Modula-2.  In fact there will
be very few times when you cannot do all that you wish to do
provided that your programs are not too large.  However, if
you choose to go on to the advanced topics, you will find that
some of the programming chores will be greatly simplified.

Whether you decide to go on to the advanced topics or not, it
would be wise for you to stop at this point and begin using
what you have learned to actually write some programs for your
own personal use.  Everybody has need occasionally for a
program to do some sort of translation of data in a text file
for example.  Write programs to do some data shuffling from
file to file changing the format in some way.  You should be
able to think up several programs that you would find useful.

Spend some time studying and running the programs in the next
chapter, then modify them to suit your needs, building up a

                                                           8-9

                                      Chapter 8 - Input/Output

few utilities for your software collection.  The best way to
learn to program is to program.  You have all of the tools you
need to get started, so you would do well to get started.
Adding some programming experience will be a big help if you
decide to continue your study into the advanced features of
Modula-2.


PROGRAMMING EXERCISES
______________________________________________________________

1.   Write a program that reads any Modula-2 source file and
     lists it on the monitor with the number of characters in
     each line.  List the number of lines in the program also.

2.   Write a program that reads any Modula-2 source file and
     counts the number of times the word END appears in the
     source file.



































                                                          8-10

```
{% endraw %}

## CHAP09.TXT

{% raw %}
```

                                                     Chapter 9

                                              EXAMPLE PROGRAMS



WHY THIS CHAPTER?
______________________________________________________________

The programs included in this chapter are intended to be
illustrations to you in how to write a complete program.  The
programs are meant to be useful to you either as an example
of how to do some operation or as utility programs for your
own personal use.


TIMEDATE - Get Time and Date
______________________________________________________________

This program calls one of the DOS             ================
functions to get the current time and           TIMEDATE.MOD
date.  The various components of the time     ================
and date are input as variables and can be
printed or displayed in any format you desire.  Your
particular compiler may use a different format because there
is no standard in Modula-2.  This is one of those areas that
will probably deviate from compiler to compiler.  If you study
your documentation that came with your compiler, you will find
many other calls of this type described.  This program is
meant to be an illustration of how to use this particular
call.  Note that this program is especially written to use the
MS-DOS calls available on an IBM-PC microcomputer and will
probably have no resemblance to the calls on some other
system.


AREAS - Calculate Areas
______________________________________________________________

This program is presented as an                ===============
illustration of how to build up a larger          AREAS.MOD
program than any we have examined up to        ===============
this point.  Notice that the main program
is simply one CASE statement that calls all of the other
procedures.  It would be very simple to include the code from
each procedure right in the CASE statement and have no
procedure calls, but it would make the program a little more
difficult to understand.  The way this example is formatted,
the code is very easy to understand.  After you understand the
main program, it is a simple matter to visit each procedure
to see exactly what they do.

Observe carefully how the menu works in this program.  It
reads one keystroke and responds immediately making it a very
simple program to use.

                                                           9-1

                                  Chapter 9 - Example Programs

PC - Printer Control
______________________________________________________________

This is a very useful program that you can    ================
use to control your printer.  It is                PC.MOD
specifically set up for an Epson RX-80,       ================
but you can modify the control characters
to set up your printer to whatever mode you desire.  To use
it, you call the program by typing its name on the DOS command
line, and supply a single letter according to the displayed
menu.  The program will send the requested control sequences
to the printer to select the enhanced, compressed, or whatever
mode you desire.  If your printer is located physically remote
from you, you can use this program to send a formfeed to the
printer by selecting the F option.  If you have some longer
control sequences to send, you may want to store the values
in a string and use a loop to output the data until you come
to an 0C character.



LIST - List Program File
______________________________________________________________

If you ran the batch file named LISTALL as    ================
suggested at the beginning of this                LIST.MOD
tutorial to print out all of the source       ================
files, you have already used a program
similar to this one.  This program will list any ASCII file,
adding line numbers, page numbers, and the date and time, on
the printer.  It is specifically designed to be a program
listing utility.  The operation is very simple, and you should
have no trouble in understanding this program or what it does.

Feel free to modify this program for your own personal use.

The LIST.EXE file on the distribution disk is not a result of
compiling this source file but was written and compiled in
TURBO Pascal.  This was done in order to alleviate the
possibility of any legal problem, because Borland
International does not require a distribution fee or a run-
time license for compiled programs.  The Modula-2 program is
nearly identical to the distributed executable program, and
allows you to modify the source code to meet your own personal
needs.

Additional programs will be given at the end of Part III for
your information.  You will no doubt find additional example
programs in various books and periodicals and it would be to
your advantage to spend some time studying them as
illustrations of both good and bad practices.



                                                           9-2

                                  Chapter 9 - Example Programs

PROGRAMMING EXERCISE
______________________________________________________________

1.   Study the source code for LIST.EXE for a period of time,
     then compile it with your compiler.  You may need a few
     modifications to get it to compile properly because all
     Modula-2 compilers are not identical.  After successfully
     compiling and executing this program, put it aside.
     Starting with a blank sheet of paper, write and debug
     your own version of a program lister.  This is a fairly
     major programming assignment, but if you get stuck, you
     have the existing program to help you over the rough
     spots.  If you complete this assignment, you will have
     gained a good bit of experience in writing Modula-2, and
     you will have your own customized program lister that you
     thoroughly understand.





































                                                           9-3

```
{% endraw %}

## CHAP10.TXT

{% raw %}
```

                                                    Chapter 10

                                    SCALARS, SUBRANGES, & SETS



PREREQUISITES FOR THIS MATERIAL
______________________________________________________________

In order to understand the material in this chapter, you
should have a fairly good understanding of most of the
material in Part I of this tutorial.

A scalar, also called an enumerated type,      ===============
is a list of values which a variable of          ENTYPES.MOD
that type may assume.  Examine the file        ===============
named ENTYPES.MOD for an example of some
scalars.  The first TYPE declaration defines Days as being a
type which, if used to define a variable, the variable can be
assigned any one of the seven values listed.  Since, within
the VAR declaration, Day is assigned the type of Days, then
Day is a variable which can assume any one of seven different
values.  Moreover, Day can be assigned the value mon, or tue,
etc., which makes the program easier to follow and understand.
Internally, the Modula-2 system does not actually assign the
value mon to the variable Day, but it uses an integer
representation for each of the names.  This is important to
understand because you must realize that you cannot print out
mon, tue, etc., but can only use them for indexing control
statements.

Note that there is an upper limit of 16 values for an
enumerated type placed on you by most implementations of
Modula-2.  This is actually a very low limit and it is most
unfortunate that such a small limit exists.  You should check
your documentation because your particular compiler may allow
more.


ANOTHER ENUMERATED TYPE
______________________________________________________________

The second line of the type definition defines TimeOfDay as
another enumerated type.  The variable Time can only be
assigned one of four values since it is defined as the type
TimeOfDay.  It should be clear that even though it can be
assigned morning, it cannot be assigned morningtime or any
other variant spelling of morning, since each enumerated value
is simply another identifier which must have an exact spelling
to be understood by the compiler.
Several real variables are defined to allow us to demonstrate
the use of the enumerated variables.  After writing a header
for neat formatting of the output, the real variables are
initialized to some values that are probably not real life
values, but will serve as a platform to illustrate use of the
enumerated variable.

                                                          10-1

                      Chapter 10 - Scalars, Subranges and Sets

A BIG SCALAR VARIABLE LOOP
______________________________________________________________

The remainder of the program is one large loop being
controlled by the variable Day as it goes through all of its
values, one at a time.  Note that the loop could have gone
from tue to sat or any portion of the range desired.  It does
not have to go through all of the values of Day.  Using Day
as the case variable, the name of one of the days of the week
is written out each time we go through the loop.  Another loop
controlled by Time is executed four times, once for each value
of Time.  The two CASE statements within the inner loop are
used to calculate the total pay rate for each time period and
each day.  The data is formatted carefully to make a nice
looking table of pay rates as a function of Time and Day.

Take careful notice of the fact that the scalar variables
never entered into the calculations, and they were not printed
out.  They were only used to control the flow of the logic.
It was much neater than trying to remember that mon is
represented by a 0, tue is represented by a 1, etc.  In fact,
those numbers are used for the internal representation of the
scalars, but we can relax and let the Modula-2 system worry
about the internal representation of our scalars.



THE OUTPUT MAY NOT BE VERY NEAT
______________________________________________________________

Compile and run this program and observe the form of the
output data.  The only format available with some compilers
is the E (exponential) notation which does not make for a very
well formatted or easily read output.  Don't let this worry
you, when we get to Part III of this tutorial we will see how
we can write our own output routines to display or print
floating point numbers in any format we can think up.

One other thing should be pointed out in this module.  If you
observe the case statements you will notice that the one that
starts in line 33 does not have an else clause.  It is really
not needed because every possible value of the variable Day
is covered in the various branches.  In the case statement
starting in line 51, there is an else clause, because only two
of the possible 7 values are acted on in the case body itself.
Without the else, the program would not know what to do with
a value of mon through fri, so the else is required here, but
not in the earlier one.





                                                          10-2

                     Chapter 10 - Scalars, Subranges, and Sets

A COMMENT ON PROGRAM STYLE
______________________________________________________________

The enumerations in this program used a named type, but an
anonymous type can also be used.  Good programming practice
would be to use a named type however.

The case statement in lines 51 through 55 could easily be
replaced by an if statement.  The case statement was selected
here simply because the other constructs use the case
statement and it was felt that using the same construct would
lead to a clearer program.


LETS LOOK AT SOME SUBRANGES
______________________________________________________________

Examine the program SUBRANGE.MOD for an       ================
example of subranges.  It may be                SUBRANGE.MOD
expedient, for a particular programming       ================
problem, to define some variables that
only cover a part of the full range as defined in a scalar
type.  Notice that Days is declared a scalar type as in the
last program, and Work is declared a type with an even more
restricted range, a subrange of Days.  The variable named Rest
is declared as a different subrange of Days.  In the var
declaration, Day is once again defined as the days of the week
and can be assigned any of the days by the program.  The
variable Workday, however, is assigned the type Work, and can
only be assigned the days mon through fri because of the more
limited range of the type.  If an attempt is made to assign
Workday the value sat, a runtime error will be generated
because sat is not a legal value to be assigned to Workday.
A carefully written program will never attempt to do so, and
it would therefore be an indication that something is wrong
with either the program or the data.  This is one of the
advantages of Modula-2 over older less structured languages.

Further examination will reveal that Index is declared as
being capable of storing only the range of values from 1 to
12, another subrange.  During execution of the program, if an
attempt is made to assign Index any value outside of that
range, a runtime error will be generated.  Suppose the
variable named Index was intended to refer to your employees,
and you have only 12.  If an attempt was made to refer to
employee number 27, or employee number -8, there is clearly
an error somewhere in the data and you would want to stop
running the payroll to fix the problem.  Modula-2 would have
saved you a lot of grief.

The way Index is defined, it will be of type cardinal because
the entire range is composed of positive numbers.  It is
therefore not possible to use the variable Index in
calculations involving integer type numbers.  If the range

                                                          10-3

                     Chapter 10 - Scalars, Subranges, and Sets

were defined with at least one end negative, it would be of
type integer.  Index2 will be of type integer because we force
the compiler to use the integer type through use of the type
written prior to the range.  Modula-2 gives you complete
control over the types used.


SOME STATEMENTS WITH ERRORS IN THEM
______________________________________________________________

In order to have a program that would compile without errors,
and yet include some examples of errors, the first part of the
program is not really a part of the program since it is within
a comment area.  This is a trick to remember when you are
debugging a program, a troublesome part can be commented out
until you are ready to include it with the rest.  The errors
should be self explanatory.

Going beyond the area commented out, there are seven
assignment statements in lines 31 through 37 given as examples
of subrange variable use.  Notice that the variable Day can
always be assigned the value of either Workday or Weekend, but
the reverse is not true because Day can store values that
would be illegal for the other variables.


THREE VERY USEFUL FUNCTIONS
______________________________________________________________

Lines 39 through 45 of the example program demonstrate the use
of three very important functions when using scalars.  The
first is the INC function which returns the value of the
scalar following the value of the scalar used as the actual
parameter.  If the parameter is the last value in the list,
a runtime error is generated.  The next function is the DEC
that returns the value of the scalar prior to the one used in
the actual parameter.  All scalars have an internal
representation starting at 0 and increasing by one until the
end is reached.  The third function is the ORD which simply
returns the numerical value of the scalar variable.

In our example program, ORD(Day) is 5 if Day has been assigned
sat, but ORD(Weekend) is 0 if Weekend has been assigned sat.
As you gain experience in programming with scalars and
subranges, you will realize the value of these three
functions.

A few more thoughts about subranges are in order before we go
on to another topic.  A subrange is always defined by two
predefined constants, and is always defined in an ascending
order.  A variable defined as a subrange type is actually a
variable defined with a restricted range, and should be used
as often as possible in order to prevent garbage data.  There
are actually very few variables ever used in any computer

                                                          10-4

                     Chapter 10 - Scalars, Subranges, and Sets

program that cannot be restricted by some amount.  The limits
may give a hint at what the program is doing and can therefore
help in understanding the program operation.

Subrange types can only be constructed using the simple data
types, not including the real type, and any operation that can
be performed on a particular type can be performed on a
subrange of that type.


SETS
______________________________________________________________

Now for a new topic, sets.  Examining the     ================
example program SETS.MOD will reveal the          SETS.MOD
use of some sets.  A scalar type is           ================
defined first, in this case the scalar
type named Goodies.  A set type is then defined with the
reserved words SET OF followed by a predefined scalar type.
Most microcomputers have an upper limit of 16 elements that
can be used in a set.  Your compiler documentation will tell
you if yours allows a larger range.

Several variables are defined as sets of Treat, after which
they can individually be assigned portions of the entire set.
Consider the variable IceCreamCone which has been defined as
a set of type Treat.  This variable is composed of as many
elements of Goodies as we care to assign to it.  In the
program, we define it as being composed of IceCream, and Cone.
The set IceCreamCone is therefore composed of two elements,
and it has no numerical or alphabetic value as most other
variables have.  Continuing in the program, you will see 4
more delicious deserts defined as sets of their components.
Notice that the banana split is first defined as a range of
terms, then another term is added to the group.  All five of
the defined sweets are combined in the set named Mixed, then
Mixed is subtracted from the entire set of values to form the
set of ingredients that are not used in any of the deserts.
Each ingredient is then checked to see if it is IN the set of
unused ingredients, and printed out if it is.  Running the
program will reveal a list of the unused elements.

In this example, better programming practice would have
dictated defining a new variable, possibly called Remaining
for the ingredients that were unused.  It was desirable to
illustrate that Mixed could be assigned a value based on
subtracting itself from the entire set, so the poor variable
name was used.

This example resulted in some nonsense results but hopefully
it led your thinking toward the fact that sets can be used for
inventory control, possibly a parts allocation scheme, or some
other useful system.

                                                          10-5

                     Chapter 10 - Scalars, Subranges, and Sets

THE BITSET TYPE
______________________________________________________________

The only predefined set type is the BITSET.  This is a set of
bits contained in one word of the host computer, and is
typically composed of 16 bits or elements.  The type BITSET
acts as if it were defined as;

     TYPE BITSET = SET OF [0..15];

Its use will be left to the students study.  There is an
example of use in chapter 16 of this tutorial.  It will be
found in the program named BITOPS.MOD and it would be a
profitable study to examine this program.


SET OPERATIONS
______________________________________________________________

A complete list of all operations available with sets is as
follows;

     +     Union
     -     Difference
     *     Intersection
     /     Symmetric difference

     =     Test for equality
     #     Test for inequality (Modern method)
     <>    Test for inequality (Becoming obsolete)
     <=    Inclusion
     >=    Inclusion

A complete discussion of set theory is beyond the scope of
this tutorial.  The interested student will be referred to
academia and popular press.

















                                                          10-6

```
{% endraw %}

## CHAP11.TXT

{% raw %}
```

                                                    Chapter 11

                                                       RECORDS



PREREQUISITES FOR THIS MATERIAL
______________________________________________________________

In order to do a profitable study of this material, you will
need a good understanding of all of the material in Part I.
The material concerning the scalar type from chapter 11 is
also needed.

We come to the grandaddy of all data          ================
structures in Modula-2, the record.  A          SMALLREC.MOD
record is composed of a number of             ================
variables any of which can be of any
predefined data type, including other records.  Rather than
spend time trying to define a record in detail, lets go right
to the first example program, SMALLREC.MOD.  This is a program
using nonsense data that will illustrate the use of a record.


A VERY SIMPLE RECORD
______________________________________________________________

There is only one entry in the type declaration part of the
program, namely the record identified by Description.  The
record is composed of three fields, the Year, Model, and
Engine variables.  Notice that the three fields are each of
a different type, indicating that the record can be of mixed
types.  You have a complete example of the way a record type
is defined before you.  It is composed of the identifier
Description, the reserved word RECORD, the list of elements,
and followed by END;.  Notice that this only defines a type,
it does not define any variables.  That is done in the var
declaration where the variable Truck is defined as a record
variable of type Description.  The variable Truck has three
components, Year, Model, and Engine, and any or all of these
components can be used to store data pertaining to the
variable named Truck.

An array of 10 Cars is also defined in line 13 for later use.

In order to assign values to the various fields, the variable
name is followed by the sub-field with a separating period.
Keep in mind that Truck is a complete record containing three
variables, and to assign or use one of the variables, you must
designate which sub-field you are interested in.  Examine the
program where the three fields are assigned meaningless data
for illustration in lines 18 through 20.  Notice that each of
the components is treated as a simple variable and each
component is assigned some nonsense data for illustration.
Study the dot notation carefully here because it will be used
frequently in Modula-2 programs.

                                                          11-1

                                          Chapter 11 - Records

The loop in lines 22 through 26 is used to assign nonsense
data to all of the fields of the array of record variables
named Cars.  The Year field is assigned an integer number
varying with the subscript, all Model fields are assigned the
name Duesenburg, and all Engine variables are assigned the
value V8.  In order to further illustrate that there are
actually 30 variables in use here, a few are changed at random
in the next few statements, being very careful to maintain the
required types as defined in the type declaration part of the
program.

The Truck variable is printed out for illustration and
finally, all ten composite variables named Cars, consisting
of 30 actual variables in a logical grouping are printed out
using the same "var.subfield" notation described above.  If
the preceding description of a record is not clear in your
mind, review it very carefully.  It's a very important concept
in Modula-2, and you won't have a hope of a chance of
understanding the next example until this one is clear.  Keep
in mind that a record is used to group some number of possibly
different types of data that are related to each other in some
way.


A SUPER RECORD
______________________________________________________________

Examine the example file BIGREC.MOD for a     ================
very interesting record.  First we have a        BIGREC.MOD
constant defined.  Ignore it for the          ================
moment, we will come back to it later.
Within the type declaration we have three records defined, and
upon close examination, you will notice that the first two
records are included as part of the definition of the third
record.  The record identified as Person actually contains 8
variable definitions, three within the FullName record, two
of its own, and three within the Date record.  Once again,
this is a type declaration and does not actually define any
variables.  The actual variables will be defined in the var
part of the program.

The var part of the program defines some variables beginning
with the array of Friend containing 50 (because of the
constant definition in the const part) records of Person.
Since Person defines 8 fields, we have now defined 8 times 50
= 400 separate and distinct variables.  Each of the 400
separate variables has its own type associated with it, and
the compiler will generate an error if you try to assign any
of those variables the wrong type of data.  Since Person is
a type definition, it can be used to define more than one
variable, and in fact it is used again to define three more
records, Self, Mother, and Father.  These three records are
each composed of 8 variables, so we have 24 more variables

                                                          11-2

                                          Chapter 11 - Records

which we can manipulate within the program.  Finally we have
the variable Index defined as a simple cardinal type variable.
Notice that if we desired, we could also define a variable of
type FullName composed of 3 simple variables.


HOW TO MANIPULATE ALL OF THAT DATA
______________________________________________________________

In the program we begin by assigning data to all of the fields
of Self in lines 30 through 42.  Examining the first three
statements of the main program, we see the construction we
learned in the last example program being used, namely the
period between descriptor fields.  The main record is named
Self, and we are interested in the first part of it, namely
the Name part of the person record.  Since the Name part of
the person record is itself composed of three parts, we must
designate which part of it we are interested in.  The name
Self.Name.FirstName is the complete description of the first
name of Self and is the first assignment statement which is
assigned the name of Charley.  The next two fields are handled
in the same way and should be self explanatory.


WHAT IS THE WITH STATEMENT?
______________________________________________________________

Continuing on to the fourth field, the City, there are only
two levels required because City is not another record
definition.  The fourth field is therefore completely defined
by Self.City.  Notice the "WITH Self DO" statement.  This is
a shorthand notation used with record definitions to simplify
coding used in the same manner as in Pascal.  From the next
statement to the matching end statement in line 42, any
variables within the Self record are used as though they had
a Self. in front of them.  It greatly simplifies coding to be
able to omit the leading identifier within the with section
of code.  You will see that City, and State, are easily
assigned values without further reference to the Self
variable.  When we get to the Day part of the birthday, we are
back to three levels and the complete definition is
Self.Birthday.Day but once again, the Self part is taken care
of automatically because we are still within the "WITH Self
DO" area.

To illustrate the with statement further, another is
introduced, "WITH Birthday DO", which takes effect until the
end statement.  Within this area both leading identifiers are
handled automatically to simplify coding, and Month is
equivalent to writing Self.Birthday.Month if both with
statements were removed.  You may be wondering how many levels
of nesting are allowed in record definitions.  There doesn't
appear to be a limit according to the Modula-2 definition, but
we do get a hint at how far it is possible to go.  In most

                                                          11-3

                                          Chapter 11 - Records

implementations of Modula-2, you are allowed to have with
statements nested to nine levels, and it would be worthless
to nest with statements deeper than the level of record
nesting.  Any program requiring more levels than nine is
probably far beyond the scope of your programming ability, and
mine, for a long time.

After assigning a value to the year, the entire record of Self
is defined, all eight variables.



SUPER-ASSIGNMENT STATEMENTS
______________________________________________________________

The next statement, Mother := Self; is very interesting.
Since both of these are records, both are the same type of
record, and both therefore contain 8 variables, Modula-2 is
smart enough to recognize that, and assign all eight values
contained in Self to the corresponding variables of Mother.
So after one statement, Mother is completely defined.  The
next statement assigns the same values to the eight respective
fields of Father, and the loop in lines 47 through 50 assigns
all 50 Friend variables the same data.  We have therefore
generated 400 + 24 = 424 separate pieces of data so far in
this program.  We could print it all out, but since it is
nonsense data, it would only waste time and paper.  Lines 51
through 56 write out three sample pieces of the data for your
inspection.



WHAT GOOD IS ALL OF THIS
______________________________________________________________

It should be obvious to you that what this program does, even
though the data is nonsense, appears to be the beginning of
a database management program, which indeed it is.  It is a
crude beginning, and has a long way to go to be useful, but
you should see a seed for a useful program.

Now to go back to the const as promised.  The number of
friends was defined as 50 and used for the size of the array
and in the assignment loop near the end of the program.  You
can now edit this number and see how big this database can
become on your computer.  Your compiler should be capable of
storing about 1000 records even within the smallest model
available on any compiler.  If your compiler uses a larger
memory model, you will be able to store significantly more
records.  See how big you can make the number of friends
before you get the memory overflow message.  Keep the number
in mind because when we get to the chapter on Pointers and
Dynamic Allocation, you should see a marked increase in
allowable size, especially if you have a large amount of RAM

                                                          11-4

                                          Chapter 11 - Records

installed in your computer.  If your compiler uses a large
memory model, you won't see an increase in size but it will
be an interesting exercise anyway.


A VARIANT RECORD
______________________________________________________________

If any part of this chapter is still unclear, it would be good
for you to go back and review it at this time.  The next
example will really tax your mind to completely understand it,
especially if the prior material is not clear.

Examine the program VARREC.MOD for an         ================
example of a program with a variant record       VARREC.MOD
definition.  In this example, we first        ================
define a scalar type, namely KindOfVehicle
for use within the record.  Then we have a record defining
Vehicle, intended to define several different types of
vehicles, each with different kinds of data.  It would be
possible to define all variables for all types of vehicles,
but it would be a waste of storage space to define the number
of tires for a boat, or the number of propeller blades used
on a car or truck.  The variant record lets us define the data
precisely for each vehicle without wasting data storage space.


WHAT IS A TAG-FIELD?
______________________________________________________________

In the record definition we have the usual record header
followed by three variables defined in the same manner as the
records in the last two example programs.  Then we come to the
case statement.  Following this statement, the record is
different for each of the four types defined in the associated
scalar definition.  The variable WhatKind is called the
tag-field and must be defined as a scalar type prior to the
record definition.  The tag-field selects the variant used,
when the program uses one of the variables with this record
type.  The tag-field is followed by a colon and its type
definition, then the reserved word OF.  A list of the variants
is then given, with each of the variants having the variables
for its particular case defined.  The list of variables for
one variant is called the field list.

A few rules are in order at this point.  The variants do not
have to have the same number of variables in each field list,
and in fact, one or more of the variants may have no variables
at all in its variant part.  If a variant has no variables,
it must still be defined with a blank followed by a
semi-colon.  All variables in the entire variant part must
have unique names.  The three variables, Wheels, Tires, and
Tyres, all mean the same thing to the user, but they must be
different for the compiler.  You may use the same identifiers

                                                          11-5

                                          Chapter 11 - Records

again in other records and for simple variables anywhere else
in the program.  The Modula-2 compiler can tell which variable
you mean by its context.  Using the same variable name should
be discouraged as bad programming practice because it may
confuse you or another person trying to understand your
program at a later date.


USING THE VARIANT RECORD
______________________________________________________________

We properly define four variables with the record type Vehicle
and go on to examine the program itself.

We begin by defining one of our variables of type Vehicle,
namely the variable named Ford.  The seven lines assigning
values to Ford are similar to the prior examples with the
exception of the fourth line.  In the fourth line the
tag-field which selects the particular variant used is set
equal to the value Truck, which is a scalar definition, not
a variable.  This means that the variables named Motor, Tires,
and Payload are available for use with the record Ford, but
the variables named Wheels, Engine, Tyres, etc. are not
available in the record named Ford.

Next, let's define the record Sunfish as a boat, and define
all of its variables.  All of sunfish's variables are defined
but in a rather random order to illustrate that they need not
be defined in a particular order.  Recall the use of with from
the last example program.

To go even further in randomly assigning the variables to a
record, we redefine Ford as having an Engine which it can only
have if it is a car.  This is one of the fine points of the
record.  If you assign any of the variant variables, the
record is changed to that variant, but it is the programmers
responsibility to assign the correct tag-field to the record,
not the Modula-2 compiler's.  Good programming practice would
be to assign the tag-field before assigning any of the variant
variables.  The remainder of the Ford variables are assigned
to complete that record, the non-variant part remaining from
the last assignment.

The variable named Mac is now assigned the value of the
variable Sunfish.  All variables within the record are copied
to Mac including the tag-field, making Mac a boat.


NOW TO SEE WHAT WE HAVE IN THE RECORDS
______________________________________________________________

We have assigned Ford to be a car, and two boats exist, namely
Sunfish and Mac.  Since Schwinn was never defined, it has no
data in it, and is at this point useless.  The Ford tag-field

                                                          11-6

                                          Chapter 11 - Records

has been defined as a car, so it should be true in the if
statement in line 54, and the first message should print.  The
Sunfish is not a bicycle, so the statement in line 63 will not
print.  The Mac has been defined as a boat in the single
assignment statement, so it will print a message with an
indication that all of the data in the record was transferred
to its variables.

Even though we can make assignment statements with records,
they cannot be used in any mathematical operations such as
addition, or multiplication.  They are simply used for data
storage.  It is true however, that the individual elements in
a record can be used in any mathematical statements legal for
their respective types.

One other point should be mentioned.  The tag-field can be
completely eliminated resulting in a "free union" variant
record.  This is possible because Modula-2, as you may
remember from above, will automatically assign the variant
required when you assign data to one of the variables within
a variant.  This is the reason that all variables within any
of the variants must have unique names.  The free union record
should be avoided in your early programming efforts because
you cannot test a record to see what variant it has been
assigned to.


A NOTE TO PASCAL PROGRAMMERS
______________________________________________________________

A record with a free union variant is commonly used in Pascal
to do type transfers, but this should be discouraged in
Modula-2 since it has a complete set of carefully defined type
transfer functions for that purpose.  In addition, the method
of data storage is not specified as a part of the language and
a free union would not operate the same way with different
compilers if used for the purpose of type transfer.


PROGRAMMING EXERCISE
______________________________________________________________


1.   Write a simple program with a record to store the names
     of five of your friends and display the names.








                                                          11-7

```
{% endraw %}

## CHAP12.TXT

{% raw %}
```

                                                    Chapter 12

                               POINTERS AND DYNAMIC ALLOCATION



PREREQUISITES FOR THIS MATERIAL
______________________________________________________________

In order to understand this chapter, you should have a good
grasp of the entirety of Part I and a clear understanding of
chapter 11.

For certain types of programs, pointers and dynamic allocation
can be a tremendous advantage, but many programs do not need
such a high degree of data structure.  For that reason, it
would probably be to your advantage to lightly skim over these
topics and come back to them later when you have a substantial
base of Modula-2 programming experience.  It would be good to
at least skim over this material rather than completely
neglecting it, so you will have an idea of how pointers and
dynamic allocation work and that they are available for your
use when needed.

A complete understanding of this material will require deep
concentration as it is very complex and not at all intuitive.
Nevertheless, if you pay close attention, you will have a good
grasp of pointers and dynamic allocation in a short time.



WHAT ARE POINTERS, AND WHAT GOOD ARE THEY?
______________________________________________________________

If you examine POINTERS.MOD, you will see     ================
a very trivial example of pointers and how      POINTERS.MOD
they are used.  In the var declaration,       ================
you will see that the two variables have
the two reserved words POINTER TO in front of their respective
types.  These are not actually variables, instead they point
to dynamically allocated variables that have not been defined
yet, and they are called pointers.  We will see, when we get
to chapter 14, that a pointer can be used to point to any
variable, even a statically defined one, but that will have
to wait awhile.

The pointer MyName is a pointer to a 20 character string and
is therefore not a variable into which a value can be stored.
This is a very special type, and it cannot be assigned a
character string, only a pointer value or address.  Likewise
MyAge is a pointer to an integer type variable even though it
has nothing to point at.  Note that neither pointer has
anything to point at yet.  Note that Modula-2 does not
initialize pointers automatically.  It is up to you to
initialize all pointers prior to using them.

                                                          12-1

                  Chapter 12 - Pointers and Dynamic Allocation

Your computer has some amount of memory installed in it.  If
it is an IBM-PC or compatible, it can have up to 640K of RAM
which is addressable by various programs.  The operating
system requires about 60K of the total, and your program can
use up to 64K assuming that your compiler uses a small memory
model.  Adding those two numbers together results in about
124K.  Any memory you have installed in excess of that is
available for the stack and the heap.  The stack is a standard
DOS defined and controlled area that can grow and shrink as
needed.  Many books are available to define the stack if you
are interested in more information on it.


WHAT IS THE HEAP?
______________________________________________________________

The heap is a Modula-2 entity that utilizes otherwise unused
memory to store data.  It begins immediately following the
program and grows as necessary upward toward the stack which
is growing downward.  As long as they never meet, there is no
problem.  If they meet, a run-time error is generated.  The
heap is therefore outside of the actual program and local data
storage space.

If you did not understand the last two paragraphs, don't
worry.  Simply remember that dynamically allocated variables
are stored on the heap and do not count in the 64K limitation
placed upon you by some compilers.

Back to our example program, POINTERS.MOD.  When we actually
begin executing the program, we still have not defined the
variables we wish to use to store data in.  We only have 2
pointers defined at this point in the program, and the data
space can be pictured graphically as shown in fig 12-1 where
a pointer is a box with a dot in it.  The first executable
statement in line 15 generates a variable for us with no name
and stores it on the heap.  Since it has no name, we cannot
do anything with it, except for the fact that we do have the
pointer MyAge that is pointing to it.  By using the pointer,
we can store any integer type variable in it, because that is
its defined type, and later go back and retrieve it.


WHAT IS DYNAMIC ALLOCATION?
______________________________________________________________

The variable we have just described is a dynamically allocated
variable because it was not defined in a VAR declaration, but
with an ALLOCATE procedure.  The ALLOCATE procedure creates
a variable of the type defined by the pointer, puts the new
variable on the heap, and assigns the address of the variable
to the pointer itself.  Thus MyAge contains the address of the
variable generated.

                                                          12-2

                  Chapter 12 - Pointers and Dynamic Allocation

The allocate procedure requires 2 parameters, the first of
which is a pointer which will be used to point to the desired
new block of dynamically allocated memory, and the second
which gives the size of the block in bytes.  The supplied
function TSIZE will return the size of the block of data
required by the type supplied to it as an argument.  Be sure
to use the type of the data and not the type of the pointer
to the data for the argument.  Another procedure is available
named SIZE which returns the size of any variable in bytes.

The statement in line 16 dynamically allocates an array type
variable which is large enough to store 20 char type data
points, and assigns its address to MyName.  The data space
would now appear as depicted in fig 12-2.  Following the
allocate statements, we have two assignment statements in
which the two variables pointed at are assigned values
compatible with their respective types, and they are both
written out to the video display.  Notice that both of these
operations use the ^ which is the dereference operator which
tells the system to store the data at the location where the
pointer is pointing.  By adding the dereference operator to
the pointer name, you can use the entire name just like any
other variable name.  Figure 12-3 is a graphical
representation of the data space after the data has been
assigned.

Lines 21 through 26 illustrate use of the stored data, and the
last two statements are illustrations of the way the
dynamically allocated variables are removed from use.  When
they are no longer needed, they are disposed of with the
DEALLOCATE procedure, and the space on the heap is freed up
for use by other dynamically allocated variables.


ARE POINTERS REALLY USEFUL?
______________________________________________________________

In such a simple program, pointers cannot be appreciated, but
it is necessary for a simple illustration.  In a large, very
active program, it is possible to define many variables,
dispose of some of them, define more, and dispose of more,
etc.  Each time some variables are deallocated, their space
is then made available for additional variables defined with
the allocate procedure.

The heap can be made up of any assortment of variables, they
do not have to all be the same.  One thing must be remembered.
Anytime a variable is defined, it will have a pointer pointing
to it.  The pointer is the only means by which the variable
can be accessed.  If the pointer to the variable is lost or
changed, the data itself is lost for all practical purposes.



                                                          12-3

                  Chapter 12 - Pointers and Dynamic Allocation

WHAT ABOUT THE NEW AND DISPOSE PROCEDURES?
______________________________________________________________

The new and dispose procedures are a carryover from Pascal and
are available on some Modula-2 compilers.  When they are
available, they are simply translated internally into calls
to allocate and deallocate which must be imported in order to
use new and dispose.  Since they are being removed from the
language definition, their use should be discouraged in favor
of the more universal allocate and deallocate procedures.


DYNAMICALLY STORING RECORDS;
______________________________________________________________

The next example program, DYNREC.MOD, is a    ================
repeat of one we studied in an earlier           DYNREC.MOD
chapter.  For your own edification, review    ================
the example program BIGREC.MOD before
going ahead in this chapter.

Assuming that you are back in DYNREC.MOD, you will notice that
this program looks very similar to the earlier one, and in
fact, they do exactly the same thing.  The only difference in
the type declaration is the addition of a pointer PersonID,
and in lines 30 and 31 of the var declaration, the variables
are defined as pointers, whereas they were defined as record
variables in the last program.


WE JUST BROKE THE GREAT RULE OF MODULA-2
______________________________________________________________

Notice in the type declaration that we used the identifier
Person in line 22 prior to defining it, which we said earlier
is illegal in Modula-2.  Foreseeing the need to define a
pointer prior to the record, the designer of Modula-2 allows
us to break the rule in this one place.  The pointer could
have been defined after the record in this particular example,
but it was more convenient to put it first, and in the next
example program, it will be required to define it ahead of the
record.  We will get there soon.

Examining the var declaration, we see that Friend is really
50 pointers, so we have now defined 53 different pointers to
records, but no variables other than Temp and Index.  Figure
12-4 illustrates the data space at this time.  We dynamically
allocate a record with Self pointing to it in line 36, and use
the pointer to fill the new record in lines 38 through 49.
Compare the statements that fill the record with the
corresponding statements in BIGREC.MOD and you will see that
they are identical except for the addition of the ^ to each
use of the pointer to designate the data pointed to.  Once
again, this is called dereferencing the pointer.

                                                          12-4

                  Chapter 12 - Pointers and Dynamic Allocation

THIS IS A TRICK, BE CAREFUL
______________________________________________________________

Now go down to the place where Mother is assigned a record and
is then pointing to the record.  It seems an easy thing to do
then to simply assign all of the values of Self to all the
values of Mother as shown in line 52, but it doesn't work.
All the statement in line 52 does, is make the pointer Mother
point to the same place where Self is pointing.  The data
space that was allocated to the pointer Mother is now
somewhere on the heap, but since we have lost the original
pointer to it, we cannot find it, use it, or deallocate it.
This is an example of losing data on the heap.  Figure 12-5
illustrates the data space at this time.  The proper way of
assigning data from one dynamically allocated record to
another is given in line 55 where all fields of Father are
defined by all fields of Mother which is pointing at the
original Self record.

Note that since Mother and Self are both pointing at the same
record, changing the data with either pointer results in the
data appearing to be changed in both because there is, in
fact, only one data field.

The loop in lines 57 through 60 dynamically allocates 50
records and uses the 50 pointers in the Friend array to point
to them, then fills each record with the data contained in the
record pointed to by the pointer named Mother.  Three values
are finally output to the monitor in lines 63 through 65 for
illustrative purposes.


A NOTE FOR PASCAL PROGRAMMERS
______________________________________________________________

In order to write from or read into a dynamically assigned
record it is necessary to use a temporary record since
dynamically assigned records are not allowed to be used in I/O
statements in Pascal.  This is not true in Modula-2, and you
can write directly out of a dynamically allocated record in
Modula-2.  This is illustrated in the section of the program
that writes some data to the monitor.  Notice line 62 where
the data from a dynamically allocated record is assigned to
all fields of a statically defined record.

Finally, the dynamically allocated variables are deallocated
prior to ending the program.  For a simple program such as
this, it is not necessary to deallocate them because all
dynamic variables are deallocated automatically when the
program is terminated, but the deallocate steps are included
for illustration.  Notice that if the DEALLOCATE(Mother)
statement was included in the program, the data could not be
found due to the lost pointer, and the program would be
unpredictable, possibly leading to a system crash.

                                                          12-5

                  Chapter 12 - Pointers and Dynamic Allocation

WHAT GOOD IS THIS ANYWAY?
______________________________________________________________

Remember when you were initially studying BIGREC.MOD?  I
suggested that you see how big you could make the constant
NumberOfFriends before you ran out of memory.  At that time
you probably found that it could be made slightly greater than
1000 before you got the memory overflow message at
compilation.  If your compiler uses a large memory model, you
may have been able to go much larger.  Try the same thing with
DYNREC.MOD to see how many records it can handle, remembering
that the records are created dynamically, so you will have to
execute the program to actually run out of memory.  The final
result will depend on how much memory you have installed, and
how many memory resident programs you are using such as
Sidekick.  If you are using a personal computer and have a
full memory of 640K, I would suggest you start somewhere
around 8000 records of Friend.  If you are using a
minicomputer, you may be able to store considerably more
records before running out of memory.
Now you should have a good idea of why dynamic allocation can
be used to greatly increase the usefulness of your programs.
There is, however, one more important topic we must cover on
dynamic allocation.  That is the linked list.


WHAT IS A LINKED LIST?
______________________________________________________________

Understanding and using a linked list is      ================
by far the most baffling topic you will         LINKLIST.MOD
confront in Modula-2.  Many people simply     ================
throw up their hands and never try to use
a linked list.  I will try to help you understand it by use
of an example and lots of explanation.  Examine the program
LINKLIST.MOD for an example of a linked list.  I tried to keep
it short so you could see the entire operation and yet do
something meaningful.

To begin with, notice that there are two types defined, a
pointer to the record and the record itself.  The record,
however, has one thing about it that is new to us, the last
entry, Next is a pointer to this very record.  This record
then, has the ability to point to itself, which would be
trivial and meaningless, or to point to another record of the
same type, which would be extremely useful in some cases.  In
fact, this is the way a linked list is used.  I must point out
that the pointer to another record, in this case called Next,
does not have to be last in the list, it can be anywhere it
is convenient for you.

A couple of pages ago, we discussed the fact that we had to
break the great rule of Modula-2 and use an identifier before
it was defined.  This is the reason the exception to the rule

                                                          12-6

                  Chapter 12 - Pointers and Dynamic Allocation

was allowed.  Since the pointer points to the record, and the
record contains a reference to the pointer, one has to be
defined after being used, and by rules of Modula-2, the
pointer can be defined first.  That is a mouthful but if you
just use the syntax shown in the example, you will not get
into trouble with it.  Figure 12-6 is a graphical
representation of the data space at this time.


STILL NO VARIABLES?
______________________________________________________________

It may seem strange, but we still will have no variables
defined, except for our old friend Index.  In fact, for this
example, we will only define 3 pointers.  In the last example
we defined 54 pointers, and had lots of storage room.  Before
we are finished, we will have at least a dozen pointers but
they will be stored in our records, so they too will be
dynamically allocated.

Let's look at the program itself now.  In line 26, we create
a dynamically allocated record and define it by the pointer
PlaceInList.  It is composed of the three data fields, and
another pointer.  We define StartOfList to point to the first
record created, and we will leave it unchanged throughout the
program.  The pointer StartOfList will always point to the
first record in the linked list which we are building up.

We define the three variables in the record to be any name we
desire for illustrative purposes, and set the pointer in the
record to NIL.  NIL is a reserved word that doesn't put an
address in the pointer but defines it as empty.  A pointer
that is currently NIL cannot be used to access any data
because it has no value, but it can be tested in a logical
statement to see if it is NIL.  It is therefore a dummy
assignment.  With all of that, the first record is completely
defined, and the data space is illustrated in figure 12-7.


DEFINING THE SECOND RECORD
______________________________________________________________

When you were young you may have played a searching game in
which you were given a clue telling you where the next clue
was at.  The next clue had a clue to the location of the third
clue.  You kept going from clue to clue until you found the
prize.  You simply exercised a linked list.  We will now build
up the same kind of a list in which each record will tell us
where the next record is at.

We will now define the second record.  Our goal will be to
store a pointer to the second record in the pointer field of
the first record.  In order to keep track of the last record,
the one in which we need to update the pointer, we will keep

                                                          12-7

                  Chapter 12 - Pointers and Dynamic Allocation

a pointer to it in TempPlace, which we do in line 35.  Now we
can create another new record in line 36 and use PlaceInList
to point to it.  Since TempPlace is still pointing at the
first record, we can use it to store the value of the pointer
to the new record in the old record which we do in line 37.
The 3 data fields of the new record are assigned nonsense data
in lines 38 through 40 for our illustration, and the pointer
field of the new record is assigned NIL.  See figure 12-8.

Let's review our progress to this point.  We now have the
first record with a name, composed of 3 parts stored in it,
and a pointer to the second record.  We also have a second
record storing a different name and a pointer assigned NIL.
We also have three pointers, one pointing to the first record,
one pointing to the last record, and one we used just to get
here since it is only a temporary pointer.  If you understand
what is happening so far, let's go on to add some additional
records to the list.  If you are confused, go back over this
material again.


TEN MORE RECORDS
______________________________________________________________

The next section of code beginning in line 45, is contained
within a FOR loop so the statements are simply repeated ten
times.  If you observe carefully, you will notice that the
statements are identical to the second group of statements in
the program (except of course for the name assigned).  They
operate in exactly the same manner, and we end up with ten
more names added to the list.  You will now see why the
temporary pointer was necessary, but pointers are cheap, so
feel free to use them at will.  A pointer generally uses only
4 bytes of memory.

One additional feature is illustrated in line 47.  The
function procedure named Available is used to determine if
there is enough space available on the heap to allocate the
record.  This function procedure call passes the desired size
to the procedure which returns a boolean value.  In this case,
because the program is so small, we ignore the result, but a
meaningful program should test prior to each allocation call
and if it got a false returned, it would need to perform some
error recovery routine.

After one pass through the loop, the data space will appear
as shown in figure 12-9.  Each pass through the loop will add
one new record to the list.  Further graphs will not be drawn
but will be left to the student to draw, if he so desires.

After completing the loop in lines 46 through 54, we have a
linked list of twelve entries.  We have a pointer pointing at
the first entry, and another pointer pointing at the last.
The only data stored within the program itself are three

                                                          12-8

                  Chapter 12 - Pointers and Dynamic Allocation

pointers, and one integer, all of the dynamically allocated
data is on the heap.  This is one advantage to a linked list,
it uses very little internal memory, but it is costly in terms
of programming.  You should never use a linked list simply to
save memory, but only because a certain program lends itself
well to it.  Some sorting routines are extremely fast because
they use a linked list, and it could be advantageous to use
in a database.


HOW DO WE GET TO THE DATA NOW?
______________________________________________________________

Since the data is in a list, how can we get a copy of the
fourth entry, for example?  The only way is to start at the
beginning of the list and successively examine pointers until
you reach the desired one.  Suppose you are at the fourth and
then wish to examine the third.  You cannot back up, because
you didn't define the list that way, you can only start at the
beginning and count to the third.  You could have defined the
record with two pointers, one pointing forward, and one
pointing backward.  This would be a doubly-linked list and you
could then go directly from entry four to entry three.

Now that the list is defined, we will read the data from the
list and display it on the video monitor in lines 58 through
66.  We begin by defining the pointer, PlaceInList, as the
start of the list.  Now you see why it was important to keep
a copy of where the list started.  In the same manner as
filling the list, we go from record to record until we find
the record with the value of NIL stored in its pointer.

Finally, it is necessary to deallocate the list, being careful
to check for the ending NIL value before you deallocate it.
It will be left for you to deallocate the records if you have
such a desire.

There are entire books on how to use linked lists, and some
Modula-2 programmers will seldom, if ever, use them.  For this
reason, additional detail is considered unnecessary, but to
be a fully informed Modula-2 programmer, some insight into
linked lists is necessary.


PROGRAMMING EXERCISES
______________________________________________________________

1.   Write a program to store a few names dynamically, then
     display the stored names on the monitor.  As your first
     exercise in dynamic allocation, keep it very simple.

2.   Add the necessary code to LINKLIST.MOD to deallocate all
     of the records.


                                                          12-9

                  Chapter 12 - Pointers and Dynamic Allocation

Note; The figures referred to in this chapter are graphics
      which are impossible to include in a text file.  Since
      there is no way to include them, we have made it possi-
      ble for you to obtain a copy of these figures.  See the
      READ.ME file for details.
















































                                                         12-10

```
{% endraw %}

## CHAP13.TXT

{% raw %}
```

                                                    Chapter 13

                                     MODULES, LOCAL AND GLOBAL



PREREQUISITES FOR THIS MATERIAL
______________________________________________________________

Before attempting to understand this material, you should have
a good grasp of the principles taught in Part I of this
tutorial.  None of the material from Part II is required to
do a meaningful study of modules in Modula-2.


WHAT GOOD ARE MODULES?
______________________________________________________________

Modules are the most important feature of Modula-2 over its
predecessor Pascal, making it very important for you to
understand what they are and how they work.  Fortunately for
you, there are not too many things to learn about them and
after you master them, you will find many uses for them as you
develop programs, and especially large programs.  Keep in
mind, as you study this material, that modules are meant to
organize a program to make it understandable to the original
programmer, and to the person assigned to do the maintenance
on the program.

Examine the program named LOCMOD1.MOD for      ===============
your first example of a program with an          LOCMOD1.MOD
embedded module.  Modules are nothing new      ===============
to you because every program you have
examined has been a module.  At this time, however, we will
introduce a local module.


WHAT IS A LOCAL MODULE?
______________________________________________________________

A local module is simply a module nested within another
module, just like the present example.  The module named
LocalStuff in lines 8 through 21 is nested within the main
module and is heavily indented for clarity.  Since nothing is
imported into the local module, nothing that belongs to the
main module can be seen from within the nested module.  In
addition, since the procedure GetNumber is the only thing
exported from the local module, nothing else is available to
the main module.  In effect, the local module is an
impenetrable wall through which nothing can pass without the
benefit of the import and export list.  In this case, the
variable Counter cannot be read or modified by the main
module, either intentionally or accidentally and the procedure
GetNumber will very stubbornly refuse to allow any flexibility
in its output, adding three to its internally stored variable
each time it is called.  It may seem to you that this result

                                                          13-1

                        Chapter 13 - Modules, Local and Global

can be accomplished easily by using another procedure without
the module but we will see shortly that it will not be the
same.

Throughout the following discussion of modules, keep in mind
that a module is an impenetrable wall through which nothing
can pass without use of an import or export list.


THE BODY OF THE LOCAL MODULE
______________________________________________________________

The body of the local module has one statement contained
within it in line 20, "Counter := 4;", which is executed only
when the module is loaded, and at no other time.  This is
therefore an initialization section for the module.  Any valid
executable statements can be put here and they will be
executed when the program is loaded, or you can omit the body
altogether by omitting the begin and any executable
statements.  Actually, this body is no different than the body
of the main program since it too is executed one time when the
program is loaded, except for the fact that the main program
is required to have a body or you will have no program.  The
body can have a return statement included in it.  If the
return statement is executed, the remainder of the body will
not be executed, but will be ignored.


THE MODULE VERSUS THE PROCEDURE
______________________________________________________________

We must digress a bit to see the difference in these two
important topics in Modula-2.  A procedure is an executable
section of code whereas a module is a grouping of variables,
constants, types, and procedures.  A module is not executed
since it is simply a grouping identifier, except of course for
the main module which is defined as the main program.
The variables in a procedure do not exist when it is not being
executed, but instead are generated dynamically when the
procedure is called.  A variable therefore, has a lifetime
associated with it in addition to a type and a scope of
visibility.  This may seem strange to you, but if you think
about it for awhile, it will help explain how recursive
procedure calls work.  The module, on the other hand, exists
anytime it's surrounding code exists, in this case, the main
program.  Since the module always exists, the variable Counter
also always exists because it is defined as a part of the
module.  If this variable were defined within a procedure, it
would be automatically regenerated every time the procedure
were called it and would therefore not remember the value it
contained the prior time the procedure was called.  We could
choose to define the variable as global and it would therefore
always be available and never regenerated, but we would be
left with the possibility of anything in the program modifying

                                                          13-2

                        Chapter 13 - Modules, Local and Global

it either accidentally or on purpose.  The ability to isolate
a variable and other objects from the rest of the program is
called information hiding, and has become a highly visible
topic in software engineering in recent years.  In a program
as small as this one, accidental corruption of data is not a
problem, but it is intended to illustrate the solution to a
problem embedded in a much larger program.

Suppose, for example, that you wished to generate random
numbers for some use within a program.  You could include all
of the code within a module using the module body for the seed
initialization, and a procedure to generate one random number
each time it was called.  The structure would be essentially
the same as that given here, but the actual code would be
different.  Nothing in the main program or any of its
procedures could in any way corrupt the job given to the
random number generator.


BACK TO THE EXAMPLE PROGRAM
______________________________________________________________

In this case we have one local module defined within the main
module but as many as desired could be used, and we have one
procedure in the local module whereas we could have as many
as desired.  In fact, we could have local modules embedded in
a procedure, or in other local modules.  There is no real
limit as to how you can structure your program to achieve the
desired results.  One thing must be remembered.  If you embed
a local module within a procedure, all of it's variables are
defined dynamically each time the procedure in which it is
embedded is called, and the local module's body is also
executed each time the procedure is called.  This can be used
to advantage in some situations, but it would be best to leave
this construct to the future when you have more experience
with Modula-2.

In the body of the main module you will find nothing new
except for the call to the function procedure GetNumber()
which is really nothing new to you.  Since GetNumber() is
exported from the local module, it is available for use in the
main program.  Compile and run the program to see if it does
what you expect it to do.


TWO LOCAL MODULES
______________________________________________________________

It would be well to point out at this time that if you define
two local modules at the same level, one could export a
variable, procedure, constant, or type and the other could
import it and use it in any legal fashion.  If a record or
enumeration type is exported, all of the associated
identifiers are exported also, and are available anyplace the

                                                          13-3

                        Chapter 13 - Modules, Local and Global

type is imported.  You therefore have the ability to very
carefully define the mechanism by which the two modules
interact.

It is even possible to export procedures of the same name from
more than one module, but at least one is required to use a
qualified export to prevent a name clash.  More will be said
about this later.

Of course, as you probably realize by now, anything exported
from either of the two local modules are available for use by
the main program without importing them.


ANOTHER LOCAL MODULE
______________________________________________________________

The program we have been inspecting had        ===============
the procedure exported without                   LOCMOD2.MOD
qualification, so it could only be             ===============
referred to by its simple name.  This
could have led to a naming conflict which can be solved by
using a qualified export as is done in the next program.
Examine the program named LOCMOD2.MOD.  This program is very
similar to the last one except for moving the output
statements to the procedure.
First, you should notice that the procedure name is exported
using EXPORT QUALIFIED which allows the use of the qualified
call to the procedure in line number 25.  There can never be
a conflict of names in calling a procedure this way because
it is illegal to use the same name for a module more than once
at any level.  In a local module, you have a choice of using
either qualified or unqualified export of items, but the
exported items must all be of the same export type because
only one export list is allowed per module.


IMPORTING INTO A LOCAL MODULE
______________________________________________________________

The three output procedures are used in the local module
MyStuff, but because it is only permissible to import items
from a module's immediate surroundings, the procedures must
first be imported into the main module.  Remember that a
module is actually an impenetrable wall which nothing can get
through without benefit of being imported or exported.  The
display output procedures are imported into the main module
in line 4, but they are not automatically imported into
MyStuff.  Line 9 is required to import them into the local
module.  They had to be imported through two barriers in this
case.

The procedure named WriteStuff is even more tightly controlled
than that in the last program because this one doesn't even

                                                          13-4

                        Chapter 13 - Modules, Local and Global

return a value to the calling program.  It updates its own
internally stored value, displays it, and returns control to
the calling program.

Compile and execute this program, and when you are sure you
understand the new concepts covered here, we will go on to
global modules.


GLOBAL MODULES
______________________________________________________________

As useful as local modules are, they must take a back seat to
the global module with which you are already fairly familiar
because you have been using them throughout this tutorial.
The modules InOut, Terminal, and FileSystem are examples of
global modules that you already know how to use.  Now you will
learn how to write your own global modules that can be
imported and used in any program in exactly the same way as
these standard modules.
A global module is not executable, it is simply a collection
of related types, variables, and procedures.  It is meant to
group items in a meaningful way.


YOUR FIRST DEFINITION MODULE
______________________________________________________________

In order to get started, examine the           ===============
program named CIRCLES.DEF at this time.          CIRCLES.DEF
The first thing you will notice is that we     ===============
used a different extension for this file
because there is another part to the program with the same
name and the usual extension MOD.  This is the definition part
of the global module and it serves two very important
purposes.  First, it defines the interface you need to use the
module in one of your programs, and secondly, it defines the
details of the interface for the compiler so it can do type
checking for you when you call this module.  The Modula-2
compiler uses the information contained here to check all
types and numbers of variables during separate compilation,
just like it would do in a program compiled as a complete
unit.

This program actually does very little.  In fact, its purpose
is to do nothing because there are no executable statements
in it.  It is only to define the interface to the actual
program statements contained elsewhere.  Notice that the
procedures are exported using the qualified option.  All
identifiers that are exported from a definition module must
be qualified so that the user has the option of importing them
either way.  It is legal to export procedures, variables,
constants, or types for use elsewhere as needed for the
programming problem at hand, but the majority of exported

                                                          13-5

                        Chapter 13 - Modules, Local and Global

items will probably be procedures.  It should be obvious that
nothing within the module is available to any other part of
the program unless it is exported.

The export list is not actually required because according to
the Modula-2 definition, all identifiers in a definition
module are automatically exported.  Most experienced
programmers include the export list for explicit
documentation.


WHAT ABOUT QUALIFIED EXPORT?
______________________________________________________________

If the identifiers are exported using the qualified export,
the user has a choice of importing using the qualified method
or the unqualified method.  If the entire module is imported
using the qualified form;

     IMPORT Stuff;

then the various entities must be referred to using the
qualident form such as Stuff.ProcedureName.  If the module is
imported using the unqualified form;

     FROM Stuff IMPORT ProcedureName, ...;

then the various entities have the qualifier removed, and the
simple procedure names can be used to refer to the procedures
and variables.

Once again, we need to discuss a new construct in Modula-2.
The newest and preferred method of importing a module using
the qualified form is given as;

     FROM Stuff IMPORT;

This is identical to the qualified form given above because
it imports all entities and the programmer is required to use
the qualident form in the program, but it greatly simplifies
the compiler writers job.  It will eventually be required, but
at this point in time, few compilers will require it so the
alternate form will be used in this edition of the Modula-2
tutorial.


THE IMPLEMENTATION MODULE
______________________________________________________________

We are not finished with the definition        ===============
part of the module yet but we will look at       CIRCLES.MOD
the implementation part of it for a few        ===============
moments.  Examine the program named
CIRCLES.MOD at this time.  This is the part of the module that

                                                          13-6

                        Chapter 13 - Modules, Local and Global

actually does the work.  Notice that there are three
procedures here, two of which were defined in the definition
part of the module making them available to other programs.
The procedure named GetPi, in lines 4 through 7, is a hidden
or private procedure that is only available for use within
this module.  The other two procedures are available to any
program that wishes to use them provided it imports them
first, just as we have been doing with other procedures in
this tutorial.  They are therefore referred to as visible
procedures.


Anything defined in the definition part of the module is also
available here for use without redefining it, except for the
procedure headers, which must be completely defined in both
places.

Note that export is not allowed from an implementation module
since the definition module defines the external interface and
anything in the implementation module is hidden.



MORE ABOUT THE USE OF TWO PARTS
______________________________________________________________

The definition part of the module defines the public
information about the module and the implementation part of
the module defines the private or hidden information about the
module.  It may seem sort of silly to go to the trouble of
separating a module into two parts but there are at least
three good reasons for performing this separation.

1.   You may not care how the module is implemented.  In all
     of the programs we have run up to this point, you
     probably didn't care how the WriteString procedure did
     its job.  You only wanted it to do the job it was
     supposed to do to aid you in learning to use Modula-2
     efficiently.  It would have been senseless to have
     cluttered your monitor with the details of how it worked
     every time you wanted to know how to use it.

2.   It hides details of implementation.  If you were working
     on a large programming project and you were assigned the
     job of writing a procedure for others to use that did
     some well defined task, you would define the interface
     carefully and be finished.  If, however, one of the users
     studied your detailed code and found a way to trick it
     into doing something special, he may use the trick in his
     part of the program.  If you then wanted to improve your
     routine and remove the code that allowed the trick, the
     interface would no longer work.  To prevent this, you
     give others only the interface to work with and they
     cannot look for tricks.  As mentioned earlier, this is

                                                          13-7

                        Chapter 13 - Modules, Local and Global

     called information hiding and is a very important
     technique which is used on large projects.

3.   It allows for orderly development.  It is possible to
     define all of the definition parts of the modules and
     have all members of the development team agree to the
     interface.  Long before the details of the individual
     procedures are worked out, the entire team knows what
     each procedure will do and they can all begin detailed
     work on their respective parts of the overall system.
     This is very effective when used on a large team effort.


COMPILATION ORDER IS IMPORTANT
______________________________________________________________

In order for the above principles to work effectively, a very
definite order of compilation must be adhered to.  If the
identifiers declared in the definition part are automatically
available in the implementation part of the module, then it
is obvious that the definition part must be compiled before
the implementation part of the module can be compiled.  Also,
if the definition part is modified and recompiled, then the
implementation part may also require modifications to comply
with the changes and it must also be recompiled.

The next rule is not nearly so obvious but you will understand
it when we explain it.  When a calling module is compiled, it
checks each of the imported identifiers to see that the types
and number of variables agree with the calling sequences used
in the program.  This is part of the strong type checking done
for you by Modula-2.  If you modify and recompile one of the
called definition modules and attempt to link the program
together, you may have introduced a type incompatibility.  In
order to prevent this, Modula-2 requires you to recompile
every module that calls a modified definition module.  It does
this by generating a key when you compile a definition module
and storing the key when you compile the calling module.  If
you attempt to link a program with differing keys, this
indicates that the definition module was changed, resulting
in a new key and hence a mismatch, and the linker will
generate an error.


WHY ALL OF THIS TROUBLE?
______________________________________________________________

It may not seem to be worth all of the extra trouble that the
Modula-2 compiler and linker go through to do this checking,
but it is important for a large program.  The information used
in the definition part of the module is the type of
information that should be well defined in the design stages
of a programming project, and if well done, very few or no
changes should be required during the coding phase of the

                                                          13-8

                        Chapter 13 - Modules, Local and Global

project.  Therefore it is expected that recompiling several
definition modules should not happen very often.  On the other
hand, during the coding and debugging phase of the project,
it is expected that many changes will be required in the
implementation parts of the modules.  Modula-2 allows this and
still maintains very strong type checking across module
boundaries to aid in detecting sometimes very subtle coding
errors.

The above paragraph should be interpreted as a warning to you.
If you find that you are constantly recompiling modules due
to changes in the definition modules, you should have spent
more time in the software design.



NOW TO ACTUALLY USE IT ALL
______________________________________________________________

With all of that in mind, it will be necessary for you to
reload the program named CIRCLES.DEF which is the definition
part of the module, and compile it.  Your compiler will
generate several different files for use in cross checking.
After you get a good compile, reload the program named
CIRCLES.MOD which is the implementation part of the module and
compile it.  During this compile, some of the files generated
by CIRCLES.DEF will be referred to.  It would be an
interesting exercise to modify a procedure call in one of the
programs to see what kind of an error is displayed.  After a
good compile on both of these modules, you have a new module
in your library that can be used just like any of the other
global libraries that came with your compiler.  This module
cannot be executed because it does not contain a main program,
it is only a collection of useful procedures.

Examine the program GARDEN.MOD for an         ================
example of a program that calls and uses         GARDEN.MOD
your new library or global module.  This      ================
program is very simple and should pose no
problem in understanding for you.  The two new procedures are
imported and used just like any other procedure.  Be sure to
compile and run this program.

Examine the program named GARDEN2.MOD for      ===============
an example of the use of unqualified             GARDEN2.MOD
import.  In this case, we input all            ===============
exported procedures and must use the
qualifier for each call as illustrated in lines 12 and 13.
The program executes identically to the last program, but be
sure you compile and execute it to verify that it really is
identical.



                                                          13-9

                        Chapter 13 - Modules, Local and Global

A FINAL WORD ABOUT GLOBAL MODULES
______________________________________________________________

From the above description of global modules, it may not be
very obvious to you that it is perfectly legal for one global
module to call another which in turn calls another, etc.
Program structure is entirely up to you.  For example, we
could have called WriteString and some of our other familiar
procedures from within the AreaOfCircle procedure.  The order
of compilation must be kept in mind , however, or you will not
get a good compilation and linking of your completed program.

Remember that there is nothing magic about the global or
library (the names are synonymous) modules supplied with your
compiler.  They are simply global modules that have already
been programmed and debugged for you by the compiler writer.
This is probably a good time to mention to you that you may
have only received the source code for the definition part of
the library modules with your compiler.  Many compiler writers
will supply the source code for the implementation part of the
library modules only if you supply them with a little more
money.  After all, they are in business for the money and most
people never wish to modify the supplied routines but are
happy to use them as is.  Compiler writers must supply you
with the definition part of the library modules because they
are your only means of interfacing with them.


THE OPAQUE TYPE
______________________________________________________________

The opaque type is illustrated in the         ================
example program named OPAQUETY.DEF.             OPAQUETY.DEF
Examination of line 6 will reveal that the    ================
actual type is not defined, only its name.
In this case the structure of the type will be hidden from the
user of this module in order to effect a measure of
information hiding, which we mentioned earlier.  You will
notice that the opaque type (so called because it is hidden
from view) is used in each of the procedure headers.  The type
is used once in each header, but it could be used more times
if needed, or not used at all if the problem dictated it.
The next example program named                ================
OPAQUETY.MOD gives the implementation of        OPAQUETY.MOD
the complete module and as you can see,       ================
the type is completely defined here as a
pointer to a record.  Since the definition is in the
implementation module, it is effectively hidden from view to
the outside world.  You should have no problem understanding
the details of the implementation.

The example program named OPTYPE.MOD makes use of the opaque
type exported from the OpaqueType module.  There are a few
rules which must be followed here.  Since the structure of the

                                                         13-10

                        Chapter 13 - Modules, Local and Global

opaque type is not exported, the user         ================
cannot work with individual elements, but        OPTYPE.MOD
can only use the procedures made available    ================
to him by the writer of the module.  The
only operations which the user is allowed to do on variables
of the opaque type are assignment as illustrated in lines 12
through 14, and comparison for equality or inequality as
illustrated in line 29.

Only the simple types and pointers are allowed to be used as
opaque types, according to the original definition of Modula-
2.  The newest additions to the language allow the use of
records and arrays also, but since most compilers do not have
this feature added yet, they are not illustrated here.  The
preceeding three files could be easily changed to export an
opaque type of a record if your compiler supports it.


THE PROCEDURE TYPE, SOMETHING NEW
______________________________________________________________

Examine the program named PROCTYPE.MOD for    ================
an example of a procedure type.  In line        PROCTYPE.MOD
6, we define a variable named OutputStuff     ================
to be a procedure type of variable that
requires an ARRAY OF CHAR as an argument.  This variable name
can now be used to refer to and call any procedure that uses
a single ARRAY OF CHAR as an argument.

In the definition part of the program two procedures are
defined, each of which uses a single ARRAY OF CHAR as an
argument.  In the main program, the variable OutputStuff is
successively assigned each of the new procedures and used to
call them.  In addition, it is used to call the supplied
procedure WriteString to illustrate the possibility of doing
so.  Finally, the procedures are all called in their normal
manner to illustrate that there is nothing magic about them.
Any procedure type can be used to call any procedures that use
the same number and types of parameters as those defined when
it is created as a variable.

This is a relatively new operation since it is not available
in the other popular programming languages.  It is also a
construct that you will not use very much, if ever, so nothing
more will be said about it in this tutorial.







                                                         13-11

```
{% endraw %}

## CHAP14.TXT

{% raw %}
```

                                                    Chapter 14

                                  MACHINE DEPENDENT FACILITIES



PREREQUISITES FOR THIS MATERIAL
______________________________________________________________

Before attempting to study this material, you should
understand the material presented in Part I of this tutorial
and have a clear understanding of the material on pointers in
Part II.



THIS IS WHERE YOU CAN GET INTO TROUBLE
______________________________________________________________

Modula-2 does a good job of insulating you from the underlying
peculiarities of your computer due to the strong type checking
which it does.  It can prevent you from making many kinds of
rather stupid blunders simply by forcing you to follow its
predefined conventions.  There are times, however, when you
wish to ignore some of its help and do something that is out
of the ordinary.  If you had a need to directly interface with
some external device, you would need to get down to the nitty
gritty of the operating system and do some things that are
outside of the realm of normal programming practice.

The principles taught in this chapter can lead you directly
into the operating system where you will have more freedom
than you would have thought possible with Modula-2, but it
will place more responsibility on you.  This material is only
for the advanced programmer because it will require a
knowledge of the inner workings of the computer and the
operating system.  Nevertheless, it would be good for you, as
a student of Modula-2, to at least read this material, study
the example programs, and compile and run them.  You will then
have a store of knowledge of these things so that you can use
them when you need them.



TYPE RELAXATION EXAMPLE
______________________________________________________________

Examine the program named TYPEREL.MOD for      ===============
an example of a program with some very           TYPEREL.MOD
unusual type transfer functions.  Note         ===============
first that three types are defined, each
being the same size considering storage requirements.  The
first type is 10 integers, the second is 10 cardinals, and the
third is 20 char variables which requires the same amount of
storage as 10 integers or cardinals on most microcomputers.
If you are using a larger computer, you may need to adjust

                                                          14-1

                     Chapter 14 - Machine Dependent Facilities

some of these to make them the same size.  The fact that all
three types are the same size is very important for what we
will do later in the program.

We begin the program part of the module by assigning the value
10 to the variable Count, a cardinal type variable.  In the
next line we assign the value of Count to Index even though
they are of different types because we transform the type in
the same manner that we did back in Chapter 3 when we studied
the program named TRANSFER.MOD.  Actually, we don't need the
type transformation here because integer and cardinal are
assignment compatible.

We load up the integer array named IntVars with some nonsense
data to work with, the data being the series of numbers from
65 to 74, which should be easy for you to ascertain.  Then in
line 23, we copy one of the array data points to one of the
other to illustrate that the type transformation works even
on array elements.



NOW FOR THE BIG TYPE TRANSFORMATION
______________________________________________________________

In line 24 of the program we copy the entire field of 10
integer type variables into the array of 10 cardinal type
variables.  The only restriction is that both of the fields
must be exactly the same size which these two are.  In order
to do the transformation, the type of the resulting data area
is used in front of the parentheses of the source variables.
Line 25 goes a step farther and copies the new cardinal data
into 20 char type variables, which is permissible because 20
char variables uses the same amount of storage as 10 cardinal

variables.  You could even transform a record made up of
several different types into all char variables, or all
integers, or even another completely different record.  The
only requirement is that both of the groups be exactly the
same size.

This may appear to be a really neat thing to be able to do but
there are problems that you will find with this new
transformation.  There are no data conversions done, only type
conversions where the data is copied byte for byte with no
concern for the meaning of each byte, which means that you may
wind up with a real mess trying to decipher just what the
transformed data means.  This is called type coercion and is
simply a byte for byte copy with no concern for the meaning
of each bit in the data pattern.  In addition, since each
compiler may define the various types of data slightly
different, your program will not be easily transportable to
another computer, or maybe not even to another Modula-2
compiler on the same computer.

                                                          14-2

                     Chapter 14 - Machine Dependent Facilities

Five of the cardinal numbers are displayed on the monitor,
then 10 of the char numbers are displayed to show you that
they really are the same numbers.  The order of the numbers
may be reversed when output as individual bytes because of
the way the data is stored in the microprocessor in your
computer.  This in itself is an indication that there is no
data conversion, but only a data copying, byte by byte.

One other rule must be pointed out, you cannot do a data
transformation within a function call, but it is simple enough
to do the transformation to a dummy variable and use the dummy
variable in the function call if that is necessary.  This will
be illustrated shortly.  Compile and run this program after
you study it.



WORD AND ADDRESS VARIABLES
______________________________________________________________

Examine the program named WORDADDR.MOD for    ================
an example using some new data types.  In       WORDADDR.MOD
order to get down to the lowest level of      ================
the machine, we need these new types, ADR,
WORD, and ADDRESS, which must be imported from the pseudo
module SYSTEM.  The pseudo module SYSTEM does not exist as an
external module as the others do because the kinds of things
it does are closely associated with the compiler itself.  The
designers of Modula-2 have therefore defined this module to
make these things available to us, and we import them just as
if the pseudo module SYSTEM existed as a regular library
module.

The new data type WORD is compatible with all data types that
use a single word for storage, but it is somewhat limited in
what you can do with it.  It is most useful as the formal
argument to a function which can be called with any data type
that is contained in one word.  In lines 27 and 28, the same
procedure is called, once with an integer type variable, and
once with a cardinal type variable.  Since the procedure is
designed to handle either, it will print out both numbers by
converting them first to cardinal using the type
transformation in line 17, then calling the output procedures.
Once again, the type transformation cannot be done in the
procedure call so a temporary variable is used.



A NEW KIND OF POINTER
______________________________________________________________

The variable Peach is assigned the type ADDRESS which is also
imported from the pseudo module SYSTEM, and is therefore a
pointer to any word type of variable.  Peach can therefore

                                                          14-3

                     Chapter 14 - Machine Dependent Facilities

point to an integer or a cardinal as is done in lines 25 and
26.  The procedure ADR returns the address of any word type
of variable and it too must be imported from the pseudo module
SYSTEM.


ABSOLUTE ADDRESSES
______________________________________________________________

Notice the two strange looking variables in lines 10 and 11.
The variable MonoVideo is an array of 4000 char type
variables, but we have forced it to be located at a very
specific location in memory, namely at segment=B000(hex) and
offset=0000(hex).  This is the method provided for you by
Modula-2, by which you can force a variable to be at a
specific memory location.  In this case we have defined the
variable to be stored in the locations in memory where the
monochrome monitor display is stored so we can store data
directly into the monochrome monitor display area if we are

using an IBM-PC or compatible running MS-DOS.

The variable ColorVideo is the same except that the location
referenced is that area where the output for a color monitor
is stored on an IBM PC or compatible.  It should be apparent
that you can gain control over the actual hardware with this
capability but it does require a lot of knowledge of the
hardware and the operating system.

In the last line of the program the variable Peach is assigned
the address of a specific location as an illustration only.
This is only possible because Peach is a variable of type
address.  Your computer and compiler may use an entirely
different method of address specification than that
illustrated here.  It will be up to you to study your
documentation for the details of your particular system.

It should be clear to you that with these functions, it is
possible to do a lot of data shuffling that could not
otherwise be done.  The next example program will illustrate
their use further.



MORE ADDRESSING EXAMPLES
______________________________________________________________

Examine the program named ADRSTUFF.MOD.       ================
This program uses the address type and          ADRSTUFF.MOD
adds two new, rather simple functions,        ================
SIZE and TSIZE.  Actually, these are not
completely new since we used the TSIZE function in the chapter
on pointers and dynamic allocation.  These two functions will
return the size in bytes of any variable or of any type.  The
program on your monitor has several types defined, then

                                                          14-4

                     Chapter 14 - Machine Dependent Facilities

several variables, and finally initializes all of the elements
of the array Stuff to some nonsense data.  The really
interesting things begin happening at line 25.

The pointer NeatPoint is pointed at the first element of the
array Stuff, and its value is dereferenced into Index.  The
type transformation is required because the result of the
dereferencing is a cardinal type value.  The data is written
out to the monitor.  Next the size of the type IntArray is
assigned to the variable IncreAmt, which should be 8 words or
16 bytes, but may be different with you computer ans compiler.
In line 29 we do some pointer arithmetic by adding the size
of the type IntArray to the original value of the pointer
which should cause it to point to the next row of the array.
After dereferencing the pointer and getting its new value, we
print it out to find that it did indeed move to the next row
of the array.  Based on the above discussion, it should be
apparent to you that you can move the pointer all around the
array named Stuff and get whatever data you wish.

The next section of the program uses a loop to continue the
process through all five rows.  The only thing that may be
confusing is line number 34 where we get the size of the
BigArray type and divide it by the size of the IntArray type.
The result should be 5, and you will see that it does five
iterations through the loop.  This is really a dumb way to get
through this particular loop but it is only for purposes of
illustration that it is done.  Notice all of the type
transformations to integer in these statements, this is
because the functions all return a cardinal type of data.
Doing all of this in cardinal numbers would have made it much
cleaner, but this was more illustrative for you.



TWO MORE LINES OF ILLUSTRATION
______________________________________________________________

Lines 42 and 43 are given as an illustration for you of how
to use the SIZE function.  It simply returns the size, in
bytes, of any variable used as an argument.

Even though we went to a lot of trouble to illustrate and
explain the pointer operations in the last program, you should
be discouraged from using this technique for software
development.  In this case, you should use the usual method
of working your way through the array rather than through use
of this confusing and obscure method of using pointer
arithmetic.  You will find places where pointer arithmetic
can be used to great advantage, but until then, you should
favor the use of the clear and easy to understand constructs
available in Modula-2.


                                                          14-5

                     Chapter 14 - Machine Dependent Facilities

PROGRAMMING EXERCISES
______________________________________________________________

1.   Modify ADRSTUFF.MOD to print out some of the type and
     variable sizes such as those calculated in lines 41 and
     42.

2.   Write a program with an array of 100 CARDINAL elements,
     fill the elements with nonsense data, and use a pointer
     to print out every 12th value starting at the highest
     element (number 100) and working downward.










































                                                          14-6

```
{% endraw %}

## CHAP15.TXT

{% raw %}
```

                                                    Chapter 15

                                                   CONCURRENCY



PREREQUISITES FOR THIS MATERIAL
______________________________________________________________

In order to understand this material you should have a good
grasp of the material in Part I of this tutorial, and at least
a cursory knowledge of the material in chapter 14 concerning
the pseudo module SYSTEM and especially the ADR and SIZE
functions.


WHAT IS CONCURRENCY
______________________________________________________________

True concurrency is when two processes are taking place at
exactly the same time with neither affecting the other in a
degrading way.  This is possible in many areas of your life,
such as when the grandfather clock is running at the same time
as the furnace and the television set.  These are different
processes all running at the same time.  In the field of
computers, true concurrency requires at least two separate
processors that are running completely separate programs or
different parts of the same program.

Usually, when computers are said to be running concurrent
processes, reference is being made to a time sharing situation
in which two or more programs are swapped in and out of the
computer at a rapid rate, each getting a small slice of time,
a few milliseconds being typical.  Each process appears to be
running constantly but is in fact only running a small part
of the time, sort of stuttering.  The swapping in and out is
taking place so fast that, to the casual user, it appears that
the entire computer is working on only his program.
Concurrent programs must deal with asynchronous events that
occur at arbitrary times.



WHAT IS MODULA-2 CONCURRENCY?
______________________________________________________________

Most literature about Modula-2 uses the term concurrency to
discuss the topic of two or more processes operating at the
same apparent time, but the term coprocessing is more
descriptive and will be used in this tutorial.  Coprocessing
can be defined as two or more asynchronous processes happening
in such a way that they interact in some way, so that some
level of coordination must be carried on between them.  An
example would be a text processor that is busy updating the
video monitor between input keystrokes.

                                                          15-1

                                      Chapter 15 - Concurrency

Modula-2 provides the necessary constructs to implement
coprocesses.  We will define and illustrate most of them in
this chapter but we will begin with a short example program
as we have with all new topics.


OUR FIRST COROUTINE
______________________________________________________________

Examine the program named COROUT.MOD for      ================
our first look at this new technique.            COROUT.MOD
Without lots of explanation, there are        ================
several new items imported and a few
variables defined, the most interesting being the three
variables declared that are of type PROCESS.  These will be
the three process variables we will use in this example, and
we will say more about the process type variable later.  There
are two procedures defined in lines 13 through 36 which define
what the processes will do.  It must be noted that these
procedures must be parameterless, no formal parameters
allowed.  Many of the details of these procedures will be
explained in the next few paragraphs.  Finally we come to the
main program which is where we will start to define how to use
the two processes.

In the main program, we call the procedure NEWPROCESS which
loads a new process without running it.  We give it the name
of the procedure where the process can be found, in this case
MainProcess, and give the system a workspace by assigning a
previously defined array to it.  This is done by giving the
system the address and the size of the array in the next two
actual parameters.  Finally, we give it the name of the
process variable.  Note that the workspace must be sufficient
for the new process to store all of its variables, so give the
process a generous workspace.  In this case, we give the
workspace 300 words.  If it is too small, a runtime error will
be generated.  We then load a second process in preparation
for running the program by calling NEWPROCESS again with
different formal parameters for the other process named
SubProcess.


WHAT DID NEWPROCESS DO?
______________________________________________________________

Each time we call NEWPROCESS, it loads a copy of the procedure
named in the first actual parameter into the address space of
the system at the location specified by the second actual
parameter.  It also stores a copy of the starting address of
this procedure in the process variable named in the fourth
actual parameter.  The process variable is a record that can
store the entire state of a process.  We will see more about
this record variable in the remainder of this chapter.

                                                          15-2

                                      Chapter 15 - Concurrency

The end result of execution of both procedure calls in lines
39 and 41 is that we have two procedures stored along with all
of their local variables, in this case only the single
variable defined in line 13, and we have two process variables
stored.


HOW DO WE GET IT STARTED?
______________________________________________________________

When we began executing the main program, we actually loaded
and started a process, the one we are presently executing and
this process stays resident in memory and active throughout
the period of execution of the program.  We have done this for
every program in this tutorial so far but paid no attention
to it as far as referring to it as a process.  To transfer
control to a different process, we use the transfer function
with the name of a process variable for the process we wish
to terminate and another process variable for the process we
wish to start.  The current state of the hardware processor
is stored in the first process variable mentioned, and the
state of the second process variable named is loaded into the
hardware processor.  This effectively transfers control to the
second process.

This is illustrated in line 43 from which we jump to line 15
in the process named Process1.  In Process1 we begin a FOR
loop where we write a string and a cardinal number then when
Index exceeds 2, we do another transfer, this time from
Process1 to Process2.  The transfer procedure in line 19
stores the current state of the hardware processor in the
process variable named Process1 and retrieves the machine
state from Process2, stores it in the hardware processor, and
jumps to the new process.  The jump is effected automatically
since the instruction counter is part of the process variable.
Thus we jump from line 19 in the first procedure to line 31
in the second where we begin an infinite loop.  We display
another string in line 32 and once again execute another
transfer from line 33 to somewhere.  This transfer causes the
current state of the hardware processor to be stored in
Process2 and retrieves the state from process1 and stores it
in the hardware processor.  Since the state stored in the
process variable named Process1 was stored there at statement
19, the address of the next line is a part of this state and
the program counter is automatically set to the address where
line 20 is stored and execution is returned there.


WHERE DO WE RETURN TO A COROUTINE?
______________________________________________________________

Instead of jumping to the beginning of the procedure named
MainProcess again, which would be line 15 in this example, we
return to the statement following the one we transferred away

                                                          15-3

                                      Chapter 15 - Concurrency

from.  In this case we will return from line 33 to line 20
and complete the loop we started earlier.  When Index is
increased to 4, we will once again transfer control from line
19 to the state stored in Process2, but instead of jumping to
line 31 we will return where we left off there at line 34.
That loop will complete, and we will once again return to line
20.  When the for loop in MainProcess finishes, we execute
lines 24 and 25 in normal sequential fashion, then the
transfer in line 26 will load the data stored in the process
variable named main effectively returning control to the main
module body where we will arrive at line 44.  From there we
complete the last two write statements, then do a normal exit
to the operating system.

This example of coprocess usage was defined step by step as
a beginning into this topic.  If it was not clear, reread the
entire description until you understand it.  There is really
nothing else to know about coroutines other than the knowledge
gained by experience in using them, which is true of any new
principle in computer programming or any other facet of life.


WHAT WAS ALL THAT GOOD FOR?
______________________________________________________________

The thing that is really different about coroutines is the
fact that they are both (or all three or more) loaded into the
computers memory, and they stay loaded for the life of the
program along with their local variables.  This is not true
of normal procedures.  It is transparent to you, but variables
local to a procedure are not all simply loaded into the
computer and left there.  They are dynamically allocated and
used each time the procedure is called, then discarded when
the procedure completes its job.  That is why variables are
not saved from one invocation of a procedure to the next.  The
variables which are defined in the outer layer of a process
are loaded once, and stay resident for the life of the
process.

In the example program under consideration, all three
processes including the main program are loaded and none is
really the main program since any of the programs have the
ability to call or control the others.  Rather than the strict
hierarchy of calling, as is done with procedures, the
coroutines are all at the same hierarchical level.

Examine the program named COROUT2.MOD for      ===============
the second example with coroutines.  This        COROUT2.MOD
program is identical with the last one         ===============
except that two lines are removed from the
first process and placed in a normal procedure which is called
from line 22 to illustrate that some of the code can be placed
outside of the coroutine process to make the resident part
smaller.  The implication here is that you could have several

                                                          15-4

                                      Chapter 15 - Concurrency

coprocesses going on, each of which had a very small resident
portion, and each of which called some large regular
procedures.  In fact, there is no reason why two or more of
the coprocesses could not call the same normal procedure.

Study this program until you understand the implications, then
compile and execute it to see that it does exactly the same
thing as the last program.


HOW ABOUT THREE PROCESSES?
______________________________________________________________

Examine the example program named              ===============
COROUT3.MOD for an example with three            COROUT3.MOD
concurrent processes.  This program is         ===============
identical to the first program with the
addition of another process.  In this program, Process1 calls
Process2, which calls Process3, which once again calls
Process1.  Thus the same loop is traversed but with one
additional stop along the way.  It should be evident to you
that there is no reason why this could not be extended to any
number of processes each calling the next or in any looping
scheme you could think up provided of course that it had some
utilitarian purpose.  It is not apparent, but there are
actually four coprocesses here because the main program, in
lines 47-57, qualifies to be called another process.  This
will be very graphically demonstrated in the next example
program because the main program is the main control loop.


SORT OF RANDOM PROCESSES
______________________________________________________________

Examine the program named RANPROG.MOD for      ===============
an example of coprocessing that is a             RANPROG.MOD
little more irregular than the very            ===============
repeatable loops of the first three
example programs in this chapter.  Note that the main program
is one of the major contributors to this program because it
contains a loop which calls each of the other processes once
during each pass through the loop, with WriteString calls
interleaved between the calls.  The WriteString calls are
obviously for the purpose of tracking program execution later.

Each call to Hello results in writing the word "hello" to the
monitor and a return to the main program, but each call to
Toggle results in either a return to the main program or a
transfer to Hello after writing a different word to the
monitor in each case.  Which path is taken is controlled by
the local variable ToggleFactor which is toggled each time the
Toggle procedure is called.  If ToggleFactor is zero, the word
"even" is written to the monitor, and control is transferred
to Hello, which writes "hello" and transfers directly back to

                                                          15-5

                                      Chapter 15 - Concurrency

the main program without returning through the Toggle
procedure.  When ToggleFactor is one, the word "odd" is
displayed and control is transferred back to the main program.

The observant student will notice that we return to each
process at the statement following where we transferred away
and in the case of the procedure named toggle, we actually
return inside of a loop and inside of an if statement.  The
Modula-2 system is designed to handle this for us, and it is
because of this capability that we can write true coprocessing
programs in Modula-2.  The time it takes you to understand
this program will be well spent since it is the only program
in this tutorial that depicts the value of the concurrent
capabilities of Modula-2.

The interested student will find many books and articles on
coprocessing and parallel operation in general.


WHAT IS THE BIG DIFFERENCE?
______________________________________________________________

Actually, the big difference between real concurrent
processing and what this is doing is in the division of time
and in who, or what, is doing the division.  In real
concurrent processing, the computer hardware is controlling
the operation of the processing and allocating time slots to
the various processes.  In the pseudo concurrent processing
we are doing, it is the processes themselves that are doing
the time allocation leading to the possibility that if one of
the processes went bad, it could tie up all of the resources
of the system and no other process could do anything.  You
could consider it a challenge to write a successful system
that really did share time and resources well.

The important thing to consider about this technique is that
it is one additional tool available in Modula-2 that is not
available in the usual implementations of other popular
languages such as Pascal, C, Fortran, or BASIC.


ONE MORE INFINITE EXAMPLE OF CONCURRENCY
______________________________________________________________

Examine the program named INFINITE.MOD for    ================
another example of a program with               INFINITE.MOD
concurrency.  In this program, three          ================
processes are created and control is
transferred to the first one after which they call each other
in a loop with no provision for ever returning to the main
program.  The computer will continually loop around the three
processes checking the printer, the keyboard, and the system
clock to see if they need servicing.  It must be pointed out
that it would be a simple matter to include all three checks

                                                          15-6

                                      Chapter 15 - Concurrency

in a single loop in the main program and do away with all of
this extra baggage.  This method had one advantage over the
simple loop and that is the fact that each coprocess can have
its own variables which cannot be affected by the operation
of the other processes and yet are all memory resident at all
times.

This program can be compiled and run but it will execute
forever since it has no way to stop it.  You must stop it
yourself by using the method of program abort provided on your
system.  If you are using MS-DOS, a control-break combination
will probably terminate the program.  It should be mentioned
that if this technique were used in a real situation, it would
not be writing to the monitor continually.


IS THIS REALLY USEFUL?
______________________________________________________________

In a situation where you needed to service interrupts in some
prescribed and rapid fashion, a technique involving Modula-2
concurrency could prove to be very useful.  There are other
procedures available in Modula-2 to aid in writing a
pseudo-concurrent program but they are extremely advanced and
would require an intimate knowledge of your particular systems
hardware, especially the interrupt system.  The one procedure
available for this is the IOTRANSFER procedure which is used
to establish the interface to a hardware interrupt.

Since using these techniques are extremely advanced
programming techniques, they are beyond the scope of this
tutorial and will not be covered here.


WHAT ABOUT USING THESE PROCEDURES
______________________________________________________________

In order to effectively use the techniques of coprocessing,
you will need to devote a great deal of study to parallel
processing.  Many terms will be encountered, such as shared
variables, semaphores, deadlock, etc.  Each of these terms
involve techniques on programming problems that are beyond the
scope of this tutorial since our goal is to teach you the use
of various constructs in Modula-2, not the overall system
design problem.

Chapter 16 of this tutorial gives you practical examples of
the use of Modula-2.





                                                          15-7

```
{% endraw %}

## CHAP16.TXT

{% raw %}
```

                                                    Chapter 16

                                     COMPLETE EXAMPLE PROGRAMS



WHY THIS CHAPTER?
______________________________________________________________

The intent of this chapter is to give several example programs
that use nearly every capability of Modula-2 as illustrations
of large usable programs.  The programs are usable utilities,
but primarily they are intended to illustrate the method of
building up a medium sized program from the various constructs
studied in the earlier chapters.  Even though most of these
programs are designed to be run on an IBM-PC or compatible,
the techniques are applicable to any system by changing the
system calls.

The first three programs are the beginning of a hard disk
backup utility.  Although it works, it does have a few
limitations that need fixed before it can really be used for
a production backup system.  It has never been refined, but
it is included here as an illustration of how to put together
a large program in Modula-2.  It can be used as a backup
system if you don't mind the following problems and
limitations.

1.   The date and time of the files on the copy are the date
     and time that the copies are made, not the original date
     on the original files.

2.   This system does not copy hidden files.

3.   This system does not copy files that are too big to fit
     on one floppy disk.

4.   The filesize and the room remaining on the disk are
     handled using floating point numbers because LONGCARD was
     not available when this program was originally written.
     There are enough significant digits in the floating point
     numbers to allow this, but using the long cardinal type
     would be a great improvement.

The interested student may wish to use this as a beginning
point to develop his own hard disk backup system, and learn
a lot about the use of Modula-2 at the same time.


BAKLIST.MOD
______________________________________________________________

This program generates a list of all files along with their
sub-directories.  Some files are excluded from the list,
including all three files that comprise the DOS system and the
file generated here, FULLDISK.LST.  This is an ASCII file that

                                                          16-1

                        Chapter 16 - Complete Example Programs

can be edited with any text editor to eliminate any files that
you do not wish to back up.  It should be noted that the file,
FULLDISK.LST, is created and filled in the root directory of
the default drive.

Select the desired sub-directory that you wish to back up, by
making it the default directory, and all files and sub-
directories, along with all of their respective contents will
be listed in FULLDISK.LST.  The resulting list is then used
by BAKCOPY.MOD to actually copy the files to floppy disks.

This program uses a B-tree sorting algorithm using dynamic
allocation and recursive techniques.  The B-tree record is
imported from the module named DirHelps.


BAKCOPY.MOD
______________________________________________________________

This program uses FULLDISK.LST to actually copy the files from
the source disk to the target and requests a disk change
whenever the floppy disk fills up.  It will not copy a file
larger than that which will fit on one disk, but will give a
message of which files are not copied.

This program makes no provision for copying a file with an
unusual file attribute and simply copies the entire file if
disk space is available.  It also does no file lookahead.
When the next file doesn't fit on the target disk, it simply
requests a new disk.  A lookahead scheme could allow several
additional smaller files to be copied to a disk when a larger
file will not fit.



BAKRSTR.MOD
______________________________________________________________

This program will read the files from floppy back to the fixed
disk to restore it.  It simply copies from whatever directory
they are in to the corresponding directory on the fixed disk,
creating the directory if necessary.  This program uses some
of the procedures from the module named DirHelps.  This was
done to illustrate reusability of software.

All three of these programs are usable but lack many of the
refinements necessary to make them completely useful.  As the
purchaser of this tutorial, you are permitted to use these
source files as the basis for developing your own hard disk
backup program.  If you develop them carefully, you will learn
a lot about the use of Modula-2.



                                                          16-2

                        Chapter 16 - Complete Example Programs

GENERAL PURPOSE GLOBAL MODULES
______________________________________________________________

The remainder of the files in this chapter are useful global
modules which you may be able to use in some of your Modula-
2 programs.  They are fairly well documented as to their
capabilities and limitations, and since you have the source
code, you are able to customize them to fit your particular
need.


DIRHELPS.DEF   DIRHELPS.MOD
______________________________________________________________

This global module contains several useful file handling and
directory manipulation procedures.  It is called by the above
three example programs used for backup and restore of a fixed
disk.  These routines are available for your use also if you
desire to use them for a file manipulation program.  Their
main intent however is that they be a guide for the student
to observe methods used to write library functions.


BITOPS.DEF     BITOPS.MOD
______________________________________________________________

This module has four generic bit operations including logical
AND, OR, XOR, and NOT.  These are useful procedures that you
can import and use in your programs if you are doing bit
manipulations.


REAL2MON.DEF   REAL2MON.MOD
______________________________________________________________

This module has a procedure to output real data to the monitor
in a neat, easy to read format.  It is documented in the
header of the source files.


REAL2FIL.DEF   REAL2FIL.MOD
______________________________________________________________

This module has several procedures to output real and other
data type to a file using the FileSystem module.  The various
procedures are documented in their respective headers.







                                                          16-3

```
{% endraw %}

## FILES814.TXT

{% raw %}
```
Disk No:  814
Program Title: MODULA-2 TUTORIAL version 2.0 (Disk 1 of 2)
PC-SIG version: 1.1

MODULA-2 TUTORIAL will teach you the fundamentals of this complex
language and get you up and programing by the end of it.  This tutorial
is very well put together and the author covers every aspect of the
language.  The first part of this tutorial is composed of those features
that are common to PASCAL and MODULA-2 and are also of a fundamental
nature.  You will need to study all of Part I in order to write
meaningful MODULA-2 programs.  If you are already a fairly experienced
PASCAL programmer, you will absorb this material very quickly.  Be sure
to go through it all, at least once, because there are many small
differences between the languages that you must consider.

Usage:  Educational.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

CHAP01   TXT  Chapter 1 of the tutorial.
CHAP02   TXT  Chapter 2 of the tutorial.
CHAP03   TXT  Chapter 3 of the tutorial.
CHAP04   TXT  Chapter 4 of the tutorial.
CHAP05   TXT  Chapter 5 of the tutorial.
CHAP06   TXT  Chapter 6 of the tutorial.
CHAP07   TXT  Chapter 7 of the tutorial.
CHAP08   TXT  Chapter 8 of the tutorial.
CHAP09   TXT  Chapter 9 of the tutorial.
CHAP10   TXT  Chapter 10 of the tutorial.
CHAP11   TXT  Chapter 11 of the tutorial.
CHAP12   TXT  Chapter 12 of the tutorial.
CHAP13   TXT  Chapter 13 of the tutorial.
CHAP14   TXT  Chapter 14 of the tutorial.
CHAP15   TXT  Chapter 15 of the tutorial.
CHAP16   TXT  Chapter 16 of the tutorial.
INTRO    TXT  Brief introduction file.
PRINTEXT BAT  Batch file to print the tutorial.
PRNTTEXT EXE  Program to print tutorial.
READ     ME   The file you are presently reading.
TABCONT  TXT  Table of contents.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #814 MODULA-2 Disk 1 of 2  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the tutorial to your printer type: PRINTEXT (press enter)       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INTRO.TXT

{% raw %}
```

                                                  Introduction

                                             INTRO TO MODULA-2



MODULA-2 IS A COMPLETE LANGUAGE
______________________________________________________________

Welcome to the programming language Modula-2, a very complete,
high level language with many advanced features.  Modula-2 was
designed by Niklaus Wirth, the designer of Pascal.  Based on
experience with Pascal, Modula-2 was designed to make up for
many of the deficiencies noted by programmers worldwide, and
the changes make it a very powerful language with few
limitations.  In spite of its power, Modula-2 retains the
simplicity of Pascal and can be used for small applications
as easily as Pascal could be used.



MODULA-2 TUTORIAL - PART I
______________________________________________________________

Even though there are many similarities between the two
languages, the differences are significant.  This tutorial was
written considering both the similarities and the differences
between the languages.  The first part of this tutorial is
composed of those features that are common to Pascal and
Modula-2 and are also of a fundamental nature.  You will need
to study all of Part I in order to write meaningful Modula-2
programs.  If you are already a fairly experienced Pascal
programmer, you will absorb this material very rapidly.  Be
sure to go through it all at least once, because there are
many small differences between the languages that you must
consider.



MODULA-2 TUTORIAL - PART II
______________________________________________________________

The topics taught in Part II of this tutorial are those
advanced features that are also available in Pascal.
Pointers, dynamic allocation, records, and linked lists are
studied here along with other topics.  These are very powerful
tools that can be used to great advantage, but are quite often
overlooked by many Pascal programmers that I have talked to.
These are the tools that give Pascal and Modula-2 an advantage
in flexibility over such languages as BASIC and FORTRAN.  They
do require a bit of deep concentration to fully understand,
but you will be greatly rewarded if you take the time to
understand and use them.



                                                           I-1

                                      Introduction to Modula-2

MODULA-2 TUTORIAL - PART III
______________________________________________________________

Part III of this tutorial covers those aspects of Modula-2
that are not included in Pascal in any way.  Some of the
topics are, independent compilation, the entire topic of
modules, and concurrent processing.  These are advanced topics
and some of these topics may be the reasons that you selected
Modula-2 as a programming language.  The material covered in
Part I in conjunction with that covered in Part III can lead
to some very powerful programming techniques.

To efficiently use this tutorial, you must carefully study all
of the material in Part I, then you can do a lot of jumping
around in Parts II and III and still cover the material in a
meaningful manner.  You may also choose to only study some
chapters of the last two parts in order to learn the needed
material for the programming problem at hand.  It must be
emphasized that it is important that you cover the material
in Part I very carefully, and in order, since so much depends
on what was taught before.  When your study reaches the last
two parts, comments at the beginning of each chapter will tell
you which previous chapters must be understood in order to
effectively use the material in the new chapter.


FOR THE BEGINNING PROGRAMMER
______________________________________________________________

If you are a novice to computer programming, this course is
for you because it is assumed that you know little or nothing
about programming.  Many sections, especially in the early
chapters, will cover very basic topics for your benefit.  Your
biggest problem will be in setting up your compiler for use.
This can be a very difficult task because Modula-2 is a
complex language, and compiler writers must allow considerable
flexibility in the use of the compiler.

There are, at this time, a very limited number of Modula-2
compilers available, but it would not be possible to include
notes on every compiler about how to install it for your
computer.  In addition, all compilers do not implement all
functions defined in Niklaus Wirth's definition of the
language.  You may have a problem getting your compiler
installed and running on your computer.  The best help you
can find is an experienced person in your company to help you
get your compiler running properly on your computer.

Modula-2, as defined by Niklaus Wirth, contains no provisions
for input or output because they are so hardware dependent.
It is up to each compiler writer to provide you with
supplemental procedures for handling I/O (input/output) and
a few other machine dependent features.  Niklaus Wirth did
recommend a library of I/O routines that should be available

                                                           I-2

                                      Introduction to Modula-2

and most compilers contain at least those facilities, and
usually provide many more.


SIMPLE EXAMPLES WILL BE USED
______________________________________________________________

All of the example programs are purposely kept simple and
small to illustrate the point intended.  It is of little value
to you to present you with a large complex program to
illustrate what can be illustrated in a small program better.
In addition, every program is complete, and can be compiled
and run.  Program fragments frequently pose as many questions
as they answer.

The result of execution is given in comments at the end of
each example program.  The result is given for one compiler,
but in nearly every case, the answer should be the same no
matter what compiler is used.  A few of the programs may
output slightly different data because of different defaults.
For example, there is no standard number of digits which will
be output following a decimal point for a floating point
number.  The result of execution is given for your benefit so
that you do not have to compile and run every program in those
parts of the tutorial that you can breeze through quickly due
to prior programming experience in a similar language.

Because it would be a disservice to you to teach you a lot of
simple techniques and never show you how they go together in
a significant program, chapters 9 and 16 contain several
larger example programs, all of which are complete programs.
A relatively small amount of description is given about these
programs because you will have already covered the details and
should only need a quick overview of how to put the various
constructs together.  You will find some of these programs
useful and you will have the ability to modify and enhance
them for your use since you have the source code available on
the distribution disk.


SOME VARIABLE NAMES SEEM SILLY, WHY IS THAT?
______________________________________________________________

I have seen example programs with the same name everywhere,
and had a hard time deciding what names were required and what
could be changed to something more meaningful.  For example
a SORT program is in a file named SORT, the program name is
SORT, the input data file is named SORT, and variables were
named SORT1, SORT2, etc.  This was no help to myself, a novice
sorter, and would be no help to you.  For that reason, the
first program in chapter 2 is in a file named PUPPYDOG.MOD and
the module name is PuppyDog.  It should be obvious to even the
newest programmer that the name of a module can be nearly
anything if it is allowed to be PuppyDog.  You will learn

                                                           I-3

                                      Introduction to Modula-2

later that well selected names can be a great aid in
understanding a program.  This will be evident in some of the
early programs when variable names are chosen to indicate what
type of variable they are.

Some compilers require that the module name be the same as the
file name, and all require them to agree when you get to
global modules because of the way type checking is
accomplished.  It would be best for you to get into the habit
of naming them both the same now.  For that reason, all of the
example programs use the same name for the file name and for
the module name.  Your compiler may allow you to use different
names.  It will be left up to you to study your manual and see
what the requirements are for your particular compiler.



WHAT IS A COMPILER?
______________________________________________________________

There are two primary methods used in running any computer
program that is written in a readable form of English.  The
first method is through use of an interpreter.  An interpreter
is a program that looks at each line of the english program,
decides what the english on that line means, and does what it
says to do.  If one of the lines is executed repeatedly, it
must be scanned and analyzed each time, greatly slowing down
the solution of the problem at hand.

A compiler, on the other hand, is a program that looks at each
statement one time and converts it into a code that the
computer understands directly.  When the compiled program is
actually run, the computer does not have to figure out what
each statement means, it is already in a form the computer can
run directly, which results in a much faster execution of the
program.  Due to the nature of Modula-2, there will be few,
if any, interpreters for Modula-2.



WHAT ABOUT THE PROGRAMMING EXERCISES?
______________________________________________________________

The programming exercises at the end of each chapter are a
very important part of the tutorial.  If you do them, you will
embed the principles taught in each chapter more firmly in
your mind than if you ignore them.  If you choose to ignore
them, you will be somewhat adept at reading Modula-2 programs
but very ineffectual at writing them.  By doing the exercises,
you will also gain considerable experience in using your
editor and compiler.



                                                           I-4

                                      Introduction to Modula-2

THE ANSWERS DIRECTORY
______________________________________________________________

The ANSWERS directory on the distribution disk contains an
answer to each of the programming exercises suggested at the
end of each chapter.  Note carefully that the given answer is
only one possible solution to the problem and your answer
could differ markedly and still be a correct answer.  The
filename for each answer is given in the form of CHnnEm.MOD,
where nn refers to the chapter number and m refers to the
exercise number for that chapter.  If multiple answers are
requested, they will be named with an additional a, or b
following the primary name.  Thus the filename CH04E3A.MOD
contains the answer to the first part of programming exercise
3 in chapter 4.

It will be assumed that you know how to use your compiler and
that you have some kind of an editor for use with the example
files.  With the above in mind, you are now ready to begin
your tour of Modula-2.  A sample program is included in this
chapter for you to try with your compiler.  It is left as an
exercise for you to compile and run FIRSTEX.MOD.  When you can
successfully compile and run this program, you are ready to
begin the tutorial on Modula-2 programming.  At this point,
don't worry about what the statements mean in FIRSTEX.MOD, you
will have a complete understanding of this program by the time
you complete chapter 4 of this tutorial.


























                                                           I-5

```
{% endraw %}

## TABCONT.TXT

{% raw %}
```









                     CORONADO ENTERPRISES

                 MODULA-2 TUTOR - Version 2.0

This documentation and the accompanying software, including all
of the example Modula-2 programs and text files, are protected
under United States copyright law to protect them from unauth-
orized commercialization.  This version of the tutorial is dis-
tributed under the shareware concept, which means you are not
required to pay for it.  You are permitted to copy the disks,
and pass the copies on to a friend, provided that you do not
modify any files or omit any files from the complete package,
and you are in fact encouraged to pass on complete copies to
friends.  You are permitted to charge a small fee to cover the
costs of duplication, but you are not permitted to charge any-
thing for the software itself.

If you find the tutorial helpful, you are encouraged to register
with the author and to submit a small fee to help compensate him
for his time and expense in writing it.  We will provide you
with a beautifully printed copy of this tutorial if you submit a
full registration.  See the READ.ME file on either diskette for
additional details.

Whether or not you send a registration fee, feel free to request
a copy of the latest list of available tutorials and a list of
the authorized Public Domain libraries that distribute our full
line of programming language tutorials.


               Gordon Dodrill - Jan 18, 1989



         Copyright (c) 1989, Coronado Enterprises


                  Coronado Enterprises
                  12501 Coronado Ave NE
              Albuquerque, New Mexico 87122


               MODULA-2 TUTORIAL - TABLE OF CONTENTS

Introduction to the Modula-2 tutorial                Page I-1
     FIRSTEX.MOD      The first example program        I-5

                 Part I - Modula-2 is like Pascal

Chapter 1 - What is a computer program?              Page 1-1

Chapter 2 - Getting started in Modula-2              Page 2-1
     PUPPYDOG.MOD     The minimum Modula-2 program     2-1
     WRITESM.MOD      Write something on the monitor   2-3
     MODCOMS.MOD      Modula-2 comments                2-4
     GOODFORM.MOD     Good formatting example          2-5
     UGLYFORM.MOD     Ugly formatting example          2-5

Chapter 3 - The simple Modula-2 data types           Page 3-1
     INTVAR.MOD       Integer variables                3-2
     INTMATH.MOD      Integer variable math examples   3-4
     CARDMATH.MOD     Cardinal variable math examples  3-6
     REALMATH.MOD     Real variable math example       3-7
     REALTRIG.MOD     Trigonometric example            3-8
     BOOLMATH.MOD     Boolean variable math example    3-9
     CHARDEMO.MOD     Character variable demonstration 3-10
     TRANSFER.MOD     Transfer between types           3-12

Chapter 4 - Modula-2 loops and control structures    Page 4-1
     LOOPDEMO.MOD     Loop demonstration               4-1
     IFDEMO.MOD       Conditional branching            4-5
     LOOPIF.MOD       Loops and IF's together          4-6
     TEMPCONV.MOD     Temperature conversion           4-6
     DUMBCONV.MOD     Poor variable names              4-7
     CASEDEMO.MOD     CASE demonstration               4-7
     BIGCASE.MOD      Bigger case example              4-8

Chapter 5 - Modula-2 procedures                      Page 5-1
     PROCED1.MOD      Simple procedures                5-2
     PROCED2.MOD      Procedures with variables        5-3
     PROCED3.MOD      Multiple variables               5-6
     PROCED4.MOD      Scope of variables               5-6
     PROCED5.MOD      Procedure calling procedures     5-7
     FUNCTION.MOD     An example function              5-7
     RECURSON.MOD     An example with recursion        5-8

Chapter 6 - Arrays, types, constants, and labels     Page 6-1
     ARRAYS.MOD       Simple arrays                    6-1
     ARRAYS2.MOD      Multiple arrays                  6-2
     TYPES.MOD        Example of types                 6-3
     CONSTANT.MOD     Example of constants             6-5
     ARAYPASS.MOD     Pass Array to Procedure          6-6
     STRINGEX.MOD     String Handling Examples         6-7

Chapter 7 - Overall Program Construction             Page 7-1
     OVERPROG.MOD     Overall Program Construction     7-1
     MOREPROG.MOD     More Program Construction        7-2
     LASTPROG.MOD     Scrambled Order of Definitions   7-3

Chapter 8 - Input/Output and Printing                Page 8-1
     SIMPLOUT.MOD     Simple Monitor Output            8-1
     SIMPLIN.MOD      Simple Keyboard Input            8-3
     FILEIO.MOD       File I/O with InOut              8-5
     VARYFILE.MOD     Variable Filename Input          8-7
     PRINTFLE.MOD     Printer and File Output          8-9

Chapter 9 - Example Programs                         Page 9-1
     TIMEDATE.MOD     Time and Date Example            9-1
     AREAS.MOD        Calculate Areas                  9-1
     PC.MOD           Printer Control                  9-2
     LIST.MOD         List Program File                9-2

                 Part II - Advanced Topics

Chapter 10 - Scalars, subranges, and sets            Page 10-1
     ENTYPES.MOD      Enumerated Types                 10-1
     SUBRANGE.MOD     Subranges                        10-3
     SETS.MOD         A SET example                    10-5

Chapter 11 - Records in Modula-2                     Page 11-1
     SMALLREC.MOD     A Small Record Example           11-1
     BIGREC.MOD       A Larger Record Example          11-2
     VARREC.MOD       A Variant Record Example         11-5

Chapter 12 - Pointers and Dynamic Allocation         Page 12-1
     POINTERS.MOD     Pointer Example                  12-1
     DYNREC.MOD       A Dynamically Allocated Record   12-4
     LINKLIST.MOD     A linked List                    12-6



              Part III - Modula-2 extends Pascal

Chapter 13 - Modules, Local and Global               Page 13-1
     LOCMOD1.MOD      Local Module Demonstration       13-1
     LOCMOD2.MOD      Local Module Demonstration       13-4
     CIRCLES.DEF      Global Module - Definition       13-5
     CIRCLES.MOD      Global Module - Implementation   13-6
     GARDEN.MOD       Calls Module "MYCALCUL"          13-9
     GARDEN2.MOD      Calls Module "MYCALCUL"          13-9
     OPAQUETY.DEF     Opaque type definition           13-10
     OPAQUETY.MOD     Opaque type implementation       13-10
     OPTYPE.MOD       Use opaque type                  13-11
     PROCTYPE.MOD     Procedure Type Example           13-11

Chapter 14 - Machine Dependent Facilities            Page 14-1
     TYPEREL.MOD      Type relaxation                  14-1
     WORDADDR.MOD     WORD and ADDRESS example         14-3
     ADRSTUFF.MOD     Address manipulation             14-4


Chapter 15 - Concurrency in Modula-2                 Page 15-1
     COROUT.MOD       A Simple Coroutine               15-2
     COROUT2.MOD      Added Features                   15-4
     COROUT3.MOD      Triple Coroutines                15-5
     RANPROC.MOD      Random processes                 15-5
     INFINITE.MOD     Infinite Execution Loop          15-6

Chapter 16 - Complete example programs               Page 16-1
     BAKLIST.MOD      Get All filenames From Disk      16-1
     BAKCOPY.MOD      Copy files from Fixed to Floppy  16-2
     BAKRSTR.MOD      Read Floppy back to Fixed Disk   16-2
     DIRHELPS.DEF     Directory help procedures        16-3
     DIRHELPS.MOD                                      16-3
     BITOPS.DEF       Bit Level Operations             16-3
     BITOPS.MOD                                        16-3
     REAL2MON.DEF     Real outputs to the monitor      16-3
     REAL2MON.MOD                                      16-3
     REAL2FIL.DEF     Real outputs to a file           16-3
     REAL2FIL.MOD                                      16-3



ABOUT THE AUTHOR
_________________________________________________________________

The author of this tutorial began programming in 1961 using FORTRAN
on an IBM 1620.  Since then most of his career has been involved
with designing digital logic for satellite application.  In 1983,
being somewhat burned out with logic design, he began a study of
some of the more modern programming languages and has since made
a complete career shift to software development.  After learning
Pascal, C was studied, followed by Modula-2 and Ada.  Rather than
simply learning the syntax of each new language, modern methods of
software engineering were studied and applied to effectively
utilize the languages.  He is currently employed by a large
research and development laboratory where he continues to study,
teach, and apply the newer programming languages.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0814

     Volume in drive A has no label
     Directory of A:\

    CHAP01   TXT      5948   1-18-89  12:00p
    CHAP02   TXT     15176   1-18-89  12:00p
    CHAP03   TXT     35937   1-18-89  12:00p
    CHAP04   TXT     21494   1-18-89  12:00p
    CHAP05   TXT     24461   1-18-89  12:00p
    CHAP06   TXT     25524   1-18-89  12:00p
    CHAP07   TXT      7031   1-18-89  12:00p
    CHAP08   TXT     25632   1-18-89  12:00p
    CHAP09   TXT      6070   1-18-89  12:00p
    CHAP10   TXT     14764   1-18-89  12:00p
    CHAP11   TXT     18655   1-18-89  12:00p
    CHAP12   TXT     25102   1-18-89  12:00p
    CHAP13   TXT     29142   1-18-89  12:00p
    CHAP14   TXT     13911   1-18-89  12:00p
    CHAP15   TXT     18883   1-18-89  12:00p
    CHAP16   TXT      6646   1-18-89  12:00p
    FILES814 TXT      1949   1-31-89   2:09p
    GO       BAT        38   8-10-87  10:14a
    GO       TXT       386   8-10-87  10:16a
    INTRO    TXT     12180   1-18-89  12:00p
    PRINTEXT BAT       398   1-18-89  12:00p
    PRNTTEXT EXE     15938   1-18-89  12:00p
    READ     ME       4334   2-01-89  12:00p
    TABCONT  TXT      8950   1-18-89  12:00p
           24 file(s)     338549 bytes
                           13312 bytes free
