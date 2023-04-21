---
layout: page
title: "PC-SIG Diskette Library (Disk #2559)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2559/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2559"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## EZWINDO.DOC

{% raw %}
```
                  The EZ-WINDOWS PullDown Menu System

      "Terrific, a beautiful piece of programming!" - Duiven, Holland


           A Complete Menu System for the QuickBasic 4.x Compiler
            and MS Professional Development System 7.0 and up.

                                  by

			StrongSoft Engineering
                          3155 S.W. 178th Ave
                            Aloha, OR 97006

	   Documentation written & prepared by John C. Strong


OVERVIEW

     This routine is intended to allow a programmer to present the user
with options in an organized and aesthetic way.  The PullDown Menu System was
indeed modeled after the very pulldown menu used in the QuickBASIC 4.x
environment.  

     I wrote this routine out of frustration, actually.  I didn't want to
take the time to write a pulldown menu routine, yet none of the commercially
available libraries offered the options that I needed.  So I just sat down
one day and wrote it, and here it is.

     The PullDown Menu System is very easy to integrate in a QB program,
yet offers all the options someone might expect in a commercial software
package.  To use this routine in a program, all that is required is a few
arrays containing formatting information for the pulldown menu and an array
containing the actual text used.  Then a simple CALL statement will take care
of the rest!  Don't worry -- loading the arrays required for the routine is
very straightforward and uncomplicated, and the results are definitely worth
it!

     The advantages of using this routine are both numerous and obvious, but
there is one disadvantage:  the code size is rather large.  But the programs
that need such a pulldown menu routine are the ones that need to present a
multitude of options to the user -- such a program will naturally be large
anyway, so the relative code size of the PullDown Menu System shouldn't make
a big difference.


REQUIREMENTS

     The PullDown Menu System requires QuickBASIC 4.0 Compiler or above.  I
don't know if it will work with earlier versions.  I believe earlier versions
of QuickBASIC modify the stack a bit differently when passing parameters to
assembler routines, which would definitely cause problems.  So if you don't
have version 4.0 or later, you would be doing yourself a great favor by
upgrading if for no other reason than to enjoy the benefits of a superior
programming environment provided by QB45 or PDS 7.0.

     You can use this routine inside the QB environment or in a compiled
.EXE file.  Two Quick Libraries are provided for program development inside
QB and two libraries are provided for compiled programs.    


USING THE PULLDOWN MENU SYSTEM

	Using this routine requires the dimensioning and loading of several
arrays and the actual call to the routine.  When calling the routine, several
conventions must be observed:

     1)    All non-string variable arguments must be the integer type,
           denoted by the percent sign %, i.e., ITEMSLCT%.  Alternativ-
           ely, the DEFINT statement can be used at the beginning of
           your program which will take care of this automatically.  You
           can also pass literals instead of integer variables, but only
           for arguments that are not modified by the routine.  The best
           thing to do is just pass variables, which requires less stack
           space than literals.

     2)    The arguments passed must be in proper order or the routine
           will not work, possibly locking up your system.

     3)    All arguments must be present or the routine will not work,
           possibly locking up your system.



CALLING THE ROUTINE

     This is the required format for calling this routine:


     CALL PULLDOWN(MENUBAR$,MenuRow%,MenuCol%,MenuFG%, MenuBG%,HiliteFG%,
                   HiBarFG%,HiBarBG%,NonValidFG%,HiPos1%(),HiPos2%(),
                   MaxSize%(),MaxItems%(),item$(),valid%(),toggle%(),ms%,
                   ClearAfter%,Seed%,SoundOn%,Blink%,MenuSlct%,ItemSlct%)


     Arguments:     MENUBAR$ - A string variable holding each pulldown menu
                               name.  The number of menus is determined by
                               the number of names is this string, which
                               must be separated by at least one space on
                               each side.  A space character must be the last
                               character in the string.

                    MenuRow% - The row on which the menu bar will be 
                               displayed.

                    MenuCol% - The column of the leftmost character in the
                               menu bar.  For a full length menu bar, this
                               would be set to one (1).

                     MenuFG% - The foreground color of the menubar and menus.

                     MenuBG% - The background color of the menubar and menus.

                   HiLiteFG% - The foreground color of the 'hot' letter in
                               each selection.  Bright white (15) or yellow
                               (14) work the best.

                    HiBarFG% - The foreground color of the text selected by
                               the hilite bar.

                    HiBarBG% - The background color of the hilite bar.

                 NonValidFG% - The foreground color of the selections not 
                               currently valid.  Gray (8) works the best here.

                   HiPos1%() - The integer array, dimensioned to the number of
                               menus, holding the position of the 'hot'
                               letter in each menu name in the MENUBAR$
                               variable.  These letters will be hilited with
                               the color specified in the HiliteFG% variable.

                   HiPos2%() - A 2-dimensional integer array holding the 
                               position of the 'hot' letter in each menu item
                               for each menu. It's first dimension is the
                               number of the menu, the second is the 
                               number of the selection in the menu.  
                               Dimension it for the number of menus and the 
                               number of items in the largest menu.  For
                               example,
                                    DIM HiPos2%(menu%,slct%)

                  MaxSize%() - An integer array holding the length of the
                               longest item in each menu.

                 MaxItems%() - An integer array holding the number of items in
                               each menu.

                     Item$() - A 2-dimensional array holding the items for
                               selection for each menu.  It is dimensioned
                               like HiPos2%(),
                                    DIM Item$(menu%,slct%)

                    Valid%() - A 2-dimensional flag array that determines if
                               an item is valid for selection or not.  A value
                               of 1 is valid; 0 means not valid, and the item
                               is grayed-out.  It is dimensioned like
                               HiPos2%().

                   Toggle%() - A 2-dimension flag array that determines the 
                               toggling status of each item in each menu.  
                               
                                   2   -   exclusive toggle, on
                                   1   -   inclusive toggle, on
                                   0   -   no toggling
                                  -1   -   inclusive toggle, off
                                  -2   -   exclusive toggle, off

                               If toggling is used in a menu, it must all be
                               of one type, either all exclusive or all
                               inclusive.  Otherwise, it won't work properly.
                               Toggle%() is dimensioned like HiPos2%().

                         ms% - Flag to indicate mouse support.  If ms%=0, the
                               routine ignores the mouse if one is present.
                               ms%=1 tells the routine to use the mouse.

                 ClearAfter% - If ClearAfter%=1, the menu will be erased after
                               a selection is made.  A value of zero will 
                               inhibit the erasing of the menu.

                       Seed% - When PULLDOWN is first called, the menu name
                               corresponding to the number in this variable 
                               is hilited for selection.

                    SoundOn% - If set to zero (0), the routine will not make
                               any sound.

		      Blink% - If set to one (1), the selected item will blink
			       2 times after selection.

     Returned:     MenuSlct% - The number of the menu containing the item that
                               was selected.

                   ItemSlct% - The number of the item selected.
                              
                                                            
	In addition, you can tell PULLDOWN to put in a dividing line with a 
simple command.  All you do is insert a certain control code into your
ITEM$() array.  For example, to put a dividing line 10 characters long in
your first menu after the third item, your program should define ITEM$(1,4) as:

			ITEM$(1,4) = "~10"

The tilde "~" tells PULLDOWN to create a dividing line, its length determined
by the two characters directly following the tilde.

     The source code for PDDEMO is well documented and will provide a little
more clarity on the function of each of these variable.  I encourage you to
play around will PDDEMO a bit - get a feel for it by modifying it and seeing
what it does.  Be sure to observe the calling conventions, though.


COMPILING

	To create an .EXE file, follow these steps:

          1)   During development, use the EZQB.QLB (or EZPDS.QLB) Quick
	       Library inside the QB environment.

          2)   When you're ready to compile the finished program, first
               decide if you want a stand-alone program or one that needs the
               BRUNxx.exe file to run.  Then go to the DOS prompt in your QB
               directory and use this syntax to compile your program:

                    BC PROGRAMNAME [/O],,nul	   

               where PROGRAMNAME is the name of your basic program (no
               extension), and the [/O] option tells QB to compile a stand-
               alone program.  You may leave this option off if you want,
               which will result in an executable file that needs the
               BRUNxx.EXE file.  For example, to compile PDDEMO.BAS for
               stand-alone program, type

                    BC PDDEMO /O

          3)   Now is when you link in the EZQB.LIB (or EZPDS.LIB) library
               to the object code produced by the compiler.  From the DOS
               prompt use this syntax to link your program:

                    LINK [/E] PROGRAMNAME,,,EZQB

               The [/E] is the EXEPACK option which produces a
               smaller executable file and should be used for most every 
               program that you may write.

          4)   You should now have an executable version of your QB program
               in the QBxx directory.  Remember, if you didn't use the [/O]
               option, the BRUNxx.EXE must be present.



HELP A BUDDING ENGINEER!

     If you think this pulldown menu routine will be useful to you, I would
greatly appreciate a little donation to get me through the last year of 
engineering school.  A $5.00 registration fee is all that's needed to get on 
the mailing list and receive updates to PULLDOWN plus customer support.


MORE ROUTINES!!

     If you run the EZDEMO1.EXE program on your disk, you will see a collection
of my favorite routines that I would like to make available to you.  This is
Volume 1 of the EZ-WINDOWS library.  I use these routines extensively in my
programs, which not only saves a lot of time but also results in a professional
looking program.

     Here is what you get:  1) the complete library of routines with full
documentation;  2)  free updates when they become available;  3)  customer
support.  Included in customer support is the "wish list".  If you have an
idea for a routine, and I get enough suggestions from others for the same type
of routine, I will write it up and send it out with the next update.  In 
addition, I will be periodically updating my personal library with new
routines which will be included in the next volume.  Each new volume can be
obtained by registered users at a discount.

     I know a lot of you will want my source code, and I can understand that.
I'm a little reluctant to give it out, but I will release it with the library
for an extra fee.

     For ordering info, see the REGISTER.DOC file.


AND LASTLY...

     Have a ball! 


```
{% endraw %}

## FILE2559.TXT

{% raw %}
```
Disk No: 2559                                                           
Disk Title: EZ-Windows Pull-Down Menu Library                           
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: EZ-Windows Pull-Down Menu Library                        
Author Version: 01/91                                                   
Author Registration: $5.00 and $30.00                                   
Special Requirements: QuickBASIC 4.0+ Compiler                          
                                                                        
EZ-WINDOWS is a complete menu system for the QuickBASIC 4.x compiler    
that saves you from having to write your own pull-down menus. EZ-WINDOWS
is actually modeled after the very pull-down menu used in the QuickBASIC
4.x environment and is very easy to integrate into your QuickBASIC      
programs.  With EZ-WINDOWS, your programs will have the same appearance 
as commercial programs.                                                 
                                                                        
All that is required to use EZ-WINDOWS are a few arrays containing      
formatting information for the pull-down menu and an array containing   
the actual text used.  A simple CALL statement will take care of the    
rest. Loading of the arrays is uncomplicated and worth the effort.  One 
reason for using EZ-WINDOWS is the ease with which you can add a        
professional look to your programs.                                     
                                                                        
There is one disadvantage -- the code size is rather large.  However,   
programs that need such a pull-down menu system are the ones that       
present a multitude of options to the user, and will be naturally large 
anyway, so the relative code size of the pull-down menu system shouldn't
make a big difference.                                                  
                                                                        
StrongSoft Engineering's EZ-WINDOWS has demo programs to demonstrate the
power and flexibility of the pull-down menu system.                     
                                                                        
~ Registered library also contains a routine to produce movable,        
  resizable pop-up windows that can be manipulated with a mouse.        
                                                                        
~ All routines use a mouse.                                             
                                                                        
~ Also works with Professional Development System 7.x.                  
                                                                        
~ Source code is available.                                             
                                                                        
~ E-mail customer support available.                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PDDEMO.BAS

{% raw %}
```bas
'=========================================================================

'                   PULLDOWN demonstration program
'                         Using EZWINDOWS library.

'                   Written by
'                         John C. Strong
'                         3155 S.W. 178th Aveneu
'                         Aloha, OR 97006

'=========================================================================

'    Here's how to run this demo in the QB 4.x environment:

'         Make sure the EZPD.QLB file is in the current path,
'         and start QuickBasic using the syntax

'                             QB /L EZPD

'         which loads the quick library EZPD.QLB along with QB.
'         Then load DEMO.BAS from within QB and there you go!

'    Here's how to compile this demo into an executable file:

'         To compile this program (or any other program you may
'         write with EZWINDOW), return to the DOS command line
'         and follow this sequence of commands:

'              BC ProgramName,,nul
'              link /e ProgramName,,,EZPD.LIB

'         Note the difference between EZPD.LIB and EZPD.QLB!
'         Quick libraries are for use only inside the QB environment.

'=============================================================================
'                         P R O G R A M    C O D E
'=============================================================================

     DEFINT A-Z
     REM $DYNAMIC
     DIM HiPos1(10), HiPos2(10, 20), MaxSize(10), maxitems(10), item$(10, 15), valid(10, 15), toggle(10, 15)
                                                  
     col = 1                                      'assume color monitor
     IF INSTR(COMMAND$, "BW") THEN col = 0        'user wants black/white
     ms = 1                                       'assume mouse
     IF INSTR(COMMAND$, "IM") THEN ms = 0         'user doesn't want mouse
     COLOR 7, col * 5
     CLS
     
     LOCATE 5, 5: PRINT "This is the PULLDOWN menu system!"
     LOCATE 7, 5: PRINT "Here are some of its exciting features:"
     LOCATE 9, 10
     PRINT " Easily integrated into any existing QB 4.x program."
     PRINT TAB(10); " Full mouse support."
     PRINT TAB(10); " Full color control."
     PRINT TAB(10); " Selections can by "; CHR$(34); "grayed"; CHR$(34); " out."
     PRINT TAB(10); " Selections can be toggled inclusivley and exclusively."
     PRINT TAB(10); " Mouse, cursor keys, or 'hot' keys can be used to"
     PRINT TAB(12); "make a selection."
     PRINT TAB(10); " 'Hot' key can be located anywhere in selection text."
     PRINT TAB(10); " Menus pop up instantly, even on an XT!"
     PRINT TAB(10); " Windows have a transparent shadow."
     PRINT TAB(10); " Item will optionally blink upon selection."
     PRINT TAB(10); " Dividing lines are inserted automatically."

     LOCATE 22, 5: PRINT "Select Exit from File menu when you're ready to quit..."
     LOCATE 24, 5: PRINT "You selected:   ";

     FOR i = 1 TO 10          'HiPos1() holds the location in each menu
          HiPos1(i) = 1       'name for the 'hot' key - in this case it
     NEXT i                   'is the first letter in each name.
    
     'Load in menu data from data statements at the end of this program
         
     RESTORE PullDownMenuData
    
     FOR menu = 1 TO 8
          READ maxitems(menu)               'Number of selections in each menu
          READ MaxSize(menu)                'Max length of items in each menu
          FOR slct = 1 TO maxitems(menu)
               READ item$(menu, slct)       'Text displayed for selection
               READ HiPos2(menu, slct)      'Hot key for each selection in menu
               READ valid(menu, slct)       'Determines if grayed out or not
               READ toggle(menu, slct)      'Determines if selection can be
          NEXT slct
     NEXT menu
     
     menuline$ = "   File  Edit  View  Search  Run  Debug  Calls  Options                         "
    
     menurow = 1                             'Screen row of menu line
     menucol = 1                             'Beginning column position
     MenuFG = 0                              'Menu foreground color
     MenuBG = 7                              'Menu background color
     HILITE = 15                             'Hot key hilite color
     HiBarFG = 7                             'Hilite bar foreground color
     HiBarBG = 0                             'Hilite bar background color
     NonValidFG = 8                          'Foreground color for grayed-out
                                             'selections
     clearafter = 1                          'erase menu after selection
     seed = 1                                'menu to start with
     SoundOn = 1                             'turn sound on
     blink = 1                               'turn BLINK option on
    
     CALL mouse(0, 0, 0, 0, 1)               'initialize mouse
     CALL mouse(1, 0, 0, 0, 1)               'show mouse cursor
     CALL mouse(10, 0, &H7000, 3844, ms)     'set mouse cursor

     DO
          CALL PULLDOWN(menuline$, menurow, menucol, MenuFG, MenuBG, HILITE, HiBarFG, HiBarBG, NonValidFG, HiPos1(), HiPos2(), MaxSize(), maxitems(), item$(), valid(), toggle(), ms, clearafter, seed, SoundOn, blink, menuslct, itemslct)
          LOCATE 24, 5
          PRINT "You selected:   "; item$(menuslct, itemslct); "                      ";

          IF menuslct <> 0 AND LEFT$(item$(menuslct, itemslct), 1) <> "~" THEN
               LOCATE 24, 20
               PRINT item$(menuslct, itemslct);
          END IF
          IF toggle(menuslct, itemslct) <> 0 THEN
               LOCATE 24, 40
               IF toggle(menuslct, itemslct) > 0 THEN
                    PRINT "ON   ";
               ELSE
                    PRINT "OFF  ";
               END IF
          END IF
          seed = menuslct
          IF seed = 0 THEN seed = 1

     LOOP UNTIL menuslct = 1 AND itemslct = 15
    
     REDIM HiPos1(0), HiPos2(0, 0), MaxSize(0), maxitems(0), item$(0, 0), valid(0, 0), toggle(0, 0)
    
     CALL mouse(2, 0, 0, 0, 1)               'turn off mouse cursor
     COLOR 7, 0
     CLS
     END

'---------------------------- End of Program Code ----------------------------

'=============================================================================
'                              M e n u   D a t a
'=============================================================================


PullDownMenuData:

     'File menu

     DATA 15,17
     DATA " New Program     ",2,1,0
     DATA " Open Program... ",2,1,0
     DATA " Merge...        ",2,1,0
     DATA " Save...         ",2,1,0
     DATA " Save As         ",7,1,0
     DATA " Save All        ",4,1,0
    
     'Here's an example of inserting a dividing line
     DATA "~17",0,1,0          
    
     DATA " Create File...  ",2,1,0
     DATA " Load File...    ",2,1,0
     DATA " Unload File...  ",2,1,0
     DATA "~17",0,1,0
     DATA " Print...        ",2,1,0
     DATA " DOS Shell       ",2,1,0
     DATA "~17",0,1,0
     DATA " Exit            ",3,1,0

     'Edit menu
    
     DATA 8,22
     DATA " Undo   Alt+Backspace ",2,1,0
     DATA " Cut        Shift+Del ",4,0,0
     DATA " Copy        Ctrl+Ins ",2,0,0
     DATA " Paste      Shift+Ins ",2,1,0
     DATA " Clear            Del ",4,1,0
     DATA "~22",0,1,0
     DATA " New SUB...           ",6,1,0
     DATA " New FUNCTION...      ",6,1,0

     'View menu
    
     DATA 9,24
     DATA " SUBs...             F2 ",2,1,0
     DATA " Next SUB      Shift+F2 ",3,1,0
     DATA " Split                  ",3,1,0
     DATA "~24",0,1,0
     DATA " Next Statement         ",2,1,0
     DATA " Output Screen       F4 ",3,1,0
     DATA "~24",0,1,0
     DATA " Included File          ",2,0,0
     DATA " Included Lines         ",11,1,0

     'Search menu
    
     DATA 5,26
     DATA " Find...                  ",2,1,0
     DATA " Selected Text     Ctrl+\ ",2,1,0
     DATA " Repeat Last Find      F3 ",2,1,0
     DATA " Change...                ",2,1,0
     DATA " Label...                 ",2,1,0

     'Run menu

     DATA  9,21
     DATA " Start      Shift+F5 ",2,1,0
     DATA " Restart             ",2,1,0
     DATA " Continue         F5 ",4,1,0
     DATA " Modify COMMAND$...  ",9,1,0
     DATA "~21",0,1,0
     DATA " Make EXE File...    ",8,1,0
     DATA " Make Library...     ",7,1,0
     DATA "~21",0,1,0
     DATA " Set Main Module...  ",6,1,0

     'Debug menu
    
     DATA 13,29
     DATA " Add Watch...                ",2,1,0
     DATA " Instant Watch...   Shift+F9 ",2,1,0
     DATA " Watchpoint...               ",2,1,0
     DATA " Delete Watch...             ",2,0,0
     DATA " Delete All Watch            ",4,0,0
     DATA "~29",0,1,0
     DATA " Trace On                    ",2,1,0
     DATA " History On                  ",2,1,0
     DATA "~29",0,1,0
     DATA " Toggle Breakpoint        F9 ",9,1,0
     DATA " Clear All Breakpoints       ",2,1,0
     DATA " Break On Errors             ",11,1,0
     DATA " Set Next Statement          ",2,0,0

     'Calls menu
    
     DATA 1,17
     DATA " PDDEMO.BAS      ",2,1,0

     'Options menu
    
     DATA 5,17
     DATA " Display...      ",2,1,0
     DATA " Set Paths...    ",6,1,0
     DATA " Right Mouse...  ",8,1,0
     DATA " Syntax Checking ",2,1,1
     DATA " Full Menus      ",2,1,1

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2559

     Volume in drive A has no label
     Directory of A:\

    EZDEMO1  EXE     61752   1-26-91   3:03p
    PDDEMO   BAS      9598  11-19-90   9:02p
    PDDEMO   EXE     33080   1-25-91   9:29p
    REGISTER DOC      4306   8-28-90   9:21p
    EZQB     LIB     20031   1-25-91   9:25p
    EZQB     QLB     28697   1-25-91   9:25p
    EZPDS    LIB     21057   1-25-91   9:27p
    EZPDS    QLB     29988   1-25-91   9:28p
    EZWINDO  DOC     13454   1-19-91   5:17p
    FILE2559 TXT      3553   3-14-91   9:52a
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1002   3-14-91  12:51a
           12 file(s)     226556 bytes
                           88064 bytes free
