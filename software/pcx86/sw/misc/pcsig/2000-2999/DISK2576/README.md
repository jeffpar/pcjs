---
layout: page
title: "PC-SIG Diskette Library (Disk #2576)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2576/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2576"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2576.TXT

{% raw %}
```
Disk No: 2576                                                           
Disk Title: VGAColor                                                    
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: VGAColor                                                 
Author Version: 2.0.03                                                   
Author Registration: $20.00                                             
Special Requirements: VGA                                               
                                                                        
VGACOLOR helps you to easily modify the standard color palettes of your 
VGA monitor.  VGACOLOR was designed for those who wish to display       
different colors while in DOS, and to aid programmers in designing color
schemes for their applications.                                         
                                                                        
VGACOLOR provides several functions in addition to color modification.  
Save your color modifications to a disk file, load a saved color        
description and, optionally, print a map of the individual color        
registers.  A saved color description file can be loaded as a DOS       
command and even included in your AUTOEXEC.BAT file.  You can have many 
color description files and change your colors to fit the type of work  
you are doing.                                                          
                                                                        
VGACOLOR prints a color modification report with information on the     
current state of the individual color registers.  This report can be    
particularly useful for programmers who want to incorporate the colors  
into their own applications.  Simply supply the appropriate hex values  
to the proper Bios routine to change the color and VGACOLOR takes       
advantage of Bios (Int 10H) for all manipulation of the color palettes  
and individual color registers.                                         
                                                                        
VGACOLOR provides a separate utility program to change the foreground   
and background colors, getting away from the black and white DOS prompt.
Add to your AUTOEXEC.BAT file and your colors will be set automatically 
when you start up your computer.                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1991 PC-SIG, Inc.                                         
```
{% endraw %}

## VGACOLOR.DOC

{% raw %}
```











                       *********************************
                       *                               *
                       *           VgaColor            *
                       *                               *
                       *********************************






                        A VGA Color Monitor Utility
                     For Selecting and Modifying DOS's
                          Standard Color Palettes










                                    V2.0.03






                             Copyright (c)1990

                           DigiTec Software, Ltd.
                           P. O. Box 9247
                           Salt Lake City,  UT  84109









        _________________________________________________________________



              *************************************************
              *                                               *
              *                TABLE OF CONTENTS              *
              *                                               *
              *************************************************



        LICENSE AGREEMENT . . . . . . . . . . . . . . . . . . . . . . ii

        PRODUCT DESCRIPTION . . . . . . . . . . . . . . . . . . . . .  1

             Minimum System Requirements  . . . . . . . . . . . . . .  1
             Distribution Files . . . . . . . . . . . . . . . . . . .  1
             Installing VgaColor  . . . . . . . . . . . . . . . . . .  2

        USING VGACOLOR  . . . . . . . . . . . . . . . . . . . . . . .  3

             User-Controlled Options  . . . . . . . . . . . . . . . .  3
             Special Key Usage  . . . . . . . . . . . . . . . . . . .  3
             Starting VgaColor  . . . . . . . . . . . . . . . . . . .  5
             Selecting a Color to Modify  . . . . . . . . . . . . . .  6
             Modifying a Color  . . . . . . . . . . . . . . . . . . .  6
             Increasing and Decreasing Intensity  . . . . . . . . . .  7
             Restoring Colors . . . . . . . . . . . . . . . . . . . .  9
                  Restore Active Color  . . . . . . . . . . . . . . .  9
                  Restore All Colors  . . . . . . . . . . . . . . . .  9
             Loading and Saving Color File Descriptions . . . . . . . 10
                  Load Saved Color File . . . . . . . . . . . . . . . 10
                  Saving a Color File Description . . . . . . . . . . 10
             Enable/Disable Mode Change . . . . . . . . . . . . . . . 11
             Printing the Modification Summary Report . . . . . . . . 12
             Sound On/Off Toggle  . . . . . . . . . . . . . . . . . . 13
             DOS Window . . . . . . . . . . . . . . . . . . . . . . . 13
             Using VgaColor as a Dos Command  . . . . . . . . . . . . 14
                  Switches  . . . . . . . . . . . . . . . . . . . . . 14

        CHANGING DOS FOREGROUND AND BACKGROUND COLORS . . . . . . . . 16

             ANSI.SYS . . . . . . . . . . . . . . . . . . . . . . . . 16
             Using SETBF.EXE to change Foreground/Background colors . 17
             Automating the Process . . . . . . . . . . . . . . . . . 18

        TECHNICAL INFORMATION . . . . . . . . . . . . . . . . . . . . 20

             General Information  . . . . . . . . . . . . . . . . . . 20
             Assembly Language Example (INT 10h)  . . . . . . . . . . 20
             Format of the Saved Color File Description . . . . . . . 21



        __________________________________________________________________

        DigiTec VgaColor               i                 Copyright (c)1990

                **************************************************
                *                                                *
                *            VGACOLOR LICENSE AGREEMENT          *
                *                                                *
                **************************************************

           VgaColor is the property of DigiTec Software, Ltd., Salt Lake
           City, Utah.  You are granted a non-exclusive license to use
           VgaColor under the following conditions:

           In no event will DigiTec Software, Ltd., or any other person
           or entity, be liable for damages or costs incurred resulting
           from the use of VgaColor.  You agree to, and assume full
           responsibility for, the use of VgaColor.  No warranties,
           expressed or implied, are in effect for Vgacolor and is
           provided "as is" for your use.  This agreement shall be
           enforced under the laws of the State of Utah, County of
           Salt Lake.

           DigiTec, Ltd. reserves all rights to VgaColor.  VgaColor is
           NOT "Public Domain" software, but has been distributed under
           "Shareware" principles.


        YOU MAY:

        For promotional considerations of VgaColor, you may duplicate
        and distribute all of the executable files, libraries and
        user manuals, AS LONG AS YOU DISTRIBUTE THE ENTIRE PRODUCT
        INTACT, which includes the documentation and executable files.

        If you like VgaColor and plan to use Vgacolor on a regular
        basis, please register yourself with Digitec.

        The registration fee for VgaColor is $20.00 (U.S. dollars)
        per copy, per machine.  Please remit to:

                            DigiTec Software, Ltd.
                            P.O. Box 9247
                            Salt Lake City, UT  84109


        YOU MAY NOT:

        Sell or lease VgaColor, including the executable files, libraries
        and documentation.  A reasonable distribution fee, not to exceed
        $8.00, to cover materials, postage and handling is permissible.

        Modify, reverse-engineer or alter, in any manner, any part of the
        VgaColor system including, but not limited to, the executable
        files, libraries and user documentation.  VgaColor may not be
        merged with other software, except for backup-up purposes.

        __________________________________________________________________

        DigiTec VgaColor              ii                 Copyright (c)1990

              ***********************************************
              *                                             *
              *             PRODUCT DESCRIPTION             *
              *                                             *
              ***********************************************



        VgaColor is a utility which allows you to easily modify the
        standard color palettes if you have a VGA color monitor.
        By standard color palette, we mean the colors represented
        in palette numbers 0 through 15, which are the palettes DOS
        as well as most text-based applications use.  This utility
        can be useful for two audiences:  (1) a user who wishes to
        display different colors while in DOS and (2) to aid the
        programmer in designing color schemes for their applications.

        VgaColor provides several functions in addition to color
        modification.  You can save your modifications to a disk
        file, load a saved color description file and optionally
        print a map of the individual color registers.  A saved
        color description file may be loaded as a DOS command and
        may be included in your AUTOEXEC.BAT file.  We also provide
        SETBF.EXE, our program to change DOS foreground and background
        colors, which replaces the DOS PROMPT command.



                         MINIMUM SYSTEM REQUIREMENTS



        PC/MS DOS 2.0 or higher
        IBM or true compatible computer
        VGA color monitor
        Floppy or hard disk
        116 Kb of free memory



                                DISTRIBUTION FILES



                   *******************************************
                   *        VGACOLOR.EXE       VGASAMP.BAT   *
                   *        VGASCRN.EXE        TESTCOLR.VGA  *
                   *        VGAFIO.EXE         REGISTER.YOU  *
                   *        VGAMAPER.EXE       VGACOLOR.DOC  *
                   *        VGACMDL.EXE        VGAREAD.ME    *
                   *        SETBF.EXE                        *
                   *******************************************

        __________________________________________________________________

        DigiTec VgaColor               1                 Copyright (c)1990

                               INSTALLING VGACOLOR



        The best way to install VgaColor is to create a separate directory
        and use a DOS PATH to access it.  However you choose to install
        and run VgaColor, all of the .EXE files must be available for
        VgaColor to operate.



        Installing on a Hard Disk:

        1.  MD\VGACOLOR

        2.  CD\VGACOLOR

        3.  Insert your distribution disk in drive A

        3.  COPY A:*.*



        Floppy Disk Users:

        1.  Make a backup of your distribution disk and use the backup
            copy as your working disk.

        2.  COMMAND.COM must be available to VgaColor.







        Although the VgaColor system does not use or require ANSI.SYS,
        you must install ANSI.SYS in your CONFIG.SYS file to use
        our program, SETBF.EXE, to change the DOS foreground and
        background colors.













        __________________________________________________________________

        DigiTec VgaColor               2                 Copyright (c)1990

                 *************************************************
                 *                                               *
                 *               USING VGACOLOR                  *
                 *                                               *
                 *************************************************


                              USER-CONTROLLED OPTIONS


        Prior to starting VgaColor, the following SET commands may be
        issued to control these functions:


        SET IBMC=N  -  This will slow down the video display if you are
                       operating in a windows environment or you
                       experience incompatibility problems with your
                       monitor.

        SET IBMC=F  -  Some color monitor boards may operate significantly
                       faster using this option.

        SET IBMC=Q  -  Will suppress all "beeps" sounded in VgaColor
                       (field errors not effected).


        You can combine multiple options in one SET command.  For example,
        if you want to use the faster display option and also suppress
        "beeps":

                                  SET IBMC=FQ

        Note:  Do not place a space before or after the equal sign (=).
               DOS will not recognize the parameters if you do.




                               SPECIAL KEY USAGE:

        End

           The END key will restore the contents of a data item if you
           mistakenly type over it.  It will restore the original contents
           of the field, provided you have not pressed a function key or
           TABed the cursor from the field.


        Tab and Shift-Tab

           The TAB key moves the cursor forward from field to field.
           Shift-TAB moves the cursor in the reverse direction.

        __________________________________________________________________

        DigiTec VgaColor               3                 Copyright (c)1990




        Backspace

           The Backspace key is a destructive backspace key.  As you
           press the key, the previous character is erased.


        Home

           This key will take you to the first field on the screen.


        Cursor/Arrow Keys

           The cursor control keys operate as follows:

           o The left and right cursor keys allow you to move the cursor
             within a field (a field which allows you to enter data into
             it).

           o The down and up cursor keys operate similar to the Tab and
             Shift-Tab keys, which move the cursor forward and backward
             through the fields.


        Del

           The Delete key deletes the character at the cursor position and
           moves all of the characters to the right of the cursor one
           position to the left.


        Ins

           The Insert key sets the computer into and out of insert mode.
           Each character typed while in insert mode will shift all
           characters to the right of the cursor one position further
           to the right.  When in Insert mode, cursor will change to a
           full block instead on an underline character.












        __________________________________________________________________

        DigiTec VgaColor               4                 Copyright (c)1990


                               STARTING VGACOLOR


        To start VgaColor, simply type VGACOLOR at the DOS prompt and
        press the enter key.  The left side of the screen shows the
        current state of the color palettes.  The right side of the
        screen provides you with a larger visual of the color you are
        modifying, controls for turning the Red, Blue and Green mixers
        on and off, and a list of optional functions provided by
        VgaColor. The bottom of the screen provides access to the
        primary function keys for performing color modifications.

        The following pages describe each of the functions provided by
        VgaColor.  A tutorial is also provided to show you how to tell
        DOS to display a screen with background and foreground colors
        and tips on how to change them using VgaColor.  The following
        functions are available in VgaColor:





        Esc       - Quit VgaColor
        F1        - Modify Intensity of Red
        F2        - Modify Intensity of Green
        F3        - Modify Intensity of Blue
        F5        - Restore Active Color
        F8        - Restore All Colors
        Alt-L     - Load Saved Color File
        Alt-M     - Enable/Disable Mode Change
        Alt-P     - Print Current Settings
        Alt-S     - Save Current Settings/Disk
        Alt-T     - Sound On/Off
        Shift-F10 - Dos Window

        Up Arrow   - Increase Intensity of Red, Green or Blue
        Down Arrow - Decrease Intensity of Red, Green or Blue















        __________________________________________________________________

        DigiTec VgaColor               5                 Copyright (c)1990


                           SELECTING A COLOR TO MODIFY



        The left side of the screen shows all of the possible colors
        available in the first 16 palettes, which DOS and most text-
        based applications use.  All 16 colors (0 - 15) may be used as
        the foreground color.  Only the first 8 colors (0 - 7) may
        be used as background colors.

        Simply type the number of the color you want to change and press
        the Enter key.  For example, press the number 2 and then press the
        enter key or press 02.  When the program senses two consecutive
        numbers, an Enter is automatically issued.

        The color Green and its associated number should appear in the
        top, right-hand box called "Selected Color to be Modified".
        This is the primary visual area for reviewing the color you
        have selected to modify.






                                MODIFYING A COLOR

                                F1 - F2 - F3 Keys


        All colors are made up of varying intensities of the primary colors
        Red, Blue and Green.  The following three function keys select which
        primary color you wish to increase or decrease.


        F1 = Change Red
        F2 = Change Green
        F3 = Change Blue


        The second box on the right-hand side of the screen indicates which
        primary color is currently active.  Listed above the words (R)ed,
        (G)reen or (B)lue are numeric values which indicate the current value
        of each of these primary colors.  For the color Green (assuming no
        modifications have been made) the values should read 00 for Red,
        42 for Green and 00 for Blue.  The word "On" or "Off" appears below
        each of the primary colors.  You change the intensity of a color
        by first pressing the F1, F2 or F3 key.  For example press F1 to
        modify the intensity of Red.  The word "On" will appear, indicating
        Red is the active primary color.


        __________________________________________________________________

        DigiTec VgaColor               6                 Copyright (c)1990


                       INCREASING AND DECREASING INTENSITY

                             Up and Down Arrow Keys



        The Up and Down arrow keys are used to increase the intensity
        of Red, Green or Blue contained in a color.  The intensity ranges
        from 0 (no color) to 63 (high intensity).  The Up arrow increases
        intensity; the Down Arrow decreases intensity.  The numeric
        value will change as you press these arrow keys.  Also notice
        that an asterisk (*) will appear next the color on the left-hand
        side of the screen indicating the original color was modified.
        The asterisk (*) appears only when the original state of a
        color is modified.


        To show you how easy it is to change a color, follow the steps
        listed below:

        (1) If you have not already done so, press 02 to select the
            color Green.  The color Green will appear in the box,
            "Selected Color to be Modified", as well as the color
            number directly below it.

        (2) Press the F1 key to modify the Red content of the color.

        (3) Press the Down Arrow Key until the numeric indicator listed
            above the color indicates 63.

        (4) Press the F2 key to modify the Green content of the color.

        (5) Press the Up Arrow key until the numeric indicator listed
            above the color indicates 46.

        (6) Press the F3 key to modify the Blue content of the color.

        (7) Press the Up Arrow key until the numeric indicator listed
            above the color indicates 54.

        Your color should look hot pink-like and an asterisk should appear
        next to the low intensity word, "Green".  That's virtually all
        there is to it.  Please note that variations in color monitors
        may cause colors to look different from color monitor to color
        monitor.

        Any of the sixteen colors can be modified in the same way you
        just did.  With 64 intensities, each available for Red, Green
        and Blue, you have the capability of producing 262,144 different



        __________________________________________________________________

        DigiTec VgaColor               7                 Copyright (c)1990


        colors.  Naturally, you should use some discretion when changing
        colors.  The colors will remain in effect until you or some other
        application cancels them.  If you plan to modify a color simply
        for display during your DOS session, we recommend you modify only
        two colors--one for your foreground color and one for your background
        color.  You should also try to modify a color not commonly used
        by your applications.  This will help eliminate the tendency for
        some very garish-looking screens.  We have found that selecting
        low intensity Magenta (05) for your background and high intensity
        Cyan (11) for your foreground to be colors that do not conflict
        too often.  We also recommend you do not change Black (00),
        White (07) or high intensity White (15).  These are base, neutral
        colors used very often by applications.

        For DOS users who have never seen anything other than a black and
        white screen at the DOS prompt, please refer to the section
        titled "Changing DOS Foreground and Background Colors".  You
        need to know how to tell DOS to display foreground and background
        colors in order for any of the color modifications made with
        VgaColor to appear.

        If you wanted to spend the time to do so, you could examine the
        colors of your favorite applications, use VgaColor to modify the
        colors used by those applications and save a color description
        file.  You could then use the command-line load option to load the
        saved color file before starting your word processor or spread
        sheet.  The colors displayed in your applications would then
        display your modifications.
























        __________________________________________________________________

        DigiTec VgaColor               8                 Copyright (c)1990


                                RESTORING COLORS

                             F5 and F8 Function Keys



        VgaColor provides two methods of restoring colors to their original,
        unmodified state:


        F5 - Restore Active Color
        F8 - Restore All Colors


        F5 - Restore Active Color

        When the F5 key is pressed, the active color is restored to its
        original, unmodified state.  Active color means the color and color
        number showing in the "Selected Color to be Modified" box on the
        screen.


        F8 - Restore All Colors

        When the F8 key is pressed, all of the 16 color palettes are restored
        to their original, unmodified state.  A warning message will pop up
        to give you an opportunity to cancel or continue with the operation.

























        __________________________________________________________________

        DigiTec VgaColor               9                 Copyright (c)1990


                    LOADING AND SAVING COLOR FILE DESCRIPTIONS

                         Alt-L and Alt-S Functions Keys



        VgaColor provides you with the capability to load a previously
        saved color description or save a new or modified color description
        file.


        Alt-L - Load Saved Color File

        When you press the Alt-L keys, a window will pop up requesting the
        name of the file to load.  Simply enter the name of the file,
        including any drive, path and extension, and press the Enter key.
        Providing no problems occur during the load operation, Vgacolor
        will load and process the color file you selected.


        Alt-S - Save Current Settings/Disk

        When you press the Alt-S keys, a window will pop up requesting the
        name of the file to save.  Simply enter the name of the file,
        including any drive, path and extension, and press the Enter key.
        Providing no problems occur during the save operation, the new
        file will be saved.


        Naming Conventions

        Although you can give the files any name you wish, we recommend you
        use an extension of VGA.  This will provide easy identification for
        you to know that VgaColor created the file.


        Error Messages

        VgaColor performs several diagnostics during a load or save operation.
        If a problem occurs, a window will pop up giving you a description
        of the problem and the action you need to take.  If an error occurs,
        simply respond to the appropriate action requested by the error
        message.

        Do not modify the files created by VgaColor.  The program expects
        them in a very specific format.  The program will refuse to load
        the file if it is not in the expected format.  For programmers who
        wish to use the file in their own applications, a description of
        the file's format can be found in the "Technical Information"
        section of this documentation.


        __________________________________________________________________

        DigiTec VgaColor               10                Copyright (c)1990

                           ENABLE/DISABLE MODE CHANGE

                               Alt-M Function Key



        This option allows you to prevent another application from canceling
        your color modifications.  The pop-up menu allows you to select one
        of two options:


        1 - Enable

        Option 1 Re-establishes the ability for a Mode change to reset the
                 color palettes.  In other words, Mode changes are set back
                 to a normal operating procedure.


        2 - Disable

        Option 2 Disables a program's ability to reset the color palettes
                 to their default values, effectively preserving the modi-
                 fications you have made to the palettes.


                 The Disable function operates under the following
                 rules, restrictions and limitations:



           (1) If the Disable is in effect, a Mode change, whether issued
               from an application or by the DOS MODE command, will prevent
               a reset of the color palettes.


           (2) The Disable will remain in effect until you cancel it with
               Option 1, Enable Mode Change, or another program or
               application does not specifically re-enable a mode change
               in the same manner VgaColor prevents it.  Many graphic-based
               packages will probably do just that.


        If you use this option, it is important for you to remember that
        the Disable is in effect.  You may try to perform an operation
        at a later time and observe some peculiar color combinations and
        forget that the Disable function is in effect.  If you are not
        sure whether the Mode change is Enabled, simply use Option 1 to
        set the operation back to normal.

        The integrity of, or assurance that, the Disable function will work
        all of the time cannot be guaranteed because of other software
        activity.

        __________________________________________________________________

        DigiTec VgaColor              11                 Copyright (c)1990


                      PRINTING THE MODIFICATION SUMMARY REPORT

                                 Alt-P Function Key



        The report produced by this option gives you information on the
        current state of the individual color registers.  The report
        can be particularly useful for programmers who want to incorporate
        the colors into their own applications, since all you would
        need to do is simply supply the appropriate hex values to the
        proper Bios routine to change the color.  Further technical
        information may be found in the "Technical Information" section.

        Basically, the report provides three types of information.  The
        left-hand side shows the default values of the individual color
        registers for each of the 16 palettes.  Both hex and decimal
        values are listed.  The middle section of the report shows the
        palette/color Id number for each of the 16 palettes in hex and
        decimal.  The right-hand side of the report show the current,
        modified (if any) state of the individual color registers in hex
        and decimal.  If a color palette has been modified, a double
        asterisk (**) will appear on the far right-hand side of the report.

        The top of the report also shows the name of the file the
        information on the report pertains to, provided the file was
        saved before printing this report.

        If no modifications have been made to any of the color palettes,
        a window will pop up, requesting whether you want to proceed
        with the print operation.  A second window will appear asking
        for the printer assignment (port) to use.  Simply specify the
        proper assignment name (most printers are assigned to Lpt1)
        and press the Enter key.


















        __________________________________________________________________

        DigiTec VgaColor              12                 Copyright (c)1990


                              SOUND ON/OFF TOGGLE

                              Alt-T Functions Key



        This option merely turns of the sound when you press the up or
        down arrows to modify a color.  Simply press Alt-T to turn the
        sound On or Off.







                                 DOS WINDOW

                           Shift-F10 Function Keys



        This option allows you to jump into DOS without exiting
        VgaColor.  Simply press Shift-F10 to activate this function
        to place you in a DOS session.  To return back to VgaColor,
        type EXIT at the DOS prompt and press the Enter key.


























        __________________________________________________________________

        DigiTec VgaColor              13                 Copyright (c)1990


                         USING VGACOLOR AS A DOS COMMAND


        VgaColor may be invoked as a DOS command to load a saved color
        file description.  This allows you to load a saved color description
        file without using the interactive aspects of VgaColor.  This
        capability makes it extremely easy to automatically invoke
        VgaColor when you start up your computer by simply including
        the command in your AUTOEXEC.BAT file.

        To invoke as a DOS command, simply do the following:


                VGACOLOR  filename


        Filename is the name of a previously saved color file created by
        VgaColor.  The name of the file may contain a drive and path name.
        If a problem occurs loading the file, VgaColor will respond with
        an appropriate error message.

        ABSENCE OF A FILE NAME INVOKES THE INTERACTIVE PROCESS.  This
        is how VgaColor distinguishes between command-line access and
        invocation of the interactive process.


        Examples:


        VGACOLOR   COLOR1.VGA
        VGACOLOR   C:\VGACOLOR\MAINCOLR.VGA



                                SWITCHES


        Two switches may be set when invoking VgaColor as a command-line.
        These switches invoke the mode Enable/Disable functions, which
        are also available in the interactive VgaColor functions.  The
        following switches may be used:

        /D   =  Disable reset of color palettes by a MODE change
        /E   =  Enable  reset of color palettes by a MODE change

        To activate, merely enter one of the switches as follows:

        VGACOLOR/D  COLOR1.VGA
                 - or -
        VGACOLOR/E  COLOR1.VGA


        __________________________________________________________________

        DigiTec VgaColor              14                 Copyright (c)1990




        Only one switch may be specified at a time.  The /D or /E switch
        must follow VGACOLOR with no spaces before the /D or /E.  The
        file name is specified as explained above.  If you want to invoke
        a switch without specifying a file, simply use NUL for file name.
        Upper- or lower-case /D or /E may be used.

        Also, please refer to the "Changing DOS Foreground and Background
        Colors" Section for further information.










































        __________________________________________________________________

        DigiTec VgaColor              15                 Copyright (c)1990

        ***************************************************************
        *                                                             *
        *        CHANGING DOS FOREGROUND AND BACKGROUND COLORS        *
        *                                                             *
        ***************************************************************



        Have you ever asked yourself, "I have an expensive VGA monitor and
        all I ever see is a black-and-white DOS prompt.  How do you display
        colors?".  The solution to your question is relatively simple--finding
        the information to do it is sometimes difficult.  We provide a simple
        program, SETBF.EXE, to accomplish this.  SETBF replaces the cryptic,
        DOS PROMPT command to change foreground and background colors.



                                  ANSI.SYS


        A special file (called a device driver) is distributed with your
        DOS operating system called ANSI.SYS.  This device driver allows
        you to redefine keys and control your display.  Before we proceed
        with showing you how to display colors, there are a few things
        that need to be done.  Generally, ANSI.SYS is not automatically
        installed on a machine.  It is most often an optional feature
        left to the user to decide whether they want to use it or not.

        The ANSI.SYS driver is always specified and loaded from your
        CONFIG.SYS file.  If you are not sure  ANSI.SYS has been installed
        in CONFIG.SYS, examine the CONFIG.SYS file.

        If ANSI.SYS is not present, you must include it before using SETBF.
        Using a text editor or equivalent, add the following statement to
        your CONFIG.SYS file:


                           DEVICE=C:\DOS\ANSI.SYS

        The above example assumes you have a separate directory for
        DOS.  Some users install DOS in their Root Directory in which
        case you would add the following to your CONFIG.SYS file:


                           DEVICE=ANSI.SYS

        If ANSI.SYS is already installed in your CONFIG.SYS file, you
        may proceed to the instructions on the next page.  If it is not,
        add ANSI.SYS to your CONFIG.SYS file.  YOU MUST RE-BOOT YOUR
        COMPUTER after installing ANSI.SYS.



        __________________________________________________________________

        DigiTec VgaColor              16                 Copyright (c)1990

                               USING SETBF.EXE



        A Few Basics About Colors:

        On a color monitor, DOS and most text-based applications use a
        standard color palette consisting of 16 preset colors.  These
        are the only colors accessible by DOS.  A program like VgaColor,
        however, can modify any of the 16 standard colors (palettes).

        Use our program, SETBF, to display any of the standard DOS colors.
        The DOS PROMPT command could be used to do the same thing, but is
        much more difficult to use.  SETBF should work on any color monitor.
        Use the format below to initiate SETBF.  Upper- and lower-case
        letters may be used.


        Format:

                SETBF   foreground-color   on   background-color


        Where:  foreground-color and background-color is any valid color
                listed below.  The word 'on' separating foreground and
                background-color is optional.


        Valid FOREGROUND Colors:


                    Black           Red               Green
                    Brown           Blue              Magenta
                    Cyan            White             Gray
                    Yellow          Hi-Red            Hi-Green
                    Hi-Blue         Hi-Magenta        Hi-Cyan
                    Hi-White


        Valid BACKGROUND Colors:


                    Black           Red               Green
                    Brown           Blue              Magenta
                    Cyan            White



        Example:    SETBF   Hi-Cyan  on  Magenta

                    Will display a high-intensity Cyan foreground with
                    a Magenta background.

        __________________________________________________________________

        DigiTec VgaColor              17                 Copyright (c)1990


        You can also obtain help information for SETBF any time you
        wish by simply invoking SETBF in the following manner:


                              SETBF/h


        Do not include a space before the /h.





        You can now, if you wish, use VgaColor to modify the Magenta
        background and high-intensity Cyan foreground color to whatever
        suites you.  Any of the colors listed in the table may be used
        by SETBF to change colors.  If you use VgaColor to modify the
        colors, you would simply select color #5-Magenta and color
        #11-High-Intensity Cyan.  After you are finished modifying
        these colors and exit VgaColor, the foreground and background
        color you selected with SETBF.EXE will be different.



        REMEMBER - You have to have a color displayed in your DOS session
                   in order to show any modifications made by VgaColor!





        *****************************************************************
        *                                                               *
        *  Do not use the DOS PROMPT command to change colors if you    *
        *  also use SETBF.  The PROMPT command has the effect of making *
        *  changes using SETBF non-permanent.                           *
        *                                                               *
        *****************************************************************














        __________________________________________________________________

        DigiTec VgaColor              18                 Copyright (c)1990


        Automating the Process:

        If you want your colors automatically invoked, all you need to do
        is include the SETBF and VGACOLOR commands in your AUTOEXEC.BAT
        file.  Then, every time you start your computer, the colors will
        automatically be set.  To do this, simply add the following to
        your AUTOEXEC.BAT file:



                             SETBF  Hi-Cyan  on  Magenta
                             VGACOLOR  MYCOLOR.VGA




        Note - When specifying the file for VGACOLOR to load, we assume
               you saved the modified color description file.  For
               the purposes of this example, we use MYCOLOR.VGA and
               also assume MYCOLOR.VGA is located in your Root directory.
               The color file description can reside anywhere and the
               filename can be of your choosing.

               The example above also assumes that you generated a Magenta
               background and high-intensity Cyan foreground using SETBF.
               You would also have used VgaColor to modify color
               #5-Magenta and color #11-High-Intensity Cyan.  You must
               modify the same color(s) with VgaColor as those specified
               for SETBF in order for the new colors to be displayed!























        __________________________________________________________________

        DigiTec VgaColor              19                 Copyright (c)1990

        ***************************************************************
        *                                                             *
        *                    TECHNICAL INFORMATION                    *
        *                                                             *
        ***************************************************************



        This section offers some technical information about VgaColor which
        may be primarily of interest to programmers.  You may find VgaColor
        useful for designing your VGA color schemes and using the saved
        file description in your own programs.  This may save you some
        development time for this portion of your application.  The infor-
        mation is not exhaustive, and we assume you have some knowledge
        of the information we are providing.


        VgaColor takes advantage of Bios (Int 10h) for all manipulation of
        the color palettes and individual color registers.  This method is
        available only for VGA monitors.  Since VgaColor was designed for
        VGA monitors, EGA was not a concern.

        Basically, there are two methods you can use to access the color
        palettes and individual color registers: (1) hard-code the values
        in your program or (2) use the saved color file description created
        by VgaColor.  Which ever method you choose, the following assembly
        routine (or comparable high-level language method) may be used to
        modify the individual color registers:



                     mov  AH,10h      ;Palette Services
                     mov  AL,10h      ;Service 10h - Set Color Register
                     mov  BX,2        ;Palette Id to Change - (Decimal)
                     mov  DH,00h      ;Intensity of Red   (hex)
                     mov  CH,2Ah      ;Intensity of Green (hex)
                     mov  CL,00h      ;Intensity of Blue  (hex)

                     Int  10h         ;BIOS Service



        The example above will restore Palette # 2 back to its original
        default color, Green.  If hard coding the values in your program,
        simply use the print option of VgaColor to list the current state
        of the individual color registers.  Supply the palette Id decimal
        value for BX, Red intensity for DH (hex), Green intensity for CH
        (hex) and Blue intensity for CL (hex).

        Remember, you are changing one of the 16 palettes (0 - 15) one
        at a time.  If you change all 16 palettes, the programming
        example above would have to be performed 16 times.

        __________________________________________________________________

        DigiTec VgaColor              20                 Copyright (c)1990


                    FORMAT OF THE SAVED COLOR FILE DESCRIPTION



        You may find it much more convenient to change the color registers
        using the saved color file description, rather than hard coding
        the desired values in your program.  Listed below is the format
        of this file.

        The color description is a simple, 80-byte record containing only
        one record in the file in a byte-stream format:


        Position      Length        Value                 Description

         1 - 8           8          VgaColor    Id field used by VgaColor.
                                                For your application, you
                                                may change it to any desired
                                                value.

         9 -72          64          Variable    These are the 1 byte, binary
                                                values used to modify the
                                                color palettes and values
                                                of the individual color
                                                registers.  The 64 bytes
                                                are arranged as an array
                                                which occurs 16 times:


                                                 1 - Palette Id      Byte  9
                                                     Red Intensity   Byte 10
                                                     Green Intensity Byte 11
                                                     Blue Intensity  Byte 12
                                                         .
                                                         .
                                                         .
                                                16   Palette Id      Byte 69
                                                     Red Intensity   Byte 70
                                                     Green Intensity Byte 71
                                                     Blue Intensity  Byte 72


                                                Simply view the file as
                                                arranged as a group of
                                                4 fields occurring 16 times.




        73-80            8          Not Used


        __________________________________________________________________

        DigiTec VgaColor              21                 Copyright (c)1990


        When using the saved color file, the values supplied to Int 10h
        are the same as shown for the hard-coded example except the
        value for Palette Id (BX).  Since the value for Palette Id is
        a hex representation, move the value in the field to BL and
        00h to BH.  Simply read the one record in the file and program
        a loop to load the Palette Id, Red, Green and Blue intensities
        and perform Int 10h 16 times.


        Note:  The values for the Palette numbers may seem different than
               what you may have expected.  Normally, their values are
               0 thru 15 (00h thru 0Fh).  Modifying the VGA color palettes
               using Bios requires different values which is why, for
               examples, palettes 08h through 0Fh have the values of
               38h thru 3Fh assigned to them.


        It is also a good practice to reset the color palettes back
        to their original, unmodified state upon termination of your
        application.  Your users will appreciate it.  This can be done
        by either restoring the 16 color palettes using the default
        values, or by issuing a mode change using Int 10h, Service 0.






























        __________________________________________________________________

        DigiTec VgaColor              22                 Copyright (c)1990


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2576

     Volume in drive A has no label
     Directory of A:\

    VGASAMP  BAT       876   8-21-90   8:48a
    TESTCOLR VGA        80   6-02-90  10:54a
    REGISTER YOU      2163   5-05-91  11:13a
    VGACOLOR DOC     47172   5-05-91  10:59a
    VGAREAD  ME       1734   8-21-90   8:51a
    VGACMDL  EXE     14592   5-12-91   5:26p
    VGACOLOR EXE     26496   5-12-91   5:26p
    VGAFIO   EXE     22528   5-12-91   5:26p
    VGAMAPER EXE     22016   5-12-91   5:26p
    VGASCRN  EXE     53504   5-12-91   5:26p
    SETBF    EXE      8832   5-12-91   5:26p
    GO       BAT       119   6-13-91   4:00p
    PREVIEW  EXE      7347   4-18-91   1:15p
    FILE2576 TXT      2962   6-13-91   4:01p
           14 file(s)     210421 bytes
                          104448 bytes free
