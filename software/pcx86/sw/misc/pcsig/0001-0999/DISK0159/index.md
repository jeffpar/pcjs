---
layout: page
title: "PC-SIG Diskette Library (Disk #159)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0159/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0159"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC FIRING LINE"

    This is the first issue of the PC FIRING LINE NEWSLETTER.  It has beena
    positioned as the underground newspaper for the IBM user.  You will be
    presented with the untold tales and in-depth programming aids.  Some of
    the articles are about ADA, Assembly routines, and items not written
    about by IBM.  It also contains many sample program listings with
    accompanying  documentation.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $12.00
    
    File Descriptions:
    
    0        BAT  Batch file.
    PATCH2   BAT  Batch file.
    8087     REV  Information file.
    ADA1CMP  REV  Information file.
    BIGDEAL  ASM  Assembly source code.
    GRABBAG  ASM  Assembly source code.
    COLORFUL EXE  Sub-program.
    DEBUG    PAT  Patch for DEBUG.
    GRABBAG  EXE  Sub-program.
    LIST1    ADA  Test the ADS compiler in ADA.
    LIST1    ASM  Test the ADS compiler in Assembley.
    LIST1    C    Test the ADS compiler in C.
    LIST1    PAS  Test the ADS compiler in Pascal.
    PCFL     EXE  Main Program.
    PRETTY1  COM  Program embellisher
    TXT      ADS  Advertisments
    WRITERS  GDE  Text file.
    ???????? TXT  Text file (20 files).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 1-2-3.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║			    The 1-2-3 Advantage 			      ║
║									      ║
║				    by					      ║
║									      ║
║			     Jerrold Benedict				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌────────────────────────────┐
│ Introduction		     │
└────────────────────────────┘

	       Lotus  Development  Corporation's 1-2-3, the integrated
	  spreadsheet,database and graphing program, has received high
	  praise  from	reviewers  and the marketplace. While much has
	  been	 written  about  its  capabilities,  little  has  been
	  documented  on  one  of  its	most  powerful	features,  its
	  programmability.  1-2-3  can	be programmed to automatically
	  load	or  store  files,  calculate  formulas, print or graph
	  data,   or   prompt  for  user  input.  1-2-3  commands,  or
	  combinations of 1-2-3 commands, can be used to simulate many
	  commands  available  in Microsoft Basic, or other high-level
	  programming  languages.  These  stored command sequences, or
	  keystrokes, are called keyboard macros.

┌────────────────────────────┐
│ Executing Keyboard Macros  │
└────────────────────────────┘

	       After  being stored, 1-2-3 macros are invoked in either
	  of two ways. They are started automatically when loaded with
	  a /FILE retrieve operation, or, if already on the workspace,
	  are  started	by pressing the Alt key and the letter name of
	  the  macro.  Macros  are  named using the /RANGE name create
	  operation,   and   must   begin   with   a  backward	 slash
	  (symbolizing	the  Alt  key  ),  followed  by  a  zero or an
	  alphabetic character.

		     ┌─────────────────────────────────────┐
		     │	     Legal Names of Macros	   │
		     ├──────────────────┬──────────────────┤
		     │ Automatic Macros │    Alt Macros    │
		     ├──────────────────┼──────────────────┤
		     │	     \0 	│     \A to \Z	   │
		     └──────────────────┴──────────────────┘

┌────────────────────────────┐
│ Where Are Macros Put?      │
└────────────────────────────┘

	       Macros  can  be	put  anywhere  on the 1-2-3 workspace,
	  provided  they  do  not  interfere  with  area  occupied  by
	  spreadsheet  or database models. Because the 1-2-3 workspace
	  is  so  large  (2048	rows by 256 columns), there is a large
	  area	for  macro  programs.  If  memory  constraints	are  a
	  problem,  macros  can be used to load other macros, to erase
	  portions of the workspace, or to load other models.

┌────────────────────────────┐
│ Storing Macro Keystrokes   │
└────────────────────────────┘

	       Storing	macro keystrokes is a simple task. The command
	  sequences  (	or keystrokes ) are first entered in the 1-2-3
	  workspace  in label form ( e.g. preceded by a label prefix).
	  They	are  then  assigned  a	macro range name following the
	  rules described above. Macros used with other models	can be
	  stored in a file and retrieved later.

┌────────────────────────────┐
│ Sample Macro Keystrokes    │
└────────────────────────────┘

	       Macro  keystrokes  can consist of any 1-2-3 command and
	  function  available  with  normal  keystrokes,  as  well  as
	  special   programming   commands.   This   wide  variety  of
	  keystrokes  provides	for  a versatile programming language.
	  Many of the 1-2-3 macro keystrokes can be used to accomplish
	  the  same  tasks  as Microsoft BASIC commands and functions,
	  while other are unique to 1-2-3.


     ┌────────────────────────────┐	   ┌────────────────────────────┐
     │ BASIC Commands & Functions │	   │ Equivalent 1-2-3 Macro	│
     │				  │	   │	   Keystrokes		│
     └────────────────────────────┘	   └────────────────────────────┘

		   ┌─────────────────────────┐
		   │ Program Control	     │
		   └─────────────────────────┘
		     IF-THEN-ELSE	   /XIFORMULA~
		     GOTO		   /XGLOCATION~
		     GOSUB		   /XCLOCATION~
		     RETURN		   /XR
		     INPUT		   {?}~
		       "                   /XNMESSAGE~LOCATION~
		       "                   /XLMESSAGE~LOCATION~
		       "                   /XNLOCATION~
		     ON N GOTO		   /XI(N)~/XGLOCATION~
		     ON N GOSUB 	   /XI(N)~/XCLOCATION~
		     END		   /XQ~
		     SYSTEM		   /QY~
		     RUN		   {ALT}MACRO NAME (A-Z)

		   ┌─────────────────────────┐
		   │ File Control	     │
		   └─────────────────────────┘
		     LOAD		   /FR
		     CHAIN		   /FC~
		     SAVE		   /FS
		     KILL		   /FE~
		     FILES		   /FL~

		   ┌─────────────────────────┐
		   │ Output Control	     │
		   └─────────────────────────┘
		     TAB		   {RIGHT}
		     PRINT		   LABEL~
		       "                   NUMBER~
		     LPRINT		   LABEL~/PP~RANGE~GQ
		       "                   NUMBER~/PP~RANGE~GQ
		     LOCATE		   {GOTO}
		     CLS		   {HOME}/REA1.H20~
		     USING		   /RFFORMAT~
		       "                   /WCCOLUMN WIDTH~
		     BEEP		   {NAME}~

		   ┌─────────────────────────┐
		   │ Program Editing	     │
		   └─────────────────────────┘
		     TRON, TROFF	   {ALT}{HELP}
		     EDIT		   {GOTO}LOCATION~{EDIT}
		     DELETE		   /REMACRO RANGE~
		     LIST		   {GOTO}MACRO LOCATION~
		     LLIST		   /PP~MACRO RANGE~GQ
		     NEW		   /WEY~

		   ┌─────────────────────────┐
		   │ Program Documentation   │
		   └─────────────────────────┘
		     REM		   LABEL~ (NEXT COLUMN)

		   ┌─────────────────────────┐
		   │ Variables		     │
		   └─────────────────────────┘
		     LET		   /RNCVARIABLE~LOCATION~

		   ┌─────────────────────────┐
		   │ Text/numeric Conversion │
		   └─────────────────────────┘
		     VAL		   {EDIT}{HOME}{DEL}~
		     STR$		   {EDIT}{HOME}'~



	       Some   BASIC   commands	 and  functions  can  only  be
	  implemented in 1-2-3 with tricky macro keystroke sequences:

	  ┌────────────────────────────────────────────────────────────┐
	  │			  FOR-NEXT LOOP 		       │
	  ├──────────────────────────┬─────────────────────────────────┤
	  │   FOR-NEXT COLUMN	     │	 Total no. of loops:   5       │
	  │   (FOR I = 1 TO 5)	     │	 Current loop no.:     1       │
	  ├──────────────────────────┴─────────────────────────────────┤
	  │							       │
	  │		1      - Start macro with cursor here	       │
	  │		2					       │
	  │		3					       │
	  │		4					       │
	  │		5					       │
	  │							       │
	  │	  /WGRM 		     Recalculate manually      │
	  │	  /RNCNUMBER~LOCATION1~      Total no. of loops        │
	  │	  /RNCCOUNTER~LOCATION2~     Current loop number       │
	  │	  /RNCCOLUMN~		     FOR-NEXT column	       │
	  │	  {BS}.{END}{DOWN}~		  "     "              │
	  │	  {GOTO}NUMBER~ 	     Calculate total loops     │
	  │	  @COUNT(COLUMN){CALC}~ 	  "     "              │
	  │	  {DOWN}+(COUNTER)+1~	     Calculate current loop    │
	  │	  {GOTO}COLUMN		     Start FOR-NEXT loop       │
	  │	  {EDIT}{CALC}{DOWN}{CALC}   Assign RANGE NAME "loop"  │
	  │	  {PGDN}{PGDN}THIS WORKS!~   Steps between loops       │
	  │	  {PGUP}{PGUP}			  "     "              │
	  │	  /XI(COUNTER)<=(NUMBER)~/XGLOOP~   Loop or End MAcro  │
	  │	  /WGRA 		     Recalculate automatically │
	  │	  {GOTO}COLUMN~/XQ~	     Return to column, quit    │
	  └────────────────────────────────────────────────────────────┘


	       1-2-3  also  has  commands  and	functions  not	easily
	  implemented in BASIC.

┌────────────────────────────┐
│ Sample Macros 	     │
└────────────────────────────┘

	       The following simple macros demonstrate the flexibility
	  and  power of 1-2-3 keystrokes. These macros can be combined
	  with	 other	 customized   macros  to  form	a  library  of
	  subroutines.

		   ┌─────────────────────────────────────────────────────┐
	      1.   │ Convert formula to number				 │
		   └─────────────────────────────────────────────────────┘
			{EDIT}{CALC}

		   ┌─────────────────────────────────────────────────────┐
	      2.   │ Insert one row or column				 │
		   └─────────────────────────────────────────────────────┘
			ROW			      COLUMN
			---			      ------
			/WIR~			      /WIC~

		   ┌─────────────────────────────────────────────────────┐
	      3.   │ Center labels in row or column			 │
		   └─────────────────────────────────────────────────────┘

			ROW			      COLUMN
			---			      ------
			/RLC.{END}{RIGHT}~	      /RLC.{END}{DOWN}~

		   ┌─────────────────────────────────────────────────────┐
	      4.   │ Display worksheet formulas 			 │
		   └─────────────────────────────────────────────────────┘

			/WGFT~/WGC30~

		   ┌─────────────────────────────────────────────────────┐
	      5.   │ Enter months as column headings across row 	 │
		   └─────────────────────────────────────────────────────┘

			^JAN{RIGHT}^FEB{RIGHT}^MAR{RIGHT}^APR{RIGHT}
			^MAY{RIGHT}^JUN{RIGHT}^JUL{RIGHT}^AUG{RIGHT}
			^SEP{RIGHT}^OCT{RIGHT}^NOV{RIGHT}^DEC{RIGHT}
			{END}{LEFT}

		   ┌─────────────────────────────────────────────────────┐
	      6.   │ Save, print or graph worksheet			 │
		   └─────────────────────────────────────────────────────┘

			/XMLOCATION~ SAVE	  PRINT      GRAPH
				     FILE:CHART1  ENTIRE W/S BAR GRAPH
				     /FSCHART1~R~ /PPCA      /GRG
						  RA1.H100~  TB
						  OML10~     XC13.C22~
						  MR140~     AF13.F22~
						  QGQ	     OSYFC0~Q
							     TFSALES~
							     QVQ

		   ┌─────────────────────────────────────────────────────┐
	      7.   │ Calculate year-to-date values			 │
		   └─────────────────────────────────────────────────────┘
						       CURRENT	  YTD
		   ENTER CURRENT PERIOD AMOUNT, THEN	  100	  468
		   GOTO YTD CELL - INVOKE MACRO 	  345	  590

			{EDIT}+{DOWN}{LEFT}{UP}~    - ASSIGN \Y HERE
			{EDIT}{CALC}~{DOWN}
			/RNCYTD~{LEFT}~
			/XI(@COUNT(YTD)=1)~/RNDYTD~/XG\Y~
			/RNDYTD~

		   ┌─────────────────────────────────────────────────────┐
	      8.   │ Enter numbers using numeric keypad 		 │
		   └─────────────────────────────────────────────────────┘

			/XMLOCATION~  DOWN   RIGHT
				      SELECT SELECT INPUT DIRECTION
				      {?}~   {?}~   - ASSIGN \D, \R
				      {DOWN} {RIGHT}
				      /XG\D~ /XG\R~

		   ┌─────────────────────────────────────────────────────┐
	      9.   │ If current cell=0, branch to other macro, else quit │
		   └─────────────────────────────────────────────────────┘

			/RNCHERE~~
			/XIHERE=0~/RNDHERE~/XG\A~
			/RNDHERE~/XQ~

			OTHER MACRO   - ASSIGN \A HERE

		   ┌─────────────────────────────────────────────────────┐
	      10.  │ Display various named and save graphs in succession │
		   └─────────────────────────────────────────────────────┘

			/GNU{?}~      - ASSIGN \G HERE
			Q/XG\G~





		     ┌──────────────────────────────────┐
		     │ File Name:  ██	 1-2-3.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## ADA1.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║			  Ada - New Language in Town			      ║
║									      ║
║				      by				      ║
║									      ║
║			      George Gordon Noel			      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────┐
│ Introduction	       │
└──────────────────────┘

	       I  am  a  free  lance  writer,  and  have used Ada on a
	  full-time  basis  for  over  one year. I am also a member of
	  ADATEC, the professional society devoted to Ada.

	       As  Ada has the full support of the U.S. government, it
	  is  destined to become one of the most important programming
	  languages of the last part of this century. It is my purpose
	  to introduce you to this important language.

	       If  you	have  questions about Ada (or comments on this
	  column),  send  them to PCFL and I will do my best to answer
	  them. Your feedback is needed.

	       This  first  column addresses the history and nature of
	  Ada. A full Ada tutorial begins in the next issue of PCFL.

	       Ada  is a new language, and good tutorial literature is
	  difficult  to  find.	Those  seriously  studying  Ada should
	  subscribe  to  ADA  LETTERS,	the authoritative Ada journal.
	  They	should	also  consider	joining ADATEC. Send inquiries
	  regarding  the  ADA  LETTERS	or membership in ADATEC to the
	  Association  for  Computing Machinery, 11 West 42nd St., New
	  York, NY 10036.

	       Ada  was  created  by  the  United States Department of
	  Defense  (  DoD ) as a solution to a very costly problem. In
	  typical  bureaucratic  fashion,  different  branches	of the
	  Pentagon   used  different  computer	languages  to  program
	  embedded  systems  (	computers that live inside and control
	  larger  machines  such as cruise missiles or space probes ).
	  Government analysts realized that adopting one language as a
	  common "tongue" could save the taxpayers a sizable amount of
	  money. A committee (of course) was formed to draft a list of
	  specifications for this common language.

	       Existing   languages  such  as  Pascal  and  PL/1  were
	  considered,  but found inadequate. The Pentagon contracted a
	  large  multinational	corporation,  CII  Honeywell  Bull, to
	  design a new language to their stringent specifications. The
	  result was Ada.

	       The  name  Ada is not an acronym like FORTRAN or BASIC.
	  Ada  was  a nineteenth century British  noblewoman - Augusta
	  Ada,	Countess  of  Lovelace.  She  assisted	the pioneering
	  inventor   Charles   Babbage	 in  the  development  of  his
	  mechanical computer called the analytical engine.

┌──────────────────────┐
│ Design Goals of Ada  │
└──────────────────────┘

	       The  primary  design  goals  of	Ada  were to provide a
	  structured  language,  a  portable  language,  and a modular
	  language.

┌──────────────────────┐
│ Structured Language  │
└──────────────────────┘

	       A  structured  language	encourages  well  thought out,
	  highly formalized programs. The syntax of Ada is very rigid,
	  which  restricts a programmer's freedom. This eliminates the
	  sort	of sloppy, bug-filled programming that comes naturally
	  in  non-structured  languages  such  as  BASIC  or  FORTRAN.
	  (EDITOR'S NOTE: them is fighting words! )

	       The  formality of Ada's syntax is to be expected as Ada
	  has	borrowed  from	another  highly  structured  language:
	  Pascal.  In future columns, we will consider features of Ada
	  that go far beyond anything in Pascal.

┌──────────────────────┐
│ Portability	       │
└──────────────────────┘

	       The  second  design  goal  was portability. As Ada is a
	  trademark  of  the DoD, any language calling itself Ada must
	  meet DoD standards. These standards are detailed in the "Ada
	  Language Reference Manual" - unfortunately, one of the worst
	  written  documents  in  the  English	language. ( If you are
	  serious  about  Ada, though, you should own a copy. Order it
	  from	ADATEC	at  the  address given above.) There can be no
	  deviations  from  the  standard  -  no  subsets,  supersets,
	  dialects,  or  variants. When a compiler meets the standard,
	  it is submitted to the DoD for "validation."

	       Ada  programs  written  on one computer can be moved to
	  another   machine   without	translation.   This   type  of
	  standardization  was	one  of  the  original	advantages  of
	  Pascal,  although  the  weaknesses  in  that	language  have
	  spawned a number of dialects that are incompatible with each
	  other.

┌──────────────────────┐
│ Modularity	       │
└──────────────────────┘

	       The  last  major design goal of Ada is modularity - the
	  ability  to  break a large program into smaller, more easily
	  managed  parts  (top-down programming) or to assemble small,
	  pre-compiled	modules  into  one  large  program  (bottom-up
	  programming). Other languages have this ability. In FORTRAN,
	  independently compiled subroutines can be linked to form one
	  large  module. But, modularity in Ada far exceeds anything I
	  have seen in other languages.

	       This  is  because  Ada  has  a dual nature - it is part
	  compiler  and  part  data  base  manager.  When a program is
	  compiled,  Ada  places  it  in a data base called a "program
	  library"  where it waits patiently until it is needed. Since
	  this	is  the  part of Ada that excites me the most, we will
	  use it as a springboard for our first example.

┌──────────────────────┐
│ Example Program      │
└──────────────────────┘

	       When  an  Ada  compiler is purchased, a program library
	  containing  several packages is included. One package is the
	  module TEXT_IO, which contains the tools for doing input and
	  output  with	text  characters.  (  I/O  routines are not an
	  intrinsic part of Ada as they are in most languages.) If I/O
	  routines  are  needed,  the TEXT_IO module must be retrieved
	  from	the program library. This is done using an Ada command
	  called  a  "with  clause,"  consisting  of  the  word "with"
	  followed  by the name of the module to be retrieved from the
	  program library.

	       Our first Ada program has a "with clause" as a heading.
	  It  is  an  example  of  a  "procedure," an Ada program unit
	  similar  to  the subroutines of PL/1, FORTRAN, and a host of
	  other languages.


		   with TEXT_IO;
		   procedure MESSAGE is
		      use TEXT_IO;
		   begin
		      put ("How are things going so far?");
		   end MESSAGE;


	       Ignoring   the	"with  clause"  and  some  syntactical
	  curiosities  (such  as the "use clause" in line three), this
	  could  be  Pascal  or  any number of modern languages. As we
	  have	not  begun  our tutorial, do not be concerned with the
	  pieces of the language you don't understand.

	       When  the  program  is  compiled and run, it prints the
	  message:


		   How are things going so far?


	       The  input/output  of this program is done by the "put"
	  procedure  in  line  five, which prints a string. Before the
	  "put"  procedure can be used, it  must be retrieved from the
	  TEXT_IO  module in the program library. This is accomplished
	  by the "with clause." When the Ada compiler encounters "with
	  TEXT_IO"  it  acts  like  a data base manager, searching the
	  program  library  until  TEXT_IO is found. Upon locating the
	  module,  the	compiler  makes  all  the resources inside the
	  module  (including  the  "put"  procedure)  available to the
	  MESSAGE program.

	       All   compiled  programs  are  placed  in  the  program
	  library.  The  MESSAGE example program is there now, and can
	  be  retrieved  using	the  "with clause," just as we did for
	  TEXT_IO.




		   with TEXT_IO, MESSAGE;
		   procedure ADA_SENDS_HER_GREETINGS is
		      use TEXT_IO;
		   begin
		      put ("The Countess asks `");
		      MESSAGE;
		      put ("'");
		   end ADA_SENDS_HER_GREETINGS;


	       Compiling  and  running	this  program  results	in the
	  display:


		   The Countess asks `How are things going so far?'


	       I  hope	the  answer is "Fine". This question from Lady
	  Lovelace brings us to the end of the first column.

┌──────────────────────┐
│ Conclusion	       │
└──────────────────────┘

	       Those hungry for more are invited to dine on the source
	  code	in  the  "Ada  Programs"  section  of this column. One
	  program  is a sort program, and the other finds the greatest
	  common  divisor  of  two  integers.  The  latter  routine is
	  intended as a demonstration of Ada's "package" facility.

	       The  nitty-gritty details needed to understand Ada will
	  begin pouring in, in the next issue of PCFL.




		     ┌──────────────────────────────────┐
		     │ File Name:  ██	  ada1.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## ASM1.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║		       Introduction to Assembly Language		      ║
║									      ║
║				    by					      ║
║									      ║
║				Bill Salkin				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       Still looking for the needle in the haystack? Or has it
	  pricked  you	more  than  once?  These are the sentiments of
	  beginning and experienced assembly language programmers.

	       This  column  is  for  beginners  and  you will get the
	  POINT!  We  remove  the veil of secrecy from the clandestine
	  brotherhood of assembly language programmers, and reveal how
	  easy it is to use assembly language ( Gasp! ).

	       Our  approach  is  to  write  programs  implementing  a
	  particular  function	(  such  as clearing the screen ), and
	  examine  them.  Initially,  no  explanation of the technical
	  aspects of the program is given. After successfully creating
	  and  running	several  such  programs,  you will have gained
	  considerable	confidence  in your assembly language ability.
	  The  time  is  then  ripe  to  "circle back" and explain the
	  omitted technical foundation.

	       Be  patient,  run  all examples, and you will soon find
	  yourself  bored  with  the  monotony	of  the language - but
	  impressed with the power it affords you.

┌──────────────────────────────────┐
│ Assumptions			   │
└──────────────────────────────────┘

	       All  source  code,  unless stated otherwise, should run
	  under any release of DOS.

	       You   should   be  familiar  with  1)  the  binary  and
	  hexadecimal numbering systems; 2) the terms bits, bytes, and
	  "K."

┌──────────────────────────────────┐
│ Notation			   │
└──────────────────────────────────┘

	       The  letter  "H"  is  used  to  indicate  a hexadecimal
	  number. Hence 24H = 36 decimal and 0BH = 11 decimal.

	       Binary  numbers	are  terminated  with  the letter "B".
	  00000011B = 3 decimal and 00001111B = 15 decimal.

	       Unless  we  affix  an  "H"  to  a number, the number is
	  interpreted  as  a  decimal  number.	21  is	regarded as 21
	  decimal, and 21H = 33 decimal.

┌──────────────────────────────────┐
│ Recommended Reading		   │
└──────────────────────────────────┘

	       You should purchase the following books:


		  1)  INTRODUCTION to ASM-86, by Intel Corporation,
		  2)  8088 ASSEMBLER LANGUAGE PROGRAMMING the IBM PC,
		       by David Willen and Jeffrey Krantz. Howard
		       Sams Co.

	       I  own  both  books  and  will  testify	to  their high
	  tutorial content.

	       Intel's  book  is not written for the IBM PC explicitly
	  but  the  information  applies  to  the  PC.	This book is a
	  beautiful   expression  of  information  difficult  to  find
	  elsewhere.

	       Dan   Rollin's  book  "IBM  PC:  8088  MACRO  Assembler
	  Programming"  should be available soon from Macmillan, and I
	  hope	to add it to the above list. Dan is a good writer, and
	  very experienced in assembly language.

	       Scanlon's  book  will be of use when you can run simple
	  assembly language programs without difficulty.

┌──────────────────────────────────┐
│ ASM. vs. MASM 		   │
└──────────────────────────────────┘

	       The  assembler  package as purchased from IBM is called
	  the  MACRO ASSEMBLER. Actually, the MACRO ASSEMBLER diskette
	  contains  both  the  assembler  (  ASM.EXE  )  and  a  macro
	  assembler  (MASM.EXE	). These are distinct processors, with
	  MASM being a superset of ASM.

	       References  to  "the assembler" in this column apply to
	  both ASM and MASM  unless specifically noted.

	       Using ASM, errors detected in source code are displayed
	  and  an  error  code	given.	For  the  same	program,  MASM
	  additionally	 displays   an	 explanation   of  the	error.
	  (Sometimes   these  explanations  are  less  clear  than  no
	  explanation.	 My  favorite  is  #71	:  "This  message  not
	  currently used." If the space is available, PCFL may want to
	  rent it.)

	       A macro is similar to a subroutine. MASM supports macro
	  processing, and occupies 67K bytes.

	       ASM does not support macro processing, and occupies 52K
	  bytes.

	       ASM can process small programs in a PC with 64K of RAM,
	  but  I  suggest  a  minimum  of 128K RAM for use with either
	  assembler.

	       Neither assembler currently supports 8087 code. (Rumor:
	  this situation will change soon.)

	       When either assembler prompts for the filespec, if only
	  the  filename  is  keyed,  a	file  extension  of  ".asm" is
	  assumed.  Accordingly, all assembly language source files in
	  this	column	use  ".asm"  as the file extension to minimize
	  typing.

┌──────────────────────────────────┐
│ Program Structure		   │
└──────────────────────────────────┘

	       In   general,  an  assembly  program  contains  a  data
	  segment, stack segment, and a code segment.

	       A  segment is a 64K contiguous area used for a specific
	  purpose.  The  data  segment	holds  data  (	constants  and
	  variables),	and   the   STACK   segment   is   used  as  a
	  communications  ground  for  subroutines.  The  CODE segment
	  contains  the  "guts"  or  what  we loosely refer to as "the
	  program."

	       Declarations for the DATA, STACK, and CODE segments are
	  shown below.

	 ┌──────────────────────┐
	 │ DATA SEGMENT 	│
	 └──────────────────────┘
	  DATA	  SEGMENT PARA

	  DATA	  ENDS

	 ┌──────────────────────┐
	 │ STACK SEGMENT	│
	 └──────────────────────┘
	  STACK   SEGMENT PARA STACK 'STACK'

	  STACK   ENDS

	 ┌──────────────────────┐
	 │ CODE  SEGMENT	│
	 └──────────────────────┘
	  CODE	  SEGMENT PARA

	  CODE	  ENDS



	  A segment is indicated to the assembler by the statement


	  XXXXXX SEGMENT PARA


	  where  XXXXXX  is the name of the segment. In a later column
	  we  delve  into the meaning of PARA, and how the LINKER uses
	  the segment name.


	  A segment is closed or completed, by using


	  XXXXXX ENDS


	  where  "XXXXXX"  is  the name used in the declaration of the
	  SEGMENT ( ENDS = END of Segment ).

┌──────────────────────────────────┐
│ Registers			   │
└──────────────────────────────────┘

	       The  brain  of the IBM PC is the 8088 chip. It contains
	  several registers, of which we mention only four.


	 AX register	  BX register	   CX register	    DX register
	┌───────────┐	 ┌───────────┐	  ┌───────────┐    ┌───────────┐
	│ AH  │ AL  │	 │ BH  │ BL  │	  │ CH	│ CL  │    │ DH  │ DL  │
	└───────────┘	 └───────────┘	  └───────────┘    └───────────┘


	       Each  register can hold a 16 bit ( 2 byte ) number. The
	  largest  integer that can be contained in AX,BX,CX, or DX is
	  65535.

	       Each register is divided into an 8-bit "high" and 8-bit
	  "low"  part.  As shown above, AH represents the high order 8
	  bits	of  the AX register, and AL represents the low 8 bits.
	  The largest integer an 8-bit register can hold is 255.

	       The  PC	has  every  kind  of  register we could want -
	  except a cash register.

	       Certain	instructions  assume  that  their input can be
	  found   in   a  given  register.  For  example,  the	"loop"
	  instruction assumes the CX ( "count" ) register contains the
	  number  of  iterations;  and	2)  string  related operations
	  assume   the	SI  and  DI  registers	act  as  "source"  and
	  "destination" pointers.

	       Registers  are  also  important	because  they  are the
	  fastest area on the chip that the programmer can access.

	       To  store  or place the number 8 in the AH register use
	  the assembly instruction:


	  MOV	AH,8


	       The  MOV  instruction moves the source operand (8) into
	  the destination operand (AH).

	       In  assembly instructions, the source operand is always
	  the  right  operand,and  the destination operand is the left
	  operand.


	       The following is an illegal MOV instruction:


	  MOV	CL,3000        ;move 3000 decimal into the CL register


	  as  an  8-bit  register  ( CL is an 8-bit register ) can not
	  hold an integer larger than 255.

┌──────────────────────────────────┐
│ Comment (;)			   │
└──────────────────────────────────┘

	       A  semicolon (;) is used to indicate the beginning of a
	  comment.  Any  information  from the semicolon to the end of
	  the  line  is disregarded by the assembler. ( Maybe if those
	  darn	assemblers would stop ignoring comments and read them,
	  our  code  would  work the way we want it to, not the way we
	  program  it!	Of  course,  considering the quality of source
	  code documentation, it may be best to ignore the comments.)

	       Comments  can  be  placed  in  any  column, and used to
	  explain   individual	 source   code	statements  or	entire
	  sections.

┌──────────────────────────────────┐
│ Batch File			   │
└──────────────────────────────────┘

	       We  are	almost	prepared  to  run  our	first assembly
	  language program. But first... the batch file, please.

	       Assembling source code for errors, linking, and running
	  the resultant module is a repetitive process. The batch file
	  0.bat  (contained  on  this  diskette)  is simple to use but
	  adequate for our purposes:


				 ASM %1;
				 LINK %1;
				 %1


	       It  will  assemble,  link  and  run  the  program  with
	  filespec %1.

	       ASM  in	0.bat  refers  to  ASM.EXE, and LINK refers to
	  LINK.EXE ( the "linker" ). Both modules must be available to
	  use 0.bat.

	       To   assemble,link,   and   run	the  program  in  file
	  BIGDEAL.ASM, type


	  A>0 BIGDEAL


	  and press the ENTER key. (Recall the assembler defaults to a
	  file	extension of ".asm", so the name BIGDEAL used above is
	  regarded as a reference to BIGDEAL.ASM.)

	       Assuming  that BIGDEAL.ASM has no errors, the output of
	  the batch file is:



	  A>ASM BIGDEAL;
	  The IBM Personal Computer Assembler
	  Version 1.00 (C)Copyright IBM Corp 1981


	  Warning Severe
	  Errors  Errors
	  0	  0

	  A>LINK BIGDEAL;
	  IBM Personal Computer Linker
	  Version 2.00 (C)Copyright IBM Corp 1981, 1982, 1983


	  A>BIGDEAL

	  A>




	  ( NOTE: The linker is version 2.00, as I use DOS 2.0 ).


	       The source code for program BIGDEAL is contained in the
	  file BIGDEAL.ASM on this diskette.

	       Format  a  new  diskette  and  copy  these files to it:
	  ASM.EXE,  LINK.EXE, BIGDEAL.ASM, 0.BAT. (Label this diskette
	  "Assembler  Work Diskette.") Then apply 0.bat to BIGDEAL.ASM
	  and  verify the above output. If the output is not as shown,
	  then	YOU  SCREWED  UP!  Continue  trying  until your output
	  agrees with that shown above.

┌──────────────────────────────────┐
│ Sample Program		   │
└──────────────────────────────────┘

	       When BIGDEAL.ASM was assembled,linked, and run, nothing
	  apparent occurred.

	       Try  this:  type  BIGDEAL on the command line and press
	  the ENTER key. The screen looks as follows:


	  A>BIGDEAL

	  A>


	       Still no apparent reaction.

	       Actually,  BIGDEAL.ASM contains the linkage conventions
	  needed  to  return to DOS. (We have gotten "in" and "out" of
	  the program successfully.)

	       This simple program is the foundation on which we build
	  future programs. Study its general structure carefully.


	  Routine BIGDEAL.ASM follows.




;COPYRIGHT 1984 BY ABComputing
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS ROUTINE RETURNS TO THE CALLER WHEN INVOKED.		 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------
DATA	SEGMENT PARA


DATA	ENDS
;------------------------------------------------------------------------

	    ;The   above   segment   is  called  a  data  segment.  We
	    ;initialize  and  save  variables  or  constants  in  this
	    ;segment.  Think  of  a  segment  as  a  section of memory
	    ;capable of containing 64K of information.
	    ;
	    ;The  above  DATA  segment	does  not actually contain any
	    ;data. It is empty.
	    ;
	    ;(	NOTE:  This  small  discussion, is a series of comment
	    ;statements as each line is preceded by a semicolon.)
	    ;
	    ;Further  note that assembly language code is free format.
	    ;There  are  no  defined  positions  where instructions or
	    ;directives must  be  placed. Develop  a  style  of coding
	    ;that appeals to you, and use it consistently.


;------------------------------------------------------------------------
STACK	SEGMENT PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------

	    ;This  is  the  stack  segment.  The  stack  is  a	common
	    ;communication   area   for   subroutines.	Variables  are
	    ;"pushed"  (saved)  onto  the  stack  by one routine to be
	    ;"popped" ( retrieved ) and used by another.
	    ;
	    ;This stack segment is NOT empty.
	    ;
	    ;DB means  "define byte."  The information following DB is
	    ;regarded as being consecutive bytes in memory.
	    ;
	    ;DUP  means "duplicate."  The stack contains 40H copies of
	    ;the four bytes 'STCK'.
	    ;
	    ;In  summary,  as  40H  =  64  decimal,  the stack segment
	    ;contains 64 copies of the four bytes 'STCK' and  occupies
	    ;256 bytes.
	    ;
	    ;If  we  could  look  into	memory at the STACK segment we
	    ;would see
	    ;
	    ;		    ...  ...  ...  ...	...
	    ;
	    ;	      STCKSTCKSTCKSTCKSTCKSTCKSTCKSTCK
	    ;	      STCKSTCKSTCKSTCKSTCKSTCKSTCKSTCK
	    ;	      STCKSTCKSTCKSTCKSTCKSTCKSTCKSTCK
	    ;	      STCKSTCKSTCKSTCKSTCKSTCKSTCKSTCK
	    ;	      STCKSTCKSTCKSTCKSTCKSTCKSTCKSTCK
	    ;	      STCKSTCKSTCKSTCKSTCKSTCKSTCKSTCK
	    ;	      STCKSTCKSTCKSTCKSTCKSTCKSTCKSTCK
	    ;	      STCKSTCKSTCKSTCKSTCKSTCKSTCKSTCK
	    ;		    ...  ...  ...  ...	...
	    ;
	    ;Later  we	show  how  to  view  memory  using the program
	    ;DEBUG.  We  won't have difficulty  recognizing  the STACK
	    ;segment, will we?


;------------------------------------------------------------------------
CODE	 SEGMENT PARA

	    ;This  is the code segment where the "guts" of our program
	    ;goes.


ASSUME	 CS:CODE, DS:DATA, SS:STACK

	    ;The  ASSUME  statement  in  the  code  segment  tells the
	    ;assembler to make certain assumptions  about the contents
	    ;of certain registers  ( Hint: CS = "code segment" and its
	    ;value  indicates the start of the code segment; DS points
	    ;to  the data segment, and SS points to the STACK segment.
	    ;The  assembler  is told to assume that these settings are
	    ;in effect.)
	    ;
	    ;It  is  the  programmer's  responsibility  to  adjust the
	    ;contents  of  these  registers ( CS,DS,SS ) to agree with
	    ;the information supplied by the ASSUME statement.


;--STANDARD LINKAGE TO DOS


BIGDEAL  PROC  FAR	       ;DO
	 PUSH  DS	       ;
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	   NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!

	;We do not explain the standard linkage convention at this
	;time, but will later.


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


	    ;The  RET  statement  normally RETurns to the program that
	    ;called this program. Through a series of events we return
	    ;to DOS.



BIGDEAL  ENDP		       ;END of Procedure
CODE	 ENDS		       ;END of code Segment
;------------------------------------------------------------------------

	 END   BIGDEAL	       ;END of routine BIGDEAL



┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       It  takes  considerable	effort	to create the simplest
	  assembly  language  routines.  This column has discussed the
	  most	difficult aspect of assembly language for the novice -
	  writing  your first routine. Future programs are essentially
	  exercises  in  filling  in the data and code segments in the
	  above  "shell."  Assembly  language  IS  that  easy ( almost
	  anti-climactic). And they said you couldn't do it!

	       My next assembly column shows how to clear the display,
	  print  a  string  on	the  display, and delete a file. These
	  operations invite a discussion of BIOS and DOS calls.

	       The  source  code  for these functions can be viewed by
	  pressing  the  Esc  key,  followed  by  the F2 key. Run each
	  program, and write me if you have any difficulties.






	  P.S.	It  may  be interesting to study the size of an ".EXE"
	  module  (  use  BIGDEAL.EXE ). Very small, and indicative of
	  the small space used by assembly language modules.





		     ┌──────────────────────────────────┐
		     │ File Name:  ██	  asm1.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## BIGDEAL.ASM

{% raw %}
```
;COPYRIGHT 1984 BY ABComputing
;
;		     ┌──────────────────────────────────┐
;		     │ File Name: ██   bigdeal.asm  ██	│
;		     └──────────────────────────────────┘
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS ROUTINE RETURNS TO THE CALLER WHEN INVOKED.		 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------
DATA	SEGMENT PARA


DATA	ENDS
;------------------------------------------------------------------------


;------------------------------------------------------------------------
STACK	SEGMENT PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------


;------------------------------------------------------------------------
CODE	 SEGMENT PARA

ASSUME	 CS:CODE, DS:DATA, SS:STACK


;--STANDARD LINKAGE TO DOS

BIGDEAL  PROC  FAR	       ;DO
	 PUSH  DS	       ;
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	   NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


BIGDEAL  ENDP		       ;END of Procedure
CODE	 ENDS		       ;END of Segment
;------------------------------------------------------------------------

	 END   BIGDEAL	       ;END of routine BIGDEAL
```
{% endraw %}

## C1.TXT

{% raw %}
```
Copyright (c) 1984 by Daniel L. Roady.	All rights reserved.
╔═════════════════════════════════════════════════════════════════════════════╗
║			  THE "STANDARD I/O LIBRARY"                          ║
║									      ║
║				    by					      ║
║									      ║
║			      Daniel L. Roady				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       This  is the first in a series of articles describing a
	  "UNIX"   compatible  implementation  of  the  "Standard  I/O
	  Library."  The  library  contains  the members listed in the
	  following  table  and  several standard macros for character
	  handling.


		  ┌─────────────────────┬────────────────────┐
		  │	  getchar	│      putchar	     │
		  ├─────────────────────┼────────────────────┤
		  │	  printf	│      scanf	     │
		  ├─────────────────────┼────────────────────┤
		  │	  fopen 	│      fclose	     │
		  ├─────────────────────┼────────────────────┤
		  │	  getc		│      putc	     │
		  ├─────────────────────┼────────────────────┤
		  │	  ungetc	│      calloc	     │
		  ├─────────────────────┼────────────────────┤
		  │	  cfree 	│      strlen	     │
		  ├─────────────────────┼────────────────────┤
		  │	  strcpy	│      strcat	     │
		  ├─────────────────────┼────────────────────┤
		  │	  strcmp	│		     │
		  └─────────────────────┴────────────────────┘


	       This  article discusses the printf function. The source
	  code	for  this  function can be  viewed by pressing the Esc
	  key, followed by the F2 key.

┌──────────────────────────────────┐
│ Printf Overview		   │
└──────────────────────────────────┘

	       Printf	provides   automatic   formatting   and   type
	  conversions  for  output  to	the  standard  output  channel
	  ("stdout").


	       The printf calling sequence is:


		    printf(control-string,  arg1,  arg2  ....);


	       The  parameter "control-string" is actually a character
	  pointer to a quoted string containing the text to be output.
	  "Control-string"  may  additionally  contain  formatting and
	  type conversion specifications.

	       The  arguments  ( arg1, arg2, etc ) correspond with the
	  conversion specifications in "control-string."

	       A fuller discussion of the printf function can be found
	  in "The C Programming Language" by Kernighan and Ritchie.

┌──────────────────────────────────┐
│ Printf Source Code package	   │
└──────────────────────────────────┘

	       The   printf   package  consists  of  three  externally
	  accessible  routines:  printf,  fprintf,  and  sprintf. Each
	  routine performs the same formatting and conversion function
	  but the output destinations are different. Printf outputs to
	  stdout;  fprintf  outputs  to  a specified file; and sprintf
	  outputs to a memory buffer.

	       A typical call to each routine is shown below.


	    ┌──────────────────────────────────────────────────────┐
	    │	#include	<stdio.h>			   │
	    │							   │
	    │		FILE	*fopen(),*fp;			   │
	    │		char	buffer[133];			   │
	    │							   │
	    │	main()						   │
	    │		{					   │
	    │		printf("It's a small world.\n");           │
	    │							   │
	    │		fp = fopen("outfile.txt","w");             │
	    │		fprintf(fp,"It's a small world.\n");       │
	    │		fclose(fp);				   │
	    │							   │
	    │		sprintf(buffer,"It's a small world.\n");   │
	    │		}					   │
	    └──────────────────────────────────────────────────────┘


	       The  printf package is written as three entry points to
	  handle the details of the output selection. Each entry point
	  performs  some  specific setup on a few global variables and
	  calls the routine "outf."

	       "Outf"  scans  the  control-string, searching for a "%"
	  character.  If the character read is not a "%", it is passed
	  to  the output routine "putchar." If the character is a "%",
	  the  succeeding characters are examined and global variables
	  are initialized to indicate left or right justification, the
	  pad character, field width, precision, long or short, or the
	  conversion type. Once the conversion type is determined, the
	  appropriate parameter is passed to the routine that performs
	  the particular conversion.

	       The conversion routines create ASCII strings from their
	  input parameters. The strings are output, temporarily, to an
	  internal   buffer.   The  routine  "obstore"  performs  this
	  function.  When conversion is complete, the routine "bfrout"
	  inserts   any   necessary   padding	for   left   or  right
	  justification  and  outputs  the  entire converted field via
	  "putchar."

	       "Outf"  continues  to scan the control-string until the
	  entire control-string has been searched.





		     ┌──────────────────────────────────┐
		     │ File Name: ██	 c1.txt     ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## CPYRIGHT.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════════╗
║									      ║
║									      ║
║	       Copyright 1984 by ABComputing. ALL RIGHTS RESERVED	      ║
║									      ║
║									      ║
╚═════════════════════════════════════════════════════════════════════════════╝


	       PC Firing Line/PC Underground, or portions thereof, are
	  not  to  be  sold  or used in a product for sale without the
	  written  consent  of ABComputing. The only exception is that
	  small excerpts may be used for critical review.

	       Copies may be made for non-profit use.

	       If  clarification  is  required contact ABComputing, at
	  P.O.	Box  5503,  North  Hollywood,  CA 91616-5503. Or phone
	  (818) 509-9002.

		 Associations  that aid the handicapped are encouraged
	  to  contact  us  if  our  material,  in  any form, can be of
	  value.

┌──────────────────────────────────┐
│ DisKclaimer			   │
└──────────────────────────────────┘

	       We   cannot   guarantee	the  accuracy  of,  or	assume
	  responsibility  for,	information  on a diskette. All source
	  code and text is used at your own risk.




		     ┌──────────────────────────────────┐
		     │ File Name: ██  cpyright.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## DOS1.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║			    PC DOS and Firmware 			      ║
║									      ║
║				    by					      ║
║									      ║
║				Don Buresh				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       This column treats the IBM PC Disk Operating System (PC
	  DOS  )  and  firmware. I will discuss the technical features
	  (and undocumented bugs) in PC DOS using the PC DOS manual as
	  our functional specification.

	       I  would like to thank Bill Salkin, the editor of PCFL,
	  for  permitting  me  to  write  this column ( EDITOR'S NOTE:
	  Actually, I couldn't stop him.)

	       With  each  article appearing in PCFL I will attempt to
	  provide  coding  examples  that  illustrate the topic. These
	  examples  are  the  functional  equivalents  of  the	PC DOS
	  commands.  They  will  be  distributed to PC user groups and
	  electronic   bulletin   boards   across  the	country  on  a
	  FREEWARE(tm)	 basis.  Ten  years  in  data  processing  has
	  convinced  me  that  there  are  relatively  few good coding
	  examples   in   the  public  domain.	I  intend  to  provide
	  structured assembly language code for the benefit of all.

	       The schedule given below is tentative but indicates the
	  direction of this column.

┌──────────────────────────────────┐
│ Second Article		   │
└──────────────────────────────────┘

	       My  next  article  is  concerned with three topics. The
	  first  topic is a summary of the birth and growth of PC DOS.
	  The  second  is  a  review of the commands of PC DOS and how
	  they	have  grown  in  function since their introduction two
	  years  ago.  Third, we investigate IBMBIO.COM (or its MS-DOS
	  equivalent   IO.SYS)	 and   COMMAND.COM,  describing  their
	  intimate  relationship  to IBMDOS.COM (Did you know that IBM
	  wrote  IBMBIO.COM  and COMMAND.COM and that Microsoft, Inc.,
	  is only responsible for DOS?)

┌──────────────────────────────────┐
│ Third Article 		   │
└──────────────────────────────────┘

	       In  the third article, we examine the PC DOS interrupts
	  listed  in Appendix A of the DOS manual. The Program Segment
	  Prefix  and  the File Control Blocks (FCB) created by PC DOS
	  when	executing  a  .COM  or	.EXE  file  are  discussed. In
	  particular, we learn how assembly language programs can gain
	  access  to  the  command line. Third, we consider how PC DOS
	  creates  and	maintains the disk directory file and the File
	  Allocation Table (FAT) of a disk.

┌──────────────────────────────────┐
│ Fourth Article		   │
└──────────────────────────────────┘

	       The  fourth  article concentrates on the PC DOS utility
	  DISKCOPY.  This  utility  has  the ability to access all the
	  available  memory  of  your  IBM  Personal Computer. This is
	  extremely important because the micro code of the Intel 8088
	  processor  chip  divides memory into 64K segments ( areas ).
	  An assembly language program demonstrating how to access all
	  memory in your system (subject to the constraint that you do
	  not  write  over Video RAM ) will be presented. The assembly
	  language program FREECOPY, provided on a FREEWARE(tm) basis,
	  will further illustrate the concept.

┌──────────────────────────────────┐
│ Fifth Article 		   │
└──────────────────────────────────┘

	       The   fifth  article  is  centered  around  the	FORMAT
	  utility.  I  would  like  to	develop a program that formats
	  either  a  diskette  or  a  hard  disk,  but	may  settle on
	  formatting  a  diskette only. In the process we will analyze
	  the  implications  of  writing  the  bit  pattern  0F6H to a
	  diskette.(Did you know that this bit pattern does not stress
	  a  diskette so that a defective formatted diskette will slip
	  through  FORMAT.COM? What is the best bit pattern???? TRS-80
	  users know that 6DB6H is the most stressful bit pattern that
	  can be written on a diskette.) I intend to write the program
	  FREEFRMT,  serving  the  same  functions as FORMAT, but also
	  writing  a 6DB6H bit pattern on a diskette. FREEFRMT will be
	  offered on a FREEWARE(tm) basis.

	       After  the  fifth article it may be an appropriate time
	  to  discuss  DISKCOMP  and  MODE. The interesting feature of
	  DISKCOMP  is	that the NEC 765 (or the Intel 8272 for owners
	  of  the older versions of the IBM PC) floppy disk controller
	  chip	can  be  programmed  to  SCAN  the  contents of memory
	  against  the	bit  patterns  on  a  diskette	indicating any
	  differences.	This  program  is  straightforward  and a real
	  gem.

	       The  program  FREEMODE  demonstrates  how  to  parse  a
	  complicated  command	line and redirect the parallel printer
	  interrupt  (INT  17H)  to  a	serial	line  (INT  14H).  The
	  implications	to  the  operating system, in particular, Ctrl
	  PrtSc or INT 05H of the ROM, are discussed.

┌──────────────────────────────────┐
│ Change of Direction		   │
└──────────────────────────────────┘

	       We  could  continue to rewrite the various functions of
	  PC  DOS,  but  it  would  be	more  useful to re-investigate
	  IBMDOS.COM,	IBMBIO.COM,  and  COMMAND.COM  and  provide  a
	  thorough analysis of the relationships among these programs.
	  They form a chain directly to the firmware.

	       Before  discussing the firmware in the ROM, the subject
	  of  device  drivers and how they can be used with PC DOS 2.0
	  and  2.1  is	explored.  I am going to write a sample device
	  driver  and  invite  you  to submit assembly language device
	  drivers  for public examination. Please place your source in
	  the public domain so that we can all learn from it.

┌──────────────────────────────────┐
│ Sixth Article 		   │
└──────────────────────────────────┘

	       We  are	finally  prepared  to discuss the firmware. My
	  favorite ROM interrupt is the video interrupt or INT 10H ( I
	  have	done  considerable  work  with	the  display driver ).
	  Topics  to  be discussed are 1) why the IBM PC INT 10H is so
	  slow;  2)  how  to  scroll  up, down, and sideways; 3)how to
	  create graphic characters; etc.

┌──────────────────────────────────┐
│ Seventh Article		   │
└──────────────────────────────────┘

	       In  this  article we interrupt drive the RS-232-C ports
	  so  a  program can collect data over the serial port while a
	  concurrent  process  is  executing  in  another  part of the
	  program.  In the process, we redirect INTerrupts 09H and 0CH
	  so   characters  can	be  sent  and  received  concurrently.
	  Modified  versions of these two interrupts, and INT 14H, are
	  provided.

┌──────────────────────────────────┐
│ Eighth Article		   │
└──────────────────────────────────┘

	       This article concentrates on the disk driver interrupt,
	  otherwise known as INT 13H. The three (3) chips that must be
	  programmed  for  INT	13H  are the Intel 8237 Dynamic Memory
	  Access  (DMA)  chip,	the Intel 8259 hardware interrupt chip
	  and  the NEC 765 (or Intel 8272). INT 13H is one of the most
	  powerful  and  little  understood  software  interrupts.  We
	  demonstrate how companies use this interrupt to copy protect
	  their  programs.  The  information  given in this article is
	  published  in  the Intel Data Catalog which is sold over the
	  counter.  Companies  use  the  information contained in this
	  book	 to   create   proprietary   copy-protection  schemes.
	  Actually,  software  companies  are  merely  specifying  the
	  parameters  to these three chips. As an example, I will show
	  how  to format a diskette with odd sector sizes, such as 189
	  bytes per sector.

┌──────────────────────────────────┐
│ Ninth & Tenth articles	   │
└──────────────────────────────────┘

	       The next two articles consider the remaining interrupts
	  in  the  PC firmware and show how to use them effectively in
	  programs.   Use   of	 INTerrupts   1BH   through   1FH  are
	  demonstrated.   (Interrupt  1B  is  used  for  "Ctrl  Break"
	  processing;  1C  points  to code executed with every tick of
	  the  clock;  1D is used for video initialization; 1E is used
	  to   adjust	the   disk  parameter  table;  and  1F	offers
	  programmers	the   opportunity  to  create  unique  graphic
	  characters.)

┌──────────────────────────────────┐
│ Eleventh Article		   │
└──────────────────────────────────┘

	       With  these  tasks  behind  us, we return to PC DOS and
	  explain  the	file-handling  interrupts. The reason for this
	  change  in  direction is that by this time I hope to release
	  (in the public domain) an assembly language terminal program
	  with	the  XMODEM  file-transfer  protocol.  I also want the
	  program to contain a terminal routine with an ANSI parser as
	  well	as  an	interrupt-driven  conversational routine. This
	  program   demonstrates  how  to  use	the  PC  DOS  and  ROM
	  interrupts in a significant manner.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       In closing, I invite all of my readers to suggest other
	  topics to cover in this column.

	       You are further encouraged to send me assembly language
	  coding examples to discuss, and then be placed in the public
	  domain.  Please  do not send proprietary code which you have
	  written  as an employee of a company. I will neither release
	  nor discuss proprietary code!

	       I   hope   your	interest  has  been  whetted  by  this
	  introductory article. Good programming!!!!




	  *XENIX(tm) is a trademark of Microsoft, Inc.
	 **FREEWARE(tm) is a trademark of Headlands Press, Inc.





		     ┌──────────────────────────────────┐
		     │ File Name:    ██   dos1.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## DOS2.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║		       A Bug in the DOS 2.0 Program Loader		      ║
║									      ║
║				     by 				      ║
║									      ║
║				Richard Levaro				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       One  of	the  most  powerful features of DOS 2.0 is the
	  ability to access the program loader via a DOS function call
	  (4B).  Using the DOS loader is relatively easy from Assembly
	  Language,  but  is  more difficult from high level languages
	  like	Pascal	and C. Some of the newer versions of C contain
	  function  calls which make it easy to implement DOS function
	  calls,  and  there  are utility packages for Pascal and C on
	  the  market  which  can  do  this  as  well.	Moreover,  the
	  "infamous"  SHELL  command  from  BASIC  uses the DOS loader
	  too.

┌──────────────────────────────────┐
│ Unmasking the Demon		   │
└──────────────────────────────────┘

	       Unfortunately, the 2.0 version of the loader has a bug.
	  Specifically,  DOS  assumes that the current value of the DS
	  register   points   to  the  Program	Segment  Prefix.  This
	  assumption is correct for COM files, and for some EXE files,
	  but  is  never  true	for Pascal or C EXE files. Because DOS
	  uses	the  reserved area in the Program Segment Prefix for a
	  scratch  area,  the  net  result is that part of the program
	  data	segment  is  overwritten. In a C program, this problem
	  can  be  avoided by reserving low memory in the data segment
	  (alter  the  initiator  program  whose source is provided in
	  most	C compilers), but it is not possible in Pascal because
	  low memory is used by the heap.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       DOS  2.0  can  be  patched  so  that DOS saves the data
	  segment  and	sets  the  DS register to point to the correct
	  area.   To  effect  this  correction,  use  the  batch  file
	  patch2.bat  (on  this  diskette ) to patch COMMAND.COM. With
	  the patched version of COMMAND.COM, the BASICA SHELL command
	  will perform correctly. This bug has been fixed in DOS 2.1.





		     ┌──────────────────────────────────┐
		     │ File Name: ██	  dos2.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## DOS3.TXT

{% raw %}
```
Copyright 1984 by Dan Rollins
╔═════════════════════════════════════════════════════════════════════════════╗
║			   The Interrupt Phone Book			      ║
║									      ║
║				      by				      ║
║									      ║
║				  Dan Rollins				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


	  EDITOR'S  NOTE:  Due  to  diskette  space  limitations  this
	  article  has been abridged. The remainder will appear in the
	  next issue of PCFL.


┌───────────────────────────────┬─────────────────────────────────────────────┐
│	    Interrupt		│					      │
├──────┬─────────┬──────────────┤		NAME/Description	      │
│ Type │ Address │ Subfunctions │					      │
├──────┴─────────┴──────────────┼─────────────────────────────────────────────┤
│				│					      │
│  0	  0-3	       none	│ DIVIDE_BY_0/Automatically taken  upon div-  │
│				│ ision overflow			      │
│				│					      │
│  1	  4-7	       none	│ SINGLE_STEP/taken  after every instruction  │
│				│ when	CPU  Trap Flag indicates single-step  │
│				│ mode (bit 8 of FLAGS is 1)		      │
│				│					      │
│  2	  8-B	       none	│ NON_MASKABLE/vector not disabled via CLI    │
│				│					      │
│  3	  C-F	       none	│ BREAKPOINT/taken  when  CPU  executes  the  │
│				│ 1-byte INT 3 (0CCH)			      │
│				│					      │
│  4	  10-13        none	│ OVERFLOW/taken  when	OF=1 and INTO opcode  │
│				│ is executed				      │
│				│					      │
│  5	  14-17        none	│ PRINT_SCREEN/service	dumps  the screen to  │
│				│ the printer Invoked by KBD_INT for shifted  │
│				│ key 55 (PrtSc)			      │
│				│					      │
│  6	  18-1B        none	│ reserved				      │
│				│					      │
│  7	  1C-1F        none	│ reserved				      │
│				│					      │
│  8	  20-23        none	│ TIMER_INT/55ms  timer  "tick"  taken  18.2  │
│				│ times  per  second. Updates BIOS clock and  │
│				│ turns  off  diskette	drive motors after 2  │
│				│ seconds of inactivity.		      │
│				│					      │
│  9	  24-27        none	│ KBD_INT/taken whenever a key is pressed or  │
│				│ released. Stores  characters/scan-codes in  │
│				│ buffer  at  [0040:001E]. Updates shift-key  │
│				│ status at [0040:0017,18]		      │
│				│					      │
│  A	  28-2B        none	│ reserved				      │
│				│					      │
│  B	  2C-2F        none	│ reserved				      │
│				│					      │
│  C	  30-33        none	│ reserved				      │
│				│					      │
│  D	  34-37        none	│ reserved				      │
│				│					      │
│  E	  38-3B        none	│ DISKETTE_INT/indicates  that	a seek is in  │
│				│ progress (sets bit-8 of 40:003E)	      │
│				│					      │
│  F	  3C-3F        none	│ reserved				      │
│				│					      │
└───────────────────────────────┴─────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │							      │
├────────┼─────────┤	       VIDEO_IO/services handle video output	      │
│  10	 │  40-43  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌────┬────────────────────────────────────────────────────────────────────────┐
│ AH │				  NAME/Description			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 0  │	  SET_MODE/initializes for one of 7 text or graphics modes	      │
│    │		 AL = 0: 40x25 BW					      │
│    │		 AL = 1: 40x25 color					      │
│    │		 AL = 2: 80x25 BW					      │
│    │		 AL = 3: 80x25 color graphics				      │
│    │		 AL = 4: 320x200 color graphics 			      │
│    │		 AL = 5: 320x200 BW graphics				      │
│    │		 AL = 6: 640x200 BW graphics				      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 1  │	  SET_CUR_TYPE/set the size of the cursor or turn it off	      │
│    │		 CH=start line (bit 5=no cursor), CL=end line		      │
│    │		 CL=end line						      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 2  │	  SET_CUR_POS/re-position the cursor				      │
│    │		 DH=row (0-24)						      │
│    │		 DL=column (0-79 or 0-39)				      │
│    │		 BH=video page						      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 3  │	  READ_CUR_POS/return the position of the cursor		      │
│    │		 BH=video page						      │
│    │		 returns: DH=row, DL=clm, CX=cursor size		      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 4  │	  READ_LIGHT_PEN/fetch light pen information			      │
│    │		 returns: AH=0 light pen not triggered			      │
│    │			      AH=1: DH,DL=character row,column		      │
│    │				    CH,CL=graphics row,column		      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 5  │	  SELECT_ACTIVE_PAGE/set page number for services 6 and 7	      │
│    │		 AL = new page (0-7 for modes 0 & 1, 0-3 for modes 2 & 3)     │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 6  │	  SCROLL_PAGE_UP/scroll up or clear a display "window"                │
│    │		 AL=number of lines to scroll (0=blank entire window)	      │
│    │		 CH,CL=row,column of top left corner of window		      │
│    │		 DH,DL=row,column of lowest right corner of window	      │
│    │		 BH=video attribute for blanked lines			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 7  │	  SCROLL_PAGE_DOWN/scroll down or clear a display "window"            │
│    │		 (see sub-function 6 for parameters)			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 8  │	  READ_CHAR_ATTR/fetch a character from the cursor position	      │
│    │		 BH=page number 					      │
│    │		 returns: AL=character, AH=attribute			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 9  │	  WRITE_CHAR_ATTR/display character(s) & attribute at cursor	      │
│    │		 AL=character to display				      │
│    │		 BH=display page,					      │
│    │		 BL=attribute (graphics modes: BL=color (or 80H for XOR)      │
│    │		 CX=repeat count					      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ A  │	  WRITE_CHAR/display  character(s)  only  (use current attribute)     │
│    │		 (see sub-function 9 for parameters)			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ B  │	  SET_COLOR_PALETTE/set palette for graphics or text border	      │
│    │		 BH=0: select border (text mode)			      │
│    │		       BL=color (0-15, 16-31 for high-intensity chars.	      │
│    │		 BH=1: select graphics palette				      │
│    │		       BL=palette code (0=grn/red/yel, 1=cyan/mag/white)      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ C  │	  WRITE_DOT/plot one graphics pixel				      │
│    │		 DX=row,						      │
│    │		 CX=clm 						      │
│    │		 AL=color (bit 7 to XOR the dot)			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ D  │	  READ_DOT/determine the color of one graphics pixel		      │
│    │		 DX=row,						      │
│    │		 CX=clm,						      │
│    │		 returns: AL=color of dot				      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ E  │	  WRITE_TTY/write one character and update cursor.  Also	      │
│    │		   handles CR (0DH), beep (07H), and scrolls screen if	      │
│    │		   needed.						      │
│    │		 AL=char to write					      │
│    │		 BL=foreground if in graphics mode			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ F  │	  VIDEO_STATE/fetch the mode and size of the screen		      │
│    │		 returns: AL=mode (see sub-function 0), 		      │
│    │			  AH=size,					      │
│    │			  BH=page					      │
└────┴────────────────────────────────────────────────────────────────────────┘


┌───────────────────────────────┬─────────────────────────────────────────────┐
│	    Interrupt		│					      │
├──────┬─────────┬──────────────┤		NAME/Description	      │
│ Type │ Address │ Subfunctions │					      │
├──────┴─────────┴──────────────┼─────────────────────────────────────────────┤
│  11	 44-47	       none	│ EQUIPMENT_CHECK/fetch  a  code  describing  │
│				│ active peripherals.			      │
│				│ returns:     AX=equipment    code    bits:  │
│				│					      │
│				│	       PP-JSSS-DDVVRR-I 	      │
│				│					      │
│				│ PP  = number of printers		      │
│				│ J   = joystick			      │
│				│ SSS = serial devices (RS-232 ports)	      │
│				│ DD  = number	of disk drives (00=1, 01=2,   │
│				│	 10=3, 11=4)			      │
│				│ VV  = video  (11=BW card, 01 & 10 = color   │
│				│	 card)				      │
│				│ RR  = RAM in mother-board ( 00=16K...       │
│				│	 11=64K),			      │
│				│ I   = disk-existance	 (0=no	drives	in    │
│				│	 system)			      │
│				│					      │
│  12	 48-4B	       none	│ MEMORY_SIZE/fetch  AX=count  of contiguous  │
│				│	 1K RAM blocks			      │
└───────────────────────────────┴─────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │							      │
├────────┼─────────┤	 DISKETTE_IO/access the 5-1/4 inch diskette drives    │
│  13	 │  4C-4F  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌────┬────────────────────────────────────────────────────────────────────────┐
│ AH │				  NAME/Description			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 0  │	  RESET/reset the disk controller chip				      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 1  │	  GET_STATUS/fetch AL=status of most recent operation		      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 2  │	  READ_SECTORS/read one or more sectors from diskette		      │
│    │		 DH = head   DL = drive (0=A, 1=B, etc.)		      │
│    │		 CH = track  CL = sector (1-8 or 1-9 for DOS 2.0)	      │
│    │		 AL = sectors to read					      │
│    │		 ES:BX = address to store/fetch data			      │
│    │		 [0000:0078] = doubleword pointer to diskette parms	      │
│    │		 returns: Carry Flag = NC (0) for successful		      │
│    │			  Carry Flag = CY (1) failure			      │
│    │			  AH = disk status (error reason)		      │
│    │			   80H = timeout: disk failed to respond	      │
│    │			   40H = seek operation failure 		      │
│    │			   20H = NEC disk drive controller failed	      │
│    │			   10H = bad Cyclical Redundancy Check (CRC)	      │
│    │			   09H = attempted access across 64K boundary	      │
│    │			   08H = DMA overrun				      │
│    │			   04H = record not found			      │
│    │			   03H = write protect error			      │
│    │			   02H = sector ID error (can't find address mark)    │
│    │				01H = unknown command			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 3  │	  WRITE_SECTORS/write from memory to disk			      │
│    │	   (parameters as with sub-function 2)				      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 4  │	  VERIFY/verify that a write operation was successful		      │
│    │	   (parameters as with sub-function 2, but ES:BX not needed)	      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 5  │	  FORMAT_TRACK/write sector-ID bytes for 1 track		      │
│    │	   ES:BX points to 8 (or 9) 4-byte sector ID marks:		      │
│    │	     byte 0 = track number					      │
│    │	     byte 1 = head number					      │
│    │	     byte 2 = sector number					      │
│    │	     byte 3 = bytes in sector (0=128, 1=256, 2=512, 3=1024)	      │
└────┴────────────────────────────────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │   RS232_IO/initialize and access serial communications   │
├────────┼─────────┤   port.						      │
│  14	 │  50-53  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌────┬────────────────────────────────────────────────────────────────────────┐
│ AH │				  NAME/Description			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 0  │	  RS232_IO/initialize and access serial communications port	      │
│    │	   INIT_COM/initialize port named by DX (0 or 1)		      │
│    │	    initialization bit pattern: BBBPPSLL			      │
│    │	    BBB = baud rate:   110,150,300,600,1200,2400,4800,9600	      │
│    │	    PP	= parity:      01 = odd, 11 = even			      │
│    │	    S	= stop bits:   0 = 1, 1 = 2				      │
│    │	    LL	= word length: 10 = 7-bits, 11 = 8-bits 		      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 1  │	  SEND_CHAR/send character to comm port DX (0 or 1)		      │
│    │	   AL = character						      │
│    │	   returns: bit 7 of AH = 1 if error				      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 2  │	  AWAIT_COMM_CHAR/wait for a character from comm port DX	      │
│    │	   returns: AL = character					      │
│    │		    AH = error code (0 for no error)			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 3  │	  COMM_STATUS/fetch the status of comm port DX (0 or 1) 	      │
│    │	   returns: comm-line status in AH, modem status in AL		      │
│    │	    AH bit 7 = timeout						      │
│    │	       bit 6 = empty transmit shift register			      │
│    │	       bit 5 = empty transmit holding register			      │
│    │	       bit 4 = break detected ("long-space")                          │
│    │	       bit 3 = framing error					      │
│    │	       bit 2 = parity error					      │
│    │	       bit 1 = overrun error					      │
│    │	       bit 0 = data ready					      │
│    │	    AL bit 7 = received line signal detect			      │
│    │	       bit 6 = ring indicator					      │
│    │	       bit 5 = data set ready					      │
│    │	       bit 4 = clear to send					      │
│    │	       bit 3 = delta receive line signal detect 		      │
│    │	       bit 2 = trailing edge ring detector			      │
│    │	       bit 1 = delta data set ready				      │
│    │	       bit 0 = delta clear to send				      │
└────┴────────────────────────────────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │	       CASSETTE_IO/access cassette tape drive	      │
├────────┼─────────┤	       (NOP for IBM-XT) 			      │
│  15	 │  54-57  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌────┬────────────────────────────────────────────────────────────────────────┐
│ AH │				  NAME/Description			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 0  │	  CASS_ON/start the motor					      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 1  │	  CASS_OFF/turn the motor off					      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 2  │	  CASS_READ/read CX bytes into ES:BX buffer			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 3  │	  CASS_WRITE/write CX bytes from ES:BX buffer to tape		      │
└────┴────────────────────────────────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │							      │
├────────┼─────────┤		KBD_IO/access the keyboard buffer	      │
│  16	 │  58-5B  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌────┬────────────────────────────────────────────────────────────────────────┐
│ AH │				  NAME/Description			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 0  │	  AWAIT_CHAR/read the next character in keyboard buffer,	      │
│    │	   If no key ready, wait for one.				      │
│    │	   returns: AL = ASCII character, AH = scan-code		      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 1  │	  PREVIEW_KEY/see if key is ready				      │
│    │	   returns: ZF = ZR (1) if no key ready, else			      │
│    │		    ZF = NZ and AX=char/scan-code			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 2  │	  SHIFT_STATUS/fetch bit flags indicating shift status		      │
│    │	   returns: AL = bit codes (same as [0040:0017])		      │
│    │		   bit 7 = Insert state 				      │
│    │		   bit 6 = CapsLock state				      │
│    │		   bit 5 = NumLock state				      │
│    │		   bit 4 = ScrollLock state				      │
│    │		   bit 3 = Alternate shift (Alt key)			      │
│    │		   bit 2 = Control shift (Ctrl key)			      │
│    │		   bit 1 = Left shift (left caps-shift key)		      │
│    │		   bit 0 = Right shift (right caps-shift key)		      │
│    │	   note: other codes found at [0040:0018]			      │
│    │		   bit 7 = Insert shift (Ins key)			      │
│    │		   bit 6 = Caps shift (CapsLock key)			      │
│    │		   bit 5 = Num shift (NumLock key)			      │
│    │		   bit 4 = Scroll shift (ScrollLock key)		      │
│    │		   bit 3 = Hold state (Ctrl-NumLock is in effect)	      │
└────┴────────────────────────────────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │							      │
├────────┼─────────┤	    PRINTER_IO/access the parallel printer(s)	      │
│  17	 │  5C-5F  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌────┬────────────────────────────────────────────────────────────────────────┐
│ AH │				  NAME/Description			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 0  │	  PRINT_CHAR/send AL to printer DX (0, 1, or 2) 		      │
│    │	   returns: AH=1 for timeout error, AL=status (see below)	      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 1  │	  INIT_PRINTER/set init line low, send 0CH to printer DX	      │
│    │	   returns: status as below					      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 2  │	  PRINTER_STATUS/read status of printer DX into AH		      │
│    │	   returns: bit flags:						      │
│    │		    bit 7 = Printer is busy				      │
│    │		    bit 6 = Acknowledge line state			      │
│    │		    bit 5 = Out-of-paper line state			      │
│    │		    bit 4 = printer selected line state 		      │
│    │		    bit 3 = I/O error					      │
│    │		    bit 2 = unused					      │
│    │		    bit 1 = unused					      │
│    │		    bit 0 = Time-out error				      │
└────┴────────────────────────────────────────────────────────────────────────┘


┌───────────────────────────────┬─────────────────────────────────────────────┐
│	    Interrupt		│					      │
├──────┬─────────┬──────────────┤		NAME/Description	      │
│ Type │ Address │ Subfunctions │					      │
├──────┴─────────┴──────────────┼─────────────────────────────────────────────┤
│				│					      │
│  18	 60-63	       none	│ ROM_BASIC/execute    non-disk   BASIC   at  │
│				│ F600:0000				      │
│				│					      │
│  19	 64-67	       none	│ BOOT_STRAP/read  track  0,  sector  1 into  │
│				│ 0000:7C00,  then  transfer control to that  │
│				│ address.  If	no diskette drive available,  │
│				│ transfers to ROM-BASIC.		      │
└───────────────────────────────┴─────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │							      │
├────────┼─────────┤	     TIME_OF_DAY/access the PC internal clock	      │
│  1A	 │  68-6B  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌────┬────────────────────────────────────────────────────────────────────────┐
│ AH │				  NAME/Description			      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 0  │	  READ_CLOCK/fetch count of 55ms "ticks" since power-on               │
│    │	   returns: CX = high word of count				      │
│    │		    DX = low word of count				      │
│    │		    AL = 0 when no 24-hour overflow since power-on	      │
├────┼────────────────────────────────────────────────────────────────────────┤
│ 1  │	   SET_CLOCK/set number of 55ms in clock variable		      │
│    │	    CX = high word of timer ticks				      │
│    │	    DX = low word of timer ticks				      │
│    │	   note: the clock ticks are incremented by TIMER_INT		      │
│    │		 at about 18.2 times per second.  Therefore:		      │
│    │		 counts per second = 18      (12H)			      │
│    │		 counts per minute = 1092    (444H)			      │
│    │		 counts per hour   = 65543   (10011H)			      │
│    │		 counts per day    = 1573040 (1800B0H)			      │
└────┴────────────────────────────────────────────────────────────────────────┘


┌───────────────────────────────┬─────────────────────────────────────────────┐
│	    Interrupt		│					      │
├──────┬─────────┬──────────────┤		NAME/Description	      │
│ Type │ Address │ Subfunctions │					      │
├──────┴─────────┴──────────────┼─────────────────────────────────────────────┤
│  1B	 6C-6F	       none	│ KEYBOARD_BREAK/routine taken when KBD_INT   │
│				│ senses Ctrl-Break.			      │
│  1C	 70-73	       none	│					      │
│				│ USER_TIMER_INT/taken	 18.2	times	per   │
│				│ second;   invoked   by   the	 TIMER_INT;   │
│				│ normally vectors to dummy IRET.	      │
└───────────────────────────────┴─────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │	  VIDEO_PARMS_PTR/vector of video initialization      │
├────────┼─────────┤	  parameters.					      │
│  1D	 │  74-77  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────┐
│			      NAME/Description				      │
├─────────────────────────────────────────────────────────────────────────────┤
│	  VIDEO_PARMS_PTR/vector of video initialization parameters	      │
│									      │
│	     This doubleword address points to 3 sets of 16-bytes	      │
│	     containing data to initialize for video modes for video	      │
│	     modes 0&1 (40 clm), 2&3 (80 clm), and 4,5&6 (graphics).	      │
│	     Parm table format corresponds to the Motorola 6845 CRT	      │
│	     controller registers:					      │
│	       R0 : horiz. total (horiz. sync in characters)		      │
│	       R1 : horiz. displayed (chars per line)			      │
│	       R2 : horiz. sync position (move display left or right)	      │
│	       R3 : sync width (vert. and horiz. pulse: 4-bits each)	      │
│	       R4 : vertical total (total character lines)		      │
│	       R5 : vertical adjust (adjust for 50 or 60 Hz refresh)	      │
│	       R6 : vert. displayed (lines of chars displayed)		      │
│	       R7 : Vert. sync position (lines shifted up or down)	      │
│	       R8 : Interlace (bits 4 and 5) and skew (bits 6 and 7)	      │
│	       R9 : Max scan line addr (scan lines per char row)	      │
│	       R10: Cursor start (starting scan line of cursor) 	      │
│	       R11: Cursor stop (ending scan line of cursor)		      │
│	       R12: vid-mem start address high byte (6-bits)		      │
│	       R13: vid-mem start address low byte (8-bits)		      │
│	       R14: cursor address high byte (6-bits)			      │
│	       R15: cursor address low byte (8-bits)			      │
└─────────────────────────────────────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │							      │
├────────┼─────────┤  DISKETTE_PARMS_PTR/vector of diskette controller parms  │
│  1E	 │  78-7B  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────┐
│			      NAME/Description				      │
├─────────────────────────────────────────────────────────────────────────────┤
│	  DISKETTE_PARMS_PTR/vector of diskette controller parms:	      │
│									      │
│	     This doubleword address points to data that is used	      │
│	     by DISKETTE_IO.  11-byte table format:			      │
│	       byte 0 : 4-bit step rate, 4-bit head unload time 	      │
│	       byte 1 : 7-bit head load time, 1-bit DMA flag		      │
│	       byte 2 : 55ms counts--delay till motor off		      │
│	       byte 3 : sector size (0=128, 1=256, 2=512, 3=1024)	      │
│	       byte 4 : last sector on track				      │
│	       byte 5 : gap between sectors				      │
│	       byte 6 : data length for DMA transfers			      │
│	       byte 7 : gap length for format				      │
│	       byte 8 : fill byte for format				      │
│	       byte 9 : head settle time (in milliseconds)		      │
│	       byte 10: motor start time (in 1/8 second intervals)	      │
└─────────────────────────────────────────────────────────────────────────────┘


┌────────┬─────────┬──────────────────────────────────────────────────────────┐
│  Type  │ Address │							      │
├────────┼─────────┤  DISKETTE_PARMS_PTR/vector of diskette controller parms  │
│  1F	 │  7C-7F  │							      │
└────────┴─────────┴──────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────────────────┐
│			      NAME/Description				      │
├─────────────────────────────────────────────────────────────────────────────┤
│	  GRAPHICS_TBL_PTR/vector of data used by VIDEO_IO to		      │
│	   display characters above ASCII 127 in graphics modes.	      │
│	   Doubleword address points to 1K table composed of 128	      │
│	   8-byte character definition bit-patterns.  First byte	      │
│	   of each entry is top row, last byte is bottom row.		      │
└─────────────────────────────────────────────────────────────────────────────┘





		     ┌──────────────────────────────────┐
		     │ File Name:  ██	  dos3.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## FILES159.TXT

{% raw %}
```
Disk No:  159
Program Title:  PC FIRING LINE
PC-SIG version: 1.1

This is the first issue of the PC FIRING LINE NEWSLETTER.  It has beena
positioned as the underground newspaper for the IBM user.  You will be
presented with the untold tales and in-depth programming aids.  Some of
the articles are about ADA, Assembly routines, and items not written
about by IBM.  It also contains many sample program listings with
accompanying  documentation.

Usage:  Reference.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $12.00

File Descriptions:

0        BAT  Batch file.
PATCH2   BAT  Batch file.
8087     REV  Information file.
ADA1CMP  REV  Information file.
BIGDEAL  ASM  Assembly source code.
GRABBAG  ASM  Assembly source code.
COLORFUL EXE  Sub-program.
DEBUG    PAT  Patch for DEBUG.
GRABBAG  EXE  Sub-program.
LIST1    ADA  Test the ADS compiler in ADA.
LIST1    ASM  Test the ADS compiler in Assembley.
LIST1    C    Test the ADS compiler in C.
LIST1    PAS  Test the ADS compiler in Pascal.
PCFL     EXE  Main Program.
PRETTY1  COM  Program embellisher
TXT      ADS  Advertisments
WRITERS  GDE  Text file.
???????? TXT  Text file (20 files).

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## FORT1.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║		       Common Tangents to Two Ellipses			      ║
║									      ║
║				      by				      ║
║									      ║
║				  Bill Salkin				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       Visualize  two  ellipses  as  displayed	on  a graphics
	  screen.  There  are  many lines tangent to both ellipses. To
	  specify  which  tangent  line  is  desired, each  ellipse is
	  selected with a light pen.

	       The  point  where  the  light  pen "touches" an ellipse
	  indicates  the side to which the tangent line will be drawn.
	  When	both  ellipses	have been light pen selected, a unique
	  tangent  line  can  be  determined, and finally drawn on the
	  graphics screen.

	       This  article  outlines	a  method  for	finding common
	  tangents to two ellipses.

┌──────────────────────────────────┐
│ Terminology			   │
└──────────────────────────────────┘



     ELLIPSE1			  ELLIPSE2
	     .*°*.			  .*°*.
	    *	  *			 *     *
	   *	   *	 P = (E,F)	*	*
	   *  P1 ─ * ──────────────── *─ P2	*
	   *   │   *			*   │	*
	    *    *			 *    *
	     °*.*°			  °*.*°
    Q1(X1,Y1)	───────	  Q2(X2,Y2)  ───────
		 Q1'                          Q2'



		      Figure ( it-out ) #1



	  Description of nomenclature used in Figure 1:



				┌──────────────────┬───────────────────┐
				│     ELLIPSE1	   │	 ELLIPSE2      │
┌───────────────────────────────┼──────────────────┼───────────────────┤
│ center			│    P1(XC1,YC1)   │	P2(XC2,YC2)    │
│ radius vector from  center	│		   │		       │
│ intersects ellipse at:	│    Q1(X1,Y1)	   │	Q2(X2,Y2)      │
│ tangent vector at QI		│    Q1'           │    Q2'            │
├───────────────────────────────┴──────────────────┴───────────────────┤
│ The vector P = (E,F) joins the centers of the ellipses.	       │
└──────────────────────────────────────────────────────────────────────┘

	       All  data  associated with ELLIPSEI ( I = 1,2 ) has the
	  number "I" appended.

┌──────────────────────────────────┐
│ The Method			   │
└──────────────────────────────────┘

	       Consider  a  line  tangent  to ELLIPSE1 and ELLIPSE2 at
	  points  Q1  and Q2, respectively. This line must be parallel
	  to  the  tangent  vectors  at Q1 and Q2. As the vector cross
	  product  of  parallel  vectors  is  0, this condition can be
	  formulated mathematically as:


( Q2 - Q1 ) X Q1'  = 0  and  ( Q2 - Q1 ) X Q2'  = 0                (1)


	       Q1 is a point on ELLIPSE1. Q1' is the derivative of the
	  parametric equation of ELLIPSE1, evaluated at point Q1.

	       (  Q2  -  Q1) is a vector joining the perimeters of the
	  ellipses.  It  acts as an approximation to the tangent line.
	  If the above equations are satisfied, ( Q2 - Q1 ) is tangent
	  to both ellipses.

	       Two  simultaneous  non-linear equations are represented
	  by  (1).  The  method  used  to solve these equations is the
	  "3-dimensional"  Newton  method.  This  method  is discussed
	  next.

┌──────────────────────────────────┐
│ 3-d Newton Method		   │
└──────────────────────────────────┘

	       This is an iterative method for solving the equations

f(x,y) = 0, and  g(x,y) = 0


	       An  initial  point  (  x(0),  y(0)  )  is  selected and
	  successive  points  (hopefully converging to an answer)  are
	  found from the sequences:


x(n)  = x(n-1)	 +  h(n-1)

y(n)  = y(n-1)	 +  k(n-1)


	  where h and k satisfy


 f ( x(n-1), y(n-1)) h(n-1)
  x

	     +	f ( x(n-1), y(n-1)) k(n-1)	= - f( x(n-1), y(n-1))
		 y

 and


 g ( x(n-1), y(n-1)) h(n-1)
  x

	     +	g ( x(n-1), y(n-1)) k(n-1)	= - g( x(n-1), y(n-1))
		 y



	  f  denotes the partial derivative of f with respect to x.
	   x


	       These   equations   are	 derived   by	replacing  the
	  multivariable Taylor series by its linear part.

┌──────────────────────────────────┐
│ Transformation 1		   │
└──────────────────────────────────┘

	       The  equations  in  (1) must be transformed into a form
	  that is suitable for Newton's method.

	       From vector algebra, Q1 and Q2 can be represented as:


Q1 = P1 +iX1 + jY1,	  Q2 = P2 + iX2 + jY2


	  where  "i"  and  "j" are the orthogonal unit vectors forming
	  the  standard basis for the complex plane. P1 and P2 are the
	  centers of the ellipses.

	       Substituting  these  expressions  in (1), and using P =
	  (E,F) = Ei + Fj gives


[ ( E + X2 - X1 )i + ( F + Y2 - Y1)j ]	X  [ IX1' + jY1'] = 0

[ ( E + X2 - X1 )i + ( F + Y2 - Y1)j ]	X  [ IX2' + jY2'] = 0


	       Simplifying these equations gives


[ ( E + X2 - X1 ) Y1'  - ( F + Y2 - Y1) X1' ]  = 0
								    (2)
[ ( E + X2 - X1 ) Y2'  - ( F + Y2 - Y1) X2' ]  = 0

┌──────────────────────────────────┐
│ Transformation 2		   │
└──────────────────────────────────┘

	       The  parametric	equation  of  an  ellipse, with origin
	  (XC,YC), semimajor axis "a", semiminor axis "b", and rotated
	  @ radians ( with respect to the positive x-axis ) is:


X = XC +  ( a cos@ ) cost -  ( b sin@ ) sint
								    (3)
Y = YC +  ( b cos@ ) sint +  ( a sin@ ) cost


	  where 0 <= t <= Two Pi radians

┌──────────────────────────────────┐
│ The Grand Finale		   │
└──────────────────────────────────┘

	       Substitution  of  the  equations (3) into (2) result in
	  two  equations  in  two unknowns. This is the form needed by
	  Newton's method.

	       The  equations resulting from this substitution are not
	  given  in  this article! The reader is encouraged to perform
	  the algebra and determine them.

	       I  have applied	Newton's method to these equations and
	  can report that the method has never failed in my experience
	  ( undoubtedly owing to the infinite differentiability of the
	  ellipse parametric equations ).

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       It  is  difficult  to  present mathematical symbols and
	  diagrams on the IBM PC.

	       The  tangent-line  geometry  in	this  article  can  be
	  "massaged"  to  address  other  geometrical problems such as
	  finding  the	projection  of	a  point to an ellipse, or the
	  intersection of two splines.





		     ┌──────────────────────────────────┐
		     │ File Name: ██	 fort1.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No: 159  PC Firing Line  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To start the disk, type:                                              ║
║                                                                         ║
║             PCFL (press enter)                                          ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GRABBAG.ASM

{% raw %}
```
;COPYRIGHT 1984 BY ABComputing
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 "GRABBAG"  CONTAINS  AN UNANNOUNCED PROGRAM; IT CAN BE IN ANY   │
;    │	 LANGUAGE, AND ON ANY SUBJECT.					 │
;    │									 │
;    │	 $25 AND LAURELS IF YOUR PROGRAM IS SELECTED!			 │
;    │									 │
;    │	 THIS GRABBAG WAS WRITTEN BY BILL SALKIN  1/5/83		 │
;    │									 │
;    │	 THE EXECUTABLE VERSION OF THIS CODE IS IN GRABBAG.EXE ON THIS	 │
;    │	 DISKETTE.							 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS GRABBAG ALLOWS USERS OF A COLOR MONITOR TO CHANGE EITHER	 │
;    │	 THE FOREGROUND OR BACKGROUND COLOR OF THE DISPLAY BY PRESSING	 │
;    │	 THE F1 OR F2 FUNCTION KEYS, RESPECTIVELY. THE BORDER COLOR IS	 │
;    │	 SET TO EQUAL THE BACKGROUND COLOR.				 │
;    │									 │
;    │	 F10 IS PRESSED TO EXIT THIS PROGRAM AND RETURN TO DOS. 	 │
;    │									 │
;    │	 THE  FOREGROUND  AND  BACKGROUND  COLORS  ESTABLISHED IN THIS	 │
;    │	 ROUTINE  ARE NOT RESET UPON EXIT TO DOS. THIS ALLOWS THE USER	 │
;    │	 TO  DISCOVER  PLEASANT  COLOR COMBINATIONS AND USE THEM UNDER	 │
;    │	 DOS.								 │
;    │									 │
;    │	 THE ROUTINE COLORFUL.EXE, ON  THIS  DISKETTE,	 FEATURES  ONE	 │
;    │	 ADDITIONAL  OPTION: PRESSING F3 ALLOWS THE USER TO ADJUST THE	 │
;    │	 BORDER  COLOR. (  THAT ROUTINE WAS AN AFTERTHOUGHT - DESIGNED	 │
;    │	 FOR THOSE  NOT USING AN  ASSEMBLER  BUT  WANTING  FULL  COLOR	 │
;    │	 CONTROL.)							 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS  GRABBAG ACCESSES THE HARDWARE DIRECTLY!			 │
;    │									 │
;    │	 DESIGN  DOCUMENTATION	EXPLAINING THIS GRABBAG WILL APPEAR IN	 │
;    │	 THE NEXT ISSUE OF PCFL.					 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;		     ┌──────────────────────────────────┐
;		     │ File Name:  ██  grabbag.txt  ██	│
;		     └──────────────────────────────────┘
;
;------------------------------------------------------------------------------
F1	 EQU   59		   ;SCAN CODE FOR F1 KEY
F2	 EQU   60		   ;SCAN CODE FOR F2 KEY
F10	 EQU   68		   ;SCAN CODE FOR F10 KEY

NO	 EQU   0
YES	 EQU   1

;------------------------------------------------------------------------------
DATA	 SEGMENT PARA

    ATTRIBUTE	    DB	7	   ;COLOR ATTRIBUTE
    BACKGROUND	    DB	0	   ;BACKGROUND COLOR OF SCREEN
    COLOR_CARD	    DB	NO	   ;= "YES" IF COLOR ADAPTER FOUND; ELSE "NO"
    CRT_MODE_SET    DB	0	   ;NEEDED TO TURN CRT BEAM ON
    DISPLAY_ADDRESS DW	0B000H	   ;HOLDS ADDRESS OF DISPLAY RAM
    EXIT	    DB	NO	   ;EXIT = "YES"  MEANS RETURN TO DOS
    EXT_CODE	    DB	NO	   ;= "YES"  IF EXTENDED CODE KEY PRESSED
				   ;= "NO" IF NON-EXTENDED CODE KEY PRESSED
    FOREGROUND	    DB	0	   ;FOREGROUND COLOR OF SCREEN
    KEYIN	    DB	0	   ;HOLDS SCAN CODE OF KEY PRESSED


;--THE PANEL "MSG" ID DISPLAYED ON THE SCREEN.

    MSG 	    DB	'Grabbag #1. Copyright 1984 by ABComputing'
		    DB	39 DUP(' ')   ;LAZY MAN'S APPROACH TO MOVE
		    DB	80 DUP(' ')   ; THE CURSOR.

		    DB	'     Press F1 to modify the foreground color'
		    DB	36 DUP(' ')   ;LAZY MAN'S APPROACH TO MOVE CURSOR


		    DB	'     Press F2 to modify the background color'
		    DB	36 DUP(' ')   ;LAZY MAN'S APPROACH TO MOVE CURSOR

		    DB	'     Press F10 to exit this program','$'

;--MESSAGE DISPLAYED IF MONOCHROME CARD FOUND.


    FARWELL	    DB	7	      ;BEEP TO ALERT USER
		    DB	'This program needs the color adapter. Sorry!','$'


DATA	 ENDS
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
STACK	 SEGMENT PARA  STACK  'STACK'

	 DB    40H  DUP('STCK')

STACK	 ENDS
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
CODE	 SEGMENT PARA
ASSUME	 CS:CODE, DS:DATA, SS:STACK, ES:NOTHING


;--STANDARD LINKAGE TO DOS

MAIN	 PROC  FAR	       ;STANDARD LINKAGE TO DOS
	 PUSH  DS	       ; DO
	 MOV   AX,0	       ;	  NOT
	 PUSH  AX	       ;		    ALTER!
	 MOV   AX,DATA
	 MOV   DS,AX


;--ROUTINE   INIT  CHECKS  WHICH  DISPLAY  ADAPTER  IS	INSTALLED.  IF
;  MONOCHROME,	THEN COLOR_CARD IS SET = NO. IF COLOR_CARD = YES, THEN
;  DISPLAY_ADDRESS  IS	SET  =	0B800H, AND THE SCREEN MODE IS SET FOR
;  80x25 ALPHANUMERIC COLOR MODE ( NOTE: SETTING THE SCREEN MODE AUTO-
;  MATICALLY CLEARS THE SCREEN AND CAUSES THE CURSOR TO BE DISPLAYED.)

	 CALL  INIT
	 CMP   COLOR_CARD,YES  ;IF COLOR_CARD = YES, THEN CONTINUE
	 JE    MAI1	       ; CONTINUE PROGRAM

	 CALL  GOOD_BYE        ;DISPLAY FARWELL MESSAGE
	 JMP   MAI3	       ; CLEAR SCREEN AND RETURN TO DOS


;--CLEAR THE SCREEN


MAI1:	 CALL  CLEAR


;--ROUTINE  CUR_OFF  TURNS  THE CURSOR DISPLAY OFF. IT IS CALLED AFTER
;  ROUTINE INIT, AS SETTING THE MODE TURNS THE CURSOR DISPLAY ON.


	 CALL  CUR_OFF


;--DISPLAY  THE  PANEL	"MSG"  (  Press  F1  to  modify the foreground
;  color... )


	 CALL  DISPLAY


;--GET_KEY  RETURNS THE SCAN CODE OF THE PRESSED KEY IN KEYIN. ROUTINE
;  KEYS  CALLS	THE SUBROUTINES THAT CHANGE THE FOREGROUND,BACKGROUND,
;  AND BORDER COLORS.


MAI2:	 CALL  GET_KEY

	 CALL  KEYS	       ;HANDLE F1, F2, F10 KEY PRESSES


	 CALL  CLEAR	       ;SET BACKGROUND OF SCREEN TO DESIRED
			       ; COLOR


	 CALL  DISPLAY	       ;DISPLAYS THE PANEL "MSG"


	 ;--PRESSING  F10  IN  KEYS  SETS  EXIT  = YES INDICATING THAT
	 ;  PROGRAM TERMINATION IS WANTED.

	 CMP   EXIT,YES

	 JNE   MAI2	       ;IF EXIT = NO, THEN WAIT FOR NEXT KEY


;--RETURN  TO  DOS.  PURPOSELY	DO NOT RESET COLOR ATTRIBUTE. MAINTAIN
;  COLORS USED FOR DOS.

	 CALL  CUR_ON

	 CALL  CLEAR	       ;CLEAR THE SCREEN

MAI3:	 RET
;------------------------------------------------------------------------------
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │		 FROM THIS PORTION ONWARD ALL ROUTINES ARE		 │
;    │		 LISTED ALPHABETICALLY BY NAME. 			 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------------
;ROUTINE BACK_GROUND
;
;   BRIEF:
;	 INCREMENTS  `BACKGROUND'  BY ONE. IF BACKGROUND IS NOT IN THE
;	 RANGE 0 <= BACKGROUND <= 7 , THEN BACKGROUND IS SET = 0.
;
;   INPUT:
;	 VALUE OF BACKGROUND
;
;   OUTPUT:
;	 ATTRIBUTE CORRESPONDING TO INCREMENTED VALUE OF BACKGROUND
;------------------------------------------------------------------------------

BACK_GROUND PROC  NEAR

	 INC   BACKGROUND
	 CMP   BACKGROUND,7    ;7 IS MAX ALLOWED BACKGROUND COLOR
	 JBE   BAC1

	 ;--BACKGROUND IS > 7. RESET IT TO 0.

	 MOV   BACKGROUND,0

BAC1:	 CALL  SET_COLOR       ;DETERMINES "ATTRIBUTE"  VALUE FOR OLD
			       ; FOREGROUND NEW BACKGROUND SETTINGS.

	 RET

BACK_GROUND ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE CLEAR
;
;   BRIEF:
;	 CLEARS THE SCREEN
;
;   INPUT:
;	 ATTRIBUTE
;------------------------------------------------------------------------------

CLEAR	 PROC  NEAR

	 MOV   AH,6	       ;REQUEST SCROLL SCREEN SERVICE
	 MOV   AL,0	       ;SCROLL ENTIRE SCREEN
	 MOV   BH,ATTRIBUTE    ;BACKGROUND ATTRIBUTE
	 MOV   CX,0000H        ;UPPER  LEFT CORNER OF SCREEN (0,0 )
	 MOV   DX,184FH        ;LOWER RIGHT CORNER OF ( 24,79 )
	 INT   10H	       ;INVOKE SCROLL SCREEN SERVICE

	 RET

CLEAR	 ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE CUR_OFF
;
;   BRIEF:
;	 TURNS THE CURSOR DISPLAY OFF
;
;------------------------------------------------------------------------------
CUR_OFF  PROC  NEAR

	 PUSH  AX
	 PUSH  CX

;--SETTING BIT 5 TO 0 TURNS IN CH TURNS THE CURSOR OFF.

	 MOV   CH,00100000B    ;SET BIT 5 IN CURSOR START REGISTER TO 1

	 MOV   AH,1	       ;REQUEST "NON DISPLAY" SERVICE
	 INT   10H	       ;INVOKE "NON DISPLAY" SERVICE

	 POP   CX
	 POP   AX

	 RET

CUR_OFF  ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE CUR_ON
;
;   BRIEF:
;	 TURNS THE CURSOR DISPLAY ON FOR COLOR MONITORS
;
;------------------------------------------------------------------------------
CUR_ON	 PROC  NEAR

	 PUSH  AX
	 PUSH  CX

	 MOV   AH,1	       ;REQUEST "SET CURSOR TYPE" SERVICE
	 MOV   CL,7	       ;END SCAN LINE = 7 DECIMAL FOR COLOR
	 MOV   CH,6	       ;START SCAN LINE = 6 DECIMAL COLOR
	 INT   10H	       ;INVOKE "SET CURSOR TYPE" SERVICE

	 POP   CX
	 POP   AX

	 RET

CUR_ON	 ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE DISPLAY
;
;   BRIEF:
;	 DISPLAYS  THE	PANEL  POINTED TO BY MSG ( `Press F1 to modify
;	 foreground color...Press F2....' ).
;
;   INPUT:
;	 ATTRIBUTE, DISPLAY_ADDRESS
;
;   OUTPUT:
;	 THE  PANEL  POINTED TO BY MSG IS DISPLAYED WITH THE FOREGROUND
;	 AND BACKGROUND GIVEN IN ATTRIBUTE.
;------------------------------------------------------------------------------

DISPLAY  PROC  NEAR

	 PUSH  AX
	 PUSH  BX
	 PUSH  CX
	 PUSH  DI
	 PUSH  ES
	 PUSH  SI

;--SET	UP  ES,  DI, SI, AND AL FOR STOSB OPERATION TO MOVE "MSG" INTO
;  THE VIDEO RAM AREA.

	 ;--MAKE ES:DI ->DISPLAY_ADDRESS

	 MOV   BX,DISPLAY_ADDRESS
	 MOV   ES,BX

	 MOV   DI,0

	 ;--SET SI, SO DS:SI -> MSG

	 MOV   SI,OFFSET MSG


	 MOV   AL,ATTRIBUTE


	 ;--SET  DIRECTION  FLAG  TO  AUTO  INCREMENT  SI,DI IN STRING
	 ;  OPERATIONS

	 CLD


;--TURN  THE  CRT  BEAM  OFF  DURING  VERTICAL RETRACE PERIOD TO AVOID
;  "SNOW" ON COLOR MONITOR.

	 CALL  VIDEO_OFF


;--MOVE `MSG' INTO VIDEO RAM.

DIS1:	 MOVSB		       ;MOVES DS:SI -> ES:DI ( MSG  TO SCREEN)
			       ; INCREMENTS SI AND DI BY ONE

	 STOSB		       ;MOVES AL ( ATTRIBUTE BYTE ) TO ES:DI
			       ; AND INCREMENTS DI ONLY

	 CMP   BYTE PTR[SI],'$' ;'$' IS STRING TERMINATOR.IF [SI] -> $,
	 JNE   DIS1		; THEN MSG HAS BEEN DISPLAYED.

;--TURN THE BEAM ON

	 CALL  VIDEO_ON

	 POP   SI
	 POP   ES
	 POP   DI
	 POP   CX
	 POP   BX
	 POP   AX

	 RET

DISPLAY  ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE  FORE_GROUND
;
;   BRIEF:
;	 INCREMENTS  "FOREGROUND"  BY ONE. IF FOREGROUND IS NOT IN THE
;	 RANGE 0 <= FOREGROUND <= 15 THEN FOREGROUND IS SET = 0.
;
;   INPUT:
;	 FOREGROUND
;
;   OUTPUT:
;	 ATTRIBUTE CORRESPONDING TO NEW VALUE OF FOREGROUND
;------------------------------------------------------------------------------

FORE_GROUND  PROC  NEAR

	 INC   FOREGROUND
	 CMP   FOREGROUND,15	;15 IS MAX ALLOWED FOREGROUND COLOR
	 JBE   FOR1

	 ;--FOREGROUND > 15, SO RESET IT TO 0.

	 MOV   FOREGROUND,0

FOR1:	 CALL  SET_COLOR       ;DETERMINE "ATTRIBUTE" VALUE FOR OLD
			       ; BACKGROUND, NEW FOREGROUND VALUES.

	 RET

FORE_GROUND  ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE GET_KEY
;
;   BRIEF:
;	 RETURNS SCAN CODE OF KEY PRESSED. KEY NOT ECHOES ON SCREEN.
;
;   INPUT:
;	 NONE. WAITS FOR A KEY TO BE PRESSED,
;
;   OUTPUT:
;	 EXT_CODE     SET TO "YES" IF AN EXTENDED CODE KEY PRESSED;
;		      ELSE "NO".
;
;	 KEYIN	      CONTAINS THE SCAN CODE OF THE KEY PRESSED.
;------------------------------------------------------------------------------

GET_KEY  PROC  NEAR

	 PUSH  AX

	 MOV   EXT_CODE,NO     ;ASSUME NON EXTENDED CODE KEY PRESSED

	 MOV   AH,0	       ;INTERRUPT FOR KEYBOARD INPUT
	 INT   16H

	 CMP   AL,0	       ;AL = 0 MEANS AN EXTENDED CODE
	 JE    GET1

;-- A NON-EXTENDED KEY WAS STRUCK

	 MOV   KEYIN,AL        ;MOVE SCAN CODE # INTO KEYIN
	 POP   AX
	 RET

;-- AN EXTENDED KEY WAS STRUCK

GET1:	 MOV   EXT_CODE,YES    ;SET EXTENDED CODE INDICATOR
	 MOV   KEYIN,AH        ;MOVE SCAN CODE INTO `KEYIN'
	 POP   AX
	 RET

GET_KEY  ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE GOOD_BYE
;
;   BRIEF:
;	 DISPLAYS  MESSAGE  `This  program  needs  the	color adapter.
;	 Sorry!'
;
;   INPUT:
;	 FARWELL ( DEFINED IN OUR DATA SEGMENT )
;
;   OUTPUT:
;	 FARWELL MESSAGE IS DISPLAYED.
;------------------------------------------------------------------------------

GOOD_BYE PROC  NEAR

	 PUSH  AX
	 PUSH  DX

	 ;--BEEP USER AND DISPLAY FARWELL MESSAGE

	 MOV   AH,9	       ;REQUEST "PRINT STRING" SERVICE
	 MOV   DX,OFFSET FARWELL  ;DX POINTS TO FARWELL
	 INT   21H	       ;INVOKE "PRINT STRING" SERVICE

	 POP   DX
	 POP   AX

	 RET

GOOD_BYE ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE INIT
;
;   BRIEF:
;	 CHECKS  FOR COLOR ADAPTER. IF FOUND THEN SETS DISPLAY_ADDRESS
;	 =  B800H,  COLOR  =  1,  FOREGROUND = WHITE, AND BACKGROUND =
;	 BLACK. ATTRIBUTE IS ALSO SET.
;
;   INPUT:
;	 NONE
;
;   OUTPUT:
;	 ATTRIBUTE,  BACKGROUND, COLOR, CRT_MODE_SET, DISPLAY_ADDRESS,
;	 FOREGROUND
;------------------------------------------------------------------------------

INIT	 PROC  NEAR

	 PUSH  AX
	 PUSH  DI
	 PUSH  ES
	 PUSH  SI

;--INT11   IS	THE   EQUIPMENT   DETERMINATION   INTERRUPT.  EQUIPMENT
;  INFORMATION	IS  RETURNED IN THE AX REGISTER. BITS 4 AND 5 = 1 FOR A
;  MONOCHROME CARD.

	 ;--ASSUME B&W EQUIPMENT

	 MOV   DISPLAY_ADDRESS,0B000H
	 MOV   COLOR_CARD,NO

	 INT   11H
	 AND   AX,0000000000110000B	;BITS 4 AND 5 ARE ON
	 CMP   AX,00110000B
	 JE    INI1	       ;EQUALITY MEANS B&W CARD.


;--POINT DISLAY_ADDRESS TO COLOR VIDEO RAM

	 MOV   COLOR_CARD,YES  ;COLOR ADAPTER PRESENT
	 MOV   DISPLAY_ADDRESS,0B800H

	 ;--TECH. REF.MANUAL SUGGESTS TURNING VIDEO OFF WHEN CHANGING
	 ;  MODE ( THIS REDUCES BOUNCING OF PANEL ON SCREEN ).

	 CALL  VIDEO_OFF

	 ;--SET MODE TO 80x25 ALPHA COLOR MODE.

	 MOV   AH,0	       ;REQUEST SET MODE SERVICE
	 MOV   AL,3	       ;80x25 ALPHA COLOR MODE SPECIFIED
	 INT   10H	       ;INVOKE SET MODE SERVICE


	 ;--MODE SET ACCOMPLISHED. TURN BEAM ON.

	 CALL  VIDEO_ON

	 ;--SET  FOREGROUND  AND  BACKGROUND COLORS TO WHITE ( 15) AND
	 ;  BLACK (0) RESPECTIVELY.

	 MOV   FOREGROUND,15
	 MOV   BACKGROUND,0
	 CALL  SET_COLOR       ;RETURNS THE VALUE ATTRIBUTE


;--GET VALUE OF CRT_MODE_SET VALUE

	 ;--MAKE ES:DI -> CRT_MODE_SET IN OUR DATA SEGMENT

	 MOV   AX,SEG CRT_MODE_SET
	 MOV   ES,AX			;ES = SEGMENT OF CRT_MODE_SET
	 MOV   DI,OFFSET CRT_MODE_SET	;ES:DI ->CRT_MODE_SET


	 ;--MAKE DS:SI -> CRT_MODE_SET AS DETERMINED BY SET MODE ENTRY
	 ;  POINT  OF  VIDEO_IO  ).  CRT_MODE_SET  RESIDES AS ABSOLUTE
	 ;  ADDRESS 465H = 40:65.

	 PUSH  DS
	 MOV   AX,40H
	 MOV   DS,AX	       ;DS = 40H

	 MOV   SI,65H	       ;DS:SI = 40:65 = CRT_MODE_SET IN LOW RAM
	 MOVSB		       ;MOVE DS:SI  -> CRT_MODE_SET IN OUR DATA SEG.
	 POP   DS

INI1:	 POP   SI
	 POP   ES
	 POP   DI
	 POP   AX


	 RET

INIT	 ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE KEYS
;
;   BRIEF:
;	 CALLS ROUTINES TO ADJUST THE FOREGROUND, OR BACKGROUND COLOR
;
;   INPUT:
;	 KEYIN -  THE SCAN CODE OF THE KEY STRUCK
;
;   OUTPUT:
;	 FOREGROUND OR BACKGROUND COLOR IS ADJUSTED. SETS EXIT = "YES"
;	 IF F10 PRESSED.
;------------------------------------------------------------------------------

KEYS	 PROC  NEAR

	 CMP   KEYIN,F1        ;F1 KEY( FOREGROUND )
	 JNE   KEY1
	 CALL  FORE_GROUND
	 RET

KEY1:	 CMP   KEYIN,F2        ;F2 KEY (BACKGROUND )
	 JNE   KEY2
	 CALL  BACK_GROUND
	 RET

KEY2:	 CMP   KEYIN,F10       ;F10 HIT?
	 JNE   KEY3
	 MOV   EXIT,YES        ;YES! INDICATE RETURN TO DOS WANTED

KEY3:	 RET

KEYS	 ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE  SET_COLOR
;
;   BRIEF:
;	 DETERMINES   VALUE  OF  ATTRIBUTE  BASED  ON  FOREGROUND  AND
;	 BACKGROUND. SET_COLOR SETS BORDER COLOR = BACKGROUND COLOR.
;
;▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
;
;	 SEE TECH REFERNCE MANUAL FOR DETAILED EXPLANATION.
;
;	 2 BYTE CHARACTER DESCRIPTOR FOR COLOR DISPLAY IN ALPHANUMERIC
;	 MODE.
;
;    -----------------------------------------------------------------
;    |< -------- CHARACTER --------->| X | R | G | B | I | R | G | B |
;    -----------------------------------------------------------------
;				      <--------- ATTRIBUTE ---------->
;▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
;
;	 ATTRIBUTE
;
;	 BACKGROUND.........   ................... FOREGROUND
;			   V   V	   V
;	     ---------------------------------
;	     | X | R | G | B | I | R | G | B |
;	     ---------------------------------
;▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
;
;
;	 COLOR	SELECT REGISTER ( WRITE ONLY - HAS ADDRESS 3D9H ) USED
;	 TO ADJUST BORDER COLOR
;
;	 BACKGROUND INTENSITY.....    .................. SCREEN BORDER
;				 V    V 	  V
;		     ---------------------------------
;		    | X | X | X |BI | I | R | G | B |
;		     ---------------------------------
;
;------------------------------------------------------------------------------

SET_COLOR  PROC  NEAR

	 PUSH  AX
	 PUSH  CX
	 PUSH  DX

;--DETERMINE VALUE OF ATTRIBUTE FROM FOREGROUND AND BACKGROUND.

	 ;--SHIFT BACKGROUND INTO UPPER NIBBLE OF AL REGISTER

	 MOV   AL,BACKGROUND
	 MOV   CL,4	       ;SHIFT BACKGROUND 4 BITS TO LEFT
	 SHL   AL,CL

	 ;--PUT FOREGROUND IN LOWER NIBBLE, AND SAVE IN  ATTRIBUTE

	 ADD   AL,FOREGROUND
	 MOV   ATTRIBUTE,AL

;--SET THE BORDER COLOR TO THAT OF THE BACKGROUND.

	 MOV   DX,3D9H	       ;3D9 = COLOR SELECT REGISTER
	 MOV   AL,BACKGROUND   ;BORDER COLOR = BACKGROUND
	 OUT   DX,AL

	 POP   DX
	 POP   CX
	 POP   AX

	 RET

SET_COLOR  ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE VIDEO_OFF
;
;   BRIEF:
;	 TURNS	THE  VIDEO BEAM OFF DURING VERTICAL RETRACE PERIOD. IF
;	 THIS  IS  NOT	DONE  WHILE  WRITING  TO VIDEO RAM THEN "SNOW"
;	 RESULTS.
;
;▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
;
;   STATUS REGISTER   ( 4 BIT READ ONLY  - 3DAH )
;
;	     ---------------------------------
;	     | X | X | X | X | 1 | X | X | X |
;	     ---------------------------------
;	 A  ONE  IN  THE POSITON SHOWN => VIDEO RAM ACCESS CAN BE MADE
;	 WITHOUT INTERFERING WITH THE DISPLAY.
;
;▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
;
;	 MODE SELECT REGISTER ( 6 BIT WRITE ONLY. ADDRESS: 3D8H )
;
;			   .. DISABLES VIDEO WHEN 0
;			   V
;	     ---------------------------------
;	     | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 1 |	 = 25H
;	     ---------------------------------
;	 25H  => 80x25 COLOR ALPHA MODE, BEAM OFF
;
;------------------------------------------------------------------------------

VIDEO_OFF PROC	NEAR

	 PUSH  AX
	 PUSH  DX

;--WAIT FOR VERTICAL RETRACE

	 MOV   DX,3DAH

VID1:	 IN    AL,DX
	 TEST  AL,8
	 JZ    VID1

;--VERTICAL RETRACE HAS BEGUN, SO TURN VIDEO OFF

	 MOV   AL,00100101B
	 MOV   DX,3D8H
	 OUT   DX,AL

	 POP   DX
	 POP   AX

	 RET

VIDEO_OFF ENDP
;------------------------------------------------------------------------------

;------------------------------------------------------------------------------
;ROUTINE  VIDEO_ON
;
;   BRIEF:
;	 TURNS THE VIDEO BEAM ON TO REDISPLAY THE SCREEN.
;
;	 SEE ROUTINE VIDEO_OFF FOR REGISTER VALUES
;
;   INPUT:
;	 CRT_MODE_SET
;------------------------------------------------------------------------------

VIDEO_ON PROC  NEAR

	 PUSH  AX
	 PUSH  DX

	 MOV   AL,CRT_MODE_SET
	 MOV   DX,3D8H
	 OUT   DX,AL

	 POP   DX
	 POP   AX

	 RET

VIDEO_ON ENDP
;------------------------------------------------------------------------------

MAIN	 ENDP		       ;END of Procedure MAIN

CODE	 ENDS		       ;END of CODE segment

END	 MAIN		       ;END of routine MAIN
```
{% endraw %}

## INTRO.TXT

{% raw %}
```
Copyright 1984 by ABComputing				      February 15, 1984
╔═════════════════════════════════════════════════════════════════════════════╗
║				  Introduction				      ║
║									      ║
║				       by				      ║
║									      ║
║		    Bill Salkin - Editor of PC Firing Line		      ║
╚═════════════════════════════════════════════════════════════════════════════╝


      ┌─────────────────────────────────────────────────────────────────┐
      │ 								│
      │   I  have  so many ideas that may perhaps be of use in time if	│
      │   others  more penetrating than I go deeply into them and join	│
      │   the beauty of their minds to the labor of mine.		│
      │ 								│
      │ 			  Gottfried Leibnitz			│
      │ 								│
      └─────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────┐
│ Greetings			   │
└──────────────────────────────────┘

	       WELCOME	to the premier issue of PC Firing Line (PCFL),
	  the technically oriented magazine for IBM PC users.

	       Our goals are:

      ┌─────────────────────────────────────────────────────────────────┐
      │   1.   To study the software development process.		│
      │ 								│
      │   2.   To  define and promote good programming practices. Many	│
      │   articles  in	PCFL will be accompanied by source code files.	│
      │   Study  source  code  for  its  style and aesthetic value, in	│
      │   addition to mere functionality.				│
      │ 								│
      │   3.   To serve  as  a	beacon to beginning programmers, and a	│
      │   valuable communications ground for all.			│
      │ 								│
      │   4.   To supply  inexpensive  advertising so new products can	│
      │   gain recognition.						│
      └─────────────────────────────────────────────────────────────────┘


	       PCFL  represents a major departure from the traditional
	  approach taken by magazines. I hope you enjoy this magazine,
	  and I will appreciate your comments.

┌──────────────────────────────────┐
│ FREEWARE(tm)	Defined 	   │
└──────────────────────────────────┘

	       The  term FREEWARE(tm) as used in this magazine means a
	  marketing approach where the user receives a product with no
	  initial payment required. The user is required to supply the
	  medium and postage to transport the product.

	       Individuals  and  companies  are allowed to make copies
	  for  their  non-profit  use  and to provide copies for other
	  interested parties.

	       If  the	product  is  not  satisfactory	in  the user's
	  opinion,  no	payment  is  made  to  the company issuing the
	  product.

	       Each  user  judging the product to be of value is urged
	  to pay a fee set by the issuing company.

	       PCFL  has  embraced  this  philosophy  but also accepts
	  prepaid subscriptions.  Further details are provided in this
	  introduction.

┌──────────────────────────────────┐
│ Writers & Advertisers 	   │
└──────────────────────────────────┘

	       I  must thank our writers for giving their time to this
	  effort.  Our	brave  advertisers  also  deserve  mention for
	  advertising in a magazine PRIOR to seeing the first issue!

┌──────────────────────────────────┐
│ Special Thanks		   │
└──────────────────────────────────┘

	       I  do  not  own	or  have  immediate  access to a color
	  monitor.  But  PCFL  does support color ( under the "Set RGB
	  Colors"   panel   ).  This  is  due  to  the  generosity  of
	  Businessland.  They  allowed me to use their RGB monitor for
	  an unlimited period of time.

┌──────────────────────────────────┐
│ How to Use this Magazine	   │
└──────────────────────────────────┘

	       The  menu  driven  shell  you  are  using  is for those
	  wishing  to  browse  through articles. Standard DOS commands
	  should  be used to print an article. ( At the bottom of each
	  article  is the name of the file containing the article. The
	  one  exception  is  the  case of source code files where the
	  file name is listed at the top of the file.)

	       The  largest file  that can be viewed is currently 64K.

┌──────────────────────────────────┐
│ Future Direction		   │
└──────────────────────────────────┘

	       PCFL  is  destined  to  become  a  project  development
	  magazine.

	       Readers are invited to send suggestions for programs we
	  can  design  together.  A  central project will be selected,
	  designed,  and  broken  into	modules.  Each	module will be
	  written  in a language featured in PCFL (and maybe some that
	  aren't  ).  This  comparative approach should be valuable to
	  contrast the different languages.

	  NOTE:   I  would  like  to  see  books  written  using  this
	  comparative	language   approach,   possibly   with	 fewer
	  languages.

┌──────────────────────────────────┐
│ Product Reviews		   │
└──────────────────────────────────┘

	       As  a service to readers, we review software, hardware,
	  and  books.  Review copies of software and books will NOT be
	  returned.

┌──────────────────────────────────┐
│ Documentation 		   │
└──────────────────────────────────┘

	       All  of	us  have  read	documentation  that  cries for
	  improvement.	Send me your watery-eyed list of product names
	  in this category. A "winner" will be chosen for rewriting in
	  PCFL.  Don't miss this exciting opportunity to explore those
	  products that have baffled you for so long!

┌──────────────────────────────────┐
│ Distribution			   │
└──────────────────────────────────┘

	       PCFL  is  bimonthly BUT the second issue will appear in
	  mid-May ( three months hence ). This three-month period will
	  be   used   to   distribute  PCFL,  and  to  study  possible
	  enhancements.

	       Permission  to  place  PCFL on bulletin boards, and the
	  like,  is  granted provided the integrity of the magazine is
	  preserved   and   non-profit	 use  is  maintained.  Contact
	  ABComputing if clarification is required.

	       Readers are encouraged to make copies for their friends
	  also.

	       Companies  are  allowed	to make copies for user groups
	  and individuals.

	       Companies that would consider including copies of PCFL,
	  or  portions	thereof,  with	their  product	are invited to
	  contact us.

	       Publications  are  NOT  allowed	to  use  our  material
	  without our written permission.

┌──────────────────────────────────┐
│ Revenue			   │
└──────────────────────────────────┘

	       This fee schedule is subject to change.

    ┌───────────────────────┐
    │ Single Copies	    │
    └───────────────────────┘

	       We  are	currently  issuing  PCFL  on  the FREEWARE(tm)
	  principle: if you send us two formatted double-sided/double-
	  density  diskettes and a postage-paid return mailer, we will
	  send you the latest version of PCFL at no charge.

	       As  PCFL does cost money to create, those receiving the
	  above-mentioned  free copies may help us defray our costs by
	  paying $6.00 for each issue of PCFL.

	       Another	option	is  to	send  us  $12 only and we will
	  supply  the  diskette(s),  mailer,  and postage for PCFL. No
	  further payment is requested with this option.

	       Make all checks payable to ABComputing.

    ┌───────────────────────┐
    │ Subscriptions	    │
    └───────────────────────┘

	       For  those  wanting  the  "ultimate"  in convenience we
	  offer  a six issue subscription for $72, mailed to your home
	  or  business.  (  The  subscription  starts  with our second
	  issue.)

	       Make all checks payable to ABComputing.

    ┌───────────────────────┐
    │ Sponsors		    │
    └───────────────────────┘

	       Sponsors  pay  a fee of $150 (or provide the equivalent
	  in  service  ).  This  fee  includes	one advertisement, six
	  issues of PCFL, and a position on our sponsors page.

	      Multiple	sponsorships  in  a  given  year  entitle  the
	  sponsor to only one six-issue subscription.

	       Make all checks payable to ABComputing.

┌──────────────────────────────────┐
│ Advertising Medium		   │
└──────────────────────────────────┘

	       Marketing   software   is   an  expensive  proposition.
	  Advertisements  in  many magazines cost $2,000 (and up ) per
	  full page for a one-time insertion.

	       I suspect that good quality software is languishing for
	  lack	of  advertising  capital.  PCFL is meant to provide an
	  alternative  for  the  disenfranchised  masses  that can not
	  afford  such rates. Our current rates are $30 per screen for
	  a one-time insertion.

	       The  more  readers  we  have,  the better exposure your
	  product will have. Tell your friends about our magazine, and
	  make copies for them.

┌──────────────────────────────────┐
│ For Color Monitors Only	   │
└──────────────────────────────────┘

	       The  program COLORFUL.EXE on this diskette allows users
	  of  an  RGB monitor to change the foreground, background, or
	  border colors of the screen.

	       When  the  user	exits  this program the colors are NOT
	  reset.  This	allows one to find pleasant color combinations
	  and use them under DOS.

	       The program is invoked by typing COLORFUL after the DOS
	  prompt:

	  A>COLORFUL

	  and pressing the ENTER key.

┌──────────────────────────────────┐
│ Printers			   │
└──────────────────────────────────┘

	       Most  printers  do not reproduce the full IBM character
	  set. In particular, many of the nice graphics displayable on
	  the  IBM monitor ( and used in PCFL ) may print as "garbage"
	  or at least not as expected.

	       The routine PRETTY1.EXE	on  this  diskette, will cause
	  the printer  to print "extended" graphic   characters  as  a
	  series of asterisks.

	       To  invoke  this  module, type  PRETTY1	after  the DOS
	  prompt:


	       A>PRETTY1


	  and press the ENTER key.


	       Then, printing the box


	      ┌──────┐
	      │ Hi!  │
	      └──────┘


	  will actually result in the printing of


	      ********
	      * Hi!  *
	      ********

┌──────────────────────────────────┐
│ Where to Write		   │
└──────────────────────────────────┘

	  Address all correspondence to:


			  ABComputing
			  P.O. Box 5503
			  North  Hollywood, CA 91616-5503
			  ATTENTION: Bill Salkin


	  (  The  company  name  is pronounced "ABC Computing" but the
	  spelling uses one "C".)


	  Send a S.A.S.E if you wish a reply.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       PCFL will act as a major force in the discussion of the
	  software   development   process   and  technical  knowledge
	  pertaining to the IBM PC. May the force be with you?




		     ┌──────────────────────────────────┐
		     │ File Name:    ██  intro.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## LISP1.TXT

{% raw %}
```
Copyright 1984 by Gary M. Rader
╔═════════════════════════════════════════════════════════════════════════════╗
║			       Why Not Lisp?				      ║
║									      ║
║				    by					      ║
║									      ║
║			       Gary M. Rader				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       Browsing  through  almost any personal computer journal
	  will	yield  at  least  one  (if not many) programs computer
	  hobbyists can use on their personal computer. These programs
	  are  invariably  written  in	BASIC.	Occasionally one finds
	  programs written in Pascal, Assembly or, in what seems to be
	  the  current	favorite  of  software	developers,  C.  Other
	  languages  are mentioned in articles, often without programs
	  -  Fortran, Cobol, Forth, APL, Modula-2, Ada, and even Logo.
	  The  language  that  never seems to appear is Lisp. Why? The
	  impression  is  that Lisp is either subhuman (subcomputer?),
	  superhuman,  or  beyond comprehension. This article examines
	  some	of  the strengths and weaknesses of Lisp, and compares
	  it to other microcomputer languages.

┌──────────────────────────────────┐
│ History			   │
└──────────────────────────────────┘

	       Lisp   was  one	of  the  first	high  level  languages
	  developed  for  digital  computers.  Fortran	and Cobol were
	  developed  in  the  same time frame. Unlike those languages,
	  Lisp	has  never  been  standardized,  and  several dialects
	  exist.   MacLisp   from   the   Massachusetts  Institute  of
	  Technology  (MIT) and InterLisp from Stanford University are
	  two  main  dialects.	However,  one  dialect	can  generally
	  imitate another so lack of standardization usually causes no
	  serious problem.

	       Lisp  was initially developed by John McCarthy while at
	  MIT.	Traditionally,	it  has  been  used  mainly for symbol
	  manipulation,   primarily   in   the	 area	of  artificial
	  intelligence.  Symbol  manipulation  is  the	complement  of
	  arithmetic.  It deals with structures as opposed to numbers.
	  Probably  the  most familiar symbol manipulation application
	  is  a  word  processing program in which words (symbols) are
	  manipulated. Other examples include compilers, interpreters,
	  data base systems, computer games, and business graphics. In
	  the  area of natural language processing, pluralizing a noun
	  such	 as   "key"   to   "keys"  is  an  example  of  symbol
	  manipulation.

	       Historically,  Lisp  systems  were  slow  with  minimal
	  arithmetic   capabilities.   These  deficiencies  have  been
	  largely  overcome, but the image persists and Lisp is rarely
	  found  outside  university  environments. Another reason for
	  its  nonacceptance  was  the lack of good tutorial material.
	  The  arrival	of  Winston  and  Horn's  excellent  book LISP
	  (Addison  Wesley, 1981, paper) has rectified this situation.
	  (EDITOR'S  NOTE:  Apparently,  laziness  is  the  only valid
	  remaining  reason  not  to  learn Lisp.) This is the book of
	  choice for learning Lisp.

┌──────────────────────────────────┐
│ What Distinguishes Lisp?	   │
└──────────────────────────────────┘

	       What Distinguishes Lisp from other Languages?

	  1.   First,  Lisp  is  interactive, like BASIC and APL. This
	  greatly  speeds  program development and debugging. Like APL
	  (and	 partly   like	BASIC)	variables  are	not  declared.
	  Developed programs can be compiled for increased speed.

	  2.   One  of Lisp's most powerful features is its ability to
	  generate  code  and  execute	it.  For example, to satisfy a
	  user's  query,  a  data base program might first generate an
	  appropriate  program	and  then execute (or "evaluate" as we
	  say  in  Lisp)  it.  APL  has  a similar capability. This is
	  possible  because Lisp programs and Lisp data have identical
	  structures.

	  3.   Lisp  compilers	are  unique  in that they can handle a
	  mixture  of  both  compiled  and  interpreted code. That is,
	  under Lisp a system of interpreted AND compiled programs can
	  be  run!  Some  of  these  programs can be compiled, and the
	  others  will	be  interpreted. This allows a program to have
	  the  speed  of  a  compiled  program together with the above
	  mentioned flexibility of "evaluating" generated code.

	  4.   Various	types  of  macros  facilitate translations and
	  redefinition	of  the  Lisp  language.  New languages can be
	  built from Lisp relatively easily using macros. The original
	  Logo was initially created this way.

	  5.   Another	powerful  feature is that of function types in
	  which  the  number  of  arguments  can be variable or fixed.
	  These arguments can be either evaluated or unevaluated. Most
	  languages  require  the number of arguments to be fixed. APL
	  allows  a  variable  number (as long as it is either 0, 1 or
	  2).  The  Lisp  function  PLUS  is a built-in function which
	  takes  a variable number of arguments. It can be used to add
	  an indefinite number of numbers, not just a pair of numbers.
	  The  evaluated/unevaluated  feature  is  similar to call-by-
	  value and call-by-name used in other languages.

	  6.   "Bignums" permit unlimited precision integer arithmetic
	  thereby  eliminating	the  problem  of  round-off errors. In
	  certain  engineering	and applied mathematics situations the
	  problem of round-off can be very serious.

	  7.   Strings,   functions, and  variable  names  can	be  of
	  unlimited  length.  This  allows  the creation of completely
	  descriptive names without the need for abbreviations.

	  8.   The  main Lisp data structure is the linked list, which
	  allows  the development of general structures, even circular
	  graphs.  The	links  (pointers) are transparent to the user.
	  Other  languages such as C allow this capability through the
	  explicit   manipulation  of  pointers.  Linked  lists  allow
	  certain  operations  to  be  performed much more efficiently
	  than when arrays are used.

	       Consider  an  array  of	numbers, say X(1), X(2), X(3),
	  etc.	To  insert  a new third element in this array we shift
	  each	element  to the next element in the array and set X(3)
	  to  the new number. In Lisp, this is accomplished by linking
	  X(2) to the new element, and then linking the new element to
	  X(3).  For  long  sequences  the  linked  list  approach  is
	  significantly faster than using arrays.

	  9.   Lisp is a functional language - it uses function calls,
	  and  this  makes  it	structured, almost naturally. All Lisp
	  programs  are systems of functions with a top level function
	  calling subfunctions and so on. New functions can be defined
	  in  isolation  and  used  as	if  they  were	primitive Lisp
	  operations.

	  10.  Lisp  has  perhaps  the	most powerful set of debugging
	  features  of	any  language. Break points can be set and the
	  environment	examined   when  a  break  occurs.  The  input
	  arguments  and  results of executing specified functions can
	  be  displayed  selectively during program execution. You can
	  create   unique   and   powerful   debugging	facilities  by
	  appropriately  redefining  the "evaluate function" mechanism
	  of Lisp.

┌──────────────────────────────────┐
│ Drawbacks			   │
└──────────────────────────────────┘

	  1.   One  drawback of present day Lisp is the reclamation of
	  memory.  Referred  to  as  "garbage  collecting,"  it occurs
	  automatically  when no free memory is available for creating
	  new  lists  or  strings  (BASIC  has	a  similar  drawback).
	  Processing stops (for a few seconds) until all unused memory
	  has  been  reclaimed. This can happen at any time during the
	  execution  of a program. In many cases it will be unnoticed,
	  but  it  can	happen	while a line is being displayed on the
	  screen! This creates quite a shock and can lead new users to
	  believe  the system has crashed. This also presents problems
	  for real time programming.

	       The problem can be reduced when necessary by explicitly
	  calling the garbage collector at points in the program where
	  the	user   will  not  notice,  and	by  pursuing  "garbage
	  collectionless  programming"  (by minimizing the creation of
	  new lists). Research on incremental garbage collectors which
	  reclaim a little bit of memory with each new usage of memory
	  will,  hopefully, solve  this  problem.  Compiling  programs
	  reduces  the	length of garbage collections as compiled code
	  does not need to be processed.

	       Despite	 the   negative   impression   created	above,
	  automatic  memory  management  is  also  one of Lisp's great
	  strengths.  It  allows  the  programmer  to  concentrate  on
	  solving  the	problem  at  hand  without being distracted by
	  conceptually	irrelevant  details  concerning  memory (e.g.,
	  variable  declaration,  requesting memory from the operating
	  system, and  returning  memory  when no longer needed). This
	  undoubtedly is an important reason for Lisp's preeminence in
	  the world of artificial intelligence.

	  2.   Using  lists instead of arrays requires more memory, as
	  space for links must generally be provided.

	  3.   As data and programs can be widely dispersed in memory,
	  using  Lisp  in a virtual memory environment can cause speed
	  degradation.	While  following links to a desired data item,
	  the  page containing the actual item might be swapped out in
	  the  course  of tracking it down! Of course, this can happen
	  in  other languages such as C in which pointers can point to
	  other pointers, which point to other pointers.

	  4.   Many   people   complain   that	 Lisp	has  too  many
	  parentheses.	This  is a prejudice, not a drawback. Usually,
	  if  functions  and  data  are  suitably  formatted  ("pretty
	  printed"),  this  objection disappears. For those preferring
	  fewer  parentheses,  the  Lisp  driver  can  be redefined to
	  provide it. (This was done for the Logo syntax.)

┌──────────────────────────────────┐
│ Lisp on the IBM PC		   │
└──────────────────────────────────┘

	       Several	Lisps  are currently available for the IBM PC.
	  The Soft Warehouse sells muLISP-83 (also sold by Microsoft),
	  Integral  Quality  markets  IQLISP,  and Norell Data Systems
	  offers LISP/88.

	       I  have	used muLISP-83 for almost half a year and have
	  been	pleasantly  impressed  by  its performance. I have not
	  used	IQLISP	but  from Integral Quality's brochure it seems
	  that	it is a fully functional Lisp. LISP/88 has just become
	  available  for  distribution,  and I have no experience with
	  this product.

	       muLISP  enforces  completely  structured programming by
	  not  having a GOTO command.(However, exits from loops can be
	  efficiently performed using the THROW/CATCH combination.) In
	  addition  to	the  expected  functionality,  muLISP provides
	  access to the PC's BIOS through its REGISTER, INTERRUPT, and
	  PORTIO  commands.  This  is  a  useful feature for it allows
	  programmers  to  easily  incorporate	graphics,  sound, game
	  paddle communication, and more in their programs. Random I/O
	  is  available.  muLISP  does	not provide arrays or floating
	  point  numbers.  (However  the  Soft	Warehouse is currently
	  implementing	floating slash - i.e., floating point in which
	  the  precision  is user-defined. This prevents the round-off
	  problem from resurfacing.)

	       A program development system and a debugging system are
	  included  with  muLISP  along  with utility files containing
	  libraries  of  MacLisp  and  InterLisp functions. An on-line
	  tutorial  for  learning  Lisp  is  also  included. (The Soft
	  Warehouse  had  developed a tutorial correlated with Winston
	  and  Horn's  LISP  book  but  Addison Wesley, the publisher,
	  demanded a royalty!)

	       A   nice   feature   for  program  developers  is  that
	  application  programs  written  in  muLISP  do  not  require
	  customers  to own the full muLISP system. A small royalty is
	  paid	for  use  of  the  muLISP runtime system. Programs are
	  distributed as .COM files.

	       IQLISP  uses all of the PC's memory while muLISP uses a
	  maximum of 256K bytes. Arrays and floating point numbers are
	  provided  as	is  8087  support. IQLISP does not have random
	  I/O.

	       Both Lisps allow user-defined machine language routines
	  to  be  called from within programs. Both include a "string"
	  data	type.  muLISP  is  allegedly  4 to 7 times faster than
	  IQLISP.  One	reason	is  that muLISP functions are compiled
	  into	"distilled"  code  (similar to Pascal's p-code) before
	  interpretation. Another is that IQLISP accommodates a larger
	  address space.

	       Both  companies	state  they  will  be  offering a Lisp
	  compiler.  When  I  contacted  Integral Quality last Spring,
	  they	indicated  that  a Lisp compiler would be available by
	  now.	To my knowledge, it is not yet available. The compiler
	  from the Soft Warehouse will be ready in late 1984.

	       LISP/88	may  or may not be in the same league as these
	  two.	However,  it  definitely  has  one notable feature - a
	  price of $49.95!

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       Unjustified    prejudices    continue	to    restrain
	  microcomputer  users	from  learning and using Lisp. Several
	  quality  microcomputer  implementations  are available along
	  with	an  excellent  book  for  learning Lisp. Lisp provides
	  powerful  capabilities,  many  of  which  are unavailable in
	  other languages.

	       Three  Lisps  are  currently available for the IBM PC -
	  muLISP,  IQLISP, and LISP/88. A review of muLISP, and IQLISP
	  appears in PC Magazine (December, 1983).


		     ┌───────────────────────────────────────┐
		     │	 Products mentioned in this article  │
		     ├───────────────────────────────────────┤
		     │					     │
		     │	IQLISP ($175)			     │
		     │	    Integral Quality		     │
		     │	    P. O. Box 31970		     │
		     │	    Seattle, Washington 98103	     │
		     │	    (206) 527-2918		     │
		     │					     │
		     ├───────────────────────────────────────┤
		     │					     │
		     │	LISP/88 ($49.95)		     │
		     │	    Norell Data Systems 	     │
		     │	    3400 Wilshire Blvd. 	     │
		     │	    P. O. Box 70127		     │
		     │	    Los Angeles, California 90010    │
		     │	    (213) 257-2026		     │
		     │					     │
		     ├───────────────────────────────────────┤
		     │					     │
		     │	muLISP-83 ($250)		     │
		     │	    The Soft Warehouse		     │
		     │	    P. O. Box 11174		     │
		     │	    Honolulu, Hawaii 96828-0174      │
		     │	    (808) 734-5801		     │
		     │					     │
		     └───────────────────────────────────────┘





		     ┌──────────────────────────────────┐
		     │ File Name:  ██	 lisp1.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## LIST1.ASM

{% raw %}
```
;COPYRIGHT 1984 BY ABComputing
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS  FILE  CONTAINS THREE ROUTINES THAT WILL BE DISCUSSED IN	 │
;    │	 THE NEXT "Introduction to Assembly Language" COLUMN.            │
;    │									 │
;    │	 A LINE OF THE FORM						 │
;    │									 │
;    │		END   XXXXXX	      ;END of routine XXXXXX		 │
;    │									 │
;    │	 INDICATES THE END OF A ROUTINE 				 │
;    │									 │
;    │	 SPLIT THIS FILE INTO THREE FILES:1) DISPLAY.ASM, 2) CLEAR.ASM	 │
;    │	 AND 3) DELETE.ASM.						 │
;    │									 │
;    │	 USE  THE  BATCH FILE 0.BAT MENTIONED IN THIS MONTH'S ASSEMBLY   │
;    │	 ARTICLE TO RUN EACH OF THESE FILES.				 │
;    │									 │
;    │	 EACH FILE SHOULD ASSEMBLE AND LINK WITHOUT WARNINGS OR ERRORS.  │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;
;		     ┌──────────────────────────────────┐
;		     │ File Name:  ██	 list1.asm  ██	│
;		     └──────────────────────────────────┘




;COPYRIGHT 1984 BY ABComputing
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
DATA	SEGMENT PARA

STRINGY DB  'I have the world on a string','$'

DATA	ENDS
;------------------------------------------------------------------------


;------------------------------------------------------------------------
STACK	SEGMENT PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------


;------------------------------------------------------------------------
CODE	 SEGMENT PARA
ASSUME	 CS:CODE, DS:DATA, SS:STACK


;--STANDARD LINKAGE TO DOS

DISPLAY  PROC  FAR	       ;DO
	 PUSH  DS	       ;
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	   NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;--PRINT THE STRING "STRINGY"

	 MOV   AH,9	       ;REQUEST DISPLAY STRING OPTION
	 MOV   DX,OFFSET STRINGY ;DX HAS THE ADDRESS OF STRINGY
	 INT   21H	       ;INVOKE DISPLAY STRING OPTION


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


DISPLAY  ENDP		       ;END of Procedure
CODE	 ENDS		       ;END of code Segment
;------------------------------------------------------------------------

	 END   DISPLAY	       ;END of routine DISPLAY







;COPYRIGHT 1984 BY ABComputing
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS ROUTINE CLEARS THE SCREEN BY MAKING A BIOS CALL.		 │
;    │									 │
;    │	 PLACE THIS ROUTINE IN FILE : CLEAR.ASM 			 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------
DATA	SEGMENT PARA


DATA	ENDS
;------------------------------------------------------------------------


;------------------------------------------------------------------------
STACK	SEGMENT PARA STACK 'STACK'

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


;--NOTE 24 DECIMAL = 18H, AND 79 DECIMAL = 4FH


	 MOV   AH,6	       ;REQUEST SCROLL SCREEN SERVICE
	 MOV   AL,0	       ;SCROLL ENTIRE WINDOW
	 MOV   BH,7	       ;WHITE FOREGROUND, BLACK BACKGROUND
	 MOV   CX,0000H        ;UPPER  LEFT CORNER (0,0 )
	 MOV   DX,184FH        ;LOWER RIGHT ( 24,79 )
	 INT   10H	       ;INVOKE SCROLL SCREEN SERVICE


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


CLEAR	 ENDP		       ;END of Procedure
CODE	 ENDS		       ;END of code Segment
;------------------------------------------------------------------------

	 END   CLEAR	       ;END of routine CLEAR










;COPYRIGHT 1984 BY ABComputing
;
;    ┌───────────────────────────────────────────────────────────────────┐
;    │									 │
;    │	 THIS  ROUTINE DELETES THE FILE "B:TRASH.TXT" BY MAKING A DOS    │
;    │	 CALL.								 │
;    │									 │
;    │	 THE FILE IS ASSUMED TO EXIST.					 │
;    │									 │
;    │	 PLACE THIS ROUTINE IN FILE : DELETE.ASM			 │
;    │									 │
;    └───────────────────────────────────────────────────────────────────┘
;
;------------------------------------------------------------------------
DATA	SEGMENT PARA

FCB	DB   2,'TRASH   ','TXT',25 DUP(0)   ;ESTABLISH FCB FOR "B:TRASH.TXT"

DATA	ENDS
;------------------------------------------------------------------------


;------------------------------------------------------------------------
STACK	SEGMENT PARA STACK 'STACK'

	DB    40H DUP('STCK')

STACK	ENDS
;------------------------------------------------------------------------


;------------------------------------------------------------------------
CODE	 SEGMENT PARA
ASSUME	 CS:CODE, DS:DATA, SS:STACK


;--STANDARD LINKAGE TO DOS

DELETE	 PROC  FAR	       ;DO
	 PUSH  DS	       ;
	 SUB   AX,AX	       ;
	 PUSH  AX	       ;	   NOT
	 MOV   AX,DATA	       ;
	 MOV   DS,AX	       ;		    ALTER!


;--PREPARE TO DELETE FILE

	 MOV   AH,13H	       ;REQUEST DELETE FILE SERVICE
	 MOV   DX,OFFSET FCB   ;DX -> FCB OF FILE TO BE DELETED
	 INT   21H	       ;INVOKE DELETE FILE SERVICE


;-- RETURN TO DOS

	 RET		       ;RETurn to DOS


DELETE	 ENDP		       ;END of Procedure
CODE	 ENDS		       ;END of code Segment
;------------------------------------------------------------------------

	 END   DELETE	       ;END of routine DELETE
```
{% endraw %}

## MEMORY.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║			     Memory - More for Less			      ║
║									      ║
║				      by				      ║
║									      ║
║				 Ken Holcombe				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


	  EDITOR'S  NOTE:  When  I  first  read  this article I was so
	  impressed  with  its	humor and homespun flavor that I opted
	  not to edit it.

┌──────────────────────────────────┐
│ Old Motherboards		   │
└──────────────────────────────────┘

	       For those of you who purchased your IBM-PC long ago and
	  can  only  expand  to 64K of RAM on the motherboard, did you
	  really think you would be satisfied with that? Are you? With
	  PC/MS DOS getting increasingly sophisticated and larger, and
	  with	 the   abundance  of  RAM  DISK,  print  spooling  and
	  partitioning	programs, 64K on a PC can really make you feel
	  left	out.  There  are hundreds of thousands of IBM PCs with
	  the  "old"  motherboard  that  uses  16K  bit  chips for RAM
	  memory. The newer PCs use the 64K chips.

	       Though the PC uses a 16 bit microprocessor, fortunately
	  for  us  thrifty  folks  it has an 8 bit bus; therefore each
	  bank	of  memory  has a chip for each bit (8) and a chip for
	  parity  for  a total of 9 chips per bank. (A sixteen bit bus
	  requires  16	chips  plus  one  for  parity  for  each bank,
	  therefore  almost  twice as expensive! Come on, you purists;
	  the  8088  isn't  that  much slower than the 8086 - the 8087
	  takes out most of the real sluggishness, number crunching).

	       With  9	chips per bank and 4 banks on the motherboard,
	  the  old PC's come to the grand total of 64K without using a
	  memory  expansion  card. A fully populated "new" motherboard
	  has  256K.  I  built	a memory expansion card by buying a TK
	  Engineering  bareboard  that	added 256K more for a total of
	  320K.  (With a bareboard, you buy the parts and install them
	  yourself.)  As  most	of you have discovered, memory is like
	  money;  the  more  you  have,  the more ways you find to use
	  more.  Besides,  I just love it when people with TRS-80s and
	  Apples ask me how much RAM I have. I started considering the
	  options  for	going  beyond  320K, keeping  in  mind	that I
	  eventually  want to wind up with at least 640K, the DOS BIOS
	  "ceiling."

┌──────────────────────────────────┐
│ Heartburn			   │
└──────────────────────────────────┘

	       However	I  did	it,  it had to be cheap; that's just a
	  basic  part of my personality (and my budget, which some say
	  has  a lot to do with determining your personality). The AST
	  megaplus  card was almost within reach, but I don't like the
	  idea	of  piggybacking RAM banks; I would still wind up with
	  only 576K and I worried about the heat build-up with 4 banks
	  of  RAM  sitting  directly on top of another 4 banks of heat
	  producing  RAM.  Use	another  slot to get the last 64K, you
	  say?	Forget the last 64K, you say and be content with 576K?
	  Well,  there is a board on the market now that allows you to
	  install  576K on it for a total of 640K without piggybacking
	  and  using  only one slot, but it doesn't have all the other
	  functions that the Megaplus does.

	       Any  way  you cut it, I'm being penalized for buying an
	  early PC. It really burns me up that my reward for being one
	  of the first to recognize the advantages of an IBM was being
	  stuck   with	 those	 rinky-dink  4116  16K	chips  on  the
	  motherboard.	Oh  yea,  they're cheap - I can get 'em for $1
	  apiece  but  they use almost the same amount of power as the
	  64K  chips  with  1/4 the density. I want to save that power
	  supply for bigger and better things. (Worst of all, the 4116
	  is the same RAM chip that the TRS-80 and other 8-biters use.
	  I  do  have  some  pride,  you know. Incidentally, there are
	  those   who	say   that   the   8088  is  really  an  8-bit
	  microprocessor.  I  don't  care  what  they  call it, it can
	  directly  address a megabyte. Try that on your 6502 or Z-80;
	  you'll  be  selecting  banks more than you'll be computing.)
	  The  more  I	thought about it, the more I knew that I would
	  have to get rid of those 4116s and get some 4164s - somehow,
	  someway cheap.

	       The  64K  chips	themselves  aren't expensive- about $5
	  apiece  from	the right places - but one can't just take out
	  the  4116  and  install the 4164: the 4116 requires +12,-12,
	  and  +5  volts.  The	4164 needs only +5 and some of the pin
	  connections are different from the 4116.

┌──────────────────────────────────┐
│ Bareboards at Bare-bottom Prices │
└──────────────────────────────────┘

	       There  are  several companies making bareboards for the
	  motherboard  that  use  the  64K chips. The cheapest is from
	  Netronics at $89.95 with $140 more for a complete kit. Super
	  Computer has either a PC or an XT bareboard for $95. Both of
	  these  companies  have  many	other  bareboards,  kits,  and
	  assembled  units  for  the  PC  covering  all  functions and
	  combinations,  e.g.,	4 drive disk controllers with parallel
	  printer  port,  clock/calendar,and hard disk SASI interface,
	  etc.

	       Display	  Telecommunications	Corporation    has   a
	  bareboard/motherboard  that  can  accept the 64K chip or the
	  256K	chip  for  $99.95. Others are more expensive, like the
	  Colorado  Computer Peripherals bare motherboard (sounds kind
	  of  kinky  to  me)  for $175. The most expensive is the bare
	  motherboard  from Micromint, Inc., at $300, although it does
	  have more functions built on the board. You pay a mint (some
	  pun  intended)  since  these	are  designed  by Mr. Hardware
	  himself,  Steve  Ciarcia  of Byte fame. Micromint offers the
	  motherboard	completely   assembled,  as  does  Edge  Micro
	  Systems.

	       I  decided  against  all of these because the assembled
	  ones	cost  more  than  I wanted to spend and the bareboards
	  would take too long to finish. I didn't want my computer out
	  of commission for more than a couple of hours.

	       Another viable option was a kit from Add-MEM that sells
	  for  $69.95.	Ah, the price was right and I was able to talk
	  my  wife into giving it to me for Xmas. Well, it's in and it
	  works.  The three banks on the motherboard that are socketed
	  are  emptied	of  the  16K  chips;  the  chips in bank 0 are
	  soldered  in	by  IBM  and  are  left in though electrically
	  disconnected.   Assembling   the  Add-MEM  kit  consists  of
	  soldering  29  tiny pins, one resistor, 35 bypass capacitors
	  (they  leave	one  off because of space constraints ) and 36
	  sockets  to a small printed circuit board. With sixteen pins
	  on  each  socket,  that's a lot of soldering and it might be
	  worth it to pay $30 more for an assembled board if soldering
	  isn't therapeutic for you.

┌──────────────────────────────────┐
│ 512K is Nice as Rice		   │
└──────────────────────────────────┘

	       I  prefer the kit because I like to solder in the chips
	  directly  and  not  use  the sockets. I know that makes them
	  harder   to	replace,  but  I  think  that  most  RAM  chip
	  malfunctions	are  actually  bad socket connections. Sure it
	  works  when  you put in a new chip; in essence you fixed the
	  bad  connection.  In	any event, you wind up with a small PC
	  board  that  plugs  into  the  banks 1,2, and 3 sockets with
	  these  29  little  pins  sticking  out  on the bottom of the
	  Add-MEM  PC board. (PC stood for printed circuit long before
	  it meant personal computer; you know, back in those old days
	  when	we  thought  it  was really amazing that PC boards had
	  foil	on  both  sides.)  You	cut  through the foil in a few
	  places  on  the  motherboard,  solder  a  few wires from the
	  Add-MEM  board  to  the motherboard, and voila- 256K without
	  using  any  slots.  I  put  back  my	TK  board, set the dip
	  switches, and decided that 512K is nice as rice.

┌──────────────────────────────────┐
│ Doing the Dirty Work		   │
└──────────────────────────────────┘

	       It  takes  a  certain personality type to purchase this
	  kit.	I have some friends who think that the motherboard was
	  built  in  the  Holy	of Holies, and the thought of taking a
	  knife  and  cutting  though  some foil on the motherboard is
	  like a thousand fingernails on a chalkboard to them. To them
	  I  recommend	Sorbus	Service:  they	will  install  a  256K
	  motherboard  for  $208  in  Phoenix. That is labor included;
	  they	don't sell parts. The price may not be that low at the
	  Sorbus  service center nearest you. The Sorbus center in San
	  Antonio  first  quoted  me  a price of $354 and then decided
	  that	they  didn't  want to do it at all. Oh well, I am very
	  happy with my Add MEM modification.

	       I  have	my  sights  set  on  640K now. Netronics has a
	  bareboard  with 256K memory and serial port for $39.95 Let's
	  see;	that would take me to 640K and even beyond. Maybe I'll
	  wait	to  see  how cheap the 256K chips get - the cheapest I
	  can  locate  now are $42 bucks apiece; they need to be about
	  half	that  before  I'm  interested.  But  just imagine that
	  Mega-board from Display Telecommunications with only 4 banks
	  on the motherboard and one megabyte staring you in the face.
	  Isn't  it fun to dream? Incidentally, Add-MEM has as much as
	  promised a modification to use the 256K chips that should be
	  inexpensive.	The  256K  chip has one additional address pin
	  connection  that the 64K chip doesn't; other than that, they
	  are identical.

┌──────────────────────────────────┐
│ Objectivity			   │
└──────────────────────────────────┘

	       Do  I  have  anything bad to say about Add-MEM to prove
	  that	I'm really being objective? Well, Add-MEM says you can
	  eliminate  the  lengthly power-on diagnostics if you set the
	  DIP  switches  on  the motherboard to 0K of RAM. That didn't
	  work	for  me  at  all.  Also,  they say that if you use the
	  sockets  on  the  little  PC	board,	you  can  use only two
	  low-slung boards. (Compare the disk controller board and the
	  color  graphics  board  - the color graphics is low-slung as
	  well as being longer. Low-slung boards provide a little more
	  room	to  install  parts.) They say if you leave the sockets
	  off and solder the RAM chips in directly, all five slots can
	  use  low-slung  cards. I say baloney; if you use the sockets
	  or  not,  you can only squeeze in two low slungs. And if you
	  do  use the sockets, even the regular boards are going to be
	  a  tight  fit,  like	resting right on the socketed chips. I
	  just	installed a Quadcolor I board and now I'm wondering if
	  there  is  going  to	be  room for the Quadcolor II board to
	  piggyback  on  it.  Oh  well,  I can always get one of those
	  bareboard motherboards. I need something to do on these cold
	  winter  nights.  Or  maybe  I can remove the soldered-in 16K
	  chips  left  on  the	motherboard  and the sockets under the
	  Add-MEM  board  and  solder in the Add-MEM board directly to
	  lower  it  a little. The Add-MEM board is going to take some
	  whittling for clearance to do that. But that would solve the
	  only other problem I had with the Add-MEM modification.

┌──────────────────────────────────┐
│ Trouble at OK Corral		   │
└──────────────────────────────────┘

	       While pressing down on the Add-MEM board to seat the 29
	  pins	in  the  sockets  on  the  motherboard,  I unknowingly
	  cracked  a socket. IBM uses double side-wipe DIP sockets for
	  the  RAM  and a cracked socket means that the pins don't get
	  wiped  too  well.  Well, a few days later my computer became
	  very	sensitive;  I mean like going bananas if you tapped it
	  with	your  finger.  I  finally  located  the problem to the
	  cracked  socket  and	ran  a jumper to fix it (my answer for
	  most	of life's problems). I was so happy when my PC started
	  purring again and could take smacks on the side undaunted; I
	  was sweating jalapenos there for awhile.

┌──────────────────────────────────┐
│ All or Nothing		   │
└──────────────────────────────────┘

	       This  brings  up a good point: don't take any more of a
	  gamble  then you are willing to suffer the consequences for.
	  Nearly  all  of  these  boards are multi-layer; if something
	  becomes  disconnected in one of the middle layers of a board
	  because  you	didn't think a 25-watt soldering iron would be
	  too  hot, it can depress one for quite a while. On the other
	  hand, do you know that nearly all repairs on PCs are done on
	  the  FRU  (field  replaceable  unit) level ? That means if a
	  chip	 is   bad   on	 the  motherboard,  they  replace  the
	  motherboard,	or  at	least  IBM  and Sorbus do. If the disk
	  controller  board  malfunctions,  it	is  replaced.

	       It's a concept the TV manufacturers have been using for
	  years.  There's less for the technician to diagnose, but the
	  customer  pays  more	because  he/she is buying a module. Of
	  course, labor should be less. That's one of the reasons I do
	  my  own  repairs.  If I can't fix my color/graphics board, I
	  just	buy  a	Quadcolor;  what have I got to lose? And I can
	  keep	my  old  board and sell it to somebody who thinks they
	  know more than I do about fixing it. There's always somebody
	  like	that  around in life. If IBM fixes your computer, they
	  take	your  old  board in exchange and send it to IBM heaven
	  where  angels  who know everything fix it and then they sell
	  it to someone else some day and charge him labor too.

┌──────────────────────────────────┐
│ Static Electricity		   │
└──────────────────────────────────┘

	       Care  must  be exercised when installing RAM chips with
	  regard  to static electricity. My favorite technique used to
	  be  sitting naked in the bathtub with the parts on a TV tray
	  in  my  lap.	Used  to be, I say, until the vent pipe to the
	  roof	 was   struck  by  lightning.  What  hair  I  have  is
	  permanently  "fro-ed."  Now  I just make sure I'm on a floor
	  like	wood  or  linoleum  and discharge myself to a metallic
	  ground  before  I  start.  It  might be good to remove nylon
	  socks and work on a cookie sheet.

	       Someone	once  said  that  bravery  is  knowing all the
	  possible  consequences  and  being  willing  to accept them.
	  Well,  how  much memory have you got now? What are you going
	  to  do about it? You need some kind of a comeback when those
	  Commodore  people say, "Oh yeah, you got that brand with the
	  weird keyboard, don't cha?"

	       Add-MEM	is  now  marketing their products through user
	  groups. In case your user group isn't hip to this, I'll list
	  Add-MEM's address along with the other references.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       To  wrap  up a few loose ends, I know that not everyone
	  agrees  with	my  theory about eliminating sockets. I know a
	  guy  who  is	installing  sockets  for  all the chips on his
	  motherboard,	those  that  IBM soldered in. Yes, I know that
	  the  best  way  to  unsolder	a  chip is to cut all the pins
	  first.  No,  I  don't  know  for  a  fact  that all the bare
	  motherboards	I  mentioned are 100% IBM PC compatible, but I
	  do  know that the biggest incompatibility with "compatibles"
	  is the ROM and you can always use your old IBM ROM chip.

	       Yes,  I	know  there are at least three versions of the
	  IBM  ROM  including  the XT's and that the old one diagnoses
	  the  first  256K  of RAM no matter how much you have. Yes, I
	  know	that  altering	the  motherboard  as  is done with the
	  Add-MEM  modification  voids	the warranty, but if it's been
	  less than 90 days since you purchased your PC, I really hope
	  you don't have the old motherboard anyway. And if you're the
	  kind	of  guy  or  gal  who  has  a service contract, you're
	  probably kicking yourself for wasting your time reading this
	  whole  thing	anyway. And finally, note the thought that IBM
	  might  change  out  your  old motherboard for a new one just
	  because  you're  like  me and want nothing but 64K or larger
	  chips. You sure ask a lot of questions!



┌─────────────────────────────────────────────────────────────────────────────┐
│     Addresses and phone numbers of companies mentioned in this article      │
├─────────────────────────────────────┬───────────────────────────────────────┤
│   Add-MEM			      │       Colorado Computer Peripherals   │
│   22151 Redwood Road		      │ 		    R.R. 6, Box 7-D   │
│   Castro Valley, CA 94546	      │ 		   Golden, CO 80403   │
│   (415) 886-5443		      │ 		     (303) 278-7172   │
├─────────────────────────────────────┼───────────────────────────────────────┤
│   Display Telecommunications Corp.  │ 	    Edge Micro Systems, Inc.  │
│   4100 Spring Valley Road	      │ 		  2350 Walsh Avenue   │
│   Suite 400			      │ 	      Santa Clara, CA 95051   │
│   Dallas, TX 75234		      │ 		     (408) 980-9866   │
│   (214) 991-1644		      │ 				      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│    Micromint Inc.		      │ 		Netronics R&D, Ltd.   │
│    561 Willow Avenue		      │ 		333 Litchfield Road   │
│    Cedarhurst, NY 11516	      │ 	      New Milford, CT 06776   │
│    Order: 1-800-645-3479	      │ 		     1-800-243-7428   │
│    Info: (516) 374-6793	      │ 	   In CT use (203) 354-9375   │
├─────────────────────────────────────┼───────────────────────────────────────┤
│    Sorbus Service Center	      │ 	       Super Computer, Inc.   │
│    Phoenix, AZ		      │     1710 E. Newport Circle, Suite P   │
│    (602) 997-1064		      │ 		Santa Ana, CA 92705   │
│    Manager: Leonard Goodman	      │ 		     (714) 540-1880   │
├─────────────────────────────────────┼───────────────────────────────────────┤
│    TK Engineering		      │ 				      │
│    P.O. Box 1936		      │ 				      │
│    Corona, CA 91720		      │ 				      │
│    (714) 736-0572		      │ 				      │
└─────────────────────────────────────┴───────────────────────────────────────┘





		     ┌──────────────────────────────────┐
		     │ File Name:  ██	memory.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## METABAS.TXT

{% raw %}
```
Copyright 1984 by ABComputing
   ┌────────────────────┐
   │  MetaBASIC REVIEW	│
   ┌────────────────────────────────────────────────────────────────────┐
   │									│
   │  Reviewed by     Bill Salkin					│
   │									│
   │  Product Name    MetaBASIC 					│
   │  Description     Structured BASIC preprocessor			│
   │									│
   │  Overall Rating  Very good 					│
   │									│
   │  Company Name    Software 128					│
   │  Address	      363 Walden Street, Concord, MA 01742		│
   │		      (617) 369-6400					│
   │									│
   │  Version	      1.0						│
   │  Price	      $75						│
   │  Copy protected  No						│
   │  RAM needed      64K						│
   │  DOS level       1.0, 1.1, 2.0					│
   └────────────────────────────────────────────────────────────────────┘

   ┌────────────────────┐
   │  MetaBASIC REVIEW	│
   ┌────────────────────────────────────────────────────────────────────┐
   │									│
   │  Manual	      Well written. Needs more sample programs		│
   │		      illustrating MetaBASIC features.			│
   │									│
   │  Unusual	      1. Combination of features taken from other	│
   │  Features		 languages ( PASCAL, FORTRAN, BASIC ).		│
   │		      2. Allows for separate subroutines with		│
   │			 calling sequences and argument lists.		│
   │									│
   │  Omissions       Does not present full set of standard structures. │
   │		      "DO CASE" is missing ( though the equivalent      │
   │		      IF..ELSEIF..ELSEIF..ELSE is present). "Repeat     │
   │		      until" structure is also missing.                 │
   └────────────────────────────────────────────────────────────────────┘


   ┌────────────────────┐
   │  MetaBASIC REVIEW	│
   ┌────────────────────────────────────────────────────────────────────┐
   │									│
   │									│
   │  Comments	      Reasonably fast when done on RAM disk.		│
   │		      MetaBASIC uses many intermediate files		│
   │		      so RAM disk is the best approach. 		│
   │									│
   │		      Code generated is compatible with the		│
   │		      BASIC compiler.					│
   │									│
   │									│
   │									│
   │									│
   │									│
   └────────────────────────────────────────────────────────────────────┘


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       MetaBASIC  (  abbreviated  MB ) is a BASIC preprocessor
	  that converts structured MetaBASIC code into standard BASIC.
	  A MetaBASIC program consists of standard BASIC keywords, and
	  special  MetaBASIC  constructs. A tilde "~", or equivalently
	  the  word  META, differentiates standard BASIC commands from
	  METABASIC commands.

┌──────────────────────────────────┐
│ Data Initialization Structures   │
└──────────────────────────────────┘

	       MB  has borrowed heavily from other languages. The data
	  initialization method is borrowed from FORTRAN, and uses the
	  ~DATA  (  read MetaDATA ) statement. For example, to set the
	  variable PI equal to 3.14159 the MB statement is


		~DATA  PI/ 3.14159/


	  and to set X,Y,Z to 0 use:


		~DATA  X,Y,Z / 3*0 /


┌──────────────────────────────────┐
│ Record Structures		   │
└──────────────────────────────────┘

	       The  record  structures	are  borrowed from Pascal. The
	  following example defines a METArecord SHOES and initializes
	  the members in this record.

		~RECORD SHOES (BROWN,WHITE,GREEN)

		SHOES.BROWN = 1
		SHOES.WHITE = 3
		SHOES.GREEN = 2



	       The  MB	manual	assumes that you are somewhat familiar
	  with these types of constructs, as the examples given in the
	  user	manual	are  not  sufficiently	good  for novices. The
	  manual is otherwise, very well written and readable.

  ┌──────────────────────────────────┐
  │ Separate Compilation	     │
  └──────────────────────────────────┘

	       Separate  subroutines with calling sequences  are  sup-
	  ported. For example, the statement


		~CALL MESSAGE( "HELLO")


	  (in  file  MAIN.BAS ) calls the subprogram MESSAGE ( in file
	  MESSAGE.BAS) to display the string "HELLO".

	       To  convert  the  MetaBASIC  source  file "MAIN.BAS" to
	  standard BASIC type


	  A>mb MAIN;


	  and press the ENTER key. The following is displayed:



	  MetaBASIC, Version  1.0
	  (c) Copyright 1983,	SOFTWARE 128


	  Processing Main Program File: MAIN.BAS
	  Processing Subprogram File: MESSAGE.BAS

	  A>


	       Notice  that subprograms are searched for automatically
	  by the MB preprocessor.

	       The  preprocessor  generates a "hash" or composite file
	  containing   standard  BASIC	which  runs  under  the  BASIC
	  interpreter.

┌──────────────────────────────────┐
│ Cross-reference		   │
└──────────────────────────────────┘

	       If   the  BASIC	interpreter  reports  an  error  in  a
	  composite  file the user need not examine the composite code
	  to determine the source of the error.

	       Instead, exit BASIC, invoke the cross-reference program
	  and  key  the  line  number  of  the	error  reported by the
	  interpreter. The cross-reference program returns the name of
	  the  MetaBASIC file, and the line number in this file of the
	  corresponding statement.

┌──────────────────────────────────┐
│ Error-handling		   │
└──────────────────────────────────┘

	       The  error  messages  displayed by either processor are
	  clear  and coherent. ( This is fortunate as the manual lacks
	  an  ERROR  MESSAGES  section.)  Occasionally	an  error  may
	  generate a flurry of spurious messages.

┌──────────────────────────────────┐
│ Examples			   │
└──────────────────────────────────┘

	       This   review  closes  by  examining  samples  of  code
	  generated  by  the MB preprocessor. I do not claim these are
	  the best or worst examples one could use.

	       The  following examples also show that MetaBASIC source
	  code does not require line numbers.


▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

Example 1:
								 Input
		      ┌──────────────────────────────────┐
		      │    ~DATA  PI/ 3.14159/		 │
		      │    ~DATA  X,Y,Z / 3*0 / 	 │
		      │ 				 │
		      │    OPTION BASE 1		 │
		      │    DIM	 SALES(6)		 │
		      │    ~DATA SALES() / 1,2,3,4,5,6/  │
		      └──────────────────────────────────┘
				      │
				     ███ MB preprocessor
				      │
				      v 			 Output
	  ┌─────────────────────────────────────────────────────────┐
	  │  1 DIM A..#(00000),A..%(00000),A..!(00005),A..$(00000)  │
	  │  2 AAA!=3.14159					    │
	  │  4 BAA!=0						    │
	  │  5 CAA!=0						    │
	  │  6 DAA!=0						    │
	  │ 11 N%=0:FOR I%=0 TO 5:				    │
	  │ 12 N%=N%+1						    │
	  │ 13 IF N%>=1 AND N%<2 THEN A..!(I%)=1		    │
	  │ 14 IF N%>=2 AND N%<3 THEN A..!(I%)=2		    │
	  │ 15 IF N%>=3 AND N%<4 THEN A..!(I%)=3		    │
	  │ 16 IF N%>=4 AND N%<5 THEN A..!(I%)=4		    │
	  │ 17 IF N%>=5 AND N%<6 THEN A..!(I%)=5		    │
	  │ 18 IF N%>=6 AND N%<7 THEN A..!(I%)=6		    │
	  │ 19 NEXT:						    │
	  │ 21 END						    │
	  └─────────────────────────────────────────────────────────┘

	       Very  peculiar code, particularly lines having the form
	  (IF N% >=1 and N% < 2 ).

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

Example 2:

	       In  this  example,  a  main  driver  routine  ( in file
	  MAIN.BAS  )  calls subprogram MESSAGE ( in file MESSAGE.BAS)
	  to display "HELLO".


	      MAIN.BAS				   MESSAGE.BAS
    ┌───────────────────────────────┐	  ┌───────────────────────────────┐
    │  ~CALL MESSAGE( "HELLO")      │     │  ~SUBPROGRAM MESSAGE( MSG$ )  │
    │  END			    │	  │	 PRINT MSG$		  │
    │				    │	  │  ~RETURN			  │
    └───────────────────────────────┘	  └───────────────────────────────┘
			       └────────.───────┘
					│
				       ███ MB preprocessor
					│
					v
	      ┌─────────────────────────────────────────────────────────┐
	      │ 1 DIM A..#(00000),A..%(00000),A..!(00000),A..$(00000)	│
	      │ 2 AAA$="HELLO":GOSUB 00007:                             │
	      │ 4 END							│
	      │ 7 PRINT AAA$						│
	      │ 8 RETURN						│
	      │ 9 STOP							│
	      └─────────────────────────────────────────────────────────┘

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

Example 3:

	       This  example  illustrates  the ~IF.. ~ELSEIF.. ~ELSE..
	  construct.


		      ┌──────────────────────────────────┐
		      │  ~IF ( X = 1 ) THEN		 │
		      │       X = 2			 │
		      │  ~ELSEIF ( Y = 1 )  THEN	 │
		      │       Y = 2			 │
		      │  ~ELSE				 │
		      │       X = 0			 │
		      │       Y = 0			 │
		      │  ~ENDIF 			 │
		      │ 				 │
		      │   END				 │
		      └──────────────────────────────────┘
			       └────────.───────┘
					│
				       ███ MB preprocessor
					│
					v
	  ┌─────────────────────────────────────────────────────────┐
	  │   1 DIM A..#(00000),A..%(00000),A..!(00000),A..$(00000) │
	  │   3 IF NOT((AAA!=1))GOTO 00007			    │
	  │   5 AAA!=2						    │
	  │   6 GOTO 00016					    │
	  │   7 IF NOT((BAA!=1))GOTO 00012			    │
	  │   9 BAA!=2						    │
	  │  10 GOTO 00016					    │
	  │  12 AAA!=0						    │
	  │  13 BAA!=0						    │
	  │  16 END						    │
	  └─────────────────────────────────────────────────────────┘


	       If  a  condition is not met, the entire section of code
	  pertaining  to  that	condition  is skipped. ( Contrast this
	  with	the  C language where a "break" statement must be used
	  to avoid falling through a switch.)

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

Example 4:

	       Running	the  composite	file  (shown below) prints the
	  values  "0"  and  "1",  not "1" and "2". Study the composite
	  file to see why.


	      MAIN.BAS				   BIG.BAS
    ┌───────────────────────────────┐	  ┌───────────────────────────────┐
    │  DIM LIN(3)		    │	  │  ~SUBPROGRAM BIG ( MEM )	  │
    │				    │	  │  DIM MEM(3) 		  │
    │  ~CALL BIG( LIN(1) )	    │	  │				  │
    │  PRINT LIN(1)		    │	  │  MEM(1) = 1 		  │
    │  PRINT LIN(2)		    │	  │  MEM(2) = 2 		  │
    │				    │	  │				  │
    │  END			    │	  │  ~RETURN			  │
    └───────────────────────────────┘	  └───────────────────────────────┘
			       └────────.───────┘
					│
				       ███ MB preprocessor
					│
					v
	      ┌─────────────────────────────────────────────────────────┐
	      │  1 DIM A..#(00000),A..%(00000),A..!(00003),A..$(00000)	│
	      │  5 BAA%=(1):GOSUB 00013:				│
	      │  6 PRINT A..!(1)					│
	      │  7 PRINT A..!(2)					│
	      │  9 END							│
	      │  13 A..!(BAA%+1)=1					│
	      │  14 A..!(BAA%+2)=2					│
	      │  15 RETURN						│
	      │  16 STOP						│
	      └─────────────────────────────────────────────────────────┘

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

Example 5:

	       This example illustrates Random I/O in MetaBASIC.

	       The  file  "FILE" is opened and the METArecord SHOES is
	  written  to this file. ( The METArecord SHOES contains three
	  members: BROWN, WHITE, and GREEN - for monochrome fans.) The
	  same	record	is  then  read and the members BROWN and GREEN
	  displayed.


		      ┌────────────────────────────────────┐
		      │  ~RECORD SHOES (BROWN,GREEN)	   │
		      │ 				   │
		      │  SHOES.BROWN = 1		   │
		      │  SHOES.GREEN = 2		   │
		      │ 				   │
		      │  RECNUM = 6			   │
		      │ 				   │
		      │  OPEN "FILE" AS #1,SHOES           │
		      │ 				   │
		      │  WRITE #1, RECNUM, SHOES	   │
		      │  READ  #1, RECNUM, SHOES	   │
		      │ 				   │
		      │  PRINT SHOES.BROWN		   │
		      │  PRINT SHOES.GREEN		   │
		      │ 				   │
		      │  CLOSE				   │
		      │  END				   │
		      └────────────────────────────────────┘
				      │
				     ███ MB preprocessor
				      │
				      v
	      ┌─────────────────────────────────────────────────────────┐
	      │  1 DIM A..#(00000),A..%(00000),A..!(00000),A..$(00000)	│
	      │  5 AAA!=1						│
	      │  6 BAA!=2						│
	      │  7 CAA!=6						│
	      │  8 OPEN "FILE" AS 1 LEN=8                               │
	      │  9 FIELD 1,4 AS V1.1$,4 AS V1.2$			│
	      │  10 LSET V1.1$=MKS$(AAA!)				│
	      │  11 LSET V1.2$=MKS$(BAA!)				│
	      │  12 PUT 1,CAA!						│
	      │  13 GET 1,CAA!						│
	      │  14 AAA!=CVS(V1.1$)					│
	      │  15 BAA!=CVS(V1.2$)					│
	      │  17 PRINT AAA!						│
	      │  18 PRINT BAA!						│
	      │  19 CLOSE						│
	      │  20 END 						│
	      │  24 END 						│
	      └─────────────────────────────────────────────────────────┘


	       Look  at all those CVS's and MKS$. Nice to forget them,
	  isn't it?

	       Also  note  the two ENDS statements in lines 20 and 24.
	  No  BASIC  programmer  would	do  that (I hope!). If we want
	  luxury, we must be willing to accept certain penalties.

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄



┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       In  summary,  MetaBASIC	is  an	interesting and useful
	  asset for those engaged in writing BASIC code.





		     ┌──────────────────────────────────┐
		     │ File Name:  ██  metabas.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## ODDS.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║			  The  Odds and Evens  Manual			      ║
║									      ║
║		       ( a garage sale of definitions ) 		      ║
║									      ║
║		  ( gathered from the garage of Bill Salkin )		      ║
╚═════════════════════════════════════════════════════════════════════════════╝


	  This	is  actually a glossary that will grow and continue to
	  haunt  us in the coming months. Be popular, be liked by your
	  friends, win the admiration of your boss! Send your words of
	  wisdom  (  and  definitions,	too!  )  for inclusion in this
	  glossary.

┌──────────────────────────────────┐
│ Buffer			   │
└──────────────────────────────────┘

	       A temporary storage area used to compensate for a speed
	  imbalance between a sending and receiving device.

	       Think  of a buffer as a doctor's waiting room. Patients
	  must wait until the doctor can attend to them.

┌──────────────────────────────────┐
│ Chip				   │
└──────────────────────────────────┘

	       A  recent  government  re-design of the spider. Spiders
	  not  complying  with	this design modification may receive 1
	  year in the "can," a 5-fly fine.

	       Actually,  a   thin  silicon  wafer  on	the  order  of
	  one-quarter  inch  by  one-quarter  inch.  It  contains  the
	  equivalent  of  thousands of transistors, and is the bulwark
	  of the technological age.

┌──────────────────────────────────┐
│ 8088 Chip			   │
└──────────────────────────────────┘

	       The  "brain"  of  the  PC is the 8088 chip. I have seen
	  software  for the PC selling for $80.88.  (Who said computer
	  folk don't have a sense of humor? )

┌──────────────────────────────────┐
│ 8087 Chip			   │
└──────────────────────────────────┘

	       The  "personal slide rule."

	       Actually   a  companion	processor  to  the  8088  that
	  specializes  in evaluating mathematical functions with great
	  accuracy and speed.

	       This  chip  does  NOT  come  with  the PC as a standard
	  feature but may be added.

┌──────────────────────────────────┐
│ DOS				   │
└──────────────────────────────────┘

	       Not  the Spanish number 2! DOS can be thought of as the
	  "Director  Of  Services"  for  the  PC.  DOS  interprets and
	  communicates	your  request for service ( such as printing a
	  file	)  to the hardware. It acts on your behalf and shields
	  you from the inner workings of the PC.

	       The  full  meaning  of DOS is DISK OPERATING SYSTEM - a
	  term	as  imposing as it is long. But if you think of DOS as
	  it   was   just   described,	 then  you  have  grasped  its
	  significance to the end user.

	       "DOS"  is  both  a  generic and a specific term. DOS is
	  generic  for	DISK  OPERATING  SYSTEM,  and  when  the PC is
	  discussed it's usually PC DOS.

	       Another	DOS  for  the IBM-PC is called CPM-86. CPM ( a
	  predecessor  of  CPM-86  ) was one of the earliest operating
	  systems  available  for personal computers and is well known
	  in computer circles.

	       These  two operating systems ( IBM DOS and CPM-86 ) are
	  not compatible, and programs written under one will not work
	  on  the  other   without modification. For this reason, when
	  you  purchase software, be certain the product is compatible
	  with your DOS.

	       A  new DOS 2.0 for the IBM XT ( a glorified IBM PC ) is
	  available,  but  it is more "feature" packed and complicated
	  to learn than earlier releases.

	       DOS  2.0  also  has,  in  my  opinion, a potential file
	  integrity  problem.  A prime offender is the "twin filename"
	  problem as indicated in the directory excerpt:


		 BOOKS		  5101	 1-01-80  12:11a
		 METABAS  TXT	 16148	 1-01-80   5:01a
		 1	  BAT	    24	 1-01-80  12:14a
		 METABAS  TXT	     0	 1-01-80   5:01a


	       Yes!  METABAS.TXT  is  listed  twice  in the directory.
	  Which one would you erase? Many times this goes unnoticed as
	  "chkdsk" does not report any error.  Use DOS 2.0 only if you
	  need	its  advanced  features or can afford to possibly lose
	  some files.

┌──────────────────────────────────┐
│ Edlin 			   │
└──────────────────────────────────┘

	       EDLIN  is the word for "misery" in twenty languages and
	  English  is  no  exception.  This  demon  is an archaic line
	  editor  that users should not consider learning.

	       Suggestion:  delete  EDLIN  from  your  DOS  disk,  and
	  purchase  a  quality	word  processor,  or text editor. Also
	  delete Edlin from all instructional courses teaching DOS.

	       IBM  should have supplied, in place of Edlin, a quality
	  full	screen	editor	called	MR.  ED.  Advertising  slogan:
	  "Learning MR. ED is just horseplay!"

┌──────────────────────────────────┐
│ Hard Disk			   │
└──────────────────────────────────┘

	       A  storage device capable of storing immense amounts of
	  information  ( the equivalent of several thousand pages in a
	  book ). The methods used to store and access files under DOS
	  1.0,	1.1,  were not adequate to handle the potential volume
	  of  files on a hard disk. DOS 2.0 uses a hierarchical method
	  by which files can be placed into partitions.

┌──────────────────────────────────┐
│ Hardware			   │
└──────────────────────────────────┘

	       The  tangible aspect of a computer system. Examples are
	  the disk drives, printer, monitor, and system unit.

	       Hardware  and  Software	work  as  a  team  to make the
	  computer run as claimed in the advertisements.

┌──────────────────────────────────┐
│ K				   │
└──────────────────────────────────┘

	       A  "K"  is  1024  bytes.  Just  a little more than 1000
	  bytes. Recall that a byte is a unit of storage equivalent to
	  one  character.  A  completely filled screen ( 25 rows by 80
	  columns ) of text is 2000 bytes or approximately 2K.

	       If  your  PC is a "64K" machine  then you have 64 times
	  1024 = 65536 bytes of storage in RAM.

┌──────────────────────────────────┐
│ Loop				   │
└──────────────────────────────────┘

	       A dog chasing its tail.

	       Actually  a program structure that causes a sequence of
	  instructions to be repeated.

┌──────────────────────────────────┐
│ Modem 			   │
└──────────────────────────────────┘

	       Your  computer's  telephone. It allows your computer to
	  "talk" over the telephone lines to other computers.

	       Example:  Your  computer, with the help of a modem, can
	  send messages to a modem-equipped computer in another state.
	  The	transmission   can  be	captured  immediately  by  the
	  receiving  terminal.	Nothing  lost  in  the	mail,  no late
	  deliveries, no excuses.

┌──────────────────────────────────┐
│ Monitor			   │
└──────────────────────────────────┘

	       A  television-like  device  used  to  view information.
	  There are three main varieties: 1) Monochrome, 2) Composite,
	  and 3) RGB.

	       The  monochrome	monitor  -  called  the  spoiler - has
	  extremely  high resolution and crisply formed characters. It
	  is an excellent choice for word processing. Graphics ability
	  is  limited  to  drawing  horizontal	and vertical lines and
	  special  block  characters. (  Hardware  may be purchased to
	  extend this graphic ability.)  Color is limited to shades of
	  green, and black.

	       A  composite monitor can be either monochrome or color.
	  This	monitor  is a cost compromise between a monochrome and
	  an  RGB. The color fidelity is often not as accurate as that
	  of  an  RGB,	nor  is  the  text  quality as "crisp" as that
	  of a monochrome monitor.

	       The  RGB  monitor  supports  full  color and allows the
	  drawing  of geometric figures, such as an ellipse. It is the
	  type	of  color monitor you would purchase after receiving a
	  large inheritance

┌──────────────────────────────────┐
│ PCjr				   │
└──────────────────────────────────┘

	       A  pint sized PC with few innovative features. It has a
	  memory  size	restricted  to	128K   and does not officially
	  support  the monochrome adapter. Many of the limitations are
	  artificial and imposed to prevent price competition with the
	  PC and PC XT.

	       RUMOR:  Its true purpose is to serve as part of a LAN -
	  local  area  network	-  whereby many users can share common
	  resources  (modems,  hard  disk, etc.) It is not financially
	  feasible for many small businesses to purchase a separate PC
	  or  PC  XT  for each employee. An inexpensive computer, with
	  limited power, but capable of tapping the resource pool is a
	  cost effective approach. Enter the PCjr.

┌──────────────────────────────────┐
│ Protocol			   │
└──────────────────────────────────┘

	       Rules, standards, agreements, or conventions.

	       LAYMAN'S EXPLANATION: You say either and I say EYEther,
	  You  say neither and I say NYther; either, EYEther, neither,
	  NYther, let's call the whole thing off!

┌──────────────────────────────────┐
│ RAM				   │
└──────────────────────────────────┘

	       The   "memory"   or   "scratchpad"  of  your  computer.
	  Information  stored in RAM is lost if power is removed  even
	  temporarily.	As  RAM has no moving parts, unlike a physical
	  disk drive, it is  fast and silent.

┌──────────────────────────────────┐
│ RAM Disk			   │
└──────────────────────────────────┘

	       A  portion  of  RAM  memory  is treated as if it were a
	  physical  disk.  Programs  are loaded into this RAM disk and
	  all  DOS commands that apply to a physical disk apply to the
	  RAM disk.

	       Why  RAM disk?  1) There is no wear on a physical disk,
	  2)  RAM  has	no  moving  parts, so programs and data can be
	  accessed  far faster than on any other storage media, and 3)
	  the  general	noise level of the computer will diminish. The
	  sweet sound of silence is worth the price.

┌──────────────────────────────────┐
│ Software			   │
└──────────────────────────────────┘

	       The  intangible	aspect of a computer system - magnetic
	  spots on the surface of a disk.

	       An  analogy:  music  is to a record as software is to a
	  disk.

	       Hardware  and  Software	work  as  a  team  to make the
	  computer run as claimed in the advertisements.

┌──────────────────────────────────┐
│ User-friendly 		   │
└──────────────────────────────────┘

	       A  magic  potion  that  solves  all  problems  - except
	  reading  the	user's manual. A rough translation is "nice to
	  use." Frequently confused with the term "beginner-friendly."
	  Beginner-friendly  software  is  often  over	protective and
	  becomes tedious and dictatorial to advanced users.

	       Purchase  software that provides a protective shell for
	  the  beginner  and  a  direct  method to use the program for
	  advanced users.

┌──────────────────────────────────┐
│ Word Processor		   │
└──────────────────────────────────┘

	       A  tool oriented to the production of business letters,
	  where appearance is paramount.

	       With  a	word processor corrections to a manuscript are
	  made	on  the  screen  before  the  document is printed. The
	  document  is	printed  only  when  all  errors  in  grammar,
	  punctuation,	and  styling,  etc.  have been removed ( ...at
	  least this is the idea. A few errors always defy detectiom.)
	  This saves paper too.





		     ┌──────────────────────────────────┐
		     │ File Name:  ██	  odds.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## PAS1.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║			      A Question of Size			      ║
║									      ║
║				      by				      ║
║									      ║
║				Richard Levaro				      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘


	       Three   of  the	most  popular  C  Compilers  (Lattice,
	  Computer  Innovations and Digital Research) have implemented
	  so-called  large  memory  models.  Much has been made of the
	  different  memory  models,  but  a qualitative evaluation of
	  their  use has not been published in the more well known (if
	  not  encyclopedic)  trade  press. MS-Pascal (and IBM Pascal)
	  implement  a	"large"  memory model, which we believe is the
	  most appropriate.

┌──────────────────────────────────┐
│ Memory Models 		   │
└──────────────────────────────────┘

	       Because	of  the  segmented  nature  of	the Intel 8086
	  family   architecture,  compiler  designers  must  choose  a
	  particular  memory model or allocation scheme when designing
	  the  code  generation  phase.  The  details  of  how data is
	  stored,  where  code is placed, and calling conventions vary
	  from	 compiler  to  compiler,  but  there  are  four  basic
	  possibilities:


	  1.  Small Model - A single segment is reserved for  code,
	      and  one is reserved for data. Consequently, programs
	      can be no larger than 128K, 64K for data and 64K	for
	      code.  In the early days of the IBM PC and MS-DOS, it
	      was a common misconception (propagated by many of the
	      leading "experts" writing in the  trade  press)  that
	      the IBM Pascal Compiler used this model.

	  2.  Large  Code Model - Multiple segments can be used for
	      code (however, each compiland, e.g., module, unit, or
	      function, can be	at  most  64K),  but  all  data  is
	      restricted  to one segment. This model is used by the
	      MS-Pascal and IBM Pascal compilers. The size  of	the
	      program code is restricted only by the linker (and of
	      course,	available   real   memory),   because  many
	      separately compiled pieces can be linked together.

	  3.  Large  Data  Model - A single segment is reserved for
	      code,  but  multiple  segments  are  used  for  data.
	      Implementations  vary,  but often one segment is used
	      for constants and static variables (pointed to by the
	      DS  register), another segment for the stack (pointed
	      to  by  SS), and the remainder of memory used for the
	      heap (dynamically allocated variables).

	  4.  Large  Model  -  Multiple  segments are used for both
	      code and data; this model is  a  combination  of	the
	      Large Code and Large Data models.

┌──────────────────────────────────┐
│ Advantages and Overhead	   │
└──────────────────────────────────┘

	       What  are  the  relative advantages and overhead of the
	  various  models?  Fundamentally, the impact is in two areas:
	  how  procedures  and	functions  are	called,  and  how data
	  addresses (pointer values) are calculated.

	       There  are  two	ways  to call a procedure: near or far
	  calls.  A  near  call assumes the routine being called is in
	  the  same  code  segment  as	the call instruction. Only the
	  instruction pointer value (in the IP register) need be saved
	  in anticipation of the return. A far call must save both the
	  code	segment  (CS  register) and the instruction pointer to
	  prepare  for	the  return.  The overhead for a far call (and
	  subsequent  return)  is  not much more than for a near call.
	  Therefore,  the  large  code models allow one to write large
	  programs without overwhelming overhead.

	       Large   data   models  involve  a  different  overhead.
	  Basically,  if  data	resides  in  separate segments, both a
	  segment  and	offset must be calculated. Address arithmetic,
	  which is one of the most frequent computations, now requires
	  two	16-bit	 words	instead  of  just  one.  An  inelegant
	  implementation of a large data model can disastrously affect
	  program  performance. The advantage of a large data model is
	  principally  the ability to store very large data structures
	  (for	example,  arrays). It is rarely that a 64K stack space
	  is required.

┌──────────────────────────────────┐
│ MS-Pascal and IBM Pascal	   │
└──────────────────────────────────┘

	       Microsoft  MS-Pascal  and IBM Pascal use the large code
	  model,  but the compiler supports a data type (the ADS type)
	  which  makes	it  possible  to use all available memory. The
	  tradeoff  is	that execution speed is not overwhelmed by the
	  large  data  model  overhead,  but  if  extra  data space is
	  needed, the address type can be used to implement it. In our
	  view,  this is the most sensible solution: In most cases 64K
	  of  data  is	acceptable. Larger data requirements should be
	  regarded as an exceptional case.

	       Using  the  ADS	type  is  very similar to the standard
	  pointer,  except  instead  of  using	the  NEW  procedure to
	  allocate  space  on  the  standard  heap  it	must  be  done
	  directly.   MS-Pascal  Version  3.11,  and  later  versions,
	  support  a  library  function  to  allocate space beyond the
	  standard heap. Space can be allocated using DOS 2.0 function
	  calls as well.

	       The program SPACE ( in file list1.pas on this diskette)
	  shows  how  to use the MS-Pascal ALLMQQ function to allocate
	  space, and the ADS type to access the data structure.

	      The contents of file list1.pas are reproduced below:


{**********************************************************************}
{								       }
{  SPACE  Example illustrating the use of the ADS type for addressing  }
{	  data beyond the 64K data space.  Storage for the record type }
{	  is allocated using the external MS-Pascal function ALLMQQ,   }
{	  and the returned segment address is assigned to the ADS      }
{	  variable.						       }
{______________________________________________________________________}

program space(input,output);

  type
    comdata = record
		msg_no	: integer;
		msg_cnt : integer;
		msg	: lstring(128)
	      end;

  var
    comdata_ptr : ads of comdata;

  function allmqq(no_bytes : word) : adsmem; external;

  begin {space}

    comdata_ptr := allmqq(132);    ! Segment, offset address of record
    comdata_ptr^.msg_no  := 1;
    comdata_ptr^.msg_cnt := 0;
    comdata_ptr^.msg	 := 'Hello World';

    if (comdata_ptr^.msg_no > 0) then
       writeln(output,comdata_ptr^.msg);

   end.  {space}





		     ┌──────────────────────────────────┐
		     │ File Name: ██	  pas1.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## PCUGINTR.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║				 Introduction				      ║
║									      ║
║				      by				      ║
║									      ║
║		     Bill Salkin - Editor of PC Underground		      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ Greetings			   │
└──────────────────────────────────┘

	       PC  Underground ( PCUG ) was developed to complement PC
	  Firing  Line.  It  will  NOT	address  the  programming  and
	  technical  matters  that  are  better  suited  for PC Firing
	  Line.

	       PCUG  will  reflect  the  interests  and  needs	of our
	  readership. The thrust will be in the direction indicated by
	  your response.

┌──────────────────────────────────┐
│ Special Thanks		   │
└──────────────────────────────────┘

	       I  do  not  own	or  have  immediate  access to a color
	  monitor.  But  PCFL  does support color ( under the "Set RGB
	  Colors"   panel   ).  This  is  due  to  the  generosity  of
	  Businessland.  They  allowed me to use their RGB monitor for
	  an unlimited period of time.

┌──────────────────────────────────┐
│ How to Use this Magazine	   │
└──────────────────────────────────┘

	       The  menu  driven  shell  you  are  using  is for those
	  wishing  to  browse  through articles. Standard DOS commands
	  should  be used to print an article. ( At the bottom of each
	  article is the name of the file containing the article.)

	       The  largest file  that can be viewed is currently 64K.

┌──────────────────────────────────┐
│ Distribution			   │
└──────────────────────────────────┘

	       When  sufficient  interest  is  displayed  PCUG will be
	  issued  as  a  magazine  separate from PC Firing Line. Until
	  then, I regard PCUG as an "added value" product to PC Firing
	  Line.

┌──────────────────────────────────┐
│ Articles			   │
└──────────────────────────────────┘

	       The  initial  offering  in  PCUG is the "Odds and Evens
	  Manual,"  and  "The 1-2-3 Advantage." The former offering is
	  actually   a	 glossary,   while   the  latter  discusses  a
	  sophisticated use of the spreadsheet 1-2-3.

	       I  have	also  received	several  suggestions  for  the
	  following introductory columns:


	       1)   1-2-3,

	       2)   BASIC (!),

	       3)   WORDSTAR.

	       4)   ProKey  files for different languages and
		    different applications.


	       Considering   only  the	BASIC  column,	there are many
	  texts  available  that  treat  BASIC for the IBM PC. I would
	  select  four	BASIC texts and use them as reference manuals.
	  Our  introductory  BASIC course would commence, and the book
	  with	the  best section on the topic being discussed will be
	  cited for further study.

┌──────────────────────────────────┐
│ For Color Monitors Only	   │
└──────────────────────────────────┘

	       The  program COLORFUL.EXE on this diskette allows users
	  of  an  RGB monitor to change the foreground, background, or
	  border colors of the screen.

	       When  the  user	exits  this program the colors are NOT
	  reset  to  white  on black. This allows one to find pleasant
	  color combinations, and use them under DOS.

	       The program is invoked by typing COLORFUL after the DOS
	  prompt:

	  A>COLORFUL

	  and pressing the ENTER key.

┌──────────────────────────────────┐
│ Printers			   │
└──────────────────────────────────┘

	       Most  printers  do not reproduce the full IBM character
	  set. In particular, many of the nice graphics displayable on
	  the  IBM monitor ( and used in PCUG ) may print as "garbage"
	  or at least not as expected.

	       The  routine  PRETTY1.EXE  on this diskette, will cause
	  the  printer	to  print  "extended"  graphic characters as a
	  series of asterisks.

	       To  invoke  this  module,  type	PRETTY1  after the DOS
	  prompt:

	       A>PRETTY1


	  and press the ENTER key.


	       A box on the display:


	      ┌──────┐
	      │ Hi!  │
	      └──────┘


	  will print as:


	      ********
	      * Hi!  *
	      ********

┌──────────────────────────────────┐
│ Where to Write		   │
└──────────────────────────────────┘

	  Address all correspondence to:


			  ABComputing
			  P.O. Box 5503
			  North  Hollywood, CA 91616-5503
			  ATTENTION: Bill Salkin


	  (  The  company  name  is pronounced "ABC Computing" but the
	  spelling uses one "C".)


	  Send a S.A.S.E if you wish a reply.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       Your  opinion and interests will strongly influence the
	  direction of PCUG.




		     ┌──────────────────────────────────┐
		     │ File Name: ██  pcugintr.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## PE.TXT

{% raw %}
```
Copyright 1984 by ABComputing
   ┌────────────────────┐
   │  Editor's Review   │
   ┌────────────────────────────────────────────────────────────────────┐
   │									│
   │  Reviewed by	Bill Salkin					│
   │									│
   │  Product Name	Personal Editor 				│
   │  Description	Full screen text editor 			│
   │									│
   │  Overall Rating	Excellent					│
   │									│
   │  Company Name	IBM						│
   │									│
   │  Version		1.0						│
   │  Price		$100						│
   │  Copy Protected	No						│
   │  RAM Needed	Manual states 64K				│
   │  DOS Level 	1.0, 1.1, or 2.0				│
   │  Monitor(s)	Monochrome or Color				│
   └────────────────────────────────────────────────────────────────────┘



   ┌────────────────────┐
   │  Editor's Review   │
   ┌────────────────────────────────────────────────────────────────────┐
   │									│
   │  Manual		Printed in green and black. Readable		│
   │			and thorough.					│
   │									│
   │  Problems		Display of file fragments when a large file	│
   │			( > 3000 lines ) is scrolled.			│
   │									│
   │  Unusual	     1. Max of 20 files in memory for editing,		│
   │  Features	     2. Non-alphabetic keys are user definable, 	│
   │		     3. Disk directory can be called up in a file,	│
   │		     4. When file size exceeds RAM size, a spill file	│
   │			( 128K max ) is created to hold the file.	│
   └────────────────────────────────────────────────────────────────────┘




   ┌────────────────────┐
   │  Editor's Review   │
   ┌────────────────────────────────────────────────────────────────────┐
   │									│
   │									│
   │  Omissions       DOS 2.0 tree structured directories, not		│
   │		      supported at this time.				│
   │									│
   │		      Right justification not supported 		│
   │									│
   │		      Inadequate print function. No method provided	│
   │		      to immediately print any portion of a file.	│
   │		      The part to be printed must be copied to an	│
   │		      empty file, and this file printed.		│
   │									│
   │									│
   │									│
   └────────────────────────────────────────────────────────────────────┘



┌──────────────────────────────────┐
│ Introduction			   │
└──────────────────────────────────┘

	       The  Personal  Editor  (  abbreviated  PE  )  is a well
	  thought   out  and  implemented  full  screen  text  editor.
	  Horizontal  scrolling is supported, all the available RAM in
	  your	PC  can  be  used,  line  and character operations are
	  supported,  the  function  of  non-alphabetic  keys is user-
	  definable,  and  a  maximum of 20 files can be in memory for
	  editing.

	       PE provides so many features that this review will only
	  attempt to capture the "flavor" of the approaches used.

	       When  PE is invoked, and the IBM copyright page passed,
	  the screen appears as in Figure 1.



	     ┌────────────────────────────────────────────┐
	     │ ═══ Top of file ═══			  │
	     │	  -					  │
	     │ ═══ Bottom of file ═══			  │
	     │						  │
	     │						  │
	     │						  │
	     │						  │
	     │						  │
	     │						  │
	     │ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ │
	     │		      1  1  Replace		  │
	     └────────────────────────────────────────────┘

			     Figure  # 1



	       In  Figure  1,  the reverse video line at the bottom of
	  the  screen is called the command line. The area between the
	  "Top  of  file"  and  "Bottom  of  file" markers is the text
	  area.

	       The cursor is initially placed on the command line, and
	  pressing  the  "Esc"  key  alternates  the  cursor  position
	  between the text area and the command line.

	       The dash shown in the text area in Figure 1 will be the
	  position  of the cursor when Esc is pressed. While editing a
	  file,  pressing the Esc key causes the cursor position to be
	  saved  and  the cursor to move to the command line. Pressing
	  Esc again restores the cursor position in the text area.

┌──────────────────────────────────┐
│ Function Key Redefinition	   │
└──────────────────────────────────┘

	       PE   allows   all   function   keys  and  function  key
	  combinations	to be user-defined. This should be regarded as
	  a necessary item for any quality text editor.

	       I  have	reassigned  the  function keys and saved these
	  assignments  in  the file PE.PRO. When PE is invoked it uses
	  the contents of this file to configure the function keys and
	  function key combinations.


	       My PE.PRO file defines the "Home" key as:


		      def home = [top edge][left edge]


				 where


		 def home      =      "define  the Home key to be
				      the    concatenation    of"

		 [top edge ]   =      move  the cursor to the top
				      line of the screen

		 [left edge ]  =      move   the  cursor  to  the
				      leftmost column


	       When  the  Home key is pressed, the cursor moves to the
	  top  line of the screen ( maintaining its original column ),
	  and  then  moves to the leftmost edge of the screen. This is
	  the typical, if not wordy, function of the Home key.

	       This   approach	to  defining  function	keys  is  used
	  throughout PE.


	       Can you guess the function of the following keys?


		      def end	= [bottom edge][left edge]

		      def enter = [begin line] [down]


	      To  define  the  Ctrl-Left,  Shift-F4,  and Alt-R keys I
	  use:

		      def c-left = [left40]
		      def s-f4	 = [split]
		      def a-r	 = [redraw]

┌──────────────────────────────────┐
│ Command Line Usage		   │
└──────────────────────────────────┘

	       Simple  DOS commands such as "erase all.*" are accepted
	  by  PE  but more complicated forms such as "copy a:all.* b:"
	  are not.

	       Further	examples  of commands that can be keyed on the
	  command line are shown in Table 1.


				   Table 1

┌─────────────────────────────────────┬───────────────────────────────────────┐
│	       Example		      │ 	      Function		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ change /this/that/ * *	      │  change all occurrences of "this" to  │
│				      │  "that"  from the cursor line to the  │
│				      │  end of the file.		      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ def c-f1 =			      │  redefine  the Ctrl F1 functions key  │
│				      │  for the current edit session.	      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ dir [d:]			      │  display   the	 directory   of  the  │
│				      │  current or requested drive.	      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ name				      │  assigns,  or  changes,  the name of  │
│				      │  the file being edited. 	      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ ? tabs			      │  display tab settings on the command  │
│				      │  line ( They can then be modified.)   │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ ? margins			      │  display   current  margin  settings  │
│				      │  (They can then be modified.)	      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ ? key <keyname>		      │  display  current  key	 definition   │
│				      │  (The key can then be redefined.)     │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ ? memory			      │  displays available memory in bytes.  │
│				      │ 				      │
├─────────────────────────────────────┼───────────────────────────────────────┤
│ set display			      │  changes  the display of the current  │
│				      │  file. Examples:		      │
│				      │ 				      │
│				      │  s display mono 		      │
│				      │  s display color 40		      │
│				      │  s display color 80		      │
│				      │  s display b/w 40		      │
│				      │  s display b/w 80		      │
└─────────────────────────────────────┴───────────────────────────────────────┘



┌──────────────────────────────────┐
│ Character Block Marking	   │
└──────────────────────────────────┘

	       Most text editors allow a block or group of lines to be
	  deleted,  copied,  or  moved.  PE  has  refined this type of
	  operation to the CHARACTER level.

	       The "artwork"


			     ┌──────────────────┐
			     │	Print  Hello	│
			     │			│
			     └──────────────────┘


	  can be produced by character block-marking the string


			     Print  Hello


	  and overlaying it in the box

			  ┌──────────────────┐
			  │		     │
			  │		     │
			  └──────────────────┘


	  as described next.

	       Move  the cursor to the "P" in print, and press the Alt
	  and  B ( block mark ) keys. The character "P" is highlighted
	  in  reverse  video.  Now move the cursor to the "o" in Hello
	  and press Alt - B, again. The entire phrase "Print Hello" is
	  highlighted in reverse video.

	       Next  move  the	cursor	inside the box. Pressing Alt-O
	  (overlay)  will copy the block-marked string as follows. The
	  character  in the upper left-hand corner of the block-marked
	  area	(  the "P" ) is positioned at the cursor location. The
	  next	character  ( the "r" ) is positioned one column to the
	  right  of the cursor location. This pattern is continued and
	  the entire string is copied. This feature was used to create
	  the artwork in PCFL.

┌──────────────────────────────────┐
│ Line Block Marking		   │
└──────────────────────────────────┘

	       To  copy  or  move  a  block of lines on the screen the
	  first  and last lines of the block are marked. A marked line
	  is  shown  visually  with  a reverse video bar extending the
	  length  of  the line. A block of marked lines has the entire
	  area	between  the  first  and  last lines in reverse video.
	  (This  causes my display to "blush" and can be annoying when
	  large areas are involved.)

	       When  an  area  is  marked,  it	can  be block-deleted,
	  block-copied, block-moved, etc. In my PE.PRO file the F1 key
	  is set to mark the line the cursor is on:


		      def F1 = [mark line]


	       To  copy a marked line to another location I use the F2
	  function key:


		      def f2 = [copy mark][unmark]

┌──────────────────────────────────┐
│ Error Handling		   │
└──────────────────────────────────┘

	       PE  is  marvelously  impervious	to  system  errors. It
	  intercepts  them.  If  you  attempt  to print a file and the
	  printer is off, or read a diskette while the disk drive door
	  is  open,  PE  displays  an  error  message.	This  is  good
	  programming and not included in many software packages.

┌──────────────────────────────────┐
│ Criticisms			   │
└──────────────────────────────────┘

	       I  have	two  criticisms.  They	are  not  errors in PE
	  though.

	       For  no	apparent  reason, PE has difficulty in dealing
	  with	extremely large files. ( The problem may be related to
	  "garbage  collection."  )  For reasonable size files, (<3000
	  lines)  the  screen  scrolling  is  very  fast.  But editing
	  extremely  large files can cause visual fragmentation of the
	  file	being  edited.	(Scrolling  speed  slows  to a gasping
	  crawl,  also.)  The bottom portion of the old screen remains
	  while  the  new top portion is in place. A short time later,
	  the correct bottom part of the display appears.

	       The  problem  is  not  specific to a single large file.
	  Twenty files may be in memory simultaneously for editing ( a
	  powerful feature of PE ). The combined size of all files may
	  aggravate  the  situation and induce visual fragmentation in
	  the file being edited. The benefit becomes a burden.

	       BUT   for   reasonable  file  sizes  the  scrolling  is
	  extremely fast.

	       My  other  complaint  relates  to the deletion of lines
	  from a file.

	       To  illustrate,	suppose we are editing a file with 200
	  lines.  Block-mark  lines 1 through 50, and position line 50
	  at the top of the screen. When these lines are group-deleted
	  the  original  line  51  is  NOT displayed at the top of the
	  screen. The original file's line 100 is. ( 50 lines past the
	  new  first line of the file.)  After deleting a large number
	  of  lines,  the  user  is  greeted  with  a screen having no
	  relationship	to  the  screen  prior	to  the deletion. This
	  aspect of PE is confusing and should be redesigned.

	       I am not aware of other difficulties with PE.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       A  superb editor. Extremely flexible and error free....
	  ....	.....  but  before  rushing to buy PE, you may want to
	  read my future reviews on text editors. There are "many fish
	  in the sea" and it will be my pleasure to examine the "catch
	  of the day" for you.





		     ┌──────────────────────────────────┐
		     │ File Name:	██  pe.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## SPONSORS.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║									      ║
║									      ║
║				   Sponsors				      ║
║									      ║
║									      ║
╚═════════════════════════════════════════════════════════════════════════════╝


	  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
	  ▌			      2034 Blake Street, Berkeley, CA 94704
	  ▌ Blaise Computing, Inc.    (415) 540-5441
	  ▌			      Software developers for programmers and
	  ▌			      system programmers for both Pascal and C.
       ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
       ▌ Businessland, Inc.	   14144 Ventura Blvd, Sherman Oaks, CA 91403
       ▌			   (818) 788-1170
     ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
     ▌				  1033 N. Sycamore Avenue, Hollywood, CA 90038
     ▌ OPAMP TECHNICAL BOOKS	  (213) 464-4322
     ▌				  Computer books for all interests
   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   ▌				P.O. Box 51454-5454, San Jose, CA 95151
   ▌ SCIOPT Enterprises 	(408) 281-0869
   ▌				Engineering and scientific applications for
   ▌				the IBM PC and custom 8087 programming.
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 ▌			     1155 Meridian Avenue, Suite 218
 ▌ TELECON SYSTEMS	     San Jose, CA 95125
 ▌			     (408) 275-1659
 ██████████████████████████████████████████████████████████████████████████████




		     ┌──────────────────────────────────┐
		     │ File Name:  ██  sponsors.txt  ██ │
		     └──────────────────────────────────┘
```
{% endraw %}

## THINKING.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║			      Creative Thinking 			      ║
║									      ║
║				      by				      ║
║									      ║
║			Edward Sweeney and Bill Salkin			      ║
╚═════════════════════════════════════════════════════════════════════════════╝


┌──────────────────────────────────┐
│ The Concept			   │
└──────────────────────────────────┘

	       Considering  the  frequency of prolonged discussions on
	  the  best  key  arrangement for a keyboard (Dvorak, new ANSI
	  standard,etc.   ),  we   are	convinced  that  the  PERSONAL
	  keyboard(tm) has great value.

	       The  PERSONAL  keyboard	(  abbreviated Pk ) allows the
	  user	 to  define  the  meaning  of  each  position  on  the
	  keyboard.

	       Merely  lifting a keycap with one's fingers and placing
	  it in a keycap receptor establishes the function of that key
	  location.  No  equipment or special software is needed. Only
	  the human hand is required to modify the Pk.

	       In  the Pk approach, each key generates a unique signal
	  that	is  captured  by  a  microprocessor. The origin of the
	  signal  is  not  important,  only  the  signal.  The "A" key
	  generates  a certain signal, and another "A" key on the same
	  keyboard generates the same signal.

┌──────────────────────────────────┐
│ Possible Implementation	   │
└──────────────────────────────────┘

	 ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐   ┌─────┐
   ...	 │ Q   │  │ W	│  │....o│  │ R   │   │ T   │  ...
	 │     │  │	│  │.... │  │	  │   │     │
	 └─────┘  └─────┘  └─────┘  └─────┘   └─────┘



	       The keycap has been removed from the "E" key by lifting
	  it  from  the  keycap receptor. A large registration pin and
	  eight  smaller  pinouts  are observed. This exact pattern is
	  replicated in all key receptors on the PERSONAL keyboard.

	       The  pins  that	fit  into  the	registration  hole and
	  pinouts  are	an  integral part of the keyCAP. When a pin in
	  the  keycap mates with the corresponding pinout, this pinout
	  becomes  active  (  "1"  or  "on"  ). If no pin mates with a
	  pinout, the pinout is not active ( "0" or off ).

	       This   series   of  "off",  "on"  signals  generates  a
	  composite signal that identifies the character on the key.

	       As  all	key  receptors are identical, any key receptor
	  can  be  the	origin of this signal. Thus, the function of a
	  location  on	Pk is determined by the pins in the keycap. An
	  extremely flexible approach.

	       The  registration  pin is used to distinguish keys such
	  as  6  and  9.  Eight  pinouts  give a maximum of 255 unique
	  signals.  (  A  keycap with zero pins is not allowed on Pk.)
	  Extensions are obvious.

┌──────────────────────────────────┐
│ Applications & Features	   │
└──────────────────────────────────┘

	  1.   This  keyboard  is always current and ready to meet the
	  standards  of  yesteryear or the future. The Dvorak keyboard
	  is merely a particular arrangement of keys on the Pk.

	  2.   It  can	stimulate  user  experimentation and result in
	  greater user satisfaction.

		 e.g.,	 a  peck  typist  could  arrange  keys
		 alphabetically

		 e.g.,	 an  individual  might desire a bottom
		 row of numerals in addition to a top row

		 e.g.,	 all  vowels  could  be  placed in the
		 middle of the row

		 e.g.,	 Braille keycaps  can  help the blind.
		 When	voice  reproduction  becomes  commonly
		 available,   voice   +  braille  keycaps  can
		 literally open a world hitherto unseen.


	  3.   Special	keys  should  prove  useful. Consider keys for
	  foreign   languages,	 mathematical  symbols,  abbreviations
	  (e.g.,  R.S.V.P, COD), and even a HELP key. "Universal" keys
	  should   be	defined   and	agreed	upon  on  by  computer
	  manufacturers.   (  This  idea  will	probably  never  reach
	  fruition) For example, an INDEX key could list the directory
	  on the current drive on any model or make of computer. There
	  should  not  be  a  need to learn a new command language for
	  each model of computer.

	  4.   Reduction  of  errors in job-specific typing situations
	  by having only needed keys present.

	  5.   Perhaps	frequently  used  keys	should occur more than
	  once on a keyboard ( three ENTER keys? ).

	  6.   Unused  keys  can  be  replaced	with  "inert"  (  non-
	  operational)	keycaps  that  produce	no  functional	output
	  (signal = 255, say ). An application could be to replace the
	  "NUM  LOCK"  toggle  key  with  an  inert  key  to provide a
	  permanent cursor pad.

	  7.   Studies	exist  that  indicate which keys are used most
	  frequently.  Ignore  ( retry, abort? ) the studies! A simple
	  program   can  reveal  the  keys  an	individual  uses  most
	  frequently.

┌──────────────────────────────────┐
│ Conclusion			   │
└──────────────────────────────────┘

	       The  PERSONAL  keyboard	is not a gimmick. It will have
	  significant	value  for  many  individuals  and  can  yield
	  productivity benefits for businesses.

	  MORAL:  Don't  mold  the  person  to  the keyboard; mold the
	  keyboard to the person.





		     ┌──────────────────────────────────┐
		     │ File Name: ██  thinking.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

## WRITEUS.TXT

{% raw %}
```
Copyright 1984 by ABComputing
╔═════════════════════════════════════════════════════════════════════════════╗
║									      ║
║									      ║
║				Please write us!			      ║
║									      ║
║									      ║
╚═════════════════════════════════════════════════════════════════════════════╝

	       This  column  gathers tidbits, comments, questions, and
	  reminders that would otherwise be scattered in PCFL.

	       You  may  wish  to  print  this	file and answer simple
	  questions  on the hardcopy. More extensive answers should be
	  reserved for a separate sheet of paper.

	       (  This	is  a postage paid file - I have enclosed a 20
	  cent stamp for your use! )


				┌──────────┐
				│ 20 cents │
				│**********│
				│U.S Snail │
				│**********│
				└──────────┘

┌──────────────────────────────────┐
│ Tidbits			   │
└──────────────────────────────────┘

	  1.   PCFL  is  developing  a list of products marketed under
	  the FREEWARE(tm) approach. This list will contain the names,
	  addresses,  and  product  descriptions of all such companies
	  notifying us.

	  2.   Syncon, a manufacturer of magnetic media, is publishing
	  INFOSCAN,   a  monthly  guide  to  magazine  articles  about
	  microcomputers.  To  request	your  free  subscription  call
	  (800) 843-9862.

	  3.   January	16, 1984, Computerworld: "ADA nearly ready for
	  IBM  micro."  Alsys,  Inc.,  of Waltham, MA, should have two
	  validated  ADA compilers ready by the end of this year ( one
	  for 8086 systems; the other for Motorola 68000 systems ).

	  4.   The  January  1984  issue  of THE AMERICAN MATHEMATICAL
	  MONTHLY has the article "What is Lisp" by Mitchell Wand. The
	  article  demonstrates how sample Lisp programs may be PROVED
	  correct using mathematical induction.

	  5.   I   want   PCFL	 to   be   available  on  the  SOURCE.
	  Unfortunately,  the  SOURCE  does  not  support the extended
	  character graphics used in PCFL.EXE.

	       Programs  exist to translate EXE modules to HEX format,
	  and  vice  versa,  but  this	is  a  clumsy  approach.  Your
	  suggestions are requested.

┌──────────────────────────────────┐
│ Reminders			   │
└──────────────────────────────────┘

	  1.   PCFL  needs  articles,  book reviews, software reviews,
	  and more. If you could author such a work, then contact:

		     ABComputing
		     P.O. Box 5503
		     North Hollywood, CA 91616-5503
		     ATTENTION: Bill Salkin


	  Our phone number is (818) 509-9002.

	       Contributions  to  any  column  are invited. Especially
	  needed are writers in BASIC, C, FORTH, PASCAL, and the 8087.
	  Articles  on RATFOR and the UCSD-p operating system are also
	  sought.

	  2.   PCFL  does  answer  questions. "FIRE" your questions to
	  ABComputing!

	  3.   Let's  start  a  list of high quality computer products
	  that cost under $100. Send in your contenders. This list can
	  serve as a source for product reviews.

	  4.   As  mentioned  in  the Introduction, some products have
	  documentation that needs "triple by-pass" surgery to make it
	  readable. Send in your list today.

	  5.   Also,  send  your  contenders  for  the BEST documented
	  programs.

	  6.   If  your  company would consider distributing issues of
	  PCFL, contact us.

┌──────────────────────────────────┐
│ Questions			   │
└──────────────────────────────────┘

	  ┌────────────────┐
	  │ Tidbytes	   │
	  └────────────────┘

	  1.   Explain what "structured programming" means to you.

	  2.   How  do	you determine the name of a subroutine? I have
	  seen	"retrieve_file,"  "get_file,"  "get_file_and_key," and
	  "find_file."  The  "name  it  -  based on its function" is a
	  standard  approach, but it isn't always successful, as these
	  illustrations  show.	Anyone	for  sub_1, sub_2, sub_3, etc?
	  (That is, use a numeric sequence.)

	  3.   It  is  generally  regarded  as	a  bad practice to use
	  "goto"  statements  in  a  program.  Do  you agree with this
	  sentiment? Why?

	  4.   When  in 80X25 text mode on a color monitor, writing to
	  the  video  buffer can cause "snow." The first issue of PCFL
	  waits  for  the  start  of the "vertical retrace," turns the
	  video beam off, writes to video ram, and then turns the beam
	  on.  This  eliminates  the  "snow" but unfortunately impairs
	  scroll speed.

	       Future  issues  of  PCFL  may wait for the start of the
	  "horizontal  retrace,"  write one character, and continue in
	  this	manner	until an entire panel is moved into video ram.
	  Test	cases  indicate  that this approach can furnish faster
	  scrolling than by waiting for the vertical retrace.

	       Can  you suggest other methods for reducing "snow" that
	  will not impair the scrolling?

	  5.   BASIC  is a commonly used computer language despite the
	  criticism it has received from many parties. Why is BASIC so
	  popular?

	  6.   PCFL  will develop into a project development magazine.
	  What projects would you like us to design?

	  7.   What  programs  would  you  like  to see in our GRABBAG
	  section?

	  ┌────────────────┐
	  │ Hardware	   │
	  └────────────────┘

	  8.   How much RAM does your PC have?

	       ______ K


	  9.   Do you use single- or double-sided drives?

	       Single ______	  Double ______

	  ┌──────────┐
	  │ Columns  │
	  └──────────┘

	  10.  Which column in PCFL did you find the most interesting?
	  The least interesting?

	  11.  What new columns would you like us to consider?





		     ┌──────────────────────────────────┐
		     │ File Name:  ██  writeus.txt  ██	│
		     └──────────────────────────────────┘
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0159

     Volume in drive A has no label
     Directory of A:\

    0        BAT        24   1-01-80  12:16a
    1-2-3    TXT     10999   1-01-80   3:21a
    8087     REV      8494   1-01-80   1:38a
    ADA1     TXT      9124   1-01-80  12:05a
    ADA1CMP  REV     11383   1-01-80   2:06a
    ASM1     TXT     17467   1-01-80   1:07a
    BIGDEAL  ASM      1441   1-01-80   3:21a
    C1       TXT      5087   1-01-80   2:28a
    COLORFUL EXE      2176   1-01-80   3:19a
    CPYRIGHT TXT      1311   1-01-80  12:13a
    GO       BAT        38  10-19-87   3:56p
    DEBUG    PAT        94   1-01-80   1:46a
    DOS1     TXT     10141   1-01-80  12:04a
    DOS2     TXT      2526   1-01-80   2:07a
    DOS3     TXT     26984   1-01-80  12:21a
    FORT1    TXT      6687   1-01-80  12:52a
    GRABBAG  ASM     21189   1-01-80   1:30a
    GRABBAG  EXE      1664   1-01-80   3:03a
    INTRO    TXT     11118   1-01-80  12:22a
    LISP1    TXT     15377   1-01-80  12:54a
    LIST1    ADA      4596   1-01-80  12:53a
    LIST1    ASM      6301   1-01-80   2:39a
    LIST1    C        6037   1-01-80   2:54a
    LIST1    PAS      1250   1-01-80   3:09a
    MEMORY   TXT     18734   1-01-80  12:20a
    METABAS  TXT     13638   1-01-80   2:24a
    ODDS     TXT     11768   1-01-80  12:37a
    PAS1     TXT      6994   1-01-80   1:39a
    PATCH2   BAT       633   1-01-80   1:45a
    PCFL     EXE      7552   1-01-80   2:56a
    PCUGINTR TXT      4992   1-01-80  12:05a
    PE       TXT     13346   1-01-80   1:03a
    PRETTY1  COM       223   1-01-80   3:07a
    SPONSORS TXT      1695   1-01-80   2:55a
    THINKING TXT      5426   1-01-80   1:04a
    TXT      ADS     23109   1-01-80  12:11a
    WRITERS  GDE      2840   1-01-80  12:37a
    WRITEUS  TXT      5783   1-01-80   1:11a
    GO       TXT       694  12-02-88   8:47a
    FILES159 TXT      1356  12-16-88   2:55p
           40 file(s)     300291 bytes
                               0 bytes free
