---
layout: page
title: "PC-SIG Diskette Library (Disk #1649)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1649/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1649"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CALUTIL"

    Enhance the standard Modula-2 library with this useful toolkit.  Though
    heralded academically, Modula-2 has some noticeable short-comings,
    especially in the I/O functions arena.  CALUTIL will alleviate some of
    these difficulties.
    
    CALUTIL provides modules for improved I/O, date and calendar
    functionality, string handling, screen display, and math routines (trig.
    and log. functions).  For improved file I/O, CALUTIL comes with a model
    program to handle a sequential record datafile.  CALUTIL also provides
    an alternate programming environment that enables the user to edit,
    print, compile, link, and run a program without explicitly typing each
    command.
    
    CALUTIL comes ready for use with the Logitech Compiler, but all source
    is included so the modules can be adapted for other Modula-2
    environments.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1649.TXT

{% raw %}
```
Disk No: 1649                                                           
Disk Title: Calutil                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: Calutil                                                  
Author Version: 1.2                                                     
Author Registration: $30.00                                             
Special Requirements: Hard drive and Logitech Modula-2 recommended.     
                                                                        
Enhance the standard Modula-2 library with this useful toolkit.  Though 
heralded academically, Modula-2 has some noticeable short-comings,      
especially in the I/O functions arena.  CALUTIL will alleviate some of  
these difficulties.                                                     
                                                                        
CALUTIL provides modules for improved I/O, date and calendar            
functionality, string handling, screen display, and math routines (trig.
and log. functions).  For improved file I/O, CALUTIL comes with a model 
program to handle a sequential record datafile.  CALUTIL also provides  
an alternate programming environment that enables the user to edit,     
print, compile, link, and run a program without explicitly typing each  
command.                                                                
                                                                        
CALUTIL comes ready for use with the Logitech Compiler, but all source  
is included so the modules can be adapted for other Modula-2            
environments.                                                           
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  Disk #1649  CALUTIL MODULA 2 PROGRAMMING TOOLS >>>>         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  MOD (press enter)                              ║
║                                                                         ║
║ To print documentation, type:  COPY MOD2TOOL.DOC PRN                    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MOD2TOOL.DOC

{% raw %}
```






                                                                    i
            CalUtil Modula-2 Programming Tools







                          PROGRAMMING TOOLS FOR MODULA-2

                                    Version 1.2
                                   December 1988



                              Programming Environment
                             Date and Calendar System
             File Reading and Writing of Strings, Numbers and Booleans
                     Printing of Strings, Numbers and Booleans
                                  Printer Control
                           Additional String Procedures
                   Comprehensive Screen Control: Cursor Control,
                    Partial or Total Clearing, Boolean Prompts,
             Inv. Video Boxes For Data Input, Including Decimal Point,
                     Data Entry, Editing and Display of Reals;
                Screen Editing of Strings, Cardinals and Integers.




                          For IBM-PC-compatible computers

                 These were written for Logitech's implementation
                  and may need revision and recompiling for other
                                 implementations.



                             John Forester, M.S., P.E.




                               Custom Cycle Fitments
                                 726 Madrone Ave.
                                Sunnyvale, CA 94086
                                   408-734-9426






                                                                   ii
            CalUtil Modula-2 Programming Tools











                                   Published by
                               Custom Cycle Fitments
                                 726 Madrone Ave.
                                Sunnyvale, CA 94086
                                   408-734-9426




                            These programs and manual:
                        Copyright John Forester, 1987-1988.
                    The purchaser has purchased only a license
                       to use these these software materials
                              for program development
                         on one computer for one company.



                      There is no restriction on distributing
                 Modula-2 programs developed with these materials.




                             COPYING AND USER PAYMENTS
            Copying of  all the  files on  this disk as a unit from the
            distributed disk is permitted  for  purposes  of evaluation
            and trial.  Those who  decide to use these materials should
            pay a user license fee of $30 to John Forester at the above
            address.







                                                                  iii
            CalUtil Modula-2 Programming Tools
                                 TABLE OF CONTENTS


            INTRODUCTION . . . . . . . . . . . . . . . . . . . . .    1

            ADDITIONAL LIBRARY MODULES . . . . . . . . . . . . . .    1

            IMPROVED I-O PROCEDURES  . . . . . . . . . . . . . . .    1

            NEW STRING MANIPULATION PROCEDURES . . . . . . . . . .    1

            ADDITIONAL TRIGONOMETRIC AND LOGARITHMIC FUNCTIONS . .    2

            EASIER DATE AND CALENDAR PROCEDURES  . . . . . . . . .    2

            BETTER AND EASIER SCREEN DISPLAY . . . . . . . . . . .    2

            PROGRAMS TO MAKE PROGRAMMING EASIER  . . . . . . . . .    3

            MODPROG: MODULA PROGRAMMING ENVIRONMENT  . . . . . . .    3

            EASIER  PRINTING  OF  PROGRAMS,  EVEN  PROGRAMS  WITH
                  ERRORS . . . . . . . . . . . . . . . . . . . . .    4

            POOR MAN'S INDEX-FILE IMITATOR . . . . . . . . . . . .    5

            CONTROL OF TOSHIBA PRINTERS  . . . . . . . . . . . . .    5

            INSTALLATION AND USE INSTRUCTIONS  . . . . . . . . . .    5

            LIBRARY MODULES  . . . . . . . . . . . . . . . . . . .    5

            OTHER PROGRAMS . . . . . . . . . . . . . . . . . . . .    6

            USING THE CALENDAR UTILITIES LIBRARY MODULE  . . . . .    7

            SELECTING TIME-SPAN FOR CALENDAR APPLICATIONS  . . . .    7

            SELECTING THE DATE DISPLAY FORMAT  . . . . . . . . . .    8

            USING THE PRINTING MODULE  . . . . . . . . . . . . . .    8

            USE IN OTHER THAN LOGITECH IMPLEMENTATIONS OF MODULA-
                  2  . . . . . . . . . . . . . . . . . . . . . . .    8







                                                                    1
            CalUtil Modula-2 Programming Tools




                                   INTRODUCTION

                  There are two kinds of modules on this disk: 
            1     Library modules  that provide  new, useful procedures
                  to be incorporated into  programs, to  either produce
                  new  effects  or  make  it  easier  to  achieve older
                  effects.

            2     Programs to make the programming process easier.


                            ADDITIONAL LIBRARY MODULES

            IMPROVED I-O PROCEDURES
                  The Modula-2 language is elegantly simple, but in one
            respect  its  simplicity  is inconvenient. Modula-2 assumes
            that the data being processed is just a  stream of standard
            input and output that is processed by simple Read and Write
            functions, whereas in  many  applications  we  need  to mix
            screen, file  and printer operations to achieve the desired
            result. 

                  Two of these library modules, FileInOut and Printing,
            enable you  to easily separate the operations by the target
            device. When using these, screen i-o is still  performed by
            the normal  Modula-2 procedures that are named Readxxxx and
            Writexxxx (ReadCard  and  WriteString,  for  example). File
            operations  are  performed  by  the new procedures Filexxxx
            (FileString,  FileInt,  etc.),  to   write  data   of  each
            specified  type   to  the   specified  file,  and  Scanxxxx
            (ScanCard, ScanBool,  etc.) to  read data  of the specified
            type  from  the  file.  Printing  is  different from screen
            display in several  ways,  one  being  the  requirement for
            strict  columnar  format  in  many reports, even though the
            lengths of  the items  being printed  differ, another being
            the requirement  for additional  commands such as Eject and
            Carriage Return. These effects are conveniently produced by
            the procedures PrintString, PFullString, PrintCard, etc. 

            NEW STRING MANIPULATION PROCEDURES
                  The  library   module  StringMa   provides  for  some
            frequently-used  string  procedures:  nulling  the  string,
            trimming the  string from  either end, and changing all its





                                                                    2
            CalUtil Modula-2 Programming Tools
            characters to upper case.

            ADDITIONAL TRIGONOMETRIC AND LOGARITHMIC FUNCTIONS
                  The library module Math1  contains  the  full  set of
            normal  trigonometric   functions  for   both  radians  and
            degrees, and the logarithmic  functions for  common logs to
            the base 10.

            EASIER DATE AND CALENDAR PROCEDURES
                  The typical  Modula-2 implementation does not provide
            easy entry of dates or easy calculation with dates, such as
            is  often  required  in  business applications. The library
            module CalUtil  provides for  easy entry  and validation of
            dates in  either the  American or British formats; that is,
            in either of the  forms  'dd/mm/yy'  or  'mm/dd/yy'.  It is
            adjustable for  any hundred-year period that starts between
            1901 and 1997, thus allowing for operations that look ahead
            and  those   that  consider   the  past.  It  won't  accept
            impossible dates such as 32 Jan, or 29 Feb (except  in leap
            years).  It  knows  the  day  of  the week for any date. It
            provides for readout of dates in  four formats: 'dd/mm/yy',
            'mm/dd/yy', '25  Jan 88'  or '25  Jan 88 Mon' formats. Over
            its 100 year  period  it  establishes  a  sequence  of days
            stored as simple, space-saving cardinal numbers that enable
            records to  be ordered  in date  sequence or  the number of
            days between events to be easily calculated. 

            BETTER AND EASIER SCREEN DISPLAY
                  The   library   module   Screen   provides   an  easy
            implementation of the ANSI.SYS  screen-control commands and
            many  very  useful  other  functions.  The  procedures that
            implement the ANSI  commands  produce  regular  and inverse
            video, move  the cursor around the screen, clear the screen
            or portions of it, and return  the cursor  to a previously-
            saved position. 

                  The additional  procedures include  the entry of real
            numbers according to a programmed and  predisplayed decimal
            format,   displaying real numbers on the screen and editing
            them. They include screen editing of strings, cardinals and
            integers. There  is also input of the answer to a Yes-or-No
            question (useful for program control), and the display of a
            block of  inverse video for showing where the operator will
            be inputting  data  and  how  many  characters  and decimal
            places are available for that data.







                                                                    3
            CalUtil Modula-2 Programming Tools

                        PROGRAMS TO MAKE PROGRAMMING EASIER


            MODPROG: MODULA PROGRAMMING ENVIRONMENT
                  Some people  like the programming environment that is
            provided  by  Logitech's  POINT   Editor,  with   its  many
            commands, windows  and mouse  selection. I don't. I dislike
            having to move my hand to the mouse  to move  the cursor to
            the end  or the  beginning of  the line, and not having the
            ability to erase all or  part  of  the  line  without first
            defining that  area with the mouse. And I don't like having
            to reformat programs before printing them  out. I  wanted a
            simple  system  that  would  do  all  the  tasks  that  are
            necessary when developing a Modula-2 program,  and would do
            it all from one menu. ModProg does that.

                  ModProg sets  the environment  variables, accepts the
            name of the program,  calls  the  editor  for  editing that
            program,  calls  the  print  program  for  printing out the
            program,  calls  the  Logitech  compiler  (with  or without
            options -  it saves the options for later use), displays or
            prints out the error  listing,  calls  the  Logitech linker
            (with   or   without   options),  runs  the  program  being
            developed, and  when the  program doesn't  work properly it
            calls either  the run-tim  or post-mortem debugger. It does
            each of these with just one keystroke from  a central menu.
            At the  end of the programming session, ModProg removes the
            environment variables that  the  Logitech  system requires.
            ModProg may  also work  with other Modula-2 compilers but I
            haven't tried any others.

                  ModProg uses the editor,  print  program  and display
            listing program of your choice. I use the Norton Editor and
            the line printer from the Norton Utilities, and  the public
            List52 program  for displaying  the error list, but you may
            easily insert your own choices.

                  To install ModProg, set up a directory to  contain it
            and copy  it in.  Also set up a directory (which may be the
            same or  different)  for  the  programs  that  you  will be
            working on. Copy MODPROG.MOD into its directory. 

                  ModProg  should  be  used  in conjunction with a .BAT
            file, because DOS  doesn't  allow  setting  the environment
            from within a program. A sample of that file is included as
            MOD.BAT. This .BAT program moves from the root directory to





                                                                    4
            CalUtil Modula-2 Programming Tools
            the directory  for ModProg, sets the environment variables,
            and calls ModProg. At the close  of a  programming session,
            MOD.BAT  deletes   those  environment  variables  that  are
            required for programming and returns to the root directory.
            You must  modify MOD.BAT  so that  its directory moves (the
            items after each of  the CD  commands) and  its environment
            variables  (the  items  after  each  of  the  SET commands)
            reflect your own directory structure.

                  When you first call ModProg you must enter  the paths
            to the directories where you have the programs that you use
            when programming in Modula-2. ModProg assumes that you keep
            all the Modula-2 programming programs (compiler, linker and
            debuggers) in one  directory  (Logitech  suggests  the name
            M2EXEC, but you can use any name) and that you keep all the
            other programs  (editor, lister  and printer,  at least) in
            one other  directory. You must also enter the names of each
            of these  programs.  Since  printer  programs  commonly use
            parameters, ModProg also accepts their parameters. 

                  When first  using ModProg,  select "O  Input Start-up
            Variables" from the Menu. ModProg will  display illuminated
            boxes  for  each  of  the  items  that you must enter. When
            entering the paths to  directories,  be  sure  to terminate
            each path with the \ symbol. ModProg stores these variables
            in the file MODVAR.CFG. This file also stores the last-used
            options for  compiling and  linking, so  they are available
            for the next use.


            EASIER PRINTING OF PROGRAMS, EVEN PROGRAMS WITH ERRORS
                  Logitech's implementation of Modula-2 operates in the
            programming environment of the Point Editor and it provides
            a  very  effective  pretty-printing  program  for  printing
            completed  programs  with  the  correct syntax according to
            formatting instructions that  may  be  standardized  by the
            user.  This  is  advantageous  for  large programming shops
            where consistency of printed output is  necessary. However,
            this  makes  it  difficult  to  print  partially  completed
            programs that contain errors,  or any  programs on printers
            that don't  have the tabs previously set to match the Point
            Editor. The program PForm  converts  the  tabs  in programs
            from  the  Point  Editor  into a selected number of spaces.
            Then these programs can be printed just as they look on the
            screen, regardless of what tab settings are in the printer.
            PForm doesn't change the look of the program  on the screen
            or off the printer, and doesn't affect later corrections or





                                                                    5
            CalUtil Modula-2 Programming Tools
            compilation.

            POOR MAN'S INDEX-FILE IMITATOR
                  If you haven't bought a B+ Tree library  for Modula-2
            and  your  files  aren't  too  large  or  are  infrequently
            changed, the program SeqFile  is the  outline of  a program
            that keeps  the records  of a  file in the key sequence and
            minimizes the amount of copying by  progressing through the
            file  as  long  as  the  input  records  are entered in key
            sequence. Only when the key of  a new  record is  less than
            that of  the previously-entered  record does SeqFile recopy
            the entire file and  progress  through  to  the  new proper
            location.


            CONTROL OF TOSHIBA PRINTERS
                  The program  PrintCon provides for selecting the font
            and the pitch of Toshiba  printers  from  a  menu,  and for
            transmitting other  commands to  the printers,  so that you
            can select these for printing out files that  are not being
            processed  by  a  word-processing program that incorporates
            these commands.  PrintCon  does  not  load  fonts  into the
            Toshiba  printers  because  PrintCon  can  be used from any
            directory  while  font  loading  must  be   done  from  the
            directory that contains the fonts. 

                  A few changes make loading the files with the Toshiba
            FNTLD program easier. FL.BAT loads any  pair of  fonts. You
            enter  only  FL  followed  by  the  names  of the two fonts
            without the extensions. The first  goes  into  font  4, the
            second goes  into font 5. If you enter a non-existent name,
            no change is made for that font slot. If you  use a foreign
            language font,  such as  .DL1, then  revise FL.BAT to first
            load the .DL0 font and then follow it by loading .DL1 font,
            which makes the changes for the new language. To make entry
            even easier, shorten the names of  the fonts  to codes that
            are easy  for you. For example, change the name COPPER1.DL0
            to  COP.DL0 and ITALIC1.DLO to IT1.DL0, so you have only to
            enter FL COP IT1.

                         INSTALLATION AND USE INSTRUCTIONS

            LIBRARY MODULES
                  Each  library  module  (FileInOut,  Printing, Screen,
            StringMa, Math1 and  CalUtil)  consists  of  five different
            files. These  are the  xx.DEF, xx.MOD,  xx.OBJ, xx.REF, and
            xx.SYM files. The .DEF and .MOD  files are  the source code





                                                                    6
            CalUtil Modula-2 Programming Tools
            for the  modules. You will need to print-out the .DEF files
            for incorporation into your  printed library  for reference
            when using  these procedures.  The .MOD  files are for your
            information and you can modify and recompile them  for your
            use when you need to. The .OBJ, .REF and .SYM files must be
            copied into the directories that contain  the corresponding
            types of files of your Modula-2 system. Thereafter, you may
            use the procedures just  as  you  would  any  other library
            procedures in the Modula-2 system. As is usual with Modula-
            2 procedures,  the  name  indicates  the  function  that it
            performs.   Generally,   the   .DEF   files   provide   the
            instructions  for  using  each   procedure,  including  the
            purpose and the number and types of parameters, if any.


            OTHER PROGRAMS
                  The  SeqFile.MOD  program  is  only a model which you
            will need to modify by inserting the names of the files and
            the structures  of the  records that it will contain before
            it will do what you  need.  You  will  need  to  modify the
            procedures  for   writing  into  the  files  (FileMain  and
            FileTemp),  and  for  reading   from  them   (ScanMain  and
            ScanTemp) to reflect the structure of the records. You will
            need to change the names of  the files,  and to  modify the
            key to suit your purposes.

                  The  PrintCon.EXE   file  can  be  installed  at  any
            convenient place:  on  a  floppy  if  you  require  it only
            rarely, or  in your DOS utility directory if you require it
            more often.  FL.BAT should  be installed  in your directory
            for fonts;  modify it  so that  it returns you to your root
            directory.

                  The PForm.EXE file must  be installed  in either your
            DOS directory  or your  DOS utility  directory, because you
            must be able to  call it  from the  directory that contains
            the  program  to  be  converted.  To  use it, move into the
            directory that contains the  program to  be converted, call
            PForm, and answer its questions. It asks whether you are in
            the  proper  directory,  the  name  of  the  program  to be
            converted, and  the number  of spaces  you wish inserted in
            place of each tab character. It then makes the conversion.

                  The .MOD files for these programs are again  for your
            information. You may decide to add functions to PrintCon by
            selecting the appropriate codes from the Toshiba manual.






                                                                    7
            CalUtil Modula-2 Programming Tools
            USING THE CALENDAR UTILITIES LIBRARY MODULE
                  The first use of the CalUtil Module is  to allow easy
            entry  of  dates  with  just  six keystrokes. You place the
            cursor on  the screen  where you  want the  date shown [Use
            PlaceCursor(x, y)  from the Screen Module] and call GetDate
            from the CalUtil module.  An  inverse-video  block displays
            '  /  /  ' with  the former  date, if there is one, and the
            cursor is positioned for the first  character. The operator
            keys in  the date with six strokes. The date is checked for
            calendar validity and the  operation  is  recycled  until a
            valid date is keyed in.

                  The second  use of the CalUtil Module is to provide a
            date key that serves to keep  records in  date sequence and
            to calculate  the time  between two dates. Days are counted
            from the start of the century that each  application covers
            (pseudo-Julian days),  allowing them to be Cardinal numbers
            that  save  file  space   and  simplify   programming.  The
            procedure  JulDay  converts  dates into pseudo-Julian days,
            while the  procedure  CalDate  converts  pseudo-Julian days
            back  into  dates.  Pseudo-Julian  days  can  be  added  or
            subtracted to calculate time-spans.  To save  space used by
            dates in  files, file  only the pseudo-Julian day number, a
            Cardinal type.

                  The third use of  the CalUtil  Module is  to tell the
            day of the week. The procedure DayWeek gives the day of the
            week for any pseudo-Julian day.

            SELECTING TIME-SPAN FOR CALENDAR APPLICATIONS
                  The CalUtil Module handles dates for any hundred-year
            span  that  starts  between  1901  and 1997. You select the
            starting date  to suit  the application.  For scheduling of
            future projects  you may start with the current year, while
            if your programs consider buildings already constructed you
            may wish  to start  with the  date of your oldest building.
            Only specific starting dates are allowed: the starting date
            must be 1 Jan of a year immediately after a leap year, such
            as 1 Jan 1981 or 1 Jan 1949. The starting year is indicated
            by the  year MOD  100 (1  for 1901,  49 for 1949). Only one
            starting year is allowed for  all  programs  in  any single
            application,  because  all  pseudo-Julian  days are counted
            from that starting date. The starting year used  in any one
            application is controlled by the value of StartYr. The best
            way to enter this value is to declare  CONST StartYr  = 81;
            (or other  year that  you select) at the head of each using
            program. Alternatively, the value  for StartYr  can be read





                                                                    8
            CalUtil Modula-2 Programming Tools
            from  a  permanent  file  that contains other data for each
            application.

            SELECTING THE DATE DISPLAY FORMAT
                  The  CalUtil  Module  allows  either  American format
            'mm/dd/yy'  or  British  format  'dd/mm/yy'.  The choice of
            format affects only the i-o displays (screen and printing),
            not the  records or  the calculations. Therefore, you could
            even make it selectable by each operator to suit his or her
            preference. The  style of presentation is controlled by the
            value of the CHAR variable DateStyle. You must arrange that
            it can  assume only two values, 'A' or 'B'. If you make the
            date format individually  selectable,  make  sure  that you
            display the choice so that the operator can verify whether 
            '10/01/88' means 10 Jan 88 or 1 Oct 88.

                  The CalUtil  Module uses  procedures from three other
            library  modules  on  this  disk:  Screen,   Printing,  and
            FileInOut. The  .SYM, .REF  and .OBJ  files for these three
            modules must also be in  your  programming  system  for the
            CalUtil Module to work.

            USING THE PRINTING MODULE
                  The Printing library module directs its output to the
            pseudo-file  named  Printer  of   the  Logitech  FileSystem
            library module. Since any use of files uses many procedures
            of the FileSystem module  it is  best to  IMPORT FileSystem
            complete.  Also  IMPORT  those Printing procedures that you
            require. When  preparing  to  print,  activate  the Printer
            pseudo-file by: 

            FileSystem.Lookup(Printer, 'DK:prn', FALSE); 

            Then set the Printer to 'writing' by:

            FileSystem.SetWrite(Printer);

            After  sending  to  the  printer  the  last  material to be
            printed, close the pseudo-file  and make  the printer print
            the last material by:

            FileSystem.Close(Printer);

              USE IN OTHER THAN LOGITECH IMPLEMENTATIONS OF MODULA-2
                  Different   implementations   of   Modula-2  may  use
            different names for library  modules and  their procedures,
            and may use procedures that perform different functions. If





                                                                    9
            CalUtil Modula-2 Programming Tools
            you desire to  use  the  modules  and  procedures contained
            herein in an implementation other than Logitech's, you will
            need to determine which  procedures in  your system perform
            the procedures  that are  IMPORTED into these .MOD modules.
            You may manage merely by changing  the IMPORT  names listed
            in the .MOD programs to those that your system uses for the
            equivalent procedures and compiling and linking the revised
            .MOD  modules   with  your   system.  If  you  cannot  find
            procedures that perform functions  identical to Logitech's,
            then you  will have  to modify the .MOD modules to take the
            differences into account.

                                        END

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1649

     Volume in drive A has no label
     Directory of A:\

    CALUTIL  DEF      2222   4-21-88   3:14p
    CALUTIL  MOD      9246   4-21-88   3:22p
    CALUTIL  OBJ     10868   4-21-88   3:23p
    CALUTIL  REF      5404   4-21-88   3:23p
    CALUTIL  SYM       616   4-21-88   3:14p
    FILE1649 TXT      2369  12-05-89   2:42p
    FILEINOU DEF      2681   2-12-86   5:06p
    FILEINOU MOD      4101   3-15-86   9:45a
    FILEINOU OBJ      4655  10-11-87   5:51p
    FILEINOU REF      4022  10-11-87   5:51p
    FILEINOU SYM      2194  10-11-87   5:28p
    FL       BAT        44   7-13-88  10:01a
    FNTLD    COM      2011   2-06-84   5:04p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-08-89  12:09p
    MATH1    DEF      2471   7-04-87   6:40p
    MATH1    MOD      2538   7-04-87   7:15p
    MATH1    OBJ      8598  10-11-87   5:52p
    MATH1    REF      1482  10-11-87   5:52p
    MATH1    SYM       832  10-11-87   5:35p
    MOD      BAT       606   6-14-88   8:49a
    MOD2TOOL DOC     28853  12-19-88   8:38a
    MODPROG  EXE     39778  12-16-88   7:32p
    MODPROG  MOD     17013  12-16-88   7:29p
    PFORM    EXE     38896   2-26-88   4:50a
    PFORM    MOD      4370  11-09-87   7:24a
    PRINTCON EXE     37481   4-23-88   3:39p
    PRINTCON MOD      6219   4-23-88   3:38p
    PRINTING DEF      2254   3-03-86   1:59p
    PRINTING MOD      3035   3-03-86   2:04p
    PRINTING OBJ      3975  10-11-87   5:53p
    PRINTING REF      3500  10-11-87   5:53p
    PRINTING SYM      1906  10-11-87   5:30p
    SCREEN   DEF      4709  12-08-88   2:45p
    SCREEN   MOD      9535  12-08-88   2:52p
    SCREEN   OBJ      8666  12-08-88   2:53p
    SCREEN   REF      5764  12-08-88   2:53p
    SCREEN   SYM      1036  12-08-88   2:45p
    SEQFILE  MOD      3026   2-20-86  12:05p
    STRINGMA DEF       679  10-26-87  11:51a
    STRINGMA MOD       882  10-26-87   4:07p
    STRINGMA OBJ      1748  10-26-87   4:07p
    STRINGMA REF       644  10-26-87   4:07p
    STRINGMA SYM       226  10-26-87  11:51a
           44 file(s)     291733 bytes
                            8192 bytes free
