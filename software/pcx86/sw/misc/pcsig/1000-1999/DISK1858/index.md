---
layout: page
title: "PC-SIG Diskette Library (Disk #1858)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1858/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1858"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PARASORT"

    PARASORT will copy, sort and merge your ASCII OR dBASE files easily and
    quickly.  Since most databases can export to ASCII, these files also can
    be sorted with PARASORT.  It can use complex record selection criteria,
    including record and byte position on input and/or output, to select
    which records it will sort and merge.  A special dBASE III interface
    enhances the program.
    
    PARASORT can display the fields of the selected files on the screen, one
    page at a time, 20 fields per page.  Specify which fields are key and
    in which sequence, and then choose the sorting order of each field.
    PARASORT can reformat the input file as it is read, skipping and
    limiting the input  and/or output records, including or excluding dBASE
    header records.  It will write the output records to one or more output
    files, formatting it as you wish.
    
    Sort on ascending, descending and absolute values of keys.  Convert
    fixed length records to variable length records and back again.
    PARASORT can eliminate duplicates or place them in an expected order,
    first, last, or don't care.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1858.TXT

{% raw %}
```
Disk No: 1858                                                           
Disk Title: ParaSort                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: ParaSort                                                 
Author Version: 4.21                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
PARASORT will copy, sort and merge your ASCII OR dBASE files easily and 
quickly.  Since most databases can export to ASCII, these files can also
be sorted with PARASORT.  It can use complex record selection criteria, 
including record and byte position on input and/or output, to select    
which records it will sort and merge.  A special dBASE III interface    
enhances the program.                                                   
                                                                        
Display the fields of the selected files on the screen, one page at a   
time, 20 fields per page.  Specify which fields are key and in which    
sequence and then choose the sorting order of each field.  PARASORT can 
reformat the input file as it is read, skipping and limiting the input  
and/or output records including or excluding dBASE header records.  It  
will write the output records to one or more output files, formatting it
as you wish.                                                            
                                                                        
Sort on ascending, descending and absolute values of keys.  Convert     
fixed length records to variable length records and back again.         
PARASORT can eliminate duplicates or place them in an expected order,   
first, last, or don't care.                                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PS42X.DOC

{% raw %}
```







                                    ParaSort v4.2x                                    ParaSort v4.2x                                    ______________

                                     A Product of                                     A Product of                                     ____________

                                Christopher J. DeGreef                                Christopher J. DeGreef                                ______________________
                                   6623 Stowe Court                                   6623 Stowe Court                                   ________________
                                   Lisle, IL 60532                                   Lisle, IL 60532                                   _______________


          Install ParaSort by simply copying PS.EXE, PSP.EXE, and PS.ERR to
          the same directory on your disk, floppy or hard drive, it doesn't
          matter.  Then add that directory to your path.

          Files:    (* indicates for registered users only.)

               PS.EXE         ParaSort v4.2x executable program
               PSP.EXE        ParaSort Compiler v1.2x executable program
               PS.ERR         ParaSort v4.2x error messages
               PS42x.DOC      ParaSort v1.2x - v4.2x documentation
               * *.C          ParaSort Compiler v1.2x Turboc source code

               PSDBIII.EXE    dBASE III file interface
               PSDBIII.DOC    dBASE III interface help file
               * PSDBIII.C    dBASE interface TURBOC source code

               PSDEMO.BAT     Demonstration batch file
               PSD*.SPC       ParaSort demonstration sort specifications
               PSD*.DAT       ParaSort demonstration data

          ParaSort can:

          -    COPY, SORT and MERGE your files
          -    reformatting the input file as it is read if requested
          -    skipping and limiting the input and/or output records
          -    including/excluding dBASE header records
          -    writing the output records to one or more output files
          -    SELECTing  only  certain  records  for  each file  based  on
               complex record  selection criteria. Include  based on record
               and byte position on input and/or output
          -    formatting each output file  exactly how you would like  it,
               including the ability to calculate fields
          -    sort the output  on as many key  fields as necessary  of any
               data type
          -    NEW data type called QUOTED allows you  to define a sort key
               that  may  contain  quotes,  tick  marks,  and  commas,  and
               PARASORT will ignore them
          -    Sort on ascending, descending, and absolute values of keys.
          -    convert fixed length records to  variable length records and
               back again
          -    eliminate duplicates  or place  them in  an expected  order;
               first, last, or don't care
          -    use a special workdisk for more efficient sorting.













                               COMMAND SYNTAX DIAGRAMS                               COMMAND SYNTAX DIAGRAMS                               _______________________


          SORT                <input file name>
          COPY

          MERGE               <primary file name>, <secondary file name>

          * GIVING            <output file name>

          LRECL               <size of record in bytes>

          RECORDS             <number of records in input file(s)>
          
          VARIABLEINPUT
          VARIABLEOUTPUT

          * SELECT            <equation>

          * INRECORD          <type>,<output pos> <equation>
          * OUTRECORD         - or -
                              C,<out pos>,<length>,<precision> <equation>


          DUPS                FIRST
          NODUPS              - or -
                              LAST
                              - or -
                              DONTCARE

          * INLIMITS          <number  of  records  to  skip>,  <number  of
          * OUTLIMITS         records to take>
                              - or -
                              <number of records to skip>, ALL

          * CHARACTER         <input record position>,<length>  [direction]
          * QUOTED
          * DISPLAY

          * INTEGER           <input record position> [direction]
          * UNSIGNED
          * LONG
          * FLOAT
          * DOUBLE

          [direction]         ASCENDING
                              AASCENDING
                              DESCENDING
                              ADESCENDING



                                        - 2 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                               COMMAND SYNTAX DIAGRAMS                               COMMAND SYNTAX DIAGRAMS                               _______________________


          TRANSFER            <number of bytes>

          WORKDISK            <one character>




          * Command may be repeated as required.
          Notes:
               Capitalized words are  required.  Replace  bracketed phrases
               with the requested  information.  Commas are  required where
               indicated.    -or- separates alternate forms  of the command
               and is not part of the command itself.




































                                        - 3 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      _________________________________________


          @<file name>        Used to specify a file  on disk that contains
                              ParaSort specifications.   This  file can  be
                              edited with any ASCII word processor.

          -B<file name>       Used  to   specify  a  compiled   (BIN)  sort
                              specification  file.   If  sort commands  are
                              entered this will be the output file name for
                              the compiled BIN  file.  If no  sort commands
                              are specified,  this will  be the  input file
                              name   and   ParaSort  will   re-process  the
                              commands that were entered when the  original
                              sort was executed.   The parser (PSP.EXE)  is
                              not  required  when  a  current  BIN file  is
                              specified.

          -F<file name>       Overrides the specified input file name where
                              ever  it  was  or  will  be entered;  on  the
                              command line,  in a sort  specification file,
                              or in a compiled BIN (-B)  file.  This can be
                              used to compile  a BIN  file and then  re-use
                              the same BIN file  for different input files.
                              A  subsequent  sort  may look  like:    PS -B
                              DOS.SPC -F INFILE.DAT.

                              A second occurance of this  option is allowed
                              for any  sort.   It will  replace the  output
                              file name for the same reasons that were just
                              discussed.  It  is obviously important  which
                              order the two -Fs are  entered on the command
                              line.  The  first is for the  input file, and
                              the second is for the output file.

                              This is also an  important feature for  those                              This is also an  important feature for  those
                              who intend to use ParaSort to write their own                              who intend to use ParaSort to write their own
                              systems for selling.   It is not  part of the                              systems for selling.   It is not  part of the
                              licensing or registration  to sell the parser                              licensing or registration  to sell the parser
                              (PSP.EXE)  with your  systems.   But you  may                              (PSP.EXE)  with your  systems.   But you  may
                              include PS.EXE  and PS.ERR with  systems that                              include PS.EXE  and PS.ERR with  systems that
                              you sell  as long as  PS.EXE is not  the main                              you sell  as long as  PS.EXE is not  the main
                              program within the system.                               program within the system. 

          -S                  Used  to cause  a statistical  summary to  be
                              displayed on  the screen  after ParaSort  has
                              completed.





                                        - 4 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      _________________________________________


          -U                  Used to convert all literals in parameters to
                              upper case.

          -M<K bytes>         Used to limit  the amount of memory  that the
                              sort will use.

          -O                  Used to  suppress the use of  a configuration
                              file.  A configuration file contains  regular
                              ParaSort   commands   and,  if   present,  is
                              included  in  each  sort   before  any  other
                              commands are processed.   Its name is  always
                              PS.CFG  and   it  must  reside  in  the  same
                              directory as PS.EXE to be found  by ParaSort.
                              Sort commands and command line options can be
                              included in the configuration file.

          -T                  Used to suppress  the truncation  (truncation                                      ________
                              is the default) of extra bytes at  the end of
                              a file.  When the file size is not a multiple
                              of  LRECL the  remaining  bytes are  normally
                              dropped.  With this option they are made into
                              a new record and padded with NULLS (0x00).

          -N                  Used to  cause ParaSort  to  create an  audio
                              response when the  processing has  completed.
                              The  sound  will  continue  until  a  key  is
                              pressed.






















                                        - 5 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      _________________________________________


          DOS Sort program emulation extensions

          This  is not a recommended way to sort your files.  In the future
          it may not be fully supported by this product.  Other features of
          ParaSort will allow exact duplication of these features with many
          added benefits and safe-gards.  For instance, when specifying the
          same input and output file names using redirection, the file will
          be truncated  after a few  thousand bytes.   This is  an inherent
          problem with I/O  redirection. DOS  SORT has the  problem and  so
          does ParaSort.


          /R                  The DOS  sort  command to  reverse  sort  the
                              file.

          /+<number>          The DOS  sort command  to change  the default
                              sorting  position  from  the  first  byte  to
                              another position.































                                        - 6 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      _________________________________________


          Literals

          A literal is a constant value that will be inserted into a record
          or used as a comparison in a SELECT command.  A literal takes the
          format of t'...' where "t" is  the type of data that the  literal
          represents.  See the  definition of "type".  For  example, if you
          wish to  compare an  integer number in  a record and  select only
          those that are  greater than 100 you would code  a select command
          something like this:

               SELECT  (i,1 > i'100')

          This  says that all records with an  integer in position one that
          is greater that 100 should be selected.

               OUTRECORD C,1,.  (C'AAAAA')

          This says that  the output record  consists of a character  field
          starting in position one and is made up of 5 characters (5 bytes)
          of the quoted literal.   Since the literal-equation evaluates  to
          "AAAAA"  the output  record would  contain a  5 character  field,
          "AAAAA".

          A quote may be placed within a literal.  Literals can be enclosed
          in either single quote marks or  double.  To include double quote
          marks as part of the literal, do something like this:

               'Tom said "Hello world".'

          To include single quote marks in a literal do this instead:

               "Tom said 'Hello world'."

          Be careful  when using literals on the command line.  Most often,
          it is safest to  use literals in SPECification files,  where they
          always work  as stated.  When they are  used on the command line,
          DOS tends to pre-edit them and  eliminate the double quote marks.
          Also, DOS treats the  > and <, as well as the | as IO redirection
          characters, regardless of quotation marks.


          System Literals

          Several  system  variables  may  be   accessed  though  type  "S"
          literals.   Within the  quotes of an  "S" literal  can be  one of
          several system variable names.  At run time, ParaSort will insert
          the value of the system variable inplace of the system variable.


                                        - 7 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      COMMAND LINE OPTIONS and GENERAL COMMENTS                      _________________________________________


          The system variables are:

          s"RECIN"       The record counter of the input file.
          s"RECOUT"      The record counter of the output file.
          s"POSIN"       The byte counter of the input file.
          s"POSOUT"      The byte counter of the output file.
          s"RND"         A random, positive integer, 0 to 32767.
          s"TRUE"        The integer 1.  Evaluates to true in equations.


          Comments

          Comments can be freely added to the sort commands except they may
          not be inserted  in literals or file names, or  break up reserved
          words.   A comment  is identified  with a  leading sharp  (#) and
          ended with a sharp character.   All characters between the shsrps
          are  comments and will be displayed on the console as ParaSort is
          running.  Comments are retained in the compiled SBN files so that
          they can be displayed on subsequent executions.


          General

          ParaSort commands may be entered on the command line at execution
          time,  in specification files (using  the @ command line option),
          and in the  configuration file (PS.CFG  in the same directory  as
          PS.EXE).     Command  line   options  can  not   be  included  in
          specification files.   Also, command line options  are not stored
          in compiled SBN files.

          SBN (compiled sort BIN) files are  created (overwritten) when new
          ParaSort commands  are specified and  the -B option is  used.  If
          the -B option is  used and no  new ParaSort commands are  entered
          then the SBN file must exist and it will be used to determine the
          processing that will take place.














                                        - 8 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


          AASCENDING     aasc   Use this after  the definition of a  key to
                                indicate that  it should be sorted in ASCII
                                absolute  ascending  sequence.     Absolute
                                means  without  regard to  numeric  sign or
                                alphabetic case.

          ADESCENDING    adesc  Use this after  the definition of a  key to
                                indicate that it should be  sorted in ASCII
                                absolute  descending  sequence.    Absolute
                                means  without  regard to  numeric  sign or
                                alphabetic case.

          ASCENDING      asc    Use this after  the definition of a  key to
                                indicate  that it should be sorted in ASCII
                                ascending sequence.

          CHARACTER      c      Used to specify the location and  length of
                                a string of characters for a key.

          COPY           cop    Used  to  initiate  the  copy  function  of
                                ParaSort.   No keys  can  be specified  and
                                LRECL   must   be   specified   if   record
                                modification commands are issued.  Under no
                                circumstances can multiple output  files be
                                specified  during  a copy  operation.   Use
                                SORT  instead.   SORTing  on a  newly added
                                field of  s'REC' will effectively  copy the
                                file without changing the order.

          DESCENDING     desc   Use this after  the definition of a  key to
                                indicate that it should be sorted  in ASCII
                                descending sequence.

          DISPLAY        dn     Used to specify the  location and length of
                                a display  numeric field  to be  used as  a
                                sort key.  A display numeric field contains
                                printable numbers and optionally  a decimal
                                point, leading  sign, an  E for  scientific
                                notation with an optional  sign immediately
                                following it, and commas.

                                  format= <sn><0-9><.><0-9> <E><sn><0-9>




                                        - 9 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


          DONTCARE       d      Use  in  conjunction  with the  DUPS/NODUPS
                                commands.   Indicates to ParaSort  that you
                                don't  have a preference  for which  one of
                                duplicate records are ordered  first.  Most
                                efficient of duplicate options.

          DOUBLE         d      Used  to specify  the location of  a double
                                real  number to  be  used as  a  key.   The
                                declaration of  this type  of field in  the
                                "C" language  is  LONG FLOAT  and is  eight
                                bytes in length.

          EQUATIONS             Equations are statements that are evaluated
                                at run  time by  ParaSort.   Equations  are
                                used in  three commands;   SELECT, INRECORD
                                and OUTRECORD.   In the SELECT command, the
                                equation  evaluates  to  a  true  or  false
                                value.  True is any  number that is greater
                                than zero or any character string that  has
                                a  length greater  than  zero.   All  other
                                equation values are false.

                                In the INRECORD and OUTRECORD commands, the
                                equation  returns  a  numeric or  character
                                string value.

                                All  equations must  begin and  end with  a
                                pair of brackets  (one of: (,  [, {, },  ],
                                )).  Pairs of brackets may be used anywhere
                                within the equation to  force the order  of
                                evaluation.

                                Many operators are accepted:

                                   addition            +, PLUS
                                   subtraction         -, MINUS
                                   multiplication      *, TIMES
                                   division            /, DIV

                                   equal to            =, EQUALS, EQ
                                   not equal to        !=, NE, <>
                                   greater than        >, GT
                                   not greater than    !>, NG, <=
                                   less than           <, LT
                                   not less than       !<, NL, >=

                                        - 10 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______



                                   logical and         AND
                                   logical or          OR

                                Variables can  be of  two different  types;
                                field location references  and literals.  A
                                location reference is comprised  of a field
                                type, a position in the  record, and if the
                                field type is C or X, a length.  The record
                                that contains  the field  is determined  by
                                the command that contains the equation.  If
                                the SELECT  command is being  used then the
                                reformatted input  record will  be what  is
                                refered to.   If  the  INRECORD command  is
                                being  used  then  the   unformatted  input
                                record  is  referred  to,     and  if   the
                                OUTRECORD command  is being  used then  the
                                reformatted input record is used.

                                Commas must  separate the items in  a field
                                location reference.  EX: (c,1,3 = c'ABC').

                                As in:
                                 SEL(c,10,3 != c'EXE' and c,10,3 != c'COM')
                                                  - or -
                                 IR c,1,5,0
                                   (s'RECIN' / i'2' + i'1')

                                Literal fields are comprised of  a type and
                                a quoted  string of  characters.  See  TYPE
                                for details.

          DUPS           dups   Used  to tell  ParaSort  that there  may be
                                duplicate records  in the  file.   With the
                                duplicate resolver options of  FIRST, LAST,
                                and DONTCARE you  can indicate how ParaSort
                                should order these duplicates.

          FIRST          f      Used  in  conjunction with  the DUPS/NODUPS
                                commands.  Indicates that when records with
                                duplicate  keys  are  encountered, ParaSort
                                should place then  in the original sequence
                                as  they were  found.  In  the case  of the
                                NODUPS  command, the  first  record of  the
                                duplicates will be  retained and the others

                                        - 11 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


                                will be dropped from the output file.

          FLOAT          f      Used to  specify  the location  of  a  real
                                number to be  used a key.   The declaration
                                of this type  of field in the  "C" language
                                is FLOAT and is four bytes in length.

          GIVING         g      Used  to  specify the  name  of  the output
                         to     file(s).     This   can  include   a  drive
                         >      specifier and path.  If the file exists, it
                                will be  deleted first.   If  the directory
                                does not  exist, it  will be  created.   At
                                least one  output file  must be  specified.
                                Unless the  input was redirected,  in which
                                case the output will appear on the console.

                                If  multiple  output  files  are  specified
                                (using the  GIVING command more  than once)
                                the SELECT,  OUTRECORD, and  VARIABLEOUTPUT
                                commands are associated with  the preceding
                                GIVING command.  Any of these commands that
                                are used  before specifying  a GIVING  file
                                will be  treated  as  global  commands  and
                                affect every output file.  This  allows you
                                to select certain records to be included in
                                particular files and to format each of  the
                                output files differently.

                                The ">" causes the output  to be redirected
                                to a file.  Strictly  speaking, this is not
                                a  ParaSort   command  (and   may  not   be                                                       (and   may  not   be
                                supported in  the future); it is  a command                                supported in  the future)
                                line  option.   It  is listed  here because
                                Giving and ">" are mutually exclusive.  And
                                because the output  will not appear  on the
                                console, as stated above, if redirection is
                                used.

          INLIMITS       il     Used  to  limit   the  input  to  ParaSort.
                                Specifies  the  number of  records  to skip
                                over and the number  of records to include.
                                You may  skip 0  or more  records and  take
                                more than 0 or ALL records.

          INRECORD       ir     Used  to reformat the  records as  they are

                                        - 12 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


                                read  from  the  input  file.     Any  non-
                                formatted  positions  in a  newly formatted
                                record  are space  filled.   The  receiving
                                field position  may be replaced with  a "."
                                (period) if ParaSort  should calculate  the
                                next available position in the record.

                                If the type  of the receiving field  is "C"
                                for  character  string,  a  comma  and  the
                                length of the field must follow the sending
                                field  description.  and  a  comma  and   a
                                precision  number  must  follow that.    An
                                example:

                                   INRECORD C,1,7,2  (F,5)

                                meaning;  move  a  floating   point  number
                                starting in position 5  of the input record
                                and  convert  it  to   a  character  string
                                starting in position 1 for a length of 7 of
                                which 2 will be decimal characters.

                                The precision specification is required for
                                character comversions.  Even if it is not a
                                number that is being inserted as in

                                   INRECORD C,1,5,0  (c'HELLO')

                                Always place  a ,0  if the  field does  not
                                apply.

                                An alternate coding of the INRECORD command
                                can  be  done  under special  circumstances
                                only.

                                   1. The receiving field type is C or X.
                                   2. The  first field  in the equation  is
                                   type C or X.
                                   3. You  want the  receiving field  to be
                                   the  same  size  as  the  result  of the
                                   equation.

                                The command would look something like:

                                   IR C,1,. (c'HELLO')

                                        - 13 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______



                                The period  states that  the length of  the
                                field should be  calculated from the length
                                of  the  result  of   the  equation.    The
                                precision parameter is not allowed, and not
                                needed, when the period (.) is used.

                                All  key,  SELECT, and  OUTRECORD positions
                                must be  calculated according to  the newly
                                formatted record.

          INTEGER        i      Used to specify the location of an  integer
                                field to be used as a key.  The declaration
                                of this in  the "C" language is  INT and is
                                two bytes in length.

          LAST           l      Used  in  conjunction with  the DUPS/NODUPS
                                commands.  Indicates that when records with
                                duplicate  keys  are  encountered, ParaSort
                                should place  then in  the opposite  of the
                                original sequence as  they were found.   In
                                the case of  the NODUPS  command, the  last
                                record of  the duplicates will  be retained
                                and the  others  will be  dropped from  the
                                output file.

          LONG           l      Used  to specify  the location  of an  long
                                integer field to  be used  as a  key.   The
                                declaration  of  this  field  in  the   "C"
                                language is LONG  INT and is four  bytes in
                                length.

          LRECL          r      Used to specify the length  of a record for
                                fixed length  files.   It is  also used  to
                                tell   ParaSort   the  maximum   length  of
                                variable length records.  For variable (VI)
                                length records  you must account for the CR
                                LF  at  the  end  of  each  record.    This
                                increases the records size by  2 bytes.  Do
                                not  specify  this for  the  COPY operation
                                unless  you  are  also   specifying  record
                                modifications.  ParaSort will  operate much
                                faster  if  it can  decide it's  own record
                                size.


                                        - 14 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


          MERGE          m      Used  to  merge two  files  together.   The
                                files must be previously sorted in the same
                                keys.   You  must also  specify these  same
                                keys when you  this command.  If  no GIVING
                                (TO)  option is  specified  then the  first
                                file in the MERGE  command is replaced with
                                the merged output.

          NODUPS         nd     Used  to tell  ParaSort that  there  may be
                                duplicate records in the file and  that you
                                only want to retain one of them.   With the
                                duplicate resolver options of  FIRST, LAST,
                                and DONTCARE you can  indicate how ParaSort
                                should  select  the  proper   duplicate  to
                                retain.

          OUTLIMITS      ol     Used  to  limit  the  output  of  ParaSort.
                                Specifies  the number  of  records to  skip
                                over and the number of records to  include.
                                You may  skip 0  or more  records and  take
                                more than 0 or ALL records.

          OUTRECORD      or     Used to  reformat the  records as they  are
                                written to the output file(s).  The meaning
                                of this  command varies  slightly with  the
                                placement of it with respect to the  GIVING
                                command.     If  it  precedes   all  GIVING
                                commands  the  OUTRECORD  command  will  be
                                treated   as   a   global   output   format
                                specification;  it  will affect  all output
                                files.   If  it follows  a GIVING  command,
                                then it applies only to that output file.

                                Any  non-formatted  positions  in  a  newly
                                formatted  record are  space  filled.   The
                                positional references in this command refer
                                to the  newly formatted input record if the
                                INRECORD command was issued.  The receiving
                                field position  may be replaced with  a "."
                                (period) if ParaSort  should calculate  the
                                next available position.

                                If the type  of the receiving field  is "C"
                                for  character  string,  a  comma  and  the
                                length of the field must follow the sending

                                        - 15 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


                                field  description  and   a  comma  and   a
                                precision number  must  follow  that.    An
                                example:

                                   OUTRECORD C,1,7,2  (F,5)

                                meaning;  move  a  floating   point  number
                                starting in position 5 of  the input record
                                and  convert  it   to  a  character  string
                                starting in position 1 for a length of 7 of
                                which 2  will be  decimal characters.   See
                                INRECORD  for  more  examples  and  further
                                options.  All INRECORD parameters are valid
                                OUTRECORD parameters as well.

          POSIN                 Used to reference the  actual byte position
                                of the current record being processed.  The
                                first record in the file is pos=1.  This is
                                a long  integer (LONG) field.   This system
                                variable refers  to  the  position  in  the
                                input file.

          POSOUT                Used to reference the actual byte  position
                                of the current record being processed.  The
                                first record in the file is pos=1.  This is
                                a long  integer (LONG) field.   This system
                                variable  refers  to  the position  in  the
                                output file.

          QUOTED         q      Used to specify that a key is of the QUOTED
                                type.  This is very  similar to a character
                                type of  key in that after  all adjustments
                                are  made,   the  field  is   sorted  as  a
                                character field.

                                These adjustments to a quoted  field DO NOT
                                affect the contents of the record; they are
                                adjustments made only for sorting purposes.
                                Each  sort  key  has  all  of  its  commas,
                                quotation marks, tick marks, and extraneous
                                white space removed before it is compared.

          RECIN                 Used   to   reference  the   actual  record
                                position  of  the   current  record   being
                                processed.  The first record in the file is

                                        - 16 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


                                rec=1.  This is a long integer (LONG) field
                                and  if it  is inserted  with  the INRECORD
                                command,  can  be  used as  a  part  of the
                                record from then on.   This system variable
                                refers to the record position in the  input
                                file.

          RECOUT                Used   to   reference  the   actual  record
                                position  of  the   current  record   being
                                processed.  The first record in the file is
                                rec=1.    This  is a  long  integer  (LONG)
                                field.  This system variable refers to  the
                                record position in the output file.

          RECORDS        recs   Used to specify  the number  of records  in
                                the input  file (or files in the  case of a
                                merge  command).    This  command  is   not
                                necessary  when  processing   fixed  length
                                record files because ParaSort  computes the
                                number of records  on the size of  the file
                                and the LRECL.  But for variable (VI) sized
                                records you should always specify RECS.

          RND            rnd    Used to reference a system variable that is
                                a generated  random number.  This  field is
                                an  integer (INTEGER)  field  and if  it is
                                inserted with the  INRECORD command, can be
                                used as a part of the record from then on.

          SELECT         sel    Used  to  select  records  from  the  input
                                file(s).    The  SELECT   command  operates
                                slightly  differently   depending  on   its
                                position   with   respect  to   the  GIVING
                                command(s).    If  it  precedes all  GIVING
                                commands  in  the  specifications, then  it
                                will be treated as a global select and will
                                be  "AND"ed  with   all  other  groups   of
                                selects.   If it  follows a  GIVING command
                                then the SELECT command  will only apply to
                                that  particular  output   file;  selecting
                                records for inclusion.  Records may only be
                                selected  (included)  in  one output  file.
                                The first time a record  is selected is the
                                file that it will be placed in.


                                        - 17 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


                                If multiple selects are  specified they are
                                logically combined together with ANDS.  All
                                selects must be  true for the record  to be
                                selected for processing.   All  comparisons
                                are  processed  after   all  input   record
                                reformatting is complete.

          SORT           s      Used  to  initiate a  sort process  and the
                         <      file name that will be sorted.

                                For input redirection ("<") (an option that                                                            (an option that
                                may not  be supported in  the future), sort                                may not  be supported in  the future)
                                is always  assumed.  Except for  when input
                                redirection  is used the input file will be
                                replaced  with  the  sorted version  unless
                                GIVING is specified.

          TRANSFER (X)   tfr    Used  to  specify a  number  of bytes  as a
                         tfrx   header area of  a file that should  be left
                                unsorted.   The TFR  command will  transfer
                                this header area from the input file to the
                                output file before  the sorted records  are
                                added.

                                The TFRX command will  skip over the header
                                area on the input file  and NOT transfer it
                                to the output file.

          type                  The type of a field  describes how the data
                                is represented on disk.   For instance,  is
                                it a character  ("C") or hexadecimal  ("X")
                                data, is it  an integer  ("I") or a  double
                                precision integer ("L"),  a floating  point
                                number  ("F")  or  a  double long  floating
                                point  number ("D").   Each type  is stored
                                differently on disk.










                                        - 18 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


                                Type "X" is not allowed for literals.

                                TYPE              COMMAND   LENGTH                                TYPE              COMMAND   LENGTH                                ____              _______   ______

                                CHARACTER         C         <variable>
                                HEXADECIMAL       X         <variable>
                                INTEGER           I         2
                                LONG INTEGER      L         4
                                FLOATING POINT    F         4
                                DOUBLE FLOAT      D         8

          UNSIGNED       u      Used to specify the location of an unsigned
                                integer field  to be  used as  a key.   The
                                declaration  of  this  field  in  the   "C"
                                language is UNSIGNED  INT and is two  bytes
                                in length.

          VARIABLEINPUT  vi     Used to  indicate that  the input  file has
                                variable length records in it.  A  variable
                                record ends in a carriage return (0x0D) and
                                a  line  feed (0x0A).    Any occurrence  of
                                these two  characters together  constitutes
                                the end of a record.   All bytes at the end
                                of the file  (usually a 0x1a) that  are not
                                followed by  a final  CR-LF (or  LF-CR) are
                                dropped from the output file.   If LRECL is
                                not specified, VI is assumed, otherwise the
                                input is assumed to be fixed record length.

          VARIABLEOUTPUT vo     Used  to  indicate  that  the  output  file
                                should  be  written  with  variable  length
                                records.   A variable length  record always
                                will end in a carriage  return (0x0D) and a
                                line feed (0x0A).  All trailing spaces in a
                                variable length record are trimmed before a
                                CRLF is added.

                                This command  must follow a  GIVING command
                                and  is associated  only  with that  output
                                file.  VARIABLEOUTPUT is  only assumed when
                                an input  record  size  is  not  specified.
                                Otherwise, fixed length records will always
                                be written unless this command is issued.



                                        - 19 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532












                                  Glossary of Terms                                  Glossary of Terms                                  _________________

          Term           Short               Definition          Term           Short               Definition          ____           _____               __________
                         Version                         Version                         _______


          WORKDISK       w      Used   to   indicate  a   particular  disk,
                                diskette, or ram disk that will be used for
                                the sort work files. If not  specified, the
                                current drive will be used.










































                                        - 20 -
          ParaSort v4.2x (c)'89, C.J.DeGreef  6623 Stowe Ct Lisle, IL 60532






```
{% endraw %}

## PSDBIII.DOC

{% raw %}
```
ParaSort dBase III Sort Module v1.0 Document
--------------------------------------------
The purpose of this program is to allow you to easily use ParaSort to
sort your dBase III files.  ParaSort can sort these files without this
dBase III module but the necessary internal dBase information is not
readily accessable.

This file can be listed on the screen or printed.  It is called
PSDBIII.DOC.  It must be in the same directory as the PSDBIII.EXE
program.

Program execution:

   C:> PSDBIII <dbf name> <parm output name> <path and name of PS.EXE>

      <dbf name> :  This field can contain a valid path and disk
		    specifier.	It must also contain the exact name
		    of the file with the appropriate extension as
		    required.  Usually, the extension is .DBF.

      <parm output name> :  This field specifies the name of the file
		    where this program will place the PS.EXE sort
		    specifications necessary to process the file.  This
		    file will always remain after the execution of this
		    module.  If this parameter is not specified, the
		    name of the input file with an extension of .PSP will
		    be used.  If this parameter is not specified, you can not
		    specify the next either.  You may use the * character to
		    hold this spot in the event you do not want to specify the
		    name.

      <path and name of PS.EXE> :  PSDBIII must be able to execute the
		    ParaSort sorting program.  To do this it must know
		    exactly where the .EXE file exists and what you
		    have called it.  PSDBIII assumes that the program
		    is located in the same directory as PSDBIII and is called
		    SORT.EXE.  If it does not then you must specify this
		    parameter.


General Information
-------------------

This program displays the fields of the selected dBASE III file on the
screen, one page at a time.  Up to 20 fields can be viewed on a single
page.  You can use the PgUp and PgDn keys to view the remainder of the
fields.  The commands used to control the overall operation of PSDBIII
are termed PROGRAM OPERATIONS.

The objective is to specify which fields are key fields, the sequence
of these fields, and the sorting order of each field.  These commands
are termed KEY OPERATIONS, and are controlled by the keys on the
numeric keypad.

A second objective is to modify the record layout of the incoming DBF
file.  This amounts to selecting only certain fields to be written
to the output file.  The commands to control this function are termed
FIELD OPERATIONS, and are controlled by the alpha characters on the
keyboard.

If any fields are dropped, thus changing the record, the
output file will have the same name as the input except for the extension.
The output file's extension will be .SRT  Also, the output file will not
contain the header information.  If no record modifications are made, then
the output file replaces the input file and the dBase header information
is left in tact.


Program Operations
------------------

F1    Help is displayed on the lower half of the screen.  While help
      is being viewed the PgUp, PgDn, F1, and ESC keys refer to the
      action of the help screen.  (F1 turns help off).	ESC removes
      the help information from the screen.  Press F1 or ESC to
      return to the sort processing portion of the screen.

PgUp  View the previous page of the list of fields in the dBASE file.

PgDn  View the next page of the list of fields in the dBASE file.

Home  End the processing of PSDBIII.  Save the parameter file but
      DO NOT execute the sort at this time.  ParaSort may be
      executed stand-alone using the specfile command ("@").

End   End the processing of PSDBIII.  Save the parameter file.	But
      before exiting to the system, RUN the ParaSort utility, thus
      sorting the file as specified.

ESC   End the processing of PSDBIII.  DO NOT save the parameter file.
      DO NOT run the sort.  This effectively aborts the processing.


Key Operations
--------------

Ins   Specify a new fields to be used as a key field.  PSDBIII will
      pause to ask you which field, what direction it is to be
      sorted in and what position among the other key fields it will
      hold.  At that point, the field will be moved from it's
      original position and placed in it's new KEY STATUS position
      in the front of the list.

	 dir of key can be :	    A : Ascending
				    a : Absolute ascending
				    D : Descending
				    d : Absolute descending

Del   This key allows you to remove a field from KEY STATUS.  The
      field is returned to its original place in the list.  The
      program will ask you for the key number to be deleted.

Field Operations
----------------

"D"   The letter D will cause all fields (except those marked as key
      items) to be unselected for the output sorted file.

"d"   The lowercase letter d will cause one field to be omitted from
      the output sorted file.  The program will pause to ask you which
      field you are referring to.

"K"   The letter K will cause all fields to be selected for the output
      sorted file.  This is the opposite of the letter "D" option.

"k"   The lowercase letter k will cause one field to be reinstated for
      the sorted output file.  This is the opposite of the lowercase
      letter d option.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1858

     Volume in drive A has no label
     Directory of A:\

    FILE1858 TXT      2517  12-22-89   2:24p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-01-80   4:08a
    PS421    ARC    125527   4-29-89   3:03p
            4 file(s)     128776 bytes
                           30208 bytes free
