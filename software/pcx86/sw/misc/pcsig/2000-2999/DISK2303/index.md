---
layout: page
title: "PC-SIG Diskette Library (Disk #2303)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2303/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2303"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN MACHINE"

    Would you like to save time generating screens for your programs?
    SCREEN MACHINE is an excellent tool to free you from the dull and
    boring work of designing screens.
    
    This screen editor can generate actual source code for BASIC, C,
    assembler, Turbo Pascal and dBASE.  Editing screens is a snap with
    support for macros, box and line drawing, color, text centering,
    extended character set, and even an ``undo'' function for line and
    block operations.
    
    SCREEN MACHINE has a memory resident utility to capture screens from
    other programs.  The captured screens then  can be changed into binary
    code to be edited with this program or into a text file that can be
    altered with a text editor or word processor.  Creating interactive
    demonstration programs can be done very easily with SCREEN MACHINE.
    Different screen images can be linked to create a ``slide show'', a
    prototype, or demonstration program.
    
    SCREEN MACHINE manages to offer a complete solution to reduce your
    program development time, create screen prototypes, and generate
    source code for your programs -- all for a very low registration fee.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2303.TXT

{% raw %}
```
Disk No: 2303                                                           
Disk Title: Screen Machine                                              
PC-SIG Version: S1                                                      
                                                                        
Program Title: Screen Machine                                           
Author Version: 2.0                                                     
Author Registration: $9.95                                              
Special Requirements: None.                                             
                                                                        
If you are a person who would like to save time generating screens for  
your programs, SCREEN MACHINE is an excellent tool to free you from the 
dull and boring work of designing screens.                              
                                                                        
This screen editor can generate actual source code for BASIC, assembler,
C, Turbo Pascal and dBase.  Editing screens is a snap with support for  
macros, box and line drawing, color, text centering, extended character 
set, and even an undo function for line and block operations.           
                                                                        
SCREEN MACHINE has a memory resident utility to help you capture screens
from other programs.  The captured screens can be changed into binary   
code which can be edited by this program, or into a text file that be   
altered with a text editor or word processor.                           
                                                                        
Creating interactive demonstration programs can be accomplished easily  
with SCREEN MACHINE.  Different screen images can be linked to create a 
"slide show", a prototype , or demonstration program.                   
                                                                        
SCREEN MACHINE manages to offer a complete solution to reduce your      
program development time, create screen prototypes, and generate        
source code for your programs all for a very low registration fee.      
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
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
║             <<<<  PC-SIG Disk #2303  SCREEN MACHINE  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ For documentation and program instructions, type:                       ║
║                  COPY SM.TXT PRN (press Enter)                          ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## SM.TXT

{% raw %}
```


























                                    Screen Machine
                              Screen Development System
                                   for Programmers













                                     Version 2.00












































                                     Published by

                                     ASMicro Co.

                           21175 Tomball Parkway, Suite 304

                                  Houston, TX 77070

                                        U.S.A.
                                                    





                    
                    
                    
                    
                    
                    
                    
                    
                         Copyright (C) 1985, 1990 ASMicro Co.

                                 All rights reserved.
                                                    
                       Printed in the United States of America


























                                       Contents



          Introduction  . . . . . . . . . . . . . . . . . . . . . . . .   1

          Configuring and Starting SCREEN.EXE . . . . . . . . . . . . .   4

          The Screen Editor . . . . . . . . . . . . . . . . . . . . . .  18

          Screen Capture  . . . . . . . . . . . . . . . . . . . . . . .  38

          Using SHOW for Disk Management & Menus  . . . . . . . . . . .  42

          Advanced SHOW Features  . . . . . . . . . . . . . . . . . . .  49


          Appendix A  . . . . . . . . . . . . . . . . . . . . . . . . .  58

          Appendix B  . . . . . . . . . . . . . . . . . . . . . . . . .  61


          Index . . . . . . . . . . . . . . . . . . . . . . . . . . . .   i












































                                      Trademarks
                    
          The following trademarks are used  throughout this manual.   When
          you  come  across  them,  please  remember  that  they  are   the
          registered trademarks of the companies shown below.
                    
                    
          IBM,  IBM  PC,  IBM PC  XT  and  IBM  PC  AT  are  trademarks  of
          International Business Machines Corporation.
                    
          MS-DOS   and  Microsoft   Word   are  trademarks   of   Microsoft
          Corporation.
                    
          Turbo Pascal,  SideKick and  SuperKey are  trademarks of  Borland
          International.
                    
          dBASE II, dBASE III and dBASE  III Plus are trademarks of Ashton-
          Tate Corporation.
                    
          Lotus 1-2-3 is a trademark of Lotus Development Corporation.

































                                          i













                          Licensing and Ordering Information

                                                  

                                      DISCLAIMER
                                                    
               ASMicro  hereby  disclaims all  warranties relating  to this
          software,   whether  express   or   implied,  including   without
          limitation, any implied warranties of merchantability  or fitness
          for a  particular purpose.   ASMicro will  not be liable  for any
          special, incidental,  consequential, indirect or  similar damages
          due  to loss of data  or any other reason,  even if ASMicro or an
          agent of  ASMicro has  been advised  of the  possibility of  such
          damages.  In no  event shall ASMicro's liability for  any damages
          ever  exceed  the price  paid for  the  license to  use software,
          regardless  of  the form  of the  claim.   The  person  using the
          software bears all risk as to  the quality and performance of the
          software.



































                                          ii













                          Licensing and Ordering Information



                                       LICENSE

          Screen Machine is not, and has never been,  in the public domain.
          Screen Machine is not free.
             
          Non-registered users are granted a limited, 90-day license to use
          Screen  Machine to  determine whether  or not  the program  meets
          their  needs. Continued use  of Screen Machine  beyond the 90-day
          valuation time period  requires registration of the  package. Use
          of non-registered copies  of Screen  Machine beyond the  original
          evaluation period is strictly prohibited.
             
          No one  may modify  Screen Machine  for any  reason, in  any way,
          including  but not  limited to,  decompiling-compiling, patching,
          disassembling,  or  reverse  engineering   the  program.    These
          restrictions also  apply to  all Screen  Machine screen  displays
          such  as  the  opening  screen,   help  screen,  and  all   other
          proprietary program output.
             
          Screen Machine may  be copied and distributed  to others, subject
          to the above restrictions and the following:
             
          Screen Machine must  be copied in unmodified form,  including the
          file containing this license information.
             
          Complete Screen  Machine  documentation and  online-help must  be
          included.
             
          No  copying fee  of any  type may  be assessed  other than  basic
          charges for the cost of the copying medium.
             
          Screen Machine may not be distributed  with any other software or
          hardware product(s)  without  the express  written permission  of
          ASMicro Corp.
             
          Sysops (bulletin board SYStem OPerators)  may make Screen Machine
          available for downloading  by their  users as long  as all  above
          conditions are met.
             
          This agreement  supersedes any and  all previous agreements.   No
          blanket  authorization  has  been issued  by  ASMicro  Corp., for
          commercial distribution of its products.
             






                                         iii













                          Licensing and Ordering Information


                                 ORDERING INFORMATION
             
          When you register your copy of  Screen Machine, you are granted a
          license to  use  the package  as  often as  you wish.  There  are
          distinct advantages to registering your copy of Screen Machine:

               1.    You may  contact  ASMicro  Co. through  the  mail with
               technical questions.
             
               2.  Automatic notification of upcoming major new releases or
               enhancements through the mail.
             
          In  order  to  register  your  copy  of Screen  Machine,  send  a
          completed  Registration  form and  a check  for  $9.95.   We will
          assume  that   you  have   already  obtained   the  program   and
          documentation elsewhere.  For an  additional $10  ($19.95 total),
          you  will  receive   the  latest   version  of  Screen   Machine,
          documentation, and utilities on diskette.
             
          Non-U.S. residents: please send  checks or money orders drawn  on
          U.S. Banks  or in U.S. Funds.  All  foreign orders are subject to
          current U.S. foreign trade and technology exchange restrictions.




























                                          iv













                          Licensing and Ordering Information


             
                                      Order Form
                 
                 
          Remit To: ASMicro, Co.
                    21175 Tomball Parkway, Suite 304
                    Houston, TX 77070
             

             Qty.     Description                    Amount    

             ____  Screen Machine Registration       $9.95 ea     _________
                                                    
             ____  Latest Version (Diskette only)   $10.00 ea     _________
            

                                                     Subtotal     _________

             
            (TX residents add appropriate sales tax)     Tax      _________
            
                                                        Total     _________


          Payment:  Check [ ]     Money Order [ ]


          Name:   _________________________________________________________

          Company:_________________________________________________________

          Address:_________________________________________________________


                  _________________________________________________________


            
          Work Phone: (____)  ____________  Home Phone: (____)  ___________
            

          Signature: ________________________________________








                                          v













          Screen Machine                               Introduction
          Screen Development System


                                     Introduction
            
          What is Screen Machine ?

               This package is a total screen management system, consisting
               of three main executable programs:
             
               SCREEN.EXE  allows  you  to  easily  design screens  and  to
               automatically  generate source code to reproduce the screens
               you design.
             
               CAPTURE.COM lets you capture any text  screen in any program
               and store it on disk so that you can edit it with SCREEN.EXE
               or a text editor, or load it directly into video memory.

               SHOW.COM   is  used  for  creating  program  prototypes  and
               interactive demonstration programs.   This program can  also
               be used for DOS management via a menu system.
             
             
          System Requirements
          ___________________
             
               The system requirements for this package are:
             
                    *  An IBM PC, XT, AT or close compatible
               
                    *  PC-DOS or MS-DOS 2.10 or later.
               
                    *  192K of RAM
               
                    *  1 Diskette drive (320K or larger)
               
                    *  80 column monitor
             
             
          Program Distribution
          ____________________

               You may freely  distribute your  screens (in binary  format)
               and  executable  programs created  by SHOW.COM (See  section
               6).  You do not need to put any ASMicro copyright notices in
               your programs, nor do you need to pay any royalties.
             
               You are NOT licensed to distribute any of the other programs
               and/or files on the Screen Machine diskette.
             
             



                                         1-1













          Screen Machine                               Introduction
          Screen Development System


          Organization of This Manual
          ___________________________

               Section   1   covers  the   configuration  and   startup  of
               SCREEN.EXE, the screen editor.
             
               Section 2 discusses the use of SCREEN.EXE, after it has been
               started.
             
               Section  3  explains the  use  of CAPTURE.COM  for capturing
               screen images to disk.
             
               Section  4  shows you  how to  use  SHOW.COM to  create disk
               management menu systems.
             
               Section 5 explains the advanced features of SHOW.COM and how
               to use SHOW.COM  to create  slide shows, prototype  programs
               and demos.
              
               Section  6 tells  you  how to  create  runtime programs  for
               distribution of your demos and prototypes.
             

               Appendix A contains  charts showing  keyboard scan codes  on
               IBM and compatible computers.
             
               Appendix B contains a listing of the syntax errors generated
               by each of the executable programs.
             
             
          Files Included in the Product
          _____________________________

               CAPTURE.COM   is  the   memory-resident  program   used  for
               capturing  screen displays to disk files. See Section 3.
             
               DEMO1.BAT demonstrates how to use the advanced SHOW features
               (as described in Section 5).
             
               DEMO1.DAT contains the commands used by DEMO1.BAT.

               DEMO1.001 through DEMO1.005  are screen  data files used  by
               DEMO1.BAT.
             
               DEMO2.BAT demonstrates how to use the advanced SHOW features
               (as described  in Section  5).  This demonstration  emulates
               SCREEN.EXE.

               DEMO2.DAT contains the commands used by DEMO2.BAT.


                                         1-2













          Screen Machine                               Introduction
          Screen Development System

               DEMO2.001 through DEMO2.004  are screen  data files used  by
               DEMO2.BAT.
             
               HELC1.@#$ and HELC2.@#$ are the  two SCREEN.EXE help screens
               for the extended (graphics) character set.  See Section 2.  

               HELP1.@#$  is  the  first  main  help  screen  presented  by
               SCREEN.EXE when the <F1> key is pressed. See Section 2.
             
               HELP2.@#$  is  the  second  main  help screen  presented  by
               SCREEN.EXE when the <F1> key is pressed. See Section 2.
             
               HELP3.@#$  is  the  third  main  help  screen  presented  by
               SCREEN.EXE  when the  <F1>  key is  pressed. This  screen is
               meant  to  contain definitions  of  the  macros  you use  in
               SCREEN.EXE.  Therefore,  if  you  modify  your macros  on  a
               permanent  basis,  you   may  wish   to  edit  this   screen
               accordingly. See Section 2.
             
               HELPC.@#$ is  the COLOR help menu displayed by SCREEN.EXE if
               you press the <F1> key when the color changing  menus are on
               the display. See Section 2.
             
               MAINMENU.BAT is a sample disk management menu system.

               MAINMENU.001 is a screen data file used by MAINMENU.BAT. See
               Section 4.
             
               MENU1.@#$  is  the main  menu  displayed by  SCREEN.EXE. See
               Sections 1 and 2.
             
               READ.ME may not be present on your diskette. This ASCII text
               file is present if minor revisions  are made to the programs
               prior to our being able to reprint the manual.
             
               SCREEN.CFG is the default SCREEN.EXE configuration file. See
               Section 1.
             
               SCREEN.EXE is the full screen editor program. See Sections 1
               and 2.
             
               SHOW.COM is the screen display/demo  program. See Sections 4
               and 5.

               SAMPLE.C is a sample  Microsoft C routine which can  be used
               to  display  the C language  structures generated by  Screen
               Machine. 



                                         1-3













          Screen Machine                          Configuring and Starting 
          Screen Development System

                         Configuring and Starting SCREEN.EXE

             
          What is SCREEN.EXE ??

               SCREEN.EXE  is  a  screen  editor  and  screen  source  code
               generator.   The screen editor  has on-line help and support
               for designing  screens with color  and graphics  characters.
               This makes SCREEN.EXE perfect for  designing menus and other
               screens  with  fancy  attributes  and  borders.  Using  this
               program, you will create more readable screens in a fraction
               of the time it would otherwise take.
             
               The  source code that will reproduce  the screens you design
               can be automatically generated in a variety of formats. This
               eliminates the drudgery  of writing  code which locates  the
               cursor, sets the  appropriate colors and prints  the text or
               graphics characters.  It allows you  to be more creative and
               to  painlessly  lay out  your  screen displays  with perfect
               centering.  The   screen  editor  allows   centering  within
               graphics character borders  and even shifting of  the entire
               screen.
             
               Once  you have formatted a screen and  elected to save it, a
               screen data file  is written using  a filename you  specify.
               When  the  screen  is  saved,  the  actual  source  code  to
               reproduce the  screen  is also  generated and  stored.   For
               example,  if your  data filename is  "menu1", and  SCREEN is
               configured to generate BASIC source code, the screen data is
               stored in "MENU1" and  the BASIC source code to  produce the
               display is stored in "MENU1.BAS".

               SCREEN can be  configured to generate screen source  code in
               five major languages:
             
             
          BASIC
             
               Additional parameters you  may define when generating  BASIC
               source code are:
             
                    *  starting line number.
               
                    *  line number increment.
               
                    *  whether attributes (and  resulting color statements)
                    are to be included.
               
                    *  maximum number of characters per line of source code

                                         1-4













          Screen Machine                          Configuring and Starting 
          Screen Development System

                    (or  one  line  of  source  code  per  line  of  screen
                    display).    
          Assembler Language
             
               SCREEN  will  generate  DB   statements  for  inclusion   in
               Assembler  language programs.   You supply the configuration
               program with  segment names and classes as well as alignment
               types.


          dBASE II, dBASE III and dBASE III Plus 

               If  you  use one  of  these  products, you  can  have SCREEN
               generate  program statements automatically.
             
             
          Turbo Pascal
             
               SCREEN can generate Turbo Pascal Code.

           
          C
             
               SCREEN  can generate an array of C structures which describe
               the  screen  data.   The C  structures  can be  displayed by
               programs  that you write  or you can  use the  sample C code
               provided  on  the  SCREEN  MACHINE  disk  to display  the  C
               structures (See the file: sample.c).






















                                         1-5













          Screen Machine                          Configuring and Starting 
          Screen Development System


          Starting the SCREEN Program 
          ____________________________

               To start the program,  type SCREEN at the system  prompt and
               press  the <Enter>  key.  You will  be presented  with three
               options:    

                    *  [F1]   Configure System
               
                    *  [F2]   Edit Screen Data File
               
                    *  [Esc]  Exit SCREEN
             

               This section describes the first option, "Configure System".
               Section 2 describes how the SCREEN program operates once you
               have selected the "Edit Screen Data File" option.

              
          Configuration File
          __________________
             
               One  of  the  files  included  in   this  product  is  named
               "SCREEN.CFG".  When you start SCREEN for the first time, the
               program  will   use  the   options  set   in  this   default
               configuration file.


          Configuring SCREEN.EXE
          ______________________

               Whenever it is  started, SCREEN looks for  its configuration
               file.  The search takes place as follows:

                    *  If you specified a screen name on the command  line,
                    the  directory containing the  screen file is searched.
                      
                    *  If you did not specify a screen name on  the command
                    line, or if you did but  the configuration file was not
                    found there, the current directory is searched.
             
                    *     Lastly,  SCREEN.EXE  will  search  the  directory
                    specified in the DOS environment  variable SCREEN.  See
                    the next subsection.
             
               If the configuration  file is still  not found, you will  be
               asked if you wish to create one.
             
               If you do  not elect to  create the configuration file,  the
               program will end, since SCREEN cannot run without this file.
                 

                                         1-6













          Screen Machine                          Configuring and Starting 
          Screen Development System

               If you  DO want to create  a new configuration  file, type a
               "Y" and press the <Enter> key.
             
             
          Setting an Environment Search Path
          __________________________________

               You  can   tell  SCREEN.EXE   to  look   in  a   pre-defined
               subdirectory for the configuration and help files by setting
               the DOS environment variable SCREEN.  For  example, from the
               DOS prompt, or within your AUTOEXEC.BAT file, enter:
             
                    SET SCREEN=C:\MACHINE\CONFIG
             
               What this does is to tell SCREEN.EXE to search the directory
               "C:\MACHINE\CONFIG" for the file SCREEN.CFG and all the help
               files (with an extension ".@#$").
             
               This is  handy  when you  want only  a single  configuration
               file, but  you want to  be able  to call up  SCREEN.EXE from
               anywhere in your system (this presumes  you have set the DOS
               path to include the subdirectory containing SCREEN.EXE).
             
             
          Changing the Configuration File
          _______________________________
             
               You can "override" the configuration that SCREEN uses, after
               having started  the program,  by choosing  the first  option
               from the main menu.   The most likely use for  this would be
               to temporarily do something differently (for example, if you
               normally generate  dBASE code but  you want to  create BASIC
               source code for this particular screen).   You may find this
               the easiest  way to  create your  first configuration  file,
               overriding the  default file  on your distribution  diskette
               and then saving the configuration.    

               When you select the configuration option, you  will be asked
               a series of questions; most are self-explanatory and require
               simple yes or no replies, while others require you to choose
               from a set of "legal" replies.
             
               For your replies, you may enter  upper or lower case and you
               must press the  enter key after  each response, even if  the
               reply is a single character.
             
               All  prompts  are  displayed  with  the  "default"  response
               printed   directly after  the question,  enclosed in  square
               brackets [ ].  To choose  the default response, simply press
               the <Enter> key.
           

                                         1-7













          Screen Machine                          Configuring and Starting 
          Screen Development System

               Note that you can stop the configuration process at any time
               by  pressing the 'ESC' key. If you  do, you will go directly
               to the end of the configuration routine and will be asked if
               you want to make the changes permanent (see  the end of this
               section), with the remaining,  un-asked questions taking  on
               the default values.  The default  answers are those you gave
               during previous configuration sessions.
             
               The following are typical  of the questions you will  see on
               the  screen  during the  configuration process, in  question
               and answer format (Q: and A:):
             
             
          Save With Attributes 

               Q:  SCREEN  normally  saves   files  with  color  attributes
               included.   You  may, however,  save files  in 'text'  mode,
               without color   attributes. The  file is then  a simple  DOS
               text file that can be merged  into other programs, or typed,
               etc.
             
               Do you wish files to be saved with attributes [Y] ?

               A: Since 'Y' is the default response, pressing the Enter key
               will  leave the answer at  'Y'. Alternatively, you may press
               'y', 'N' or 'n' as a response.
             
               A "Y"  response to  this prompt  will cause  SCREEN to  save
               files   with color  attributes included.  That  is, if  your
               screen had   several different colors mixed  on the display,
               the color   information will be saved in the disk file.
             
               The response to this prompt also affects the code generation
               for each  of the  major languages,  described later in  this
               section (if  you have  elected to  generate code).   If  you
               reply "Y", source statements will  be generated that display
               color  and  the  assembler code  will  have  attribute bytes
               included in its data. 

               If you respond  with an "N", the file is saved without color
               information and has a carriage  return/line feed appended to
               each screen line. The saved file is  an ASCII text file, and
               can be merged into your text editor, word processor, etc.

             
          Generate BASIC Code
             
               Q: Do you want BASIC source code automatically generated for
               the screen [N]?

                                         1-8













          Screen Machine                          Configuring and Starting 
          Screen Development System

             
               A: 'Y' or 'N'
             
               Replying "Y" will cause BASIC source code to be written to a
               disk file of the same name as your screen file (but with the
               extension of ".BAS") whenever you save a screen.
             
               If you will  not be generating  BASIC code, respond with  an
               "N".   You may  then skip to  the section on  dBASE code (on
               page 1-10), since the configuration  routine will not prompt
               you for the rest of the questions pertaining to BASIC.
             
             
          Starting Line Number

               Q: You must specify certain values for the BASIC code  to be
               generated.
             
               Starting line number of generated code [100]
             
               A: If you want a line number other than 100, type it in  and
               press the <Enter> key.
             
               This  is simply the line number you  wish SCREEN to place on
               the  first statement  it generates.  SCREEN can  be  made to
               generate code for  the newer  BASIC compilers (i.e.  without
               line numbers) by responding with a  "0" to this question. In
               this  case, do not simply press <Enter> as it will cause the
               program to use the default starting line number.
             
             
          Line Number Increment

               Q: Line number increment [10]
             
               A: A number greater than zero
             
               You can cause  line numbers to  increment by any amount  you
               wish, although  it is  your responsibility  to prevent  line
               numbers from exceeding the BASIC maximum of 65535.


          Length of Source Code Lines

               Q: SCREEN can write  any number of characters from  a single
               statement up to 255 characters.
             
               How many  characters do  you want  placed on  a single  line
               [220] ?

                                         1-9













          Screen Machine                          Configuring and Starting 
          Screen Development System

             
               A: A number from 1 to 255
             
               By default, SCREEN  will generate one  source code line  for
               each  line of  the screen which contains attributes  or data
               to be displayed.   The source code line will  consist of one
               or more BASIC language  expressions (e.g. "LOCATE", "COLOR",
               "PRINT") separated by colons.
             
               However, in  some cases it  is useful to vary  the number of
               expressions placed on  a single  line of source  code.   For
               example,  since  each  line of  BASIC  source  code requires
               additional   memory   (except  for   newer   compilers),  it
               occasionally becomes  necessary to pack as  many expressions
               as possible on a single BASIC source code line.
             
               SCREEN will place BASIC expressions  on a single source code
               line until the total number  of characters contained in  the
               expressions  meets  or exceeds  the  number you  enter here.
               When the  maximum number  of characters  is reached,  SCREEN
               will complete the expression being  generated and advance to
               a new source code  line number.   Thus, a low value  entered
               here  would  cause   SCREEN  to  generate  only   one  BASIC
               expression for each line of source code. 

               You may specify any value from  1 to 255.  The exact  number
               of characters  will  vary from  this  number by  some  small
               amount.   If you plan  to take advantage  of the feature  of
               SCREEN described  in the  next prompt  (we highly  recommend
               that you do),  you may answer  this question with any  legal
               value -- it will be ignored anyway.    
             

          One Source Line Per Screen Line
             
               Q: To  make your  BASIC code  more readable,  you can  cause
               SCREEN to ignore the preceding value and generate one source
               line for each line of the screen.
             
               Do you want to do this [Y]?
             
               A: Y or N
             
               SCREEN offers the capability to  write one BASIC source line
               (up to 255 characters) for  each of the lines of  the screen
               being saved.  In other words, the first source line contains
               all of  the code necessary  to recreate the  first non-blank
               line of the screen, the second  source line, the second non-
               blank line of  the screen, etc.   This will  often make  the

                                         1-10













          Screen Machine                          Configuring and Starting 
          Screen Development System

               code more  readable.  To enable this feature, type a "Y" and
               press <Enter>.

          Generating 'C' Code
             
               Q: SCREEN can generate 'C' code.
             
               Do you want C source code  automatically generated for each 
               screen [N]?
             
               A: Press <Enter> for the default response or type in 'Y'  or
               'N'.
              
               If  you want SCREEN to automatically  generate C source code
               that displays your screen, answer 'Y' at the prompt.


          Generating dBASE Code

               Q: SCREEN can  generate source code  for either dBASE II  or
               dBASE III.
             
               For dBASE II, enter 'II'; for dBASE III, enter 'III'.  
               To skip generation of dBASE code, enter 'N'.
               
               A: Enter 'N', 'II', or 'III'.
             
             
          Generating Assembler Code

               Q:  SCREEN  can  generate  a   source  file  containing  the
               assembler DB statements which define your screen. The module
               can then be assembled and linked with a user program.
             
               Do  you  want  this code  automatically  generated  for each
          screen    [N]?
             
               A: Press <Enter> for the default or enter 'Y' or 'N'.

               In order to generate assembler code, respond with a "Y" when
               prompted.  If you will not be generating any assembler code,
               respond  with  an "N".   You  may then  skip to  the section
               entitled "Generating Turbo Pascal Code".
             
               If  you  answer 'Y',  you will  be  prompted to  answer more
               questions.  It  is   assumed  you  are  familiar   with  the
               assembler,  as  well as  linking  multiple modules  with the
               linker.
             

                                         1-11













          Screen Machine                          Configuring and Starting 
          Screen Development System

             
               The questions you will be asked are:
             
               Q: When creating an  assembler source file, SCREEN  uses two
               segments; a  data  segment  and  a code  segment.  The  code
               segment  is  empty and  the  data  segment  contains the  DB
               statements (both segments may have the same name).
             
               Name for data segment [DATA]?
             
               A: Press <Enter> for  the default or  type the name of  your
               data  segment.   This  name is  limited  to 8  characters in
               length.    

               Q: The data segment will be given a  combine type of PUBLIC.
               You must specify  the align type  to use. Legal align  types
               are: BYTE, WORD, PARA, or PAGE.
             
               Align type for data segment [WORD]:
             
               A: Press  <Enter> for the  default or type  in one  of BYTE,
               WORD, PARA or PAGE.
             

               Q: You  may now specify a  class name to be  associated with
               the data  segment and  passed to  the linker.  The assembler
               requires the class name to  be enclosed in quotes;  however,
               SCREEN will enclose the name in quotes for you.
             
               Class name for data segment [DATA]:
             
               A: Press  <Enter> for  the default  or enter  a class  name.
               This name  is also  limited to eight  characters and  SCREEN
               will enclose the name in single quote characters for you.
             

               Q: Name for code segment [CODE]:
             
               A: Press <Enter> for the default or enter a segment name.   

               Both segments (e.g. code and data) may be the same by giving
               them the same  name and attributes (which will  be necessary
               to create a .COM file).
             

               Q: Align type.  Remember, legal align types are: BYTE, WORD,
               PARA or PAGE.
             
               Align type for code segment [BYTE]:

                                         1-12













          Screen Machine                          Configuring and Starting 
          Screen Development System

             
               A: Press <Enter>  for the  default or type  in one of  BYTE,
               WORD, PARA or PAGE.

               Q: Class name for code segment [CODE]:
             
               A: Press <Enter> for the default or enter a class name.    
             

          Generating Turbo Pascal Code

               Q: SCREEN can also generate source code for Turbo Pascal. 
           
               Do you want  TURBO source  code automatically generated  for
               each screen [N]?
             
               A:  Press <Enter> for the default response or type in 'Y' or
               'N'.    

               If you want  SCREEN to  automatically generate Turbo  Pascal
               code that displays your screen, answer 'Y' at the  prompt.  


               A: Press <Enter> for  the default response or type in 'Y' or
               'N'.    
             
             
          Default Colors
             
               Q: The following are acceptable color choices:
             
                0. Black
                1. Blue
                2. Green
                3. Cyan
                4. Red
                5. Magenta
                6. Brown
                7. White
                8. Dark grey
                9. Light blue
               10. Light green
               11. Light cyan
               12. Light red
               13. Light magenta
               14. Yellow
               15. Intense white
             
               Choose color for default foreground [7]:

                                         1-13













          Screen Machine                          Configuring and Starting 
          Screen Development System

             
               A:  Press <Enter>  for  the  default  or  enter  the  number
               corresponding to your selection.
             

               Q: The following are acceptable color choices:
             
                0. Black
                1. Blue
                2. Green
                3. Cyan
                4. Red
                5. Magenta
                6. Brown
                7. White
             
               Choose default color for background [0]:
             
               A:  Press  <Enter>  for  the  default  or  enter  the number
               corresponding to your selection.
             
               The foreground and  background colors which you  select here
               will  be  your default  working  colors. The  SCREEN program
               screens (including all  help screens)  will be displayed  in
               these colors.    

               If  you have elected  to save  screens with  attributes (see
               "Save With Attributes" near the  beginning of this section),
               any source code generated  will use these colors by  default
               for areas of the  screen where no specific colors  have been
               chosen.    
               If you have a monochrome monitor,  you should select a white
               or  intense white foreground  on a black  background.  Other
               colors  may be selected, however  they will appear as either
               black and white  or underlined  on your monochrome  monitor.
               For example, a blue foreground causes the data on the screen
               to be underlined.   See your  BASIC manual's description  of
               the  COLOR  statement  for  a   further  discussion  of  the
               monochrome monitor display equivalents of  the various color
               combinations.
             
             
          Saving Your Configuration
          _________________________

               When you have responded to all of the configuration prompts,
               the following prompt will appear:
             
               Make these changes Permanent [N]
             

                                         1-14













          Screen Machine                          Configuring and Starting 
          Screen Development System

               If you want  to permanently store the  configuration options
               which you have just selected, type  a "Y" and press <Enter>.
               This will cause SCREEN to replace the contents of SCREEN.CFG
               with your newly defined configuration.
             
               If you  do not  wish to permanently  save the  configuration
               options just selected,  press the  <Enter> key. The  changes
               you made, if  any, will apply  only to your current  session
               with SCREEN.    
             

          Loading a Screen Data File
          __________________________

             If  you select  main  option  2 from  the  menu,  you will  be
          prompted    with the following message:

                    Below, enter  the filename that  will be used  to store
                    your  screen  data.   This filename will  also be  used
                    (with   appropriate   extension,   e.g.  ".BAS")   when
                    generating the source code to reproduce the screen.  To
                    select from a list of screen data files, enter the file
                    specification to search for (e.g. "\dat\*.*").    

                    Enter Filename:

                         Press <Esc> to return to main menu.
             
             
               At this point  you may press <Enter>  or <Esc> to  return to
               the  main menu.
             
               To continue, enter either a specific file name or  a search 
               specification.  Both of these options are discussed below.

               In addition, if you have just  exited from the screen editor
               (with or without saving the screen),  you may press the <F3>
               key to automatically  re-enter the name  of the last  screen
               file edited.    

             
          Entering Specific File Names
          ____________________________

               You can enter a valid DOS filename, in the following format:
                 
               d:\path\xxxxxxxx.ext, where:
             
               d: (optional) is the disk drive on which the file is to be  
               loaded/saved.   If it  is not  specified, the  default drive
               will be used.

                                         1-15













          Screen Machine                          Configuring and Starting 
          Screen Development System

             
               \path\  (optional)   is  the  path  name  to  be  used  when
               loading/saving files.   If it is not  specified, the current
               directory will be used.
             
               xxxxxxxx  (required)  is   a  legal  DOS  filename   of  1-8
               characters in length. Do not use  DOS wildcards in the name,
               unless you want  SCREEN to display  the names of files  (see
               next heading).    
               If  you  are editing  a  new  file, the  filename  should be
               different from  any other  existing files  in the  specified
               subdirectory.

               EXT is  the optional 3  character filename extension.   Note
               that if the  extension is specified,  it should not be  ASM,
               BAS,  PAS  or  PRG,  since  source  code  files  with  these
               extensions  are  created if  you  have configured  SCREEN to
               generate source code.    
               If a valid file is found that matches your input, it will be
               loaded and displayed on  the monitor and you will  be placed
               in  edit  mode (see next section).   A valid file  is either
               2050  bytes   (without  attributes)  or   4000  bytes  (with
               attributes) in length.    

               If the file  is not found, SCREEN will assume  that you want
               to   create a new file and will place  you in edit mode.  In
               addition, the words "New  File" will flash at the  bottom of
               the screen until you press another key.
             
             
          Enter a Search Specification
          ____________________________

               If  you would  like SCREEN  to  display the  available valid
               screen   files,   enter   a    search   specification.   The
               specification takes the same format as a DOS DIR command:
             
               d:\path\xxxxxxxx.ext
             
               d:  (optional) is the disk drive which will be searched.  If
               it is not specified, the default drive will be used.

               \path\ (optional) is the path to be used when searching.  If
               it is not specified, the current directory will be used.    

               xxxxxxxx (required)  is  a  combination  of  characters  and
               wildcards ('*' and '?') of 1-8 characters in length.
             
               EXT is the  optional 3 character filename  extension and may
               also contain DOS wildcard characters.

                                         1-16













          Screen Machine                          Configuring and Starting 
          Screen Development System

             
               After entering the search  specification, SCREEN will search
               for  all  valid files  (e.g.  2050  bytes or  4000  bytes in
               length) and display the names of the files on the screen.
             
               One  of the names will  be highlighted and  you can move the
               highlight with the cursor keys.
             
               Press <Enter>  to  load the  highlighted  file or  <Esc>  to
               return to the "Load a file" menu.
             
               If you load a highlighted file, you will be placed into edit
               mode (see next section).





































                                         1-17













          Screen Machine                           Screen Editor
          Screen Development System

                                  The Screen Editor
             
             
          Keyboard Usage and Online Help
          ______________________________
             
               While you are in the full screen editor, you can use  any of
               the alphanumeric keys to enter text on your screen.

               The  function keys <F1>  through <F10> are  reserved for the
               editor's  functions.   Similarly, the use  of the  <ALT> and
               <Ctrl> keys  in combination with the <F1> through <F10> keys
               are reserved.
             
               The use of the <Shift> in  combination with the <F1> through
               <F10>  keys  is reserved  to  execute saved  keystrokes (see
               "Keyboard Macros" in this section).
             
               The use of each  function key is explained in  this section.
               However,  for  general  reference,  if  you need  an  online
               reminder of the  reserved key definitions, simply  press the
               <F1> key any time you are in the screen editor.
             

          On-Line Help  <F1>
          ____________
             
               This  sub-section  describes  the   general  help  that   is
               available.  There  are additional help screens  for graphics
               characters,  color and  keyboard macros  that are  discussed
               later in this section.  
            
               When you press the help key <F1> while editing a screen, the
               editor will display the following screen:
             
             
                                    Function Keys
             
                    <F1>  Help               <Alt>-<F1> Mark Repeat
                    <F2>  Mark Line          <Alt>-<F2> End Repeat
                    <F3>  Copy               <Alt>-<F3> Repeat Character
                    <F4>  Move               <Alt>-<F4> Reverse Video
                    <F5>  Insert Line        <Alt>-<F5> Exit W'out Save
                    <F6>  Delete Line        <Alt>-<F6>      Help     Graph
                                             Characters
                    <F7>  Shift Screen Left  <Alt>-<F7> Center    
                    <F8>  Shift Screen Right <Alt>-<F8> Center in Box    
                    <F9>  Cancel             <Alt>-<F9> Draw Single Box    
                    <F10> Color              <Alt>-<F10> Draw Double Box



                                         1-18













          Screen Machine                           Screen Editor
          Screen Development System

               If this screen  lists the  meaning of the  function key  you
               need to  know, you  can then  press any  key (except F1)  to
               return to the full screen editor.

               If you need  to view  the meanings of  other reserved  keys,
               press  the <F1> function key  while viewing the screen shown
               above. The editor will display the following screen:


                               Function Keys Continued
             
                    <Ctrl>-<F1> Unmark Block         <Ctrl>-<F6>     Delete
                                                  Block
                    <Ctrl>-<F2> Mark Block           <Ctrl>-<F7>     Recall
                                                  Block
                    <Ctrl>-<F3> Re-mark Block        <Ctrl>-<F8> Unused
                    <Ctrl>-<F4> Save to Memory       <Ctrl>-<F9> Unused
                    <Ctrl>-<F5> Recall from Memory   <Ctrl>-<F10>  Unused  

                                      Other Keys
             
                    <Esc>         Save file and exit Editor
                    <End>         Move to end of line
                    <Home>        Move to beginning of line
                    <Ctrl>-<End>  Move to  bottom right corner of screen   
                    <Ctrl>-<Home> Move to top left corner of screen
                    <PgUp>        Move to top line of current column
                    <PgDn>        Move to bottom line of current column    

                ** Press <F1> for more help or any other to exit **   


               At this point you  may return to  the full screen editor  by
               pressing any  key except <F1>.   If you press  the <F1> key,
               you will be shown  the current macros assigned to  the macro
               keys (see the discussion on macros, later  in this section.)
               Note  that if you  change the  macro keys  and you  want the
               macro definition  help screen  to reflect  the changes,  you
               must edit the file "HELP3.@#$".
             
             
          Save File and Exit  <Esc>
          __________________

               Pressing  the   <Esc>  key   while  in   screen  edit   mode
               automatically  saves the screen image, generates source code
               according to the  configuration file and returns to SCREEN's
               main menu.   If  you wish  to immediately  re-load the  same
               screen file for editing (i.e., "save and continue"), you may
               press the <F3> key.   This automatically enters the  name of

                                         1-19













          Screen Machine                           Screen Editor
          Screen Development System

               the last screen file edited.
             
             

          Exit Without Save  <Alt>-<F5>
          _________________

               If you want  to return to the  main menu without  saving the
               screen  image  (and  abandoning  any  changes)  and  without
               creating  source files, hold  the <Alt>  key and  press <F5>
               once.
             
               The program  will ask you to  confirm that you  wish to exit
               without saving your work.
             
               If you do confirm  your request (by pressing 'Y'),  you will
               return to the main menu.
             
               If you answer with 'N', you will be returned to edit  mode. 
                
               If  you  return  to  the  main  menu, and  if  you  wish  to
               immediately  re-load the same screen file for editing (i.e.,
               "save and  continue"), you  may press  the <F3>  key.   This
               automatically  enters  the  name  of  the last  screen  file
               edited.
             
             
          Cursor Movement
          _______________
             
               You can use  the alphanumeric keys to enter lines of text on
               your screen. A few special keys to keep in mind when you are
               entering text are:
             
                    Key    Function

                    <End>     Places the cursor in column 80.
             
                    <Home>    Places  the cursor  at the  beginning of  the
                              current line.
             
               <Ctrl>-<End>   Places the  cursor at the bottom right corner
                              of the screen.
             
               <Ctrl>-<Home>  Places the cursor  at the top left  corner of
                              the  screen.
             
                    <PgUp>    Places  the  cursor on  the  top line  of the
                              screen in the same column it is currently in.

                    <PgDn>    Places the cursor  on the bottom line  of the

                                         1-20













          Screen Machine                           Screen Editor
          Screen Development System

                              screen in the same column it is currently in.
                                
                    <TAB>     Moves the cursor to the  next tab stop to the
                              right (tabs are  set every   8 columns),  but
                              not past the end of the line.
             
               <Shift>-<TAB>  Moves the cursor  to the next tab stop to the
                              left (tabs are set every  8 columns), but not
                              past the beginning of the line.
             

               The cursor  control keys located  on the number  pad (right,
               left, up and down arrows) perform their natural, instinctive
               functions.

               Note that the editor does not auto-wrap text when the end of
               a line is reached.
             

          Insert Characters
          _________________
             
               A  true  insert mode  is supported.    Pressing the  INS key
               toggles   from  insert  to overstrike  mode and  back again.
               When  in  overstrike  mode,  the   cursor  is  the  standard
               underline  type  - in  insert mode,  the  cursor is  a full-
               cursor.
             
             
          Delete Characters
          _________________
             
               To delete characters, move the cursor  to the character that
               should be deleted, and press the <Del> key to remove it.    
             

          Insert a Line  <F5>
          _____________
             
               To INSERT a blank line,  move the cursor to the screen  line
               where you want  a line to  be inserted, and  press the  <F5>
               key.

               The cursor  will remain on  the newly  inserted blank  line.
               Also, anything on the bottom line  of the screen will vanish
               as the remainder of  the screen lines are all  relocated one
               line down (see Cancel function later in this section).
             
             
          Delete an Entire Line  <F6>
          _____________________
             
               To DELETE a screen line, move the cursor to the  screen line

                                         1-21













          Screen Machine                           Screen Editor
          Screen Development System

               which you want to delete, and press the <F6> key.  All lines
               below the line  you delete will be  moved up one line  and a
               blank line will be inserted at the bottom of the screen.















































                                         1-22













          Screen Machine                           Screen Editor
          Screen Development System


          Copy an Entire Line  <F2> , <F3>
          ___________________
             
               To COPY a screen line:

                  * Move  the  cursor to  the line  you  want to  copy (the
                    "source  line").
               
                  * Mark the line by pressing the <F2> key.
               
                  * Move the cursor  to the line to which  you want to copy
                    the  marked line (the "destination line").

                  * Copy the line by pressing the <F3> key.
             
               If the destination line was blank, the copied line is simply
               placed there, without altering the  remainder of the screen.
               If there is already  some data on the destination  line, the
               copied line is "inserted" by first shifting all lines  below
               the destination  line down one (and dropping the bottom line
               off of  the screen), and  then placing a copy  of the source
               line onto the line where the cursor is located.
             

          Repeated Line Copy  <F3>
          __________________
             
               Once you have marked a line (by positioning the cursor on it
               and pressing <F2>), you can continue to make copies of it by
               placing  the  cursor on  the  desired destination  lines and
               pressing <F3>.    
             

          Un-Mark a Line  <F2>
          ______________
             
               To "unmark" the  source line, either position  the cursor on
               that line and press <F2> again  (to toggle the mark off), or
               position the cursor on another line,  press <F2> to mark the
               new line,  and then press <F2> again  to toggle the new line
               off.    
             

          Move a Line  <F4>
          ___________
             
               To MOVE a screen line:

                  * Locate the cursor on  the line you want to move  (the  
                    "source line").
               
                  * Mark the line by pressing the <F2> key.

                                         1-23













          Screen Machine                           Screen Editor
          Screen Development System

               
                  * Locate the cursor on the line to which you want to move
                    the marked line.
               
                  * Press the <F4> key.
             
               The original source  line is deleted, the screen is adjusted
               upward one line, and then the source line is copied into the
               line where the cursor is located.
             
               As with the copy line function,  if the destination line was
               blank,  the  moved  line  is  simply placed  there,  without
               altering  the remainder  of the screen.  If there is already
               some  data  on  the  destination  line,  the  moved line  is
               "inserted" by first shifting all lines below the destination
               line  down  one (and  dropping the  bottom  line off  of the
               screen), and then placing a copy of the source line onto the
               line where the cursor is located.    
             

          Cancel a Line Function  <F9>
          ______________________
             
               Any  of  the four  line  functions discussed  above (Insert,
               Delete, Copy  and Move)  may be "canceled"  by pressing  the
               <F9> key before you begin any  one of the four functions the
               next time.    

               "Cancel"  will restore  a line deleted  with <F6>,  remove a
               line inserted with  <F5>, or "undo" the effects of a copy or
               move line operation.  "Cancel" always reverses the last line
               operation processed.
             
               Note that  if a  block is marked  (see below)  after a  line
               operation takes  place, the  last line  operation cannot  be
               canceled.    
             

          Center a Line  <Alt>-<F7>
          _____________
             
               To center a line of text  (between the left and right  edges
               of the physical screen):
             
                  * Place the cursor on the screen line  to be centered.   
                     
                  * Hold down the <Alt> key and press <F7>.
             
             



                                         1-24













          Screen Machine                           Screen Editor
          Screen Development System


          Center the Screen   <F7> , <F8>
          _________________
             
               To center an entire  screen of material, "shift"  the entire
               screen one  column at a  time.  To  shift the screen  to the
               right,  press the <F8> function key.  To shift the screen to
               the left, press <F7>.

               All 25 lines of  the screen are shifted one column  for each
               press  of  the  function  key.    The  characters  which are
               "shifted" off of the screen (those in column 1 when shifting
               left) are lost; the columns at the other end (the right side
               when shifting left) are filled with spaces.
             
             
          Center Text in a Box  <Alt>-<F8>
          ____________________
             
               This means you  can build  a menu box,  place text  anywhere
               inside of it,  and then center the text within  the left and
               right vertical borders of the box.
             
               All you  need to  use this function  is a  line with  either
               ASCII character  179 (single  vertical bar)  or 186  (double
               vertical bar) on each side of one or more text characters on
               the same line as the cursor.
             
               You can center the text  within the vertical bar  characters
               by  moving the cursor to where  any part of the text appears
               and  holding the <Alt> key down and pressing the <F8> key. 

               Note: This operation works  on a single line at a  time. You
               will need to  move the cursor to each line within the box in
               order to center all of the text in a box.
             
               If this  operation would  cause a  marked block  of text  to
               move, you will receive the  warning message "Block operation
               pending. Use unmark first."
             
               If you have  overlapping boxes,  or two boxes  on that  pass
               through  the  line where  your  text  is, the  text  will be
               centered within the  box where the  cursor appears.  If  the
               cursor is inside  multiple boxes, the innermost box  is used
               for centering purposes.    
             






                                         1-25













          Screen Machine                           Screen Editor
          Screen Development System


          Change Colors  <F10>
          _____________
             
               You can change the  colors on any part of the  screen at any
               time.  Once  SCREEN is configured  for color and you  are in
               the SCREEN editor, you can designate certain areas for color
               and select the colors of your choice.
             
               To designate color for an area of  the screen, it is easiest
               to view the area as a rectangle, or window.
             
               Changing the color  for a  given portion of  the screen,  or
               even the entire screen, is performed as follows:

                  * Position the cursor at one of the four  corners of the 
                    window.

                  * Press the <F10> key
               
                  * Select the foreground color you desire  from the menu  
                    screen that appears.
               
                  * Select the background color you desire  from the menu  
                    screen.
               
                  * Move the cursor  to the  diagonally opposite corner  of
                    the window.
               
                  * Press the  <F10> key again and the designated area will
                    be changed to the colors you selected.
             

               Note: When you  press the <F10> key, if  the words Mono Only
               appear  on  the   color  menu  screen  (beneath   the  words
               "Foreground  Color"),  then  SCREEN is  not  configured  for
               color.   This means  color attributes  will not  be included
               when your screen is  saved.  To configure SCREEN  for color,
               press <Esc> to return to the  editing screen, press <Esc> to
               save the screen, then press F1  to configure the screen (see
               section  1  for  instructions).   Once  you  have configured
               SCREEN for color, you can re-load  the screen and change the
               colors.
             
               To change the color of a single character, perform the first
               four  steps  shown  above,  then  press  <F10>  immediately,
               without  moving  the  cursor  from   underneath  the  single
               character.
             
             

                                         1-26













          Screen Machine                           Screen Editor
          Screen Development System



















































                                         1-27













          Screen Machine                           Screen Editor
          Screen Development System


          On-Line Help for Changing Color  <F1>
          _______________________________
             
               Online Help is  available for the  COLOR function.  To  gain
               access to  this  "help",  you  must be  viewing  either  the
               foreground  or background color menus.  At that point, press
               <F1>.

               Press any key to  return to the color menu you  were viewing
               before you asked for help.
             
             
          Blinking Foreground  <*>
          ___________________
             
               To have the foreground  color blink on and off,  precede the
               color number or letter of the color desired with an asterisk
               when entering the foreground color.
             
             
          Reverse Video  <Alt>-<F4>
          _____________
             
               To  use  the reverse  video capability  of SCREEN,  you must
               configure your  system for color  before you enter  the full
               screen editor.  This is true even if you do not have a color
               monitor.

               To  cause a single  character to  display in  reverse video,
               move  the cursor to the character you want to have appear in
               reverse video, then  hold down the  <Alt> key and press  the
               <F4> key.    
               Since whatever foreground/background color  the character is
               currently  displayed  in  is reversed,  you  can  "undo" the
               reverse   video function by repositioning the cursor on each
               of the  characters which have been changed and repeating the
               <Alt>-<F4> sequence.
             
             
          Graphics Characters
          ___________________
             
               You can use any of the  extended graphics characters to make
               a special  symbol appear  on your  screen.   By using  these
               characters  you can create  boxes, bar charts,  arrows and a
               variety of special forms of your choice.
             
               To use the graphic character of your choice:
             
                  * Hold the <Alt> key down. (Users of Superkey may need to
                    hold the <Shift> key also.)
               

                                         1-28













          Screen Machine                           Screen Editor
          Screen Development System

                  * Enter the decimal equivalent of the  character on the  
                    numeric  keypad  (not  the upper  row  of  keys  on the
                    keyboard).

                  * Release the <Alt> key.
             

               For example, 205  is entered by pressing  <Alt>, tapping the
               numeric keypad 2,  the 0, and  the 5, and finally  releasing
               the <Alt>.


          On-Line Graphics Character Help  <Alt>-<F6>
          _______________________________
             
               The decimal codes for each of  the special characters can be
               seen on the special graphics character help screen.  To view
               this screen, hold the <Alt> key down and press <F6>.
             
               Upon pressing  <F6>, your  screen will  display the  special
               characters for ASCII codes  128 through 186.  Press  <F1> to
               see the characters for  ASCII 187 through 255, or  press any
               other key to return to the editing screen.
             
             
          Repeating Characters  <Alt>-<F3>
          ____________________
             
               To  repeat the last  character entered, hold  down the <Alt>
               key  and press <F3>.  This can be  repeated as many times as
               desired.  This feature is helpful  when you want to use  the
               same graphics character several times.
             
             
          Drawing Lines   <Alt>-<F1> , <Alt>-<F2>
          _____________
             
               Besides being able to repeat  a character, SCREEN allows you
               to draw vertical and horizontal lines.
             
               To draw a line using a  given character, follow these steps:
                 
                  * Position  the  cursor on  the character  to be  used in
                    drawing the line. (If the first character has  not been
                    typed, type it first.)
               
                  * Hold down the  <Alt> key  and press <F1>.   This  tells
                    SCREEN where the line starts.
               
                  * Move the cursor to the point where you want the line to
                    end.
               

                                         1-29













          Screen Machine                           Screen Editor
          Screen Development System

                  * Hold down the <Alt> key and press <F2>.
             
               The line  is now filled in  with the character which  was at
               the original cursor position.   Please note that  you cannot
               draw a diagonal line using this method.
             
             
          Mark a Block  <Ctrl>-<F2>
          ____________
             
               You may work with large sections  of the screen in "blocks".
               For purposes of  discussion, a block can be  thought of as a
               "window", or rectangular area of the screen.

               To mark a block of text on the screen:
             
                  * Move  the  cursor to  one of  the  four corners  of the
                    block.      
                  * Hold the <Ctrl> key and press the <F2> key once. The   
                    character under the cursor will be displayed in inverse
                    video.
               
                  * Move the  cursor to  the corner  of the  block that  is
                    diagonally opposite from the first marked corner.

                  * Hold the <Ctrl> key and press the  <F2> key once. The  
                    entire block will be displayed in inverse video.    
             

          Copy a Block  <F3>
          ____________
             
               When you have marked a block and  it is displayed in inverse
               video, you may make a copy of the block by moving the cursor
               to the top-left  corner of the area on  the screen where you
               want the block to be copied, and pressing the <F3> key.
             
             
          Move a Block  <F4>
          ____________
             
               Similarly, to  move a block  that has been  marked, position
               the cursor at the top left corner  of the area on the screen
               where you want to move the block, and press the <F4> key.
             
             
          Un-mark a Block  <Ctrl>-<F1>
          _______________
             
               You  may  un-mark a  block  by  holding the  <Ctrl>  key and
               pressing the <F1> key once.
             
             

                                         1-30













          Screen Machine                           Screen Editor
          Screen Development System

          Re-mark a Block  <Ctrl>-<F3>
          _______________
             
               A block can be  instantly marked again (provided it  was the
               most recently marked  block) by holding  the <Ctrl> key  and
               pressing the <F3> key once.
             
             
          Save Screen to Memory  <Ctrl>-<F4>
          _____________________
             
               This feature is used when you  want to experiment with "what
               if" changes on  your screen and you do not want to save your
               screen to disk.   Holding the  <Ctrl> key and pressing  <F4>
               once will save the screen image to a safe location in memory
               that can  be recalled as  described in  the next  paragraph.
               Note that the program will ask you to  confirm that you want
               to save the screen to memory. 

               This  feature,  together  with  the   recall  feature  (next
               paragraph) can be used for COPY'ing entire screens from  one
               file to another, or if you  prefer to think of it this  way,
               to save the  current screen  using a different  name.   This
               saves you from having to exit to DOS to perform a copy.  

               In order to  accomplish a screen  copy, load the screen  you
               wish to copy, save it to memory <Ctrl>-<F4>, exit with <Esc>
               or  without  saving  <Alt>-<F5>, load  another  screen <F2>,
               which  can  be a new  screen, and finally, recall  the saved
               screen from memory <Ctrl>-<F5>.
             
             
          Recall Screen from Memory  <Ctrl>-<F5>
          _________________________
             
               When  you have saved  a screen to  memory using <Ctrl>-<F4>,
               you can restore  the screen  by holding the  <Ctrl> key  and
               pressing <F5> once.   Note that you must have saved a screen
               before you can recall it.
             
             
          Delete a Block  <Ctrl>-<F6>
          ______________
             
               You can delete a marked block  by holding the <Ctrl> key and
               pressing  <F6>  once.   Note  that  "delete",  as used  with
               blocks, means that any  text present in the marked  block is
               replaced by blank spaces -- this  function does not move any
               text around your screen.
             
             



                                         1-31













          Screen Machine                           Screen Editor
          Screen Development System

          Block Cut and Paste  <Ctrl>-<F7>
          ___________________
             
               When you  wish to copy a  block from one screen  to another,
               mark the block in the "source"  screen (using <Ctrl>-<F2> to
               mark two corners),  load the "destination" screen,  hold the
               <Ctrl> key  and  press <F7>  once.   After  confirming  your
               request, the  block will  be copied  into the  "destination"
               screen.
             
             
          Cancel Block Operation  <F9>
          ______________________
             
               You may "undo" the last block operation by pressing the <F9>
               key.
              
               Note  that  if you  mark  a  line after  performing  a block
               operation, the last block operation cannot be canceled.
             
             
          Considerations When Using Blocks
          ________________________________
             
               When a marked block  is present on the screen,  certain line
               operations will not be allowed.   You will receive a message
               saying "Block operation pending.  Use unmark first." 

               This situation is  remedied by using <Ctrl>-<F1>  to un-mark
               the block, performing the line  operation, and finally using
               <Ctrl>-<F3>  to  re-mark  the block  (assuming  you  want it
               remarked).

               The operations that will cause this message are:
             
                  * <F5> Insert a line
               
                  * <F6> Delete a line
               
                  * <F7> Shift screen left
               
                  * <F8> Shift screen right
             

               If a marked block  is present on the screen, using  the <F2>
               key to  mark a  line will  automatically un-mark the  block.
               The block can then be re-marked using <Ctrl>-<F3>.
             
               Marking a  corner of a new block  will automatically un-mark
               an existing  block.  In  this case,  the first block  can no
               longer be re-marked.
             

                                         1-32













          Screen Machine                           Screen Editor
          Screen Development System

             
          Drawing Single Line Boxes  <Alt>-<F9>
          _________________________
             
               To draw a single line box on the screen:
             
                  * Position the cursor at one corner  of a rectangle that 
                    represents the box.
               
                  * Hold the <Alt> key down and press  the <F9> key once. A
                    box character will appear at the cursor location.

                  * Move the cursor  to the  diagonally opposite corner  of
                    the  area you want "boxed".
               
                  * Hold the <Alt> key  down and press the <F9>  key again.
                    The box will be drawn automatically.
             
             
          Drawing Double Line Boxes  <Alt>-<F10>
          _________________________
             
               To draw a double line box on the screen:
             
                  * Position the cursor at one corner  of a rectangle that 
                    represents the box.
               
                  * Hold the <Alt> key down and press the <F10> key once. A
                    box character will appear at the cursor location.

                  * Move the cursor  to the  diagonally opposite corner  of
                    the  area you want "boxed".
               
                  * Hold the <Alt> key down and  press the <F10> key again.
                    The box will be drawn automatically.
             

          Keyboard Macros
          _______________
             
               One  of  SCREEN's  most  powerful   features  is  its  macro
               capability.  With  macros, you can significantly  reduce the
               number of keystrokes required to create or edit a screen.
             
               A macro is  simply a collection  of keystrokes which can  be
               "played back" on  command.  The program retains the sequence
               of keystrokes in its memory; then  when the macro is "played
               back", the  program acts  exactly as  it would  if you  were
               physically typing the keys at the keyboard.
             
               The  savings to you  comes from having only  to press one or
               two keys to tell SCREEN to "play" a certain macro.

                                         1-33













          Screen Machine                           Screen Editor
          Screen Development System

             
               The number of keystrokes in a macro is virtually unlimited -
               - you can even define a macro which is all of the keystrokes
               required to create an entire screen!
             
               SCREEN allows a maximum  of ten macros to be  "active", that
               is, available for  playback, at any one time.  A default set
               of macros is  loaded when you start SCREEN from  DOS.  These
               ten  macros  are   those  which   are  stored  in   SCREEN's
               configuration file.

               Until you  create a new  configuration file, or  record some
               macros and save  them to the  configuration as you exit  the
               program, the  ten macros which  will be available  are those
               which  are supplied with SCREEN.  These macros are extremely
               simple,  yet  are useful,  and give  you  the feel  of macro
               usage.
             
             
          On-Line Macro Help  (HELP3.@#$)
          __________________
             
               When you press the <F1> help key while editing a screen, the
               first two help screens display the meanings of  all reserved
               keys other than the macro keys.
             
               If  you  press  <F1>  three times  (from  the  main  editing
               screen), you will be  presented with the contents of  a file
               called HELP3.@#$.   This is a standard  SCREEN file (without
               attributes) that contains descriptions of the macro keys, as
               they are supplied on your program disk.
             
               You may change the screen so that your own macro definitions
               are displayed as part of the help process!  Simply edit  and
               save the screen file HELP3.@#$.
             
             
          Recording a Macro  <Alt>-1 to <Alt>-0
          _________________
             
               As with any  recording, there are  two steps to "playing"  a
               macro -- making the recording and playing it back.
             
               You can change  the program's  active macros in  one of  two
               ways:    
                  * Load an entirely new configuration  file.  This results
                    in  loading the ten  macros which  are defined  in that
                    configuration file so  that they become the  new active
                    macros. (This assumes that you have created one or more
                    new   macros   which  you   have   saved  into   a  new
                    configuration file.   The only  way to  do this,  other

                                         1-34













          Screen Machine                           Screen Editor
          Screen Development System

                    than borrowing a  file from  someone else, is to record
                    a macro of your own.)

                  * Use  SCREEN's  macro   record  capability.  With   this
                    feature, you  do not  have to  sit down  and write  out
                    macros,  you simply "push  the record button", continue
                    editing as usual,  then when you are finished "turn the
                    record button" off.   You see the  immediate effects of
                    your macro while you create it.
             
               When using  the macro record feature, SCREEN acts exactly as
               before, except  that all of  the keystrokes which  you press
               are  remembered  for  future playback  and  saving  to disk.
               Actually, this is not  entirely true -- if you  request Help
               by pressing  <F1> while recording a macro,  the <F1> and the
               subsequent  key you  must strike  to return  to  the editing
               screen do not become a part of the saved macro.
             
               To start recording  a macro,  hold down the  <Alt> key,  and
               press one of  the number  keys along  the upper  row of  the
               typewriter section  of the  keyboard (not  the number  pad).
               The number key you choose determines the number of the macro
               which  will be recorded.  Macros  are "numbered" one through
               ten (pressing the zero key is for macro number ten).
             
               When you  begin to  record a  macro, a  blinking highlighted
               block will appear in the corner  of the screen furthest from
               the current cursor position.   Inside of the block  you will
               see  the  abbreviation  "Rec" for  record,  followed  by the
               number of  the macro  you are  recording (again,  a zero  is
               displayed for macro 10).  You are  now in the "macro record"
               mode.  This highlighted block will always be visible on your
               screen for as long as you remain in the record mode.
             
               When you have finished typing all of the keystrokes that you
               want saved as  the macro,  repeat the <Alt>-number  sequence
               which you used to enter the macro record mode.  If you don't
               remember which  number macro you are recording, just look at
               the highlighted block.
             
               You have now  exited the macro  record mode.  Whatever  text
               that was under the highlighted block will now reappear.  

               If you want  to immediately  begin recording another  macro,
               you can hold down <Alt> and type the number key for  the new
               macro before exiting  the record mode  for the first  macro.
               This will automatically terminate the recording of the first
               macro, and start recording the  new one.  In this case,  the
               <Alt>-number keystrokes are not  saved as part of  the macro

                                         1-35













          Screen Machine                           Screen Editor
          Screen Development System

               definition.    
               As an example, to record the word "computer" as new macro 9,
               follow these steps:
             
                  * Hold down <ALT> and press the "9" key.
               
                  * Notice the block with "Rec 9"  appears in one corner of
                    your screen.
               
                  * Type "computer" as  normal. If you  make an error,  and
                    have  to backspace, don't worry - the backspace(s) will
                    become a    part of the macro definition, and  when the
                    macro is played    back, the character(s) you struck by
                    mistake will be pro-   cessed as if you typed them, but
                    then the backspaces will    also be processed, deleting
                    the unwanted characters.      

                  * When you have typed the final  "r", hold down <Alt> and
                    press  the "9"  key again.   You have  now successfully
                    redefined macro 9.
               
                  * The  highlighted block  now  disappears, and  the  text
                    which was in that position on the screen reappears.    


               Instead of pressing <Alt>-9 a second time, if you had wanted
               to  immediately  define macro  4  as the  word "programming"
               preceded by a space,  you could have held <ALT>  and pressed
               the  "4" key  rather than  "9".   The definition of  macro 9
               would have terminated, and macro 4  would contain all of the
               keystrokes you make until  you hold <ALT> and  press another
               number key  (either  a  "4"  to terminate  the  record  mode
               altogether, or another number, which would start recording a
               third macro).
             
               Remember that as long as the highlighted block is visible on
               your screen, you are still recording a macro.
             
               When you start  recording macros,  you will probably  notice
               that as soon as you place the cursor on the same line as the
               highlighted  block,  the  block will  move  to  the opposite
               corner of the screen.  The text that was under the  block at
               its original location is replaced.
             
               Also, if you exit from a screen, either by pressing <Esc> or
               exit  without  saving with  <Alt>-<F5>,  any macro  which is
               being recorded  is immediately  terminated.   The <Esc>  and
               <Alt>-<F5> combinations are not made a part of saved macros.


                                         1-36













          Screen Machine                           Screen Editor
          Screen Development System



















































                                         1-37













          Screen Machine                           Screen Editor
          Screen Development System

          Considerations When Using Macros
          ________________________________
             
               If you are new  to macros, they can sometimes  be confusing.
               Seeing the effect  of the  keystrokes as  you are  recording
               them is a  great help to  "writing" a macro,  but there  are
               still some points  to consider.  Because SCREEN  is designed
               to be used within fixed borders, it is important to note how
               certain keys will act inside of macros.
             
               For example,  the <Enter> and <End> keys  should normally be
               avoided in macros because columns will not necessarily align
               (depending on the original cursor  location).  For instance,
               if you are  creating a macro  which draws two upward  arrows
               spaced 8 characters apart horizontally,  using the carat and
               vertical bar characters (^,|), and,  when creating the macro
               you are working very near the left edge of the screen, it is
               tempting to type both  carats, then use <ENTER> in  order to
               return to the left edge of the screen in order to  place the
               first  vertical  bar character  (|)  on the  line  under the
               carat.  However,  if you  play back  this macro  while at  a
               different  starting  column,  the  <Enter>  will  cause  the
               vertical bars to be  placed in the  same columns at the  far
               left of the screen, which is probably not what you intended.

               In  general, then, the cursor  direction keys, the space bar
               and  the backspace key should  be used to perform horizontal
               positioning.
             
               Similarly, macros that place text on more than one line will
               not work  as might  be expected  if "played  back" when  the
               cursor is at the top or bottom of the screen.  To avoid this
               type of confusion, we  suggest making the first key  in each
               macro <Ctrl> <Home>.  (Holding down  the <Ctrl> key and then
               pressing the <Home> key  causes the cursor to be  located at
               the first column  of the first row  on the screen.)   Now if
               you  are  recording  a  macro  which creates  characters  at
               specific  locations  on  the  screen  (such  as  a  graphics
               character  border), the macro will always playback correctly
               regardless of the cursor position when the macro playback is
               started.
             
             
          Playing Macros Back  <Shift>-<F1> to <Shift>-<F10>
          ___________________
             
               "Playing" a macro  is a  simple two-key sequence.   The  ten
               function  keys  in  combination with  the  <Shift>  key will
               replay the  saved keystrokes  for the  macro whose  numbered
               function  key  was  struck.   In  other  words, <Shift>-<F1>
               replays macro 1, <Shift>-<F4> replays macro 4, etc.

                                         1-38













          Screen Machine                           Screen Editor
          Screen Development System

             
             
          Nesting Macros
          ______________
             
               SCREEN allows "nesting" of macros.   This means that a macro
               can contain, among its saved keystrokes,  a <Shift>-Function
               key sequence.
             
               In this case, SCREEN  acts on the keystrokes from  the first
               macro  until  the <Shift>-Function  key  is read.    It then
               suspends the first  macro, and  begins to act  on the  saved
               keystrokes of the second macro.

               When all of  the keystrokes  of the second  macro have  been
               acted  on (it has  been "played to  completion") SCREEN then
               continues with the  keystrokes from the  first macro at  the
               first keystroke after the <Shift>-Function key.
             
               Notice that  SCREEN does  not save  whatever keystrokes  the
               second macro consisted  of at the  time the first macro  was
               recorded, but rather  saves the <Shift>-Function key.   This
               enables you to  redefine the meaning  of a macro, simply  by
               changing the meaning of the nested macro keystrokes.
             
               For  example,  suppose that  macros  #1 and  #2  contain the
               keystrokes:
             
                    1. The <Shift>-<F2> Corporation.

                    2. Burroughs
             
               When you playback macro #1, "The Burroughs Corporation"  is 
               displayed on  the screen.   However,  Burroughs merged  with
               Sperry to form  "Unisys".  To  change this macro,  re-record
               macro  #2 as "Unisys".  Then, when  macro #1 is played back,
               it will type "The Unisys Corporation".
             
               Macros can be  nested as many as eight levels deep.  As soon
               as  you  attempt  to nest  to  the  ninth  layer, all  macro
               processing is halted, and all pending macros are cleared.
             
             
          Recursive Macros
          ________________
             
               A recursive  macro  is one  which calls  itself.   Recursive
               macros are not prohibited but will always run into the eight
               level nesting limitation.
             
               Assume that #8  is "Be <Shift>-<F4>",  and that macro #4  is

                                         1-39













          Screen Machine                           Screen Editor
          Screen Development System

               "there <Shift>-<F8>".  When you press <Shift>-<F8> to replay
               macro #8:

                  * "Be " is printed.
               
                  * Macro #8 is suspended.
             
                  * Macro #4 is started as a nested macro.
               
                  * Macro #4 causes "there" to be printed.
               
                  * Macro #4 is suspended
               
                  * Macro #8 is started as a third-level nested macro.    


               Since  all  processing   stops  when  the  ninth   level  is
               attempted, the  result  is that  four "Be  there" pairs  are
               printed.































                                         1-40













          Screen Machine                           Screen Capture
          Screen Development System


                                    Screen Capture
             
               CAPTURE allows you to take snapshots  of any screen (text or
               CGA compatible graphics  mode) displayed on your  monitor at
               an time.   CAPTURE takes  over the <Shift>-<PrtSc>  function
               which nomally sends the screen's contents to the printer.
             
               CAPTURE can be  directed to  save screens with  or without  
               attributes.  If  attributes are not  desired, it stores  the
               screen data  file in  ASCII text  file  format, providing  a
               powerful tool for use in documenting systems.
             
               You can also use the captured  screen data files (text only)
               as input  into  SCREEN  (the  screen  editor)  in  order  to
               generate source code  for the desired screen in BASIC, dBASE
               II and III, Turbo Pascal and 8086/8088 Assembler language.
             
               When dealing with switches (shown as  a forward slash '/' in
               this  manual),  please  note  that  the current  DOS  switch
               character must be used with CAPTURE.  For MS-DOS and PC-DOS,
               the forward slash is the default  switch character, but some
               versions  of  DOS  allow  the  user  to  change  the  switch
               character.
             
             
          Help with CAPTURE
          _________________
             
               You may at any time request  help from CAPTURE.COM by typing
               "CAPTURE" and pressing the <Enter> key.
             
             
          Using CAPTURE Without SCREEN 
          _____________________________

               To start the  program, type CAPTURE, followed  by a filename
               of 8 characters or  less (no extensions are permitted  -- if
               you supply  one,  it will  be ignored).   If  you just  type
               CAPTURE but do not  include any valid switches, the  program
               automatically will use the filename "CAPTURED".
             
               This filename will  become the  "base" filename under  which
               the   captured screens  are saved  on your  disk. (See  also
               "Using CAPTURE with SCREEN", on page 3-4.)
             
               CAPTURE uses the last three  characters of your filename  to
               "number"  the screens.    The  first  screen saved  will  be
               designated  with the  three  characters  '000',  the  second
               '001',  etc.  Note  that if  your filename  has more  than 5
               characters, the filename  extension is used to  indicate the

                                         1-41













          Screen Machine                           Screen Capture
          Screen Development System

               screen number.
             

               For example, you  may want to  save your screens into  files
               called EXAMPLE.  To do so, simply type:
             
                    CAPTURE EXAMPLE  <Enter>
             
               Now,  when  you have  the screen  that  you want  to CAPTURE
               displayed  on your  monitor, hold the  <Shift> key  down and
               press <PrtSc>.  CAPTURE will respond with a brief message on
               the bottom  of your  screen, letting  you know  that it  has
               saved your screen in its memory area.   It will then write a
               screen data file  for the  screen as soon  as the  operating
               system will allow.  In this case, the name of the  file will
               be EXAMPLE.000.
             
               You can then  display another screen, press  <Shift>-<PrtSc>
               again, and CAPTURE will  save this screen into a  file named
               EXAMPLE.001.    
             

          Change Filename Without Restarting CAPTURE  (/C)   
          __________________________________________

               You may  change the  filename under  which your screens  are
               being  saved by invoking  CAPTURE and following the filename
               with a '/c'.  For example:
             
                    CAPTURE NEWNAME /c <Enter>
             
               Note that if  you specify a  '/c' the  first time you  start
               CAPTURE, it will respond with:
             
                    Ignore 'c' switch and install capture (Y/N)? [N]
             
             
          Saving Color Attributes  (/A)
          _______________________

               By default,  CAPTURE will  save all  of the  necessary color
               information about the screen you CAPTURE.   If you intend to
               use the  text file for  documentation purposes,  or for  any
               reason do not want to include the color information, you can
               tell CAPTURE not to save this information.
             
               To do  so, either  follow the  filename with a  '/a' on  the
               command line when you start  CAPTURE, (For instance: CAPTURE
               EXAMPLE  /a)  or  reinvoke  CAPTURE  and specify  '/a'  (For
               example: CAPTURE /a).    


                                         1-42













          Screen Machine                           Screen Capture
          Screen Development System

               Note that you  are actually  "toggling" the color  attribute
               switch.   It  is ON  until you  turn it  OFF.   If you  then
               specify '/a', you turn it ON again.
             
               CAPTURE will respond  by telling you  that it is now  saving
               either "only characters"  or "full attributes".   To restore
               the original condition, simply repeat the above procedure.
             

          Send Screen to Printer  (/P)
          ______________________
             
               To tell  CAPTURE to print, as well as  to save a screen data
               file, either follow the filename with  a '/p' on the command
               line when you start CAPTURE (Example: CAPTURE EXAMPLE /p) or
               reinvoke CAPTURE and specify '/p' (Example: CAPTURE /p).

               Again, this is a  toggle switch, turning the feature  on and
               off and on again.
              
               CAPTURE will respond by  telling you that the "Printer  echo
               is now ON/OFF".   To restore the  original condition, simply
               repeat the above procedure.
             
             
          Capturing Graphics Screens  (/G)
          __________________________
           
               You can capture  graphics images to  disk by using the  '/G'
               switch on the CAPTURE command line  when you first start the
               program.  In  addition to using more memory than it does for
               text  screens, CAPTURE  will save  two files  each time  you
               press <Shift>-<PrtScr>:
             
                  * filexxx.bin  -  a  binary  image  that  can  be  loaded
                    directly  into video memory.
               
                  * filexxx.bld -  a  file that  can be  used with  BASIC's
                    BLOAD  command.  The only difference between the '.bin'
                    and '.bld' files is that the '.bld' file contains the 7
                    byte header that BASIC checks for.
             
             
          Using CAPTURE With SCREEN
          _________________________

               You can  use screen  data files  created with  CAPTURE (text
               mode) as  input for  SCREEN.   This allows  you to  generate
               source code in  BASIC, dBASE II  (or III), Turbo Pascal  and
               8086/8088 Assembler language for  any text screen in any  of
               your programs.


                                         1-43













          Screen Machine                           Screen Capture
          Screen Development System


               To  generate  source  code for  screens  you  have captured,
               follow  these steps:
             
                  * Load CAPTURE and specify a filename.
               
                  * Run  the program that contains  the screens you want to
                    CAPTURE.
               
                  * Use CAPTURE  to generate screen data files  for each of
                    the screens.
               
                  * Configure SCREEN to generate the type  of source code  
                    desired (see section 1).
             

               Remember  that CAPTURE automatically adds three incremental 
               characters to your original filename, beginning with 000.

               Therefore, if  the filename  you told  CAPTURE  to save  the
               screens under was  TREE, you must specify  TREE000, TREE001,
               etc. as your filenames when prompted by SCREEN.
             
               SCREEN can then be used to load the file created by CAPTURE,
               and display it.   At this point you can use  the full screen
               editing  capabilities  of SCREEN,  or  you can  generate the
               source  code types you  are configured  for by  pressing the
               <Esc> key. SCREEN will save your edited (or unedited) screen
               data file and  store it along with the source code files for
               your screen.    
             
          Deactivating Capture
          ____________________

               The Capture  program can  be deactivated  by using the  '/x'
               command line switch. For example:
             
                    CAPTURE /X
               
               Note that the memory used by CAPTURE will not be released.











                                         1-44













          Screen Machine                               Using SHOW
          Screen Development System


                      Using SHOW for Disk Management & Menus    
             
             
          What is SHOW ?
             
               SHOW is a program that, in its simplest use, displays screen
               files that have been created with SCREEN.
             
               SHOW can be  used to  provide a  main menu, or  even a  disk
               management system, from  which programs can be  selected and
               executed.  It  can  also be  used  to  create demonstration,
               prototype and tutorial programs (see Section 5).
             
               In addition to displaying data files, SHOW can be instructed
               to display a screen file and then wait for the user to press
               a key before SHOW terminates.
             
               SHOW can also  be told to  wait for a  range of valid  keys.
               This is  useful for displaying  menus and ensuring  that the
               user selects a valid option from the menu.
             
               When  the  user  presses a  valid  key,  SHOW  sets the  DOS
               "errorlevel" relative to the valid key range specified.  

               For example, if  the range  you specify is  "59 through  68"
               (corresponding to <F1>  through <F10>) and the  user presses
               <F5>,  the  DOS  error  level  is   set  to  5  before  SHOW
               terminates.   (If   you   are   unfamiliar   with   the  DOS
               "errorlevel", please  consult the section on  batch commands
               in your Disk Operating  System manual. Also, take a  look at
               the example below.)
             
               Setting the  errorlevel  allows branching  in  batch  (.bat)
               files (see page 4-4).  The  program disk contains an example
               of using SHOW  to process a main  menu.  The file  is called
               "MAINMENU.BAT."    

               Note that when testing for "errorlevel" in a batch file, DOS
               actually test for an errorlevel GREATER THAN OR EQUAL TO the
               error level you  are testing for.   Therefore, care must  be
               taken  in  the order  used  for  errorlevel  checking.   For
               example, if you are testing for errorlevel set at 1, 2, 3 or
               4, your file should appear like this:
             
                    If errorlevel 4 ....
                    If errorlevel 3 ....
                    If errorlevel 2 ....
                    If errorlevel 1 ....

                                         1-45













          Screen Machine                               Using SHOW
          Screen Development System

             


               SHOW's simplest features are discussed in this section.  See
               section 5 for  information on  using more advanced  features
               and creating runtime versions of SHOW for distribution.    


          Invoking the SHOW Program
          _________________________

               You can start  the SHOW program by invoking  it from the DOS
               prompt (just like  any other program)  or by having a  batch
               file  that  contains  one  or  more lines  that  invoke  the
               program.    

               In addition, by using "command files",  you can use show for
               creating  demonstrations,  prototypes  and   tutorials  (see
               section 5).
             
             
          Command Syntax
          ______________
             
             The syntax for invoking SHOW is:
             
                    SHOW Filespec [basekey max] [/Tn] [/An]
             
               An explanation of  each of the  items on the  above line  is
               given  below.
             
               Note that the  hyphen '-' and forward slash '/'  can be used
               interchangeably as the "switch" character.   This means that
               wherever '/' is used in this manual, you may substitute '-',
               if you prefer.
             

          Filespec
             
               The name of  a valid screen  file (2050 bytes in  length for
               text only or 4000 bytes for text and attributes).
             
               You may optionally precede the screen  file name with a disk
               drive letter and path. For example:
             
                    SHOW C:\SCREENS\MYSCREEN.001
             
             
          Basekey
             
               The 'basekey'  is optional and represents  the lowest-valued

                                         1-46













          Screen Machine                               Using SHOW
          Screen Development System

               key   accepted as  input from  the user when  the screen  is
               displayed.  It is one of:
             
                  * A specific key,  enclosed in quotation marks,  e.g. "1"
                    or  "A"
               
                  * A scan code  value (unquoted),  e.g. 59   for the  <F1>
                    key.    (See  Appendix A  for  scan  codes  on IBM  and
                    compatible machines.)
               
                  * An unquoted asterisk (*),  which is taken to mean  "any
                    key"  (Note that "*", meaning  the asterisk key, is not
                    the same as *, which is  unquoted and means "any key").
                      
             
          Max
             
               This represents the highest-valued key accepted as input and
               is either:
             
                  * A quoted character, as above
               
                  * An unquoted scan code value
             
               Note  that  'max' cannot  be  specified unless  'basekey' is
               specified -- the first key indicated  is always taken as the
               basekey.    

               'max' must be greater than or equal to 'basekey'.  Note that
               the  program  does  not  have  provision for  checking  this
               relationship IF the keys are  specified differently (i.e one
               is quoted, the other is a scan code).
             
             
          Errorlevel

               If you specify a 'basekey' and 'max', the  user must press a
               key within the specified  range in order to stop  the screen
               display (except for Timed Delay - see below).
             
               Pressing a valid key will cause  SHOW to stop displaying the
               screen and return to DOS.   The DOS Errorlevel variable will
               be set  relative to the  input range.   For example,  if you
               specify a basekey  of 59 and max of 68 (F1 through F10), and
               the user presses F5, errorlevel will be set at 5.
             
               Other Errorlevel values will occur as follows:
             
                     0 = Timed delay  (see next sub-section) expired  or no

                                         1-47













          Screen Machine                               Using SHOW
          Screen Development System

                    key range was specified.
             
                    64 =  If the user A)borts from a critical error.
             
                    65 =   The "get out" key (/x switch, see section 5) was
                    pressed.    

                    66 =  Execution error occurred.  
                          For  example,  a  Return  without  a  Gosub  (see
                         Section  5).
             
                    67 =  Unrecoverable syntax error. 
                          For example, unable to  locate a label used  in a
                          Goto or Gosub (See Section 5).    
             

          Timed Delay  (/T)
          ___________
             
               /Tn (for  Timed delay)  is used  to display  a screen  for a
               predetermined period of time before returning to DOS.    

               The '/T' character is required and 'n' is a numeric value (1
               to  255), which  is the number  of seconds to  delay after a
               screen has been displayed.
             
               If a valid  key (see above)  is struck before the  indicated
               number of  seconds has passed, the key  is handled as if the
               /T  switch  were  not  present  --  in  other  words,   SHOW
               terminates immediately, setting the error level.
             
             
          Screen Attributes  (/A)
          _________________

               /An (for Attributes)  specifies the  screen attribute to  be
               used for  those files  which were  originally saved  without
               attributes.  Allowable values for n are:
             
                    s (the letter s)  = use the screen attribute  in effect
                    at the time SHOW is started.  Example: SHOW filename/AS
                      
                    p (the letter  p) = use the screen   attribute from the
                    previously displayed screen.  Example: SHOW filename/AP
                      
                    d =   Use attribute  d (a decimal  number from  1-255).
                    Example: SHOW  filename/A15 (displays in high intensity
                    white).    




                                         1-48













          Screen Machine                               Using SHOW
          Screen Development System

          Calculating Screen Attributes
          _____________________________

               In order to calculate the  desired screen attribute, use the
               following   formula,   where   FORE=foreground   color   and
               BACK=background color:
             
                    Attribute = BACK * 16 + FORE
             
             
          Case Sensitivity
          ________________
             
               All letters on the command line,  as well as characters read
               from the  keyboard,  are automatically  translated to  UPPER
               case. Thus, if 'basekey'  is specified as "a", and  'max as'
               "c", the user  can press 'A', 'a',  'B', 'b', 'C' or  'c' as
               valid keys.    
             
          Error Messages
          ______________
             
               Please refer to Appendix  B for a listing of  error messages
               returned by the SHOW program.
             
             
          Using SHOW to Organize Hard Disks
          _________________________________

               Since SHOW displays data files (such as menus) and waits for
               the user to enter a keypress from a valid range, it  is very
               useful for providing a main menu from which various programs
               on a hard disk can be selected and executed.

               This eliminates the need for various users  of a given PC to
               enter (or know)  the DOS  commands to change  to the  proper
               disk directory and invoke a particular program.
             
               To  use  SHOW for  this purpose,  it  must be  executed from
               within a .BAT file.  The  programs selected from a displayed
               menu  are  executed  by  branching  on the  appropriate  DOS
               Errorlevel by using the  DOS batch "IF" subcommand.   If you
               are unfamiliar with the "IF" subcommand, consult the section
               on  batch  commands in  your  Disk Operating  System manual.
               Also, take a look at the sample below.
             
               When SHOW  is invoked with  a data filename  and a  range of
               valid  keys  for user  option response, it  waits until  the
               user presses a key which falls within the range specified.
             
               When a valid  key is pressed,  SHOW sets the DOS  errorlevel
               relative to the range of valid keys, then terminates.


                                         1-49













          Screen Machine                               Using SHOW
          Screen Development System

              
               For  example, suppose SHOW is invoked with the command:

                    SHOW MENU "1" "4"
             
               This command says "display the file called MENU and wait for
               the user to press the "1", "2", "3" or "4" key.
             
               Now assume the "3" key is pressed in response to the display
               of the data file "menu".
             
               SHOW will set the DOS  Errorlevel to 3 before it  returns to
               DOS.

               An "IF" statement can be used to branch within the .BAT file
               to the command which executes the program for option 3.

               As an  example of  this, suppose  you have  a screen  called
               "MENU".  The screen says:
             
                        My Company Main Menu
                 
                       1. Lotus 1-2-3
                       2. Microsoft Word
                       3. Run CHKDSK.COM
                       4. Exit to DOS
                 
                           Please enter a number from 1 to 4
             





















                                         1-50













          Screen Machine                               Using SHOW
          Screen Development System


               Your actual batch file might look like this:
             
                    ECHO OFF
                    :START
                    SHOW MENU "1" "4"

                    IF ERRORLEVEL 4 GOTO EXIT
                    IF ERRORLEVEL 3 GOTO OPTION3
                    IF ERRORLEVEL 2 GOTO OPTION2
                    IF ERRORLEVEL 1 GOTO OPTION1

                    :OPTION1
                    CD \LOTUS
                    123
                    GOTO START

                    :OPTION2
                    CD\WORD
                    WORD
                    GOTO START

                    :OPTION3
                    CHKDSK/F
                    PAUSE
                    GOTO START

                    :EXIT






















                                         1-51













          Screen Machine                     Advanced SHOW Features
          Screen Development System


                                Advanced SHOW Features
             
               If you have not already read section 4,  please do so before
               reading  this section.    The reason  is  that the  features
               discussed here  assume  familiarity with  the  simpler  SHOW
               features discussed in section 4.
             
          Command Files
          _____________
             
               You can  build command  files, similar  in  nature to  batch
               files,  that  instruct   SHOW  to   perform  a  variety   of
               instructions.  

               SHOW   reads   the  standard   input   device  for   a  file
               specification, where  the named  file contains  one or  more
               commands as described below.   Since redirection of input is
               allowed, you can say: 

                    SHOW < TEXT.FIL
             
               or just SHOW <Enter> and then type  in the name of the file.
               The filename can be preceded by a disk drive and path, as in
               "C:\DOS\TEXT.FIL".
             
             
          Instructions
          ____________
             
               Each of the instructions in the command file must correspond
               to one the following types:
             
                    :label name
             
                    screenname [/Xn] [/R] [/N] [section 4 switches]    

                    case [key] [range] [S: G: R:] [label name]
             
                    nul

               Any line whose first non-blank character is a colon is taken
               to be a label name, exactly like in DOS batch files.  A line
               beginning with the  word 'case'  is a case  to be  compared,
               based on the key struck by the user, with action to be taken
               accordingly.
             
               If an instruction is not a label or a 'case' line, and it is
               not totally blank, the line is taken to be the specification
               of a  screen file,  optionally followed  by switch  options.
               This applies to  lines with  "nul" as the  screen name  (see

                                         1-52













          Screen Machine                     Advanced SHOW Features
          Screen Development System

               below).

          Remarks
          _______
             
               Remarks can be  placed on any  line by using the  characters
               "/*".   Any text  following those  characters on  a line  is
               ignored.    Note that  a matching  "/*"  is not  required to
               signify the  end of  a comment  -- the  carriage return/line
               feed sequence terminates the remark.
             
             
          Labels
          ______

               A  label  name  is  defined  as  the  first   15  characters
               immediately following  the colon.   Note that  a label  name
               which has a  blank immediately following the colon can never
               be matched since  the routine  that parses label  references
               skips leading spaces.  
            
          Screen Names
          ____________

               Screens are specified as a file  specification (e.g., a file
               name that can optionally  be preceded by a drive  letter and
               path).    
             

          Key Press Specifications
          ________________________

               The parameters allowed on the line  with a file spec are  as
               follows:
             
                  * The options described  in Section 4 (basekey,  max, /Tn
                    and  /An).
             
                  * /Xn  (for  eXit) is  the  key  on which  a  "getout" is
                    performed.   'n'  is specified  in the  same manner  as
                    'base' and 'max', i.e. either a quoted character or  an
                    unquoted scan code.

                    A "getout"  will,  in the order of things,  be accepted
                    as a valid key  press,  perform  a "return" (if one  is
                    pending  -  see below),  or   return  to   DOS, setting
                    Errorlevel to  65 (if no return is pending).
                
                    Thus you  can, for example,  specify that the 'Esc' key
                    is the "getout" key.   Then, you can test to  see if it
                    was pressed and branch accordingly.
             


                                         1-53













          Screen Machine                     Advanced SHOW Features
          Screen Development System

                  * /R (for Read)  forces this  screen file to  be read  at
                    program startup  (this is the  default).  If  there are
                    more of  these screens (marked  with /R) than  will fit
                    into available  memory at  one time,  the program  will
                    abort before displaying any screen. 

                  * /N (for New read each time)  forces this screen file to
                    be reread each time  it is displayed.  This  feature is
                    useful when disk swapping must take place.


          Cases  (Branching)
          _____
             
               The syntax of a CASE line, repeated for convenience, is:
             
                    case [key] [range] [S: G: R:] [label name]
             
               The case line is used to branch to a label (or  Return - see
               below) based on the key struck by the user.
             
               There can  be an  unlimited number  of "cases"  for a  given
               screen -- a case  is always associated with the  last screen
               name line read from the command file.
             
               'Key' is  specified  in  the same  manner  as  'basekey'  in
               Section 4.  A range of  keys may be specified exactly as  in
               Section 4. For example, if the valid keys are F1 to F10:
             
                    case 59 68
             
               If  [key]=*  (e.g. 'case  *' or  "any  key"), the  branch is
               automatically taken.   There are  no checks  made to  ensure
               that  the value specified in the case instruction is a legal
               key in  the range 'basekey' to 'max' for this screen.
             
               Also, note that case commands are  processed in the order in
               which  they  appear in  the  input  file, so  that  any case
               following a * ("any key") case will never be taken.
             
             
          Subroutines
          ___________

               Following the key  (or range) on  the same case  instruction
               line is one of three "action  letters", followed by a colon,
               telling the program what should be done next.  The allowable
               "action letters" for a case line are as follows:
             



                                         1-54













          Screen Machine                     Advanced SHOW Features
          Screen Development System


                    S: "goSub" to the label name.
                  
                    G: "Goto" the label name.
                  
                    R:"Return".
             
               If a label  name is specified after the "R:",  the return is
               to the label  name and  the last gosub  "return" is  removed
               from  the  "stack".   In other  words,  the last  "gosub" is
               canceled and the program jumps to the specified label.
             
               If  no label name is specified, the  return is to the screen
               following the screen  whose 'case' caused the  last "gosub".
               Note that the  return is NOT to  the next case line,  but to
               the next SCREEN name, which can be a "Nul" screen  (see next
               paragraph).    
             

          Nul Screens
          ___________
             
               When  you "gosub" to  a screen based  on a 'case',  the SHOW
               program will, after  performing the "gosub", proceed  to the
               next  screen to be displayed.  This  is as opposed to taking
               action according to the next 'case *' line, for example.
             
               In order to better  control program flow, you can  specify a
               screen named  'nul', in  which case  the program  interprets
               'nul'  as  a  screen name,  but  knows  that  it should  not
               actually display any screen.
             
             
          Defaults 
          _________
             
               The "default" case for all screens  is simply to display the
               next screen file included in the command file.
             
               When there are no more screens in the text file, the program
               terminates, setting the DOS errorlevel  from the last screen
               and keystroke.

             
          Example:
          ________
             
               The following command file listing has line numbers only for
               identification in describing the function of each line.  The
               line numbers must  not be included  in a real command  file.
               An explanation  of the lines  is included after  the example
               command file.

                                         1-55













          Screen Machine                     Advanced SHOW Features
          Screen Development System

             
                   1. :TOP
                   2.   MENU-ONE 59 60 /X1
                   3.   CASE 59 G:OPTION1
                   4.   CASE 60 G:OPTION2
                   5. :OPTION1
                   6.   MENU-TWO *
                   7.   CASE * G:TOP
                   8. :OPTION2
                   9.   MENU-3 "1" "3" /X1
                  10.   CASE 1 G:TOP
                  11.   CASE "1" S:SUB-ONE
                  12.   CASE "2" S:SUB-TWO
                  13.   NUL
                  14.   CASE * G:TOP
                  15. :SUB-ONE
                  16.   HELP1 *
                  17.   CASE 59 G:HELP2
                  18.   CASE * R:
                  19. :SUB-TWO
                  20. :HELP2
                  21.   HELP2 *
                  22.   CASE 59 G:HELP3
                  23.   CASE * R:
                  24. :HELP3
                  25.   HELP3 *
                  26.   CASE * R:
             
             
          Explanation of Example
          ______________________

               1.  Label TOP. The top of the file.
             
               2.  Display screen MENU-ONE. 
                    Allowable input keys are  F1 and F2 (scan codes  59 and
                    60). If the 'Esc' key  is pressed, perform a  "getout",
                    returning to DOS with errorlevel set to 65.
            
               3. If the F1 key was pressed while displaying MENU-ONE, Goto
               label OPTION1.
            
               4. If the F2 key was pressed while displaying MENU-ONE, Goto
               label OPTION2.
            
                    Note that no other key  presses other than 'Esc',  'F1'
                    and  'F2' would have been  accepted, so no further case
                    checking is unnecessary.
            
               5. Label OPTION1.

                                         1-56













          Screen Machine                     Advanced SHOW Features
          Screen Development System

            
               6. Display MENU-TWO.
                    Accept any key as valid input.  

               7. In ALL cases, go back to the label TOP.
            
               8. Label OPTION2.
            
               9. Display screen MENU-3. 
                    Valid input  keys are "1",  "2" and "3".   If  'Esc' is
                    pressed, perform a "getout".
            
               10. If the 'Esc' key is pressed, Goto label 'TOP'.  

               11. If the user pressed the "1" key, goSub to the subroutine
               named 'SUB-ONE'.
            
               12. If the user pressed the "2" key, goSub to the subroutine
               named 'SUB-TWO'.
            
               13.  Nul  is  recognized  as  a  screen name  (that  is  not
               displayed)  so  that if  either  the  "1" or  "2"  keys were
               pressed, the program would come here after goSub'ing  to the
               appropriate   subroutine.   If the 'Nul'  were not  included
               here, after the subroutine was  executed, program flow would
               go to the next  screen name (line 16).
            
               14. In all cases, Goto the label 'TOP'. 
                    Note that this line  is reached after return from  SUB-
                    ONE and SUB-TWO.

               15. Label 'SUB-ONE'.
            
               16. Display the screen HELP1.
                    Accept any key as valid input.  

               17. If the F1 key was pressed, Goto the label HELP2.  

               18. In all other cases, perform a Return.
            
               19. The label 'SUB-TWO'.
            
               20. Display the screen HELP2.
                    Accept any key as valid input.  

               21. If the F1 key was pressed, Goto the label HELP3.  

               22. In all other cases, perform a Return.
            

                                         1-57













          Screen Machine                     Advanced SHOW Features
          Screen Development System

               23. The label 'HELP3'.
            
               24. Display the screen HELP3.
                    Accept any key as valid input.  

               25. In all cases, perform a Return.












































                                         1-58













          Screen Machine                     Show Runtime Programs
          Screen Development System


                                   Runtime Programs
             
               This section describes how to  "compile" runtime versions of
               SHOW.COM  for distribution  of  demonstration and  prototype
               programs.
            
               A familiarity of SHOW's features, as discussed in Sections 4
               and 5, is assumed.
            
            
          Creating Runtime Programs
          _________________________

               Creating a runtime version of SHOW.COM for distribution is a
               simple process.   Before  doing so,  you must  have a  valid
               command file as described in Section 5.
            
               Once you are happy with the command file, all you need to do
               is run the following command:  

                    SHOW /c Outputfile <Commandfile
            
               The '/c'  switch tells SHOW to  create a file  with the name
               Outputfile.COM,  that  contains  the  commands  present  in+
               Commandfile.
            
               Note that you must not include the ".COM" extension for your
               output file -- SHOW will add it automatically.
            
               For example, if your command file is called "Mydemo" and you
               want  an  executable runtime  file  called "Demo.com",  your
               command line is:
            
                   SHOW /c Demo <Mydemo
            
               The resulting runtime  program (in this case,  DEMO.COM) can
               be   distributed by  you  without payment  of royalties  and
               without  restrictions.
            
               If you attempt to compile a  file with no output file  name,
               SHOW  will create a file called "Demo@#$.Com"
            
            
          For use with Monochrome and Composite Displays
          ______________________________________________

               You  may  use the  '/M'  (forcing white  on  black displays)
               switch in these ways:



                                         1-59













          Screen Machine                     Show Runtime Programs
          Screen Development System

                  * On the SHOW  command line, either  before or after  the
                    "/C   filename".    When  used  in  this  context,  the
                    compiled output file,  when executed, will  display all
                    screens in white on black,  regardless of attributes in
                    the screen file and  regardless if a "/A" switch  is on
                    the line for screens without attributes.
             
                  * On  the  command line  when  executing a  compiled demo
                    program.  This only applies if  the "/M" switch was not
                    used when compiling the file.
            
                    This feature is useful when the user of a program has a
                    monochrome or  composite  monitor, or  a graphics  card
                    driving a monochrome monitor.
            
           
          Screen Images
          _____________
            
               When you distribute your demos  and prototypes, don't forget
               to include all necessary screen image files that are used by
               your executable programs!





























                                         1-60













          Screen Machine                     Keyboard Scan Codes
          Screen Development system


                                      Appendix A

                                 Keyboard Scan Codes
             

               The following keyboard characters produce the same scan code
               regardless of the shift status.
            
               Key  Code      Key  Code      Key   Code

                A    30        J    36        S     31
                B    48        K    37        T     20
                C    46        L    38        U     22
                D    32        M    50        V     47
                E    18        N    49        W     17
                F    33        O    24        X     45
                G    34        P    25        Y     21
                H    35        Q    16        Z     44
                I    23        R    18        [     26
                ]    27        \    43     <Enter>  28
             <BkSpc> 14     <Space> 57
            
            
               The following key produce different  scan codes depending on
               the   keyboard  shift   status   (Shift,   Ctrl,   and   Alt
               combinations).  Under  the  "Key"  column  on the  following
               pages, several abbreviations are used:
            
                    RtArr = Right arrow key       Del = Delete
                    LtArr = Left arrow Key        PgUp = Page up
                    UpArr = Up arrow key          PgDn = Page down
                    DnArr = Down arrow key        Ins  = Insert

                    Ky x = "x" key on the numeric keypad. 

                    C  = <Ctrl> key held down
                    A  = <Alt> key held down
                    S  = Either or both <Shift> key(s) held down
                   US  = UnShifted (no <Ctrl>, <Alt>, or <Shift>)










                                         1-61













          Screen Machine                     Keyboard Scan Codes
          Screen Development system

                    US        Shift     C+S       A+S       A+S+C

                    1           2        2         --         120
                    2           3        3         3          121
                    3           4        4         --         122
                    4           5        5         --         123
                    5           6        6         --         124
                    6           7        7         7          125
                    7           8        8         --         126
                    8           9        9         --         127
                    9           10       10        --         128
                    10          11       11        --         129
                    -           12       12        12         130
                    =           13       13        --         131
                    ,           51       51        --          51
                    .           52       52        --          52
                    /           53       53        --          53
                    ;           39       39        --          39
                    '           40       40        --          40
                    `           41       41        --          41          
                   Tab          15       15        148        165
                    F1          59       84        94         104
                    F2          60       85        95         105
                    F3          61       86        96         106
                    F4          62       87        97         107
                    F5          63       88        98         108
                    F6          64       89        99         109
                    F7          65       90        100        110
                    F8          66       91        101        111
                    F9          67       92        102        112
                    F10         68       93        103        113
                    F11         133      135       137        139
                    F12         134      136       138        140
                  UpArr         72       72        141        --
                  DnArr         80       80        145        --  
                  LtArr         75       75        115        -- 
                  RtArr         77       77        116        --
                  Center        76       76        143        --
                   Home         71       71        119        --
                   End          79       79        117        --
                   PgUp         73       73        132        --
                   PgDn         81       81        118        --
                   Ins          82       82        146        -- 
                   Del          83       83        147        --
                  Ky +          78       78        144        78
                  Ky -          74       74        142        74
                Ky Enter        224      224       224        166  



                                         1-62













          Screen Machine                     Keyboard Scan Codes
          Screen Development system

               The following keys  are found on "enhanced"  keyboards where
               an auxiliary  set of  cursor control  and  editing keys  are
               provided separate from the numeric keypad.
            
                    US        Shift     C+S       A+S       A+S+C

                  UpArr         72       72        141        152
                  DnArr         80       80        145        160
                  LtArr         75       75        115        155
                  RtArr         77       77        116        157
                  Home          71       71        119        151
                   End          79       79        117        159
                  PgUp          73       73        132        153
                  PgDn          81       81        118        161
                   Ins          82       82        146        162 
                   Del          83       83        147        163


































                                         1-63













          Screen Machine                          Error Messages
          Screen Development System


                                      Appendix B

                                    Error Messages
            
            
          SHOW.COM  Fatal Errors
          ______________________

          <pathname>: Fatal Error Ignored
               When a fatal error  occurs and the user chooses  to (I)gnore
               it,  this message is displayed in the middle of an otherwise
               blank  screen, in place of the screen data file contents.  


          <pathname>: File size is invalid
               This message occurs when  attempting to read a file  for the
               first time.   If  the file's  length is  neither 2050  bytes
               (text  only)  nor  4000 bytes  (text  and  attributes), this
               message will be  displayed.   Note that this  error may  not
               occur until several screens have been successfully displayed
               if this is not a /R file.  


          RETURN case without a matching GOSUB
               This happens  when an  R: case  (return from subroutine)  is
               present without a matching S: (goSub) having been performed.


          Too many GOSUBs executed -- stack overflow
               This message indicates  that there was an  attempt to "nest"
               S:  cases (goSub) more than 8 levels deep.
            

          SHOW.COM  Syntax Errors
          _______________________
            
               All  syntax  errors  encountered  during  parsing  cause the
               message, "Syntax error in line: <line#>", followed by one of
               the messages shown below:
            
               Cannot locate referenced label: <labelname>  
                    After  parsing   is  complete,  label   references  are
                    resolved.  All  references   that  cannot  be  resolved
                    generate this message.  


               Duplicate Label -- label ignored
                    Duplicate labels are  not allowed.  The  maximum length
                    of a label is  15 characters, so this may  indicate two
                    labels whose lengths   are  longer than 15  characters,

                                         1-64













          Screen Machine                          Error Messages
          Screen Development System

                    where the first 15 characters  match.
            
               Invalid case action letter or no colon
                    The  valid  case action  letters  are 'S'  (goSub), 'G'
                    (Goto)  and  'R' (Return).    Each must  be immediately
                    followed by a colon.  

               Invalid key value for case
                    Key value  specified  in the  case statement  is not  a
                    legal key for this screen.  In other words,  the key is
                    not in the range of basekey-max and is not the "getout"
                    key.
            
               Invalid or no upper range for case
                    Either there is no key specified  after a minus sign on
                    a case  line or the key specified  is less than the key
                    specified before  the minus sign.
            
               Invalid value for attribute
                    Valid attributes, when used with '/A', are in the range
                    1-255 or  the letters 'S' and 'P'.
            
               Invalid value for escape key
                    Must be a key in the range 1 to 255.
            
               Invalid value for time delay
                    Must be from 1 to 255 (in seconds).
            
               Label must be specified for Gosub or Branch
                    Case statements using the action letters 'G' (Goto) and
                    'S'  (goSub) must have a  label after the action letter
                    and colon.  

               Label name must follow colon -- line ignored
                    Case statements using the action letters 'G' (Goto) and
                    'S'  (goSub) must have a  label after the action letter
                    and colon.  

               Line exceeds 127 characters -- ignored
                    The maximum allowable command length is 127 characters.

               MAX key specified is <= BASE key
                    On lines beginning  with a file  name (as opposed to  a
                    case  statement), the MAX key  must be greater than the
                    BASE key.  

               Must specify some type of case action
                    This error occurs when a line says "CASE" followed by a
                    valid key and range,  but does not indicate what  to do

                                         1-65













          Screen Machine                          Error Messages
          Screen Development System

                    if the case is true.  

               No case specified
                    This happens when a line simply says "CASE".
            
               Unknown switch - remainder of line ignored
                    An invalid switch was used on this command line.
            
            
          SHOW.COM  Compiler Messages
          ___________________________

               Cannot close compiler output file
                    Indicates a DOS  (or fatal)  error attempting to  close
                    the .COM output file.
            
               Cannot create compiler output file
                    Indicates a DOS  (or fatal)  error while attempting  to
                    create the .COM output file.
            
               Cannot write compiler output file
                    Indicates a DOS  (or fatal)  error while attempting  to
                    write to the .COM output file.
            
               Compile aborted
                    When syntax or other errors prevent complete parsing of
                    the input file,  the "compile" is aborted,  and no .COM
                    output file is  written.
            
               Filename extension ignored
                    If you supply an extension to  the output file name, it
                    is   ignored. All  compiled files  have the  extension,
                    ".COM".  
            

















                                         1-66













          Screen Machine                     Error Messages
          Screen Development System


          SCREEN.EXE  Error Messages
          __________________________

               Cannot find file: <filename>
            
               Invalid subirectory specified
            
               Error reading configuration file
            
               Error reading required screen file
            
               Configuration file error:
                    beginning:
            

               Not enough memory -- SCREEN MACHINE requires 72K free  

               SCREEN MACHINE requires DOS 2.0 or later
            
               SCREEN MACHINE can only run in  80-column text mode: Run DOS
               MODE command
            
               Critical error creating
            
               Critical error writing
            
               Critical error reading
            
               Critical error closing
            
               Critical error opening
            
               Critical error renaming
            
               Disk write-protected
            
               Unknown drive
            
               Drive not Ready
            
               CRC error
            
               Unknown Internal DOS error
            
               Sector not Found
            
               General Write Error
            
               General Read Error

                                         1-67













          Screen Machine                     Error Messages
          Screen Development System

            
               General Disk Error
            
               No room on disk or in directory
            
               File not found
            
               Path not found
            
               Too many open files
            
               File Access denied
            
               Unknown DOS error code




































                                         1-68













          Screen Machine                               Index
          Screen Development System


                                        Index


          /A
               CAPTURE command-line switch  39
               SHOW command-line switch  45

          /C
               CAPTURE command-line switch  39

          /G
               CAPTURE command-line switch  40

          /M
               SHOW display switch  56

          /N
               keypress specifier in SHOW  51

          /P
               CAPTURE command-line switch  40

          /R
               keypress specifier in SHOW  51

          /T
               SHOW command-line switch  45

          /X
               CAPTURE command-line switch  41
               keypress specifier in SHOW  50

          Assembler
               configuring in SCREEN.EXE  5
               effect of screen attributes  8
               generating code  11
               Segment attributes  12

          BASIC
               BLOAD-compatible files from CAPTURE  40
               configuring in SCREEN.EXE  4
               generating code  8
               Length of Code Lines  9
               Line Number Increment  9
               Starting Line Number  9




                                          i













          Screen Machine                               Index
          Screen Development System

          Block
               cancel  30
               copying  28
               cut and paste  30
               deleting  29
               marking  28
               moving  28
               re-marking  29
               unmarking  28

          Boxes
               double-line  31
               single-line  31

          C Language Code
               generating  11
               Sample.C   3

          Cancel
               block operation  30
               line operation  23

          CAPTURE
               changing filename  39
               Color Attributes  39
               command-line switches  38
               deactivating  41
               duplicating screen on printer  40
               files generated  38
               General description  38
               graphic screens  40
               Help option  38
               loading into memory  38
               Using ... with SCREEN.EXE  38, 40
               with SCREEN.EXE  38

          Centering
               entire screen  24
               lines  23
               text insode a box  24

          Color Attributes
               Blinking Foreground  26
               calculating  46
               disabling in SCREEN.EXE  25
               effect on filesize  16
               enabling/disabling in CAPTURE  39
               in CAPTURE  38
               in source code  14

                                          ii













          Screen Machine                               Index
          Screen Development System

               Reverse Video  26
               Saving  8
               specifying in SHOW  45

          Configuration
               changing  7
               Main Menu option  6
               programming languages  4
               saving  14

          dBase
               generating code  11

          Deleting
               Blocks  29
               Characters  21
               Lines  21

          DOS Errorlevel
               relative to input range in SHOW  44
               set by SHOW  42
               special values in SHOW  44

          Editing
               Configuration File  7
               entering filenames  15
               Screen Data File  15
               searching for files  16

          Error Messages
               SCREEN.EXE  64
               SHOW.COM  61
               SHOW.COM Compiler  63

          Exiting
               SCREEN.EXE  20

          Filenames
               in SHOW  43, 50
               in SHOW (NUL)  52

          Files on Distribution Diskette  2

          Help
               accessing in CAPTURE  38
               accessing in SCREEN  18
               changing colors in SCREEN  26
               Cursor keys  20
               graphics characters  27

                                         iii













          Screen Machine                               Index
          Screen Development System

               SCREEN Function keys  18
               shifted function keys  19

          Inserting
               Characters  21
               Lines  21

          Keyboard Macros  31
               default set  32
               help file  32
               Help screen  19
               maximum active  32
               nested  36
               number of keystrokes  32
               recording  32
               recursive  36
               replaying  35
               special considerations  35

          Keyboard Scan Codes
               listing(s)  58
               used in SHOW  44

          Line
               centering  23
               copying  22
               delete  21
               drawing  27
               insert  21
               marking  22
               moving  22
               repeated copy  22
               unmarking  22

          Saving
               new configuration  14
               Screen Data Files  19

          SCREEN.CFG  6, 7
               saving a new  14
               search path  7

          SCREEN.EXE
               Configuring  6
               Environment variables  7
               Keyboard Usage  18
               Starting  6



                                          iv













          Screen Machine                               Index
          Screen Development System

          SHOW
               ... starting  43
               Advanced features  49
               Basekey parameter  43
               Command Files  49
               command-line syntax  43
               Comment lines (Remarks)  50
               Labels  50
               Max parameter  44
               organizing hard disks  46
               Runtime Programs  56
               Using ...  42

          System Requirements  1

          Turbo Pascal
               generating code  13

































                                          v






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2303

     Volume in drive A has no label
     Directory of A:\

    CAPTURE  COM      4844   4-20-89   4:06p
    DEMO1    001      4000   4-20-89   4:06p
    DEMO1    002      4000   4-20-89   4:06p
    DEMO1    003      4000   4-20-89   4:06p
    DEMO1    004      4000   4-20-89   4:06p
    DEMO1    005      4000   9-04-89   7:52p
    DEMO1    BAT        23   4-20-89   4:06p
    DEMO1    DAT       548   4-20-89   4:06p
    DEMO2    002      2050   2-04-90   7:41p
    DEMO2    003      2050   2-04-90   7:41p
    DEMO2    004      2050   2-04-90   7:41p
    HELPC    @#$      2050   2-04-90   7:43p
    DEMO2    BAT        21   4-20-89   4:06p
    DEMO2    DAT       590   4-20-89   4:06p
    DEMO2    001      2050   2-04-90   7:41p
    HELC2    @#$      2050   4-20-89   4:06p
    HELP1    @#$      2050   4-20-89   4:06p
    HELP2    @#$      2050   4-20-89   4:06p
    HELP3    @#$      2050   4-20-89   4:06p
    SCREEN   CFG       279   2-05-90   8:04p
    MAINMENU 001      4000   4-20-89   4:06p
    MAINMENU BAT       911   4-20-89   4:06p
    MENU1    @#$      2050  12-02-89   7:08p
    READ     ME       4825   2-03-90   7:24p
    SHOW     COM      7332   4-20-89   4:06p
    SM       TXT    167602   2-05-90   7:45p
    SCREEN   EXE     34672   2-06-90   8:18p
    HELC1    @#$      2050   2-04-90   7:38p
    SAMPLE   C        5142  11-08-89   9:35p
    FILE2303 TXT      2961   8-28-90   1:43p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       496   1-01-80   5:17a
           32 file(s)     276836 bytes
                           25600 bytes free
