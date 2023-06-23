---
layout: page
title: "PC-SIG Diskette Library (Disk #2973)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2973/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2973"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BREEZE46.DOC

{% raw %}
```


	The file BREEZE46.ZIP is a compressed file that contains the
	word processor/text editor BREEZE and its accompanying files.
	The popular program PKUNZIP is needed to uncompress the BREEZE
	files so you can use them.

```
{% endraw %}

## BRZEXMPL.DOC

{% raw %}
```
p                       EXAMPLE TEXT FILE FOR BREEZE V4.6


                          *******  BREEZE   *******
                        (Word processor/text editor)

                                 Version 4.6



            This is an example text file to show you how to get the most
        out of BREEZE.  The unusual characters scattered around this
        file are used in various special functions, and these are
        explained.



        Highlighting

            The highlighting of the words at the top of this file is
        achieved by inserting the special characters for boldfacing
        (Shift-F5 to begin boldface and Shift-F6 to end boldface).  The
        corresponding keys to insert special characters for italics
        are Shift-F7 and Shift-F8.  Mark text to be underlined with the
        Shift-F9 and Shift-F10 keys.



        Turning your text into an executable file

            You can easily turn the text you are currently reading into a
        self-displaying executable program.

            Note the line at the very top of the file starting with the
        letter "p".  This character indicates text to be used as a title
        bar at the top of the screen, as well as to enable printing
        permission when you turn this text into a self-displaying
        executable file.  To convert text into an executable program,
        firstly load the document into BREEZE, then select the "Text to
        .EXE" option in the Extras menu.  The extras menu is reached
        through the main menu.  (Press the F10 key, or Esc, for the main
        menu, then press "E" for Extras and then "E" again to create the
        .EXE file).  Note: the file BREEZE.DAT must be available for the
        conversion to work.  (BREEZE.DAT is contained in the compressed
        file BRZUTS46.EXE on the distribution disk, and must be
        uncompressed before it can be used).



            If you want menus in the self displaying text program (for
        instant access to certain portions of text), then you need to
        create text that looks something like the following:



                                    MAIN MENU

   Select from the        1.  Introduction  (What is BREEZE?)
   following or scroll    21.  Go to first screen.
   through the text       3.  Trying out a few features.
   at your leisure.




            Notice the special character (ascii character number 15)
        which appears after the menu option number - and after the style
        character as it happens in this case).  This special character
        tells BREEZE to treat this text as a menu option when it creates
        the .EXE file.  To enter the special character, press Ctrl-Y,
        then enter the number 15.  The third option has a number 1
        following the special menu character, meaning "go to line 1 when
        the option number three is pressed".  The first two options have
        no such number, so the number is automatically determined by
        BREEZE during the conversion process.  In the case of option 1
        BREEZE will search the document for text matching
        "Introduction".  The text it is searching for must be enclosed
        in "< >" brackets.  If this text is found then BREEZE will know
        to go to that line number when this menu option is selected.




                              <INTRODUCTION>


            BREEZE is an easy to use word processor/text editor that
        does everything you ever wanted of an editor, and more!  This
        program has been designed with one thing in mind... PLEASURE.
        You will find the simplicity of BREEZE a breath of fresh air
        compared to the oppressive and boring alternatives.

            Note: This is not a free program, but is being distributed
        as "shareware".  See the licence information below or the
        accompanying registration file for registration.  When you
        register you will receive the new version of BREEZE, along with
        a special BONUS diskette full of extra programs you can use with
        BREEZE.






                         <TRYING OUT A FEW FEATURES>


        Help

            Hold down the Ctrl key for a few seconds.  At the bottom of
        the screen you will see the functions available under the Ctrl
        key.  For example, Ctrl-T will insert the date into the text at
        the cursor position.

            Try the Alt key also.

            Press the F1 key for more extensive on-line help.  You can
        move backwards and forwards through the help windows along any
        line of interest.


        If you have a mouse

            Double clicking the left button will bring up the main menu.

            Double clicking the right button will bring up the current
        window list (choose desired window to work in).

            Pressing the left button will mark the beginning of a block.

            Pressing the right button will mark the end of the block.

            - When you are in the main menu, or anywhere other than in
        the main edit window, pressing the left button is the same as
        pressing the return key (accept) and pressing the right button
        is the same as pressing the escape key.


        Disk space

            Press the Alt-F2 key followed by Enter to see how much free
        disk space you have available on the currently logged drive.


        Blocks

            Mark blocks with F7 and F8, or mouse left button and mouse
        right button (to mark the beginning and end of a block).  Try
        pressing Ctrl-U to analyze the text within that block.  Text
        analysis works best when used on reasonable quantities of text.


        Drawing lines and boxes

            Press F10 to bring up the main menu, then "E" for extras,
        followed by "L" to select line drawing mode.  Use the arrow keys
        to draw lines, and press escape when you are finished.  You can
        lift the pen up and down with "/".  Pressing "E" activates and
        deactivates an eraser.


        Centre a line

            Place the cursor on a line of text and press Ctrl-N to
        centre it between the margins.


        Protect a paragraph from formatting

           This paragraph is protected from formatting because it has
        the special character in front of the first line (Alt-F1).
        This is specially useful for protecting tables of numbers
        or stanzas of poetry from disruption during formatting of
        a document.


        Find text

            Press Ctrl-F to find text in the document.


        Repeat last find

            Press Ctrl-L to repeat the last find.


        Delete line

            Press Ctrl-D to delete a line.


        Insert a line

            Simply pressing the Enter key inserts a line when insert
        mode is on (large cursor).  Press the Ins key to toggle between
        insert and overwrite modes.


        Column statistics

            Do a statistical analysis on the following numbers.

                2.3
                2.1
                2.3
                2.2
                2.5

            Place the cursor touching the column of numbers and go to
        the extras menu (from the main menu - F10) and select column
        statistics to see the results.


        Sort some names by surname

            Jack Sullivan
            Pauline Jackson
            Philip Carter


            Put the names above inside a block (press F7 to mark the
        block beginning and F8 to mark the end of the block) then press
        Alt-T followed by the number 2 to sort using the second word in
        the line (that is, the surname).


        A couple of print features

            The following command will tell BREEZE to force the printer
        to advance to a new page when printing.

            *PAGE*

            The following command will tell BREEZE to print the file
        REGISTER.DOC at this point, before proceeding with the printing
        of the current file.

            *LINK REGISTER.DOC*



        A simple example text using mail merge

        * Note: mail merge available in registered version only.


        *first name* *surname*
        *no. and street*
        *suburb*
        *city*
        *state*  *postcode*


        Hello my dearest friend *first name*,

            I enclose a copy of BREEZE, a marvelous word processor/text
        editor.  Try it out and let me know what you think.  If you find
        it useful, and I'm sure that you will because it's got more
        useful features than anything I know of, then please register
        and send me some money.

                                            Yours faithfully.

                                                  Kevin Solway

        P.S  Is your number still *phone*?









    *******************************************************************

              PLEASE ENJOY TRYING OUT THE MANY OTHER FEATURES

    *******************************************************************

                               KEEP BREEZIN !

    *******************************************************************





```
{% endraw %}

## BRZUPDAT.DOC

{% raw %}
```

        BREEZE           Copyright (c)  Kevin Solway,  1989-92



                                 - UPDATES -

                                 (Since 1991)



        Version 3.2

            - Much faster sorting, especially noticeable on large files.


        Version 3.3

            - Improved support for mono monitors.
            - Corrected faulty installation instructions in the
              file README.1ST
            - Improved BRZMERGE.EXE.  You can now use the up and
              down arrows to move through the fields when editing
              them.


        Version 3.4

            - Underlining has now been included as a text style option.
              Begin underlining with shift-F9 and end with shift-F10.
              The keys for boldfacing and italics have been moved
              to shift-F5 ... shift-F8  (ie, shift instead of Alt).
            - Improved line drawing facilities.  The pen can now be
              lifted up and down, and there is also an eraser which can
              similarly be lifted up and down.
            - Bug fixes - autosave was not reset correctly if altered
                          from the configuration menu rather than from
                          the pull-down menu.
                        - the dictionary was not read in correctly if
                          there were blank lines at the end of the
                          personal dictionary.
                        - the spelling checker sometimes didn't work
                          correctly when Breeze was executed from within
                          another program, due to memory problems.  This
                          has now been fixed.
                        - fixed problem with keys in BRZMERGE.EXE.  When
                          entering some capital letters unwanted
                          functions could be triggered!
            - Escape codes for printer control can now be inserted
              directly into the document.  This can be handy if your
              printer has some unusual features or printer codes not yet
              supported by BREEZE.  For example, the character string
              p1 (that is, the escape character - #27, followed by the
              characters "p" and then "1") inserted into a document will
              select proportional letter spacing on a Star NX-1000
              printer (this printer is supported).  Note, you can insert
              the escape character (ascii character number 27) into your
              document with the Ctrl-Y feature.


        Version 3.5

            - Finally fixed bug with speller - sometimes hung when run
              from inside another program!


        Version 3.6

            - Added further support for those people familiar with
              Wordstar commands.  For example, Ctrl-K-B for mark
              beginning of block and Ctrl-K-K to mark the end of the
              block, Ctrl-Q-F for find, etc.
            - Seek place marker is now Ctrl-Q-S instead of Ctrl-K.
            - Formatting commands now indent text to the left margin if
              necessary.  After you have imported text (either by
              loading a file or by reading a file into the document as a
              block) you can then format it to the conform to the left
              margin set within BREEZE.
            - With insert mode set to ON the tab key now inserts spaces
              into the text.  With insert mode set to OFF the tab key
              simply moves the cursor over the text.
            - Now autodetects date format for date stamp.


        Version 4.0

              With version 4.0 BREEZE has undergone a significant
              overhaul.

            - Now enables multiple files in different windows.  That is,
              a number of files can be held in memory simultaneously and
              you can switch rapidly between them.
            - Added a clipboard, so you can copy text to the clipboard
              and then paste it into another file.  (This is simpler
              than copying a block of text to a temporary file, then
              loading another file, and then reading the temporary file
              into the new file as a block).  The clipboard is
              especially useful when used in conjuction with multiple
              windows.
            - Improved mouse handling and support.
                - faster and more direct cursor movement.
                - from within the edit window the mouse buttons now have
                  the following functions:
                    - left button : block begin
                      right button : block end
                      double click left button : main menu
                      double click right button : window list
                      both buttons at same time : main help menu;
                - at other times pressing the left button is the same as
                  pressing the return key, and pressing the right button
                  is the same as pressing the escape key.
            - Further improved support for Wordstar keyboard commands,
              including Ctrl-K-1 and Ctrl-Q-1 (set and seek place
              marker), Ctrl-Q-L (restore line), Ctrl-K-T (toggle
              tab), and Ctrl-K-Q (quit, same as Alt-X).
            - Bug fixes - when the dictionary was loaded and you pressed
                          F10 or Esc to bring up the main menu,
                          sometimes unwanted characters would be written
                          to the screen temporarily.
                        - fixed a few problems which appeared when
                          available memory was very low, including the
                          problem with adding lines when insert mode
                          off.
                        - fixed the problem when reading in a block too
                          large for memory - the truncated block was
                          wrongly marked.
                        - screensaver sometimes left a dot on.
            - An asterix on the status line now indicates whether the
              document has remained unchanged since it was loaded or
              last saved.
            - With the text find and replace feature, case sensitivity
              is now set from the main menu, along with the option to
              find whole words only or include partial words.
            - When loading a file, if the file does not exist on disk,
              you are now prompted whether you want to begin a new
              document with that name (rather than automatically
              beginning a new document).
            - The main menu now remembers all the previous highlight bar
              positions, and restores them when you bring up the menu.


        Version 4.1

            - Corrected some spellings in the dictionary
            - When moving the cursor upwards the screen now starts to
              scroll before the cursor reaches the top of the screen,
              similar to downward scrolling.  This enables you to see
              where you are going.
            - If no block is marked and you select to perform a
              readability analysis you will be prompted if you want to
              analyze the entire document.
            - Blocks can now be marked using whole line mode.  That is,
              entire lines will automatically be selected regardless of
              the current cursor position in the line.  This speeds up
              block marking considerably, which is especially useful for
              programmers.  This feature is available from the
              configuration menu.  The default block marking mode is for
              individual characters, or "streaming" mode.
            - Fixed problem when loading a file via the pick list and
              the current file was not saved.  If the save option was
              chosen then the new file was loaded as an empty file.
            - Find and replace missed some replacements when searching
              for single characters.
            - The screen saver is now active in any window, and not just
              from the edit window.


        Version 4.2

            - Programs created with the text to .EXE converter now give
              you the option not to send standard Epson printer control
              codes when printing the contents.  This gives better
              compatibility with laser printer.  Also, tabs are now
              correctly expanded into spaces when printing.
            - With some screen saving programs, when returning to BREEZE
              the characters on the screen would blink.  This has now
              been fixed.


        Version 4.3

            - Added support for a wider range of printers.
            - Fixed bug when a filename of all empty spaces was entered.
            - Fixed an obscure bug which occured when saving file names
              to the pick file after analyzing text.
            - Fixed the problem of an "a" being added to the beginning
              of a macro sequence when the recording was initiated from
              the main menu.
            - Fixed a minor bug when entering a file name as a command
              parameter and the file was not found.  You would be asked
              rename the next loaded file when you wanted to save it.
            - Increased registration price to $45 to cover increased
              costs, but decreased cost of upgrades from $20 to $10.


        Version 4.4

            - Fixed bug with screen saver and autosaver.  Didn't work
              correctly when adjusted to times greater than five minutes.
            - Fixed problem with line not wrapping when a style character
              was entered exactly on the right margin.  If auto-
              reformatting was on at the same time this could jam the
              computer!
            - Fixed bug when floppy disk not in drive and when Breeze
              tries to read the disk directory, or when no matching
              files found.  Breeze would sometimes crash.
            - The following improvements have been made to the text to
              .EXE converter:
                  - Added option to remove special style codes when
                    printing text to a file from the executable.
                  - The executable programs created with Breeze will
                    now automatically detect whether the user has a
                    colour system.  If not, then the default mono
                    pallette will be used, unless changed by the user
                    from the command line.  This is a safety mechanism,
                    to prevent you from selecting colours when creating
                    the executable on a colour system which do not
                    show-up clearly when the program is run on a mono
                    system.
                  - Added ability to move to main menu selections in the
                    executable with a single keystroke.  The main menu
                    is taken to be the first one to appear in the text.
                        Alt-0 : moves to main menu (the first one)
                        Alt-1..Alt9 : move directly to main menu picks.
                  - Added a help screen in the resulting executables.
                    Press F1.  This should make the program easier to
                    use for beginners.
                  - Added option to print (or send to file) the screen
                    only, or the entire text from executable.
            - Fixed paper feed control for laser printers.  Would send
              unnecessary blank pages.
            - Fixed periodic screen flicker on VGA screens.
            - Added support for the pound sterling symbol.


         Version 4.5

            - Added graphical print previewer for registered users.
            - Improved time-sharing abilities for use on concurrent
              systems.
            - Added "Read manual" option in the files menu.  This saves
              you the trouble of exiting to DOS to run the manual
              program.
            - Made the "format paragraph" function available from the
              options menu to reduce confusion for beginners.
            - Fixed bug where sometimes when loading a file from the
              pick list you were not returned to the correct line.
            - Added extra words to the dictionary.


         Version 4.6

            - Can now save the page numbering mode in the configuration
              file.
            - When making an .EXE file out of the text, sometimes the
              closing brace ">" was not removed.  This is fixed.
            - Added option to have centred page numbers when printing.
              Press return on the page no.s option in the print menu
              to cycle between page numbering modes.
            - The printer configuration file BREEZE.PRN (created with
              BRZPRINT.EXE) is now a text file that can be edited from
              within Breeze.  You can change or modify the printer
              control commands as you like.
            - Fixed a couple of minor problems with laser printer
              support.
            - Added a ruler (options menu) showing columns and inches
              based on the cpi for the font selected in the printing
              options menu.
            - Pressing the Alt key and the Ctrl key simultaneously will
              immediately activate the screen saver.

```
{% endraw %}

## DOSSTART.DOC

{% raw %}
```


                            - STARTING WITH DOS -

                                  A primer


        What is DOS?

             DOS is shorthand for Disk Operating System.  DOS is the
        go-between for the transactions between you and the computer.
        DOS works in the background taking care of the menial computer
        tasks you wouldn't want to have to think about.


        Some DOS commands

             You can give commands to DOS by typing commands at the DOS
        command line; in other words, immediately after the DOS prompt.
        Your DOS prompt probably looks like one of the following:

             A>
             B>
             C>

             The capital letter refers to the active disk drive.  If the
        prompt is A> then the commands you give DOS will refer to that
        drive.  When you want to switch to another disk, making it the
        active disk, all you do is type the letter of the disk, followed
        by a colon and press ENTER.  For example, to switch to drive B,
        just type

              B:  (then press ENTER)

             There are a few commands you will use often with DOS, if
        you haven't already, such as:

              DEL or ERASE   To erase a file
              DIR            To see a list of files on the logged drive.
              COPY           To copy the files from one disk to another.
              BREEZE         To load BREEZE

              DOS doesn't care whether you type in uppercase or
        lowercase letters, so you can enter your commands however you
        like.

               I will assume you know how to use the first three
        commands listed; if you don't, then refer to your DOS manual.
        Next, I will explain the proper way to load a program like
        BREEZE.


        How to load a program

               If your distribution disk with the BREEZE.EXE program is
        in drive A but the prompt you see on the screen is B>, DOS won't
        know what your talking about if you type BREEZE and press Enter.
        Instead of starting BREEZE, it will give you the message "Bad
        command or file name", because it is searching in the wrong
        place.  So if you happen to get that DOS message, simply switch
        to drive A by typing A: and then press Enter.  Then type BREEZE
        and press Enter to load BREEZE.



        Directories

               A directory is a convenient way to organize your floppy
        and more particularly your hard disk drive files.  It is a way
        of grouping related files together under a common heading and in
        the same place.

               It would be convenient to keep all your BREEZE files on
        one or two floppy disks, or on a hard drive you could hold them
        all in a directory called BREEZE.

               To make a directory for your BREEZE files on a hard disk
        (assuming it is Drive C:), do the following:

            1. At the C> prompt, type MKDIR BREEZE and press Enter.

            2. Type CHDIR BREEZE and press Enter.  This tells DOS to
               move you into the BREEZE directory.

            3. Now put the BREEZE distribution disk into drive A and
               type COPY A:*.*   and then press Enter.  (The
               asterisks are wildcards that stand for all files.)
               This will copy all the files on the disk in drive A to
               the directory BREEZE on drive C:


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```

                     PROGRAM DESCRIPTION - "BREEZE V4.6"

                    Copyright (c) Kevin Solway, 1989-1992


                              Kevin Solway
                              PO Box 207
                              University of Queensland
                              St Lucia  4067
                              Australia


            BREEZE is an easy to use word processor/text editor that
        does everything you ever wanted of a text processing program,
        and more!  This program has been designed with one thing in
        mind... PLEASURE.  You will find the simplicity of BREEZE a
        breath of fresh air compared to the oppressive and boring
        alternatives.

            Features: pop-up hypertext help system, attractive
        multi-menu environment, text to .EXE converter (converts
        documents into self-displaying executable programs with menus,
        printing and text search features), multi-windows/files
        (multi-edit), clipboard, file selection menu, exploding windows,
        handles giant files, RAM dictionary for fast spelling checks of
        whole documents or as you type, create your own personal
        dictionary if you wish, print spooling (lets you print and edit
        at the same time, saving hours of time), mail-merge/form
        letters, scientific calculator, ascii table, analyze text
        readability, sort paragraphs or lines, statistical analysis,
        pick list of recent files, mouse supported, fully configurable,
        automatic line and box drawing, fast find and replace, text
        styles, word wrapping, auto paragraph reformatting, autoindent,
        autosave, restore line function (undo), columns, comprehensive
        print options, menu operated printer control, full block
        operations, powerful macro functions, index words, operate in
        condensed line mode on EGA and VGA systems, DOS shell, insert
        date into text, centre line, execute other programs and any DOS
        commands from within the editor, go to line and page functions,
        set place marker, duplicate lines, auto screen save.

        Minimum requirements: IBM PC or compatible, 394K RAM, monochrome
        monitor, one floppy disk drive.



        * Note: The mail merge and graphical print preview facilities
          are not enabled in the unregistered version of the program in
          order to fit Breeze on a single distribution disk.  However,
          all the essential features are fully operational.




                        FILES ON THE DISTRIBUTION DISK



          README.1ST          For quick start.

          BREEZE.EXE          The main program.

          BRZMAN.EXE          The user manual program (documentation).

          REGISTER.DOC        Registration form to use when paying for
                              your copy of BREEZE, or for ordering
                              upgrades.  You can print this file from
                              within BREEZE or using the DOS Print
                              command.

          BRZEXMPL.DOC        A brief document showing how to use some
                              of the special features of BREEZE.

          BRZPRINT.EXE:       Printer configuration program

          BRZUTS46.EXE        An self-extracting compressed file which
                              contains the following files:

                              BREEZE.HLP  :  The on-line help file.
                              BREEZE.DCT  :  The dictionary file.
                              BREEZE.DAT  :  Data file required when
                                             creating .EXE files.
                              COLOURS.EXE :  To be distributed with
                                             the text viewer programs
                                             you create with BREEZE.


          VENDOR.DOC          This file.  Brief description of BREEZE.


```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  PC-SIG Disk #2973 BREEZE  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To read the installation instructions, type:  TYPE INSTALL.DOC  (Enter) ║
║                                                                         ║
║ To install BREEZE, type:  INSTALL  (press Enter)                        ║
║                                                                         ║
║ After installing BREEZE, print the next set of instructions by typing:  ║
║                                       COPY README.1ST PRN  (press Enter)║
║                                                                         ║
║                                         (c) Copyright 1992, PC-SIG Inc. ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```



                          - WELCOME TO BREEZE -



       If you are familiar with compressed (zipped) files then you
       may wish to install BREEZE manually, otherwise you can use
       the installation program INSTALL.BAT to do it for you.

       To use INSTALL.BAT you must insert the BREEZE installation
       disk into Drive A: and log onto this drive. (Type A: from the
       DOS prompt - the Dos prompt should then read A:\> ).  Then,
       type INSTALL, press the return key to start the installation
       process.

       You will find installation very simple if you have a hard disk.

       The installation disk should contain the following files:

         BREEZE46.ZIP   -   A compressed file containing all the
                            Breeze files.

         PKUNZIP.EXE    -   Used to uncompress .ZIP files.

         IS.EXE         -   Used by INSTALL.BAT to determine what
                            disk drives you have available.

         INSTALL.BAT    -   The installation batch file/program.

         INSTALL.DOC.   -   This file.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2973

     Volume in drive A has no label
     Directory of A:\

    BREEZE46 ZIP    317022   9-02-92   5:29p
    BREEZE46 DOC       227   8-09-92   6:35p
    PKUNZIP  EXE     19080   8-09-92   6:17p
    IS       EXE      4159   8-09-92   6:16p
    INSTALL  DOC      1111   8-10-92   8:59p
    INSTALL  BAT      3681   8-31-92   5:01p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT       924   9-24-92   2:40p
            8 file(s)     346242 bytes
                           11264 bytes free
