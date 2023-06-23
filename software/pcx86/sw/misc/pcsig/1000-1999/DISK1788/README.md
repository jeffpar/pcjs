---
layout: page
title: "PC-SIG Diskette Library (Disk #1788)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1788/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1788"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MENUX"

    MENUX is a menu system that allows up to 4 menus on the screen at one
    time, and up to 10 options in each menu.
    
    Features:
    
    ~ 10,000 different options allowed
    
    ~ Edit system colors
    
    ~ Edit each menu's colors
    
    ~ Save screen feature
    
    ~ Password protection for each menu option
    
    ~ Edit and change menu titles, prompts, and batch files
    
    ~ Changing the date
    
    ~ Changing the time
    
    ~ Shell to DOS.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1788.TXT

{% raw %}
```
Disk No: 1788                                                           
Disk Title: MenuX                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: MenuX                                                    
Author Version: 3.1                                                     
Author Registration: $19.95                                             
Special Requirements: Hard Drive reocmmended.                           
                                                                        
MENUX is a menu system that allows up to 4 menus on the screen at one   
time, and up to 10 options in each menu.                                
                                                                        
Features:                                                               
                                                                        
       ~ 10,000 Different Options allowed                               
                                                                        
       ~ Edit System Colors                                             
                                                                        
       ~ Edit each Menu's Colors                                        
                                                                        
       ~ Save Screen Feature                                            
                                                                        
       ~ Password Protection for each Menu Option                       
                                                                        
       ~ Edit and Change Menu Titles, Prompts, and Batch Files          
                                                                        
       ~ Changing the Date                                              
                                                                        
       ~ Changing the Time                                              
                                                                        
       ~ Shell to DOS                                                   
                                                                        
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
║                   <<<<  Disk #1788  MENUX  >>>>                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  MENUX (press enter)                            ║
║                                                                         ║
║ To print documentation, type:  COPY MENUX.DOC PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MENUX.DOC

{% raw %}
```









                                  MENUX version 3.1
                                    Users Guide










       (C)Copyright Phil Faircloth Software, 1988, 1989
       All rights reserved





       PHIL FAIRCLOTH SOFTWARE
       1416 Caracara
       New Bern, NC 28560












                                CONTENTS



      Introduction ..........................................   1   

      System Requirements ...................................   2

      Running MENUX .........................................   3

      MENUX Command Line ....................................   4

      First Maintenance Menu ................................   6 

      Editing Text Inside Boxes .............................  11 

      Second Maintenance Menu ...............................  12

      Registration Information ..............................  15





                                                                Page 1


       INTRODUCTION

       MENUX is an easy-to-use menu system that allows users to quickly
       select and execute programs, batch files and DOS commands. It allows
       up to 4 menus on the screen at one time and up to 10 options in each
       menu, which gives you the possibility to run 10,000 different menu 
       options.

       Here are some of the features of MENUX:

       - 4 Menus on the screen at one time
       - 10 Options for each Menu
       - 10,000 Different Options allowed
       - Edit System Colors
       - Edit each Menu's Colors
       - Save Screen Feature
       - Password Protection for each Menu Option
       - Edit and Change Menu Titles, Prompts, and Batch Files
       - Changing the Date
       - Changing the Time
       - A DOS Environment

       After execution of a batch file or program, MENUX will reappear
       on the screen.

       MENUX is not only great for an office environment, but for home use
       as well.  It provides password protection so that you can limit the
       number of users that can run certain programs, batch files and DOS
       commands or you can choose to not have password protection.




       SOME MENUX TERMINOLOGY:

       - Current Menu - The last menu that is displayed on the screen. If
         there is only one menu on the screen, that is the current menu. If
         there are three menus displayed, the third menu is the current menu,
         etc.

       - Main or Start Up Menu - The first menu on the screen.

       - Menu Option - A menu prompt, batch file, and password.

       - Prompt - Text on each line of a displayed menu.

       - Maintenance Menus - Two menus that allow you to edit or
         change system and menu attributes.



                                                                Page 2







       SYSTEM REQUIREMENTS

       MENUX runs on an IBM PC or compatible system with the following
       minimum configuration:

       - 256K of memory

       - MSDOS or PCDOS operating system (version 2.0 or later)

       - A monochrome or color computer monitor with 80 column display.
         Graphics boards are not necessary.

       - A hard disk drive is recommended.




       INSTALLING MENUX

       First, make a backup copy of MENUX on another floppy disk.

       Insert MENUX disk in drive A

       If using a hard disk, you may want to create a separate
       directory for MENUX type:

                               md c:\menux
                               cd c:\menux
                               copy a:\*.* c:\menux

       or just place MENUX in the root directory.

                               cd c:\
                               copy a:\*.*  c:\

      COMMAND.COM must be in the root directory of the default drive.




                                                                Page 3



       RUNNING MENUX


       Change to the directory that contains MENUX and type

                               menux.com

       The main MENUX screen along with the main menu will now be displayed.



       You may prefer to run MENUX automatically each time the computer
       is booted.  To do this, insert the following command(s) at the
       end of the AUTOEXEC.BAT batch file.

                   menux.com     or     cd c:\menux
                                        menux.com





       The MENUX main screen displays the following:

       - a top line which shows the MENUX version number, date and time.

       - the main menu

       - the command line which is displayed on the bottom of the screen.





       MAIN or START UP MENU

       This is the first menu displayed on the screen. If there haven't
       been any menu options created for the main menu, the following
       box is displayed:


               +-Main Menu-----------+
               | 0 No Menu Options.  |
               +---------------------+



                                                                Page 4





       MENUX COMMAND LINE



       The command line is displayed on the last line and allows you to
       do the following:


       - Move the current menu's location on the screen by pressing "Alt"
         "M". Use the arrow keys to position the menu. Changes are auto-
         matically saved when you press "Esc" to return to MENUX COMMAND
         LINE


       - Pressing the "up" or "down" arrow keys will select different
         options in the menu by highlighting the currently selected option.


       - Pressing "Enter" or "Return" executes the option currently
         highlighted.


       - Pressing "0" through the highest number listed in the current menu
         (highest number possible is 9) highlights and executes the option
         beside the number listed in the current menu.





                                                                Page 5









       - Pressing "F2" key will take you into the First Maintenance Menu
         which allows you to create new menus, change system colors, change
         menu colors, change the date, change the time, edit the menu
         title, edit prompts, passwords, and batch files.


         Before MENUX allows access into the First Maintenance Menu, you
         must enter the access code, if one exists. This provides protection 
         against unauthorized users editing your menus or escaping to DOS.
         There is no access code when the "MENUX" disk sent to you, so access
         to the First Maintenance Menu is automatically allowed when the "F2"
         key is pressed.


         As the access code is entered, "*" appears on the command line
         instead of the actual characters. Press "Enter" to accept the code
         or press "Esc" to exit this process.  If your response was
         incorrect, an "Access Code Error Message" will be displayed and
         control is returned to back to the current menu.


         If any text or attributes were altered while you are in the
         Maintenance Menus, the following message will be displayed when
         you exit the First Maintenance Menu:

             "SAVE CHANGES? Y/N"


          If you say "Y" for yes, then the changes will be saved to disk.
          If you say "N" for no, then no changes will be made.





                                                                Page 6



       FIRST MAINTENANCE MENU


       +----+----+
       | F1 | F2 |    F1 - EDIT OPTIONS        F2 - EDIT MENU TITLE
       +----+----+
       | F3 | F4 |    F3 - CREATE NEW MENU     F4 - EDIT MENU COLORS
       +----+----+
       | F5 | F6 |    F5 - EDIT SYSTEM COLORS  F6 - CHANGE DATE       
       +----+----+
       | F7 | F8 |    F7 - CHANGE TIME         F8 - DOS ENVIRONMENT
       +----+----+
       | F9 | F10|    F9 - CHANGE ACCESS CODE  F10 - RETURN TO DOS     
       +----+----+



       To select the different Maintenance Menu options, use

          the "up" and "down" arrow keys or the "space bar" to highlight
          the option and press "Enter"

               or

          press the function key listed beside the option.



       - Pressing the "F1" key or highlighting "F1-EDIT OPTIONS" and
         pressing "Enter" from the First Maintenance Menu will display the
         Second Maintenance Menu. This menu allows you to add, edit, move
         and delete options from the current menu. See SECOND MAINTENANCE
         MENU.

         Each menu option is made up of a prompt, batch file and password.
         There will be three boxes displayed on the screen with the
         following labels:  PROMPT, BATCH FILE and PASSWORD.

         If an Access Code exists, then this code must be entered before
         access is allowed into the Maintenance Menus. See Access Code
         below.



                                                                Page 7


       - If the "F2" key is pressed, the Edit Menu Title Box is displayed
         and the cursor is located at the first position inside this box.

         You may now edit the menu title.  See EDITING TEXT INSIDE BOXES.
         Press "Esc" to return control back to the Maintenance Menu.

         The menu title is always displayed and centered on the top line
         of the current menu's box. The default menu title for the main or
         start up menu is "MAIN MENU".





       - Pressing "F3" will display the Create a New Menu Box and position
         the cursor on the first position inside this box.  The prompt
         pointer number automatically points to the next available
         location in the current menu.  If there are no more options
         available for the current menu, an error message will be displayed.

         Enter the prompt message for the new menu and press "Esc" when
         finished to return control back to the Maintenance Menu. See
         EDITING TEXT INSIDE BOXES.

         You can not edit menu options in the new menu because it is not the
         current menu; however you can press "F1" , which will call up the
         Second  Maintenance Menu, and edit the menu option prompt that you
         just created or password protect this menu option.

         Notice that you can't edit the batch file.



                                                                Page 8

       - Pressing "F4" will call up the Menu Colors Box which displays
         the following current menu colors:

               Menu Background
               Menu Foreground
               MenuBar Backgrnd
               MenuBar Foregrnd

          The highlighted color is the one currently active for editing.

          To select colors, use the "Up" and "Down" keys. To edit the
          next color option, press the "Enter" key. If you are on the
          last option and press "Enter", then the first option will again
          be highlighted.  Pressing "Esc" will return control back to the
          Maintenance Menu.





       - Pressing "F5" will call up the System Colors Box which displays
         the following system colors:

               Screen Background
               Screen Foreground
               Command Line Background
               Command Line Foreground
               Top Line Background
               Top Line Foreground

         The System Colors can be changed only when the main or start up
         menu is the current menu (the only one on the screen).

         You edit the System Colors the same way as you would the Menu
         Colors (See edit Menu Colors above).

         The Command Line is the highlighted bottom line on the screen.
         The Top Line is the highlighted top line on the screen that
         displays the date, time, and MENUX version number. The Screen is
         the rest of the screen behind the menus and command lines.



                                                                Page 9


       - Pressing "F6" will allow you to change the date displayed on the
         Top Line of your screen.  Once this key is pressed, the cursor is
         located on that line under the first m of "mm/dd/yy".  The date
         must be entered under the following format:

           month/day/year    i.e. for July 12, 1988 enter   "071288"

         After entering the second digit of the year, if the date is a
         valid date, it will be automatically changed. Control is
         returned to the Maintenance Menu. If the date is not valid, an
         error message is displayed and the old date will be reinstated.

         If the "Esc" key is pressed during the editing process, the old
         date is reinstated and control is passed back to the maintenance
         menu.



       - Pressing "F7" will allow you to change the time displayed on the
         Top Line of your screen.  Once this key is pressed, the cursor is
         located on the line under the first blank of "  :  ".  The time
         must be entered under the following format:

           hour:day    i.e. for 1:32pm  enter   "1332"

           * Remember to enter time as military time!

         After entering the minutes, if the time is a valid time, it will
         be automatically changed. Control is returned to the First
         Maintenance Menu. If the time is not valid, an error message is
         displayed and the old time will be reinstated.

         If the "Esc" key is pressed during the editing process, the old
         time is reinstated and control is passed back to the First
         Maintenance Menu.



                                                                Page 10








       - If the "F8" key is pressed, the DOS Environment screen is invoked.

         You may execute the same DOS Commands as would if located at the
         DOS Prompt. To exit this environment, enter "EXIT" and press ENTER.
         Control is then passed back to the First Maintenance Menu.


       - Pressing "F9" will display the Access Code Menu Box and position
         the cursor on the first position inside this box. The access code is
         used to restrict users from entering the Maintenance Menus and can
         have a length of up to 5 places. If the access code box is empty,
         then access is automatically allowed. If you choose to enter an access
         code, then users must match this code before access is allowed to the
         Maintenance Menus. Trailing blanks are ignored.

         Press "Esc" when finished to return control back to the Maintenance
         Menu. See EDITING TEXT INSIDE BOXES.

         The access code is the empty string initially.


       - "F10" will return you to DOS and MENUX will be terminated.
          



                                                                Page 11




       EDITING TEXT INSIDE BOXES


         +---------+
         |Backspace|    +----+----+----+
         +---------+    |    | Up |    |
             +-----+    +----+----+----|
             |     |    |Left|    |Right
             |     |    +----+----+----|
        +----+     |    |    |Down|    |
        |  ENTER   |    +----+----+----|
        |          |         |   Del   |
        +----------+         +---------+


       - Inside all of the Edit Boxes (Prompt, Batch File, Password, Menu
         Title and Create a New Menu), you may use the following keys to
         edit the contents:

         Left Arrow    Moves the cursor to the left one character.

         Right Arrow   Moves the cursor to the right one character.

         Del           Deletes the character where the cursor is positioned.

         Backspace     Deletes the character immediately to the left of the
                       cursor and moves the cursor to the right.

         Esc           Returns control to the Maintenance Menu. The cursor
                       will disappear from the screen.

       - For Batch Files Only

         Enter or   Moves the cursor to the first position on the next line
          Return    and all following lines down one.

         Up Arrow   Moves the cursor up one line.

         Down Arrow Same as above except that it takes you down one line
                    if there already is a line below the cursor.

         To insert text, move cursor to desired location and type in text.

         Page Down  Moves the cursor down 7 lines 

         Page Up    Moves the cursor up 7 lines

         Home       Moves cursor to the beginning of the batch file

         End        Moves the cursor to the end of the batch file



                                                                Page 12



       SECOND MAINTENANCE MENU


       +----+----+
       | F1 | F2 |    F1 - GET NEXT OPTION       F2 - GET PREVIOUS OPTION
       +----+----+
       | F3 | F4 |    F3 - EDIT PROMPT           F4 - EDIT BATCH FILE
       +----+----+
       | F5 | F6 |    F5 - MOVE OPTION           F6 - DELETE OPTION
       +----+----+
       | F7 |    |    F7 - EDIT PASSWORD
       +----+----+
       |    |    |
       +----+----+


       - The "GET NEXT OPTION" key will display the menu option immediately
         following the current option displayed. To add a new menu option,
         press "F1" until you reach a blank menu option. This will always
         be after the last option for that menu.

         If you want to add a menu option between two other options that
         already exist, first add the option and move it to the position
         desired. See MOVE OPTION.




       - The "GET PREVIOUS OPTION" key will display the menu option
         immediately preceding the current menu option displayed unless the
         current option is option 0.



       - The PROMPT BOX informs you which prompt number you are currently
         viewing. The prompt number is the same as the menu option number.
         There may be 0-9 possible menu options in the current menu.

         To edit the prompt, press "F3" or highlight "F3-EDIT PROMPT"
         and press "Enter". The cursor should now be located at the first
         position inside the Prompt Box.

         Edit the prompt as you would the menu title. Pressing the "Esc"
         key returns control to the Second Maintenance Menu.



                                                                Page 13





       - The BATCH FILE BOX contains the DOS commands that will be
         executed when the current menu option is selected. You may enter
         up to 25 lines of text.

         i.e. To run a program "DOSHELP" located in the "C:\UTIL"
              directory press "F4" to enter the box and type

                       "CD C:\UTIL"  press "Enter"
                       "DOSHELP.EXE"     press "Esc"

          i.e. To run a batch file located in the "C:\BATCH"  directory
               type

                       "CD C:\BATCH"          press "Enter"
                       "batch_file_name.BAT"  press "Esc"

          i.e. To run the DOS Command "FORMAT A:", type

                       "CLS"        press "Enter"
                       "FORMAT A:"  press "Esc"

                Notice that the CLS command was used.  This is a good idea
                for DOS commands and maybe some batch files that don't
                call EXE or COM files because MENUX does not automatically
                clear the screen when it executes DOS commands. The reason
                MENUX doesn't is because of the blank screen gap when 
                calling a program.

            If you save these changes or additions when you leave the
            Maintenance Menus, they will be executed every time this menu
            option is chosen (provided that if there was a password, the
            correct match was entered).



                                                                Page 14





       - The PASSWORD BOX contains the password that must be matched before
         the DOS commands, located inside the BATCH FILE BOX, will be
         executed.

         Press "F7" or highlight "F7-EDIT PASSWORD" and press "Enter" to
         locate the cursor inside the PASSWORD BOX.

         The password may be up to eight characters in length and contain
         any of the following characters:

            0123456789!"$#%()?><,./+-*&;:'@
            A through Z
            a through z

           i.e. the password could be "FI%$" or "Back" or "&PN_F"

          Pressing the "Esc" key will return control to the Second
          Maintenance Menu.



       - To MOVE a menu option, press the "F5" key or highlight
         "F5-MOVE OPTION" and press "Enter".

          "Move to option location? (range)" will be displayed on the
          bottom line of the BATCH FILE BOX. You may move the menu option
          anywhere within the range.  All other menu options will be
          adjusted up or down.



       - To DELETE a menu option, press the "F6" key or highlight
         "F6-DELETE OPTION" and press "Enter".

          "Delete this Option? Y/N" will be displayed on the
          bottom line of the BATCH FILE BOX.

          If you want to delete the current menu option, press "Y" for yes.
          All other menu options above the current option will be adjusted
          down.

          If you don't want to delete this option, press "N" for no or "Esc"
          to return control to the Second Maintenance Menu screen.





                                                                Page 15









               MENUX is "User Supported Software"



    MENUX currently costs $19.95 plus $2.50 for shipping and
    handling and may be purchased from    PHIL FAIRCLOTH SOFTWARE
                                          1416 Caracara
                                          New Bern, NC 28560


     Why purchase MENUX?

     - You receive a CURRENT copy of the program.
     - Notification of updates and upgrades. (networking version due out soon)
     - Notification of new products.





```
{% endraw %}

## MENUX.DOC

{% raw %}
```









                                  MENUX version 3.1
                                    Users Guide










       (C)Copyright Phil Faircloth Software, 1988, 1989
       All rights reserved





       PHIL FAIRCLOTH SOFTWARE
       1416 Caracara
       New Bern, NC 28560












                                CONTENTS



      Introduction ..........................................   1   

      System Requirements ...................................   2

      Running MENUX .........................................   3

      MENUX Command Line ....................................   4

      First Maintenance Menu ................................   6 

      Editing Text Inside Boxes .............................  11 

      Second Maintenance Menu ...............................  12

      Registration Information ..............................  15





                                                                Page 1


       INTRODUCTION

       MENUX is an easy-to-use menu system that allows users to quickly
       select and execute programs, batch files and DOS commands. It allows
       up to 4 menus on the screen at one time and up to 10 options in each
       menu, which gives you the possibility to run 10,000 different menu 
       options.

       Here are some of the features of MENUX:

       - 4 Menus on the screen at one time
       - 10 Options for each Menu
       - 10,000 Different Options allowed
       - Edit System Colors
       - Edit each Menu's Colors
       - Save Screen Feature
       - Password Protection for each Menu Option
       - Edit and Change Menu Titles, Prompts, and Batch Files
       - Changing the Date
       - Changing the Time
       - A DOS Environment

       After execution of a batch file or program, MENUX will reappear
       on the screen.

       MENUX is not only great for an office environment, but for home use
       as well.  It provides password protection so that you can limit the
       number of users that can run certain programs, batch files and DOS
       commands or you can choose to not have password protection.




       SOME MENUX TERMINOLOGY:

       - Current Menu - The last menu that is displayed on the screen. If
         there is only one menu on the screen, that is the current menu. If
         there are three menus displayed, the third menu is the current menu,
         etc.

       - Main or Start Up Menu - The first menu on the screen.

       - Menu Option - A menu prompt, batch file, and password.

       - Prompt - Text on each line of a displayed menu.

       - Maintenance Menus - Two menus that allow you to edit or
         change system and menu attributes.



                                                                Page 2







       SYSTEM REQUIREMENTS

       MENUX runs on an IBM PC or compatible system with the following
       minimum configuration:

       - 256K of memory

       - MSDOS or PCDOS operating system (version 2.0 or later)

       - A monochrome or color computer monitor with 80 column display.
         Graphics boards are not necessary.

       - A hard disk drive is recommended.




       INSTALLING MENUX

       First, make a backup copy of MENUX on another floppy disk.

       Insert MENUX disk in drive A

       If using a hard disk, you may want to create a separate
       directory for MENUX type:

                               md c:\menux
                               cd c:\menux
                               copy a:\*.* c:\menux

       or just place MENUX in the root directory.

                               cd c:\
                               copy a:\*.*  c:\

      COMMAND.COM must be in the root directory of the default drive.




                                                                Page 3



       RUNNING MENUX


       Change to the directory that contains MENUX and type

                               menux.com

       The main MENUX screen along with the main menu will now be displayed.



       You may prefer to run MENUX automatically each time the computer
       is booted.  To do this, insert the following command(s) at the
       end of the AUTOEXEC.BAT batch file.

                   menux.com     or     cd c:\menux
                                        menux.com





       The MENUX main screen displays the following:

       - a top line which shows the MENUX version number, date and time.

       - the main menu

       - the command line which is displayed on the bottom of the screen.





       MAIN or START UP MENU

       This is the first menu displayed on the screen. If there haven't
       been any menu options created for the main menu, the following
       box is displayed:


               +-Main Menu-----------+
               | 0 No Menu Options.  |
               +---------------------+



                                                                Page 4





       MENUX COMMAND LINE



       The command line is displayed on the last line and allows you to
       do the following:


       - Move the current menu's location on the screen by pressing "Alt"
         "M". Use the arrow keys to position the menu. Changes are auto-
         matically saved when you press "Esc" to return to MENUX COMMAND
         LINE


       - Pressing the "up" or "down" arrow keys will select different
         options in the menu by highlighting the currently selected option.


       - Pressing "Enter" or "Return" executes the option currently
         highlighted.


       - Pressing "0" through the highest number listed in the current menu
         (highest number possible is 9) highlights and executes the option
         beside the number listed in the current menu.





                                                                Page 5









       - Pressing "F2" key will take you into the First Maintenance Menu
         which allows you to create new menus, change system colors, change
         menu colors, change the date, change the time, edit the menu
         title, edit prompts, passwords, and batch files.


         Before MENUX allows access into the First Maintenance Menu, you
         must enter the access code, if one exists. This provides protection 
         against unauthorized users editing your menus or escaping to DOS.
         There is no access code when the "MENUX" disk sent to you, so access
         to the First Maintenance Menu is automatically allowed when the "F2"
         key is pressed.


         As the access code is entered, "*" appears on the command line
         instead of the actual characters. Press "Enter" to accept the code
         or press "Esc" to exit this process.  If your response was
         incorrect, an "Access Code Error Message" will be displayed and
         control is returned to back to the current menu.


         If any text or attributes were altered while you are in the
         Maintenance Menus, the following message will be displayed when
         you exit the First Maintenance Menu:

             "SAVE CHANGES? Y/N"


          If you say "Y" for yes, then the changes will be saved to disk.
          If you say "N" for no, then no changes will be made.





                                                                Page 6



       FIRST MAINTENANCE MENU


       +----+----+
       | F1 | F2 |    F1 - EDIT OPTIONS        F2 - EDIT MENU TITLE
       +----+----+
       | F3 | F4 |    F3 - CREATE NEW MENU     F4 - EDIT MENU COLORS
       +----+----+
       | F5 | F6 |    F5 - EDIT SYSTEM COLORS  F6 - CHANGE DATE       
       +----+----+
       | F7 | F8 |    F7 - CHANGE TIME         F8 - DOS ENVIRONMENT
       +----+----+
       | F9 | F10|    F9 - CHANGE ACCESS CODE  F10 - RETURN TO DOS     
       +----+----+



       To select the different Maintenance Menu options, use

          the "up" and "down" arrow keys or the "space bar" to highlight
          the option and press "Enter"

               or

          press the function key listed beside the option.



       - Pressing the "F1" key or highlighting "F1-EDIT OPTIONS" and
         pressing "Enter" from the First Maintenance Menu will display the
         Second Maintenance Menu. This menu allows you to add, edit, move
         and delete options from the current menu. See SECOND MAINTENANCE
         MENU.

         Each menu option is made up of a prompt, batch file and password.
         There will be three boxes displayed on the screen with the
         following labels:  PROMPT, BATCH FILE and PASSWORD.

         If an Access Code exists, then this code must be entered before
         access is allowed into the Maintenance Menus. See Access Code
         below.



                                                                Page 7


       - If the "F2" key is pressed, the Edit Menu Title Box is displayed
         and the cursor is located at the first position inside this box.

         You may now edit the menu title.  See EDITING TEXT INSIDE BOXES.
         Press "Esc" to return control back to the Maintenance Menu.

         The menu title is always displayed and centered on the top line
         of the current menu's box. The default menu title for the main or
         start up menu is "MAIN MENU".





       - Pressing "F3" will display the Create a New Menu Box and position
         the cursor on the first position inside this box.  The prompt
         pointer number automatically points to the next available
         location in the current menu.  If there are no more options
         available for the current menu, an error message will be displayed.

         Enter the prompt message for the new menu and press "Esc" when
         finished to return control back to the Maintenance Menu. See
         EDITING TEXT INSIDE BOXES.

         You can not edit menu options in the new menu because it is not the
         current menu; however you can press "F1" , which will call up the
         Second  Maintenance Menu, and edit the menu option prompt that you
         just created or password protect this menu option.

         Notice that you can't edit the batch file.



                                                                Page 8

       - Pressing "F4" will call up the Menu Colors Box which displays
         the following current menu colors:

               Menu Background
               Menu Foreground
               MenuBar Backgrnd
               MenuBar Foregrnd

          The highlighted color is the one currently active for editing.

          To select colors, use the "Up" and "Down" keys. To edit the
          next color option, press the "Enter" key. If you are on the
          last option and press "Enter", then the first option will again
          be highlighted.  Pressing "Esc" will return control back to the
          Maintenance Menu.





       - Pressing "F5" will call up the System Colors Box which displays
         the following system colors:

               Screen Background
               Screen Foreground
               Command Line Background
               Command Line Foreground
               Top Line Background
               Top Line Foreground

         The System Colors can be changed only when the main or start up
         menu is the current menu (the only one on the screen).

         You edit the System Colors the same way as you would the Menu
         Colors (See edit Menu Colors above).

         The Command Line is the highlighted bottom line on the screen.
         The Top Line is the highlighted top line on the screen that
         displays the date, time, and MENUX version number. The Screen is
         the rest of the screen behind the menus and command lines.



                                                                Page 9


       - Pressing "F6" will allow you to change the date displayed on the
         Top Line of your screen.  Once this key is pressed, the cursor is
         located on that line under the first m of "mm/dd/yy".  The date
         must be entered under the following format:

           month/day/year    i.e. for July 12, 1988 enter   "071288"

         After entering the second digit of the year, if the date is a
         valid date, it will be automatically changed. Control is
         returned to the Maintenance Menu. If the date is not valid, an
         error message is displayed and the old date will be reinstated.

         If the "Esc" key is pressed during the editing process, the old
         date is reinstated and control is passed back to the maintenance
         menu.



       - Pressing "F7" will allow you to change the time displayed on the
         Top Line of your screen.  Once this key is pressed, the cursor is
         located on the line under the first blank of "  :  ".  The time
         must be entered under the following format:

           hour:day    i.e. for 1:32pm  enter   "1332"

           * Remember to enter time as military time!

         After entering the minutes, if the time is a valid time, it will
         be automatically changed. Control is returned to the First
         Maintenance Menu. If the time is not valid, an error message is
         displayed and the old time will be reinstated.

         If the "Esc" key is pressed during the editing process, the old
         time is reinstated and control is passed back to the First
         Maintenance Menu.



                                                                Page 10








       - If the "F8" key is pressed, the DOS Environment screen is invoked.

         You may execute the same DOS Commands as would if located at the
         DOS Prompt. To exit this environment, enter "EXIT" and press ENTER.
         Control is then passed back to the First Maintenance Menu.


       - Pressing "F9" will display the Access Code Menu Box and position
         the cursor on the first position inside this box. The access code is
         used to restrict users from entering the Maintenance Menus and can
         have a length of up to 5 places. If the access code box is empty,
         then access is automatically allowed. If you choose to enter an access
         code, then users must match this code before access is allowed to the
         Maintenance Menus. Trailing blanks are ignored.

         Press "Esc" when finished to return control back to the Maintenance
         Menu. See EDITING TEXT INSIDE BOXES.

         The access code is the empty string initially.


       - "F10" will return you to DOS and MENUX will be terminated.
          



                                                                Page 11




       EDITING TEXT INSIDE BOXES


         +---------+
         |Backspace|    +----+----+----+
         +---------+    |    | Up |    |
             +-----+    +----+----+----|
             |     |    |Left|    |Right
             |     |    +----+----+----|
        +----+     |    |    |Down|    |
        |  ENTER   |    +----+----+----|
        |          |         |   Del   |
        +----------+         +---------+


       - Inside all of the Edit Boxes (Prompt, Batch File, Password, Menu
         Title and Create a New Menu), you may use the following keys to
         edit the contents:

         Left Arrow    Moves the cursor to the left one character.

         Right Arrow   Moves the cursor to the right one character.

         Del           Deletes the character where the cursor is positioned.

         Backspace     Deletes the character immediately to the left of the
                       cursor and moves the cursor to the right.

         Esc           Returns control to the Maintenance Menu. The cursor
                       will disappear from the screen.

       - For Batch Files Only

         Enter or   Moves the cursor to the first position on the next line
          Return    and all following lines down one.

         Up Arrow   Moves the cursor up one line.

         Down Arrow Same as above except that it takes you down one line
                    if there already is a line below the cursor.

         To insert text, move cursor to desired location and type in text.

         Page Down  Moves the cursor down 7 lines 

         Page Up    Moves the cursor up 7 lines

         Home       Moves cursor to the beginning of the batch file

         End        Moves the cursor to the end of the batch file



                                                                Page 12



       SECOND MAINTENANCE MENU


       +----+----+
       | F1 | F2 |    F1 - GET NEXT OPTION       F2 - GET PREVIOUS OPTION
       +----+----+
       | F3 | F4 |    F3 - EDIT PROMPT           F4 - EDIT BATCH FILE
       +----+----+
       | F5 | F6 |    F5 - MOVE OPTION           F6 - DELETE OPTION
       +----+----+
       | F7 |    |    F7 - EDIT PASSWORD
       +----+----+
       |    |    |
       +----+----+


       - The "GET NEXT OPTION" key will display the menu option immediately
         following the current option displayed. To add a new menu option,
         press "F1" until you reach a blank menu option. This will always
         be after the last option for that menu.

         If you want to add a menu option between two other options that
         already exist, first add the option and move it to the position
         desired. See MOVE OPTION.




       - The "GET PREVIOUS OPTION" key will display the menu option
         immediately preceding the current menu option displayed unless the
         current option is option 0.



       - The PROMPT BOX informs you which prompt number you are currently
         viewing. The prompt number is the same as the menu option number.
         There may be 0-9 possible menu options in the current menu.

         To edit the prompt, press "F3" or highlight "F3-EDIT PROMPT"
         and press "Enter". The cursor should now be located at the first
         position inside the Prompt Box.

         Edit the prompt as you would the menu title. Pressing the "Esc"
         key returns control to the Second Maintenance Menu.



                                                                Page 13





       - The BATCH FILE BOX contains the DOS commands that will be
         executed when the current menu option is selected. You may enter
         up to 25 lines of text.

         i.e. To run a program "DOSHELP" located in the "C:\UTIL"
              directory press "F4" to enter the box and type

                       "CD C:\UTIL"  press "Enter"
                       "DOSHELP.EXE"     press "Esc"

          i.e. To run a batch file located in the "C:\BATCH"  directory
               type

                       "CD C:\BATCH"          press "Enter"
                       "batch_file_name.BAT"  press "Esc"

          i.e. To run the DOS Command "FORMAT A:", type

                       "CLS"        press "Enter"
                       "FORMAT A:"  press "Esc"

                Notice that the CLS command was used.  This is a good idea
                for DOS commands and maybe some batch files that don't
                call EXE or COM files because MENUX does not automatically
                clear the screen when it executes DOS commands. The reason
                MENUX doesn't is because of the blank screen gap when 
                calling a program.

            If you save these changes or additions when you leave the
            Maintenance Menus, they will be executed every time this menu
            option is chosen (provided that if there was a password, the
            correct match was entered).



                                                                Page 14





       - The PASSWORD BOX contains the password that must be matched before
         the DOS commands, located inside the BATCH FILE BOX, will be
         executed.

         Press "F7" or highlight "F7-EDIT PASSWORD" and press "Enter" to
         locate the cursor inside the PASSWORD BOX.

         The password may be up to eight characters in length and contain
         any of the following characters:

            0123456789!"$#%()?><,./+-*&;:'@
            A through Z
            a through z

           i.e. the password could be "FI%$" or "Back" or "&PN_F"

          Pressing the "Esc" key will return control to the Second
          Maintenance Menu.



       - To MOVE a menu option, press the "F5" key or highlight
         "F5-MOVE OPTION" and press "Enter".

          "Move to option location? (range)" will be displayed on the
          bottom line of the BATCH FILE BOX. You may move the menu option
          anywhere within the range.  All other menu options will be
          adjusted up or down.



       - To DELETE a menu option, press the "F6" key or highlight
         "F6-DELETE OPTION" and press "Enter".

          "Delete this Option? Y/N" will be displayed on the
          bottom line of the BATCH FILE BOX.

          If you want to delete the current menu option, press "Y" for yes.
          All other menu options above the current option will be adjusted
          down.

          If you don't want to delete this option, press "N" for no or "Esc"
          to return control to the Second Maintenance Menu screen.





                                                                Page 15









               MENUX is "User Supported Software"



    MENUX currently costs $19.95 plus $2.50 for shipping and
    handling and may be purchased from    PHIL FAIRCLOTH SOFTWARE
                                          1416 Caracara
                                          New Bern, NC 28560


     Why purchase MENUX?

     - You receive a CURRENT copy of the program.
     - Notification of updates and upgrades. (networking version due out soon)
     - Notification of new products.





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1788

     Volume in drive A has no label
     Directory of A:\

    FILE1788 TXT      2739  12-20-89   1:54p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-20-89   1:57p
    MENUX    ARC     54906   7-16-80   6:08p
    MENUX    COM     14592   7-10-89   2:25p
    MENUX    DOC     22632   7-11-89  11:19a
    MENUX    X01     12672   7-16-80   5:31p
    MENUX    X02     28928   7-10-89   2:30p
    ORDER    FRM       954   7-11-89  11:09a
    README            3183   7-11-89  11:36a
           10 file(s)     141184 bytes
                           15872 bytes free
