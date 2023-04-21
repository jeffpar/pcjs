---
layout: page
title: "PC-SIG Diskette Library (Disk #1924)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1924/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1924"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MENU CONSTRUCTION SET 1 OF 2 (2119 ALSO)"

    This isn't merely another menu program, rather it is software that lets
    you construct customized and detailed menus.  With MCS, you can create
    extremely clean menus, with no unnecessary distractions on the screen.
    The menus are not memory resident, and therefore use no additional
    memory.
    
    Create attractive colorful menus with shadowing effects.  Your menu
    choice can run a batch file, display an informational screen you
    create, or display another menu.  MCS allows up to 100 items per
    menu and there's no limit on the number of menus in a given menu set.
    
    The edit/construct mode uses "1-2-3 like" commands to walk you through
    the process of creating your own menu design.  There are no
    documentation manuals with this program -- that's how easy it is to
    use!  Ideal for the system consultant or computer pro who needs to
    create a user friendly environment for computer neophytes.  Full
    mouse and LAN support is provided.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1924.TXT

{% raw %}
```
Disk No: 1924                                                           
Disk Title: Menu Construction Set 1 of 2 (2119 also)                    
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: MENU CONSTRUCTION SET                                    
Author Version: 1.1                                                     
Author Registration: $47.50                                             
Special Requirements: 384K RAM and a hard drive.                        
                                                                        
This isn't merely another menu program, rather it is software that      
lets you construct customized and detailed menus.  With MCS, you can    
create extremely clean menus, with no unnecessary distractions on the   
screen.  The menus are not memory resident, and therefore use no        
additional memory.                                                      
                                                                        
Create attractive colorful menus with shadowing effects.  Your menu     
choice can run a batch file, display an informational screen you        
create, or display another menu.  MCS allows up to 100 items per        
menu and there's no limit on the number of menus in a given menu set.   
                                                                        
The edit/construct mode uses "1-2-3 like" commands to walk you through  
the process of creating your own menu design.  There are no             
documentation manuals with this program -- that's how easy it is to     
use!  Ideal for the system consultant or computer pro who needs to      
create a user friendly environment for computer neophytes.  Full        
mouse and LAN support is provided.                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```






             ╔═════════════════════════════════════════════════╗
             ║                                                 ║
             ║          The Menu Construction Set 1.1          ║
             ║                                                 ║
             ║  (c) Copyright 1990 by Optimal Solutions of NH  ║
             ║           "Software solid as a rock"            ║
             ║                                                 ║
             ║       ...loading installation program...        ║
             ║                                                 ║
             ╚═════════════════════════════════════════════════╝
```
{% endraw %}

## MCS.DOC

{% raw %}
```

















                            THE MENU CONSTRUCTION SET

                  (c) 1990 by Optimal Solutions of New Hampshire









                                 TABLE OF CONTENTS
  
  Installation Instructions................................................1
  How to run MCS...........................................................1
  Licensing Information....................................................1
  Pricing/Licensing........................................................1
  Special Note for Turnkey 3.X users.......................................1
  Command Descriptions.....................................................2
  Top Level Commands.......................................................2
  Using the Add Command....................................................2
  Using the Edit Command...................................................3
  Using the Menu Command...................................................3
  Using the Global Command.................................................3
  Using the Set Command....................................................4
  Using the Run Command....................................................4
  Using the Xport Command..................................................4
  Using the Info Command...................................................4
  Using the Quit Command...................................................4
  Technical Support........................................................5
  Information about Reconfig - The DOS Configuration Manager...............5
  Order Form...............................................................6
  
  

                                                                          -1-
  INSTALLATION INSTRUCTIONS FOR THE MENU CONSTRUCTION SET
  
  Insert Installation Disk 1 into a floppy drive and then type:
  
                      A:       (or B: if you are using Drive B)
                      INSTALL
  
  The installation program will let you know when to insert Disk #2.  Older
  versions of MCS came on three diskettes, new versions come on two diskettes.
  
  
  HOW TO RUN THE MENU CONSTRUCTION SET
  
  Type MCS to run the menu authoring environment.
  Type MENU to run the menus that you have created with MCS.
  
  
  LICENSING INFORMATION FOR THE MENU CONSTRUCTION SET
  
  MCS is being distributed under the Shareware concept, which allows you to
  try the software first before buying.  You only pay for the software if you
  decide to use it.
  
  Upon receipt of your registration check, OSNH will send you the following:
  
                  o Latest version of MCS
                  o The User's Manual
                  o Automatic upgrade to MCS 2.0 (when available)
  
  Normally MCS is sold with a single user, single machine license.  However,
  you can purchase the LAN server license, which allows all PCs that connect
  to the server to run MCS at no additional cost.  Or, you can purchase the 
  unlimited run-time distribution license, which allows you to distribute
  an unlimited number of run-only versions of the menus you create.
  
  
  PRICING/LICENSING (Order form on last page)
  
     Single user, single machine license (retail $95).............$47.50
     LAN Server license (retail $295)............................$147.50
     Unlimited run-time distribution license (retail $295).......$147.50
  
  Send check or money order to:
        Optimal Solutions of NH, 6 Salem Road, Atkinson, NH 03811
  
  Hardware requirements are an IBM-compatible microcomputer with 384K memory 
  running DOS 2.0 or later, and a hard disk.
  
  
  SPECIAL NOTICE FOR TURNKEY 3.X USERS
  
  There is a conversion program called ConverTK which converts Turnkey 3.0
  and Turnkey 3.1 menus to Menu Construction Set format.  ConverTK is 
  available free with your MCS registration.
  
  

                                                                          -2-
  COMMAND DESCRIPTIONS for the MCS editor
  
  
  TOP LEVEL COMMANDS
  
  To execute any command in MCS, you must first press the slash (/) key.
  Then use the arrow keys to highlight your selection and press Enter, or
  just press the first letter of your selection as a shortcut.  For example,
  press the slash key (/) and then the letter A to execute the Add command.
  
  Add (/A):     Add a new item to the currently displayed menu.
  Edit (/E):    Make changes to the currently selected item.
  Menu (/M):    Make changes to settings related to the currently displayed
                menu only.
  Global (/G):  Make changes to settings related to all of the menus in the
                current menu set.
  Set (/S):     Menu set operations such as load, create, copy, or delete
                menu sets.
  Run (/R):     Run the current menu set.
  Xport (/X):   Export the current menu set to a diskette that can be
                installed to other PCs.
  Info (/I):    Information about The Menu Construction Set
  Quit (/Q):    Leave The Menu Construction Set (all changes are
                automatically saved).
  
  
  USING THE ADD COMMAND (/A)
  
  The Add command allows you to add a BatchFileItem (type /AB), a
  SubmenuItem (/AS), or an InfoScreenItem (/AI) to the currently displayed
  menu.  A BatchFileItem is an item which, when picked by the end user,
  executes a batch file.  A SubmenuItem is an item which, when picked by the
  end user, displays another menu.  An InfoScreenItem is an item which, when
  picked by the end user, displays one or more screenfuls of text.
  
  A BatchFileItem is composed of the following:
  - menu item name:  name which appears on the menu
  - help message:  optional message which appears on the bottom of the menu
    when the item is highlighted
  - password:  optional case-sensitive password for the item
  - argument prompt:  optional text which will be displayed upon selection
    of the item.  The end user will be able to supply arguments to the
    batch file
  - batch file:  the commands which are executed
  
  A SubmenuItem is composed of the following:
  - menu item name, help message, and password which operate the same as in
    a BatchFileItem
  
  An InfoScreenItem is composed of the following:
  - menu item name, help message, and password which operate the same as in
    a BatchFileItem
  - information screen which is displayed when the user selects this item.
    There is no limit on the length of the message, the user can use the
    PgUp/PgDn keys
  
  
  

                                                                          -3-
  USING THE EDIT COMMAND (/E)
  
  The Edit command allows you to edit previously defined menu items.  To use
  the Edit command, first select the item in the menu that you would like to
  change, and then press /E for Edit.
  
  
  USING THE MENU COMMAND (/M)
  
  The Menu command allows you to change settings that affect an entire menu.
  When you select the Menu command, a second layer of commands is displayed.
  
  Title (/MT):     The title of a menu is the line of text that appears at
                   the top of a menu.
  
  Colors (/MC):    Change the colors of the currently displayed menu only.
  
  Move (/MM):      Move the currently selected item to a different position.
  
  Item type (/MI): Change the currently selected item to a different item
                   type.  (BatchFileItem, SubmenuItem, or InfoScreenItem).
  
  Delete (/MD):    Delete the currently selected item.
  
  
  USING THE GLOBAL COMMAND (/G)
  
  The Global command allows you to make changes to settings related to all
  of the menus in the current menu set.
  
  Colors (/GC):     Change the colors of those portions of the screen
                    outside of individual menus.
  
  Date (/GD):       Display the date in the upper left hand corner or not.
  
  Time (/GT):       Display the time in the upper right hand corner or not.
  
  User help (/GU):  Define text that appears on the bottom line of the
                    screen.  For example, "Menus developed by ABC Company".
  
  Shadowing (/GS):  Use the shadowing effect on color monitors or not.
  
  Inactivity (/GI): Screen saver option.  Enter period of inactivity before
                    the screen saver is activated.  Enter 0 to disable the
                    screen saver.
  
  Escape (/GE):     Allow the end user to exit to DOS by pressing Escape,
                    or not.
  
  Wrapping (/GW):   Allow cursor wrapping or not.  A third setting is called
                    "Selective" - if a mouse is attached, wrapping is
                    disabled, but if there is no mouse, then wrapping is
                    enabled.
  
  LAN (/GL):        If multiple users are going to access the same menus
                    located on a network drive, then the batch files should
                    be placed on a local drive, typically drive C.  (Note
                    that a LAN Server License is required to legally install
                    MCS on a LAN Server.)
  
  
  

                                                                          -4-
  USING THE SET COMMAND (/S)
  
  The Set command allows you to manipulate entire menu sets.
  
  Load (/SL):      Load in an existing menu set.  Menu sets can also be
                   loaded when you invoke MCS - for example, MCS EXAMPLE
                   will automatically load the menu set called EXAMPLE.
                   When no argument is given (e.g. MCS), then the default
                   menu set is loaded (the default menu set is called
                   DEFAULT).
  
  Create (/SC):    Create a new menu set.
  
  Make copy (/SM): Make a copy of the currently loaded set.
  
  Erase (/SE):     Delete a menu set.  You cannot delete the currently
                   loaded set.
  
  
  USING THE RUN COMMAND (/R)
  
  The Run command runs the current menu set.  This is useful for quickly
  moving between the end user and authoring environments as you develop and
  debug your menu sets.  To "complete the loop", define a "Run MCS"
  BatchFileItem so that you can quickly switch environments.
  
  
  USING THE XPORT COMMAND (/X)
  
  The Xport command exports the current menu set to a diskette that can be
  installed on other PCs.  (Note that the purchase of an Unlimited Run-time
  Distribution License is required before you can install this diskette on
  other PCs.)
  
  
  USING THE INFO COMMAND (/I)
  
  The purpose of this command is similar to a README file.  It displays
  information pertaining to The Menu Construction Set.
  
  
  USING THE QUIT COMMAND (/Q)
  
  The Quit command exits The Menu Construction Set and returns you to DOS.
  Since menu information is continuously saved to disk as you use MCS, there
  is no need to save menu sets before you exit to DOS.
  
  
  

                                                                          -5-
  TECHNICAL SUPPORT
  
  Registered users can call 603-362-4758 for 24 hours a day, 7 days a week
  technical support.  If you are asked to leave a message, we will call you
  back as soon as possible.
  
  
  INFORMATION ABOUT RECONFIG - THE DOS CONFIGURATION MANAGER

  Reconfig is an extremely useful utility that allows the user to quickly
  change to various Autoexec.bat/Config.sys combinations.  PCM Magazine
  awarded Reconfig 2.1 a Publisher's Pick in its January 1989 issue.  Now
  Reconfig 3.1 is available for $39.50, and can be ordered directly from
  Optimal Solutions of NH.
  
  Currently, DOS users juggle multiple Autoexec.bat and Config.sys files by
  using DOS commands and a text editor.  Now they can use Reconfig with its
  integrated text editor and easy-to-use two-dimensional menus to maintain
  up to 100 different "configurations" (Autoexec.bat/Config.sys
  combinations).
  
  A key feature of Reconfig is its optional command line interface.  With
  just one DOS command, you can switch to a predefined DOS configuration and
  automatically reboot your machine.  Another useful feature is the ability
  to import any DOS text file, which means you won't have to retype your
  current Autoexec.bat and Config.sys files.
  
  And here's a sweetener.  If you buy Reconfig 3.1, you will receive Version
  4.0 of this indispensible utility automatically.  Even if there is a price
  increase, you will receive Version 4.0 at no charge.
  
  Hardware requirements for Reconfig 3.1 are 384K RAM, DOS 2.0 or later, and
  a hard disk.  As is true of all OSNH software products, Reconfig 3.1 is
  not copy protected.  For more information, see the RECONFIG.DOC file on
  MCS Installation Disk 1.
  
  

                                                                          -6-
  

  
                                ORDER FORM
  

                   Make check        Optimal Solutions of NH
                   payable to:            6 Salem Road
                                       Atkinson, NH 03811

          ============================================================
          Date:                          PO #:
          ============================================================
           Qty           Description                   Cost   Extension
          ------------------------------------------------------------
               |                                   |         |
               | The Menu Construction Set         |         |
               |    - Single user, single machine  |  $47.50 | $
               |    - LAN Server license           | $147.50 | $
               |    - Unlimited run-time license   | $147.50 | $
               |                                   |         |
               | Reconfig 3.1                      |  $39.50 | $
               | (plus free update to Version 4.0) |         |
               |                                   |         |
          ------------------------------------------------------------
                                                       Total: $

          Checks and money orders accepted.

               Name:
                     ------------------------------------------------
            Address:
                     ------------------------------------------------
                   :
                     ------------------------------------------------
               City:
                     ------------------------------------------------
              State:
                     ------------------------------------------------
                Zip:
                     ------------------------------------------------


           Comments:


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1924

     Volume in drive A has no label
     Directory of A:\

    README            2186   2-24-90   1:06p
    INSTALL  BAT       531   2-24-90   1:15p
    INSTALL  TXT       673   2-25-90   9:10a
    MCS_EDIT EXE    263878   4-01-90   7:31p
    MCS      DOC     14989   2-24-90   7:59p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       575   1-01-80   1:38a
    FILE1924 TXT      2369   7-13-90  11:30p
            8 file(s)     285239 bytes
                           32768 bytes free
