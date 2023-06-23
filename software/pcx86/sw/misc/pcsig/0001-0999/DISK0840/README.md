---
layout: page
title: "PC-SIG Diskette Library (Disk #840)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0840/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0840"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SHORTCUT (DOS SHELL)"

    SHORTCUT is a memory-resident manager that makes DOS easier to use.
    
    The program displays a good deal of information about your
    directories, system status and configuration, disk and memory status,
    DOS, current date and time, and the main commands available to you.
    
    With SHORTCUT you can run, copy, move, type, print, erase, search, or
    rename a file.  Format and copy your disks, and edit a file with your
    favorite word processor from this program.
    
    SHORTCUT has simple menus, with optional on-line help.  Once you exit
    to DOS, it will remain in memory until you need it again.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AFILE.TXT

{% raw %}
```
What is ShortCut?

ShortCut is many things.  It is a communicator between you and DOS,
the operating system of your computer.  It is a file manager and disk
organizer.  It is a shortcut to getting your work done, offering you
features not available in DOS.  

ShortCut allows you to send commands to DOS even if you are using
another program.  For example, you might be using your word processor,
spreadsheet, or database manager when you realize you want to copy
some files to another disk.  Normally you would have to save your
work, exit your program, type in the DOS command to copy the files,
perhaps type in additional copy commands, restart your program, and
retrieve your work file.  Now you only need to call up ShortCut with
one keystroke and "point" at the files, the COPY command, and the
destination of your files.  ShortCut does the work.  When the files
are copied, you return to your program with one more keystroke.  Your
program continues as if nothing happened!

ShortCut takes the hassle out of DOS.  You work rapidly and with less
effort.  Yet you do not sacrifice flexibility as ShortCut can handle
any DOS command gracefully.  Using your computer is simply more fun
and less work.
```
{% endraw %}

## BFILE.TXT

{% raw %}
```
What is ShortCut?

ShortCut is many things.  It is a communicator between you and DOS,
the operating system of your computer.  It is a file manager and disk
organizer.  It is a shortcut to getting your work done, offering you
features not available in DOS.  

ShortCut allows you to send commands to DOS even if you are using
another program.  For example, you might be using your word processor,
spreadsheet, or database manager when you realize you want to copy
some files to another disk.  Normally you would have to save your
work, exit your program, type in the DOS command to copy the files,
perhaps type in additional copy commands, restart your program, and
retrieve your work file.  Now you only need to call up ShortCut with
one keystroke and "point" at the files, the COPY command, and the
destination of your files.  ShortCut does the work.  When the files
are copied, you return to your program with one more keystroke.  Your
program continues as if nothing happened!

ShortCut takes the hassle out of DOS.  You work rapidly and with less
effort.  Yet you do not sacrifice flexibility as ShortCut can handle
any DOS command gracefully.  Using your computer is simply more fun
and less work.
```
{% endraw %}

## CFILE.TXT

{% raw %}
```
What is ShortCut?

ShortCut is many things.  It is a communicator between you and DOS,
the operating system of your computer.  It is a file manager and disk
organizer.  It is a shortcut to getting your work done, offering you
features not available in DOS.  

ShortCut allows you to send commands to DOS even if you are using
another program.  For example, you might be using your word processor,
spreadsheet, or database manager when you realize you want to copy
some files to another disk.  Normally you would have to save your
work, exit your program, type in the DOS command to copy the files,
perhaps type in additional copy commands, restart your program, and
retrieve your work file.  Now you only need to call up ShortCut with
one keystroke and "point" at the files, the COPY command, and the
destination of your files.  ShortCut does the work.  When the files
are copied, you return to your program with one more keystroke.  Your
program continues as if nothing happened!

ShortCut takes the hassle out of DOS.  You work rapidly and with less
effort.  Yet you do not sacrifice flexibility as ShortCut can handle
any DOS command gracefully.  Using your computer is simply more fun
and less work.
```
{% endraw %}

## COMMND.DOC

{% raw %}
```






                              USING THE COMMND COMMAND

          The COMMND command, <F10>, is so different from the other Command
          Bar commands and yet so useful, we decided to devote a file
          exclusively to its use.

          ShortCut was designed to save you time and make using DOS easier.
          Sometimes ShortCut commands cannot do everything you want to do. 
          Suppose you want to copy MYFILE.TXT on drive A to drive B and you
          want the new copy of the file to be named YOURFILE.TXT.  You could
          use ShortCut to copy the file to drive B and then rename that
          file, but that involves two steps.  If you are an experienced DOS
          user, you might view two steps as not much of a time saver when
          you know DOS is capable of handling it in one step.

          The COMMND Command

               ShortCut provides a way to enter any DOS command without
               using the usual ShortCut commands.  The COMMND command
               provides the same service as the standard DOS input line. 
               Press <F10> to move to the COMMND command box and hit
               <Enter>.  The message line will disappear and in its place
               you will see what appears to be the usual DOS prompt.  This
               is the command line.

               You can enter any DOS command here.  When you press the
               <Enter> key, your DOS command is sent directly to COMMAND.COM
               without being acted upon by ShortCut.  The ShortCut screen
               disappears and you will see a blank screen except your
               command following the normal DOS prompt and then the normal
               screen output that DOS displays when executing commands it
               receives.  When DOS is finished, the ShortCut screen reap-
               pears.  You might want to have PAUSE on if you want to read
               all of the DOS screen output.

               If we go back to our example, you could use COMMND to send
               this command to DOS:  

                          COPY A:MYFILE.TXT B:YOURFILE.TXT

               If you are familiar with the syntax of DOS commands, you may
               consider this simpler and quicker than using ShortCut's COPY
               and RENAME commands to accomplish the same thing.

          Editing the Command Line 

               Anytime before you press <Enter> to send your command to DOS
               you can edit what you have typed on the command line with the
               following keys:

               Backspace key  Deletes the character to the left and moves
                              the cursor one space to the left.

               Left arrow     Moves the cursor one space to the left.

                                                              COMMND.DOC - 1






               Right arrow    Moves the cursor one space to the right.

               Del key        Deletes the character the cursor is on.

               Ins key        Turns on insert mode.  All typed characters
                              are inserted in the line and characters to the
                              right of the cursor are pushed further to the
                              right until insert is turned off.

               F6             Copies the filename pointed at by the screen
                              arrow to the command line.

               F7             Moves the cursor to the beginning of the
                              command line.

               F8             Moves the cursor to the end of the command
                              line.

               Ctrl-Esc       Cancels the command line and exits the Command
                              Bar.

               The above editing keys are available for you to use any time
               ShortCut prompts you for information.  For example, you can
               use them when you enter a filename for the RENAME command.

               In addition, ShortCut imitates the usual DOS editing keys. 
               In the following descriptions, the template refers to the
               last command that was sent to DOS.

               F1        Each time <F1> is pressed one character from the
                         template is copied to the screen.

               F2        Waits for the next character you type and then
                         copies all characters up to the first matching
                         occurrence of that character in the template to the
                         screen.  If there is no matching occurrence,
                         nothing happens.

               F3        Copies all the remaining characters from the
                         template.   

               F4        Waits for the next typed character and then skips
                         over all characters in the template until it
                         reaches the first matching occurrence of that
                         character.  If there is no match, nothing happens.

               F5        Enters the current command line as the new tem-
                         plate, clears the command line, and allows con-
                         tinued editing of this new template.

               Esc key   Aborts the current command line and begins a new
                         one.  The current template remains the same and
                         restarts at the first character.

                                                              COMMND.DOC - 2





               Whenever you try to type beyond the right edge of the screen,
               the command line will scroll to the left once space for each
               character you type.  You may enter no more than 128 charac-
               ters including spaces. 

          Copy Filename to Command Line

               ShortCut gives you an alternative to typing a filename on the
               command line if the filename is visible in the Directory
               Window.  Point the screen arrow at the filename, then hit
               <F6>.  The filename will appear on the command line.  Remem-
               ber you can use Locate File (Alt-L) to move the screen arrow
               to the filename rapidly.

          Command Buffer

               ShortCut remembers the last ten commands you sent to DOS and
               will display them one at a time on the command line.  You can
               move back through this list of commands by pressing <F9>. 
               Press <F10> to move forward.

               Once you have the command you want displayed on the command
               line, you are free to edit it if you wish.  Hit <Enter> to
               send the command to DOS.  

          Entering Multiple Commands with COMMND

               Sometimes you will want to enter more than one command. 
               There is a way you can make ShortCut disappear so you can
               enter commands using the usual DOS screen.

               Before you type in your command on the command line, press
               <Alt-D> for DOS Screen.  The ShortCut screen will disappear
               and you will see the normal DOS screen.  You can now type in
               as many DOS commands in succession as you want.  You will
               still be able to use the command line editing keys and the
               Command Buffer.  When you want the ShortCut screen to return,
               press <Alt-D> again.

          Default Drive 

               The COMMND command uses the Default drive, not the Display
               drive.  The Default drive box is beneath the Display drive
               box.  You can change the Default drive by moving the screen
               arrow to this box and then pressing a letter of any drive on
               your system.  Of course, you can always preface filenames
               with a drive specifier just as you can when you are using DOS.








                                                              COMMND.DOC - 3

```
{% endraw %}

## DFILE.TXT

{% raw %}
```
What is ShortCut?

ShortCut is many things.  It is a communicator between you and DOS,
the operating system of your computer.  It is a file manager and disk
organizer.  It is a shortcut to getting your work done, offering you
features not available in DOS.  

ShortCut allows you to send commands to DOS even if you are using
another program.  For example, you might be using your word processor,
spreadsheet, or database manager when you realize you want to copy
some files to another disk.  Normally you would have to save your
work, exit your program, type in the DOS command to copy the files,
perhaps type in additional copy commands, restart your program, and
retrieve your work file.  Now you only need to call up ShortCut with
one keystroke and "point" at the files, the COPY command, and the
destination of your files.  ShortCut does the work.  When the files
are copied, you return to your program with one more keystroke.  Your
program continues as if nothing happened!

ShortCut takes the hassle out of DOS.  You work rapidly and with less
effort.  Yet you do not sacrifice flexibility as ShortCut can handle
any DOS command gracefully.  Using your computer is simply more fun
and less work.
```
{% endraw %}

## DWINDOW.DOC

{% raw %}
```






                                THE DIRECTORY WINDOW

          The Directory Window is the heart of ShortCut.  Whenever a file is
          displayed here, you can perform actions on it using ShortCut's
          features.

          What is in the Directory Window?  

               The Directory Window displays the contents of the Current
               Displayed Directory including all files and subdirectories
               within.  You will know which directory is the Current Dis-
               played Directory because it will be the directory name that
               is highlighted on your screen.

               The path that DOS used to reach your Current Displayed
               Directory is shown just above it in the Directory Window. 
               Your root directory will be listed at the top of the Direc-
               tory Window and each subdirectory that follows is the next
               step in the path through which DOS must travel to reach your
               Current Displayed Directory.  

               If you have no subdirectories on your disk, the root direc-
               tory will always be the Current Displayed Directory.  

               Beneath your Current Displayed Directory you will find all
               the files the directory contains if there are any.  If the
               Current Displayed Directory has any subdirectories belonging
               to it, you will see them listed after the filenames.

               The subdirectories that are part of the current path are
               separated from the subdirectories belonging to the Current
               Displayed Directory by the filenames.  This should help you
               see clearly where you are.  You always know that all the
               directories displayed at the top of the Directory Window are
               part of the path that got you to the Current Displayed
               Directory.  All subdirectories displayed at the bottom of the
               Directory Window are branches from the Current Displayed
               Directory.

               Let's see what all this means.  Suppose your Directory Window
               displays the following:

               FILENAME  EXT      DATE       

               FIXED DISK     <ROOT DIR>     root directory
               LEVEL1         <SUB  DIR>     a subdirectory of the root
               LEVEL2         <SUB  DIR>     a subdirectory of LEVEL1
               BERRY.TXT      6-01-1987      a subdirectory of LEVEL2
               SHORTCUT.DAT   6-01-1987      a file in subdirectory LEVEL2
               SHORTCUT.EXE   6-01-1987      a file in subdirectory LEVEL2
               WILDTIME.TXT   1-01-1987      a file in subdirectory LEVEL2
               LEVEL3A        <SUB  DIR>     a subdirectory of LEVEL2
               LEVEL3B        <SUB  DIR>     a subdirectory of LEVEL2 


                                                               REFER.DOC - 1





               Pretend LEVEL2   <SUB DIR> is highlighted, making it the
               Current Displayed Directory.  The first three entries repre-
               sent a subdirectory path equivalent to the DOS path \FIXED
               DISK\LEVEL1\LEVEL2.  The Current Displayed Directory contains
               four files.  Following the filenames are subdirectories that
               belong to the Current Displayed Directory.  

               Note that there is always only one path back to the root
               directory from whatever subdirectory you are in, but there
               may be any number of paths leaving from your Current Dis-
               played Directory.

          Viewing the Rest of Your Files 

               Since only 16 files and subdirectory names will fit at one
               time in the Directory Window, you need a way to see the rest
               if you have more on your disk.  ShortCut gives you several
               ways to do this.

               Down Arrow - Moves the screen arrow down one line.  When the
                    arrow is at the bottom of the window and more entries
                    exist, pressing the down arrow key will scroll the
                    entries up one by one until the last entry is reached.

               Up Arrow - Moves the screen arrow up one line.  When the
                    arrow is at the top of the window and more entries are
                    above it, pressing the up arrow key will scroll the
                    entries down one at a time until the root directory
                    entry is reached.

               Scroll Lock - Scroll Lock affects how the up and down arrow
                    keys work.  With Scroll Lock engaged, the screen arrow
                    will remain stationary while the entry names will scroll
                    around it.  You will hear a beep when ShortCut cannot
                    scroll up or down any more.

               Home - Moves the screen arrow to the top entry in the Direc-
                    tory Window.

               End - Moves the screen arrow to the bottom entry in the
                    Directory Window.

               Home, Home or Ctrl-Home - Moves the screen arrow to the first
                    entry (the root directory) and positions that entry at
                    the top of the Directory Window.

               End, End or Ctrl-End - Moves the screen arrow to the last
                    entry and positions that entry at the bottom of the
                    Directory Window.

               PgDn - Displays the next 16 entries in the Directory Window. 
                    The screen arrow will not move below the last entry so a
                    partial PgDn will occur if there are less than 16
                    entries below the displayed files.

                                                               REFER.DOC - 2





               PgUp - Displays the previous 16 entries in the Directory
                    Window.  The screen arrow will not move above the root
                    directory so a partial PgUp will occur if there are less
                    than 16 entries above the displayed files.

               If you know the name of the file you want to find, you can
               move the screen arrow to it quickly with the Locate File
               command.  Press <Alt-L>.  Type the first letter of the
               filename.  The screen arrow moves to the first file beginning
               with that letter.  Continue typing letters and the screen
               arrow will move to the first filename with the displayed
               letters.  You need type only as many letters as necessary to
               point the screen arrow at the correct file.  Press <Enter>,
               <Esc>, or the Up or Down arrow key to stop Locate File, or
               press the <Space Bar> to stop it and mark the filename.  See
               Locate File for more information.

          Limit on Directory Window Entries 

               ShortCut limits the number of slots available for file and
               subdirectory names in the Directory Window to 250.  If the
               directory names in your path plus the filenames in your
               Current Displayed Directory plus the subdirectories belonging
               to your Current Displayed Directory exceed 250, the excess
               will not be visible in the Directory Window.

               If the 250 limit is exceeded, ShortCut will suggest that you
               change the File Pattern.  In this way you can use very large
               directories and still locate the files you want by screening
               out the files you don't need.

          Additional File Information 

               File and directory names are always visible in the Directory
               Window.  ShortCut can also display the date a file was
               created or last updated, the time of day a file was created
               or updated, and the size of the file in number of bytes. 
               Because of the Directory Window size, only one of these
               options can be shown at any one time.  The current option is
               displayed just to the right of the EXT header and will be
               highlighted.

               To select a different option, move the screen arrow to this
               area by pressing the right arrow key from the Directory
               Window or the up arrow key from the Display Drive box.  Your
               options are DATE, TIME, and SIZE.  Select the one you want by
               pressing the first letter of your choice.








                                                               REFER.DOC - 3

```
{% endraw %}

## FILES840.TXT

{% raw %}
```
Disk No  840
Program Title: SHORTCUT version 2.05
PC-SIG version 1
 
    SHORTCUT is a RAM-resident program that eases your use of
DOS, and displays much information on the screen about your
directories and system status. The main screen also displays the
equipment installed on your computer, the disk status, the memory status,
the DOS version, the date and time, and the main commands available to you.
This program has simple menus, with optional on-line help that can be
viewed from within the program. Once you exit to DOS, SHORTCUT will remain
in memory until you need it again. With SHORTCUT you can run, copy, move,
type, print, erase, search, or rename a file. You can also format and copy
your disks, and edit a file with your favorite word processor from
this program.
 
Usage: DOS and System Management.
 
System Requirements: 256K memory and one disk drive.
 
How to Start: For instructions on printing the documentation and starting
the program, type GO (press enter)
 
Suggested Registration: $30.00 (plus $5.00 shipping/handling)
 
File Descriptions:
 
SHORTCUT EXE  Main program.
SHORTCUT HLP  On-line help file.
CHATTR   EXE  Utility program for changing file attributes.
SHORTCUT DAT  Configuration data file.
COMP     BAT  Batch file, must run for single-color moniters with CGA.
COMP     DAT  Data file for COMP.BAT.
AFILE    TXT  Sample text file for tutorial.
BFILE    TXT  Sample text file for tutorial.
CFILE    TXT  Sample text file for tutorial.
DFILE    TXT  Sample text file for tutorial.
README   1ST  Introduction to SHORTCUT.
START    DOC  How to get started.
TUTOR    DOC  A tutorial.
DWINDOW  DOC  How files and directories are displayed in directory window.
SETUP    DOC  How to customize SHORTCUT.
COMMND   DOC  Explains SHORTCUT's CMMND command.
REFER    DOC  Describes each ShortCut feature in detail.
REGISTER FRM  Registration form.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #840 SHORTCUT  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer type:                         ║
║                  COPY START.DOC PRN  (press enter)                      ║
║                                                                         ║
║ To start the program, type: SHORTCUT (press enter)                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REFER.DOC

{% raw %}
```






                                 SHORTCUT REFERENCE

          This file is a list presented in alphabetical order of all com-
          mands, features, and concepts associated with ShortCut.  It will
          provide you with detailed information that goes beyond what you
          learned in TUTOR.DOC.  Read this section to gain a greater under-
          standing of ShortCut's features and refer to it anytime you have a
          question about some aspect of the program.

          Many of ShortCut's features are available when you pop up ShortCut
          while running another program.  Those features accessible to you
          at this time are indicated with an asterisk (*) to the right of
          the feature name at the top of the page.
           
          Much of this section's information is available to you on-line if
          the help file SHORTCUT.HLP is on your disk.  Press <F1> and
          <Enter> to view the main help menu, or you can press <Alt-H> for
          context-sensitive assistance.  





































                                                               REFER.DOC - 1





          Break *                                                      Alt-B
          __________________________________________________________________

          The Break command turns Break mode on and off.  When Break is on,
          DOS will check for a control break more frequently.  Normally DOS
          checks for a control break only when it is doing standard input or
          output functions or Asynchronous Communications Adapter opera-
          tions.  With Break on, DOS checks for a control break whenever a
          program requests any DOS function.  This will slow down the
          execution of the program a bit, but it does give you better
          control of your system.

          Using Break

               Press <Alt-B> to turn Break mode on or off.  

               When Break is on, the word "break" will be highlighted in
               capital letters in the Break box near the middle of the
               ShortCut screen just above the Command Bar.




































                                                               REFER.DOC - 2





          Chime *                                                      Alt-C
          __________________________________________________________________

          When Chime is on, a chime will sound every hour on the hour.

          Using Chime

               Press <Alt-C> to turn Chime on or off.  When Chime is
               active, a small musical note will be present in the box
               ShortCut uses to display the time.













































                                                               REFER.DOC - 3





          Changing Directories * 
          __________________________________________________________________

          Changing Directories in the Directory Window

               Move the screen arrow to the directory you wish to make the
               Current Displayed Directory.  Press the Space Bar.

               If the directory you wish to make the Current Displayed
               Directory is not visible in the Directory Window, you must
               move through your directories until it is, or you can use the
               following method to change directories.

          Changing Directories with the Tree 

               Press <Alt-T> to display a visual tree of the directories on
               your disk.  Move the highlighting with the up and down arrow
               keys to the directory you want to make the Current Displayed
               Directory.  Press the <Enter> key.

          Changing to a Marked Directory

               If a directory is marked with the Mark Directory command
               (Alt-M), you can be in any other directory and the Go to
               Directory command (Alt-G) will return you to the marked
               directory quickly.





























                                                               REFER.DOC - 4





          Colors, Changing Screen *                              Shift-F7, 5
          __________________________________________________________________

          You can use the SETUP command to change the colors of the ShortCut
          screen.

          Changing the Screen Colors

               Press <Shift-F7> to move to the SETUP command box on the
               second Command Bar.  Hit the <Enter> key.  Choose option 5 of
               the Main Setup Menu to display the Screen Display Menu.

               You can use these options to change the appearance of the
               ShortCut screen whether you have a single color or a multi-
               color monitor.

               For a complete explanation of the options available on the
               Screen Display Menu see Screen Display Setup in SETUP.DOC. 





































                                                               REFER.DOC - 5





          Command Bar * 
          __________________________________________________________________

          The oblong rectangular box at the bottom of the ShortCut screen is
          the Command Bar.  It is divided into ten smaller boxes, each
          containing a ShortCut command.

          Actually, ShortCut has four Command Bars.  The first Command Bar
          is the one usually displayed.  The second Command Bar becomes
          visible when you press a <Shift> key, the third appears when you
          press the <Ctrl> key, and the fourth pops up when you press the
          <Alt> key.

          Accessing the Command Bar 

               To reach the Command Bar, press any function key.  A command
               box on the Command Bar will be highlighted.  You can move to
               any other command box by using the left and right arrowy<-
               keys. > If you move off the right end of the Command Bar, you
               will move to the second Command Bar.  Following the second
               Command Bar is the third Command Bar and then the fourth.  
               Finally you will return to the first Command Bar again. 
               Picture the four Command Bars as sides of a square.  By
               traveling in any direction along the perimeter, you will
               eventually return to where you started.  

               Each command on any of the Command Bars correspond to a
               function key alone or in combination with the Shift, Ctrl, or
               Alt keys.  You can move directly to a command box by pressing
               the proper function key combination.  The numbers in the
               command boxes tell you which function key to use.  

          The First Command Bar 

               The first Command Bar is the one usually displayed on your
               screen.  Press a function key to move to a command box.

               F1   Help *    Displays a help screen listing ShortCut
                              commands.  Detailed help is available by
                              pressing the keys for any command from this
                              screen.

               F2   Run       Executes the program pointed at by the screen
                              arrow.  The file must have an extension of
                              .COM, .EXE, .BAT, or .BAS.

               F3   Copy *    Copies the marked files to the directory or
                              drive you select.

               F4   Edit      Edits the marked file with the text editor or
                              word processor of your choice.  This command
                              is covered in SETUP.DOC.



                                                               REFER.DOC - 6





               F5   Type *    Displays the contents of the mark file(s). 
                              Files must be an ASCII file or the characters
                              "typed" on your screen may not be readable.

               F6   Print *   Sends the contents of the marked file or files
                              to your printer.  

               F7   Erase *   Erases the marked file or files.

               F8   Mkdir *   Creates a subdirectory that belongs to the
                              Current Displayed Directory.

               F9   Rename *  Renames the marked file or files.

               F10  Commnd    Displays the normal DOS command line.  You may
                              enter any DOS command.  Chapter 5 is devoted
                              to the use of COMMND.

          The Second Command Bar (Shift) 

               All commands on the second Command Bar use the <Shift> key
               plus a function key.  For example, use <Shift-F1> to reach
               the PATH command.  

               F1   Path *    Displays the path DOS uses to find executable
                              files, and allows you to change it if you
                              wish.

               F2   Labl *    Changes the volume label of your disk.

               F3   Move *    Moves files from one directory to another on a
                              disk.  

               F4   Date *    Displays the system date and allows you to
                              change it.

               F5   Time *    Displays the system time and allows you to
                              change it.

               F6   Dcopy     Formats a disk in drive B and copies all files
                              from the disk in drive A to the disk in drive
                              B.

               F7   Setup *   Allows you to configure ShortCut to your
                              specifications.  SETUP is covered in detail in
                              SETUP.DOC.

               F8   Rmdir *   Removes the empty subdirectory pointed at by
                              the screen arrow.

               F9   Search *  Searches all directories on a disk for a file
                              matching a pattern you specify.

               F10  Format    Formats a disk in drive B.

                                                               REFER.DOC - 7





          The Third Command Bar (Ctrl) 
            
               All commands on the third Command Bar use the <Ctrl> key plus
               a function key.  

               F1 - F10  Your commands 

                    You determine what these commands will be.  SETUP.DOC
                    will tell you how to "install" these commands.  The
                    command boxes will say Ndef for not defined until you
                    put your commands in them.  

          The Fourth Command Bar (Alt)

               All commands on the fourth Command Bar use the <Alt> key plus
               a function key.

               F1 - F10  Your commands

                    You determine what these commands will be.  SETUP.DOC
                    will tell you how to "install" these commands.  The
                    command boxes will say Ndef for not defined until you
                    put your commands in them.  

          Executing Commands 

               Once a command on the Command Bar is highlighted, start the
               command by hitting the <Enter> key.  Follow any directions
               that appear on the message line.


























                                                               REFER.DOC - 8





          Command Buffer                                      F1, F9 and F10
          __________________________________________________________________

          When you use the COMMND command (F10), you can recall to the
          command line any of the last ten commands you sent to DOS with
          COMMND.

          Using the Command Buffer

               Press <F10> to reach the COMMND command box on the second
               Command Bar.  Hit <Enter>.

               ShortCut stores the last ten commands that you sent to DOS
               with COMMND in its command buffer.  To see your previous
               command, press <F9>.  To see the command before that, press
               <F9> again, etc.  When you reach the last of your stored
               commands, the most recent command will be displayed again.

               <F10> will move you forward through the list of commands.

               When the Command you want is displayed on the command line,
               you may edit it with any of the other command line editing
               keys, and you can press <Enter> to send the command to DOS. 
               This command then becomes the most recent in the command
               buffer.






























                                                               REFER.DOC - 9





          Copy *                                                          F3
          __________________________________________________________________

          The COPY command is used to make a duplicate of one or more files
          in another directory on the same or another disk. 

          Using COPY

               Mark the file you wish to copy in the Directory Window.  

               Press <F3> to move to the COPY command box on the Command Bar
               and hit the <Enter> key.

               ShortCut will tell you to make the directory to which you
               want to copy the marked file the Current Displayed Directory. 
               If this directory is on the same disk, point the screen arrow
               at it.  Press the <Space Bar> to make it the Current Dis-
               played Directory.  

               Press <Enter> to complete the COPY command.

               You can stop COPY by pressing <Esc> before you press <Enter>
               the second time.

               You may also use the Tree command (Alt-T) change directories
               on the same disk during the COPY command.

               Whenever you copy a file to a directory that already contains
               a file with the same filename, the file is replaced with the
               new copy and the contents of the old file no longer exists.

          Copy to Another Disk

               If you want to copy a file to a directory on another disk,
               mark the file and start the COPY command by pressing <F3> and
               then <Enter>.  

               Move the screen arrow to the Display Drive box and type the
               letter of the drive you want the file copied to.  ShortCut
               will display the files and directories on that disk drive in
               the Directory Window.  Then make the desired directory your
               Current Displayed Directory as above and strike the <Enter>
               key.  

          Single Floppy Drive Systems

               COPY also allows you to copy files from one floppy diskette
               to another disk on systems having only a single floppy drive. 
               DOS will give you numerous prompts to change diskettes.  Just
               follow the messages that appear on your screen.





                                                              REFER.DOC - 10





          Copying Multiple Files

               When you mark more than one file to COPY, ShortCut will copy
               all your marked files one after another without requiring any
               further action from you.  As your files are being copied, you
               will see the number of bytes in the Disk Status box change
               and the filenames will appear in the Directory Window just
               below the Current Displayed Directory name above all the
               other files and subdirectories.  They will be highlighted and
               will not fill their proper positions in the Directory Window
               until all the files have been copied.

          Copying to a Different Filename

               Whenever you use ShortCut's COPY command, a file is created
               with the same filename as the original.  Occasionally you may
               want to copy a file to a different name.  You can do this in
               two ways.

               The first is to use the COMMND command and enter the usual
               DOS command on the command line.  This will be the preferred
               method for those who are familiar with DOS commands as it is
               quick.

               If you choose to avoid DOS command syntax altogether, you may
               use a two step process.  First use ShortCut's COPY command as
               usual, then use the RENAME command to give the file or files
               new names.

          Make a Directory while Copying Files

               Occasionally you may mark several files to copy to another
               directory and then realize you have not created a directory
               to put them in.  

               If this happens to you, press <F8>.  ShortCut will prompt you
               for a new subdirectory name.  Hit <Enter>.

               Now you can make the new directory the Current Displayed
               Directory and complete the COPY command.















                                                              REFER.DOC - 11





          Date *                                                    Shift-F4
          __________________________________________________________________

          The DATE command is used to change the system date.

          Using DATE

               Press <Shift-F4> to move to the DATE command box on the
               second Command Bar.  Press <Enter>.

               ShortCut asks you to enter a date.  You may choose either of
               these formats:
                                   mm-dd-yy   or   mm-dd-yyyy 

               After you hit <Enter>, ShortCut will display the date you
               typed including the proper day of the week on the ShortCut
               screen.

          System Date

               The system date is the date your computer thinks is correct. 
               If you entered a date when you booted up your computer using
               DOS, this is the system date.  If you have a "clock" in your
               computer system, the system time will be determined by this
               clock.  If you don't have a clock or you did not enter a date
               when DOS requested it, the system date will be January 1,
               1980.  The DATE command will change the system date in all
               cases.



























                                                              REFER.DOC - 12





          Dcopy                                                     Shift-F6
          __________________________________________________________________

          The DCOPY command is used to create an exact copy of the floppy
          disk in drive A on the disk in drive B.  If the disk in drive B is
          not formatted, DCOPY will format it while copying the files.

          Using DCOPY

               To use DCOPY, the DOS program DISKCOPY.COM must be in the
               Current Displayed Directory or along the path.  Press <Shift-
               F6> to move to the DCOPY command box on the second Command
               Bar and hit the <Enter> key.

               Follow the DOS prompts on your screen.  Remember that the
               source diskette is the diskette you are copying FROM, and the
               target diskette is the one you are copying TO.

               If you have only one floppy disk drive, you will need to
               switch diskettes several times before DCOPY is finished. 
               Every time you are told to insert a diskette in drive B, put
               the target diskette in drive A.

































                                                              REFER.DOC - 13





          Default Drive *
          __________________________________________________________________

          The Default Drive is the drive used by DOS.  DOS searches for a
          file only on the Default Drive if the filename is not prefixed
          with a drive specifier and if a path is not set up.  ShortCut does
          not use the Default Drive as most of its commands work on the
          Current Displayed Directory and it will preface the commands it
          sends to DOS with the correct drive specifier automatically.

          The COMMND command and User commands use the Default Drive, not
          the Display Drive.  This is because if you use these commands, you
          are actually bypassing ShortCut and using DOS.

          The Default Drive Box

               The current Default Drive is shown in the Default Drive box
               as a highlighted capital letter.

          Changing the Default Drive

               To change the Default Drive, move the screen arrow to the
               Default Drive box.  Press the letter of the drive to which
               you wish to change (A, B, C, or D).  

               Although only four drives are shown in the Default Drive box,
               ShortCut can work with as many as eight drives.  If you have
               more than four drives, you can also choose E, F, G, or H and
               ShortCut will display the files on that drive.  You cannot
               change to a drive that your system does not have.

               If you change to a drive that exists but you don't have a
               diskette in it or the drive door is not closed, there will be
               a pause and you will eventually get the following message
               from DOS:

               not ready error reading drive (the drive where the error
                    occurred)
               Abort, Retry, Ignore?

               In this case, you should fix the problem (put a diskette in
               the drive or close the drive door) and type R for Retry.

               You will also get this error if there is some other problem
               with your disk drive or your disk and your computer is unable
               to read it.  Again you should try R once or twice first.  If
               this does not work, you will have to type A for Abort.  This
               will essentially restart ShortCut, but no harm will be done. 







                                                              REFER.DOC - 14





          Disk Status *
          __________________________________________________________________

          The Disk Status box displays useful information about the Display
          Drive disk.

          Disk Space Statistics

               ShortCut shows you the number of bytes that still remain on
               your disk that are free for you to use, the number of bytes
               that are already being used, and the total number of bytes on
               your disk.

               If you set up a RAM disk smaller than a full size disk
               (360 K) and make it the current Display Drive, the number of
               bytes used and the bytes total will not be correct.   The
               number of bytes free will be accurate, however.

          File Statistics

               ShortCut also shows you the number of user files in your
               Current Displayed Directory.  A user file is any file shown
               in the Directory Window.  This also includes any subdirec-
               tories that belong to the Current Displayed Directory.

               If you set the File Pattern to anything other than *.*, the
               number of user files may change.  ShortCut only counts those
               files that match the current File Pattern.

               The number of hidden files are also shown.  Hidden files will
               not appear in the Directory Window.

               The number of total files sums the user files and the hidden
               files.





















                                                              REFER.DOC - 15





          Display Drive *
          __________________________________________________________________

          The Display Drive is the drive whose files and directories are
          shown in the Directory Window.  When you first start up ShortCut,
          this will be the same as the Default Drive, but you can change it
          to any drive on your system.

          The Display Drive Box

               The current Display Drive is shown in the Display Drive box
               as a highlighted capital letter.

          Changing the Display Drive

               To change the Display Drive, move the screen arrow to the
               Display Drive box.  Press the letter of the drive to which
               you wish to change (A, B, C, or D).  ShortCut will display
               that drive's files and directories in the Directory Window.

               Although only four drives are shown in the Display Drive box,
               ShortCut can work with as many as eight drives.  If you have
               more than four drives, you can also choose E, F, G, or H and
               ShortCut will display the files on that drive.  You cannot
               change to a drive that your system does not have.

               If you change to a drive that exists but you don't have a
               diskette in it or the drive door is not closed, there will be
               a pause and you will eventually get the following message
               from DOS:

               not ready error reading drive (the drive where the error
                    occurred)
               Abort, Retry, Ignore?

               In this case, you should fix the problem (put a diskette in
               the drive or close the drive door) and type R for Retry.

               You will also get this error if there is some other problem
               with your disk drive or your disk and your computer is unable
               to read the data on it.  Again you should try typing R once
               or twice first.  If this does not work, you will have to type
               A for Abort.  This will essentially restart ShortCut, but
               don't worry.  No harm will be done. 











                                                              REFER.DOC - 16





          DOS Screen *                                                 Alt-D
          __________________________________________________________________

          The DOS Screen command is used to view the normal DOS screen that
          was on your monitor just before the ShortCut screen reappeared. 
          This can be useful if you need to see output from a program such
          as CHKDSK.COM and you do not have the Pause mode turned on.

          You can also use DOS Screen to enter more than one command in
          succession while you are using the COMMND command without return-
          ing to the ShortCut screen.  Your monitor's screen will look like
          you are just using DOS without ShortCut.

          Using DOS Screen to View 

               Press <Alt-D>.  When you are through viewing the DOS screen,
               press any key to return to the ShortCut screen.

          Using DOS Screen to Enter Multiple Commands

               Press <F10> to move to the COMMND box.  Press <Enter>.  Now
               press <Alt-D>.  The ShortCut screen will disappear and the
               DOS screen will be displayed.  You can enter as many DOS
               commands as you wish without the ShortCut screen reappearing.

               When you want to return to the ShortCut screen, press <Alt-D>
               again.




























                                                              REFER.DOC - 17





          DOS Version *
          __________________________________________________________________

          The DOS version box indicates the version of DOS you used to start
          up your computer.  ShortCut works with DOS versions 2.xx and 3.xx.


















































                                                              REFER.DOC - 18





          Edit                                                            F4
          __________________________________________________________________

          The EDIT command is used to start up the word processor or text
          editor of your choice for you to use to edit a file.

          Your Editor

               ShortCut is preset to use EDLIN, the editor that is part of
               the DOS package.  You can specify a different editor or word
               processor by using the SETUP command.

               Regardless of which editor you use, it must be in the default
               directory of the default drive or along the DOS path.  Or you
               can specify the drive on which ShortCut will always find your
               editor when you set up the EDIT command.

          Specifying a File to Edit

               If there is a particular file you want to edit, mark that
               file before you give the EDIT command.  This filename will be
               passed as a parameter to your editor.  Then when EDIT starts
               up your text editor or word processor, the file you want will
               be displayed on your screen, all ready for you to edit.

               If you do not mark a file, ShortCut will pass the filename
               SCRATCH.PAD to your editor.  With the SETUP command you can
               specify a different filename or prevent any filename from
               being passed.  If you mark more than one file, only the first
               will be passed to your editor.

          Using EDIT

               Press <F4> to move to the EDIT command box on the Command Bar
               and hit the <Enter> key.  Your editor or word processor will
               be started and you will be editing your marked file if you
               marked one.

          Specifying Your Editor and the Default Filename

               ShortCut allows you to specify which editor or word processor
               you choose to use with the EDIT command and the name of the
               file you want to edit if you do not mark one in the Directory
               Window.

               Press <Shift-F7> to move to the SETUP command box on the
               second Command Bar.  Select option 1 of the Main Setup Menu
               and the Edit Setup Menu will appear on your screen.

               Two options are available: the editor to be used and the
               default edit file.

               For a complete explanation of these options and how to use
               them, see SETUP.DOC.

                                                              REFER.DOC - 19





          Equipment Installed *
          __________________________________________________________________

          The Equipment Installed box displays information about your
          computer system.

          Disk Drives

               Listed first is the number of disk drives on your system. 
               This is the number of drives that are known to DOS and it can
               vary from the actual physical disk drives you can see.  

               For example, you may have set up a RAM disk which you can't
               actually see but DOS and ShortCut know it exists.  Also if
               you only have a single floppy drive, the number of disks will
               be shown as two drives.  This allows for the copying of files
               using just the one drive.  Similarly ShortCut will report at
               least three drives for an IBM XT with a single floppy drive: 
               two floppies and a hard disk.

               If you use DOS version 3.0 or greater, ShortCut will probably
               tell you that you have 5 disk drives, no matter how many you
               actually have.  ShortCut gets its information from DOS. 
               These versions of DOS report the number of logical disk
               drives, not physical disk drives, and the default number is
               always 5.

               You can change this by placing the DOS LASTDRIVE command in
               your CONFIG.SYS file.  For example, if you have 3 disk
               drives, you would enter the command like this:

                    LASTDRIVE=C 

               Now when you reboot, ShortCut will report your system as
               having 3 disk drives instead of 5.  

               See your DOS manual for more information about LASTDRIVE.

          Ports

               Below the number of drives, ShortCut displays the number of
               parallel and serial ports your computer has.  Also it tells
               you if you have a game port installed.












                                                              REFER.DOC - 20





          Erase *                                                         F7
          __________________________________________________________________

          The ERASE command is used to erase one or more files on your disk.

          Using ERASE

               Mark the file that you want to delete in the Directory
               Window.  Press <F7> to move to the ERASE command box on the
               Command Bar and hit <Enter>.

               ShortCut will ask you if you want to erase a marked file
               before it deletes it.  This gives you a chance to change your
               mind or to prevent a file being erased if you marked it by
               mistake.  If you respond with Y for Yes, the file will be
               erased from your disk and ShortCut's display will be updated. 
               If you reply with N for No or press any other key, the file
               will not be erased.

               If you prefer, you can have ShortCut erase your marked file
               without seeking your confirmation.  See Miscellaneous in
               SETUP.DOC on how to do this using the SETUP command.

          Erasing Multiple Files

               If you have more than one file marked in the Directory Window
               when you use the ERASE command, ShortCut will erase one file
               after another pausing to seek your confirmation before
               deleting each one unless you have set up ShortCut so that
               does not ask you first.  You may respond with Y for some
               files while responding with N for others.

               If you have several files marked in the Directory Window,
               have Confirm before Erasing turned off, give the ERASE
               command, and suddenly realize that is not what you want to do
               as you see your precious files rapidly disappearing from the
               Directory Window, press <Esc>.  This will stop ERASE.  You
               will have lost some files, but hopefully, you reacted quickly
               enough to save others.
















                                                              REFER.DOC - 21





          Exit ShortCut                                                Alt-E
          __________________________________________________________________

          The Exit command is used to exit ShortCut and remove it from your
          computer's memory.  

          Using Exit

               Press <Alt-E> when the ShortCut screen is displayed.  This
               command will not work when ShortCut is popped up within
               another program.

          Exiting When Other RAM Resident Programs Are Loaded after ShortCut

               If you have other RAM resident programs running that were
               loaded after ShortCut, you will get a message to this effect
               on the message line and you will not be allowed to exit.  You
               must first exit these other programs before you can remove
               ShortCut from memory.  This will prevent you from leaving an
               empty space in memory that will confuse your computer system.

               Sometimes after you have removed other RAM resident programs
               loaded after ShortCut, you will still get a message saying
               that there are RAM resident programs in memory.  If this
               happens, press <Alt-E> again and you will exit ShortCut.






























                                                              REFER.DOC - 22





          Expanded Keyboard Buffer *                          Shift-F7, 6, 7
          __________________________________________________________________

          The Expanded Keyboard Buffer option of the SETUP command increases
          the keyboard buffer of your computer from 16 to 128 characters. 
          Even while your computer is busy with some other task, it will
          store your keystrokes in a section of memory and then retrieve
          them when it is ready for them.  To you, this means you will not
          have to wait for your computer, but you can continue typing
          characters without getting the "beep" that means the buffer is
          full.

          Using the Expanded Keyboard Buffer Option

               Press <Shift-F7> to move to the SETUP command on the second
               Command Bar.  Hit <Enter>.  Select option 6, Miscellaneous,
               from the Main Setup Menu.  Choose option 7, Expand Keyboard
               Buffer.  Type Y to expand the buffer size, N to return the
               buffer size to 16 characters.

               Do not increase the buffer size with ShortCut if you use
               programs that also expand the keyboard buffer.  This includes
               Borland's SuperKey.  You will know it if you do as you will
               not be able to move the screen arrow at all.

               Initially, this option is turned off.





























                                                              REFER.DOC - 23





          File and Directory Names
          __________________________________________________________________

          ShortCut uses the same file and subdirectory naming conventions as
          DOS.  A legal file or subdirectory consists of a name from 1 to 8
          characters that may be followed by a period and an extension of 1
          to 3 characters.  For example:

                    MYFILE.TXT

          MYFILE is the name and TXT is the extension.

          Most people do not put an extension on a subdirectory name, but it
          is perfectly permissible to do so.

          Legal Characters

               You can use these characters in a file or subdirectory name:

                    A-Z
                    0-9
                    ! @ # $ % & ( ) - { } / ` '_

               These characters are not permitted:

                    * + = [ ] : ; " ~ < > ? ,

          Wildcard Characters

               Wildcard characters match a group of filenames.  There are
               two wildcard characters: asterisk (*) and question mark (?).

                    * means any series of characters
                    ? means any single character

               Here are some examples of filenames that use wildcards.

               *.TXT 
                    Files with any name carrying a TXT extension.

               ?FILE.TXT 
                    Filenames with any single character followed by the
                    letters FILE.TXT.  

               ?????.* 
                    Any filename with five characters and any extension. 
                    KITTY.CAT would match this pattern.  DOGGIE.DOG would
                    not because the name has 6 characters.

               B*.*
                    Any filename beginning with the letter B.

               *.* 
                    Any file; all files.

                                                              REFER.DOC - 24





          File Pattern *                                               Alt-F
          __________________________________________________________________

          The File Pattern command is used to set up a pattern for ShortCut
          to use when displaying files in the Directory Window.  Only those
          filenames that match the current file pattern will be shown.  

          Using File Pattern

               Press <Alt-F>.  You will be asked to type in a new pattern. 
               When you hit <Enter>, ShortCut will display only those files
               that match the pattern you specified.  Directory names are
               not affected.

          Creating a File Pattern

               A file pattern may contain any acceptable character in a
               filename plus wildcard characters.

               Here are some examples of acceptable file patterns.

               *.TXT 
                    Files with any filename having a TXT extension.

               ?FILE.TXT 
                    Files with any single character followed by the letters
                    FILE.TXT.  

               ?????.* 
                    Any file with five characters and any extension.  

               M*.*
                    Any file that begins with the letter M.

               *.* 
                    Any file; all files.


          If you are ever puzzled as to why files you know are on your disk
          aren't shown in the Directory Window, check the File Pattern to
          make sure it isn't screening out the very files you are looking
          for.













                                                              REFER.DOC - 25





          Format                                                   Shift-F10
          __________________________________________________________________

          The FORMAT command is used to format a diskette in drive B.  It
          will also add system files to the diskette and create a volume
          label, if you wish.

          Using FORMAT

               To use FORMAT, the DOS program FORMAT.COM must be in the
               default directory of the default drive or along the path.  If
               it is not, ShortCut will request that you insert your DOS
               disk in drive A.  Press <Shift-F10> to move to the FORMAT
               command box on the second Command Bar and hit <Enter>.

               ShortCut will ask you if you want to put the system files on
               your diskette.  System files are COMMAND. COM  and two hidden
               files used by the operating system.  You diskette will be
               "bootable" if it contains these files.  Answer Y for yes, or
               N for no.

               Next ShortCut will ask you if you want to create a volume
               label.  Answer Y for yes or N for no.

               If you choose to create a volume label, you will be asked to
               type one in.  Remember that the label must be no more than 11
               characters in length.  Press <Enter>.

               If you have only one floppy disk drive, you will need to
               switch diskettes several times before FORMAT is finished. 
               Every time you are told to insert a diskette in drive B, put
               the target diskette in drive A.























                                                              REFER.DOC - 26





          Go to Directory *                                            Alt-G
          __________________________________________________________________

          The Go to Directory command is used to make a directory that was
          previously marked with the Mark Directory command (Alt-M) the
          Current Displayed Directory.

          Using Go to Directory

               Press <Alt-G>.  ShortCut will switch to the previously marked
               directory.












































                                                              REFER.DOC - 27





          Help *                                                 F1 or Alt-H
          __________________________________________________________________

          Help is available on-line for any ShortCut command and most of its
          major features.

          Using Help

               Press <F1> to move to the HELP command box.  Press <Enter>.

               The Main Help screen will appear on your monitor.  For more
               information, press the highlighted key or key combination
               listed along side the command or topic.  ShortCut will search
               for the related help screen and display it on your monitor.

               When you are done viewing the help screen, you may press the
               <Space Bar> to return to the Main Help screen, or you may
               press <Esc> to exit the help system altogether.

               To exit from the Main Help screen, press <Esc>.

          Context-Sensitive Help

               If you are in the middle of doing something with ShortCut and
               suddenly need help, press <Alt-H>.  ShortCut will select a
               help screen for you to view based on what you were doing at
               the time.

               When you are through reading the help text, press the <Space
               Bar> to go to the Main Help screen, or press <Esc> to exit
               the help system.  When you exit, you will return to where you
               were before you asked for help.























                                                              REFER.DOC - 28





          Labl *                                                    Shift-F2
          __________________________________________________________________

          The LABL command is used to change the volume label of your disk.

          Using LABL

               Press <Shift-F2> to move to the LABL command box on the
               second Command Bar.  Hit <Enter>.

               ShortCut asks you to enter a new name for your volume label. 
               The label must be no more than 11 characters in length.  Type
               in the new name and hit the <Enter> key.  You will see the
               new name appear at the top of the Directory Window in the
               root directory position.

               Volume labels are handy for identifying a disk, especially
               floppy diskettes.  If you have not created a volume label for
               your disk, NO LABEL will appear in the root directory posi-
               tion in the Directory Window.



































                                                              REFER.DOC - 29





          Locate File *                                                Alt-L
          __________________________________________________________________

          The Locate File command is used to move the screen arrow to a
          particular filename in the Directory Window.

          Using Locate File

               Press <Alt-L>.  Type the first letter of the filename.  When
               you do, it appears on the message line and the filenames are
               sorted by Name alphabetically.  Also the screen arrow will
               move to the first file beginning with that letter.  As you
               continue typing the letters of the filename, the screen arrow
               will move to the first filename that matches the displayed
               letters.  You may erase typed letters with <Backspace>.  You
               need type only as many letters as necessary to point the
               screen arrow at the correct file.

               If you type a letter that ShortCut cannot find, the letter
               will blink.  Simply type the correct letter over it.

               End Locate File by pressing either <Enter>,  <Esc>, or the Up
               and Down Arrow keys.  The <Space Bar> will also stop it and,
               in addition, mark the file in the Directory Window.

               If the files in the Directory Window are sorted by Extension
               when you give the Locate command, the filenames will remain
               sorted in this order.  Type the first letters of the filename
               extension you want.  As you type, the screen arrow will zero
               in on the correct extension.  Stop Locate with <Enter>,
               <Esc>, <Space Bar>, or the Up and Down Arrow keys as above.
























                                                              REFER.DOC - 30





          Low Disk Space Warning *                            Shift-F7, 6, 6
          __________________________________________________________________

          When the remaining unused space on your disk drops below the
          number of bytes specified, the number of bytes free in the Disk
          Status box of the ShortCut screen will blink on and off to attract
          your attention.

          Setting Low Disk Space Warning

               ShortCut is preset to warn you when you have less than 10,240
               bytes remaining on your disk.

               If you wish to change this number, press <Shift-F7> to move
               to the SETUP command box on the second Command Bar.  Hit
               <Enter>.  Select option 6 on the Main Setup Menu and option 6
               of the Miscellaneous Menu.  Enter the number of bytes you
               want.





































                                                              REFER.DOC - 31





          Mark Directory *                                             Alt-M
          __________________________________________________________________

          The Mark Directory command is used to "mark" a directory so that
          ShortCut will change to that directory when the Go to Directory
          command (Alt-G) is given.  

          Using Mark Directory

               Make the directory you want to mark the Current Displayed
               Directory.  Press <Alt-M> to mark it.  Now you can change
               directories and any time you want to return to your marked
               directory, give the Go to Directory command (Alt-G) to
               quickly return.  This can be useful while moving and copying
               files.

               Only one directory can be marked at any one time.  If you
               mark a directory when another is already marked, the second
               directory becomes the marked one.




































                                                              REFER.DOC - 32





          Marking Files *                                         Space Bar 
          __________________________________________________________________

          You tell ShortCut which files you want the Command Bar commands to
          work on by "marking" files in the Directory Window.  

          Marking a File 

               Point the screen arrow at the file you wish to mark and press
               the <Space Bar>.  When a filename is marked, it will be
               highlighted.

               You may mark a file before or after you have moved to the
               Command Bar as long as you have not selected a Command Bar
               command with the <Enter> key.

               ShortCut always checks to see that the file exists on the
               Display Drive before marking it.  If ShortCut does not find
               the file, it assumes you have changed disks.  It will display
               a message on the message line and then it will read the new
               disk directory.

               The Disk Status box displays how many bytes are in all
               currently marked files.  

               Do not attempt to mark a directory by pressing the Space Bar
               as this will cause ShortCut to change your Current Displayed
               Directory.

          Marking Multiple Files 

               All of the ShortCut file commands on the Command Bar except
               EDIT can work on multiple files, one after another.  There-
               fore, you can mark more than one file in the Directory Window
               before you use a command.

               To mark all the files in the Current Displayed Directory,
               press <Ctrl-Space Bar>.  All of the filenames in the Direc-
               tory Window will be highlighted.

          Unmarking Files 

               You can "unmark" a file in the Directory Window by pointing
               at the marked filename with the screen arrow and pressing the
               <Space Bar>.

               You can also unmark any marked files by moving the screen
               arrow to the Current Displayed Directory and pressing the
               <Space Bar>.  ShortCut will read your disk's directory once
               again and all marking will be removed.  This is useful if you
               want to unmark all filenames at once.

               If you used <Ctrl-Space Bar> to mark all the files in a
               directory, you can unmark them all by pressing <Ctrl-Space

                                                              REFER.DOC - 33





               Bar> once again.  This method is quicker than moving the
               screen arrow to the Current Displayed Directory and hitting
               the <Space Bar>, but either method gets the job done.

          Reverse Marking

               If you want to mark all filenames except for a few, mark only
               those files you don't want to mark and press <Alt-Space Bar>. 
               The marking will be reversed and all the filenames except
               those you marked will be highlighted.  To reverse the marking
               again, press <Alt-Space Bar> once more.












































                                                              REFER.DOC - 34





          Memory Status *
          __________________________________________________________________

          The Memory Status box displays how many bytes of random access
          memory (RAM) your computer has.  It also shows you how many bytes
          are free; that is, the number of bytes of memory not being used by
          the programs currently running.  

          Remember that DOS and ShortCut are always in your computer's
          memory so the number of bytes free can never equal the number of
          bytes total on the ShortCut screen.  For example, even if your
          computer has 640K of memory, ShortCut will never report that you
          have 640K free for you to use as ShortCut itself and DOS already
          use some of that memory.

          When ShortCut is popped up over another program, you may be
          surprised to see that you have 0 bytes of memory free for use. 
          For example, our favorite word processor uses all available memory
          for edit space.  Therefore, every time we pop up ShortCut while
          using this program, ShortCut tells us we have no more memory free. 


          ShortCut can only look at the amount of memory free from the
          system point of view.  Since our word processor gobbles all of it
          up, we really can't tell how much memory remains for us to use. 
          Many spreadsheets will function the same way, and you won't be
          able to tell how much space still  exists for your spreadsheet
          model.  This is wholly dependent on how the application program is
          designed and ShortCut has no control over it.


























                                                              REFER.DOC - 35





          Mkdir *                                                         F8
          __________________________________________________________________

          The MKDIR command is used to create a new subdirectory on your
          disk.  

          Using MKDIR

               Press <F8> to move to the MKDIR command box on the Command
               Bar.  Hit <Enter>.

               ShortCut will ask you for the name of the new subdirectory. 
               The name must be no more than 8 characters and may include a
               filename extension of 3 letters or less for a total maximum
               length of 11 characters.  After you type in the name and hit
               <Enter>, the new subdirectory will be created.  This new
               subdirectory will belong to or be a branch from the Current
               Displayed Directory.  Therefore, it will appear after the
               list of filenames at the bottom of the Directory Window.

               You can also create a subdirectory that belongs to another
               directory that is not the Current Displayed Directory.  In
               this case, you must include the path along with the subdirec-
               tory name.  You will not see this new subdirectory on your
               screen until you make its parent directory the Current
               Displayed Directory.  Or you can use the Tree command (Alt-T)
               to see it.

          MKDIR with COPY and MOVE

               Occasionally you may mark several files to copy or move to
               another directory and then realize you have not created a
               directory to put them in.  

               If this happens to you, press <F8>.  ShortCut will prompt you
               for a new subdirectory name.  Hit <Enter>.

               Now you can make the new directory the Current Displayed
               Directory and complete the COPY or MOVE command.
















                                                              REFER.DOC - 36





          Modes *
          __________________________________________________________________

          ShortCut has several modes of operation that can be toggled on and
          off.

          Some modes have dedicated keys on the keyboard to turn them on and
          off.  These are displayed on the ShortCut screen in the Modes box.

               Caps      When on, all letters typed will be capital letters. 
                         Press the <Caps Lock> key to turn Caps mode on and
                         off.

               Num       When on, the numeric key pad can be used to enter
                         numbers and the cursor control keys will not work. 
                         Press the <Num Lock> key to turn Num mode on and
                         off.

               Prn       When on, everything you type on the command line
                         and everything displayed on the DOS screen will be
                         sent to your printer.  Press <Ctrl-PrtSc> to turn
                         Prn on and off.

               Ins       Use varies from program to program.  Insert mode
                         can be used to edit the command line in ShortCut. 
                         When on, all typed characters will be inserted in a
                         line and characters to the right of the cursor will
                         be pushed further to the right.  When it is off,
                         any characters you type will replace any characters
                         already on the command line.  Press <Ins> to turn
                         Insert mode on and off.

               Scrl Lock Use varies from program to program.  In ShortCut,
                         Scroll Lock affects how the up and down arrow keys
                         work.  With Scroll Lock engaged, the screen arrow
                         will remain stationary while the entry names will
                         scroll around it.  Press the <Scroll Lock> key to
                         turn Scroll Lock on and off.

          Other modes are Pause, Break, and Verify which are described
          individually in this Reference section.  














                                                              REFER.DOC - 37





          Move *                                                    Shift-F3
          __________________________________________________________________

          The MOVE command is used to move files from one directory to
          another on the same disk.

          Using MOVE

               Mark the file you wish to move to a new directory in the
               Directory Window.  Press <Shift-F3> to move to the MOVE
               command box on the second Command Bar and hit <Enter>.

               ShortCut will tell you to make the subdirectory to which you
               want to move the marked file the Current Displayed Directory. 
               Move the screen arrow so that it points at the subdirectory
               you want.  It must be on the same disk.  Press the <Space
               Bar> to make it the new Current Displayed Directory.  

               Press <Enter> to complete the MOVE command.  

               You may also use the Tree command (Alt-T) to change direc-
               tories on the same disk during the MOVE command.

               You can stop MOVE by pressing <Esc> before you press <Enter>
               the second time.  

          Moving Multiple Files

               When you mark more than one file to MOVE, ShortCut will move
               all your files one after another without requiring any
               further action from you.

               As your files are being moved, you will see the filenames
               appear in the Directory Window just below the Current Dis-
               played Directory name above all the other files and subdirec-
               tories.  They will be highlighted and will not fill their
               proper slots in the Directory Window until all the files have
               been moved.

          Make a Directory while Moving Files

               Occasionally you may mark several files to move to another
               directory and then realize you have not created a directory
               to put them in.  

               If this happens to you, press <F8>.  ShortCut will prompt you
               for a new subdirectory name.  Hit <Enter>.

               Now you can make the new directory the Current Displayed
               Directory and complete the MOVE command.





                                                              REFER.DOC - 38





          Path *                                                    Shift-F1
          __________________________________________________________________

          The PATH command permits you to view the current DOS path and to
          set a new path if you wish.

          Using PATH

               Press <Shift-F1> to move to the PATH command box on the
               second Command Bar.  Hit <Enter>.

               ShortCut will display the current path.

               If no path is set, you will see this:

                    PATH=,  

               In either case you are asked if you wish to change the path. 
               Answer Y for Yes or N for No.  If you reply with Y, ShortCut
               displays PATH=.  Type in your new path and hit <Enter> when
               you are through.

          The PATH Command while ShortCut is Popped Up

               You can use PATH while ShortCut is popped up to view the
               current DOS path, but you will not be able to change it.





























                                                              REFER.DOC - 39





          Pause *                                                      Alt-P
          __________________________________________________________________

          When Pause mode is active, ShortCut will delay before changing
          from the DOS screen back to ShortCut's screen and prompt you to
          press a key.

          Whenever ShortCut sends a command to DOS or runs a program, the
          ShortCut screen disappears and normal DOS output is displayed on
          your monitor.  When DOS completes its job, the ShortCut screen
          reappears.  If the command or program produces screen output as in
          a DIR command, or perhaps as a result of running CHKDSK.COM, the
          screen will flip back to the ShortCut screen before you have a
          chance to read this output.  When Pause is on, the ShortCut screen
          will not reappear until you press a key.

          Using Pause

               Press <Alt-P> to turn Pause on or off.  When Pause is active,
               the word PAUSE will be in capital letters and highlighted on
               the ShortCut screen in a box beneath the Memory Status
               information.

               When you start up ShortCut for the first time, Pause will be
               on.

          See also DOS Screen.




























                                                              REFER.DOC - 40





          Pop Up ShortCut                                     Alt-Left Shift
          __________________________________________________________________

          While you are running another program, you can pop up ShortCut and
          use many of its features.  When you return to your program, you
          will find it exactly as you left it.

          Using Pop Up

               Press <Alt-Left Shift> to bring up ShortCut.  

               The ShortCut screen will appear and the words POPPED UP will
               blink on and off at the top of the screen.  This is to remind
               you that another program exists under ShortCut.  

               To return to your program, press <Alt-Left Shift> again.

               In general, you will be able to pop up ShortCut when your
               program is waiting for a keystroke from you.  If your com-
               puter is busy with some other task when you press <Alt-Left
               Shift>, ShortCut will twitter telling you it can't come up at
               the time.

          Available Commands

               All of the Alt key commands except Exit (Alt-E) are available
               while ShortCut is popped up over another program.  In addi-
               tion, the following Command Bar commands can be used:

                         COPY      HELP      MOVE      RENAME    SETUP
                         DATE      LABL      PATH      RMDIR     TIME
                         ERASE     MKDIR     PRINT     SEARCH    TYPE

               These Command Bar commands are not available when ShortCut is
               popped up.

                         COMMND    EDIT      RUN
                         DCOPY     FORMAT    User Commands

          Changing the Pop Up Keys

               When you use ShortCut with some other RAM resident program,
               you may want to change the keys ShortCut uses to pop up to
               Ctrl-Left Shift.  This will avoid problems with SuperKey and
               may help with other programs also.

               To change the Pop Up keys, move to the SETUP command on the
               second Command Bar.  Press <Enter>.  Select option 6 on the
               Setup Main Menu.  Select option 8, Using Ctrl-Left Shift to
               pop up ShortCut on the Miscellaneous Menu, and type a Y. 
               Press <Enter>.  Now Alt-Left Shift will no longer pop up
               ShortCut but Ctrl-Left Shift will.



                                                              REFER.DOC - 41





          Print *                                                         F6
          __________________________________________________________________

          The PRINT command is used to send one or more files to your
          printer.  The file must be in ASCII format or your printed output
          will not be legible if it prints at all.  

          Using PRINT

               Mark the file that you want printed in the Directory Window. 
               Make sure your printer is all ready to go.  Press <F6> to
               move to the PRINT command box on the Command Bar and hit the
               <Enter> key.

          Printing Multiple Files

               You may mark more than one file when you use the PRINT
               command.  As soon as one file is printed, ShortCut will send
               another marked file to your printer until all marked files
               are printed.  

          Printing Options

               ShortCut is preset to make your printer move to the top of a
               new page after 60 lines of text have been printed.  Also your
               printer will move to the top of a new page whenever a file is
               finished printing.

               You can change these settings and send other printer codes to
               your printer using the SETUP command.  See Printer Setup in
               SETUP.DOC for detailed information about these options.  Here
               is a list of what is available to you when you use the PRINT
               command.

               Leading Printer Code - the code(s) sent to your printer
                    whenever you use the PRINT command.

               Trailing Printer Code - the code(s) sent to your printer
                    after a file has finished printing using the PRINT
                    command.

               Page Size - the number of printed lines on a page.

               Expand Tabs - determines if Tabs in your file will or will
                    not be expanded with spaces.

               Tab Size - sets the number of spaces your printer will move
                    when it encounters a Tab in your file if Expand Tabs is
                    on.






                                                              REFER.DOC - 42





          Printer Setup *                                        Shift-F7, 2
          __________________________________________________________________

          You can use the SETUP command to specify how your output will look
          when you use the PRINT command.

          Setting Up Your Printer

               Press <Shift-F7> to move to the SETUP command box on the
               second Command Bar.  Hit the <Enter> key.  Choose option 2 of
               the Main Setup Menu which will display the Printer Setup
               Menu. 

               These options are available to you:

                    Leading printer code
                    Trailing printer code
                    Page size
                    Expand tabs
                    Tab size
                    Send leading printer code now
                    Send trailing printer code now

               For a complete explanation of each of these options see
               Printer Setup in SETUP.DOC.






























                                                              REFER.DOC - 43





          Refresh Directory *                                 Shift-F7, 6, 4
          __________________________________________________________________

          This is an option of the SETUP command that determines if ShortCut
          will or will not refresh the listing of filenames and subdirec-
          tories in the Directory Window and update the system statistics
          when the ShortCut screen reappears after a DOS command.

          Setting Refresh Directory

               Press <Shift-F7> to move to the SETUP command on the second
               Command Bar.  Select option 6, miscellaneous, from the Main
               Setup Menu.  Choose 4 from the Miscellaneous menu.  Enter Y
               for Yes to turn it on or N for No to turn it off.

               When Refresh Directory is off, you will not need to wait
               while ShortCut reads a fresh copy of the directory on your
               disk.  However, if the command you just executed or the
               program you just ran altered files on your disk, the informa-
               tion on the ShortCut screen will not be correct until you
               move the screen arrow to the Current Displayed Directory and
               press the Space Bar.

               If Refresh Directory is turned on, the ShortCut screen will
               be updated every time ShortCut returns from the DOS screen. 
               This is the original setting.





























                                                              REFER.DOC - 44





          Rename *                                                        F9
          __________________________________________________________________

          The RENAME command is used to rename a file on your disk.

          Using RENAME

               Mark the file you wish to rename in the Directory Window. 
               Press <F9> to move to the RENAME command box on the Command
               Bar and hit <Enter>.

               ShortCut will display the marked filename and ask you to
               enter a new name for the file.  

               You may use wildcards in your new name.  For example, if you
               want to rename BOY.TXT to GIRL.TXT, you could enter GIRL.* at
               the ShortCut prompt.  Do not include a drive specifier in
               your new filename!  

          Renaming Multiple Files

               If you have marked more than one file in the Directory
               Window, ShortCut will rename each marked file one after
               another pausing for you to enter the new filename.































                                                              REFER.DOC - 45





          Rewrite the Screen *                                    Ctrl-Break
          __________________________________________________________________

          If the ShortCut screen does not look right, rewriting the screen
          will usually fix things up.

          Using Rewrite the Screen

               Press <Ctrl-Break>.  This will essentially restart ShortCut. 
               Your Display Drive may change back to the drive you used to
               start up ShortCut, but no harm will be done.












































                                                              REFER.DOC - 46





          Rmdir *                                                   Shift-F8
          __________________________________________________________________

          The RMDIR command is used to remove or delete a directory from
          your disk.

          Using RMDIR

               Before you can remove a directory, all the files and sub-
               directories in that directory must be erased or removed.  You
               can not remove the Current Displayed Directory or any direc-
               tory that is part of its path.  In other words, the subdirec-
               tory you want to delete must be listed after the filenames in
               the Current Displayed Directory.  

               Point the screen arrow at the directory you wish to remove in
               the Directory Window.  You should not attempt to mark it
               because pressing the Space Bar when the screen arrow points
               at a directory makes it the Current Displayed Directory.  

               Press <Shift-F8> to move to the RMDIR command box on the
               second Command Bar.  Hit the <Enter> key.

               ShortCut will remove the directory and update the Directory
               Window.






























                                                              REFER.DOC - 47





          Run                                                             F2
          __________________________________________________________________

          The RUN command is used to execute a program file.

          Using RUN

               Point the screen arrow at the program file you wish to
               execute.  It is not necessary to mark this file, although no
               harm is done if you do.  Press <F2> to move to the RUN
               command box and hit <Enter>.

               The ShortCut screen will disappear and you will see the
               command ShortCut sends to DOS on your monitor before the
               program is run.  When your program is finished, the ShortCut
               screen will reappear automatically unless the PAUSE mode is
               on.  In this case, you will be prompted to press any key to
               return to the ShortCut screen.  

          Executable Files

               Not every file on your disk is executable, of course.  The
               RUN command will work only on files having a filename exten-
               sion of .COM, .EXE, .BAT, or BAS.  If the file has a dif-
               ferent extension, ShortCut will display a message on the
               message line telling you that the file cannot be run.

          BASIC Programs

               If the program you wish to run is a BASIC program (the
               filename has a .BAS extension), ShortCut will load BASICA.COM
               and then pass the program filename to BASICA.  Your program
               will begin running without any further action from you.  For
               this to occur, BASICA.COM must be in your default directory
               of the default drive or it must be in a directory specified
               by the path.

               If your computer system uses a different BASIC, you will want
               to use the SETUP command so that the BASIC your computer runs
               will be loaded instead.

               Whenever you are running a BASIC program and you want to
               return to ShortCut, use the BASIC "system" command.












                                                              REFER.DOC - 48





          Save Configuration *                                         Alt-S
          __________________________________________________________________

          The Save Configuration command is used to save settings on your
          disk that determine how ShortCut appears and operates.  

          Using Save Configuration

               Press <Alt-S> to save your current configuration any time the
               ShortCut screen is displayed.  

          What is Saved?

               Any settings that you can change with the SETUP command are
               saved with Save Configuration.

               In addition, the following parameters are saved:

                    Which piece of information to display about a file
                    (DATE, TIME, or SIZE)

                    How to sort the displayed files (TIME, SIZE, EXT, NAME,
                    UNSORTED, As, Ds)

                    Pause - on or off

                    Chime - on or off

               These parameters are saved according to how you have the
               ShortCut screen set up at the time you give the Save Con-
               figuration command.  For example, if Chime is turned on when
               you press <Alt-S>, then the next time you start up ShortCut,
               Chime will be on.

               This information is also saved whenever you answer Y for Yes
               when you exit the Setup Main Menu and ShortCut asks you if
               you want to save your configuration.

          Where is Your Configuration Saved? 

               When you use Save Configuration, ShortCut searches for the
               file SHORTCUT.DAT in your default directory on the default
               drive and along your established DOS path and updates it.  If
               it does not find this file, it creates a new SHORTCUT.DAT in
               your default directory of the default drive.










                                                              REFER.DOC - 49





          Screen Arrow *                                          Arrow keys
          __________________________________________________________________

          The screen arrow is the small triangular arrow on the ShortCut
          screen.   It is used to point at filenames and directories in the
          Directory Window and to move to other areas of the ShortCut screen
          so that you can use ShortCut's features.

          Moving the Screen Arrow in the Directory Window  

               You must use the screen arrow to select files for ShortCut to
               perform file operations on.  Do this by moving the screen
               arrow so that it points at the desired filename in the
               Directory Window.

               The following keys will move the screen arrow about in the
               Directory Window.

               Down Arrow - Moves the screen arrow down one line.  When the
                    arrow is at the bottom of the window and more entries
                    exist, pressing the down arrow key will scroll the
                    entries up one at a time until the last entry is reach-
                    ed.

               Up Arrow - Moves the screen arrow up one line.  When the
                    arrow is at the top of the window and more entries are
                    above it, pressing the up arrow key will scroll the
                    entries down one at a time until the root directory
                    entry is reached.

               Scroll Lock - Scroll Lock affects how the up and down arrow
                    keys work.  With Scroll Lock engaged, the screen arrow
                    will remain stationary while the entry names will scroll
                    around it.  You will hear a beep when ShortCut cannot
                    scroll up or down any more.

               Home - Moves the screen arrow to the top entry in the Direc-
                    tory Window.

               End - Moves the screen arrow to the bottom entry in the
                    Directory Window.

               Ctrl-Home - Moves the screen arrow to the first entry (the
                    root directory) and positions that entry at the top of
                    the Directory Window.

               Ctrl-End - Moves the screen arrow to the last entry and
                    positions that entry at the bottom of the Directory
                    Window.

               PgDn - Displays the next 16 entries in the Directory Window. 
                    The screen arrow will not move below the last entry so a
                    partial PgDn will occur if there are less than 16
                    entries below the displayed files.

                                                              REFER.DOC - 50





               PgUp - Displays the previous 16 entries in the Directory
                    Window.  The screen arrow will not move above the root
                    directory so a partial PgUp will occur if there are less
                    than 16 entries above the displayed files.

               If you know the name of the file, you can move the screen
               arrow to it quickly with the Locate File command.  Press
               <Alt-L>.  Type the first letter of the filename.  The screen
               arrow moves to the first file beginning with that letter. 
               Continue typing letters and the screen arrow will move to the
               first filename with the displayed letters.  You need type
               only as many letters as necessary to point the screen arrow
               at the correct file.  Press <Enter>, <Esc>, or the Up or Down
               Arrow to stop Locate or press the <Space Bar> to stop it and
               mark the filename.  See Locate File for more information.
           
          Moving the Screen Arrow to Other Areas of the Screen

               You must move the screen arrow to other areas of the ShortCut
               screen before you can use certain features.  For example, you
               must move the screen arrow to the Sort On box before you can
               sort the filenames in the Directory Window.

               Use the right arrow key to move the screen arrow out of the
               Directory Window.  The screen arrow can move to the addition-
               al file information box (DATE, TIME, or SIZE), the Display
               Drive box, the Default Drive box, and the Sort On box as well
               as the Directory Window.  Use the right, left, up, and down
               arrow keys to move to these areas.

               <Ctrl-Right Arrow> will move the screen arrow from the
               Directory Window to the Sort On box directly.

          -----------------------------------------------------------------
          If you find that you cannot move the screen arrow at all, you are
          in NumLock mode.  Press the <NumLock> key on your keyboard.  Now
          you should be able to move the screen arrow. 
          -----------------------------------------------------------------

















                                                              REFER.DOC - 51





          Screen Blank *                                      Shift-F7, 6, 2
          __________________________________________________________________

          When on, Screen Blank will make your screen go blank when you have
          not pressed a key or there is no activity on your screen for a
          specified period of time.  This feature is designed to save your
          monitor's screen from "burn in" damage.

          When the same image remains on your monitor's screen for long
          periods of time, the screen's phosphor becomes "worn".  After a
          while, you may see faint images on your screen where characters
          were displayed, even if your monitor is turned off.  This is "burn
          in".  Screen Blank can help prevent this.

          Using Screen Blank

               If Screen Blank is turned on, your screen will be blanked
               automatically.  Press any key to bring your screen back to
               life.  We suggest you use the <Alt> key.  That way, you won't
               do something with the program you did not intend to do.  

               Some programs are continually writing to the screen, even if
               they appear not to be.  Because there is screen activity, the
               screen will never be blanked.  

               If you have such a program, you might try this.  Whenever you
               know you are going to be away from your computer for a while,
               pop up ShortCut.  Even though ShortCut's screen is continual-
               ly being rewritten, we have programmed its screen to be
               blanked according to the time interval you specified.  Then
               when you return, press any key to display ShortCut's screen
               and "unpop" back to your program.

          Setting Screen Blank

               Initially Screen Blank is turned off.  To change this, press
               <Shift-F7> to move to the SETUP command box on the second
               Command Bar.  Hit <Enter>.  Choose option 6 on the Setup Main
               Menu and option 2 on the Miscellaneous Menu.  To turn Screen
               Blank on, enter Y for Yes.  To turn it off, enter N for No.

               The time interval that must pass after a key is pressed and
               before the screen is blanked is set with the next option on
               the same menu.  Choose option 3, time in minutes before
               blanking screen.  Enter a  number between 1 - 30 and hit
               <Enter>.  ShortCut is preset for 5 minutes.









                                                              REFER.DOC - 52





          Search *                                                  Shift-F9
          __________________________________________________________________

          The SEARCH command can be used to find any file on your disk even
          if you do not remember the entire filename.

          Using SEARCH

               Press <Shift-F9> to move to the SEARCH command box on the
               second Command Bar.  Hit the <Enter> key.  At ShortCut's
               prompt, type in the name of the file you are looking for. 
               You may use wildcard characters if you are not sure of the
               correct name.  Press <Enter>.

               ShortCut begins searching all directories on your disk for a
               file that matches the filename you specified.  When it finds
               a match, you are asked if this is the file you want.  You may
               respond with one of three options: Y, N, or V.

               If you type Y for Yes, ShortCut will make the directory the
               file is in the Current Displayed Directory.  It will also
               mark the file and put it at the top of the Directory Window.

               Type N for No and ShortCut will continue searching for
               another match. 

               A V response for View will display the contents of the file
               on your screen, just as it is with the TYPE command.  This
               may help you decide if this is the file you want.  Once the
               ShortCut screen reappears, you can then type Y to "take it"
               or N to continue the search. 

               If there is no match before ShortCut finishes searching your
               entire disk, the message line will tell you this and the
               search ends. 

               However, if you are searching the disk in drive A and there
               is no match, you will be instructed to insert another dis-
               kette.  Then you can continue the search, if you wish.  This
               is useful if you can't remember which floppy diskette you
               used to store the file.  

               You can stop the search anytime by pressing <Esc>.












                                                              REFER.DOC - 53





          Setup *                                                   Shift-F7
          __________________________________________________________________

          The SETUP command is used to change the way ShortCut appears and
          operates to suit your own tastes.

          Using SETUP

               Press <Shift-F7> to move to the SETUP command box on the
               second Command Bar and hit the <Enter> key.

               You will see the Setup Main Menu appear on your screen
               listing five options:

                         1    Editor Setup

                         2    Printer Setup

                         3    Third Command Bar (Ctrl)

                         4    Fourth Command Bar (Alt)

                         5    Screen Display Setup

                         6    Miscellaneous

               At the bottom of the screen you will see a message that
               prompts you to choose an option by typing a number and
               hitting the <Enter> key.  Each selection will display another
               menu that will allow you to change ShortCut's settings.

          Editor Setup

               This option allows you to designate a text editor or word
               processor to use with the EDIT command.  It also lets you
               specify a filename to edit if no file is marked in the
               Directory Window.  ShortCut is preset to use EDLIN as the
               editor and SCRATCH.PAD as the filename.

          Printer Setup

               This option allows you to specify how you want your files
               printed when you use the PRINT command.

          User Commands

               These options permit you to put your own commands on ShortCu-
               t's third and fourth Command Bars.

          Screen Colors

               This option lets you specify the colors of ShortCut's screen
               for both multi-color and single-color monitors.


                                                              REFER.DOC - 54





          Miscellaneous

               The final option displays a menu that lets you change several
               miscellaneous ShortCut settings.

               BASIC to be Used - the BASIC interpreter or compiler used to
               run BASIC programs.  The initial setting is BASICA.

               Screen Blank - turns ShortCut's screen saving feature on or
               off.  The initial setting is N for No.

               Minutes before Screen is Blanked - the time interval before
               your screen is blanked if Screen Blank is active.  ShortCut
               is preset to 5 minutes.

               Refresh Directory on Return from DOS - determines if ShortCut
               should update its Directory Window and system statistics when
               it flips back to its own screen from the DOS screen.  The
               initial setting is Y for Yes.

               Confirm before Erasing Files - turns the seeking of your
               confirmation before erasing files on and off.  ShortCut's
               initial setting is Y for Yes.

               Low Disk Space Warning - the number of bytes still unused on
               your disk when ShortCut warns you about low disk space on its
               screen.  ShortCut is preset to 10,240 bytes.

               Expand Keyboard Buffer - when on, the keyboard buffer is
               expanded to 128 characters.  Initially, this option is turned
               off.

          See SETUP.DOC for in-depth information on each of these features
          and how to change the initial settings.

          Saving Your Changes

               When you exit the Setup Main Menu, ShortCut asks you if you
               want to save your changes.  If you respond with Y for Yes,
               your changes will be saved on your disk.  The next time you
               start up ShortCut, your changes will still be in effect.  If
               you answer with N for No, your changes will remain active
               until you exit ShortCut or reset or turn off your computer,
               but they will not be saved on your disk.

               You may also save your changes any time the ShortCut screen
               is displayed by using the Save Configuration command (Alt-S).








                                                              REFER.DOC - 55





          Sorting Files in Directory Window *
          _________________________________________________________________

          Sorting the filenames in the Directory Window will make it easier
          to locate a file.

          How to Sort the Filenames

               Move the Screen Arrow to the Sort On box.  Press the first
               letter of one of the following options:

               Name sorts the filenames alphabetically.

               Ext  sorts the filenames alphabetically by their extensions
                    and then by their filenames.

               Size sorts the filenames by the number of bytes contained in
                    each file.  Sorting by Size also changes the additional
                    file information (Size, Date or Time) to Size.

               Time sorts the filenames by the date and time the file was
                    created or updated.  The files are first sorted by date
                    and then by time.  Sorting by Time also changes the
                    additional file information in the Directory Window
                    (Size, Date, or Time) to either Date or Time.  Press T a
                    second time while in the Sort On box to display the
                    other information (Date or Time).

               Unsorted displays the filenames in the order they are placed
               on your   disk.

               In addition, these sorts can be performed in ascending or
               descending order.  Press A for ascending (As) or D for
               descending (Ds).

               As   sorts filenames from the least to the greatest.  Name
                    sorts will be in alphabetical order, Ext sorts will be
                    in alphabetical order by extension, Size sorts will
                    display the smallest file first, and Time sorts will
                    list the oldest file first.  Unsorted filenames will not
                    be affected.

               Ds   sorts filenames from the greatest to the least.  Name
                    sorts will be in reverse alphabetical order, Ext sorts
                    will be in reverse alphabetical order by extension, Size
                    sorts will display the biggest file first, and Time
                    sorts will list the newest file first.  Unsorted file-
                    names will not be affected.







                                                              REFER.DOC - 56





          Time *                                                    Shift-F5
          __________________________________________________________________

          The TIME command is used to change the system time.

          Using TIME

               Press <Shift-F5> to move to the TIME command box on the
               second Command Bar.  Hit <Enter>.

               ShortCut will ask you to enter a new time.  Use this format:

                                   hh:mm:ss

               It is not necessary to use colons to separate the hours,
               minutes, and seconds.  You can use any character you like. 
               For example, you could use hyphens to separate the hours,
               minutes, and seconds.  

               You must use military time which adds 12 to any hour after
               noon.  You don't have to type in the minutes and/or seconds. 
               In this case, the minutes and/or seconds will be zero.  

               When you hit <Enter>, ShortCut will display the time you
               entered on its screen and will continue to update it every
               second.

          System Time

               The system time is the time your computer thinks is correct. 
               If you entered a time when you booted up your computer using
               DOS, this is the system time.  If you have a "clock" in your
               computer system, the system time will be determined by this
               clock.  If you don't have a clock or you did not enter a time
               when DOS requested it, the system time will be in the wee
               hours of the morning of January 1, 1980.  The Time command
               can change the system time in all cases.


















                                                              REFER.DOC - 57





          Tree *                                                       Alt-T
          __________________________________________________________________

          The Tree command displays the directory structure of your disk. 
          It also provides an easy way to change directories.

          Using Tree

               Press <Alt-T> to display a tree directory of your disk.  Your
               Current Displayed Directory will be highlighted.  Now you can
               return to the regular ShortCut screen with <Enter>, or you
               can use the tree to change directories.  

               To change to a new directory, move the highlighting to the
               desired directory with the Up or Down arrow keys.  You can
               also press <Home> to move to the root directory, or <End> to
               go to the bottom directory.  Press <Enter> and ShortCut will
               make your selection the Current Displayed Directory.

               If you change the Display Drive and later press <Alt-T> to
               see your tree, you will see the directory structure of your
               old Display Drive disk.  Press <Alt-T> again while the tree
               is shown and ShortCut will read the new Display Drive disk.

               Each time you modify the directory structure of your disk
               with MKDIR or RMDIR, ShortCut will automatically scan your
               disk the next time you call up the tree.

          The Tree Screen

               In the top left corner of the tree screen you will see the
               letter of the Display Drive followed by \.  For example, if
               your Display Drive is C, you will see C:\.  This indicates
               the root directory of drive C.

               The line that descends from the drive letter leads to all
               subdirectories that are in the root directory.  Likewise, a
               line descending from one of these subdirectories leads to all
               the subdirectories it contains, and so on.

               At the top of the tree screen is the full path of the direc-
               tory the highlighting is resting on.  This will change when
               you move to other directories with the up and down arrow
               keys.











                                                              REFER.DOC - 58





          Type *                                                          F5
          __________________________________________________________________

          The TYPE command will display the contents of a file on your
          screen.  The file must be in ASCII format or you will not be to
          read it.

          Using TYPE

               Mark the file you wish to view in the Directory Window. 
               Press <F5> to move to the TYPE command box on the Command
               Bar.  Hit <Enter>.

               The contents of your marked file is "typed" very rapidly on
               your screen.  If you want the display to pause so that you
               can read it, press <Ctrl-Num Lock>.  Your screen display will
               stop scrolling.  When you are ready, press any key to con-
               tinue.

               If you are tired of looking at the what is being written on
               your screen, press <Ctrl-Break> and the display will be
               ended.

          Typing Multiple Files

               If you have marked more than one file in the Directory
               Window, ShortCut will immediately start displaying the next
               file as soon as the first is completed unless Pause is on. 
               In this case, ShortCut will prompt you to press any key
               before the next file is displayed.

          Viewing a File with SEARCH

               You can also view the contents of a file while using the
               SEARCH command.  See SEARCH for more information.




















                                                              REFER.DOC - 59





          Verify *                                                     Alt-V
          __________________________________________________________________

          Verify is used to turn on and off the verification of files after
          they are copied.

          When Verify is on, DOS will make sure that the data written on
          your disk when you copy a file are readable by your computer.  The
          Verify command toggles this verification on or off.

          Using Verify

               Press <Alt-V> to turn Verify on or off.  The word VERIFY will
               be displayed in highlighted, capital letters in a box beneath
               the Memory Status box when Verify is active.








































                                                              REFER.DOC - 60

```
{% endraw %}

## SETUP.DOC

{% raw %}
```






                            SETTING UP SHORTCUT YOUR WAY

          ShortCut recognizes that you are an individual and you do things
          in ways that are unlike any one else.  We don't want to cramp your
          style, so we allow you to customize ShortCut to suit your own
          personal tastes.

          In this chapter you will learn about ShortCut's SETUP command. 
          SETUP permits you to tell ShortCut which text editor or word
          processor you want to use for ShortCut's EDIT command.  It lets
          you determine how you want your ASCII files printed with Short-
          Cut's PRINT command.  SETUP allows you to create your own commands
          for the third and fourth Command Bars.  It permits you to color
          ShortCut any way you desire if you have a color system, or it
          allows you to decide how you want to use highlighting or reverse
          video for monochrome systems.  Finally, SETUP lets you change
          miscellaneous parameters that affect the way ShortCut behaves.

          Using the Setup Command  

               The SETUP command is on the second Command Bar.  Press
               <Shift-F7> to reach the SETUP command box.  Press <Enter>.

               You will see the Setup Main Menu appear on your screen
               listing six options:

                         1    Editor setup
                         2    Printer setup
                         3    Third Command Bar (Ctrl)
                         4    Fourth Command Bar (Alt)
                         5    Screen Display Setup
                         6    Miscellaneous

               At the bottom of the screen you will see a message that
               prompts you to choose an option by typing a number or to exit
               the Setup Main Menu by striking <Enter>.

          Setting Up the Edit Command 

               The first option lets you tell ShortCut what text editor or
               word processor to use whenever you give the EDIT command. 
               Type 1 and <Enter> to select the first option.

               Another menu appears with only two options.  The first time
               you use ShortCut, the program uses the DOS line editor, EDLIN
               to edit files with ShortCut's EDIT command.  You will probab-
               ly want to change this to a more flexible editor or word
               processor.  If you do, type 1 and hit <Enter>.  

               ShortCut will ask you to enter a new value for #1.  You
               should type the command you would normally use for calling up
               your editor or word processor.  For example, you would type
               WP for WordPerfect, ED for PC-Write, or WS for WordStar. 
               Although you may precede the editor's name with a drive

                                                               SETUP.DOC - 1





               specifier, don't include a subdirectory path.  For example,
               if A is your current drive and you want to use WordPerfect
               which will always be on drive B, enter this command in
               response to ShortCut's prompt:

                                        B:WP

               After you hit the <Enter> key, you will see your command
               appear in its proper place on your screen.

               When you use the EDIT command on ShortCut's first Command Bar
               and you have not marked any files to edit in the Directory
               Window, ShortCut will edit a default filename, SCRATCH.PAD. 
               You can change this name if you wish.  

               To change the name of the default edit file, choose option
               2.  You can enter any file name you want in this form:

                         [drive:][path]filename[.ext]

               The information within the brackets is optional.  The entire
               name must not exceed 40 characters.

               If you do not want to edit any file when you have not marked
               any files in the Directory Window, you must enter a minus
               sign (-).  Use the minus sign anytime you want to erase an
               option value without replacing it with another.

               If you select an option and then decide not to make any
               changes, press <Enter> and no changes will be made.

               In order for ShortCut to give a filename to your editor,
               either because you have marked a file in the Directory Window
               or because you have a default edit file specified, your
               editor must be capable of accepting the filename as a passed
               parameter.  Nearly all word processors or text editors will
               allow this.  Consult your editor manual if are unsure.

               When you are through making changes to the Edit Menu, you can
               return to the Setup Main Menu by pressing the Space Bar or
               you can exit SETUP altogether by hitting <Enter>.

          Saving Your Setup Changes 

               Any time you exit SETUP you are asked if you want to save
               your present configuration which will include the changes you
               just made.  If you type N for No, your changes will remain in
               effect until you exit ShortCut, but they will not be saved on
               your disk.  If you choose Y for Yes, ShortCut will save the
               changes you made in its SHORTCUT.DAT file.  If ShortCut
               cannot find SHORTCUT.DAT in the default directory of the
               default drive or along the DOS path, it will create a new
               SHORTCUT.DAT file in the default directory.


                                                               SETUP.DOC - 2





          Trying Out Edit 

               If you have used SETUP to select an editor for use with the
               EDIT command and you have exited SETUP, you can now try using
               EDIT.

               Press <F4> to move to the EDIT command box.  If there is a
               particular file you want to edit, mark it in the Directory
               Window before you hit the <Enter> key.  This marked filename
               will be passed to your editor.  After you press <Enter>, your
               editor will be started up and you will be editing the file
               that you marked.  If you did not mark a file, ShortCut will
               pass the default edit filename you chose with the SETUP
               command to your editor.

          Printer Setup 

               If you return to the Setup Main Menu you will see the second
               option is Printer Setup.  You can use ShortCut to tell your
               printer how you want your files printed with ShortCut's PRINT
               command.  The options available are listed below.

               Leading printer code -  This code is sent to your printer
               whenever you use the PRINT command.  No code is entered here
               until you put one in.  You can enter a code to control how
               your printer will print anything you send to it.  For ex-
               ample, you could specify a leading printer code that would
               change the print font to 12 characters per inch, or possibly
               to have the file printed in correspondence quality print. 
               The options available will depend on your printer.  Consult
               your printer manual for the correct printer codes to use. 
               The codes you enter must be no more than 40 characters in
               length.

               To enter decimal printer codes less than 32 or greater than
               127, you must use the <Alt> key and the numeric key pad. 
               Press the <Alt> key and keep it depressed while you enter the
               number you want on the numeric key pad.  When you release the
               <Alt> key, you will see that you have entered a character you
               will not find on your keyboard.  You may enter one or a
               series of printer codes before you press the <Enter> key. 

               If you don't want to send any leading printer code to your
               printer, remember to enter a minus sign (-), not a blank
               space.

               Trailing printer code - The trailing printer code is a code
               sent to the printer after a file has been printed.  The
               default setting is a page-feed which is a character that
               looks like the female symbol.  You may change this code in
               the same manner as you change the leading printer code. 
               Remember, if you don't want a trailing code, enter a minus
               sign (-).  Also, the codes you enter must be no more than 40
               characters in length.

                                                               SETUP.DOC - 3





               Page size - This is the number of printed lines on a page. 
               The default setting is 60 which means that 60 lines of text
               will be printed before your printer skips to a new page.  A
               page is usually 66 lines long, so printing 60 lines of text
               will allow 3 empty lines on both the top and bottom of the
               page.  You may change the number of lines printed to any
               number you wish.  It is up to you to make sure the paper in
               the printer is properly aligned.  In other words, ShortCut
               does not provide for top or bottom margins.

               Expand tabs - If your printer has preset tab settings, you
               will not need to expand tabs.  If it doesn't, enter Y, and
               the tab characters sent to your printer will be expanded up
               to the number of spaces specified in the next option.  

               Tab size - This sets the maximum number of spaces your
               printer will move when it encounters a tab.  As you can see,
               the default is 8 spaces.  You may enter any number you
               choose.  This option is in effect only if the expand tabs
               option is on.

               Send leading printer code now - If you choose option 6, your
               leading printer code will be sent immediately to your print-
               er.  You do not have to use the PRINT command to put it into
               effect.

               Send trailing printer code now - If you choose option 7, your
               trailing printer code will be sent immediately to your
               printer.  You do not have to use the PRINT command to put it
               into effect.

          User Commands 

               You can put your own commands on ShortCut's third and fourth
               Command Bars.  With this capability you can start up any
               program as easily as hitting the Enter key, just as you would
               give any ShortCut Command Bar command.  Or you can put any
               DOS command on the Command Bar that ShortCut doesn't already
               include.  Also you can enter some specialized commands that
               make ShortCut even faster and easier to use.

               Entering Your Command

               To put your commands on the third Command Bar, select option
               3 from the Setup Main Menu.  The Third Command Bar menu will
               appear. 

               Choose the Ctrl-function key combination you want to define. 
               For example, if you want your command to use the <Ctrl-F2>
               command box, select option 2.  You can see that we have
               already put a couple of commands on the Third Command Bar. 
               You may change them to whatever suits you best, but for right
               now select another key.


                                                               SETUP.DOC - 4





               Type in your command.  Whatever you type is what ShortCut
               sends to DOS.  You can enter a DOS command, for example: 
               chkdsk b:.

               You might want to enter command that executes a program.  For
               example, suppose you want to set up a command box so that you
               can run dBase III.  You would type dbase, the usual command
               to start up the program.  

               In addition to running programs, you can execute a batch file
               to send several commands to DOS at once.  Any command you can
               give to DOS is acceptable.

               ShortCut also allows you to enter some specialized commands. 
               You already know that you can mark one or more filenames in
               the Directory Window and then when you execute a ShortCut
               command, these marked files are acted upon.  You can have
               your third and fourth Command Bar commands do the same thing. 


               For example, suppose you enter dbase as a command.  Often
               when you start up dBase you want to begin running a dBase
               program immediately.  If you mark a dbase program file in the
               Directory Window and give the command, dBase will start up
               and begin running your marked program file.  If you want
               ShortCut to remind you that you must mark a filename before
               giving the command, type ~M after your dBase command so that
               the whole thing will look like this:

                         DBASE ~M

               If you want to have your command repeat for every marked
               file, type ~R.  For example:

                         COPY ~R C:\BUSINESS\BACKUP

               This command would copy every file marked in the Directory
               Window to the C:\BUSINESS\BACKUP subdirectory.

               If sometimes you want to use a marked filename when you use a
               command and sometimes you don't, type ~N for not required or
               you can enter the command alone:

                         EDLIN ~N     or     EDLIN

               If you want ShortCut to change to another directory before
               executing your command, follow this procedure:  type in the
               full path name of the directory followed by the command.  For
               example:

                         C:\SARA\BUSINESS\LOTUS

               ShortCut will change both the Display and Default drives to C


                                                               SETUP.DOC - 5





               and run Lotus 1-2-3.  When you exit 1-2-3, you will see that
               BUSINESS is the Current Displayed Directory.
               Or suppose you want to delete all filenames with a .BAK
               extension in the BUSINESS subdirectory.  Your command would
               look like this:

                    C:\SARA\BUSINESS\DEL *.BAK

               If you just want ShortCut to change the Display and Default
               drives to C without running any program and to make BUSINESS
               the Current Displayed Directory, you would enter this com-
               mand:

                    C:\SARA\BUSINESS\

               Notice that a backslash (\) must follow the last directory in
               the path or ShortCut will think BUSINESS is a command and try
               to run it.

               Of course you can do all these things with ShortCut anyway,
               but running commands like these is the quickest way to do
               these tasks.  If you find yourself repeating the same rou-
               tines over and over again, do yourself a favor and put them
               on the Command Bar and save yourself some time.

               Labeling Your Command                                        

               After you finish typing in your command and hit <Enter>, the
               third Command Bar will appear at the bottom of the screen. 
               You will see the cursor in the command box you are defining,
               ready for you to type in a label.  

               Type in a label that will remind you what the command is. 
               For example, if you are defining a command box to call up
               Lotus 1-2-3, you might enter the label 1-2-3 or maybe Lotus.

               You should capitalize only the first letter of your label as
               the regular ShortCut commands are.  Then when you select your
               command by moving to the command box of your choice on the
               Command Bar, all the letters of your label will appear in
               capital letters.  Notice that not all of the command boxes
               are the same size.  

                    Boxes F1 - F5 are six characters wide.
                    Boxes F6 - F8 are seven characters wide.
                    Boxes F9 - F10 are eight characters wide.

               You might want to choose where you put your commands based on
               the length of your label so that the result is aesthetically
               pleasing.

               That's it!  Just remember to save your changes when you leave
               SETUP.  Now when you press <Ctrl>, you will see your command


                                                               SETUP.DOC - 6





               on the third Command Bar, and if you select it, your command
               will be sent to DOS.

               You can do the same thing with the fourth Command Bar. 
               Select option 4 from the Main Setup Menu and enter your
               command and label as above.  Then when you press <Alt>, your
               command will appear on the fourth Command Bar.

          Screen Display Setup  

               We think ShortCut is beautiful just as it is but you may have
               other preferences.  We chose the colors we did so that
               ShortCut will be legible on all types of monitors.  You can
               color ShortCut to suit your own taste.  Even if don't have a
               color system, you may want to change "colors" to make high-
               lighted areas of the screen more noticeable.

               The Screen Display Setup menu gives you eight options.  If
               you have a color monitor, you will use the first four, and if
               you have a monochrome or single color monitor, you will use
               the final four.  After each option you will see a number. 
               These are the color settings ShortCut uses when it first
               comes to you. 

               There are four parts of the ShortCut screen you can color. 
               They are:

               Normal color - This is the color of the filenames when they
               are not marked.  Other variable information that ShortCut
               must determine is also this color.  

               Marked color - This is the color of files that are marked and
               the color of a directory if it is the Current Displayed
               Directory.  It is also the color of the message line and the
               File Template.

               Frame color - This is the color of ShortCut's frame - all
               those lines and boxes on your screen.  

               Mode color - This is the color of active modes.  It is also
               the color of the date and time.

               Each color option number is the sum of two numbers: a fore-
               ground color number and a background color number.  To get
               the color effect you want, select the foreground color you
               need from the list of foreground colors on your screen and
               add it to the background color you want chosen from the list
               of background colors.  For both foreground and background
               colors, black has a value of 0.

               Let's look at some examples.

               Suppose you want red on a black background.  You would choose


                                                               SETUP.DOC - 7





               12 from the foreground list and 0 from the background list. 
               Add 12 to 0 and your color number = 12.  

               Now you want bright white on a blue background.  Bright white
               is 15 and dark blue is 16.  15 + 16 = 31.

               Suppose you want black letters on a red background.  Add 0
               for black to 64 for red to get 64.

               If you want a foreground color to blink, add 128 to it.  For
               example, 15 + 128 + 16 = 159.  This will produce a bright
               blinking white on a dark blue background.  This might be
               distracting, but if you want to do it, who are we to say you
               can't?

               If you want everything to have the same color background, add
               all your foreground colors to the same background color of
               your choice for each color (normal, marked, frame, and
               mode).  

               Once you enter a color option number, you will see its effect
               immediately on the text of the color option itself.

               Single Color Monitors

               If you use a single color monitor, you will notice that
               "highlighted" areas on the ShortCut screen are actually
               reverse video.  If your monitor does not display the intense
               color so that it is easily distinguished from the normal
               color, you may want to keep things this way.  

               However, if you can adjust the contrast and/or brightness of
               your display so that intense coloring stands out clearly, you
               can choose to use true highlighting.  In this case, set the
               single color monitor normal and frame colors to 7 and the
               marked and mode colors to 15.

               Try it both ways to see what works best for you and your
               system.  You can always go back to reverse video by setting
               the single monitor color marked and mode colors back to 112.

               Viewing Your Colors

               To see the total effect of your color changes, you must leave
               SETUP.  After you have, you will see some of your color
               changes in effect.  To recolor your entire screen, hit
               <Ctrl-Break>.  This will essentially restart ShortCut and
               your color changes will be in effect.

          Miscellaneous 

               This is a catchall category.  Most of these options determine
               how ShortCut will operate.  You decide what suits your needs
               best.

                                                               SETUP.DOC - 8





               BASIC to be used - The first option of the Miscellaneous Menu
               allows you to decide which BASIC interpreter or compiler will
               be used to run programs whose filenames end with the exten-
               sion .BAS.  The default is BASICA which is the advanced
               version of Microsoft BASIC used on the IBM PC.  If your
               computer uses a different BASIC interpreter or compiler, you
               will want to enter that name.  Enter it just as you normally
               would call it up from the DOS prompt.  You may include a
               drive specifier, but do not include a path.

               Screen blank -  This feature is designed to save your moni-
               tor's screen from "burn in".  A Y for Yes means that if you
               have not pressed any key on your keyboard for an amount of
               time specified in the next option, your screen will go
               blank.  To get your screen display back, press any key.  You
               might want to get in the habit of hitting the <Alt> key when
               you return to avoid doing something with the running program
               you did not intend to do.

               Minutes before screen is blanked - This option works with
               Screen Blank.  You can specify the time interval in minutes
               before your screen display is blanked.  Enter any number you
               want between 1 and 30.

               Refresh directory on return from DOS - Usually when the
               ShortCut screen reappears after it flips back from the DOS
               screen, ShortCut will update the display in its Directory
               Window by reading the Current Displayed Directory on your
               disk.  This does not take long, but if you wish to prevent
               ShortCut from doing this to save time, enter N for No.  If
               you do, remember that the Directory Window may not always be
               correct when you return from the DOS screen.  The Directory
               Window will not be updated until the next time ShortCut goes
               out to read your disk.  You can always force ShortCut to do
               this by pressing the space bar when the screen arrow is
               pointing at the Current Displayed Directory.

               Confirm before erasing files - You can decide how cautious
               you want to be when you are erasing files.  Anytime you use
               the ERASE command, ShortCut will ask you if you want to erase
               each marked file before it is actually deleted.  If you do
               not want this extra degree of protection, change the setting
               for this option to N.  ShortCut will then erase all marked
               files without seeking your confirmation.

               Low disk space warning - When the remaining free disk space
               goes below the number of bytes specified here, the number of
               free bytes message on ShortCut's screen will blink on and
               off.  This is to warn you that not much disk space remains
               for you to store data.  You can change this to whatever
               number you like. 

               Expand keyboard buffer - When this is on, your keyboard's
               buffer is expanded from 16 to 128 characters.  This means you

                                                               SETUP.DOC - 9





               can continue typing even if your computer is doing some other
               task without getting a beep indicating your keyboard buffer
               is full.  Set it on with Y or turn it off with N.  Do not use
               this feature with SuperKey or other programs that have their
               own expanded keyboard buffers.

               Use Ctrl-Left Shift to pop up ShortCut - Other RAM resident
               programs may use <Alt-Left Shift>, the usual key combination
               to pop up ShortCut, for a specialized purpose.  SuperKey is
               an example of such a program.  To avoid conflict, set this
               option on with Y and then press <Ctrl-Left Shift> whenever
               you want to pop up ShortCut.  N will reset back to <Alt-Left
               Shift>.

          Saving Your Current Configuration 

               You already know how to save any changes you made using the
               SETUP command by responding with a Y when you leave SETUP and
               ShortCut asks you if you want to save your current configura-
               tion.  Suppose you decided not to save your changes and later
               changed your mind.  You can still save your current con-
               figuration without using the SETUP command.

               Pressing <Alt-S> will save your current configuration any
               time.  ShortCut must be able to find SHORTCUT.DAT in the
               default directory of the default drive or along the es-
               tablished DOS path any time you give this command.

               Whenever you save your current configuration, you not only
               are saving any changes you may have made with the SETUP
               command, but also the way the ShortCut screen is set up at
               the moment.  These things are also saved:

                    Which piece of information to display about a
                         file (DATE, TIME, or SIZE)

                    How the displayed files are sorted (by TIME,
                         SIZE, EXT, NAME, UNSORTED, and in ascend-
                         ing or descending order)

                    PAUSE - on or off

                    CHIME - on or off
```
{% endraw %}

## START.DOC

{% raw %}
```





















                                       ShortCut(tm)





                                   Dana & Linda Jeffries






                                    Mossy Rock Systems
                                      P.O. Box 420876
                                   Sacramento, CA 95841
                                      (916) 334-5542






                (c) Copyright 1987  Mossy Rock Systems  All Rights Reserved






                                  TABLE OF CONTENTS

          START.DOC - INTRODUCTION . . . . . . . . . . . . . . . . . . .   1
               What is ShortCut? . . . . . . . . . . . . . . . . . . . .   1
               ShortCut's Documentation  . . . . . . . . . . . . . . . .   1

          GETTING READY  . . . . . . . . . . . . . . . . . . . . . . . .   2
               Files on Your Diskette  . . . . . . . . . . . . . . . . .   2
               What Files Are Needed to Run ShortCut?  . . . . . . . . .   3
               Where to Start ShortCut . . . . . . . . . . . . . . . . .   4
               Starting Up ShortCut  . . . . . . . . . . . . . . . . . .   4
               Getting Out of ShortCut . . . . . . . . . . . . . . . . .   4

          TUTOR.DOC - GETTING ACQUAINTED . . . . . . . . . . . . . . . .   1
               A Brief Look at the ShortCut Screen . . . . . . . . . . .   1
               Moving Around the ShortCut Screen . . . . . . . . . . . .   2
               Putting ShortCut to Work  . . . . . . . . . . . . . . . .   3
               View a File . . . . . . . . . . . . . . . . . . . . . . .   4
               Switch to DOS Screen  . . . . . . . . . . . . . . . . . .   4
               Help  . . . . . . . . . . . . . . . . . . . . . . . . . .   4
               Information on the ShortCut Screen  . . . . . . . . . . .   5
               Mode Indicators . . . . . . . . . . . . . . . . . . . . .   5
               Disk and Memory Status  . . . . . . . . . . . . . . . . .   6
               Date and Time . . . . . . . . . . . . . . . . . . . . . .   6
               Additional System Information . . . . . . . . . . . . . .   7
               Print a File  . . . . . . . . . . . . . . . . . . . . . .   7
               Make a Directory  . . . . . . . . . . . . . . . . . . . .   8
               Copying Files to a Subdirectory . . . . . . . . . . . . .   8
               Erasing Files . . . . . . . . . . . . . . . . . . . . . .   8
               Moving Files  . . . . . . . . . . . . . . . . . . . . . .   9
               Copying Files to Another Drive  . . . . . . . . . . . . .   9
               A Tree Diagram of Your Disk . . . . . . . . . . . . . . .  10
               Remove a Directory  . . . . . . . . . . . . . . . . . . .  10
               Changing or Creating a Volume Label . . . . . . . . . . .  10
               Shortcuts to Locating Files . . . . . . . . . . . . . . .  11
               Searching for a File  . . . . . . . . . . . . . . . . . .  12
               Wildcard Characters . . . . . . . . . . . . . . . . . . .  13
               Setting Up a File Pattern . . . . . . . . . . . . . . . .  13
               Running a Program . . . . . . . . . . . . . . . . . . . .  14
               Pop Up ShortCut . . . . . . . . . . . . . . . . . . . . .  14
               For Hard Disk Users Only  . . . . . . . . . . . . . . . .  14
               A Summary of ShortCut Commands  . . . . . . . . . . . . .  14

          DWINDOW.DOC - THE DIRECTORY WINDOW . . . . . . . . . . . . . .   1
               What is in the Directory Window?  . . . . . . . . . . . .   1
               Viewing the Rest of Your Files  . . . . . . . . . . . . .   2
               Limit on Directory Window Entries . . . . . . . . . . . .   3
               Additional File Information . . . . . . . . . . . . . . .   3

          SETUP.DOC - SETTING UP SHORTCUT YOUR WAY . . . . . . . . . . .   1
               Using the Setup Command . . . . . . . . . . . . . . . . .   1
               Setting Up the Edit Command . . . . . . . . . . . . . . .   1
               Saving Your Setup Changes . . . . . . . . . . . . . . . .   2
               Trying Out Edit . . . . . . . . . . . . . . . . . . . . .   3

                                          i





               Printer Setup . . . . . . . . . . . . . . . . . . . . . .   3
               User Commands . . . . . . . . . . . . . . . . . . . . . .   4
                    Entering Your Command  . . . . . . . . . . . . . . .   4
                    Labeling Your Command  . . . . . . . . . . . . . . .   6
               Screen Display Setup  . . . . . . . . . . . . . . . . . .   7
               Miscellaneous . . . . . . . . . . . . . . . . . . . . . .   8
                    BASIC to be used . . . . . . . . . . . . . . . . . .   8
                    Screen blank . . . . . . . . . . . . . . . . . . . .   9
                    Refresh directory on return from DOS . . . . . . . .   9
                    Confirm before erasing files . . . . . . . . . . . .   9
                    Low disk space warning . . . . . . . . . . . . . . .   9
                    Expand keyboard buffer . . . . . . . . . . . . . . .   9
               Saving Your Current Configuration . . . . . . . . . . . .  10

          COMMND.DOC - USING THE COMMND COMMAND  . . . . . . . . . . . .   1
               The COMMND Command  . . . . . . . . . . . . . . . . . . .   1
               Editing the Command Line  . . . . . . . . . . . . . . . .   1
               Copy Filename to Command Line . . . . . . . . . . . . . .   3
               Command Buffer  . . . . . . . . . . . . . . . . . . . . .   3
               Entering Multiple Commands with COMMND  . . . . . . . . .   3
               Default Drive . . . . . . . . . . . . . . . . . . . . . .   3

          REFER.DOC - SHORTCUT REFERENCE . . . . . . . . . . . . . . . .   1
               Break . . . . . . . . . . . . . . . . . . . . . . . . . .   2
               Chime . . . . . . . . . . . . . . . . . . . . . . . . . .   3
               Changing Directories  . . . . . . . . . . . . . . . . . .   4
               Colors, Changing Screen . . . . . . . . . . . . . . . . .   5
               Command Bar . . . . . . . . . . . . . . . . . . . . . . .   6
               Command Buffer  . . . . . . . . . . . . . . . . . . . . .   9
               Copy  . . . . . . . . . . . . . . . . . . . . . . . . . .  10
               Date  . . . . . . . . . . . . . . . . . . . . . . . . . .  12
               Dcopy . . . . . . . . . . . . . . . . . . . . . . . . . .  13
               Default Drive . . . . . . . . . . . . . . . . . . . . . .  14
               Disk Status . . . . . . . . . . . . . . . . . . . . . . .  15
               Display Drive . . . . . . . . . . . . . . . . . . . . . .  16
               DOS Screen  . . . . . . . . . . . . . . . . . . . . . . .  17
               DOS Version . . . . . . . . . . . . . . . . . . . . . . .  18
               Edit  . . . . . . . . . . . . . . . . . . . . . . . . . .  19
               Equipment Installed . . . . . . . . . . . . . . . . . . .  20
               Erase . . . . . . . . . . . . . . . . . . . . . . . . . .  21
               Exit ShortCut . . . . . . . . . . . . . . . . . . . . . .  22
               Expanded Keyboard Buffer  . . . . . . . . . . . . . . . .  23
               File and Directory Names  . . . . . . . . . . . . . . . .  24
               File Pattern  . . . . . . . . . . . . . . . . . . . . . .  25
               Format  . . . . . . . . . . . . . . . . . . . . . . . . .  26
               Go to Directory . . . . . . . . . . . . . . . . . . . . .  27
               Help  . . . . . . . . . . . . . . . . . . . . . . . . . .  28
               Labl  . . . . . . . . . . . . . . . . . . . . . . . . . .  29
               Locate File . . . . . . . . . . . . . . . . . . . . . . .  30
               Low Disk Space Warning  . . . . . . . . . . . . . . . . .  31
               Mark Directory  . . . . . . . . . . . . . . . . . . . . .  32
               Marking Files . . . . . . . . . . . . . . . . . . . . . .  33




                                         ii





               Memory Status . . . . . . . . . . . . . . . . . . . . . .  35
               Mkdir . . . . . . . . . . . . . . . . . . . . . . . . . .  36
               Modes . . . . . . . . . . . . . . . . . . . . . . . . . .  37
               Move  . . . . . . . . . . . . . . . . . . . . . . . . . .  38
               Path  . . . . . . . . . . . . . . . . . . . . . . . . . .  39
               Pause . . . . . . . . . . . . . . . . . . . . . . . . . .  40
               Pop Up ShortCut . . . . . . . . . . . . . . . . . . . . .  41
               Print . . . . . . . . . . . . . . . . . . . . . . . . . .  42
               Printer Setup . . . . . . . . . . . . . . . . . . . . . .  43
               Refresh Directory . . . . . . . . . . . . . . . . . . . .  44
               Rename  . . . . . . . . . . . . . . . . . . . . . . . . .  45
               Rmdir . . . . . . . . . . . . . . . . . . . . . . . . . .  47
               Run . . . . . . . . . . . . . . . . . . . . . . . . . . .  48
               Save Configuration  . . . . . . . . . . . . . . . . . . .  49
               Screen Arrow  . . . . . . . . . . . . . . . . . . . . . .  50
               Screen Blank  . . . . . . . . . . . . . . . . . . . . . .  52
               Search  . . . . . . . . . . . . . . . . . . . . . . . . .  53
               Setup . . . . . . . . . . . . . . . . . . . . . . . . . .  54
               Sorting Files in Directory Window . . . . . . . . . . . .  56
               Time  . . . . . . . . . . . . . . . . . . . . . . . . . .  57
               Tree  . . . . . . . . . . . . . . . . . . . . . . . . . .  58
               Type  . . . . . . . . . . . . . . . . . . . . . . . . . .  59
               Verify  . . . . . . . . . . . . . . . . . . . . . . . . .  60

































                                         iii






                                    INTRODUCTION

          What is ShortCut?

               ShortCut is a DOS shell.  Instead of the DOS prompt, you get
               a whole screen full of information about your system.  Short-
               Cut makes using DOS and your computer easy and quick.  This
               is a real boon to the befuddled novice.  

               Even you guys and gals who are DOS experts will appreciate
               that ShortCut nearly eliminates the need to type commands,
               path and filenames.  We figure you are pretty much like us: 
               our fingers don't always land on the right keys.  ShortCut
               gets it right the first time - every time.  

               Suppose you want the DOS prompt anyway?  ShortCut gives it to
               you.  Only now the command line has full line editing capa-
               bilities.  You can even recall your previous commands for
               editing.

               ShortCut is also a RAM resident program.  Suppose you are
               working with your word processor, spreadsheet, or data
               manager.  Suddenly you realize you want to copy files to
               another disk, erase some files, create a new subdirectory, or
               some other common DOS task.  Just pop up ShortCut, do what
               you need to do, and pop back directly to your application
               program.  

               We probably use the pop up feature most to change direc-
               tories.  ShortCut makes it so easy to do this with its Tree
               diagram of your disk.  You only need to "point" at the direc-
               tory to which you wish to change and press the Enter key or
               Space Bar.  

               Many programs today allow you to perform DOS functions. 
               ShortCut provides a standardized way to do these things in
               every program.

               ShortCut is also a simple menu program.  You can put your own
               commands, batch, or program files on one of the Command Bars
               and start up your program or command with one keystroke.

          ShortCut's Documentation

               ShortCut's documentation is lengthy - not because ShortCut is
               hard to learn - but because it has so many features and we
               want to give you complete information so you get the most out
               of the program.  

               We have divided the material into several smaller files.  All
               of them have the extension DOC.   We suggest that you print
               TUTOR.DOC first.  This file and the on-line help system (F1)
               will get you acquainted with ShortCut.  After working through
               this material, you may decide ShortCut is for you.  By

                                                               START.DOC - 1





               sending us your registration fee, we will in return send you
               the latest version of ShortCut along with its typeset manual,
               saving you wear and tear on your printer.

               If you wish to examine more of ShortCut's documentation and
               explore additional features of the program, here is a guide
               to the contents of the remaining DOC files:

                    SETUP.DOC - tells you how to customize ShortCut.

                    DWINDOW.DOC - explains how files and directories are
                         displayed in the Directory Window.

                    COMMND.DOC - explains ShortCut's CMMND (F10) command -  
                         something you power users will not want to miss.

                    REFER.DOC - describes each ShortCut feature in detail. 
                         The features are listed alphabetically one to a
                         page.


               A simple way to send any documentation file to your printer
               is to type this command at the DOS prompt:

                         COPY [FILENAME] PRN

               For example, COPY REFER.DOC PRN.

               The remaining information in this section tells you about the
               ShortCut files, how to start ShortCut up, and how to quit.


                                    GETTING READY

               You should make a copy of the ShortCut files for backup
               purposes and for distributing ShortCut to friends, on bul-
               letin boards, and to local PC user groups.  Please do not
               distribute a version of ShortCut you have customized for
               yourself.

               If you choose to use our tutorial in TUTOR.DOC for getting
               acquainted with ShortCut and you have a hard disk, put
               ShortCut's files in your root directory.  Later we will have
               you put your ShortCut files in a special subdirectory of its
               own.

          Files on Your Diskette

               You will find several files on your disk.  These are as
               follows:





                                                               START.DOC - 2





               SHORTCUT.EXE
                    This is the ShortCut program.  When you start up Short-
                    Cut, it is loaded into your computer's memory and it
                    stays there until you exit from ShortCut or reset or
                    turn off your computer.

               SHORTCUT.HLP
                    This is the file that contains the help screens for
                    ShortCut.  

               SHORTCUT.DAT
                    This file contains all definitions for the options
                    available to you for changing ShortCut.  For example, if
                    you elect to change the colors of the ShortCut screen,
                    when you save your changes they are put in this file. 
                    Then when you start up ShortCut next time, your changes
                    will be effect.  If this file is not on your disk,
                    ShortCut will start up with the initial settings it
                    comes with.  If you save your changes or exit ShortCut
                    when this file is not on your disk, a new SHORTCUT.DAT
                    will be created in the directory you are in. 

               CHATTR.EXE
                    A utility program for changing file attributes.

               AFILE.TXT
               BFILE.TXT
               CFILE.TXT
               DFILE.TXT
                    These are sample files for you to use when you are
                    learning ShortCut in TUTOR.DOC.  They may be erased when
                    you no longer need them.

               COMP.BAT
                    This is a file that needs to be run before you start up
                    ShortCut for the very first time if your system has a
                    single-color monitor and uses a color graphics display
                    adapter.

               COMP.DAT
                    This is a file used by COMP.BAT to correctly set up a
                    system that has a single-color monitor and a color
                    graphics display adapter.

               START.DOC
               TUTOR.DOC
               DWINDOW.DOC
               COMMND.DOC
               REFER.DOC
                    ShortCut's documentation files.





                                                               START.DOC - 3





               README.1ST
                    An introduction to the ShortCut package for old and new
                    users.

          What Files Are Needed to Run ShortCut?

               This depends on you.  You must have SHORTCUT.EXE to start
               ShortCut.  Thereafter, if you do not choose to use the
               on-line help system, or you do not want to save any changes
               you make to ShortCut, it really is not necessary to keep any
               of the ShortCut files on the disk you are using.

          Where to Start ShortCut 

               If you do not have a DOS path set up, you must be in the
               directory that contains the ShortCut files.  This can be
               either the root directory of your disk or a subdirectory.  If
               you do have a DOS path set up, you may be in any directory as
               long as the ShortCut files are somewhere along the path.  

          Starting Up ShortCut  

               To start ShortCut, type:

                    SHORTCUT 

               Hit the <Enter> key.  The ShortCut screen appears.  (Later
               you may want to change the filename SHORTCUT.EXE to SC.EXE so
               you can start up ShortCut with SC.)

               If you feel a bit overwhelmed by the wealth of information
               you see on your screen, relax.  We don't expect you to
               understand everything you see before you, especially if you
               are new to computers.  If you don't know a parallel port from
               a default drive, that's okay.  TUTOR.DOC will teach you what
               you need to know.

               We have made ShortCut easy to use for beginners but with
               enough features to satisfy the most demanding user.  That is
               why you see so much detail on your screen.  You are not going
               to outgrow ShortCut.

          Getting Out of ShortCut

               When you are through using your computer for a session, there
               is no need to exit ShortCut.  Simply turn off your computer. 
               Or, if you prefer, press <Alt-E> to exit ShortCut and return
               to DOS.

               Now that you know how to start and stop ShortCut, you are
               ready to begin exploring.  The next chapter will acquaint
               with the main features of the program.  Follow along with us
               and you will quickly see how ShortCut can save you time and
               effort.

                                                               START.DOC - 4

```
{% endraw %}

## TUTOR.DOC

{% raw %}
```






                                 GETTING ACQUAINTED

          This chapter introduces you to the main features of ShortCut.  It
          is important that you have ShortCut up and running so that you can
          try out our suggestions.  You will learn most quickly by doing.  

          Many of ShortCut's commands use the alternate key, the shift keys,
          the function keys, and the control key.  They are found on the
          standard IBM PC keyboard in these positions:

               Alt            The gray key to the left of the Space Bar

               Shift          The gray key with an up arrow just above the
                              Alt key or the gray key with an up arrow above
                              the Caps Lock key

               Ctrl           The gray key just to the left of the "A" key

               F1, F2, etc.   The gray function keys at the very left side
                              of the keyboard 

          You will see combinations of keys printed together in this docu-
          mentation. For example, you will see <Alt-M > or <Shift-F3>.  You
          should press the first key and hold it down while you press the
          second key.  Then release them both.

          A Brief Look at the ShortCut Screen 
           
               As you look at the ShortCut screen on your monitor, you will
               see that there are several sections.  Let's begin at the top,
               left-hand side of the screen.  Here you will see a large
               rectangle bordered by double lines.  This is the Directory
               Window.

               In the Directory Window you will see a list of your files in
               the current directory.  If you started ShortCut from drive A,
               you see a list of your ShortCut files.  If you have a hard
               disk and started ShortCut from drive C, will see the ShortCut
               files in your current directory, SHORTCUT.  The current
               directory displayed in the Directory Window will be called
               the Current Displayed Directory from now on.

               The skinny rectangle to the right contains Drive boxes on the
               top, a Sort On box in the middle, and Modes that can be
               toggled on or off at the bottom.

               The next large rectangle shows you the status of your disk
               drive and your computer's memory.  Below this information you
               will see four boxes: pause, verify, break, and a box that
               says either color or monochrome.  These will be explained
               later.
               The fourth rectangle displays the date and time, the file
               pattern, and some additional information about your system.  


                                                               TUTOR.DOC - 1





               The meaning of all these boxes will be described fully; we
               just want you to be able to find them now.

               Right below these four rectangular columns you will see a
               highlighted line of text that says "Press a function key for
               the Command Bar.  Use the cursor keys to move about".  It
               will be colored green if you have a color monitor.  This is
               the message line.  As you do things with ShortCut, the
               message line will change to say different things.  Sometimes
               it will ask you to answer a question, sometimes it will
               display an error message if you have made a mistake, always
               it will give you helpful advice.  Get in the habit of reading
               the message line if you do not know what to do next.  

               At the bottom of the screen is the Command Bar.  Each box
               contains a ShortCut command.  Hold down a <Shift> key and you
               will see a second Command Bar appear with a new set of
               commands.  Release the <Shift> key and the first Command Bar
               reappears.  Now hold down the <Ctrl> key.  This is the third
               Command Bar.  Press and hold down the <Alt> key and the
               fourth Command Bar is displayed.  Later you will learn how to
               put your own commands on the third and fourth Command Bars.

          Moving Around the ShortCut Screen 

               On the left side of the Directory Window you will see a small
               triangular arrow.  This is the screen arrow and you will use
               it point at files and to move around the screen.

               Find the down arrow cursor key on your keyboard.  Press it
               and the screen arrow will move down one file in the Directory
               Window.  Now try the up arrow cursor key.  The screen arrow
               moves up one file.  

               Try pressing the right arrow cursor key from anywhere in the
               Directory Window.  The screen arrow will jump up and over to
               the box that says SIZE in highlighted letters at the top
               right of the Directory Window.  

               If you press the right arrow cursor key again, the screen
               arrow moves to the Display Drive box.   

               Press the down arrow key.  The screen arrow moves down to the
               Default Drive box.  Or press the up arrow key and it moves
               back up to the SIZE box.

               Press the down arrow key again from the Default Drive box and
               the screen arrow moves to the Sort On box.  If you press the
               down arrow key once more, ShortCut will politely beep at you
               informing you that you can't go any further in that direc-
               tion.  
               You can press the up arrow key to go back up to the Default
               Drive again, or you can press the left arrow key to move back
               to the Directory Window.  You can always go back to the

                                                               TUTOR.DOC - 2





               Directory Window with the left arrow key no matter where you
               are.  

               Spend a moment to practice moving the screen arrow among
               these five areas on your screen.  If you are in the Directory
               Window, you can quickly move to the Sort On box with
               <Ctrl-Right Arrow>.

          -----------------------------------------------------------------
          If you find that you cannot move the screen arrow at all, you are
          in NumLock mode.  Press the <NumLock> key on your keyboard.  Now
          you should be able to move the screen arrow. 
          -----------------------------------------------------------------

               Try pressing any function key (F1, F2, etc.).  The screen
               arrow does not move, but one of the commands on the Command
               Bar is highlighted.  You can move along the Command Bar with
               the left and right arrow keys.  Try moving to the COMMND
               command box at the far right.  Then press the right arrow key
               once more.  You are now on the second Command Bar.  In the
               same way you can move to the third and fourth Command Bars
               and then back to the first again.

               A quicker way to move to a specific command on any of the
               Command Bars is to press the function key corresponding to
               that command.  By looking at the Command Bar you can see that
               <F3> is the function key to press for the COPY command. 
               Commands on the second Command Bar are reached with Shift-
               function key combinations, the third Command Bar commands use
               the <Ctrl> key along with the function keys, and those on the
               fourth Command Bar use the <Alt> key.  

               Press <Esc> to leave the Command Bar.  You can still move the
               screen arrow up and down in the Directory Window while you
               are on the Command Bar, but you must press <Esc> to leave the
               Command Bar if you want to move the screen arrow out of the
               Directory Window.

          Putting ShortCut to Work 

               Now that you are a pro zipping around the screen, it's time
               to give ShortCut some orders.  Let's try renaming one of your
               practice files.  Move the screen arrow in the Directory
               Window to the file named AFILE.TXT.  

               Press the <Space Bar>.  The filename is highlighted.  You
               have just "marked" a file and told ShortCut this is the file
               you want to act upon.  You can "unmark" a file by pressing
               the Space Bar again.  The number of bytes in a marked file
               appears highlighted in the Disk Status box.
               Mark AFILE.TXT again, if it is not already, and press <F9>. 
               The Rename command box is highlighted.  The message line
               tells you what to do next - to press <Enter>.  Do it. 


                                                               TUTOR.DOC - 3





               At this point the message line asks you type a new file
               name.  For now, type MYFILE.TXT and press <Enter>.  It does
               not matter if you use capital or lowercase letters.

               The message line tells you ShortCut is busy renaming your
               file and you will see the new file name appear and the old
               name disappear in the Directory Window.  

               If you make a mistake and decide you don't want to give a
               command but you have already hit <Enter> while you are in a
               command box, press <Ctrl-Esc> and the command will be can-
               celled.

               Sometimes you may forget to mark a file before you give a
               command. Your computer will beep and the message line will
               tell you that no files are marked.  After you press any key,
               you can try again.

          View a File 

               Let's see what is in MYFILE.TXT.  Move to the TYPE command
               box on the Command Bar by pressing <F5>.  Move the screen
               arrow to MYFILE.TXT in the Directory Window.  Press the
               <Space Bar> to mark it.  The message line tells you to press
               <Enter> to view the contents of the marked file.  Hit
               <Enter>.

               The ShortCut screen will disappear.  Don't worry, it will
               come back.  You will see the contents of MYFILE.TXT "typed"
               on your screen.  Press <Ctrl-NumLock> to stop the screen
               scrolling if you wish.  Press the <Space Bar> to continue. 
               When the end of the file is reached, you will see a prompt to
               press any key.  Do it and the ShortCut screen will return.

          Switch to DOS Screen

               Suppose you return to ShortCut's screen and later you wish to
               see the DOS screen again.  Press <Alt-D> and the DOS screen
               will reappear.  When you are ready, press any key to switch
               back to ShortCut's screen.

          Help 

               Perhaps you want to switch to the DOS screen, but you can't
               remember what keystrokes to use.  Or you forgot how a Short-
               Cut command works.  ShortCut is ready to help!  Press <F1> to
               move to the HELP command on the Command Bar and hit the
               <Enter> key.  You will see a help screen appear with the
               ShortCut commands and features listed.  For more in depth
               information on any command or feature, press the correspond-
               ing highlighted key or key combination.

               Let's look at the information available for TYPE, the command
               we just used.  With the Help Main Menu displayed, press <F5>,

                                                               TUTOR.DOC - 4





               the command you use to move to the TYPE command box on the
               Command Bar.  You will see information about the TYPE command
               and how to use it.   After you have read the help screen you
               have the option of pressing the <Space Bar> to return to the
               Help Main Menu, or you may press <Esc> to exit the help
               system all together.

               ShortCut gives you another way to seek help.  Simply press
               <Alt-H> and a help screen will be displayed.  Which help
               screen depends on what you were doing at the time you asked
               for assistance.

          Information on the ShortCut Screen 

               ShortCut displays lots of useful information on its screen
               even without help screens.  As you have already seen, you
               always know which directory you are in as it is highlighted
               in the Directory Window.  In addition, the disk drive you are
               using is highlighted in the Display Drive box.  

               The Sort On box tells you how your files are sorted in the
               Directory Window.  Right now they are probably unsorted.  You
               will learn how to sort them yourself a bit later.

               The box that says SIZE on top of the Directory Window is one
               that you practiced moving the screen arrow to.  Move to it
               now.  You can display additional file information by choosing
               among three options:  Size, Date, or Time.  Try pressing D
               for Date, then T for Time, and finally S for Size.  Date
               tells you when the file was created or last updated, Time
               tells you what time of the day the file was created or last
               updated, and Size tells you how many bytes are in the file.

          Mode Indicators 

               Beneath the Sort On box are several mode indicators.  When
               these modes are active, they are highlighted and capital-
               ized.  Press the keyboard key once to turn the mode on and
               press it again to turn the mode off.  The modes are:

               Mode    Key         Use

               Caps    CapsLock    Capitalizes all letters you type.

               Num     NumLock     Activates the numeric keypad on the IBM
                                   PC - useful for entering columns of
                                   numbers.  When NumLock is on, the cursor
                                   control keys will not work.

               Ins     Ins         Insert mode.  Allows characters typed to
                                   be inserted in a line and all text to the
                                   right of the cursor is pushed right.  You
                                   can use insert any time ShortCut asks you
                                   to enter information.

                                                               TUTOR.DOC - 5






               Prn     Ctrl-PrtSc  All keystrokes typed on the command line
                                   and everything displayed on the DOS
                                   screen is sent to the printer.

               Scroll  ScrollLock  Your application programs may or may not
               Lock                use ScrollLock.  ShortCut uses  Scroll-
                                   Lock to freeze the screen arrow in the 
                                   Directory Window so that the up and down
                                   arrow keys will now scroll the filenames
                                   around it.  

          Disk and Memory Status 

               The Disk Status box displays information about the disk you
               are using.  It tells you how many bytes you have available on
               your disk, how many of those bytes you have used to store
               files, and how many bytes are still free for your use.  It
               also informs you how many files are in your directory, how
               many of the files are user files (read/write files), and how
               many are hidden.

               The Memory Status box shows you how much random access memory
               (RAM) in bytes your computer has, and it tells you how much
               of that memory is still available for you to use.

          Date and Time 

               ShortCut displays the date and time in the top, right-hand
               corner of the screen.  This is the date and time your com-
               puter thinks is correct.  You can make changes with the DATE
               and TIME commands located on the second Command Bar.

               Press <Shift-F4> to reach the DATE command box.  Press
               <Enter>.  ShortCut asks you to enter a date.  You may choose
               either of these formats:

                                   mm-dd-yy   or   mm-dd-yyyy 

               You may leave out any leading zeros.

               After you hit <Enter> ShortCut will display the date you
               entered including the proper day of the week.

               <Shift-F5> will give you access to the time of day.  Press
               <Enter> and type in a new time.  The format to use is:

                                   hh:mm:ss 

               It is not necessary to use colons to separate the hours,
               minutes, and seconds.  You can use any character you like. 
               For example, you could use hyphens to separate the hours,
               minutes, and seconds.  


                                                               TUTOR.DOC - 6





               You must use military time which adds 12 to any hour after
               noon.  You don't have to type in the minutes and/or seconds. 
               If you don't, ShortCut will display the minutes and/or
               seconds as zero.  You may omit any leading zeros.

               When you hit <Enter>, ShortCut will display the time you
               entered on its screen and will continue to update it every
               second.

          Additional System Information 

               In the bottom corner of the right-hand side of the screen
               ShortCut shows you some additional information about your
               computer system.  The Equipment Installed box displays how
               many serial ports your computer has, how many parallel ports
               it has, how many disk drives your computer is set up for, and
               whether or not your computer has a game port.  If you don't
               understand what these things mean, don't worry.  You do not
               need to know these things to use ShortCut.

               By the way, if you think the number of disk drives ShortCut
               reports is in error, see Equipment Installed in the REFER.DOC
               for an explanation and how to change it if you wish.

               Beneath this box ShortCut tells you which version of DOS you
               are using.  

               To the immediate left you will see a box labeled either
               MONOCHROME  or COLOR CARD.  If you and your computer are
               using a monochrome display adapter, it will say MONOCHROME. 
               If you are using a graphics card instead, the box will say
               COLOR CARD.

          Print a File 

               Let's get back to bossing ShortCut around.  If you have a
               printer, you can print any ASCII file.  Move the screen arrow
               to MYFILE.TXT and mark it by pressing the <Space Bar>.

               Press <F6> to reach the PRINT command box.  Hit <Enter> and
               ShortCut reminds you to get your printer ready for printing
               if you haven't already.  When you press any key, the contents
               of the marked file will be sent to your printer.

               You can use this method for printing out the other ShortCut
               documentation files.









                                                               TUTOR.DOC - 7





          Make a Directory 

               Let's get organized.  You are going to create a new subdirec-
               tory on your disk and put your practice files in it.  Press
               <F8> to move to the MKDIR command box.  Hit <Enter>.  Type
               PRACTICE as the name of the new subdirectory and press
               <Enter> again.

               ShortCut will create a new subdirectory named PRACTICE. 
               Subdirectories that belong to the current directory displayed
               in the Directory Window are listed after the filenames.  You
               will see the new subdirectory as the last entry in the
               Directory Window.  

               If you have a hard disk, you may have more files and sub-
               directories than the Directory Window will hold.  You can
               press <PgDn> to page through your files to find PRACTICE. 
               You can press <Ctrl-End> to reach the end of your files. 
               Return to the top of your Current Displayed Directory with
               <Ctrl-Home>. 

          Copying Files to a Subdirectory 

               Now mark all of the ShortCut practice files, the ones that
               have a filename extension of TXT.  Point at each file with
               the screen arrow and press the Space Bar.  Each filename is
               highlighted as it is marked.

               Press <F3> to move to the COPY command box.  Press <Enter> to
               begin the copy process.

               Now move the screen arrow to the PRACTICE subdirectory. 
               Press the Space Bar.  You have just changed directories!  Now
               PRACTICE is the Current Displayed Directory.  Following the
               instructions on the message line, hit the <Enter> key.  You
               will see all of the files you marked copied to the new
               subdirectory.

               Before you go on, take a good look at the Directory Window. 
               At the top you will see the root directory of your disk. 
               After that you will see PRACTICE, the name of your Current
               Displayed Directory.  It will be highlighted as the Current
               Displayed Directory is always highlighted.  Later you may
               want to read the DWINDOW.DOC file for a complete explanation
               of how subdirectories are displayed in the Directory Window.

          Erasing Files 

               You now have two copies of the practice files on your disk,
               one in the root directory and one in the PRACTICE subdirec-
               tory.  Let's erase the ones in the root directory.

               To get back to the root directory, move the screen arrow to
               the first entry in the Directory Window.  If you have never

                                                               TUTOR.DOC - 8





               given your disk a volume label, the root directory will be
               called NO LABEL.  Otherwise, it will have a different name,
               but it will always be the first entry in the Directory
               Window.  Press the Space Bar to change directories.  Now the
               root directory will be highlighted.

               Mark all of the practice files (those files with a .TXT
               extension).

               Press <F7> to move to the ERASE command box.  Press <Enter>. 
               ShortCut will erase all of your marked files, pausing before
               each one to seek your confirmation.  

          Moving Files 

               There is a quicker way to move files to a new subdirectory: 
               the MOVE command.  MOVE puts the files in a new subdirectory
               and removes them from the old.  Let's try it out by moving
               the practice files back to your root directory.

               Make PRACTICE the Current Displayed Directory by moving the
               screen arrow to PRACTICE and pressing the Space Bar.  Mark
               all the files.  You can press <Ctrl-Space Bar> and all the
               files in the Current Displayed Directory will be marked at
               once.

               Press <Shift-F3> to reach the MOVE command.  Press <Enter>.

               Change to the root directory once again by pointing at it
               with the screen arrow and pressing the <Space Bar>.  Press
               <Enter> once more.  Your practice files are now back in the
               root directory, and they no longer exist in the PRACTICE
               subdirectory.
           
          Copying Files to Another Drive 

               Often you will want to copy files from one disk drive to
               another.  Before you do that, you need to learn how to
               display the files of other disk drives on your system.  If
               you have a second floppy disk drive, make sure it has a
               diskette in it before we go any further.

               With the screen arrow in the Directory Window, press the
               right arrow key twice.  The screen arrow will move to the
               Display Drive box.  Now press the letter of a drive on your
               system that differs from the one you are currently on.  For
               example, if you are using drive A and you want to see the
               files on drive B, you would press the letter B.  If you are
               on drive C and you want to see A, press the letter A. 
               ShortCut will not let you choose a drive you don't have;
               however, if you select a floppy drive, you must have a
               diskette in that drive or you will receive a DOS error
               message.  


                                                               TUTOR.DOC - 9





               As soon as you press a drive letter, the files of that drive
               will be displayed in the Directory Window.  Switch back to
               the drive from whence you came as this is where you must be
               to start the copy process.

               Mark all of the practice files once more.  Press <F3> and
               then <Enter>.  Move the screen arrow to the Display Drive box
               and select the drive you want to copy the files to.  If you
               want to put the files in a subdirectory on that drive, make
               it the Current Displayed Directory by moving to it and
               pressing the Space Bar.  When the directory you want to copy
               the files to is displayed, press <Enter> and let ShortCut do
               the work.

          A Tree Diagram of Your Disk

               The easiest way to keep track of the directory structure of
               your disk is with ShortCut's Tree command.  Move back to the
               root directory of the disk with the ShortCut files.

               Now press <Alt-T>.  You will see a visual tree of the direc-
               tory structure of your disk.  If you are using a hard disk,
               you may have many directories; if you are using a floppy
               diskette, you will probably see only the root directory and
               the PRACTICE subdirectory.

               You can change directories with the Tree screen.  Press the
               Down arrow key until you reach the PRACTICE subdirectory. 
               Hit <Enter>.  The regular ShortCut screen reappears and
               PRACTICE is now the Current Displayed Directory!

               Use Tree again to go back to the root directory.

          Remove a Directory 

               Now that your PRACTICE subdirectory is empty, you can remove
               it.  Point the screen arrow at the PRACTICE subdirectory.  Do
               not mark it!  If you try, you will make PRACTICE the Current
               Displayed Directory and ShortCut will not let you remove it. 

               With the screen arrow pointing at PRACTICE, press <Shift-F8>
               to move to the RMDIR command and hit <Enter>.  Your subdirec-
               tory is gone.

          Changing or Creating a Volume Label 

               Your disk may or may not have a volume label.  If it doesn't,
               the root directory name will say NO LABEL; otherwise it will
               have another name.  In either case, press <Shift-F2> followed
               by <Enter> to change it.

               ShortCut will ask you for a new name.  Type any name you want
               and hit <Enter>.  You will see the new name appear at the top
               of the Directory Window.  You can change it back if you wish.

                                                              TUTOR.DOC - 10





          Shortcuts to Locating Files

               If you have many files in your Current Displayed Directory,
               it can take a while to find the file you want in the Direc-
               tory Window so that you can point at it with the screen
               arrow.  ShortCut offers a several features to help you out.

               First of all, ShortCut can sort the files for you.  When you
               first start up ShortCut, the files on your disk will appear
               in the Directory Window in the same order that they are
               written on your disk.  You can change this.  Move the screen
               arrow to the Sort On box directly by pressing <Ctrl-Right
               Arrow>.  Press N for Name.  Your files will be sorted al-
               phabetically (in ascending order).

               Try D to sort the filenames in descending order from Z to A. 
               Press A to get them back in ascending order again.  Try S to
               see your files sorted by Size, or T to have them sorted by
               Date and then by Time.  Pressing E will sort them in order by
               the filename extensions so that types of files are grouped
               together.  You can get them back in Unsorted order with U. 
               Put them back in unsorted order for now.

               Just having your files in order will help you find the file
               you want.  But ShortCut doesn't stop here.  The Locate File
               command will move the screen arrow to any filename in the
               Current Displayed Directory very quickly.  

               Press <Alt-L> and type the first letter of the filename you
               want to find.  Suppose you want to move the screen arrow to
               MYFILE.TXT.  The first letter is M, so that is what you
               should type.  As soon as you do, ShortCut will sort your
               files by Name in alphabetical order and will point the screen
               arrow at the first filename beginning with M.  If you have
               more than one file starting with M, you would continue typing
               the next letter and then the next, etc., until the screen
               arrow is pointing at the file you want.  You may erase typed
               letters with the <Backspace> key.  You need type only as many
               letters as necessary to point the screen arrow at the correct
               file.  

               Press <Enter>, <Esc>, or the Up or Down Arrow key to stop
               Locate.  You can also press the <Space Bar> which will stop
               it and also mark the filename in the Directory Window.

               Now move the screen arrow to the Sort On box and sort your
               files by Extension with E.  This will group all your file
               types together.

               Press <Alt-L> again.  This time the filenames will not be
               resorted.  Now you type the first letter of a file extension
               you want to find.  For MYFILE.TXT that would be the letter T. 
               As you continue typing, the screen arrow will zero in on the
               correct extension if it is not there already.  Again end

                                                              TUTOR.DOC - 11





               Locate with <Enter>, <Esc>, Up Arrow, Down Arrow, or <Space
               Bar>.

          Searching for a File 

               Great, you say.  But what if I don't remember what subdirec-
               tory or disk I used to store a file, or maybe I don't remem-
               ber the exact filename?  ShortCut can help with its SEARCH
               command.

               You need to set things up a bit to see how SEARCH works. 
               Starting in the root directory of your disk, make two more
               subdirectories using the Mkdir command.  Name them ASUB and
               BSUB.  

               Using the COPY command, put a copy of each practice file in
               each subdirectory.  You can use the Tree command to change
               directories while you are using COPY.  You will now have
               three copies of each practice file on your disk.  You know
               that each file is identical, but for now, imagine that each
               contains different information.

               Suppose you want to find a file that you know begins with the
               letters MY, but you do not remember the rest of the name and
               you do not know what subdirectory you stored it in.

               Press <Shift-F9> to move to the SEARCH command and press
               <Enter>.  When ShortCut asks you for the filename, type
               MY*.*.  This tells ShortCut to look for a filename beginning
               with MY, but any combination of characters may follow and the
               file may have any combination of characters for an extension.
               When you press <Enter>, ShortCut will search all the direc-
               tories on your disk for a filename that matches that pat-
               tern.  When it finds one, ShortCut asks you if this is the
               file you want.  Type N for No and the search continues until
               the next file is found.  

               Suppose you are not sure this is the file you want.  Press V
               to View the file.  The ShortCut screen disappears and the
               file contents are displayed just as they are with the TYPE
               command.  Press any key to return to the ShortCut screen.

               No, that is not the file you want, so type N again for No and
               the search resumes.  The last file is the one you want so
               this time you respond with Y for Yes.  When you do, ShortCut
               makes the directory the file is in the Current Displayed
               Directory.  Also the filename is highlighted and put at the
               very top of the Directory Window.

               If ShortCut cannot find the file on your disk, the search
               stops.  If you are on drive A, however, you will be prompted
               to put another diskette in drive A and the search resumes
               until the file is found or you stop the search by pressing


                                                              TUTOR.DOC - 12





               <Esc>.  This is handy if you can't remember which floppy
               diskette you used to store a file.

          Wildcard Characters 

               When you used an asterisk (*) to specify a filename pattern
               for ShortCut to use for the search, you used a wildcard.  A
               wildcard is a special character which means "any character or
               characters".  Besides the asterisk, there is one other
               wildcard - a question mark (?).

                    * means any series of characters

                    ? means any single character

               This may be clearer if we look at a few examples. 

               *.TXT 
                    Any filename with a TXT extension.

               ?FILE.TXT 
                    Files with any single character followed by the letters
                    FILE.TXT.  Your MYFILE.TXT file would not match this
                    pattern but the rest of the practice files would.

               ?????.* 
                    Any file with five characters and any extension. 
                    BFILE.TXT would match this pattern.  MYFILE.TXT would
                    not.

               G*.*
                    Any file that begins with a G.
               *.* 
                    Any file; all files.

          Setting Up a File Pattern 

               ShortCut uses wildcards with another command that will help
               you find the file you want quickly.  You may have noticed the
               *.* pattern in the File Pattern box on the ShortCut screen. 
               This means that all the files in the Current Displayed
               Directory are displayed in the Directory Window.  You can
               tell ShortCut to display only the filenames that match a
               specified pattern.

               Go back to the root directory of your disk.  Press <ALT-F>
               for File Pattern.  When ShortCut prompts you, type ?FILE.*. 
               Strike <Enter>. 

               Only the files matching this pattern are displayed in the
               Directory Window.  It is as if ShortCut put all the filenames
               through a filter, and only the ones fitting the pattern you
               specified made it through.  The files are still on your disk;
               you just can't see them.  

                                                              TUTOR.DOC - 13





               Use <ALT-F> again and specify *.*.  All your files will
               become visible again.  

          Running a Program

               Move the screen arrow to a program file such as a word
               processor or a spreadsheet.  You may have to change direc-
               tories or insert another diskette and change drives to find
               the file you want.  Any time you switch diskettes, you can
               force ShortCut to read the new one.  Just move the screen
               arrow to the Current Displayed Directory and press the <Space
               Bar>.

               Press <F2> to move to the RUN command box on the Command Bar. 
               Hit <Enter> to run the program. 

          Pop Up ShortCut

               Now that your program is up and running, press <Alt-Left
               Shift> to pop up ShortCut.  

               The ShortCut screen will appear and the words POPPED UP will
               blink on and off at the top of the screen.  This is to remind
               you that another program exists under the ShortCut screen.   

               You can now use many of ShortCut's commands and features and
               then when you are done, return directly to your waiting
               program by pressing <Alt-Left Shift> again.

               If you change drives or directories or switch diskettes while
               you use ShortCut in its popped up state, you must remember to
               return everything as it was before you "unpop" back to your
               program or it may not be able to find the files it needs to
               run.  Depending on the program, the results could be dis-
               astrous.  Of course, while ShortCut is popped up you must
               also remember not to erase any files your program uses.
            
          For Hard Disk Users Only

               Up until now, your ShortCut files have been in your root
               directory of your hard disk.  Now that you are familiar with
               how ShortCut works, you will probably want to put your
               ShortCut files in a directory of their own.

               Press <F8> and <Enter>.  Type in a name for the new direc-
               tory:  either SHORTCUT or SC, and press the <Enter> key.  Now
               mark all ShortCut files and move them to the new directory
               with the MOVE command (Shift-F3).  

          A Summary of ShortCut Commands 

               You should now be familiar with most of the commands on the
               Command Bar plus a few of ShortCut's Alt key commands.  Below
               is a list of all of ShortCut's commands with a brief descrip-

                                                              TUTOR.DOC - 14





               tion of each.  An asterisk (*) indicates the command is
               available when you have ShortCut popped up over another
               program.

          The First Command Bar 

               F1   Help *    Displays a help screen listing ShortCut
                              commands.  Detailed help is available by
                              pressing the keys for any command from this
                              screen.

               F2   Run       Executes the program pointed at by the screen
                              arrow.  The file must have an extension of
                              .COM, .EXE, .BAT, or .BAS.

               F3   Copy *    Copies the marked files to the directory or
                              drive you select.

               F4   Edit      Edits the marked file with the text editor or
                              word processor of your choice.  This command
                              will be covered in SETUP.DOC.

               F5   Type *    Displays the contents of the mark file(s). 
                              Files must be an ASCII file or the characters
                              "typed" on your screen may not be readable.

               F6   Print *   Sends the contents of the marked file or files
                              to your printer.  

               F7   Erase *   Erases the marked file or files.

               F8   Mkdir *   Creates a subdirectory that belongs to the
                              Current Displayed Directory.

               F9   Rename *  Renames the marked file or files.

               F10  Commnd    Displays the normal DOS command line.  You may
                              enter any DOS command.  COMMND.DOC explains
                              this feature.

          The Second Command Bar (Shift) 

               All commands on the second Command Bar use the <Shift> key
               plus a function key.  For example, use <Shift-F1> to reach
               the PATH command.  

               F1   Path *    Displays the path DOS uses to find executable
                              files, and allows you to change it if you
                              wish.

               F2   Labl *    Changes the volume label of your disk.

               F3   Move *    Moves files from one directory to another on a
                              disk.  

                                                              TUTOR.DOC - 15





               F4   Date *    Displays the system date and allows you to
                              change it.

               F5   Time *    Displays the system time and allows you to
                              change it.

               F6   Dcopy     Formats a disk in drive B and copies all files
                              from the disk in drive A to the disk in drive
                              B.

               F7   Setup *   Allows you to configure ShortCut to your
                              specifications.  SETUP is covered in detail in
                              SETUP.DOC

               F8   Rmdir *   Removes the empty subdirectory pointed at by
                              the screen arrow.

               F9   Search *  Searches all directories on a disk for a file
                              matching a pattern you specify.

               F10  Format    Formats a disk in drive B.

          The Third Command Bar (Ctrl) 
            
               All commands on the third Command Bar use the <Ctrl> key plus
               a function key.  

               F1 - F10  Your commands 

                    You determine what these commands will be.  SETUP.DOC
                    will tell you how to "install" these commands.  The
                    command boxes will say Ndef for not defined until you
                    put your commands in them.  

          The Fourth Command Bar (Alt)

               All commands on the fourth Command Bar use the <Alt> key plus
               a function key.

               F1 - F10  Your commands

                    You determine what these commands will be.  SETUP.DOC
                    will tell you how to "install" these commands.  The
                    command boxes will say Ndef for not defined until you
                    put your commands in them.  

          Alt Key Commands 

               All Alt key commands use the <Alt> key plus a letter.  For
               example, press <Alt-C> to turn CHIME on or off.  Alt key
               commands are explained in detail in REFER.DOC.




                                                              TUTOR.DOC - 16





               Alt-B     Break * 
                         Toggles Break on and off.  When break is active, it
                         may be  easier to stop a program while it is
                         running.  If break is on, the Break box will be
                         highlighted on ShortCut's screen.

               Alt-C     Chime * 
                         Toggles on and off.  When on, a musical note is
                         present in the box ShortCut uses to display the
                         time and a chime will sound every hour on the hour.

               Alt-D     DOS Screen * 
                         Replaces the ShortCut screen with the DOS screen.

               Alt-E     Exit ShortCut   
                         Exits ShortCut removing ShortCut from your com-
                         puter's memory.

               Alt-F     File Pattern *
                         Allows you to specify a file pattern (template) and
                         displays only those files that match that pattern
                         in the Directory Window.

               Alt-G     Go to Marked Directory *
                         Returns to the directory marked with <Alt-M> (Mark
                         Directory).

               Alt-H     Help * 
                         Displays context-sensitive help.

               Alt-L     Locate File * 
                         Sorts the filenames alphabetically and puts the
                         first filename beginning with the letter you
                         specify at the top of the Directory Window.  If the
                         files are sorted by extension when <Alt-L> is
                         pressed, the filenames containing an extension
                         beginning with the letter you specify are put at
                         the top of the Directory Window.

               Alt-M     Mark Directory * 
                         Marks a directory.  Once marked, you can leave this
                         directory and then return to it quickly with
                         <Alt-G> (Go to directory).

               Alt-P     Pause * 
                         Toggles Pause mode on and off.  When Pause is on,
                         before the DOS screen is replaced with ShortCut's
                         screen, you must press a key.  When it is off,
                         ShortCut's screen reappears after a DOS command is
                         executed without any input from you.  Pause gives
                         you the opportunity to read the DOS screen before
                         it is replaced with ShortCut's screen.



                                                              TUTOR.DOC - 17





               Alt-S     Save Configuration * 
                         Saves the way you have ShortCut set up at the
                         present time to the SHORTCUT.DAT file.

               Alt-T     Tree * 
                         Displays a visual tree of the directories on your
                         current Display Drive.  Permits you to change
                         directories.

               Alt-V     Verify * 
                         Used to turn on and off the verification of files
                         after they are copied.











































                                                              TUTOR.DOC - 18

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0840

     Volume in drive A has no label
     Directory of A:\

    AFILE    TXT      1280   5-29-87   5:50a
    BFILE    TXT      1280   5-29-87   5:50a
    CFILE    TXT      1280   5-29-87   5:50a
    CHATTR   EXE      4096   5-29-87   5:50a
    COMMND   DOC      8277   5-28-87   3:39p
    COMP     BAT       180   5-29-87   5:50a
    COMP     DAT      1299   5-29-87   5:50a
    DFILE    TXT      1280   5-29-87   5:50a
    DWINDOW  DOC      8953   5-28-87   3:35p
    FILES840 TXT      2025  10-12-87  10:27a
    GO       BAT        38   7-08-87  12:19a
    GO       TXT       617  10-08-87   4:37p
    README   1ST      2276   5-29-87   1:18p
    REFER    DOC    107795   5-28-87   4:13p
    REGISTER FRM      1762   5-29-87  12:49p
    SETUP    DOC     29310   5-29-87  11:33a
    SHORTCUT DAT      1299   5-29-87   5:45a
    SHORTCUT EXE     62976   5-25-87   5:00p
    SHORTCUT HLP     41600   5-29-87   5:50a
    START    DOC     20615   5-29-87  12:00p
    TUTOR    DOC     49995   5-28-87   3:24p
           21 file(s)     348233 bytes
                            2048 bytes free
