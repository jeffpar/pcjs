---
layout: page
title: "PC-SIG Diskette Library (Disk #2345)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2345/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2345"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ULTIMATE SCREEN MANAGER"

    The ULTIMATE SCREEN MANAGER makes it easy for you to design colorful
    screens that can be displayed from both batch and executable programs.
    Windows, menus, and data entry screens with different data entry types
    are supported.  Full mouse support can be included in any screen you
    create.  Screens can be designed to support both monochrome and color
    attributes.  The attribute mask is automatically adjusted to the type of
    display monitor currently active.  The ULTIMATE SCREEN MANAGER provides
    the ability to display screens from a batch file using environment
    variables to communicate data.  Information entered or changed on the
    screen will be present in the corresponding environment variables when
    control is returned to the batch file.  The screen editor lets you
    design screens to look exactly like you want them to look.
    
    The ULTIMATE SCREEN MANAGER comes with a demo program and screens to
    demonstrate the value and ease of its use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## INVOICE.DOC

{% raw %}
```



       Ultimate Screen Manager registration/order form


       Name.....:__________________________________________________________

       Company..:__________________________________________________________

       Address..:__________________________________________________________

       City.....:___________________________ State:_____  ZIP:_____________

       Telephone, Home: (_____) _____-_______   Work: (_____) _____-_______

       Where did you receive your Shareware copy of the software?

       __________________________________________________ Version:_________

       Comments: (use back of form if necessary)

       ____________________________________________________________________

       Invoice:                      Diskette size: ___ 5-1/4",  ___ 3-1/2"

         A) Ultimate Screen Manager registration      ($39.00 ea) _____.___

         B) 'C' library support (no source)           ($25.00 ea) _____.___
                                    Microsoft-C v5.1
         C) 'C' library support (incl source)         ($45.00 ea) _____.___
                                    Microsoft-C v5.1
         Get both A & B and save $4.00! (no source)   ($60.00   ) _____.___

         Get both A & C and save $9.00! (incl source) ($75.00   ) _____.___

                                      Calif Sales Tax             _____.___

                                      Shipping                        3.50
                                                                 -----------

                                      Subtotal                    _____.___

         Addtional shareware version copies: Qty ___ ($ 6.75 ea)  _____.___
                                                                 -----------

                                      Total enclosed              _____.___
                                                                 ===========

       Site licenses are also available.

       Prices are subject to change without notice.

       Send your order to:

         Martin D. Flynn
         MDFlynn Associates
         P.O. Box 5034
         Redwood City, Ca. 94063
         (415) 487-6482

```
{% endraw %}

## USM.DOC

{% raw %}
```







             +---------------------------------------------------------+
             |                                                         |
             |                  Ultimate Screen Manager                |
             |                                                         |
             |               Installation/Operations Guide             |
             |                    Shareware Version                    |
             |                                                         |
             +---------------------------------------------------------+










































                                Version 1.19 - 12/18/89
                                  Manual revision 1.03



                                                                            1




                                   Introduction
       
       
         - We reserve the right to make improvements in the product
           described in this manual at any time and without notice.
       
         - Due to the size of the entire Ultimate Screen Manager package,
           not all features described in this manual may be present in the
           shareware version of the Ultimate Screen Manager.  Features not
           available in the shareware version will be so noted.  Chapters 4
           through 8 will be omitted from the shareware version manual as
           well to save disk space.  These features are available in the
           registered version of the Ultimate Screen Manager.
       
         - The software described herein is a copyrighted LICENSE PROGRAM
           and the property of MDFlynn Associates.
       
         - Under no circumstances may this product be sold without the
           express written permission of MDFlynn Associates.
       
         - Please read the Terms and Conditions contained in the Appendix
           for further details.
       
         - Use of this product indicates your acceptance of these Terms and
           Conditions.
       
         - Although every attempt has been made to verify the accuracy of
           this document, we cannot assume any liability for errors or
           omissions.
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
         - IBM and IBM PC-DOS are registered trademarks of International
           Business Machines.
         - MS-DOS is a registered trademark of Microsoft Corporation.
         - HP LaserJet is a registered trademark of Hewlett-Packard
           Corporation.
       
       
       
       
                       (C) Copyright 1989 - MDFlynn Associates
                                All Rights Reserved
                       P.O. Box 5034, Redwood City, Ca. 94063
                                  (415) 487-6482

                                                                            2




                                 Table of Contents
       
       Chapter 1: The Ultimate Screen Manager
          1.1  Overview
          1.2  Special notation and conventions
          1.3  PC system requirements
          1.4  Installation
       
       Chapter 2: The Ultimate Screen Manager main menu
          2.1  Displaying the main menu
          2.2  Menu options
       
       Chapter 3: Creating and Editing Screens
          3.1  Screen fields and function keys
          3.2  Loading a screen member
          3.3  Editing a screen member
               3.3.1  Editing fields.
               3.3.2  Screen member options menu.
               3.3.3  Creating a menu.
          3.4  Saving a screen member
          3.5  Library options menu
       
       Chapter 4: Testing Screens (registered version)
       
       Chapter 5: Language Support (registered version)
       
       Chapter 6: Printing Screens (registered version)
       
       Chapter 7: Creating Screen Image Snapshot Files (registered version)
       
       Chapter 8: Ultimate Screen Manager Configuration (registered version)
       
       Chapter 9: Displaying Screen from Batch Files
          9.1  Introduction / Overview
          9.2  System requirements and setup
          9.3  Using DSPLY
          9.4  Special batch file utilities
          9.5  Example
       
       Appendices:
         A - Glossary
         B - Scan Code Table
         C - Program License Agreement and Limited Warranty















                                                                            3




            +---------------------------------------------------------+
            |                                                         |
            |                        CHAPTER 1                        |
            |                The Ultimate Screen Manager              |
            |                                                         |
            +---------------------------------------------------------+
       
       
       ======================================================================
       1.1)  Overview
       
       The Ultimate Screen Manager is the most versatile application screen
       management system available.  The following is a partial list of
       features that are available from the Ultimate Screen Manager.
       
         - Very powerful screen editor to design screens to look exactly
           like you want them to look.
         - Full mouse support from created screens.
         - Supports windows, menus, and data entry screens with several
           data types.
         - Screens may be designed to support both monochrome and color
           attributes.  The attribute mask is automatically adjusted to
           the type of display monitor currently active.
         - Ability to display screens from a batch file using environment
           variables to communicate data.
         - Several environment variable support utilities which can be used
           from within a batch file.
       
       Available in the registered version of the Ultimate Screen Manager:
         - Edit key functions may be reconfigured to fit those to which you
           may be more accustom.
         - Screens may be easily tested prior to using them in a program.
         - Printer support; Print screens to output device or file, plus
           external utility to support a true screen print on HP LaserJet
           compatible printers.
         - Text screen snapshots can be taken of existing application screens
           and then used within the Ultimate Screen Manager to add to your
           own application.
         - Additional utility to print screen snapshots on a Hewlett-Packard
           LaserJet printer suitable for cut-and-paste into your own
           documentation.
         - A printed manual documenting the features of the Ultimate Screen
           Manager.
       
       Available with the 'C' language support package:
         - Many 'C' library functions to support the screen programming
           interface from within 'C' (Microsoft C v5.1).
         - Source to the 'C' library functions is included.
         - Screens may be maintained separately from programs.
         - If desired, screens may be compiled along with programs.
         - A separate technical manual is provided to document all supporting
           functions for the screen programming interface.
       
       The following programs and files were included on the installation
       diskette:
       
          README       - Text file containing the latest information for the

                                                                            4




                         Ultimate Screen Manager.  Read this file for the
                         most current list of utilities and features.
          USM.EXE      - The main screen editor program.
          USM.SCR      - The screens used by USM.EXE.
          CHKENV.BAT   - Check the size of the environment area.
          DSPLY.EXE    - Utility to display screens and menus from a batch
                         file.  Environment variable may be used to transfer
                         data to and from the screen.
          RMVVAR.EXE   - Utility to remove all environment variables that
                         match the specified partial variable name.
          LOGTIME.EXE  - Set specified environment variable to current
                         formatted date and time.
          SUBSTR.EXE   - Set specified environment variable to a substring of
                         another environment variable.
          ENVSIZE.EXE  - Program to report on the size of the current
                         environment.
          ENVPATCH.EXE - Program to patch DOS version 2.0 through 3.2 to
                         increase the size of the environment area.
          EXAMPLE.BAT  - Example menu and screen display batch file.
          EXAMPLE.SCR  - Example menu and screen display file.
       
       Available in the registered version of the Ultimate Screen Manager:
       
          USM.CFG      - Keyboard and printer configuration for USM.EXE.
          USMCFG.EXE   - Program to create a configuration file from key
                         function definition file.
          USMCFG.SRC   - Sample source file containing printer and key
                         function definitions.
          SNAPSHOT.EXE - Memory resident program used for capturing text
                         screen images.
          LSRPRT.EXE   - Utility to print captured screen images to an HP
                         LaserJet compatible printer.
          USM_C.CMP    - Language support module schema for creating
                         compilable 'C' language screen source.
          USM_ASM.CMP  - Language support module schema for creating
                         compilable assembler language screen source.
       
       Available with the 'C' language support package:
       
          SCFTN.H      - 'C' header file for use in programs which use the
                         screen supporting library functions.
          SC*.H        - Other 'C' header files used for compiling library
                         functions.
          SCL*.C       - 'C' source to supporting library functions.
          SCL*.ASM     - Assembler source to supporting library functions.
          SCLIBL.LIB   - Large memory model library.
          SCLIBM.LIB   - Medium memory model library.
          SCLIBS.LIB   - Small memory model library.
          SCLIB.MAK    - Make file to create the screen support libraries.
          SCLIB.BAT    - DOS batch file to call make file SCLIB.MAK.
       
       Note: Read the file README found on the distribution diskette to for
       a list and description of other files that may also be present on the
       diskette.
       
       ======================================================================
       1.2)  Special notation and Conventions

                                                                            5




       
       The various screens displayed by the Ultimate Screen Manager have a
       common set of keys that perform the same function from screen to
       screen.  The common set of keys are described below.  Other keys
       performing more specific functions will either be listed at the
       bottom of the screen, or will be described on a help screen if one
       is available on the particular screen.
       
       Using menus:
          - Menu options may be selected by using the following keys:
            up, down, left, right, home, end.  Or, by pressing the first
            letter of the desired option.
          - A selected menu option may be executed by pressing return.
          - If a mouse is installed, menu options may be selected with the
            mouse cursor and the left mouse button.  Also, function keys may
            be executed by placing the mouse cursor on the desired function
            key (displayed on the screen) and pressing a mouse button.
       
       Using data screens:
          - The following keys have special meaning while using the Ultimate
            Screen Manager data entry screens:
              up      - move cursor up one row
              down    - move cursor down one row
              left    - move cursor left one column
              right   - move cursor right one column
              home    - move cursor to first defined field
              end     - move cursor to last defined field
              tab     - position cursor in first position of next field
              backtab - position cursor in first position of prior field
              backspc - clear character and backspace cursor one position
              ^return - clear characters to right of cursor, then tab
              return  - position cursor in first field on next line
          - The names F1 through F9 refer to the nonshifted function keys
            1 through 9.
          - The names A1 through A9 refer to the alternate shifted function
            keys 1 through 9.
          - The names S1 through S9 refer to the normal shifted function keys
            1 through 9.
          - The names C1 through C9 refer to the control shifted function
            keys 1 through 9.
          - If a mouse is installed, placing the mouse cursor within a non-
            protected field and pressing the left mouse button will bring the
            cursor to that field.  Also, function keys may be executed by
            placing the mouse cursor on the desired function key and pressing
            a mouse button.  Note: Functions which delete fields or screen
            members cannot be executed with the mouse.
       
       Miscellaneous:
          - The term 'string' refers to a character array containing a series
            of printable ascii characters and is terminated with a NULL (0).
          - The symbol '^' may be used in various areas in this manual and in
            the Ultimate Screen Manager program to represent the 'control'
            shift of a key.  Example: ^A means control_shift-'A'.
          - The names ENTER and RETURN are synonymous, referring to carriage
            return.
       
       ======================================================================

                                                                            6




       1.3)  PC system requirements:
       
       In order to take full advantage of the features of the Ultimate Screen
       Manager, you will need the following minimum hardware configuration:
       
          - An IBM PC, XT, or AT, or a 100% IBM compatible.
            At least 256k memory should be available for the screen editor.
       
          - At least one diskette drive.
            A hard disk is highly recommended.
       
          - Microsoft Corp. MS-DOS 2.0 or above.
            MS-DOS 3.0 or above is recommended.
       
          - MDA, CGA, EGA, or VGA monitor.
            A color monitor (EGA or VGA) is recommended.
       
          - (Optional) A Microsoft compatible mouse is recommended.
       
       ======================================================================
       1.4)  Installation
       
       Installation on a hard disk:
       
         1) Place the Ultimate Screen Manager distribution diskette into
            drive A.
       
         2) Go to the drive and directory where you want to copy the Ultimate
            Screen Manager.
            - If the directory does not exist, you may first use the DOS MD
              (make directory) command to create the subdirectory on the
              drive where you want the Ultimate Screen Manger to reside.  For
              example, type MD \USM and press ENTER to create a subdirectory
              called USM.
            - To change to the Ultimate Screen Manager directory, use the DOS
              CD (change directory) command.  For example, type CD \USM and
              press ENTER.
       
         3) Type the DOS command COPY A:*.* and press ENTER.
            - DOS will copy the contents of the Ultimate Screen Manager
              diskette to currently logged drive and directory.
       
         4) Type the Ultimate Screen Manager utility CHKENV and press ENTER.
            - This Ultimate Screen Manager utility will examine the size of
              the environment area and inform you if its size should be
              increased.
            - The operations manual will contain more information about
              increasing the size of your environment area.
       
         5) If you have a DOS version 2.XX, then add the following line to
            your AUTOEXEC.BAT file:
       
               SET USM=drive:\path
       
               ie. SET USM=C:\USM
       
            This will allow the program USM.EXE to find the screen library

                                                                            7




            USM.SCR when called from another subdirectory.  This is not
            necessary when used with DOS version 3.XX.
       
       Installation on a diskette:
       
       Although the Ultimate Screen Manager application screen design
       utilities will function from diskette, it is not recommended.  If your
       configuration requires the use of a diskette drive for your primary
       drive, then the following will provide for a minimal usage
       configuration and still allow enough room on your diskette for your
       own application screens.  Copy the following files to a formatted
       diskette:
       
              USM.EXE     - Main Ultimate Screen Manager screen editor
              USM.SCR     - Screens used by USM.EXE
              DSPLY.EXE   - Batch file screen display utility
              RMVVAR.EXE  - Remove environment variable utility
              ??????      - Plus any other routines you feel you would use








































                                                                            8




            +---------------------------------------------------------+
            |                                                         |
            |                        CHAPTER 2                        |
            |          The Ultimate Screen Manager Main Menu          |
            |                                                         |
            +---------------------------------------------------------+
       
       ======================================================================
       2.1) Displaying the Main Menu
       
       To display the Ultimate Screen Manager main menu, enter the following
       command:
       
               USM [library [member]] [/N]
       
       Where:  'library' = (optional) name of the screen library to edit.
               'member'  = (optional) name of the screen member to edit.
               '/N'      = (optional) disable mouse support, if specified.
       
       The Ultimate Screen Manager main menu will then be displayed.
       
       ======================================================================
       2.2) Menu options.
       
       From the main menu the following options are available:
       
       EDIT.......Edit/Create/Update/Delete screen members.
           This option will display a screen which will allow the maintenance
           screen library members.
       
       DOS........Execute a DOS shell.
           This option will temporarily execute a DOS shell in which you may
           enter DOS commands.  Entering 'EXIT' at the DOS prompt will cause
           control to return to the Ultimate Screen Manager main menu.
       
       REGISTER...Registration information.
           This option will display a screen which gives brief information
           about how to register for the use of the Ultimate Screen Manager,
           and what all registrants receive.
       
       To select an option use the up/down keys or press the first letter of
       option name (the mouse cursor and left mouse button may also be used
       when available).  The selected option will he shown in reverse video.
       To execute the option press the Enter/Return key (or the left mouse
       button if available).  The screen corresponding to the selected option
       will display.
       
       The function key available on the main menu are as follows:
       
          RETURN  - Execute selected option.
          FTN10   - Exit to calling program after checking the modify flag.
                    If a screen member has been modified, but not saved, a
                    warning is displayed and the function key is ignored.
          ALT10   - Exit to calling program without checking the modify flag.
                    The program will exit to the caller even if a screen
                    member has been modified but not saved.


                                                                            9




            +---------------------------------------------------------+
            |                                                         |
            |                        CHAPTER 3                        |
            |               Creating and Editing Screens              |
            |                                                         |
            +---------------------------------------------------------+
       
       ======================================================================
       3.1) Screen fields and Function Keys
       
       From the main menu, selecting the EDIT option will display the screen
       allowing access to the screen editing functions.  The following is a
       list of the data fields and their usage:
       
       Screen library - The name of a new or existing screen library for
          editing.  If no extension is specified, the extension '.SCR' will
          be appended to the screen library name.
       
       Screen member - The name of a new or existing screen member to edit.
          If this field is left blank only the library member list will be
          displayed.
       
       Default screen snapshot - The default screen image to load into the
          work area to be edited.  The screen image file must be a file 4000
          bytes in length containing an exact video image extracted from the
          display video buffer.  The utility 'SNAPSHOT.EXE' may be used to
          extract desired text screens from various applications for loading
          into the editor, and is included with the registered version of the
          Ultimate Screen Manager.
       
       Displayed attribute mask - The Ultimate Screen Manager will support up
          to two attribute masks for displaying screens on monochrome or
          color monitors.  Each screen member has one loaded attribute mask
          and may have one alternate attribute mask.  The loaded attribute
          mask (see values below) will be displayed in this field.  The
          alternate attribute mask (if any) is displayed in parentheses.  If
          no alternate attribute mask exists, then the value in parenthesis
          is 'N' for none.  Specifying the alternate attribute mask value in
          this field will cause the loaded and alternate masks to be swapped.
          The following is a list of the valid attribute mask values:
       
             G - force a single attribute mask that will be used for both
                 color and monochrome monitors.  When this value is specified
                 any existing alternate attribute mask will be removed.
             C - force the color attribute mask to display.
             M - force the monochrome attribute mask to display.
             N - the last attribute mask edited will be displayed.
       
          Once a screen has been created and painted with one attribute mask,
          the alternate attribute mask should be loaded and the screen
          repainted.  This will insure that both attribute masks have been set
          properly.  Do the same when modifying an existing screen member;
          modify both attribute masks to make sure they are set properly.
       
       Window size - The row/column dimensions of the screen window to
          display.  The valid number of rows can range from 1 to 25.  The
          valid number of columns can range from 1 to 80.  Window size entry

                                                                           10




          which is invalid will be changed to 25 by 80.  This value is saved
          with the screen member.
       
       Window position - The row/column position to place the upper left
          corner of the window.  This position includes only the actual
          displayed window and not the box that may be drawn around the
          window.  The valid row position can range from 0 to 24.  The valid
          column position can range from 0 to 79.  The upper-left position on
          the screen is row 0, column 0.  This value specifies only a default
          position, and may be overridden when then window is displayed.
       
       Window box type - The line type of the box to be drawn around the
          window.  The valid values are as follows:
       
                0 - no box
                1 - single line box
                2 - double line box
                3 - double horizontal, single vertical line box
                4 - single horizontal, double vertical line box
                5 - ASCII character 176
                6 - ASCII character 177
                7 - ASCII character 178
                8 - ASCII character 219 (solid character)
            9..14 - reserved
               15 - shadow
       
       Window Background snapshot file - The background screen image onto
          which the window is displayed for editing.  See 'Default screen
          snapshot' for a description of the file format of the snapshot
          file.  If left blank, then the default background will be blank.
       
       Screen library text - A brief text description of the screen library
          may be entered here.
       
       Member list - This is a display-only list of the members contained in
          the specified screen library.
       
       The valid function keys are as follows:
       
           FTN01 - Display a brief help screen.
           FTN02 - Load specified member from specified library.  If the
                   member name is left blank, then only the member list of
                   the specified library will be displayed.
           FTN03 - Edit the loaded screen member.  If no member has been
                   loaded, a warning message indicating this will be
                   displayed and the function key will be ignored.
           FTN04 - Save the edited screen member with the specified member
                   name in the specified library.  If no member has been
                   loaded, a warning message indicating this will be
                   displayed and the function key will be ignored.
           FTN10 - Return to the main menu.
           ALT01 - Display the screen library options menu.
           ALT04 - Delete the specified member from the specified screen
                   library.
       
       ======================================================================
       3.2) Loading a screen member.

                                                                           11




       
       To display a screen library member list only:
       
         - Enter an existing screen library, leaving the screen member field
           blank, then press FTN02.  If the screen library is found, and the
           library contains screen members, then they will be displayed in
           the member list section of the screen.
       
       To load a screen member:
       
         - Enter the desired new or existing screen library and member name,
           then press FTN02 (Note: If a mouse is available, then a member may
           be selected from the member list with the mouse cursor and the
           left mouse button). If the member is present, then it will be
           loaded, otherwise the work area is cleared ready for a new screen.
           A message will be displayed at the bottom of the screen indicating
           the result of the screen member load.
         - The loaded, or new, screen member may now be edited by pressing
           FTN03.
       
       ======================================================================
       3.3) Editing a loaded screen member.
       
       To display the screen member work area for editing a screen member,
       press FTN03.  The loaded screen member will display ready for editing.
       
       Cursor movement keys:
       
           HOME  - Move the cursor to the first row and first column.
           END   - Move the cursor to the last row and first column.
           ^LEFT - Move the cursor to the first character of the prior word.
           ^RGHT - Move the cursor to the first character of the next word.
           TAB   - Move the cursor 5 columns to the right.
           BTAB  - Move the cursor 5 columns to the left (backtab).
           ^HOME - If the cursor is not positioned on a field, then the
                   cursor will be repositioned to the first field on the
                   screen (the first field is the field with lowest cursor
                   sequence number, not necessarily the highest one on the
                   screen). If the cursor is currently positioned on a field
                   then it will be repositioned to the next field on the
                   screen.
       
       The following cursor movement keys are also used by the line draw mode
       when it is active.  If line draw mode is active, then the appropriate
       line character from the selected line draw mode will also be
       displayed. To set line draw mode, see the member option menu.
       
           UP    - Move the cursor up one row.  Wrap to the bottom of
                   the screen if the cursor is already on the top row.
           DOWN  - Move the cursor down one row.  Wrap to the top of the
                   screen if the cursor is already on the bottom row.
           LEFT  - Move the cursor left one column.  Wrap to the right hand
                   column and the prior row if the cursor is already in the
                   first column.
           RGHT  - Move the cursor right one column.  Wrap to the left hand
                   side of the screen and the next line if the cursor is
                   already in the last column.

                                                                           12




       
       Available function keys:
       
           INS   - Toggle character insert mode.
           DEL   - Delete character at the current cursor position.
       
           FTN01 - Display help screens.
           FTN02 - Print saved character and attribute.
           FTN03 - Toggle cursor position from end to beginning of the
                   current line.
           FTN04 - Delete all characters up to the next word or field.
                   Fields will also be deleted.
           FTN05 - Mark the beginning of a block.
           FTN06 - Mark the end of a block.
           FTN07 - Mark the beginning of a field definition.
           FTN08 - Mark the end of a field definition and create the field.
           FTN09 - Edit field attributes.  The cursor must be positioned on a
                   defined field.
           FTN10 - Reset block markers and turn off any special character
                   modes.
       
           ALT01 - Display the member options menu.
           ALT02 - Save the character and attribute, under the current cursor
                   position, in a special hold area.
           ALT04 - Delete all characters and fields on current line.
           ALT05 - Move marked block to current cursor position.
           ALT06 - Copy marked block to current cursor position.  If the
                   marked block contains fields, they will be duplicated in
                   the copy of the mark block.
           ALT07 - Mark the beginning of a Ghost field definition.  A Ghost
                   field is a field that does not perform any output from the
                   data buffer or allow input from the keyboard.  They are
                   used mainly for mouse control fields.  Any character or
                   attribute may be entered on top of a ghost field.
           ALT09 - Increase the length of the field under the current cursor
                   position by one character.  The cursor must be positioned
                   on a defined field.
           ALT10 - Exit from the work area and return to the editor control
                   screen.
           ALT_B - Draw box from upper-left start of block marker to
                   lower-left end of block marker.
           ALT_C - Display full color palette menu.  This screen allows
                   selecting a color display attribute from a list of all
                   possible attribute combinations, and assigning it to the
                   temporary color attribute holding area.  The temporary
                   color attribute may be displayed by pressing CTL10 on the
                   screen edit work area (see CTL10 below).
           ALT_D - Delete all characters and fields within selected marked
                   block.
           ALT_E - Toggle cursor position between first and last column of
                   current line.
           ALT_F - Delete field under current cursor position.
           ALT_L - Turn on line draw mode with last (or default) selected
                   line type.
           ALT_M - Set arrow keys to a window reposition (movement) mode.
                   When this key is pressed, the border around the window
                   will appear as a double blinking line.  When the arrow

                                                                           13




                   keys are pressed, the window will move one character in
                   that direction.  When the window has been placed in the
                   desired place, press F10, this will reset the window
                   movement mode.
           ALT_P - Display custom color palette.  This screen is display
                   only.  Press F10 to return control to the edit work area.
           ALT_R - Remove any window boundary limitations.  If a window is
                   currently in the work area, pressing this key will cause
                   the window dimensions to be removed, causing the full
                   screen to become part of the display.  The window may be
                   redimensioned with the start and end block markers, and
                   the ALT_W key (see ALT_W below).
           ALT_W - Redimension window to the area bounded by the start and
                   end block markers.  The window dimensions and the window
                   position are updated automatically on the main member edit
                   screen.  If data fields exist outside of the display
                   marked window, then the window is not redimensioned.
       
       The following function keys affect the displayed color (or monochrome)
       attribute.  If a block is marked (using function keys FTN05 and FTN06)
       then all attribute positions within the marked block will be affected.
       Otherwise, only the attribute under the current cursor position will
       be affected.
       
           CTL01 - Change the displayed color attribute under current cursor
                   position to a normal monochrome display output (white on
                   black).
           CTL02 - Reverse image the displayed attribute under current cursor
                   position.  The background color is swapped with the
                   foreground color.
           CTL03 - Toggle the highlight bit in attribute byte.
           CTL04 - Toggle the blinking bit in attribute byte.
           CTL05 - Set an underline attribute in the marked block or the
                   current cursor position.  The underline attribute will
                   appear as underline only on a monochrome monitor.  On a
                   color monitor, this attribute will appear as dark blue on
                   black.
           CTL10 - Display the attribute which has been saved in the
                   temporary color attribute hold area.
       
           SHF01 - Toggle the red foreground bit.
           SHF02 - Toggle the red background bit.
           SHF03 - Toggle the green foreground bit.
           SHF04 - Toggle the green background bit.
           SHF05 - Toggle the blue foreground bit.
           SHF06 - Toggle the blue background bit.
           SHF07 - Set attribute with a white foreground.
           SHF08 - Set attribute with a white background.
           SHF09 - Set attribute with a black foreground.
           SHF10 - Set attribute with a black background.
       
       If a mouse is available, then the following functions are also
       available:
       
           Unshifted:
             Left mouse button - One click on the left mouse button will
               bring the text cursor to the current mouse cursor location.

                                                                           14




               Two clicks will execute the from-block mark function (FTN05).
             Right mouse button - One click on the right mouse button will
               bring the text cursor to the current mouse cursor location.
               Two clicks will execute the to-block mark function (FTN06).
             Both mouse buttons - Displays a Mouse Function Pad which allows
               the execution of the following functions with the use of the
               mouse buttons: Help, Reset, Exit, Member Options Menu, Full
               Color Palette, and Custom Color Palette.
       
           Alternate shift pressed:
             Left mouse button - Clicking the left mouse button will execute
               the move-block function (ALT05).
             Right mouse button - Clicking the right mouse button will
               execute the copy-block function (ALT06).
       
           Control shift pressed:
             Left mouse button - Clicking the left mouse button once will
               enable the window movement mode.  Another Control-shift-click
               of the mouse button will bring the window first-row,
               first-column to the current mouse cursor position.
       
       ======================================================================
       3.3.1) Creating and editing a field.
       
       Creating a field:
       
           While the screen member work area is displayed, fields may be
           created with the F7 (or A7) and F8 function keys.  Place the text
           cursor at the desired starting position for the field, then press
           F7 (or A7).  Place the text cursor at the desired ending position
           for the field, then press F8.  The field will then be placed on
           the screen.  Starting a field with F7 will create a field that is
           input and output capable.  Alternatively, starting a field with A7
           will create a field with default attributes that makes it
           no-output/display-only.  No-output/Display-only fields are used
           mainly for mouse button control fields.  The field can be set up
           to return a value when the mouse cursor is placed in this field
           and a mouse button is pressed.  No-output/Display-only fields may
           be created over the top of existing text on the screen.
           No-output/Display-only fields may also call 'ghost' fields
           elsewhere in this manual, because these fields can be considared
           'invisible' to the application program.
       
       Editing a field:
       
           To edit the function attribute of a field, place the cursor on the
           desired field to edit, then press F9.  The field edit screen will
           display.  The field currently being edited will be displayed with
           a blinking attribute in a window at the top of the screen.
       
       Field functional attributes:
       
           Field name - Identifier for the field.
       
           Type - Field data type.  The supported data types are as follows:
       
               Type  Size  Description

                                                                           15




              ------+-----+-------------------------------------------------
                C    len   Character array (non-null terminated)
                S    len+1 Character string (null terminated)
                B    1     One byte unsigned integer
                I    2     Two byte signed integer
                U    2     Two byte unsigned integer
                L    4     Four byte signed integer
                O    4     Four byte unsigned integer
       
           Buffer block/sequence - Data fields may be organized into
             contiguous data areas by giving them the same buffer block
             number.  There may be up to 100 different data blocks on the
             screen at one time (numbered 0 though 99).  Fields within a
             data buffer block are ordered by the buffer sequence number
             for that block.
       
           Cursor sequence - This value specifies the order in which the
             fields will be traversed when the TAB key is pressed.
       
           Macro field? - Specifies whether the entire field will be
             displayed with a special attribute whenever the cursor is within
             this field.  The special attribute may be specified on the
             library options menu.
       
           Output data? - Specifies whether data is to be written to the
             screen from the data buffer when this buffer block is written.
       
           Justify - Specifies justification mode: N = no justification,
             L = left justified, R = Right justified, C = Center.
       
           Mandatory entry? - Specifies whether an entry must be placed into
             this field.
       
           Display only? - Specifies whether this field is protected against
             data entry.
       
           Upshift data? - Specifies whether alpha characters entered from
             the keyboard will be upshifted when entered.
       
           Automatic exit? - Specifies whether the screen display routine is
             to return to the caller when the cursor leaves this field.  The
             function key value returned is hex FFFF.
       
           Transparent field? - Specifies whether the field is to be
             initialized with data from the prior screen that this screen
             overlays.  Data (characters), and/or attributes, may be copied
             from the prior screen to this field.  In effect, the text from
             the prior screen "shows through" into this screen member.  The
             valid values are: N=None, C=Character, A=Attribute, B=Both.
       
           Left (right) mouse convert? - Specifies the character or function
             that is to be returned if the mouse cursor is placed in this
             field and a mouse button is pressed.
             - If "F###" is entered, then the function represented by the
               scan code value ### will be returned.
             - If "C###" is entered, then the character represented by the
               ASCII code value ### will be returned.

                                                                           16




             Use the Help key (FTN01) to display a table of available scan
             codes and ASCII codes.
       
           Zero suppress? - Specifies whether leading zeroes will be replaced
             with blanks.  When the value of the field is zero, then only
             one zero will be displayed.
       
           Blank zero balances? - Specifies whether the field will be filled
             with blanks for fields that equal to zero.
       
           Numeric edit - Specifies the type of numeric editing to perform on
             the field.  The following values are valid numeric editing
             codes:
                0...9 = Numeric with implied decimal place of 0..9.
                        ie. The number '1234' with edit code = 2 will be
                        displayed as '12.34'.
                N     = No special numeric editing.
                T     = Edit for time.  ie. '99:99:99'.
                D     = Edit for date.  ie. '99/99/99'.
                X,Y,Z = Special custom editing for programming interface.
                E     = Custom edit code.  Enter desired custom edit code
                        into the bracketed field.  ie. Using the custom edit
                        code '9,9:99', the number '1234' will be displayed
                        as '1,2:34'.
       
       ======================================================================
       3.3.2) Screen member options menu.
       
       The screen member options menu may be displayed by pressing ALT01 from
       the edit work area screen.
       
       KEYS.......Set valid exit keys
           When this option is selected, the Exit Key Definition screen will
           display which will allow the definition of valid exit keys for the
           screen member.  The valid exit function keys will be displayed in
           reverse video on the top half of the screen.  The valid exit
           characters will be displayed within the character box on the
           bottom half of the screen.  To exit from the Exit Key Definition
           screen, press ^2 (control 2).
       
       RENUMBER...Renumber data block and cursor sequence.
           Block and cursor sequence numbers are assigned to fields in the
           order that the fields are defined on the screen, regardless of
           there position on the screen.  The block and cursor sequence
           numbers may be modified manually using the field edit screen, or
           they may be completely renumbered using this option.  When
           renumbered, block and cursor sequence numbers are assigned in a
           left to right, top down order, starting with the top left most
           field on the screen.
       
       1DRAW......Turn on line draw mode with line set #1.
       2DRAW......Turn on line draw mode with line set #2.
       3DRAW......Turn on line draw mode with line set #3.
       4DRAW......Turn on line draw mode with line set #4.
           On the work area edit screen, use the arrow keys to draw the lines
           specified by the line draw mode selected.  Pressing FTN10 will
           return to normal text mode.  The line mode selected is remembered

                                                                           17




           and can be re-activated with the ALT-L keystroke.
       
       SNAPSHOT...Create screen image snapshot file.
           When this option is selected, another window will be displayed
           which will ask for the file name of the screen image file to
           create.  When the file name has been entered and FTN04 has been
           pressed, the current display work area will be written to the
           specified file.
       
       ======================================================================
       3.3.3) Creating a menu
       
       A menu is created in much the same way as a normal data entry screen,
       but is organized in such a way as to be used as a menu.
       
       To create a menu the following steps must be performed:
           - For each option that is to be place on the menu, create a
             display only field with a common data block number.  These
             fields may be 'ghost' fields (No-output/Display-only) to allow
             text to be placed in the field to describe the option.  The
             fields in this data block will be used as option 'keywords' and
             will be highlighted when selected with the color attribute
             specified on the library options menu.
           - When all menu options have been added to the screen, select the
             'RENUMBER' option from the member options menu.  This will
             insure that the menu option index numbers will be returned in
             the proper order to your application.
           - When this menu is displayed by your application, the data block
             number representing the menu options must be specified to the
             screen menu support function.  This tells the menu support
             functions which section of the screen is to be used as a menu.
       
       ======================================================================
       3.4) Saving a screen member
       
       When all screen editing in the work area is complete, return to the
       main edit function screen with ALT10.  To save an edited screen
       member, verify that the desired screen library and member names have
       been entered, then press FTN04.  The screen member will be written to
       the specified library with the specified member name.  The saved member
       name should then be displayed in the member list section of the
       screen.
       
       To save the current screen member into another screen library, simply
       enter the name of the desired screen library and press FTN04.  The
       current screen member will be added (or updated) to the specified
       screen library.
       
       ======================================================================
       3.5) Library options menu
       
       The library options menu may be displayed by pressing ALT01 from the
       edit functions screen.  The library options menu allows making changes
       to a screen library which affect all members in it.  Before any
       changes can be made to a screen library, it must first pre-exist.
       
       The displayed menu options are as follows:

                                                                           18




       
       ATTRIBUTE..Specify special screen attributes.
           When this option is selected and executed, a screen will display
           which allows changing the default display attributes for window
           boxes, menu options, and macro cursors.
       
       KEYS.......Change cursor movement table.
           When this option is selected and executed, a screen will display
           which allows changing the effect of various cursor movement keys.

















































                                                                           19




            +---------------------------------------------------------+
            |                                                         |
            |                        CHAPTER 9                        |
            |            Displaying Screens from Batch Files          |
            |                                                         |
            +---------------------------------------------------------+
       
       ======================================================================
       9.1)  Introduction / Overview:
       
       The Ultimate Screen Manager batch file screen display utility (DSPLY)
       is designed to take screens created from the screen editor and display
       them from a batch file.  Data can be passed from the batch file to the
       screen to display, and any data entered by the user on the screen may
       be passed back to the batch file in the form of environment variables.
       This provides a much more "user friendly" method for displaying and
       accepting data from the user than using "echo" commands.
       
       Pop-up window support:
       DSPLY will support pop-up windows positioned at any valid point on the
       screen.  And when DSPLY returns to the batch file, the prior screen
       contents can be restored.
       
       Mouse support:
       DSPLY can also support the mouse, if one is available.  The mouse may
       be used for menu selects if a menu is displayed, or for selecting
       fields that have been defined for mouse control fields.
       
       Batch file <=> screen data data communication:
       The DSPLY utility uses environment variables to communicate with the
       displayed screen.  Fields defined in the screen member obtain their
       data from matching environment variable names which are made up of a
       dollar sign ($) followed by the field id (ie. if the field is 'DATA',
       then the matching environment variable name would be '$DATA').  Data
       modified on the screen is placed back into its corresponding
       environment variable.  The key (scan code) used to exit from the
       screen is returned to the environment variable '$$RKEY'.  If the
       screen is used as a menu, then the selected menu option is returned to
       the environment variable '$$MENU' (numbered from 1 to the number of
       options on the menu).  The contents of '$$MENU' will also be used as
       the default selected menu option the next time the menu screen is
       displayed.
       
       Accessing environment variables from a batch file:
       As a standard feature of DOS batch files may access any environment
       variables by placing percent signs (%) around the desired environment
       variable name (ie. if %$$RKEY%==4400 then goto exit).  This is how a
       batch file may use data passed from the screen fields to the
       environment area.  While this feature may not be documented in your
       particular version of DOS, especially in DOS versions 3.1 and prior,
       it is probably still available.  But since MS-DOS versions from
       different suppliers can be slightly different, it cannot be guaranteed
       to be present in your particular version.  This is an important and
       necessary feature of DOS for the functionality of the DSPLY utility.
       
       Batch file screen display support utilities:
       

                                                                           20




         USM.EXE      - Create data entry and menu screens.
         DSPLY.EXE    - Ultimate Screen Manager screen display utility.
         RMVVAR.EXE   - Removes all environment variables that match the
                        specified partial variable name.
         LOGTIME.EXE  - Set specified environment variable to current
                        formatted date and time.
         SUBSTR.EXE   - Set specified environment variable to a portion of
                        another.
         ENVSIZE.EXE  - Report on current environment size.
         ENVPATCH.EXE - Patches DOS versions 2.X, 3.0 and 3.1 COMMAND.COM to
                        increase the environment size.
       
       ======================================================================
       9.2)  System requirements and setup
       
       The most important requirement for the DSPLY command is that there be
       enough room in the environment area to hold all the data needed to
       communicate with the screen.  The method used for increasing the size
       of your environment area depends on the version of DOS that you are
       running.  For all methods outlined below, the PC will need to be
       rebooted to install the new environment size.
       
       MS-DOS/PC-DOS version 3.2:
       DOS versions 3.2 and above gives a documented method for increasing
       the size of your environment to a maximum size of 32768 bytes.  To do
       this, include the following line in your CONFIG.SYS file found in the
       root directory of your boot drive:
       
               SHELL = C:\COMMAND.COM /P /E:#####
       
       Where ##### is the desired size of the environment in bytes (between
       128 and 32767).  A size of 1000 bytes or more should be sufficient for
       most applications.  Note: The shell configuration command displayed
       here assumes that the COMMAND.COM file is present in the root
       directory.  Refer to your DOS documentation for more information.
       
       MS-DOS/PC-DOS versions 3.0 and 3.1:
       DOS versions 3.0 and 3.1 has a similar, but undocumented, feature to
       control the size of the environment area. To increase the size of the
       environment area in these DOS versions, include the following line in
       your CONFIG.SYS file found in the root directory of your boot drive:
       
               SHELL = C:\COMMAND.COM /P /E:##
       
       Where ## is a number between 10 and 62 which specifies the number of
       16 byte segments to allocate to the environment area.  The maximum
       value of 62 is recommended which will allocate 992 (16 * 62) bytes to
       the environment data area.  This method should work, but since this
       method is not documented, it can not be guaranteed to work on your
       particular DOS version.
       
       MS-DOS/PC-DOS versions 2.0 and 2.1:
       Increasing the environment size for DOS versions 2.0 and 2.1 require
       other methods since the /E parameter is not supported.  Included on
       the distribution diskette is a utility (ENVPATCH) to create a patch
       version of COMMAND.COM which increases the default environment size.
       This utility will work on IBM PC-DOS versions 2.0 through 3.1, and

                                                                           21




       various MS-DOS versions 2.0 through 3.1 from other vendors.  The
       command syntax for the ENVPATCH utility is as follows:
       
               ENVPATCH d:\path\command.com [/R]
       
       Where:  d:\path\command.com is the drive, path, and file name of
                 the command processor.
               /R is an optional parameter used to relax the strict DOS
                 version checking.  This option should not be necessary for
                 IBM PC-DOS versions, but may be necessary for non-IBM MS-DOS
                 versions.
       
       When executed, an output file named @COMMAND.COM in the specified path
       will be created with an increased environment size.  DOS versions 2.0
       and 2.1 are set to 512 bytes and 3.0 and 3.1 are set to 992 bytes. To
       used the newly patched command processor @COMMAND.COM, include the
       following line in your CONFIG.SYS file in the root directory of your
       boot diskette:
       
               SHELL = d:\path\@COMMAND.COM /P
       
       Or, rename the original COMMAND.COM to COMMAND.BAK, then rename
       @COMMAND.COM to COMMAND.COM.
       
       This method should work fine, but since MS-DOS versions from various
       vendors are slightly different, it cannot be guaranteed to work with
       your particular version of MS-DOS.
       
       ======================================================================
       9.3)  Using DSPLY
       
       The DSPLY utility requires the screen library and member name of the
       screen to display.  A list of options may also be specified to further
       define the screens function.
       
       The command syntax is as follows:
       
               DSPLY libraryname membername
                     [/D:dblk[,dblk[,dblk]]]
                     [/M:dblk[,E]]
                     [/W[:row,col[,boxtype]]]
                     [/L]
                     [/E]
                     [/S]
       
         libraryname - fully qualified screen library name (ie. 'MAIN.SCR').
         membername - name of screen library member to display.
         /D:dblk[,dblk[,dblk]] - list of 1 to 3 data blocks which contain the
           fields to fill with data from the matching environment variables.
           If this option is not specified, then data block 0 is the default.
         /M:dblk[,E] - This option specifies that the screen is to be used
           as a menu.  'dblk' specifies the option field data block number
           for the fields to be treated as menu options.  If the optional
           value ',E' is specified after the data block number, then the menu
           option selected will be returned in the ERRORLEVEL code which can
           be interrogated from the batch file, and the environment area will
           remain unchanged.  If ',E' is specified, then a ERRORLEVEL of 0

                                                                           22




           (zero) indicates an error.  If the '/M' option is not specified,
           then it is assumed that the screen will be used for data entry.
         /W[:row,col[,boxtype]] - This option allows overriding the location
           and boxtype for windows.  If this option is not specified, then
           the values saved with the screen will be used.
         /L - This option specifies that the displayed screen member is to be
           left on the screen when returning to the batch file.  If this
           option is not specified, then the prior screen image will be
           restored to the screen before returning to the batch file.
         /E - This option specifies that DSPLY is to exit immediatly after
           displaying the screen.  If /L is also specified, then the screen
           will not be removed when returning to DOS (or the batch file).
         /S - This option specifies that mouse support is to be enabled if a
           mouse is available.  The mouse may be used for menu option
           selection and mouse function key conversions (mouse control
           fields).
       
       The fields defined on the displayed screen get their information from
       environment variables which are defined with the following format:
       
               SET $<field_id>=<field_contents>
       
       The prefixing dollar sign is required to help distinguish these
       environment variables from other variables that exist in the
       environment area.  The command 'RMVVAR  $' will read through the
       environment area and remove all variables prefixed with a dollar sign
       ($) to assist in resetting any fields used by a screen.  Note: The
       parameter specified on the RMVVAR command is compared with each
       existing environment variable.  Any environment variable satisfying a
       partial match will be removed. {ie. To remove all variables beginning
       with '$Q' (such as $QXYZ and $QABC), enter the command 'RMVVAR $Q'.}
       
       When the screen is being displayed the DSPLY command will look through
       all specified data blocks and scan for environment variables matching
       any output-capable data field that it may find.  The matching
       environment variable is then loaded into the screen field to display.
       
       When an exit key has been pressed, the specified data blocks are again
       scanned for input-capable (non display-only) fields and new
       environment variables are created and placed into the environment data
       area.
       
       All data types supported by the Ultimate Screen Manager are supported
       by DSPLY.  If a data field is defined with a numeric data type (such
       as integer), then a numeric value will be returned to the
       corresponding environment variable.
       
       When an exit key is pressed, the variable $$RKEY will always be
       defined and will indicate the key pressed to return to the batch file.
       If a function key (or extended key) was used to exit from the screen,
       then $$RKEY has the format ##00, where ## is the hex extended key code
       of the function key pressed.  If an ASCII character has been pressed
       and is used as an exit key, then $$RKEY has the format 00##, where ##
       is the hex value of the ASCII character.  See the appendix for the
       extended key code and ASCII code list.
       
       If the screen is used as a menu and the optional value ',E' was not

                                                                           23




       specified, then the variable $$MENU will also be placed in the
       environment area and will contain a numeric value indicating the
       number of the menu option selected (from 1 to N, where N is the number
       of possible options on the menu).
       
       If the screen is used as a menu and the value ',E' has been specified,
       then the menu option selected will be present in the ERRORLEVEL value
       which can be interrogated from a batch file.  Menu options will range
       from 1 to N, where N is the number of possible options on the menu.
       An ERRORLEVEL of 0 (zero) indicates an error condition in this
       situation.  The environment area will remain unchanged, therefore the
       environment variables '$$RKEY' and '$$MENU' will not be set and should
       not be checked.  This option may be preferred when the size of the
       environment area is unknown, or is of insufficient size.
       
       Except as noted above for the menu option when using the optional ',E'
       indicator (ie. /M:#,E), the ERRORLEVEL will return a non-zero value in
       an error situation.
       
       ======================================================================
       9.4)  Special batch file utilities
       
       RMVVAR.EXE: Remove all environment variables that satisfy a partial
           match with the specified parameter.
         - Command syntax:
           RMVVAR partial-name
             partial-name - A partial environment variable name.
       
       LOGTIME.EXE: Set environment variable to current date and time.
         - Command syntax:
           LOGTIME varname
             varname - The name of the environment variable to set.
         - The date/time value has the following format:
             ie. 'Mon, Jan-01-1980, 13:30:00'
       
       SUBSTR.EXE : Set environment variable to a portion of another.
         - Command syntax:
           SUBSTR tovar = fromvar ( position [, length] )
             tovar    - The name of the environment variable to set
             fromvar  - The environment variable from which to extract info
             position - The position to begin extraction
             length   - The length of the substring
         - ie. Using the utilities LOGTIME and SUBSTR, set the environment
           variable YEAR to the current year.
             >logtime DATETIME
             >substr  YEAR=DATETIME(13,4)
             >set
                .
                .
               DATETIME=Mon, Jan-01-1980, 13:30:00
               YEAR=1980
                .
                .
       
       ENVSIZE.EXE: Report on current environment size.
         - Command syntax:
           ENVSIZE [/R] [/RS] [/E] [/L:#]

                                                                           24




             /R   - Display size information
             /RS  - Display size and segment information
             /L:# - Set error return code if # is greater than size
             /E   - Set environment variables with size
                    #DOSVER = DOS version
                    #ENVSIZ = Environment size
                    #ENVAVL = Available bytes (before this command)
       
       ======================================================================
       9.5)  Example
       
       The following batch file example assumes that the screen has been set
       up with the following attributes:
       
         - The screen was designed for use as a menu.
         - Data block 98 contains the option description fields (OP01 to
           OP03).
         - Data block 0 contains a field to be used as a menu title (TTLE).
         - The ENTER (carriage-return) key has been defined as the menu
           option execute key.
       
       An option may be selected by using the up/down arrow keys, or by
       pressing the first letter of the desired option.  The selected option
       may then be executed by pressing ENTER (carriage-return).
       
       Batch file example:
       
         :
         : ---- remove prior $prefix environment variables
         rmvvar $
         :
         : ---- load menu options
         set $TTLE=Miscellaneous Command Menu
         set $OP01=DIR    - display current directory
         set $OP02=CHKDSK - perform chkdsk on current drive
         set $OP03=EXIT   - exit menu (return to DOS)
         :
         : ---- display menu
         :display
         dsply main.scr menu /d:0,98 /m:98
         if not %$$RKEY%==000D goto display
         if %$$MENU%==1 then goto xdir
         if %$$MENU%==2 then goto xchkdsk
         if %$$MENU%==3 then goto exit
         goto display
         :
         : ---- current directory
         :xdir
         cls
         dir
         pause
         goto display
         :
         : ---- check disk
         :xchkdsk
         cls
         chkdsk

                                                                           25




         pause
         goto display
         :
         : ---- remove $environment variables then exit
         :exit
         rmvvar $
         :
       
       The following is a batch file example that displays a menu using the
       ERRORLEVEL return code to determine the menu option selected:
       
         :
         : ---- display menu
         :display
         dsply main.scr menu /m:98,e
         if errorlevel 3 goto exit         | Note that the menu options
         if errorlevel 2 goto xchkdsk      | must be checked in reverse
         if errorlevel 1 goto xdir         | order.
         goto exit
         :
         : ---- directory
         :xdir
         dir
         pause
         goto display
         :
         : ---- check disk
         :xchkdsk
         chkdsk
         pause
         goto display
         :
         : ---- exit
         :exit
         :
       
       The batch file EXAMPLE.BAT along with the screen library file
       EXAMPLE.SCR can be found on the distribution diskette.  These files
       can be examined for other examples of menus and screens.
       


















                                                                           26




       ======================================================================
       Appendix A) Glossary:
       
       Attribute Mask - An array of bytes within a screen member that contain
         color display atributes to use for each character on the screen.
         May be set for color or monochrome.
       
       Batch file - A text file that contains a series of DOS commands.
         Please refer to your DOS manual to find out more about DOS batch
         files.
       
       Buffer Block - See Data Block.
       
       Cursor - This is a pointer on a text screen that is represented by a
         small blinking line and is usually where the next typed character
         will be placed.
       
       Cursor sequence number - Whithin a screen member this is a field
         attribute number that represents the order in which the fields will
         be traversed when the tab key is pressed.  This value may be set for
         a field on the field edit screen.
       
       Data block - A data block is a special buffer area reserved for the
         data interface between the screen and the application program. Each
         screen member can have up to 100 (0 through 99) different data
         blocks (field interface buffer area), and each data block can
         contain any number of fields.  When a field is created, it is
         assigned a data block number to be used for communication with the
         application program.  The data block number to which a field is
         assigned, as well as the order in which the field exists within the
         data block, can easily be changed on the field edit screen.
       
       Display Attribute - An reserved byte for each character on a screen
         that contains color information.
       
       Environment area - A special area reserved in DOS that contains data
         items that can be used by the programs running under DOS.  These
         data items are reference by their variable name.  To see all
         environment variables currently active in your environment area,
         at the DOS prompt, enter the command 'SET' followed by a return.
       
       Field - An area on a created screen that allows either data input,
         output, or mouse button function control.
       
       Ghost field - See no-output/display-only field.
       
       Library - See Screen Library.
       
       Member - See Screen Member.
       
       Mouse - A hand-held pointing device used for quickly selecting or
         moving items on a screen.
       
       Mouse button - A button found on top of the mouse used for special
         item selections or for drawing.
       
       Mouse control field - This is a special field which returns a special

                                                                           27




         value when the mouse cursor is positioned in this field and a mouse
         button is pressed.
       
       Mouse cursor - This is usually a special separate cursor indicated by
         a reverse video character pointer that moves when the mouse is
         moved.  This is not the same as the hardware cursor that is
         indicated by a small blinking line.
       
       No-output/display-only field - This is a field with its attributes
         set such no output is placed into the field when the field is
         displayed, and no data is allowed to be typed into it from the
         keyboard.  This kind of field is also called a 'ghost' field because
         the field is in effect invisible to the application program.  These
         fields are typically used for mouse control fields.
       
       Screen Image - This is a data area or file that contains the actual
         4000 bytes of data (2000 characters plus their corresponding color
         attributes) from the screen display.
       
       Screen Library - A specially formatted file used by the Ultimate
         Screen Manager that contains multiple screen members.
       
       Screen Member - A formatted screen with fields that can be used for
         displaying a menu or for data entry.
       
       Snapshot - See Screen Image.
       
       TSR (Terminate and Stay Resident) - This a special program that
         attaches itself to DOS when it exits, retaining a portion of main
         memory for itself.  This type of program usually performs some form
         of special service that is not generally available in DOS.
       
       Window - This is a portion of the main viewing area of a screen
         display.  It is delimited by two sets of row/column coordinates.
       























                                                                           28




       ======================================================================
       Appendix B) Scan code table: Returned by the DSPLY command.
       
       On return from the utility 'DSPLY', the environment variable '$$RKEY'
       will be set to one of the scan codes listed below to indicate which
       key was pressed to exit from the displayed screen.   The value of this
       variable may be check with the following batch file command segment.
       
               .
               .
               rem check for command keys
               if "%$$RKEY%"=="" goto exit
               if %$$RKEY%==3B00 goto ftn01
               if %$$RKEY%==4400 goto ftn10
               .
               .
       
                     keyboard      |  codes returned by $$RKEY
                scan code|         |       shift status
                dec | hex| key     | norm | alt  | shft | ctrl
                ----+----+---------+------+------+------+------
                  1 | 01 | esc     | 001B | ---- | 001B | 001B
                  2 | 02 | 1 !     | 0031 | 7800 | 0021 | ----
                  3 | 03 | 2 @     | 0032 | 7900 | 0040 | 0300
                  4 | 04 | 3 #     | 0033 | 7A00 | 0023 | ----
                  5 | 05 | 4 $     | 0034 | 7B00 | 0024 | ----
                  6 | 06 | 5 %     | 0035 | 7C00 | 0025 | ----
                  7 | 07 | 6 ^     | 0036 | 7D00 | 005E | 001E
                  8 | 08 | 7 &     | 0037 | 7E00 | 0026 | ----
                  9 | 09 | 8 *     | 0038 | 7F00 | 002A | ----
                 10 | 0A | 9 (     | 0039 | 8000 | 0028 | ----
                 11 | 0B | 0 )     | 0030 | 8100 | 0029 | ----
                 12 | 0C | - _     | 002D | 8200 | 005F | 001F
                 13 | 0D | = +     | 003D | 8300 | 002B | ----
                 14 | 0E | bksp    | 0008 | ---- | 0008 | 007F
                 15 | 0F | tab     | 0009 | ---- | 0F00 | ----
                 16 | 10 | Q       | 0071 | 1000 | 0051 | 0011
                 17 | 11 | W       | 0077 | 1100 | 0057 | 0017
                 18 | 12 | E       | 0065 | 1200 | 0045 | 0005
                 19 | 13 | R       | 0072 | 1300 | 0052 | 0012
                 20 | 14 | T       | 0074 | 1400 | 0054 | 0014
                 21 | 15 | Y       | 0079 | 1500 | 0059 | 0019
                 22 | 16 | U       | 0075 | 1600 | 0055 | 0015
                 23 | 17 | I       | 0069 | 1700 | 0049 | 0009
                 24 | 18 | O       | 006F | 1800 | 004F | 000F
                 25 | 19 | P       | 0070 | 1900 | 0050 | 0010
                 26 | 1A | [ {     | 005B | ---- | 007B | 001B
                 27 | 1B | ] }     | 005D | ---- | 007D | 001D
                 28 | 1C | return  | 000D | ---- | 000D | 000A
                 29 | 1D | ctrl    | ---- | ---- | ---- | ----
                 30 | 1E | A       | 0061 | 1E00 | 0041 | 0001
                 31 | 1F | S       | 0073 | 1F00 | 0053 | 0013
                 32 | 20 | D       | 0064 | 2000 | 0044 | 0004
                 33 | 21 | F       | 0066 | 2100 | 0046 | 0006
                 34 | 22 | G       | 0067 | 2200 | 0047 | 0007
                 35 | 23 | H       | 0068 | 2300 | 0048 | 0008
                 36 | 24 | J       | 006A | 2400 | 004A | 000A

                                                                           29




       ======================================================================
       Appendix B) (continued)
       
                     keyboard      |  codes returned by $$RKEY
                scan code|         |        shift status
                dec | hex| key     | norm | alt  | shft | ctrl
                ----+----+---------+------+------+------+------
                 37 | 25 | K       | 006B | 2500 | 004B | 000B
                 38 | 26 | L       | 006C | 2600 | 004C | 000C
                 39 | 27 | ; :     | 003B | ---- | 003A | ----
                 40 | 28 | ' "     | 0027 | ---- | 0022 | ----
                 41 | 29 | ` ~     | 0060 | ---- | 007E | ----
                 42 | 2A | L-shft  | ---- | ---- | ---- | ----
                 43 | 2B | \ |     | 005C | ---- | 007C | 001C
                 44 | 2C | Z       | 007A | 2C00 | 005A | 001A
                 45 | 2D | X       | 0078 | 2D00 | 0058 | 0018
                 46 | 2E | C       | 0063 | 2E00 | 0043 | 0003
                 47 | 2F | V       | 0076 | 2F00 | 0056 | 0016
                 48 | 30 | B       | 0062 | 3000 | 0042 | 0002
                 49 | 31 | N       | 006E | 3100 | 004E | 000E
                 50 | 32 | M       | 006D | 3200 | 004D | 000D
                 51 | 33 | , <     | 002C | ---- | 003C | ----
                 52 | 34 | . >     | 002E | ---- | 003E | ----
                 53 | 35 | / ?     | 002F | ---- | 003F | ----
                 54 | 36 | R-shft  | ---- | ---- | ---- | ----
                 55 | 37 | * prtsc | 002A | ---- | ---- | 7200
                 56 | 38 | alt     | ---- | ---- | ---- | ----
                 57 | 39 | space   | 0020 | 0020 | 0020 | 0020
                 58 | 3A | caps-lk | ---- | ---- | ---- | ----
                 59 | 3B | f1      | 3B00 | 6800 | 5400 | 5E00
                 60 | 3C | f2      | 3C00 | 6900 | 5500 | 5F00
                 61 | 3D | f3      | 3D00 | 6A00 | 5600 | 6000
                 62 | 3E | f4      | 3E00 | 6B00 | 5700 | 6100
                 63 | 3F | f5      | 3F00 | 6C00 | 5800 | 6200
                 64 | 40 | f6      | 4000 | 6D00 | 5900 | 6300
                 65 | 41 | f7      | 4100 | 6E00 | 5A00 | 6400
                 66 | 42 | f8      | 4200 | 6F00 | 5B00 | 6500
                 67 | 43 | f9      | 4300 | 7000 | 5C00 | 6600
                 68 | 44 | f10     | 4400 | 7100 | 5D00 | 6700
                 69 | 45 | num-lk  | ---- | ---- | ---- | ----
                 70 | 46 | break   | ---- | ---- | ---- | 0000
                 71 | 47 | home 7  | 4700 |*00## | 0037 | 7700
                 72 | 48 | up 8    | 4800 |*00## | 0038 | ----
                 73 | 49 | pgup 9  | 4900 |*00## | 0039 | 8400
                 74 | 4A | -       | 002D | ---- | 002D | ----
                 75 | 4B | left 4  | 4B00 |*00## | 0034 | 7300
                 76 | 4C | 5       | ---- |*00## | 0035 | ----
                 77 | 4D | rght 6  | 4D00 |*00## | 0036 | 7400
                 78 | 4E | +       | 002B | ---- | 002B | ----
                 79 | 4F | end 1   | 4F00 |*00## | 0031 | 7500
                 80 | 50 | dwn 2   | 5000 |*00## | 0032 | ----
                 81 | 51 | pgdn 3  | 5100 |*00## | 0033 | 7600
                 82 | 52 | ins 0   | 5200 |*00## | 0030 | ----
                 83 | 53 | del .   | 5300 | ---- | 002E | ----
       
        * Special ALT/number-pad code generation
          NOTE: 0000 is not returned by the ALT numeric pad sequence.

                                                                           30




       ======================================================================
       Appendix C) Program License Agreement and Limited Warranty
       
       YOU SHOULD CAREFULLY READ THE FOLLOWING TERMS AND CONDITIONS BEFORE
       USING THIS PRODUCT.  USING THIS PRODUCT INDICATES YOUR ACCEPTANCE OF
       THESE TERMS AND CONDITIONS.  IF YOU DO NOT AGREE WITH THEM, YOU SHOULD
       PROMPTLY RETURN THE PACKAGE.
       
       LICENSE
       
       You may:
       
         -  Use the program on a single computer for which this package was
            designed to operate.
       
         -  Copy the program into any machine readable form for backup
            purposes.
       
         -  Modify the program and/or merge it into another program for use
            on the single machine (Any portion of this program package
            merged into another program will continue to be subject to the
            terms and conditions of this Agreement and must include the
            full reproduced copyright notice).
       
         -  Freely distribute the Shareware version of this product provided
            that the following is strictly observed.
             - All files listed are included unmodified.
             - Only a nominal fee may be charged for the diskette on which
               this package is distributed (ie. under $7.00).
             - All other terms and conditions as listed are observed.
             - All organizations distributing the Ultimate Screen Manager
               package must submit a letter to MDFlynn Associates containing
               their business name, address, and phone number.  This will be
               used for maintaining current updates to the product.
       
       You may not:
       
         -  Distribute any portion of the Ultimate Screen Manager support
            programs or utilities separately without the express written
            consent of MDFlynn Associates.  (A separate licence agreement
            is available for this purpose).
       
         -  Modify or remove the Copyright notice from any program, utility,
            diskette or their manual.
       
         -  Use, copy, modify, or transfer the program or any copy,
            modification or merged portion in whole or in part, except as
            expressly provided in this Agreement.
       
       Terms and Conditions:
       The license is effective until terminated.  You may terminate it at
       any time by destroying the diskette(s) contained in this package, plus
       any backup copies that may have been made.  The license and the rights
       thereof terminate if you fail to comply with any term or condition of
       this agreement.  You agree further, upon termination, to destroy the
       program together with any modifications and/or merged portions in any
       form.

                                                                           31




       ======================================================================
       Appendix C) Program License Agreement and Limited Warranty (continued)
       
       LIMITED WARRANTY:
       THE PROGRAM IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER
       EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
       WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
       THE ENTIRE RISK AS TO QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH
       YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST
       OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. SOME STATES DO NOT
       ALLOW THE EXCLUSION OF IMPLIED WARRANTIES SO THE ABOVE EXCLUSION MAY
       NOT APPLY TO YOU. THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS AND
       YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE.
       
       LIMITATIONS OF REMEDIES:
       MDFlynn Associates liability and your exclusive remedy shall be:
          -  The replacement of the diskette(s) if you have met the
             conditions as described under "LIMITED WARRANTY" or
          -  A full refund if MDFlynn Associates is unable to deliver a
             diskette free from defects in materials or workmanship.
       
       IN NO EVENT WILL MDFLYNN ASSOCIATES BE LIABLE TO YOU FOR ANY DAMAGES
       INCLUDING ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR
       CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE SUCH
       PROGRAM EVEN IF MDFLYNN ASSOCIATES HAS BEEN ADVISED OF THE POSSIBILITY
       OF SUCH DAMAGES OR ANY CLAIM BY ANY OTHER PARTY.  SOME STATES DO NOT
       ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
       CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT
       APPLY TO YOU.
       
       GOVERNMENT USE:
       Use, duplication or disclosure by the Government is subject to
       restrictions set forth in subdivision (c)(1)(ii) of the Rights in
       Technical Data and Computer Software clause of 252.227-7013.
       
       GENERAL:
       You may not sublicense, assign or transfer the license or the limited
       warranties of the program except as expressly provided in this
       agreement.  Any attempt otherwise to sublicense, assign or transfer
       any of the rights, duties or obligations hereunder is void.  This
       agreement will be governed by the laws of the State of California.
       If any provision of this Agreement is held invalid, the remainder of
       this Agreement shall continue in full force and effect.  Should you
       have any questions concerning this agreement, you may contact MDFlynn
       Associates by writing to:
       
               MDFlynn Associates
               P.O. Box 5034, Redwood City, Calif.  94063
               (415) 487-6482
       
       YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT AND UNDERSTAND IT
       AND AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS. YOU FURTHER AGREE
       THAT IT IS THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT
       BETWEEN US WHICH SUPERCEDES ANY PROPOSAL OR PRIOR WRITTEN AGREEMENT,
       ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO
       THE SUBJECT MATTER OF THIS AGREEMENT.


                                                                           32

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2345

     Volume in drive A has no label
     Directory of A:\

    USM      EXE     70761  12-20-89   5:12p
    USM      SCR     52778  12-20-89   5:31p
    USM      DOC     90586  12-21-89  12:09a
    MANUAL   BAT        92  12-20-89   9:20p
    README           12158  12-21-89   1:03p
    DSPTXT   EXE      3465  12-21-89  12:55p
    INVOICE  DOC      2217  12-21-89  12:14p
    INVOICE  BAT        96  12-20-89  10:22p
    LOGTIME  EXE     13525  12-18-89  12:42a
    SUBSTR   EXE     14519  12-18-89  12:43a
    DSPLY    EXE     36635  12-19-89  10:19p
    RMVVAR   EXE     11135  12-18-89  12:42a
    ENVSIZE  EXE     15263  12-18-89  12:42a
    ENVPATCH EXE      8923  12-11-89   4:58p
    CHKENV   BAT      2864  12-20-89   7:33p
    EXAMPLE  BAT      3865  12-20-89   6:16p
    EXAMPLE  SCR      7980  12-20-89  11:34p
    START    BAT      1226  12-21-89  12:25p
    START    SCR      2049  12-24-89  10:22p
    GO       TXT       485  10-05-90   1:34a
           20 file(s)     350622 bytes
                            1024 bytes free
