---
layout: page
title: "PC-SIG Diskette Library (Disk #1102)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1102/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1102"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE E88 TEXT EDITOR & NAMES"

    The E88 TEXT EDITOR (E88) is a powerful, fully-functional text and
    programming editor completely written in Assembly language.  It is both
    compact and extremely fast.
    
    Rather than using complicated keyboard commands such as those commonly
    used in other editors or wordprocessors, E88 primarily uses
    single-keystroke commands.  These make it more natural, logical, and
    easy to learn.  File control and set-up functions are handled in a
    menu-driven command window and informational prompts make operation
    easy.
    File Descriptions:
    
    -------- ---  E88 TEXT EDITOR.
    RUN-ME   BAT  Program start-up and print file.
    YN       COM  Public domain batch file supplement.
    YN       DOC  Instructions for using YN.COM.
    STARTUP  TXT  Instructions accessed by RUN-ME.BAT.
    COMPRESS CTL  Printer control codes for RUN-ME.BAT.
    CHANGES  TXT  Changes incorporated into latest program.
    E8M      EXE  Cloning/customizing file to produce E88.EXE.
    E88      PAT  Pattern file used by E8M.EXE.
    E88      DOC  Documentation.
    
    NAMES makes unusual names for use by writers, game players, and just
    for fun!
    
    The unusual names are created by a scheme similar to a random number
    generator.  You specify how many names you want made.
    Names are stored in user-designated ASCII files at the rate of four
    names per line.  Since many of the names can't be pronounced or are
    unusual spellings, you need to select usable names from
    those created.
    However, the program is easy, quick, and inexpensive.  Even if only a
    few names in a hundred are usable, the seconds it takes to make them
    might prove this program helpful for certain users.
    File Descriptions:
    
    -------- ---  NAMES.
    NAMES    EXE  Main program file.
    NAMES    DOC  Documentation (1 pg.).
    NAMES    TXT  File descriptions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ASP_NOTE.TXT

{% raw %}
```
                         ASP Ombudsman Statement

      This program is produced by a member of the Association of Shareware
 Professionals (ASP).  ASP wants to make sure that the shareware principle
 works for you.  If you are unable to resolve a shareware-related problem
 with an ASP member by contacting the member directly, ASP may be able to
 help.  The ASP Ombudsman can help you resolve a dispute or problem with an
 ASP member, but does not provide technical support for members' products.
 Please write to the ASP Ombudsman at P.O. Box 5786, Bellevue, Wa. 98006 or
 send a Compuserve message via easyplex to ASP Ombudsman 70007,3536

 Program author:                            ┌─────────┐              (tm)
 ───────────────────────              ┌─────┴───┐     │
 Emery Wooten                       ──│         │o    │──────────────────
 M.R.E. Software                      │   ┌─────┴╨──┐ │  Association of
 150 Jones St.                        │   │         │─┘  Shareware
 West Point, Ms.  39773               └───│    o    │    Professionals
 ───────────────────────            ──────│    ║    │────────────────────
 E88 Text Editor version 4.22             └────╨────┘    MEMBER
```
{% endraw %}

## CHANGES.TXT

{% raw %}
```
                             MEMO MEMO MEMO
To:....... E88 users
From:..... Emery Wooten / MRE Software
Subject:.. Changes and new features of E88 version 4.22

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
(1.)  A program has been designed and included with this ARCHIVE that will
      allow the user to create a truly personal and customized copy of E88.
      This program (E8M.EXE), will allow you to build in all of your start up
      default settings including keyboard commands, colors, and option
      switches.  We refer to it as The E88 Text Editor machine and hope that
      it will greatly enhance the appeal for our editor.

(2.)  Block operations are now fully supported.  The commands provided are;
      Delete, Move, Copy, Print, and Disk dump.  These commands were designed
      to be as fast and easy to use as possible and should help increase user
      productivity.

(3.)  Two search options have been added to the search routine.  A replace
      all, and a remain here (Stand) command are now provided.

(4.)  A merge command has been added.  This command will allow you to bring
      in a file from disk and append it onto the file being edited.

(5.)  Several new start-up switches (options) are provided and clue new
      features that they support.  They are:
      (R) Word wrapping.  Yes E88 now supports word wrapping.
      (H) High res. EGA mode.  E88 now supports EGA 43 lines/screen mode.
      (S) Silence.  Cut that annoying sound off!
      (E) End file mode.  Not new but changed.  The /E option now ends the
          ASCII file in a format that is perfect for .BAT and .SYS files.
          Using this option will prevent DOS from producing double C> prompts.
          This format has also been found compatible with many of the newer
          Microsoft products such as MASM 5.00.  This, as well as all other
          options, may be made the default with E8M.EXE

(6.)  Two function keys combinations have been put into service to provide
      limited printer control from the keyboard.  These keys will send a pre-
      defined user programmable string to the printer. The default settings
      for these strings will allow a form feed and a reset.

(7.)  Full IBM character set support is now provided.  The user is now
      allowed to enter any ASCII character using the [Alt] keyboard method.
      This is a powerful feature when used with care.

(8.)  E88 will now load and save files that contain spaces padding the end of
      the lines.  The editor will provide a visual guide so that the user can
      see the normally invisible spaces that exist there.  Many database and
      graphics files that previously could not be edited with E88 now can.
      The user may also create files that contain padded spaces.  This
      enhancement should make the program much more versatile.

(9.)  Delete/Insert line function speed increased by about 40%  Internal
      restructuring and coding in E88 to support the block operations has
      resulted in this benefit.  Users editing large files should notice the
      improvement.

(10.) End of line and end of file commands now position the cursor 1 space
      past the last character instead of on it.  We are listening to you.

(11.) Automatic tab compression sensing has been eliminated.  The editor no
      longer automatically switches into tab compression mode when the input
      file contains tab characters.


(12.) Right margin setting is now provided to work with word wrap.  This
      feature is great for preparing E-MAIL messages or other files in which
      the lines must be shorter than 80 characters.

(13.) Many small touches such as windowed messages reporting disk activity
      have also been added.  We have also tried to eliminate all of the
      small irritations reported by users in older versions.

(14.) You may now quit E88 from the initial screen.  Press [Enter] without
      a filename (null string) and you will return to DOS.

(15.) E88 now supports directory searching and display capability both from
      within the program and from the title screen.  Entering an asterisk in
      the filename will display the pathed directory for you at the title
      screen.  A dir may also be obtained from the command window and with a
      function key while in edit mode.

(16.) Thanks to user reports we have also enlarged our appendix containing
      information about using E88 with other programs.

(17.) Microsystems Research and Engineering has installed a BBS system to
      provide E88 user support.  The MRE Software support board is now
      on-line 24hrs a day.  Call us at (601) 494-8078   300/1200 N81.
      Your primary Sysop is Tom Ford.  I will also be there to field your
      questions, log your suggestions, and dodge any bullets fired in my
      direction.  On-line registrations will also be accepted on the BBS
      using VISA/MasterCard.
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
See the .DOC file for more information on all these and other new features.
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    I would like to personally thank all users who have contributed their
suggestions and took the time to register and support E88.  This version of
E88, as with past versions, reflects the best ideas and criticisms that you
have provided me with.  I will continue to follow this philosophy in the
future.  This program is truly shareware.  I just built the foundation for it,
you have provided the rest.
                                                   my sincere thanks,
                                                   Emery D. Wooten Jr.
                                                   M.R.E. Software           
```
{% endraw %}

## E88.DOC

{% raw %}
```







                               TTTTTT    HH  HH     EEEEEE
                                 TT      HH  HH     EE
                                 TT      HHHHHH     EEEE
                                 TT      HH  HH     EE
                                 TT      HH  HH     EEEEEE

                 EEEEEEEEEEEEEE        8888888888          8888888888
                 EEEEEEEEEEEEEE      88888888888888      88888888888888
                 EEE                 888        888      888        888
                 EEE                 888        888      888        888
                 EEEEEEEEEE            8888888888          8888888888
                 EEEEEEEEEE            8888888888          8888888888
                 EEE                 888        888      888        888
                 EEE                 888        888      888        888
                 EEEEEEEEEEEEEE      88888888888888      88888888888888
                 EEEEEEEEEEEEEE        8888888888          8888888888

                         TTTTTT     EEEEEE     XX  XX     TTTTTT
                           TT       EE          X  X        TT
                           TT       EEEE         XX         TT
                           TT       EE          X  X        TT
                           TT       EEEEEE     XX  XX       TT

               EEEEEE     DDDDD      II     TTTTTT      OOOO       RRRRR
               EE         DD  DD     II       TT       OO  OO      RR  RR
               EEEE       DD  DD     II       TT       OO  OO      RRRRR
               EE         DD  DD     II       TT       OO  OO      RR  RR
               EEEEEE     DDDDD      II       TT        OOOO       RR  RR


                            and The E88 Text Editor machine






            .----------------.
            | A ssociation of|    The author of this program is a member of
            | S hareware     |    the ASP and has agreed to abide by its
            | P rofessionals |    high standards of quality and support.
            |   ----------   |                -------------
            `-----MEMBER-----'




            (C.) Copyright 1986,87,88  Microsystems Research and Engineering
            (C.) Copyright 1986,87,88  Emery D. Wooten Jr.
            E88, M.R.E. Software, Microsystems Research and Engineering (TM)s

                                  All rights reserved
                                                                          II

                                      PREFACE



             E88 was originally designed as an editor to write assembler
        language code but has since been enhanced into a full function text
        and programming editor.  Since the shareware release of version 1.00
        the editor has been updated seven times including this version.

             E88 is short for editor in 8088 machine language.  The editor is
        written in 100% assembler language which accounts for it's compact
        size and lighting fast speed.  This editor was designed and written on
        an IBM PC and is intended for use on IBM and closely compatible
        machines.

             The goal of this editor is to provide a new concept in text
        editing.  It does not use all of the complicated keyboard commands
        associated with many editors and word processors.  The result is a
        very fast, natural, logical, and easy to learn user interface.  Most
        of the editing functions of E88 are direct, one keystroke, commands.
        This editor uses the IBM keyboard the way it was intended to be
        used, not the way some "ported over" programs use it.  The function
        keys are used heavily but in a logical and easy to remember fashion.
        The numeric keypad/cursor control keys provide text control as it
        should be provided, fast, versatile, and full featured.  All complex
        file control and setup functions are accessed via a menu driven
        command window with helpful prompts, which are brief but informative.
        A help screen is also provided and can be accessed directly from edit
        mode or from the command window.  This help screen provides an
        abbreviated list of the editor's direct functions.

             E88 represents an amalgamation of user ideas forged with the
        speed and precision of machine language coding into a sleek little
        computer program whose ease of use and price/performance ratio are
        unmatched by any major commercial product.  Since E88 is shareware,
        and M.R.E. Software is a very small company, user ideas are the
        primary source of innovation and improvement in this product.
        Comments received from registering users ARE read, answered, and
        appreciated.  Good ideas are incorporated in future versions whenever
        possible.  If, after evaluating the program, you decide to register
        your copy, please feel free to send any comments or complaints (we can
        take it) that you think will improve a future version.  You WILL
        receive an answer.  E88 IS actively supported.

             If you are familiar with older versions of E88, then you will be
        pleased with this new edition.  The new features definitely make the
        program more useful than ever before.  The basic simplicity of
        operation has been retained even with the additional power.

             If you are not familiar with E88, then prepare yourself for a
        surprisingly fresh, new approach to text editing.  The speed and
        power provided by E88 is unmatched by any other editor in its class.
        You will be able to master the commands and functions of E88 in just
        a few minutes and retain this knowledge after only a couple of
        sessions.  You'll never dread loading and running a text editor again
        as long as you have E88.
                                                                         III

                                HARDWARE REQUIREMENTS


        E88 will run on the IBM PC-XT-AT-PCjr-PS/2 and all true compatibles.

        The general system requirements are outlined below.

        Memory .......... 64-640 Kb.  The edit file size is a function of free
             memory.

        Operating sys. .. MS/PC DOS version 2.00 or later.

        Video ........... Standard color graphics and monochrome display
             adapters are supported as well as the 43 line/screen mode of the
             IBM compatible EGA adapter. The display adapter is selected
             automatically on systems with only one adapter installed, but
             may be user selected using start-up options on multiple adapter
             systems.

        Disk ............ All disk I/O is controlled through standard DOS
             function calls.  Any valid path and filename may be used in
             the file specification.

        Files ........... E88 reads/produces standard ASCII text files with an
             optional tab compression mode.  Standard ASCII files are the type
             required by most assemblers and compilers.  Tab compression mode
             provides a method of compressing text files to preserve disk
             space while still retaining DOS compatibility.

        Printer ......... The printer output from E88 is standard ASCII text
             which should be acceptable to all printers.  It should also be
             noted that no filtering is done on the text when it is sent to
             the printer.  The user may specify any special codes such as
             escape codes directly on a line in the file and force the printer
             to do whatever he desires.  Some special characters in the IBM
             extended character set (above ASCII 127) as well as some control
             characters (below ASCII 32) may not be acceptable to some
             printers and could cause unusual looking printouts.
             Note that many printers may be controlled by encoding the
             desired control characters in the file by adding 128 to the basic
             ASCII code.  For example the BEL character would be ASCII 135
             instead of ASCII 7    ie. 7+128=135

        Keyboard etc. .... E88 supports both the 83 and 101 key format.  It
             uses the standard BIOS interface and starting with version 4.20
             it is able to read and display the complete IBM character set.
             Most characters may be entered using Ctrl key combinations,
             those that can't may be entered by holding down the [Alt] key,
             typing the ASCII value on the numeric keypad, and releasing
             [Alt].  WARNING: E88 will allow ALL ASCII control codes to be
             entered into a file and saved to disk.  The user is warned that
             some control codes such as EOF(26), CR(13), and LF(10) are
             essential to the file structure of ASCII files and could cause
             problems to E88 and other ASCII programs if used improperly.
             The CR(13) character (a musical note) is also used by E88 to
             indicate a line contains trailing blanks.  This feature may also
             be employed by the user to pad a line with trailing spaces.
                 E88 also provides internal translation routines to allow
             the user to redefine keyboard commands using The E88 Text Editor
             machine covered in section 4.

                              S P E C I A L    N O T I C E
                 Users who are currently using older versions of E88 are
             warned to erase all of your E88SETUP.DEF files and .PGR files.
             This version of E88 uses an enhanced format for these files and
             is not compatible with the older files.  If you fail to do this
             the editor will not harm anything, it just will not function as
             expected.  We apologize for this inconvenience.

                 This page is not numbered or included in the table of
             contents.  It may be discarded from the .DOC file printout.
                                                                          IV

                                  C O N T E N T S

        PREFACE ......................................................... II

        HARDWARE REQUIREMENTS ........................................... III


        PART 1 *** THE E88 TEXT EDITOR

        (1.) STARTING E88.................................................. 1
               Filenames .................................................. 1
               Options .................................................... 1
               Examples ................................................... 2
                 Indirect mode ............................................ 2
                 Direct mode .............................................. 2
               Miscellaneous .............................................. 3
                 Special start/restart features ........................... 3
        (2.) THE EDIT SCREEN .............................................. 4
               Top line information ....................................... 4
               The remainder of the screen ................................ 4
               Miscellaneous .............................................. 4

        (3.) PROGRAM CONTROL .............................................. 5
               The numeric keypad ......................................... 5
                 [Up] [Dn] [Lt] [Rt] ... Cursor keys ...................... 5
                 [Pg Up] [Pg Dn]  ...... Scrolling ........................ 5
                 [Home] [End]  ......... Scroll 1 line .................... 5
                 [Ctrl] [Lt] & [Rt] .... Find previous/next word .......... 5
                 [Ctrl] [Home]  ........ Home cursor ...................... 5
                 [Ctrl] [End]  ......... Cursor to end of line ............ 5
                 [Ctrl] [Pg Up]  ....... Go to top of file ................ 5
                 [Ctrl] [Pg Dn] ........ Go to end of file ................ 5
                 [Ins] ................. Insert a character ............... 5
                 [Del] ................. Delete a character ............... 6
                 Word processing mode ..................................... 6
                 The function keys ........................................ 6
                 [F1] .................. Command window call .............. 6
                 [Shift] [F1] .......... Set the right margin ............. 6
                 [Alt] [F1] ............ Instant help ..................... 6
                 [F2] .................. Printer call ..................... 6
                 [Alt] [F2] ............ Alternate printer call ........... 7
                 [F3] [F4] [F5] [F6] [F7] [F8] ... Pagers ................. 7
                 [Alt] [F3] [F4] ....... Send printer strings ............. 7
                 [Alt] [F5] ............ Make cursor TOS .................. 7
                 [Alt] [F6] ............ Page to last active screen ....... 7
                 [Alt] [F7] ............ Rep. Load buffer ................. 7
                 [Alt] [F8] ............ Load buffer ...................... 7
                 [F9] .................. Insert a line .................... 7
                 [Shift] [F9] .......... Quick default directory .......... 8
                 [Alt] [F9] ............ Change line attribute ............ 8
                 [F10] ................. Insert a line from buffer ........ 8
                 [Alt] [F10] ........... Delete a line .................... 8
                 [Ctrl] [F1-F10] ....... Programmable characters .......... 8
                 [ENTER] ............... Record screen / Reset tab cnt. ... 8
                 [Ctrl] [Enter] ........ Toggle auto-indent mode .......... 8
                 [Tab] ................. Tab the cursor ................... 8
                 [Shift] [Tab] ......... Set the tabs ..................... 8
                 Additional information on functions ...................... 9
               Command modes .............................................. 11
                                                                            V


                 (E.) END the edit and save this file ..................... 11
                 (B.) BACKUP (create filename.bak) ........................ 11
                 (F.) FILES (directory search) ............................ 11
                 (C.) CHANGE the filename (for saving) .................... 11
                 (D.) DEFINE block operation .............................. 11
                      DELETE the marked block ............................. 12
                      MOVE the marked block ............................... 12
                      COPY the marked block ............................... 12
                      PRINT the marked block .............................. 12
                      TRANSFER marked block to disk ....................... 12
                 (H.) HELP ................................................ 12
                 (K.) KEY file saved for this directory ................... 13
                 (L.) LOAD another file (with options) .................... 13
                 (M.) MERGE data from another file ........................ 13
                 (P.) PROGRAM Ctrl. keys and def ext. ..................... 13
                      Special supplemental information about setup files .. 13
                 (S.) SEARCH and [replace] string ......................... 14
                 (T/W) TAB comp.( )/WORD wrap( )  (x)=on .................. 14
                 (Q.) QUIT * RETURN TO DOS * NO SAVE ...................... 15


        PART 2 *** THE E88 TEXT EDITOR MACHINE    (E8M.EXE)

        (4.) THE E88 TEXT EDITOR MACHINE
               Running the machine ....................................... EM1
               E8M main menu options ..................................... EM1
                 (0.) Registration information ........................... EM2
                 (1.) Personalize the title screen ....................... EM2
                 (2.) Screen parameters (colors etc.) .................... EM2
                 (3.) Start-up options ................................... EM2
                 (4.) Program character sets, printer strings and tabs ... EM3
                 (5.) Redefine keyboard & help screen .................... EM3
                 (6.) Load a personality file ............................ EM4
                 (7.) Save a personality file ............................ EM4
                 (8.) Manufacture your copy of E88 ....................... EM4
                 (9.) QUIT/EXIT .......................................... EM4
               Additional remarks about E8M .............................. EM4



        APPENDIX A - E88 program compatibility ............................ A1
             Memory resident programs ..................................... A1
               Prokey ..................................................... A1
               Sidekick ................................................... A1
             Non resident programs ........................................ A1
               Assemblers / Compilers ..................................... A1
               Communications programs .................................... A1
               Operating system files ..................................... A2
               Data base data files ....................................... A2

        APPENDIX B - The E88 help screen .................................. B1
               A printable reproduction ................................... B1
               A note about the help screen ............................... B1

        APPENDIX C - License / Warranty / Trademarks ...................... C1
               License .................................................... C1
               Warranty ................................................... C2
               Trademarks ................................................. C2
                                                                           VI



        APPENDIX D - Registration ......................................... D1
               Why should I register ? .................................... D1
               Registration fees .......................................... D2
               The M.R.E Support BBS ...................................... D2
               Registration form ..................................... D3 & D4
                                                                           1

        >> Section 1 <<             STARTING E88



             E88 may be started either directly or indirectly from the DOS
        prompt.   There are also several options available to the user at
        run-time.  This section will discuss filenames and options needed to
        begin an editing session with E88.


        >> 1.1 <<                     FILENAMES

             Standard DOS notation is acceptable.  d: [path] filename [.ext]
        If no path is specified then E88 will use the default directory.  If
        no filename extension is specified then E88 will use it's user
        definable internal default.  If the desired file to be edited does not
        have an extension then 3 blanks should be entered for an extension.


        >> 1.2 <<                      OPTIONS

             E88 supports several options which may be specified on the DOS
        command line at execution.  They are listed below.

        The /B option: (blanking)
             The /B option will eliminate "blanking" of the display when
             the screen is scrolled.  This feature is useful on machines
             which have the newer display adapters.  The user may determine
             if his computer will tolerate this feature by starting E88 using
             the /B option and looking for display "fetches" (interference)
             when the screen is scrolled.  This option only applies to color
             graphics adapters and has no effect on mono or EGA displays.

        The /C option: (color)
             The /C option will force the video output to be directed to the
             color graphics display adapter.  This option is useful when a
             system is equipped with two adapters.  See also the /M option.

        The /E option: (end the file with no EOF mark)
             The /E option will suppress the end of file marker being added
             to the end of a saved file.  Although most programs accept this
             format some may require the marker.  The /E option is
             recommended for .SYS and .BAT files.

        The /H option: (high resolution EGA)
             The /H option will direct the editor to operate in EGA 43
             line/screen mode.

        The /I option: (auto indent mode)
             The /I option will start the editor in auto-indent mode.  The
             cursor will be tabbed to the first tab stop each time <ENTER> is
             pressed.  This mode may be toggled on and off by pressing the
             key combination <Ctrl> <ENTER> while in edit mode.

        The /M option: (monochrome)
             The /M option will force the video output to be directed to the
             monochrome display adapter.  This option is useful when a system
             is equipped with two adapters.  See also the /C option.
                                                                           2


        The /T option: (tab compression)
             The /T option will cause the editor to toggle into tab
             compression mode.  Unless the mode is changed from the command
             window the loaded file will be saved tab compressed.

        The /R option: (word wrap mode)
             The /R option turns on word wrapping.  This mode may be changed
             from the command window later.

        The /S option: (silence)
             The /S option will silence all sound effects except for error
             messages.

        The /W option: (word processor insert mode)
             The /W option will direct the editor to function in word
             processor mode.  This mode is discussed in detail later in the
             manual.


        >> 1.3 <<                      EXAMPLES

        >> 1.3.1 <<                  INDIRECT MODE

             To start E88 in indirect mode simply enter E88 at the DOS prompt.
        The editor will be loaded and will prompt the user for the edit
        filename.  Start-up options must be specified at the DOS prompt.

        example:   C>E88 /B
             Would execute E88 with screen blanking disabled and prompt the
             user for a filename.

        example:   C>E88 /B/C/W
             Would execute E88 with screen blanking disabled, force the video
             output to the color graphics adapter, and place the editor in
             word processing mode.  The user would then be prompted for a
             filename.

        >> 1.3.2 <<                    DIRECT MODE

             To start E88 in direct mode, the filename must be specified on
        the command line.

        example:   C>E88 MYFILE.DOC
             Would execute E88, which would then load MYFILE.DOC for editing.

        example:   C>E88 MYFILE
             Would execute E88, which would then load MYFILE.(default ext.)

        example:   C>E88 /B/W \JUNK\THAT_OLD.BAT
             Would execute E88, disable screen blanking, place the editor in
             word processing mode, and load the file THAT_OLD.BAT from the
             pathed directory JUNK.

        example:   C>E88 BBSLIST.(enter three spaces for the extension)
             Would execute E88 and load the file BBSLIST no extension, for
             editing.
                                                                           3


        >> 1.4 <<                     MISCELLANEOUS

             Start-up option letters as well as filename specifiers are NOT
        case sensitive.  e88 /m myfile.dat would work just as well as
        e88 /M MyfiLE.dAT.  The spacing and order are important however.

        CORRECT:    E88 [/option] [d:]\[path]\filename[.ext]
                       s s       s    b      b
                       p l       p    a      a
                       a a       a    c      c
                       c s       c    k      k
                       e h       e    s      s
                                      l      l
                                      a      a
                                      s      s
                                      h      h


             The /T, /R, and /I options are reversible after the editor is
        executed, all others are not.


        >> 1.4.1 <<         SPECIAL START/RESTART FEATURES

             E88 provides a pair of special features that may be used on
        start-up in indirect mode or upon a restart from within the editor.
        Although these options are mentioned on the opening screen they are
        not entirely obvious.  These options are very useful and should be
        noted by the user.

        (1.) Entering a null string at the filename prompt will terminate the
        program.

        (2.) Entering a filename which includes an asterisk (*) wildcard
        character will prompt the editor to do a directory search.  The user
        may enter any valid path and filename/wildcard combination to search
        any directory.  See the FILES command covered later in this manual
        for more information and examples.
                                                                           4

        >> Section 2 <<             THE EDIT SCREEN


             This section outlines the edit screen.  It provides information
        relating to the top line status and also provides information on
        interpreting the displayed text file

        >> 2.1 <<                TOP LINE INFORMATION

        FILENAME    LINE    COL       FREE          MODE          RtMar.=xx
        current   | text | cursor |  78 char. | current mode| the right margin
         file     | line#| column | lines free|   EDIT etc. | value setting


        The indicated line number represents the current line that the cursor
        resides on IN THE FILE being edited.  A line consist of a screen line.

        example:  > this is supposed to represent text on the E88 screen
                  > text text text text text text more text etc.. on and on
                  > new line of text across screen starts at arrow on left

        represents 3 lines of the text file
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        >> 2.2 <<          THE REMAINDER OF THE SCREEN

             The remainder of the screen contains the text file that is being
        edited and also contains a "> " ,nothing, or the letter "F " in the
        first two columns of the screen on each line.  An arrow "> "means that
        this is the beginning of a new line.  If the first two columns are
        blank, the line is an extension of the previous line.  There is no
        limit on line length.  It is the user's responsibility to insure that
        the length does not exceed that which is acceptable to the assembler
        or compiler that the text file is to be used with.  The letter "F " in
        the left two columns indicates that this line is available but not in
        use.  The appearance of the first line marked "F " is the physical end
        of file.  Although it is possible to type on these free lines, any
        text present on these lines will not be saved to disk.  This feature
        will allow the user to make notes on these lines if desired, however
        these notes will not be saved or reloaded.

        >> 2.3 <<                     MISCELLANEOUS

             Some files, such as database record files and ANSI graphics
        files, contain lines padded with spaces on the end.  E88 will include
        a carriage return character (ASCII 13 a musical note) on the display
        screen when a line such as this occurs.  This feature allows the user
        to have a visual indication of where the end of the line actually is.
        The CR character is also used by E88 to determine the end of the line
        when the file or block is to be saved to disk.  The user may also
        employ this feature to pad lines with spaces.  Use the [Alt] numeric
        keypad to enter a CR after the proper number of spaces at the end of
        a line.  Press [Alt] and type 13 on numpad then release [Alt].

             Extended lines are counted as a line when referring to E88's line
        number or free lines remaining information.  They are however saved
        to disk as being one complete line of text.

        example: > this represents a line of text on the E88 editor screen
                   which is extended ( notice no arrow ) into this line

        * 2 lines to E88 but only one long line to the disk file.
                                                                           5


        >> Section 3 <<             PROGRAM CONTROL


             This section provides information regarding program control.  It
        outlines the use of the numeric pad, function keys, tabs, enter, and
        programmable keys.

        >> 3.1 <<                  THE NUMERIC KEYPAD

             The numeric keypad provides standard cursor as well as complete
        and extended screen control.

        [Up]  [Dn]  [Lt]  [Rt] ... MOVE CURSOR
             The four arrow keys provide cursor control as expected but also
        provide screen control.  Whenever a cursor movement would cause the
        cursor to be positioned off the top or bottom of the screen an
        automatic screen scroll will occur.  This includes end wrap for the
        left and right arrows as well as simply holding the up and down arrow
        keys to force a scroll.

        [Pg Up]  [Pg Dn] ... SCROLL ENTIRE SCREEN 24 LINES
             The page up and page down keys will cause an immediate 24 line
        scroll to the preceding or following page of text.

        [Home]  [End] ... SCROLL 1 LINE AT A TIME
             The home and end keys will cause a 1 line scroll up and down.

        [Ctrl]  [Lt] & [Rt] ... FIND WORDS
             These keys will find the previous/next word in the line.

        [Ctrl]  [Home] ... HOME THE CURSOR
             The key combination of [Ctrl] [Home] will home the cursor.

        [Ctrl]  [End] ... GO TO END OF LINE
             This combination will place the cursor at the end of the current
        line plus one.

        [Ctrl]  [Pg Up] ... GO TO TOP OF FILE
             This key combination will cause the editor to instantly locate
             on Line 0, Row 1, Col 2, of the file being edited.  It is denoted
             as the Go to TOF command.

        [Ctrl]  [Pg Dn] ... GO TO END OF FILE
             This is the Go to EOF command.  The logic behind this command
             constantly keeps track of the current EOF even with changes in
             file length.  When this key combination is pressed the editor
             will locate the cursor on the end of the last line in the file
             plus one position.

        [Ins] ......... INSERT CHARACTER
             Toggles the insert mode.  The insert and delete character keys
        work exactly like they do in the BASIC program editor.  The insert key
        toggles on and off.  Insert mode is indicated by a "fat" cursor.  When
        insert is enabled, characters will be inserted into the line at the
        current cursor position while all characters to the right are moved
        and wrapped around to the next line if necessary.  The editor will
        also insert an extension onto the line if needed.  The insert mode is
        toggled off with any screen or cursor movement including tabs with the
        exception of backspace. Backspace backs up and deletes the character
        leaving the program in insert mode just like BASIC.
                                                                           6


       [Del] .......... DELETE CHARACTER
             Deletes the character at current cursor position.



        >> 3.1.1 <<             WORD PROCESSING MODE

             Word processing mode is entered by using the /W option on the
        command line.  This feature in no way magically transforms E88 into
        a word processor.  It merely changes some of the key assignments
        and functions.  These changes are outlined below.

             The insert mode becomes a true toggle.  Pressing the insert key
        will cause a "fat" cursor as described in the insert key function
        above, but the editor remains in insert mode even with cursor
        movement.  There are only two ways to exit insert mode, they are,
        press the insert key again, or position the cursor past the end of
        the current line.  This feature is similar to the insert scheme used
        by many popular word processors.

             The Ctrl. Home key also function differently.  Pressing the
        [Ctrl][Home] key will cause the cursor to move to the start of the
        current line.  This represents a change from earlier versions in which
        the [Home], [End], [Ctrl][Home], and [Ctrl][End] keys were actually
        swapped.  With the introduction of The E88 Text Editor machine these
        keystrokes may be changed by the user if desired.  The function
        assigned to [Ctrl][Home] on default will be "go to start of line" and
        not "home cursor".  Therefor the user can set up the editor to be
        completely compatible with older versions.


        >> 3.2 <<               THE FUNCTION KEYS

        [F1] .......... COMMAND CALL
             F1 calls the main command menu window, discussed in detail later.

        [Shift] [F1] .. SET RIGHT MARGIN
             Shift F1 sets the right margin value at the current cursor
             position.  The right margin is in effect when the editor is in
             word wrap mode.  This feature is useful for typing formatted
             text such as pre-written text to be uploaded in E-Mail messages.
             The default value for this setting is 74.  This is the correct
             value for using the MRE BBS system.

        [Alt] [F1] .... INSTANT HELP SCREEN
             Alt. F1 provides instant on-line help.  This method of calling
             the help screen by-passes the command window.  Help is still
             available from the command window, maintaining compatibility
             with older versions and supporting the needs of novice users.

        [F2] .......... PRINTER CALL  (standard)
             F2 calls the printer !?  Make sure the printer is on (if it isn't
             DOS will indicate the error).  Place the cursor on the line where
             the printout is to start and press [F2].  The printer will print
             lines and the cursor will move and the screen will scroll until
             any key is pressed or the end of file is reached.  The cursor
             indicates the line currently being printed.  Termination of the
             print will restore the screen and cursor to their previous
             positions.  * Extended lines will be added together and printed
             just as if they were one long line.
                                                                           7



        [Alt] [F2] ... PRINTER CALL  (with arrows printed)
             This key combination causes the same action as described above
             except that the arrows are printed.

        [F3]  [F4]  [F5]  [F6]  [F7]  [F8] ... PAGERS
            F3 through F8 are called pagers.  Pressing these keys will cause
            the text to scroll instantly to a page that has been preset by the
            user.  To preset the page for each key, simply scroll to the
            desired page, hold the shift key down, and press F3 to F8.  That
            key is then set to the displayed page and will return to that
            point from anywhere in the text.  These keys will remain set until
            reset, which can be done as often as necessary.  Upon start-up the
            pager keys are set up to split the file into equal parts.  [F3]
            points at the first page and [F8] points at the last page in the
            file with all others equally spaced in between.  This feature
            allows rapid access to any area in the file.  This feature may be
            overridden by the PGR default file however.  For more information
            about the PGR file see the setup mode section.

        [Alt] [F3] [F4] .. SEND PRINTER CONTROL STRING
            This key combination will send a pre-programmed string to the
            printer.  The default strings will form-feed and reset an Epson
            compatible printer respectively.

        [Alt] [F5] .... MAKE CURRENT LINE TOP OF SCREEN
             This combination will make the current line the new top of screen

        [Alt] [F6] .... RECOVER LAST ACTIVITY SCREEN
             This combination will recover the last screen that edit activity
        occurred on.  This feature allows the user to scroll or page all over
        the place and still instantly recover the last screen where a letter
        was typed.

        [Alt] [F7] .... LOAD BUFFER WITH SAME LINE
             This is the repeat load buffer command.  This command is
             identical to the [Alt] [F8] command below except that the cursor
             is not moved down to the next line.  Audible feedback is
             provided to verify the command was executed.  This command is
             useful when a line needs to be duplicated several times.  An
             example is the many 'DB' Pseudo-ops used in an assembly language
             data segment.

        [Alt] [F8] .... LOAD LINE INTO BUFFER  (does not delete as does F10)
            This is the load buffer command key combination. When this command
            is issued, the line that the cursor is on will be loaded into a 32
            line buffer.  The cursor will then move to the next line down,
            which, if the user desires, may also be loaded.  Up to 32 lines
            may be stored in this manner and recovered with the [F10] key.
            The use of this command in combination with the [F10] key may used
            to do a block copy of up to 32 lines at a time.  To copy more than
            32 lines at a time see the block operations section.

        [F9] .......... INSERT A LINE
             F9 will insert a line into the text directly above the line that
             the cursor is on when the key is pressed.
                                                                           8

        [Shift] [F9] .. QUICK DIRECTORY LISTING  (default drive & extension)
             Shift F9 will display a quick default directory search.  The
             default directory will be searched for all filenames ending in
             the currently defined default extension.

        [Alt] [F9] .... TOGGLE LINE ATTRIBUTE  (join or seperate lines)
             This key combination will toggle the attribute of the current
             line.  It will change an extended line into a new line or a new
             line into an extended line.  This can be used to separate or join
             lines in the file.

        [F10] ......... INSERT A LINE FROM THE BUFFER
             This key will automatically insert a line of text which has been
             saved in the 32 line buffer. The insert will occur at the current
             cursor position in the same manner that the [F9] key effects an
             insert.  Lines may be saved into the buffer by the [Alt] [F8]
             load buffer command or by the [Alt] [F10] delete line command.

        [Alt] [F10] ... DELETE CURRENT LINE  (line is placed in the buffer)
             This key combination is the delete line command.  When this
             command is used the current line will be deleted from the screen
             and the file will scroll up to fill the vacated space.  The
             deleted line is not lost forever however, it is placed in a 32
             line circular buffer.  The last 32 deleted lines may be recovered
             by simply pressing [F10] after positioning the cursor at the
             desired insert position.  Using the key sequences of [Alt] [F10]
             and [F10] in combination can be used to move a block of text (up
             to 32 lines at a time) from one place in the file to another.

        [Ctrl] [F1-F10] .. SPECIAL CHARACTERS (types user defined character)
             These key combinations print a special character which has been
             pre-programmed by the user for the particular function key.  The
             programming of these keys is discussed later in the setup window
             instructions.  The default character set for these keys is the
             set of line graphics characters.

        [ENTER]
             The enter key is used much as with any other editor.  When typing
             in text, hitting [ENTER] will cause the cursor to move to the
             start of the next line, inserting a line if it is at the end of
             file.  [ENTER] also resets the tabs and records in memory the
             current text screen.  There is one difference with this editor to
             many others including the Microsoft BASIC program editor.  It is
             NOT necessary to press [ENTER] to insure that your screen changes
             have been preserved.  The program logic automatically detects a
             screen change and records the new screen.  This prevents the old
             BASIC problem of forgetting to press [ENTER] and having to
             re-type a change.

        [Ctrl] [ENTER] .. TOGGLE AUTO INDENT
             The key combination of [Ctrl] [ENTER] will toggle the editor's
             auto-indent mode.  When in auto-indent mode the cursor is
             automatically tabbed to the first tab stop.  This process is
             essentially identical to pressing [ENTER] and [TAB] in sequence.

        [Tab]
             The tab key tabs the cursor to the user preset tabs.

        [Shift]*[Tab] .. SET TAB
             This key combination of shift and the tab key will set a tab on
             the screen.  E88 supports 20 tab positions which can be set to
             function in almost any manner imaginable.
                                                                           9

             To set the tabs:

             (1.) Press [ENTER] (this clears the tab COUNT)  *** See note 1 !
             (2.) Move the cursor to the desired tab position.
             (3.) Hold down a shift key and press the tab key.
             (4.) Tab 1 is now set and the next tab is ready to be set.
             (5.) Repeat this procedure until the speaker beeps if desired.

        More on the tab function :
        1.   To set the first tab, which is the position that the cursor will
             move to when in auto indent mode, the editor must NOT be in
             auto indent mode.  This is because the cursor will automatically
             be tabbed by the [ENTER] key and the tab count WILL NOT be
             cleared.  The tabs MAY be set when the editor is in auto-indent
             mode, however the user should be aware that the tab count will
             start with the second tab.  For more information about auto-
             indent mode see [Ctrl] [ENTER] in this section.

        2.   The speaker will beep when the 20th tab is set.  When the speaker
             beeps this indicates that the count is about to start over at the
             first tab.  The tab function on both tabbing and setting the tabs
             is a rollover procedure.  When the last tab is reached, the
             program will start over with the first tab again.  There is no
             beep during normal tabbing,

        3.   The tabs can be set in any order desired.  The cursor does not
             have to tab from left to right.  For example 38,24,36,5,10,15,38,
             24,36,71,... is a perfectly legal tab setup.  The default tab
             setup is a repeating sequence of 2,12,22,42,2,12,22,42,2,12,22,42
             and so on.

        4.   Any tab can be set at any time.  Simply clear the tab count by
             pressing [ENTER].  Tab the cursor normally with the tab key while
             counting the number of tabs.  When the desired tab is reached,
             position the cursor on the proper column and perform step 3
             above.  *** See note 1 if setting tabs in auto-indent mode.

        5.   The tab setup is saved within the setup file E88SETUP.DEF which
             is discussed later in the command mode section.  To save the tab
             setup, the user must go into setup mode. (See command mode option
             "P.")

        Alphanumeric keys:
             Type as usual.

        >> 3.2.1 <<       ADDITIONAL INFORMATION ON FUNCTIONS

             The circular buffer referred to in the previous function
             descriptions is used as temporary storage area for deleted and
             saved lines.  The buffer is always available to accept 32 new
             lines.  Circular implies that the last 32 lines either saved or
             deleted may always be recovered from the buffer.  The lines are
             stored using "last in - first out" or "STACK" logic.
                                                                           10


        Mini-Merge .... Another use for the buffer
             The circular buffer contents may be transferred from one file to
             another.  The user may load the circular buffer with information
             from a file, select the (L.) option from the command window, load
             a new file, and dump the buffer contents into the new file.  This
             feature is great for copying a small subroutine or a couple of
             paragraphs from one file to another.  For larger transfers a full
             scale file merge and a block to disk transfer are also provided.
                                                                           11


        >> 3.3 <<                    COMMAND MODES

             Pressing function key [F1] will call E88's command window.  The
        command mode will allow the user to save, backup, or exit from editing
        as well as setup some editor defaults and perform block and disk
        operations.  The following information is provided to serve as a
        guide to the command mode functions.


        [Esc]
             The escape key will return to edit mode.

        (E.) END the edit and save this file
             This command will save the file to the drive and filename
             displayed in the upper left corner of the screen.  The program
             will return to DOS when the save is complete.

        (B.) BACKUP (create filename.bak)
             This command will create a backup file using the displayed
        filename (as above) but with the extension of BAK.  This command can
        be used as often as necessary during the edit to insure that a loss of
        power or other unthinkable event would not cause a loss of data.  Note
        that no backup file is automatically produced as with EDLIN.

        (F.) FILES (directory search)
             This command allows the user to display any directory or
             specified files in any directory.  The window will display some
             help information for using the search.  One may enter any valid
             path and combination of DOS wild cards as a criterion for the
             search, at the prompt.  Simply pressing [ENTER] without any
             criteria will result in a *.* display of the current default
             directory.  The pathname(s) and filename must be separated with
             a backslash (\) for the search to work properly.  Example:
             \PROCOMM\DOWNLOAD\*.MSG would display all the files with the
             extension of .MSG in the sub-directory DOWNLOAD of the directory
             PROCOMM a sub directory of the root.  Any valid path and
             filename may be used.  Refer to your DOS manual for information
             concerning filenames, wildcards, etc.

        (C.) CHANGE filename (for saving)
             This command allows the user to save a file under a different
             name.  This is useful in cases where a standard format is used to
             set up a source file.  The user can load the standard file,
             change the name, and save the edited file without effecting the
             standard load file.  When pressed, the current file specification
             will be displayed.  The user may then press [ENTER] to return
             with no change, or enter the new file specification.

        (D.) DEFINE BLOCK operation
             This command provides access to E88's extended block operations
             menu window.  Before this command is issued a text block should
             be defined by the user.  Failure to do this will result in a
             harmless error message which includes information on how to
             define a block.  A block is defined by pressing Ctrl. B with the
             cursor on the line one desires to mark.  This procedure should
             be performed twice, thus denoting the beginning and end of the
             block.  Pressing Ctrl. C will clear all block marks.  Selecting
             the (D.) command will open a window which offers the following
             block operations:
                                                                           12

          D./ INDICATES THESE ARE DEFINE BLOCK SUB-COMMANDS

          D./(D.) DELETE the marked block.
          S       This sub-command will remove the marked block from the file.
           U      This process is executed very fast and is not reversible, so
            B     the user is advised to use this with care.  Please note that
                  the disk file is not affected unless the edited file is
                  saved, so an error may be corrected by simply reloading the
                  file.

          D./(M.) MOVE the marked block.
          S       This sub-command will delete the marked block from its
           U      current location and insert it at a new location selected
            B     by the user.  Instructions are provided "on screen" as to
                  the new location selection process.  Basically, the user is
                  returned to a pseudo edit screen which allows full operation
                  of the screen control keys including vertical cursor keys,
                  page keys, home and end keys, Ctrl. page keys, and even the
                  pagers.  When the desired position in the file is reached
                  pressing [ENTER] will execute the move command.  Pressing
                  [Esc.] will abort the command and return the user to edit
                  mode leaving the original block unchanged.

          D./(C.) COPY the marked block.
          S       The copy sub-command operation is identical to the move
           U      command (see above) with the exception that the original
            B     marked block is not deleted.  This command also provides
                  a chaining feature allowing the user to make multiple
                  copies of the block.  This chaining option is prompted for
                  in the screen window after each copy is made.  [ENTER] and
                  [Esc.] provide control over the copy command as outlined
                  above under the move command.

          D./(P.) PRINT the marked block.
          S       The print sub-command will send the marked block to the
           U      printer.  This is useful for unattended printing of a
            B     section of text or for use with a print spooler or buffered
                  printer.

          D./(T.) TRANSFER marked block to disk.
          S       The transfer sub-command provides the E88 user with the
           U      very powerful ability to build a custom file from selected
            B     bits and pieces of other files.  This command will literally
                  allow you to "pick apart" one or more files and merge the
                  pieces into one file.  This command is extremely useful
                  for building program source code from subroutine libraries
                  or selecting text data of interest from a large file to be
                  included in another file.  When this command is issued, E88
                  will either create or APPEND a file called E88DTF.(default
                  extension) in the current directory with the data from the
                  marked block.  The E88 Disk Transfer File is saved as a
                  standard ASCII file including the EOF mark.  This file may
                  later be renamed, edited, or operated on just as any other
                  ASCII file.  To create a new E88DTF any existing E88DTF file
                  with the same extension must be either renamed or erased.

        (H.) HELP
             This command provides a quick reference to most of the key
             functions as well as some very important program information.
             Press the escape key to return to editing.
                                                                           13


        (K.) KEY file saved for this edit file
             The key file command will create a file which is named for the
             edit file but given the extension of PGR.  This file will reside
             in the same directory as the edit file and will be pathed to that
             directory automatically by E88.  The PGR file is a special file
             associated only with the edit file.  It contains all of the
             information in E88SETUP.DEF and also contains the currently set
             pagers when it was saved.  The use of E88's setup files is
             described in detail in a special section that follows below.

        (L.) LOAD another file (with options)
             This command allows the user to load and edit another file
             without leaving the editor.  The current file may be saved or
             discarded. See section 3.2.1 for information about how to use the
             (L.) command to merge data between files.

        (M.) MERGE data from another file
             This command, when executed, will prompt the user for the
             filename of the file to merge with the current edit file.  The
             merged data will be appended to the current edit file.

        (P.) PROGRAM Ctrl. keys and default extension
             This command will open a new window which will prompt the user
             for new characters for the Ctrl. F1 to F10 characters and the
             default filename extension.  Pressing [ENTER] without entering
             a new value for these parameters will leave them unchanged.  When
             the setup prompts have cycled through, the user will be asked to
             optionally create an E88SETUP.DEF file.  This file contains the
             set of tabs, special characters, and the default extension that
             were in effect at the time of the save.  The use of E88's setup
             files is described in detail in a special section that follows
             below.

        >> SPECIAL SUPPLEMENTAL INFORMATION ABOUT THE SETUP FILES <<

             This information is presented to allow the user to understand the
        loading process used by E88 so that the setup files may be used to
        their maximum advantage.  Since some confusion and complaints were
        acknowledged with older versions of E88 it was felt that a complete
        description of this process should be provided.  Please note that it
        is no longer necessary to create an E88SETUP.DEF file in each sub-
        directory to get the needed color changes.  The E8M.EXE (the machine)
        program will allow the user to define all internal defaults.

             When E88 is executed it first searches the ROOT directory of the
        current drive for the file E88SETUP.DEF.  If this file is found the
        editor will set it's internal parameters to those specified by this
        file.  Thus, the user may create an E88SETUP.DEF file in the root
        directory of his disk and allow that file to serve as a MASTER setup
        file.  This eliminates the need to put a setup file in each sub-
        directory just to get the various parameters set like you want.

             Next, E88 searches the CURRENT directory for the file E88SETUP.
        DEF.  If found then it sets it's parameters to those specified by
        this file.  This will allow the user to create many setup files, one
        in each sub-directory, so E88 can be used to do many different tasks
        without the need to reset the tabs, colors, or default extension.
        An example would be to put a setup file in the communications
                                                                           14

        directory that makes the default extension .DOC or .DAT . You could
        also put one in the directory where "C" programming is done to set
        the tabs up for indenting lines.  There are numerous places where
        these extra setup files may be useful.

             Next the edit file is prompted for or loaded, depending on the
        start-up method used.  As a final step E88 searches for a file with
        the same name as the edit file but with the extension .PGR.  This
        file, if found will again override all the previous parameters and set
        the pagers to the values they had when the .PGR file was created.  The
        .PGR file is saved and searched for in the same directory that the
        edit file resides in.  This file is mainly used for debugging source
        code since a programmer can set the pagers to areas in the edit file
        where he is working.  After exiting E88, he may then reload the editor
        later and instantly page to these preset areas.

             If none of these files is found then E88 uses its' internal
        defaults.

        * * Please note that beginning with version 4.20, MRE Software is
        including The E88 Text Editor machine to produce a customized copy
        of the editor.  Henceforth the internal defaults may be set up
        exactly to the user specs.  Although E88 will still support the .DEF
        file methodology, many users will not need a .DEF file at all.

        (S.) SEARCH and [replace] string
             When this command is selected the user will be prompted for the
             search and replace strings.  The strings may be up to sixteen
             characters in length.  Once the strings are entered the user will
             then be given the option to do a standard search or a search and
             replace.  Pressing the [+] key will cause a replace all to occur.
             The user is advised to use the replace all with caution.  The
             search will begin at the current line position in the file and
             continue until the string is found or any key is pressed.  If the
             string is found the screen containing the find will be displayed
             and the cursor will be positioned on the first character of the
             string.  The user may then press [space] to skip and continue,
             [ENTER] to replace the string and continue, [\] to "drop out" to
             edit mode leaving the screen at the current position,  or  [Esc]
             to end the search.

             Entering a null string in response to the search string prompt
             will cause the command to be terminated.  Entering a null string
             for the replace string is OK however, since replacing with a null
             string simply deletes the search string from the file.  Audible
             feedback is provided to the user during the search process and
             all information concerning the search is displayed on the top
             line.  Pressing any key while the search is in progress will end
             the search.

        (T/W) TAB comp.( )/Word wrap( )  (x)=ON
             This command toggles tab compression and word wrap modes on and
             off.  The lower-case (x) indicates that the mode is active.
             Pressing the "T" or "W" key will toggle these states and the
             current status will be indicated on the screen.

             (T) on/off
             Tab compression compresses the file by using a process of
             imaginary tab stops in the disk file.  E88 will NOT automatically
                                                                           15


             turn tab compression on and off when a file is loaded depending
             on whether tab characters are detected in the file.  This
             represents a change from earlier versions.  This method of file
             compression is completely compatible with MS-DOS.  The  MS-DOS
             "TYPE" command will properly expand and display a tab
             compressed file for example.  One recommended use for tab
             compression is for electronic mail files.  Since most "E" mail
             and BBS programs will expand tab compressed files properly, the
             use of this mode will reduce file size, and hence, upload time.
             Since the process is reversible, E88 may be used to expand or
             compress any text file and save it in the format desired.

             WARNING: Tab compression is not recommended for program source
             code since most compilers will not expand the inserted tab
             characters in data definitions.  If you do save a source file
             using tab compression, DON'T PANIC the process may be reversed
             by reloading the file with E88, manually turning tab compression
             off and then saving the file.  All general text files may be
             saved using tab compression however, and a fair savings in disk
             space can be expected.

             (W) on/off
             Word wrapping will cause the word being typed to be picked up
             and carried around to the beginning of the next line when one
             has typed off the right margin of the screen.  A new line will
             be inserted in the file to prevent overwriting the data present
             on the next line.  If the editor is in auto indent mode the word
             will be wrapped around to the auto indent position.

        (Q.)  QUIT * RETURN TO DOS * NO SAVE
             This option allows the user to return to D.O.S. without saving
             the file.  When this option is selected the user may then press
             [Esc] to return to D.O.S or any other key to return to editing.

                                >> END OF PART 1 <<
                                                                          EM1
                                   >> PART 2 <<


        >> SECTION 4 <<        THE E88 TEXT EDITOR MACHINE

             This section provides information for using The E88 Text Editor
        machine.  A supplemental program that is provided for creating a
        customized copy of The E88 Text Editor.


        >> 4.1 <<                 RUNNING THE MACHINE

             The E88 Text Editor machine is provided on the disk in the form
        of an .EXE file named E8M.EXE and a "pattern" file for E88 called
        E88.PAT.  Both of these files must be present to produce the E88.EXE
        file, which is the actual executable code of E88.

             The "machine" was designed to be as simple and self explanatory
        as possible.  Many text screens are provided to guide the user during
        the actual running of the program.  Follow the instructions below to
        start E8M and refer to this .DOC file when in doubt.

        (1.) Place E8M.EXE and E88.PAT in the same directory on your disk and
             make that the default directory.  We recommend that you place
             these files on a floppy disk and use it.  You will NOT need
             E8M.EXE or E88.PAT to use E88.  These files are only used in the
             manufacturing process and are not needed thereafter, unless you
             want to re-manufacture your editor.

        (2.) Start E8M by typing E8M at the DOS prompt.  The program does not
             need or accept any command line arguments.

        (3.) The logo screen will "shoot" onto the CRT.  This is the only
             frilly stuff you will find in E88.  We believe in compact code
             and down to business operations.  Even this screen will appear
             only once.  E8M will create a file called QSTART.E8M and anytime
             this file is detected later, E8M will jump straight to the main
             menu.  After the letters are finished dancing onto the screen you
             may press any key except "R" to advance.  You could press R of
             course, there is nothing we can do to prevent it.

        (4.) If you have advanced past the logo screen, you will see the
             introduction screen.  Please take the time to read this screen.
             It describes the "whats and whys" of E8M as well as it could be
             done here.  When finished, press any key to continue.

        (5.) Next you will be viewing the main menu.  If you are a new user
             it is highly recommended that you do not use option number (5.)
             "Redefine keyboard..." at this time.  This .DOC file is based on
             the default keyboard setup, and redefining that setup may cause
             confusion.

        (6.) Select option (0.).  Read and make plans to follow the
             suggestions presented there.  You have now got the old machine
             churning.  Select the various options available and make E88
             work like you want it to.
                                                                          EM2



        >> 4.2 <<              E8M MAIN MENU OPTIONS

             This sub-section is included to present a more detailed
        description of The E88 Text Editor machine menu options.


        (0.) Registration information.
             This selection will provide a screen full of information about
             registering E88.  We hope you will be pleased with our work and
             decide to register your copy.

        (1.) Personalize the title screen.
             This option will allow the user to personalize the top line of
             the E88 title screen.  This message will appear whenever E88 is
             executed or restarted.   Any string may be typed in with the
             exception of the "$" character, do NOT use it or the complete
             string will not be printed by E88.  This option is provided so
             that you may quickly identify individual copies that were
             produced with different defaults.

        (2.) Screen parameters. (colors, etc.)
             This option has a sub-menu associated with it. See below.
             (1.) Cursor types
                  This sub-selection will allow the user to define both the
                  edit mode and insert mode cursors.  Press the "S" and "E"
                  keys to adjust the start and end scan lines for the
                  displayed cursor.  The IBM display adapters will produce a
                  variety of cursors including split and block types.  Some
                  experimenting by the user is recommended here.  Press the
                  [ENTER] key when you find the style you like.
             (2.) Screen colors
                  This option will allow you to define the screen attributes
                  that will be used in E88.  A sample mini-screen is provided
                  so that the changes may be seen immediately.  Press keys
                  1-7 to change the attributes accessed by these keys.  The
                  colors cycle through the 8/16 colors available on the PC in
                  order.  Eight background and sixteen foreground colors or
                  various strange attributes on the monochrome display are
                  supported.  Press [ENTER] when satisfied.
             (3.) Exit to main menu.
                  Exits to main menu.

        (3.) Start-up options (/switches)
             This option will allow you to build in all the various start-up
             switches available to E88.  Refer to the previous section on
             start-up options for a more detailed description of what the
             switches do.  Follow the example given on the screen and enter
             whatever options you want, preceded by a forward slash.  The
             option letters are not case sensitive.  If you enter an unknown
             option or use an invalid format E8M will inform you of the error
             and give you a chance to redo it.
                                                                          EM3



        (4.) Program character sets, printer strings, and tabs.
             This is probably the most comprehensive option included in the
             E8M command menu.  It will allow the user to build in many of
             the most important and frequently used defaults into the editor.
             Although most of these defaults are changeable and may be saved
             in a E88SETUP.DEF file with E88 itself, careful selection here
             could be of great value.  When this option is selected you will
             first be asked to define the default character set.  This is the
             set of characters that are accessed by using the Ctrl. F1-F10
             keys.  You may accept the previously defined character by simply
             pressing [ENTER], or you may type in a character of your own
             liking and press [ENTER].  When [ENTER] is pressed the machine
             will cycle through the complete set of 10 characters following
             this same logic.  *X*  Next you will be asked to enter the two
             printer strings that are accessed by using the Alt. F3 & F4 keys
             in E88.  The default values for these strings will form-feed and
             reset an Epson compatible printer.  You should refer to your
             printer manual for information about sending different printer
             command strings.  Programming of the printer strings is
             performed exactly like the special characters, as is everything
             that is covered by option (4.). *X*  Next the tab programming
             screen will appear.  The default tab settings are designed for
             writing assembler language source code, so unless that is what
             your primary use of E88 is, you will probably want to change
             them.  Please note that an E88SETUP.DEF file is capable of
             resetting the tabs, so you are not stuck with the ones defined
             here.  These are only the default values used when a setup file
             is not found.  To program the tabs, use the left and right arrow
             keys to position the cursor on the tab stop and press [ENTER]
             when satisfied.  Again, the program will cycle through the 20
             available tab stops and you may press [ENTER] to continue with
             no change or move the cursor to redefine the tab.  *X* Finally
             you will be asked to program the default right margin setting
             that is used when E88 is in word wrap mode.  The default setting
             is 74 which is correct if you are creating E-Mail files for the
             PC-BOARD BBS program used by the MRE Software support BBS
             system.   Program the right margin in the same manner as the
             tabs.  This parameter is also easily changeable from within E88.

       (5.)  Redefine keyboard & help screen.
             This option will allow you to redefine the keyboard and create
             an updated help screen at the same time.  It also provides the
             capability to add your own personal notes in an area of the help
             screen.  The new keyboard definitions, the help screen, and your
             personal note area will all become effective in the executable
             code of E88.  A full screen of information is provided when you
             enter this command to assist you in programming.  Here is a
             brief outline for using this option.

             To reprogram the keyboard:  Use the cursor keys to position the
             highlighted block on the function you wish to change.  Press the
             [ENTER] key to "pick up" that function.  The selected function
             will begin blinking.  Now move the highlighted block to the
             function you would like to swap with the first one.  Press
             [ENTER] again to swap the two functions.  Continue this process
             until the keyboard is defined as you desire.  Pressing [ENTER]
             twice on the same function will result in a cancel.
                                                                          EM4



             To edit your personal help area you must press the [F1] function
             key to enter the mini-editor.  A cursor will appear in the
             personal help area when in edit mode.  This is a very simple
             editor that provides cursor movement, backspace, and
             alphanumeric text entry.  You may add any information to this
             area that you feel would be useful.  One suggestion for this area
             is to build a table for referencing your 10 special character
             definitions.  To exit the editor, press the [F1] key again.  You
             may toggle between the editor and keyboard programming mode at
             will.

             When all programming is complete press [Esc] to return to the
             main menu.  There may be a slight delay while the help screen is
             being saved.

        (6.) Load a personality file.
             This option in conjunction with option (7.) provides the user
             with a means to save the parameters he has defined so that there
             will be no need to go through the entire programming process
             each time the machine is run.  The personality files are in no
             way related to E88.EXE and are not required to run the editor.
             If you keep E8M and E88.PAT on a floppy disk you may also keep
             your personality files there as well.

             To load or save a personality file just select (6.) or (7.) and
             follow the prompts.  The commands were designed to be very
             flexible and guide you.  It is possible to load one personality
             file, and after making a few changes, save it using another name
             leaving the original file unchanged.

        (7.) Save a personality file.
             See option (6.)

        (8.) Manufacture your copy of E88.EXE
             This is the command that writes E88.EXE, the actual editor file,
             out to disk.  It will overwrite any copy of E88.EXE that already
             resides in the default directory and warns you of this fact.
             Once the E88.EXE file is produced you may treat it just like any
             other .EXE file.  Briefly, what the machine actually does is load
             the pattern file in RAM, pass the parameters you have defined to
             it, and write it back to disk using E88.EXE as the filename.

        (9.) QUIT/EXIT
             This will return you to DOS.  You will be asked a (Y/N) question
             designed to remind you to save personality files and the new copy
             of E88.EXE before exiting.  You are not required to save these
             files, we are just trying to prevent inadvertent errors.


        >> 4.3 <<        ADDITIONAL REMARKS ABOUT E8M

             Just a few notes and reminders about E8M (the machine).

           * E88.PAT must be present in the default directory to run E8M.

           * E8M.EXE, E88.PAT, nor any of the personality files are needed to
             run the editor itself (E88.EXE) and may be kept on a floppy disk
             if desired.
                                                                          EM5



           * The machine always starts with default settings.  The E8M.EXE
             and E88.PAT files are immune to changes made by the machine.
             The only way to change the settings is by loading a personality
             file or by doing the work manually.

           * A personality file may be loaded under one name and saved with
             another.  Thus preserving the first file.

           * The built in default extension for personality files is .PER,
             however the user may assign any extension desired in responding
             to the prompt.

           * The file QSTART.E8M is created the first time E8M is run.  It is
             a zero length file which serves the sole purpose of skipping the
             delaying intro screen.  If you erase this file the intro screen
             will reappear the next time E8M is executed.  This file is not
             necessary to the operations of E8M or E88.

                                                                           A1



        >> APPENDIX A <<        E88 PROGRAM COMPATIBILITY

             This information is provided for users who desire to use E88
        in combination with, or as a supplement to, other MS-DOS applications.
        The information provided here was compiled primarily from user input.
        M.R.E. software request that all users who discover new uses for E88
        or encounter compatibility problems when using the editor with other
        programs, please drop us a note.  Include as much data as possible
        about how the program(s) work, or don't work, together.


        >> A.1 <<                 MEMORY RESIDENT PROGRAMS

        >> A.1.1 <<                       ProKey   (R)

             If you are a ProKey user you must either suspend ProKey, so that
        all aspects of E88 will be functional, or if you desire, you can set
        up a specific macro set that allows the E88 function keys to work
        normally.  Invoking E88 can then be done from a batch file that
        initiates your desired macro set as well as E88.  Of course, when
        through with E88, your same batch file can restore your usual macro
        set.

        >> A.1.2 <<                      SideKick    (R)

             E88 works well with SideKick.  The only reported problem is a
        slight loss of speed in cursor movement and screen scrolling.  This
        is thought to be due to SideKick's sampling of the keyboard input
        in search of it's calling sequence.  As one user described it, "Its
        like swapping from your warp engines back to impulse drive".


        >> A.2 <<                    NON RESIDENT PROGRAMS

        >> A.2.1 <<                 ASSEMBLERS / COMPILERS

             There have been no problems reported using E88 with any assembler
        or compiler.  Several of the more popular programs that programmers
        report using the editor with are listed below.

        Microsoft  MASM 5.00  (R)        (C) Copyright Microsoft corp.
        Microsoft  C Compiler                    "         "      "
        Microsoft  Pascal compiler               "         "      "
        Microsoft  QuickBASIC compiler (R)       "         "      "
        Borland    Turbo Pascal (R)    (C) Copyright Borland International
        Ashton Tate  Dbase III  (C) Ashton Tate (command language files only)


        >> A.2.2 <<                  COMMUNICATIONS PROGRAMS

             Because of its small size and ease of use, E88 is widely used as
        the editor to match with ProComm (C) Copyright Datastorm Technologies
        Inc.  Since the editor produces standard ASCII output it may be used
        to create and edit electronic message or text files for use with any
        communications package.  Note that the tab compressed mode may be
        used with many "E" mail and BBS systems.  The savings in file size and
        upload time could go a long way toward paying the E88 registration
        fee.
                                                                           A2



        >> A.2.3 <<                   OPERATING SYSTEM FILES

             E88 is 100% MS/PC DOS compatible.  It is excellent for creating
        and maintaining .BAT and .SYS files.  The /E option is recommended
        when creating these files because it prevents the double prompts that
        sometimes occur when a .BAT file has completed execution.

        >> A.2.4 <<                    DATA BASE DATA FILES

             DO NOT attempt to edit a data base record file with E88 without
        first making a backup.  Although E88 is fine for editing the
        programming language for most data bases it is not compatible with
        the record files.  E88 terminates a line when the last non-blank
        character occurs.  Most data base programs use FIXED LENGTH records
        and fill in the lines with blank characters.  These files should be
        edited with the data base itself, not a text editor, since a change in
        the length in only one record will render the file useless !  If you
        are in doubt about the editor being compatible with any file MAKE A
        BACKUP FIRST !!!

        >> A.2.5 <<       SPELL CHECKERS AND OTHER PROGRAMS

             E88 users report that the Turbo Lightning (TM) spell checker
        works extremely well with E88.  This is another fine BORLAND (R)
        product. The user should create an environment for E88 that does not
        use destructive backspacing.  This can be done by setting backspace =
        None.

             Several E88 users, who are also engineers, report that E88 will
        fit and work fine with AutoCAD (TM) from Autodesk Inc. (R)
                                                                           B1



        >> APPENDIX B <<             THE E88 HELP SCREEN

             This appendix contains a printable reproduction of the E88 help
        screen for version 4.22.  It may be printed out and used as a quick
        reference card.  When editing with E88 the help screen may be called
        using either [Alt] [F1] or the command window option (H.).

        >> B.1 <<                  A PRINTABLE REPRODUCTION

 |------ Plain -----|------ Ctrl ------|----- Shift ------|------- Alt ------|
 | F1 = Com. window | F1 = special chr | F1 = Set RtMar.  | F1 = Instant help|
 | F2 = Printer call| F2 = special chr | F2 = No action   | F2 = Print+arrows|
 | F3 = TOF/pager   | F3 = special chr | F3 = Set pager   | F3 = Print ctrl=1|
 | F4 = Call pager  | F4 = special chr | F4 = Set pager   | F4 = Print ctrl=2|
 | F5 = Call pager  | F5 = special chr | F5 = Set pager   | F5 = Curline=TOS |
 | F6 = Call pager  | F6 = special chr | F6 = Set pager   | F6 = Recover last|
 | F7 = Call pager  | F7 = special chr | F7 = Set pager   | F7 = Rep buf.load|
 | F8 = EOF/pager   | F8 = special chr | F8 = Set pager   | F8 = Load buffer |
 | F9 = Insert line | F9 = special chr | F9 = No action   | F9 = Toggle attr.|
 | F10= Ins. buffer | F10= special chr | F10= No action   | F10= Delete line |
 | PgU= screen up   | PgU= top of file |------------------|------------------|
 | PgD= screen down | PgD= end of file |   * E88 CUSTOM HELP SCREEN AREA *   |
 | Hm = scroll 1 up | Hm = home cursor |                                     |
 | End= scroll 1 dn | End= end of line | Use this area to add your own notes |
 | Ins= insert mode | -> = next word   | for using E88.  This area may be    |
 | Del= delete char | <- = prev word   | personalized by using the E88 Text  |
 |------------------|------------------| Editor Machine.                     |
 | Shift TAB sets tab at cursor pos.   |                                     |
 | ENTER will save screen & reset the  |        - help us help you -         |
 | tab count to zero. (1 in ^AI mode)  | S U P P O R T   S H A R E W A R E ! |
 | Ctrl. Enter will toggle auto indent.|         Register your copy.         |
 | * Press Esc. to exit this screen.   |   See the .DOC file for more info.  |
 |-------------------------------------|-------------------------------------|

        >> B.2 <<                A NOTE ABOUT THE HELP SCREEN

             This is a reproduction of the default E88 help screen.  The E88
        text editor machine has the ability to produce a dynamic help screen
        depending on changes made by the user.
                                                                           C1


        >> APPENDIX C <<                LICENSE / WARRANTY

        >> C.1 <<                       LICENSE

             E88 version 4.22 is being distributed under the "shareware" or
        user supported concept.  This software is NOT free software.  The
        use or reproduction of this software outside of the limits specified
        in this license agreement is prohibited.

             Non-registered users are granted a limited license to use this
        software for a period not to exceed thirty days.  During this period
        they should test and evaluate the software to determine if it will
        meet their needs. The use of this program beyond this limited time
        period requires registration.  Non-registered users are not allowed
        to distribute this software without the express written permission
        of Microsystems Research & Engineering.  The only exceptions to this
        distribution restriction are SYSOPS of electronic bulletin boards and
        distributors of public domain and user supported software.  SYSOPS
        and software distributors must abide by the copying restrictions
        specified below.

             Registered users are granted the right to use E88 on only one
        computer at any time.  Site licensing agreements are available for
        businesses, corporations, and government agencies.  Registered users
        are also granted the right to copy and distribute E88 subject to the
        following conditions.

             E88 must be copied in its original unmodified form with the
             exception that the serial number of the distributor may be
             be changed to the new distributor's serial number.  This
             exception only applies to registered users, SYSOPS who are not
             registered users must not alter the files in any manner.

             All of the files must be included in the copy.

             No fee or charge may be requested or paid to any licensee by the
             recipient of the copy.

             E88 may not be distributed in conjunction with any other product
             without the express written consent of MRE Software.

                                                                           C2

        >> C.2 <<                       WARRANTY


             Microsystems Research and Engineering makes no warranty of any
        kind, express or implied, including without limitation, any
        warranties of merchantability and or fitness for a particular purpose.
        Microsystems Research and Engineering shall not be liable for any
        damages, whether direct, indirect, special or consequential arising
        from a failure of this program to operate in the manner desired by the
        user.  Microsystems Research and Engineering shall not be liable for
        any damage to data or property which may be caused directly or
        indirectly by use of the program.

             IN NO EVENT WILL Microsystems Research and Engineering BE
        LIABLE TO YOU FOR ANY DAMAGES, INCLUDING ANY LOST PROFITS, LOST
        SAVINGS OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF
        YOUR USE OR INABILITY TO USE THE PROGRAM, OR FOR ANY CLAIM BY ANY
        OTHER PARTY.


        >> C.3 <<                       TRADEMARKS

             IBM, IBM PC-XT-AT-PCjr-PS/2 and PC-DOS are registered trademarks
        of International Business Machines Corporation.

             Microsoft, Microsoft BASIC, MS-DOS, MASM, and Microsoft Macro
        Assembler are registered trademarks of Microsoft Inc.

             ProComm is a registered trademark of Datastorm Technologies Inc.

             PC-BOARD is a registered trademark of Clark Development Co.

             Other tradenames are referenced where they occur.
                                                                           D1


        >> APPENDIX D <<                REGISTRATION



        >> D.1 <<               WHY SHOULD I REGISTER ?

             E88 is distributed under the shareware concept.  Shareware is a
        unique marketing concept born of the computer revolution.  Users are
        allowed to obtain complete working programs to freely test and
        evaluate for a limited time period.  If they find the programs useful
        then they are required to register their copy of the program.  The
        small registration fee goes to support the authors and encourage them
        to continue to improve the software.

             Shareware depends on honesty.  The computer programs are freely
        distributed as finished products.  The authors of this type of program
        depend completely on the honesty of end users for compensation for
        their work.  If you use a shareware program, any shareware program,
        please be honest and register your copy.  Shareware is not free
        software.  It requires just as much work and effort to produce as
        the highly advertised commercial products, but it usually sells for
        a small fraction of the price.

             Registering a shareware program also gives you the unique
        opportunity to do something that is virtually impossible with
        most commercial software.  When you register, your comments and ideas
        are usually communicated directly to the author of the program and the
        response you will receive is from him/her. (it is in this case)  This
        fact assures you that your ideas are heard by someone who is paying
        attention.  It is also from this pool of suggestions and ideas that
        future improvements are spawned.

             Shareware companies in general don't spend millions of dollars
        doing "market research" or advertising the heck out of their products
        in order to sell you something that you have only read about.  We
        lay it out there on the line....here it is....fully functional....you
        like it, please buy it, you don't .... erase it.  We also don't charge
        you $400.00 for our products.  Don't take this the wrong way however,
        commercial software is a necessity.  LORD knows that this program
        would not exist if it weren't for MS-DOS and MASM. (which are quality,
        reasonably priced, and supported).  Shareware that is of high quality
        at low prices does tend to keep all software prices lower and is
        therefor a necessity in its own right.  When you support shareware
        you not only receive the right to use a good program (usually with
        free updates) but you also make a statement to the entire software
        industry.  Make the free world economy work!  Register shareware.
                                                                           D2

        >> D.2 <<               REGISTRATION FEES

             The registration fee for E88 version 4.22 is only $20.00.
        This is one of the more reasonably priced editors available anywhere.
        We know of no comparable commercial product that offers so much, for
        so little, to so many!

        >> D.2.1 <<          SITE LICENSE REQUIREMENTS

             Site licenses are available for $15.00 per copy to qualified
        businesses, corporations, individuals, and government agencies.  This
        represents a $5.00 per copy or 25% savings.  A minimum of five copies
        must be registered to qualify.  Site licensed organizations will
        receive a 5.25 inch diskette which contains a current version of the
        editor.

        Future updates of the site license copy are provided as follows.
        The first update is free.   All others $20.00
        Prices are for a titled master copy and cover all charges including
        shipping.  Licensees will be informed when updates become available
        and given the option to update at will.  There is NO penalty for
        skipping updates.

        Businesses may of course register less than five copies at the
        individual copy price.


        >> D.3 <<              THE M.R.E SUPPORT BBS

             M.R.E. Software provides a support bulletin board system for
        distributing the latest versions of E88, on-line registration, and
        processing user questions and suggestions.  We are running the latest
        version of PC-BOARD and our primary SYSOP is Tom Ford.  E88 author,
        Emery Wooten may also be reached via the BBS.

        Non-Registered users:
            Will be given limited access to the BBS.  We are  currently
        running an "open" system and no delay is imposed requiring you to
        make two calls to gain access.  Non registered users will be provided
        with access to the main message base, the MRE file area, and the
        on-line registration procedure.  You will be able to download the
        latest version of E88 and a few other selected files.  Questions and
        suggestions from non-registered users will be processed as time
        permits.

        Registered users:
             Will be given complete access to the BBS with full time
        allocation.  You may access our base of selected quality shareware
        and public domain software and download the latest versions.
        Registered users will also have access to the MRE, and other
        conference areas.  The MRE conference is a lively discussion of E88
        and other MRE products and future plans.  Other conferences discuss
        the news and views of the IBM/compatible industry.  Registered users
        will be given priority support and consideration.

        Telephone: (601) 494-8078  <data>   24 hours/day   7 days/week

        You are invited!
                                                                           D3

        >> D.4 <<                  REGISTRATION FORM

             This section contains the E88 registration form.  It is meant to
        provide users with a convenient means to register.  You may fill out
        the form right on your screen and print it using E88.  Thank you for
        your support.

      * If you are filling out the form using E88, simply type over the
        underlines.  They are provided for users who prefer to write.  We
        prefer that you type or print clearly.

        To print, place the cursor on the next line and press [F2].
                                                                           D4
                                   REGISTRATION FORM   ver 4.22

        YES!  I would like to register my copy of E88.  I have read the
        information contained in appendix C and D as well as tested the
        software and would like to support the efforts of MRE software.

        Distribution point ID. number:  0101549B5D   For office use only
                                                     please do not alter.

        Name .............:
        Street Address ...:
        City .............:
        State ............:
        Zip Code .........:

        Place an X by those that apply.

        _  I am enclosing $20.00 per copy for 1 to 4 copy(s) registration.
           *  Supplied on diskette(s) for $25.00 per copy for 1 to 4 copies.
           *  Mississippi residents must add 6% sales tax.
           *  International users please send a money order in U.S. dollars

        _  Requesting site license for _______ copies at $15.00 per copy.
           *  A minimum of 5 copies is required to qualify for site license.
           *  Supplied on diskettes for $17.50 per copy for 5 or more.

        Enclosed :   - Check   - Money Order   - Company PO.

        -  I prefer to purchase using my VISA/MasterCard.

           - VISA       - MasterCard

           Card #: ____  ___  ___  ___      Expires date:    /

           Card issuing bank name: _________________________________________

           your signature ________________________________________

           You MUST sign this form if using a credit card.
         =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

        *** The following info is optional. Answer only those you wish.***

        Company/Title ............:
        Age ......................:
        Where did you obtain E88? :
        Computer type/brand ......:
        Printer ..................:
        Monitor ..................:

        What do you use E88 for ? :  _ Programming  _ General editing  _ Other

        If other please explain:


        I have the following comments / suggestions about E88:







        Send to: M.R.E. Software    150  Jones St.   West Point, Ms.  39773


```
{% endraw %}

## FILE1102.TXT

{% raw %}
```
Disk No: 1102                                                           
Disk Title: The E88 Text Editor & Names                                 
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: E88 Text Editor                                          
Author Version: 4.22                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
The E88 TEXT EDITOR (E88) is a powerful, fully-functional text and      
programming editor completely written in Assembly language.  It is both 
compact and extremely fast.                                             
                                                                        
Rather than using complicated keyboard commands such as those commonly  
used in other editors or wordprocessors, E88 primarily uses             
single-keystroke commands.  These make it more natural, logical, and    
easy to learn.  File control and set-up functions are handled in a      
menu-driven command window and informational prompts make operation     
easy.                                                                   
Program Title: Names                                                    
Author Version: 1.00                                                    
Author Registration: $5.00                                              
Special Requirements: None.                                             
                                                                        
NAMES makes unusual names for use by writers, game players, and just    
for fun!                                                                
                                                                        
The unusual names are created by a scheme similar to a random number    
generator.  You specify how many names you want made.                   
Names are stored in user-designated ASCII files at the rate of four     
names per line.  Since many of the names can't be pronounced or are     
unusual spellings, you need to select usable names from                 
those created.                                                          
However, the program is easy, quick, and inexpensive.  Even if only a   
few names in a hundred are usable, the seconds it takes to make them    
might prove this program helpful for certain users.                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
E88 version 4.22 *** Distribution .ARC files list

The files that should be included in this ARCHIVE are:

FILES.TXT .... This file

--------------------- RUN-ME BATCH and SUPPORT FILES -----------------------|
RUN-ME.BAT ... A batch file to get you started and print the .DOCs          |
YN.COM ....... A public domain batch file supplement program from MRE       |
YN.DOC ....... How to use YN in your own batch files
STARTUP.TXT .. A text file used by RUN-ME.BAT.  Contains basic instructions.|
COMPRESS.CTL . Contains printer control codes used by RUN-ME.BAT            |
----------------------------------------------------------------------------|

------------------------- E8M and SUPPORT FILES ----------------------------|
CHANGES.TXT .. Summary of the changes made in E88 since the last version    |
E8M.EXE ...... The E88 Text Editor machine  (a cloning/customizing program) |
E88.PAT ...... The pattern file used only by E8M.EXE                        |
E88.DOC ...... The complete documentation for The E88 Text Editor           |
----------------------------------------------------------------------------|
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<< Disk No 1102 THE E88 TEXT EDITOR & NAMES  >>>>           ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for the E88 TEXT EDITOR, type:               ║
║                             E88.DOC (press enter)                       ║
║                                                                         ║
║ To run the E88 TEXT EDITOR, type: RUNME  (press enter)                  ║
║                                                                         ║
║ To print the documentation for NAMES, type: NAMDOC (press enter)        ║
║                                                                         ║
║ To run the program NAMES, type: NAMES (press enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## NAMES.DOC

{% raw %}
```
                               -- NAMES.DOC--

     The program NAMES.EXE was written to aid persons who need a source of 
unusual names, such as players of role-playing games, authors, and so on.  
The program generates names by selecting characters using a combination of 
random choice and a VERY few simple grammatical rules.  The frequency of 
distribution of the characters is close to that of standard American 
English.  However, the author makes no promises about the pronounceability 
of any names generated by NAMES.EXE.
     
     NAMES.EXE begins by asking the user for the number of names to be 
generated, and the name of the file into which output is to be directed.  
Filenames should follow standard DOS rules.  After this input, operation of 
the program is automatic.  Please note that if the output file does not exist 
at the time the program starts, NAMES.EXE will create the output file named by 
the user.  It is not necessary to set up an output file before running 
NAMES.EXE. 
     
     The output file is an ASCII file, each line of which contains four 
names.  NAMES.EXE inserts a blank line after every five lines of names to 
improve readability.  200 names fit very nicely on a single 8.5 x 11 sheet 
of paper.
     
     For two reasons, the author suggests that users choose relatively low 
numbers of names when running NAMES.EXE.  First, as the number of names 
goes up, so does file size for the output file.  While the average length 
of each name is only 8.4 characters, due to blank spaces, line feeds, etc., 
the average file size is 13.7 bytes per name.  A 5000-name test file 
occupied 68465 bytes.  NAMES.EXE can fill up a disk in a hurry.  The second 
reason to use small numbers is execution time.  The average execution time 
is 1.4 sec. for each four-name line.  Generating the 5000-name file 
mentioned above required 29 min. 41 sec. on an 8 MHz system.  Times for 
larger files are proportionally longer. 

      If you find NAMES.EXE to be useful, the author requests that you send 
$5.00 to him at the address shown below.  He is also willing to accept 
comments, suggestions, and polite criticism mailed to the same address, 
which is:
                              Geoffrey B. Kirk
                              Route 1, Box 173
                              Woodlawn, TN 37191

NOTE:   NAMES.EXE was writen in MICROSOFT QuickBASIC 4.0.  Users are hereby 
given permission to freely copy, share, lend, and distribute NAMES.EXE, on 
the conditions that it is always accompanied by NAMES.DOC, that both files 
remain unaltered, and that no fees be charged for such transfer, except as 
are needed to cover the cost of duplication and transportation.  NAMES.EXE 
and NAMES.DOC are copyright, 1988, by Geoffrey B. Kirk. 
```
{% endraw %}

## NAMES.TXT

{% raw %}
```
NAMES.EXE - Generates a file holding a user-specified number of unusual names.
NAMES.DOC - Instructions for NAMES.EXE.
```
{% endraw %}

## STARTUP.TXT

{% raw %}
```
    Welcome to The E88 Text Editor version 4.22.  This batch file will assist
you to to get started using the editor program.

    E88 uses a cloning program (E8M.EXE) to produce the actual editor program
file (E88.EXE).  E8M.EXE (also known as the machine) must be executed first.

    New users are advised to follow these simple steps to produce a "default"
copy of the editor to try.
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
(0.)  If a printer is available answer "Y" to the prompt below.
(1.)  Allow this batch file to load and execute E8M.EXE
(2.)  Press any key but "R" to advance past the logo screen.  Or press "R".
(3.)  Read the introduction screen.  Press any key when finished.
(4.)  Select option number (2.) Screen parameters (colors etc.)
(5.)  Select option (2.) Screen colors, from the sub-menu provided.
(6.)  Follow the instructions and set up your colors then exit to main menu.
(7.)  Select option (8.) and then press [ENTER] to produce E88.EXE.
(8.)  Select option (9.) and confirm the prompt with a "Y"
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1102

     Volume in drive A has no label
     Directory of A:\

    CHANGES  TXT      5925   2-20-88  12:43a
    COMPRESS CTL        11   1-12-88  10:57p
    E88      DOC    100143   2-20-88  12:42a
    E88      PAT     20705   2-20-88  12:34a
    E8M      EXE     18383   2-20-88  12:40a
    FILES    TXT      1144   2-20-88  12:46a
    RUNME    BAT      1364   1-12-88  10:55p
    STARTUP  TXT      1164   2-20-88  12:44a
    YN       COM       105   1-12-88  11:02p
    YN       DOC      1236  12-20-87   2:09a
    ASP_NOTE TXT      1216   2-14-90  11:55p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       925   4-15-90   4:46a
    NAMDOC   BAT       161   6-10-88   9:02a
    NAMES    DOC      2821   3-10-88   2:40p
    NAMES    EXE     44153   3-10-88   2:29p
    NAMES    TXT       121   3-10-88   1:37p
    FILE1102 TXT      3109   4-15-90   6:04p
           18 file(s)     202724 bytes
                          107520 bytes free
