---
layout: page
title: "PC-SIG Diskette Library (Disk #1324)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1324/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1324"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EXTENDED LIBRARY"

    EXTLIB is a library of over 50 C run-time video routines for the
    advanced MS-DOS C programmer.
    
    It features windows, pop-up and pull-down menus, menu bars, scroll bars,
    direct video memory I/O, and cursor control routines to be used with
    Microsoft C or QuickC.  In addition to these video routines, there are
    formatted display input routines (dollars, for instance) and advanced
    error handling functions.  The small, medium, compact, and large memory
    models are all supported.  EXTLIB also comes with the floating point
    emulator or 80x87 packages.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DBSCAN.DOC

{% raw %}
```
                          DBSCAN by SOFTSHOP

WHAT IS IT?

        DBSCAN is a utility program that provides a browse like
scroll of any dBASE III type data file. The program allows the
user to select the fields and the position on the screen where
they are viewed. DBSCAN is similar to the BROWSE command of dBASE
III except that it permits no editing or adding of data and its
position on the screen is controlled by the user. Try it, you'll
like it, and read on to learn how you can use it for your own
programming needs.


HOW DO I USE IT?

        If you have a hard disk, copy just three files DBSCAN.EXE
, DBSCAN.DBF, and DBSCAN.DOC to a directory of your choice. Execute
the program by being in the proper directory and typing DBSCAN from
the DOS prompt. If you only have a floppy drive, simple type DBSCAN
at the A: or B: prompt. You will see the following:

Database To Scan DBSCAN  (This is the sample database file provided.
                          However, you may scan any dBASE III DBF
                          type file by providing the complete pathed
                          name without the DBF extension.

        Press enter to accept the database you wish to scan. You will
then see:

Fields To View CU_CODE + SPACE(1) + DTOC(CU_DATELC) + SPACE(1)
/use right arrow to see this/           + STR(CU_TYSALES,11,2)

Title            Customer  Chg Date  Amount Chg
Starting Row            11
Starting Column         30
Length of Window        10

        The entire description of the Fields To View entry can only
be seen by panning to the right by using the right arrow key.

        The Fields To View prompt is the most critical to understand,
so don't go the sleep now. DBSCAN will show any field in the database
as long as the field is in a string type format. On the far right of
the screen the first 20 field names are shown along with their field
codes. You simply enter the field names you want, look at the example
and experiment with your own entries. For example, enter:

                CU_CODE + SPACE(1) + CU_DESCR
or try          CU_DESCR + SPACE(1) + "$" + STR(CU_LYSALES,7,0)



                               Page 1








See what I mean? All data type fields must have the DTOC conversion
applied whereas a numeric field must have the STR conversion, logical
type fields cannot be viwed. The SPACE(x) is used simply to seperate
the data as shown in the window and the + signs are used to make one
continuous string of the window record display. If you make a mistake
here you will get an error message on the top line that says QUIT?
(Q/A/I). Enter Q to quit the program and start over by typing DBSCAN
at the DOS prompt. It helps to know the various field types and sizes
of the DBF file you are scanning in order to avoid the error above.

        The Title prompt gets the description you wish to use to
headline the scan window.

        The Starting Row prompt determines the starting row for the
window scan.

        The Starting Column prompt determines the starting column
of the window scan.

        The Length of window prompt determines the number of records
shown at one time and the actual length of the window.

        Window dimensions that would go off the screen are pre-empted
with an error message. You must stay within the displayable area of
the screen.

Big Deal, so What?

        The value of DBSCAN is the ability to use its techniques in
your own dBASE programs. This can be done by purchasing the source
code with complete commented documentation. Because the source is
written in plain old dBASE III Plus code NOT utilizing any compiler
enhancements provided by CLipper, Foxbase, and QuickSilver, its PRG
file can be used for scanning DBF records for any dBASE compatible
system. DBSCAN was compiled by Clipper; however, it can be compiled
by dBASE and Foxbase as well. The source to DBSCAN can even be used
as a DO PROCEDURE from the dBASE dot prompt. I have used the source
to DBSCAN for over a year now in over 100 working custom programs to
scan and select everything from Customer Names to Inventory Receipts
for a stock item. Review the attached order form to see exactly what
you get, the cost and ordering information. In the mean time, enjoy
the use of DBSCAN without restrictions or obligations and pass it on
to your friends for their review.

Clipper is a Nantucket trademark, QuickSilver is a Wordtech trademark,
Foxbase is a trademark of Fox Software, and dBASE is a trademark of
Ashton-Tate Corp.

  




                               Page 2











                     DBSCAN SOURCE CODE ORDER FORM

                               SOFTSHOP
                             P.O. BOX 353
                           SANDOWN, NH 03873

                          John A. Houck Pres.
                             (603)887-4887

        You will receive the complete source code to DBSCAN and the
window procedure file as written on dBASE III Plus code. The source
is well commented and additional documentation on how to incorporate
this source code into your own applications is provided. The diskette
will contain DBSCAN.PRG, DBWND.PRG, COLOR.PRG, and SOURCE.DOC.

                                             Qty   Price   Extension

DBSCAN source code and documentation         ___   $40.00    _______
Shipping                                                   $  3.00

                                                   TOTAL   $ _______

__ 5 1/4 md2D diskette
__ 3 1/2 mf2-dd diskette

SEND TO: ___________________________________________________________

STREET:  ______________________________________

CITY:    ______________________________________

STATE:   __  ZIP: __________

Thank you for your order of DBSCAN.





                               Page 3

```
{% endraw %}

## EXTLIB.DOC

{% raw %}
```
















                               EXTENDED LIBRARY

                                  Version 1.0




                               Reference Manual
















                                Distributed By

                    Maine Data and Financial Systems, Inc.
                                HCR 79 Box 103
                               Orland, ME 04472

                                (207) 469-7027












                     Copyright (c) 1988 By Mark D. Goodwin
                              All Rights Reserved





                                                     License Agreement

                               License Agreement

          The Extended Library is protected by United States Copyright
          Law and International Treaty  provisions.    All  rights are
          reserved.    Non-registered  users  of  Extended Library are
          licensed only to use the program  on a  trial basis  for the
          sole purpose  of determining  whether or  not it meets their
          requirements.  All other use requires registration.

          Any other use of  non-registered copies  of Extended Library
          by    any    person,   business,   corporation,   government
          organization, or any other entity is  strictly forbidden and
          is a violation of this license agreement.

          Registration permits  a user license to use Extended Library
          on a single computer.

          All users are granted a  limited  license  to  copy Extended
          Library  for  the  trial  use  of others, with the following
          additional conditions:

               Extended   Library   must   be    distributed   in
               unmodified,   complete    form,   including   this
               Reference Manual and License Agreement.

               Extended  Library   may  not   be  distributed  in
               conjunction   with   any  other  product,  without
               permission of Maine  Data  and  Financial Systems,
               Inc.

               No  fee,  other  than  a bonafide disk duplicating
               fee, not  to  exceed  $6.00,  may  be  charged for
               Extended Library.

          Maine Data and Financial Systems, Inc. grants, to registered
          owners  only,  a  royalty-free   right   to   reproduce  and
          distribute   the   runtime   routines   provided   they  are
          distributed only  in  conjunction  with  and  as  part  of a
          software product.












                                                                     i





                                                              Warranty

                                   Warranty

          Maine Data  and Financial Systems, Inc. makes no warranty of
          any kind, express or implied, including  without limitation,
          any  warranties  of  merchantability  and/or  fitness  for a
          particular purpose.  Maine Data and  Financial Systems, Inc.
          shall not  be held  liable for  any damages, whether direct,
          indirect, special or consequential arising from a failure of
          this program  to operate  in the manner desired by the user.
          Maine Data and Financial Systems,  Inc.  shall  not  be held
          liable  for  any  damage  to  data  or property which may be
          caused directly or indirectly by the use of this program.

          In no event will Maine Data  and Financial  Systems, Inc. be
          held liable  for any damages, including (but not limited to)
          any  lost  profits,  lost  savings  or  other  incidental or
          consequential damages arising out of the use or inability to
          use this program, or for any claim by any other party.

          This warranty is governed by the laws of the State of Maine.































                                                                    ii





                                                     Table of Contents

                               Table of Contents

          Introduction . . . . . . . . . . . . . . . . . . . . . .   1

          Libraries  . . . . . . . . . . . . . . . . . . . . . . .   2

          Global Variables . . . . . . . . . . . . . . . . . . . .   3
               cursorstart . . . . . . . . . . . . . . . . . . . .   3
               cursorend . . . . . . . . . . . . . . . . . . . . .   3
               _mbatt1 . . . . . . . . . . . . . . . . . . . . . .   3
               _mbatt2 . . . . . . . . . . . . . . . . . . . . . .   3
               _mmatt1 . . . . . . . . . . . . . . . . . . . . . .   3
               _mmatt2 . . . . . . . . . . . . . . . . . . . . . .   3
               nonibm  . . . . . . . . . . . . . . . . . . . . . .   4
               _pdatt1 . . . . . . . . . . . . . . . . . . . . . .   4
               _pdatt2 . . . . . . . . . . . . . . . . . . . . . .   4
               _pdatt3 . . . . . . . . . . . . . . . . . . . . . .   4
               _puatt1 . . . . . . . . . . . . . . . . . . . . . .   4
               _puatt2 . . . . . . . . . . . . . . . . . . . . . .   4
               _puatt3 . . . . . . . . . . . . . . . . . . . . . .   4

          Standard Types . . . . . . . . . . . . . . . . . . . . .   5
               boolean . . . . . . . . . . . . . . . . . . . . . .   5
               MENU  . . . . . . . . . . . . . . . . . . . . . . .   5
               MENU_HEAD . . . . . . . . . . . . . . . . . . . . .   6

          Reference  . . . . . . . . . . . . . . . . . . . . . . .   7
               clearone  . . . . . . . . . . . . . . . . . . . . .   8
               clearscreen . . . . . . . . . . . . . . . . . . . .   9
               close_window  . . . . . . . . . . . . . . . . . . .  10
               cursoroff . . . . . . . . . . . . . . . . . . . . .  11
               cursoron  . . . . . . . . . . . . . . . . . . . . .  11
               display_error . . . . . . . . . . . . . . . . . . .  12
               display_menu_bar  . . . . . . . . . . . . . . . . .  13
               drawbox . . . . . . . . . . . . . . . . . . . . . .  15
               draw_window . . . . . . . . . . . . . . . . . . . .  16
               error_handler . . . . . . . . . . . . . . . . . . .  18
               fillone . . . . . . . . . . . . . . . . . . . . . .  19
               fillscreen  . . . . . . . . . . . . . . . . . . . .  20
               fire  . . . . . . . . . . . . . . . . . . . . . . .  21
               getcurpos . . . . . . . . . . . . . . . . . . . . .  23
               horizontal_bar  . . . . . . . . . . . . . . . . . .  24
               inputdollars  . . . . . . . . . . . . . . . . . . .  26
               inputfields . . . . . . . . . . . . . . . . . . . .  27
               inputnumber . . . . . . . . . . . . . . . . . . . .  29
               inputstring . . . . . . . . . . . . . . . . . . . .  30
               menu_bar  . . . . . . . . . . . . . . . . . . . . .  31
               mini_menu . . . . . . . . . . . . . . . . . . . . .  33
               open_window . . . . . . . . . . . . . . . . . . . .  35
               popup . . . . . . . . . . . . . . . . . . . . . . .  37

                                                                   iii





                                                     Table of Contents

               printcenter . . . . . . . . . . . . . . . . . . . .  39
               printdelimit  . . . . . . . . . . . . . . . . . . .  40
               printfields . . . . . . . . . . . . . . . . . . . .  42
               printheads  . . . . . . . . . . . . . . . . . . . .  44
               printone  . . . . . . . . . . . . . . . . . . . . .  46
               printstring . . . . . . . . . . . . . . . . . . . .  47
               pulldown  . . . . . . . . . . . . . . . . . . . . .  48
               pulldown_bar  . . . . . . . . . . . . . . . . . . .  52
               restorescreen . . . . . . . . . . . . . . . . . . .  53
               save_initial_video  . . . . . . . . . . . . . . . .  55
               savescreen  . . . . . . . . . . . . . . . . . . . .  56
               setattrib . . . . . . . . . . . . . . . . . . . . .  58
               setcurpos . . . . . . . . . . . . . . . . . . . . .  59
               setcursor . . . . . . . . . . . . . . . . . . . . .  60
               setone  . . . . . . . . . . . . . . . . . . . . . .  61
               settext80 . . . . . . . . . . . . . . . . . . . . .  62
               stick . . . . . . . . . . . . . . . . . . . . . . .  63
               vertical_bar  . . . . . . . . . . . . . . . . . . .  65
               waitkey . . . . . . . . . . . . . . . . . . . . . .  67

          Appendix A - Using Extended Library With QuickC  . . . .  68
               Constructing a Quick Library  . . . . . . . . . . .  68
               The QuickC Windowing Environment  . . . . . . . . .  68

          Appendix B - Source Code Files . . . . . . . . . . . . .  70

          Appendix C - Registration  . . . . . . . . . . . . . . .  72
























                                                                    iv





                                                          Introduction

                                 Introduction

          Extended Library  is  an  extensive  library  of  C run-time
          routines that  allow easy  program implementation of many of
          today's advanced programming techniques.   Some  of Extended
          Library's  features  include  windows, pulldown menus, popup
          menus, mini-menus, menu bars, horizontal and vertical scroll
          bars, reading and writing directly to display memory without
          interference,  formatted  display  input  routines, advanced
          error  handling  functions,  and  a  wide  variety of cursor
          control routines.

          The Extended Library routines  are written  in both assembly
          language  and  C  and  can  be  used with both the Microsoft
          QuickC and C 5.0 compilers.   The Extended  Library supports
          the  small,   medium,  compact,  and  large  memory  models.
          Furthermore, both  emulation and  math coprocessor libraries
          are provided.




          Microsoft  is   a  registered  trademark  and  QuickC  is  a
          trademark of the Microsoft Corporation.



























                                                                     1





                                                             Libraries

                                   Libraries

          Although the Extended Library  is  really  only  one  set of
          library routines,  C's support  of the various memory models
          and floating point emulation  (when necessary)  requires two
          separate  versions  of  the  library  for each memory model.
          Therefore, the Extended Library is provided in the following
          eight versions:

          Memory Model        Emulator            Coprocessor

          Small               SEXTLIBE.LIB        SEXTLIB7.LIB
          Medium              MEXTLIBE.LIB        MEXTLIB7.LIB
          Compact             CEXTLIBE.LIB        CEXTLIB7.LIB
          Large               LEXTLIBE.LIB        LEXTLIB7.LIB

          Only the  MEXTLIBE.LIB library  is provided on the shareware
          distribution disk.  Because MEXTLIBE.LIB is  a medium memory
          model  library,  its  routines  can  be used from within the
          QuickC environment by using them as part of  a quick library
          (see  Appendix  A  for  hints on producing a quick library).
          Registration is required to obtain the  other seven versions
          of the library.




























                                                                     2





                                                      Global Variables

                               Global Variables

          The Extended  Library defines  a number  of variables in the
          extlib.h file.   Through  proper use,  these variables allow
          you  to  streamline  the  Extended  Library  functions for a
          particular application.


          cursorstart, cursorend

          int cursorstart;
          int cursorend;

          The cursorstart  and  cursorend  variables  hold  the cursor
          starting line  and the cursor ending line respectively.  The
          cursor character can be  changed by  setting cursorstart and
          cursorend  to  appropriate  values  and calling the cursoron
          function.  Note that the same effect can  be accomplished by
          simply calling the setcursor function.


          _mbatt1, _mbatt2

          int _mbatt1;
          int _mbatt2;

          The    _mbatt1    and    _mbatt2   variables   control   the
          display_menu_bar    and    menu_bar    functions'    display
          attributes.   _mbatt1 is the normal attribute (initially set
          to 0x70).  _mbatt2 is the hotkey attribute (initially set to
          0x7b).   The initial values have been selected for effective
          displays on monochrome systems.    Therefore,  color monitor
          users may wish to change these values to take full advantage
          of their color system's capabilities.


          _mmatt1, _mmatt2

          int _mmatt1;
          int _mmatt2;

          The _mmatt1 and _mmatt2 variables control the display_error,
          error_handler, and  mini_menu functions' display attributes.
          _mmatt1 is the normal  attribute  (initially  set  to 0x70).
          _mmatt2  is  the  hotkey  attribute (initially set to 0x7b).
          The initial values have been selected for effective displays
          on monochrome  systems.   Therefore, color monitor users may
          wish to change these values to take full  advantage of their
          color system's capabilities.


                                                                     3





                                                      Global Variables


          nonibm

          int nonibm;

          The nonibm  variable is  used to  eliminate snow  on IBM CGA
          display adapters.   The  settext80  function  initially sets
          nonibm to  a value  of 0 if a CGA adapter is present or to a
          value of 1 if an MDA or EGA adapter is present.  If you have
          a nonIBM  CGA, you  may want  to set nonibm to a value of 1.
          This will speed up the Extended Library routines by allowing
          the  video  routines  to  read and write directly to display
          memory without waiting for the video retrace periods.


          _pdatt1, _pdatt2, _pdatt3

          int _pdatt1;
          int _pdatt2;
          int _pdatt3;

          The _pdatt1,  _pdatt2,  and  _pdatt3  variables  control the
          pulldown  and  pulldown_bar  functions'  display attributes.
          _pdatt1 is the normal  attribute  (initially  set  to 0x70).
          _pdatt2  is  the  hotkey  attribute (initially set to 0x7b).
          _pdatt3 is the highlight  bar  attribute  (initially  set to
          0x0c).   The initial values have been selected for effective
          displays on monochrome systems.    Therefore,  color monitor
          users may wish to change these values to take full advantage
          of their color system's capabilities.



          _puatt1, _puatt2, _puatt3

          int puatt1;
          int puatt2;
          int puatt3;

          The _puatt1,  _puatt2,  and  _puatt3  variables  control the
          popup function's  display attributes.  _puatt1 is the normal
          attribute (initially set to  0x70).   _puatt2 is  the hotkey
          attribute (initially set to 0x7b).  _puatt3 is the highlight
          bar attribute (initially set to 0x0c).   The  initial values
          have  been  selected  for  effective  displays on monochrome
          systems.  Therefore, color monitor users may wish  to change
          these values  to take full advantage of their color system's
          capabilities.



                                                                     4





                                                        Standard Types

                                Standard Types

          The Extended  Library  defines  (in  extlib.h)  a  number of
          useful data types.


          boolean

          typedef int boolean;

          The boolean  data type  is used to define logical variables.
          To assist in the use of the boolean type, the  following two
          manifest constants have been defined in extlib.h:

               Constant                 Value
               TRUE                     1
               FALSE                    0


          MENU

          typedef struct {
               char string[31];
               int hotkey;
               int (*function)();
          } MENU;

          The MENU  structure is used to define menu selections in the
          display_menu_bar, menu_bar, mini_menu, popup,  pulldown, and
          pulldown_bar menu  routines.   The MENU structure is used as
          follows:

               Type                     Description
               string                   String    up     to    30
                                        characters in length that
                                        defines the  menu choice.
                                        By  setting  string  to a
                                        null string "", the popup
                                        and   pulldown  functions
                                        will display a horizontal
                                        line in the menu display.
               hotkey                   Position in string of the
                                        menu    choice's   hotkey
                                        character.
               (*function)()            Function  to  execute  if
                                        the   menu    choice   is
                                        selected.




                                                                     5





                                                        Standard Types

          MENU_HEAD

          typedef struct {
               char heading[21];
               int hotkey;
               int number;
               MENU *mptr;
          } MENU_HEAD;

          The  MENU_HEAD  structure  is  used  to define the number of
          menus for the  pulldown  and  pulldown_bar  functions.   The
          MENU_HEAD structure is used as follows:

               Type                     Description
               heading                  String     up    to    20
                                        characters in length that
                                        defines     the    menu's
                                        heading.
               hotkey                   Position  in  heading  of
                                        the    menu's    pulldown
                                        hotkey character.
               number                   Number of  choices in the
                                        pulldown menu.
               mptr                     Pointer  to  an  array of
                                        MENU    structures   that
                                        defines    the   pulldown
                                        menu.
























                                                                     6





                                                             Reference

                                   Reference

          This section of the manual is  the reference  section.  Each
          routine  in  the  Extended  Library  is  described  here  in
          alphabetical order.

          Below the name  of  each  routine,  Summary  illustrates the
          exact  syntax  model  for the function, Description outlines
          the function's actual effects, Return Value  explains any of
          the possible  return values  for the routine, See Also lists
          any  similar  or  related   routines,   and   Example  helps
          illustrate  how  the  routine  is  implemented  in an actual
          program.






































                                                                     7





                                                              clearone

          Summary

          #include <extlib.h>

          void clearone(row, col, attribute);
          int row, col;                 Character position.
          int attribute;                Character attribute.


          Description

          The  clearone  routine  displays  a  space  at  the position
          defined  by  (row,  col).    Additionally,  the  character's
          attribute is set to attribute.


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              printstring(1, 1, "This is a demo of clearone");
              waitkey();
              clearone(1, 1, 7);
              waitkey();
              exit(0);
          }

          This program displays a message  and  erases  the  T  at the
          start of the message.













                                                                     8





                                                           clearscreen

          Summary

          #include <extlib.h>

          void clearscreen(row1, col1, row2, col2, attribute);
          int row1, col1;               Upper-left corner  of the text
                                        window.
          int row2, col2;               Lower-right corner of the text
                                        window.
          int attribute;                Display   attribute   for  the
                                        window.


          Description

          The clearscreen routine blanks an area of the screen defined
          by the  points (row1, col1) and (row2, col2).  Additionally,
          the attributes for the blanked  area  are  set  to attribute
          and the  cursor position is set to the blanked area's upper-
          left hand corner.


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              settext80();
              clearscreen(1, 1, 25, 80, 7);
              printf("The screen is cleared!");
              waitkey();
              exit(0);
          }

          This program clears the screen and  prints a  message in the
          upper-right hand corner.








                                                                     9





                                                          close_window

          Summary

          #include <extlib.h>

          WINDOW *close_window(window);
          WINDOW *window;               Pointer    to   a   previously
                                        opened      text      window's
                                        structure.


          Description

          The close_window  routine closes  a previously opened window
          by restoring  the former  screen contents  and releasing any
          memory that was allocated during the opening of the window.


          Return Value

          close_window returns a NULL pointer of type WINDOW.


          See Also

          open_window


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              WINDOW *window;

              save_initial_video();
              window = open_window(1, 20, 15, 50, _DRAW, 0x70,
                  _SINGLE_LINE, 0x70);
              waitkey();
              window = close_window(window);
              exit(0);
          }

          This program  opens a text window at the coordinates (1, 20)
          and (15, 50), draws the window by clearing  it, and  draws a
          single  line  border  around  the  perimeter  of the window.
          After waiting for a key to be pressed, the program continues
          by closing the window.


                                                                    10





                                                   cursoroff, cursoron

          Summary

          #include <extlib.h>

          void cursoroff(void);

          void cursoron(void);


          Description

          The cursoroff  routine turns  the cursor  off.  The cursoron
          routine turns the cursor on.


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              settext80();
              clearscreen(1, 1, 25, 80, 7);
              cursoroff();
              printf("Press any key to continue.....");
              waitkey();
              cursoron();
              exit(0);
          }

          This program clears the  screen, turns  off the  cursor, and
          prints  a  prompt.    When  a  key  is  pressed, the program
          continues by turning the cursor back on and exiting.












                                                                    11





                                                         display_error

          Summary

          #include <extlib.h>

          void display_error(errmess);
          char *errmess;                Error message pointer.


          Description

          The display_error routine pop  ups a  window on  the screen,
          displays an  error message  (errmess), and  waits for either
          ENTER or  an O  to be  pressed.   Because display_error uses
          the  mini_menu  routine  to  pop up the window, the window's
          attributes can be changed  by making  appropriate changes to
          _mmatt1 and _mmatt2.


          Return Value

          No value is returned.


          See Also

          mini_menu


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              display_error("Disk Read Error");
              exit(0);
          }

          This program illustrates how a Disk Read Error message might
          be displayed.









                                                                    12





                                                      display_menu_bar

          Summary

          #include <extlib.h>

          void display_menu_bar(nchoices, menu, row);
          int nchoices;                 Number of menu choices.
          MENU *menu;                   Pointer to  an  array  of MENU
                                        structures.
          int row;                      Menu bar row.


          Description

          The display_menu_bar routine displays a menu bar at row.


          Return Value

          No value is returned.


          See Also

          menu_bar



























                                                                    13





                                                      display_menu_bar

          Example

          #include <stdio.h>
          #include <extlib.h>

          void save_file(void);
          void load_file(void);
          void exit_program(void);

          static MENU menu[3] = { {"Save", 0, save_file},
                                  {"Load", 0, load_file},
                                  {"Exit", 0, exit_program} };

          main()
          {
              save_initial_video();
              display_menu_bar(3, menu, 1);
              waitkey();
              exit(0);
          }

          void save_file(void)
          {
          }

          void load_file(void)
          {
          }

          void exit_program(void)
          {
          }

          This  program  displays  a  menu  bar  consisting  of  three
          selections at row 1.
















                                                                    14





                                                               drawbox

          Summary

          #include <extlib.h>

          void drawbox(row1, col1, row2, col2, linetype, attribute);
          int row1, col1;               Upper-left corner of the box.
          int row2, col2;               Lower-right corner of the box.
          int linetype;                 Line type flag.
          int attribute;                Border attribute.


          Description

          The drawbox routine draws  a rectangular  box in  the screen
          area defined  by the  points (row1,  col1) and (row2, col2).
          Additionally, the  attributes  for  the  border  are  set to
          attribute.    The  linetype  parameter  can  be  one  of the
          following manifest constants (defined in extlib.h):

               Constant            Action
               _SINGLE_LINE        Draws a single-lined box.
               _DOUBLE_LINE        Draws a double-lined box.


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              drawbox(1, 41, 25, 80, _DOUBLE_LINE, 0x70);
              waitkey();
              exit(0);
          }

          This programs clears the screen and draws a double-lined box
          in the right half of the screen.







                                                                    15





                                                           draw_window

          Summary

          #include <extlib.h>

          void draw_window(row1, col1, row2, col2, watt,
                           bflg [,batt] );
          int row1, col1;               Upper-left   corner   of   the
                                        window.
          int row2, col2;               Lower-right   corner   of  the
                                        window.
          int watt;                     Window attribute.
          int bflg;                     Border flag.
          int batt;                     Border attribute.


          Description

          The draw_window  routine draws  a window  at the coordinates
          defined by  (row1, col1)  and (row2,  col2).   The window is
          filled with  an attribute of watt.  If a border is requested
          by the bflg parameter, the border is drawn with an attribute
          of batt.   The  bflg parameter  can be  one of the following
          manifest constants (defined in extlib.h):

               Constant                 Action
               _NO_BORDER               The   window   is   drawn
                                        without a border.
               _SINGLE_LINE             The window  is drawn with
                                        a single-lined border.
               _DOUBLE_LINE             The window  is drawn with
                                        a double-lined border. 


          Return Value

          No value is returned.


          See Also

          open_window










                                                                    16





                                                           draw_window

          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              draw_window(10, 30, 15, 50, 0x70, _DOUBLE_LINE, 0x70);
              waitkey();
              exit(0);
          }

          This program draws a window with a double line border at the
          coordinates (10, 30) and (15, 50).




































                                                                    17





                                                         error_handler

          Summary

          #include <extlib.h>

          void error_handler(unsigned deverror, unsigned  errcode,    
          unsigned far *devhdr);


          Description

          The  error_handler  routine  is  an  INT 0x24 hardware error
          handler.  When passed by _harderr, error_handler will pop up
          on  the  screen  and  display  an appropriate error message.
          Additionally, error_handler will ask the operator  to select
          one  of   three  choices:   (Ignore  the  error,  Retry  the
          operation, or Abort  the  program).    Because error_handler
          uses the  mini_menu routine,  the window's attributes can be
          changed  by  making  appropriate  changes  to   _mmatt1  and
          _mmatt2.


          Return Value

          No value is returned.


          See Also

          mini_menu and _harderr in the C Run-Time Library Reference.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              _harderr(error_handler);
              save_initial_video();
              waitkey();
              exit(0);
          }

          This  program  sets  error_handler  as the INT 0x24 hardware
          error handler.





                                                                    18





                                                               fillone

          Summary

          #include <extlib.h>

          void fillone(row, col, chr, attribute);
          int row, col;                 Screen position.
          int chr;                      Character.
          int attribute;                Attribute.


          Description

          The fillone routine sets the position defined by  (row, col)
          to the specified character/attribute pair (chr/attribute).


          Returned Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              fillone(4, 10, 'M', 0x70);
              waitkey();
              exit(0);
          }

          This program  sets position (4, 10) to an black M on a white
          background.















                                                                    19





                                                            fillscreen

          Summary

          #include <extlib.h>

          void fillscreen(row1, col1, row2, col2, chr, attribute);
          int row1, col1;               Upper-left corner  of the text
                                        window.
          int row2, col2;               Lower-right corner of the text
                                        window.
          int chr;                      Text window character.
          int attribute;                Text window attribute.


          Description

          The fillscreen routine  fills  the  text  window  defined by
          (row1, col1)  and (row2,  col2) with the character/attribute
          pairs specified by chr  and  attribute.    Additionally, the
          cursor position  is set to the upper-left corner of the text
          window.


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              fillscreen(1, 1, 25, 40, 'M', 7);
              waitkey();
              exit(0);
          }

          This program fills the left  half  of  the  screen  with Ms.
          Furthermore, the cursor position is set to (1, 1).









                                                                    20





                                                                  fire

          Summary

          #include <extlib.h>

          int fire(button);
          int button;                   Button to be read.


          Description

          The  fire  routine  reads  a  joystick button, returning the
          status of the button.  The button parameter can be on of the
          following manifest constants (defined in extlib.h):

               Constant                 Action
               _BUTTON_A_1              Reads button 1 of joystick A.
               _BUTTON_A_2              Reads button 2 of joystick A.
               _BUTTON_B_1              Reads button 1 of joystick B.
               _BUTTON_B_2              Reads button 2 of joystick B.


          Return Value

          Returns 1  if the joystick button is being pressed.  Returns
          0 if the joystick button isn't being pressed.


          See Also

          stick





















                                                                    21





                                                                  fire

          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              while (!kbhit()) {
                  setcurpos(1, 1);
                  printf("%d\n", fire(_BUTTON_A_1));
                  printf("%d\n", fire(_BUTTON_A_2));
                  printf("%d\n", fire(_BUTTON_B_1));
                  printf("%d\n", fire(_BUTTON_B_2));
              }
              waitkey();
              exit(0);
          }

          This program reads  and  displays  the  status  of  the four
          joystick buttons.






























                                                                    22





                                                             getcurpos

          Summary

          #include <extlib.h>

          void getcurpos(row, col, sline, eline);
          int *row;                     Cursor row position.
          int *col;                     Cursor column position.
          int *sline;                   Cursor starting line.
          int *eline;                   Cursor ending line.


          Description

          The  getcurpos  routine  returns  the cursor row position in
          row, the cursor column position in col, the  cursor starting
          line in sline, and the cursor ending line in eline.


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              int row, col, sline, eline;

              settext80();
              getcurpos(&row, &col, &sline, &eline);
              clearscreen(1, 1, 25, 80, 7);
              printf("Row: %d  Column: %d  Starting Line: %d  Ending
                  Line: %d\n", row, col, sline, eline);
              waitkey();
              exit(0);
          }

          This  program  obtains  the  cursor  information, clears the
          screen and prints the information.








                                                                    23





                                                        horizontal_bar

          Summary

          #include <extlib.h>

          void horizontal_bar(window, curpos, total, attribute);
          WINDOW *window;               Pointer    to    the    window
                                        coordinates' structure.
          int curpos;                   Current line position.
          int total;                    Line length.
          int attribute;                Scroll bar attribute.


          Description

          The horizontal_bar  routine displays a horizontal scroll bar
          at the bottom of a window  whose coordinates  are pointed to
          by window.   The  current position in the line is derived by
          dividing curpos by total.  Additionally,  the scroll  bar is
          displayed with an attribute of attribute.


          Return Value

          No value is returned.


          See Also

          vertical_bar and open_window.






















                                                                    24





                                                        horizontal_bar

          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              WINDOW *window;

              save_initial_video();
              window = open_window(1, 30, 10, 70, _DRAW, 7,
                  _SINGLE_LINE, 7);
              horizontal_bar(window, 0, 100, 7);
              waitkey();
              horizontal_bar(window, 50, 100, 7);
              waitkey();
              horizontal_bar(window, 100, 100, 7);
              waitkey();
              exit(0);
          }

          This  program  opens  a  window and displays scroll bars for
          various points in a line.




























                                                                    25





                                                          inputdollars

          Summary

          #include <extlib.h>

          int inputdollars(dspinpflg, row, col, length, dvalue);
          int flag;                     Display/input flag.
          int row, col;                 Input field position.
          int length;                   Input field length.
          double *dvalue;               Input field contents.


          Description

          The inputdollars routine will  display or  display and input
          (as indicated  by dspinpflg)  a right-justified dollar value
          (dvalue)  with  a  field  length  of  length  at  the screen
          position  defined  by  (row,  col).  During input, HOME will
          erase the value and  start  the  input  from  the beginning.
          BACK SPACE  will erase the last digit entered. The dspinpflg
          parameter can be one  of  the  following  manifest constants
          (defined in extlib.h):

               Constant                 Action
               _DISPLAY_ONLY            Only display the field.
               _INPUT                   Display   the  field  and
                                        then get the input.


          Return Value

          Inputdollars returns the value of the last key  pressed (see
          waitkey).


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              double amount;

              save_initial_video();
              while(inputdollars(_INPUT, 13, 41, 10, &amount) != 27);
              exit(0);
          }

          This program inputs dollar values until ESC is pressed.


                                                                    26





                                                           inputfields

          Summary

          #include <extlib.h>

          void  inputfields(number,  first,  row, col, length, typflg,
               inpptr, [...]);
          int number;                   Number of input fields.
          int first;                    First input field.
          int row, col;                 Input field position.
          int length;                   Input field length.
          int typflg;                   Type of input.
          char *inpptr;                 String field's contents.
          long *inpptr;                 Numeric field's contents.
          double *inpptr;               Dollar field's contents.


          Description

          The inputfields routine provides input for  multiple fields.
          The number  of fields is specified by number.  Each field is
          defined by specifying its position (row,  col), length, type
          (typflg),  and   an  appropriate  pointer  (inpptr)  to  its
          contents.  Input is started  at  the  first  field.   During
          input the following control keys are active:

               Key                      Action
               UP ARROW                 Move   to   the  previous
                                        field.
               DOWN ARROW or ENTER      Move to the next field.
               ESC                      End the input.

          The typflg parameter can  be one  of the  following manifest
          constants (defined in extlib.h):

               Constant                 Action
               _STRING                  Gets string  input at the
                                        specified field.
               _NUMBER                  Gets numeric input at the
                                        specified field.
               _DOLLARS                 Gets dollar  input at the
                                        specified field.


          Return Value

          No value is returned.


          See Also


                                                                    27





                                                           inputfields

          inputdollars,   inputnumber,    inputstring,   printdelimit,
          printfields, and printheads.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              long number;
              char name[31];
              double balance;

              save_initial_video();
              printheads(3, 1, 1, "Account Number", 2, 1,
                  "Account Name", 3, 1, "Account Balance");
              printdelimit('[', ']', 3, 1, 40, 6, 2, 40, 30, 3,
                  40, 10);
              number = balance = name[0] = 0;
              inputfields(3, 0, 1, 40, 6, _NUMBER, &number, 2, 40,
                  30, _STRING, name, 3, 40, 10, _DOLLARS, &balance);
              exit(0);
          }

          This program  requests information  for an account by asking
          for the account's number, name, and balance.























                                                                    28





                                                           inputnumber

          Summary

          #include <extlib.h>

          int inputnumber(dspinpflg, row, col, length, number);
          int flag;                     Display/input flag.
          int row, col;                 Input field position.
          int length;                   Input field length.
          long *number;                 Input field contents.


          Description

          The inputnumber  routine will  display or  display and input
          (as indicated  by dspinpflg) a right-justified numeric value
          (number)  with  a  field  length  of  length  at  the screen
          position  defined  by  (row,  col).  During input, HOME will
          erase the value and  start  the  input  from  the beginning.
          BACK SPACE  will erase the last digit entered. The dspinpflg
          parameter can be one  of  the  following  manifest constants
          (defined in extlib.h):

               Constant                 Action
               _DISPLAY_ONLY            Only display the field.
               _INPUT                   Display   the  field  and
                                        then get the input.


          Return Value

          Inputnumber returns the value of the  last key  pressed (see
          waitkey).


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              long amount = 0;

              save_initial_video();
              while (inputnumber(_INPUT, 13, 41, 10, &amount) != 27);
              exit(0);
          }

          This program inputs numeric values until ESC is pressed.


                                                                    29





                                                           inputstring

          Summary

          #include <extlib.h>

          int inputstring(dspinpflg, row, col, length, string);
          int flag;                     Display/input flag.
          int row, col;                 Input field position.
          int length;                   Input field length.
          char *string;                 Input field contents.


          Description

          The inputstring  routine will  display or  display and input
          (as indicated by dspinpflg)  a left-justified  string with a
          field  length  of  length  at the screen position defined by
          (row, col).  During  input, HOME  will erase  the string and
          start the  input from  the beginning.  BACK SPACE will erase
          the last character entered.  The dspinpflg  parameter can be
          one  of   the  following   manifest  constants  (defined  in
          extlib.h):

               Constant                 Action
               _DISPLAY_ONLY            Only display the field.
               _INPUT                   Display  the   field  and
                                        then get the input.


          Return Value

          Inputstring returns  the value  of the last key pressed (see
          waitkey).


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              char string[31];

              save_initial_video();
              string[0] = 0;
              while (inputstring(_INPUT, 13, 41, 30, string) != 27) ;
              exit(0);
          }

          This program inputs strings until ESC is pressed.

                                                                    30





                                                              menu_bar

          Summary

          #include <extlib.h>

          int menu_bar(nchoices, menu, row);
          int nchoices;                 Number of menu choices.
          MENU *menu;                   Pointer to  an  array  of MENU
                                        structures.
          int row;                      Menu bar row.


          Description

          The menu_bar  routine displays  a menu bar at row.  Whenever
          a hotkey (ALT plus  the indicted  key) is  pressed, menu_bar
          passes program control to the specified menu routine.


          Return Value

          If  a  hotkey  is  pressed,  menu_bar  returns a value of 0.
          Otherwise,  menu_bar  returns  the  value  of  the  last key
          pressed.


          See Also

          display_menu_bar























                                                                    31





                                                              menu_bar

          Example

          #include <stdio.h>
          #include <extlib.h>

          void save_file(void);
          void load_file(void);
          void exit_program(void);

          static MENU menu[3] = { {"Save", 0, save_file},
                                  {"Load", 0, load_file},
                                  {"Exit", 0, exit_program} };

          main()
          {
              save_initial_video();
              cursoron();
              while (TRUE) {
                  setcurpos(13, 1);
                  printf("%3d", menu_bar(3, menu, 1));
              }
          }

          void save_file(void)
          {
              display_error("Save file has been selected");
          }

          void load_file(void)
          {
              display_error("Load file has been selected");
          }

          void exit_program(void)
          {
              exit(0);
          }

          This program  displays a  menu bar and will continuously ask
          for a selection until Exit (ALT E) is chosen.











                                                                    32





                                                             mini_menu

          Summary

          #include <extlib.h>

          int mini_menu(row, col, nchoices, menu,
               ntitles, [title, ...]);
          int row, col;                 Screen position  to center the
                                        menu on.
          int nchoices;                 Number of menu choices.
          MENU *menu;                   Pointer  to  an  array of MENU
                                        structures.
          int ntitles;                  Number of titles.
          char *titles;                 Title pointer.


          Description

          The mini_menu routine displays a menu by centering it at the
          coordinates  defined  by  (row,  col).  Any specified titles
          will be displayed above  the menu  choices.   Selection of a
          menu  item  is  accomplished  by  selecting  the appropriate
          hotkey (the letter indicated).  However, the choice with the
          double-lined border  can be  selected at anytime by pressing
          ENTER.  The double-lined border is moved by  pressing either
          the LEFT ARROW or the RIGHT ARROW keys.


          Return Value

          If the  menu selection's  function is set to NULL, mini_menu
          returns the value of  the  selection's  hotkey.   Otherwise,
          mini_menu returns a value of 0.



















                                                                    33





                                                             mini_menu

          Example

          #include <stdio.h>
          #include <extlib.h>

          void save_file(void);

          static MENU menu[3] = { {"Yes", 0, save_file},
                                  {"No", 0, NULL},
                                  {"Cancel", 0, NULL} };

          main()
          {
              save_initial_video();
              while (mini_menu(13, 40, 3, menu, 2,
                  "The file hasn't been saved!",
                  "Do you want me to save it?") != 'C') ;
              exit(0);
          }

          void save_file(void)
          {
              display_error("The file has been saved");
          }

          This program  asks if  a file should be saved on exit from a
          program.
























                                                                    34





                                                           open_window

          Summary

          #include <extlib.h>

          WINDOW *open_window(row1, col1, row2, col2,
                              dflg[, watt, bflg[, batt]]);
          int row1, col1;               Upper-left   corner   of   the
                                        window.
          int row2, col2;               Lower-right   corner   of  the
                                        window.
          int dflg;                     Draw window flag.
          int watt;                     Window attribute.
          int bflg;                     Border flag.
          int batt;                     Border attribute.


          Description

          The open_window  routine opens  a window  at the coordinates
          defined by  (row1, col1)  and (row2,  col2).   The window is
          drawn, if the dflg so indicates, by clearing  the window and
          setting  the  window's  attributes  to watt.  Furthermore, a
          border will be drawn according to the bflg.  If  a border is
          drawn, its  attributes are  set to batt.  The dflg parameter
          can be one of the following  manifest constants  (defined in
          extlib.h):

               Constant                 Action
               _DRAW                    Draw the window.
               _NO_DRAW                 Leave     the    window's
                                        contents intact.

          The bflg parameter  can  be  on  of  the  following manifest
          constants (defined in extlib.h):

               Constant                 Action
               _NO_BORDER               The   window   is   drawn
                                        without a border.
               _SINGLE_LINE             The window  is drawn with
                                        a single-lined border.
               _DOUBLE_LINE             The window  is drawn with
                                        a double-lined border.


          Return Value

          open_window returns a pointer with the type WINDOW.




                                                                    35





                                                           open_window

          See Also

          close_window


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              WINDOW *window;

              save_initial_video();
              window = open_window(1, 20, 15, 50, _DRAW, 0x70,
               _SINGLE_LINE, 0x70);
              waitkey();
              window = close_window(window);
              exit(0);
          }

          This program opens a text window at the  coordinates (1, 20)
          and (15,  50).   After waiting  for a key to be pressed, the
          program continues by closing the window.


























                                                                    36





                                                                 popup

          Summary

          #include <extlib.h>

          int popup(number, menu, row, col);
          int number;                   Number of menu choices.
          MENU *menu;                   Pointer to  an  array  of MENU
                                        structures.
          int row;                      Upper row for the menu.
          int col;                      Column to center the menu on.


          Description

          The popup  routine displays a popup menu starting at row and
          centered on  the column  defined by  (col).   Selection of a
          menu  item  is  accomplished  by  pressing  the  appropriate
          hotkey  (the  letter  indicated)   or  by   pressing  ENTER.
          Pressing ENTER,  will select the highlighted menu selection.
          The highlighting can be move by pressing either the UP ARROW
          or the DOWN ARROW key.  Pressing ESC will cancel the menu.


          Return Value

          If  the  menu  selection's  function  is  set to NULL, popup
          returns the value of  the  selection's  hotkey.   Otherwise,
          pop_up returns a value of 0.























                                                                    37





                                                                 popup

          Example

          #include <stdio.h>
          #include <extlib.h>

          void save_file(void);
          void load_file(void);

          static MENU menu[4] = { {"Save the File", 0, save_file},
                                  {"Load the File", 0, load_file},
                                  {"", 0, NULL},
                                  {"Exit the Program", 0, NULL} };

          main()
          {
              save_initial_video();
              while (!popup(4, menu, 3, 40)) ;
              exit(0);
          }

          void save_file(void)
          {
              display_error("Saving the file");
          }

          void load_file(void)
          {
              display_error("Loading the file");
          }

          This  program  continuously  displays  a menu until the Exit
          choice is selected.



















                                                                    38





                                                           printcenter

          Summary

          #include <extlib.h>

          void printcenter(row, col, string);
          int row;                      String row.
          int col;                      String center column.
          char *string;                 String pointer.


          Description

          The printcenter routine prints a string  by centering  it at
          the specified  column (col)  on the  display line defined by
          row.


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              printcenter(1, 40, "This message is centered");
              waitkey();
              exit(0);
          }

          This program displays a message at the center of line one.















                                                                    39





                                                          printdelimit

          Summary

          #include <extlib.h>

          void printdelimit(ldel, rdel, number, row,
                            col, length, [...]);
          int ldel;                     Left delimiter.
          int rdel;                     Right delimiter.
          int number;                   Number of input fields.
          int row, col;                 Input field position.
          int length;                   Input field length.


          Description

          The printdelimit routine prints  delimiters around  a number
          of  input  fields.    A  left  delimiter  (ldel) and a right
          delimiter (rdel) is displayed  around each  field.   A field
          is  defined  to  start  at  (row,  col) and have a length of
          length.


          Return Value

          No value is returned.


          See Also

          inputdollars,    inputfields,    inputnumber,   inputstring,
          printfields, and printheads.




















                                                                    40





                                                          printdelimit

          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              long number;
              char name[31];
              double balance;

              save_initial_video();
              printheads(3, 1, 1, "Account Number", 2, 1,
                  "Account Name", 3, 1, "Account Balance");
              printdelimit('[', ']', 3, 1, 40, 6, 2, 40, 
                  30, 3, 40, 10);
              number = balance = name[0] = 0;
              inputfields(3, 0, 1, 40, 6, _NUMBER, &number, 2, 40,
                  30, _STRING, name, 3, 40, 10, _DOLLARS, &balance);
              exit(0);
          }

          This program  requests information  for an account by asking
          for the account's number, name, and balance.



























                                                                    41





                                                           printfields

          Summary

          #include <extlib.h>

          void printfields(number,  row, col,  length, typflg, inpptr,
                    [...]);
          int number;                   Number of fields.
          int row, col;                 Field position.
          int length;                   Field length.
          int typflg;                   Field type.
          char *inpptr;                 String field pointer.
          long *inpptr;                 Numeric field pointer.
          double *inpptr;               Dollar field pointer.


          Description

          The printfields  routine is used to display multiple fields.
          The number of fields is specified by number.  Each  field is
          defined by specifying it's position (row, col), length, type
          (typflg), and an appropriate pointer (inpptr) to the field's
          contents.   The typflg parameter can be one of the following
          manifest constants (defined in extlib.h):

               Constant                 Action
               _STRING                  Displays a string field.
               _NUMBER                  Displays a numeric field.
               _DOLLARS                 Displays a dollar field.


          Return Value

          No value is returned.


          See Also

          inputdollars,    inputfields,    inputnumber,   inputstring,
          printdelimit, and printheads.












                                                                    42





                                                           printfields

          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              long number;
              char name[31];
              double balance;

              save_initial_video();
              printheads(3, 1, 1, "Account Number", 2, 1, 
                  "Account Name", 3, 1, "Account Balance");
              printdelimit('[', ']', 3, 1, 40, 6, 2, 40, 
                  30, 3, 40, 10);
              number = balance = name[0] = 0;
              inputfields(3, 0, 1, 40, 6, _NUMBER, &number, 2, 40,
                  30, _STRING, name, 3, 40, 10, _DOLLARS, &balance);
              exit(0);
          }

          This program  requests information  for an account by asking
          for the account's number, name, and balance.



























                                                                    43





                                                            printheads

          Summary

          #include <extlib.h>

          void printheads(number[, row, col, string, [...]);
          int number;                   Number of headings.
          int row, col;                 Heading position.
          char *string;                 Heading pointer.


          Description

          The printheads routine is  used  to  display  multiple field
          headings.    The  number  of  headings  to  be  displayed is
          defined by number.    Each  heading's  (string)  position is
          defined by specifying it's position (row, col).


          Return Value

          No value is returned.


          See Also

          inputdollars,    inputfields,    inputnumber,   inputstring,
          printdelimit, and printfields.
























                                                                    44





                                                            printheads

          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              long number;
              char name[31];
              double balance;

              save_initial_video();
              printheads(3, 1, 1, "Account Number", 2, 1, 
                  "Account Name", 3, 1, "Account Balance");
              printdelimit('[', ']', 3, 1, 40, 6, 2, 40, 
                  30, 3, 40, 10);
              number = balance = name[0] = 0;
              inputfields(3, 0, 1, 40, 6, _NUMBER, &number, 2, 40, 30,
                  _STRING, name, 3, 40, 10, _DOLLARS, &balance);
              exit(0);
          }

          This program requests information  for an  account by asking
          for the account's number, name, and balance.



























                                                                    45





                                                              printone

          Summary

          #include <extlib.h>

          void printone(row, col, chr);
          int row, col;                 Character position.
          int chr;                      Character.


          Description

          The  printone  routine  displays  a  character  (chr) at the
          position defined by (row, col).


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              printone(5, 40, 'Z');
              waitkey();
              exit(0);
          }

          This program displays a Z at position (5, 40).

















                                                                    46





                                                           printstring

          Summary

          #include <extlib.h>

          void printstring(row, col, string);
          int row, col;                 String position.
          char *string;                 String pointer.


          Description

          The printstring  routine displays  a string  at the position
          defined by (row, col).


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              printstring(2, 10, "This is row 2, column 10");
              waitkey();
              exit(0);
          }

          This program displays a string at row 2, column 10.

















                                                                    47





                                                              pulldown

          Summary

          #include <extlib.h>

          int pulldown(nummenus, menus, row);
          int nummenus;                 Number of pulldown menus.
          MENU_HEAD *menus;             Pointer   to   an   array   of
                                        MENU_HEAD structures.
          int row;                      Menu bar row.


          Description

          The pulldown routine is used to  implement multiple pulldown
          menus.  The number of pulldown menus is defined by nummenus.
          Each of the pulldown  menus  is  defined  by  an appropriate
          MENU_HEAD structure.  This structure includes definitions of
          the menu's heading, hotkey, and a pointer to  an appropriate
          MENU structure.   At  the start  of the  pulldown routine, a
          menu bar is displayed on the specified row.   This  menu bar
          lists each  one of the menus' headings.  During the pulldown
          routine the following control keys are active:

               Key                      Action
               ALT + Heading Hotkey     Pulls down  the indicated
                                        menu.
               ESC                      Removes  the current menu
                                        from the screen.
               LEFT ARROW               Removes the  current menu
                                        from the screen and pulls
                                        down the next menu to the
                                        left.
               RIGHT ARROW              Removes  the current menu
                                        from the screen and pulls
                                        down the next menu to the
                                        right.
               Menu Item Hotkey         Executes  the appropriate
                                        menu item's function.
               ENTER                    Executes  the highlighted
                                        menu item's function.
               UP ARROW                 Moves  the  highlight bar
                                        up  to  the previous menu
                                        item.
               DOWN ARROW               Moves  the  highlight bar
                                        down to the previous menu
                                        item.





                                                                    48





                                                              pulldown

          Return Value

          If a menu item isn't selected, pulldown returns the value of
          the last  key pressed.   Otherwise, pulldown returns a value
          of 0.


          See Also

          pulldown_bar


          Example

          #include <stdio.h>
          #include <extlib.h>

          void save_file(void);
          void read_file(void);
          void exit_prog(void);
          void add_acc(void);
          void del_acc(void);
          void add_tra(void);
          void del_tra(void);
          void prt_coa(void);
          void led_upd(void);
          void fin_stat(void);

          static MENU file[3] = { {"Save the File", 0, save_file},
              {"Read the File", 0, read_file},
              {"Exit the Program", 0, exit_prog} };

          static MENU accounts[2] = { {"Add an Account", 0, add_acc},
              {"Delete an Account", 0, del_acc} };

          static MENU transact[2] = { {"Add a Transaction", 0,
              add_tra},
              {"Delete a Transaction", 0, del_tra} };

          static MENU print[4] = { {"Print a Chart of Accounts", 8,
              prt_coa},
              {"Print a Ledger Update", 15, led_upd},
              {"", 0, NULL},
              {"Print Financial Statements", 6, fin_stat} };

          static MENU_HEAD heads[4] = { {"File", 0, 3, file},
              {"Accounts", 0, 2, accounts},
              {"Transactions", 0, 2, transact},
              {"Print", 0, 4, print} } ;


                                                                    49





                                                              pulldown

          main()
          {
              save_initial_video();
              while (TRUE) {
                  setcurpos(13, 1);
                  printf("%3d", pulldown(4, heads, 1));
              }
          }

          void save_file(void)
          {
              display_error("Saving the File");
          }

          void read_file(void)
          {
              display_error("Reading the File");
          }

          void exit_prog(void)
          {
              exit(0);
          }

          void add_acc(void)
          {
              display_error("Adding an Account");
          }

          void del_acc(void)
          {
              display_error("Deleting an Account");
          }

          void add_tra(void)
          {
              display_error("Adding a Transaction");
          }

          void del_tra(void)
          {
              display_error("Deleting a Transaction");
          }

          void prt_coa(void)
          {
              display_error("Printing a Chart of Accounts");
          }

          void led_upd(void)

                                                                    50





                                                              pulldown

          {
              display_error("Printing a Ledger Update");
          }

          void fin_stat(void)
          {
              display_error("Print the Financial Statements");
          }

          This program will  continuously  execute  the  pulldown menu
          routine until the Exit Program function is selected from the
          File menu.







































                                                                    51





                                                          pulldown_bar

          Summary

          #include <extlib.h>

          void pulldown_bar(nummenus, menus, row);
          int nummenus;                 Number of pulldown menus.
          MENU_HEAD *menus;             Pointer   to   an   array   of
                                        MENU_HEAD structures.
          int row;                      Menu bar row.


          Description

          The pulldown_bar  routine is used to display a pulldown menu
          bar.   The number  of pulldown  menu headings  is defined by
          nummenus.  Each of the headings is defined in an appropriate
          MENU_HEAD  structure.    Additionally,   the  menu   bar  is
          displayed on the specified row.


          Return Value

          No value is returned.


          See Also

          pulldown


          Example

          #include <stdio.h>
          #include <extlib.h>

          static MENU_HEAD heads[4] = { {"File", 0, 0, NULL},
              {"Accounts", 0, 0, NULL},
              {"Transactions", 0, 0, NULL},
              {"Print", 0, 0, NULL} } ;

          main()
          {
              save_initial_video();
              pulldown_bar(4, heads, 1);
              waitkey();
              exit(0);
          }

          This program displays a pulldown menu bar on the top line of
          the display.

                                                                    52





                                                         restorescreen

          Summary

          #include <extlib.h>

          void restorescreen(row1, col1, row2, col2, buffer);
          int row1, col1;               Upper-left corner  of the text
                                        window.
          int row2, col2;               Lower-right corner of the text
                                        window.
          char *buffer;                 Buffer pointer.


          Description

          The restorescreen routine displays a text  window defined by
          the  points  (row1,  col1)  and  (row2,  col2)  from buffer.
          Because each of the  text window's  characters consist  of a
          character/attribute pair, the buffer must be ((row2 - row1 +
          1) * (col2 - col1 + 1) * 2)  bytes long.


          Return Value

          No value is returned.


          See Also

          savescreen






















                                                                    53





                                                         restorescreen

          Example

          #include <stdio.h>
          #include <extlib.h>

          static char vbuff[4000];

          main()
          {
              settext80();
              savescreen(1, 1, 25, 80, vbuff);
              clearscreen(1, 1, 25, 80, 7);
              waitkey();
              restorescreen(1, 1, 25, 80, vbuff);
              waitkey();
              exit(0);
          }

          This program copies the screen into a buffer and then clears
          the screen.   After  waiting for a key, the program restores
          the previous screen display.






























                                                                    54





                                                    save_initial_video

          Summary

          #include <extlib.h>

          void save_initial_video(void);


          Description

          The  save_initial_video  routine  initializes  the  Extended
          Library video  routines by  executing the settext80 routine,
          saving the cursor position  and type,  saving a  copy of the
          screen contents,  and clearing the screen.  When the program
          is finished running,  save_initial_video  will automatically
          restore the screen contents and restore the cursor.


          Return Value

          No value is returned.


          See Also

          settext80


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              printcenter(13, 40, 
                  "This is a save_initial_video demo");
              waitkey();
              exit(0);
          }

          This program  demonstrates how  save_initial_video saves and
          restores the original screen contents.








                                                                    55





                                                            savescreen

          Summary

          #include <extlib.h>

          void savescreen(row1, col1, row2, col2, buffer);
          int row1, col1;               Upper-left corner  of the text
                                        window.
          int row2, col2;               Lower-right corner of the text
                                        window.
          char *buffer;                 Buffer pointer.


          Description

          The savescreen routine copies the text window defined by the
          points (row1,  col1) and  (row2, col2) into buffer.  Because
          each  of   the  text   window's  characters   consist  of  a
          character/attribute pair, the buffer must be ((row2 - row1 +
          1) * (col2 - col1 + 1) * 2)  bytes long.


          Return Value

          No value is returned.


          See Also

          restorescreen






















                                                                    56





                                                            savescreen

          Example

          #include <stdio.h>
          #include <extlib.h>

          static char vbuff[4000];

          main()
          {
              settext80();
              savescreen(1, 1, 25, 80, vbuff);
              clearscreen(1, 1, 25, 80, 7);
              waitkey();
              restorescreen(1, 1, 25, 80, vbuff);
              waitkey();
              exit(0);
          }

          This program copies the screen into a buffer and then clears
          the screen.   After  waiting for a key, the program restores
          the previous screen display.






























                                                                    57





                                                             setattrib

          Summary

          #include <extlib.h>

          void setattrib(row1, col1, row2, col2, attribute);
          int row1, col1;               Upper-left corner  of the text
                                        window.
          int row2, col2;               Lower-right corner of the text
                                        window.
          int attribute;                Text window attribute.


          Description

          The setattrib  routine saves  attribute for  the entire text
          window defined by the points (row1, col1) and (row2, col2).


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              setattrib(1, 41, 25, 80, 0x70);
              waitkey();
              exit(0);
          }

          This  program  sets  the  right  half of the screen to black
          characters on a white background.













                                                                    58





                                                             setcurpos

          Summary

          #include <extlib.h>

          void setcurpos(row, col);
          int row, col;                 Cursor position.


          Description

          The setcurpos  routine  moves  the  cursor  to  the position
          defined by (row, col).


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              setcurpos(13, 41);
              printf("Right half of the center line");
              waitkey();
              exit(0);
          }

          This program  moves the  cursor to  the center of the screen
          and prints a message.
















                                                                    59





                                                             setcursor

          Summary

          #include <extlib.h>

          void setcursor(sline, eline);
          int sline;                    Cursor starting line.
          int eline;                    Cursor ending line.


          Description

          The setcursor routine sets the cursor starting line to sline
          and the cursor ending line to eline.


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              setcursor(0, 7);
              waitkey();
              exit(0);
          }

          This  program  sets  the  cursor  starting line to 0 and the
          cursor ending line to 7.
















                                                                    60





                                                                setone

          Summary

          #include <extlib.h>

          void setone(row, col, attribute);
          int row, col;                 Screen position.
          int attribute;                Attribute.


          Description

          The setone  routine  sets  the  attribute  for  the position
          defined by (row, col) to attribute.


          Return Value

          No value is returned.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              setone(23, 2, 0x70);
              waitkey();
              exit(0);
          }

          This program sets position (23, 2) to a black character on a
          white background.
















                                                                    61





                                                             settext80

          Summary

          #include <extlib.h>

          void settext80(void);


          Description

          The settext80 routine determines the display type (CGA, EGA,
          or MDA)  and sets  the video  mode to an 80 by 25 text mode.
          settext80 should always be  called before  using any  of the
          video functions in the Extended Library.


          Return Value

          No value is returned.


          See Also

          save_initial_video


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              settext80();
              clearscreen(1, 1, 25, 80, 7);
              waitkey();
              exit(0);
          }

          This program sets the video mode and clears the screen.












                                                                    62





                                                                 stick

          Summary

          #include <extlib.h>

          int stick(joystick);
          int joystick;                 Joystick to be read.


          Description

          The stick  routine reads  the joysticks, returning the value
          for the specified axis.  The  joystick parameter  can be one
          of the following manifest constants (defined in extlib.h):

               Constant                 Action
               _STICK_A_X               Reads the  x-axis for joystick
                                        A.
               _STICK_A_Y               Reads the  y-axis for joystick
                                        A.
               _STICK_B_X               Reads the  x-axis for joystick
                                        B.
               _STICK_B_Y               Reads the  y-axis for joystick
                                        B.


          Return Value

          Returns the value read for the indicated coordinate.


          See Also

          fire


















                                                                    63





                                                                 stick

          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              while (!kbhit()) {
                  setcurpos(1, 1);
                  printf("%3d\n", stick(_STICK_A_X));
                  printf("%3d\n", stick(_STICK_A_Y));
                  printf("%3d\n", stick(_STICK_B_X));
                  printf("%3d\n", stick(_STICK_B_Y));
              }
              waitkey();
              exit(0);
          }

          This  program  reads  and  displays the four joystick values
          until a key is pressed.






























                                                                    64





                                                          vertical_bar

          Summary

          #include <extlib.h>

          void vertical_bar(window, curpos, total, attribute);
          WINDOW *window;               Pointer   to    the   window's
                                        coordinates structure.
          int curpos;                   Current record.
          int total;                    Total number of records.
          int attribute;                Scroll bar attribute.


          Description

          The vertical_bar  routine displays  a vertical scroll bar at
          the right  hand  side  of  a  window  whose  coordinates are
          pointed to  by window.   The current position in the file is
          derived by dividing  curpos  by  total.    Additionally, the
          scroll bar is displayed with an attribute of attribute.


          Return Value

          No value is returned.


          See Also

          horizontal_bar and open_window.






















                                                                    65





                                                          vertical_bar

          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              WINDOW *window;

              save_initial_video();
              window = open_window(1, 30, 10, 70, _DRAW, 7,
                  _SINGLE_LINE, 7);
              vertical_bar(window, 0, 100, 7);
              waitkey();
              vertical_bar(window, 50, 100, 7);
              waitkey();
              vertical_bar(window, 100, 100, 7);
              waitkey();
              exit(0);
          }

          This  program  opens  a  window and displays scroll bars for
          various points in a file.




























                                                                    66





                                                               waitkey

          Summary

          #include <extlib.h>

          int waitkey(void);


          Description

          The waitkey routine waits for a key to be pressed.


          Return Value

          The returned value is the ASCII  code for  the key  that was
          pressed.   Extended keys return a value of their scan code +
          256.


          Example

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              int key;

              save_initial_video();
              while (TRUE) {
                  if ((key = waitkey()) == 27)
                      exit(0);
                  printf("%d\n", key);
              }
          }

          This program continuously waits for a key to  be pressed and
          displays the key's value until ESC is pressed.













                                                                    67





                                                            Appendix A

                Appendix A - Using Extended Library With QuickC


          Constructing a Quick Library

          The first  step in  using Extended Library with QuickC is to
          construct  a  quick  library   with  the   Extended  Library
          routines.     The  following   command  will  construct  the
          necessary quick library:

               qlib /n extlib.qlb /l mextlibe.lib /s extlib.c

          The above command instructs the qlib to search  extlib.c for
          any C  run-time routines  that aren't  a part  of the QuickC
          core library.  Therefore,  the linker  will extract _harderr
          and  _hardresume  from  mlibce.lib.   These two routines are
          necessary to use error_handler in your programs.   Any other
          routines that  you wish extracted can easily be specified by
          adding their names to extlib.c.


          The QuickC Windowing Environment

          Because QuickC uses its  own  windowing  environment,  it is
          necessary to add a printf(" "); statement before calling any
          of the Extended Library video routines.  Failure  to add the
          printf(" "); statement will cause unpredictable results when
          the program is run from within the QuickC  environment.  The
          following is an example:

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              save_initial_video();
              setattrib(1, 1, 13, 40, 0x70);
              waitkey();
          }












                                                                    68





                                                            Appendix A

          Should Be:

          #include <stdio.h>
          #include <extlib.h>

          main()
          {
              printf(" ");
              save_initial_video();
              setattrib(1, 1, 13, 40, 0x70);
              waitkey();
          }

          By adding the printf(" "); statement to the program,  QuickC
          will release  control  of  the  video  display  over  to the
          program.    Thus,  proper  execution  will result.  Once the
          program has been fully  debugged and  will only  be run from
          outside  of   the  QuickC   environment,  the  printf("  ");
          statement can be safely removed from the program.
































                                                                    69





                                                            Appendix B

                        Appendix B - Source Code Files

          The following is a list of the Extended  Library source code
          files  (These  files  are  not  included  on  the  shareware
          distribution disk.   They  are only  available to registered
          owners.):

               File                     Routines
               dinput.c                 inputdollars
               error.c                  display_error
                                        error_handler
               games.asm                fire
                                        stick
               menubar                  display_menu_bar
                                        menu_bar
               misc.c                   waitkey
               minimenu.c               mini_menu
               minput.c                 inputfields
                                        printdelimit
                                        printfields
                                        printheads
               ninput.c                 inputnumber
               popup.c                  popup
               pulldown.c               pulldown
                                        pulldown_bar
               screen.c                 printcenter
                                        save_initial_video
                                        setcursor
               scroll.c                 horizontal_bar
                                        scroll_window
                                        vertical_bar
               sinput.c                 inputstring
               video.asm                clearone
                                        clearscreen
                                        cursoroff
                                        cursoron
                                        drawbox
                                        fillone
                                        fillscreen
                                        getcurpos
                                        printone
                                        printstring
                                        restorescreen
                                        savescreen
                                        setattrib
                                        setcurpos
                                        setone
                                        settext80



                                                                    70





                                                            Appendix B

               window.c                 close_window
                                        draw_window
                                        open_window
















































                                                                    71





                                                            Appendix C

                           Appendix C - Registration

          Registration licenses  you to  use Extended Library 1.0, and
          all future 1.x updates.   Any  unregistered  use  other than
          trial use  to determine if Extended Library meets your needs
          is a violation of our license agreement and is forbidden.

          Single user registration is  available for  $20.00 per copy.
          Registered users  will be  sent the  most current version of
          Extended Library.  This includes all  eight versions  of the
          library and  the complete  source code  for the library.  If
          enough  people  register,  a   printed  manual   may  become
          available at  some future  date.   This manual, if produced,
          will also be provided to  registered  owners  at  no charge.
          Registration also entitles you to free telephone support and
          discounts on future versions of Extended Library.

          The Extended Library license authorizes the use of  one copy
          of Extended  Library on  one machine at a time.  If you have
          multiple computers, either standalone,  networked, or multi-
          user, you  need to register one copy of Extended library for
          each workstation on which it will be used.





























                                                                    72





                                    Invoice


                    Maine Data and Financial Systems, Inc.
                                HCR 79 Box 103
                               Orland, ME 04472

                                (207) 469-7027


          Quantity  Description                                 Amount

          _____     Extended Library 1.0 Registration @ $20.00  ______


                    Registration is for each computer or 
                    workstation on which Extended Library
                    will be used.

                                                  Subtotal      ______

                         Maine residents add 5% sales tax       ______

                                                     Total      ______


               Name: _________________________________________________

            Company: _________________________________________________

            Address: _________________________________________________

                     _________________________________________________

                     _________________________________________________

          Day Phone: ____________________ Eve: _______________________


                           THANK YOU FOR YOUR ORDER

```
{% endraw %}

## FILE1324.TXT

{% raw %}
```
Disk No: 1324
Program Title:  DBSCAN 1.00, EXTLIB
PC-SIG version: 1

DBSCAN is an easy-to-use browsing utility that allows you to view the
contents of dBase III files without having to enter the dBase program.
DBSCAN is a stand-alone program that you access from the DOS system
prompt.  It allows you to view the DBF files but not to change them.
However, you have considerably more control on the fields displayed and
where you want them displayed on the screen.  You can use it to scan
dBASE and compatible databases (with a .DBF extension).

EXTLIB is a library of over 50 C run-time video routines for the
advanced MS-DOS C programmer.

EXTLIB features windows, pop-up and pulldown menus, menu bars, scroll
bars, direct video memory I/O, and cursor control routines to be used
with Microsoft C or QuickC.  In addition to these video routines there
are formatted display input routines (dollars, for instance) and
advanced error handling functions.  The small, medium, compact, and
large memory models are all supported.  EXTLIB also comes with the
floating point emulator or 80x87 packages.

Usage:  dBASE III Plus Browse-Like Utility, C Programming.

Special Requirements:  Microsoft C or QuickC for EXTLIB.

How to Start:  Type GO (press enter).

Suggested Registration:  $40.00, plus $3.00 shipping for source code
that you can modify to suit your own needs; $20.00 for EXTLIB.

File Descriptions:

DBSCAN   EXE  Compiled DBSCAN program.
DBSCAN   DOC  Documentation.
DBSCAN   DBF  Sample database.
EXTLIB   C    File for producing QuickC libraries.
EXTLIB   DOC  EXTLIB Documentation.
EXTLIB   H    EXTLIB include file.
MEXTLIBE LIB  Medium model library.
READ     ME   Introduction.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989, PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1324

     Volume in drive A has no label
     Directory of A:\

    DBSCAN   DBF     18130   2-02-88   6:17p
    DBSCAN   DOC      5925   2-03-88   2:27p
    DBSCAN   EXE    131804   2-01-88   6:02p
    EXTLIB   C          29   5-21-88   3:30p
    EXTLIB   DOC    103428   6-01-88   3:25p
    EXTLIB   H        3302   5-27-88   2:07p
    FILE1324 TXT      1839   3-06-89   1:34p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1015   2-22-89   9:00a
    MANUAL   BAT       147   1-19-89   9:21a
    MEXTLIBE LIB     28313   6-02-88   8:45a
    READ     ME       3933   6-01-88   4:12p
           12 file(s)     297903 bytes
                           18432 bytes free
