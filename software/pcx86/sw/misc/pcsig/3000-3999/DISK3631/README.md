---
layout: page
title: "PC-SIG Diskette Library (Disk #3631)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3631/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3631"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BEN.TXT

{% raw %}
```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│          ╒═════════╗  ╒═════════╗  ╒════╗   ╒════╗            │
│          └┐  ╓───┐ ╚╗ └┐  ╓───┐ ║  │    ╚╗  └┐  ╓╜            │
│           │  ║   │  ║  │  ║   └─╜  │  ╟┐ ╚╗  │  ║             │
│           │  ╚═══╛  ║  │  ╚══╗     │  ║└┐ ╚╗ │  ║             │
│           │  ╓───┐  ║  │  ╓──╜     │  ║ └┐ ╚╗│  ║             │
│           │  ║   │  ║  │  ║   ╒═╗  │  ║  └┐ ╚╡  ║             │
│          ╒╛  ╚═══╛ ╓╜ ╒╛  ╚═══╛ ║ ╒╛  ╚╗  └┐    ║             │
│          └─────────╜  └─────────╜ └────╜   └────╜             │
│                                                               │
│                                                               │
│                                                               │
│                   BATCH ENHANCER VERSION 3.00                 │
│                                                               │
│                                                               │
│                      (C) 1992 by Simvis Soft                  │
│                        All Rights Reserved                    │ 
│                                                               │
└───────────────────────────────────────────────────────────────┘
                                                                 
This program is distributed under the Shareware scheme. You are
encouraged to give copies of this program to other computer
users. If you decide to use the program, support the Shareware
marketing concept by becoming a registered user. Read section 6.1
for more details.

─────────────────────────────────────────────────────────────────
Table of Contents

1.1  What is BEN?
1.2  Advantages of BEN over other batch file enhancement programs
1.3  System requirements
1.4  How to install BEN
1.5  How to run BEN

2.1  Quick introduction to BEN's functions
2.2  In-depth discussion of each BEN function
2.3  BEN and environment variables

3.1  BENEdit

4.1  Legality information

5.1  How to install ANSI.SYS
5.2  Hints and tips
5.3  Support, bugs report, comments, problems...

6.1  Shareware registration
          
─────────────────────────────────────────────────────────────────
1.1  What is BEN?

BEN stands for the Batch ENhancer:
          
*BATCH*
Batch is a very simple yet powerful language DOS uses. Batch
files always end with the extension .BAT. For example, the
AUTOEXEC.BAT in the root directory of your boot disk is a batch
file. Although batch file is very flexible, it has some unwelcome
weaknesses. For example, it cannot get input from the user or
even do simple color-changing.
          
*ENHANCER*
BEN is developed to compensate for Batch language's weaknesses.
BEN improve many aspects of the current batch file functions, and
it also introduce many new ones. With BEN, you can produce very
useful batch files that can even compete with compiled
programming codes. Yet, BEN is so simple to use that even a
beginner can produce attractive batch files in no time at all.
Once you start using BEN, you will be able to incorporate colors,
sounds, menus, pop-up boxes and a host of other spectacular
features into any batch file that you ever write.

To see an example of what BEN can do for you, run the included
BENDEMO.BAT. Remember to keep in mind that BENDEMO.BAT is only a
batch file!

─────────────────────────────────────────────────────────────────
1.2  Advantages of BEN over other batch file enhancement
     programs:

-    Large number of powerful functions (38 in total) all
     contained into one EXE file.

-    All of these functions are very easy to use.

-    Comes with BENEdit, a text editor that is tailored for BEN.
     With BENEdit, you can edit all your batch files and access
     all the features of BEN quickly and easily.

-    Optimized for speed.

-    Perfect for complementing any menuing system (eg. Magik
     Menu).

-    Can be used for programming any batch utilities (eg.
     INSTALL.BAT).

-    Compatible with DOS and Windows.

-    Compatible with the network environment. You can now use BEN
     to program all the network batch files!

─────────────────────────────────────────────────────────────────
1.3  System requirements:

IBM PC/Compatible with 256k+ RAM

PC/MS-DOS 2.1 or higher
          
Suggested:     ANSI.SYS or equivalent
          
(Note: ANSI.SYS is a driver for the display format designed by
the American National Standards Institute. This driver is
included with all versions of PC/MS-DOS. It is required for the
COLOR function. If ANSI.SYS is not installed in your computer
yet, please refer to section 5.1 for instructions on
installation.)

─────────────────────────────────────────────────────────────────
1.4  How to install BEN:

Use the supplied INSTALL.BAT, or just copy every file into a
directory of your choice.

─────────────────────────────────────────────────────────────────
1.5  How to run BEN:

Format:   [d:][pathname] BEN function [params] [functions
          [params]...]

Entering the command "BEN" alone in DOS gives you an online help
of BEN's functions. Make sure that the file BEN.HLP is in the
same directory as BEN.EXE. Otherwise, the online help wouldn't
work.

To access a BEN function, you must enter the command "BEN"
followed by the name of the function. Some functions doesn't
require any parameter. An example of this is the BEEP function.
You can use it by entering this command into your batch file:

BEN BEEP

Other functions of BEN require one or more parameters. For
example, you can clear the screen with the color blue by entering
this command into your
batch file:

BEN CLS BLUE

BEN functions can be "stacked" one after another in a command
line. For example, you can group the BEEP function and the CLS
function together, one after another. In this case, BEN will
first create a beep, then it will clear the screen with the color
blue:

BEN BEEP CLS BLUE

When you stack functions together, you may use the "/" separators
if you want. This is not mandatory, but it helps to increase the
readability of your batch file. For example:

BEN BEEP / CLS BLUE

─────────────────────────────────────────────────────────────────
2.1  Quick introduction to BEN's functions:

ASK:           ASK gives the user a choice of keys to press. The
               batch file can then interpret the result and act
               accordingly.

BEEP:          BEEP simply creates a "beep" sound.

BOX:           BOX creates a BOX on the screen.

CLEANUP:       CLEANUP is used at the end of batch files. Its
               purpose is cleaning up the mess left behind by
               batch routines.

CLS:           CLS clears the screen with the specified color.

COLOR:         COLOR changes the current writing color.

CURSOR:        CURSOR changes the cursor shape.

DELAY:         DELAY pauses the computer for the
               specified period of time.

DIRDISP:       DIRDISP displays a directory selection dialog box
               where the user is given the opportunity to choose
               a file. This is similar to the FILE OPEN dialog
               box of Windows.

DIRDISPA:      DIRDISPA is an advanced version of DIRDISP.

ECHO:          Same as the DOS ECHO command.

EGAVGA:        EGAVGA switches the EGA 43 / VGA 50 line mode on
               or off.

EXTRACT:       EXTRACT returns a part of a fully qualified
               filename.

FLUSH:         FLUSH clears the keyboard buffer.

GETCD:         GETCD returns the current directory to the batch
               file.

GETKEY:        GETKEY pauses the computer until the user presses
               a key. This key is returned to the batch file.

GETKEYU:       GETKEYU is the same as GETKEY, except
               the key pressed by the user is converted
               into uppercase before it is returned to
               the batch file.

GETLINE:       GETLINE pauses the computer until the user types a
               string and presses ENTER. The string is returned
               to the batch file.

GETLINEU:      GETLINEU is the same as GETLINE, except
               the string typed by the user is
               converted into uppercase before it is
               returned to the batch file.

GETVIDEO:      GETVIDEO checks what kind of video
               system is installed (eg. CGA, VGA) and
               return the result to the batch file.

GROWFILLEDBOX: GROWFILLEDBOX displays a filled box on the screen.
               The box "grows" out to the screen for a special
               effect.

LIST:          LIST is a file browser.

LOCATE:        LOCATE moves the cursor to the specified screen
               position.

MENU:          MENU displays a menu on the screen. The choice
               selected by the user is returned to the batch
               file.

MESSAGE:       MESSAGE draws a box on the screen and displays the
               specified message.

PAUSE:         PAUSE pauses the computer until the user
               presses a key.

PLAY:          PLAY produces music from the speaker.
               BEN PLAY uses the same statements that
               the BASIC PLAY uses.

SAVEPATH:      SAVEPATH is a environment-memory conservation
               function.

SCROLL:        Scrolls a specified region of text up, down, left
               or right.

SHADFILLEDBOX: SHADFILLEDBOX displays a filled box on the screen.
               This box has a shadow.

SHELL:         SHELL lets the user jump to DOS in the middle of a
               batch file.

SOUND:         SOUND produces a sound with the specified
               frequency and the specified duration.

T:             T uses a data file to run BEN functions more
               efficiently.

TITLEDBOX:     TITLEDBOX displays a filled box with a title on
               the screen.

TRANSPARENTBOX TRANSPARENTBOX shades a specified region of the
               screen with the specified color.

WRITE:         Displays a string of text on the screen with the
               specified color.

WRITEC:        Displays a string of text on the screen with the
               specified color. The text is centred between the
               two sides of the monitor.

WRITEV:        Displays a string of text on the screen with the
               specified color. The text is oriented vertically.

─────────────────────────────────────────────────────────────────
2.2  In-depth discussion of each BEN function.

BOX FUNCTIONS
─────────────

BOX x1 y1 x2 y2 foreground background borderstyle

     This function draws an empty box on the screen with an
     upper-left corner of (x1,y1) and a lower-right corner of
     (x2,y2). Borderstyle can be one of the following:

     0    -    no border
     1    -    single line box (─)
     2    -    double line box (═)
     3    -    double sides, single top and bottom
     4    -    single sides, double top and bottom
     5    -    single left and upper, double lower and right
     6    -    menu box style
     7+   -    the border is drawn using the ASCII character
               represented by the style value.

     The "foreground" and "background" colors can be specified
     with special words that BEN recognize. These words are:
     BLACK, BLUE, GREEN, CYAN, RED, MAGENTA, BROWN, LIGHTGRAY,
     DARKGRAY, LIGHTBLUE, LIGHTGREEN, LIGHTCYAN, LIGHTRED, LIGHT
     MAGENTA, YELLOW, and WHITE.

     You can also specify the colors with a number if you want.
     For example, instead of using the word "BLACK", you can use
     the number 0. Instead of using the word "BLUE", you can use
     the number 1. And so on.

     Examples: BEN BOX 1 1 80 25 WHITE BLUE 1
               BEN BOX 10 10 20 20 YELLOW BLACK 3
               BEN BOX 4 4 8 8 9 2 65

     In the first example, BEN draws a white on blue box with a
     single-line border, an upper-left corner of (1,1) and a
     lower-right corner of (80,25).

     In the second example, BEN draws a yellow on black box with
     double-lined borders on the sides and single-lined borders
     on the top and the bottom. The box has an upper-left corner
     of (10,10) and a lower-right corner of (20,20).

     In the third example, BEN draws a light-blue on green box
     with a border that is drawn by the ASCII character 65 ("A").
     The box has an upper-left corner of (4,4) and a lower-right
     corner of (8,8). 

FILLEDBOX x1 y1 x2 y2 foreground background borderstyle

     Same as BOX, but the box is filled instead of empty.

     Examples: BEN FILLEDBOX 1 1 80 25 WHITE BLUE 1
               BEN FILLEDBOX 10 10 20 20 YELLOW BLACK 3
               BEN FILLEDBOX 4 4 8 8 9 9 2 65

GROWFILLEDBOX x1 y1 x2 y2 foreground background borderstyle

     Same as FILLEDBOX, but the box "grows" out onto the screen,
     creating a spectacular effect.

     Examples: BEN GROWFILLEDBOX 1 1 80 25 WHITE BLUE 1
               BEN GROWFILLEDBOX 10 10 20 20 YELLOW BLACK 3
               BEN GROWFILLEDBOX 4 4 8 8 9 2 65

SHADFILLEDBOX x1 y1 x2 y2 foreground background borderstyle

     Same as FILLEDBOX, but the box has a shadow.

     Examples: BEN SHADFILLEDBOX 1 1 80 25 WHITE BLUE 1
               BEN SHADFILLEDBOX 10 10 20 20 YELLOW BLACK 3
               BEN SHADFILLEDBOX 4 4 8 8 9 2 65

TITLEDBOX x1 y1 x2 y2 foreground background borderstyle title

     Same as FILLEDBOX, but the box has a title. Please note that
     tildes (~) in the title are interpreted as spaces.

     Examples: BEN TITLEDBOX 1 1 80 25 WHITE BLUE 1 Great~box!
               BEN TITLEDBOX 10 10 20 20 YELLOW BLACK 3 Another!
               BEN TITLEDBOX 4 4 8 8 9 2 65 Best~box~here!

TRANSPARENTBOX x1 y1 x2 y2 foreground background

     Paints the region specified by (x1,y1) - (x2,y2) with the
     specified foreground and background colors. Text that are
     originally on the screen are not erased; they are just
     painted with a new color. Please note that the borderstyle
     parameter is not required.

     Examples: BEN TRANSPARENTBOX 1 1 80 25 WHITE BLUE
               BEN TRANSPARENTBOX 10 10 20 20 YELLOW BLACK
               BEN TRANSPARENTBOX 4 4 8 8 9 2


INPUT FUNCTIONS
───────────────

ASK options

     Waits for the user to press a key that is contained in the
     'options' string. The option that the user selects is passed
     to the batch file as an errorlevel. (For more details on
     errorlevels, please refer to your DOS manual.)

     For instance, if the options string is ABCDE and the user
     presses the letter C on the keyboard, an errorlevel of 3 is
     returned (C is the third character of the string).

     Example:  @ECHO OFF
               BEN ECHO A. Format your hard drive.
               BEN ECHO B. Diskcopy a disk.
               BEN ECHO C. Run Windows.
               BEN ECHO D. Run DOSShell.
               BEN ECHO E. Play Sim City.
               BEN ECHO ~
               BEN ECHO Please make your selection.
               BEN ASK ABCDE

               IF ERRORLEVEL 5 IF NOT ERRORLEVEL 6 GOTO SIMCITY
               IF ERRORLEVEL 4 IF NOT ERRORLEVEL 5 DOSSHELL
               IF ERRORLEVEL 3 IF NOT ERRORLEVEL 4 C:\WIN\WIN
               IF ERRORLEVEL 2 IF NOT ERRORLEVEL 3 DISKCOPY A: A:
               IF ERRORLEVEL 1 IF NOT ERRORLEVEL 2 FORMAT C:
               GOTO END

               :SIMCITY
               C:
               CD\SIMCITY
               SIMCITY

               :END

GETKEY

     Waits for the user to enter a key. This key is returned via
     the environment variable %BEN% (or %BEN2%, %BEN3%, etc.
     Please refer to section 2.3: "BEN and Environment Variables"
     at for further details.)

     Example:  BEN GETKEY
               BEN ECHO You've pressed the %BEN% key!

GETKEYU

     Same as GETKEYU, but the key is converted into uppercase
     before it is returned.

     Example:  BEN GETKEYU
               BEN ECHO You've pressed the %BEN% key!

GETLINE

     Waits for the user to enter a string. This string is
     returned via the environment variable %BEN% (or %BEN2%,
     %BEN3%, etc. Please refer to section 2.3: "BEN and
     Environment Variables" for further details.)

     Example:  BEN ECHO What's your name?
               BEN GETLINE
               BEN ECHO So your name is %BEN%!
               
GETLINEU

     Same as GETLINE, but the string is converted into uppercase
     before it is returned.

     Example:  BEN ECHO What's your name?
               BEN GETLINEU
               BEN ECHO So your name is %BEN% in uppercase!

MENU title choice1 [choice2 choice3...]

     Displays a menu on the screen. The choice that is selected
     by the user is passed back to the batch file as an
     errorlevel. For instance, if the user chooses choice #3, an
     errorlevel of 3 is returned. On the other hand, if the user
     opts to choose nothing, then an errorlevel of 0 is returned.

     Please note that tildes (~) are interpreted as spaces, and
     no other function can be stacked after the MENU function is
     used. Also, use a minus sign (-) to tell BEN to display a
     blank line.

     Example:  @ECHO OFF
               BEN MENU Please~make~a~selection:
                    Format~your~hard~drive Diskcopy~a~disk
                    Run~Windows Run~DOSShell Play~Simcity - Quit
               IF ERRORLEVEL 6 GOTO END
               IF ERRORLEVEL 5 GOTO SIMCITY
               IF ERRORLEVEL 4 GOTO DOSSHELL
               IF ERRORLEVEL 3 GOTO WINDOWS
               IF ERRORLEVEL 2 GOTO DISKCOPY
               IF ERRORLEVEL 1 GOTO FORMAT
               BEN ECHO You didn't make a selection!
               GOTO END

               :FORMAT
               FORMAT C:
               GOTO END

               :DISKCOPY
               DISKCOPY A: A:
               GOTO END

               :WINDOWS
               C:\WIN\WIN
               GOTO END

               :DOSSHELL
               DOSSHELL
               GOTO END

               :SIMCITY
               C:
               CD\SIMCITY
               SIMCITY

               :END

     Note:     This example is same in functionality as the
               example that illustrates the ASK function.


MESSAGE FUNCTIONS
─────────────────

ECHO message [message...]

     Works like the DOS ECHO function. Everything after the word
     ECHO is displayed using the current writing color. Thus, no
     other functions can be stacked after ECHO is used.

     If you wish to display a blank line, use the command "BEN
     ECHO ~". If you wish to display more than one space between
     two words, use the tilde (~) as a separator instead. For
     example, if you want to display the words "Hello   World,
     this is the computer speaking.", use the command "BEN ECHO
     Hello~~~World, this is the computer speaking."

     Examples: BEN ECHO Hello World!
               BEN ECHO This is a test!
               BEN ECHO ~
               BEN ECHO Hello~~~World, this is the computer
               speaking.

LIST filename title

     Acts as a file browser for the file specified by "filename".
     Tildes (~) in the title are interpreted as spaces.

     Examples: BEN LIST C:\AUTOEXEC.BAT This~is~your~AUTOEXEC!
               BEN LIST BEN.TXT You~are~reading~BEN.TXT!

MESSAGE line1 [line2 line3...]

     Pops up a message box onto the screen. Tildes (~) are
     interpreted as spaces.

     Examples: BEN MESSAGE Hello~World! This~is~a~test!

     This example will pop up a message box on the screen as
     shown below:

                         ┌─[■]───────────┐
                         │               │
                         │Hello World!   │
                         │This is a test!│
                         │               │
                         │     OK  ▄     │
                         │    ▀▀▀▀▀▀     │
                         └───────────────┘

WRITE foreground background message

     Writes a string onto the screen using the specified
     foreground and background colors. Tildes (~) in the message
     are interpreted as spaces, and a semi-colon (;) at the end
     of the message tells BEN not to wrap to the next line.

     The "foreground" and "background" colors can be specified
     with special words that BEN recognize. These words are:
     BLACK, BLUE, GREEN, CYAN, RED, MAGENTA, BROWN, LIGHTGRAY,
     DARKGRAY, LIGHTBLUE, LIGHTGREEN, LIGHTCYAN, LIGHTRED, LIGHT
     MAGENTA, YELLOW, and WHITE.

     You can also specify the colors with a number if you want.
     For example, instead of using the word "BLACK", you can use
     the number 0. Instead of using the word "BLUE", you can use
     the number 1. And so on.

     Examples: BEN WRITE LIGHTRED BLUE Hello~World!
               BEN WRITE LIGHTGREEN BLACK This~is~a~test!;
               BEN WRITE 7 1 Another~test!

     In the first example, BEN displays the string "Hello World!"
     with a color of light red on blue.

     In the second example, BEN displays the string "This is a
     test!" with a color of light green on black. Since there is
     a semi-colon (;) at the end of the line, BEN doesn't move
     the cursor to the beginning of the next line. Instead, BEN
     keeps the cursor after the exclamation mark.

     In the third example, BEN displays the string "Another
     test!" with a color of light gray on blue.

WRITEC foreground background message

     Same as WRITE, but the message is centered between the two
     sides of the monitor.

     Examples: BEN WRITEC LIGHTRED BLUE Hello~World!
               BEN WRITEC LIGHTGREEN BLACK This~is~a~test!;
               BEN WRITEC 7 1 Another~test!

WRITEV x y foreground background message

     Same as WRITE, but the message is written as a vertical
     column that starts from the position (x,y).

     Examples: BEN WRITEV 1 1 YELLOW BLUE An~important~message
               BEN WRITEV 40 10 LIGHTCYAN BLACK Hello!
               BEN WRITEV 80 1 7 1 Great!!!

     In the first example, BEN displays a yellow on blue vertical
     column of string starting from (1,1). The string reads "An
     important message".

     In the second example, BEN displays a light cyan on black
     vertical column of string starting from (40,10). The string
     reads "Hello!".

     In the third example, BEN displays a light gray on blue
     vertical column of string starting from (80,1). The string
     reads "Great!!!".


MUSIC FUNCTIONS
───────────────

BEEP

     Creates a beep sound.

     Example:   BEN BEEP

PLAY playstring

     Plays music using the computer's speaker. The playstring is
     exactly the same in format as the BASIC PLAY statement. Here
     is a list of the music commands supported:

     ML:  legato (8/8 note length)
     MN:  normal music (7/8 note length)
     Ln:  length of notes (n=1-64; note length=1/n, eg. n=2 for
          1/2 note)
     Nn:  Note number (n=0-84; 0 is a rest)
     On:  Octave (n=0-6, default 4)
     Pn:  Pause (n=1-64; pause length=1/n, eg. n=4 for 1/4 note)
     Tn:  Tempo (n=32-255, default 120; quarter notes per minute)
     [:   Move down an octave (min 0)
     ]:   Move up an octave (max 6)

     You can also use the actual letters of the notes (C, D, E,
     F, G, A, and B). These correspond to "do, re, mi, fa, so,
     la, ti". To play a scale, you should use "CDEFGAB]C".

     The notes may be followed by dots, by note lengths, and by
     sharp or flat symbols (a '+' or '#' for a sharp, a '-' for a
     flat). For example, 'D-.' is a dotted D flat. The dot means
     that the note will play for half again its usual length.
     Dots can be repeated.

     You can also use "<" for "[" and ">" for "]" in BEN data
     files that are read by BEN's T function. Don't use these in
     the command line however, because DOS will interpret them as
     redirection signs. If you use them, strange errors may
     occur.

     Examples: BEN PLAY O5CDEFGFEDCP1CC
               BEN PLAY ]EEEC

SOUND frequency duration

     Uses the computer's speaker to produce a tone with the
     specified frequency for the specified duration. Frequency is
     measured in hertz and duration is measured in milliseconds.

     Examples: BEN SOUND 1000 1000
               BEN SOUND 2000 100


SCREEN FUNCTIONS
────────────────

CLS background

     Clears the screen with the specified color.

     The colors can be specified with special words that BEN
     recognize. These words are: BLACK, BLUE, GREEN, CYAN, RED,
     MAGENTA, BROWN, LIGHTGRAY, DARKGRAY, LIGHTBLUE, LIGHTGREEN,
     LIGHTCYAN, LIGHTRED, LIGHT MAGENTA, YELLOW, and WHITE.

     You can also specify the color with a number if you want.
     For example, instead of using the word "BLACK", you can use
     the number 0. Instead of using the word "BLUE", you can use
     the number 1. And so on.

     Examples: BEN CLS BLUE
               BEN CLS GREEN

COLOR foreground background

     Changes the current writing color. ANSI.SYS must be loaded
     for this function to operate.

     The "foreground" and "background" colors can be specified
     with special words that BEN recognize. These words are:
     BLACK, BLUE, GREEN, CYAN, RED, MAGENTA, BROWN, LIGHTGRAY,
     DARKGRAY, LIGHTBLUE, LIGHTGREEN, LIGHTCYAN, LIGHTRED, LIGHT
     MAGENTA, YELLOW, and WHITE.

     You can also specify the colors with a number if you want.
     For example, instead of using the word "BLACK", you can use
     the number 0. Instead of using the word "BLUE", you can use
     the number 1. And so on.

     Examples: BEN COLOR YELLOW BLUE
               BEN COLOR WHITE RED
               BEN COLOR 7 1

CURSOR ON/OFF/FULL/HALF

     Changes the cursor shape. Use ON for a normal cursor (_),
     OFF for no cursor ( ), FULL for a block cursor (█) and HALF
     for a half-block cursor (▄).

     Examples: BEN CURSOR OFF
               BEN CURSOR FULL

EGAVGA ON/OFF

     Switches the EGA 43 / VGA 50 line mode on or off. If the EGA
     43 / VGA 50 line mode is switched on successfully, an
     errorlevel of 2 is passed back to the batch file. Otherwise,
     an errorlevel of 1 is returned.

     Example:  @ECHO OFF
               BEN EGAVGA ON
               IF ERRORLEVEL 2 GOTO SUCCESS
               BEN ECHO Sorry. Your computer cannot display in
               BEN ECHO the EGA 43 or the VGA 50 line mode.
               GOTO END

               :SUCCESS
               BEN CLS BLUE COLOR WHITE BLUE LOCATE 30 30
               BEN ECHO See how big your screen is!
               BEN LOCATE 30 33
               PAUSE
               BEN EGAVGA OFF
               
               :END
               BEN CLEANUP

GETVIDEO

     Finds out what kind of video system is installed and returns
     the result via %BEN% (or %BEN2%, %BEN3%, etc. Please refer
     to section 2.3: "BEN and Environment Variables" for further
     details.)

     The possible values that can be returned are as follows:

     MONO:     The computer has a monochrome system.
     CGA:      The computer has a CGA system.
     EGA:      The computer has an EGA system.
     MCGA:     The computer has a MCGA system.
     VGA:      The computer has a VGA system.

     Example:  @ECHO OFF
               BEN GETVIDEO
               IF "%BEN%"=="MONO" GOLF /MONO
               IF "%BEN%"=="CGA" GOLF /CGA
               IF "%BEN%"=="EGA" GOLF /EGA
               IF "%BEN%"=="MCGA" GOLF /MCGA
               IF "%BEN%"=="VGA" GOLF /VGA

     This example shows a batch file that passes different
     parameters to the GOLF program (a game?) depending on what
     video system the computer has.

LOCATE x y

     Moves the screen cursor to the position (x,y).

     Examples: BEN LOCATE 1 1
               BEN LOCATE 10 15

SCROLL x1 y1 x2 y2 direction

     Scrolls the text enclosed in the (x1,y1)-(x2,y2) box.
     'Direction' can be one of the following: UP, DOWN, LEFT,
     RIGHT.

     Examples: BEN SCROLL 1 1 80 25 UP
               BEN SCROLL 10 10 20 20 LEFT


MISCELLANEOUS FUNCTIONS
───────────────────────

CLEANUP

     This function should be called at the end of batch files. It
     does four things:
     1.   Changes the writing color to normal DOS color (same as
          calling BEN COLOR LIGHTGRAY BLACK).
     2.   Changes the cursor to a normal shape (same as calling
          BEN CURSOR ON).
     3.   Erases all the environment variables that have been
          created by BEN (IE. %BEN%, %BEN2%, %BEN3%, etc.)
     4.   Restores the PATH if the SAVEPATH function had been
          called previously. (Please refer to the discussion on
          the SAVEPATH function.)

     Example:  BEN CLEANUP

DELAY milliseconds

     Pauses the computer for the specified number of
     milliseconds. (1000 milliseconds = 1 second)

     Examples: BEN DELAY 1000
               BEN DELAY 5000

DIRDISP directory

     Displays a file selection box and allows the user to select
     a file. The name of the selected file is stored into %BEN%
     (or %BEN2%, %BEN3%, etc. Please refer to section 2.3: "BEN
     and Environment Variables" for further details.)

     If the user presses ESC and opts not to choose any file,
     then %BEN% is set to contain nothing.

     Example:  BEN DIRDISP C:\
               IF "%BEN%"=="" GOTO CHOSE_NOTHING
               BEN ECHO You've chosen %BEN%!
               GOTO END
               :CHOSE_NOTHING
               BEN ECHO You didn't choose any file!
               :END

DIRDISPA directory filemask sortorder returnstring

     This is the advanced version of DIRDISP. In addition to the
     starting directory, you can specify the file mask and the
     sorting order.

     'Filemask' specifies the types of file you want to display.
     For example, if you want to display only EXE files, you can
     use a filemask of "*.EXE". If you want to display both EXE
     and COM files, you can use a filemask of "*.EXE~*.COM"
     [different types of files are separated with tildes (~).]

     'Sortorder' specifies the order which DIRDISPA uses to
     display the files. It can be one of the following:

     NAME      -    Files sorted on names in ascending order.
     EXTENSION -    Files sorted on extensions in ascending
                    order.
     TIME      -    Files sorted on time from the earliest to the
                    latest.
     SIZE      -    Files sorted on size from the smallest to the
                    largest.
     X         -    Files are unsorted.

     You can also specify only the first letter of the sortorder
     you want. For example, instead of "BEN DIRDISPA C:\ *.*
     NAME", you can use "BEN DIRDISPA C:\ *.* N". This is not
     suggested, however, because it decreases the legibility of
     your batch file.

     Example:  BEN DIRDISPA C:\ *.BAT~*.SYS~*.EXE EXTENSION
               BEN ECHO You've picked the file %BEN%!

EXTRACT source part

     This is a function that extracts a certain part of a fully
     qualified filename (eg. the result from DIRDISP or GETCD)
     and stores it into %BEN% (or %BEN2%, %BEN3%, etc. Please
     refer to section 2.3: "BEN and Environment Variables" for
     further details.)

     'Source' specifies the source string from which you want to
     extract information. Usually, you should place an
     environment variable here.

     'Part' specifies the part of the selected filename you want
     BEN to return to you. It can be one of the following:

     DRIVE     -    Returns only the drive part of the source
                    (eg. C:)
     PATH      -    Returns only the path part of the source
                    (eg. \)
     NAME      -    Returns only the name part of the source
                    (eg. AUTOEXEC)
     EXTENSION -    Returns only the extension part of the source
                    (eg. BAT)
     FILENAME  -    Returns both the name and the extension part
                    of the source (eg. AUTOEXEC.BAT)

     You can also specify only the first letter of the part you
     want. For example, instead of "BEN EXTRACT C:\ EXTENSION",
     you can use "BEN EXTRACT C:\ E". This is not suggested,
     however, because it decreases the legibility of your batch
     file.

     Example:  BEN DIRDISP C:\
               SET SELECT=%BEN%
               BEN EXTRACT %SELECT% DRIVE
               BEN ECHO You've selected a file that is located in
                    drive %BEN%
               BEN EXTRACT %SELECT% PATH
               BEN ECHO This file has a path of %BEN%
               BEN EXTRACT %SELECT% NAME
               BEN ECHO This file's name is %BEN%
               BEN EXTRACT %SELECT% EXTENSION
               BEN ECHO And its extension is %BEN%
               BEN EXTRACT %SELECT% FILENAME
               BEN ECHO Its filename (name+extension) is %BEN%!
               BEN ECHO ~
               BEN GETCD
               BEN EXTRACT %BEN% DRIVE
               BEN ECHO You're currently in %BEN% drive.

FLUSH


     Clears the keyboard buffer.

     Example:  BEN FLUSH

GETCD

     Finds out what the current directory is and stores it into
     %BEN% (or %BEN2%, %BEN3%, etc. Please refer to section 2.3:
     "BEN and Environment Variables" for further details.)

     Example:  BEN GETCD
               BEN ECHO Hey man, you're in the %BEN% directory!

PAUSE

     Pauses the computer until the user presses a key.

     Example:   BEN PAUSE

SAVEPATH

     Saves the PATH environment variable into a file called
     SAVEPATH.DAT (this file is stored in the current directory)
     and erases the PATH environment variable. Using this
     function can free up environment space so that BEN functions
     that make use of the environment (eg. GETLINE) can function
     better. Remember to use the CLEANUP function to restore the
     PATH upon the completion of the batch file.

     Caution:  Make sure that you don't change directory after
               using SAVEPATH. If you do, you must change back to
               the directory where SAVEPATH stores SAVEPATH.DAT
               before you run CLEANUP.

     Example:  @ECHO OFF
               BEN SAVEPATH
               BEN ECHO Your PATH has been saved!
               BEN CLEANUP
               BEN ECHO Your PATH is restored!

SHELL

     "Jumps to DOS". After this function is used, the user can
     work in DOS as long as he/she want. He/she can let the batch
     file regain control by typing EXIT.

     Example:   BEN SHELL

T filename

     Runs all the instructions in the data file. This lets BEN
     perform its jobs at a quicker speed.

     The data file is just a normal text file (ASCII format). It
     can be created with any text editor, such as BENEDIT or the
     EDLIN or the EDIT programs included with DOS. The format of
     the text file is as follows:
          
     FUNCTIONS
     FUNCTIONS
     FUNCTIONS
     .
     .
     .
     FUNCTIONS
     <End of File>
          
     The FUNCTIONS are exactly the same functions as those that
     are ran from the command line. For example:

     BEN T DATA.DAT

     where DATA.DAT contains:
          
     BOX 1 1 80 25 YELLOW GREEN 3
     PAUSE
     CURSOR OFF
     CLS BLUE
     <End of File>

     is exactly the same as doing this:

     BEN BOX 1 1 80 25 YELLOW GREEN 3
     BEN PAUSE
     BEN CURSOR OFF
     BEN CLS BLUE
     ;This is a comment line.
     ;Comment lines start with a ';'.

     Usually, you should only use the T function when you have a
     large quantity of functions that you wish to be processed by
     BEN.
         
     Examples: BEN T MYFILE.DAT
               BEN T C:\BATCH\INSTRUCT

─────────────────────────────────────────────────────────────────
2.3  BEN and environment variables

Several of BEN's functions (IE. GETKEY, GETKEYU, GETLINE,
GETLINEU, DIRDISP, DIRDISPA, EXTRACT, GETCD and GETVIDEO) return
their results using environment variables. After you use any one
of these functions, you can access the data that BEN returns by
calling the variable %BEN%. Just put %BEN% in your batch file
where you want the data to appear. For example, if you want to
get the user's name and re-display it, you can do the following:

BEN WRITE White Black Please~enter~your~name:~; GETLINE
BEN WRITE White Black Your~name~is~%BEN%!

If you stack several functions that return data via environment
variables, the first result would be stored into %BEN%, the
second result into %BEN2%, the third into %BEN3%, and so on. For
example, if you want to ask the user to enter two favorite colors
and re-display them, you can do the following:

BEN WRITE White Black Enter~your~two~favorite~colors:
BEN GETLINE GETLINE
BEN WRITE White Black So~they~are:~%BEN%~and~%BEN2%!

Note:     At the end of your batch file, you should make a call
          to BEN's CLEANUP function to erase all the variables
          that BEN have created (IE %BEN%, %BEN2%, %BEN3%, etc.)

─────────────────────────────────────────────────────────────────
3.1  BENEdit

BENEdit is a text editor that is included with your BEN package.
With BENEdit, you can create and edit batch files quickly and
easily.

BENEdit and BEN (the Batch ENhancer) work together to provide you
with the perfect environment to do all your batch works. Now, you
can use all your time to productive means by accessing all the
features of BEN inside BENEdit. Just select any BEN function
under the "BEN Functions" menu and answer a few questions.
BENEdit will instantly create the necessary batch program lines
for you. Creating batch files is never so easy before!

To run BENEdit, simply enter this command in DOS:

BENEDIT

If you want to open up a file when BENEdit loads, type BENEDIT
followed by the filename in DOS. For example, if you want to load
the file "QD.BAT", you can enter this command in DOS:

BENEDIT QD

BENEdit is so easy to use that further documentation is not
required. If you have a problem, press F1 in BENEdit to bring up
the context-sensitive help. Make sure that the file BENEDIT.HLP
is in the same directory as BENEDIT.EXE. Otherwise, the context-
sensitive help wouldn't work!

─────────────────────────────────────────────────────────────────
4.1  Legality information

Disclaimer:

Use of this program acknowledges this disclaimer of warranty:
"This program is supplied as is. SIMVIS SOFT disclaims all
warranties, expressed or implied, including, without limitation,
the warranties of merchantability and of fitness of this program
for any purpose. SIMVIS SOFT assumes no liability for damages
directly or consequential, which may result from the use of this
program."
          
Trademarks:

IBM and PC-DOS are trademarks of International Business Machines
Corporation. MS-DOS, EDLIN, WINDOWS and SMARTDRV are trademarks
of Microsoft Corporation. SPEEDISK is a trademark of Symantec.
SIM CITY is a trademark of Maxis. MAGIK MENU is a trademark of
SIMVIS SOFT.

Acknowledgments:

Doyal Belcher
Edwin Lee
Erik Lee
Jay Norwalk
Jonathan Shek
        
───────────────────────────────────────────────────────────
5.1  How to install ANSI.SYS
          
a.   Find ANSI.SYS from your DOS distribution disk and put it in
     the C:\ directory.

b.   Add the following line to your CONFIG.SYS (CONFIG.SYS is
     located in your C:\ directory) by using BENEdit, EDLIN or
     other text editors:

     DEVICE=C:\ANSI.SYS

     Note:     If you don't know where to add this line in
               CONFIG.SYS, just add it before the first line.

c.   Reboot your computer.

─────────────────────────────────────────────────────────────────
5.2  Hints and Tips:

-    If you run out of environment space in the middle of your
     batch file, you should use the SAVEPATH function. If this
     still doesn't work, increase your environment space by
     adding this line to your CONFIG.SYS:

     SHELL=C:\COMMAND.COM /P /E:4096

     If this still doesn't work, increase 4096 to a higher
     number.

-    Stack functions together to speed up access. For example,
     instead of using "BEN BEEP" followed by "BEN PAUSE", use
     "BEN BEEP PAUSE" or "BEN BEEP / PAUSE".

     Note:     Don't stack functions so much that a command line
               has more than 120 characters. DOS can only read
               about 120 characters at a time.

-    Using a disk optimizer on the disk (eg. SPEEDISK) containing
     BEN.EXE will speed up the operation of BEN.

-    Using a cache on your disk (eg. SMARTDRV, PC-CACHE) will
     speed up the operation of BEN.

-    In Windows, if you run a batch file that uses blinking
     characters, run it inside a full screen, since DOS windows
     cannot display blinking characters.

-    Use BENEdit to develop all your batch files. It's much
     easier to access the features of BEN from BENEdit than
     trying to memorize all of them.

-    In BENEdit, if you have a mouse, you can find out the
     coordinates of any screen positions by:

     a.   moving your mouse pointer to that position

     b.   reading the (X,Y) ordered pair at the right side of the
          status line.

-    If you are trying to develop a password program, you may
     discover that BEN doesn't function properly. For example,
     this may be the core of your batch file:

     BEN ECHO Please enter the password:
     BEN GETLINEU
     IF "%BEN%"=="COMPUTER RULES" GOTO ACCESS
     BEN ECHO You have entered the incorrect password. Bye.
     GOTO END

     :ACCESS
     BEN ECHO You have entered the correct password!

     :END

     Why doesn't this work? Because GETLINE and GETLINEU turns
     spaces into nulls (ASCII 255) before putting the result into
     %BEN%. You can work around this by using the null character
     when you test the password. Instead of the command:

     IF "%BEN%"=="COMPUTER RULES" GOTO ACCESS
                          ^
                        SPACE

     You should use the command:

     IF "%BEN%"=="COMPUTER RULES" GOTO ACCESS
                          ^
                         NULL
     
     You can enter a null character from any text editor (eg.
     BENEdit) by holding the ALT-key, pressing the keys "2", "5",
     "5" on the numeric keypad, and releasing the ALT-key.

-    To create blinking text, use a light background. For
     example, if you want to display a blinking yellow message on
     a blue background, use a foreground color of yellow and a
     background color of light blue:

     BEN WRITE YELLOW LIGHTBLUE Hello~World!

-    Files browsed with LIST can be zoomed, moved and sized by
     using the F5, CTRL-F5 and ALT-F5 keys respectively. MENU
     boxes can also be moved with the CTRL-F5 key.

-    If you use the BOX, FILLEDBOX, GROWFILLEDBOX or
     SHADFILLEDBOX functions, you can create good-looking borders
     by specifying an ASCII number as the borderstyle. For
     example, to create a box with a border made up of "√", enter
     the following command:

     BEN BOX 1 1 80 25 LIGHTGRAY BLUE 251

-    If you port some BASIC PLAY statements to BEN's PLAY
     commands, remember to turn all "<"'s to "["'s and all ">"'s
     to "]"'s. Or, put all the statements into a data file and
     use BEN's T function to access them.

-    Use the COLOR command before the LOCATE command.

-    Examining the BENDEMO files is a good way to learn BEN
     functions.

-    If you are a programmer, use BEN to develop INSTALL.BATs for
     your programs.

-    If you work in a network, use BEN to develop network batch
     utilities.

-    Register BEN and get the bonus BENMOUSE program. With
     BENMOUSE, you can make use of the mouse in your batch files.

─────────────────────────────────────────────────────────────────
5.3  Support, bug reports, comments, problems...

If you need technical support, feel that this manual is
inadequate, or uncover any bugs, please contact me:

Simon Lee

7905 Bayview Ave.
Unit 1019
Thornhill  Ontario
Canada
L3T 7N3

Phone:    (416) 882-2514
Fax:      (416) 882-2527

Comments are extremely welcome.

─────────────────────────────────────────────────────────────────
6.1  Shareware Registration

BEN is NOT free software. BEN is NOT public domain software. BEN
is shareware: you are expected to pay a registration fee to the
author of this program if you find it useful. You are allowed to
use BEN for free within a trial period of 60 days. After 60 days,
if you continue to use BEN, you must register.

There are three editions of BEN available for registration:

A>   Personal Edition - $39

     With registration, you get the following:
     -    Complete BEN package on a disk:

          -    BEN.EXE with your specified registration name
               encoded into the code.

          -    BENMOUSE.EXE (a bonus version of BEN that has the
               ability to make use of mouses) with your specified
               registration name encoded into the code.

          -    BENEDIT.EXE with your specified registration name
               encoded into the code.

          -    All other BEN-related files.

     -    Next version of the complete BEN package on a disk free
          of charge.

     -    One printed manual that covers all aspects of BEN.

     -    Free technical support.

B>   Programmer's Edition - $99

     With registration, you get the following:
     -    Complete BEN package on a disk:

          -    BEN.EXE with your specified registration name
               encoded into the code.

          -    BENMOUSE.EXE (a bonus version of BEN that has the
               ability to make use of mouses) with your specified
               registration name encoded into the code.

          -    BENEDIT.EXE with your specified registration name
               encoded into the code.

          -    All other BEN-related files.

     -    Next version of the complete BEN package on a disk free
          of charge.

     -    One printed manual that covers all aspects of BEN.

     -    A distribution license. With this license, you are
          permitted to use BEN to create batch utilities that you
          can distribute, royalty-free.

     -    Free technical support.

C>   Business Edition - $199

     With registration, you get the following:
     -    Complete BEN package on a disk:

          -    BEN.EXE with your specified registration name
               encoded into the code.

          -    BENMOUSE.EXE (a bonus version of BEN that has the
               ability to make use of mouses) with your specified
               registration name encoded into the code.

          -    BENEDIT.EXE with your specified registration name
               encoded into the code.

          -    All other BEN-related files.

     -    All future versions of the complete BEN package on a
          disk free of charge.

     -    Five sets of printed manuals that covers all aspects of
          BEN.

     -    A site license for unlimited number of users on a LAN.

     -    A distribution license. With this license, you are
          permitted to use BEN to create batch utilities that you
          can distribute, royalty-free.

     -    Free technical support.

To order, please send $39, $99 or $199 (depending on which
edition you want) + $5 Postage/Handling to the following address:

                         Simon Lee
                         7905 Bayview Ave.
                         Unit 1019
                         Thornhill  Ontario
                         Canada
                         L3T 7N3

Notes:

-    Do specify the registration name (eg. Mr. Bill Smith, ABC
     Company).
-    Do specify the size of the disk you want (IE. 5.25" or 3.5")
-    Pay in cash or cheque.
-    Make all cheques payable to Simon Lee.
-    Pay in Canadian currency if ordered from Canada. Pay in US
     currency if ordered from US or other countries.

*    You can simplify the registration process by selecting the
     "Register" option under the system menu in BENEdit.
```
{% endraw %}

## PRODUCTS.TXT

{% raw %}
```
┌───────────────────────────────────────────────────────────────┐
│        ╒═════╗ ╒═══╗ ╒═══════╗ ╒═╗    ╒═╗ ╒═══╗ ╒═════╗       │
│        │ ╔═══╝ ╘╕ ╔╝ │ ╔╕ ╔╕ ║ │ ║    │ ║ ╘╕ ╔╝ │ ╔═══╝       │
│        │ ╚═══╗  │ ║  │ ║│ ║│ ║ ╘╕╚╗  ╒╛╔╝  │ ║  │ ╚═══╗       │
│        ╘═══╕ ║  │ ║  │ ║╘═╝│ ║  ╘╕╚╗╒╛╔╝   │ ║  ╘═══╕ ║       │
│        ╒═══╛ ║ ╒╛ ╚╗ │ ║   │ ║   ╘╕╚╛╔╝   ╒╛ ╚╗ ╒═══╛ ║       │
│        ╘═════╝ ╘═══╝ ╘═╝   ╘═╝    ╘══╝    ╘═══╝ ╘═════╝       │
│                ╒═════╗ ╒══════╗ ╒═════╗ ╒═════╗               │
│                │ ╔═══╝ │ ╔══╕ ║ │ ╔═══╝ ╘═╕ ╔═╝               │
│                │ ╚═══╗ │ ║  │ ║ │ ╚═╗     │ ║                 │
│                ╘═══╕ ║ │ ║  │ ║ │ ╔═╝     │ ║                 │
│                ╒═══╛ ║ │ ╚══╛ ║ │ ║       │ ║                 │
│                ╘═════╝ ╘══════╝ ╘═╝       ╘═╝                 │
│                                                               │
│                          PRODUCT LISTING                      │
│                                                               │
│                   Last Revision Date: 07/13/92                │
│                                                               │
└───────────────────────────────────────────────────────────────┘

Batch Enhancer (BEN)
          
BEN stands for the Batch ENhancer:
          
*BATCH*
Batch is a very simple yet powerful language DOS uses. Batch
files always end with the extension .BAT. For example, the
AUTOEXEC.BAT in the root directory of your boot disk is a batch
file. Although batch file is very flexible, it has some unwelcome
weaknesses. For example, it cannot get input from the user or
even do simple color-changing.
          
*ENHANCER*
BEN is developed to compensate for Batch language's weaknesses.
BEN improve many aspects of the current batch file functions, and
it also introduce many new ones. With BEN, you can produce very
useful batch files that can even compete with compiled
programming codes. Yet, BEN is so simple to use that even a
beginner can produce attractive batch files in no time at all.
Once you start using BEN, you will be able to incorporate colors,
sounds, menus, pop-up boxes and a host of other spectacular
features into any batch file that you ever write.

Latest version: 3.00
Registration fee: $39/$99/$199

─────────────────────────────────────────────────────────────────

Magik Menu (MAGIMENU)
          
Magik Menu is a menuing system that aids the beginners, as well
as quickens the experts. This menu program is loaded through
AUTOEXEC, so it is displayed every time the computer is started
up. It can manage up to 999 menus, as well as 999 menu options.
          
Latest version: 1.51
Registration fee: $23

─────────────────────────────────────────────────────────────────
                    
KEY (KEY)
          
This program is a small utility which encrypts/decrypts any sort
of file (including ASCII, binary, etc.), providing the safety to
hide the code from prying eyes.
          
KEY uses the S-CODER method, therefore protecting the code even
from experts.
          
KEY is best suited for telecommunication, mail package, diary,
and any secret files you wish to hide.
          
Latest version: 1.51
Registration fee: Free

─────────────────────────────────────────────────────────────────

LOOKER (LOOKER)
                    
LOOKER is a swift diskspace usage viewer. It can only be used on
a computer equipped with an Enhanced Graphics Adapter (EGA) or
its equivalent, therefore the representation of the disk is
presented in a high quality manner. LOOKER is very simple to use,
and running it from a hard drive or a floppy disk are both
suitable.
                    
Latest version: 1.10
Registration fee: Free

─────────────────────────────────────────────────────────────────

SIM-RMD Hard Disk Backup Reminder (SIM-RMD)
          
SIM-RMD is a little utility that helps computer users to remember
backing up their valuable hard disk data when a particular days
after the last backup performed is reached. It is extremely
useful for people who forget to backup their hard disk until
disaster strikes, and they can not blame anyone except
themselves. With this utility, you will find that you do not need
to record down the date to backing up. Once installed, you'll
never need to remember about backing up your hard disk again.
Just let this utility to remind you when it's time. It is not a
TSR (Terminate and Stay Resident), therefore you will not lose
even a single byte of memory. Whether you are a beginner in
computer, or expert, you will appreciate the use of SIM-RMD.
Normally you will put SIM-RMD in AUTOEXEC.BAT, a file that DOS
executes every time when the computer is booted.
          
Latest version: 2.10
Registration fee: $11

─────────────────────────────────────────────────────────────────
                    
Super Trigger (STRIGGER)
          
This program was written to aid computer users in running or
skipping a certain set of routines at the beginning of everyday
when they turn on their computer. Some examples of programs to
run only once a day are:
          
-    Non-resident appointment scheduler
-    Datebook
-    Calendar
-    Maintenance routines
          
There are million possible routines that you may think of
skipping or running only on the first start of the computer each
day. For example, a datebook. You only want to find out the exact
information of what you are going to do at the start of a day,
not every time you turn on your computer.
          
Latest version: 1.10
Registration fee: $11
```
{% endraw %}

## VENDOR.TXT

{% raw %}
```
Dear Shareware Vendor:                   

This file contains our distribution policy and information on all
products.

Simvis Soft has a simple distribution policy: You have permission
to distribute our shareware in its original form as long as you:

* identify it as shareware (with an appropriate definition)

* leave all intellectual property (copyright) notices in place

..and as long as we do not request that you stop.

That's it.

You may archive our programs, unarchive them, include/exclude
optional files (like this one), include them with other programs on
the same diskette, and do essentially anything you want as long as
you follow these simple rules.  We want the widest possible
distribution, and don't want to stand in your way so long as you are
honest with our mutual customer.

If you have any questions, concerns, or complaints, please contact
me:

                               Simon Lee
                           7905 Bayview Ave.
                               Unit 1019
                          Thornhill, Ontario
                            Canada, L3T 7N3

                         Voice: (416) 882-2514
                           Fax: (416) 882-2527

International:

  If you are a publisher interested in translating and supporting
  our products in another language, please contact us to discuss
  an exclusive agreement for your language and country.  If you
  are interested in providing registration and support services
  outside of North America in English, we are interested in working
  with you on a non-exclusive basis.

Suggested Descriptions of BEN:

 Short:        ▒▒▒▒▒▒▒▒▒▒▒ Batch ENhancer v3.00 ▒▒▒▒▒▒▒▒▒▒▒
               Add colors, sounds, boxes, menus, directory
               controls and other SPECTACULAR features into
               batch files. Now with new Batch Editor! VG!

 Long:         ▒▒▒▒▒▒▒▒▒▒▒ Batch ENhancer v3.00 ▒▒▒▒▒▒▒▒▒▒▒
               BEN is an utility that specializes in
               enhancing batch files. It can incorporate
               colors, sounds, menus, pop-up boxes,
               directory controls and a host of other
               SPECTACULAR features into any batch file
               that you ever write. Easy yet powerful. Use
               it to complement your menuing program. Use
               it to develop network utilities. Use it
               anyway you want. There's no limit to what
               you can do with it. Now with the all new
               Batch Editor! VG!
```
{% endraw %}

## WHATSNEW.TXT

{% raw %}
```
List of Changes from Version 2.61 to Version 3.00
─────────────────────────────────────────────────

I.   Addition of new functions:
     A.   CLEANUP - used at the end of batch files. Its purpose is
          cleaning up the mess left behind by batch routines.
     B.   EXTRACT - returns a part of a fully qualified filename.
     C.   FLUSH - clears the keyboard buffer.
     D.   GETCD - returns the current directory to the batch file.
     E.   GETVIDEO - checks what kind of video system is installed
          (eg. CGA, VGA) and return the result to the batch file.
     F.   PLAY - produces music from the speaker. BEN PLAY uses the
          same statements that the BASIC PLAY uses.
     G.   LIST - a file browser.
     H.   MESSAGE - MESSAGE draws a box on the screen and displays
          the specified message.
     I.   SAVEPATH - SAVEPATH is a environment-memory conservation
          function.
     J.   SHELL - SHELL lets the user jump to DOS in the middle of
          a batch file.
     K.   TITLEDBOX - TITLEDBOX displays a filled box with a title
          on the screen.
     
II.  Changes made to old functions:
     A.   Renames:
          1.   GOTOXY is now LOCATE.
          2.   COLORNOW is now COLOR.
          3.   ATTRIB is now CLS.
          4.   WAITKEY is now PAUSE.
          5.   INLINE is now GETLINE.
          6.   INLINEU is now GETLINEU.
          7.   INKEY is now GETKEY.
          8.   INKEYU is now GETKEYU.
     B.   Splitting of the BOX function into BOX, FILLEDBOX,
          GROWFILLEDBOX, SHADFILLEDBOX, TRANSPARENTBOX.
     C.   EGAVGA now returns errorlevels of 1 or 2, insteads of 0
          or 1.
     D.   WRITE, WRITEC and WRITEV no longer require you to specify
          the number of words to display.
     E.   WRITE and WRITEC can now "not wrap" to the next line when
          finished displaying.
     F.   CURSOR now supports four shapes: ON, OFF, FULL, HALF.
     G.   DIRDISP gets a new look, and it is now separated to
          DIRDISP and DIRDISPA.
     H.   You can now specify colors with descriptive names. For
          example, instead of "BEN COLOR 15 1", you can use "BEN
          COLOR WHITE BLUE". This is not mandatory, but it
          increases the readability of your batch file.

III. Removal of useless functions:
     A.   DEBOX
     B.   SOUND T
     C.   SCROLL T

IV.  Other changes in BEN.EXE:
     A.   You can now use the ; comment symbol in T data files.
     B.   You can now use the separator "/" when you stack BEN
          functions. For example, instead of "BEN BEEP CLS BLUE",
          you can use "BEN BEEP / CLS BLUE". This is not mandatory,
          but it increases the readability of your batch file.
     C.   Online help is now placed in BEN.HLP instead of the main
          executable BEN.EXE.

V.   BENEdit
     A.   BENEdit is a text editor that allows you to edit batch
          files and select BEN features quickly and easily.

VI.  Miscellaneous
     A.   BENDEMO.BAT is redesigned.
     B.   INSTALL.BAT is added.
     C.   BEN now uses dynamic memory allocation. This memory
          management method is much better than the static memory
          allocation method in past versions of BEN.
     D.   BEN and the associated executables are now dynamically
          compressed.
     E.   BEN now runs at a much quicker speed.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3631

     Volume in drive A has no label
     Directory of A:\

    README            5151   7-15-92   3:00a
    BENDEMO  BAT     10869   7-15-92   3:00a
    BROWSE   BAT       283   7-15-92   3:00a
    INSTALL  BAT      2361   7-15-92   3:00a
    BENDEMO  DA1      2239   7-15-92   3:00a
    BENDEMO  DA2       228   7-15-92   3:00a
    BENDEMO  DA3      1122   7-15-92   3:00a
    BENDEMO  DA4      1444   7-15-92   3:00a
    BENDEMO  DA5      1378   7-15-92   3:00a
    BENDEMO  DA6      4617   7-15-92   3:00a
    FILE_ID  DIZ       182   7-15-92   3:00a
    BEN      EXE     53495   7-15-92   3:00a
    BENEDIT  EXE     77704   7-15-92   3:00a
    BEN      HLP     24558   7-15-92   3:00a
    BENEDIT  HLP     51357   7-15-92   3:00a
    BEN      TXT     49211   7-15-92   3:00a
    PRODUCTS TXT      5701   7-15-92   3:00a
    VENDOR   TXT      2547   7-15-92   3:00a
    WHATSNEW TXT      3429   7-15-92   3:00a
    GO       BAT        32   9-29-92  11:26a
    SHOW     EXE      2040   9-12-88  10:48a
           21 file(s)     299948 bytes
                            9216 bytes free
