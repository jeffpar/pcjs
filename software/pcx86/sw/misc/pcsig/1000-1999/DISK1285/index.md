---
layout: page
title: "PC-SIG Diskette Library (Disk #1285)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1285/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1285"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "POWER SHEETS 2 OF 2 (ALSO 1284)"

    PC Magazine calls POWER SHEETS ``the most powerful, pure spreadsheet on
    the market'' and labels it ``easy to use.''  Corporations such as Ford,
    AMOCO and First Chicago are using it to develop sophisticated turnkey
    applications beyond the capabilities of other spreadsheets.
    
    POWER SHEETS offers three-dimensional data presentations with the
    ability to rotate the data cube to view slices in other orientations.  A
    special language gives POWER SHEETS programmability.  Pop-up menus guide
    users through all functions.
    
    Other spreadsheets operate on ranges; POWER SHEETS goes further, using
    lists involving a combination of ranges, cell references, or formulae.
    Another feature allows it to base the bounds of a range on the values of
    other cells, and provides for true date and time math.  All functions
    are fully recursive and can be nested to any depth.  The upshot is the
    availability of 16 million cells.
    
    POWER SHEETS reads and writes .DIF files either row-wise or column-wise.
    It reads and writes ASCII files either non-delimited or delimited with
    any choice of delimiters.  Its rich function library includes trig and
    log functions, statistical and Boolean functions, yes-no-maybe logic,
    and sophisticated case function.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1285.TXT

{% raw %}
```
Disk No: 1285
Program Title:  POWER SHEETS version 2.25 (Disk 2 of 2)
PC-SIG version: 1

This is the second of the two-disk package, POWER SHEETS.  See disk
#1284 for a full program description..  Both are required to run the
program.

Usage:  Spreadsheet.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $19.95 (Another $10.00 is required for a full
year's consultation.

File Descriptions:

READ     ME   Brief program description.
PS       DOC  User guide.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║  <<<<  Disk No 1285  POWER SHEETS version 2.25 (Disk 2 of 2)  >>>>      ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To run the program, insert disk #1284 and type:                       ║
║                                                                         ║
║             GO (press enter)                                            ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PS.DOC

{% raw %}
```









                             Guide to Power Sheets (TM)
                                   version 2.25E
                              IBM and 100% compatibles

             Copyright 1980, 1983, 1984, 1987, 1988 Datamension Corporation
                               Copyright 1988 Al Baker
                                 All Rights Reserved


               Power Sheets is a Shareware Distribution of Report Manager
                      From the Original Author with Permission
                            From Datamension Corporation



                      Report Manager is a registered trademark
                             of Datamension Corporation




                                    Distributed by
                                       Al Baker
                                   3936 Sunset Lane
                                 Northbrook, IL 60062

                                    (312) 480-9505




























                                       1.                     06/14/88




                                                           Guide to PS





                                      CONTENTS

                                                            Page
                   PS AT-A-GLANCE. . . . . . . . . . . . . .   3
                   PS COMMAND SUMMARY. . . . . . . . . . . .   6
                   PS HELP SYSTEM. . . . . . . . . . . . . .   8
                   PS SCREEN . . . . . . . . . . . . . . . .   9
                   MOVING THE CURSOR . . . . . . . . . . . .  10
                   PS DATA CUBE. . . . . . . . . . . . . . .  11
                   RANGES & LISTS. . . . . . . . . . . . . .  12
                   PS' THREE MODES . . . . . . . . . . . . .  13
                   MAKING ENTRIES. . . . . . . . . . . . . .  14
                   PS FUNCTION KEYS. . . . . . . . . . . . .  16
                   READY MODE COMMANDS . . . . . . . . . . .  17
                   EDIT MODE COMMANDS. . . . . . . . . . . .  19
                   COMMAND MODE COMMANDS . . . . . . . . . .  21
                   I/O COMMANDS. . . . . . . . . . . . . . .  37
                   VALID CELL REFERENCES . . . . . . . . . .  39
                   OPERATORS & PRECEDENCE. . . . . . . . . .  41
                   PREPROGRAMMED FUNCTIONS . . . . . . . . .  42
                   TRIGONOMETRIC FUNCTIONS . . . . . . . . .  47
                   LOGARITHMIC FUNCTIONS . . . . . . . . . .  48
                   INTERACTIVE (EXEC) FUNCTIONS. . . . . . .  49
                   PS EXEC . . . . . . . . . . . . . . . . .  50
                   EXEC PROGRAM STATEMENTS . . . . . . . . .  51
                   EXEC KEYSTROKE FACILITIES . . . . . . . .  54
                   COMMAND LINE PARAMETERS . . . . . . . . .  55




























                                       2.                     06/14/88




                                                           Guide to PS





                                   PS AT-A-GLANCE

          ------------------------------------------------------------
          To start PS                            a:ps Enter
          ------------------------------------------------------------
          To exit PS and return to DOS           Ctrl-QY
          ------------------------------------------------------------
          Default drive for data                 b:
          ------------------------------------------------------------
          To change drive for data               See p. 37
          ------------------------------------------------------------
          Disk storage required  for PS          261Kb
          ------------------------------------------------------------
          Minimum RAM required to run PS         256Kb
          ------------------------------------------------------------
          RAM used when you start PS             70Kb
          ------------------------------------------------------------
          Memory management type                 Dynamic
          ------------------------------------------------------------
          Page consolidation type                Automatic
          ------------------------------------------------------------
          Recalculation method                   Automatic
          ------------------------------------------------------------
          Recalculation order                    Natural
          ------------------------------------------------------------
          Recalculation precision                9
          ------------------------------------------------------------
          Exponent range                         -99 to +99
          ------------------------------------------------------------
          On-screen column-width indicator?      Yes
          ------------------------------------------------------------
          Help key                               Function key F1
          ------------------------------------------------------------
          Number of columns                      255 (A thru IU)
          ------------------------------------------------------------
          Number of rows                         255 (1 thru 255)
          ------------------------------------------------------------
          Number of pages (memory resident)      255 (A thru IU)
          ------------------------------------------------------------
          Total number of cells                  16,581,375
          ------------------------------------------------------------
          Cell reference (address) types         5
          ------------------------------------------------------------
          Sample absolute cell reference:
          "The cell at column A, row 1, page A"  A1A
          ------------------------------------------------------------
          Sample relative cell reference:
          "The cell 2 cells to the right,







                                       3.                     06/14/88




                                                           Guide to PS





          4 down, and 6 behind cell B1A"         @(2,4,6,B1A)
          (The values 2, 4, and 6 may be
          computed from formulas.)
          ------------------------------------------------------------
          Sample current-cell reference:
          "The cell where the cursor is"         &
          ------------------------------------------------------------
          Sample labeled cell:
          "The cell for total profits"           %PROFITS
          ------------------------------------------------------------
          Sample reserved-word cell reference:
          "The next cell that contains data"     NEXT
          ------------------------------------------------------------
          Sample range, 1-dimensional            A1A.A22A
          ------------------------------------------------------------
          Sample range, 2-dimensional            A1A.H22A
          ------------------------------------------------------------
          Sample range, 3-dimensional            A1A.H22E
          ------------------------------------------------------------
          Highlight ranges?                      Yes
          ------------------------------------------------------------
          Sample list (used by functions)        A1A*3,B4A,B1B.B5F
          ------------------------------------------------------------
          Average bytes/cell overhead            20b (appx.)
          ------------------------------------------------------------
          Number of characters per cell          127 (max.)
          ------------------------------------------------------------
          Number of commands                     120
          ------------------------------------------------------------
          Number of functions                    76
          ------------------------------------------------------------
          Number of EXEC (macro) statements      33
          ------------------------------------------------------------
          EXEC (macro) location                  Cells or disk file
          ------------------------------------------------------------
          Sort types                             Column, page, row
          ------------------------------------------------------------
          Sort keys                              3
          ------------------------------------------------------------
          Search for keyword?                    Yes (/K, then Tab)
          ------------------------------------------------------------
          Link files?                            Yes (/SXR)
          ------------------------------------------------------------
          Protect files with password?           Yes (/GP)
          ------------------------------------------------------------
          Export ASCII files?                    Yes (/EP)
          ------------------------------------------------------------
          Import ASCII files?                    Yes (/SXD)







                                       4.                     06/14/88




                                                           Guide to PS





          ------------------------------------------------------------
          Export DIF files?                      Yes (/SXO)
          ------------------------------------------------------------
          Import DIF files?                      Yes (/SXI)
          ------------------------------------------------------------
          Does calc pause to accept user input?  Yes
          ------------------------------------------------------------
          Can cursor outpace screen redraw?      Yes
          ------------------------------------------------------------
          Are PS production disks copyable?      Yes
          ------------------------------------------------------------
          Will PS run from a hard drive?         Yes
          ------------------------------------------------------------










































                                       5.                     06/14/88




                                                           Guide to PS





                                 PS COMMAND SUMMARY

          ------------------------------------------------------------
          Operation:                       Command from ready mode:
          ------------------------------------------------------------
          Align text or number             /FL or /FR
          ------------------------------------------------------------
          Blank (clear) data               /B
          ------------------------------------------------------------
          Calc off                         /GN
          ------------------------------------------------------------
          Calc on                          /GC
          ------------------------------------------------------------
          Clear (blank) all data           /C
          ------------------------------------------------------------
          Copy (replicate) data            /R
          ------------------------------------------------------------
          Delete column, row, page         /D
          ------------------------------------------------------------
          Export ASCII file                /EP
          ------------------------------------------------------------
          Export DIF file                  /SXO
          ------------------------------------------------------------
          Format commas                    /F, or /GF,
          ------------------------------------------------------------
          Format integers                  /FI or /GFI
          ------------------------------------------------------------
          Format dollar signs              /F$ or /GF$
          ------------------------------------------------------------
          Goto a cell                      @ (shift 2)
          ------------------------------------------------------------
          Help                             Function key F1
          ------------------------------------------------------------
          Import ASCII file                /SXD
          ------------------------------------------------------------
          Import DIF file                  /SXI
          ------------------------------------------------------------
          Insert column, row, page         /I
          ------------------------------------------------------------
          Keyword search                   /K then Tab
          ------------------------------------------------------------
          Load a file                      /SL or function key F7
          ------------------------------------------------------------
          Margins of printout              /PSP
          ------------------------------------------------------------
          Numeric (formula) entry          + = or ;
          ------------------------------------------------------------
          Print data                       /PT or function key F5







                                       6.                     06/14/88




                                                           Guide to PS





          ------------------------------------------------------------
          Quit PS                          Ctrl-QY
          ------------------------------------------------------------
          Replicate (copy) data            /R
          ------------------------------------------------------------
          Save data                        /SS or function key F9
          ------------------------------------------------------------
          Sort data                        /O
          ------------------------------------------------------------
          Textual (label) entry            ' (apostrophe)
          ------------------------------------------------------------
          Width of column                  /FW or /GW
          ------------------------------------------------------------










































                                       7.                     06/14/88




                                                           Guide to PS





                                   PS HELP SYSTEM

          Function key F1 is the help key.  During most PS operations, you
          may press function key F1 to see a screen containing options and
          context-sensitive guidance.

          The next keystroke removes the help screen.  If you press
          function key F1, PS returns to your previous place in the
          program.  If you press Esc, PS cancels the current command, and
          returns to ready mode.  If you press the next key in the command
          sequence, PS processes that keystroke.












































                                       8.                     06/14/88




                                                           Guide to PS





                                      PS SCREEN

          When you start PS, you see a screen bordered by letters and
          numbers.  Letters across the top identify columns; numbers along
          the left edge identify rows.

          The bright rectangle in the upper left is the screen cursor. It
          marks a cell. A cell is the intersection of a column, row, and
          page.  You can move the cursor from cell to cell.

          The two lines at the screen bottom are the status lines.  The
          indicators here provide information as you work.

          P:A1A
          This indicates the position of the cursor.  When you start PS,
          the cursor is at cell A1A (column A, row 1, page A).  This
          indicator changes when you move the cursor.  The P: means PS is
          in the page view.

          W9
          The width indicator always shows the width of the current column.
          The default is nine characters.  W9 means the current column is 9
          characters wide.

          99.9%
          This indicator tells you how much memory is left.  As you put
          data into PS, this percentage drops.

          1Help, 3Run, etc.
          These indicators remind you how PS uses function keys. Refer to
          PS FUNCTION KEYS, p. 16.

          Last file:
          The name of the last file acted upon by a storage command shows
          here.

          READY
          This mode indicator shows PS is in ready mode.  Other modes
          include command (CMD) and edit (EDIT).
















                                       9.                     06/14/88




                                                           Guide to PS





                                  MOVING THE CURSOR

          When you first start PS, the cursor is at cell A1A.  To move the
          cursor to cell A1 on page B, press the PgDn key.  The indicator
          on the first status line now shows P:A1B. PS has 255 pages, named
          A thru IU.  To move back to page A, press PgUp.  The indicator
          now shows P:A1A.

          Therefore, to move the cursor from page to page, press PgUp and
          PgDn.

          To move the cursor right to column B, press the right-arrow key
          on the numeric keypad.  The indicator shows P:B1A.  To move back
          to column A, press left-arrow.  To move down a row press down-
          arrow; to move up, press up-arrow.

          As you press an arrow key, the cursor moves in the arrow's
          direction. The indicator also changes to show your current
          location, i.e., the current cell.

          Therefore, to move the cursor across columns and rows, press the
          arrow keys.

          There are still other ways to move the cursor.  Refer to READY
          MODE COMMANDS, p. 17.






























                                      10.                     06/14/88




                                                           Guide to PS





                                    PS DATA CUBE

          As you can see, PS is a workbook composed of columns, rows, and
          pages. This workbook is called a data cube.

          A cell is the intersection of a column, row, and page in the data
          cube. A cell reference is the "address" of a cell in the cube.
          For example, starting at A1A, the cell 3 columns to the right, 3
          rows down, and 2 pages in, is cell D4C.

          PS has up to 255 columns (A-IU), 255 rows (1-255), and 255 pages
          (A-IU).  In all, there are over 16,000,000 cells in PS.

          Therefore, D4C is a cell reference composed of three coordinates.
          D is the column coordinate, 4 is the row coordinate, and C is the
          page coordinate.  The first, second, and third coordinates always
          represent column, row, and page, respectively.

          Cell references are important because you use them to build
          formulas and select commands.

          There are other ways to form cell references.  Refer to VALID
          CELL REFERENCES, p. 39.
































                                      11.                     06/14/88




                                                           Guide to PS





                                   RANGES & LISTS

          Very often you need to define sections of the data cube when you
          build formulas and select commands.

          Ranges

          A cell range is a set of contiguous cells.

          To type a range, type two cell references separated by a period.
          Do not put a space before or after the period.  The first cell
          reference is the range's beginning; the second is its end.  You
          may use any valid cell reference (p. 39) in a range.

          For example, when you select the /BT command, you see the prompt,
          "Blank To-cell?".  This is PS's way of asking you to define a
          section of the cube, i.e., to type a range. A typical response is
          the range A1A.H22A Enter.  This erases all the cells between A1A
          and H22A.

          Lists

          A list is a non-contiguous set of cells and values.

          To type a list, type the items in the list separated by commas.
          Do not put a space before or after the comma.  Items in a list
          may be valid cell references (p. 39), ranges, or numeric values
          which include formulas.

          For example, the SUM() function acts on a list.  The function
          sum(A1A,500,C1A.C10A), adds together the value of A1A, the value
          500, and the sum of the values in C1A through C10A.























                                      12.                     06/14/88




                                                           Guide to PS





                                  PS' THREE MODES

          PS has three basic modes of operation, the ready, edit, and
          command modes.

          When you use PS, you establish mathematical relationships among
          cells.  This process involves three basic steps:

          1) In the ready mode you move the cursor to a cell.

          2) Then you enter the edit mode to put data in the cell.

          You then repeat the first two steps for other cells.

          3) Finally, you select the slash commands to manipulate the data
          you entered.  These commands let you save, load, erase, copy, and
          sort the data you entered.






































                                      13.                     06/14/88




                                                           Guide to PS





                                   MAKING ENTRIES

          To make an entry, move to the cell where you want to put data.

          You enter the edit mode when you press the first keystroke in
          your entry.  At this point, the READY indicator changes to EDIT,
          and you see your first keystroke on the edit line at the bottom
          of the screen highlighted by the edit cursor.

          Continue typing your entry.  When you finish, press Enter.  This
          makes PS accept your entry.  You now see your entry on the edit
          line and in the data area in the top part of the screen.  The
          EDIT indicator changes back to READY.  When you move the screen
          cursor you no longer see the entry on the edit line, but it
          remains in the data area.

          While in edit mode, if you want to discard what you typed, press
          Esc (instead of Enter).  This cancels your entry, and restores
          the previous contents of the cell. The EDIT indicator also
          changes back to READY.

          You may use different keys to enter the edit mode from the ready
          mode. These keys are summarized in READY MODE COMMANDS, p. 17.

          While you make entries, the edit mode commands are available to
          help you type. These commands are summarized in EDIT MODE
          COMMANDS, p. 19.

          You may enter several kinds of data into PS, namely, numbers,
          text, dates, times, and formulas.

          Entering Numbers

          To put a number in a cell, move the cursor to the cell, type the
          number (omit commas and dollar signs), and press Enter.

          Entering Text

          Move to the cell, type the text, and press Enter.  If the text
          begins with a number, first press the apostrophe ('), type the
          text, and press Enter.

          Entering Dates

          Move to the cell, type the date in digital form, separating
          month, day, and year digits with the apostrophe ('), not the
          slash, and press Enter.  For example, enter Feb. 9, 1988, as
          2'9'88.







                                      14.                     06/14/88




                                                           Guide to PS





          Entering Times

          Move to the cell, and type the time in 24-hour format, separating
          hours, minutes, and seconds with colons (:), and press Enter.
          For example, enter 2pm as 14:00:00.

          Entering Formulas

          When you enter formulas, you really begin to use the power of PS.

          A formula is a joining together of numbers, dates or times, cell
          references, and functions in a single cell.  The "joiners" are
          called operators. The main operators are addition (+), subtrac-
          tion (-), multiplication (*) and division (/).  You can find a
          complete list of operators in OPERATORS & PRECEDENCE, p. 41.

          Examples of formulas are:

          3+4
          3+4+A1A
          3+4+A1A*G22A
          (3+4+A1A*G22A)/sum(B1A.B10a)

          If a formula begins with a letter, your first keystroke from the
          ready mode must be the plus sign (+), equal sign (=), or semi-
          colon(;), your choice.  This keystroke does not appear on the edit
          line; it serves to tell PS that the entry is numeric, not textual.

          Editing Entries

          Move to the cell and press Enter.  You are now in edit mode.  Use
          the edit mode commands to edit the entry.  When you finish, press
          Enter.  You see the edited entry on the edit line and in the data
          area.

          Changing Entry Types

          To convert a number entry to text, move to the cell, press
          apostrophe ('), and then Enter.

          To convert a textual entry to a numeric entry, move to the cell,
          press + = or ; and press Enter.













                                      15.                     06/14/88




                                                           Guide to PS





                                  PS FUNCTION KEYS

          The function keys are marked "F1", "F2", etc.  Do not type two
          separate characters, such as "F" and "1".

          F1 (from ready or edit modes). Displays context-sensitive help
          screen.

          F3 (from ready mode). Runs a file EXEC; same as /ER.

          F3 (from edit mode). Enters pointing mode.

          F5 (from ready mode). Starts printing; same as /PT.

          F5 (from edit mode). Allows input of hexadecimal character.  Used
          for displaying special symbols and for setting up your printer.

          F7 (from ready mode). Loads storage file; same as /SL.

          F9 (from ready mode). Saves data as storage file; same as /SS.



































                                      16.                     06/14/88




                                                           Guide to PS





                                 READY MODE COMMANDS

          Ready mode commands allow you to move the screen cursor, enter
          edit mode, and enter command mode.

          Function key F1               Help key. May be pressed at
                                        any time except while an EXEC
                                        is running.

          Up-arrow                      Directional movement of
          Down-arrow                    screen cursor: up, down,
          Right-arrow                   right, left.
          Left-arrow


          PgDn (or >)                   Moves in a page.

          PgUp (or <)                   Moves out a page.

          @                             Goto command.  Displays prompt
                                        "Cell Name?". Respond with any
                                        valid cell reference, press
                                        Enter; screen cursor moves to
                                        that cell.

          Tab                           Forward Search Command.  Moves
                                        screen cursor to next non-
                                        blank cell forward from
                                        current cell. If /K set, moves
                                        screen cursor to next cell
                                        forward from current cell
                                        which matches a selected
                                        keyword.

          Shift-Tab                     Backward Search Command.
                                        Moves screen cursor to next
                                        non-blank cell backward from
                                        current cell. If /K set, moves
                                        screen cursor to next cell
                                        backward from current cell
                                        which matches a selected
                                        keyword.

          Esc                           No effect.

          Enter                         Enters edit mode for current
                                        cell.  If cell blank, allows
                                        textual entry.







                                      17.                     06/14/88




                                                           Guide to PS





          Ins                           Enters edit mode; inserts a
                                        blank space at edit cursor.

          Del                           Enters edit mode; deletes
                                        first character on edit line.

          Home                          Enters edit mode; puts edit
                                        cursor at beginning of cell
                                        contents to be edited.

          Ctrl-End                      Enters edit mode; deletes cell
                                        contents and puts edit cursor
                                        at beginning of edit line.

          End                           Enters edit mode; moves edit
                                        cursor to end of cell contents
                                        to be edited.

          0-9 ; = : + - . (             Enters edit mode; allows
                                        numeric entry.

          A-Z ' " Enter                 Enters edit mode; allows
                                        textual entry.

          /                             Enters command mode; displays
                                        menu of slash (/) commands.

          Ctrl-P                        Prints screen image to a
                                        properly connected printer.

          Ctrl-Q                        Exits PS.

             Ctrl-QY                       Yes. Confirms exit. PS
                                           exits to operating system.

             Ctrl-QN                       No. Cancels exit command.
                                           PS returns to ready mode.


















                                      18.                     06/14/88




                                                           Guide to PS





                               EDIT MODE COMMANDS

          Edit mode commands allow you to create or modify cell
          contents.

          Function key F1               Help key.

          Right-arrow                   Moves edit cursor one space to
                                        right.

          Left-arrow                    Moves edit cursor one space to
                                        left; does not erase
                                        characters as it moves.

          Backspace                     Moves edit cursor one space to
                                        left; erases characters as it
                                        moves.

          Ins                           Inserts a blank space at edit
                                        cursor.

          Del                           Deletes a character at edit
                                        cursor.

          Home                          Moves edit cursor to beginning
                                        of cell contents being edited.

          End                           Moves edit cursor to end of
                                        cell contents being edited.

          Ctrl-End                      Deletes all characters from
                                        the edit cursor to the end of
                                        the line.

          Up-arrow Xnn                  Allows input of graphics
                                        character (nn = the two-
                                        character hexadecimal code of
                                        a graphics character.)

          ?                             Lets you convert cell labels
                                        to cell names, and cell names
                                        to values.  When you suffix a
                                        cell label with one "?" a cell
                                        label (%PROFITS?), a current
                                        cell reference (&?), a
                                        relative cell reference
                                        (@(x,y,z)?), or a reserved-
                                        word cell reference (PRIOR?,







                                      19.                     06/14/88




                                                           Guide to PS





                                        NEXT?, END?), replaces the
                                        cell reference with the cell
                                        name (such as B10A); suffixing
                                        two ?s to the above yields the
                                        cell's value.  When suffixed
                                        to a cell name (A1A?),
                                        replaces the cell name with
                                        the cell's value; suffixing
                                        two ?s to a cell name is the
                                        same as suffixing one.

          !                             When suffixed to a formula,
                                        concludes editing, and
                                        replaces formula with its
                                        value, and returns PS to ready
                                        mode.

          Esc                           Concludes editing, discards
                                        changes made in edit mode, and
                                        returns PS to ready mode.

          Enter                         Concludes editing, enters new
                                        or edited data into current
                                        cell, and returns PS to ready
                                        mode.

          Ctrl-P                        Prints screen image to a
                                        properly connected printer.



























                                      20.                     06/14/88




                                                           Guide to PS





                             COMMAND MODE COMMANDS

          A command is an instruction to PS to perform a task.  In
          command mode, you specify a command and then choose options
          and suboptions to completely execute the command.

          To enter the command mode, press the slash (/) key from the
          ready mode. You see the menu of main commands at the bottom
          of the screen.

          Next, to select a command, type the first letter of a menu
          item.  A secondary menu appears.  To continue the command
          sequence, type the first letter of the option. In some
          cases, additional options appear.

          When executing most commands, Esc cancels the command, and
          returns PS to ready mode.

          The Help key (function key F1) is available at all command
          levels.


          / Commands:                   Description:

          Esc                           If pressed after entering
                                        command mode but before the
                                        command is executed, cancels
                                        that command and returns PS to
                                        ready mode.

          /A                            Makes alter view commands
                                        available as follows:

             /AC                           Rotates data cube to column
                                           view.  (Rows read down,
                                           pages read across.)

             /AR                           Rotates data cube to row
                                           view.  (Pages read down,
                                           columns read across.)

             /AP                           Rotates data cube to page
                                           view.  (Rows read down,
                                           columns read across.)
                                           /AP is the PS default.










                                      21.                     06/14/88




                                                           Guide to PS





          /B                            Allows blanking one or more
                                        cells, as follows:

             /BY                           Blanks current cell.

             /BT                           Allows blanking a cell
                                           range.  Displays prompt
                                           "Blank To-cell?".  Enter
                                           range or cell reference. If
                                           cell reference, the range
                                           from the cursor to
                                           the cell specified at the
                                           prompt is blanked.

          /C                            Allows clearing (erasing)
                                        current sheets.  Confirmation
                                        required: press Y to clear
                                        sheets, or press Esc to cancel
                                        /C command.

                                        CAUTION: This command clears
                                        all data. Consider saving data
                                        before you select /C.

          /D                            Makes delete commands
                                        available as follows:

             /DC                           If in page view (rows read
                                           down, columns read
                                           across), deletes
                                           column which contains
                                           cursor.
                                           If in column view (rows
                                           read down, pages
                                           read across), deletes the
                                           page which contains cursor.
                                           If in row view (pages read
                                           down, columns read across),
                                           deletes the column
                                           which contains the cursor.

             /DR                           If in page view (rows read
                                           down, columns read
                                           across), deletes row
                                           which contains cursor.
                                           If in column view (rows
                                           read down, pages
                                           read across), deletes the







                                      22.                     06/14/88




                                                           Guide to PS





                                           row which contains the
                                           cursor.
                                           If in row view (pages read
                                           down, columns read across),
                                           deletes the page
                                           which contains the cursor.

             /DP                           If in page view (columns
                                           read across, rows
                                           read down),
                                           deletes the page which
                                           contains the cursor.
                                           If in column view (rows
                                           read down, pages
                                           read across), deletes the
                                           column which contains the
                                           cursor.
                                           If in row view, (pages read
                                           down, columns read across),
                                           deletes the row
                                           which contains the cursor.

          /E                            Makes EXEC commands available
                                        as follows: (In the
                                        description below, "file" =
                                        file name you enter at prompt
                                        "...File Name?")

             /EC cell                      Runs an in-memory EXEC
                                           whose first line is at
                                           "cell" (any valid cell
                                           reference).

             /EDY file                     Allows deleting "file".
                                           Confirmation required:
                                           press Y to delete file
                                           named next; or press Esc to
                                           cancel /ED command.

                                           CAUTION: This command can
                                           delete any type of file
                                           except PS storage files.


             /EE file                      Allows echo (simultaneous
                                           recording) of all
                                           subsequent keystrokes to a
                                           disk file name specified.







                                      23.                     06/14/88




                                                           Guide to PS





             /EL file                      Runs (loads) specified file
                                           EXEC (invisibly); clears
                                           current sheets.  Suppresses
                                           most screen activity caused
                                           by the EXEC.

             /EM file                      Merges specified file EXEC
                                           into current sheets.

             /EN                           Cancels /EE command, stops
                                           echoing of subsequent
                                           keystrokes, and closes file
                                           opened by preceding /EE
                                           command.

             /EP file                      Prints all or part of
                                           current sheets to disk in
                                           ASCII format. Area printed
                                           is bounded by current
                                           cursor and the cell entered
                                           at prompt "Print To-cell?".

             /ER file                      Runs specified file EXEC.

             /ES file                      Saves current sheets to
                                           disk as a file EXEC.

          /F                            Makes local (i.e, current
                                        cell) format commands
                                        available as follows:

             /F$                           Displays current numeric
                                           cell with dollar sign
                                           prefixed.

             /F,                           Inserts commas between
                                           every third number to left
                                           of decimal of current
                                           numeric cell.

             /F% label                     Allows assigning an
                                           arbitrary label such as
                                           "PROFITS" to current cell.
                                           ("label" = a string which
                                           is typed after the % sign,
                                           without an intervening
                                           spacebar, 8-character
                                           maximum. Subsequent







                                      24.                     06/14/88




                                                           Guide to PS





                                           reference to labelled cell
                                           must include %.)

             /FD                           Resets current cell to
                                           current global (default)
                                           format.

             /FE                           Sets current cell to
                                           scientific notation format.

             /FFnn                         Sets current cell to
                                           specified number of decimal
                                           places. (nn = 0-15.)

             /FH                           Horizontally centers
                                           current textual cell
                                           contents on screen, window,
                                           or printout.

             /FI                           Sets current numeric cell
                                           to integer (whole number)
                                           format.

             /FL                           Aligns current cell
                                           contents along left margin
                                           (flush left).

             /FP up-arrow Xc               Sets plotting format for
                                           current cell.  (c = the
                                           two-character hexadecimal
                                           code of the character to be
                                           plotted.)

             /FR                           Aligns current cell
                                           contents along right margin
                                           (flush right).

             /FV                           Vertically centers current
                                           textual cell contents on
                                           screen, window, or
                                           printout.

             /FWnnn                        Sets individual column
                                           width to number of spaces
                                           specified by nnn. (nnn =
                                           0-127.  0 means use width
                                           set with /GW.)  If
                                           asterisks display in a







                                      25.                     06/14/88




                                                           Guide to PS





                                           numeric cell, the column is
                                           too narrow to display the
                                           full number.

          /G                            Makes global commands
                                        available as follows:

             /G arrow                      Automatically moves cursor
                                           a distance of one cell in
                                           arrow's direction whenever
                                           a cell edit concludes with
                                           Enter or !. Cancel with /G
                                           Enter.

             /GC                           Turns on automatic
                                           recalculation.  (/GN turns
                                           off recalculation.)

             /GD                           Controls the display
                                           attributes of all cells in
                                           the current sheets
                                           according to the next
                                           keystroke as follows:

                /GDC                          Displays coordinate
                                              grid, i.e., column
                                              letters and row numbers
                                              (default display).

                /GDF                          Displays formulas
                                              instead of their
                                              results.

                /GDN                          Does not display
                                              coordinate grid, i.e.,
                                              horizontal and vertical
                                              position indicators.

                /GDR                          Displays results of
                                              formulas (default
                                              display).

             /GF                           Global Format; affects the
                                           format of all cells in the
                                           current sheets according to
                                           the next keystroke as
                                           follows:








                                      26.                     06/14/88




                                                           Guide to PS





                /GF,                          Displays all numeric
                                              cells with commas
                                              inserted between every
                                              third integer to left of
                                              decimal.

                /GF?                          Sets message for no
                                              value cells.  Allows
                                              user's own message,
                                              entered next, to be
                                              displayed in all no-
                                              value cells instead of
                                              ?????? (default).  15-
                                              character maximum.
                                              Cancel with /GF??.

                /GF-                          Allows display of
                                              negative numbers 3 ways:
                                              with prefixed minus
                                              sign; with surrounding
                                              parentheses; or with
                                              suffixed CR (for
                                              "credit"). Cancel with
                                              /GF--.

                /GF$                          Displays all numeric
                                              cells with dollar signs
                                              prefixed.

                /GFE                          Displays all numeric
                                              cells in scientific
                                              notation.

                /GFFnn                        Displays all numeric
                                              cells to the number of
                                              decimal places specified
                                              by nn.  (nn = 0-15.)

                /GFI                          Displays all numeric
                                              cells in integer (whole
                                              number) form.

             /GN                           Negates the /GC command by
                                           turning off automatic
                                           recalculation.  Only
                                           current cells will be
                                           recalculated when edited.
                                           /GC recalculates all cells.







                                      27.                     06/14/88




                                                           Guide to PS





             /GP                           Lets you assign a password
                                           to the current sheets when
                                           you select /SS. Confirm
                                           with Y, or negate with N.

             /GT                           Sets separators
                                           (delimiters) and other
                                           parameters when
                                           transferring data between
                                           PS and other programs, as
                                           follows:

                /GTD                          Sets the order that DIF
                                              (Data Interchange
                                              Format) files are
                                              processed, as follows:

                   /GTDA                         Sets DIF files to be
                                                 processed across,
                                                 then down.

                   /GTDD                         Sets DIF files to be
                                                 processed down, then
                                                 across.

                /GTC                          Sets column separator,
                                              entered next.

                /GTS                          Sets string separator,
                                              entered next.

             /GWnnn                        Sets all columns to width
                                           specified by nnn. (nnn =
                                           1-127.)

          /I                            Makes insert commands
                                        available as follows:

             /IC                           If in page view (rows read
                                           down, columns read
                                           across), inserts a
                                           column to left of cursor.
                                           If in column view (rows
                                           read down, pages
                                           read across), inserts a
                                           page to left of cursor.
                                           If in row view (rows read
                                           down, columns read







                                      28.                     06/14/88




                                                           Guide to PS





                                           across), inserts a
                                           column to left of cursor.

             /IR                           If in page view (rows read
                                           down, columns read
                                           across), inserts a
                                           row above cursor.
                                           If in column view (rows
                                           read down, pages
                                           read across), inserts a row
                                           above cursor.
                                           If in row view (pages read
                                           down, columns read
                                           across), inserts a page
                                           above cursor.

             /IP                           If in page view (rows read
                                           down, columns read
                                           across), inserts a
                                           page at cursor location.
                                           If in column view (rows
                                           read down, pages
                                           read across) inserts a
                                           column at cursor location.
                                           If in row view (pages read
                                           down, columns read
                                           across), inserts a row at
                                           cursor location.

          /K                            Allows search for a keyword.
                                        Displays prompt "Search Key?";
                                        type keyword, press Enter.
                                        Press Tab to search forward
                                        from cursor; press Shift-Tab
                                        to search backward from
                                        cursor.  (Cancel with /KCtrl-
                                        End.)

          /O                            Allows sorting of rows,
                                        columns, pages, or defining a
                                        sequence of sorts, according
                                        to the next keystroke.

             /OR                           Allows row sort, using up
                                           to 3 sort fields (columns),
                                           in ascending or descending
                                           order.








                                      29.                     06/14/88




                                                           Guide to PS





             /OC                           Allows column sort, using
                                           up to 3 sort fields (rows),
                                           in ascending or descending
                                           order.

             /OP                           Allows page sort, using up
                                           to 3 sort fields (a group
                                           of cells with common column
                                           & row coordinates but
                                           different page
                                           coordinates), in ascending
                                           or descending order.

             /OD                           Allows entry of a sort
                                           definition, which specifies
                                           a sequence of row, column
                                           or page sorts.

          /P                            Makes printing commands
                                        available as follows:

             /PS                           Printer setup as follows:

                /PSL                          Begins Printer Linefeed
                                              Setup as follows:

                   /PSLL                         Printer: use linefeed
                                                 after carriage
                                                 return.

                   /PSLN                         Printer: no linefeed
                                                 after carriage
                                                 return.

                /PSF                          Begins Printer Formfeed
                                              Setup as follows:

                   /PSFF                         Printer: move to the
                                                 top of the next blank
                                                 page of paper (page
                                                 eject) after
                                                 printing.

                   /PSFN                         Printer: do not move
                                                 to the top of the
                                                 next blank page of
                                                 paper (no page eject)
                                                 after printing.







                                      30.                     06/14/88




                                                           Guide to PS





                /PSP                          Lets you set margins on
                                              printouts, and whether
                                              or not columns split
                                              across paper pages.

                   /PSPB                         Sets bottom margin.

                   /PSPC                         Sets whether columns
                                                 split across pages.
                                                 Next select N (no,
                                                 only whole columns
                                                 print on a page), or
                                                 Y (yes, columns may
                                                 split vertically, if
                                                 necessary, from page
                                                 to page).

                   /PSPH                         Sets paper height
                                                 (number of lines per
                                                 page; include top and
                                                 bottom margins).

                   /PSPL                         Sets left margin.

                   /PSPR                         Sets right margin.

                   /PSPT                         Sets top margin.

                   /PSPW                         Sets paper width
                                                 (number of characters
                                                 per line; include
                                                 both margins.)

                /PSSc                         Controls printer
                                              features (such as number
                                              of characters per line);
                                              depends on printer make
                                              and model. (c = setup
                                              string, 0-8 characters
                                              which control a certain
                                              printer feature.)

             /PT cell                      Prints sheets beginning at
                                           current cursor location and
                                           continuing through "cell".
                                           ("cell" = any valid cell
                                           reference.) Note: /PC and
                                           /P@ are equivalent to /PT.







                                      31.                     06/14/88




                                                           Guide to PS





          /R                            Copies to another part of the
                                        data cube.  After typing /R,
                                        answer prompt, "Source Range"
                                        with "cell.cell"  Enter;
                                        answer next prompt,
                                        "Destination Range?" with
                                        "cell.cell" Enter.

             /R cell.cell                  "cell.cell" = two cell
                                           references separated by a
                                           period to indicate a range
                                           of cells.

                                           To replicate only cell
                                           formats and nothing else,
                                           precede your response to
                                           "Source Range?" with "F:".

                                           To replicate formulas and
                                           values, but not formats,
                                           precede your response to
                                           "Source Range?" with "V:".

                                           To replicate only results,
                                           not formulas or formats,
                                           precede your response to
                                           "Source Range?" with "R:".

                                           If "F:", "V:", or "R:" do
                                           not precede your response
                                           to "Source Range?",
                                           formats, formulas, and
                                           results are replicated.

          /S                            Makes storage commands
                                        available as follows: (In the
                                        description below, "file" = a
                                        storage file name you enter at
                                        prompt "...File Name?";
                                        "range" = a range you
                                        specify.)

             /SA                           Mathematically adds the
                                           values of numeric cells in
                                           a specified storage file to
                                           corresponding cells in the
                                           current sheets.








                                      32.                     06/14/88




                                                           Guide to PS





             /SD file                      Allows deleting "file".
                                           Confirmation required:
                                           press Y to delete file
                                           named next; or press Esc to
                                           cancel /SD command.  /SD
                                           deletes only PS storage
                                           files.

             /SL file                      Loads specified file from
                                           disk into memory; clears
                                           current sheets prior to loading.

             /SM file                      Merges specified disk file
                                           with current sheets.  The
                                           merge process replaces
                                           cells in the current sheets
                                           with the values of
                                           corresponding cells from
                                           the specified file.

             /SS file                      Saves current sheets to
                                           disk.

             /ST range                     Lets you specify a range to
                                           be processed by the next
                                           named storage command.

             /SX                           Initiates data transfer to
                                           PS from other software.

                /SXD                          Allows ASCII data,
                                              either delimited in a
                                              source file or tabular,
                                              to be transferred to
                                              current sheets. Two
                                              prompts follow: one for
                                              the source file name,
                                              the other for specifying
                                              the target area in the
                                              current sheets where the
                                              source file data will
                                              go. Also called "paste"
                                              command.  Previously,
                                              select the /GTC and /GTS
                                              commands to set
                                              separators (delimiters)
                                              for incoming data.  If
                                              no column or string







                                      33.                     06/14/88




                                                           Guide to PS





                                              separators are set by
                                              these commands, tabular
                                              data is transferred.

                /SXI                          Allows data, in DIF
                                              format, in a source file
                                              to be transferred to the
                                              current sheets. Two
                                              prompts follow: one for
                                              the source file name,
                                              the other for specifying
                                              the target area in the
                                              current sheets where the
                                              source file data will
                                              go.  Use the /GTDA and
                                              /GTDD commands to set
                                              the processing order of
                                              the DIF data prior to
                                              issuing /SXI.

                /SXO                          Allows data in the
                                              current sheets to be
                                              saved on disk in DIF
                                              format.  Two prompts
                                              follow: one for the file
                                              name, the other for
                                              specifying that part of
                                              the current sheets to be
                                              saved on disk in DIF
                                              format.  Use the /GTDA
                                              and /GTDD commands to
                                              set the processing order
                                              of the DIF data prior to
                                              issuing /SXO.

                /SXR                          Transfers data from
                                              other PS files into the
                                              current sheets.







          /T                            Makes title commands available
                                        as follows:








                                      34.                     06/14/88




                                                           Guide to PS





             /TB                           Sets both horizontal and
                                           vertical title areas; area
                                           includes row and column
                                           which contain cursor; also
                                           includes all rows above
                                           cursor and all columns to
                                           left of cursor.

             /TH                           Sets horizontal title area;
                                           area includes row which
                                           contains cursor and all
                                           rows above.

             /TN                           Cancels title area(s).

             /TV                           Sets vertical title area;
                                           area includes column which
                                           contains cursor and all
                                           columns to left.

          /W                            Makes window commands
                                        available as follows:

             /WB                           Sets both vertical and
                                           horizontal window.  (/WBS
                                           for synchronous or /WBA for
                                           asynchronous windows).

             /WH                           Sets horizontal windows.
                                           (/WHS for synchronous or
                                           /WHA for asynchronous
                                           windows).

             /WN                           Cancels window area(s).

             /WV                           Sets vertical windows.
                                           (/WVS for synchronous or
                                           /WVA for asynchronous
                                           windows).

          /up-arrow                     When /W in effect,
          /down-arrow                   moves cursor into window
          /right-arrow                  indicated by arrow direction.
          /left-arrow

          /-                            Repeats textual entry of
                                        current cell to fill cell.








                                      35.                     06/14/88




                                                           Guide to PS





          /Home                         Moves cursor to cell A1A.

          /End                          Moves cursor to lower, right,
                                        rear of data cube.

          Esc                           If pressed after entering
                                        command mode but before
                                        command is executed, cancels
                                        that command and returns PS to
                                        ready mode.













































                                      36.                     06/14/88




                                                           Guide to PS





                                  I/O COMMANDS

          Right-arrow                   You may press right-arrow as a
                                        response to any "File Name?"
                                        prompt.  You then see the file
                                        name you typed for the last
                                        storage command at the bottom
                                        of the screen.  Successive
                                        right-arrow keypresses display
                                        file names from the current
                                        directory.  Pressing Enter
                                        executes the action of the
                                        current command on the file
                                        named at the bottom of the
                                        screen.

          Changing data drive           You may change the drive for
                                        data whenever you see the
                                        prompt "File Name?".  At this
                                        prompt, either 1) type the
                                        drive designator (usually a
                                        letter), then a colon, and
                                        press Enter, or 2) type the
                                        drive designator, a colon,
                                        then a file name for the
                                        current command, and press
                                        Enter.  Either action changes
                                        the default data drive until
                                        changed again.

                                        You may also change drives by
                                        using the prefixes !: and @:
                                        with file names.  These
                                        prefixes specify that the next
                                        named file resides on the
                                        program disk drive.  Prefix !:
                                        to specify changing drives
                                        only for the next named file;
                                        prefix @: to specify a drive
                                        change for all subsequently
                                        named files.  You may use
                                        these prefixes whenever you
                                        respond to the prompt "File
                                        Name?"

          Changing directory            You may change directories
                                        from within PS by running an
                                        EXEC program named CD (Change







                                      37.                     06/14/88




                                                           Guide to PS





                                        Directory). This EXEC is
                                        provided on the PS program
                                        disk. From the ready mode,
                                        type /ER !:cd Enter.  You see
                                        the prompt "Directory to
                                        change to?".  Specify the
                                        directory and press Enter.  PS
                                        returns to ready mode; all /S
                                        and /E processing will be
                                        directed to the specified
                                        directory until changed again.

          Ctrl-S                        Pauses the running of an EXEC
                                        begun with the /EC, /EL, /EM,
                                        or /ER commands. Resume EXEC
                                        by pressing Ctrl-S again.

          Esc                           Ends the running of an EXEC.





































                                      38.                     06/14/88




                                                           Guide to PS





                             VALID CELL REFERENCES

          There are five valid methods of referring to cells. Any of
          the following kinds of cell references are valid when
          building formulas, moving the cursor, responding to prompts,
          and issuing commands.

          Using Coordinates             The most common way to refer
                                        to a cell. Refers to a cell by
                                        its column, row and page
                                        coordinates, e.g., A1A.  Also
                                        called "cell name."

          Using &                       The ampersand (&) refers to
                                        the current cell. Used
                                        primarily in EXECs.

          Using Labels                  Assigns a word (label), such
                                        as "%PROFITS", to a cell.
                                        Established with the /F%
                                        command.  Subsequent use of
                                        this reference must include
                                        the "%".

          Using @(x,y,z)                Refers to a cell which is a
                                        certain x-y-z distance from
                                        the current cell.  Also called
                                        relative cell reference.  "x"
                                        = no. of cols. to left (-x) or
                                        right (+x); "y" = no. of rows
                                        above (-y) or below (+y); "z"
                                        = no. of pgs.  in front of (-
                                        z) or behind (+z). @(2,-2,2)
                                        means, "the cell 2 cols.
                                        right, 2 rows above, and 2
                                        pages behind the current
                                        cell."

                                        Another form of the relative
                                        cell reference is
                                        @(x,y,z,cell). Here, the x-y-z
                                        distance is computed not from
                                        the current cell, but from
                                        "cell".

                                        The values for x, y, and z may
                                        be the computed values of
                                        formulas or the values of







                                      39.                     06/14/88




                                                           Guide to PS





                                        other cell references.  For
                                        example, the following cell
                                        reference is valid:
                                        @(sum(A1A.A10A),-2,2).

          Using PRIOR, NEXT, END        The word PRIOR refers to the
                                        first non-blank cell backward
                                        from the current cell; NEXT
                                        refers to the first non-blank
                                        cell forward from the current
                                        cell; END refers to the last
                                        cell at the right-bottom-rear
                                        corner of the cube of actual
                                        data. (This cell may not
                                        contain any data.)








































                                      40.                     06/14/88




                                                           Guide to PS





                             OPERATORS & PRECEDENCE

          +                             Addition.

          -                             Subtraction.

          *                             Multiplication.

          /                             Division.

          ^                             Exponentiation.

          //                            Modulo (remainder of
                                        division).

          The following relational operators return either "0" if the
          condition they express is false, or "1" if true.

          =                             Compare, equal.

          #                             Compare, not equal.

          >                             Compare, greater than.

          <                             Compare, less than.

          >=                            Compare, greater than or equal
                                        to.

          <=                            Compare, less than or equal
                                        to.

          Precedence:                   1) Formulas in functions,
                                             formulas in parentheses
                                        2) ^
                                        3) *  /  //
                                        4) +  -
                                        5) #  =  <  >  >=  <=

















                                      41.                     06/14/88




                                                           Guide to PS





                            PREPROGRAMMED FUNCTIONS

          @R(filename,cell)             The value of the cell in which
                                        this function is placed, is
                                        taken from the value of the
                                        cell specified by "cell" in
                                        the storage file on disk
                                        specified by "filename" when
                                        you select /SXR.

          ABS(n)                        Absolute Value. Returns
                                        positive value of "n".

          AND(list)                     And.  Returns "1" if all items
                                        in "list" are non-zero numeric
                                        items; otherwise returns "0".

          AVG(list)                     Average. Returns average of
                                        "list".

          CASE(list)                    Logical comparison.  Compares
                                        value of first item in "list"
                                        with remaining odd-numbered
                                        items.  If a match is found,
                                        returns value of item
                                        following matched item.  If no
                                        match found, returns value of
                                        second item.

          DATE() or DATE(n)             Date. Returns date kept by
                                        operating system clock.

          DOS()                         DOS. Returns codes for brand
                                        and version of operating
                                        system.

          DOW(n)                        Day of Week. Returns 1-7 of
                                        the date "n". (1 = Sunday,
                                        etc.)

          DUR(n,m)                      Duration. Returns interval
                                        between dates, "n" and "m".

          ERR()                         Returns the error value. When
                                        a cell's value is the error
                                        value, exclamation points
                                        display across the cell's
                                        width.







                                      42.                     06/14/88




                                                           Guide to PS





          FALSE()                       False.  Returns "0".

          IF(list)                      Logical comparison.  Returns
                                        value of last item in "list"
                                        if the value of the first item
                                        found in "list" is zero
                                        (false).  Returns value of
                                        next-to-last item if the value
                                        of the first item found in
                                        list is not zero (true).  If
                                        only 2 items are in "list",
                                        returns zero if the first item
                                        is zero; or returns the second
                                        item if the first item is not
                                        zero.

          IFERR(n)                      If Error.  Returns "1" if "n"
                                        is in error, "0" if not in
                                        error.

          IFNOV(n)                      If No-Value. Returns "1" if
                                        "n" is a "no-value" cell, "0"
                                        if it is not.

          IFNUL(cell)                   If Null Cell. Returns "1" if
                                        "cell" is blank, "0" if it
                                        contains an entry.

          IFSTR(cell)                   If String (textual) Cell.
                                        Returns "1" if "cell" is
                                        textual, "0" if it is numeric.

          INT(n)                        Integer. Returns value of "n"
                                        as a whole number when "n" is
                                        not a date.  If "n" is a date,
                                        returns first day of month in
                                        specified date.

          LEN(cell)                     Length of Cell. Returns number
                                        of characters in textual
                                        "cell".  Returns "0" if "cell"
                                        is numeric.

          LUC(n,list)                   Look Up Column. Returns the
                                        value to the right of "n" when
                                        found in "list".

          LUP(n,list)                   Look Up Page. Returns the







                                      43.                     06/14/88




                                                           Guide to PS





                                        value one page behind "n" when
                                        found in "list".

          LUR(n,list)                   Look Up Row. Returns the value
                                        in the row below "n" when
                                        found in "list".

          MAX(list)                     Maximum Value. Returns maximum
                                        value in "list".

          MIN(list)                     Minimum Value. Returns minimum
                                        value in "list".

          MODE(list)                    Mode. Returns most frequently
                                        occurring value in "list".

          NAND(list)                    Not And.  Returns "0" if all
                                        items in "list" are non-zero
                                        numeric items; otherwise
                                        returns "1".

          NOR(list)                     Nor Or.  Returns "0" if any
                                        numeric cell in "list" is
                                        non-zero.

          NOT(n)                        Not.  Returns "0" if "n" is
                                        true; returns "1" if "n" is
                                        false.

          NOV() or NV()                 Returns the no-value value.
                                        When a cell's value equals
                                        no-value, question marks
                                        display across the cell's
                                        width.  This function is used
                                        as place holder when actual
                                        value unavailable.

          NUM(list)                     Number. Returns number of
                                        numeric entries in "list".

          NXOR(list)                    Not-exclusive Or.  Returns "1"
                                        if "list" contains an even
                                        number of non-zero numeric
                                        cells; returns "0" if "list"
                                        contains an odd number of
                                        non-zero numeric cells.

          OR(list)                      Or.  Returns "1" if a non-zero







                                      44.                     06/14/88




                                                           Guide to PS





                                        numeric item is in "list";
                                        returns "0" if all items in
                                        "list" are zero.

          RD(n,m)                       Round. Rounds "n" to the
                                        number of decimal places
                                        specified by integer portion
                                        of "m".

          RND(n)                        Random. Returns an integer,
                                        randomly chosen, from 1 to
                                        "n".

          SEC(n,m)                      Seconds. Returns the time
                                        interval in seconds between
                                        the times "n" and "m".

          SGN(n)                        Sign. Returns "1" if "n"
                                        positive; "-1" if negative;
                                        "0" if zero.

          SQRT(n)                       Square Root. Returns the
                                        square root of "n".

          SSQ(list)                     Sum of the Squares. Returns
                                        the sum of the squares of each
                                        member in "list".

          STD(list)                     Standard Deviation.

          SUM(list)                     Summation. Returns the sum of
                                        the members of "list".

          TIME() or TIME(n)             Time. Returns time kept by
                                        operating system clock.

          TRUE()                        True.  Returns "1".

          XOR(list)                     Exclusive Or.  Returns "1" if
                                        "list" contains an odd number
                                        of non-zero numeric cells;
                                        returns "0" if list contains
                                        an even number of non-zero
                                        numeric cells.

          X(cell)                       Returns column (or X)
                                        coordinate of "cell".








                                      45.                     06/14/88




                                                           Guide to PS





          Y(cell)                       Returns row (or Y) coordinate
                                        of "cell".

          Z(cell)                       Returns page (or Z) coordinate
                                        of "cell".


















































                                      46.                     06/14/88




                                                           Guide to PS





                            TRIGONOMETRIC FUNCTIONS

          (Except where noted, the result of "n" is in radians.)

          ACOS(n)                       Arccosine

          ASIN(n)                       Arcsine

          ATAN(n)                       Arctangent

          COS(n)                        Cosine.

          DEG(n)                        Number of Degrees

          RAD(n)                        Radian.  (Here the result of
                                        "n" is in degrees.)

          SIN(n)                        Sine

          TAN(n)                        Tangent



































                                      47.                     06/14/88




                                                           Guide to PS





                             LOGARITHMIC FUNCTIONS

          EXP(n)                        Exponent, base e. Raises e to
                                        the nth power which returns
                                        the natural anti-logarithm of
                                        the argument "n".

          LOG(n)                        Log, base e

          LTEN(n)                       Log, base 10













































                                      48.                     06/14/88




                                                           Guide to PS





                          INTERACTIVE (EXEC) FUNCTIONS

          These functions are provided as file EXECs on the program
          disk. The file name of the function is in the left column
          below.  These files are executed with the /ER command.

          AMORT                         Amortization Schedule

          CD                            Change Directory (not a
                                        function)

          EF                            Effective Interest Rate

          FV                            Future Value

          FVA                           Future Value for Annuity Due
                                        (Savings)

          IRR                           Internal Rate of Return

          ITERATE                       Iteration

          LP                            Loan Payment (Ordinary Annuity
                                        Payment)

          LR                            Linear Regression, with Trend
                                        Line Analysis

          NP                            Number of Payments

          NPV                           Net Present Value

          PA                            Payment for Annuity Due

          PV                            Present Value

          PVA                           Present Value for Annuity Due

          PVB                           Present Value for a Bond
















                                      49.                     06/14/88




                                                           Guide to PS





                                    PS EXEC

          EXEC is a programming language built into PS to automate
          operations.  An EXEC program is a list of instructions which
          directs PS to execute (hence the term EXEC) a sequence of
          instructions.

          The instructions come from three sources: PS commands, EXEC
          statements (p. 51), and EXEC keystroke facilities (p. 54).
          EXEC statements control the sequence in which the
          instructions are executed, move the cursor, and otherwise
          facilitate the composition of EXEC programs. EXEC keystroke
          facilities allow you to include certain keypresses within an
          instruction.

          There are two kinds of EXEC programs: file EXECs and in-
          memory EXECs.  File EXECs are ASCII files which must begin
          with a comment statement (p. 51).  A file EXEC may be
          created outside of PS by using a text editor which creates
          ASCII files.  To run file EXEC programs, use /ER.

          You compose an in-memory EXEC in an unused section of the
          data cube.  It is saved along with the current sheets when
          you select /SS.  To run an in-memory EXEC, select /EC.































                                      50.                     06/14/88




                                                           Guide to PS





                            EXEC PROGRAM STATEMENTS

          The following list shows the general form for each EXEC
          program statement.  Include or omit spaces as shown.
          Include all punctuation as shown.  Text enclosed between "<"
          and ">" denotes optional data; never type the "<" or ">".
          The word "cell" means any valid cell reference; the word
          "formula" means a number, valid cell reference, date, time,
          function, or any formula which contains these.  Upper or
          lowercase may be used when typing EXEC program statements.

          ,;<optional comment>
          This line of the EXEC is a comment. It must always be the
          first line of a file EXEC.

          ,LET cell=formula
          Places "formula" in "cell". If the last character of
          "formula" is !, the value of "formula" is placed in the
          cell.

          ,STRING "message" cell
          Places the message inside the quotes on the edit line. User
          responds with textual entry which will be placed in "cell".
          Include quotes.

          ,NUMBER "message" cell
          Places the message inside the quotes on the edit line.  User
          responds with numeric entry which will be placed in "cell".
          Include quotes.

          ,UP<=formula>
          ,DOWN<=formula>
          ,LEFT<=formula>
          ,RIGHT<=formula>
          ,IN<=formula>
          ,OUT<=formula>
          TAB<=formula>

          Moves the cursor the number of times (0-99 limit) specified
          by the answer to "formula".  If answer positive, cursor
          moves forward from current cell; if negative, it moves
          backward.  The "formula" is any valid formula that can
          appear in a cell; if missing, the value of 1 is assumed.

          ,END
          Equivalent to pressing the End key.  To cause action of
          /End, put "/" character on line above.








                                      51.                     06/14/88




                                                           Guide to PS





          ,HOME
          Equivalent to pressing the Home key.  To cause action of
          /Home, put "/" character on line above.

          ,MARK
          Marks the current location of the cursor. A later use of the
          ,BACK statement will return the cursor to the marked
          location.

          ,BACK
          Moves the cursor to the last location marked by a ,MARK
          statement.

          ,,cell
          The current position in the EXEC is saved in "cell".  Use
          only in file EXECs.

          ,GO cell
          The next line of the EXEC executed will be in "cell" if running
          an in-memory EXEC, or at the position in the file EXEC con-
          tained in "cell" (see ,,cell) if running a file EXEC.

          ,IF formula THEN cell
          If the value of "formula" is not zero, this statement acts
          like a ,GO cell statement. Otherwise, it is ignored.

          ,GOSUB cell
          Similar to the ,GO statement, except the current location in
          the EXEC is also saved. The ,RETURN statement can be used to
          return to the statement after the ,GOSUB statement.

          ,RETURN
          The next statement executed is the one after the last ,GOSUB
          statement that was executed.

          ,AT cell
          Places the cursor at the cell whose name is contained in the
          cell referred to by the ,AT statement (indirection.)

          ,EXIT
          Equivalent to pressing Ctrl-Q (returns to operating system).
          Unrecorded data is lost.

          ,HIDE
          ,SHOW
          ,HIDE suppresses and ,SHOW displays screen activity (cursor,
          prompts, cell contents) when an EXEC is running.








                                      52.                     06/14/88




                                                           Guide to PS





          ,KEY cell
          Places the ASCII value of the keypress from the keyboard
          into "cell".

          ,MSG message
          Displays a user-defined "message" on the edit line.

          ,PRINT
          Equivalent to pressing Ctrl-P.

          ,USER
          Pauses a running EXEC and transfers control of the keyboard
          to the user.  To resume EXEC, press function key F3.

          ,ESCOFF
          Disables the Esc key while the EXEC is running.

          ,ESCON
          Enables the Esc key while the EXEC is running.

          ,STATOFF
          Turns off display of the two status lines at screen bottom.

          ,STATON
          Turns on display of the two status lines at screen bottom.

          ,MSDOS CD "directory"
          Changes default for data to "directory".

          ,EXIT=n
          Passes an exit code, n, to operating system.  "n" is a
          number between zero and 255.  This statement is equivalent
          to Ctrl-QY.

          ,QUIT
          Ends the EXEC.



















                                      53.                     06/14/88




                                                           Guide to PS





                           EXEC KEYSTROKE FACILITIES

          A keystroke facility is a string surrounded by square
          brackets.  It constitutes a keystroke in an EXEC program.
          Insert keystroke facilities into any EXEC command line or
          EXEC statement to execute the action of the keypress they
          represent.

          Facility:                     Executes action of:

          [del]                         Delete key

          [ins]                         Insert key

          [esc]                         Esc key

          [ret]                         Enter or Return key

          [era]                         Erase-to-end-of-line key
                                        (Ctrl-End)

          [upa]                         up-arrow

          [dow]                         down-arrow

          [lef]                         left-arrow

          [rig]                         right-arrow

          [hom]                         Home key

          [end]                         End key

          [Xnn]                         Up-arrow Xnn. Used to put
                                        hexadecimal codes "nn") into
                                        EXECs.

          [] comment                    This is a program comment.
                                        The EXEC program ignores the
                                        "[]" and all characters which
                                        follow it on that line.














                                      54.                     06/14/88




                                                           Guide to PS





                           COMMAND LINE PARAMETERS

          Any of the following parameters can be entered on the command
          line when PS is started:

              PS <<A=>autoexec> <D=d>

          The parameters can be placed on the line in any order.  Also,
          "A=" can be omitted from the 'autoexec' parameter.  Parameters
          can be entered in upper or lower case-- case is ignored.

          A=autoexec        Specifies the name of the EXEC file that
                            is automatically run, or the storage file
                            that is automatically loaded.  If not
                            found, PS starts normally with no error
                            message. The default is AUTOEXEC.

          D=d               Specifies the drive, "d" from which
                            storage and EXEC files are retrieved.
                            This can be changed while PS is running.
                            The default is "B".


          Example:

             PS d=c payroll               Set the default drive to
                                          "C:" and run the EXEC
                                          named "payroll".



























                                      55.                     06/14/88


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1285

     Volume in drive A has no label
     Directory of A:\

    FILE1285 TXT       634   7-17-89   3:25p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   7-17-89   3:24p
    MANUAL   BAT       147  12-15-88  12:39p
    PS       DOC    113815   6-21-88   9:30p
    READ     ME       6463   6-24-88   8:34p
            6 file(s)     122099 bytes
                           36352 bytes free
