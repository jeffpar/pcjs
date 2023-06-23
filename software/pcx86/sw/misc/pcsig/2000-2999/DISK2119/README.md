---
layout: page
title: "PC-SIG Diskette Library (Disk #2119)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2119/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2119"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MENU CONSTRUCTION SET 2 OF 2 (1924 ALSO)"

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

## FILE2119.TXT

{% raw %}
```
Disk No: 2119                                                           
Disk Title: Menu Construction Set 2 of 2 (1924 also)                    
PC-SIG Version: 1.2                                                     
                                                                        
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

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║   <<<<  Disk #2119 MENU CONSTRUCTION SET (disk 2 of 2, 1924 also) >>>>  ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using the program, type:  COPY README PRN  (press enter)       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## MCS.TXT

{% raw %}
```






             ╔═════════════════════════════════════════════════╗
             ║                                                 ║
             ║          The Menu Construction Set 1.1          ║
             ║                                                 ║
             ║  (c) Copyright 1990 by Optimal Solutions of NH  ║
             ║           "Software solid as a rock"            ║
             ║                                                 ║
             ║              ...loading editor...               ║
             ║                                                 ║
             ╚═════════════════════════════════════════════════╝
```
{% endraw %}

## MENU.TXT

{% raw %}
```
...loading menus...

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
               | Menu Construction Set 1.1         |         | 
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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2119

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT       531   2-24-90   1:15p
    MCS      TXT       673   2-25-90   9:10a
    MCS_RUN  EXE    224628   4-01-90   7:31p
    MENU     TXT        24   4-23-89   8:44a
    README            2186   2-24-90   1:06p
    RECONFIG DOC     13176   2-25-90   9:14a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       575   1-01-80   1:42a
    FILE2119 TXT      2369   7-13-90  11:31p
    EXAMPLE      <DIR>    
           10 file(s)     244200 bytes

     Directory of A:\EXAMPLE

    .            <DIR>    
    ..           <DIR>    
    MCS      DBF      2559   6-11-89   2:30p
    MCS      DBT      3433   6-08-89   9:13p
    MCS      NTX      2048   6-08-89   9:13p
    MCSTITLE DBF       541   6-08-89   9:13p
    MCSTITLE NTX      2048   6-08-89   9:13p
    SETTINGS DAT      5065   6-11-89   2:30p
            8 file(s)      15694 bytes

    Total files listed:
           18 file(s)     259894 bytes
                           54272 bytes free
