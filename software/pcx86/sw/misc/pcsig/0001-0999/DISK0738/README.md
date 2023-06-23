---
layout: page
title: "PC-SIG Diskette Library (Disk #738)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0738/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0738"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EASYMENU 1 OF 3 (ALSO 739, 740)"

    EASYMENU is a simple menu system with a few extra features that make
    your PC easier to use.  You record the commands you use to
    start an application, then let EASYMENU remember for you.  You can run
    any program at a keystroke or by clicking a mouse button.  It saves you
    time and keystrokes when you run your other computer programs, and lets
    you view useful notes and comments prior to running a program.  If you
    are new to computers, EASYMENU tells you about your computer hardware,
    amount of memory, number of access ports for printers and modems, the
    version of DOS you are using, and other useful information.  If you are
    more experienced, you might like to know that EASYMENU can run up to
    nine programs per menu, and that you can use batch files from within
    EASYMENU.
    File Descriptions:
    
    ASK      COM  Part of installation.
    AUTOEXEC NEW  Part of set-up program.
    AUTOEXEC ADD  Part of set-up program.
    COMM     MH   Help file.
    COMM     M    Menu file.
    CAPSON   COM  Turns caps lock on.
    CAPSOFF  COM  Turns caps lock off.
    DISK     M    Menu file.
    DEFAULT  MHH  Default help file.
    DATABASE MH   Help file.
    DATABASE M    Menu file.
    COPYFILE BAT  Batch file to copy files.
    CONTROL  MHH  Customizing help.
    CONTROL  EXE  Utility file.
    CONFIG   NEW  Part of set-up program.
    EASYMENU BAT  EASYMENU program start.
    EDIT     MHH  Menu editing help.
    EASYMENU TXT  EASYMENU documentation.
    NOBOOT   COM  Utility program.
    MAIN     M    Main menu file.
    INVOICE  TXT  Order form text file.
    INSTALL  BAT  Installation start.
    INFO     MHH  System information help.
    EDITHELP COM  Utility program.
    EDITHELP 000  Data file.
    EDITERR  MSG  Error message data file.
    YESBOOT  COM  Utility file.
    SWAPDIR  EXE  Utility file.
    SETUP    BAT  Part of installation.
    SAMPLE   M    Sample menu.
    READ     ME   Latest information.
    PRTSCON  COM  Turns printscreen on.
    NUMON    COM  Turns numlock on.
    NUMOFF   COM  Turns numlock off.
    PRTSCOFF COM  Turns printscreen off.
    PRINTER  MHH  Printer control help.
    PASSWORD EXE  Password program.
    OPTIONS  EXE  Control program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EASYMENU.TXT

{% raw %}
```



                              Program Reference Manual
          +----------+ (tm)
          | EasyMenu | PUBLISHING
          +----------+ ____________________________________________________
                                                               P.O. Box 346
                                                       Perrysburg, OH 43551
                                                             (419) 666-7103
          
          Version 2.0     ____________________________________     12:00 pm
           1 Jan 1988     ____________________________________       Friday
          
                          * EASY Menu *************************************
                          * 1 -                                           *
                          * 2 -                                           *
                          * 3 + A Multiple Menu System                    *
                          * 4 -                                           *
                          * 5 + For ALL Hard Disks                        *
                          * 6 -                                           *
                          * 7 + Keyboard or Mouse Use                     *
                          * 8 -                                           *
                          * 9 + PC, XT, AT & PS/2 Models                  *
                          *                                               *
                          *************************************************
          
          * PgDn PgUp *****************************************************
          *                                                               *
          *                                                               *
          *                                                               *
          *                                                               *
          *       FAST Setup    POWERFUL Features    UNLIMITED Menus      *
          *                                                               *
          *                                                               *
          *                                                               *
          * EASY.MH *******************************************************
          Blank  Control  Dos  Edit  Help  Info     Print  Quit  Swap  Time
          
          
          "... very impressed ... would allow the non-computer literate
          customer to begin computing much sooner ..."
               - A. Miller, Felban Computer.  NY
          
          "...works perfectly.  Thank you for the prompt action."
               - F. Quarles, Vice President - Information Services
               Mellon Financial Services.  IL
          
          "...well written and useful."
               - E. Hammer III, President, Statimate Systems, Inc.  MI
          
          "...easy to use and just what I've been looking for."
               - S. Burns, Owner, B & K Haircare Center/Supplies.  CA
          
          "Looks great!"
               - B. Donovan, Donovan Enterprises.  CA
          
          
                     COMPUSERVE: 76576,470    THE SOURCE: BEK548



          Copyright (C) 1986-88, EasyMenu Publishing                 Page 1


                              Program Reference Manual
          
          "CHEAT SHEET"
          
          
          SETUP -        put diskette in drive A:
                         type A: and press RETURN
                         type INSTALL and press RETURN
          
          START -        type C: and press RETURN
                         type MENU and press RETURN
          
          EDIT -         highlight selection with SPACEBAR
                         press E to EDIT
                         Type DOS commands
          
          * MAIN Menu # 1 ***********
          * TITLE >Word Processing  *   type a description
          * MENU/C>CD \WP           *   DOS PROMPT command(s)
          *      C>WP               *    "   "      "
          ***************************
          
          * MAIN Menu # 2 ***********
          * TITLE >Disk Utilities   *   type a description
          * MENU/C>MENU DISK        *   call/create a MENU
          ***************************
          
               REM disables  menu title.  * - NOT AVAILABLE  shows on menu.
               Item runs only as QUIT option.
               
               Call any menu from any other menu, anytime.
               
               PATH is reset after run.
               PATH+\pathname adds \pathname to current PATH.
          
          FILES - for backup         BREAKDOWN:
                                     Menus        = *.M
          ALL FILES = *.M?           Helps        = *.MH
                                     Config       = *.MU
                                     Default Help = DEFAULT.MHH
          
          CONTROLS - remove bottom-line items (EDIT, DOS, QUIT, etc.).
          
          INFO     - edit AUTOEXEC.BAT and CONFIG.SYS
          
          PRINT    - make RESET = TRUE to "refresh" printer each menu run.
                     Use MODE command if your printer is other than LPT1
          
          SWAP     - re-arrange menu items.
          
          NOTES    - Stop CTRL-ALT-DEL, call NOBOOT from AUTOEXEC.BAT
                     Make Blank-Screen=FALSE.  Clock displays after 3 min.
          
          see AUTOEXEC & AUTORUN page for STARTUP and QUIT functions





          Copyright (C) 1986-88, EasyMenu Publishing                 Page 2


                              Program Reference Manual
          
          TABLE OF CONTENTS / INDEX
          
          
          "CHEAT SHEET"                                              2
          TABLE OF CONTENTS / INDEX                                  3
          License & Warranty                                         4
              LICENSE, COPYRIGHT & CREDITS                           4
              WARRANTY                                               5
          Grand Tour                                                 6
              OVERVIEW  -  features / Introduction                   6
              AUTOEXEC  -  start-up options                          7
              AUTORUN   -  program "main" & "quit" menus             8
              CONTROL   -  adjust EasyMenu operation                 9
              CONTROL   -  for supervisors.                         10
              HELP      -  online text file for any menu            11
              INFO      -  hardware info, edit AUTOEXEC & CONFIG    12
              PASSWORD  -  menu or DOS prompt                       13
              PRINTER   -  keep printer fresh                       14
              REBOOT    -  from a menu                              15
              UTILITIES -  for the Keyboard                         16
          Training Exercises                                        17
              GETTING STARTED         - basic operation, editing    17
              QUIT & MAIN MENUS       - "main" & "quit" menus       20
              CUSTOMIZING             - EasyMenu and DOS            22
          
          
          
          
               NOTE:   Utility programs  were  installed  in  your  ROOT  \
               directory.   That way,  they are  available when you press D
               for DOS,  or run  a menu.  YOU MAY DELETE THEM, OR MOVE THEM
               TO A PATHED DIRECTORY.

























          Copyright (C) 1986-88, EasyMenu Publishing                 Page 3


                              Program Reference Manual
          
          LICENSE, COPYRIGHT & CREDITS
          
          Paying the  License Fee  or retail  purchase entitles  you to use
          this software on one (1) computer at a time.  Should you use this
          software on  more  than  one  (1)  computer,  you  MUST  pay  for
          additional licenses.  Order by check, MasterCard or Visa.
          
          
          ARMED FORCES LICENSE
          
          The Armed  Forces of  the United  States of  America  are  hereby
          granted a  license to  use EasyMenu  (tm) without  payment of the
          License Fee.  Point of Contact for current version:
          
               DoD Microcomputing User Group
               U.S. Navy Regional Data Automation Center (NARDAC)
               Code 30
               Norfolk,  VA 23511
          
          
          COPYRIGHT
          
          This software  is protected  by both  United States Copyright Law
          and International  Treaty provisions.   All  versions of EasyMenu
          are not  public domain  software, nor  are  they  free  software.
          EasyMenu is  copyright (C)  1986-88 by  EasyMenu Publishing.   No
          user may modify EasyMenu in any way, including but not limited to
          decompiling, disassembling  or otherwise  reverse engineering the
          program.
          
          Use of  non-registered, non-licensed  copies of  EasyMenu by  any
          person,  business,  corporation,  governmental  agency  or  other
          entity institution is strictly forbidden.
          
          
          ACKNOWLEDGEMENTS / CREDITS
          
          Thanks to Stan Seevers for assistance in testing and  suggestions
          for  improvements,  to  Davidia  Hebert  for  proof-reading  this
          manual, both of Master Chemical Corporation, and also Manuel Mayo
          of MJM Custom Programming, for testing and feedback.
          
          CONTROL ON/OFF  feature was  requested by  F. Quarles,  of Mellon
          Financial Services, IN.
          
          MENU EDITOR  feature of  F1-insert and F2-delete was suggested by
          E. "Tack" Hammer of Statimate Systems, Inc. MI.
          
          CHEAT SHEET  was suggested  by Professor  Robert Byler of Bowling
          Green University, OH.







          Copyright (C) 1986-88, EasyMenu Publishing                 Page 4


                                 License & Warranty
          
          WARRANTY
          
          With respect to the physical diskette and physical documentation,
          EasyMenu Publishing  ("EasyMenu") warrants the same to be free of
          defects in materials and workmanship for a period of 60 days from
          the date  of purchase.   In  the event of notification within the
          warranty period  of defects  in material or workmanship, EasyMenu
          will replace the defective diskette or documentation.  The remedy
          for breach  of this  warranty shall be limited to replacement and
          shall not  encompass any other damages, including but not limited
          to loss  of profit,  special, incidental, consequential, or other
          similar claims.
          
          EasyMenu Publishing  specifically disclaims all other warranties,
          expressed or  implied, including  but  not  limited  to,  implied
          warranties  of  merchantability  and  fitness  for  a  particular
          purpose  with   respect  to   defects   in   the   diskette   and
          documentation,  and   the  program  license  granted  herein,  in
          particular, and without limiting operation of the program license
          with respect  to any particular application, use, or purpose.  In
          no event  shall EasyMenu  be liable for any loss of profit or any
          other commercial  damage, including  but not  limited to special,
          incidental, consequential or other damages.
          
          
          GOVERNING LAW
          
          This Statement  shall be  construed, interpreted  and governed by
          the laws of the state of Ohio.




























          Copyright (C) 1986-88, EasyMenu Publishing                 Page 5


                                 License & Warranty
          
          OVERVIEW  -  features / Introduction
          
          
          In addition to the MENU System, EasyMenu offers:
          
          
               AUTOEXEC Function - run any menu item.
               
               AUTORUN System - Program Quit, set "MAIN" menu.
          
               CONTROL System - Adjust DOS & EasyMenu operation.
          
               HELP System - to hold program notes.
          
               INFO System - See hardware & DOS setup
          
               PASSWORD UTILITY - Limit access to programs.
          
               PRINTER System - Refresh printer each run.
          
               REBOOT THE PC - Reboot from a menu.
          
               UTILITY  PROGRAMS   -  Set   CAPS-LOCK  &  NUM-LOCK  status,
               disable/enable CTRL-ALT-DEL reboot.
          
          
          INTRODUCTION
          
          EasyMenu has  features you can "grow" into.  You need not use ALL
          of them at once, however!  First, edit menus to run your existing
          software.   Try the  extra features  after you're all set up.  Be
          sure to read the HELP information.
          
          Should you desire changes, do send in your suggestions.
          
          Sincerely,
          
          
          
          Johnathan Jay Stein

















          Copyright (C) 1986-88, EasyMenu Publishing                 Page 6


                                     Grand Tour
          
          AUTOEXEC  -  start-up options
          
          
          The file  AUTOEXEC.BAT will run commands for you at boot-up time.
          Edit it from the INFO menu.
          
          
          
          AUTOEXEC A MENU TITLE:
          
          Run any  MENU item  at boot-up.   Add  MENU name  and TITLE  # to
          AUTOEXEC.BAT file.
          
          Syntax:   CD \EASYMENU
                    EASYMENU menuname item#
          
          Example:  EASYMENU UTILITY 4   runs TITLE #4 on the UTILITY MENU
                    EASYMENU MAIN 8      runs TITLE #8 on the MAIN MENU
                    EASYMENU PROCOMM 9   runs TITLE #9 on the PROCOMM MENU
          
          You will return to EasyMenu after your program is finished.
          
          
          
          START-UP OPTION:  Large Time Display
          
          To activate the Large Time Display at bootup, the last 2 lines of
          AUTOEXEC.BAT should read:
          
               CD \EASYMENU
               EASYMENU TIMEDISPLAY    (timedisplay is 1 word)


























          Copyright (C) 1986-88, EasyMenu Publishing                 Page 7


                                     Grand Tour
          
          AUTORUN   -  program "main" & "quit" menus
          
          
          EasyMenu                                                   Friday
           1 Jan 1988                                              12:00 pm
          * CONTROLS ********************* AUTORUN ************************
          *                              *  MAIN MENU       : MAIN        *
          *                              *  QUIT MENU       : UTILITY     *
          *                              *  RUN QUIT TITLE #: 9           *
          *                              *  SUPPORT LICENSE#:             *
          *                              *                                *
          *                              *                                *
          *                              *                                *
          *                              *                                *
          *                              *                                *
          *                              *                                *
          *****************************************************************
          * PgDn PgUp *****************************************************
          *                                                               *
          *                                                               *
          *                                                               *
          *                                                               *
          *    Type C>CONTROL at the DOS prompt, to freeze options.       *
          *                                                               *
          *                                                               *
          *                                                               *
          *****************************************************************
          AutoRun      Help      Reset-ALL      Top-EDIT       User-INSTALL
          \                      \              /              /
           \______________________\            /______________/
                                   \__________/
                                         |
                                         only if Edit/Swap Allowed = TRUE
          
          Pressing  "A" to:
          
          
          PROGRAM THE "MAIN" MENU -
          
               type the name of the menu to be used as the "MAIN" menu.
          
          
          PROGRAM THE "QUIT" MENU -
          
               select a menu job to run when the  Q  key is pressed.












          Copyright (C) 1986-88, EasyMenu Publishing                 Page 8


                                     Grand Tour
          
          CONTROL   -  adjust EasyMenu operation
          
          
          EasyMenu                                                   Friday
           1 Jan 1988                                              12:00 pm
          * CONTROLS ********************* AUTORUN ************************
          * Blank Screen On     : TRUE   *                                *
          * Dos Exit Allowed    : TRUE   *                                *
          * Edit/Swap Allowed   : TRUE   *                                *
          * Mouse Active        : TRUE   *                                *
          * Immediate Response  : FALSE  *                                *
          * Keep Colors         : TRUE   *                                *
          * Original PATH Reset : TRUE   *                                *
          * Print Screen Active : FALSE  *                                *
          * Quit Allowed        : TRUE   *                                *
          * Verify Disk Writes  : TRUE   *                                *
          *****************************************************************
          * PgDn PgUp *****************************************************
          *                                                               *
          *                                                               *
          *                                                               *
          *                                                               *
          *  Type  C>CONTROL at the DOS prompt, to freeze options.        *
          *                                                               *
          *                                                               *
          *                                                               *
          *****************************************************************
          AutoRun      Help      Reset-ALL      Top-EDIT       User-INSTALL
          
          
          CONTROLS:
          
          Change TRUE/FALSE  by pressing  the 1st  letter of  an item.  The
          Verify and  PrtSc options  affect DOS  - see  your DOS manual for
          definitions of VERIFY ON/OFF and the SHIFT-PRTSC functions.
          
          
          BOTTOM-LINE:
          
          Pressing  R  for Reset-all changes all values to TRUE.
          
          
          TOP-EDIT:
          
          Pressing   T   for Top-edit  to customize  the top 2 lines of the
          screen - they are automatically centered.
          
          
          USER-INSTALL:
          
          Runs the  INSTALL process.  Set up EasyMenu in another directory,
          for use with DesQView, Windows, etc.





          Copyright (C) 1986-88, EasyMenu Publishing                 Page 9


                                     Grand Tour
          
          CONTROL   -  for supervisors.
          
          
          The CONTROL.EXE  Utility Program  allows you, as a supervisor, to
          restrict access to the built-in CONTROL menu.
          
          Syntax:    CONTROL option
          
          Example:  CONTROL on        EasyMenu (tm) displays a CONTROL      
                                      menu.
          Example:  CONTROL off       EasyMenu (tm) will NOT display the    
                                      CONTROL menu.
          Example:  CONTROL display   EasyMenu (tm) displays User File.
          
          CONTROL.EXE must be on the same DRIVE as EasyMenu (tm).
          
          PURPOSE:  let supervisor control access to EasyMenu (tm)
          Controls.
          
          To run from a Menu, with Password protection, use the
          PASSWORD.EXE Utility:
          
               Example:  TITLE >Turn on CONTROL menu
                              C>PASSWORD
                              C>CONTROL ON
                              C>
          
          press any key to continue





























          Copyright (C) 1986-88, EasyMenu Publishing                 Page 10


                                     Grand Tour
          
          HELP      -  online text file for any menu
          
          
          * PgDn PgUp *****************************************************
          *                                                               *
          *                                                               *
          *                                                               *
          * 8 - 100 line display; for business cards, notes, etc.         *
          *                                                               *
          *                                                               *
          *                                                               *
          *                                                               *
          * JOHN.MH   F10 to Edit *****************************************
                       |
                       only if Edit/Swap Allowed = TRUE, in CONTROLS.
          
          
          
          Make notes of commands, program syntax, etc.
          
          
          One help file per menu.
          
               EX:  MAIN.M = menu, MAIN.MH = help
          
          
          DEFAULT.MHH used if no file exists.
          
               EX:  MAIN.M = menu, DEFAULT.MHH = help
          
          
                *******
          Press * F10 * to edit the current Menu Help File.
                *******























          Copyright (C) 1986-88, EasyMenu Publishing                 Page 11


                                     Grand Tour
          
          INFO      -  hardware info, edit AUTOEXEC & CONFIG
          
          
          EasyMenu     Path=C:\DOS                                   Friday
           1 Jan 1988   Dir=C:\EASYMENU                            12:00 pm
          * SYSTEM:  11 Menus  2 HELP files ***** C:\CONFIG.SYS ***********
          * Model    XT          DISKS          * buffers = 15            *
          * DOS Ver  2.10        Logical    3   * files = 40              *
          * Video    COLOR       Floppy(s)  1   * BREAK = OFF             *
          * Memory   640 K       Current    C:  * device = ansi.sys       *
          *           64 K       ComSpec    C:  * device = mouse.sys      *
          * 87 Chip  FALSE       Path(s)    1   *                         *
          * DMA Chip FALSE                      *                         *
          * PORTS    1 Parallel  Free       7 % *                         *
          *          2 Serial    Total 21225472 *                         *
          *          0 Game      Left   1556480 *                         *
          *****************************************************************
          * PgDn PgUp *****************************************************
          * ECHO OFF                                                      *
          * CLS                                                           *
          * PATH=C:\DOS                                                   *
          * GETCLOCK                                                      *
          * PROMPT=$p$g                                                   *
          * CD \EASYMENU                                                  *
          * EASYMENU TIMEDISPLAY                                          *
          *                                                               *
          * C:\AUTOEXEC.BAT   PROMPT=$p$g *********************************
          Autoexec.BAT   Config.SYS    Help   1-Autoexec.NEW   2-Config.NEW
          \              \                   /                /
           \______________\                 /________________/
                           \_______________/
                                   |
                                   only if Edit/Swap Allowed = TRUE
          
          
          
          Press "I"  from any MENU.
          
          
          Edit the AUTOEXEC.* and CONFIG.* files from here.
          
          
          *.NEW files - apply ONLY to special options.  See REBOOT page.














          Copyright (C) 1986-88, EasyMenu Publishing                 Page 12


                                     Grand Tour
          
          PASSWORD  -  menu or DOS prompt
          
          
          PASSWORD may  be called  from the  DOS prompt,  Menu System  or a
          batch file,  such as AUTOEXEC.BAT.  You may use a COMMON password
          or SPECIFIC passwords.
          
          Use this feature to:
          
               1 - Limit access to certain programs or menu items.
               
               2 - Lock your workstation when you leave it.
          
          
          Password length:  30 characters, including control characters.
          
          If you  fail to  enter the correct password after three attempts,
          then:
               
               1 - An alarm will sound.
               2 - The message "Access DENIED" will display.
               3 -  The PC  keyboard will  be LOCKED and the system must be
               powered down and rebooted.
          
          
          PAGE 1 OF 2                Press any key to continue.
          
          COMMON password.  Your password is saved.  Each time you give the
          password, you  have the  option of  changing or removing password
          protection.
               
               Example:  TITLE >Lotus 123
                              C>PASSWORD
                              C>CD \LOTUS
                              C>123
          
          SPECIFIC PASSWORD.   Give a password to be used with the PASSWORD
          command.
               
               EXAMPLE:  TITLE >Password / Lock station for coffee break.
                              C>PASSWORD IBM
          
          You may  also use the TILDE ~ character as a simple code routine,
          which will shift each letter by one.  The password is still IBM
          
               EXAMPLE:  TITLE >Password / Lock station for coffee break.
                              C>PASSWORD ~JCN
          
          PAGE 2 OF 2                Press any key to continue.








          Copyright (C) 1986-88, EasyMenu Publishing                 Page 13


                                     Grand Tour
          
          PRINTER   -  keep printer fresh
          
          
          EasyMenu                                                   Friday
           1 Jan 1988                                              12:00 pm
          * PRINTER CONTROL ****** CONTROL CODE SEQUENCE ******************
          * RESET       : TRUE   *  27 64                                 *
          * Condensed   : FALSE  *  15                                    *
          * DoubleStrike: FALSE  *  27 71                                 *
          * 1-Elite     : FALSE  *  27 77                                 *
          * Emphasized  : FALSE  *  27 69                                 *
          * Italics     : FALSE  *  27 52                                 *
          * 2-Pica      : FALSE  *  27 80                                 *
          * Proportional: FALSE  *  27 112 49                             *
          * Underline   : FALSE  *  27 45 49                              *
          * Wide        : FALSE  *  27 87 49                              *
          *****************************************************************
          * PgDn PgUp *****************************************************
          *                                                               *
          *                                                               *
          *                                                               *
          *                                                               *
          * TRUE codes are sent to the printer EACH TIME A MENU JOB RUNS  *
          *                                                               *
          *                                                               *
          *                                                               *
          *****************************************************************
          All-FALSE   FormFeed   HELP   LineFeed  New-Codes  Standard-Codes
          \                                      /          /
           \____________________________________/__________/
                              |
                              only if Edit/Swap Allowed = TRUE
          
          
          
          Allows the printer to be fresh for each program.
          
          
          Press  N  to change the current codes.
          
          Press  S  to restore standard Epson/IBM printer codes.
          
          
          FormFeed, Help, and LineFeed are ALWAYS available.













          Copyright (C) 1986-88, EasyMenu Publishing                 Page 14


                                     Grand Tour
          
          REBOOT    -  from a menu
          
          
          
          Commands to REBOOT your system, from a Menu or the DOS prompt.
          
          
               C>EASYMENU LOCKUP   will lock  the keyboard  and  display  a
               message telling the user to power down.  Does not reboot.
               
               
               C>EASYMENU REBOOT   will simply  reboot the system.  This is
               identical to a power-on start or pressing CTRL-ALT-DEL.
               
               
               C>EASYMENU AUTOEXEC will reboot your system and use the file
               AUTOEXEC.NEW  in place of the  AUTOEXEC.BAT  file.
               
               
               C>EASYMENU CONFIG   will reboot your system and use the file
               CONFIG.NEW  in place of the  CONFIG.SYS  file.
               
               
               C>EASYMENU AUTOEXEC CONFIG  will do both of the above.
          
          
          
          Edit AUTOEXEC.NEW  and  CONFIG.NEW  from the INFO menu.
          
          If these  files do  not  exist,  the  original  AUTOEXEC.BAT  and
          CONFIG.SYS files will be used.


























          Copyright (C) 1986-88, EasyMenu Publishing                 Page 15


                                     Grand Tour
          
          UTILITIES -  for the Keyboard
          
          
          
          These short  programs allow  you to  control the  keyboard from a
          menu or  batch file.   Keyboards  with LED lights on the CapsLock
          and NumLock keys sometimes get out of sync with the true status.
          
          
          NUMLOCK
          
               NUMON.COM and NUMOFF.COM
               - "flips" the NumLck key on or off.
          
          CAPSLOCK
          
               CAPSON.COM and CAPSOFF.COM
               - "flips" the CapsLock key on or off.
          
          
          SHIFT-PRTSC
          
               PRTSCOFF.COM and PRTSCON.COM
               - disable/enable the Shift-PrtSc function.
          
          
          CTRL-ALT-DEL
          
               NOBOOT.COM and YESBOOT.COM
               - disable/enable CTRL-ALT-DEL reboot.
               
          
          Run NOBOOT from AUTOEXEC.BAT, before loading SideKick.
          YESBOOT will restore the CTRL-ALT-DEL function.
          
          Use EASYMENU REBOOT functions, even if NOBOOT is loaded.
          
          
          NOTES:   These files  were INSTALLed in the ROOT directory - that
          way, they  are available  when you press D for DOS.  YOU MAY MOVE
          THEM (to a PATHed sub-directory) IF YOU WISH!
















          Copyright (C) 1986-88, EasyMenu Publishing                 Page 16


                                     Grand Tour
          
          GETTING STARTED         - basic operation, editing
          
          
                          * MAIN Menu *************************************
                          *F1 -                                           *
                          * 2 + Sample Menu System                        *
                          * 3 -                                           *
                          * 4 -                                           *
                          * 5 -                                           *
                          * 6 -                                           *
                          * 7 -                                           *
                          * 8 -                                           *
                          * 9 -                                           *
                          *                                               *
                          *************************************************
          Blank  Control  Dos *EDIT* Help  Info     Print  Quit  Swap  Time
                              ******
          
          EXERCISE #1:  Setting date & time from a MENU
          
              press the keys:  1  E
              type SET DATE AND TIME and press TAB
              type DATE and press TAB
              type TIME and press RETURN or ENTER
          
                             * MAIN Menu # 1 ******************************
                             * TITLE >Set Date & Time                     *
          ******************** MENU/C>DATE                                *
          *                 **      C>TIME                                *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          ********************      C>                                    *
                             *      C>                                    *
                             **********************************************
          Undo-ESC Cancel-EscEsc -> <- | | Del BkSp Home End  RETURN-Accept
          
                          * MAIN Menu *************************************
                          *F1 - Set Date & Time                           *
                          * 2 + Sample Menu System                        *
                          * 3 -                                           *
                          * 4 -                                           *
                          * 5 -                                           *
                          * 6 -                                           *
                          * 7 -                                           *
                          * 8 -                                           *
                          * 9 -                                           *
                          *                                               *
                          *************************************************
          Blank  Control  Dos *EDIT* Help  Info     Print  Quit  Swap  Time
                              ******
          
           Press the RETURN, 1 or F1 key to run this MENU item.


          Copyright (C) 1986-88, EasyMenu Publishing                 Page 17


                                 Training Exercises
          
          EXERCISE #2:  Running a program - WORD
          
          
          Assumes:  1. WORD is in a directory called \WORD
                    2. You recall the last document for editing
          
              press the keys:  3  E
              type WORD PROCESSING and press TAB
              type CD \WORD and press TAB
              type WORD /L and press RETURN
          
                             * MAIN Menu # 3 ******************************
                             * TITLE >Word Processing                     *
          ******************** MENU/C>CD \WORD                            *
          *                 **      C>WORD /L                             *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          ********************      C>                                    *
                             *      C>                                    *
                             **********************************************
          Undo-ESC Cancel-EscEsc -> <- | | Del BkSp Home End  RETURN-Accept
          
          
                          * MAIN Menu *************************************
                          * 1 - Set Date & Time                           *
                          * 2 + Sample Menu System                        *
                          *F3 - Word Processing                           *
                          * 4 -                                           *
                          * 5 -                                           *
                          * 6 -                                           *
                          * 7 -                                           *
                          * 8 -                                           *
                          * 9 -                                           *
                          *                                               *
                          *************************************************
          Blank  Control  Dos *EDIT* Help  Info     Print  Quit  Swap  Time
                              ******
          
          
          Press the RETURN, 3 or F3 key to run this MENU item.














          Copyright (C) 1986-88, EasyMenu Publishing                 Page 18


                                 Training Exercises
          
          EXERCISE #3  Create/call another MENU
          
              press the keys:  5  E
              type UTILITY AND OTHER PROGRAMS and press TAB
              type MENU UTILITY and press RETURN
          
                             * MAIN Menu # 5 ******************************
                             * TITLE >Utility and Other Programs          *
          ******************** MENU/C>MENU UTILITY                        *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          *                 **      C>                                    *
          ********************      C>                                    *
                             *      C>                                    *
                             **********************************************
          Undo-ESC Cancel-EscEsc -> <- | | Del BkSp Home End  RETURN-Accept
          
                          * MAIN Menu *************************************
                          * 1 - Set Date & Time                           *
                          * 2 + Sample Menu System                        *
                          * 3 - Word Processing                           *
                          * 4 -                                           *
                          *F5 + Utility and Other Programs                *
                          * 6 -                                           *
                          * 7 -                                           *
                          * 8 -                                           *
                          * 9 -                                           *
                          *                                               *
                          *************************************************
          Blank  Control  Dos  Edit  Help  Info     Print  Quit  Swap  Time
          
               The + symbol denotes a MENU.
               The - symbol denotes a PROGRAM.
          
          Press RETURN, 5 or F5 key.  The UTILITY menu is called/created.
          
                          * UTILITY Menu **********************************
          * Press ESC for * 1 -                                           *
          * MAIN          * 2 -                                           *
          *               * 3 -                                           *
          *               * 4 -                                           *
          *               * 5 -                                           *
          *               * 6 -                                           *
          *               * 7 -                                           *
          *               * 8 -                                           *
          *               * 9 -                                           *
          *****************                                               *
                          *************************************************
          Blank Control Dos Edit  Help  Info *MAIN* Print  Quit  Swap  Time
                                             ******
          
          Press the  M  key to bring the "main" menu up.


          Copyright (C) 1986-88, EasyMenu Publishing                 Page 19


                                 Training Exercises
          
          QUIT & MAIN MENUS       - "main" & "quit" menus
          
          
          EXERCISE #4   To run a program when  Q  is pressed.  Use for disk
          head parking,  end-of-day backup, etc.  For practice, we will use
          job #1 on the MAIN MENU, 1 - Set Date & Time.
          
          
              To run the program when you press Q to quit, do this:
          
              Press these keys:  C A TAB
              Where you see   QUIT MENU   type MAIN and press TAB
              Where you see   RUN QUIT #   type 1 and press RETURN
          
          
          ******************************** AUTORUN ************************
          *                              *  main menu       : main        *
          *                              *  QUIT MENU       : MAIN        *
          *                              *  RUN QUIT TITLE #: 1           *
          *                              *  support license#:             *
          *                              *                                *
          *****************************************************************
          Undo-ESC Cancel-EscEsc -> <- | | Del BkSp Home End  RETURN-Accept
          
          
          Press ESC, RETURN or SPACEBAR
          
          
                          * MAIN Menu *************************************
                          * 1 - Set Date & Time                           *
                          * 2 + Sample Menu System                        *
                          * 3 - Word Processing                           *
                          * 4 -                                           *
                          * 5 + Utility and Other Programs                *
                          * 6 -                                           *
                          * 7 -                                           *
                          * 8 -                                           *
                          * 9 -                                           *
                          *                                               *
                          *************************************************
          Blank  Control  Dos  Edit  Help  Info     Print *QUIT* Swap  Time
                                                          ******
          
          Press Q to quit EasyMenu.  Set Date & Time will run.













          Copyright (C) 1986-88, EasyMenu Publishing                 Page 20


                                 Training Exercises
          
          EXERCISE #5  Use an alternate MAIN MENU
          
          
               Press these keys:  C A
               Press the DEL key until the word MAIN is gone
               Where you see MAIN MENU type UTILITY and press RETURN
          
          ******************************** AUTORUN ************************
          *                              *  MAIN MENU       : UTILITY     *
          *                              *  quit menu       : main        *
          *                              *  run quit title #: 1           *
          *                              *  support license#:             *
          *                              *                                *
          *                              *                                *
          *****************************************************************
          Undo-ESC Cancel-EscEsc -> <- | | Del BkSp Home End  RETURN-Accept
          
          Press ESC, RETURN or SPACEBAR
          
                          * UTILITY Menu **********************************
                          * 1 -                                           *
                          * 2 -                                           *
                          * 3 -                                           *
                          * 4 -                                           *
                          * 5 -                                           *
                          * 6 -                                           *
                          * 7 -                                           *
                          * 8 -                                           *
                          * 9 -                                           *
                          *                                               *
                          *************************************************
          Blank *CONTROL* Dos  Edit  Help  Info     Print  Quit  Swap  Time
                *********
          
          The UTILITY menu is now the primary or "MAIN" menu.
          
          
          EXERCISE #6  To use the MENU named MAIN as the MAIN MENU
          
               Press these keys:  C A
               Press CTRL key and the Y key.
               Press RETURN
          
          ******************************** AUTORUN ************************
          *                              *  MAIN MENU       :             *
          *                              *  quit menu       : main        *
          *                              *  run quit title #: 1           *
          *                              *  support license#:             *
          *                              *                                *
          *                              *                                *
          *****************************************************************
          Undo-ESC Cancel-EscEsc -> <- | | Del BkSp Home End  RETURN-Accept
          
          Press ESC, RETURN or SPACEBAR.  MAIN is the default primary menu.



          Copyright (C) 1986-88, EasyMenu Publishing                 Page 21


                                 Training Exercises
          
          CUSTOMIZING             - EasyMenu and DOS
          
          
          Adjust PC-functions from the CONTROL menu.
          
          EXERCISE #7:  Turn off PRinT SCreen  (shift-PrtSc)
          
               Press the C key
               Press the P key
          
          * CONTROLS ******************************************************
          * Blank Screen On     : true   *                                *
          * Dos Exit Allowed    : true   *                                *
          * Edit/Swap Allowed   : true   *                                *
          * Mouse Active        : true   *                                *
          * Immediate Response  : true   *                                *
          * Keep Colors         : true   *                                *
          * Original Path Reset : true   *                                *
          * PRINT SCREEN ACTIVE : FALSE  *                                *
          * Quit Allowed        : true   *                                *
          * Verify Disk Writes  : true   *                                *
          *****************************************************************
          AutoRun      Help      Reset-ALL      Top-EDIT       User-INSTALL
          
          
          Print Screen Active should be FALSE.
          
          
          EXERCISE #8:   Automatic Reset/Refresh of Printer
          
          Force the printer to reset before and after each program run.
          
               Press the P key
               Press the R key
          
          * PRINTER CONTROL ***********************************************
          * RESET       : TRUE   *                                        *
          * Condensed   : false  *                                        *
          * DoubleStrike: false  *                                        *
          * 1-Elite     : false  *                                        *
          * Emphasized  : false  *                                        *
          * Italics     : false  *                                        *
          * 2-Pica      : false  *                                        *
          * Proportional: false  *                                        *
          * Underline   : false  *                                        *
          * Wide        : false  *                                        *
          *****************************************************************
          All-FALSE  FormFeed  Help=On  LineFeed  New-Codes  Standard-Codes
          
          
          RESET should be TRUE.  Press SPACEBAR, ESC or RETURN.






          Copyright (C) 1986-88, EasyMenu Publishing                 Page 22





            
```
{% endraw %}

## FILES738.TXT

{% raw %}
```
Disk No  738
Program Title: EASYMENU version 2.0  (disk 1 0f 3)
PC-SIG version 2
 
    EASYMENU is a, simple menu system, with a few extra features. It
makes your PC more convenient to use. You record the start-up
command sequence for all programs -- such as CD\directory,
PROGRAM-NAME/Option Switch, or BATCH file, then let EASYMENU remember for
you. You can run any program at a keystroke or by clicking a mouse button.
It saves you time and keystrokes when you run your other computer programs
and lets you view useful notes and comments prior to running a program. If
you are new to computers, EASYMENU tells you about your computer hardware,
the amount of memory, number of access ports for printers and modems, the
version of DOS you are using and other useful information. If you are a
more experienced computer user, you might like to know that EASYMENU can
run up to 9 programs per menu and that you can use batch files.
 
Usage: Menuing System
 
System Requirements: 128K memory and one disk drive.
 
How to Start: Type: INSTALL (press enter).
 
Suggested Registration: $49.95
 
File Descriptions:
 
ASK      COM  Part of installation.
AUTOEXEC ADD  Part of setup program.
AUTOEXEC NEW  Part of setup program.
CAPSOFF  COM  Turns caps lock off.
CAPSON   COM  Turns caps lock on.
COMM     M    Menu file.
COMM     MH   Help file.
CONFIG   NEW  Part of setup program.
CONTROL  EXE  Utility file.
CONTROL  MHH  Customizing help.
COPYFILE BAT  Batch file to copy files.
DATABASE M    Menu file.
DATABASE MH   Help file.
DEFAULT  MHH  Default help file.
DISK     M    Menu file.
EASYMENU BAT  Easymenu program start.
EASYMENU TXT  Easymenu documentation.
EDIT     MHH  Menu editing help.
EDITERR  MSG  Error message data file.
EDITHELP 000  Data file.
EDITHELP COM  Utility program.
INFO     MHH  System information help.
INSTALL  BAT  Installation start.
INVOICE  TXT  Order form text file.
MAIN     M    Main menu file.
NOBOOT   COM  Utility program.
NUMOFF   COM  Turns numlock off.
NUMON    COM  Turns numlock on.
OPTIONS  EXE  Control program.
PASSWORD EXE  Password program.
PRINTER  MHH  Printer control help.
PRTSCOFF COM  Turns printscreen off.
PRTSCON  COM  Turns printscreen on.
READ     ME   Latest information.
SAMPLE   M    Sample menu.
SETUP    BAT  Part of installation.
SWAPDIR  EXE  Utility file.
YESBOOT  COM  Utility file.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## INVOICE.TXT

{% raw %}
```






          +----------+ (tm)
          | EasyMenu | PUBLISHING
          +----------+ ____________________________________________________
                                                               P.O. Box 346
                                                       Perrysburg, OH 43551
                                                             (419) 666-7103
          
                                 CUSTOMER ORDER FORM
          
          
          
          ____ EasyMenu (TM) - Complete ............ @ $ 49.95 ea  $ ______
          
          
          ____ License - per computer .............. @ $ 24.95 ea  $ ______
          
          
          
                                                             Subtotal______
                                                                           
             (Ohio residents please add 6.0% sales tax)           Tax______
                                                                           
                                                                           
                                                             Total $ ______
          Payment by:
          ( ) Check   ( ) MasterCard   ( ) Visa
          
          Name _________________________________________Date ______________
          
          Company _________________________________________________________
          
          Address _________________________________________________________
          
          Address _________________________________________________________
          
          City ____________________________ State ____ Zip ________________
          
          Card # _______________________________ Exp Date _________________
          
          Signature of
          cardholder ______________________________________________________
          
          Phone (______)  ___________________  DISK  (  ) 5 1/4  (  ) 3 1/2
          
          
          
          ELECTRONIC MAIL ORDERS:  Send Card #, Exp. Date, Name & address.
                     |
                     |
                     +------------------------+
                     |                        |
                     COMPUSERVE: 76576,470    THE SOURCE: BEK548
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0738

     Volume in drive A has no label
     Directory of A:\

    ASK      COM       986   1-01-88
    AUTOEXEC ADD        43   1-01-88
    AUTOEXEC NEW        78   1-01-88
    CAPSOFF  COM        15   1-01-88
    CAPSON   COM        15   1-01-88
    COMM     M        4590   1-01-88
    COMM     MH       1862   1-01-88
    CONFIG   NEW        40   1-01-88
    CONTROL  EXE     22432   1-01-88
    CONTROL  MHH      3121   1-01-88
    COPYFILE BAT      7189   1-01-88
    DATABASE M        4590   1-01-88
    DATABASE MH       1491   1-01-88
    DEFAULT  MHH      2128   1-01-88
    DISK     M        4590   1-01-88
    EASYMENU BAT        58   1-01-88
    EASYMENU TXT     53149   1-01-88
    EDIT     MHH      2060   1-01-88
    EDITERR  MSG      1786   1-01-88
    EDITHELP 000     36352   1-01-88
    EDITHELP COM     49733   1-01-88
    FILES738 TXT      2522   1-18-88   3:17p
    INFO     MHH      2198   1-01-88
    INSTALL  BAT      9096   1-01-88
    INVOICE  TXT      2293   1-01-88
    MAIN     M        4590   1-01-88
    NOBOOT   COM        48   1-01-88
    NUMOFF   COM        15   1-01-88
    NUMON    COM        15   1-01-88
    OPTIONS  EXE     73120   1-01-88
    PASSWORD EXE     17248   1-01-88
    PRINTER  MHH      1238   1-01-88
    PRTSCOFF COM        12   1-01-88
    PRTSCON  COM        12   1-01-88
    READ     ME        996   1-01-88
    SAMPLE   M        4590   1-01-88
    SETUP    BAT      4552   1-01-88
    SWAPDIR  EXE      6656   1-01-88
    YESBOOT  COM        20   1-01-88
           39 file(s)     325529 bytes
                           11264 bytes free
