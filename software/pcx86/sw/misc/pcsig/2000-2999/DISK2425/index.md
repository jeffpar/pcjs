---
layout: page
title: "PC-SIG Diskette Library (Disk #2425)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2425/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2425"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POWERBATCH"

    POWERBATCH creates standalone (.EXE) compiled batch files. POWERBATCH
    has all of the functionality of standard DOS batch files plus 40
    additional commands to perform functions not available in a standard
    batch file.  Executes any .COM, .EXE (including other POWERBATCH
    programs), or DOS intrinsic commands entered as a POWERBATCH source
    statement.  Control screen colors, draw boxes, get input from the
    keyboard, access system information, string manipulation and
    comparison, and much more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2425.TXT

{% raw %}
```
Disk No: 2425                                                           
Disk Title: PowerBatch                                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: PowerBatch                                               
Author Version: 1.4                                                     
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
POWERBATCH is a utility that creates standalone (.EXE) compiled batch   
files. POWERBATCH contains all the functionality of standard DOS batch  
files plus 40 additional commands to perform functions not available in 
a standard batch file. Executes any .COM, .EXE(including other          
POWERBATCH programs), or DOS intrinsic commands entered as a POWERBATCH 
source statement. Control screen colors, draw boxes, get input from     
keyboard, access system info, string manipulation and comparision, and  
much more.                                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## POWERBAT.DOC

{% raw %}
```





















                                        PowerBatch
                                       Version 1.4



                              COMPUTING SYSTEMS DESIGN, INC.
                                     P.O. Box 566484
                               Atlanta, Georgia 30356-6009


                                   _______
                              ____|__     |               (tm)
                           --|       |    |-------------------
                             |   ____|__  |  Association of
                             |  |       |_|  Shareware
                             |__|   o   |    Professionals
                           -----|   |   |---------------------
                                |___|___|    MEMBER


            CSD,   Inc.  is   a  member   of  The  Association   of  Shareware
            Professionals and subscribes  to all the policies and standards of
            this organization.

                           Copyright (c) 1989,1990 by CSD, Inc.
                              All Rights Reserved Worldwide

                  This documentation was produced on September 19, 1990







                                    Table Of Contents


           Introduction . . . . . . . . . . . . . . . . . . . . . . . . .    1

           Registration Fees And What You Get . . . . . . . . . . . . . .    3

           Software Support . . . . . . . . . . . . . . . . . . . . . . .    4

           Concept Of Operation . . . . . . . . . . . . . . . . . . . . .    5

           Installation . . . . . . . . . . . . . . . . . . . . . . . . .    7

           Constructing A PowerBatch Source File  . . . . . . . . . . . .    9

           PowerBatch Commands  . . . . . . . . . . . . . . . . . . . . .   10

           Command Summary  . . . . . . . . . . . . . . . . . . . . . . .   30

           Compilation Errors . . . . . . . . . . . . . . . . . . . . . .   32

           Removing PowerBatch From Your System . . . . . . . . . . . . .   34

           Examples . . . . . . . . . . . . . . . . . . . . . . . . . . .   35
              DEMO1 . . . . . . . . . . . . . . . . . . . . . . . . . . .   35
              MOVE1 . . . . . . . . . . . . . . . . . . . . . . . . . . .   41
              MOVE2 . . . . . . . . . . . . . . . . . . . . . . . . . . .   42
              MENU1 . . . . . . . . . . . . . . . . . . . . . . . . . . .   43
              BOXDEMO2  . . . . . . . . . . . . . . . . . . . . . . . . .   44

           Index  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   46







            Page 1                      PowerBatch                      Page 1

                                       Introduction

            PowerBatch  is a  Shareware product.  Shareware is  a distribution
            method,  not  a  type of  software.  With  Shareware you  get  the
            ultimate  money-back guarantee...if you don't use the product, you
            don't pay for it.

            Shareware  is not  free  software. Copyright  laws  apply  to both
            Shareware  and  commercial  software,  and  the  copyright  holder
            retains  all rights,  with a few specific  exceptions as stated in
            this  document.  Shareware authors  are accomplished  programmers,
            just like commercial authors, and the  programs are of  comparable
            quality.  (In  both cases,  you will  find good  programs and  bad
            ones!)  The main difference is  in the method of distribution. The
            author specifically grants  the right  to copy and distribute  the
            EVALUATION  VERSION  of  the software  to  anyone  as long  as  no
            remuneration  is  received for  the distribution  of the  software
            unless permission is granted in writing by the author.

            Shareware  distribution  gives  users a  chance  to  try  software
            before  buying it.  If you  try a  Shareware program  and continue
            using  it,  you are  expected to  register the  software with  the
            author.  With registration, you will receive the latest version of
            the  software  without the  evaluation titles  and messages.  With
            shareware you  are able to try the software on  your computer with
            your  own set  of peripherals,  the only  way to  know if  it will
            function  in your own  environment. After deciding that PowerBatch
            is a  software product that  you will  use, then and only  then do
            you  pay for it.  The ultimate trust from the  author! When you do
            pay for  the software,  you pay  only for  the  software, not  for
            advertisement  for the software which can cost many times what the
            software actually costs.

            CSD,  Inc.  is   a  member   of  the   Association  of   Shareware
            Professionals  (ASP).   ASP wants to make  sure that the shareware
            principle works for you. If you are unable to  resolve a shareware
            -related  problem  with  an ASP  member by  contacting  the member
            directly,  ASP may be able to help. The ASP Ombudsman can help you
            resolve a  dispute or  problem with  an ASP  member, but does  not
            provide  technical support for  members' products. Please write to
            the  ASP Ombudsman at P.O.  Box 5786, Bellevue, WA 98006 or send a
            Compuserve message via easyplex to ASP Ombudsman 70007,3536.

            While CSD has  no immediate plans to move, businesses do move from
            time  to time.  Since shareware tends  to remain on  some bulletin
            boards without  update  for many  years, if  the shareware  author
            does  move, you may experience a problem in contacting the author.
            You may also contact ASP  to learn of the  current address of  any
            ASP member if you experience this problem.







            Page 2                      PowerBatch                      Page 2

            Trademarks
            ----------

            PowerBatch is a trademark of Computing Systems Design, Inc.
            MS-DOS is a trademark of Microsoft Corporation.
            IBM and PC-DOS are trademarks of IBM Corporation.
            ASP, Association of Shareware Professionals,  and the ASP logo are
            registered    trademarks   of   the   Association   of   Shareware
            Professionals.

            Liscense Agreement
            ------------------

            By  installing  PowerBatch  on  your  system,  you  indicate  your
            agreement  to the  following terms and  conditions. If you  do not
            agree  to these  conditions, you  should not  install and  use the
            PowerBatch   System.  POWERMAK,  SMLMODEL,  and  the  accompanying
            supporting  programs  and   documentation  will   be  collectively
            referred to as PowerBatch.

            Users  of  PowerBatch must  accept  this disclaimer  of  warranty:
            "PowerBatch is supplied as is.  The author disclaims all
            warranties,  expressed or  implied, including, without limitation,
            the warranties of  merchantability and of fitness for any purpose.
            The   author  assumes   no  liability   for  damages,   direct  or
            consequential, which may result from the use of PowerBatch."

            PowerBatch  is a "shareware program"  and is provided at no charge
            to the user  for evaluation.   Feel free  to share the  EVALUATION
            COPY with your friends, but please do not give  it away altered or
            as  part of  another  system.   The  essence  of  "user-supported"
            software  is  to  provide personal  computer  users  with  quality
            software  without high  prices, and  yet to  provide incentive for
            programmers  to continue  to develop  new products.   If  you find
            this  program useful  and find that  you are using  PowerBatch and
            continue to  use PowerBatch after a 30 day trial  period, you must
            make  a  registration payment  to Computing  Systems Design,  Inc.
            (CSD, Inc.).   The registration fee  will license one copy for use
            on  any  one computer  at  any one  time.    You  must treat  this
            software just like a book.   An example is  that this software may
            be used  by any number of people and may be  freely moved from one
            computer  location to another, so  long as there is no possibility
            of  it  being  used at  one  location  while it's  being  used  at
            another. Just as  a book cannot  be read by two  different persons
            at the same time.

            Commercial  users (every user except personal users) of PowerBatch
            must  register and  pay for their  copies of PowerBatch  within 30
            days  of first  use or their  license is withdrawn.   Site-License
            arrangements  may be made  by contacting Computing Systems Design,
            Inc. (CSD, Inc.).







            Page 3                      PowerBatch                      Page 3

            Anyone  distributing PowerBatch for  any kind of remuneration must
            first  contact Computing Systems  Design, Inc.  (CSD, Inc.) at the
            address  on the  title page for  authorization. This authorization
            will  be automatically  granted to distributors  recognized by the
            (ASP)  as adhering  to its guidelines  for shareware distributors,
            and such distributors  may begin  offering PowerBatch  immediately
            (However Computing Systems Design, Inc.  (CSD, Inc.) must still be
            advised  so that  the distributor can be  kept up-to-date with the
            latest version of PowerBatch.).

            You  are encouraged to pass an EVALUATION COPY of PowerBatch along
            to  your  friends  for  evaluation.    Please  encourage  them  to
            register their  copy if  they  find  that they  can use  it.   All
            registered  users will  receive a  copy of  the latest  version of
            PowerBatch.  Distribution of registered  copies of PowerBatch is a
            violation of copyright laws.

            To register your copy of PowerBatch, print the file  REGISTER.FRM,
            complete  this form, and send  along with your registration fee to
            CSD,  Inc.  You will  receive the  latest version  of the  program
            along  with the latest documentation. The fully registered version
            of  the program  removes all references  to evaluation. Registered
            users will receive notice of  all updates made to  the program and
            these  updates will be supplied  to registered users for a nominal
            charge.  Every effort will be made to supply updates to registered
            users at the lowest possible cost.

            If  you  need  to  submit an  invoice  to  your  accounts  payable
            department,   print  the   form  INVOICE.FRM   and  fill   in  the
            appropriate blanks.

            Registration Fees And What You Get
            The   evaluation  version  of  PowerBatch  contains  100%  of  the
            capabilities  of  the  registered  version.   Those  who  register
            PowerBatch will  receive the latest  release of  the software  and
            documentation  and will  receive update  offers in  the mail  at a
            minimal cost  as they  become available.  CSD maintains copies  of
            innovative batch  files submitted  by users  and will  include the
            best of these batch files along with the registered software.

            The  registration fee  for PowerBatch is US  $30. Price is subject
            to change without  notice but will  be guaranteed through December
            1990. If  payment is by check, these  funds must be  drawn on a US
            bank.  Unfortunately the  processing of  non-US checks  can  be as
            much as $20 and we cannot afford this type  of transaction. We are
            continually  looking   for  innovative   ways   to  serve   non-US
            customers.







            Page 4                      PowerBatch                      Page 4

            Software Support
            ----------------

            Support for PowerBatch  may be obtained by contacting CSD,Inc.  on
            Compuserve  using Compuserve Mail (EasyPlex). Address inquiries to
            Compuserve  ID 72701,155. If you  are not a Compuserve member, you
            may obtain support by writing to:

                              Computing Systems Design, Inc.
                                     P.O. Box 566484
                               Atlanta, Georgia 30356-6009

            If  you feel  you have a  question that needs  immediate attention
            and  you are a registered  user, CSD's office hours  are 8AM until
            5PM CST. We will  be happy to discuss any problems or  suggestions
            for PowerBatch but time does  not permit us to help you debug your
            PowerBatch source problems.







            Page 5                      PowerBatch                      Page 5

                                   Concept Of Operation

            PowerBatch  is a  compiler for batch file  "type" commands. At the
            present  time there  are 35  PowerBatch commands  which will  work
            only in  a  PowerBatch source  file (they  will not  execute in  a
            standard  DOS batch  file). Any  valid executable  command (.EXE &
            .COM) as  well as  any of  the  DOS intrinsic  commands are  valid
            within  a PowerBatch  source file  and will  be  "compiled". These
            .EXE,  .COM  and DOS  intrinsic commands  will be  executed via  a
            shell  and  the PowerBatch  .EXE program  will continue  execution
            with  the next  compiled statement following  the shelled command.
            There   are   two   main   modules   supplied   with   PowerBatch;
            1)POWERMAK.EXE  and  2)SMLMODEL.MDL. PowerMak  reads,  parses  the
            source  file,  and compiles  the source  extracting routines  from
            SmlModel.  The result  is a  completely standalone  .EXE file that
            executes  without  SmlModel or  PowerMak.  The increase  in  speed
            comes from  the use  of  the PowerBatch  commands as  the DOS  and
            executable modules will  not be executed any faster. Most  notable
            is  the  increase  in  speed  dealing  with  screen  writes.  Many
            capabilities  are provided in  PowerBatch commands that simply are
            not available with standard DOS commands.

                                    Why Use PowerBatch

            There  are  four major  reasons  for  using a  compiled PowerBatch
            program:
                 1)  The  resulting  program  will  almost  certainly  execute
                    considerably  faster.   While  it  might  be  possible  to
                    construct  a compiled  PowerBatch  program that  does  not
                    execute faster, it would have to  consist entirely of pre-
                    existing executable modules.
                 2) PowerBatch  commands provide  a  considerable increase  in
                    flexibility and power over conventional batch files.
                 3) PowerBatch  programs  cannot  be  changed  without  making
                    machine   code   modifications.  This   means   additional
                    security for distributed batch files.
                 4)  PowerBatch  programs  can  be  created  quickly  for  the
                    PowerBatch command set is a very high level language.

            PowerBatch commands fall into 5 classes of commands;
              1) Commands which  provide systems  information. These  commands
                 provide  the current  color settings,  the current  date, the
                 current  time, check  for  the  existance  of a  valid  drive
                 letter,  and commands  which  check for  the  existance  of a
                 directory or a file.
              2)  Commands  which  control  the  flow of  the  batch  program.
                 Execute  different  portions of  the batch  program based  on
                 existance  or non-existance of directories  or files. Compare
                 the contents  of one  variable with the  contents of  another
                 variable  or a constant and execute different portions of the
                 batch program based on the results of the compare.







            Page 6                      PowerBatch                      Page 6

              3)  Commands  which  control the  way  text  is printed  on  the
                 screen.  Change any portion of the screen to any valid screen
                 color,  cause a message to  blink on the screen, or highlight
                 a message in reverse video.
              4)  Commands which provide  string manipulation. Change a string
                 to all upper  case characters, or  all lower case characters.
                 Extract  a  portion  of a  string  such  as the  first  three
                 characters or the last  four characters. Build  a new  string
                 from  two  existing  strings  by  concatenation  of  the  two
                 strings.
              5)  Commands which  deal with screen writing  and input from the
                 keyboard.   These  commands   are  the  main   power  in  the
                 PowerBatch system.  Directly  address  any  position  on  the
                 screen and move the cursor to that position to  read or write
                 text. Automatically center  a message  or title on any  line.
                 Draw boxes  around portions of  the screen  to enhance screen
                 appearance. Read  a single key  from the  keyboard, read  the
                 response to a query that only  accepts a yes or  no response,
                 read  a  string  of  characters  from  the  keyboard  with  a
                 specified  maximum length,  and read  keys from  the keyboard
                 automatically changing the characters to upper case.







            Page 7                      PowerBatch                      Page 7

                                       Installation

            Installation is  accomplished by executing  the PBInstal  program.
            It  seemed only  fitting that this  install program be  a compiled
            PowerBatch  program. I  believe this  to be  the epitome  of self-
            installing  software.  The  two  main   modules  POWERMAK.EXE  and
            SMLMODEL.MDL must  be located  in the  DOS  path to  allow you  to
            compile  PowerBatch programs  from any  directory on  your system.
            PowerBatch  may be run  on a system  as small  as a  single floppy
            drive system with 128K. There  will be some limit to the number of
            source statements that  may be compiled on  a system this small as
            memory  is  dynamically  allocated as  compilation  progresses.  A
            source  file of  several hundred statements  can be compiled  on a
            small machine.

            PowerBatch may  be installed  from either  drive A, B,  or a  hard
            drive.

            If the PowerBatch source is  on a floppy disk, you may execute the
            install procedure by:

              1) If your  current drive  is the  A: (or  B:) drive then  enter
                 PBInstal <enter>.
              2)  If you current  drive is other  than A:  (or B:)  then enter
                 A:PBInstal <enter> (or B:PBInstal <enter>).

            If you  are installing PowerBatch from  a fixed disk drive such as
            C:, then  make the directory  which contains the PowerBatch source
            the  current  default  directory.  For  example  if  you have  the
            PowerBatch  source in  a directory  named C:\TEMP,  then at  a DOS
            prompt enter

            CD \TEMP <enter>
            PBInstal <enter>

            You  will  first  be  asked to  enter  the  directory  name  which
            contains the PowerBatch source. Next you will be asked to enter  a
            directory name  on your  DOS  path where  the PowerBatch  compiler
            will be placed.  POWERMAK.EXE and SMLMODEL.MDL  will be  placed in
            this  directory. Before  you begin the  installation process, know
            the name of a directory which is on the DOS  search path where you
            will  place these  two files. The  install program will  not allow
            you to  place the  compiler  in  a directory  that is  not on  the
            search path.

            Now  you will be asked  to enter a  directory name where you would
            like  the documentation,  informational, and  example files  to be
            placed. This directory does not  have to be on  your DOS path.  If
            this  directory  does  not  exist,  PowerBatch  will  create  this
            directory   for  you   if  you   desire.  The   documentation  and
            information files will be placed in this directory.







            Page 8                      PowerBatch                      Page 8

            The  first  time that  you run  the PowerBatch  compiler, it  will
            customize  itself for the computer  on which you are running. This
            process takes about  a minute and  will not run  again. Take  this
            opportunity  to learn about the shareware distribution process and
            how to  register PowerBatch if  after taking it for  a test drive,
            you  feel  you  would  like  to  add  it  to  your  collection  of
            utilities.

            We  at CSD  would like  to share  innovative batch  file creations
            with  our customer  base. If  you have  created such  a PowerBatch
            program  and would  like to share it  with other PowerBatch users,
            send it to us and if  we agree with you we  will include it on our
            registration  disk  to  our customers.  You  may  mail us  a  disk
            containing   the  PowerBatch  source   or  you  may  send  it  via
            CompuServe EasyPlex.

            Our address is:
              CSD, Inc.
              P.O. Box 566484
              Atlanta, Georgia 30356-6009

            Our CompuServe ID is 72701,155.







            Page 9                      PowerBatch                      Page 9

                          Constructing A PowerBatch Source File

            Use  your favorite  text editor to  create a printable  ascii file
            containing   PowerBatch  source   commands  and   DOS   executable
            commands.  A printable ascii file  is one that may be typed to the
            screen  (ie type  myfile.pwr <enter>)  and the  results printed on
            the  screen contain  only the  file  contents. Most  files created
            with  a word  processor are not  printable ascii files  unless you
            specify an ascii file output option.

            Compile  your  source  statements  to  create  a  .EXE  executable
            module. This is done using the POWERMAK compiler. The syntax is:

                 POWERMAK MyFile [OutFile] [+M]

            PowerMake assumes  the extension of the  input file to be .PWR (ie
            MYFILE.PWR)  and will  create an output  file of MYFILE.EXE  if no
            OutFile  parameter is specified. The  input source file may be any
            DOS name  of your  choice(including the  extension). You may  also
            specify an output file name of your choice but the extension  will
            always  be .EXE.  If you do not  enter the input file  name on the
            command line, the  program will prompt you  for the name. You must
            at this time enter the complete name including the extension.

            If you wish  to generate a  list of all  literals, variables,  and
            labels  used in your PowerBatch  program, add +M to the end of the
            command  line.   This  variable  map  will   be  written  to   the
            POWERBAT.ERR file.

            If the compiler finds no compilation  errors, the compiled version
            of  your  source file  will be  generated. For  an explanation  of
            compilation   errors,  see   the  section   entitled  "Compilation
            Errors".  Compilation errors  appear  on your  screen as  they are
            encountered and they  are written  to a  file named  POWERBAT.ERR.
            The  entire  source  code  is scanned  each  time  you  compile  a
            PowerBatch  program (ie  the compiler does not  stop when an error
            is found, but attempts to identify all errors on each pass).  This
            means  that  some errors  will be  the result  of previous  errors
            found in the source.







            Page 10                     PowerBatch                     Page 10

                                   PowerBatch Commands

            Commands,  Variable  Names, and  Labels  are not  case  sensitive.
            Everything  on the command source  line is converted to upper case
            except  a literal  which is enclosed within  quotes. Either single
            quotes(')  or double  quotes(") may be  used to denote  a literal.
            Literals   which  are  numeric  such  as  color  values,  variable
            lengths,  etc. should not be enclosed in quotes. The compiler does
            evaluate  each  literal  (both alpha  and  numeric)  in  the  same
            manner. The  evaluation process is  1) remove leading and trailing
            quotes if any,  2) attempt  to convert literal  to numeric, 3)  if
            numeric conversion  is successful,  consider it  a  number, 4)  if
            numeric  conversion is  unsuccessful, consider  it  alpha numeric.
            This  means that internally  an operand of 3 and  "3" will both be
            numeric.

            A  semicolon which  is not enclosed within  quotes or a  part of a
            command is used to denote a  comment. Semicolons which are part of
            a command must not be  preceded by a space.  A comment begins with
            a  semicolon which follows a space not within quotes. Comments may
            appear  anywhere  on the  command  line,  but  everything after  a
            semicolon on a  command line  is ignored. A  comment may begin  in
            column 1 by placing the  semicolon in column 1.  The following are
            NOT comments:

              path=d:\;c:\util;c:\wp
              path   "d:\;c:\util;c:\wp"
              WriteLine   "Punctuation may be used within quotes;"

            These ARE comments:

              Variable    ColorSave,3 ;save the original color
              SetVar      Msg, ErrMsg ;set Msg to "Invalid input; re-enter"

            The starting location on the command line  of the command and  the
            operands is  not important and tabs and spaces may  be freely used
            for readability.

            Variable names and command  labels may be any length in the source
            command   but  are  significant   only  through  the  first  eight
            positions.

            Variables, Literals, and Labels

            A variable is a location  in memory that you  allocate and give  a
            name and a maximum length.  Anytime you refer to the "name" of the
            variable, you are referencing  the memory locations  set aside for
            this  variable. Variable names give  you an easy way to manipulate
            data  internally within  the computer. The  following are examples
            of variables:
              Variable    CharIn,1
                    This  variable  gives  the name  "CharIn"  to  one  memory







            Page 11                     PowerBatch                     Page 11

                    position. It  will be used to hold one character responses
                    from the keyboard by the user. 

              Variable    PBDir,79
                    This  variable appears  in the PBInstal  program and holds
                    the  name of  the directory where  the PowerBatch compiler
                    will  be placed.  It is composed  of the drive  letter and
                    directory   entered  by  the   user  in  response  to  two
                    questions during the installation process.

              Variable    CompName,35,"The ABC Company"
                    This  variable reserves  35 positions in  memory and gives
                    these  locations   the  name   CompName.  The   PowerBatch
                    compiler  also places the  initial value "The ABC Company"
                    in  the first  15 positions of the  variable. The value of
                    this variable  may be changed  by later  processing in the
                    program.

              Variable    MsgClear,20,"                    "
                    This  variable contains  20 spaces and  is named MsgClear.
                    It  will be  used to "clear"  or overwrite with  spaces an
                    error message in  your program. Once you have displayed  a
                    message  to the user, it should be cleared as you continue
                    with  the  program.  This  is  done  by  overwriting  with
                    spaces.  Having  a variable  with  the correct  number  of
                    spaces makes this task easier.

            There  are two  predefined variables  in each  PowerBatch program;
            ERRORLEVEL  and DOSERROR. The ErrorLevel variable and the DOSError
            variable are updated  each time an  external command  is executed.
            If  you execute a program  which sets an  error code on exit, this
            error  code  will  be in  ERRORLEVEL.  The  use of  ERRORLEVEL  in
            PowerBatch  is equivalent  to the use of  ERRORLEVEL in a standard
            DOS batch  file. If you  execute an  external command(program) and
            that  command does  not terminate normally,  the variable DOSERROR
            will  be set  to  the DOS  error code  assigned  by  the operating
            system.  It  is  good practice  to examine  the  DOSERROR variable
            after executing an external command.

            Literals are  very much like variables  which have a  value but no
            name.  Literals are  used in PowerBatch commands  when you wish to
            pass an actual  value to the command  instead of a variable.  Note
            in  the following  examples that literals  containing numbers only
            are  not  enclosed  in quotes  and  literals  containing  any non-
            numeric  characters are  enclosed  in  quotes. If  you  specify  a
            number  as a  literal either convention is  acceptable (3 or "3").
            If  you specify  alphabetic characters,  the quotes  are required.
            For readability, and  ease of entry,  numeric literals  usually do
            not contains quotes. Examine the following examples of literals:

              Center      "Installation Program",1
                    This  command   will  center  the  literal   "Installation







            Page 12                     PowerBatch                     Page 12

                    Program" on  line 1 of  the screen. The text "Installation
                    Program"  must  appear somewhere  in  the program  and  it
                    appears as a literal. It will  occupy memory positions and
                    will have a value but you may not reference this value  by
                    name.  By instructing the  compiler to write this literal,
                    the  compiler automatically  creates the  memory locations
                    and  initial value but gives  it no name.  The 1 is also a
                    literal in this command.

              WriteAt     12,3,Msg1
                    There are  two literals  in this  command. The  numbers 12
                    and  3 are both created  as literals. In this command they
                    specify the column and row location where the string  Msg1
                    will  be written.  Again, the compiler  creates the memory
                    locations and values  for these literals, but no names. If
                    you  were  to  write  another  command  such  as  the Beep
                    command  which specifies that the system speaker will beep
                    at  a certain  frequency for  3 times,  the compiler  will
                    find  the  previously defined  literal  "3" and  use  this
                    value instead of creating another literal.

              Beep        ErrTone,8,3
                    This  is  the  Beep command  referenced  in  the  previous
                    example. The beep  command will cause the speaker to sound
                    at  a  frequency of  ErrTone for  .8 second  and repeat  3
                    times.  The "3" literal will use the  same memory location
                    reference  as  the WriteAt  command used  in the  previous
                    command (ie another literal will not be created).

            Labels  are names of a particular place in your PowerBatch program
            that  you will  go to without executing  the previous command. You
            go  directly to this location in the program from another location
            in  the program based on a decision you have  made in the program.
            Examples will help explain:

              ReadYN      "Do you wish to continue [Y/N] ",InChar
              Compare     InChar,"Y",,,GetDrive
              Halt        999
              ;end the program if user enters "N"
              Label       GetDrive
                    This  group of  commands writes the message  on the screen
                    and asks  the user  to input either  Y or  N (the  command
                    will  only accept these  two characters). A comparision is
                    then  made to  a literal "Y" and  the compare command will
                    jump  to the  location in the program  named GetDrive if a
                    "Y"  was entered  or will execute the  next command if "N"
                    was entered.

              GoTo        NextCmd
              .
              .
              .







            Page 13                     PowerBatch                     Page 13

              Label       NextCmd
                    In  this most straightforward  use of  the label, the user
                    simply  uses the GoTo command and jumps unconditionally to
                    another point in the program.

            External  commands  are entered  just as  PowerBatch commands  are
            entered.  If you  enter an external command  and this command uses
            command line parameters, these parameters may be  passed as either
            variables  or literals.  Remember that  if  the parameter  is  not
            numeric, it must be enclosed in quotes or it will be  treated as a
            variable. Examples:

              Variable    InChar,1
              ReadYN      "Do you wish a directory ",InChar
              Compare     InChar,"Y",NextSec,NextSec
              DIR         "/W"

              Variable    PgmName,12
              Write       "Enter the name of the program to compile "
              ReadStr     PgmName
              TPC         PgmName, "/ddebug"

            This  third example of external  commands show the  use of the two
            predefined  variables,   ERRORLEVEL   and   DOSERROR.  After   the
            execution  of  "TestPgm",  we  examine  DOSError  to  find  if the
            program  executed OK (Possibly there  was not enough memory or the
            program  could not  be found on  the DOS path).  After determining
            that the  program executed  OK, we  examine the  exit code set  by
            "TestPgm"  to determine  the flow  of the  remainder of  our batch
            file. This exit code will be found in the variable ERRORLEVEL.

              Variable    MsgLine,80
              .
              .
              TestPgm     "Parm1 Parm2"
              Compare     DOSError,0,,,RanOK
              WriteLine   "TestPgm did not execute properly...terminating"
              Halt        DOSError
              Label       RanOK
              Compare     ErrorLevel,1,Chk2,,Option1
              Concat      MsgLine,"Unexpected return code of ",ErrorLevel
              Halt
              Label       Option1

            Note:  PowerBatch  programs may  be executed  by other  PowerBatch
            programs as  external commands.  An option of the  PowerBatch Halt
            command  is  to  set the  DOS  errorlevel.  You could  then  "pass
            parameters"  from  one  PowerBatch  program  to  another  via  the
            ERRORLEVEL variable.







            Page 14                     PowerBatch                     Page 14

            Command line  parameters may  be passed  to a compiled  PowerBatch
            program. These command line  parameters must be defined at compile
            time and  have special variable names. Up to 16  parameters may be
            passed  to  a  PowerBatch program  and  their  names are  CLP%1  -
            CLP%16.
            If you  wish  to  pass  parameters on  the  command line  to  your
            PowerBatch program, define the variables  in your source  and when
            you  run  the  compiled program,  any  parameters  entered  on the
            command line will be in the defined variable. Example:

              Source for SMARTCPY.PWR

              Variable    CLP%1,79    ;source file
              Variable    CLP%2,79    ;target file
              Variable    InChar,1
              ReadYN      "Shall I copy the files for you [Y/N] ",InChar
              Compare     InChar,"Y",NoCopy,NoCopy
              COPY        CLP%1, CLP%2

              SMARTCPY  FILE1 FILE2 will execute the DOS copy command and copy
            FILE1 to FILE2 if the user responds Y to the question.

            Changes To Your Computer's Environment Area
            Your  computer memory contains a special area of memory called the
            "Environment  Area".  This special  area  of memory  contains  the
            values  assigned to  variables  that  are  available  to  the  DOS
            operating system  or to  any application program  running in  your
            computer.   These  values   remain  unchanged  until   DOS  or  an
            application program changes  them as long  as the  power is on  to
            your  computer. DOS maintains  special values  in this  area which
            the operating  system uses. Your current  path and current  prompt
            configuration  are two of  these values. These values are normally
            set  with  the  DOS PROMPT  or  PATH  command. If  an  application
            program   like  a  compiled  PowerBatch  program  executes  a  DOS
            command,  it is done via a "shell" or another copy of your command
            processor  (normally COMMAND.COM)  which is started  to handle the
            execution  of these  DOS commands.  When a  shell is  started, DOS
            creates a  copy of  the environment  area for this  new shell  and
            makes   the   environment   values   available   to   the   shell.
            Unfortunately, when the shell is terminated (when the DOS  command
            is  complete) this copy of  the environment is erased from memory.
            If you execute a PROMPT, PATH or SET [Variable] command, the  copy
            of  the environment created for the shell to run the PROMPT, PATH,
            or  SET command is updated and immediately erased when the command
            is  finished.  PowerBatch  provides you  a  means  to  update  the
            permanent copy  of the environment area with the commands SETPATH,
            SETENV, PROMPT.

            Command Notation
            In  the  description of  the  commands  which follow,  that  which
            appears  within brackets  [ ] is  optional and all  other operands
            are required.  Any  time a  screen color  may  be  specified in  a







            Page 15                     PowerBatch                     Page 15

            command such as

              CLEARLINE LineNumber,ForegroundColor,BackgroundColor

            the  single attribute which is  used in many color conventions may
            be  substituted for  the  pair of  color attributes.  For example,
            foreground color 4 (red), background  color 1 (blue), is identical
            to  color attribute 20 and  the CLEARLINE command may be specified
            EITHER as 

              CLEARLINE 14,4,1
            or
              CLEARLINE 14,20

            to  clear  line  14 on  the  screen  to  red  foreground  on  blue
            background.  For  this reason  anytime  that  the operand  pair of
            foreground  color, background color  is required, the single color
            attribute  may be substituted for  the pair. The compiler will not
            detect  missing background  color attributes but  will assume that
            the foreground is the composite value.

            Command Syntax
            The  number which  is immediately  under the  command name  is the
            line  number in  the DEMO1 file (printed  in the examples section)
            which uses this command.

            ?COLOR        VarName1, VarName2, VarName3
            (25) Retrieve  the current  color attributes  from the  system and
                    place  the  current  foreground  color  in  VarName1,  the
                    current  background color  in VarName2,  and the composite
                    attribute in VarName3.

                 Ex:   Variable ForeColor,3
                       Variable BackColor,3
                       Variable ColorAttr,3
                       ?Color   ForeColor,BackColor,ColorAttr

                    Retrieve  the current foreground, background and composite
                       color  values and  place  in  the variables  ForeColor,
                       BackColor, and ColorAttr repectively.

            ?CURRDIR      VarName1, VarName2
                 Retrieve the current drive and  directory from the system and
                    place  the  current  drive in  VarName1  and  the  current
                    directory  in VarName2. The  contents of VarName1 prior to
                    execution of this command  control which currently  logged
                    drive  is searched for  the currently logged directory. If
                    ?CurrDir finds a valid drive letter  in the first position
                    of VarName1,  then the  contents of VarName2  will be  the
                    currently  logged directory  of that  drive. If  the first
                    position  of  VarName1  does not  contain  a  valid  drive
                    letter, then  VarName2 will contain  the currently  logged







            Page 16                     PowerBatch                     Page 16

                    directory  of the  current drive. In  either case VarName1
                    will  contain  the drive  and  VarName2 will  contain  the
                    directory.

                 Ex:   Variable    CurrDrive,2
                       Variable    CurrDir,79
                       Set         CurrDrive,"A"
                       ?CurrDir    CurrDrive,CurrDir
                       Set         CurrDrive,""
                       ?CurrDir    CurrDrive,CurrDir

                 In the first usage of ?CurrDir,  assuming that the  currently
                    logged directory  on the  A drive is  the root  directory,
                    CurrDrive  will contain  "A" and CurrDir  will contain "\"
                    after  the  execution of  ?CurrDir. In  the second  usage,
                    assuming that the  currently logged  drive is  D: and  the
                    currently   logged   directory  on   the   D:   drive   is
                    "\UTIL\EXEC", CurrDrive will contain  "D" and CurrDir will
                    contain "\UTIL\EXEC" after the execution of ?CurrDir.

            ?DATE         VarName1, VarName2, VarName3, VarName4
            (26) Retrieve  the current date from  the system and place the day
                    of  the week  in VarName1, the month  in VarName2, the day
                    in VarName3, and  the year in VarName4. VarName1 should be
                    defined  as 9  long, VarName2 and VarName3  as 2 long, and
                    VarName4 as 4 long.

                 Ex:   Variable DOW,9
                       Variable Mo,2
                       Variable Da,2
                       Variable Yr,4
                       ?Date    DOW,Mo,Da,Yr

                    Retrieve  the current  date and place  the component parts
                       in  their respective  variables. Place  the day  of the
                       week  in DOW (ie Saturday),  the month number in Mo (ie
                       06), the day of the  month in Da (ie  29), and the year
                       in Yr (ie 1990).







            Page 17                     PowerBatch                     Page 17

            ?DIREXIST     VarName1, Label1 [,Label2]
            (159)         Literal1,Label1 [,Label2]
                 Check  the system for  the existance  of the  directory whose
                    name appears in VarName1 or in Literal1. If the  directory
                    exists  jump to the  command immediately following Label1,
                    if the  directory  does  not exist,  jump to  the  command
                    immediately following Label2.

                 Ex:   ?DirExist   InpStr,DirOk,BadDir
                       ?DirExist   "C:\",DirOK,BadDir
                       ?DirExist   InpStr,,BadDir (next command if exists)
                       ?DirExist   InpStr,DirOk   (next command if not exist)
                 In  the first example if  the contents of the variable InpStr
                    exists then  goto label DirOK, if it does not  exist go to
                    the  label BadDir. In the  second example we check for the
                    existance  of  a literal  with a  value of  "C:\". In  the
                    third example, if the  contents of InpStr  exist we  "fall
                    through"  to the  next instruction, if  the directory does
                    not  exist  we jump  to the  label BadDir.  In the  fourth
                    example, if the directory  name in InpStr  exists, we jump
                    to  the label DirOK, if  it does not exist we fall through
                    to the next command.

            ?DISKSPACE    VarName1, VarName2, VarName3
            (184)         Literal1, VarName1, VarName2
                 Query  the disk  Drive specified  by the  first  character of
                    Varname1 and  place the  total disk capacity  in bytes  in
                    VarName2  and  the unused  bytes  in VarName3.  Since  the
                    command looks at only  the first character of VarName1 (or
                    Literal1),  VarName1   may   contains   strings  such   as
                    "C:\UTIL".
                 Ex:   Variable    DirName,79
                       ReadStr     DirName  (user enters "c:\util")
                       Upper       DirName  (changes to "C:\UTIL")
                       ?DiskSpace  DirName,TotSpace,FreSpace

                       ?DiskSpace  "A",TotSpace,FreSpace

            ?DRIVEEXIST   VarName1, Label1 [,Label2]
            (145)         Literal1, Label1 [,Label2]
                 Check  the system  for VarName1 as  a valid drive  letter. If
                    the  drive  is  valid, jump  to  the  command  immediately
                    following  Label1, if  the drive is not  valid jump to the
                    command immediately following Label2.

                 Ex:   ?DriveExist DrvNum,GoodDrv,BadDrv
                       ?DriveExist "A",GoodDrv,BadDrv
                       ?DriveExist DrvNum,,BadDrv
                       ?DriveExist DrvNum,GoodDrv







            Page 18                     PowerBatch                     Page 18

            ?ENVSTR       VarName1, VarName2
                          Literal1, VarName2
                 Retrieve  the contents  of any environment  variable from the
                    system  environment  area.  The  name  of  the environment
                    variable  is placed  in VarName1  or entered as  a literal
                    and  the  contents of  the  environment variable  will  be
                    placed  in VarName2. Ensure that VarName2 has been defined
                    sufficiently  long enough  to contain the  contents of the
                    environment  variable. If VarName2 is not long enough, the
                    environment variable will be truncated.

                 Ex:   Variable    EnvValue,255
                       Variable    EnvName,4,"path"
                       ?EnvStr     "prompt", EnvValue
                       ?EnvStr     EnvName, EnvValue

            ?FILEEXIST    VarName1, Label1 [,Label2]
            (172)         Literal, Label1 [,Label2]
                 Check  the system  for the specified  file name. If  the file
                    exists, jump to the command  immediately following Label1,
                    if  the  file  does  not  exist,   jump  to  the   command
                    immediately following Label2.

                 Ex:   ?FileExist  FileName, Label1, Label2
                       ?FileExist  "C:\AUTOEXEC.BAT",StartOK,NoStart
                       ?FileExist  FileName,,Label2
                       ?FileExist  FileName,Label1

            ?INPATH       VarName1, Label1 [,Label2]
                          Literal1, Label2 [,Label2]
                 Compare the contents  of VarName1 to the system search  path.
                    If  VarName1  is contained  within the  path  jump to  the
                    command  immediately  following Label1,  if the  file does
                    not  exist  jump  to  the  command  immediately  following
                    Label2. Use this command  to determine if  a directory  is
                    specified in the DOS search path.

                 Ex:   DOS search path contains "C:\UTIL;C:\WORDPROC;D:\"
                       Variable    InString,79
                       Write       "Enter your directory name "
                       ReadStr     InString (user enters "c:\wordproc")
                       Upper       InString (change to "C:\WORDPROC")
                       ?InPath     InString,PathOK,BadPath

                       ?InPath     "C:\UTIL",,BadPath   (compare literal)

            ?TIME         VarName1
            (27) Retrieve  the  current time  from  the  system  and place  in
                    VarName1. The format of the time is hh:mm:ss xm.  VarName1
                    should be defined as 11 long.
                 Ex:   Variable CurrTime,11
                       ?Time    CurrTime (now contains 11:24:14 am)







            Page 19                     PowerBatch                     Page 19



            BEEP          VarName1, VarName2, VarName3
            (149)         Literal1, Literal2, Literal3
                 Sound  the system speaker  with a tone of VarName1 frequency,
                    for  a length  of VarName2 tenths of  a second, and repeat
                    VarName3 times.
                 Ex:   Beep  800,5,3
                       Beep  ErrFreq,BeepLen,ErrTimes
                    The first  example sound the system speaker at a frequency
                       of 800 hz  for half a second (.5) and repeats twice for
                       a  total of 3 times.  The second example will sound the
                       system speaker at a frequency equal to the contents  of
                       the  variable ErrFreq for BeepLen tenths of a second(s)
                       for a total of ErrTimes.

            BLINK
            (82)
                 Cause  all text that is written to the  screen to blink using
                    the  current  color   attributes  last   defined  in   the
                    processing  of the batch program. This command in "undone"
                    by using NORMAL.

                 Ex:   Variable MsgClear,25."                         "
                       Blink
                       WriteAt  15,4,"Not a valid entry"
                       Normal
                       Wait     35
                       WriteAt  15,4,MsgClear
                    Write the message "Not a valid entry" at  column 15 on row
                       4  using the  current color definition.  Reset the text
                       color  to  the  value  it  contained  before specifying
                       blinking text. Wait 3.5 seconds and clear the message.

            BOX1          VarNm1, VarNm2, VarNm3, VarNm4, VarNm5 [,VarNm6]
            (36)          Lit1, Lit2, Lit3, Lit4, Lit5 [,Lit6]
                 Draw  a  box  (frame) on  the  screen  whose upper  left  co-
                    ordinates  (X,Y) are VarNm1, VarNm2, and whose lower right
                    co_ordinates  (X,Y) are VarNm3, VarNm4. Draw the box using
                    a  line  in foreground  color VarNm5  on background  color
                    VarNm6.

                 Ex:   Variable ULX,2,5     ;upper left col value
                       Variable ULY,2,3     ;upper left row value
                       Variable LRX,2,75    ;lower right col value
                       Variable LRY,2,20    ;lower right row value
                       Variable BoxFore,2,4 ;foreground color red
                       Variable BoxBack,2,0 ;background color black
                       Box1  ULX, ULY, LRX, LRY, BoxFore, BoxBack
                       Box1  5,3,75,20,7,0
                       Box1  5,3,75,20,112







            Page 20                     PowerBatch                     Page 20

                    The  first  example  draws  a  box whose  upper  left  co-
                       ordinates  are the  contents of  the variables  ULX and
                       ULY  and whose lower left co-ordinates are the contents
                       of  the variables  LRX and LRY. The  box border will be
                       the  contents  of  BoxFore (red)  on  a  background  of
                       BoxBack  (black).  The  interior of  the  box  will  be
                       unchanged  (ie it  is  not  cleared  nor is  the  color
                       changed).  The second  example draws a  box whose upper
                       left  co-ordinates are  5,3 and  whose lower  right co-
                       ordinates are  75,20. The box  border is drawn in white
                       on  black. The third example  draws a box with the same
                       co-ordinates  and uses the composite color attribute of
                       112 (white on black). See ClearBox command.

            BREAKON
                 Provides a  capability to exit  from a  PowerBatch program by
                    pressing  the  combination  of  keys  (Ctrl  -  Break)  or
                    (Ctrl - C). The default value  set at the beginning of any
                    PowerBatch  program  is  BreakON.  To  keep  a  user  from
                    exiting   a  running   PowerBatch  program,   execute  the
                    BreakOFF  command. If sections  of the  program are  to be
                    protected and  other sections not,  surround the  sections
                    with pairs of BreakON...BreakOFF commands.

            BREAKOFF
                 Disables   the  ability  to  stop  a  PowerBatch  program  by
                    pressing  the   (Ctrl  -   Break)  or  (Ctrl   -  C)   key
                    combinations.  The default  value set at  the beginning of
                    any PowerBatch program is BreakON.

            CENTER        VarName1, VarName2
            (42)          Literal1, Literal2
                 Center the text in VarName1 on line VarName2.

                 Ex:   Variable InpStr,25,"PowerBatch"
                       Center   "PowerBatch",2
                       Center   InpStr,2

                    Both  versions  of  this  example  will  center  the  name
                       "PowerBatch" on line 2 of the screen.

            CLEAR         VarName1 [,VarName2]
            (28)          Literal1 [,Literal2]
                 Clear  the  entire screen  to foreground  color VarName1  and
                    background color VarName2.

                 Ex:   Variable ColorAttr,3,112   ;define white on black
                       Clear    4,1
                       Clear    112
                       Clear    ColorAttr
                    The  first example  clears the screen to  red on blue. The
                       second and third examples clear  the screen to white on







            Page 21                     PowerBatch                     Page 21

                       black.

            CLEARBOX      VarNm1, VarNm2, VarNm3, VarNm4, VarNm5 [,VarNm6]
            (37)          Lit1, Lit2, Lit3, Lit4, Lit5 [,Lit6]
                 Clear  the interior of  the box whose upper left co-ordinates
                    (X,Y)  are  VarNm1,  VarNm2  and  whose  lower  right  co-
                    ordinates  (X,Y) are VarNm3, VarNm4. Clear the interior of
                    the  box to  foreground color VarNm5  and background color
                    VarNm6. This command  clears the "inside" of the box,  not
                    the lines which describe the box.
                 Ex:   Variable ULX,2,5     ;upper left col value
                       Variable ULY,2,3     ;upper left row value
                       Variable LRX,2,75    ;lower right col value
                       Variable LRY,2,20    ;lower right row value
                       Variable BoxFore,2,4 ;foreground color red
                       Variable BoxBack,2,0 ;background color black
                       Box1     ULX, ULY, LRX, LRY, BoxFore, BoxBack
                       ClearBox 5,3,75,20,112

                    In  this example we define  the upper right and lower left
                       co-ordinates of the box as well  as the colors  BoxFore
                       and  BoxBack. We  draw  the box  with a  red line  on a
                       black  background.  The  ClearBox  command  clears  the
                       interior of the box to white on black.

            CLEARLINE     VarName1, VarName2 [,VarName3]
                          Literal1, literal2 [,Literal3]
                 Clear the  line number specified  by VarName1 to a foreground
                    color of VarName2 and a background color of VarName3.

                 Ex:   Variable    Red,1,4
                       Variable    Blue,1,1
                       Variable    RedOnBlue,2,20
                       Variable    CurrLine,2,12
                       ClearLine   12,Red,Blue
                       ClearLine   CurrLine,RedOnBlue

                    Both  examples of the  ClearLine command  clear line 12 on
                       the  screen to red foreground color and blue background
                       color.

            COLOR         VarName1 [,VarName2]
            (38)          Literal1 [,Literal2]
                 Set  the  default  color to  foreground  color  VarName1  and
                    background color  VarName2 or optionally  set the  default
                    color attribute to VarName1.
                 Ex:   Variable RedOnBlue,2,20
                       Color    4,1
                       Color    MenuClr

                    Both  examples set  the default color  to red on  blue for
                       any  text written to  the screen without specific color







            Page 22                     PowerBatch                     Page 22

                       instructions.

            COMPARE    VarName1, VarName2, Label1 [,Label2] [,Label3]
            (30)       Literal1, Literal2, Label1 [,Label2] [,Label3]
                 Compare   the  contents  of   VarName1  to  the  contents  of
                    VarName2.  If VarName1  greater than VarName2  jump to the
                    statement  following   Label1.  If   VarName1  less   than
                    VarName2  jump  to  the  statement  following  Label2.  If
                    VarName1  equal VarName2  jump to  the statement following
                    Label3.   If  the  contents  of  the  first  two  operands
                    (VarName1,  VarName2, Literal1,  or Literal2)  are numeric
                    then   a  numeric   compare  is  performed   otherwise  an
                    alphabetic   compare   is  made.   (If   19   is  compared
                    alphabetically to  2, then 2 is greater than 19;  if it is
                    compared numerically, 19 is greater than 2.)

                 Ex:   Variable InChar,1
                       Variable Yes,1,"Y"
                       Variable No,1,"N"
                       GoToXY   4,23
                       ReadYN   "Incorrect entry...Continue [Y/N] "
                       Compare  InChar,"Y",NoIn,NoIn,YesIn

                       Compare  InChar,Yes,,,YesIn   (Not Y falls thru)

                       Compare  InChar,"Y",NoIn,NoIn (Y falls thru)

                    In  the  first example  of the  Compare command,  variable
                       InChar  is  compared  to  literal  "Y".  If  InChar  is
                       greater than  "Y" then  the program  will  jump to  the
                       label NoIn;  if InChar  is less than  "Y", the  program
                       also  jumps to  the label NoIn;  if InChar is  equal to
                       "Y",  the program will continue processing at the label
                       named  YesIn.  In  the  second   compare  command,  the
                       variable  InChar is compared  to the variable Yes which
                       has an  assigned value of "Y".  If the variable  InChar
                       contains anything but  "Y", the program  continues with
                       the  next instruction after  the compare command (it is
                       said  to  fall through);  if InChar  contains "Y",  the
                       program  will jump  to the  label YesIn.  In the  third
                       compare  command, variable  InChar is  compared  to the
                       literal  "Y".  If  the  variable  InChar  contains  "N"
                       (ReadYN  prevents any  entry but  Y  or N)  the program
                       jumps  to the  label NoIn  otherwise it  continues with
                       the instruction after the compare command.







            Page 23                     PowerBatch                     Page 23

            CONCAT     VarName1, VarName2 [,VarName3]
            (116)      VarName1, Literal1 [,Literal2]
                 Concatenate  the  string  in  VarName2  with  the  string  in
                    VarName3 and place the result in VarName1. If VarName3  is
                    not  present then concatenate  the string in VarName1 with
                    the string in VarName2 and place the result in VarName1.
                 Ex:   Variable    OutMsg,78
                       Variable    ErrMsg," is not a valid Drive letter."
                       Variable    DriveLtr,1
                       WriteAt     6,17,"Enter your source drive letter "
                       ReadUpKey   DriveLtr
                       ?DriveExist DriveLtr,DriveOK
                       Concat      OutMsg, "[19] ", DriveLtr
                       Concat      OutMsg, " is not a valid Drive letter."
                       WriteAt     5,23,OutMsg

                    In  this example we  ask the  user to input  a valid drive
                       letter  and  verify  this  drive  with  the ?DriveExist
                       command.  If  the drive  is  not valid  we  concatenate
                       "[19]"  (the  error  number)  plus   the  drive  letter
                       entered by the user into the  variable OutMsg. We  then
                       concatenate the error  message (" is not a valid  Drive
                       letter.")  onto  the  contents  of  OutMsg. The  result
                       would  be something  like "[19] L is  not a valid Drive
                       letter."

            GOTO       Label1
            (152)
                 Jump to the statement identified as command label Label1.
                 Ex:   GoTo  Error
                       GoTo  EndOfPgm

            GOTOXY     VarName1, VarName2
            (57)       Literal1, Literal2
                 Move  the cursor to the  column (X) specified in VarName1 and
                    row (Y) specified in VarName2.
                 Ex:   Variable CurrX,2
                       Variable CurrY,2
                       GoToXY   CurrX, CurrY
                       GoToXY   12,6

                    In  the first example the  cursor is moved to the location
                       specified  by the contents of variable CurrX and CurrY.
                       In  the second  example,  the cursor  is  moved  to the
                       location specified by two literals "12" and "6".







            Page 24                     PowerBatch                     Page 24

            HALT       VarName1
                       Literal1
                 Halt the  batch file  processing and  set  DOS errorlevel  to
                    VarName1.
                 Ex:   Variable Error14,2,14   ;define Error14 as "14"
                       Halt     99
                       Halt     Error14

                    In the  first usage  of the Halt  command, the  PowerBatch
                       program  is halted and the DOS errorlevel is set to 99.
                       In  the second usage the  program is halted and the DOS
                       errorlevel  is set to  the contents of variable Error14
                       ("14").

            LABEL      LabelName
            (34) Define  a location  in the list of  commands that will enable
                    execution  to  begin  immediately following  this  command
                    without    necessarily   having   executed   the   command
                    immediately  prior to the  Label. Jump immediately to this
                    location  in  the command  stream. See  the discussion  on
                    labels at the beginning of this section.

                 Ex:   Label    MatchErr
                       Label    EndOfPgm

            LENGTH     VarName1, VarName2
            (129)      VarName1, Literal1
                 Calculate the  length of the  string in variable VarName2 and
                    place the result in VarName1.
                 Ex:   Variable InString
                       Variable StrLen
                       WriteAt  12,14,"Enter your current directory "
                       ReadStr  InString (user enters c:\util)
                       Length   StrLen, InString  (StrLen will contain 7)

            LOWER      VarName1
            (104)
                 Change the alphabetic characters in VarName1 to lower case.
                 Ex:   Variable InString,25
                       ReadStr  InString (user enters C:\UTIL)
                       Lower    InString (now contains c:\util)

            MIDSTRING  VarName1, VarName2, VarName3, VarName4
            (114)      VarName1, Literal1, Literal2, Literal3
                 Extract  a substring of VarName2 beginning at offset VarName3
                    into VarName2  for  a length  of VarName4  and place  this
                    substring in VarName1.

                 Ex:   Variable Path,79
                       WriteAt     1,2,"Enter Drive and Directory name "
                       ReadStr     Path  (user enters C:\UTIL)
                       MidString   Drive,Path,1,2 (extract C: from C:\UTIL)







            Page 25                     PowerBatch                     Page 25


            NORMAL
            (84) Change  the current color attribute(s) back to the definition
                    prior to the execution of a BLINK or REVERSE command.

                 Ex:   Color    20    ;set default color to red on blue
                       Blink          ;changes to blinking red on blue (148)
                       WriteAt  2,24,"Incorrect...re-enter!"
                       Normal         ;resets color to 20
                       Beep     800,8
                       Wait     35    ;pause 3.5 seconds
                       WriteAt  2,24,"                    "   ;clear     error
            msg

                    This  is an example of  a typical error routine. The color
                       attribute  is  changed   to  blinking  with  the  Blink
                       command.  The error  message is  written and  the color
                       attribute  is changed  back to its  original value with
                       the  Normal command. The  speaker is "beeped" and after
                       a wait  of 3.5  seconds, the  error message  is removed
                       from the screen.

            PROMPT     VarName1
                       Literal1
                 Change  the  current  value  of   the  prompt  to  the  value
                    specified in VarName1 or in Literal1.

                 Ex:   Prompt      "$p$g"
             
            READKEY    VarName1
            (59) Read a single key  from the keyboard and place the result  in
                    VarName1.

                 Ex:   Variable CharIn,1
                       GoToXY   1,14
                       Write    "Enter the drive letter for output ",4,1
                       ReadKey  CharIn

            READSTR    VarName1
            (109)
                 Read  a string of characters from the keyboard until the user
                    presses  the enter  key. Any  number of  characters may be
                    read up  to the maximum  length specified  for VarName1 in
                    the Variable statement.

                 Ex:   Variable    InString,12
                       ReadStr     InString    (12 chars max will be read)







            Page 26                     PowerBatch                     Page 26

            READUPKEY  VarName1
            (144)
                 Read a single character from the  keyboard, changing the case
                    of any alphabetic  character to upper case and place  this
                    upper case character in VarName1.

                 Ex:   ReadUpKey   CharIn

            READYN     VarName1, VarName2
            (29)       Literal1, VarName2
                 Write the  message found  in VarName1  at the  current cursor
                    location and wait for a  single key to be entered from the
                    keyboard. Force the user to enter either  a "Y" or "N" and
                    place the upper case "Y" or "N" in VarName2.

                 Ex:   Variable    Msg4,35,"Invalid filename...Continue  [Y/N]
            "
                       ReadYN      "Invalid     filename...Continue      [Y/N]
            ",CharIn

                       ReadYN      Msg4,CharIn

                 In  both usages  of the ReadYN command,  the message "Invalid
                    filename...Continue  [Y/N] "  will  be displayed  and  the
                    program  will wait  for a response  from the user.  If the
                    user enters any characters  other than "Y",  "y", "N",  or
                    "n"  the  system  speaker  will  sound  and  the  user  is
                    prompted  again  for  input. At  the  completion  of  this
                    command,  the variable  CharIn will contain  either "Y" or
                    "N" (always upper case).

            REVERSE
                 Change  the  text  attributes to  "reverse  video".  This  is
                    accomplished  by swapping  the foreground  and  background
                    attributes. This command is "undone" by using NORMAL.

                 Ex:   Color    20    ;red on black
                       Reverse        ;color is changed to black on red
                       WriteAt  1,15,"Press Escape To Continue"
                       Normal         ;color is now red on black

            SETENV     VarName1, VarName2
                       Literal1, Literal2
                 Set  the  value  of the  environment  variable  specified  in
                    VarName1  or Literal1  to the value  specified in VarName2
                    or Literal2.

                 Ex:   Variable    VarName,7,"MONITOR"
                       Variable    VarValue,5,"color"
                       SetEnv      VarName, VarValue
                       SetEnv      "Monitor","color"







            Page 27                     PowerBatch                     Page 27

            SETPATH    VarName1
                       Literal1
                 Set  the current  path to the value  specified in VarName1 or
                    the value specified in Literal1.

                 Ex:   Variable NewPath,40,"d:\;c:\util\exec;c:\dos"
                       SetPath  NewPath
                       SetPath  "d:\;c:\;"

            SETVAR     VarName1, VarName2
            (31)       VarName1, Literal1
                 Set the value of VarName1 to the contents of VarName2.

                 Ex:   Variable ErrCode,3
                       Variable FileName,79
                       SetVar   ErrCode,99
                       SetVar   FileName,"C:\CONFIG.SYS"

                    In the  first usage  of the  SetVar command, the  variable
                       ErrCode  is set  to "99" and the  second usage sets the
                       variable FileName to "C:\CONFIG.SYS"

            UPPER      VarName1
            (101)
                 Change the alphabetic characters in VarName1 to upper case.

                 Ex:   Variable InString,25
                       WriteAt  14,25,"Enter your directory name "
                       ReadStr  InString    (user enters c:\util)
                       Upper    InString    (changed to C:\UTIL)
                       ?InPath  InString,GoodDir  (path is always upper case)

                    In this example,  the user is prompted  for a path name to
                       be  entered. The  path name  is to  be compared  to the
                       system  path for  validity. Since  the contents  of the
                       system path  are always  in upper case,  we change  the
                       InString variable to upper case prior to comparision.

            VARIABLE   VariableName, MaxLength [,InitialValue]
            (1)  Define  a variable  to PowerBatch.  All variables  used in  a
                    PowerBatch  program must have been defined with a VARIABLE
                    command. VariableName is  the name which  you give to this
                    variable  and the means by which you refer to the variable
                    in other PowerBatch  statements. This variable may contain
                    any  number of  characters up to  MaxLength and is  set to
                    the  initial value of  InitialValue. See the discussion on
                    variables at the beginning of this section.
                 Command line  parameters  passed  to  a  compiled  PowerBatch
                    program must  be defined  as variables. Up  to 16  command
                    line  variables  may be  passed to  a compiled  PowerBatch
                    program  and they  are defined  as CLP%1..CLP%16.  See the
                    example MOVE1 or MOVE2.







            Page 28                     PowerBatch                     Page 28


                 Ex:   Variable    DayOfWeek,9
                       Variable    ErrMsg1,25,"Invalid directory name."
                       Variable    InString,80,""
                       Variable    PauseTime,2,50
                       Variable    CLP%1,12       (command line parameter %1)

            WAIT       VarName1
            (119)      Literal1
                 Cause the  execution  of a  PowerBatch program  to pause  for
                    VarName1 tenths of a second(s).

                 Ex:   Wait        5           (pause half a second)
                       Wait        PauseTime   (pause 5 seconds)

            WRITE      VarName1, VarName2 [,VarName3]
            (58)       Literal1, Literal2 [,Literal3]
                 Write the string contained in VarName1 at the current  cursor
                    location using  color attributes  foreground VarName2  and
                    background  VarName3.  In  the  absence  of  VarName2  and
                    VarName3  use the current  color attributes. The string is
                    not  followed by a carriage return, line feed pair (ie the
                    cursor  is not  moved to  the first  position of  the next
                    line).

                 Ex:   Write    "Enter your password ",0,7
                       Variable ErrMsg1,25,"Invalid directory name."
                       Variable ErrClr,3,112
                       Write    ErrMsg1,ErrClr

            WRITEAT    VarName1, VarName2, VarName3 [,VarName4] [,VarName5]
            (46)       Literal1, Literal2, Literal3 [,Literal4] [,Literal5]
                 Write   the  string  contained  in  VarName3  at  column  (X)
                    contained  in VarName1  and row (Y)  contained in VarName2
                    using   the  foreground   color  attribute   contained  in
                    VarName4 and the  background color attribute contained  in
                    VarName5.  In the  absence of  VarName4 and  VarName5, use
                    the current color   attributes. The string is not followed
                    by  a carriage  return, line feed  pair (ie the  cursor is
                    not moved to the first position of the next line).
                 Ex:   Variable TitleClr,3,112
                       Variable CurrX,2
                       Variable CurrY,2
                       Variable CompName,25,"The ABC Company"
                       WriteAt  15,3,"The ABC Company",TitleClr
                       WriteAt  CurrX,CurrY,CompName

                    In the  first usage  of the  WriteAt  command the  literal
                       "The  ABC Company"  is written at column  15, row 3. In
                       the  second  usage,   the  contents  of  the   variable
                       CompName  ("The ABC Company")  is written at the column
                       location specified  by the contents  of variable  CurrX







            Page 29                     PowerBatch                     Page 29

                       and at  the row  location specified by the  contents of
                       variable CurrY.

            WRITELINE  VarName1 [,VarName2]
            (195)
                 Write  the string contained in VarName1 beginning in location
                    1 of the  line number  specified in  VarName2. Follow  the
                    string  with a carriage return line feed pair (ie move the
                    cursor  to the  first position of  the next line).  In the
                    absence  of  VarName2  write the  string  at  the  current
                    cursor location.

                 Ex:   WriteLine   "Please read these instructions ",7
                       WriteLine   Msg5

                    In the first usage of  WriteLine the message  "Please read
                       these  instructions " is  written beginning in column 1
                       of  row  7. In  the second  usage the  contents of  the
                       variable  Msg5  is  written beginning  at  the  current
                       cursor  location. In both cases a carriage return, line
                       feed  (position  cursor at  the first  position of  the
                       next line) is written.







            Page 30                     PowerBatch                     Page 30

                                     Command Summary

            ?COLOR        Var1, Var2, Var3 
            ?CURRDIR      Var1, Var2
            ?DATE         Var1, Var2, Var3, Var4
            ?DIREXIST     Var1, Lab1 [,Lab2]  or Lit1, Lab1 [,Lab2]
            ?DISKSPACE    Var1, Var2, Var3
            ?DRIVEEXIST   Var1, Lab1 [,Lab2] or Lit1, Lab1 [,Lab2]
            ?ENVSTR       Var1, Var2 or Lit1, Var2
            ?FILEEXIST    Var1, Lab1 [,Lab2] or Lit1, Lab1 [,Lab2]
            ?INPATH       Var1, Lab1 [,Lab2] or Lit1, Lab1 [,Lab2]
            ?TIME         Var1
            BEEP          Var1, Var2, Var3 or Lit1, Lit2, Lit3
            BLINK
            BOX1          Var1,  Var2, Var3,  Var4, Var5 [,V6]  or Lit1, Lit2,
                          Lit3, Lit4, Lit5, [,Lit6]
            BREAKON
            BREAKOFF
            CENTER        Var1, Var2 or Lit1, Lit2
            CLEAR         Var1 [,Var2] or Lit1 [,Lit2]
            CLEARBOX      Var1,  Var2, Var3,  Var4, Var5 [,V6]  or Lit1, Lit2,
                          Lit3, Lit4, Lit5 [,Lit6]
            CLEARLINE     Var1, Var2 [,Var3] or Lit1, Lit2, Lit3
            COLOR         Var1 [,Var2] or Lit1 [,Lit2]
            COMPARE       Var1,  Var2, Lab1  [,Lab2]  [,Lab3]  or Lit1,  Lit2,
                          Lab1 [,Lab2] [,Lab3]
            CONCAT        Var1, Var2 [,Var3] or Var1, Lit2 [,Lit3]
            GOTO          Lab1
            LENGTH        Var1, Var2 or Var1, Lit1
            LOWER         Var1 
            MIDSTRING     Var1, Var2, Var3, Var4 or Var1, Var2, Lit1, Lit2
            NORMAL
            PROMPT        Var1 or Lit1
            READKEY       Var1
            READSTR       Var1
            READUPKEY     Var1
            READYN        Var1, Var2 or Lit1, Var1
            REVERSE
            SETENV        Var1, Var2 or Lit1, Lit2
            SETPATH       Var1 or Lit1
            SETVAR        Var1, Var2 or Var1, Lit1
            UPPER         Var1
            VARIABLE      VariableName, MaxLength [,InitialValue]
            WAIT          Var1 or Lit1
            WRITE         Var1, Var2 [,Var3] or Lit1, Lit2 [,Lit2]
            WRITEAT       Var1,  Var2, Var3  [,Var4]  [,Var5]  or Lit1,  Lit2,
                          Lit3, [,Lit4] [,Lit5]
            WRITELINE     Var1 [,Var2] or Lit1 [,Lit2]







            Page 31                     PowerBatch                     Page 31

            ERRORLEVEL    Predefined  variable  containing the  value  of  the
                          exit code set by the previous program or command.

            DOSERROR      Predefined variable  containing the  last set  value
                          of the operating system error code.







            Page 32                     PowerBatch                     Page 32

                                    Compilation Errors

            Compilation  errors are printed on  the screen and also written in
            a  file named  POWERBAT.ERR (If  you have  a split  screen editor,
            view  the source  in one screen part  and the errors  in the other
            part).  If  the  source line  is  available,  the source  line  is
            printed  above the error preceded by the line number count. Source
            lines  are not  available during the  second pass of  the compiler
            which may generate "Label not defined" and "Variable not  defined"
            errors.

              "Not a valid command" -  This error is generated  when the first
                 word  on the  command line  is not  a PowerBatch  command and
                 contains more than 8 characters.

                 Example:
                    13 Directory name checked here.
                    [DIRECTORY] Not a valid command

                    Probably should be ;Directory name checked here

              "Missing variable" -  A command contains less than the  required
                 number of operands.

                 Example:
                    21 ?Color   ForeColor,BackColor
                    [] Missing variable

                    Variable for the composite color byte is missing.

              "Expected a variable  Name" - A string  was found in an  operand
                 that may contain only a variable name.

                 Example:
                    10 ?Time "Current Time"
                    [Current Time] Expected a variable name

                    The current time may only be placed in a variable.

              "Quoted   literal  not   terminated"  -   A  single   quote  was
                 encountered within a source line.

                 Example:
                    9 Center "Move Command,5
                    [] Quoted literal not terminated

                    Closing quote should precede comma.







            Page 33                     PowerBatch                     Page 33

              "Invalid  max  length  specified"  -  The second  operand  of  a
                 variable  definition should specify the maximum length of the
                 variable. The value found was not numeric.

                 Example:
                    3 Variable  CompName,"The ABC Company"
                    [The ABC Company] Invalid max length specified

              "Variable not defined" -  A reference to a variable was made  in
                 the  source file  but the variable  was not defined  with the
                 Variable command.

                 Example:
                    [CURRDATE] Variable not defined

              "Duplicate  variable" - The same variable name has appeared 2 or
                 more times in a Variable definition statement.

                 Example:
                    7 Variable  CompName,25
                    [COMPNAME] Duplicate variable

              "Duplicate label" - The same  label name has appeared  2 or more
                 times in a Label definition statement.

                 Example:
                    16 Label    Step2
                    [STEP2] Duplicate label

              "External command >" - This  is not an error  message, but is  a
                 check  to alert  you to  each command  found in  a PowerBatch
                 source  file  that will  be treated  as an  external command.
                 External  commands are DOS intrinsic commands, .COM, and .EXE
                 commands or programs (even PowerBatch  compiled programs) and
                 .BAT  (standard DOS  batch files) that are  to be executed by
                 PowerBatch.

                 Example:
                    External command > 12 DIR     (DOS directory command)
                    External command > 29 MYPROG  (Executable module MYPROG)







            Page 34                     PowerBatch                     Page 34

                           Removing PowerBatch From Your System

            While  we  believe  that  PowerBatch  is  a  batch  compiler  that
            everyone should own, we recognize that there are some who feel  it
            is not a  program they will use on  a regular basis. For those  of
            you in that minority,  we have provided a program to easily remove
            all PowerBatch modules  from your  system. To  remove all  modules
            from  your system  that were  supplied on  the  PowerBatch install
            disk, enter

              DELETEPB <enter>

            You  will be asked  if you wish  to remove  all PowerBatch modules
            from  the  currently logged  disk. If  this is  the correct  disk,
            enter Y. If it is  not the correct disk, enter  N and the  program
            will  terminate. (You  should  move  to  the disk  containing  the
            PowerBatch  modules.)  You  will next  be  asked  if you  wish  to
            confirm  each deletion. If you reply (Y)es, each time a PowerBatch
            module is found,  you will  be asked  if you  wish to delete  this
            module. If  you reply (N)o,  the modules will  be deleted as  they
            are found without your intervention.







            Page 35                     PowerBatch                     Page 35

                                         Examples

            The source for  these examples is  contained on  your installation
            disk. These examples may be compiled using the POWERMAK command.

            Example:      POWERMAK DEMO1 <enter>

                                          DEMO1

            This  listing  for  DEMO1  contains  line  numbers  preceding  the
            PowerBatch  command. These line numbers are for reference purposes
            within the  documentation and  are not  contained  in the  source.
            Line numbers are in fact not allowed in any PowerBat source file.

               1     Variable          Fore,1           ;save area for initial
            colors
               2    Variable        Back,1
               3    Variable        ColorAttr,1
               4    Variable        CharIn,1      ;for user responses
               5    Variable        RedOnGray,3,116
               6    Variable        RedOnBlack,3,4
               7    Variable        YelOnBlue,3,30
               8    Variable        YelOnGray,3,126
               9    Variable        BlueOnGray,3,113
              10    Variable        DOW,9                ;for date command
              11    Variable        Mo,2
              12    Variable        Da,2
              13    Variable        Yr,4
              14    Variable        CurrTime,11   ;for current time
              15    Variable        DirName,78    ;for user entered dir name
              16    Variable        FileName,78   ;for user entered file name
              17    Variable         Space35,35,"                             
                "
              18    Variable        Space76,76,"                              
                                                         "
              19    Variable        TotSpace,10
              20    Variable        AvailSpace,10
              21    Variable        Msg,78
              22    Variable        Msg2,78
              23    Variable        FName,35
              24    Variable        LName,35
              25    ?Color          Fore,Back,ColorAttr  ;initial color
              26    ?Date           DOW,Mo,Da,Yr         ;get system date
              27    ?Time           CurrTime             ;get system time
              28    Clear
              29      ReadYN             "Do  you have a  color monitor? [Y/N]
            ",CharIn
              30    Compare         CharIn,"Y",,,ColorMon
              31    SetVar          RedOnGray,112
              32    SetVar          YelOnBlue,7
              33    SetVar          BlueOnGray,7
              34    Label           ColorMon







            Page 36                     PowerBatch                     Page 36

              35    Clear           BlueOnGray           ;clear to my color
              36    Box1            2,10,79,25,YelOnGray ;info box border
              37    ClearBox        2,10,79,25,YelOnBlue ;     interior
              38    Color           RedOnGray
              39    Box1            24,1,56,5,RedOnGray  ;title box
              40    ClearBox        24,1,56,5,RedOnBlack
              41    Color           RedOnBlack
              42    Center          "POWERBATCH",2
              43    Center          "By",3
              44    Center          "Computing Systems Design, Inc.",4
              45    Color           YelOnBlue
              46    WriteAt         3,11,"PowerBatch is  a power batch utility
            that produces COMPILED batch files."
              47     WriteAt         3,12,"With PowerBatch you can perform all
            standard DOS batch functions, plus"
              48     WriteAt           3,13,"use the  35 additional PowerBatch
            commands to create batch files with POWER."
              49      WriteAt            3,15,"PowerBatch compiles  your batch
            commands and produces a standalone .EXE"
              50     WriteAt            3,16,"module that  executes at the top
            speed of your computer. This information"
              51    WriteAt           3,17,"and demonstration program  you are
            now running is a compiled PowerBatch"
              52     WriteAt           3,18,"program  (the included  source is
            DEMO1.PWR). PowerBatch is especially"
              53       WriteAt             3,19,"powerful  for screen  related
            functions. Draw boxes, write to the screen with"
              54     WriteAt         3,20,"blazing speed,  control text colors
            with ease, get input from the user, make"
              55       WriteAt             3,21,"data  comparisions and  logic
            branches, and access system information with"
              56     WriteAt          3,22,"single commands. Follow this  tour
            of the power in PowerBatch."
              57    GoToXY          26,24
              58    Write           "Press any key to continue...",RedOnGray
              59    ReadKey         CharIn
              60    ClearBox        2,10,79,25,YelOnBlue
              61     WriteAt          3,11,"PowerBatch gives you access to the
            system date and time and makes these"
              62    WriteAt         3,12,"available as variables for your  use
            in screen writes."
              63     WriteAt         3,14,"The system date is returned in four
            variables of your choice. In these"
              64    GoToXY          3,15
              65    Write           "variables are placed Day of the week ("
              66    Write           DOW
              67    Write           ") Month number ("
              68    Write           Mo
              69    Write           "),"
              70    GoToXY          3,16
              71    Write           "Day number ("
              72    Write           Da







            Page 37                     PowerBatch                     Page 37

              73    Write           "), and Year number ("
              74    Write           Yr
              75    Write           ")."
              76     WriteAt          3,18,"In a  like manner the current time
            may be retrieved into a variable of your"
              77    WriteAt         3,19,"choice, and used any way you wish."
              78    WriteAt         3,21,"Current time is "
              79    WriteAt         19,21,CurrTime
              80    GoToXY          26,24
              81    Color           YelOnBlue
              82    Blink
              83    Write           "Press any key to continue..."
              84    Normal
              85    ReadKey         CharIn
              86    ClearBox        2,10,79,25,YelOnBlue
              87    WriteAt           3,11,"PowerBatch also provides  you with
            several input commands to retrieve both"
              88     WriteAt           3,12,"data and question responses  from
            the user. Commands are provided to retrieve"
              89     WriteAt           3,13,"one  key (and one key only), read
            one key in upper case, read either Y or N"
              90    WriteAt          3,14,"for Yes/No responses, and to read a
            string of a specified length."
              91    GoToXY          3,15
              92    Write           "Enter one character in lower case [ ]"
              93    GoToXY          38,15
              94    ReadKey         CharIn
              95    GoToXY          41,15
              96    Write           "You can manipulate the case "
              97    GoToXY          3,16
              98    Write            "of the data entered changing from  lower
            ["
              99    Write           CharIn
             100    Write           "] to upper ["
             101    Upper           CharIn
             102    Write           CharIn
             103    Write           "] to lower ["
             104    Lower           CharIn
             105    Write           CharIn
             106    Write           "]."
             107     WriteAt            3,18,"PowerBatch also  contains strong
            string manipulation commands."
             108    WriteAt         3,19,"Enter your last name "
             109    ReadStr         LName
             110    WriteAt         14,19,Space35
             111    WriteAt         14,19,"first name "
             112    ReadStr         FName
             113    WriteAt         3,19,Space35
             114    Midstring       Msg,FName,1,3
             115    Midstring       Msg2,LName,1,3
             116    Concat          Msg," "
             117    Concat          Msg,Msg2







            Page 38                     PowerBatch                     Page 38

             118    WriteAt         3,20,Msg
             119    Wait            10
             120    Midstring       Msg,FName,1,6
             121    Midstring       Msg2,LName,1,6
             122    Concat          Msg," "
             123    Concat          Msg,Msg2
             124    WriteAt         3,20,Msg
             125    Wait            10
             126    Concat          Msg,FName," "
             127    Concat          Msg,LName
             128    WriteAt         3,20,Msg
             129    Length          Msg2,Msg
             130      Concat            Msg,"The length of  this name field is
            ",Msg2
             131    WriteAt         3,21,Msg
             132    GoToXY          26,24
             133    Write           "Press any key to continue...",RedOnGray
             134    ReadKey         CharIn
             135    ClearBox        2,10,79,25,YelOnBlue
             136    WriteAt          3,11,"PowerBatch gives you the capability
            to verify drives, directories, or file"
             137    WriteAt          3,12,"names entered by the user. You  may
            execute selected portions of the batch"
             138     WriteAt            3,13,"file based  on the existance  or
            non-existance of these entries."
             139    Label           ChekDrive
             140    GoToXY          3,15
             141    Write           "Enter a drive letter to be verified"
             142    Write           Space35
             143    GoToXY          39,15
             144    ReadUpKey       CharIn
             145    ?DriveExist     CharIn,GoodDrive
             146    Blink
             147     WriteAt           3,24,"That is not a valid drive in your
            system. Please re-enter."
             148    Normal
             149    Beep            750,8
             150    Wait            30
             151    WriteAt         3,24,Space76
             152    GoTo            ChekDrive
             153    Label           GoodDrive
             154    GoToXY          3,16
             155    Write           "Enter a directory name to be verified"
             156    Write           Space35
             157    GoToXY          41,16
             158    ReadStr         DirName
             159    ?DirExist       DirName,GoodDir
             160    Blink
             161    WriteAt           3,24,"That is not  a valid directory  in
            your system. Please re-enter."
             162    Normal
             163    Wait            30







            Page 39                     PowerBatch                     Page 39

             164    WriteAt         3,24,Space76
             165    GoTo            GoodDrive
             166    Label           GoodDir
             167    GoToXY          3,17
             168    Write           "Enter a file name to be verified"
             169    Write           Space35
             170    GoToXY          36,17
             171    ReadStr         FileName
             172    ?FileExist      FileName,GoodFile
             173    Blink
             174     WriteAt           3,24,"That is not  a valid filename  in
            your system. Please re-enter."
             175    Normal
             176    Wait            30
             177    WriteAt         3,24,Space76
             178    GoTo            GoodDir
             179    Label           GoodFile
             180    WriteAt          3,18,"PowerBatch can  query your disk for
            total space and available space"
             181     WriteAt            3,19,"Drive [  ] capacities are (enter
            drive letter)"
             182    GoToXy          10,19
             183    ReadUpKey       CharIn
             184    ?DiskSpace      CharIn,TotSpace,AvailSpace
             185    Concat          Msg,CharIn," has "
             186    Concat          Msg,AvailSpace
             187    Concat          Msg," bytes available of the total "
             188    Concat          Msg,TotSpace
             189    Concat          Msg," bytes"
             190    WriteAt         9,19,Msg
             191    GoToXY          26,24
             192    Write           "Press any key to continue...",RedOnGray
             193    ReadKey         CharIn
             194    Clear
             195     WriteLine       "PowerBatch can run any valid DOS command
            that may be inserted in a batch file."
             196     WriteLine        "For example, here is  a listing of your
            current directory..."
             197    Wait            30
             198    Clear           ColorAttr     ;clear to default color
             199    Dir             "/w"
             200    Wait            30
             201    Color           YelOnBlue
             202    Clear
             203     WriteLine          "PowerBatch can also run  (and return)
            other PowerBatch programs, giving you a "
             204       WriteLine          "subroutine  capability. It  has the
            capability to re-boot the system (which I"
             205    WriteLine       "will NOT demonstrate here."
             206    GoToXY          1,5
             207    WriteLine        "The purpose of  this demonstration is to
            not only show you the capabilities"







            Page 40                     PowerBatch                     Page 40

             208     WriteLine        "of  PowerBatch, but to let you  compare
            the source with the running version"
             209      WriteLine         "of this  program and  aid you  in the
            development of your own PowerBatch"
             210    WriteLine       "programs."
             211    GoToXY          1,10
             212    Write           "Press any key to continue..."
             213    ReadKey         CharIn
             214    Color           ColorAttr     ;reset original colors
             215    Clear
             216    Box1            24,1,56,5,ColorAttr
             217    Center          "POWERBATCH",2
             218    Center          "By",3
             219    Center          "Computing Systems Design, Inc.",4
             220    GoToXy          1,24







            Page 41                     PowerBatch                     Page 41

                                          MOVE1

            Variable        CLP%1,79,"a"          ;command line parm %1
            Variable        CLP%2,79,"a"          ;%2
            Variable        InChar,1              ;for keyboard responses
            Compare         CLP%1,"a",,,Syntax    ;show syntax
            Compare         CLP%2,"a",,,Syntax
            Clear                                 ;clear the screen
            Upper           CLP%1                 ;make CLP%1 upper case
            Upper           CLP%2                 ;make CLP%2 upper case
            Write           "Move "               ;build initial msg
            Write           CLP%1
            Write           " to "
            WriteLine       CLP%2
            ?FileExist      CLP%1,File1OK         ;does source file exist
            Write           CLP%1                 ;write error msg
            WriteLine       " not found."
            GoTo            BadCopy
            Label           File1OK
            ?FileExist         CLP%2,,File2OK          ;does  destination file
            exist
            Write           CLP%2                 ;write error msg
            WriteLine       " exists!"
            ReadYN          "Overwrite? [Y/N] ",InChar
            WriteLine       ""
            Compare         InChar,"N",,,BadCopy
            Label           File2OK
            Compare         CLP%1,CLP%2,,,DupFiles ;cannot copy to itself
            Copy            CLP%1 CLP%2            ;DOS copy command
            ?FileExist       CLP%2,,BadCopy          ;did  output file make it
            OK
            Write           "Erasing "             ;tell user erasing source
            WriteLine       CLP%1
            Erase           CLP%1                  ;DOS erase command
            WriteLine       "Move successful"      ;msg to user
            Halt
            Label           DupFiles
            WriteLine       "Cannot move a file to itself"
            Label            BadCopy                   ;unsuccessful comes  to
            here
            WriteLine       "Move unsuccessful"
            Halt
            Label           Syntax
            WriteLine       "Syntax is Move1 SourceFileName TargetFileName"







            Page 42                     PowerBatch                     Page 42

                                          MOVE2

            Variable        CLP%1,79,"a"           ;command line parm %1
            Variable        CLP%2,79,"a"           ;%2
            Variable        InChar,1               ;for keyboard responses
            Compare         CLP%1,"a",,,Syntax     ;show syntax
            Compare         CLP%2,"a",,,Syntax
            Clear                                  ;clear the screen
            Upper           CLP%1                  ;make CLP%1 upper case
            Upper           CLP%2                  ;make CLP%2 upper case
            Write           "Move "                ;build initial msg
            Write           CLP%1
            Write           " to "
            WriteLine       CLP%2
            Label           ChkFile1
            ?FileExist      CLP%1,File1OK          ;does source file exist
            Blink                                     ;if not make screen text
            blink
            Write           CLP%1                  ;write error msg
            WriteLine       " not found."
            Normal                                 ;set text to normal
            Write           "Enter source file name : " ;prompt user for name
            ReadStr         CLP%1
            GoTo            ChkFile1
            Label           File1OK                ;check new name for exists
            ?FileExist        CLP%2,,File2OK           ;does  destination file
            exist
            Blink                                  ;if not then text to blink
            Write           CLP%2                  ;write error message
            WriteLine       " exists!"
            Normal                                 ;set text to normal
            ReadYN          "Overwrite? [Y/N] ",InChar      ;query user
            WriteLine       ""
            Compare         InChar,"N",,,BadCopy   ;if user entered "Y"  exit
            Label           File2OK                ;come here if all OK
            Compare         CLP%1,CLP%2,,,DupFiles ;cannot copy to itself
            Copy            CLP%1 CLP%2            ;DOS copy command
            ?FileExist      CLP%2,,BadCopy         ;is output file OK
            Reverse                                ;make text reverse video
            Write           "Erasing "             ;write erase message
            WriteLine       CLP%1
            Normal                                 ;set text back to normal
            Erase           CLP%1                  ;DOS erase command
            WriteLine       "Move successful"      ;tell user all is OK
            Halt
            Label           DupFiles
            WriteLine       "Cannot move a file to itself"
            Label           BadCopy
            WriteLine       "Move unsuccessful"
            Label           Syntax
            WriteLine       "Syntax is Move1 SourceFileName TargetFileName"







            Page 43                     PowerBatch                     Page 43

                                          MENU1

            Variable        FColor,1                 ;store the current screen
            colors
            Variable      BColor,1
            Variable      ColorAttr,1
            Variable      MenuSel,1
            ?Color        FColor,BColor,ColorAttr
            Label         ShowMenu
            Clear         112                  ;clear screen to a new color
            Center        "Demonstration Menu",2    ;center on line 2
            WriteAt       10,4,"A. Run a directory and return"
            WriteAt           10,6,"B.  Run BoxDemo  and return  (DOS batch  +
            PowerBatch + return)"
            WriteAt       10,8,"C. Reboot your system"
            WriteAt       10,10,"E. Exit this menu and return to DOS"
            Label         GetInp
            WriteAt       15,13,"Enter your choice :"
            GoToXY        34,13
            ReadUpKey     MenuSel                   ;get users selection
            Compare       MenuSel,"A",ChekB,Error   ;compare selection to A
            Clear          7,0                   ;clear screen to fore 7, back
            0
            dir           "/w"                 ;run DOS dir cmd with /w parm
            Wait          30                        ;wait 3 secs for show
            GoTo          ShowMenu                  ;redisplay menu
            Label         ChekB
            Compare       MenuSel,"B",ChekC,Error   ;compare selection to B
            Clear         15                   ;clear screen to attribute 15
            DOSEX1                                  ;run a DOS  batch file   &
            PowerBatch program
            Wait          30                   ;wait 3 secs
            GoTo          ShowMenu             ;redisplay menu
            Label         ChekC
            Compare       MenuSel,"C",ChekE,Error   ;compare selection to C
            Boot                                    ;perform a warm boot
            Label         ChekE
            Compare       MenuSel,"E",Error,Error   ;compare selection to E
            Clear         ColorAttr                 ;restore original color
            Halt                                           ;end the PowerBatch
            program
            Label         Error                     ;come here for errors
            Blink                                   ;reverse the colors
            WriteAt       5,20,"InCorrect menu selection...Try again."
            Beep          750,5                ;beep at 750 hz for half sec
            Wait          30                        ;wait 3 secs to see msg
            Normal                                  ;restore text attributes
            ClearLine     20                        ;clear the message line
            GoToXY        34,13                     ;erase the wrong entry
            Write         " "
            GoTo          GetInp                    ;get new menu selection







            Page 44                     PowerBatch                     Page 44

                                         BOXDEMO2

            Variable    FColor,1
            Variable    BColor,1
            Variable    ColorAttr,1
            Variable    Clr1,3,30
            Variable    Clr2,3,46
            Variable    Clr3,3,62
            Variable    Clr4,3,78
            Variable    Clr5,3,94
            Variable    Clr6,3,110
            Variable    InChar,1
            ?Color      FColor,BColor,ColorAttr           ;save curr colors
            Clear       Clr1                         ;clear screen to color 1
            Label       MonType
            GoToXY      1,20
            ReadYN      "Do you have a color monitor? [Y/N] ",InChar
            Compare     InChar,"N",ColorsOK
            SetVar      Clr1,7                       ;reset colors for mono
            SetVar      Clr2,112
            SetVar      Clr3,112
            SetVar      Clr4,112
            SetVar      Clr5,112
            SetVar      Clr6,112
            Label       ColorsOK
            Clear       Clr1                              ;clear screen
            Box1         15,7,66,18,Clr1               ;draw center box, color
            1
            WriteAt         16,8,"Drawing  boxes  (or  frames)  around  screen
            displays"
            WriteAt         17,9,"seems  to add  a  finishing touch  to menus,
            messages"
            WriteAt        17,10,"or  any other  information  conveyed to  the
            user."
            WriteAt        16,12,"With  a  batch file,  not  only is  it  time
            consuming,"
            WriteAt         17,13,"but  painfully slow.  Most  of the  time it
            simply"
            WriteAt     17,14,"is not worth the trouble."
            WriteAt     16,16,"With PowerBatch, you draw your frame with one"
            WriteAt     17,17,"command. And it is a little faster..."
            Box1        2,1,14,6,Clr1                ;draw boxes around perif
            Box1        2,7,14,12,Clr1
            Box1        2,13,14,18,Clr1
            Box1        2,19,14,24,Clr1
            Box1        15,19,27,24,Clr1
            Box1        28,19,40,24,Clr1
            Box1        41,19,53,24,Clr1
            Box1        54,19,66,24,Clr1
            Box1        67,19,79,24,Clr1
            Box1        67,13,79,18,Clr1
            Box1        67,7,79,12,Clr1







            Page 45                     PowerBatch                     Page 45

            Box1        67,1,79,6,Clr1
            Box1        54,1,66,6,Clr1
            Box1        41,1,53,6,Clr1
            Box1        28,1,40,6,Clr1
            Box1        15,1,27,6,Clr1
            wait        30                                  ;wait 3 secs
            ClearBox    2,1,14,6,Clr6             ;clear boxes to diff colors
            ClearBox    2,7,14,12,Clr2
            ClearBox    2,13,14,18,Clr3
            ClearBox    2,19,14,24,Clr4
            ClearBox    15,19,27,24,Clr5
            ClearBox    28,19,40,24,Clr6
            ClearBox    41,19,53,24,Clr2
            ClearBox    54,19,66,24,Clr3
            ClearBox    67,19,79,24,Clr4
            ClearBox    67,13,79,18,Clr5
            ClearBox    67,7,79,12,Clr6
            ClearBox    67,1,79,6,Clr2
            ClearBox    54,1,66,6,Clr3
            ClearBox    41,1,53,6,Clr4
            ClearBox    28,1,40,6,Clr5
            ClearBox    15,1,27,6,Clr6
            Wait        30
            ClearBox    28,19,40,24,Clr1
            ClearBox    28,1,40,6,Clr1
            ClearBox    2,19,14,24,Clr1
            ClearBox    54,1,66,6,Clr1
            ClearBox    67,1,79,6,Clr1
            ClearBox    67,7,79,12,Clr1
            ClearBox    67,13,79,18,Clr1
            ClearBox    67,19,79,24,Clr1
            ClearBox    54,19,66,24,Clr1
            ClearBox    15,19,27,24,Clr1
            ClearBox    15,1,27,6,Clr1
            ClearBox    2,13,14,18,Clr1
            ClearBox    2,7,14,12,Clr1
            ClearBox    41,1,53,6,Clr1
            ClearBox    41,19,53,24,Clr1
            ClearBox     2,1,14,6,Clr1                   ;clear boxes  to diff
            colors
            WriteAt     1,25,"Press any key to exit"
            GoToXY      23,25                      ;position cursor after msg
            ReadKey      InChar                        ;wait for user to press
            key
            Clear         ColorAttr                      ;clear screen to orig
            color







            Page 46                     PowerBatch                     Page 46

                                          Index

     ASP  1                                    ?INPATH  18
     Box  19                                   ?TIME  18
     Case                                      BEEP  19
           lower  24                           BLINK  19
           upper  26, 27                       BOX  19
     Color attribute  15, 25                   BREAKOFF  20
     Command line parameters  27               BREAKON  20
     Command Summary  30                       CENTER  20
     Command Syntax  15                        CLEAR  20
     Comments  10                              CLEARBOX  21
     Compare                                   CLEARLINE  21
           alphabetic  22                      COLOR  21
           numeric  22                         COMPARE  22
     Compilation Errors  32                    CONCAT  23
     Concatenate  23                           GOTO  23
     Concept Of Operation  5                   GOTOXY  23
     Copyright  1                              HALT  24
     Ctrl - Break  20                          LABEL  24
     Current date  16                          LENGTH  24
     Current time  18                          LOWER  24
     Cursor  23                                MIDSTRING  24
     Directory  17                             NORMAL  25
     Disk capacity  17                         PROMPT  25
     Disk free space  17                       READKEY  25
     DOS errorlevel  24                        READSTR  25
     DOS search path  18                       READUPKEY  26
     DOSERROR  11, 13                          READYN  26
     Environment variable  18                  REVERSE  26
     ERRORLEVEL  11, 13, 24                    SETENV  26
     External command  13, 33                  SETPATH  27
     Field length                              SETVAR  27
           maximum  25, 27                     UPPER  27
     File exists  18                           VARIABLE  27
     Frame  19                                 WAIT  28
     Installation  7                           WRITE  28
     Interior of a box  21                     WRITEAT  28
     Introduction  1                           WRITELINE  29
     Line numbers  35                       POWERMAK  9
     Literals  10, 11                       Registration  1
     Pause  28                              Registration Fees  3
     POWERBAT.ERR  32                       Removing PowerBatch From Your
     PowerBatch Commands  10                      System  34
           ?COLOR  15                       Screen clear  20
           ?CURRDIR  15                     Shareware  1
           ?DATE  15                        Software Support  4
           ?DIREXIST  16                    String length  24
           ?DISKSPACE  17                   Substring  24
           ?DRIVEEXIST  17                  System speaker  19
           ?ENVSTR  18                      Valid drive  17
           ?FILEEXIST  18                   Value







            Page 47                     PowerBatch                     Page 47

           initial  27
     Variable  10
           value  27
     Variable map  9
     Warranty  2
     What You Get  3

```
{% endraw %}

## SYSOP.DOC

{% raw %}
```
                             BBS  SysOp INFORMATION
                                   PowerBatch
                           Computing Systems Design, Inc.

 This file provides information for bulletin board SysOps who wish to
 distribute the evaluation version of PowerBatch via their BBS system.

 Permission is hereby granted to upload the evaluation version of PowerBatch
 software to a bulletin board system for the purpose of downloading to callers
 of the bulletin board. Under no circumstances shall any registered version of
 PowerBatch be uploaded to a bulletin board. Evaluation versions of the
 software are prominently identified with an opening shareware informational
 screen. Any software other than evaluation versions should be discarded. If
 any registered version of the software is uploaded to your bulletin board, CSD
 would appreciate notification of the upload and receipt of the copy of the
 registered software.

 If you are associated with any group which distributes software for a fee,
 permission of distribution for a fee must be obtained from CSD, Inc. See the
 file VENDOR.DOC. Association does not preclude you from loading PowerBatch to
 your bulletin board, but distribution for a fee requires written permission.

 PowerBatch must be made available only as a complete package containing the
 following files:

      1) README.1ST      Initial start-up instructions
      2) PBINSTAL.EXE    PowerBatch install program
      3) POWERMAK.EXE    PowerBatch compiler
      4) SMLMODEL.MDL    PowerBatch routines
      5) POWERBAT.DOC    PowerBatch documentation
      6) DOSEX1.BAT      Sample DOS batch file
      7) DEMO1.PWR       Example PowerBatch Source file
      8) MENU1.PWR       Example PowerBatch Source file
      9) MOVE1.PWR       Example PowerBatch Source file
     10) MOVE2.PWR       Example PowerBatch Source file
     11) BOXDEMO1.PWR    Example PowerBatch Source file
     12) PBINSTAL.PWR    Source for PowerBatch install
     13) PBCLONE.PWR     Source for cloning PowerBatch
     14) MOVESUB.PWR     Subroutine used by PBCLONE
     15) DELETEPB.EXE    Delete all PowerBatch files
     16) REGISTER.FRM    Registeration form
     17) INVOICE.FRM     Pre-printed invoice for company use
     18) VENDOR.DOC      Information for software vendors
     19) SYSOP.DOC       Information for BBS SysOps

 If any of the above files are missing, contact CSD for a complete set of
 files.

 PRODUCT NAME AND DESCRIPTIONS

 The archived file containing the 19 PowerBatch files should be named

      PWRxx.yyy

 where xx is the version of the software and yyy identifies the type of
 archival.

 Short Description:
 PWRxx.yyy Batch Command File Compiler (ASP)

 Long Description:
 PowerBatch is a utility that creates standalone (.EXE) compiled batch files.
 PowerBatch contains all the functionality of standard DOS batch files plus 40
 additional commands to perform functions not available in a standard batch
 file. Executes any .COM, .EXE(including other PowerBatch programs), or DOS
 intrinsic commands entered as a PowerBatch source statement. Control screen
 colors, draw boxes, get input from keyboard, access system info, string
 manipulation and comparision, and much more.

 Keywords:
 BATCH FILE COMPILER UTILITY SHAREWARE ASP


                                   PowerBatch
                                   C.S.D. Inc.
                                 P.O. Box 566484
                              Atlanta, GA 30356-6009
                             CompuServe ID 72701,155
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```

                               Vendor Information
                                   PowerBatch
                         Computing Systems Design, Inc.

 The copying restrictions listed in this file apply to any individual,
 organization, user group, or business that charges any fee for the
 distribution of the ShareWare version of PowerBatch produced by Computing
 Systems Design, Inc. (CSD, Inc). PowerBatch is a ShareWare product and is a
 copyrighted product by CSD, Inc.

 No organization who receives remuneration for the distribution of software
 products may sell or distribute CSD products without prior written permission
 from CSD. Any ASP member vendor will be granted the right to distribute
 PowerBatch. ASP member vendors may receive written permission by contacting
 CSD via CompuServe EasyPlex, CID 72701,155 or by writing to the address below.

 Non-ASP vendors may request permission by writing
      CSD, Inc.
      P.O. Box 566484
      Atlanta, GA 30356-6009
 furnishing COMPANY NAME, OWNER'S NAME, COMPANY ADDRESS, TELEPHONE NUMBER, AND
 METHOD OF DISTRIBUTION (floppy disk, CD, etc).

 PowerBatch software may not be distributed on any magnetic media containing
 any software produced by any company other than CSD, unless written permission
 is specifically granted to do so. 

 Permission is granted to distribute only the evaluation version of PowerBatch.
 Registered versions of the software differ from the evaluation version only in
 title screens and ShareWare registration information.

 The Registration Fee for PowerBatch is ....................$30 US

         >>> PAYMENT MUST BE IN U.S. FUNDS, DRAWN ON A U.S. BANK. <<<

 CATALOG DESCRIPTION

 Add power to your batch files with PowerBatch. Create batch files that execute
 with the speed only a compiled program can deliver.

 Standard batch functions plus over 40 additional commands provide you with the
 capability to create professional screen displays with boxes, colors, direct
 cursor positioning, and keyboard input capability.

 Validate drives, directories, files, and paths before your batch file attempts
 to copy or use data. Retrieve environment variables, current date, current
 time, disk capabilities, and free space and make intelligent decisions within
 your batch files using the string and numeric comparison commands.

 Create variables and constants to be used in any of the PowerBatch commands,
 even DOS commands!

 Need to create a batch file that cannot be exited by pressing break (or any
 key)? PowerBatch gives you an option at compile time to create a batch file
 that cannot be exited by pressing the break key. Great for consultants who
 need to create for clients batch files that cannot be modified or misused.

 PowerBatch gives you:
     1) Commands which provide systems information. These commands provide the
          current color settings, the current date, the current time, check for
          the existance of a valid drive letter, and commands which check for
          the existance of a directory or a file.
     2) Commands which control the flow of the batch program. Execute different
          portions of the batch program based on existance or non-existance of
          directories or files. Compare the contents of one variable with the
          contents of another variable or a constant and execute different
          portions of the batch program based on the results of the compare.
     3) Commands which control the way text is printed on the screen. Change
          any portion of the screen to any valid screen color, cause a message
          to blink on the screen, or highlight a message in reverse video.
     4) Commands which provide string manipulation. Change a string to all
          upper case characters, or all lower case characters. Extract a
          portion of a string such as the first three characters or the last
          four characters. Build a new string from two existing strings by
          concatenation of the two strings.
     5) Commands which deal with screen writing and input from the keyboard.
          These commands are the main strength in the PowerBatch system.
          Directly address any position on the screen and move the cursor to
          that position to read or write text. Automatically center a message
          or title on any line. Box commands draw borders around portions of
          the screen to enhance screen appearance. Read a single key from the
          keyboard, read the response to a query that only accepts a yes or no
          response, read a string of characters from the keyboard with a
          specified maximum length, and read keys from the keyboard
          automatically changing the characters to upper case.

 UPDATES

 Updates will be furnished automatically to any vendor to whom registrations
 can be traced.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2425

     Volume in drive A has no label
     Directory of A:\

    README   1ST      2201   9-19-90   1:41a
    PBINSTAL EXE     36109   9-19-90   1:41a
    SMLMODEL MDL     29328   9-19-90   1:41a
    POWERMAK EXE     38960   9-19-90   1:41a
    POWERBAT DOC    123117   9-19-90   1:41a
    DEMO1    PWR      9268   9-19-90   1:41a
    MENU1    PWR      2324   9-19-90   1:41a
    MOVE1    PWR      1903   9-19-90   1:41a
    MOVE2    PWR      2558   9-19-90   1:41a
    BOXDEMO1 PWR      3447   9-19-90   1:41a
    PBINSTAL PWR     10360   9-19-90   1:41a
    PBCLONE  PWR      4057   9-19-90   1:41a
    MOVESUB  PWR      3771   9-19-90   1:41a
    DOSEX1   BAT      1059   9-19-90   1:41a
    DELETEPB EXE      6288   9-19-90   1:41a
    INVOICE  FRM      1396   9-19-90   1:41a
    REGISTER FRM      2038   9-19-90   1:41a
    SYSOP    DOC      3612   9-19-90   1:41a
    VENDOR   DOC      4950   9-19-90   1:41a
    GO       BAT        40   1-01-80   6:00a
    FILE2425 TXT      1703  10-18-90   5:27p
    GO       TXT       848  10-18-90   9:42a
           22 file(s)     289337 bytes
                           20480 bytes free
