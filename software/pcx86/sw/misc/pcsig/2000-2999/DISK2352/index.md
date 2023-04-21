---
layout: page
title: "PC-SIG Diskette Library (Disk #2352)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2352/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2352"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PEDIT"

    PEDIT is a split-screen text editor that can edit up to four files at a
    single time.  This is a text editor, not a word processor or desktop
    publisher and does not have features such as graphics or multiple
    fonts.  It does, however, have options that programmers need; multiple
    buffers, split-screen editing, access to DOS, insert and overstrike
    modes and auto-indent, to name a few.
    
    While the purpose of PEDIT is to create and edit text, it has some
    features normally associated with word processors such as settable
    margins and autowrapping text, text centering between defined margins,
    words (or parts of words) capitalized, lower-cased, or upper-cased.
    Paragraphs can be filled or reformatted to fit within existing
    margins.
    
    PEDIT also supports definable keys, macros, autosave, recall/edit any
    previous command, DOS buffer, 43-line mode, and colors.  A key feature
    of PEDIT is that the file being edited is stored entirely in memory,
    which makes accessing any part of the file very fast.  Move from the
    top to the bottom of any buffer instantaneously.  The size of the file
    being edited is limited only by the amount of available memory.
    
    If you edit text files, such as computer programs, and want an
    extremely fast split-screen editor, then PEDIT is for you.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2352.TXT

{% raw %}
```
Disk No: 2352                                                           
Disk Title: pEDIt                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: pEDIT                                                    
Author Version: 1.65                                                    
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
PEDIT is a split screen text editor with the ability to edit up to four 
files at one time.  PEDIT is a text editor, also called a text          
processor.  It is not a word processor or desktop publisher and does not
have features like graphics, multiple fonts or the like.  It does have  
things programmers need; multiple buffers, split screen editing, access 
to DOS, insert and overstrike modes and autoindent, to name a few.      
                                                                        
While the purpose of PEDIT is to create and edit text, it does have     
features normally associated with word processors.  It has settable     
margins and automatically wraps text from one line to the next.  Text   
can be centered between defined margins and words (or parts of words)   
can be capitalized, lower-cased, or upper-cased.  Also paragraphs can be
filled or reformatted to fit within existing margins.                   
                                                                        
PEDIT also supports definable keys, macros, autosave, recall/edit any   
previous command, DOS buffer, 43-line mode, and colors.  A key feature  
of PEDIT is that the file being edited is stored entirely in memory,    
which makes accessing any part of the file very fast.  You can move from
the top to the bottom of any buffer instantaneously.  The size of the   
file being edited is limited only by the amount of available memory.    
                                                                        
If you edit text files, such as computer programs, and want a full      
featured, extremely fast split screen editor, then PEDIT is for you.    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PEDIT.DOC

{% raw %}
```













                                    p E D I T
                               -------------------
                               the personal EDITor


                                  Version 1.65

                                   April 1990










                           pEDIT COPYRIGHT 1989, 1990



                               _______
                          ____|__     |               (tm)
                       --|       |    |-------------------
                         |   ____|__  |  Association of
                         |  |       |_|  Shareware
                         |__|   o   |    Professionals
                       -----|   |   |---------------------
                            |___|___|    MEMBER





                                  T. G. Muench
                                 P.O. Box 30651
                             Phoenix, AZ 85046-0651







                      T A B L E   O F   C O N T E N T S


         Introduction . . . . . . . . . . . . . . . . . . . . .  1

         Installing pEDIT

             1. General Information . . . . . . . . . . . . . .  3
             2. Floppy Disk Installation  . . . . . . . . . . .  5
             3. Hard Disk Installation  . . . . . . . . . . . .  7

         Starting Up pEDIT  . . . . . . . . . . . . . . . . . .  9

         Interacting With pEDIT

             1. Command Mode  . . . . . . . . . . . . . . . . . 13
             2. Prompting Mode  . . . . . . . . . . . . . . . . 13

         pEDIT Commands

             1. Cursor Movement . . . . . . . . . . . . . . . . 14
             2. Text Manipulation . . . . . . . . . . . . . . . 16
             3. Text Deletion . . . . . . . . . . . . . . . . . 19
             4. Searching . . . . . . . . . . . . . . . . . . . 20
             5. Files . . . . . . . . . . . . . . . . . . . . . 22
             6. Buffers . . . . . . . . . . . . . . . . . . . . 23
             7. Windows . . . . . . . . . . . . . . . . . . . . 25
             8. Key Macros  . . . . . . . . . . . . . . . . . . 27
             9. Cut and Paste . . . . . . . . . . . . . . . . . 28
            10. Miscellaneous . . . . . . . . . . . . . . . . . 29

         Error Handling

             1. Insufficient Internal Storage . . . . . . . . . 33
             2. Out of Disk Space . . . . . . . . . . . . . . . 33

         Copyright Notice and Warranty

             1. Disclaimer  . . . . . . . . . . . . . . . . . . 34
             2. Registration  . . . . . . . . . . . . . . . . . 34

         Assoc. of Shareware Professionals  . . . . . . . . . . 36

         Appendices

             1. List of pEDIT Commands  . . . . . . . . . . . . 37
             2. Default Key Bindings  . . . . . . . . . . . . . 40
             3. Default Initialization File . . . . . . . . . . 41
             4. Default Help Files  . . . . . . . . . . . . . . 41
             5. DOS File Specification  . . . . . . . . . . . . 42
             6. Color Codes . . . . . . . . . . . . . . . . . . 43











                           I N T R O D U C T I O N


         pEDIT is a text editor for the IBM PC, PC-XT, PC-AT, 80386
         and compatibles. pEDIT requires PC-DOS/MS-DOS Version 2.1 or
         higher and a minimum of 320k of memory; 512k is recommended
         as is a hard disk.

         pEDIT is a text editor, also called a text processor. It is
         not a word processor or desktop publisher and does not have
         features like graphics, multiple fonts or the like. It does
         have things programmers need: multiple buffers, split screen
         editing, access to DOS, insert and overstrike modes and auto-
         indent, to name a few.

         While the purpose of pEDIT is to create and edit text, it
         does have features normally associated with word processors.
         It has settable margins and automatically wraps text from one
         line to the next. Text can be centered between the defined
         margins and words (or parts of words) can be Capitalized,
         lower-cased or UPPER-CASED. Also, paragraphs can be 'filled'
         or reformatted to fit within the existing margins.

         Two files are used to make pEDIT work the way you want it to
         work. The Help file contains any screen you want displayed
         when the HELP function is invoked. The Initialization file
         contains environment settings and key bindings. If these
         files are not defined as PEDITHLP and PEDITINI using the DOS
         SET command, pEDIT looks for them in the current default
         directory.

         Every effort has been made to make the editor perform as
         efficiently as possible. Because much of the time in an
         editor is spent updating the screen, pEDIT uses hardware
         scrolling and a minimal screen updating method.

         The speed is quite good on an AT (or higher) class machine
         with a hard drive. A 100k file can be loaded in about 6
         seconds on a 10-MHz 80286 machine with a slow (65 msec.) hard
         disk. The time drops to about 4.5 seconds on a PS/2 Model
         50Z, which has a zero wait state processor and a fast hard
         drive.

         Text is stored entirely in memory, which makes accessing any
         part of the file very fast. The user can move from the top to
         the bottom of any buffer instantaneously. The following table
         shows some approximate capacities of pEDIT with different
         amounts of memory:





                                     - 1 -







              Total           Approximate        Maximum Lines
            Memory (k)        Capacity (k)          of Text
            ----------        ------------       -------------

               320                  64                 1400
               384                  96                 2800
               448                 160                 4150
               512                 192                 5500
               576                 256                 6900
               640                 288                 8250

         The table assumes 64k is used by DOS, device drivers, TSRs,
         etc. If you have more memory than this allocated for these
         purposes, the capacity will of course be lower. pEDIT tries
         to leave 50-60k free for spawning to DOS. The maximum line
         length is 32767 characters.





































                                     - 2 -







                       I N S T A L L I N G   P E D I T


                            1. General Information

         The distribution diskette contains the following files. Those
         flagged by (*) are included with the registered version only.

             READ.ME

                 Text file containing information about the INSTALL
                 program and how to get started with pEDIT

             PEDIT.DOC

                 This document; it is a standard ASCII text file that
                 can be printed

             PEDIT.EXE

                 The pEDIT executable program

             PEDIT.INI

                 Initialization file containing default key bindings
                 and environment settings

             PED101.HLP
             PED84.HLP

                 Help files for both 101 (Enhanced) and 84 (AT style)
                 key keyboards

             REGISTER.DOC

                 How to register for pEDIT; registered users receive
                 the latest version of pEDIT without the opening share-
                 ware screen and full printed documentation

             VENDOR.DOC

                 Information for shareware vendors regarding require-
                 ments for distributing pEDIT

             INSTALL.EXE

                 Program to install pEDIT on floppy or hard disk based
                 systems.





                                     - 3 -







          (*)KEYRATE.COM

                 Program to set the keyboard repeat rate on AT and
                 later computers

          (*)STAYDOWN.COM

                 Memory-resident utility from PC Magazine to allow
                 Ctrl-, Alt- and Shift- commands to be entered as 2
                 keystrokes

         The distribution diskette (write-protected) is a MASTER and
         should be used only for making copies. You should NEVER use
         the master diskette itself for editing; if something should
         happen to it, you will no langer have pEDIT!

         The following installation procedures assume you have a basic
         knowledge of PC operation and can format a diskette. Refer to
         your DOS manual as needed.


































                                     - 4 -







                         2. Floppy Disk Installation

         This procedure assumes you have 2 floppy disks of at least
         360kb each. pEDIT will not be very usable with a single 360kb
         floppy - there will not be much room for text files.

         In a floppy system, Drive A: will contain the program disk
         with the pEDIT executable plus help and initialization files.
         Drive B: will contain a work disk with your document files,
         source programs or other text. There will be only one program
         disk; you can have as many work disks as you want.

         1. Format two diskettes; make one (the program disk) a system
            disk if you want to be able to boot from it; label the
            floppies 'pEDIT Program' and 'pEDIT Work'

         2. Insert the distribution diskette in Drive A:

         3. Determine if your keyboard is a 101-key or 84-key model;
            if neither, pick the one that is closest

            Decide if you want to install the optional KEYRATE and
            STAYDOWN utilities (registered version only)

         4. Run the installation program

            A>INSTALL<Enter>

            pEDIT Installation Program

            Hard or Floppy Disk (H,F): F<Enter>
            84- or 101-key keyboard (84,101): 101<Enter>
            Install STAYDOWN and KEYRATE (Y,N): Y<Enter>

            Installation Type = F
            Keyboard Type     = 101
            Install Options   = Y

            Do you want to continue (Y,N): Y<Enter>

            **** Floppy Disk Installation started at 13:14.54

            Insert blank formatted disk in Drive B:
              Press <Enter> when ready: <Enter>

            Copying A:PEDIT.EXE to B:PEDIT.EXE
            Copying A:PEDIT.DOC to B:PEDIT.DOC
            Copying A:PEDIT.INI to B:PEDIT.INI
            Copying A:PED101.HLP to B:PEDIT.HLP
            Copying A:REGISTER.DOC to B:REGISTER.DOC



                                     - 5 -







            Copying A:VENDOR.DOC to B:VENDOR.DOC
            Copying A:KEYRATE.COM to B:KEYRATE.COM
            Copying A:STAYDOWN.COM to B:STAYDOWN.COM

            **** Installation completed at 13:17.36

         5. Remove the distribution disk from Drive A; move the
            pEDIT Program disk to Drive A and insert a pEDIT Work
            disk in B:

         6. If you want KEYRATE to be run automatically when you
            boot, copy KEYRATE.COM to your system disk and add the
            following line to your AUTOEXEC.BAT file:

              KEYRATE FAST

         7. If you want STAYDOWN to be installed when you boot, copy
            STAYDOWN.COM to the system (boot) diskette and add this
            line to AUTOEXEC.BAT:

              STAYDOWN

         8. If you modified AUTOEXEC, reboot your computer so that
            KEYRATE and STAYDOWN can take effect

         9. Proceed to "Starting Up pEDIT"



























                                     - 6 -







                          3. Hard Disk Installation

         This procedure assumes you have 1 floppy disk and a hard disk
         of any size. You will most certainly want to install pEDIT on
         the hard disk for improved speed.

         You will need to decide if you want to install pEDIT in its
         own directory, in the root (\) directory or in, for example,
         a \TOOLS or \UTIL directory. The example assumes pEDIT will
         be installed in its own directory (\PEDIT); if not, sub-
         stitute your directory name.

         1. Insert the distribution diskette in Drive A:

         2. Determine if your keyboard is a 101-key or 84-key model;
            if neither, pick the one that is closest

            Decide if you want to install the optional KEYRATE and
            STAYDOWN utilities (registered version only)

         3. Run the installation program

            A>INSTALL<Enter>

            pEDIT Installation Program

            Hard or Floppy Disk (H,F): H<Enter>
            Hard drive [C]: <Enter>
            Hard drive directory [\PEDIT]: <Enter>
            84- or 101-key keyboard (84,101): 101<Enter>
            Install STAYDOWN and KEYRATE (Y,N): Y<Enter>

            Installation Type = H
              Drive/Directory = C:\PEDIT
            Keyboard Type     = 101
            Install Options   = Y

            Do you want to continue (Y,N): Y<Enter>

            **** Hard Disk Installation started at 13:14.54

            Copying A:PEDIT.EXE to C:\PEDIT\PEDIT.EXE
            Copying A:PEDIT.DOC to C:\PEDIT\PEDIT.DOC
            Copying A:PEDIT.INI to C:\PEDIT\PEDIT.INI
            Copying A:PED101.HLP to C:\PEDIT\PEDIT.HLP
            Copying A:REGISTER.DOC to C:\PEDIT\REGISTER.DOC
            Copying A:VENDOR.DOC to C:\PEDIT\VENDOR.DOC
            Copying A:KEYRATE.COM to C:\PEDIT\KEYRATE.COM
            Copying A:STAYDOWN.COM to C:\PEDIT\STAYDOWN.COM




                                     - 7 -







            **** Installation completed at 13:15.36

         5. Remove the distribution disk from Drive A:

         6. If you want KEYRATE to be invoked automatically when
            you boot, copy KEYRATE.COM to the root directory and add
            the following line to your AUTOEXEC.BAT file:

              C:\KEYRATE FAST

         7. If you want STAYDOWN to be installed when you boot, copy
            STAYDOWN.COM to the root directory and add this line to
            AUTOEXEC.BAT:

              C:\STAYDOWN

         8. Add the pEDIT directory in your DOS path so DOS can find
            the program no matter where you are; refer to the DOS
            manual for how to use the PATH command.

            You will also want to define PEDITHLP and PEDITINI to the
            DOS environment so the editor can find them; add these
            lines to AUTOEXEC.BAT:

              SET PEDITHLP=C:\PEDIT\PEDIT.HLP
              SET PEDITINI=C:\PEDIT\PEDIT.INI

         9. If you modified AUTOEXEC, reboot your computer

         10. Proceed to "Starting Up pEDIT"























                                     - 8 -







                      S T A R T I N G   U P   P E D I T


         The program file (PEDIT.EXE) must be in the current default
         directory or available through your DOS PATH. The help and
         initialization files (PEDIT.HLP, PEDIT.INI) must be defined
         to the DOS environment using the SET command or, again, be
         present in the current directory.

         Note: if you are using a floppy-only system, make sure you
         have a copy of COMMAND.COM present. pEDIT must be able to
         find this file to use pEDIT's Dos or Spawn commands.

         pEDIT can be started in one of two ways - with or without
         a file specification. If you don't want to edit an existing
         file, enter:

             C>PEDIT

         The normal way of starting pEDIT would be to specify the name
         of a file to be edited:

            C>PEDIT D:\PATH\FILENAME.TYP

         After entering one of the above commands, the screen will
         clear and you will see pEDIT's inverse status line. Next you
         will see a message that the initialization file is being read
         - provided, of course, that pEDIT can find one. Finally, if a
         file was specified, pEDIT will load the file and display the
         first screenfull of text. The cursor will be positioned at
         the top of the buffer.






















                                     - 9 -











            +--------------------------------------------------------+
          1 |                                                        |
          2 |                                                        |
          3 |                                                        |
          4 |                                                        |
          5 |                                                        |
          6 |                                                        |
          7 |                                                        |
          8 |                                                        |
          9 |                                                        |
         10 |                                                        |
            +--------------------------------------------------------+
         11 |   BufferName               Mode          Direction     |
            +--------------------------------------------------------+
         12 |                                                        |
         13 |                                                        |
         14 |                                                        |
         15 |                                                        |
         16 |                                                        |
         17 |                                                        |
         18 |                                                        |
         19 |                                                        |
         20 |                                                        |
         21 |                                                        |
            +--------------------------------------------------------+
         22 |   BufferName               Mode          Direction     |
            +--------------------------------------------------------+
         23  Command:
         24  <Message>                                   Working . . .










                                   Figure 1
                                 ------------
                                 pEDIT screen







                                     - 10 -







         Figure 1 shows a picture of the pEDIT screen. The editor uses
         rows 1-24 for text, status, commands and messages. Note that
         the PC's 25th line is not used.

         The pEDIT screen will contain 1 or 2 windows. The windows can
         be either mapped to a buffer or used to display information.
         A single window holds 21 lines of text; if two windows are
         active, each will contain 10 lines. Figure 1 shows pEDIT with
         two windows displayed; the top window uses rows 1-10, the
         bottom window rows 12-21.

         Each visible window has a reverse video status line at the
         bottom. What the status line shows depends on what the window
         is used for. If it is a text window, the status line shows
         the buffer name, the current mode (Insert/Overstrike) and the
         current direction (Forward/Reverse). For an informational
         window, the status line indicates the type of information
         being displayed - HELP, SHOW, LIST, ERROR, etc.

         Think of a window as a viewport into a portion of the text.
         Figure 2 shows a text buffer (represented by the large box)
         and a window into the text. Note that a window can show no
         more than 80 columns of text. pEDIT uses horizontal scrolling
         so the window can be into any portion of the text, not just
         the leftmost 80 columns. pEDIT can handle lines up to 32767
         characters in length.

         The command line displayed at row 23 is actually a one line
         window without a status line. It is mapped to the COMMAND
         buffer whenever the DoCommand key is pressed. The prompt
         'Command: ' is displayed when the editor is in command mode.

         The message line at row 24 is used to display informational
         text, errors, etc. Also shown at the right margin is the
         'Working . . .' message that flashes whenever pEDIT is busy
         loading a file, searching, etc. The message is erased when-
         ever a key is pressed.
















                                     - 11 -











            +--------------------------------------------------------+
            |                                                        |
            |        +----------------+                              |
            | Now is |the time for all| good persons to come to the  |
            | aid of |their country.  |                              |
            |        |                |                              |
            |        |<--- Window --->|                              |
            |        |                |                              |
            |        +----------------+                              |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |<----------------------- Buffer ----------------------->|
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            |                                                        |
            +--------------------------------------------------------+










                                   Figure 2
                               ---------------
                               Buffers/Windows







                                     - 12 -







                 I N T E R A C T I N G   W I T H   P E D I T


         There are two ways to interact with the editor - command mode
         and prompting mode. In either mode, pEDIT will prompt for the
         missing parameters if an incomplete command is given. For
         example, if you enter "replace" without any parameters, you
         will be asked for "Old string" and "New string".


                               1. Command Mode

         Press the DoCommand key to enter command mode. The prompt
         "Command: " will be displayed on the command line and the
         cursor will be positioned after the colon. At this point you
         can issue any valid pEDIT command, for example "write file"
         or "set margins 10 70".

         It is very important to realize that the command line is a
         window into the COMMAND buffer. All defined keys and pEDIT
         commands will work as expected - you can move backwards and
         forwards, toggle between insert and overstrike mode, etc. The
         command prompt is part of the text and can be overwritten or
         deleted; be careful to leave the "Command: " portion of each
         line intact.

         The command window does not have an associated status line.
         You will not be able to see the current mode and direction;
         use "show buffer" for this information if desired.


                              2. Prompting Mode

         Prompting mode is active whenever pEDIT is asking for input
         and the "Command: " prompt is not displayed. In this mode you
         will not have access to pEDIT's commands and key definitions.
         Only Insert mode is supported; limited line editing is avail-
         able using the following keys:

             Up             Recall the last command entered
             BackSpace      Erase previous character
             Del	    Erase current character
             Left           Move left one character
             Right          Move right one character
             Home           Position to start of line
             End            Position cursor to end of line







                                     - 13 -







                         P E D I T   C O M M A N D S


                              1. Cursor Movement

         Moving the cursor around in the text is among the most basic
         of all editing functions. With the following commands you
         will be able to move around in your document. The default key
         bound to each function is given in parentheses after each
         procedure name; refer to the Appendix for key names.

         1.1. Move Top (Ctrl-Home)

         This command positions the cursor to the first line of the
         buffer, scrolling or repainting the screen as necessary.
         pEDIT keeps all text in memory, making it very fast to move
         to the top of the buffer from any point in the buffer.

         1.2. Move Bottom (Ctrl-End)

         This function moves the cursor to the dummy last line at the
         end of the buffer. Again, the screen will scroll or repaint
         as required.

         1.3. Move Home (Home)

         The action of MoveHome depends on the position of the cursor
         within the current line. If the cursor is not at the begin-
         ning of the line, it will move there. If it is already at the
         start of a line, it will move to the start of the previous
         line. Scrolling will take place as necessary toward the
         beginning of the buffer.

         1.4. Move End (End)

         MoveEnd moves the cursor to the end of the current line if it
         is not there already. If the cursor is at the end of the
         line, it will move to the end of the next line. The screen
         will scroll as needed toward the end of the buffer.

         1.5. Move Up (Up)

         This command is used to move up one line in the current
         buffer. Obviously, there can be no action if the cursor is
         already on the first line of the buffer. Otherwise, the
         cursor will move up a line, scrolling if necessary. Note that
         pEDIT attempts to keep the cursor as close to the same column
         as possible.

         1.6. Move Down (Down)



                                     - 14 -







         MoveDown moves the cursor down one line following logic
         similar to that of MoveUp. The cursor can't move if it is
         already on the dummy last line of the buffer. Otherwise, it
         will move down, scrolling as necessary. Again, pEDIT will
         keep the cursor as close as possible to the same column.

         1.7. Move Left (Left)

         This function moves the cursor left one character position.
         The cursor may move more than one column if the character
         being crossed is a Tab or control character. If the cursor is
         at the beginning of a line, it will wrap to the end of the
         previous line.

         1.8. Move Right (Right)

         This command moves the cursor right one character. Again,
         more than one column will be crossed for the Tab and other
         control characters. If the cursor is at the end of a line, it
         will move to the beginning of the next line.

         1.9. Move Word (F2)

         MoveWord will move the cursor to the beginning of the next
         word in the current direction. If the direction is Forward,
         it will move toward the end of the buffer; if the direction
         is Reverse, toward the beginning of the buffer.

         The screen will scroll or repaint depending on the state of
         Select. If Select is active, the screen will be redisplayed.
         If Select is not active, scrolling will take place to keep
         the cursor on the fourth line from the top or bottom of the
         window. Scrolling is much faster than having to repaint the
         entire screen.



















                                     - 15 -







                         P E D I T   C O M M A N D S

                             2. Text Manipulation

         The following commands are used to manipulate text, i.e.
         insert new text and change the form of existing text.

         2.1. Insert Char

         There is no 'InsertChar' command; rather, it is the default
         when a key other than a defined command key is pressed. These
         keys include the typing keys and non-definable keys such as
         Tab, BackSpace and Enter. The action taken depends on the
         current mode. In Insert mode, the character will be inserted
         into the buffer at the current cursor position; text to the
         right of the cursor is "shoved over" to make room. In Over-
         strike mode, the current character is simply overwritten.

         pEDIT uses automatic word wrap to keep text between the
         defined margins as you type. If a word will not fit inside
         the current right margin, it will be moved to the start of
         the next line.

         The Tab and control keys require special handling. If the Tab
         key is pressed, the cursor will move to the next tab stop.
         pEDIT allows only standard tabs at every eighth character
         position, i.e. columns 9, 17, 25, 33,... Note that an actual
         tab character (Ascii Ctrl-I) is stored in the text. Other
         control characters are shown as a caret (^) followed by the
         displayable character; for example, Ctrl-A would show as ^A.

         2.2. Restore Text (F09)

         This command restores the text last deleted by EraseWord or
         EraseLine. The text is stored in a special text buffer for
         later restoration. This text buffer is rebuilt after every
         action so only the very last erasure can be restored.

         2.3. Open Line (Ctrl-O)

         This function opens up a new (empty) line for text insertion.
         The end result is the same as pressing Enter followed by
         MoveLeft. If a left margin has been defined the text will be
         indented up to this margin.

         2.4. Fill Paragraph (Alt-F)

         FillParagraph reformats the paragraph the cursor is in to fit
         within the defined margins. Use this command after you have
         inserted or deleted text or changed margins. A paragraph is
         defined as contiguous text bounded by empty lines both above


                                     - 16 -







         and below. pEDIT will not see indented text as a separate
         paragraph unless it has at least one empty line separating it
         from other text.

         FillParagraph should be used sparingly in large documents. It
         works by copying the text to a fill buffer, deleting the
         current paragraph and then re-inserting the text. This uses
         considerable storage space.

         2.5. Indent

         This function is very useful in programming where you want to
         indent a section of code in or out without having to manually
         edit every line. A level is 4 character positions or one-half
         a tab stop. Indent uses tabs and spaces as needed to indent
         the line to the desired offset.

         To use indent (1) position the cursor to the start of the
         first line, (2) turn Select on, (3) highlight the entire
         range of lines to be indented and (4) issue the "INDENT" or
         "INDENT n" command. Specify the number of levels (n) as a
         positive or negative integer - positive for 'out' (toward
         the right), negative for 'in'.

         The selected range must start at the beginning of the first
         line and end at the end of the last line. Note that Select is
         automatically turned off after the function completes.

         2.6. Auto Indent (Ctrl-Enter)

         This is another function very useful in programming. It is
         used to start a new line and automatically indent the line
         the same as the previous line. pEDIT uses the same leading
         whitespace (spaces and tabs) as the previous line. AutoIndent
         is normally used at the end of a line but the command can be
         issued anywhere.

         2.7. Center Line

         This command centers the current line - the line the cursor
         is on - between the existing margins. Only spaces are used to
         indent the line to the appropriate position.

         2.8. Capital Word (Alt-C)

         CapitalWord capitalizes the current word starting at the
         current position within the word. The case change does not
         start at the beginning of the word; this is to allow, for
         example, 'Microsoft' to be changed to 'MicroSoft'.

         2.9. Lower Word (Alt-L)


                                     - 17 -







         This command converts the current word to lower-case starting
         at the current position within the word. All characters from
         the cursor to the end of the word will be changed to upper-
         case.

         2.10. Upper Word (Alt-U)

         UpperWord converts the current word to upper-case, again
         starting at the current character position and not at the
         beginning of the word.

         2.11. Quote Char (Ctrl-V)

         This function is used to enter special characters into the
         text. Whenever you press the QuoteChar key pEDIT prompts you
         with "Press key to be added: "; at this point press one of
         the special keys. For example, to insert a form feed (Ctrl-L,
         Ascii 12) press Ctrl-V followed by Ctrl-L. The character will
         show as '^L' on the screen.

         The feature can also be used with Find and Replace. To find a
         line feed (Ctrl-J, Ascii 10) for example, press the DoCommand
         key and enter "FIND ^V^J".

         Note that extended keys such as the PC keypad and function
         keys cannot be quoted. These keys return two bytes - a null
         followed by a displayable character. pEDIT uses the null
         character (Ascii 0) to denote end of line and so nulls cannot
         be used.

         The PC graphics characters - those above Ascii 127 - are
         inserted in a special way. Hold down the Alt key and enter
         the decimal value of the character using the numeric keypad
         only; release the Alt key when done. This is documented in
         some DOS manuals.

         2.12. Trans Char (Alt-T)

         This command transposes (swaps) two characters of text within
         a line. The cursor must be on the second character when you
         issue the command. The cursor cannot be positioned past the
         end of the line.











                                     - 18 -







                         P E D I T   C O M M A N D S

                               3. Text Deletion

         These commands are used to delete (erase) existing text. You
         can delete by character, word or line.

         3.1. Erase Char (Ctrl-D)

         This command deletes the current character - the character
         the cursor is on. The action taken depends on the current
         mode. In Insert mode, the character is deleted and text to
         the right of the cursor is shifted left to "fill in the
         hole". In Overstrike mode, the character is replaced by a
         space.

         3.2. Erase Prev (Backspace)

         This function deletes the previous character - the character
         to the left of the cursor. In Insert mode, the character is
         deleted and text to the right of the cursor is again shifted
         toward the left. In Overstrike mode, the character is again
         replaced by a space.

         ErasePrev is permanently bound to the Backspace key. The
         Backspace key cannot be redefined.

         3.3. Erase Word (F04)

         EraseWord deletes text from the current position in a word to
         the end of the word. Deletion does not start at the beginning
         of the word. The current direction (Forward/Reverse) does not
         affect the action; deletion is always toward the end of the
         word.

         The current mode also has no effect on EraseWord. The entire
         word (or portion of a word) will be erased.

         3.4. Erase Line (Ctrl-K)

         This command erases an entire line or a portion of a line
         depending on the position of the cursor. If the cursor is at
         the beginning of a line, the entire line - including the new
         line (end of line) marker - is erased and stored in the text
         buffer. If the cursor is not at the start of a line, deletion
         is from the current position to the end of the line.







                                     - 19 -







                         P E D I T   C O M M A N D S

                                 4. Searching

         The search commands are used to search for (find) text, and
         to replace one text string by another. You will find that
         pEDIT's replace function is very powerful and flexible.

         4.1. Find (F01)

         The "Find" command is used to search for a specified text
         string. You can either press the Find key and respond to the
         prompt "String to find: " or press DoCommand and enter the
         command "FIND <text>". If the target string is all lowercase,
         the operation will be case-insensitive, that is 'pedit' will
         match 'pedit', 'pEDIT' and 'PEDIT'. If instead the target
         contains any uppercase characters, the match will be exact;
         'pEDIT' will match only 'pEDIT'.

         The direction of the search will of course follow the current
         direction. The screen will scroll or repaint depending on the
         Select state; the action taken will be the same as it is for
         MoveWord.

         4.2. Find Next (F03)

         This command will find the next occurrence of the last search
         string you specified. It is advisable to have FindNext bound
         to a key so only a single key press is required to repeat the
         last search operation.

         4.3. Replace (Alt-R)

         pEDIT has a very powerful search and replace function. Some
         editors force you to do replacements one-at-a-time or replace
         every occurrence without giving you a choice. To use Replace,
         either press the Replace key and reply to the "Old string :"
         and "New string: " prompts, or press DoCommand and enter a
         command of the form "REPLACE old new".

         pEDIT will search for each occurrence of 'old' and prompt you
         with "Replace (Y)es (N)o (A)ll (L)ast (Q)uit: ". Enter one of
         the following:

            Enter - replace this occurrence
            Y     - replace this occurrence
            N     - skip this replacement
            A     - replace all occurrences from this point
            L     - make this the last replacement and quit
            Q     - quit.



                                     - 20 -







         Matching the old string will follow the rules listed for the
         Find command above. However, the replacement will always
         substitute the specified new string. For example, the command
         "REPLACE pedit pEDIT" will substitute 'pEDIT' in all cases.

















































                                     - 21 -







                         P E D I T   C O M M A N D S

                                   5. Files

         These commands involve reading and writing disk files.

         5.1. Get File (Alt-G)

         This command loads in a new file for editing. pEDIT will
         create a buffer for the file, create a window and map the
         window to the buffer. The status line will reflect the new
         buffer name and the first screen of text, if any, will be
         displayed. If no file exists, pEDIT will display "Creating
         file" and present you with an empty screen.

         You must specify a complete file name. pEDIT does not support
         path name completion or supply a list of matching filenames.
         Also, pEDIT does not validate file names; be sure and provide
         a valid name.

         pEDIT allows 4 user buffers. The number of lines and amount
         of text space depends on available memory.

         5.2. Include File (Alt-I)

         This function reads in the specified file from disk and
         inserts it in the buffer starting at the current cursor
         location. The screen will repaint to show the new text. The
         end result is the same as if the user typed in the text
         contained in the file.

         Include File should be used only for relatively small files.
         The function uses the normal InsertChar routine, not the much
         faster GetFile which loads text directly into memory.

         5.3. Write File (F10)

         WriteFile is used to save the contents of the current buffer
         to disk. The file name used will be the one specified when
         the buffer was created. If no file name has been selected,
         pEDIT will ask for one.

         You can change the name of the file at any time by using a
         command of the form "WRITE FILE filespec" where filespec is a
         valid DOS file specification; see the section Error Handling.

         Caution: pEDIT will overwrite any existing file. If the
         editor runs out of disk space during the save operation, you
         will be advised of the situation and told to free up space on
         the current drive or use "WRITE FILE filespec" to switch to
         another drive.


                                     - 22 -







                         P E D I T   C O M M A N D S

                                  6. Buffers

         These commands affect how text is viewed and manipulated. You
         can pick which buffer(s) to view, set the mode and direction,
         etc.

         6.1. Show Buffer

         ShowBuffer displays detailed information about the current
         buffer. This includes the buffer name, associated file
         specification, current mode, current direction, number of
         lines of text, characters of text, etc.

         6.2. List Buffers

         This function lists a summary of all defined buffers - the
         two system buffers (COMMAND and DOS) plus up to 4 user
         buffers. The following items are displayed: buffer name,
         number of lines in the buffer, buffer type (System or User),
         whether or not the buffer has been modified and the name of
         the file associated with the buffer.

         6.3. Buffer (Alt-B)

         This command lets you switch between buffers. You will be
         presented with a BUFFER window containing the names of all
         buffers - System and User. The cursor will automatically be
         positioned on the first User buffer. Use the up and down
         arrow keys to highlight the desired buffer name; press Enter
         to select that buffer.

         6.4. Change Mode (F05)

         The ChangeMode command is used to toggle between Insert and
         Overstrike modes. If the mode is Insert when the command is
         given, it will change to Overstrike and vice versa.

         6.5. Change Dir (F06)

         Use this command to toggle between the Forward and Reverse
         directions. Note that the buffer direction applies only to
         the Find, FindNext, Replace and MoveWord functions.

         6.6. Mark

         This function is used to 'mark' a particular place in a
         buffer so you can return to it at some later time. There can
         be only one marker in each buffer. pEDIT tries to stay as
         close as possible to the original mark as text is inserted


                                     - 23 -







         and deleted.

         6.7. Goto Mark

         Issue this command to move to the position defined by the
         last Mark command. The screen will scroll or repaint as
         necessary.

         6.8. Line

         The Line command is used to display the current line number
         or move to a particular line in the buffer. Enter "LINE" by
         itself to display the current line and number of lines; use
         "LINE nn" to move to line number nn.







































                                     - 24 -







                         P E D I T   C O M M A N D S

                                  7. Windows

         The window functions control the number of windows on screen
         and let you select the current window. In addition, you can
         move the window up and down or left and right.

         7.1. One Window (Alt-1)

         The OneWindow command 'unsplits' the screen. If there are 2
         windows on screen, OneWindow will make the current window -
         the one the cursor is in - the only window. The screen will
         be repainted to show a full 21 lines of text. The line the
         cursor was on when the command was issued becomes the top
         line of the window.

         7.2. Two Windows (Alt-2)

         TwoWindows 'splits' the screen. If there is only one window,
         the screen will be split into two windows. Both windows will
         be mapped to the current buffer and will initially show the
         same 10 lines of that buffer. The cursor will move to the
         other window anticipating that you want to load in another
         file.

         When two windows are mapped to the same part of the same
         buffer, each must reflect the current state of the buffer.
         pEDIT will update both windows as necessary to keep the
         display correct.

         7.3. Other Window (Alt-O)

         If the screen is split, this command will move the cursor to
         the other window. The cursor will move to the row and column
         stored the last time the cursor was in the window.

         7.4. Prev Screen (PgUp)

         PrevScreen scrolls the screen up (towards the beginning of
         the buffer) by the number of rows currently on screen - 21 or
         10 depending on the window size. The current direction has no
         effect on this command.

         If the screen cannot scroll the full amount, the cursor will
         move up until it hits the first line of the buffer.

         7.5. Next Screen (PgDn)

         NextScreen scrolls the screen down by the number of rows
         currently on screen - 21 or 10 as above. Here 'down' means


                                     - 25 -







         towards the end of the buffer with the current direction
         having no effect.

         Again, if the screen cannot scroll the full amount the cursor
         will move until it hits the dummy line at the end of the
         buffer.

         7.6. Shift Left (Ctrl-Left)

         The Shift commands provide for horizontal scrolling - the
         ability to see text beyond column 80. ShiftLeft shifts the
         window to the left (toward the left margin) 20 columns. Many
         text editors only let you see 80 (maybe 132) columns; pEDIT
         lets you see any portion of any line.

         7.7. Shift Right (Ctrl-Right)

         ShiftRight scrolls the screen to the right 20 columns. How
         far the window can be shifted is limited only by pEDIT's
         maximum line length of 32767 characters.

































                                     - 26 -







                         P E D I T   C O M M A N D S

                                8. Key Macros

         pEDIT's key macro facility lets you automate repetitive
         tasks. With the following commands you can start a "learn"
         sequence and pEDIT will remember all keystrokes until you
         give the Remember command. Use the Execute command to play
         back the keystrokes.

         8.1. Learn (F07)

         The Learn command is used to start recording keystrokes. The
         recording will continue until the Remember command is given.
         pEDIT will store all typing keys, function keys and other
         special keys such as control keys.

         Anything that requires user input cannot be used with Learn.
         When the macro is executed, pEDIT will not know where to get
         its input from; it always assumes the keyboard. There are
         ways around this; for example, if you want to use Find in a
         macro, first do a Find and specify the search string. Then,
         simply use the FindNext key in the macro.

         8.2. Remember (Ctrl-R)

         Remember is used to end the keystroke recording started by
         Learn. pEDIT will ask for a key to bind to; press any of the
         definable keys described in the Appendix. You cannot bind to
         the Tab, Enter or Backspace or Abort (Ctrl-C) keys. Only one
         macro can be defined at a time.

         A macro must not be bound to a key that is contained within
         the macro. If this happens, the macro routine will go into a
         loop and probably crash the system. It is recommended that
         you reserve one key for macros; F12 on the enhanced keyboard
         has been left open for this purpose.

         8.3. Execute

         This command executes the key macro defined by Learn and
         Remember. Whenever the key you selected is pressed, the
         keystrokes are 'replayed' as if you entered them.










                                     - 27 -







                         P E D I T   C O M M A N D S

                               9. Cut and Paste

         These commands are used for electronic "cut" and "paste".
         RemoveText deletes a portion of text which is saved in a
         paste buffer. Conversely, InsertHere copies from the paste
         buffer into a text buffer. pEDIT also has a "store" function
         which copies text to the paste buffer without removing it
         from the text.

         9.1. Select Text (Alt-S)

         SelectText is a toggle that turns the select state on/off. If
         select is off, it will be turned on and vice versa. When it
         is active, selected text is highlighted in reverse video as
         the cursor is moved. Select is automatically turned off after
         any RemoveText or StoreText command. To cancel the selection,
         simply issue the command again.

         9.2. Remove Text (Del)

         This command removes the selected text from the buffer and
         stores it in the paste buffer. The paste buffer is built
         every time RemoveText is invoked so only the most recently
         deleted text is available. The screen is updated as necessary
         to show the state of the buffer after the removal.

         9.3. Store Text (F11)

         StoreText is similar to RemoveText except that the text is
         not removed from the buffer. The paste buffer is rebuilt to
         contain the selected text. Use this command whenever you want
         to make a copy of some text without removing it.

         9.4. Insert Here (Ins)

         This function inserts text from the paste buffer into your
         text starting at the current cursor position. Again, the
         screen is updated to show the new text. InsertHere can be
         invoked more than once to make multiple copies of the stored
         text.











                                     - 28 -







                         P E D I T   C O M M A N D S

                              10. Miscellaneous

         The following are commands that don't fall into any other
         general category.

         10.1. Recall (Ctrl-B)

         The Recall command is used to recall the last command given
         via DoCommand. The end result is the same as pressing the
         DoCommand key followed by the up arrow. However, there is one
         difference; the previous command is copied to the current
         command line. The command can of course be edited.

         10.2. Do Command (Esc)

         DoCommand is used to directly issue commands to pEDIT. The
         editor will respond with the 'Command: ' prompt; at this
         point you can enter any valid pEDIT command. Note that
         commands must be entered in full with spaces in between
         words. No pEDIT command contains more than 2 words.

         The Command line is really a one-line window into the COMMAND
         buffer. All defined keys can be used on the command line for
         editing the current line or recalling previous commands. Use
         MoveUp and MoveDown to scroll up and down through the stored
         commands.

         It is very important that a DoCommand key be defined! If it
         is not, you will not be able to issue any commands to pEDIT.

         10.3. Refresh Screen (Ctrl-W)

         This command is used to clear and repaint the screen. Use
         RefreshScreen if, for any reason, the screen should be over-
         written or otherwise obliterated. Everything - including
         reverse video - will be redrawn.

         10.4. Define Key (Alt-K)

         This function is used to dynamically define a key during an
         editing session. pEDIT will ask for a procedure name and a
         key press. The procedure name is any valid pEDIT command
         entered in full (no abbreviations) with a space in between
         words. The procedure can be bound to any definable key.

         Generally it is best to put key bindings in the init file so
         they are automatically defined when the editor is invoked.

         10.5. Show Key


                                     - 29 -







         ShowKey is used to show what procedure is bound to a key.
         pEDIT will prompt for a key press and display the name of the
         procedure, if any, bound to that key.

         10.6. List Keys

         ListKeys lists all definable keys and the procedures bound to
         them. pEDIT will pause in between screens; press Enter to
         continue to the next screen.

         10.7. Spawn

         This function spawns or shells you to DOS. A second copy of
         COMMAND.COM is loaded into memory to process commands. You
         may then enter DOS commands and do anything you can do at the
         operating system level. Type 'EXIT' to return to the editor
         exactly as you left it.

         If you have a floppy-only system, COMMAND.COM must be avail-
         able or the spawn will fail. Also, some versions of DOS prior
         to 3.x have a problem with the "SHELL" command and may not
         function properly.

         pEDIT tries to keep 50-80k of memory free for the Spawn and
         Dos commands; this will not leave sufficient memory to run
         all programs. Most of the DOS resident commands work; other
         large transient commands will give an error but will not
         cause a problem. Some user-written programs may hang the
         system and force a reboot.

         10.8. Repeat (F08)

         Repeat lets you repeat any key press up to 32767 times. Only
         the next key press - typing, function, Ctrl, Alt - is
         repeated. Again, you cannot repeat functions that ask for
         keyboard input.

         The repeat count is shown by 'Repeat: ' on the message line.
         Use the BackSpace key to correct the count; set it to zero if
         you wish to cancel.

         You can end a repeat loop by pressing the Abort (Ctrl-C) key.

         10.9. Set Autosave

         pEDIT has an 'autosave' function that automatically saves
         your work to disk. If autosave is on, pEDIT will periodically
         do a WriteFile if changes have been made. The 'Working . . .'
         message will appear and the disk access light will come on.
         You will be told how many lines were written.



                                     - 30 -







         10.10. Set Color

         SetColor lets you choose foreground and background colors on
         a color (CGA/EGA/VGA) monitor. For monochrome, the only legal
         combinations are "SET COLOR blk wht" and "SET COLOR wht blk".
         Here 'blk' and 'wht' refer to the mono colors whatever they
         may be - black and white, green and black, etc.

         If you issue the command as "SET COLOR" pEDIT will prompt for
         the foreground and background colors.

         See the Appendix for valid color code names.

         10.11. Set Lines

         SetLines lets you switch between 25 and 43 line mode on an
         EGA or VGA monitor. These advanced monitors can show more
         than the normal 25 lines of text. Note that screen writing
         and scrolling is generally much slower in 43-line mode. The
         SetLines command cannot be given when the screen is split.
         The VGA 50 line mode is not supported.

         10.12. Set Margins

         This command lets you set left and right text margins. The
         default margins are 1 and 80. The left margin must be greater
         than zero and the right margin has to be greater than the
         left. The format of the command is "SET MARGINS left right";
         if "SET MARGINS" alone is used, pEDIT will prompt for the
         values.

         Paragraphs are not automatically reformatted when margins are
         changed. Use FillParagraph for this.

         10.13. Dos

         The Dos function spawns or "shells" a command to DOS for
         execution. The output from the command will be placed in the
         DOS buffer. If only one window is on-screen, pEDIT will spilt
         the screen and map the DOS buffer to the other window.

         The program must load a second copy of COMMAND.COM into
         memory to handle the request. See Spawn for a discussion of
         limitations and cautions.

         10.14. Help (Alt-H)

         Help clears the screen and displays the information contained
         in the help file you specify. pEDIT looks for an environment
         variable called 'PEDITHLP' or the file named PEDIT.HLP in the
         current directory.


                                     - 31 -







         A common use of Help is to display a list of defined keys
         customized for your keyboard.

         10.15. Quit (Alt-Q)

         Use the Quit command to abort an editing session. Abort means
         abort - any changes you have made will be lost. If any User
         buffers have been modified, pEDIT gives you the option of not
         quitting by displaying "Buffer(s) modified - quit (Y/N)? ".
         Enter Y to abort, N to cancel the abort and resume editing.

         10.16. Exit (Ctrl-Z)

         The Exit command terminates the editing session and returns
         you to DOS. The current buffer is automatically written to
         disk if it has been modified. If any other user buffers have
         been altered, pEDIT asks you one at a time if you want to
         write them. Answer Y to save the buffer, N to skip it.



































                                     - 32 -







                         E R R O R   H A N D L I N G

         pEDIT gives you a chance to recover from (1) insufficient
         internal storage space and (2) running out of disk space when
         saving a file. In either case an "ERROR" window will appear
         and notify you of the problem.


                       1. Insufficient Internal Storage

         When pEDIT is first started it checks to see how much free
         memory is available; from this it computes the maximum number
         of lines and characters of text it can handle. Based on these
         values, it then dynamically allocates memory to hold the text
         and line structures.

         If 99% of either of these values is reached, pEDIT informs
         you it can't allocate a line and advises you to "Save your
         work and exit". You can continue to work; however, you will
         get the warning every time more text is added. If you ignore
         the warnings and exceed the allocated space, the program will
         abort.

         There is no recovery from this other than to exit (be sure to
         save your files!) and start over. pEDIT cannot free up memory
         once it has been allocated.


                             2. Out of Disk Space

         When saving a file that currently exists on disk, DOS first
         truncates the file to length zero and then starts to write
         the new sectors. pEDIT does not attempt to verify there is
         sufficient disk space to hold a file being saved. However, it
         can detect "disk full" as it writes a block of text. If this
         does happen, you will be advised to "Increase available space
         on current drive or change drive via WRITE FILE newfile".

         The current file is still in memory and has not been lost;
         however, any file that was on disk is gone - it is imperative
         that you save the stored text! If possible, Spawn out to DOS
         and delete files to free up additional space. Alternately,
         you can switch to a different diskette that has more room. If
         this isn't possible, use "WRITE FILE filespec" where filespec
         specifies another drive. For example, if the current file is
         A:MYFILE.TXT, save the file as B:MYFILE.TXT.







                                     - 33 -







                         C O P Y R I G H T   N O T I C E
                             A N D   W A R R A N T Y


         This document, other accompanying written and disk-based
         specifications, and all referenced and related program
         files are copyrighted by T. G. Muench.

         IBM and PC-DOS are registered trademarks of International
         Business Machines Corporation. MS-DOS is a trademark of
         Microsoft Corporation.


                                  1. Disclaimer

         pEDIT is supplied as is. The author disclaims all war-
         ranties, expressed or implied, including, without
         limitation, the warranties of merchantability and of fitness
         for any purpose. The author assumes no liability for
         damages, direct or consequential, which may result from the
         use of pEDIT.


                                 2. Registration

         pEDIT is a "shareware program" and is provided at no charge
         to the user for evaluation. Feel free to share it with your
         friends, but please do not give it away altered or as part
         of another system. The essence of "user-supported" software
         is to provide personal computer users with quality software
         without high prices, and yet to provide incentive for
         programmers to continue to develop new products. If you find
         this program useful and find that you are using pEDIT and
         continue to use pEDIT after a reasonable trial period, you
         must make a registration payment of $25 to T. G. Muench.

         Commercial users of pEDIT must register and pay for their
         copies of pEDIT within 30 days of first use or their license
         is withdrawn. Site-License arrangements may be made by
         contacting T. G. Muench.

         Anyone distributing pEDIT for any kind of remuneration must
         first contact T. G. Muench at the address below for
         authorization. This authorization will be automatically
         granted to distributors recognized by the (ASP) as adhering
         to its guidelines for shareware distributors, and such
         distributors may begin offering pEDIT immediately. However,
         T. G. Muench must still be advised so that the distributor
         can be kept up-to-date with the latest version of pEDIT.




                                     - 34 -







         You are encouraged to pass a copy of pEDIT along to your
         friends for evaluation. Please encourage them to register
         their copy if they find that they can use it. All registered
         users will receive a copy of the latest version of the pEDIT
         system plus full printed documentation. Note the registered
         version does not have the opening shareware screen.

         Your comments and suggestions are welcomed by writing to
         the author at the address given below. ONLY written
         communications will be accepted. Be sure and reference the
         version number of your copy of pEDIT (use the SHOW BUFFER
         command).

         To register, complete the registration form included in the
         disk file REGISTER.DOC. Then, print it and mail it with $25
         to:

                                  T. G. Muench
                                 P.O. Box 30651
                             Phoenix, AZ 85046-0651

































                                     - 35 -







                           A S S O C I A T I O N   O F
                  S H A R E W A R E   P R O F E S S I O N A L S


         This program is produced by a member of the Association of
         Shareware Professionals (ASP). ASP has established stringent
         standards for its members. The primary goals of the ASP are:

            -  To inform users about shareware programs and about
               shareware as a method of distributing and marketing
               software;

            -  To encourage broader distribution of shareware through
               user groups and disk dealers who agree to identify and
               explain the nature of shareware;

            -  To assist members in marketing their software;

            -  To provide a forum through which ASP members may
               communicate, share ideas, and learn from each other;

            -  To foster a high degree of professionalism among
               shareware authors by setting programming, marketing,
               and support standards for ASP members to follow.

         ASP wants to make sure that the shareware principle works
         for you. If you are unable to resolve a shareware-related
         problem with an ASP member by contacting the member
         directly, ASP may be able to help. The ASP Ombudsman can
         help you resolve a dispute or problem with an ASP member,
         but does not provide technical support for members'
         products. Please write to the ASP Ombudsman at P.O. Box
         5786, Bellevue, WA 98006 or send a Compuserve message via
         Easyplex to: ASP Ombudsman 70007,3536.



















                                     - 36 -





                             A P P E N D I C E S

                          1. List of pEDIT Commands

            MOVE TOP
            MOVE BOTTOM
            MOVE HOME
            MOVE END
            MOVE UP
            MOVE DOWN
            MOVE LEFT
            MOVE RIGHT
            MOVE WORD

            INSERT CHAR
            RESTORE TEXT
            OPEN LINE
            FILL PARAGRAPH
            INDENT
            AUTO INDENT
            CENTER LINE
            CAPITAL WORD
            LOWER WORD
            UPPER WORD
            QUOTE CHAR
            TRANS CHAR

            ERASE CHAR
            ERASE PREV
            ERASE WORD
            ERASE LINE

            FIND
            FIND NEXT
            REPLACE

            GET FILE
            INCLUDE FILE
            WRITE FILE

            SHOW BUFFER
            LIST BUFFERS
            BUFFER
            CHANGE MODE
            CHANGE DIR
            MARK
            GOTO MARK
            LINE

            ONE WINDOW
            TWO WINDOWS




                                     - 37 -







            OTHER WINDOW
            PREV SCREEN
            NEXT SCREEN
            SHIFT LEFT
            SHIFT RIGHT

            LEARN
            REMEMBER
            EXECUTE

            SELECT TEXT
            REMOVE TEXT
            STORE TEXT
            INSERT HERE
            RECALL
            DO COMMAND
            REFRESH SCREEN
            DEFINE KEY
            SHOW KEY
            LIST KEYS
            SPAWN
            REPEAT
            SET AUTOSAVE
            SET COLOR
            SET LINES
            SET MARGINS
            DOS
            HELP
            QUIT
            EXIT























                                     - 38 -







                             A P P E N D I C E S

                           2. Default Key Bindings


         Key Name                Procedure
         --------                ----------------------

         Esc                     DO COMMAND
         BackSpace               ERASE PREV(*)
         Tab                     INSERT CHAR(*)
         Enter                   INSERT CHAR(*)

         F01                     FIND
         F02                     MOVE WORD
         F03                     FIND NEXT
         F04                     ERASE WORD
         F05                     CHANGE MODE
         F06                     CHANGE DIR
         F07                     LEARN
         F08                     REPEAT
         F09                     RESTORE TEXT
         F10                     WRITE FILE
         F11                     STORE TEXT
         F12

         Home                    MOVE HOME
         End                     MOVE END
         Pgup                    PREV SCREEN
         Pgdn                    NEXT SCREEN
         Up                      MOVE UP
         Down                    MOVE DOWN
         Left                    MOVE LEFT
         Right                   MOVE RIGHT
         Ins                     INSERT HERE
         Del                     REMOVE TEXT
         Ctrl-Home               MOVE TOP
         Ctrl-End                MOVE END
         Ctrl-Left               SHIFT LEFT
         Ctrl-Right              SHIFT RIGHT
         Ctrl-Pgup
         Ctrl-Pgdn
         Ctrl-Enter              AUTO INDENT

         Ctrl-A
         Ctrl-B                  RECALL
         Ctrl-C                  ABORT(*)
         Ctrl-D                  ERASE CHAR
         Ctrl-E
         Ctrl-F
         Ctrl-G


                                     - 39 -







         Ctrl-H                  BackSpace
         Ctrl-I                  Tab
         Ctrl-J                  AUTO INDENT
         Ctrl-K                  ERASE LINE
         Ctrl-L
         Ctrl-M                  Enter
         Ctrl-N
         Ctrl-O                  OPEN LINE
         Ctrl-P
         Ctrl-Q
         Ctrl-R                  REMEMBER
         Ctrl-S
         Ctrl-T
         Ctrl-U
         Ctrl-V                  QUOTE CHAR
         Ctrl-W                  REFRESH SCREEN
         Ctrl-X
         Ctrl-Y
         Ctrl-Z                  EXIT

         Alt-A
         Alt-B                   BUFFER
         Alt-C                   CAPITAL WORD
         Alt-D
         Alt-E
         Alt-F                   FILL PARAGRAPH
         Alt-G                   GET FILE
         Alt-H                   HELP
         Alt-I                   INCLUDE FILE
         Alt-J
         Alt-K
         Alt-L                   LOWER WORD
         Alt-M                   SET MARGINS
         Alt-N
         Alt-O
         Alt-P
         Alt-Q                   QUIT
         Alt-R                   REPLACE
         Alt-S                   SELECT TEXT
         Alt-T                   TRANS CHAR
         Alt-U                   UPPER WORD
         Alt-V
         Alt-W
         Alt-X
         Alt-Y
         Alt-Z
         Alt-1                   ONE WINDOW
         Alt-2                   TWO WINDOWS


                      (*) These keys cannot be redefined


                                     - 40 -







                             A P P E N D I C E S

                        3. Default Initialization File

         pEDIT comes with a sample initialization file, PEDIT.INI.
         This file must be in the current directory or be defined to
         the DOS environment as PEDITINI.

         A pEDIT initialization file is a simple ASCII text file and
         can be edited. The editor ignores blank lines and treats
         anything after an exclamation point as a comment. Only two
         commands are recognized: DEFINE_KEY() and SET(). Note the
         underscore in DEFINE_KEY and the use of parentheses. The init
         file commands can be uppercase, lowercase or mixed.

         DEFINE_KEY defines a key to pEDIT when the editor is invoked.
         Obviously, no one would want to have to define every key
         every time they wanted to edit something. For example, the
         line DEFINE_KEY(Alt-G, Get_File) would bind the key Alt-G to
         the procedure GetFile. The underscore is required for any
         pEDIT command that is made up of 2 words.

         SET is used to define the editing environment. If you wanted
         pEDIT to always come up in color using blue on a white back-
         ground, your would put SET (COLOR, BLU, WHT) in the init
         file. The above example would be the same as entering the
         command "SET COLOR BLU WHT" from within pEDIT.

         You don't have to use the initialization file supplied with
         the editor. You can set up any keyboard mapping you want -
         make pEDIT work like WordStar, Emacs, whatever.


                            4. Default Help Files

         The editor requires a file named PEDIT.HLP be available to
         use the Help command. When Help is invoked, pEDIT displays
         the contents of PEDIT.HLP in a HELP screen. Again, this file
         must be in the current directory or be defined to the DOS
         environment as PEDITHLP using the SET command.

         pEDIT comes with two sample help files. PED101.HLP is for the
         101-key (also called the extended or enhanced) keyboard and
         PED84.HLP is for the 84-key or standard keyboard. The 84-key
         model was the original IBM AT keyboard and does not have
         additional keys between the typing keys and numeric keypad.

         These are text files and can be edited as necessary to fit
         your configuration. If the provided files don't match what
         you have, copy the one that is closest and edit it as needed.



                                     - 41 -







                             A P P E N D I C E S

                          5. DOS File Specification

         The following is a brief discussion of the PC/MS-DOS file
         specification. For more detail, refer to the DOS manuals.

         A full DOS file specification is of the format:

             D:\PATH\FILENAME.TYP

                 D: = drive (A,B,C)
              \PATH = path (directory, subdirectory)
           FILENAME = file name (max. 8 characters)
                TYP = file type (max. 3 characters)

         DOS uses a hierarchial directory structure made up of a root
         directory and underlying sub-directories. This is sometimes
         called an inverted tree structure:

                                   \ (root)
                                      |
                          -------------------------
                         |            |            |
                       \DOS                     \TOOLS
                                                   |
                                             -------------
                                            |             |
                                          \BASIC         \C


         Subdirectory names are separated by the backslash character
         (\). The root on drive C: is denoted as C:\ while the others
         above would be

             C:\DOS                  C:\TOOLS
                                         C:\TOOLS\BASIC
                                         C:\TOOLS\C

         The full file name need not be specified. DOS will 'fill in'
         any missing parts with your current, default directory. For
         example, if you are in the directory C:\TOOLS and give the
         name MYBATCH.BAT, it is the same as C:\TOOLS\MYBATCH.BAT.










                                     - 42 -







                             A P P E N D I C E S

                                6. Color Codes


         BLK                   Black
         BLU                   Blue
         GRN                   Green
         CYN                   Cyan
         RED                   Red
         MAG                   Magenta
         BRN                   Brown
         WHT                   White
         GRY                   Grey
         LBL                   Light Blue
         LGR                   Light Green
         LCY                   Light Cyan
         LRD                   Light Red (Pink)
         LMG                   Light Magenta
         YEL                   Yellow
         BWH                   Bright White


                The light colors are sometimes called 'bright'





























                                     - 43 -
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```





                           pEDIT - the personal EDITor

                           pEDIT  COPYRIGHT 1989, 1990


                               _______
                          ____|__     |               (tm)
                       --|       |    |-------------------
                         |   ____|__  |  Association of
                         |  |       |_|  Shareware
                         |__|   o   |    Professionals
                       -----|   |   |---------------------
                            |___|___|    MEMBER


         This document, other accompanying written and disk-based
         specifications, and all referenced and related program
         files are copyrighted by T. G. Muench.


                                    DISCLAIMER

         pEDIT is supplied as is. The author disclaims all war-
         ranties, expressed or implied, including, without
         limitation, the warranties of merchantability and of fitness
         for any purpose. The author assumes no liability for
         damages, direct or consequential, which may result from the
         use of pEDIT.
         

                                   REGISTRATION

         pEDIT is a "shareware program" and is provided at no charge
         to the user for evaluation. Feel free to share it with your
         friends, but please do not give it away altered or as part
         of another system. The essence of "user-supported" software
         is to provide personal computer users with quality software
         without high prices, and yet to provide incentive for
         programmers to continue to develop new products. If you find
         this program useful and find that you are using pEDIT and
         continue to use pEDIT after a reasonable trial period, you
         must make a registration payment of $25 to T. G. Muench.
         
         Commercial users of pEDIT must register and pay for their
         copies of pEDIT within 30 days of first use or their license
         is withdrawn. Site-License arrangements may be made by
         contacting T. G. Muench.
         
         Anyone distributing pEDIT for any kind of remuneration must
         first contact T. G. Muench at the address below for
         authorization. This authorization will be automatically
         granted to distributors recognized by the (ASP) as adhering
         to its guidelines for shareware distributors, and such
         distributors may begin offering pEDIT immediately. However
         T. G. Muench must still be advised so that the distributor
         can be kept up-to-date with the latest version of pEDIT.






         You are encouraged to pass a copy of pEDIT along to your
         friends for evaluation. Please encourage them to register
         their copy if they find that they can use it. All
         registered users will receive, on IBM 5.25" DSDD disk, the
         latest version of the pEDIT software (without the opening
         shareware screen) plus full printed documentation.


                                   HOW TO ORDER

         To order pEDIT, fill out the order form at the end of this
         documentation, and send a check or money order (in US funds
         only) to:

                                  T. G. Muench
                                 P.O. Box 30651
                              Phoenix, AZ 85046-0651

         pEDIT costs $25 per copy. Purchase discounts are available
         in the form of corporate site licenses. Write to the author
         for more information.
         
         Please add $5.00 for shipping to Alaska, Hawaii and Canada,
         and $10.00 for  shipping to Europe and other overseas
         locations.
         






                                 pEDIT Order Form

     Name:          ______________________________________
     
     Address:       ______________________________________
     
                    ______________________________________
     
     City:          ______________________________________
     
     State:         _______________________ Zip: _________
     
     Telephone:     (     )_______________________________

     
     Item                                      Quantity      Total
     --------------------------------------------------------------
     Copies of pEDIT @$25                   |_____________|________

     Shipping Charges:      U.S.:  $ 0.00
                          Canada:  $ 5.00
                        Overseas:  $10.00   |____________|_________

     Total:                                              |_________
     
     Payment Type:  [ ] Check
                    [ ] Money Order

     Comments _____________________________________________________

     ______________________________________________________________


     Mail Completed Form to:

                                  T. G. Muench
                                 P.O. Box 30651
                              Phoenix, AZ 85046-0651
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```





                           pEDIT - the personal EDITor

                           pEDIT  COPYRIGHT 1989, 1990


                               _______
                          ____|__     |               (tm)
                       --|       |    |-------------------
                         |   ____|__  |  Association of
                         |  |       |_|  Shareware
                         |__|   o   |    Professionals
                       -----|   |   |---------------------
                            |___|___|    MEMBER


         This document, other accompanying written and disk-based
         specifications, and all referenced and related program
         files are copyrighted by T. G. Muench.

         Disk Vendors who wish to distribute pEDIT must satisfy one
         of the following requirements:

          1) The vendor must have been accepted as an associate
             member of the Association of Shareware Professionals;
             or

          2) The vendor must agree to abide by the standards for
             disk vendors, as set forth by the Association of
             Shareware Professionals.

         Vendors who do not meet these requirements are not per-
         mitted to distribute pEDIT.

         For information on obtaining ASP-approved status, contact:

            Vendor Membership Coordinator
            Association of Shareware Professionals
            PO Box 5786
            Bellevue, WA 98006

         Under no circumstances may pEDIT be distributed without all
         accompanying documentation files (including this file), all
         programs, and other materials provided with the official
         copies from T. G. Muench.

         Following is the full description of pEDIT to be used if
         space permits:

             Full featured split screen editor with ability to edit up
             to 4 files at one time. Definable keys, insert/overstrike
             modes, key macros, repeat, auto-indent, horiz. scrolling,
             autosave, WP features like settable margins, word wrap,
             center line, change case. Recall/edit any previous com-
             mand, spawn to DOS, DOS buffer, 43-line mode, colors.
             File size limited only by memory. Includes full documen-
             tation and installation program.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2352

     Volume in drive A has no label
     Directory of A:\

    READ     ME        806   4-15-90   4:05p
    PEDIT    DOC     80983   4-26-90  10:10p
    PEDIT    EXE    129246   5-08-90   8:22p
    PEDIT    INI      2089   2-06-90   7:03p
    PED101   HLP      1527   8-14-89   9:21p
    PED84    HLP      1350  11-12-89   9:43p
    REGISTER DOC      5134   4-24-90   9:07p
    VENDOR   DOC      2395   4-26-90   9:52p
    INSTALL  EXE      7818   4-26-90   7:55p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       786  10-05-90   2:45a
    FILE2352 TXT      2813  10-05-90  10:19a
           12 file(s)     234987 bytes
                           79872 bytes free
