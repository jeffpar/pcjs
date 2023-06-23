---
layout: page
title: "PC-SIG Diskette Library (Disk #3217)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3217/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3217"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## SP2.DOC

{% raw %}
```

 ####    #   ####  #   #     ####  ####    ###    ###    #         ###  ###
 #   #   #  #      #  #     #      #   #  #   #  #   #   #          #    #
 #    #  #  #      # #      #      #   #  #   #  #   #   #          #    #
 #    #  #   ###   ##        ###   ####   #   #  #   #   #          #    #
 #    #  #      #  # #          #  #      #   #  #   #   #          #    #
 #   #   #      #  #  #         #  #      #   #  #   #   #          #    #
 ####    #  ####   #   #    ####   #       ###    ###    #####     ###  ###







                               Version 4.05







                                                 _______
 (c) Copyright 1986,1992                    ____|__     |           (tm)
 Budget Software Company                 --|       |    |-------------------
 P. O. Box 621534                          |   ____|__  |  Association of
 Littleton CO 80162-1534                   |  |       |_|  Shareware
                                           |__|   o   |    Professionals
                                         -----|   |   |---------------------
 (303) 932-1705  CompuServe 70033,643         |___|___|    MEMBER









       NOTE:  Please refer to the file SP2NEW.DOC for a discussion of
              features added since the publishing of this User's Guide.






















                      DISK SPOOL II     i
-------------------------------------------------------------------------------



  Table of Contents
  ===========================================================================

  Shareware considerations  . . . . . . . . . . . . . . . . . . . . . .  iii

  Introduction  . . . . . . . . . . . . . . . . . . . . . . . . . . . .    1

  Getting Started Quickly . . . . . . . . . . . . . . . . . . . . . . .    2

  Configuring DISK SPOOL II . . . . . . . . . . . . . . . . . . . . . .    2

  The Menu  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    3

  The Spooler and the De-spooler  . . . . . . . . . . . . . . . . . . .    3

  Modes of Operation  . . . . . . . . . . . . . . . . . . . . . . . . .    4

      Manual Mode . . . . . . . . . . . . . . . . . . . . . . . . . . .    4
         Introduction . . . . . . . . . . . . . . . . . . . . . . . . .    4
         The Spool File . . . . . . . . . . . . . . . . . . . . . . . .    4
         Controlling the De-spooler . . . . . . . . . . . . . . . . . .    5
            Stopping and Starting Printing  . . . . . . . . . . . . . .    5
            Controlling Where in the File to Begin Printing . . . . . .    5
            Printing from Different Files . . . . . . . . . . . . . . .    6
            Controlling the Output Port . . . . . . . . . . . . . . . .    6

      Auto Spool    . . . . . . . . . . . . . . . . . . . . . . . . . .    6
         Introduction   . . . . . . . . . . . . . . . . . . . . . . . .    6
         How to Enable Auto Spool   . . . . . . . . . . . . . . . . . .    7
         Spool File Print Attributes  . . . . . . . . . . . . . . . . .    7
         Spool File Attributes by Application . . . . . . . . . . . . .    7

      Auto De-spool   . . . . . . . . . . . . . . . . . . . . . . . . .    7
         Introduction . . . . . . . . . . . . . . . . . . . . . . . . .    7
         How to Enable Auto De-spool  . . . . . . . . . . . . . . . . .    8
         Controlling the Auto De-spooler  . . . . . . . . . . . . . . .    8

  DISK SPOOL II Performance . . . . . . . . . . . . . . . . . . . . . .    8
     Spooler Speed  . . . . . . . . . . . . . . . . . . . . . . . . . .    8
     De-spooler Speed . . . . . . . . . . . . . . . . . . . . . . . . .    9

  Other Special Features of DISK SPOOL  . . . . . . . . . . . . . . . .   10

  Trouble Shooting   . . . . . . . . . . . . . . . . . . . . . . . . . .  14

  For Programmers  . . . . . . . . . . . . . . . . . . . . . . . . . . .  16

  Notes for Windows 3.x users  . . . . . . . . . . . . . . . . . . . . .  17













                      DISK SPOOL II     ii
-------------------------------------------------------------------------------


  SHAREWARE CONSIDERAIONS
  -----------------------

  You have obtained an un-registered version of DISK SPOOL II which is being
  marketed under the "shareware" concept.  As such, it is a fully working
  version of the product, and the documentation is complete.  You are
  encouraged to register with Budget Software Company.  The fee is US$ 44.
 
  You may register by phone, by mail, or using Compuserve.  If you register
  by phone or by Compuserve, please provide a Visa or Mastercard number, name,
  and expiration date.
 
 
       Address:      Budget Software Company
                     P.O. Box 621534
                     Littleton CO 80162-1534
 
       Phone:        (303) 932-1705
 
       Compuserve:   70033,643
 
 
  By registering, you receive the following benefits:
 
    - A copy of the latest version of DISK SPOOL II.
 
    - Free technical support.  Usually, the author will be providing the
      support.  But in any case, your issue will be elevated to the author
      if your question cannot be answered by your first contact.
 
    - Periodic notification of upgrades and enhancements; along with the
      ability to upgrade at a nominal cost.
 
    - A printed copy of this manual.
 
 
  You are authorized to make as many copies of this un-registered version
  of the product as you would like, and to distribute them freely to
  individuals or onto bulletin boards.  You must, however abide by this one
  simple rule ... that you always include with such distribution all of the
  files that you have received.
 
 
  Budget Software Company is a member of the Association of Shareware
  Professionals (ASP).  ASP wants to make sure that the shareware principle
  works for you.  If you are unable to resolve a shareware-related problem
  with an ASP member by contacting the member directly, ASP may be able to
  help.  The ASP Ombudsman can help  you resolve a dispute or problem with an
  ASP member, but does not provide technical support for members' products.
  Please write to the ASP Ombudsman at 545 Grover Rd, Muskegon MI 494420-9427,
  or send a Compuserve message via easyplex to ASP Ombudsman 70007,3536.
 
 
 
 





 
 
                      DISK SPOOL II     iii
-------------------------------------------------------------------------------



  I. Introduction

     DISK SPOOL II is a program that fundamentally changes the
     manner in which printing takes place on your computer.  Without
     DISK SPOOL II, whenever an application prints information, it
     sends it directly to the printer.  If you don't have a printer
     attached to your computer, then you can't run the application. 
     If your printer halts for whatever reason, then the application
     halts, too.  More importantly, your application's execution
     speed is held back by the printer, regardless of how fast your
     computer is, or how well designed the application is.

     With DISK SPOOL II, your applications do not have to contend
     directly with the printer, since DISK SPOOL II sits in the
     background and intercepts your printer data, re-routing it
     to a disk file.  Two benefits are immediately derived from
     this:  A disk file doesn't jam, and you don't have to worry
     about its ribbon, so you know that your application will run
     to completion.  Secondly, even the fastest printers cannot
     process data as quickly as a disk drive.  So, your applications
     finish sooner, and you are able to do more work in less time.

     But what good is the data out in a disk file?  Here is where
     the second main part of DISK SPOOL II comes into play.  With
     your data safely out on disk, and while you are busy performing
     other tasks on your computer, DISK SPOOL II works behind the
     scenes to send the data from the disk file to the printer.  How
     is it possible for the computer to be doing two things at the
     same time?  The answer is that your computer has a generous
     supply of excess processing cycles on its hands, and DISK
     SPOOL II merely puts these cycles to work.  The computer isn't
     really doing two things at once, it just looks like it is.

     You may be asking yourself why the concepts described above
     have not been made part of your computer's operating system
     by the manufacturers, since the time savings is apparently so
     dramatic and so universal.  The answer is that personal
     computers are following the same evolutionary path that
     mainframes did several decades ago.  Just like mainframes, the
     first operating system (and the one we are still using today)
     was not designed to be able to handle multi-tasking easily.
     It is a sure thing that the new operating systems being
     developed for the PC, just like the second generation of
     mainframes, will have spooling environment capabilities built
     in.  In the meantime, DISK SPOOL II enables you to tap into
     this kind of operating power right now on your present PC.

     Note:  there are two versions of DISK SPOOL II included on your diskette:
            SP2.COM, and SP2SSS.COM.  The SP2SSS version does not have
            hot-key popup menu capability.

            The documentation that follows descibes the full-featured version
            SP2.COM.








                      DISK SPOOL II     1
-------------------------------------------------------------------------------



 II. Getting Started Quickly

     Getting DISK SPOOL II to start working for you is as simple as
     keying in the program name SP2, and pressing the Enter key.
     DISK SPOOL II has been pre-configured so that it will spool data
     to a file called SPO.SPL in the root directory of drive C:,
     and it will print to port LPT1.  If you want the Spool File to reside
     on a different drive, you could go into the configuration program (SP2CFG)
     and make a change, but for now, the easiest way is to just key in a
     drive letter.  Example:  sp2 d.  If your printer is attached to a COM
     port, again, you could go into SP2CFG, but to keep things simple for now,
     just key in a k.  Example:  sp2 dk overrides the default drive and port.

     That's all there is to it.  Now, if you want to experiment
     with the pop-up menu, tap the Alt-Left Shift keys
     simultaneously.  The menu is straightforward, and there is
     context-sensitive help text available at every tier, so you
     should be able to get right into the swing of things quite
     quickly.

     There is only one thing that some people will have to do
     differently than before.  If you want to print a DOS file,
     don't use the PRINT command supplied with DOS, and don't
     do a COPY filespec LPT1, or TYPE filespec > PRN, or the like.
     Rather, use the SP2PRT command supplied along with DISK SPOOL
     II.  Simply key SP2PRT followed by the file name.  The SP2PRT
     command is many times faster than its DOS counterparts, and
     also, by the way, works fine even if DISK SPOOL II is not
     loaded.

     Why don't you try DISK SPOOL II out right now, and see how quickly
     it spools this document?  Just load DISK SPOOL II by keying in
     SP2, and then key in: sp2prt sp2.doc.

     Please note:  Once DISK SPOOL II is initiated into memory, it does not
     need any other files to run.  If you want the context sensitive online
     help text, however, you should leave the file SP2.HLP in the directory
     where DISK SPOOL II was loaded.

     (Incidentally, if you would like to observe how dramatically
     DISK SPOOL II saves you time, there is a demo program 
     included on your diskette that you should run called SP2DEMO.  To
     run it, make your default directory the one where your DISK SPOOL II
     files reside, and then key in SP2DEMO.  Then follow the instructions.



III. Configuring DISK SPOOL II

     Your diskette contains a program called SP2CFG which is used
     to configure DISK SPOOL II.  Note that any settings made do
     not take affect until the time DISK SPOOL II is next initiated
     into memory.  This program is very easy to use.  You merely
     highlight the configuration item using the arrow keys, and press
     Enter to change the value.  This program is also a very good
     tool for learning about DISK SPOOL II, since each configuration
     item is described in detail at the bottom of the display.




                      DISK SPOOL II     2
-------------------------------------------------------------------------------



 IV. The Menu

     DISK SPOOL II is a memory resident program whose functions
     can be controlled by means of a pop-up menu.  This means that
     you can be in the middle of any application and access DISK
     SPOOL II's menu by simply pressing the two "hot keys".  DISK
     SPOOL II comes pre-configured with the Alt and Left Shift
     keys as the "hot keys".  You may, however, configure any key
     combination that you desire.

     The menu style is the popular Lotus-style "single tier" menu.
     The top row of the menu displays several keywords, each of
     which represents a menu selection.  You select a menu option
     either by positioning the menu bar over your selection, or
     by tapping the first letter of the keyword.  The second row
     of the menu gives a short description of the menu option
     currently being highlighted by the menu bar.  Often, one menu
     selection leads to another menu tier.  You may back up a tier
     by pressing the Esc key.  As you become familiar with DISK
     SPOOL II, you will quickly learn the letter sequences needed
     to perform a desired function.


  V. The Spooler and the De-spooler

     Before describing in detail all of the various features of DISK SPOOL II,
     a short introduction is in order of its two main components:

     The Spooler's job is to intercept printer data and re-direct it
     to a disk file.  The De-spooler's job is to work in the
     background sending the contents of the file to the printer.
     By means of the pop-up menu, you have the ability to enable
     and/or disable both components.  When the Spooler is enabled,
     it does its job of spooling printer data out to disk.  When
     disabled, printer output goes directly to the printer, just
     as if DISK SPOOL II were not in memory at all.  When the
     De-spooler is enabled, it is busy sending the contents of
     a disk file out to the printer.  When it is disabled, then
     no such background printing takes place.  Having the ability
     to control when printer output actually gets printed is one
     of the most attractive features of DISK SPOOL II.

     One of the attributes of the Spooler is which port or ports
     it is intercepting.  Most computer applications are designed to
     send printer output to LPT1; and as such, DISK SPOOL II comes
     pre-configured to only intercept printer output that is being
     sent to LPT1.  However, DISK SPOOL II can be configured so that
     it intercepts output being sent to any of the four standard
     ports: LPT1, LPT2, COM1, and COM2.  And you may specify any
     multiple combination of the four.  You may also change your
     settings on the fly from within the pop-up menu.










                      DISK SPOOL II     3
-------------------------------------------------------------------------------



     One of the attributes of the De-spooler is the port to which
     it is sending data.  DISK SPOOL II gives you complete control over
     which port receives the spooled data.


 VI. Modes of Operation

     There are three most basic modes of operation with DISK SPOOL II.

     A. Manual Mode

        1. Introduction

           In Manual Mode, data is spooled to a single file, and continues
           to so unless you manually designate a different file.  Similarly,
           data is de-spooled from a single file, and continues to do so
           unless you manually designate a different file.

        2. The Spool File

           DISK SPOOL II comes pre-configured so that when it is first
           loaded into memory, it will look for a file called SPO.SPL in
           the root directory on drive c:.  If it does not find such a
           file, then it creates one.  It then "attaches" the Spooler and
           the De-spooler to this file.  This means that spooled data will
           go to that file, and the De-spooler will print the contents of
           that file.  You may configure DISK SPOOL II to use any file,
           directory, or disk drive you wish.  You can even specify
           different files for the Spooler and the De-spooler.  And,
           these designations can be changed on the fly using the
           pop-up menu.  (One interesting setting is to leave the
           drive and the path designations blank.  Then, as you change
           directories, and when data is spooled, DISK SPOOL II will
           create a new spool file in the current directory.  In this
           manner, all your spreadsheet printouts could be found in one
           directory, all your word processing printouts in another, and
           so forth.)

           When the Spool File is empty, it only takes up 66 bytes on
           your disk or diskette.  It grows as data is spooled into it.





















                      DISK SPOOL II     4
-------------------------------------------------------------------------------



           There are three ways in which data is purged from the
           Spool File:

           a. Clearing it manually

              If the file you wish to clear is the one currently attached
              to the Spooler, then you can take the (F)iles (C)lear
              (S)pooler menu sequence.  And similary, if the file is
              currently attached to the De-spooler, then the (F)iles
              (C)lear (D)e-spooler does the job.  Also, if you take
              the (F)iles (L)ist menu sequence, you are presented with
              a display of files, and you can delete any one of them
              by keying a '9' in the option field.  (Note: you can also
              delete the file by using DOS' DEL or ERASE commands.  Don't
              worry about deleting the current Spool File, since DISK
              SPOOL II will automatically re-create the file if it
              needs to.)

           b. When DISK SPOOL II is initiated into memory

              DISK SPOOL II may be configured so that when it is
              initiated into memory it checks the Spool File to
              see if it has been printed out completely; and if so, it
              clears it.  This is the way DISK SPOOL II comes pre-
              configured to you.  If you would rather keep spooled data
              on disk, and purge it manually, then change the configuration
              option Keep Spool File to YES.

           c. Resizing the file dynamically

              If you anticipate running low on disk space (perhaps
              because you are going to do quite a bit of printing between
              re-boots), and if you don't want to have to concern yourself
              with manually clearing or deleting files, then you should
              configure DISK SPOOL II's Dynamic Resize parameter to YES.
              With this setting, every time the De-Spooler reaches the
              end of a file, it deletes it off of disk.

        3. Controlling the De-spooler

           a. Stopping and Starting Printing

              You have control of when printing takes place by enabling
              or disabling the De-spooler.

           b. Controlling where in the file to begin printing.

               i. At the beginning of the file

              ii. After the last fully printed document

                  This method is handy if your printer jams.  By starting
                  the De-spooler after the last fully printed doucment,
                  you pick up just at the right place.







                      DISK SPOOL II     5
-------------------------------------------------------------------------------



             iii. At the end of the file

                  This method of enabling the De-spooler means that despooling
                  will start at the exact point where it last left off.  If you
                  suspended printing by disabling the De-spooler, and want to
                  start back exactly where you left off, then use this method.

              iv. Using the 'P' option from within the file display

                  You may start despooling at any place within the Spool File
                  by displaying the file (using the (F)ile (D)isplay
                  (D)e-spooler menu sequence), positioning the starting line
                  to the top of the display, and pressing the 'p' key.
                  The best sequence of events to take here is to disable the
                  De-spooler, perform the above steps, and then enable the
                  De-spooler "after the last fully printed document".

           c. Printing from Different Files

              You may "attach" the De-spooler to any spooled file.  There
              are two ways to do this:

              - Take the (F)ile (A)ttach (D)espooler menu sequence and then
                key in the file name.

              - Take the (F)iles (L)ist menu sequence, and key a 3 next to
                the file you wish to print.

              Don't try to attach the De-spooler to a file other than one
              that was spooled.  If you want to print another file, simply
              key in SP2PRT {filespec}.  In this manner, the file will
              be spooled.  This command operates very quickly, as all it does
              is append the file to the end of the Spool file.

           d. Controlling the Output Port.

              You designate a default output port in configuration.  You may
              change this value by keying the menu sequence (V)alues
              (D)espoolport, and using the cursor movement keys to make
              a selection.


     B. Auto Spool

        1. Introduction

           In Auto Spool Mode, a new spool file is created for each document
           spooled.  To display a list of the files created, key the
           (F)iles (L)ist menu sequence.  Note how this list shows you the
           file name on disk, the time and date it was created, its size,
           and the name of the program that printed the document.  To print
           a file, key a 3 next to its name.  This attaches the De-spooler
           to that file.








                      DISK SPOOL II     6
-------------------------------------------------------------------------------



        2. How to Enable Auto Spool

           You can enable Auto Spool in two ways:  either through
           configuration, or from within the pop-up menu by taking the
           menu sequence (S)pooling (A)utospool (E)nable.  You may disable
           Auto Spool from within the pop-up menu as well.


        3. Spool File Print Attributes

           By default, each file created by the Autospooler will have the
           following attributes:

           Copies       - 1
           Despool Port - The Despool Port as seen in the (V)alues
                          (D)espoolport menu sequence.
           SAVE status  - If the Dynamic Resize parameter as designated in the
                          configuration program is set to YES, then the file
                          will be deleted after printing.  Otherwise, it will
                          be saved.
           HOLD status  - NO
           Description  - The name of the program that printed the document.

           All of these values may be changed from within the (F)iles (L)ist
           display.  Take option 5 for the file you wish to change.  And take
           option 4 to place a file on HOLD.  (Note: the HOLD status is
           really only meaningful when operating in Auto De-spool mode.
           See the description of this mode which follows for more details.)

        4. Spool File Attributes by Application

           You may set up DISK SPOOL II so that different applications result
           in different spool file attributes.  You may, for instance, want
           all your graphics applications to go to COM1 and be printed twice;
           while your spreadsheet printouts are to go to LPT1, and be saved.

           To tailor DISK SPOOL II in this manner, simply use your text editor
           to modify the SP2.DAT file.  For example, the line:

           123 COPIES:1 PORT:LPT1 SAVE:YES HOLD:YES

           would make it so any documents printed by application 123 would
           take on the print attributes as shown.


     C. Auto De-spool

        1. Introduction

           In Auto De-spool mode, not only are seperate files created for
           each document, but the De-spooler automatically attaches itself
           from one file to the next, as files become available for printing.









                      DISK SPOOL II     7
-------------------------------------------------------------------------------



        2. How to Enable Auto De-spool

           You can enable Auto De-spool in two ways:  either through
           configuration, or from within the pop-up menu by taking the
           menu sequence (D)espooling (A)utodespool (E)nable.  You may disable
           Auto De-spool from within the pop-up menu as well.  Because Auto
           De-spooling goes hand-in-hand with Auto Spooling, whenever you
           enable Auto De-spool, DISK SPOOL II automatically enables Auto
           Spool, as well.

        3. Controlling the Auto De-spooler

           The affect of enabling and disabling the De-spooler is the same
           whether it is in auto mode, or not.

           While the De-spooler is enabled, the way to prevent a file
           from being printed is by placing it on HOLD.  You do this
           by keying a 4 next to the file name from within the (F)iles
           (L)ist display.  (By the way, this is the display that first
           pops up when you are in Auto De-spool mode.)  You may release
           a file for printing by keying a 6 next to the file name.


VII. DISK SPOOL II Performance

     There are two aspects of performance:  the speed of the Spooler (which
     means how fast your application program returns control back to you),
     and the speed of the De-spooler (which means how fast documents actually
     get printed out).

     Spooler Speed
     -------------

     One of the most attractive features of spooling is that control is
     returned to you quicker than when printing goes directly to the printer.
     The quickness of the spooling function can be conrolled in three ways.

     1. The size of the internal buffer

        As printing is taking place, DISK SPOOL II buffers characters in
        memory, and flushes them to disk after the buffer becomes close to
        being full.  You can achieve substantial performance increases in
        this area (up to 100% faster) by increasing the size of this internal
        buffer.  You do this by keying a command-line parameter when you
        first initiate DISK SPOOL II into memory.  The parameter is an 'm'
        followed immediately (without spaces) by a digit from 0 to 9.

        Here is how it works:

        Each of the 4 versions of DISK SPOOL II takes up a certain amount of
        "base" memory; that is, the amount of memory required to perform its
        functions.  The largest size that the spool buffer can be is 64k less
        this amount of "base" memory.  When you utilize the 'm' command-line
        parameter, DISK SPOOL II divides this available buffer area by 10,
        and then, depending on the digit following the 'm', multiples of this
        figure are added to the buffer size.  If you keyed in SP2 m9, then the
        entire available area is allocated for the spool buffer.




                      DISK SPOOL II     8
-------------------------------------------------------------------------------



     2. Whether or not you are spooling to a RAM disk

        When you spool to a file on a RAM drive, the spooler performance
        increases by a factor of approximately 100%.

     3. Utilizing SP2PRT

        If you have a file that you simply want to send to the printer, send
        it by using the SP2PRT command.  Simply key SP2PRT followed by the
        name of the file you wish to print.  Using SP2PRT results in spooler
        performance in the order of three times quicker.


     De-spooler Speed
     ----------------

     DISK SPOOL II has been engineered to take advantage of every free
     processing cycle for printing. Therefore, you should be experiencing
     no printing speed degradation whatsoever.  However, if your foreground
     process is processor intensive, that is to say, a program is
     running that requires little user interface, then if your printing
     speed is not satisfactory you may experience a significant performance
     increase by fine tuning.

     The first thing to try in the fine tune process is setting the
     Despool Method configuraton option to Hardware Interrupts.  If you
     are printing to a COM port, then Hardware Interrupts will give you
     just about as efficient a printing speed as is possible.  However, if
     you want to use Hardware Interrupts with a COM port, then you'll have
     to use the CTS, only despooling method.

     With LPT ports, due to a flaw in the design of many of the LPT cards
     on the market today, Hardware Interrupts won't work at all, and in
     fact will result in extremely slow printing speed.  If you have such
     an LPT card, then Budget Software Company can provide you with an
     adapter that corrects the problem.  The cost is $15.  (You may create
     your own adapter if you want.  You need a female DB-25 connector for
     the printer side, and a male DB-25 connector for the computer side.
     Simply connect all wires straight through, except leave pin 10 on
     the printer end disconnected, and then connect pins 10 and 11 on
     the compter side.)

     If Hardware Interrupts doesn't work for you, then a certain amount
     of performance increase can be obtained by following these "fine
     tune" steps:

     Step 1
     ------

     Configure DISK SPOOL II to the Despool Method called "manual", and
     set OUTBYTES to 32 and RETRY to 1.

     Step 2
     ------

     Disable the De-spooler, and then spool out a very large document -- one
     that will take several minutes to printout.




                      DISK SPOOL II     9
-------------------------------------------------------------------------------



     Step 3
     ------

     Enable the De-spooler, and wait about 30 seconds in order to fill up
     any buffer your printing device may have.

     Step 4
     ------

     While the De-spooler is still printing, key the pop-up menu sequence
     (V)alues (R)etry.  Now depress your up-arrow, gradually increasing the
     RETRY value.  Observe your printer.  At a certain point, the printer
     speed will increase dramatically.  You will have found the "threshhold"
     value for RETRY.  Add about 5 or 10 to this valu, and this is the value
     you should use.

     You can now play with the OUTBYTES value in a similar fashion.  You won't
     notice a "threshold" situation.  Instead, your printer speed will
     increase very gradually as OUTBYTES increases.  The rule here is to set
     OUTBYTES sufficiently high to obtain maximum printer speed, but not so
     high that you notice forground degradation.



XIII. OTHER SPECIAL FEATURES OF DISK SPOOL II

     1) There are two versions of DISK SPOOL II on your diskette.

        SP2S   - Fully functioning version.  Takes up about 51k.
        SP2SSS - No pop-up menu.  14k.  Note that even without the
                 pop-up menu, this version gives you a substancial
                 amount of control over your spooling activities.  You
                 merely depress and hold down the hot-keys and then
                 press one of the following letters:

                 E - (E)nable spooler
                 D - (D)isable the spooler
                 S - (S)uspend de-spooling
                 R - (R)esume de-spooling where you left off
                 B - Start the de-spooler back up at the (B)eginning
                     of the spool file.




















                      DISK SPOOL II     10
-------------------------------------------------------------------------------



                 Note also that you can control SP2SSS (as well as the
                 other modules) by means of keying in the program name
                 followed by one or more command-line parameters.  Note
                 how several command-line parameters work both as
                 load-time parameters as well as run-time.  For example,
                 if you want to clear the current spool file, you can key
                 SP2 x.


     2) Several DISK SPOOL II functions can be controlled by means
        of command line parameters.  These parameters are keyed
        after keying SP2, they may be keyed in any order, and where
        letters are involved, uppercase or lower case is allowed.
        A detailed discussion of each command line parameter is
        discussed below.


        The following parameters do something only when DISK
        SPOOL II is first initiated into memory:

        L - Expand the spooler buffer to the largest possible
            value that fits in 64k.  This has the benefit quicker spooling
            times, and hence your application returns control to you more
            quickly.  The price you have to pay for this performance is
            that more of your computer's memory is taken up by DISK SPOOL II.

        M - Follow this parameter by a digit from 0 to 9.  In this manner
            you can select various gradations in increasing the size
            of the spooler buffer.




        The following parameter does something only when DISK
        SPOOL II is already in memory:
 
        T - Takes DISK SPOOL II out of memory.  Note that when you
            take DISK SPOOL II out of memory, then any memory
            resident programs loaded after DISK SPOOL II was loaded
            are also removed.





















                      DISK SPOOL II     11
-------------------------------------------------------------------------------



        The following parameters do something either if DISK SPOOL
        II is being initiated into memory for the first time, or
        if it is already in memory.

        K - spool and despool using a COM port
        P - spool and despool using an LPT port
        1 - COM/LPT1    (ex: sp2 p1 directs DISK SPOOL II to spool
                             and despool to LPT1)
        2 - COM/LPT2
        # - disable the Spooler and the De-spooler
        $ - enable the Spooler and the De-spooler
        % - enable the Spooler (note: if you include this command
                                line parameter with a .BAT file,
                                you must put two %'s back to back,
                                otherwise DOS thinks it's dealing
                                with a substitution variable)

        & - enable the De-spooler
        * - disable the De-spooler
        + - disable the Spooler
        X - clear the default spool file
        a,b,c,...,j - place the Spool File on this drive
        r - enable the "dynamic resize" (this is where when the
                De-spooler reaches the end of the file, it
                deletes it.)
        = - this parameter is always followed by a 1, a 2, a 3, or
            a 4. Example: sp2 =3
            This is how you load and maintain multiple copies of
            DISK SPOOL II into memory.  Generally, if you just
            key in SP2 followed by one or more command line
            parameters, DISK SPOOL II merely re-configures the
            version that is presently in memory.  If you want
            to initiate a subsequent version, then you do so by
            including the = parameter.  For example:
               
              - You key in SP2 p1 (initiates DISK SPOOL II into
                                   memory and spools/despools LPT1)
              - SP2 =2p2 (initiates another copy of DISK SPOOL II,
                                   this time spooling LPT2)
              - SP2 =1k1 (reconfigures the 1st loaded version to
                          spool/despool COM1.
 
            For a more detailed discussion of using multiple copies
            of DISK SPOOL II in memory at the same time, refer to
            the discussion immediately below.
















                      DISK SPOOL II     12
-------------------------------------------------------------------------------



     3) You may have multiple copies of DISK SPOOL II in memory at
        the same time.  In this way, you can have more than one
        printer working simultaneously, and still be working at
        your computer.


        There are several things to consider when loading multiple
        copies of DISK SPOOL II into memory.  If you are going to
        want to utilize the pop-up menu, then you are going to want
        to configure different versions, each one with a
        different "hot-key" sequence.  Say, for example, that you
        want to drive the LPT1 and the LPT2 ports simultaneously.
        You would go into SP2CFG and configure one of the SP2
        versions to de-spool to LPT1, and you would define
        a certain "hot-key" sequence.  You would also want to
        configure a unique default Spool File and De-spool File.
        Then you would make a copy of this program, calling it,
        say, SP2L1.COM.  Then you would do the same thing to create
        an SP2L2.COM.  The first version loaded into memory would
        be loaded by simply keying in the name of the program.  To
        load a second version, you need to include the =2 command
        line parameter:  SP2L2 =2.  (Note: as you can see, it is
        not sufficient to simply load up differently named programs.
        You indicate a seperate version by keying the =2, =3, or
        =4 on the command line.  You may also use an =1 parameter,
        but if you don't specify an = parameter then this amounts
        to the same thing as an =1.)  Under this scenario, you would
        tap the one "hot-key" sequence to bring up the one program's
        pop-up menu, and the other "hot-key" sequence to bring up
        the other.  Note that if you want to use the command line
        to make changes to a version that is already in memory, then
        you must us the = parameter to designate the one you are
        changing.  For example, if you wanted to clear the Spool
        File of the 2nd loaded program using the command line, and
        given the above scenario, then you would key in SP2L2 =2x.

     4) You may redirect the De-spooler's output to a device driver
        or to a disk file.  To do this, key in SP2 @xxxxxxxx, where
        the x's represent the name of the device driver or the disk
        file (8 characters maximum, including an optional drive and
        path designation).  Here is a good reason why you might want
        to redirect the De-spooler output to a disk file:  DISK
        SPOOL II can be configured to utilize a compress algorithm
        in order to minimize the disk usage; and in fact this is
        how DISK SPOOL II comes pre-configured to you.  However,
        with a compressed file, you can't port the file directly
        into a word processor, for instance.  But, if you redirect
        the De-spooler output to a disk file, then this file will
        an exact image of the printed document.

        Note that if you redirect to a disk file, and that file
        already exists, then data is added to it.
 
        To cancel redirection and revert back to normal processing,
        key in SP2 @ with nothing following the @ sign.






                      DISK SPOOL II     13
-------------------------------------------------------------------------------



     5) You may designate that multiple copies be printed of a
        file.  To do this, go into (F)iles (L)ist, and take the
        option to "change" the file.  If after the copies are
        you want still more copies, then simply disable then re-enable
        the De-spooler; or if Auto De-spool is enabled, then just release
        the file.  Note that DISK SPOOL II will not page-feed
        between copies unless you tell it to do so by configuring
        the Auto Form Feed option in SP2CFG.  Often this is not
        necessary, since the application that you are running will
        usually send the necessary form feed instructions.

     6) You may tailor the context-sensitive help file (SP2.HLP)
        to include your own helpful hints and information.  To do
        so, simply go into your text editor, locate the menu tier,
        and add or change text to suit your needs.  DISK SPOOL II
        uses the first letters of the menu keying sequence followed
        by a special control character in order to find the 
        appropriate help text.  Therefore, the only thing that you
        have to worry about is not changing these control lines.

     7) DISK SPOOL II may be taken out of memory completely by
        keying in SP2 t.  Note, however, that any memory-resident
        applications that have been loaded after DISK SPOOL II are
        taken out, too.


 IX. TROUBLE SHOOTING

     1. Introduction

        Budget Software Company offers three forms of tech support to all
        registered users:

        Telephone:  (303) 932-1705
        CompuServe: 70033,643
        Mail      : P.O. Box 621534
                    Littleton CO 80162

     2. DISK SPOOL II "hangs" the computer.

        DISK SPOOL II is very robust, and has been designed to
        adhere to commonly used memory-resident protocols.  As such,
        it is not likely that you are going to experience problems,
        even if you load DISK SPOOL II along with other memory-resident
        programs.  If you do experience problems, the first thing to
        do is see if the same problem occurs in a "clean" environment;
        namely, one in which there are no other memory-resident
        programs installed.  If you still experience the problem, then
        write or telephone for technical support.  If the problem goes
        away, then start loading the other memory-resident programs
        one by one to try to find the one that is causing the conflict.
        If you find the program that is causing the conflict, then
        try loading it and DISK SPOOL II in a different order than you
        originally had.  Quite often this resolves the problem.







                      DISK SPOOL II     14
-------------------------------------------------------------------------------

     3. Normal keyboard operations seem to be fouled up when DISK SPOOL II
        is in memory.  For example: for no reason whatever, the computer
        will go into Caps Lock state, and remain there.

        There is a "hidden" configuration option in SP2CFG which resolves
        this problem by causing a different type of keyboard handling
        mechanism to be utilized by DISK SPOOL II.  To enable this alternate
        keyboard mechanism, first go into SP2CFG and bring up the configuration
        options display for the version you wish to configure.  Then tap the
        'k' key two times.  Now exit, saving changes, and your the change will
        become effective starting with the next time you load DISK SPOOL II
        into memory.  To revert back to the original keyboard handling
        mechanism, perform the same steps, only tap the 'j' key twice.
        There is one limitation to this alterate keyboard handling method:
        the only keys that are allowed as pop-up keys are the Left and Right
        Shift keys, the Alt key, and the Ctrl key.

     4. I have enabled the COM Monitoring function (where data being sent
        to a COM port from an external source is spooled to disk in the
        background), and yet no spooling seems to be taking place.

        Keep in mind that DISK SPOOL II does not initialize the COM port
        protocols.  You must do this yourself using a MODE command for instance.
        Another thing you should know is this: when you use the COM Monitoring
        function, DISK SPOOL II sets up the designated COM port(s) to
        allow for hardware interrupts.  The MODE commmand disables these
        hardware interrupts.  So, if you've already loaded DISK SPOOL II into
        memory, and you forgot to initialize your COM ports, and have to
        now use the MODE command, you must disable the Spooler, and then
        enable it in order that DISK SPOOL II re-set on the hardware interrupts.

     5. When I disable the De-spooler, or put the currently printing file on
        HOLD, the printer continues to print out for a while.

        There are two reasons for this.  Most printers have their own small
        data buffers.  And even though DISK SPOOL II may no longer be sending
        data to the printer, nevertheless, the printer is still printing from
        its internal buffer.  To overcome this, simply turn your printer off
        and then back on.  Another cause for this is that if DISK SPOOL II is
        configured with Compress YES, then even after you have disabled the
        De-spooler, a certain amount of data is still sent to the printer.
        If you are concerned with being able to stop printing immediately, then
        configure Compress to NO.

     6. I am de-spooling to a COM port, and I am experiencing data overruns.

        Try changing the COM Protocol configuration option to Xon/Xoff.


     7. Is there any way to make the data in SP2.DAT take affect without
        to re-initiate DISK SPOOL II into memory?

        Yes, after changing SP2.DAT, merely pop-up the menu and take the
        (F)iles (D)isplay (S)pooler menu sequence.  This will cause DISK
        SPOOL II to re-read SP2.DAT into memory the next time it needs to
        determine a spool file's attributes.







                      DISK SPOOL II     15
-------------------------------------------------------------------------------



     8. I spooled a document, and a part of it was chopped off.  It never
        made it to the spool file.

        If you did a COPY <filespec> LPT1, or a TYPE <filespec> > PRN, or
        the like, then you should use the SP2PRT command instead.  Merely
        key in SP2PRT <filespec>.  You may also optionally designate a
        port with this command.  Ex:  SP2PRT myfile LPT1.  If you don't
        designate a port, then LPT1 is the default.

        It also occurs that an application is designed in such a manner as to
        not allow DISK SPOOL II to flush its internal spool file buffer, and
        hence when the buffer fills up, subsequent data is lost.  Fortunately,
        such programs are rare.  The best way to combat this is to
        increase the size of the internal spool file buffer.  That way, there
        is a better chance that the entire document will fit in the buffer,
        and when your application program ends, then DISK SPOOL II will be
        able to flush the buffer.  With DISK SPOOL II's smallest module
        (SP2SSS.COM) you can get up to 50k of internal buffer.

     9. Sometimes, data is dropped and not printed.

        If you have a BREAK=ON in your CONFIG.SYS or AUTOEXEC.BAT files,
        take it out.  This command serves very little function, if any,
        and it has been known to interfere with DISK SPOOL II's de-spooler.

        Also, if ever you hear a beep while spooling is taking place, then
        you should use an Mx command line parameter (as described above) to
        increase the size of the internal spool buffer.  A beep indicates that
        DISK SPOOL II was unable to flush to the Spool file when it needed to,
        as so some printed data was lost.  The larger the 'x' value (M8, or M9,
        for example), the less chance that this will occur.






























                      DISK SPOOL II    16
-------------------------------------------------------------------------------


  X. FOR PROGRAMMERS

     You may hook programatically into several DISK SPOOL II
     functions via a call to interrupt 1Ah.  The following table
     describes how to do so.

 
        INPUT
    -------------
    AH        AL          Returns/Function
    --        --          ---------------------------------------
    0a0h     n/a          Upon return, if AH = 0b0h, then DISK
                          SPOOL II is in memory, and furthermore:
 
                          es = the location of the code segment
                          bx = pointer to name of current Spool File
                          si = pointer to current De-spool file.
                          cl = 0, if De-spooler is disabled.
                               41h,if De-spooler is enabled.
                          ch = 0, if Spooler is disabled.
                               41h, if Spooler is enabled.
                          dl = 41h if De-spooler is currently
                                   active printing a file.
			       0 if the De-spooler is standing by.
    0d0h       1          Enables Spooler and De-spooler.
               2          Enable Spooler, only.
               3          Enable De-spooler at beginning of file.
               4          Disable the De-spooler.
               5          Disable De-spooler and Spooler.
               6          Clear the Spool File.
               8          Inhibit the Pop-Up menu.



               9          Enable the Pop-Up menu.
              0bh         Disable the Spooler
              0ch         Start De-spooler after last successfully
                            printed document.
              0dh         Start De-spooler at the exact point where
                            it last left off.
              0eh         Pop-up the menu.
              20h         Clear file pointed to by the De-spooler.

  XI.  Notes for Windows 3.x users

       DISK SPOOL II has been tested and found to run successfully along with
       Windows 3.x.  There are three main ways to run DISK SPOOL II along
       with Windows.

       1.  Establish a spooling environment for all non-Windows applications.

           Load DISK SPOOL II before loading Windows.  Whenever you open
           a non-Windows application, DISK SPOOL II will automatically
           spool printouts (according, of course, to the way that you've got
           DISK SPOOL II configured.  Note that even in Regular or Standard
           mode, printing will still take place when you shift to a different
           window.





                      DISK SPOOL II    17
-------------------------------------------------------------------------------

  XI.  Notes for Windows 3.x users  (continued)

        2.  Establish a spooling environment for only certain non-Windows
            applications.

            Open a DOS command line Window, or open a non-Windows application
            via a .BAT file, and load DISK SPOOL II from within that
            window.  Remember, however, that if you should terminate this
            window, then your copy of DISK SPOOL II also ends.

        3.  Establish a spooling environment for all applications, both
            non-Windows as well as Windows application.

            The best way to use DISK SPOOL II with windows is to utilize
            the new Monitor feature.  You set up DISK SPOOL II to "monitor"
            a specified drive and directory, and then simply set Windows up
            to print-to-file instead of to a device.  You'll want to turn
            print manager off, as well.



 XII.  Problems encountered with Windows 3.x

       1. If you have trouble getting reliable printouts, then configure
          DISK SPOOL II's Bios option to YES using SP2CFG.
 
       2. Under certain conditions, in enhanced mode, DISK SPOOL II is not
          able to pop-up successfully within the window.  You should maximize
          the window so that it takes up the entire display, and then pop-up
          DISK SPOOL II.

       3. Under certain conditions, Windows 3.0 will send a "device conflict
          with LPT1" message even when it is clear that only on application
          is sending data to the printer.  If you are encountering this
          message (and it generally only occurs when you are in enhanced mode),
          then simply configre Windows to not notify you when a device conflict
          occurs.
 

























                      DISK SPOOL II    18
-------------------------------------------------------------------------------

```
{% endraw %}

## SP2INTFC.DOC

{% raw %}
```
This document describes the programming interface capabilities of DISK SPOOL
II version 4.00.  Please note the following definitions:

ASCIIZ  -  This refers to a file spec (including drive and path) followed
           by a binary 0.  The maximum length of the entire ASCIIZ
           (including the terminating 0) is 33 bytes.

port involved - This refers to the Spool Port  (i.e. - the port that DISK
                Spool II is intercepting and re-routing to disk).

                        1 - COM1
                        2 - COM2
                        5 - LPT1
                        6 - LPT2

                The reason that the "port involved" needs to be indicated
                in most of the function calls described below is that it
                is possible to load 2 or more copies of DISK SPOOL II into
                memory at the same time, thereby driving multiple printing
                devices simultaneously.


Note that all program hooks are done via software interrupt calls.  The
interrupt number used is INT 1Ah.  Thus, the program must first set AH as
well as the other registers as indicated, and then do an INT 1Ah.
-------------------------------------------------------------------------------

1. Enable the Spooling Function.

   Input:
                ah = 0e0h
                al = 1
                cl = port involved
   Return:
                ah = 0 ... if successful
                     0f0h  if request failed because there is no copy of
                           DISK SPOOL II in memory that is spooing the
                           designated port.
                     0ffh  if request failed for a miscellaneous reason

2. Disable the Spooling Function.

   Same as 1, above, except that al = 2 on input.

3. Enable the Despooling Function

   Same as 1, above, except that al = 3 on input.

4. Disable the Despooling Function

   Same as 1, above, except that al = 4.

5. DISK SPOOL II status call.

   Input:
                ah = 0e1h
                cl = port involved
   Return:
                ah = 0f0h ... no copy of DISK SPOOL II is currently in memory
                              that is spooling the designated port.
                     0 ...... a copy of DISK SPOOL II is installed for the
                              designated port; and furthermore:

                ES:BX  ...... a far pointer to an ASCIIZ of the current
                              Spool File (or in the case where the AutoSpool
                              or the AutoDespool feature is enabled, an ASCIIZ
                              of the next spool file.)
                ES:SI  ...... a far pointer to an ASCIIZ of the current
                              Despool file ... i.e. - the file currently being
                              printed.
                cl = 0 ...... if the Despooler is disabled.
                     41h .... if the Despooler is enabled.
                ch = 0 ...... if the Spooler is disabled.
                     41h .... if the Spooler is enabled.
                dl = 0 ...... if the Despooler is standing by.
                     41h .... if the Despooler is currently printing.
                ES:DI  ...... a far pointer to the 3-byte file extention
                              being used by DISK SPOOL II.  (e.g. - SPL)

6. Get 1st spool file.  Based on the user-designated spool file directory,
   and the user-designated file extention, this function returns the ASCIIZ
   of the first file that exists.  NOTE: this function is only meaningful if
   the AutoSpool or AutoDespool functions are enabled.

   Input:
                ah = 0e2h
                al = 1
                cl = port involved

   Return:
                ah = 0f0h if no files exist
                   = 0ffh if function call failed.
                   = 0 if function succeeded; and furthermore:
                     ES:BX is returned as a far pointer to the ASCIIZ of
                     this first file.

7. Get the next spool file.  This function must always be proceeded by the
   function described just above, "get 1st spool file".

   Input:
                ah = 0e2h
                al = 2

   Return:
                ah = 0f0h if no more files exist
                   = 0ffh if function failed
                   = 0 if function succeeded; and furthermore:
                     ES:BX is returned as a far pointer to the ASCIIZ of
                     the file.

8. Obtain status about a spool file.  NOTE: this function is generally used
   when AutoSpool or AutoDespool is enabled.

   Input:
                ah = 0e3h
                al = 1
                ES:BX points to the ASCIIZ of the file
   Return:
                ah = 0f0h if the file pointed to was not a DISK SPOOL II
                          spooled file.
                   = 0ffh if the function failed.
                   = 0 if the function succeeded; and furthermore, ES:SI is
                     returned as a far pointer to the following data
                     structure:

    Length in Bytes       Description
    ---------------  ----------------------------------------------------------
         1              Hour when file created, or last changed.
         1              Minute when file created, or last changed.
         1              Year when file created, or last changed. 0 = 1980,
                        1 = 1981, and so forth.
         1              Month when file created, or last changed.
         1              Day when file created, or last changed.
         1    *         Number of copies requested to print.
         1              Number of copies already printed.
         1    *         Print port; 1 - COM1; 2 - COM2; 5 - LPT1; 6 - LPT2
         1    *         Save status; 1 - file will be saved after printing;
                        0 - file will be deleted after printing.
         1    *         File status:
                        1 - file finished printing, but being Saved.
                        2 - file held.
                        3 - file queued up for printing.
                        4 - file currently being spooled.
                        5 - file currently being despooled (i.e. - being
                            printed)
         16   *         15-byte description, followed by a binary 0.  DISK
                        SPOOL II generally places the name of the process
                        invoked from DOS into this field.  For example, if
                        Lotus created the spool file, and the command that
                        was used to load Lotus was 123, then the description
                        would be 123.  If SP2PRT is used to spool a previously
                        existing DOS file, then the name of the file is placed
                        into the description.
         2              High order word of the file's size in bytes.
         2              Low order word of the file's size in bytes.
         2              High order word of the number of bytes left to print.
         2              Low order word of the number of bytes left to print.

9. Update a spool file.

   Input:
                ah = 0e3h
                al = 2
                ES:BX points to the ASCIIZ of the file to update.
                ES:SI points to the same data structure as above.  Only the
                fields marked with an '*' are updated; and the File Status
                byte may be set to a 2 in order to hold the file, and to a 3
                in order to release it.
   Return:
                ah = 0f0h if the file pointed to was not a DISK SPOOL II
                          spooled file.
                     0ffh if the function request failed.
                     0    if the function request succeeded.

  NOTE:  The most common way to effect an update to a spool file is to perform
         an "obtain status about a spool file" first (8., above); after which
         point ES:BX and ES:SI are set correctly, and you need only modify
         those fields that you wish to update.  Then issue this function call.

10.  Spool a file.  This function is used when an already existing DOS file
     needs to be printed.

   Input:
                ah = 0e4h
                al = 1
                ES:BX points to an ASCIIZ of the file to be spooled.
                cl = port involved
   Return:
                ah = 0ffh if function failed.
                   = 0 if function succeeded.

-------------------------------------------------------------------------------

The following is an example of how the above function calls could be used to
designate the number of copies to be printed.  This example assumes that
the AutoSpool or the AutoDespool function is enabled.

1. Perform a DISK SPOOL II status call (5., above).  ES:BX will be returned
   as a far pointer to an ASCIIZ of the next spool file.  Copy the 33 bytes
   pointed to into your own save area.  NOTE:  Even though the name of
   the next spool file is known, the file will not yet have actually been
   created.  Therefore, there is no point in doing a status call or a file
   update yet.  If you want the file that is going to be created to be on
   hold so that it doesn't get processed by the Despooler until you release it,
   then create an SP2.DAT record so indicating.  (Refer to the User's Guide
   for instructions on how SP2.DAT functions.)

2. Run your application.

3. Perform an "obtain status about a spool file" function (8., above).  Point
   ES:BX to the 33 bytes save area that you created in step 1.

4. Perform the "update a spool file" function (9., above), changing the number
   of copies.
```
{% endraw %}

## SP2NEW.DOC

{% raw %}
```
-------------------------------------------------------------------------------

                         Version 2.06 Enhancements


     -- DISK SPOOL II and networks.

        Picture the following scenario:  you've got two or more computers
        networked together and only one has a printer.  The computer with the
        printer is sharing its disk space with the other computers.  Every
        computer has a copy of DISK SPOOL II active, and the one or ones that
        don't have a printer are set up to place their spool files onto the
        disk drive of the computer where the printer is attached.  Everything
        seems fine with this scenario, except that DISK SPOOL II on the computer
        having the printer attached doesn't recognize the existence of
        files created by the other computers.  This is where DISK SPOOL II's
        network feature comes in.  The discussion below describes this
        feature.  To activate it, key in !#d on the command line when you first
        initiate DISK SPOOL II into memory.  Example:  SP2  !#d.  Note that
        AutoDespool mode must be active on all machines.

        Normally, the AutoDespooler only recognizes files that have been
        spooled on that same machine.  It keeps an internal table of
        files created, and then when a file is finished printing,
        it accesses that table in order to find another one to print.  With
        the network feature enabled, in addition to this, the AutoSpooler reads
        the directory every so often to see if anything new has shown up.  It
        looks for files having the prefix SP0xxx.SPL, where the x's are three
        digits, and the SPL is the same suffix as designated in SP2CFG.

        In this manner, files created by remote computers' DISK SPOOL II, as
        long as they are placed in the correct directory on the computer
        where the printer is attached, will get printed.

        The duration of time between directory reads can be controlled from
        within the configuration program by setting the "flush delay"
        parameter to the desired interval in seconds.  A somewhat low setting
        probably won't affect your computer's performance, since DOS usually
        keeps a copy of the directory in memory, and so actual reads to the
        disk drive itself are usually not necessary.

        It can happen, if the timing is correct, that different computers end
        up spooling to the same file name.  In order to prevent this situation,
        key in the following command line parameter:  !#x, where x is a digit
        from 0 to 9.  If you key a 0, then the AutoSpooler will create files
        having names whose 4th digit starts with 0:  SP0000.SPL, SP0001.SPL,
        etc.  If you key a 1, then the names will look like this:  SP0100.SPL,
        SP0101.SPL, etc.

-------------------------------------------------------------------------------

                         Version 3.00 Enhancements

        -- Expanded Memory (EMS).  You may now configure DISK SPOOL II to use
           your computer's expanded memory, if any exists.  Two things occur
           in this configuration:  DISK SPOOL II loads in less regular memory
           (only 30k for the SP2 version), and the internal spool file buffer
           uses Expanded memory, so control returns to your keyboard quicker.
           Furthermore, you may spool to EMS by making the Spool File name
           *EMS either by configuration, or by (F)ile (A)ttach (S)pool.
           Note that DISK SPOOL II will dynamically allocate the expanded
           memory segments for the Spool File as it needs them, and it releases
           them for other applications to use when it doesn't need then.
           For most efficient memory usage, set the (D)ynamic (R)esize
           configuration option to YES.  In this manner, when DISK SPOOL II is
           finished printing the *EMS file, it will automatically "delete"
           the file, thus freeing up expanded memeory.

        -- Drivers.  A "device driver" version of DISK SPOOL II now exists.
           It loads with all the same command line paramters, only you load
           it in your CONFIG.SYS file with a DEVICE=SP2.DRV {parameters} line.

           -- Virtually 99% of all significant problems experienced with
              DISK SPOOL II are caused by an incompatibility with other
              memory-resident programs.  Such programs are memory-resident
              because they are TSR's that you load after boot-up (or perhaps
              in your AUTOEXEC.BAT file), or they are "device drivers" loaded
              in your CONFIG.SYS file.

              Quite often, in these situations, a complete resolution of the
              problem can be obtained simply by loading the two conflicting
              programs in a different order.  Before this version, if the
              program conflicting with DISK SPOOL II were a device driver,
              then you had no recourse but to use the two at different times,
              since there's no way to load a TSR before a device driver.
              But now you can use the device driver version of DISK SPOOL
              II, and experiment loading it before the conflicting driver.

-------------------------------------------------------------------------------

                         Version 4.00 Enhancements


        -  DISK SPOOL II now loads almost entirely in extended memory.  The
           addresses of extended memory being used are those in the first
           64k above the 1 Meg boundary.  DISK SPOOL II does not depend on
           memory manager programs in order to utilize this space; but at
           the same time, is totally compatible with such programs.

           The amount of "lower DOS" memory that DISK SPOOL II uses is
           3k.

           The 2nd display of the configuration program (SP2CFG) allows
           you to configure DISK SPOOL II to load entirely into the lower
           memory area.  This provides for the situation where DISK SPOOL II
           is incompatible with some other program using extended memory.

        - An entirely new function, called the Monitor, has been incorporated
          into DISK SPOOL II.  With this new function, you may optionally
          configure DISK SPOOL II to monitor any two directories on your
          machine for the appearance of a DOS file of a skeleton form that
          you designate much in the same manner that one would do a DIR
          command.  When such a file appears, and after a few seconds delay,
          DISK SPOOL II automatically, and in the background, queues this
          file to be printed in the background.  For instance, you can
          designate that any DOS file of the form *.plt that appears in
          directory c:\cadkey\plt\ be sent off to COM1, while any file of
          any name (*.*) that appears in directory c:\queue\lpt1\ be sent
          off to LPT1.

          This feature was incorporated in order to complement programs
          that give you the abilily to print to a disk file.  Such programs
          generally do so in the most rapid manner possible.  And so, without
          ever having to leave your application, DISK SPOOL II will start
          printing the file in the background.

          PLEASE NOTE:  the Monitor feature only works if you enable
          the AutoSpool and/or the AutoDespool features.  Please refer
          to the manual for an explanation of these features.

        - The AutoSpool and AutoDespool features now may be enabled in
          the SP2SSS.COM version of DISK SPOOL II.  Prior to this release,
          these features only functioned in the SP2 and SP2S verions of
          the product.

        - You may now select a DOS file from within the pop-up menu to be
          printed.  To do this, you get into the (F)iles (L)ist pop-up
          panel (which panel comes up by default as the first paned when
          you have the AutoDespooling feature enabled), press Cmd 6 in order
          to designate a new scan directory, and then select a file for
          printing by keying a 6 next to it.

        - The algorithms used by the SP2PRT command, and by the process
          described just above regarding selecting a file for printing
          within the (F)iles (L)ist panel, have been enhanced.  Now,
          if AutoSpooling is enabled, these two functions take less than
          a second to complete ... no matter how large the print file
          being spooled.

          Prior to this release, these operations would append the contents
          of the file being printed to the end of the Spool File.  In addition
          to being slow, a second inconvenience of this method was the wasted
          disk space involved in making a duplication of an existing file.

          As of this release, DISK SPOOL II now merely creates a "pointer"
          file containing only 66 bytes.  The Despooler recognizes this file
          as a pointer file rather than a file that contains the actual data
          itself, and knows to actually print from the file being pointed to.
          Consequently, the initial process takes a fraction of a second, and
          involves only a very small amount of disk space.

        - An advanced programming interface has been incorporated into
          DISK SPOOL II.  With these software hooks, a programmer can
          virtually control all pertinant aspects of DISK SPOOL II from
          within his or her own program.  Refer to file SP2INTFC.DOC for
          a description of interface protocols.

        - You now have the ability to designate that a specified byte stream
          be appended automatically by DISK SPOOL II at the end of every
          document.

        - You may now specify optionally that printing stop after each
          document.

        - DISK SPOOL II now pops up over graphical displays.

        - A new facility called LOG has been created.  With this feature, you
          instruct DISK SPOOL II to maintain a file called SP2.LOG of
          despooling activity.  This feature is useful when you need to bill
          a client for the amount of printing or plotting you have done on
          his or her behalf.
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Dear ASP-approved Vendor:

Here is the latest version of DISK SPOOL II for you to distribute.  Please
include all files on this diskette except, of course, this VENDOR.DOC file.

You may have a problem in this regard:  the newly created INSTALL program
takes a whopping 184k!  So, you're going to find that the files that
make up my product won't fit on a single 360k diskette.  If you need to use
360k diskettes, and hence have to use two diskettes to distribute my product,
please put the files on the diskettes like this:


  Diskette 1

     INSTALL.BAT
     DSINSTL.EXE
     README.1ST  (Note: you don't have to include this file.  It simply
                  tells the user how begin.  You'll probably surplace
                  this with your own README file.)

   Diskette 2

     DS2INSHP.HLP
     DS2.ZIP
     PKUNZIP.EXE

Thank you very much for your support.

Sincerely,



Mike Samuels

===============================================================================

Program Name:      DISK SPOOL II
Version:           4.05

Company:           Budget Software Company
                   P.O. Box 621534
                   Littleton CO 80162-1534
                   (303) 932-1705
Author:            Mike Samuels
CompuServe:        70033,643

Description:       Sets up a print spooling environment where printed output
                   is spooled to disk, rather than to memory.

Hardware:          IBM PC, XT, AT, PS/2, or compatible
Software:          DOS 2.0, or later

Features added
since prior (2.05)
release:           -- Network support.
                   -- Expanded (EMS) and Extended (HMA) support.
                   -- Device driver model supported.
                   -- Full Windows 3.x support.
                   -- AutoCad support.
                   -- Popup menu supports VGA graphics applications.
                   -- A sophisticated INSTALL program.

Features:          -- Saves you time by printing in the background.
                   -- Works with virtually all applications; no modifications
                      necessary.
                   -- Pop-up menu obtainable from within almost any application
                      controls starting and stopping spooling, starting and
                      stopping printing, displaying the contents of the spool
                      file or files, changing printing ports, and much more.
                   -- Can be set up to spool data being sent to COM1, COM2,
                      LPT1, or LPT2.
                   -- Can print the contents of the spool file to COM1, COM2,
                      LPT1, or LPT2.
                   -- Can re-direct printed output to a device driver, to a
                      disk file, or to BIOS.  Thus, it works in conjunction
                      with virtually any other printer enhancement software.
                   -- Can be configured to create different spool files for
                      each document.
                   -- Spool file is a DOS file, and therefore can be loaded
                      into a word processor, or other program.
                   -- Only as much disk file space used as is needed to
                      contain the spooled data.  Spool file grows dynamically.
                   -- Supports spool file attributes such as number of copies,
                      output port, whether or not to save file after printing,
                      etc.
                   -- Has the ability to monitor the COM ports for incoming
                      data, and spool the data to disk; all in the background.
                   -- Very fast printing.
                   -- Defined hooks into software functions enables programmers
                      to control the functions from within their own program.
                   -- Ability to load virtually entirely in Extended memory.
                   -- Ability to dynamically use Expanded memory.
                   -- Networking facilities.
                   -- Special feature that allows user to designate a directory
                      and file "skeleton" so that any file that appears in
                      that directory, and fits the skeleton will immediately
                      be enqueued for background printing.  This is like an
                      automatic PRINT.COM command.


Registration:      $44.  Upon registering, you receive:

                         -- The latest version of the software.
                         -- A printed user's manual.
                         -- Free unlimited tech support.
                         -- Notification of new releases, and upgrade discounts.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3217

     Volume in drive A has no label
     Directory of A:\

    DS2INSHP HLP     24116   8-09-92   7:57p
    DS2      ZIP    150894   8-09-92   8:25p
    PKUNZIP  EXE     22022  10-01-89   1:02a
    VENDOR   DOC      4753   8-09-92  11:31p
            4 file(s)     201785 bytes
                          118784 bytes free
