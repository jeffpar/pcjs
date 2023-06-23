---
layout: page
title: "PC-SIG Diskette Library (Disk #1305)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1305/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1305"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FANTASY, GEMCAP, WHAT AND MORE"

    Create your own animated art and interesting designs with FANTASY.
    
    Paint flowing, colorful pictures or designs as you move the mouse or
    press the cursor keys.  As the images are created, the art is saved to a
    disk file so to replay on the screen whenever you want.
    
    GEMCAP is a memory-resident utility that helps you capture screen
    images from programs, save them in separate disk files and load them
    into other programs.  The disk files are compatible with any program
    that reads GEM.IMG files, regardless of whether the original screen was
    in text or graphics mode.  These include WordPerfect, Ventura Publisher,
    and many other popular programs.
    
    It's been three months since you used that file. You know it's in there
    somewhere, but where?  And what the heck did you name it? If you had
    used WHAT, you'd be able to find it quickly.
    
    If your filenames have lost their meaning, WHAT will make sense of them.
    This program maintains a listing of your files and directories and lets
    you attach descriptions of up to 61 characters for each. You then can
    use WHAT's search facility to locate that obscure file you know you
    have, somewhere....
    
    PROCESS simplifies access to many small programs using a point-and-shoot
    technique. It can be started from either the DOS command line or a batch
    file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FANTASY.DOC

{% raw %}
```





                                  Fantasy

                                Version 2.0

                    Copyright 1987 by Natural Software
                           19 South 5th. Street
                        St. Charles Illinois 60174
                              (312) 377-7320
                            All Rights Reserved



                             January 17, 1988





                            Equipment required:
                            -------------------

   -    IBM compatible PC, XT, AT with IBM compatible Color Graphics
        Display Adapter and (preferably) a color display. Fantasy writes
        directly to the graphics screen buffer for speed. It is therefore
        not compatible with other display adapters such as the Hercules
        standard.

   -    MicroSoft compatible mouse, with either MOUSE.SYS or MOUSE.COM
        loaded. (Fantasy will run without the mouse, and you can cause
        movement with the cursor keys -- but it just isn't the same.)


                             What is Fantasy?
                             ----------------

   -    Quick summary: fantasy creates flowing graphic images on your
                       display as you move your mouse.

If art can be fleeting, transitory and personal -- then Fantasy is an
artist's tool, and you are the artist, and you are the audience.

Fantasy is a tool for personal performance art. Like building sand castles
or blowing bubbles, each performance is different and highly personal.

Fantasy lets you control a variety of pleasing and sometimes hypnotic
images on your graphic display. As you move the mouse the image constantly
moves and responds in never-ending, never-repeating animated sequences.


                            How to use Fantasy:
                            -------------------

Simply run FANTASY.EXE. An initial display will show a list of valid
commands and the keys used to evoke them:

                  |--------------------------------------------|
                  | Copyright 1987 by Michael Allen            |
                  | Move the mouse for some action             |
                  | [right button] = change color              |
                  | [left  button] = end effect                |
                  | [both buttons] = change effect             |
                  | [F1] help           [F2] color             |
                  | [F3] cursor off/on  [F4] change cursor     |
                  | [F5] record file    [F6] replay file       |
                  | [F7] erase off/on     [F8] sound on/off    |
                  | [Shift F1] Scroll-1   [Shift F2] Scroll-2  |
                  | [Esc] stop effect     [F10] Exit           |
                  | -------------- Effects ---------------     |
                  | [V] Centered Boxes    [B] Boxes            |
                  | [R] Rectangles        [L] Lines            |
                  | [H] Move Home         [C] Circles          |
                  | [M] Multi-Lines       [F] Free lines       |
                  | Enter a number to change box size          |
                  |--------------------------------------------|


The keys and their effects are as follows:

   [B] Boxes           constant sized square boxes
   [C] Circles         circles
   [F] Free lines      line length depends on cursor movement lines seem to
                       follow your movement.
   [V] Vert boxes      rectangles remain centered around orig. cursor
                       position
   [L] Lines           normal lines
   [M] Multi-Lines     lets you start new origin with Enter key (Left
                       Button)
   [R] Rectangles      normal rectangles

   [F5]                enter filename to record your performance
   [F6]                enter filename to playback recorded performance
   [F7]                toggle erase (xor) graphics effect
   [F8]                toggle sound - pitch is determined by cursor
                       position
   [Shift F1]          scroll full screen up
   [Shift F2]          scroll top and bottom half of screen toward center


To start the action press any key on your keyboard. Then move your mouse
and keep it moving slow and steady to get the idea. You should see the
initial square mouse cursor shape move in response to the mouse, creating a
snaking trail moving off the top of the display. When you stop moving the
mouse, animation stops. The idea is to "conduct" the performance by
constantly moving in small or large sweeping curves.

You can re-display the initial help screen by pressing the [F1] key
(without moving the mouse).


                            Alternative method:
                            -------------------

You can also run FANTASY.EXE with an optional command line argument to
specify a command file or list of files. This method causes Fantasy to
automatically run a pre-recorded performance. For example to automatically
run the two command files: DEMO1 and DEMO2, type:

                       FANTASY DEMO1 DEMO2 [ENTER]


                              Special effects
                              ---------------

You turn on one of the special effects by pressing the key letter for that
effect. For example press [B] to start the Box effect.

The Box effect: press [B] to start the box effect. This causes a square box
to be drawn as the mouse is moved. Initially, the size of the box is eight
pixels. You can change this size by: 

        1.   press [Esc] to end the current effect.
        2.   enter the new size using the number keys. For example enter
             [48] to change the box size to 48 pixels.
        3.   return to the box effect by pressing [B].
        4.   Then return to a lower scroll increment value by pressing the
             number keys: [4] for instance.


The Rectangle effect: press [R] to start the rectangle effect. This draws
rectangles of varying size originating from the position of the mouse
cursor when the effect was started, moving to the new mouse position as you
move.

The Circle effect: press [C] to start the circle effect. This draws circles
of varying size with their center at the position of the mouse cursor when
the effect was started. Their diameter is changed as you move the mouse.

The Line effect: press [L] to start the line effect. This draws a sequence
of lines starting from the position of the mouse cursor when the effect was
started, moving to the new mouse position as you move.

The Multi-Line effect: press [M] to start the Multi_line effect. This is
similar to the line effect, except that you can change the origin point by
pressing the mouse left button. Each time you press the left button line
drawing starts from that new position.

The Free lines: press [F] to start the Free lines effect. This draws a
short line (depending on how fast you move the mouse) that seems to follow
the mouse movement like a tail. This effect is most effective with the
mouse cursor off.


                             Switching Effects
                             -----------------

To end one effect and start a new one, press the [Esc] key, then press the
selection key for the new effect.

Another way to switch: press both mouse buttons to switch from one effect
to another in sequence without needing to exit. This allows a more seamless
transition from one effect to the next in your performance. This method
will not get you into the Multi-Line effect, but if you start with the
Multi-Line effect then press both mouse buttons you will eventually return
to it.  


                             The mouse cursor
                             ----------------

Turning off the mouse cursor: Some effects appear better with the mouse
cursor turned off. To turn it off:

        1.   press [Esc] to end the current effect.
        2.   press [F3] to turn the mouse cursor off.

You can turn the mouse cursor back on by repeating the above steps.

Changing the mouse cursor: there are currently three cursor shapes: The
initial square box cursor, a cross cursor and a diagonal cross with arrows.
You change to a new shape by:

        1.   press [Esc] to end the current effect.
        2.   press [F4] to turn the change to a new mouse cursor shape.


                               Screen Color
                               ------------

Fantasy uses the Color Graphics Adapter's high resolution mode of 640 by
200 pixels. In this mode the background is always black, but you can change
the foreground color to one of the 16 possible by either:

        1.   press the [F2] key, or
        2.   press the mouse right button.

This works even while a special effect is on.


                            Recording to a File
                            -------------------

To save (record) your fantasy performance for later playback, press the
[F5] key. You will be asked to enter a filename. Enter any valid filename
with optional drive and path designation. (It will overwrite any existing
files with the same name in the same path, so be careful.) From that point
on, each keystroke and mouse movement will be saved in that file. To stop
recording, type: [%] (shifted 5). This is the special character to
terminate recording (it is placed in the file to terminate the playback
also).


                         Playing back from a File
                         ------------------------

To begin playing back a performance from a file recorded as described
above, press the [F6] key and enter the filename (drive and path optional)
of a valid performance file. The keystrokes and mouse movements stored in
the file will begin being executed just as they were recorded. The only
difference is that the timing between events is regular and static. This
allows you to compose your performance files slowly and carefully -- they
will be played back fast and snappy.

                              Ending Fantasy
                              --------------

        1.   press [Esc] to end the current effect.
        2.   press [F10] to exit and return to DOS.

        
                            Genesis of Fantasy
                            ------------------

You may find it interesting: The fantasy program is the result of a simple
error made while debugging a new graphics program. This new program called
PC-Draft III is an object oriented CAD drafting program which will be
similar to our PC-Draft II product which is a pixel based drafting program.
In the course of debugging, a trace message inadvertently caused the
graphics display to scroll each time the cursor was moved. This caused
effects similar to what you see with Fantasy. We found ourselves delighted
with some of the effects, playing with them for hours. We have no idea
whether this will have the same impact on others, or whether this
phenomenon is strictly personal -- perhaps because it is our own
programming effort. 


                             Status of Fantasy
                             -----------------

The Fantasy program is protected by copyright. It is not to be resold or
used for any commercial purpose or included with any other product or
software collection without our permission. It is being distributed as
shareware. This means that you are granted the right to freely use Fantasy
and to make copies for your friends.

The shareware philosophy is to pay smaller amounts for well crafted and
useful software from developers who cannot spend the millions of dollars on
marketing necessary to compete with the large software development
companies. You benefit by being able to try a wider variety of software
products to find the ones that suit your particular purpose. And the trial
is free. The shareware developer benefits from being able to distribute his
work to a wider audience than would be possible through normal channels.

Your share of the responsibility for shareware to continue, and to support
the development of more and better products is to distribute your shareware
programs to others and become a registered user of those products you like
and use. 

If you want register your copy of Fantasy or to use Fantasy in a commercial
environment (not for your non-business personal use) you can obtain a
license:

             Send: $20.00 to:    

                       Natural Software
                       19 South 5th. Street
                       St. Charles, Illinois 60174

If you would like information on our other products, specifically PC-Draft
II, or would like to order with your VISA or Master Card, call: (312) 377-
7320
```
{% endraw %}

## FILE1305.TXT

{% raw %}
```
Disk No: 1305
Program Title: WHAT, PROCESS, Fantasy, Gemcap
PC-SIG version: 1

If your filenames have lost their meanings for you, WHAT will make sense
of them.  This program maintains a listing of your files and directories
and lets you attach descriptions of up to 61 characters for each.  You
can then use WHAT's search facility to locate that obscure file you know
you have someplace.

PROCESS is a utility that simplifies access to many small programs using
a point-and-shoot technique.  It can be started from either the DOS
command line or a batch file.

Create your own animated art and interesting designs with FANTASY.
Paint flowing graphic images as you move the mouse or press the cursor
keys.  As the images are created, the art is saved to a disk file so it
can be replayed on the screen any time you want.

GEMCAP is a memory-resident utility that lets you capture screen images
from programs, save them in separate disk files, and later load them
into other programs.  The disk files are compatible with any program
that reads GEM.IMG files, regardless of whether the original screen was
in text mode or graphics mode.

Usage:  Directory Management/User Screen-Interface Program/Graphic
Design.

Special Requirements:  Two floppy disk drives for PROCESS; FANTASY
requires a Color Graphics Adapter, and a MicroSoft-compatible mouse
(FANTASY will also work with the cursor keys).  A color monitor is not
required but is desirable.  FANTASY will not work with Hercules.  GEMCAP
requires a Color Graphics Adapter (CGA) or EGA or compatible.  It will
not work with other display adapters such as Hercules.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00 for WHAT, $20.00 for PROCESS, $20.00 for
FANTASY, $20.00 for GEMCAP.

File Descriptions:

------------  WHAT
WHAT     COM  Main program.
WHAT     DOC  Documentation text.
READ     ME   Text of information and instructions.
------------  PROCESS
PROCESS  DOC  Operating manual for PROCESS program.
PROCESS  EXE  Executable program PROCESS.
AUTOPROC DAT  Sample data file for PROCESS.
SAMPLE   DAT  Sample data file for PROCESS.
FILES    TXT  Description of files included in this package.
------------  FANTASY
START    BAT  Batch file to start demonstration of program.
FANTASY  DOC  Manual.
FANTASY  EXE  Main program file.
DEMO1         Data file.
DEMO2         Data file.
------------  GEMCAP
GEMCAP   COM  Main program.
GEMCAP   DOC  Manual.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FILES.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No                 Command Processor Menu                 Ver. 1.03
------------------------------------------------------------------------
This utility was designed to simplify access to multiple small programs,
using a simple point and choose menu.  Programs from PC-SIG Hard Disk
Utilities disk no. 478 are used as menu samples.

PROCESS  EXE  Command Processor Menu program
PROCESS  DOC  Brief documentation [TYPE PROCESS.DOC > PRN]
AUTOPROC DAT  Sample Default Data File for PROCESS.EXE
SAMPLE   DAT  Sample Data File for PROCESS.EXE
```
{% endraw %}

## GEMCAP.DOC

{% raw %}
```






                                  Natural Software
                                19 South 5th. Street
                             St. Charles, Illinois 60174
                                   (312) 377-7320


        This share-ware  utility program:  GEMCAP.COM, allows  you to capture
        screen images  from other  programs, save  them in  separate GEM .IMG
        files, and  later load  them into  other programs  that can read this
        format such as Ventura Publisher. 

        GEMCAP requires an IBM color graphics adapter (CGA) or EGA or compati-
        ble. It will not work with other display adapters such as Hercules.

        GEMCAP is a Terminate and Stay Resident (TSR)  program. When  you run
        it  from  the  DOS  command  line,  it will announce its presence and
        quietly sink into the background and  wait to  be called  into action
        (when  its  "hot  key"  is  pressed).  When  you run GEMCAP, you must
        provide it with the location and starting file  name to  use to store
        the screen  images it  captures. For  example, you might start GEMCAP
        with this command:

                    GEMCAP C:\SCREENS\SCREENA.IMG

        Now GEMCAP will store its screens  in the  SCREENS sub-directory. The
        first screen  it saves will be called SCREENA.IMG, the second will be
        called SCREENB.IMG. Each  subsequent  .IMG  file  will  increment the
        character in  the filename just before the extension. These files are
        graphic bit image files  compatible with  any program  that reads GEM
        .IMG files,  regardless of  whether the  original screen  was in text
        mode or graphics mode.

        To activate GEMCAP and save the  current screen  to a  .IMG file, you
        press the [Alt + left Shift] keys together. You will hear a beep when
        GEMCAP is  called. Three  beeps means  it successfully  wrote an .IMG
        file to the specified directory. Only one beep means it was unable to
        create the file (could not find the directory?). Only two beeps means
        it created  the file, but could not write the full 16k screen buffer,
        (disk full?).

        GEMCAP will  detect the  current video  mode and  adjust. It converts
        text mode screens into bit mapped graphics.

        Like any other TSR, GEMCAP may have compatibility problems with other
        software, especially other TSR's. If you have trouble, try installing
        GEMCAP by  itself and  adding your  other TSR utilities one at a time
        after you get GEMCAP to work.

        Removing GEMCAP:

        You can remove GEMCAP from memory (well, almost) by pressing the [Alt
        + Right  Shift] key  combination. This  disengages GEMCAP  so that it
        will not interfere with other software. This will  also release (most
        of) the  memory used  by GEMCAP.  When loaded and active, GEMCAP uses
        3856 bytes of memory. After removal  with [Alt  + Right  Shift], only
        288 bytes remain allocated. It's probably a good idea to do this only
        at the DOS command prompt!





        Different sized images:

        The size of the captured image is controlled by two words in the .IMG
        file. These are constants  in  the  GEMCAP  program.  The  first word
        specifies  the  pixel  size  in  width, the second word specifies the
        pixel size in height  (unit of  measure is  in microns).  The default
        values are: (in hexidecimal):

          Address        Value        
          0108           00D5 (width), 
          010A           01AA (heigth).

        To make  the displayed image one half the size of the default, change
        these values to


          Address        Value        
          0108           006A (width), 
          010A           00D5 (heigth).

        The steps using Debug to do this are: (you enter the stuff marked ^^)

               DEBUG XYZ.IMG                 (Load the image file)
	       ^^^^^^^^^^^^^
               E 0108                        (enter data at address 0108)
	       ^^^^^^
               XXXX:0108 00.00 D5.6A         (change  00D5   to  006A,  press
                            ^^    ^^           space bar between entries)

               E 010A                        (do the same for address 010a)
	       ^^^^^^
               XXXX:010A 01.00 AA.D5         (change 01AA to 00D5)
			    ^^	  ^^
               W                             (write the changes to the file)
	       ^
               Writing 4020 bytes

               Q                             (return to DOS)
	       ^
        You can experiment with other values. However, some combinations will
        cause truncations of pixels when the image is displayed.

        If you  find a  set of values that work for your application and wish
        to make them the default values for all  captured images,  change the
        corresponding values in the program (GEMCAP.COM) itself. These are at
        address locations 0951 and 0953  (hex)  when  GEMCAP  is  loaded into
        DEBUG.











        ShareWare:

        GEMCAP is  being distributed  as shareware. This means that it is not
        free. This means that you must  pay to  use it.  However, you  do not
        have to pay to try it, test it, and to determine if it is going to be
        useful to you. You  are probably  familiar with  the concept  by now.
        ShareWare programs give you the advantage of "test driving" them. The
        advantage to the developer  is a  relatively inexpensive distribution
        method.  For  this  concept  to  work and keep working for our mutual
        advantage, you really must register  and  pay  for  the  software you
        actually find useful.

        To register  your use  of GEMCAP,  send $20.00 to Natural Software at
        the address above. We  will  send  you  a  description  of  our other
        software offerings and provide telephone support. 

        If you  have suggestions for improvement, or problems please write or
        call.




```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  Disk No 1305 WHAT, PROCESS, Fantasy, Gemcap  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the documentation, type:                                     ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To start WHAT, type:                                                  ║
║             WHAT (press enter)                                          ║
║                                                                         ║
║   To start PROCESS, type:                                               ║
║             PROCESS (press enter)                                       ║
║                                                                         ║
║   To start FANTASY, type:                                               ║
║             FANTASY (press enter)                                       ║
║                                                                         ║
║   To start a demo of FANTASY, type:                                     ║
║             START (press enter)                                         ║
║                                                                         ║
║   To start GEMCAP, type:                                                ║
║             GEMCAP (PRESS ENTER)                                        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PROCESS.DOC

{% raw %}
```








                                 CMD Processor
                                 Version  1.03

                  (c) Copyright 1988, GREENLINE Computing Co.
                  -------------------------------------------

        Overview:

            This utility was designed to simplify access to multiple
        small programs, using a simple point and choose menu. When a
        selection has been made, the program name is displayed and an
        opportunity to add any required or optional parameters to a
        program filename is given.

            There is an option of directly entering a filename or a
        DOS command directly through a command line.

            The ability to read a menu file allows the menu selector
        to be flexible enough to maintain an unlimited number of menus.


        Requirements:

            At least 128k bytes must be available in memory for the
        program to work efficiently.  Color was used in the design of
        the program, but it is not necessary for proper operation.
        Colors were chosen to prevent illegibility when used with
        monochrome systems.  A hard disk is also not required, however
        each entry will need additional editting or disk swapping.
        Written in compiled BASIC and use of the BASIC SHELL command
        requires that COMMAND.COM be available on the diskette, or in
        the path on the hard drive.


        Starting the program:

            Both PROCESS.EXE and the menu file you wish to use must be
        on the same drive, and preferably in the same path.  The
        program can be called from a batch file, or entered directly on
        the DOS prompt.  The default menu filename is AUTOPROC.DAT.
        Unless another file is specifically requested, an attempt will
        be made to read this file.  If the file is not found on initial
        startup, an error message will be displayed, but the menu will
        still be presented with all the selections left blank. The
        decision to abort processing or to choose a valid menu file can
        then be made.

        C:\>PROCESS            : Load program, call default filename
                                       or
        C:\>PROCESS filename   : Load program, call specified filename










          PROCESS.EXE     (c) Copyright 1988, GREENLINE Computing Co.
          -----------     -------------------------------------------


        The program:

            The program menu file is read and a 4 column listing of
        program filenames is presented.  The highlighted bar in the
        upper left hand cornor of the menu, will show the four valid
        arrow keys.  This is the Home position.  When the highlighted
        bar is moved from filename to filename, the currently high-
        lighted filename is also displayed at this postion in the form
        as it will appear on the command line.  This will become the
        filename placed into the DOS command line if the Enter key is
        pressed.  Should you press Enter while in the Home postion, or
        on a blank filename a blank line will be place into the DOS
        command line. This has the same effect as pressing F2.

            The 4 Function keys used in the program are displayed at
        the top of the menu.  The F1 key, or Info key is provided for
        program registration information.

            The F2, DOS Command Line function key is used for
        immediate jumps to the DOS command line, and can be used
        instead of the enter key to select the highlighted program.

            While on the DOS command line, the line editor INSERT mode
        will be ON.  To turn it OFF, press the Ins key.  The cursor
        will then become a full BLOCK cursor and will overwrite any-
        thing at the cursor.  Most of the standard editing commands are
        used to enter information on the command line.  When the
        command is complete, press Enter again. The requested command
        will then be processed.  When the program is finished, a "Press
        any key" prompt will bring you back to the menu.

            A large number of DOS commands have been tested, from MS-
        DOS 2.1 to PC-DOS 3.2 without problem.  An error will be
        reported from withing the SHELL in the familiar DOS fashion.

            The F3 Function key ends the program returning you to DOS or
        if called through a batch file, allows a clean return to the
        next batch command.

            When you need a new menu file, press the F4 Function key.
        The highlighted bar will return to the home position.  There is
        enough room to enter a full filename, with extension.  An
        editor will test for valid alpha-numeric characters, as well as
        the special symbols allowed by DOS for use in filenames.  The
        period is also allowed to permit inclusion of filename
        extensions.  Invalid filename characters except for the period
        will not be allowed on this line.  The program will NOT check
        for valid filename or extenstion length.  Check your DOS manual
        if you are unsure of the proper filename and extension usage.
        Prior to pressing Enter, be sure the data file program you wish
        to read is in the default drive.





                                    Page (2)





          PROCESS.EXE     (c) Copyright 1988, GREENLINE Computing Co.
          -----------     -------------------------------------------


        General Editing Keys:

        Left/Right arrow keys will automatically wrap the high- lighted
        cursor around to the opposite side of the           menu.  The
        Up/Down arrows will move from the bottom of one
        column to the top of the next, with automatic wrap from
        the bottom of the last column to the top of the first, and
        vis-versa.

            Up arrow ................ Move Up one
            Down arrow .............. Move Down one
            Left arrow .............. Move Left one column
            Right arrow ............. Move Right one column
            Home key ................ Move to upper left cornor
            End key ................. Move position #64
            Pg Up ................... Move to Top of column
            Pg Dn ................... Move to Bottom of column
            Esc ..................... Abort from command line
            Enter ................... Processes current command
            Ins ..................... Toggle insert ON/OFF
            Del ..................... Delete character at cursor
            Backspace ............... Erase character, move left one






               Registration:

                      (c) Copyright 1988, GREENLINE Computing Co.

                             Gilbert J. Thompson
                             31 South Buckboard Lane
                             Marlborough, Ct.  06447


                             CMD Processor Ver. 1.03

                         If you find this program useful, a
                         registration fee of $20.00 would be
                         appreciated.  Be sure to include the
                         version number of this program to
                         receive the latest update.












                                    Page (3)





          PROCESS.EXE     (c) Copyright 1988, GREENLINE Computing Co.
          -----------     -------------------------------------------


          Data file structure:

            Although seemingly awkward at first glance, this data file
        structure lends itself to more flexibility in the design of a
        menu than most of the other file types tried.  When created
        with a pure ASCII word processor or text editor with simple
        column sorting capabilities, there is little that cannot be
        done.  This data file structure also permits leaving lines blank
        to separate "TYPES" of callable programs.



            To create your own menu, the best approach would be to
        read AUTOPROC.DAT into your text editor, then type over the
        sample entries.

            The first line of the file is read as the menu title.  The
        title can be up to 77 characters long.

            The following 64 lines contain two pieces of information.
        The program filename, up to 8 characters and the program
        extension, up to 3 characters.  For clarity, it is suggested
        that the DOS convention be followed.  The program name
        capitalized and left justified, then the extension placed in
        the last three spaces to the right.  A space for the period is
        included for further clarification of the file name.  If your
        text editor supports screen import, importing the directory, or
        part of the directory itself as a text file can minimize the
        amount of typing you will have to do.

            Following the program name, enter up to 75 characters to
        display as a help bar at the bottom of the menu screen when
        that program name is highlighted.  The most effective use of
        the help bar would be a reminder of the syntax and options
        which may be used to call that particular program.  For
        clarity, enter a space both before and after the help bar
        statement.  For example,

        "ALTER   .COM"," ALTER [d:][path]filename[/V][/N|/R/H/S/A|/B] "

        when ALTER is highlighted, the help bar at the bottom of the
        menu will display a reminder of the correct syntax to use,
        along with the optional switches available to the program.

            When you press F2, or the Enter key, the options you would
        like to use can then be added to the program name.

            All 64 lines must be present in the data file, or an "OUT
        OF DATA" error will occur.  Again, for clarity sake, use (12)
        blank spaces to fill the unused program name lines, and at
        least 12 blank spaces for any blank help bars.  This will keep
        the menu presentation from looking haphazard.




                                    Page (4)





          PROCESS.EXE     (c) Copyright 1988, GREENLINE Computing Co.
          -----------     -------------------------------------------



            A datafile named SAMPLE.DAT is provided for you to overtype.


        " SAMPLE MENU DATA FILE - TITLE - enter up to 77 characters "
        "filename.ext"," Program Help Bar 01, up to 75 characters long "
        "file02  .ext"," Program Help Bar 02, up to 75 characters long "
        "file03  .ext"," Program Help Bar 03, up to 75 characters long "
        "file04  .ext"," Program Help Bar 04, up to 75 characters long "
        "file05  .ext"," Program Help Bar 05, up to 75 characters long "
        "file06  .ext"," Program Help Bar 06, up to 75 characters long "
        "file07  .ext"," Program Help Bar 07, up to 75 characters long "
        "file08  .ext"," Program Help Bar 08, up to 75 characters long "
        "file09  .ext"," Program Help Bar 09, up to 75 characters long "
        "file10  .ext"," Program Help Bar 10, up to 75 characters long "
        "file11  .ext"," Program Help Bar 11, up to 75 characters long "
        "file12  .ext"," Program Help Bar 12, up to 75 characters long "
        "file13  .ext"," Program Help Bar 13, up to 75 characters long "
        "file14  .ext"," Program Help Bar 14, up to 75 characters long "
        "file15  .ext"," Program Help Bar 15, up to 75 characters long "
        "file16  .ext"," Program Help Bar 16, up to 75 characters long "
        "file17  .ext"," Program Help Bar 17, up to 75 characters long "
        "            ","            "
        "            ","            "
        "file20  .ext"," Program Help Bar 20, up to 75 characters long "
        "file21  .ext"," Program Help Bar 21, up to 75 characters long "
        "file22  .ext"," Program Help Bar 22, up to 75 characters long "
        "file23  .ext"," Program Help Bar 23, up to 75 characters long "
        "file24  .ext"," Program Help Bar 24, up to 75 characters long "
        "file25  .ext"," Program Help Bar 25, up to 75 characters long "
        "file26  .ext"," Program Help Bar 26, up to 75 characters long "
        "file27  .ext"," Program Help Bar 27, up to 75 characters long "
        "file28  .ext"," Program Help Bar 28, up to 75 characters long "
        "file29  .ext"," Program Help Bar 29, up to 75 characters long "
        "file30  .ext"," Program Help Bar 30, up to 75 characters long "
        "file31  .ext"," Program Help Bar 31, up to 75 characters long "
        "file32  .ext"," Program Help Bar 32, up to 75 characters long "
        "file33  .ext"," Program Help Bar 33, up to 75 characters long "
        "file34  .ext"," Program Help Bar 34, up to 75 characters long "
        "file35  .ext"," Program Help Bar 35, up to 75 characters long "
        "file36  .ext"," Program Help Bar 36, up to 75 characters long "
        "file37  .ext"," Program Help Bar 37, up to 75 characters long "
        "file38  .ext"," Program Help Bar 38, up to 75 characters long "
        "file39  .ext"," Program Help Bar 39, up to 75 characters long "
        "file40  .ext"," Program Help Bar 40, up to 75 characters long "
        "file41  .ext"," Program Help Bar 41, up to 75 characters long "
        "file42  .ext"," Program Help Bar 42, up to 75 characters long "
        "file43  .ext"," Program Help Bar 43, up to 75 characters long "
        "file44  .ext"," Program Help Bar 44, up to 75 characters long "
        "file45  .ext"," Program Help Bar 45, up to 75 characters long "
        "file46  .ext"," Program Help Bar 46, up to 75 characters long "
        "file47  .ext"," Program Help Bar 47, up to 75 characters long "
        "file48  .ext"," Program Help Bar 48, up to 75 characters long "
        "file49  .ext"," Program Help Bar 49, up to 75 characters long "


                                    Page (5)





          PROCESS.EXE     (c) Copyright 1988, GREENLINE Computing Co.
          -----------     -------------------------------------------


        "file50  .ext"," Program Help Bar 50, up to 75 characters long "
        "file51  .ext"," Program Help Bar 51, up to 75 characters long "
        "file52  .ext"," Program Help Bar 52, up to 75 characters long "
        "file53  .ext"," Program Help Bar 53, up to 75 characters long "
        "file54  .ext"," Program Help Bar 54, up to 75 characters long "
        "file55  .ext"," Program Help Bar 55, up to 75 characters long "
        "file56  .ext"," Program Help Bar 56, up to 75 characters long "
        "file57  .ext"," Program Help Bar 57, up to 75 characters long "
        "file58  .ext"," Program Help Bar 58, up to 75 characters long "
        "file59  .ext"," Program Help Bar 59, up to 75 characters long "
        "file60  .ext"," Program Help Bar 60, up to 75 characters long "
        "file61  .ext"," Program Help Bar 61, up to 75 characters long "
        "file62  .ext"," Program Help Bar 62, up to 75 characters long "
        "file63  .ext"," Program Help Bar 63, up to 75 characters long "
        "file64  .ext"," Program Help Bar 64, up to 75 characters long "









































                                    Page (6)




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1305

     Volume in drive A has no label
     Directory of A:\

    AUTOPROC DAT      2720   5-22-88   2:16p
    DEMO1            27800   1-17-88  11:03a
    DEMO2            31814   1-17-88  11:03a
    FANTASY  DOC     12846   1-17-88  10:38a
    FANTASY  EXE     32941   1-17-88  10:16a
    FILE1305 TXT      2602   2-23-89   1:33p
    FILES    TXT       630   5-22-88   2:19p
    GEMCAP   COM      3426   8-24-87   1:38p
    GEMCAP   DOC      6251  10-03-87  10:52a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1618   2-21-89  11:10a
    MANUAL   BAT       147  12-15-88  12:39p
    PROCESS  DOC     15757   5-22-88  12:42p
    PROCESS  EXE     50063   5-20-88  10:38p
    READ     ME        527   4-01-88
    SAMPLE   DAT      4738   5-22-88   1:21p
    START    BAT        24   1-17-88  10:58a
    WHAT     COM     43338   4-01-88
    WHAT     DOC     15387   4-01-88
           19 file(s)     252667 bytes
                           57344 bytes free
