---
layout: page
title: "PC-SIG Diskette Library (Disk #358)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0358/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0358"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BASIC XREF"

    The BASIC CROSS REFERENCE UTILITY is for the serious BASIC
    programmer.  It helps in the programming and debugging of BASIC source
    language programs by building a complete cross-reference of all
    variables.
    
    The utility provides list of the the following:  all line numbers,
    showing all references by other statements; an alphabetic listing of
    all reserved words and line numbers where they appear; an alphabetic
    listing of all variables that are not reserved; and a listing of the
    BASIC source which might include both numbered and un-numbered
    statements.  You can remove unreferenced statement numbers from
    compiled programs, remove REM statements from the source code, and
    unprotect source programs saved as protected programs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BASICREF.DOC

{% raw %}
```








                                 BASICREF

               BASIC CROSS REFERENCE UTILITY       Version 1.05
               (C)Copyright Excelsior Software, Inc. 1985, 1986
                            All Rights Reserved




                        A "User Supported" Program




                     A PROGRAMMING AID FOR THE IBM PC







                          EXCELSIOR SOFTWARE, INC.
                               P. O. BOX 226
                           NEW MILFORD, NJ 07646
                               (201) 384-1848





  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  .                                                                 .
  .   This User's Manual has been generated from the documentation  .
  .   file    BASICREF.DOC    on the diskette supplied with the     .
  .   BASIC Cross Reference Utility.  A copy of this User's Manual  .
  .   may be produced on your line printer under DOS (when the      .
  .   prompt   A>   appears) from the program diskette by entering  .
  .   the command:      COPY BASICREF.DOC LPT1:     .  A listing    .
  .   of this User's Manual may also be produced on the screen      .
  .   under DOS by entering the command:     TYPE BASICREF.DOC      .
  .                                                                 .
  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .















                         NOTES ON BASICREF VERSIONS


      SPECIAL NOTE ON ALL BASICREF VERSIONS:  BASICREF does not recog-
      nize path filenames, since the backslash character will be inter-
      preted as a delimiter preceding program option characters.
      Therefore, all files referenced by BASICREF should reside in the
      root directory.  Sub-directories will be treated in the future.


      Version 1.05 of BASICREF incorporates correction of all known
      program bugs as of October 1986.
















































                                  i










                                FOREWORD



       This disk contains BASICREF, our BASIC Cross Reference Utility
       program.  We invite you to use the program and copy it freely
       for your friends, acquaintances and co-workers so that they may
       try it too and, hopefully, pass it on to others.

       If you like this program, and find it useful, we request you
       send a ten dollar contribution to further the "User Supported"
       concept under which this program is made available.  In return,
       we'll keep you informed of any corrections we make to program
       bugs that we become aware of.

       On page 26 of this documentation you will find a description
       of an enhanced version of the program.  Please take the time
       to read it.  If you like this version of the program, we think
       you will like the enhanced version even more so.  The enhanced
       version is priced at the nominal sum of twenty five dollars
       (thirty five if you haven't yet made a ten dollar contribution
       for the standard version of the program).  If you do order the
       enhanced version, you will get:

         1. A disk containing the enhanced program and accompanying
            documentation.
         2. Updates, corrections, modifications, etc. to the program
            any time after purchase at nominal cost.
         3. Free consultation by mail or phone on any aspect
            of the program.

      Take the time to read the description of the enhanced version
      of BASICREF and, if you are interested, you will find an
      order form on page 29 for your convenience.  If you try it,
      we think you'll be quite pleased.

      We are also contemplating rewriting BASICREF for the Microsoft
      QuickBASIC compiler.  We would like to know how much interest
      there would be in such a product, and we would appreciate
      hearing from anyone who would be inclined to purchase it if
      if were available.  The order form includes a space for
      indicating interest in a cross reference utility for Microsoft
      QuickBASIC.  There's no obligation, of course, but it would
      help in our deciding whether to go ahead with the effort.

      In any event, we would like to hear from you regardless of
      whether or not you make a contribution or a purchase.  Let
      us know what you like or dislike about the program, what you
      would like to see added or changed, and any other suggestions
      you might care to make or comments you have to offer.  You
      can reach us at Excelsior Software, Inc., Box 226, New Milford,
      NJ 07646.





                                ii






                        TABLE OF CONTENTS


       NOTES ON BASICREF VERSIONS . . . . . . . . . . . . . .  i

       FOREWORD . . . . . . . . . . . . . . . . . . . . . . . ii

       INTRODUCTION . . . . . . . . . . . . . . . . . . . . .  1

       PROGRAM OPERATION SUMMARY  . . . . . . . . . . . . . .  2

       SYSTEM REQUIREMENTS  . . . . . . . . . . . . . . . . .  3

       DISK PREPARATION . . . . . . . . . . . . . . . . . . .  3

       PRELIMINARY PREPARATION  . . . . . . . . . . . . . . .  3
         BASIC Source Program . . . . . . . . . . . . . . . .  3
         Cross Reference File . . . . . . . . . . . . . . . .  4
         Cross Reference Program Disk . . . . . . . . . . . .  5
         Temporary Data File  . . . . . . . . . . . . . . . .  6

       RUNNING THE CROSS REFERENCE PROGRAM  . . . . . . . . .  6
         Program Loading and Initiation . . . . . . . . . . .  6
         Selection of Choice of Action  . . . . . . . . . . .  6
         Specification of BASIC Program File Name . . . . . .  7
         Input File Options . . . . . . . . . . . . . . . . .  8
         BASIC Version  . . . . . . . . . . . . . . . . . . .  8
         Statement Numbers  . . . . . . . . . . . . . . . . .  9
         BASIC Program Listing  . . . . . . . . . . . . . . . 10
         Example of Input File Option Specification . . . . . 10
         Specification of Cross Reference File Name . . . . . 10
         Cross Reference Printout Options . . . . . . . . . . 12
         Example of Cross Reference File Specification  . . . 13

       PROGRAM OPERATION FOR EACH ACTION SELECTED . . . . . . 13
         F1 - Processing of BASIC Source Program  . . . . . . 13
         F2 - Printout of BASIC Source Program  . . . . . . . 15
         F3 - List Cross Reference Output on the Screen . . . 17
         F4 - List Cross Reference Output on the Printer  . . 17
           Statement Number References  . . . . . . . . . . . 18
           Reserved Word References . . . . . . . . . . . . . 20
           Program Variable References  . . . . . . . . . . . 20
           I/O Related Variable References  . . . . . . . . . 21

       COMMENTS REGARDING COMPILED BASIC PROGRAMS . . . . . . 22

       SOME FINAL WORDS . . . . . . . . . . . . . . . . . . . 26

       ENHANCED CROSS REFERENCE UTILITY . . . . . . . . . . . 26

       DISCLAIMER . . . . . . . . . . . . . . . . . . . . . . 28

       PROGRAM ORDER FORM . . . . . . . . . . . . . . . . . . 29





                                   iii





                                INTRODUCTION


       The BASIC CROSS REFERENCE UTILITY is a programming aid for the
       serious programmer using the BASIC language on the IBM PC.
       Its use will facilitate the programming and debugging of
       BASIC source language programs.

       The utility provides the following output listings...

         1. A complete listing of all program line numbers, showing
            all references by other statements in the program.  Any
            references to non-existent line numbers are given, as
            well as any references to invalid line numbers.
         2. An alphabetic listing of all reserved words showing the
            line numbers in which they appear.  Reserved words are
            combined when the result provides greater significance
            than the individual words would provide as, for example,
            in  LINE INPUT  ,  ON ERROR  , or  PRINT USING  .
         3. An alphabetic listing of all program variables showing
            the line numbers in which they appear.  Array variables
            are shown with their dimensions as defined in the  DIM
            statement.  For a variable whose type differs from its
            default value, as a result of a  DEFtype  statement, the
            variable type is shown.
         4. An alphabetic listing of all I/O related variables that
            are neither reserved words nor program variables.  This
            includes file names, device names, and descriptors or
            delimiters found in I/O statements, such as   APPEND
            or   OUTPUT   .
         5. A listing of the BASIC source program may be produced,
            with top and bottom page margins, page headings, and
            formatting of program statements for improvement in
            program readability.

       Major features of the Cross Reference Utility include...

         1. The BASIC source program may include both numbered and
            un-numbered statements.  The latter is of particular
            significance in processing programs to be run under
            compiled BASIC.
         2. The BASIC program may be processed as either BASIC
            Version 1.1, 2.0 or 3.0, for proper differentiation
            between reserved words and program variables in each
            version.
         3. Cross reference output is stored on a disk file, for
            listing to the screen and/or printer when desired.  On
            listing, selected report sections may be suppressed.
         4. Last, but certainly not least, this utility will produce
            a cross reference listing for any size BASIC program,
            without exception.  Therefore, your program is limited
            only by restrictions of the BASIC system and the BASIC
            interpreter or compiler, and not by our utility.




                                   1






                        PROGRAM OPERATION SUMMARY

       The material on this page cuts through all the chaff and gives
       the very basic information needed to run the Cross Reference
       Utility.  This page will get you started; succeeding pages will
       provide more detail and may be read at your leisure.

       Your BASIC source program should be saved in ASCII format prior
       to loading the Cross Reference Utility.

       The program is loaded and executed under DOS (prompt A> on the
       screen) by typing   BASICREF   and pressing the Enter key.

       Select the actions desired when the main menu is displayed,
       using function keys F1 through F4 as toggle switches to
       activate or deactivate the selections.  Depress function
       key F10 when desired selections have been established, to
       start processing.

       Respond with BASIC source program input file name and/or
       cross reference output file name when prompted by the
       program.  Desired options may be selected by immediately
       following the file name with a   /   or   \   , followed
       by appropriate one-character option codes, as follows:

         BASIC Source Program Input File
           1 - Reserved word assignments correspond only to
               BASIC version 1.1
           3 - Reserved word assignments correspond to BASIC
               version 3.0
             - Default (neither 1 nor 3) corresponds to BASIC
               version 2.0 reserved word assignments
           N - Statement numbers in BASIC statements are optional
           S - Suppress formatting of BASIC statements in
               printout of BASIC source program.

         Cross Reference Output File
           S - Suppress printout of statement number references
           R - Suppress printout of reserved word references
           V - Suppress printout of program variable references
           I - Suppress printout of I/O related variable references

       Processing will start following specification of input and/or
       output file names.  Actions selected will be executed in
       numerical order corresponding to the function key numbers
       selected in the main menu.  Processing may be terminated at any
       time by depressing the F10 key to return to the main menu.

       A cross reference output file may be listed in the run in which
       it was generated, or in a subsequent run.  Options to suppress
       sections of the printout may be changed from one listing to
       the next.  Generated cross reference output files will remain
       on the disk until deleted or replaced by another file with the
       same name.

       Contents of the cross reference output listings, as well as
       details on the material presented above, are discussed in the
       pages that follow.

                                2





                            SYSTEM REQUIREMENTS


       The Cross Reference Utility is a programming aid for programs
       run on the IBM PC or compatibles under interpreter or compiler
       BASIC.  The minimum system configuration required is:

                     128K RAM
                     One Disk Drive
                     Monochrome or Color Monitor
                     Printer (Optional)

       This standard version of BASICREF runs under PC DOS versions
       1.1 and later.  The disk supplied has been formatted and
       written under DOS 2.1 as a double sided disk.

       The Cross Reference Utility is written in BASIC, and runs
       as a compiled program.  Your DOS system is the only addi-
       tional software required to run the program.



                             DISK PREPARATION


       Before you proceed, it is strongly recommended that you make one
       or more copies of the diskette for backup purposes.  This can be
       done under DOS using the DISKCOPY command to copy the complete
       contents of the diskette, followed by the DISKCOMP command to
       verify that the source and duplicate diskettes are identical.

       The programs can be copied individually from a disk in drive A
       onto a formatted blank diskette in drive B with the commands:

          COPY BASICREF.EXE B:/V      COPY BASICRF1.EXE B:/V
          COPY BASICREF.DOC B:/V      COPY TESTPROG.BAS B:/V

       Programs  BASICREF.EXE  and  BASICRF1.EXE  are necessary to
       execute BASICREF;  BASICREF.DOC  is this documentation file;
       TESTPROG.BAS  is a sample BASIC program.

       Once the disk contents have been copied successfully the
       original disk should be stored in a safe place.



                          PRELIMINARY PREPARATION


         BASIC Source Program

       The BASIC program to be processed by the Cross Reference
       Utility must be stored in ASCII format.  For a BASIC program
       run under interpreter BASIC, the program may be stored on disk
       when in memory under BASICA by entering the command ...
                         SAVE filespec,A
       where   filespec   is a string expression for the file speci-
       fication.  Note that if the    ,A    option is omitted, the
       program will be saved in a tokenized binary format, which
       will not be acceptable to the Cross Reference Utility.


                                3






       A BASIC program file generated through the use of the DOS Line
       Editor (EDLIN) program will also be in ASCII format and may be
       processed by the Cross Reference Utility.  This will be of
       particular value in the development of programs to be run
       under the BASIC compiler, where the use of line numbers is
       optional.  (More about this later).




          Cross Reference File

       When a BASIC program is processed by the Cross Reference
       Utility, a disk file is generated containing the information
       necessary to produce subsequent cross reference listings.
       This cross reference file will be stored on whichever disk
       drive the user specifies, and sufficient space must exist on
       the selected disk to store the cross reference file.

       The exact size of a cross reference file is dependent upon the
       size and complexity of the specific BASIC program being
       referenced and cannot be easily determined in advance.
       However, as a general rule of thumb, the cross reference file
       will be less than half the length of the BASIC source program
       file, and that criteria can be used to determine if there is
       sufficient space on the selected disk to store the cross
       reference file that will be generated.

       If you do not know whether there is sufficient space on the
       disk on which you plan to store the cross reference file that
       will be generated, you should proceed as follows:

       1. Load DOS from your DOS diskette until the prompt   A>
          appears.

       2. Execute the Directory (DIR) command on the disk that
          contains the BASIC source file.  (See the DOS manual for
          information on applying the DIR command).  The space on
          the disk occupied by the BASIC source program, in bytes,
          will be shown on the line next to the BASIC program file
          name.

          Assume for example, that the program to be processed by
          the Cross Reference Utility is stored on a disk with a
          file name of   TESTFILE.BAS  .  Assume that a portion of
          the listing produced by the DIR command shows...

                 FILE1    BAS   12800    8-07-84    9:56a
                 FILE2           3200    1-11-80   10:04p
                 TESTFILE BAS   25600    2-03-83    4:13p
                 PROG     EXE   12612    9-04-83   12:12p

          In this case, program    TESTFILE.BAS    occupies 25600
          bytes on the disk, and half this amount, approximately,
          or at least 12800 bytes must be available on the disk on
          which the cross reference file will be stored.



                                  4





       3. To determine how much space is available on the disk on
          which the cross reference file will be stored, execute
          the Check Disk (CHKDSK) command for the selected disk.
          (See the DOS manual for information on applying the
          CHKDSK command).  The status report produced will show
          how much free space is available on the disk.

          Assume, for example, that execution of the CHKDSK command
          produces the following report...

                   322560 bytes total disk space
                     9216 bytes in 2 hidden files
                   204800 bytes in 49 user files
                   108544 bytes available on disk

                   262144 bytes total memory
                   29744 bytes free

          In this case, there are 108544 bytes of unused space
          available on the disk, far in excess of the 12800 bytes
          required, and this disk can be used to store the cross
          reference file with room to spare.

       Should CHKDSK indicate insufficient space on the selected
       disk, repeat step 3 above until a disk with sufficient
       space is found.

       As will be discussed later, the only limitation on the size
       of the BASIC program that can be processed by the Cross
       Reference Utility is the disk space available to store the
       cross reference output file.  Therefore, it is possible to
       process a BASIC program that is too large to run under the
       BASIC interpreter, or too complex to be compiled by the BASIC
       compiler.  Consequently, it should be kept in mind that the
       successful processing of a BASIC program by the Cross
       Reference Utility does not necessarily mean that the program
       will be executionable.



          Cross Reference Program Disk

       The disk containing the Cross Reference Utility programs should
       be inserted in the default drive.  For a two disk drive system,
       it is immaterial in which drive the disks containing the BASIC
       program file and the cross reference file are located.

       For a single disk drive system, the cross reference programs,
       the BASIC program file, and the cross reference file should
       all reside on the same disk, for most efficient processing.
       If not, it may be necessary to change disks from time to time,
       as processing proceeds.

       If this situation does occur, the program will prompt for the
       proper file, as required.  While results will be correct,
       processing will be inefficient, and this mode of operation is
       not recommended.  Therefore, once again, you should see to it
       that all required files, including the Cross Reference Utility
       programs, reside on the same disk if you are using a system
       with a single disk drive.

                                     5






          Temporary Data File

       The Cross Reference Utility is comprised of the two programs
       BASICREF.EXE   and   BASICRF1.EXE  .  During the course of
       execution of the programs, each program may chain the other.
       Because of the compiler options used to generate the  .EXE
       modules, data cannot be passed between programs through the
       use of  COMMON  statements.  Therefore, a temporary data file
       is used during the chaining of programs to pass data from one
       program to the other.  This data file, named   BA$ICREF.101  ,
       requires about 128 bytes, and only exists while a  BASICREF
       program is being loaded.  This file will, therefore, normally
       not be apparent to the user, and is mentioned here only for
       information purposes.



                    RUNNING THE CROSS REFERENCE PROGRAM


          Program Loading and Initiation

       The Cross Reference Utility can be loaded and run by ...

          1. Loading DOS from your DOS diskette until the prompt
             A>  appears.
          2. Inserting the cross reference program diskette in
             drive A.
          3. Typing the word:   BASICREF   .
          4. Depressing the    Enter   key.

       The   BASICREF.EXE   module will be loaded and executed.



          Selection of Choice of Action

       Once the cross reference program is loaded, a title page will
       be printed on the screen, and the following menu will appear
       on the screen ...


         . . . . SELECT CHOICE OF ACTION(S) AS FOLLOWS . . . .

       FUNCTION KEY                ACTION
       ------------    ---------------------------------
           F1          PROCESS BASIC SOURCE PROGRAM

           F2          PRINTOUT OF BASIC SOURCE PROGRAM

           F3          LIST CROSS REFERENCE OUTPUT ON THE SCREEN

           F4          LIST CROSS REFERENCE OUTPUT ON THE PRINTER

           F10         PERFORM SELECTED ACTION(S) OR EXIT PROGRAM



                                    6





       Function keys F1 through F4 are used to select the desired
       actions.  Pressing any one of these keys will turn the
       selected action on by highlighting the function key, shown in
       the left hand column, with a reversed background.  Pressing
       the function key again will turn off the selected action.  An
       action can be alternately turned on and off by continued
       depression of the function key.

       Pressing any keys other than function keys F1 through F4 or
       F10 will have no effect at this point.

       When the desired functions have been selected, pressing the
       F10 function key will begin program execution, if any of the
       function selections F1 through F4 are activated.  If none of
       the function selections F1 through F4 are activated when
       function key F10 is depressed, program execution will end and
       the computer will return to the DOS command mode.

       If any of the function selections F1 through F4 are activated,
       the program will ask for the name of the BASIC source program
       file and/or the cross reference file, and will then execute
       each of the selected functions in turn.

       The program functions are explained very briefly in the ACTION
       column in the menu above, and will be described at length
       subsequently.  Before doing that, however, we will discuss the
       specification of BASIC program and cross reference file names.



          Specification of BASIC Program File Name

       If either action F1, processing of the BASIC source program to
       generate a cross reference file, or action F2, printout of the
       BASIC source program to obtain a a printed listing, have
       been selected, the program will ask for the name of the BASIC
       source program file.

       The name of the BASIC source program file may be input in
       upper case, lower case, or a combination of both, since the
       program will convert any lower case letters to upper case.

       The filename that is input in response to the program prompt
       will be treated in the same manner as BASIC would treat it.
       If the filename extension is omitted, the program will assume
       an extension of  .BAS  , so that a response of  TESTFILE
       would be interpreted as  TESTFILE.BAS  .  If there is no
       extension associated with the filename, the name should be
       entered with only the period following the name as, for
       example,  TESTFILE.   .

       When typing of the filename is complete, press the enter key.
       If no characters have been typed, the program will ask for the
       file name once again.

       The disk on the default drive, or on the drive specified in
       the filename, will be searched for the specified BASIC program
       file.  If the file is not found, or if the file is null, an
       appropriate message will be printed on the screen, and the
       program will ask for the input file name once again.

                                     7



       If the file is found, the program will check to verify that
       the input file is an ASCII file.  If the "N" option has not
       been selected (see discussion below on input file options) the
       first record will be checked to see if it starts with a number
       in the range of 0 to 65529.  If it does not, a message will be
       printed on the screen that the file is not an ASCII file, and
       the program will return to ask for the input file name once
       again.

       If the "N" option has been selected (see discussion below on
       input file options) the first record will be checked to see if
       it starts with a number, an alphabetic character (A-Z or a-z)
       or a blank.  If it does not, a message will be printed on the
       screen that the file is not an ASCII file, and the program
       will return to ask for the input file name once again.

       If the selected input file is found to be in the proper
       format, the program will ask for the cross reference file name
       (as discussed below) and/or proceed with processing.

       It should be noted that here, and throughout program
       execution, pressing the F10 key will cancel all processing and
       return to the main menu for reselection of program options.


          Input File Options

       There are three options available relating to the processing
       of the BASIC program input file.  The options are invoked by
       entering as part of the input file name, immediately following
       the filename specification, a slash   /   or backslash   \   ,
       followed by the one-character option code or codes.  The
       option codes may be entered in either lower or upper case, in
       any order, with intermediate characters if desired to separate
       the option codes.  Only valid option codes will be processed;
       any invalid option codes will be ignored.

       The input file options are as follows...

          BASIC Version

           Option:  1  or  3  .  Default value (blank):  2

       The BASIC version option specifies which version of BASIC
       applies, for proper differentiation between reserved words and
       program variables.  If no option is given, the default value
       of 2 is applicable, i.e., BASIC 2.0 reserved words are
       assumed.  Options 1 and 3 specify BASIC versions 1.1 and 3.0,
       respectively.

       The choice of options determines whether certain variables are
       classified as reserved words or program variables in the cross
       reference listing.  Assume, for example, that a BASIC program
       contains the following variables, among others:
                                VALUE
                                  INPUT
                                    WINDOW
                                      ENVIRON
       Regardless of the option, in all versions    VALUE    will be
       considered to be a program variable while    INPUT    will be
       considered to be a reserved word.

                                   8




       If option 1 has been selected, for BASIC version 1.1, both
         WINDOW    and    ENVIRON    will be considered to be program
       variables.  If no option has been selected, so that BASIC
       version 2.0 applies by default, or if option 3 has been selected,
       for BASIC version 3.0, both   WINDOW   and   ENVIRON   will be
       considered to be reserved words.

       (It should be noted that the BASIC Version 3.0 reserved words
       ENVIRON ,  ENVIRON$ ,  ERDEV ,  ERDEV$ ,  IOCTL ,  IOCTL$ ,  AND
       SHELL  are also reserved words in BASIC Version 2.0, although
       undocumented.  Therefore, BASICREF will consider them to be
       reserved words in either case, and the default option and /3
       option output will be identical).

       Similar differentiation will exist for other reserved words
       that exist in one version of BASIC and not in another.
       Obviously, if all reserved words in a program exist in all
       versions of BASIC, it is immaterial which option is chosen.

       The BASIC version option selected will apply to any listing
       of the cross reference file.  To change options, a new cross
       reference file must be generated for the source program.


          Statement Numbers

           Option:  N                    : Statement numbers optional
                    Default value (blank): Statement numbers required

       Interpreter BASIC requires each statement to have a statement
       number, and this condition will apply if the default option is
       invoked.  In this case, the program will generate a message
       that the input file is not an ASCII file if the first
       statement in a BASIC program is un-numbered, or a message that
       there is a direct statement in the file if the first statement
       is numbered but a subsequent statement in un-numbered.  In
       either case, processing will terminate and the program will
       return to the main menu.

       In compiler BASIC, the statement numbers are optional, being
       required only for branching.  If the   N   option is selected
       (the same parameter as used to invoke the option with the
       BASIC Compiler), the program will accept statements with or
       without statement numbers.  In this case, the program will
       generate a message that the input file is not an ASCII file,
       and will return to the main menu, if the first character of
       the first statement in a BASIC program is not a number, letter
       or blank, but no checking for statement numbers will be done.

       Selection of the   N   option will apply to the specific run
       during which the option is invoked.  In subsequent runs, when
       either listing the BASIC program or generating the cross
       reference file, the   N   option must be respecified, if
       applicable.

       This option is of particular value for large programs that may
       be taxing the capabilities of the BASIC compiler, and more
       will be said about this subsequently.

                                   9






          BASIC Program Listing

           Option: Default value (blank) :  Formatted listing
                   S                     :  Unformatted listing

       The BASIC source program may be listed by selecting the F2
       option in the main menu.  All listings will be generated with
       top and bottom margins, page numbering and page headings.
       Additionally, as discussed subsequently, unless otherwise
       specified, some formatting of statements will be done to
       improve program readability.

       This formatting can be suppressed by the   S   option.  In
       this case, each program statement will be printed as it would
       appear if printed with an   LLIST   command with an 80 column
       page width.

       Selection of the   S   option will only apply to the run in
       which it is evoked.  If subsequent listings are desired with
       suppression of formatting, the   S   option must be reinvoked
       at that time.

       Details of the program listing will be discussed subsequently.



          Example of Input File Option Specification

       The following specifications will all invoke the same input
       file options for a BASIC program named   TESTFILE.BAS   , for
       example, in response to a program prompt for the input file
       name:

                        TESTFILE.BAS/1NS
                        TESTFILE\1/S/N
                        TESTFILE/ N S 1 X
                        TESTFILE.BAS//3\\s//n\\1

       In the third case, the parameter   X   has no meaning, and
       will be ignored.  In the fourth case, both BASIC versions 1.1
       and 3.0 are specified.  Where this redundancy occurs, the
       rightmost specification will govern, and in this case BASIC
       version 1.1 will apply.



          Specification of Cross Reference File Name

       If either action F1, processing of the BASIC source program to
       generate a cross reference file, or action F3, printing the
       cross reference listing on the screen, or action F4, printing
       the cross reference listing on the printer, have been
       selected, the program will ask for the name of the cross
       reference file.

       The cross reference file name may be input in upper case,
       lower case, or a combination of both, since the program will
       convert any lower case letters to upper case.

                                 10






       If action F1, processing of the BASIC source program to
       generate a cross reference file, has been selected, regardless
       of whether actions F3 or F4 have been selected, a new cross
       reference file will be produced, and the file name input will
       be the name of the new file.  If action F1 has not been
       selected, a listing will be made of a previously produced
       cross reference file, and the file name input must be the name
       of a cross reference file that already exists on the disk.

       In responding to the prompt for the cross reference file name,
       if the filename extension is omitted, the program will assume
       an extension of   .REF   , so that a response of   TESTFILE
       would be interpreted as   TESTFILE.REF   .  If there is no
       extension associated with the filename, the name should be
       entered with only the period following the name as, for
       example,   TESTFILE.    .

       If a BASIC source program input file was specified previously
       in the run, as a result of choosing either the F1 or F2
       options in the main menu, the program will assign a default
       name to the cross reference file if you do not specify a
       filename at this point.  In this case, the extension will be
       changed from what it is in the BASIC  source program input file
       (usually, but not necessarily,   .BAS   ) to   .REF   .  For
       example, an input file named    TESTFILE.BAS   would result in
       a cross reference file named    TESTFILE.REF   .

       When typing of the filename is complete, press the enter key.
       If no characters have been typed, the program will either
       ask for the cross reference file name once again, until one is
       supplied, or assume a name as specified in the paragraph
       above.

       If a BASIC source program input file was specified previously
       in the run, as a result of choosing either the F1 or F2
       options in the main menu, the program will first check to see
       if the cross reference filename is different from the BASIC
       source program filename.  If the names are the same, a message
       will be produced to inform you that the names must be
       different, and the program will request the cross reference
       filename once again.  (Note that the same name will occur if
       the program generates the cross reference filename and the
       input file is named with an extension of   .REF   ).

       The disk on the default drive, or on the drive specified in
       the filename, will be searched for the specified filename.  If
       a new cross reference file is to be generated, because the F1
       option was selected in the main menu, and the specified
       filename does not exist on the disk, the program will assign
       this name to the new cross reference file, and processing will
       proceed.  However, if a new cross reference file is to be
       generated and a file with the specified filename already
       exists on the disk, the program will inform you of that fact
       and give you an opportunity to change the name of the cross
       reference file that will be generated.  You should note that
       if you give the cross reference file the same name as that of
       a file already on the disk, the contents of the original file
       will be lost.

                                 11






       If a new cross reference file will not be generated, because
       the F1 option was not selected in the main menu, the named
       file must exist on the disk.  If the file is not found, an
       error message will inform you of that fact, a request will be
       made for the cross reference filename, and the disk will be
       searched again until the file is found.  When the file is
       found, the program will check to determine if the file is a
       complete cross reference data file.  If the file is either not
       a cross reference data file, i.e., the file was not generated
       by the Cross Reference Utility, or the file is not complete,
       i.e., a run was aborted before the complete file was
       generated, an appropriate error message will be printed on the
       screen and the program will ask for the cross reference file
       name once again.  When an acceptable cross reference file is
       found, the program will proceed with subsequent processing.

       As was mentioned earlier, it should be noted that here and
       throughout program execution, pressing the F10 key (and the
       enter key if the program is asking for a filename) will cancel
       all processing and return to the main menu for reselection of
       program options.


          Cross Reference Printout Options

       There are four options available relating to the printout of
       the cross reference listing.  The options are invoked by
       entering as part of the cross reference file name, immediately
       following the filename specification, a slash   /   or back-
       slash   \   , followed by the one-character option code or
       codes.  The option codes may be entered in either lower or
       upper case, in any order, with intermediate characters if
       desired to separate the option codes.  Only valid option codes
       will be processed; any invalid option codes will be ignored.

       The option codes provide for the suppression of sections of
       the cross reference listing printout.  This may be of interest
       in large programs where you may not be concerned with the
       complete information that could be listed.  The options will
       only be in effect during the run in which they are invoked;
       sections may be suppressed in one run and then printed in a
       subsequent run by omitting the particular option code.

       The cross reference printout options are as follows...

            S    Suppress printout of statement number references
            R    Suppress printout of reserved word references
            V    Suppress printout of program variable references
            I    Suppress printout of I/O related variable references

       The default for each is equivalent to omitting the option
       code, i.e., each section will be printed unless specified
       otherwise by the option code.

       Any options selected will apply to listings produced on both
       the screen and the printer.


                                  12





          Example of Cross Reference File Output Specification

       The following specifications will all invoke the same cross
       reference listing suppressions for a cross reference output
       file named   TESTFILE.REF   , for example, in response to a
       program prompt for the cross reference file name:

                           TESTFILE.REF/RI
                           TESTFILE\I/R
                           TESTFILE/ R I Z
                           TESTFILE.REF//r\\i//

       In all four cases,   TESTFILE.REF   is the cross reference
       output file, and the reserved word and I/O related listings
       are to be suppressed.  In the third case, the parameter   Z
       has no meaning, and will be ignored.

       If the F1 option had been selected in the main menu, to
       process a BASIC source program file, and neither option F3, to
       list the cross reference output on the screen, or option F4,
       to print the cross reference output on the printer, had been
       selected, all the parameters in the four specifications above
       would be ignored since cross reference listings would not be
       produced in that run.



          PROGRAM OPERATION FOR EACH ACTION SELECTED


          F1 - Processing of BASIC Source Program

       If the F1 option had been selected in the main menu, to
       process the BASIC source program, i.e., to generate a cross
       reference file for the BASIC program, processing will begin
       immediately after the input and output file names have been
       specified.

       Each statement in the BASIC source program will be processed
       in sequence.  The first 79 characters of the BASIC statement
       will be shown at the bottom of the screen in reversed image
       as the statement is being processed.

       Since the Cross Reference Utility is not a preprocessor, the
       BASIC statements are not checked for errors.  However, in the
       course of classifying variables as to type, errors involving
       useage of reserved words may be found and, if so, an error
       message will be printed on the screen.

       The following conditions will result in an error message being
       printed:

                 1. A reserved word appearing in a COMMON statement.
                 2. A reserved word appearing in a DIM statement.
                 3. A variable name that is a reserved word with a
                    type declaration character ($,%,!,#) at the end.

       In each case, the error message will be:

             SYNTAX ERROR IN STATEMENT XXXXX

                                13




       where XXXXX is the number of the BASIC statement in which the
       error appears.  If the   /N   option is in effect and the
       statement with the error is un-numbered, the value of XXXXX
       will be that of the most recent statement number.  If there
       was no previously numbered statement in the program, the
       value of XXXXX will be 0.

       While the improper use of a reserved word name will be flagged,
       the variable used in this way will appear in the Variable
       References listing output discussed subsequently.

       The program will also print a warning message if command type
       statements are encountered under certain circumstances.  The
       warning message will be:

       ** CAUTION ** - STATEMENT NO. XXXXX CONTAINS A COMMAND...  YYYY

       where XXXXX is the number of the BASIC statement in which the
       command type statement appears, and YYYY is the command type
       statement.

       This caution will not be printed if the command type statement
       is anticipated, such as the commands   MERGE   or   DELETE
       in a   CHAIN   statement, or if the command type statement
       is encountered in a   DATA   statement.

       Regardless of whether a caution is issued, the command will
       appear in the Reserved Word References listing output discussed
       subsequently.

       Processing of the BASIC program will continue until all state-
       ments have been processed, or until the single-step capacity of
       the Cross Reference Utility has been reached.  When this occurs
       variable references and statement number references will be
       sorted internally by the utility, and the data will be written
       onto the cross reference file.  Comments at the bottom of the
       screen will inform you as to the program status.

       In most cases, the end of your BASIC program will occur before
       the capacity of the Cross Reference Utility is reached.  In
       practice, BASIC programs in excess of 1000 lines of coding have
       been within the capacity of the Cross Reference Utility to
       process in one pass.  However, the size of your program need
       not be of concern during processing.  If the capacity of the
       utility is reached, the sorting and writing to the disk will
       be done in stages, with appropriate merging of the data between
       stages.  As before, comments at the bottom of the screen will
       inform you as to the program status.

       Processing of the BASIC program in stages, if necessary, is done
       automatically by the Cross Reference Utility and will require no
       action on your part.  Although messages at the bottom of the
       screen will show when intermediate sorting or merging is being
       done, at the conclusion of processing there will be no differ-
       ence between a cross reference file generated in a single pass
       and one generated in more than one pass.

       As mentioned earlier, programs in the order of 1000 statements
       may be processed in one pass.  In practice, a maximum of two

                                  14





       stages has been necessary to process very large BASIC programs.
       In actuality, the Cross Reference Utility can process any size
       BASIC program, ad infinitum, in any number of stages necessary.
       Typically, however, the utility will process a BASIC program
       in one stage most of the time, and will not exceed two stages
       in just about any conceivable case.

       At the conclusion of processing of the BASIC program, the cross
       reference file will be written with information including the
       date and time.  The date and time will correspond to that when
       processing of the BASIC program was initiated.  The date and
       time will be established on the cross reference file, and this
       date and time will appear whenever the established cross refer-
       ence file is listed.

       As with anytime during the running of the cross reference
       utility, processing of the BASIC program may be terminated
       by depressing the F10 key, in which case the program will
       return to the main menu.  If this is done during processing
       of the BASIC program before any data were written to the disk,
       the cross reference file will be null, i.e., the file will
       have a length of 0.  If this is done after some data have
       been written to the disk, but before all data are written to
       the disk, the file will be incomplete.  In either case, a
       subsequent attempt to list the cross reference file will
       result in an error message that the file is not complete.

       An incomplete cross reference file will also result if there
       is insufficient disk space for the complete file.  This will
       not occur if sufficient space is assured on the disk, as
       discussed earlier.

       At the conclusion of normal processing of the BASIC program,
       the Cross Reference Utility will list the source program or
       the cross reference output, if the appropriate options were
       selected, or else return directly to the main menu.



          F2 - Printout of BASIC Source Program

       If the F2 option had been selected in the main menu, to print
       the BASIC source program on the printer, printout of the
       program will be done following the processing of the BASIC
       source program, if applicable.

       All printer output will be made assuming 8-1/2 x 11 page size
       with 80 column printout and 6 lines to the inch.  Printing
       will start at the line where the print head is positioned, so
       that the top margin will be determined by the setting of the
       paper in the printer.  The top and bottom margins will total
       6 lines, approximately.  (A BASIC statement that runs for
       more than one line will always have all lines appearing on the
       same page.  The bottom margin may vary, therefore, to prevent
       a statement from being split between two pages).

       All pages will be headed with the BASIC program file name, the
       date and time, and the page number, in the following format
       (spacing is reduced here, for illustrative purposes)...

                                 15





       BASIC Program file:  TESTPROG.BAS  11-07-84  01:12:23  PAGE  1

       If both the F1 and F2 options were selected in the run, the
       date and time shown in the program listing will be the same
       as the date and time established in the cross reference file.
       If the F1 option was not selected, the date and time shown in
       the program listing will be the date and time the program
       listing was started.

       If formatting of the BASIC program is being suppressed, by
       the use of the   /S   option in the BASIC program input file
       name, each statement will be printed as it would be printed
       by the   LLIST   command.  In the sample BASIC program on
       this disk,   TESTPROG.BAS   , statement number 110, for
       example, would be printed with the   /S   option as:

       110 IF A < 0 THEN 60 ELSE IF A=0 THEN CLOSE:END ELSE PRINT A

       If the   /S   option has not been invoked, some formatting
       will be done to improve program readability.  In this case,
       statement number 110 would appear as:

         110 IF A < 0 THEN 60_
                  ELSE IF A=0 THEN CLOSE:END_
                       ELSE PRINT A

       An underscore at the beginning or end of a line indicates that
       that position was blank in the unformatted statement.

       Additional formatting will be performed on statements that
       extend over more than one eighty column line.  This may be
       observed in any such statements that exist in a program.

       If the   /N   option was invoked, each BASIC statement will be
       preceded by a line number, which will correspond to the EDLIN
       line number for that statement.  (Column headings in this case
       will show that this is a line number).  Statement 110 above
       would then appear as:


         11   110 IF A < 0 THEN 60_
                       ELSE IF A=0 THEN CLOSE:END_
                            ELSE PRINT A


       The sample (although trivial) BASIC program   TESTPROG.BAS
       on this disk may be listed with various options to observe
       the differences in output.

       Listings produced with the F2 option in the main menu will
       only be generated on the printer.  If a program listing on the
       screen is desired, the BASIC program should be loaded under
       BASICA  and the   LIST   command executed, or a listing may be
       produced under DOS using the   TYPE   command or EDLIN.

       At the completion of the BASIC program listing, the cross
       reference program will return to the main menu if no other
       processing options have been specified, or else will perform
       the next program step in turn.

                               16





          F3 - List Cross Reference Output on the Screen
                               and
          F4 - List Cross Reference Output on the Printer

       The two options will be discussed together because they are
       quite similar in appearance.

       A listing will be produced on the screen if option F3 had been
       selected, and on the printer if option F4 had been selected.
       If both options were selected, a screen listing and a printer
       listing will be produced essentially simultaneously.

       If option F1 had been selected in the same run, then the cross
       reference listing produced will correspond to the BASIC source
       program previously processed in that run.  It should be noted
       that if option F2 had been selected in the run, but option F1
       had not been selected, the BASIC source program listed under
       option F2 will not necessarily correspond to the cross reference
       listing that is being produced.

       All printer output will be made assuming 8-1/2 x 11 page size
       with 80 column printout and 6 lines to the inch.  Screen output
       will be 80 columns wide.

       All output will be listed with the same page headings that were
       shown under the F1 option.  Individual column headings describe
       the contents of each output section.  Since the page length is
       different for the screen and printer, page numbers will differ
       on the two output media for the same program, except for the
       first page.

       If listing is being made on the printer only, printout will be
       continuous, and will end only when the report is completed.  If
       listing is being made on the screen, the listing will pause at
       the end of each screen page.  If listing is being made on the
       screen and printer simultaneously, the printer listing will
       pause while the screen listing is in a pause state.

       When the screen is in a pause state, pressing the space bar
       once will continue the listing until the end of the next page
       is reached, and so on.  If the space bar is pressed twice,
       within a period of 1/2 second, subsequent printing will be
       continuous, without a pause at the end of a screen page.  When
       printing continuously, depressing the space bar once will cause
       the resumption of the pause at the end of a screen page.  This
       cycle may be repeated as often as desired during the report
       printout.

       Each of the four sections of the cross reference report may be
       suppressed individually, as was discussed earlier, by selection
       of control characters in the cross reference file specification.
       A section suppressed in a run may be subsequently printed out
       by omitting the appropriate control character.

       Assuming the sections have not been suppressed, they will be
       printed in the order discussed in the sections following...



                                 17









           Listing of Statement Number References

       Each statement number in the program will be listed, along with
       the numbers of any statements that reference each.  If any
       statement is un-numbered, it will assigned the most recent prior
       statement number.  If there is no prior numbered statement, the
       un-numbered statement will be assigned a statement number of 0.

       The statement number reference section for the sample program
       of   TESTPROG.BAS   will be as follows...


         Statement    Reference
            10
            20
            30
            40
            50
            55         55     55
            60        110
            70
            80
            90
           100
           110
           120
           130
           140
           150       170
           160        50
           170
           180*      160     160
           190*      160
         *****       160

       *Statement number does not exist
       *Reference to invalid statement number



       If no entry appears alongside a statement number, that statement
       is unreferenced.  As in statement number 55, a statement may
       reference itself.  If a given statement references another more
       than once, the statement number is repeated under References, as
       is the case for references to statements 55 and 180.













                                  18






       For any references to statements that do not exist, the non-
       existent statement is listed followed by an asterisk, as are
       statements 180 and 190.  A note that the statement does not
       exist is printed on the page on which the non-existent statement
       appears.

       For a program containing the statement   RESUME 0   that does
       not have a statement numbered 0, the non-existent statement
       number message will be produced.  Although the    RESUME 0
       statement is valid, this treatment is consistent with that
       of the BASIC interpreter, which would give an "Undefined line
       number" error if you try to renumber a program under these
       conditions.  An   ON ERROR GOTO 0   statement will be treated
       the same way by the program, although the BASIC interpreter
       would treat it differently.

       For any references to invalid statement numbers, such as the
       reference to statement number 78000 in statement 160, the last
       entry in the list of statement numbers will be   *****   , with
       the referencing statement numbers being shown.  A note that there
       is a reference to an invalid statement number is printed on the
       last page of the statement reference report.

       Programs generated with the BASIC interpreter cannot have any
       duplication of statement numbers, since the BASIC system will
       replace a statement with a subsequent statement that has the
       same statement number.  However, a program to run under the
       BASIC compiler may have been generated through the use of the
       EDLIN utility and, conceivably, could have erroneous duplication
       of statement numbers.  In this case, the Reference field would
       show the duplication of statement numbers.  For example, a
       line that read...

           75      35     DUPL     110     120

       would mean that statement number 75 is referenced in statements
       35, 110 and 120 and, in addition, there is another statement
       number 75 in the program.

       Statement numbers appearing in a   CHAIN   statement will be
       referenced here if the statement numbers apply to the current
       program, but not if they apply to the chained-to program.  For
       example, in the statement:

            CHAIN MERGE "A:PROG1",1000,DELETE 2000-3000

       statements 2000 and 3000 will be referenced because they apply
       to the current program, but statement number 1000 will not be
       referenced because it specifies a line in the chained-to
       program.

       Following the printout of the statement number references, a
       listing of reserved word references is made.





                               19





           Listing of Reserved Word References

       The next section printed is a listing of all reserved words in
       the BASIC program and the statement numbers in which they
       appear.  For the sample program of   TESTPROG.BAS   a section
       of this listing (not consecutive) would be...

        Reserved Word    Reference
        BEEP                160
        CLOSE               110     150
        ERR                 160     160     160     160     160
        ON ERROR             50
        PRINT USING         100
        PRINT#              160

       A word appearing more than once in a statement will have the
       same reference repeated, as is the case for   ERR   above.
       Reserved words that have more significance as compound words
       rather than as individual words are shown in the compound form,
       as, for example,   ON ERROR   and   PRINT USING   above.

       For a reference to a function, as in   DEF FNXXX   , the entry
       in the reserved word listing will be   DEF FN   and in the
       program variable listing will be   FNXXX   .

       Reserved words will be listed in this section regardless of
       how they are used.  For example, the reserved word   FOR   is
       used differently in statement 60 than in statement 120, 130 or
       140, but all four references will be listed together.

       Reserved words that differ from one version of BASIC to another
       will be classified in accordance with the applicable version of
       BASIC that was specified with the BASIC source program filename
       when the cross reference file was originally generated.

       The listing of reserved word references will be followed by a
       listing of the program variable references.


           Listing of Program Variable References

       A listing of program variable references will follow, unless
       the listing is suppressed.  For the sample program of
       TESTPROG.BAS   , the variable reference listing will be..

       Variable         Reference
       A                    90    100    110    110    110
       A(20)                40     70     70
       B(2,5)               40
       C(100) [$]           40
       G$                   55     55     55
       I                    60     70     70     70     80

       The first variable   A   is different from the second variable,
       which is a subscripted variable.  This second variable was
       dimensioned as 20 in a DIM statement.  Similarly   B   was
       dimensioned as 2,5 in a DIM statement and   C   was dimensioned
       as 100 in a DIM statement.  A variable appearing, for example,
       as   D()   would have been dimensioned from use as a subscripted
       variable in a statement without a corresponding DIM statement.

                                20




       A bracket following a variable name means that the variable is
       defined as other than its default type.  C(100) [$]   means, for
       example, that dimensioned variable C is defined (through the use
       of a DEFtype statement) as a string variable, rather than its
       normal default type of a single precision variable.

       The variable types that may appear within the brackets are:

              [I]  Integer
              [D]  Double precision
              [$]  String variable

       Note that a single precision variable does not appear within
       brackets, since a variable that is not shown with a bracketed
       type and does not have a rightmost character that is a type
       delimiter (!,#,%,$), must be a single precision variable.

       In a similar vein, any variable that has a rightmost character
       that is a type delimiter will never be shown with a bracketed
       type, since a type delimiter always takes precedence over a
       DEFtype statement.

       A variable shown in a   DEF FNXXX   statement will be listed
       here with a variable name of   FNXXX   .

       The listing of program variable references will be followed
       by a listing of I/O related variable references, if any.




           Listing of I/O Related Variable References

       The last section of the cross reference listing will show
       I/O related variable references, if any.  For the sample
       program of   TESTPROG.BAS   , for example, the listing is...


       I/O Related      Reference
       "KYBD:"             140
       "LPT1:"             130
       "SCRN:"             120
       AS                  120    130    140
       OUTPUT              120    130


       Any device name or file name will appear here.  Similarly the
       descriptors   AS   and   OUTPUT   , when used in an   OPEN
       statement, will appear here.

       Differentiation should be noted between the names appearing
       above and similar names that may be reserved words or program
       variables.  For example,   KYBD:   is a device name while
          KYBD   used in a statement would be a program variable.
       The words   AS   and   OUTPUT   as used in an   OPEN   statement
       are neither reserved words nor variable names; the same words
       used in a different context would be program variables and would
       appear in the program variable reference section.


                                21





       As an extreme case, consider the following line of coding:

         1000 OPEN "OUTPUT" FOR OUTPUT AS #1:OUTPUT=12

       This would generate three entries for   OUTPUT   , each with a
       different meaning...

         "OUTPUT" as a filename in the I/O Related Variable References
         OUTPUT as a descriptor in the I/O Related Variable References
         OUTPUT as a variable name in the Program Variable References

       Note that the word   INPUT   in statement 140 does not appear
       here.  Since it is a reserved word, it appears in the reserved
       word reference section.

       The listing of I/O related variable references concludes the
       output of the cross reference listing.

       Following the end of the cross reference listing, the utility
       will return to the main menu.  Additional processing may then
       be done, or an exit back to DOS may be made.





          COMMENTS REGARDING COMPILED BASIC PROGRAMS

       Having made mention of compiled BASIC programs several times,
       it behooves us to make some comments in this regard.  This
       would seem to be an appropriate point.

       Anyone who has worked with BASIC for any period of time must
       surely be aware that interpreted BASIC can be excrutiatingly
       slow.  For programs of any substance, execution time can be
       a severe impediment.  In many cases, serious consideration
       should be given to converting programs from interpreted BASIC
       to compiled BASIC.  The increase in speed can vary from a small
       factor to a very major improvement.

       As an example of the speed advantage of compiled BASIC over
       interpreter BASIC, we refer you to the article "Four FORTH's"
       in the April 1984 issue (Vol.2, No. 5) of PC World magazine,
       and our letter on page 26 of the September 1984 issue (Vol 2,
       No. 10) of the same magazine.  We pointed out that the timing
       for a program to calculate prime numbers (The Sieve of
       Eratosthenes) decreased from 539 seconds under interpreted BASIC
       as reported in the article on FORTH, to 11 seconds when run with
       compiled BASIC.  This difference is, admittedly, extreme but
       is indicative of what can happen.

       The discussion that follows was written when we were using
       the IBM BASIC compiler and EDLIN.  Like many others, we have
       gone on to bigger and better things.  We now use Microsoft's
       QuickBASIC exclusively, and have graduated to a full screen
       editor.  So take what follows with a grain of salt.  (Along
       this line, we would appreciate your letting us know if you
       would be interested in a cross reference utility for the
       QuickBASIC compiler.  Please see the order form at the end
       of this documentation).....

                                 22




       We typically develop a program in interpreted BASIC for its
       greater ease in testing and debugging.  We maintain a version
       of the program with appropriate changes for compiler BASIC as
       we go along.  This allows us to develop the compiled version
       in parallel with the interpreted version.

       Eventually, with a program of any substance, we run into a
       problem with the compiled version of the program.  We start
       getting nasty   TC   messages during compilation, telling us
       that the program is too complex.  The problem invariably is
       a result of too many statement numbers exceeding the capacity
       of the compiler.  The excess of statement numbers is a carry-
       over from the fact that interpreter BASIC requires every
       BASIC program statement to be numbered.  Since compiled BASIC
       only requires statement numbers for transfer purposes, the
       program can be modified to fit within compiler limitations
       by removing unnecessary statement numbers.

       An additional benefit of removal of unneeded statement numbers
       is that the compiler can then produce a more efficient code.
       We therefore have two very good reasons for doing this - the
       question is how?

       Once we remove any statement number from a line of coding we
       will no longer be able to read the program as a BASIC program
       file.  However, if we save the interpreter BASIC program in
       ASCII format we will be able to modify the program using
       the Line Editor (EDLIN) under DOS.  And if you refer to the
       statement number references listing you will see that any
       statement in the listing that does not have any references
       shown next to it can be removed as a statement number.

       The enhanced version of our cross reference utility has
       the capability to take a BASIC source program file and the
       corresponding cross reference file, and to automatically
       generate a new source program file that has all the
       unreferenced statement numbers removed.  The enhanced
       version is described at the end of this documentation, and
       we invite you to give it a try.

       Until you do, we offer the following method to accomplish
       this.  It probably seems tedious, and it is, but remember you
       only have to do this once for a program and you're finished.
       So here goes...


       1. Load the BASIC program into memory with the BASIC
          interpreter and save the program on disk (as you have to
          do to run the Cross Reference Utility) with the command:
                 SAVE "FILENAME",A    .

       2. Run the Cross Reference Utility for the BASIC program saved
          above, and obtain a printout of the statement number
          references.

       3. List the BASIC program with the Cross Reference Utility
          using the    /N    control parameter.  This will list the
          line number for each BASIC statement in the program.


                                  23





       4. Load the program into memory under DOS using EDLIN.  (See
          the DOS manual for complete information on using EDLIN).
          This can be accomplished by the command
                       EDLIN filespec    .

       5. Each statement in the statement number reference listing
          that does not have a reference shown can have its statement
          number removed.  The program listing will give the line
          number corresponding to the EDLIN line number for each
          statement.  These two documents can be used in combination
          to accomplish the statement number removal, as follows.


       6. For illustrative purposes, we'll use the sample program
          TESTPROG.BAS    on this disk.  Use the cross reference
          utility to get the listings you need.

       7. The first statement number that can be removed is statement
          number 10, which has no references listed.  From the program
          listing, this statement is line number 1.

       8. EDLIN displays the prompt    *    .  Type the number   1   ,
          following the asterisk, for line number 1, and press the
          enter key.

       9. EDLIN will display the prompt and line number followed by
          contents of that line.  Under it will be the prompt and
          line number repeated with the rest of the line blank.

      10. Press the space bar twice.  This will blank out the statement
          number in the replacement line.

      11. Press the F3 key.  This will duplicate the rest of the line.
          The new line should be identical to the original line except
          that the statement number will have been blanked out.

      12. Press the enter key.  The line will be changed in memory, and
          EDLIN will return to the asterisk prompt.

      13. Repeat steps 8 through 12 for each additional statement
          number to be deleted.  For the sample program, statement
          numbers 20 through 50, 70 through 140, and 170, corresponding
          to line numbers 2 through 5, 8 through 15, and 18,
          respectively, remain to be processed.

      14. When all changes have been made, follow the asterisk prompt
          with the letter   E   and press the enter key.

      15. When EDLIN is finished updating the files, the original file
          will be renamed with an extension of   .BAK   and the new
          file will have the filename and extension that was specified
          in the EDLIN command.

      16. This new file may now be used as input to the BASIC compiler
          and to the Cross Reference Utility, in both cases with a
          /N parameter.

      17. Subsequent changes to this new file will have to be made
          using EDLIN since the BASIC interpreter will no longer accept
          the program with missing statement numbers.

                                 24




      18. One final fly in the ointment.  Your BASIC source program
          may be too large for EDLIN to load into memory completely.
          If the file is loaded completely, EDLIN will display the
          message
                        End of input file
                        *_

          If only the asterisk prompt appears, the file has not been
          fully loaded.  In that case, eventually when you enter a
          line number nothing will happen, and EDLIN will simply
          repeat the asterisk prompt on the next line.  At this point
          you are past the end of the file in memory.  Not to worry...

      19. Follow the asterisk prompt with the letter   W   and press
          the enter key.  This will write the changed file onto disk.

      20. Follow the next asterisk prompt with the letter   A   and
          press the enter key.  This will append more of the file into
          memory.  You will then be able to continue as before, with
          one adjustment.

      21. The line numbers for the statements in memory will, for the
          moment, no longer correspond to what you have in the program
          listing.  This is because the first line in memory is now
          a program statement from somewhere in the middle of your
          program.  Once more, not to worry...

      22. Follow the asterisk prompt with the numeral   1   and press
          the enter key.  Line 1 will now be displayed.  (Pressing
          the enter key at this point will get you back to the asterisk
          prompt without making a change in line 1).

      23. Now find the BASIC program statement in your program listing
          corresponding to the statement shown in line 1.  This will
          provide you with the offset from the statement numbers in
          your listing, and the requested line number can be adjusted
          accordingly.

      24. Assume, for example, that line number 1 shown by EDLIN is
          line number 855 in your program listing.  Then to find a
          line number XXX in your program listing, subtract 854
          (855-1) from XXX and use the result as the line number
          requested of EDLIN.

      25. In the example above, program listing line number 855 would
          be requested as line number 855-854 = 1 to EDLIN, program
          listing line number 1000 would be requested as line number
          1000-854 = 146 to EDLIN, etc.

      26. Steps 19 through 25 may have to be repeated in the unlikely
          event that the complete program was still not processed.
          The procedure is complete when EDLIN displays the
          End of input file    message.

      27. At the completion of these changes, follow the asterisk
          prompt with the letter   E    and press the enter key to
          update the file, as mentioned above.



                                25





       If all this seems tedious, remember...

            1. You only have to do this once for a particular program.

            2. You don't have to do the whole thing at one sitting.
               You can do part of it with EDLIN, end the session with
               the   *E   entry, and continue at another time.

            3. Once you get the knack of it, it will proceed very fast
               since the actual procedure is quite simple.

            4. It will be well worth the effort in terms of what you
               will be able to accomplish with the BASIC compiler.

            5. You can eliminate all the tedium by purchasing the
               enhanced version of our cross reference utility.


              SOME FINAL WORDS

       Although some people might argue otherwise, nobody's perfect.
       We've tested our Cross Reference Utility thoroughly and there
       are no bugs that we know about.  But things being what they
       are, there undoubtedly will be bugs showing up as the program
       finds more and more use.  We`d appreciate it if you would let
       us know if you encounter any problems with the program.  We
       promise to consider all correspondence and we'll do our best
       to fix any bugs that may occur.

       Along the same tack, we'd appreciate any comments you have
       regarding changes, improvements, enhancements, etc. that you
       would like to see in the program.  Again, we'll give thorough
       consideration to all suggestions, and we'll try to incorporate
       those that appear to be of most potential interest.



           ENHANCED CROSS REFERENCE UTILITY

       We invite you to try our enhanced Cross Reference Utility.
       Following are the features that will probably be of greatest
       interest.

          1. The enhanced version produces a cross reference for
             compiled BASIC programs in terms of line numbers,
             rather than statement numbers.  This is of particular
             benefit in typical compiled programs that have mostly
             un-numbered statements.  If you run a cross reference
             for a compiled program with this version of BASICREF,
             you will see many references to the same statement
             number for blocks of coding, if the program does not
             have many statement numbers.  In the enhanced version,
             each line will have a unique reference.  The difference
             is appreciable, making it much easier to locate items
             in a listing produced by the enhanced version.

          2. The enhanced version has a routine to automatically
             remove unreferenced statement numbers from a BASIC
             program, to increase the benefit from compiled BASIC
             programs as discussed earlier.

                               26




          3. The enhanced version of BASICREF can automatically
             remove REM statements from a source program.  This will
             free additional memory in interpreter BASIC programs where
             program size is straining available memory.

          4. The enhanced version of BASICREF provides a simplified
             procedure for unprotecting interpreter BASIC programs
             that have been saved to disk with the  P  option.



       If you find this version of the Cross Reference Utility useful
       we think you will find the enhanced version of the program
       even more useful.  You can order the enhanced version for
       twenty five dollars (thirty five if you haven't sent the ten
       dollar contribution for the standard version), and for your
       money you will get ...

         1. A disk containing the enhanced program.
         2. Free updates, corrections, modifications, etc. to
            the program any time after purchase.  (You'll just
            have to supply a blank disk, mailer and postage).
         3. Free consultation by mail or phone on any aspect
            of the program.

       An order form appears on page 29 for your convenience.

       *** And as a special bonus, so that you won't have to pay
       for BASICREF twice, if you purchased this standard version
       from any of the several user groups and other sources (as
       opposed to obtaining a copy free from a friend) you can
       deduct five dollars from the price of the enhanced version.
       See the order form for details. ***



























                                    27






                           DISCLAIMER

       This program is provided "as is" without warranty of any kind,
       either express or implied, including, but not limited to, the
       implied warranties of merchantability and fitness for a
       particular purpose.  In no event will the Author be liable for
       any damages, including any lost profits, lost savings or other
       incidental or consequential damages arising out of the use or
       inability to use this program, even if the Author has been
       advised of such damages, or for any claim by any other party.



       Despite this necessary legality, it should be obvious by now
       that we have corrected bugs in the program, and we assure you
       that we will continue to do so.  Just let us know of any you
       find and we will do our best to maintain the program in an
       error-free condition.










































                                 28






        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

              PROGRAM ORDER/CONTRIBUTION/INFORMATION FORM

       To:  Excelsior Software, Inc.
            P. O. Box 226
            New Milford, NJ 07646

       Please send a copy of the enhanced version of the BASIC Cross
       Reference Utility.  I understand that this version of BASICREF
       is copyrighted, and I agree not to distribute any unauthorized
       copies of the enhanced version.

          ___ BASIC Cross Reference Utility -     @ $25.00      ______
                           Enhanced Version

          ___ Contribution for the standard -       $10.00      ______
              version of BASICREF if not
              previously submitted.

                                                  Subtotal      ______
          ___ I obtained the standard version
              of BASICREF from the following paid
              source: ______________________________
              I am deducting $5.00 from the purchase price      ______

                                            Total Enclosed      ______

         Ship To: __________________________________________
                  __________________________________________
                  __________________________________________
                  __________________________________________


       Please pay by check or money order.  For orders to New Jersey
       please add 6% sales tax.  BASICREF requires DOS 2.0 or later.

       - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        _____  I'm not ready to order the enhanced version just now,
     but I do want to further the "User Supported" concept.  Enclosed
     find a contribution of ten dollars in support of the standard
     version of BASICREF.  I understand you will keep me informed of
     any corrections you make to the standard version of the program.


        _____ I would be interested in a version of BASICREF for the
     Microsoft QuickBASIC compiler.  Please let me know when you have
     a version available.  I understand that this does not obligate
     me in any way.

     Name & address: _________________________________________
                     _________________________________________
                     _________________________________________
                     _________________________________________

     - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

                                   29







```
{% endraw %}

## BASICREF.TXT

{% raw %}
```
-----------------------------------------------------------------------
Disk No. 358         BASICREF                                     v1.05
-----------------------------------------------------------------------
BASICREF  EXE   Program to generate BASIC Cross Reference file
BASICRF1  EXE   Program to produce printer and/or screen listings
BASICREF  DOC   Documentation file
BASICREF  TXT   Documentation
TESTPROG  BAS   Sample BASIC source file
-----------------------------------------------------------------------
```
{% endraw %}

## FILES358.TXT

{% raw %}
```
----------------------------------------------------------------------------
Disk No  358  BASIC Xref 1.05                                        v1.1
----------------------------------------------------------------------------
This disk contains a BASIC cross reference utility.
 
BASICREF EXE  Program to generate BASIC Cross Reference file
BASICRF1 EXE  Program to produce printer and/or screen listings
BASICREF DOC  Documentation file
BASICREF TXT  Documentation
TESTPROG BAS  Sample BASIC source file
 
PC-SIG
1030D E Duane Avenue
Sunnyvale, CA 94086
Ph# (408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## TESTPROG.BAS

{% raw %}
```bas
10 REM SAMPLE PROGRAM FOR PROCESSING BY CROSS REFERENCE UTILITY
20 '   PROGRAM DOESN'T DO MUCH OF ANYTHING
30 DEFSTR C-G
40 DIM A(20),B(2,5),C(100)
50 ON ERROR GOTO 160
55 G$=INKEY$:IF G$=" " THEN 55 ELSE IF G$="-" THEN 55
60 FOR I=1 TO 5
70 A(I)=2*I:PRINT A(I)
80 NEXT I
90 A=12!
100 PRINT USING "A=####";A
110 IF A < 0 THEN 60 ELSE IF A=0 THEN CLOSE:END ELSE PRINT A
112 IF ERL = 90 THEN 115
115 IF 100=ERL THEN 112 ELSE IF ERL <> 60 THEN END
120 OPEN "SCRN:" FOR OUTPUT AS #1
130 OPEN "LPT1:" FOR OUTPUT AS #2
140 OPEN "KYBD:" FOR INPUT AS #3
150 CLOSE:END
160 BEEP:IF ERR=12 THEN 180 ELSE IF ERR=13 THEN 190 ELSE IF ERR=14 THEN 180 ELSE IF ERR=15 THEN 78000 ELSE PRINT #1,"ERROR= ";ERR
170 GOTO 150
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0358

     Volume in drive A has no label
     Directory of A:\

    BASICREF DOC     87493   1-15-87  11:03p
    BASICREF EXE     74880   3-05-86  10:28p
    BASICREF TXT       533   1-20-87   1:44p
    BASICRF1 EXE     41728   1-01-80  12:14a
    FILES358 TXT       619   1-28-87  11:33a
    GO       BAT       369   1-04-80   1:16a
    TESTPROG BAS       724   1-01-80  12:30a
            7 file(s)     206346 bytes
                          112640 bytes free
