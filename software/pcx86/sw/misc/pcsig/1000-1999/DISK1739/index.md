---
layout: page
title: "PC-SIG Diskette Library (Disk #1739)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1739/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1739"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLOPPY DISK MENU SYSTEM"

    Attention floppy disk users!   Have you ever been frustrated by
    cumbersome DOS syntax?  Have you ever accessed a floppy only to
    discover
    you didn't remember the commands to start your program?  ROKMAR FLOPPY
    DISK MENU SYSTEM is a program designed especially for you!
    
    With ROKMAR FLOPPY MENU DISK SYSTEM you enter DOS commands, program
    names, or batch files on a menu only once.  Now, they are always
    available at the touch of a key!  Easy to use and to set up.  No need to
    spend hours learning a complicated menu language.  Only DOS and batch
    file commands are used.
    
    Not a lot of room to spare on those floppies?  ROKMAR FLOPPY DISK MENU
    SYSTEM comes in two compact sizes, 14K or 25K and allows you to save
    different menus on each floppy.  In addition, eight convenient
    utilities
    are included to help you manage your files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1739.TXT

{% raw %}
```
Disk No: 1739                                                           
Disk Title: Floppy Disk Menu System                                     
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Floppy Disk Menu System                                  
Author Version: 1.1                                                     
Author Registration: $6.95                                              
Special Requirements: None.                                             
                                                                        
Attention Floppy Disk Users!   Have you ever been frustrated by         
cumbersome DOS syntax?  Have you ever accessed a floppy only to discover
you didn't remember the commands to start your program?  ROKMAR FLOPPY  
DISK MENU SYSTEM is a program designed especially for you!              
                                                                        
With ROKMAR FLOPPY MENU DISK SYSTEM enter DOS commands, program names,  
or batch files on a menu only once.  Now, they are always available at  
the touch of a key!  Easy to use and to set-up.  No need to spend hours 
learning a complicated menu language.  Only DOS and batch file commands 
are used.                                                               
                                                                        
Not a lot of room to spare on those floppies?  ROKMAR FLOPPY DISK MENU  
SYSTEM comes in two compact sizes, 14K or 25K and allows you to save    
different menus on each floppy.  In addition, eight convenient utilities
are included to help you manage your files.                             
                                                                        
                                                                        
                                                                        
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
║             <<<<  Disk #1739  FLOPPY DISK MENU SYSTEM  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: FDMENU                                          ║
║                                                                         ║
║ To print documentation, type: COPY MANUAL.DOC PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INPUT.DOC

{% raw %}
```
                               ROKMAR Utilities
       
                              Copyright (c) 1989
       
       
       
       INPUT
       
       INPUT {Input message/prompt},{selections}
       
            This  utility  is a handy batch tool to  create  interactive 
       batch files. It displays a user created message; the utility then 
       waits  until the user keys in a letter or number which is one  of 
       the  selections  from  the  command line.  The  location  of  the 
       character  inside the selections string corresponds to the  value 
       the utility returns inside the DOS errorlevel register.
       
       This is very confusing, so here is an example:
        
       INPUT Enter the selection number,123
       
       The utility will display:
       
       Enter the selection number
       
       and  wait for the user to enter either 1 or 2 or 3.  The  command 
       will  not accept anything else. If the user enters a 1, then  the 
       errorlevel register inside DOS will be set to 1.
       
       An  example  for  the use of this utility  is  include  in  file: 
       INPMENU.BAT
       
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
                        ROKMAR Floppy Disk Menu System  
       
                              Quick Install Guide
       
            This product is configurable in two sizes, 14K or 25K.  This 
       document  will discuss the installation procedure for the  larger 
       configuration.   This  is  to  familiarize  the  user  with   the 
       functionality  and  ease of use of the system and save  the  more 
       advanced details for later.
            The installation of the smaller 14K menu system is discussed 
       in the general system manual (MANUAL.DOC). 
       
            This  system is designed to be small in size to fit  on  the 
       disk  along with the application or system software.  This  means 
       that each disk can contain its own menu. Once the menu system  is 
       installed on your disks, each new menu will appear when the  disk 
       is swapped and the "Z" key is pressed.
       
       !!!! Before doing anything, make a backup of the menu system !!!!
       
       To Install:
       
       Files required on disk:
       COMMAND.COM       (DOS command executor; a DOS system file)
       FDMENU.EXE        (Menu program)
       FDMENU.CFG        (The data file with the menu configuration)
       FDMAINT.HLP       (The system help file {optional})
       AUTOEXEC.BAT      (This is only if creating a bootable disk)
       
       Step 1.  Format disk     (This example is for a floppy disk)
                FORMAT A:/V     (To create a non-bootable disk)
                FORMAT A:/S/V   (To create a bootable disk)
       
       Step 2.  If disk is non-bootable, copy the COMMAND.COM file  from 
                your  DOS  system disk to this disk. If  this  disk  was 
                formatted  as bootable, the COMMAND.COM file is  already 
                on your disk.
                COPY A:COMMAND.COM B:   (This may vary depending on your
                                         hardware configuration)
       
       Step 3.  Copy the menu system from the ROKMAR system disk to this 
                disk.
                COPY A:FDMENU.EXE B:    (This may vary depending on your
                COPY A:FDMENU.CFG B:     hardware configuration)
                COPY A:FDMAINT.HLP B:
                COPY A:AUTOEXEC.BAT B:  (If the disk is bootable)
       
       
            The  disk  is ready to use. Copy the application  or  system 
       software to this disk.
       
            The system is simple. Can you operate it without reading the 
       manual? What can it hurt?
       
            Hint: Press F1 in the maintenance part of the menu system for 
       on-line assistance to configure the menu for your needs.
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```
       
       
                               LICENSE AGREEMENT
       
       
                  (C) Copyright 1989, ROKMAR Computer Systems
                             All rights reserved.
       
       ROKMAR  Computer Systems grants the user the right to  reproduce, 
       distribute  and  use copies of ROKMAR Floppy  Disk  Menu  System, 
       Version 1.0 programs and documentation providing that no  payment 
       or commercial benefit, other than a reasonable distribution  fee, 
       be  charged  without  written  permission  from  ROKMAR  Computer 
       Systems,  and  that  no  modifications be  made  to  programs  or 
       documentation. 
       
       ROKMAR  products  are  being  constantly  updated  and  enhanced. 
       Payment of $6.95 entitles the user for an updated version of  the 
       system as it becomes available, and notices of enhancements. Your 
       support enables this "shareware" distribution system to continue, 
       allowing you to test the usefulness of a system on your  hardware 
       before   you   purchase  it.  Your  payment  would   be   greatly 
       appreciated. 
       
       Send payment to:
                              Robert O. Keith Jr.
                                29668 Dixon St.
                              Hayward, Ca. 94544
       
       
              
                                  DISCLAIMER
              
       RokMar  Computer  Systems will not be liable for any  damages  or 
       claims  related  in  any  way to the  use  of  this  product  and 
       disclaims   all   warranties  or  implied   warranties   by   the 
       distributor.
       
       
                               REGISTRATION FORM
       
       To obtain the latest release of this product, please fill out the 
       form below.
       
       Date:    _____________
       
       Name:    _____________________________________
       
       Company: ________________________________________________________
       
       Address: ________________________________________________________
       
                ________________________________________________________
       
                ________________________________________________________ 
       
       
       Quantity  Description                          Cost     Total
       
       ________  ROKMAR Floppy Disk Menu System       $6.95    _________
       
       ________  ROKMAR HouseHold/Office Inventory    $15.00   _________
       
                 Shipping cost if overseas add $10.00          _________
                 If diskette format is 3.5, add $2.00 per      _________
                 Indicate format  5.25[ ] or 3.5 [ ]
       
                                                       TOTAL:  =========
       
       
                                   COMMENTS
       
       Your  comments  and suggestions about this  product  are  greatly 
       appreciated.  Please comment on short comings or  suggestions  on 
       how this product could possibly better suit your needs.
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
       
       _________________________________________________________________
              
       
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
       
       
       
       
       
       
       
       
       
       
       
       
       
                        ROKMAR Floppy Disk Menu System
       
                                  Version 1.1
       
                                 System Manual
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
                            ROKMAR Computer Systems
                                2089 East Kern
                               Tulare, CA  93274
       
       
       
       
                        ROKMAR FLOPPY DISK MENU SYSTEM             
       
       
                                    FEATURES
       
       
       
               * Configurable to only 14K RAM and disk space
               * Configure to 1.5K for hard drive or dual diskette
                   systems
               * Designed specifically for floppy disk systems,
                   displays new menu when disks are swapped
               * Each disk can contain its own menu
               * Ideal for laptop or portable machines
               * Extend the realm of your hard disk menu system to 
                   include diskette storage
               * Easy to use, no user training necessary
               * Execute applications and commands with one keystroke,
                   no need to remember the tricky syntax
               * Executes any program, DOS command or BAT file
               * Isolate users from the confusing and cumbersome DOS
                   language
               * Setup new menus in minutes; utilizes the full power 
                   of DOS
               * No need to learn complicated menu languages;
                   setup menu with a simple data entry screen
               * On-line help available
       
       
       
       
       
                        ROKMAR FLOPPY DISK MENU SYSTEM             
       
       
       
       
       
       
       
       
       
       
       
       
       
                                       INDEX
       
                         Copyright Notice ............ 1
                         What Is It .................. 2
                         Installation ................ 3
                         Program Usage ............... 4
                         Menu System Usage ........... 13
       
                         Appendices
                         Field Editing ............... 17
                         Example Menu Setups.......... 18
                         Useful DOS Commands ......... 20
                         FDRPT - Report Program ...... 21
                         Technical Info .............. 22
       
       
       
                                COPYRIGHT NOTICE                 Page  1
       
       This  software  product  is the copyrighted  property  of  ROKMAR 
       Computer  Systems,  and  the usual  shareware  limited  agreement 
       applies:
       
       1.  No  fee may be charged for the retail sale  of  this  product 
       other than a reasonable copy and distribution charge.
       
       2.  This  product  may only be distributed in  its  original  and 
       complete form, including documentation and copyright notice.
       
       3.  This product may not be distributed, whole or in any part  as 
       a  section  or  part of any commercial  product  without  written 
       permission of ROKMAR COMPUTER SYSTEMS. 
       
       
                                   DISCLAIMER
       
       ROKMAR Computer Systems, its owners or other related parties will 
       not be liable for any damages or claims related in any way to the 
       use  of  this  product and disclaims all  warranties  or  implied 
       warranties by the distributor. 
       
       Other  than these minor trivialities, feel free to copy and  give 
       out  as  many  copies  of this product as  you  wish.   Place  an 
       archived version on any BBS.
       
       Should  this system prove to be useful and provide a  service  to 
       you, send $6.95 to:
       
                              Robert O Keith, Jr.
                                2089 East Kern
                              Tulare, CA   93274
       
       This  will  include you in our records as a registered  user  and  
       entitle you to a free copy of the next enhancement to this system 
       along  with other utilities and programs that we can fit  into  a 
       diskette. ROKMAR computer programs are constantly being enhanced. 
       Registering  will  allow  us  to  keep  you  informed  of   these 
       enhancements.
       
       Anything you might send: $, suggestions, problems will be greatly 
       appreciated. 
       
       Enjoy...
       
       
       
                                  WHAT IS IT?                    Page  2
       
       
       What is a removable disk menu system?
       
            A  menu system is a DOS command executor, similar to  a  DOS 
       shell. What it does is:
            - to store one or many sometimes complicated and  cumbersome 
       commands  in a group which will accomplish something, like run  a 
       program or backup a disk drive,
            - present these command sets on the screen in the form of  a 
       catalog or list and,
            - provide  a means of conveniently executing these  commands 
       or group of commands by simply pressing a key.
        
            The  system  should  pop right back  after  the  command  is 
       finished and allow another command to be executed.
       
            This menu system is designed specifically for removable disk 
       systems.  Each  disk  or  cartridge  can  contain  its  own  menu 
       installation. As a disk is swapped with another, pressing the "Z" 
       key will display the new system title and new menu selections. 
       
            This system will work for hard disk systems, but in order to 
       keep the program module sizes to a minimum, certain features were 
       dropped.  These features are typically not necessary  for  floppy 
       disk  systems  where on hard disk systems, several users  may  be 
       sharing  the  same disk and security becomes an  issue  (in  rare 
       cases). Several hard disk users currently use this system instead 
       of another because of its simplicity.
       
            Still  hard disk users typically will keep many  less  often 
       used programs on removable disks and not use up space on the hard 
       drive.  If  these disks contained a menu installation,  then  the 
       command syntax would not have to be remembered. If the hard  disk 
       had a menu, then one menu selection on the hard disk might be  to 
       run the menu of the floppy disk.
       
                                                                 Page  3
                                 INSTALLATION
       
       INSTALLING UP THIS SYSTEM ON YOUR COMPUTER.
       
       Make a copy of this disk for your own backup at once!
       
            Because  of  the  variety  of  hardware  configurations,  an 
       installation  program  is  not included.  The  core  system  only 
       contains  a few files, so simply copying the files one at a  time 
       only takes a few seconds.
       
            This  system is designed to be small in size to fit  on  the 
       diskette along with application and/or operating system software. 
       This means that each disk can contain its own menu. Once the menu 
       system is installed on your disks, each new menu will appear when 
       the disk is swapped and the "Z" key is pressed.
       
            This  product is configurable in three sizes, 1.5K, 14K  and 
       25K. The difference in the three is the 25K program contains  the 
       maintenance   program  inside  the  menu  program.   Having   the 
       maintenance  module contained with the menu system is  convenient 
       if  menu maintenance is needed often, otherwise it is not  needed 
       and   the  programs  are  otherwise  interchangeable.  The   1.5K 
       configuration is for multiple disk systems. This configuration is 
       the best and most convenient of the three, and is discussed in an 
       appendix at the end of this manual. The following discussion  for 
       installation is still necessary to use the 1.5K menu.
       
            Reasons to use the 14K program:
            -  24K disk space is not available along with  the  existing 
               software
            -  24K  RAM  is not available  above  the  existing  systems         
               executing     
            -  It is desirable to disallow users from modifying the menu 
               selections
       
       If none of these apply, use the larger program configuration. 
       It's simpler.
       
       The  menu  system   requires these files  be  contained  in   the 
       diskette. Whether you copy them there or begin with a copy of the 
       distributed diskette and delete the unneeded files is up to  you. 
       Detailed instructions for setting up the first disk with the menu 
       installed  are contained inside file INSTALL.BAT. 
       
                                PROGRAM USAGE                    Page  4
       
       
       
       25K Configuration
           COMMAND.COM
           FDMENU.EXE
           FDMENU.CFG
           FDMAINT.HLP
       
       14k Configuration
           COMMAND.COM
           FDMENU2.EXE
           FDMENU.CFG
       
       The  14k  configuration will also need the  program  FDMAINT.EXE, 
       either on the same diskette or somewhere else.
       
       
       
       The main system files are:
           FDMENU.EXE   - The main menu program w/maintenance module
           FDMENU2.EXE  - The main menu program w/o maintenance
           FDMENU.CFG   - The menu configuration file
           FDMAINT.EXE  - External menu maintenance program
           FDMAINT.HLP  - Help screens for maintenance program
       
                                                                  Page 5
       
       
       FDMENU.EXE
       
       FDMENU [drive:][path][configfile]
       
       The main menu program including the maintenance module.
       
       PARAMETERS
       
       drive:  -  The  drive  letter of  the  disk  which  contains  the 
       configuration file. When the program is begun, a config file must 
       exist  on that drive for the menu program to be able to  load  an 
       initial menu. This drive becomes the default drive and at the end 
       of  each command line, the menu resets the current drive back  to 
       this drive.
       
         Default: The drive where the menu program is executed from.
       
       
       path - The directory which contains the configuration file.  When 
       the program is begun, a config file must exist in this  directory 
       for  the  menu program to be able to load an initial  menu.  This 
       directory  becomes the default directory path and at the  end  of 
       each command line, the menu resets the current drive back to this 
       directory.
       
         Default: The directory where the menu program is executed from.
       
       
       configfile - The menu configuration file. This file contains  the 
       command  titles,  the  specific  disk title,  and  the  group  of 
       commands  themselves.
         
         Default: FDMENU.CFG   
       
                                                                  Page 6
       
       
       SCREEN:
       -----------------------------------------------------------------
       05/05/1989          ROKMAR Floppy Disk Menu System    Version 1.0
       
                           ******* Disk Title     *******
       
       
       A - Format Disk in Drive A         I - ROKMAR HouseHold Inventory          
       
       B - Copy Disk (A -->B)             J - 
       
       C - Check disk A for errors        K -          
       
       D - Print a file                   L -          
       
       E - Show disk label                M -          
       
       F -                                N - Star Wars (Shoot-em-up)
       
       G -                                O - Chess program (Sargon)
       
       H - Run Basic                      P - Black Jack (Basic program)
       
       
       F9- Update Menu                    Z - Reload Menu Configuration
                                              (Press after changing disks)
       
       Press  the  letter for the selection.                 (ESC  exits 
       menu)
       -----------------------------------------------------------------
       
                                                                  Page 7
       
       
       To  run  a command, simply press the preceding letter.  When  the 
       command(s) are complete or exited, the menu will take over  again 
       and display the menu on the screen.
       
       Pressing  F9  will place you inside the  maintenance  module  and 
       screen.
       
       Pressing  the  Z  key  will  cause  the  program  to  reread  the 
       configuration  file  and  redisplay the  changed  menu.  This  is 
       usually done when a different disk is inserted into the drive.
       
       To exit from the menu system, press the ESC key. The program will 
       confirm  that  you  want to leave the  menu  system  on  purpose. 
       Pressing the Y key will cause the menu system to terminate.
       
       
                                                                  Page 8
       
       
       FDMENU2.EXE
       
       FDMENU2 [drive:][path][configfile]
       
       The main menu program without the maintenance module.
       
       
       PARAMETERS
       
       drive:  -  The  drive  letter of  the  disk  which  contains  the 
       configuration file. When the program is begun, a config file must 
       exist  on that drive for the menu program to be able to  load  an 
       initial menu. This drive becomes the default drive and at the end 
       of  each command line, the menu resets the current drive back  to 
       this drive.
       
         Default: The drive where the menu program is executed from.
       
       
       path - The directory which contains the configuration file.  When 
       the program is begun, a config file must exist in this  directory 
       for  the  menu program to be able to load an initial  menu.  This 
       directory  becomes the default directory path and at the  end  of 
       each command line, the menu resets the current drive back to this 
       directory.
       
         Default: The directory where the menu program is executed from.
       
       
       configfile - The menu configuration file. This file contains  the 
       command  titles,  the  specific  disk title,  and  the  group  of 
       commands  themselves.
         
         Default: FDMENU.CFG   
       
       
                                                                  Page 9
       
       
       SCREEN:
       -----------------------------------------------------------------
       05/05/1989          ROKMAR Floppy Disk Menu System    Version 1.0
       
                           ******* Disk Title     *******
       
       
       A - Format Disk in Drive A         I - ROKMAR HouseHold Inventory          
       
       B - Copy Disk (A -->B)             J - 
       
       C - Check disk A for errors        K -          
       
       D - Print a file                   L -          
       
       E - Show disk label                M -          
       
       F -                                N - Star Wars (Shoot-em-up)
       
       G -                                O - Chess program (Sargon)
       
       H - Run Basic                      P - Black Jack (Basic program)
       
       
                                          Z - Reload Menu Configuration
                                              (Press after changing disks)
       
       Press  the  letter for the selection.                 (ESC  exits 
       menu)
       -----------------------------------------------------------------
                                                                 Page 10
       
       
       To  run  a command, simply press the preceding letter.  When  the 
       command(s) are complete or exited, the menu will take over  again 
       and display the menu on the screen.
       
       Notice that the Update Menu selection is not there. This is the 
       only change from FDMENU.
       
       Pressing  the  Z  key  will  cause  the  program  to  reread  the 
       configuration  file  and  redisplay the  changed  menu.  This  is 
       usually done when a different disk is inserted into the drive.
       
       To exit from the menu system, press the ESC key. The program will 
       confirm  that  you  want to leave the  menu  system  on  purpose. 
       Pressing the Y key will cause the menu system to terminate.
       
       
                                                                 Page 11
       
       
       FDMAINT.EXE
       
       FDMAINT [configfile]
       
       This  is  an external menu maintenance program. Notice  that  the 
       configuration file is selectable on the command line. This allows 
       you to update the configuration file from another disk.  Example, 
       if the menu is installed on the disk on drive A, the  maintenance 
       program  can be run from drive B to update the menu on  drive  A. 
       This is useful in conjunction with the small menu program without 
       its own update module.
       
       USAGE: FDMAINT A:FDMENU.CFG
              (Notice the drive letter is included)
       
       PARAMETERS
       
       configfile - The menu configuration file. This file contains  the 
       command  titles,  the  specific  disk title,  and  the  group  of 
       commands themselves. The default for this is FDMENU.CFG.
       
       SCREEN:
       -----------------------------------------------------------------
       05/05/1989          ROKMAR Floppy Disk Menu System    Version 1.0
       
                                                     Press F1 for Help
                                                     Press F2 to Update
                                                     Press Esc to Exit
       
                           ******* Disk Title     *******
       A - Format Disk in Drive A         I - ROKMAR HouseHold Inventory          
       B - Copy Disk (A -->B)             J - 
       C - Check disk A for errors        K -          
       D - Print a file                   L -          
       E - Show disk label                M -          
       F -                                N - Star Wars (Shoot-em-up)
       G -                                O - Chess program (Sargon)
       H - Run Basic                      P - Black Jack (Basic program)
       
           Selection:   _         (A -> P  or  * = DISK TITLE)
           Description: _________________________
           Command:     ________________________________________________
       
       Enter the selection, then overtype the desired data. F2 updates.   
       -----------------------------------------------------------------
                                                                 Page 12
       
       
       The top part of the screen contains a display of the current menu 
       configuration including the disk menu title. As each selection of 
       the menu is updated, the menu display is refreshed.
       
       FIELDS
       
       SELECTION:  This  element  is the  selection  letter.  The  valid 
       letters  are A through P and *. Entering the * in  the  selection 
       field will allow the disk menu title to be updated.
       
       DESCRIPTION: This is the selection description which will  appear 
       on  the  screen  and describe the program, system  or  action  to 
       happen when that selection is chosen.
       
       COMMAND: This is the field where the commands themselves actually 
       reside.  One  or  more  commands can  be  placed  on  this  line, 
       delimited by a tilde (~). Any command that can be entered at  the 
       DOS  prompt  (A>)  can be entered here. There  is  no  difference 
       between  each command. The menu handles each command the same  as 
       DOS  would  require,  using the same  input  format.  Appendix  A 
       contains examples of this. 
       
       
                                                                 Page 13
                                 MENU SYSTEM USAGE
       
       The system can either be started automatically when the  computer 
       is  booted  by placing the command in the AUTOEXEC.BAT  file,  or 
       once the menu program is running, swapping disks and pressing the 
       Z  key  will reload the next disk's menu configuration  file  and 
       display this on the screen. 
       
       Once  the menu us running, it waits for a selection to  be  made. 
       The  computer  can be shut off anytime without exiting  the  menu 
       program.
       
       The command to run the menu program is:  FDMENU
       (or FDMENU2 if you are using the smaller menu program)
       
       Points to know and keep in mind in setting up the menu:
         (full explanation follows)
       
       1.  Commands on another drive should begin with the drive letter.
       
       2.  Multiple commands can be executed from one selection.
       
       3.  If there too many commands to fit on a command line, put them 
       inside a bat file.
       
       4.  The  menu  program returns to the drive letter and  directory 
       from where the menu program was executed. 
       
       
         
       
       1.  Commands on another drive should begin with the drive letter.
       
       When executing commands on another drive, the command line in the 
       menu should start by setting the current drive to the drive where 
       the commands reside. Example:
       [C:~CD \LOTUS~123                                  ]
       
       The first part of the command line sets the current drive to  the 
       C  drive. This tells the computer where to find the  programs  to 
       execute.
       
       An exception to this is when the commands are located in an  area 
       specified  by  a PATH statement. For example, if  a  command  was 
       located at B:\DOS and a path was specified as PATH=C:\DOS,   this 
       command could be executed from anywhere and DOS would know  where 
       to  find the command. (DOS restrictions apply here and should  be 
       understood before using the PATH method).
       
                                                                 Page 14
       
       
       
       2.  Multiple commands can be executed from one selection.
       
       As  many  commands  as  could  fit  on  a  command  line  can  be 
       concatenated  in  the command line. As  each  command  completes, 
       control is passed immediately to the next command on the  command 
       line,  as if someone had typed the command immediately  into  the 
       computer. 
       
       Example: to run lotus again:
       [C:~CD \LOTUS~123                                 ]
       
       For  the  sake  of  redundancy also notice  that  each  of  these 
       commands  are the same as would be typed at the DOS  prompt.  The 
       tilde (~) is used instead of hitting the enter key. In this  case 
       the commands being executed are:
       
       A>C:
       C>CD \LOTUS
       C>123
       
       In summary, the commands entered on the command line are  exactly 
       the  same as would be typed on the screen at the DOS prompt.  The 
       menu  system  simply passes each command to DOS to  be  executed, 
       then  DOS  passes control back to the menu  program,  which  will 
       execute the next command on the command line if one exists.  When 
       the  commands  on the command line have been executed,  the  menu 
       program  will clear the screen and redisplay the menu  selections 
       screen.
       
                                                                 Page 15
       
       
       
       3.  If there too many commands to fit on a command line, put them 
       inside a bat file.
       
       Most  needs can be met by placing several commands inside the  60 
       byte command line. For example:
       [ECHO Type EXIT to return to the menu~COMMAND     ]
       
       But  other times more room than this is needed. BAT files can  be 
       used for this need. Example:
       
       REM *** This BAT file is to check the hard drive if it does not
       REM *** seem to want to boot up.
       REM
       ECHO OFF
       ECHO
       ECHO  **** Check a disk for errors ****
       ECHO
       ECHO Load in the DOS system disk into drive A.
       ECHO When this is done
       PAUSE
       
       Save this as SYSA.BAT.
       The command line would be:
       [SYSA~A:~CHKDSK C:/F                              ]
       This might be for working on the C drive after a crash.
                                                                 Page 16
       
       
       Another Example:
       REM This is a BAT file to load the accounting system
       REM into the background, then to start up the system
       REM
       ECHO Load the GL system disk #1 in Drive A
       PAUSE
       ACCTSYS
       ECHO Load the GL system disk #2 in Drive A
       PAUSE
       GL
       
       Save as GLA.BAT.
       
       The command line would be:
       [GLA                                              ]
       
       Yes, some applications are setup this complicated. The first part 
       of  the  BAT file are comments as documentation. The  first  ECHO 
       statement  tells  the operator to load in the GL disk  #1,   then 
       runs the program ACCTSYS. This is for security or something. Then 
       the  next  ECHO statement tells the operator to load  in  the  GL 
       application disk, then the BAT file runs the GL application. 
       
       4.   The  menu program returns to the drive letter and  directory 
       from  where the menu program was executed. Remember, the  default 
       drive and directory can be set on the command line.
            Each  time  a selection is invoked, the  system  resets  the 
       computer  to the default drive and directory. For example if  the 
       menu program was executed initially from the A drive and the root 
       directory  (\), and the menu executes a program from drive B  and 
       directory  \lotus, when the program completes, the computer  will 
       be back to drive A and the root directory.
            With  this  in mind, short cuts can be made when setting  up 
       the  menu  when  programs are executed from the  same  drive  and 
       directory where the menu program resides.
       
       For  example, if the menu and lotus  both exist on one  disk  and 
       the same directory, the command line would be:
       [123                                              ]
       
       If  lotus exists on another disk and directory, then the  command 
       line becomes:
       [C:~CD \LOTUS~123                                 ]
       
       Notice how simple the first example was.
       
       
       
       
       
       
       
       
       
       
       
       
       
                                  APPENDICES
       
                                FIELD EDITING                    Page 17
       
       Using the data entry fields.
       
            The  data entry screen has three entry fields.  The data  in 
       each  of  these fields may be edited after some  value  has  been 
       entered.   The  type of edits available for each  field  include, 
       inserting   characters  inside  data  already  edited,   deleting 
       characters,  etc.   This scheme is similar  to  word  processors, 
       spread  sheets,  etc.   Following  is a  detailed  list  of  each 
       function and the key to be used for each.
       
       Key    Function
       ____   __________________________________________________________
       
       Ins    This  will  toggle into or out of  the  insert  mode.  The 
              cursor  will  be a block character when inside the  insert
              mode. When  inside the insert mode, any data above and  to
              the right  of the  cursor will be moved over and the  data
              typed will be  shoved inside, inserted.
       
       Del    The Delete Key: The character above  the  cursor  will  be 
              deleted and the data to the right will be  moved  over  to  
              fill the space created by the character deleted.
       
       BS     The Back-Space Key: The cursor will be moved to the  left;
              any data above the cursor will be deleted; the data to the
              right will be moved to the left.
       
       -->    The  right  arrow  key:  The  cursor  will  be  moved  one 
              character to the right, no data will be affected.
       
       <--    The left arrow key: The cursor will be moved one character
              to the left, no data will be affected.
       
       Up     The up arrow key: The cursor will jump up to the  previous
              data entry field.
       
       Down   The down arrow key: The cursor will jump down to the  next
              data entry field.
       
       Return The return/entry key: The cursor  will  jump  down  to the
              next data entry field.
       
       Esc    The escape key: This will exit  the  mode  of  the program 
              without doing any updates to the database.
       
       
                                                                 Page 18
                            
       
       
                              EXAMPLE MENU SETUPS
       
       
       
       1. Run from Drive A: Menu on Disk 1, program on Disk 1
       
       Menu Description: [Lotus               ]
       Command Line: [123                                               ]
       
       
       
       2. Menu on Drive A, program on drive B
       
       Menu Description: [Lotus               ]
       Command Line: [ECHO Load lotus disk in drive B~PAUSE~B:~123      ]
       
       
       
       3. Menu on Drive A, program on hard disk C
       
       Menu Description: [Lotus               ]
       Command Line: [C:~CD \LOTUS~123                                  ]
       
       
       4. Run from Drive A: Menu on Disk 1, program on Disk 2
          (This is not a usual setup; see #7 for a better alternative).
       
       Menu Description: [Lotus               ]
       Command Line: [123A                                              ]
       Bat File1: ECHO Load lotus disk in drive A
                  PAUSE
                  A:
                  123
       Bat File2: ECHO Load menu disk in drive A
                  PAUSE
                  A:
                  
       (the menu program does not have to be run again)                    
       
       5. DOS Command: Display a directory
       
       Menu Description: [Show Directory of Drive A ]
       Command Line: [DIR A:~PAUSE                                      ]
       
       
       
       6. Exit to DOS temporarily, then return to menu
       
       Menu Description: [Exit to DOS, then Return  ]
       Command Line: [ECHO Type EXIT to return to menu~COMMAND          ]
                                                                 Page 19
       
       
       7. Menu program on disk A, config file on drive B
          (To start this, begin menu by: FDMENU B:)
       
       Menu Description: [Lotus               ]
       Command Line: [123                                               ]
       
       
       
       8. Print an ASCII file
       
       Menu Description: [Print an ASCII file       ]
       Command Line: [RPRINT                                            ]
         or
       Command Line: [PASSF File name to print,TEMP~PRINT TEMP~DEL TEMP ]
       
       Note:  RPRINT and PASSF are special utilities included  with  the 
       FDMENU system.
       
       
       
       9. Copy files
       
       Menu Description: [Copy files                ]
       Command Line: [RCOPY                                             ]
         or
       Use the "Exit to DOS" approach
       
       Note: RCOPY is a special utility included with the FDMENU system.
       
       
       
       10. FDMENU calling another FDMENU
           This will allow more than 20 menu selections. Add a selection 
       on the main menu that calls another menu.
       
       Menu Description: [DOS commands menu         ]
       Command Line: [FDMENU FDMENU.CF2                                 ]
       
       The  configuration file FDMENU.CF2 assumes that you have  created 
       another configuration file.
       
                                                                 Page 20
       
                              USEFUL DOS COMMANDS
       
            The following are a list of standard DOS commands which  are 
       useful  in  setting up some menus. A full  explanation  of  these 
       commands are in the DOS system manual.
       
       
       
       CHDIR    - Change  the current directory to the one specified  by 
                  this command.
       CD       - Same as CHDIR.
       
       CHKDSK   - Checks a disk's file system index. Good to have in the 
                  autoexec.bat.
       
       ECHO     - Display a message on the screen.
       
       MORE     - Allows the viewing of ASCII files, one page at a time.
       
       PAUSE    - Display "Hit a key to continue..." and wait for a  key 
                  to be pressed.
       
       REM      - Allows comments in a BAT file.
                                                                 Page 21
       
                          FDRPT - THE REPORT PROGRAM
       
       FDRPT [configfile]
       
       
            FDRPT  is a program to report the menu selections  from  the 
       configuration file. The program prompts for the printer type. The 
       reason  for this is that the program sends special printer  codes 
       for condensed printing. If your hardware does not respond to  the 
       Epson  or  the laser printer settings, the third  setting  should 
       work on any type or printer.
       
       Example output:  (Non Condensed printing)
       
           |----------------------------------------------|
           |            *** WORD PROCESSING ***           |
           |       A - WORDSTAR 2000                      |
           |       B - Shareware Style Analysis           |
           |       C -                                    |
           |       D -                                    |
           |       E -                                    |
           |       F -                                    |
           |       G - Create Non Document File           |
           |       H -                                    |
           |       I -                                    |
           |       J -                                    |
           |       K -                                    |
           |       L -                                    |
           |       M - Printer Config Utility             |
           |       N - Configuration program              |
           |       O -                                    |
           |       P - Exit to DOS then return here       |
           |----------------------------------------------|
       
                                                                 Page 22
       
       
        Technical Information:
       
       
       
        Equipment needed: IBM-PC (128K) 
                          Floppy, cartridge or hard disk
                          Color or Monochrome monitor
       
        Operating System: DOS 2.0 or higher
       
       
        System files
           FDMENU.EXE   - The main menu program w/maintenance module
           FDMENU2.EXE  - The main menu program w/o maintenance
           FDMENU.CFG   - The menu configuration file
           FDMAINT.EXE  - External menu maintenance program
           FDMAINT.HLP  - Help screens for maintenance program
           FDRPT.EXE    - Report program, prints the menu selection in a
                          format to slip into the sleeve with the disk
       
```
{% endraw %}

## MOVE.DOC

{% raw %}
```
                               ROKMAR Utilities
       
                              Copyright (c) 1989
       
       
       
       MOVE
       
       MOVE [from_file] [to_file]
       
            This  utility  is  a tool for easily  moving  files  around. 
       Standard  DOS requires that a file be copied to its  destination, 
       then later deleted. This is a feature strangely left out of DOS.
       
            One  feature  of this utility is that it prompts  for  input 
       when none is given on the DOS command line.
       
```
{% endraw %}

## PASSF.DOC

{% raw %}
```
                               ROKMAR Utilities
       
                              Copyright (c) 1989
       
       
       
       PASSF
       
       PASSF {Input message/prompt},{filename}
       
            This  is  an  unusual utility. It displays  a  user  created 
       message;  the  utility then waits until the user keys in  a  file 
       name. The file  is then copied over to the file specified on  the 
       command line. 
       
       Example:
       
       A>PASSF Enter a file name: ,TEMPFILE
       
       The computer responds:
       
       Enter a file name: {here the user is prompted for a file name}
       
       Let's say that the file name MANUAL.DOC was entered. The  utility 
       will have copied the file MANUAL.DOC to TEMPFILE.
       
       This could only be useful for batch files, right?
       
       Let's see,
       
       PASSF Enter a file name: ,TEMPFILE
       PRINT TEMPFILE
       DEL TEMPFILE
       
       This is one example. The file to print is anything someone  might 
       wish,  and it will be printed in the background  without  locking 
       out access to the computer. TEMPFILE is transient and transparent 
       to  the  user, all he sees is the computer asking for a  file  to 
       print, then the file being printed.
       
       Caution! Sufficient disk storage to have two copies of the  input 
       file is required to run this utility. 
```
{% endraw %}

## PSWAP.DOC

{% raw %}
```
                               ROKMAR Utilities
       
                              Copyright (c) 1989
       
       
       PSWAP
       
       PSWAP - There are no input parms. 
       
       
            This  utility swaps the printer ports LPT1 <-->  LPT2.  Once 
       swapped,  they  will  stay swapped until  swapped  back,  or  the 
       computer is rebooted. 
       
            The  use  of  this is to easily swap  between  two  printers 
       without  having to reconfigure software, hardware, etc.  This  is 
       especially useful inside batch files or menu systems.
       
       
       
       
```
{% endraw %}

## RCOPY.DOC

{% raw %}
```
                               ROKMAR Utilities
       
                              Copyright (c) 1989
       
       
       
       RCOPY
       
       RCOPY [from_file] [to_file]
       
            This  utility  is  a simple tool to  copy  files.  The  only 
       reason  for  this utility to exist is that it prompts  for  input 
       when  none  is  given on the DOS command line. This  is  for  use 
       inside batch files and menu systems.
       
       
```
{% endraw %}

## README.DOC

{% raw %}
```
For those of you like myself, who run through a new disk of software without
first reading the documentation (just for the challenge), here's a hint:
for this software to work, it will have to have the COMMAND.COM file on the 
disk or a path statement needs to be active which includes this file in its 
search path. You can simply copy this from your operating system onto this disk
for a quick test of this system.
```
{% endraw %}

## RENDIR.DOC

{% raw %}
```
                               ROKMAR Utilities
       
                              Copyright (c) 1989
       
       
       RENDIR - REName DIRectory
       
       RENDIR [old_directory] [new_directory]
       
            This  utility  is  a  renaming  tool  for  easily   renaming 
       directories. This is a feature strangely left out of DOS. 
       
            One  feature  of this utility is that it prompts  for  input 
       when none is given on the DOS command line.
       
```
{% endraw %}

## RPRINT.DOC

{% raw %}
```
                               ROKMAR Utilities
       
                              Copyright (c) 1989
       
       
       RPRINT
       
       RPRINT [print_file] [LPT1|LPT2]
       
       print_file = The input ASCII file to be printed.
       
       [LPT1|LPT2]  =  Input  LPT1 for port 1 or LPT2 for  port  2;  the 
                       default is LPT1.
       
       
            This utility is a simple print utility. It is uses over  the 
       standard DOS print utility are:
            - this utility does not run in the background. Some programs 
       which run in the background mode, or have pieces which run in the 
       background, can have problems with other programs which are  also 
       running in the background, such as the DOS print utility.
            -  This utility prompts for input when none is given on  the 
       command  line.  This is a more user friendly approach  to  input, 
       especially  for menu systems. The problem with this  approach  is 
       that IO redirection no longer works, ie., 
       
            TYPE file|PRINT
       
       but if you are not doing this, then nothing is lost.
       
       
```
{% endraw %}

## RUNBAT.DOC

{% raw %}
```
       
                               ROKMAR Utilities
       
                              Copyright (c) 1989
       
       
       RUNBAT
       
       RUNBAT [batch_file]
       
       batch_file = The name of the batch file to be executed.
       
       
            This  utility  is used to run batch files  inside  of  other 
       batch  files. When a batch file is run from inside another  batch 
       file,  DOS annoyingly cancels the first batch file and  runs  the 
       second batch file. Any commands which appear inside a batch  file 
       which  happen  to be below another batch file are  ignored.  This 
       utility attempts to patch that feature.
       
            Example:
              ECHO Hello world
              BAT1     <-- This is a batch file
              ECHO Hello again  <-- This is ignored
       
            But try this:
              ECHO Hello world
              RUNBAT BAT1
              ECHO Hello again
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1739

     Volume in drive A has no label
     Directory of A:\

    FDMENU   COM     25014   6-18-89  11:38p
    FDMENU2  COM     12980   6-18-89  11:39p
    FDMENU   CFG      1505   5-20-89   8:12p
    FDMENU   CF2      1505   6-03-89  10:07a
    FDMAINT  EXE     19452   5-16-89   8:50p
    FDMAINT  HLP       719   5-03-89   9:51p
    FDRPT    EXE     13630   6-03-89   4:04p
    LICENSE  DOC      3821   5-21-89   7:13a
    MANUAL   DOC     37865   1-23-89  11:20p
    INSTALL  DOC      2759   5-16-89   7:39p
    README   DOC       422   5-16-89   8:06p
    AUTOEXEC BAT        55   5-20-89   9:01p
    A        BAT        77   5-16-89   7:55p
    B        BAT        46   5-16-89   7:56p
    -------- ---         1   5-20-89   6:01p
    INPMENU  BAT       585   5-16-89   8:03p
    INPUT    EXE      7744   5-15-89  11:17p
    INPUT    DOC      1189   5-16-89   7:27p
    MOVE     EXE      8058   4-04-89   9:07p
    MOVE     DOC       567   5-16-89   7:27p
    PASSF    EXE     10634   4-15-89   7:17p
    PASSF    DOC      1478   5-16-89   7:28p
    PSWAP    EXE      5582   5-15-89  10:18p
    PSWAP    DOC       646   5-16-89   7:28p
    RCOPY    EXE      7868   5-11-89   1:52p
    RCOPY    DOC       489   5-16-89   7:27p
    RENDIR   EXE      6664   3-25-89  10:50a
    RENDIR   DOC       510   5-16-89   7:27p
    RPRINT   EXE      8860   5-21-89   7:41a
    RPRINT   DOC      1205   5-16-89   7:28p
    RUNBAT   EXE      8646   5-19-89   7:34p
    RUNBAT   DOC       991   5-20-89   4:28a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   6:50a
    FILE1739 TXT      2369   3-05-90  12:46p
           35 file(s)     194514 bytes
                          109568 bytes free
