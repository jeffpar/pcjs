---
layout: page
title: "PC-SIG Diskette Library (Disk #3787)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3787/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3787"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## EXAMPLES.DOC

{% raw %}
```
The Ultimate Calculator 1.2 (UNREGISTERED VERSION)  [F1] for help
Copyright (C) 1992 by Daniel Corbier.  All rights reserved.

ucalc> ;*******************************************************************
ucalc> ;  This text file is a sample session which demonstrates some of the
ucalc> ;  features available in the Ultimate Calculator.  The sections are
ucalc> ;  entitled:
ucalc> ;
ucalc> ;  1. General Calculations
ucalc> ;  2. Physics for Thought
ucalc> ;  3. HBO for Thought
ucalc> ;  4. Are you converted yet?
ucalc> ;  5. Maybe I should use some FORCE
ucalc> ;  6. You must pay
ucalc> ;  7. Let's get a few FACTS straight
ucalc> ;*******************************************************************
ucalc> 
ucalc> ; ***********************
ucalc> ; 1. General Calculations
ucalc> ; ***********************
ucalc> 
ucalc> 17*(5+8)^2
Answer:  2873

ucalc> cos(pi)+8/pi + sinh(14)
Answer:  601303.688561062095

ucalc> test(x) = x^pi + sin(x)   ; User defined function.
ucalc> test(14)
Answer:  3988.18506502600842

ucalc> sum(x*2+3^x,1..100)       ; Summation
Answer:  7.73066281098016997E+47

ucalc> 
ucalc> ; **********************
ucalc> ; 2. Physics for Thought
ucalc> ; **********************
ucalc> 
ucalc> mass   = 77.2     ; g
ucalc> Volume = 4.0      ; cm^3
ucalc> 
ucalc> mass / Volume     ; Density
Answer:  19.3

ucalc> 
ucalc> mass = 13         ; Lets try a different mass
ucalc> 
ucalc> mass / Volume     ; Now lets see the new density
Answer:  3.25

ucalc> ; Quantum Mechanics
ucalc> 
ucalc> h = 6.63E-34      ; J s
ucalc> m = 9.11E-31      ; kg
ucalc> L = 2E-11         ; m
ucalc> 
ucalc> E(x) = (h^2/(8*m*L^2))*x^2  ; Allowed energies for a particle in a box.
ucalc> 
ucalc> E(1)
Answer:  1.50785194840834248E-16

ucalc>              ; Oops, you meant L=2E-10, no problem use the Up arrow.
ucalc> L = 2E-10
ucalc> E(1)       ; You didn't have to retype the eq. !  Time saver, isn't it?
Answer:  1.50785194840834248E-18

ucalc> E(5)
Answer:  3.7696298710208562E-17

ucalc> 
ucalc> ; ******************
ucalc> ; 3. HBO for Thought
ucalc> ; ******************
ucalc> 
ucalc> mode hbo        ; Results will be displayed in Hex, Binary, and Octal
ucalc> 
ucalc> #h1E or #hAFF   ; ORing two hexadecimal numbers
Decimal:  2815     Hex:  AFF     Binary:  101011111111     Octal:  5377

ucalc> 
ucalc> $1E or $AFF     ; Same as above (shortcut notation for hex)
Decimal:  2815     Hex:  AFF     Binary:  101011111111     Octal:  5377

ucalc> 
ucalc> #b1010101 or #b111000 + 44/2
Decimal:  95     Hex:  5F     Binary:  1011111     Octal:  137

ucalc> 
ucalc> mode hbo        ; Toggle HBO mode back off
ucalc> 
ucalc> ; *************************
ucalc> ; 4. Are you converted yet?
ucalc> ; *************************
ucalc> 
ucalc> feet_inches(x) = x * 12       ; You can put these and more in
ucalc> meters_feet(x) = 3.281 * x    ; UCELC.DEF if you use them often.
ucalc> celsius_fa(x)  = 9/5 * x + 32 ; Celsius to Fahrenheit.
ucalc> 
ucalc> celsius_fa(50)
Answer:  122

ucalc> feet_inches(3)
Answer:  36

ucalc> 
ucalc> ; ********************************
ucalc> ; 5. Maybe I should use some FORCE
ucalc> ; ********************************
ucalc> 
ucalc> ; Force = integral( pgh dA )
ucalc> 
ucalc> integ(6.24*(3-x)*2*sqr(9-x^2),-3..3)
Answer:  529.07649351285467

ucalc> integ(3*x^2*(x+7),4..7,500)  ; 500 subdivisions for higher precision
Answer:  3561.75

ucalc> 
ucalc> ; ***************
ucalc> ; 6. You must pay
ucalc> ; ***************
ucalc> 
ucalc> ; You can do all your financial calculations with Ucalc.
ucalc> 
ucalc> ; Lets take a loan to buy a nice house
ucalc> 
ucalc> PV = 175000           ; Loan balance
ucalc> i  = .01              ; Interest rate (1% monthly)
ucalc> n  = 240              ; Number of payments (20 years)
ucalc> 
ucalc> payment() = PV*i/(1-(1+i)^(-n))   ; Formula for monthly payments
ucalc> payment()
Answer:  1926.90073374681746

ucalc> n  = 360              ; Maybe we can negotiate better terms
ucalc> 
ucalc> payment()
Answer:  1800.07204461963275

ucalc> PV = 215000           ; Can we afford a bigger loan?
ucalc> 
ucalc> payment()
Answer:  2211.51708338983452

ucalc> 
ucalc> ; You want to become a millionaire by investing $50,000 and
ucalc> ; earning 14% interest each year.  How many years will it take?
ucalc> 
ucalc> FV = 1000000          ; Future investment value
ucalc> PV = 50000            ; Present investment value
ucalc> i  = .14              ; Annual interest
ucalc> 
ucalc> Term() = ln(FV/PV) / ln(1+i)
ucalc> Term()
Answer:  22.8632526947680305

ucalc> ; It will take around 23 years
ucalc> 
ucalc> ; *********************************
ucalc> ; 7. Let's get a few FACTS straight
ucalc> ; *********************************
ucalc> 
ucalc> 3 + fact(1500)*2
Answer:  9.62399559355954973E+4114

ucalc> ; Wow, not even the US budget deficit is that big of a number.
ucalc> ; Can your pocket calculator get a factorial that high?
ucalc> 
ucalc> solve( exp(x)+3*x = 15 )
Answer:  2.14698767937181217

ucalc>             ; 'x' stores the answer to the previous operation.
ucalc> exp(x)+3*x  ; You can use that concept for accuracy checks.
Answer:  15

ucalc> solve( sin(x) = 1, 0..pi )
Answer:  1.57079632679489662

ucalc> sumtable(x^2+2*x,0..10)
Count         Value         Cumulative
 0             0             0
 1             3             3
 2             8             11
 3             15            26
 4             24            50
 5             35            85
 6             48            133
 7             63            196
 8             80            276
 9             99            375
 10            120           495

Answer:  495

ucalc> 
ucalc> ; Compound functions can be defined by using relational operators.
ucalc> 
ucalc> ;           /  x^2+3,       x > 0
ucalc> ; tst(x) = |   2,           x = 0
ucalc> ;           \  x^2-3,       x < 0
ucalc> 
ucalc> tst(x) = (x^2+3)*(x>0)  +  (2)*(x=0)  +  (x^2-3)*(x<0)
ucalc> tst(15)
Answer:  228

ucalc> tst(-8)
Answer:  61

ucalc> 3*tst(0)^2+pi
Answer:  15.1415926535897932

ucalc> 
ucalc> ; These are just some of the things you can do with Ucalc.
ucalc> 
ucalc> ; Keep those registrations and suggestions coming in, and see you
ucalc> ; next time with even more features to talk about.

```
{% endraw %}

## QUEST.DOC

{% raw %}
```
Answers to the following questions will help me better support
this product.  Please answer as many as you can, and send them
in at one of the addresses listed in UCALC.DOC.  You can use a
separate sheet of paper if necessary.

* Where did you find this program?



* How easy was it to get the hang of how it works?



* How effective is the documentation?



* Do you consider this program to be crippled?



* What key factor(s) made you decide to register (or not to register)?



* What did the program do differently than what you were expecting?



* What additional features would you like to see in the next version?



* Are you satisfied with the support available with this program?



* Is the registration price reasonable?



* What other kinds of programs would you like me to create?



* Additional comments?
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
			===========================
			Ucalc 1.2 Registration Form
			===========================
			      PSL Part #10655		 Date_______________

    Name____________________________________________________________________

    [Company]_______________________________________________________________

    [Title]_________________________________________________________________

    Address_________________________________________________________________

    City___________________________  State/Country _________________________

    Zip____________________________  [Phone] _______________________________

    [E-mail address] _______________________________________________________


    INDIVIDUAL REGISTRATION for the use of Ucalc
    1 registration at $15 ...................................... 15   ______

    ========================================================================

    SITE LICENSE for the use of Ucalc (Choose only one of the following)
	  2 to	10 computers ... at $13 each, nbr computers ___x 13   ______
    or	 11 to	50 computers ... at $10 each, nbr computers ___x 10   ______
    or	 51 to 100 computers ... at $8  each, nbr computers ___x 8    ______
    or	101 to 200 computers ... at $6  each, nbr computers ___x 6    ______
    or	201 or more computers .. at $1200 total fee		      ______

    Authorized Signature: __________________________________________________

    Title: __________________________________________  Date: _______________

    ========================================================================

    Florida residents add 5 percent sales tax		              ______

    Add $4 for shipping in US/Canada ($11 overseas)                   ______

    TOTAL ORDER 						      ______

    Payment method:  [ ] Visa   [ ] Discover     [ ] Master Card   [ ] Check
		     [ ] Cash   [ ] Money order  [ ] American Express

    Card #:________________ Exp:____/____ Signature:________________________

    Diskette Size:  circle:    5 1/4"     3 1/2"

    _ _ _ O / _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
	  O \          (cut here and mail the above)

    Credit card registrations may be made by the following methods:
    (Please note that I can NOT be reached through PSL.)

      -- Phone PSL at:
	 800-242-4775  (Toll free) To register by credit card.
	 713-524-6394  To register by credit card and for order inquiries.

      -- FAX PSL at 713-524-6398

      -- Email PSL at CompuServe userid 71355,470

      -- Write PSL at:

	    The Public (Software) Library
	    P.O. Box 35705
	    Houston, TX 77235-5705
	    USA

    If you are outside of the US, it is preferable to use a credit card,
    or international money order.  If you use a foreign check, then any
    surcharges resulting from funds drawn from a non USA bank must be be
    prepaid in addition to the registration cost.

    All credit card processing is done by PSL.  At my address, I can
    only accept US postal money orders, international money orders,
    and checks.  Please allow 3 weeks delivery when sending a check.

    I would prefer that orders be placed through PSL (faster delivery),
    and comments be sent to me.  To help me keep the price low, and
    add new features, please fill out the questions in QUEST.DOC, and
    mail it to me.

    My address is:

	Daniel Corbier
	571 NE 110th Terrace
	Miami, FL  33161

	Email:  corbier@andrews.edu     (Internet)
```
{% endraw %}

## UCALC.DOC

{% raw %}
```
=================================================================

		     ULTIMATE CALCULATOR 1.2
	      Copyright (C) 1992 by Daniel Corbier
		       All Rights Reserved.

=================================================================

CONTENTS
--------

1.  Introduction
2.  Ucalc Features
3.  Installation
4.  Getting Started
5.  Command Line
6.  Ucalc Prompt
7.  Table of Symbols
8.  Summation
9.  Numerical Integration
10. Solving Equations
11. Numerical Notations
12. Assigning Functions & Variables
13. UCALC.DEF
14. Order of Precedence
15. Technical Notes
16. Registration
17. My Address
18. Distribution
19. Acknowledgments


1. Introduction
   ============

Ucalc is a high precision scientific calculator which can evaluate
expressions, solve equations, perform numerical integrations, and do
summations.  It supports many built-in functions, operators, numerical
notations, and modes.  It also allows for user-defined functions and
variables.  Expressions such as the following can be computed:

    63 - 5 + 4.821

    (5.9-abs(2.8/5-3))^2 + sin( 3-(pi+3/4) )

    sum(x^2+x-2,1..500)

    solve(3*x^2+2*x-5=27)

    integ(x^2*sin(x),1..5)

    #b101010 and (#b10101 or #h1CC) * 2^5

    15 * sin(pi/4)+abs(10-(5+log(20))^2+9)-#b101110111


2. Ucalc Features
   ==============

- High precision: 18 significant digits. Range: 3.4E-4932 to 1.2E+4932
- Flexible notations:  ** or ^, SQR or SQRT, MOD or % etc...
- Line editor with expression recall
- Expressions can also be entered at the DOS command line
- Decimal, Hexadecimal, Binary and Octal notations
- Summations
- Numerical Integration
- Equations can be solved
- Radian, Degree, and Gradient modes for trig functions
- Online help with F1
- Arithmetic operators
- Bitwise operators
- Relational operators
- Trig functions
- Hyperbolic functions
- Common functions such as factorial, absolute value, log, etc...
- User defined functions and variables
- DOS redirection
- Adjustable FIX notation


3. Installation
   ============

Copy the files UCALC.EXE and UCALC.DEF to a directory defined in the
PATH statement of your AUTOEXEC.BAT file (like your DOS or UTILS
directory).  If you do most of your calculations at the command line,
then you can put those files in a RAM drive for faster execution.
UCALC can also be run from the current directory.


4. Getting Started
   ===============

There are two ways of running the Ultimate Calculator.  The first way
is to enter your expression at the DOS command line as follows:

UCALC 5+4*8/2 [enter]

Ucalc also provides a line editor for performing more than one operation
per session.  This environment allows you to assign values to variables,
and define functions as you go along.  To run ucalc in that mode,
simply invoke UCALC at the DOS command line without any expression
as follows:

UCALC [enter]

When you are in this mode, you can press [F1] any time for help, and
[Esc] to quit the program.  See EXAMPLES.DOC to get more ideas on
how to use Ucalc.


5. Command Line
   ============

At the command line, you can type UCALC followed by one of these
options:

/?        Help
/NODEF    Does not load UCALC.DEF

If an expression is present at the command line, it is evaluated,
and control returns to DOS.  Otherwise, you are left at the "ucalc>"
prompt, where you may enter several expressions and quit with [Esc].
If a symbol in your expression is in conflict with DOS, then enclose
the expression in quotes.

Examples:
---------

UCALC /NODEF

UCALC "5^4 | 5*8"

See EXAMPLES.DOC for a sample session.


6. Ucalc Prompt
   ============

At the ucalc prompt, you can enter an expression to be evaluated,
and use the following commands, and function keys:

[F1] Help
[F2] List variables
[F3] List UCALC.DEF
[Esc] Quit

LIST [DEF]               List of variables.  DEF will list UCALC.DEF.
HELP                     Gives online help.  Same as [F1] or ?.
CLS                      Clears the screen.
MODE {DEG|RAD|GRA}       Changes mode to degrees, radians, or gradients
MODE HBO                 Toggles the hex, binary, octal answer display.
QUIT                     Exits to DOS.  Same as [Esc].
INTEG(fx,a..b [,n])      Numerical integration.
FIX nn                   Changes the number of digits that are displayed.
SUM(fx,a..b [,dx])       Summation of function fx ranging from a to b.
SUMTABLE(fx,a..b [,dx])  Same as SUM, but displays intermediate results.
SOLVE(fx [=fx] [,a..b])  Solves equations.

The variable 'x' contains the value of the previous computation.
'x' is also the parameter that should be used with SUM, SUMTABLE, SOLVE,
and function assignments.

At the prompt, you may use the up (or down) arrow key to recall previous
expressions.  You may also key in several characters before pressing the
up arrow in order to recall an expression starting with those characters.


7. Table of Symbols
   ================

Symbol   Equivalent   Description                       Example
------   ----------   -----------                       -------
( )                   Prioritizes an expression         5*(1+1) = 10

^        **           Raised to the power of            4  ^  5 = 1024
*                     Multiply by                       3  *  6 = 18
/                     Divide by                         9  /  2 = 4.5
%        MOD          Modulo                            7  %  4 = 3
+                     Add                               1  +  1 = 2
-                     Subtract                          9  -  5 = 4

>                     Greater than                      9  >  2 = 1
<                     Less than                         7  <  4 = 0
=        ==	      Equal test                        5  =  4 = 0
>=       =>	      Greater or equal                  3  >= 3 = 1
<=       =<	      Less or equal                   $3E  <= 9 = 0
<>       !=	      Not Equal                   #b10101 <> 20 = 1

NOT                   Bitwise 'not'                     not(15) = -16
AND       &	      Bitwise 'and'              #b101 and #h1E = 4
OR        |	      Bitwise 'or'                     13 or 6  = 15
XOR		      Bitwise 'exclusive or'           9 xor 3  = 10
EQV		      Bitwise 'equivalence'            6 eqv 9  = -16
IMP		      Bitwise 'implication'            1 imp 5  = -1

SIN                   Sine                              sin(pi) = 0
COS                   Cosine                            cos(pi) = -1
TAN                   Tangent                           tan(pi) = 0
ASIN                  Arcsine                           asin(1) = 1.57079632
ACOS                  Arccosine                        acos(-1) = 3.14159265
ATAN      ATN         Arctangent                        atan(0) = 0

SINH                  Hyperbolic sine                  sinh(16) = 4443055.26
COSH                  Hyperbolic cosine                cosh(11) = 29937.0708
TANH                  Hyperbolic tangent                tanh(1) = 0.76159415
COTH                  Hyperbolic cotangent              coth(1) = 1.31303528
SECH                  Hyperbolic secant                sech(14) = 1.66305E-6
CSCH                  Hyperbolic cosecant              csch(34) = 3.4278E-15
ASINH                 Hyperbolic arcsine               asinh(2) = 1.44363547
ACOSH                 Hyperbolic arccosine             acosh(9) = 2.88727095
ATANH                 Hyperbolic arctangent           atanh(.5) = 1.09861228
ACOTH                 Hyperbolic arccotangent          acoth(7) = 0.14384103
ASECH                 Hyperbolic arcsecant            asech(.3) = 1.87382024
ACSCH                 Hyperbolic arccosecant           acsch(2) = 0.48121182

ABS                   Absolute value                    abs(-8) = 8
EXP                   e to the power of                  exp(3) = 20.0855369
RND                   Random number                      rnd(1) = .968620060
INT                   Truncate to an integer           int(6.8) = 6
EXP2                  2 to the xth power               exp2(17) = 131072
EXP10                 10 to the xth power              exp10(3) = 1000
FACT                  Factorial                        fact(11) = 39916800
LOG2                  Log base 2                       log2(19) = 4.24792751
LOG10                 Log base 10                      log10(7) = .845098040
LOG        LN         Natural log                       log(16) = 2.77258872
SGN        SIGN       Sign of expression                sgn(-9) = -1
SQR        SQRT       Square root                       sqr(64) = 8


8. Summation
   =========

Syntax:  SUM(fx,a..b [,dx])

     b
    ____
    \    f(x)    is written as SUM(f(x),a..b), where f(x) is your
    /___         function, and a..b is the range.
    j= a         The summation cannot be part of another expression.

The optional  dx  parameter can be used to indicate an increment other
than the default 1.

Examples:
---------

ucalc>   sum(x^2+2*x+14,5..1000)
Answer:  334848394

ucalc>   sum(x^3-2,1..15,.1)
Answer:  127971.6

SUMTABLE is the same as SUM, except that intermediate values are
printed as the sum is being added.

ucalc>   sumtable(x^2/fact(x),1..3)
	 Count         Value         Cumulative
	 1             1             1
	 2             2             3
	 3             1.5           4.5

Answer:	 4.5

A long list can be aborted with the [Esc] key.


9. Numerical Integration
   =====================

Syntax:  INTEG(fx,a..b [,n])

This approximates the value for the definite integral of fx, using
Simpson's rule.  This rule requires that  n  be an even number.
Ucalc takes care of that by automatically transforming  n  to the
next highest even number (n = n + n mod 2).  If no value for n
is given, then 100 is used as the default number of subdivisions.
This command works properly only when fx is a continuous function.

Examples:
---------

ucalc>   integ(x*sin(x),0..pi)
Answer:  3.14159267059288459

ucalc>   integ(1-x^2,0..1,8)
Answer:  .666666666666666667


10. Solving Equations
    =================

Syntax:  SOLVE(expression [=expression] [,a..b])

This solves an equation for the value of 'x'.  The statements
in brackets are optional.  If the expression on the right of
the = sign is 0, then you can simply do:  SOLVE(expression).
For instance, SOLVE(3*x+2=0) can be written as SOLVE(3*x+2).
If the equations happens to have several solutions, you can
indicate the range (a..b) of the particular solution you are
interested in.

The algorithm used in this program for solving equations is the
Bisection Method, which is a special case of the Intermediate
Value Theorem.  A solution can be found for continuous functions
in the range a < x < b, where f(a) < 0 < f(b).  If a..b is not
defined, then the default range is from -1E6 to 1E6.  If a real
solution does exist, but cannot be found with the default range,
then try narrowing the range as much as possible.

Examples:
---------

ucalc>   solve( exp(x+x^2)-sqr(x+5) = 127 )
Answer:  1.76151609179570087

ucalc>   solve( cos(x), pi/2..pi )
Answer:  1.57079632679489662

ucalc>   solve( x^3+2*x+5 = 17 )
Answer:  2

ucalc>   solve( 2*x^2-3 )
Answer:  1.22474487139158905


11. Numerical Notations
    ===================

The default numerical type is DECIMAL.  Binary, octal, and
hexadecimal number types are also supported.  The latter types
must be preceded by the  #  (number sign) symbol, and one of
the letters "h", "b", or "o", for hexadecimal, binary, or octal
in that respective order.  The $ sign for hexadecimal notation
can be used as a shortcut.  See examples.

In order to see all your answers in hex, binary, and octal, issue
the command:  mode HBO

Exponential notation is also supported.  These are numbers followed
by the letter E, and an exponent number.  For instance:  3.4E+5
translates to 3.4*10^5, and 3.4E-5 translates to 3.4*10^(-5).

Examples:
---------

#b110101110,   #o656,   #h1AE,   $1AE,   430,   4.3E2
are all the same number.

#b10101^2 * 5/$1EF + sin(5.8+2)*cos(#o302)-7E6  is a valid expression.


12. Assigning Functions & Variables
    ===============================

Functions and variables are assigned the same way as in UCALC.DEF.
The parameter 'x' must be used in defining the function.
For instance:

mynumber = 12345
test(x) = x^2+2/x

See also the section entitled "UCALC.DEF".


13. UCALC.DEF
    =========

Commonly used constants such as  e, pi, and any others that you
use regularly, can be defined in UCALC.DEF.  You can use a text
editor to open the file, and add lines containing the constant
name, followed by an equal sign and the equivalent expression.
Anything following a semicolon (;) is a remark, and is therefore
not interpreted as part of the expression.

Regularly used functions can also be defined, using the following
syntax:  fname(x) = expression.  The parameter 'x' must be used.

Every time Ucalc is run, it looks for UCALC.DEF in the current
directory and the search path.  If the file is found, its functions
and constants are loaded.  The /NODEF option at the command line
is equivalent to not having a UCALC.DEF file.

Here is an example of what UCALC.DEF may look like:

pi      = 3.141592653589793
e       = 2.718281828459045  ;  Natural log constant
gravity = 9.80               ;  Acceleration due to gravity
na      = 6.0221367E+23      ;  Avogadro's number 1/(g mol)

sec(x)  = 1 / cos(x)
csc(x)  = 1 / sin(x)
cot(x)  = cos(x) / sin(x)

There is a limit of 200 variables, and a limit of 128
instructions (like +, *, ^, etc...) for user defined functions.


14. Order of Precedence
    ===================

Here is the precedence list from highest to lowest priority:

Anything inside parenthesis is performed first  ( )
Exponentiation					^
Multiplication, division                        *, /
Modulo                                          MOD
Addition, subtraction                           +, -
Relational operators                            <, >, >=, <=, =, <>
AND
OR, XOR (exclusive or)
EQV (equivalence)
IMP (implication)


15. Technical Notes
    ===============

o  DOS IO:  A file with calculations to be performed may be
   created ahead of time with your favorite text editor, and
   passed at the command line in the following format:
	UCALC < MYFILE.DAT > RESULT.DAT

   An expression at the command line can also be redirected:
	UCALC sumtable(2*x+5,1..1000) > RESULT.DAT

o  End-of-file:  When doing redirection from the DOS command
   line, make sure that the input file ends with an end-of-file
   marker (^Z, or ASCII character 26).  Many text editors take
   care of this automatically, but a few don't.  An input file
   with no EOF mark will cause ucalc to freeze.

o  Quick Exit:  If you want to exit the program without having
   to answer the "Quit to DOS? (Y/N)" prompt, you can simply
   press ^Z  (hold down [Ctrl] and press Z).  This will immediately
   drop you to DOS.

o  Ugly Numbers:  Occasionally, numbers are not displayed
   as one might expect.  For instance you might get
   8.23423423982432343E-18 instead of 0, or .499999999999999999
   instead of .5, which is actually pretty close to the answer.
   This may happen as a result of lengthy operations, or certain
   types of functions.

o  Command Line Conflicts:  Certain symbols used by Ucalc may also
   be interpreted by DOS or other command shells.  If there is a
   conflict, then enclose the command line expression in quotes,
   such as the following:
	UCALC "(5^4 | 18) < 10"

o  HBO mode:  When this mode is on, it will display the hex, binary,
   and octal notations, only for values between -32766 and 65535.
   Numbers beyond that range are displayed only in decimal form.
   Negative numbers are represented in "two's complement" form.

o  Relational operators return a 1 for true expressions, and 0 for
   false ones.  For instance,  5 > 3 = 1, and 5 < 3 = 0.

o  Compound Functions:  Functions with multiple entries may be defined
   by using relational operators.  For instance:

		  / 2+x^2,   x > 0
	  f(x) = |  3,       x = 0
		  \ x*2+8,   x < 0

   can be written as:

	  f(x) = (2+x^2)*(x > 0)  +  (3)*(x = 0)  +  (x*2+8)*(x < 0)

o  Equal Sign:  The single equal sign, =, can be used both for
   assigning functions & variables, and as a relational operator.
   If there is a conflict in the logic of an expression such that
   it can be taken either way, then use the double equal sign, ==,
   when a relational operator is intended.  An assignment is assumed
   only when the expression left of the left-most equal sign is a
   valid function or variable name.

o  Limited Function Space:  There is a limit of 128 instructions
   (like +, -, *, etc...) which can be used for defining functions.
   Every time a function is defined or redefined, part of the instruction
   list is filled, and cannot be reclaimed during a Ucalc session.  An error
   message is given when the number of instructions allowed is exhausted.

o  Variable names:  Variable and function names may be up to 1024
   characters long, which should be more than enough for most purposes.
   These names may consist of any ASCII character other than those used
   as operators.  The first character cannot be a numerical digit.
   A variable may share the same name with an unrelated function, for
   instance, you can have pi = 3.14159 and pi(x)=x^2+1.

o  Ucalc is not case sensitive.  Upper case letters are treated just the
   same as lower case letters.  For instance, pi, PI, and Pi are all
   treated the same.

o  Text Buffer:  The last 100 lines can be recalled using the up
   (or down) arrow keys.

o  Ucalc has been tested under DOS 4.01 & 5.0, 4DOS 4.0 & 4.01,
   Desqview 2.42, DV/X 1.10, QEMM 6.02, 6.2 & 6.3, VPIX, DPMI,
   Windows 3.1 and Stacker 2.0


16. Registration
    ============

If you find yourself using this program regularly, then you
can register Ucalc for only $15.  If you register, you
receive a set of conversion functions, load/write capability,
full support, and are entitled to a free upgrade.  More importantly,
this will encourage me to add new features, and release other fine
programs through shareware.  Hurry, because the low pricetag
and free update might expire when the next release is out.

In order to help me better support this program, please fill
out the questions in QUEST.DOC.  This will allow me to keep the
price down, and add the right features in the next version.
Use the form in REGISTER.DOC to place your registration.

Easy Service
------------
For your convenience, you can order Ucalc from the Public Software
Library with your Visa, Master Card, American Express, or Discover
card by calling toll-free at 1-800-242-4PSL (overseas: 713-524-6394)
or by FAX to 713-524-6398, and even by Compuserve at 71355,470.  THESE
NUMBERS ARE FOR ORDERING ONLY.  I can NOT be reached at those numbers.

24 hour shipping
----------------
PSL will immediately ship the registered version within 24 hours
of receiving your registration fee.  Add $4 for shipping.

Free upgrade
------------
Registered users will get 1 free upgrade.  The upgraded version will
not be mailed out, but can be obtained from sources (BBSs, etc...) which
carry Ucalc.  The upgraded version will contain instructions on how to
make it become registered without paying.  (The instructions won't work
for those who never registered).

Support
-------
I will try to extend my support to unregistered users during their
evaluation period, however, I reserve the right to limit my support
for unregistered users if their requests become taxing for me.
I prefer to communicate by e-mail.  If you wish to correspond by
postal mail, please send a self addressed stamped enveloped in order
for me to reply.

License
-------
For this license agreement, a site is considered to be any
corporation, institution, government agency, computer lab,
or non-personal organization, with more than one computer
capable of running the Ucalc software.  This definition
of a site is subject to change.

A site may use the unregistered version for evaluation purposes
only.  After 30 days of evaluation, the site must either purchase
a site license for Ucalc, or discontinue its use.  The site
license arrangement provides for volume discounts.  See the file
named REGISTER.DOC for the low rates that are available.

A site license is for the use of the software within your site, and
is not transferable.  This license allows the internal use and copying
of the software by as many computers as contracted for.  Distribution,
repackaging, or reselling of the licensed version to third parties is
not allowed under this agreement.  The unregistered version however
may be freely distributed.

The LICENSOR (Daniel Corbier) warrants that it is the sole owner of the
Ucalc software and has full power and authority to grant this license
herein without consent of any other party.

Disclaimer
----------
The Ultimate Calculator (Ucalc) is provided on an "as is" basis
without warranty of any kind, expressed or implied.  The person using
the software bears all risk as to the quality and performance of the
software.  The author will not be held liable for any special, incidental,
consequential, direct or indirect damages due to incorrect calculations
or other malfunctions.

Aside from the legal stuff, I'm eager to support this program as much
as possible.  I want to hear your suggestions for the next release.


17. My Address
    ==========

For information about dealer pricing, volume discounts, site
licensing, latest version, suggestions, or for technical information,
you can contact me through one of the following means:

US Mail:
	Daniel Corbier
	571 NE 110th Terrace
	Miami, FL  33161

Internet:
	corbier@andrews.edu    (This one is preferred)
	corbier@starl.miami.fl.us
	corbier@weird.miami.fl.us

Fidonet:
	Daniel Corbier at 1:135/110 or Daniel Corbier at 1:135/23

Compuserve:
	INTERNET:  corbier@andrews.edu

In the Miami area, I frequent the following BBS's daily:

Telcom Central   305-828-7909
Starlight        305-948-0183
MACC             305-596-1854
Weird            305-553-3207
SOX              305-821-3317
Software Cuisine 305-642-0754

I read the following conferences on a daily basis:

Fido:  Shareware, ECPROG and more
Internet:  various comp.sys newsgroups

18. Distribution
    ============

You are encouraged to distribute the Ultimate Calculator.  The following
files must all be present and unmodified when distributed:

UCALC.DEF     Definition file
UCALC.EXE     Executable
UCALC.DOC     Documentation
QUEST.DOC     Questionnaire
EXAMPLES.DOC  Examples for Ucalc
REGISTER.DOC  Registration form

The compressed file name must be UCALC12.??? (replace ??? with ARJ,
ZIP, LZH or whatever compression suffix being used).

If you distribute shareware for profit, you must obtain my permission
in order to carry this program in your catalog.  I am currently looking
for distributors in Europe, Australia, and other areas overseas.  I
would also like to be notified when reviews are made for Ucalc.


19. Acknowledgments
    ===============

I have been fortunate to have an excellent group of alpha &
beta testers for the Ultimate Calculator.  Most of the features
in this program are a direct result of their many suggestions.
I would like to thank the following people:

Jonathan Borwein   University of Waterloo
David G. Caraballo Princeton University
Elan Feingold      Cornell University
Daryl Gungadoo     Andrews University
James Hague
Rich Holland       Kansas State University
Willie Hutton      University of Colorado
Michael D. Lawler  Ball State University
Chris Long         Rutgers University
Mark E. Mallett
Peter Paul Meiler  TNO Physics & Electronics Lab, the Netherlands
Marty Milette      Mitel Corporation
Matt Pardo         North Carolina Medical Center
Alexander Pruss    University of British Columbia
Glauber Ribeiro    O.C. International, Brazil
Dave Sklar         Temple University
John Steele        Video Business Systems
David Steinman     University of Toronto
Shi-Chang Wooh     Northwestern University, Illinois
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3787

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        37   6-14-93   2:04p
    SHOW     EXE      2040   9-12-88  10:48a
    UCALC    EXE     64506  10-25-92   8:15p
    UCALC    DEF       330  10-25-92   8:15p
    UCALC    DOC     24625  10-25-92   8:15p
    QUEST    DOC       872  10-25-92   8:15p
    EXAMPLES DOC      6433  10-25-92   8:15p
    REGISTER DOC      3525  10-25-92   8:15p
            8 file(s)     102368 bytes
                           56320 bytes free
