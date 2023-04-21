---
layout: page
title: "PC-SIG Diskette Library (Disk #661)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0661/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0661"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "RESICALC"

    RESICALC v.1.0 is a memory-resident calculator which can be "popped-up"
    whenever needed.  The matrix functions supported in RESICALC are called
    by an "expressionfunc(x)" where x is a matrix expression.  They
    include:
    
    ~ DIM returns the total number of components.
    ~ ROWS returns the number of rows.
    ~ COLS returns the number of columns.
    ~ CSUM returns a row vector whose components are the sum of columns.
    ~ RSUM returns a column vector whose components are the sum of rows.
    ~ CAVG returns a row vector whose components are the averages of
    columns.
    ~ RAVG returns a column vector whose components are the averages of
    rows.
    ~ CSUM2 returns a row vector whose components are the sum of squares of
    columns.
    ~ RSUM2 returns a column vector whose components are the sum of squares
    of rows.
    
    Of course, there are limits.  For example, it does not solve system of
    linear equations or inverts a matrix.  If you like it and want more,
    the same folks who built it have a more powerful MATRIX CALCULATOR,
    whose capabilities include linear programming calculations,
    differential equations, solution of system of linear and non-linear
    equations, etc.
    
    System Requirements:  128K, one disk drive and a monchrome display
    
    How to Start:  Check the README.DOC and MANUAL.DOC files for
    directions.  To bring up RESICALC, press the ALT and F9 keys together.
    
    File Descriptions:
    
    RESICALC COM  Pop up calculator program
    ERRMSG        Run time error messages of RESICALC.
    NAMELIST      Names of built-in functions of RESICALC.
    READ     ME   Quick start-up procedure for RESICALC.
    MANUAL   DOC  Short manual of RESICALC.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES661.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 661   RESICALC Version 1.0                                 v1   DS2
---------------------------------------------------------------------------
RESICALC v.1.0 is a memory-resident calculator which can be "popped-up"
whenever needed.
 
RESICALC COM  Pop up calculator program
NAMELIST      Names of built-in functions of RESICALC.
ERRMSG        Run time error messages of RESICALC.
MANUAL   DOC  Short manual of RESICALC.
READ     ME   Quick start-up procedure for RESICALC.
FILES    DOC  Short description of files
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
*******************************************************************************
*                                                                             *
*                     RESIDENT    CALCULATOR                                  *
*                                                                             *
*                         version 1.1                                         *
*                                                                             *
*                (C) Copyright by SoftTech Inc.                               *
*
*                                                                             *
*      Freely Duplicate and Distribute for non-commercial use only.           *
*                                                                             *
*******************************************************************************


    This is a short manual of RESICALC CALCULATOR.

For free catalog of scientific and engineering software, please contact

          SoftTech Inc.
          14640 LaBelle
          Oak Park, MI 48237
          1-313-544-8544.


I. GETTING STARTED


At boot time, type RESICALC at system prompt. The system prompt should return.
Now proceed as usual to do whatever you want. In the middle of any program, if
you need RESIDENT, press Alt key and F9 keys simultaneously. To return to what-
ever you've been doing, press Alt and F10 keys simultaneously. Just after
booting, it may be necessary to hit carriage return after Alt-F9.


    After Alt-F9 keys, you will be in the main menu. Pressing a key of the
choices will bring you to different modes as explained below. RESIDENT is case
insensitive, i.e., upper and lower case letters are not differentiated.

F mode : lets you define programmed function. Enter function name, argument
         name ( an argument is local, i.e., not accessible from outside ), and
         function definition expression which may include argument and/or
         global variables. It may call other functions. Multiple statements
         are allowed using ";" as statement separators. The total length of
         expression may not exceed 255 characters including spaces and ";".

K mode : lets you remove user defined variables or functions.

L mode : load user programmed variables and functions from disk.

N mode : change a name of a variable or a function.

O mode : sets option switches,

         F : Toggles Function listing at beginning of F mode.
         V : Toggles Variable listing at beginning of V mode.
         H : Toggles hexadecimal display of result in R mode.
             RESULT will be displayed in hexadecimal number only when result is
             a Real (or 1 by 1 matrix)
         D : Changes Logged Directory.
         P : Sets Real format used in printing in P mode.
             Ex   : Floating Format with Fieldwidth x.
             Fx.y : Decimal Point Format with Fieldwidth x and y decimal digits

P mode : To obtain Printout of a Variable or a Function definition. In matrix
         printout, the real format can be controlled by Format Option in O
         mode.

R mode : lets you enter expressions which will be evaluated immediately and the
         result stored in a variable "RESULT", to be used in the next
         expression just like other variables. Entering an empty expression
         will bring you back to main menu. After evaluating each expression
         entered, it enters the MATRIX EDITOR mode if the result is a matrix.
         If not (the result is a simple REAL, 1 by 1 matrix), the result is
         printed in hexadecimal if Hex toggle is ON (in O mode) or if the
         last expression ended with '%'. The result is displayed by invoking
         MATRIX EDITOR at the end of evaluation. See next section II for
         details of MATRIX EDITOR. Hexadecimal floating point is in the form
         +$x.xxxxx^+yy, where x or y is  in '0'..'F' and ^ presents raising
         to the power of 2. yy is adjusted so that it is a multiple of 4.

S mode : lets you save variables or functions in a disk. Entering "ALL" when
         you are asked the name of function or variable to be saved will save
         all functions and variables.

V mode : will list available global variables and lets you edit variable in the
         MATRIX EDITOR environment. The display format is set by F submenu in
         O mode.


II. MATRIX EDITOR

MATRIX EDITOR is invoked by V mode by the user or in R mode by RESICALC. In it,
you may use the cursor keys to position the blinking display field which
replaces the usual blinking underline cursor. Pressing Crtl key or Alt key
simultaneously with a cursor key will move the cursor columnwise. For example,
Crtl-PgDn will shift the screen window right by a page. It is easier for you
to learn by experiment. In the editor, pressing one of the following keys will
do :

'C':change the number on the current cursor.
'G':change the cursor position. Useful to move in a very large matrix, as you
    avoid pressing cursor keys many times.
'F':change the display format.
'Q':quit the editor.

If you like the MATRIX EDITOR, source code in Turbo PASCAL is available for an
even more powerful version which includes macro commands in the SPARSEPACK
UTILITIES. SPARSEPACK and UTILITIES are available at $22.00. If you already
have SPARSEPACK, you can purchase UTILITIES at $10 plus $2 postage and
handling.


III. EXPRESSIONS and OPERATORS.


A legal expression may contain signs ("+", "-"), alphabets, numbers, decimal
points, parentheses, operators, and separators(" ", ";", or carriage return
character).

A variable or function name must start with an alphabet, may contain alphabets
or numbers, up to 10 chracters long, and must be followed by a separator or a
parenthesis,

A number is made of signs, numbers, decimal point, and "E" in case of floating
point format. Absolute values of 1.0E-38 to 1.0E38 and 0.0 are allowed.

The order of evaluation of an expression is

 1. one enclosed in parentheses ("(","[","{" are equivalent and
    ")","]","}" are equivalent).

 2. Functions and variables. The first letter must be in ['A'..'Z'], and
    following letters in ['A'..'Z','0'..'9']. The maximum length is 10 letters.
    After it, either an operator, a parenthesis, or a ' ' must follow as a
    field separator. Get the listings by V and F mode in the main menu and
    avoid using identical names in user variable or functions. Note that
    there are many names reserved even though they are undefined in RESICALC.
    It is necessary to preserve upward compatibility to MATRIX CALCULATOR which
    supports all of them.

 3. "^" operator (exponentiation)
    For example, 3^3 is 27.

 4. "&","*","/","," operators (multiplications)

    '&':mutiplication of term by term.

                1  2  3            9 8 6
        If A =  2  3  4  and  B =  3 4 5
                5  6  7            3 8 0

                       9 16 18
        Then A & B =   6 12 20
                      15 48  0

    '*':regular mutrix multiplication.

    '/':term by term division. The counterpart of '&'.

    ',':columnwise augmentation
        For the above example,

                1 2 3 9 8 6
        A , B = 2 3 4 3 4 5
                5 6 7 3 8 0

    When either of the two operand matrices is a real (1 by 1 matrix),
    the real operates on every componentof the other matrix.


 5. "+","-","\" operators (addition)

    '+':regular matrix edition.

    '-':regular matrix subtraction.

    '\':rowwise augmentation
        For the above example,

                1 2 3
                2 3 4
                5 6 7
        A \ B = 9 8 6
                3 4 5
                3 8 0

    The '\' and ',' operator are used to build matrices.
    To make matrix A from above, the following expression will do the job.

    1,2,3\2,3,4\5,6,7

    When either of the two operand matrices is a real (1 by 1 matrix),
    the real operates on every componentof the other matrix.

 6. "@", "=", ";", "%",">" and "$"

    These are not operators, but utilities.

    '@':store the result at a matrix spelled after '@'. For example,
        to store the above expression in a matrix variable 'A', Enter the
        following expression in the R mode ( or indirectly by calling a
        function which includes same expression.

        1,2,3\2,3,4\5,6,7@A

    '=':stored the specified component of the result at the specified location
        of the spelled variable. For example,

        A>1,2 = B>2,3 will replace B[2,3] by A[1,2].

    ';':Separator for multiple expressions. For example,

        A+B;RESULT*3

        will calculate A+B, place the result in the variable RESULT.
        Then the next expression RESULT*3 is executed. The result will again be
        stored in RESULT. Convenient in function definition when it is
        impossible to define a function in one expression. When a function is
        evaluated, the last RESULT will be returned as the function value.

    "%":Hexadecimal display for the immediate RESULT. Valid only if the RESULT
        is a real.

    ">":submatrix operator. A>1,2 is A[1,2]. If there is no chance for
        confusion, you may skip specifying one index. For example, if A is
        a vector, A>3 will suffice to identify either A[1,3] OR A[3,1].
        A>1,2,5,6 will form a submatrix whose [1,1] component is A[1,2] and
        whose lower left component is A[5,6].

    "$":To signal the naxt term is a hexadecimal number. Otherwise use of
        alphabets 'A'..'F' will cause run time error.


IV. VARIABLES


To check built-in global variables, select V mode from main menu. For their
values, type a name in the R mode.


V. FUNCTIONS


To check built-in functions, select F mode from main menu. The following are a
partial list relevant to real expressions.

ABS, LN, LOG, EXP, SIN, COS, TAN, ASIN, ACOS, ATAN, SINH, COSH, TANH, SQRT,
ERFC, ERROR, INVERROR, RAD, DEG, GAMMA, INV

ASIN is an inverse of SIN.
ERFC is the compliment of ERROR, i.e., ERFC(x)=(1-ERROR(x))
Note that GAMMA(x)=(x-1)!

All numbers are considered in radians by RESIDENT CALCULATOR. If you entered a
number in degrees, convert it by RAD(expr). If you want to see a value in
angles, use DEG(expr).


VI. MATRIX FUNCTIONS

The matrix functions supported in RESICALC is a subset of MATRIX CALCULATOR.
They are called by an expressionfunc(x) where x is a matrix expression.
They include :

DIM returns the total number of components.
ROWS returns the number of rows.
COLS returns the number of columns.
CSUM returns a row vector whose components are the sum of columns.
RSUM returns a column vector whose components are the sum of rows.
CAVG returns a row vector whose components are the averages of columns.
RAVG returns a column vector whose components are the averages of rows.
CSUM2 returns a row vector whose components are the sum of squares of columns.
RSUM2 returns a column vector whose components are the sum of squares of rows.
CSS returns a row vector whose components are variance of columns.
RSS returns a column vector whose components are variance of rows.
CVAR returns CSS/CDF.
RVAR returns RSS/RDF.
CDF returns a row vector whose components are the degrees of freedom of
    columns.
RDF returns a column vector whose components are the degrees of freedom of
    rows.

In the above statistical calculations, any components larger than 1.0E+18 are
considered as missing data and not counted.

System of equations, Linear algebra, Eigenanalysis, Sorting, and Numerical
analysis functions of MATRIX CALCULATOR are not supported in RESICALC.

VII. SPECIAL FUNCTIONS

Used for numerical integration (trapezoidal, Simpson, Romberg, Quadrature, and
Runge-Kutta Integration), solution of nonlinear equations (Newton-Raphson),
looping an expression, solution of differential equations, optimization, etc..
They are not available in RESICALC.

VIII. USER SUPPLIED FUNCTIONS

Enter F mode from the main menu. Follow the instructions and spell the function
name, argument name, and defionition expression(s). The RESULT of the last
executable expression will be returned as the function result.

For example, if a, b are real expressions (the matrix expressions resulting in
1 by 1 matrices), with a function name DIST and argument name R, the definition

SQRT(RSUM2(R))

or

SQRT((R>1)^2+(R>2)^2)

or

R>1;RESULT,(R>2);RSUM2(RESULT);SQRT(RESULT)

will return a SQRT(a^2+b^2) if called as DIST(a,b). Note that only one argument
is sufficient to pass multiple arguments with use of augmentation operators
',' and '\'. As you bczecome more proficient, you will realize you can program
your functions to do a lot of things you never dreamed possible in a hand-held
calculator. You can do even more if you have MATRIX CALCULATOR!



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0661

     Volume in drive A has no label
     Directory of A:\

    ERRMSG             366   8-31-84   4:02a
    FILES661 TXT       731   1-04-80   3:25a
    GO       BAT       475  12-19-86   3:15p
    MANUAL   DOC     13100   8-31-84  12:16a
    NAMELIST           674   8-31-84  12:03a
    READ     ME       4002   8-31-84  12:17a
    RESICALC COM     64082   8-31-84  12:05a
            7 file(s)      83430 bytes
                           75264 bytes free
