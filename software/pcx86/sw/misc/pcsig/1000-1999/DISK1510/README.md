---
layout: page
title: "PC-SIG Diskette Library (Disk #1510)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1510/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1510"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREENPAINT"

    SCREENPAINT lets you design lightning-fast batch file based hard-disk
    menus, help facilities, pop-up windows, and prototype screens for
    applications programs.  Screens can be quickly "painted" in a full-
    screen editing environment, complete with pulldown menus, help screens,
    automatically connecting lines, and a wide variety of drawing and
    editing tools.
    
    Completed screens can then be called from a DOS batch file and
    displayed quickly rather than scrolled using the extremely slow DOS
    ECHO command. Another feature allows screens to be displayed and key
    codes to be returned to the calling batch file where they may be used to
    control the operation of the batch file.  Unlike other menu creation
    systems, SCREENPAINT gives you complete control over the style of menu
    displays.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1510.TXT

{% raw %}
```
Disk No: 1510
Disk Title: ScreenPaint
PC-SIG Version: S1.1

Program Title: ScreenPaint
Author Version: 1.2
Author Registration: $25.00
Special Requirements: None.

Design lightning-fast batch-file-based menus, help facilities, pop-up
windows, and prototype screens for your applications.

SCREENPAINT lets you lay out and paint crisp menu screens using
pull-down menus, keyboard accelerators, and a help function.  Ten
screen pages, automatically connecting lines, and a wide variety of
drawing and editing tools will help you produce a professional
product.

Included is SCREENSHOW, a stand alone program for presenting completed
screens and retrieving keyboard input.  Screens are displayed from a
DOS batch file, popping them directly to the video display rather than
scrolling them up using the DOS ECHO command.  Compatible with most
batch languages--from DOS to extenders like Beyond.Bat, Command
Plus, and Extended Batch Language.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk No 1510 SCREENPAINT  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To watch a demo of the program, type DEMO (press enter)                 ║
║                                                                         ║
║ To view the documentation on your screen, type VIEW (press enter)       ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```






            
            
            
            
            
            
                          *********************************

                                     ScreenPaint

                          *********************************
            
            
                                 Screen Design System
            
            
            
            
            
            
            
            
                                    User's Guide
            
                                   for Version 1.2
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                                 (C) Copyright 1989 Kai Laurinolli
            





                                             License Statement
            
            
            
            Kai Laurinolli grants you without charge the right to
            reproduce, distribute and use copies of this "shareware"
            product, and the documentation on disk, on the express
            condition that you do not receive any payment, commercial
            benefit, other consideration for such reproduction or
            distribution greater than $10 US, or change this license
            agreement or copyright notice.
            
            
            
            THIS PRODUCT IS LICENSED "AS IS" WITHOUT WARRANTY OF ANY
            KIND; ALL WARRANTIES ARE DISCLAIMED. BY USING THE
            SCREENPAINT PRODUCT, YOU AGREE THAT KAI
            LAURINOLLI WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY USE
            OF (OR INABILITY TO USE) THIS SOFTWARE, OR FOR ANY
            DAMAGES WHATSOEVER (INCLUDING WITHOUT LIMITATION DAMAGES
            FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS
            OF BUSINESS INFORMATION, AND THE LIKE). EVEN IF WE
            ARE APPRISED OF POSSIBILITY OF SUCH DAMAGES OCCURRING.
            BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION
            OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE
            ABOVE LIMITATION MAY NOT APPLY TO YOU.





            Brand and product names appearing in this manual are
            trademarks or registered trademarks of their respective
            holders.





            Table of Contents
            
            
            
            
            
            The Shareware Concept ................................ 1
            
            Introduction ......................................... 1
            
            Hardware Requirements ................................ 2
            
            Programs in the System ............................... 2
            
            ScreenPaint .......................................... 3
            
                 Menus ........................................... 3
            
                 Keyboard ........................................ 6
            
                      Block Commands ............................. 6
                      
                      Drawing Commands ........................... 6
            
                      Control Keys ............................... 7
            
                      Miscellaneous .............................. 7
            
            ScreenShow ........................................... 8
            
                 Command Line Switches ........................... 9
            
                 Batch Files ..................................... 10
            
            Appendix A     Control Drawing Keys .................. 11
            
            Appendix B     ASCII Chart ........................... 12
            
            Appendix C     Keyboard Chart ........................ 13
            
            Appendix D     Extended Keyboard Scan Codes .......... 14
            
            Appendix E     Registration Form ..................... 15
            


      ScreenPaint 1.2                                                 Page 1


            The Shareware Concept
            -----------------------------------------------------------
            
            
                 This software product is being distributed as
            shareware, a distribution concept where the user is able to
            try the software on his/her own system and then send in a
            contribution if the user decides to use the software, this
            system reduces advertising and distribution costs and
            therefore the final price to the end-user. You are
            encouraged to pass copies of the program to others and to
            up-load it to any bulletin board systems you frequent, as
            long as no more than a $10 US distribution fee is charged
            and the product is not modified in any manner.
            
                 If you decide to use ScreenPaint and find it valuable,
            you are asked to send a donation, $25 US suggested, so that
            we may continue improving and expanding the program. You may
            use the registration form in appendix E or in the file
            REGISTER.DOC, please send your contribution to the following
            address:
            
                                   Kai Laurinolli
                                   2970 Mira Place
                                   Burnaby, B.C.
                                   V3J-1B6 Canada
            
                 In the future we plan to add language interfaces,
            memory-resident help programs, screen capture, and forms
            design capabilities to the system. By sending in your
            contribution, you allow us the opportunity to notify you of
            future upgrades and information on new products.
            
                 Registered users will be mailed the latest version of
            the program on diskette upon receipt of payment.
            
            
            
            Introduction
            -----------------------------------------------------------
            
            
                 ScreenPaint is designed to allow the design of
            lightning-fast batch file based hard-disk menus, help
            facilities, pop-up windows, and prototype screens for
            applications programs. Screens can be quickly "painted" in a
            full-screen editing environment, complete with pulldown
            menus, help screens, automatically connecting lines, ten
            screen pages, and a wide variety of drawing and editing
            tools.
            
                 Completed screens can then be displayed from a DOS
            batch file and "popped" directly to the video display,
            rather than scrolled using the extremely slow DOS ECHO


      ScreenPaint 1.2                                                 Page 2


            command. The ScreenShow program allows screens to be
            displayed and key codes to be returned to the calling batch
            file where they may be tested. Unlike other menu creation
            systems, the user has complete control over the style of
            menu displays and the menu screens can be totally
            independent of the user input routines. This allows the user
            the flexibilty to use any batch language from DOS to batch
            extenders like Beyond.Bat, Command Plus, and Extended Batch
            Language.
            
            
            
            Hardware Requirements
            -----------------------------------------------------------
            
            
                 The following is a list of the hradware required to run
            the ScreenPaint program:
            
                 1) IBM-PC or compatible with at least 128k RAM.
                 2) PC or MS-DOS 2.0 or higher.
                 3) Color or monochrome video system.
                 4) A minimum of 1 single-sided floppy disk drive.
            
            
            
            Programs in the System
            -----------------------------------------------------------
            
            
                 The ScreenPaint software consists of the following
            programs:
            
                 SCRPAINT.EXE   ScreenPaint screen image editor
                 SCRSHOW.EXE    ScreenShow batch-file screen display,    
                                keyboard input program
                 SCANCODE.SCN   Keyboard scan code reference screen
                 KEYHELPn.SCN   Keyboard help screens
                 MNUHELPn.SCN   Menu help screens
                 DEMO.BAT       Sample batch-file driven menu system
                 DEMO.SCN       Screen image for DEMO.BAT
                 DEMOHELP.SCN   Help screen for DEMO.BAT
                 MANUALHI.DOC   Documentation for printers which support
                                extended characters (above 127)
                 MANUAL.DOC     Documentation for regular printers
                 README.DOC     Instructions on printing manual, etc.
                 REGISTER.DOC   Registration form, also in manual
            
            
            
            ScreenPaint
            -----------------------------------------------------------
            
            


      ScreenPaint 1.2                                                 Page 3


                 ScreenPaint is used to design and edit screen images
            employing a wide range of drawing and editing tools. To run
            the program type SCRPAINT at the DOS prompt and press
            <ENTER>, a screen image filename can also be specified after
            the program name.
            
                 Example:  C:>SCRPAINT SCANCODE.SCN
                 
                 This would run ScreenPaint and load the screen image    
                 file "SCANCODE.SCN"
            
                 ScreenPaint provides for two alternative methods of
            issuing commands, through pull-down menus and through
            keyboard short-cuts. Pressing <Esc> displays the main menu,
            the highlighted selection can be moved using the left and
            right arrow keys. To "pull-down" a menu, press <Enter> or
            the down arrow, the up and down arrows now select commands
            from this sub-menu. The ellipses indicate that a window will
            appear if such a selection is made and the keys on the right
            side of each pull-down menu are the short-cut keys which can
            be accessed from the drawing area without opening the menus.
            Pressing <Esc> will return to the previous menu or return to
            the drawing area if the main menu is active.
            
            
            Menus
            -----
            
            
            File ------------------------------------------------------
            
            New
                 Clear all the screens and begin over, note that this    
                 selection cannot be undone.
            
            Load
                 Loads a screen file from disk. The file can be a        
                 ScreenPaint file, a BASIC BLOAD compatible file, or an
                 ASCII text file, ScreenPaint automatically determines   
                 the type when loading. The default extension is ".SCN"
                 if none is specified.
                 Clipboard load is used to load a screen or clipping to
                 the clipboard without disturbing the work in progress.
            
            Save
                 The current file or clipboard is saved to disk in one   
                 of the indicated formats which are selected by pressing
                 the first letter of the selection. ScreenPaint format   
                 stores files in a packed style which saves disk space,
                 BASIC BLOAD can be used if you wish to access the       
                 screen from within a BASIC program, and ASCII text      
                 format can be used for transferring screen images to    
                 word processors or text editors.
            


      ScreenPaint 1.2                                                 Page 4


            DOS shell
                 Enters DOS so that disks may be formatted, files        
                 copied, programs run, etc. Type EXIT in DOS to return   
                 to ScreenPaint. This is not a quit command, ScreenPaint
                 will remain resident in  memory until you quit properly
                 using the Quit command or Alt-Q.
            
            Quit
                 Quit the current work session. Remember to save your    
                 work, ScreenPaint will only ask confirmation of the     
                 command.
            
            Edit ------------------------------------------------------
            
            Undo
                 Any edit command can be undone as long as a new block   
                 has not been marked. The screen will be restored to the
                 state before the EDIT command, the undo command however
                 cannot itself be "undone".
            
            Cut
                 Transfer the marked block to the clipboard and erase    
                 anything under the block to the current color. See      
                 Block Commands in the keyboard section for marking      
                 information.
            
            Copy
                 Transfer a copy of the marked block to the clipboard    
                 and leave the screen intact.
            
            Paste
                 Restore block from the clipboard to the screen at the   
                 current cursor position. If the block extends outside   
                 the screen area, those sections will be cropped.
            
            Erase
                 Erase the marked block to the current color.
            
            Fill
                 Fill the marked block with the current ASCII character.
                 See the Change/ASCII character sub-menu for the current
                 character.
            
            Switch colors
                 Swap all colors in the marked block to the current      
                 color. Also see the Paint command for more precise      
                 color modification.
            
            Draw ------------------------------------------------------
            
            Line
                 Draw a horizontal or vertical line between two points.
                 The first point is the current cursor position, select
                 line from the menu and move to the second point and     


      ScreenPaint 1.2                                                 Page 5


                 press ENTER. The command can be cancelled by selecting
                 line a second time.
            
            Box
                 Draw a hollow box between two corners. The first corner
                 is the current cursor position, select box from the     
                 menu and move to the second corner and press ENTER.
            
            Solid Box
                 Draw a filled box between two corners.
            
            Freehand
                 Toggle freehand mode on and off. Use the arrow keys to
                 sketch.
            
            Paint
                 Toggle paint mode on and off. Use the arrow keys to     
                 change to the current color without disturbing the      
                 characters.
            
            Change ----------------------------------------------------
            
            Color
                 Change the current color by using the arrow keys, home,
                 and end to select a color. ESC cancels the selection    
                 and ENTER accepts.
            
            Line style
                 Choose line style for the drawing commands, select by   
                 pressing the highlighted letter followed by ENTER.
            
            ASCII character
                 Select the current ASCII character. Scroll through the
                 four pages using the PgUp and PgDn keys.
            
            Options ---------------------------------------------------
            
            Text only
                 Toggle text only mode, where the underlying color is    
                 preserved when a character is typed.
            
            Info line
                 Toggle the information line at the bottom of the screen
                 on and off. The line contains information on the screen
                 number, cursor position, current color, and drawing     
                 mode.
            
            Tabs
                 Set the tab stops using the arrow keys, SPACE toggles   
                 the tab.
            
            Help ------------------------------------------------------
            
            Keyboard


      ScreenPaint 1.2                                                 Page 6


                 Display help screens about the keyboard commands. The   
                 KEYHELPn.SCN files must be in the current directory.
            
            Menu
                 Display help screens about the menu selection. The      
                 MNUHELPn.SCN files must be in the current directory
            
            About ScreenPaint
                 Short description of ScreenPaint.
            
            
            Keyboard
            --------
            
            
            Block Commands --------------------------------------------
            
                 Alt-B     Mark block beginning and end, press twice at
                           same location to select the entire screen.
                     C     Copy block to clipboard
                     E     Erase current marked block
                     F     Fill marked block with ASCII character
                     K     Switch colors of marked block to current
                     M     Paste block from the clipboard, centered
                     O     Copy marked block to clipboard
                     P     Paste block from the clipboard at cursor
                     U     Unmark selected block
            
            
            Drawing Commands ------------------------------------------
            
                 F6        Draw line from cursor position to point where
                           ENTER is pressed
                 F7        Draw box between two corners
                 F8        Draw filled box between two corners
                 F9        Toggle freehand drawing mode
                 F10       Toggle paint mode
            
            
            Control Drawing -------------------------------------------
            
                 To draw a box character without automatic line connect,
                 the CONTROL key plus a letter may be used. See the      
                 keyboard help menu for a diagram of keys.
            
            
            Miscellaneous ---------------------------------------------
            
                 F1        Display help screens about keyboard
                 F2        Toggle text only mode, in which the color at
                           the cursor remains unchanged
                 F3        Make the color at the cursor position current
                 F4        Load menu
                 F5        Write the current ASCII character


      ScreenPaint 1.2                                                 Page 7


            
                 Alt-F1    Toggle information line
                     F2    Undo
                     F3    Make the character at the cursor position the
                           current ASCII character
                     F4    Save menu
                     F5    ASCII character menu
                     F6    Line style menu
                     F7    Toggle blink mode
                     F8    Toggle intensity
                     F9    Swap foreground and background colors
                     F10   Color menu
            
                 Home      Move cursor to the beginning of the line
                 End       Move cursor to the end of the line
                 Ctrl-Home Move cursor to the uppper-left corner
                 Ctrl-End  Move cursor to the lower-right corner
                 Backspace Delete character to left of cursor, pull      
                           characters from right if insert mode active
                 Ins       Toggle insert mode
                 Del       Delete character at cursor
                 PgUp      Display the next screen page
                 PgDn      Display the previous screen page
                 Ctrl-PgDn Display the last screen page
                 Ctrl-PgUp Display the first screen page
            


      ScreenPaint 1.2                                                 Page 8


            ScreenShow
            -----------------------------------------------------------
            
            
            
                 ScreenShow is a stand-alone program for displaying
            screen images from DOS batch-files and returning keyboard
            input to DOS.
                 Hard-disk menus can first be created using ScreenPaint,
            with no limitations on style or format. The completed
            screens can be displayed quickly using ScreenShow and the
            keyboard input options allow the program to return
            keystrokes to DOS in the ERRORLEVEL variable which can be
            tested within a batch-file.
                 To run ScreenShow, type SCRSHOW at the DOS prompt
            followed by the path and filename of a valid screen saved in
            the packed ScreenPaint format.
            
            
            Command Line Switches
            ---------------------
            
            
                 The complete command line format is:
            
            SCRSHOW [d:][filespec][/K|/A|/L|/Q|/P][/Wxxyy][/C#][/N#][/R]
            
                 Where: d:       - Disk drive
                        filespec - Path and filename of screen image
            
                        /K       - Return extended scan code in          
                                   ERRORLEVEL as decimal
                        /A       - Return uppercase ASCII character in   
                                   ERRORLEVEL
                        /L       - Return ERRORLEVEL = 0 if 'A'/'a'      
                                   pressed to 25 if 'Z'/'z' pressed
                        /Q       - Query user, ERRORLEVEL = 1 if 'Y'/'y'
                                   pressed or 0 otherwise
                        /P       - Pause until key pressed
            
                        /Wxxyy   - Display screen as window at xx,yy     
                                   (each coordinate must be two decimal
                                   characters)
                        /C#      - Clear screen first to background #
                        /N#      - Display page # of multi-screen file
                        /R       - Restore background on exit
            
            Examples:
            
            SCRSHOW MENU.SCN /K
            
                 Display the screen file, MENU.SCN and wait for keyboard
                 input. The extended scan code will be returned in       
                 ERRORLEVEL.


      ScreenPaint 1.2                                                 Page 9


            
            SCRSHOW HELP.SCN /N3 /P /R
            
                 Display the third page of HELP.SCN and pause until a    
                 key is pressed, restore screen when done.
            
            SCRSHOW ERROR1.SCN /W2105 /P /R
            
                 Pop-up window over current screen at X=21, Y=5 and wait
                 for a key press, restore screen when done.
            
            
            Batch Files
            -----------
            
            
                 Batch files are the base of any menu system created
            using ScreenPaint, here is a short introduction to using
            batch files.
                 To prevent text from scrolling the screen image, an
            ECHO OFF statement must be placed at the beginning of your
            batch file. The ScreenShow program can now be called to
            display the menu image and wait for user input. When a key
            is pressed, ERRORLEVEL must be tested, as shown below:
            
                 ECHO OFF
                 :START
                 SCRSHOW MENU.SCN /A
                 IF ERRORLEVEL = 67 GOTO C
                 IF ERRORLEVEL = 66 GOTO B
                 IF ERRORLEVEL = 65 GOTO A
                 IF ERRORLEVEL = 27 GOTO QUIT
                 GOTO START
                 :C
                 ECHO C Pressed
                 GOTO START
                 :B
                 ECHO B Pressed
                 GOTO START
                 :A
                 ECHO A Pressed
                 GOTO START
                 :QUIT
                 CLS
            
                 Note that the ERRORLEVEL tests must be in descending    
            order, highest values first, this is because ERRORLEVEL = x
            is true if the value returned by ScreenShow is greater than
            or equal to x.


      ScreenPaint 1.2                                                Page 10


            Batch File Example
            
            
            :start
            echo off
            scrshow main.scn /k
            if errorlevel = 216 goto shutdown
            if errorlevel = 59 goto help
            if errorlevel = 38 goto lotus
            if errorlevel = 19 goto paint
            if errorlevel = 9 goto scrpaint
            if errorlevel = 1 goto end
            goto start
            :shutdown
            park
            :help
            scrshow help1.scn /p /w1010 /r
            goto start
            :lotus
            123
            goto start
            :paint
            pcpaint
            goto start
            :scrpaint
            scrpaint
            goto start
            :end
            cd\
            cls


      ScreenPaint 1.2                                                Page 11


            Appendix A - Control Drawing Keys


            Single width

            Q - Upper left   W - Top          E - Upper right
            A - Left         S - Middle       D - Right
            Z - Lower left   X - Bottom       C - Lower right

            U - Horizontal   O - Vertical


            Double width

            R - Upper left   T - Top          Y - Upper right
            F - Left         G - Middle       H - Right
            V - Lower left   B - Bottom       N - Lower right

            I - Horizontal   P - Vertical


            Thick lines

            J - Vertical, left aligned
            M - Vertical, right aligned
            K - Horizontal, top aligned
            L - Horizontal, bottom aligned
            


     Page 12                                                    ScreenPaint 1.1


            Appendix B - ASCII Character Chart



            ------------------------------------------------------

            000    016    032    048 0  064 @  080 P  096 `  112 p
            001    017    033 !  049 1  065 A  081 Q  097 a  113 q
            002    018    034 "  050 2  066 B  082 R  098 b  114 r
            003    019    035 #  051 3  067 C  083 S  099 c  115 s
            004    020    036 $  052 4  068 D  084 T  100 d  116 t
            005    021    037 %  053 5  069 E  085 U  101 e  117 u
            006    022    038 &  054 6  070 F  086 V  102 f  118 v
            007    023    039 '  055 7  071 G  087 W  103 g  119 w
            008    024    040 (  056 8  072 H  088 X  104 h  120 x
            009    025    041 )  057 9  073 I  089 Y  105 i  121 y
            010    026    042 *  058 :  074 J  090 Z  106 j  122 z
            011    027    043 +  059 ;  075 K  091 [  107 k  123 {
            012    028    044 ,  060 <  076 L  092 \  108 l  124 |
            013    029    045 -  061 =  077 M  093 ]  109 m  125 }
            014    030    046 .  062 >  078 N  094 ^  110 n  126 ~
            015    031    047 /  063 ?  079 O  095 _  111 o  127

            ------------------------------------------------------

            128    144    160    176    192    208    224    240
            129    145    161    177    193    209    225    241
            130    146    162    178    194    210    226    242
            131    147    163    179    195    211    227    243
            132    148    164    180    196    212    228    244
            133    149    165    181    197    213    229    245
            134    150    166    182    198    214    230    246
            135    151    167    183    199    215    231    247
            136    152    168    184    200    216    232    248
            137    153    169    185    201    217    233    249
            138    154    170    186    202    218    234    250
            139    155    171    187    203    219    235    251
            140    156    172    188    204    220    236    252
            141    157    173    189    205    221    237    253
            142    158    174    190    206    222    238    254
            143    159    175    191    207    223    239    255

            ------------------------------------------------------


     Page 13                                                    ScreenPaint 1.1


            Appendix C - Keyboard Chart



                        +-----+-----+
            Help        | F1  | F2  |  Text & color/text only
            Info-line   |     |     |  Undo
                        +-----+-----+
            Make color  | F3  | F4  |  Load
            Make ASCII  |     |     |  Save
                        +-----+-----+
            Write ASCII | F5  | F6  |  Line
            ASCII Menu  |     |     |  Line style
                        +-----+-----+
            Box         | F7  | F8  |  Solid box
            Blink       |     |     |  Intensity
                        +-----+-----+
            Freehand    | F9  | F10 |  Paint
            Swap F & B  |     |     |  Color menu
                        +-----+-----+

            Lower command entered by pressing <Alt> + Function Key.


     Page 14                                                    ScreenPaint 1.1


            Appendix D - Extened Keyboard Scan Codes


            +---+   +---+---+---+---+ +---+---+---+---+ +---+---+---+---+
            |  1|   | 59| 60| 61| 62| | 63| 64| 65| 66| | 67| 68| 87| 88|
            +---+   +---+---+---+---+ +---+---+---+---+ +---+---+---+---+
            +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
            |`41|1 2|2 3|3 4|4 5|5 6|6 7|7 8|8 9|910|011|-12|=13|Back 14|
            +---+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+---+
            |Tab15|Q16|W17|E18|R19|T20|Y21|U22|I23|O24|P25|[26|]27|\ 43 |
            +-----++--++--++--++--++--++--++--++--++--++--++--++--+-----+
            |Caps58|A30|S31|D32|F33|G34|H35|J36|K37|L38|;39|'40|Enter 28|
            +------+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--------+
            |Shift 42|Z44|X45|C46|V47|B48|N49|M50|,51|.52|/53|Shift   54|
            +-----+--++--+--++---+---+---+---+---+---+--++---++---+-----+
            |Ctl29|   |Alt56|                         57|Alt56|   |Ctl29|
            +-----+   +-----+---------------------------+-----+   +-----+

                                                        +---+---+---+
                                                        | 55| 70| 84|
             Note: All scan codes are in                +---+---+---+
                   in decimal                           +---+---+---+---+
                                                        |N69|/53|*55|-74|
                                                        +---+---+---+---+
                                                        | 71| 72| 73|+  |
             +-----+   +---+                            +---+---+---+   |
             |Ctrl | + |Key|  Add 100 to scan code      | 75| 76| 77| 78|
             +-----+   +---+                            +---+---+---+---+
             +-----+   +---+                            | 79| 80| 81|<-+|
             |Alt  | + |Key|  Add 200 to scan code      +---+---+---+   |
             +-----+   +---+                            |0    82|.83| 28|
                                                        +-------+---+---+


      ScreenPaint 1.2                                                Page 15


            +----------------------------------------------------------+
            |            ScreenPaint 1.2 Registration Form             |
            +----------------------------------------------------------+
            |                                                          |
            | Send to:            Kai Laurinolli                       |
            |                     2970 Mira Place                      |
            | $25 US              Burnaby, B.C.                        |
            | $32 Canadian        V3J-1B6  Canada                      |
            |                                                          |
            +----------------------------------------------------------+
            |                                                          |
            |                                                          |
            | Name: _________________________________________________  |
            |   (Last)             (First)              (Initial)      |
            |                                                          |
            |                                                          |
            | Company: ______________________________________________  |
            |                                                          |
            |                                                          |
            |                                                          |
            | Address: ______________________________________________  |
            |                                                          |
            |                                                          |
            |                                                          |
            | City: ___________________ State/Province: _____________  |
            |                                                          |
            |                                                          |
            |                                                          |
            | Zip/Postal Code: _________________ Country: ___________  |
            |                                                          |
            |                                                          |
            |                                                          |
            | Date: _____/_____/_____   Amount Enclosed: ____________  |
            |        (M)   (D)   (Y)                                   |
            +----------------------------------------------------------+
            |                                                          |
            | Comments, ideas for future versions, and complaints:     |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            +----------------------------------------------------------+
```
{% endraw %}

## README.DOC

{% raw %}
```






            README.DOC



            Getting Started
            ------------------------------------------------------------

                 This is a short introduction to ScreenPaint. To begin
            the program, at the DOS prompt type SCRPAINT and press
            <Enter>, the opening screen will appear and the program will
            wait until a key is pressed. To display the pull-down menus,
            press the <Esc> key and select an item with the cursor keys
            and <Enter>.

                 The disk contains a number of sample screen files which
            may be examined by selecting "Load" from the File menu and
            choosing a file with an .SCN extension. The user's manual
            explains in more detail how to use the drawing and editing
            tools, for on-line help press F1 or use the Help menu.

                 The file DEMO.BAT is a demonstration menu which allows
            you to run ScreenPaint, print the documentation, and view
            sample screen images. To run this batch file, type DEMO at
            the DOS prompt.

            Printing the Manual
            ------------------------------------------------------------

                 The disk contains two versions of the ScreenPaint
            manual, MANUALHI.DOC is for printers which are able to print
            the Extended Characters (the box drawing characters above
            127) and MANUAL.DOC is for printers that support only the
            lower-order ASCII characters.

                 The manual is 18 pages long and includes the
            registration form. To print the manual, type the following
            at the DOS prompt:

                 C>TYPE MANUALHI.DOC > PRN

                           or

                 C>TYPE MANUAL.DOC > PRN

                 If you wish to print the registration form separately,
            print the REGISTER.DOC form using the command:

                 C>TYPE REGISTER.DOC > PRN





            Registration
            ------------------------------------------------------------

                 ScreenPaint is not free software, it is being
            distributed as "shareware" and a suggested contribution of
            $25 US ($32 Cdn) would be greatly appreciated. Please use
            one of the registration forms provided, or send your check
            to:


                                   Kai Laurinolli
                                   2970 Mira Place
                                   Burnaby, B.C.
                                   V3J-1B6  Canada


            Registered users will be mailed the latest version of the
            program on diskette and will be notified of new products.

            Your support is greatly appreciated, Kai Laurinolli.

            Version History
            ------------------------------------------------------------

            Version 1.0, February 1989

            Version 1.1, March 1989
                - Corrected problem when saving files from menu
                - Clearer dialog box buttons

            Version 1.2, May 1989
                - Corrected problem with Tab Settings dialog box
                - Current help page stored, instead of returning to
                  first page
                - DOS Shell command works properly when information line
                  is active
                - Corrected scrolling problems in Load dialog box
                - DOS Shell now uses parent's environment variables
                  such as modified prompt, path, etc.
            



             

            Additions to the Manual
            ------------------------------------------------------------

                 These are clarifications and additions to the User's
            Guide, if you have questions or can suggest improvements to
            the manual or program, please feel free to write to me at
            the above address.

            ScreenShow
            ----------

            - Creating and Using Windows

                 To display windows over existing screens, an area of
                 the screen must be copied to the clipboard. The
                 single window must then be saved to a separate file
                 with the "Save Clipboard" option.
                 ScreenPaint normally saves all 10 pages to a file when
                 Save is selected regardless of how many pages are
                 actually used.

                 When loading clippings, remember to set the "Load to
                 Clipboard" option and then Paste the image to the
                 screen, otherwise the clipping will appear "squashed."

                 Using ScreenShow to display the window requires the use
                 of the /Wxxyy command line switch, where xx is the
                 column in the range 0 to 79 in decimal and yy is the
                 row between 0 and 24.

                 The clipping will be placed over the existing screen,
                 complete with shadow. If the underlying screen is to be
                 restored, use the /R switch. The Help window in
                 DEMO.BAT is a good example of a window which "pops"
                 over and existing screen.

            - Improving Performance

                 The performance of displaying screen images can be
                 significantly improved by storing all screen pages in
                 separate files using the "Save Clipboard" option in the
                 Save dialog box instead of creating one large, ten page
                 file.

                 When ScreenShow is asked to display a single page from
                 a ten page file it must read all ten pages before
                 displaying the single image. This is due to the method
                 of packing files to save disk space.
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
            +----------------------------------------------------------+
            |            ScreenPaint 1.2 Registration Form             |
            +----------------------------------------------------------+
            |                                                          |
            | Send to:            Kai Laurinolli                       |
            |                     2970 Mira Place                      |
            | $25 US              Burnaby, B.C.                        |
            | $32 Canadian        V3J-1B6  Canada                      |
            |                                                          |
            +----------------------------------------------------------+
            |                                                          |
            |                                                          |
            | Name: _________________________________________________  |
            |   (Last)             (First)              (Initial)      |
            |                                                          |
            |                                                          |
            | Company: ______________________________________________  |
            |                                                          |
            |                                                          |
            |                                                          |
            | Address: ______________________________________________  |
            |                                                          |
            |                                                          |
            |                                                          |
            | City: ___________________ State/Province: _____________  |
            |                                                          |
            |                                                          |
            |                                                          |
            | Zip/Postal Code: _________________ Country: ___________  |
            |                                                          |
            |                                                          |
            |                                                          |
            | Date: _____/_____/_____   Amount Enclosed: ____________  |
            |        (M)   (D)   (Y)                                   |
            +----------------------------------------------------------+
            |                                                          |
            | Comments, ideas for future versions, and complaints:     |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            |                                                          |
            +----------------------------------------------------------+
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1510

     Volume in drive A has no label
     Directory of A:\

    DEMO     BAT       974   8-23-89   3:59p
    DEMO     SCN       995   2-28-89   6:54p
    DEMOHELP SCN       398   2-26-89  10:58p
    FILE1510 TXT      1071  12-05-89  12:13p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       694   8-04-89   8:26a
    KEYHELP1 SCN      1500   2-24-89   6:25p
    KEYHELP2 SCN      1141   2-24-89   6:27p
    KEYHELP3 SCN      1609   5-24-89   7:51p
    MANUAL   BAT       152   8-04-89   8:30a
    MANUAL   DOC     37657   6-12-89   8:57p
    MANUALHI DOC     38149   6-12-89   8:57p
    MNUHELP1 SCN       942   2-28-89   8:16p
    MNUHELP2 SCN      1013   2-28-89   8:16p
    MNUHELP3 SCN       808   3-17-89   9:46a
    PAGE     COM       325   1-06-87   4:21p
    README   DOC      6026   5-24-89   7:55p
    REGISTER DOC      3923   5-22-89   6:01p
    SCANCODE SCN      1939   2-22-89   9:10p
    SCRPAINT EXE     50722   5-24-89   8:48p
    SCRSHOW  EXE     14808   5-22-89   4:32p
    VIEW     BAT        42   8-04-89   8:29a
           22 file(s)     164926 bytes
                          147456 bytes free
