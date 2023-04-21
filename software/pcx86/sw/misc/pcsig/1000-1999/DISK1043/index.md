---
layout: page
title: "PC-SIG Diskette Library (Disk #1043)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1043/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1043"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SNAP FILER & MASTER MENU"

    SNAP FILER is a compact, memory-resident database program with many of
    the features of a built-in spreadsheet for use with jobs too small or
    short-term to require a slower, more complicated database.
    
    Organize data as a table or spreadsheet, with rows and columns
    displayed on-screen. Pull-down menus help make this program easy to
    operate. Keep track of names, addresses, sales, or anything else that
    can be kept in a list. Define and use dates, times, names, and dollar
    amounts for fields, with automatic proofing and formatting for each.
    Sort, search, and calculate the data in each file. SNAP FILER uses
    formula relationships in fields, with automatic recalculation after
    each entry. Print reports, either the current file or a certain block
    of data. Import and export files in .DIF format to other software
    packages such as Lotus 1-2-3.
    
    Create customized menus to be "control centers" for running
    application programs and frequently-used DOS routines.  For the novice,
    it saves a lot of frustration.  For the more experienced user, it saves
    a lot of time.
    
    You can run applications at the touch of a single key instead of typing
    in commands.  No more forgetting commands or DOS directory names -- all
    these are entered one time only and MENU MASTER remembers the commands
    for you.  It frees you from having to remember and type those
    complicated commands -- letting you concentrate on getting your work
    done.
    
    Major features include:
    
    ~  Menu settings entered directly from program -- no text editor needed
    
    ~ Ability to "chain" multiple menus together
    
    ~ 24 menu items with user-defined prompts, passwords and paths
    
    ~ Up to seven command lines per menu item
    
    ~ Custom screen colors and individual menu prompt colors
    
    ~ Personalized menu title with your own or company name
    
    ~ Custom on-screen user notes
    
    ~ Optional date and time display and clock chimes every hour
    
    ~ Menu screen blanks after three minutes to prevent screen burn-in
    
    ~ System password with extensive protection flexibility
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1043.TXT

{% raw %}
```
Disk No: 1043
Program Title: SNAP FILER, MASTER MENU version 2.12
PC-SIG version: 1.1

SNAP FILER is a compact, in-memory database program with many of the
features of a spreadsheet built-in for use with jobs too small or
short-term to require a complicated database.  SNAP FILER organizes data
like a table or spreadsheet, with rows and columns displayed on-screen.
The top line displays pull-down menus, which makes this program easy to
operate.  You can keep track of names, addresses, sales, or anything
else that can be kept in a list.  You can define and use dates, times,
names, and dollar amounts for fields, with automatic proofing and
formatting for each.  You can sort, search, and calculate the data in
each file.  SNAP FILER uses formula relationships in fields, with
automatic recalculation after each entry.  You can print reports, either
the current file or a certain block of data.  It also imports and
exports files in DIF format to other software packages, such as
LOTUS123.

MENU MASTER lets any computer user create customized menus to be
"Control Centers" for running application programs and frequently-used
DOS routines.  For new users, it saves a lot of frustration.  For the
more experienced, it saves a lot of time.  Applications can be run at
the touch of a single key instead of typing in commands.  No more
forgetting commands or DOS directory names -- all these are entered one
time only and MENU MASTER remembers the commands for you.  It frees you
from having to remember and type those complicated commands and lets you
concentrate on getting your work done.

Major features include:

  - Simple to learn, easy and fast to use
  - Enter menu settings directly from program, without needing text editor
  - Clear, clean and attractive screen layouts
  - Ability to "chain" multiple menus together
  - Up to 24 menu items with user-defined menu prompts, passwords,
    Directory paths, and command settings
  - Up to 7 command lines per menu item
  - Customize the screen colors and individual menu prompt colors
  - Personalized menu title with your own or company name
  - Customize on-screen user notes
  - Optional date and time display
  - Clock chimes softly on the hour
  - Menu screen blanks after 3 minutes to prevent screen burn-in
  - System password with extensive protection flexibility

The documentation provided is very good, containing many examples and
sample screens.  This program is well suited for users of any caliber --
novice to expert.

Usage:  Database/Menuing System.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00 for SNAP FILER, $30.00 for MENU MASTER.

File Descriptions:

------------  SNAP FILER
SNAP     COM  Main program
SNAP     000  Overlay file
SNAP     MSG  Message file
SNAP     HLP  Help file
SNAP     DOC  Documentation
SAMPLE   DIF  Sample data file
------------  MENU MASTER
MMPRG    EXE  Main program
MENU     BAT  Start up batch file
MMSTR    DOC  Manual

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## MMSTR.DOC

{% raw %}
```

                              M e n u   M a s t e r

                                      2.12

                Menuing System for IBM-PC Computer and Compatibles

                                       by

                                   John Franck
                             1200 Jefferson Davis Rd.
                             Martinsville, Va.  24112

                                  (703) 632-3845

                              CompuServe  70077,3453
                            BBS Support  703-632-2079


         This is an abbreviated version of the Owner's Manual for persons
         evaluating Menu Master for their own use.  Not all of the features
         are documented here.  Registered Users (those who pay the modest
         registration fee of $30) will receive the official Program Disk,
         printed manual, and will be entitled to free upgrades, telephone
         support, information on program "secrets" and other such benefits.

         John Franck                                       February 4, 1987


         INTRODUCTION
         --------------
         I used to spend a great deal of time working with new PC users,
         trying to get them comfortable with MS-DOS, the IBM-PC's operating
         system.  Learning to use word processing, database, or spreadsheet
         software is tough enough for newcomers to PC's without the added
         burden of remembering all those DOS commands.

         Most of the PC's at the office were of the hard disk variety.
         Since the software programs and files were on the hard disk, I
         wrote a Menu Utility program to help people negotiate their way
         around the computer.  In the mornings when they turned on their
         computer, they would automatically see a menu from which they could
         run Lotus 123, copy some disks, dial Dow Jones for their favorite
         stock quotes, do a little Word Processing, etc., etc. - all without
         having to remember or type any commands.  Their response was
         gratifying, to say the least!  The program later evolved into Menu
         Master.

         Menu Master allows any computer user to create customized menus
         that can be a "Control Center" for running application programs and
         frequently used DOS routines.  For new users it saves a lot of
         frustration.  For the more experienced it saves a lot of time.

         Applications can be run at the touch of a single key instead of
         typing in commands.  No more forgetting commands or DOS directory
         names - all these are entered one time only and Menu Master
         remembers the commands for you.  It will free you from the burden
         of remembering and typing those complicated commands and will let
         you concentrate on getting your work done.







         MAJOR FEATURES
         --------------
          - Simple to Learn, Easy and Fast to use
          - Enter Menu Settings directly from program, without the need
               for text editor
          - Clear, clean and attractive screen layouts
          - Ability to "chain" multiple menus together
          - Up to 24 Menu Items with user-defined Menu Prompts,
               Passwords, Directory Paths, and Command Settings
          - Up to 7 Command Lines per Menu Item
          - Customize the Screen Colors and Individual Menu Prompt Colors
          - Personalized Menu Title with your Own or Company name
          - Customize On-Screen User Notes
          - Optional Date and Time Display
          - Clock chimes softly on the hour.
          - Menu Screen Blanks after 3 minutes to prevent Screen Burn-in.
          - System Password with extensive protection flexibility


         GETTING STARTED
         ---------------
         In order for MENU MASTER to work properly, the following 2 files
         must reside in the same sub-directory of your Hard Disk:

         MENU.BAT             - Program Initiation File
         MMPRG.EXE            - MENU MASTER Program

         The program also self-generates a file in the same sub-directory
         called MMSTR.STG which contains all of the Menu Settings that you
         will enter. (If you ever want to delete all of your Settings, you
         can easily do it by deleting the MMSTR.STG file.)

         Once the files MENU.BAT and MMPRG.EXE have been copied onto the
         Hard Disk, you can run Menu Master by simply typing in the word
         "MENU" at the C> prompt.

         The following screen will appear (fig. 1):

                                  (Figure 1)
         ==============================================================
         =                                                            =
         =                                                            =
         =                    M e n u   M a s t e r                   =
         =                                                            =
         =                        Version 2.12                        =
         =                      February 4, 1987                      =
         =    (C) Copyright 1984, 1985, 1986, 1987 by John Franck     =
         =                                                            =
         =          If you find this program useful to you,           =
         =         a payment of $30 per system is requested.          =
         =                                                            =
         =                         John Franck                        =
         =                   1200 Jefferson Davis Rd.                 =
         =                   Martinsville, Va.  24112                 =
         =                                                            =
         =     Please copy this program and share it with others.     =
         =                                                            =
         ==============================================================
                         Press any key to continue ...







         This TITLE SCREEN appears only once per day, so as to not interfere
         with MENU MASTER's ease-of-use.  (There's a secret way to
         permanently bypass this screen for registered users only.)  Just
         press any key to continue...

         The next screen, MAIN MENU (fig. 2), is the one you will normally
         see when using MENU MASTER.  It is from this screen that you select
         your Applications at the touch of a single key.

                                  (Figure 2)
         =============================================================
         =                                                           =
         =  05-16-1985        M e n u   M a s t e r      8:06:10 am  =
         =                                                           =
         =============================================================
         =                                                           =
         =       A -                      G -                        =
         =                                                           =
         =       B -                      H -                        =
         =                                                           =
         =       C -                      I -                        =
         =                                                           =
         =       D -                      J -                        =
         =                                                           =
         =       E -                      K -                        =
         =                                                           =
         =       F -                      L -                        =
         =                                                           =
         =============================================================
         =                                                           =
         =   ESC = DOS       ALT-letter = Modify       F10 = Colors  =
         =                                                           =
         =============================================================
           C:\               * Unregistered Copy *

         About the MAIN MENU:

         The MAIN MENU displays the current Date and also provides a digital
         Clock.  The Clock chimes softly every hour as long as the menu is
         active.

         Up to 24 Menu Selections can be entered into MENU MASTER,
         with their prompts appearing on this screen.  Although only 12
         selections appear in the illustration (fig. 2), 2 additional
         columns of 6 may be added.  (The procedure for adding columns is
         discussed later in the section "Modifying System Settings".)

         Your Menu Selections can be individually Password Protected.  If a
         selection is protected, the user is prompted to enter the password
         before running the selection.

         Whenever you finish running a program, MENU MASTER returns you to
         this screen so you can quickly move on to something else.

         To prevent "Screen Burn-in", the screen will go blank after about 3
         minutes of no activity.  The Time will continue to be displayed and
         updated. To re-display the screen, simply press any key.









         The current Drive and Directory are displayed at the lower left of
         the screen.

         The message "* Unregistered Copy *" will appear at the bottom of
         the screen if you have not yet registered your copy of Menu Master.


         ENTERING MENU SETTINGS
         ----------------------
         To enter, modify or examine menu settings, hold down the "ALT" key
         and press the letter of the item you wish to select.

         For example, let's enter a menu setting for Formatting Floppy
         Disks.  This will allow you to have a permanent menu selection for
         formatting disks at the touch of a single key from MENU MASTER's
         Main Menu.

         In our example, we'll assume the following:

           -  We want "Format a Disk" to appear as Menu Item A on the Main
              Menu
           -  This Menu Item is to be password protected using "ROSEBUD" as
              the password.
           -  The DOS FORMAT Command is located on a sub-directory entitled
              DOS (C:\DOS).
           -  The DOS Format Command, "FORMAT A:", will format a disk
              located in Drive A.

         To enter these settings in Menu Item A, hold down the ALT key
         and press "A".

                    press   ALT-A

         The MODIFY Screen will appear as shown in Fig. 3:

                                  (Figure 3)
         ============================================================
         =                                                          =
         =  Menu Prompt    :  _                                     =
         =  Password       :                                        =
         =  Directory Path :  C:\                                   =
         =  Command Line 1 :                                        =
         =               2 :                                        =
         =               3 :                                        =
         =               4 :                                        =
         =               5 :                                        =
         =               6 :                                        =
         =               7 :                                        =
         =                                                          =
         =  RETURN = Accept       Del = Delete       ESC = Escape   =
         =                                                          =
         ============================================================

         This MODIFY screen is used to enter new or to modify existing
         menu settings.  You also can use it to examine settings which
         have already been entered.  There are 4 fields to enter for
         the "Format a Disk" menu setting example.  Enter them now as
         illustrated in Fig. 4.








                                  (Figure 4)
         ============================================================
         =                                                          =
         =  Menu Prompt    :  Format a Disk                         =
         =  Password       :  ROSEBUD                               =
         =  Directory Path :  C:\DOS                                =
         =  Command Line 1 :  FORMAT A:                             =
         =               2 :                                        =
         =               3 :                                        =
         =               4 :                                        =
         =               5 :                                        =
         =               6 :                                        =
         =               7 :  _                                     =
         =                                                          =
         =  RETURN = Accept       Del = Delete       ESC = Escape   =
         =                                                          =
         ============================================================

         In our example (fig. 4), the Menu Prompt setting is what you will
         see next to the letter "A" on the Main Menu screen.  This can be
         anything you like describing what the selection does.  The maximum
         length of Menu Prompts is 60 characters, but this depends on how
         many columns of menu selections you have.  (We'll discuss how to
         change the number of columns later.)

         Menu Master will automatically fill in the Directory Path setting
         with the current drive and directory.  This field will only need
         changing if your application resides on a drive or sub-directory
         other than the Current Directory (C:\).  In the illustration, the
         FORMAT.COM file is on the subdirectory called C:\DOS, so we added
         "DOS" to this field.  (Refer to your DOS manual if you need
         information on Directory Paths.)

         The Command "FORMAT A:" is the DOS command that will format a disk
         in Drive A.  Commands can be up to 60 characters in length.

         You will notice that we did not enter anything for the 2nd thru
         the 7th Command settings.  Just leave them blank if you don't need
         the extra commands.  Menu Master will run every command that it
         finds in Commands 1-7.  If you use Batch Files for a series of
         commands, using Menu Master's 7 settings can be a much better
         alternative.

         Keep pressing RETURN or TAB to skip through the rest of the command
         settings.  After the 7th Command field, your settings will be saved
         and you will return to the Main Menu screen again.  The menu
         prompt, "Format a Disk", will appear next to Menu Item A on the
         Main Menu as shown in Figure 5.


















                                   (Figure 5)
         =============================================================
         =                                                           =
         =  05-16-1985        M e n u   M a s t e r      8:06:10 am  =
         =                                                           =
         =============================================================
         =                                                           =
         =       A - Format a Disk        G -                        =
         =                                                           =
         =       B -                      H -                        =
         =                                                           =
         =       C -                      I -                        =
         =                                                           =
         =       D -                      J -                        =
         =                                                           =
         =       E -                      K -                        =
         =                                                           =
         =       F -                      L -                        =
         =                                                           =
         =============================================================
         =                                                           =
         =   ESC = DOS       ALT-letter = Modify       F10 = Colors  =
         =                                                           =
         =============================================================

         You can now "Format a Disk" by pressing the letter "A".  Because
         you entered a password setting, you'll be prompted to give the
         password before you're able to run the selection in A.  When
         prompted for the password, enter "ROSEBUD" (the password you gave
         to A) and you will immediately escape from Menu Master and can
         Format the Disk.  Try this example on your computer now or enter
         another setting of your own. You may have to change the Directory
         Path to the proper setting for your particular computer setup,
         depending on what directory contains FORMAT.COM.

         Note:  All passwords in Menu Master are "case sensitive".  This
                means that the user must enter the password EXACTLY.
                Upper/lower case letters and spaces ARE significant.


         CHANGING OR DELETING MENU SETTINGS
         ----------------------------------
         To change or delete settings, go from the Main Menu to the Modify
         screen by pressing ALT and the letter you wish to modify.  The
         existing settings will be shown. You can edit settings by using the
         Backspace or Delete keys and then re-typing what you want.  Press
         RETURN or TAB to skip down to the next fields.  After the 7th
         field, your changes will be saved and you'll return to the Main
         Menu again. To leave the Modify Screen without saving any changes,
         simply press the ESC key at any time.


         CHANGING THE DISPLAY COLORS
         ---------------------------
         By pressing F10 from the Main Menu, you'll activate the Color
         Experimentation Window.  Using this feature, you can try out
         various color combinations to suit your own tastes.  The window
         displays a representation of the current Foreground, Background,
         and Menu Border colors.  By pressing the Left or Right cursor keys,
         you can see up to 16 different Foreground (text) colors.  Up or






         Down cursor keys will display the 8 possible Background colors.
         Page Up or Page Down will display the 16 Menu Border colors.  When
         you find the combination you like, just press RETURN to save the
         color settings and return to the Main Menu.  If you don't want to
         save the color settings, press ESC and you'll see the Main Menu
         with the old colors.

         Menu Prompts and the Menu Title can be given individual colors of
         their own by using the Color Over-ride feature.  To do this, go to
         the Modify Screen of the menu item whose prompt you wish to Color
         by pressing ALT-Letter from the Main Menu.  Then, simply enter the
         2-digit color number you want, enclosed by brackets [], immediately
         after the Menu Prompt setting.

         For example, in the "Format a Disk" setting described earlier, you
         would enter the Menu Prompt as follows to color the prompt Blue:

                Menu Prompt   :  Format a Disk[01]

         You can use the Color Experimentation Window as a reference for
         color numbers.  The numbers are displayed there in addition to the
         actual colors.  For further reference, a list of valid color
         numbers follows:

         00  Black     04  Red         08  Gray         12  Lt Red
         01  Blue      05  Magenta     09  Lt Blue      13  Lt Magenta
         02  Green     06  Brown       10  Lt Green     14  Yellow
         03  Cyan      07  White       11  Lt Cyan      15  Super White

         Notes: The color number entered in brackets, [], MUST be a 2-digit
                number.  Also, if you enter a number that is the same color
                as the screen Background, the Prompt will become invisible.
                By adding 16 to the color number, you can make the prompt
                blink.  For instance, [17] will display a blinking Blue
                prompt.


         MODIFYING SYSTEM SETTINGS
         -------------------------
         There are a variety of System Settings that can be changed to
         further personalize and protect your Menu Master setup.  To display
         the SYSTEM SETTINGS screen, press ALT-Z.

                Press   ALT-Z

         You'll be asked to enter the System Password.  Menu Master has a
         default System Password of "MMSTR".  Enter the password "MMSTR"
         (upper case) when prompted.  You'll see the following display
         (fig. 6):

















                                  (Figure 6)
         ==============================================================
         =  SYSTEM SETTINGS:                                          =
         =                                                            =
         =                                                            =
         =  Menu Title                   : M e n u   M a s t e r_     =
         =  System Password              : MMSTR                      =
         =  Registration Code            :                            =
         =                                                            =
         =  PROTECT - ESC to DOS         : N                          =
         =            Menu Settings      : N                          =
         =            Screen Colors      : N                          =
         =            On-Screen Notes    : Y                          =
         =                                                            =
         =  OPTIONS - Blank the Screen   : N                          =
         =            Hide Date & Time   : N                          =
         =                                                            =
         =  # of Selection Columns (1-4) : 2                          =
         =                                                            =
         =                                                            =
         =  RETURN = Accept   DEL = Delete   ESC = No Change          =
         ==============================================================

         Here's a description of all the System Setting Options (from
         fig. 6):

         - The Menu Title can be changed to anything you like, up to 58
           characters.  Use the Backspace or Delete Keys to edit the title
           and press RETURN or TAB to skip down to the next field.

         - The default System Password is MMSTR (case sensitive).  This
           password can (and should) be changed to anything you like up to
           15 characters. BE SURE TO WRITE DOWN YOUR SYSTEM PASSWORD and
           hide it away somewhere.  You won't be able to modify System
           Settings without it.

         - The Registration Code is a special code you will receive when you
           register your copy of Menu Master.  Entering the Registration
           Code will disable the annoying Title Screen that keeps asking for
           the modest registration fee.  It will also disable the
           * Unregistered Copy * message that continually haunts the bottom
           of your menus.

         - You can password protect 4 different activities with the System
           Password, in addition to protecting access to the System Settings
           screen.  By placing a "Y" next to any of the activities listed,
           protection is enabled and the user will be asked for the System
           Password when he tries to do the activity.

           "ESC to DOS" protection is a way to prevent unauthorized users
           from having access to DOS.

           "Menu Settings" protection will keep unauthorized users from
           seeing or altering your Menu Settings.

           "Screen Colors" protection will keep unauthorized users from
           tampering with the Main Menu's screen colors.









           "On-Screen Notes" is a facility that lets you write up to 3 lines
           of notes in the bottom rectangle of the Main Menu screen.  This
           feature can be useful if you have special instructions that need
           to be seen by your users.  The default for this setting is "Y"
           (enabled).

         - Two other Options can be set at the System Settings screen:

           After several minutes of inactivity, Menu Master will blank its
           screen to prevent screen burn-in.  Normally, the blank screen
           will continue displaying "Menu Master 2.12" and the Time.
           Placing a "Y" next to the "Blank the Screen" option will
           COMPLETELY blank the screen, and "Menu Master" and Time will not
           be displayed.  The default setting is "N".

           "Hide Date & Time" will remove the date and time display from the
           Main Menu Screen.  The default setting is "N".

         - " # of Selection Columns (1-4)" allows you to change the number
           of available menu selections.  Each column contains 6 selections,
           so you can increase the number in multiples of 6. The default is
           2 columns, or 12 selections.  Menu Master ALWAYS remembers the
           settings for 24 selections, regardless of whether or not they are
           available for use.  Menu Prompts can be up to 60 characters, but
           if more than 1 column of selections is displayed, not all of the
           60 characters will be visible.  The following table lists the
           Menu Prompt lengths that will be displayed:

                                 Active         Characters
                # Columns      Selections       Displayed

                    1               6              60
                    2              12              30
                    3              18              18
                    4              24              12

         Note:  You can "hide" menu selections by reducing the number of
                columns.  If the selections are not visible on the Main
                Menu, they will not operate.  However, the settings for
                hidden selections are still saved.  Increasing the number of
                active menu selection columns will re-activate the hidden
                selections.

         After the number of columns is selected, the System Settings are
         saved and you'll return to the Main Menu.


         ON-SCREEN NOTES
         ---------------

         As previously mentioned, On-Screen Notes is a facility that lets
         you write up to 3 lines of notes in the bottom rectangle of the
         Main Menu screen.  This feature can be useful if you have special
         instructions that need to be seen by users.

         To activate On-Screen Notes, press ALT-Y.

                Press   ALT-Y








         After entering the System Password (if protected), you'll see a
         cursor appear in the Main Menu's lower rectangle.  Type up to 75
         characters per line, using the Backspace and Delete keys to edit if
         needed (similar to entering Menu Settings).

         You will notice the 2nd note line already contains the default Main
         Menu instructions, "ESC=Return to DOS    ALT-Letter=Modify...etc."
         This line can also be modified.  If you delete the 2nd line and try
         to leave it blank, the default will re-appear.  To keep it from
         re-appearing, enter at least a blank space character (space bar) on
         the line.


         MULTIPLE MENUS
         --------------
         What if several people use the same PC, but each one wants his own
         menu?  Or what if you want to set up a sub-menu for all of your
         utility programs?  No problem!  You can link Multiple Menus with
         Menu Master.  The procedure for doing this is documented in the
         "official" Owner's Manual you will receive after registering your
         copy of Menu Master.


         BATCH FILES
         -----------
         Currently, Menu Master supports a maximum of 7 commands for a
         single Menu Item (in addition to the Directory Path setting).
         Having this many available commands per setting should normally
         keep you from having to create any Batch Files.  If you have used
         batch files much in the past, you'll really appreciate this
         feature!

         For routines longer than 7 commands, a Batch File can be created
         using DOS's EDLIN utility or a Text Processor.  See your DOS manual
         for more instructions on Batch Files.  Use Menu Master to execute
         your Batch File by placing the Batch Filename (without the .BAT
         suffix) in your command setting.

         Note:  Batch Files sometimes prevent you from returning to Menu
                Master after the file is executed. Be sure to include the
                command "MENU" as the last command in your Batch File so
                that it will return you to Menu Master.

         You can run Menu Master automatically whenever you turn on your
         computer by including the command "MENU" as the last item in your
         AUTOEXEC.BAT file.  Your DOS Manual has a section which covers the
         AUTOEXEC file.

         Menu Master's Program Intitiation File, MENU.BAT, is a very simple
         batch file that initiates the program's batch sequence.  If ever
         misplaced or altered by mistake, the MENU.BAT file can be re-
         created as follows:

                ECHO OFF
                CLS
                MMPRG
                RUN









         INFORMATION ON DISTRIBUTION AND UPGRADES
         ----------------------------------------
         Menu Master is distributed under the consideration that people
         enjoy sharing software with each other. It takes some experimenting
         with software to see if it fits your own work environment and it's
         really not fair to have to pay for something before you know it
         works for you.

         You are encouraged to give a copy of Menu Master and its
         documentation to anyone you like.  You must tell the person to whom
         you give the copy that this is a User-Supported program and urge
         them to promote the spirit of what that means.

         For those of you evaluating Menu Master for the first time, please
         feel free to call me if you have any questions or suggestions.
         Evaluate the program at your own pace.  If you decide it doesn't
         suit you needs, erase the disk, or better still, give it away to
         someone else.

         If you find Menu Master useful and intend to keep it for your own
         use, you must register your copy within 45 days after receiving it.
         To register, fill out the Registration Form and send it along with
         a $30 check, payable to John Franck.

         Those who register will receive a Program Disk containing the
         latest version of Menu Master and a nicely printed manual.  They
         also will be notified by mail as newer versions are released and
         can obtain a free upgrade by sending in a blank disk - quite a deal
         for just 30 bucks !

         Corporations, schools, or any other groups are required to register
         copies of the program for each computer system using Menu Master.
         Discount rates are available for registering multiple copies.
         Please be sure to provide a name of an individual who is your
         corporate or group contact for support and upgrade purposes.

         For those of you who participate in the User-Supported concept and
         send in the few bucks to authors who work so hard for you - THANK
         YOU!  The rest of you who continue using User-Supported programs
         without "bucking up" (and you know who you are), well... shame on
         you!

         I plan to continue upgrading and improving Menu Master, especially
         since so many of you have thrilled me with your honesty by sending
         in the modest registration fee.  I've received good ideas from many
         of you that I plan to include in later versions.

         In summary, Menu Master is just a plain and simple good deal!  The
         User-Supported concept lets you decide for yourself whether the
         program is suitable for your use.  It also allows me to keep
         distribution and advertising costs to a minimum and share these
         savings with you in the form of a very low price.  For only $30,
         you get an original Program Disk, printed manual, and most
         importantly - peace of mind !  In addition, you can get the latest
         developments or upgrades sent to you FREE of charge.

         Thanks,

         John Franck







         INVOICE
         -------
         For those of you who need an invoice for Tax or Accounting
         purposes, the following Invoice can be used.  It is not necessary
         to return this invoice with your registration form.  You may retain
         this copy for your own records.

         For your information, applicable Federal and State taxes are paid
         on any proceeds from Menu Master registration fees.
   --------------------------------------------------------------------------

                                      INVOICE


                              M e n u   M a s t e r  2.12

                                 Custom Menu Software

                               (C) 1987 by John Franck

         Date: ____________                                   INVOICE # 45231

         Remit to:       John Franck
                         1200 Jefferson Davis Rd.
                         Martinsville, Va.  24112
                                                       Unit      Extended
         Item                              Qty         Price     Price
         ----------------------------      -----       -----     --------

         Menu Master Software
         Version 2.12 Registration Fee     _____       30.00     ________


         Add 4.5% State Sales Tax
         Virginia Residents Only                                 ________


         Total Amount                                            ________


         Make Check payable to: John Franck


-----------------------------------------------------------------------------






















                                  REGISTRATION FORM
                                  -----------------

                              M e n u   M a s t e r  2.12
                                 Custom Menu Software
                               (C) 1987 by John Franck

         I'm honest!  I have looked Menu Master over and have decided to
         keep it as part of my PC software library.  Please register my
         copy.  My check for $30 per system using Menu Master is enclosed.
         I understand that registration entitles me to the latest Program
         Disk and documentation, free upgrades of Menu Master, telephone
         support, program "secrets", and other such benefits.

         Name _________________________________________________________

         Street or PO Box _____________________________________________

         City ____________________________ State ________ Zip _________

         Version Number _________

         Where did you obtain your copy of Menu Master ?
         ______________________________________________________________
         ______________________________________________________________
         ______________________________________________________________

         You should have 3 files on your disk:  MMSTR.DOC, MENU.BAT, and
         MMPRG.EXE.  Are they all there ? ___________

         Any special needs, comments or ideas for improvements ?
         ______________________________________________________________
         ______________________________________________________________
         ______________________________________________________________
         ______________________________________________________________
         ______________________________________________________________

         Name of Contact Person (for Corporations, schools, etc.):
         ______________________________________________________________
         ______________________________________________________________

         Send this Registration Form with payment to:

         John Franck
         1200 Jefferson Davis Rd.
         Martinsville, Va.  24112

```
{% endraw %}

## SNAP.DOC

{% raw %}
```






           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
                                                                Snap Filer
                                                              User's Guide
                                                               Version 1.0
           
           
           
           
                                             Copyright 1986 by Marty Franz
                                                       All Rights Reserved
           
           
           
           
                                                                Marty Franz
                                                          525 W. Walnut St.
                                                        Kalamazoo, MI 49007
           






          Snap Filer User's Guide                                    Page 2


           
          INTRODUCTION
           
          The Snap Filer is a database program with many of the features of
          a spreadsheet built-in. With The Snap Filer you can keep track of
          names, addresses, sales, or anything else that can be kept in a
          list. You can sort, search, and calculate using this data. You
          can also place commands in macros to automate tedious data entry.
           
          Using the Snap Filer is easy, but you should take the time to
          read either this file or the .HLP file that came on the diskette
          or archive.
           
           
          REGISTERING
           
          This program is distributed as user-supported software. If you
          find the Snap Filer to be a useful program, then your donation of
          $25 will be gratefully accepted. In return you will receive
          notification of updates, access to the Turbo Pascal source code,
          and the gratitude of the author. Please send your contributions
          to:
           
                   Marty Franz
                   525 W. Walnut St.
                   Kalamazoo, MI 49007
           
          You may freely copy and share this program, provided you include
          the documentation files SNAP.DOC (containing this message) and
          SNAP.HLP on your distribution media. Distribution via diskette
          and bulletin board is encouraged, as are comments and
          suggestions.
           
           
          REQUIREMENTS
           
          To use the Snap Filer, you need an IBM PC, XT, PCjr, AT, or close
          compatible with at least 192KB of memory, one diskette drive, and
          a monochrome or color display adapter and monitor. The more
          memory you have, the more information you'll be able to store in
          your files. You need PC DOS 2.1 or higher as your operating
          system.
           






          Snap Filer User's Guide                                    Page 3

           
          FILE CONTENTS
           
          The diskette or archive that you have received should have the
          following files in it:
           
                  SNAP.COM        Snap Filer main program
                  SNAP.000        Snap Filer overlay module
                  SNAP.HLP        startup help file
                  SNAP.MSG        error message file
                  SNAP.DOC        main documentation file
           
           
          INSTALLATION
           
          To install the Snap Filer, follow these steps:
           
          1.   Make a copy of the distribution diskette for backup
               purposes. Consult your DOS manual for more information about
               this. You can then use this diskette as-is if you have a
               floppy diskette-based system. 
           
          2.   Copy the contents of the distribution diskette to a suitable 
               directory on a hard disk. You must copy AT LEAST the files  
               SNAP.COM and SNAP.000. The message and help files are     
               optional but highly recommended unless you are drastically  
               short on disk space.
           
          3.   Print a copy of the manual by copying the file SNAP.DOC
               (this document) to the printer with the following command: 
           
               A>copy snap.doc prn:
           
           
          BASICS
           
          The Snap Filer is a compact, fast in-memory file manager. You can
          use it to keep track of lists, tables, and other jobs too small
          or short-term to require a "real" database.
           
          The Snap Filer organizes data like a table or spreadsheet, with
          rows and columns displayed onscreen. The rows are called
          "records", and you can have up to 4096 of them in your file. The
          columns of the file are called "fields", and you can define up to
          255 of them. The Snap Filer lets you:

             - add and delete fields in records, and records in the file 
           
             - define and use dates, times, names, and dollar amounts for  
               fields, with automatic proofing and formatting
           
             - quickly sort records into ascending and descending order 





          Snap Filer User's Guide                                    Page 4

           
             - select sets records and fields using complex search criteria 
               (wildcard pattern matching, and, or, interval)
           
             - change every occurrence of one type of data to another
           
             - import and export files in DIF format to other spreadsheets
               and graphing programs
           
             - print reports, including automatically-calculated field
               totals
           
             - define formula relationships in fields, with automatic     
               recalculation after entry
           
           
          SCREEN LAYOUT
           
          The Snap Filer's screen is divided into several areas:
           
          The status line is on line 1 and tells the name of the file you
          are working on, the record number and field you are currently at,
          and the amount of memory remaining to hold your data.
           
          The pulldown menus are displayed below the status line.  They are
          activated by pressing /.  You can then either select an option
          with the arrow keys or the first capital letter in the option's
          name; or, alternately, you can press Esc to resume editing your
          file. The pulldown menus allow you to design, edit, select, and
          analyze the data in your file.
           
          The work area is the remainder of the screen. This shows you up
          to 20 records of the file, with up to 80 characters of
          information visible in each record. The display can be "scrolled"
          up and down and left to right by using the arrow and movement
          keys (see below).
           
          When you get an error message, the Snap Filer will beep and
          display in a separate window.  Press Esc to cancel the message
          and resume editing.  If you don't have the message file SNAP.MSG
          available, you won't get the text of the message displayed.  






          Snap Filer User's Guide                                    Page 5

           
          RECORDS AND FIELDS
           
          A record in the Snap Filer is a collection of up to 255 fields of
          information. You can have as many records as will fit in memory,
          up to 4096. Each field in the record has a definition, which
          determines the type of data it can hold. A definition can be any
          one of the following types:
           
                  Info            general information
                  Name            a person's name
                  Money           a dollar amount
                  Amount          a numeric field with a decimal
                  Quantity        an integer (no decimal) amount
                  Phone           a phone number
                  Date            a calendar date
                  Time            a time in military format
           
          Only the Info type is not formatted; all other numeric fields
          (types Money, Amount, and Quantity) will be right-justified and
          padded with leading blanks to the appropriate width. 
           
          Name fields are switched to last name first for correct sorting
          and searching.
           
          Phone numbers must be entered as a string of digits. If there are
          seven digits entered, a local phone number is generated; if ten
          digits, a long-distance number with the first three digits being
          an area code.
           
          Date fields are entered as six digits and converted to MM/DD/YY
          format. Time fields are entered as four digits and converted to
          HH:MM format. The default for a date field is today's date, and
          for a time field it is the current time. You must accurately set
          your PC's clock for these to be correct.
           
          In date, time, and phone number fields, if punctuation is present
          the field is proofed to see if it matches the format selected for
          the field. 
           
           
          STARTING THE SNAP FILER
           
          To start the Snap Filer from DOS, enter:
           
                  A>snap
           
          If you already have a file to use, you can enter
           
                  A>snap <filename.dat>






          Snap Filer User's Guide                                    Page 6

          where <filename.dat> is the actual name (directory, path,
          filename) of the file you want to work with.
           
          If you have the Snap Filer in another directory, you must use the
          switch -o to tell the filer which directory to use for the
          message and help files:
           
                  C>snap <filename.dat> -o<dirname>
           
          Once the Snap Filer has been started, you can then begin to edit
          and analyze your data with it.
           
           
          MOVEMENT
           
          You can move around the work area with the PC's arrow keys and
          the WordStar movement commands:
           
                 ^D      move one field right
                 ^S      move one field left
                 ^E      move one record up
                 ^X      move one record down
                 ^R      move one page up (also PgUp)
                 ^C      move one page down (also PgDn)
                 ^Q^R    move to top of file
                 ^Q^C    move to bottom of file
                 ^W      move to first field in record (also Home)
                 ^U      move to last field in record (also End)
           
          These keys also work when you are editing the contents of a
          field, with the exception of top and bottom and file. 
           
           
          EDITING INFORMATION
           
          WordStar's editing keys also work in the Snap Filer.  These
          include the following:
           
                 ^V      insert a record (also Ins)
                 ^Y      delete a record (also Del)
                 ^T      delete the current field
                 Esc     edit the current field as a line
           
          When you edit a field as a line, you can use the editing and
          movement keys to position the cursor. The Del key will delete a
          single character; so will Backspace. The Ins key toggles
          character insertion and overwriting: when you see Insert
          displayed in the status area, what you enter will insert into the
          data in front of the cursor; otherwise, it overtypes what's
          already there. ^T will delete successive words, and ^Y will
          delete the entire field. Press Return to "take" the new field, or
          Esc to put the old one back.





          Snap Filer User's Guide                                    Page 7

           
          While you are editing, the block commands of WordStar are also
          available, including:
           
                 ^K^B    begin block mark
                 ^K^K    end block mark
                 ^K^C    copy block to cursor (acts as a fill command)
                 ^K^V    move block to cursor (entire records only)
                 ^K^Y    delete block
                 ^K^H    unmark block
           
          The block can grow larger with successive marks, but never
          smaller, or an error message results. 
           
          The copy block command works a little differently than
          WordStar's. The field under the cursor is considered to be the
          source of the copy if a group of fields are marked. This lets you
          fill fields from a single field. If records are marked, the copy
          command places the records marked after the record with the
          cursor.
           
           
          USING THE PULLDOWN MENUS
           
          Pulldown menus are activated by pressing the / key. This
          highlights the pulldown menu bar below the status area on the
          screen. Press Esc to cancel and return the work area. You can use
          the arrow keys and the first capital letter in the option name to
          move between the various displayed options.  The various options
          are described in more detail below: 
           
           
          THE FILE MENU
            
          Use the File menu to load and save files, begin a new file,
          display a directory of files, and import and export files in DIF
          format.

          Snap Files in DIF format can be exchanged with other software
          packages, such as Lotus 123. You will lose some field definition
          information, however, since the DIF format does not specify some
          of the information the Snap Filer needs to know about fields.
           
           
          THE EDIT MENU
           
          The Edit menu contains the block commands mentioned earlier, plus
          commands to locate and change text.  Both the Locate and Global
          change options allow you to enter a search pattern instead of
          just text. See the section on the Select option for more
          information on patterns. 
           





          Snap Filer User's Guide                                    Page 8

           
          THE GOTO MENU
           
          The Goto menu contains commands to goto a specific record or
          column in the file, plus change the file to the current format.
          You must "goto" a new format whenever you change the definition
          of a field, such as changing an Info field into a Date field. The
          Goto/New format option will also recalculate any formula fields.
           
           
          THE ANALYZE MENU
           
          The Analyze menu contains commands to sort, calculate, include,
          and omit records marked with the Select menu.

          The Include and Omit options work with records you have selected
          using the Select menu options. Include will display only the
          selected records; Omit will display all BUT the selected records.
          You are then free to further search, edit, or inspect these
          records. When you want to return to the original database, use
          the Undo option.

          WARNING: If you add or remove fields, or delete, copy, or move
          blocks of records, the hidden records (included or omitted) will
          be permanently purged from the database.  When in doubt, save a
          copy of your database to another file.

          The sort Ascending and sort Descending options will sort a single
          field (or block if one is marked) into ascending or descending
          order. Remember, names must in be last name, first order and
          dates must be in YY/MM/DD order to sort correctly. You can form
          compound sort keys by defining temporary fields and using the
          Split and Join options to copy data there, then sorting the data,
          then removing the field when you are done. 
           
           
          THE SELECT MENU
           
          Use the Select menu to select a group of records in the database
          based on various criteria.  Choose the letter next to the type of
          search that you want.  Every search but the text search is done
          using standard ASCII sequences, so numbers and letters will sort
          correctly.






          Snap Filer User's Guide                                    Page 9

           
          The Snap Filer also recognizes more than just text to search or--
          you can specify a "regular expression", including the  following
          special characters:
           
               %    is used to indicate the start of the field
               $    is the end of the field
               ?    is any character; a wildcard
               [ ]  encloses a set of characters, any one of which can
                    match
               [~ ] encloses a set of characters, all of which must NOT be
                    present.
               \    is an escape character, used for entering any of the
                    characters shown above literally.
               &    when changing text, inserts the matching portion of the
                    string that was found.
           
          For example, the pattern %[aeiouy] will match any field that
          begins with a vowel. When specifying a set of characters, you can
          also use a - to indicate a range: [A-Z] matches any uppercase
          letter, for example.
           
           
          THE PRINT MENU
           
          The Print menu controls printing of reports. The Begin option
          will print the current file or block on the printer. You can
          optionally select a title, include a date/time/page number
          heading, and set the page length and width using other options.
          Pressing ^U (Control-U) will cancel printing. You can set the
          width of a field with the Format option. Using a width of zero
          for a field will cause it to not be printed on the report.
            
          You can include automatic totals in the report by choosing the
          Automatic totals item from the Options menu. This will
          automatically compute the total of any Amount or Money fields and
          print them at the bottom of the report. 
           
           
          THE DESIGN MENU
           
          The Design menu lets you add, remove, swap, or change the various
          field definitions in the database. You can also split and join
          fields to make compound sort "keys". 
           
          You can also use the Design menu to associate a formula with a
          field. Select the Design/Formula option and enter your formula
          for the field. The formula will use the values of the fields in
          the same record as the field you are defining.
           






          Snap Filer User's Guide                                   Page 10

           
          THE OPTIONS MENU
           
          Use this menu to change the various global options in the
          database, including search case, confirmation of commands, and
          automatic recalculation of formula fields.
           
          Search case determines whether upper and lower case characters
          match.  For example, treating upper and lower case characters the
          same, the string "cat" matches "CAT" or "Cat".  With this option
          set to "no" (the default value), "cat" will only match "cat".
           
          Automatic recalculation of fields is done whenever a Money,
          Amount, or Quantity field is changed.  With large databases, this
          can be annoying during data entry.  Turning this option off
          (answering No) will cause recalculation of fields to occur only
          if you select the Goto/New format option from the menu. 
           
           
          FORMULAS
           
          You can define a formula with any field, or enter a formula at
          any time for a single item. The standard numeric operations
          (+,-,*,/) are defined, as well as the functions:  

               RecNo          returns the current record number
               FieldNo        returns the current field number (1-255)
               Count(fieldno) counts the items in a field
               Sum(fieldno)   sums the items in a field
               Min(fieldno)   returns the smallest item in a field
               Max(fieldno)   returns the largest item in a field
               Avg(fieldno)   returns the average of the items in a field
           
          Along with the functions shown above, you can also use the names
          of the fields in your file in a formula.  For example, if you
          have defined fields called Cost, Quantity, and Total, you could
          then define a formula in the Total field such as 
           
                  Cost * Quantity
           
          While the recalculation option is on, any changes to any of the
          amount, quantity, or money fields (including but not limited to
          Cost, Quantity, or Total) in any record will cause recalculation
          to occur.  You can turn off this option from the Options menu.
           
          Use the Design/Formula option to assign a formula to a field.
          When you use the Calculate option, the current field will hold
          the result if no block is marked. If a block is marked, all the
          fields marked will hold the result. The Go to/New format option
          will recalculate the values of all the formulas defined in a
          file.
           





          Snap Filer User's Guide                                   Page 11

          The "fieldno" argument to builtin functions can be kept in
          another field, then selected with that field's name. For example,
          you can use the expression:
           
                  Sum(Period)
           
          where Period is a numeric field that contains the field number to
          compute the totals for. "Period" should contain a number between
          1 and the total number of fields in the file. If it doesn't, the
          value held in Period will be rounded up or down as needed.
           
          WARNING: Avoid field names that match the names of the builtin
          functions listed above. This will cause unexpected results when
          you perform calculations, since the field names have precedence
          over the function names.
           
           
          MACROS
           
          You may enter any combination of keystrokes into a field and
          execute them by pressing ^P. To enter control characters, place a
          ^ in front of them. ^[ is used for the character Esc. You might
          want to define a Macro field (column) in your file for this. You
          can avoid printing it by setting the field's display format to
          zero (0). 
           
          Often when using macros you might want to turn off the
          confirmation of potentially destructive commands like
          Design/Remove and File/Save. You can do this by first selecting
          the Confirm commands option from the Options menu and answering
          No to it. 

          You can write macros to go to other records and fields and
          continue execution there by placing ^P in the macro.
           
          Pressing control-A (^A) aborts execution of the macro and returns
          control to the keyboard.
           






          Snap Filer User's Guide                                   Page 12

           
          QUICK REFERENCE
           
          Here's a list of the control keys used in the Snap Filer:
           
          ^A      Abort macro execution
          ^B      Recalculate entire database
          ^C      Move ahead one page (20 records)
          ^D      move one field right
          ^E      move one record up
          ^K^B    begin block mark
          ^K^K    end block mark
          ^K^C    copy block to cursor (acts as a fill command)
          ^K^V    move block to cursor (entire records only)
          ^K^Y    delete block
          ^K^H    unmark block
          ^Q^R    move to top of file
          ^Q^C    move to bottom of file
          ^R      move one page up (also PgUp)
          ^S      move one field left
          ^T      delete the current field
          ^U      move to last field in record (also End)
                  abort printing if in progress
          ^V      insert a record (also Ins)
          ^W      move to first field in record (also Home)
          ^X      move one record down
          ^Y      delete a record (also Del)
          Esc     edit the current field as a line
           






          Snap Filer User's Guide                                   Page 13

           
          ERROR MESSAGES
           
          Here's a list of the error messages contained in the file
          SNAP.MSG.  If you haven't included the SNAP.MSG file in your
          directory, you can use the error message number to look up the
          message's meaning:
           
          001 Field width must be between 1 and 64
          002 No room for a new field
          003 Cannot remove last field
          004 Unknown field name
          005 Cannot swap field with itself
          006 Date must have format MMDDYY or MM/DD/YY
          007 Time must have format HHMM or HH:MM
          008 Phone number must have format DDD-DDDD or (DDD) DDD-DDDD
          009 Invalid dollar amount
          010 Invalid amount
          011 Decimal field too large
          012 Marked block already exists
          013 Record number out of range
          014 Field number out of range
          015 No block marked
          016 Cannot copy/move block to itself
          017 Only records can be moved
          018 Bad search pattern
          019 Pattern not found
          020 Only records can be included/omitted
          021 No records have been included/omitted
          022 Error reading file
          023 Error creating or writing file
          024 Error in formula
          025 Only entire records can be printed as a block
          026 Page width must be between 1 and 255 columns
          027 Page length must be between 10 and 255 lines
          028 Printing width must be between 0 and 64
          029 Report canceled
          030 No files found
          031 Directory not found
          032 Filespec in error
          033 Only records can be joined
          034 Only records can be split
          035 Invalid column to split at
          999 Unknown error
           
           

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1043

     Volume in drive A has no label
     Directory of A:\

    FILE1043 TXT      3168   5-23-89   9:05a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   3-24-89  11:31a
    MENU     BAT        27   6-23-88   8:18a
    MMPRG    EXE     59532   2-11-87   7:26a
    MMSTR    DOC     38124   2-11-87   7:33a
    SAMPLE   DIF       453   5-30-98  10:29a
    SNAP     000     30208   4-24-87  10:17a
    SNAP     COM     53838   4-24-87  10:17a
    SNAP     DOC     27959   4-24-87  10:02a
    SNAP     HLP      9893   4-24-87   8:22a
    SNAP     MSG      1218   1-06-87   2:00p
           12 file(s)     225460 bytes
                           89088 bytes free
