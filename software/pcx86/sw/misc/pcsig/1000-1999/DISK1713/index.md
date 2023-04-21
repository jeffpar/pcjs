---
layout: page
title: "PC-SIG Diskette Library (Disk #1713)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1713/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1713"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QBSCR SCREEN ROUTINES 2OF3 (1712,1714)"

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

## FILE1713.TXT

{% raw %}
```
Disk No: 1713                                                           
Disk Title: QBSCR Screen Routines 2of3 (1712,1714)                      
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

## SB.DOC

{% raw %}
```







                          S C R E E N   B U I L D E R




                            a companion program for
                           the QBSCR Screen Routines




                             V e r s i o n   1 . 6











                           Conceived and Created by


                                  Tony Martin

                                      of

                           the BAD SOFTWARE Company
                            1611 Harvest Green Ct.
                               Reston, VA 22094
















             Software and Documentation are (C) Copyright 1990 by
                                  Tony Martin




         T A B L E   O F   C O N T E N T S
         -------------------------------------------------------------


                   Welcome to Screen Builder  . . . . . . . . . . .  1

                   A Few Notices  . . . . . . . . . . . . . . . . .  2

                   Files Included with Screen Builder . . . . . . .  3

                   Screen Builder's Qualifications  . . . . . . . .  4

                   Starting Screen Builder  . . . . . . . . . . . .  5

                   Getting Help . . . . . . . . . . . . . . . . . .  6

                   Basic Editing  . . . . . . . . . . . . . . . . .  7

                   Using the Menu . . . . . . . . . . . . . . . . .  8

                   Saving Your Work . . . . . . . . . . . . . . . .  9

                   Reloading Your Saved Work  . . . . . . . . . . . 12

                   Entering Extended ASCII Characters . . . . . . . 13

                   Changing Colors  . . . . . . . . . . . . . . . . 15

                   Block Operations . . . . . . . . . . . . . . . . 16

                   Extras . . . . . . . . . . . . . . . . . . . . . 21

                             ASCII Chart  . . . . . . . . . . . . . 22

                             Disk Directory . . . . . . . . . . . . 23

                             Jump To DOS  . . . . . . . . . . . . . 24

                   Techniques and Hints . . . . . . . . . . . . . . 25

                   Using Your Screens . . . . . . . . . . . . . . . 26

                   Closing Notes  . . . . . . . . . . . . . . . . . 27

                   Appendix A - The ANSI.SYS Device Driver  . . . . 28









                                                                page i




         Welcome to Screen Builder
         -------------------------------------------------------------

                   Thanks for looking at the QBSCR Screen Routines and
                   Screen  Builder!   The BAD SOFTWARE Company, though
                   fictitious, takes its business very  seriously  and
                   tries to provide useful and interesting software.

                   As an active or  potential  QuickBASIC  programmer,
                   you may have tried at some time to write BASIC code
                   to  print  a  complicated multi-color screen.  Only
                   then did you find that not only  was  it  too  much
                   work  and far too tedious, but it required a lot of
                   code as well.  Two or three  of  those  and  you've
                   eaten  up  a large portion of the string and symbol
                   space provided by QuickBASIC. This was a  dilema  I
                   was  faced  with  many  times.  There  had to be an
                   easier way to create  fancy,  eye-catching  screens
                   without a lot of hassle and wasted code space.  And
                   without spending a large sum of money.

                   Naturally, there wasn't an easy  answer.   After  a
                   little thinking, the solution became clear.  Screen
                   Builder.

                   Screen Builder is an interactive screen editor.  It
                   will let you build screens with as many colors  and
                   ASCII  graphics  characters  as you like.  They can
                   complex or simple,  eye-catching  or  subtle.   Its
                   entirely  up  to your imagination.  The part Screen
                   Builder does for you is make it easy. You can  edit
                   your screen just like a word processor does, with a
                   couple  of  added capabilities, including the entry
                   of extended ASCII characters, entry of text in  any
                   color,   including   blinking   colors,  and  block
                   operations  designed  specifically   for   building
                   screens.

                   Then, once your screens are designed and saved, you
                   can use them in your own QuickBASIC programs by way
                   of  the  QBSCR  PutScreen and BuildScreen routines.
                   Both routines can handle the Screen Builder's  file
                   format,  and will place your screens on the display
                   either very quickly, or in an interesting  animated
                   fashion.   To  get more information about PutScreen
                   and BuildScreen, refer to the QBSCR Screen Routines
                   documentation, included with this package.

                   Ready to begin?  Screen Builder is very easy to use
                   and lots of fun.  Most of the screen in  the  QBSCR
                   DEMO  program  were  generated with Screen Builder.
                   Screen Builder even generated the ASCII table  that
                   is  displayed  when  you  call  up it's ASCII Table
                   function.
                                                                page 1




         A Few Notices (and Nasty Warnings)
         -------------------------------------------------------------

                   You've probably already read the pitch in the QBSCR
                   documentation about shareware.  If you haven't, and
                   are new to the concept, you should read it.

                   The  QBSCR  Screen  Routines and Screen Builder are
                   being sold together as a package.  The cost for the
                   whole deal is $15.00.  See the QBSCR documentation,
                   the last page in particular, if you would  like  to
                   register.   If you do, you'll get a snazzy official
                   disk set, as well as a copy of the  LASER  program.
                   LASER   is  a  graphics  entertainment  and  stress
                   management  program   written   by   BAD   SOFTWARE
                   exclusively  for  its registered customers. Its not
                   shareware,  and  the  only  way  to  get  it  is to
                   register a BAD SOFTWARE product.

                   And of course, we have the traditional  "You  can't
                   touch  the  author  if you foul up your computer or
                   your company with this software" and "This software
                   will always be MINE" clauses...

                        The QBSCR Screen Routines and the  Screen
                        Builder  are  (C)  Copyright 1989 by Tony
                        Martin.   I  retain  all  rights  to  the
                        software    and    documentation.    Both
                        software packages are  provided  "as  is"
                        without  warranty of any kind, express or
                        implied.  I cannot  be  held  responsible
                        for  any  consequences  arising  from the
                        ability  or   inability   to   use   this
                        software.   You  may not charge any money
                        or accept any remuneration  of  any  kind
                        for  this  software without prior written
                        permission from myself.  I do not  expect
                        royalties  or credits if this software is
                        used as part of your program.

                   Sounds  pretty  grim, huh?  If you can't handle it,
                   just picture  me  as  a  kindly  gentleman  helping
                   people  across  busy  intersections.  The important
                   message  is  that  Screen  Builder  and  the  QBSCR
                   routines  are here for you to learn from and use to
                   your benefit.  Just remember that if  you  benefit,
                   so should I.

                   But to move on...





                                                                page 2




         Files Included with Screen Builder
         -------------------------------------------------------------

                   Screen  Builder's  files are thrown in with all the
                   other QBSCR Screen Routine files.  This table below
                   will help you sort out what file is whose.

                   File...                              ...Description
                   ---------------------------------------------------

                   SB.EXE . . . . . . . . . The Screen Builder Program

                   SB.DOC . . . . . . The Screen Builder Documentation

                   COLOR.BIN  . . . .  Color version of Opening Screen

                   MONO.BIN . . . Monochrome version of Opening Screen

                   ASCII.CLR  . . . . . . Color version of ASCII Chart

                   ASCII.MON  . . .  Monochrome version of ASCII Chart

                   SB_CAP.CLR . . . . . Color version of demonstration

                   SB_CAP.MON . .  Monochrome version of demonstration

                   The  file SB_CAP is a screen that shows some of the
                   capabilities of Screen  Builder.   If  you  have  a
                   color display, load SB_CAP.CLR into Screen Builder.
                   Otherwise,  use  SB_CAP.MON.  This file is not used
                   for anything else,  so  you  can  delete  it  after
                   you're finished looking at it.

                   The  files  MONO.BIN  and  COLOR.BIN are the Screen
                   Builder's opening screen.  If you are short of disk
                   space, you can delete them as well,  since  SB  has
                   its own simpler internal opening screen.  Note that
                   Screen Builder designed its own opening screen.

                   The  files  ASCII.CLR  and   ASCII.MON   are   used
                   internally by Screen Builder to display when a user
                   access the ASCII Chart function of the program.  Do
                   not delete these files.











                                                                page 3




         Screen Builder's Qualifications
         -------------------------------------------------------------

                   This section will briefly describe Screen Builder's
                   capabilities, what it is, and a bit of trivia about
                   it.

                   Screen Builder is an interactive screen editor that
                   allows  you  to  create  multi-color   ASCII   text
                   screens.   You  have  access to all 25 lines of the
                   display   for   your   screens,   all   256   color
                   combinations  (for color monitors), and most of the
                   ASCII drawing characters. Once created, the screens
                   can be used in any BASIC program  using  the  QBSCR
                   Screen Routines PutScreen and BuildScreen.

                   The   Screen  Builder  can  perform  several  block
                   operations, including move,  multiple  copy,  color
                   change,  delete,  box  draw,  character  fill,  and
                   search and replace.

                   Screen  Builder  can also save your screens as ANSI
                   codes or as text Only.

                   Screen   Builder  has  an  extensive  on-line  help
                   facility that should get you through most  anything
                   you  need to accomplish.  It's easy to use and very
                   informative.

                   There are a few other goodies, like Jump to DOS and
                   an  ASCII  table  reference  chart,  that  will  be
                   covered in more detail later.

                   Screen Builder was written using QuickBASIC 4.5 and
                   the  QBSCR  Screen  Routines.   One routine used to
                   check for the existence of a file on disk came from
                   a marvelous book entitled "The Microsoft QuickBASIC
                   Programmer's  Toolbox"  and   is   available   from
                   Microsoft  Press.   If  you  think QBSCR is good (I
                   don't know if you do), then try this  book.   QBSCR
                   is  cheaper,  though, and you don't have to type in
                   everything.












                                                                page 4




         Starting Screen Builder
         -------------------------------------------------------------

                   Screen  Builder  is  pretty  simple  to  use,   and
                   starting the program is no exception.  To start the
                   program, make sure the files SB.EXE, ASCII.CLR  and
                   ASCII.MON  are  in  the  same place (i.e., the same
                   drive and subdirectory), and  enter  the  following
                   command:

                                           SB

                   followed  by the ENTER key.  Screen Builder will be
                   on it's way.  You'll see  an  introductory  screen,
                   and  then  after  hitting a key to clear it, you'll
                   get a preliminary window of information.

                   This  window  contains   some   information   about
                   accessing  a  few  of  the  primary  Screen Builder
                   functions.  The reason it comes up before you start
                   is that once you hit a key  to  clear  the  window,
                   you'll be faced with a blank screen.  Nothing but a
                   cursor will be there.  The preliminary window tells
                   you  how  to  get help and a few other items before
                   the screen goes blank on you.

                   Once this window is gone, you're on your own.   The
                   blank  screen  is your editing area, where you will
                   be creating your screens.  At this  point  you  may
                   begin editing.  Basic editing commands will covered
                   shortly in this manual.

                   If you want to have Screen Builder load a file when
                   you  start  it,  you can follow the SB command with
                   the name of a Screen Builder generated screen file.
                   For example, the command

                                     SB MYSCREEN.CLR

                   would start Screen Builder, and then  automatically
                   load the file called MYSCREEN.CLR.  If the file did
                   not   exist,   Screen  Builder  would  simply  load
                   normally.











                                                                page 5




         Getting Help
         -------------------------------------------------------------

                   Screen  Builder  is  equipped  with an capable help
                   facility.  To get help from the edit  screen,  hold
                   down the Alt key and press H (referred to as Alt-H).
                   A screen of information with a menu will appear.

                   NOTE: If you pressed Alt-H while you were editing a
                   screen,  and  the  help window appeared over top of
                   your work-in-progress,  fear  not!   Your  work  is
                   still there, and will return once you exit help.

                   The  menu  in  the  center of the screen contains a
                   list of help topics.   Choose  the  topic  that  is
                   closest  to the area in which you require help.  To
                   choose a topic, use the up and down arrow keys,  or
                   the  PgUp or PgDn keys to move the selection bar to
                   the topic of your choice.  Alternately,  you  could
                   type   the   single   highlighted  letter  that  is
                   associated with the topic  of  your  choice.   Note
                   that   this  menu  was  generated  with  the  QBSCR
                   MakeMenu function.

                   Once  your  selection has been made, some help text
                   will replace the menu.  In the upper  right  corner
                   of the screen, you will see an indicator that tells
                   how  many  pages  there are to this help topic.  If
                   there is more than one, you can move from  page  to
                   page  using  the  PgUp and PgDn keys.  Use the Home
                   and End keys to move to the first or last page.

                   You may also obtain help from the menu.  To get the
                   menu,  hit  the  ESC  key.  Select the Help menu by
                   hitting the H key.  Once  the  Help  menu  appears,
                   select  the  Help  topic  of your choice.  When you
                   have   finished   reading   your   selected    Help
                   information,  you  will  be  returned to the Screen
                   Builder edit screen.

                   To return to the help menu, hit the ESC  key.   The
                   menu will dutifully return.  If you need more help,
                   simply  choose  another topic.  If you are finished
                   with help and would like to return  to  your  work,
                   you can either select Quit from the menu or hit the
                   ESC  key.   Both  operations will return you to the
                   edit screen.







                                                                page 6




         Basic Editing
         -------------------------------------------------------------

                   Screen  Builder's  editing  works  very much like a
                   standard word processor.   You  can  type  normally
                   text will appear on the screen.  The cursor is your
                   key  to  where  that text will be placed.  Move the
                   cursor to the spot you want you  text  to  be,  and
                   type it.  The cursor movement keys are as follows:

                   Cursor Movement...                        ...key(s)
                   ---------------------------------------------------
                   Character right . . . . . . . . . . . . Right arrow
                   Character left  . . . . . . . . . . . .  Left arrow
                   One line up . . . . . . . . . . . . . . .  Up arrow
                   One line down . . . . . . . . . . . . .  Down arrow
                   Word right  . . . . . . . . . .  Ctrl + Right arrow
                   Word left . . . . . . . . . . . . Ctrl + Left arrow
                   End of line . . . . . . . . . . . . . . . . . . End
                   Beginning of line . . . . . . . . . . . . . .  Home
                   Top of screen . . . . . . . . . . . . . . . .  PgUp
                   Bottom of screen  . . . . . . . . . . . . . .  PgDn

                   While typing, you can  be  in  either  overtype  or
                   insert  mode.   In overtype mode, anything you type
                   will replace what you type over top of.  In  insert
                   mode,  text  to  the  right  of  the cursor will be
                   pushed right to make room for the  new  characters.
                   Note  that  in insert mode, if characters are moved
                   off the end of the screen, they are gone and cannot
                   be recovered.  You can tell what mode you are in by
                   looking at  the  cursor.   In  overtype  mode,  the
                   cursor  is  a  large  block.   In  insert mode, the
                   cursor  is  a   normal   underscore.    On   slower
                   computers,  working  in  overtype  mode  will speed
                   typing response considerably.


















                                                                page 7




         Using the Menu
         -------------------------------------------------------------

                   Screen  Builder  is  equipped with a menu interface
                   that provides access to all the  functions  of  the
                   program.   By  using  the  menu,  you don't have to
                   know all the keyboard commands while you are new to
                   Screen Builder.  Since the  menu  is  optional  and
                   every command has a keyboard alternate, you can use
                   the  keyboard  commands as you become familiar with
                   Screen Builder.

                   To access the menu, press the ESC key while at  the
                   edit  screen.   The  top  line  of the display will
                   become a horizontal list of menu topics.  They  are
                   File,  Graphics,  Color,  Block, Miscellaneous, and
                   Help.  Notice  that  the  first   one,   File,   is
                   highlighted.  You  can  move  this highlight to the
                   specific menu you need using the following keys:

                   Highlight Movement...                     ...Key(s)
                   ---------------------------------------------------
                   One Menu Title Right . . . . . . . . .  Right Arrow
                   One Menu Title Left  . . . . . . . . . . Left Arrow
                   Last Menu Title  . . . . . . . . . . . . . . .  End
                   First Menu Title . . . . . . . . . . . . . . . Home

                   Once  the  highlight is on the menu title you want,
                   hit either the down arrow or  ENTER  to  get  (  or
                   "pull  down")  the menu. It will drop down from its
                   title.  Once the menu is displayed, you  can  still
                   select  other  menus  by  using  the left and right
                   arrow keys to move.

                   Now that you see your menu, you can select the menu
                   command you want by moving the highlight to it  and
                   pressing   ENTER.    The  following  movements  are
                   allowed in the menu:

                   Menu Highlight Movement...                ...Key(s)
                   ---------------------------------------------------
                   Down One Entry . . . . . . . . . . . . . Down Arrow
                   Up One Entry . . . . . . . . . . . . . . . Up Arrow
                   First Entry  . . . . . . . . . . . . . . Home, PgUp
                   Last Entry . . . . . . . . . . . . . . .  End, PgDn

                   To  select  a  menu  entry   without   moving   the
                   highlight,  you  can press the single letter within
                   your  chosen  entry  that  is  highlighted.    This
                   letter,  called  the "Quick Access" key, will cause
                   the command to be executed immediately when  it  is
                   pressed.   You  do  not  need to follow it with the
                   ENTER key.

                                                                page 8




         Saving Your Work
         -------------------------------------------------------------

                   At  any  point during your editing session, you can
                   save your work.  In fact, it's a good idea to  save
                   it  every  five minutes or so, to prevent accidents
                   from  plundering  your  time  investment  in   your
                   screen.

                   Fortunately, saving a screen with Screen Builder is
                   a  simple  matter.  Once you are ready to save your
                   work, you can either choose the save function  from
                   the  File menu or hit the Alt-S key combination.  A
                   window will appear in  the  middle  of  the  screen
                   asking you to fill in the file name for the screen.
                   If you have previously filled in a name during this
                   session  of  Screen Builder, that same name will be
                   filled in for you.  While entering a name, you  can
                   use the following editing keys:

                   Edit function...                          ...Key(s)
                   ---------------------------------------------------
                   Move character left . . . . . . . . . .  Left Arrow
                   Move character right  . . . . . . . . . Right Arrow
                   Move to end of line . . . . . . . . . . . . . . End
                   Move to beginning of line . . . . . . . . . .  Home
                   Delete at cursor  . . . . . . . . . . . . . . . Del
                   Delete to left of cursor  . . . . . . . . Backspace
                   Erase current entry and start over  . . .  Ctrl + Y
                   Toggle INSERT mode  . . . . . . . . . . . . . . INS

                   Once the name is correct, whether you had to change
                   anything  or  not, hit ENTER to have Screen Builder
                   accept it.  Screen Builder will then check the disk
                   to see if the file exists already.  If it  does,  a
                   small window will appear informing you of this, and
                   asks if it's OK to overwrite the existing file with
                   the  new  information.   If this is OK, press the Y
                   key, and the old  file  will  be  overwritten.   If
                   not,  hit  anything  else,  and  the  save  will be
                   aborted.

                   Once you are past the file name entry  window,  you
                   have  one  more  decision  to make.  Screen Builder
                   will save your files  in  any  of  three  different
                   formats.  They are, in the order they appear on the
                   menu,

                                1. BuildScreen / BSAVE
                                2. ANSI
                                3. Text Only (No Colors)



                                                                page 9




                   BuildScreen  / BSAVE mode is the most commonly used
                   format.  This is the format you will save your file
                   in if you want to use it with the QBSCR BuildScreen
                   and  PutScreen  routines.   There   is   one   more
                   important  note about this save format, and here it
                   is:

                        -----------------------------------------
                        ALWAYS save a copy of your screens  using
                        the  BuildScreen / BSAVE format!  This is
                        the ONLY format that Screen Builder  will
                        load  into its editor!  Save ANSI or TEXT
                        ONLY after you have saved a copy under  a
                        different  name  using  the BuildScreen /
                        BSAVE mode!  If you don't, you  will  not
                        be  able  to  edit the screen again using
                        Screen Builder.
                        -----------------------------------------

                   The ANSI save format will save your screen as  text
                   with  colors saved as well, as embedded ANSI escape
                   codes.  This will allow you to  TYPE  your  screens
                   from  DOS  and  see them in full color.  It is also
                   useful if you want to use them on a  BBS  (Bulletin
                   Board  System).  Note that if you want to TYPE ANSI
                   sceens at DOS, you must have  the  ANSI.SYS  device
                   driver loaded.  See Appendix A of this document for
                   more info on the ANSI.SYS driver.

                   The TEXT ONLY format will save  the  text  of  your
                   screen,  but no colors.  This is useful if you want
                   to load your screen into a plain text editor, merge
                   it into a document, or print it.

                   In any case, you will be  presented  with  a  small
                   menu  from  which you must select one of these save
                   formats.  Move the highlight bar to  the  selection
                   of  your  choice  and  hit  Enter, or hit the Quick
                   Access key associated with the  selection  of  your
                   choice.

                   If you selected the BuildScreen / BSAVE format, the
                   file will saved  immediately,  taking  one  or  two
                   seconds to do so.

                   If you selected the ANSI or TEXT ONLY  format,  you
                   have  one  more  wicket  to step through.  You must
                   tell Screen Builder how many lines of  the  display
                   (starting  with  line 1) you want to save.  This is
                   because, if you type a screen at DOS, you  will  be
                   limited  to  23 of the 25 display lines if you want



                                                               page 10




                   to see the  whole  screen.   When  the  DOS  prompt
                   appears  after  TYPEing  the screen, it scrolls the
                   top two lines off the screen.  You might also  only
                   have  a 5 line picture.  Whatever the case, you may
                   enter a number from 1 to 25, followed by the  Enter
                   key.   The  save  will  proceed  then, taking a few
                   seconds at most to complete.

                   You can abort the  Save  process  at  any  time  by
                   pressing the ESC key.












































                                                               page 11




         Reloading Your Saved Work
         -------------------------------------------------------------

                   You  can  load a previously save screen into Screen
                   Builder at any time during your editing session  by
                   selecting  the Load function from the File menu, or
                   by pressing the Alt-L key combination.   Once  this
                   is  done,  a small window will appear in the middle
                   of the screen asking you to enter the name  of  the
                   file  containing  the  screen  you  want  to  load.
                   During  entry  of  the  file  name,  the  following
                   editing keys are available:

                   Edit function...                          ...Key(s)
                   ---------------------------------------------------
                   Move character left . . . . . . . . . .  Left Arrow
                   Move character right  . . . . . . . . . Right Arrow
                   Move to end of line . . . . . . . . . . . . . . End
                   Move to beginning of line . . . . . . . . . .  Home
                   Delete at cursor  . . . . . . . . . . . . . . . Del
                   Delete to left of cursor  . . . . . . . . Backspace
                   Erase current entry and start over  . . .  Ctrl + Y
                   Toggle INSERT mode  . . . . . . . . . . . . . . INS

                   When you finish typing  the  filename,  hit  ENTER.
                   Screen   Builder  then  checks  the  disk  for  the
                   existence of the file you  entered.   If  the  file
                   exists,  it will be loaded.  If it does not, Screen
                   Builder will tell you this and wait for you to  hit
                   a key.  The function will terminate when you do so.
                   Hit  Alt-S  to  try  again, or select Load form the
                   File menu.

                   Note  that when Screen Builder loads a file, it may
                   take from 5 seconds to about 45 seconds to  do  so,
                   depending  on  the speed of your machine.  Although
                   the file will be visible on the screen, there  will
                   be  no cursor and you won't be able to do anything.
                   You will know when it is finished when  the  cursor
                   appears  in  the  upper-left  corner of the screen.
                   What Screen Builder  is  doing  all  that  time  is
                   constructing  an  internal  representation  of your
                   picture, including characters and  colors.   Please
                   be patient.

                   Once the cursor appears, you may begin editing your
                   screen.







                                                               page 12




         Entering Extended ASCII Characters
         -------------------------------------------------------------

                   If  you  have  read  this far in the Screen Builder
                   documentation, you surely  have  some  interest  in
                   making  your  programs  look good.  You'll probably
                   want to use windows, boxes,  draw  lines,  and  use
                   other  special  effects.   Many  of  these  can  be
                   accomplished by using the extended ASCII characters
                   that lie beyond the normal keyboard characters.

                   To enter a special ASCII character,  you  have  two
                   options.   The  first  and  easiest  is  to use the
                   Screen Builder's ASCII character facility.

                   Screen Builder uses  the  function  keys  to  enter
                   special  characters  like  box  drawing characters.
                   Since there are only ten function  keys  available,
                   and  many  more  special characters than that, they
                   have been organized into  logically  related  sets.
                   Each  set  contains  ten  extended ASCII characters
                   (one for each function key).  To see the characters
                   currently assigned to the function  keys  (i.e., to
                   see  which  set  is  active),  select  the Reminder
                   function from the Graphics menu, or hit  the  Alt-R
                   key  combination.   A small window will appear that
                   shows  which  set  number  is  active,  and   which
                   characters are currently assigned to which function
                   keys.   Once you have determined which key you need
                   to use to display the character you want,  you  can
                   hit  any  key to remove the small window.  To enter
                   the special character of your choice at the current
                   cursor  location,  simply   hit   the   appropriate
                   function key.

                   The  second  method  of  entering an extended ASCII
                   character is to enter it manually  by  way  of  its
                   ASCII  code.   You  might  want to do this to get a
                   character that is not in  one  of  the  ten  Screen
                   Builder character sets.  To determine a character's
                   code,  select  the  ASCII  Chart  function from the
                   Miscellaneous  menu,   or   hit   the   Alt-A   key
                   combination.   A  chart  will appear that lists all
                   the ASCII codes  for  the  characters  that  Screen
                   Builder  can  display.  Find the character you want
                   to use and obtain its three-digit number.  Hit  any
                   key  to  make the ASCII Chart disappear.  Now, with
                   the cursor at the location on the screen  you  want
                   the  character, hold down the Alt key, and while it
                   is held down type in the three digit code  for  the
                   character  you selected.  The three-digit code MUST



                                                               page 13




                   be entered on the numeric keypad on the right  side
                   of  the  keyboard  for this to work.  If you try to
                   use the number keys along the top of the  keyboard,
                   it will not work.

                   Suppose  the  character you want to enter is not in
                   the currently active special  character  set?   You
                   can  follow  the above procedure, or you can change
                   to another character set that does have it.   There
                   are ten sets of ten extended ASCII characters each.
                   To  select  a  different  set,  choose  the  Change
                   Character Set from the Graphics menu,  or  hit  the
                   Alt-G  key  combination.  A window will appear that
                   displays   instructions,   the   currently   active
                   character  set, and will also show all the possible
                   sets and the characters in them.  Note  that  there
                   is  a  pointer  that points to the currently active
                   set.  To change sets, simply use the  up  and  down
                   arrow  keys to move the pointer to the set you want
                   to use.  You can then hit the ENTER key  to  accept
                   this  change,  or the ESC key to abort it and leave
                   the old character set  still  active.   The  window
                   will then disappear.

                   There  is  also  a  keyboard  shortcut for changing
                   character sets.  If you know what character set you
                   ant, hold down the CTRL key and press the function
                   key that is numbered the same as the character  set
                   you  want  to use.  For example, if you want to use
                   the third character set, you would hit the  Ctrl-F3
                   key   combination.   Nothing  will  happen  on  the
                   screen, but the character set you selected will  be
                   active.   You  can verify this by hitting the Alt-R
                   key combination to see a reminder window.

                   The following table summarizes  the  keys  used  to
                   change and enter extended ASCII characters:

                   Action...                                 ...Key(s)
                   ---------------------------------------------------
                   Enter an extended ASCII character
                      from the currently active set . . . . . F1 - F10
                   Change the currently active set  . . . . . .  Alt-G
                   See a reminder of the
                      currently active set  . . . . . . . . . .  Alt-R









                                                               page 14




         Changing Colors
         -------------------------------------------------------------

                   When  you add text to the screen you are designing,
                   it will always be displayed in the currently active
                   colors (foreground and background).  If you need to
                   place text of a different color, the active  colors
                   must be changed.

                   To  change  the  active  colors, you can select the
                   Change Colors option from the Colors menu,  or  hit
                   the  Alt-C  key  combination.   This  will  cause a
                   window to be displayed in the middle of the screen.
                   On the left side of the window  are  a  few  simple
                   instructions.   On  the  right  side  is  the color
                   matrix.

                   The  color  matrix  is a matrix of all the possible
                   foreground and background color combinations.   You
                   will  also  see a small box somewhere in the matrix
                   (inside the box will be the active colors),  and  a
                   status  line at the bottom indicating the currently
                   selected colors (represented  as  the  value  BASIC
                   needs to represent those colors).

                   To   select   a   new  foreground/background  color
                   combination,  move  the  small  selector box to the
                   color combination you want to use.   The  following
                   keys move the box:

                   Selector Box Movement...                  ...Key(s)
                   ---------------------------------------------------
                   One space right . . . . . . . . . . . . Right arrow
                   One space left  . . . . . . . . . . . .  Left arrow
                   End of current row  . . . . . . . . . . . . . . End
                   Beginning of current row  . . . . . . . . . .  Home
                   Bottom of current column  . . . . . . . . . .  PgDn
                   Top of current column . . . . . . . . . . . .  PgUp

                   Note  also  that  if the box  reaches  the  end  or
                   beginning of a line or column, subsequent movements
                   will wrap to the other side.

                   Once  you  have  the  colors you need selected, hit
                   ENTER to accept the change and  clear  the  window.
                   If  you  decide  you don't like the colors you have
                   selected,  hit  the  ESC  key   and   window   will
                   disappear, leaving the original colors active.

                   Any text entered after the colors have been changed
                   will then be displayed in those new colors.



                                                               page 15




         Block Operations
         -------------------------------------------------------------

                   Block  Operations are Screen Builder functions that
                   are performed on a selected rectangular portion  of
                   the screen.  The selected area can be as small as a
                   single  character  cell,  or  as large as the whole
                   screen.

                   There  are  several  steps  to  performing  a block
                   operation.  The general idea is to

                        1. Mark the block by defining its upper
                           left and lower right corners

                        2. Performing the selected operation on
                           the block just marked.

                   There are two ways  to  perform  block  operations.
                   You  can  use the menu, or you can use the keyboard
                   shortcut.  Both are detailed below.

                   Method 1: The MENU
                   ---------------------------------------------------
                   To  perform  a  block operation using the menu, you
                   would first hit the ESC key to bring up  the  menu.
                   Choose the Block menu.  Once it appears, you select
                   the particular block operation you want to perform.
                   The  menu  will  then  disappear  and a window that
                   explains how to mark a block will replace it.  Read
                   through the instructions if you don't remember  how
                   to  mark  a  block.   When finished, hit any key to
                   clear the window.  Now the  marking  of  the  block
                   begins.   Move  the cursor to the upper-left corner
                   of the block and hit ENTER.  Now move the cursor to
                   the lower-right corner of the block and hit  ENTER.
                   Whatever block operation you selected from the menu
                   will then be immediately executed.

                   Method 2: The KEYBOARD SHORTCUT
                   ---------------------------------------------------
                   Begin this method of a block operation  by  hitting
                   the  Alt-B key combination.  A window that explains
                   how to mark a block will appear.  Read through  the
                   instructions  if  you  don't remember how to mark a
                   block.  When finished, hit any  key  to  clear  the
                   window.  Now the marking of the block begins.  Move
                   the  cursor  to  the upper-left corner of the block
                   and  hit  ENTER.   Now  move  the  cursor  to   the
                   lower-right  corner of the block and hit ENTER.  At
                   this point a single menu will appear in the  center



                                                               page 16




                   of  the  screen  asking  you  to choose which block
                   operation  you  would  like   performed   on   your
                   currently marked block.  Select one of the choices,
                   and it will then be immediately executed.

                   The Block Operations Themselves
                   ---------------------------------------------------
                   The  following  block  operations  are  provided by
                   Screen Builder:

                        - Move a block
                        - Copy a block (multiple times)
                        - Delete a block
                        - Make a box in the marked area (single or
                                double lined box)
                        - Fill a block with a specific character
                        - Change the colors of a block
                        - Replace occurrences of a character
                        - Replace occurrences of a character and the
                          colors at the same time

                   Each  will  be  detailed  in  its own section.  The
                   instructions for  each  block  operation  will  not
                   include  marking  a block, which is detailed above.
                   It will be assumed in the following  sections  that
                   the user knows how to mark a block.


                   MOVE a Block
                   ---------------------------------------------------
                   Once  your  block  is  marked  and  the  MOVE block
                   operation  has  been  selected,  you  may  use  the
                   following  keys to move the marked block around the
                   screen:

                       Block movement...                 ...Key(s)
                       -------------------------------------------
                       Up one screen row . . . . . . . .  Up arrow
                       Down one screen row . . . . . .  Down arrow
                       Right one screen column . . . . Right arrow
                       Left one screen column  . . . .  Left arrow
                       Top of screen . . . . . . . . . . . .  PgUp
                       Bottom of screen  . . . . . . . . . .  PgDn
                       Right side of screen  . . . . . . . . . End
                       Left side of screen . . . . . . . . .  Home

                   Once you have the block where you want it, hit  the
                   ENTER  key.   If you decide you do not want to move
                   the block after all, and want it  returned  to  its
                   original position, then hit the ESC key.




                                                               page 17




                   COPY a Block
                   ---------------------------------------------------
                   Once  your  block  is  marked  and  the  COPY block
                   operation  has  been  selected,  you  may  use  the
                   following  keys to move the marked block around the
                   screen:

                       Block movement...                 ...Key(s)
                       -------------------------------------------
                       Up one screen row . . . . . . . .  Up arrow
                       Down one screen row . . . . . .  Down arrow
                       Right one screen column . . . . Right arrow
                       Left one screen column  . . . .  Left arrow
                       Top of screen . . . . . . . . . . . .  PgUp
                       Bottom of screen  . . . . . . . . . .  PgDn
                       Right side of screen  . . . . . . . . . End
                       Left side of screen . . . . . . . . .  Home

                   If  only want to make one copy of the marked block,
                   then hit the ENTER key once  the  marked  block  is
                   where  you  want  it.   If you want to make several
                   copies, hit the SPACEBAR to leave  a  copy  in  the
                   current  position.   You  will then be able to move
                   another block  to  another  location.   Repeat  the
                   operation,  hitting  the  SPACEBAR  to leave a copy
                   on the screen, until you are  ready  to  place  the
                   last copy.  For the last copy, hit the ENTER key.

                   If  you  decide you want to abort the copy process,
                   you can hit the ESC key.  Note that this will  only
                   abort   the  CURRENT  copy  you  are  making.   Any
                   previous copies will still remain on the screen.


                   DELETE a Block
                   ---------------------------------------------------
                   Once your block is marked and the DELETE  operation
                   has  been  selected,  the  area of the marked block
                   will be erased.  This means that all characters  in
                   the  block  will  be  replaced with spaces, and the
                   colors will be  reset  to  white  on  black  (BASIC
                   colors 7 and 0).


                   Make a SINGLE Lined Box
                   ---------------------------------------------------
                   Once  you  have  marked your block and selected the
                   SINGLE BOX block operation, the are of  the  marked
                   block will be overwritten with a box constructed of
                   single-line  ASCII box drawing characters.  The box
                   will be filled with spaces, and will  be  drawn  in
                   the currently active colors.


                                                               page 18




                   Make a DOUBLE Lined Box
                   ---------------------------------------------------
                   Once  you  have  marked your block and selected the
                   DOUBLE BOX block operation, the area of the  marked
                   block will be overwritten with a box constructed of
                   double-line  ASCII box drawing characters.  The box
                   will be filled with spaces, and will  be  drawn  in
                   the currently active colors.


                   CHARACTER FILL a Block
                   ---------------------------------------------------
                   Once  you  have  marked your block and selected the
                   CHARACTER FILL block operation, a small window will
                   appear in the center of the screen.  In this window
                   you will enter the single character that  you  want
                   the area of marked block to be filled with.  If the
                   character   cannot  be  entered  using  the  normal
                   keyboard keys, you can enter any character  in  the
                   ASCII  set by holding down the Alt key and entering
                   the character's 3-digit ASCII code on  the  numeric
                   keypad.   See the section titled "Entering Extended
                   ASCII Characters"  for  more  information  on  this
                   topic.

                   After  the  character  has been entered (you do not
                   need to hit ENTER), the area of the screen  in  the
                   marked block will be overwritten with the character
                   specified.   The  characters  will be written using
                   the currently active colors.


                   CHANGE COLORS of a Block
                   ---------------------------------------------------
                   Once you have marked your block  and  selected  the
                   CHANGE  COLORS  operation,  the  area of the marked
                   block will have its colors immediately  changed  to
                   the  currently  active  colors.  Remember to change
                   the active colors to those you want your  block  to
                   be before you begin this block operation.


                   REPLACE A CHARACTER
                   ---------------------------------------------------
                   This operation allows you to replace all occurences
                   of  one  character with those of another character.
                   The colors of the character are left alone  as  the
                   change  is  made.   Once  a  block has been marked,
                   select the Replace operation.  A window will appear
                   in  which  you  will  enter  the  character  to  be
                   replaced, followed by the character  to  replace it



                                                               page 19




                   with.  You do not need to hit Enter after the entry
                   of   each   character.   Once  the  characters  are
                   entered, the replacement will be made.


                   REPLACE A CHARACTER WITH COLORS
                   ---------------------------------------------------
                   This operation  is  much  like  the  above  replace
                   operation,  except  that the colors of the replaced
                   characters are changed as the replace occurs.  Once
                   a block has been  marked,  select  the  Replace  w/
                   Colors  option.   You will then enter the character
                   to be replaced, followed by the character  it  will
                   be  replaced  with.   You  do not need to hit enter
                   after  each  character.   Once  the  characters are
                   entered, the replacement will be made, changing the
                   colors of the characters to  the  currently  active
                   colors  as  the  replace occurs.  Make sure you set
                   the active colors to the ones you want before using
                   this block operation.


































                                                               page 20




         Extras
         -------------------------------------------------------------

                   The  features  of  Screen Builder described in this
                   section are those that don't fit  well  into  other
                   categories, and are called simply extras.

                   Each  of  the  three functions will be described on
                   their own page to keep things as clear as possible.
                   If you prefer to skip this section, feel free to do
                   so.  The functions described here are not necessary
                   for designing screens.










































                                                               page 21




                   Extras - The ASCII Chart
                   ---------------------------------------------------

                   While you are sitting  at  the  editing  screen  of
                   Screen Builder, you can call up an ASCII chart that
                   displays  all  the  characters  available in Screen
                   Builder and their respective ASCII codes.

                   To see the ASCII Chart,  either  select  the  ASCII
                   Chart  option  from  the Miscellaneous menu, or hit
                   the Alt-A key combination.  The  screen  will  fill
                   with  an  ASCII  Chart  for  your viewing pleasure.
                   When you have finished looking at  the  chart,  hit
                   any  key  to  make  it disappear and return to your
                   screen.

                   Note that for this function  to  operate  properly,
                   the file ASCII.CLR (or ASCII.MON if you are using a
                   monochrome monitor) must be on the drive and in the
                   same subdirectory as Screen Builder.  Otherwise you
                   will only succeed in viewing Screen Builder's error
                   handler.

                   Screen Builder was used to create the ASCII  charts
                   used in this function.





























                                                               page 22




                   Extras - Disk Directory
                   ---------------------------------------------------

                   While you are editing a display with Screen Builder
                   you  may  have the need to check the disk directory
                   for whatever reason.  This capability  is  provided
                   within Screen Builder.

                   To   see   a  disk  directory,  either  choose  the
                   Directory option from the File  menu,  or  hit  the
                   Alt-D  key combination.  A small window will appear
                   and ask for a file spec.  Here you type in the name
                   of the file you want to look  for.   Wildcards  are
                   supported,  and the default of *.* (all files) will
                   be filled in for you automatically.  If you want  a
                   different file spec, simply delete *.* or type over
                   it.

                   Once  you hit ENTER and your file spec is accepted,
                   Screen Builder will display a larger window  filled
                   with file names.  If there are more file names than
                   will  fit in the window, Screen Builder will pause,
                   waiting for you to hit  a  key  to  see  more  file
                   names.   At  any time during the operation, you may
                   hit the ESC key to abort the operation  and  return
                   to editing.




























                                                               page 23




                   Extras - Jump To DOS
                   ---------------------------------------------------

                   Should  you  have  the  need to exit to DOS at some
                   point during the operation of Screen  Builder,  you
                   are will find it easy to do so.

                   To go to DOS temporarily, either choose the Jump To
                   DOS  option from the Miscellaneous menu, or hit the
                   Alt-J key combination.  The screen will  clear  and
                   you  will see your normal DOS prompt.  You may then
                   perform any normal DOS operation.  Note that Screen
                   Builder and your display are still in  memory,  and
                   you  may  not have enough RAM to run large programs
                   while at DOS via this function.

                   When you are finished with  whatever  business  you
                   and DOS had to do, you can return to Screen Builder
                   and your work by typing

                                          EXIT

                   at  the  DOS  prompt  and  hitting  ENTER.   Screen
                   Builder will instantly return, exactly as you  left
                   it.





























                                                               page 24




         Techniques and Hints
         -------------------------------------------------------------

                   This  section  is  here  to  clue you in on the few
                   aspects of Screen Builder that may not be  obvious,
                   as  well  as  to impart a few tricks.  They are not
                   necessarily related, so they will be presented pell
                   mell.

                   - When loading a screen into  Screen  Builder,  the
                     program  has  to build an internal representation
                     of your screen.  This will cause a delay from the
                     time the screen shows up  to  the  time  you  can
                     actually  do  something.  The delay may be from 1
                     second to 45 seconds, roughly, depending  on  the
                     speed  of your machine.  Please be patient during
                     this part of Screen Builder's operation.  And no,
                     your machine is not locked up.  The best  way  to
                     tell  when  the program is ready for you to begin
                     is to watch for the appearance of the  cursor  in
                     the upper left corner of the screen.

                   - Make  frequent use of the block operations.  They
                     are the real power behind Screen  Builder.   With
                     them   you  can  do  many  things  quickly.   For
                     instance, you can create large block letters with
                     the extended ASCII characters, and then copy them
                     if you need a second  occurrence  of  one already
                     drawn.

                   - If  you  are performing a Replace w/Colors  block
                     operation, and you forgot to change the colors to
                     the ones you wanted first, simply set the  colors
                     to  those you want, perform the same operation on
                     the same block, and  replace  the  new  character
                     with  itself.  This will change the colors of the
                     replaced characters only.

                   - That's  all  to  this  section  for  right   now.
                     Perhaps there will be more  after  feedback  from
                     users comes in.













                                                               page 25




         Using Your Screens
         -------------------------------------------------------------

                   Once  you  have  designed your screens, you can use
                   them  easily  in  your  programs.   There  are  two
                   methods for doing this.

                   The  first is by using the QBSCR PutScreen routine.
                   This routine will retrieve a  file  from  disk  and
                   display  it  on  the  screen very quickly.  Issue a
                   single statement with the name of  the  file  as  a
                   parameter:

                                PutScreen "MYSCREEN.CLR"

                   And  that's  it.  The second method is for creating
                   special effects.  By using  the  QBSCR  BuildScreen
                   routine,   you   can   implement  wipes  and  other
                   interesting placement effects.  See the REF or DEMO
                   program included for examples.  The call is  almost
                   as  easy as PutScreen.  The only extra parameter is
                   the type of effect you want, a value from 0  to  15
                   inclusive:

                             BuildScreen "MYSCREEN.CLR", 15

                   Try it just to see what you can do with it.

                   For  more  details on these routines, see the QBSCR
                   Screen Routines documentation.
























                                                               page 26




         Closing Notes
         -------------------------------------------------------------

                   Thanks for giving the QBSCR Screen Routines as well
                   as  Screen  Builder  a  shot.   Hopefully they will
                   provide you with some utility.   If  you  have  any
                   questions  about these or any BAD SOFTWARE product,
                   you can reach me at the following address:

                                       Tony Martin
                                 1611 Harvest Green Ct.
                                    Reston, VA 22094

                   I'll do my best to answer all correspondence.

                   If you would like  to  register  the  QBSCR  Screen
                   Routines  and  Screen Builder, you can fill out and
                   mail in the order form at  the  end  of  the  QBSCR
                   Screen  Routines  documentation, along with a check
                   for $15.00 made payable to Tony Martin.   You  will
                   receive  an  official disk set as well as a copy of
                   the LASER II graphics entertainment  program.   See
                   the back of that document for more details.































                                                               page 27




         Appendix A - The ANSI.SYS Device Driver
         -------------------------------------------------------------

                   The  ANSI.SYS  Device  Driver is a file provided to
                   you with DOS.  It interprets  escape  codes  (codes
                   preceded  by  the  escape  character)  into colors,
                   cursor  movements,  and  keyboard  macros.   Screen
                   Builder only deals with the color codes.

                   For  the Screen Builder's ANSI-generated screens to
                   show up properly on your screen (outside of  Screen
                   Builder,  that  is),  you need to have the ANSI.SYS
                   device driver loaded.  Just to have it on your disk
                   is not enough.  Here's how you do it.

                   Locate  the  file  ANSI.SYS.   If you have a floppy
                   system, it should be on your  boot  disk.   If  you
                   have  a  hard disk, it can be in the root directory
                   or  a  subdirectory.   Placing  it  in   the   root
                   directory makes installation easier.  Once you have
                   located  the  file,  make a note of its location on
                   disk.  If it is not on your boot disk, then copy it
                   there.

                   The next step is to locate  your  CONFIG.SYS  file.
                   It  will be in the root directory of your boot disk
                   (or hard disk).  If you do not have  one,  we  will
                   create it.  Get a hold of a purely ASCII editor, or
                   one  that saves as ASCII only.  Load the CONFIG.SYS
                   file into it (or create it if it  did  not  exist).
                   Add this line to the file:

                                    DEVICE = ANSI.SYS

                   This  assumes  it is in your root directory.  If it
                   is not, add the drive/path before ANSI.SYS, as in:

                                DEVICE = C:\DOS\ANSI.SYS

                   Save the file as text only - no formatting codes of
                   any kind.  If  you  use  Microsoft  Word  5.0,  for
                   example,  you  would save it as Text Only with Line
                   Breaks.

                   Now reboot your machine.  When booting is complete,
                   ANSI.SYS will be  loaded.   If,  when  the  machine
                   boots, you receive a message that says

                                 Bad or missing ANSI.SYS

                   then  the file could not be found as entered in the
                   CONFIG.SYS file.  Check it again and make  sure  it
                   reads as it should.

                                                               page 28



```
{% endraw %}

## SHOW.DOC

{% raw %}
```






                                    S H O W


                           A Screen Builder Utility


          Program and Documentation Copyright (c) 1990 by Tony Martin
                   1611 Harvest Green Ct.  Reston, VA  22094




    -----------------------------------------------------------------------


    SHOW  is  a  quick  utility  included  for the convenience of the QBSCR
    programmer.  Show will quickly display any Screen Builder  screen  file
    on your monitor and wait for you to hit a key.

    Show  accepts a Screen Builder file name from the command line.  If you
    had a file created with Screen Builder  called  MYFILE.SCR,  you  could
    instantly display it with the command:

                                SHOW MYFILE.SCR

    If  you forget to enter the filename, Show will remind that you need to
    do this.

    The  picture will remain on the screen until a key is pressed.  The DOS
    prompt will once again show its ubiquitous face.

    That's all there is to it!  SHOW was written in C for speed  and  small
    size.   The  executable  is  less than 10K in size.  A program with the
    same functionality written in QuickBASIC weighed in at about 31K.

    If you have any questions about SHOW or any other BAD SOFTWARE product,
    feel free to write me at the address at the top of this document.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1713

     Volume in drive A has no label
     Directory of A:\

    COLOR    BIN      4007   4-11-90  12:00p
    MONO     BIN      4007   4-11-90  12:00p
    ASCII    CLR      4007   4-11-90  12:00p
    SB_CAP   CLR      4007   4-11-90  12:00p
    SB       DOC     70664   4-11-90  12:00p
    SHOW     DOC      1404   4-11-90  12:00p
    SB       EXE    173926   4-11-90  12:00p
    SHOW     EXE      9529   4-11-90  12:00p
    ASCII    MON      4007   4-11-90  12:00p
    SB_CAP   MON      4007   4-11-90  12:00p
    QBSCR4   DOC     74099   4-11-90  12:00p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771   5-08-90   9:21a
    FILE1713 TXT      2739   5-08-90  10:45p
           14 file(s)     357212 bytes
                               0 bytes free
