---
layout: page
title: "PC-SIG Diskette Library (Disk #1712)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1712/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1712"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "QBSCR SCREEN ROUTINES 1OF3 (1713, 1714)"

    Want to make your screen displays look like the professional programs,
    fast and dazzling?  You can, with very little effort, using QBSCR
    SCREEN ROUTINES.
    
    QBSCR SCREEN ROUTINES is a collection of utilities for the
    discriminating QuickBASIC programmer.  With these routines, and very
    little effort, your own programs can be extremely professional in
    appearance.  The screen routines are especially useful if you are in a
    hurry.  The QBSCR package can cut development time of any project in
    half, since all the display routines are already written for you.
    Incorporate the QBSCR routines into your program with a single line of
    code, and all of the QBSCR resources are at your disposal.
    
    Screen routines are available for building menus, windows, banners,
    color control, pop-down windows, exploding/imploding displays, text
    input and control, etc.  You also get a complete ASCII color screen
    editor program to help you design complex screens for fast loading.  A
    demo program is included to demonstrate all the features available to
    your programs.
    
    The screen routines are more than just a toolbox, they can also fill the
    role of tutor.  By reading through the source code of these routines,
    you will quickly find yourself learning how to do new things with
    QuickBASIC.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1712.TXT

{% raw %}
```
Disk No: 1712                                                           
Disk Title: QBSCR Screen Routines 1of3 (1713, 1714)                     
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: QBSCR Screen Routines                                    
Author Version: 1.6                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Want to make your screen displays look like the professional programs,  
fast and dazzling?  You can, with very little effort, using QBSCR       
SCREEN ROUTINES.                                                        
                                                                        
QBSCR SCREEN ROUTINES is a collection of utilities for the              
discriminating QuickBASIC programmer.  With these routines, and very    
little effort, your own programs can be extremely professional in       
appearance.  The screen routines are especially useful if you are in a  
hurry.  The QBSCR package can cut development time of any project in    
half, since all the display routines are already written for you.       
Incorporate the QBSCR routines into your program with a single line of  
code, and all of the QBSCR resources are at your disposal.              
                                                                        
Screen routines are available for building menus, windows, banners,     
color control, pop-down windows, exploding/imploding displays, text     
input and control, etc.  A demo program is included to demonstrate all  
the features available to your programs.                                
                                                                        
The screen routines are more than just a toolbox, they can also fill the
role of tutor.  By reading through the source code of these routines,   
you will quickly find yourself learning how to do new things with       
QuickBASIC.                                                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## QBSCR1.DOC

{% raw %}
```







                                   Q B S C R

                         S C R E E N   R O U T I N E S



                                    for the

                          QuickBASIC 4.0+ Programmer


                             V e r s i o n   1 . 6










                           Conceived and Created by

                                  Tony Martin

                                      of

                           The BAD SOFTWARE Company
                            1611 Harvest Green Ct.
                               Reston, VA 22090

                                April 11, 1990
















               Software and Documentation (C) Copyright 1990 by
                                  Tony Martin




         T A B L E   O F   C O N T E N T S
         -------------------------------------------------------------

                   Welcome to the QBSCR Screen Routines . . . . . .  1

                   A Few Notices  . . . . . . . . . . . . . . . . .  2

                   Files Included with QBSCR  . . . . . . . . . . .  3

                   A QBSCR Glossary . . . . . . . . . . . . . . . .  4

                   A Synopsis of the QBSCR Screen Routines  . . . .  9

                   The SCREEN BUILDER Program . . . . . . . . . . . 14

                   The DEMO Program . . . . . . . . . . . . . . . . 15

                   The REF Program  . . . . . . . . . . . . . . . . 16

                   The COLCONST.BAS file  . . . . . . . . . . . . . 19

                   Incorporating the Screen Routines
                        into Your Own Programs  . . . . . . . . . . 20

                   The QBSCR Routines Detailed Descriptions . . . . 24

                   Subprogram BANNER  . . . . . . . . . . . . . . . 25

                   Function BLOCKSIZE . . . . . . . . . . . . . . . 27

                   Subprogram BLOCKRESTORE  . . . . . . . . . . . . 29

                   Subprogram BLOCKSAVE . . . . . . . . . . . . . . 31

                   Subprogram BUILDSCREEN . . . . . . . . . . . . . 33

                   Subprogram CENTER  . . . . . . . . . . . . . . . 35

                   Subprogram CLRSCR  . . . . . . . . . . . . . . . 36

                   Function COLORCHK  . . . . . . . . . . . . . . . 37

                   Subprogram EDITSTRING  . . . . . . . . . . . . . 38

                   Function GETBACKGROUND . . . . . . . . . . . . . 42

                   Function GETFOREGROUND . . . . . . . . . . . . . 43

                   Subprogram GETSCREEN . . . . . . . . . . . . . . 44

                   Function GETVIDEOSEGMENT . . . . . . . . . . . . 46



                                                               page ii




         T A B L E   O F   C O N T E N T S   ( c o n ' d )
         -------------------------------------------------------------

                   Function MAKEMENU  . . . . . . . . . . . . . . . 47

                   Subprogram MAKEWINDOW  . . . . . . . . . . . . . 53

                   Subprogram MULTIMENU . . . . . . . . . . . . . . 60

                   Subprogram OFFCENTER . . . . . . . . . . . . . . 70

                   Subprogram PUTSCREEN . . . . . . . . . . . . . . 71

                   Subprogram QBPRINT . . . . . . . . . . . . . . . 72

                   Function SCREENBLANK . . . . . . . . . . . . . . 74

                   Subprogram SCRNRESTORE . . . . . . . . . . . . . 76

                   Subprogram SCRNSAVE  . . . . . . . . . . . . . . 79

                   Function SELECTLIST  . . . . . . . . . . . . . . 82

                   Subprogram VIEWLIST  . . . . . . . . . . . . . . 86

                   Subprogram WIPE  . . . . . . . . . . . . . . . . 90

                   Techniques for Using QBSCR . . . . . . . . . . . 92

                   Displaying and Popping a Window  . . . . . . . . 93

                   Visual Effects with BUILDSCREEN and CLRSCR . . . 97

                   Window Making Techniques . . . . . . . . . . . . 98

                   Menu Techniques  . . . . . . . . . . . . . . . . 99

                   Cross Reference - Routine Dependencies . . . .  101

                   Closing Notes  . . . . . . . . . . . . . . . .  102

                   Registration Form  . . . . . . . . . . . . . .  103












                                                              page iii




         Welcome to the QBSCR Screen Routines
         -------------------------------------------------------------

                   The  QBSCR  Screen  Routines  is  a  collection  of
                   utilities   for   the   discriminating   QuickBASIC
                   programmer.  As the name implies, they  are  screen
                   and display oriented.  With these routines and very
                   little  effort,  your own programs can be extremely
                   professional in appearance. They are quite easy  to
                   use and incorporate into your own programs.

                   The Screen Routines are especially  useful  if  you
                   are   in  a  hurry.   The  QBSCR  package  can  cut
                   development time of any project in half, since  all
                   the  display  routines are already written for you.
                   Incorporate the QBSCR routines  into  your  program
                   with  a  single  line of code, and all of the QBSCR
                   resources are at your disposal.

                   The  screen  routines are more than just a toolbox,
                   however. They can also fill the role of tutor.   By
                   reading  through the source code of these routines,
                   you will quickly find yourself learning how  to  do
                   new things with QuickBASIC.






























                                                                page 1




         A Few Notices
         -------------------------------------------------------------

                   The QBSCR Screen Routines are made available to you
                   through  the  concept  of  shareware.  Shareware is
                   software   that   authors   encourage   others   to
                   distribute  among  friends and colleagues.  In this
                   way the author's software not only  becomes  widely
                   known,  but  consumers  may  "try before they buy."
                   Once they decide to keep and use the software, they
                   send in a registration  fee,  or  payment  for  the
                   software, to the author.

                   The Screen Routines  have  a  registration  fee  of
                   $15.00.  If you decide to actually use the routines
                   in  any of your programs, you should register them.
                   As it can be very easy to forget  to  register,  or
                   simply  ignore it, I provide you with an incentive.
                   To any who register the QBSCR Screen  Routines  (or
                   any  other  software products from BAD SOFTWARE), I
                   will send  an  official  disk  set  containing  the
                   latest  version  of the software, as well as a free
                   program.   The   free   program   is   a   graphics
                   entertainment  program  called LASER. This graphics
                   program is fun to use and watch, and  can  also  be
                   a great  stress management tool.  To all registered
                   users of the QBSCR Screen Routines will go  a  copy
                   of LASER.

                   If you decide to register the Screen Routines,  you
                   can send a check for $15.00 made out to Tony Martin
                   to  the  address  at the end of this document.  See
                   the registration form on the last page for details.

                   This last notice is posted here for legal  reasons.
                   You've   probably   seen   one  in  every  software
                   package, but it's quite necessary.  Bear with me.

                   The QBSCR Screen routines are (C) Copyright 1989 by
                   Tony Martin.  I retain all  rights  to  the  source
                   code   and   documentation.    I   cannot  be  held
                   responsible for any consequences arising  from  the
                   ability or inability to use this software.  You may
                   not  charge  money  of  any  kind for this software
                   without prior written permission from  myself.   On
                   the  other  hand,  I  don't  expect  any credits or
                   royalties if you use these  routines  in  your  own
                   software.

                   Enough said on that subject!




                                                                page 2




         Files Included with QBSCR
         -------------------------------------------------------------

                   There  are  several  files  included with the QBSCR
                   Screen Routines.  Below is a list of the files  and
                   a brief description of what each is.

                   File...                              ...Description
                   ---------------------------------------------------
                   QBSCR.BAS     The  source  code  for  the  routines
                                 themselves.
                   QBSCRx.DOC    The  documentation  files   you   are
                                 reading now.  Four files (x=1 to 4).
                   QBSCR.INC     An Include file that contains all the
                                 necessary  DECLARE statements for the
                                 QBSCR routines.
                   COLCONST.BAS  A  short  file of code to include  in
                                 your  programs   that   use   colors.
                                 Assigns   color   values   to   named
                                 constants.
                   DEMO.BAS      Source code for a sample program that
                                 illustrates how to  use  all  of  the
                                 QBSCR routines.
                   DEMO.EXE      The DEMO  program  compiled,  linked,
                                 and ready to run.
                   SB.EXE        The new Screen Builder program,  used
                                 to create premade screen displays.
                   *.CLR         Color  versions  of  premade   screen
                                 displays,   mostly   for   the   DEMO
                                 program.
                   *.MON         Monochrome versions of premade screen
                                 displays,   mostly   for   the   DEMO
                                 program.
                   SHOW.EXE      Screen Builder utility program.
                   SHOW.DOC      Documentation for SHOW.EXE.
                   REF.BAS       An example of a real-life application
                                 program  that  makes  good use of the
                                 Screen Routines.
                   REF.EXE       The REF program compiled, linked, and
                                 ready to run.
                   WHATS.NEW     Describes the revision history of the
                                 QBSCR Screen Routines.

                   Note that the documentation file is split into four
                   files.   The  manual  has  become  so large that my
                   editor is starting to choke on it.








                                                                page 3




         A QBSCR Glossary
         -------------------------------------------------------------

                   There  are  a  few terms used in this documentation
                   particular to the QBSCR  Screen  Routines  and  the
                   functions   employed   within  the  package.   This
                   section is a short  glossary  that  will  hopefully
                   clarify the meanings of these terms with respect to
                   this software.


                   ASCII (characters)
                   ---------------------------------------------------
                        ASCII is an acronym for American Standard Code
                        for Information Interchange.  It refers to the
                        standard character set found on computers that
                        support it.  IBM PCs and compatibles are ASCII
                        machines.  The characters  are  referenced  by
                        number   and   are  limited  to  256  possible
                        characters  (0  -  255).   The  standard  only
                        applies  to  characters  0  through  127.  The
                        characters 128 through 255 are  left  open  to
                        the  machine  builder.   IBM chose to create a
                        set of box drawing characters as part  of  the
                        extended characters, and we use them to create
                        window frames.


                   Burn-in
                   ---------------------------------------------------
                        When  an image is left on a display screen for
                        a long period of time, the screen can retain a
                        permanent ghost of this image.   The  phosphor
                        inside  your  monitor  that  glows  to produce
                        characters on your screen will have this image
                        more or less permanently etched into it.  This
                        is called screen Burn-in.  It usually requires
                        the  same  image to be displayed eight hours a
                        day over a period of  several  months.  It  is
                        best avoided.


                   DECLARE Statement
                   ---------------------------------------------------
                        A DECLARE statement is a  standard  QuickBASIC
                        statement.   It  is not executable, meaning it
                        tells the compiler something when the  program
                        is   compiled,  and  really  does  nothing  at
                        runtime.  The DECLARE  statement  is  used  to
                        tell    the    compiler    information   about
                        subprograms and functions before  it  gets  to
                        them.   Using the DECLARE statement allows you


                                                                page 4




                        to  utilize  your  subprograms  and  functions
                        without the use of the CALL statement.  If you
                        had  a subprogram called Clock which displayed
                        the time in the  upper  left  corner  of  your
                        screen,  you would have to issue the following
                        statement in your program:

                                          CALL Clock

                        You could create a DECLARE  statement  for  it
                        and place it at the beginning of your program.
                        It would look like this:

                                     DECLARE SUB Clock ()

                        It  would  allow you to use your Clock routine
                        by simply issuing the statement

                                            Clock

                        in your program.


                   Display Memory
                   ---------------------------------------------------
                        Display memory is the physical  memory  inside
                        your  computer,  specifically on your graphics
                        card,  that  stores   the  contents   of   the
                        display.   By knowing where this memory begins
                        in terms of memory  addresses,  you  can  peek
                        there   and  see  what's  on  the screen.  The
                        SCRNSAVE   and   SCRNRESTORE   routines   rely
                        entirely  on  the  contents  of this memory to
                        save and restore information from and  to  the
                        screen.


                   Explode
                   ---------------------------------------------------
                        Explode,  when  used  in the context of screen
                        windows, is a display  effect.   If  a  window
                        explodes   onto  the  screen,  it  appears  to
                        rapidly expand outward  from  nothing  to  its
                        full size.


                   Frame
                   ---------------------------------------------------
                        A  frame  is  simply a border around a window.
                        It is drawn with standard IBM  extended  ASCII
                        graphics characters.



                                                                page 5




                   Highlight(ed)
                   ---------------------------------------------------
                        Highlight(ed)  refers to a character or set of
                        characters that stand out from others  on  the
                        screen.  This is generally done by making them
                        brighter  or  a different color.  Highlighting
                        is  used  to   call   attention   to   certain
                        character(s),   indicating   that   they   are
                        especially   significant.    In   the    QBSCR
                        routines,   the   "Quick   Access"   keys  are
                        highlighted so they are easily recognized.


                   Menu
                   ---------------------------------------------------
                        A  menu  is  a  list  of 2 or more choices, or
                        entries, from which a single entry  is  chosen
                        by  a  user.   The  method of selection varies
                        from program to program. In the  QBSCR  Screen
                        Routines, selection is made either by use of a
                        selection bar or "Quick Access" keys.


                   "Quick Access" Key
                   ---------------------------------------------------
                        A "Quick Access" key is  a  key  you  can  hit
                        within a menu to give you direct access to any
                        given entry.  Each menu entry (or choice) will
                        have associated with it a unique key that will
                        provide  this  direct access.  The key must be
                        one of the letters that make up  the  text  of
                        the  entry.   The  "Quick Access" key for each
                        entry will be highlighted  to  indicate  which
                        letter is the "Quick Access" key.


                   Quick Library
                   ---------------------------------------------------
                        A Quick Library is a collection of routines in
                        a   special  format,  like  the  QBSCR  Screen
                        Routines, that can be  used  to  run  programs
                        from  inside  the  QuickBASIC environment.  It
                        has  a  .QLB   extension.    Refer   to   your
                        QuickBASIC  documentation  for  information on
                        how to create them.


                   Parameter
                   ---------------------------------------------------
                        A  parameter is a piece of information that is
                        passed to a subprogram  or  a  function.   For



                                                                page 6




                        example,  the  QBSCR  routine  CENTER,   which
                        centers text on any given row of  the  screen,
                        must  know  two  pieces  of  information:  the
                        string of text you want centered, and the  row
                        of the screen on which to center it. Thus, the
                        CENTER routine requires two parameters.


                   Premade Display (or screen)
                   ---------------------------------------------------
                        When you see premade display in this document,
                        what is being referred to is a screen that was
                        made using the Screen Builder program included
                        with   this   release   of  the  QBSCR  Screen
                        Routines.


                   Runtime Library
                   ---------------------------------------------------
                        A  runtime library is a collection of routines
                        in a special format that the Microsoft  Linker
                        uses to create your executable program.  While
                        a  Quick  Library is used to run your programs
                        from  inside  the  QuickBASIC  environment,  a
                        runtime  library  is  used to run your program
                        from   DOS,   or   outside   the    QuickBASIC
                        environment.


                   Selection Bar
                   ---------------------------------------------------
                        A  selection bar is a mechanism used to select
                        entries from a menu.  In a  menu,  one  of the
                        entries   will   be  highlighted  in  a  color
                        different from the other  entries.   It  looks
                        like  a  bar  of  a  different  color has been
                        placed over the  entry,  so  it  is  called  a
                        selection  bar.   Hitting the ENTER key causes
                        the entry that is currently highlighted by the
                        selection bar to be returned  to  the  calling
                        routine.


                   Shadow (window)
                   ---------------------------------------------------
                        A  shadow  is  simply a dark edging around two
                        sides of a window.  It creates a  3-D  effect,
                        making the window look like it is sitting away
                        from the screen.





                                                                page 7




                   Window
                   ---------------------------------------------------
                        A window is an area of the screen that is  set
                        off  from the rest in some fashion, usually by
                        displaying a box around  that  area.   Windows
                        are  excellent  tools for isolating ideas on a
                        common display.















































                                                                page 8




         A Synopsis of the QBSCR Screen Routines
         -------------------------------------------------------------

                   Before  we  get  into the implementation details of
                   the QBSCR Screen Routines, take a quick look at the
                   summary of the routines included with the package.


                   Subprogram BANNER
                   ---------------------------------------------------
                   This routine will create a scrolling banner on  any
                   line  of  the  screen.   The effect is similar to a
                   Hollywood theater  scrolling  marquis,  advertising
                   the latest show.


                   Function BLOCKSIZE
                   ---------------------------------------------------
                   The BlockSize function is used as a calculation aid
                   for  the  BlockSave  and  BlockRestore subprograms,
                   listed below.  It will calculate the  exact  number
                   of  elements  required  for  an  array  to use with
                   BlockSave and  BlockRestore.   This  function  will
                   prove  its  value  as  you  begin  to use these two
                   subprograms.


                   Subprogram BLOCKRESTORE
                   ---------------------------------------------------
                   The  BlockRestore   subprogram   will   restore   a
                   rectangular  portion  of  the screen that was saved
                   previously with the BlockSave  subprogram  (below).
                   Use  BlockSave  to  save  part of the screen before
                   overwriting it (with a window, perhaps),  and  then
                   use  BlockRestore  to  replace  the  portion of the
                   screen that was overwritten.


                   Subprogram BLOCKSAVE
                   ---------------------------------------------------
                   The BlockSave subprogram will save a portion of the
                   screen that you wish to overwrite  and  then  later
                   restore (using BlockRestore, above).


                   Subprogram BUILDSCREEN
                   ---------------------------------------------------
                   The  BuildScreen  subprogram  will  place a premade
                   display (created with Screen Builder or  saved  via
                   GetScreen)  onto  the screen in any of 16 different
                   ways.  See the DEMO program for a demonstration.



                                                                page 9




                   Subprogram CENTER
                   ---------------------------------------------------
                   This   routine   will   center  any  string  of  80
                   characters or less  on  any  specific  row  of  the
                   screen.


                   Subprogram CLRSCR
                   ---------------------------------------------------
                   Designed  as  a  replacement for the CLS statement,
                   this routine will clear the display screen  in  any
                   of 16 different ways.


                   Function COLORCHK
                   ---------------------------------------------------
                   This  function  is  used  to  determine whether the
                   display  the  software  is  running  on  has  color
                   capability  or  not.   The  function  returns  TRUE
                   (Non-Zero) if the machine  can  display  color,  or
                   FALSE (Zero) if it cannot.


                   Subprogram EDITSTRING
                   ---------------------------------------------------
                   This subprorgam will allow you to obtain input  from
                   the  user  while  limiting  the length of the string
                   entered.  A complete set  of  editing  functions  is
                   provided,  including  delete,  backspace, home, end,
                   word left, word right, delete word left,  and  erase
                   entire line.


                   Function GETBACKGROUND
                   ---------------------------------------------------
                   This function will return the BASIC color value  of
                   the background color of any location on the screen.


                   Function GETFOREGROUND
                   ---------------------------------------------------
                   This function will return the BASIC color value  of
                   the foreground color of any location on the screen.


                   Subprogram GETSCREEN
                   ---------------------------------------------------
                   The  GetScreen  routine  will  save   the   current
                   contents of the display to a disk file, in a format
                   that   is   compatible  with  the  BuildScreen  and
                   PutScreen routines, as well as the  Screen  Builder
                   program.  Save is very fast (< 1 second).


                                                               page 10




                   Function GETVIDEOSEGMENT
                   ---------------------------------------------------
                   This  function  returns the starting address of the
                   video card's display memory.   Use  before  calling
                   SCRNSAVE  or  SCRNRESTORE  (below)  to  obtain  the
                   proper address.  Easy to use, really!  See the DEMO
                   program for a demonstration if  you  don't  believe
                   me.


                   Function MAKEMENU
                   ---------------------------------------------------
                   This  function  will create a list-like menu on the
                   screen and allow the user to choose an entry.   The
                   function  returns  a  numerical  value equal to the
                   chosen entry's position in the list.   It  provides
                   two  mechanisms  to  select entries: 1) A scrolling
                   selection bar, and 2) "Quick  Access"  keys.   Both
                   mechanisms are implemented simultaneously.  See the
                   DEMO program for a demonstration.


                   Subprogram MAKEWINDOW
                   ---------------------------------------------------
                   This  versatile  routine will create windows on the
                   screen for  you.   It  will  display  10  different
                   window  types, 6 different frame types, can explode
                   windows onto the screen  in  3  modes,  add  window
                   shadows, and more.


                   Subprogram MULTIMENU
                   ---------------------------------------------------
                   The MultiMenu subprogram  will  create  a  multiple
                   menu,  pull-down  menu interface for your programs,
                   very  much  like  the  pull-down   menus   in   the
                   QuickBASIC environment.  Easy to set up and use.


                   Subprogram OFFCENTER
                   ---------------------------------------------------
                   Allows you to center text between two columns on  a
                   line  that  are not necessarily centered themselves
                   with respect to the screen.  For instance,  if  you
                   placed  a  window  on the right side of the screen,
                   simply tell OFFCENTER the sides of the window,  and
                   it will center text between those two columns.







                                                               page 11




                   Subprogram PUTSCREEN
                   ---------------------------------------------------
                   This  routine will load from disk a premade display
                   that was created with either the GetScreen  routine
                   (above)  or  the  Screen Builder program.  Load and
                   display is very fast (< 1 second).


                   Subprogram QBPRINT
                   ---------------------------------------------------
                   This  routine  will  place  a  text  string  on the
                   display at the  position  specified  in  the  color
                   specified.   Unlike  the  PRINT  statement, QBPrint
                   writes directly to video memory  and  will  display
                   characters  like  ASCII  7,  the  round bullet, and
                   others as well.


                   Function SCREENBLANK
                   ---------------------------------------------------
                   This  function,  when  called,  blanks the screen of
                   your display, and shows a short  message  explaining
                   that  the  screen  has  been  blanked. When a key is
                   pressed,  ScreenBlank  terminates.  To  prevent  the
                   short  message  from "burning-in" to the monitor, it
                   changes place periodically.  This  function  returns
                   the  key that was pressed to restore the display, in
                   case you want to use it.


                   Subprogram SCRNRESTORE
                   ---------------------------------------------------
                   This routine will restore all or a portion  of  the
                   display  that  has  been  saved  with  the SCRNSAVE
                   routine.  When used  with  SCRNSAVE,  this  routine
                   provides unbeatable results.


                   Subprogram SCRNSAVE
                   ---------------------------------------------------
                   This  routine  will  save  a  portion or all of the
                   current display screen.  When used  in  conjunction
                   with the SCRNRESTORE routine, SCRNSAVE provides the
                   capability  to  "pop"  parts  of  a  display,  like
                   windows, error messages, menus, etc., to  and  from
                   the screen.


                   Function SELECTLIST
                   ---------------------------------------------------
                   This  function  will accept a string array from the
                   calling routine and use it to display  a  scrolling


                                                               page 12




                   list  with  selection  bar.   The  user's choice is
                   returned  as  a  string by the function.  Extensive
                   movement capabilities are provided.


                   SubProgram VIEWLIST
                   ---------------------------------------------------
                   This function  accepts  a  string  array  from  the
                   calling  routine  and  creates  from it a scrolling
                   list of text on the  screen.  A  complete  host  of
                   movement keys is provided.


                   Subprogram WIPE
                   ---------------------------------------------------
                   This   routine   clears  out  a  programmer-defined
                   portion of the display.  Excellent for erasing  the
                   text from windows.




































                                                               page 13




         The SCREEN BUILDER Program
         -------------------------------------------------------------

                   Screen Builder is a new companion  program  to  the
                   QBSCR  Screen  Routines.   With the introduction of
                   BuildScreen in version 1.4, it  was  realized  that
                   the  concept  of  placing  a  premade screen on the
                   display in interesting ways was a nifty idea.   The
                   problem was in its implementation.  Dealing with an
                   array of 25 lines was unwieldy at best. Neither was
                   it  acceptable  to be dealing only with two colors.
                   Enter Screen Builder.

                   Screen Builder is an interactive screen editor.  It
                   will allow you to  easily  create  multicolor  text
                   screens  as  complicated  or as simple as you like.
                   It has  tools  to  let  you  enter  extended  ASCII
                   graphics  characters, perform block operations, and
                   lots of other goodies.  It saves your screen  files
                   in  a  format  specific  to  BASIC,  and allows the
                   BuildScreen (and PutScreen) routines to access your
                   screen files.

                   Now with Screen Builder, you can quickly and easily
                   create attractive screens for  your  programs,  and
                   display  them  quickly  (using  PutScreen) or in an
                   interesting way (using  BuildScreen).   Tools  like
                   Screen   Builder   have   sold  for  much  more  by
                   themselves.  It is included as part  of  the  QBSCR
                   Screen Routines package.

                   For  detailed  information  on the capabilities and
                   usage  of  Screen  Builder,  refer  to  the  Screen
                   Builder documentation.




















                                                               page 14




         The DEMO Program
         -------------------------------------------------------------

                   Included with the QBSCR package is a program called
                   DEMO.  Source code for the program is  included  as
                   well.

                   DEMO is a demonstration  program  that  illustrates
                   the use of each of the routines in the QBSCR Screen
                   Routine   library.    One   of  the  best  learning
                   techniques for using  the  Screen  Routines  is  to
                   execute  this program, and as it runs, follow along
                   in the source code to see what's happening and  how
                   it's being done.

                   To run the DEMO program, make sure  that  the  file
                   DEMO.EXE  and  all the *.CLR or *.MON files (CLR if
                   you have a color display, MON if you  have  a  mono
                   display)  are  in  the  same  place (i.e., the same
                   drive and subdirectory).  Then enter the  following
                   command at the DOS prompt:

                                          DEMO

                   The program will begin executing and you can see in
                   the source code what's  happening.   Simply  follow
                   the on-screen directions.

                   The source code for DEMO is  fully  documented  and
                   can even be used as a quick reference on the syntax
                   of each routine.  A good thing to keep handy as you
                   program.






















                                                               page 15




         The REF Program
         -------------------------------------------------------------

                   The QBSCR Screen Routines are packaged with a  free
                   program  called  REF.  REF is a computer-based tool
                   that  can  be  used   as   a   reference   to   the
                   often-looked-up portions of the Screen Routines. It
                   will  tell  you  all the window types, frame types,
                   and explode types for the  MakeWindow  routine,  as
                   well  as  all ClrScr and BuildScreen modes.  Source
                   code for REF is also included with QBSCR.

                   To run REF, make sure the files REF.EXE and REF_BS.*
                   are in the same place  (i.e.,  the  same  drive  and
                   subdirectory),  and  issue  the following command at
                   the DOS prompt:

                                           REF

                   The program will execute and you will see its menu.
                   To  select  one  of the menu entries, use the arrow
                   keys to highlight the selection of your choice, and
                   hit ENTER. Notice, however, that  each  menu  entry
                   has a single letter within it highlighted.  This is
                   the  "Quick  Access"  key for that menu entry.  You
                   may use the "Quick  Access"  keys  by  hitting  the
                   highlighted letter associated with the selection of
                   your choice.  Each REF function is detailed below.


                   Window Types
                   ---------------------------------------------------
                   The  Window  Types  function  will  display all the
                   possible values of the WindowType parameter for the
                   MakeWindow subprogram.  Select this  function  from
                   the  menu by highlighting it with the selection bar
                   and hitting ENTER, or hitting the W "Quick  Access"
                   key.   REF  will  then  show  you a screen with ten
                   different windows and some explanatory text. Within
                   each window is a number which  corresponds  to  the
                   value  used  for the WindowType parameter that will
                   create that type of window.  Once  you've  finished
                   looking over the information, you can return to the
                   menu by hitting any key.


                   Frame Types
                   ---------------------------------------------------
                   Frames are what define or draw  your  windows.   On
                   the  IBM  PC  and  its derivatives,  you  can  have
                   several  combinations  of  single  and  double line



                                                               page 16





                   frames. This function of  REF  will  show  you  what
                   value of the FrameType parameter will result in what
                   type  of  frame.  Select this function from the menu
                   by  highlighting  it  with  the  selection  bar  and
                   hitting  ENTER, or hitting the F "Quick Access" key.
                   REF will then show you a screen displaying  the  six
                   possible  frame  types  and  the FrameType parameter
                   values used to attain them.   Once  you've  finished
                   looking  over the information, you can return to the
                   menu by hitting any key.


                   Explode Types
                   ---------------------------------------------------
                   The   Explode  Type  parameter  of  the  MakeWindow
                   subprogram defines how your window will  be  placed
                   on  the  screen.   You  can  simply  have  it drawn
                   normally, or have it "exploded" onto the screen  in
                   one   of   several   ways.   This  portion  of  REF
                   demonstrates the three Explode Types and tells  you
                   which  parameter value corresponds to which explode
                   type.  Select the Explode Type function of REF from
                   the menu by highlighting it with the selection  bar
                   and  hitting the ENTER key, or hitting the E "Quick
                   Access"  key.   REF  will  demonstrate  the   three
                   explode  types  with  sample windows on the screen.
                   Simply follow the on-screen directions.   Once  REF
                   has shown you the last explode type, you may return
                   to the menu by hitting any key.


                   ClrScr Modes
                   ---------------------------------------------------
                   The ClrScr function will clear your screen in any of
                   nineteen different  modes.   Each  mode  clears  the
                   screen  in a different way, resulting in a different
                   sort of "animation".   This  function  of  REF  will
                   demonstrate  any  of  the sixteen modes.  Select the
                   ClrScr Modes  function  of  REF  from  the  menu  by
                   highlighting  it  with the selection bar and hitting
                   ENTER, or by hitting the C "Quick Access" key.   You
                   will  then  see the screen filled with the ASCII 176
                   character (a shaded rectangle), and a  small  window
                   in  the center of the screen.  In this window, enter
                   a number from 0 to 18 (inclusive), indicating  which
                   ClrScr mode you would like to see.  Once you hit the
                   ENTER  key, REF will demonstrate the ClrScr mode you
                   indicated and then pause.  You can then try  another
                   mode  by  hitting any key.  REF will fill the screen
                   again and allow you to enter another mode.



                                                               page 17




                   If   you   have  finished  with  the  ClrScr  Modes
                   function, you can return to the menu by hitting the
                   ESC key.


                   BuildScreen Modes
                   ---------------------------------------------------
                   The BuildScreen function will place on the screen an
                   array of strings that define  a  display.   It  will
                   place  your display on the screen in any of nineteen
                   different modes.  Each mode displays the screen in a
                   different way, resulting  in  a  different  sort  of
                   "animation."  This  function of REF will demonstrate
                   any of the nineteen modes.  Select  the  BuildScreen
                   Modes  function of REF from the menu by highlighting
                   it with the selection bar and hitting ENTER,  or  by
                   hitting the B "Quick Access" key.  You will then see
                   a  blank screen with a small window in the center of
                   the screen.  In this window, enter a number  from  0
                   to 18 (inclusive), indicating which BuildScreen mode
                   you  would like to see.  Once you hit the ENTER key,
                   REF  will  demonstrate  the  BuildScreen  mode   you
                   indicated,  and then pause. You can then try another
                   mode by hitting any key. REF will clear  the  screen
                   again  and  allow  you to enter another mode. If you
                   have finished with the BuildScreen  Modes  function,
                   you  can  return to the menu by hitting the ESC key.
                   NOTE: The BuildScreen portion of REF requires access
                   to the file REF_BS.CLR (or .MON).  This file must be
                   in  the   same   place   (i.e.,   same   drive   and
                   subdirectory)  as  the  REF program before you start
                   REF, or the program will terminate ungracefully.


                   Quit REF
                   ---------------------------------------------------
                   Once you have returned to the  menu  from  whatever
                   REF  functions  you needed to use, you may quit the
                   REF program by highlighting the Quit function  with
                   the  selection bar and hitting ENTER, or by hitting
                   the Q "Quick Access" key.  The  screen  will  clear
                   and you will be returned to DOS.












                                                               page 18




         The COLCONST.BAS File
         -------------------------------------------------------------

                   Included with the QBSCR Screen Routines is a  short
                   file  of BASIC code that will make your programming
                   of colors much easier.  It's  called  COLCONST.BAS,
                   which is short for COLOR CONSTANTS.

                   What  it  consists  of  is a collection of CONSTant
                   declarations that assign  color  values  to  names.
                   For example, two of the lines look like this:

                                    CONST BLACK = 0
                                    CONST MAGENTA = 5

                   This  would  allow  you  to issue a color statement
                   that looks like this:

                                  COLOR MAGENTA, BLACK

                   This will improve  the  readability  of  your  code
                   immensely,  while  also  making  it  easier to code
                   colors into your program.  There are also constants
                   for the BRIGHT and BLINK attributes  that  you  can
                   combine  with  the  colors, as in this example that
                   produces a blinking Blue on a White background:

                                COLOR BLINK + BLUE, WHITE

                   or this example that makes bright White  on  a  Red
                   background:

                                COLOR BRIGHT + WHITE, RED

                   There  is also a predefined color called YELLOW, so
                   you don't have to say BRIGHT  +  BROWN.   Just  use
                   YELLOW.

                   To  incorporate  these  useful  constants  in  your
                   program, simply use the  QuickBASIC  MERGE  command
                   from the File menu...

                             1. Place the cursor at the  beginning  of
                                your program...

                             2. Select the QuickBASIC File menu...

                             3. Select the MERGE function...

                             4. Enter  COLCONST.BAS in the file  field
                                and hit ENTER.

                   The code for the color  constants  will  be  merged
                   into your program for easy use.
                                                               page 19




         Incorporating the Screen Routines
         into Your Own Programs
         -------------------------------------------------------------

                   There are several ways you can use the QBSCR Screen
                   Routines with your own programs.  Each  method  has
                   its  advantages  and  drawbacks.   You  must decide
                   which method is best for you based on  your  needs.
                   Each  method is detailed below, as well as its pros
                   and cons.


                   Method 1: MERGE
                   ---------------------------------------------------
                   The QuickBASIC editor has a MERGE function  on  its
                   Edit  menu.   Using  this  function, you can easily
                   merge the source code file  (QBSCR.BAS)  into  your
                   own  program.   Once  there,  you  can  delete  the
                   routines you don't plan to  use  in  your  program.
                   Before  you  go through wantonly deleting routines,
                   however, make sure that you check the  QBSCR  cross
                   reference  in the back of this manual, to make sure
                   you aren't deleting a routine that another  routine
                   depends  on.   By  merging,  the  routines become a
                   permanent part of your program.  The  benefits  are
                   that you don't have to worry about additional files
                   when  moving  the  source code of your program, and
                   you can neatly tailor the screen routines  to  suit
                   the  needs  of  your  particular program.  The main
                   drawback is that you are reducing the possible size
                   of your own source code by the size of  the  screen
                   routines.  QuickBASIC has a limited amount of space
                   available  for  such  things as strings and dynamic
                   arrays.  The more source code you have in your main
                   module, the more likely it becomes  that  you  will
                   have  to  go  to multiple modules.  This isn't bad,
                   but it defeats the purpose  of  merging  the  QBSCR
                   routines  into  your  own  program.  This method is
                   recommended if your program will not be too large.

                   To actually perform the merge, start QuickBASIC and
                   load  your  own  source  code  if  necessary.  Then
                   select the File menu, and the  Merge  option.   You
                   will be allowed to pick from a menu or enter a name
                   manually.  Select or enter

                                        QBSCR.BAS

                   and  the routines will be merged into your program.
                   All the DECLARE statements from the Screen Routines
                   will be placed in your program wherever you had the



                                                               page 20




                   cursor when you performed the merge, so  make  sure
                   the   cursor   is   where   you  want  the  DECLARE
                   statements.  You may now call  any  of  the  screen
                   routines you like, delete any of the ones you won't
                   be needing, or change them to suit your needs.


                   Method 2: LOAD
                   ---------------------------------------------------
                   The LOAD method is similar to the MERGE method, but
                   the QBSCR routines don't become a permanent part of
                   your  own program.  Using this method, you load the
                   QBSCR Screen Routines source code (QBSCR.BAS) as  a
                   separate   file.    When  your  program  is  saved,
                   QuickBASIC will create a .MAK file, which  contains
                   the  names  of all files in memory when the program
                   was saved.  QuickBASIC then uses this file to  tell
                   it  what  files to load when you open your program.
                   Advantages of this method are that  you  have  more
                   available  memory  for your own source code and the
                   Screen Routines are kept in a separate "package" or
                   file which aids program clarity. You can delete  or
                   change  the  QBSCR  routines  as easily as with the
                   MERGE option above (but make SURE you  are  working
                   with  a  COPY of the QBSCR.BAS file, as the changes
                   you make become  permanent).   Problems  with  this
                   method are  mostly  convenience-oriented.   Loading
                   your   program   into  QuickBASIC,  compiling  your
                   program, and execution of your program (inside  the
                   environment  ONLY)  are  all  slower  than the next
                   method, using the Quick Library.

                   To  load  the  QBSCR  Screen  Routines  using  this
                   method, start QuickBASIC and load your own  program
                   if  necessary.   Then select the File menu, and the
                   Load option.  You  will  then  be  able  to  either
                   select  from  a  list  or  enter the name manually.
                   Enter

                                        QBSCR.BAS

                   and  QuickBASIC  will  load  the file as a separate
                   module.  Once this is done, you can see  QBSCR  and
                   all its routines by hitting the F2 key.  To use the
                   routines,  you  will need to make sure your program
                   has all the appropriate DECLARE statements from the
                   Screen Routines.  You can either copy  the  DECLARE
                   statements  from  the QBSCR module over to your own
                   program  using  the  environment editor, or you can
                   place the following statement at the  top  of  your
                   own program:

                                REM $Include: 'QBSCR.INC'

                                                               page 21




                   This  will  cause  the  compiler  to  load  the file
                   QBSCR.INC into your module at  compile  time.   This
                   file  contains  all  the  DECLARE statements for the
                   QBSCR Screen Routines.  The file must be in the same
                   drive and subdirectory as QuickBASIC.  You  can  now
                   use  any  or  all of the Screen Routines, delete the
                   ones you don't need, or change  them  to  suit  your
                   needs.  If you copy your source code to another disk
                   or  subdirectory,  don't  forget  to  copy the files
                   QBSCR.BAS,  QBSCR.INC  (if  you  used  the  $Include
                   statement   above),  and  the  .MAK  file  for  your
                   program.


                   Method 3: Use the Quick Library
                   ---------------------------------------------------
                   To use the Quick Library method, you  must  have  a
                   Quick  Library  form  of  the  QBSCR  routines.  To
                   create  the  QuickLibrary  for  the  QBSCR   Screen
                   Routines, load QBSCR.BAS into QuickBASIC by itself.
                   Then choose the "Make Library" option from the  Run
                   menu.   QuickBASIC  will  then  go through a normal
                   compile, and then create two library files.  The  2
                   files  generated,  QBSCR.QLB and QBSCR.LIB, need to
                   be on the same drive and in the  same  subdirectory
                   as   QuickBASIC.   Using  this  method,  you  start
                   QuickBASIC with a /L  parameter,  followed  by  the
                   library  to use.  Advantages are mostly convenience
                   oriented.  They include faster loading,  compiling,
                   linking  and environment-execution of your program.
                   The primary disadvantage is that you cannot  modify
                   the QBSCR routines in any way from the environment.

                   To use the  QBSCR  Screen  Routines  in  the  Quick
                   Library   format,   start   QuickBASIC   using  the
                   following command (where you would  replace  MYPROG
                   with the actual name of your program):

                                   QB MYPROG /L QBSCR

                   This will cause QuickBASIC  to  load  your  program
                   along  with  the  Quick Library QBSCR.  Once inside
                   the QuickBASIC environment, you will also  need  to
                   make  sure  your  program  has  all the appropriate
                   DECLARE statements from the Screen  Routines.   You
                   can  place  the  following  statement at the top of
                   your own program:

                                REM $Include: 'QBSCR.INC'





                                                               page 22




                   This will  cause  the  compiler  to  load  the  file
                   QBSCR.INC  into  your  module at compile time.  This
                   file contains all the  DECLARE  statements  for  the
                   QBSCR Screen Routines.  The file must be in the same
                   drive  and  subdirectory as QuickBASIC. Your program
                   now has access to all of the QBSCR Screen Routines.


                   Summary of Incorporation Methods
                   ---------------------------------------------------
                   It  has  been my experience that method 2, LOAD, is
                   the most generally useful of the three methods. Use
                   method 1, MERGE, if your program will be  small  to
                   medium  sized.  Use method 3, the Quick Library, if
                   you are in  a  particular  hurry  to  develop  your
                   program,  as  it loads and compiles faster, as well
                   as executing inside the environment faster.

                   As far as the final standalone  executable  program
                   is concerned, all three methods create equally fast
                   code.   The  first  two  methods  may  be better if
                   executable size is important to  you,  as  you  can
                   edit out the routines your program doesn't actually
                   use.






























                                                               page 23



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1712

     Volume in drive A has no label
     Directory of A:\

    QBSCR    BAS    167088   4-11-90  12:00p
    RUNME1ST BAT      4082   4-11-90  12:00p
    QBSCR1   DOC     62364   4-11-90  12:00p
    QBSCR2   DOC     43146   4-11-90  12:00p
    QBSCR3   DOC     63921   4-11-90  12:00p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   5-08-90   9:15a
    FILE1712 TXT      2739   5-08-90  10:44p
            8 file(s)     344072 bytes
                           14336 bytes free
