---
layout: page
title: "PC-SIG Diskette Library (Disk #1531)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1531/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1531"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL MODULATING PRINTING FILTER"

    TPMPF prints Turbo Pascal source code files in an easy to read formatted
    outline.  TPMPF first prints the filename and the file's creation date
    at the top of the page and then proceeds to print the formatted source
    code.
    
    Procedure and function names are emphasized and underlined, index
    numbers are printed on the right side of the page, global variables are
    double-striked, and local variables are italicized.  After printing the
    source code, TPMPF will print a listing of procedures and functions
    with their index numbers.  You can elect to create source code files
    stripped of one or both comment types allowed in Turbo Pascal.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1531.TXT

{% raw %}
```
Disk No: 1531
Program Title:  TURBO PASCAL MODULATING PRINTING FILTER
PC-SIG version 1

TPMPF prints Turbo Pascal source code files in an easy to read formatted
outline.  TPMPF first prints the filename and the file's creation date
at the top of the page, and then proceeds to print the formatted source
code.

Procedure and function names are emphasized and underlined, index
numbers are printed on the right side of the page, global variables are
double-striked, and local variables are italicised.  After printing the
source code, TPMPF will print a listing of procedures and functions with
their index numbers.  You can elect to create a compilable source code
file stripped of one or both comment types allowed in Turbo Pascal.

Synopsis: Prints Turbo Pascal source code files in an easy to read
formatted outline.  Can also strip comments from code.

Usage:  Programming/Turbo Pascal Utility/Source Code.

Special Requirements:  Epson FX or MX, IBM Proprinter, Panasonic
1080/1090 series, or an Okidata 192/193 printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00 plus $1.00 shipping.

Author: Dennis DiBart

File Descriptions:

PRINTPAS DOC  Documentation.
PRINTPAS EXE  Main program.
README        Short introduction.
NONSENSE PAS  Sample source code.

The PC-SIG Library
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║    <<<<  Disk No 1531 TURBO PASCAL MODULATING PRINTING FILTER  >>>>     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type PRINTPAS (press enter)                       ║
║                                                                         ║
║ To view the documentation on your screen, type VIEW (press enter)       ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PRINTPAS.DOC

{% raw %}
```
            TURBO PASCAL MODULATING PRINTING FILTER

The Turbo Pascal Printing Filter is designed to improve the readability
and usefulness of printed Turbo Pascal (TP) source code. This is done
by utilizing the printing commands available on most dot matrix printers
commonly used with PC's. The source code file is not affected in any way,
although an additional file may be created, stripped of comments, if you
choose. The program may be run from a command line or you may be prompted
by the program. Printing output is through the lpt1 parallel port.
To properly use this printing filter (TPMPF), a few guidelines must be fol-
lowed in writing source code. These guidelines will be highlighted as the
operation of TPMPF is outlined below. TPMPF assumes normal pascal syntax.

Using the Command Line Input With Switches ("/"):
After typing TPMPF's filename, you may list the filename to be processed
with any necessary path preceeding it in dos format. If the filename excludes
a period and extension, ".pas" will be assumed. Other parameters may be
added as desired, separated by spaces (or tabs). To change a later parameter,
the earlier ones must be listed. The parameter order is:
              a)path with filename
              b)printer number (default to Epson FX)
              c)create comment stripped file  (default is no creation)
              d)modify global var before main program  (default is yes)

Set your printer to "top of form" before starting TPMPF.

Example: prntpas  /b:\pascal\testprog  /3
TPMPF's executable filename is prntpas, it is located on drive "b" in sub-
directory "pascal\". The program to print is testprog (.pas) and is to be
printed with printer type #3. No comment stripped file is created and global
variables are modified throughtout the source code.

Using Prompt Input:
To become familiar with TPMPF, just type its filename, it will ask you
for inputs, displaying values to be used on the command line when desired.
Set your printer to "top of form" before entering printer type.
If TPMPF can't find source code file, you will be reprompted for input.

TPMPF Operation:
After getting preliminary information from the user, through a command line
or by prompting, the pascal source code file is retrieved and the printer is
initialized. Printing is started with a heading of the current date/time. Then
the filename is printed with its directory listing of date/time.
TPMPF next starts processing the code for procedure and function
names, until the body of the main program begins. The comment {main program}
or {MAIN PROGRAM} should be written at the "begin" of the main program.
Note there is only one space between the comment brackets and that is between
the two words.

    ***********INCLUDE "{MAIN PROGRAM}" or "{main program}" at***********
            *********BEGIN of the MAIN PROGRAM BODY************

All procedure/function declarations must start with the upper case word
"PROCEDURE" or "FUNCTION".

   *********USE "PROCEDURE" or "FUNCTION" in DECLARING THEM**********

After collecting these identifiers, the program starts from the begin-
ning to print the source code, emphasizing+underlining the procedure/
function names. The index number of the name will be printed as a com-
ment on the right edge.It also looks for variables local to these pro-
cedures/functions. The printing of these variables are modulated (us-
ually italics) in the body of the procedure/function they exist in.
In the declaration of them, there must be the word "var" or "Var" on
a separate line (comments excepted) before any local variables are listed.

    ********DECLARE LOCAL VARIABLES WITH "Var" or "var" on a***********
       *********SEPARATE LINE BEFORE LISTING IDENTIFIERS***********

Global variables must be declared with the word "VAR" on a separate line
(comments excepted) before any variables are listed.

        ********DECLARE GLOBAL VARIABLES WITH "VAR" on a***********
       *********SEPARATE LINE BEFORE LISTING IDENTIFIERS***********

Global variables will be printed in double strike form in the main program.
If you choose, they will not be highlighted in the procedures and functions
(the default is to highlight them throughout the source code).

TPMPF will keep a tally of "begin" and "end" on the right margin, looking
for the words "begin", "Begin", "BEGIN", "end", "End", and "END". By tallying
with "begins" adding and "ends" substracting from an index, you can more
easily decipher the compound sentence logic in your code. All procedures/
functions should begin/end with an index of one.

       ********USE LOWER ONLY, UPPER ONLY, or FIRST LETTER ONLY********
              *******UPPER CASE for "BEGIN" and "END"********

Special case on tallying begins and ends:
A few TP words have implicit "begin" and an explicit "end". Tallying is
done as if both were explicit. When using the "case of" statement, both
these words must be written on the same line for TPMPF to sense an implicit
"begin".
           *******"Case of" must appear on the same line********

After printing the source code, TPMPF will print a listing of procedures
and functions detected in source code with index numbers. If the code
is written with only uppercase "procedure" and "function" in declar-
ations, then you can use the find-string feature of TP and the index numbers
of this listing to easily move about your code while working in TP editor.

TPMPF will compress printing of comments, of type "{ }" and "(* *)".  The
former will be printed at 12 or 15 cpi if your printer supports this (other-
wise it will be printed at 17 cpi). The latter will be printed at 17 cpi.
You may request that a source code disk file be created of your code strip-
ped of one or both of these code forms. Using "(* *)" for your skipped code
and "{ }" for programmer comments will enable you to conveniently strip off
one and retain the other. If you have special 'in-house' comments, they
may be enclosed in "(* *)" and stripped off with the code before the
code is 'released'.

To clarify TPMPF's operation, a short "nonsense" pascal program is included
to print using TPMPF.

Registration:

You are free to use TPMPF for up to a month before you should register.
You are free to make copies and distribute it in combination with accompanying
documentation.

The cost is $15 plus $1 for shipping.

By registering, you will receive:

a) The current updated version of TPMPF plus information on constructing
your personalized printer command files for use by TPMPF. To help you
work out command files for your printer, to produce personally tailored
printing results, a test program (with source code) will be included.
For convenience, you may request the default printer type be other than
Epson FX.

b) For the registered program, the max # of procedures and functions that
may be detected is = 60. (The unregistered program is 30.) If desired, you
may request another max value.

c) A second updated version will have a default to printer type "8", for
use with an external CMD file.

d) Both updated, registered versions of TPMPF will include the  provision to
divert the modulated printing text to a disk file. Diverting the printing
text will greatly speed up the program's operation and enable you to use
"print.com" in DOS, a crude but functional 'time-share' utility. As you
probably know by now, printing a long text file on a dot matrix printer can
take a while. Since the running time for TPMPF is limited by how fast your
printer can print output, putting the output to a disk file makes TPMPF
run much faster. By using "print" in DOS, you can get your printed output
of modulated source code while doing other work on your PC.

e) Registered versions of TPMPF include a provision to print out only
the procedure/function table with indices. I often use this table to
maneuver around a large source code program with the help of "search" in
the TP editor.

f) As a registered owner you also have the privilege of receiving program
support. I can be reached at the address below or if you are connected
to the "WELL" (a San Francisco bay area 'lectronic computer network),
my user i.d. is "dld" (use lower case). The phone number for the WELL
is (415)-332-6106.

g) As a registered owner, you may request modifications to TPMPF to meet
special needs and styles. The cost for such modifications naturally depends
on how much reworking is necessary. In replying to such requests, I will
state the cost and time estimate for doing the modifications.

My address for registration and support is:

                 Dennis DiBart
                 1820 San Benito St.
                 Richmond, Ca. 94804

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1531

     Volume in drive A has no label
     Directory of A:\

    FILE1531 TXT      1442   8-10-89  10:29a
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       694   8-10-89  10:30a
    MANUAL   BAT       147   8-10-89  10:31a
    NONSENSE PAS      2931   2-01-89   9:27a
    PAGE     COM       325   1-06-87   4:21p
    PRINTPAS DOC      8824   1-27-89   6:08a
    PRINTPAS EXE     36896   2-01-89   9:23a
    README            1224  10-28-88   8:15p
    VIEW     BAT        44   8-10-89  10:30a
           10 file(s)      52565 bytes
                          104448 bytes free
