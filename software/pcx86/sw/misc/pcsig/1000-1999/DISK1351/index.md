---
layout: page
title: "PC-SIG Diskette Library (Disk #1351)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1351/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1351"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-MASTERCONTROL"

    PC-MASTERCONTROL (PCMC) is an in-depth custom menu and file management
    system for hard drives.
    
    PCMC runs programs or DOS commands from menus, which you create, to
    help you stop fighting with your computer and become its friend.  The
    menu section lets you access your programs with a single key.  You no
    longer have to remember complex commands to run the many programs on
    your hard drive.  You create and name your own custom menus.  Then
    simply point to the menu you want and you're there -- without a
    tremendous headache!  The hard disk manager section lets you do all the
    complex DOS commands, and more, in a simple and easy-to-use
    format.  Set up this powerful package once and let it run your PC
    forever.
    
    Here are some of PCMC's features:
    
    ~ Exits memory when running a menu and returns when finished --
    freeing up memory for your programs
    
    ~ Extensive help keyed to each screen guides you through the
    program, as well as AutoHelp, a tutorial
    
    ~ Hundreds of command menus (macros) for the demanding user
    
    ~ Built-in editor to make menus (no fancy macro commands needed)
    
    ~ Built-in screen saver to avoid screen burn-in
    
    ~ Insert, delete or swap menus and macros with the press of a key
    
    ~ Set the colors of any screen
    
    ~ Check the total space and free space on any drive
    
    ~ Copy, erase or move one file, or hundreds of files at a time
    
    ~ Find any file on any drive with the global file finder
    
    ~ And much, much more!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```
    PC-MasterControl, including this version, is not and has never been
    public domain software, nor is it free software.

    PC-MasterControl, associated files and documentation are Copyright(C)
    1987, 1988, 1989 by John T Legg and JTL Associates and are subject to
    the terms below. Here after John T Legg will be referred to as JTL
    Associates.

    This is a user supported product. It is not public domain, and it is
    not free software. You are granted a limited license to use this
    product on a trial basis. If you wish to continue using the product
    after the trial period you are expected to register by sending: (a) $15
    for registration only (no disk), (b) $30 for registration plus the
    latest version on disk, or (c) $45 for registration, disk and manual to
    the address below. Washington state residents please add 7.8% sales tax.

    By registering you will receive a copy of our news letter that details
    using "special commands" in menus, exotic DOS commands in menus,
    interfacing with popular programs, technical support and lots more!

    JTL Associates P.O. Box 2530 Port Angeles, Wa 98362-0321 (206) 928-3510

                          Thank you for your support!                 more...

            README.DOC for PC-MasterControl, Version 1.01b, Rev 1.00

   **************************************************************************
   *  To be able to use the INSTALL-REMOVAL program (INSTALL.EXE) you will  *
   *  need to have the following files on a diskette in drive A: (PCMC.EXE, *
   *  INSTALL.EXE, CONFIG.SYS and README.DOC)  Once you are SURE you have   *
   *  these files on a diskette in drive A: do the following:               *
   *  Type  ==> DIR A:\*.* and press the [Enter] key. (Last minute check)   *
   *  Type  ==> A:         and press the [Enter] key.                       *
   *  Type  ==> INSTALL    and press the [Enter] key.                       *
   * ************************************************************************

    F1-Help:

    PC-MasterControl has extensive on line help. No matter where you are at
    in the program you can receive "Position-Sensitive-Help" by pressing
    the F1-Help key. So please remember to use the F1-Help key as you move
    from one screen to another!

    Note: The Install/Removal program is not shipped with F1 on line help.
    Simply follow the prompts on the screen.
                                                                       more...

    LINE INPUT:

    Each time PC-MasterControl ask for you to type in something it will
    control the characters you type. That is if you press a letter that is
    not allowed it will beep.

    =========================< Technical notes >==========================

    After installing PC-MasterControl on your hard drive the program will
    make several files in the directory [Drive]:\PCMC. DO NOT erase any
    files in this directory and DO NOT create Sub Directories in this
    directory!

    Command Menus (each set of 20 command sets) are saved in the files
    COMMAND.0, COMMAND.1, etc. The file COMMAND.0 corresponds to Command
    Menu #1, the file COMMAND.1 corresponds to Command Menu#2, etc.

    Command Menu names (the 10 names for each menu) are saved in the file
    MENU_NAM.DAT.


                                                                     more...

    You must have at least 10 files and 10 buffers in CONFIG.SYS for PC-
    MasterControl to operate properly.

    If you are using DOS version 3.xx or higher you do not need to include
    the statement [Drive]:\PCMC; in your PATH statement.


                                end of document

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1351

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        23   8-31-87   6:12p
    INSTALL  EXE    103835  12-07-88   7:08p
    PCMC     EXE    250765  12-07-88   9:09p
    README   DOC      3840  12-07-88   7:54p
            4 file(s)     358463 bytes
                            2048 bytes free
