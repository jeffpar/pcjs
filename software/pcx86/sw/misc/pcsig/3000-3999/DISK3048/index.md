---
layout: page
title: "PC-SIG Diskette Library (Disk #3048)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3048/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3048"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FEATURES.TXT

{% raw %}
```
    NETMENU is an easy to use, network menu program.  It is designed to run on
any IBM PC or compatible computer running MS-DOS or PCDOS 3.x or higher and
works with most PC based network systems.


Features

Designed specifically for network use.
    NETMENU has the required file locking and multiple access to menu files
built in to the program. There is no need to worry about being locked out of a
menu file because someone else has it open.

Flexible configuration.
    NETMENU has been designed so that menu files may be located anywhere on the
network.  This flexibility allows different sets of menu files to be accessed by
different groups of users.

Minimal memory requirements.
    When programs are executed from NETMENU, a 5K loader program is all that is
left in memory. This allows even the largest programs to be loaded from NETMENU.

Unlimited number of menus.
    Each menu has 26 menu items lettered A-Z.  Each menu item may either invoke
an external .COM, .EXE. or .BAT file, an internal DOS command, or load another
menu.  This design allows an unlimited number of menus (limited only by disk
space).

Password protected menus and menu items.
    Each menu and/or menu item may be protected by a password the network
administrator defines. This will prevent unauthorized access to programs and
files that should only be available to certain users or groups.

Encrypted menus for security.
    Each menu is encrypted to prevent users from learning the passwords to
protected programs or menus.

Separate configuration program for security.
    A separate configuration program (NMCONFIG) is supplied to prevent access by
unauthorized users. The network administrator normally keeps this program in a
directory that only he has access to.

Built-in screen blanker.
    To prevent the image of the menu being burned into the screen during long
idle periods, NETMENU has been designed with a built-in screen blanker.

Built-in clock display.
    NETMENU has an on-screen clock which is displayed in the upper right corner
of the screen.  In addition, the heading of the screen displays the current day
of the week and date.

Mouse support.
    Menu items may be selected by pointing to them with a mouse and double
clicking the left mouse button.  To back through the menus, press the right
mouse button.

Customized menu heading.
    Two fifty (50) character lines of text may be defined during installation
for display at the top of the menu.  You can enter your organization's name and
the name of your network here or any other text you wish.

Prompts the user for parameters.
    Menu entries may be configured to prompt for user supplied parameters to
pass to the program that is to be run.

Description of each menu item.
    As the user moves through each menu item a one line description of each item
is displayed at the bottom of the menu.  This description can give the user a
better indication of the function of each menu item.
```
{% endraw %}

## FILE3048.TXT

{% raw %}
```
Disk No: 3048                                                           
Disk Title: Netmenu                                                     
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Netmenu                                                  
Author Version: 1.23                                                    
Author Registration: $200.00 per server                                 
Special Requirements: DOS 3.0+ on workstations.                         
                                                                        
NETMENU is a "plain-talking" menu system that will work on all LANs that
support DOS workstations. Like most menu systems, it lists the available
applications on the screen and lets the user select them. NETMENU will  
encrypt menus for security, includes a screen blanker, has mouse        
support, allows for customized menu headings, and supports an unlimited 
number of menus, password protected menus and menu items. NETMENU may   
not be as pretty as some other menus, but setup is quick and it gets the
job done.                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## NETMENU.TXT

{% raw %}
```
                     NETMENU Installation and Configuration


Introduction

    NETMENU is an easy to use, network menu program.  It is designed to run on
any IBM PC or compatible computer running MS-DOS or PCDOS 3.x or higher and
works with most PC based network systems.


Features

Designed specifically for network use.
    NETMENU has the required file locking and multiple access to menu files
built in to the program. There is no need to worry about being locked out of a
menu file because someone else has it open.

Flexible configuration.
    NETMENU has been designed so that menu files may be located anywhere on the
network.  This flexibility allows different sets of menu files to be accessed by
different groups of users.

Minimal memory requirements.
    When programs are executed from NETMENU, a 5K loader program is all that is
left in memory. This allows even the largest programs to be loaded from NETMENU.

Unlimited number of menus.
    Each menu has 26 menu items lettered A-Z.  Each menu item may either invoke
an external .COM, .EXE. or .BAT file, an internal DOS command, or load another
menu.  This design allows an unlimited number of menus (limited only by disk
space).

Password protected menus and menu items.
    Each menu and/or menu item may be protected by a password the network
administrator defines. This will prevent unauthorized access to programs and
files that should only be available to certain users or groups.

Encrypted menus for security.
    Each menu is encrypted to prevent users from learning the passwords to
protected programs or menus.

Separate configuration program for security.
    A separate configuration program (NMCONFIG) is supplied to prevent access by
unauthorized users. The network administrator normally keeps this program in a
directory that only he has access to.

Built-in screen blanker.
    To prevent the image of the menu being burned into the screen during long
idle periods, NETMENU has been designed with a built-in screen blanker.

Built-in clock display.
    NETMENU has an on-screen clock which is displayed in the upper right corner
of the screen.  In addition, the heading of the screen displays the current day
of the week and date.

Mouse support.
    Menu items may be selected by pointing to them with a mouse and double
clicking the left mouse button.  To back through the menus, press the right
mouse button.

Customized menu heading.
    Two fifty (50) character lines of text may be defined during installation
for display at the top of the menu.  You can enter your organization's name and
the name of your network here or any other text you wish.

Prompts the user for parameters.
    Menu entries may be configured to prompt for user supplied parameters to
pass to the program that is to be run.

Description of each menu item.
    As the user moves through each menu item a one line description of each item
is displayed at the bottom of the menu.  This description can give the user a
better indication of the function of each menu item.


Installation

    This documentation will show the basics for installing and using the
software on a Novell NETWARE network.  Other network operating systems are set
up in a similar manner.

    Login as SUPERVISOR.  Copy NMSMENU.EXE to a shared directory on the network,
i.e., SYS:PUBLIC.  This directory should be read-only to prevent unauthorized
tampering with the files. A drive mapping should be set up pointing to this
directory. We will use Z:\PUBLIC for the purposes of this documentation.  Copy
NMS_INST.EXE and ENCRYPT.EXE to a directory that only the SUPERVISOR has rights
to, i.e. SYS:SYSTEM.  Another drive mapping should point to this directory and
should be a search directory, that is, it should be included on the PATH.  From
the drive that points to the SYS:PUBLIC directory,(in this case Z:\PUBLIC)
execute the NMS_INST program to configure the title lines and create
NETMENU.COM.  By having the SYS:SYSTEM directory on the PATH and executing the
NMS_INST program from the Z:\PUBLIC directory, the NETMENU.COM program will be
generated in the proper place, namely the Z:\PUBLIC directory.  This is the
loader program for the NETMENU system.

    Next, manually set the following environment variables:

     set MENUFILE=<drv:\pathname>
     set MENUPROG=<drv:\pathname>
     set MENUTEMP=<drv:\pathname>

MENUFILE points to the drive and directory where the menu files are located,
MENUPROG points to the drive and directory where the network menu programs are
located, in this case Z:\PUBLIC and MENUTEMP points to the drive and directory
where temporary files will be written as well as the location of the
NMCONFIG.EXE program for the administrator.  The network administrators MENUTEMP
environment variable should point to a directory that is only accessible by the
network administrator.

    As an example, if the network drive and directory where the menu data files
are located is S:\NETMENU and the drive and directory where the menu programs
are located is Z:\PUBLIC then the set statements required would be:

     set MENUFILE=S:\NETMENU
     set MENUPROG=Z:\PUBLIC

    In addition, each user and the network administrator should have a network
drive that has read-write access.  If this directory were mapped as N:\ then the
MENUTEMP variable would be set as follows:

     set MENUTEMP=N:

    The system administrator may add these variables to each user's environment
in the system login script.  This way you will be sure to have the variables
setup properly.  This also allows the administrator to point different users or
groups to a different set of menu files simply by changing an environment
variable.  You may have to increase the size of your environment to accommodate
these additional variables.  This is done in your CONFIG.SYS file with a
statement like this:

    (DOS 3.2 and later)
        SHELL=C:\COMMAND.COM /E:512 /P

    (DOS 3.1)
        SHELL=C:\COMMAND.COM /E:62 /P

The first example increases the environment size from the default of about 160
bytes to 512 bytes.  The second example increases the environment to 62
paragraphs (16 bytes per paragraph).  This is the maximum for DOS 3.1.  DOS 3.2
and above allow environments up to 32768 bytes.

    Laptop users or users with monochrome displays can increase the
readabliblity of the menu screens by setting another DOS environment variable.
This is done like this:

     set MSDISP=MONO

This will tell netmenu that you have a display that is not capable of displaying
colors and automatically adjust for this. Users with color displays don't need
to set this variable at all.

    After setting the required environment variables, the network administrator
must initially execute NMCONFIG from the DOS prompt.  This will create a blank
menu file called MAIN.MNU.  THIS MUST BE DONE BEFORE INITIALLY STARTING NETMENU.
The beginning menu file MUST BE CALLED "MAIN.MNU" for the system to work
properly.  Additional menus created by the system administrator may have any
valid DOS filename.  Once the MAIN.MNU file has been created, press ESC to exit
NMCONFIG and then start the NETMENU system by typing NETMENU at the DOS prompt.
If the environment variables have been set correctly and the files copied to the
proper directories, the MAIN MENU will appear.


Files Included
 
    The ENCRYPT.EXE file encrypts and decrypts the menu data files.  This should
only be used for debugging purposes.  The files must be encrypted for use with
the NMSMENU program.  Running the ENCRYPT program with a menu filename on the
command line initially will decrypt the menu file. Running it again will encrypt
it.  The file may be viewed or edited while it is in its decrypted state.
     
    The NMS_INST program is used to configure the heading lines and create the
NETMENU.COM program.  It is normally only run once during the initial
installation.

    NMCONFIG.EXE is the menu configuration program.  It must be located in a
directory accessible only by the network administrator to prevent users from
changing the menus.  This directory is pointed to by the MENUTEMP environment
variable.  In the example above, this would be the network directory N:.


Theory and Operation

    The key to the operation of the system is the NETMENU loader program. This
program, first checks for the existence of the NMSMENU program in the directory
pointed to by the MENUPROG environment variable. If it is not found the program
will abort.  If found, the program loads the NMSMENU program.  The NMSMENU
program executes from a shared directory on the network and reads menu data
files from another shared network directory. The user selects a menu item either
by scrolling the highlighted bar and pressing ENTER, double clicking the left
mouse button when the mouse cursor is on the desired item or by pressing the
letter beside the desired item. From the menu information in memory, the program
determines if the selection is another menu or a command to be executed.  If it
is another menu, the menu information is loaded from the network file server.
If it is a command, a batch file is built and written to the directory pointed
to by the MENUTEMP environment variable.  After the batch file is written, the
NMSMENU program ends and is removed from memory.  The NETMENU loader program
then takes over, executing the batch file that was just created. When the batch
file completes, control is again returned to the NETMENU program which will then
reload the NMSMENU program and begin the cycle all over.  Two temporary files
are generated when executing a menu selection. These files are $$MENU$$.BAT
which contains the commands to execute the menu item and $RETURN$.FIL which
instructs NMSMENU which menu file to load so that it will return to the menu
that was loaded when the external program was run.  Another temporary file is
generated when the program is directed to pause after execution.  This file,
$PAUSE$.BAT, is created by NMSMENU and executed from the NETMENU loader program.
The existence of these files is usually transparent to the user as the system
deletes these files after they have been used.  Under certain circumstances,
i.e. the user's system hangs while running a program loaded with NETMENU, these
files will be left in the directory pointed to by the MENUTEMP environment
variable.  If these files are found in this directory they may be deleted
without harm.  If they are not deleted, the system will delete them
automatically.


Menu Navigation

    Navigation through the menus is simple and intuitive.  The desired menu item
is highlighted by moving the highlighted bar with the arrow cursor keys or
single clicking the left mouse button on the desired item.  To select the item
the user presses the ENTER key or may double click the left mouse button when
the mouse cursor is on the desired menu item.  Each lower level menu is loaded
in this way.  If it is desired to go to the previous menu, the user must press
ESCAPE or the right mouse button.  If the user wishes to return directly to the
Main Menu they should press Alt-M.  Alt-X will exit NETMENU immediately,
returning the user to the DOS prompt.  Alt-D allows the user to temporarily exit
to DOS to perform commands from the DOS prompt.  They should type EXIT to return
to NETMENU.  Additionally, the options shown on the bottom line may be selected
by double clicking the mouse on the area between the brackets ([  ]).
Experimentation will give the user a better feel for the way the menus are
navigated.


Menu Configuration

    The NMCONFIG program may be loaded from within NETMENU by pressing ALT-C or
double clicking the left mouse button on the symbol in the upper left corner of
the menu screen.  Remember, the NMCONFIG program should be located in a
directory that only the system administrator has access to and this directory
must be pointed to by the MENUTEMP environment variable.

    Once the configuration program loads, you may begin setting up the menus.
Pick the menu item you wish to configure by pressing the menu letter, using the
cursor keys to position the highlighted bar and pressing ENTER, or by double
clicking the left mouse button on the item you wish to configure. Another screen
will be displayed that will allow you to configure this menu item.

    Pressing "E" will allow you to edit this item, "D" will delete it and "ESC"
will take you back to the menu screen.  Press "E" to edit.

    The first item on the screen is the MENU ENTRY.  This is the text that will
be displayed in the menu for this item.  The next entry is the DESCRIPTION. This
text appears at the bottom of the screen when using the cursor keys to scroll
through the items.  This should be a brief description of the menu item.
 
    Next is the PATH\DIRECTORY specification.  This field is used to specify the
disk drive and directory where the command is located.  If you want to call
another menu using this menu item, enter "[menu]" in this field (without the
double quotation marks).  The word "menu" must be in lower case, enclosed by
brackets.  If you enter a path for the command, the batch file that is generated
first will change to the disk specified and then to the directory specified.
For example, if you enter Y:\UT for this entry the following commands are
generated in the batch file:

        Y:
        CD \UT

Be sure not to include a trailing backlash when entering a path\directory.

    The COMMAND field is used to specify the name of the program you wish to
execute. This may either be a .COM, .EXE, or a .BAT file.  If you entered
"[menu]" for the PATH\DIRECTORY field, the COMMAND field is used to specify the
name of the menu file you wish to call.  This may be any valid DOS filename, but
it is suggested that the .MNU extension be used to easily differentiate the menu
files from other files.
 
    As indicated by its name, the PAUSE AFTER EXECUTION field allows the results
of the executed file to remain displayed on the screen before returning to the
menu.  This field is used to allow the results of a program that normally
returns to DOS to remain displayed. You may press ENTER to supply the default
answer of "N" or type "N" or "Y".

    The next entry, PROMPT FOR PARAMETERS, allows you to specify if you want to
supply command line parameters to the program you will be executing.  As in the
previous item, pressing ENTER will supply the default answer of "N", or you may
type "Y" or "N". If "Y" is entered the next field to complete is the PROMPT TEXT
field.  This field is used to prompt the user for the information to supply on
the command line.  For example, if a filename is required to be entered on the
command line for a program that searches for the file on your hard disk you
might enter a prompt like this:

    Enter the filename to search for:

Whenever this menu item is selected the user will be prompted to enter a
filename.

    If "[menu]" was entered for the PATH/DIRECTORY field and a DOS filename was
entered for the COMMAND field, configuration will continue at the PASSWORD
field.  This field is used to protect either commands or menus that only
specific people are allowed to access.  Press ENTER to leave the password blank
or enter a password.  When this field is completed, you will be asked if what
you entered is correct.  If you answer "Y" the menu screen will re-appear,
otherwise you will be given another chance to edit your entries.  After
returning to the menu screen you may continue configuring menu items on this
menu, load another menu, or return to the menu program.

    Loading another menu is a simple process.  Highlight the desired menu item
using either the cursor keys or SINGLE clicking the left mouse button on the
item.  When the desired item is highlighted, press F1 to load the menu file that
is specified.  The system will attempt to load the filename that is described in
the COMMAND field for this menu item.  If the file does not exist, it will
prompt you for its creation.  If the item pointed to does not describe a new
menu file, an error message will be displayed alerting you that the item is not
a menu.


That's All Folks

    That's about all there is to it.  However, if you have any questions about
configuration or comments about the program in general, I can be reached via
U.S. Mail at the following address:

        Steve Burns
        19706 E. 14th Terrace North
        Independence, Missouri  64056


License Information

Agreement

    The NETMENU Network Menu System and all of its associated files are the
copyrighted property of Steven R. Burns and Computer Consulting Services.  You
are granted a limited license to use, copy, and distribute NETMENU provided the
following conditions are met:
        
    No fee above $10.00 may be charged for copying and distribution. NETMENU may
only be distributed in its original unmodified state.
        
    This software is distributed under the user supported software concept.
Though NETMENU is copyrighted, you are encouraged to copy and distribute this
program to others.  If you use this product, a registration fee of $200.00 for
each file server on which it is installed is required for continued use.
Network, Site, and Corporate licenses are available.  See the registration and
order form elsewhere in this manual.  All registered users receive technical
support and upgrade notices.  Call or write for information about commercial
distribution and dealer licenses.  In addition, registered users will receive at
no additional charge, a site license for PCMENU.  PCMENU has the same interface
as NETMENU, but runs on individual PC's.  This allows users to access programs
on their own PC's with the same interface as NETMENU. By making one entry in
their local menu they can access the network menus through NETMENU.


Disclaimer

    The author makes no representations or warranties with respect to the
contents hereof and specifically disclaims any implied warranties of
merchantability or fitness for any particular purpose. Further, the author
reserves the right to revise this publication and to make changes from time to
time in the content hereof without obligation of the author to notify any person
or organization of such revision or changes.


User Supported Software Concept

    NETMENU is user supported.  This means that you may copy it freely and give
the copies away to anyone you wish.  They are in turn requested to send in a
contribution if they decide to use it.

    The user supported software concept (also known as "shareware") is an
attempt to provide quality software at low cost.  Both the user and author
benefit from this plan.  The user will benefit by being able to "test drive"
software thoroughly before purchasing it.  The author benefits by being able to
enter the commercial software market while avoiding the high cost of commercial
distribution.

    This concept helps many independent authors and small companies that
otherwise would be discouraged from developing and promoting their ideas. It can
only work with your support.  If you obtain a user supported program from a
friend and are still using it after a few weeks, then it is obviously worth
something to you, and a contribution should be sent.

Registration Form

Send to:    Steven R. Burns
            19706 E. 14th Terrace North
            Independence, Missouri  64056

Network License fee for unlimited usage per server . . . . . . . $200.00

Site Licenses and Corporate Licenses are available.  Contact me at the address
above for prices.


        Name _____________________________________________

        Company __________________________________________

        Address __________________________________________

        City, State, Zip _________________________________

        Phone ____________________________________________

                 3.5" disks _____        5.25" disks _____


Where did you hear about NETMENU ______________________________________________

_______________________________________________________________________________


Please make checks payable from U.S. banks.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3048

     Volume in drive A has no label
     Directory of A:\

    NMCONFIG EXE     92584   2-29-92   8:49a
    NMSMENU  EXE     91784   2-29-92   9:20a
    NMS_INST EXE     56400   2-29-92   9:18a
    NETMENU  WP      24207   2-29-92  11:34a
    NETMENU  TXT     20537   2-29-92  11:42a
    FEATURES TXT      3027   2-29-92  11:05a
    HISTORY  LST     10456   2-29-92  11:13a
    FILES    LST       560   2-29-92  11:09a
    GO       TXT       616   6-28-92   6:11a
    GO       BAT        31   6-04-92   2:25a
    FILE3048 TXT      1703   6-30-92   3:38p
           11 file(s)     301905 bytes
                           14336 bytes free
