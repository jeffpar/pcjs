---
layout: page
title: "PC-SIG Diskette Library (Disk #1686)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1686/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1686"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORDMASTER"

    WordMaster is a full-function wordprocessor so easy to use you can
    be up and writing before ever reading the documentation. This is made
    possible by WordMaster's outstanding menu system.  All the basic
    wordprocessing commands are included in it with online help to explain
    each command.
    
    The excellent documentation offers clear explanations and examples of
    using the more sophisticated capabilities that have become standard in
    wordprocessors. The serious user will quickly be employing features that
    include: multiple fonts, time-saving macros, search and replace,
    cutting-and-pasting blocks of text on multiple documents, headers and
    footers, automatic page numbering, the ability to customize the working
    environment and much more.
    
    These capabilities combined with its ease of use have prompted many
    to declare WordMaster superior to any other wordprocessor they have ever
    used -- even top-of-the-line commercial products.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1686.TXT

{% raw %}
```
Disk No: 1686                                                           
Disk Title: WordMaster                                                  
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: WordMaster                                               
Author Version: 1.41                                                    
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
WordMaster is a full-function wordprocessor so easy to use you can      
be up and writing before ever reading the documentation. This is made   
possible by WordMaster's outstanding menu system.  All the basic        
wordprocessing commands are included in it with online help to explain  
each command.                                                           
                                                                        
The excellent documentation offers clear explanations and examples of   
using the more sophisticated capabilities that have become standard in  
wordprocessors. The serious user will quickly be employing features that
include: multiple fonts, time-saving macros, search and replace,        
cutting-and-pasting blocks of text on multiple documents, headers and   
footers, automatic page numbering, the ability to customize the working 
environment and much more.                                              
                                                                        
These capabilities combined with its ease of use have prompted many     
to declare WordMaster superior to any other wordprocessor they have ever
used -- even top-of-the-line commercial products.                       
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## WM.DOC

{% raw %}
```
| This documentation file is designed to be printed using WordMaster, as it
| employs special printing codes found in the program.  Be sure to install
| the proper Printer Definition File or you may print out some strange
| codes as text.  (See p.12)   The EPSMX80.PDF file will work with most
| printers that have Epson emulation.  This information will NOT be
| printed because of the vertical bar in column 1, one of the special
| printing codes.



















                                  Documentation

                                       for

                               WordMaster  v. 1.41




















                                   MasterWorks
                                  P.O.  Box 116
                               McCleary, WA  98557


                    Copyright 1989,1990 by William M. Farrar











                                Table of Contents


               Disclaimer  . . . . . . . . . . . . . . . .  3
               Registration  . . . . . . . . . . . . . . .  4
               User Support  . . . . . . . . . . . . . . .  4
               Introduction  . . . . . . . . . . . . . . .  5
               On-line Help  . . . . . . . . . . . . . . .  6
               Creating Your Work Environment  . . . . . .  7
               Keyboard Command Structure  . . . . . . . .  8
                    Cursor Movements . . . . . . . . . . .  8
                    Tab  . . . . . . . . . . . . . . . . .  8
                    Line Commands  . . . . . . . . . . . .  8
                    Delete . . . . . . . . . . . . . . . .  8
                    Undelete . . . . . . . . . . . . . . .  9
                    DOS Commands . . . . . . . . . . . . .  9
                    Help System  . . . . . . . . . . . . .  9
                    Find Commands  . . . . . . . . . . . . 10
                    Block Commands . . . . . . . . . . . . 10
                    Macros . . . . . . . . . . . . . . . . 11
                    Tabs . . . . . . . . . . . . . . . . . 11
                    Margins  . . . . . . . . . . . . . . . 12
                    Printing . . . . . . . . . . . . . . . 13
                    Exiting WordMaster . . . . . . . . . . 13
                    Windows  . . . . . . . . . . . . . . . 14
                    Check Spelling . . . . . . . . . . . . 14
                    Save File  . . . . . . . . . . . . . . 15
                    Files  . . . . . . . . . . . . . . . . 15
                    Fonts  . . . . . . . . . . . . . . . . 15
                    Abort Command  . . . . . . . . . . . . 16
                    Control Character  . . . . . . . . . . 17
                    Move to Indent . . . . . . . . . . . . 17
                    Go To  . . . . . . . . . . . . . . . . 17
                    Jump to Marker . . . . . . . . . . . . 17
                    Hard Space . . . . . . . . . . . . . . 18
                    Playback Scrap Macro . . . . . . . . . 18
                    Set Markers  . . . . . . . . . . . . . 18
                    Set Colors . . . . . . . . . . . . . . 19
                    Set Defaults . . . . . . . . . . . . . 19
                    System Commands  . . . . . . . . . . . 19
                    Toggle Commands  . . . . . . . . . . . 20
                    Help Commands  . . . . . . . . . . . . 22
               Print Formatting Commands . . . . . . . . . 23
               Application Hints . . . . . . . . . . . . . 26
               Appendix I - Command Summary  . . . . . . . 30
               Appendix II - Function Key Table  . . . . . 34
               Registration  . . . . . . . . . . . . . . . 35
               Registration Form . . . . . . . . . . . . . 36

|HE       WordMaster v. 1.41                                                         #
|PA





















                                  Disclaimer


       WordMaster is not warranted to necessarily meet the needs of the
       user and by using this software you acknowledge that this software
       may not suit your needs or be completely trouble-free.

       Neither MasterWorks nor the author shall be liable for any loss or
       damages, whether real or imagined, that might result from the use of
       this program.

       The liability of MasterWorks and the author is limited to replacing
       defective disks or corrupted program files.





                                   * * *



       WordMaster is written in Turbo Pascal and compiled with Turbo Pascal
       5.5, (c) 1983, 1989 by Borland International.   It utilizes routines
       found in the Turbo Pascal Editor Toolbox, (c) 1985, 1987 by Borland
       International.


|pa
       -----------------------------------------------------------------
                                  REGISTRATION
       -----------------------------------------------------------------

       WordMaster is user-supported software. That means that users who
       find the program to be of value and use it regularly are expected to
       register with the author.  Users who register will receive a program
       that allows customization of the command structure and an upgrade to
       the most recent version of WordMaster.

       Registered users of WordMaster will also receive advance notice of
       other programs as they become available from the author.

       To register WordMaster send $30 to:

                                William M. Farrar
                                  P.O. Box 116
                               McCleary, WA 98557

             Washington residents please add 7.8% sales tax ($2.34).


       Please use the form provided at the end of this document, if
       possible.

                                  * * * * * * *


       Individuals may freely copy and share the shareware version of this
       program, provided they include ALL the WordMaster files on the
       distribution media.


       Commercial distributors may distribute WordMaster providing they
       charge no more than $6 per disk for the program files, include ALL
       the shareware files on the disk and plainly state in their catalogs
       and advertising that they are selling shareware.


       -----------------------    USER SUPPORT    ------------------------


       Non-registered users will receive limited support from the author
       providing they include a self-addressed, stamped envelope with their
       request.

                                      - - -

               REGISTERED USERS HAVE UNLIMITED SUPPORT AVAILABLE.

                                      - - -


             Thank you for using and supporting shareware software.


                                 Introduction



       WordMaster is an extremely easy wordprocessor/editor to learn to
       use. There is a built-in menuing system that is designed to perform
       many basic commands while providing visual cues and a rather
       complete help system to guide the user toward full utilization of
       the program's potential.

       In the upper right corner of the WordMaster screen is displayed <F1
       for menus>.  So press <F1>.  You will see a menu across the top of
       the screen that gives you the following options:

       File   Window   Text   Block   Goto   Search   Options   Misc

       You can access much of the command structure of WordMaster from this
       menu by pressing the highlighted first letter of that area. You can
       now execute any of the listed commands by pressing the highlighted
       first letter of the command or by moving the lightbar to the command
       and pressing <Enter>.  If you have one set of commands displayed and
       wish to move to another you can use the <left/right> arrow keys to
       move between command lists so long as only the first level of
       commands is displayed. For example, if you have the Window command
       list displayed, with its choices of Open, Close Previous, Next,
       Zoom, and you want the Block commands, simply press the <right
       arrow> twice to move to the list of block commands.

       New users will find all the basic commands for loading a file and
       then saving it and exiting from WordMaster under the File heading.
       Here is an example of using this method of executing commands:

       Upon loading WordMaster, you will be presented with a blank screen
       with the name "New File" at the left side of the top border.  If you
       want to create a new document you can begin entering it immediately.
       At any point you can give it a name by pressing <F1> and pressing F
       for the File option (or if you are aready at the File option, simply
       press <Enter>. Then press N (for Name) or move the lightbar down to
       "Name current file" and press <Enter>.

       If instead of creating a new file you wish to edit an existing file,
       choose the File option and enter O for Open or move to the Open
       option and press <Enter>.  You will then be presented with a prompt
       box displaying *.* for the current directory. If the  desired file
       is in the current directory, simply press <Enter>; otherwise, enter
       the correct path then press <Enter>. You will be presented with a
       list of all the files in the directory selected. Move to the desired
       file and press <Enter>.  (Hint:  if the directory is long, you can
       move more quickly by entering the first letter of the desired letter
       and you will be taken to the closest file beginning with that
       letter.)

          WARNING:  DO NOT attempt to <ESCape> from the 'Open File' prompt
          menu.  If you do, you will be forced to exit the program.

       When you have finished creating or editing your file you can switch
       to another file by choosing the File option, then pressing G for "G
       to new file" or moving to the "Go to.." option and pressing <Enter>.
       You will be prompted to save the file if that has not been done. You
       will then be given the same prompt for path as in initially opening
       a file.

       When you have finished your WordMaster session, you can exit in two
       ways.  Using the File menu you can choose either Exit/save or
       Quit/abandon.  With the Exit/save option the file will automatically
       be saved and you will then exit the program.  With the Quit/abandon
       option you will exit the program immediately without saving any
       changes made to the file.

       There is, of course a much faster way of accomplishing all this by
       learning the function key and control key commands in the WordMaster
       command structure.  Anyone who intends to use WordMaster to any
       significant extent is encouraged to begin learning this as soon as
       possible, as the menu system is really designed to help beginning
       users and those who use the program rather rarely.


                                      * * *


                                  On-line Help


       The <F1> menus can also be used to access the help system.  For
       example, in the above procedure you might have wanted to know what
       the Save changes/backup command would do.  In order to find out,
       simply move the light bar to the command and press <F1> and you will
       be presented with a short summary of the effects of the command.
       Remember to use the lightbar to access the command, as using the
       first letter will execute the command.   Note that when you were
       using the <F1> menus to perform commands that in most cases the
       menus disappeared when the command was executed.  When using them
       for help, however, you must press <Esc> to exit each level of the
       help menus.

       Using the <Esc> command also allows you to back out of virtually any
       command if you change your mind about wanting to execute it.

       Help is also available with the <Alt-F1> command.  You will be
       presented with a list of topics that can be accessed by moving to
       the desired item and pressing <Enter>.

                                      * * *


       Information on registration is to be found by selecting the Misc
       option on the <F1> menus and pressing R.



                        Creating Your Work Environment

       Before you begin serious wordprocessing with WordMaster, you will
       want to establish various defaults to make your work as easy as
       possible.

       First, you might want to check the color settings -- even if you are
       working with a monochrome monitor.  These settings determine the
       appearance of marked blocks and the various fonts as well as other
       aspects of the display.  The default settings work fine with most
       screens, but there are exceptions.  Access this with the <Ctrl-S>
       <Ctrl-C> or through the menus with <F1, O, C>.  Experiment with
       various settings to achieve the visual mix that suits you best.

       You will also want to select the Printer Definition File (*.PDF) for
       your printer.  The EPSMX80 will work with most printers; the dozen
       or so other .PDF files cover some other common printers.  Load this
       with the 'Which printer' option of the print menu, <Shift-F7> or
       <F1, F, P>.  If none of the .PDF files fit your particular printer
       you can easily edit your own file by accessing the print menu and
       choosing the 'Edit printer codes' option.  The menu allows you to
       individually set the various print codes, for which you will need to
       consult your printer manual.  Once the codes are edited, save them
       to a new .PDF file with the 'Save printer setup' option.

       You will also want to set your Home Directory so that WordMaster can
       find the help file (WM.HLP) and the default macro file (WM.MAC) from
       any directory you are working in.  Do this with the <Ctrl-S><Ctrl-S>
       command or <F1, O, P, H>.  If you are already in the directory where
       your WordMaster files are stored, simply press <Enter>.  Otherwise,
       enter the correct directory, such as C:\WP.

       One other thing you will want to set are the default margins.  The
       program comes with the left margin set at 1 and the right margin at
       75.  The right margin is OK for most purposes, but you will probably
       want to set the left margin at 8 to 10.

       Once this is all done use the <Ctrl-S><Ctrl-D> command or <F1, O, S>
       to make these defaults permanent.   Now, whenever you start a work
       session with WordMaster all these things will be set.  Of course you
       can change these settings temporarily for a particular purpose
       without affecting the permanent defaults you have just set unless
       you save them with the <Ctrl-S><Ctrl-D> command.

       By taking the time to set these defaults you will save yourself a
       great deal of time and aggravation.  For example, you will never
       again print something out and then discover your fonts didn't print
       because the PLAIN.PDF was loaded, or have to stop and set the left
       margin before you start writing a letter or wonder why you can't see
       the passage you just blocked.

       The time spent creating your "perfect" working environment is time
       well spent in getting familiar with the program and in saving
       yourself time later when you need to focus on the job at hand.
       Please do it!

                         The Keyboard Command Structure


                                 Cursor Movement

       This first section of commands deals with the various ways of moving
       the cursor through the text.  It's probably unnecessary to mention
       the four basic cursor arrow keys -- left, right, up, down -- or PgUp
       and PgDn; they work just as expected.  To move the cursor one word
       at a time use <Ctrl-Left> and <Ctrl-Right>.  To move to the end of
       the line, use <End>.  To move to the beginning of the current line
       use <Home><Left>.  To move the cursor to the top or bottom of the
       page without scrolling the text, use <Home><Up> and <Home><Down>.

       The cursor can be moved through text to the beginning of the last
       sentence or the next sentence by using <Alt-L> and <Alt-N>. <Alt-W>
       and <Alt-Z> will scroll the text on the screen without moving the
       cursor position unless the cursor position is scrolled off the
       screen, which will cause the cursor to stay at the top or bottom
       line of the screen.  The commands <Ctrl-PgUp> and <Ctrl-PgDn> will
       take you to the beginning or end of the document.


                                      Tab

       The <TAB> key [on some keyboards it is simply marked with two
       arrows] moves the cursor to the next Tab setting.  The default Tabs
       are set at every five spaces, so the cursor would advance from
       column 1 to column 6 to column 11, and so forth across the page.
       Using <Shift-Tab> causes the cursor to move backwards.


                                  Insert Lines

       A blank line can be inserted into the text in two different ways,
       <Ctrl-M> and <Ctrl-N>.  There is a reason for having two commands.
       <Ctrl-M> is the command that is given when you press the <Enter> [or
       <Return>] key.  But if you are in typeover mode rather than the
       default insert mode, this will not insert a new line into the text.
       Therefore the <Ctrl-N> command is available.


                                  Center Line

       To center text on a line press <F8> while anywhere on that line.


                                    Delete


       The <Del> key deletes the character the cursor is on.  The <Bksp>
       key deletes the character to the left of the cursor.  <Ctrl-End>
       will delete everything on the line to the right of the cursor.
       <Ctrl-Y> deletes the entire line on which the cursor is placed.

       A blank line of text can be deleted by using <Ctrl-Y> or by placing
       the cursor on the first column of the line and pressing <BackSp>.


                                   Undelete


       <F2> -- Restore line to status upon entry.  Useful when editing a
               document to undo changes; e.g., accidental deletions with
               the <Ctrl-End> command.
       <Ctrl-Q> -- Restores lines deleted with the <Ctrl-Y> command.



                                      * * *


       WordMaster command structure combines full utilization of the
       function keys plus a fairly logical system of Control Key
       combinations. The following material is listed, first, by Function
       Key order. In some instances related commands that utilize Control
       Key sequences are listed together with the Function Key commands for
       simplicity. Command sequences that do not involve the Function keys
       but only the Control Keys, are generally listed in alphabetical
       order of the Control Key commands.


                                 DOS Commands


       <Ctrl-F1> -- Go to DOS Shell.  This command opens up a window to the
       DOS command line so that you can execute any program or command
       without leaving WordMaster -- provided there is sufficient RAM.

       <Shift-F1> -- Change logged Directory.  This gives one the option of
       changing to a desired directory or subdirectory.


                                The Help System


       <Alt-F1> -- This command activates a subsidiary help system that is
       designed to remind you of commands when you are using the normal
       keyboard command structure.  It can be accessed in two ways.
       Pressing <Alt-F1> will bring up a menu of command groups. Move the
       light bar to the desired area and press <Enter>.  You will be
       presented with summary of the keyboard commands.  The same menu can
       be accessed through the <F1> menus by selecting the Misc option, and
       then Help.  Again, use <Esc> to exit each level.

       <F1> --  Activates the Menu System, as explained above.



                                 Find Commands


       <Ctrl-F2> -- Find and Replace.  You are prompted for a string -- any
       sequence of letters and numbers, not necessarily a complete word and
       not limited to a single word.  After entering the string to search
       for, you are prompted for the string to replace it with.  Finally
       you are presented with a series of options: UBGWLN.

       'U'  ignores case in the search, treating all alphabetic characters
          as uppercase.
       'B'  searches backward from the present cursor position to the
          beginning of the file.
       'G'  searches globally.  The entire file is searched starting at the
          beginning of the file unless the 'B'option is also chosen.
       'W' searches for whole words only. Matching patterns embedded in
          other words will be skipped.
       'L' Searches only within a marked block.
       'N' Will replace without asking for confirmation.

       <Shift-F2> -- Find Next.  Repeats actions set up for Find Pattern.

       <Alt-F2> -- Find Pattern.  Searches for any string that is entered
       at the prompt.  Has the same search options as above except for the
       'N'.  <Shift-F2> takes you to the next occurence of the string
       without the entry procedure.



                                Block Commands


       Learning to use the block commands with facility greatly increases
       the ease with which text can be manipulated.

       <Ctrl-F3> -- Block Start.  Marks where the block is to start.
          <Ctrl-B><Ctrl-S> is an alternate command.

       <Shift-F3> -- Block Move.  Moves a marked block to cursor.
          <Ctrl-B><Ctrl-M> is an alternate command.

       <Alt-F3> -- Block Copy.  Copies a marked block to cursor.
          <Ctrl-B><Ctrl-C> is an alternate command.

       <F3> -- Block End.  Marks the end of the block.
          <Ctrl-B><Ctrl-E> is an alternate command.

       <Ctrl-F5> -- Delete Block.  Deletes a block that has been marked.
          <Ctrl-B><Ctrl-D> is an alternate command.

       <Shift-F5> -- Reformats Block.  Reformats a marked block.
          <Ctrl-B><Ctrl-F> is an alternate command.

       <Ctrl-B><Ctrl-T> -- Moves to the top of a marked block.

       <Ctrl-B><Ctrl-B> -- Moves to the bottom of a marked block.

       <Ctrl-B><Ctrl-W> -- Writes a marked block to a file.  You are
          prompted for a file name.

       <Ctrl-B><Ctrl-R> -- Reads in a file at cursor position.  You are
          prompted for the file name.

       <Ctrl-B><Ctrl-U> -- Marks a single word as a block.



                                    Macros


       A macro generally consists of a series of actions that are performed
       often enough that it is convenient to reduce the activity to a few
       keystrokes.  An example is given in the chapter on applications.

       <Ctrl-F4> -- Load a macro file.  The default file is WM.MAC, but any
          number of .MAC files could be created.  Each one holds 10 macros.

       <Shift-F4> -- Save macros to a file.  This means you don't have to
          recreate the macros each time you load WordMaster.

       <Alt-F4> -- Edit a Macro.  With this command you can edit an
          existing macro or create a new one.

       <F4> -- Playback Macros by Menu.  You are presented with a menu of
          macros 0 - 9 that can be entered at present location.

       <Alt-1> through <Alt-9> -- Plays back macros assigned to those
          numbers.  Macro #0 can not be played back with the Alt key.

       <Alt-M> -- Search and Apply Macro.  Similar to the <Ctrl-F2> Search
          and Replace.  You are prompted for a string to search for, the
          macro will be applied when the string is found. You are prompted
          for the same search options.

       A related command, Macro Record, is found with the Toggle commands.


                                     Tabs


       <Alt-F5> -- Restores default tabs.  This is used when you have
          altered the tab line to facilite the entry of data and wish to
          return to the default setting of tabs every five spaces.

       <F5> -- Edit Tab Line.  This command allows you to remove any or all
          tab settings and replace them with others.

       <Ctrl-S><Ctrl-L> -- Save Tab Line.  If you want a record of your tab
          settings for a certain file, this will place it on the line where
          the cursor is located.  It is preceded by the (|) command so that
          it is not printed.  (See page 21 for more details on this
          command.)  Each tab is indicated by a T, the left and right
          margins by L and R.

       <Ctrl-S><Ctrl-T> -- Set Tab Line.  This is a strange command.  It
          resets the tab line so that there is a tab placed at the
          beginning of every word in the line where the cursor is located.
          If the line is blank, all tabs will be removed.  It can be useful
          for column work.

       <Ctrl-S><Ctrl-Z> -- Set Tab Size.  This allows you to change the
          default setting of tabs every 5 spaces.

       Two related commands, Toggle Tab Line and Toggle Fixed Tabs, are
       found with the Toggle commands.


                                    Margins


       <Ctrl-F6> -- Set right margin.  The default setting is 75.   If the
          right margin is set beyond about 80 it will cause most printers
          to print anything beyond that point as a separate line, though it
          will not be registered as such inside WordMaster and really mess
          up page-breaks.

       <Shift-F6> -- Set left margin.  The default setting is 1.  Most
          users will want to set it at about 8 and use the Save Defaults
          command to make this the permanent default.  It is useful to be
          able to change the left margin if you are doing a long indented
          passage or need exceptionally wide margins when the document is
          printed or need to print out a document that has left blank space
          on the left for margins.

       <Alt-F6> -- Set temporary margin at cursor.  This is a more useful
          command than might seem apparent.  For example, as I am writing
          this the text is automatically wrapping between the default
          margins.  In order to indent this paragraph when I'm finished I
          can go to the beginning of the second line, indent the text,
          press <Alt-F6> to set the temporary margin, then press the
          following command, <F6>, to reformat at the indented margin.

       <F6> -- Reformat Paragraph.  This command would not be necessary if
          we never made changes.  But we do and the formatting that was
          done automatically as we entered text gets messed up.  This
          command reformats from the cursor position forward to the end of
          the paragraph.

       <Ctrl-R><Ctrl-T> -- Reset Top Margin.  The default is a three line
          margin.

       <Ctrl-R><Ctrl-B> -- Reset Bottom Margin. The default is 8 lines.

       <Ctrl-R><Ctrl-P> -- Sets a temporary margin.  When both Word Wrap
          and Fixed Tabs are in effect (those are the default settings)
          this command will reset the left margin by one tab setting.
          Giving the command twice will reset by two tab settings, etc.
          Moving the cursor to column 1 cancels the temporary margins.

       <Ctrl-R><Ctrl-M> -- Releases the current line's margins.  This
          allows you to enter text beyond the right margin.  The command is
          also useful for placing Printing Format commands in column 1.



                                   Printing


       <Shift-F7> -- Print a File.  The command brings up a menu of various
          parameters that can be set, such as beginning and ending pages to
          be printed.  For best results, be sure to enter the appropriate
          printer definition file (*.PDF) and make it a permanent default
          by using the Save Defaults command <Ctrl-S><Ctrl-D>.  If
          necessary, use the Edit option to create your own .PDF file.

          Use of single sheets is a bit more tricky than using form feeds
          because of the peculiarities of different printers.  Be sure to
          set 'Manual paper feed' to ON and 'Use formfeeds' to OFF.  You
          will probably also have to adjust the length of your page from
          the default setting of 66 to a length that corresponds to the
          number of lines your printer will print before issuing an "out of
          paper" signal to WordMaster telling it to wait for the next page.
          If this adjustment is not made you will probably find yourself
          with a lot of strange looking pages and wasted paper.

          There is more on printing in the section on print formatting
          commands (p.23).


                            Exiting from WordMaster


       There are two ways to exit from WordMaster.

       <Alt-F7> -- Abandon the File and Exit.  There are at least two cases
          in which you might want to exit without saving the file. It could
          be that you just do not want to save whatever you have been
          doing.  The other possibility is a scenario like the following:
          You have loaded a file that you wish to edit.  In the course of
          editing you accidentally delete a very large block of material.
          If you exit without saving <Alt-F7> the changes you made to the
          file will not be saved and the file will still be intact in its
          original form.  Be sure to respond No when asked if you wish to
          save the file!   You can then restart WordMaster, load the file,
          and begin the editing process with the deleted material intact.

          Situations like this occur all the time and is the reason
          experienced operators save their work often.  If in the above
          situation you had saved the file <F9> five or ten minutes prior
          to the accidental deletion you could exit without saving, reload
          the file and only have lost the five or ten minutes worth of
          editing rather than valuable data.

       <F7> -- Save the File and Exit.  This is the "normal" way to exit
          the program when you are working on material that you want to
          save.




                                    Windows


       Windows allow you to accomplish with ease tasks that would be
       excruciating without them.  Some examples are included in the
       chapter in applications.

       <Ctrl-F8> -- Add a Window.  Another window will be opened and you
          will be prompted for the directory from which to select a file to
          put in the window.  You can, of course, give it the name of a new
          file, if you choose.
          <Ctrl-W><Ctrl-A> is an alternate command.

       <Shift-F8> -- Close a Window.  Close the window in which you are
          currently located.
          <Ctrl-W><Ctrl-C> is an alternate command.

       <Alt-F8> -- Go to Next Window.  The "next" window is the next one
          down the screen.  If you're in the bottom window, the next one is
          the top screen.  If you have only two windows open, this works
          like a toggle between them.
          <Ctrl-W><Ctrl-N> is an alternate command.

       <Ctrl-W><Ctrl-P> -- Go to Previous Window.  This is really only
          useful if you have three or more windows open and you don't want
          to go down through them.

       <Ctrl-W><Ctrl-R> -- Resize Current Window.  There are times when it
          is convenient to have one window only three or four lines high
          and the much larger.

       <Ctrl-Z> -- This command zooms the current window to fill the
          screen.  It works as a toggle -- doing it a second time
          "un-zooms" the window.  A valuable feature when editing in
          several windows simultaneously.
          <Ctrl-W><Ctrl-Z>.  This alternate command exists only for a
          certain aesthetic consistency.


                                Check Spelling


       The spell checking commands work in the shareware version only if
       you have installed Borland International's Turbo Lightning.


                                   Save File


       <F9> -- Save File and Continue to Edit.  Pressing this key
          periodically as you work guarantees that in the event of some
          sort of major disaster all your work will not be lost. A word to
          the wise!


                                     Files


       <Ctrl-F10> -- Gives you a directory listing of the current logged
          directory or any other.  If you want to see the current
          directory, simply press <Enter> when prompted for a Directory
          Mask.  If you want to see if a certain file is in a directory
          called DATA, simply type \DATA at the prompt and <Enter>.  You
          can also use wildcards to view only certain classes of files.  If
          you want to see only the .BAT files on your root directory, type
          \*.BAT at the prompt.  <Esc> to exit.

       <Shift-F10> -- Save File, Switch to New File.  This command is for
          when you've finished work on one file and want to edit another.

          You can also use this command to begin a new file after editing
          an existing file.  There are two ways to do this.  If you do not
          yet know what you want to call the new file simply <Esc>
          repeatedly from the directory prompt and you will wind up back at
          "New File."  If you do know what you want to name it, simply
          enter that file name at the prompt and the new file will be
          opened.

       <Alt-F10> -- The most frequent use for this command is to give a new
          file a name.  It is potentially dangerous in that you could
          overwrite an existing file -- but you are prompted and asked if
          you want to overwrite the file.

       <F10> -- This is the command that you will use when you begin the
          program and wish to begin editing an existing file.  After
          pressing <F10> you will be prompted for the directory in which
          the desired file is to be found.  If you are already in the
          correct directory, simply press <Enter> and you will be shown the
          contents of the current directory.

          This command can be used to begin a new file in exactly the same
          way as is explained under <Shift-F10> by entering the name of the
          new file at the prompt.  If you <Esc> out of this command you
          will be taken back to the previous file.


                                     Fonts

       WordMaster has the ability to print in several different fonts,
       depending upon the capabilities of your printer.  If your printer
       has Epson emulation, you should be able to print all these fonts.

       The font changes are accomplished by inserting control characters
       into the text.  The easiest way to do this is by using the following
       font commands.  Simply press the appropriate <Alt-letter>
       combination and type the text you wish in that font. When you wish
       to return to normal text simply use the <right arrow> to move the
       cursor one space to the right and continue entering text, which will
       be normal text.  You can see this in action by changing the Toggle
       Attributes command <Ctrl-T><Ctrl-A> to OFF.

       If a block is marked, the font command will change the entire block
       to that font.

       An alternate way to change fonts is to use the Insert Control
       Character command <Ctrl-C><Ctrl- >.  Use this method with caution as
       it allows you it insert any control character, some of which may
       have unexpected effects.

       <Alt-B> -- Print Bold.

       <Alt-C> -- Print Compressed.

       <Alt-D> -- Print Double-Strike.

       <Alt-F> -- Show font.  It is not always possible -- especially on a
          monochrome monitor -- to distinguish the various fonts. Using
          this command will tell you if a special font has been selected or
          if it is normal text.

       <Alt-O> -- Change the letter at the cursor position to lower case.

       <Alt-P> -- Change the letter at the cursor position to upper case.
          <Alt-O> and <Alt-P> can be useful when a great deal of text needs
          to be change to all upper or lower case.  The text can be blocked
          and then the <Alt> commands will change the entire block.

       <Alt-R> -- Print in Superscript.

       <Alt-S> -- Print in Subscript.

       <Alt-T> -- Print in Italic.

       <Alt-U> -- Print with Underscore.



                                 Abort Command


       <Ctrl-A> -- Abort Command. In most instances in WordMaster the <Esc>
          will cause you to "back out" of wherever you are. But you might
          give a command that cannot by stopped by <Esc> -- <Ctrl-A> should
          get you out of most such situations.


                               Control Character


       <Ctrl-C> -- Insert control character.  This can be used to insert
          font characters when editing text.




                              Move to Equal Indent


       When you are working with Indent turned on it is useful to be able
       to move easily from one indented line to another.  <Ctrl-D><Ctrl-U>
       will move you up to the next line that is indented at the same
       column as the current line.  <Ctrl-D><Ctrl-D> will move you down to
       the next line with equal indentation.  Even when you are not using
       Indent, the commands can be a time-saver in moving from anywhere on
       the current line to the beginning of the next line up or down.


                                     Go To


       <Ctrl-G><Ctrl-C> -- Go to Column.  Moves the cursor to the
          designated column on the current line.

       <Ctrl-G><Ctrl-L> -- Go to Line.  Goes to the designated line in the
          document.  Especially useful when working in Non-Page mode,
          though the program keeps track of lines even when in normal
          pagination mode.

       <Ctrl-G><Ctrl-P> -- Go to Page.  Goes to first line of indicated
          page.  Useful for moving quickly through longer documents.

       <Ctrl-G><Ctrl-R> -- Go to Previous Cursor Position.  Returns cursor
          to position it occupied prior to last movement. While editing you
          might need to view something using one of the Quick Movement
          commands; this command would return the cursor to your previous
          position.

       <Ctrl-G><Ctrl-W> -- Go to Window.  Makes designated window the
          active window.


                                Jump to Marker

       These commands move you to any of the markers set by the Set Marker
       command.

       <Ctrl-J>0 -- Jump to Marker 0.
       <Ctrl-J>1 -- Jump to Marker 1.
       <Ctrl-J>2 -- Jump to Marker 2.
       <Ctrl-J>3 -- Jump to Marker 3.
       <Ctrl-J>4 -- Jump to Marker 4.
       <Ctrl-J>5 -- Jump to Marker 5.
       <Ctrl-J>6 -- Jump to Marker 6.
       <Ctrl-J>7 -- Jump to Marker 7.
       <Ctrl-J>8 -- Jump to Marker 8.
       <Ctrl-J>9 -- Jump to Marker 9.

       <Ctrl-J><Ctrl-M> -- Jump to Marker by menu.  This will show you
          which markers have been set.


                                  Hard Space

       <Ctrl-O> -- Use this if you do not want wordwrap to break between
       certain words.  For example, after Mr. or Mrs.  It will be printed
       as a regular space.


                             Playback Scrap Macro


       These commands play back Macro 0 the designated number of times.

       <Ctrl-P>0 -- You are prompted for number of playbacks -- up to 42.
       <Ctrl-P>1 -- Playback macro 1 time.
       <Ctrl-P>2 -- Playback macro 2 times.
       <Ctrl-P>3 -- Playback macro 3 times.
       <Ctrl-P>4 -- Playback macro 4 times.
       <Ctrl-P>5 -- Playback macro 5 times.
       <Ctrl-P>6 -- Playback macro 6 times.
       <Ctrl-P>7 -- Playback macro 7 times.
       <Ctrl-P>8 -- Playback macro 8 times.
       <Ctrl-P>9 -- Playback macro 9 times.



                                  Set Marker


       These commands set markers in the text allowing you to move quickly
       from one point to another.  These are temporary markers for the
       duration of the editing session and are not saved when the document
       is exited.  Markers can be moved simply by setting the marker in a
       different location -- it will be deleted at the original location.
       The marker can be deleted without moving it by setting it a second
       time at the same location -- in other words, the command is a
       toggle.

       <Ctrl-S>0 -- Sets Marker 0.
       <Ctrl-S>1 -- Sets Marker 1.
       <Ctrl-S>2 -- Sets Marker 2.
       <Ctrl-S>3 -- Sets Marker 3.
       <Ctrl-S>4 -- Sets Marker 4.
       <Ctrl-S>5 -- Sets Marker 5.
       <Ctrl-S>6 -- Sets Marker 6.
       <Ctrl-S>7 -- Sets Marker 7.
       <Ctrl-S>8 -- Sets Marker 8.
       <Ctrl-S>9 -- Sets Marker 9.

       <Ctrl-S><Ctrl-M> -- Set a marker via menu.


                                  Set Colors


       <Ctrl-S><Ctrl-C> -- Set Colors.  If you have a color monitor, this
          command will allow you to change the colors.  With a monochrome
          system you can reset the highlighting that shows various fonts.


                                 Set Defaults


       <Ctrl-S><Ctrl-D> -- Save defaults.  This command allows the user to
          change some default settings.  For example, if you should prefer
          to work in typeover mode then use this command while in typeover
          mode and the default will be changed.

       <Ctrl-S><Ctrl-E> -- Set default extension.  This command allows you
          to set a default extension to all files without one.  It can also
          shorten the process of naming files if they all have the same
          extension.


                                System Commands

       <Ctrl-S><Ctrl-I> -- System Information.  Displays information about
          the current file as well as the operating system.

       <Ctrl-S><Ctrl-P> -- Set Page Length.  Allows changing page length
          from the default of 66 lines to enable printing on non-standard
          papers.

       <Ctrl-S><Ctrl-R> -- Show available RAM.

       <Ctrl-S><Ctrl-S> -- Set Support Path.  Tells the program where it's
          files are located.  It is very important to set this to the
          directory where your WordMaster files are located so that you can
          use WordMaster from any directory and the program will know where
          to find the Help file, .PDF files, etc.

       <Ctrl-S><Ctrl-U> -- Set Undo Limit.  Allows setting a new undo
          limit.


|pa
                                Toggle Commands


       All these commands represent on/off choices dealing with how text is
       displayed and/or handled in other ways.

       <Ctrl-T><Ctrl-A> -- Toggle Attributes.  Toggles between displaying
          font attributes and the printer control characters. The default
          is ON.

       <Ctrl-T><Ctrl-C> -- Toggle Case.  Toggles character at cursor
          between upper and lower case.  Will toggle an entire marked block
          if cursor is in the block.

       <Ctrl-T><Ctrl-D> -- Toggle Compress at Wrap.  When this is on, all
          extraneous spaces are removed when text wraps to the next line.
          This can be very annoying if you are doing columns or other text
          with empty spaces.  It even allows only one space between
          sentences.  The default is OFF.


       <Ctrl-T><Ctrl-F> -- Toggle Fixed Tabs.   Fixed tabs are tabs fixed
          at regular intervals.  The alternative is tabs fixed on a
          changing basis, called smart tabs.  When smart tabs is in effect,
          tab stops are set at the beginning of every word in the previous
          line of text. This can be useful when creating tables.  The
          default is ON.

       <Ctrl-T><Ctrl-H> -- Toggle High-Bit Strip.  Some programs like
          WordStar set the high bit on words as part of their formatting
          procedure.  To bring a WordStar file into the ASCII format used
          by WordMaster, that high bit needs to be stripped.  The default
          is OFF.

       <Ins> -- Toggle Insert.  The Insert Key toggles between Insert and
          Typeover modes.  The default is Insert.

       <Ctrl-T><Ctrl-I> -- Toggle Autoindent Mode. Autoindent causes each
          line to begin at the same column as the previous line. This is
          useful when inputting a section of indented text. It is much
          used by programmers, who use indenting extensively.

       <Ctrl-T><Ctrl-J> --  Toggle Right Justify.  Right Justify will cause
          extra spaces  to be added to  your text so that  the right margin
          forms  a  perfectly  straight  line,  like  this paragraph. Right
          justification is somewhat controversial  as the extra white space
          in  the middle  of the  sentence at  the expense  of white  space
          around it makes it difficult for some people to read.

       <Ctrl-T><Ctrl-L> -- Toggle 43-line mode. This enables color systems
          that can display 43 lines. The default is OFF.

       <Ctrl-T><Ctrl-M> -- Toggle Marker Display. Toggles whether markers
          that have been set are displayed or not. The default is ON.

       <Ctrl-T><Ctrl-P> -- Toggle pagination. This determines whether
          WordMaster relates to the text as pages or simply as a certain
          number of lines. The default is ON.

       <Ctrl-T><Ctrl-R> -- Toggle Macro Record. When the macro record
          toggle is turned on the program begins to remember everything you
          enter until you toggle it off. At that point you will be
          presented with a menu of macros, giving you the option of saving
          everything you've entered as a macro. This is sometimes the
          easiest way to write complex macros.

       <Ctrl-T><Ctrl-S> -- Toggle Snow Check. Needed on some earlier color
          systems. The default is OFF.

       <Ctrl-T><Ctrl-T> -- Toggle Tab Line. This toggles the display of the
          tab settings when set to fixed tabs. The default is OFF.

       <Ctrl-T><Ctrl-U> -- Toggle Block Cursor. This allows you to choose a
          large, non-blinking cursor. The default is OFF.

       <Ctrl-T><Ctrl-V> -- Toggle Tab Writing. When this is set to ON blank
          spaces are store as tabs (Ctrl-I).  This saves space in the file,
          but can cause problems if you have it on and load a file that
          used differently spaced tabs than your default setting.  The
          default is OFF.

       <Ctrl-T><Ctrl-W> -- Toggle Word Wrap. Word wrap is what causes your
          text to go automatically to the next line when you reach the
          right margin. The default is ON.

       <Ctrl-T><Ctrl-X> -- Toggle Tab Expansion. This is the companion to
          Tab Writing.  When it is ON, stored tabs are expanded to blank
          spaces.  The default is OFF.

       <Ctrl-T><Ctrl-Z> -- Toggle Initial Zoom. The practical effect of
          this is whether you would see a second window on the screen or
          would have to use <Alt-F8> to see it. The default is OFF.

|pa

                                 Help Commands


       These commands will bring you a summary of the keyboard commands
       associated with the area. You can reach the same windows through the
       <F1> menus by choosing Misc, Help. [The two commands dealing
       with the undo buffer just sort of got stuck here!]

       <Ctrl-X><Ctrl-A> -- Help Summary.
       <Ctrl-X><Ctrl-B> -- Block Help.
       <Ctrl-X><Ctrl-C> -- Cursor Help.
       <Ctrl-X><Ctrl-D> -- Delete Help.
       <Ctrl-X><Ctrl-F> -- Find/Replace Help.
       <Ctrl-X><Ctrl-H> -- Status Help.
       <Ctrl-X><Ctrl-I> -- File Help.
       <Ctrl-X><Ctrl-K> -- Function Key Help.
       <Ctrl-X><Ctrl-L> -- Flush Undo Buffer.
       <Ctrl-X><Ctrl-M> -- Macro Help.
       <Ctrl-X><Ctrl-N> -- Insert Undo Buffer.
       <Ctrl-X><Ctrl-P> -- Spelling Help.
       <Ctrl-X><Ctrl-Q> -- Quick Movement Help.
       <Ctrl-X><Ctrl-R> -- Print Format Help.
       <Ctrl-X><Ctrl-S> -- Setting Help.
       <Ctrl-X><Ctrl-T> -- Tab Help.
       <Ctrl-X><Ctrl-U> -- Utility Help.
       <Ctrl-X><Ctrl-W> -- Window Help.
       <Ctrl-X><Ctrl-X> -- Text Help. 


|pa
                           Print Formatting Commands


       These commands are not accessible through the <F1> menus, only the
       <Alt-F1> help sections. Learning to use them can add a professional
       look to your documents.

       The print formatting commands rely upon the use of a special symbol,
       the vertical bar |, placed in column 1 of the text. Used by itself,
       the | symbol simply tells the printer "ignore this line." This makes
       it a convenient way to write messages to yourself in the text,
       perhaps to aid when editing the document, such as:

          |
          | Eliminate following paragraph?
          |

       I have shown these indented so they would print, but the '|' must be
       in column 1 to trigger the "ignore this line" message.  (If the
       margin is set at a number greater than 1 -- and it usually will be --
       then use <Home-Left Arrow> to go to column 1 then <Ctrl-R><Ctrl-M>
       to release the margin for that line and allow you to place the text
       in the first column.)

       If the | symbol is followed by certain codes, the information is
       passed to the printer to perform certain actions.


                             Page Format Commands


          |PO<n>    This command offsets the page to the right by <n>
                    columns. This changes the margin for the remained or
                    the document. It is basically the same as using
                    <Shift-F6> to reset the margin

          |PA       This command starts a new page.  If pagination in
                    ON (the default) this will be marked in the left border
                    with the double line page marker.

          |PN<n>    This command allows you to set the page number. If
                    pagination is ON this will be reflected in the Page
                    number in the top border. This is particularly useful
                    if you are working on a very long document, as you can
                    break it in to shorter sections and maintain accurate
                    page numbers.

          |PG       This command turns page numbering ON.  The default
                    is to have page numbering OFF.

          |PC<n>    This causes the page number to be printed in
                    column <n> rather than the default, column 33. Use this
                    command if, for example, you want the page number at
                    the right margin. This is useful if you are not using a
                    footer.

          |PL<n>    This sets the page length to <n> lines.

          |MT<n>    This sets the top margin to <n> lines. With it you
                    could set different top margins for different pages.

          |MB<n>    This sets the bottom margin to <n> lines. Like the |MT
                    command, you could set different bottom margins on
                    different pages.

          |CP<n>    This sets a conditional page break. A new page will be
                    started if fewer than <n> lines remain on the page.

          |OP       This command turns page numbering OFF, the default.
                    However, if you had turned turned page numbering ON
                    with the |PG command you could turn it off for one or
                    more pages -- perhaps to accommodate graphics -- and
                    then turn it back on again.


       Header Commands

          |HM<n>    This changes the number of lines between the top
                    of the page and the header. The default is one line.

          |HE<n>    This changes the line the header will print on.
                    Normally, the header is printed on the second line of
                    the top margin, leaving one blank line at the top of
                    the page and one blank line between the header and your
                    text.

          |HE<text> This command will print whatever text follows as a
                    header to your document. This is frequently desirable
                    in reports and other documents where you want an
                    identifying title on every page. Using the :HE command
                    on a subsequent page will change the header.


       Footer Commands

          |FM<n>    This command sets a new footer margin of <n> lines. The
                    default is 3 lines.

          |FO<n>    This sets the footer to line <n>.

          |FO<text> This prints the <text> as the footer.

|pa
       Perhaps the following mockup of a page will make the header and
       footer commands a little clearer.

                -------------------------------------
          |HM { :            (1 line)               :  }       }
                :  Header    (1 line)               :  } |TM   }
                :            (1 line)               :  }       }
                :   text text text text text tex    :          }
                :  text text text text text text    :          }
                :  text text text text text text    :          }
                :  text text text text text text    :          }
                /                                   /          } |PL
                :  text text text text text text    :          }
                :  text text text text text text    :          }
                :  text text text text text text    :          }
                :  text text text text text text    :          }
                :            (1 line)               :  }       }
                :            (1 line)               :  }       }
                :            (1 line)               :  }       }
                :            (1 line)               :  } |MB   }
                :  Footer                           :  }       }
             {  :            (1 line)               :  }       }
         |FM {  :            (1 line)               :  }       }
             {  :            (1 line)               :  }       }
                -------------------------------------

       Simple logic will demonstrate that the following rules must be
       observed:

       MT must be greater that HM or the header will not be printed.
       MB must be greater that FM or the footer will not be printed.
       PL must be greater that the sum of MT and MB.
       If either MT or MB are set to zero, page numbers will not be
       printed.

       The following symbols are also of use in headers and footers.

       #  The page number will be printed wherever the # symbol appears
          in either header or footer. Note that when using a footer that
          automatic pagination is turned off and the # symbol must be used
          to place the page number.

       \  The back slash causes the following character to be interpreted
          literally. So \# would print the # symbol rather than the page
          number. Even by itself, the backslack will not be printed.


       Any header and footer commands should be placed at the very
       beginning of the document, though they can be placed there after the
       document is finished. If a header or footer is to be changed, any
       such change should appear on the last line of the page before the
       page on which the change is to appear.



                                Application Hints


                                    Formatting


       On important part of producing an attractive document is in making
       certain that each part of it is properly formatted. In the normal
       course of text entry the automatic word wrap will format text within
       the margins that have been set. There are times though that this
       formatting is upset by the process of editing a document. One case
       in which this happens is the insertion of additional material into
       the text.

       Example -- You have just written the following sentence in a letter:

       In response to your request for information in your letter I am
       enclosing the material about our product.


       You decide you should insert the date of the received letter into
       the text and you now have the following:

       In response to your request for information in your letter of June
       16 I am
       enclosing the material about our product.


       The easiest solution is to press <F6>, the Reformat Paragraph
       command, as soon as you finish typing the date. If you somehow did
       not notice the need to reformat you can return at any time and press
       <F6> at any point in the text before the word 'enclosing,' as
       reformatting only affects text beginning with the line on which the
       cursor is positioned when the command is given.


                                 Indented Text


       Reformatting is also useful when you want to set off a portion of
       text by using indented text, as pointed out in the <Alt-F6> command,
       Set Margin at Cursor. An easier way, if you know in advance that the
       text is to be indented, is to begin the line at the column you want
       the text to be indented to and use <Ctrl-T><Ctrl-I> to turn on
       automatic indent. As you enter the text it will automatically be
       indented to the column where you began. When you are finished use
       <Ctrl-T> <Ctrl-I> to turn off the indent and return to normal
       margins.


                                    Windows


       The use of windows can make many editing jobs a great deal easier
       than they otherwise would be. To open a second (or third, or
       fourth...) window, simply press <Ctrl-F8> (or <Ctrl-W><Ctrl-A> if
       you wish to utilize the entire <Ctrl-W> series of commands). You
       will be prompted for a drive and directory, the default being the
       current drive and directory. The procedure from this point on is the
       same as choosing the initial file in Window 1. If the desired file
       is in the current directory, simply press <Enter> for the listing of
       files in the directory, then move the light bar to the desired file
       and press <Enter> to select it.

       When the second window appears with its file, the screen will be
       split into two parts. For many operations, this is desirable. If,
       however, you want the full screen for editing in each file simply
       press <Ctrl-Z> (or <Ctrl-W><Ctrl-Z>) and the current window will be
       expanded to the entire screen. As you move between windows with the
       <Alt-F8> command (or <Ctrl-W><Ctrl-N>, <Ctrl-W><Ctrl-P> series) each
       window will be a full-screen editing environment.

       A situation in which using the split screen is advantageous is when
       you are coping or moving material within the same file, because you
       can simultaneously view the portion of the document you are that is
       the source of the material and the portion of the document that is
       its destination.  The same is true for copying information between
       two different files.

       Let us imagine you have a document for which you want to make a
       Table of Contents. Load the file as usual, then open window 2 and
       load the file into it also. In the upper window (window 1) go to the
       place where you want to put your Table of Contents and enter your
       title, "Table of Contents," and center it with <F8> if you want it
       centered. Now use <Alt-F8> to go to window 2 and begin paging
       through the document until you reach a section heading that you want
       in your table of contents. We will now use the block commands to
       create the listing.

       Go to the beginning of the heading and press <Ctrl-F3> to mark the
       beginning of the block, press <End> to go to the end of the heading
       and press <F3> to mark the end of the block. Now use <Alt-F8> to
       return to window 1 and move the cursor to the line you want the
       heading to appear in your list. Press <Alt-F3> and the line will be
       copied from window 2 to window 1. Press <F3> to unmark the block.
       <Alt-F8> takes you back to window 2 to search for the next heading
       to put in your list.

       One of the nice things about this editor is that it will reflect any
       change in all windows in which the file is open. In other words, a
       line that you block in window 1 will also appear blocked in window
       2. If you delete something from the file in window 2, it will also
       be deleted from the file in window 1. Not all editors have this
       capability, which essentially allows you to edit in both directions
       between the windows.

|pa
                                    Macros


       Macros have many uses and can save you time when you learn to use
       them. As an example, we will write a simple macro that will enter
       your return address on the right side of the page.

       We first need to access macro editing with the <Alt-F4> command. A
       menu of Macros 0-9 will appear on the screen. Let's make this Macro
       #1, so either press <1> or down-arrow to it and press <Enter>. We
       are now asked for a name. Let's call this macro "Far Right Return
       Address," so enter that and press <Enter>. We are now presented with
       a blank window into which we are going to enter the macro.

       We need first for our macro to go to the column where we want to
       begin the return address. Let's try 55 (you can adjust this later if
       your return address is very long or very short). So enter the
       command <CtrlG><CtrlC> which will tell the macro we want to go to a
       column. There are two ways to do this. You can simply enter it as
       text, or you can employ a special capability. Press the <Scroll
       Lock> key and we are now in Literal mode. Now all you need do is
       hold down the <Ctrl> key while pressing <g> and <c>. The command
       <CtrlG> <CtrlC> should appear. Press <Scroll Lock> again to go back
       to command mode. Now enter 55, the column we want to go to.

          (Note:  If you do not have a <Scroll Lock> key on your keyboard,
          try using <Alt-Break>.  If this does not work, contact the
          author and we will try to work something out for your keyboard.

       Now we need to tell the macro to <Enter> that command to go to
       column 55. Simply pressing <Enter> will not work, as it will cause
       you to exit the Edit Macro window. So, we need to press <Scroll
       Lock> again to go to literal mode. Press the <Enter> key and the
       word <Enter> will appear after the 55. Press <Scroll Lock> again to
       return to normal command mode. Now enter your street address. Note
       that there should be no spaces at all in your text prior to
       beginning your street address. When you have finished typing your
       street address repeat the <Scroll Lock> <Enter> <Scroll Lock>
       sequence.

       Begin the procedure all over for the next line of your return
       address. But you do not go to a new line in the macro editing
       window. You always enter text in a purely sequential manner, even
       though the window will sometimes break a word right in the middle as
       it wraps to the next line. Repeat every step beginning with
       <CtrlG><CtrlC>.

       In a normal return address, you would have one line for the street
       address, one line for the city, state and zip and one line for the
       date. Since you want to be able to use this macro for a long time,
       we are not going to enter the date. But it is convenient to end with
       your cursor at the point where the date will go. So after you have
       finished entering your city, state and zip and ended that line with
       <Scroll Lock><Enter><Scroll Lock>, enter the <Ctrl-G><Ctrl-C>55
       <Scroll Lock><Enter><Scroll Lock> once again. Now press <Enter>
       without pressing <Scroll Lock> to exit the editing window.

       Now, press <Alt-1> and your return address macro should appear on
       the screen. If it does not, recheck each step of the above process.

       To save this macro for future use press <Shift-F4>. When prompted
       for a name, give it WM.MAC, as that is the default macro file that
       will be loaded whenever you load WordMaster. Other macro files with
       the .MAC extension can be created for special purposes, but they
       must be loaded with the <Ctrl-F4> command.

       (The WM.MAC file included with WordMaster has a 'dummy' form of the
       above macro that can be edited to display your own address.  You
       might prefer a centered address -- particularly for a business -- so
       a second 'dummy' macro has been created that omits the sequence
       <CtrlG><CtrlC>55<Enter> and uses the <F8> command at the end of
       each line of the address before the <Enter> command to take you to
       the next line.  Edit it for your own address.  Be sure to save it
       with the <Shift-F4> command.  If you save it to WM.MAC it will be
       loaded automatically when you start WordMaster.)

|pa
                                   Appendix I

       ------------------------------------------------------------------
                               WORDMASTER COMMANDS
       ------------------------------------------------------------------
       Character left             ---     <Left Arrow>
       Character right            ---     <Right Arrow>
       Word left                  ---     <Ctrl-Left Arrow>
       Word right                 ---     <Ctrl-Right Arrow>
       Cursor to left side        ---     <Home><Left Arrow>
       Cursor to right side       ---     <End>
       ------------------------------------------------------------------
       Line up                    ---     <Up>
       Line down                  ---     <Dn>
       Top of screen              ---     <Home><Up>
       Bottom of screen           ---     <Home><Dn>
       Page up                    ---     <PgUp>
       Page down                  ---     <PgDn>
       Scroll up                  ---     <Alt-W>
       Scroll down                ---     <Alt-Z>
       Top of window              ---     <Ctrl-PgUp>
       Bottom of window           ---     <Ctrl-PgDn>
       ------------------------------------------------------------------
       Tab                        ---     <Ctrl-I>     [Tab Key]
       Backward tab               ---     <Shift-Tab>
       Last sentence              ---     <Alt-L>
       Next sentence              ---     <Alt-N>
       ------------------------------------------------------------------
       Delete current character   ---     <Del>
       Delete left character      ---     <Ctrl-H>     [Backspace Key]
       Delete line right          ---     <Ctrl-End>
       Delete line                ---     <Ctrl-Y>
       ------------------------------------------------------------------
       Restore line               ---     <F2>
       Undo ^Y deletion           ---     <Ctrl-Q>
       ------------------------------------------------------------------
       New line                   ---     <Ctrl-M>     [Enter Key]
       Insert line                ---     <Ctrl-N>
       Center line                ---     <F8>
       ------------------------------------------------------------------
       Invoke DOS shell           ---     <Ctrl-F1>
       Log drive/path             ---     <Shift-F1>
       Help menu                  ---     <Alt-F1>
       Activate menus             ---     <F1>
       ------------------------------------------------------------------
       Find and replace           ---     <Ctrl-F2>
       Find next                  ---     <Shift-F2>
       Find pattern               ---     <Alt-F2>
       ------------------------------------------------------------------
       Begin block                ---     <Ctrl-F3>  [or] <Ctrl-B><Ctrl-S>
       Move block                 ---     <Shift-F3> [or] <Ctrl-B><Ctrl-M>
       Copy block                 ---     <Alt-F3>   [or] <Ctrl-B><Ctrl-C>
       End block                  ---     <F3>       [or] <Ctrl-B><Ctrl-E>
       Delete block               ---     <Ctrl-F5>  [or] <Ctrl-B><Ctrl-D>
       Reformat block             ---     <Shift-F5> [or] <Ctrl-B><Ctrl-F>
       Top of block               ---                     <Ctrl-B><Ctrl-T>
       Bottom of block            ---                     <Ctrl-B><Ctrl-B>
       Write block to file        ---                     <Ctrl-B><Ctrl-W>
       Read file into window      ---                     <Ctrl-B><Ctrl-R>
       Mark current word          ---                     <Ctrl-B><Ctrl-U>
       ------------------------------------------------------------------
       Load macros from disk      ---     <Ctrl-F4>
       Write macros to disk       ---     <Shift-F4>
       Edit macro                 ---     <Alt-F4>
       Playback macro by menu     ---     <F4>
       Playback macro 1           ---     <Alt-1>
       Playback macro 2           ---     <Alt-2>
       Playback macro 3           ---     <Alt-3>
       Playback macro 4           ---     <Alt-4>
       Playback macro 5           ---     <Alt-5>
       Playback macro 6           ---     <Alt-6>
       Playback macro 7           ---     <Alt-7>
       Playback macro 8           ---     <Alt-8>
       Playback macro 9           ---     <Alt-9>
       Search and apply macro     ---     <Alt-M>
       ------------------------------------------------------------------
       Default tabs               ---     <Alt-F5>
       Edit tab line              ---     <F5>
       Set tab size               ---         <Ctrl-S><Ctrl-Z>
       Set tabs to line           ---         <Ctrl-S><Ctrl-T>
       Save/display tab line      ---         <Ctrl-S><Ctrl-L>
       ------------------------------------------------------------------
       Set right margin           ---     <Ctrl-F6>
       Set left margin            ---     <Shift-F6>
       Temp margin to cursor      ---     <Alt-F6>
       Set top margin             ---         <Ctrl-R><Ctrl-T>
       Set bottom margin          ---         <Ctrl-R><Ctrl-B>
       Set temp margin            ---         <Ctrl-R><Ctrl-P>
       Margin release             ---         <Ctrl-R><Ctrl-M>
       Reformat paragraph         ---     <F6>
       ------------------------------------------------------------------
       Print file                 ---     <Shift-F7>
       Abandon file               ---     <Alt-F7>
       Save and exit to DOS       ---     <F7>
       ------------------------------------------------------------------
       Add window                 ---     <Ctrl-F8>  [or] <Ctrl-W><Ctrl-A>
       Close window               ---     <Shift-F8> [or] <Ctrl-W><Ctrl-C>
       Next window                ---     <Alt-F8>   [or] <Ctrl-W><Ctrl-N>
       Previous window            ---                     <Ctrl-W><Ctrl-P>
       Resize current window      ---                     <Ctrl-W><Ctrl-R>
       Zoom current window        ---     <Ctrl-Z>   [or] <Ctrl-W><Ctrl-Z>
       ------------------------------------------------------------------
       Check spelling             ---     <Ctrl-F9>
       Save and continue edit     ---     <F9>
       ------------------------------------------------------------------
       File directory             ---     <Ctrl-F10>
       Save/switch files          ---     <Shift-F10>
       Write to named file        ---     <Alt-F10>
       Edit another file          ---     <F10>
       ------------------------------------------------------------------
       Select bold                ---     <Alt-B>
       Select compressed          ---     <Alt-C>
       Select double              ---     <Alt-D>
       Show font                  ---     <Alt-F>
       Lower case                 ---     <Alt-O>
       Upper case                 ---     <Alt-P>
       Select superscript         ---     <Alt-R>
       Select subscript           ---     <Alt-S>
       Select italic              ---     <Alt-T>
       Select underscore          ---     <Alt-U>
       ------------------------------------------------------------------
       Abort command              ---     <Ctrl-A>
       ------------------------------------------------------------------
       Insert control char        ---     <Ctrl-C>
       ------------------------------------------------------------------
       Up to equal indent         ---     <Ctrl-D><Ctrl-U>
       Down to equal indent       ---     <Ctrl-D><Ctrl-D>
       ------------------------------------------------------------------
       Go to column               ---     <Ctrl-G><Ctrl-C>
       Go to line                 ---     <Ctrl-G><Ctrl-L>
       Go to page                 ---     <Ctrl-G><Ctrl-P>
       Previous cursor position   ---     <Ctrl-G><Ctrl-R>
       Go to window               ---     <Ctrl-G><Ctrl-W>
       ------------------------------------------------------------------
       Jump marker 0              ---     <Ctrl-J>0
       Jump marker 1              ---     <Ctrl-J>1
       Jump marker 2              ---     <Ctrl-J>2
       Jump marker 3              ---     <Ctrl-J>3
       Jump marker 4              ---     <Ctrl-J>4
       Jump marker 5              ---     <Ctrl-J>5
       Jump marker 6              ---     <Ctrl-J>6
       Jump marker 7              ---     <Ctrl-J>7
       Jump marker 8              ---     <Ctrl-J>8
       Jump marker 9              ---     <Ctrl-J>9
       Jump to marker by menu     ---     <Ctrl-J><Ctrl-M>
       ------------------------------------------------------------------
       Hard Space                 ---     <Ctrl-O>
       ------------------------------------------------------------------
       Playback scrap             ---     <Ctrl-P>0
       Playback scrap 1 time      ---     <Ctrl-P>1
       Playback scrap 2 times     ---     <Ctrl-P>2
       Playback scrap 3 times     ---     <Ctrl-P>3
       Playback scrap 4 times     ---     <Ctrl-P>4
       Playback scrap 5 times     ---     <Ctrl-P>5
       Playback scrap 6 times     ---     <Ctrl-P>6
       Playback scrap 7 times     ---     <Ctrl-P>7
       Playback scrap 8 times     ---     <Ctrl-P>8
       Playback scrap 9 times     ---     <Ctrl-P>9
       ------------------------------------------------------------------
       Set marker 0               ---     <Ctrl-S>0
       Set marker 1               ---     <Ctrl-S>1
       Set marker 2               ---     <Ctrl-S>2
       Set marker 3               ---     <Ctrl-S>3
       Set marker 4               ---     <Ctrl-S>4
       Set marker 5               ---     <Ctrl-S>5
       Set marker 6               ---     <Ctrl-S>6
       Set marker 7               ---     <Ctrl-S>7
       Set marker 8               ---     <Ctrl-S>8
       Set marker 9               ---     <Ctrl-S>9
       Set colors                 ---     <Ctrl-S><Ctrl-C>
       Save defaults              ---     <Ctrl-S><Ctrl-D>
       Set default extension      ---     <Ctrl-S><Ctrl-E>
       Show system info           ---     <Ctrl-S><Ctrl-I>
       Set a marker via menu      ---     <Ctrl-S><Ctrl-M>
       Set page length            ---     <Ctrl-S><Ctrl-P>
       Show available RAM         ---     <Ctrl-S><Ctrl-R>
       Set support path           ---     <Ctrl-S><Ctrl-S>
       Set undo limit             ---     <Ctrl-S><Ctrl-U>
       ------------------------------------------------------------------
       Toggle attributes          ---     <Ctrl-T><Ctrl-A>
       Toggle case                ---     <Ctrl-T><Ctrl-C>
       Toggle compress at wrap    ---     <Ctrl-T><Ctrl-D>
       Toggle fixed tabs          ---     <Ctrl-T><Ctrl-F>
       Toggle hi-bit strip        ---     <Ctrl-T><Ctrl-H>
       Toggle insert mode         ---     <Ins>
       Toggle autoindent mode     ---     <Ctrl-T><Ctrl-I>
       Toggle right justify       ---     <Ctrl-T><Ctrl-J>
       Toggle 43 line mode        ---     <Ctrl-T><Ctrl-L>
       Toggle marker display      ---     <Ctrl-T><Ctrl-M>
       Toggle pagination          ---     <Ctrl-T><Ctrl-P>
       Toggle macro record        ---     <Ctrl-T><Ctrl-R>
       Toggle snow check          ---     <Ctrl-T><Ctrl-S>
       Toggle tab line            ---     <Ctrl-T><Ctrl-T>
       Toggle block cursor        ---     <Ctrl-T><Ctrl-U>
       Toggle tab writing         ---     <Ctrl-T><Ctrl-V>
       Toggle word wrap           ---     <Ctrl-T><Ctrl-W>
       Toggle tab expansion       ---     <Ctrl-T><Ctrl-X>
       Toggle initial zoom        ---     <Ctrl-T><Ctrl-Z>
       ------------------------------------------------------------------
       Show help summary          ---     <Ctrl-X><Ctrl-A>
       Block help                 ---     <Ctrl-X><Ctrl-B>
       Cursor help                ---     <Ctrl-X><Ctrl-C>
       Delete help                ---     <Ctrl-X><Ctrl-D>
       Find/Replace help          ---     <Ctrl-X><Ctrl-F>
       Status help                ---     <Ctrl-X><Ctrl-H>
       File help                  ---     <Ctrl-X><Ctrl-I>
       Function keys              ---     <Ctrl-X><Ctrl-K>
       Flush undo buffer          ---     <Ctrl-X><Ctrl-L>
       Macro help                 ---     <Ctrl-X><Ctrl-M>
       Insert undo buffer         ---     <Ctrl-X><Ctrl-N>
       Spelling help              ---     <Ctrl-X><Ctrl-P>
       Quick movement help        ---     <Ctrl-X><Ctrl-Q>
       Print Format help          ---     <Ctrl-X><Ctrl-R>
       Setting help               ---     <Ctrl-X><Ctrl-S>
       Tab help                   ---     <Ctrl-X><Ctrl-T>
       Utility help               ---     <Ctrl-X><Ctrl-U>
       Window help                ---     <Ctrl-X><Ctrl-W>
       Text help                  ---     <Ctrl-X><Ctrl-X>
       ------------------------------------------------------------------


                                   Appendix II







       
                          WordMaster Function Key Commands
                     |-------------------|--------------------|
       Ctrl          | Go to DOS Shell   | Find and Replace   |
       Shift         | Change Directory  | Find Next          |
       Alt           | Help              | Find Pattern       |
                F1   | Activate Menus    | Undo               |  F2
                     |-------------------|--------------------|
       Ctrl          | Begin Block       | Load Macro File    |
       Shift         | Move Block        | Save Macros to File|
       Alt           | Copy Block        | Edit Macros        |
                F3   | End Block         | Macro Menu         |  F4
                     |-------------------|--------------------|
       Ctrl          | Delete Block      | Set Right Margin   |
       Shift         | Reformat Block    | Set Left Margin    |
       Alt           | Restore Tabs      | Margin at Cursor   |
                F5   | Edit Tabs         | Reformat Paragraph |  F6
                     |-------------------|--------------------|
       Ctrl          |                   | Open Window        |
       Shift         | Print File        | Close Window       |
       Alt           | Abandon File/Exit | Go to Next Window  |
                F7   | Save/Exit         | Center Line        |  F8
                     |-------------------|--------------------|
       Ctrl          |*Spell Check Page  | File Directory     |
       Shift         |*Spell Check Word  | Edit Another File  |
       Alt           |*Thesaurus         | Write to Named File|
                F9   | Save/Continue     | Open File          |  F10
                     |-------------------|--------------------|

       







       *Must have Turbo Lightning installed.

       So that this will print out in a size suitable for easy reference,
       the control characters for compressed printing have been entered
       before the beginning of the table and again after the end of the
       table.  It is useful to cut this out (or print a second copy) to
       have to refer to as you are learning the function key commands.

|pa


                                 Registration


       In the United States, Canada and other countries in the western
       hemisphere, please register directly with MasterWorks.



                                   MasterWorks
                                  P.O. Box 116
                               McCleary, WA 98557


       Please enclose $30 for each copy of WordMaster 1.41 you wish to
       register.  Washington State residents add 7.8% sales tax. ($2.34)


                                  * * * * * * *


       Outside the United States you may find it more convenient to
       register with one of WordMaster's authorized distributors.


                                  Gunter Hager
                                  Ahrweg 19
                                  5305 Alfter
                                  W. Germany

                                  George Lasich
                                  TELAMED
                                  P.O. Box 273
                                  7506 Panorama
                                  South Africa



|pa

                               REGISTRATION FORM



       Mail this completed form to appropriate address on the previous page
       with correct payment.

       Please give your name as you wish to have it appear on the
       WordMaster opening screen.  Use an additional page if you are
       registering multiple copies in several names.


       Name                                                              

       Address                                                           

       City                               State           Zip            


             No. of registered copies at $30 each?                       

             Total payment enclosed.                                     


                                    * * * * *


       We would appreciate knowing where you obtained WordMaster --
       PC-SIG, Bulletin Board (which one?), a friend, etc.

                                                                         


       We are constantly striving to improve WordMaster, so any comments or
       suggestions will be appreciated.

                                                                         

                                                                         

                                                                         

                                                                         

                                                                         


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1686

     Volume in drive A has no label
     Directory of A:\

    CITMSP10 PDF        64   9-27-89  12:00p
    CITMSP20 PDF        64   9-27-89  12:00p
    CITMSP50 PDF        64   9-27-89  12:00p
    DIABL630 PDF        38   9-27-89  12:00p
    DMP130A  PDF        49   9-27-89  12:00p
    EPSMX80  PDF        64   9-27-89  12:00p
    HPLASF   PDF       301   9-27-89  12:00p
    IMGEWRTR PDF        41   9-27-89  12:00p
    NEC3550  PDF        43   9-27-89  12:00p
    NECPINWR PDF        59   9-27-89  12:00p
    OKI92    PDF        60   9-27-89  12:00p
    PLAIN    PDF        31   9-27-89  12:00p
    QUMES11  PDF        43   9-27-89  12:00p
    README   1ST      2505   9-27-89  12:00p
    REGISTER          1651   9-27-89  12:00p
    STAR     PDF        64   9-27-89  12:00p
    TANDYI   PDF       128   9-27-89  12:00p
    WM       DOC     85651   7-21-90   7:40p
    WM       EXE    159888   7-21-90   7:40p
    WM       HLP     72636   7-21-90   7:40p
    WM       MAC       151   9-27-89  12:00p
    FILE1686 TXT      2443   9-04-90  12:49p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       958   1-01-80   5:10a
           24 file(s)     327034 bytes
                           16384 bytes free
