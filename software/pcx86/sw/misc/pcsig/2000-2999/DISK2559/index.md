---
layout: page
title: "PC-SIG Library Disk #2559"
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

## PDDEMO.BAS

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
