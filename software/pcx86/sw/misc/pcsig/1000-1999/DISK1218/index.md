---
layout: page
title: "PC-SIG Diskette Library (Disk #1218)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1218/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1218"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RECONFIG BY OPTIMAL"

    For the beginner, RECONFIG demystifies the combination of AUTOEXEC.BAT
    and CONFIG.SYS -- two files which tell your computer what to do when you
    first turn it on (anything from setting your path to loading memory
    resident programs).
    
    A great tool for the hard disk user, RECONFIG lets you create and
    quickly change to a different DOS configuration.  Instead of grabbing
    your DOS manual when you need to swap printers or drop your programs
    from memory, you'll make the needed change in minutes.  You can maintain
    multiple sets of your AUTOEXEC.BAT and CONFIG.SYS files, quickly
    transforming your DOS machine to a whole new environment.
    
    The program can maintain a database of up to 100 different
    configurations with its built-in editor and easy-to-use drop down menus.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1218.TXT

{% raw %}
```
Disk No: 1218                                                           
Disk Title: Reconfig                                                    
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: Reconfig                                                 
Author Version: 3.1                                                     
Author Registration: $39.50.                                            
Special Requirements: Hard drive.                                       
                                                                        
For the beginner, RECONFIG demystifies the combination of AUTOEXEC.BAT  
and CONFIG.SYS -- two files which tell your computer what to do when you
first turn your computer on (anything from setting your path to loading 
memory resident programs).                                              
                                                                        
A great tool for the hard disk user.  RECONFIG lets you create and      
quickly change to a different DOS configuration.  Instead of grabbing   
your DOS manual when you need to swap printers or drop your programs    
from memory, you'll make the needed change in minutes.                  
                                                                        
The program can maintain a database of up to 100 different              
configurations with its built-in editor and easy-to-use drop down menus.
                                                                        
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
║                 <<<<  PC-SIG Disk #1218  RECONFIG  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation, type:  COPY RECONFIG.DOC PRN (press ENTER)      ║
║                                                                         ║
║ To print installation instructions, type:  COPY README PRN (press ENTER)║
║                                                                         ║
║ To print Menu Construction Set, type:  COPY MCS.DOC PRN (press ENTER)   ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```






             ╔═════════════════════════════════════════════════╗
             ║                                                 ║
             ║                 RECONFIG 3.1                    ║
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

                  (c) 1989 by Optimal Solutions of New Hampshire









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
  
  The installation program will let you know when to insert Disks 2 and 3.
  
  
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
  Reconfig 3.0 is available for $39.50, and can be ordered directly from
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
  
  And here's a sweetener.  If you buy Reconfig 3.0, you will receive Version
  4.0 of this indispensible utility automatically.  Even if there is a price
  increase, you will receive Version 4.0 at no charge.
  
  Hardware requirements for Reconfig 3.0 are 256K RAM, DOS 2.0 or later, and
  a hard disk.  As is true of all OSNH software products, Reconfig 3.0 is
  not copy protected.
  
  

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
               | Reconfig 3.0                      |  $39.50 | $
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

## RECONFIG.DOC

{% raw %}
```




















                   RECONFIG 3.1 - THE DOS CONFIGURATION MANAGER

                  (c) 1990 by Optimal Solutions of New Hampshire

  













                               TABLE OF CONTENT
  
  Installation Instructions................................................3
  How to Run Reconfig......................................................3
  Licensing Information....................................................3
  Pricing..................................................................3
  Hardware Requirements....................................................3
  What is a Configuration?.................................................4
  The Configuration Editor.................................................4
  Getting Started..........................................................4
  Creating a New Configuration.............................................4
  Command Descriptions.....................................................5
  Using the Reconfig Command...............................................5
  Using the Name Command...................................................5
  Using the Autoexec.bat Command...........................................5
  Using the Config.sys Command.............................................5
  Using the Description Command............................................5
  Using the Print Command..................................................6
  Using the Delete Command.................................................6
  Using the Help Command...................................................6
  Importing Text Files into Reconfig.......................................6
  Technical Support........................................................6
  Information about The Menu Construction Set..............................6
  Order Form...............................................................7
  
  

  INSTALLATION INSTRUCTIONS

  Insert the installation disk into a floppy drive and then type:
  
                      A:       (or B: if you are using Drive B)
                      INSTALL

  During installation, your original AUTOEXEC.BAT and CONFIG.SYS files are
  copied to the Reconfig installation directory.  This is done as a safety
  precaution only.
  
  
  HOW TO RUN RECONFIG
  
  Type RECONFIG to enter the configuration editing environment.

  Type RECONFIG [configname] to automatically reconfigure your system to a
  predefined configuration.  For example, RECONFIG NORMAL changes your
  Autoexec.bat and Config.sys files to your normal configuration, and then
  automatically reboots your machine.  As a safety precaution, your previous
  configuration is kept in the AUTOEXEC.BAK and CONFIG.BAK files located
  in the Reconfig installation directory.

  Type RECONFIG NORMAL NOBOOT to change your system to its NORMAL configuration
  without rebooting after the change.

  
  LICENSING INFORMATION
  
  RECONFIG is being distributed under the Shareware concept, which allows you
  to try the software first before buying.  You only pay for the software if
  you decide to use it.
  
  Upon receipt of your registration check, OSNH will send you the following:
  
                  o Latest version of RECONFIG
                  o Latest version of the documentation
                  o Automatic upgrade to RECONFIG 4.0 (when available)
  
  
  PRICING (Order form on last page)
  
     Single user, single machine license (retail $79).............$39.50
     Reconfig Ten-Pack (60% discount from retail)................$316.00
     Reconfig 100-Pack (70% discount from retail)...............$2370.00
  
  Send check or money order to:
        Optimal Solutions of NH, 6 Salem Road, Atkinson, NH 03811
  

  HARDWARE REQUIREMENTS

  IBM-compatible microcomputer with 384K memory running DOS 2.0 or later, 
  and a hard disk.


  WHAT IS A CONFIGURATION?

  The Autoexec.bat file and the Config.sys file define your system's
  configuration.  Reconfig allows you to have more than one configuration.
  Reconfig quickly reconfigures your system by copying a predefined
  configuration to your Autoexec.bat and Config.sys files.  For example,
  RECONFIG NORMAL copies the NORMAL configuration from Reconfig's database 
  to C:\AUTOEXEC.BAT and C:\CONFIG.SYS, then automatically reboots the
  machine.  Rebooting is necessary so that the system will rerun the new
  Config.sys and Autoexec.bat files.


  THE CONFIGURATION EDITOR

  Type RECONFIG to enter Reconfig's configuration editing environment.
  Commands are along the top of the screen, and the names of the existing
  configurations are along the left side of the screen.  Use the left and
  right arrow keys to highlight a command, and use the up and down arrow
  keys to highlight a configuration.  Then press the Enter key to 
  simultaneously select the highlighted command and configuration.  For
  example, if both the Autoexec.bat command and the NORMAL configuration
  were highlighted when you pressed Enter, you would be placed in the 
  editor to edit the Autoexec.bat file for the NORMAL configuration.

  As you scroll through the configurations using the up and down arrow keys,
  the central part of the screen displays the Autoexec.bat and Config.sys
  files that are associated with the configuration that is currently 
  highlighted.  Each configuration also has an associated description line.

  To leave Reconfig, press the Escape key.


  GETTING STARTED

  During the Install process, Reconfig imports your current Autoexec.bat
  and Config.sys files into the configuration called NORMAL.  Reconfig also
  creates a simple but useful configuration called MINIMAL.  The MINIMAL
  configuration is useful when you want an environment with no memory-resident
  programs in your Autoexec.bat and no device drivers in your Config.sys.
  
  Note that if your system requires a device driver to see your hard disk
  or floppy disk, it would be a good idea to include the device driver in
  your MINIMAL configuration.


  CREATING A NEW CONFIGURATION
  
  The last configuration is always called "New Config".  To create a new
  configuration, highlight "New Config", and either the Name, Autoexec.bat,
  Config.sys, or Description commands, then press Enter.  The contents of the 
  new configuration will be identical to the last configuration edited.


  COMMAND DESCRIPTIONS

  When each command is highlighted, a single line of help appears just below
  the main command line. 

  
  USING THE RECONFIG COMMAND

  The Reconfig command copies the highlighted configuration's Autoexec.bat and
  Config.sys files to the C:\AUTOEXEC.BAT and C:\CONFIG.SYS files.  You are 
  then asked to type Y if you would like to reboot the machine immediately. 

  Note that if the highlighted configuration is "New Config", then this 
  command has no effect.


  USING THE NAME COMMAND

  The Name command allows you to change the name of the highlighted
  configuration.  Be warned that after you change the name and press Enter,
  the configurations will be re-sorted.

  You can use the Name command to create a new configuration.  See "Creating
  a New Configuration" above.


  USING THE AUTOEXEC.BAT COMMAND

  The Autoexec.bat command allows you to change the Autoexec.bat file
  associated with the highlighted configuration.  When you select the
  Autoexec.bat command, you are placed in a full-screen editor.  F2 will
  save the changes you make, and Escape will abandon the changes made.

  You can use the Autoexec.bat command to create a new configuration.  See 
  "Creating a New Configuration" above.


  USING THE CONFIG.SYS COMMAND

  The Config.sys command allows you to change the Config.sys file associated
  with the highlighted configuration.  When you select the Config.sys command,
  you are placed in a full-screen editor.  F2 will save the changes you make,
  and Escape will abandon the changes made.

  You can use the Config.sys command to create a new configuration.  See 
  "Creating a New Configuration" above.


  USING THE DESCRIPTION COMMAND

  The Description command allows you to change the Description associated with
  the highlighted configuration.  The Description can be useful to help explain
  the purpose of a configuration.

  You can use the Description command to create a new configuration.  See 
  "Creating a New Configuration" above.


  USING THE PRINT COMMAND

  The Print command allows you to print out all of the configurations.  When
  you select the Print command, Reconfig will ask you for a file name to output
  to.  If you want to print to a printer rather than to a file, enter PRN: as
  the file name.  

  Note that it does not matter which configuration is highlighted when you
  select this command, because all configurations are printed.


  USING THE DELETE COMMAND

  The Delete command allows you to delete the highlighted configuration.  After
  you select the Delete command, you will be asked to confirm your deletion
  request by pressing Y.  Any other key will abandon the deletion operation.

  Note that you cannot delete the configuration called "New Config".


  USING THE HELP COMMAND

  The Help command gives some simple on-line help, just to get you started.
  Note that it does not matter which configuration is highlighted when you
  select this command.


  IMPORTING TEXT FILES INTO RECONFIG

  1) reconfig -I configname autoexecfile configsysfile         {import both}
  2) reconfig -IA configname autoexecfile             {import autoexec only}
  3) reconfig -IC configname configsysfile          {import config.sys only}

  where configname is the exact name of a configuration,
  autoexecfile is the fully specified file name of an autoexec.bat file, and
  configsysfile is the fully specified file name of a config.sys file

  Examples:  RECONFIG -I WINDOWS C:\AUTOEXEC.WIN C:\CONFIG.WIN
             RECONFIG -IA NORMAL C:\AUTOEXEC.OLD
             RECONFIG -IC NORMAL C:\CONFIG.SYS

  Note that if a configname does not exist, a new configuration will
  automatically be created.  Also, if a specified text file does not exist,
  the import operation will be aborted.


  TECHNICAL SUPPORT
  
  Registered users can call 603-362-4758 for 24 hours a day, 7 days a week
  technical support.  If you are asked to leave a message, we will call you
  back as soon as possible.
  
  
  INFORMATION ABOUT THE MENU CONSTRUCTION SET

  The Menu Construction Set is another fine program developed by OSNH.  There
  is a file called MCS.DOC on the distribution disk which explains what The 
  Menu Construction Set is and how it works.
 




                                ORDER FORM


                   Make check        Optimal Solutions of NH
                   payable to:            6 Salem Road
                                       Atkinson, NH 03811

          =============================================================
          Date:                          PO #:
          =============================================================
           Qty           Description                  Cost    Extension
          -------------------------------------------------------------
               |                                   |         |
               | Reconfig 3.1                      |  $39.50 | $
               | (includes free upgrade to V 4.0)  |         |
               |                                   |         |
               | Reconfig Ten-Pack (60% discount)  | $316.00 |
               |                                   |         |
               | Reconfig 100-Pack (70% discount)  |$2370.00 |
               |                                   |         |
               |                                   |         |
               | Menu Construction Set 1.0         |         | 
               |               Single User License |  $47.50 | $
               |                LAN Server License | $147.50 | $
               |   Unlimited Run-time Distribution | $147.50 | $
               |                                   |         |
          ------------------------------------------------------------
                                              Total enclosed:  $

          Checks or money orders accepted.

          Your Name:
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

## RECONFIG.TXT

{% raw %}
```






             ╔═════════════════════════════════════════════════╗
             ║                                                 ║
             ║                 RECONFIG 3.1                    ║
             ║                                                 ║
             ║  (c) Copyright 1990 by Optimal Solutions of NH  ║
             ║           "Software solid as a rock"            ║
             ║                                                 ║
             ║             ...loading program...               ║
             ║                                                 ║
             ╚═════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1218

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT       495   1-01-90  12:01a
    README            4639   2-17-90  10:38a
    RECONFIG DOC     13176   2-24-90   9:25a
    RECONFIG EXE    204566   2-24-90   9:25a
    RECONFIG TXT       673   2-24-90   7:21a
    INSTALL  TXT       673   2-24-90   8:25a
    MCS      DOC     14830   1-01-90  12:03a
    GO       TXT       727   1-01-80   3:26a
    FILE1218 TXT      1999   7-10-90   4:26p
    GO       BAT        40   1-01-80  12:48a
           10 file(s)     241818 bytes
                           76800 bytes free
