---
layout: page
title: "PC-SIG Diskette Library (Disk #1196)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1196/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1196"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAGIC MENUS"

    MAGIC MENUS is a program that allows you to operate DOS and all your
    programs from simple pop-up menus.  Specific DOS commands are also
    included for changing and listing directories, copying files, deleting
    files, renaming files, and setting the time and date.  You can also run
    any other DOS command that you wish from MAGIC MENUS, or optionally
    return to DOS temporarily.  MAGIC MENUS also has a DOS window in which
    you can execute DOS commands.  It even remembers the last 10 DOS
    commands entered so that you do not need to retype them.
    
    With this program you may also create up to 10 menus that can
    automatically execute up to 100 programs.  These menus may include a
    short menu description, prompts to switch disks, prompts for additional
    command line information, and a password level to restrict usage.
    
    Additional functions in MAGIC MENUS include menu options for sending
    printer control codes to the printer and a pop-up financial calculator.
    MAGIC MENUS can also define up to 10 options for your AUTOEXEC.BAT and
    CONFIG.SYS files.
    
    A setup menu is included for screen blanking, screen colors, the video
    mode, a password system for the program, and general file paths.  MAGIC
    MENUS also has context-sensitive help to further simplify the operation
    of DOS and other program applications.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1196.TXT

{% raw %}
```
Disk No: 1196
Program Title:  MAGIC MENUS version 1.70A
PC-SIG version 1

MAGIC MENUS is a program that will allow you to operate DOS and all 
your programs from simple pop-up menus.  Specific DOS commands are also 
included for changing and listing directories, copying files, deleting 
files, renaming files, and setting the time and date.  You can also run 
any other DOS command that you wish from MAGIC MENUS, or optionally 
return to DOS temporarily.  MAGIC MENUS also has a DOS window in which 
you can execute DOS commands.  It even remembers the last 10 DOS 
commands entered so that you do not need to retype them. 

With this program you may also create up to 10 menus that can be 
automatically execute up to 100 programs.  These menus may include a 
short menu description, prompts to switch disks, prompts for additional 
command line information, and a password level to restrict usage. 

Additional functions in MAGIC MENUS include menu options for sending 
printer control codes to the printer and a pop-up financial calculator. 
MAGIC MENUS can also define up to 10 options for your AUTOEXEC.BAT and 
CONFIG.SYS files.

A setup menu is included for screen blanking, screen colors, the video 
mode, a password system for the program, and general file paths.  MAGIC 
MENUS also has context sensitive help to further simplify the operation 
of DOS and other program applications. 

Usage:  Menus for DOS/Program Applications.

Special Requirements:  Two disk drives; hard disk recommended.

How to Start:  Type GO (press enter).

Suggested Registration:  $29.95

File Descriptions:

MANUAL   ARC  Archive containing documentation.
MAGIC    DIS  Distribution file.
MMINST   COM  Installation and configuration program.
PRTR     COM  Printer utility.
RBOOT    BAT  Batch file for configuring boot options.
READ     ME   Program description.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## MM.DOC

{% raw %}
```



     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
                          Magic Menus (tm) User's Guide
                           Second Edition -- June 1988
     
                  Copyright (c) 1987,88 by Custom Technologies
                               All Rights Reserved
     
     
     
     
                   1-800-541-6234 (Orders Only, 24 hrs/day)     
                   (719) 597-8389 (Orders Only, 24 hrs/day)      
     
                    (719) 282-0402 (Questions and Support)
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
                      Custom Technologies is a member of the
                     Association of Shareware Professionals.



     
     
     
                          Warranty and License Agreement
     
     
     
     
     Magic Menus (tm) is a trademark of Custom Technologies.
     
     
     - Warranty
     
     Magic Menus, and this manual, are provided AS IS without any warranty,
     expressed or implied, including but not limited to fitness for a
     particular purpose.  CUSTOM TECHNOLOGIES SPECIFICALLY DISCLAIMS ANY AND
     ALL WARRANTIES.  IN NO EVENT SHALL CUSTOM TECHNOLOGIES BE LIABLE FOR
     ANY LOSS OF PROFIT OR ANY OTHER COMMERCIAL DAMAGE, INCLUDING BUT NOT
     LIMITED TO SPECIAL, INCIDENTAL, CONSEQUENTIAL OR OTHER DAMAGES
     RESULTING FROM THE USE OF THIS PRODUCT.
     
     
     - License
     
     The Magic Menus software is the property of Custom Technologies.  You
     are granted a limited license to use this software on an evaluation
     basis.  If you use Magic Menus regularly, you must register your copy
     with Custom Technologies.  If you wish to use Magic Menus in multiple
     locations (or on multiple computers) concurrently, you should register
     one copy for each location.
     
     You are free to make as many copies as you wish and may distribute
     Magic Menus freely (in its original form, including documentation).
     Recipients of copies you make are granted a limited license to use
     Magic Menus on a trial and evaluation basis.  If the recipient wishes
     to use Magic Menus on a continuous basis, he should register his copy.
     
     You may not sell or ask any consideration for this product.  SIGs and
     BBSs may ask a nominal fee to cover their copying and distribution
     costs.  OEMs wishing to bundle Magic Menus with other products should
     contact Custom Technologies for details.
     



     
     
                                Table of Contents
     
     
     Introduction..........................................................3
          0.1  Greetings...................................................3
          0.2  Features....................................................3
          0.3  Shareware...................................................4
          0.4  Other Products..............................................4
     
     Chapter 1: Installing Magic Menus.....................................7
          1.1  Hardware Requirements.......................................7
          1.2  Disk Operating System.......................................7
          1.3  First Time Installation.....................................7
          1.4  Changing Magic Menus' Configuration.........................8
          1.5  Suppressing Setup Options...................................9
          1.6  Notes on the Maximum Memory Mode...........................10
     
     Chapter 2: A Quick Start Tutorial....................................11
          2.1  Quick Install..............................................12
          2.2  Running Magic Menus........................................12
          2.3  Setting Up Applications....................................12
          2.4  Other Menus................................................15
          2.5  Pop-Ups....................................................16
     
     Chapter 3: Things You Need to Know...................................20
          3.1  The Bottom Line............................................20
          3.2  The Top Line...............................................20
          3.3  The Pull-Down Menu System..................................20
          3.4  The Help System............................................20
          3.5  Pop-Ups....................................................21
          3.6  Date Formats...............................................21
          3.7  Editing within Magic Menus.................................22
          3.8  Suppressing Setup Options..................................22
     
     Chapter 4: Menus.....................................................23
          4.1  Adding a Menu Setup........................................23
          4.2  Editing Menu Setups........................................24
     
     Chapter 5: Applications..............................................25
          5.1  Adding an Application......................................25
          5.2  Editing Applications.......................................33
     
     Chapter 6: Pop-Ups...................................................34
          6.1  Directory Control Window...................................34
          6.2  Printer Control Window.....................................36
          6.3  Window to DOS..............................................37
          6.4  Calculator.................................................38
          6.5  List of Files..............................................38
     
     Chapter 7: Boot Options..............................................40
          4.1  Add a Boot Option..........................................41
          4.2  Editing Boot Options.......................................43
     
     Chapter 8: DOS Menu..................................................44
          8.1  DOS Commands...............................................44
          8.2  Run Any Command............................................44



          8.3  DOS Shell..................................................45



     
     Chapter 9: User Options..............................................46
          9.1  Screen Delay...............................................46
          9.2  Color Setup................................................46
          9.3  Error Beep Setup...........................................47
          9.4  Error Message Setup........................................47
          9.5  Video Setup................................................47
          9.6  Password Setup.............................................48
          9.7  File Paths.................................................49
          9.8  General Setup..............................................49
          9.9  Printer Setup..............................................49
          9.10 Drive Access Setup.........................................50
          9.11 Order Form.................................................50
     
     Appendix A: Prompt Definition Quick Reference........................52
     



     
     
                                   Introduction
     
     
     0.1  Greetings
     
          Welcome to Magic Menus, the Software Environment Manager.  More
     than just another menu program, we created Magic Menus to be a complete
     system organizer.
     
          Magic Menus is packed with features that you will not find in any
     other menuing program.  It allows you to define your own pull-down and
     pop-up menus to control the functions of your computer, as well as
     offering powerful pre-defined functions.   It has five pop-up windows
     that range from an instant disk directory to a "Window to DOS", and
     even includes a useful financial calculator!
     
          Experienced users will enjoy Magic Menus "Boot Options", which
     let you effectively maintain ten different sets of AUTOEXEC and CONFIG
     files.  Novices will appreciate Magic Menus' intuitive layout and ease
     of setup and editing.  It is truly a system that has something to offer
     everyone.
     
          If you are eager to get started, chapter 2 of this User's Guide is
     a "Quick Start Tutorial" designed to introduce you to the Magic Menus'
     environment.
     
     
     0.2 Features
     
          - Uses intuitive pull-down and pop-up menu system
          - Easy use for novices, extensive power for experienced users
          - Up to 100 user-defined applications in 10 user-defined menus
          - Powerful macro processors available for defining applications
            allowing pre-defined or flexible user inputs
          - Full screen editing
          - Easy pre-defined "DOS" menu with common commands
          - User-configurable "Boot Options" allow quick reconfiguring
            of your computer's memory usage
          - Five levels of password protection
          - User configurable colors, messages, and sound
          - Fast "direct" screen writing or optional "BIOS" writing for
            multitasking systems
          - "Maximum Memory Mode" for large programs
          - DOS shell
          - Pop-up file listing window
          - Pop-up directory control window
          - Pop-up printer control window
          - Pop-up "Window to DOS" that remembers past commands
          - Pop-up financial calculator with rolling tape
          - Includes extensive, context sensitive on-line help
     
     

     
     
     Introduction                                                         3



     0.3  Shareware
     
          Magic Menus, like many other fine "shareware" products, has been
     released by its authors to the public for evaluation.  We allow and
     encourage free copying and distribution of the program (in its un-
     altered original form).  We are committed to supporting and improving
     Magic Menus.
     
          If you find Magic Menus useful, you should register your copy. The
     shareware concept is meant to provide a full working copy to the user
     for evaluation, and NOT to give away the author's hard work.  If you
     choose not to register, then erase or pass your copy on to someone
     else.  You can register by sending $29.95 (plus $3 shipping and
     handling).
     
          When you register you will be placed on our mailing list, you will
     receive a complete, illustrated User's Guide, and you will receive the
     latest version of Magic Menus on disk.  More importantly, you will have
     a license from Custom Technologies to use Magic Menus on a continuous
     basis.
     
          Make checks payable to Custom Technologies.  Colorado residents
     please add 3% sales tax.  Send your registration and all other
     correspondence to:
     
                               Custom Technologies
                                   PO Box 62118
                         Colorado Springs, CO  80962-2118
                                  (719) 282-0402
     
     or call 1-800-541-6234 (VISA, MasterCard, or COD).
     
     0.4  Other Products
     
          Custom Technologies produces other products in addition to Magic
     Menus.  One of these is CheckMate (tm), our very popular bank account
     management system for home or business.
     
     
     0.4.1  CheckMate
     
          CheckMate is designed to help you keep an accurate track of your
     personal financial activity... no more will you have to "guess" at your
     balance, or labor furiously to make your checkbook match your bank
     statement.  CheckMate will record and maintain your transactions, with
     full editing capabilities at your fingertips.  It will sort and print
     reports, search for selected items, help you reconcile your statements,
     and even print your checks for you.  Your balances are automatically
     updated and reported, and your records are accurate to the penny...
     guaranteed!
     




     
     
     Introduction                                                         4



     CheckMate Features:
     
          - Uses intuitive pull-down menu system
          - Supports up to eight accounts simultaneously
            (total number of accounts is limited only by disk space)
          - Supports Checking and Savings accounts
          - Up to 32,767 transactions may be active per account
          - Prints reports in standard format or in Borland Intl's
            Traveling SideKick (tm) format
          - Reports and Checks may be printed in PICA, ELITE or
            CONDENSED print
          - Transactions may be edited or printed and search criteria
            may be specified on ANY field in the transaction
          - Check printer supports continuous feed AND standard checks
            (YOU define the check printing in the Check Set-Up form
             and can use your own checks!)
          - Allows  100 predefined transactions that can be called up
            at a keystroke (such as mortgage payments, utility
            bills, etc)
          - Provides a financial calculator for quick figures on
            loans, regular deposit accounts, and compounding
          - Helps you reconcile your accounts when your statements
            arrive, and prints a complete report of outstanding
            transactions
          - Includes extensive, context sensitive on-line help
     
          You can order CheckMate by sending $29.95 plus $3 shipping and
     handling.
     
     
     0.4.2  CheckMate-GL
     
          We also have released CheckMate-GL, a fully functional, multiple-
     entry general ledger (accounting) package that integrates with
     CheckMate.  If you need a more detailed break-down of your expenses and
     revenues, or if you run a business, then CheckMate-GL is for you.
     
     CheckMate-GL Features:
     
          - Uses intuitive pull-down and pop-up menu system
          - Fully implemeted "classical" general ledger system for
            both home and business use
          - Integrates with CheckMate (tm) Personal Financial Software
          - Supports up to 256 accounts simultaneously
          - Powerful search and filter routines available for all
            databases and reports
          - Unique "Quick-Look" reports (including pre-posting)
          - Flexible pre-defined reports with output flow control
          - Unique and powerful "custom" report command language for
            the power user with automatic generation for the novice
          - Fully editable journal entries allowing pen and ink
            corrections (no reverse entries!) prior to posting
          - Allows 50 predefined journal transactions that can be
            called up at a keystroke
          - Pop-up chart of accounts for quick reference
     
     
     Introduction                                                         5



          - Pop-up accountant's calculator with rolling tape
          - Includes extensive, context sensitive on-line help
     
          You can order CheckMate-GL by sending $39.95 plus $3 shipping and
     handling.
     
     
















































     
     
     Introduction                                                         6



     
     
                       Chapter 1 -- Installing Magic Menus
     
     
     1.1  Hardware Requirements
     
          Magic Menus will run on an IBM PC/XT/AT/jr (or compatible) with at
     least 256K of memory and 2 DSDD floppy disk drives.  A hard-drive is
     recommended.  Magic Menus may be used on a floppy disk, but its utility
     will be very limited.  Magic Menus supports all IBM compatible displays
     including the EGA.
     
     
     1.2  Disk Operating System
     
          Magic Menus supports (and requires) DOS 2.0 or above.  Due to
     limitations of DOS 2.X, however, the "Maximum Memory Mode" feature is
     only available in DOS 3.0 and above.
     
     
     1.3  First-Time Installation
     
          Magic Menus must be installed before it may be run.  Installation
     requires the presence of two files:
     
             MMINST.COM   (the installation program)
             MAGIC.DIS    (Magic Menus distribution file)
     
     Make sure that both of the above files are on the same disk and in the
     same directory.  Then type the command:
     
             MMINST <return>
     
     You are now running the installation procedure.  Select option 1 (First
     Time Install) and you are ready to begin.  Read the instructions and
     press any key to continue.
          The first question that you must answer is what drive you will be
     installing Magic Menus on.  This is usually your hard drive.  For
     instance, enter the letter "C" (without quotes) if your hard drive is
     C.  You will then be prompted for confirmation.  Simply type "Y" or "N"
     and press <return>.
          If you press "Y", Magic Menus will create the appropriate direc-
     tories on your disk and copy the Magic Menus executable files directly.
     You will then be asked several questions about your system and config-
     uration desires.  If you are unsure about the answers to the questions,
     then press <return> with no answer and Magic Menus will use its default
     values.  These defaults will work for most machines, and you can always
     change the setups later.
          The first question that you will be asked is whether or not your
     machine is an IBM PC or true compatible.  Most "clones" fall into the
     compatible category and you should answer the question "YES".  If you
     are using a machine such as the Tandy 2000 or the Zenith 100, then
     answer this question "No".  (Technical Note:  At this writing, Magic
     Menus has not been tested on non-compatible machines.  We believe that
     
     
     Chapter 1: Installing Magic Menus                                    7



     it should run, but can make no guarantees.  Zenith 100 owners must run
     ZPC or another PC-emulation package.  If you are successful in running
     Magic Menus on a non-compatible machine then please let us know so we
     may pass the information along to others).
         Next you will be asked whether you desire to use direct or BIOS
     screen writing.  Direct screen writing causes Magic Menus to access the
     computer's video memory when reading or writing to the screen.  This is
     very fast, but can cause problems in multi-user or multi-tasking
     systems (like DesqView or DoubleDos).  Select BIOS writing if you plan
     to use Magic Menus in this type of environment.  The BIOS screen
     writing, however, is much slower.  Non-IBM compatible computers should
     also select BIOS screen writing since your video memory will most
     likely be different.
          The next question is simply whether or not you have a color moni-
     tor.  This question is important since Magic Menus' default colors may
     cause an unreadable display on composite monochrome monitors connected
     to color graphics cards.  Simply answer yes or no.
         After indicating the type of monitor that you have, you will be
     asked whether or not your monitor "snows" when writing to the screen.
     The original IBM color graphics adapter did not arbitrate memory
     contention and would could cause the snow.  It is not harmful, but can
     be very annoying.  If you have an old CGA, then answer this question
     "yes".  If you are unsure, then answer "no" (you can always change it
     later).  If you own a laptop computer with an LCD screen, then defin-
     itely answer "no" since the snow suppression routines can cause Magic
     Menus to runs very slowly on this type of computer.
          The last question that you will be asked is your primary printer
     port.  The default answer is LPT1, although some people have serial
     printers and it may be COM1 or COM2.  Consult your DOS reference guide
     for more information.  If you are unsure of your system configuration,
     then just stick with LPT1.  It is probably correct.
     
          After you answer all the questions, Magic Menus will be installed
     and ready to run.  Just type:
     
             MAGIC <return>
     
     and you will see the system initialize and display the opening screen.
     Continue by pressing any key.  (The opening screen will remain for
     approximately thirty seconds if no key is pressed).  You will now be in
     the Magic Menus environment.
     
          Proceed to Chapter 2 now for "A Quick Start Tutorial" and an
     introduction to Magic Menus.
     
     
     1.4  Changing Magic Menus' Configuration
     
          After Magic Menus has been installed, you may change its configur-
     ation in two ways.  Many of Magic Menus' options may be altered while
     actually running Magic Menus (more about this later).  You may also run
     the installation program again and directly alter the parameters.  To
     do this, you must copy the installation program (MMINST.COM) to your
     Magic Menus disk and directory.  (That is, make sure that MMINST.COM
     and MM.COM are in the same place).
     
     
     Chapter 1: Installing Magic Menus                                    8



          To change Magic Menus' configuration, simply type:
     
             MMINST <return>
     
     The installation menu will appear.  Select option 2 (Change Configura-
     tion) and you will be presented with another menu.  Pick the option you
     desire to modify from this menu.
     
          IBM Compatibility:  This flag is used to tell Magic Menus whether
          your computer is an IBM PC or tru compatible.
     
          Video Options:  You may direct Magic Menus to use BIOS screen
          writing, indicate the type of monitor you have, and whether or not
          you need Magic Menus to suppress "snow" (or flicker).
     
          Program File Drive/Path:  At first installation, Magic Menus puts
          itself into a directory called "\MAGIC".  You may change that
          directory here.  After changing the directory, you must create the
          new directory yourself and copy all of the program files (MM.COM,
          MM.000, MM.OVL, and MM.HLP) to the new directory.
     
          Data File Drive/Path:  At first installation, Magic Menus puts
          its data files into a directory called "\MAGIC\DATA".  You may
          change that directory here.  After changing the directory, you
          must create the new directory yourself and copy all of the data
          files (MM.DEF plus any you create yourself) to the new directory.
     
          Batch File Drive:  In "maximum memory mode", Magic Menus creates a
          batch file to execute commands.  Since Magic Menus must "stuff"
          the keyboard buffer (to pass execution to the batch file), the
          file name (including the path) is limited to fifteen characters
          (the size of the standard IBM PC keyboard buffer).  The batch file
          will be created in the root directory of the drive you indicate
          here.  It will be automatically erased after control is passed
          back to Magic Menus.  If you have a RAM disk installed on your
          computer, you can speed up program execution by making it your
          batch file drive.
     
          Printer Options:  You may indicate whether you have a serial or
          parallel printer, and which port it is connected to.
     
     After you have set the options, select 9 to return to the main menu.
     You may then save your changes by selecting 9 again, or abort the
     process by selecting 0.
     
     
     1.5  Suppressing Setup Options
     
          Once you have installed and configured Magic Menus, you may want
     to disable the setup features so that others may use the system but not
     be able to modify it.  MMINST has an option for toggling the setup
     options on and off.  Select option 4 from the "Magic Menus Installa-
     tion" and you will be asked whether or not you want to suppress the
     setup options.  Answer the question appropriately.
     
     
     
     Chapter 1: Installing Magic Menus                                    9



     
     1.6  Notes on the Maximum Memory Mode
     
          The "Maximum Memory Mode" in Magic Menus is designed to free up
     the memory that Magic Menus uses while running large applications.
     
          To this end, Magic Menus creates a batch file and invokes each
     command with a copy of the DOS "command processor".  To do this, Magic
     Menus must be able to find COMMAND.COM.
     
          You should specify DOS's search path (with the PATH command) so
     that Magic Menus can find COMMAND.COM.  This is usually the root
     directory of your hard drive.  A command such as
     
          PATH = C:\
     
     Usually does the trick.  You should place this command in your
     AUTOEXEC.BAT file so that it is automatically executed when you turn
     your computer on.  Consult you DOS Reference Guide for additional
     information.
     
          Magic Menus passes control to the batch file (called MMTMP.BAT) by
     stuffing the PC's keyboard buffer.  This may not work on some not-so-
     compatible machines.  Also, the maximum memory mode is not available
     under versions of DOS below 3.0.






























     
     
     Chapter 1: Installing Magic Menus                                   10



     
     
                       Chapter 2 -- A Quick Start Tutorial
     
     
          If you are like most people, you want to start using a software
     product "right out of the box".  While Magic Menus has many advanced
     features that will require some thought and planning to fully exploit,
     it is also friendly and easy enough to use immediately.  This tutorial,
     though brief, will lead you through the setup and main features.  You
     can then take your time and study the rest of the User's Guide in
     depth.
     
          We are assuming that you have not yet installed or configured
     Magic Menus.  If you have already installed it, skip section 2.1.  If
     you've played with it some (and made some data entries), please keep in
     mind that the tutorial can't know this and some of the screens may not
     appear exactly as described.
     
     
     2.1  Quick Install
     
          This "quick-install" feature assumes that you have an IBM PC (or
     true compatible) with a hard disk (labelled drive C) running DOS 2.0
     or higher.  If not refer to chapter 1, "Installing Magic Menus".
     
          Insert your Magic Menus distribution disk in drive A.  Type:
     
             A:
     
     and then <return>.  Now type:
     
             MMINST
     
     and <return>.  The Magic Menus installation screen will appear.  Select
     "1) First Time Install" by pressing a "1" and then <return>.  Read the
     instructions that are displayed and press return again.
     
          When Magic Menus asked what drive you are installing, press:
     
             C
     
     and then <return>.  Answer "Y" (and <return>) to the next question and
     away we go!.  The installation program will have copied all of the
     Magic Menus file to the hard disk.
     
          Now you will be asked five questions.  Magic Menus comes pre-
     configured for a standard IBM PC, so simply press <return> and accept
     the defaults for each.  (Press <return> five times.  The installation
     procedure will indicate that it has saved the new setups, and Magic
     Menus is ready to run!).
     
     


     
     
     Chapter 2: A Quick Start Tutorial                                   11



     2.2  Running Magic Menus
     
          After the installation, you will be in the root directory of your
     hard disk.  To start Magic Menus, simply type
     
          MAGIC
     
     and press <return>.  Magic Menus opening screen will appear.  Press any
     key at this point to continue.
     
          You should now be in Magic Menus' main screen.  Before we go any
     further, press the <F1> key.  You will see Magic Menus' help window
     appear.  The window is context-sensitive, and you can pop it up anytime
     for instant assistance.  Use your up and down arrow keys, or the <PgUp>
     and <PgDn> keys to move through the help message.
     
          Press <ESC> and the help message will disappear.  The <ESC> key is
     the universal back-up key in Magic Menus... you can always press <ESC>
     to get back to where you just were.
     
         Notice the menu bar across the top.  Use your left and right arrow
     keys to move the high-lighted bar from choice to choice.  Try it now.
     
          Now press <return>, and you will see that Magic Menus will "pull-
     down" another menu!  The up and down arrow keys will move the high-
     lighted bar through the choices.  Also try the left and right arrow
     keys.  They still work as well!  Press <ESC> and the pull-down menu
     will disappear.  Try it.
     
          Now let's continue with the Magic Menus tutorial.  Use your left
     arrow key to move the bar over the "DOS" choice.  Press <return> to
     pull the menu down.  You should see a list of familiar choices.  The
     first one is "Directory".  Make sure the high-lighted bar is over the
     word "Directory" and press return.  Magic Menus will pop-up a window.
     Press <F10> now, and watch what happens.  Magic Menus passed the "DIR"
     command to DOS, just as if you had typed it yourself!  Press any key
     now to return to Magic Menus.  Press <ESC> to exit the "Directory
     Window", and then <ESC> again to exit the "DOS" menu.
     
          Most of Magic Menus' functions work in this way.  You may want to
     play with the functions available in the DOS menu a while to familiar-
     ize  yourself with the concepts.
     
     
     2.3  Setting Up Applications
     
          Magic Menus' main purpose is to allow you to create and execute
     your own menus and choices.  Move the high-lighted bar over the word
     "Applications" and pull the menu down.  You will see two choices:
     
             Add application
             Edit application
     
     We can't edit an application since we haven't defined any yet.  Put the
     bar over "Add application" and hit <return>.  The "Application Entry
     
     
     Chapter 2: A Quick Start Tutorial                                   12



     Window" will appear.
     
          Now I'm going to lead you through a simple application set up.
     Just follow my instructions, and you'll soon catch on.
     
     Steps:
     
          1)  Your cursor should be at the "Menu Prompt" field.  type
     
                     Directory
     
              and press <return>.
     
     
          2)  For the "Hot Key", type
     
                     D
     
              and <return>, and then press <return> again (to skip the
              "Prompt for Disk" field).
     
     
          3)  You should now be at the the line that reads "Command 1:".
              Enter
     
                     dir
     
              and press <return>.
     
     
          4)  Where it says "Pause", type
     
                     Y
     
              and a "YES" will appear.
     
     
          5)  That's it!  Press <F10> now, and Magic Menus will save your
              setup.
     
     After saving the setup, you will notice that Magic Menus clears the
     data from the window.  That's because it is setting you up to enter
     another application.  We're done for now, so press <ESC> to exit the
     entry window.
     
          See what's happened?  Magic Menus has "magically" inserted your
     setup into the "Applications" menu!  It should now look like this:
     
             Directory
             Add application
             Edit application
     
     Place the high-lighted bar over the word "Directory" (if it's not
     there already) and press <return>.  You should now be looking at the
     directory on your disk!  Press any key to return to Magic Menus.
     
     
     Chapter 2: A Quick Start Tutorial                                   13



     
          That's a pretty simple example, and it may not seem like much.
     But Magic Menus will allow you to execute your own programs as well
     (such as Lotus 123, WordStar, CheckMate, etc), as well as simple DOS
     commands.  And you can execute more than one command in an application
     and use powerful parameter prompting commands.  We're not going to talk
     about all of Magic Menus' features in this tutorial, especially the
     more advanced ones.  They are covered in detail in the User's Guide.
     
          Let's try one more applications example.  Select "Add application"
     again so that you are back in the "Application Entry Window".  Now,
     follow the steps:
     
          1)  In the "Menu Prompt" field.  type
     
                     Type a file
     
              and press <return>.
     
     
          2)  For the "Hot Key", type
     
                     T
     
              and <return>, and then press <return> again (to skip the
              "Prompt for Disk" field).
     
     
          3)  You should now be at the the line that reads "Command 1:".
              Enter
     
                     type %1
     
              and press <return>.
     
     
          4)  Where it says "Pause", type
     
                     Y
     
              and a "YES" will appear.
     
     
          5)  Now keep pressing <return> until the cursor is in the "Prompt
              1 (%1):" field.  Type the following line:
     
                     File to Type:
     
              and press <return>.
     
     




     
     
     Chapter 2: A Quick Start Tutorial                                   14



          6)  You should now be in the "Response Length" field.  Type
     
                     12
     
             and then <return>.
     
     
          7)  Now keep pressing <return> until the cursor is in the
              "Description" field.  Type the following line:
     
                     This function types a file to the screen
     
              and press <return>.
     
     
          8)  That's it!  Press <F10> now, and Magic Menus will save your
              setup.
     
     Press <ESC> to exit the entry window.  Once again, Magic Menus has
     added the choice to the menu.  Your menu should now look like this:
     
             Directory
             Type a file
             Add application
             Edit application
     
     Move the high-lighted bar over "Type a file", and press <return>.  What
     you see now is a window asking you what file you want to type.  You
     told Magic Menus do do that when you entered "File to Type" in the
     "Prompt 1" field!  The space in which you have to enter your response
     is determined by the "Response Length" (you entered a 12).  Enter the
     file name:
     
             AUTOEXEC.BAT
     
     in the window and press <return>.  If that file is present in your
     current directory, DOS will display it on the screen.  If not, DOS will
     display the message "File not found".
     
          Well, that's the jist of defining applications.  There's a WHOLE
     lot more that you can do in defining the applications.  I can't begin
     to discuss them all here.  Turn to the chapter on "Applications" for
     discussion and examples!
     
     
     2.4  Other Menus
     
          In the meantime, let's continue our tutorial on Magic Menus.  You
     may notice that the "Applications" menu can only hold ten entries.
     Don't worry... you can easily expand that to meet your needs.  Move the
     high-lighted bar on the main menu to the "other Menus" option and pull
     the window down.  This menu looks a lot like the "Applications" menu,
     except that one choice is already defined (the "Main menu").  Select
     "Add menu setup" and the "Menu Entry Window" should open up.  Now,
     follow these steps:
     
     
     Chapter 2: A Quick Start Tutorial                                   15



     
          1)  Your cursor should be at the "Menu Prompt" field.  type
     
                     New menu
     
              and press <return>.
     
     
          2)  For the "Hot Key", type
     
                     N
     
              and <return>.
     
     
          3)  You should now be at the the line that reads "Menu Name:".
              Enter
     
                     My New Menu
     
              and press <return>.
     
     
          4)  Skip the "Password Level" and go to the "Description" field.
              Type:
     
                     This is a New Menu that I have Defined.
     
              and press <return> again.
     
     
          5)  Press <F10> now, and Magic Menus will save your setup.
     
     
     Press <ESC> now to exit the entry window.  Congratulations! You've
     defined a new menu!  You should see it listed on the screen.  Move the
     high-lighted bar over the "New menu" option and press <return>.  The
     menu name in the lower-right corner of the screen should now read "My
     New Menu".  Now, use the left arrow key to move the menu to "Appli-
     cations".  What do you see?
     
          You should see that there are no applications defined.  Where did
     they go?  No where!  They are still there, but if you want to use them,
     you must go back to the "other Menus" menu and select "Main menu"!  You
     see, you can define up to ten menus, and each menu can have up to ten
     applications, for a total of 100.  Again, this is just a brief tutoral
     to get you acquainted.
     
          Now let's go to some of the other features of Magic Menus.
     
     
     2.5  Pop-Ups
     
          Go to the "Pop-ups" menu on the main screen (you should have a
     good handle on the pull-down menu system by now).  Pull the menu down.
     
     
     Chapter 2: A Quick Start Tutorial                                   16



     Notice that the first five choices here have "<alt-key>" references?
     That is, you can pick these items by press their <alt-key> as well as
     from the menu.  In fact, you can pop these windows up almost ANYWHERE
     inside of Magic Menus!  You will find these to be a tremendous conven-
     ience!
     
          Try one out.  Press <alt-C> (that's the <ALT> key and the letter
     "C" at the same time).  A calculator should appear.  (If you use
     CheckMate-GL, you should recognize this calculator!).  Press <ESC> and
     you are back where you started.
     
          Now press <alt-L>.  This is the "File Listing Window".  What you
     see first is a prompt for a file spec.  Just press <return> for now,
     and the window will open.  It displays a simple listing of files on the
     disk.  You can move the high-lighted bar around the listing with the
     arrow keys.  Magic Menus can make great use of this window and the
     ability to select a file.  Refer to later chapters in the User's Guide
     for more information.  For now, just remember that this handy window is
     present, and press <ESC> to return to the "Pop-ups" menu.
     
          Let's give the "Window to DOS" a try.  Press <alt-W>.  What you
     see is a window that allows you to enter commands just as if you were
     at the DOS prompt!  Try it... type
     
             dir
     
     and press <return>.  Once again, a directory of the disk will appear.
     (We've found a lot of ways to get a directory of the files, haven't we?
     Remember that we're just using the DIR command as an example.  You can
     type any available DOS command or application in the "Window to DOS").
     
          Press any character key to return to Magic Menus.  Notice that the
     command you entered ("dir") is still shown on the screen?  This is
     because Magic Menus saves the last ten commands that you issue in this
     window.  Press the up arrow key and see what happens.  Magic Menus
     pulls the last command you entered into the command line.  You can re-
     issue the command quickly, and you may even edit it first!  But let's
     keep going now.  Press <ESC> to pop back to the menu.
     
          The last two "Pop-ups" require that we enter some information
     before they will be of any use.
     
          Select "1: add a directory choice" from the menu.  The "Directory
     Entry Window" appears.  Now follow the steps:
     
          1)  Your cursor should be at the "Menu Prompt" field.  type
     
                     Magic Menus' Data
     
              and press <return>.
     
     



     
     
     Chapter 2: A Quick Start Tutorial                                   17



          2)  For the "Directory", type
     
                     C:\MAGIC\DATA
     
              and <return>.
     
     
          3)  Press <F10> now, and Magic Menus will save your setup.
     
     
     Press <ESC> now to exit the entry window.  What have we done?  Press
     <alt-D> and you will see...
     
          You should now be looking at the "Select Directory Window".  Do
     you see the choice you just added?  Put the high-lighted bar over it
     and press <return>.  You may not think that anything has happened, but
     you have actually changed the active directory!  Look at the "Current
     Path" (located in the lower right of the screen).  It should read:
     
             C:\MAGIC\DATA
     
     Now, isn't that easier than typing "CHDIR C:\MAGIC\DATA" at the DOS
     prompt?  Press <ESC> to go back to the "Pop-ups" menu now, and let's
     finish up.
     
          The last pop-up is meant to help you control your printer.  Select
     "3: add printer string" to make an entry.  In this window, you can
     define codes to change your printer's mode (such as putting it in near
     letter quality, italics, etc).  Since there are literally hundreds of
     different printers available, we can't supply these control strings for
     you.  You can find them in your printer's manual.  Magic Menus uses a
     common way of entering the control strings.  The method is discussed in
     detail in the "Pop-ups" chapter of the User's Guide.  For now we'll
     just go through a quick example and leave the details to the User's
     Guide.  Follow the steps!
     
          1)  Your cursor should be at the "Menu Prompt" field.  type
     
                     Just a Test
     
              and press <return>.
     
     
          2)  For the "Printer String", type
     
                     \72\101\108\108\111\33\13\10
     
              and <return>.
     
     
          3)  Press <F10> now, and Magic Menus will save your setup.
     
     
     Press <ESC> now to exit the entry window.  Press <alt-P> to invoke the
     "Printer Control Window".  Make sure that your printer is on, on-line,
     
     
     Chapter 2: A Quick Start Tutorial                                   18



     and has some paper.  Select your new entry by putting the bar over it
     and pressing <return>, and you should get the message!  (In reality you
     will use this window to send un-printable CONTROL strings to your
     printer.  We just used this example here to demonstrate the principle,
     since we have no way of knowing what type of printer that you have).
     
          One final thing.  Try pressing <alt-C> now.  Now press <alt-W>.
     Now <alt-D>.  See?  You can pop windows up on top of one another (up to
     several layers deep).  Remember, you DON'T have to be in the "Pop-ups"
     menu to invoke these windows.  You can call them up almost anywhere
     inside of Magic Menus!
     
          To end your initial tour of Magic Menus, keep pressing the <ESC>
     key until you get the question:
     
             Exit Magic Menus?
     
     Answer yes, and you're back to DOS.  We've just barely scratched the
     surface of Magic Menus' many abilities, so don't forget to ponder over
     the User's Guide.  This tutorial should help get you started, however.
     The help screens also offer a lot of explanation as you look at some of
     the stuff we didn't cover here (such as "Boot options" and "Options").
     Enjoy!
     































     
     
     Chapter 2: A Quick Start Tutorial                                   19



     
     
                       Chapter 3 -- Things You Need to Know
     
     
          This section discusses some of the "basics" of Magic Menus's
     operation.
     
     
     3.1  The Bottom Line
     
          As you run Magic Menus, the bottom line of the screen summerizes
     the functions that are available to you.  It is always present, and
     should speed your use of the program as you become familiar with its
     many capabilities.  Many of Magic Menus' functions are activated by
     the PC's function keys.  The bottom line identifies the operation of
     these keys (and others).
     
     
     3.2  The Top Line
     
          The right side of the top line of the screen displays the status
     of your keyboard (CAPS LOCK, NUM LOCK, SCROLL LOCK).  It also indicates
     whether you are in insert or overwrite mode (for text entry), and
     whether you are currently directing Magic Menus to write directly to
     the screen memory or through the BIOS.  (NOTE:  These flags can be
     turned off at the user's option.  They may not work properly on non-IBM
     compatible machines).
          The left side of the top line is reserved for working messages.
     Do not be alarmed if they flash by too fast to read... that simply
     means that your computer is fast!
     
     
     3.3  The Pull-Down Menu System
     
          Magic Menus uses the popular "pull-down" menu system as its
     primary user interface.  After your start Magic Menus, you will see a
     row of "choices" for you to choose from.  You may select any of the
     choices in one of two ways: first, by moving the highlighted bar to the
     item of your choice (using the left or right arrow keys) and then
     pressing "<return>" (which we will also refer to as <CR>), or, by
     pressing the capitalized letter of your choosing.  Either method will
     instantly produce a secondary menu (with a bar that moves up and down
     instead of left to right).  Select individual functions in the same
     manner.
     
     
     3.4  The Help System
     
          Magic Menus includes built in on-line help.  Just press <F1> at
     any time while running Magic Menus for instant help.  Some help screens
     have multiple pages, so use the up and down arrow keys or the <PgDn>
     and <PgUp> keys to move through the message.  The help screens are
     contained in the file "MM.HLP" and this file must be present in the

     
     
     Chapter 3: Things You Need to Know                                  20



     program file path at runtime.  The program file path is set with
     MMINST.COM.
     
     
     3.5  Pop-Ups
     
          Magic Menus contains several "pop-up windows" to make managing
     your PC easier.  These windows may be popped up anywhere inside Magic
     Menus.  They will just be mentioned here as they are covered in depth
     later in this User's Guide.
     
     
          Calculator: Strictly for your convenience, we have implemented a
          financial calculator inside of Magic Menus.  Pressing <alt-C>
          anytime will pop the calculator up.  The calculator has a rolling
          tape to help you keep track of your math, and you can even direct
          the output to the printer!
     
          Directory Control: Press <alt-D> for the directory control window.
          You may define up to twenty directories that you can connect to
          quickly and easily.  You define the directories under the "Pop-
          ups" menu.
     
          Printer Control: Press <alt-P> for the printer control window.
          From here you can send up to twenty different control strings to
          your printer.  You define the control strings under the "Pop-ups"
          menu.
     
          DOS Window: For instant access to DOS commands (and other appli-
          cations) you can press <alt-W>.  From here you can type commands
          in just as if you were at the DOS prompt.  Magic Menus even
          remembers your last ten commands and lets you play them back with
          full editing features!
     
     
     3.6  Date Formats
     
          One of the most annoying aspects of many programs is rigid data
     entry, especially DATES.  We built a "free-format" date entry into
     Magic Menus.  Whenever Magic Menus calls for a date to be entered, you
     can key it in almost any fashion you choose.  Dates like 7-12-84,
     3/5/86, 12 Sept 82, and so forth are all valid.  So long as you include
     some delimiter between the month, the day, and the year Magic Menus
     should figure out what you mean.  A delimiter can be a space, a dash, a
     slash, or virtually any non-number or non-letter.  You can even leave
     all or part of the date out, and Magic Menus will use defaults (the DOS
     date).
     
     






     
     
     Chapter 3: Things You Need to Know                                  21



     3.7  Editing within Magic Menus
     
          All data entry fields within Magic Menus are fully "editable."
     The following control-key combinations are defined within Magic Menus:
     
          Control Key     Alternate Key               Function
          -----------     -------------       -----------------------
     
          Control-D        right-arrow        move one character right
          Control-S        left-arrow         move one character left
          Control-F                           move one word right
          Control-A                           move one word left
          Control-QD       END                move to end of text
          Contril-QS       HOME               move to start of field
     
          Control-E        up-arrow           move up one field
          Control-X        down-arrow         move down one field
     
          Control-G        DEL                delete character at cursor
          Control-T                           delete word right
          Control-QY                          delete field right
          Control-Y                           delete entire field
          Control-H        BACKSPACE          delete character left
     
          Control-V        INS                toggle INSERT/OVERWRITE
     
     
          Notice that the control sequences closely resemble those of
     MicroPro's WordStar.  We chose these combinations because of WordStar's
     popularity.  For your convenience we have also implemented the PC's
     standard editing keys as alternatives.
     
     
     3.8  Suppressing Setup Options
     
          Once you have installed and configured Magic Menus, you may want
     to disable the setup features so that others may use the system but not
     be able to modify it. The Magic Menus installation program (MMINST.COM)
     has an option for toggling the setup options on and off.  Select option
     4 from the "Magic Menus Installation" and you will be asked whether or
     not you want to suppress the setup options.  Answer the question
     appropriately.  See chapter 1 for more details on changing Magic Menus'
     configuration.
     
     
     









     
     
     Chapter 3: Things You Need to Know                                  22



     
     
                                Chapter 4 -- Menus
     
     
          This chapter requires careful reading.  The word "menu" is neces-
     sarily used often, and the text may appear to be somewhat tongue-
     twisting!
     
          In Magic Menus, you can define up to ten unique "menus" beneath
     the "other Menus" option on the main menu bar.  When you select "other
     Menus", a pull-down menu appears that lists the menu choices available
     to the user.  As with the other pull-downs in Magic Menus, the user may
     select his or her choice by moving the high-lighted bar over the
     desired option and pressing <return>.  An alternative method of making
     a selection is to use the desired option's "hot key".
     
          When Magic Menus is installed for the first time, it automatically
     creates a menu called the "Main menu".  It does this because you must
     always have at least one menu defined.  The "other Menus" menu includes
     two additional options ("Add menu setup" and "Edit menu setup") that
     permit you to add, edit, and delete up to nine additional menus.
     
          Each menu in Magic Menus can have up to ten "Applications" assoc-
     iated with it.  These "applications" are user-defined programs such as
     a word-processor, a spreadsheet, etc.  (Applications are discussed in
     detail in chapter 5).  By defining multiple menus under the "other
     Menus" option, you can logically group your applications together.
     Also, since you can password-protect entire menu setups, you may group
     applications together by user access.
     
     
     4.1  Adding a Menu Setup
     
          When you select "Add menu setup", the first item that you must
     enter is the menu prompt (this is the name that will appear on the
     pull-down menu).  For instance, if you are defining a menu setup to
     contain all of your bookkeeping programs you could enter "Bookkeeping"
     here.  Magic Menus will automatically insert the option in the menu in
     alphabetical order.  The next field is the "hot key".  This key will
     automatically invoke the boot option (while the menu is active).  You
     may, for example, want to enter "B" for "Bookkeeping".
     
          In the "Menu Name" field, you may enter a string of text that will
     appear in the lower right-hand corner of the main screen whenever the
     menu is active.  For our bookkeeping example, you may enter "Accounting
     and Bookkeeping Programs".  The menu name is intended to remind the
     user of which menu is currently active.
     
          You may password-protect the menu by entering a password level.
     If you enter level 0, no password will be required to activate the
     menu.  See chapter 9 for a more thorough discussion of passwords and
     levels.
     
          The next field in the window calls for you to enter a line of text
     
     
     Chapter 4: Menus                                                    23



     up to fifty characters long.  This is a short description of the menu
     setup.  It will be displayed in Magic Menus' description field (on the
     main screen) while the high-lighted bar is over this option.  It is
     simply another way that Magic Menus makes understanding and selecting
     menu choices easier.
     
          After you have entered all of the data, press <F10> to record your
     entries on disk.  Magic Menus will insert the new selection in the
     menu, and it is now available to the user!
     
     
     4.2  Editing Menu Setups
     
          When you select "Edit menu setup"  under the "other Menus" menu, a
     window will appear and display the data corresponding to the first menu
     setup in the menu.  You can edit and enter data in the same fashion as
     when entering new options (see section 4.1 above).
     
          You must press <F10> to make your changes permanent.  Pressing the
     <F4> key will delete the displayed entry.  To edit the other menu set-
     ups, use the <F7> and <F8> keys to move backwards and forwards through
     the list.
     
     
     






























     
     
     Chapter 4: Menus                                                    24



     
     
                            Chapter 5 -- Applications
     
     
          This chapter discusses the options available in Magic Menus for
     defining menu choices that will appear under the "Applications" menu.
     "Applications" refers to programs and commands that the user owns or
     purchases from other software vendors.  These can range from a word
     processor to a checkbook program to a spreadsheet, etc.  Many of these
     programs require (or accept optional) parameters when they are run.
     You may also need to change drives or directories before running an
     application, or perhaps insert a key or data disk.  Magic Menus lets
     you automate and direct these functions!
     
          The "Applications" menu works like the other pull down menus.  You
     select your choice by moving the high-lighted bar over the desired item
     and pressing <return>.  You may also use the item's "Hot Key" to
     quickly select it (since you define these applications, you will need
     to define each hot key.  The process is discribed below).
     
     
     5.1  Adding an Application
     
          Under the "Applications" menu there are two pre-defined options.
     The first one is "Add application".  It is in this module that you
     define your own menu choices.
     
          The first item that you must enter is the menu prompt (this is the
     name that will appear on the menu).  For instance, if you are defining
     an application to run the PC-Write word processor, you could enter "pc-
     Write" here.  Magic Menus will automatically insert the option in the
     menu in alphabetical order.  The next field is the "hot key".  This key
     will automatically invoke the boot option (while the menu is active).
     You may, for example, want to enter "W" for your "pc-Write" application
     option (notice that we chose to capitalize the letter "W" only.  This
     emphasizes our chosen hot key).
     
         The "Prompt for Disk" field will allow you to enter a message up to
     forty characters long.  You can use this field if you want Magic Menus
     to prompt the user to take some action before running the application
     (such as inserting a key diskette for a copy-protected program or
     inserting a data diskette).  If the field is not blank (that is, it
     contains a message), Magic Menus will pause before executing the
     application and display the message you entered.  For example, suppose
     you wanted to edit files on a floppy disk in drive B with PC-Write.
     You could enter:
     
             "INSERT DOCUMENT DISK INTO DRIVE B"
     
     as your "Prompt for Disk" message.  Magic Menus will remind you to
     insert the proper disk at run time!
     
     

     
     
     Chapter 5: Applications                                             25



     5.1.1  Commands
     
          The next five lines in the set-up window contain the actual com-
     mands that you tell Magic Menus to execute.  For example, suppose that
     when you want to use PC-Write, you go to your PC-Write directory,
     execute PC-Write (the command is "ED"), and when you are done you want
     to go to your root directory.  You would enter the following commands:
     
             Command 1: cd \pcw
             Command 2: ed
             Command 3: cd \
     
     As you can see, the first command takes you to the correct directory,
     the second command runs the program, and the last one returns you to
     your root directory.
     
          The "Pause" field to the left of each command is used to instruct
     Magic Menus to pause (or not to pause) after executing that command.
     You would want to pause after a command if you need to read something
     on the screen.  This is not necessary in the above example, but for
     commands like "DIR" you would want to set "Pause" to 'YES".
     
     
     5.1.2  Prompts
     
          Below the "Commands" are five lines marked "Prompts".  These
     represent a very powerful feature of Magic Menus.  You can use them to
     direct Magic Menus to prompt the user for parameters that you want
     passed to the commands you entered above.  You have a lot of options
     here, including automatically popping up the "File Listing", "Directory
     Control", and the "Printer Control" windows, and creating your own
     windows that can present the user with pre-defined and restricted
     choices.
     
          The simplest way to use the prompts is to enter a short line of
     prompt text and indicate a "Response Length".  For instance, suppose
     you wanted Magic Menus to prompt you for a file to edit before running
     PC-Write, and then pass that file name to PC-Write.  We would change
     the above example to read:
     
             Command 1: cd \pcw
             Command 2: ed %1
             Command 3: cd \
     
     The only change is the "%1" after the "ED" command.  Magic Menus sees
     the "%1" and looks to the "Prompts" to resolve the variable.  In this
     case, Magic Menus will look at "Prompt 1", since it corresponds to %1.
     In the "Prompt 1" field, we could enter the following text:
     
             Prompt 1 (%1): File to Edit:
     
     To the left of this field is another field labelled "Response Length".
     We could enter a "12" here, since file names have a maximum length of
     twelve.  At run-time, Magic Menus will pause before executing the "ED"
     command and open a window displaying our prompt and allowing the user
     
     
     Chapter 5: Applications                                             26



     to enter a string up to the length of "Response Length".  (NOTE: the
     maximum response length is forty).  After the user has responded and
     pressed <return>, Magic Menus will replace the %1 in Command 2 above
     with the users input.
     
          The prompts can be used in any order, and they can be freely mixed
     throughout the commands (and even the other prompts).  Suppose, in our
     example, we also wanted to ask the user what directory to look for our
     file in before we ask for the file to edit.  Let's change our commands
     as such:
     
             Command 1: cd \pcw
             Command 2: ed %2\%1
             Command 3: cd \
     
     Now lets change our prompts:
     
             Prompt 1 (%1): File to Edit:
             Prompt 2 (%2): Directory:
     
     Give Prompt 2 a "Response Length" of 40.  Now Magic Menus will file ask
     for a directory name and pause.  Then it will ask for a file name.
     After both entries, Magic Menus will combine the two and pass the
     complete parameter to PC-Write.
     
          You may use the "%" prompts more than once.  Simply include the
     prompt as many times as you wish in the commands.  Magic Menus will
     invoke the prompt window each time it encounters a "%" prompt.
     
     
     5.1.2.1  The "@" Processor
     
         You may also use the results of a "%" prompt more than once without
     continually re-prompting the user.  The "@" prompts use the results of
     the "%" prompts.  Let's look at an example.  Suppose that after we edit
     a file with PC-Write, we want to immediately print the same file out
     with PC-Write's printing program ("PR.EXE").  Change the above command
     list to:
     
             Command 1: cd \pcw
             Command 2: ed %2\%1
             Command 3: pr @2\@1
             Command 4: cd \
     
     When Magic Menus builds the execution list, it will take the parameters
     you entered for %1 and %2 and replace not only the %1 and %2 prompts,
     but also the @1 and @2 prompts.  You may use the "@" prompts as often
     as you wish as well.
     
     
     5.1.2.2  The "+" Processor
     
          When you define the prompts, you can instruct Magic Menus to pop-
     up the "File Listing Window" instead of allowing the user to type a
     file name in.  This is useful when you want to process existing files
     
     
     Chapter 5: Applications                                             27



     but don't recall their names.  The "+" commands MUST be entered in the
     "Prompts", however, and not in the "Commands".  Example:
     
             Command 1: type %1                   Pause: YES
     
             Prompt 1 (%1): +
     
     In the above example, we are using the DOS "TYPE" command to list a
     file to the screen.  We want to ask the user what file to type, so we
     use %1 to invoke the prompt processor.  Magic Menus looks at the
     "Prompt 1" field and sees a "+", so it opens the "File Listing Window".
     The user can select a file and press return.  Magic Menus will replace
     the %1 with that file name!
     
          The "+" processor has some options as well.  There are times when
     you may want to pass only PART of the file name to the command.  Sup-
     pose, for instance, you want to assemble a file with MASM (MicroSoft's
     assembler) which assumes a file type of ".ASM".  You can direct the "+"
     processor to return only the file name (and not the extension) as such:
     
             Command 1: MASM %1;
     
             Prompt 1 (%1): +2
     
     The "2" following the "+" tells Magic Menus to return the name only (no
     extension).  You may also return the extension without the name.  Below
     are the options for the "+" processor:
     
             +1 : return both name and extension (same as "+" alone)
             +2 : return name only
             +3 : return extension only
     
     An additional option you have is to specify a file "mask" that the "+"
     processor will pass to the "File Listing Window".  In our MASM example,
     we want to look only at ".ASM" files.  Let's change our definition as
     such:
     
             Command 1: MASM %1;
     
             Prompt 1 (%1): +2 *.ASM
     
     In this case, the "File Listing Window" will only display files with an
     extension of ".ASM".  With a little thought you can see how powerful
     this feature might be.
     
     
     5.1.2.3  The "#" Processor
     
          You can also instruct Magic Menus to display the "Directory Con-
     trol" window at strategic times.  You do this by including a "#" in the
     prompt definition.
     



     
     
     Chapter 5: Applications                                             28



          Like the "+" processor, the "#" processor has several options.
     These are listed below:
     
             #1 : change directory, return nothing
             #2 : change directory, return directory name w/o trailing "\"
             #3 : change directory, return directory name with trailing "\"
             #4 : return directory name w/o trailing "\"
             #5 : return directory name with trailing "\"
     
     In the above list, choices 1,2 and 3 not only affect the "%" variable,
     but they also change the logged drive and directory to the one select-
     ed (this is how the Directory Control Window normally operates when
     you pop it up).  Choices 4 and 5 do not change the current directory
     but do return the full directory name.  Choice number one returns no
     value at all.  Choices 2 and 4 return the directory name without a
     trailing "\", ie
     
             C:\MAGIC\DATA
     
     while choices 3 and 5 would return a directory name of the form:
     
             C:\MAGIC\DATA\
     
     The exception is the root directory, which always ends in a backslash.
     Look at the following example to get an idea of usage:
     
             Command 1: type %2%1
     
             Prompt 1 (%1): +1@2*.*
             Prompt 2 (%2): #5
     
     We're getting into some of the true power of Magic Menus here, and this
     example will take a little thought.  The command that we want to exe-
     cute is the simple DOS "TYPE" command.  Choosing the file to type is
     the interesting part.  The command is "type %2%1".  As Magic Menus
     processes the line, the first prompt it comes to is %2.  This prompt
     contains a "#5" which will immediately pop the Directory Control Window
     up.  The user can then select any of the defined directories (see
     chapter 6 for a discussion on defining the directories).  Magic Menus
     returns the full directory name and replaces the %2.  Next, Magic Menus
     sees the %1.  This prompt contains "+@2.*.*".  Well, the @2 is immedi-
     ately replaced with the directory name that we got from %2.  That name,
     plus the "*.*" file mask are then passed to the "+" processor and the
     "File Listing Window" appears.  The user selects a file, and Magic
     Menus returns the file name.  The file name is attached to the direct-
     ory name and the file is typed out.
     
          Study the example, and give it a try.  Hopefully you will begin to
     see some of the complex setups that are possible with Magic Menus.  And
     there is more to come!
     
     



     
     
     Chapter 5: Applications                                             29



     5.1.2.4  The "$" Processor
     
          The "$" command in a Magic Menus' prompt field instructs Magic
     Menus to pop the "Printer Control Window" up.  This window is used to
     control the mode of your printer (see chapter 6).  As with the "#"
     processor, you have some options:
     
             $1 : immediate send control string, return nothing
             $2 : return printer control string
     
     The first option works just as if you had invoked the window yourself.
     It immediately sends the control string to your printer, but returns no
     value into the variable.  The second option does not send the control
     string, but instead returns the ASCII string corresponding to the
     control string.  Here is a simple example:
     
             Command 1: %1 copy %2 lpt1:
     
             Prompt 1 (%1): $1
             Prompt 2 (%2): +*.pas
     
     This setup will pop the printer control window up and wait for a selec-
     tion.  (The user may select near letter quality, draft mode, italics,
     or whatever).  Magic Menus will then send the proper string to the
     printer, and then immediately pop-up the "File Listing Window" and
     display all files that end with ".PAS".  When the user selects his
     choice, the file is printed out.   Notice that in the above example, we
     put the command "copy %2 lpt1:" on the same line as our %1 prompt.
     This is OK here since the %1 prompt contains "$1", which will return no
     value.  If the prompt contained "$2", we could not do this.
     
         We have supplied a small utility to aid you in using the "$2"
     option.  It is a file called "PRTR.COM" and you will find it on your
     Magic Menus' distribution disk.  It takes the following syntax:
     
             PRTR <printer port> \<decimal code>\<decimal code>...
     
     where
     
             <printer port> = LPT1: (or LPT2:, COM1:, or COM2:).
     
     The "\<decimal code>\<decimal code>..." syntax is the same that is used
     for the printer control window (see chapter 6).  Therefore, the
     following setup would work functionally the same as the one listed
     above:
     
             Command 1: prtr LPT1: %1
             Command 1: copy %2 lpt1:
     
             Prompt 1 (%1): $2
             Prompt 2 (%2): +*.pas
     
     You may also use the "PRTR.COM" command to send "canned" printer
     strings to the printer during an application.  Just enter the printer
     string in the command line rather than referencing the "$" processor.
     
     
     Chapter 5: Applications                                             30



     
     
     5.1.2.5  The "=" Processor
     
          Magic Menus has another very powerful prompt processor.  You can,
     in effect, create your own pop-up menus with pre-defined choices.
     These choices both assist and limit the user.  Lets look at an example:
     
             Command 1: type %2%1
     
             Prompt 1 (%1): +@2*.pas
             Prompt 2 (%2): =dir.pmt
             Prompt 3 (%3): Directory:             Response Length: 40
     
     In this example, the "%2" prompt references the "=" processor.  If you
     start a prompt with "=", then immediately afterwards you must list a
     valid file name.  The file is one that YOU create, and you must place
     it in the Magic Menus' data file directory.  The file has the following
     format:
     
     
             <Menu Title>
             <Menu Choice #1>=<Item #1>
             <Menu Choice #2>=<Item #2>
             <Menu Choice #3>=<Item #3>
                  .
                  .
             <Menu Choice #10>=<Item #10>
     
     
     The file must be a straight ASCII file.  You may define from one to
     ten different choices.  Below is an example based on the above:
     
             Directories
             Current Directory=
             Root (Drive C)=C:\
             Magic Menus' Data=C:\MAGIC\DATA\
             Any Directory=%3
     
     When the our application example is executed, Magic Menus will first
     see the %2 prompt and run the "=" processor.  The file listed above
     will cause Magic Menus to create a menu with four choices.  The title
     of the menu is "Directories".  The menu will look something like this:
     
            +----Directories----+
            |                   |
            | Current Directory |
            | Root (Drive C)    |
            | Magic Menus' Data |
            | Any Directory     |
            |                   |
            +--------------------
     
     The high-lighted bar in the menu can be moved around with the arrow
     keys.  You select an item by placing the bar over it and pressing
     
     
     Chapter 5: Applications                                             31



     <return>.  Magic Menus will return the value that each selection was
     set EQUAL to in the menu definition file.  So, if you picked "Magic
     Menus' Data' from the menu, Magic Menus would return the string
     "C:\MAGIC\DATA\".
     
          Notice that the "Current Directory" option returns nothing.  This
     should be obvious, since if we return no directory name, DOS will use
     the current (default) directory when it executes the "TYPE" command.
     Also notice that the choice "Any Directory" will return the string
     "%3".  This is another prompt command, and Magic Menus will proceed to
     process it as well!  In this case, another window will open asking for
     a directory name.  (Please note here that the user must end his or her
     entry with a "\", or Magic Menus can't create a proper path name).
     
          With a little thought, you can begin to see some powerful and
     useful configurations are possible.
     
     
     5.1.3  Finishing Up
     
          You may password-protect the application by entering a password
     level.  If you enter level 0, no password will be required to execute
     the application.  See chapter 9 for a more thorough discussion of
     passwords and levels.
     
          The next field is the "Information File" field.  What Magic Menus
     expects here is a file name.  The information file is an ASCII text
     file that contains instructions or information for the user.  The use
     of this file is totally optional, and if you desire to use it, you will
     have to create it yourself.  To do this, use any text editor that
     produces pure ASCII text (no control codes or soft characters).  Enter
     any discussion that you feel will aid the user at the time of execu-
     tion.  Magic Menus will display this file when the option is picked
     from the menu, and will pause (waiting for a <return>) while the user
     reads the screen.  Please note that Magic Menus will only display the
     first 22 lines of the file, and allows only 80 characters per line.
     The information file must reside in the Magic Menus' data file path
     (This is usually \MAGIC\DATA.  It is the same directory that contains
     the file MM.DEF).  If Magic Menus cannot find the file you indicate
     here, or if the "Information File" field is left blank, Magic Menus
     simply skips the information display and continues.
     
          The next field in the window calls for you to enter a line of text
     up to fifty characters long.  This is a short description of the appli-
     cation.  It will be displayed in Magic Menus' description field (on the
     main screen) while the high-lighted bar is over this option.  It is
     simply another way that Magic Menus makes understanding and selecting
     menu choices easier.
     
          The "Maximum Memory Flag" is the last field in the window.  It is
     a "YES/NO" question.  If you set it to "YES", Magic Menus will create a
     batch file to run the application and terminate itself.  This frees up
     the memory that Magic Menus uses and allows the application to run with
     the additional memory available.  The last command in the batch file
     re-loads Magic Menus and restores its operating state.
     
     
     Chapter 5: Applications                                             32



     
         There are pros and cons to using the maximum memory mode.  Obvious-
     ly, the additional memory can be useful (and may be necessary for large
     applications).  The con is that the execution and return take a bit
     longer since Magic Menus has to terminate and re-load.  The time is not
     excessive for hard disks, however, since Magic Menus saves its environ-
     ment and does not have to re-process the menu definition file.  You may
     want to try applications in both modes and see which one best suits
     your needs.
     
     TECHNICAL NOTE:  Magic Menus passes control to the batch file by "stuf-
     fing" the keyboard buffer with the batch file name.  This feature works
     fine on IBM PCs and true compatibles, but may not operate properly on
     non-compatible machines.
     
          After you have entered all of the data, press <F10> to record your
     entries on disk.  Magic Menus will insert the new selection in the
     menu, and it is now available to the user!
     
     
     5.2  Editing Applications
     
          When you select "Edit application" under the "Applications" menu,
     a window will appear and display the data corresponding to the first
     application in the menu.  You can edit and enter data in the same
     fashion as when entering new options (see section 5.1 above).
     
          You must press <F10> to make your changes permanent.  Pressing the
     <F4> key will delete the displayed entry.  To edit the other applica-
     tions, use the <F7> and <F8> keys to move backwards and forwards
     through the list.
     
     






















     
     
     Chapter 5: Applications                                             33



     
     
                               Chapter 6 -- Pop-Ups
     
     
          Magic Menus has several "pop-up" windows that users will find very
     convenient.  These windows may be popped-up almost anywhere within
     Magic Menus.
     
     
     6.1  Directory Control Window
     
          One of DOS's most powerful features is the ability of the user to
     divide a disk into separate "directories".  These directories contain
     files and can be used to logically group related files together.  You
     may also create directories in a tree-like structure that will let you
     nest your files away in very intricate paths.  This User's Guide is not
     a tutorial on the abilities of DOS, however.  Consult your DOS
     Reference Guide or a good book on MS-DOS for more information on the
     power and usefulness of directories.  What Magic Menus does for you is
     make the management of these directories much easier.
     
          Pressing <alt-D> while in Magic Menus will pop-up the Directory
     Control Window.  What you will see is a window with space for twenty
     entries.  Each one of these entries can allow you to immediately
     connect to a directory (that is, change the active directory).  Before
     you can use this feature, you must enter your directories under the
     "Pop-ups" menu ("add directory choice").  While some programs releive
     you of this step by automatically reading in available directories,
     Magic Menus follows a different philosophy for two specific reasons:
     
             1)  Your menu choices may be given names other than the DOS
                 directory names (names that make more sense).  You could,
                 for instance, name your spreadsheet directory "Lotus 123"
                 (while the actual name might be "\WORK\SPRDSHT\LOTUS").
                 The name on the menu is easier for novices to understand.
     
             2)  You can also "select" which directories you wish to make
                 available to other users.  If you do not want a directory
                 to be available, then simply don't include it on the list.
                 Also, each choice can be individually password protected.
     
          To use the pop-up window, press <alt-D>.  You may then use the
     arrow keys to position the high-lighted bar over your choice.  Press
     <return> and you will automatically connect to the desired directory.
     You may also select a "hot-key" from the menu (letters A through T).
     
          The choice you made may also change the logged drive (see below).
     Also, note that Magic Menus does not check the validity of the path
     names nor does it create or unsure that the directories exist.  If the
     path is invalid, or the drive is not ready, Magic Menus will simply
     abort the operation and will leave you in the currently active direc-
     tory.
     
          Remember that you can invoke this window almost anywhere within
     
     
     Chapter 6: Pop-Ups                                                  34



     Magic Menus.  You can also set it up to appear at specific times
     automatically while running an "application" (see chapter 5).  The
     discussion below details the definition and editing of choices within
     this window.
     
     
     6.1.1  Defining Directory Choices
     
          Under the "Pop-ups" menu, you will see the choice "1: add direc-
     tory choice".  Select this option by either moving the high-lighted bar
     over it or pressing the hot key ("1").  You will see the "Directory
     Entry Window" appear.
     
          This window needs three items.  The first is the "Menu Prompt".
     This is the name that will appear in the Directory Control pop-up
     window.  Select a name here that makes sense to you (or the people that
     will be using the system).  Next, you need to enter the actual DOS
     directory.  You must enter a complete path, and follow all of the
     standard DOS rules for directory names.  For instance, the following
     directory entries are all valid:
     
             C:\
             \DOS
             \WORDSTAR
             B:\CMATE\DATA
     
     Note that the only entry that should end in a back-slash ("\") is the
     root directory.  Also note that you may include a drive name in the
     path.  For more information on directories and path names, consult a
     reference on DOS.
     
          The last item that you need to enter in the Directory Entry Window
     is a password level.  Chapter 9 discusses the use and set-up of pass-
     words within Magic Menus.
     
          Once you have entered all the information, you must press <F10> to
     save the set-up to disk and add it to the Directory Control Window.
     Magic Menus will insert the new choice alphabetically (based on the
     Menu Prompt that you entered above).  This choice is now available
     within the pop-up window.
     
     
     6.1.2  Editing Directory Choices.
     
          The option: "2: edit directory choice" under the "Pop-ups" menu
     lets you modify or delete directory that you have entered.  The "Direc-
     tory Edit Window" will appear, and will contain the data for the first
     choice in the Directory Control Window.  You may edit the contents as
     desired.  Simply press <F10> to save your changes.
     
          Pressing <F8> will move you forward through the directory choices.
     The <F7> key will move you backward.  To delete an entry, press <F4>.
     You will be prompted for confirmation before Magic Menus erases the
     selection.
     
     
     
     Chapter 6: Pop-Ups                                                  35



     
     6.2  Printer Control Window
     
          Pressing <alt-P> while in Magic Menus will pop-up the Printer
     Control Window.  What you will see is a window with space for twenty
     entries.  Each one of these entries can immediately send a control
     string to your printer.  These control strings can do such things as
     reset your printer, change your printer from PICA to ELITE, enter near
     letter quality mode, etc.  Since there are literally hundreds of
     different printers, and since the tastes of users will vary, you will
     need to enter these control strings yourself before you can use this
     window (see section 6.2.1).
     
          To use the pop-up window, press <alt-P>.  You may then use the
     arrow keys to position the high-lighted bar over your choice.  Press
     <return> and you will automatically send the control string to your
     printer.  You may also select a "hot-key" from the menu (letters A
     through T).
     
          Remember that you can invoke this window almost anywhere within
     Magic Menus.  You can also set it up to appear at specific times
     automatically while running an "application" (see chapter 5).  The
     discussion below details the definition and editing of choices within
     this window.
     
     
     6.2.1  Defining Printer Control Choices
     
          Under the "Pop-ups" menu, you will see the choice "3: add printer
     string".  Select this option by either moving the high-lighted bar over
     it or pressing the hot key ("3").  You will see the "Printer Control
     String Entry Window" appear.
     
          This window needs three items.  The first is the "Menu Prompt".
     This is the name that will appear in the Printer Control pop-up
     window.  Select a name here that makes sense to you (or the people that
     will be using the system).  Next, you need to enter the actual printer
     control code.
     
          Printer control codes are sequences of special characters that can
     change the operation of your printer.  Instead of printing the codes
     out, the printer interprets the code and reconfigures itself.  The
     codes are usually a sequence of characters following an ESCAPE (decimal
     value 27).
     
          The printer control codes can be found in your printer manual.
     The format for entry is
     
             \<decimal code>\<decimal code>\....
     
     The back-slashes delimit the codes.  Below is an example:
     
             \27\85
     

     
     
     Chapter 6: Pop-Ups                                                  36



          This string represents an <ESC> 'U'.  (That's an escape-capital-
     U).  This is a popular means of defining printer codes.
     
     
          The last item that you need to enter in the Printer Control
     String Entry Window is a password level.  Chapter 9 discusses the use
     and set-up of pass-words within Magic Menus.
     
          Once you have entered all the information, you must press <F10> to
     save the set-up to disk and add it to the Printer Control Window.
     Magic Menus will insert the new choice alphabetically (based on the
     Menu Prompt that you entered above).  This choice is now available
     within the pop-up window.
     
     
     6.2.2  Editing Printer Control Choices.
     
          The option: "3: edit printer string" under the "Pop-ups" menu lets
     you modify or delete printer strings that you have entered.  The
     "Printer Control String Edit Window" will appear, and will contain the
     data for the first choice in the Printer Control Window.  You may edit
     the contents as desired.  Simply press <F10> to save your changes.
     
          Pressing <F8> will move you forward through the printer string
     choices.  The <F7> key will move you backward.  To delete an entry,
     press <F4>.  You will be prompted for confirmation before Magic Menus
     erases the selection.
     
     
     6.3  Window to DOS
     
          One common problem with menu systems is that they make it diffi-
     cult to execute quick commands directly.  The menu can speed up all of
     the applications that you have defined, but if you need to do a quick
     "chkdsk" or "type" out a text file, you must often exit the menu
     program.  Some systems offer a DOS shell (Magic Menus does also), but
     this is little better than exiting altogther when all you wish to do is
     enter one quick command.
     
          Magic Menus addresses this problem with a unique "Window to DOS".
     Press <alt-W> and the window appears.  From the "Command:" line that
     you see, you can enter commands just as if you were at the familiar DOS
     prompt!  This includes any command line parameters.
     
          You will also notice that Magic Menus displays your ten most
     recent commands.  You may use the up and down arrow keys to "replay"
     the commands, and of course all of Magic Menus' sophisticated editing
     capabilities are available.
     
          Please note that the "maximum memory mode" is not available in the
     Window to DOS.  If you need to run a command and don't have enough
     memory, you can do it under the "DOS" menu ("rUn any command").
     
     

     
     
     Chapter 6: Pop-Ups                                                  37



     6.4  Calculator
     
          Magic Menus includes a pop-up financial calculator.  Pressing
     <alt-C> anytime will pop the calculator up.  The calculator has a rol-
     ling tape to help you keep track of your math, and you can even direct
     the output to the printer!
     
          When using the calculator, be careful to notice when the calculator
     expects an operation and when it expects a number.  The data entry
     field will be reverse video when the calculator is expecting a number.
     Otherwise, an intermediate result is displayed and any numbers entered
     will be rejected.  In any case, pressing 'C' (for clear) will zero the
     total and set the calculator up to accept a number.
     
          If you want to use the printer, make sure that it is ready before
     you press 'P'.   Also, Magic Menus automatically asserts the "NUMLOCK"
     when the calculator is invoked so you may use the numeric keypad on the
     IBM PC (or compatibles).
     
     
     6.5  List of Files
     
          One very useful feature in Magic Menus is the ability to pop-up
     the "File Listing Window".  What this window does is pop-up a simple
     directory of the files on a disk.  Press <alt-L> to activate this
     window.
     
          After you press <alt-L>, you will first be prompted for a file
     specification.  Here you may enter a "pattern" that Magic Menus will
     use while creating the window.  You may use the DOS wildcards "?" and
     "*" here, as well as specifying a drive and directory to search.  For
     instance, after you press <alt-L>, Magic Menus will respond with the
     prompt:
     
             File Spec:
     
     Suppose you enter:
     
             A:\MAGIC\*.*
     
     Magic Menus will search drive A for the directory "\MAGIC", and will
     display all the files there (the "*.*" matches all files).  If you
     leave the file spec blank, Magic Menus will default to the current
     drive and directory and will display all files.
     
          The window can display sixty files per page, and there are two
     pages.  Press <PgUp> and <PgDn> keys will toggle between the two pages.
     If you have more than 120 files in the selected directory, only the
     first 120 are displayed.
     
          Inside the File Listing Window, you can move the high-lighted bar
     around over the individual file names.  If you invoke the File Listing
     Window while you are in the data entry mode (that is, Magic Menus is
     expecting you to enter text) you can "pull" a file name into the data
     field by placing the bar over your choice and pressing <return>.  If
     
     
     Chapter 6: Pop-Ups                                                  38



     you are not in a data entry field (such as when you are in a menu), no
     action is taken by Magic Menus.   You can also press <ESC> to exit the
     window and select no file name.
     
          The File Listing Window can be very useful just for checking for
     the presence of files.  It is also convenient to be able to pull the
     file names into a data field.  You can, for instance, pop-up the Window
     to DOS (press <alt-W>), and then invoke the File Listing (press <alt-
     L>).  Enter "*.com" for the file spec, and all of the COM files in the
     current directory will be displayed.  Now you can move the bar over the
     command of your choice and press <return>.  Magic Menus will pull the
     command into the Window to DOS.  Press <return> again and Magic Menus
     will execute the command.
     
          The File Listing Window can also be made to automatically appear
     within an application.  You can use this feature to pass a particular
     data file or document to a database or word-processor.  See chapter 5
     for details.
     
     



































     
     
     Chapter 6: Pop-Ups                                                  39



     
     
                            Chapter 7 -- Boot Options
     
     
          The IBM PC (and the MS-DOS operating system) brought a truly con-
     figurable environment to micro-computing.  When you start-up ("boot")
     your computer, DOS looks for the presence of two files ("CONFIG.SYS"
     and "AUTOEXEC.BAT").  These two files determine the configuration and
     start-up state of your computer.  See your DOS Reference Manual for
     more information on the setup and use of these files.
     
          The creators of DOS envisioned that most people would create these
     files once and for all, and then be content with the configuration of
     their systems.  More and more, however, users have discovered that they
     frequently need to change their configuration files to meet a specific
     application.  They then find that an hour later they need to change it
     back again.  All in all, the constant shuffling of files and file
     contents can become unmanagable, not to mention down-right annoying.
     
          Magic Menus addresses this problem by supplying a "Boot options"
     menu and allowing you to define up to ten different configurations that
     you may quickly choose between.  When you select a boot option from
     the menu, Magic Menus will:
     
             1)  Save your old boot files
             2)  Create new boot files
             3)  Prompt you to "re-boot" your computer
     
     You must re-boot after Magic Menus creates the new files since the new
     configurations will not take affect until you do.  Usually, you can re-
     boot by pressing the <ctrl>-<alt>-<del> keys all at one time.  You may
     also re-boot by turning your computer off and then on again (remember
     to wait a moment or two between powering your system down and then up
     again).
     
          Magic Menus saves your old boot files under the names "OAUTO.BAT"
     and "OCONFIG.SYS".  Here is the text for a simple batch file that you
     can use to restore your boot files after changing them with Magic
     Menus:
     
             if not exist OAUTO.BAT goto Config
             del AUTOEXEC.BAT
             rename OAUTO.BAT AUTOEXEC.BAT
             :Config
             if not exist OCONFIG.SYS goto EXIT
             del CONFIG.SYS
             rename OCONFIG.SYS CONFIG.SYS
             :EXIT
             REM BOOT FILES RESTORED
     
     If you name this file "RBOOT.BAT", place it in the root directory of
     your boot disk, and make it the last option of your new AUTOEXEC.BAT
     file, it will automatically restore your boot files to their original
     state after booting with an option from Magic Menus.
     
     
     Chapter 7: Boot Options                                             40



     
     
     7.1  Add a Boot Option
     
          The "Add boot option" under the "Boot options" menu will allow you
     to create a boot option and add it to the menu.  When you select this
     function, the "Boot Options Entry Window" will appear.
     
          The first item that you must enter is the menu prompt (this is the
     name that will appear on the menu).  For instance, you may want to call
     your usual configuration "Standard".  Magic Menus will automatically
     insert the option in the menu in alphabetical order.  The next field is
     the "hot key".  This key will automatically invoke the boot option
     (while the menu is active).  You may, for example, want to enter "S"
     for your "Standard" boot option since "Standard" begins with the letter
     "S".
     
          Next you will see ten lines (labelled lines 1-10).  These lines
     represent the actual content of your files.  Since there are two files
     to create (the AUTOEXEC.BAT and the CONFIG.SYS files), you will need to
     press the <TAB> key to toggle between the entry of the two files.  You
     simply enter the contents of the files, line by line.  Notice that <F5>
     will insert a line and <F6> will delete one.
     
          A big time-saver is the ability to "yank" a file into the entry
     window.  Press ^KR (that's <ctrl>-K and then R) will the cursor is on
     one of the ten entry lines.  A window will appear asking for a file to
     read.  Enter the file name you wish to yank in (you may specify an
     optional drive and path).  Magic Menus will copy the file starting at
     the cursor line.  If the file is too long for the window, the overrun
     lines are discarded.
     
          You may also write the contents of the window out to a file.
     Simply press ^KW while the cursor is anywhere on one of the ten entry
     lines.  Magic Menus will pop-up a window prompting you for a file name.
     Magic Menus will then copy all ten lines to the file.  (CAUTION!  If
     the file already exists, Magic Menus will write over it, so be careful
     with this feature!).
     
          Once you have entered the contents of both the AUTOEXEC.BAT and
     the CONFIG.SYS files, there are a few additional data fields to fill
     in.  The "Prompt for Disk" field will allow you to enter a message up
     to forty characters long.  Usually you will be booting from your hard
     disk, and you should leave this field blank.  If the field is not blank
     (that is, it contains a message), Magic Menus will pause before
     executing the boot option and display the message you entered.  For
     example, suppose you wanted to boot off of a floppy disk instead of the
     hard drive.  You could enter:
     
             "INSERT DOS DISK INTO DRIVE A"
     
     as your "Prompt for Disk" message.  Magic Menus will remind you to
     insert the proper disk at boot time!
     
          You may password-protect the boot option by entering a password
     
     
     Chapter 7: Boot Options                                             41



     level.  If you enter level 0, no password will be required to execute
     the boot option.  See chapter 9 for a more thorough discussion of
     passwords and levels.
     
          The "Boot Drive" field designates the disk drive that Magic Menus
     will attempt to create your new boot files on.  The default drive is
     the drive that Magic Menus was installed on.  If you want to boot off
     of a floppy, be sure and change this to drive "A".
     
          The next field is the "Information File" field.  What Magic Menus
     expects here is a file name.  The information file is an ASCII text
     file that contains instructions or information for the user.  The use
     of this file is totally optional, and if you desire to use it, you will
     have to create it yourself.  To do this, use any text editor that
     produces pure ASCII text (no control codes or soft characters).  Enter
     any discussion that you feel will aid the user at the time of execu-
     tion.  Magic Menus will display this file when the option is picked
     from the menu, and will pause (waiting for a <return>) while the user
     reads the screen.  Please note that Magic Menus will only display the
     first 22 lines of the file, and allows only 80 characters per line.
     The information file must reside in the Magic Menus' data file path
     (This is usually \MAGIC\DATA.  It is the same directory that contains
     the file MM.DEF).  If Magic Menus cannot find the file you indicate
     here, or if the "Information File" field is left blank, Magic Menus
     simply skips the information display and continues.
     
          The last field in the window calls for you to enter a line of text
     up to fifty characters long.  This is a short description of the boot
     option.  It will be displayed in Magic Menus' description field (on the
     main screen) while the high-lighted bar is over this boot option.  It
     is simply another way that Magic Menus makes understanding and select-
     ing menu choices easier.
     
          After you have entered all of the data, press <F10> to record your
     entries on disk.  Magic Menus will insert the new selection in the
     menu, and it is now available to the user!
     
     ADDITIONAL NOTES:  The files that Magic Menus can generate are limited
     to ten lines of forty-five characters each.  This is a practical limit-
     ation (we had to draw the line somewhere).  These restrictions should
     not pose a problem for the CONFIG.SYS file, since the vast majority of
     users will have only a few declarations.  The AUTOEXEC.BAT file, on the
     other hand, can pose a problem in some instances.  If you have many
     lines to execute in this file, you can ease the problem by putting some
     of the files in a separate batch (.BAT) file.  You can then execute the
     batch file from the AUTOEXEC.BAT file.  For instance you could consol-
     idate the following lines in a file called "STANDARD.BAT":
     
             SETCLOCK
             PROMPT $P$G
             RXBAK
     
     The only problem with calling batch files from batch files is that DOS
     can't return to the first batch file after the second one is done.  You
     can remedy that situation by invoking COMMAND.COM with the /C option
     
     
     Chapter 7: Boot Options                                             42



     before calling the second batch file.  The line you would enter in your
     AUTOEXEC.BAT file for the above example would be:
     
             COMMAND /C STANDARD
     
     That allows the original batch file to continue once the second one
     completes.  A new problem has surfaced, however.
     
          Notice that STANDARD.BAT does not include a "PATH=" statement.
     The "PATH=" statement is very common within AUTOEXEC.BAT files, since
     it tells DOS where to look for commands.  You can put this statement in
     the AUTOEXEC.BAT file, but NOT in a secondary batch file that is pre-
     ceded by "COMMAND /C".  Why?  Because the "COMMAND /C" command loads a
     new copy of the command processor, and it has its own "environment".
     (See your DOS Reference for a discussion on environments).  Hence, if
     you set the path in STANDARD.BAT, you are altering the environment of
     the "child" process, and this environment DISAPPEARS when you go back
     to the original batch file!
     
          The only problem that you will have, then, is when your "PATH="
     statement exceeds the forty-five lines available to you in Magic Menus.
     You have an option, however.  You CAN put the path statement in a
     separate batch file, provided that you do not precede it with "COMMAND
     /C".  This simply means that the batch file with your "PATH=" command
     should be the LAST command that your AUTOEXEC.BAT file executes (since
     it will not return when it terminates).
     
     
     7.2  Editing Boot Options
     
          When you select "Edit boot option" under the "Boot options" menu,
     a window will appear and display the data corresponding to the first
     boot option in the menu.  You can edit and enter data in the same
     fashion as when entering new options (see section 7.1 above).  Remember
     to press the <TAB> key to toggle between editing the AUTOEXEC.BAT and
     CONFIG.SYS files.
     
          You must press <F10> to make your changes permanent.  Pressing the
     <F4> key will delete the displayed entry.  To edit the other boot op-
     tions, use the <F7> and <F8> keys to move backwards and forwards
     through the list.
     













     
     
     Chapter 7: Boot Options                                             43



     
     
                              Chapter 8 -- DOS Menu
     
     
          Although Magic Menus allows you to create and execute applications
     quickly and powerfully, you may still sometimes need to use some of the
     basic DOS commands.  We've chosen a few of the most common commands and
     built them directly into the "DOS" menu in Magic Menus.
     
          This chapter briefly discusses the available functions.  Consult
     you DOS Reference Manual for an indepth disccusion of each one.
     
     
     8.1  DOS Commands
     
          The following DOS commands are directly accessible from the "DOS"
     menu:
     
             DIR                     -- List a directory of the disk
             COPY                    -- Copy a file or files
             REN                     -- Rename a file
             DEL (or ERASE)          -- Erase a file or files
             CHDIR                   -- Change the active directory
             MKDIR                   -- Create a new directory
             RMDIR                   -- Remove (delete) a directory
             TIME                    -- Set the DOS Time
             DATE                    -- Set the DOS Date
             FORMAT                  -- Format a disk
     
     
     IMPORTANT!  The "DOS" menu executes the actual DOS commands.  Most of
     these commands are built into DOS.  The "Format disk" option, however,
     requires that the file "FORMAT.COM" be in the default directory or can
     be found in the DOS command "path".  For more information on the "PATH"
     command, see your DOS Reference Manual.
     
          All of the parameters that you enter are fully editable.  Some of
     the windows have multiple parameter lines (use <return> or the arrow
     keys to move between them).  For consistency, press <F10> to execute
     the command once you have entered the parameters.
     
          You may assign a password level to all of these functions in the
     "Password setup" option under the "Options" menu (See chapter 9).
     
     
     8.2  Run Any Command Window
     
          The "rUn any command" window lets you execute a command just as if
     you were typing at the DOS prompt.  This window differs from the
     "Window to DOS" in that Magic Menus will allow you to specify the
     "maximum memory mode" here.  This mode frees up additional memory that
     Magic Menus uses.  Press <F10> to execute the command.
     
     
     
     
     Chapter 8: Dos Menu                                                 44



     8.3  DOS Shell
     
          From the "DOS Shell" window, you can spawn a "child" of DOS.  What
     you are doing here is loading a new copy of COMMAND.COM.  This file,
     therefore, must be present in the default directory or in the DOS
     command path.  (See your DOS Technical Reference for a discussion of
     the "PATH" command).  Press <F10> to execute the shell.
     
          The DOS shell will put you directly in contact with the operating
     system.  You will see the DOS prompt, just as if you never ran Magic
     Menus in the first place.  However, all you have to do is type "EXIT"
     to instantly return to Magic Menus.
     
          You may also direct Magic Menus to use the "maximum memory mode"
     here to free up additional memory.
     
     
     
          This window runs the standard DOS "DIR" command.
     



































     
     
     Chapter 8: Dos Menu                                                 45



     
     
                            Chapter 9 -- User Options
     
     
          This chapter discusses the various options available to configure
     Magic Menus to suit your needs and tastes.  These options may be set
     under the "Options" menu.
     
     
     9.1  Screen Delay
     
          Your computer creates images on your monitor by exciting chemicals
     on the backside of your monitor's CRT.  If an image remains on the
     screen too long, it may permanently "burn" itself into the screen.
     This typically occurs over several months when a similar image
     appears on the screen for long lengths of time.  To protect against
     this burn in, you may instruct Magic Menus to blank the screen after a
     period of keyboard inactivity.
     
          When you select the "screen Delay" option from the menu, a window
     will appear.  In this window, you can enable or disable the screen save
     feature.  You can also indicate how long that you want Magic Menus to
     wait before it will blank the screen.  Remember that the screen will
     only go blank if no keyboard activity is detected in the indicated
     length of time.  (NOTE:  Delay times are approximate, and can vary
     based on CPU speed).   You must press <F10> to save your setup to the
     disk.
          After the screen blanks, Magic Menus will display a slow-scrolling
     message indicating that the screen save feature is active.  Press any
     character key to restore the screen to normal operation.
     
     
     9.2  Color Setup
     
          You can customize Magic Menus' screen colors (if you have a color
     graphics card and a color monitor).  Select the "Color setup" option
     from the "Options" menu.
     
          The window that appears will accept four parameters.  Each color
     selection is entered as an integer.  The foreground and midground
     colors range from 0 to 15, while the background and reverse video
     colors range from 0 to 7.  The colors are as follows:
     
             0: BLACK                 8: DARK GRAY
             1: BLUE                  9: LIGHT BLUE
             2: GREEN                10: LIGHT GREEN
             3: CYAN                 11: LIGHT CYAN
             4: RED                  12: LIGHT RED
             5: MAGENTA              13: LIGHT MAGENTA
             6: BROWN                14: YELLOW
             7: LIGHT GRAY           15: WHITE
     
          The color setup window displays sample colors to help you pick the
     ones you prefer.  The colors that Magic Menus uses will not change
     
     
     Chapter 9: User Options                                             46



     until you exit Magic Menus and run it again.  (This is necessary since
     Magic Menus saves screen images in order to remove pop-up windows).
     Remember to press <F10> to save your selections to disk.
     
     
     9.3  Error Beep Setup
     
          When you select "Error beep setup" from the "Options" menu, you
     will be presented with a window in which you can control Magic Menus'
     error beep.  You can change the length and frequency of the beep, or
     turn it off altogether.  You are also asked in this window if your
     computer is an IBM PC or true compatible.  If not, Magic Menus will use
     the terminal bell (^G) to indicate an error.  (In this case you cannot
     set the frequency or duration of the beep).
     
          While setting the frequency or the duration of the tone, you can
     here what it sounds like by holding the left arrow down until the
     cursor "bumps" up against the left edge of the data field.  This will
     cause the error tone to sound.  Obviously you must have a speaker
     installed in your computer for this option to work.
     
          Remember to press <F10> to save your choices.
     
     
     9.4  Error Message Setup
     
          Some errors within Magic Menus will cause a message to be dis-
     played as well as sounding a beep.  In the "error Message setup" you
     can set the duration (length of time displayed) of the error message
     and also indicate whether or not you want the message to blink.  Since
     the error message is accompanied by an error beep, the message will
     remain on the screen for the duration set here or for the duration of
     the beep (see above), which ever is longer.  Again, press <F10> to save
     your changes to disk.
     
     
     9.5  Video Setup
     
          The "Video setup" option under the "Options" menu lets you set two
     specific flags concerning how Magic Menus writes data to the screen.
     (Both of these flags can also be set in the installation of Magic
     Menus, by the way).  The first option is whether or not you want to use
     BIOS screen writing.  This is opposed to DIRECT screen writing, which
     accesses the PC's screen memory directly for much faster screen updates.
     We have included the BIOS option for two specific reasons:
     
         1) Some people using Magic Menus may have computers which are not
         completely IBM compatible (and the direct writing may not work).
     
         2) Some people may wish to use Magic Menus in a multi-tasking
         environment (such as TopView, DesqView, MultiLink, or DoubleDos)
         and the direct screen writing can "bleed" through to the other
         applications.
     
     Remember that the BIOS option runs much more slowly that direct screen
     
     
     Chapter 9: User Options                                             47



     writing, so use direct wherever possible.
     
     SPECIAL NOTE:  We have built in a quick "toggle" to help you easily
     switch between screen modes.  Press <alt-B> and you will toggle from
     DIRECT to BIOS (or visa versa).  You should note that the topline
     indicator will change to remind you what mode you are in.  This toggle
     key has no effect on non-IBM compatible machines.
     
          The second option that you can set in this window is whether or
     not you monitor "snows" when Magic Menus is updating the screen.  This
     "snow" is actually a brief burst of "garbage" that your video card
     reads while Magic Menus is writing to the video memory.  The early IBM
     style color graphics adapter did not provide true memory contention
     resolution, and this is what causes the snow.  It is not harmful, but
     it can be annoying.  If you have a video card with this problem, you
     can tell Magic Menus to suppress the snow.  It does this by waiting for
     a "vertical retrace" before writing to the screen.  This slows the
     screen action down somewhat, but does eliminate the problem.  If you
     have a newer color card (such as the EGA), set the snow suppression to
     "No" and Magic Menus will run faster.  This flag has no effect for
     systems with monochrome adapters.
     
     SPECIAL NOTE:  If you are using a computer with a non-CRT display (such
     as many laptops), set this flag to "No"!  Many of these displays
     emulate the color graphics adapter imperfectly.  If Magic Menus waits
     for a vertical retrace with this type of system, the screen action can
     slow down to an unbearable crawl!
     
     
     9.6  Password Setup
     
          The "Password setup" option will open a window allowing you to
     enter five different passwords and set a number of password levels.
     You also turn password control on and off in this window.
     
     IMPORTANT:  Once you set passwords to on, you cannot return to the
     password window without entering the level five password (the highest
     access password).  Make sure that you make note of the level five
     password before turning the control on!
     
          The five passwords give you an ascending level of access.  For
     instance, anyone who knows the level three password can access all
     functions that have a password level of zero, one, two, or three.  That
     person cannot access functions with password levels of four or five.
     Level five, therefore, can access all functions.  That password should
     be reserved only for the system manager, since anyone with level five
     access can change the passwords and level assignments.
     
          Do not leave any of the passwords blank, since that makes a carri-
     age return activate that level.  That means that anyone can access that
     level (and all levels below it).  Any function with a password level of
     zero does not require a password, and Magic Menus will not ask for one.
     
          The password levels that you set here are meant to help prevent
     accidental system crashes and unauthorized activity.  For instance, if
     
     
     Chapter 9: User Options                                             48



     you want to prevent people from leaving Magic Menus, then set the "Exit
     Magic Menus Password Level" to a higher levels.  It is also a good idea
     to restrict the DOS shell and command processor (the "Any Command
     Level" also protects the Window to DOS).  You will also want to protect
     the setup and edit features.  In the "drive Access setup" (discussed
     below), you can also password protect access to certain disk drives.
     
          Most of the functions within Magic Menus can be assigned password
     levels.  You may assign seperate levels to applications and menus, for
     instance.  You will see a field for password level protection as you
     set these functions up.
     
          Remember to press <F10> to make your passwords and setups perma-
     nent.
     
     TECHNICAL NOTE:  Magic Menus provides a low level of system security.
     It is not meant to be a rigorous defense against unauthorized system
     use.  It will, however, provide an effective barrier against accidental
     and non-malicious access violations.
     
     
     9.7  File Paths
     
          The "File paths" option will simply display the current Magic
     Menus' data and program file paths, as well as the selected batch file
     drive.  These paths are shown for yor information only, and must be set
     by MMINST.COM (see chapter 1 for more information).
     
     
     9.8  General Setup
     
          Under the "General setup" option, you can enter a title which will
     always be displayed on Magic Menus' main screen.  You may wish to enter
     your name or your company's name here.
     
          You may also indicate whether or not you want the topline status
     to be displayed (probably you do, unless your machine is incompatible
     with an IBM and the status line does not work correctly).  Lastly, you
     can instruct Magic Menus to provide an "anti-skid" cursor which simply
     flushes the keyboard buffer between mode changes.  You may find this
     option handy if you tend to rest your fingers a little to heavily on
     the keyboard.  Otherwise, you will probably wish to turn this feature
     off.
     
          Again, press <F10> to save your setups to disk.
     
     
     9.9  Printer Setup
     
          This window ("printer Setup") lets you tell Magic Menus what type
     of printer you have.  If you have a serial (versus parallel) printer,
     indicate that here.  If you are unsure, answer "No", since most
     printers today are parallel.  Also, most printers are connected to port
     1.  If your printer is different, indicate that here as well.  Press
     <F10> to make your changes permanent.
     
     
     Chapter 9: User Options                                             49



     
     
     9.10  Drive Access Setup
     
          The "drive Access setup" feature in Magic Menus is unique.  It
     lets you assign password levels to different disk drives.  Throughout
     the Magic Menus environment, the user will be monitored and access to
     the restricted drives will be preceded by a password request.
     
          Specifically, Magic Menus scans each command for reference to
     drives before passing the command to DOS.  The only area in Magic Menus
     that is immune from the scan is the pop-up directories window (and you
     can assign password levels individually to these).  This feature is
     particularly useful in restricting access to floppy disk drives (which
     can cause system crashes and unauthorized copying of programs and
     data).  It is also handy in a network with multiple remote drives.
     
          You can assign levels to five different drives, and then assign a
     level to all remaining drives.  Magic Menus will not prompt for a
     password for the default (current) drive, even if a level is assigned.
     
          Press <F10> to make your selections permanent.
     
     
     9.11  Order Form
     
          Magic Menus is a user-supported program.  It is distributed under
     the "shareware" concept.  Shareware is a unique marketing approach that
     actually permits and encourages the free copying and sharing of soft-
     ware (rather than restricting it).  Shareware programs, however, are
     copyrighted material and can represent considerable investment on the
     behalf of the author and shareware companies.
     
          The advantages to the user are two-fold.  First, you get to free-
     ly try the software and see if it meets your needs.  Secondly, should
     you decide to purchase the program, you generally get it a much lower
     cost than commercial counterparts.  This is because shareware companies
     have lower distribution costs than commerical software companies.
     
          If you decide to use the software on a continuous basis, then you
     should "register".  This means that you actually pay for the software,
     as if you were buying a commercial package.  Custom Technologies sells
     its packages just as if they were commercial programs, and we send the
     customer a complete package (disk, manual, and telephone support).  We
     also add you to our mailing list for notification of upgrades, new
     packages, and special offers.
     
     PAYMENT IS NOT OPTIONAL.  Continued use of the software requires a
     license from Custom Technologies.  If you decide not to register, you
     should pass your copy on to someone else or simply erase it.  All
     computer users benefit from the existence of high quality shareware
     products.  The honest and courteous support of satisfied users can help
     to ensure a steady supply of outstanding shareware.
     

     
     
     Chapter 9: User Options                                             50



         Chances are that you are reading this User's Guide and enjoying the
     power of Magic Menus without having paid for it.  That's fine... that
     is what shareware is about.  (NOTE: Custom Technologies receives no
     royalties from disk dealers or BBS sysops.  Any fees that you have paid
     for a disk are duplication charges, and do not represent payment for
     Magic Menus).
     
         The "Order form" option under the "Options" menu is provided to
     assist you in ordering a registered copy of Magic Menus.  We have also
     included ordering information for some of our other products (if you
     have a checking account and are not using CheckMate, then you don't
     know what you are missing!  CheckMate-GL, on the other hand, is the
     friendliest general ledger package ON THE PLANET).  Quantity and
     multi-product discounts, as well as shipping charges and sales tax are
     automatically computed.  Magic Menus will take your information and
     then print out a form that you can return to Custom Technologies.
     
     THANK YOU FOR YOUR SUPPORT!
     

     ORDER TOLL FREE AT 1-800-541-6234!  MasterCard, VISA, or COD 
     accepted.  Lines are open 24 hours/day, 7 days/week. 

































     
     
     Chapter 9: User Options                                             51



     
     
                  Appendix A: Prompt Definition Quick Reference
     
     
     -- The Prompt "%" Variables:
     
          %1, %2, %3, %4, %5
     
     
     -- The "@" Processor:
     
          The "@" variable return the values entered with the "%" variables.
     
          @1, @2, @3, @4, @5
     
     
     -- The "+" Processor:
     
          The "+" processor pops the "File Listing Window" up.
     
             +1 : return both name and extension (same as "+" alone)
             +2 : return name only
             +3 : return extension only
     
     -- The "#" Processor:
     
          The "#" processor pops the "Directory Control Window" up.
     
             #1 : change directory, return nothing
             #2 : change directory, return directory name w/o trailing "\"
             #3 : change directory, return directory name with trailing "\"
             #4 : return directory name w/o trailing "\"
             #5 : return directory name with trailing "\"
     
     -- The "$" Processor:
     
          The "$" processor pops the "Printer Control Window" up.
     
             $1 : immediate send control string, return nothing
             $2 : return printer control string
     
     
     -- The "=" Processor
     
          The "=" processor pops a user-defined menu up.  The menu is
          defined in a text file with the following format:
     
             <Menu Title>
             <Menu Choice #1>=<Item #1>
             <Menu Choice #2>=<Item #2>
             <Menu Choice #3>=<Item #3>
                  .
                  .
             <Menu Choice #10>=<Item #10>
     
     
     Appendix A: Prompt Definition Quick Reference                       52



     






















































     
     
     Appendix A: Prompt Definition Quick Reference                       53

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1196

     Volume in drive A has no label
     Directory of A:\

    FILE1196 TXT      2005  10-26-88   5:54p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       386  10-25-88   2:05p
    MAGIC    DIS    235136   7-28-88   6:09a
    MANUAL   ARC     56306   7-28-88   6:35a
    MMINST   COM     15992   7-28-88   6:03a
    PRTR     COM      4956   8-15-87   1:53p
    RBOOT    BAT       208   7-10-87   9:00a
    READ     ME       7833   7-28-88   6:17a
            9 file(s)     322860 bytes
                           35840 bytes free
