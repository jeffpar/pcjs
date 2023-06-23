---
layout: page
title: "PC-SIG Diskette Library (Disk #880)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0880/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0880"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMMER'S EDITOR"

    PROGRAMMER'S EDITOR is a text editor primarily for programmers.
    
    Many special functions are featured, such as: multiple files and
    windows, DOS file management and program execution, displayable ASCII
    table, ANSI control sequences, insertable control characters, a Hex and
    Decimal calculator, and a calendar.  Extended ASCII characters can be
    used to produce boxes, charts and forms, math signs, and Greek
    characters.  ANSI codes can control cursor movement, color, and other
    display attributes from within a text.  This program has block commands,
    search-and-replace functions, auto indent, word wrap, and line commands.
    
    You can execute commands by using a function key menu at the bottom line
    of the screen, or use control-key sequences from the keyboard.  On-line
    help is available.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0880.TXT

{% raw %}
```
Disk No:  880                                                           
Disk Title: Programmer's Editor                                         
PC-SIG Version: S1.7                                                    
                                                                        
Program Title: Programmer's Editor                                      
Author Version: 1.00                                                    
Author Registration: $35.00                                             
Special Requirements: Printer.                                          
                                                                        
SOFTKEY EDITOR is a text editor primarily for programmers.              
                                                                        
Many special functions are featured, such as: multiple files and        
windows, DOS file management and program execution, displayable ASCII   
table, ANSI control sequences, insertable control characters, a Hex and 
Decimal calculator, and a calendar.  Extended ASCII characters can be   
used to produce boxes, charts and forms, math signs, and Greek          
characters.  ANSI codes can control cursor movement, color, and other   
display attributes from within a text.  This program has block commands,
search-and-replace functions, auto indent, word wrap, and line commands.
                                                                        
You can execute commands by using a function key menu at the bottom line
of the screen, or use control-key sequences from the keyboard.  On-line 
help is available.                                                      
                                                                        
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
║                 <<<<  Disk No 880 SOFTKEY EDITOR  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using the program, type:  COPY README PRN (press enter)        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## HELP1.TXT

{% raw %}
```
                          ╔═══════╗
                         F║ FILE, ║  MAIN MENU SELECTION
                         1║  DIR  ║
                          ╚═══════╝

                                 ╒═════════════════╕
                                 │ THE STATUS LINE │
                                 ╘═════════════════╛
       ┌──────────────────────────────────────────────────────────────────┐
       │W:1 Ln:313  Col:24  File:myfile.txt                   SK AI WW INS│
       └──────────────────────────────────────────────────────────────────┘
        File: The current file name is placed on the status line after a
              Read or Save operation.
        W:    Window number                              AI   AutoIndent
        Ln:   Line number                                WW   WordWrap
        Col:  Column number                              INS  INSert mode
                                                         OVR  OVeRtype mode
                                                         SK   Storing Keys
                                 ╒══════════════╕
                                 │≡≡ CAUTIONS ≡≡│
                                 ╘══════════════╛

       ┌───────┐    The current file is abandoned then the user is
      F│ Read  │    is prompted for a valid file name and the new
      1│ File  │    is read into the editor.
       └───────┘
       ┌───────┐    Rename the current file.
      F│Rename│    Create a new file or save the current file.
      2│ Save  │    "Save File" will overwrite an existing file.
       └───────┘    Save file operates on the file name that is
                    displayed on the status line as shown below:

                    File: YOURFILE.EXT

                    File names are placed on the status line after a Read
                    File, Rename or Save File operation has been performed.
                    If the name displayed on the status line is -New- then
                    the user is prompted for the file name. Save and
                    Create overwrite an existing file.
       ┌───────┐
      F│ Write │    The user is prompted for a valid file name and the
      3│  File │    contents of the current document is written to the file
       └───────┘    name. If the file already exists, the write operation
                    is not done.
       ┌───────┐
      F│ List  │   List the contents of the current directory and select
      4│  Dir  │   a file for read, save, or delete operations. The user
       └───────┘   is prompted for a directory search string. Examples of
                   valid directory search strings are:

                   *.DOC      - Find all files with the DOC extension
                   F*.*       - Find all files beginning with the letter F
                   LETTER.*   - Find all file names beginning with "LETTER"
                                and ending with any extension
                   ?.*        - Find all filenames beginning with a single
                                letter and ending with any extension
                   ??.*       - Find all filenames beginning with 1 OR 2
                                letters and ending with any extension

       ┌───────┐
      F│Change │   Change to a different directory or drive.
      5│  Dir  │
       └───────┘
       ┌───────┐
      F│ Make  │   Create a new directory. The user is prompted for
      6│  Dir  │   the new directory name.
       └───────┘
       ┌───────┐
      F│Insert │   The user is prompted for a file name and the file
      7│ File  │   is inserted into the current file following the
       └───────┘   line that the cursor is on.
       ┌───────┐
      F│Abandon│   Abandon file clears the editor memory and the file
      8│ File  │   name from the current window.
       └───────┘
       ┌───────┐
      F│Delete │   The user is prompted for the file name to be
      9│ File  │   deleted.
       └───────┘
       ┌───────┐
      1│ Main  │   Return to main menu.
      0│       │
       └───────┘
                                    ≡ END ≡
```
{% endraw %}

## HELP10.TXT

{% raw %}
```

                                   ╔═══════╗
                                  F║ User  ║  MAIN MENU SELECTION
                                  6║Options║
                                   ╚═══════╝



               ┌───────┐
      CTRL B  F│ Store │ Begin storing keystrokes. It is recommended
              3│ Keys  │ that the first keystroke typed is CTRL U, which
               └───────┘ puts the editor in a predefined starting mode.
               ┌───────┐
      CTRL E  F│ End   │ Stop storing keystrokes. The user is prompted
              4│ Store │ to enter a letter to be assigned to the macro.
               └───────┘ The keystrokes are then stored in a file named
                         *.MAC where * is the letter that was entered.
               ┌───────┐
      CTRL R  F│Replay │ Replays the currently loaded keystrokes or
              5│ Keys  │ keystroke file. When F5 is used, the user is
               └───────┘ prompted to enter the macro letter. When CTRL R
                         is used, the letter must still be entered, but
                         there is no prompt.
               ┌───────┐
              F│^ Color│ Force color display mode
              8│ Mono  │ Force monochrome display mode
               └───────┘
               ┌───────┐
              F│^ HiRes│ EGA 43 line or VGA 50 line mode
              9│ 80X25 │ 80 columns and 25 lines
               └───────┘
```
{% endraw %}

## HELP3.TXT

{% raw %}
```

                          ╔═══════╗
                         F║ Text, ║  MAIN MENU SELECTION
                         4║ Cmds  ║
                          ╚═══════╝

                                 ╒═════════════════╕
                                 │ THE STATUS LINE │
                                 ╘═════════════════╛
       ┌──────────────────────────────────────────────────────────────────┐
       │W:1 Ln:313  Col:24  File:myfile.txt                   SK AI WW INS│
       └──────────────────────────────────────────────────────────────────┘
        File: The current file name is placed on the status line after a
              Read or Save operation.
        W:    Window number                              AI   AutoIndent
        Ln:   Line number                                WW   WordWrap
        Col:  Column number                              INS  INSert mode
                                                         OVR  OVeRtype mode
                                                         SK   Storing Keys

        The INS key (located on the keypad) toggles INSert and overtype
        modes. In insert mode, characters are inserted into the text at
        the current cursor location. In overtype mode, characters typed
        on the keyboard replace the characters in the text. The DEL key
        (also  located  on  the  keypad)  deletes  the character at the
        current cursor location. The backspace key deletes the previous
        character.


           ┌───────┐
          F│Insert │ Insert a line above the current line.
          1│ Line  │
           └───────┘                                                   ≡ MORE ≡

           Also, to insert a line following the current line, move the
           cursor to the end of the line and press return. You must be
           in INSERT mode to insert a line by pressing return.

           ┌───────┐
          F│Delete │ Deletes the current line. CTRL Y also deletes the
          2│ Line  │ current line.
           └───────┘

           ┌───────┐
          F│Restore│ Restores up to the last 20 deleted lines. The
          3│ Line  │ ESC key may also be used to perform this function.
           └───────┘

           ┌───────┐
          F│ Join  │ Join the following line to the current line. This
          4│ Lines │ function may also be performed by presssing the
           └───────┘ DEL key when the cursor is positioned at the end
                     of the current line.

           ┌───────┐
          F│SetRght│ Used to set the column number for the right margin
          5│Margin │ when the word wrap (WW) mode is selected.
           └───────┘

           ┌───────┐
          F│Delete │ Delete text starting at the current cursor location
          6│to EOL │ to the end of the current line. ALT Z may also be
           └───────┘ used to perform this function.


           ┌───────┐ Toggle the auto indent mode on or off. Auto indent
          F│ Auto  │ aligns the cursor with the left margin of the previous
          7│ Indent│ line after the return key is pressed. To move to
           └───────┘ column 1 of a blank line while in auto indent mode,
                     press the home key.
           ┌───────┐
          F│ Word  │ Automatically moves words which extend beyond the
          8│ Wrap  │ right margin to the following line.
           └───────┘
           ┌───────┐
          F│  Tab  │ Set the tab width and the number of spaces the cursor
          9│ Width │ is moved when CTRL <- or CTRL -> is pressed. The tab
           └───────┘ locations are fixed according to the tab width
                     selection.
           ┌───────┐
          1│ Menu  │ Return to main menu.
          0│       │
           └───────┘

                                ┌─────────────────┐
                                │ OTHER TEXT KEYS │
                                └─────────────────┘

          ╔═══════╗
          ║ Tab   ║          Insert tab (when in insert mode) otherwise
          ╚═══════╝          move the cursor right by tab width.

    ┌──────────────┐
    │ CONTROL KEYS │
    └──────────────┘
          ╔═════╗          ┌───────────────────────────────────────────┐
          ║ Esc ║          │ Undo line deletion(s) and cancel commands │
          ╚═════╝          └───────────────────────────────────────────┘
      ┌────────────────────────────────────────────────────────────────┐
      │   Ctrl Left Arrow    Move the cursor left by tab width.        │
      │   Ctrl Right Arrow   Move the cursor right by tab width.       │
      │     Ctrl M           Carriage Return                           │
      │     Ctrl I           Tab                                       │
      │     Ctrl H           Backspace                                 │
      │     Ctrl W           Delete Word                               │
      │     Ctrl Y           Delete Line                               │
      │     Alt  P           Page Break                                │
      └────────────────────────────────────────────────────────────────┘

                                    ≡ END ≡
```
{% endraw %}

## HELP4.TXT

{% raw %}
```

                          ╔═══════╗
                         F║ Block ║  MAIN MENU SELECTION
                         3║ Cmds  ║
   ALT                    ╚═══════╝
   KEY      SOFTKEYS
           ┌───────┐
  Alt B   F│ Begin │ Mark the beginning of a block of text.
          1│ Block │
           └───────┘
           ┌───────┐
  Alt E   F│ End   │ Mark the end of a block of text.
          2│ Block │
           └───────┘
           ┌───────┐
  Alt C   F│ Copy  │ Copy the marked block following the current
          3│ Block │ cursor location. Blocks may be copied from
           └───────┘ one window to another.
           ┌───────┐
  Alt M   F│ Move  │ Move the marked block following the current
          4│ Block │ cursor location. Blocks may be moved from
           └───────┘ one window to another.
           ┌───────┐
  Alt U   F│UpCase│ Shift-F5 converts block to upper case.
  Alt L   5│LoCase │ F5 converts block to lower case.
           └───────┘
           ┌───────┐
  Alt H   F│MoveBlk│ Use the left and right arrow keys after marking a block
          6│ <- -> │ and pressing this softkey to move the block left or right.
           └───────┘ Only the last line of the block will move on the display,
                     although all of the text in the block is being moved.
                     Press the space bar or the MoveBlk key to cancel. All of
                     the text in the block will now be displayed in its new
                     location.
           ┌───────┐
  Alt W   F│ Write │ Write the marked block to a file.
          7│ Block │
           └───────┘
           ┌───────┐
  Alt X   F│Cancel │ Cancels block definition only. Does not move, copy or
          8│ Block │ delete any text.
           └───────┘
           ┌───────┐
  Alt D   F│Delete │ Delete the marked block.
          9│ Block │
           └───────┘

                                     ≡ END ≡
```
{% endraw %}

## HELP5.TXT

{% raw %}
```

                              ┌────────────────┐
                              │ RPN CALCULATOR │
                              └────────────────┘

          MAIN
          MENU
          SELECTION       PRESS        USE
          ╔═══════╗      ╔══════╗
         F║ Calc  ║      ║ Num  ║      Numeric Key Pad
         6║       ║      ║ Lock ║
          ╚═══════╝      ╚══════╝

      If Num Lock is not activated then the arrow keys, and other cursor
      position keys will function normally while in calc mode.

      Use the "+" key to enter the first number.
      To clear the current entry, press "Clear Entry".
      To clear both the current entry and the current result, press
      "0" and then "*".
      To clear everything, press "Clear All".

     ┌───────────────────────────────────────────────────────────────────────┐
     │ The calculator uses Reverse Polish Notation. To use RPN, it is        │
     │ necessary to enter the two numbers to be operated on and then enter   │
     │ the operation  (+ - * ÷). The  + - * /  keys enter numbers into the   │
     │ calculator entry register and add, subtract, multiply or divide the   │
     │ numbers that are in the entry register and the result register.       │
     │ For example:                                                          │
     │                                                                       │
     │┌────User Input───────┐┌───Registers──┐                                │
     ││Press  and then press││Entry │ Result│                                │
     ││─────           ──── │├──────┼───────┤                                │
     ││  2               +  ││   2  │   2.00│                                │
     ││  3               +  ││   3  │   5.00│                                │
     ││  5               *  ││   5  │  25.00│                                │
     ││                  +  ││   5  │  30.00│ (The number 5 is still stored  │
     ││                  -  ││   5  │  25.00│ in the entry register and may  │
     ││                  *  ││   5  │ 125.00│ be used without entering it    │
     ││                  /  ││   5  │  25.00│  for each calculation.)        │
     │└─────────────────────┘└──────┴───────┘                                │
     │ Calculation  results may be inserted  into documents  by pressing the │
     │ "Insert Result"  softkey.  Spaces, tabs, and carriage returns may be  │
     │ inserted into the document while the calculator is displayed.         │
     │                                                                       │
     │ When exiting the calculator function, the calculator register and     │
     │ memory values are saved for the next calculator session.              │             │ ∞
     │                                                                       │
     │ The '<' and '>' keys perform a binary shift left and shift right.     │
     └───────────────────────────────────────────────────────────────────────┘
                                    ≡ END ≡
```
{% endraw %}

## HELP6.TXT

{% raw %}
```

                          ╔═══════╗
                         F║Search,║  MAIN MENU SELECTION
                         2║ Goto  ║
   ALT                    ╚═══════╝
   KEY      SOFTKEYS
           ┌───────┐
  Alt S   F│Search │ The user is prompted for a string to search for.
          1│       │ All control characters except ESC and CR may be
           └───────┘ used in the search string. Extended ascii characters
                     may also be specified by pressing the ALT key and
                     typing the character code on the numeric keypad.
                     Search parameters (B)ackwards and (I)gnore case may
                     be specified when the user is prompted to enter them.

           ┌───────┐
  Alt R   F│Search,│ Search for and replace a string. Parameters
          2│Replace│ (A)ll, (F)irst, (N)o prompt for replacement, and
           └───────┘ (S)how changes may be specified when the user is
                     prompted to enter them. Carriage returns may be
                     put into the replace string by using the
                     character combination ^M (caret M).

           ┌───────┐
  Alt N   F│Rep,Fnd│ If Search or Replace (F)irst was specified, the
          3│ Next  │ Search or Replace operation may be continued by
           └───────┘ pressing this key.

           ┌───────┐
  Alt L   F│ Goto  │ The user is prompted to enter a line number and
          4│ Line  │ the cursor will be moved to the specified line.
           └───────┘
           ┌───────┐
  Ctrl    F│ Goto  │ Moves the cursor to the beginnig of the file.
  Home    5│  Top  │
           └───────┘
           ┌───────┐
  Ctrl    F│ Goto  │ Moves the cursor to the end of the file.
  End     6│  End  │
           └───────┘
           ┌───────┐
  Ctrl S  F│  Set  │ Sets a bookmark at the current line.
          7│Marker │
           └───────┘
           ┌───────┐
  Ctrl T  F│ Goto  │ Moves the cursor to the previously set bookmark.
          8│Marker │
           └───────┘

                                    ≡ END ≡
```
{% endraw %}

## HELP7.TXT

{% raw %}
```

                          ╔═══════╗
                         F║Special║  MAIN MENU SELECTION
                         9║ Chars ║
                          ╚═══════╝

   ┌──────────┐
   │ SOFTKEYS │
   └──────────┘
     ┌──────────────────────────────────────────────────────────────────┐
     │ When the up arrow symbol () is displayed in a softkey label     │
     │ use the shift key in combination with the function key.          │
     └──────────────────────────────────────────────────────────────────┘
   ┌────────────┐
   │ ANSI CODES │
   └────────────┘
     ┌───────────────────────────────────────────────────────────────────────┐
     │ ANSI  codes  may be placed  into a file  to control  cursor movement, │
     │ color  and other display  attributes.  Text or graphic characters may │
     │ also be placed in the file.  To execute the file use the  DOS  "type" │
     │ command. In batch files use the  "echo"  command followed by the ANSI │
     │ code.                                                                 │
     └───────────────────────────────────────────────────────────────────────┘
     ┌───────┐
    F│ Page  │        Insert the page break () character into a document.
    1│ Break │
     └───────┘
     ┌───────┐
    F│Escape │        Inserts the escape () character into your file.
    2│ Char  │
     └───────┘
     ┌───────┐
    F│ Erase │        Inserts "<-[2J",  which is the ANSI code to clear the
    3│Display│        screen.
     └───────┘
     ┌───────┐
    F│ Move  │        Inserts  "<-[Y;XH",  where "Y" must be changed to the
    4│Cursor │        desired line number and  "X"  must be changed  to the
     └───────┘        desired column number.
     ┌───────┐
    F│ Set   │        Inserts  "<-[Am"  to turn on an  attribute.  The  "A"
    5│ Attrib│        character must be replaced with the desired attribute
     └───────┘        number.
     ┌───────┐
    F│ Set   │        Inserts  "<-[B;Fm",  where  "B"  is a background ANSI
    6│ Colors│        color number and  "F"  is the foreground  ANSI  color
     └───────┘        selection.  The "B/F"  color values may be set to any
                      value defined by the ANSI standard.
     ┌───────┐
    F│Insert │        Inserts control characters into the document.  Use
    7│CtrlChr│        the CTRL CHAR help key for the list of valid control
     └───────┘        characters.

   ┌────────────────────┐
   │ SPECIAL CHARACTERS │   The following characters and 72 more extended
   └────────────────────┘   ascii characters are available in the Special
                            Chars softkey menus.
     ┌───────┐
    F│   ░  │        Press Shift F8 for the top character or press F8 to
    8│  ▒    │        insert the bottom character into the file.
     └───────┘
     ┌───────┐
    F│   ▓  │        Press Shift F9 to insert the top character into a
    9│  █    │        file or F9 to insert the bottom character.
     └───────┘
     ┌───────┐
    1│ Menu │        Press Shift F10 to return to the main softkey
    0│ Next  │        menu or press F10 to go to the next lower level menu.
     └───────┘

                              ┌────────────────────┐
                              │ CONTROL CHARACTERS │
                              └────────────────────┘
          MAIN
          MENU          FUNCTION
          SELECTION     SELECTION        PROMPT
          ╔═══════╗     ┌───────┐        ╔═════════════════════╗
         F║Special║    F│Insert │        ║Press CTRL + Key:    ║
         9║ Chars ║    7│CtrlChr│        ╚═════════════════════╝
          ╚═══════╝     └───────┘


           The following control characters may be inserted into files:

           CTRL A thru CTRL Y (except ^G, ^H, ^J, ^M)

                                     ≡ END ≡
```
{% endraw %}

## HELP8.TXT

{% raw %}
```

                          ╔═══════╗
                         F║Special║  MAIN MENU SELECTION
                         8║ Tools ║
                          ╚═══════╝

                               ╒═════════════╕
                               │≡≡ CAUTION ≡≡│
                               ╘═════════════╛
      ┌───────┐
      │Run DOS│  Non recoverable errors while running the DOS program
      │Program│  will result in loss of the editing session. Save work
      └───────┘  before using Run DOS.


      FUNCTION


      ┌───────┐
     F│Run DOS│  Jumps directly to DOS.
     4│Program│
      └───────┘

      ┌───────┐
     F│Cal-   │ Use the up and down arrow keys to advance or go back
     7│  endar│ one month. Press any other key to exit. The calendar
      └───────┘ range is from January 1980 to December 2099.

      ┌───────┐
     F│ File  │ - ASCII FILTER  reads a source file  and writes to a
     8│Filters│ user specified output file. Control characters in the
      └───────┘ source file are replaced with a space character in the
                output file except for the following characters which
                are copied directly from the input file to the output
                file: 32 to 168, CR, LF, FF. In addition, the extended
                ascii box drawing characters are converted to "-", "+",
                "#" or "|" symbols where appropriate. This will allow
                printing the file SE.DOC or other files which contain
                extended ascii characters on a printer which does not
                support the extended ascii character set.
                - TAB FILTER expands tabs according to a user specified
                tab width and writes to the user specified output file.
      ┌───────┐
     F│  DOS  │ The user is prompted for the filename to print and the
     9│ Print │ DOS print command is executed. Printer port 1 is used.
      └───────┘

                                    ≡ END ≡
```
{% endraw %}

## HELP9.TXT

{% raw %}
```

                          ╔═══════╗
                         F║Window ║  MAIN MENU SELECTION
                         5║ Cmds  ║
                          ╚═══════╝

                                 ╒═════════════════╕
                                 │ THE STATUS LINE │
                                 ╘═════════════════╛
       ┌──────────────────────────────────────────────────────────────────┐
       │W:1 Ln:313  Col:24  File:myfile.txt                      AI WW INS│
       └──────────────────────────────────────────────────────────────────┘
        W:n  -  Window number

        Block keys are included in this menu because blocks may be
        moved or copied between windows. Blocks may be deleted only
        in the current window.

     ALT OR
     CTRL
     KEY     SOFTKEYS
            ┌───────┐
      ALT  F│ Begin │ Mark the beginning of a block of text.
       B   1│ Block │
            └───────┘
            ┌───────┐
      ALT  F│ End   │ Mark the end of a block of text.
       E   2│ Block │
            └───────┘
            ┌───────┐
      ALT  F│ Copy  │ Copy the marked block following the current cursor
       C   3│ Block │ location.
            └───────┘
            ┌───────┐
      ALT  F│ Move  │ Move the marked block following the current cursor
       M   4│ Block │ location.
            └───────┘
            ┌───────┐
     CTRL  F│Create │ If the current window is not split, the user is
      C    5│Window │ prompted for Vertical, Horizontal, or Full (stacked)
            └───────┘ window creation. If the current window is split, the
                      next window created will be a full screen (stacked)
                      window. The maximum number of windows is 9.

            ┌───────┐
     CTRL  F│Delete │ The user is prompted for the window number to delete.
      D    6│Window │ The current window may not be deleted.
            └───────┘
            ┌───────┐
     CTRL  F│ Prev  │ Move to the previous window.
      P    7│Window │
            └───────┘
            ┌───────┐
     CTRL  F│ Next  │ Move to the next window.
      N    8│Window │
            └───────┘
            ┌───────┐
     CTRL  F│ Goto  │ The user is prompted for the window number to go to.
      G    9│Window │
            └───────┘

                                    ≡ END ≡
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0880

     Volume in drive A has no label
     Directory of A:\

    HELP1    TXT      4163  11-27-89   1:33p
    HELP10   TXT      1448   8-05-88  10:36p
    HELP2    TXT      9904  11-27-89   1:33p
    HELP3    TXT      5236   8-05-88  10:34p
    HELP4    TXT      1961   7-09-88  10:16p
    HELP5    TXT      3081   7-09-88  10:17p
    HELP6    TXT      2111  11-27-89   1:35p
    HELP7    TXT      3876   7-09-88  10:18p
    HELP8    TXT      2014   8-05-88  10:35p
    HELP9    TXT      2382   7-09-88  10:20p
    INSTALL  EXE      6176  11-18-89   9:36a
    INSTALL  PE       8770   4-06-90   9:14a
    PE       DOC     22480   5-01-90   8:45p
    PE       EXE    108240   5-29-90   7:47p
    PEINSTAL EXE     22080  11-18-89   9:28a
    README            8557   4-23-90   7:16p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       575   7-09-90  12:27a
    FILE0880 TXT      2147   7-09-90   6:11p
           19 file(s)     215239 bytes
                           96256 bytes free
