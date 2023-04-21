---
layout: page
title: "PC-SIG Diskette Library (Disk #1895)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1895/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1895"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "M2JFTOOLS"

    This collection contains library modules that provide new, useful
    procedures to be incorporated into Modula-2 programs, to either produce
    new effects or make it easier to achieve older effects.  Also included
    are programs to make the programming process easier.  This system offers
    control over:
    
    ~ Date and time information with user-selectable formats
    
    ~ File reading and writing of strings, numbers and Booleans
    
    ~ Printing of strings, numbers and Booleans
    
    ~ Printer control codes
    
    ~ Additional string procedures.
    
    Other features include comprehensive screen control:  cursor control,
    partial or total clearing, Boolean prompts, inverse video boxes for data
    input, including decimal point, data entry, editing and display of
    reals, screen editing of strings, and integers.
    
    The data functions provide keyboard entry, FileInOut, printing of all
    types of data items, and entry of logical variables.  The Math1 library
    module provides the trigonometric functions.  Those modules that employ
    real arithmetic are presented in two versions, one for those with a math
    coprocessor and the other for those without.  There is even an improved
    programming environment that liberates you from constant mouse use, and
    gives you greater editing control.  All the tasks that are necessary
    when developing a Modula-2 program can be executed from one menu.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DES_M2JF.DOC

{% raw %}
```






M2JFTOOLS

PROGRAMMING TOOLS FOR MODULA-2

By John Forester, Custom Cycle Fitments
726 Madrone Ave, Sunnyvale, CA 94086. 408-734-9426

MODPROG,  a  programming  environment  that lets you choose the editor,
compiler, linker, lister & debuggers that you prefer. 

MODULA-2 LIBRARY MODULES;
Date and Calendar System with  capabilities  of  dBase,  flexibility of
WordPerfect.
File reading and writing of strings, numbers and booleans;
Printing of strings, numbers and booleans;
Additional string procedures;
Comprehensive  Screen   Control:  cursor   control,  partial  or  total
clearing, boolean prompts;
Inv. video boxes for formatted data input and  editing of  all types of
variables: strings, cardinals and integers, reals with decimal point.
Full trigonometric functions in both radians and degrees.
Common logarithms (base 10).
Factorials, Combinations, Permutations, Standard Deviation, Binomial
Probabilities, Cumulative Binomial Probabilities, Normal Probabalities,
Cumulative Normal Probabilities, Means of the Divided Normal Distribution.

PSet sets printers for font, pitch, style, etc. 

```
{% endraw %}

## FILE1895.TXT

{% raw %}
```
Disk No: 1895                                                           
Disk Title: M2JFTools                                                   
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: M2JFTOOLS                                                
Author Version: 1.4                                                     
Author Registration: $30.00                                             
Special Requirements: Modula-2 compiler.                                
                                                                        
This collection contains library modules that provide new, useful       
procedures to be incorporated into Modula-2 programs, to either produce 
new effects or make it easier to achieve older effects.  Also included  
are programs to make the programming process easier.  This system offers
control over:                                                           
                                                                        
~ Date and time information with user-selectable formats                
                                                                        
~ File reading and writing of strings, numbers and Booleans             
                                                                        
~ Printing of strings, numbers and Booleans                             
                                                                        
~ Printer control codes                                                 
                                                                        
~ Additional string procedures.                                         
                                                                        
Other features include comprehensive screen control:  cursor control,   
partial or total clearing, Boolean prompts, inverse video boxes for data
input, including decimal point, data entry, editing and display of      
reals, screen editing of strings, and integers.                         
                                                                        
The data functions provide keyboard entry, FileInOut, printing of all   
types of data items, and entry of logical variables.  The Math1 library 
module provides the trigonometric functions.  Those modules that employ 
real arithmetic are presented in two versions, one for those with a math
coprocessor and the other for those without.  There is even an improved 
programming environment that liberates you from constant mouse use, and 
gives you greater editing control.  All the tasks that are necessary    
when developing a Modula-2 program can be executed from one menu.       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## DES_M2JF.DOC

{% raw %}
```






M2JFTOOLS

PROGRAMMING TOOLS FOR MODULA-2

By John Forester, Custom Cycle Fitments
726 Madrone Ave, Sunnyvale, CA 94086. 408-734-9426

MODPROG,  a  programming  environment  that lets you choose the editor,
compiler, linker, lister & debuggers that you prefer. 

MODULA-2 LIBRARY MODULES;
Date and Calendar System with  capabilities  of  dBase,  flexibility of
WordPerfect.
File reading and writing of strings, numbers and booleans;
Printing of strings, numbers and booleans;
Additional string procedures;
Comprehensive  Screen   Control:  cursor   control,  partial  or  total
clearing, boolean prompts;
Inv. video boxes for formatted data input and  editing of  all types of
variables: strings, cardinals and integers, reals with decimal point.
Full trigonometric functions in both radians and degrees.
Common logarithms (base 10).
Factorials, Combinations, Permutations, Standard Deviation, Binomial
Probabilities, Cumulative Binomial Probabilities, Normal Probabalities,
Cumulative Normal Probabilities, Means of the Divided Normal Distribution.

PSet sets printers for font, pitch, style, etc. 

```
{% endraw %}

## MOD2TOOL.DOC

{% raw %}
```














                                     MOD-2 JF TOOLS
                             PROGRAMMING TOOLS FOR MODULA-2

                                       Version 1.4
                                       June, 1990



                                 Programming Environment
                  Date and Calendar System with User-Selectable Formats
                File Reading and Writing of Strings, Numbers and Booleans
                        Printing of Strings, Numbers and Booleans
                                     Printer Control
                              Additional String Procedures
                      Comprehensive Screen Control: Cursor Control,
                       Partial or Total Clearing, Boolean Prompts,
                Inv. Video Boxes For Data Input, Including Decimal Point,
                        Data Entry, Editing and Display of Reals;
                   Screen Editing of Strings, Cardinals and Integers.
                          Full Set of Trigonometric Functions.
                     Combinations, Permutations, Standard Deviation,
               Binomial Probabilities, Normal Distribution Probabilities.




                             For IBM-PC-compatible computers

                    These were written for Logitech's implementation
            and may need revision and recompiling for other implementations.



                                John Forester, M.S., P.E.




                                  Custom Cycle Fitments
                                    726 Madrone Ave.
                                   Sunnyvale, CA 94086
                                      408-734-9426







            M2JFTools: Modula-2 Programming Tools                          ii












                                      Published by
                                  Custom Cycle Fitments
                                    726 Madrone Ave.
                                   Sunnyvale, CA 94086
                                      408-734-9426




                               These programs and manual:
                           Copyright John Forester, 1987-1989.
                       The purchaser has purchased only a license
                          to use these these software materials
                                 for program development
                            on one computer for one company.



                         There is no restriction on distributing
                    Modula-2 programs developed with these materials.




                                COPYING AND USER PAYMENTS
            Copying of all the files on this disk as a unit from the distrib-
            uted disk  is permitted  for purposes  of  evaluation and  trial.
            Those who decide to use these materials should pay a user license
            fee of $30 to John Forester at the above address.







            M2JFTools: Modula-2 Programming Tools                         iii

                                    TABLE OF CONTENTS

            INTRODUCTION  . . . . . . . . . . . . . . . . . . . . . . . .   1

            ADDITIONAL LIBRARY MODULES  . . . . . . . . . . . . . . . . .   1

            IMPROVED I-O PROCEDURES . . . . . . . . . . . . . . . . . . .   1

            NEW STRING MANIPULATION PROCEDURES  . . . . . . . . . . . . .   1

            ADDITIONAL TRIGONOMETRIC AND LOGARITHMIC FUNCTIONS  . . . . .   1

            PROBABILITY AND STATISTICAL FUNCTIONS . . . . . . . . . . . .   2

            EASIER DATE AND CALENDAR PROCEDURES . . . . . . . . . . . . .   2

            BETTER AND EASIER SCREEN DISPLAY  . . . . . . . . . . . . . .   2

            PROGRAMS TO MAKE PROGRAMMING EASIER . . . . . . . . . . . . .   3

            MODPROG: MODULA PROGRAMMING ENVIRONMENT . . . . . . . . . . .   3

            INSTALLATION OF MODPROG PROGRAMMING ENVIRONMENT . . . . . . .   4

            EASIER PRINTING OF PROGRAMS, EVEN PROGRAMS WITH ERRORS  . . .   5

            POOR MAN'S INDEX-FILE IMITATOR  . . . . . . . . . . . . . . .   5

            PRINTER CONTROL . . . . . . . . . . . . . . . . . . . . . . .   5

            INSTALLATION AND USE INSTRUCTIONS . . . . . . . . . . . . . .   6

            LIBRARY MODULES . . . . . . . . . . . . . . . . . . . . . . .   6

            MATH COPROCESSORS . . . . . . . . . . . . . . . . . . . . . .   6

            OTHER PROGRAMS  . . . . . . . . . . . . . . . . . . . . . . .   6

            USING THE DATES LIBRARY MODULE  . . . . . . . . . . . . . . .   7

            SELECTING DATE INPUT AND OUTPUT FORMATS . . . . . . . . . . .   8

            USING THE PRINTING MODULE . . . . . . . . . . . . . . . . . .   8

            USE IN OTHER THAN LOGITECH IMPLEMENTATIONS OF MODULA-2  . . .   9







            M2JFTools: Modula-2 Programming Tools                           1





                                      INTRODUCTION

               There are two kinds of modules on this disk: 
            1  Library  modules that  provide  new, useful  procedures  to be
               incorporated into  programs, to either produce  new effects or
               make it easier to achieve older effects.

            2  Programs to make the programming process easier.


                               ADDITIONAL LIBRARY MODULES

            IMPROVED I-O PROCEDURES
               The  Modula-2 language is elegantly simple, but in one respect
            its simplicity  is inconvenient.  Modula-2 assumes that  the data
            being processed  is just a  stream of standard  input and  output
            that is processed by simple Read and Write functions, whereas  in
            many applications we need to mix screen, file and printer  opera-
            tions to achieve the desired result. 

               Two of  these library modules, FileInOut  and Printing, enable
            you to easily separate the operations by the target device.  When
            using these, screen i-o is still performed by the normal Modula-2
            procedures that  are named  Readxxxx and Writexxxx  (ReadCard and
            WriteString, for  example). File operations are  performed by the
            new procedures  Filexxxx  (FileString, FileInt,  etc.), to  write
            data of each  specified type to the specified file,  and Scanxxxx
            (ScanCard, ScanBool,  etc.) to  read data  of the specified  type
            from  the file.  Printing  is  different from  screen  display in
            several  ways,  one being  the  requirement  for  strict columnar
            format  in many  reports, even  though the  lengths of  the items
            being printed differ, another being the requirement for addition-
            al commands such as Eject and Carriage Return. These effects  are
            conveniently produced by the procedures PrintString, PFullString,
            PrintCard, etc. 

            NEW STRING MANIPULATION PROCEDURES
               The library module StringMa provides for  some frequently-used
            string procedures:  nulling the string, trimming  the string from
            either end, and changing all its characters to upper case.

            ADDITIONAL TRIGONOMETRIC AND LOGARITHMIC FUNCTIONS
               The  library  module Math1  contains  the full  set  of normal







            M2JFTools: Modula-2 Programming Tools                           2

            trigonometric  functions for  both radians  and degrees,  and the
            logarithmic functions for  common logs to the base 10.  Math1 has
            two versions: Math1C87 uses the 80x87 math coprocessor for faster
            computations while  the Math1EMU  uses the Logitech  emulator for
            those  who don't have  a coprocessor. If you  have a coprocessor,
            copy the Math1C87.* files to MathLib1.* files. If you don't  have
            a coprocessor, copy the Math1EMU.* files to MathLib1.* files.

            PROBABILITY AND STATISTICAL FUNCTIONS
               This  library  module  calculates   factorials,  combinations,
            permutations, binomial probabilities,  cumulative binomial proba-
            bilities, normal probabilities,  cumulative normal  probabilities
            and  the means of  the divided normal distribution.  It also pro-
            vides a procedure  for specifying the format for data  values and
            entering a series  of values, from which it calculates  the mean,
            the standard  deviation between items and  the standard deviation
            of the  sample mean. The format  may be controlled either  by the
            programmer  or the  user. Probabil  has two  versions: ProbaC87.*
            files use the 80x87  math coprocessor for those who  have one and
            ProbaEMU.* files use  the Logitech emulator  for those  who don't
            have one. If you have a coprocessor, copy the ProbaC87.* files to
            Probabil.*  files. If  you  don't have  a coprocessor,  copy  the
            ProbaEMU.* files to Probabil.* files.

            EASIER DATE AND CALENDAR PROCEDURES
               The typical  Modula-2  implementation does  not  provide  easy
            entry of dates, easy output of date information or easy  calcula-
            tion with  dates and times, such as is often required in business
            applications. The  library module  Dates provides for  easy entry
            and validation of  dates and times,  and for output to  screen or
            printer,  in any  formats that  the user  selects. It  covers the
            years from 1921  through 2099, although any years entered  with a
            format of  2-digit years are automatically  assumed to be between
            1960  and 2059. It won't accept  impossible dates such as 32 Jan,
            or  29 Feb (except in  leap years). It knows the  day of the week
            for any date. Over its 179 year  period it establishes a sequence
            of  days stored  as  simple, space-saving  cardinal  numbers that
            enable records to be  ordered in date sequence  or the number  of
            days between events to be easily calculated. 



            BETTER AND EASIER SCREEN DISPLAY
               The library  module Screen provides an  easy implementation of
            the ANSI.SYS  screen-control commands and many  very useful other
            functions.  The  procedures  that  implement  the  ANSI  commands
            produce regular and  inverse video,  move the  cursor around  the







            M2JFTools: Modula-2 Programming Tools                           3

            screen, clear the screen or portions of it, and return the cursor
            to a previously-saved position. 

               The additional  procedures include  the entry of  real numbers
            according  to  a  programmed  and  predisplayed  decimal  format,
            displaying  real numbers  on the  screen  and editing  them. They
            include screen editing of  strings, cardinals and integers. There
            is also input of  the answer to a Yes-or-No  question (useful for
            program control), and the display of a block of inverse video for
            showing  where the operator  will be inputting data  and how many
            characters and decimal places are available for that data.



                           PROGRAMS TO MAKE PROGRAMMING EASIER


            MODPROG: MODULA PROGRAMMING ENVIRONMENT
               Some people like the  programming environment that is provided
            by Logitech's POINT  Editor, with its many  commands, windows and
            mouse selection. I don't. I dislike having to move my hand to the
            mouse to move the cursor to the end or the beginning of the line,
            and  not having  the ability  to erase  all or  part of  the line
            without first defining that area with the mouse. And I don't like
            having to reformat programs before printing them out. I wanted  a
            simple system that would do all the tasks that are necessary when
            developing a Modula-2 program, and would do it all from one menu.
            ModProg does that.

               ModProg sets  the environment  variables, accepts the  name of
            the program, calls the editor for editing that program, calls the
            print program for  printing out  the program, calls the  Logitech
            compiler  (with or  without options  - it  saves the  options for
            later use), displays  or prints out the error listing,  calls the
            Logitech linker (with or without options), runs the program being
            developed, and  when the  program doesn't work properly  it calls
            either  the run-time  or post-mortem  debugger.  It does  each of
            these with just one keystroke from a central menu.  At the end of
            the programming  session, ModProg  removes the environment  vari-
            ables that the Logitech system requires.

               ModProg  may also  work with  other Modula-2  compilers  but I
            haven't tried any others.

               ModProg  uses the  editor, print  program and  display listing
            program of  your choice.  I use  the Norton  Editor and  the line
            printer from the  Norton Utilities, and Buerg's  List program for







            M2JFTools: Modula-2 Programming Tools                           4

            displaying the  error list, but  you may easily  insert your  own
            choices.

            INSTALLATION OF MODPROG PROGRAMMING ENVIRONMENT
               To install ModProg, set up a directory to contain it and  copy
            it in. Also set up a directory (which may be the  same or differ-
            ent)  for  the  programs  that  you  will  be  working  on.  Copy
            MODPROG.MOD into its directory. 

               ModProg  should  be used  in  conjunction  with  a .BAT  file,
            because DOS doesn't  allow setting the environment  from within a
            program. A sample  of that file is included as MOD.BAT. This .BAT
            program  moves  from  the  root directory  to  the directory  for
            ModProg, sets  the environment  variables, and calls  ModProg. At
            the close  of a programming session,  MOD.BAT deletes those envi-
            ronment variables  that are required for  programming and returns
            to  the root  directory.  You  must modify  MOD.BAT so  that  its
            directory moves (the items after each of the CD commands) and its
            environment variables (the items  after each of the SET commands)
            reflect your own directory structure.

               If  you  haven't sufficient  space  to  store the  Environment
            variables, ModProg  cannnot find the files that it requires. Test
            your  space by  setting all  the  environment variables  that you
            need, and then asking DOS to  read them back to you by using  the
            SET  command without arguments. If you  are missing some environ-
            ment  variables, you need more space. Insert into your CONFIG.SYS
            file the statement to increase the environmental space. This is:
               SHELL=COMMAND.COM /P /E:500 
               The final number  may range from 160 (the original  amount) to
            32768. I find that 500 is adequate for Modula-2 Programming  with
            this system. Then  reboot your computer to make this  extra space
            available.

               When you  first call ModProg you  must enter the  paths to the
            directories  where you have  the programs that you  use when pro-
            gramming  in Modula-2.  ModProg  assumes  that you  keep  all the
            Modula-2 programming programs (compiler, linker and debuggers) in
            one directory (Logitech suggests the name M2EXEC, but you can use
            any name)  and that  you  keep all  the other  programs  (editor,
            lister  and printer, at  least) in one other  directory. You must
            also enter  the names of  each of these  programs. Since  printer
            programs  commonly  use parameters,  ModProg  also  accepts their
            parameters. 

               When first using ModProg, select "O  Input Start-up Variables"
            from the Menu. ModProg will display illuminated boxes for each of







            M2JFTools: Modula-2 Programming Tools                           5

            the items that  you must enter. When entering the paths to direc-
            tories, be sure to terminate each path with the \ symbol. ModProg
            stores these  variables in the  file MODVAR.CFG.  This file  also
            stores the  last-used options for compiling and  linking, so they
            are available for the next use.


            EASIER PRINTING OF PROGRAMS, EVEN PROGRAMS WITH ERRORS
               Logitech's implementation of Modula-2 operates in the program-
            ming environment  of the  Point  Editor and  it provides  a  very
            effective pretty-printing program for printing completed programs
            with the correct syntax according to formatting instructions that
            may be standardized  by the user. This is advantageous  for large
            programming shops  where consistency of printed  output is neces-
            sary. However,  this makes it  difficult to  print partially com-
            pleted programs that contain errors, or  any programs on printers
            that  don't have  the  tabs  previously set  to match  the  Point
            Editor. The program PForm converts the tabs in programs from  the
            Point  Editor into a  selected number of spaces.  Then these pro-
            grams can be printed just as they look  on the screen, regardless
            of what tab settings are in the printer. PForm doesn't change the
            look of the program on the screen or off the printer, and doesn't
            affect later corrections or compilation.

            POOR MAN'S INDEX-FILE IMITATOR
               If you haven't bought a B+ Tree library for  Modula-2 and your
            files aren't too  large or are infrequently changed,  the program
            SeqFile is the outline  of a program that keeps the records  of a
            file in the  key sequence and minimizes the  amount of copying by
            progressing through  the file as  long as the  input records  are
            entered  in key  sequence. Only when  the key of a  new record is
            less  than that  of  the previously-entered  record  does SeqFile
            recopy the  entire file and  progress through to  the new  proper
            location.


            PRINTER CONTROL
               The program PSet  sends commands to  select font, pitch,  line
            spacing and similar items to any printer. These allow you to make
            these  selections easily  when printing files that  are not being
            processeed by  a word-processing program  that incorporates these
            commands.  PSet does  not load  fonts  into the  Toshiba printers
            because  PSet can be  used from any directory  while font loading
            must be done from the directory that contains the fonts.

               PSet is  completely flexible because at  startup you determine
            the names of the  instructions that  you wish to  display on  the







            M2JFTools: Modula-2 Programming Tools                           6

            menu screen and you enter, from your printer's manual, the  codes
            that will produce  those effects. PSet then sends those  codes to
            the printer whenever you desire.

               A  few changes make  loading the files with  the Toshiba FNTLD
            program easier. FL.BAT loads any pair of fonts. You enter only FL
            followed  by the names  of the two fonts  without the extensions.
            The first goes into font 4,  the second goes into font 5.  If you
            enter a non-existent name, no change is made  for that font slot.
            If  you use  a foreign language font,  such as  .DL1, then revise
            FL.BAT to first load the .DL0 font and then  follow it by loading
            .DL1 font, which  makes the changes for the new language. To make
            entry even easier,  shorten the names of the  fonts to codes that
            are easy  for you. For  example, change the  name COPPER1.DL0  to
            COP.DL0 and ITALIC1.DLO to IT1.DL0, so you have only  to enter FL
            COP IT1.

                            INSTALLATION AND USE INSTRUCTIONS

            LIBRARY MODULES
               Each  library module  (FileInOut, Printing,  Screen, StringMa,
            Math1 and Dates) consists of five different files. These are  the
            xx.DEF, xx.MOD, xx.OBJ,  xx.REF, and  xx.SYM files. The .DEF  and
            .MOD files are the source  code for the modules. You will need to
            print-out  the .DEF  files  for incorporation  into  your printed
            library for reference when using these procedures. The .MOD files
            are  for your information  and you can modify  and recompile them
            for your use when you need to. The .OBJ, .REF and .SYM files must
            be  copied into  the directories  that contain  the corresponding
            types of files  of your Modula-2 system. Thereafter, you  may use
            the procedures just as you would any other library procedures  in
            the Modula-2 system.  As is  usual with Modula-2 procedures,  the
            name indicates the function that it performs. Generally, the .DEF
            files provide the instructions  for using each procedure, includ-
            ing the purpose and the number and types of parameters, if any.

            MATH COPROCESSORS
               The Math1,  the FileInOu  and the  Probabil modules  have  two
            versions, one for systems with the 80x87 math coprocessor and one
            for systems  without. The appropriate files  are denoted Math1C87
            and Math1EMU,  FileC87 and FileEMU, and ProbaC87 and ProbaEMU. If
            you have the math coprocessor, install the C87 versions under the
            names  Math1, FileInOu and  Probabil. If you don't  have the math
            coprocessor, install the EMU versions under the same names. Do so
            for the .SYM, .REF and .OBJ files. 

            OTHER PROGRAMS







            M2JFTools: Modula-2 Programming Tools                           7

               The SeqFile.MOD program is only a model which you will need to
            modify by inserting the names  of the files and the structures of
            the records that it will contain before it will do what you need.
            You will need to modify the procedures for writing into the files
            (FileMain and  FileTemp), and for reading from them (ScanMain and
            ScanTemp) to reflect the structure of the records. You will  need
            to  change the names of the files,  and to modify the key to suit
            your purposes.

               The PSet.EXE file can be installed at any convenient place: on
            a floppy  if you require it  only rarely, or in  your DOS utility
            directory if you require it more often.
            The file PrintCom.DAT contains the printer control codes used  by
            PSet.  You must copy  this either  to the  same floppy  disk from
            which you use PSet, or to the C: root directory. FL.BAT should be
            installed in  your directory  for  fonts; modify  it so  that  it
            returns you to your root directory. Alternatively, install  it on
            your main drive root directory;  then modify it so it first moves
            to the  directory for fonts  and after operation  returns to  the
            original directory.

               The  PForm.EXE  file  must be  installed  in  either your  DOS
            directory or your DOS utility directory, because you must be able
            to call  it from  the directory that  contains the  program to be
            converted. To use  it, move into the directory that  contains the
            program to be converted, call PForm, and answer its questions. It
            asks whether  you are  in the proper directory,  the name  of the
            program  to be  converted,  and  the number  of spaces  you  wish
            inserted  in place  of  each  tab character.  It then  makes  the
            conversion.

               The  .MOD files for these programs are again for your informa-
            tion.

            USING THE DATES LIBRARY MODULE
               The first  use of the Dates  Module is to allow  easy entry of
            dates with just six keystrokes and times with four  or five more.
            You place the cursor on the screen where you  want the date shown
            [Use PlaceCursor(x, y) from the  Screen Module] and call  GetDate
            or ChgDate from the Dates module. An inverse-video block displays
            the selected input format, such  as '  /  /  /  :  - m', with the
            former  date, if there is  one, and the  cursor is positioned for
            the first  character. The user keys in the  date with six strokes
            and  the time with four  more (five if am/pm  time is formatted).
            The  cursor  automatically jumps  to  the next  entry space.  The
            entire  entry is  available for  editing until  the Enter  key is
            pressed. The  date  is checked  for  calendar  validity  and  the







            M2JFTools: Modula-2 Programming Tools                           8

            operation is recycled until a valid date is keyed in.

               The second  use of the Dates  Module is to provide  a date and
            time  key that  serves to keep  records in  date sequence  and to
            calculate the days or days and time between two dates and  times.
            Days are  counted as Cardinal  numbers that save  file space  and
            simplify  programming. The  full  date record  contains  the day,
            month, year, time, day sequence number, name of the month and day
            of the week.  Only the numbers for the  day, month, year and time
            are entered  from the keyboard,  the others  being calculated. To
            save file space, only the day sequence number and time are filed,
            the other values being calculated when read from the file. 

               The  third use of the Dates Module  is to display or print the
            date and  time information whenever a  program requires it, using
            any formats that the programmer or the user select. 

               The  Dates Module  uses  procedures from  three  other library
            modules on this disk:  Screen, Printing, and FileInOut. The .SYM,
            .REF and .OBJ files for these three modules must  also be in your
            programming system for the Dates Module to work.



            SELECTING DATE INPUT AND OUTPUT FORMATS
               The input format items are the numbers for day, month, 2-digit
            year, 4-digit  year, 24-hour time, am/pm-time.  The output format
            items add  the day of the  week and the name  of the month. These
            items numbered from 1 to  8. The current input and output formats
            are  each controlled  by a  string. Each  string consists  of the
            sequence  of item  numbers separated by other  characters such as
            slashes, hyphens,  spaces and  commas. The Dates  module provides
            the spaces appropriate for each data item combined with the other
            characters contained  in the  string. The programmer  may control
            the  formats by  rewriting  these  strings at  any point  in  the
            program, or he may allow the user to set these formats by calling
            the GetDateForm procedure through the program. 


            USING THE PRINTING MODULE
               The Printing  library module directs its output to the pseudo-
            file  named Printer  of the  Logitech FileSystem  library module.
            Since any  use of files  uses many procedures  of the  FileSystem
            module  it is  best to  IMPORT FileSystem  complete. Also  IMPORT
            those Printing procedures that you require, including Printer. 







            M2JFTools: Modula-2 Programming Tools                           9

            When preparing to print, activate the Printer pseudo-file by: 

            FileSystem.Lookup(Printer, 'DK:prn', FALSE); 


            Then set the Printer to 'writing' by:

            FileSystem.SetWrite(Printer);

            After sending  to the printer  the last material  to be  printed,
            close the pseudo-file and make the printer print the last materi-
            al by:

            FileSystem.Close(Printer);

                 USE IN OTHER THAN LOGITECH IMPLEMENTATIONS OF MODULA-2
               Different implementations of Modula-2  may use different names
            for  library modules and their procedures, and may use procedures
            that  perform  different functions.  If  you  desire  to  use the
            modules  and  procedures contained  herein  in  an implementation
            other  than Logitech's, you will  need to determine  which proce-
            dures in  your system  perform the procedures  that are  IMPORTED
            into  these .MOD modules.  You may manage merely  by changing the
            IMPORT names  listed in  the  .MOD programs  to those  that  your
            system  uses  for the  equivalent  procedures  and  compiling and
            linking the revised .MOD modules with your system. If you  cannot
            find procedures  that perform functions  identical to Logitech's,
            then you will have to modify the .MOD modules to take the differ-
            ences into account.

                                           END

```
{% endraw %}

## PFORM.DOC

{% raw %}
```






                                                                  1







PFORM PROGRAM

By John Forester
726 Madrone Ave., Sunnyvale, CA 94086
408-734-9426

The PForm  program changes tabs in document and program files into
spaces so that they can be properly printed when printers have not
had the  appropriate tabs set. Pform is best kept in the directory
for utility programs  that  is  listed  on  your  normal  path. To
reformat a  program, move into its directory and call PForm. PForm
asks for the number of spaces that you  want substituted  for each
tab, so  you can adjust to suit your purposes. If you are in doubt
about whether the program will properly  reformat your  file, copy
it under another name as a back-up.

PForm was  written in  Modular-2 Version  3.03 from Logitech, with
additional screen and string handling modules by John Forester. 
It runs on IBM-PCs or compatibles.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1895

     Volume in drive A has no label
     Directory of A:\

    DES_M2JF DOC      1140   6-05-90   5:05p
    MOD2TOOL ZIP    217095   6-05-90   5:12p
    PKUNZIP  EXE     22022  10-01-89   1:02a
    READ_M2J ME       1382   2-08-90  10:22a
    UZIP_M2J BAT       888   2-08-90  10:20a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       651   1-01-80   2:35a
    FILE1895 TXT      3257   7-13-90  11:30a
            8 file(s)     246473 bytes
                           70656 bytes free
