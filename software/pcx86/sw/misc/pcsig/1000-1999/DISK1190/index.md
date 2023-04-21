---
layout: page
title: "PC-SIG Diskette Library (Disk #1190)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1190/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1190"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WYNDSHELL"

    WYNDSHELL is a friendly, complete disk manager for users who fear the
    DOS prompt world. In addition to superior disk management, this
    menu-driven program can call programs or user-created macro commands
    (in lieu of batch files) with one keystroke, or mouse click. Never
    need to use the standard DOS prompt again.
    
    The WYND-DOS section of the WYNDSHELL program graphically displays disk
    and directory information. Using pull-down menus you can execute all
    DOS file and directory commands. But WYND-DOS doesn't stop here. There
    are commands to move files, re-sort the directory listing, print disk
    info, and more. A superior feature is the ability to "tag" multiple
    files for a file operation such as copy or delete, saving many repeated
    steps. All of these features can be run with minimal keyboard strokes,
    or even more easily with a mouse.
    
    The WYNDSHELL menu can be customized to directly call selected
    programs or execute a series of commands. A two-level menu is
    supported, letting you group programs by application. If you desire,
    WYNDSHELL pauses and prompts for parameters that the program may
    require. This is a feature many similar menu systems have left out.
    
    All of WYNDSHELL's commands and prompts are straight forward and easy
    to use. There is on-line help available throughout the program.
    
    WYNDSHELL adds the ability to include passwords for any menu item, the
    ability to select screen colors, and includes a screen-blanking routine
    when at the main menu.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1190.TXT

{% raw %}
```
Disk No: 1190                                                           
Disk Title: Wyndshell                                                   
PC-SIG Version: S2.11                                                   
                                                                        
Program Title: Wyndshell                                                
Author Version: 2.0                                                     
Author Registration: $30.00.                                            
Special Requirements: 320K RAM and DOS 3.0 or higher.                   
                                                                        
WYNDSHELL is a friendly and complete disk manager for users who fear the
DOS prompt world.  In addition to superior disk management, this        
menu-driven program can call programs or user-created macro commands (in
lieu of batch files) with one keystroke, or mouse click, superseding the
need to ever use the standard DOS prompt.                               
                                                                        
The WYND-DOS section of the WYNDSHELL program graphically displays disk 
and directory information.  Using pull-down menus you can execute all   
DOS file (COPY, DELETE, etc.) and directory (CD, MD, etc.) commands.    
But WYND-DOS doesn't stop here: there are commands to move files,       
re-sort the directory listing, print disk info, and more.  A superior   
feature is the ability to ``tag'' multiple files for a file operation   
such as copy or delete, saving many repeated steps.  All of these       
features can be run with minimal keyboard strokes, or even more easily  
with a mouse.                                                           
                                                                        
The WYNDSHELL menu can be customized to directly call selected programs 
or execute a series of commands.  A two-level menu is supported, letting
you group programs by application.  If you desire, WYNDSHELL pauses and 
prompts for parameters that the program may require.  This is a feature 
many similar menu systems have left out.                                
                                                                        
All of WYNDSHELL's commands and prompts are straight forward and easy to
use, and there is on-line help throughout the program.                  
                                                                        
WYNDSHELL adds the ability to include passwords for any menu item,      
the ability to select screen colors, and includes a screen-blanking     
routine when at the main menu.                                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## WS.DOC

{% raw %}
```









                               __    __|   ___  |__    __   |  |
               |  |  |  |  |  |  |  |  |  |__   |  |  |__|  |  |
               |__|__|  |__|  |  |  |__|  ___|  |  |  |___  |  |
               ____________|  __________________________________





                               Basic Instructions







                           Written by Thomas J. Mosbo







                              Copyright  (C)  1989

                                    WYNDWARE
                          One Parker Place,  Suite 308
                              Janesville, WI 53545
                                 1-800-475-1628


                                                                            2


   I. INTRODUCTION

       WYNDSHELL is a menu program useful for organizing your hard disk.  It
       is used to create Menu Options to run all the programs contained on
       your computer.  Any number of Menus and Submenus may be set up, each
       of which is capable of containing up to 26 Options or Submenus of its
       own.  Each Option calls a specific software application on your hard
       disk, according to how you choose to define your Menus.  And since
       WYNDSHELL is not memory-resident, it surrenders all of your computer's
       memory to each application you choose.

       Built into WYNDSHELL is another program: WYND-DOS.  This is a utility
       program which allows you to perform functions such as formatting
       disks, copying and deleting files, and creating subdirectories - all
       from a friendly environment - without having to type commands at a DOS
       prompt.

       WYNDSHELL requires a computer with at least 256K memory, operating
       with PC or MS DOS 3.0 or greater.  And while using WYNDSHELL without a
       hard disk would be meaningless, WYND-DOS can also be very useful on a
       floppy-based system.  Additionally, if you have a mouse connected,
       WYNDSHELL will detect it, and a full mouse interface will be available
       to you.

       WYNDSHELL is user-supported software.  You are encouraged to use,
       copy, and distribute it as freely as you wish.  But if you do find it
       useful, we ask that you please send a registration fee of $45.00 to
       WYNDWARE, One Parker Place, Suite 308, Janesville, WI 53545.  When
       you send in your fee, you will receive the latest version of WYNDSHELL
       and a detailed illustrated Manual, complete with Tutorial.  You will
       also become eligible to receive updates to the program as improvements
       are made to it.

       While we have done our best to create a good product, this program is
       provided "as is" without warranty of any kind, either expressed or
       implied.  The risk as to the quality and performance of the program
       for a particular purpose is with you.



   II. INSTALLATION

       To install WYNDSHELL on your hard disk, place the program disk in
       drive A.  At the DOS prompt type "A:" (without the quotes) and press
       the <Return> key.  Then at the A prompt type "INSTALL" and again press
       <Return>.  A title screen will appear.  If a question appears below
       the window, then if the message in the window is unreadable, press N
       so that the program will know that your monitor is unhappy with color
       and adjust itself accordingly; otherwise press Y or Return.


                                                                            3


       A window will then appear with a series of questions which the program
       needs to know in order to proceed.  In most cases, the answers
       supplied by the program itself are what you will want.  If no changes
       need to be made, a short cut to answering all questions is to press
       the <PgDn> key.  Otherwise, type in your preference for each question
       and press <Return>.  Use the <Up> and <Down> Arrow keys to move from
       question to question if you need to return to an earlier question.
       After answering the last question and pressing <Return>, the program
       will copy, create and/or modify the necessary files for your hard
       disk.

       There is a situation which may arise that will cause difficulty.  If
       your computer already loads a different program automatically when it
       boots, WYNDSHELL will not load.  In this situation it is necessary to
       modify the AUTOEXEC.BAT file in the root directory of the drive from
       which you boot the computer to remove the line invoking the other
       program.



   III. RUNNING WYNDSHELL

       Once WYNDSHELL is installed on your hard disk, it may be accessed two
       ways.  If you answered Yes to loading it automatically when the
       computer boots, then WYNDSHELL will be run every time you boot up your
       computer.  This is the normal way in which WYNDSHELL is meant to be
       used, since it allows you to avoid altogether the unfriendliness of
       the DOS prompt.

       If you exit WYNDSHELL to DOS and wish to get back in, or if you did
       not install it to load automatically, type the letter W at the DOS
       prompt from the root directory and press <Return>.



   IV. PROGRAM FUNCTIONS

       Non-menu functions available to you are displayed on the bottom bar of
       the screen in the program.  Please pay attention to this bar.  More
       detailed help is available at any time by pressing the <F1> key.  Once
       in a help screen, pressing the <Escape> key will return you to the
       point in the program where you left off.

       If you wish to venture from the safety of the WYNDSHELL environment to
       the void of the DOS prompt, then press <F2> at any Menu.  To return to
       the comfort of WYNDSHELL, type the letter W and press <Return>,
       breathing a thankful sigh of relief.

       WYNDSHELL allows you to change the computer date or time from any Menu
       by pressing the <F3> key.  Enter the correct date, press <Return>,
       then enter the correct time and again press <Return>.


                                                                            4


       A number of screen options may be set in WYNDSHELL depending on your
       preference.  You may also change any of the colors used by WYNDSHELL
       if you have a color monitor.  To change the screen options or colors,
       press <F4> at any Menu.  Answer Yes or No to each question, then press
       <F2> to save these options, or press <F3> to save the options and
       change any screen colors you wish.

       At the Color Display, press the <Tab> key and <Shift-Tab> to move the
       arrows to the color you wish to change.  Use the Cursor keys to change
       the color.  There are 8 different built-in sample color sets which may
       be chosen by pressing Function keys 3 to 10.  To save the new colors,
       press <F2>.

       If any Menu remains on the screen for five minutes without a key being
       pressed, WYNDSHELL automatically blanks the screen to prevent image
       burn-in.  To bring back the display, simply press any key.  (This
       keystroke is not passed on to the program as a Menu choice.)



   V. MENU SELECTION

       The main purpose of WYNDSHELL is to provide you with easily selectable
       Menu Options for running your programs.  Since you must set up these
       Menus yourself, the first time you run WYNDSHELL, no Menu will be
       displayed.  Once menus are set up, however (see Menu Design below),
       you may use them as follows:


       Menu Options may be selected in three different ways:

         1 - Move the highlight bar by using the Arrow keys.  The <Up> Arrow
             key moves the bar back one Option.  The <Down> Arrow key moves
             it forward.  If there are two columns of Options displayed, the
             <Left> and <Right> Arrow keys move you between the columns.
             Once the desired Option is highlighted, press <Return> to select
             that Option.

         2 - Type the letter printed in front of the desired Option.

         3 - If you have a mouse, point to the desired Option and click the
             Left Mouse Button.


       Once an Option on a Menu is selected, one of three things will occur:

         1 - If no Submenu or Commands for this Option have been set up, then
             nothing will occur.


                                                                            5


         2 - If a Submenu has been set up for this Option, then that Submenu
             will appear in place of the original Menu.  The selection of
             Options from the Submenu then proceeds identically to selection
             from the original Menu.  To return to the original Menu, press
             the <PgUp> key or the <Escape> key.  If you have more than one
             level of Submenus, hold down the <Control> key and press <PgUp>
             to return to the Master Menu from any other Menu.

         3 - If Commands have been set up for this Option, then the program
             for this Option will be run.


       If an Option on the Menu is selected which has Commands which have
       been set up to allow parameters (see Menu Design), then a box will
       appear in which to enter the parameters.  Type here anything which
       would normally be entered after the program name if the program were
       run from the DOS prompt.

       After the selected program is run, you will be returned to WYNDSHELL
       at the Menu from which you selected the program.



   VI. MENU DESIGN

       The process of setting up WYNDSHELL Menus can be divided into 4 steps:

         1 - Set up Menu Options
         2 - Set up Commands
         3 - Set up Submenus
         4 - Save the Setup


       To carry out these steps:

         1 - Set up Menu Options

             Press the <F5> key to enter Menu Design.  A window appears on
             the screen with the title of the current Menu in the upper right
             corner.  Each Menu may have up to 26 Options, lettered A through
             Z.  If any Options have already been set up, then these will be
             listed after the appropriate letter.

             At the Menu Design screen, type in the title of each Option as
             you wish to have it appear on the Menu, and press <Return>.  You
             may use the <Tab> and <Shift-Tab> keys to move the highlight
             from Option to Option in order to make changes.  To insert a new
             Option ahead of the highlighted Option, press <F3>.  To delete
             the highlighted Option, press <F4>.


                                                                            6


         2 - Set up Commands

             To set up Commands to run any of the Options on the current
             Menu, press the <F5> key at the Menu Design Screen.  The Command
             Design display appears.  It contains a window in which you may
             enter the Commands for one particular Option which has been
             entered for the current Menu.  The title of the current Menu
             appears again in the upper right corner, and the title of the
             Option which had been highlighted is shown under it.

             For each Option on the current Menu that is to run a program,
             enter the letter of the drive and the directory from which you
             wish to run the Option, and the sequence of (up to 10) Commands
             necessary to actually run it.  For each Command, you may answer
             Y for Yes in the field after the Command if you want WYNDSHELL
             to prompt you for Parameters at the time this Command is carried
             out (see below concerning Parameters).

             Each Command may be a DOS command, the name of a batch file, or
             the name of a program file.

             After entering the Commands for an Option, press <PgDn> to move
             to the next Option on the Menu, or press <PgUp> to move to the
             previous Option.

             Do not enter any Commands for an Option if you wish to have that
             Option lead to a Submenu rather than run a program.

             Once you have entered Commands for all of the Options you wish,
             press the <F2> key to save these Commands and return to the Menu
             Design display.  When you return you will notice that the letter
             "C" now appears after each of the Options for which you set up
             Commands.


         3 - Set up Submenus

             This step is optional since you may choose to put all of your
             programs on the Master Menu rather than have any Submenus.

             To create a Submenu, first be sure that the Option which will
             lead to the Submenu is highlighted in the Menu Design display.
             Then press the <PgDn> key.  (If the Option has Commands set up
             for it then WYNDSHELL will not allow you set up a Submenu for
             it.)  A new blank Menu appears, with the name of the Option
             which had been highlighted as the name of the new Menu.

             At this point you may follow the procedures in steps 1 and 2
             above to set up Options for the new Submenu, then to set up the
             Commands for those Options.  You may also press <PgDn> again for
             any Option to create a Sub-Submenu for that Option.  (There is
             no limit to the number of levels of Submenus you may have.)


                                                                            7


             If you wish to return to the parent Menu of any Submenu (for
             instance to create another Submenu from a different Option on
             that Menu), press the <PgUp> key at the Menu Design display.
             The Menu from which you created this Submenu reappears.  You
             will notice that the letter "S" now appears after any Option for
             which you have created a Submenu.

             If you hold down the <Control> key and press <PgUp>, then you
             will return to the Master Menu no matter how many levels deep
             you had been.


         4 - Save the Setup

             When you are satisfied with the setup of all your Menus, press
             the <F2> key at the Menu Design display (it doesn't matter what
             Menu is currently shown).  WYNDSHELL saves the Menu Setup and
             your new ready-to-use Menus are now displayed on the screen in
             place of the title display.


       Parameters:

         Some Commands require Parameters.  Parameters contain information
         which must be supplied by the user to a program at the time the
         program is run.  For instance, the DOS EDLIN file editor requires
         the user to type in the name of the file to be edited after the word
         "EDLIN" when running the program.

         To accommodate such cases, when in Command Design type the letter Y
         in the field after the line containing a Command for which you may
         need to enter Parameters.  Then when an Option with such a Command
         is chosen from a WYNDSHELL Menu, WYNDSHELL will ask you to enter the
         Parameters for that Command before it is carried out.


       Exercise:  Designing Menus

         You wish to set up the DOS program EDLIN as an Option on your Menu.

           1 - Press <F5> to bring up  Menu Design.  Move the highlight down
               until it is on the first blank Option on the Menu.

           2 - Type in "Edlin" (without the quotes) on this line.

           3 - Press <F5> to enter Command Design.  If you pressed <Return>
               after entering "Edlin" you will need to press <PgUp> to bring
               back the "Edlin" Option.

           4 - Assuming that the EDLIN program is in the DOS directory on
               drive C, type the letter C for the drive, then type "DOS" in
               the Directory field, then press <Return>.


                                                                            8


           5 - Only one Command line is needed for this program.  Type the
               word "EDLIN" on the first Command line and press <Return>.

           6 - EDLIN does require you to enter Parameters, so type the letter
               Y.

           7 - Press <F2> to save this Command and return to the Menu Design
               display.

           8 - Press <F2> once more to save the Menu Design.  Your Menu
               appears on the screen with "Edlin" as the last Option on the
               Menu.  Now when this Option is selected, you will be prompted
               to enter Parameters before the program is run, and you would
               type in the name of the file you wish to edit.

  

   VII. PASSWORDS

       To add security to your Menus, Passwords may be attached to any Option
       on any Menu.  To set up Passwords for a Menu, press the <F6> key when
       in Menu Design.  (This function is deliberately not shown on the
       bottom bar.)  The screen display now shows any Passwords which have
       been set up next to their Options.  Move the highlight to the desired
       Menu Option and enter in your Password for that Option.  Press <F2>
       when finished to save all the Passwords for this Menu and return to
       Menu Design.  When you return you will notice that the letter "P" now
       appears after each of the Options to which you assigned a Password.

       If you wish to set up Passwords for global program functions, then at
       the Password Design display, press the <F6> key again.  A box appears
       with a list of the various non-Menu program functions.  Here again,
       enter Passwords for each function you wish, then press <F2> to return
       to the normal Password Design display.  NOTE:  The most important
       Password is the Password to enter Password Design itself.  (It doesn't
       do much good to set up Passwords if anyone can find out what they are
       by pressing <F6>.  But just be sure that you remember it so that you
       can get back in yourself!)

       When you select an Option or a function which has a Password assigned
       to it, then a box will appear in the middle of the screen in which to
       enter the Password (this entry will be invisible so that others do not
       see you typing in your Password).  If the Password you enter is not
       correct, then you will be denied access to that Menu Option or program
       function, otherwise WYNDSHELL will then continue normally.


                                                                            9


   VIII. WYND-DOS

       Included as a part of WYNDSHELL is a DOS utility program: WYND-DOS.
       When you choose WYND-DOS by pressing <F6> at any Menu, you are
       transferred immediately to that program.  Enter the drive and
       directory you wish to work with (leave the directory blank for the
       root directory of a drive), and press <F2>.  WYND-DOS shows
       information about your drive and a listing of the files in the
       selected directory.

       Extensive context-sensitive help is available by pressing the <F1>
       key.  To choose commands from the pull-down menus: press the <F10> key
       or hold down the <Alt> key and type the first letter of one of the
       menus listed on the top line of the screen.  Then use the Cursor Arrow
       keys to move through the menus.  Highlight the command you want, then
       press <Return> to select it (or press <Escape> to leave the menus).

       To exit WYND-DOS and return to the WYNDSHELL environment, hold down
       the <Alt> key and type the letter G to bring up the GLOBAL menu.  Then
       select the EXIT command from this menu.

       For more detailed information on using WYND-DOS, read through the
       various help screens in the program, or see the WYND-DOS Manual
       (available to registered owners).



   IX. WYNDWARE PRODUCTS

       If you like the utility functions of WYND-DOS but do not need the menu
       features of WYNDSHELL, or if you like WYNDSHELL but do not need the
       functions of WYND-DOS, stand-alone versions of both are also available
       at a reduced price.

       WYNDFIELDS is a general purpose Database program, useful for
       keeping track of any type of structured information, which also
       supports the use of a mouse.  Data may be added, changed, removed,
       found, displayed, analyzed, and printed easily using the friendly
       pull-down Menu System.  Creating and printing Mailing Labels or
       detailed Reports can be accomplished painlessly from within the
       program.  Multiple Indices (ways of ordering your data) are maintained
       automatically for you, and several methods are available for
       extracting exactly the information you need from your files.  For more
       advanced users, WYNDFIELDS also offers extensive string and math
       functions for use in searches and calculated Fields, and its date and
       time tracking abilities are unsurpassed.  (Requires 512K.)

       FLAGS is an educational program which displays representations of over
       250 different flags of the world.  (Requires color monitor.)

       To become a registered owner of WYNDSHELL, or to order other WYNDWARE
       products, use the convenient order form in the back of this booklet or
       call 1-800-475-1628 for credit card orders.


   ORDER / REGISTRATION FORM


   WYNDWARE
   One Parker Place, Suite 308
   Janesville, WI 53545
   1-800-475-1628


      Name __________________________________________________________________

   Address __________________________________________________________________

           __________________________________________________________________

      City ______________________________  State _______  Zip _______________

   Country ______________________________  Phone ____________________________

    _                                     _                          _
   |_|  Check or Money Order             |_|  Mastercard            |_|  VISA

   Card Number ______________________________________________________________

   Signature ____________________________  Expiration Date __________________



   _____ copies of WYNDSHELL / WYND-DOS  at $45.00 each. . . . $ ____________

   _____ copies of WYNDSHELL alone       at $30.00 each. . . . . ____________

   _____ copies of WYND-DOS alone        at $30.00 each. . . . . ____________

   _____ copies of WYNDFIELDS Database   at $70.00 each. . . . . ____________

   _____ copies of FLAGS                 at $15.00 each. . . . . ____________

                   Wisconsin residents add 5% Sales Tax. . . . . ____________

                   TOTAL ENCLOSED. . . . . . . . . . . . . . . $ ____________



   Registered owners will receive the most recent version of the program,
   with a detailed illustrated Manual (complete with Tutorial), and will be
   eligible to receive updates to the program as improvements are made to it.
   Please contact us for site-licensing and quantity discounts.


   Where did you get your copy of WYNDSHELL? ________________________________

   Comments _________________________________________________________________

   __________________________________________________________________________

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1190

     Volume in drive A has no label
     Directory of A:\

    README   BAT       175  11-01-89
    WS       DOC     24089  11-01-89
    INSTALL  EXE     29184  11-01-89
    WS       EXE    181228  11-01-89
    WS       HLP     15499  11-01-89
    WD       HLP     69041  11-01-89
    FILE1190 TXT      3183   9-10-90  10:59a
            7 file(s)     322399 bytes
                           35840 bytes free
