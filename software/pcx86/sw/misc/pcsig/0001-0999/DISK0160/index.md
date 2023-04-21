---
layout: page
title: "PC-SIG Diskette Library (Disk #160)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0160/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0160"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC FIRING ISSUE #2"

    This is the second issue of PC Firing Line, with the magazine's official
    title.  It has been positioned as the underground newspaper for the IBM
    user.  You will be presented with the untold tales and in-depth
    programming aids.  Some of the articles are ADA, Assembly routines,
    LISP, Fortran, and items not written about by IBM.  It also contains
    many sample program listings with accompanying documentation.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $12.00
    
    File Descriptions:
    
    ???      TXT  Various information and reviews (22 files).
    ADABOOK  REV  Book reviews on 6 different ADA books.
    GRABBAG  C    Source code for USQ.C.
    ITOP     LSP  Routine converts infix to prefix mathematical expressions.
    LISP1    TXT  Various mathematical utilities.
    LIST1    ADA  Various mathematical utilities
    LIST1    ASM  Various mathematical utilities.
    LIST1    BAS  Various mathematical utilities
    LIST1    C    Various mathematical utilities
    LIST1    FOR  Various mathematical utilities.
    PCFL     EXE  PC-Firing Line main program.
    PRETTY1  COM  Printer interface routine.
    READISCO PE   Documentation for READISCOPE program.
    SPLITA   BAT  Splits this diskette for side sided copying.
    WRITERS  GDE  Text file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADA1.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║			   The Ada Tutorial - Part I			      ║
║									      ║
║				      by				      ║
║									      ║
║			      George Gordon Noel			      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       In the last issue we looked at Ada through a wide-angle
	  lens,	 examining  the	 history  and  key  features  of   the
	  language.  It	is  time to zoom-in  for a closer  look.  This
	  article is the  first	in a  series of	Ada  tutorials,	and if
	  you follow along closely,  and practice what you  learn with
	  an  "Ada  compiler,"  before  long  you  will be writing Ada
	  programs.  By	the  time this series  concludes, you will  be
	  privy	to some	of  the	most advanced programming  concepts in
	  the history of computers.

┌──────────────────────────────────┐
│ The Program AVERAGE		   │
└──────────────────────────────────┘

	       If you are  not firmly grounded	in the basics  of Ada,
	  the more esoteric parts of the language (and there are  lots
	  of them) will	leave  you bewildered.	Therefore, this	 first
	  installment is  devoted to  the simple,  rock-bottom details
	  that appear in  every	Ada program.   We investigate some  of
	  these	details	through	 a program that	 finds the average  of
	  two integers.


	       with TEXT_IO; use TEXT_IO;
	       procedure AVERAGE is
		  package INT_IO is new	TEXT_IO.INTEGER_IO (integer);
		  use INT_IO;
		  FIRST_NUMBER:		integer;
		  SECOND_NUMBER:	integer;
		  AVG:			integer;
	       begin
		  put ("Enter a number: ");
		  NEW_LINE;
		  get (FIRST_NUMBER);
		  put ("And another number: ");
		  NEW_LINE;
		  get (SECOND_NUMBER);
		  AVG := (FIRST_NUMBER + SECOND_NUMBER)	/ 2;
		  put ("The average is: ");
		  NEW_LINE;
		  put (AVG);
	       end AVERAGE;


	       This program prompts  the user for  a number, reads  an
	  integer from	the standard  input device  into the  variable
	  FIRST_NUMBER,	repeats	this process for SECOND_NUMBER,	 sums,
	  divides, and places the result in the	variable AVG, which is
	  printed along	with a final message.

	       Aside from the curious  first, third, and fourth	 lines
	  of this  program, you	 might think  that we  are working  in
	  Pascal or  some other	 familiar language.   We won't examine
	  the details of these three lines until later in this series,
	  except to  say that  any program  that performs input/output
	  operations  involving	 integer  numbers,  must contain these
	  three	lines of code.

	       Now, let's  examine the  features of  this program that
	  are similar to features in existing, better known languages.

	       Our AVERAGE program is  an example of a	"procedure," a
	  program  unit	 familiar  from	 PL/1  and other languages.  A
	  procedure is a convenient way	of grouping together data  and
	  commands for implementing some specific job.

┌──────────────────────────────────┐
│ The Declaritive Portion	   │
└──────────────────────────────────┘

	       AVERAGE is divided into a "declarative part," which  is
	  the first indented  region of	the  program, and a  series of
	  statements in	the second indented region.  (According	to the
	  formal  rules	 of  Ada,  there  are  actually	 four distinct
	  sections in this program.  We	won't be meeting the remaining
	  two for quite	some time.)

	       The  declarative	 part  is  where  you  establish   the
	  existence of data objects (and other items, as we will see),
	  and will be covered in  my next installment.	For now,  just
	  observe that the  last three lines  in the declarative  part
	  create three integer variables.

	       The statements grouped between the words	begin and  end
	  are commands that  implement the code	 of AVERAGE.  The  get
	  statement  receives  information  from  the  standard	 input
	  device  (presumably  a  keyboard),  and  the	put  statement
	  transmits  information   to  the   standard  output	device
	  (presumably a	display	screen.)

┌──────────────────────────────────┐
│ NEW_LINE and :=		   │
└──────────────────────────────────┘

	       The NEW_LINE command sends  a carriage return and  line
	  feed to the screen.

	       The  final  kind	 of  statement	in this	example	is the
	  familiar assignment  statement in  line 15.	The assignment
	  operator is  the :=  symbol, which  Ada shares  with Pascal,
	  Algol, and Modula II.

┌──────────────────────────────────┐
│ Use of Semicolons		   │
└──────────────────────────────────┘

	       Notice  that   most  lines   in	the   example  end  in
	  semicolons.  The use of semicolons is	more consistent	in Ada
	  than in  Pascal.  Semicolons	"terminate" statements  in Ada
	  rather than "separate" them  as in Pascal.  Semicolons  only
	  come after statements	and  declarations.  The	word begin  is
	  not  a  statement,  nor  is  the  second  line  (called  the
	  "procedure specification") that ends with the word is.   The
	  program  as  a  whole	 ends  with  a semicolon rather	than a
	  period, as it	would in Pascal.

	       In our example program, the procedure name, AVERAGE, is
	  repeated before the final semicolon.	This is	not  required,
	  but it is almost universal practice among Ada	programmers.

┌──────────────────────────────────┐
│ Reserved Words		   │
└──────────────────────────────────┘

	       Like many other languages, Ada has "reserved words"  or
	  "keywords" that  have a  fixed meaning  which the programmer
	  can not modify.  In  the examples in this  article, reserved
	  words	 appear	 in  lower  case  to distinguish them from the
	  "user  defined  identifiers,"  or  symbols  created  by  the
	  programmer, which  are in  upper case.   (The	I/O procedures
	  get and put are library routines, as in C, meaning that  the
	  words	get and	 put are not  reserved.	 They occur  so	often,
	  however, that	programmers usually  write them	in lower  case
	  to avoid constantly banging the shift	key.)  If you  attempt
	  to  redefine	a  keyword  -  for  instance,  if you tried to
	  declare an  integer variable	called "procedure"  - an error
	  message would	be issued.

	       Keywords,   however,   may   be	 imbedded   in	larger
	  identifiers.	 This  means  that  you	 could have an integer
	  variable  called  DOLLARS  even  though  the	word "do" is a
	  keyword in Ada.

┌──────────────────────────────────┐
│ Identifiers			   │
└──────────────────────────────────┘

	       Ada identifiers can consist of letters of the alphabet,
	  numbers, and the underscore character.  You can make them as
	  long as you like (indeed, Ada	identifiers tend to be	wordy)
	  but  they  must  start  with	a  letter.   X2	is a legal Ada
	  identifier but  2X is	 not.  Use  underscore characters  for
	  readability, but remember they can not be the	first or  last
	  character  in	 an  identifier,  and  they  can  not	appear
	  consecutively.  FIRST_NUMBER and TEXT_IO are fine but	_OUCH,
	  WRONG_,  and	OH___MY	 are  illegal.	 Also,	Ada  does  not
	  distinguish between  upper and  lower	case;  the identifiers
	  Harold, HAROLD, harold, and hArOlD are identical in Ada.  We
	  will,	 however,  use	the  convention	 of  writing  all user
	  defined identifiers in upper case.

	       Aside from identifiers, the  most common	symbols	in  an
	  Ada  program	are  numbers  and  punctuation.	 Let's look at
	  numbers.

┌──────────────────────────────────┐
│ Ada Data Types		   │
└──────────────────────────────────┘

	       One of the most imposing	 things	about Ada is the  huge
	  number of data types.	 Although other	languages have integer
	  and	floating-point	 numbers,   characters,	  and  Boolean
	  (true/false)	data  types,  Ada  goes	 all  out  with	a vast
	  supermarket of data types,  both ordinary and	exotic.	  (Ada
	  is sometimes	criticized as  a "kitchen  sink" language that
	  attempts to be all things to all people.)  Since data	 types
	  will be the  topic of	my  next two columns,  we only briefly
	  look	at  numbers  now,  mostly  just	 to  see  how they are
	  written.

	       Like other languages, numbers  in Ada are divided  into
	  two categories - integers,  or whole numbers,	and  reals, or
	  numbers with a fractional part.  You can distinguish between
	  them because reals have a decimal point and integers	don't,
	  just like in FORTRAN.


	       0, 12, -99, 32767  -- integers

	       0.0, 3.14, -0.025  -- reals


	       Both kinds of numbers can  be preceded by a minus  sign
	  to indicate that  the	number is  negative or by  an optional
	  plus sign if	it is positive.	  Multi-digit numbers of  both
	  varieties can	be made	easier to read by using	the underscore
	  character;  the  number  1000000  is	the same as the	number
	  1_000_000.

┌──────────────────────────────────┐
│ Based	Numbers			   │
└──────────────────────────────────┘

	       Ada allows you to write numbers in bases	other than ten
	  by using a special "based number" notation.  The base of the
	  number system	is written, followed by	a # symbol, the	number
	  in question, and another #.  For example, 8#32# is a	number
	  in base 8 which equals (3 * 8)  + (2 * 1) or 26 in base  10.
	  The number 2#1010# is	a  binary (base	2) number equal	 to 10
	  in decimal.  Ada lets	you use	any number system from base  2
	  to  base  16.	  In  bases  11	 through  16,  Ada employs the
	  "superdigits" A, B, C, D, E, and F to represent the  numbers
	  10 through 15.  For instance,	the based number 16#1A#	equals
	  (1 * 16) + (10 * 1), or 26 in	base 10.

	       Based numbers are mostly	used in	programs that interact
	  very closely with the	underlying hardware.  This means  that
	  the  number  systems	commonly  associated  with computers -
	  binary, octal	(base 8), and hexadecimal (base	16) - will  be
	  used most often.

┌──────────────────────────────────┐
│ Arithmetic Operators		   │
└──────────────────────────────────┘

	       Ada  has	 a   number  of	 "operators"   for  performing
	  calculations:	The arithmetic operators, +, -,	*, and /,  are
	  the same as in other languages.  There is also a ** operator
	  for exponentiation, an abs operator for taking the  absolute
	  value	 of  a	number,	 a  rem	 operator  for	computing  the
	  remainder after  division, and  a mod	 operator for  modular
	  arithmetic.


	       2 ** 3	  -- equals 8
	       abs -60	  -- equals 60
	       12 mod -5  -- equals -3
	       12 rem -5  -- equals 2


	       The differences between the  mod	and rem	operators  are
	  too subtle to	explain	here.  If you are interested, see  the
	  Ada Language Reference Manual	or ALM (reviewed in this issue
	  of PCFL/PCUG.)

	       Like  other  languages,	numeric	 expressions  can   be
	  arbitrarily  complicated,  and  can  include	variables like
	  FIRST_NUMBER	and  numeric   "literals"  like  5   or  29.7.
	  Expressions are evaluated according to the precedence	of the
	  operators,  which  is	  similar  to  other   languages,  and
	  parentheses may be used to change the	order of evaluation.

┌──────────────────────────────────┐
│ Ada's Strong Typing              │
└──────────────────────────────────┘

	       Numeric	expressions  should  only  involve one kind of
	  number -  integers should  be	kept  with integers  and reals
	  with	reals.	 This  is  because  Ada	 is a "strongly typed"
	  language, or one that	does  not allow	mixing of data	types.
	  (In this respect, Ada	is like	Pascal and unlike C,  FORTRAN,
	  and PL/1.)  Thus, it is acceptable to	write 1	+ 2, but (1  +
	  2.0) is not acceptable because an integer and	a real	number
	  are mixed.

	       Strong typing has effects  throughout Ada. You must  be
	  certain  that	 the  data  type  of  the  expression  on  the
	  right-hand side of an	assignment statement matches the  data
	  type of the target variable on the left side:


	       AVG := 2;  -- okay since	AVG is an integer

	       AVG := 2.0; -- gives an error message


	       As another example,  the	NEW_LINE command  appearing in
	  our first example program  may be supplied with  an optional
	  "parameter,"  in  parentheses,  to  indicate  how many blank
	  lines	are to be printed.  The	statement NEW_LINE prints  one
	  blank	 line,	while  NEW_LINE(3)  prints  three blank	lines.
	  Since	it would be  meaningless to print a  fractional	number
	  of blank lines, NEW_LINE expects an integer parameter.

┌──────────────────────────────────┐
│ Relaxing Strong Typing	   │
└──────────────────────────────────┘

	       It is not always	possible to live by Ada's strict rules
	  regarding data types.	 On occasion,  you may not be able  to
	  avoid	 adding	 integers  and	real  numbers.	To help	out in
	  these	times of  need,	Ada has	 limited facilities for	 "type
	  conversion" - changing a value of one type to another  type.
	  This	is  done  by  writing  the  value  to  be converted in
	  parentheses, preceded	by the name of the desired type.   The
	  following statement converts a floating-point	number to type
	  integer, adds	the new	 integer value to two  other integers,
	  and assigns the result to an integer variable.


	       AVG := AVG + 15 + integer (30.9);


	       The  effect  of	type  conversion,  along  with	 other
	  features  of	numbers	 in  Ada,  is demonstrated in the next
	  example.


	       procedure PLAY_WITH_NUMBERS is
		  X: integer;
	       begin
		  -- the first two statements in this program
		  -- demonstrate how different numeric notations
		  -- can be combined in	one expression
		  X := 10000 + 10_000;	  -- X equals 20000
		  X := 5 + 8#24#;	  -- X equals 25
		  -- the next statement	demonstrates integer division
		  X := 5 / 2;		  -- X equals 2
		  -- now let's see some type conversion
		  X := 2 * integer (2.7); -- X equals 6
	       end PLAY_WITH_NUMBERS;


	       First,  notice  that  this  program  does  not  do  any
	  input/output.	 The lack of  I/O eliminates the need  for the
	  TEXT_IO  facilities  that  made  the	last  program  look so
	  mysterious.

	       This  program  also  includes  comments.	  Recall  that
	  comments begin with a	double	dash and extend	to the	end of
	  the line.  A	comment	must either  occupy an entire  line or
	  come at the end of the line.

	       The first two assignments  show that Ada	does  not care
	  how  integer	numbers	 are  written  -  you can mix ordinary
	  integers  with  based	 numbers  and  numbers	including  the
	  underscore character.

	       The third assignment demonstrates that if the  quotient
	  of  two  integers  is	 not  an  integer,  Ada	 lops  off the
	  fractional part to produce an	integer	result.

	       The opposite  happens with  type	conversion.   When you
	  change a real	number to  an integer, Ada rounds up  or down,
	  as indicated.	 The expression	"integer (1.1)" equals 1 while
	  "integer (1.7)" equals 2.

┌──────────────────────────────────┐
│ Conclusions			   │
└──────────────────────────────────┘

	       The parts of Ada	that  we met in	this installment  were
	  not flashy or	even that different from other,	more  familiar
	  languages.   They  are,  however,  important building	blocks
	  that will  act as  a foundation  for our  coming work.   The
	  flashier parts of Ada	will start appearing in	the next issue
	  when we begin	our discussion of data types.  (A more complex
	  example - the	famous Byte magazine prime number benchmark  -
	  appears in the "Ada Programs" section of this column.)

	       As  always,  your  questions  about  Ada	 and  critical
	  comments on these  articles are welcome.   Send them to  the
	  author care of PCFL/PCUG.




		     ┌──────────────────────────────────┐
		     │ File Name:   ██	 ada1.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## ASM1.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║			Introduction to	Assembly Language		      ║
║									      ║
║				      by				      ║
║									      ║
║				  Bill Salkin				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       This month's  column discusses  BIOS and  DOS routines,
	  and introduces the DEBUG program.

┌──────────────────────────────────┐
│ DOS Function Calls		   │
└──────────────────────────────────┘

	       DOS function calls are  similar to subroutine calls  in
	  other	languages, and perform	many useful services such  as:
	  display  a  string  on  the  screen,	accept	input from the
	  keyboard,  perform  file  I/O,  delete  files, rename	files,
	  determine  the  time	and  date  stamp  on  a	file, read the
	  directory of a disk, and others.

	       In  FORTRAN,  the  subroutine  SUB  is  invoked	by the
	  statement "CALL  SUB", and  the code  in this  subroutine is
	  then	executed.   DOS	 function  calls  are  invoked	by the
	  statement "INT  21H" (interrupt  21 hex),  but INT  21H is a
	  subroutine  with  many  entry	 points	 (entrances).	It has
	  numerous  options,  with  each  option  corresponding	 to  a
	  different  function  or  service.   For example, the program
	  DISPLAY, presented in	 last month's sample  program section,
	  displays a string on the screen by using service #9:


	       MOV   AH,9	     ;REQUEST "PRINT STRING" SERVICE
	       MOV   DX,OFFSET STRINGY ;DX HAS THE ADDRESS OF STRINGY
	       INT   21H	     ;INVOKE "PRINT STRING" SERVICE


	       The service number  is placed in	 the AH	register,  and
	  INT  21H  is	invoked	 to  begin  execution of the requested
	  service.

	       DOS  function  calls  (often  referred  to as "INT 21H"
	  calls)  are  listed  in  the	appendix  "DOS  Interrupts and
	  Function Calls" of the  DOS manual.  Study that  section and
	  familiarize  yourself	 with  the  many  services  that   are
	  available.   In  particular,	verify	that  #9 is the	proper
	  value	for  printing a	 string.  You  may not	understand the
	  explanations,	but note how  the statement of service	#9 was
	  translated and used in DISPLAY.


	       Think:	 DOS function call   =	 INT 21H

┌──────────────────────────────────┐
│ BIOS Calls			   │
└──────────────────────────────────┘

	       The BIOS	 is a  collection of  important	services  that
	  deal	directly  with	the  hardware,	such  as  the 6845 CRT
	  controller.  The BIOS	is stored on a ROM chip	in the PC.

	       Some BIOS services that programmers can access are:

		┌──────────────────────────────────────────────────┐
		│						   │
		│ 1. equipment	determination  (how  many disk	   │
		│    drives are	attached to the	system?, is  a	   │
		│    color monitor present?,etc.)		   │
		│						   │
		│ 2. read characters from the keyboard		   │
		│						   │
		│ 3. handle printer interfacing			   │
		│						   │
		│ 4. handle asynchronous communications		   │
		│						   │
		│ 5. scroll "windows" on  the screen (used  to     │
		│    clear the screen)				   │
		│						   │
		│ 6. determine the amount of RAM in the	PC.	   │
		│						   │
		└──────────────────────────────────────────────────┘


	       The source  code	of  the	BIOS  is included  in the  IBM
	  Technical Reference Manual, and should probably not be  read
	  by  beginning	 programmers.	Later  though,	it  will prove
	  invaluable.

	       In the  routine CLEAR,  also presented  in last month's
	  sample program section, the  screen is cleared by  using the
	  "scroll screen" service #6.   Like a DOS function  call, the
	  service number is moved into the AH register:


	       MOV   AH,6	     ;REQUEST "SCROLL SCREEN" SERVICE
	       INT   10H	     ;INVOKE "SCROLL SCREEN" SERVICE


	       The actual operation that clears	the screen is  invoked
	  by INT 10H.  You will	not find this interrupt	listed in  the
	  DOS manual, for it is	a BIOS call.  It is found in the  BIOS
	  listing in the Technical Reference Manual, under the heading
	  "Display (VIDEO) I/O."  INT 10H is the BIOS call for general
	  screen handling and can be  used to change the cursor	 size,
	  print	characters at the cursor position, set medium or  high
	  resolution mode,  create windows  that are  smaller than the
	  display screen, and a	variety	of other functions.

	       Unlike DOS,  which centralizes  all services  under INT
	  21H, each of the many	BIOS services (screen, diskette, etc.)
	  has  its  own	 interrupt  number.   Screen I/O uses INT 10H,
	  while	diskette I/O uses INT 13H.  Each BIOS service has many
	  sub-services.

	       It may be a pleasant pastime for	some to	leisurely read
	  the BIOS and extract	the information	it contains,  but this
	  work has already been	done.  The BIOS	calls are presented in
	  any decent assembly language	book, and were also  presented
	  in  the  first  issue	 of  PCFL/PCUG.	  (See	"The Interrupt
	  PhoneBook," in the DOS  column.)  So, you need  not purchase
	  the Technical	 Reference Manual  to obtain  a	copy  of these
	  calls, but it	is to your advantage to	own this manual.  When
	  you gain experience  in assembly language,  it will prove  a
	  valuable reference - you  will be amazed at  the information
	  omitted from available texts.

┌──────────────────────────────────┐
│ Comparison of	BIOS and DOS Calls │
└──────────────────────────────────┘

	       In many respects, BIOS and DOS calls are	complementary,
	  each addressing deficiencies in the other.  It is  necessary
	  to master the	fundamentals of	 using both types of calls  if
	  you wish to use your PC to its fullest advantage.

	       BIOS calls perform "utility" type services, and are not
	  truly	a  part	of  PC-DOS operating  system.  Portability  of
	  programs, to	other MS-DOS  machines,	may  be	compromised by
	  using	BIOS calls.

	       Programs	 employing   only  standard   DOS  calls   are
	  guaranteed a large degree  of	portability and	should	run on
	  other	computers using	DOS.

	       Many  programmers,  the	"good"  guys, insist that BIOS
	  calls	should not  be used -  only DOS	calls  should be used.
	  Other	programmers, the "bad" guys, use the BIOS and do nasty
	  tricks that hamper  program portability.  This  is generally
	  done because	a desired  function is	not available  through
	  DOS.	(Incidentally,	DOS  2.0  has  rectified  many	of the
	  omissions that forced	programmers to use BIOS	services under
	  DOS 1.1, instead of DOS services.)

	       In truth, I am  one of the "bad"  guys - but, for  good
	  reasons.  BIOS and DOS calls are relatively slow, and	faster
	  screen  response  (among  other  items)  can	be obtained by
	  writing custom-tailored routines that	duplicate BIOS and DOS
	  functions.  (The main-menu handler for PCFL/PCUG avoids some
	  of the available BIOS	and  DOS calls,	to increase the	 speed
	  of the panel display.)

┌──────────────────────────────────┐
│ DEBUG				   │
└──────────────────────────────────┘

	       New topic time!	Focus on DEBUG.

	       DEBUG is	not  used only to  debug programs.  It	can be
	  used to understand how  instructions actually	work when  the
	  reference  manual  is	 unclear,  or  to  view	 memory, or to
	  single-step  through	your  program  and  check  for errors.
	  DEBUG	provides  a controlled	environment in	which assembly
	  code can be tested.

	       The  routine  DISPLAY  is  used	as our introduction to
	  DEBUG.


;COPYRIGHT 1984	BY ABComputing
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS  ROUTINE	DISPLAYS  THE  STRING  "I have the world on a    │
;    │	 string", AND RETURNS TO DOS.                                    │
;    │									 │
;    │	 PLACE THIS ROUTINE IN FILE : DISPLAY.ASM			 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------
DATA	SEGMENT	PARA

STRINGY	DB  'I have the world on a string','$'

DATA	ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
STACK	SEGMENT	PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
CODE	 SEGMENT PARA
ASSUME	 CS:CODE, DS:DATA, SS:STACK


;--STANDARD LINKAGE TO DOS

DISPLAY	 PROC  FAR	       ;DO
	 PUSH  DS	       ;
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	   NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;--PRINT THE STRING "STRINGY"

	 MOV   AH,9	       ;REQUEST	"PRINT STRING" SERVICE
	 MOV   DX,OFFSET STRINGY ;DX HAS THE ADDRESS OF	STRINGY
	 INT   21H	       ;INVOKE "PRINT STRING" SERVICE


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


DISPLAY	 ENDP		       ;END of Procedure
CODE	 ENDS		       ;END of code Segment
;------------------------------------------------------------------------

	 END   DISPLAY	       ;END of routine DISPLAY



	       Assuming	you  have assembled  and linked	 this program,
	  the executable module	is in the file DISPLAY.EXE.

	       I  will	use  drive  D,	which  contains	 the  routines
	  CLEAR.EXE, DISPLAY.EXE, and  the DEBUG program  (DEBUG.EXE),
	  for the remainder of this article.

	       To  invoke  DEBUG,  type	 DEBUG	after  the DOS prompt,
	  followed  by	the  name  of  the  executable	module	to  be
	  "debugged," and press the  ENTER key.  This loads  DEBUG and
	  the module  into memory,  and	DEBUG  displays	its  prompt, a
	  minus	sign (-).

	       Type  "U"  for  Unassemble  and  DEBUG  will decode the
	  contents  of	the  module,  and  present  an	 assembly-like
	  listing.


D>DEBUG	DISPLAY.EXE
-U

098E:0000 1E		PUSH	DS
098E:0001 2BC0		SUB	AX,AX
098E:0003 50		PUSH	AX
098E:0004 B89009	MOV	AX,0990
098E:0007 8ED8		MOV	DS,AX
098E:0009 B409		MOV	AH,09
098E:000B BA0000	MOV	DX,0000
098E:000E CD21		INT	21
098E:0010 CB		RETF		   <────  End of routine DISPLAY
098E:0011 0000		ADD	[BX+SI],AL
098E:0013 0000		ADD	[BX+SI],AL
098E:0015 0000		ADD	[BX+SI],AL
098E:0017 0000		ADD	[BX+SI],AL
098E:0019 0000		ADD	[BX+SI],AL
098E:001B 0000		ADD	[BX+SI],AL
098E:001D 0000		ADD	[BX+SI],AL
098E:001F 004920	ADD	[BX+DI+20],CL


	       Only the	code segment  of DISPLAY is shown,  but	notice
	  how compressed it is in contrast to the code segment in  the
	  source  file!	  The  unassembled  version  does  not contain
	  comments (as the assembler removes them), and	labels in  the
	  source code, such as DATA and	STRINGY, have been replaced by
	  numbers (addresses).	DISPLAY	 ends with the	RETF statement
	  shown	above, but DEBUG obligingly unassembles	"code"  beyond
	  the end of our program (which	is of no value to us.)

	       A sample	 line from  the	unassembly  is interpreted  as
	  follows:


	       address	 machine lang  assembler equivalent

	       098E:0000 1E	       PUSH    DS


	       We  will	 not  be  concerned  with  the	meaning	of the
	  address field	yet, or	the machine language equivalent	of the
	  instruction.	Notice that "PUSH DS" in the unassembly is the
	  first	statement in the  code segment of the  original	source
	  code.

	       Let's single-step or walk-through our program.   Typing
	  "T" for trace yields:

-T
AX=0000	 BX=0000  CX=0180  DX=0000  SP=00FE  BP=0000  SI=0000  DI=0000
DS=097E	 ES=097E  SS=0992  CS=098E  IP=0001   NV UP DI PL NZ NA	PO NC
098E:0001 2BC0		SUB	AX,AX


	       This is the second instruction in our program!  We  are
	  getting warmer.  The "T"  command traced, or completed,  the
	  first	instruction, and  DEBUG	displays the  next instruction
	  to be	executed.

	       The  contents  of  all  registers  are displayed	on two
	  lines,  and  the  instruction	 to  be	executed on the	bottom
	  line.	 We have not discussed many of these registers,	but at
	  this time you	should recognize  AX, BX, CX, and DX.  The AX,
	  BX, and DX registers contain a hex 0,	while CX contains  180
	  hex =	384 decimal.

	       Typing "T" will  execute the instruction  listed above;
	  we are executing our program one instruction at a time.

-T
AX=0000	 BX=0000  CX=0180  DX=0000  SP=00FE  BP=0000  SI=0000  DI=0000
DS=097E	 ES=097E  SS=0992  CS=098E  IP=0003   NV UP DI PL ZR NA	PE NC
098E:0003 50		PUSH	AX

-T ┌──┐
AX=0000	 BX=0000  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=097E	 ES=097E  SS=0992  CS=098E  IP=0004   NV UP DI PL ZR NA	PE NC
098E:0004 B89009	MOV	AX,0990
				   └┬─┘
    ┌───────────────────────────────┘
    │
    │	       AX contains zero	 before	this instruction  is executed,
    │	  and will contain 990 after it	is executed.
    │
-T ┌┴─┐
AX=0990	 BX=0000  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=097E	 ES=097E  SS=0992  CS=098E  IP=0007   NV UP DI PL ZR NA	PE NC
W98E:0007 8ED8		MOV	DS,AX


	       Recall from my first column, the	DS is a	pointer	to the
	  data segment.	 DISPLAY's data segment consists of the string
	  "I have the world on a string."  We verify this by "dumping"
	  the  contents	 of  the  data	segment	 using the "D" or dump
	  command.  To dump the	data segment from its start type:


-D DS:0000

0990:0000  49 20 68 61 76 65 20	74-68 65 20 77 6F 72 6C	64   I have the	world
0990:0010  20 6F 6E 20 61 20 73	74-72 69 6E 67 24 00 00	00    on a string$...
0990:0020  53 54 43 4B 53 54 43	4B-53 54 43 4B 53 54 43	4B   STCKSTCKSTCKSTCK
0990:0030  53 54 43 4B 53 54 43	4B-53 54 43 4B 53 54 43	4B   STCKSTCKSTCKSTCK
0990:0040  53 54 43 4B 53 54 43	4B-53 54 43 4B 53 54 43	4B   STCKSTCKSTCKSTCK
0990:0050  53 54 43 4B 53 54 43	4B-53 54 43 4B 53 54 43	4B   STCKSTCKSTCKSTCK
0990:0060  53 54 43 4B 53 54 43	4B-53 54 43 4B 53 54 43	4B   STCKSTCKSTCKSTCK
0990:0070  53 54 43 4B 53 54 43	4B-53 54 43 4B 53 54 43	4B   STCKSTCKSTCKSTCK


	       There's our string  and the "STCK"  pattern in the  far
	  right	side of	the display.  If you study the source code for
	  DISPLAY, you	will note  that	the  stack segment immediately
	  follows the data segment,  and this is precisely  what DEBUG
	  shows	us.  DEBUG gives one a good feel for the  relationship
	  of various segments in a program.

	       Attentive  readers  will	 note  that  while  the	 stack
	  segment immediately follows the  data	segment	in the	source
	  code,	there are three	periods	separating the $ from the word
	  STCK in the DEBUG display.  We will discuss this in a	 later
	  column under "segment alignment."

-T
AX=0990	 BX=0000  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=0990	 ES=097E  SS=0992  CS=098E  IP=0009   NV UP DI PL ZR NA	PE NC
098E:0009 B409		MOV	AH,09

	       The number 9 is moved into the AH register to  indicate
	  the "print string" service.

-T
AX=0990	 BX=0000  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=0990	 ES=097E  SS=0992  CS=098E  IP=000B   NV UP DI PL ZR NA	PE NC
098E:000B BA0000	MOV	DX,0000

	       DX has  the address  of the  string to  be printed,  as
	  measured relative to the start of the	data segment.	Moving
	  0 into DX means that our  string has an "offset" of 0  bytes
	  into	the  data  segment.   That  is,	 the first byte	of our
	  string starts	at the beginning of the	data segment.

	       Finally typing "G" for Go will cause the program to  be
	  executed.   The  "Program  terminated  normally" message was
	  issued by DEBUG; it is not part of DISPLAY.

-G
I have the world on a string
Program	terminated normally


	       To exit DEBUG and return	to DOS,	type "Q", for quit.

-Q
D>
-------------------------------------------------------------------




;COPYRIGHT 1984	BY ABComputing
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS ROUTINE CLEARS THE SCREEN	BY MAKING A BIOS CALL.		 │
;    │									 │
;    │	 PLACE THIS ROUTINE IN FILE : CLEAR.ASM				 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------
DATA	SEGMENT	PARA


DATA	ENDS
;------------------------------------------------------------------------


;------------------------------------------------------------------------
STACK	SEGMENT	PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------


;------------------------------------------------------------------------
CODE	 SEGMENT PARA
ASSUME	 CS:CODE, DS:DATA, SS:STACK


;--STANDARD LINKAGE TO DOS

CLEAR	 PROC  FAR	       ;DO
	 PUSH  DS	       ;
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	   NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;--NOTE	24 DECIMAL = 18H, AND 79 DECIMAL = 4FH


	 MOV   AH,6	       ;REQUEST	SCROLL SCREEN SERVICE
	 MOV   AL,0	       ;SCROLL ENTIRE WINDOW
	 MOV   BH,7	       ;WHITE FOREGROUND, BLACK	BACKGROUND
	 MOV   CX,0000H	       ;UPPER  LEFT CORNER (0,0)
	 MOV   DX,184FH	       ;LOWER RIGHT (24,79)
	 INT   10H	       ;INVOKE SCROLL SCREEN SERVICE


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


CLEAR	 ENDP		       ;END of Procedure
CODE	 ENDS		       ;END of code Segment
;------------------------------------------------------------------------

	 END   CLEAR	       ;END of routine CLEAR



D>DEBUG	 CLEAR.EXE
-U

098E:0000 1E		PUSH	DS
098E:0001 2BC0		SUB	AX,AX
098E:0003 50		PUSH	AX
098E:0004 B89009	MOV	AX,0990
098E:0007 8ED8		MOV	DS,AX
098E:0009 B406		MOV	AH,06
098E:000B B000		MOV	AL,00
098E:000D B707		MOV	BH,07
098E:000F B90000	MOV	CX,0000
098E:0012 BA4F18	MOV	DX,184F
098E:0015 CD10		INT	10
098E:0017 CB		RETF		   <────  End of routine CLEAR
098E:0018 0000		ADD	[BX+SI],AL
098E:001A 0000		ADD	[BX+SI],AL
098E:001C 0000		ADD	[BX+SI],AL
098E:001E 0000		ADD	[BX+SI],AL
-T

AX=0000	 BX=0000  CX=0180  DX=0000  SP=00FE  BP=0000  SI=0000  DI=0000
DS=097E	 ES=097E  SS=0990  CS=098E  IP=0001   NV UP DI PL NZ NA	PO NC
098E:0001 2BC0		SUB	AX,AX
-T

AX=0000	 BX=0000  CX=0180  DX=0000  SP=00FE  BP=0000  SI=0000  DI=0000
DS=097E	 ES=097E  SS=0990  CS=098E  IP=0003   NV UP DI PL ZR NA	PE NC
098E:0003 50		PUSH	AX
-T

AX=0000	 BX=0000  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=097E	 ES=097E  SS=0990  CS=098E  IP=0004   NV UP DI PL ZR NA	PE NC
098E:0004 B89009	MOV	AX,0990
-t

AX=0990	 BX=0000  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=097E	 ES=097E  SS=0990  CS=098E  IP=0007   NV UP DI PL ZR NA	PE NC
098E:0007 8ED8		MOV	DS,AX
-T
   ┌┐
AX=0990	 BX=0000  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=0990	 ES=097E  SS=0990  CS=098E  IP=0009   NV UP DI PL ZR NA	PE NC
098E:0009 B406		MOV AH,06
			    └┘
    ┌────────────────────────┘
    │
    │	       AH,  which  is  the  upper  byte	 of  the  AX register,
    │	  contains "09" before this instruction is executed, and  will
    │	  contain "06" after it is executed.
    │
-T ┌┐
AX=0690	 BX=0000  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=0990	 ES=097E  SS=0990  CS=098E  IP=000B   NV UP DI PL ZR NA	PE NC
098E:000B B000		MOV	AL,00
				   └┬┘
     ┌──────────────────────────────┘
     ┌┐
AX=0600	 BX=0000  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=0990	 ES=097E  SS=0990  CS=098E  IP=000D   NV UP DI PL ZR NA	PE NC
098E:000D B707		MOV	BH,07
-T

	       BH  contains  "00",  and  will  contain "07" after this
	  instruction is executed.

	    ┌┐
AX=0600	 BX=0700  CX=0180  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=0990	 ES=097E  SS=0990  CS=098E  IP=000F   NV UP DI PL ZR NA	PE NC
098E:000F B90000	MOV	CX,0000
-T
		     ┌──┐
AX=0600	 BX=0700  CX=0000  DX=0000  SP=00FC  BP=0000  SI=0000  DI=0000
DS=0990	 ES=097E  SS=0990  CS=098E  IP=0012   NV UP DI PL ZR NA	PE NC
098E:0012 BA4F18	MOV	DX,184F
-G

Program	terminated normally
-Q


	       What can	not be shown is	that the screen	cleared	 after
	  the "G" command was typed.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       We covered a lot	 of information	this time.   Study the
	  DOS  function	 calls,	 BIOS  calls,  and  experiment.	   Try
	  DEBUGging any	programs you write.

	       Next month, we will discuss BIOS/DOS calls further, and
	  I hope to introduce the topic	of subroutine calls.




		     ┌──────────────────────────────────┐
		     │ File Name:   ██	 asm1.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## ASM2.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║		     DOS 1.1, 2.0  Sequential File-Reading		      ║
║									      ║
║				      by				      ║
║									      ║
║				  Bill Salkin				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       This  article  discusses	 sequential file-reading under
	  DOS 1.1  and DOS  2.0.  The  source code  given performs the
	  following   functions:   read	  one	byte   from   the file
	  "A:JUNK.TXT", display it, and continue in this manner  until
	  an end-of-file (EOF) condition is reached.

	       DOS 2.0 uses a new  approach to file handling that  was
	  not  available  under	 DOS  1.1.   For this reason, separate
	  source code and commentary are provided for each release.

┌──────────────────────────────────┐
│ FCB vs. ASCIIZ		   │
└──────────────────────────────────┘

	       In DOS 1.1, the liaison or "link" between the  physical
	  file as stored on  the disk, and the	file as	viewed by  the
	  programmer, is called	the file control block (FCB).

	       An  FCB	 is  a	 37-byte  data	 structure  containing
	  file-related	information  such  as:	the filespec, time and
	  date stamp, the file size, current block, and	record size.

	       The FCB	map or	layout of  a "standard"  FCB is  shown
	  below:


    0  ┌────────┬─────────────────────────────────────────────────────────┐
       │ Drive	│	      Filename (8 bytes)			  │
    8  ├────────┼─────────────────────────┬─────────────────┬─────────────┤
       │	│   File extension	  │  Current Block  │ Record Size │
    16 ├────────┴───────┬─────────────────┼─────────────────┼─────────────┤
       │File size (low)	│File size (high) │  Date	    │▓▓▓▓▓▓▓▓▓▓▓▓▓│
    24 ├────────────────┴─────────────────┴─────────────────┘▓▓▓▓▓▓▓▓▓▓▓▓▓│
       │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  Reserved for system use  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
    32 ├────────┬───────────────┬─────────────────┬───────────────────────┘
       │Current	│ Random Record	│ Random Record	  │
       │Record	│ # (low)	│ # (high)	  │
       └────────┴───────────────┴─────────────────┘


	       As offset  0 from  the start  of	the  FCB is  the drive
	  specifier for	the file.  (Other fields are discussed later.)
	  A file is  associated	with an	 FCB by	the  filename and file
	  extension fields of  the FCB.	When  we speak of  "opening" a
	  file,	we actually are	 opening the FCB associated  with this
	  file.	 This abuse of terms is	enjoyed	by all writers,	and  I
	  will be equally loose.

	       DOS 2.0 offers an improved approach to file handling by
	  using	ASCIIZ strings.	 This  approach	is easier to  program,
	  more flexible, and more uniform than methods employing FCBs.
	  Furthermore, FCBs  need not  be used	under DOS  2.0,	as new
	  file-handling	routines have  been introduced to  perform the
	  functions of earlier FCB-bound ones.

┌──────────────────────────────────┐
│ DOS 1.1 File-handling		   │
└──────────────────────────────────┘

	  ┌──────────────────┐
	  │ FCB	Structure    │
	  └──────────────────┘

	       Program 1, shown	later in this file, establishes	an FCB
	  for file "A:JUNK.TXT" in our data segment, by the statement:


	      FCB	    DB	   1,'JUNK    ','TXT',25 DUP(0)


	       An FCB  is called  unopened when	 it contains  only the
	  drive	specifier  and filespec.   The FCB  given above	 is an
	  unopened FCB.

	       The "1" shown is a drive specifier meaning the file  is
	  on  the  "A"  drive  (2  =  "B"  drive, 3 = "C" drive, etc.)
	  Blanks were added after  the filename	"JUNK" to  account for
	  an eight-character filename.	 The file extension  is	"TXT,"
	  and the remainder of the FCB is padded with zeroes.

	  ┌──────────────────┐
	  │ Setting the	DTA  │
	  └──────────────────┘

	       Data read from a	disk  is stored	in an area  called the
	  Disk Transfer	Area (DTA).  In	Program	1, we instruct DOS  to
	  set the DTA  location	to an  area we can  access easily.  We
	  select IO_AREA (a  one-byte buffer in	 our data segment)  as
	  the DTA by using DOS function	call 1AH, with DS:DX  pointing
	  to the area that we want for our DTA (IO_AREA).


	      MOV   AH,1AH	    ;REQUEST "SET DTA" SERVICE
	      MOV   DX,OFFSET IO_AREA	   ;SET	DTA TO IO_AREA
	      INT   21H		    ;INVOKE "SET DTA" SERVICE


	       The DTA will remain at IO_AREA until the	DTA address is
	  reset	by another 1AH function	call.

	  ┌──────────────────┐
	  │ Opening an FCB   │
	  └──────────────────┘

	       After the  DTA has  been	set  to	IO_AREA,  the FCB (for
	  file "A:JUNK.TXT") is opened.   This is required before  any
	  read (or write) operation can	occur.

	       DOS call	0FH  opens the FCB  corresponding to the  file
	  "A:JUNK.TXT".


	      MOV   AH,0FH	    ;REQUEST "OPEN FCB" SERVICE
	      MOV   DX,OFFSET FCB   ;MAKE DS:DX	-> FCB
	      INT   21H		    ;INVOKE "OPEN FCB" SERVICE

	  ┌──────────────────┐
	  │ FCB	Fields	     │
	  └──────────────────┘

	       DOS's  logical  view  of  a  file  is  a  collection of
	  "blocks," with each block consisting of 128 "records."   The
	  current block	and current  record fields of an  FCB (offsets
	  12  and  32  bytes  from  the	 FCB  start)  are  used	during
	  sequential  read/write  operations  as  pointers to the next
	  record to read/write.	 Setting the current block and	record
	  number fields	to zero,  positions the	read/write pointer  to
	  the beginning	of the file.  This is accomplished as follows:


	      MOV   WORD PTR FCB+12,0	;SET CURRENT BLOCK NUMBER TO 0
	      MOV   FCB+32, 0		;SET CURRENT RECORD TO 0


	       With the	read/write pointer  at the start of  the file,
	  we next specify the amount of	data to	be read	with each read
	  operation.  This amount is given by the value	in the	record
	  size field  (at offset  14 bytes  from FCB  start) which  we
	  change to a "1" as we want to read one byte.  (This one-byte
	  length is referred to	 as RECORD_LENGTH in Program  1.)  The
	  code performing this is:


	      MOV   WORD PTR FCB+14,RECORD_LENGTH


	       The sequential-read operation automatically updates the
	  current block	and record fields, positioning the  read/write
	  pointer for the next read operation.

	  ┌──────────────────┐
	  │ Reading the	File │
	  └──────────────────┘

	       DOS call	14H  is	used to	 perform the sequential	 read,
	  with DS:DX pointing to the open FCB for the file to be read.
	  But as  DS:DX	already	 points	to  the	desired	 FCB (from the
	  open service), to read one byte into IO_AREA,	we use:


	      MOV   AH,14H	    ;REQUEST "READ FILE" SERVICE
	      INT   21H		    ;INVOKE "READ FILE" SERVICE


	       The  value  returned  in	 AL  is	 not  zero  if	an EOF
	  condition  was   encountered.	  We   continue	 reading   and
	  displaying one byte, until the EOF marker is reached.	  When
	  the EOF marker is encountered,  the FCB is closed using  DOS
	  call 10H, and	the program terminates.


	      MOV   AH,10H	    ;REQUEST "CLOSE FILE" SERVICE
	      INT   21H		    ;INVOKE "CLOSE FILE" SERVICE

	  ┌──────────────────┐
	  │ Program 1	     │
	  └──────────────────┘


;COPYRIGHT 1984	BY ABComputing
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS PROGRAM READS AND	 DISPLAYS THE FILE "A:JUNK.TXT"   ONE    │
;    │	 BYTE AT A TIME.  ONLY DOS 1.1 FUNCTION	CALLS ARE USED.		 │
;    │									 │
;    │	 THIS FILE  IS ASSUMED	TO EXIST,  AND NO  CHECK IS  MADE FOR	 │
;    │	 THIS.								 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------------
MAIN_DATA     SEGMENT PARA  PUBLIC 'DATA'


RECORD_LENGTH EQU    1	    ;LENGTH OF RECORD READ INTO	DTA

FCB	      DB     1,'JUNK    ','TXT',25 DUP(0)
IO_AREA	      DB     RECORD_LENGTH  DUP(0),'$'    ;"IN-ROOM" FOR DISK READS


MAIN_DATA     ENDS
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
STACK	 SEGMENT PARA  STACK  'STACK'
	 DB    40H  DUP('STCK')
STACK	 ENDS
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
CODE	 SEGMENT PARA PUBLIC 'CODE'
ASSUME	 CS:CODE,DS:MAIN_DATA,SS:STACK,ES:NOTHING


MAIN	 PROC  FAR	       ;STANDARD LINKAGE TO DOS
	 PUSH  DS	       ; DO
	 MOV   AX,0	       ;
	 PUSH  AX	       ;	  NOT
	 MOV   AX,MAIN_DATA    ;
	 MOV   DS,AX	       ;		    ALTER!


	 CALL  READ_FILE       ;READ AND DISPLAY THE FILE


	 RET
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE READ_FILE
;
;   BRIEF:
;	 READS THE FILE	"A:JUNK.TXT" AND DISPLAYS IT ON THE SCREEN.
;
;   INPUT:
;	 RECORD_LENGTH:	THE  NUMBER OF	BYTES TO  READ FROM  THE FILE
;	 WITH EACH READ	OPERATION.
;
;	 AN FCB	FOR THE	FILE "A:JUNK.TXT"
;
;	 AN INPUT DATA AREA (IO_AREA) WHERE EACH RECORD	READ FROM THE
;	 FILE IS BUFFERED.
;
;   OUTPUT:
;	 THE FILE "A:JUNK.TXT" IS DISPLAYED ON THE SCREEN.
;
;------------------------------------------------------------------------------
READ_FILE  PROC	 NEAR


	 PUSH  AX
	 PUSH  DX

;--PERFORM ALL DISK TRANSFERS TO IO_AREA

	 MOV   AH,1AH	       ;REQUEST	"SET DTA" SERVICE
	 MOV   DX,OFFSET IO_AREA      ;SET DTA TO IO_AREA
	 INT   21H	       ;INVOKE "SET DTA" SERVICE


;--OPEN	FCB FOR	FILE

	 MOV   AH,0FH	       ;REQUEST	"OPEN FCB" SERVICE
	 MOV   DX,OFFSET FCB   ;MAKE DS:DX -> FCB
	 INT   21H	       ;INVOKE "OPEN FCB" SERVICE


;--ADJUST FCB TO READ "RECORD_LENGTH" BYTES, STARTING AT BEGINNING OF FILE

	 MOV   WORD PTR	FCB+12,0   ;SET	CURRENT	BLOCK NUMBER TO	0
	 MOV   WORD PTR	FCB+14,RECORD_LENGTH
	 MOV   FCB+32, 0	   ;SET	CURRENT	RECORD TO 0


;--READ	"RECORD_LENGTH" BYTES INTO IO_AREA  (RECALL DS:DX -> FCB)

REA1:	 MOV   AH,14H	       ;REQUEST	"READ FILE" SERVICE
	 INT   21H	       ;INVOKE "READ FILE" SERVICE

	 CMP   AL,0	       ;AL = 0 IF READ WAS FINE
	 JNE   REA2	       ;AL <> 0	IF EOF


;--WRITE "IO_AREA" TO SCREEN

	 PUSH  DX	       ;SAVE DX	FOR FILE READ
	 MOV   AH,9	       ;REQUEST	"PRINT STRING" SERVICE
	 MOV   DX,OFFSET IO_AREA
	 INT   21H	       ;INVOKE "PRINT STRING" SERVICE
	 POP   DX	       ;RESTORE	DX FOR FILE READ.

	 JMP   REA1	       ;GET NEXT BYTE


;--CLOSE FCB  (RECALL DS:DX -> FCB)

REA2:	 MOV   AH,10H	       ;REQUEST	"CLOSE FILE" SERVICE
	 INT   21H	       ;INVOKE "CLOSE FILE" SERVICE

	 POP   DX
	 POP   AX

	 RET

READ_FILE  ENDP
;------------------------------------------------------------------------------


MAIN	 ENDP		       ;END of MAIN procedure

CODE	 ENDS		       ;END of CODE Segment

END	 MAIN		       ;END of assembly.


┌──────────────────────────────────┐
│ DOS 2.0 File-handling		   │
└──────────────────────────────────┘

	       Program 2, shown	below, uses DOS	2.0 function calls  to
	  read the file	"A:JUNK.TXT".  (The same file read by  Program
	  1.)

	       The FCB	concept	in  DOS	2.0  has been  replaced	by the
	  simpler  ASCIIZ  string  approach.   An  ASCIIZ  string is a
	  string  containing   the  path   (optional)  and   filespec,
	  terminated by	a byte of zeroes.  An example is:


	      FILE     DB     'A:JUNK.TXT',0


	       Notice that  the	filespec  is typed;  the filename  and
	  extension are	not  separate fields as	 in the	FCB  approach,
	  nor is  the filename	blank padded  to occupy	 8 characters.
	  ASCIIZ strings  are easier  to use  than FCBs	 and provide a
	  level	of insulation from the file-management structure  that
	  was not possible under DOS 1.1.

	  ┌──────────────────┐
	  │ Opening the	File │
	  └──────────────────┘

	       A  file	is  opened  under  DOS	2.0 using one of three
	  access methods.  Each	access method has an access code,  and
	  we use  access code  0 to  open the  file for	 reading only.
	  (The	other  access  methods	allow  writing	only,  or both
	  reading and writing.)

	       When the	file specified in the ASCIIZ string is opened,
	  a word pointer, called a handle, is associated with it,  and
	  this	handle	is  used  whenever  we	wish  to  perform  any
	  operation with the file.

	       Opening a file under  DOS 2.0 automatically points  the
	  read/write pointer to	 the first byte	 of the	file  and sets
	  the  record  size  to	 one  byte.   How  convenient; this is
	  exactly the set up we	need to	read one byte from a file!

	       It seems	quite involved to  open	a file.	 At least  the
	  explanation is; the required	code is	simpler	to  write than
	  it is	to explain.


	      ;--OPEN THE FILE "A:JUNK.TXT" FOR READING ONLY.

	      MOV   AH,3DH	    ;REQUEST "OPEN FILE" SERVICE
	      MOV   AL,0	    ;FILE OPENED FOR READING
	      MOV   DX,OFFSET FILE  ;DS:DX -> FILE TO BE READ
	      INT   21H		    ;INVOKE "OPEN FILE" SERVICE

	  ┌──────────────────┐
	  │ Reading the	File │
	  └──────────────────┘

	       To read the file	we invoke DOS function call 3FH,  with
	  the file handle in BX, the buffer address in DS:DX, and  the
	  number of bytes to read in CX. The number of bytes  actually
	  read is returned in AX. If  AX = 0, then the EOF  marker was
	  read.	 This one call combines	the functions of many DOS  1.1
	  calls.

	       After the file  has been	read  and displayed, the  file
	  handle associated with the file is closed.  This closes  the
	  file,	and the	program	terminates.


	  ┌──────────────────┐
	  │ Program 2	     │
	  └──────────────────┘

;COPYRIGHT 1984	BY ABComputing
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS PROGRAM READS AND	 DISPLAYS THE FILE "A:JUNK.TXT"   ONE    │
;    │	 BYTE AT A TIME.  ONLY DOS 2.0 FUNCTION	CALLS ARE USED.		 │
;    │									 │
;    │	 THIS FILE  IS ASSUMED	TO EXIST,  AND NO  CHECK IS  MADE FOR	 │
;    │	 THIS.								 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------------
MAIN_DATA     SEGMENT PARA  PUBLIC 'DATA'


RECORD_LENGTH EQU    1	    ;NUMBER OF BYTES TO	READ.

FILE	      DB     'A:JUNK.TXT',0
IO_AREA	      DB     RECORD_LENGTH  DUP(0),'$'    ;"IN-ROOM" FOR DISK READS


MAIN_DATA     ENDS
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
STACK	 SEGMENT PARA  STACK  'STACK'

	 DB    40H  DUP('STCK')

STACK	 ENDS
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
CODE	 SEGMENT PARA PUBLIC 'CODE'
ASSUME	 CS:CODE,DS:MAIN_DATA,SS:STACK,ES:NOTHING


MAIN	 PROC  FAR	       ;STANDARD LINKAGE TO DOS
	 PUSH  DS	       ; DO
	 MOV   AX,0	       ;
	 PUSH  AX	       ;	  NOT
	 MOV   AX,MAIN_DATA    ;
	 MOV   DS,AX	       ;		    ALTER!


	 CALL  READ_FILE       ;READ AND DISPLAY THE FILE


	 RET
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE READ_FILE
;
;
;   BRIEF:
;	 READS THE FILE	"A:JUNK.TXT" AND DISPLAYS IT ON THE SCREEN.
;
;   INPUT:
;	 RECORD_LENGTH:	THE  NUMBER OF	BYTES TO  READ FROM  THE FILE
;	 WITH EACH READ	OPERATION.
;
;	 THE ASCIIZ STRING "FILE" CONTAINING THE FILE TO BE READ.
;
;	 AN INPUT DATA AREA (IO_AREA)  WHERE  EACH  RECORD  READ FROM
;	 THE FILE IS BUFFERED.
;
;   OUTPUT:
;	 THE FILE "A:JUNK.TXT" IS DISPLAYED ON THE SCREEN.
;
;------------------------------------------------------------------------------
READ_FILE  PROC	 NEAR


	 PUSH  AX
	 PUSH  BX
	 PUSH  CX
	 PUSH  DX

;--OPEN	THE FILE "A:JUNK.TXT" FOR READING.  THIS CALL SETS THE READ/WRITE
;  POINTER TO THE FIRST	BYTE OF	THE FILE, AND SETS THE RECORD SIZE TO ONE
;  BYTE.
;
;  ON RETURN AX	HAS THE	HANDLE (WORD POINTER)  ASSOCIATED  WITH	THE FILE.

	 MOV   AH,3DH	       ;REQUEST	"OPEN FILE" SERVICE
	 MOV   AL,0	       ;FILE OPENED FOR	READING
	 MOV   DX,OFFSET FILE  ;DS:DX -> FILE TO BE READ
	 INT   21H	       ;INVOKE "OPEN FILE" SERVICE

;--SAVE	FILE HANDLE IN BX REGISTER.

	 MOV   BX,AX	       ;BX -> FILE HANDLE


;--PERFORM ALL DISK TRANSFERS TO IO_AREA

	 MOV   CX,RECORD_LENGTH	   ;CX HAS NUMBER OF BYTES TO READ
	 MOV   DX,OFFSET IO_AREA   ;SET	DS:DX -> TO IO_AREA

REA1:	 MOV   AH,3FH	       ;REQUEST	"READ" SERVICE
	 INT   21H	       ;INVOKE "READ" SERVICE

	 CMP   AX,0	       ;AX HAS NUMBER OF BYTES READ
	 JE    REA2	       ;READ END OF FILE


;--WRITE "IO_AREA" TO SCREEN (RECALL DS:DX -> IO_AREA)

	 MOV   AH,9	       ;REQUEST	"PRINT STRING" SERVICE
	 INT   21H	       ;INVOKE "PRINT STRING" SERVICE

	 JMP   REA1	       ;READ NEXT BYTE


;--AX =	0, SO END-OF-FILE READ.	CLOSE FILE HANDLE AND LEAVE.

REA2:	 MOV   AH,3EH	       ;REQUEST	"CLOSE FCB" SERVICE
	 INT   21H	       ;INVOKE "CLOSE FCB" SERVICE


	 POP   DX
	 POP   CX
	 POP   BX
	 POP   AX

	 RET

READ_FILE  ENDP
;------------------------------------------------------------------------------


MAIN	 ENDP		       ;END of MAIN procedure

CODE	 ENDS		       ;END of CODE Segment

END	 MAIN		       ;END of assembly.


┌──────────────────────────────────┐
│ Closing Thoughts		   │
└──────────────────────────────────┘

	       In  both	 programs,  one	 byte  was read	with each read
	  operation to help locate the EOF marker.  Reading a file one
	  byte at a time, without any further processing of this byte,
	  causes no noticeable speed  degradation, as DOS buffers  all
	  file input/output.

	       But  if	each  byte  must  be  inspected	 for   special
	  characters,  speed  degradation  can	be  significant.   For
	  example, disk	space can be conserved by compressing "blanks"
	  in source files  to tab characters  when the file  is	saved.
	  When this file  is later read,  each byte must  be examined,
	  and if a tab is found, expanded to the appropriate number of
	  blanks.  This	is a  time-consuming process and in  this case
	  it is	best to	read a block (or group)	of data	with each read
	  operation.  Once in memory,  this block can be  divided into
	  individual bytes and each byte examined.

	       (I  have	 experimented  using  different	 RECORD_LENGTH
	  values  and	the  results   can  be	 startling.   Using  a
	  RECORD_LENGTH	of 1, a	large file took	30 seconds to read and
	  uncompress, one byte at  a time, while with  RECORD_LENGTH =
	  80, it took  on 5 seconds!   I also found,  as was expected,
	  that	RECORD_LENGTHs	significantly  larger  than 80 did not
	  substantially	 improve  this	5  second  time.   It's fun to
	  experiment.)

	       My next article on file handling	deals with Random I/O.



			      Sequentially yours,

			      Bill Salkin




		     ┌──────────────────────────────────┐
		     │ File Name:   ██	 asm2.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## BASIC1.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║			     Simpmaze Documentation			      ║
║									      ║
║				      by				      ║
║									      ║
║				  Bill Salkin				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       Simpmaze	is  a maze-generation  program created	by Dan
	  Rollins.  This  article presents  an overview	 of the	source
	  code.	 For  a	full  description, see	the article "PolyMaze!
	  Solver" in the December 1983 issue of Creative Computing.

┌──────────────────────────────────┐
│ Sample Run			   │
└──────────────────────────────────┘

	       A sample	run of Simpmaze	looks like this.

	┌──────────────────────────────────────────────────────────────┐
	│	   SIMPMAZE ...	Generic	Maze Generation		       │
	│      Public domain program written by	Dan Rollins 04/05/83   │
	│							       │
	│   horizontal size (26	fits on	screen)? 4		       │
	│   vertical size (11 fits on screen)? 3		       │
	│   calculating	maze...	please be patient		       │
	│							       │
	│   +  +--+--+--+					       │
	│   I  I	I					       │
	│   +  +--+--+	+					       │
	│   I  I     I	I					       │
	│   +  +  +  +	+					       │
	│   I	  I	I					       │
	│   +--+--+--+	+					       │
	│							       │
	└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────┐
│ Coordinate System Used	   │
└──────────────────────────────────┘

	       The following coordinate	system is used in Simpmaze:


					    X
			     (0,0)  .───────────>
				    │
				    │
				    │
				 Y  │
				    v


	       The origin  of the  coordinate system  is in  the upper
	  left-hand corner;  X increases  as we	 move eastward,	 and Y
	  increases as we move southward.

┌──────────────────────────────────┐
│ An AMazing Floorplan		   │
└──────────────────────────────────┘

	       Think of	 a maze	 as a  floorplan for  a	building where
	  each room  has precisely  two	openings  (an entrance	and an
	  exit).  While	constructing the maze, though, Simpaze assumes
	  that a room  has four	doors,	and determines which  door can
	  act as an exit and which door	can act	as an entrance.

┌──────────────────────────────────┐
│ The Array MZ			   │
└──────────────────────────────────┘

	       A convenient method is needed to	determine which	doors,
	  if  any,  are	 open  in  a  room.   If  the  upper left-hand
	  coordinate of	the room is  (X,Y), then the value of  MZ(X,Y)
	  provides this	information in	a numeric manner that  is easy
	  to manipulate.

	       For  each  room	in  a  maze,  an  open	east  door  is
	  associated with the number 2;	 an open west door with	 8; an
	  open south  door with	 4; an	open north  door with 1.  (The
	  value	of zero	 is associated with  a closed door.)   This is
	  shown	below.


			    1
		       ┌────/────┐
		    8  /	 /  2	  MZ(X,Y) = 1 +	2 + 4 +	8 = 15
		       └────/────┘

			    4


	       Simpmaze	initially  sets	MZ  = 0	 for each  room	in the
	  maze,	and for	any open door adds the corresponding numerical
	  value	to the	current	value of  MZ(X,Y).  If only  the north
	  door of a room is open, then MZ(X,Y) is set equal to 1.   If
	  only the east	and west doors are open, MZ(X,Y) = 2 + 8 = 10.
	  In the above illustration, all doors are open	so MZ(X,Y)  is
	  the sum of 1,2,4, and	8 as shown.

┌──────────────────────────────────┐
│ The Program Simpmaze		   │
└──────────────────────────────────┘

	       The values entered  above (in the  sample run) for  the
	  horizontal  and   vertical  size   are  called   H  and   V,
	  respectively,	in Simpmaze.

	       A  random  starting  point  is  determined  using these
	  values as seeds.  Simpmaze closes all	doors on all the rooms
	  in the maze with the statement:


1000 FOR J=0 TO	H :FOR K=0 TO V	:MZ(J,K)=0 :NEXT :NEXT '** "close" all doors


	       The  idea  behind  Simpmaze  is:	 proceed to a room and
	  check	if it has any open  doors.  If an open door is	found,
	  do not enter	this room.  In	this manner, we	 never enter a
	  room that has	been  previously visited, and when  the	number
	  of rooms entered equals the total number of rooms, the  maze
	  has  been  solved.   (If  we	are  trapped,  that is,	if all
	  adjacent rooms have been visited, the	program	scans the maze
	  for an  unvisited room,  and,	if  found, we  proceed to that
	  room.)

	       Assume that the	upper left-hand	corner	of a room  has
	  coordinates (X,Y)  and we  are positioned  near this corner.
	  To test whether the room to the north	has a closed door use:


1030   IF Y>0 THEN IF MZ(X,Y-1)=0 THEN Q=Q+1 :T(Q)=0	    '** North


	  (Think of the	vector from  (X,Y) to (X,Y-1) with the	tip at
	  the latter  point.  This  vector points  to the  north as  Y
	  decreases in the northward direction.)

	       If the north  door is closed,  then we can  move	to the
	  north	and this is indicated by setting the value T(1)	to  0.
	  Next,	the other possible directions of movement are checked:


1040   IF X<H THEN IF MZ(X+1,Y)=0 THEN Q=Q+1 :T(Q)=1	    '** East
1050   IF Y<V THEN IF MZ(X,Y+1)=0 THEN Q=Q+1 :T(Q)=2	    '** South
1060   IF X>0 THEN IF MZ(X-1,Y)=0 THEN Q=Q+1 :T(Q)=3	    '** West


	       When  all  possible  directions	have  been  tested,  a
	  particular direction is selected by:


1100   D=INT(RND*Q)+1 :DIR=T(D)		       '** choose randomly from list


	       To exit	this room  in the  direction given  by DIR, we
	  open the door	in the current room using:


1110   MZ(X,Y)=MZ(X,Y) + PWR2(DIR)	       '** add door in current room


	       Notice from line	1030-1060 that


				T(Q)
	  if T(Q) = 0, then    2      =	 1   =	an open	north door

				T(Q)
	  if T(Q) = 1, then    2      =	 2   =	an open	east door

				T(Q)
	  if T(Q) = 2, then    2      =	 4   =	an open	south door

				T(Q)
	  if T(Q) = 3, then    2      =	 8   =	an open	west door


	       The association between the values of T,	the mysterious
	  PWR2 (power of 2) function, and the potential	open doors has
	  been clarified.

	       The values of X and  Y are updated to reflect  our move
	  to the new room by:


1120   Y=Y+YD(DIR) :X=X+XD(DIR)		       '** move to new room


	  where	XD, YD values are essentially 0, 1, or	-1.

	       When we open, say, the  north door in the current  room
	  for an exit, to complete the passage we must open the	 south
	  door in the new room as an entrance.

	       To amplify this last  statement,	notice in the  diagram
	  below	that exiting  the bottom room  through the north  door
	  requires entering the	adjacent room through the south	door.


		       ┌─────────┐
		       │	 │
		       └────/────┘   S
		       ┌────/────┐   N
		       │	 │
		       └─────────┘


	       This complementary direction is given by	the statement:


1130   ND=DIR-2	:IF ND<0 THEN ND=4+ND	       '** opposite DIR for New Dir


	       The door	in the new room	is opened by:

1140   MZ(X,Y)=MZ(X,Y) + PWR2(ND)	       '** add door in new room


	       The  room  count	 is  updated  to  reflect that we have
	  entered a new	room by:


1150   RC=RC+1				       '** update Room Count


	       Finally,	when the room count equals the total number of
	  available rooms,  the	calculations  have been	 completed and
	  the maze is drawn.

┌──────────────────────────────────┐
│ Drawing the Maze		   │
└──────────────────────────────────┘

	       To draw the maze, we need only draw the north and  west
	  doors	for, as	mentioned above, the south door	of one room is
	  essentially the north	door of	the room beneath it.

	       Two simple facts	about MZ are used to draw the maze.


	       1.  If MZ(X,Y) is odd, then the room must have an  open
		   north door.	(The only way MZ can be	odd is if  the
		   number 1  has been  added to	 it; that  is, a north
		   door	was opened.)

	       2.  If MZ(X,Y) >	7 then a west door must	be open.   For
		   the sum  of the  values associated  with the	 other
		   three doors is 7 (1 +  2 + 4), and the only	way to
		   exceed this value is	by having a west door open.


	       The code	that draws the maze is:



2010 FOR Y=0 TO	V
2020   FOR X=0 TO H
2030	 IF INT(MZ(X,Y)/2)=MZ(X,Y)/2 THEN PRINT	"+--"; :GOTO 2050
2040	 PRINT "+  ";                           '** must have a North door
2050   NEXT X  :PRINT "+"
2060   FOR X=0 TO H
2070	 IF MZ(X,Y) > 7	THEN PRINT"   "; :GOTO 2090   '** must be a West door
2080	 PRINT"I  ";
2090   NEXT X  :PRINT "I"
2100 NEXT Y



	       To complete the drawing,	 the door in the  southeastern
	  corner of the	maze is	opened	as an exit and the program  is
	  complete.




		     ┌──────────────────────────────────┐
		     │ File Name:  ██  basic1.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## C1.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║			       Introduction to C			      ║
║									      ║
║				      by				      ║
║									      ║
║				  Ron Watson				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       Welcome to  the C  tutorial.  This  column will provide
	  instruction in  how to  use this  powerful language.	 It is
	  aimed	 at  experienced  programmers  and  so	will not cover
	  programming principles.  This	column is essentially a	 diary
	  of  the  author's  experience  while  studying the language,
	  using	several	sources.  Frequent  reference will be made  to
	  "The C Programming Language" by Kernighan and Ritchie  (K&R)
	  which	is the C "Bible."

┌──────────────────────────────────┐
│ Good and Bad News		   │
└──────────────────────────────────┘

	       C was developed as a tool for systems programmers  and,
	  unlike  most	other  languages,  was	defined	by experienced
	  programmers for their	 own use.  This	 is both good  and bad
	  news.	  The  good  news  is  that  the language has very few
	  limitations; the bad news is that in the attempt to create a
	  very	terse  language	 (systems  programmers	do not like to
	  type)	they  evolved some  syntax that	 can become  painfully
	  obscure.

	       Like nuclear energy, the	results	can be very useful  or
	  downright destructive, depending on who is using it for what
	  purpose.  Usually, there will	be several ways	to express the
	  same	algorithm,  including  two  or three alternatives that
	  generate precisely  the same	object code.   This freedom of
	  expression can  mean great  fun for  the original programmer
	  and  many  sleepless	nights	for  the  poor slob who	has to
	  change it some years later.

	       Because	of  the	 immense  freedom  and	power  of  the
	  language,   the   responsible	  programmer   will   exercise
	  discipline to	 establish and	maintain consistency  of style
	  and  method  or  his	programs  will	be  too	 expensive  to
	  maintain.

┌──────────────────────────────────┐
│ Portability			   │
└──────────────────────────────────┘

	       One reason  for C's  recent rise  in popularity  is its
	  supposed ability to be converted for use on new machines,  a
	  feature  known  as  "portability."   This  belief  may be so
	  widespread because those making the judgment are comparing C
	  to assembly  language.  Another  reason may  be the generous
	  choice   of	C   compilers	available   for	  nearly every
	  cpu/operating	system combination on the market.

	       The C language  was intended to	be machine-independent
	  and toward that end contains no definition for  input/output
	  commands; they  are implemented  in functions,  the detailed
	  operations of	 which can  be changed	without	affecting  the
	  operation of the main	 program.  That	was the	 plan, anyway.
	  In fact, there can be	considerable difficulty	transporting a
	  C program between two	different compilers implemented	on the
	  same machine under the same operating	system.

	       The  methods  used  by  various	software  companies to
	  implement "standard"  compilers are  very different.   So be
	  warned.  If you want to write	programs that are easily moved
	  between machines, choose a compiler that is available	on all
	  the machines you want	to use;	make sure the compiler	chosen
	  adheres  to  the  standards  defined	in K&R.	Also, keep all
	  input/output	 operations   in   independently   defined and
	  compiled functions,  especially those	 that use  the display
	  and/or keyboard.

	       With these caveats and a	little luck you	might be  able
	  to "port"  your program  to the  next generation  of desktop
	  computers without rewriting 80%  of the code.	 The  examples
	  used in this column have been	compiled and tested using  the
	  Lattice C  compiler.	This  compiler meets  the restrictions
	  mentioned above but is not  the only one that	does.	I will
	  try to indicate any potential	portability problems with each
	  example.

┌──────────────────────────────────┐
│ The Simplest C Program	   │
└──────────────────────────────────┘

	       We begin	our study of C with an example of the simplest
	  possible  C  program,	 one  that  does nothing at all.  (The
	  example was originally provided to the Department of Defense
	  by a contractor at a cost of slightly	less than 1.3  million
	  dollars.)


	      main()
	      {
	      }


	       Small as	it is, it demonstrates several characteristics
	  of the language that must be understood.  The	word "main" is
	  the name of the program,  and	every complete C program  must
	  contain  one	and  only  one	of  these;  the	 language   is
	  case-sensitive, so "main" must  be in lower case.   The "()"
	  can contain the definition  for a list of  parameters	passed
	  by the operating system and must appear even if the list  is
	  null.	 The left  and right braces  "{ }" mark  the beginning
	  and end of a block of	code.  Spaces, tabs, carriage returns,
	  and line  feeds, collectively	 known as  "white space,"  are
	  ignored, so the example could	be written as:


	      main(){}

┌──────────────────────────────────┐
│ Introduction to Printf	   │
└──────────────────────────────────┘

	       A more  complicated example  - one  that	actually  does
	  something - is presented  next.  This	example	adds  one line
	  of code  to the  first example,  a function  call, to	 print
	  "hello, world" on  the standard output  unit.  (This is  the
	  first	example	given in the K&R tutorial.)


	      main()
	      {
			printf("hello, world\n");
	      }


	       The additional line introduces several new features  of
	  the language.	 Notice	the semicolon at the end of the	 line;
	  this character is used to mark the end of each statement.

	       Of  particular  importance  is  the  method  of calling
	  functions.  There is no verb such as "call" or "perform"  or
	  "gosub" used to invoke  a subroutine or external  procedure.
	  Instead, merely write	the  name of the routine,  followed by
	  left	and  right  parentheses.   The	routine	 being	 used,
	  "printf," is a standard output routine provided with every C
	  compiler.  In	 the form  shown, it  will display  the	string
	  "hello, world",  followed by  a "new  line" on  the standard
	  output device.

	       This example demonstrates one of	the design concepts of
	  C,  namely,	the  omission	from  the   language  of   any
	  input/output keywords; all such operations are  accomplished
	  with function	calls such as printf.

┌──────────────────────────────────┐
│ The Escape Character		   │
└──────────────────────────────────┘

	       The "\" is called  the "escape character," and  is used
	  in various circumstances to facilitate the entry of  special
	  characters  into  a  program.	  We  will  discuss  the  "\n"
	  sequence later, as it	is potentially troublesome when	moving
	  between machines.  For now, it is sufficient to say that  it
	  will yield a carriage-return,	line-feed sequence on the  PC.
	  If it	were omitted from the example, the cursor would	remain
	  after	the  "d" in  "hello, world"  instead of  going to  the
	  first	column of the following	line.

	       Observe	the  use  of  the  double-quote	 character  to
	  delimit a string.  Although  this example does exactly  what
	  it appears to	do,  the code generated	is  somewhat different
	  than an  intuitive examination  might	conclude.   It is  not
	  important at this point in the discussion; just bear in mind
	  that what you	see is not always what you get.

┌──────────────────────────────────┐
│ Test Your Compiler		   │
└──────────────────────────────────┘

	       If you are reading this with the	intention of  learning
	  how to program in C, I  suggest that you stop	at this	 point
	  and run the above example through your compiler.  Trivial as
	  it appears, it  gives	the opportunity	 to: be	sure  you know
	  how  to  use	your  compiler,	 check	that  it  is installed
	  correctly,  that  the	 output	 from  your  text  editor   is
	  compatible  with  your  compiler,  and  that	you  really do
	  understand the principles demonstrated.

	       If  your	 compiler  is  not  capable  of	 producing the
	  expected results from	the example, as	shown, you should find
	  another  compiler.   If  you	are  using  DOS	 2.0,  try  to
	  re-direct the	output	from the example  to the printer  or a
	  disk file.  While not	absolutely critical, re-direction  can
	  be a very useful debugging aid.

	       By way of experiment, you might create a	few deliberate
	  errors  to  see  how	your  compiler	reacts.	 Leave off the
	  terminal semicolon or	one  of	the quotation marks;  throw in
	  an extra brace, or spell "main" in capital letters.  To  get
	  a better understanding of the	"printf" function, restate the
	  program as:


	      main()
	      {
			printf("hello");
			printf(", world");
			printf("\n");
	      }


	       This  should  give  the	same  results  as the previous
	  example.

	       Now  that  you  understand  the	basic structure	of a C
	  program, we can proceed  to discuss data representation  and
	  variables.

┌──────────────────────────────────┐
│ Data Representation		   │
└──────────────────────────────────┘

	       The  language  requires	that  every variable used must
	  first	  be   declared,   and	 most	compilers  require the
	  declarations	to  appear  in	the  source program before the
	  first	executable statement.  The permissible types will vary
	  somewhat between compilers, but  the types "char" and  "int"
	  are  always  available.   The	 adjectives  long,  short, and
	  unsigned  can	 usually  be  applied  to  int	to  modify its
	  definition.  The types float and double are also  available,
	  but not with every compiler.	The lengths of each data  type
	  are allowed  to vary	according to  the language definition,
	  depending  on	  the  machine	 being	used.	 In  8086/8088
	  implementations: a "char" is 8  bits or 1 byte, "int"  is 16
	  bits or 2  bytes, "float," when  available, is 32  bits, and
	  "double" is 64 bits.  A long int is 32 bits and a long float
	  should be the	same as	a double.

┌──────────────────────────────────┐
│ Integer Variables		   │
└──────────────────────────────────┘

	       The  following  program	demonstrates  how  an  integer
	  variable is declared and printed:


	      main()
	      {
			int izero, imin, imax;

			izero =	0;
			imin  =	-32768;
			imax  =	32767;
			printf("Integers = %d %d %d\n",izero,imin,imax);
	      }


	       There are several new concepts here.  Study the	manner
	  in  which  variables	are  declared  in the first line.  The
	  keyword "int" is  followed by the  names of variables  to be
	  defined, separated by	commas.	 This line is terminated  with
	  a semicolon.	The statement on this line could span three or
	  four lines, with white spaces	placed anywhere	desired.

	       The next	three lines are	 used to assign	values to  the
	  variables.   The  "="  is  the  assignment  operator   which
	  requests  that  an  evaluation  of  the  right  side	of the
	  equation be stored in	the  variable named on the left.   The
	  "%d", in the string passed to printf, is a format code  that
	  tells	printf how to  display the variables izero,  imin, and
	  imax.

	       This example should begin to give you a hint as to  how
	  powerful the printf function	can be.	 The first  parameter,
	  the quoted string,  contains data to	be printed along  with
	  control  information	used  to  format  variables.  It works
	  somewhat like	 a Fortran  or PL/I  format statement,	though
	  simpler.  The	 "%" is  used to  indicate the  presence of  a
	  format description.  The format string is followed by	a list
	  of variable names to be edited into the output.  The example
	  above	shows  the format  string with	three "%d"s  and three
	  variable  names;  in	general,  there	 should	be as many "%"
	  codes	in the	string as there	 are variable names  following
	  it.  The "%' code and the variables names are in  one-to-one
	  correspondence.

	       The "d" format code will cause an integer to be  edited
	  into the output in the  position occupied by the "%d".   The
	  first	 "%d"  is  associated  with  the variable "izero", the
	  second  "%d"  with  "imin,"  and  the last "%d" with "imax."
	  More examples	of the printf statement	will be	given later.

┌──────────────────────────────────┐
│ Character Variables		   │
└──────────────────────────────────┘

	       Let's expand on the last program to demonstrate the use
	  of "char," or character variables:


	      main()
	      {
			int izero, imin, imax;
			char cha, chb, chc;

			izero =	0;
			imin  =	-32768;
			imax  =	32767;
			cha = 'a';
			chb = 'b';
			chc = 'c';

			printf("Integers = %d %d %d\n",izero,imin,imax);
			printf("Characters = %c %c %c",cha,chb,chc);
	      }


	       The most	 important thing  to note  in this  example is
	  that a char  type variable can  contain only one  character;
	  there	is no way to define a character	string variable	except
	  as an	array of single	characters.

	       Notice that whereas the double quote (") has been  used
	  to define a string for the printf function, the single quote
	  ('),  or  apostrophe,  is  used  to  assign  values  to  the
	  character  variables.	  The  distinction  is important.  The
	  double  quote	 denotes  a  character	string terminated by a
	  binary  zero;	 the  single  quote  can  only denote a	single
	  character.  You can request  a character string constant  by
	  using	 double	 quotes,  but  there  is  no  way  to define a
	  character   string   variable	  except   as	an   array  of
	  one-character	elements.  This	turns  out not to be  as silly
	  as  it  sounds,   but	 it  takes   some  getting  used   to,
	  particularly if you are accustomed to	PL/I or	Basic.

	       Unlike those languages, C does not maintain information
	  about	string length but rather defines all strings as	having
	  a variable length terminated	by a binary zero.   This gives
	  the programmer  considerable control	over more  complicated
	  string  manipulations	 at  the  expense  of complicating the
	  simpler  operations.	 As  we	 will  see, there is no	direct
	  string assignment operator; the operation must be  performed
	  by a function	 which is provided  by any decent  compiler as
	  part of its library.

	       At this point, recompile	this program to	be certain you
	  understand  the  principles  involved.   After  it  compiles
	  error-free, purposely	introduce  errors, such	as  omitting a
	  "%d"  or  "%c"  from  the  printf  format  string.  For more
	  exciting results, insert an extra format code	in the string,
	  so  there  are  more	"%d"  characters  than  variable names
	  following the	format string.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       In  my  next  column,  program  control	and looping is
	  discussed.  This will	provide	 the additional	tools we  need
	  to study string processing in	C.




		     ┌──────────────────────────────────┐
		     │ File Name:   ██	  c1.txt    ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## CHANGES.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║									      ║
║									      ║
║			   Enhancements	to PCFL/PCUG			      ║
║									      ║
║									      ║
╚═════════════════════════════════════════════════════════════════════════════╝


  1. Beginning C column	by Ron Watson
┌────────────────────────────────────────────────────────────┐
│							     │
│			 ╔═════╗			     │
│			 ║     ╨			     │
│			 ║				     │
│			 ║				     │
│			 ║				     │
│			 ║     ╥			     │
│			 ╚═════╝			     │
│							     │
└────────────────────────────────────────────────────────────┘


  2. Demonstration programs, FREEWARE(tm), etc.
┌────────────────────────────────────────────────────────────┐
│	  ╥						     │
│	  ║						     │
│    ╔════║═  ╔════╗   ╔╗  ╔╗  ╔════╗  ╔════╗		     │
│    ║	  ║   ║	   ╨   ║╚╗╔╝║  ║ ╔╗ ║  ║    ╨		     │
│    ║	  ║   ╠═╣      ║ ║║ ║  ║ ║║ ║  ╚════╗		     │
│    ║	  ║   ║	   ╥   ║ ╚╝ ║  ║ ╚╝ ║  ╥    ║		     │
│    ╚════╝   ╚════╝   ╨    ╨  ╚════╝  ╚════╝		     │
│							     │
└────────────────────────────────────────────────────────────┘


  3. Beginning FORTH column by Guy Kelly. (FORTH processor also	supplied!!)
┌────────────────────────────────────────────────────────────┐
│							     │
│    ╔═════╗						     │
│    ║	   ╨						     │
│    ║	      ╔════╗   ╔════╗  ╔══╦══╗	╥    ╥		     │
│    ╠══╣     ║	╔╗ ║   ║    ║  ╨  ║  ╨	║    ║		     │
│    ║	      ║	║║ ║   ╠══╦═╝	  ║	╠════╣		     │
│    ║	      ║	╚╝ ║   ║  ╚═╗	  ║	║    ║		     │
│    ╨	      ╚════╝   ╨    ╨	  ╨	╨    ╨		     │
│							     │
└────────────────────────────────────────────────────────────┘


  4. Improved screen scrolling
┌────────────────────────────────────────────────────────────┐
│   ╔════╗						     │
│   ║	 ╨						     │
│   ║	      ╔════╗   ╔════╗  ╔════╗  ╥       ╥	     │
│   ╚════╗    ║	   ╨   ║    ║  ║ ╔╗ ║  ║       ║	     │
│	 ║    ║	       ╠══╦═╝  ║ ║║ ║  ║       ║	     │
│   ╥	 ║    ║	   ╥   ║  ╚═╗  ║ ╚╝ ║  ║     ╥ ║     ╥	     │
│   ╚════╝    ╚════╝   ╨    ╨  ╚════╝  ╚═════╝ ╚═════╝	     │
│							     │
└────────────────────────────────────────────────────────────┘


┌──────────────────────────────────┐
│ Numeric Keypad		   │
└──────────────────────────────────┘


	    ┌────┐ ┌────┐ ┌────┐ ┌────┐
	    │7	 │ │8	│ │9   │ │    │
	    │	 │ │	│ │    │ │    │	      "Upward" movement in file
	    │Home│ │	│ │PgUp│ │ -  │
	    └────┘ └────┘ └────┘ └────┘
	    ┌────┐ ┌────┐ ┌────┐ ┌────┐
	    │4	 │ │5	│ │6   │ │    │
	    │	 │ │	│ │    │ │    │
	    │<-	 │ │	│ │ -> │ │    │
	    └────┘ └────┘ └────┘ │    │
	    ┌────┐ ┌────┐ ┌────┐ ├────┤
	    │1	 │ │2	│ │3   │ │    │
	    │	 │ │	│ │    │ │ +  │	      "Downward" movement in file
	    │End │ │	│ │PgDn│ │    │
	    └────┘ └────┘ └────┘ ├────┤
				 │    │
				 │    │
				 │    │
				 │    │
				 └────┘



┌──────────────────────────────────┐
│ "Upward" Movement                │
└──────────────────────────────────┘


	    ┌────┐
	    │7	 │     ▄▄▄▄
	    │	 │     ▄▄▄▄	 move screen to	top of file
	    │Home│
	    └────┘

	    ┌────┐
	    │8	 │     ▄▄▄▄
	    │	 │     ▄▄▄▄	 scroll	up 1 line
	    │	 │
	    └────┘

	    ┌────┐
	    │9	 │     ▄▄▄▄
	    │	 │     ▄▄▄▄	 scroll	up 1/2 page
	    │PgUp│
	    └────┘

	    ┌────┐
	    │	 │     ▄▄▄▄
	    │	 │     ▄▄▄▄	 scroll	up 1 page
	    │ -	 │
	    └────┘

┌──────────────────────────────────┐
│ "Downward" Movement              │
└──────────────────────────────────┘

	    ┌────┐
	    │1	 │     ▄▄▄▄
	    │	 │     ▄▄▄▄	move screen to bottom of file
	    │End │
	    └────┘

	    ┌────┐
	    │2	 │     ▄▄▄▄
	    │	 │     ▄▄▄▄	 scroll	down 1 line
	    │	 │
	    └────┘

	    ┌────┐
	    │3	 │     ▄▄▄▄
	    │	 │     ▄▄▄▄	 scroll	down 1/2 page
	    │PgDn│
	    └────┘

	    ┌────┐
	    │	 │
	    │	 │
	    ├────┤     ▄▄▄▄
	    │ +	 │     ▄▄▄▄	 scroll	down 1 page
	    ├────┤
	    │	 │
	    │	 │
	    └────┘


  5. Split-files to split double-sided PCFL disks into single-sided ones.
┌────────────────────────────────────────────────────────────┐
│   ╔════╗						     │
│   ║	 ╨						     │
│   ║	      ╔════╗   ╥	 ╥    ╔══╦══╗		     │
│   ╚════╗    ║	   ║   ║	 ║    ╨	 ║  ╨		     │
│	 ║    ╠════╝   ║	 ║	 ║		     │
│   ╥	 ║    ║	       ║     ╥	 ║	 ║		     │
│   ╚════╝    ╨	       ╚═════╝	 ╨	 ╨		     │
│							     │
└────────────────────────────────────────────────────────────┘


	Double-sided	   =	    Single-sided	+	 Single-sided

	┌───────────┐		    ┌───────────┐		 ┌───────────┐
	│  Disk	A   │		    │  Disk AA	│		 │  Disk AAA │
	│	    │	  ▄▄▄▄	    │		│	▄	 │	     │
	│	 o  │	  ▄▄▄▄	    │	     o	│     ▄▄█▄▄	 │	  o  │
	│    ▐█	    │		    │	 ▐█	│	█	 │    ▐█     │
	│    ▐█	    │		    │	 ▐█	│		 │    ▐█     │
	└───────────┘		    └───────────┘		 └───────────┘


  6. All file identification banners now appear	at the bottom of the file.
┌────────────────────────────────────────────────────────────┐
│							     │
│		     ┌──────────────────────────────────┐    │
│		     │ File Name:  ██	rescue.me   ██	│    │
│		     └──────────────────────────────────┘    │
│							     │
└────────────────────────────────────────────────────────────┘




		     ┌──────────────────────────────────┐
		     │ File Name:  ██  changes.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## DOS1.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║			DOS - Past, Present, and Future			      ║
║									      ║
║				      by				      ║
║									      ║
║				  Don Buresh				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       Greetings.  I have been looking forward to writing this
	  article because it is	about the birth	and growth of  PC-DOS.
	  This article	is fun	for me	to write  because I  have been
	  involved with	PCs from their introduction in October 1981.

	       I was  teaching COBOL  programming at  a	private	school
	  when I read an announcement  about the IBM-PC	in the	Boston
	  Globe.  I was	expecting  a microcomputer that	had  the power
	  of  a	 mainframe  and	 was  the  size	of a briefcase.	 After
	  learning about the Intel 8088	processor, I realized that IBM
	  had a	winner!	 This CPU  can address one megabyte of	random
	  access memory	and can	be used	in conjunction with the	 Intel
	  8087,	a numeric co-processor.	 These two facts convinced  me
	  to purchase an IBM-PC.

	       I bought	my PC in February of 1982 and was terrified by
	  the machine.	 My computing  experience involved  mainframes
	  exclusively where a programmer was not even allowed to touch
	  the machine, let alone have  the ability to open up  the box
	  and examine the innards.  For	the first two months it	sat on
	  my desk  while I  tried to  understand BASIC	and the	PC-DOS
	  manual.   I  quickly	grasped	 BASIC	and then purchased the
	  IBM-PC assembler.

	       In  the	next  six  months  I  immersed myself in i8088
	  assembly language and	the listing of the PC ROM contained in
	  the Technical	Reference Manual.  After much work, I realized
	  that the IBM-PC assembler was	not used to generate the  ROM,
	  since	it would not permit me to put a	label in a program  by
	  itself.  I remember learning	how to perform I/O  operations
	  on a diskette, using INT 13H,	over Thanksgiving.  It	seemed
	  like an impossible task that would never be completed.

	       During this  time I  was	writing	 and marketing	a disk
	  utility, that	 met  with  marginal  success.	 For financial
	  reasons,  I  took  a	contract  with	a Boston area computer
	  company that was developing a	PC-compatible microcomputer; I
	  worked on  their ROM.	 From this  unique perspective,	 I saw
	  PC-DOS grow into the mature product that it is today.	 After
	  the  contract	 was  over,  I	continued  to  develop	IBM-PC
	  software for companies in  the Boston	area.  I  am currently
	  contracting with a  Boston area company  that	is writing  an
	  integrated  software	package	 for  the  IBM-PC  and	 other
	  microcomputers.

┌──────────────────────────────────┐
│ PC-DOS 1.0			   │
└──────────────────────────────────┘

	       When  IBM-PC  DOS  1.0  was  introduced,	 it  contained
	  several commands  and	limited	 batch processing  facilities.
	  About	half of	the  commands were internally part  of PC-DOS,
	  while	 the  disk  utilities  were external assembly language
	  programs.  These commands are	listed below:

		     ┌──────────────────────────────────┐
		     │ CHKDSK	   COMP	     COPY	│
		     │ DATE	   DIR	     DISKCOMP	│
		     │ DISKCOPY	   ERASE     FORMAT	│
		     │ MODE	   PAUSE     REM	│
		     │ RENAME	   SYS	     TIME	│
		     │ TYPE				│
		     └──────────────────────────────────┘

	       These commands were written for a single-sided diskette
	  with forty (40) tracks and eight (8) sectors per track.  The
	  track	numbers	start with track  zero (0) and end with	 track
	  thirty-nine (39).  The sector	 numbers within	a track	 begin
	  with sector one (1) and end with sector eight	(8).

	       PC-DOS also came	with interpretive BASIC, a text	editor
	  called EDLIN,	 a LINKer,  a DEBUGger,	and a  series of BASIC
	  programs.   All   of	these	programs  were	 sold  on  one
	  single-sided floppy diskette.

	       In May  1982, PC	 Magazine published  its first	issue.
	  Users	groups were quickly forming across the nation.	People
	  immediately noticed  that the	 IBM-PC	and  the PC-DOS	 could
	  handle  only	single-sided  diskettes.   This	 was seen as a
	  clear	 disadvantage  at  the	time.	However,  people  were
	  hopeful   because   the   PC	 was   the   first inexpensive
	  microcomputer	  that	 used	the   Intel   8088   CPU chip.
	  Furthermore,	the  information  coming  out  of  Boca	 Raton
	  indicated that IBM was working furiously on a	revised	PC-DOS
	  that would be	capable	of supporting double-sided drives  and
	  diskettes.

	       At this time, the literature indicated that PC-DOS  was
	  a  Microsoft	product.   However,  few  people knew that the
	  operating  system  was  contracted  out to Seattle Computer.
	  This company wrote the disk operating	system and the command
	  parser.  When	the two	 programs were submitted to  IBM, they
	  subjected them  to an	 extensive quality-assurance  program,
	  found	 well  over  300  bugs,	 and  decided  to  rewrite the
	  programs.  This is why PC-DOS	is copyrighted by both IBM and
	  Microsoft.  Both companies played a part in the  development
	  of the product.

┌──────────────────────────────────┐
│ PC-DOS 1.1			   │
└──────────────────────────────────┘

	       In  the	late  summer  of  1982,	 IBM  introduced their
	  updated version of PC-DOS.   While IBM called	the  operating
	  system PC DOS	1.1, Microsoft decided that it could sell  the
	  product to  other computer  companies	that  were emerging at
	  the time.   They called  their product  MS-DOS 1.25  because
	  there	were at	least  twenty-five (25)	documented changes  to
	  DOS.

	       The major difference  between DOS 1.0  and 1.1 is  that
	  the latter can process  double-sided diskettes.  All of  the
	  external, and	most of	the internal commands, were  rewritten
	  to accommodate double-sided use.

	       At the same time, IBM released the Technical  Reference
	  Manual  that	contained  a  listing  of the firmware and the
	  hardware specifications of  the machine.  Producers  of both
	  hardware and software	alike  pored over this document	 eager
	  to  learn  about  the	 PC;  I	personally recall studying the
	  manual day and  night.  I also  read the Intel  Data Catalog
	  which	 contained  all	 the  information  in  the   Technical
	  Reference Manual, but	in greater detail.

	       When PC-DOS 1.1 was released, IBM included  EXE2BIN.EXE
	  on the  DOS diskette.	  This program	converts an  .EXE file
	  into	a   .COM  file.	   Although  this   was	 seemingly  an
	  insignificant	 addition  to  the  release,  it  has  greatly
	  increased the	productivity of	software developers.  I	recall
	  my first attempts  to	use EXE2BIN.   As a beginner,  I had a
	  difficult  time  coordinating	 MASM,	LINK  and  EXE2BIN  to
	  produce a .COM  file.	 The secrets  to creating a  .COM file
	  are:

		┌──────────────────────────────────────────────┐
		│ 1. Put  all  of  the	code  and data in one  │
		│    segment				       │
		│					       │
		│ 2. Do	not fix	up any segment register	values │
		│    in	the assembly language code; and	       │
		│					       │
		│ 3. Use  ORG  100H  in	 the beginning of the  │
		│    assembly language code to make room  for  │
		│    the Program  Segment Prefix  required by  │
		│    PC-DOS.				       │
		└──────────────────────────────────────────────┘


	       Softalk and Personal Computer  Age were the next	 major
	  magazines  to	 arrive	 on  the  scene.   The editors of both
	  publications wanted  a technically  competent	magazine  that
	  would	serve as an alternative	to PC Magazine.	 In the	course
	  of a year, both magazines have achieved their	objective.

	       While IBM and Microsoft were busy creating PC-DOS  2.0,
	  several small	computer companies attempted to	cash in	on the
	  popularity  of  the  PC.  The	 first	company	 to bring a PC
	  compatible to	market was  Compaq Computer.  The founders  of
	  the company were former  employees of	Texas Instruments  who
	  decided  to  leave  and  form	 their own company.  They were
	  almost ready	to bring  the Compaq  to the  marketplace when
	  Texas	Instruments sued Compaq	claiming patent	infringements.
	  About	a year later, the case was settled out of court.

	       During this  period I  was working  for another company
	  developing a	PC compatible  microcomputer.  I  ensured that
	  the  firmware	 was  functionally  equivalent	to that	of the
	  IBM-PC.   We	struggled  with	 a  series  of issues that can
	  make-or-break	 compatibility	between	 machines.  A detailed
	  discussion of	these issues is	provided in another article in
	  this section.

┌──────────────────────────────────┐
│ PC-DOS 2.0			   │
└──────────────────────────────────┘

	       In the summer and fall of 1982, IBM and Microsoft  were
	  working on  PC-DOS 2.0.   PC-DOS 1.1	was entirely rewritten
	  with the hope	of  evolving into a significant	 competitor to
	  Bell Laboratories'  operating system  UNIX.  (Microsoft  had
	  been licensed	to sell	 their version of UNIX	called XENIX.)
	  The methodology was simple: increase the number of  assembly
	  language functions available through PC-DOS, via INT 21H, so
	  the C	Language can be	implemented easily on a	microcomputer.

	       In achieving their objective, IBM and Microsoft tripled
	  the size  of IBMDOS.COM,  IBMBIO.COM,	and  COMMAND.COM.  The
	  new commands available to the	operating system were:

		     ┌──────────────────────────────────┐
		     │ BACKUP	   BREAK     BUFFERS	│
		     │ CHDIR	   CLS	     DEVICE	│
		     │ FILES	   GRAPHICS  MKDIR	│
		     │ PATH	   PRINT     RECOVER	│
		     │ RESTORE	   RMDIR     SHELL	│
		     │ TREE	   VER			│
		     └──────────────────────────────────┘

	       The major feature  of PC	DOS  2.0 is the	 provision for
	  use of a hard	disk and a hierarchical	file structure.	  This
	  file	structure  allows  one	to  create, change, and	remove
	  sub-directories.    This   feature   greatly	 increases the
	  flexibility of the operating	system,	making it look	almost
	  like a mainframe.

	       When IBM	released PC-DOS	2.0, they also went to	market
	  with two new versions	of the PC. Both	products were modified
	  to correct bugs found	in  the	ROM in early PCs.  One product
	  was the  PC/XT, with	a 10  megabyte hard  disk system  that
	  could	use the	new file structure supported by	PC-DOS 2.0.

	       In early	1983,  two more	magazines  were	being sold  on
	  the newsstands.  PC World  and PC Technical Journal  quickly
	  established	themselves   as	  viable   magazines.	  Both
	  publications attracted a technical audience that craved more
	  information about the	machine.

┌──────────────────────────────────┐
│ PC-DOS 2.1			   │
└──────────────────────────────────┘

	       The introduction	 of PC-DOS  2.0	was  a major marketing
	  and  system  programming  feat.   Unfortunately,  PC-DOS 2.0
	  contained  several  annoying	bugs  that  potentially	 could
	  destroy the contents	of a user's  hard disk.  IBM  released
	  PC-DOS 2.1 in	conjunction with their new product, the	PC/Jr.
	  To date, IBM has met with marginal success in	marketing this
	  operating system and their new home computer.

┌──────────────────────────────────┐
│ The Future			   │
└──────────────────────────────────┘

	       The future of the PC lies with the software  developers
	  rather than with IBM or Microsoft.  Today a microcomputer is
	  like	a  seed	 planted  in  the  ground.   If	 the  software
	  developers do	not create programs for	a machine, it is as if
	  the seed had been planted in rocky soil, tried to grow,  and
	  then died.  The IBM-PC is a mature product that was  planted
	  in fertile  soil because  the	software  developers created a
	  large	body of	programs for the computer.

	       The operating systems for  the PC are migrating	toward
	  UNIX,	and the	application programs are consolidating to form
	  integrated software packages.	 The language of choice	is the
	  C Language created at	Bell Laboratories.

	       The major problems  encountered by software  developers
	  are execution	speed and program size.	 Although Lotus	 1-2-3
	  dominates the	 integrated software  market, there  are other
	  companies in the wings attempting to bring their products to
	  market.  At this writing  I cannot determine whether	the PC
	  can  sustain	this  trend.   It  may	be  that  a  new   and
	  inexpensive machine must be introduced so that the  software
	  developers can fulfill their dreams.

┌──────────────────────────────────┐
│ Retraction			   │
└──────────────────────────────────┘

	       In my last article I stated that	IBM wrote COMMAND.COM.
	  I  was  mistaken.   Microsoft	 and  Seattle Computer are the
	  companies that created the program.

┌──────────────────────────────────┐
│ User Supported Software	   │
└──────────────────────────────────┘

	       Here is an update on the	user supported software	that I
	  intend to  distribute	as  a companion	 to this  column.  The
	  disk utility FREECOPY	is completed, together with the	user's
	  guide.  I am currently working on the	source code guide  and
	  expect to have the  diskettes	available to users'  groups in
	  late April or	early May of 1984.


					  Donald L. Buresh, C.D.P.




		     ┌──────────────────────────────────┐
		     │ File Name:   ██	 dos1.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## DOS2.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║			   Is It IBM-PC	Compatible?			      ║
║									      ║
║				      by				      ║
║									      ║
║				  Don Buresh				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       A year ago I was	 on a development team creating	 a PC-
	  compatible microcomputer.   I	was  responsible for  assuring
	  that the firmware was	functionally equivalent	to the IBM-PC.
	  I came  into the  contract with  no pre-conceptions  on what
	  constitutes a	clone.	During	the nine months	that  I	stayed
	  with the company, I learned that a compatible	must have  the
	  following features:

┌──────────────────────────────────┐
│ System Architecture		   │
└──────────────────────────────────┘

	       The microcomputer must have an IBM-PC bus with an  open
	  architecture.	 This means that  the computer can use	memory
	  and peripheral boards	 manufactured by companies  other than
	  IBM.	Furthermore,  it  means	 that  the system unit must be
	  physically large enough to contain these boards.

┌──────────────────────────────────┐
│ Chips				   │
└──────────────────────────────────┘

	       The major chips in  the microcomputer should be	in the
	  i8088	family.	 This includes the i8088, i8086, i8186 and the
	  i8286	processor  chips.  The	computer should	 also use  the
	  i8272	 or   NEC  765	 disk  controller   chip,  the	i8250A
	  asynchronous	or  the	 i8251A	synchronous/asynchronous chip,
	  the i8259A interrupt controller chip,	the Motorola 6845  CRT
	  controller chip, and the i8237 DMA controller	chip.

┌──────────────────────────────────┐
│ Numeric Processing		   │
└──────────────────────────────────┘

	       The mother board	should contain a socket	for the	 i8087
	  numeric processor  chip or  the equivalent  chip that	 works
	  with the other members of the	i8088 family of	processors.

┌──────────────────────────────────┐
│ Addressing			   │
└──────────────────────────────────┘

	       The addresses  of all  of the  I/O ports	 should	be the
	  same as in the IBM-PC.   Although this may not be  possible,
	  depending upon the  selection	of the	peripheral processors,
	  it is	extremely important  that the address of  the Motorola
	  6845 be the same, regardless of whether the compatible has a
	  monochrome or	graphics monitor.

┌──────────────────────────────────┐
│ Firmware			   │
└──────────────────────────────────┘

	       The numbering of	the interrupts should match the	IBM-PC
	  exactly.  This issue	may not	seem  worthy to	be  mentioned;
	  however, the software	engineers for the original DEC Rainbow
	  started the firmware interrupts  at 21H rather than  at 01H.
	  Since	 the  PC-DOS  interrupts  also	begin  at 21H, you can
	  quickly see why the Rainbow ran CP/M exclusively.  The later
	  versions  of	the  hardware  corrected  this problem,	with a
	  hardware switch.

┌──────────────────────────────────┐
│ Data Segment			   │
└──────────────────────────────────┘

	       The data	 segment for  the firmware  should contain the
	  same	data  items,  in  the  same  order,  as	in the IBM-PC.
	  Although  not	 a  critical  issue, software engineers	should
	  make every effort to ensure that the number of bytes in  the
	  compatible's data segment is equal to the number of bytes in
	  the IBM-PC's data  segment.  If so,  the clone can  then run
	  PC-DOS as well as MS-DOS.

	       I do recommend  that PC-compatible manufacturers	 add a
	  Cursor_Address variable to their firmware.  If they  include
	  this variable, they can  take	advantage of the  linearity of
	  Video	 RAM  and  improve  the	 speed of the Write Character,
	  Write	Character and Attribute, and Write Teletype  functions
	  of INT 10H.

┌──────────────────────────────────┐
│ Video	Ram Segment Address	   │
└──────────────────────────────────┘

	       The  IBM-PC  uses  two	Motorola  6845s,  one  for   a
	  monochrome display and another for a graphics	display.   The
	  segment address of the  monochrome adapter is	0B000H,	 while
	  0B800H  is  the  address  of	the  graphics  adapter.	   IBM
	  designated only one alpha page of video RAM for a monochrome
	  adapter  and	eight  alpha  pages  for  a  graphics adapter.
	  Furthermore, the IBM-PC has only one graphics	plane.

	       I  recommend  that  a  PC  manufacturer	maintain these
	  features if at all possible.	A small	compatibility issue is
	  the number of	graphics planes; more than one graphics	 plane
	  is entirely acceptable.

┌──────────────────────────────────┐
│ Interlacing			   │
└──────────────────────────────────┘

	       In  graphics  mode,  the	 IBM-PC	 uses  the   following
	  interlacing scheme to	store  the scan	lines.	The  even scan
	  lines	begin at relative address  0000H and end at 1F3FH, and
	  the  odd  scan  lines	 start	at  2000H  and	end  at	3F3FH.
	  Pictorially,



			    ┌─────────────────────┐   0000H
			    │			  │
			    │	  even scan	  │
			    │	    lines	  │
			    │			  │
			    ├─────────────────────┤   1F3FH
			    │			  │
			    │			  │
			    ├─────────────────────┤   2000H
			    │			  │
			    │	   odd scan	  │
			    │	    lines	  │
			    │			  │
			    └─────────────────────┘   3F3FH



	       Although	 interlacing  the  scan	 lines	in graphics is
	  essential  for  compatibility,  it  is  unfortunate that IBM
	  chose	this scheme in	the first place.  The  European	Common
	  Market  does	not  permit  hardware  manufacturers  to  sell
	  computers with interlaced scan lines,	as interlacing	causes
	  some eye strain.

	       Some  compatibles,  such	 as  the  Tandy	 2000,	do not
	  interlace scan lines at all.	I, for one want	IBM to	remove
	  this hardware	feature.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       These are some of the issues that make a	clone a	clone.
	  I probably left out an  issue	here or	there.	If  so,	please
	  write	and tell me.




		     ┌──────────────────────────────────┐
		     │ File Name:   ██	 dos2.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## EDITOR.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║				   Editorial				      ║
║									      ║
║				      by				      ║
║									      ║
║		       Bill Salkin - Editor of PCFL/PCUG		      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Foreward to the Second Issue	   │
└──────────────────────────────────┘

	       Our  second  issue  marks  the beginning	of substantial
	  enhancements to PCFL/PCUG; the need for two DS/DD  diskettes
	  is symptomatic of these changes.

	       A substantial change in our marketing approach has also
	  occurred.  All future	issues of PCFL/PCUG must be  purchased
	  from	ABComputing;  the  FREEWARE(tm)	 principle  no	longer
	  applies.  This reversal in direction was necessitated	by the
	  increasing daily volume of diskettes received.

	       Single issues cost $12; $72 for a one-year  (six-issue)
	  subscription.	 We still encourage you	to make	copies of each
	  issue	for your friends, and  ask that	they remit $6  for the
	  issue	to help	us defray our expenses.

┌──────────────────────────────────┐
│ Diskette A  and  Diskette B	   │
└──────────────────────────────────┘

	       The second  issue of  PCFL/PCUG consists	 of two	 DS/DD
	  diskettes called "Diskette A"  and "Diskette B." Diskette  A
	  contains the text of PCFL/PCUG, and Diskette B contains DEMO
	  programs, executable modules,	and odds-and-ends which	 would
	  not fit on Diskette A.

┌──────────────────────────────────┐
│ Masthead and Table of	Contents   │
└──────────────────────────────────┘

	       A masthead and  table of	contents  are now an  integral
	  part	of  PCFL/PCUG.	 You  can  turn	 to the	masthead for a
	  statement  of	  our  pricing	 structure  and	  a  list   of
	  contributing editors.

┌──────────────────────────────────┐
│ Screen Scrolling		   │
└──────────────────────────────────┘

	       Screen scrolling	has been enhanced.  The	screen can  be
	  scrolled up  or down	by one	line, a	 half page,  or	a full
	  page.	 The Home and End keys will move the screen to the top
	  or bottom of the file, respectively.	See the	"Enhancements"
	  section of the Editor's Console for the graphic details.

┌──────────────────────────────────┐
│ New Columns			   │
└──────────────────────────────────┘

	       New columns for beginners, in C and FORTH, are included
	  in this  issue, as  is a  working FORTH  processor to	 boot!
	  (Excuse my pun.  See the FORTH column	for details.)

┌──────────────────────────────────┐
│ DEMOnstration	Programs	   │
└──────────────────────────────────┘

	       The mail	we received indicated that DEMO	programs could
	  favorably enhance PCFL/PCUG.	 DEMOS have now	 been included
	  on Diskette B.

	       In  general,  DEMOS  need  not be technically oriented;
	  database, business-related  programs and  the	like  are also
	  sought.

┌──────────────────────────────────┐
│ "Split" Files                    │
└──────────────────────────────────┘

	       "Split"  files  are   batch  files  that   convert  the
	  double-sided	 PCFL/PCUG   diskette	into   the  equivalent
	  single-sided copies.	This is	 a convenience for those  with
	  double-sided drives who wish to make single-sided copies for
	  others.

	       The split  file on  Diskette A  is called "splita.bat",
	  and the split	file on	Diskette B is "splitb.bat".

┌──────────────────────────────────┐
│ Where	Are the	Ads?		   │
└──────────────────────────────────┘

	       The space limitation of	floppy diskettes forced	us  to
	  cancel  the  ad  section  in	this  issue.  Happily, it will
	  return in our	next issue, so stop biting your	nails!

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       Keep in touch, as  future changes to PCFL/PCUG  will be
	  quite	interesting.




		     ┌──────────────────────────────────┐
		     │ File Name: ██   editor.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## FILES160.TXT

{% raw %}
```
Disk No:  160
Program Title: PC Firing Issue #2
PC-SIG version: 1.1

This is the second issue of PC Firing Line, with the magazine's official
title.  It has been positioned as the underground newspaper for the IBM
user.  You will be presented with the untold tales and in-depth
programming aids.  Some of the articles are ADA, Assembly routines,
LISP, Fortran, and items not written about by IBM.  It also contains
many sample program listings with accompanying documentation.

Usage:  Reference.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $12.00

File Descriptions:

???      TXT  Various information and reviews (22 files).
ADABOOK  REV  Book reviews on 6 different ADA books.
GRABBAG  C    Source code for USQ.C.
ITOP     LSP  Routine converts infix to prefix mathematical expressions.
LISP1    TXT  Various mathematical utilities.
LIST1    ADA  Various mathematical utilities
LIST1    ASM  Various mathematical utilities.
LIST1    BAS  Various mathematical utilities
LIST1    C    Various mathematical utilities
LIST1    FOR  Various mathematical utilities.
PCFL     EXE  PC-Firing Line main program.
PRETTY1  COM  Printer interface routine.
READISCO PE   Documentation for READISCOPE program.
SPLITA   BAT  Splits this diskette for side sided copying.
WRITERS  GDE  Text file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## FORT1.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║		     Roots of 3rd and 4th Order	Polynomials		      ║
║									      ║
║				       by				      ║
║									      ║
║				 William Squire				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       In the 16th century, Italian mathematicians  Tartaglia,
	  Ferrari, and	Cardan,	developed  formulas for	 solving third
	  and	fourth	 order	 polynomial   equations,   with	  real
	  coefficients.

	       Today,  very   few  computer   centers  have   programs
	  implementing	these  solutions.   (They  rely	 on  iterative
	  programs that	will work for any degree polynomial.)  This is
	  not  entirely	 due  to  a  desire  to	minimize the number of
	  subroutines in  a library;  the "nominally"  exact solutions
	  frequently  do  not  give  results  as accurate as iterative
	  solutions.

	       This column discusses  a	FORTRAN	implementation	of the
	  exact	 solutions   for  solving   third  and	 fourth	 order
	  polynomials.	  These	  solutions   can   be	 found	 in an
	  "Introduction  to   the  Theory   of  Equations,"   by  N.B.
	  Conkwright, Ginn Publishers.

┌──────────────────────────────────┐
│ Exact	Solution of the	Cubic	   │
└──────────────────────────────────┘

	       If P3(Z)	is a cubic polynomial, with real coefficients


						2     3
		    P3(Z)  =  C	 +  C  X  + C  X  +  X
			       0     1	     2


	  then one root, "X," is given by


		    X =	  U  +	V  -  (1/3)C			   (1)
					    2

	  where


			     3
		    G  = ( 2C  - 9 C C	+ 27 C ) / 54
			     2	    1 2	      0



				    2
		    H  = ( 3C	- C   )	/ 9
			     1	   2



				   2	3  1/2	1/3
		    U  = [ -G +	( G  + H  )    ]		   (2)



				   2	3  1/2	1/3
		    V  = [ -G -	( G  + H  )    ]		   (3)




	       The quantity


			    2	 3
		    D =	   G  +	H


	  appearing in (2) and (3) is proportional to the discriminant
	  of  the  cubic,  and	indicates  the	nature of the roots of
	  P3(Z).


	       In particular:

		    if ( D > 0 )
			  one root is real and two are complex conjugates
		    elseif ( D = 0 )
			  all roots are	real and at least two are equal
		    elseif ( D < 0 )
			  all roots are	real and unequal
		    endif


	       Note in the case	D <  0,	all three roots	are real,  and
	  that it  is necessary	 to take  the cube  root of  a complex
	  number in U and V. This may have been	an important factor in
	  convincing  mathematicians  of  the  "reality"  of so called
	  "imaginary" numbers.

	       When D<0,  U, and  V are	 complex conjugates,  so X  is
	  real.

	       The cause of inaccuracy	of the exact solutions	is, in
	  many cases, the loss of significant digits in	U or V when


		     2	     3
		    G	<<  H


	       This effect may be minimized by calculating:


				   2	3  1/2	1/3
		    U  = [ -G +	( G  + H  )    ]


	  if -G	is positive, or



				   2	3  1/2	1/3
		    V  = [ -G -	( G  + H  )    ]



	  if  -G  is  negative.	  These	 forms	are  chosen  so	  that
	  essentially no subtraction, only addition, occurs.


	       When U or V is determined the mate may be found from


		    UV = - H


	  and  a  root	determined  by	(1).   Dividing	 the  cubic by
	  (X-root)  yields  a  quadratic  equation  that can be	solved
	  easily.

┌──────────────────────────────────┐
│ Exact	Solution of the	Quartic	   │
└──────────────────────────────────┘

	       The quartic equation


						2      3      4
		    P4(Z)  =  C	 +  C  X  + C  X  + C X	  +  X
			       0     1	     2	     3


	  is  solved  by  finding  a  real  root, "Y" of the resolvent
	  cubic:


	    2	  2					      2	    3
 ( 4C C	 - C   - C  C  )/8  + 1/4 ( C C	 - 4 C	) X  - 1/2 C X	+  X  =	0
     2 0    1	  3  0		     3 1      0		    2


	       Using this real	root, the quartic  is factored as  the
	  product  of  two  quadratics	with  real  coefficients,  and
	  readily  solved.   The   real	 coefficients  mentioned   are
	  expressions involving	"Y".

┌──────────────────────────────────┐
│ Programming Considerations	   │
└──────────────────────────────────┘

	       The program accompanying	this article implements	 these
	  exact	 solutions.   The  user	 is  asked  whether a cubic or
	  quartic  polynomial	is  involved,	and  to	  provide  the
	  coefficients.	 The  values of	 the roots  are	determined and
	  printed, and the absolute values  of P3 and P4 at  each root
	  is printed.

	  ┌─────────────────────┐
	  │ Cubic Polynomial	│
	  └─────────────────────┘

	       If a cubic polynomial is	requested, subroutine CUBIC is
	  called.  CUBIC calls subroutine CUR  to find a real root  of
	  the polynomial,  and then  QDRTC to  find the	 two remaining
	  roots.

	       CUR   is	  a   novelty.	  By   treating	  the  various
	  possibilities	separately it produces an accurate result.

	  1.   If D < 0, the  exponentiation operator (**) is used  to
	  find the cube	root.  CUR then	uses the complex conjugate  of
	  the cube root	in the calculation of the real root.

	       The  difficulty	is  that  one  must properly match the
	  branch of the	 cube root used	 for U and  V, as the  FORTRAN
	  compiler does	 not automatically  do this.   For example, if
	  asked	for a cube root	of (-8.,0), the	FORTRAN	processor  may
	  not give (-2.,0), but	one of the complex roots  (1,+1.73205)
	  or (1,-1.73205).

	       Another difficulty is that the "**" operation does  not
	  work on  negative real  arguments.  The  function CBRT(X) is
	  called from CUR, and it uses SIGN (ABS(X) ** .333333,	X)  to
	  find	the  cube  root	 for  both  negative  and  positive X.
	  Strictly speaking, CBRT is  not needed.  The necessary  code
	  could	be  easily inserted  in	the  two places	 where CBRT is
	  called, but I	believe	using CBRT makes the program clearer.


	  2.   If D = 0, the root of the cubic becomes:

			 1/3
		    2(-G)     -	C  / 3
				 2


	  3.   If D > 0, and -G	is negative, then V is evaluated and
	  U is determined from:


		    U =	 - H
			 ─────
			   V


	       If D > 0, and -G	is positive, then U is evaluated and V
	  is determined	from:



		    V =	 - H
			 ─────
			   U


	       The idea	is to match the	 sign of D to the sign	of -G.
	  In this manner, no subtraction, only addition, is performed.
	  This approach	minimizes round-off error.

	  ┌─────────────────────┐
	  │ Quartic Polynomial	│
	  └─────────────────────┘

	       Routine QURTC  is called	 to find  the roots  of	P4. It
	  uses CUR  to find  a real  root of  the resolvent cubic, and
	  QDRTC	 is  called  twice  to	find  the roots	of the the two
	  quadratics mentioned in the section on quartic polynomials.

	       QDRTC  also  treats  positive,  negative, and vanishing
	  values of the	discriminant separately, calculates the	 first
	  root (R1), and finds the second root by using


		    (R1) (R2) =	 constant term of quadratic

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       The set of subroutines presented	gives accurate results
	  for a	variety	of cubics and quartics with real coefficients.
	  However, three paths were required, depending	upon the  sign
	  of the discriminant.	Perhaps	in the future, improvements in
	  the complex arithmetic  capabilities of compilers  will make
	  it possible to implement the exact solutions for cubics  and
	  quartics with	complex	coefficients directly.




		     ┌──────────────────────────────────┐
		     │ File Name:  ██	fort1.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## FORTH1.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║				 Venture FORTH				      ║
║									      ║
║				      by				      ║
║									      ║
║				   Guy Kelly				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

		      Hardware + Software = "Usefulware"

	       If  you	are  reading  this,  then  very	 probably your
	  hardware is  an IBM-PC  or compatible	 personal computer.  I
	  deduce from this that	the  hardware part of our equation  is
	  determined, and the item of interest is the software.

	       The software component of "usefulware" comes from:  (1)
	  buying it, or	(2), writing it.  The other option, piracy, is
	  NOT to be considered!

	       If  you	can  buy  software,  why  are you reading this
	  column?   Still  here?   Good!   Perhaps you are considering
	  writing software.

┌──────────────────────────────────┐
│ Hidden Compromises		   │
└──────────────────────────────────┘

	       What  environment  are  you  going  to  use  to	 write
	  software?   (Notice  I  said	environment,  not  programming
	  language.)   Software	 developers  traditionally  select   a
	  language that	 is most  suitable (read:  most	popular,  most
	  glamorous, most  inexpensive,	etc.)  and, most  importantly,
	  one  that  is	 available  for	 their	hardware and operating
	  system.

	       The hidden problem with	this approach is that  you are
	  stuck	with design decisions as to the	features supported  by
	  the  language	 and  the  operating system.  Your programming
	  environment is totally predetermined.	 So what?

	       Suppose you have	a great	idea for some "usefulware" but
	  the operating	 system	hampers	 your access  to the hardware,
	  and  the  programming	 language  doesn't  support  the  data
	  structures that you require.

	       This is not unusual!  Try to develop the	equivalent  of
	  the Microsoft	Flight Simulator  package using	DOS calls  and
	  BASIC/Pascal/APL/LISP/Ada  etc!   What  to  do?   How	 about
	  C/FORTH/Assembly?

	       Let's try  developing an  expert system,  such as  G.E.
	  did,	for  diagnosing	 problems  with	diesel locomotives.  A
	  different sort of  problem entirely, but  would you want  to
	  use BASIC/Pascal/APL/Ada/C/Assembler?	  Probably not.	  What
	  about	PROLOG/LISP?  FORTH was	the choice G.E.	made when they
	  wrote	this program, which runs on a PDP 11/23	system.

┌──────────────────────────────────┐
│ The FORTH Environment		   │
└──────────────────────────────────┘

	       A traditional FORTH system is more than a language.  It
	  is a	complete programming  environment which	 is extensible
	  both outwardly and inwardly!

	       Outward	extension  is  accomplished  by	 building   an
	  application language on  top of the  FORTH system, and  then
	  using	the new	language to  add application layers on top  of
	  the new environment.

	       Inward extensibility is	accomplished by	modifying  the
	  structure/capability/features	of the	FORTH environment -  a
	  process   called   meta-compilation,	 i.e.,	 letting FORTH
	  re-compile a	new version  of	itself.	  A not	 too difficult
	  task,	 as  most  of  FORTH  is  written  in  FORTH, with the
	  remainder written using the FORTH assembler.


	    ┌──────────────────────────────────────────────────────┐
	    │		    The	FORTH Environment is:		   │
	    ├──────────────────────────────────────────────────────┤
	    │							   │
	    │  an operating system,				   │
	    │  an editor,					   │
	    │  an assembler,					   │
	    │  an interpreter,					   │
	    │  a compiler,					   │
	    │  a high-level language,				   │
	    │  a set of	development tools,			   │
	    │  a stack-oriented, traditionally 16-bit machine, and │
	    │  has simple virtual memory management.		   │
	    │							   │
	    └──────────────────────────────────────────────────────┘

┌──────────────────────────────────┐
│ Design Decisions		   │
└──────────────────────────────────┘

	       As in other programming environments, FORTH is based on
	  a  series  of	 design	 decisions concerning the interactions
	  between the programmer and the computer.  The	unique set  of
	  decisions, made  essentially by  one man,  have created  the
	  unique programming environment which is FORTH.  Some of  the
	  guiding rules	in the design of FORTH were:

		      ╔════════════════════════════════╗
		      ║	  Rule 1.  Keep	it simple!     ║
		      ╚════════════════════════════════╝

	       The whole environment is	understandable and  modifiable
	  by one person.

		      ╔════════════════════════════════╗
		      ║	  Rule 2.  Keep	it small!      ║
		      ╚════════════════════════════════╝

	       The  whole  environment	can  reside  in	 under	16K of
	  computer memory.

		      ╔════════════════════════════════╗
		      ║	  Rule 3.  Keep	it fast!       ║
		      ╚════════════════════════════════╝

	       Provide	an  integrated,	 structured, conditional macro
	  assembler.

		      ╔════════════════════════════════╗
		      ║	Rule 4.	Make it	transportable! ║
		      ╚════════════════════════════════╝

	       FORTH has been  put on almost  every piece of  computer
	  hardware known.

┌──────────────────────────────────┐
│ FORTH	Applications		   │
└──────────────────────────────────┘

	       FORTH  is  best	known  for  its	 use  at  Astronomical
	  Observatories,  in  process	control,  and  in   laboratory
	  instrumentation.   It	 has  also  been  used	as  a  systems
	  implementation language by Atari  for	video games, and  by a
	  diverse group	of companies for many applications.  There  is
	  even a  commercially available  FORTH	package	 that compares
	  favorably  with   the	 better	  program-generating  database
	  languages.

	       FORTH has been used to write BASIC, Pascal, LISP, LOGO,
	  COBOL,  and  FORTH  processors,  database  systems,	expert
	  systems and control systems.

┌──────────────────────────────────┐
│ Origins of the FORTH		   │
└──────────────────────────────────┘

	       The best	source of information on the origins of	 FORTH
	  is contained	in Vol.	 1, No.	 6 of  "FORTH Dimensions," pp.
	  60-75.  The article "FORTH The  Last Ten Years And The  Next
	  Two Weeks ---	"  is a printed version  of a speech given  at
	  the October  1979, FORTH  Convention in  San Francisco.  The
	  speech was given by Charles H. Moore,	the inventor of	FORTH.

	       In  brief,  Mr.	Moore,	in  the	 early	60's,   became
	  dissatisfied	with  the  available  programming  systems and
	  began	 experimenting	with  a	 variety  of  aspects  of  the
	  programming environment.  By about 1969 he had put  together
	  most of the  elements	of what	 is now	FORTH.	 He states, on
	  page	72:  "My  original  goal  was  to  write  more than 40
	  programs  in	my  life.   I  think  that I have increased my
	  throughput by	a factor of 10.	 I don't think that throughput
	  is   program-language	  limited   any	  longer,   so	I have
	  accomplished what I set out to do."

	       The name	was chosen  to indicate	a "fourth"  generation
	  language running  on the  then "third"  generation hardware.
	  It was  spelled FORTH	 because the  file system  would allow
	  only five-character names, and  because, as is true  in most
	  file systems,	case is	disregarded.

┌──────────────────────────────────┐
│ History			   │
└──────────────────────────────────┘

	       FORTH has followed several paths	to its present state.

	  Path 1.  Mr. Moore had completed the first version of	 FORTH
	  at  the  National  Radio  Astronomy  Observatory.  From this
	  observatory, FORTH spread to Kitt Peak Observatory, and from
	  there	throughout the world  of Astronomy until, in  1976, it
	  was  made   a	 standard   language  for   the	 International
	  Astronomical Union.

	  Path 2.  In approximately 1969, Charles Moore	and  Elizabeth
	  Rather started FORTH,	 Inc., which produced  miniFORTH, then
	  microFORTH, and eventually polyFORTH and polyFORTH II.

	  Path 3.  Dr.	Hans Nieuwenhuijzen, and  others at the	 State
	  University at	Utrecht	in the Netherlands, learned of	FORTH.
	  They produced	a variety of enhancements and applications and
	  helped organize the European FORTH Users Group.

	  Path 4.  Bill	Ragsdale and  others in	the San	Francisco  Bay
	  became involved  with	FORTH  and formed  the FORTH  Interest
	  Group	(FIG).	They produced  a FORTH newsletter named	 FORTH
	  Dimensions, and  public  domain  versions  of	FORTH for five
	  different microcomputers and the DEC PDP11.  Vol. 5, No.  6,
	  of FORTH Dimensions, pp. 20 -	25, details the	formation  and
	  activities of	FIG.

	  Path	5.    FORTH,  Inc.,   the  European   group,  and  the
	  Astronomical users joined to produce a 1977 set of  standard
	  FORTH	words.	(A word	in FORTH corresponds to	a procedure or
	  subroutine in	other languages.)  FIG became involved in 1978
	  and an updated set of	standard words was produced that year.
	  The  Astronomical  users   then  left	 the   standardization
	  efforts.

	       In 1979,	a charter was proposed and the FORTH Standards
	  Teams	was formed.  A	1979 Standard for FORTH	 was developed
	  to include  the "new"  8-bit machines.   The European  group
	  then left the	 standards team	and  a group of	 FORTH vendors
	  joined the efforts.	This changed the  makeup of the	 group
	  from predominately users  to a more  equal mix of  users and
	  vendors.  In 1982, meetings of the FORTH Standards Team were
	  conducted to update the 1979 Standard.  The updates were  so
	  comprehensive	that in	1983 a new standard was	released.  The
	  1983 Standard	is scheduled for update	in 1988.

	  Path 6.   Around 1978,  several vendors  licensed microFORTH
	  from FORTH,  Inc., and  started selling  their own versions.
	  Later, in  about 1978-79  (after the	release	of  the	public
	  domain  figFORTH),  a	 variety  of  vendors  sold   enhanced
	  versions of figFORTH,	then 79	Standard versions, and now the
	  83 Standard version.

	       The  conclusion	to  be	drawn  is  that	there are many
	  FORTHs available today, some based on	figFORTH, some meeting
	  earlier  standards,  and  some  meeting  the	83   standard.
	  Compatibility	between	FORTH versions can be a	problem	but it
	  is impossible	to avoid in an evolving	language.

┌──────────────────────────────────┐
│ Information Sources		   │
└──────────────────────────────────┘

	       The best	 source	of  FORTH literature  is Mountain View
	  Press,Inc.,  P.O.  Box   4656,  Mountain  View,   CA	94040,
	  (415)961-4103.  Their	advertisements	in Byte	magazine,  Dr.
	  Dobbs	Journal,  and FORTH  Dimensions	list  at least fifteen
	  books	 on  FORTH,  as	 well  as  a  variety  of   conference
	  proceedings and user manuals.

┌──────────────────────────────────┐
│ Books				   │
└──────────────────────────────────┘

	       One of the best books  on FORTH is "Starting FORTH"  by
	  Leo Brodie, published	by Prentice-Hall.  It is well written,
	  contains    tutorial	  examples,    and    several	useful
	  mini-applications.  The version  of FORTH that  it describes
	  is a modified	polyFORTH  with	references to figFORTH	and to
	  79 Standard FORTH.

	       Another contender for best FORTH	book is	"FORTH  Tools"
	  by   Anita   Anderson	  and	Martin	 Tracy,	  published by
	  MicroMotion, 12077 Wilshire  Blvd., Los Angeles,  CA	90025,
	  (213)821-4340.   It,	too,  is  well	written	 and  has  the
	  advantage  of	 describing  an	 83  Standard version of FORTH
	  which	is  very similar  to two  of the  1983 Standard	public
	  domain FORTHs.

┌──────────────────────────────────┐
│ FORTH	Magazines		   │
└──────────────────────────────────┘

	       There are two  magazines	devoted	exclusively  to	FORTH:
	  "FORTH Dimensions,"  published by  the FORTH  Interest Group
	  (P.O.	 Box 1105, San Carlos, CA 94070), and "The Journal  of
	  FORTH	Applications and Research," published by the Institute
	  for  Applied	FORTH	Research,  Inc.,  (P.O.	   Box	27686,
	  Rochester, NY,  14627).  A  six-issue	subscription  to FORTH
	  Dimensions is	$15.00.

	       Another	magazine  which	 publishes  many  articles  on
	  FORTH, and an	 annual	issue devoted  to FORTH, is  Dr. Dobbs
	  Journal.

	       For those  who are  technically oriented,  an excellent
	  article to read is "An Architectural Trail to  Threaded-Code
	  Systems" by  Peter M.  Kogge, IBM  Federal Systems Division.
	  It was published in IEEE Computer, March 1982, pp. 22	- 32.

	       This  article  builds  a	 logical  picture  of  a FORTH
	  system,  and	 contains  only	  one  minor   understatement:
	  "threaded-code  systems  should  find  a  secure niche where
	  small-to-moderate   specialized   interactive	   application
	  packages, real-time control of external devices and sensors,
	  and engineering-type	throw-away code	 dominate."  Companies
	  such as G.E.,	with  their expert system, Cubic  Western Data
	  with a 2000  screen Navigational package,  Computer Software
	  Design  with	 the  Data   Ace  (a   comprehensive  database
	  development package),	and several other companies with  5000
	  screens  (5  Megabytes  of  source  code) or larger business
	  applications	have  exceeded	the  "small-to-moderate"  size
	  mentioned.

┌──────────────────────────────────┐
│ FORTH	Meetings		   │
└──────────────────────────────────┘

	       There  are  two	annual	FORTH  meetings: (1) The FORML
	  (FORTH Modification Laboratories) conference at the Asilomar
	  Conference Center at Pacific Grove Ca., in November and  (2)
	  the Rochester	FORTH Applications  Conference in June at  the
	  University of	 Rochester, in	Rochester, NY.	There are also
	  regional FIG	meetings, usually  held	monthly,  in 47	cities
	  around the world.  If	you are	interested in attending	one of
	  these	meetings, call the FIG hot-line	at (415) 962-8653  for
	  information about the	nearest	one.

┌──────────────────────────────────┐
│ Other				   │
└──────────────────────────────────┘

	       You may	have noticed  that the	word "FORTH"  has been
	  used as a proper  name and as	an  acronym.  I	have tried  to
	  use  the  same  form	as  used  by  the  various vendors and
	  publishers.

┌──────────────────────────────────┐
│ Until	Next Time		   │
└──────────────────────────────────┘

	       Having mentioned	 the glittering	 generalities, in  our
	  next	column	 we  discuss   the  specifics	of  the	 FORTH
	  programming  environment  and	 provide  examples  of	 FORTH
	  applications and code.   So, as Henry	 Laxen says, "May  the
	  FORTH	be with	you."




		     ┌──────────────────────────────────┐
		     │ File Name: ██   forth1.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## FORTH2.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║			   FORTH Reference Documents			      ║
║									      ║
║				      by				      ║
║									      ║
║				   Guy Kelly				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ The FORTH Environment		   │
└──────────────────────────────────┘

	       The file	 FORTH.OBJ, on	Diskette B,  invokes the FORTH
	  environment.


	    ┌──────────────────────────────────────────────────────┐
	    │		   This	FORTH Environment is:		   │
	    ├──────────────────────────────────────────────────────┤
	    │							   │
	    │  an operating system,				   │
	    │  an editor,					   │
	    │  an assembler,					   │
	    │  an interpreter,					   │
	    │  a compiler,					   │
	    │  a high-level language,				   │
	    │  a set of	development tools,			   │
	    │  a stack-oriented, traditionally 16-bit machine, and │
	    │  has simple virtual memory management.		   │
	    │							   │
	    └──────────────────────────────────────────────────────┘


	       This column documents some of the words or features  of
	  1) the FORTH operating  systems, 2) the full-screen  editor,
	  and 3) the assembler.

	       You  should  regard  this  documentation	as a reference
	  guide.  You will probably  be	unable to understand  it fully
	  at this time,	but it should become useful later.

┌──────────────────────────────────┐
│ Operating System Elements	   │
└──────────────────────────────────┘

	       This  implementation  of	 FORTH	includes the following
	  FORTH-83 Standard word sets:

		   ┌────────────────────────────────────┐
		   │ required word set			│
		   │ double number extension word set	│
		   │ assembler extension word set	│
		   │ system extension word set		│
		   │ controlled	reference word set.	│
		   └────────────────────────────────────┘


	  (EDITOR'S NOTE: A "word" in FORTH corresponds to a procedure
	  or subroutine	in other languages.)

	       Also  included  are  an	editor	word  set  and various
	  display, printing, and tool-set words.

	       The  documentation  for	the  83	 Standard word sets is
	  contained in the "FORTH-83 Standard," published by the FORTH
	  Standards Team.  It is  available from Mountain View	Press,
	  Micro-Motion,	and The	Institute for Applied FORTH  Research,
	  Inc.

	  ┌──────────────────────────────────────────────────────────┐
	  │		   Documentation Requirements		     │
	  ├──────────────────────────────────────────────────────────┤
	  │							     │
	  │  1.	 The system dictionary space: type: HERE U. <enter>  │
	  │							     │
	  │  2.	 The  application  dictionary  space:  SP@ PAD - U.  │
	  │	 <enter>					     │
	  │							     │
	  │  3.	 The data stack	space: same as above (shared).	     │
	  │							     │
	  │  4.	 The return stack space: S0 @ SP@ - 80 - .	     │
	  │							     │
	  │  5.	 Mass storage used by system: up to 61K	on Vol.	0    │
	  │							     │
	  │  6.	 Mass  storage	available  to  application: all	the  │
	  │	 rest,	up to  block 65534.   Block 65535  = buffer  │
	  │	 missing.					     │
	  │							     │
	  │  7.	 Standard PC terminal functions.		     │
	  │							     │
	  │  8.	 System	action on error	conditions:		     │
	  │							     │
	  │	 ' name or ['] name not found = ? error message,     │
	  │	 */ */MOD / /MOD divide	by 0 = max signed integer    │
	  │	 UM/MOD	divide by 0 = max integer		     │
	  │	 : compile error = ? error message		     │
	  │	 DO compile error = structure error message	     │
	  │	 EXECUTE improper address error	= crash!	     │
	  │	 EXIT is compile only				     │
	  │	 FORGET	will cause deferred crash if DEFERRED	     │
	  │		word or	searched vocabulary forgotten	     │
	  │	 FORTH-83 should work, if it doesn't, let me know!   │
	  │	   LOAD	issues an error	message	if block 0 is used.  │
	  └──────────────────────────────────────────────────────────┘



       ┌────────────────────────────────────────────────────────────────┐
       │			 Useful	Words				│
       ├────────────────────────────────────────────────────────────────┤
       │       Follow all the typed words with an <enter>.		│
       │								│
       │  To list currently active vocabularies	type: ORDER		│
       │  To list the words in the CONTEXT vocab. type:	WORDS		│
       │  To list the source code for a	word type: VIEW	name		│
       │      (requires	that you have the source disks!).		│
       │  To list the current volume number type: VOLUME @ .		│
       │  To update volume number to current disk type:	MOUNT		│
       │  To select the	editor type: EDITOR				│
       │  If you are stuck in an "infinite" loop type: ctrl-break       │
       │  To list a screen type: n LIST	(n = number of screen to list)	│
       │  To toggle the	printer	off and	on, use	ctrl-P.			│
       │  Note:	PRINTER	ON and PRINTER OFF also	work.			│
       │  To print a set of screens use	n1 n2 SHOW			│
       │  To select drive b, type: 1DRIVE				│
       │  To select drive a, type: 0DRIVE				│
       └────────────────────────────────────────────────────────────────┘


	       As  issued,  this  version  of  FORTH  is  set  up  for
	  single-sided drives, with  diskettes formatted for  160K per
	  side.	 If you	 have double-sided drives,  type: 2 IS	#SIDES
	  <enter>.

	       The book	"FORTH TOOLS Volume 1," by Anita Anderson  and
	  Martin  Tracy	 (published  by	 MicroMotion,  12077  Wilshire
	  Blvd.,  Los  Angeles,	 CA  90025,  (213)821-4340), is	a very
	  close	match to this version of FORTH.	 It is recommended  as
	  additional documentation.  The major differences are in  the
	  area	of  the	 editor	 and  in  the approach to disk access.
	  FORTH	TOOLS uses  DOS	files and  this	version	of  FORTH uses
	  the traditional  direct disk	access via  1024 byte absolute
	  disk blocks.

┌──────────────────────────────────┐
│ Editor Documentation		   │
└──────────────────────────────────┘

	       The Editor provides three basic functions:

		 Display     (To display a screen on the terminal)
		 Reference   (To find a	specific character string)
		 Edit	     (To modify	the contents of	a screen)

	  ┌───────────────┐
	  │ Display	  │
	  └───────────────┘

	       The  display  command  (DISP)  displays	the  specified
	  screen and  puts the	system in  the display	mode.  In this
	  mode,	the PgUp and the PgDn keys display the previous	or the
	  next consecutive screen, while  the Home key provides	 entry
	  to the Edit mode.  Any other key will	exit from the  Display
	  mode to FORTH	(the Space bar will exit without a beep).

	  (EDITOR'S NOTE: A FORTH screen is 16 lines by 64 columns.)

	  ┌───────────────┐
	  │ Reference	  │
	  └───────────────┘

	       The Reference mode allows searching for all occurrences
	  of a string, up to 35	characters, over a specified range  of
	  screens.  The	DREF command  lists all	occurrences by	screen
	  and line number.  The	EREF command displays a	screen,	enters
	  the Edit mode, and places the	cursor at the beginning	of the
	  screen to allow editing  of the screen.  All	occurrences of
	  the string are consecutively referenced.

	  ┌───────────────┐
	  │ Edit Mode	  │
	  └───────────────┘

	       Edit mode is used to  modify the	contents of a  screen.
	  To  invoke  the  words  associated  with  the	 editor,  type
	  EDITOR<enter>.

	       There are four ways to enter the	Edit mode:

	┌──────────────────────────────────────────────────────┐
	│   Type EDITOR<enter> at the system level, then       │
	│						       │
	│   1.	type the word EDIT, or			       │
	│   2.	type the word EREF, or			       │
	│   3.	type the word INTO			       │
	│						       │
	├──────────────────────────────────────────────────────┤
	│						       │
	│   4.	from the Display mode, press the Home key.     │
	│						       │
	└──────────────────────────────────────────────────────┘

	       The  cursor  position  indicates	 the present mode.  In
	  Edit mode, the cursor	is within the screen; in Display  mode
	  the cursor is	just below  the	screen,	and when returning  to
	  system mode, is placed several lines below the screen	image.

   ┌───────────────────┬──────────────────────────────────────────────────┐
   │   Edit Commands   │		   Description			  │
   ├───────────────────┼──────────────────────────────────────────────────┤
   │  n	DISP	       │  Displays screen n and	places the system in the  │
   │		       │  Display mode.					  │
   │		       │						  │
   │  n	EDIT	       │  Place	the  system in	the Edit  mode with  the  │
   │		       │  cursor at the	Home position in screen	n.	  │
   │		       │						  │
   │  m	n DREF cccc    │  List	all  screens  and  line	 numbers   which  │
   │		       │  contain the  string cccc.   A	space  is needed  │
   │		       │  after	DREF; m	is  the	first screen to	 search;  │
   │		       │  n,  is  the  last,  and  "cccc" represents any  │
   │		       │  string of characters.				  │
   │		       │						  │
   │  m	n EREF cccc    │  Place	the system in the Edit mode and	 display  │
   │		       │  occurrences of cccc.	To continue to the  next  │
   │		       │  occurrence of	the string, use	either ^E or ^Q.  │
   │		       │  ^E = accept any  editing changes, ^Q =  no-op.  │
   │		       │  A space is needed after EREF.			  │
   │		       │						  │
   │  m	n o FROM       │  Setup	for the	INTO command.  Displays	screen m  │
   │		       │  with lines n through o flagged.		  │
   │		       │						  │
   │  m	n INTO	       │  Moves	the lines flagged by FROM into screen  m  │
   │		       │  starting at line n and displays the  resulting  │
   │		       │  screen with  the moved  lines	flagged	 and the  │
   │		       │  system in  the Edit  mode.  After  any editing  │
   │		       │  the changes are  accepted by exiting	the Edit  │
   │		       │  mode with  a ^E  and are  rejected by	 exiting  │
   │		       │  with a ^Q.   A  single  FROM	allows	multiple  │
   │		       │  INTO's.                                         │
   │		       │						  │
   │  m	n o SCOPY      │  Copies   a   set   of	  screens.   m	 is  the  │
   │		       │  lowest-numbered  source   screen;  n	 is  the  │
   │		       │  lowest-numbered  destination	 screen	 to   be  │
   │		       │  overwritten; o is the	 count of screens to  be  │
   │		       │  moved.  The screens are moved	in proper order.  │
   │		       │  The starting and ending source and destination  │
   │		       │  screens are displayed	and  a response	of Y  is  │
   │		       │  required before  the copy  will proceed.   Any  │
   │		       │  other	response will abort the	copy.		  │
   └───────────────────┴──────────────────────────────────────────────────┘


   ┌──────────────────────────────────────────────────────────────────────┐
   │		     Control keys active in the	Edit mode		  │
   ├───────────┬──────────────────────────────────────────────────────────┤
   │	       │							  │
   │  [up]     │  up-arrow, moves cursor up one	line			  │
   │  [down]   │  down-arrow, moves the	cursor down one	line		  │
   │  [left]   │  left-arrow, moves the	cursor left one	character	  │
   │  [right]  │  right-arrow, moves the cursor	right one character	  │
   │  [home]   │  Home-key, moves the cursor to	screen top-left		  │
   │  [away]   │  End-key, moves the cursor to bottom-right - 8	spaces	  │
   │  [tab]    │  Tab-key, moves the cursor to the next	tab-right	  │
   │  [back]   │  shift-Tab-key, tabs the cursor left			  │
   │  [I/C]    │  Ins-key, inserts a space at the cursor		  │
   │  [D/C]    │  Del-key, deletes the character at the	cursor		  │
   │  [I/L]    │  F7-key, inserts 64 spaces starting at	the cursor	  │
   │  [D/L]    │  F8-key, deletes 64 characters	from the cursor		  │
   │  [clear]  │  F9-key,  clears the screen from the cursor		  │
   │	       │	   to the [away] position, leaves the		  │
   │	       │	   cursor at the [away]	position		  │
   │ [abandon] │  ^Q-keys, exits the Edit mode without updating		  │
   │	       │	   the disk					  │
   │ [confirm] │  ^E-keys, exits the Edit mode and updates the		  │
   │	       │	   disk.					  │
   └───────────┴──────────────────────────────────────────────────────────┘


┌──────────────────────────────────┐
│ Assembler Documentation	   │
└──────────────────────────────────┘

	       The assembler is	invoked	 by typing: CODE, followed  by
	  the name of  the new code  word; the assembler  instructions
	  are typed next, and  the definition is terminated  by	typing
	  "NEXT,END-CODE".  The following example illustrates this.


	     CODE ONE (	--1 ) 1	# 0 MOV, 0 PUSH, NEXT, END-CODE


	┌─────────────────────────────────────┐
	│ Format:  source destination OPCODE, │
	└─────────────────────────────────────┘

	┌───────────────────┐
	│ Registers:	    │
	├───────────────┬───┴────────┬────────────┬───────────────┐
	│  0 = AX	│ 1 = CX     │ 2 = DX	  │ 3 =	BX = W	  │
	├───────────────┼────────────┼────────────┼───────────────┤
	│  4 = SP = S	│ 5 = BP = R │ 6 = SI =	I │ 7 =	DI = U *  │
	└───────────────┴────────────┴────────────┴───────────────┘

	┌──────────────────────────────────────────────────────┐
	│   [BX] = W ) = 3 )	    [BX+SI] = W	I + )  **      │
	│   [BP] = R ) = 5 )	    [BX+DI] = W	U + )	       │
	│   [SI] = I ) = 6 )	    [BP+SI] = R	I + )	       │
	│   [DI] = U ) = 7 )	    [BP+DI] = R	U + )	       │
	└──────────────────────────────────────────────────────┘


	** or W	) I ) +	 or 3 6	+ )  or	3 ) 6 )	+  or 9	) etc.
	   ie: registers are treated as	numbers	by the opcodes

	* U is a memory	location in the	present	version	of FORTH


	┌────────────────────────────────────────────────────────┐
	│ [reg+disp] = disp reg)	      ie: n r)	or  3 W	 │
	│ [reg+reg+disp] = disp	reg) reg) +   ie: n W) I) +	 │
	└────────────────────────────────────────────────────────┘


	       As in other FORTH  operations, the rule is:  parameters
	  first, operators next, where W,  R, I, and U are  parameters
	  and )	is an operator;	and disp is a parameter	and reg) is an
	  operator.   Note   that  the	 )  and	  reg)	operators  are
	  commutative under addition.


	┌──────────────────────────────────────────────────────┐
	│		       Operators		       │
	├──────────────────────────────────────────────────────┤
	│	     ) = register indirect		       │
	│	  reg) = register indirect + displacement      │
	│	     # = immediate			       │
	│	    #A = address			       │
	│	  BYTE = set byte mode (default	is WORD)       │
	│	     L = low byte (applies to registers)       │
	│	     H = high byte (as above)		       │
	│	  (CL) = shift/rotate by number	in reg 1 = CL  │
	│	  (DX) = IN or OUT address in reg 2 = DX       │
	│		 (ex: n	IN,  or	 DX IN,)	       │
	│	   REL = relative CALL,	or JMP,		       │
	│	   FAR = intersegment CALL, or JMP,	       │
	│  CS SS DS ES = segment reg operators		       │
	└──────────────────────────────────────────────────────┘


	┌──────────────────────────────────────────────────────────┐
	│			  Examples			   │
	├──────────────────────────────────────────────────────────┤
	│		 1 2 ADD,	     CX	+ DX ->	DX	   │
	│	      0	 U ) CMP,	   [DI]	- AX ->	flags	   │
	│	 W U + )  6 TEST,	SI - [BX+DI] ->	flags	   │
	│	    0  10 W) ADC,  AX +	[BX+10]	+ cy ->	[BX+10]	   │
	│	5 W) U)	+  2 AND,   [BX+DI+5] and DX ->	DX	   │
	│	    PAD	#A  0 OR,	   PAD or AX ->	AX	   │
	│	   2  TIB #A SUB,	    TIB	- DX ->	TIB	   │
	│	     80	#  0 XOR,	   80 xor AX ->	AX	   │
	│	   -1 #	 W ) MOV,		  -1 ->	[BX]	   │
	│      "400 #  10 U) MOV,               1024 -> [DI+10]    │
	│      30 #  HERE #A ADD,	 30 + (HERE) ->	HERE	   │
	│	 ES  0	3 U) MOV,    AX	-> [DI+3] (+[ES] vs [DS])  │
	│ segment offset FAR JMP,		goto new seg+offs  │
	│	 address REL JMP,		jump to	address	   │
	│    FORTH Documentation				   │
	└──────────────────────────────────────────────────────────┘




		     ┌──────────────────────────────────┐
		     │ File Name: ██   forth2.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## FORTH3.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║			      The FORTH	Processor			      ║
║									      ║
║				      by				      ║
║									      ║
║				   Guy Kelly				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Editor's Note                    │
└──────────────────────────────────┘

	       The 83 Standard PC-FORTH	executable module,  FORTH.OBJ,
	  is  contained	 on  Diskette  B.  It is a public-domain FORTH
	  designed by Mr. Guy Kelly, and the source code is  available
	  from:

		      ╔════════════════════════════════╗
		      ║		 Guy M.	Kelly	       ║
		      ║	     2507 Caminito La Paz      ║
		      ║	       La Jolla, CA 92037      ║
		      ╚════════════════════════════════╝

	       Send $25.00  for	2  diskettes and  handling, or	copy a
	  friend's diskette containing the source code.

	       Another	public	domain	FORTH  is  F-83,  by Laxen and
	  Perry.  It is	available from:

		      ╔════════════════════════════════╗
		      ║	 No Visible Support Software   ║
		      ║		P.O. Box 1344	       ║
		      ║	      2000 Center Street       ║
		      ║	      Berkeley,	CA 94794       ║
		      ╚════════════════════════════════╝

	       Send $25.00, specify:  8080 C/PM-80 model (8" disks)
				      8086 C/PM-86 model (8" disks)
				      8086 MS-DOS  model (5.25" disks)


┌──────────────────────────────────┐
│ Overview			   │
└──────────────────────────────────┘

	       On Diskette B of	 PCFL/PCUG, I have included  a working
	  FORTH	processor, FORTH.OBJ.	This is	an  executable module,
	  despite the "OBJ" file extension (do not attempt to LINK  or
	  run it under DOS!)

	       In future columns, I explain how	to use FORTH.OBJ,  but
	  reference documentation  is provided	in this	 month's FORTH
	  column.  (See	the "FORTH Reference Documents" article.)

	       FORTH.OBJ is the	83 Standard PC-FORTH, and you can  use
	  it to	test examples presented	in this	column,	and to further
	  your knowledge of FORTH.

┌──────────────────────────────────┐
│ File Overview			   │
└──────────────────────────────────┘

	       The  following  files  on  Diskette  B,	can be used to
	  create a self-booting	FORTH diskette:

	  1.   FORTH.OBJ  is  the  self-booting	 FORTH.	  It  needs to
	  reside on the	first seven tracks of a	single-sided diskette.

	  2.   FORTH.BAT is a batch file to help put it	there.

	  3.   FORTH.MSG   contains   instructions,   displayed	  from
	  FORTH.BAT.

┌──────────────────────────────────┐
│ Self-booting FORTH		   │
└──────────────────────────────────┘

	       To create  a self-booting  FORTH	diskette  on drive  A,
	  proceed as follows:

	       Insert  a  diskette   containing	 DEBUG	(the   program
	  DEBUG.EXE) into drive	A.

	       The diskette on drive B should contain the three	 FORTH
	  files	mentioned above.

	       Type A>B:FORTH

	  press	the Enter key, and follow the instructions.


	       The result is a self-booting FORTH diskette in drive A.
	  (EDITOR'S NOTE: Magic!)




		     ┌──────────────────────────────────┐
		     │ File Name: ██   forth3.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## KEDIT.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
   ┌────────────────────┐
   │  KEDIT Review	│
   ┌────────────────────────────────────────────────────────────────────┐
   │									│
   │  Reviewed by:	Bill Salkin					│
   │									│
   │  Product Name:	KEDIT						│
   │  Description:	Full screen text editor	with limited word-	│
   │			processing capabilities.			│
   │									│
   │  Overall Rating:	Excellent					│
   │									│
   │  Company:		Mansfield Software Group			│
   │			P.O. Box 532, Storrs, CT 06268			│
   │			(203) 429-8402					│
   │									│
   │  Version:		3.0						│
   │  Price:		$95  + $3 shipping				│
   │  Copy Protected:	No						│
   │  RAM Needed:	160K						│
   └────────────────────────────────────────────────────────────────────┘



   ┌────────────────────┐
   │  KEDIT Review	│
   ┌────────────────────────────────────────────────────────────────────┐
   │									│
   │  DOS Level:	1.0, 1.1, or 2.0				│
   │  Monitor(s):	Monochrome or Color				│
   │									│
   │  Manual:		Xeroxed. Highly	readable with good tutorials.	│
   │									│
   │  Unusual	     1.	Max. 15	files can be in	memory for editing	│
   │  Features:	     2.	Screen can be split into multiple windows	│
   │		     3.	Integral SORT command				│
   │		     4.	Supports DOS 2.0 directory structure, and	│
   │			Path command					│
   │		     5.	Includes useful	word-processing	features	│
   │		     6.	Keyboard keys are  user	definable		│
   │		     7.	Logical	operators accepted in search operations	│
   │		     8.	Disk directory can be called up	in a file	│
   │		     9.	Can recover up to last 12 changes made to file	│
   └────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       KEDIT is	 designed to  be similar  to XEDIT  - the  IBM
	  mainframe  editor.   (But,  KEDIT  does  not have a "prefix"
	  area.)   Text-editing	  and  word-processing	 features  are
	  combined to create a	fast, powerful,	and versatile  product
	  that	is  superior  to  IBM's  Personal Editor in almost all
	  respects.  (Note: KEDIT edits	files completely in memory; no
	  disk	spill  facility	 is  available	as  with  the Personal
	  Editor.)

	       A DEMO copy  of KEDIT can  be purchased from  Mansfield
	  Software for $10.

┌──────────────────────────────────┐
│ The KEDIT Screen		   │
└──────────────────────────────────┘

	       When  a	new  file,  new1,  is  edited using KEDIT, the
	  screen looks like:


    ┌────────────────────────────────────────────────────────────────────┐
    │ file d:new1   line=0  column=1	 size=0	     memory=81K		 │
    │ new file...							 │
    │									 │
    │									 │
    │									 │
    │ ***tof***								 │
    │ ***eof***								 │
    │									 │
    │									 │
    │									 │
    │ ====>_								 │
    └────────────────────────────────────────────────────────────────────┘


	       The status line at the top of the screen	indicates: the
	  file being edited ("new1"), the line ("0") and column number
	  ("1") the  cursor is  on, the  number of  lines in  the file
	  ("0"), and the amount of RAM available ("81K").

	       The  message  line,  displaying	the phrase "new file,"
	  reports error	and informational messages.

	       Let's customize the screen layout...

	       The  "command"  line  is  marked  with  an arrow, but I
	  prefer the traditional  reverse video	command	 line.	(Can't
	  teach	an  old	dog  new tricks.)   Typing "arrow  off" on the
	  command  line	 makes	the  arrow  disappear,	and  using the
	  "attribute" command generates a reverse video command line.

	       The screen looks	like:


    ┌────────────────────────────────────────────────────────────────────┐
    │ file d:new1   line=0  column=1	 size=0	     memory=81K		 │
    │									 │
    │									 │
    │									 │
    │ ***tof***								 │
    │ ***eof***								 │
    │									 │
    │									 │
    │									 │
    │ ██████████████████████████████████████████████████████████████████ │
    └────────────────────────────────────────────────────────────────────┘


	       The "tof" (top-of-file)  marker appears on  the current
	  line,	which  is normally  in the  middle of  the screen.   I
	  prefer the "tof" marker to appear at line 3 (the top of  the
	  screen), so I	make the top of	the screen the current line by
	  using	the command "set curline 3".

	       Continuing in this spirit, let's split the screen  into
	  two horizontal screens, with the top screen split vertically
	  into two screens.   Typing "screen 12  v 13" on  the command
	  line	and  pressing  Enter  does  the	trick.	The top	screen
	  consists  of	12  lines  and	the  bottom 13 lines.  The "v"
	  indicates that the top screen	is to be split vertically.

	       These screens  are not  visually	shown  until files are
	  edited requiring their use.  To activate these screens, type
	  "k new2", press Enter, type "k new3", and press Enter.   ("K
	  new2" causes KEDIT to edit, or create, the file new2.)

	       After these commands are	issued,	the screen looks like:


    ┌────────────────────────────────────────────────────────────────────┐
    │ file d:new1   line=   column=  ││file d:new2   line=   column=	 │
    │				     ││					 │
    │ ***tof***			     ││	***tof***			 │
    │ ***eof***			     ││	***eof***			 │
    │				     ││					 │
    │				     ││					 │
    │				     ││					 │
    │ ██████████████████████████████ ││	████████████████████████████████ │
    │ file d:new3   line=0  column=1	 size=0	     memory=81K		 │
    │									 │
    │ ***tof***								 │
    │ ***eof***								 │
    │									 │
    │									 │
    │									 │
    │									 │
    │ ██████████████████████████████████████████████████████████████████ │
    └────────────────────────────────────────────────────────────────────┘


	       Files  new1,  new2,  and	 new3  are now in memory.  The
	  "line" and "column"  fields are blanked  in files new1,  and
	  new2 because neither file  is	currently being	edited.	  File
	  new3 is currently being edited  as shown by the presence  of
	  numbers in the status	line.

	       This  is	 just  a  taste	 of  the fun you can have with
	  KEDIT.  And better yet, the file PROFILE.KED can be used  to
	  save all of the commands we typed, so	when KEDIT is invoked,
	  I am greeted by the silver screen I desire.

┌──────────────────────────────────┐
│ The Current Line		   │
└──────────────────────────────────┘

	       KEDIT uses the  current line as	a reference or	anchor
	  point	for many commands.

	  1.   For example,  typing /HELLO/  on	the  command line will
	  cause	KEDIT to search	each  line in the file,	from  the line
	  after	the  current line,  until HELLO	 is found.   If	a line
	  containing HELLO  is found,  this line  becomes the  current
	  line.

	  2.   As another example,  the	SORT instruction  (an integral
	  part of KEDIT)


	     SORT *


	  causes all lines from	the current line to the	bottom of  the
	  file,	to be sorted  into ascending order (using  the current
	  "zone" settings to define the area to be sorted).

┌──────────────────────────────────┐
│ Key Definition Primitives	   │
└──────────────────────────────────┘

	       Function	 keys  and  key	 combinations can be redefined
	  using	a rich collection of primitives.

	       As a simple example,

		    def	home  [TOPEdge][LEFTEdge]


	  is used to define the	HOME key to move the cursor to the top
	  edge of  the screen,	and then  to the  leftmost edge.   The
	  capitalized  letters	indicate  the  minimal characters that
	  must be typed	for this command to be recognized.

	       The next	example	defines	the F1 key as follows: if  the
	  cursor  is  on  the  command	line,  execute	the   command;
	  otherwise, move the  cursor to the  left margin on  the next
	  line.


	       def F1	[IFcommand][ex][ELSE][cdn][marginl][ENDIF]


	       This is	a little  crowded, but	I hope	you notice the
	  presence of the "IF..ELSE..ENDIF" structure.  I have not yet
	  used	 this	feature	  extensively,	 but   it   sure looks
	  interesting!

┌──────────────────────────────────┐
│ Block	Commands Supported	   │
└──────────────────────────────────┘

	       KEDIT  supports	three  types  of  "blocking."   "Line"
	  blocking is  used in	preparation for	 deleting, moving,  or
	  copying a line or group of lines.

	       "Box" blocking is useful  for overlaying text in  boxes
	  to create artwork.  "Box" blocking and overlaying operate in
	  the same manner  as in the  Personal Editor reviewed	in the
	  first	issue of PCFL/PCUG.

	       "Stream" blocking  could be  called character-blocking.
	  Sentence fragments,  such as	from the  "third word  on line
	  three,  to  the  fourth  word	 on  the  fourth line," can be
	  stream-blocked and then moved, copied, or deleted.

┌──────────────────────────────────┐
│ Targets			   │
└──────────────────────────────────┘

	       To "pick"  out locations  in a  file, KEDIT  is given a
	  target.

	  ┌──────────────────────────────────┐
	  │ Absolute Line Number Targets     │
	  └──────────────────────────────────┘

	       To make line 8 in the file the current line, type

		    :8

	  ┌──────────────────────────────────┐
	  │ Relative Line Number Targets     │
	  └──────────────────────────────────┘

	       To make the  line 8 lines  below	the current  line, the
	  current line,	type

		    8


	       Typing -3 would make the	line 3 lines above the current
	  line the new current line.

	  ┌──────────────────────────────────┐
	  │ String Targets		     │
	  └──────────────────────────────────┘

	       Typing  /HELLO/	on  the	 command  line causes KEDIT to
	  search  each	line  in  the  file,  from  the	line after the
	  current line,	until it finds	the word HELLO.	 This line  is
	  then made the	current	line.

	       Typing

		   /HELLO/ & /GOODBYE/


	  will	cause  KEDIT  to  search  for the next line containing
	  HELLO	 and  GOODBYE.	  That	is,  KEDIT   supports  logical
	  operations in	target searches.

	  ┌──────────────────────────────────┐
	  │ Named Line Targets		     │
	  └──────────────────────────────────┘

	       Have you	ever been on line  352 in a file, gone to  the
	  top of  the file,  and then  pressed PgDn  until you came to
	  line 253, or was it 523, or 352?

	       In KEDIT, a line	is assigned a "name" using the "POINT"
	  command.  (This label	is not part of the file	- it is	active
	  only while the file is edited.)   You	may go to any line  in
	  the file, type the "name" of a line on the command line  (or
	  assign the equivalent	function to a function key), and KEDIT
	  will make the	named line the current line.  In short,	 KEDIT
	  recognizes individual	lines and can "goto" them.

┌──────────────────────────────────┐
│ Commands Allowing Targets	   │
└──────────────────────────────────┘

	       Commands	accepting targets can also specify whether the
	  command  affects  the	 current  "block," "paragraph," or the
	  entire file.

	       The command "uppercase 4" will capitalize all  letters,
	  starting with	the current line, and the next three lines.

	       If an  area is  "box blocked",  "uppercase block"  will
	  capitalize all letters in the	block.

	       "Uppercase  ALL"  capitalizes  all  letters  from   the
	  current line to the end of the file.

┌──────────────────────────────────┐
│ KEDIT	Commands		   │
└──────────────────────────────────┘

	       A few KEDIT  commands deserve special  mention.	Others
	  are listed in	a table.

	  1.   A powerful sort command	is an integral part  of	KEDIT.
	  Unlike DOS 2.0, which	can sort a maximum of 64K data,	 KEDIT
	  "cannot sort more  than 8000 lines,  regardless of how  much
	  memory is available."  (Quote from the user's manual.)

	       The command

		    SORT 6 A 4 5 1 3


	  tells	KEDIT to sort 6	lines, starting	with the current line,
	  in ascending order, sorting on the data in columns 4 and  5,
	  and then columns 1 through 3.

	  2.   Typing an  equal	sign  on the  command line  causes the
	  last command issued to be re-issued.

	  3.   Preceding  a  command  by  an  ampersand, as in "&dir",
	  causes  the	command	 to   remain  on   the	command	  line
	  indefinitely	after  execution.   The	 command  may  then be
	  re-executed by pressing the Enter key.

	       Other KEDIT commands are	shown below.


┌─────────────────────────────────────┬───────────────────────────────────────┐
│	       Example		      │		      Function		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ change /this/that/ * *	      │	 Changes all  occurrences of "this"   │
│				      │	 to "that" from current line to end   │
│				      │	 of file.			      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ def c-F1			      │	 Defines ctrl-F1 key.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ dir [D:]			      │	 Directory on drive D.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ fileid new			      │	 Changes filespec to "new."           │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ getfile fileid (fromline)	      │	 Adds lines from  disk file to	the   │
│		 (forlines)	      │	 file you are editing.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ query	tabs			      │	 Causes	display	of tabs	in  message   │
│				      │	 area.				      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ quit				      │	 Exits a file if no changes made to   │
│				      │	 it.				      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ qquit				      │	 Exits a changed file.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ schange /A/B/			      │	 Selective  change  -  asks  if	you   │
│				      │	 want to make the change.	      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ status			      │	 Display value of each SET option.    │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ ?				      │	 Causes	the last  command issued to   │
│				      │	 be redisplayed	on the command line.  │
└─────────────────────────────────────┴───────────────────────────────────────┘


┌──────────────────────────────────┐
│ Set Commands			   │
└──────────────────────────────────┘

	       "Set"  commands  are  used  by  KEDIT  for a variety of
	  functions such as adjusting the margins, turning wordwrap on
	  or off, setting attributes, using the	DOS 2.0	path  command,
	  and  creating	 a  "lineend"  character  to separate multiple
	  commands.

	       Typing the command

		    SET	MARGINS	11 70 16


	  on the command  line establishes the	left margin at	column
	  11,  the  right  margin  at  column  70,  and	 the paragraph
	  indentation at column	16.

	       The word	set is optional	 in all	set commands, and  the
	  above	command	could have been	typed:


		    MARGINS 11 70 16


	       The command

		    SET	ARBchar	ON $ ?


	  assigns special meaning to  the characters "$" and  "?' when
	  used	in  string  targets  and  with	the change and schange
	  commands.  The  ARBchar characters  act as  wildcards.  (The
	  parallel concept under DOS is	the wildcard character "*", as
	  in erase *.* .)


	       The command

		    SET	attributes n1 n2 n3...


	  is  used  to	adjust	the  attributes	 of:  normal text, the
	  current line,	text within  blocks, text within a  block when
	  the  line  involved  is  also	 the current line, the command
	  line,	the  status line,  the message	line, the  arrow, line
	  numbers (with	NUMBER	ON), the scale	and tab	lines,	target
	  lines,  and  target  lines  that  are	also the current line.
	  (There is enough flexibility here to meet any	taste.)

	       Other Set commands are shown in the following table.


┌─────────────────────────────────────┬───────────────────────────────────────┐
│	       Example		      │		      Function		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set case Mixed Respect	      │	 Upper/lower   case   accepted	 as   │
│				      │	 input;	cases must match in  change   │
│				      │	 and schange commands.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set cmdline Top		      │	 Positions the	command	line at	the   │
│				      │	 top of	the screen.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set curline 3			      │	 Make the third	line on	the  screen   │
│				      │	 the current line.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set dbase on			      │	 Causes	file to	be written to disks   │
│				      │	 in 512	byte multiples;	required by   │
│				      │	 dBASE II, version 2.4.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set justify on		      │	 Paragraphs  are  justified  during   │
│				      │	 formatting.			      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set margins 11 70 17		      │	 Set  left  margin  to	column	11;   │
│				      │	 right	margin	to column   70;	in-   │
│				      │	 dentation to column 17		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set number on			      │	 Causes	line #'s to be displayed.     │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set path on			      │	 Causes	KEDIT and GETFILE  commands   │
│				      │	 to search for files in	directories   │
│				      │	 defined by DOS	PATH command.	      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set screen  n1(v) n2(v) n3(v)	n4(v) │	 Sets size and number of windows      │
│				      │	 displayed on screen.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set tabsout on		      │	 Causes	blank compression when file   │
│				      │	 saved.				      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set tabsin on			      │	 Expands tabs in input files.	      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set varblank on		      │	 Controls how  multiple	blanks	are   │
│				      │	 controlled in string searches.	      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set wordwrap on		      │	 Enables wordwrap feature.	      │
└─────────────────────────────────────┴───────────────────────────────────────┘


┌──────────────────────────────────┐
│ Word Processing Features	   │
└──────────────────────────────────┘


┌────────────────────────────┬────────────────────────────────────────────────┐
│	  Example	     │			  Function		      │
├────────────────────────────┼────────────────────────────────────────────────┤
│ ctrl-c		     │	Centers	a line on the screen.		      │
├────────────────────────────┼────────────────────────────────────────────────┤
│ ctrl-l		     │	Left  adjust  a	 line  within  the   margin   │
│			     │	settings.				      │
├────────────────────────────┼────────────────────────────────────────────────┤
│ ctrl-f		     │	If JUSTIFY is on, and  ctrl-f  (for format)   │
│			     │	is  pressed, paragraphs	 will  be justified   │
│			     │	between	 the  bounds  set  by  the   margin   │
│			     │	command.				      │
├────────────────────────────┼────────────────────────────────────────────────┤
│ ctrl-r		     │	Right  adjust  a  line	within	the  margin   │
│			     │	settings.				      │
└────────────────────────────┴────────────────────────────────────────────────┘


	       Ctrl-r is very useful for placing dates at the top of a
	  letter.   Simply  type  the  date  in	the left column, press
	  ctrl-r, and the last character of the	date is	shifted	to the
	  right	margin established by the margin command.

	       A  nice	feature	 of  KEDIT  is	that  paragraphs   are
	  separated by blank lines.  This may seem a small point,  but
	  it is	a very convenient one.	(Certain word processors use a
	  special symbol to  denote the	end  of	a paragraph.   Typical
	  scenario: while editing a file,  you fail to use the	end of
	  paragraph marker and reformat	a paragraph - the remainder of
	  the file is  justified!  One hunk  of	tangled	mess  results,
	  and  there  is  no  way  of  undoing	this.  This problem is
	  avoided by defining a	paragraph as is	done in	KEDIT.)

┌──────────────────────────────────┐
│ Manual			   │
└──────────────────────────────────┘

	       I  enjoyed  reading  the	 manual	 that  came  with this
	  product.   It	 is  well  organized  and  contains  excellent
	  tutorials that are explicit and mercifully brief.

	       The manual is xeroxed, but highly readable.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       KEDIT is	 the editor  I use  in my  daily work.	 It is
	  extremely fast, powerful, flexible, and its  word-processing
	  features are convenient to use.

	       I suggest you give it a try.




		     ┌──────────────────────────────────┐
		     │ File Name:  ██	kedit.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## LISP1.TXT

{% raw %}
```
Copyright 1984 by Gary M. Rader					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║		      Converting Infix to Prefix Notation		      ║
║									      ║
║				      by				      ║
║									      ║
║				 Gary M. Rader				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       Suppose we are designing	a spreadsheet or calculator in
	  which	the user can enter expressions like


		    (A3	+ A4 - 2 * A10)

	  or

		    (365 + (4777 - 1330) * 12)


	       Such  expressions  are  in  "infix"  form  because  the
	  operators are	positioned between their operands rather  than
	  positioned before ("prefix"), or after ("postfix") them.

┌──────────────────────────────────┐
│ LISP uses Prefix Form		   │
└──────────────────────────────────┘

	       LISP can	only  directly evaluate	expressions  in	prefix
	  form,	where the operator is positioned before	its  operands.
	  For example, instead of (10 +	20), LISP requires (+ 10  20).
	  In  order  for  LISP	programs  to evaluate expressions like
	  those	 above,	 the  expressions  must	 first be converted to
	  prefix notation so they look like


		    (- (+ A3 A4) (* 2 A10))

	  and

		    (+ 365 (* (- 4777 1330) 12))


	  respectively.



	       Notice  that  infix  notation  is  basically limited to
	  binary operators - operations	 which take two	operands  like
	  +, -,	 *, /,	MOD, >,	 =, <,	~ (boolean  "not"), & (boolean
	  "and"), and  | (boolean  "or").  Operations  requiring, say,
	  three	operands, like the present value function, cannot  use
	  infix	 notation.   Thus  it  appears	in  many  spreadsheets
	  looking something like


		    @PV(Payment, Interest Rate,	Term)


	  which	is  a form  of prefix  notation.  Life	would be  much
	  easier for both humans and computers if we all forgot	 about
	  infix	notation.  Unfortunately,  the use of  infix notation,
	  for the operators listed above, has become too deeply	rooted
	  in  our  culture  to	easily	change.	  We continue to use a
	  hybrid  of  infix  and  prefix  notation  in	much  of   our
	  mathematics.

┌──────────────────────────────────┐
│ "InfixToPrefix"  Program         │
└──────────────────────────────────┘

	       The program "IToP" (standing for "InfixToPrefix") takes
	  a single argument, in	infix form, and	converts it to	prefix
	  form.	 (IToP resides in  the program file accompanying  this
	  article.  It is written  in muLISP-83.)  This	output	prefix
	  form will be in the form of a	list.

	       For instance,


		    (IToP '(10 - 9 * 8))


	  returns the list


	       (DIFFERENCE 10 (TIMES 9 8))


	  as  its   result.   (DIFFERENCE   is	the   LISP  name   for
	  subtraction.	TIMES is the LISP name for multiplication.)

	       You will	notice that  a number of associated  functions
	  are also defined in that file.  The function "IToPHelp" is a
	  help function	 for IToP.   "GetOperands" is  a help function
	  for IToPHelp.	 The conversion	program	 is set	up so you  can
	  define  new  operators  without  fussing  with  any function
	  definitions.	Two  operator-defining functions  are defined,
	  one for infix	operators  ("DefInfixOp"), and one for  prefix
	  operators ("DefPrefixOp").

	       DefInfixOp has the form


		    (DefInfixOp	<symbol> <LISP function> <precedence>)

	  where


	       <symbol>	is the symbol for the operator

	       <LISP function> is the muLISP function associated with the
	       operator


	  and

	       <precedence> is the operator's precedence.



	       (Precedence is what makes "(1 * 2 + 3)" equal "((1 * 2)
	  + 3)" rather than "(1 * (2  + 3))".  In this case "+" has  a
	  higher precedence than "*".)

	       For  example,  to  define  binary  "+"  as  the  muLISP
	  function PLUS	with a precedence of 3,	type


		    (DefInfixOp	'+ 'PLUS 3)


	       DefPrefixOp has the form


	  (DefPrefixOp <symbol>	<LISP function>	<arity>	<minimum arity>)


	  where	the first two input  parameters	are as before and  the
	  last two deal	 with the number  of operands.	If  <arity> is
	  specified, then  the function	 is required  to have  exactly
	  that	many  operands.	  If  <arity>  is  not	specified, the
	  minimum number of operands allowable in the function must be
	  specified.  All  prefix operators  have a  precedence	of  1,
	  automatically.


	       To define unary "-", we type


		    (DefPrefixOp '- 'MINUS 1)


	       To define  the function	SUM, which  takes two  or more
	  operands and returns their sum, we type


		    (DefPrefixOp 'SUM 'PLUS NIL 2)


	       Note that the LISP function in these definitions	can be
	  a user-defined function.

	       Using  the  operator  definitions  in the corresponding
	  program file,	the following conversions occur	(the input  is
	  not indented,	the result is):


	       (10 - 9)

		   (DIFFERENCE 10 9)


	       (10 - - 9)

		   (DIFFERENCE 10 (MINUS 9))


	       (10 + 9 * 8 - - A > 3 / B)

		   (GREATERP (DIFFERENCE (PLUS 10 (TIMES 9 8)) (MINUS A))
		     (QUOTIENT 3 B))


	       (5 + (SUM A (3 *	(B MOD 2)) 365)	= (C * (747 + D)))

		   (EQUAL (PLUS	5 (PLUS	A (TIMES 3 (REMAINDER B	2)) 365))
		     (TIMES C (PLUS 747	D)))


	       Some  error  checking  is  performed  in	 the  program.
	  However,  it	 is  not   exhaustive.	 When	an  error   is
	  encountered,	 the   speaker	 beeps	 and   the  conversion
	  terminates.	This  action  can  be  altered by changing the
	  "(PRIN1  (ASCII  7))"  parts  of  all  "(THROW  'Error ...)"
	  statements to	the desired action.

	       Finally,	 the  following	  code	evaluates  any	 infix
	  expression "Exp."


		    (EVAL (IToP	Exp))

	  e.g.,

		    (EVAL (IToP	'(10 + 9)))

			 19


	  or

		    (SETQ Exp '(10 + 9 * 8 - - 7))
		    (EVAL (IToP	Exp))

			 89


	       In  conclusion,	IToP  is  a  muLISP-83	function which
	  converts  infix  arithmetic  expressions  into  prefix  form
	  suitable for evaluation by  muLISP's EVAL function.  Such  a
	  function  is	useful	 in  both  spreadsheet	 programs  and
	  calculator  programs	where  the  user enters	expressions or
	  formulas in infix notation.  New infix and prefix  operators
	  can be defined using DefInfixOp and DefPrefixOp.

┌──────────────────────────────────┐
│ LISP News			   │
└──────────────────────────────────┘

	       LISP/88	which  was  mentioned  in  last	 issue's  LISP
	  article seems	to work	relatively well.  At $49.95 it is  the
	  cheapest implementation of LISP available for	the IBM-PC.  I
	  recommend it for  those wanting to  learn LISP, but  not for
	  serious LISP software	development.

	       Several new LISPs are about.  The LISP Company has  TLC
	  LISP while Gold Hill Computers announced Golden Common  LISP
	  (GCLISP).  A review of muLISP, IQLISP, and TLC LISP  appears
	  in   the   April,   1984,   issue   of   PC	Tech  Journal.
	  Unfortunately,  muLISP-82  was  used,	 instead of muLISP-83,
	  making  the  review  fairly  worthless for determining which
	  LISP	is  most   suitable  for  a   particular  application.
	  However, it does give	 a good	indication of  the differences
	  between IQLISP and TLC LISP.

	       An excellent new	book  for learning LISP	is  available:
	  "LISP:  A  Gentle  Introduction  to Symbolic Computation" by
	  David	S. Touretzky, Harper & Row, 1984, $18.95.


   ┌────────────────────────────────────────────────────────────────────────┐
   │			LISPs Mentioned	in This	Article			    │
   ├─────────────────────────────────────┬──────────────────────────────────┤
   │  Golden Common LISP (GCLISP)	 │  IQLISP			    │
   │  $375				 │  $175			    │
   │  Gold Hill	Computers		 │  Integral Quality		    │
   │  163 Harvard St.			 │  P.O. Box 31970		    │
   │  Cambridge, MA 02139		 │  Seattle, WA	98103-0070	    │
   │  (617)492-2071			 │  (206)527-2918		    │
   ├─────────────────────────────────────┼──────────────────────────────────┤
   │  LISP/88				 │  muLISP-83			    │
   │  $49.95				 │  $250			    │
   │  Norell Data Systems		 │  The	Soft Warehouse		    │
   │  3400 Wilshire Blvd.		 │  P.O. Box 11174		    │
   │  P.O. Box 70127			 │  Honolulu, Hawaii 96828-0174	    │
   │  Los Angeles, CA 90010		 │  (808)734-5801		    │
   │  (213)257-2026			 │				    │
   ├─────────────────────────────────────┼──────────────────────────────────┤
   │  TLC LISP				 │				    │
   │  Price Unavailable			 │				    │
   │  The LISP Company			 │				    │
   │  330 C Village Lane		 │				    │
   │  Los Gatos, CA 95030		 │				    │
   │  (408)354-3668			 │				    │
   └─────────────────────────────────────┴──────────────────────────────────┘




		     ┌──────────────────────────────────┐
		     │ File Name:  ██	lisp1.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## LIST1.ASM

{% raw %}
```
;Copyright 1984	by ABComputing					   May 15, 1984
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS FILE CONTAINS FIVE ROUTINES:				 │
;    │									 │
;    │	 KEYS	 - INDICATES IF	A PRESSED KEY GENERATES	AN		 │
;    │		   EXTENDED OR NON-EXTENDED ASCII CODE.			 │
;    │	 DRIVE	 - CHANGES DEFAULT DRIVE TO "B: DRIVE.                   │
;    │	 CURSOR	 - MOVES CURSOR	TO HOME	POSITION			 │
;    │	 REVERSE - MANIPULATES STRING "CBA" INTO "ABC".                  │
;    │	 RENAM	 - RENAMES THE FILE  "A:TEMP.TXT" TO "A:TRASH.TXT".      │
;    │									 │
;    │	 EACH ROUTINE  SHOULD ASSEMBLE	AND LINK  WITHOUT WARNINGS  OR	 │
;    │	 ERRORS.							 │
;    │									 │
;    │	 DOS CALLS ARE LISTED IN THE APPENDIX OF THE DOS MANUAL.   FOR	 │
;    │	 BIOS CALLS, OBTAIN EITHER  THE	TECH.  REF. MANUAL,  OR	REVIEW	 │
;    │	 THE  "INTERRUPT  PHONEBOOK"  IN  THE  DOS COLUMN OF OUR FIRST   │
;    │	 ISSUE.								 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘


;Copyright 1984	by ABComputing					   May 15, 1984
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 EACH KEY ON THE  KEYBOARD, WHEN PRESSED, GENERATES  EITHER AN	 │
;    │	 ASCII CODE, OR	AN EXTENDED-ASCII CODE.	 (SEE APPENDIX IN  THE	 │
;    │	 BASIC	MANUAL	FOR  DETAILED  LISTINGS	 OF SCAN CODES.)  THIS	 │
;    │	 ROUTINE USES THE BIOS INT 16H TO READ THE KEYBOARD AND	RETURN	 │
;    │	 THESE SCAN CODES.						 │
;    │									 │
;    │	 AFTER A KEY IS	PRESSED, IF AL = 0 THEN	AN  EXTENDED-SCAN-CODE	 │
;    │	 KEY WAS PRESSED,AND THE SCAN  CODE OF THE KEY IS RETURNED  IN	 │
;    │	 AH. IF	AL<> 0,	THEN AL	CONTAINS THE SCAN CODE FOR THE KEY.	 │
;    │									 │
;    │	 THIS ROUTINE  PRINTS A	 MESSAGE INDICATING  THE TYPE  OF SCAN	 │
;    │	 CODE GENERATED.   EITHER:  "A  NON-EXTENDED-SCAN-CODE KEY WAS   │
;    │	 PRESSED" OR "AN EXTENDED-SCAN-CODE KEY WAS PRESSED".            │
;    │									 │
;    │	 PRESS F10  TO EXIT  THIS ROUTINE.   F10 HAS  AN EXTENDED-SCAN	 │
;    │	 CODE OF 68							 │
;    │									 │
;    │	 PLACE THIS ROUTINE IN FILE: KEYBOARD.ASM			 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;
;--THINK OF "EQU" AS AN  "EQUATE" OR EQUAL SIGN.  THE  ASSEMBLER
;  WILL	REPLACE	EACH OCCURRENCE	OF "CR", AND "LF" IN THE  SOURCE
;  CODE	BY 10 AND 13, RESPECTIVELY.
;


CR	 EQU	10
LF	 EQU	13

F10	 EQU	68	       ;SCAN CODE FOR F10 IS 68	(SEE BASIC APPENDIX)

;------------------------------------------------------------------------
DATA	SEGMENT	PARA

ANY_KEY		DB  'PRESS ANY KEY',CR,LF,'$'

NORMAL_KEY	DB  'A NON-EXTENDED-SCAN-CODE KEY WAS PRESSED'
		DB  CR,LF,CR,LF,'$'

EXTENDED_KEY	DB  'AN EXTENDED-SCAN-CODE KEY WAS PRESSED'
		DB  CR,LF,CR,LF,'$'

DATA	ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
STACK	SEGMENT	PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
CODE	 SEGMENT PARA
ASSUME	 CS:CODE, DS:DATA, SS:STACK


;--STANDARD LINKAGE TO DOS

KEYS	 PROC  FAR	       ;DO
	 PUSH  DS	       ;
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	   NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;--PRINT "PRESS ANY KEY" MESSAGE

KEY0:	 MOV   AH,9	       ;REQUEST	"DISPLAY STRING" SERVICE
	 MOV   DX,OFFSET ANY_KEY	;DS:DX -> ANY_KEY
	 INT   21H	       ;INVOKE "DISPLAY STRING" SERVICE


;--WAIT	FOR KEYBOARD INPUT.

	 MOV   AH,0
	 INT   16H


;--AL =	0 MEANS	AN EXTENDED-SCAN-CODE KEY.

	 CMP   AL,0	       ;CoMPare	CONTENTS OF AL TO 0
	 JE    KEY1	       ;IF AL =	0, THEN	JUMP OR	BRANCH TO
			       ; THE LABEL KEY1.


	 ;--NORMAL SCAN	CODE KEY PRESSED

	 MOV   DX,OFFSET NORMAL_KEY	;DS:DX -> NORMAL_KEY
	 JMP   KEY2


	 ;--EXTENDED-SCAN-CODE KEY PRESSED. WAS	IT F10 TO EXIT TO DOS?

KEY1:	 CMP   AH,F10	       ;WAS THE	F10 KEY	PRESSED?
	 JE    KEY3	       ;EQUALITY MEANS F10 PRESSED.
			       ; BRANCH	TO EXIT	(KEY3).


	 ;--PROCESS OTHER EXTENDED-SCAN-CODE KEYS.

	 MOV   DX,OFFSET EXTENDED_KEY	;DS:DX -> EXTENDED_KEY


;--PRINT THE STRING POINTED TO BY DS:DX.

KEY2:	 MOV   AH,9	       ;REQUEST	"DISPLAY STRING" SERVICE
	 INT   21H	       ;INVOKE "DISPLAY STRING" SERVICE

	 JMP   KEY0	       ;LOOP FOR NEXT KEYIN


;-- RETURN TO DOS

KEY3:	 RET		       ;RETurn to DOS


KEYS	 ENDP		       ;END of PROCedure
CODE	 ENDS		       ;END of CODE Segment
;------------------------------------------------------------------------

	 END   KEYS	       ;END of routine KEYS



;Copyright 1984	by ABComputing					   May 15, 1984
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 DOS FUNCTION CALL 0EH (14 DECIMAL) IS USED TO:	1) CHANGE  THE	 │
;    │	 DEFAULT DRIVE TO B, AND  2) RETURN THE	NUMBER OF  DISK	DRIVES	 │
;    │	 (INCLUDING FIXED DISK)	ON THE SYSTEM, IN AL.			 │
;    │									 │
;    │	 PLACE THIS ROUTINE IN FILE: DRIVE.ASM				 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------

;------------------------------------------------------------------------
DATA	SEGMENT	PARA


DATA	ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
STACK	SEGMENT	PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
CODE	 SEGMENT PARA
ASSUME	 CS:CODE, DS:DATA, SS:STACK


;--STANDARD LINKAGE TO DOS

DRIVE	 PROC  FAR	       ;DO
	 PUSH  DS	       ;
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	   NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;--CHANGE CURRENT DRIVE	TO B BY	PLACING	THE VALUE 1 (A = 0, B =	 1,
;  ETC.)  IN DL. THE NUMBER OF DRIVES ON THE SYSTEMS IS	RETURNED IN
;  AL.


	 MOV   DL,1	       ;REQUEST	B DRIVE

	 MOV   AH,0EH	       ;REQUEST	"SELECT DRIVE" SERVICE
	 INT   21H	       ;INVOKE "SELECT DRIVE" SERVICE

;------------------------------------------------------------------------
;
;  MUST	USE "0EH" INSTEAD OF "EH" FOR ASSEMBLER MIGHT CONFUSE  "EH"
;  WITH	A LABEL	(I.E.  A NAME USED TO IDENTIFY A LOCATION IN SOURCE
;  CODE.  OFTEN	USED  AS A LOCATION  TO	BRANCH TO.  "KEY0", "KEY1",
;  AND "KEY2", IN ROUTINE KEYS.)
;
;  A MORE CONFUSING SITUATION IS A MOV STATEMENT SUCH AS:
;
;	 MOV   AH,AH	       ;MOVE AH	CONTENTS INTO AH REGISTER!
;
;
;  IF YOU WANT TO MOVE THE VALUE OF 10 INTO THE	AH REGISTER, USE:
;
;	 MOV   AH,0AH		;MOVE "0AH" = 10 HEX INTO AH REGISTER.
;
;	      OR
;
;	 MOV   AH,10		;10 IS INTERPRETED AS 10 DECIMAL.
;
;
;  USE DEBUG TO	STUDY THE VALUE	IN THE AH REGISTER.
;
;------------------------------------------------------------------------


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


DRIVE	 ENDP		       ;END of PROCedure
CODE	 ENDS		       ;END of CODE Segment
;------------------------------------------------------------------------

	 END   DRIVE	       ;END of routine DRIVE



;Copyright 1984	by ABComputing					   May 15, 1984
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 BIOS INTERRUPT	10H IS USED  TO	PLACE THE CURSOR AT  THE UPPER	 │
;    │	 LEFT HAND CORNER OF THE SCREEN.				 │
;    │									 │
;    │	 THE SCREEN IS	REGARDED AS BEING  A GRID OF  COORDINATES WITH	 │
;    │	 (0,0)	AS  THE	 UPPER	LEFT  CORNER, AND (24,79) AS THE LOWER	 │
;    │	 RIGHT CORNER.	(24 = 24 DECIMAL.)				 │
;    │									 │
;    │	 PLACE THIS ROUTINE IN FILE: HOME.ASM				 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------

;------------------------------------------------------------------------
DATA	SEGMENT	PARA


DATA	ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
STACK	SEGMENT	PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
CODE	 SEGMENT PARA
ASSUME	 CS:CODE, DS:DATA, SS:STACK


;--STANDARD LINKAGE TO DOS

CURSOR	 PROC  FAR	       ;DO
	 PUSH  DS	       ;
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	   NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;--INT 10H IS RESPONSIBLE FOR VIDEO/IO.

	 MOV   AH,2	       ;REQUEST	"SET CURSOR" SERVICE
	 MOV   DH,0	       ;SET CURSOR ROW TO 0
	 MOV   DL,0	       ;SET CURSOR COLUMN TO 0
	 MOV   BH,0	       ;PAGE NUMBER = 0

	 INT   10H	       ;INVOKE "SET CURSOR" SERVICE


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


CURSOR	 ENDP		       ;END of PROCedure
CODE	 ENDS		       ;END of CODE Segment
;------------------------------------------------------------------------

	 END   CURSOR	       ;END of routine CURSOR



;Copyright 1984	by ABComputing					   May 15, 1984
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS  ROUTINE	MANIPULATES  THE  STRING  "ABC" INTO "CBA" AND   │
;    │	 DISPLAYS THE LATTER STRING.  THIS ROUTINE ILLUSTRATES HOW  TO	 │
;    │	 MANIPULATE A STRING IN	MEMORY.					 │
;    │									 │
;    │	 PLACE THIS ROUTINE IN FILE: REVERSE.ASM			 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------

;------------------------------------------------------------------------
DATA	 SEGMENT PARA

MSG	 DB    'ABC'
BUFFER	 DB    0,0,0,'$'       ;STORAGE FOR "CBA" STRING

DATA	 ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
STACK	SEGMENT	PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
CODE	 SEGMENT PARA 'CODE'

ASSUME	 CS:CODE,DS:DATA,SS:STACK



REVERSE	 PROC  FAR	       ;STANDARD LINKAGE TO DOS
	 PUSH  DS	       ; DO
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	  NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;------------------------------------------------------------------------
;
;  "MSG" IS DEFINED IN OUR DATA SEGMENT AS:
;
;
;	 MSG	  DB	'ABC'
;
;
;  "MSG" IS A LABEL IDENTIFYING A LOCATION IN MEMORY.  AS SHOWN BELOW,
;  "MSG" IS  IDENTIFIED WITH  THE CHARACTER  "A" -  THE FIRST  BYTE OF
;  "MSG".
;
;  "MSG  +  1"  POINTS  TO  THE  LOCATION  ONE  BYTE PAST "MSG".  THIS
;  CONTAINS THE	CHARACTER "B".
;
;  "MSG +  1" CAN  EQUIVALENTLY  BE WRITTEN MSG[1];  "MSG +  2" CAN BE
;  WRITTEN MSG[2],ETC.	THE ASSEMBLER WILL ACCEPT EITHER FORM.
;
;
;
;		MSG	    MSG	+ 1    MSG + 2
;		 │	     │		│
;  "MSG"         v           v          v
;	   ┌──────────────────────────────────┐
;	   │	 A     │     B	   │	C     │
;	   └──────────────────────────────────┘
;
;
;			   OR
;
;
;		MSG	    MSG[1]     MSG[2]
;		 │	     │		│
;		 v	     v		v
;	   ┌──────────────────────────────────┐
;	   │	 A     │     B	   │	C     │
;	   └──────────────────────────────────┘
;
;
;  THIS	 ROUTINE  MOVES	 THE  THREE  BYTES:  MSG,  MSG+1, MSG +2, INTO
;  "BUFFER," A THREE BYTE AREA IN OUR DATA SEGMENT.  THE CHARACTER "C"
;  IS MOVED FIRST, THEN	"B", THEN "A".  "BUFFER" FINALLY LOOKS LIKE:
;
;
;	    BUFFER	BUFFER + 1	BUFFER + 2
;		 │	     │		│
;  "BUFFER"      v           v          v
;	   ┌──────────────────────────────────────────┐
;	   │	 C     │     B	   │	A    │	 $    │
;	   └──────────────────────────────────────────┘
;
;
;  AS THE CONTENTS OF BUFFER  WILL BE DISPLAYED, BUFFER	IS  TERMINATED
;  BY A	DOLLAR SIGN WHICH IS  THE TERMINATOR FOR THE DOS PRINT	STRING
;  SERVICE.
;
;------------------------------------------------------------------------


	 MOV   AL,MSG+2	       ;AL = C
	 MOV   BUFFER,AL       ;BUFFER ->C

	 MOV   AL,MSG+1	       ;AL = B
	 MOV   BUFFER+1,AL     ;BUFFER +1 ->B

	 MOV   AL,MSG	       ;AL = A
	 MOV   BUFFER+2,AL     ;BUFFER +2 ->A


;-- DISPLAY THE	CONTENTS OF "BUFFER."

	 MOV   DX,OFFSET BUFFER	 ;PUT THE ADDRESS OF BUFFER IN THE DX REGISTER
	 MOV   AH,9	       ;REQUEST	"PRINT STRING" SERVICE
	 INT   21H	       ;INVOKE "PRINT STRING" SERVICE


;-- RETURN TO DOS

	 RET		       ;RETURN TO DOS


REVERSE	 ENDP		       ;END of PROCedure
CODE	 ENDS		       ;END of CODE Segment
;------------------------------------------------------------------------

	 END   REVERSE	       ;END of routine REVERSE.



;Copyright 1984	by ABComputing					   May 15, 1984
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS  ROUTINE	USES   DOS  CALL  17H	TO  RENAME  THE	  FILE	 │
;    │	 "A:TEMP.TXT" TO "A:TRASH.TXT".                                  │
;    │									 │
;    │	 AS THE	RENAMED	 FILE IS ON  SAME DRIVE	AS  THE	ORIGINAL FILE,	 │
;    │	 THE FCB SPECIFIES THE NEW FILESPEC ONLY, NOT THE DRIVE	OF THE	 │
;    │	 NEW  FILE.   (SEE  THE	 ARTICLE  "DOS  1.1,  2.0   SEQUENTIAL   │
;    │	 FILE-READING"  IN  THIS   MONTH'S  ASSEMBLY  COLUMN   FOR  AN   │
;    │	 EXPLANATION OF	WHAT AN	FCB IS.)				 │
;    │									 │
;    │	 THIS ROUTINE SHOULD NOT  BE NAMED "RENAME.ASM".  FOR  THE DOS   │
;    │	 SYSTEM	COMMAND	"RENAME," WILL BE INVOKED WHEN WE TYPE  RENAME   │
;    │	 ON THE	COMMAND	LINE!	(AND YOU THOUGHT THAT  YOUR RENAME.EXE	 │
;    │	 MODULE	WAS BEING EXECUTED!)					 │
;    │									 │
;    │	 PLACE THIS ROUTINE IN FILE: RENAM.ASM				 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------
DATA	 SEGMENT PARA

FCB_ADD	     DB	 1,'TEMP    ','TXT'   ;CREATE ODD-BALL FCB WANTED
	     DB	 5 DUP(' ')            ; BY FUNCTION CALL 17H.
	     DB	 'TRASH   ','TXT'     ;NEW NAME FOR FILE
	     DB	 10 DUP('0')

DATA	 ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
STACK	 SEGMENT PARA STACK 'STACK'

	 DB    40H DUP('STCK')

STACK	 ENDS
;------------------------------------------------------------------------

;------------------------------------------------------------------------
CODE	 SEGMENT PARA 'CODE'

ASSUME	 CS:CODE,DS:DATA,SS:STACK

RENAM	 PROC  FAR	       ;STANDARD LINKAGE TO DOS
	 PUSH  DS	       ; DO
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	  NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;--RENAME FILE "A;TEMP.TXT"

	 MOV   DX, OFFSET FCB_ADD  ;DS:DX POINTS TO UNOPENED FCB
	 MOV   AH,17H		   ;REQUEST "RENAME FILE" SERVICE
	 INT   21H		   ;INVOKE "RENAME FILE" SERVICE


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


RENAM	 ENDP		       ;END of PROCedure
CODE	 ENDS		       ;END of CODE Segment
;------------------------------------------------------------------------

END	 RENAM		       ;END of routine RENAM




		     ┌──────────────────────────────────┐
		     │ File Name:  ██	list1.asm   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## LIST1.BAS

{% raw %}
```bas
1 '**                    SIMPMAZE.BAS
2 '**     Generic Maze Generator by Dan Rollins, 04/05/83
3 '**  Generates a simple maze.  Uses standard Microsoft BASIC.
10 DEFINT A-Z
20 DIM T(5), MZ(100,100)   '** maze array (may be expanded to memory size)
30 DIM YD(3),XD(3)  :YD(0)=-1 :XD(1)=1 :YD(2)=1	:XD(3)=-1
40 DIM PWR2(3)	    :PWR2(0)=1 :PWR2(1)=2 :PWR2(2)=4 :PWR2(3)=8
50 RANDOMIZE  VAL(RIGHT$(TIME$,2))  '** get a random seed
60 CLS
90 PRINT"       SIMPMAZE ... Generic Maze generation program"
95 PRINT"   Public domain program written by Dan Rollins 04/05/83
97 PRINT
100 INPUT "horizontal size (26 fits on screen)";H
110 INPUT "vertical size (11 fits on screen) ";V
115 PRINT "calculating maze... please be patient"
120 H=H-1 :V=V-1		'** figure-in 0th elements
130 X=INT(RND*H) :Y=INT(RND*V)	'** random starting point
140 GOSUB 1000			'** generate the maze
150 MZ(0,0)=MZ(0,0)+1		'** open a North door for maze entrance
160 GOSUB 2000			'** print the maze
165 INPUT "press enter to generate next maze",A$
170 GOTO 100
996 '**       ---- Maze generation subroutine ----
997 '** expects: TR=total rooms, H=horizontal max, V=vertical max
998 '**          XD(dir), YD(dir) = motion vectors, PWR2() = powers of 2
999 '**
1000 FOR J=0 TO	H :FOR K=0 TO V	:MZ(J,K)=0 :NEXT :NEXT '** "close" all doors
1010 RC=0 :TR=(H+1)*(V+1)-1	  '** initialize Room Count, Total Rooms
1019 '** ---- Main maze generation loop ---- **
1020 Q=0 :IF RC	= TR THEN RETURN   '** if Room Count = Total Rooms then done
1030   IF Y>0 THEN IF MZ(X,Y-1)=0 THEN Q=Q+1 :T(Q)=0	    '** North
1040   IF X<H THEN IF MZ(X+1,Y)=0 THEN Q=Q+1 :T(Q)=1	    '** East
1050   IF Y<V THEN IF MZ(X,Y+1)=0 THEN Q=Q+1 :T(Q)=2	    '** South
1060   IF X>0 THEN IF MZ(X-1,Y)=0 THEN Q=Q+1 :T(Q)=3	    '** West
1090   IF Q=0 GOTO 1200					    '** no move
1098   '** open the doors and move into new room
1099   '**
1100   D=INT(RND*Q)+1 :DIR=T(D)		       '** choose randomly from list
1110   MZ(X,Y)=MZ(X,Y) + PWR2(DIR)	       '** add door in current room
1120   Y=Y+YD(DIR) :X=X+XD(DIR)		       '** move to new room
1130   ND=DIR-2	:IF ND<0 THEN ND=4+ND	       '** opposite DIR for New Dir
1140   MZ(X,Y)=MZ(X,Y) + PWR2(ND)	       '** add door in new room
1150   RC=RC+1				       '** update Room Count
1160 GOTO 1020
1199   '** Trapped! Scan for an unvisited room.
1200   Y=Y+1 :IF Y>V THEN Y=0 :X=X+1 :IF X>H THEN X=0
1210   IF MZ(X,Y)=0 THEN 1200	     '** if empty keep scanning, else....
1220 GOTO 1020			     '** see if neighbor has been visited
1996 '**   ---- subroutine prints the maze ----
1997 '**   only checks for North and West doors
1998 '** change all PRINTs to LPRINTs for hardcopy
2000 CLS
2010 FOR Y=0 TO	V
2020   FOR X=0 TO H
2030	 IF INT(MZ(X,Y)/2)=MZ(X,Y)/2 THEN PRINT	"+--"; :GOTO 2050
2040	 PRINT "+  ";                           '** must have a North door
2050   NEXT X  :PRINT "+"
2060   FOR X=0 TO H
2070	 IF MZ(X,Y) > 7	THEN PRINT"   "; :GOTO 2090   '** must be a West door
2080	 PRINT"I  ";
2090   NEXT X  :PRINT "I"
2100 NEXT Y
2110 FOR X=0 TO	H-1	   '** add the bottom line
2120   PRINT"+--";
2130 NEXT X :PRINT "+  +"  '** maze exit in Southwest corner
2140 RETURN




		     ┌──────────────────────────────────┐
		     │ File Name:  ██	list1.bas   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## MASTHEAD.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║									      ║
║									      ║
║		   Masthead for	PC FIRING LINE/	PC UNDERGROUND		      ║
║									      ║
║									      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Editor			   │
└──────────────────────────────────┘

	  Bill Salkin

┌──────────────────────────────────┐
│ Contributing Editors		   │
└──────────────────────────────────┘

	  Don Buresh
	  Gregory Hearn
	  Ken Holcombe
	  Guy Kelly
	  Richard Levaro
	  George Gordon	Noel
	  Gary M. Rader
	  William Squire
	  Ron Watson

┌──────────────────────────────────┐
│ ABComputing			   │
└──────────────────────────────────┘

	       ABComputing  is	the  creator  and  owner of PCFL/PCUG.
	  Address all correspondence to:


			  ABComputing
			  P.O. Box 5503
			  North	 Hollywood, CA 91616-5503
			  ATTENTION: Bill Salkin

	       Send a S.A.S.E if you wish a reply.

	       (The company name is  pronounced	ABC Computing but  the
	  spelling uses	one "C".)

┌──────────────────────────────────┐
│ Issue	Dates			   │
└──────────────────────────────────┘

	       PCFL/PCUG  is  issued   bi-monthly  on  the   following
	  schedule:


		     ┌────────────────┬─────────────────┐
		     │	Issue number  │	  Issue	Date	│
		     ├────────────────┼─────────────────┤
		     │	    2	      │	 May  15	│
		     │	    3	      │	 July 15	│
		     │	    4	      │	 September 15	│
		     │	    5	      │	 November 15	│
		     │	    6	      │	 Jan. 15, 1985	│
		     └────────────────┴─────────────────┘

┌──────────────────────────────────┐
│ Deadlines for	Articles	   │
└──────────────────────────────────┘

	       Written articles	are due	on the following schedule:


		     ┌────────────────┬─────────────────┐
		     │	Issue number  │	   Date	Due	│
		     ├────────────────┼─────────────────┤
		     │	    3	      │	   June	 1	│
		     │	    4	      │	   August 1	│
		     │	    5	      │	   October 1	│
		     │	    6	      │	   December 1	│
		     └────────────────┴─────────────────┘

┌──────────────────────────────────┐
│ Fee Schedule			   │
└──────────────────────────────────┘

	       This fee	schedule is subject to change.

    ┌───────────────────────┐
    │ Single Copies	    │
    └───────────────────────┘

	       Send us $12 and we will supply the diskette(s), mailer,
	  and  postage	 for  PCFL/PCUG.    Make  checks   payable  to
	  ABComputing.

    ┌───────────────────────┐
    │ Subscriptions	    │
    └───────────────────────┘

	       For  those  wanting  the	 "ultimate" in convenience, we
	  offer	a one-year (six-issue) subscription for	$72, mailed to
	  your home  or	business.   (The subscription  starts with our
	  current issue.)

	       Make all	checks payable to ABComputing.

┌──────────────────────────────────┐
│ Back Issues			   │
└──────────────────────────────────┘

	       Back issues are available  from ABComputing at $12  per
	  issue.

┌──────────────────────────────────┐
│ Distribution			   │
└──────────────────────────────────┘

	       Those  purchasing  PCFL/PCUG  are  encouraged  to  make
	  copies  for  their  friends  and  associates,	 as  long   as
	  non-profit  use  is  maintained.   Recipients	 of copies are
	  requested to pay us $6 to help defray	the costs of producing
	  PCFL/PCUG.

┌──────────────────────────────────┐
│ How to Use this Magazine	   │
└──────────────────────────────────┘

	       The  menu-driven	 shell	you  are  using	 is  for those
	  wishing to browse  through articles.	Standard  DOS commands
	  should be used to print an article.  (At the bottom of  each
	  article is the name of the file containing the article.)

┌──────────────────────────────────┐
│ Printers			   │
└──────────────────────────────────┘

	       Many printers can not reproduce the full	IBM  character
	  set.	 In  particular,  some	graphic	 characters  used   in
	  PCFL/PCUG will not print properly.

	       The  routine  PRETTY1.EXE  on  Diskette	A,  causes the
	  printer  to  print  graphic	characters  as	a  series   of
	  asterisks.

	       To  invoke  this	 module,  type	PRETTY1	 after the DOS
	  prompt:


	       A>PRETTY1


	  and press the	ENTER key.


	       Then, the box


	      ┌──────┐
	      │	Hi!  │
	      └──────┘


	  will print as:


	      ********
	      *	Hi!  *
	      ********

┌──────────────────────────────────┐
│ Trademarks			   │
└──────────────────────────────────┘

	  Compaq is a trademark	of Compaq Computer Corp.
	  FREECOPY is a	trademark of Squire Buresh Assoc., Inc.
	  LOTUS	1-2-3 is a trademark of	Lotus Development Corp.
	  MS-DOS is a trademark	of Microsoft, Inc.
	  PC-DOS is a trademark	of International Business Machines,Inc.
	  Tandy	2000 is	a registered trademark of Tandy	Corp.
	  UNIX is a trademark of Bell Laboratories.




		     ┌──────────────────────────────────┐
		     │ File Name: ██  masthead.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## PAS1.TXT

{% raw %}
```
								   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║		    A Comparison of PC Pascal and Pascal/VS		      ║
║									      ║
║				      by				      ║
║									      ║
║				J. David Pickens			      ║
╚═════════════════════════════════════════════════════════════════════════════╝

	  EDITOR'S NOTE: This is a two-part article.  This excerpt  is
	  from	the  manuscript	 "A   Comparison  of  PC  Pascal   and
	  Pascal/VS"  by  J.  David  Pickens,  of  the  Santa   Teresa
	  Laboratory.  The second part	will appear in the  next issue
	  of PCFL/PCUG.

┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       In  recent  years,  Pascal  has	been used as a general
	  purpose  programming	language  and  as  a  system   program
	  implementation  language.   However,	"standard"  Pascal, as
	  designed by Niclaus Wirth, lacks many	of the features	 which
	  are required for general purpose and system programming.  As
	  a result,  most implementations  of the  language have added
	  extensions  to   give	 more	capabilities  to   the	Pascal
	  programmer.

	       The function  of	these  extensions tend	to be  similar
	  from	one  implementation  to	 the  next; unfortunately, the
	  syntax and underlying	philosophy vary	considerably among the
	  various implementations.

	       Extensions and features	of two Pascal  implementations
	  will be examined.  One  is the IBM Personal  Computer	Pascal
	  (PC Pascal for short)	and the	other is Pascal/VS.  (EDITOR'S
	  NOTE:	Pascal/VS is the  implementation of Pascal on  the IBM
	  370.)

┌──────────────────────────────────┐
│ Constants			   │
└──────────────────────────────────┘

	  ┌───────────────────────┐
	  │ Non-decimal	Radicies  │
	  └───────────────────────┘

	       Pascal/VS   permits   integer,	floating-point,	   and
	  character constants to be specified in hexadecimal:


		`00FF'X          (*Integer*)
		`F1'XC           (*Character*)
		`40100000'XR     (*Real*)

	       In addition, integer constants may also be specified in
	  binary:


	     `00001011'B

	       PC Pascal  supports integer  constants in  hexadecimal,
	  octal,  or  binary   radix.	Floating-point	may   only  be
	  specified in decimal.


		16#FF02		 (*Hexadecimal*)
		 #FF02		 (*Hexadecimal*)
		8#776		 (*Octal*)
		2#1010		 (*Binary*)


	       The  value  of  allowing	 floating  point numbers to be
	  specified  in	 hexadecimal  is  not  obvious.	  A  Pascal/VS
	  program  which  uses	this  facility	would not be portable.
	  Floating-point  data	is  represented	 differently  on   the
	  System/370 than on the IBM Personal Computer.

	  ┌───────────────────────┐
	  │ Constant Expressions  │
	  └───────────────────────┘

	       A  constant  expression	(or  static  expression) is an
	  expression which  can	be  evaluated at  compile time.	  Both
	  Pascal Compilers permit constant expressions where constants
	  are required.	  Built-in functions  such as  ABS, ORD,  CHR,
	  etc. may appear in a constant	expression.

	    const
		PI	 = 3.14159;
		TWO_PI	 = 2 * PI;
		ORDA	 = ORD(`A');
		ORDA1	 = ORDA	+ 1;
	    type
		MINUTES	 = 0..24*60;
		SECONDS	 = 0..sqr(60)*24;

	  ┌───────────────────────┐
	  │ Structured Constants  │
	  └───────────────────────┘

	       A  structured  constant	is  a  constant	 which is of a
	  structured  data  type.   Both  compilers support structured
	  constant and with almost identical syntax.


	    const
		LETTERS	 = [`A'..`Z',`a'..`z'];
	    type
		COMPLEX	 = record
			      RE,IM: REAL
			   end;

	    const
		Q	 = COMPLEX(3.0,4.0);
	    type
		VEC	 = array[-2..2]	of INTEGER;
	    const
		VECT	 = TVEC(5,4,3,2,1);

┌──────────────────────────────────┐
│ Data Types			   │
└──────────────────────────────────┘

	  ┌───────────────────────┐
	  │ Integers		  │
	  └───────────────────────┘

	       Integer variables in Pascal/VS  can occupy 1,2,3, or  4
	  bytes.   Pascal/VS  supports	unsigned  integers  which  may
	  occupy 1,2, or 3 bytes.  The default integer size is 4 bytes
	  (1 full word).  To declare an	integer	with a smaller size, a
	  subrange type	definition is prefixed with the	word packed.


	    type
		HALFWORD = packed -32768..32767;   (*2 bytes, signed*)
		UNSIGNED = packed 0..65535;	   (*2 bytes, unsigned*)
		BYTE	 = packed 0..255;	   (*1 byte, unsigned*)

	       Pascal/VS  does	 not  support	unsigned,  full	  word
	  integers.

	       PC Pascal supports 1  and 2 byte	integers;  both	signed
	  and  unsigned.    To	declare	  an  unsigned	 integer,  the
	  predefined   type   WORD   is	  used.	   Subrange  types are
	  automatically	mapped	to single  bytes if  the range permits
	  it.


	    var
		SIGNED_BYTE : -127..127;  (*1 byte variable, signed*)
		UWORD	    : WORD;	  (*2 bytes variable, unsigned*)
	    type
		BYTE	    = WRD(0)..255 (*1 bytes, unsigned*)


	       Most  Pascal  compilers	which  allow  byte  packing of
	  integer subranges do it implicitly, as is done in PC Pascal.
	  On the other hand, Pascal/VS will map	an integer subrange to
	  a 4 byte word	unless it is qualified with the	word "packed".
	  Unfortunately,  most	Pascals	 would	diagnose  a   "packed"
	  subrange  as	an   error.   (Standard	 Pascal	  allows  only
	  structured types to be "packed").  In other words, Pascal/VS
	  has extended the language  to	support	a feature  which could
	  have been supported within the language.

	       PC Pascal does not  support integers which are  greater
	  than two bytes  in length (the  word length of  the IBM-PC).
	  As  a	 consequence,  many  Pascal  programs  which depend on
	  integers outside  the	range  of -32767  to 32768  would need
	  major	redesigning  in	order  to run  under PC	 Pascal.  (One
	  possibility is to add	 a predefined type called  "DOUBLE" or
	  "LONG_INTEGER,"  which  would  allow  4  byte integers to be
	  declared.)

	  ┌───────────────────────┐
	  │ Floating Point	  │
	  └───────────────────────┘

	       Pascal/VS  supports  two	 precisions  of	floating point
	  data:	double	precision (8  bytes) and  single precision  (4
	  bytes).   The	 standard  predefined  type  REAL  is  used to
	  declare  a  double  precision	 variable;  a  predefined type
	  called "SHORTREAL" was  added to declare  a single-precision
	  variable.


	    var
		R: REAL;      (*double precision floating point*)
		S: SHORTREAL; (*single precisions*)

	       PC Pascal supports only	one floating point type	 which
	  consists of 4	bytes: a  24 bit mantissa and an  8-bit	binary
	  exponent, giving about 7 digits of precision.

┌──────────────────────────────────┐
│ Conformant/ Dynamic Arrays	   │
└──────────────────────────────────┘

	       A  well	known  problem	in  standard  Pascal is	in the
	  compatibility	rules  governing array	variables.  Arrays  of
	  different lengths are	never compatible and, as a result, one
	  is  unable  to  write	 a  general procedure for manipulating
	  vectors and matrices.

	       PC Pascal  has defined  a type  mechanism called	"SUPER
	  ARRAYS" which permits you to  define a class of arrays  with
	  different lengths.  For example:


	    type
		VECTOR = super array [1..*] of REAL;
		MATRIX = super array [1..*,1..*] of REAL;
		VECT10 = VECTOR(10);  MATDEC = MATRIX(100,100);
	    var
		ROW: VECT10; COL: VECTOR(10);
		MAT: MATRIX(40,40);
	    procedure INVERT(var M: MATRIX); EXTERN;
	    begin
	       ...
	       INVERT(MAT);    (*allows	any MATRIX type*)
	       ...
	    end;

	       In  a  variable	declaration,  the  super  type must be
	  qualified with operands which	designate the array length (as
	  in the declaration of	COL and	MAT above.)

	       If a formal reference parameter is being	declared, only
	  the super type  name need appear  (as	in the	declaration of
	  INVERT above).  Any variable declared	with the corresponding
	  super	type may be passed as the formal parameter, regardless
	  of the length.

	       As a by-product of the super type mechanism, PC	Pascal
	  has added dynamic arrays - arrays for	which a	length is  not
	  determined until execution time.  Dynamic arrays are defined
	  by declaring a pointer to a super array.  The	length of  the
	  pointer's object is determined when the object is  allocated
	  (via NEW).


	    type
		VECTOR = super array [1..*] of INTEGER;
	    var
		ROWP : @VECTOR;
		L    : INTEGER;
	    procedure INVERT(var M: MATRIX); EXTERN;
	    begin
	       ...
	       NEW(ROWP,L);    (*Allocates a VECTOR array of length L*)
	       ...
	    end;

┌──────────────────────────────────┐
│ Strings			   │
└──────────────────────────────────┘

	       Both compilers support character-string variables which
	  may vary in length at	execution time.

	       Pascal/VS has added a predefined	type called  "STRING".
	  When used in a variable declaration, the word	STRING must be
	  qualified with a  positive integer constant  which specifies
	  the maximum length of	the string variable.


	    var	S: STRING(100);	  (*S declared as string with max of 100*)

	       PC  Pascal  has	added  two  predefined types to	define
	  strings:  "STRING"  and  "LSTRING".   STRING defines a super
	  array	which is equivalent to:

	    packed array[1..*] of CHAR

	       LSTRING defines a string	 with a	length which  may vary
	  at execution time.  Thus, the	 type LSTRING in PC Pascal  is
	  similar to the type STRING in	Pascal/VS.

	       Both STRING  and	LSTRING	 are qualified	with a	length
	  when used in a variable declaration.

	       Both   compilers	  have	 relaxed   the	 strict	  type
	  compatibility	 rules	in  handling  string  data.   A	string
	  variable may be assigned  to another and their  lengths need
	  not be the same.

	       PC Pascal does not  allow a formal reference  parameter
	  of type  STRING or  LSTRING to  be assigned  to, or compared
	  with,	 another  string  variable.   Pascal/VS	 has  no  such
	  restriction.

	       Pascal/VS allows	varying-length string variables	to  be
	  up to	32767 characters in length; in PC Pascal, the limit is
	  255 characters.  (EDITOR'S NOTE: At this point the reader is
	  directed to the following footnote:

		   ...The first	release	 of Pascal/VS had  a
		   255 character limit	on string, but	many
		   customers complained	 that the  limit was
		   too small for many of their applications.
		   As a	result,	the second release moved the
		   limit up to 32767...)

┌──────────────────────────────────┐
│ Sets				   │
└──────────────────────────────────┘

	       Both compilers have similar restrictions	on the use  of
	  set variables.  "Set of CHAR" is supported by each compiler.
	  Sets with  negative members  are not	allowed.  The  ordinal
	  value	of the largest member of a set is 255.

	       The two	compilers map  set variables  differently.  In
	  Pascal/VS a variable declared	as


	    set	of `A'..`Z'

	  will occupy  32 bytes	 (256 bits).   Such a  variable	in  PC
	  Pascal  would	 occupy	 the  least  number of words needed to
	  contain the largest member "Z" (in ASCII), which would be 12
	  bytes	(96 bits).

	       In  short,  Pascal/VS   allocates  as  many   bytes  as
	  necessary to hold all	members	of the fundamental base	 type,
	  that is, the type from  which	the base subrange was  derived
	  (In the example above, the fundamental base type is CHAR.)

	       Pascal/VS  maps	packed	 sets  more  compactly.	   For
	  example, a variable declared as

	    packed setof 0..7


	  will occupy 1	byte (8	bits).

	       Pascal/VS supports sets that are	one byte in length (as
	  shown	in the last example.)  In contrast, PC Pascal requires
	  all  sets  to	 occupy	 an  even  number  of  bytes, thus the
	  smallest set size is 2 bytes.

┌──────────────────────────────────┐
│ Variable Attributes		   │
└──────────────────────────────────┘

	       Both    compilers    support    static-internal	   and
	  static-external variables.

	       Pascal/VS has  added three  new reserved	 words to  the
	  language: static, def, and ref.  These words are used	in the
	  similar context as var to declare variables.

	       "Static"   specifies   that   the   following  variable
	  declarations are static-internal.  "Def" specifies that  the
	  variables are	 to become  names of  COMMON sections.	 "Ref"
	  specifies that the variables are external references.


	    static (*internal*)
	      varid1 : typedef1;
	      varid2 : typedef2;
	       ...

	    def	 (*Named common*)
	      varid1 : typedef1;
	      varid2 : typedef2;
	       ...

	    ref	 (*External static*)
	      varid1 : typedef1;
	      varid2 : typedef2;
	       ...

	       In PC  Pascal, variable	declarations may  be qualified
	  with an attribute  description enclosed in  square brackets.
	  This	descriptor  designates	 the  storage  class   of  the
	  variable.


	    var[PUBLIC]	    (*publicly assessable variable*)
		varid1 : typedef;

	    var[EXTERN]	    (*external reference*)
		varid1 : typedef;

	    var[STATIC]	    (*static internal*)
		varid1 : typedef;



	       Pascal/VS provides a way	to share non-static  variables
	  across compilational units  in order to  provide reentrancy.
	  Variables declared with the  var construct in	the  outermost
	  level	of the	module will be	mapped directly	on  top	of the
	  variables which are declared local to	the main program.   In
	  effect,  the	variables  which  were	allocated for the main
	  program are accessible from  all modules.  In	the  following
	  example, the variables A and R will be shared	across the two
	  modules at execution time (assuming the two are  link-edited
	  together).


	    (*main program*)	     (auxiliary	module*)

	    program ABC;	     segment XYZ;
	    var	A: Integer;	     var A: Integer;
		 R: Real;		    R: Real;

	    begin
	      ...
	    end.


	       This approach has the  problem of being very  insecure.
	  If the variables declared in the outer level of a module  do
	  not match in	type, number, and  order to those  in the main
	  program, the results will be unpredictable.




		     ┌──────────────────────────────────┐
		     │ File Name:   ██	 pas1.txt   ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## PCUGINTR.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║			Diskette B Program Description			      ║
║									      ║
║				      by				      ║
║									      ║
║				  Bill Salkin				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       This column describes  the programs, both  complete and
	  DEMOnstration, on Diskette B.

┌──────────────────────────────────┐
│ Program Description		   │
└──────────────────────────────────┘

	       Unless  otherwise  noted,  all  programs	 run under any
	  release of DOS on a 128K IBM-PC, with	either monitor.


     ┌─────────────────────┐
     │ Complete	Program	   │
     ├─────────────────────┴─────────────────────────────────┐
     │ 83 Standard PC-FORTH by Guy Kelly		     │
     │ See "The FORTH Processor" in FORTH column for details │
     │ Use batch file: FORTH.BAT			     │
     └───────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Complete	Program	   │
     ├─────────────────────┴─────────────────────────────────┐
     │ Programmer's Calculator by R. Moak                    │
     │ Invoke: B>PC, or	B>GC				     │
     └───────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Complete	Program	   │
     ├─────────────────────┴─────────────────────────────────┐
     │ Polymaze	by RollinSoft				     │
     │ A maze-generation program			     │
     │ Monitor:	Color only				     │
     │ Invoke: B>POLYMAZE				     │
     └───────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Complete	Programs   │
     ├─────────────────────┴─────────────────────────────────┐
     │ All programs supplied by	Computer Innovations, Inc.   │
     │							     │
     │ SQ.C - squeezes a file to save diskette space	     │
     │ SQ.EXE -	the executable module			     │
     │ Invoke: B>SQ filespec				     │
     │							     │
     │ GRABBAG.C - on Diskette A, originally called USQ.C    │
     │	 because it unsqueezes modules squeezed	by SQ.EXE.   │
     │ GRABBAG.EXE - the executable module		     │
     │ Invoke: B>GRABBAG filespec			     │
     └───────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ DEMOs		   │
     ├─────────────────────┴─────────────────────────────────┐
     │ Trace86 by Morgan Computing Company. Inc.	     │
     │ Invoke: B>T86					     │
     └───────────────────────────────────────────────────────┘




		     ┌──────────────────────────────────┐
		     │ File Name: ██  pcugintr.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## SPONSORS.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║									      ║
║									      ║
║				   Sponsors				      ║
║									      ║
║									      ║
╚═════════════════════════════════════════════════════════════════════════════╝


	  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	  ▌			      2034 Blake Street, Berkeley, CA 94704
	  ▌ Blaise Computing, Inc.    (415)540-5441
	  ▌			      Software developers for programmers and
	  ▌			      system programmers for both Pascal and C.
       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
       ▌ Businessland, Inc.	   14144 Ventura Blvd, Sherman Oaks, CA	91403
       ▌			   (818)788-1170
     ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
     ▌ Computer	Innovations,Inc. 980 Shrewsbury	Avenue,	Suite J-509
     ▌				 Tinton	Falls, NJ 07724
     ▌				 (800)922-0169
   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   ▌ Guy Kelly		      2507 Caminito La Paz, La Jolla, CA 92037
   ▌			      (619)454-1307
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 ▌			    1033 N. Sycamore Avenue, Hollywood,	CA 90038
 ▌ OPAMP TECHNICAL BOOKS    (213)464-4322
 ▌			    Computer books for all interests
   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   ▌ Ron Watson		      (213)884-9967
   ▌			      Data Processing
     ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
     ▌				 P.O. Box 51454-5454, San Jose,	CA 95151
     ▌ SCIOPT Enterprises	 (408)281-0869
     ▌				 Engineering and scientific applications for
     ▌				  the IBM PC and custom	8087 programming.
	  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	  ▌			   1155	Meridian Avenue, Suite 218
	  ▌ TELECON SYSTEMS	   San Jose, CA	95125
	  ▌			   (408)275-1659
	  █████████████████████████████████████████████████████████████████████




		     ┌──────────────────────────────────┐
		     │ File Name:  ██  sponsors.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## TOC.TXT

{% raw %}
```
Copyright 1984 by ABComputing					   May 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║									      ║
║									      ║
║			       Table of	Contents			      ║
║									      ║
║									      ║
╚═════════════════════════════════════════════════════════════════════════════╝


		     ┌─────────────────────────────────────┐
		     │		 Diskette A		   │
		     └─────────────────────────────────────┘


┌─────────────────────┐
│ Main Menu	      │
├─────────────────────┴───────────────────┐
│ Editor's Console      Set RGB Colors    │
│ Operating Systems	Hardware	  │
│ Languages		PC Underground	  │
└─────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Editor's Console    │
     ├─────────────────────┴───────────────────┐
     │ Table of	Contents     Copyright Notice  │
     │ Masthead		     Editorial	       │
     │ Enhancements	     Sponsors	       │
     │ Writer's Guide        KEDIT Review      │
     │ Grab Bag!			       │
     └─────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Set RGB Colors	   │
     ├─────────────────────┴───────────────────┐
     │ Change foreground color		       │
     │ Change background color		       │
     │ Change prompt line color		       │
     │ Change border color		       │
     └─────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Operating Systems   │
     ├─────────────────────┴──────────────────────────────────────────┐
     │ "DOS - Past, Present, and Future"  by Don Buresh               │
     │ "Is It IBM-PC Compatible?" by Don Buresh                       │
     └────────────────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Hardware		   │
     ├─────────────────────┴──────────────────────────────────────────┐
     │ "Readiscope - it Really Works" by Ken Holcombe                 │
     └────────────────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Languages	   │
     ├─────────────────────┴───────────────────┐
     │ Ada		  Assembly Language    │
     │ BASIC		  C		       │
     │ FORTH		  FORTRAN	       │
     │ LISP		  Pascal	       │
     └─────────────────────────────────────────┘

	  ┌─────────────────────┐
	  │ Ada			│
	  ├─────────────────────┴──────────────────────────────────────────┐
	  │ "The Ada Tutorial - Part I" by George Gordon Noel              │
	  │ "Review of Six Ada Books" by George Gordon Noel                │
	  │ "Ada Programs" by George Gordon Noel                           │
	  └────────────────────────────────────────────────────────────────┘

	  ┌─────────────────────┐
	  │ Assembly		│
	  ├─────────────────────┴──────────────────────────────────────────┐
	  │ "Introduction to Assembly Language" by Bill Salkin             │
	  │ "Assembly Programs" by Bill Salkin                             │
	  │ "DOS 1.1, 2.0 Sequential File-Reading" by Bill Salkin          │
	  └────────────────────────────────────────────────────────────────┘

	  ┌─────────────────────┐
	  │ BASIC		│
	  ├─────────────────────┴──────────────────────────────────────────┐
	  │ "Simpmaze Documentation" by Bill Salkin                        │
	  │ "Simpmaze Source Code" by Dan Rollins                          │
	  └────────────────────────────────────────────────────────────────┘

	  ┌─────────────────────┐
	  │ C			│
	  ├─────────────────────┴──────────────────────────────────────────┐
	  │ "Introduction to C" by Ron Watson                              │
	  │ "C Programs" by Ron Watson                                     │
	  └────────────────────────────────────────────────────────────────┘

	  ┌─────────────────────┐
	  │ FORTH		│
	  ├─────────────────────┴──────────────────────────────────────────┐
	  │ "Venture FORTH" by Guy Kelly                                   │
	  │ "FORTH Reference Documents" by Guy Kelly                       │
	  │ "The FORTH Processor" by Guy Kelly                             │
	  └────────────────────────────────────────────────────────────────┘

	  ┌─────────────────────┐
	  │ FORTRAN		│
	  ├─────────────────────┴──────────────────────────────────────────┐
	  │ "Roots of 3rd and 4th Order polynomials" by William Squire     │
	  │ "FORTRAN Source Code" by William Squire                        │
	  └────────────────────────────────────────────────────────────────┘

	  ┌─────────────────────┐
	  │ LISP		│
	  ├─────────────────────┴──────────────────────────────────────────┐
	  │ "Converting Infix to Prefix Notation" by Gary M. Rader         │
	  │ "Source Code for ITOP" by Gary M. Rader                        │
	  └────────────────────────────────────────────────────────────────┘

	  ┌─────────────────────┐
	  │ Pascal		│
	  ├─────────────────────┴──────────────────────────────────────────┐
	  │ "A Comparison of PC Pascal and Pascal/VS" by J. Pickens        │
	  └────────────────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ PC Underground	   │
     ├─────────────────────┴──────────────────────────────────────────┐
     │ "Diskette B Program Description" by Bill Salkin                │
     └────────────────────────────────────────────────────────────────┘

┌─────────────────────┐
│ Splita.bat	      │
├─────────────────────┴──────────────────────────────────────────┐
│ Splits Diskette A into single-sided diskettes.		 │
└────────────────────────────────────────────────────────────────┘



		     ┌─────────────────────────────────────┐
		     │		 Diskette B		   │
		     └─────────────────────────────────────┘


     A	fuller	description  of	 each  program	is  provided in	the PC
     Underground section of PCFL/PCUG.

     ┌─────────────────────┐
     │ Complete	Program	   │
     ├─────────────────────┴─────────────────────────────────┐
     │ 83 Standard PC-FORTH by Guy Kelly		     │
     └───────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Complete	Program	   │
     ├─────────────────────┴─────────────────────────────────┐
     │ Programmer's Calculator by R. Moak                    │
     └───────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Complete	Program	   │
     ├─────────────────────┴─────────────────────────────────┐
     │ Polymaze	by RollinSoft				     │
     └───────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Complete	Programs   │
     ├─────────────────────┴─────────────────────────────────┐
     │ SQ.C   by Computer Innovations, Inc.		     │
     │ SQ.EXE  "    "         "         "                    │
     │ GRABBAG.EXE  (GRABBAG.C ON DISKETTE A)  "  "  "  "    │
     └───────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ DEMO		   │
     ├─────────────────────┴─────────────────────────────────┐
     │ Trace86 by Morgan Computing Co.,	Inc.		     │
     └───────────────────────────────────────────────────────┘

     ┌─────────────────────┐
     │ Splitb.bat	   │
     ├─────────────────────┴─────────────────────────────────┐
     │ Splits Diskette B into single-sided diskettes.	     │
     └───────────────────────────────────────────────────────┘




		     ┌──────────────────────────────────┐
		     │ File Name:  ██	 toc.txt    ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0160

     Volume in drive A has no label
     Directory of A:\

    ADA1     TXT     16278   5-15-84  12:33a
    ADABOOK  REV     12973   5-15-84  12:17a
    ASM1     TXT     21162   5-15-84  12:14a
    ASM2     TXT     19749   5-15-84  12:06a
    BASIC1   TXT      9178   5-15-84  12:18a
    C1       TXT     15815   5-15-84  12:41a
    CHANGES  TXT      5494   5-15-84  12:58a
    CPYRIGHT TXT      1306   5-15-84  12:57a
    DOS1     TXT     13882   5-15-84  12:18a
    DOS2     TXT      6440   5-15-84  12:19a
    EDITOR   TXT      4183   5-15-84  12:19a
    FILES160 TXT      1489   1-26-89   4:19p
    FORT1    TXT      7980   5-15-84  12:19a
    FORTH1   TXT     15235   5-15-84  12:43a
    FORTH2   TXT     16422   5-15-84  12:45a
    FORTH3   TXT      3366   5-15-84  12:17a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-01-88   4:26p
    GRABBAG  C       10321   5-15-84  12:27a
    ITOP     LSP      3740   5-15-84  12:52a
    KEDIT    TXT     22062   5-15-84  12:01a
    LISP1    TXT      9141   5-15-84  12:52a
    LIST1    ADA      2295   5-15-84  12:57a
    LIST1    ASM     16092   5-15-84  12:57a
    LIST1    BAS      3351   5-15-84  12:41a
    LIST1    C         881   5-15-84  12:42a
    LIST1    FOR      5561   5-15-84  12:20a
    MASTHEAD TXT      5240   5-15-84  12:08a
    PAS1     TXT     14621   5-15-84  12:55a
    PCFL     EXE      8576   5-15-84  12:12a
    PCUGINTR TXT      2863   5-15-84  12:56a
    PRETTY1  COM       223   1-01-80   3:07a
    READISCO PE      13126   5-15-84  12:20a
    SPLITA   BAT      1165   5-15-84  12:56a
    SPONSORS TXT      2220   5-15-84  12:59a
    TOC      TXT      7581   5-15-84  12:06a
    WRITERS  GDE      2518   5-15-84  12:59a
           37 file(s)     303261 bytes
                           38912 bytes free
