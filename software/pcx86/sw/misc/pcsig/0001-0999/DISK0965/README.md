---
layout: page
title: "PC-SIG Diskette Library (Disk #965)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0965/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0965"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MYSTIC PASCAL - PROGRAMERS UTILITY"

    MYSTIC PASCAL is an integrated programming environment that rigidly
    follows the ISO Pascal Standard.
    
    MYSTIC PASCAL combines editing, compiling, program testing, and
    debugging in to one unit.  The traditional pattern of program
    development -- the edit/compile/test cycle -- is greatly speeded up with
    an integrated programming environment.  You do not need to return to the
    operating system and reload each program at each phase of the cycle.
    
    MYSTIC PASCAL is an ``interactive compiler'' and can compile entire
    Pascal source files.  It also lets you key in Pascal statements, as well
    as instantly compile and execute then at the global level.  This is
    similar to the Direct Mode of BASIC interpreters, with a critical
    difference: MYSTIC PASCAL is a true object-code compiler.  It is not an
    interpreter or a pseudo-code compiler.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```



     The files on this disk:




         PAS?.DOC       Documentation of the commands supported and their use.

         TUTOR.DOC      Documentation on TUTOR.PAS

         TUTOR.PAS      Pascal program demonstrating Mystic Pascal capabilities

         MYSTIC.EXE     Mystic Pascal Version 1.5

         MYSTIC.LIB     Mystic Pascal support library

         MYSTICIN.EXE   Mystic Pascal installation program

         READ.ME        Basic starting instructions

         PROBLEM.FRM    Form for reporting problems/bugs

         COMMENT.FRM    Form for suggesting features for future versions

         REGISTRN.FRM   Form for becoming a registered user

         FILES.TXT      This file

```
{% endraw %}

## FILES965.TXT

{% raw %}
```
Disk No:  965
Program Title: MYSTIC PASCAL
PC-SIG version: 1.1

MYSTIC PASCAL is an integrated programming environment that rigidly
follows the ISO Pascal Standard.

MYSTIC PASCAL combines editing, compiling and program testing and
debugging in one unit.  The traditional pattern of program
development--the edit/compile/test cycle--is greatly speeded up with an
integrated programming environment.  You do not need to return to the
operating system and reload each program at each phase of the cycle.

MYSTIC PASCAL is an "interactive compiler".  MYSTIC can compile entire
Pascal source files like previous Pascals.  It also allows Pascal
statements to be keyed in, instantly compiled and executed at the global
level.  This is similar to the Direct Mode of BASIC interpreters, with a
critical difference: MYSTIC PASCAL is a true object-code compiler.  It
is not an interpreter or a pseudo-code compiler.

Some of MYSTIC PASCAL's major features:

~ISO Standard Pascal Level 0 (MYSTIC PASCAL version 1.6)

~True 8086 object-code compiler

~Two level optimization

~Immediate compilation and execution of global Pascal statements

~Full-screen editor

~Help windows support full Pascal language

~Multi-tasking support

~Multiple video screens are maintained

~Program code up to one megabyte

~Program data up to one megabyte.

Usage:  Integrated Program Environment.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

REGISTRN FRM  Form for becoming a registered user.
COMMENT  FRM  Form for suggesting features for future versions.
PROBLEM  FRM  Form for reporting problems/bugs.
PAS???   DOC  Documentation for the program (9 files).
TUTOR    PAS  Pascal program demonstrating MYSTIC PASCAL capabilities.
TUTOR    DOC  Documentation on TUTOR.PAS.
READ     ME   Basic starting instructions.
MYSTICIN EXE  MYSTIC PASCAL installation program.
MYSTIC   LIB  MYSTIC PASCAL support library.
MYSTIC   EXE  MYSTIC PASCAL version 1.5.
FILES    TXT  Listing of included files.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 965 MYSTIC PASCAL  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, Type:                                       ║
║             COPY READ.ME LPT1: (press enter) then                       ║
║             COPY *.DOC (press enter)                                    ║
║                                                                         ║
║ To run the program, Type: MYSTIC (press enter)                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PAS1.DOC

{% raw %}
```
















			M Y S T I C   P A S C A L

				U S E R

			      M A N U A L





























						Mystic Canyon Software
						P.O.Box 1010
						Pecos, New Mexico 87552
						(505) 757-6344



             Trust in the Lord with all your heart,
                  on your own intelligence rely not;
             In all your ways be mindful of him,
                  and he will make straight your paths.

                                         Proverbs 3:5-6

             The beginning of wisdom is the fear of the Lord,
                  and knowledge of the Holy One is understanding.

                                         Proverbs 9:10

             Toil not to gain wealth,
                  cease to be concerned about it;
             While your glance flits to it, it is gone!
                  for assuredly it grows wings,
                  like the eagle that flies toward heaven.

                                         Proverbs 23:4-5

             He who obeys the commandments he has from me
                  is the man who loves me;
             and he who loves me will be loved by my Father.
             I too will love him and reveal myself to him.

                                         John 14:21

             No sooner had he said this than he was lifted up
             before their eyes in a cloud which took him from
             their sight.

                                         Acts 1:9

             From about half past ten in the evening to
             about half an hour after midnight.
                  Fire.
             God of Abraham, God of Isaac, God of Jacob,
             Not the God of philosophers and scholars.
             Absolute Certainty: Beyond reason. Joy. Peace.
             Forgetfulness of the world and everything but God.
             The world has not known Thee, but I have known Thee.
                  Joy! joy! joy! Tears of joy!

                                         Blaise Pascal
                                         -- from a scrap of paper found
                                            sewn up in his doublet after
                                            his death.


                                   COPYRIGHT

                      Copyright   1986  by  Mystic  Canyon Software.
                      All rights reserved. Version 1.5 is released to
                      shareware and may be copied and distributed,
                      provided the following conditions are met:
                      transcribed,  stored  in a retrieval
                      system,   or  translated  into   any
                      language  or computer  language,  in
                      any    form   or   by   any   means,
                      electronic,   mechanical,  magnetic,
                      optical,    chemical,    manual   or
                      otherwise, without the prior written
                      permission    of    Mystic    Canyon
                      Software,  P.O.Box 1010,  Pecos, New
                      Mexico 87552.


                                   DISCLAIMER

                      Mystic  Canyon  Software  makes   no
                      representations  or warranties  with
                      respect  to the contents hereof  and
                      specifically  disclaims any  implied
                      warranties   of  merchantability  or
                      fitness for any particular  purpose.
                      Further,   Mystic   Canyon  Software
                      reserves  the right to  revise  this
                      publication and to make changes from
                      time  to time in the content  hereof
                      without  obligation of Mystic Canyon
                      Software  to  notify any  person  of
                      such revision or changes.



                                   TRADEMARKS

                      Mystic  Pascal  is  a  trademark  of
                      Mystic Canyon Software.  Wordstar is
                      a  registered trademark of  MicroPro
                      International Corp.


        Mystic Pascal  User Manual                                      1



        1.  Introduction. . . . . . . . . . . . . . . . . . . . .   4
             1.1  Overview of Mystic Pascal . . . . . . . . . . .   6
             1.2  System Requirements . . . . . . . . . . . . . .   8
             1.3  List of Files . . . . . . . . . . . . . . . . .   8
             1.4  Replacement Disks . . . . . . . . . . . . . . .   8

        2.  Operating Mystic Pascal . . . . . . . . . . . . . . .   9
             2.1  Starting Mystic Pascal. . . . . . . . . . . . .  10
             2.2  Screens . . . . . . . . . . . . . . . . . . . .  11

        3.  Full Screen Editor. . . . . . . . . . . . . . . . . .  12
             3.1  Loading and Saving Pascal Programs. . . . . . .  13
             3.2  Entering a New Pascal Program . . . . . . . . .  13
             3.3  Editing Commands. . . . . . . . . . . . . . . .  14
                  3.3.1  Cursor Movement Commands . . . . . . . .  14
                  3.3.2  Scroll Commands. . . . . . . . . . . . .  14
                  3.3.3  Insert and Delete Commands . . . . . . .  14
             3.4  Compiling a Pascal Program. . . . . . . . . . .  15
             3.5  EXE File Create . . . . . . . . . . . . . . . .  15

        4.  Direct Mode . . . . . . . . . . . . . . . . . . . . .  16
             4.1  Case Control. . . . . . . . . . . . . . . . . .  16
             4.2  Video Snow. . . . . . . . . . . . . . . . . . .  17
             4.3  Intermediate Code Listing . . . . . . . . . . .  17
             4.4  Clear Screen Command. . . . . . . . . . . . . .  17

        5.  System Display. . . . . . . . . . . . . . . . . . . .  18
             5.1  Storage Map . . . . . . . . . . . . . . . . . .  18
             5.2  Process Control Table . . . . . . . . . . . . .  20

        6.  Help Windows. . . . . . . . . . . . . . . . . . . . .  21

        7.  Multi-tasking Support . . . . . . . . . . . . . . . .  22
             7.1  Message Passing . . . . . . . . . . . . . . . .  23
             7.2  START . . . . . . . . . . . . . . . . . . . . .  24
             7.3  PRIORITY. . . . . . . . . . . . . . . . . . . .  25
             7.4  QUEUE . . . . . . . . . . . . . . . . . . . . .  26
             7.5  SEND. . . . . . . . . . . . . . . . . . . . . .  27
             7.6  RECEIVE . . . . . . . . . . . . . . . . . . . .  28

        8.  Procedures and Functions. . . . . . . . . . . . . . .  29
             8.1  ABS . . . . . . . . . . . . . . . . . . . . . .  30
             8.2  ARCTAN. . . . . . . . . . . . . . . . . . . . .  31
             8.3  CHR . . . . . . . . . . . . . . . . . . . . . .  32
             8.4  COS . . . . . . . . . . . . . . . . . . . . . .  33
             8.5  DISPOSE . . . . . . . . . . . . . . . . . . . .  34
             8.6  EXP . . . . . . . . . . . . . . . . . . . . . .  35
             8.7  FLOAT . . . . . . . . . . . . . . . . . . . . .  36
             8.8  FRACTION. . . . . . . . . . . . . . . . . . . .  37


        Table of Contents

        Mystic Pascal  User Manual                                      2


             8.9  INTR. . . . . . . . . . . . . . . . . . . . . .  38
             8.10  INTSTR . . . . . . . . . . . . . . . . . . . .  39
             8.11  LN . . . . . . . . . . . . . . . . . . . . . .  40
             8.12  NEW. . . . . . . . . . . . . . . . . . . . . .  41
             8.13  ODD. . . . . . . . . . . . . . . . . . . . . .  43
             8.14  OFFSET . . . . . . . . . . . . . . . . . . . .  44
             8.15  ORD. . . . . . . . . . . . . . . . . . . . . .  45
             8.16  PACK and UNPACK. . . . . . . . . . . . . . . .  46
             8.17  PRED . . . . . . . . . . . . . . . . . . . . .  47
             8.18  REALSTR. . . . . . . . . . . . . . . . . . . .  48
             8.19  ROUND. . . . . . . . . . . . . . . . . . . . .  49
             8.20  SEGMENT. . . . . . . . . . . . . . . . . . . .  50
             8.21  SIN. . . . . . . . . . . . . . . . . . . . . .  51
             8.22  SQR. . . . . . . . . . . . . . . . . . . . . .  52
             8.23  SQRT . . . . . . . . . . . . . . . . . . . . .  53
             8.24  STRINT . . . . . . . . . . . . . . . . . . . .  54
             8.25  STRREAL. . . . . . . . . . . . . . . . . . . .  55
             8.26  SUCC . . . . . . . . . . . . . . . . . . . . .  56
             8.27  TRUNC. . . . . . . . . . . . . . . . . . . . .  57
             8.28  UPCASE . . . . . . . . . . . . . . . . . . . .  58

        9.  Input/Output. . . . . . . . . . . . . . . . . . . . .  59
             9.1  File Variables. . . . . . . . . . . . . . . . .  60
             9.2  Standard Files. . . . . . . . . . . . . . . . .  60
             9.3  How to Send Data to Your Printer. . . . . . . .  60
             9.4  ASSIGN. . . . . . . . . . . . . . . . . . . . .  61
             9.5  CLOSE . . . . . . . . . . . . . . . . . . . . .  62
             9.6  EOF . . . . . . . . . . . . . . . . . . . . . .  63
             9.7  EOLN. . . . . . . . . . . . . . . . . . . . . .  64
             9.8  GET, PUT and Buffer Variables . . . . . . . . .  65
             9.9  IORESULT. . . . . . . . . . . . . . . . . . . .  66
             9.10  PAGE . . . . . . . . . . . . . . . . . . . . .  67
             9.11  READ . . . . . . . . . . . . . . . . . . . . .  68
             9.12  READLN . . . . . . . . . . . . . . . . . . . .  69
             9.13  RESET. . . . . . . . . . . . . . . . . . . . .  70
             9.14  REWRITE. . . . . . . . . . . . . . . . . . . .  71
             9.15  SEEK . . . . . . . . . . . . . . . . . . . . .  72
             9.16  WRITE. . . . . . . . . . . . . . . . . . . . .  73
             9.17  WRITELN. . . . . . . . . . . . . . . . . . . .  74

        10. MYSTICIN Installation Program . . . . . . . . . . . .  75

        11. Programming Notes . . . . . . . . . . . . . . . . . .  76









        Table of Contents

        Mystic Pascal  User Manual                                      3


        Appendixes

        A.  Error Messages. . . . . . . . . . . . . . . . . . . .  79

        B.  ASCII Table . . . . . . . . . . . . . . . . . . . . .  80

        C.  ISO Standard Pascal . . . . . . . . . . . . . . . . .  81













































        Table of Contents

        Mystic Pascal  User Manual                                      4


        1.  Introduction

             Mystic  Pascal is an integrated programming environment  for
        the IBM Personal Computer and compatibles.  Mystic Pascal rigidly
        follows the ISO Pascal Standard.

             Before  the IBM PC,  most personal computers were limited to
        64K of main storage.   Now most machines have 256K to 640K.  Soon
        most computers will have 640K or more.  Newer machines will allow
        up to 16 megabytes.   (In March 1975 we purchased an Altair  8800
        computer kit with 256 bytes of storage.)

             This  trend  to  larger memories permits major  advances  in
        software.   Business  programs have evolved from word  processors
        and spreadsheets to "integrated software systems" - single  large
        programs  combining many functions.

             Mystic  Pascal  combines  editing,   compiling  and  program
        testing  and debugging in one unit.   The traditional pattern  of
        program  development - the edit/compile/test cycle  - is  greatly
        speeded  up with an integrated programming environment.   You  do
        not  need  to  return  to the operating system  and  reload  each
        program  at  each  phase  of the  cycle.

             Mystic  Pascal  is an "interactive  compiler".   Mystic  can
        compile entire Pascal source files like previous Pascals.  But it
        also allows Pascal statements to be keyed in,  instantly compiled
        and executed at the global level.   This is similar to the Direct
        Mode of Basic interpreters,  with a critical difference -- Mystic
        Pascal is a true object code compiler.   It is not an interpreter
        or a pseudo-code compiler.

             The  Mystic  Pascal  compiler  is based on  a  new  type  of
        compiler technology.   First, it is a multi-tasking compiler that
        runs in the background while you are editing or doing other work.
        Second,  it is an incremental compiler.   If you are working on a
        5000 line program and modify 3 lines,  it only needs to recompile
        those   three   lines.    If  those  lines   contained   variable
        declarations,   it  will  also  recompile  lines  of  code  which
        referenced  those  variables.   It keeps track of all  references
        within  the  program.   Third,  Mystic Pascal  is  an  optimizing
        compiler.










        Section 1:   Introduction

        Mystic Pascal  User Manual                                      5


             The  highest  priority  in the design of Mystic  Pascal  was
        speed  - both compilation speed and execution  speed.   Here  are
        some of Mystic Pascal's major features:

        -- ISO Standard Pascal Level 0  (Mystic Pascal version 1.6)

        -- True 8086 object code compiler

        -- Two level optimization

        -- Immediate compilation and execution of global Pascal
        statements

        -- Full screen editor

        -- Help windows support full Pascal language

        -- Multi-tasking support

        -- Multiple video screens are maintained

        -- Program code up to 1 megabyte

        -- Program data up to 1 megabyte




























        Section 1:   Introduction

        Mystic Pascal  User Manual                                      6


        1.1  Overview of Mystic Pascal

             This  is a technical overview of Mystic  Pascal.  Users  who
        have  no interest in the internal structure of the system  should
        skip this section.

             Mystic Pascal is an integrated programming environment.   It
        has several major components:

             -- full screen editor
             -- direct mode
             -- system display
             -- compiler
             -- help facility
             -- nucleus

        Nucleus

             The  nucleus is an operating system extension which adds  an
        extra  layer  of functions to PC-DOS.   It does not  replace  any
        existing  DOS functions.   Many nucleus functions are accessed by
        interrupt vectors.  The nucleus supports these major functions:

             -- process management - multitasking
             -- queue management for interprocess communication
             -- dynamic storage management
             -- video screen management and window support

             Each  of the major system components is a separate  process.
        The components execute concurrently and may communicate with each
        other  through  message queues.   Some processes have  their  own
        video  screens.   The  user may switch among several screens  via
        function  key 1 (F1).   The screens not currently  displayed  are
        stored in buffers.

             Keyboard  input  is  routed to the  keyboard  queue  of  the
        process  which  owns the currently displayed video  screen.   The
        process  may  read this queue as it needs  input.   Some  special
        keyboard inputs are intercepted by the nucleus and are not passed
        on to active processes - F1 is one example.

        Full Screen Editor

             A  full  screen editor allows the user to enter  new  Pascal
        programs and modify existing ones.  From the editor screen Pascal
        source files may be loaded from and saved to disk.   The compiler
        is also invoked from the editor screen via F2.


        Compiler


        Section 1:   Introduction

        Mystic Pascal  User Manual                                      7



             The  compiler  translates Pascal source programs  into  8086
        object  code.   The  ISO  Standard Pascal  Level  0  language  is
        supported.

             Besides compiling entire programs, single statements entered
        in  the  Direct  Mode  screen may  be  compiled  and  immediately
        executed.

        Direct Mode

             In the Direct Mode screen, Pascal statements may be directly
        entered.   These  will be instantly compiled and executed.   This
        advanced feature allows interactive or exploratory programming in
        a style similar to the Lisp and Forth languages.

        System Display

             The  System  Display screen shows the current system  status
        and  time of day.   A storage map and a table of process  control
        blocks are formatted.   The display is updated approximately once
        per second.

        Help Facility

             The  Help  facility  process  displays  the  Help  menus  in
        windows and loads Help text from the system library.

























        Section 1:   Introduction

        Mystic Pascal  User Manual                                      8


        1.2  System Requirements

             Mystic Pascal requires 256K or more of main storage and  DOS
        2.0 or higher.  Because Mystic Pascal directly accesses the video
        storage  buffers,  accesses  the  ROM  BIOS,  modifies  interrupt
        vectors and uses the 18 Hz timer,  it may not function  correctly
        on IBM compatibles that are less than 100% compatible.


        1.3  List of Files

             The  first thing you should do is make a backup copy of  the
        master disk.  Do not use the master disk as your working disk.

             The  master  disk  does  not contain a copy  of  the  PC-DOS
        operating  system which is proprietary software.   Do not try  to
        boot up the master disk.

             MYSTIC.EXE     The Pascal compiler system
             MYSTIC.LIB     Library of messages and help windows
             MYSTICIN.EXE   System installation program
             TUTOR.PAS      Mystic Pascal tutorial program
             TUTOR.DOC      Instructions for running TUTOR
             PROBLEM.FRM    Problem report form


        1.4  Replacement Disks

             After receiving Mystic Pascal, the first thing you should do
        is  backup the master disk.  Do not use the master disk for  your
        working disk.

             If you suspect that your master disk is damaged, try to copy
        the  files  to  another disk using the COPY command  rather  than
        DISKCOPY.   DISKCOPY copies the entire disk and would report  all
        errors  found  even  if the bad section of the disk  contains  no
        files.

             If you are certain that your master disk is damaged and  not
        recoverable,  we can provide a replacement.  Pack the disk up and
        ship  it back to us.   We must have the original master before we
        will ship the replacement.  There is no charge for replacement if
        you return it within 15 days of receiving the package.   If it is
        beyond 15 days, include $10.00 to cover shipping and processing.

             Also include a note indicating:

                  -- description of the problem, any error messages
                  -- type of computer
                  -- current shipping address


        Section 1:   Introduction

        Mystic Pascal  User Manual                                      9


        2.  Operating Mystic Pascal

             Mystic  Pascal  is an "integrated programming  environment."
        This  means  that  it  combines  in  one  large  program  several
        components  that  were generally implemented as  several  smaller
        programs in earlier Pascals.

             The first component is the compiler itself which  translates
        Pascal  source  programs  into  8086  object  code.   The  second
        component  is  the  full screen editor which is  used  to  modify
        existing Standard Pascal programs or to create new ones.

             Another  component  is the Direct Mode processor.   This  is
        similar  to Direct Mode in a Basic interpreter.   You  can  enter
        Pascal  statements  and  they  will  be  instantly  compiled  and
        executed  and  any  output will be  displayed  immediately.   For
        example,  if  your  main  Pascal program has  declared  a  global
        variable X1 as an Integer, you could enter in Direct Mode:

             X1 := 75           {the value 75 is now stored in X1}

             WRITELN( SQR(X1) ) {the square of 75 is displayed   }

             READ(INFILE, VALUE);  WRITELN(VALUE)  {multiple statements}

             TUTOR              {run a main program named TUTOR}

             In  Direct Mode,  you may enter any legal Pascal  statement.
        The  statement(s) you enter are inserted into a hidden  anonymous
        procedure,  this  procedure  is compiled and  then  called.   The
        procedure is compiled as if it were placed immediately before the
        main  program BEGIN block -- you can access all global variables,
        procedures  and  functions.    Local  variables,  procedures  and
        functions may not be directly accessed from Direct Mode.


















        Section 2:   Operating Mystic Pascal

        Mystic Pascal  User Manual                                      10


        2.1  Starting Mystic Pascal

             If  you have not already done so,  you should make a  backup
        copy of the Mystic Pascal master disk now.

             Mystic  Pascal  may be placed on any diskette or  hard  disk
        drive.   MYSTIC.EXE is the main compiler system file.   To  start
        Pascal enter:

             MYSTIC

             If MYSTIC.EXE is not on your currently logged disk, then you
        must include a disk letter prefix.  For example, if MYSTIC.EXE is
        on your C: disk and you are logged into the A: disk, enter:

             C:MYSTIC

             When the compiler is starting up,  it must locate the system
        library file MYSTIC.LIB.  It looks for the library on the current
        disk.  If it does not find it there, it asks you on which disk it
        is located.

             When Mystic Pascal starts it will display the opening screen
        and then go to the editor screen.  From the editor screen you can
        load  a Pascal program (function key 2) or go to any other screen
        (function key 1).


























        Section 2:   Operating Mystic Pascal

        Mystic Pascal  User Manual                                      11


        2.2  Screens

             Mystic  Pascal maintains multiple video screens.   The  term
        "screen"  refers  to  a  complete video page of  25  rows  by  80
        columns.   The  term  "window"  refers to a  smaller  rectangular
        section of a screen.

             Some   major   components  of  the  integrated   programming
        environment have their own screens.   The Editor and Direct  Mode
        processor  are two examples.   If you were working in the editor,
        you could switch to Direct Mode, do some work in that screen, and
        then return to the editor screen.   It would appear exactly as it
        did when you left it.

             Screens  which  are not currently displayed  are  stored  in
        buffers in main storage.  The cursor position is also saved.

             Function key 1 (F1) is used to switch between screens.  When
        you press F1,  a small menu window appears on the current screen.
        The   name  of  the  current  screen  is  flashing  or  otherwise
        indicated.   You  then press another function key to  select  the
        screen you want to go to.  If you press any key not listed on the
        menu the screen switch operation is cancelled.

                       Screen Selection

                       F1  Editor
                       F2  Direct Mode
                       F3  System Display
                       F4  Laser Display

                       Ctrl-End   Exit

             When  the  screen selection menu is displayed you  may  also
        enter  Ctrl-End  to  terminate Mystic Pascal and return  to  DOS.
        Your programs and data will not be automatically saved.

             The  colors of the screens and help windows may be  modified
        by the Mysticin installation program.   Also IBM Color card video
        "snow" may be suppressed.












        Section 2:   Operating Mystic Pascal


```
{% endraw %}

## PAS2.DOC

{% raw %}
```

        Mystic Pascal  User Manual                                      12


        3.  Full Screen Editor

             Mystic  Pascal  provides a full screen editor which is  used 
        for  entering,  modifying and inspecting Pascal source  programs.  
        It is not intended for editing other types of files.

             You can edit your Pascal program as a text file although the 
        editor stores the program in a "tokenized" format.   A token is a 
        one byte code which can represent an entire Pascal reserved word.  
        For  example,  the  reserved word PROCEDURE uses 9 bytes in  text 
        format  but only one byte in token format.   Obviously a  typical 
        Pascal program can be greatly compressed by using token format.

             The  editor converts all identifiers to upper case  when  it 
        stores  them  in  its table.   You can use an  option  switch  to 
        control  whether  reserved words,  standard identifiers and  user 
        defined identifiers are displayed in lower or upper case.  (Refer 
        to   section  4.1  of  this  manual.)    For  example,   the  two 
        identifiers "Initialize" and "INITIALIZE" are treated as the same 
        identifier.

             Source  programs  must  not contain lines  greater  than  80 
        characters, the width of the standard display screen.





























        Section 3:   Full Screen Editor

        Mystic Pascal  User Manual                                      13


        3.1  Loading and Saving Pascal Programs

             When you want to work on a Pascal program which is saved  on 
        disk,  you  must load it into Mystic Pascal.   To load a  program 
        from  disk,  go  to  the Editor screen.   (F1 is used  to  switch 
        between  the different screens.)  If you are in the  Editor,  hit 
        F2.  This will display the Editor command menu.  Select command L 
        for load.    You will be asked the name of the file to be loaded.  
        The 3 character filetype must be keyed in with the filename.   It 
        does not assume any default filetype.   A disk letter prefix  may 
        be added to access files not on the current disk drive.

             Sample filenames with filetypes:
                  TEST.PAS            c:stock.mdl
                  Startrek.bak        b:Train.set

             If the file is not found or there is some other  error,  the 
        error  message  will  be  displayed and you may  then  retry  the 
        operation.

             To  save  a  the Pascal program currently  residing  in  the 
        editor is a nearly identical process.  Enter F2, then S, then the 
        filename.filetype.   The filename need not be the same as in  the 
        last Load command.



        3.2  Entering a New Pascal Program

             When  Mystic Pascal is first started the editor is empty and 
        a new program may be directly keyed in.  If there is a program in 
        the editor and you wish to enter a new program,  key F2,  then N.  
        This  command clears out the editor.   Any program in the  editor 
        buffer is cleared out of the buffer by the New command.  You  can 
        use the Save command to save such a program first.

















        Section 3:   Full Screen Editor

        Mystic Pascal  User Manual                                      14


        3.3  Editing Commands

             Mystic  Pascal  editing commands are used to modify text  on 
        the CRT screen for the current Pascal program.   Many people  are 
        experienced  with the Wordstar word processing  program.   Mystic 
        Pascal's edit commands are similar to those commands.


        3.3.1  Cursor Movement Commands

        right one character           Control D      right arrow
        left one character            Control S      left arrow
        up one line                   Control E      up arrow
        down one line                 Control X      down arrow
        right one word                Control F      Control right arrow
        left one word                 Control A      Control left arrow
        top of file                   Home
        end of file                   End
        tab                           Tab 
        reverse tab                   Shift Tab
        next line                     return


        3.3.2  Scroll Commands

        scroll up one line            Control Z
        scroll down one line          Control W
        scroll up one page            Control C      PgUp
        scroll down one page          Control R      PgDn


        3.3.3  Insert and Delete Commands

        insert mode toggle            Control V      Ins
        insert new line               Control N      
        delete character              Control G      Del
        destructive backspace         Control H      right arrow key 14
        delete word right             Control T
        delete line                   Control Y













        Section 3:   Full Screen Editor

        Mystic Pascal  User Manual                                      15


        3.4  Compiling a Pascal Program

             To  compile a Pascal program you must first load it into the 
        editor.   Generally a program you are working on will already  be 
        in the editor.

             Once  your  program  is  loaded and you are  in  the  editor 
        screen,  then to compile the program, enter key F2 then letter C.  
        If  the  compile has no errors,  a small window will display  the 
        elapsed  time of the compile and the compiler speed in lines  per 
        second.   The size of the code generated is also displayed.   Hit 
        any key to remove the window.

             To compile, enter

                  F2   then    C

             If  there  is an error during the  compile,  the  cursor  is 
        positioned  at the location of the error (or just past it) in the 
        source program.  An error message is displayed in a small window.  
        Hit any key to remove the window and resume editing.  Correct the 
        error and you can then recompile.



        Technical Notes

              Mystic  Pascal  uses an advanced compiler  architecture  to 
        achieve very high compile speed.  The "Lines per second" value is 
        intended  to show the effective compilation speed for  comparison 
        with other compilers.

             The  compiler  elapsed time is measured using  the  Personal 
        Computer's  timer tick interrupt which occurs every 0.055  second 
        (18.2  times per second).   If,  by chance,  no timer ticks occur 
        between the start and finish of the compilation,  then the actual 
        time must have been between 0.0 and 0.055 second.   In this case, 
        the elapsed time is adjusted to 0.030 second,  a middle value, to 
        avoid division by zero in computing the lines per second.



        3.5  EXE File Create                                ** 1.6 **

             After   a  Pascal  program  has  successfully  compiled,   a 
        standalone  EXE file version of the program may be  created  with 
        the 'E' command on the F2 menu.  





        Section 3:   Full Screen Editor

        Mystic Pascal  User Manual                                      16


        4.  Direct Mode

             In the Direct Mode screen,  Pascal statements may be entered 
        directly.   They are instantly compiled, executed and any results 
        displayed.

             The  statements are compiled at the global level.   You  can 
        access  all  global variables,  procedures and functions but  not 
        those  declared within a procedure or function.   Each  statement 
        must fit on one line.   Multiple statements may be entered on one 
        line.

             The backslash "\" is the prompt character.

             To run the entire program,  type the program's name which is 
        declared in the program header.

             Since  many  Direct Mode statements will use  the  procedure  
        WRITE  to display the value of variables,  an abbreviated form is 
        provided.  

             .X, Y, Z       is equivalent to
             WRITE(X, Y, Z)

             When using the dot print command,  no other statements  must 
        appear on the line and the dot must be the first character.



        4.1  Case Control

             The  #CASE  command controls the display of upper and  lower 
        case in the editor screen and for the Save command.   Three types 
        of  words  - reserved words,  predefined  identifiers  and  user-
        declared  identifiers - may be displayed in either upper or lower 
        case.  The #CASE command is keyed into the Direct Mode screen.

             The format is:

                  #CASE=abc

             a,  b and c may be either 'U' or 'L'.   No spaces or  commas 
        are allowed in this command.

             a = reserved word case
             b = predefined identifiers case
             c = user-declared identifiers case

             The initial setting is  #CASE=ULL.



        Section 4:   Direct Mode

        Mystic Pascal  User Manual                                      17



        4.2  Video Snow

             The IBM Color Adapter may produce video noise or "snow" when 
        the video memory is directly updated.   Mystic Pascal does access 
        the  video memory directly because this is many times faster than 
        operating  through DOS.   Mystic Pascal is able to  suppress  the 
        snow  effect,  but  this may greatly slow down the display  speed 
        since screen updates may only be done during vertical retrace.

             Snow suppression is automatically turned on when running  on 
        the  Color  card.   Snow  suppression may be  suppressed  by  the 
        Mysticin installation program,  because some IBM compatible color 
        cards  do  not produce snow and should not be forced to  pay  the 
        speed penalty.

             Snow  suppression  may also be toggled on and off  with  the 
        #SNOW command in Direct Mode.  Do not use this command if a color 
        card is not present!   Color card users can easily see the effect 
        of snow suppression by trying this command and then examining the 
        System Display screen.


        4.3  Intermediate Code Listing

             The  Mystic  Pascal  compiler  parser  outputs  intermediate 
        codes.  The code generator then converts these "icodes" into 8086 
        object code.  Mystic's first optimizer operates on the icodes and 
        the second optimizer operates on the 8086 code.  

             The  #LIST  command produces a listing of the icodes on  the 
        printer.   This  listing is only for informational  purposes  for 
        hackers and other curious people.

             The formats are:

             #LIST = 1      Turn on Icode listing
             #LIST = 0      Turn off Icode listing

             Warning!   The Icode listing for a large program can be VERY 
        long and may not be interrupted once begun.


        4.4  Clear Screen Command

             In  Direct  Mode the screen may be cleared by  entering  '#' 
        followed by a return.





        Section 4:   Direct Mode


```
{% endraw %}

## PAS3.DOC

{% raw %}
```

        Mystic Pascal  User Manual                                      18


        5.  System Display

             The  System  Display screen contains  technical  information 
        about  the  current  state of the  Mystic  Pascal  system.   This 
        information is useful in storage allocation with the installation 
        program and when working with multi-tasking programs.

             This  screen  displays  the current  time-of-day  (The  PC's 
        onboard  clock  should  be correctly set.) and the  elapsed  time 
        since  Pascal  was started.   A storage map and a  table  of  the 
        currently  active  processes  are also  displayed.   The  Display 
        Screen  is  updated approximately once every second  when  it  is 
        being displayed. 




        5.1  Storage Map

             The storage map shows the several main storage areas used by 
        Mystic Pascal.   The starting address of each area is shown as an 
        absolute  20 bit (5 hex digit) number.   This information can  be 
        useful  when  using  the Install program to  modify  the  storage 
        configuration. 

        User Area

             The  user  area is reserved for variables  declared  in  the 
        user's  program.   Both  global variables and  procedures'  local 
        variables  are  allocated  in  this  region.   Pointer  variables 
        allocated  with the NEW procedure are placed in Dynamic  Storage, 
        not here.

        Laser

             The  large  area code-named "Laser"  contains  the  internal 
        symbolic  representation of the Pascal program.   Compiled object 
        code  and dynamic variables allocated with the NEW procedure  are 
        also  stored here.   The Laser may be up to a maximum of 640K  in 
        size.   The percent of this area which is currently allocated  is 
        displayed.

        Dynamic Storage

             Queue  messages and various system control blocks are stored 
        in  this area.   Dynamic storage may be up to 60K in  size.   The 
        percent of this area which is currently allocated is displayed.





        Section 5:   System Display

        Mystic Pascal  User Manual                                      19


        Feature Buffer

             This buffer is used by the advanced feature support.

        Screen Buffers

             The  non-displayed  CRT  screens are stored in  this  buffer 
        area.

        Optimizer Buffer

             The  optimizer  stores object code in this area  during  its 
        processing.

        System Stack

             This  is the 8086 stack segment.   A separate stack area  is 
        maintained for each concurrently executing process.

        System Data

             This is the main 8086 data segment.  

        System Code

             This  is  the 8086 code segment containing the  nucleus  and 
        compiler assembly code.

        Program Segment Prefix

             This  100H byte area is setup by DOS when Mystic  Pascal  is 
        started.   It  contains DOS system data areas and is not directly 
        used by Mystic Pascal.



















        Section 5:   System Display

        Mystic Pascal  User Manual                                      20


        5.2  Process Control Table

             This  is a display of the process control blocks  (PCB)  for 
        each   process  currently  allocated.    Seven  data  fields  are 
        displayed.

             The  nucleus'  process manager maintains  a  "pseudo-timer".  
        This  is  a  16 bit counter which  is  incremented  whenever  the 
        dispatcher  transfers control to another process.   The value  of 
        the  pseudo-timer is stored in a process control block when  that 
        process  is  dispatched.   This  provides a very fast  method  of 
        keeping  track of how recently each process has been  dispatched.  
        When the pseudo-timer wraps around to 0, all PCB timer fields are 
        also reset to 0.

             The  dispatcher can use this information to give  preference 
        to  those processes that have been waiting a relatively long time 
        for  a  chance to execute.   Each process is  assigned  a  static 
        priority  which is also considered by the dispatcher in selecting 
        a ready process.

        Process
             Name of the process.

        St
             Process current state
                  P = Pascal process STARTed by user
                  R = ready
                  W = waiting for queue message

        Count
             The number of times the process has been dispatched.

        SP
             The process's stack pointer.

        Time
             The pseudo-timer value when the process was last dispatched.

        Pr
             The  static priority of the process.   This value determines 
        what proportion of the processor time this process receives if it 
        is ready to execute.

        Dyn
             The  dynamic priority of the process.   This value  actually 
        determines  which ready process will be  next  dispatched.   This 
        value is equal to:  

                  static_priority + (current_pseudo_timer - time)


        Section 5:   System Display

        Mystic Pascal  User Manual                                      21


        6.  Help Windows

             The  Help  facility  is included in Mystic  Pascal  to  make 
        learning easier for students and to provide a very fast reference 
        source for experienced Pascal users.  The Help facility is always 
        available from any screen.  Four function keys are used for help:

             F7   Pascal Language Help
             F8   Standard Procedures & Functions Help
             F9   Editor Help
             F10  Function Key Help


             F7  Pascal Language Help

             Function  key F7 will display a menu window showing the Help 
        windows available.   Enter the letter or number key to select the 
        topic you want to see.  

             Enter  any character to leave a topic window and  enter  any 
        non menu character to leave the menu and return to the underlying 
        screen.

             F8  Standard Procedures & Functions Help

             Function  key F8 displays a menu window showing all  builtin 
        procedures  and functions.   Enter the letter or number to select 
        the topic you want to see

             F9   Editor Help

             Function key F9 displays a list of editor commands directly.  
        Hitting any key will remove the display.

             F10  Function Key Help

             Function  key  F10  displays  a list  of  all  function  key 
        assignments.   This is only a reminder list.   The other function 
        keys may not be invoked directly from this display window.













        Section 6:   Help Windows


```
{% endraw %}

## PAS4.DOC

{% raw %}
```

        Mystic Pascal  User Manual                                      22


        7.  Multi-tasking Support

             Mystic  Pascal  is  a  multi-tasking  system.   The  editor, 
        compiler, system display and other major components are processes 
        which execute concurrently.   Pascal programs may also use multi-
        tasking.

             In  Mystic Pascal any global procedure may be started as  an 
        independent  process  by the START builtin procedure.   Up to  50 
        Pascal   procedures  may  execute   concurrently.    The   system 
        automatically  switches  among the concurrent procedures as  they 
        execute.   Procedures  are  allowed to execute if  they  are  not 
        in a wait state and based on their static priority and the length 
        of  time  they  have  been waiting.   Even  the  lowest  priority 
        procedure will execute.

             Concurrent  procedures  will  run  until the  final  END  is 
        reached.   At  that time the process will be deleted.   The  same 
        Pascal source procedure may be started more than once -- a single 
        source   procedure  may  have  many   incarnations.    Concurrent 
        procedures  may be recursive,  may call  global  procedures,  may 
        access global variables and may START global procedures.






























        Section 7:   Multi-tasking Support

        Mystic Pascal  User Manual                                      23


        7.1  Message Passing

             Concurrent  procedures may communicate by passing  messages.  
        Messages  are  processed  by  Mystic  Pascal's  queue  management 
        system.   This  is  not  only for communication but  also  allows 
        efficient  synchronization  among the  concurrent  procedures  -- 
        attempting  to  receive a message from an empty queue causes  the 
        procedure to enter a wait state until a message arrives.

             Queues  are  first-in-first-out (FIFO)  storage  mechanisms.  
        The queue messages are stored in the dynamic storage area.  

             As  an example,  consider a concurrent procedure  LOG  whose 
        purpose  is  to write one line messages to a printer.   LOG  must 
        accept  messages from several other concurrent  procedures.   LOG 
        has  its own input queue from which it receives messages  and  to 
        which  other procedures send messages.   LOG can ensure that only 
        one user at a time (itself) does printing.  If several procedures 
        could  print  at  the same  time,  their  messages  could  become 
        interleaved resulting in a garbled printout.

                  PROCEDURE LOG;
                  LABEL 100;

                  BEGIN
                  QUEUE('LOGQ    ');
                  100:  RECEIVE('LOGQ    ', MSG);
                  {print the message}
                  GOTO 100;
                  END;

             Careful planning is necessary when concurrent procedures may 
        access a printer, console or disk files at the same time.  Having 
        one concurrent procedure handle all accesses is a common solution 
        to this issue.  This is related to the concept of a "monitor."

             Before a queue may be used,  it must be created by the QUEUE 
        builtin  procedure.   Each queue must have a unique 8 byte  name.  
        The builtin queue management procedures are:

             QUEUE     create a new queue
             SEND      store a message on a queue
             RECEIVE   get a message from a queue









        Section 7:   Multi-tasking Support

        Mystic Pascal  User Manual                                      24


        7.2  START

        START( procedure_name, process_name, stack_size );

             The  START  procedure  is  used  to  initiate  a  concurrent 
        procedure.   The  procedure  will execute as a  separate  process 
        until it terminates by reaching its final END.

             The  process_name is an 8 character ASCII field.   This name 
        is  displayed in the system display and is used in  the  PRIORITY 
        builtin  procedure.   A  single Pascal procedure may  be  started 
        several times.  Each start must use a unique process name.

             The  stack_size is an integer expression.   It specifies the 
        amount  of space to be allocated in paragraphs - multiples of  16 
        bytes.   Enough space must be included for this procedure's local 
        variables,  the  local variables of all procedures it  calls  and 
        additional stack space for evaluating expressions.

             If  the  concurrent  procedure  is recursive  or  calls  any 
        recursive procedures,  great caution should be used in estimating 
        the  stack_size  or an insufficient storage  run-time  error  may 
        result.

             The  priority of a concurrent procedure is initially set  to 
        20.  This may be modified by the PRIORITY builtin procedure.



             START( LOG, 'LOGPROC ', 30 );
             START( PRINTER, 'PRINTER ', 100 );
             START( DOWJONESPORT, 'DJP     ', 200 );




















        Section 7:   Multi-tasking Support

        Mystic Pascal  User Manual                                      25


        7.3  PRIORITY                                       ** 1.6 **

        PRIORITY( process_name, priority );

             The PRIORITY procedure is used to modify the static priority 
        of  a concurrent procedure which has been started.   The  initial 
        priority is 20.   The priority parameter is an integer expression 
        in the range 1 to 64.  



             PRIORITY( 'LOGPROC ', 10 );
             PRIORITY( 'DJP     ', 64 );
             PRIORITY( 'CHESS A ', 40 );
             PRIORITY( 'CHESS B ', 35 );





































        Section 7:   Multi-tasking Support

        Mystic Pascal  User Manual                                      26


        7.4  QUEUE                                          ** 1.6 **

        QUEUE( queue_name );

             The QUEUE procedure creates a new queue for message passing.  
        Each  queue  is identified by a unique 8 byte queue  name.   This 
        name does not have to be ASCII.



             QUEUE( 'LOGQ    ' );
             QUEUE( 'ERRORMSG' );
             QUEUE( 'COMMANDS' );







































        Section 7:   Multi-tasking Support

        Mystic Pascal  User Manual                                      27


        7.5  SEND                                           ** 1.6 **

        SEND( queue_name, variable );

             The SEND procedure stores a message on a queue.   The  queue 
        must have been created by the QUEUE procedure.

             The  concurrent  procedure that issues the SEND will  resume 
        execution immediately unless the space allowed for this queue  is 
        full.   Then  the issuer is placed in a wait state until space is 
        released  by another concurrent procedure removing messages  from 
        the queue.



             SEND('RED ALRT','EEG INPUT CORRELATES 1.0 WITH PREDICTION');
             SEND( 'TREESORT', ROOTPTR );
             SEND( 'COMPILER', SOURCEARRAY );


































        Section 7:   Multi-tasking Support

        Mystic Pascal  User Manual                                      28


        7.6  RECEIVE                                        ** 1.6 **

        RECEIVE( queue_name, variable );

             The  RECEIVE procedure removes the oldest message  from  the 
        specified  queue.   If  no messages are present,  the  issuer  is 
        placed in a wait state until a message arrives.




             RECEIVE( 'PRINTER ', OUTPUTLINE );
             RECEIVE( 'BROKER3 ', STOCKORDER );
             RECEIVE( 'EDITOR  ', COMMAND );






































        Section 7:   Multi-tasking Support


```
{% endraw %}

## PAS5.DOC

{% raw %}
```

        Mystic Pascal  User Manual                                      29


        8.  Procedures and Functions

             This   section  of  the  manual  describes  procedures   and 
        functions.    Procedures   and   functions  which  are  used   in 
        Input/Output  processing  are described  in  section  9.   Multi-
        tasking procedures are described in section 7.


                Procedure       Purpose
                ---------       -------
                DISPOSE         deallocate dynamic variable 
        +       INTR            interrupt call
                NEW             allocate dynamic variable 
                PACK            unimplemented
                UNPACK          unimplemented

                Function        Return Value
                --------        ------------
                ABS             absolute value
                ARCTAN          arctangent
                CHR             convert integer to character
                COS             cosine
                EXP             exponential function
        +       FLOAT           convert integer to real
        +       FRACTION        fractional part of real
        +1.6    INTSTR          convert integer to string
                LN              natural logarithm
                ODD             test for odd integer
        +       OFFSET          offset of a variable
                ORD             convert ordinal to integer
                PRED            preceding ordinal
        +1.6    REALSTR         convert real number to string
                ROUND           convert real number to integer
        +       SEGMENT         segment of a variable
                SIN             sine
                SQR             square
                SQRT            square root
        +1.6    STRINT          convert string to integer
        +1.6    STRREAL         convert string to real number
                SUCC            succeeding ordinal 
                TRUNC           convert real number to integer
        +1.6    UPCASE          convert char to upper case










        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      30


        8.1  ABS


        ABS( expression ) 
           

             The  ABS standard function returns the absolute value of  an 
        integer  or real expression.   The result is of the same type  as 
        the input expression.

        Examples:

                A := ABS( X );

                WRITELN( 'ABSOLUTE VALUE IS',ABS( COS( Y )));

                B := ABS( X + Y / Z );



































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      31


        8.2  ARCTAN


        ARCTAN( expression ) 


             This  standard function returns the arctangent of a real  or 
        integer expression.   The result type is real and is expressed in 
        radians.


        Examples:

                WRITELN( ARCTAN( A + 3.14159 ));

                NODE.VALUE := OLDNODE.VALUE + ARCTAN( V );




































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      32


        8.3  CHR


        CHR( integer_expression ) 


             The  CHR  standard function converts an  integer  expression 
        into  a  character.   The result type is char.   If  the  integer 
        expression  is  less than zero or greater than  255,  a  run-time 
        error occurs.

             CHR  is often used for sending control characters to  output 
        devices.


        Examples:

                WRITE( CHR( 12 ));

                TAB := CHR( 9 );

                CARRIAGERETURN := CHR(13);

                LINEFEED := CHR(10);




























        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      33


        8.4  COS


        COS( expression ) 


             The  COS standard function returns the cosine of a  real  or 
        integer expression whose value is given in radians.   The  result 
        type is real.


        Examples:

                WRITELN( COS( ANGLE ));

                NODE.COSINE := COS( N );

                WRITELN( COS( VELOCITY / CHARGE ));


































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      34


        8.5  DISPOSE


        DISPOSE( pointer_variable ) 

              
             The   DISPOSE  procedure  is  used  to  deallocate   dynamic 
        variables.  The  pointer_variable addresses a dynamic variable in 
        dynamic  storage.   After  execution of the procedure  the  space 
        released is available for other uses.
           
             Mystic  Pascal  supports  true dynamic  storage  with  auto-
        compression.   When  blocks are freed up,  storage  fragmentation 
        occurs -- unused blocks tend to accumulate.   Because many blocks 
        tend to be small,  they cannot be immediately reused for  another 
        purpose.   When  storage  becomes  short an  auto-compression  is 
        initiated by the Pascal system.  


        Example:

                PROCEDURE DISPOSEDEMO;
                TYPE
                DYNVAR = ARRAY [1..200] OF CHAR;
                VAR
                POINTER : ^DYNVAR;
                BEGIN
                NEW( POINTER );  (* ALLOCATE A DYNAMIC VAR *)

                (* DO SOME PROCESSING WITH THE DYNAMIC VAR *)

                DISPOSE( POINTER ); (* FREE UP THE 200 BYTES *)
                END;



















        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      35


        8.6  EXP


        EXP( expression ) 


        The exponential function computes e to the x power,  where x is a 
        real or integer expression.  The result type is real.


        Examples:

                X := EXP( Y );

                SHIPVELOCITY := EXP( WARPFACTOR );





































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      36


        8.7  FLOAT         (Non-Standard Feature)


        FLOAT( integer_expression )


             The Float function converts integers to real  numbers.   The 
        result type is real.  












































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      37


        8.8  FRACTION      (Non-Standard Feature)


        FRACTION( real_expression )


             The  Fraction function returns the fractional part of a real 
        number.  The result type is real.












































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      38


        8.9  INTR          (Non-Standard Feature)


        INTR( interrupt, registers )


             The  INTR procedure permits access to DOS and BIOS functions 
        by  directly  calling  interrupt  routines.    The  standard  DOS 
        interrupt is number 33.   The interrupt number must be an integer 
        expression.   The  registers  variable is used to  set  the  8086 
        registers  on  entry  and they are stored into  the  variable  on 
        return from the interrupt routine.

             Registers is declared as:

             REGISTERS = RECORD
                  AX,BX,CX,DX,BP,SI,DI,DS,ES,FLAGS : INTEGER
                  END;


































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      39


        8.10  INTSTR       (Non-Standard Feature)           ** 1.6 **

             INTSTR( integer )

             The  Intstr function converts an integer to a  string.   The 
        result type is 

             PACKED ARRAY [1..6] OF CHAR

             The characters are right aligned in the field.


             CHART.XAXIS[I] := INTSTR( I * DELTA );

             REPORT.YEAR1 := INTSTR( YR );





































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      40


        8.11 LN


        LN( expression ) 


             The  LN function computes the natural logarithm of a real or 
        integer expression.   If the expression is less than or equal  to 
        zero a run-time error occurs.  The result type is real.


        Examples:

                X := LN( Y );

                WRITELN( LN( X + SQR(Y)));

                IF LN( FACTORBETA ) < 0.1 THEN
                        WRITELN(FACTORBETA);

                A := SQRT( LN(Z));































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      41


        8.12  NEW

        Format 1
        NEW( pointer_variable ) 

        Format 2
        NEW( pointer_variable, tag1,..., tagn ) 

             The NEW procedure allocates new dynamic variables.   A block 
        of dynamic storage of the required size is obtained.  The block's 
        indirect address, not its actual address is stored in the pointer 
        variable.

             After  NEW  has been executed,  the dynamic variable may  be 
        accessed.   Dynamic variables remain allocated until specifically 
        deallocated by the DISPOSE procedure.  If a procedure uses NEW to 
        allocate  a dynamic variable,   that variable  remains  allocated 
        after the procedure ends.
          
             Format  2 contains 1 to n tag fields.   These are the fields 
        specified in the CASE clause of variant records.































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      42


        Example:

                (* PROGRAM FRAGMENT TO ALLOCATE A       
                   LINKED LIST OF VARIABLE LENGTH.      
                   THE ROOT OF THE LIST IS A GLOBAL     
                   VARIABLE.  NODES AFTER THE FIRST       
                   ARE INSERTED BETWEEN THE ROOT AND    
                   THE FIRST NODE.                      *)

                TYPE
                NODE =  RECORD
                        NEXT : INTEGER;
                        DATA : REAL 
                        END;
                VAR
                ROOT : ^NODE;

                PROCEDURE LINKEDLIST ( COUNT : INTEGER );
                VAR
                I : INTEGER;
                TEMP : ^NODE;
                BEGIN
                (* ALLOCATE FIRST NODE *)
                NEW( ROOT );

                (* SET END_OF_LIST INDICATOR *)
                ROOT^.NEXT := NIL;

                (* ALLOCATE LINKED LIST *)
                FOR I := 1 TO COUNT DO
                        BEGIN
                        NEW( TEMP );
                        TEMP^.NEXT := ROOT;
                        ROOT := TEMP 
                        END 
                END; (* LINKEDLIST *)
















        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      43


        8.13  ODD


        ODD( integer_expression ) 


             ODD  is a Boolean function which returns the value  true  if 
        the integer_expression is odd otherwise it returns false.

             The expression X is odd if (abs(X) mod 2) equals one.


        Examples:

                IF ODD(X) THEN  TESTFORPRIME(X);

                IF ODD(I) THEN I:=I+1;

                WRITELN( ODD(Y) );

































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      44


        8.14  OFFSET       (Non-Standard Feature)


        OFFSET( variable )


             The Offset function returns the offset of a variable.   Used 
        with the Segment function, this allows passing parameters such as 
        strings of characters to DOS with the INTR procedure.  The result 
        type is integer.










































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      45


        8.15  ORD


        ORD( ordinal_expression ) 


             The  ORD  function converts an ordinal value to  an  ordinal 
        number.  For example, if

             TYPE  DAYS = (SUN,MON,TUE,WED,THU,FRI,SAT);

        then ORD(TUE) is equal to 2.


        Example:

                REPEAT
                  READ(INFILE, CH);
                  WRITE( CH ) 
                UNTIL ORD(CH) = 26;     (* EOF CHAR DETECTION *)

                (* ASCII DISPLAY *)
                FOR CH := ' ' TO 'z' DO
                        WRITELN( CH, ' = ',ORD(CH));




























        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      46


        8.16  PACK and UNPACK

             The  PACK and UNPACK Pascal standard procedures are not used 
        in Mystic Pascal.   A Pascal program may contain these procedures 
        but they will be treated as null operations.















































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      47


        8.17  PRED


        PRED( ordinal_expression ) 


             The PRED function is the inverse of the SUCC function.   The 
        predecessor  function returns the ordinal value that is one  less 
        than the input expression.  

             The PRED of 8 is 7.  The PRED of 'T' is 'S'.  


        Example:

                WRITELN( A, PRED(A) );

                WRITELN( CH, PRED(CH) );


































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      48


        8.18  REALSTR      (Non-Standard Feature)           ** 1.6 **

        REALSTR( real_expression, mode, width, frac );

             The Realstr function converts real numbers to strings.   All 
        four parameters must always be present.  The mode, width and frac 
        parameters  are all integer expressions.   Three conversion modes 
        are available.

        Mode=0   Simple mode  -   no leading blanks,  no trailing  zeros, 
        exponent field is displayed only if required

        Mode=1   Floating Point mode -  width parameter specifies  result 
        size.

        Mode=2   Fixed Point mode - width parameter specifies result size 
        and frac parameter specifies number of fractional digits.



             EDITAREA := REALSTR( AMOUNT, 2, 10, 4 );

             FIELD4 := REALSTR( TOTAL, 0, 0, 0 );





























        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      49


        8.19  ROUND


        ROUND( real_expression ) 


             ROUND   is  a  standard  function  which  converts  a   real 
        expression  to  an  integer value.   If X >= 0 then  ROUND(X)  is 
        TRUNC(X + 0.5).  If X < 0 then ROUND(X) is TRUNC(X - 0.5).

             ROUND( 2.5 ) is 3
             ROUND( -2.5 ) is -3
          
             If  the real value is too large to be converted  to  integer 
        format a run-time error occurs.


        Examples:

                INT := ROUND( X + Y );

                TEMPERATURE := ROUND( THERMOMETERREADING );
            
                PLOTX := ROUND( X / SCALINGFACTOR );




























        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      50


        8.20  SEGMENT      (Non-Standard Feature)


        SEGMENT( variable )


             The  Segment  function  returns  the segment  address  of  a 
        variable.   For  global  variables this is the same as  the  User 
        Area.   For local variables this will be a value inside the  User 
        Area.    Used  with  the  Offset  function  this  allows  passing 
        parameters  such  as strings of characters to DOS with  the  INTR 
        procedure.  The result type is integer.








































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      51


        8.21  SIN


        SIN( expression ) 


             The  SIN  standard  function returns the sine of a  real  or 
        integer expression whose value is given in radians.   The  result 
        type is real.


        Examples:

                WRITELN( SIN( ANGLE ));

                NODE.SINE := SIN( N );

                WRITELN( SIN( VELOCITY / CHARGE ));


































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      52


        8.22  SQR


        SQR( expression ) 


             The  SQR standard function computes the square of a real  or 
        integer  expression.   The result type is of the same type as the 
        input expression.


        Examples:

                WRITELN( 'SQUARE OF X IS ', SQR(X) );

                AREA := SQR( SIDE );

                CIRCLEAREA := PI * SQR( RADIUS );

                ENERGY := MASS * SQR( LIGHTSPEED );
































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      53


        8.23  SQRT


        SQRT( expression ) 


             This standard function returns the square root of a real  or 
        integer  expression.   The  result type is real and is  always  a 
        positive value.   A run-time error occurs if the input expression 
        is negative.


        Examples:

                WRITELN( SQRT( A + 3.14159 ));

                NODE.VALUE := OLDNODE.VALUE + SQRT( V );



































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      54


        8.24  STRINT       (Non-Standard Feature)           ** 1.6 **

        STRINT( string )

             The Strint function converts a string to an integer.  If the 
        string  does  not contain a valid integer as its first  non-blank 
        characters, a value of -32768 is returned.


             VALUE := STRINT( INPUTSTRING );

             X := STRINT( GETNUM );








































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      55


        8.25  STRREAL      (Non-Standard Feature)           ** 1.6 **

        STRREAL( string )

             The Strreal function converts a string to a real number.  If 
        the string does not contain a valid real number as its first non-
        blank characters, a value of -9.999E-30 is returned.


             A := STRREAL( TEXTVALUE );

             X := STRREAL( VECTOR[ J ] );








































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      56


        8.26  SUCC


        SUCC( ordinal_expression ) 


             The  successor function is the inverse of the PRED function.  
        The SUCC function takes an ordinal value and returns the  ordinal 
        value one greater.  

             The SUCC of 7 is 8.  The SUCC of 'S' is 'T'.


        Example:

                WRITELN( A, SUCC(A) );

                WRITELN( CH, SUCC(CH) );


































        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      57


        8.27  TRUNC


        TRUNC( real_expression ) 


             TRUNC   is  a  standard  function  which  converts  a   real 
        expression  to an integer value.   The fractional portion of  the 
        real expression is truncated.

             TRUNC(2.5) is 2
             TRUNC(-2.5) is -2
          
             If  the real value is too large to be converted  to  integer 
        format a run-time error occurs.


        Examples:

                INT := TRUNC( X + Y );

                TEMPERATURE := TRUNC( THERMOMETERREADING );

                PLOTX := TRUNC( X / SCALINGFACTOR );




























        Section 8:  Procedures and Functions

        Mystic Pascal  User Manual                                      58


        8.28  UPCASE       (Non-Standard Feature)           ** 1.6 **


        UPCASE( expression ) 


             The  UPCASE  function  is a Mystic  Pascal  extension  which 
        converts  a char or string expression to upper case.   The result 
        type is the same as the input expression type.  



        Examples:

                IF UPCASE( COMMAND ) = 'X' THEN
                        CMDX;

                WRITE( F1, UPCASE(NAME) );

                READLN( OPTION );
                IF UPCASE( OPTION ) = 'EXIT' THEN GOTO 99;































        Section 8:  Procedures and Functions


```
{% endraw %}

## PAS6.DOC

{% raw %}
```

        Mystic Pascal  User Manual                                      59


        9.  Input/Output

             Mystic  Pascal  supports all standard Pascal I/O  procedures 
        and  functions  and has extensions to support  random  disk  file 
        access and to assign a DOS file name to a Pascal file variable.

        +    ASSIGN         associate a file name with a file variable
        +    CLOSE          terminate processing on a file 
             EOF            Boolean function indicates end-of-file 
                            condition
             EOLN           Boolean function indicates end-of-line
                            condition for text files
        1.6  GET            move file pointer to next component
        +    IORESULT       integer function status of I/O operation
             PAGE           advance textfile output to new page
        1.6  PUT            append buffer variable to file
             READ           obtain input from console or disk file
             READLN         obtain textfile input from new line
             RESET          prepare an existing file for input
             REWRITE        create a file for output
        +    SEEK           position the file pointer for random access
             WRITE          output data to console, printer, disk file
             WRITELN        output textfile data and terminate line





























        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      60


        9.1  File Variables

             File variables,  like other variables, are declared in a VAR 
        section.  They indicated the data type of the file's components.

             TYPE
             DATAFILE = FILE OF REAL;
             VAR
             F1 : DATAFILE;
             F2 : FILE OF ARRAY [0..63] OF CHAR;
             F3 : TEXT;

             Textfiles   are  declared  by  the  predefined  type   TEXT.  
        Textfiles consist of lines of characters separated by the end-of-
        line byte sequence 0DH, 0AH (carriage return, line feed).



        9.2  Standard Files

             The  DOS operating system supports several standard  "files" 
        or logical devices which are always available.  These may be used 
        directly  as  file variables in Read/ln and Write/ln.   They  may 
        also  be  assigned  to  Pascal  file  variables  by  the   Assign 
        procedure.

             CON       standard console device  (input/output)
             KBD       keyboard device  (input without echoing)
             AUX       auxiliary device  (input/output)
             LST       printer  (output)
             PRN       printer  (output)

             If  no file variable is specified as the first parameter  in 
        the  Read/ln or Write/ln procedures,  the default files INPUT and 
        OUTPUT respectively are used.  These are assigned to the standard 
        console and keyboard devices.



        9.3  How to Send Data to Your Printer

             To  route  output to your printer specify the Standard  File 
        LST or PRN in your WRITE or WRITELN statements. 

             WRITELN( PRN, 'This line will be printed.');

             WRITE( PRN, 'X =',X,'   Y =',Y,'   Z =',Z );





        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      61


        9.4  ASSIGN        (Non-Standard Feature)

             ASSIGN( Filvar, String )

             ASSIGN( Filvar, Standard_file )

             The  procedure  Assign is used to associate a file  variable 
        with a particular disk file or standard file.

             The  ability  to  assign standard files to a  file  variable 
        allows  complete I/O redirection within a  Pascal  program.   For 
        example,  a  program which creates reports could route its output 
        to a disk file one time and to a printer or console another time.  
        There  is no need for separate WRITE statements for each type  of 
        output.

             10: WRITELN('Select output device for Report Listing');
                 WRITELN('1 = Console   2 = Printer   3 = Diskfile');
             READLN(X);
             CASE X OF
             1 : ASSIGN( REPORTFILE, CON );
             2 : ASSIGN( REPORTFILE, PRN );
             3 : ASSIGN( REPORTFILE, 'REPORT.LST' );
             ELSE GOTO 10
             END; 



























        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      62


        9.5  CLOSE         (Non-Standard Feature)

        CLOSE( Filvar )

             The   Close  procedure  must  be  called  after   completing 
        processing  on  a disk file to ensure that the disk directory  is 
        updated.  Failure to Close a file after updating it may result in 
        the loss of data.

             Closing  a file variable to which a standard file  has  been 
        assigned is treated as a null operation.


             CLOSE( F1 );

             CLOSE( REPORTFILE );

             CLOSE( SORTFILE2 );


































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      63


        9.6  EOF

        EOF( Filvar )

             Eof  is  a Boolean function which indicates the  end-of-file 
        condition.   Eof  is true only when the file pointer points  past 
        the last component of the file, otherwise it is false.


             { Copy F1 into F2 }
             WHILE NOT EOF( F1 ) DO
                  BEGIN
                  READ( F1, X );
                  WRITE( F2, X )
                  END





































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      64


        9.7  EOLN

        EOLN

        EOLN( Filvar )

             Eoln  is a Boolean function which indicates the  end-of-line 
        condition of a textfile.   If no file variable is specified,  the 
        function assumes the file INPUT.   It is a compiler error if  the 
        file variable is not a textfile.  


             { Average N numbers from the console }
             SUM := 0;      N := 0;
             WHILE NOT EOLN DO
                  BEGIN
                  READ( X );
                  SUM := SUM + X;
                  N := N + 1
                  END
             WRITELN( 'The average is', SUM DIV N );































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      65


        9.8  GET, PUT and Buffer Variables                  ** 1.6 **

             Standard  Pascal supports Input/Output operations which  are 
        more  primitive than Read and Write.   In fact Read and Write are 
        defined in terms of the procedures Get and Put,  which only  move 
        data between a file and its buffer variable.

             A  buffer variable is associated with each file.   Its  data 
        type  is  the  same  as the components of  the  file.   A  buffer 
        variable  is accessed by using the file variable's name  followed 
        by an uparrow.

             WRITE( F, X )  is equivalent to    F^ := X;  PUT( F )

             READ( F, X )   is equivalent to    GET( F );  X := F^



        GET( Filvar )

             The  Get  procedure advances the file pointer  to  the  next 
        component of the file.  The current component is available in the 
        file's buffer variable.



        PUT( Filvar )

             The  Put procedure appends the value in the buffer  variable 
        to  the file.   The condition EOF( Filvar ) must be true when Put 
        is called.





















        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      66


        9.9  IORESULT

        IORESULT

             This  integer  function gives the return code from the  last 
        Input/Output  operation.   It should be checked after each  RESET 
        and REWRITE to be sure that the operation completed successfully.  
        The IORESULT values are the same values returned by DOS.

             0         Successful completion
             1         Invalid function number
             2         File not found
             3         Path not found
             4         Too many open files (no handles left)
             5         Access denied
             6         Invalid handle
             7         Memory control blocks destroyed
             8         Insufficient memory
             9         Invalid memory block address
             10        Invalid environment
             11        Invalid format
             12        Invalid access code
             13        Invalid data
             14        (not used)
             15        Invalid drive was specified
             16        Attempted to remove the current directory
             17        Not same device
             18        No more files
























        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      67


        9.10  PAGE

        PAGE

        PAGE( Filvar )

             The  Page procedure causes the textfile to begin printing on 
        a new page if printed on a suitable device.   If no file variable 
        is specified, the file OUTPUT is assumed.  It is a compiler error 
        if the file variable is not a textfile.   If the file contains  a 
        partial line of text, an implicit Writeln is issued.
             
             Page always outputs a form feed character CHR(12).


             PAGE;

             PAGE( REPORTFILE );


































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      68


        9.11  READ

        READ( variable_list )

        READ( Filvar, variable_list )

             The Read procedure is used to obtain input from a disk  file 
        or  standard  file  such  as the  console  keyboard.   The  input 
        value is stored directly into one or more variables.   If no file 
        variable is specified, the INPUT file is assumed.



             READ( X, Y, Z );

             READ( F1, CUSTOMER );

             FOR I := 1 TO 100 DO  READ( F2, X[I] );


































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      69


        9.12  READLN

        READLN

        READLN( variable_list )

        READLN( Filvar )

        READLN( Filvar, variable_list )

             The  Readln procedure is similar to Read but may be  applied 
        only to textfiles.  After the Readln has been processed, the file 
        pointer  is  set  to the beginning of the  following  text  line.  
        Unused data on the current line is skipped over.



             READLN;        {Skip to next line of keyboard input}

             READLN( DATAFILE, PARM1, PARM2, PARM3 );  {ignore parm4,5}
































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      70


        9.13  RESET

        RESET( Filvar )

             The  Reset  procedure is used to open an existing disk  file 
        for  input or output operations.   An Assign procedure must  have 
        been  used  before Reset to assign a disk file name  or  standard 
        file with the file variable.  Reseting a file variable to which a 
        standard file has been assigned is treated as a null operation.

             If  a  disk file is not found by  Reset,  a  run-time  error 
        occurs.

             
             RESET( F2 );

             RESET( DATAFILE );

             RESET( TEXTFILE );

































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      71


        9.14  REWRITE

        REWRITE( Filvar )

             The  Rewrite procedure is used to create a new disk file for 
        output and input.  If a disk file with the same file name already 
        exists, it is deleted before the new file is created.

             An  Assign procedure must have been used before  Rewrite  to 
        assign  a disk file name or standard file to the  file  variable.  
        Rewriting  a  file  variable to which a standard  file  has  been 
        assigned is treated as a null operation.

             If the disk directory is full, a run-time error occurs.


             REWRITE( F4 );

             REWRITE( REPORTFILE );

             REWRITE( DATAFILE );































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      72


        9.15  SEEK         (Non-Standard Feature)

        SEEK( Filvar, N )

             The  Seek  procedure positions the file pointer at  the  Nth 
        component of the file.  The first component is number 0.  It is a 
        compiler error if the file variable is a textfile.

             Seek is used for random access file processing.


             SEEK( F1, INDEX );

             SEEK( DOSSIER, AGENTNUM );






































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      73


        9.16  WRITE

        WRITE( variable_list )

        WRITE( Filvar, variable_list )

             The  Write  procedure  is used to output data  values  to  a 
        textfile or non-textfile.   If no file variable is specified, the 
        OUTPUT file is assumed.  If the file is a textfile then integers, 
        reals and Booleans are automatically converted to text format.



             WRITE('Enter longitude, latitude of target : ');

             WRITE( REPORTFILE, CHR(9), 'SALES SUMMARY FOR ',MONTH );

             WRITE( MODEM, SIGNON );


































        Section 9:   Input/Output

        Mystic Pascal  User Manual                                      74


        9.17  WRITELN

        WRITELN

        WRITELN( variable_list )

        WRITELN( Filvar )

        WRITELN( Filvar, variable_list )


             The  Writeln  procedure is similar to Write but may only  be 
        applied to textfiles.   After the variables on the list have been 
        output,  a standard end-of-line byte sequence is output.  This is 
        (carriage_return, line_feed) 13, 10.



             PROCEDURE SKIP ( X : INTEGER );
             VAR I : INTEGER;
             BEGIN
             IF (X > 0) AND (X <= 60) THEN
                  FOR I := 1 TO X DO WRITELN 
             END;

             
             WRITELN( F1 );

             WRITELN( F1, X, Y, Z );























        Section 9:   Input/Output


```
{% endraw %}

## PAS7.DOC

{% raw %}
```

        Mystic Pascal  User Manual                                      75


        10.  Mysticin Installation Program

             The installation program is used to modify the Mystic Pascal 
        system  to  match  your particular computer  system  and  program 
        needs.   The characteristics of your video display are the  major 
        factors  to be adjusted.   When Mystic Pascal starts up,  it will 
        detect  if  a monochrome or color video adapter  is  present  and 
        behave appropriately.   If you have another type of adapter, such 
        as,  an  Enhanced  Graphics Adapter,  you must run  the  Mysticin 
        program before using Mystic.

             To run the installation program, enter:

             MYSTICIN

             The  program  is  self-explanatory and will prompt  for  all 
        required   information.    Various  parameters  determining   the 
        configuration of storage in Mystic Pascal may also be modified.


































        Section 10:   Mysticin Installation Program


```
{% endraw %}

## PAS8.DOC

{% raw %}
```

        Mystic Pascal  User Manual                                      76


        11.  Programming Notes


             This   section  contains  a  list  of  informal  programming 
        suggestions.  Experienced programmers will find nothing new here.  
        Users who are new to programming may find some tips here that are 
        useful.

             Some  of  these  notes concern programming  in  general  and 
        others are specific to Pascal.


        1. Pascal procedures and functions should be kept small.  If they 
        are 24 lines or smaller,  you can view an entire procedure on one 
        CRT screen.

        2.  Give  meaningful names to all the program's  constants,  data 
        types, variables, procedures and functions.  Mystic Pascal allows 
        identifiers to be any length and all characters are  significant.  
        When  meaningful  names are used,  your Pascal program  is  self-
        documenting.

        3.  Use the programming technique of "stepwise refinement."  That 
        is,  after you have completed the high level program design,  get 
        some basic parts of the program running first, then gradually add 
        more  features until the whole program is complete.   If you  can 
        see interesting results from your program early on,  its good for 
        your morale and makes work easier.   By using stepwise refinement 
        you  can  focus your attention on one small objective at a  time.  
        Debugging  is also simplified since any bugs will probably be  in 
        the small areas most recently changed.

        4.  If  some  section  of  a program  gradually  evolves  into  a 
        patchwork of changes and changes upon changes, it is usually best 
        to  throw  it  out and reprogram that  section.   This  may  seem 
        wasteful but you can probably reprogram some process in one fifth 
        the  time  it originally took.   You will gain  a  cleaner,  more 
        reliable,  more efficient piece of code.   














        Section 11:   Programming Notes

        Mystic Pascal  User Manual                                      77


        5.  When  you  have a bug in your program that takes more than  5 
        minutes  to resolve,  this simple technique may  be  surprisingly 
        effective in organizing the debugging effort.

                  1.  Take a fresh sheet of paper -- it  really 
                 is  important  to have a clean work area  free 
                 from distracting unrelated information.

                  2.  Make a list of all known symptoms of  the 
                 bug.

                  3. Make a list of 3 to 5 hypotheses which may 
                 explain the error.

                  4.  Perform  further tests on the program  to 
                 gather more information.   The tests should be 
                 guided by the hypotheses.

                  5.  Proceed with testing, adding new symptoms 
                 to the list,  deleting disqualified hypotheses 
                 and  adding new hypotheses until the answer is 
                 found.

             The  purpose of this technique is to clarify your vision  of 
        the  problem state.   This procedure may lead very quickly  to  a 
        solution  to difficult problems.   This is essentially the method 
        used  by some types of artificial intelligence expert systems  to 
        solve very hard problems.
























        Section 11:   Programming Notes

        Mystic Pascal  User Manual                                      78


        6.  When your program creates or modifies complex data structures 
        it  is  extremely useful to have  a  validation  procedure.   The 
        Mystic Pascal system itself contains validation code which checks 
        over  the  structure of the Dynamic Storage and Laser at  regular 
        intervals.   This code is activated every few seconds by the IDLE 
        process.  

             Programs  which  create and maintain large linked  lists  or 
        trees  in  dynamic  storage  or  which  maintain  complex  tables 
        (arrays) of data are prone to program anomolies (bugs) which  can 
        be  very hard to detect.   Since the computer is a master at  the 
        tedious  and detailed inspection of minutae,  why not let it keep 
        an eye on your exquisitely complex structures of data?  

             For  example,  if you are creating a linked list in  dynamic 
        storage  using the NEW procedure,   a validation procedure  might 
        travel  down the linked list examining each field in each  record 
        for reasonable values.  When it finds some questionable value, it 
        can  report  a  probable error and  perhaps  interrupt  the  main 
        program.

             A  validation  procedure  may  be  called  every  time   the 
        structure is modified or only after some major modifications.  Or 
        in  Mystic  Pascal,  it  could  be implemented  as  a  concurrent 
        procedure with a rather low priority.

             The  small  amount  of time needed  to  write  a  validation 
        procedure for a complex data structure can be returned many times 
        in  reduced debugging time.   























        Section 11:   Programming Notes


```
{% endraw %}

## PAS9.DOC

{% raw %}
```

        Mystic Pascal  User Manual                                      79


        A.  Error Messages


        Identifier  Space Error -- The program being loaded has filled up 
        the  storage  area reserved for  identifiers.   Run  the  Install 
        program to increase the amount of Identifier Storage.

        Laser  Space Error -- The program being loaded has filled up  the 
        Laser storage area.  Run the Install program to increase the size 
        of the Laser.










































        Appendix A:   Error Messages

        Mystic Pascal  User Manual                                      80


        B.  ASCII Table


        00   0   NUL             2B   43   +              56   86   V
        01   1   SOH             2C   44   ,              57   87   W
        02   2   STX             2D   45   -              58   88   X
        03   3   ETX             2E   46   .              59   89   Y
        04   4   EOT             2F   47   /              5A   90   Z
        05   5   ENQ             30   48   0              5B   91   [
        06   6   ACK             31   49   1              5C   92   \
        07   7   BEL             32   50   2              5D   93   ]
        08   8   BS              33   51   3              5E   94   ^
        09   9   HT              34   52   4              5F   95   _
        0A  10   LF              35   53   5              60   96   `
        0B  11   VT              36   54   6              61   97   a
        0C  12   FF              37   55   7              62   98   b
        0D  13   CR              38   56   8              63   99   c
        0E  14   SO              39   57   9              64  100   d
        0F  15   SI              3A   58   :              65  101   e
        10  16   DLE             3B   59   ;              66  102   f 
        11  17   DC1             3C   60   <              67  103   g
        12  18   DC2             3D   61   =              68  104   h
        13  19   DC3             3E   62   >              69  105   i
        14  20   DC4             3F   63   ?              6A  106   j
        15  21   NAK             40   64   @              6B  107   k
        16  22   SYN             41   65   A              6C  108   l
        17  23   ETB             42   66   B              6D  109   m
        18  24   CAN             43   67   C              6E  110   n
        19  25   EM              44   68   D              6F  111   o
        1A  26   SUB             45   69   E              70  112   p
        1B  27   ESC             46   70   F              71  113   q
        1C  28   FS              47   71   G              72  114   r
        1D  29   GS              48   72   H              73  115   s
        1E  30   RS              49   73   I              74  116   t
        1F  31   US              4A   74   J              75  117   u
        20  32   space           4B   75   K              76  118   v
        21  33   !               4C   76   L              77  119   w
        22  34   "               4D   77   M              78  120   x
        23  35   #               4E   78   N              79  121   y
        24  36   $               4F   79   O              7A  122   z
        25  37   %               50   80   P              7B  123   {
        26  38   &               51   81   Q              7C  124   |
        27  39   '               52   82   R              7D  125   }
        28  40   (               53   83   S              7E  126   ~
        29  41   )               54   84   T              7F  127   DEL
        2A  42   *               55   85   U






        Appendix B:   ASCII Table

        Mystic Pascal  User Manual                                      81


        C.  ISO Standard Pascal

             Mystic  Pascal  intends to comply 100% with the  ISO  Pascal 
        Standard  Level  0.   This is essentially identical to  the  ANSI 
        Pascal  Standard.   The  British  Standard  Institute's  official 
        Pascal  Validation  Suite is used to test  compliance  of  Mystic 
        Pascal with the ISO Standard.

             For  several years there has been a vigorous debate over the 
        Pascal Standard and various non-standard compilers.  The language 
        purists  insist that every Pascal compiler comply perfectly  with 
        the ISO Standard.   The primary reason is to promote  portability 
        of Pascal programs among the many types of computers.  

             On  the other side are those who argue that the basic Pascal 
        Standard  lacks many important features such as string  handling, 
        random  file  access  and  separate  compilation  and   therefore 
        extensions are necessary for all but the simplest programs.  

             Thankfully,  the  ISO  Standard offers an escape  from  this 
        dilemma,  although  one  that  increases the  complexity  of  the 
        compiler.    A  compiler  may  offer  extensions  and  still   be 
        considered  standard  if those extensions are documented  and  if 
        they  may be switched off.   This is the path that Mystic  Pascal 
        takes.



























        Appendix C:   ISO Standard Pascal


```
{% endraw %}

## TUTOR.DOC

{% raw %}
```
TUTOR.DOC

	This file explains how to get started in Mystic Pascal and
how to run the TUTOR program.

1. Make a backup copy of the entire Mystic Pascal distribution disk.
Never use the distribution disk to run Pascal.

2. If you are using a non-standard video adapter, you must run the
MYSTICIN installation program first.  The distribution version of
Mystic Pascal is setup to run on a standard IBM PC with either a
color card or monochrome card or both.  MYSTICIN may also be used
to modify screen colors and video snow suppression.

3. To start Mystic, you need the files MYSTIC.EXE and MYSTIC.LIB.
Type:

	MYSTIC

4. You are now in the Editor screen.  Now load the TUTOR.PAS program.
Type:
	F2		(Function Key 2)
	L
	TUTOR.PAS

5. Mystic Pascal has four screens that you can use.  Type F1 to see
the Screen Selection menu.

	F1	Editor
	F2	Direct Mode
	F3	System Display
	F4	Laser Display

6. Go to the System Display screen by typing F1 to bring up the menu
and then F3 to select System Display.  This screen is updated once
per second.  It shows a memory map and a table of the multi-tasking
processes now running.

7. Now go back to the Editor to compile the TUTOR program.  Type
F1 then F1 to reach the Editor screen.

8. To compile a program, type F2 then C.  If any errors are detected
the error message will be displayed on the Editor screen and the 
cursor positioned at the point the error was first detected.

9. To run the TUTOR program, go to the Direct Mode screen (F1-F2).
The backslash is the prompt character.  To run a main program in
Direct Mode, just type the name of the program (as declared after
the PROGRAM reserved word).
Type:
	TUTOR

10. You can work through the several lessons of TUTOR to become
more familiar with Mystic Pascal and Direct Mode programming in
particular.

11. To terminate Mystic Pascal and return to DOS, type:

	F1
	Ctrl-End

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0965

     Volume in drive A has no label
     Directory of A:\

    COMMENT  FRM       508   2-10-86   1:03a
    FILES    TXT       727   8-18-87   5:00p
    FILES965 TXT      2215  12-16-88   1:29p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-15-87  11:16a
    MYSTIC   EXE     80880   4-15-86  11:15a
    MYSTIC   LIB     21504   2-22-86   9:25a
    MYSTICIN EXE      6000   2-03-86   4:36p
    PAS1     DOC     25614   8-08-87   5:49p
    PAS2     DOC     11770   2-27-86  11:50a
    PAS3     DOC      7208   2-27-86  11:59a
    PAS4     DOC      8441   2-27-86  12:02p
    PAS5     DOC     23138   2-27-86  12:10p
    PAS6     DOC     15848   2-27-86  12:17p
    PAS7     DOC      1131   2-27-86  12:19p
    PAS8     DOC      5554   2-27-86  12:21p
    PAS9     DOC      5450   2-27-86  12:23p
    PROBLEM  FRM      2316   2-10-86   1:13a
    READ     ME       1209   3-25-86  12:45p
    REGISTRN FRM       900   8-09-87  12:24p
    TUTOR    DOC      1935   2-05-86  11:13a
    TUTOR    PAS      8978   3-21-86   1:12p
           22 file(s)     232058 bytes
                           78848 bytes free
