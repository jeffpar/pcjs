---
layout: page
title: "PC-SIG Diskette Library (Disk #2369)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2369/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2369"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "C++ TUTOR 2 OF 2 (2368 ALSO)"

    C++ TUTOR is a comprehensive tutorial for the C++ programming language
    which assumes the user has a moderate amount of programming
    experience.
    
    The C++ source code is included to illustrate how to use C++ in a
    practical sense. This example is meant to be studied, compiled, and run
    by the student.
    
    All of the points of C++ language, including properly-structured
    programming techniques, are covered at the elementary level.  The
    description and instruction are applicable to Borland's implementation
    of C++.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHAP01.TXT

{% raw %}
```



                                                          Chapter 1
                                                      SIMPLE THINGS

As we begin the study of C++ and object oriented programming, a few
comments are in order to help you get started.  Since the field of
object oriented programming is probably new to you, you will find
that there is a significant amount of new terminology for you to
grasp.  This is true of any new endeavor and you should be warned
not to be intimidated by all of the new concepts.  We will add a
few new topics in each chapter and you will slowly grasp the entire
language.

Chapters one through four of this tutorial will concentrate on the
non object oriented programming additions to C++.  We will not
begin the discussion of any object oriented programming techniques
until chapter five.


EVEN COMMENTS ARE IMPROVED IN C++
_________________________________________________________________

Examine the file named CONCOM.CPP for an example   ==============
of several new things in C++.  We will take the      CONCOM.CPP
new constructs one at a time beginning with the    ==============
comments.
 
A comment begins with the double slash "//", starts anywhere on a
line and runs to the end of that line where it is automatically
terminated.  The old method of comment definition used with ANSI-
C can also be used with C++ as illustrated in lines 11 through 14,
among other places in this program.  The new method is the
preferred method of comment definition because it is impossible to
inadvertently comment out several lines of code.  This can be done
by forgetting to include the end of comment notation when using the
older C method of comment notation.  Good programming practice
would be to use the new method for all comments and reserve the old
method for use in commenting out a section of code during debugging
since the two methods can be nested.

It would be well to caution you at his point however, that you
should not use comments when the same sense of program definition
can be obtained by using meaningful names for variables, constants,
and functions.  The careful selection of variable and function
names can make nearly any code self documenting and you should
strive to achieve this in your code.

THE KEYWORDS const AND volatile
_________________________________________________________________

There are two new keywords used in lines 9 through 11 which were
not part of the original K&R definition of C, but are part of the
ANSI-C standard.  The keyword const is used to define a constant. 
In line 9 the constant is of type int, it is named START, and is

                                                           Page 1-1

                                          Chapter 1 - Simple Things

initialized to the value 3.  The compiler will not allow you to
accidentally or purposefully change the value of START because it
has been declared a constant.  If you had another variable named
STARTS, the system would not allow you to slightly misspell STARTS
as START and accidentally change it.  The compiler would give you
an error message so you could fix the error.  Since it is not
permissible to change the value of a constant, it is imperative
that you initialize it when it is declared so it will have a useful
value.  The compiler does not require you to initialize it however,
and will not issue an error message if you do not.

You will note that the keyword const is also used in the function
header in line 21 to indicate that the formal parameter named
data_value is a constant throughout the function.  Any attempt to
assign a new value to this variable will result in a compile error. 
This is a small thing you can add to your programs to improve the
compilers ability to detect errors for you.

The keyword volatile is also part of the ANSI-C standard but was
not included in the original K&R definition of C.  Even though the
value of a volatile variable can be changed by you, the programmer,
there may be another mechanism by which the value could be changed,
such as by an interrupt timer causing the value to be incremented. 
The compiler needs to know that this value may be changed by some
external force when it optimizes the code.  A study of code
optimization methods is very interesting, but beyond the scope of
this tutorial.  Note that a constant can also be volatile, which
means that you cannot change it, but the system can through some
hardware function.

Ignore the output statement given in line 23 for a few minutes. 
We will study it in some detail later in this chapter.  If you are
experienced in K&R style programming, you may find line 5 and 21
a little strange.  This illustrates prototyping and the modern
method of function definition as defined by the ANSI-C standard. 
We will discuss this in great detail in chapter 4 of this tutorial. 
Prototyping is optional in C but absolutely required in C++.  For
that reason, chapter 4 of this tutorial is devoted entirely to this
topic.

It would be advantageous for you to compile and execute this
program with your C++ compiler to see if you get the same result
as given in the comments at the end of the listing.  One of the
primary purposes of compiling it is to prove that your compiler is
loaded and executing properly.



THE SCOPE OPERATOR
_________________________________________________________________

The example program named SCOPEOP.CPP illustrates another construct
that is new to C++.  There is no corresponding construct in either
K&R or ANSI-C.  This allows access to the global variable named

                                                           Page 1-2

                                          Chapter 1 - Simple Things

index even though there is a local variable of      ===============
the same name within the main function.  The use      SCOPEOP.CPP
of the double colon in front of the variable        ===============
name, in lines 11, 13, and 16, instructs the
system that we are interested in using the
global variable named index, defined in line 4, rather than the
local variable defined in line 8.

The use of this technique allows access to the global variable for
any use.  It could be used in calculations, as a function
parameter, or for any other purpose.  It is not really good
programming practice to abuse this construct, because it could make
the code difficult to read.  It would be best to use a different
variable name instead of reusing this name, but the construct is
available to you if you find that you need it sometime.

The scope operator allows access to global variables even though
hidden by a local variable.  Be sure to compile and execute this
program before proceeding on to the next example program where we
will discuss the cout operator in lines 10, 11, 15, and 16.



THE iostream LIBRARY
_________________________________________________________________

Examine the example program named MESSAGE.CPP     ===============
for our first hint of object oriented               MESSAGE.CPP
programming, even though it is a very simple      ===============
one.  In this program, we define a few variables
and assign values to them for use in the output
statements illustrated in lines 17 through 20, and in lines 23
through 26.  The new operator cout is the output function to the
standard device, the monitor, but works a little differently from
our old familiar printf() function, because we do not have to tell
the system what type we are outputting.

C++, like the C language itself, has no input or output operations
as part of the language itself, but allows the implementor to add
input and output functions in a very elegant manner.  This has been
done for us in the stream library.

The operator <<, sometimes called the "put to" operator, tells the
system to output the variable or constant following it, but lets
the system decide how to output the data.  In line 17, we first
tell the system to output the string, which it does by copying
characters to the monitor, then we tell it to output the value of
index.  Notice however, that we fail to tell it what the type is
or how to output the value.  Since we don't tell the system what
the type is, it is up to the system to determine what the type is
and to output the value accordingly.  After the system finds the
correct type, we also leave it up to the system to use the built
in default as to how many characters should be used for this
output.  In this case, we find that the system uses exactly as many

                                                           Page 1-3

                                          Chapter 1 - Simple Things

as needed to output the data, with no leading or trailing blanks,
which is fine for this output.  Finally, the newline character is
output, and the line of code is terminated with a semicolon.

When we called the cout output function in line 17, we actually
called two different functions because we used it to output a
string and a variable of type int.  This is the first hint at
object oriented programming because we simply broadcast a message
to the system to print out a value, and let the system find an
appropriate function to do so.  We are not required to tell the
system exactly how to output the data, we only tell it to output
it.  This is a very weak example of object oriented programming,
and we will get into it in much more depth later.

In line 18, we tell the system to output a different string,
followed by a floating point number, and another string of one
character, the newline character.  In this case, we told it to
output a floating point number without telling it that it was a
floating point number, once again letting the system choose the
appropriate output means based on its type.  We did lose a bit of
control in the transaction, however, because we had no control over
how many significant digits to print before or after the decimal
point.  We chose to let the system decide how to format the output
data.


The variable named letter is of type char, and is assigned the
value of the uppercase X in line 14, then printed as a letter in
line 19.  You have complete flexibility in the use of the cout and
the printf() statements and they can be mixed in any way you
desire.  Both statements result in output to the monitor.


MORE ABOUT THE stream LIBRARY
_________________________________________________________________

The stream library was defined for use with C++ in order to add to
the execution efficiency of the language.  The printf() function
was developed early in the life of the C language and is meant to
be all things to all programmers.  As a result, it became a huge
function with lots of extra baggage that is only used by a few
programmers.  By defining the small special purpose stream library,
the designer of C++ allows the programmer to use somewhat limited
formatting capabilities, but which are still adequate for most
programming jobs.  If more elaborate formatting capabilities are
required, the complete printf() library is available from C, and
the two types of outputs can be freely mixed.

Lines 23 through 26 illustrate some of the additional features of
the stream library which can be used to output data in a very
flexible yet controlled format.  The value of index is printed out
in decimal, octal, and hexadecimal format in lines 23 through 25. 
When one of the special stream operators, dec, oct, or hex, is
output, all successive output will be in that number base.  Looking

                                                           Page 1-4

                                          Chapter 1 - Simple Things

ahead to line 32, we find the value of index printed in hex format
due to the selection of the hexadecimal base in line 25.  If none
of these are output, the system defaults to decimal format.


THE cin OPERATOR
_________________________________________________________________

In addition to the cout operator, there is a cin operator which is
used to read data from the standard input device, usually the
keyboard.  The cin operator uses the >> operator, usually called
the "get from" operator and it has most of the flexibility of the
cout operator.  A brief example of the use of the cin operator is
given in lines 28 through 30.  The special stream operators, dec,
oct, and hex, also select the number base for the cin stream
separately from the cout stream.  If none is specified, the input
stream also defaults to decimal.

In addition to the cout operator and the cin operator there is one
more standard operator, the cerr, which is used to output to the
error handling device.  This device cannot be redirected to a file
like the output to the cout can be.  The three operators, cout,
cin, and cerr, correspond roughly to the stdout, the stdin, and the
stderr stream pointers of the programming language C.  Their use
will be illustrated throughout the remainder of this tutorial.

The stream library also has file I/O capability, but it is beyond
the scope of this tutorial.  The standard file I/O library is
available with ANSI-C and is as easy to use as the stream library
and very portable.  For more information on the stream file I/O
library, see Bjarne Stroustrup's book which is listed in the
introduction to this tutorial.

Be sure to compile and execute this program before going on to the
next one.  Remember that the system will ask you to enter an
integer value which will be echoed back to the monitor, but changed
to the hexadecimal base.



FILE STREAM OPERATIONS
_________________________________________________________________

Examine the example program named FSTREAM.CPP     ===============
for examples of the use of streams with files.      FSTREAM.CPP
In this program a file is opened for reading,     ===============
another for writing, and a third stream is
opened to the printer to illustrate the semantics of stream
operations on a file.  The only difference between the streams in
the last program and the streams in this program is the fact that
in the last program, the streams were already opened for us by the
system.  You will note that the stream named printer is used in the
same way we used the cout operator in the last program.  Finally,

                                                           Page 1-5

                                          Chapter 1 - Simple Things

because we wish to exercise good programming practice, we close
all of the files we have opened prior to ending the program.

Be sure to compile and execute this program.  When you execute it,
it will request a file to be copied.  You can enter the name of any
ASCII file that resides in the current directory.



VARIABLE DEFINITIONS
_________________________________________________________________

Examine the file named VARDEF.CPP for a few more   ==============
additions to the C++ language which aid in           VARDEF.CPP
writing a clear and easy to understand program.    ==============
In C++, as in ANSI-C, global and static
variables are automatically initialized to zero
when they are declared.  This is true in both C++ and ANSI-C.  The
variables named index in line 4, and goofy in line 26 are therefore
automatically initialized to zero.  Of course, you can still
initialize either to some other value if you so desire.  Global
variables are sometimes called external since they are external to
any functions.

Automatic variables, those declared inside of any function, are not
automatically initialized but will contain the value that happens
to be in the location where they are defined, which must be
considered a garbage value.  The variable named stuff in line 8,
therefore does not contain a valid value, but some garbage value
which should not be used for any meaningful purpose.  In line 11,
it is assigned a value based on the initialized value of index and
it is then displayed on the monitor for your examination.



THE REFERENCE VARIABLE
_________________________________________________________________

Notice the ampersand in line 9.  This defines another_stuff as a
reference variable which is a new addition to C++.  The reference
variable should not be used very often, if at all, in this context. 
In order to be complete however, we will discuss its operation. 
The reference variable is not quite the same as any other variable
because it operates sort of like a pointer.  Following its
initialization, the reference variable becomes a synonym for the
variable stuff, and changing the value of stuff will change the
value of another_stuff because they are both actually referring to
the same variable.  The synonym can be used to access the value of
the variable for any legal purpose in the language.  It should be
pointed out that a reference variable must be initialized when it
is declared or the compiler will respond with an error.  Following
initialization, the reference variable cannot be changed to refer
to a different variable.


                                                           Page 1-6

                                          Chapter 1 - Simple Things

Even though the use of the reference variable in this way can lead
to very confusing code, it has another use where it can make the
code very clear and easy to understand.  We will study this use in
chapter 4 of this tutorial. 


DEFINITIONS ARE EXECUTABLE STATEMENTS
_________________________________________________________________

Coming from your background of C, you will find the statement in
line 16 very strange, but this is legal in C++.  Anyplace it is
legal to put an executable statement, it is also legal to declare
a new variable because a data declaration is defined as an
executable statement in C++.  In this case, we define the new
variable named more_stuff and initialize it to the value of 13. 
It has a scope from the point where it was defined to the end of
the block in which it is defined, so it is valid throughout the
remainder of the main program.  The variable named goofy is
declared even later in line 26.

It is very significant that the variable is declared near its point
of usage.  This makes it easier to see just what the variable is
used for since it has a much more restricted scope of validity. 
When you are debugging a program, it is convenient if the variable
declaration is located in close proximity to where you are
debugging the code.



WHAT ABOUT definition AND declaration?
_________________________________________________________________

The words definition and declaration refer to two different things
in C++, and in ANSI-C also for that matter.  They really are
different and have different characteristics so we should spend a
little time defining exactly what the words mean in C++.  A
declaration provides information to the compiler about the
characteristics of something such as a type or a function but it
doesn't actually define any code to be used in the executable
program, and you are permitted to make as many declarations of the
same entity as you desire.  A definition, on the other hand,
actually defines something that will exist in the executable
program, either some useful variables, or some executable code, and
you are required to have one and only one definition of each entity
in the program.  In short, a declaration introduces a name into the
program and a definition introduces some code.

If we declare a struct, we are only declaring a pattern to tell the
compiler how to store data later when we define one or more
variables of that type.  But when we define some variables of that
type, we are actually declaring their names for use by the
compiler, and defining a storage location to store the values of
the variables.  Therefore, when we define a variable, we are
actually declaring it and defining it at the same time.

                                                           Page 1-7

                                          Chapter 1 - Simple Things


We will refer to these definitions many times throughout the course
of this tutorial so if this is not clear now, it will clear up
later.


A BETTER for LOOP
_________________________________________________________________

Take careful notice of the for loop defined in line 20.  This loop
is a little clearer than the for loop that is available in ANSI-C,
because the loop index is defined in the for loop itself.  The
scope of this loop index is from its declaration to the end of the
enclosing block.  In this case its scope extends to line 29 since
the closing brace in line 29 corresponds to the most recent opening
brace prior to the declaration of the variable.  Since the variable
is still available, it can be used for another loop index or for
any other purpose which an integer type variable can legally be
used for.  The variable named count2 is declared and initialized
during each pass through the loop because it is declared within the
block controlled by the for loop.  Its scope is only the extent of
the loop so that it is automatically deallocated each time the loop
is completed.  It is therefore declared, initialized, used and
deallocated five times, once for each pass through the loop.

You will notice that the variable count2 is assigned a numerical
value in line 22 but when it is printed out, a character value is
actually output.  This is because C++ (version 2.0 and later) is
careful to use the correct type.

Finally, as mentioned earlier, the static variable named goofy is
declared and automatically initialized to zero in line 26.  Its
scope is from the point of its declaration to the end of the block
in which it is declared, line 29.

Be sure to compile and execute this program.



OPERATOR PRECEDENCE
_________________________________________________________________

Operator precedence is identical to that defined for ANSI-C so no
attempt will be made here to define it.  There is a small
difference when some operators are overloaded which we will learn
to do later in this tutorial.  Some of the operators act slightly
different when overloaded than the way they operate with elements
of the predefined language.

Do not worry about the previous paragraph, it will make sense later
in this tutorial after we have studied a few more topics.




                                                           Page 1-8

                                          Chapter 1 - Simple Things

PROGRAMMING EXERCISES
_________________________________________________________________


1.   Write a program that displays your name and date of birth on
     the monitor three times using the cout function.  Define any
     variables you use as near as possible to their point of usage.

2.   Write a program with a few const values and volatile variables
     and attempt to change the value of the constants to see what
     kind of error message your compiler will give you.












































                                                           Page 1-9

```
{% endraw %}

## CHAP02.TXT

{% raw %}
```



                                                        Chapter 2
                                                   COMPOUND TYPES


ENUMERATED TYPES
_________________________________________________________________

Examine the file named ENUM.CPP for an example     ==============
that uses an enumerated type variable.  The           ENUM.CPP
enumerated type is used in C++ in exactly the      ==============
same way it was used in ANSI-C with one small
exception, the keyword enum is not required to
be used again when defining a variable of that type, but it can be
used if desired.  It may be clearer to you to use the keyword again
in the same manner that it is required to be used in C.

The example program uses the keyword enum in line 9, but omits it
in line 8 to illustrate to you that it is indeed optional.  The
remainder of this program should be no problem for you to
understand.  After studying it, be sure to compile and execute it
and examine the output.


A SIMPLE STRUCTURE
_________________________________________________________________

Examine the example program named STRUCTUR.CPP   ================
for an illustration which uses a very simple       STRUCTUR.CPP
structure.  This structure is no different from  ================
that used in ANSI-C except for the fact that the
keyword struct is not required to be used again
when defining a variable of that type.  Lines 11 and 12 illustrate
the declaration of variables without the keyword, and line 13
indicates that the keyword struct can be included if desired.  It
is up to you to choose which style you prefer to use in your C++
programs.

You should take note of the fact that this is a valid ANSI-C
program except for the fact that it uses the stream library, the
C++ comments, and the lack of use of the keyword struct in two of
the lines.

Once again, be sure to compile and execute this program after
studying it carefully, because the next example program is very
similar but it introduces a brand new construct not available in
standard C, the class.


A VERY SIMPLE CLASS
_________________________________________________________________

Examine the example program named CLASS1.CPP for our first example
of a class in C++.  This is the first class example, but it will

                                                          Page 2-1

                                        Chapter 2 - Compound types

not be the last, since the class is the major     ================
reason for using C++ over ANSI-C or some other       CLASS1.CPP
programming language.  You will notice the        ================
keyword class used in line 4, in very much the
same way that the keyword struct was used in the
last program, and they are in fact very similar constructs.  There
are definite differences, as we will see, but for the present time
we will be concerned more with their similarities.

The word animal in line 4 is the name of the class, and when we
declare variables of this type in lines 12 through 14, we can
either omit the keyword class or include it if we desire as
illustrated in line 14.  In the last program, we declared 5
variables of a structure type, but in this program we declare 5
objects.  They are called objects because they are of a class type. 
The differences are subtle, and in this case the differences are
negligible, but as we proceed through this tutorial, we will see
that the class construct is indeed very important and valuable. 
The class was introduced here only to give you a glimpse of what
is to come later in this tutorial.

The class is a type which can be used to declare objects in much
the same way that a structure is a type that can be used to declare
variables.  Your dog named King is a specific instance of the
general class of dogs, and in a similar manner, an object is a
specific instance of a class.  It would be well to take note of the
fact that the class is such a generalized concept that there will
be libraries of prewritten classes available in the marketplace
soon.  You will be able to purchase classes which will perform some
generalized operations such as managing stacks, queues, or lists,
sorting data, managing windows, etc.  This is because of the
generality and flexibility of the class construct.  In fact, a few
class libraries are available now.

The new keyword public in line 5, followed by a colon, is necessary
in this case because the variables in a class are defaulted to a
private type and we could not access them at all without making
them public.  Don't worry about this program yet, we will cover all
of this in great detail later in this tutorial.

Be sure to compile and run it to see that it does what we say it
does with your compiler.  Keep in mind that this is your first
example of a class and it illustrates essentially nothing
concerning the use of this powerful structure.


THE FREE UNION OF C++
_________________________________________________________________

Examine the program named UNIONEX.CPP for an      ===============
example of a free union.  In ANSI-C, all unions     UNIONEX.CPP
must be named in order to be used, but this is    ===============
not true in C++.  We have the so called free
union, the union without a name.  The union is
                                                          Page 2-2

                                        Chapter 2 - Compound types

embedded within a simple structure and you will notice that there
is not a variable name following the declaration of the union in
line 11.  In ANSI-C, we would have to name the union and give a
triple name (three names dotted together) to access the members. 
Since it is a free union, there is no union name, and the variables
are accessed with only a doubly dotted name as illustrated in lines
18, 22, 26, 28, and 29.

You will recall that a union causes all the data contained within
the union to be stored in the same physical memory locations, such
that only one variable is actually available at a time.  This is
exactly what is happening here.  The variable named fuel_load,
bomb_load, and pallets are stored in the same physical memory
locations and it is up to the programmer to keep track of which is
stored there.  You will notice that the transport is assigned a
value for pallets in line 26, then a value for fuel_load in line
28.  When the value for fuel_load is assigned, the value for
pallets is corrupted and is no longer available since it was stored
where fuel_load is stored now.  The observant student will notice
that this is exactly the way the union is used in ANSI-C except for
the way components are named.

The remainder of the program should be easy for you to understand,
so after you study it and understand it, compile and execute it.


C++ TYPE CONVERSIONS
_________________________________________________________________

Examine the program named TYPECONV.CPP for a few ================
examples of type conversions in C++.  The type     TYPECONV.CPP
conversions are done in C++ in exactly the same  ================
manner as they are done in ANSI-C, but C++ gives
you another form for doing the conversions.

Lines 10 through 18 of this program use the familiar "cast" form
of type conversions used in ANSI-C, and there is nothing new to the
experienced C programmer.  You will notice that lines 10 through
13 are actually all identical to each other.  The only difference
is that we are coercing the compiler to do the indicated type
conversions prior to doing the addition and the assignment in some
of the statements.  In line 13, the int type variable will be
converted to type float prior to the addition, then the resulting
float will be converted to type char prior to being assigned to the
variable c.

Additional examples of type coercion are given in lines 15 through
18 and all four of these lines are essentially the same.

The examples given in lines 20 through 28 are unique to C++ because
they are not valid in ANSI-C.  In these lines the type coercions
are written as though they are function calls instead of the "cast"
method as illustrated earlier.  Lines 20 through 28 are identical
to lines 10 through 18.

                                                          Page 2-3

                                        Chapter 2 - Compound types


You may find this method of type coercion to be clearer and easier
to understand than the "cast" method and in C++ you are free to use
either, or to mix them if you so desire, but your code could be
very difficult to read if you indescriminantly mix them.

Be sure to compile and execute this example program.


PROGRAMMING EXERCISES
_________________________________________________________________


1.   Starting with the program ENUM.CPP, add the enumerated value
     of forfeit to the enumerated type game_result, and add a
     suitable message and logic to get the message printed in some
     way.

2.   Add the variable number_of_ways to the class of CLASS1.CPP and
     store some values in the new variable.  Print some of the
     values out.  Move the new variable ahead of the keyword
     public: and see what kind of error message results.  We will
     cover this error in chapter 5 of this tutorial.
































                                                          Page 2-4

```
{% endraw %}

## CHAP03.TXT

{% raw %}
```



                                                        Chapter 3
                                                         POINTERS

Because pointers are so important in C and C++, this chapter will
review some of the more important topics concerning pointers.  Even
if you are extremely conversant in the use of pointers, you should
not completely ignore this chapter because some new material is
presented here.


POINTER REVIEW
_________________________________________________________________

Examine the program named POINTERS.CPP for a     ================
simple example of the use of pointers.  This is    POINTERS.CPP
a pointer review and if you are comfortable with ================
the use of pointers, you can skip this example
program completely. 
A pointer in either ANSI-C or C++ is declared with an asterisk
preceding the variable name.  The pointer is then a pointer to a
variable of that one specific type and should not be used with
variables of other types.  Thus pt_int is a pointer to an integer
type variable and should not be used with any other type.  Of
course, an experienced C programmer knows that it is simple to
coerce the pointer to be used with some other type by using a cast,
but he must assume the responsibility for its correct usage.

In line 12 the pointer named pt_int is assigned the address of the
variable named pig and line 13 uses the pointer named pt_int to add
the value of dog to the value of pig because the asterisk
dereferences the pointer in exactly the same manner as standard C. 
The address is used to print out the value of the variable pig in
line 14 illustrating the use of a pointer with the stream output
operator cout.  Likewise, the pointer to float named pt_float is
assigned the address of x, then used in a trivial calculation in
line 18.

If you are not completely comfortable with this trivial program
using pointers, you should review the use of pointers in any good
C programming book or Coronado Enterprises C tutorial before
proceeding on because we will assume that you have a thorough
knowledge of pointers throughout the remainder of this tutorial. 
It is not possible to write a C program of any significant size or
complexity without the use of pointers.


CONSTANT POINTERS AND POINTERS TO CONSTANTS
_________________________________________________________________

The definition of C++ allows a pointer to a constant to be defined
such that the value to which the pointer points cannot be changed
but the pointer itself can be moved to another variable or
constant.  The method of defining a pointer to a constant is

                                                         Page 3-1

                                             Chapter 3 - Pointers

illustrated in line 22.  In addition to a pointer to a constant,
you can also declare a constant pointer, one that cannot be
changed.  Line 23 illustrates this.  Note that neither of these
pointers are used in illustrative code.

Either of these constructs can be used to provide additional
compile time checking and improve the quality of your code.  If you
know a pointer will never be moved due to its nature, you should
define it as a constant pointer.  If you know that a value will not
be changed, it can be defined as a constant and the compiler will
tell you if you ever inadvertently attempt to change it.


A POINTER TO VOID
_________________________________________________________________

The pointer to void is actually a part of the ANSI-C standard but
is relatively new so it is commented upon here.  A pointer to void
can be assigned the value of any other pointer type.  You will
notice that the pointer to void named general is assigned an
address of an int type in line 15 and the address of a float type
in line 20 with no cast and no complaints from the compiler.  This
is a relatively new concept in C and C++.  It allows a programmer
to define a pointer that can be used to point to many different
kinds of things to transfer information around within a program. 
A good example is the malloc() function which returns a pointer to
void.  This pointer can be assigned to point to any entity, thus
transferring the returned pointer to the correct type.

A pointer to void is aligned in memory in such a way that it can
be used with any of the simple predefined types available in C++,
or in ANSI-C for that matter.  They will also align with any
compound types the user can define since compound types are
composed of the simpler types.

Be sure to compile and execute this program.


DYNAMIC ALLOCATION AND DEALLOCATION
_________________________________________________________________

Examine the program named NEWDEL.CPP for our     ================
first example of the new and delete operators.      NEWDEL.CPP
The new and delete operators do dynamic          ================
allocation and deallocation in much the same
manner that malloc() and free() do in your old
favorite C implementation.

During the design of C++, it was felt that since dynamic allocation
and deallocation are such a heavily used part of the C programming
language, it should be a part of the language, rather than a
library add-on.  The new and delete operators are actually a part
of the C++ language and are operators, much like the addition
operator or the assignment operator.  They are therefore very

                                                         Page 3-2

                                             Chapter 3 - Pointers

efficient, and are very easy to use as we will see in this example
program.

Lines 14 and 15 illustrate the use of pointers in the tradition of
C and line 16 illustrates the use of the new operator.  This
operator requires one modifier which must be a type as illustrated
here.  The pointer named point2 is now pointing at the new integer
variable which exists on the heap, and can be used in the same way
that any dynamically allocated variable is used in ANSI-C.  Line
18 illustrates displaying the value on the monitor which was
assigned in line 17.

Line 20 allocates another new variable and line 21 causes point2
to refer to the same dynamically allocated variable as point1 is
pointing to.  In this case, the reference to the variable that
point2 was previously pointing to has been lost and it can never
be used or deallocated.  It is lost on the heap until we return to
the operating system when it will be reclaimed for further use, so
this is obviously not good practice.  Note that point1 is
deallocated with the delete operator in line 25, and point2 can not
actually be deleted.  Since the pointer point1 itself is not
changed, it is actually still pointing to the original data on the
heap.  This data could probably be referred to again using point1,
but it would be terrible programming practice since you have no
guarantee what the system will do with the pointer or the data. 
The data storage is returned to the free list to be allocated in
a subsequent call, and will soon be reused in any practical
program.

Since the delete operator is defined to do nothing if it is passed
a NULL value, it is legal to ask the system to delete the data
pointed to by a pointer with the value of NULL, but nothing will
actually happen.  It is considered a no-op and is actually wasted
code.  The delete operator can only be used to delete data
allocated by a new operator.  If the delete is used with any other
kind of data, the operation is undefined and anything can happen. 
According to the ANSI standard, even a system crash is a legal
result of this illegal operation, and can be defined as such by the
compiler writer.

In line 27, we declare some floating point variables.  You will
remember that in C++ the variables do not have to be declared at
the beginning of a block.  A declaration is an executable statement
and can therefore appear anywhere in a list of executable
statements.  One of the float variables is allocated within the
declaration to illustrate that this can be done.  Some of the same
operations are performed on these float type variables as were done
on the int types earlier.

Some examples of the use of a structure are given in lines 35
through 41 and should be self explanatory.

Finally, since the new operator requires a type to determine the
size of the dynamically allocated block, you may wonder how you can

                                                         Page 3-3

                                             Chapter 3 - Pointers

allocate a block of arbitrary size.  This is possible by using the
construct illustrated in line 47 where a block of 37 char sized
entities, which will be 37 bytes, is allocated.  A block of 133
bytes greater than the size of the date structure is allocated in
line 49.  It is therefore clear that the new operator can be used
with all of the flexibility of the malloc() function which you are
used to using.

The standard functions which you have been using in C for dynamic
memory management, malloc(), calloc(), and free(), are also
available for use in C++ and can be used in the same manner they
were used in C.  The new and delete operators should not be
intermixed with the older function calls since the results may be
unpredictable.  If you are updating code with the older function
calls, continue to use them for any additions to the code.  If you
are designing and coding a new program you should use the newer
constructs because they are a built in part of the language rather
than an add on and are therefore more efficient.

Be sure to compile and execute this program.


POINTERS TO FUNCTIONS
_________________________________________________________________

Examine the program named FUNCPNT.CPP for an      ===============
example of using a pointer to a function.  It       FUNCPNT.CPP
must be pointed out that there is nothing new     ===============
here, the pointer to a function is available in
ANSI-C as well as in C++ and works in the manner
described here for both languages.  It is not regularly used by
most C programmers, so it is defined here for your information.

There is nothing unusual about this program except for the pointer
to a function declared in line 8.  This declares a pointer to a
function which returns nothing (void) and requires a single formal
parameter, a float type variable.  You will notice that all three
of the functions declared in lines 5 through 7 fit this profile and
are therefore candidates to be called with this pointer.  If you
have not used prototyping in C, these lines will look strange to
you.  Don't worry about them at this point since we will study
prototyping in the next chapter of this tutorial.

Observe that in line 15 we call the function print_stuff() with the
parameter pi and in line 16 we assign the function pointer named
function_pointer the value of print_stuff() and use the function
pointer to call the same function again in line 17.  Lines 15 and
17 are therefore identical in what is accomplished because of the
pointer assignment in line 16.  In lines 18 through 23, a few more
illustrations of the use of the function pointer are given.  You
will be left to study these on your own.

Since we assigned the name of a function to a function pointer, and
did not get an assignment error, the name of a function must be a

                                                         Page 3-4

                                             Chapter 3 - Pointers

pointer to that function.  This is exactly the case, a function
name is a pointer to that function, but it is a pointer constant
and cannot be changed.  This is exactly the case we found when we
studied arrays in ANSI-C at some point in our C programming
background.  An array name is a pointer constant to the first
element of the array.

Since the name of the function is a constant pointer to that
function, we can assign the name of the function to a function
pointer and use the function pointer to call the function.  The
only caveat is that the return value and the number and types of
parameters must be identical.  Most C and C++ compilers will not,
and in fact, can not warn you of type mismatches between the
parameter lists when the assignments are made.  This is because the
assignments are done at runtime when no type information is
available to the system, rather than at compile time when all type
information is available.

This use and operations of pointers must be thoroughly understood
when we get to the material on dynamic binding and polymorphism
later in this tutorial.  It will be discussed in detail at that
time.

Be sure to compile and execute this program.


PROGRAMMING EXERCISES
_________________________________________________________________


1.   When dynamically allocated data is deleted, it is still
     actually in memory, stored on the heap.  Repeat the output
     statement from line 23 of NEWDEL.CPP immediately following the
     delete in line 25 to see if the values are really still there. 
     Repeat it once again just prior to the end of the program when
     the data spaces should have been written over to see if you
     get garbage out.  Even if your compiler reports the correct
     data, it is terrible practice to count on this data still
     being there because in a large dynamic program, the heap space
     will be used repeatedly.

2.   Add a function to FUNCPNT.CPP which uses a single integer for
     a parameter and attempt to call it by using the function
     pointer to see if you get the correct data into the function.










                                                         Page 3-5
```
{% endraw %}

## CHAP04.TXT

{% raw %}
```



                                                        Chapter 4
                                                        FUNCTIONS

This chapter discusses the changes in the use of functions that
have been made to C++ in order to make programming more convenient
and to let the compiler do further checking for errors.  A fair
amount of time is also spent on teaching the modern form of
function definition and prototyping.

Prototyping allows the compiler to do additional type checking for
your function calls which can aid in detecting programming errors. 
The first two example programs in this chapter are designed to
teach prototyping and what it will do for you.  Prototyping is a
relatively new addition to C, so even some experienced C
programmers are not familiar with it.  If you have experience with
prototyping you can skip directly to the section named INLINE CODE
on page 4-4 of this chapter.


PROTOTYPES
_________________________________________________________________

Examine the file named PROTYPE1.CPP for our      ================
first look at a prototype and an illustration of   PROTYPE1.CPP
how it is used.  The prototyping used in C++ is  ================
no different than that used in ANSI-C. 
Actually, many C programmers take a rather dim
view of prototyping and seem reluctant to use it, but with C++ it
is considerably more important and is in much heavier use.  In
fact, prototyping is required to be used in C++.

A prototype is a limited model of a more complete entity to come
later.  In this case, the full function is the complete entity to
come later and the prototype is illustrated in line 4.  The
prototype gives a model of the interface to the function that can
be used to check the calls to the function for the proper number
of parameters and the correct types of parameters.  Each call to
the function named do_stuff() must have exactly three parameters
or the compiler will give an error message.  In addition to the
correct number of parameters, the types must be compatible or the
compiler will issue an error message.  Notice that when the
compiler is working on lines 12 and 13, the type checking can be
done based on the prototype in line 4 even though the function
itself is not yet defined.  If the prototype is not given, the
number of parameters will not be checked, nor will the types of the
parameters be checked.  You will get an apparently good compile and
link, but the program may do some very strange things when it is
executed if the correct number of parameters are not used.

To write the prototype, simply copy the header from the function
to the beginning of the program and append a semicolon to the end
as a signal to the compiler that this is not a function but a
prototype.  The variable names given in the prototype are optional

                                                         Page 4-1

                                            Chapter 4 - Functions

and act merely as comments to the program reader since they are
completely ignored by the compiler.  You could replace the variable
name wings in line 4 with your first name and there would be no
difference in compilation.  Of course, the next person that had to
read your program would be somewhat baffled with your choice of
names.

In this case, the two function calls to this function, given in
lines 12 and 13, are correct so no error will be listed during
compilation.

Even though we wish to use the char type for eyes in the function,
we wish to use it as a number rather than as a character.  The cast
to int in line 20 is required to force the printout of the
numerical value rather than an ASCII character.  The next example
program is similar but without the cast to int.


COMPATIBLE TYPES
_________________________________________________________________

We mentioned compatible types earlier so we should review them just
a bit in order to make our discussion of prototyping complete. 
Compatible types are any simple types that can be converted from
one to another in a meaningful way.  For example, if you used an
integer as the actual parameter and the function was expecting a
float type as the formal parameter, the system would do the
conversion automatically, without mentioning it to you.  This is
also true of a float changing to a char, or a char changing to an
int.  There are definite conversion rules which would be followed. 
These rules are given in great detail in section 3.2 of the draft
of the ANSI-C standard and are also given on page 198 of the second
edition of the K&R reference.

If we supplied a pointer to an integer as the actual parameter and
expected an integer as the formal parameter in the function, the
conversion would not be made because they are two entirely
different kinds of values.  Likewise, a structure would not be
converted automatically to a long float, an array, or even to a
different kind of structure, they are all incompatible and cannot
be converted in any meaningful manner.  The entire issue of type
compatibility as discussed in chapter 2 of this tutorial applies
equally well to the compatibility of types when calling a function. 
Likewise, the type specified as the return type, in this case void,
must be compatible with the expected return type in the calling
statement, or the compiler will issue a warning.


HOW DOES PROTOTYPING WORK?
_________________________________________________________________

This is your chance to try prototyping for yourself and see how
well it works and what kinds of error messages you get when you do
certain wrong things.  Change the actual parameters in line 12 to

                                                         Page 4-2

                                            Chapter 4 - Functions

read (12.2, 13, 12345) and see what the compiler says about that
change.  It will probably say nothing because they are all type
compatible.  If you change it to read (12.0, 13), it will issue a
warning or error because there are not enough arguments given. 
Likewise you should receive an error message if you change one of
the parameters in line 13 to an address by putting an ampersand in
front of one of the variable names.  Finally, change the first word
in line 4 from void to int and see what kind of error message is
given.  You will first be required to make the function header in
line 16 agree with the prototype, then you will find that there is
not a variable returned from the function.  Finally, you will find
that there is a returned value that is not used in the calling
program.  You should have a good feeling that prototyping is doing
something good for you after making all of those changes.

Be sure to compile and execute this program then make the changes
recommended above, attempting to compile it after each change.


A LITTLE MORE PROTOTYPING
_________________________________________________________________

Examine the next example program named           ================
PROTYPE2.CPP for a little more information on      PROTYPE2.CPP
prototyping.  This program is identical to the   ================
last one except for a few small changes.  The
variable names have been omitted from the
prototype in line 4 merely as an illustration that they are
interpreted as comments by the C++ compiler.  The function header
is formatted differently to allow for a comment alongside each of
the actual parameters.  This should make the function header a
little more self explanatory.  However, you should remember that
comments should not be used to replace good selection of variable
names.  In this particular case, the comments add essentially
nothing to the clarity of the program.



WHAT DOES PROTOTYPING COST?
_________________________________________________________________

Prototyping is essentially free because it costs absolutely nothing
concerning the run time size or speed of execution.  Prototyping
is a compile time check and slows down the compile time a
negligible amount because of the extra checking that the compiler
must do.  If prototyping finds one error for you that you would
have had to find with a debugger, it has more than paid for itself
for use in an entire project.  I once spent 12 hours of debugging
time to find that I forgot to pass the address of a variable to a
function.  Prototyping would have found the error on the first
compilation of this 2000 line program.

The only price you pay to use prototyping is the extra size of the
source files because of the prototypes, and the extra time for the

                                                         Page 4-3

                                            Chapter 4 - Functions

compiler to read the prototypes during the compilation process, but
both costs are negligible.

Be sure to compile and execute this example program.  You will find
that it is identical to the last example program.



PASS BY REFERENCE
_________________________________________________________________

Examine The file named PASSREF.CPP for an          ===============
example of a pass by reference, a construct          PASSREF.CPP
which is not available in ANSI-C.  The reference   ===============
variable was mentioned in chapter 1 and it was
recommended there that you don't use it.  This
example program illustrates where it can be used to your advantage. 
The pass by reference allows the passing of a variable to a
function and returning the changes made in the function to the main
program.  In ANSI-C the same effect can be seen when a pointer to
a variable is passed to a function, but this is a little neater.

Observe the prototype in line 4 where the second variable has an
ampersand in front of the variable name.  The ampersand instructs
the compiler to treat this variable just like it were passed a
pointer to the variable since the actual variable from the main
program will be used in the function.  In the function itself, in
lines 21 through 24, the variable in2 is used just like any other
variable but we are using the variable passed to this function from
the main program not a copy of it.  The other variable named in1
is treated just like any other normal variable in ANSI-C.  In
effect, the name in2 is a synonym for the variable named index in
the main program.

If you prefer to omit the variable names in the prototypes, you
would write the prototype as follows;

   void fiddle(int, int&);

If you are a Pascal programmer, you will recognize that the
variable named in1 is treated just like a normal parameter in a
Pascal call, a call by value.  The variable named in2 however, is
treatedlike a variable with the reserved word VAR used in front of
it usually referred to as a call by reference.

When you compile and execute this program, you will find that the
first variable got changed in the function but was returned to its
original value when we returned to the main program.  The second
variable however, was changed in the function and the new value was
reflected back into the variable in the main program which we can
see when the values are listed on the monitor.




                                                         Page 4-4

                                            Chapter 4 - Functions

DEFAULT PARAMETERS
_________________________________________________________________

Examine the file named DEFAULT.CPP for an         ===============
example of the use of default parameters in C++.    DEFAULT.CPP
This program really looks strange since it        ===============
contains default values for some of the
parameters in the prototype, but these default
values are very useful as we will see shortly.
This prototype says that the first parameter named length must be
given for each call of this function because a default value is not
supplied.  The second parameter named width, however, is not
required to be specified for each call, and if it is not specified,
the value 2 will be used for the variable width within the
function.  Likewise, the third parameter is optional, and if it is
not specified, the value of 3 will be used for height within the
function.

In line 11 of this program, all three parameters are specified so
there is nothing unusual about this call from any other function
call we have made.  Only two values are specified in line 12
however, so we will use the default value for the third parameter
and the system acts as if we called it with (x, y, 3) since the
default value for the third value is 3.  In line 13, we only
specified one parameter which will be used for the first formal
parameter, and the other two will be defaulted.  The system will
act as if we had called the function with (x, 2, 3).  Note that the
output from these three lines is reversed.  This will be explained
shortly.

There are a few rules which should be obvious but will be stated
anyway.  Once a parameter is given a default value in the list of
formal parameters, all of the remaining must have default values
also.  It is not possible to leave a hole in the middle of the
list, only the trailing values can be defaulted.  Of course, the
defaulted values must be of the correct types or a compiler error
will be issued.  The default values can be given in either the
prototype or the function header, but not in both.  If they are
given in both places, the compiler must not only use the default
value, but it must carefully check to see that both values are
identical.  THis could further complicate an already very
complicated problem, that of writing a C++ compiler.


WHY IS THE OUTPUT SCRAMBLED?
_________________________________________________________________

When the compiler finds a cout statement, the complete line of code
is initially scanned from right to left to evaluate any functions,
then the data is output field by field from left to right. 
Therefore in line 11, get_value() is evaluated with its internal
output displayed first.  Then the fields of the cout are displayed
from left to right with "Some box data is" displayed next. 
Finally, the result of the return from get_value() is output in int

                                                         Page 4-5

                                            Chapter 4 - Functions

format, the type of the returned value.  The end result is that the
output is not in the expected order when lines 11 through 13 are
executed.  (The output is not what you would intuitively expect to
happen so appears to be a deficiency in the language.  A call to
Borland International, the writers of TURBO C++, verified that this
is operating correctly.)

Lines 15 through 18 are similar to any two of the lines of code in
lines 11 through 13, but are each separated into two lines so the
output is correct.  

Be sure to compile and execute DEFAULT.CPP after you understand it. 
Note that the funny output will appear again later in this
tutorial.


VARIABLE NUMBER OF ARGUMENTS
_________________________________________________________________

Examine the program named VARARGS.CPP for an      ===============
illustration of the use of a variable number of     VARARGS.CPP
arguments in a function call.                     ===============

We have gone to a lot of trouble to get the
compiler to help us by carefully checking how many parameters we
use in the function calls and checking the types of the parameters. 
On rare occasion, we may wish to write a function that uses a
variable number of parameters.  The printf() function is a good
example of this.  ANSI-C has a series of three macros available in
the "stdarg.h" header file to allow the use of a variable number
of arguments.  Of course these are available for use with C++ also,
but we need a way to eliminate the strong type checking that is
done with all C++ functions.  The three dots illustrated in line
6 will do this for us.  This prototype says that a single argument
of type int is required as the first parameter, then no further
checking will be done by the compiler.

You will note that the main program consists of three calls to the
function, each with a different number of parameters, and the
system does not balk at the differences in the function calls.  In
fact, you could put as many different types as you desire in the
calls.  As long as the first one is an int type variable, the
system will do its best to compile and run it for you.  Of course
the compiler is ignoring all type checking beyond the first
parameter so it is up to you to make sure you use the correct
parameter types in this call.

In this case the first parameter gives the system the number of
additional parameters to look for and handle.  In this simple
program, we simply display the numbers on the monitor to illustrate
that they really did get handled properly.

Of course, you realize that using a variable number of arguments
in a function call can lead to very obscure code and should be used

                                                         Page 4-6

                                            Chapter 4 - Functions

very little in a production program, but the capability exists if
you need it.  Be sure to compile and execute this program.


FUNCTION NAME OVERLOADING
_________________________________________________________________

Examine the file named OVERLOAD.CPP for an       ================
example of a program with the function names       OVERLOAD.CPP
overloaded.  This is not possible in ANSI-C, but ================
is perfectly legal and in fact used quite
regularly in C++.  At first this will seem a bit
strange, but it is one of the keystones of object oriented
programming.  You will see its utility and purpose very clearly in
later chapters of this tutorial.

You will notice in this example program that there are three
functions, in addition to the main function, and all three have the
same name.  Your first question is likely to be, "Which function
do you call when you call do_stuff()?"  That is a valid question
and the answer is, the function that has the correct number of
formal parameters of the correct types.  If do_stuff() is called
with an integer value or variable as its actual parameter, the
function beginning in line 22 will be called and executed.  If the
single actual parameter is of type float, the function beginning
in line 27 will be called, and if two floats are specified, the
function beginning in line 33 will be called.

It should be noted that the return type can also be used to
determine which function will be called, but that is of no help in
this case because the stream output functions called in lines 15
through 19 are typeless as mentioned earlier.

The keyword overload used in line 4 tells the system that you
really do intend to overload the name do_stuff, and the overloading
is not merely an oversight.  This is only required in C++ version
1.2.  C++ version 2.0 and greater do not require the keyword
overload but allows it to be used optionally in order to allow the
existing body of C++ code to be compilable with newer compilers. 
It may be best to include the keyword as an indication to future
readers of your code that function name overloading is
intentionally used here.

The actual selection is done at compile time, not at execution time
so the program is not slowed down.  If each of the overloaded
function names were changed to different names, each being unique,
there would be no difference in execution size or time of the
resulting program.

Overloading of function names may seem very strange to you , and
it is strange if you are used to the rules of K&R or ANSI-C
programming.  As you gain experience with C++, you will feel very
comfortable with this and you will use it a lot in your C++
programming.


                                                         Page 4-7

                                            Chapter 4 - Functions


Note the use of the keyword const used in some of the function
prototypes and headers.  Once again, this prevents the programmer
from accidentally changing the formal parameter within the
function.  In a function as short as these, there is no real
problem with an accidental assignment.  In a real function that you
occasionally modify, you could easily forget the original intention
of the use of a value and attempt to change it during an extended
debugging session.


PROGRAMMING EXERCISES
_________________________________________________________________


1.   Change the type of wings in the prototype of PROTYPE1.CPP to
     float so that it disagrees with the function definition to see
     if you get a compilation error.

2.   Change the function definition in PROTYPE1.CPP to agree with
     the changed prototype.  Compile and execute the program
     without changing the calls in lines 12 and 13.  Explain the
     results.

3.   In DEFAULT.CPP, remove the default value from the prototype
     for height only to see what kind of compiler error you get. 
     Only the last values of the list can be defaulted. 

4.   In OVERLOAD.CPP, change the names of the three functions so
     that each is a unique name and compare the size of the
     resulting executable file with that given by the present
     program.























                                                         Page 4-8
```
{% endraw %}

## CHAP05.TXT

{% raw %}
```



                                                        Chapter 5
                                                    ENCAPSULATION

As mentioned in Chapter 1, object oriented programming will seem
very unnatural to a programmer with a lot of procedural programming
experience.  This chapter is the beginning of the definition of
object oriented programming, and we will study the topic of
encapsulation which is a "divide and conquer" technique.  As we
stated earlier, there are a lot of new terms used with object
oriented programming.  Don't be intimidated by the new terminology,
we will study the terms one at a time in a meaningful order.

Encapsulation is the process of forming objects which we will
discuss throughout this chapter.  An encapsulated object is often
called an abstract data type and it is what object oriented
programming is all about.  Without encapsulation, which involves
the use of one or more classes, there is no object oriented
programming.  Of course there are other topics concerning object
oriented programming, but this is the cornerstone.


NO INFORMATION HIDING
_________________________________________________________________

The program named OPEN.CPP is a really stupid      ==============
program because it does next to nothing but it        OPEN.CPP
will be the beginning point for our discussion     ==============
of encapsulation, otherwise known as information
hiding.  Information hiding is an important part
of object oriented programming and you should have a good grasp of
what it is and what it will do for you by the time we finish this
chapter.

A very simple structure is defined in lines 4 through 6 which
contains only a single int type variable within the structure. 
This is sort of a silly thing to do but it will illustrate the
problem we wish to overcome in this chapter.  Three variables are
declared in line 10, each of which contains a single int type
variable and each of the three variables are available anywhere
within the main function.  Each variable can be assigned,
incremented, read, modified, or have any number of operations
performed on it.  A few of the operations are illustrated in lines
13 through 21 and should be self explanatory to anyone with a
little experience with the C programming language.

An isolated local variable named piggy is declared and used in the
same section of code to illustrate that there is nothing magic
about this code.

Study this simple program carefully because it is the basis for
beginning our study of encapsulation.  Be sure to compile and
execute this program, then we will go on to the next example
program.

                                                         Page 5-1

                                        Chapter 5 - Encapsulation

INFORMATION HIDING
_________________________________________________________________

Examine the program named CLAS.CPP for our first   ==============
example of a program with a little information        CLAS.CPP
hiding contained in it.  This program is           ==============
identical to the last one except for the way it
does a few of its operations.  We will take the
differences one at a time and explain what is happening here.  Keep
in mind that this is a trivial program and the safeguards built
into it are not needed for such a simple program but are used here
to illustrate how to use these techniques in a larger much more
complicated program.

The first difference is that we have a class instead of a structure
beginning in line 4 of this program.  The only difference between
a class and a structure is that a class begins with a private
section whereas a structure has no private section automatically
defined.  Everything in a structure is defaulted to public by
definition of the C++ language, but you can declare a private
section in a structure if you so desire.  The keyword class is used
to declare a class as illustrated here.


WHAT IS A PRIVATE SECTION?
_________________________________________________________________

A private section of a class is a section of data which cannot be
accessed outside of the class, it is hidden from any outside
access.  Thus, the variable named data_store which is a part of the
object (an object will be defined completely later) named dog1
declared in line 23 is not available for use anywhere in the main
program.  It seems a little dumb to declare a variable in the main
program that we cannot use, but that is exactly what we did.

The class is composed of the single variable named data_store and
two functions, one named set() and the other named get_value(). 
A more complete definition of a class is a group of variables and
one or more functions that can operate on that data.  Stay with us,
we will tie this all together in a meaningful and useful way very
soon.


WHAT IS A PUBLIC SECTION?
_________________________________________________________________

A new keyword, public, is introduced in line 6 which states that
anything following this keyword can be accessed from the main
program or any function that is within the scope of an object of
the given class.  Because the two functions are defined following
the keyword public, they are both public and available for use in
the calling function or any other function that is within the scope
of the calling function.  You should keep in mind that the private
variable is not available to the calling program.  Thus, we can

                                                         Page 5-2

                                        Chapter 5 - Encapsulation

only use the variable by calling one of the two functions defined
as a part of the class.  These are called member functions because
they are members of the class.

Since we have declared two functions, we need to define them, by
saying what each function will actually do.  This is done in lines
11 through 19 where they are each defined in the normal way except
that the class name is prepended onto the function name and
separated from it by a double colon.  These two function
definitions are called the implementation of the functions.  The
class name is required because we can use the same function name
in other classes and the compiler must know with which class to
associate each function implementation.

One of the key points to be made here is that the private data
contained within the class is available within the implementation
of the member functions of the class for modification or reading
in the normal manner.  You can do anything with the private data
within the function implementations which are a part of that class,
but the private data of other classes is hidden and not available
within the member functions of this class.  This is the reason we
must prepend the class name to the function names of this class
when defining them.


In C++ we have three scopes of variables, local, file and class. 
Local variables are localized to a single function and file
variables are available anywhere in a file following their
definition.  A variable with class scope is available anywhere
within the scope of a class and nowhere else.

It would be well to mention at this point that it is legal to
include variables and functions in the private part and additional
variables and functions in the public part.  In most practical
situations, variables are included in only the private part and
functions are included in only the public part of a class
definition.  Occasionally, variables or functions are used in the
other part.  This sometimes leads to a very practical solution to
a particular problem, but in general, the entities are used only
in the places mentioned.


MORE NEW TERMINOLOGY
_________________________________________________________________

If we are going to learn how to effectively use object oriented
programming, we must learn the new terminology of the technique,
so we will list a few of them here and begin using them in the text
to get you used to seeing and using them.

      A class is a grouping of data and methods.  A class is
      very much like a type as used in ANSI-C, it is only a
      pattern to be used to create a variable which can be
      manipulated in a program.

                                                         Page 5-3

                                        Chapter 5 - Encapsulation


      An object is an instance of a class.  An object is what
      you actually use in a program since it has values and can
      be changed.

      A method is a function contained within the class.  You
      will find the functions used within a class referred to
      as a method.

      A message is the same thing as a function call.  In
      object oriented programming, we send messages instead of
      calling functions.  For the time being, you can think of
      them as identical.  Later in this tutorial we will see
      that they are in fact slightly different.

With all the new terminology, we will continue our study of the
program named CLAS.CPP and show you how to use the class.  We can
now say that we have a class composed of one variable and two
methods.  The methods operate on the variable contained in the
class when they receive messages to do so.  In this tutorial we
will use the terms object and variable interchangeably because both
names are very descriptive of what the object really is.

This is a small point but it could be easily overlooked.  Lines 7
and 8 of this program are actually the prototypes for the two
methods, and is our first example of the use of a prototype within
a class.  This is the reason we spent so much time on prototypes
in the last chapter.  You will notice line 7 which says that the
method named set requires one parameter of type int and returns
nothing, hence the return type is void.  The method named
get_value() however, according to line 8, has no input parameters
but returns an int type value to the caller.


SENDING A MESSAGE
_________________________________________________________________

Following all of the definitions in lines 1 through 19, we finally
come to the program where we actually use the class.  In line 23
we declare three objects of the class one_datum and name the
objects dog1, dog2, and dog3.  Each object contains a single data
point which we can set through use of one method or read its value
through use of the other method.  In line 26, we send a message to
the object named dog1 instructing it to set its internal value to
12, and even though this looks like a function call, it is properly
called sending a message to a method.  Remember that the object
named dog1 has a method associated with it called set() that sets
its internal value to the actual parameter included within the
message.  You will notice that the form is very much like the means
of accessing the elements of a structure.  You mention the name of
the object with a dot connecting it to the name of the method.  In
a similar manner, we send a message to each of the other two
objects dog2 and dog3 to set their values to those indicated.

                                                         Page 5-4

                                        Chapter 5 - Encapsulation

Lines 31 and 32 have been commented out because the operations are
illegal since the variable named data_store is private and not
available to the code outside of the object itself.  It should be
obvious, but it will be pointed out that the data contained within
the object named dog1 is not available within the methods of dog2
or dog3 because they are different objects.  These rules are all
devised to help you develop better code more quickly and you will
soon see how they help.

The other method defined for each object is used in lines 34
through 36 to illustrate how it can be used.  In each case, another
message is sent to each object and the returned result is output
to the monitor via the stream library.



USING A NORMAL VARIABLE
_________________________________________________________________

There is another variable named piggy declared and used throughout
this example program that illustrates that a normal variable can
be intermixed with the objects and used in the normal manner.  The
use of this variable should pose no problem to you, so after you
understand the program, be sure to compile and execute it.  It
would be a good exercise for you to remove the comments from lines
31 and 32 to see what kind of error message your compiler issues.

This program illustrates information hiding but it will not be
clear to you that it really does anything worthwhile until we study
the next two programs.  Be sure to compile and execute this program
before continuing on to the next example program.



A PROGRAM WITH PROBLEMS
_________________________________________________________________

Examine the program named OPENPOLE.CPP for an    ================
example of a program with a few serious problems   OPENPOLE.CPP
that will be overcome in the next example        ================
program by using the principles of
encapsulation.

We have two structures declared, one being a rectangle and the
other being a pole.  The data fields should be self explanatory
with the exception of the depth of the flagpole which is the depth
it is buried in the ground, the overall length of the pole is
therefore the sum of the length and the depth.

Based on your experience with ANSI-C, you should have no problem
at all understanding exactly what the program is doing, but you may
be a bit confused at the meaning of the result found in line 38
where we multiply the height of the square with the width of the
box.  This is perfectly legal to do in ANSI-C or C++, but the

                                                         Page 5-5

                                        Chapter 5 - Encapsulation

result has no earthly meaning because the data are for two
different entities.  Likewise, the result calculated in line 40 is
even sillier because the product of the height of the square and
the depth of the flagpole has absolutely no meaning in any physical
real world system we can think up.

Wouldn't it be neat if we had a way to prevent such stupid things
from happening in a large production program.  If we had a good
program that defined all of the things we can do with a square and
another program that defined everything we could do with a pole,
and if the data could be kept mutually exclusive, we could prevent
these silly things from happening.

It should come as no real surprise to you that the next program
will do just those things for us and do it in a very elegant way. 
Before proceeding on to the next example program, you should
compile and execute this one even though it displays some silly
results.



OBJECTS PROTECT DATA
_________________________________________________________________

Examine the program named CLASPOLE.CPP as an     ================
example of data protection in a very simple        CLASPOLE.CPP
program.                                         ================

In this program the rectangle is changed to a
class with the same two variables which are now private, and two
methods to handle the private data.  One method is used to
initialize the values of the objects created and the other method
to return the area of the object.  The two methods are defined in
lines 12 through 21 in the manner described earlier in this
chapter.  The pole is left as a structure to illustrate that the
two can be used together and that C++ is truly an extension of
ANSI-C.

In line 33 we declare two objects, once again named box and square,
but this time we cannot assign values directly to their individual
components because they are private elements of the class.  Lines
36 through 38 are commented out for that reason and the messages
are sent to the objects in lines 40 and 41 to tell them to
initialize themselves to the values input as parameters.  The
flag_pole is initialized in the same manner as in the previous
program.  Using the class in this way prevents us from making the
silly calculations we did in the last program.  The compiler is now
being used to prevent the erroneous calculations.  The end result
is that the stupid calculations we did in the last program are not
possible in this program so lines 50 through 53 have been commented
out.  Once again, it is difficult to see the utility of this in
such a simple program.  In a large program, using the compiler to
enforce the rules can pay off in a big way.



                                                         Page 5-6

                                        Chapter 5 - Encapsulation

This is the abstract data type mentioned earlier in this chapter,
a model with an allowable set of variables for data storage and a
set of allowable operations that can be performed on that stored
data.  The only operations that can be performed on the data are
those defined by the methods which prevents many kinds of erroneous
or silly operations.  Encapsulation and data hiding bind the data
and procedures, or methods, tightly together and limit the scope
and visibility of each.  Once again, we have the divide and conquer
technique in which an object is separated from the rest of the code
and carefully developed in complete isolation from it.  Only then
is it integrated into the rest of the code with a few very simple
interfaces.



HAVE YOU EVER USED THIS TECHNIQUE BEFORE?
_________________________________________________________________

A good example of the use of this technique is in the file commands
you have been using with ANSI-C.  The data in the file is only
available through the predefined functions provided by your
compiler writer.  You have no direct access to the actual data
because it is impossible for you to address the actual data stored
on the disk.  The data is therefore private data, as far as you are
concerned, but the available functions are very much like methods
in C++.  There are two aspects of this technique that really count
when you are developing software.  First, you can get all of the
data you really need from the file system because the interface is
complete, but secondly, you cannot get any data that you do not
need.  You are prevented from getting into the file handling system
and accidentally corrupting some data stored within it.  You are
also prevented from using the wrong data because the functions
available demand a serial access to the data.

Another example is in the monitor and keyboard handling routines. 
You are prevented from getting into the workings of them and either
corrupting them accidentally, or on purpose if you have such a
bent, but once again, you are provided with all of the data
interfaces that you really need.


Suppose you are developing a program to analyze some
characteristics of flagpoles.  You would not wish to accidentally
use some data referring to where the flagpole program was stored
on your hard disk as the height of the flagpole, nor would you wish
to use the cursor position as the flagpole thickness or color.  The
fact that the data is hidden from you protects you from
accidentally doing such a thing when you are working at midnight
to try to meet a schedule.  Once again, this is referred to as
information hiding and is one of the primary advantages of object
oriented programming over other methods.  Based on the discussion
given above you can see that object oriented programming is not
really new, since it has been used in some degree for as long as
computers have been popular.  The newest development, however, is

                                                         Page 5-7

                                        Chapter 5 - Encapsulation

in allowing the programmer to partition his programs in such a way
that he too can practice information hiding and reduce the
debugging time.



WHAT DOES THIS COST?
_________________________________________________________________

It should be clear that this technique will cost you something in
efficiency because every access to the elements of the object will
require the time and inefficiency of a call to a function, or
perhaps I should be more proper and refer to it as a method.  The
time saved in building a large program, however, could easily be
saved in debug time when it comes time to iron out the last few
bugs.  This is because a program made up of objects that closely
match the application are much easier to understand than a program
that does not.

This is obviously such a small program that it is silly to try to
see any gain with this technique.  In a real project however, it
could be a great savings if one person developed all of the details
of the rectangle, programmed it, and made it available to you to
simply use.  This is exactly what has been done for you if you
consider the video monitor an object.  There is a complete set of
preprogrammed and debugged routines you can use to make the monitor
do anything you wish it to do, all you have to do is study the
interface to the routines and use them, expecting them to work. 
As a silly example of protection, it is impossible for you to
multiply the size of your monitor screen by the depth of the flag
pole because that information is not available to you to use in a
corruptible way.

After you understand some of the advantages of this style of
programming, be sure to compile and execute this program.



CONSTRUCTORS AND DESTRUCTORS
_________________________________________________________________

The file named CONSPOLE.CPP introduces           ================
constructors and destructors and should be         CONSPOLE.CPP
examined at this time.                           ================

This program is identical to the last program
except that a constructor has been added as well as a destructor. 
The constructor is declared in line 8 and defined in lines 14
through 18.  The constructor is called automatically by the C++
system when the object is declared and can therefore be of great
help in preventing the use of an uninitialized variable.  When the
object named box is declared in line 46, the constructor is called
automatically by the system which sets the values of its height and
width each to 6.  This is printed out for reference in lines 49 and

                                                         Page 5-8

                                        Chapter 5 - Encapsulation

50.  Likewise, when the square is declared in line 46, the values
of the height and the width of the square are each initialized to
6 when the constructor is called automatically.

A constructor is defined as having the same name as the class
itself.  In this case both are named rectangle.  The constructor
cannot have a return type associated with it since it is not
permitted to have a user defined return type.  It actually has a
predefined return type, a pointer to the object itself, but we will
not be concerned about this until much later in this tutorial. 
Even though both objects are assigned values by the constructor,
they are initialized in lines 58 and 59 to new values and
processing continues.  Since we have a constructor that does the
initialization, we should probably rename the method named
initialize() something else but it illustrates the concept involved
here.

The destructor is very similar to the constructor except that it
is called automatically when each of the objects goes out of scope. 
You will recall that automatic variables have a limited lifetime
since they cease to exist when the enclosing block in which they
were declared is exited.  When an object is about to be
automatically deallocated, its destructor, if one exists, is called
automatically.  A destructor is characterized as having the same
name as the class but with a tilde prepended to the class name. 
A destructor has no return type.

A destructor is declared in line 11 and defined in lines 31 through
35.  In this case the destructor only assigns zeros to the
variables prior to their being deallocated, so nothing is really
accomplished.  The destructor is only included for illustration of
how it is used.  If some blocks of memory were dynamically
allocated within an object, a destructor should be used to
deallocate them prior to losing the pointers to them.  This would
return their memory to the free store for further use later in the
program.

It is interesting to note that if a constructor is used for an
object that is declared prior to the main program, otherwise known
as globally, the constructor will actually be executed prior to the
execution of the main program.  In like manner, if a destructor is
defined for such a variable, it will execute following the
completion of execution of the main program.  This will not
adversely affect your programs, but it is interesting to make note
of.



OBJECT PACKAGING
_________________________________________________________________

Examine the file named BOXES1.CPP for an example of how not to
package an object for universal use.  This packaging is actually
fine for a very small program but is meant to illustrate to you

                                                         Page 5-9

                                        Chapter 5 - Encapsulation

how to split your program up into smaller more    ================
manageable files when you are developing a large     BOXES1.CPP
program or when you are part of a team            ================
developing a large system.  The last three
example programs in this chapter will illustrate
the proper method of packaging a class.

This program is very similar to the last one with the pole
structure dropped and the class named box.  The class is defined
in lines 4 through 12, the implementation of the class is given in
lines 15 through 34, and the use of the class is given in lines 37
through 50.  With the explanation we gave about the last program,
the diligent student should have no problem understanding this
program in detail.



INLINE IMPLEMENTATION
_________________________________________________________________

The method in line 10 contains the implementation for the method
as a part of the declaration because it is very simple, and because
it introduces another new topic which you will use often in C++
programming.  When the implementation is included in the
declaration, it will be assembled inline wherever this function is
called leading to much faster code.  This is because there is no
overhead to accomplish the call to the method.  In some cases this
will lead to code that is both smaller and faster.  This is yet
another illustration of the efficiency built into the C++
programming language.

Compile and execute this program in preparation for our study of
the next three examples which are a repeat of this program in a
slightly different form.



THE CLASS HEADER FILE
_________________________________________________________________

If you examine BOX.HPP carefully, you will see    ===============
that it is only the class definition.  No             BOX.HPP
details are given of how the various methods are  ===============
implemented except of course for the inline
method named get_area().  This gives the
complete definition of how to use the class with no implementation
details.  You would be advised to keep a hardcopy of this file
available as we study the next two files.  You will notice that it
contains lines 4 through 12 of the previous example program named
BOXES1.CPP.

This is called the class header file and cannot be compiled or
executed.


                                                        Page 5-10

                                        Chapter 5 - Encapsulation

THE CLASS IMPLEMENTATION FILE
_________________________________________________________________

Examine the file named BOX.CPP for the            ===============
implementation of the methods declared in the         BOX.CPP
class header file.  Notice that the class header  ===============
file is included into this file in line 2 which
contains all of the prototypes for its methods. 
The code from lines 15 through 34 of BOXES1.CPP is contained in
this file which is the implementation of the methods declared in
the class named box.

This file can be compiled but it cannot be executed because there
is no main entry point which is required for all ANSI-C or C++
programs.  When it is compiled, the object code will be stored in
the current directory and available for use by other programs.  It
should be noted here that the result of compilation is usually
referred to as an object file because it contains object code. 
This use of the word object has nothing to do with the word object
as used in object oriented programming.  It is simply a matter of
overloading the use of the word.  The practice of referring to the
compiled result as a object file began long before the method of
object oriented programming was ever considered.

The separation of the definition and the implementation is a major
step forward in software engineering.  The definition file is all
the user needs in order to use this class effectively in a program. 
He needs no knowledge of the actual implementation of the methods. 
If he had the implementation available, he may study the code and
find a trick he could use to make the overall program slightly more
efficient, but this would lead to nonportable software and possible
bugs later if the implementor changed the implementation without
changing the interface.  The purpose of object oriented programming
is to hide the implementation in such a way that the implementation
can not affect anything outside of its own small and well defined
boundary or interface.

You should compile this program now and we will use the result with
the next example program.



USING THE BOX OBJECT
_________________________________________________________________

Examine the file named BOXES2.CPP and you will   ================
find that the object we defined previously is       BOXES2.CPP
used within this file.  In fact, these last      ================
three programs taken together are identical to
the program named BOXES1.CPP studied earlier.

The BOX.HPP file is included here, in line 3, since the definition
of the box is needed to declare three objects and use their
methods.  You should have no trouble seeing that this is a repeat

                                                        Page 5-11

                                        Chapter 5 - Encapsulation

of the previous program and will execute in exactly the same way. 
There is a big difference in BOXES1.CPP and BOXES2.CPP as we will
see shortly.

A very important distinction must be made at this point.  We are
not merely calling functions and changing the terminology a little
to say we are sending messages.  There is an inherent difference
in the two operations.  Since the data for each object is tightly
bound up in the object, there is no way to get to the data except
through the methods and we send a message to the object telling it
to perform some operation based on its internally stored data. 
However, whenever we call a function, we take along the data for
it to work with as parameters since it doesn't contain its own
data.

Be sure to compile and execute this program, but when you come to
the link step, you will be required to link this program along with
the result of the compilation when you compiled the class named
box.  The file is probably named BOX.OBJ that must be linked with
this file.  You may need to consult the documentation for your C++
compiler to learn how to do this.  Even if it seems to be a lot of
trouble to learn how to link several files together, it will be
worth your time to do so now because we will be linking several
more multifile C++ programs in the remainder of this tutorial.

If you are using TURBO C++, this is your first opportunity to use
a project file.  If you are using Zortech C++, you can use the make
facility included with your compiler.  Whichever one you are using,
it would pay you to stop and learn how to use the multifile
technique provided with your compiler because you will need to use
it several times before the end of this tutorial.  The nature of
C++ tends to drive the programmer to use many files for a given
programming project and you should develop the habit early.



INFORMATION HIDING
_________________________________________________________________

The last three example programs illustrate a method of information
hiding that can have a significant impact on the quality of
software developed for a large project.  Since the only information
the user of the class really needs is the class header, that is all
he needs to be given.  The details of implementation can be kept
hidden from him to prevent him from studying the details and
possibly using a quirk of programming to write some rather obtuse
code.  Since he doesn't know exactly what the implementor did, he
must follow only the definition given in the header file.  This can
have a significant impact on a large project.  As mentioned
earlier, accidental corruption of data is prevented also.

Another reason for hiding the implementation is economic.  The
company that supplied you with your C++ compiler gave you many
library functions but did not supply the source code to the library

                                                        Page 5-12

                                        Chapter 5 - Encapsulation

functions, only the interface to each function.  You know how to
use the file access functions but you do not have the details of
implementation, nor do you need them.  Likewise a class development
industry can develop which supplies users with libraries of high
quality, completely developed and tested classes, for a licensing
fee of course.  Since the user only needs the interface defined,
he can be supplied with the interface and the object (compiled)
code for the object and can use it in any way he desires.  The
suppliers source code is protected from accidental or intentional
compromise and he can maintain complete control over it.

It is very important that you understand the principles covered in
this chapter before proceeding on to the next chapter.  If you feel
you are a little weak in any of the areas covered here, you should
go over them again before proceeding on.  A point that should be
made here that may be obvious to you, is that it requires some
amount of forethought to effectively use classes.



ABSTRACT DATA TYPES
_________________________________________________________________

We mentioned the abstract data type at the beginning of this
chapter and again briefly midway through, and it is time to
describe it a little more completely.  An abstract data type is a
group of data, each of which can store a range of values, and a set
of methods or functions that can operate on that data.  Since the
data are protected from any outside influence, it is protected and
said to be encapsulated.  Also, since the data is somehow related,
it is a very coherent group of data that may be highly interactive
with each other, but with no interaction with the outside world,
it is completely decoupled from its surroundings.

The methods, on the other hand, are coupled to the outside world
through the interface, but there are a limited number of contacts
with the outside world and therefore a weak coupling with the
outside.  The object is therefore said to be loosely coupled to the
outside world.  Because of the tight coherency and the loose
coupling, ease of maintenance of the software is greatly enhanced. 
The ease of maintenance may be the greatest benefit of object
oriented programming.

It may bother you that even though the programmer may not use the
private variables directly outside of the class, they are in plain
sight and he can see what they are and can probably make a good
guess at exactly how the class is implemented.  The variables could
have been hidden completely out of sight in another file, but
because the designers of C++ wished to make the execution of the
completed application as efficient as possible, the variables were
left in the class definition where they can be seen but not used.




                                                        Page 5-13

                                        Chapter 5 - Encapsulation

FRIEND FUNCTIONS
_________________________________________________________________

A function outside of a class can be defined to be a friend
function by the class which gives the friend free access to the
private members of the class.  This in effect, opens a small hole
in the protective shield of the class, so it should be used very
carefully and sparingly.  There are cases where it helps to make
a program much more understandable and allows controlled access to
the data.  Friend functions will be illustrated in some of the
example programs later in this tutorial.  It is mentioned here for
completeness of this section.  A single function can be declared
as a friend, as well as members of other classes, and even entire
classes can be given friend status if needed in a program.  Neither
a constructor nor a destructor can be a friend function.


THE struct IN C++
_________________________________________________________________

The struct is still useable in C++ and operates just like it does
in ANSI-C with one addition.  You can include methods in a
structure that operate on data in the same manner as in a class,
but all methods and data are automatically defaulted to be public
in a structure.  Of course you can make any of the data or methods
private but only if you are using a C++ compiler that supports C++
version 2.0 or higher.  Earlier versions of C++ did not permit a
private section in a structure.  The structure should be used only
for constructs that are truly structures.  If you are building even
the simplest objects, use classes to define them.


INITIALIZING THE class AND struct
_________________________________________________________________

The struct can be initialized with an aggregate in exactly the same
manner that a struct can be initialized in ANSI-C, but this is not
permitted for a class.  The class is allowed to contain private
members, so it cannot be initialized without access to the private
members.  It could have been possible to allow aggregate
initialization of classes without private members, but this would
have greatly complicated the compiler while adding little to the
capability since a class without a private member is contrary to
the entire thrust of object oriented programming.  The designers
of C++ chose therefore to prohibit aggregate initialization of
class variables in order to simplify the job of the compiler
writer.  This probably adds to the efficiency of the resulting
applications.  This really is no limitation because both struct and
class types can be initialized with constructors or initialization
methods.

We will continue our discussion of encapsulation in the next
chapter.


                                                        Page 5-14

                                        Chapter 5 - Encapsulation


PROGRAMMING EXERCISES
_________________________________________________________________


1.   Add a method to CLAS.CPP which will supply the square of the
     stored value.  Include some code in the main program to read
     and display the squared values.

2.   Continuing with CLAS.CPP, add a constructor to initialize the
     stored value to 10 and add a few lines of code to the main
     program to display the values immediately following the object
     definition.

3.   Add an output statement to the rectangle constructor of the
     program named CONSPOLE.CPP and another to the destructor to
     prove to yourself that they really are called by the system
     when we said they are.





































                                                        Page 5-15
```
{% endraw %}

## CHAP06.TXT

{% raw %}
```



                                                        Chapter 6
                                               MORE ENCAPSULATION

The purpose of this chapter is to illustrate how to use some of the
traditional aspects of C or C++ with classes and objects.  Pointers
to an object as well as pointers within an object will be
illustrated.  Arrays embedded within an object, and an array of
objects will be illustrated.  Since objects are simply another C
data construct, all of these things are possible and can be used
if needed.

In order to have a systematic study, we will use the program named
BOXES1.CPP from the last chapter as a starting point and we will
add a few new constructs to it for each example program.  You will
recall that it was a very simple program with the class definition,
the class implementation, and the main calling program all in one
file.  This was selected as a starting point because we will
eventually make changes to all parts of the program and it will be
convenient to have it all in a single file for illustrative
purposes.  It must be kept in mind however that the proper way to
use these constructs is to separate them into the three files as
was illustrated in BOX.HPP, BOX.CPP, and BOXES2.CPP in the last
chapter.  This allows the implementor of box to supply the user
with only the interface, namely  BOX.HPP.  Not giving him the
implementation file named BOX.CPP, is practicing the technique of
information hiding.

As we have said many times, it seems silly to break up such a small
program into three separate files, and it is sort of silly.  The
last chapter of this tutorial will illustrate a program large
enough to require dividing the program up into separate files.


AN ARRAY OF OBJECTS
_________________________________________________________________

Examine the file named OBJARRAY.CPP for our      ================
first example of an array of objects.  This file   OBJARRAY.CPP
is identical to the file named BOX1.CPP until we ================
come to line 41 where an array of 4 boxes are
declared.

Recalling the operation of the constructor you will remember that
each of the four box objects will be initialized to the values
defined within the constructor since each box will go through the
constructor as they are declared.  In order to declare an array of
objects, a constructor for that object must not require any
parameters.  (We have not yet illustrated a constructor with
initializing parameters, but we will in the next program.)  This
is an efficiency consideration since it would probably be an error
to initialize all elements of an array of objects to the same
value.  We will see the results of executing the constructor when
we compile and execute the file later.

                                                         Page 6-1

                                   Chapter 6 - More Encapsulation

Line 46 defines a for loop that begins with 1 instead of the normal
starting index for an array leaving the first object, named
group[0], to use the default values stored when the constructor was
called.  You will observe that sending a message to one of the
objects uses the same construct as is used for any object.  The
name of the array followed by its index in square brackets is used
to send a message to one of the objects in the array.  This is
illustrated in line 47 and the operation of that code should be
clear to you.  The other method is called in the output statement
in lines 54 and 55 where the area of the four boxes in the group
array are listed on the monitor.

Another fine point should be pointed out.  The integer variable
named index is declared in line 46 and is still available for use
in line 53 since we have not yet left the enclosing block which
begins in line 40 and extends to line 62.

An extra variable was included for illustration, the one named
extra_data in line seven.  Since the keyword static is used to
modify this variable in line 7, it is an external variable and only
one copy of this variable will ever exist.  All seven objects of
this class share a single copy of this variable which is global to
the objects defined in line 41.  Line 20 of the constructor sets
the single global variable to 1 each time an object is declared. 
Only one assignment is necessary so the other six are actually
wasted code.  To illustrate that there is only one variable shared
by all objects of this class, the method to read its value also
increments it.  Each time it is read in lines 57 through 61, it is
incremented and the result of the execution proves that there is
only a single variable shared by all objects of this class.  You
will also note that this method is declared within the class
declaration so it will be assembled into the final program as
inline code.

Be sure you understand this program and especially the static
variable, then compile and execute it to see if you get the same
result as listed at the end of the program.


A STRING WITHIN AN OBJECT
_________________________________________________________________

Examine the program named OBJSTRNG.CPP for our   ================
first example of an object with an embedded        OBJSTRNG.CPP
string.  Actually, the object does not have an   ================
embedded string, it has an embedded pointer, but
the two work so closely together that we can
study one and understand both.

You will notice that line 7 contains a pointer to char named
line_of_text.  The constructor contains an input parameter which
is a pointer to a string and will be assigned to the stored pointer
named line_of_text within the constructor.  We could have defined

                                                         Page 6-2

                                   Chapter 6 - More Encapsulation

the variable line_of_text as an actual array in the class, then
used strcpy() to copy the string into the object and everything
would have worked the same, but we will leave that as an exercise
for you at the end of this chapter.  It should be clear to you that
if a single parameter can be passed to a constructor, any number
can be passed.

You will notice that when the three boxes are declared this time,
we supply a string constant as an actual parameter with each
declaration which is used by the constructor to assign the string
pointer some data to point to.  When we call get_area() in lines
48 through 53, we get the message displayed and the area returned. 
It would be prudent to put these operations in separate methods
since there is no apparent connection between printing the message
and calculating the area, but it was written this way to illustrate
that it can be done.  What this really says is that it is possible
to have a method that has a side effect, the message output to the
monitor, and a return value, the area of the box.  However, as we
discussed in chapter 4 when we studied DEFAULT.CPP, the order of
evaluation is sort of funny, so we broke each line into two lines.

After you understand this program, compile and execute it.


AN OBJECT WITH AN INTERNAL POINTER
_________________________________________________________________

The program named OBJINTPT.CPP is our first      ================
example program with an embedded pointer which     OBJINTPT.CPP
will be used for dynamic allocation of data.     ================

In line 7 we declare a pointer to an integer
variable, but it is only a pointer, there is no storage associated
with it.  The constructor therefore allocates an integer type
variable on the heap for use with this pointer in line 21.  It
should be clear to you that the three objects created in line 45
each contain a pointer which points into the heap to three
different locations.  Each object has its own dynamically allocated
variable for its own private use.  Moreover each has a value of 112
stored in its dynamically allocated data because line 22 stores
that value in each of the three locations, once for each call to
the constructor.

In such a small program, there is no chance that we will exhaust
the heap, so no test is made for unavailable memory.  In a real
production program, it would be expedient to test that the value
of the returned pointer is not NULL to assure that the data
actually did get allocated.

The method named set() has three parameters associated with it and
the third parameter is used to set the value of the new dynamically
allocated variable.  There are two messages passed, one to the
small box and one to the large box.  As before, the medium box is
left with its default values.

                                                         Page 6-3

                                   Chapter 6 - More Encapsulation


The three areas are displayed followed by the three stored values
in the dynamically allocated variables, and we finally have a
program that requires a destructor in order to be completely
proper.  If we simply leave the scope of the objects as we do when
we leave the main program, we will leave the three dynamically
allocated variables on the heap with nothing pointing to them. 
They will be inaccessible and will therefore represent wasted
storage on the heap.  For that reason, the destructor is used to
delete the three variables as their respective objects go out of
existence.  In this case, lines 37 and 38 assign values to
variables that will be automatically deleted.  Even though these
lines of code really do no good, they are legal statements.

Actually, in this particular case, the three variables will be
automatically reclaimed when we return to the operating system
because all program cleanup is done for us at that time.  If this
were a function that was called by another function however, the
heap space would be wasted.  This is an illustration of good
programming practice, that of cleaning up after yourself when you
no longer need some dynamically allocated variables.

One other construct should be mentioned once again, that of the
inline method implementations in line 11 and 12.  As we mentioned
in chapter 5 and repeated earlier in this chapter, inline functions
can be used where speed is of the utmost in importance since the
code is assembled inline rather than by actually making a method
call.  Since the code is defined as part of the declaration, the
system will assemble it inline, and a separate implementation for
these methods is not needed.  Remember that if the inline code is
too involved, the compiler is allowed to ignore the inline request
and actually assemble it as a separate method, but it will do it
invisibly to you and will probably not even tell you about it.

Remember that we are interested in using information hiding and
inline code prevents hiding of the implementation, putting it out
in full view.  Many times you will be more interested in speeding
up a program than you are in hiding a trivial implementation. 
Since most inline methods are trivial, feel free to use the inline
code construct.

Be sure to compile and execute this program.



A DYNAMICALLY ALLOCATED OBJECT
_________________________________________________________________

Examine the file named OBJDYNAM.CPP for our      ================
first look at a dynamically allocated object.      OBJDYNAM.CPP
This is not any different than any other         ================
dynamically allocated object, but an example is
always helpful.


                                                         Page 6-4

                                   Chapter 6 - More Encapsulation

In line 39 we declare a pointer to an object of type box and since
it is only a pointer with nothing to point to, we dynamically
allocate an object for it in line 44, with the object being created
on the heap just like any other dynamically allocated variable. 
When the object is created in line 44, the constructor is called
automatically to assign values to the two internal storage
variables.  Note that the constructor is not called when the
pointer is declared since there is nothing to initialize.  It is
called when the object is allocated.

Reference to the components of the object are handled in much the
same way that structure references are made, through use of the
pointer operator as illustrated in lines 50 through 52.  Of course
you can use the pointer dereferencing method without the arrow such
as (*point).set(12, 12); as a replacement for line 51 but the arrow
notation is much more universal and should be used.  Finally, the
object is deleted in line 54 and the program terminates.  If there
were a destructor for this class, it would be called as part of the
delete statement to clean up the object prior to deletion.

You have probably noticed by this time that the use of objects is
not much different from the use of structures.  Be sure to compile
and execute this program after you have studied it thoroughly.


AN OBJECT WITH A POINTER TO ANOTHER OBJECT
_________________________________________________________________

The program named OBJLIST.CPP contains an object  ===============
with an internal reference to another object of     OBJLIST.CPP
its own class.  This is the standard structure    ===============
used for a singly linked list and we will keep
the use of it very simple in this program.

The constructor contains the statement in line 21 which assigns the
pointer the value of NULL to initialize the pointer.  This is a
good idea for all of your programming, don't allow any pointer to
point off into space, but initialize all pointers to something. 
By assigning the pointer within the constructor, you guarantee that
every object of this class will automatically have its pointer
initialized.  It will be impossible to overlook the assignment of
one of these pointers.

Two additional methods are declared in lines 12 and 13 with the one
in line 13 having a construct we have not yet mentioned in this
tutorial.  This method returns a pointer to an object of the box
class.  As you are aware, you can return a pointer to a struct in
standard C, and this is a parallel construct in C++.  The
implementation in lines 48 through 51 returns the pointer stored
within the object.  We will see how this is used when we get to the
actual program.

An extra pointer named box_pointer is declared in the main program
for use later and in line 66 we make the embedded pointer within

                                                         Page 6-5

                                   Chapter 6 - More Encapsulation

the small box point to the medium box, and in line 67 we make the
embedded pointer within the medium box point to the large box.  We
have effectively generated a linked list with three elements.  In
line 69 we make the extra pointer point to the small box. 
Continuing in line 70 we use it to refer to the small box and
update it to the value contained in the small box which is the
address of the medium box.  We have therefore traversed from one
element of the list to another by sending a message to one of the
objects.  If line 70 were repeated exactly as shown, it would cause
the extra pointer to refer to the large box, and we would have
traversed the entire linked list which is only composed of three
elements.


ANOTHER NEW KEYWORD this
_________________________________________________________________

Another new keyword is available in C++, the keyword this.  The
word this is defined within any object as being a pointer to the
object in which it is contained.  It is implicitly declared as;

   class_name *this;

and is initialized to point to the object for which the member
function is invoked.  This pointer is most useful when working with
pointers and especially with a linked list when you need to
reference a pointer to the object you are inserting into the list. 
The keyword this is available for this purpose and can be used in
any object.  Actually the proper way to refer to any variable
within a list is through use of the predefined pointer this, by
writing this->variable_name, but the compiler assumes the pointer,
and we can simplify every reference by omitting the pointer.  Use
of the keyword this is not illustrated in a program at this point,
but will be used in one of the larger example programs later in
this tutorial.

You should study this program until you understand it completely
then compile and execute it in preparation for our next example
program.


A LINKED LIST OF OBJECTS
_________________________________________________________________

The next example program in this chapter is       ===============
named OBJLINK.CPP and is a complete example of      OBJLINK.CPP
a linked list written in object oriented          ===============
notation.

This program is very similar to the last one.  In fact it is
identical until we get to the main program.  You will recall that
in the last program the only way we had to set or use the embedded
pointer was through use of the two methods named point_at_next()
and get_next() which are listed in lines 40 through 51 of the

                                                         Page 6-6

                                   Chapter 6 - More Encapsulation

present program.  We will use these to build up our linked list
then traverse and print the list.  Finally, we will delete the
entire list to free the space on the heap.

In lines 56 to 58 we declare three pointers for use in the program. 
The pointer named start will always point to the beginning of the
list, but temp will move down through the list as we create it. 
The pointer named box_pointer will be used for the creation of each
box.  We execute the loop in lines 61 through 69 to generate the
list where line 62 dynamically allocates a new object of the box
class and line 63 fills it with nonsense data for illustration. 
If this is the first element in the list, the start pointer is set
to point to this element, but if elements already exist, the last
element in the list is assigned to point to the new element.  In
either case, the temp pointer is assigned to point to the last
element of the list, in preparation for adding another element if
there is another element to be added.

In line 72, the pointer named temp is pointed to the first element
and it is used to increment its way through the list by updating
itself in line 75 during each pass through the loop.  When temp has
the value of NULL, which it gets from the last element of the list,
we are finished traversing the list.

Finally, we delete the entire list by starting at the beginning and
deleting one element each time we pass through the loop in lines
79 through 84.

A careful study of the program will reveal that it does indeed
generate a linked list of ten elements, each element being an
object of class box.  The length of this list is limited by the
practicality of how large a list we desire to print out, but it
could be lengthened to many thousands of these simple elements
provided you have enough memory available to store them all.

Once again, the success of the dynamic allocation is not checked
as it should be in a correctly written program.  Be sure to compile
and execute this example program.



NESTING OBJECTS
_________________________________________________________________

Examine the program named NESTING.CPP for an      ===============
example of nesting classes which results in         NESTING.CPP
nested objects.  A nested object could be         ===============
illustrated with your computer in a rather
simple manner.  The computer itself is composed
of many items which work together but work entirely differently,
such as a keyboard, a disk drive, and a power supply.  The computer
is composed of these very dissimilar items and it is desireable to
discuss the keyboard separately from the disk drive because they
are so different.  A computer class could be composed of several

                                                         Page 6-7

                                   Chapter 6 - More Encapsulation

objects that are dissimilar by nesting the dissimilar classes
within the computer class.

If however, we wished to discuss disk drives, we may wish to
examine the characteristics of disk drives in general, then examine
the details of a hard disk, then the differences of floppy disks,
and finally bernolli drives.  This would involve inheritance
because much of the data about all three drives could be
characterized and applied to the generic disk drive then used to
aid in the discussion of the other three.  We will study
inheritance in the next three chapters, but for now we will look
at the embedded or nested class.

This example program contains a class named box which contains an
object of another class embedded within it in line 16, the
mail_info class.  This object is available for use only within the
class implementation of box because that is where it is defined. 
The main program has objects of class box defined but no objects
of class mail_info, so the mail_info class cannot be referred to
in the main program.  In this case, the mail_info class object is
meant to be used internally to the box class and one example is
given in line 21 where a message is sent to the label.set() method
to initialize the variables.  Additional methods could be used as
needed, but these are given as an illustration of how they can be
called.

Of prime importance is the fact that there are never any objects
of the mail_info class declared directly in the main program, they
are inherently declared when the enclosing objects of class box are
declared.  Of course objects of the mail_info class could be
declared and used in the main program if needed, but they are not
in this example program.  In order to be complete, the box class
should have one or more methods to use the information stored in
the object of the mail_info class.  Study this program until you
understand the new construct, then compile and execute it.

If the class and the nested classes require parameter lists for
their respective constructors an initialization list can be given. 
This is a very advanced technique, and it is rarely needed, so it
is beyond the scope of this tutorial.  See Bjarne Stroustrup's book
for further details if you need more information on the use of this
technique.


OPERATOR OVERLOADING
_________________________________________________________________

The example file named OPOVERLD.CPP contains     ================
examples of overloading operators.  This allows    OPOVERLD.CPP
you to define a class of objects and redefine    ================
the use of the normal operators.  The end result
is that objects of the new class can be used in
as natural a manner as the predefined types.  In fact, they seem
to be a part of the language rather than your own add-on.

                                                         Page 6-8

                                   Chapter 6 - More Encapsulation


In this case we overload the + operator and the * operator, with
the declarations in lines 10 through 12, and the definitions in
lines 16 through 40.  The methods are declared as friend functions
so we can use the double parameter functions as listed.  If we did
not use the friend construct, the function would be a part of one
of the objects and that object would be the object to which the
message was sent.  Including the friend construct allows us to
separate this method from the object and call the method with infix
notation.  Using this technique, it can be written as object1 +
object2 rather than object1.operator+(object2).  Also, without the
friend construct we could not use an overloading with an int type
variable for the first parameter because we can not send a message
to an integer type variable such as int.operator+(object).  Two of
the three operator overloadings use an int for the first parameter
so it is necessary to declare them as friend functions.

The header in line 16 illustrates the first overloading where the
+ operator is overloaded by giving the return type followed by the
keyword operator and the operator we wish to overload.  The two
formal parameters and their types are then listed in the
parentheses and the normal function operations are given in the
implementation of the function in lines 18 through 21.  There is
nothing unusual about this implementation, it should be easily
understood by you at this point.  For purposes of illustration,
some silly mathematics are performed in the method implementation,
but any desired operations can be done.

The biggest difference occurs in line 56 where this method is
called by using the infix notation instead of the usual message
sending format.  Since the variables small and medium are objects
of the box class, the system will search for a way to use the +
operator on two objects of class box and will find it in the
overloaded operator+ method we have just discussed.  The operations
within the method implementation can be anything we need them to
be, and they are usually much more meaningful than the silly math
included here.

In line 58 we ask the system to add an int type constant to an
object of class box, so the system finds the other overloading of
the + operator beginning in line 25 to perform this operation. 
Also in line 60 we ask the system to use the * operator to do
something to an int constant and an object of class box, which it
satisfies by finding the method in lines 34 through 40.  Note that
it would be illegal to attempt to use the * operator the other way
around, namely large * 4 since we did not define a method to use
the two types in that order.  Another overloading could be given
with reversed types, and we could use the reverse order in a
program.

You will notice that when using operator overloading, we are also
using function name overloading since some of the function names
are the same.


                                                         Page 6-9

                                   Chapter 6 - More Encapsulation

When we use operator overloading in this manner, we actually make
our programs look like the class is a natural part of the language
since it is integrated into the language so well.  C++ is therefore
an extendible language and can be molded to fit the mechanics of
the problem at hand.


OPERATOR OVERLOADING CAVEATS
_________________________________________________________________

Each new topic we study has its pitfalls which must be warned
against and the topic of operator overloading seems to have the
record for pitfalls since it is so prone to misuse and has several
problems.  The overloading of operators is only available for
classes, you cannot redefine the operators for the predefined
simple types.  This would probably be very silly anyway since the
code could be very difficult to read if you changed some of them
around.

The logical and (&&) and the logical or (||) operators can be
overloaded for the classes you define, but they will not operate
as short circuit operators.  All members of the logical
construction will be evaluated with no regard concerning the
outcome.  Of course the normal predefined logical operators will
continue to operate as short circuit operators as expected, but not
the overloaded ones.

If the increment (++) or decrement (--) operators are overloaded,
the system has no way of telling whether the operators are used as
preincrement or postincrement operators.  Which method is used is
implementation dependent, so you should use them in such a way that
it doesn't matter which is used.

Be sure to compile and execute OPOVERLD.CPP before continuing on
to the next example program.


FUNCTION OVERLOADING IN A CLASS
_________________________________________________________________

Examine the program named FUNCOVER.CPP for an    ================
example of function name overloading within a      FUNCOVER.CPP
class.  In this program the constructor is       ================
overloaded as well as one of the methods to
illustrate what can be done.

This file illustrates some of the uses of overloaded names and a
few of the rules for their use.  You will recall that the function
selected is based on the number and types of the formal parameters,
and the type of the return value.

In this case there are three constructors.  The constructor which
is actually called is selected by the number and types of the
parameters in the definition.  In line 77 of the main program the

                                                        Page 6-10

                                   Chapter 6 - More Encapsulation

three objects are declared, each with a different number of
parameters and inspection of the results will indicate that the
correct constructor was called based on the number of parameters. 
Since a constructor does not have a return value, according to the
definition of the C++ language, it cannot be a part of the
selection criteria of a constructor.

In the case of the other overloaded methods, the number and type
of parameters is clearly used to select the proper method.  You
will notice that one method uses a single integer and another uses
a single float type variable, but the system is able to select the
correct one.  As many overloadings as desired can be used provided
that all of the parameter patterns are unique.

You may be thinking that this is a silly thing to do but it is, in
fact, a very important topic.  Throughout this tutorial we have
been using an overloaded operator and you haven't been the least
confused over it.  It is the cout operator which operates as an
overloaded function since the way it outputs data is a function of
the type of its input variable or the field we ask it to display. 
Many programming languages have overloaded output functions so you
can output any data with the same function name. 

Be sure to compile and execute FUNCOVER.CPP.


SEPARATE COMPILATION
_________________________________________________________________

Separate compilation is available with C++ and it follows the
identical rules as given for ANSI-C separate compilation.  As
expected, separately compiled files can be linked together. 
However, since classes are used to define objects, the nature of
C++ separate compilation is considerably different from that used
for ANSI-C.  This is because the classes used to create the objects
are not considered as external variables, but as included classes. 
This makes the overall program look different from a pure ANSI-C
program.

As we have been declaring and using classes in these last two
chapters, we have been including the classes with the #include
preprocessor directive rather than by using the ANSI-C extern
keyword.  Your programs will take on a different appearance as you
gain experience in C++.


WHAT SHOULD BE THE NEXT STEP?
_________________________________________________________________

At this point you have learned enough C++ to write meaningful
programs and it would be to your advantage to stop studying and
begin using the knowledge you have gained.  Because C++ is an
extension to ANSI-C, it can be learned in smaller pieces than would
be required if you are learning a completely new language.  You

                                                        Page 6-11

                                   Chapter 6 - More Encapsulation

have learned enough to study and completely understand the example
program given in chapter 12, the Flyaway adventure game.  You
should begin studying this program now.

One of your biggest problems is learning to think in terms of
object oriented programming.  It is not a trivial problem if you
have been programming in procedural languages for any significant
length of time.  However, it can be learned by experience, so you
should begin trying to think in terms of classes and objects
immediately.  Your first project should use only a small number of
objects and the remainder of code can be completed in standard C
using procedural methods.  As you gain experience, you will write
more of the code for any given project using classes and objects
but every project will eventually be completed in procedural code.

After you have programmed for a while using the techniques covered
up to this point in the tutorial, you can continue on to the next
few chapters which will discuss inheritance and virtual functions.


PROGRAMMING EXERCISES
_________________________________________________________________

1.   Rewrite OBJSTRNG.CPP to use an array instead of only a pointer
     to the array and copy the string in the constructor.  Add
     another method to allow you to change the value stored in the
     string by sending a message from the main program and use the
     new method to change the value stored in each of the three
     objects.

2.   Modify OBJDYNAM.CPP to make the objects named small and medium
     pointers, then dynamically allocate them prior to using them.

3.   Modify the loop in line 61 of OBJLINK.CPP so that the loop
     will store 1000 elements in the list before stopping.  You
     will probably wish to remove the printout from line 74 so the
     program will stop in a reasonable time.  You may also get an
     integer overflow indication if you send a message to
     get_area() with such large numbers.  That will depend upon
     your compiler.  You should also add a test to assure that the
     memory did not become exhausted after each dynamic allocation.














                                                        Page 6-12
```
{% endraw %}

## CHAP07.TXT

{% raw %}
```



                                                        Chapter 7
                                                      INHERITANCE

One reason to use inheritance is that it allows you to reuse code
from a previous project but gives you the flexibility to slightly
modify it if the old code doesn't do exactly what you need for the
new project.  It doesn't make sense to start every new project from
scratch since some code will certainly be repeated in several
programs and you should strive to build on what you did previously. 
Another reason for using inheritance is if the project requires the
use of several classes which are very similar but slightly
different.

In this chapter we will concentrate on the mechanism of inheritance
and how to build it into a program.  A better illustration of why
you would use inheritance will be given in later chapters where we
will discuss some practical applications of object oriented
programming.

The principle of inheritance is available with several modern
programming languages and is handled slightly differently with
each.  C++ allows you to inherit all or part of the methods of a
class, modify some, and add new ones not available in the parent
class.  You have complete flexibility, and as usual, the method
used with C++ has been selected to result in the most efficient
code execution.


A SIMPLE CLASS TO START WITH
_________________________________________________________________

Examine the file named VEHICLE.HPP for a simple   ===============
class which we will use to begin our study of       VEHICLE.HPP
inheritance in this chapter.  There is nothing    ===============
unusual about this class header, it has been
kept very simple.  It consists of four simple
methods which can be used to manipulate data pertaining to our
vehicle.  What each method does is not especially important at this
time.  We will eventually refer to this as a superclass but for the
time being, we will simply use it like any other class to show that
it is indeed identical to the classes already studied.

Ignore lines 4, 5, and 17 until the end of this chapter where they
will be explained in detail.  This file cannot be compiled or
executed because it is only a header file.



THE IMPLEMENTATION FOR VEHICLE
_________________________________________________________________

Examine the file named VEHICLE.CPP and you will find that it is the
implementation of the vehicle class.  The initialize() method

                                                         Page 7-1

                                          Chapter 7 - Inheritance

assigns the values input as parameters to the     ===============
wheels and weight variables.  We have methods to    VEHICLE.CPP
return the number of wheels and the weight, and   ===============
finally, we have one that does a trivial
calculation to return the loading on each wheel. 
We will have a few examples of methods that do some significant
processing later, but at this point, we are more interested in
learning how to set up the interface to the classes, so the
implementations will be kept trivial.

As stated above, this is a very simple class which will be used in
the next program.  Later in this tutorial we will use it as a
superclass.  You should compile this class at this time in
preparation for the next example program, but you cannot execute
it because there is no entry point.



USING THE VEHICLE CLASS
_________________________________________________________________

The file named TRANSPRT.CPP uses the vehicle     ================
class in exactly the same manner as we             TRANSPRT.CPP
illustrated in the last chapter.  This should be ================
an indication to you that this is truly nothing
more than a normal class as defined in C++.  We
will make it a little special, however, by using it unmodified as
a superclass in the next few example files to illustrate
inheritance.  Inheritance uses an existing class and adds
functionality to it to accomplish another, possibly more complex
job.

You should have no problem understanding the operation of this
program.  It declares four objects of the vehicle class,
initializes them, and prints out a few of the data points to
illustrate that the vehicle class can be used as a simple class
because it is a simple class.  We are referring to it as a simple
class as opposed to calling it a superclass or subclass as we will
do shortly.

If you thoroughly understand this program, you should compile and
execute it, remembering to link the vehicle object file with this
object file.



OUR FIRST SUBCLASS
_________________________________________________________________

Examine the file named CAR.HPP for our first      ===============
example of the use of a subclass.  The vehicle        CAR.HPP
class is inherited due to the ": public vehicle"  ===============
added to line 4.  This class named car is
composed of all of the information included in

                                                         Page 7-2

                                          Chapter 7 - Inheritance

the superclass vehicle, and all of its own additional information. 
Even though we did nothing to the class named vehicle, we made it
into a superclass because of the way we are using it here.  To go
a step further, even though it will be used as a superclass in an
example program later in this chapter, there is no reason it cannot
continue to be used as a simple class in the previous example
program.  In fact, it can be used as a single class and a
superclass in the same program.  The question of whether it is a
simple class or a super class is answered by the way it is used.

A discussion of terminology is needed here.  When discussing object
oriented programming in general, a class that inherits another is
called a subclass, but the proper term as defined for C++ is a
derived class.  Since both terms are very descriptive, and most
writers tend to use the terms interchangeably, we will also use
both terms in this tutorial.

A superclass is a rather general class which can cover a wide range
of objects, whereas a subclass is somewhat more restricted but at
the same time more useful.  For example if we had a superclass
named programming language and a subclass named C++, then we could
use the superclass to define Pascal, Ada, C++, or any other
programming language, but it would not tell us about the use of
classes in C++ because it can only give a general view of each
language.  On the other hand, the subclass named C++ could define
the use of classes, but it could not be used to describe the other
languages because it is too narrow.  A superclass tends to be more
general, and a subclass is more specific.

In this case, the vehicle superclass can be used to declare objects
that represent trucks, cars, bicycles, or any number of other
vehicles you can think up.  The class named car however can only
be used to declare an object that is of type car because we have
limited the kinds of data that can be intelligently used with it. 
The car class is therefore more restrictive and specific than the
vehicle class.  The vehicle class is more general than the car
class.

If we wished to get even more specific, we could define a subclass
of car and name it sports_car and include such information as
red_line_limit for the tachometer which would be silly for the
family station wagon.  The car class would therefore be used as a
subclass and a superclass at the same time, so it should be clear
that these names refer to how a class is used.



HOW DO WE DECLARE A SUBCLASS?
_________________________________________________________________

Enough generalities about classes, let's get down to the specifics. 
A subclass is defined by including the header file for the
superclass as is done in line 2, then the name of the superclass
is given following the name of the subclass separated by a colon

                                                         Page 7-3

                                          Chapter 7 - Inheritance

as is illustrated in line 4.  Ignore the keyword public immediately
following the colon in this line.  It is optional and we will study
it in detail in the next chapter.  All objects declared as being
of class car therefore are composed of the two variables from the
class vehicle because they inherit those variables, and the single
variable declared in the class car named passenger_load.

An object of this class will have three of the four methods of
vehicle and the two new ones declared here.  The method named
initialize() which is part of the vehicle class will not be
available here because it is hidden by the local version of
initialize() which is a part of the car class.  The local method
will be used if the name is repeated allowing you to customize your
new class.

Note once again that the implementation for the superclass only
needs to be supplied in its compiled form.  The source code for the
implementation can be hidden for economic reasons to aid software
developers.  Hiding the source code also allows the practice of
information hiding.  The header for the superclass must be
available as a text file since the class definitions are required
in order to use the class.



THE CAR CLASS IMPLEMENTATION
_________________________________________________________________

Examine the file named CAR.CPP which is the       ===============
implementation file for the car class.  The           CAR.CPP
first thing you should notice is that this file   ===============
has no indication of the fact that it is a
subclass of any other file, that can only be
determined by inspecting the header file for the class.  Since we
can't tell if it is a subclass or not, it is written in exactly the
same way as any other class implementation file.

Line 8 contains a new construct.  In order to initialize the
variables which are a part of the superclass, we must send a
message to the superclass.  This is because the variables are
private and directly available only within the class itself.  We
will see another way to do this in the next chapter of this
tutorial.

If you think you understand this file, you should compile it for
later use.  Keep in mind that you must have already compiled the
vehicle class prior to this time in order to get a good compilation
of this subclass.








                                                         Page 7-4

                                          Chapter 7 - Inheritance

ANOTHER SUBCLASS
_________________________________________________________________

Examine the file named TRUCK.HPP for an example   ===============
of another class that uses the vehicle class and     TRUCK.HPP
adds to it.  Of course, it adds different things  ===============
to it because it will specialize in those things
that pertain to trucks.  In fact it adds two
more variables and three methods.  Once again, ignore the keyword
public following the colon in line 4 for a few minutes and we will
cover it in detail in the next chapter of this tutorial.

A very important point that must be made is that the car class and
the truck class have absolutely nothing to do with each other, they
only happen to be subclasses of the same superclass or parent class
as it is sometimes called.

Note that both the car and the truck classes have methods named
passengers() but this causes no problems and is perfectly
acceptable.  If classes are related in some way, and they certainly
are if they are both derived classes of a common superclass, you
would expect them to be doing somewhat similar things.  In this
situation there is a good possibility that a method name would be
repeated in both subclasses.



THE TRUCK IMPLEMENTATION
_________________________________________________________________

Examine the file named TRUCK.CPP for the          ===============
implementation of the truck class.  It also has      TRUCK.CPP
a few unusual things included in it.  In line 13  ===============
of the second method, it uses a call to its
superclass to get the weight of the truck.  This
is because the weight is private and therefore not available to
the subclass but must be accessed via one of the superclass
methods.  There is a way to make it available here, but we will
save that definition until the next chapter of this tutorial.

You should have no problem understanding the remainder of this
program.  Your assignment at this point is to compile it in
preparation for our example program that uses all three of the
classes defined in this chapter.


USING ALL THREE CLASSES
_________________________________________________________________

Examine the example program named ALLVEHIC.CPP   ================
for an example that uses all three of the          ALLVEHIC.CPP
classes we have been discussing in this chapter. ================
It uses the superclass vehicle to declare
objects and also uses the two subclasses to

                                                         Page 7-5

                                          Chapter 7 - Inheritance

declare objects.  This was done to illustrate that all three
classes can be used in a single program.

All three of the header files for the classes are included in lines
3 through 5 so the program can use the components of the classes. 
Notice that the implementations of the three classes are not in
view here and do not need to be in view.  This allows the code to
be used without access to the source code for the actual
implementation of the class.  However, it should be clear that the
header file definition must be available.

In this example program, only one object of each class is declared
and used but as many as desired could be declared and used in order
to accomplish the programming task at hand.  You will notice how
clean and uncluttered the source code is for this program since the
classes were developed, debugged, and stored away previously, and
the interfaces were kept very simple.  There is nothing new here
so you should have no trouble understanding the operation of this
program.

Compiling and executing this program will take a bit of effort but
the process is not complicated.  The three classes and the main
program can be compiled in any order desired.  All four must be
compiled prior to linking the four resulting object (or binary)
files together prior to any attempt to execute the final program. 
Be sure you do the required steps to compile and execute this
program because the effective use of C++ will require you to
compile many separate files and link them together.  This is
because of the nature of the C++ language, but it should not be a
burden if a good "make" capability exists with your compiler.



WHY THE #ifndef VEHICLEHPP ?
_________________________________________________________________

We promised to return to the strange looking preprocessor directive
in lines 4, 5 and 17 in the VEHICLE.HPP file, and this is the time
for it.  When we define the subclass car, we are required to supply
it with the full definition of the interface to the vehicle class
since car is a subclass of vehicle and must know all about its
parent.  We do that by including the vehicle class into the car
class, and the car class can be compiled.  The vehicle class must
also be included in the header file of the truck class for the same
reason.

When we get to the main program, we must inform it of the details
of all three classes, so all three header files must be included
as is done in lines 3 through 5 of ALLVEHIC.CPP, but this leads to
a problem.  When the preprocessor gets to the car class, it
includes the vehicle class because it is listed in the car class
header file, but since the vehicle class was already included in
line 3 of ALLVEHIC.CPP, it is included twice and we attempt to
redefine the class vehicle.  Of course it is the same definition,

                                                         Page 7-6

                                          Chapter 7 - Inheritance

but the system doesn't care, it simply doesn't allow redefinition
of a class.  We allow the double inclusion of the file and at the
same time prevent the double inclusion of the class by building a
bridge around it using the word VEHICLEHPP.  If the word is already
defined, the definition is skipped, but if the word is not defined,
the definition is included and the word is defined at that time. 
The end result is the actual inclusion of the class only once even
though the file is included more than once.  You should have no
trouble understanding the logic of the includes if you spend a
little time studying this program sequence.

Even though ANSI-C allows multiple definitions of entities,
provided the definitions are identical, C++ does not permit this. 
The primary reason is because the compiler would have great
difficulty in knowing if it has already made a constructor call for
the redefined entity, if there is one.  A multiple constructor call
for a single object could cause great havoc, so C++ was defined to
prevent any multiple constructor calls by making it illegal to
redefine any entity.  This is not a problem in any practical
program.

The name VEHICLEHPP was chosen as the word because it is the name
of the file, with the period omitted.  If the name of the file is
used systematically in all of your class definitions, you cannot
have a name clash because the filename of every class must be
unique.  It would be good for you to get into the practice of
building the optional skip around all of your classes.



MULTIPLE INHERITANCE
_________________________________________________________________

Early implementations of C++ do not allow multiple inheritance,
inheriting data and methods from more than one parent class.  The
newest versions of C++ permit multiple inheritance since the latest
definition of the language (AT&T version 2.0 of C++), includes it
as a part of its syntax.  One of the biggest problems with multiple
inheritance is the question of what should be done when both parent
classes have methods of the same name.  Some means must be
available to decide which of the methods will actually be
inherited.

Chapter 9 of this tutorial will discuss multiple inheritance.












                                                         Page 7-7

                                          Chapter 7 - Inheritance

PROGRAMMING EXERCISES
_________________________________________________________________


1.   Add another object of the vehicle class to ALLVEHIC.CPP named
     bicycle, and do some of the same operations as were done to
     the unicycle.  You will only need to recompile the main
     program and link all four files together to get an executable
     file, the three classes will not require recompilation.

2.   Add the optional skip around the header files of the classes
     named car and truck.  Then recompile all four files and relink
     them to get an executable file.

3.   Add a new method to the truck class to return the total weight
     of the truck plus its payload and add code to ALLVEHIC.CPP to
     read the value out and display it on the monitor.  This will
     require an addition to TRUCK.HPP, another addition to
     TRUCK.CPP, and of course the changes to the main program named
     ALLVEHIC.CPP.  The answer is given as three files named
     CH07_3A.HPP (TRUCK.HPP), CH07_3B.CPP (TRUCK.CPP) and the
     changed main program is found in CH07_3C.CPP in the answer
     directory on the distribution disk for this tutorial.
































                                                         Page 7-8
```
{% endraw %}

## CHAP08.TXT

{% raw %}
```



                                                        Chapter 8
                                                 MORE INHERITANCE

In the last chapter we developed a model using modes of
transportation to illustrate the concept of inheritance.  In this
chapter we will use that model to illustrate some of the finer
points of inheritance and what it can be used for.  If it has been
a while since you read and studied chapter 7, it would be good for
you to return to that material and review it in preparation for a
more detailed study of the topic of inheritance.



REORGANIZED FILE STRUCTURE
_________________________________________________________________

A close examination of the file named            ================
INHERIT1.CPP will reveal that it is identical to   INHERIT1.CPP
the program developed in chapter 7 named         ================
ALLVEHIC.CPP except that the program text is
rearranged.  The biggest difference is that some
of the simpler methods in the classes have been changed to inline
code to shorten the file considerably.  In a practical programming
situation, methods that are this short should be programmed inline
since the actual code to return a simple value is shorter than the
code required to actually send a message to a non-inline method.

The only other change is the reordering of the classes and
associated methods with the classes all defined first, followed by
the main program.  This puts all class interface definitions on a
single page to make the code easier to study.  The implementations
for the methods are deferred until the end of the file where they
are available for quick reference but are not cluttering up the
class definitions which we wish to study carefully in this chapter. 
This should be an indication to you that there is considerable
flexibility in the way the classes and methods can be arranged in
C++.  Of course you realize that this violates the spirit of C++
and its use of separate compilation, but is only done here for
convenience.

As mentioned before, the two subclasses, car and truck, each have
a variable named passenger_load which is perfectly legal, and the
car class has a method of the same name, initialize(), as one
defined in the super-class named vehicle.  The rearrangement of the
files in no way voids this allowable repeating of names.

After you have convinced yourself that this program is truly
identical to the program named ALLVEHIC.CPP from chapter 7, compile
and execute it with your compiler to assure yourself that this
arrangement is legal.




                                                         page 8-1

                                     Chapter 8 - More Inheritance

THE SCOPE OPERATOR
_________________________________________________________________

Because the method initialize() is defined in the car subclass, it
hides the method of the same name which is part of the parent
class, and there may be times you wish to send a message to the
method in the parent class for use in the subclass object.  This
can be done by using the scope operator in the following manner in
the main program;

   sedan.vehicle::initialize(4,3500.0);

As you might guess, the number and types of parameters must agree
with those of the method in the parent class because it will
respond to the message.


HIDDEN METHODS
_________________________________________________________________

Examine the file named INHERIT2.CPP carefully    ================
and you will notice that it is a repeat of the     INHERIT2.CPP
last example program with a few minor changes.   ================

You will notice that the derived classes named
car and truck do not have the keyword public prior to the name of
the parent class in the first line of each.  The keyword public,
when included prior to the parent's name, makes all of the methods
defined in the parent class available for use in the derived class
just as if they were defined as part of the subclass.  Therefore,
in the previous program, we were permitted to call the methods
defined as part of the parent class from the main program even
though we were working with an object of one of the derived
classes.  One example of when we did this was when we sent a
message to the sedan to get its weight in an output statement of
the main program.
In the present program, without the keyword public prior to the
parent class name, the only methods available for objects of the
car class, are those that are defined as part of the class itself,
and therefore we only have the methods named initialize() and
passengers() available for use with objects of class car.  In this
program, the only inheritance is that of variables since the two
variables are inherited into objects of class car but even they are
not directly available as will soon be seen.  

When we declare an object of type car, according to the definition
of the C++ language, it contains three variables.  It contains the
one defined as part of its class named passenger_load and the two
that are part of its parent class, wheels and weight.  The only
variable that is available for direct use within its methods is the
one defined as part of its own class, the other two are effectively
hidden from its methods.  You will note that there is no way in
this program that we can ever use the variables named wheels or
weight directly in either an external program or one of the methods

                                                         page 8-2

                                     Chapter 8 - More Inheritance

of this class.  The variables are a part of an object of class car
when each is declared and is stored as part of the object, but the
only way to use them is through use of the methods defined as part
of the parent class.  They are initialized in line 86 to illustrate
the means used to access them.

We will show you a way to access the parent class variables
directly within local methods shortly in this chapter.  For now,
we will return to the use of the subclasses in this example
program.

The observant student will notice that several of the output
statements have been commented out of the main program since they
are no longer legal or meaningful operations.  Lines 56 through 58
have been commented out because the methods named get_weight() and
wheel_loading() are not inherited into the car class without the
keyword public in the car class definition.  You will notice that
initialize() is still available but this is the one in the car
class, not the method of the same name in the vehicle class.

Moving on to the use of the truck class in the main program, we
find that lines 62 and 64 are commented out for the same reason as
given above, but lines 65 and 66 are commented out for an entirely
different reason.  Even though the method named efficiency() is
available and can be called as a part of the truck class, it cannot
be used because we have no way to initialize the wheels or weight
of the truck objects.  We can get the weight of the truck objects,
as we have done in line 104, by using the scope resolution
operator, but since the weight has no way to be initialized, the
result is meaningless and lines 65 and 66 are commented out.

As you have surely guessed by now, there is a way around all of
these problems and we will cover them shortly.  In the meantime,
be sure to compile and execute this example program to see that
your compiler gives the same result.  It would be a good exercise
for you to reintroduce some of the commented out lines to see what
sort of an error message your compiler issues for these errors.


INITIALIZING ALL DATA
_________________________________________________________________

If you will examine the example program named    ================
INHERIT3.CPP, you will find that we have fixed     INHERIT3.CPP
the initialization problem that we left dangling ================
in the last example program.

The method named init_truck() now contains all four of the
parameters as input data and it calls the method named initialize()
of class vehicle within its implementation.  You will notice that
we must call the method using the scope resolution operator in line
97 since there is no object to call, only the class.  Following the
initialization, it is permissible to call the semi.efficiency()
method in line 65 and 66 of the main program.


                                                         page 8-3

                                     Chapter 8 - More Inheritance


Be sure to compile and execute this program following your detailed
study of it.


WHAT IS PROTECTED DATA?
_________________________________________________________________

Examine the program named INHERIT4.CPP for our   ================
first example of the use of protected data.        INHERIT4.CPP
Just to make the program more versatile, we have ================
returned to the use of the keyword public prior
to the name of the parent classes in lines 18
and 29 of the class definitions.


If the data within a superclass were totally available in all
classes inheriting that superclass, it would be a simple matter for
a programmer to inherit the superclass into a derived class and
have free access to all data in the parent class.  This would
completely override the protection afforded by the use of
information hiding.  For this reason, the data in a class are not
automatically available to the methods of an inheriting class. 
There are times when you may wish to automatically inherit all
variables directly into the subclasses and have them act just as
though they were defined as a part of those classes also.  For this
reason, the designer of C++ has provided the keyword protected.

In the present example program, the keyword protected is given in
line 5 so that all of the data of the vehicle class can be directly
imported into any derived classes but are not available outside of
the class or derived classes.  All data are automatically defaulted
to private type if no specifier is given, as in all earlier
programs in this chapter.  The keyword private can be used as
illustrated in lines 19 and 30 but adds nothing due to the default.

You will notice that the variables named wheels and weight are
available to use in the method named initialize() in lines 85
through 91 just as if they were declared as a part of the car class
itself, since they are used directly.  We can now state the rules
for the three means of defining variables and methods.

     private - The variables and methods are not available to any
          outside calling routines, and they are not available
          to any subclasses inheriting this class.

     protected - The variables and methods are not available to any
          outside calling routines, but they are available to
          any subclass inheriting this class.

     public - All variables and methods are freely available to all
          outside calling routines and to all subclasses.




                                                         page 8-4

                                     Chapter 8 - More Inheritance

You will note that these three means of definition can also be used
in a struct type.  The only difference with a struct is that
everything defaults to public until one of the other keywords is
used.

Be sure to compile and execute this program before continuing on
to the next example program.


INHERITING CONSTRUCTORS
_________________________________________________________________

Examine the example program named INHERIT5.CPP   ================
for yet another variation to our basic program,    INHERIT5.CPP
this time adding constructors.                   ================

The vehicle class has a constructor to
initialize the number of wheels and the weight to the indicated
values and has no surprising constructs.  The car and truck classes
each have a constructor also to initialize their unique variables
to some unique values.  If you jump ahead to the main program, you
will find that the initializing statements are commented out for
each of the objects so we must depend on the constructors to
initialize the variables.  The most important thing to glean from
this example program is the fact that when one of the constructors
is called for a derived class, the constructor is also called for
the parent class.  In fact, the constructor for the parent class
will be called before the constructor for the derived class is
called.  All of the data will be initialized, including the data
inherited from the parent class.

Be sure to compile and execute this example program.


POINTERS TO AN OBJECT AND AN ARRAY OF OBJECTS
_________________________________________________________________

Examine the final example program in this        ================
chapter named INHERIT6.CPP for examples of the     INHERIT6.CPP
use of an array of objects and a pointer to an   ================
object.

The program is identical to the first program in this chapter until
we get to the main program where we find an array of 3 objects of
class car declared in line 51.  It should be obvious that any
operation that is legal for a simple object is legal for an object
that is part of an array, but we must be sure to tell the system
which object of the array we are interested in by adding the array
subscript as we do in lines 55 through 61.  The operation of this
portion of the program should be very easy for you to follow, so
we will go on to the next construct of interest.

You will notice, in line 64, that we do not declare an object of
type truck but a pointer to an object of type truck.  In order to

                                                         page 8-5

                                     Chapter 8 - More Inheritance

use the pointer, we must give it something to point at which we do
in line 66 by dynamically allocating an object.  Once the pointer
has an object to point to, we can use the object in the same way
we would use any object, but we must use the pointer notation to
access any of the methods of the object.  This is illustrated for
you in lines 67 through 71, and will be further illustrated in the
example programs of chapters 12 and 13 of this tutorial.

Finally, we deallocate the object in line 72.  You should spend
enough time with this program to thoroughly understand the new
material presented here, then compile and execute it.


PROGRAMMING EXERCISES
_________________________________________________________________


1.   Remove the comment delimiters from lines 65 and 66 of
     INHERIT2.CPP to see what kind of results are returned.  Remove
     them from line 56 to see what kind of an error is reported by
     the compiler for this error.

2.   Add cout statements to each of the constructors of
     INHERIT5.CPP to output messages to the monitor so you can see
     the order of sending messages to the constructors.






























                                                         page 8-6
```
{% endraw %}

## CHAP09.TXT

{% raw %}
```



                                                        Chapter 9
                                             MULTIPLE INHERITANCE
                                            AND FUTURE DIRECTIONS

C++ version 2.0 was released by AT&T during the summer of 1989, and
the major addition to the language is multiple inheritance, the
ability to inherit data and methods from more than one class into
a subclass.  Multiple inheritance and a few of the other additions
to the language will be discussed in this chapter along with a few
of the expected future directions of the language.

Several companies have announced their intention of marketing C++
compilers early in 1990, but as of this writing, Borland
International and Zortech are the only two major companies to
actually deliver a product to the marketplace.  The examples in
this chapter have all been compiled and executed using the Borland
C++ compiler version 1.00 but the Zortech compiler was on back
order at the time of this writing, so the example programs could
not be tested with it.

After completing this tutorial, you should have enough experience
with the language to study additional new constructs on your own
as they are implemented by the various compiler writers.  We will
update the entire tutorial as soon as practical following
procurement of any new compiler, but hopefully the language will
not change rapidly enough now to warrant an update oftener than
twice a year.  Please feel free to contact us for information on
updates to the Coronado Enterprises C++ tutorial.


MULTIPLE INHERITANCE
_________________________________________________________________

The major addition to the C++ language with the release of version
2.0 is the ability to inherit methods and variables from two or
more parent classes when building a new class.  This is called
multiple inheritance, and is purported by many people to be a major
requirement for an object oriented programming language.  Some
writers have expressed doubts as to the utility of multiple
inheritance, and we are inclined to agree with them.  To illustrate
the validity of this, it was not easy to think up a good example
of the use of multiple inheritance as an illustration for this
chapter.  In fact, the resulting example is sort of a forced
example that really does nothing useful.  It does however,
illustrate the mechanics of the use of multiple inheritance with
C++, and that is our primary concern at this time.  

The biggest problem with multiple inheritance involves the
inheritance of variables or methods from two or more parent classes
with the same name.  Which method should be chosen as the inherited
variable or method if two or more have the same name?  This will
be illustrated in the next few example programs.

                                                         Page 9-1

                                 Chapter 9 - Multiple Inheritance

SIMPLE MULTIPLE INHERITANCE
_________________________________________________________________

An examination of the file named MULTINH1.CPP    ================
will reveal the definition of two very simple      MULTINH1.CPP
classes in lines 4 through 27 named moving_van   ================
and driver.

In order to keep the program as simple as possible, all of the
member methods are defined as inline functions.  This puts the code
for the methods where it is easy to find and study.  You will also
notice that all variables in both classes are declared to be
protected so they will be readily available for use in any class
which inherits them.  The code for each class is kept very simple
so that we can concentrate on studying the interface to the methods
rather than spending time trying to understand complex methods. 
As mentioned previously, chapter 12 will illustrate the use of non-
trivial methods.

In line 30, we define another class named driven_truck which
inherits all of the data and all of the methods from both of the
previously defined classes.  In the last two chapters, we studied
how to inherit a single class into another class, and to inherit
two or more classes, the same technique is used except that we use
a list of inherited classes separated by commas as illustrated in
line 30.  The observant student will notice that we use the keyword
public prior to the name of each inherited class in order to be
able to freely use the methods within the subclass.  In this case,
we didn't define any new variables, but we did introduce two new
methods into the subclass in lines 32 through 39.

We declared an object named chuck_ford which presumably refers to
someone named Chuck who is driving a Ford moving van.  The object
named chuck_ford is composed of four variables, three from the
moving_van class, and one from the driver class.  Any of these four
variables can be manipulated in any of the methods defined within
the driven_truck class in the same way as in a singly inherited
situation.  A few examples are given in lines 47 through 56 of the
main program and the diligent student should be able to add
additional output messages to this program if he understands the
principles involved.

All of the rules for private or protected variables and public or
private method inheritance as used with single inheritance extends
to multiple inheritance.



DUPLICATED METHOD NAMES
_________________________________________________________________

You will notice that both of the parent classes have a method named
initialize(), and both of these are inherited into the subclass

                                                         Page 9-2

                                 Chapter 9 - Multiple Inheritance

with no difficulty.  However, if we attempt to send a message to
one of these methods, we will have a problem, because the system
does not know which we are referring to.  This problem will be
solved and illustrated in the next example program.

Before going on to the next example program, it should be noted
that we have not declared any objects of the two parent classes in
the main program.  Since the two parent classes are simply normal
classes themselves, it should be apparent that there is nothing
magic about them and they can be used to define and manipulate
objects in the usual fashion.  You may wish to do this to review
your knowledge of simple classes and objects of those classes.

Be sure to compile and execute this program after you understand
its operation completely.



MORE DUPLICATE METHOD NAMES
_________________________________________________________________

The second example program in this chapter named ================
MULTINH2.CPP, illustrates the use of classes       MULTINH2.CPP
with duplicate method names being inherited into ================
a subclass.

If you study the code, you will find that a new method has been
added to all three of the classes named cost_per_full_day().  This
was done intentionally to illustrate how the same method name can
be used in all three classes.  The class definitions are no problem
at all, the methods are simply named and defined as shown.  The
problem comes when we wish to use one of the methods since they are
all the same name and they have the same numbers and types of
parameters and identical return types.  This prevents some sort of
an overloading rule to disambiguate the message sent to one or more
of the methods.

The method used to disambiguate the method calls are illustrated
in lines 60, 64, and 68 of the main program.  The solution is to
prepend the class name to the method name with the double colon as
used in the method implementation definition.  This is referred to
as qualifying the method name.  Actually, you could qualify all
method calls, but if the names are unique, the compiler can do it
for you and make your code easier to write and read.

Be sure to compile and execute this program and study the results. 
The observant student will notice that there is a slight
discrepancy in the results given in lines 79 through 81, since the
first two values do not add up to the third value exactly.  This
is due to the limited precision of the float variable but should
cause no real problem.





                                                         Page 9-3

                                 Chapter 9 - Multiple Inheritance

DUPLICATED VARIABLE NAMES
_________________________________________________________________

If you will examine the example program named    ================
MULTINH3.CPP, you will notice that each subclass   MULTINH3.CPP
has a variable with the same name.               ================

According to the rules of inheritance, an object
of the driven_truck class will have two variables with the same
name, weight.  This would be a problem if it weren't for the fact
that C++ has defined a method of accessing each one in a well
defined way.  You have probably guessed that we will use
qualification to access each variable.  Lines 38 and 45 illustrate
the use of the variables.  It may be obvious, but it should be
explicitly stated, that there is no reason that the subclass itself
cannot have a variable of the same name as those inherited from the
parent classes.  In order to access it, you simply use
qualification.

It should be apparent to you that once you understand single
inheritance, multiple inheritance is nothing more than an extension
of the same rules.  Of course, if you inherit two methods or
variables of the same name, you must use qualification to allow the
compiler to select the correct one.  


FUTURE DIRECTIONS OF C++
_________________________________________________________________

An ANSI committee has been formed to write an ANSI standard for
C++.  They first met in the Spring of 1990 and are expected to
complete the standard in about three years.  Until the new standard
is released, the C++ language is expected to stay fairly stable. 
However, due to the nature of compiler writers and their desire to
slightly improve their offerings over their competitors, you can
bet that the language will not remain static during this three year
period.

Many small changes have been added during the past year that barely
affect the casual programmer, or even the heavy user of the
language.  You can be sure that the language will evolve slowly and
surely into a very usable and reliable language.  There are two
areas that should be discussed in a little detail because they will
add so much to the language in future years, exception handling and
parameterized types.


FUTURE DIRECTIONS - EXCEPTION HANDLING
_________________________________________________________________

A future version of C++ will have some form of exception handling
to allow the programmer to trap errors and prevent the system from
completely shutting down when a fatal error occurs.  The Ada
language allows the programmer to trap any error that occurs, even

                                                         Page 9-4

                                 Chapter 9 - Multiple Inheritance

system errors, execute some recovery code, and continue on with the
program execution in a very well defined way.  Bjarne Stroustrup
has announced that some form of exception handling will be
implemented but he has not stated what form it would take as of
this writing.


FUTURE DIRECTIONS - PARAMETERIZED TYPES
_________________________________________________________________

Many times, when developing a program, you wish to perform some
operation on more than one data type.  For example you may wish to
sort a list of integers, another list of floating point numbers,
and a list of alphabetic strings.  It seems silly to have to write
a separate sort function for each of the three types when all three
are sorted in the same logical way.  With parameterized types, you
will be able to write a single sort routine that is capable of
sorting all three of the lists.

This is already available in the Ada language as the generic
package or procedure.  Because it is available in Ada, there is a
software components industry that provides programmers with
prewritten and thoroughly debugged software routines that work with
many different types.  When this is available, there will be a
components industry for C++ and precoded, debugged and efficient
source code will be available off the shelf to perform many of the
standard operations.  These operations will include such things as
sorts, queues, stacks, lists, etc.

Bjarne Stroustrup has announced that parameterized types will be
available in a future version of C++ but he has not announced the
details of how they would be implemented.  He has presented a paper
with details of one way to implement them, but this is only a
suggestion, not a specification.


WHAT SHOULD BE YOUR NEXT STEP?
_________________________________________________________________

Once again, we have reached a major milestone in C++ programming. 
With the ability to use inheritance, you have nearly all of the
tools you need to effectively use the object oriented programming
techniques of C++ and you would do well to stop studying again and
begin programming.  The only topic left with C++ is virtual methods
which are used for dynamic binding or polymorphism.  This will be
covered in the next two chapters.  The vast majority of all
programming can be done without dynamic binding, and in attempting
to force it into every program, you could wind up with an
unreadable mess.







                                                         Page 9-5
```
{% endraw %}

## CHAP10.TXT

{% raw %}
```



                                                       Chapter 10
                                                VIRTUAL FUNCTIONS

Once again we are into a completely new topic with terminology
which will be completely new to you.  If you are new to object
oriented programming, you should follow along in this chapter very
carefully because every attempt has been made to define every
detail of this new and somewhat intimidating topic.  However, if
you are well versed in object oriented programming, simply learning
to use C++, you may wish to skip the first four programs in this
chapter and go directly to the example program named VIRTUAL5.CPP
and continue from there to the end of the chapter.

One term which must be defined is polymorphism, a rather large word
that simply means similar when used in the context of object
oriented programming.  Objects are polymorphic if they have some
similarities but are still somewhat different.  We will see how it
is used in the context of object oriented programming as we proceed
through this chapter.

We have already studied operator overloading and function
overloading in this tutorial, and they are a subtle form of
polymorphism since in both cases, a single entity is used to refer
to two or more things.  The use of virtual functions can be a great
aid in programming some kinds of projects as you will see in the
next two chapters.


A SIMPLE PROGRAM WITH INHERITANCE
_________________________________________________________________

Examine the example program named VIRTUAL1.CPP   ================
for the basic program outline we will use for      VIRTUAL1.CPP
all discussion in this chapter.  Since this      ================
program has nothing to do with virtual
functions, the name may be somewhat misleading. 
It is named VIRTUAL1.CPP because it is part of a series of programs
intended to illustrate the use of virtual functions. The last
program in this chapter will illustrate the proper use of virtual
functions.

The first program is very simple and you will recognize it as being
somewhat similar to the programs studied in the last chapter except
that this program is greatly simplified in order to effectively
instruct you in the use of a virtual function.  You will notice
that many of the methods from the last chapter have been completely
dropped from this example for simplicity, and a new method has been
added to the parent class, the method named message() in line 8. 
Throughout this chapter we will be studying the operation of the
method named message() in the parent class and the derived classes. 
For that reason, there is a method named message() in the car class
as well as in the new class named boat in lines 27 through 32.

                                                        Page 10-1

                                   Chapter 10 - Virtual Functions

You will also notice that there is a lack of a method named
message() in the truck class.  This has been done on purpose to
illustrate the use of the virtual method, or if you prefer, you can
refer to it as a virtual function.  You will recall that the method
named message() from the parent class is available in the truck
class because the method from the parent class is inherited with
the keyword public included in line 19.  You will also notice that
the use of the keyword public in lines 12 and 27 actually do
nothing because the only method available in the parent class is
also available in the derived classes.  There are no methods
actually inherited.  Leaving the keyword in the header poses no
problem however, so it will be left there for your study.

The method named message() in the parent class and in the derived
classes has been kept very simple on purpose.  Once again, we are
interested in the technique of the virtual method rather than a
long complicated example.

The main program is as simple as the classes, one object of each
of the classes is declared in lines 37 through 40 and the method
named message() is called once for each object.  The result of
executing the program indicates that the method for each is called
except for the object named semi, which has no method named
message().  As discussed in the last chapter, the method named
message() from the parent class is called and the data output to
the monitor indicates that this did happen since it displays
"Vehicle message" for the object named semi.

The data for the objects is of no concern in this chapter so all
data is allowed to default to private type and none is inherited
into the derived classes.  Some of the data is left in the example
program simply to make the classes look like classes.  Based on
your experience with C++ by now, you realize that the data could
be removed since it is not used.

After you understand this program, compile and execute it to see
if your compiler gives the same result of execution.


ADDING THE KEYWORD VIRTUAL
_________________________________________________________________

As you examine the next example program named    ================
VIRTUAL2.CPP, you will notice that there is one    VIRTUAL2.CPP
small change in line 8.  The keyword virtual has ================
been added to the declaration of the method
named message() in the parent class.

It may be a bit of a disappointment to you to learn that this
program operates no differently than the last example program. 
This is because we are using objects directly and virtual methods
have nothing to do with objects, only with pointers to objects as
we will see soon.  There is an additional comment in line 46
illustrating that since all four objects are of different classes,

                                                        Page 10-2

                                   Chapter 10 - Virtual Functions

it is impossible to assign any object to any other object in this
program.  We will soon see that some pointer assignments are
permitted between objects.

After you are convinced that virtual functions, or methods, have
nothing to do with actual objects, compile and execute this example
program to see if your compiler results in the same output as that
listed.


USING OBJECT POINTERS
_________________________________________________________________

Examine the example program named VIRTUAL3.CPP   ================
and you will find a repeat of the first program    VIRTUAL3.CPP
but with a different main program.               ================

In this program the keyword virtual has been
removed from the method declaration in the parent class in line 8,
and the main program declares pointers to the objects rather than
declaring the objects themselves in lines 37 through 40.  Since we
only declared pointers to the objects we find it necessary to
allocate the objects before using them by using the new operator
in lines 42 through 49.  Upon running the program, we find that
even though we are using pointers to the objects we have done
nothing different than what we did in the first program.  Upon
execution, we find that the program operates in exactly the same
manner as the first example program in this chapter.  This should
not be surprising because a pointer to a method can be used to
operate on an object in the same manner as an object can be
manipulated.

Be sure to compile and execute this program before continuing on
to the next example program.  The observant student will notice
that we failed to deallocate the objects prior to terminating the
program.  As always, in such a simple program, it doesn't matter
because the heap will be cleaned up automatically when we return
to the operating system.


A POINTER AND A VIRTUAL FUNCTION
_________________________________________________________________

The example program named VIRTUAL4.CPP is        ================
identical to the last program except for the       VIRTUAL4.CPP
addition of the keyword virtual to line 8 once   ================
again.

I hope you are not terribly disappointed to find that this program,
including the keyword virtual, is still identical to the last
program.  Once again we are simply using pointers to each of the
objects, and in every case the pointer is of the same type as the
object to which it points.  You will begin to see some changes in
the next example program, so be patient, we are almost there.

                                                        Page 10-3

                                   Chapter 10 - Virtual Functions


Once again, it would be best for you to compile and execute this
program.

The four previous programs were meant to instruct you in what
virtual functions do not do.  The next two will show you what
virtual functions do.


A SINGLE POINTER TO THE PARENT CLASS
_________________________________________________________________

Examine the example program named VIRTUAL5.CPP   ================
where we almost use a virtual method.  Be just     VIRTUAL5.CPP
a little patient because we are almost ready to  ================
use a virtual method.

You will notice that this is another copy of our program with the
keyword virtual omitted from line 8 and with a totally different
main program.  In this program, we only declare a single pointer
to a class and the pointer is pointing to the parent class of the
class hierarchy.  We will use the single pointer to refer to each
of the four classes and observe what the output of the method named
message() is.

A little digression is in order to understand how we can use a
pointer to one class to refer to another class.  If we referred to
a vehicle (in the real world, not necessarily in this program), we
could be referring to a car, a truck, a motorcycle, or any other
kinds of transportation, because we are referring to a very general
form of an object.  If however, we were to refer to a car, we are
excluding trucks, motorcycles, and all other kinds of
transportation, because we are referring to a car specifically. 
The more general term of vehicle can therefore refer to many kinds
of vehicles, but the more specific term of car can only refer to
a single kind of vehicle, namely a car.

We can apply the same thought process in C++ and say that if we
have a pointer to a vehicle (remembering that a pointer is actually
a reference), we can use that pointer to refer to any of the more
specific objects, and that is indeed legal in C++ according to the
definition of the language.  In a like manner, if we have a pointer
to a car, we cannot use that pointer to reference any of the other
classes including the vehicle class because the pointer to the car
class is too specific and restricted to be used on any of the other
classes.


THE C++ POINTER RULE
_________________________________________________________________

The rule as given in C++ terms is as follows.  A pointer to a
parent class can be used to point to an object of a derived class
of that parent class, but a pointer to a subclass cannot be used

                                                        Page 10-4

                                   Chapter 10 - Virtual Functions

to point to the parent class or to any of the other derived classes
of the parent class.  In our program therefore, we are allowed to
declare a pointer to the vehicle class which is the parent class,
and use that pointer to refer to either the parent class or any of
the subclasses.

This is exactly what we do in the main program.  We declare a
single pointer which points to the vehicle class and use it to
point to each of the classes in the same order as in the last four
programs.  In each case, we allocate the object, send a message to
the method named message() and deallocate the object before going
on to the next class.  You will notice that when we send the four
messages, we are sending the message to the same method, namely the
method named message() which is a part of the vehicle superclass. 
This is because the pointer has a class associated with it.  Even
though the pointer is actually pointing to four different classes
in this program, the program acts as if the pointer is always
pointing to the parent class because the pointer is of the type of
the parent class.

The next program will finally do something you have not seen in any
C program or in any C++ program in this tutorial up to this point. 
After you compile and execute the current program, we will go on
to our first real virtual function.


A REAL VIRTUAL FUNCTION
_________________________________________________________________

We finally come to an example program with a     ================
virtual function that operates as a virtual        VIRTUAL6.CPP
function and exhibits dynamic binding or         ================
polymorphism as it is called.  This is in the
program named VIRTUAL6.CPP.

This program is identical to the last example program except that
the keyword virtual is added to line 8 to make the method named
message() a virtual function.  You will notice that the keyword
virtual only appears in the parent class.  In this program, we will
once again use the single pointer to the parent class and allocate,
use, then delete an object of each of the four available classes
using the identical code we used in the last program.  However,
because of the addition of the keyword virtual in line 8, this
program acts entirely different from the last example program.

Since the method named message() is declared to be a virtual method
in its declaration in the parent class, anytime we refer to this
method with a pointer to the parent class, we actually execute the
method associated with one of the subclasses if there is a method
available in the subclass and if the pointer is actually pointing
to that subclass.  When the program is executed, the output
reflects the same output we saw in the other cases when we were
actually calling the methods in the subclasses, but we are actually
using a pointer of the parent class type to make the calls.

                                                        Page 10-5

                                   Chapter 10 - Virtual Functions


You will notice that in lines 40, 44, 48, and 52, even though the
code is identical in each line, the system is making the decision
of which method to actually call based on the type of the pointer
when each message is sent.  The decision of which method to call
is not made during the time when the code is compiled.  This is
dynamic binding and can be very useful in some programming
situations.  In fact, there are only three different calls made
because the class named truck does not have a method named
message(), so the system simply uses the method from the parent
class to satisfy the message passed.  For this reason, a virtual
function must have an implementation available in the parent class
which will be used if there is not one available in one or more of
the subclasses.  Note that the message is actually sent to a
pointer to the object, but this is splitting hairs and should not
be overly emphasized at this time.

It is probably not obvious but the observant student will note that
the structure of the virtual function in the parent and each of the
subclasses is identical.  The return type and the number and types
of the parameters must be identical for all since a single
statement can be used to call any of them.


IS THIS REALLY SIGNIFICANT?
_________________________________________________________________

This program probably does not seem to do much when you first
approach it, but the dynamic binding is a very useful construct and
will be illustrated in the next chapter with a rather simple
program that uses the technique of dynamic binding to implement a
personnel list for a small company.

If the keyword virtual is used, the system will use late binding
which is done at run time, but if the keyword is not included,
early binding will be used.  What these words actually mean is that
with late binding, the compiler does not know which method will
actually respond to the message because the type of the pointer is
not known at compile time.  With early binding, however, the
compiler decides at compile time what method will respond to the
message sent to the pointer.

It should be pointed out that virtual functions are most useful
when used in conjunction with dynamic allocation and pointers, and
the proper operation of virtual functions depends on function name
overloading.  This is one of the reasons we stressed the topic of
function name overloading earlier.

Be sure to compile and execute this example program before
continuing on to the next chapter where we will see a practical
example of the use of this technique.




                                                        Page 10-6

                                   Chapter 10 - Virtual Functions

PROGRAMMING EXERCISES
_________________________________________________________________


1.   Modify VIRTUAL3.CPP to deallocate the objects prior to
     terminating the program.

2.   Add a message() method to the truck class of VIRTUAL6.CPP to
     observe the use of the new method instead of defaulting to the
     parent class method.













































                                                        Page 10-7
```
{% endraw %}

## CHAP11.TXT

{% raw %}
```



                                                       Chapter 11
                                           MORE VIRTUAL FUNCTIONS

This chapter will actually be a continuation of the topics covered
in the last chapter but this will be a fuller explanation of what
virtual functions are and how they can be used in a program.  We
will present a simple database program with a virtual function to
show how it can be used, then we will go on to illustrate a more
complex use of the virtual function in a manner that finally
illustrates its utility and reason for existence.


HOW TO START AN OOP PROJECT
_________________________________________________________________

The observant student will notice that we begin our use of object
oriented programming by identifying an object, or in this case a
class of objects and even some subordinate objects, which we
completely define.  When we get to the main program we then have
a simple job with the remaining needs and they are completed using
standard procedural programming techniques which we are familiar
with.  This is the way to begin any object oriented programming
project, by first identifying a few objects that can be separated
conveniently from the rest of the code, programming them, then
writing the main program.  It should be added that, for your first
project using objects, do not try to make everything an object. 
Select a few objects and after gaining experience with object
oriented programming techniques, use more objects on future
projects.  Most programmers use too many objects for their first
project and write very obtuse, unreadable code.


THE PERSON HEADER FILE
_________________________________________________________________

Examine the file named PERSON.HPP for the        ================
definition file for the person class.  This         PERSON.HPP
class definition should cause you no problem to  ================
understand since there is nothing new here.  The
only thing that should be mentioned about this
class is that the protected mode is used for the variables so that
they are readily available in the subclasses which will import this
class.


THE PERSON IMPLEMENTATION
_________________________________________________________________

The implementation for the person class is given ================
here and it is a little strange in the way it is    PERSON.CPP
written and used.  The intent of this program is ================
that the virtual method named display() in this
file will never be used, but it is required by

                                                        Page 11-1

                              Chapter 11 - More Virtual Functions

the C++ compiler to be used for a default in case some of the
subclasses do not have this function available.  In the main
program we will be careful to never call this function due to the
nature of the program we are writing.  Keep in mind that C++
requires an implementation of all virtual functions even if they
are never used.  In this case the message is obviously intended to
be output as an error message.

Be sure to compile this program prior to going on to the next class
definitions.


THE SUPERVISOR HEADER
_________________________________________________________________

The file named SUPERVSR.HPP contains the class   ================
definitions for the three derived classes,         SUPERVSR.HPP
supervisor, programmer, and secretary.  These    ================
were all placed in a single file for two
reasons.  The first reason is to simply
illustrate to you that this can be done, and secondly, to allow
some of the files to be combined on the disk and to require fewer
compilations by you prior to executing the resulting program.  This
is actually a good way to combine these files since they are all
subclasses of a common class.  It is actually a matter of style or
personal taste.

You will notice that all three of these classes contain a method
named display() and all have the same return value of void, and all
have the same number of parameters as the parent class's method of
the same name.  All of this equality is required because they are
all actually called by the same call statement.  You will also
notice that the other method in each class has the same name, but
different numbers and types of formal parameters which prevents
this method from being used as a virtual method.

The remainder of this file is simple and you should be able to read
the code and understand it completely.  Once again, this file
cannot be compiled or executed.


THE SUPERVISOR IMPLEMENTATION
_________________________________________________________________

The file named SUPERVSR.CPP contains the         ================
implementation for the three classes.  If you      SUPERVSR.CPP
spend a little time studying the code, you will  ================
find that each of the methods named init_data()
simply initializes all fields to those passed in
as the actual arguments in a very simple manner.

The method named display(), however, outputs the stored data in
different ways for each class since the data is so different in
each of the classes.  Even though the interface to these three

                                                        Page 11-2

                              Chapter 11 - More Virtual Functions

methods is identical, the actual code is significantly different. 
There is no reason code besides output could not have been used,
but the output is so visible when the program is executed that it
was chosen for this illustration.

This file should be compiled at this time in preparation for the
next example program which will use all four classes as defined in
these four files.


THE FIRST CALLING PROGRAM
_________________________________________________________________

The file named EMPLOYEE.CPP is the first program ================
that uses the classes developed in this chapter,   EMPLOYEE.CPP
and you will find that it is a very simple       ================
program.

We begin with an array of ten pointers, each pointing to the parent
class.  As you recall from the last chapter, this is very important
when using virtual functions, the pointer must point to the parent
class.  The pointers that will be stored in this array will all
point to objects of the subclasses however.  When we use the
resulting pointers to refer to the methods, the system will choose
the method at run time, not at compile time as nearly all of our
other programs have been doing.

We allocate six objects in lines 16 through 39, initialize them to
some values using the methods named init_data(), then assign the
pointers to the members of the array of pointers to person. 
Finally, in lines 41 and 42, we call the methods named display()
to display the stored data on the monitor.  You will notice that
even though we only use one method call in line 42, we actually
send messages to each of the three methods named display() in the
subclasses.  This is true dynamic binding because if we were to
change the values of some of the pointers in the array, we would
then call different methods with the same pointers.

Be sure to compile and execute this program before continuing on
in this chapter.  You will recall that the linking step requires
you to combine several files in order to satisfy all system calls. 
After you have done that, we will use the same objects in another
way to show how they can be reused.


THE LINKED LIST CLASS
_________________________________________________________________

Examination of the file named ELEMLIST.HPP will  ================
reveal the definition of two more classes which    ELEMLIST.HPP
will be used to build a linked list of employees ================
to illustrate a more practical way to use the
dynamic binding we have been studying in this
chapter.

                                                        Page 11-3

                              Chapter 11 - More Virtual Functions


The two classes were put in the same file because they work
together so closely and neither is of much value without the other. 
You will notice that the elements of the linked list do not contain
any data, only a pointer to the person class that we developed for
the last program, so that the linked list will be composed of
elements of the person class without modifying the class itself.

There are two interesting constructs used here that must be pointed
out before going on to the next program.  The first is the partial
declaration given in line 8 which allows us to refer to the class
named employee_list before we actually define it.  The complete
declaration for the class is given in lines 22 through 29.  The
second construct of interest is the friend class listed in line 17
where we give the entire class named employee_list free access to
the variables which are a part of the employee_element class.  This
is necessary because the method named add_person() must access the
pointers contained in employee_element.  We could have defined an
additional method as a part of employee_element and used this
method to refer to the pointers but it was felt that these two
classes work so well together that it is not a problem to open a
window between the classes.  We still have complete privacy from
all other programs and classes declared as parts of this program.

Note that the single method included in the employee_element class
is implemented in inline code.  Two of the methods of employee_list
are still open so we need an implementation for this class.


THE LINKED LIST IMPLEMENTATION
_________________________________________________________________

The file named ELEMLIST.CPP is the               ================
implementation for the linked list classes and     ELEMLIST.CPP
should be self explanatory if you understand how ================
a singly linked list operates.  All new elements
are added to the end of the current list.  This
was done to keep it simple but a sorting mechanism could be added
to sort the employees by name if desired.

The method to display the list simply traverses the list and calls
the method named display() in line 30 once for each element of the
list.

It is important for you to take notice that in this entire class,
there is no mention made of the existence of the three derived
classes, only the parent class named person is mentioned.  The
linked list therefore has no hint that the three subclasses even
exist, but in spite of that, we will see this class send messages
to the three subclasses as they are passed through this logic. 
That is exactly what dynamic binding is, and we will have a little
more to say about it after we examine the calling program.



                                                        Page 11-4

                              Chapter 11 - More Virtual Functions

THE LINKED LIST IMPLEMENTATION
_________________________________________________________________

At this time you should examine the final        ================
example program in this chapter named              EMPLOYE2.CPP
EMPLOYE2.CPP for our best example of dynamic     ================
binding in this tutorial, yet the program is
kept very simple.

This program is very similar to the example program named
EMPLOYEE.CPP with a few changes to better illustrate dynamic
binding.  In line 7 we declare an object of the class employee_list
to begin our linked list.  This is the only copy of the list we
will need for this program.  For each of the elements, we allocate
the data, fill it, and send it to the linked list to be added to
the list where we allocate another linked list element to point to
the new data, and add it to the list.  The code is very similar to
the last program down through line 40.

In line 43 we send a message to the display_list() method which
outputs the entire list of personnel.  You will notice that the
linked list class defined in the files named ELEMLIST.HPP and
ELEMLIST.CPP are never informed in any way that the subclasses even
exist but they dutifully pass the pointers to these subclasses to
the correct methods and the program runs as expected.


WHAT GOOD IS ALL OF THIS
_________________________________________________________________

Now that we have the program completely debugged and working,
suppose that we wished to add another class to the program, for
example a class named consultant because we wished to include some
consultants in our business.  We would have to write the class of
course and the methods within the classes, but the linked list
doesn't need to know that the new class is added, so it does not
require any changes in order to update the program to handle
consultant class objects.  In this particular case, the linked list
is very small and easy to understand, but suppose the code was very
long and complex as with a large database.  It would be very
difficult to update every reference to the subclasses and add
another subclass to every list where they were referred to, and
this operation would be very error prone.  In the present example
program, the linked list would not even have to be recompiled in
order to add the new functionality.

It should be clear to you that it would be possible to actually
define new types, dynamically allocate them, and begin using them
even while the program was executing if we properly partitioned the
code into executable units operating in parallel.  This would not
be easy, but it could be done for a large database that was
tracking the inventory for a large retail store, or even for an
airlines reservation system.  You probably have little difficulty
understanding the use of dynamically allocated memory for data, but

                                                        Page 11-5

                              Chapter 11 - More Virtual Functions

dynamically allocating classes or types is new and difficult to
grasp, but the possibility is there with dynamic binding.


PROGRAMMING EXERCISES
_________________________________________________________________


1.   Add a new class named consultant to the files named
     SUPERVSR.HPP and SUPERVSR.CPP, then add code to EMPLOYE2.CPP
     to exercise the new class.  Note that you do not need to
     recompile the linked list class in order to execute the new
     code and use the new class.  Even without recompiling the
     linked list class it is capable of storing and passing the new
     class of data provided of course that the new class is
     referred to using a pointer to the parent class.







































                                                        Page 11-6
```
{% endraw %}

## CHAP12.TXT

{% raw %}
```



                                                       Chapter 12
                                           FLYAWAY ADVENTURE GAME

PLAYING THE GAME
_________________________________________________________________

Prior to studying the source code for this game,  ===============
it would be to your advantage to spend some time    FLYAWAY.EXE
playing the game to get familiar with what the    ===============
game does.  Load the file FLYAWAY.EXE and begin
the adventure through the airport.  The
executable file is precompiled for you so you can begin executing
the program before you have to compile and link the whole thing. 
The entire program is composed of 12 files and will take a little
effort on your part to properly compile and execute it, but that
will come later.

If you have played adventure games before, sometimes called
interactive fiction, you should begin trying various commands to
find your way through the airport to your proper plane.  If you
have not played before, a few hints are in order concerning how to
play the game.

The object of the game is to get to your proper plane on time so
you can fly away to your vacation.  Of course there a few obstacles
and problems along the way and they will be brought up at the
appropriate time, and it will be up to you to solve the puzzles
associated with each problem.  To add a little excitement, you only
have about twenty-five minutes to get to your plane, with each move
taking a minute, so you must hurry.  Of course, just getting to the
plane on time is not enough, there are a few additional
requirements.  You will find what they are as you progress through
the game.  You will probably be required to restart the game many
times before you arrive at your destination unscathed and on time.


THE METHOD OF PLAY
_________________________________________________________________

The method of play is extremely simple.  You simply wander around
the airport looking for things to do and places to go.  You move
around the airport by giving the system commands to go in a
direction with four choices available, north, south, east, or west. 
You can abbreviate any of these four direction commands to the
first letter only, and you can use either upper or lower case.  The
system may move you to another area of the airport, or it may tell
you that you can't go that way.  Try loading the game now and
typing, the four directions once each to see what happens.  If this
is not clear, enter the word help to get you started.

In addition to moving around, you can pick up items or ask for more
information in any of the rooms.  Try telling the system to look
around the room and see what additional information it gives you

                                                        Page 12-1

                              Chapter 12 - Flyaway Adventure Game

for each room, some of the clues for solving the puzzle are given
in the clues issued in response to a look command.  Another
important command is inventory which will give you a list of the
items you possess at any given point in time.  Type the word
inventory at this time to see what items you possess.

The remainder of the commands consist of two words, a verb and a
noun.  These can be given in either order, since the system is
smart enough to know the difference, and additional words may be
given following the legal words.  If you give the system a command
that is not in its limited vocabulary, it will tell you it doesn't
understand that word.  Try telling the system to drop an item you
possess, or get an item that is located in the room you are
currently in.

Several friends have played this game with no more knowledge than
you have been given.  One solved it in 40 minutes, but most took
about an hour to complete the game.  After you play the game for
awhile, return to the text and we will study the source code for
the game.  The entire source code for the game is on your
distribution disk.  The game was purposely kept small so the code
could be easily grasped by a programming student.  There is no
reason the game could not have been made much larger by the
addition of more rooms, items, and traps.


THE FIRST CLASS - clock
_________________________________________________________________

Examine the file named CLOCK.HPP for the          ===============
definition of the clock class.  This is the          CLOCK.HPP
class for the game clock, and only one instance   ===============
of this class will be used.  It will be used for
the object time_of_day defined in line 25 of
FLYAWAY.CPP.

The class is very simple, consisting of only two variables, the
hour and the minute, and four methods.  The first method is the
constructor used to initialize the clock to 8:51 as you can see if
you refer to the implementation of this class.  The next two
methods are used to get the current values of the two variables. 
The final method is much more interesting since it does much more. 
It updates the time of day clock and outputs the user prompt to ask
for the next command.  This may not be the best place to output the
user prompt since this class is devoted to the time of day and
associated operations, but this was chosen as the place to do it
since the time of day is part of the user prompt.  You will notice
that the clock was initialized to 8:51, but the first time output
was 8:52 when you played the game.  In order to simplify the coding
later, when we need to decide if we made it to the plane on time,
the time was incremented at the beginning of each game move.  The
time is therefore the same when the command is entered and when it
is executed, hence the time is incremented prior to even the first
output.

                                                        Page 12-2

                              Chapter 12 - Flyaway Adventure Game


The clock class is by far the simplest class in the adventure game
and should be simple for you to understand.  After you are sure you
understand it, we will go on to the next class.



THE SECOND CLASS - items
_________________________________________________________________

If you examine the files named ITEMS.HPP and      ===============
ITEMS.CPP, you will find the complete                ITEMS.HPP
definitions of the handling of the items that     ===============
you carried around the airport in the game. 
There were exactly four transportable items that
could be located in each room or carried by yourself, the keys, the
candy, the ticket, and the money.  The keys and the money keep you
from getting through security and the ticket and candy are required
to get you safely on the plane and enroute to your destination.

The four items are stored in the class named items in the form of
TRUE or FALSE since that is the only required indication.  A TRUE
means the item is located here, and a FALSE means the item is not
here.  The values of TRUE and FALSE are defined in FLYAWAY.H. 
Finally, there are six methods to operate on these items.

The first method is a constructor to set all items to FALSE, and
the next two are used to either get a specific item, or drop one. 
The fourth method is used to tell us if the item is located here
and the last two are used to tell us what items are on hand in this
location.  You will notice that the final two are different because
different text was desired depending on whether you are carrying
the item, or it is located in a room somewhere.

The #ifndef in line 5 is required because this header file is
included in many of the other files and if it is included more than
once, there will be a multiple definition, and hence an error.  A
class only needs to be defined once, so after it is defined by one
of the includes, the name ITEMSHPP will be defined and any other
defines will be ignored.  This is necessary because of the separate
compilation capability of C++.  This was described in more detail
near the end of chapter 7.

The #ifndef in the class clock was not required but was included
in order to make all class definitions the same.

This class is used in line 48 of FLYAWAY.CPP to define an object
for the player named personal_items which stores the list of items
the player is carrying around.  It is also used in the class
location as an embedded or nested object to store the items that
are located in each of the 19 locations in the game.




                                                        Page 12-3

                              Chapter 12 - Flyaway Adventure Game

THE FLIGHT AND GATE CLASS - schedule
_________________________________________________________________

Examine the files named SCHEDULE.HPP and         ================
SCHEDULE.CPP for our first example of a rather     SCHEDULE.HPP
large class, the one that does the flight and    ================
gate scheduling.  You will find a large number
of variables in this class, and eight methods to
handle the variables.  Instead of a detailed description of each
variable and method, we will only give a brief overview of the
class.

Only one object of this class is declared named flight_info in line
26 of the program named FLYAWAY.CPP.  The constructor initializes
the flight possibilities, and the method named shuffle_gates()
shuffles all gates around if the player arrives at his correct gate
without reading the monitor in the waiting area.  Once the monitor
in the waiting area is read, the flights_frozen variable is made
TRUE.  Likewise, the players destination is changed every play by
the method named shuffle_flights() until the player reads his
ticket invoking the method named list_actual_destination().

This class contains the methods to list the data seen on the
monitor, as well as the data seen when invoking the command look
at one of the gates.  Finally, this class contains the method named
check_flight() which searches through the list of requirements to
see if the player has completed all requirements to successfully
reach the final destination for his vacation.

You will notice that several of the location objects were required
to be available within this code and are listed as extern in lines
9 through 21 of the implementation of the class.  The only other
thing to point out is the rest room requirement prior to boarding
the flight.  Line 23 is where the global variable is defined and
initialized, then in line 74 it is set TRUE if the current location
is the rest room, since this is called once during each player
move.  Finally, the state of this variable is checked in line 237
of this file and the appropriate action taken.  You will note that
the main program is not aware that the rest room variable exists
or that anything happens as a result of this variable.  In addition
to information hiding, we may coin a new term, something like
"Information Ignorance", since the main program did not even need
to be aware that there was a requirement to visit the rest room.



THE MOST USED CLASS - location
_________________________________________________________________

The file named LOCATION.HPP is the header file   ================
for the class named location.  It is the class     LOCATION.HPP
that controls all of the moves from location to  ================
location.


                                                        Page 12-4

                              Chapter 12 - Flyaway Adventure Game

This class is a bit unusual in that most of the stored data is in
the form of pointers to the various entities.  The first four are
the locations to which we will go if we go in one of the four
directions from the current location, moreover they are pointers
to those four locations.  Next we have pointers to two different
character strings associated with this room.  Finally in line 24
we declare the object named list_of_items which is an object of
class items defined earlier.  Note that this is an embedded class,
a class embedded within the location class.  It is not a parent
class which we are inheriting something from.  In fact we are
instantiating an object of class items for use within the room
since the room is allowed to store any combination of the four
items contained in the class named items.

There is no constructor used with this class since we choose to
initialize the locations one by one.  Note that a constructor could
have been used even though we would have to refer to some items
prior to their definition because it is permissible to refer to a
pointer to an object before it is declared.  The method named
init() has 6 variable parameters, all of which are pointers,
associated with it which it uses to initialize the first six
variables of this object.  The last variable, an object of class
items, is initialized through use of the constructor associated
with its class.  Referring to lines 81 through 212 of the main
program FLYAWAY.CPP, you will find all of the initialization code
for the 19 objects of class location.  If you drew a map when you
played the game, you will see the interconnections between the
various locations embedded in the initialization statements. 
Notice there is no way to get back to the car from the passenger
drop off area, because presumably the car leaves when you get out
of it.

The next method, named move(), returns a pointer to the new
location if a move was legal, otherwise it returns a NULL value. 
The observant student will also notice that there are special cases
involved with getting out of the snack bar and getting through
security.  These are located here because they are part of the move
logic.  If you played the game to the complete conclusion, you
surely had trouble with at least one of these situations.

The rest of the methods in this class should be self explanatory
and will not be discussed any further.


THE LOCATION MESSAGES
_________________________________________________________________

Examine the file named MESSAGE.H for a complete   ===============
listing of the messages output to the monitor        MESSAGE.H
when each location was entered.  You will also    ===============
find the text for each of the messages output in
response to a look command in this file.  These
were put into a separate file only for the purpose of reducing the
size of the main file.  It does not reduce the compile time since

                                                        Page 12-5

                              Chapter 12 - Flyaway Adventure Game

these messages are not separately compiled.  They are included into
the file and compiled each time the main file FLYAWAY.CPP is
compiled.  You will note that a few of the messages have no text
at all, only the empty quote marks, but are included in order to
have something for the initialization code to work with.


THE PROTOTYPES FOR THE STANDARD C CODE
_________________________________________________________________

The file named FLYAWAY.H contains the             ===============
definitions for TRUE and FALSE as well as the        FLYAWAY.H
enumerated type defining the legal dictionary of  ===============
words for use in playing the game.  The list was
started at a value of 1 so the value of zero can
be used to indicate that the word in question was not in the
library and hence not a legal word for use with the game.

Finally, this file contains the prototypes for all of the functions
that are used in a normal C fashion rather than being parts of an
object.  As much of this problem as was felt practical was broken
up into objects and the remainder was programmed using standard C
functions.  You will find that as you develop object oriented
techniques, you will not program all of any project with objects
but will finally relegate part of it to your old favorite methods.

This file, like all other header files, is protected from multiple
inclusion by the #ifndef construct discussed earlier.


INPUT COMMAND PARSING
_________________________________________________________________

The input command parsing routines were not       ===============
defined as objects but were written as standard     COMMAND.CPP
C++ code to illustrate that all of a program      ===============
need not be handled as objects.  These routines
were written in a separate file to indicate that
it is legal and possible to do so in a program that is primarily
an object oriented program.

The code is straightforward and simple to understand if you study
it, so only a few comments will be made about this file.  The
function get_command() reads two words from the keyboard by calling
the function read_a_line() and returns the words if they are a
valid verb and noun, otherwise it returns zeros for the two words.

There are four functions at the end of this file that are used to
determine if a word is a verb, a noun, a direction, or an
operation.  These are called upon from various places within the
program.  They should be easy for you to understand.




                                                        Page 12-6

                              Chapter 12 - Flyaway Adventure Game

THE MAIN PROGRAM
_________________________________________________________________

We finally reach the main program, the one that   ===============
actually does the top level control.  Examine       FLYAWAY.CPP
the program named FLYAWAY.CPP and we will look    ===============
at some of its interesting characteristics.

Beginning with the main() entry point itself, we see that following
a call to initialize() and the output of a few lines of text, we
are into a single do while loop which terminates when the player
enters the word quit or when the verb quit comes up some other way. 
There are other ways to get the quit because it is generated
internally in some cases such as at end of game.

The loop itself consists of 6 function or method calls.  The first
method is called to update the time of day clock and output the
players prompt in line 66.  Next we call the function get_command()
to get the players input command.  We perform the required action
in line 68 by calling perform_action() which we will describe in
a few paragraphs.  Finally, we send three messages to the object
named flight_info to shuffle the flights and gates and to check if
the player has reached one of the gates.  Remember that within each
of the methods we perform checks to see if we need to do the thing
requested in the message and either perform the action or simply
return to the caller or message sender.



THE WORKING FUNCTION
_________________________________________________________________

The only function we have not mentioned yet is the one that does
all of the work, the function named perform_action() which begins
in line 226.  This function simply looks at the verb and noun, if
there is one, and causes the correct action to be performed. 
Because of the way we packaged all of the other routines, this
function is a snap to implement and to study.  If you go through
each of the else clauses in this function, you will have no trouble
understanding what action is taken for each of the input commands. 
You will notice that many of the actions have conditional clauses
before the action is taken.  For example, it is illegal to buy
candy unless the player has money, the location has candy, and the
location must be the snack_bar according to the rules of the game.

Finally, at the end of this function in line 338, we have the
default case if nothing else was attempted.  It is assumed that
there was something funny requested such as a request to get a
monitor.  Both of these are legal words but they make no sense
together.





                                                        Page 12-7

                              Chapter 12 - Flyaway Adventure Game

FINAL COMMENTS ON FLYAWAY
_________________________________________________________________

Now that you have played the game for awhile and studied the game
in detail, you should have an appreciation for how this game can
be written.  Of course, it could be written in any of several
thousand different ways of packaging and definition.  This has been
only one of the ways.

Because the student may be left with the sinking feeling that this
method simply fell out of the sky or was arrived at in some other
esoteric way, it would only be fair to point out that several
earlier attempts at outlining this project were attempted and
rejected prior to this arrangement.  Object oriented programming
requires the same forethought as non-object oriented programming,
but the object oriented compiler will help you in the coding and
debugging phase since the compiler will find and flag many of the
oversight errors we are so good at introducing into our code.  It
was observed during the coding and debugging phase of this project
that in nearly every case, when the program finally got through the
compiler, the program would actually run without bombing out the
system.  This is not always the case using any standard procedural
programming language.
































                                                        Page 12-8
```
{% endraw %}

## FILE2369.TXT

{% raw %}
```
Disk No: 2369                                                           
Disk Title: C++ Tutor 2 of 2 (2368 also)                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: C++ Tutor                                                
Author Version: 2.0                                                     
Author Registration: $39.95                                             
Special Requirements: C++ compiler.                                     
                                                                        
C++ TUTOR is a comprehensive instructional course for the C++           
programming language which assumes the user has a moderate amount of    
programming experience.                                                 
                                                                        
The C++ source code is included for a large example program to          
illustrate how to use C++ in a practical sense. This example is         
meant to be studied, compiled, and run by the student.                  
                                                                        
All of the points of C++ language, including properly-structured        
programming techniques, are covered at the elementary level.  The       
description and instruction are applicable to Borland's implementation  
of C++.                                                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INTRO.TXT

{% raw %}
```



                                                     Introduction
                                                      WHAT IS C++


THE ORIGIN OF C++
_________________________________________________________________

The C programming language was developed at AT&T for the purpose
of writing the operating system for the PDP-11 series of computers
which ultimately became the unix operating system.  C was developed
with the primary goal of operating efficiency.  Bjarne Stroustrup,
also of AT&T, developed C++ in order to add object oriented
constructs to the language.  Because object oriented technology was
new at the time and all existing implementations of object oriented
languages were very slow and inefficient, the primary goal of C++
was to maintain the efficiency of C.

C++ can be viewed as a procedural language with some additional
constructs, some of which are added for object oriented programming
and some for improved procedural syntax.  A well written program
will reflect elements of both object oriented programming style and
classic procedural programming.  C++ is actually an extendible
language since we can define new types in such a way that they act
just like the predefined types which are part of the standard
language.  C++ is designed for large scale software development.



HOW TO GET STARTED IN C++
_________________________________________________________________

The C programming language was originally defined by the classic
text authored by Kernigan and Ritchie, "The C Programming
language", and was the standard used by all C programmers until a
few years ago.  The ANSI standard for C was finally approved in
December of 1989 and has become the official standard for
programming in C.  Since the ANSI standard adds many things to the
language which were not a part of the Kernigan and Ritchie
definition, and changes a few, the two standards are not absolutely
compatible and some of the more experienced C programmers may not
have studied the newer constructs added to the language by ANSI-C.

This tutorial will assume a thorough knowledge of the C programming
language and little time will be spent on the fundamental aspects
of the language.  However, because we realize that many programmers
have learned the dialect of C as defined by Kernigan & Ritchie,
some sections will be devoted to explaining the newer additions as
provided by the ANSI-C standard.  As the ANSI-C standard was in
development, many of the newer constructs from C++ were included
as parts of C itself, so even though C++ is a derivation and
extension of C, it would be fair to say that ANSI-C has some of its
roots in C++.  An example is prototyping which was developed for
C++ and later added to C.

                                                         Page I-1

                                       Introduction - What is C++

The best way to learn C++ is by using it.  Almost any valid C
program is also a valid C++ program, and in fact the addition of
about 12 keywords is the only reason that some C programs will not
compile and execute as a C++ program.  There are a few other subtle
differences but we will save the discussion of them until later. 
Since this is true, the best way to learn C++ is to simply add to
your present knowledge and use a few new constructs as you need
them for each new program.  It would be a tremendous mistake to try
to use all of the new constructs in your first C++ program.  You
would probably end up with an incomprehensive mixture of code that
would be more inefficient than the same program written purely in
C.  Add a few new constructs to your toolkit each day, and use them
as needed while you gain experience with their use.

As an illustration of the portability of C to C++, all of the
example programs included in the Coronado Enterprises C tutorial
compile and run correctly when compiled as C++ programs with no
changes.  None of the C++ programs will compile and execute
correctly with any C compiler however, if for no other reason than
the use of the new style of C++ comments.



HOW TO USE THIS TUTORIAL
_________________________________________________________________

This tutorial is best used while sitting in front of your computer. 
It is designed to help you gain experience with your own C++
compiler in addition to teaching you the proper use of C++. 
Display an example program on the monitor, using whatever text
editor you usually use, and read the accompanying text which will
describe each new construct introduced in the example program. 
After you study the program, and understand the new constructs,
compile and execute the program with your C++ compiler.

After you successfully compile and execute the example program,
introduce a few errors into the program to see what kind of error
messages are issued.  If you have done much programming, you will
not be surprised if your compiler gives you an error message that
seems to have nothing to do with the error introduced.  This is
because error message analysis is a very difficult problem with any
modern programming language.  The most important result of these
error introduction exercises is the experience you will gain using
your compiler and understanding its nuances.

In the text of the preprinted version of this tutorial, keywords,
variable names, and function names will be written in bold type as
an aid when you are studying the example programs.  It is
impossible to include the bold words in a pure ASCII file which
must be used for the shareware version, but the context will
indicate which words are keywords, variable names, or function
names.


                                                         Page I-2

                                       Introduction - What is C++

The way this tutorial is written, you are not required to compile
and execute every program.  At the end of each example program,
listed in comments, you will find the result of execution of that
program.  Some of the constructs are simple and easy for you to
understand, so you may choose to ignore compilation and execution
of that example program, depending upon the result of execution to
give you the output.  Some students have used these results of
execution to study several chapters of this tutorial on an airplane
by referring to a hardcopy of the example programs.



DIFFERENT C++ IMPLEMENTATIONS
_________________________________________________________________

There are primarily two standards for naming C++ files, one using
the extension CPP and the other using the extension CXX.  All files
in this tutorial use the CPP extension for naming files.  If your
compiler requires the CXX extension it will be up to you to rename
the files.  Even though we have tried to use the most generic form
of all constructs, it is possible that some constructs will not
actually compile and run with some C++ compilers.  As we find new
implementations of C++, and acquire copies of them, we will compile
and execute all files in an attempt to make all example programs
as universal as possible.

The C++ language is very new and is changing rapidly.  The
developer of the language, AT&T, has changed the formal definition
several times in the last few years and the compiler writers are
staying busy trying to keep up with them.  For this reason, we have
included the following notes on some of the more popular compilers
and how they fare with the example programs in this tutorial.

Zortech C++ version 1.07 - This compiler is based on C++ version
     1.2, an earlier version defined by AT&T.  Most of the files
     will compile correctly if the #include file is changed from
     "iostream.h" to "stream.hpp".

Borland TURBO C++ version 1.0 - This compiler is based on C++
     version 2.0.  All example programs will compile without error
     using this compiler.

Zortech C++ version 2.1 - This compiler is based on C++ version
     2.0.  None of the files have been tested with this compiler 
     yet.



PRINTING OUT THE EXAMPLE PROGRAMS
_________________________________________________________________

Some students prefer to work from a hardcopy of the example
programs.  If you desire to print out the example programs, there
is a batch file on the distribution disk to help you do this.  Make

                                                         Page I-3

                                       Introduction - What is C++

the distribution disk the default drive and type PRINTALL at the
user prompt and the system will print out about 150 pages of C++
programs, all of the example programs in this tutorial.

The PRINTALL batch file calls the program named LIST.EXE once for
each example program on the distribution disk.  LIST.EXE was
written in TURBO Pascal and compiled for your use in listing any
program with line numbers and the date the program was last
modified, the date and time of the file.  TURBO Pascal was used
because Borland does not require a licensing fee for distributing
copies of the resulting run time files.



PROGRAMMING EXERCISES
_________________________________________________________________

There are programming exercises given at the end of each chapter
to enable you to try a few of the constructs given in the chapter. 
These are for your benefit and you will benefit greatly if you
attempt to solve each programming problem.  If you merely read this
entire tutorial, you will have a good working knowledge of C++,
but you will only become a C++ programmer if you write C++
programs.  The programming exercises are given as suggestions to
get you started programming.

An answer for each programming exercise is given in the ANSWERS
directory on the distribution disk.  The answers are all given in
compilable C++ source files named in the format CHnn_m.CPP, where
nn is the chapter number and m is the exercise number.  If more
than one answer is required, an A, B, or C, is included following
the exercise number.



RECOMMENDED ADDITIONAL READING
_________________________________________________________________

Richard S. Wiener & Lewis J. Pinson.  "An Introduction to Object-
     Oriented Programming and C++".  Addison-Wesley, 1988.  This
     is the first book recommended since it covers both object
     oriented programming and C++ in depth.  It is clearly written
     and well organized.

Brad Cox.  "Object Oriented Programming, An Evolutionary Approach". 
     Addison-Wesley, 1986.  This book is excellent for a study of
     object oriented programming and what it is, but since it is
     based on Objective-C, it covers nothing of the C++ language
     or how to use it.

John Berry.  "The Waite Group's C++ Programming".  Howard W. Sams,
     1988.  This book covers the fundamentals of the language well
     and includes a significant amount of information on the
     application of object oriented programming techniques.


                                                         Page I-4

                                       Introduction - What is C++


Bjarne Stroustrup. "The C++ Programming Language".  Addison-Wesley,
     1986.  This is the definitive book on C++, but it would be
     difficult for a beginner to learn the language from this book
     alone.

Note that the C++ culture is in rapid change and by the time you
read this, there will be additional well written texts available
as aids to your learning the syntax and proper use of the C++
programming language.













































                                                         Page I-5
```
{% endraw %}

## TABCONT.TXT

{% raw %}
```





                       CORONADO ENTERPRISES

                    C++ TUTORIAL - Version 2.0


This documentation and the accompanying software, including all of
the example C++ programs and text files, are protected under United
States copyright law to protect them from unauthorized commercial-
ization.  This version of the tutorial is distributed under the
shareware concept, which means you are not required to pay for it.
You are permitted to copy the disks, and pass the copies on to a 
friend, provided that you do not modify any files or omit any files
from the complete package, and you are in fact encouraged to pass
on complete copies to friends.  You are permitted to charge a small
fee to cover the costs of duplication, but you are not permitted to 
charge anything for the software itself.

If you find the tutorial helpful, you are encouraged to register
with the author and to submit a small fee to help compensate him
for his time and expense in writing it.  We will provide you with
a beautifully printed copy of this tutorial if you submit a full
registration.  See the READ.ME file on either diskette for addi-
tional details.

Whether or not you send a registration fee, feel free to request
a copy of the latest list of available tutorials and a list of the
authorized Public Domain libraries that distribute our full line of
programming language tutorials.



                   Gordon Dodrill - July 20, 1990



           Copyright (c) 1989, 1990,  Coronado Enterprises


                       Coronado Enterprises
                      12501 Coronado Ave NE
                  Albuquerque, New Mexico 87122




                 C++ TUTORIAL - TABLE OF CONTENTS 

Introduction                                            Page I-1

Chapter  1 - Simple Things                              Page 1-1
    CONCOM.CPP    Constants and comments                  1-1
    SCOPEOP.CPP   Scope operator                          1-3
    MESSAGE.CPP   The stream library                      1-3
    FSTREAM.CPP   File streams                            1-6
    VARDEF.CPP    Variable definitions                    1-7

Chapter  2 - Compound Types                             Page 2-1
    ENUM.CPP      The enumerated type                     2-1
    STRUCTUR.CPP  The structure                           2-1
    CLASS1.CPP    The class                               2-2
    UNIONEX.CPP   The union                               2-3
    TYPECONV.CPP  Type conversions                        2-4

Chapter  3 - Pointers                                   Page 3-1
    POINTERS.CPP  Using Pointers                          3-1
    NEWDEL.CPP    New and delete operators                3-3
    FUNCPNT.CPP   Function pointers                       3-5

Chapter  4 - Functions                                  Page 4-1
    PROTYPE1.CPP  Using prototypes                        4-1
    PROTYPE2.CPP  Using prototypes                        4-3
    PASSREF.CPP   Pass by reference                       4-5
    DEFAULT.CPP   Parameter defaults                      4-6
    VARARGS.CPP   Variable number of arguments            4-7
    OVERLOAD.CPP  Overloading function names              4-8

Chapter  5 - Encapsulation                              Page 5-1
    OPEN.CPP      No information hiding                   5-1
    CLAS.CPP      Information hiding                      5-2
    OPENPOLE.CPP  Corruptible data                        5-6
    CLASPOLE.CPP  Protected data                          5-7
    CONSPOLE.CPP  Constructors and destructors            5-10
    BOXES1.CPP    All in one file                         5-11
    BOX.HPP       Box interface                           5-12
    BOX.CPP       Box implementation                      5-12
    BOXES2.CPP    Using the box class                     5-13



Chapter  6 - More encapsulation                         Page 6-1
    OBJARRAY.CPP  An Array of objects                     6-1
    OBJSTRNG.CPP  An object with a string                 6-3
    OBJINTPT.CPP  An object with a pointer                6-3
    OBJDYNAM.CPP  Dynamic allocation of objects           6-5
    OBJLIST.CPP   Embedded pointers                       6-6
    OBJLINK.CPP   Linked list of objects                  6-7
    NESTING.CPP   Nested classes                          6-9
    OPOVERLD.CPP  Operator overloading                    6-10
    FUNCOVER.CPP  Function name overloading               6-12

Chapter  7 - Inheritance                                Page 7-1
    VEHICLE.HPP   Vehicle interface                       7-1
    VEHICLE.CPP   Vehicle implementation                  7-2
    TRANSPRT.CPP  Using the vehicle class                 7-2
    CAR.HPP       Car interface                           7-3
    CAR.CPP       Car implementation                      7-4
    TRUCK.HPP     Truck interface                         7-5
    TRUCK.CPP     Truck implementation                    7-6
    ALLVEHIC.CPP  Use of car, truck, & vehicle            7-6

Chapter  8 - More inheritance                           Page 8-1
    INHERIT1.CPP  Using public                            8-1
    INHERIT2.CPP  Omitting public                         8-2
    INHERIT3.CPP  Intra class messages                    8-4
    INHERIT4.CPP  Using protected                         8-4
    INHERIT5.CPP  Using constructors                      8-6
    INHERIT6.CPP  Arrays and pointers                     8-6

Chapter  9 - Multiple Inheritance                       Page 9-1
    MULTINH1.CPP  Multiple inheritance                    9-2
    MULTINH2.CPP  Duplicate method names                  9-3
    MULTINH3.CPP  Duplicate variable names                9-4

Chapter 10 - Virtual functions                          Page 10-1
    VIRTUAL1.CPP  The starting point                      10-1
    VIRTUAL2.CPP  Adding virtual                          10-3
    VIRTUAL3.CPP  Using pointers to subclasses            10-3
    VIRTUAL4.CPP  Using virtual                           10-4
    VIRTUAL5.CPP  Using pointers to parent class          10-4
    VIRTUAL6.CPP  True virtual functions                  10-6

Chapter 11 - More Virtual Functions                     Page 11-1
    PERSON.HPP    Person header                           11-1
    PERSON.CPP    Person implementation                   11-2
    SUPERVSR.HPP  Personnel header                        11-2
    SUPERVSR.CPP  Personnel implementation                11-3
    EMPLOYEE.CPP  A simple user program                   11-3
    ELEMLIST.HPP  Linked list header                      11-4
    ELEMLIST.CPP  Linked list implementation              11-5
    EMPLOYE2.CPP  A better user program                   11-5





Chapter 12 - Flyaway adventure game                     Page 12-1
    FLYAWAY.EXE   Flyaway executable                      12-1
    CLOCK.HPP     Clock header                            12-2
    CLOCK.CPP     Clock implementation                    12-2
    ITEMS.HPP     Moveable items header                   12-3
    ITEMS.CPP     Items implementation                    12-3
    SCHEDULE.HPP  Scheduler header                        12-4
    SCHEDULE.CPP  Scheduler implementation                12-4
    LOCATION.HPP  Locations header                        12-5
    LOCATION.CPP  Locations implementation                12-5
    MESSAGE.H     Hint messages                           12-6
    FLYAWAY.H     Nouns and verbs                         12-7
    COMMAND.CPP   Command parser                          12-7
    FLYAWAY.CPP   Main program                            12-8



ABOUT THE AUTHOR
_________________________________________________________________

The author of this tutorial began programming in 1961 using FORTRAN
on an IBM 1620.  Since then, most of his career has been involved
with designing digital logic for satellite application.  In 1983,
being somewhat burned out with logic design, he began a study of
some of the more modern programming languages and has since made
a complete career shift to software development.  After learning
Pascal, C was studied, followed by Modula-2 and Ada, and more
recently C++.  Rather than simply learning the syntax of each new
language, modern methods of software engineering were studied and
applied to effectively utilize the languages.  He is currently
employed by a large research and development laboratory where he
continues to study, teach, and apply the newer programming
languages.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2369

     Volume in drive A has no label
     Directory of A:\

    CHAP01   TXT     23489   7-20-90  12:00p
    CHAP02   TXT      9539   7-20-90  12:00p
    CHAP03   TXT     13890   7-20-90  12:00p
    CHAP04   TXT     21698   7-20-90  12:00p
    CHAP05   TXT     40839   7-20-90  12:00p
    CHAP06   TXT     34149   7-20-90  12:00p
    CHAP07   TXT     20091   7-20-90  12:00p
    CHAP08   TXT     15333   7-20-90  12:00p
    CHAP09   TXT     13789   7-20-90  12:00p
    CHAP10   TXT     17622   7-20-90  12:00p
    CHAP11   TXT     14973   7-20-90  12:00p
    CHAP12   TXT     21502   7-20-90  12:00p
    INTRO    TXT     11846   7-20-90  12:00p
    PRINTEXT BAT       314   7-20-90  12:00p
    PRNTTEXT EXE     15938   7-20-90  12:00p
    READ     ME       3902   7-20-90  12:00p
    TABCONT  TXT      8678   7-20-90  12:00p
    GO       BAT        24  10-03-90   1:40a
    FILE2369 TXT      1999  10-03-90   3:02p
    GO       TXT      1116  10-04-90  12:01a
           20 file(s)     290731 bytes
                           22528 bytes free
