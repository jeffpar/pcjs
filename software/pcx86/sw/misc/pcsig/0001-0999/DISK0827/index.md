---
layout: page
title: "PC-SIG Diskette Library (Disk #827)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0827/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0827"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "T-REF"

    If your programming language of choice is Turbo Pascal, you'll find that
    you won't be able to resist this one.
    
    T-REF is a lister/cross-referencing program that makes your programming
    easier and quicker.  Features include a full-screen driver with switch-
    selectable options; context-sensitive help windows to speed the learning
    process; and output directable to file or printer.  You can also reform
    words in the lister along with line numbers, lexical and block-level
    numbering; cross-reference selection by object type and usage; error
    analysis; procedural table of contents; and much, much more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES827.TXT

{% raw %}
```
Disk No:  827
Disk Title: T-Ref
PC-SIG Version: S2

Program Title: T-Ref
Author Version: 5.0
Author Registration: $20.00 - $45.00
Special Requirements: None.

If your programming language of choice is Turbo Pascal, you'll find that
you won't be able to resist this one.

T-REF is a lister/cross-referencing program that makes your programming
easier and quicker.  Features include a full-screen driver with switch-
selectable options; context-sensitive help windows to speed the learning
process; and output directable to file or printer.  You can also reform
words in the lister along with line numbers, lexical and block-level
numbering; cross-reference selection by object type and usage; error
analysis; procedural table of contents; and much, much more.
File Lisings:

INITDB   EXE      8336   8-23-89  18:49
README   1ST      2610   8-23-89  18:49
REGISTER FRM      5302   8-23-89  18:49
T-REF    DOC     86912   8-23-89  18:49
T-REF    EXE     74704   8-23-89  18:49
T-REF    HLP     58380   8-23-89  18:49
T-REFSCN EXE    107120   8-23-89  18:49

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.
```
{% endraw %}

## T-REF.DOC

{% raw %}
```









                                T-Ref 5.04S

                            (Shareware Version)


              A Source Listing and Cross Referencing Program

                       For Turbo Pascal 4.0 and 5.0


          Copyright (C) 1986, 1989 by Synergy Software Solutions

                              P. O. Box 28625
                           Papillion, NE  68046

                          CompuServe # 72617,1411












































                          Legal Rights and Issues


          Synergy   Software  Solutions  (hereafter  denoted  as  SSS) 
     retains all rights of ownership of the product called T-Ref under 
     United  States and International laws of commerce.   T-Ref  is  a 
     copyright  of  SSS.  However SSS hereby expressly authorizes  the 
     willful  distribution  of the enclosed software  to  other  indi-
     viduals  or companies.   SSS does NOT authorize,  nor waive,  any 
     other rights provided under the protection of copyright laws, and 
     reserves the right to withdraw distribution rights at any  future 
     time.  At such time, notice will be given.


     This Version:

          T-Ref  Version  5.04S is a shareware product.   It is NOT  a 
     public domain or freeware program.   Shareware means that you are 
     given  a  specific  period of time in which to test  the  product 
     before  you are required to register your  copy.   Thus,  if  you 
     decide to use T-Ref,  you are expected to REGISTER your copy with 
     SSS.   
          SSS  gives  all potential personal and/or  company/corporate 
     buyers  a full 60 day trial period in which to determine  whether 
     T-Ref is of use to them.   At such point, individuals using T-Ref 
     for  personal use are expected to register their copy  with  SSS.  
     Companies and corporations that use T-Ref beyond the 60-day trial 
     period  MUST  register their copy with SSS,  or CEASE use of  the 
     product.  

          Special discounts are available for site licensing.   Regis-
     tration fees are noted in the file REGISTER.FRM.


































                             Table of Contents

     Preface
          T-Ref Light                                       i
          Package Files                                     i
          System Requirements                               i
          Limitations                                       ii
          Before Getting Started                            ii
          Commitment                                        ii

     Chapter 1 - Introduction to T-Ref
          What T-Ref Can Do                                 1-1
          T-Ref's "Driver" Program                          1-2
               1. File I/O Area                             1-2
               2. Source Lister Area                        1-2
               3. Cross Reference Lister Area               1-3
               4. Function Keys                             1-3
               5. Changing the Parameter Settings           1-4
               6. Exiting T-Ref                             1-5
               7. Executing the "Scanner" Program           1-5
               8. T-Ref's "Scanner" Window                  1-5

     Chapter 2 - The Source Lister
          Activating the Source Lister                      2-1
          Parameter Options                                 2-1
          Reserved Words and Identifiers                    2-1
          Line Numbering                                    2-2
          Lexical Level Numbering                           2-2
          Block Level Numbering                             2-3
          Block Diagramming                                 2-3
          Auto-Commenting                                   2-3
          Active Procedure/Function                         2-4
          Header Markers                                    2-4

     Chapter 3 - The Cross Reference Lister
          Activating the Reference Lister                   3-1
          Detail Level                                      3-1
          Object Selection                                  3-2
          Scanning Within Conditional Compilation           3-2
          Procedural Table Listing                          3-2
          Code Analysis                                     3-3
          Undeclared Identifiers                            3-3
          Interpreting the Reference Listing                3-3
          Hardwired Identifiers                             3-6

     Chapter 4 - Common Features
          Handling Include Files                            4-1
          Defining Listing Headers                          4-1
          Page Numbering                                    4-2

     Chapter 5 - I/O Control Features
          Screen Control                                    5-1
          Printer Control                                   5-2
          File Control                                      5-3
     Chapter 6 - T-Ref Quick Start











          Backing up T-Ref                                  6-1
          Building the Database File                        6-1
          Executing T-Ref                                   6-1
          Setting the Default Parameters                    6-1
          Saving the New Settings                           6-3

     Chapter 7 - Commercial Version of T-Ref
          The T-Ref Shell                                   7-1
          The Scanner Program                               7-2
          The Source Lister                                 7-2
          The Cross Referencer                              7-2























































                                  PREFACE

          Welcome to the shareware version of THE BEST source  listing 
     and cross referencing program for Turbo Pascal 4.0 and 5.0.   But 
     don't  take my word for it.   You'll see for yourself that it  is 
     better  than any other shareware program of its type or EVEN  any 
     commercial product!   And it is offered at a shareware price!  It 
     is  flexible through its precise and  accurate  information,  and 
     best of all,  it's easy to use.
          Details  about  what T-Ref can do are part  of  the  program 
     through  context-sensitive  help windows,  so this document  file 
     will  be fairly short.   T-Ref will provide you with  details  on 
     nearly every option available.


     T-Ref Light:

          With  the release of this shareware version,  I actually now 
     have  two  different versions of T-Ref.   The  other  version,  a 
     commercial  ("industrial  grade")  version,  has  about  a  dozen 
     features this version does NOT have.  This does not mean that the 
     shareware  version  suffers  some  form  of  malnutrition  or   a 
     deformity   that  will  restrict  your  abilities  to  print  and 
     reference  your  source files.   However,  some of  the  advanced 
     features   available   on  the  commercial  version   have   been 
     "inhibited".   Chapter  7 details the features offered only  with 
     the commercial version.
          Also,  the documentation released with this version is meant 
     to  be  short (due to limited space  for  distribution  purposes) 
     while  still  giving as much details about the program as  neces-
     sary.   A much more comprehensive and complete manual set (nearly 
     100  pages of material) comes with the $25 and  $45  registration 
     levels.   This  manual  documents warnings and  errors,  provides 
     insights to how to use T-Ref more effectively, and describes some 
     features not documented in this abridged copy.


     Package Files:

          The files that come with this shareware version of T-Ref are

          T-REF.EXE      The main driver program
          T-REFSCN.EXE   The scanner sub-program (called by T-REF)
          T-REF.HLP      On-Line Context-Sensitive Help File
          INITDB.EXE     This program builds the database program used
                         by T-Ref
          T-REF.DOC      This document file
          REGISTER.FRM   Registration forms for registering T-Ref


     System Requirements:

          T-Ref requires an IBM-PC or compatible system with a minimum 
     of 256K of memory and either MS-DOS or PC-DOS 2.0 or greater.



                                     i








     Limitations:

          There are a few T-Ref limitations you should first be  aware 
     of.  These are:

          1)  The  maximum length of an identifier is  20  characters.  
     Longer identifiers will be cut to 20 characters.
          2)   Diagram  blocking is limited to the first  eight  block 
     levels of the procedure's code.


     Before Getting Started:

          Before  anything else,  I suggest you make a backup copy  of 
     all  the  files  in this package before using  them.   Store  the 
     backup copy in a safe place.
          Also, before running T-REF, you must run the program INITDB, 
     which will create the database file needed for T-REF.


     Commitment:

          I have a strong commitment to the registered users of T-Ref.  
     This  package  has been marketed as shareware  and/or  commercial 
     software  for  over  two years now.   I have made  over  a  dozen 
     enhancements and corrections to it since its original version 1.0 
     release,  some of which were made as suggestions from  registered 
     users.
          I  am also committed to continuing the development of  T-Ref 
     further.   I already have four more major enhancements slated for 
     T-Ref  over  the  next  six months (by end  of  the  year  1989).  
     Included  in  this  is  a  formatter,  which  will  automatically 
     reformat code to the styles selected by the user.
          Finally,  if you experience any difficulties with running T-
     Ref,  please let me know.  I have made every effort to provide as 
     bug-free  of  a  program as possible,  but know it is  still  not 
     entirely  perfected.   I  can  only make the  product  better  by 
     getting good feedback from its users, registered or not.
          Also,  if you have any ideas of how to make T-Ref better,  I 
     am always open to suggestions.   Constructive criticism is always 
     welcome!

     Sincerely,


     Jim D. Hart
     President, Synergy Software Solutions










                                     ii








                     Chapter 1 - Introduction to T-Ref

     What T-Ref Can Do:

          T-Ref  is  actually  two  programs combined  into  a  single 
     package.  First, it is a Source Lister for Borland's Turbo Pascal 
     compiler (version 5.0).   Of course,  T-Ref's sophistication  for 
     listing  the source files is far beyond just printing the  source 
     code.   For  example,  along  with the source  listing,  you  can 
     specify  a line- by-line print-out of the lexical levels and  the 
     block levels,  the active procedure or function of that line, and 
     the  line  numbers  along with the listing.   Chapter 2  of  this 
     document  describes in detail how to create a source  listing  to 
     match your specific needs.  
          The second part of T-Ref is the Cross Reference List,  which 
     was specifically designed to cross reference programs written for 
     Borland's Turbo Pascal.   It will give a complete cross reference 
     of  all  identifiers  declared within a  program,  or  a  partial 
     listing  (on  requested object types).   The listing  gives  each 
     identifier's name, its type, the code line declared on, all lines 
     referencing  the names,  and the scope (the procedure or function 
     name  and  level in which the identifier  was  declared  within).  
     Chapter  3 describes how to print and interpret a cross reference 
     listing.
          These two parts were designed to work in tandom: with just a 
     few  key strokes,  you can get either a source listing,  a  cross 
     reference listing,  or both.  Output can be routed to a specified 
     output file or to the system's list device (printer).

          T-Ref  is  a syntax-scanning program,  or simply  a  scanner 
     (sometimes called a parser).   The scanner performs  associations 
     between a program's source code and the language's grammar.  This 
     is  to  say  that T-Ref understands the  language  structure  (or 
     syntax)  of Turbo Pascal.   It "scans" the input file for identi-
     fiers (first for their declarations and then for their uses)  and 
     stores the references made to them.  However, T-Ref has one limi-
     tation  in dealing with an input source file:  it is not designed 
     to  recover from syntax errors found in the program and  continue 
     "scanning" the source.

          T-Ref  can successfully scan a complete Turbo Pascal program 
     file,  a program "unit" file,  or a declaration part of a program 
     (usually  kept in an "Include file").  The declaration part of  a 
     program  may include a sequence of one or more of the  following: 
     label  declarations,  constant declarations,  type  declarations, 
     variable declarations,  and procedure and function  declarations.  
     (Like  Turbo  Pascal,  there is no restrictions on order or  fre-
     quency  of each type of declaration.)  Therefore,  it is possible 
     to  scan  a set of library procedures and functions placed  in  a 
     separate file (accessed from the main program through the include 
     file  compiler  directive)  without having to  scan  any  of  the 
     possibly many main programs that may use that library.

          T-Ref  WILL NOT scan a sequence of code instructions  alone.  
     If  you  wish  to  retrieve  a cross reference  of  only  a  code 


                                    1-1








     sequence,  you can enclose the code in a "BEGIN" ... "END." block 
     and T-Ref will assume the code is a program.


     T-Ref's "Driver" Program:

          Almost all interactions you will make with the program  will 
     be  done  through the "driver" program (or shell)  which  appears 
     when  T-Ref  begins execution.  The main screen is  divided  into 
     three  major areas:  the file I/O parameters,  the source  lister 
     parameters, and the cross reference lister parameters.

     File I/O Area

          The  File  I/O  parameters are used to  specify  the  common 
     directory and subdirectories names ("Active Directory"), the name 
     of the file where the program to be parsed resides ("Active Input 
     File"),  and  the  name  of the output file where  the  resulting 
     listing  is  to  be sent ("Active  Output  File").   The  "Active 
     Directory" parameter,  when used,  refers to the directory common 
     to  the  input  file,  the output file,  and  all  include  files 
     referenced within the input file (the program).  The exception to 
     this case is when the input or output file parameters begin  with 
     the  "\" symbol or a drive symbol "d:".   This is interpreted  to 
     mean "The specified file name includes the directory and possible 
     subdirectories  for  the file's location."  
          The Input File and Output File may also reference  subdirec-
     tories within the directory (and subdirectories) specified by the 
     Directory parameter.
          If  a  file name extension (file type) is not given  in  the 
     input file parameter or the output file field,  '.PAS' and '.PRT'
     are respectively assumed.   
          T-Ref  supports  the capability to change the  default  file 
     extension  names.   This  is  covered in Chapter  5  under  "File 
     Control".
          To  send the output to the printer,  just blank the  'Active 
     Output File' parameter.  To do this, position the block cursor at 
     that  parameter and strike the SPACE key.   The parameter will be 
     replaced with

                    "--->> Printer"

     to signify the output is being routed to the printer.
          Finally,  you can use the asterisk symbol (*) in the  Active 
     Output  File parameter to tell T-Ref to give the output file name 
     the  same  name as the input file  name.   

     Source Lister Area

          The  source  lister  area of the driver screen  is  used  to 
     select  the  options desired for a listing of the  Pascal  source 
     code.   Chapter  2 of this manual is devoted to  describing  this 
     area in detail.




                                    1-2








     Cross Reference Lister Area

          The cross reference lister area of the driver screen is used 
     to select the options for the cross reference listing.  Chapter 3 
     of this manual is devoted to describing this area in detail.


     Function Keys:

          All  ten of the IBM PC's function keys are used by T-Ref  to 
     perform  specific functions within the program.   These functions 
     can be divided into five areas:  help functions, header creation, 
     I/O  control,  saving  and  retrieving  parameter  settings,  and 
     executing the "scanner" and "SCRIPT" programs.   In this section, 
     we  discuss  the first four;  the last is covered later  in  this 
     chapter.

     Pop-Up Help Functions

          There  are  three  keys that  activate  the  program's  help 
     windows:   the  F1  provides  a function  key  synopsis,  the  F2
     function  key  provides  text descriptions of each  of  the  main 
     screen  parameters,  and the F7 key assists you in selecting  the 
     source file to be cross referenced.
          If  you ever wish to know what any of the function keys  do, 
     the F1 key will provide a list of these functions.
          The  F2  key  is  the help key for  any  of  the  parameters 
     displayed  on  the main driver screen,  as well as for  the  File 
     Control,  Printer Control,  and Screen Control Window parameters.  
     Through the use of 'Context Sensitive' help functions,  when  the 
     F2 key is struck, the help window that appears on the screen will 
     provide   information  specifically  related  to  the   parameter 
     selected  by  the  block cursor.   This simplifies  the  learning 
     process  and requires less documentation support while using  the 
     program.
          The  F7  key can be a great help in searching  out  specific 
     file names.  When you strike the F7 key, a special window appears 
     and asks you to type in the name of the file to search.   The MS-
     DOS  wildcard  characters  "*" and "?"  are  allowed  here.   The 
     default  file  name extension is taken from  the  name  extension 
     specified  in  the 'File Control Window' (see  Chapter  5,  "File 
     Control" for more details).
          Once you have typed in the file name sequence,  hit  RETURN.  
     You  can then select the desired file with the arrow keys  (Left, 
     Right,  Up,  and Down) or Home or End keys and,  by again hitting 
     the  RETURN key,  T-Ref returns to the main screen  automatically 
     loading the selected file into the "Active Input File" parameter.

     Creating Headers

          The  F3  and F4 function keys are used to  create  the  page 
     headers  for  the  source  listing and  cross  reference  listing 
     respectively.   Chapter  4  covers in detail the  procedures  for 
     creating and activating headers for the listings.



                                    1-3








     I/O Control

          As stated before,  T-Ref was designed to be flexible in  its 
     control of many hardware I/O features of your system: the display 
     system,  the disk file system,  and the printer device.   The F5, 
     F6,  and F8 function keys provide a way to set up T-Ref to  match 
     your  personal tastes,  as well as inform T-Ref of your  system's 
     features.   Chapter 5 of this manual is devoted to describing how 
     to set up T-Ref to respond appropriately to your system.

     Saving/Retrieving Parameter Settings

          The  F9 and F10 function keys are used to retrieve and  save 
     all  of  the parameters (as they are set) from (or to)  the  file 
     called 'T-REF.DB'.   This information includes all of the  driver 
     screen  fields,  the source and cross reference headers,  and the 
     special  settings for I/O control.   
          This  version  allows  you to save only up  to  2  different 
     combinations  of parameter settings.   Each combination will have 
     an associated database identifier (up to eight characters  long).  
     Whenever you wish to load or save the parameter settings,  you do 
     so with the database identifier.
          When  you  press either the F9 key (to retrieve a  different 
     combination  of parameter settings) or the F10 key (to  save  the 
     present  parameter  settings),  two  windows will appear  on  the 
     screen.   The  window on the right will display the  various  key 
     options available and a short description of each.  The window on 
     the  left will list the database identifiers of all  combinations 
     available  to  either  read  from or write to  depending  on  the 
     function key struck.
          The  save  (or  F10) function allows you to create  one  new 
     entry.    Simply move the block cursor to the position below  the 
     SYSTEM identifier.   A ">" symbol will then appear signifying the 
     need  for  a  name.   Type in the identifier you wish to  use  in 
     association with the parameter settings and hit RETURN.   At this 
     point,  you have only entered the name.   Strike RETURN again and 
     the combination will be saved.


     Changing the Parameter Settings:

          T-Ref's  uniquely  designed  driver program  simplifies  the 
     procedures  in  how to use it primarily because of  the  "switch-
     selectable"  options  it  establishs for nearly  every  parameter 
     option the program supports.   By switch-selectable, we mean that 
     you  select the desired option for each parameter by placing  the 
     block cursor over the parameter and striking the SPACE bar.  This 
     action causes the driver to "switch" from option to option as the 
     SPACE  bar  is struck.   When the desired option appears  in  the 
     block  cursor,  you  are  through.   This  eliminates  having  to 
     remember  complex  or symbolic keystroke sequences  to  bring  up 
     desired options.   By simply knowing how to move the block cursor 
     about  the screen (with the arrow keys,  primarily) and that  the 
     SPACE  bar  is used to set the parameters,  you have learned  the 
     most complex part of the program!


                                    1-4









     Exiting T-Ref:

          To exit the driver shell program, simply strike the ESC key.  
     A window will appear asking if you are sure you wish to quit  the 
     program.  If you do wish to quit, respond with a "Y".
          T-Ref  also tracks on updates to any of the parameters since 
     the  last time the parameter settings were saved to the  database 
     file.   If  you have updated any of them,  it will warn you  that 
     changes  have  occurred,  and will ask if you wish  to  save  the 
     present parameter settings.


     Executing the "Scanner" Program:

          The key combination ALT-F9 together will cause the  "Driver" 
     program  to  load  the "Scanner" program into  memory  and  begin 
     scanning  the file specified in the "Active Input File" parameter 
     at the top of the driver screen.   


     The Scanner Window:

          The scanner window is divided into four areas:  the  source 
     files area,  the XREF files area, the messages area, and the free 
     memory area.  These are described below.

     Source Files Area

          The  top  third  of the window is the Source File  area  and 
     contains  three fields:  the input file name,  the  include  file 
     name,  and the output file name.  These fields are updated by the 
     scanner  as needed.   The numbers that appear to the left of  the 
     first  two as the scanning process occurs are the line numbers of 
     the source code as they are read from the input files.

     XREF Files Area

          The middle of the window is the XREF Files  area.   However, 
     because  the  shareware  version of T-Ref does not  support  XREF 
     files,  this  area  will always be inactive.   See Chapter 7  for 
     details on what XREF files are.

     Message Area

          The message area is used to provide status information about 
     the progress of the scanning.   If an error is encountered in the 
     syntax  of the input file,  the message describing the  error  is 
     printed  within  this area.   This area is also used  to  display 
     final  results  of  the output (number of  lines  read/number  of 
     identifiers  cross referenced),  as well as to receive  responses 
     from the user about T-Ref generated questions.  





                                   1-5 








     Memory Free Display

          At  the  bottom of the scanner window will appear a  "Memory 
     Free"  message  that  gets  updated  regularly  as  the  scanning 
     progresses.    This  signifies  the  amount  of  dynamic   memory 
     remaining (in bytes) T-Ref has available for use.   If this value 
     should  drop  below 1000 bytes,  the scanner will abort the  scan 
     process as it has no more memory to save information.   

















































                                    1-6








                       Chapter 2 - The Source Lister


     Activating the Source Lister:

          The  Source Listing program is activated by positioning  the 
     block  cursor over the 'Source Listing' parameter,  and  striking 
     the  SPACE bar until either the word "Continuous" or "Procedural" 
     appears within the cursor.   To deactivate the source lister, hit 
     the SPACE bar until the word "OFF" appears.   Where  "Continuous" 
     sends  the  source listing in a continuous  stream,  "Procedural" 
     performs  page  breaks  at the conclusion of  each  procedure  or 
     function.


     Parameter Options:

          The  fifteen parameters that appear on the screen below  the 
     'Source  Listing' parameter relate to specific information to  be 
     included  or not included in the source listing.   They  are  all 
     updated in the same manner as the 'Source Listing' parameter:  by 
     placing  the  block  cursor over the parameter and  striking  the 
     SPACE  bar  until  the desired value appears  within  the  cursor 
     block.   


     Reserved Words and Identifiers:

          The 'Reserved Words' parameters are used to tell the program 
     how the reserved words are to be formatted to the output.  In the 
     first field,  you specify one of four different formats:  "UPPER" 
     capitalizes  all letters in the reserve word,  "LOWER" prints  in 
     lower-case lettering,  "FORML" follows formal naming conventions, 
     and "AS IS" prints the letters unchanged.  Figure 2-1 below gives 
     examples of different reserved words and how the output would  be 
     formatted;  the  first column is how the reserved words would  be 
     hypothetically read from the input source file.
          In the second field, you specify whether special emphasizing 
     is  to  be  used  when sending the source listing  to  a  printer 
     device.   "ULine"  causes  all reserve words  to  be  underlined; 
     "DStrike"  embolds  the  reserve  words by  double  striking  the 
     characters;  "Dbl&ULn"  will force the printer to do both  double 
     strike and underline reserve words;  and finally "Off" turns  off 
     the emphasizing function.
          The  embolding  option is only available when the output  is 
     directed to the printer.  

          The  'Identifiers'  parameter's function is similar  to  the 
     'Reserved  Words'  parameter's described above:  it  formats  the 
     style  of lettering for all identifiers to that  requested.   The 
     same  four formatting styles listed above are available for  this 
     parameter.   However,  here  we  must describe a feature  of  the 
     "FORML"  format  not mentioned above.   Since  the  Turbo  Pascal 
     compiler  allows  the use of the underline symbol (_)  within  an 
     identifier  (to make the source code more readable),  the "FORML" 


                                    2-1









     style  makes  use of this:  not only is the first letter  in  the 
     identifier capitalized,  but each letter following the  underline 
     symbol  is capitalized as well.   Therefore,  'hot_item'  becomes 
     'Hot_Item',     'not_so_fast'    becomes    'Not_So_Fast',    and 
     'ab_ra_ca_da_bra' becomes 'Ab_Ra_Ca_Da_Bra'.


     Line Numbering:

          The 'Line Numbering" parameter provides several various ways 
     to  number the source code,  printed to the left of each line  of 
     output: "Extended", "Relative", and "Procedural".
          "Extended"   line  numbering  presents  a  one-column   line 
     counter,  where each line of source increments the counter.  This 
     is the simplist style of numbering, and does not take into effect 
     whether  the  source code is coming from the main input  file  or 
     from  an Include file.   
          "Relative" line numbering is a two-column line counter.  The 
     first  column  is the line number of the "main" input  file;  the 
     second column is the Include file line number.  That is, the line 
     numbering is relative to the file the source is coming from.  The 
     line  number of the main input file is incremented for each  line 
     read from the 'Active Input File' as specified at the top of  the 
     main  screen.   When an include file compiler directive,  such as 
     '{$i this.prc}', is scanned from the main input file, the program 
     will  begin  printing  the  include  file  source  code  starting 
     immediately  after  printing the line in which the  include  file 
     compiler  directive is on.   At this point (until the end of  the 
     include file is reached),  the line number of the main input file 
     will remain the same and the line number of the include file will 
     begin incrementing in the second column (starting from  1).   The 
     line  number of the include file is not printed when the  program 
     is reading from the main input file.
          "Procedural"  line  numbering  is  also  a  two-column  line 
     counter.   The  first  column  is  the  same  as  the  "Extended" 
     numbering  (see above);  and the second column is the line number 
     within the active procedure.  As a new procedure/function decla-
     ration begins, the second line counter resets and begins counting 
     from 1 again.   However,  when the procedure/function declaration 
     is  complete,  the  line  numbering  reverts  back  to  the  line 
     numbering counter of the encompassing procedure/function.


     Lexical Level Numbering:

          The 'Lexical Levels' parameter,  when activated ("ON"), will 
     print  for each source line a value representing the lexical,  or 
     procedural,  depth  of the program.   Therefore,  as the  program 
     scans the beginning of a procedure or function, the lexical level 
     of the program is incremented;  the level is decremented when the 
     procedure or function is exited.  





                                    2-2








     Block Level Numbering:

          The 'Block Levels' parameter,  when activated  ("ON"),  will 
     print  a value representing the structured statement depth within 
     the procedure or function being scanned.  The value is printed on 
     each line of the output.   Whenever a structured statement (e.g., 
     the IF,  the FOR,  the REPEAT,  the CASE, the WITH, the WHILE, or 
     the  compound BEGIN-END statement) is entered during the scan  of 
     the source code, the block depth of the procedure is incremented, 
     and is decremented upon exiting the structured statement.  


     Block Diagramming:

          In addition to the lexical and block level numbering for the 
     source lister,  this version provides the capabilities to diagram 
     the blocking outlines of the source code.   Similar to the  block 
     numbering,  this is a graphical representation of the code blocks 
     rather than a numeric one.
          Up to eight levels of blocks can be shown for each procedure 
     or function.   If the code extends beyond eight levels,  only the 
     first eight are blocked.
          Only  specific  statements activate a diagram  block  level.  
     These include the compound statement (a BEGIN ..  END block), the 
     IF statements, the CASE statement, and the REPEAT .. UNTIL block.  
     The  WITH,  the  WHILE,  and the FOR statements are  designed  to 
     assume  there  is only a single substatement.   If more than  one 
     statement  is  to be acted upon,  a compound  statement  must  be 
     given, thereby activating a diagram block.


     Auto-Commenting:

          One  of  T-Ref's  unique  features  is  its  auto-commenting 
     capability.   Pascal  has been recognized in the recent past  for 
     its  ineffective  ability to mark its END reserved word with  the 
     statement  that  initiated the block the  END  goes  with.   More 
     recent languages such as Ada and Modula-2 correct this problem to 
     some  degree  by requiring that each END be supplimented with  an 
     additional  reserved  word (or identifier)  matching  that  which 
     beget  the  compound  structure.   There is  often  nothing  more 
     unnerving  to  a programmer reading source code to  get  confused 
     over which END symbol goes with which structured statement.
          T-Ref  can  help  to some degree  with  its  auto-commenting 
     feature.   As  T-Ref  produces the source listing,  if the  auto-
     commenter is "On", it will automatically generate a comment after 
     each  END symbol it encounters to signify the structure  type  it 
     goes with.
          The comments always begin with the symbols "{#" and end with 
     the  symbols "#},  and recognizes these symbol sequences as T-Ref 
     generated comments when scanned from the input source file.
          Note: When the auto-commenter is activated, T-Ref will auto-
     matically  eliminate all commented code placed between  the  "{#" 
     and "#}" symbols (while generating new comments).   Therefore, do 
     not use these symbols to start and end your comment blocks.


                                    2-3










     Active Procedure/Function Fields:

          The  first 'Active Procedures' parameter field,  when  acti-
     vated  ("ON"),  will print the name of the procedure or  function 
     (presently being scanned) to the right of the output source code.  
     The  name  is  enclosed  in brackets (between  '{'  and  '}')  to 
     increase  the documentation effects of the source and to make  it 
     possible to recompile the output source.
          The second parameter field is the column width field,  which 
     sets  the number of columns the program will read from the source 
     (input)  file.   The range may be from 20 columns to 126  columns 
     (which  is  the limitation set by the Turbo  editor).   When  the 
     first field is set to "Off", this value is completely ignored and 
     the  entire source line (up to 126 columns) is read and  scanned.  
     However,  when  the first field is set to "On",  any text on  the 
     input source code lines beyond the specified column setting  will 
     be  ignored by the scanner and will not be printed.   Figure  2-5 
     below demonstrates this output.

          Note:  The  column  width setting also defines  the  maximum 
     column  in  the cross reference listing  format.   That  is,  the 
     number  of line references printed per line is determined by this 
     value.


     Header Markers:

          Header markers are score marker lines printed at the top and 
     the bottom of each page of source code and are used to  determine 
     column positioning of source code.   

























                                    2-4








                  Chapter 3 - The Cross Reference Lister



     Activating the Reference Lister:

          The  Cross Reference Lister is activated by positioning  the 
     block  cursor over the 'Cross Reference' parameter  and  striking 
     the  SPACE  bar until either the word "Comprehensive" or  "Proce-
     dural"  appears within the cursor  block.   When  activated,  the 
     lister  gives a cross reference listing of the specified types of 
     identifiers and/or additional details such as a procedural  table 
     of  contents  and  analysis on the code  scanned.   Selection  of 
     identifiers is determined by object type as described below.
          To deactivate the cross reference lister,  hit the SPACE bar 
     until the word "Off" appears.   Note that the same procedure here 
     is  used to activate the cross reference lister as in the  source 
     lister described in Chapter 2 above.  Like the source lister, the 
     parameters  that appear on the screen directly below  the  'Cross 
     Reference' parameter relate to what information is to be included 
     in  the  cross reference listing,  as well as setting  a  header, 
     paging,  and  including  Include  Files.   These  parameters  are 
     updated  in  the  same manner as those parameters in  the  source 
     lister area:  by placing the block cursor over the parameter  and 
     striking the SPACE bar until the desired parameter appears within 
     the cursor.
          With  the  "Comprehensive"  option,  T-Ref waits  until  the 
     entire  source  code has been scanned before printing  the  cross 
     reference listing;  that is, it is comprehensive.  However, there 
     are times when in scanning a very large unit, there is not enough 
     computer  memory available to hold all related cross  referencing 
     information until the entire unit or program has been scanned.
          The  "Procedural"  option has the advantage  of  having  the 
     cross  referencing data grouped into packages consistent with the 
     source.   Identifier reference listings can be, therefore, easier 
     to  follow.   With  this option,  a cross  reference  listing  is 
     printed at the exit of every procedure or function,  and includes 
     only those identifiers declared local to that procedure.  Since a 
     procedure's   local  identifiers  have  scopes  only  while   the 
     procedure declaring it is "active",  all references will occur by 
     the closure of the procedure's declaration.  Once the identifiers 
     and  their references have been printed,  memory can be  released 
     for  later  use  by other declarations further on in  the  source 
     listing.


     Detail Level:

          With  T-Ref  4.0,  it  is possible to select  one  of  three 
     different levels of detail for the cross reference listing.   For 
     the numbering scheme, "1" is the most abridged listing, providing 
     only  the bare minimum of information about the  identifiers  and 
     listing  their references;  while "3" is the most  comprehensive.  
     See the section below on what is listed for each level.



                                    3-1








     Object Selection:

          The second through sixth parameters below the "Cross  Refer-
     encer"  header  are the five object categories T-Ref  recognizes. 
     (See  Appendix A,  "Definitions" for descriptions of  the  object 
     types).   Each  of these object categories have two  fields:  the 
     scope  and usage fields.   
          The scope field is used to determine the selection of ident-
     ifiers  based  upon whether they are declared within the  scanned 
     program  or unit ("Local").   The "All" setting acts just as  the 
     "Local"  setting  does.   The  "None" setting skips  listing  any 
     identifier of that object category.
          In  addition  to these options,  local  identifiers  may  be 
     further broken into local public and local private.  The "LclPbl" 
     selects  only the identifiers of that type that are local public; 
     the "LclPvt" selects only those that are local private.
          The  commercial  version of T-Ref  supports  the  additional 
     option "Remote", which selects only those identifiers declared in 
     other  units  that  the scanned unit or program  USES  (imports).  
     Since  this version does not support XREF files,  this option  is 
     not included.
          The  usage parameter is used to determine the  selection  of 
     identifiers  based upon whether or not they have been  referenced 
     within  the  program  (other than in  their  declarations).   The 
     "Used"  setting will select for listing only identifiers of  that 
     object  type  that were actually used within  the  program.   The 
     "Unused"  setting selects only those identifiers  not  referenced 
     anywhere within its scope.  The "All" setting selects identifiers 
     declared of that object type irregardless of their use.


     Scan Within Conditional Compilation:

          This  option is inactive for the shareware  version.   T-Ref 
     will always scan in conditional code segments.


     Procedural Table Listing:

          T-Ref,  in addition to the identifier listing,  provides the 
     option  to print a procedural table of contents of all the proce-
     dures  and  functions declared within the  scanning,  along  with 
     their  declaration page and line numbers as well as  the  lexical 
     level  number of the procedure.   This portion of the listing  is 
     excellent  for getting a general layout of a program,  unit ,  or 
     library.  The names are indented according to the lexical (proce-
     dural)  level,   and  external  procedures/functions  are  noted.  
     Finally,  each procedure/function in the listing will have a file 
     number reference.   In a separate listing that follows the proce-
     dural mapping, a list of source file names, dates, and times used 
     in the scanning is printed.   File dates and times are  retrieved 
     from  the DOS file date/time tag of the file's last update.   The 
     file  number reference matches that in the procedural  map,  thus 
     correlating  each  procedure to the source file  it  is  declared 
     within.


                                    3-2








          The  file  to  procedure association will  help  to  quickly 
     locate  the  include  files procedures are  declared  within.  In 
     addition,  the dates can be used to determine the latest date  of 
     modification to the source code scanned by T-Ref.


     Code Analysis:

          Finally,  the  cross reference lister can print an  analysis 
     summation  about  the source scanned and the identifiers  listed.  
     This analysis includes five areas: a structured statements count, 
     a  commented percentages count,  the total number of  identifiers 
     cross referenced,  a break-out of the identifier count by  object 
     type and data type, and an identifier usage count. 
          The  structured  statements count lists the number  of  each 
     structured  statement  types encountered during the  scan,  which 
     includes IF,  FOR, CASE, WHILE, REPEAT, and GOTO statements.  The 
     commented  percentages  gives a text ratio of commented  text  to 
     code text.  In this count, blank characters are not counted.  The 
     identifier  usage  count lists the number of  identifiers  LISTED 
     based on the number of times they were referenced.
          Note:  Untyped formal parameter, label, procedure, unit, and 
     program  names  have  no  data  type  associated  with  them  and 
     therefore will not be included in the data type totals. 


     Undeclared Identifiers:

          This  parameter  allows  you to control whether  or  not  to 
     include  identifiers  in the listing that  were  never  declared.  
     Such  identifiers occur when scanning an Include File that refer-
     ences identifiers within its scope,  but whose declarations occur 
     outside  the source's domain;  or when scanning a unit that  uses 
     other  units  and their identifiers,  but whose XREF  files  were 
     never loaded.


     Interpreting the Reference listing:


          This  section  provides a detailed look  at  the  identifier 
     reference  listing,  and is designed to familiarize you with  the 
     formats and symbols used.

     Formats

          As described in the section on "Detail Levels" above,  there 
     are five levels of detail in the cross reference listing.  Detail 
     level  "1"  is the lowest and provides only  minimal  information 
     about  the identifiers,  focusing primarily on providing a way to 
     distinguish  between identifiers with the same name  and  listing 
     where they are used.   As the formats go toward "3", more details 
     are  provided.   The  following  are the formats of each  of  the 
     detail levels.



                                    3-3








          The  identifier listing header is the first lines  for  each 
     identifier in the listing.

     Level 1:

          Name                               LLLL:SSSS . . .

     Level 2:

          Name  Object_Type   Data_Type  Declared on line LLLL:SSSS  
                         [Unit = Unit_Name]

     Level 3:
          Name  Object_Type   Data_Type  Declared on line LLLL:SSSS 
                         within Proc_Name (Lvl) [Unit = Unit_Name]

     where  Name  is the name of the identifier (up to  20  characters 
     long),  Object_Type  is  its object type,  Data_Type is its  data 
     type,  LLLL:SSSS  is  the line number (and possibly  the  subline 
     number) of the declaration,  Proc_Name is the procedure or  func-
     tion  name that the identifier is declared within (up to 20 char-
     acters long),  Lvl is the lexical level of the procedure or func-
     tion  within the scanned code.   (The "System" level  is  lexical 
     level zero, the program level is 1, and so on.)  Unit_Name is the 
     declaration unit's name (if different from the one being scanned) 
     and File_Name is the name of the file the declaration occurred in 
     (if different from the main source file).

          At levels 2 and 3,  after the identifier's header, the lines 
     that follow are the references to the identifier.  The format is:

     LLLL:SSSS    LLLL:SSSS    LLLL:SSSS    .....


          If  an  identifier is listed in the cross reference  listing 
     but has no references,  the following is printed rather than  the 
     line references:

          <<< Identifier not referenced. >>>

          Each  reference line number may be preceeded by one of  four 
     symbols,  which signify that the identifier was set to a specific 
     value.  These are the "*", "&", "L", and "C".

          "*"  means the identifier was explicitly set to a  value  on 
     that  line of code.
          "&"  means the same as "*",  except that the identifier  was 
     set at a lexical (procedural) level BELOW the level of its decla-
     ration.   This  second  symbol could mean that you are setting  a 
     variable within a procedure that is not supposed to change it.  
          "L"  is used to signify that the variable is set as  a  Loop 
     counter.
          "C"  signifies where a variable is set through a call  to  a 
     procedure  or  function and the variable matches the  procedure's 
     parameter sequence as a "Variable Formal Parameter".  


                                    3-4








          NOTE:  T-Ref  MUST know the declaration of the procedure  or 
     function  being  called with the variable's formal  reference  to 
     know  whether it is being set (by matching the reference  with  a 
     variable formal parameter).  If the procedure's declaration is in 
     another  unit,  for example,  T-Ref has no way of knowing whether 
     the reference is by name or value,  and thus no symbol will  show 
     up.  T-Ref, in such cases, will always assume the reference is by 
     value.

          'Explicitly set' means that the variable or function was set 
     with a "Variable := <<Expression>>" statement,  and does not take 
     into  consideration  setting the identifier through  the  use  of 
     procedure or function parameter passing.

          If  the  identifier was not declared within the source  code 
     (as is the case when cross referencing a portion of a program  or 
     a  library  or  procedures that reference  identifiers  in  other 
     portions  of the program),  then the reference number line rather 
     reads:

           "Not declared within the scanned source."

     Symbols

          The object type field will be one of the following:

          "Undefnd"-          Undefined (Not declared within the
                              parsed code)
          "Label" -           Labels 
          "Constnt" -         Constants
          "ScalVal" -         Scalar Values 
          "Typed C" -         Typed Constants
          "Type" -            Types
          "Var" -                Variables
          "FrmParm" -         Formal Parameters (considered a Variable)
          "VarParm" -         Variable Formal Parameters (considered
                              a Variable)
          "Rec Fld" -         Record Fields
          "Rec Tag" -         Record Fields declared as Record Tags
          "Program" -         Program name
          "Procedr" -         Procedures
          "Functn" -          Functions


          The data type field will be one of the following:

          "Undefnd" -         Undefined
          "Integer" -         Integer scalars
          "Sht Int" -         Short Integer scalars
          "Lng Int" -         Long Integer scalars
          "Byte" -            Byte scalars
          "Word" -            Word scalars
          "Real" -            Real scalars
          "Single" -          Single Precision Real
          "Double" -          Double Precision Real


                                    3-5








          "Extnded" -         Extended Real
          "Comp" -            Comp Real 
          "Boolean" -         Boolean scalars
          "String" -          String scalars
          "Char" -            Character scalars
          "Scalar" -          User Defined Scalars
          "Pointer" -         Pointer Type
          "Range" -           Subranges
          "Record" -          Structured Type Records
          "Proced" -          Procedural Type

     and  may  be  preceeded by some combination of the  following  to 
     signify a structured data type:

          "Absolute Addr" -   The Variable is located at a specific 
                              address in memory 
          "Pointer to" -      The Type or Variable is of type Pointer
          "File of" -         The Type or Variable is of type File
          "Set of" -          The Constant, Type, or Variable 
                              is of type Set

          For  example,  "Absolute Addr Set of Scalar" means the  data 
     type  of  the  identifier is a set of type scalar  and  is  at  a 
     specific address in memory.


     "Hardwired" Identifiers:

          Although  the  standard  TYPE identifiers such  as  BOOLEAN, 
     INTEGER,  and  REAL  are  part  of  the  SYSTEM.TPU  unit,  T-Ref 
     considers  these  identifiers "wired" into the  compiler  itself.  
     Such  identifiers are part of the language's  foundation.   Thus, 
     you will never get a "listing" with these identifiers in them.
























                                    3-6








                        Chapter 4 - Common Features

          This  chapter  highlights the features T-Ref possesses  that 
     were not discussed in the previous two chapters but whose  param-
     eters  option are visible on the main screen.  These features are 
     common to both the source lister and the cross reference  lister.


     Handling Include Files:

          T-Ref  offers  a unique and flexible way of  handling  Turbo 
     Pascal  include files when these compiler directives are  encoun-
     tered  in the input source code.   The 'Read Include File' param-
     eter for the source listing informs the program whether or not to 
     list  the  source  code of the external  files  (included  during 
     compilation through an include file compiler directive) with  the 
     main  source  code.   When activated ("YES"),  include files  are 
     automatically placed into the output's source listing immediately 
     after  the  source  line containing  the  include  file  compiler 
     directive is printed.   Besides the "YES" and "NO" options, there 
     is  an  OPTIONAL setting ("OPT") which allows you to  selectively 
     decide which include files are to be printed.   When this setting 
     is selected, a message is sent to the message area of the Scanner 
     screen every time an include file compiler directive is  scanned, 
     asking  whether  or not the file is to be included in the  source 
     listing.   Responding "Y"es will route the include file source to 
     the output; "N"o will cause the include file source listing to be 
     skipped.
          The  'Read Include File' parameter for the  cross  reference 
     lister  is  used  to tell the program whether or not  to  include 
     external  source  files in the  cross  reference  listing.   When 
     activated  ("Yes"),  include  files are automatically parsed  for 
     cross referencing identifiers within the files (declarations  and 
     uses)  based  on the object type settings of the cross  reference 
     parameters.   The  OPTIONAL setting ("Opt") allows you to  selec-
     tively  choose the files to be included in the cross  referencing 
     process.


     Defining Listing Headers:

          To further enhance the source and cross reference  listings, 
     the program implements powerful page header options.  Rather than 
     defining  the  header  within the source code,  the  headers  are 
     created  using  special pop-up windows.   The source  lister  and 
     cross reference lister each have their own header windows.
          The 'Header' parameters for both the source listing and  the 
     cross reference listing are handled in precisely the same manner.  
     These  parameters,  when  activated ("ON"),  print a preset  text 
     header at the top of each page of output (either source or  cross 
     reference,  respectively).   The header is from one to five lines 
     and  each line can be up to 75 columns in length.   The F3 and F4 
     function keys are used to set up the header text.




                                    4-1








     Creating Headers

          By  striking  the  F3 function key (for the  source  listing 
     header)  or the F4 function key (for the cross reference  listing 
     header),  a window will appear on the screen,  giving the present 
     header  line  size and asking if you wish to  change  it.   After 
     responding  with the number of lines for the header (from 1 to  5 
     lines),  or  by  entering RETURN to keep  the  same  number,  the 
     program will display two windows.   The window on the bottom will 
     show  all key options available in the header window;  the one on 
     the  top is the text editor window,  used to type in  the  header 
     format.
          It  is  possible to add information into  the  header  dyna-
     mically.   That is file name,  page number,  and present date and 
     time strings can be inserted directly into the header.  Thus, you 
     can  create  your own page numbering layout if you wish  to  have 
     page  numbering at the top of the page rather than at the  bottom 
     with the page numbering T-Ref provides.
          Note:  If 0 (zero) is entered as the number of lines,  it in 
     effect eliminates printing the header without actually destroying 
     the text within the header itself.  In this case, the text editor 
     window will not appear.

     Activating Headers

          To  activate  printing the headers,  simply move  the  block 
     cursor  to  the appropriate 'Header' field and set it to "On"  by 
     striking  the SPACE bar.   There is a 'Header' field within  both 
     the source listing and the cross reference listing areas.
          When  headers are active,  the top margin setting  is  still 
     used  to determine the spacing at the top of the page before  the 
     header  is  printed.   However,  when a header  is  printed,  the 
     program  will  automatically  buffer two blank  lines  after  the 
     header  (before  the next line of source code or cross  reference 
     listing information), so it is not necessary to buffer the header 
     with blank lines within the header itself.


     Page Numbering:

          The 'Page Numbering' parameters will, when activated ("ON"), 
     automatically  number the pages of the output source (whether  it 
     is  going to a file or to the printer).  A date/time  tag  (which 
     comes  from  reading  the system clock for the present  date  and 
     time)  is also printed on the page number line,  along  with  the 
     name of the main source file.











                                    4-2








                     Chapter 5 - I/O Control Features


          In  addition  to  the many parameters visible  on  the  main 
     screen,  there are a number of others available through the func-
     tion  keys and are used to set various system options,  primarily 
     dealing  with  controlling  the  computer's  Input/Output.   This 
     chapter details some of the features of T-REF, version 5.0, added 
     to make it more flexible and easier to use. More precisely, these 
     features are the parameters dealing with the screen (F5 key), the 
     printer (F6 key), and the file input/output (F8 key).
          The  F2  context-sensitive help function is  supported  with 
     these  three  windows.   You  can get a synopsis of each  of  the 
     fields by bringing up any of the windows, placing the cursor over 
     one of the fields, and striking the F2 key.


     Screen Control:

          Several  parameters have been added to T-REF so that various 
     aspects  of  the color display screen may  be  controlled.   This 
     allows you to set the colors that are pleasing to your eyes.   In 
     addition, for those users that have color graphics boards (CGA or 
     EGA)  running with monochrome displays,  you may wish to set  the 
     color options to all black and white screens,  since T-Ref has no 
     way of knowing what form of monitor is attached (only the display 
     mode).
          These parameters are displayed and changed by first striking 
     the  F5  function key.   Since these options  only  effect  color 
     display systems, if you have a monochrome system or an EGA system 
     running in monochrome mode, these options are not available.

     CGA Snow

          If  you  have a CGA board that produces snow  during  direct 
     screen writes,  set this parameter to "Yes" by striking the SPACE 
     bar until it appears in the block cursor.  If your board does not 
     create snow,  set it to "No".  If you do not know if your monitor 
     creates  snow,  you can test your system by setting the parameter 
     to  "???" and striking the RETURN key.   A few second  test  will 
     begin  in which characters are written to the screen.   If you do 
     not  see snow before the beep (indicating the end of  the  test), 
     your  system does not produce snow.   You can then set the param-
     eter  to the appropriate setting.   You cannot exit this  feature 
     while this parameter is set to the test mode ("???").

     Color Selectors

          The  remaining parameters are used to specify colors to  be 
     used by T-REF for both the main screen and for all windows.   The 
     main screen foreground and background colors are the colors to be 
     used  on the main T-REF screen.   The Exit Frame Color is used to 
     specify  the color of the CGA/EGA/VGA frame area upon exiting  T-
     Ref.   When  the  Exit Frame Color is  Black,  it  also  prevents 
     setting the frame color upon start-up of the program.


                                    5-1








          The  remaining six parameters define the colors for the pop-
     up  windows that are created when the function keys are  pressed.  
     The frame is the border around the window; the title is the title 
     given to the window; and the text is the area inside the window.


     Printer Control:

          The  printer  control feature (brought up with the  F6  key) 
     provides several important options to control the printer.

     Printer Port

          The first selects the printer port, which can be LPT1, LPT2, 
     LPT3,  COM1,  or COM2.   The LPT ports are the line printer ports 
     (parallel  ports 1,  2,  and 3),  while the COM ports are  serial 
     ports 1 and 2.   In almost all cases, you should be using "LPT1".  
     However,  some printers may be configured to other computer ports 
     on the computer.
          When one of the parallel (LPT) ports is selected, T-Ref will 
     check the printer device port for a ready signal for each line of 
     text  sent  to the printer.   If it ever receives a  "not  ready" 
     response,  it will generate an error.   The COM printer ports are 
     NOT tested for "ready" signals like the LPT ports.  The output is 
     shipped to the port byte by byte.

     Lines Per Page

          The  second parameter sets the number of lines per page  for 
     both  the  source lister and the cross reference  lister  output.  
     The page length is set to a default value of 66 (which is  normal 
     for  most  printers using 11 inch paper lengths and 6  lines  per 
     inch).   If  you  have a printer that prints in  compressed  line 
     formats or uses legal size paper,  for example,  you will want to 
     change this value.  The range is from 10 to 255.

     Top, Bottom, and Left Margins

          It  is possible to specify the number of lines of margin for 
     output at the top and at the bottom of each page.   Both of these 
     parameters may be set to any value from 0 to 9.   The top  margin 
     is the number of lines skipped before the first printable line on 
     the page (including the header if it is specified).
          The  bottom  margin is the number of blank lines  after  the 
     last  printable  line on the page.   This may be the page  number 
     line if page numbering is activated.
          The  Left Margin setting allows you to tell T-Ref  how  many 
     columns  in from the left side to buffer the output.   Values are 
     from 0 to 20.

     Printer Column Width

          Many printers will automatically perform a carriage  return/ 
     line  feed  when a print line exceeds its maximum  column  width, 
     then  finishes printing the text on the next line.   Since  T-Ref 


                                    5-2








     cannot  intrinsically  know when this  happens,  "page  creeping" 
     occurs.   By setting this value,  T-Ref will perform the carriage 
     return/line  feed operation for the printer;  thus preventing not 
     only page creeping, but page run-off as well.
          Note  however,  that this setting is different based on  the 
     printer mode.   That is,  the Elite printer width is not the same 
     as the Pica printer width or the Compressed printer width.   Make 
     sure  you  set  this value to match  the  appropriate  mode  your 
     printer will be printing in!

     Printer Sequences

          The  last  two  parameters are used to send  start  and  end 
     command  sequences  to  the printer in order  to  change  printer 
     modes.   It is,  for example,  possible to send commands to  your 
     printer  to  initially set it into "compressed" or  "draft"  mode 
     before printing begins and to return it back to the previous  set 
     mode after the printing is complete.
          Several  ASCII symbols represent special characters  in  the 
     command sequence:  "^",  "@",  and "#".  The carrot symbol "^" is 
     used  to send a CONTROL character (i.e.,  "^R" sends a one  char-
     acter code of "CTRL R").   The actual ASCII character values sent 
     range  from  1  ("^A") to 26 ("^Z"),  as well as  27  ("^["),  28 
     ("^\"), and 29 ("^]").  Only the capitalized alpha characters are 
     allowed to follow the "^" symbol (A-Z).
          The  ampersand "@" denotes the ESCAPE character which  is  a 
     common  character  in  sending  commands  to  the  printer.   For 
     example,  "@M"  would send a two character command code "ESC  M", 
     and "@@@" would send a two character command code "ESC @".
          The  pound  symbol "#" tells T-REF to send a specific  ASCII 
     character to the printer.  The three numeric characters following 
     the  pound  symbol is the decimal value of the  ASCII  character.  
     For  example,  "#027" sends an ESC character;  "#097"  sends  the 
     letter  "A".   It is important to remember that the numeric char-
     acter sequence ("0" through "9") following the "#" symbol must be 
     three characters long.

     Important Notes

          1) Do not place blanks or other characters into the sequence 
     to separate different commands in the sequence.   The  characters 
     (except for the special characters described above) are sent just 
     as they are typed in.
          2) The three special characters ("^",  "@", "#") can be sent 
     by typing the character twice in sequence.

     Example
          
          To set an EPSON FX into Elite mode at the start of the print 
     and to put it into PICA at the end, your commands would be:

       Start Printer Sequence:  @M
       End Printer Sequence:    @P




                                    5-3








     File Control:

          The file control feature (enabled with the F8 key)  performs 
     three  basic  functions:  it allows you to enter a specific  file 
     path string,  to specify the desired default file extension names 
     to be used by T-Ref, and to specify whether to create and/or read 
     XREF  files during the source scan.   (NOTE:  XREF files are  not 
     included  as  part  of the shareware version of  T-Ref  so  these 
     fields are inactive for this version.)

     File Path

          T-Ref  contains full DOS PATH string support in locating all 
     relevant  files,  whether it is a T-Ref file (like "T-REF.DB"  or 
     "T-REF.HLP") or a scan file (like an Include file or XREF  file).  
     However,  in searching for scan files, it is possible to override 
     the DOS PATH string with this option.
          The  file path string works the same as the DOS PATH command 
     does.  By entering a series of directory file paths (separated by 
     semicolons),  you  can have T-Ref search the list for  files  not 
     found  on  the default drive and directory.   Directories may  be 
     absolute or relative to the default DOS directories.  
          For example:

     @FRAME TEXT = \PROJECTS;C:\BACKUP\TP4;FILESRCH\SOURCE;B:..\TOOLS

     specifies four different directories other than the default drive 
     and directory.   The first two are absolute.   "\PROJECTS" refers 
     to  a subdirectory from the root directory of the default  drive.  
     "C:\BACKUP\TP4" refers to the subdirectory "BACKUP\TP4" from  the 
     root directory of drive C.
          The  last  two  paths  are subdirectories  relative  to  the 
     default directories.  "FILESRCH\SOURCE" is a subdirectory located 
     within  the present default drive  and  directory.   "B:..\TOOLS" 
     refers  to a subdirectory "TOOLS" of the parent directory of  the 
     default directory on drive B.
          If  the path string is left blank,  T-REF will read the PATH 
     specification passed by DOS and use that as the path string.   In 
     addition,  you  can load the DOS PATH string with the CTRL-R  key 
     sequence.   If you desire, you can then edit the character string 
     and save it.   

     File Extension Names
          
          The  file extension default string parameters allow  you  to 
     change the extension defaults.   These strings determine the name 
     extensions  of files to be read from (such as in "Source  Input") 
     or  written to (such as "Source Output",  "XREF Unit  File",  and 
     "XREF Include File").
          The "Source Input" and "Source Output" extension deal solely 
     with  the "Active Input File" and "Active Output File" parameters 
     respectively  on the main screen.   When file extensions are  not 
     included  in those parameters,  they default to those  designated 
     here.   (Like the Turbo Pascal compiler,  if a file extension  is 
     not  given  for  Include file compiler directives and  USES  unit 


                                    5-4








     files, '.PAS' is always assumed.)
          The  XREF Unit and Include File extensions tell  T-REF  what 
     file  extension  names are to be given to the  identifier  (XREF) 
     files  generated  when  T-REF  scans  Units  and  Include  files.  
     However,  XREF  files  are not supported with  this  version,  so 
     changing  these  extension  strings will have no  effect  on  the 
     execution of T-Ref.

     Read Unit XREF Files

          Inactive for this version.

     Creating XREF Files

          Inactive for this version.










































                                    5-5








                       Chapter 6 - T-Ref Quick Start


          This  chapter is meant to help familiarizing you with  T-Ref 
     and  guide  you in setting up the T-Ref system to best  fit  your 
     personal needs and system hardware.   
          I  suggest  that you follow the first step in  this  chapter 
     (making  a backup copy of the T-Ref program package) before  ever 
     running  the program.   Once you have done this,  you can  either 
     perform the remaining steps immediately or any time later.  Those 
     remaining  steps will assist you in how to instruct T-Ref of your 
     system's  hardware.   


     Backing Up T-Ref:

          Immediately  after  opening your T-Ref package,  you  should 
     make  at least one copy of the entire disk.   The program is  not 
     copy-protected,  so  all that is necessary is a "COPY  s:*.*  t:" 
     command,  where 's:' is the source drive the enclosed diskette is 
     on  and 't:' is the target drive the blank formatted diskette  is 
     on.   After completing the copy process, put the original disk in 
     a safe place.   If anything happens to your copy,  you still have 
     the original to make additional copies from.


     Building the Database File:

          Next,  run  the program called INITDB.   This  program  will 
     create  the database file you will use for saving and  retrieving 
     your  parameter  settings.   The file created by this program  is 
     called T-REF.DB.  After running the program, verify this file now 
     exists.


     Executing T-Ref:

          Running  the main driver is as simple as typing T-REF at the 
     DOS command line.   The program will load and the "driver" screen 
     (see Chapter 1,  "T-Ref's Driver Program") will appear.  Note the 
     block  cursor  is  at the  'Active  Directory'  field,  which  is 
     presently blank.  


     Setting the Default Parameters:

          When T-Ref loads, one of the first actions it performs is to 
     load one of the database's combination of parameter settings into 
     memory.   








                                    6-1








     I/O Control Features

          a) Screen Control Parameters

          The very next step once the driver shell is loaded should be 
     to  set  the various color attributes that you like to work  with 
     (if  you  have  a color or EGA monitor card) and  to  tell  T-Ref 
     whether your CGA produces "snow" during memory  contentions.   If 
     you  have a monochrome monitor card and monochrome  monitor,  you 
     can skip this step.   For more on the color selections and "snow" 
     settings, see Chapter 5, "Screen Control".

          b) Printer Control Parameters

          You will need to give T-Ref information about your  printer.  
     Through the 'Printer Control Window', set the proper printer port 
     for  your  system,  the  number of lines per  page  your  printer 
     supports,  and  the margins that you most likely will  use.   See 
     Chapter 5, "Printer Control" for more details.
          The number of lines per page will most likely be 66 (6 lines 
     per inch times 11 inches).   If your printer supports other  than 
     standard printing characteristics, set the value appropriately.
          Also,  set  the  printer  column width to  the  most  common 
     setting.   Remember that some printers can have different printer 
     column  maximum widths based on the printer  mode  (i.e.,  Elite, 
     Pica,  Compressed, etc.).  Set this based on the most common mode 
     you will be printing in.
          Finally,  if you plan on printing most often in a mode other 
     than the one the printer is normally in, you will need to specify 
     a  start  and  end printer command sequence.   Use  your  printer 
     manual to determine the command codes your printer accepts.

          c) File Control Parameters

          Next,  under the 'File Control Window',  you need to  decide 
     whether or not to enter a directory PATH string for T-Ref to use.  
     If  you  have your source code organized into only a  few  direc-
     tories,  you  may wish to enter the PATHs to them.   If you  have 
     different  directories for each project or program you are devel-
     oping, you may wish to leave this field blank and enter the PATHs 
     for each project individually.

     Source Lister Options

          In  the Source Lister area of the driver shell,  you  should 
     decide  which word formats you will want most often for  reserved 
     words and identifiers.
          If  you  wish to create a generic header  template  for  the 
     source lister, now would be the time to do so.  Strike the F3 key 
     for the source lister header window.   You may, for example, wish 
     to put your name,  company,  address,  copyright statements,  and 
     even  determine file name and present date/time locations in  the 
     header.  See chapter 4 for more on setting up headers.




                                    6-2








          In addition,  you should set the 'Active Procedure/Function' 
     column  width  field  to the maximum input width  of  the  normal 
     source code (see Chapter 2, "Active Procedure/Function").


     Cross Reference Lister Options

          In  the Reference Lister area of the driver shell,  you  may 
     wish to set the detail level and your most frequently used object 
     selection parameter settings.
          Like  the  source lister,  you may wish to create a  generic 
     header template for the cross reference lister.   Use the F4  key 
     to  bring  up  the header window and enter the text  and  dynamic 
     fields as you did with the source lister.


     Saving the New Settings:

          Once  you have gotten to this point,  you are ready to  save 
     the settings to the database file.  Strike the F10 key.  When the 
     'Write  Database' window appears,  make sure the block cursor  is 
     over the selector "SYSTEM" (option 0).   Then hit  RETURN.   Now, 
     each  time T-Ref is called and the default SYSTEM combination  is 
     loaded, the settings you have saved will be loaded.

































                                    6-3








                  Chapter 7 - Commercial Version of T-Ref


          In this chapter, I will describe the differences between the 
     shareware version of T-Ref which you are using and the commercial 
     version  of  T-Ref which is available at the $45 level of  regis-
     tration.


     The T-Ref Shell:

          There  are  very  few  differences  between  the  commercial 
     version  of T-Ref and the shareware version.   Many of the selec-
     tion restrictions are obviously removed to provide the additional 
     features of the commercial version.

          Scripting

          One benefit gained is the scripting feature offered with the 
     commercial  version.   With this feature,  you can  automatically 
     scan a sequence of files by passing the name of a file containing 
     the source file names,  rather than the source itself.  Thus, you 
     can quickly produce printable source and cross reference listings 
     with a single command.

          Extended Database Set

          The commercial version supports the ability to save up to 10 
     combinations  of parameter settings,  where the shareware version 
     only allows 2.

          Printer Hold File

          It  is  possible  with the commercial version to  route  the 
     output from the scan to a printer hold file,  which,  in addition 
     to the normal text,  contains printer commands,  page ejects, and 
     other information used to manipulate the printer.   From the hold 
     file,  you just simply need to perform a PRINT or COPY command to 
     send the file to the printer.   (This is especially nice when you 
     wish to generate the output on one computer,  and print the files 
     from another.)

          PRINT Interface

          DOS  3.X  provides a resident utility  called  PRINT,  which 
     among other things,  allows you to submit files for printing to a 
     print spooler.   The resident utility then maintains the list  of 
     files  that need to be printed,  and performs this action in  the 
     background.    The  commercial  version  of  T-Ref  can  directly 
     interface  with  the PRINT utility by creating a print  file  and 
     then submitting the file for printing.  Thus, you can continue to 
     scan other files while printing occurs in the background, and you 
     are no longer restricted to the speed of your printer.




                                    7-1









     The Scanner Program:


          Calling the Scanner from DOS

          The  commercial  version of T-Ref supports  the  feature  of 
     directly calling the scanner program from DOS, rather from the T-
     Ref  shell.   This provides the scanner with the addition  memory 
     that  the  shell  program normally takes up.   When  calling  the 
     scanner from the DOS line,  you pass in the name used to identify 
     the  database parameter set saved.   The scanner then  loads  the 
     database, and executes the scan automatically.

          XRU and XRI files

          Definitely  the most unique feature of T-Ref is its  ability 
     to not only scan files for listing purposes,  but to also  create 
     identifier files about the identifiers found during the course of 
     the  scan.   Once  created,  these identifier files can  then  be 
     "linked"  into other scans and the identifiers that would  appear 
     (through the use of the USES clause for example) become available 
     for referencing.
          XRU  files are created from Unit Files,  and contain all  of 
     the  identifiers  declared in the INTERFACE portion of the  unit.  
     T-Ref can then be told to LINK such files into the scan of  other 
     units  when references to those units are encountered in the USES 
     clause of the scanning unit.
          Benefits  from such a feature include more  accurate  infor-
     mation about the use of variables.   For example,  with XRU files 
     linked,  T-Ref  ALWAYS knows when variables are set by procedural 
     calls and the variable is passed as a  parameter.   Also,  decla-
     rations from TYPEs declared in other units are more accurate.
          XRI files are created from Include Files,  and once created, 
     can  be linked into other source files that reference them rather 
     than having to continuously scan them.  Linking occurs in seconds 
     while having to scan them over and over takes minutes.
          The  commercial  version includes XRU files already  created 
     for  all  of  the  identifiers found in  the  Turbo  Pascal  unit 
     library: DOS, CRT, PRINTER, GRAPH, TURBO3, GRAPH3, and OVERLAY.


     The Source Lister:

          Graphics Block Diagramming

          As  an alternative to the ASCII style of block  diagramming, 
     the  commercial  version also provides a  GRAPHICS  style.   This 
     option  uses the IBM extended character set to produce the  block 
     diagrams.


     The Cross Referencer:




                                    7-2








          Detail Levels 4 and 5

          Even  the shareware maximum level 3 does not  actually  show 
     all  of  the  information  T-Ref can  produce  about  the  source 
     scanned.  The commercial version supports levels 4 and 5 as well.  
     At  levels  4  and 5,  associated file names are given  with  the 
     declaration, as well as with the references.  References are also 
     grouped by the procedures of the references.
          Various  warnings  and  notes  are  also  listed  with   the 
     references.  There are 5 different warnings T-Ref generates about 
     the  scanned code and two notes.   Warnings include flagging when 
     variable  formal  parameters are never set,  when  functions  are 
     never  set,  when loop variables are set within the  loop  block, 
     when  variables  are not set before their use,  and when  forward 
     declared  functions/procedures are never fully  declared.   Notes 
     include  when  formal  parameters are set to  a  value  and  when 
     recursive,  inline,  interrupt,  far,  and external procedures or 
     functions are declared.

          Remote Identifier Listing

          With  the use of cross reference (XRU) files generated by T-
     Ref,  it  is possible to load and list references to  identifiers 
     declared in other units.

          Scanning Conditionals

          The  commercial  version  of T-Ref can also be told  to  act 
     exactly like the Turbo compiler in how it sees the source code it 
     is  scanning.   The compiler will ignore certain portions of  the 
     code  when conditional statements are encountered on  the  input.  
     T-Ref  can be told to act just the same,  skipping over  whatever 
     code resides within conditionals.  T-Ref does this by tracking on 
     what conditional symbols are defined and takes appropriate action 
     when encountering the IFDEF, IFNDEF, and IFOPT directives.

          Conditionals and Compiler Directive listings

          Included  in the cross reference listings of the  commercial 
     version  are the conditional listing and the  compiler  directive 
     listing.   In  the  conditional listing,  T-Ref lists all of  the 
     conditional symbols found during the scan.  From the listing, you 
     can  determine  on  what  lines the  symbols  were  DEFINE'd  and 
     UNDEF'ined, as well as what lines they were referenced.
          The  compiler  directive listing lists all of  the  compiler 
     directives found during the scan, the lines referenced, and a "+" 
     or  "-" symbol (where appropriate) corresponding to  their  being 
     turned ON or OFF respectively.









                                    7-3






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0827

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   9-28-87   3:44p
    GO       TXT       617  11-21-89   3:55p
    INITDB   EXE      8336   8-23-89   6:49p
    README   1ST      2610   8-23-89   6:49p
    REGISTER FRM      5302   8-23-89   6:49p
    T-REF    DOC     86912   8-23-89   6:49p
    T-REF    EXE     74704   8-23-89   6:49p
    T-REF    HLP     58380   8-23-89   6:49p
    T-REFSCN EXE    107120   8-23-89   6:49p
    FILES827 TXT      1192  11-21-89   3:59p
           10 file(s)     345211 bytes
                           11264 bytes free
