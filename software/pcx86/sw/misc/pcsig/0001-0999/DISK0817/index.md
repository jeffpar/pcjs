---
layout: page
title: "PC-SIG Diskette Library (Disk #817)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0817/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0817"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO C TUTORIAL 2 OF 2 (ALSO 816)"

    If you are a programmer in C or other programming languages and have
    been thinking about moving up to Turbo C, TURBO C TUTORIAL can help
    open the door.
    
    TURBO C TUTORIAL will teach you the basic structure of the C
    language.  Turbo C is not really a beginner's language and the author
    assumes you are familiar with some other programming languages but know
    nothing about C. The tutorial starts by explaining the C language and
    by the time you have completed the lessons you should be very familiar
    with Turbo C.
    
    Included are over 60 C source code files, which are to be used
    with the tutorial.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMPILER.DOC

{% raw %}
```
Coronado Enterprises Turbo C TUTOR (ver 1.50)      Feb 1, 1988

COMPILER.DOC file

This tutorial is written specifically for the Turbo-C compiler
by Borland International.  It is written for the first release
of that particular compiler, and many of the topics discussed
refer to the User's Guide and Reference Guide for that particular
release.  For that reason, when Borland releases a new version,
some of the page numbers may be in error for the new release, but
the topics will still be useable and valid.  It is written to
teach you how to read and write Turbo C programs but even more
important, it is intended to teach you the vocabulary of the C
language so that you can intelligently read the literature about C.

Due to the ease of use of the Integrated Environment version of
Turbo C, It will be used exclusively by this tutorial.  You can
use the Command Line version of Turbo C with this tutorial, but
all notes in the tutorial will describe use of the Integrated
Environment version.



******** Note - Note - Note - Note - Note - Note - Note *********

All of the files in the Coronado Enterprises Turbo C tutorial are
designed to work with the Turbo C compiler with all options left
in the default mode (ie - the way the compiler comes from the
factory), and any changes may affect the way some of the example
programs work.  For example, if you were to change the number of
significant characters used for an identifier to 4, the program
named SCOPE.C in chapter 5, would have all 3 functions named the
same, namely "head", and the program would not work.  You would
actually have other problems with this change, but they will not
be commented on here.  Other kinds of errors are also possible, so
it would be best that you simply use the Borland defaults for the
duration of the tutorial and when you have gained experience with
C, customize your compiler to suit your own taste.




****************** Suggested Hard Disk Setup *********************
The Turbo C User's Guide has complete instructions describing
how to set up your system for proper use.  Following the direc-
tions given will result in the following directory setup if you
are using a hard disk.  Some of the files have been omitted in
this suggested setup to reduce the clutter in the TURBOC directory.
This will reduce the confusion over extra files as you work your
way through the tutorials.

Note that there are slight differences in using version 1.0 and
1.5 of TURBO C.  The differences will be pointed out in the follow-
ing descriptions of setup and use.

      ********* TURBO C version 1.0 **********
   TURBO C disk 1 - Integrated Development Env.
   TURBO C disk 2 - Command Line/Utilities
   TURBO C disk 3 - Header Files/Libraries/Examples
   TURBO C disk 4 - Libraries/Examples

      ********* TURBO C version 1.5 **********
   TURBO C disk 1 - Integrated Development Env.
   TURBO C disk 2 - Command Line/Utilities
   TURBO C disk 3 - Header Files/Libraries
   TURBO C disk 4 - Libraries
   TURBO C disk 5 - Examples


C:\TURBOC\
    TC.EXE                  /* From Turbo C disk 1              */
    TCCONFIG.TC             /* You make this file - See below   */
    TCHELP.TCH              /* From Turbo C disk 1 (ver 1.0)    */
    TCHELP.TCH              /* From Turbo C disk 5 (ver 1.5)    */
    *.*                     /* From Turbo C Tutor SOURCE disk   */

C:\TURBOC\INCLUDE\
    *.H                     /* From Turbo C disk 3              */

C:\TURBOC\INCLUDE\SYS\
    STAT.H                  /* From Turbo C disk 3 \SYS\ subdir.*/

C:\TURBOC\LIB\
    *.OBJ                   /* From Turbo C disk 3              */
    *.LIB                   /* From Turbo C disk 3              */
    *.OBJ                   /* From Turbo C disk 4 - optional   */
    *.LIB                   /* From Turbo C disk 4 - optional   */

The *.OBJ and *.LIB files from disk 4 are needed only if you wish
to use additional memory models.  You only need the "Small" memory
model to run all of the programs included in the Coronado Enter-
prises Turbo C tutorial.

After creating the subdirectories listed above and loading them
with the files listed, change to the TURBOC directory and create
the TCCONFIG.TC file by following these instructions (note that
the instructions are given on page 16 of the Turbo C User's guide
but they are somewhat cryptic for the beginner).

1.   TC<return>                  This loads the TURBO-C compiler
2.   O                           Selects "Options"
3.   E   (version 1.0)           Selects "Environment"
3.   D   (version 1.5)           Selects "Directories"
4.   I                           Selects "Include directories"
5.   \TURBOC\INCLUDE<return>     Sets directory for include files
6.   L                           Selects "Library directory"
7.   \TURBOC\LIB<return>         Sets directory for library files
8.   <Esc>                       Returns to "Options" menu
9.   S                           Selects "Store options"
10.  <return>                    Stores file named "TCCONFIG.TC"
11.  <Esc>                       Return to the TURBO-C main menu




To run your first program.  (This assumes FIRSTEX.C has been copied
into the \TURBOC\ directory from the tutorial SOURCE disk.)

1.   TC<return>                  Loads the Turbo C compiler
2.   F                           Selects "Files"
3.   L                           Selects "Load"
4.   <return>                    Lists all files *.C
5.   Position cursor on FIRSTEX.C
6.   <return>                    Loads FIRSTEX.C
7.   Alt-R                       Compiles and runs FIRSTEX





**************** Suggested Dual Floppy Disk Setup *****************

The Turbo C User's Guide has very sketchy information on how to set
up the system for use from two floppies so the following information
is given to get you started.  As you gain experience with the C lan-
guage, you can add features and move files around to make it more
convenient to use.  The setup given here will result in the source
files and executable files residing on drive B.  You will develop a
more convenient system soon, but this setup will get you started.
You will find that you will have to stop often and erase the *.OBJ
and the *.EXE files that are generated by Turbo C or your disk will
fill up with these extra files.

Format a disk with the system on it (ie - FORMAT A:/S) and put the
following files on it for your drive A disk.

    TC.EXE                  /* From Turbo C disk 1              */
    TCCONFIG.TC             /* You make this file - see below   */
    TCHELP.TCH              /* From Turbo C disk 1 (ver 1.0)    */
    TCHELP.TCH              /* From Turbo C disk 5 (ver 1.5)    */
                            /* Note - You will probably have    */
                            /* room for an AUTOEXEC.BAT file on */
                            /* this disk also.                  */


Format a disk without the system, make the following directories
on it, and add the following files to it in their respective dir-
ectories. This will be the disk for drive B.  You will put a few
of the source files from the Coronado Enterprises tutorial on this
disk in the root directory.

\
    *.C                     /* From the Turbo C Tutor SOURCE disk */

\INCLUDE\
    *.H                     /* From Turbo C disk 3                */

\INCLUDE\SYS\
    STAT.H                  /* From Turbo C disk 3                */

\LIB\
    COS.OBJ                 /* From Turbo C disk 3                */
    CS.LIB                  /* From Turbo C disk 3                */
    EMU.LIB                 /* From Turbo C disk 3                */
    FP87.LIB                /* From Turbo C disk 3                */
    MATHS.LIB               /* From Turbo C disk 3                */


After creating the disks as listed above, install the disks in
drive A and drive B and boot up the computer on drive A.  You
must then create the TCCONFIG.TC file by following these instruc-
tions (note that the instructions are given on page 14 of the Turbo
C User's guide but they are somewhat cryptic for the beginner).


1.   TC<return>                  This loads the TURBO-C compiler
2.   O                           Selects "Options"
3.   E  (version 1.0)            Selects "Environment"
3.   D  (version 1.5)            Selects "Directories"
4.   I                           Selects "Include directories"
5.   B:\INCLUDE<return>          Sets directory for include files
6.   O                           Selects "Output directory"
7.   B:\<return>                 Sets directory for output files
8.   L                           Selects "Library directory"
9.   B:\LIB<return>              Sets directory for library files
10.  <Esc>                       Returns to "Options" menu
11.  S                           Selects "Store options"
12.  <return>                    Stores file named "TCCONFIG.TC"
13.  <Esc>                       Return to the TURBO-C main menu
14.  F                           Selects the "File" menu
15.  L                           Selects the "Load" submenu
16.  B:*.C<return>               Selects the B drive for files
17.  <Esc>                       Return to the "File" menu
18.  <Esc>                       Return to the TURBO-C main menu

Note that steps 14 through 16 must be performed once each time the
Turbo C system is started to tell the system where to find the
working files.

To run your first program.  (This assumes FIRSTEX.C has been copied
into the root directory from the tutorial SOURCE disk.)  Load the
two disks into the computer and boot up the system.

1.   TC<return>                  Loads the Turbo C compiler
2.   F                           Selects "Files"
3.   L                           Selects "Load"
4.   B:*.C<return>               Lists all files *.C
5.   Position cursor on FIRSTEX.C
6.   <return>                    Loads FIRSTEX.C
7.   Alt-R                       Compiles and runs FIRSTEX




**************** Suggested Single Floppy Disk Setup ****************

In order to use the Turbo C compiler with a single floppy disk,
set up two disks as noted for the Dual Floppy Disk system.  Use the
disk designated for drive A above to boot up the computer and perform
steps 1 through 13 given above, leaving off the drive designation for
drive B in steps 5, 7, 9, and 16.

To run the system, use the disk designated for drive A for booting
and loading the TC system, then install the other disk as the work-
ing disk.  You will have all of the capabilities of the dual drive
system except for the "HELP" facility and the ability to run an oper-
ating system shell from within the Turbo C Integrated environment.

```
{% endraw %}

## FILES817.TXT

{% raw %}
```
Disk No  817
Program Title: TURBO C TUTORIAL version 1.50 (Disk 2 of 2)
PC-SIG version 1.5
 
    TURBO C TUTORIAL teaches the basic structure of the C language. TURBO C
is not really a beginners language so the author assumes you are familiar
with other programming languages. The tutorial starts out explaining the C
language and by the time you have completed the lesson you should be very
familiar with TURBO C.
 
Usage: Educational
 
System Requirements: 128K memory and a printer.
 
How to Start: Type PRINTALL (press enter).
 
Suggested Registration: $10.00
 
File Descriptions:
 
READ     ME   How to start.
AMORT         Source file.
COMPILER DOC  Compiler documentation
DEFIN    H    Definitions of files.
HELP          Help file.
LIST     EXE  Program used to print the source files.
LIST     PRJ  Source code for LIST.EXE.
PAYMENT       Source file.
PRINTALL BAT  Batchfile to print the source files.
STRUCT   DEF  Structure definitions
TEST          Test program.
TEST     BAT  Test batch file.
VC       DOC  Documentation for VC.EXE
VC       EXE  Visial Calculator program.
VC       PRJ  Source code for VC.EXE.
???????  C    TURBO C source file (78 files).
 
PC-SIG
1030D E Duane Avenue
Sunnyvale CA. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk #817 TURBO C TUTORIAL Disk 2 of 2  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the tutorial to your printer type: PRINTALL (press enter)       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## VC.DOC

{% raw %}
```
              The Visual Calculator - Version 1.10

        The visual calculator was written to be used for quick
     calculations of the variety that would ordinarily be done
     with a hand held calculator. There is no allowance for
     programming loops, or indirect variables, or any of the
     other facilities of a modern programming language. There
     are no complications either, and this program should not
     require more than a few minutes for the experienced com-
     puter user to learn to use, and only slightly longer for
     the person inexperienced with computers.

        It is suggested that you slowly run through the tutor-
     ial first, performing the operations suggested, then read
     the following comments for a description of the visual
     calculator. This program is intended to be much more comp-
     rehensive than the little on-screen calculators that have
     become popular, but it is not memory resident. Due to the
     expected future popularity of such programs as "Windows",
     this program can be as convenient as the present memory
     resident programs.


                The Visual Calculator Tutorial

     1. Copy all files to another working diskette with your
        operating system or to a single directory on your hard
        disk.

     2. Type VC <return>
           You will get the beginning screen containing the vari-
        able boxes and the help box at the top. The center of the
        screen contains the transcript box, and at the bottom you
        will find the Input box.

     3. Type A = 123.45 <return>
           You will find that the value is displayed in the top
        box and the value will also be displayed at the left of
        the input equation in the transcript box.

     4. Type B = SQRT(A) <return>
           You will find the square root of A displayed in both
        places next to the variable B. You may have noticed that
        the system doesn't care if you use upper or lower case,
        it forces it to upper case. You now have defined some
        values for the variables A and B.

     5. Type D = 1.23*SIN(SQRT(1.2345 + B*B/A)) <return>
           Spaces between variables don't matter and you can put
        them in where you desire to make it look nice. If you get
        an error message, simply use the left and right cursor
        keys along with the delete key to fix up the error and
        hit the return again. You don't even have to be at the
        end of the line to hit the return.

     6. Hit the F6 key then <return>
           The F6 requests a file to be read in and if you don't
        specify a filename, it reads in the file named "HELP".
        This would be a good place to store a list of your other
        files in the same manner as this file.

     7. Hit the F6 key then type AMORT <return>
           This reads in the file named "AMORT" and calculates
        each line as it reads it in. Notice that it also changed
        the names of the variables that it uses to make them more
        meaningful to you.

     8. Type PRINC = 30000 <return>
           This changes the amount of the loan. We would like to
        recalculate the payment which we will in the next few steps.

     9. Move the arrow up to the line that starts "PMNT=..." by
        using the up and down arrow keys. When the arrow is point-
        ing at the line in question,...

    10. Hit the F9 key.
           This moves the line pointed at, by the little arrow,
        into the input box where it can be modified or used again
        as is.

    11. Hit the <return> key.
           This will recalculate the payment based on the new
        principal and the old interest rates and time of repay-
        ment. These could also be changed and the payment
        recalculated.

    12. Make sure your printer is ready and hit the F3 key.
           This will cause a "Print on" message to be printed on
        your printer and a little "Print" message to be displayed
        in the upper right of your screen. All equations and the
        results will be printed for a hardcopy of your calculating
        session.

    13. Hit the F6 key again
           You will get another prompt for a file name.

    14. Type PAYMENT <return>
           This file will be read in that will give you the results
        of your mortgage after the first payment. The results will
        also be printed out.

    15. Hit the F6 key again and <return>
           The last file read in will be reused again and the result
        of making the second payment will be displayed on the moni-
        tor and the printer.

    16. Repeat step 15 three or four times.

    17. Hit the F1 key.
           A help screen will appear describing the various math
        functions available. They can be nested to whatever level
        you desire.

    18. Hit the F2 key.
           A help screen will appear with a very brief description
        of the system functions available.

    19. Hit the "Home" key.
           You will be immediately transported to the very top of
        the transcript where the welcome message was originally
        seen. The Pgup, Pgdn, Home, and End keys will get you
        through the transcript window very quickly.

    20. Move the little arrow to the line that starts "# A-PRINC",
        and hit the F4 key once.
           You will see that the asterisk appears in front of the
        line. This will "mark" the line. Continuing to hit the F4
        key will toggle the asterisk on and off.

    21. Move the arrow to the line that starts "# E-EQUITY" and mark
        this line too.

    22. Hit the F5 key
           The system is now prompting you for a file name to
        output to.

    23. Type STUFF <return>
           This is simply a filename. Any valid filename could be
        used. All lines in the transcript box that are "marked"
        will be output to the file "STUFF".

    24. Hit the F6 key and type STUFF <return>
           All of the lines that were just output will be read in
        and all calculations will be done.

    25. Hit the F3 key if the printer is still on.

    26. Hit the F6 key and <return>
           The file will be read in again without printing.

    27. Hit the F10 key and answer the prompt with Y to end the
        session.

    28. Type VC <return> again to restart the program.

    29. Hit the F6 key, type TEST <return>
           A file with 50 lines will be read in and all calcu-
        lations performed as an example of the kinds of equations
        that can be evaluated.

    30. Type the following; # I-D J-O K-H L-X <return>
           This tells the system that we want the variable "I" to
        print out in Decimal notation, the variable "J" to print
        out in Octal notation, and "K" and "L" to print out in
        HeXadecimal notation. (Note - the # must be in the first
        column.)

    31. Type I = 12345 <return>
           The variable I will be displayed in all three notations
        in the top box and in decimal notation in the transcript
        box.

    32. Type J = 12345 <return>
           The variable J will be displayed in Octal notation in
        the transcript box and on the printer if it is turned
        on and ready.

    33. Type K = 12345 <return>
           The variable K will be displayed in Hex notation in the
        transcript box.

    34. Type I = 012345 <return>
           The value of I is read in as an octal value due to the
        leading zero, but is still displayed as a decimal value.

    35. Type J = 0X12345 <return>
           The value of J is read in as a hexadecimal value due to
        the leading 0X.

    36. Type M = 0XFFFF <return>
           The variable M is read in as Hexadecimal and displayed
        in all three formats in the top box, but as decimal in the
        transcript box. The default display for the integers is
        decimal.


    37. Type I = SQRT(48) <return>
           The square root is calculated using 15 significant
        digits and the result is truncated to the next lower
        value. All calculations are done this way and the result
        is truncated to the integer value before display.

    38. Type A = FACT(170)/FACT(169) - 170 <return>
           The very small result will indicate to you a measure
        of the accuracy of calculations. It may not be apparent
        to you that we are using a factorial function. Calculate
        the value of FACT(170) to get an idea of the dynamic
        range available with this system.

    39. Hit the F10 key and answer the prompt with Y.

    40. Restart the program and try some of your favorite math
        exercises.


                         Additional Comments


     1. Files on the distribution disk.

        VC.DOC - The file you are reading.

        VC.EXE - The executable file for the Visual Calculator.

        HELP - The users index of files.

        AMORT - The loan amortization equations.

        PAYMENT - The monthly payment calculations.

        TEST - A group of 50 "nonsense" equations.


     2. Inputting equations.

           All equations are typed into the input box in a normal
        mathematical expression. Only single valued expressions
        can be evaluated, no simultaneous equations can be solved
        with this system.

           To raise "A" to the power of "B", use;
        C = EXP(B*LOG(A))  $ any variables can be used

           A dollar sign anywhere in a line renders the remainder
        of that line as a comment only.

           Nesting is allowable to any depth but the entire expres-
        sion must fit in the input window. Longer expressions must
        be broken down into smaller statements.

           The variables "I" through "J" can be mixed in with the
        variables "A" through "F" in any manner. The "I" variables
        are truncated after evaluation so can only be used to
        store integer values, but that would be acceptable in many
        cases, such as the original value of the loan in the above
        example.


     3. Naming variables

           In order to make the equations easier to read, the names
        of the variables "A" through "F" can be changed to any
        names you like with up to 6 characters. The first must be
        alphabetic and the rest can be alphabetic or numeric. To
        change the names, use the # sign in the first column of the
        statement and any order of variable name groups. A variable
        group is composed of a variable name "A" through "F", then
        a minus sign, and finally the new name with no blanks any-
        where in the group. Any number of blanks can be used between
        the groups, and you can put as many as you like on one input
        line, and additional groups on other lines.

           Intermixed with the above, or placed on their own input
        line, you can put as many "base" groups as you like for the
        variables "I" through "N". A base group consists of the
        variable name, a minus sign, and one of the letters, "D",
        "O", "H", or "X".

           If, after naming the variables, you wish to rename them
        to something else, the original names are used for the new
        name changes. Thus if "A" were named "PLACE" and you wished
        to rename it to "WHERE" the proper method would be to use
        "# A-WHERE".


     4. Limitations

           This version of the Visual Calculator has a limit of
        approximately 800 lines in the transcript box. That should
        be enough for most applications. If you need more, I would
        suggest you write the program in a high level language.

           The limit of numbers is about ten to the plus or minus
        power of 308. Of course both positive and negative numbers
        can be used everywhere. The limit for the "I" variables is
        about 16 million, and can only be zero or positive. The
        exact number in 2 to the 24th power minus 1. It is the
        number displayed in the variable "N" when you load the
        system.

           The biggest limitation of the system is the limit of your
        own creativity. It is up to you to use it in a productive
        manner or simply to allow it to collect dust like so many
        of your other programs. I might add that I also have many
        dust collectors that I have failed to learn to use.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0817

     Volume in drive A has no label
     Directory of A:\

    AMORT              136   2-01-88  12:00p
    ANYFILE  C         552   2-01-88  12:00p
    BACKWARD C         678   2-01-88  12:00p
    BETTERIN C         609   2-01-88  12:00p
    BIGARRAY C         505   2-01-88  12:00p
    BIGDYNL  C        1184   2-01-88  12:00p
    BITFIELD C         417   2-01-88  12:00p
    BITOPS   C         932   2-01-88  12:00p
    BREAKCON C         374   2-01-88  12:00p
    CHARCLAS C        1068   2-01-88  12:00p
    CHAROUT  C         519   2-01-88  12:00p
    CHRSTRG  C         405   2-01-88  12:00p
    COMMENTS C         466   2-01-88  12:00p
    COMPARES C        1701   2-01-88  12:00p
    COMPILER DOC     10887   2-01-88  12:00p
    CRYPTIC  C        1566   2-01-88  12:00p
    DATA     C       15473   2-01-88  12:00p
    DEFIN    H        2636   2-01-88  12:00p
    DEFINE   C         511   2-01-88  12:00p
    DOSEX    C        9459   2-01-88  12:00p
    DOWHILE  C         248   2-01-88  12:00p
    DUMBCONV C         456   2-01-88  12:00p
    DYNLINK  C        2083   2-01-88  12:00p
    DYNLIST  C        1407   2-01-88  12:00p
    ENUM     C         537   2-01-88  12:00p
    FILE     C       10273   2-01-88  12:00p
    FILES817 TXT      1317   2-16-88   9:34a
    FIRSTEX  C         119   2-01-88  12:00p
    FLOATSQ  C         746   2-01-88  12:00p
    FLOATSQ2 C         847   2-01-88  12:00p
    FORLOOP  C         242   2-01-88  12:00p
    FORMOUT  C         414   2-01-88  12:00p
    GO       BAT        38   8-10-87  12:02p
    GO       TXT       386   8-10-87   2:59p
    GOODFORM C         310   2-01-88  12:00p
    GOTOEX   C        1047   2-01-88  12:00p
    HELP               169   2-01-88  12:00p
    IFELSE   C         483   2-01-88  12:00p
    INMEM    C         588   2-01-88  12:00p
    INTARRAY C         310   2-01-88  12:00p
    INTASIGN C         708   2-01-88  12:00p
    INTIN    C         366   2-01-88  12:00p
    LIST     C        1666   2-01-88  12:00p
    LIST     EXE     10428   2-01-88  12:00p
    LIST     PRJ        13   2-01-88  12:00p
    LISTF    C        6707   2-01-88  12:00p
    LOTTYPES C        1920   2-01-88  12:00p
    MACRO    C         924   2-01-88  12:00p
    MORTYPES C         705   2-01-88  12:00p
    MULTIARY C         687   2-01-88  12:00p
    NESTED   C         877   2-01-88  12:00p
    ONEINT   C         230   2-01-88  12:00p
    PASSBACK C        1021   2-01-88  12:00p
    PAYMENT            107   2-01-88  12:00p
    POINTER  C         505   2-01-88  12:00p
    POINTER2 C         834   2-01-88  12:00p
    PRINTALL BAT      2006   2-01-88  12:00p
    PRINTDAT C         615   2-01-88  12:00p
    READ     ME       4718   2-01-88  12:00p
    READCHAR C         480   2-01-88  12:00p
    READGOOD C         447   2-01-88  12:00p
    READLINE C         442   2-01-88  12:00p
    READTEXT C         427   2-01-88  12:00p
    RECURSON C         322   2-01-88  12:00p
    SCOPE    C        1375   2-01-88  12:00p
    SHIFTER  C         584   2-01-88  12:00p
    SIMPLEIO C         472   2-01-88  12:00p
    SINGLEIO C         377   2-01-88  12:00p
    SPECIAL  C         810   2-01-88  12:00p
    SQUARES  C         502   2-01-88  12:00p
    STRINGIN C         400   2-01-88  12:00p
    STRINGS  C         654   2-01-88  12:00p
    STRUCT   DEF      1122   2-01-88  12:00p
    STRUCT1  C         645   2-01-88  12:00p
    STRUCT2  C         678   2-01-88  12:00p
    STRUCT3  C         791   2-01-88  12:00p
    SUMSQRES C         866   2-01-88  12:00p
    SWITCH   C         714   2-01-88  12:00p
    TEMPCONV C        1334   2-01-88  12:00p
    TEST              1154   2-01-88  12:00p
    TEST     BAT       617   2-01-88  12:00p
    TRIVIAL  C          14   2-01-88  12:00p
    TWOWAY   C         727   2-01-88  12:00p
    UGLYFORM C         207   2-01-88  12:00p
    UNION1   C         478   2-01-88  12:00p
    UNION2   C        1870   2-01-88  12:00p
    UPLOW    C        1108   2-01-88  12:00p
    VC       C       15299   2-01-88  12:00p
    VC       DOC     12793   2-01-88  12:00p
    VC       EXE     34024   2-01-88  12:00p
    VC       PRJ        23   2-01-88  12:00p
    VIDEO    C       12235   2-01-88  12:00p
    WHATNEXT C        3506   2-01-88  12:00p
    WHILE    C         266   2-01-88  12:00p
    WRTMORE  C         173   2-01-88  12:00p
    WRTSOME  C          63   2-01-88  12:00p
           96 file(s)     205134 bytes
                           63488 bytes free
