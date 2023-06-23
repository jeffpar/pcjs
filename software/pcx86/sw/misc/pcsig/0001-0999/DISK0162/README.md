---
layout: page
title: "PC-SIG Diskette Library (Disk #162)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0162/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0162"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "BASIC NECESSITIES"

    This disk contains several handy items that are highly useful to a
    BASIC programmer.  Its files include a source code archiver, a utility
    to remove tabs from files, debug functions, and a structured BASIC
    preprocessor.  This disk is must for any one doing any extensive
    programming in BASIC.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    ARCH     EXE  Source code archiver.
    ATTRIB   SB   Sample program.
    CHARS    SB   Sample program.
    CLS      INC  Fast screen clear functions.
    DEBUG    INC  Debug functions.
    DETAB    EXE  Utility to remove tabs from files.
    ED       DOC  Editor manual  (26k).
    ED       EXE  Program editor.
    ENTAB    EXE  Utility to put tabs in files.
    INPUT    INC  Input functions.
    LC       SB   Sample program.
    LLIST    EXE  Filename listing utility.
    READ     ME   File to read first.
    SB       DOC  Preprocessor manual  (30k).
    SB       EXE  Structured BASIC preprocessor.
    SCREEN   INC  Screen functions.
    UTIL     DOC  Utilities manual  (17k).
    XREF     EXE  Cross-reference.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ED.DOC

{% raw %}
```



                                   October 1984

        This  document  tells how to use the text editor program, ED.EXE,
        so that you can enter and maintain your Structured BASIC programs
        This  manual  assumes  you are familiar with MS DOS and Microsoft
        BASIC.












                              THE BASIC NECESSITIES                              THE BASIC NECESSITIES
                              EDITOR USER'S MANUAL                              EDITOR USER'S MANUAL






                             Manual version:   1.12

                             Software version: 1.12















                                   Marty Franz

                     525 W. Walnut St., Kalamazoo, MI 49007

                                 (616) 344-1821



               (C) Copyright 1983 Marty Franz - All rights reserved




        100784112        Editor User's Manual



        INTRODUCTION        INTRODUCTION

            ED.EXE is a text editor specially designed for the entry and
        editing of Structured BASIC programs.

            Briefly, ED lets you easily enter and modify your Structured
        BASIC programs without resorting to EDLIN.  ED is screen-
        oriented, so you can edit 24 lines of text at once, and uses the
        IBM PC's special keys for many of its editing functions.

            Right now, ED is an in-memory editor.  This means that files
        must be transferred to and from a buffer in memory for editing.
        Only files small enough to fit entirely in memory (up to 60KB
        maximum) can be edited using ED.

            In actual use, ED works a lot like BASIC does: you LOAD
        programs into ED's memory buffer, edit them, then SAVE them back
        to diskette when you're done.  After a program has been stored on
        diskette, it can be translated by the Structured BASIC
        preprocessor into a runnable BASIC program.

            Please take the time to read these instructions before you
        use ED.  The best way to learn ED is to practice editing a file,
        trying out each command, editing function, or special key until
        you feel comfortable with it.  ED's SAVE and RESAVE commands make
        it unlikely that you will destroy valuable data.


        PROGRAM REQUIREMENTS        PROGRAM REQUIREMENTS

            To edit files using ED, you need an IBM PC, XT, or jr with:

                 - at least 64KB of memory, (if you have this much memory
                   your file size will be limited to about 15KB) 

                 - at least one single-sided diskette drive,

                 - a color or monochrome adapter, with a monitor capable
                   of displaying 80-character lines,

                 - MS DOS version 1.1 or 2.x, and

                 - the file ED.EXE.


        BUGS AND IDEAS        BUGS AND IDEAS

            When you are using ED, please remember that this is only
        version 1.12.  If you find bugs, or you have ideas for improving
        this editor, please contact me:

                 Marty Franz
                 525 W. Walnut St.
                 Kalamazoo, MI 49007
                 (616) 344-2043

                                                                         Page 2        100784112        Editor User's Manual



        BASIC MODES        BASIC MODES

            When you are editing with ED, the editor is always in one of
        three modes, called edit, insert, and command.  Each mode is
        adapted to a particular set of editing tasks.  Insert mode is
        used when a lot of text is being added to the file.  Edit mode is
        used for touring the file and making minor changes to many lines.
        Command mode is used with longer, BASIC-like commands that affect
        the overall structure of the file and possibly even delete parts
        of it.

            ED uses the 25th line of your screen as a status line to
        display the current mode, and other important facts such as the
        name of the file being edited. The status line is always
        displayed in reverse video, and tells:

            - the mode (command, edit, or insert),

            - the name of the file being edited,

            - the line in the file the cursor is on,

            - the column on the screen the cursor is on.

        The remainder of the screen, lines 1-24, is called the "edit
        area" in this manual and is used to display the actual text lines
        of the file you are working on.  Only 80 characters in a line can
        be displayed at any one time, even though ED can edit lines of
        up to 255 characters in length.

            To start ED from MS DOS, enter:

                 A>ed

        ED will clear the screen, display the status line at the bottom,
        and begin your editing session.




















                                                                         Page 3        100784112        Editor User's Manual



        COMMAND MODE        COMMAND MODE

            ED begins the edit session in command mode.  At this point
        the memory buffer is empty.  You must use the LOAD command to
        load a file into memory for editing, or enter insert mode and
        input new text lines into the buffer.  The LOAD command is
        described later in this section.

            Once editing is underway, you may freely switch between the
        three modes mentioned earlier.  The functions available in each
        mode are described in one of the next three sections of this
        manual.  The individual command mode commands are described below
        in this section.  When you read their descriptions, remember that
        the squiggly braces { and } are placed around items which you
        must supply as "arguments" to a command.  Also note that whenever
        a line number is mentioned, it refers to a line number in the
        file, not a BASIC line number.


        APPEND        APPEND

            The APPEND command has the format:

                 APPEND {d:filename.ext}

        APPEND loads the file {d:filename.ext} into the buffer at the
        line just ahead of the current line.  The name of the file being
        edited remains the same.


        CHANGE        CHANGE

            CHANGE is used to search for a pattern in a range of text
        lines and replace it with another.  The format of the CHANGE
        command is:

                 CHANGE {start line} {end line}

        After this has been typed, ED prompts for the old pattern by
        asking "from:" .  The old pattern is then entered. Just pressing
        the "enter" key cancels the command.  After getting the old
        pattern ED prompts "to:" for the new pattern.  When this is
        input the edit area clears and the changes made and their line
        numbers are displayed.  If you press any key on the keyboard
        during this process the change is cancelled at that point. If
        {startline} and {endline} are specified, the change occurs only
        over that line range.  If {endline} is omitted, the last line in
        the file is assumed.  If both {startline} and {endline} are
        omitted, all the lines in the file are assumed.







                                                                         Page 4        100784112        Editor User's Manual



        Search Strings        Search Strings

            In specifying a pattern to search for, two special characters
        may be used to make this process easier.

            The first, {^}, (the shifted-6 character on your keyboard)
        "anchors" the search to the start of the line in the file.  That
        is, only characters beginning in column 1 will be checked for the
        pattern.

            The second special character, {?}, is used as a "wild card",
        a character that matches any at all in the text line.


        Change Strings        Change Strings

            In specifying a new pattern for the CHANGE command, the {?}
        (wild card) character may be used to match a corresponding
        character in the old pattern.  There must be as many {?}s in the
        change string as there are in the search string.



        DELETE        DELETE

            The DELETE command is used to delete a range of lines in the
        buffer.  It has the format:

                 DELETE {start line} {end line}

        Here, {start line} and {end line} are used just as they are with
        the CHANGE command.  No check is made to see if the buffer has
        been saved before the DELETE command is executed, so use this
        command with care.  After DELETE completes, command mode resumes
        with the first line after those deleted shown at the top of the
        edit area.


        FIND        FIND

            The FIND command searches for a string in the file. When the
        string is found, ED will enter edit mode and the line will be
        displayed at the top of the edit area with the next 23 lines in
        the file shown below it.  The format of the FIND command is
        simply:

                 FIND

        If the string is not found, ED remains in command mode.







                                                                         Page 5        100784112        Editor User's Manual



        G (GOTO)        G (GOTO)

            The G command is used to go to a line in the file and enter
        edit mode.  The line is displayed at the top of the edit area,
        with the next 23 lines in the file shown after it.  G's format
        is:

                 G {n}

        Typing G with no line number is the same as pressing F1, the edit
        mode key.  Typing G * will take you to the end of the file.


        HELP        HELP

            The HELP command displays a one-page summary of ED's commands
        and function keys on the screen.


        LOAD        LOAD

            LOAD will read a file from diskette into the memory buffer,
        overlaying whatever text was there before.  If what you were
        editing wasn't saved, the "file not saved" message (see "NEW"
        below) is displayed.  The LOAD command's format is:

                 LOAD {d:filename.ext}

        The LOAD command also sets the filename on the status line for
        future SAVE and RESAVE commands.


        LLIST        LLIST

            The LLIST command is used to list a range of lines in the
        file on your printer.  Its format is:

                 LLIST {start line} {end line}

        The printer currently used by MS DOS as LPT1: will receive the
        output.  Both {start line} and {end line} work the way they do
        for the CHANGE command.  The listing produced will have the same
        format as the one produced by the LLIST.EXE program.


        LPAGE        LPAGE

            The LPAGE command is used to set the length of a page for the
        LLIST command to use.  Its format:

                 LPAGE {lines/page}

        The {lines/page} can be whatever your printer will allow, with a
        minimum of 5 lines/page required.


                                                                         Page 6        100784112        Editor User's Manual



        LWIDTH        LWIDTH

            The LWIDTH command is used to set the number of columns on a
        print line for the LLIST command.  If a line is longer than this
        number of columns, it will wrap on the listing.  The format for
        LWIDTH is:

                 LWIDTH {columns/line}

        The number of columns must be between 40 and 132.


        NAME        NAME

            NAME is used to set the name of the file for the SAVE and
        RESAVE commands.  Normally, NAME isn`t used much because the name
        of the file being edited is set by the LOAD command.  The format
        of NAME is:

                 NAME {d:filename.ext}

        No disk access is done by NAME, only the filename displayed on
        the status line is changed.


        NEW        NEW

            NEW will clear the current buffer and the filename.  Its
        format is simply:

                 NEW

        A check is made to see if the buffer has been saved before
        proceeding.  If not, the message:

                 file not saved. proceed? 

        is displayed.  Answering {y} will cause ED to clear the buffer
        and the edit area; Typing {n} will abort the command.


        PREP        PREP

            The PREP command will exit ED and then invoke the Structured
        BASIC preprocessor using the SB command.  It will pass along the
        name of the file being edited.  The file's extension is assumed
        to be .SB.  PREP will check to determine if the buffer has been
        saved before proceeding.  If it hasn't, you'll be given a change
        to save your file.  The format for PREP is simply:

                 PREP





                                                                         Page 7        100784112        Editor User's Manual



        RESAVE        RESAVE

            RESAVE will save the file currently being edited back to
        disk.  It assumes the file already exists.  The filename used               It assumes the file already exists.
        will be the one displayed on the status line.  The format of
        RESAVE is:

                 RESAVE


        SAVE        SAVE

            SAVE saves the file in the buffer back to disk.  Unlike
        RESAVE, it assumes the file does not exist.  If the file exists                it assumes the file does not exist.
        a warning message is displayed and nothing happens. The format
        for SAVE is:

                 SAVE


        SEARCH        SEARCH

            SEARCH will ask for a search string and will then display all
        the occurences of the string in the file.  The format of the
        SEARCH command is simply:

                 SEARCH


        SYSTEM        SYSTEM

            The SYSTEM command is used to exit ED and go back to MS DOS,
        just like it is in Microsoft BASIC.


        TABS        TABS

            The TABS command has the format:

                 TABS {n}

        This command sets the column stops for the tab key to every {n}
        columns.  Setting TABS less than or equal to 0 is the same as
        setting TABS to 1.  When ED is started,  4 is the initial tab
        setting.











                                                                         Page 8        100784112        Editor User's Manual



        EDIT MODE        EDIT MODE

            Edit mode is entered by pressing F1 at any time.  Edit mode
        is used for changing individual text lines and for touring the
        file.

            Edit mode operates normally as "edit: replace".  This means
        that the characters you type directly replace those under the
        cursor.  The PF, cursor arrow, PgUp, PgDn, Home, and End keys
        allow you to tour the edit area and make changes.  Pressing the
        Ins key will let you insert text at any point in Insert mode. The
        actions of all the special keys are described in the "ED KEY MAP"
        section of this manual.

            In addition, there are four extra editing functions available
        in edit mode.  These work on only the line the cursor is on and
        are described here below. They are activated by pressing F1
        within edit mode.  When these functions are active, text cannot
        be arbitrarily replaced and the mode is displayed as "edit:" on
        the status line.  To go back to "edit: replace" operation, press
        F1 again in edit mode.  The "setting" of edit mode is remembered
        if you go into command or insert mode and will be the one you
        resume edit mode with later.


        EDIT: GOTO        EDIT: GOTO

        Typing G will cause ED to ask for a line number. When this is
        supplied, this line is displayed at the top of the edit area and
        edit mode resumes.  This function works the same as G does in
        command mode.  You can type "*" to go to the end of the file.


        EDIT: KILL        EDIT: KILL

        Typing K will cause ED to ask for a single character.  After this
        is received, all the characters from the cursor right up to this
        character (or the end of the line if the character isn't found)
        will be deleted.


        EDIT: SEARCH        EDIT: SEARCH

        Typing S will cause ED to ask for a single character.  When this
        is entered, the cursor will move right to this character or the
        end of the line.


        EDIT: EXCHANGE        EDIT: EXCHANGE

        Typing X will cause ED to ask for a single character.  This
        character will then replace the one under the cursor.  If you
        have to replace a lot of text on a line you should press F1 and
        use the "edit: replace" method mentioned earlier.


                                                                         Page 9        100784112        Editor User's Manual



        INSERT MODE        INSERT MODE

            Insert mode is used for rapid entry of text.  You can enter
        Insert mode at any time by pressing the Ins key on the PC.  When
        this is done "insert" is displayed on the status line and the
        cursor fattens.  Text can now be entered in the edit area at the
        line the cursor is on.  The characters you enter will will be
        inserted to the left of the character the cursor was on when you
        started.

            In insert mode, only some of the special edit mode control
        keys retain their normal function.  These are summarized in the
        "ED KEY MAP" section of the manual. More importantly, the ENTER
        key will continue insert mode on the line below the cursor,
        opening a new line in the edit area, and scrolling the lines
        below down a line.

            Insert mode is exited by pressing Ins again to enter edit
        mode, or F1 (edit) or F2 (command).





































                                                                        Page 10        100784112        Editor User's Manual



        ED KEY MAP        ED KEY MAP

            This section lists ED's special keys and what they do.

            KEY             DESCRIPTION            ___             ___________

            F1      Enters edit mode.

            F2      Enters command mode.

            F3      In edit mode, moves cursor up one line and enters
                    insert mode (insert up).

            F4      In edit mode, moves cursor down one line and enters
                    insert mode (insert down).

            F5      In edit mode, splits the line at the cursor.

            F6      In edit mode, joins current line to end of line above
                    it.  All lines below the cursor move up one in the
                    edit area.

            F7      In edit mode, deletes entire line cursor is on.  All
                    lines below move up one in edit area.

            F8      Deletes from cursor through the end of the
                    current line.

            F10     Undoes any changes made in edit mode to current
                    line.

            Home    In edit mode, moves cursor to start of current line.

            End     In edit mode, moves cursor to end of current line.

            Up      In edit mode, moves cursor up one line.  Used in
            Arrow   insert mode, moves up a line and enters edit mode.

            Down    In edit mode, moves cursor down one line. Used in
            Arrow   insert mode, moves down a line and enters edit mode.

            Left    In edit mode, moves cursor left one character.
            Arrow   "Character" means a tab may move the cursor several
                    columns.  Also works in insert mode.  For lines
                    longer than 80 characters, the line itself will
                    scroll as needed.

            Right   In edit mode, moves cursor right one character.  Also
            Arrow   works in insert mode.  For lines greater than 80
                    characters, the line displayed will scroll as
                    needed.





                                                                        Page 11        100784112        Editor User's Manual


            KEY             DESCRIPTION            ___             ___________

            PgUp    In edit mode, starts scrolling the edit area forward
                    through the file (towards the front). Pressing any
                    key stops scrolling and resumes edit mode at the
                    cursor.

            PgDn    Same as PgUp, but scrolls down through the file.

            Ins     Insert mode toggle; enters insert mode, then enters
                    edit mode if used in insert mode.

            Del     Deletes character at cursor; line moves left one
                    character, cursor stays at same place. Works in both
                    insert and edit modes.

            <-      (Backspace) Deletes character to left of cursor;
                    cursor moves left one character. Works in both insert
                    and edit modes.

            <-'     (Enter) Has no effect in edit mode; in insert mode
                    moves cursor down one line and continues text
                    insertion.

            Space   In edit mode only, acts the same as the Left Arrow
            Bar     key, moving the cursor left one character.































                                                                        Page 12        100784112        Editor User's Manual



        ERROR MESSAGES        ERROR MESSAGES

            Here's a list of the error messages ED will give you when you
        do something wrong.  They will display on the status line after
        the incorrect command.  To continue editing when an error occurs,
        press "enter" and the message will disappear.

            If you ever receive a message prefaced by the words "error:",
        "disk error:", or "system error:", SAVE your changes to a new
        file immediately and then abandon your editing session!  One of
        these messages means ED has seriously malfunctioned.  Report it
        after gathering as much information as you can.


        command not found

            This message means you tried to use a command that wasn't one
            of the ones listed earlier.


        pattern not found

            The search string you tried to find in the file isn't there.


        bad line number

            You used a line number in the GOTO command that isn't a
            positive number.  Only the digits 0-9 can be used when you
            specify a line number.


        no file argument

            You tried to LOAD or APPEND a file without telling ED its
            name.


        file not found

            The file you tried to LOAD or APPEND from, or RESAVE to, does
            not exist on your diskette, or you misspelled its name.


        line truncated

            The result of a LOAD or CHANGE command was a line greater
            than 255 characters.  The line was chopped off on the right.
            You cannot currently edit lines with more than 255 characters
            in them.






                                                                        Page 13        100784112        Editor User's Manual



        file not named

            You have tried to SAVE or RESAVE a file without giving ED a
            name to use for it.  The NAME command will do this for you.


        file exists

            The file name you gave the SAVE command already exists on
            your diskette.  You need the RESAVE command instead.


        bad argument

            You gave a command using two arguments, such as DELETE, one
            or more that were not numbers.


        file not saved. proceed?

            You will receive this message whenever you use the LOAD or
            NEW command and you have not saved what you were working on.
            This is because these commands clear the memory buffer.
            Answer {y} or {n} depending on what you want to do - {y} to
            continue and destroy the buffer, or {n} to back out and
            cancel the command.  You don't need to press "enter" after
            typing {y} or {n}. 


        new line too long

            The line created in a CHANGE command by substituting the new
            pattern for the old one is turned out to be greater than 255
            characters long.  The CHANGE command aborts at this point.


        too many ?'s in change mask

            You had more ?'s in your change string than you did in your
            search string.  See the description of the CHANGE command in
            this manual for more information.


        error writing file

            You will receive this message when you try to SAVE or RESAVE
            your file and there isn't enough room on the drive you chose.
            Only part of the file has been saved.  You must insert a
            fresh diskette and try to save the file again.







                                                                        Page 14        100784112        Editor User's Manual



        KNOWN BUGS        KNOWN BUGS

            There are currently no known bugs in ED.  This last version
        took care of several.  If you find any, please report them
        immediately.

            In the next release of ED, we hope to add functions to move
        and copy lines of text.  This is the most pressing shortcoming of
        ED we know about.  Other planned enhancements include mouse
        support, directory information, and setting tabs, etc. through
        the DOS environment facility available in versions 2.x and
        above.












































                                                                        Page 15        100784112
```
{% endraw %}

## FILES162.TXT

{% raw %}
```
Disk No:  162
Program Title:  Basic Necessities
PC-SIG version: 1.3

This disk contains several handy items that are highly useful to a BASIC
programmer.  Its files include a source code archiver, a utility to
remove tabs from files, debug functions, and a structured BASIC
preprocessor.  This disk is must for any one doing any extensive
programming in BASIC.

Usage:  BASIC programmers.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

ARCH     EXE  Source code archiver.
ATTRIB   SB   Sample program.
CHARS    SB   Sample program.
CLS      INC  Fast screen clear functions.
DEBUG    INC  Debug functions.
DETAB    EXE  Utility to remove tabs from files.
ED       DOC  Editor manual  (26k).
ED       EXE  Program editor.
ENTAB    EXE  Utility to put tabs in files.
INPUT    INC  Input functions.
LC       SB   Sample program.
LLIST    EXE  Filename listing utility.
READ     ME   File to read first.
SB       DOC  Preprocessor manual  (30k).
SB       EXE  Structured BASIC preprocessor.
SCREEN   INC  Screen functions.
UTIL     DOC  Utilities manual  (17k).
XREF     EXE  Cross-reference.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk No: 162  Basic Necessities  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation on this disk, type:                        ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SB.DOC

{% raw %}
```




                                   October 1984

        This  document tells how to use the Structured BASIC preprocessor
        program,  SB.EXE,  and tells how to write programs for the IBM PC
        in  the  Structured  BASIC  language. This manual assumes you are
        familiar with MS DOS and Microsoft BASIC.











                              THE BASIC NECESSITIES                              THE BASIC NECESSITIES
                           PREPROCESSOR USER'S MANUAL                           PREPROCESSOR USER'S MANUAL






                             Manual version:   1.12

                             Software version: 1.12















                                   Marty Franz

                     525 W. Walnut St., Kalamazoo, MI 49007

                                 (616) 344-1821



               (C) Copyright 1983 Marty Franz - All rights reserved




        100784112        Preprocessor User's Manual



        INTRODUCTION        INTRODUCTION

            SB.EXE is a preprocessor program for Microsoft BASIC on the
        IBM PC.  It takes a program containing special Structured BASIC
        statements and translates it into a program containing BASIC
        statements.  Using SB.EXE helps you write more concise, better
        structured BASIC programs, because the preprocessor lets you take
        advantage of these features:

            - you now have the ability to write free-form, indented
              statements without line numbers.

            - you can now include statements from many separate files
              into a single BASIC program. This lets you write and
              maintain your programs in small modules.

            - you can organize your subroutines into procedures, each
              with its own alphanumeric name.

            - you can use structured programming statements similar to
              those found in programming languages like Pascal and C.

            Before using SB.EXE, please take the time to read these
        instructions carefully.  When using it, bear in mind that this is
        version 1.12 of the program, and there may be bugs in it.  If
        there is, or you have suggestions on improving Structured BASIC,
        please contact me:

                 Marty Franz
                 525 W. Walnut St.
                 Kalamazoo, MI  49007
                 (616) 344-2043

            One more thing: the program, and this manual, are copyrighted
        materials.  They may be freely distributed only for private,
        noncommercial use.  Please read the copyright notice on your
        diskette.


        A SAMPLE PROGRAM        A SAMPLE PROGRAM

            Before describing Structured BASIC in too much detail, let's
        first look at a typical program.  This will help you understand
        what SB.EXE does.  The file LC.SB on the diskette is a good
        example.  It asks for the name of a text file and counts the
        number of lines in it.  You can make a listing of LC.SB on your
        printer with the PRINT program supplied on the diskette:

                 A>llist lc

        (See the Utilities Manual for more information on the LLIST                 _________ ______
        program.)




                                                                         Page 2        100784112        Preprocessor User's Manual



            Your listing of LC.SB should look like this:

            'Sample program to count the lines in an ASCII file.

            procedure MAIN
               on error goto CHECK.FOR.EOF

               input "File Name"; FILE.NAME$
               open FILE.NAME$ for input as #1
               LINE.COUNT = 0 : DONE.SW = 0
               repeat
                   line input #1, L$
                   LINE.COUNT = LINE.COUNT+1
               until DONE.SW = 1
               print "There are";LINE.COUNT-1;"lines in ";FILE.NAME$
            endproc

            CHECK.FOR.EOF|
               ERROR.CODE = err : ERROR.LINE = erl
               if ERROR.CODE = 62
                  DONE.SW = 1
                  resume next
               else
                  print "BASIC error ";ERROR.CODE;"at";ERROR.LINE
                  stop 'Immediately halt program
               endif
            end

            This file (called a source file in this manual) was created                                ______ ____
        using the ED.EXE program.  For more information about ED, see the
        separate file about it on the diskette.  Don't worry at this
        point about the details of each statement in the program; we'll
        be covering them shortly.  For now, notice only that a Structured
        BASIC program, unlike a normal BASIC program, has line-number-
        free, neatly indented statements, and empty lines to separate
        blocks of statements. In fact, it resembles those Pascal programs
        you've seen in magazines more than BASIC.  Because the program
        looks more structured than BASIC, it ought to be easier to
        understand and maintain.

            Unfortunately, this program cannot be executed directly by
        BASIC.  We need to convert this program into one with everyday
        BASIC statements in it before we can run it.  This is what SB.EXE
        does.  To build a BASIC program out of LC.SB, we enter:

                 A>sb lc

        and these messages appear:








                                                                         Page 3        100784112        Preprocessor User's Manual



                 The Structured BASIC preprocessor 1.12

                 60KB to spare
                 Done with pass 2, 0 error(s) found.
                 22 lines processed,  147 lines/minute.

                 A>

            After the SB.EXE is done, if we then type the output file,
        LC.BAS, we see:

            A>type lc.bas

             10  'LC.SB 10-14-83   5:48a  22 lines
             20  GOSUB 50
             30  END
             40  'Sample program to count the lines in an ASCII
                 file
             50  'procedure MAIN
             60  on error goto 150
             70  input "File Name"; FILE.NAME$
             80  open FILE.NAME$ for input as #1
             90  LINE.COUNT = 0 : DONE.SW = 0
            100  line input #1, L$
            110  LINE.COUNT = LINE.COUNT+1
            120  IF NOT(DONE.SW = 1) THEN 100
            130  print "There are";LINE.COUNT-1;"lines in ";FILE.NAME$
            140  RETURN
            150  'CHECK.FOR.EOF|
            160  ERROR.CODE = ERR : ERROR.LINE = ERL
            170  IF NOT(ERROR.CODE = 62) THEN 210
            180  DONE.SW = 1
            190  resume next
            200  GOTO 230
            210  print "BASIC error ";ERROR.CODE;"at";ERROR.LINE
            220  stop 'Immediately halt program
            230  end

            A>

        This is a conventional BASIC program that can now be run using        ____
        BASIC or BASICA.














                                                                         Page 4        100784112        Preprocessor User's Manual



            To summarize our example, which demonstrated the process of
        creating a Structured BASIC program:

            1. We first use a text editor to write the program. The
               program contains special Structured BASIC statements
               (which we'll cover soon), is free of line numbers, has
               lots of blank lines and indenting, and is easier to read
               and maintain than regular BASIC.

            2. We then use the preprocessor program, SB.EXE, to
               translate the program into one with everyday BASIC
               statements in it.

            3. The translated BASIC program is now run and debugged as
               usual from BASIC.



        PROGRAM REQUIREMENTS        PROGRAM REQUIREMENTS

            To preprocess Structured BASIC programs, you need an IBM PC,
        jr, or XT with:

            - at least 64KB of memory,

            - at least one single-sided diskette drive,

            - a color or monochrome adapter, with a monitor capable of
              displaying 80-character lines.

            - MS DOS version 1.1 or 2.x, and

            - BASIC.COM or BASICA.COM

        You also need the file SB.EXE available on the diskette with
        BASIC or BASICA.




















                                                                         Page 5        100784112        Preprocessor User's Manual




        STRUCTURED BASIC STATEMENTS        STRUCTURED BASIC STATEMENTS

            Your source program is composed of Structured BASIC
        statements. A Structured BASIC statement is similar to an
        everyday BASIC statement, except the line number is missing:
        SB supplies this for you when it builds the BASIC program from
        your source program.  If

                 10 PRINT "Hello, world"

        is a BASIC statement, then

                 PRINT "Hello, world"

        is the matching Structured BASIC statement.  Only the line number
        is missing.  You can have any number of blanks and tab characters
        in your source statements.  In fact, this is encouraged since
        this helps make your Structured BASIC programs easier to read.





































                                                                         Page 6        100784112        Preprocessor User's Manual




        LABELS        LABELS

            Without line numbers in front of statements, you need another
        way to mark the places in a program where control is to go during
        its execution.  You can do this in Structured BASIC with
        alphanumeric labels instead of line numbers. In a BASIC program,
        we might write two statements as:

                 960 GOTO 1030

        and

                 1030 STOP 'End the program

        In Structured BASIC, these two statements would be written
        instead as:

                 GOTO THE.END

        and

                 THE.END| STOP

            Labels can be from 1 to 32 characters in length.  Only the
        characters 0-9, A-Z, a-z, and "." (period) can be in a label.
        This is to keep labels from conflicting from other BASIC
        keywords.  The "|" (vertical bar) is used only where the label is
        defined; notice that it's not there in the GOTO statement.  It's
        used to set the label off from the rest of the line.

            Another example of labels in a Structured BASIC program is in
        LC.SB. The statements:

                 on error goto CHECK.FOR.EOF

        and

                 CHECK.FOR.EOF|

        also demonstrate how labels are referenced (the ON GOTO
        statement) and defined (the CHECK.FOR.EOF| statement) in
        Structured BASIC.

        The Structured BASIC statements that can use labels are:

                 ON ERROR GOTO {label}
                 ON n GOTO {label1},{label2},...
                 RESTORE {label}
                 RESUME {label}
                 RETURN {label}





                                                                         Page 7        100784112        Preprocessor User's Manual



        PROCEDURES        PROCEDURES

            Structured BASIC provides procedures to help organize your
        programs.  Procedures are similar to BASIC subroutines, except
        they are identified by and called with an alphanumeric name.
        Procedures in Structured BASIC look like this:

                 PROCEDURE {procname}                 _________
                      statements making up the procedure
                 ENDPROC                 _______

        To GOSUB to a procedure you can use either:

                 GOSUB {procname}                 _____

        or

                 DO {procname}                 __

        with the rules for procedure names being the same as for label
        names.

        The other Structured BASIC statements that can call procedures
        are:

                 ON n DO {procname1},{procname2},...
                 ON COM(n) DO {procname}
                 ON KEY(n) DO {procname}
                 ON PEN DO {name}
                 ON PLAY(n) DO {procname}
                 ON STRIG(n) DO {procname}
                 ON TIMER(n) DO {procname}

            Every Structured BASIC program requires at least one
        procedure, called MAIN.  Control is always given to MAIN with a
        GOSUB when the program is started (see lines 10-50 of LC.BAS).
        So, our "Hello, world" example needs three statements to work
        properly:

                 PROCEDURE MAIN
                      PRINT "Hello, world"
                 ENDPROC

            Like white space, you should liberally use procedures in your
        Structured BASIC programs.  They help break your program into
        chunks for better organization.  Even a single statement deserves
        its own procedure if doing so will make the program easier to
        read.








                                                                         Page 8        100784112        Preprocessor User's Manual



        IF BLOCKS        IF BLOCKS

            The only place in your Structured BASIC programs where you
        can't freely use a label to stand for a line number is in an IF
        statement. Instead, a special form of IF is used in Structured
        BASIC, called an "IF block".  It looks like this:

                 IF {condition1}                 __
                      statements executed if {condition1} is true
                 ELSEIF {condition2}                 ______
                      statements executed if {condition2} is true
                 ELSE                 ____
                      statements executed if both conditions are false
                 ENDIF                 _____

        An example of an IF block is in LC.SB:

                 if ERROR.CODE = 62
                      DONE.SW = 1
                      resume next
                 else
                      print "BASIC error ";ERROR.CODE;"at";ERROR.LINE
                      stop 'Immediately halt program
                 endif

        Briefly, IF the variable ERROR.CODE has the value 62 then the
        statements DONE.SW = 1 and RESUME NEXT will be executed.  This
        will occur if we have reached the end of the file we are reading.
        If ERROR.CODE is not 62, then another, more sinister BASIC error
        has occurred that we don't know how to handle.  The statements
        after the ELSE display the error code and line number and stop
        the program.

            There can be more than one ELSEIF clause in the IF block.
        This is used to check for multiplie conditions without nesting
        single IF-ELSE-ENDIF blocks deeper and deeper.

            Why should you use IF blocks in a Structured BASIC program
        instead of BASIC's IF {condition} THEN {line number} statement?
        Because the IF block gives you the advantage of always knowing
        exactly where control begins and ends: with no GOTO statements in
        the IF and ELSE parts of the block, execution beginning at the IF
        statement will always resume after the ENDIF statement,
        regardless of what happens in between.  With BASIC's IF
        statement, you can picture control splitting into two separate
        paths with each THEN.  Pretty soon, as patches and revisions are
        made, your program becomes a mess of "spaghetti code".









                                                                         Page 9        100784112        Preprocessor User's Manual



            If you faithfully use the IF block for your program's logic
        you should seldom find the need for a GOTO statement.  GOTOs
        should be saved only for unusual conditions that require special
        processing, such as errors.

            If you should require a GOTO, or you want to execute just a
        single statement with an IF, Structured BASIC provides a special
        "short form" of the IF for your convenience.  In addition to the
        block format described above, you can use one of these formats:

                 IF {condition} BREAK
                 IF {condition} DO {procname}
                 IF {condition} GOSUB {procname}
                 IF {condition} GOTO {label}
                 IF {condition} THEN {any BASIC statement}

            These statements are for the IF only and cannot be paired
        with an ELSEIF, ELSE, or ENDIF.  They are intended for
        single-statement use only.





































                                                                        Page 10        100784112        Preprocessor User's Manual



        REPEAT AND WHILE BLOCKS        REPEAT AND WHILE BLOCKS

            Right now, many of your program loops in BASIC are written
        using IFs and GOTOs.  To help make these more structured,
        Structured BASIC provides a REPEAT block for executing a group of
        statements over and over until a terminating condition is
        reached.  It looks like this:

                 REPEAT                 ______
                      statements to keep repeating
                 UNTIL {condition}                 _____

        A REPEAT block is used in LC.SB:

                 repeat
                     LINE INPUT #1, L$
                     LINE.COUNT = LINE.COUNT+1
                 until DONE.SW = 1

        Remember that REPEAT is like any loop you might make with GOTOs
        in BASIC: you need to change something at some point in the
        statements you're repeating to stop the loop or you'll continue
        forever.

            Besides meeting the condition for termination, you can use a
        BREAK statement in the REPEAT block to transfer control
        immediately outside the loop.  To use a BREAK statement, simply
        specify

                 BREAK                 _____

            Besides REPEAT, Structured BASIC provides a WHILE loop
        similar to the one already in Microsoft BASIC:

                 WHILE {condition}                 _____
                      statements to repeat while {condition} is true
                 ENDWHILE                 ________

            When using the WHILE block, remember that the {condition} is
        tested before the statements in the body of the loop are ever
        executed, so it's possible to not do them at all.  Also, be sure
        you use ENDWHILE instead of WEND in Structured BASIC, or
        SB.EXE will give you an error message.  When the BASIC program is
        generated, a WHILE block will not have any Microsoft WHILE
        statements in it.  Instead, IFs and GOTOs are used to make the
        loop, so the program can be converted to computers that don't
        have as advanced a version of BASIC.

        You can also use BREAK to get out of a WHILE loop.







                                                                        Page 11        100784112        Preprocessor User's Manual



        INCLUDE FILES        INCLUDE FILES

            A useful technique in programming is designing a program as a
        set of small, independent modules.  This makes programs easier to
        change, since revisions (like a changing the layout of a file)
        only affect a small component (the subroutines that read or write
        the file).  Modular programming is hard to do with BASIC because
        all the pieces of your program must be present in a single file,
        with one set of line numbers.  To help you develop your programs
        as small modules, Structured BASIC has an INCLUDE statement.
        Before telling you what it does, here's what it looks like:

                 INCLUDE {filename.ext}                 _____

            INCLUDE is used to bring statements into a program from a
        completely separate file during preprocessing, to be part of the
        program when it's translated into BASIC.  The statements in the
        "included" file are also Structured BASIC statements.  They can
        define and reference labels, procedures, and blocks exactly as if
        they were in the original source file.  In fact, the INCLUDEd
        file can itself have INCLUDE statements in it.

            INCLUDE is an extremely useful feature of Structured BASIC,
        because now you can write frequently-used pieces of programs,
        such as input routines and screen formatters, once as sets of
        Structured BASIC procedures and just INCLUDE them into each new
        program that you write.  When you edit these new programs you
        don't have to manually APPEND the pieces, since SB.EXE will
        automatically take care of the line numbering for you.  (But not
        the variables.)



        MULTIPLE STATEMENTS        MULTIPLE STATEMENTS

            In BASIC programs, you can write several statements on a
        single line by separating them with the {:} character.  Since
        SB.EXE creates a BASIC program from the statements you give it,
        the {:} character will work just as it does in BASIC, but with an
        important exception: the special Structured BASIC statements
        mentioned here cannot be used in multiple lines.  Instead, they                       ______
        must have their own line whenever you use them.  This restriction
        may change in another version of SB.EXE.













                                                                        Page 12        100784112        Preprocessor User's Manual



        ERROR MESSAGES        ERROR MESSAGES

            When SB.EXE processes your program, it makes two sweeps or
        "passes" across it.  The first pass checks for errors.  There
        aren't very many that you can make, since most of your program
        will be passed through, untouched except for the addition of line
        numbers, to BASIC.  There are, however, a few ways to produce an
        error message.  The possible messages that you can get are listed
        below, along with an explanation of how to fix the statement that
        caused them.  All of these messages will begin with the name of
        the file being processed (since the error might be in an INCLUDEd
        file) and the offending line number.


        label {name} defined previously at {file} line {n}

            If this error message is displayed it means you have defined
            the label {name} twice (or more...) in your program.  A good
            candidate for the source of this problem is an INCLUDEd file
            with a duplicate of a label you are using in your program.


        label {name} referenced at {file} line {n} undefined

            This error message is saying that you have forgotten to
            define the label {name} in your program.  Possible causes of
            this are forgetting an INCLUDE file (especially likely if you
            see a lot of these messages) or misspelling the label.


        label {name} type mismatch with {file} line {n}

            This error message is displayed when you try to GOTO a
            procedure name or DO a LABEL|.


        {type} block not active

            You used an ENDIF, ENDWHILE, or UNTIL statement in your
            program without first using IF, WHILE, or REPEAT.


        {type} block already begun at {file} line {n}

            You tried to put two ELSE statements in one IF block.  You
            have probably forgotten an IF statement somewhere.


        procedure {name} already begun at {file} line {n}

            You cannot have two procedures started at the same time.  You
            must end the first procedure, {name}, with an ENDPROC
            statement before you can begin your new procedure.



                                                                        Page 13        100784112        Preprocessor User's Manual



        procedure not begun first

            This error message means that an ENDPROC statement was found
            in your program when no PROCEDURE statement was active.


        no WHILE or REPEAT for BREAK

            This error message is displayed when you use a BREAK
            statement outside a WHILE or REPEAT blocks.  Remember that a
            BREAK transfers control to the statement immediately after
            the nearest ENDWHILE or UNTIL.



        SB.EXE ABORTS        SB.EXE ABORTS

            If you specify a source or object filename that can't be read
        or written to for some reason (such as the name being misspelled,
        the diskette having its write-protect notch covered, etc.) the
        preprocessor program will print the message:

                 Can't open file: {filename.ext}

        If this happens, you should check to make sure that the source
        file can be read, that any INCLUDEd files it uses can be read,
        and that the object file can be written to.





























                                                                        Page 14        100784112        Preprocessor User's Manual



        PREPROCESSOR SPEED        PREPROCESSOR SPEED

            This version of SB.EXE can process your programs at the
        rate of 120-300 lines per minute.  As you can see, this rate is
        highly variable and is based on a number of factors, such as the
        speed of your disk drives, the version of MS DOS you are using,
        even the location of the files on the diskette.  If you have
        frequently-used INCLUDE files you might want to consider putting
        them on a RAM disk if you aren't going to change them often. This
        should improve processing time a lot.


        KNOWN BUGS        KNOWN BUGS

            There are a two known bugs in this release of SB.EXE.  The
        first involves writing the output BASIC program to a nearly-full
        diskette.  When this happens, no warning error occurs, and only
        part of the program is written.  Check to make sure this doesn't
        happen when your working diskettes are nearly full.

            The second bug concerns error recovery when many REPEAT,
        WHILE, and IF blocks are nested.  When an error occurs, the error
        message might not tell you the block in error.  Check all the
        logic blocks in the vicinty of the statements mentioned for an
        error.

            These bugs will be fixed in the next version of the
        Structured BASIC preprocessor.


        SB VS. BASIC        SB VS. BASIC

            Once you've mastered the Structured BASIC statements, there
        aren't many reasons to continue entering and debugging BASIC
        programs the old way.  You'll probably find that with a little
        practice Structured BASIC programs really are easier to write and
        maintain.  The only reasons to modify the translated BASIC
        programs directly are:

            1.  Quick "patches" or minor changes to the BASIC program
                when the Structured BASIC source code isn't available or
                there isn't time to edit it again. (Such as when you're
                at the customer's office and the payroll program isn't
                working.)

            2.  "Fine tuning" for better performance, to straighten out
                Structured BASIC's "inside out" IF statements and extra
                GOTOs in programs where speed and memory size are
                crucial.







                                                                        Page 15        100784112        Preprocessor User's Manual



        STATEMENT REFERENCE        STATEMENT REFERENCE

            Here's a list of all the special statements available to you
        in this version of SB.EXE.  For a complete description of how to
        use them, see the individual sections in this manual.

                 BREAK

                 DO {procname}

                 ELSE

                 ELSIF

                 ENDIF

                 ENDPROC

                 ENDWHILE

                 IF {condition}
                 IF {condition} BREAK
                 IF {condition} DO {procname}
                 IF {condition} GOSUB {procname}
                 IF {condition} GOTO {procname}
                 IF {condition} THEN {any BASIC statement}

                 GOSUB {procname}

                 GOTO {label}

                 INCLUDE {d:filename.ext}

                 ON n DO {procname1},{procname2},...
                 ON COM(n) DO {procname}
                 ON KEY(n) DO {procname}
                 ON PEN DO {name}
                 ON PLAY(n) DO {procname}
                 ON STRIG(n) DO {procname}
                 ON TIMER(n) DO {procname}

                 ON n GOTO {label1},{label2},...
                 ON ERROR GOTO {label}

                 REPEAT

                 RESTORE {label}

                 RESUME {label}

                 RETURN {label}

                 UNTIL {condition}

                 WHILE {condition}

                                                                        Page 16        100784112        Preprocessor User's Manual



























































                                                                        Page 17        100784112
```
{% endraw %}

## UTIL.DOC

{% raw %}
```



                                   October 1984

        This  document  tells  how  to  use  the Structured BASIC program
        debugger,  lister,  and  library  routines.  These utilities make
        writing Structured BASIC programs easier. This manual assumes you
        are familiar with MS DOS and Microsoft BASIC.











                              THE BASIC NECESSITIES                              THE BASIC NECESSITIES
                             UTILITIES USER'S MANUAL                             UTILITIES USER'S MANUAL






                             Manual version:   1.12

                             Software version: 1.12















                                   Marty Franz

                     525 W. Walnut St., Kalamazoo, MI 49007

                                 (616) 344-1821



               (C) Copyright 1983 Marty Franz - All rights reserved





        100784112        Utilities User's Manual



        INTRODUCTION        INTRODUCTION

            The BASIC Necessities is a complete BASIC programming system
        for the IBM Personal Computer.  It features a text editor for
        entering and changing Structured BASIC statements, and a
        preprocessor for converting Structured BASIC programs into BASIC
        programs that can be executed on the PC.  The preprocessor and
        editor User's Manuals describe these programs in detail.  This
        manual concerns itself with several additional programs that can
        make writing and debugging Structured BASIC programs easier:

            - LLIST.EXE, a program to list your Structured BASIC
              source files on a printer with your choice of several
              formatting options,

            - XREF.EXE, a cross-reference generator,

            - ENTAB, DETAB, and ARCH, convenient utility programs,

            - DEBUG.INC, a debugger module that lets you debug your
              Structured BASIC programs at the procedure level, and

            - the files SCREEN.INC, CLS.INC, and INPUT.INC, library files
              containing procedures that can be included into your
              Structured BASIC programs to make your programming easier.


        PROGRAM REQUIREMENTS        PROGRAM REQUIREMENTS

            To successfully use these utility programs, your need an IBM
        PC, XT, or jr with:

            - at least 64KB of memory,

            - at least one single-sided diskette drive,

            - a color or monochrome adapter, and a monitor capable of
              displaying 80-character lines,

            - MS DOS version 1.1 or 2.0, and

            - the files BASICA.COM or BASIC.COM.














                                                                         Page 2        100784112        Utilities User's Manual



        THE PROGRAM DEBUGGER        THE PROGRAM DEBUGGER

              The Structured BASIC program debugger is used during
        development to trace Structured BASIC program execution at the
        procedure level. (For more information about "procedures" and the
        rest of the Structured BASIC language, please consult the
        Structured BASIC User's Manual.)  By including the file DEBUG.INC
        in your program during preprocessing, and using the DEBUG and
        NODEBUG statements, you can perform these helpful functions when
        you are testing your program from within BASIC:

            - you can see the execution of each procedure on the screen
              as it is called by a DO or GOSUB statement,

            - you can set a trap in your program to stop when a certain
              procedure is reached, (this is called a "breakpoint")

            - you can stop your program, exit into BASIC, print the
              values of your variables, then resume execution again, and

            - you can dump the "stack" of procedures called whenever you
              stop the program's execution.


        USING THE DEBUGGER        USING THE DEBUGGER

            To use the program debugger, you need to include the file
        DEBUG.INC into your Structured BASIC source program.  Then, you
        must select the individual procedures to be debugged by using the
        DEBUG and NODEBUG Structured BASIC statements.  Here's an
        example:


                 INCLUDE DEBUG.INC   'Include the debugger procedures.

                 DEBUG               'Turn on debugging.

                 PROCEDURE MAIN      'First procedure to be debugged.
                     .
                     .
                 ENDPROC

                 PROCEDURE ...
                     .               'More procedures to be debugged are
                     .                here.
                 ENDPROC

                 NODEBUG            'Turn off debugging.

                 INCLUDE SCREEN.INC  'Procedures here will not be
                                      debugged.


        The statements DEBUG and NODEBUG work just like a switch.  When
        DEBUG is encountered, all the procedures following it will have

                                                                         Page 3        100784112        Utilities User's Manual


        calls to debugger routines generated after their first and last
        statements.  When NODEBUG is reached, this generation is turned
        off.  Both DEBUG and NODEBUG must appear in a source file outside
        a procedure.  When you run your program from BASIC, these extra
        calls help the debugger determine where in execution is in the
        program.


        DEBUGGING IN BASIC        DEBUGGING IN BASIC

            After your program has been preprocessed with debugger
        statements in it, it can be run from BASIC.  The debugger will
        get control before procedure MAIN does, and will display a list
        of available commands and prompt you for one with "debug:"
        displayed on line 25 of the screen.  The commands you can use in
        the debugger are:

                 X    to exit to BASIC with a STOP statement.  This
                      allows you to print key variables in your program
                      and list parts of your code.  The BASIC CONT
                      command can be used to continue execution.

                 B    to have the debugger prompt you for a breakpoint.
                      Enter the name of the procedure where you want the
                      program to stop next.  If you don't want to stop at
                      any procedures during execution, just press enter.

                 D    to display the names of the procedures currently
                      active, along with their appropriate line numbers.
                      This will be shown  enclosed by a frame in the
                      upper right corner of your screen.  The topmost
                      procedure in the list will be the one currently
                      being executed, with the one below it being the one
                      that called it, etc.  This can be used to help you
                      trace the location of bugs in the program.

                 G    to resume execution of the program.

            As your program is running, the procedures being executed are
        displayed on line 25 of the screen along with the line number
        they start on.  You can stop execution of the program at any time
        by pressing F10.  This will enter the debugger at the next
        procedure encountered.

            Besides stopping at a breakpoint or by F10 on the keyboard,
        the debugger is entered whenever a BASIC error is encountered.
        The error message and line number will be displayed on line 25 of
        the screen.  A line number of 65535 means the error happened in
        direct mode.

            The debugger is in Structured BASIC source code and can be
        changed for special needs.  You might want to do this if you are
        developing programs that do a lot of color or graphics, since the
        debugger assumes a text screen with 25 lines of 80 characters.
        All of the debugger's variable definitions are contained in the
        procedure DEBUG.SETUP, which is called before MAIN is when your

                                                                         Page 4        100784112        Utilities User's Manual


        program is started.
























































                                                                         Page 5        100784112        Utilities User's Manual



        THE LLIST PROGRAM        THE LLIST PROGRAM

            The file LLIST.EXE on your Structured BASIC program disk is a
        general-purpose print utility.  With it, you can print your
        Structured BASIC source files, selecting any of several
        formatting options.

            LLIST's syntax is similar to other MS DOS commands.  You must
        supply it the name of the file you want to list, and additional
        information through program "switches" to select any extra
        formatting options.  LLIST's format is:

                 A>LLIST {/n /p /s /ln /wn /tn} file1 file2 ...

        Only a file name is required.  An extension of .SB is always
        assumed.  You must put the switches before the names of the files
        you want them to effect.  The switches control these options:

                 /n    omits page headings from the listing. Normally,
                       your listing will have the filename, date, time,
                       and page number at the top of each page.  The /n
                       switch overrides this.

                 /p    is used when you are printing on single-sheet
                       paper.  This will pause the program between pages
                       so you can change sheets.  Press the "enter" key
                       to continue with the next page.

                 /s    includes line numbers in the listing.  This switch
                       is especially useful when you are debugging
                       Structured BASIC programs and you need to match
                       the line numbers of the preprocessor's error
                       messages to the source statement.

                 /ln   sets the length of a page to n lines.  This is
                       useful when printing on short forms or in
                       compressed format.  Normally, this option is set
                       to 60 lines/page.

                 /tn   sets tab stops every n columns.  Normally, you
                       don't need to use this with Structured BASIC
                       source files, since it is set by default to 4
                       columns.  You might need to change this option for
                       other languages like Pascal or C.  The maximum tab
                       setting allowed is 10.











                                                                         Page 6        100784112        Utilities User's Manual


                 /wn   sets the width of a page to n characters/line.
                       Use this option for printing in compressed format,
                       since the default is 80 characters/line.  Up to
                       132 characters may be used.

                       Note:                       _____

                       This option is unaffected by the setting of the MS
                       DOS "mode" command.


            For normal use printing Structured BASIC source files, you
        shouldn't need to use any of these options.  Here are some
        examples of LLIST:

                 A>llist a:debug.inc

                      prints the file A:DEBUG.INC with standard tabs,
                      page length (60 lines/page), and page width (80
                      characters/line).


                 A>llist /t2 /p screen.inc

                      prints SCREEN.INC from the A: drive with tabs set
                      every 2 columns and a pause after every page.


                 A>llist /w132 /l82 /p b:input.inc

                      prints the file INPUT.INC on drive B: with a page
                      width of 132 characters/line and a page length of
                      82 lines/page. The switch /p is used to that the
                      paper can be manually advanced after every page.
                      This combination of options can be used for
                      extremely compressed listings on an Epson or IBM PC
                      printer.




















                                                                         Page 7        100784112        Utilities User's Manual



        THE XREF PROGRAM        THE XREF PROGRAM

            The XREF.EXE program generates cross-references of your
        Structured BASIC source files.  The cross-reference report
        consists of a source listing with line numbers, followed by a
        table showing all the variables, procedure names, and statement
        labels in alphabetical order and a list of the line numbers that
        use them.  XREF's format is:

                 A>XREF {/i /r /ln /wn /tn} file1 file2 ...

        Only a file name is required.  An extension of .SB is always
        assumed.  You must put the switches before the names of the files
        you want them to effect.  The switches control these options:

                 /i    cross references any INCLUDE files referenced in
                       the file.  This option can generate a lot of
                       listing.

                 /r    Includes the names of reserved words (OPEN, IF,
                       PRINT, etc.) in the report.  A useful option when
                       resolving variable name conflicts or converting
                       programs from other versions of BASIC.

                 /ln   sets the length of a page to n lines.  This is
                       useful when printing on short forms or in
                       compressed format.  Normally, this option is set
                       to 60 lines/page.

                 /tn   sets tab stops every n columns.  Normally, you
                       don't need to use this with Structured BASIC
                       source files, since it is set by default to 4
                       columns.  You might need to change this option for
                       other languages like Pascal or C.  The maximum tab
                       setting allowed is 10.





















                                                                         Page 8        100784112        Utilities User's Manual


                 /wn   sets the width of a page to n characters/line.
                       Use this option for printing in compressed format,
                       since the default is 80 characters/line.  Up to
                       132 characters may be used.

                       Note:                       _____

                       This option is unaffected by the setting of the MS
                       DOS "mode" command.
















































                                                                         Page 9        100784112        Utilities User's Manual



        SAMPLE LIBRARY FILES        SAMPLE LIBRARY FILES

            The files SCREEN.INC, CLS.INC, and INPUT.INC on the
        Structured BASIC program disk contain several useful procedures
        for handling screen input and output.

            SCREEN.INC contains routines for drawing boxes and frames on
        the screen, putting status messages on line 24, and drawing
        titles and headings.

            CLS.INC has an assembly language routine and two procedures
        that make clearing areas on the screen from your programs much
        faster.  (Prior to this, you had to output blank strings to clear
        several lines.  This was very slow and made screen-oriented
        programs slow as a result.)

            INPUT.INC contains routines for getting strings with INKEY$,
        reading a single character from the keyboard, and simulating a
        blinking cursor under program control.

            These library files can be included in your programs with the
        statements:

                 INCLUDE SCREEN.INC (automatically includes CLS.INC)

        and

                 INCLUDE INPUT.INC

            Descriptions of the routines can be found in the files
        themselves.  Studying them is also a good way to learn more about
        using Structured BASIC. The sample Structured BASIC programs
        CHARS.SB, ATTRIB.SB and SDIR.SB all make use of these
        procedures.






















                                                                        Page 10        100784112
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0162

     Volume in drive A has no label
     Directory of A:\

    ARCH     EXE     19072   6-18-84   7:09p
    ATTRIB   SB       1878   6-25-84  11:47a
    CHARS    SB       1443   6-25-84  11:46a
    CLS      INC      1185   6-25-84  12:00p
    DEBUG    INC      8143   6-25-84  11:38a
    DETAB    EXE     15744   7-18-84  10:33p
    ED       DOC     26803  10-10-84   8:26p
    ED       EXE     36992   7-20-84   8:16p
    ENTAB    EXE     15872   6-15-84  12:11p
    FILES162 TXT      1325   1-27-89   2:20p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-01-88   2:14p
    INPUT    INC      2229   6-25-84  11:20a
    LC       SB        609   6-25-84  10:33a
    LLIST    EXE     16896   6-14-84  12:26a
    MANUAL   BAT       147   6-08-88   3:02p
    READ     ME       4381  10-10-84   8:49p
    SB       DOC     30189  10-10-84   8:18p
    SB       EXE     28416   6-18-84  10:34p
    SCREEN   INC      2233   6-25-84  10:43a
    UTIL     DOC     17234  10-10-84   8:29p
    XREF     EXE     26624   6-15-84  11:12a
           22 file(s)     258147 bytes
                           52224 bytes free
