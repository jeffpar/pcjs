---
layout: page
title: "PC-SIG Diskette Library (Disk #410)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0410/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0410"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## DIREC.DOC

{% raw %}
```
USERMAN.DOC - Documentation for SNOBASIC (Obtain revised copy in a binder
	from Snowcrest, 527 McCloud Ave., Mt. Shasta, CA  96067 for
	$39.95.)

The following files are in the directory DK1:

ADVCLR	Program to clear adventure table of top ten scores
ADVNT	Adventure main program. Run this program to play the game.
ADINFO	Part of data base.
STEXT	Part of data base.
TRAVL	Part of data base.
LTEXT	Part of data base.
VOCAB	Part of data base.
OBJECT	Part of data base.
RTEXT	Part of data base.
OBJLOC	Part of data base.
LIQAS	Part of data base.
CLSTX	Part of data base.
HINTS	Part of data base.
MTEXT	Part of data base. Not used.
ADVTX	Part of data base.
ACTDF	Part of data base.
NUMBER	Thinking of a number program.
OTHELO	Plays the game of Othello.
TICTOE	Plays the game of Tic-Tac-Toe.
NIM	Plays the game of Nim.
MESAGE	Program to send messages to other users. Must be unrestricted to use.
BASE	Program to convert numbers from octal, hexadecimal.
EDITOR	Skeleton of a text editor.
CLSDST	Class distribution report for a teacher.
DATE	Program to convert dates to days of week.

```
{% endraw %}

## FILES410.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 410   SNOCREST BASIC #2                                 v1 DS2
-------------------------------------------------------------------------
DIREC    DOC  Disk directory
DK1 <DIR>     Contains a number of files, for use with SNOBASIC, which include:
              a number thinking program, a version of Othello, Tic-Tac-Toe,
              an adventure game, a program that allows multiple users of
              SNOBASIC to leave messages for each other, a hexidecimal/
              decimal convertion program, plus more.
USERMAN  DOC  Users manual for SNOBASIC
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## USERMAN.DOC

{% raw %}
```
.po 3
.ll 72
.op
.in +3
.sp 15
.ce 2
Snowcrest Specialties Multi User Basic
for the IBM Personal Computer and compatibles.
.sp 5
.ce
User's Manual
.sp 10
.ce 2
Copyright 1984
Snowcrest Computer Specialties
.he           Snowcrest Specialties Multi User BASIC:  User's Guide
.bp
.sp 5
.sp 3
.ce
TABLE OF CONTENTS
.sp
.li
        1.    System Requirements ..............................
                  What kind of hardware is needed?

        2.    Getting Started: .................................
                  How to get SNOBASIC running.

        3.    Customizing SNOBASIC for your instalation ........
                  Making SNOBASIC work for you.

        4.    Connecting Other Terminals to Your System ........
                  How to wire the plugs.

        5.    System Maintenance: ..............................
                  How to keep SNOBASIC running.

        6.    Differences Between SNOBASIC and Other BASICs: ...
                  What is different?

        7.    SNOBASIC language manual: ........................
                  A technical definition.
.bp
.pn 1
.sp 3
.ce
System Requirements
.sp 2
Snowcrest Specialties Multi-User BASIC requires the following
hardware for proper operation:
.sp
.ce
Minimum System Requirements
.li

        IBM PC or compatible system running DOS 2.0 and above.
        Two floppy disk drives.
        Minimum of 128K of memory for single user operation
.sp 2
.ce
Recommended Additions
.li

        One or Two double sided floppy disk drives, or a Hard disk.
        An additional 16 to 48K additional memory per user.
        A parallel line printer connected to lpt1:.
        An asyncronous communications adapter for each additional user.
        One terminal for each additional user.
.ig
Note: for serious multi user operation, a hard disk is
highly recommended as it is several times faster than floppy
disks.
.he           Snowcrest Specialties Multi User BASIC:  Getting Started
.bp
.sp 3
.ce
Getting Started
.sp 2
SNOBASIC comes distributed on two single sided double density disks
conforming to the IBM DOS 2.0 standard.  Disk one contains three files
and one directory.  The file README.DOC contains the latest additions
to this manual.  You should review README.DOC before you try to run
SNOBASIC.  Disk two contains a version of SNOBASIC configured for use
with the 8087 math co-processor, and miscellaneous support programs.
.sp
.ti -3
1. Make a copy of both distribution disks using the DOS DISKCOPY
program. Place your original copies of SNOBASIC in a safe place.  These
will be your backup copies in case something happens to your working copies.
.sp
.ti -3
2. Make your copy of disk one into a bootable disk by using the DOS SYS
command.  This will allow you to boot directly on this disk.
.sp
.ti -3
3. Read the file README.DOC on disk one.  This file contains the latest
additions to this manual and is intended to keep you up to date on any
changes to the language.
.sp
.ti -3
4. If your system has the 8087 math co-processor installed, then copy
the file SNOBAS87.EXE from disk two to SNOBASIC.EXE on disk one.  The
8087 version of SNOBASIC utilizes the math and trigonometric capabilities
of the 8087 math co-processor and provides a significant speed increase
for number crunching programs.
.sp
.ti -3
5. Type the command:  'startup'.  This will run the bat file named
'startup.bat' that loads up the initial system definition environment
and runs SNOBASIC.  SNOBASIC will load into memory and and display
a banner on the screen.  At this time SNOBASIC is loaded and you
will be able to change disks to allow operation on a disk without
having a large portion taken up by SNOBASIC.EXE.  Press any
key to cause SNOBASIC to continue.
NOTE:  you will not see any indication of operation until you press
the 'ESC' key to begin logging in.
.sp
.ti -3
6. Press the 'ESC' key.  SNOBASIC will respond with a login message
and prompt you for three items.  In the following, the single
quotes are placed around user responses and should not
be entered when typing.
.sp
The Terminal question is not currently
used, but is included to allow future enhancements to SNOBASIC
to communicate with various
types of terminals.  When on the console, the correct response
is 'console'.
.sp
The Account question is asking for the user account
number.  The correct response is '9999'.  Note, the account will not
print on the screen as you type.
.sp
The Password question is asking for
the user password for the given account.  The correct response is 'start'.
Again note, the password will not echo to the screen.
Following is a sample signon.
.li

            Snowcrest Computer Specialties
            Multi-User Basic
            Terminal? 'console'
             Account? '____'
            Password? '_____'
            Hello, Friend

            Welcome to Snowcrest Basic!

.ig
if either the account or the password were entered wrong, then SNOBASIC
will sound the bell twice and print the message "Illegal Entries!".  If
this happens, press the 'ESC' key and try again.  If you entered
the account and password correctly, then SNOBASIC will greet you
with a message and print "Ready".  At this time you are ready to
proceed to the section on "adding user accounts"./
.sp
.ti -3
7. Once you have added your own accounts and passwords, you should
sign off with the "Bye" command and sign in under your own account
and change or delete the distribution sign on account to ensure
the integrity of your system security.
.he           Snowcrest Specialties Multi User BASIC:  Customizing
.bp
.sp 3
.ce
Customizing SNOBASIC for your system
.sp 3
SNOBASIC provides a mechanism to allow the system operator to tailor
SNOBASIC to fit his particular needs.  The file startup.bat on the
distribution disk one contains several DOS "SET" commands.  These
are the user configurable parameters to SNOBASIC.  The available
set commands are:
.li

      NU -- Number of users.  Initialy 3
      NB -- Number of system file buffers.  Initialy 10
      SU -- Size of user memory area.  Initialy 24k bytes
      U1 -- User port 1 definition. Initialy set for COM1:
      U2 -- User port 2 definition. Initialy set for COM2:
      U3 to Unn available for other port definitions.
      D0 -- Disk number 1 path.  Initialy set to \dk0.
      D1 to Dnnn available for other disk path definitions.
.sp
The environment variable NU defines the number of users SNOBASIC will
recognize on the system at one time.  There must be one port definition
for each user.  Each user beyond user 1 requires SU bytes + 3000 bytes
of memory in addition to the 128K.
.ti +5
The form of the NU environment variable is NU=NN where NN is a decimal
number from 1 to 11.  The NU variable allocates memory for each
user according the the size of user memory specified by the SU variable.
If there is not enough memory on the system, then an error will
occur and SNOBASIC will return to DOS command mode.
.sp
The NB environment variable defines the
number of system-wide file buffers.  Each buffer requires 512 bytes of memory.
In general the more buffers, the better.  There is a point at which it takes
more time to search the buffers for the desired record than it takes to 
read it from the disk.  The actual number of buffers should be determined
by what type of application is used.
In an application where the processing is mostly sequential, a low number
of buffers is best.  If the application does mostly random file access then
a large number (10 to 30) of buffers is best.
.ti +5
The form of the NB variable is NB=NN where NN is a decimal number from 1
to 40.  All file buffers reside in the same memory segment as the
user memory image and SNOBASIC work variables, so SU + NB * 512
cannot exceed 50K bytes, or an out of memory error will occur.
.sp
The SU environment
variable defines the size of memory allocated to each user.  If there
are many users, then this number may need to be set low to allow all users
a block of memory.  If there is a lot of memory available and only a few
users running large programs, then this variable may be set as large as
40 bytes.
.ti +5
The form of the SU variable is SU=NN where NN a decimal
number from 1 to 40K bytes.  SU is the number of
bytes to be allocated to each user.  This is the number of bytes available
to load programs and hold variables.
.sp
The U1 thru Unn environment variables define the I/O port address, and
baud rate for user ports 1 thru nn.  User port 0 is pre-defined as the
system console.
.ti +5
The form of the Unn variables is:
.li

      UN = Device address, Interrupt level, Baud rate

.ig
Where 'Device address' is the i/o address of the communications
adapter for that port.  The address must be in decimal.  'Interrupt level'
defines what interrupt line the communications adapter uses to signal
incoming data.  'Baud rate' is a decimal number 110, 300, 600 ... 9600
specifying the communications baud rate, or 0 for automatic baud rate
selection.  If automatic baud rate selction is used, then each time 
break is sent then the system will change baud rates to another
speed and "press" escape.  This is usually used for
dial up modems using either 300 or 1200 baud communications.
.ti +5
Note: Adding more than 2 communications adapters requires that the
adapter be modifed to interrupt on one of the unused interrupt lines.
For COM1:, the interrupt level is 4.  For COM2:, the 
interrupt level is 3.  Additional communications adapters must use
interrupt level 2. If a hard disk is not installed, then level 5
may be used.
.sp
The D0 thru Dnnn environment variables provide the mechanism for 
referencing a DOS 2.0 directory path.  SNOBASIC does not limit
the number of directories acessed through the disk directory
environment variables.  The D0 directory must be defined, or
SNOBASIC will not be able to run.  The D0 directory must contain
the system support files.  (see appendix C).
.ti +5
The form of the Dnnn variables  is Dnnn='directory path'  Where
'directory path' is a full MS-DOS directory path name including
a leading backslash.
.sp
The login banner and message are stored in the file
fbasicme.sgs on the D0 directory.  This file contains the banner that
is printed on the terminal when esc is pressed to begin the login
procedure, and the message that is printed on the terminal
when a user logs in sucessfully.  Both of these messages may be
modified to suit the particular installation.  Any text editor
such as "EDLIN" may be used.
.ti +5
See appendix C for more information on the basicmesgs file.
.he     Snowcrest Specialties Multi User BASIC:  Connecting Terminals
.bp
.sp 3
.ce
Connecting Other Terminals to the system
.sp 3
The IBM asyncronous communications adapter is configured as DTE.  A DTE
configured rs-232 connection is intended to connect to a modem, or other
data communications device, this
means that an ordinary terminal cannot connect directly to the system
with a 'straight through' cable.  Following is a diagram how to connect
a terminal to your system.
.li

                   Terminal Connection

            db 25                        db 25  
           female                         male
       System Connector             Terminal Connector
            +--+                          +--+
            | 2|--------------------------|3 | 
            | 3|--------------------------|2 |
            |  |                          |  |
            | 7|--------------------------|7 |
            |  |                          |  |
            +--+                          +--+

.ig
Note that pins two and three are switched within the cable.  This effectivly
changes the DTE configuration of the system into a DCE configuration.
If you are connecting a modem to your system, then the following
connection should be used.
.li

                     Modem Connection

            db 25                        db 25  
           female                         male
       System Connector               Modem Connector
            +--+                          +--+
            | 2|--------------------------|2 |
            | 3|--------------------------|3 |
            | 4|--------------------------|4 |
            | 5|--------------------------|5 |
            | 6|--------------------------|6 |
            | 7|--------------------------|7 |
            | 8|--------------------------|8 |
            |20|--------------------------|20|
            +--+                          +--+

.ig
It is possible to add up to two additional user ports by using the
COM1 and COM2 communications adapters.  If more user ports are
required, then another communications adapter may be modified
to use interrupt level 2 and configured to use an unoccupied
block of i/o addresses.  (each adapter occupies a block of 8
i/o addresses). The startup.bat file must be modified
to reflect addresses and interrupt levels of the additional ports.
.sp
As an alternative to modifying a standard communicatiions
adapter, Snowcrest Computer Specialties supplies 4 or 8 line
communications adapters that come pre-configured to allow up to
11 users on the system (8 + COM1, COM2 and console).
.he       Snowcrest Specialties Multi User BASIC:  System Maintenance
.bp
.sp 3
.ce
SNOBASIC system maintenance
.sp 3
Once the system is up and running and you are satisfied with 
he user configuration, then other user accounts may be added
to the system.  User accounts are added and maintained
with the program "accoun" stored under the system manager's
account.  Each person who has access to the system should
be given his own account number to help ensure system
security and enable a valid "audit" of system activities via the
log program.
.sp
Each time that SNOBASIC is brought up, when users log in 
and out, and when the system is brought down with the "Kill"
command, an entry is made in the system log file.  This makes
it possible to determine how many times a particular user
logged onto the system, and how much system time was used over a period
of time.  The program "log" stored under the system managers account
provides a way of listing this file.
.sp
The system log file is holds a finite number of entries determined by
how large the file is created to be.  When the end of file is reached,
then the log "wraps" around to the beginning and begins to overwrite
the oldest entries.  If the system has a lot of activity, then the 
log file needs to be made large enough to hold all transactions during
the time between when the log file is inspected.  See appendix C
for more information on the system log file.
.he           Snowcrest Specialties Multi User BASIC:  Differences
.bp
.sp 3
.ce
Differences between SNOBASIC and other BASICs.
.sp 3
.in +5
.ti -5
String Handling
.br
Snowcrest Multi User Basic has enhanced string manipulation that
eliminates the need for the LEFT$, RIGHT$ and MID$ statements
found in other BASICs.  A string variable must be dimensioned before
it can be used.  The dimension should be as large as the largest
expected length of the string.  Strings may be as large
as memory allows. The length of the string can be from 0 up to
the size of the dimension.  Strings are referenced as
a unit by using the variable name.  The right portion of the string
may be referenced by including the beginning index of the substring
as if it were a subscript of a singly dimensioned array.
A substring is reference looks similar to a two dimensioned array except
that the second subscript is really the ending index of the
substring.  Doubly dimensioned strings are not allowed.
.sp
.ce
example
.li

              10 Dim a$(10)
              20 Let a$="1234567890"
              30 Print a$
              40 Print a$(5)
              50 Print a$(2,5)
              60 Print a$(3,8)
  
          will print
  
              1234567890
              567890
              2345
              345678
.sp
String concatination is accomplished by using an assignment
statement with the two or more strings separated by a comma (,) rather
than a plus sign as in other BASICs.  The plus sign (+) in
a string assignment statement does string arithmetic and adds
the two strings.
.sp
To fill a string with a particular character (i.e. blank filling a string)
the string may be concatinated with itself as follows.
.li

            10 dim a$(10)
            20 let a$="X",a$

.ig
will fill the string a$ with the character 'X'.
.sp
.ti -5
Multiple Statements
.br
SNOBASIC does not allow multiple statements per line.  In essence, the
colon (:) operator is not recognized as a statement delimiter.
.sp
.ti -5
Remark Statements
.br
SNOBASIC does not allow a single quote (') at the end of a line
to begin a remark.  All remarks in the program should be made
with the "Rem" statement.
.sp
.ti -5
Variable Names
.br
Variable names under SNOBASIC may consist of a single character
in the range A to Z.
followed by an optional digit in the range 0 to 9.
If the variable is a string,
then it must be followed by a dollar sign ($). Example:
.li
            Following are valid variable names.
                X
                Y1
                N1$
            Following are not valid.
                1A      -- begins with a digit
                ABC     -- too many letters
.sp
.ti -5
Files
.br
SNOBASIC was designed from the start to allow
multiple users to utilize a single processor to access a common
collection of programs and a common data base.  As a result,
the file system has several items that are different than most BASICs
available on the market.
.sp
Each file must be created and be given a maximum size before
it can be used.  Otherwise if two users referenced the same file
and one expanded the file and closed it and the other just modified
an existing record and closed it.  It is possible that the file
allocation data of the second user would overwrite the previously
expanded file thus loosing the data of the first user.
.sp
Each file contains the account number of the person who created it.  If
the file is to be accessed by all users, then the account number is 0.
The account number portion of the file name is transparent to the users
unless they have restriction bit 5 set.
.sp
There are two types of files on the system: Basic programs, and data files.
Basic program files are created with the /b attribute (see the "Create"
statement).  Data files are created by omitting the /b attribute
in the "Create" statement.
.sp
Some BASICs have two statements that fill an i/o buffer prior
to random file i/o.
The LSET and RSET statements are not required under SNOBASIC as any
variable may be used in a random disk write statement.
.sp
.ti -5
Peek and Poke
.br
The "Peek" and "Poke" statements are not supported under SNOBASIC
as they can cause serious problems in a multi user system
if not used properly.
.sp
.cp 5
.ti -5
Program Continuation
.br
It is possible to continue a program stopped with the "esc" key even
if a variable has been modified.  This greatly speeds program debugging.
.sp
.ti -5
Graphics
.br
It is not possible to utilize the graphics capability of the IBM
color graphics adapter since the programs written for SNOBASIC may
not necessarily be run on the system console.
.sp
.ti -5
Matrix Operations
.br
SNOBASIC provides a complete set of function to allow matrix
manipulation.  This greatly eases the job of inverting a matrix
or finding the determinant, as they are given by a single statement.
.po 6
.ce
Definitions
.in 3
.ti 0
1. Constant - A numeric value.
May be preceded by a unary minus sign
and may contain a power of ten expressed in scientific
notation. Numbers contain six significant digits.
Numbers may be expressed with or without decimal
points. Scientific notation is accomplished by using
the letter "e" followed by an optional minus sign
and a number ranging from zero to 38. The numerical
range is approximately +-1.70141e38 and +-2e-39.
.br
Examples: 1,  -100,   2.56,   4.3576e-5,   3.9e12
.sp 2
.ti 0
2. Literal - An alpha-numeric
string of characters enclosed within
quotation marks. Literals may contain any
ASCII characters. Non-printing
ASCII characters may be
represented by enclosing the decimal value of
the character as a constant within angle brackets
(<>). (See appendix A for ASCII values.)
.br
Examples: "Hello",   "<13>message",   "123skidoo"
.sp 2
.ti 0
3. Variable - A named location into which
numeric or alpha-numeric data is to be stored.
Numeric variables may be named with a single
letter or a single letter followed by a single digit.
Alpha-numeric variables (which are termed string
variables) may be as above, followed by a dollar
sign ($). Numeric variables may be dimensioned in order
to allow a single variable name to refer to a group of
stored data, and string variables must be dimensioned
(refer to the discussion of the "Dim" statement).
.br
Examples: A,   N9,   K3,   D$,   N5$
.sp 2
.ti 0
4. Operators - Special characters which,
when used in an expression
(see below), specify a specific operation such as
multiplication or division to be performed on the
numeric or string values which are found on either
side of the operator. The various types of operators
are:
.li
	Arithmetics-	+	Addition
			-	Subtraction
			*	Multiplication
			/	Division
			^	Exponentiation
	Relationals-	<	Less than
			>	Greater than
			=	Equals
			<=	Less than or equals
			>=	Greater than or equals
			<>, #	Not equals
	Logicals-	and	Logical and
			or	Logical or
	Special-	min	Minimum function
			max	Maximum function
.br
The operators each have an assigned priority, and when
used in an expression, all operators of the highest
priority are evaluated first (from left to right), then
the next priority, until the lowest priority have been
evaluated. The operators in order of their priorities,
highest to lowest, are:
.li

		Functions	(highest priority)
		^
		* /
		+ -
		max min
		< > = <= >= <>
		and
		or		(lowest priority)

.br
Parentheses () may be used to alter the priority scheme.
In any expression, elements enclosed in parentheses will
be evaluated first (with the operators within the
parentheses evaluated in the order given above), then
the remaining portion of the expression will be evaluated.
See below under "expressions" for examples.
.sp 2
.ti 0
5. Functions - A system or user defined procedure
which operates on
a supplied value. Functions are three-letter reserved
words which are followed by the supplied value enclosed
in parentheses. The system defined functions are:
.li
	abs(X)	Absolute value of X
	asc(A$)	ASCII value of first character in A$.
	atn(X)	Arctangent of X
		(-pi/2<atn(X)<pi/2)
	cos(X)	Cosine of X (X in radians)
	det(X)	Determinant of last matrix inverted
	exp(X)	Exponential of X
	int(X)	Integer function of X
	len(A$)	Number of characters actually stored
		in the string A$.
	log(X)	Natural logarithm of X
	prt(X)	Account number of user at port X
	rnd(X)	Random number, range 0 to 1
	sgn(X)	Indicates algebraic sign of X
	sin(X)	Sine of X (X in radians)
	sqr(X)	Square root of X
	tan(X)	Tangent of X (X in radians)
	tim(X)	Time of day. X=3 for year, X=2 for
		Julian day, X=1 for hour, X=0 for
		minute, X=-1 for second.
	sys(X)	X=0 for seconds past midnight
		X=1 for month of year
		X=2 for day of month
		X=3 for year (0-99)
		X=4 for port number (0-15)
		X=5 for cpu seconds used
		X=6 for # sectors in last opened file
		X=7 for last error message type
		X=8 for default disk number
		X=9 for last error line number
		X=10 for user's account number
		X=11 for number of users currently
		     signed on the system.
		X=12 for current priority/slot interval
		X=13 for total bytes of memory.
		X=14 for remaining memory available
		X=15 for restriction word.
		X=16 for last error message number

.br
User defined functions have the names fna-fnz. See the
discussion under the "Def" statement for more information.
Functions may be used anywhere that a numeric
variable is allowed.
.sp 2
.ti 0
6. Expression - Any combination of constants,
literals, strings,
operators, and functions, which result in a numeric
value. A single constant or numeric variable is a
valid expression. Two strings (or literals or combination
of string and literal) joined by a relational
operator make a valid expression. A single
string variable or literal is not a valid expression
since the expression must evaluate to a numeric value.
.sp 2
.li
Examples:
	A           (single numeric variable)
	3           (single constant)
	A+5/3
	"hello"=a$  (evaluates to 0 or 1)
	log(N)+(45.3E5*K or F)
	C5<10       (evaluates to 0 or 1)
.sp 2
.ti 0
7. Statement - Any of the list of
reserved words given below preceded
by a statement number (except in the case of the statement
following the reserved word "then" in an "If"
statement, see the discussion of the "If" statement)
and followed by appropriate elements. Statements are
stored in numeric order when entered and executed
upon the detection of the command "Run".
.sp 2
.li
Statement reserved words:
(Words preceded by an asterisk (*) may be used as commands)

	*Bye		 Hold		    *Read file
	*Chain		 If		     Rel
	*Clear		 Input		    *Rem
	*Close		 Input file	    *Rename
	*Close file	*Let		    *Restore
	*Create		*Log		     Return
	 Data		*Lowup		    *Show
	 Def		*New		    *Sign
	 Decode		 Next		     Sleep
	*Delete		*Nulls		    *Slot
	*Dim		 On		    *Sort
	*Disk		*Open file	     Stop
	 Encode		*Print		     Tinput
	 End		*Print file	    *Trace
	 For		*Print file using   *Uplow
	*Full		*Print using	    *Write file
	 Gosub		*Prty		    *Zap
	 Goto		*Random
	*Half		*Read
.sp 2
.ti 0
8. Command - Any of the above
statement reserved words which are
preceded by an asterisk (*) if entered without
a preceding statement number, or any of the command
reserved words listed below, preceded and/or followed
by appropriate elements. A command is executed immediately
upon entering.
.li
Command reserved words:

	Append		Load
	Cont		Psave
	Direc		Public
	Error		Renumb
	Kill		Run
	Length		Save
	Lib		Size
	Lines		Time
	List

.ti 0
9. String Expression -A string expression
is a special case of the "Let" statement that
allows the contents of two string variables to be added or subtracted
numerically.  The syntax of a
string expression is as follows:
.sp
<string variable> = <string variable> + or - <string variable>
.sp
The two strings being added must be the same length, and can
contain only digits 0 thru 9 with a leading plus or minus sign.
The length of the destination string must be large enough to hold
the result of the operation. If the result is larger than the length
of the destination, then an overflow error occurs. There is no limit
on the length of the strings operated upon other than
the amount that will fit in memory.
.br
note: The actual length of the strings (as returned by the "len"
function) are
significant, not the dimensioned size.
.sp 2
.qi
.pa
.ce
Miscellaneous
.sp 2
Statement numbers run from 1 to 65535 inclusive.
.sp 2
On the following pages, elements enclosed in square brackets [] are
optional. When there is a possibility of more than one syntax, the
various options will be listed on separate lines. Angle brackets <> will
enclose the words defined on the definition pages.
.sp 2
Relational operators and logical operators evaluate to true or false.
True is defined as any non-zero value (the operators evaluate to 1), and
false is defined as zero. Min and max evaluate to the algebraically
smaller (in the case of min) or larger (in the case of max) of the
numeric expressions on either side of the operator.
.sp 2
String literals and variables may be operated upon only by the 
relational operators (<,>,=,<=,>=,<>) with the exception of
+ or - as used in a string expression (see 9 above).
.sp 2
Strings may be used within expressions in their entirety by specifying
the name of the string only, such as A$. If the name is subscripted,
the first subscript specifies the first character position to be used,
and the second subscript specifies the last character position to be
used. If only one subscript is given, the string specified will begin
at that character position and proceed to the end. For example,
A$(5,10) specifies the characters from and including character number
five through and including character number ten of the string named A$.
A$(3) specifies all the characters in the string A$ from the third
through the last. Note that the length of the string (as given by the
"len" function) is different from the dimension of the string (as
specified by the "Dim" statement). The length is the actual number of
characters stored in the string, and the dimension is the maximum
number that could be stored in the string. When filling a string (via
the "Let", "Input", or "Read" statements), the starting character
position specified for the destination string (if given) must be less
than or equal to the previous length of that string plus one. That
is, if A$ contains five characters (len(A$)=5), the first three
statements below would be correct, but the fourth would result in an
error message:
.sp 2
.li
        10 Let A$(3)="more message after character two"
        10 Let A$(6)="appended message"
        10 Let A$(len(A$+1))="automatically appended message"
        10 Let A$(10)="invalid, space between characters 5 and 10)"
.sp 2
File names as described on the following pages have the following
characteristics:
.in 3
.ti 0
1. File names in commands which are not statements (see definition
number 8) are given as a series of characters without quotation
marks.  String variables are not allowed in this case.
.ti 0
2. File names which are part of any statement are given as string
variables or string literals (enclosed in quotation marks).
.ti 0
3. For the statements "Create" and "Delete",
if the user has bit 5 on in his restriction word (see appendix
D), he must specify the account number as well as the file name.
If the user does not have bit 5 on, these statements act as
all other statements.
.ti 0
4. With the exception of the statements given in (3.) above, the
system first searches for the file under the user's account
number.  Then a search is made of
the public files.  Then, if the restrictions allow
(bit 5 is on in the user's restriction word - appendix D), a search
is made of the remaining files on the directory to find a match
to the specified file name. Thus, a person with bit 5 on in his
restriction word may open files belonging to other users by
specifying the other user's account number as the first four
characters of the file name.  He may also open files which are
not preceded by an account number (and thus do not show up in
ANY directory).
.qi
.pa
.ce
Entering and editing
.ce
programs
.sp 3
.in 3
.ti 0
1. Programs are entered simply by typing the various statements preceded
by their line numbers. Statements will be internally arranged in
ascending numerical order, no matter in what order they are entered.
.ti 0
2. If a statement is entered without a preceding line number, and is
one of the statements with an asterisk in the table above (definitions
number 7), or one of the commands (definitions number 8), it will not
be stored as part of the program and will be executed immediately.
.ti 0
3. If the statement number on an entered statement is the same number as
an already existing statement, the existing statement will be replaced
by the new statement.
.ti 0
4. If the new statement number falls between two
existing statement numbers, the new statement will be inserted between
the two existing statements.
.ti 0
5. If a statement number is typed followed
immediately by a carriage return, the existing statement of that
number will be deleted.
.ti 0
6. If a statement number is entered, followed by
a dash (minus sign), followed by another statement number, all
statements with numbers greater than or equal to the first and less
than or equal to the second will be deleted.  That is, "10-50" will
delete statements 10 through 50 inclusive.
.ti 0
7. At any time in BASIC, whether entering program or data, mistakes may
be corrected by using the key defined in the program environment as
the cancel key (usually the Ctrl X key (^x)).  They may also be
corrected using the backspace (^h) or delete (rub-out; shift backspace
on some keyboards).  The cancel key (^x) will erase internally all
information entered since the last
occurance of the carriage return key. Delete or backspace will erase
one character at a time, up to the last occurance of the carriage
return key. (When delete is pressed, the character being deleted
is echoed to the terminal).
.ti 0
8. The escape key ("esc") is the
"panic button" in BASIC. This key is used to initiate the original
sign-in procedure, to erase the current line (echoing a carriage return
instead of back slash) during program editing, or to stop program
execution. If the key is used to stop program execution, the message
"Stop at line xxx" (where xxx is the next line number to be executed) will
be printed at the user's terminal. The line number given may be used
in a subsequent "Run" statement to resume execution, if desired.
If the program being executed is in the process of printing on the
user's terminal, the internal print buffer will be emptied before the
escape key takes effect.
.pa
.ce
Bye statement
.sp 3
[<statement number>] Bye
.sp 2
Causes the user to be signed off the system.  The time of
day and the number of cpu seconds (actual computing time) used will
be printed on the terminal and the terminal will be disabled until such
time as the escape key is pressed to enable another sign-in.  This
command also informs the system log that the user is signed off,
thus terminating the accumulation of elapsed time charged to that
user.  Therefore, it is
important that the user not neglect to use this command.
.pa
.ce
Chain statement
.sp 3
[<statement number>] Chain <string variable or literal>[,<statement number>]
.sp 2
.li
	100 Chain "prog2"
	200 Chain A$
	300 Chain "next",20
.sp 2
Loads the program specified by the string and "Run"s that program. If
no comma and statement number are supplied, execution begins at the
lowest numbered statement in the new program. If a statement number is
given, execution will begin at that statement number. If a statement
number is given and the new program does not contain a statement with
that number, execution will begin at the lowest numbered statement.
If there does not exist a program with the name given by the string, an
error message will be given. An assumed "New" will be performed before
looking for the new program. Therefore, variables and statements
are not common between the two programs. If the new program does not
exist, the old program will have been lost by the time of the error
message.
.sp 2
Example 100 causes the program named "prog2" to be loaded and run.
.br
Example 200 causes the program whose name is in A$ to be loaded and run.
.br
Example 300 causes the program named "next" to be loaded and run starting
at the statement numbered 20.
.pa
.ce
Clear statement
.sp 3
[<statement number>] Clear
.sp 2
Causes all variables in the program to be unassigned and undimensioned.
All storage being taken by the variables is returned to the user space.
All internal stacks (For-Next, Gosub-Return, defined functions, etc.)
are reset and all files are closed.  This statement is equivalent to a
run command without a statement number except that the program continues
to run with the next statement (unless "Clear" is typed as a command,
in which case the program is not
executed.  This statement may be used to separate two logical programs
without requiring them to be loaded seperately.
.pa
.ce
Close statement
.sp 3
[<statement number>] Close
.sp 2
This statement functions exactly as the Close file statement (see
below), with the exception that all currently open channels are closed.
.sp 5
.ce
Close file statement
.sp 3
[<statement number>] Close file(<expression>)
.sp 2
.li
	100 Close file(0)
	200 Close file(A-5)
.sp 2
Closes the channel given by the expression, releases the device
assigned to the channel (if other than disk) for other users, and
releases the channel for this user. If the channel is associated with
an output file, close will empty the memory buffer to the specified
file.
.sp 2
Example 100 will close channel 0. Example 200 will close the channel
whose number is 5 less than the contents of variable A.
.pa
.ce
Copy statement
.sp 3
[<statement number>] Copy <source file name>,<destination file name>
.sp 2
.li
	100 Copy "source","dest"
.sp 2
Causes the contents of the source file to be transferred to the
destination file.
.sp 2
Example 100 causes the contents of the file named source to be
transferred to the file named dest.
.pa
.ce
Create statement
.sp 3
[<statement number>] Create <file name [/b]>,<expression>
.sp 2
.li
	100 Create "d3:newfil/b",10
.sp 2
Causes space to be reserved on the disk specified for the number of
sectors given in the expression following the comma.  The space will be
given the name and the attributes specified. If there is not room in the
directory or on the disk to place this file, an
error message will be given.
.br
If the file is to be used to save a basic program, then the file should
be created with the /b attribute as shown in the example.  If the
file is to be used to hold data, then no attribute should be given.
.pa
.ce
Data statement
.sp 3
<statement number> Data <expression or string or literal> ...
.sp 2
.li
	100 Data 1,2,3,4,5
	200 Data "hi",3,"bye",56
	300 Data A,B*4+2,rnd(0)*10,D$
.sp 2
Supplies data for the "Read" statement. As each "Read" statement is
encountered, one element, starting from the first element in the lowest
numbered "Data" statement, per each element in the "Read" statement will
be supplied. If a variable or expression is encountered in the "Data"
statement, it will be evaluated and the resultant value will be supplied
to the "Read" statement element. If a numeric element is encountered
in the "Data" statement for a string variable in the "Read" statement,
or if a string element is encountered in the "Data" statement for a
numeric variable in the "Read" statement, an error message will be
printed.
.sp 2
Example 100 will supply the values 1 through 5 to 5 numeric variables
in a "Read" statement.
.br
Example 200 will supply values to a string
variable, numeric, string, and numeric.
.br
Example 300 will operate
similarly, except that the expressions given will be evaluated before
supplying values. The last variable in the example will supply the
contents of the variable D$ to the corresponding string variable in
the associated "Read" statement.
.pa
.ce
Decode statement
.sp 3
.li
<statement number> Decode <string variable>,
			  [using <string or literal>,]
			  <expression>[, or ; <expression>...]
.sp 2
.li
	100 Decode A$,N*SIN(X)
	200 Decode Y$,using "#####.##",z
	300 Decode N$,I,I*I,Sqr(I)
.sp 2
this statement is identical to a print statement except that the
output is sent to a string variable instead of the terminal.
see "Print" or "Print using" for additional examples
.sp 2
Example 100 will place in the string A$ the result of N times the "Sin"
of X.
.br
Example 200 will place in the string Y$ the contents of Z, using
the string "#####.##" as a conversion template.
.br
Example 300 Places in N$ a string which has I, I squared and the
square root of I.
.pa
.ce
Def statement
.sp 3
<statement number> Def fn*(<numeric variable>)=<expression>
--where the * is replaced by any letter a-z.
.sp 2
.li
	100 Def fna(X)=X*X
	200 Def fne(X)=X-int(X/2)*2=0
	300 Def fns(B)=A$(B,B)="*"
.sp 2
Defines a user function. Up to 26 user functions may be defined for any
program (corresponding to the 26 letters of the alphabet). After a "Def"
statement has been executed, that function may be used in any expression
anywhere that a numeric variable or constant is allowed. If the variable
used within the parentheses of the definition is used in the expression
to the right of the equals sign, the variable will be replaced by the
value given within the parentheses of the call to the function. That
particular variable is local to the "Def" statement. Any other variables
will be given the value they had elsewhere in the program when the
function is called. A function may be defined on only one line.
.sp 2
Example 100 defines a function which will return the square of any value
given to it. That is, the statement, let A=fna(8) would set A equal to
64.
.br
Example 200 defines a function which will return the value 1 if the
called value is even, and will return the value 0 if the called value
is odd. That is, let N=fne(4) will set N equal to 1, and let N=fne(9)
will set n equal to 0.
.br
Example 300 will return the value 1 if A$
contains an asterisk (*) at the position pointed to by the calling
value. That is, if A$ contains an asterisk at position 5, let N=fns(3)
will set N=0, and let N=fns(5) will set N=1. Notice that in the examples
above, the variables X and B, which are the "dummy" variables of the
various functions, have no relation to the variables X and B elsewhere
in the program, but the variable A$ is the same A$ as elsewhere in
the program.
.pa
.ce
Delete statement
.sp 3
[<statement number>] Delete <file name>
.sp 2
	100 Delete "d2:oldfil"
.sp 2
Causes the specified file to be deleted from the directory.
.sp 2
Example 100 causes the file named oldfil on disk number 2 to be
deleted.
.pa
.ce
Dim statement
.sp 3
[<statement number>] Dim <variable>(<expression>) ...
.sp 2
.li
	100 Dim A(50),B(100),C(2,4)
	200 Dim A$(20),K(3),C9(2000)
	300 Dim S(H*3+V9)
.sp 2
Reserves storage for a particular variable and, in the case of numeric
variables, informs the system that said variable is to be considered as
a list variable (in the case of a single dimension), or as a matrix
variable (in the case of a doubly dimensioned variable).
.sp 2
Numeric variables take two words for every position reserved, and
string variables take X/2+1 words (where X is the dimension value).
Numeric lists and matrices begin at position 0,
and string variables always begin at position 1. Strings must be
dimensioned before they are used, even if they are to have only
one position. Numeric lists and matrices may be used without first
dimensioning them, in which case they receive default dimensions of
(10) or (10,10).
.sp 2
Example 100 reserves 51 positions for numeric list variable A (0-50),
101 positions for B, and 15 positions for matrix C.
.br
Example 200
reserves 20 positions for string variable A$, 4 positions for numeric
K, and 2001 positions for numeric C9.
.br
Example 300 reserves the number
of positions represented by the expression H*3+V9 plus one for
numeric S.
.pa
.ce
Disk statement
.sp 3
[<statement number>] Disk <disk number>[,<account number>]
.sp 2
	100 Disk 3
.sp 2
This statement causes all subsequent references to disk files to use
the specified disk as the default disk.  This statement affects only
the user who gives it, and is reset upon giving a "Bye" statement.  If
no disk number is given, the system default disk will become the user's
default disk (as was the case at sign-in time).
.sp 2
If the optional account number is specified, and if the user has bit 10
on in his restriction word (see appendix D), then his default account
number will be changed from his own account number to the one
specified.  This will affect all subsequent Open, Load, Chain, Save,
List, and Direc statements.  The user will still be operating with the
same set of restrictions as his original account number, and the Lines
command will still return his original account name.
.sp 2
Example 100 causes all future references to disk files (which do not
have an explicit disk number followed by a colon [:]) to reference disk
number three.
.pa
.ce
Encode statement
.sp 3
<statement number> Encode <string>,<variable>[,<variable>,...]
.sp 2
.li
	100 Encode "1234,4355",n1,n2
	200 Encode A$,a
.sp 2
This statement is identical to the input statement, except that
the source of the input comes from a instead of the terminal.
.sp 2
Example 100 converts the string "1234,4355" into a numeric form and places
1234 into variable n1, and places 4355 into the variable n2.
.br
Example 200 reads the string A$ into the variable a.
.pa
.ce
End statement
.sp 3
<statement number> End
.sp 2
.li
	100 End
.sp 2
Causes termination of program execution and the printing of the
message "Ready" on the terminal. As many end statements may be
used in a program as desired, and no end statement is necessary.
If a program does not contain an end statement, execution will
terminate upon execution of the last statement of the program,
upon execution of a stop statement, upon the user pressing the
"esc" key on the terminal, or upon the program reaching a fatal
error.
.sp 2
Example 100 causes the message "Ready" to be printed on the
user's terminal and the program to cease execution.
.pa
.ce
For statement
.sp 3
.li
<statement number> For <non-subscripted numeric variable-called the
			"control variable">=<expression>to<expression>
			[step<expression>]

	100 For I=1 to 10
	200 For J=2.04 to -10.68 step -.02
	300 For K=A(3) to B9
.sp 2
This statement is used in conjunction with a "Next" statement to cause
the program to loop through a group of statements. Upon execution of
the for statement, the control variable is set to the value of the
expression immediately following the equals sign (=). Control is then
passed to the statement following the "For" statement. Upon reaching
a "Next" statement with the corresponding control variable, the value
of the expression following the "step" (as evaluated when the for
statement was first executed) if specified is added to the control
variable and compared with the value of the expression following the
"to" (as evaluated when the for statement was first executed). If
the resultant value of the control variable is <= the expression
following the "to" (for positive step; >= for negative step), control
is passed to the statement following the "For" statement again, but
with the new value in the control variable. If the resultant value
is > the expression following the "to" (or < for negative step),
the control variable is not changed and control passes to the
statement following the "Next" statement. Thus, when the loop is
terminated, the control variable contains the value that it
possessed during the final pass through the loop. If no value is
given following "step", one (1) is assumed. The values given in
the expressions above need not necessarily be integers.
.sp 2
Example 100 will cause a loop of the statements following the "For"
to the "Next" statement first with I=1, then with I=2, then with I=3,
etc., Until the final loop when I=10. The loop, then, would have
been executed 10 times with I=10 when control is passed to the
statement following the "Next" statement.
.br
Example 200 shows a loop
with a specified step. The control variable, J, will be decremented
by .02 Each time through the loop.
.br
Example 300 shows a loop which
will be determined by the contents of A(3) and B9.
.pa
.ce
Full statement
.sp 3
[<statement number>] Full
.sp 2
.li
	100 Full
	Full
.sp 2
This statement causes the terminal echo to be enabled. The echo
may be disabled by means of the "Half" statement. The effects of
this statement remain until a "Half" statement is executed,
regardless of termination of the program, loading of new programs,
or any other action other than signing off. Echo enabled is
the default condition at sign-on time.
.sp 2
Example 100 enables echo when executed within the program. The
second example enables echo immediately.
.pa
.ce
Gosub statement
.sp 3
<statement number> Gosub <statement number>
.sp 2
.li
	100 Gosub 500
.sp 2
This statement functions exactly as the "Goto" statement, except that
the statement number of the statement following the "Gosub" statement
is placed on a stack to be recalled upon executing a "Return"
statement (when control will be passed to the statement number that
is recalled). If the stack is filled by executing too many "Gosub"
statements before encountering a "Return" statement, an error message
is printed.
.sp 2
Example 100 causes control to be passed to statement 500 and the
statement number of the statement number following statement 100 to
be placed on the return stack. When the next "Return" statement is
executed, control will be passed to the statement following statement
100.
.pa
.ce
Goto statement
.sp 3
<statement number> Goto <statement number>
.sp 2
.li
	100 Goto 1000
.sp 2
This statement transfers control to the statement number specified.
The branch is unconditional.
.sp 2
Example 100 transfers control to the statement numbered 1000.
.pa
.ce
Half statement
.sp 3
[<statement number>] Half
.sp 2
.li
	100 Half
.sp 2
This statement causes the terminal echo to be suppressed. The
suppression remains in effect until the execution of a "Full"
statement either as an immediate command or as a statement within
a program. This statement is normally used to condition basic to
operate with a half-duplex terminal, but is also useful in suppressing
printout of input data which
is of a sensitive or high security nature.
.sp 2
Example 100 causes the terminal echo to be subsequently suppressed.
.pa
.ce
Hold statement
.sp 3
.li
	100 Hold
.sp 2
This statement causes the user to be given uninterrupted
time thus suspending servicing of other users.  Servicing other users
is restored by the use of the "Rel" statement (see below).  The primary
purpose of this statement is to allow the user to update a file without
allowing another user to change the contents of the same file "out from
under him".  Any input/output other than disk will cancel the effects
of this command (as will "Sleep", "End", "Stop", "Bye", "New", etc.)
This command should be utilized with care on debugged programs only.
.pa
.ce
If statement
.sp 3
.li
<statement number> If <expression> goto <statement number>
				   gosub <statement number>
				   then <statement number>
				   then <statement>

	100 If A<1 goto 1000
	200 If A$="hello" gosub 5000
	300 If B<5 or A>2 then 2000
	400 If A$<>"run" then Print "what?"
	500 If C>=1 and C<=5 then On C goto 600,700,800,900,1000
.sp 2
This statement tests the expression following the word "If" for
logical true or false (logical true is any non-zero value, logical
false is zero), and if true, performs the operation requested.
Any statement may be used in the fourth form of the "If" statement,
but it should be noted that using a "For" or a "Next" statement in
this context could be dangerous if care is not taken to insure
that the value of the evaluated expression of the "If" statement
does not change for the duration of the loop. (Also, "For" and
"Next" statements within an "If" statement do not affect the
indentation of the listing as normal "For" and "Next" statements do.
.sp 2
Example 100 causes a transfer to statement 1000 if A is less than
1.
.br
Example 200 causes a transfer to the subroutine at statement
5000 if the string variable A$ contains the characters "hello".
(Note that A$ must contain only those letters. If the first five
characters are "hello", but A$ contains more characters after the
first five, the comparison will not be equal.) Upon the execution
of a return statement, control will be to the statement following
statement 200.
.br
Example 300 will transfer to statement 2000 if B is
less than five or if A is greater than 2. The keyword, "then", will
be replaced by the keyword "goto" when this statement is listed.
.br
Example 400 causes the word "what?" to be printed on the terminal
if A$ does not contain the characters "run".
.br
Example 500 transfers
control to 600, 700, 800, 900, or 1000, depending on the value of
the variable C if C is greater than or equal to 1 and less than
or equal to 5. If C is outside of this range, control will be
passed to the statement following statement 500.
.pa
.ce
Input statement
.sp 3
<statement number> Input [<literal>,]<variable>[,<variable>]...[;]
.sp 2
.li
	100 Input A
	200 Input B(5),C,D$
	300 Input F;
	400 Input "enter number ",N
.sp 2
This statement allows data to be obtained from the user during
program execution and placed in an appropriate program variable.
Upon executing this statement, basic writes a question mark (?)
to the terminal and waits for the user to enter data. Control
is returned to the program when the user presses the return
key. If the variable in the input statement is a numeric variable,
the user will be required to type a number in any valid numeric
form. If the variable is a string variable, the user may type
any number of characters followed by a carriage return. If more
than one numeric variable is specified within a single input
statement, the user may type that number of numeric values
separated by commas, or he may type a carriage return after
each variable, in which case the question mark prompt will be
repeated until the required number of values have been entered.
Note that if more than one string variable is specified, the user
must terminate each string with a carriage return. Commas will be
entered as part of the string. If the input statement is
terminated with a semi-colon (;), no carriage-return will be
sent to the terminal at the end of the statement. If, however,
the statement is not terminated with a semi-colon, a carriage
return will be sent to the terminal at the end of the input.
(Note that use of the semi-colon is meaningless with a half-
duplex terminal, since the carriage return is echoed at the
terminal.)
.sp 2
Example 100 causes a question mark to be printed at the terminal
and causes BASIC to wait for the user to enter a numeric value.
That value will be stored in the variable A, and control will be
passed to the statement following 100 after a carriage return has
been sent to the terminal.
.br
Example 200 allows the user to enter
two numeric values separated by a comma, followed by a comma and
any string of characters ended with a carriage return. The user
could also enter one numeric value ended with a carriage return,
followed by another numeric value ended with a carriage return,
followed by a string of characters ended with a carriage return.
.br
Example 300 allows the user to enter a single numeric value
followed by a carriage return. The value will be placed in the
variable F, but no carriage return will be echoed to the terminal.
.br
Example 400 prints the string "Enter number" then allows the user
to input a numeric value.  The value will be placed in the variable N.
.pa
.ce
Input file statement
.sp 3
.li
<statement number> Input file(<file number>[,<record number>]),
			<variable>[,<variable>]...

	100 Input file[0],A,B
	200 Input file[A,B],C$
.sp 2
This statement functions exactly as the input statement, except that
the input is requested from the device associated with the file
number specified. Also, no question mark prompt is generated with
this statement. If a record number is specified, a seek operation
is performed to that record before the input operation is performed
(disk files only are valid for seeks). If no variable list is
specified, the seek only will be performed. Data on the specified
file is expected to be in exactly the same format as for the input
statement.
.sp 2
Example 100 will read a line up to a carriage return from file 0 and
evaluate to find a numeric value which will be placed in the variable
A. If the value is terminated with a comma, the same line will be
searched for another numeric value for the variable B. If the value
is terminated with a carriage return, another line will be read
(up to a carriage return) and searched for a value for B.
.br
Example 200 causes a seek to the record pointed to by the variable B on the
file pointed to by the variable A, followed by the reading of a line
(up to a carriage return) for characters to be placed in the string
variable C$.
.pa
.ce
Let statement
.sp 3
.li
[<statement number>] [Let] <variable>=<expression>[,<variable>=
					<expression>]...
			   <String variable>=<literal>[,<literal>]...
					<String variable>...

	100 Let A=5
	200 B(10)=C<5*20
	300 D=sqr(2),E=4,C(2)=D
	400 let A$="he","llo",B$(5,10)
.sp 2
This statement causes either the value of a numeric expression to be
assigned to a numeric variable or the value of a string expression
to be assigned to a string variable. The keyword "Let" need not be
entered, but BASIC will automatically insert the word for a listing
if it is left out. As many assignments as will fit on a single line
may be entered separated by commas. Note that in the case of a string
assignment the commas cause concatination of the string information.
Therefore, two string assignments may not be entered on the same
statement separated by commas, as BASIC would assume that the
variable occuring on the left of the second equal sign was meant to
be concatinated into the variable on the left of the first equal sign,
and an error message would be signalled at the second equal sign.
.sp 2
Example 100 causes the value 5 to be placed in the variable
A.
.br
Example 200 causes the value zero to be placed in the eleventh
position (starting with 0) of the numeric list B if C was
greater than or equal to 5, and the value 20 to be placed in
B(10) if C is less than 5.
.br
Example 300 places the square root of
2 in the variable D, 4 into E, and the square root of 2 (from
the variable D) into cC2).
.br
Example 400 places the characters
"hello" followed by the characters found in positions 5 through
10 of B$ into A$.
.pa
.ce
Log statement
.sp 3
[<statement number>] Log <string variable or string literal>
.sp 2
.li
	100 Log "This terminal is not working correctly!"
.sp 2
This statement causes the string to be written on the accounting log
file.  Its purpose is to allow users to leave messages for the system
operator concerning system problems, terminal problems, accounting
information, program run history, etc.  Stored with the message are
the user's account number, port number, date, and time of day.
.sp 2
Example 100 causes the message "This terminal is not working correctly!"
to be stored in the accounting file for the system operator's
information.
.pa
.ce
Lowup statement
.sp 3
[<statement number>] Lowup
.sp 2
This statement causes all lower-case characters received from the
user's terminal to be converted to upper-case characters before being
echoed to the terminal or used by the program.  The system can be
taken out of the mode by the use of the 
"Uplow" statement (see below). This statement is useful when it is
desired to force the user to type input data in upper case in order
to not make the program have to check both lower and upper case
user reponses.
.pa
.ce
Mat statement
.sp 3
In the formats given below, "MV" stands for matrix variable, which is
any doubly dimensioned variable or a non-dimensioned variable which has
not been used previously in the program. If the variable is of the
latter type, the dimensions must be specified within parentheses
following the keywords zer, con, or idn.
.sp 2
.li
<statement number> Mat <mv>=<mv>
<statement number> Mat <mv>=<mv>+<mv>
<statement number> Mat <mv>=<mv>-<mv>
<statement number> Mat <mv>=<mv>*<mv>
<statement number> Mat <mv>=(<expression>)*<mv>
<statement number> Mat <mv>=inv(<mv>)
<statement number> Mat <mv>=trn(<mv>)
<statement number> Mat <mv>=zer
<statement number> Mat <mv>=con
<statement number> Mat <mv>=idn
.sp 2
The above statements all allow doubly dimensioned arrays to be used as
and operated upon as matrices. It should be noted that the matrix
operations here documented do not use the zeroeth positions of arrays.
That is, row zero and column zero are not used and will be ignored by
matrix operations. Each of the above forms of the mat statement is
documented seperately below.
.sp 2
.li
	100 Mat A=B
.sp 2
This statement will cause the values in all the elements of matrix
B to be stored in matrix A. If A had not been previously dimensioned,
it will be given the dimensions of matrix B. If A had been previously
dimensioned, it will be re-dimensioned to have the same dimensions
as matrix B. This re-dimensioning follows the normal rules for
re-dimensioning. That is, any array (not string variables) may be
re-dimensioned at any time provided that the total number of elements
required by the new dimensions does not exceed the total number of
elements given the variable when it was first dimensioned by the
program.
.sp 2
.li
	100 Mat A=B+C
        200 Mat A=B-C
.sp 2
These statements cause the elements in matrix C to be added to (example
100) or subtracted from (example 200) the elements of matrix B. The
arithmetic operation is performed element by element and is normal
algebraic addition and subtraction. Matrices B and C must have the
same dimensions, and one or the other may be the same matrix as the
matrix to the left of the equals sign. Matrix A will be re-dimensioned
as explained above.
.sp 2
.li
	100 Mat A=B*C
.sp 2
This statement causes matrix multiplication of matrices B and C and
the result to be placed in matrix A. To obtain the matrix product
of B*C, each row of B is multiplied by each column of C. Each
row/column set is added together to find the resultant matrix
element. Neither matrices on the right of the equals sign may be
the same matrix as on the left of the equals sign. Matrix A will
be re-dimensioned as explained above to have the number of columns
as matrix C and the number of rows as matrix B. The number of
columns of matrix B must match the number of rows of matrix C.
.sp 2
.li
	100 Mat A=(5+cos(D))*B
.sp 2
This statement causes each element of matrix B to be multiplied by
the value 5+cos(D) and the result to be placed in matrix A. Matrices
A and B may be the same matrix. Matrix A will be re-dimensioned to
the dimensions of matrix B as explained above.
.sp 2
.li
	100 Mat A=inv(B)
.sp 2
This statement will obtain the inverse of matrix B and store it in
matrix A. Matrix A will be re-dimensioned to the dimensions of matrix
B as explained above, and matrices A and B may be the same matrix.
Matrix B must be square and at least 2 by 2. Any square matrix may
be inverted except one that contains one or more zero elements along
the major diagonal. The determinant of the last matrix inverted by
a basic program may be obtained through the use of the "det(X)"
function. Note that the variable X has no relevance to the det
function although it is syntactically required.
.sp 2
.li
	100 Mat A=trn(B)
.sp 2
This statement transposes matrix B and stores the result into matrix
A. A matrix is transposed by reversing its rows and columns. Matrix
B cannot be the same matrix as matrix A, and matrix A will be
re-dimensioned to the dimensions of matrix B as explained above.
.sp 2
.li
	100 Mat A=zer(5,6)
.sp 2
This statement stores the value zero in every element of matrix A,
and if a dimension is given, dimensions matrix A to the specified
size.
.sp 2
.li
	100 Mat A=con
.sp 2
This statement stores the value one in every element of matrix A,
and if a dimension is given, dimensions matrix A to the specified
size.
.sp 2
.li
	100 Mat A=idn
.sp 2
This statement creates an identity matrix by storing zeroes in
every element of the matrix except the major diagonal, where ones
are stored. If a dimension is given, matrix A will be dimensioned
to the specified size.
.pa
.ce
New statement
.sp 3
[<statement number>] New
.sp 2
.li
	New
	100 New
.sp 2
This statement causes all statements in the program to be erased,
all variables unassigned and cleared, and all open files closed.
All information in core before this statement is executed is lost.
Therefore, this statement should only be issued before entering a
program or after all important information is saved.  This statement
also causes execution to cease and the "Ready" message to be printed
if it is encountered as a part of a program.  That is, it functions
exactly as an "End" statement, except that all statements are erased
before execution is terminated.
.sp 2
The first example will clear the user's program area, usually in
preparation for inputting a new program.  The second example, being
a statement in a program, will, when executed, clear the user's space
and terminate the execution of the program with the "Ready" message.
.pa
.ce
Next statement
.sp 3
<statement number> Next <non-subscripted variable>
.sp 2
.li
	100 Next I
.sp 2
This statement is used in conjunction with the "For" statement to
signify the end of a loop. The non-subscripted variable should
be the same variable as the control variable of the associated
"For" statement. See the documentation of the "For" statement.
Upon execution of this statement, control is either passed to
the statement immediately following the associated "For" statement
or to the statement immediately following the next statement,
depending on whether the loop parameters are satisfied or not.
.sp 2
Example 100 is the final statement in the loop associated with
a "For" statement which has I for a control variable.
.pa
.ce
Nulls statement
.sp 3
[<statement number>] Nulls <number>
.sp 2
.li
	100 Nulls 8
.sp 2
This statement is used with certain high-speed terminals to force a
delay for the carriage-return, line-feed mechanism on such terminals.
Any number of nulls may be specified, but the number given will be
accepted modulo 15.  After this statement, each line will be terminated
with a carriage return, line feed, and the specified number of nulls,
in that order.  This function may be reset by typing the statement
with the number zero or by signing off.
.sp 2
Example 100 causes eight nulls to be sent after every line feed to
the user's terminal.
.pa
.ce
On statement
.sp 2
In the format given below, s# stands for statement number.
.sp 2
.li
<s#> On <expression> goto <s#>[,<s#>][,<s#>]...
<s#> On <expression> gosub <s#>[,<s#>][,<s#>]...
<s#> On err goto <s#>
<s#> On esc goto <s#>
<s#> On err gosub <s#>
<s#> On esc gosub <s#>
.sp 2
.li
	100 On X goto 200,300,400,500
	200 On (A$="YES")+1 goto 200,300
	300 On err gosub 1000
	400 On esc goto 5000
.sp 2
This statement evaluates the expression following the keyword "On"
and transfers control to the first statement following the goto or
gosub if the value is equal to one and less than two, the second
statement number if the value is equal to two and less than three,
etc. If the evaluated value of the expression is less than one or
greater than the number of statement numbers in the statement number
list, control is passed to the statement immediately following the
"On" statement. The goto and gosub functions are exactly as described
for the "Goto" and "Gosub" statements.
.sp 2
The "On" statement can also be used to provide programmable traps for
errors encountered during execution and for the escape key.  The
"On err" or "On esc" forms of this statement, when executed, inform
the system that the specified line number is to be executed upon
detection of an error or detection of the escape key during execution.
These statements remain in effect until another "On err" or "On esc"
statement is encountered, or until the user types a "Run", a "New",
or a "Load" command.  Care should be exercised in the use of these
statements, as it is possible to place a user's terminal in an unusable
state with them.  If an escape trap has been provided which does not
stop the program, and there is an error in the error trap routine,
the user would not be able to stop the program, and the program would
loop entering the error trap routine.  The only way out would be for
the system operator to "Zap" the terminal.  Therefore, these
statements should only be used in tested programs.
.sp 2
Example 100 will transfer control to statement 200 if 1<=X<2, to
statement 300 if 2<=X<3, to statement 400 if 3<=X<4, and to
statement 500 if 4<=X<5. If X is less than 1 or greater than or equal
to 5, the next statement following the on statement will be executed.
.br
Example 200 will transfer control to statement 200 if A$ does not
contain the characters "YES" and to statement 300 if A$ does contain
those characters.
.pa
.ce
Open file statement
.sp 3
.li
[<statement number>] Open file (<file number>[,<# bytes per random
				record>],<file name>

	100 Open file(0,100),"file1"
	200 Open file(N1),A$
	300 Open file(3),"PRN:"
.sp 2
This statement makes available for use a disk file or a physical device
for a BASIC program. The first parameter required is the file number.
This number is chosen by the user and must be in the range 0-39 (the
maximum number of files that may be open in any single program is 40).
This file number will be used by
"Read file", "Write file", "Input file", and "Print file" statements to access
the particular disk file or physical device opened by this statement.
The second parameter, which is optional, is the number of bytes per
record for a randomly accessed disk file. If not specified, the default
value of 128 will be used. This parameter has meaning if a "Read file",
"Write file", "Input file", or "Print file" statement is used with their
optional parameter specifying a record number. If so, that record
number will be multiplied by the number of bytes per record given here
to obtain the location on the disk of the first byte of data to be
read or written (the actual calculation is the record number-1 times
the number of bytes per record, since the first record is number 1).
For calculation of the number of bytes needed per record, each numeric
value stored on the disk requires four bytes of storage, and each
string requires the length of the string plus one byte of storage.
Note that this is the length of the string (which is the number of
characters actually in the string) and not the dimension of the
string (which is the maximum number of characters that could be
stored in the string). The data as stored on the disk is simply the
numeric values or the string characters. There are no extra pointers
in a disk file to inform BASIC as to whether the next value is a
numeric or a string value. Therefore, it is imperative that the
variable list of a disk "Read file" statement be in the same order and
contain the same types (numeric or string) variables as the variable
list of the "Write file" statement that originally stored the data.
(For "Print file", characters are written in the same manner as they
would be written on the terminal using one byte per character.
"Print file" statements not followed by a semicolon (;) place a
carriage return and a line feed following the information for the
line itself).
For string data written with a "Write file" statement, a null character
is stored at the termination of the string that was written. When
reading the string, the string variable used in the "Read file" statement
may have a greater dimension or an equal dimension to the dimension
of the variable used in the "Write file", and the reading of the string will
be terminated by the null on the disk. If the dimension of the
string variable used in the "Read file" is less than the number of
characters before the null on the disk, the reading will be terminated
in the midst of the string on the disk. This can be useful in
reading text files, as the file may be read a byte at a time by
means of a string variable with a dimension of one, and the end
of the record can be determined by testing the length of the
string variable with the "Len" function after the "Read file". The end
of the record would return a zero length. The third and final
parameter required by the "Open file" statement is the name of the
file, which may be either a string variable or a string literal.
If this name is the name of one of the line printer (PRN:), it
will be tested to see if it is already in use, and if not,
assigned to this program for later use. If the name is not the
name of the line printer, the disk will be searched for a file
with the corresponding name. The disk directory will first be searched
for a name preceded by the user's account code, then for a name
preceded by the public account code (zero), then (if the user has this
capability as determined by his account restrictions) for a file
not preceded by any account code.  If the file with the specified name
is a saved BASIC program (with the b attribute), the user will not
be allowed to open the file.
.sp 2
Example 100 will open a disk file by the name of "file1" on channel
zero with 100 bytes per random record. This file may be used either
randomly (by the use of the record number parameter in "Read file"
and "Write file"
statements) or sequentially (by omiting the record number in "Read file" and
"Write file" statements) or both (this is true of any disk file).
.br
Example 200 will open a file having the name specified by the string variable
A$ on the channel specified by the variable A1. This file will have
the default of 128 bytes per random record.
.br
Example 300 will open the
line printer on channel 3.
.pa
.ce
Print statement
.sp 3
.li
[<statement number>] Print <expression>[, or ; <expression>]...
[<Statement number>] ? <expression>[, or ; <expression>]...

	100 Print A+5;tab(15);sqr(2)
	200 ?A$,5
	300 ?"The answer is:";C;
.sp 2
This statement prints on the terminal the value of any numeric
expression encountered, the contents of any string variable or
literal encountered, and tabulates to the column specified by
any tab function encountered or to the next tab stop for any
comma (,) encountered. Semi-colons (;) can be used to separate
elements where no tabulation is desired. The question mark can
be used in the place of the keyword "Print" (also useful
when using the "Print" statement in the immediate mode-without
a statement number), but the keyword "Print" will be output
during a list of the program instead of the leading question mark.
If commas are used for tabulation, a carriage return will be
output instead of spacing to the next tab stop if there would
not be room for another number before the end of a 72 character
line. Semi-colons will not cause carriage returns and may be
used in conjunction with the tab function when it is desired
to output lines longer than 72 characters. For the tab function,
the first position of the line is considered position zero.
If the terminal is already beyond the position specified by the
tab function, no action will be caused by that tab. Numeric
values will be printed as six digits plus a decimal point and
an optional minus sign. If a number requires more than six
digits, scientific notation will be used, with only the six
most significant digits being printed. BASIC internally uses
six or seven digits of precision, depending on the number.
Every numeric value printed will be preceded by either a blank
or a minus sign and followed by a
blank. If the last item in the variable list is followed
by a semi-colon, the carriage return at the end will be suppressed.
This will cause the next print statement to continue on the same
line.
.sp 2
Example 100 will print the value of the expression A+5 on the
terminal followed by spacing to column 15 (counting from zero)
followed by the value 1.4142, Which is the square root of 2.
.br
Example 200 will print the contents of the string A$ followed
by a tab to the first tab stop followed by the number 5.
.br
Example 300 will print the message "The answer is:" followed
by the value in the variable C. The trailing semi-colon suppresses
the carriage return at the end of this print statement, so that
the next print statement will continue immediately following
the number from the variable C.
.pa
.ce
Print file statement
.sp 3
.li
[<statement number>] Print file (<file number>[,<record number>]),
				<expression>[,<expression>]...

	100 Print file(0,4),A;B,C
.sp 2
This statement functions exactly as the print statement except that
the output is sent to the file that is specified by the file
number. If a record number is specified, a seek is performed to
that record before the data is written. Semi-colons
may be used exactly as in the print statement.
.sp 2
Example 100 will write the values of the variables A, B, and C
to the file number zero, fourth record. The value of A will be
written first, followed by the value of B followed by a tab to
the next tab stop, the value of C, a carriage return and a line
feed.
.pa
.ce
Print file using statement
.ce
Print using statement
.sp 3
.li
<statement number> Print [file (<file number>[,<record number>]),]
				using <string variable or literal>,
				<expression or string>[,<expression or
				string>]...

	100 Print using "###.##",2.3
	200 Print file(7,10),using Z$,Z(1);
	300 print using "##### time","First","2nd","3rd","4th"
.sp 2
This statement
causes formatted printing to the terminal or the specified file.  File
accessing is exactly as in the "Print file" statement described above.
The first string which immediately follows the keyword "using" is the
format string, and the rest of the elements are the argument list to
be printed using that format.  If the statement is followed by a
semi-colon or a comma, no carriage return (or line feed)
will be output following the
formatted print.  Tab functions and semi-colons between elements of
the argument list are not allowed. The
argument list elements must be separated by commas.  Within the
format string, string literals and format characters may both appear.
Anything which does not evaluate to a valid format character will be
assumed to be a string literal and will be output verbatim.  If the
format string is exhausted before the argument list, then the format
string will be repeated.  The following are valid format characters:
.li

	+	-	#	0	,	.	$
.sp 2
A format field is made of a valid combination of these characters.
The first occurance of a non-valid format character, or the occurance
of an out-of-place format character defines the termination of the
format field.  One element from the argument list will be placed in
each format field.
.sp 2
String data will overlay the format field character by character.
If the argument string is longer than the format field, it will be
truncated.  If the argument string is shorter than the format field,
trailing blanks will be inserted to fill the format field. Example:
.li
	Print using "###.##","One","two","that is all, folks"

will print:  One^^^two^^^that^i
	(where ^ represents a blank)
.sp 2
Numeric data will be output right-justified, one digit per format
digit character (defined below).  If the numeric to be printed is
too large for the field specified, the field will be filled with
asterisks (*).  Unless otherwise specified (by the termination of
a floating character or use of the 0 format character, see below),
all preceding zeroes will be
suppressed.  A format digit character is the "pound" sign (#),
the zero (0) or a floating character.  Examples:
.sp 2
.li
	Print using "###.##",1,2.1,3.24,5.64975,12345.6

will print:  ^^1.00^^2.1^^3.24^^5.65******
	(where ^ represents a blank)
.sp 2
Notice that in printing 5.65, The number was rounded.
.sp 2
As in the above example, the decimal point is output where
specified.  If the number had been a fraction only, a zero would have
been output immediately preceding the decimal.  That is, .25 Would have
been represented as 0.25.  
.sp 2
If a sign character (+ or -) were placed immediately before the field
or immediately after the field, the sign of the number would be placed
in that position.  The sign character + causes a + to be printed if
the number is positive, and a - to be printed if the number is
negative.  The sign character - is the same, except that a blank is
printed for positive numbers. Example:
.li

	Print using "+###.## ",25,.45,-5.346,-1

will print:  +^25.00^+^^0.45^-^^5.35^-^^1.00
	(where ^ represents a blank)
.sp 2
If more than one sign character is specified (preceding sign only), it
is a floating sign.  That is, the sign will be moved as far to the
right as the sign characters and the magnitude of the number permit.
If there is room between the floating signs and the magnitude of the
number, leading zeroes will be inserted. Example:
.li

	Print using "---##.## ",1,-1,-345.3,-20

will print:  ^^^01.00^^^-01.00^^-345.30^^^-20.00
	(where ^ represents a blank)
.sp 2
Likewise, dollar signs may be specified as fixed (one only) or floating
(more than one).  Dollar signs act exactly as signs, except that a
dollar sign is always printed, regardless of the whether the argument
is positive or negative.  If a sign is required in addition to the
dollar sign, it must be a fixed sign (only one), and must appear either
before the dollar sign or after the field.  Example:
.li

	Print using "-$$$$#.## ",1,-1,.45

will print:  ^^^^$1.00^-^^^$1.00^^^^^$0.45
	(where ^ represents a blank)

	Print using "$$$$#.##- ",1,-10,-.45

will print:  ^^^$1.00^^^^$10.00-^^^^$0.45-
	(where ^ represents a blank)
.sp 2
Commas inserted in the format field will be printed if the magnitude
of the number is large enough to require them.  Otherwise, they will
be replaced with blanks. Example:
.li

	Print using "#,###,###.## ",1,1000,1E6

will print:  ^^^^^^^^1.00^^^^^1,000.00^1,000,000.00^
	(where ^ represents a blank)
.sp 2
Four consecutive up arrows (^) will require that the number be
converted and output in scientific notation.  The number will be
adjusted to the position of the decimal point given in the field, and
the appropriate power of ten will be given in the four positions
specified by the up arrows.  Example:
.li

	Print using "+#.#####^^^^",123456

will print:  +1.23456E+05
.pa
.ce
Prty Statement
.sp 3
[<statement number>] Prty <expression>[,<expression>]
.sp 2
.li
	100 Prty 3
	200 Prty 1,1
.sp 2
This statement sets the program priority for this port, or a given port.
The program
priority is a number between 0 and 255 inclusive which determines the
number of times this process will be bypassed by the scheduler
before being allowed to execute.  For example: if the program priority
is 3, then the scheduler will not select this process to be run
until it has been bypassed 3 times.  If the program priority is set to 0,
then the process will receive service each time through the polling loop
as long as the program requires service.
.br
In short, the higher the priority number, the slower the program will run.
.br
This is a restricted function
and requires restriction bit 4 to change the priority of your own port.
Restriction bit 1 is required in addition to bit 4 to change the 
priority of another port.
.sp 2
Example 100 will set the program priority of this port to 3 if 
restriction bit 4 is set.
.br
Example 200 will set the program priority for port 1 to 1 if restriction
bits 1 and 4 are set.
.pa
.ce
Random statement
.sp 3
[<statement number>] Random
.sp 2
.li
	100 Random
.sp 2
This statement causes the random number generator to be reset to
a specific starting point. The use of this statement allows the
programmer to obtain the same set of random numbers for repetitive
trials of evalutaion programs. If this statement is not used, the
random number generator will proceed from the point where it was
last used on the user's port. The random number generator does not
reset with any action other than this statement or bringing the
system up.
.sp 2
Example 100 resets the random number generator.
.pa
.ce
Read statement
.sp 3
[<statement number>] Read <variable>[,<variable>]...
.sp 2
.li
	100 Read A,B,C,D(8)
        200 Read A,A$,B,B$,C,C$
.sp 2
This statement causes values to be obtained from "Data" statements in
the program and placed in the variables specified. For each variable
encountered in a "Read" statement, one datum will be obtained from a
"Data" statement and placed in the variable given. The "Data" statement
pointer will then be updated to the next datum in that "Data" statement
or to the next "Data" statement if the end of that statement has been
reached. If the end of all "Data" statements is reached before the end
of the "Read" statement, an error message will be
printed. If the datum in the "Data" statement is not of the same
type (numeric or string) as the variable in the "Read" statement, an
error message will be printed.
.sp 2
Example 100 will read four numeric data values from "Data" statements
in the program and place them in the variables A, B, C, and D(8).
.br
Example 200 will read a numeric datum from a "Data" statement and
place it in A, a string datum and place it in A$, a numeric into
B, a string into B$, a numeric into C and a string into C$.
.pa
.ce
Read file statement
.sp 3
.li
[<statement number>] Read file(<file number>[,<record number>]),
				<variable>[,<variable>]...
.sp 2
.li
	100 Read file(4),A,B,C$
.sp 2
This statement functions exactly as the "Read" statement except
that the values are obtained from the file specified instead of
"Data" statements. If a record number is specified, a seek is
performed to that record before the data is read.
.sp 2
Example 100 reads four bytes from the specified file to form the
value for the variable A, four bytes for B, and the number of
bytes specified by the dimension of C$ or until a null character
is encountered, whichever comes first, to form the contents of
C$.
.pa
.ce
Rel statement
.sp 3
<statement number> Rel
.sp 2
This statement causes the internal disk buffer to be dumped and the
next user to be serviced.
It is intended to be used in conjunction with
the "Hold" statement (see above) to prevent
other users to be serviced at times when updates
are made to shared disk files.  See the "Hold" statement description
for more information.
.pa
.ce
Rem statement
.sp 3
[<statement number>] Rem <any characters followed by a carriage return>
.sp 2
.li
	100 Rem start of the calculation routines
.sp 2
This statement allows documentation within a program. This statement
may appear anywhere within a program and is ignored when executed.
.pa
.ce
Rename statement
.sp 2
[<statement number>] Rename <old file name>,<new file name>
.sp 2
.li
	100 Rename "d3:oldnam","newnam"
.sp 2
Will cause the file with the old file name to be given the new file
name. Notice that the disk number is only specified on the old file
name.
.sp 2
Example 100 will give the file on disk 3 with the name oldnam the name
newnam.
.pa
.ce
Restore statement
.sp 3
[<statement number>] Restore [<statement number>]
.sp 2
.li
	100 Restore
	200 Restore 300
.sp 2
This statement causes the data statement pointer to be reset to the
first "Data" statement in the program or the statement which is
specified.  All future "Read" statements will re-read the same data as
the "Read" statements preceding the execution of this statement.
.sp 2
Example 100 causes the first value in the first "Data" statement in the
program to be the next value passed to a "Read" statement.
.br
Example 200
causes "Data" statement 300 to be the next one to be processed.
.pa
.ce
Return statement
.sp 3
<statement number> Return
.sp 2
.li
	100 Return
.sp 2
This statement causes the statement number on the top of the stack
of statement numbers created by the "Gosub" statement to be the next
statement to be executed. In essence, this statement effects a return
from a subroutine which received control from a "Gosub" statement
earlier in the execution of the program. Return is made to the
statement immediately following the last "Gosub" statement which was
executed.
.sp 2
Example 100 causes the program to resume execution with the statement
following the last "Gosub" statement to be executed.
.pa
.ce
Show statement
.sp 3
[<statement number>] Show <expression>
.sp 2
.li
	show 3
.sp 2
This statement logicaly connects your terminal in parallel to the
terminal of the given port number.  All characters displayed on one
terminal will be displayed on the other.  The show statement stays
in effect until ctrl A is entered on the originating terminal.
This statement is restricted and requires restriction bit 14 to be set.
This is intended for use by the system operator.  If two users both use
the show command such that they show each other either directly or
indirectly, the output will become very confusing until either user 
enters ctrl A.
.br
The example causes all characters displayed on port 3 to be shown on
the current port, and all characters typed on this port to be displayed
on port 3.
.br
This statement is often used to run a program in background by signing
on an unused terminal via the "Sign" statement, then showing that
port with the "Show" statement and running the program.
.pa
.ce
Sign statement
.sp 3
.li
[<statement number>] Sign <expression>,<string>,<expression>,<string>
			     port      terminal    account   password
.sp 2
.li
	sign 3,"crt1",1010,"secret"
.sp 2
This statement allows a user on one port to sign in another port
without having to actually be at that terminal.  This is sometimes used
to run programs in "background".  Note: there does not need to actually
be a terminal on the given port, but the interface hardware must be 
present, otherwise the port will not sign in, but will hang.  If the 
given port is already signed on, then an error will be returned.
.br
This is a restricted function and requires restriction bit 14 to be set.
.sp 2
The example will sign in port 3 with terminal "crt1", account number 1010
and password "secret"
.pa
.ce
Sleep statement
.sp 3
<statement number> Sleep <expression>
.sp 2
.li
	100 Sleep 5
.sp 2
This statement
causes BASIC to stop selecting this particular port and program in its
task selection logic for a period of seconds specified by the
expression.  This statement is usually used in conjunction with the
sys function option 11, which allows a program to know how many users
are on the system.  These two statements used together can allow a
program to run only if there are no other users on the system, or to
stop executing when a certain limit of other users is exceeded.
.sp 2
Example 100 causes the program to become dormant for 5 seconds.
.pa
.ce
Slot statement
.sp 3
.li
[<statement number>] Slot <expression>[,<expression>]
			     time           port
.sp 2
.li
	slot 2
	slot 1,5
.sp 2
This statement sets the amount of time this port, or a given port will
be given whenever the scheduler begins execution of the program on that port.
The expression representing the amount of time can range from .1 to 25.5
seconds inclusive in steps of .1.  The initial slot time for a port
is set by the account program and is usually set to 1 second.
.br
In short, the larger the slot time, the more time that is given to
this process before any other process is allowed to run.  Improper
use of this statement can bring multi user operation to a crawl.
This is a restricted statement and requires restriction bit 1 set.
If a port number is given, then restriction bit 14 must be set as well.
.sp 2
The first example will set the slot time for this port to be 2 seconds if
restriction bit 1 is set.
.br
The second example will set the slot time for port 5 to be 1 second if 
restriction bits 1 and 14 are set.
.pa
.ce
Sort statement
.sp 3
.li
[<statement number>] Sort file(<input file number>[,<first input record
	number>]),file(<work file number>),file(<output file number>,
	[,<first output record number>]),<number of records to sort>,
	<length of record in bytes>,<string variable for memory work
	area>,<sort key 1>[,<sort key 2>][,<sort key 3>][,<sort key 4>]
	[,<sort key 5>]

	100 Sort file(0),file(1),file(2,3),100,15,A$,1,-7
.sp 2
This statement will sort a "stripped" input file and produce a "tag"
file containing pointers to the input file in sorted order.  Numeric
and string information can be sorted.  The file to be sorted must first
be processed to create a "stripped" file which contains the record
number (pointer) followed by the information to be sorted in major to
minor field order.  The following information is then supplied on the
sort statement:
.in 11
.ti -3
1. Input file - the channel number which is presently open to
file containing the stripped input file and the record
number of the first record in that file to be processed
(default record number is 1).
.ti -3
2. Work file - the channel number of a file which can be used
by the sort program for intermediate storage of the stripped
file information.  This file should be at least as large as
the stripped file.
.ti -3
3. Output file - the channel number which is to contain the
pointer information and the record number at which the first
pointer should be written.  This file must be large enough
to contain one pointer for each record to be sorted.
.ti -3
4. The number of records to be sorted.
.ti -3
5. The length of a record in bytes.  This includes the pointer.
.ti -3
6. A string which has previously been dimensioned as large as
possible.  This string provides the in-memory working area for
the sort.  The larger this string, the faster the sort.
.ti -3
7. Sort keys - up to five numbers informing the sort as to
numeric vs. Alphabetic information in the input file.
.br
If the key is:
.in 27
.ti -11
positive - it is the number of numeric pieces of
information which are contiguous in the
input file.
.ti -11
Zero     - will be ignored.
.ti -11
Negative - it is the number of alphabetic bytes of
information which are contiguous in the
input file.  Note that the nulls at the end
of strings must be taken into account.
.qi
.sp 2
Example 100 will sort the input file found on channel 0.  The work file
is on channel 1, and the output file is on channel 2 starting at record
3.  There are 100 records of 15 bytes each (including the pointer). The
string A$ provides the in-memory working area, and each record contains
the pointer, one number, and 7 bytes of alphabetic information.
.pa
.ce
Stop statement
.sp 3
<statement number> Stop
.sp 2
.li
	100 Stop
.sp 2
This statement causes the termination of program execution. As opposed
to the "End" statement, this statement causes the message "stop at line X"
to be printed on the terminal instead of "Ready" (X is the
statement number of the "Stop" statement).
.sp 2
Example 100 causes program execution to terminate and the message
"stop at line 100" to be printed on the terminal.
.pa
.ce
Tinput statement
.sp 3
.li
<statement number> Tinput [<string>,]<expression>,<variable>[,<variable>...]
			   prompt	time	   destination ...
.sp 2
.li
	100 tinput 10,n
	200 tinput "enter number",T,N
.li
.sp 2
The "Tinput" statement is identical to the input statement, except that
it will "time out" after a given amount of time.  This makes it possible
to write a program that will not hang up if the user does not respond
to a question.  The time out period can range from 0 to 32767 seconds.
If the time out is 0 seconds, then tinput acts as a regular input
statement.
.br
Example 100 will input a number to be placed in variable N unless the
user does not respond within ten seconds.
.br
Example 200 will print the string "enter number" as a prompt, then
will wait T seconds before timing out.
.pa
.ce
Trace statement
.sp 3
[<statement number>] Trace <expression>
.sp 2
.li
	Trace 1
.sp 2
This statement toggles the debugging trace output.  When the
expression following the trace statement evaluates to a non zero
value, then the trace will be turned on.  If the expression
is zero, then the trace will be turned off.  When the trace is on,
each time a statement is executed, then the line number of
that statement is printed on the terminal.  This is useful in
following the execution of a program during debugging.
.sp 2
The example will turn on the debugging trace output until it is turned
off with a trace 0 statement.
.pa
.ce
Uplow statement
.sp 3
[<statement number>] Uplow
.sp 2
This statement causes the system to accept lower-case characters as is,
without first converting them to upper-case.  This is used when it is
desired to input lower case information from the terminal. 
The system is in this mode at sign-on.  This
function is reset by the "Lowup" statement (see above).
.pa
.ce
Write file statement
.sp 3
.li
[<statement number>] Write file(<file number>[,<record number>]),
				<expression>[,<expression>]...
.sp 2
.li
	100 Write file(3,N),A,B,C$
.sp 2
This statement causes the values of the expressions in its variable
list to be written on the file specified by the file number. If a
record number is specified, a seek will be performed to that record
before the data is written. Four bytes (of binary data) will be
written for every numeric expression found in the variable list,
and one byte for every character contained within a string variable
or literal encountered in the list followed by one byte containing
a null character. No pointers are written on the file to specify
the type of data (numeric or string), so care must be exercised
to read the data in the same order with a corresponding "Read"
statement when desired.
.sp
Record numbers can range from 1 to 32767 inclusive.  If a record of 0 is
given, then no seek will be performed and the file will be accessed
sequentialy.
.sp 2
Example 100 will seek to the record specified by the variable N on
file 3 and write four bytes for variable A, four for B, and one byte
for each character contained in C$, plus one byte for a null to
terminate the C$ string.
.pa
.ce
Zap statement
.sp 3
.li
[<statement number>] Zap <expression>,<string>
			    port       statement
.sp 2
.li
	zap 10,"bye"
	zap 5,"print "sign off now<7>""
.sp 2
This statement is used to insert a statement into the execution stream
of a given port.  "Zap" first issues an escape to the given port while
supressing any escape traps, then inserts the string into the execution
stream to be exectued on that port.  This makes it possible to terminate
a program that has hung up and left an escape trap on.
If the given port
is the current port, or is not signed on, then the zap command is ignored.
This is a restricted statement and requires restriction bit 14 to be set.
This is intended for use by the system operator to "Zap" a program that
has gone away with an escape trap enabled, or for sending a quick
message to another terminal
.sp 2
The first example will sign off port 10 regardless of what is running
at the time.
.sp
The second example will stop whatever is running on port five and
print the message "sign off now" then ring the bell.
.pa
.ce
Append command
.sp 3
Append <file name>
.sp 2
.li
	Append datast
.sp 2
This command functions exactly as the "Load" command except that no
implied "New" statement is performed. The specified file is located on
the disk and the program is loaded statement by statement just as if
the statements had been entered at the terminal keyboard. Therefore, if
there exists in the program in memory a statement with the same line
number as a statement that is read from the disk, the statement from
the disk will replace the statement in memory. If a statement from the
disk has a line number that falls between the line numbers of two
statements in memory, the disk statement will be placed between the two
statements in memory. One use of this command is to add a set of "Data"
statements to a program.
.sp 2
The example will cause the file "datast" to be located on the disk and
the statements in that file to be added to the statements of the
program which resides in memory.
.pa
.ce
Cont command
.sp 3
Cont
.sp 2
This command can be used to restart a basic program after interruption
(usually by the escape key).  The program will resume with the line
number that would have been executed had the user not interrupted it.
This line number is the same as the line number printed in the message
"stop at line X", except in the case of the "Stop" statement, when
execution will resume with the next line number. If user modifications
make it impossible to restart, an error message will be given. 
In this case the program may be resumed by supplying a "Run" command
with a statement number specified. If the
program has not been run, or if an "End" statement has been executed,
the "Cont" command will function exactly as a "Run" command with no line
number.
.pa
.ce
Direc command
.sp 3
Direc [<disk number>][<[account number]>][,<file name>]
.sp 2
.li
	Direc d1
	Direc [3000],PRN:
.sp 2
This command causes the directory of the user's private library to be
listed on the terminal. Files are listed five per line, plus an
indication of the number of disk sectors used in each file. Also given
is an indication of the "B" attribute.
The directory listing may be terminated at any time by pressing the
escape key.  If the user wishes to list the directory of another
account, the account code must follow the disk number and be enclosed
within square brackets.  The ability to list another account code is
governed by the user's account restrictions (see appendix D).  If a
file name is given, it must be preceded by a comma, and the listing
will be placed in that file.
.sp
If the account number given is -1, and the restriction word allows access
to other accounts, then all files on the given disk are listed.  Note:
the brackets surrounding the account number are necessary.
.sp 2
The first example will list the user's files which reside on d1 with
the listing going to the terminal.  The second example will list the
files for account 3000 which reside on the default disk, with the
listing going to the line printer.
.pa
.ce
Error command
.sp 3
Error <error number>
.sp 2
.li
	Error 5
.sp 2
This command causes a description of an error message to be printed on
the user's terminal. At the detection of an error, BASIC prints the
error number, the line number (if applicable), the error type and
the text of the error message on the terminal. If
the user wishes to view this information at other times,
this command should be entered.
Error messages are stored on the disk in the file "basicerrors" and
maintained by a text editor such as "Edlin".
.pa
.ce
Kill command
.sp 3
Kill
.sp 2
This command causes the BASIC system to be immediately aborted and a
return to DOS. This command may only be executed from the system
console, since DOS will communicate with the console immediately after
the command takes effect.
Also note that the abort is immediate, and any users using the system
will be stopped. The "Lines" command should be used to determine system
utilization before this command is issued. This command is only allowed
for users with bit 15 on in their restriction word (see appendix D).
.sp
The "Kill" command will flush any disk buffers belonging to the user 
issuing the "Kill" command, but will not flush buffers belonging
to other users, so it is important that all other users sign off
before issuing the "Kill" command.
.pa
.ce
Length command
.sp 3
Length
.sp 2
This command decodes the user's program line by line and prints the
total number of bytes needed to store the program as text. It also
divides this number of bytes by 512 and prints the number of sectors
needed to store the program on disk. This number of sectors may be
compared with the number printed in response to a "Direc" or "Lib" command
to decide which file should be used to contain the program.
.pa
.ce
Lib command
.sp 3
Lib [<disk number>][,<[account number]>][,<file name>]
.sp 2
.li
	Lib d2
	Lib [-1],PRN:
.sp 2
This command causes a listing of all programs in the public directory
to the user's terminal. If a disk number is given, the listing will
be of the public directory on that disk. If a disk number is not
given, the system default disk will be used. Files are listed three
per line, and an indication is given of the number of sectors used
by each file. An indication is also given as to the presence of the
"B" attribute.  If a file name is specified,
the output will be sent to that file.
.sp
If an account number is given, then the command acts identical to
the "Direc" command.
.sp 2
The first example causes a listing of all the public files on disk
two to be printed on the terminal.
.br
The second example sends a listing of all files on the current directory
to the line printer.  This is only allowed if restriction bit 13 is set.
.pa
.ce
Lines command
.sp 3
Lines
.sp 2
This command causes a listing of all users presently on the
system to be printed on the terminal. Also listed is the port number,
the priority and the slot time
for each user (see "Prty" and "Slot" statements).
.br
This command can be useful in determining system mix
which gives an indication of the efficiency of a compute-bound program.
Compute-bound programs will run less efficiently with a greater number
of users on the system.
.pa
.ce
List command
.sp 3
.li
List [beginning line number][-ending line number][,<file name>]

	List 100-
	List,PRN:
	List,d1:myprog
.sp 2
This command causes a listing of the program to be sent to the file
specified, or if no file is specified, to be sent to the user's
terminal. If only a beginning line number is specified, only that
line will by listed. If a beginning line number followed by a dash
is specified, the listing will begin at that line number.
If both beginning and ending line numbers are specified, the listing
will contain only that range of lines.
.sp 2
The first example will list the user's program starting with line 100
on the terminal.
.sp
The second example will list the entire program on
the line printer.
.sp
The third example will store the
entire program on the disk file on disk number 1 which has the name
"myprog" (preceded by the user's account code-the list command may
not be used to store programs in public files). Note that the third
example does not cause a program to be loaded and then listed to the
terminal as in other BASIC's, but instead sends the listing of the
program which the user had already loaded to the file specified.
.pa
.ce
Load command
.sp 3
Load <file name>
.sp 2
.li
	Load myfile
.sp 2
This command causes a program to be loaded from the specified file.
BASIC first performs an assumed "New" command to clear memory, then loads
the specified program. The program may either be in text form (as with
the "List <file name>" command) or in binary form (as with the "Save
<file name>" command). "Load" will automatically determine the format
of the file and then load the program from the file. Binary programs
must be loaded from files which have the "B" attribute (see the "Create"
command).  If the designated file is not on the directory of the specified
disk, an error message will be given, but the program which was previously
in memory will already have been lost by the assumed "New".
.sp 2
The example will load the program contained in the file "myfile" on the
default disk.
.pa
.ce
Psave command
.sp 3
Psave <file name>
.sp 2
.li
	Psave test
.sp 2
This command functions exactly as the "Save" command (see below),
except that files
which are preceded by the public account number (0) are used instead of
files preceded by the user's account number.
.sp 2
The example saves the program in memory into the file named "test"
in binary form. The file "Test" must have been created with the "B"
attribute (see the "Create" statement).
.pa
.ce
Public command
.sp 3
Public [beginning line number][-ending line number],<file name>
.sp 2
.li
	Public,stat
.sp 2
This command functions exactly as the "List" command (see above),
except that files
which are preceded by the public account number (0) are used instead of
files preceded by the user's account number.
.sp 2
The example lists the user's program in text form into the
public file named "stat".
.pa
.ce
Renumb command
.sp 3
Renumb [<increment>][,<beginning line number>]
.sp 2
.li
	Renumb 100,2000
.sp 2
This command causes a program to be renumbered using the increment
given in the first number (or 10 if no number is
given), and beginning with the statement number given in the
second number (or 10 if no number is given). If the
renumbering process as stated causes statement numbers in the program
to run beyond statement 65535 (maximum for the system), the command
will be repeated with both parameters set to one. Renumbering affects
line numbers, and statement numbers in "Goto", "Gosub", "On", "Restore"
and "If" statements.
.sp 2
The example will renumber the program in increments of 100 with the
first statement numbered 2000.
.pa
.ce
Run command
.sp 3
.li
[<statement number>] Run [<file name>]

	100 Run
	Run
.sp 2
This command causes BASIC to change from the edit mode of operation
to the execution mode of operation. If no line number is specified, all
variables will be set to zero and unassigned, all files will be closed,
all stacks will be cleared (gosub, for-next, and function), and
execution will begin with the lowest numbered statement of the program.
If a line number is specified, none of the above will be done, (that
is, all variables will remain assigned and will contain their previous
values, and all stacks will remain as set), and execution will begin
with the specified statement. Any statement number may be specified,
but care should be taken when altering the course of a program with
this command. If a "Return" statement is bypassed by means of an
interruption of the program and re-commencement using this command,
but skipping the "Return" statement, one position on the gosub stack
will be lost to the program until the next "New" command or "Run"
command without a statement number. Also, the next "Return" statement
encountered will cause control to be passed to the statement
corresponding to the "Return" statement that was ignored.  If a file
name is specified in the "Run" command, that file will be loaded
(exactly as in the "Load" command) and executed.  A statement
number will be ignored in this case.
.pa
.ce
Save command
.sp 3
Save <file name>
.sp 2
This command causes the program which is currently in memory to be saved
in binary form on the disk in the file specified.  This command is much
faster than the corresponding "List" command, and will store the program
in less space than the list command.  However, programs stored in this
manner can be accessed only by BASIC.  No editors
can read or change any program stored in this manner.  Also,
BASIC performs an automatic "Clear" before saving a program in binary
(see "Clear" statement), which "List" does not.  This means that after
issuing a "Save" command, the user may not use the "Run" command with a
statement number or the "Cont" command.  Only a "Run" without a statement
number will be successful.  Finally, a program which is saved with this
command cannot be appended to another program already in memory (see
"Append" command).  In order to determine the number of sectors required
for a program stored in binary form, use the "Size" command described
below.
.sp 
The file referenced must have been created with the /b attribute or
an error will occur.  (see the "Create" statement).
.sp
If the file is not large enough to hold the "Saved" program, then
it will automaticly be expanded to fit.  This is the only option
under BASIC that will expand a file, but should not be used
to expand data files.
.pa
.ce
Show command
.sp 3
Show <terminal number>
.sp 1
	Show 3
.sp 2
This command logically connects your terminal in parallel
to the terminal of the given user number.  All characters
displayed on one terminal will be displayed on the other.
The show command stays in effect until CTRL A is entered on
the originating terminal.  This command is restricted and
requires restriction bit 14 to be set (see appendix D).  This is
intended for use by the system operator.  If two users both
use the show command such that they show each other
either directly or indirectly, the output will become very
confusing until both users enter CTRL A.
.sp 1
The example causes all characters displayed on user 3's
terminal to be shown on the terminal of the user issuing the
command, and all characters typed on this terminal to be
displayed on user 3's terminal.
.sp 1
This command is often used to run a program in
background by signing on an unused terminal via the
"Sign" statement, then showing that terminal with the
"Show" command and running the program.
.pa
.ce
Size command
.sp 3
Size
.sp 2
This command causes the number of bytes used by the current program,
and the number of bytes available in the user space, to be printed on
the user's terminal. The first value is dependent on the number of
statements in the program and the number of bytes needed by the user's
variables, lists, and matrices, and the second value is a constant.
Also, the number of sectors required for a binary save of the current
program is printed.  See the "Save" command.
.pa
.ce
Time command
.sp 3
Time
.sp 2
This command causes the terminal time information (which is given in
response to a "Bye" command also) to be printed on the user's terminal.
The time given will be the number of cpu seconds used by the user since
sign-in time, and the current date and time-of-day.
.pa
.ce
Appendix A
.sp 3
The following table gives the ASCII characters and their equivalent
decimal values. These decimal values may be given within angle brackets
(<>) in any string literal to represent the given character.
.sp 2
.li
value   char !  value   char !  value   char !  value   char
-----   ---- !  -----   ---- !  -----   ---- !  -----   ----
             !               !               !
  0     nul  !   32     space!   64     @    !   96     `
  1     Soh  !   33     !    !   65     A    !   97     a
  2     stx  !   34     "    !   66     B    !   98     b
  3     etx  !   35     #    !   67     C    !   99     c
  4     eot  !   36     $    !   68     D    !  100     d
  5     enq  !   37     %    !   69     E    !  101     e
  6     ack  !   38     &    !   70     F    !  102     f
  7     bel  !   39     '    !   71     G    !  103     g
  8     bs   !   40     (    !   72     H    !  104     h
  9     ht   !   41     )    !   73     I    !  105     i
 10     lf   !   42     *    !   74     J    !  106     j
 11     vt   !   43     +    !   75     K    !  107     k
 12     ff   !   44     ,    !   76     L    !  108     l
 13     cr   !   45     -    !   77     M    !  109     m
 14     so   !   46     .    !   78     N    !  110     n
 15     si   !   47     /    !   79     O    !  111     o
 16     dle  !   48     0    !   80     P    !  112     p
 17     dc1  !   49     1    !   81     Q    !  113     q
 18     dc2  !   50     2    !   82     R    !  114     r
 19     dc3  !   51     3    !   83     S    !  115     s
 20     dc4  !   52     4    !   84     T    !  116     t
 21     nak  !   53     5    !   85     U    !  117     u
 22     syn  !   54     6    !   86     V    !  118     v
 23     etb  !   55     7    !   87     W    !  119     w
 24     can  !   56     8    !   88     X    !  120     x
 25     em   !   57     9    !   89     Y    !  121     y
 26     sub  !   58     :    !   90     Z    !  122     z
 27     esc  !   59     ;    !   91     [    !  123     {
 28     fs   !   60     <    !   92     \    !  124     |
 29     gs   !   61     =    !   93     ]    !  125     }
 30     Rs   !   62     >    !   94     ^    !  126     ~
 31     us   !   63     ?    !   95     _    !  127     del
.pa
.ce
Appendix B
.sp 3
.ce
Derived Functions
.sp 2
The following functions can be calculated using the BASIC functions:
.sp 2
.li
Function                Function expressed in terms of BASIC functions
--------                ----------------------------------------------

secant                  sec(X)=1/cos(X)
cosecant                csc(X)=1/sin(X)
cotangent               cot(X)=1/tan(X)
inverse sine            arcsin(X)=atn(X/sqr(-X*X+1))
inverse cosine          arccos(X)=-atn(X/sqr(-X*X+1))+1.5708
Inverse secant          arcsec(X)=atn(sqr(X*X-1))+sgn(X)-1)*1.5708
Inverse cosecant        arccsc(X)=atn(1/sqr(X*X-1))+(sgn(X)-1)*1.5708
Inverse cotangent       arccot(X)=-atn(X)+1.5708
Hyperbolic sine         sinh(X)=(exp(X)-exp(-X))/2
hyperbolic cosine       cosh(X)=(exp(X)+exp(-X))/2
hyperbolic tangent      tanh(X)=-exp(-X)/(exp(X)+exp(-X))*2+1
hyperbolic secant       sech(X)=2/(exp(X)+exp(-X))
hyperbolic cosecant     csch(X)=2/(exp(X)-exp(-X))
hyperbolic cotangent    coth(X)=exp(-X)/(exp(X)-exp(-X))*2+1
inverse hyperbolic
        sine            arcsinh(X)=log(X+sqr(X*X+1))
inverse hyperbolic
        cosine          arccosh(X)=log(X+sqr(X*X-1))
inverse hyperbolic
        tangent         arctanh(X)=log((1+X)/(1-X))/2
inverse hyperbolic
        secant          arcsech(X)=log((sqr(-X*X+1)+1)/X)
inverse hyperbolic
        cosecant        arccsch(X)=log((sgn(X)*sqr(X*X+1)+1)/X)
inverse hyperbolic
        cotangent       arccoth(X)=log((X+1)/(X-1))/2
.pa
.ce
Appendix C
.sp 3
.ce
Support Files
.sp 2
Included on the BASIC distribution diskette are several files necessary
to operate the system:
.sp 2
.li
	d0:fbasicac.cts
	d0:fbasiclo.gs
	d0:fbasicer.ror
	d0:fbasicme.sgs
.sp 2
The file basicaccts contains the account information used by the system
accounting programs and the sign in procedure.  This file is maintained
by the "account" program.
.sp
The file basiclogs
contains a log of system start up, user sign on and
sign off, messages to the system operator created by the "Log" statement,
and system kill.  As messages are written to the log file, they are
added until the end of file is reached.  When the end of file is
reached, then the messages will "wrap" around to the beginning of the file
and begin overwriting the oldest messages.  To expand the log file, 
"Create" a file with the number of records for your desired history
allowing 8 entries per sector. Then delete the old file and rename
the new file to basicerror.  Then write a 0 in the first record to
initialize the last record used pointer.
The contents of this file are maintained and reported by the program
"log".  For further information on record format of basiclogs, see
the program listing.
.sp
The file basicerror contains the
system error messages displayed by the "Error" command.
Each error message in basicerror consists of two or more lines.
The first line contains the error number, a comma, and the error type.
The remaining lines until the next double carriage return are the text
of the error message as reported by the "Error" command.
.sp
The basicmsgs
file contains the banner message printed when escape is pressed during
the log in process, and the 'hello' message printed after a succesful
sign on.  The two messages in basicmsgs can be edited with any text editor
and are both terminated by a double carriage return.
.sp
If any of the above files are not found on the directory d0:, then
BASIC will not be able to run, and will exit to DOS without any messages.
.sp
See appendix E for an explanation of file naming conventions.
.pa
.ce
Appendix D
.sp 3
.ce
Account Program
.sp 2
This program is used to add, delete, or list the contents of the
basicaccts file. Each account number entry contains the user's account
number (4 digits in decimal), the user's password, the user's
restriction indicators, and a word giving the number of times that
user has signed-in since his account number was added.
Execution is self-explanatory. The restrictions are entered as a list
of ones and zeros from bit 15 to bit 0.  The meanings of the bits are:
.sp 2
.li 
	bit	 meaning if set to 1
	--- 	-------------------
	15	Allow "Kill" command.
	14	Allow "Zap", "Prty", "Slot", "Show", "Sign" to other ports.
	13	Allow user to list any directory.
	12	Allow "Create", "Delete", "Rename".
	11
	10	Allow user to save programs on files.
	9	Allow "Public" command.
	8	Allow "Hold" statement.
	7	Allow user to list saved programs.
	6
	5	Allows user to open any file (basic or non-basic).
		The user may give up to 10 characters for a file
		name if he has this bit=1.
		Note: when this bit is set, then the user account
		number must be given as part of the file name when
		accessing any file using "Create" or "Delete".
		See Appendix E for pc-dos file conventions.
	4	Allow "Prty" and "Slot" statements.
	3 
	2 
	1 
	0	No log of sign-in, out for this user.
.pa
.sp 3 
.ce
Appendix E
.sp 3
.ce
pc-dos file conventions
.sp 2
Under pc-dos, BASIC references all files in the following form:
.li
	dn:auuuuXXXXXXX
.br
where 'dn:' represents an optional disk number corresponding to a pc-dos
directory path, 
'a' is either 'B' for a basic program, or 'F' for a data file.  'uuuu'
represents the user account number or 0, and XXXXXX represent the given file
name.  Note, the file attribute is supplied automatically by BASIC
during the create, and open so
it does not need to be included in the name passed to any BASIC statement.
The file name will run over into the file extent as viewed in
a pc-dos "dir" command.
.sp
Pc-dos 2.0 path names are supported by the use of a disk number.  Set up
in the program environment are variables that describe the path name
to a specific "disk" as viewed by basic.  To provide access to a specific
directory or disk, enter a pc-dos "set" command to enter the path for that
directory.
.sp 2
.li
	examples
		set D0=a:
		set D1=c:\basic
.sp 2
There must be one set command for each disk path that will be accessed
through BASIC.  This can be done in the AUTOEXEC.BAT file to set the
disks up at power up.
.sp
BASIC does not put a limit on the number of directories accessed, via the
set commands, but it is likely that pc-dos will give an "out of environment
space" message if too many environment variables are set.
.sp
BASIC is shipped with a single
directory set up as d0: which is named "dk0".  There is a corresponding
entry in the environment D0=\dk0. To allow access to other directory
paths, add other environment entries for D1 D2 etc...
.sp
Pc-dos files that are to be used by BASIC users must be created and allocated
before they can be used.  Because Snowcrest BASIC supports multiple users,
it is possible that two users can access the same file simultaneously.
If one user expands the file, the other user may not be notified. 
To eliminate the possibility of lost data, the file is allocated to
the maximum size at the time the file is created.  In addition to providing
data integrity, this also improves file access times because the file is
allocated on a contiguous section of the disk.
.sp
The file name should have the user's account number as the
first four characters and the name he
wishes as the next six.  Example:  1000game would be a file named
'game' for user 1000.  Files that are to be public, that is, available
to all users, should have a single zero as the first character of the
name, 0tictoe.  When searching for a file, BASIC will first search
for a match under the user's account code, then under the public
account code, then (if the user has bit 5=1 in his restriction word)
with no account code.  User account codes must always be four digits
the first of which may not be zero.
.sp
If the file is created with the "b" attribute,
it may not
be opened (via the 'open statement').

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0410

     Volume in drive A has no label
     Directory of A:\

    DIREC    DOC      1152   7-15-85   8:49p
    FILES410 TXT       755  10-21-85  11:56a
    USERMAN  DOC    125824   7-16-85   9:19p
    B0ADVCLR          1536   9-18-84   4:19p
    B0ADVNT          25600   7-15-85   7:36p
    B0BASE             526   9-18-84   5:22p
    B0CLSDST          1724   9-18-84   6:43p
    B0DATE            1894   9-18-84   6:45p
    B0EDITOR          5878   9-18-84   6:35p
    B0MESAGE           512   9-18-84   5:21p
    B0NIM             1270   9-18-84   5:20p
    B0NUMBER           512   9-18-84   5:16p
    B0OTHELO          4840   9-18-84   5:19p
    B0TICTOE          3084   9-18-84   5:20p
    F0ACTDF           1024   9-18-84   4:50p
    F0ADINFO          6656   9-18-84   4:52p
    F0ADVTX         110080   9-18-84   4:51p
    F0CLSTX           1536   9-18-84  10:53p
    F0HINTS           1024   9-18-84   4:51p
    F0LIQAS           1536   9-18-84   4:51p
    F0LTEXT           2560   9-18-84   4:29p
    F0MTEXT           2560   9-18-84   4:51p
    F0OBJECT          1024   9-18-84   4:48p
    F0OBJLOC          1024   9-18-84   4:50p
    F0RTEXT           2560   9-18-84   4:50p
    F0STEXT           2560   9-18-84   4:30p
    F0TRAVL           5632   9-18-84   4:35p
    F0VOCAB          10240   9-18-84   4:48p
           28 file(s)     325123 bytes
                           26624 bytes free
