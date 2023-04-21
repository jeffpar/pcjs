---
layout: page
title: "PC-SIG Diskette Library (Disk #3102)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3102/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3102"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CESMOUSE.BAS

{% raw %}
```bas
REM This file is an $include Quick Basic file when using
REM the medium memory model of the CESMouse Tools Library
REM Copyright 1989, 1991, Computer Engineering Services

DECLARE FUNCTION showmouse CDECL
DECLARE FUNCTION hidemouse CDECL
DECLARE FUNCTION posmouse CDECL (X AS INTEGER, Y AS INTEGER)

DECLARE FUNCTION resetmouse% CDECL
DECLARE FUNCTION mousedrvr% CDECL
DECLARE FUNCTION buttons% CDECL
DECLARE FUNCTION lftbutton% CDECL
DECLARE FUNCTION ctrbutton% CDECL
DECLARE FUNCTION rgtbutton% CDECL
DECLARE FUNCTION mousecursX% CDECL
DECLARE FUNCTION mousecursY% CDECL

DECLARE lastMX AS INTEGER
DECLARE lastMY AS INTEGER
DECLARE mbtns AS INTEGER
```
{% endraw %}

## CESMOUSE.DOC

{% raw %}
```





















                             CESMouse Tools Library
                                      With
                          Complete Joystick Functions



                             Version 1.26 Shareware






















          Copyright 1989, 1991. All Rights Reserved.


          John F. Jarrett
          Computer Engineering Services
          Post Office Box 1222
          Show Low, Arizona  85901
          (602) 367-8996













                               TABLE OF CONTENTS




          Program License ................................  1

          Introduction ...................................  2

          Installation ...................................  3

          Compiling with Power C .........................  4

          Compiling with Quick C and MS C 6.0 ............  5

          Compiling with Turbo C .........................  7

          Compiling With Quick Basic .....................  9

          Mouse Functions ................................ 11

          Example C Program For Mouse Functions .......... 20

          Joysticks ...................................... 21

          Joystick Functions ............................. 22

          Example C Source for Joystick Functions ........ 24

          Bug Report Form ................................ 25

          Product Registration ........................... 26

































                                PROGRAM LICENSE



         This manual,  as well as all  source code and object  code is
         copyrighted material and is registered with the United States
         Copyright Office, Copyright 1989, 1991.

         You, the  original purchaser, do  not own this  software, but
         you have a non exclusive and non transferrable license to use
         this software  on one machine. This  software is just  like a
         book which cannot be read by another person at the same time.

         Therefore, you may use this software  on only one machine, or
         one node of a network and make needed back up copies for your
         own  archival use.  Site licenses  and  network licenses  are
         available. Making copies  for another person is  not allowed,
         and is a violation of the United States Copyright Law.

         You may combine the libraries, routines, functions and header
         files into  your own  executable computer  programs that  you
         write, as long as no source code of the functions within this
         library are released and your program is compiled and linked,
         without   paying  any   royalties   whatsoever  to   Computer
         Engineering Services.

         Computer Engineering Services makes  no warranty expressed or
         implied of any kind as to the suitability, merchantability or
         applicability  of this  software  for  any purpose.  Computer
         Engineering Services is  not liable for any  damages incurred
         arrising out of the use or  inability to use this software by
         you, others or otherwise.  Computer Engineering Services only
         warrants  that the  magnetic  media  on which  this  software
         resides is free from defects  in material and workmanship for
         a  period  of ninety  days  IF  recorded and  distributed  by
         Computer Engineering Services.

         Any reference  to Turbo C, Borland  C, Quick C,  MSC, MS-DOS,
         MicroSoft Mouse or Quick Basic,  Power C, PC-DOS, Kraft Mouse
         or Econo  Mouse, or others, are  for reference only,  and are
         U.S.   Registered  Trademarks   of;  Borland   International,
         Microsoft Corporation,  Mix Software,  International Business
         Machines, (IBM), and Kraft Systems Inc.
















                                       1






                                 INTRODUCTION


         Ever  since learning  to  write programs  for  a computer,  I
         learned the  value of  "tools" that  have assisted  me in  my
         endeavors. Often I  purchase "tools" to assist me,  such as a
         window tool kit,  communications tool kit, graphics  tool kit
         and the like. There are many programmers tool kits available.

         My biggest problem has been coming up with the price for some
         of the tool  kits and then having to  purchase more functions
         and routines than I really want or need.

         To this end, I have had to write many of my own tool kits, or
         canned functions that I can use in my day-to-day programming.
         Since I have yet to see a library of only mouse functions all
         by themselves,  I created just  that. The C.E.S.  Mouse Tools
         Library. This library has over fifty functions that deal only
         with  MicroSoft compatible  mice.  These  functions give  you
         almost complete control over mouse  motion and sensing in all
         of your programs.

         Since  nearly all  mice  sold  for IBM  compatible  computers
         running  under  PC-DOS  or MS-DOS  are  compatible  with  the
         defacto MicroSoft Mouse  Driver, almost any mouse  driver and
         mouse will  function with these  routines. However  there are
         some functions that  will only work with  the MicroSoft Mouse
         Driver.

         Since we  are dealing  with secondary  (mouse) input  for the
         computer, the joysticks have also  been a problem to program.
         BASIC has  joystick functions,  but not C  or Pascal.  I have
         thrown them  in for  C programmers,  because many  still play
         with joysticks.

         The mouse and joystick routines are  written in C and are all
         debugged and ready  for you to use. All of  the functions are
         optimized for speed, not size. The functions are all designed
         to be almost fool-proof so that a newcomer as well as an "old
         timer" can easily  integrate these functions into  his or her
         program.

         Presently,  the   library  is  compiled  for   the  following
         compilers:


         Borland Turbo C version 2.0, Turbo C++ and Borland C++
         Microsoft Quick C version 1.0
         MicroSoft C 6.0
         Mix Power C Version 2.0


         GOOD LUCK!


         John F. Jarrett
         Computer Engineering Services


                                       2






                                 INSTALLATION



         Installation of the CES mouse  and joystick library functions
         is  straight   forward.  The  include  files,   cesjoy.h  and
         cesmouse.h should be copied into the "include" subdirectories
         of MicroSoft  Quick C,  c 6.0  and Borland  Turbo C,  and the
         library files,  mouseqcx.lib, mousemsx.lib  and mousetcx.lib,
         should be placed into the "lib" subdirectories of each, and x
         is the memory model of  the libraries. (The ShareWare version
         ONLY includes the medium memory model).

         For Mix Power C, the include  and library files can be placed
         in the same Power C directory with all of the other files. It
         may also be a good idea, if  you have version 2.0 of Power C,
         to compile the include, (.h) files  into the .hhh header file
         using the fasthdr.exe utility supplied with version 2.0.

         On the distribution disk you will  find in the root directory
         the  include   files,  cesjoy.h,   cesmouse.h,  cesmouse.bas,
         cesmouse.doc, (this file),  and a read.me file  that includes
         any  last  minute  changes  in  the  documentation  or  files
         included on the disk.

         There  will be  directories for  each  make or  version of  a
         supported compiler. These directories are;


         POWER_C    includes libraries for version 2.0
         QUICK_C    includes libraries for version 1.0 only
         TURBO_C    includes libraries for version 2.0 only
         EXAMPLES   contains source code for examples and executables
         C_SOURCE   contains the C source code for the functions


         The C  source for the  examples can  also be found  under the
         SOURCE  subdirectory. The  manual  generally  only lists  the
         Turbo C source code. Each file in the library as well as each
         example is  written to  be as portable  as possible  for each
         compiler, but differences do exist.

         The cesmouse.bas  file is an  example include file  for using
         some of the library functions with QuickBasic and it is not a
         supported feature of the CESMouse Tools Library.














                                       3






                            COMPILING WITH POWER C



         To compile  your programs  with the  CESmouse or  CESjoystick
         libraries with Mix Power C is easy.

         Each of the library modules for  Power C follow the following
         format:


         mousepcX.lib (for mouse functions) or;
         joypcX.lib (for joystick functions)


         The "pc" included in the file name stands for Power C and the
         X stands for the memory model, small, medium or large.

         The easiest way  to compile your programs with Power  C is to
         first compile your file;


         pc /ms mustest.c    to compile a small memory model program.

         Next link your file with the appropriate library;

         pcl mustest,,,mousepcs.lib;    "s" for small memory library.


         Your exucutable file  will be named mustest.exe.  You may use
         any of the compiler/linker options that you wish.

         Should you  have the files  in other directories,  other than
         the  default Power  C directory,  make sure  you include  the
         proper DOS paths in the compiler and linker command line, ie;


         pc \c_work\mustest.c
         pcl \c_work\mustest ;\compinc\mouspc13.mix


         Lastly,  make sure  that  your  program source  includes  the
         proper header files and any dos path to them. As an example;


         #include <cesjoy.h>  (if in the  current Power  C directory),
         or;

         #include  <\c_work\cesmouse.h> (if  the file  is  not in  the
         default Power C directory).


         These include files  contain the function prototypes  and any
         declarations for extern variables.





                                       4






                            COMPILING WITH QUICK C



         To compile  your programs  with the  CESmouse or  CESjoystick
         libraries with Quick C is a little more time consuming.

         Each of the library modules for  Quick C follow the following
         format:


         mouseqcX.lib (for mouse functions) or;

         joyqcX.lib (for joystick functions)


         The "qc" included in the file name stands for Quick C and the
         X stands for  the memory model. At the present  time, the CES
         mouse  and joystick  libraries only  support  version 1.0  of
         Quick C. However, there should be little problem in using the
         compiled libraries  with the newer  versions of Quick  C. The
         CES mouse  and joystick libraries  support all of  the memory
         models supplied with Quick C version 1.0.

         The easiest way to compile and  link your Quick C programs is
         as follows;


         qcl /As mustest.c  /link mouseqcs.lib; (and any  other needed
         libraries) This is a compiled small memory model executable.


         If you seperatly compile and link your file, you may now link
         the file using standard linker syntax.


         link mustest,,,mousqc1s.lib;


         Your exucutable file  will be named mustest.exe.  You may use
         any of the compiler/linker options that you wish.

         Should you  have the files  in other directories,  other than
         the  default Quick  C directory,  make sure  you include  the
         proper DOS paths in the compiler and linker command line, ie;


         qcl /As /c \c_work\mustest.c    (/c = compile only)
         link  \c_work\mustest,,,\compinc\mousecs.lib;


         Lastly,  make sure  that  your  program source  includes  the
         proper header files and any dos path to them. As an example;


         #include <cesjoy.h> (if in the  current Quick C directory and
         PATH), or;


                                       5






         #include  "\c_work\cesmouse.h" (if  the file  is  not in  the
         default Quick  C directory.  Make sure that  LIB=  is  set in
         your autoexec.bat).

         These include files  contain the function prototypes  and any
         declarations for external variables.

         The  Quick  C and  MSC,  optimizing  compiler, use  the  same
         command  line syntax,  except that  the MSC  version uses  CL
         instead of the Quick C command line syntax of QCL.

         The library names for MicroSoft C 6.0 are;

         mousemsX.lib, where X  is the memory model and  the ms stands
         for MicroSoft. The tiny and small  libraries are the same, so
         use the small,  and the large and  huge are the same,  so use
         the large model when linking.

         A Microsoft C example would be;

         cl /AL /Ot mustest.c        (large model)
         link mustest.c,,,mouusemsl.lib

         Remember to  use the /A option  to specify the  proper memory
         model, ie /As or /Al, etc.  Use the proper CES library memory
         model denoted by  the s through l  at the end of  the library
         name and lastly make sure you  have included in your setup of
         Quick C,  version 1.0, all of  the needed memory  models that
         you will use. Newer versions of Quick  C allow you to use all
         the memory models from the interactive environment.


         MAKING A QUICK LIBRARY OF THE CES FUNCTIONS


         If you  wish to  make a  Quick Library  of the  CES Mouse  or
         Joystick  functions, the  following  command  line syntax  is
         provided.


         link \lib\quicklib+mouseqcm.lib,mouseqcm.qlb /I /Q;

         link \lib\quicklib+joyqcm.lib,joyqcm.qlb /I /Q;


         The /I option displays linker information as the linker links
         the library into a Quick Library, the /Q option.

         By making a  Quick Library, you can use the  CES functions in
         the interactive environment, but the library is put in RAM at
         the time  you load qc,  so you have  less room in  memory for
         your compiled programs.







                                       6






                            COMPILING WITH TURBO C



         To compile  your programs  with the  CESmouse or  CESjoystick
         libraries with Borlands Turbo C is easy.

         Each of the library modules for  Turbo C follow the following
         format:


         mousetcX.lib   (for mouse functions) or;

         joytcX.lib     (for joystick functions)


         The "tc" of  course stands for Turbo  C and the X  stands for
         the memory model being used which is either "s" for the small
         memory model, "m" for the medium memory model, and so on. All
         of the memory models are fully supported in the libraries.

         The  easiest  way   to  compile  your  programs   within  the
         interactive environment  of Turbo  C for  all versions  is to
         create a  a project  file and include  it in  the interactive
         environment. An  example would be  for the  following project
         file, mustest.prj;


         mustest.c
         mousets.lib


         This project file will compile the source file, mustest.c and
         include the small  mouse library for version 2.0  of Turbo C.
         The executable file will be named mustest.exe.

         Should you  have the files  in other directories,  other than
         the default  Turbo C directories,  make sure you  include the
         proper DOS paths in the project file, ie;


         \c_work\mustest.c
         \complibs\moustcs.lib


         Lastly,  make sure  that  your  program source  includes  the
         proper header files and any dos path to them. As an example;


         #include <cesjoy.h>  (if in the  current Turbo  C directory),
         or;

         #include  "\c_work\cesmouse.h" (if  the file  is  not in  the
         default Turbo C directory).

         The include  files contain  the function  prototypes and  any
         declarations for extern variables.


                                       7






         If you use the Turbo C command line compiler, you may compile
         your programs  with these libraries  in the  following manner
         which assumes that  all of the compiler libraries  are in the
         proper Turbo C subdirectories.


         tcc -ms mustest.c moust20s.lib


         Any of the  allowable compiler/linker options can  be used. A
         recommended set of options would be -G for size optimization,
         and of  course the -ms  tells the  compiler to use  the small
         memory model  and of course you  must use the  small library,
         mousetcs.lib.

         The Turbo C++ compiler is identical to the Turbo C compiler
         and the libraries are fully functional with the new Turbo C++
         when compiling a standard C program.

         The new Borland C++ compiler syntax is identical except that
         the command line compiler is bcc instead of tcc. All other
         options are the same and the libraries are fully functional
         as is with Borland C++.




































                                       8






                          COMPILING WITH QUICK BASIC



         To compile your programs with the CESmouse library with Quick
         Basic is as easy as compiling your C programs with Quick C.

         The library  module is  the MicroSoft  Quick C  medium memory
         library and it has the following format;


         mouseqcm.lib


         The easiest way to compile and link your Quick Basic programs
         is separately  using the command  line syntax.  First compile
         your Quick  Basic program  using any of  the QB  command line
         options, such as;


         qb moustest.bas     (source is not included, example only)


         Next, you must link your  compiled file, now moustest.obj, as
         follows;


         link moustest,,,brun40.lib mouseqcm.lib


         The above  example will  create moustest.exe,  a stand  alone
         executable  program. If  you eliminate  brun40.lib, you  must
         have  brun40.exe on  the disk  or in  the path  when you  run
         moustest.exe. The .lib extensions can be omitted.

         One thing to remember is ALWAYS  put mousqbc4.lib LAST on the
         command line. Quick Basic must search BASIC libraries first.

         Should you have the files and libraries in other directories,
         other than the  default Quick Basic directory,  make sure you
         include  the proper  DOS  paths in  the  compiler and  linker
         command line, ie;


         qb \bas_work\moustest.bas
         link \bas_work\moustest,,,\baslibs\mouseqcm.lib



         Another alternative is to list  the needed directories in the
         Quick Basic  LIB environment variable.  See your  Quick Basic
         reference manual for instructions on setting this environment
         variable.






                                       9






         Lastly, make sure that your Basic programs include the header
         file, cesmouse.bas, and any paths to it. As an example;


         REM $INCLUDE 'cesmouse.bas'   or,
         ' $INCLUDE '\bas_work\cesmouse.bas'


         The metacommand $INCLUDE must be on a REMark line.

         Remember that the sample include  file, cesmouse.bas, is only
         an example for you to expand upon. Quick Basic useage of this
         C library is not supported.



         MAKING A QUICK BASIC LIBRARY OF THE CES MOUSE FUNCTIONS


         If  you  wish to  make  a  Quick  Library  of the  CES  Mouse
         functions, the following command line syntax is provided, (as
         well as a batch, (.BAT), file on the distribution disk);


         link /Q mouseqcm.lib,mousqbc4.qlb,,bqlb40.lib;

         Other link options,  such as /I, can be used.  (The /I option
         gives you information as you link the file).

         By  making  a  Quick  Library, you  can  use  the  CES  Mouse
         functions in the interactive environment,  but the library is
         put in  RAM at the  time you load  qb, by specifying  a quick
         library. You will have less room  in memory for your compiled
         programs.

























                                      10






                                MOUSE FUNCTIONS


         The mouse  function header  or include  file consists  of the
         following function definitions,  which can be seen  by typing
         from the command line;

         C>type cesmouse.h


         /*  Mouse functions header file  */
         /*  Copyright 1989, 1991, Computer Engineering Services */

         void showmouse(void);
         void hidemouse(void);
         void posmouse(int mouseX, int mouseY);
         void setmousetrack(int Xtrack, int Ytrack);
         void setmousespeed(int speed);
         void mousegraphcurs(int hspot, int vspot, int cursor);
         void mousetextcurs(int curstype, int scrnmask, int cursmask);
         void penemulON(void);
         void penemulOFF(void);
         void cagemouse(int ulX, int ulY, int lrX, int lrY);
         void cagehoriz(int lft, int rgt);
         void cagevert(int top, int bot);
         void mousewindoff(int ulX, int ulY, int lrX, int lrY);
         void savemousedrvr(int *mdrvrbuff);
         void restoremousedrvr(int *mdrvrbuff);
         void setcrtpage(int page);
         void assignmbtn(int btn, int key);
         void setlang(int lang);
         void enablemdrvr(void);
         void setallscales(int Xtrack, int Ytrack, int speed);

         int resetmouse(void);
         int mousedrvr(void);
         int buttons(void);
         int lftbutton(void);
         int ctrbutton(void);
         int rgtbutton(void);
         int mousecursX(void);
         int mousecursY(void);
         int sensemouse(int ulX, int ulY, int lrX, int lrY);
         int sensetop(int top);
         int sensebottom(int bottom);
         int senseleft(int left);
         int senseright(int right);
         int mousetrackX(void);
         int mousetrackY(void);
         int getmousespeed(void);
         int getmouseBPXinfo(int button);
         int getmouseBPYinfo(int button);
         int getmouseBRXinfo(int button);
         int getmouseBRYinfo(int button);
         int mouseXcnt(void);
         int mouseYcnt(void);
         int getmdrvrstorage(void);


                                      11






         int getcrtpage(void);
         int disablemdrvr(void);
         int getmversion(void);
         int getmtype(void);
         int getmirq(void);
         int mdrvrreset(void);
         int getlang(void);

         int lastMX, lastMY, Xcount, Ycount, btnrel, btnpress, mbtns;


         There are several global variables  defined in the cesmouse.h
         mouse header file so you need to ensure that your programs do
         not use those variable names, which are;

         lastMX
         lastMY
         Xcount
         Ycount
         btnrel
         btnpress
         mbtns


         All  of your  programs  that will  use  mouse functions  must
         include the cesmouse.h header of include file, such as;

         #include <cesmouse.h>

         and any path to the file such as;

         #include "\c_work\cesmouse.h"

         The example C  source code throughout this  chapter summarize
         all of the  functions, usage and global  variables. The first
         few functions are  the most commonly used and  right after is
         the first example C source code.


         void showmouse(void);

         This  function displays  the mouse  cursor  at the  positions
         specified  by posmouse().  If  posmouse()  is not  used,  the
         defaults are assumed and the mouse cursor is displayed in the
         center of your screen.


         void hidemouse(void);

         When this  function is called,  the mouse  cursor disappears.
         You can make it reappear by using showmouse().








                                      12






         void posmouse(int mouseX, int mouseY);

         The posmouse function  will position the mouse  cursor at the
         mouseX, or X coordinate and at the mouseY, or Y coordinate on
         your  screen. You  can move  the  mouse cursor  all over  the
         screen by using this function.

         If you  are programming an  application for an  eighty column
         text screen,  multiply the row and  column by eight,  (8), to
         get the  proper screen position.  The following  example will
         position  the text  mouse  cursor at  screen  position row  5
         column 39;

         posmouse((8 * 39), (8 * 5));

         In graphics mode,  simply specify the proper  coordinate. 0,0
         is always the upper left hand corner.


         void setmousetrack(int mouseX, int mouseY);

         This function sets the tracking ratio or scaling of the mouse
         in both the X and the Y axis.


         void setmousespeed(int speed);

         This function sets  the double speed threshold  of the mouse.
         By setting  this number  higher, the  mouse cursor  will move
         more quickly across the screen. The  useful range seems to be
         between 300 and 900.


         void mousegraphcurs(int hspot, int vspot, int cursor);

         This function sets  the mouse graphics cursor  to a different
         shape. Int hspot  and int vspot is  the X and Y  hot spot, or
         the main focal  point of the cursor in pixels.  Int cursor is
         the defined  cursor. To define the  cursor, one must  keep in
         mind the cursor screen mask, or I  like to think of it as the
         "shadow" and the cursor mask,  which is actually the complete
         outline of the cursor. The following is given as an example;

         static int hand[] =
         {
         /* cursor screen mask */

            0xE1FF       /* 1110000111111111 */
            0xE1FF       /* 1110000111111111 */
            0xE1FF       /* 1110000111111111 */
            00E1FF       /* 1110000111111111 */
            0xE1FF       /* 1110000111111111 */
            0xE000       /* 1110000000000000 */
            0xE000       /* 1110000000000000 */
            0xE000       /* 1110000000000000 */
            0x0000       /* 0000000000000000 */
            0x0000       /* 0000000000000000 */


                                      13






            0x0000       /* 0000000000000000 */
            0x0000       /* 0000000000000000 */
            0x0000       /* 0000000000000000 */
            0x0000       /* 0000000000000000 */
            0x0000       /* 0000000000000000 */
            0x0000       /* 0000000000000000 */

            /* cursor mask */

            0x1E00       /* 0001111000000000 */
            0x1200       /* 0001001000000000 */
            0x1200       /* 0001001000000000 */
            0x1200       /* 0001001000000000 */
            0x1200       /* 0001001000000000 */
            0x13FF       /* 0001001111111111 */
            0x1249       /* 0001001001001001 */
            0x1249       /* 0001001001001001 */
            0xF249       /* 1111001001001001 */
            0x9001       /* 1001000000000001 */
            0x9001       /* 1001000000000001 */
            0x9001       /* 1001000000000001 */
            0x8001       /* 1000000000000001 */
            0x8001       /* 1000000000000001 */
            0x8001       /* 1000000000000001 */
            0xFFFF       /* 1111111111111111 */
         };


            /* set the hspot to 5 and the vspot top 0 */
            /* and set the cursor */

         mousegraphcurs(5,0,(int) hand);

         A bit complex, but  can be done if you can  convert binary to
         hexadecimal. A piece of graph paper is really handy.


         void mousetextcurs(int curstype, int scrnmask, int
         cursmask);

         This function is used to set the mouse cursor in text mode as
         either a software  cursor, (int curstype =  0), or  as a hard
         ware cursor, (int  curstype = 1), as well  as the foreground,
         background colors, whether the cursor blinks or doesn't.

         The following sets the text cursor so that it will invert the
         forground and background colors;

         setmousetextcurs(0,0xFFFF,0x7700);

         The following turns OFF the hardware cursor;

         setmousetextcurs(1,16,0);

         Note the use of both decimal and hex which is OK.

         The full  use of  the hardware and  software text  cursors is


                                      14






         beyond the scope of this  library. For further information on
         both  graphics and  text cursors,  please  see the  Microsoft
         Mouse Programmers Reference.

         void penemulON(void);
         void penemulOFF(void);

         By default,  the mouse  emulates a lightpen  and can  be used
         with programs  that once upon a  time used light  pens. These
         functions can turn such emulation on or off.


         void cagemouse(int ulX, int ulY, int lrX, int lrY);

         This  function will  "cage the  mouse"  within the  specified
         screen coordinates  which make  sort of  a "window"  of mouse
         movement.  ulX and  ulY are  the upper  left X  and Y  screen
         coordinates  and lrX  and lrY  are the  lower right  X and  Y
         coordinates.


         void cagehoriz(int lft, int rgt);
         void cagevert(int top, int bot);

         These functions keep the mouse from going above, or below, or
         to the  left or  to the right  of the  specified coordinates.
         cagemouse uses  these routines  to cage  the mouse  within an
         entire "window".


         void mousewindoff(int ulX, int ulY, int lrX, int lrY);

         This function is similar to cagemouse, but when the limits of
         the  defined  "window  are exceeded,  the  mouse  turns  off.
         Showmouse must be called to make  the mouse reappear. Set the
         coordinates of where you want the mouse to appear first using
         posmouse.


         void savemousedrvr(int *mdrvrbuff);
         void restoremousedrvr(int *mdrvrbuff);
         int getmdrvrstorage(void);

         These functions are  used to save the  mouse driver variables
         and to  restore the mouse driver  variables. You can  get the
         size of  a buffer needed  by calling get  mdrvrstorage(); and
         then create a  buffer dimensioned to the needed  size and and
         then  call  the  above  functions  with  a  pointer  to  your
         dimensioned buffer. An example;

         int mousebuff[getmdrvrstorage()];
         savemousedrvr(*mousebuff);
         {
             other code
         {
         restoremousedrvr(*mousebuff);



                                      15






         void setcrtpage(int page);
         int getcrtpage(void);

         This function  sets the virtual  screen page number  that the
         mouse  is  functioning   on.  This  is  useful   in  graphics
         programming where numerous  pages can be stored  and used via
         hardware. The function getcrtpage  returns the current screen
         page.


         void assignmbtn(int btn, int key);

         This function will assign a  mouse button a specific keyboard
         key, such as 13, (a carriage return and line fees), when that
         specified button is pressed, or  combination of buttons. This
         function uses the  buttons() function and the  character must
         be specified in  ASCII. The character is  printed to standard
         out.


         void setlang(int lang);

         This function is only useful with the genuine Microsoft Mouse
         Driver and  sets the foreign  language useage of  that driver
         for its messages. The following is a summation;

         0 = English
         1 = French
         2 = Dutch
         3 = German
         4 = Swedish
         5 = Finnish
         6 = Spanish
         7 = Portuguese
         8 = Italian


         void enablemdrvr(void);
         int disablemdrvr(void);

         These  functions enable,  (enablemdrvr();)  the mouse  driver
         after a  call to disablemdrvr().  When you disable  the mouse
         driver,  the  mouse  will  not  work  at  all.  The  function
         disablemdrvr(); returns either a  1 for successful completion
         or  a  0 for  unsuccessful  completion  or disabling  of  the
         driver.


         void setallscales(int Xtrack, int Ytrack, int speed);

         This function sets all of the scales for the mouse within one
         function.  This   is  a  combination  of   setmousetrack  and
         setmousespeed.






                                      16






         int mousedrvr(void);

         This function  should be the  first mouse function  called in
         your program  to check and see  if the mouse driver  has been
         loaded.  If the  driver is  present in  memory, the  function
         returns an integer value of 1, or  true. If the driver is not
         present in memory, the integer value returned is 0, or false.


         int resetmouse(void);

         This function should be the  first, and almost last, function
         called  in your  program.  This function  resets  all of  the
         values of  the mouse  driver to their  default values  and it
         also returns  the number of  mouse buttons available  on your
         mouse. This  value is usually 2  or 3 as the  MicroSoft Mouse
         has  two buttons,  while the  Kraft Mouse,  and others,  have
         three buttons. This value is set in global variable mbtns.

         The standard defaults for most  mouse drivers are positioning
         the  cursor in  the  center of  the  screen  with a  standard
         reverse video software  cursor, and a slanted  graphics arrow
         cursor in graphics mode with light pen emulation on.

         This function is  equal to Mouse Function 0  in the MicroSoft
         Mouse Programmers Reference  Manual (as well as  others mouse
         programmers manuals). For other  default values, please refer
         to the MicroSoft Mouse Driver Programmers Reference Manual as
         well as other mouse driver manuals  as there are subtle, (yet
         usually negligible), differences.


         int buttons(void);

         This function returns an integer value  of between 0 and 7. A
         0 means that no button were  pushed. On a three button mouse,
         the  left button  will return  a  1. The  center button  will
         return a 4 and the right button  will return a 2. If you push
         a couple  buttons, the  values are  added. All  three buttons
         pushed will return 7.


         int lftbutton(void);

         This function will  return a 1 when the left  mouse button is
         pushed.


         int ctrbutton(void);

         This  function will  return a  1  when the  center button  is
         pushed.







                                      17






         int rgtbutton(void);

         This  function will  return  a 1  when  the  right button  is
         pushed.


         int mousecursX(void);

         This function  returns the X,  (horizontal), position  of the
         mouse cursor.  When in  eighty column  text mode,  divide the
         returned value  by 8  to get  the cursor  location. In  forty
         column mode, divide the number  by 16. Otherwise, in graphics
         mode,  the number  returned is  the position.  This value  is
         stored in the global variable lastMX.


         int mousecursY(void);

         This  function returns  the Y,  (vertical),  position of  the
         mouse  cursor.  All  of  the returns  are  the  same  as  for
         mousecursX(). This  value is  stored in  the global  variable
         lastMY.


         int sensemouse(int ulX, int ulY, int lrX, int lrY);
         int sensetop(int top);
         int sensebottom(int bottom);
         senseleft(int left);
         senseright(int right)


         These functions all return either a 0 for NOT being past that
         specified portion of  the screen and a 1 should  they be past
         the specified portions or coordinates of the screen.

         The function sensemouse sets up a window specified by ulX and
         ulY, the upper  left and right coordinates, and  lrX and lrY,
         the lower right X and Y coordinates.

         The other  return the same when  either top, bottom,  left or
         right are specified.

         int mousetrackX(void);
         int mousetrackY(void);
         int getmousespeed(void);

         These functions  return the tracking,  scaling or  the double
         speed threshold of the mouse as previously set.


         int getmouseBPXinfo(int button);
         int getmouseBPYinfo(int button);

         These functions  return the X or  Y coordinates of  the mouse
         when  the  mouse  button,  1, 4,  or  2  as  specified  under
         buttons();, has been  pushed. The number of  times the button
         has been pushed is stored in the variable btnpress.


                                      18






         int getmouseBRXinfo(int button);
         int getmouseBRYinfo(int button);


         These  functions   are  identical   to  getmouseBPXinfo   and
         getmouseBPYinfo except that the  button releases are returned
         in global variable btnrel.


         int mouseXcount(void);
         int mouseYcount(void);

         These functions return the accumulated mouse counts since the
         last time any of these  functions was called. Negative number
         indicate leftward movement for the Xcount and upward movement
         for the  Ycount. These  values are  stored in  the associated
         variables xcount and ycount.

         NOTE... The  following functions  are only  available on  the
         genuine Microsoft Mouse Driver.


         int getmversion(void);

         This function returns  the mouse driver version  number. 6.10
         will return as 60789 or similar.


         int getmtype(void);

         This function will return the mouse type as follows;

         1 indicates a bus mouse
         2 indicates a serial mouse
         3 indicates an InPort mouse
         4 indicates a PS-2 mouse
         5 indicates an HP mouse


         int getmirq(void);

         This function  returns the hardware  interrupt being  used by
         the mouse and mouse driver.


         int mdrvrreset(void);

         This  function  ONLY  resets  the mouse  driver.  A  1  being
         returned means success and a 0 means a failure to reset.


         int getlang(void);

         This function returns the language being used as described in
         the functionsetlang();




                                      19






                      EXAMPLE C SOURCE FOR  MOUSE LIBRARY



         #include <conio.h>
         #include <stdlib.h>
         #include <cesmouse.h>

         main()
         {
         int lft,ctr,rgt,mx,my,but;

             cprintf("PC Mouse Test\n");
             cprintf("Press Any Key to Exit\n\n");

                /* Check for the Mouse Driver */
                if (mousedrvr() == 0)
                  {
                   cprintf("Mouse Driver Not Installed\n\n");
                      exit(1);
                  }

                /* Reset the mouse.. All registers to '0'  */
                resetmouse();

                /* Position the Mouse  X = 40, Y = 12 */
                posmouse(320,96);

                /* Show the Mouse */
                showmouse();

                /* Output Mouse Button Values */
                for(;;)
                        {
                        lft = lftbutton();
                        ctr = ctrbutton();
                        rgt = rgtbutton();
                        mx = mousecursX();
                        my = mousecursY();
                        but = buttons();

                        if (kbhit()) break;
                        }
                /* Hide the Mouse */
                hidemouse();

                /* Reset the Mouse */
                resetmouse();

             exit(0);
         }








                                      20






                                   JOYSTICKS



         Joysticks are  still used by  game players and  writers. They
         are dependant  on the  timing of  a one  shot pulse  into the
         joystick which is triggered by one of the joystick functions.
         The time it takes for a specific  bit  to go, after firing of
         the one shot pulse from a logical 0 to a logical 1, back to a
         logical 0 gives us the  approximate position of the joystick.
         This is  all dependant upon  the resistance in  the joystick,
         ie, the X-Y axis variable resistors in the joystick.

         The function fires  the one shot and  continuously checks the
         appropriate bit for X or Y or  joystick 1 or joystick 2. When
         it returns to a logical 0,  the function is exited. The time,
         or number returned, is actually  the number of iterations, or
         loops that the function performed prior to the bit going to a
         0. This number gives a relative position of the joystick. All
         the way to the right on the X axis returns the X axis highest
         number, while all  the way down on  the Y axis returns  the Y
         axis highest number.

         For the functions that read the X and Y axis of the joystick,
         remember: the value  returned is only a  relative positioning
         of the joystick. In the lower  values, 4 to 10 being returned
         is common.  The highest  values are  very dependant  upon the
         type and speed of your computer as  well as the speed of your
         compiled  program,   which  is  compiler   dependant.  Values
         returned can  be from 150 to  over 500, again  depending upon
         all the variables.

         Using Power C and  a 12 Mhz 286 machine, the  high end was in
         the mid hundreds.  Using Turbo C, the  higher values returned
         were in the five hundreds, so compilers are different.

         The IBM  AT and  compatibles have  routines written  in their
         bios which  will read the  joystick ports connected  to their
         bus.  Since there  is no  way  of knowing  what machine  your
         finished programs may  be run on, the  functions will operate
         in  the same  fashion on  any machine,  returning a  RELATIVE
         POSITIONING of the joystick along its X or Y axis.

         One of the first things that should be done in a program that
         uses the joysticks  is to call the getjoyAX  and getjoyAY, as
         well as the other two 'get' functions if a second joystick is
         to be  used, and ask  the user  to "CENTER YOUR  JOYSTICK AND
         PRESS ENTER", or similar routine. By  doing this, you can get
         the returned  value of the  center position of  the joystick,
         center X and center Y, and assign  them to a variable so that
         twice center X is at the far right, and twice center Y is all
         the way down. All the way up, Y  should be around 0 to 10 and
         all the way to the left, X should also be around 0 to 10.






                                      21






                              JOYSTICK FUNCTIONS



         The joystick  header or include  file simply consists  of the
         following, as can be seen by typing from the command line;

         C>type cesjoy.h


         /*  Joystick routines header file */
         /*  Copyright 1989 Computer Engineering Services */


         int getjoyAX(void);
         int getjoyAY(void);
         int getjoyAB1(void);
         int getjoyAB2(void);
         int getjoyBX(void);
         int getjoyBY(void);
         int getjoyBB1(void);
         int getjoyBB2(void);
         int joyport(void);


         There  are  no  global  variables  defined  in  the  cesjoy.h
         joystick header file. All of  your programs that will include
         joystick functions must include cesjoy.h, such as;


         #include <cesjoy.h>

         and any path to the file such as;


         #include <\c_work\cesjoy.h>

         The example C source code included at the end of this chapter
         summarizes all of the functions and useage.


         int joyport(void);

         This  function  checks to  see  if  a  game port  adapter  is
         included in the system bus.  Simply, this function checks the
         the lower byte at  location 201 hex and checks to  see if the
         top four  bits, bit  4, 5,  6, and 7  are at  a logic  1, and
         checks the bottom  four bits, 0, 1,  2, and 3 to  see if they
         are at  a logic  zero. If  all of  these conditions  are met,
         there  is a  gane  port adapter  installed  in  any class  of
         machineand returns  true or  a 1.  If there  is no  game port
         installed or should you have  a faulty joystick connected, or
         if a button is pressed, it will return a 0.

         This  function only  returns an  integer, either  a 1,  true,
         should a game port be installed, or a 0, false, should a game
         port not be installed or if  a button is pressed or defective


                                      22






         joystick is installed. This function is NOT ALWAYS accurate. Due
         to hardware differences, most programs always ask if a  joystick
         is installed.
         
         int getjoyAX(void);

         This function  returns the relative  position of  the primary
         joystick, (if  you are  using only one,  this is  the primary
         joystick), along  its X axis.  Returns a lower  integer value
         when moved to the right and a  higher value when moved to the
         left.

         int getjoyAY(void);

         This function  returns the relative  position of  the primary
         joystick along its Y axis. Returns a lower integer value when
         moved to the top and a higher value when moved to the bottom.


         int getjoyAB1(void);

         This function returns  a 1 or true, when the  first button on
         the primary joystick is depressed.  Otherwise it returns a 0,
         or false, when the function is called.


         int getjoyAB2(void);

         This function returns a 1 or  true, when the second button on
         the primary joystick is depressed.  Otherwise it returns a 0,
         or false, when the function is called.


         int getjoyBX(void);

         This function is identical to  getjoyAX above, except returns
         the X value of the secondary joystick.


         int getjoyBY(void);

         This function is identical to  getjoyAY above, except returns
         the Y value of the secondary joystick.


         int getjoyBB1(void);

         This function is identical to getjoyAB1 above, except returns
         a 1, or  true, if the first button on  the secondary joystick
         is depressed.


         int getjoyBB2(void);

         This function is identical to getjoyAB2 above, except returns
         a 1, or true, if the  second button on the secondary joystick
         is depressed.


                                      23






                   EXAMPLE C SOURCE WITH JOYSTICK FUNCTIONS
                            Written for Mix Power C


         #include <dos.h>
         #include <bios.h>
         #include <conio.h>
         #include <cesjoy.h>

         int x, y, b1, b2, xx, yy, b3, b4;

         main()
         {
             clrscrn();

             if (joyport() == 0)
             {
                 printf("There is NO game port installed\n");
                 exit();
             }
             poscurs(19,20);
                cprintf("PC Joy Stick Test, Copyright 1989 C.E.S.");
             poscurs(20,28);
                cprintf("Press any key to exit.");

                for(;;)
                        {
                        x = getjoyAX();
                        y = getjoyAY();
                        b1 = getjoyAB1();
                        b2 = getjoyAB2();
                        xx = getjoyBX();
                        yy = getjoyBY();
                        b3 = getjoyBB1();
                        b4 = getjoyBB2();

                 poscurs(5,10);
                 cprintf("Joystick #1. X= %3d", x);
                 poscurs(6,10);
                 cprintf("Joystick #1. Y= %3d", y);
                 poscurs(8,10);
                 cprintf("Joystick #1, Button #1= %1d", b1);
                 poscurs(9,10);
                 cprintf("Joystick #1, Button #2= %1d", b2);
                 poscurs(11,10);
                 cprintf("Joystick #2. X= %3d", xx);
                 poscurs(12,10);
                 cprintf("Joystick #2. Y= %3d", yy);
                 poscurs(14,10);
                 cprintf("Joystick #2, Button #1= %1d", b3);
                 poscurs(15,10);
                 cprintf("Joystick #2, Button #2= %1d", b4);
                        if (kbhit()) break;
                        }

             clrscrn();
         }


                                      24






                                  BUG REPORT



         Please fill  out the  following form to  report and  bugs. If
         possible, also send a copy of your C source where the bug has
         occurred. I  do not think that  the library contains  any any
         bugs, which may  be a bold statement, but it  has undergone a
         lot of testing. Please mail the completed for to:

         Computer Engineering Services
         P.O. Box 1222
         Show Low, Arizona  85901-1222

         ------------------------------------------------------------

         Name ______________________________ Phone (___)_____________

         Address ___________________________ City ___________________

         State ___________ Zip __________ Library Version ___________

         Compiler _____________ Version ____________

         Describe the bug or malfunction:

         ____________________________________________________________

         ____________________________________________________________

         ____________________________________________________________

         ____________________________________________________________

         What compiler directives or options were used:

         ____________________________________________________________

         ____________________________________________________________

         What linker options were used:

         ____________________________________________________________

         ____________________________________________________________

         Is your C source code enclosed? ______

         Other comments: ____________________________________________

         ____________________________________________________________

         ____________________________________________________________

         ____________________________________________________________




                                      25






                          REGISTRATION AND ORDER FORM


         Name _______________________________ Phone (___)____________

         Address ____________________________ City __________________

         State _________ Zip ___________ Bus. Phone (___)____________

         SHIPPING ADDRESS ___________________________________________

         City _________________________ State _________ Zip _________


         ------------------------------------------------------------

                CESMouse Tools Library With Joystick Functions


         __ Registration of Shareware Only Version ........... $10.00

         __ Registration and Upgrade to Professional Library . $22.50

         __ Professional Library Updates ..................... $ 7.50
            (Registered Professional Library Users Only)

         __ Three inch Diskette .............................. $ 1.50
            (Default is 5.25 inch 360 K media)



         TOTAL ............................................. ________

         __ Personal Check       __ Money Order   is enclosed.

             Please make checks payable to John F. Jarrett, C.E.S.
         ------------------------------------------------------------
                                  PLEASE NOTE

         Personal  Checks take  two  to three  weeks  to clear.  Money
         Orders/Cashiers Checks are shipped  immediately. Please allow
         two weeks for delivery for regular mail, which is included in
         the prices above. Should we be  out of stock of something, we
         will spend  29 cents and send  you a notice and  the expected
         shipping date!

         When you  upgrade to the Professional  Library, all of  the C
         source for  all of the functions  is included,  plus  you get
         all of the additional mouse  functions for complete mouse and
         mouse cursor control PLUS a printed manual.

         Updates  is a  service  that will  send  you  updates to  the
         library for one year. I.E. bug fixes, new routines, etc.






                                      26


```
{% endraw %}

## FILE3102.TXT

{% raw %}
```
Disk No: 3102
Disk Title: *CESMouse Tools Library
PC-SIG Version: S1.0

Program Title: CESMouse Tools Library
Author Version: 1.26
Author Registration: $10.00/$22.50
Special Requirements: A compatible C compiler and a Microsoft compatible
                      mouse

Now this is something that every C programmer has been looking for - a
library of mouse functions that can be easily incorporated into your own
programs.  Over 50 functions are included for use with a Microsoft
compatible mouse, and some functions are included for use with a
joystick.  Each function has been written for speed, not for size.
Libraries are included on this disk for the following compilers:

~ Borland Turbo C 2.0
~ Turbo C++
~ Borland C++
~ Microsoft Quick C 1.0
~ Microsoft C 6.0
~ Mix Power C 2.0


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3102

     Volume in drive A has no label
     Directory of A:\

    CESJOY   H         270   9-09-89   5:49p
    CESMOUSE BAS       672   6-02-91   1:27p
    CESMOUSE DOC     55723   9-23-91   8:18p
    CESMOUSE H        1699   6-01-91   3:43p
    PRINTDOC BAT       310   6-01-91  10:45p
    READ     ME       1694   6-08-91   7:33a
    README   EXE      8528   3-12-91   8:00p
    FILE3102 TXT       916   8-27-92   3:43a
    JOYTEST  C        1171   5-27-91   3:04p
    JOYTEST  EXE     11037   9-09-89   6:31p
    MUSTEST  EXE     10232   6-15-91   9:12a
    MUSTEST  C        1734   6-15-91   9:08a
    CGAHAND  EXE     13024   9-23-91  12:55p
    TCHAND   C         921   9-22-91   9:29p
    PCHAND   C         835   9-23-91  12:55p
    MOUSEMSM LIB     28469   9-23-91   8:59p
    JOYMSM   LIB      4153   5-28-91   8:23p
    MOUSEPCM LIB     23970   9-23-91   7:32p
    JOYPCM   LIB      1138   5-27-91   3:27p
    MOUSEQCM LIB     44341   9-23-91   7:44p
    JOYQCM   LIB      6201   5-28-91  10:38p
    MOUSETCM LIB     25600   9-22-91   9:53p
    JOYTCM   LIB      3072   5-31-91  12:51p
           23 file(s)     245710 bytes
                           66560 bytes free
