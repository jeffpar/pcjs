---
layout: page
title: "PC-SIG Diskette Library (Disk #665)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0665/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0665"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-DEMONSTRATION SYSTEM"

    The PC Demonstration system is an excellent program for putting
    together a presentation on the system or laying out the specifications
    of a package.  There are three programs in the PC Demonstration System:
    
    Screen  Formatter  -  which  is used to create the screens for your
    presentation.
    
    Demo  Maker  -  which  is  used  to  create  a "sequence file" that
    describes  the order in which your screens will be displayed, along
    with  the  valid  keys  that  can  be  used  to  branch within your
    presentation.
    
    Demo  Run  -  which  takes  your screens and your sequence file and
    "runs" your presentation.
    
    This shareware/evaluation version of PC Demonstration System limits
    sequence file size to 10 records.  It also has a reminder-to-register
    screen in place of a blank edit screen in Screen Formatter.  The
    registered/enhanced version allows sequence files of 450 records and
    does not have the reminder-to-register screen.
    
    System Requirements:  256K, one disk drive and color/monochrome display
    MUST BE RUN in 80 column mode
    
    How to Start:  Documentation in READ.ME and MANUAL.DOC. To run, enter
    DR for DEMO RUN program and SF for SCREEN FORMATTER program.
    
    Suggested Registration: $35.00 registrations covers the latest enhanced
    version, update notification ($10.00), technical support, SHOW.COM
    (will allow the use of screens created by Screen Formatter in batch
    files and even dBase III programs, and a supplement to the User's Guide
    that gives tips on how Screen Formatter screens can be used within
    their own programs.
    
    File Descriptions:
    
    DM       COM  Demo Maker program
    DM       SCN  Demo Maker screens
    DMHLP    SCN  Demo Maker help
    DR       COM  Demo run program
    READ     ME   System introduction on how to run Demo
    PRINTDOC BAT  Batch file to print documentation
    PCDEMO   ???  Segments of introductory demonstration (41 files)
    MANUAL   DOC  Actual text of system documentation
    SF       SCN  Screen formatter screen file
    SF       COM  Screen formatter program
    SFHLP    SCN  Screen formatter help
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES665.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 665   PC Demonstration System                           v1   DS2
---------------------------------------------------------------------------
PC Demonstration system is an excellent program for putting together a
presentation on the system or laying out the specifications of a package.
It consists of three sections - a Screen Formatter to set up screens, a
Demo Maker which specifies how the screens are to be displayed and Demo
Run which actually executes the demonstration.
 
DEMO     BAT  Batch file to run system demonstration
DM       COM  Demo Maker program
DM       SCN  Demo Maker screen file
DMHLP    SCN  Demo Maker help
DR       COM  Demo run program
MANUAL   DOC  Actual text of system documentation
PCDEMO   ???  Segments of introductory demonstration (41 files)
PRINTDOC BAT  Batch file to print documentation
READ     ME   System introduction on how to run Demo
SF       COM  Screen formatter program
SF       SCN  Screen formatter screen file
SFHLP    SCN  Screen formatter help
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```













                                                   PC DEMONSTRATION SYSTEM
                                                              User's Guide






                                                               Version 2.0










                            Copyright (C) 1986 Shamrock Microsystems, Inc.
                                                      All rights reserved.





















    SHAMROCK MICROSYSTEMS, INC.
    P.O. BOX 26527
    INDIANAPOLIS, IN 46226
    (317) 545-7871







                      PC Demonstration System Version 2.0          Page 2
                                 User's Guide


                               TABLE OF CONTENTS

    SECTION                                                           PAGE
    -------                                                           ----
    OVERVIEW..........................................................  3
        Description...................................................  3
        System Requirements...........................................  3
    SCREEN FORMATTER..................................................  4
        Starting Screen Formatter.....................................  4
        Help (F1).....................................................  4
        Set drive/directory (F2)......................................  4
        Load screen from disk (F3)....................................  4
        Save screen to disk (F4)......................................  4
        Print current screen (F5).....................................  4
        Edit mode (F6)................................................  5
             Text entry and edit keys.................................  5
             Help (F1)................................................  5
             Cursor position (F2).....................................  6
             Color (F3)...............................................  6
                  Paint (F3)..........................................  6
                  Set foreground (F4).................................  6
                  Set background (F5).................................  6
                  Blink (F6)..........................................  6
                  Quit (Esc)..........................................  6
             Draw box (F4)............................................  7
             Center line (F5).........................................  7
             Delete line (F6).........................................  7
             Insert line (F7).........................................  7
             Copy block (F8)..........................................  7
             Move block (F9)..........................................  7
             Delete block (F10).......................................  7
             Return to main menu (Esc)................................  8
        Exit to DOS (Esc).............................................  8
    DEMO MAKER........................................................  9
        Starting Demo Maker...........................................  9
        Help (F1).....................................................  9
        Set drive/directory (F2)......................................  9
        Load sequence file from disk (F3).............................  9
        Save sequence file to disk (F4)...............................  9
        Print current sequence file (F5)..............................  9
        Renumber (F6)................................................. 10
        Add to sequence file (F7)..................................... 10
             Edit keys................................................ 10
             Field definitions........................................ 11
        Change sequence file (F8)..................................... 12
        Clear (F9).................................................... 12
        Exit to DOS (Esc)............................................. 12
    DEMO RUN.......................................................... 13
        Starting Demo Run............................................. 13
    TIPS ON USING PDS................................................. 14
    ACKNOWLEDGEMENTS.................................................. 15
    ENHANCEMENTS...................................................... 16
    BECOMING A REGISTERED USER........................................ 17









                      PC Demonstration System Version 2.0          Page 3
                                 User's Guide


    OVERVIEW

    DESCRIPTION

    The  PC  Demonstration  System  (PDS)  provides  a  way for you to make
    program  demonstrations,  prototypes  and other types of presentations.
    There are three programs in the PC Demonstration System:

        Screen  Formatter  -  which  is used to create the screens for your
        presentation.

        Demo  Maker  -  which  is  used  to  create  a "sequence file" that
        describes  the order in which your screens will be displayed, along
        with  the  valid  keys  that  can  be  used  to  branch within your
        presentation.

        Demo  Run  -  which  takes  your screens and your sequence file and
        "runs" your presentation.


    SYSTEM REQUIREMENTS

    The  PC  Demonstration  System requires a 256K or larger IBM PC, PC-XT,
    PC-AT  or  IBM PC "compatible" and DOS 2.0 or later.  PDS works only in
    80 column mode with either the color or monochrome display adapter.





































                      PC Demonstration System Version 2.0          Page 4
                                 User's Guide


    SCREEN FORMATTER

    STARTING SCREEN FORMATTER

    At  the  DOS  prompt, type "SF" (without the quotation marks) and press
    Enter.    The  files  SF.SCN  and  SFHLP.SCN  must  be  in  the current
    directory.    If  they  are  not  found, the program will abort with an
    error message indicating the file that could not be found.

    Once  the  program  has  successfully  loaded,  the  main  menu will be
    displayed.


    HELP (F1)

    Pressing  F1  at  the  main  menu  displays  a  help  screen that gives
    additional  information  on  the  options available from the main menu.
    F1  is  the  "help"  key  throughout Screen Formatter.  Press F1 at any
    time  to  receive  context-sensitive  help  on  the  function  you  are
    performing.


    SET DRIVE/DIRECTORY (F2)

    Pressing  F2  at  the  main  menu  will allow you to change the current
    drive/directory.    The current drive/directory will be displayed.  Key
    in  the  changes  you  desire  and press Enter.  All loads and saves of
    screens  will now be made from the drive/directory you entered.  If you
    do  not  wish  to  change  the drive/directory after pressing F2, press
    Escape (Esc).  The current drive/directory will remain unchanged.


    LOAD SCREEN FROM DISK (F3)

    Pressing  F3 at the main menu will allow you to load a previously saved
    screen  into  the  edit workspace, where you will be able to modify it.
    The  last  screen  accessed by Screen Formatter in this session will be
    displayed.    Key  in the name of the screen you wish to load and press
    Enter.    The  screen will be loaded from disk into the edit workspace.
    If  you  do  not  wish to load a screen after pressing F3, press Escape
    (Esc).  The edit workspace will remain unchanged.


    SAVE SCREEN TO DISK (F4)

    Pressing  F4  at  the  main  menu  will  allow  you  to save the screen
    currently  in  the edit workspace to disk.  The last screen accessed by
    Screen  Formatter  in  this session will be displayed.  Key in the name
    you  desire  to  give  the  screen and press Enter.  The screen will be
    saved  to  disk,  but will remain in the edit workspace.  If you do not
    wish  to  save  the  screen after pressing F4, press Escape (Esc).  The
    screen will not be saved to disk.


    PRINT CURRENT SCREEN (F5)

    Pressing  F5  at  the  main  menu  will  allow  you to print the screen
    currently  in the edit workspace.  Note that the output to your printer
    will  be in 132 column format.  If you use an 80 column printer, ensure



                      PC Demonstration System Version 2.0          Page 5
                                 User's Guide


    that  it  has  been  set  to  132  column  mode  before  loading Screen
    Formatter.   Also note that Screen Formatter does not currently support
    the  printing  of  the  graphics  characters.  These characters will be
    converted to spaces during the print process.


    EDIT MODE (F6)

    Pressing  F6  at  the  main menu will put you in edit mode.  The screen
    currently  in  the  edit workspace will be displayed for you to modify.
    The  first time you enter edit mode in a session with Screen Formatter,
    the  edit  workspace  will be blank (unless you're using the evaluation
    version,  and  then  you  will be reminded to become a registered user.
    To  clear the reminder-to-register screen for entry of your own screen,
    perform the following:

        Press the Home key.
        Press F3.
        Press F3.
        Press F3.
        Press the Left cursor key.
        Press F3.
        Press Escape (Esc).
        Press F10.
        Press F10.
        Press the Left cursor key.
        Press F10.

    The  screen  will  now be blank and all color attributes will be set to
    white on black.)


    TEXT ENTRY AND EDIT KEYS

    Text  entry  in  edit  mode is relatively simple.  Put the cursor where
    you  want the text and start typing.  Remember, Screen Formatter is not
    a  word  processor,  so don't expect sentences to wrap around, although
    the   cursor   does  wrap-around,  both  vertically  and  horizontally.
    Pressing  the  Alt  key  plus  a  letter key will produce a large block
    letter.    Also,  Alt  and  the  numeric  keypad  can  be used to enter
    graphics  characters.    Most  of  the  edit keys function as you would
    expect  them  to function.  Tabs are set every 10 characters for use by
    the  Tab  and  Shift-Tab keys.  Home puts the cursor at column position
    1, row position 1.


    HELP (F1)

    Pressing  F1  in  edit  mode displays a "mini-menu" of the function key
    assignments  while in edit mode.  Pressing F1 again will offer extended
    help  on  these  functions.  Press any key to remove the mini-menu from
    the  screen.    As stated earlier, F1 is the help key throughout Screen
    Formatter.    Press F1 at any time for more information on the function
    you are performing.








                      PC Demonstration System Version 2.0          Page 6
                                 User's Guide


    CURSOR POSTION (F2)

    Pressing  F2  in edit mode displays the current column and row position
    of  the  cursor.   Press any key to remove the display from the screen.
    F2 can be pressed at any time the cursor is displayed on the screen.


    COLOR (F3)

    Pressing  F3 in edit mode will put you in color mode, where you can add
    color  to  your  screen.   A window showing the current colors selected
    and  a  "mini-menu"  of  function key assignments in color mode will be
    displayed.


    PAINT (F3)

    Pressing  F3  in  color  mode allows you to paint an area of the screen
    with  the  selected  colors.  After pressing F3, position the cursor to
    the  upper  left  corner  of the area to be painted and press F3.  Then
    position  the  cursor  to  the  lower  right  corner  of the area to be
    painted  and  press F3 again.  The marked area will be painted with the
    selected  colors.    Press  Escape (Esc) at any time before marking the
    lower right corner to abort the paint process.


    SET FOREGROUND (F4)

    Pressing  F4 in color mode allows you to set the foreground color to be
    used  when  painting.   Use the Up cursor and Down cursor keys to point
    to  the  desired  color.    Press  Enter  or Escape (Esc) when you have
    selected  the  desired  color.   The text in the colors selected window
    will reflect your selection.


    SET BACKGROUND (F5)

    Pressing  F5 in color mode allows you to set the background color to be
    used  when  painting.   Use the Up cursor and Down cursor keys to point
    to  the  desired  color.    Press  Enter  or Escape (Esc) when you have
    selected  the  desired  color.    The background in the colors selected
    window will reflect your selection.


    BLINK (F6)

    Pressing  F6  in  color  mode  allows you to make an area of the screen
    blink.    After  pressing  F6,  position  the  cursor to the upper left
    corner  of  the  area  to  be  blinked and press F6.  Then position the
    cursor  to  the  lower right corner of the area to be blinked and press
    F6  again.  The marked area will begin blinking.  Press Escape (Esc) at
    any  time  before  marking  the  lower  right corner to abort the blink
    process.  To "unblink" an area, paint it.


    QUIT (ESC)

    To quit color mode, press Escape (Esc).




                      PC Demonstration System Version 2.0          Page 7
                                 User's Guide


    DRAW BOX (F4)

    Pressing  F4  in  edit mode allows you to draw a double-line box around
    an  area  of the screen.  After pressing F4, position the cursor to the
    upper  left corner of the area you wish to enclose with a box and press
    F4.   Then position the cursor to the lower right corner of the area to
    be  enclosed  and press F4 again.  The box will be drawn.  Press Escape
    (Esc)  at  any  time before marking the lower right corner to abort the
    box-drawing process.


    CENTER LINE (F5)

    Pressing  F5  in edit mode will center the text on the line occupied by
    the cursor.


    DELETE LINE (F6)

    Pressing F6 in edit mode will delete the line occupied by the cursor.


    INSERT LINE (F7)

    Pressing  F7 in edit mode will insert a blank line at the line occupied
    by the cursor.


    COPY BLOCK (F8)

    Pressing  F8  in  edit mode will allow you to copy a block of text from
    one  part  of  the  screen to another.  After pressing F8, position the
    cursor  to  the  upper  left  corner of the area to be copied and press
    F8.    Next,  position the cursor to the lower right corner of the area
    to  be  copied  and  press  F8 again.  Then, position the cursor to the
    upper  right  corner of the destination of the marked block.  Press F8.
    The  block  will  be  copied.    Press  Escape (Esc) at any time before
    marking the destination to abort the copy process.


    MOVE BLOCK (F9)

    Pressing  F9  in  edit mode will allow you to move a block of text from
    one  part  of  the  screen to another.  After pressing F9, position the
    cursor  to  the upper left corner of the area to be moved and press F9.
    Next,  position  the cursor to the lower right corner of the area to be
    moved  and  press  F9  again.    Then, position the cursor to the upper
    right  corner  of  the destination of the marked block.  Press F9.  The
    block  will  be  moved.   Press Escape (Esc) at any time before marking
    the destination to abort the move process.


    DELETE BLOCK (F10)

    Pressing  F10  in  edit  mode  will allow you to delete a block of text
    from  the screen.  After pressing F10, position the cursor to the upper
    left  corner  of  the area to be deleted and press F10.  Then, position
    the  cursor  to  the  lower  right corner of the area to be deleted and
    press  F10 again.  The area will be deleted.  Press Escape (Esc) at any



                      PC Demonstration System Version 2.0          Page 8
                                 User's Guide


    time  before  marking  the  lower  right  corner  to  abort  the delete
    process.


    RETURN TO MAIN MENU (ESC)

    Pressing Escape (Esc) in edit mode will return you to the main menu.


    EXIT TO DOS (ESC)

    Pressing  Escape (Esc) at the main menu will end Screen Formatter.  The
    screen  will  be cleared, the current drive/directory will be displayed
    and you will be returned to DOS.
















































                      PC Demonstration System Version 2.0          Page 9
                                 User's Guide


    DEMO MAKER

    STARTING DEMO MAKER

    At  the  DOS  prompt, type "DM" (without the quotation marks) and press
    Enter.    The  files  DM.SCN  and  DMHLP.SCN  must  be  in  the current
    directory.    If  they  are  not  found, the program will abort with an
    error message indicating the file that could not be found.

    Once  the  program  has  successfully  loaded,  the  main  menu will be
    displayed.


    HELP (F1)

    Pressing  F1  at  the  main  menu  displays  a  help  screen that gives
    additional  information  on  the  options available from the main menu.
    F1  is  the  "help" key throughout Demo Maker.  Press F1 at any time to
    receive context-sensitive help on the function you are performing.


    SET DRIVE/DIRECTORY (F2)

    Pressing  F2  at  the  main  menu  will allow you to change the current
    drive/directory.    The current drive/directory will be displayed.  Key
    in  the  changes  you  desire  and press Enter.  All loads and saves of
    sequence  files  will now be made from the drive/directory you entered.
    If  you  do  not  wish to change the drive/directory after pressing F2,
    press   Escape   (Esc).     The  current  drive/directory  will  remain
    unchanged.


    LOAD SEQUENCE FILE FROM DISK (F3)

    Pressing  F3 at the main menu will allow you to load a previously saved
    sequence  file  so  that  you  may add or make changes to it.  The last
    sequence   file  accessed  by  Demo  Maker  in  this  session  will  be
    displayed.    Key in the name of the sequence file you wish to load and
    press  Enter.    The sequence file will be loaded from disk.  If you do
    not  wish  to  load  a  sequence  file  after pressing F3, press Escape
    (Esc).


    SAVE SEQUENCE FILE TO DISK (F4)

    Pressing  F4  at  the  main  menu  will  allow  you to save the current
    sequence  file  to disk.  The last sequence file accessed by Demo Maker
    in  this session will be displayed.  Key in the name you desire to give
    the  sequence file and press Enter.  The sequence file will be saved to
    disk.   If you do not wish to save the sequence file after pressing F4,
    press Escape (Esc).  The sequence file will not be saved to disk.


    PRINT CURRENT SEQUENCE FILE (F5)

    Pressing  F5  at  the  main  menu  will  allow you to print the current
    sequence file.  Press Escape (Esc) at any time to cancel printing.





                      PC Demonstration System Version 2.0          Page 10
                                 User's Guide


    RENUMBER (F6)

    Pressing  F6  at the main menu will renumber the current sequence file.
    After  pressing  F6, press Y to confirm that you wish to renumber.  The
    first  record  will  be  given  the  sequence number 10, and subsequent
    records  will  be  numbered in increments of 10.  If you do not wish to
    renumber  the  sequence file after pressing F6, press any other key and
    the sequence file will not be renumbered.


    ADD TO SEQUENCE FILE (F7)

    Pressing  F7  at the main menu allows you to add records to the current
    sequence  file.   The add entry screen will be displayed, with the name
    of  the  current  sequence  file  in the upper right corner.  Enter the
    desired  information  into the fields and press Enter.  The record will
    be  added to the sequence file and the fields will be cleared for entry
    of another record.  Press Escape (Esc) to return to the main menu.


    EDIT KEYS

    When  adding  (or changing) sequence records, the edit keys are defined
    as follows:

        Right cursor        -    move   the  cursor  one  position  to  the
                                 right.

        Left cursor         -    move the cursor one position to the left.

        End                 -    move  the  cursor  to the last position in
                                 the field.

        Backspace           -    delete  the  character  to the left of the
                                 cursor,  then move the cursor one position
                                 to the left.

        Delete              -    delete   the   character   at  the  cursor
                                 position.

        Insert              -    toggle  insert mode on/off; a block cursor
                                 will  indicate  that  you  are  in  insert
                                 mode.

        Tab                 -    move the cursor to the next field.

        Shift-Tab           -    move the cursor to the preceding field.

        Ctrl+right cursor   -    move  the cursor to the field to the right
                                 of the present field.

        Ctrl+left cursor    -    move  the  cursor to the field to the left
                                 of the present field.

        Up cursor           -    move  the  cursor  to  the field above the
                                 present field.

        Down cursor              move  the  cursor  to  the field below the
                                 present field.



                      PC Demonstration System Version 2.0          Page 11
                                 User's Guide


    FIELD DEFINITIONS

    The definitions of the fields in a sequence record are as follows:

        Sequence number     -    the  number  you  assign to this record to
                                 uniquely   identify  it,  much  like  line
                                 numbers  in  BASIC.    Must  be  a  number
                                 between 1 and 9998.

        Screen name         -    the  file  name of the screen that will be
                                 displayed  when  this  sequence  record is
                                 executed  by  Demo  Run.   Must be a valid
                                 DOS file name.

        Delay time          -    the  number  of  seconds  that  the screen
                                 will   be  displayed.    An  entry  of  99
                                 indicates   that   the   screen   will  be
                                 displayed  until  a  valid key is pressed.
                                 Must be a number between 0 and 60 or 99.

        Cursor column/row   -    the  column and row position of the cursor
                                 when  the  screen  is displayed.  An entry
                                 of  0 for either one will cause the cursor
                                 to  be "hidden."  Must be a number between
                                 0 and 80 for column and 0 and 25 for row.

        Key                 -    the  keys  that can be pressed to continue
                                 execution  of  the sequence file.  If left
                                 blank,  the  first  Key entry will default
                                 to  TIM.    Valid  Key  entries  and their
                                 definitions are:

                                 TIM       -    the   corresponding  branch
                                                will   be   executed   when
                                                Delay  time  expires and no
                                                key has been pressed

                                 F1 - F10  -    Function keys 1 through 10

                                 0 -9      -    numeric keys 0 through 9

                                 SPC       -    space bar

                                 ESC       -    Escape (Esc)

                                 ENT       -    Enter

                                 ANY       -    any key

        Branch              -    the  sequence  number  of the record to be
                                 executed  when  the  corresponding  key is
                                 pressed.   An entry of 9999 indicates exit
                                 to  DOS.    Must be a number between 1 and
                                 9999.








                      PC Demonstration System Version 2.0          Page 12
                                 User's Guide


    CHANGE SEQUENCE FILE (F8)

    Pressing  F8  at the main menu allows you to make changes to records in
    the  current  sequence file.  The change entry screen will be displayed
    with  the  name of the current sequence file in the upper right corner.
    Key  in  the  sequence  number  of  the  record to be changed and press
    Enter.    The  desired  record  will  be  displayed.  Enter the desired
    changes  and  press Enter.  The fields will be cleared and you may then
    enter  another  sequence number to be changed.  Press Escape (Esc) when
    entering  changes  to  select  a  different record.  Press Escape (Esc)
    when  selecting a record to return to the main menu.  The edit keys are
    defined  as in the add process, with the addition that the F10 key will
    allow  you  to delete a record.  After pressing F10, press Y to confirm
    that  you wish to delete the record.  Press any other key if you do not
    wish to delete.


    CLEAR (F9)

    Pressing  F9  at  the  main  menu  will  allow you to clear the current
    sequence  file  from  memory so that you may enter a new sequence file.
    After  pressing  F9,  press Y to confirm that you wish to clear.  Press
    any other key if you do not wish to clear.


    EXIT TO DOS (ESC)

    Pressing  Escape  (Esc)  at  the  main  menu  will end Demo Maker.  The
    screen  will  be cleared, the current drive/directory will be displayed
    and you will be returned to DOS.
































                      PC Demonstration System Version 2.0          Page 13
                                 User's Guide


    DEMO RUN

    STARTING DEMO RUN

    AT  the DOS prompt, type "DR" (without the quotation marks) followed by
    the name of the sequence file to be executed, e.g.

    A>DR filename.ext

    Your  presentation  will  begin  executing,  starting  with  the  first
    (lowest numbered) sequence record in the sequence file.

    If  an  error occurs during Demo Run processing, the program will abort
    with  an  error  message  indicating the type of error.  Typical errors
    are:  the sequence file cannot be found, a screen file cannot be found,
    or  a  branch  to  an  undefined  sequence  number  is specified in the
    sequence file.













































                      PC Demonstration System Version 2.0          Page 14
                                 User's Guide


    TIPS ON USING PDS

    The  following  are  tips  on  the  use  of the PC Demonstration System
    programs:

    SCREEN FORMATTER

    If  you  have an 80 column printer, don't forget to put your printer in
    132 column (compressed) mode before loading Screen Formatter.

    When  creating  screens,  it  is  best  to  first enter text, then draw
    boxes, then add color, and finally, blink desired areas.

    Remember...help  is  only a keystroke away, no matter what function you
    are performing.  Use F1.


    DEMO MAKER

    When  entering  Keys and Branches, always enter the Key ANY as the last
    entry  in  your list.  When Demo Run receives a keystroke, it starts at
    the top of your Key list to find a match.  ANY matches all keystrokes.

    Enter  Keys and Branches in consecutive order.  When Demo Maker finds a
    blank  Key  entry,  all  Key  and  Branch entries following it are made
    blank.

    If  Delay time is set at a value other than 99, ensure that a TIM entry
    is  made  in  your Key list.  If Delay time expires and a TIM Key entry
    is not found, an undefined branch error will occur.

    Again, don't forget F1.


    GENERAL

    The  two  most  important  keys  to  keep  in  mind  when  using Screen
    Formatter  and  Demo Maker are F1 and Escape (Esc).  If you're not sure
    what  to  do  next,  press  F1 for help.  If you don't like what you're
    doing at the moment, press Escape (Esc).

    Use  the sequence file PCDEMO.DMO provided on your distribution disk as
    an  example when first getting started at making your own demos.  Study
    of  it  will  give  you  some  ideas on how to use the PC Demonstration
    System.   (However, you'll only be able to look at the first 10 records
    with the evaluation system.)
















                      PC Demonstration System Version 2.0          Page 15
                                 User's Guide


    ACKNOWLEDGEMENTS

    The  PC  Demonstration System was written using Turbo Pascal by Borland
    International,   Inc.    We  consider  Turbo  Pascal  to  be  the  best
    development system, bar none, for programs of this size or smaller.

    The  Turbo Power Tools by Blaise Computing, Inc. are also used through-
    out  the  programs.    Though  we  had  written  many of the procedures
    included  in  the  Power  Tools  before we ordered the package, we have
    found  no better collection of library routines in terms of consistency
    and organization.

    During   development,   extensive   use  was  made  of  the  TurboPower
    Programmer's  Utilities  by  TurboPower  Software.  These utilities are
    highly recommended for programmers and non-programmers alike.

    To  produce  listings  of  our Turbo Pascal programs, we use the public
    domain  LIST.COM program written by Raymond M. Romanowski of Santa Ana,
    CA.  There is no finer Turbo Pascal list program to be had.











































                      PC Demonstration System Version 2.0          Page 16
                                 User's Guide


    ENHANCEMENTS

    The  following is a partial list of possible enhancements to be made to
    future releases of PC Demonstration System:

        The  ability  to  save  screens from Screen Formatter as ASCII text
        files.

        The  ability  to  include  "snapshots"  of  the  output of graphics
        programs in demos created with PDS.

        The  ability for the demo to have "typing"; that is, the demo would
        look like somebody was keying data into input fields.


    We  welcome  recommendations  and suggestions from REGISTERED USERS for
    enhancing and improving the PC Demonstration System.













































                      PC Demonstration System Version 2.0          Page 17
                                 User's Guide


    BECOMING A REGISTERED USER

    The  PC Demonstration System is distributed as user-supported software.
    The  evaluation version of PC Demonstration System limits sequence file
    size  to  10  records.    It  also has a reminder-to-register screen in
    place  of  a  blank  edit  screen  in  Screen  Formatter.  The enhanced
    version  allows  sequence  files  of  450 records and does not have the
    reminder-to-register screen.

    If  after  evaluating  this  program you find it to be useful, become a
    registered user by sending a $35 payment to:

    Shamrock Microsystems, Inc.
    P.O. Box 26527
    Indianapolis, IN 46226

    Registered users will receive:

        The newest enhanced version of PC Demonstration System.

        Notification  of  updates  and  the option to upgrade for a nominal
        fee (no more than $10).

        Technical support by telephone or letter.

        The  program SHOW.COM, written in assembler and less than 500 bytes
        in  size,  that  will  allow  the  use of screens created by Screen
        Formatter in batch files and even dBase III programs.

        A  supplement  to  the  User's  Guide that gives tips on how Screen
        Formatter screens can be used within their own programs.


    Whether  or  not  you  become  a registered user, you are encouraged to
    make  copies of the evaluation version of PC Demonstration System, with
    the following restrictions:

        All  files  on  the  disk  as distributed by Shamrock Microsystems,
        Inc. must be included on all copies made.

        No  modifications  in any form may be made to the programs or files
        on the disk.

        No  charge  may be made for the copy.  User's groups, public domain
        libraries,  and other not-for-profit groups may charge a fee not to
        exceed $7.


















































































ing restrictions:

        All  files  on  the  disk  as distributed by Sha
```
{% endraw %}

## NOTES665.TXT

{% raw %}
```
Program name:         PC Demonstration System
 
Author name:          Shamrock Micro Systems
Address:              PO Box 26527, Indianapolis, IN 46226
 
Telephone Number:     317-545-7871
 
Suggested Donation:   $ 35.00
 
Program Description:  PC DEMO is a an excellent program designed to put
                      together and display presentations on the system.
                      It would be of interest to salesmen, programmers,
                      teachers and others.
 
                      It consists of three sections :
 
                      1. Screen Formatter - this allows screens or slides
                         to be set up for a demonstration.
 
                      2. Demo Maker       - this sets what sequence the
                         slides are to be displayed in and for how long.
 
                      3. Demo Run         - this displays the demonstration.
 
                      The program is written in Turbo-Pascal and this
                      version is restricted to 10 records per file whereas
                      the copy you get with a donation can hold 400.
 
                      It will run on an XT, AT or compatible and needs
                      256 Kb of memory and DOS 2.0 or above.
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0665

     Volume in drive A has no label
     Directory of A:\

    DEMO     BAT       100   2-24-86  12:51p
    DM       COM     51685   2-22-86   4:20p
    DM       SCN      2300   2-22-86   4:29p
    DMHLP    SCN     12808   2-22-86   4:30p
    DR       COM     20612   2-22-86   4:21p
    FILES665 TXT      1221   1-16-87  12:02p
    GO       BAT       597  12-19-86   3:55p
    MANUAL   DOC     33792   2-24-86  12:19p
    NOTES665 TXT      1399   1-16-87  12:02p
    PCDEMO   001       872   2-22-86   4:33p
    PCDEMO   002       535   2-22-86   4:33p
    PCDEMO   003        65   2-22-86   4:33p
    PCDEMO   004       213   2-22-86   4:33p
    PCDEMO   005       490   2-22-86   4:33p
    PCDEMO   006       644   2-22-86   4:33p
    PCDEMO   007       709   2-22-86   4:33p
    PCDEMO   008       128   2-22-86   4:33p
    PCDEMO   009       168   2-22-86   4:33p
    PCDEMO   010       198   2-22-86   4:33p
    PCDEMO   011       207   2-22-86   4:33p
    PCDEMO   012       406   2-22-86   4:33p
    PCDEMO   013       446   2-22-86   4:33p
    PCDEMO   014       602   2-22-86   4:33p
    PCDEMO   015       667   2-22-86   4:33p
    PCDEMO   016        83   2-22-86   4:33p
    PCDEMO   017       702   2-22-86   4:33p
    PCDEMO   018       827   2-22-86   4:33p
    PCDEMO   019       938   2-22-86   4:33p
    PCDEMO   020      1120   2-22-86   4:33p
    PCDEMO   021      1288   2-22-86   4:33p
    PCDEMO   022       887   2-22-86   4:33p
    PCDEMO   023       763   2-22-86   4:33p
    PCDEMO   024       102   2-22-86   4:33p
    PCDEMO   025       214   2-22-86   4:33p
    PCDEMO   026       219   2-22-86   4:33p
    PCDEMO   027       300   2-22-86   4:33p
    PCDEMO   028       430   2-22-86   4:33p
    PCDEMO   029       575   2-22-86   4:33p
    PCDEMO   030       156   2-22-86   4:33p
    PCDEMO   031       909   2-22-86   4:33p
    PCDEMO   032      1041   2-22-86   4:33p
    PCDEMO   033       715   2-22-86   4:33p
    PCDEMO   034       873   2-22-86   4:33p
    PCDEMO   035       872   2-22-86   4:33p
    PCDEMO   036       893   2-22-86   4:33p
    PCDEMO   037       851   2-22-86   4:33p
    PCDEMO   038       858   2-22-86   4:33p
    PCDEMO   039      1049   2-22-86   4:33p
    PCDEMO   040       144   2-22-86   4:33p
    PCDEMO   041       331   2-22-86   4:33p
    PCDEMO   042       436   2-22-86   4:33p
    PCDEMO   043       513   2-22-86   4:33p
    PCDEMO   044       443   2-22-86   4:33p
    PCDEMO   045        96   2-22-86   4:33p
    PCDEMO   046       984   2-22-86   4:33p
    PCDEMO   DMO      6345   2-10-86   3:33p
    PRINTDOC BAT       211   2-24-86  12:55p
    READ     ME        373   2-24-86   1:01p
    SF       COM     62821   2-23-86   9:00p
    SF       SCN      5184   2-22-86   4:27p
    SFHLP    SCN     28627   2-22-86   4:28p
           61 file(s)     254037 bytes
                           33792 bytes free
