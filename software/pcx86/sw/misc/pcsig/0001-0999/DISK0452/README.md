---
layout: page
title: "PC-SIG Diskette Library (Disk #452)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0452/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0452"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE AMULET OF YENDOR (HACK)"

    A Dungeons and Dragons-type text adventure from the Stichting Mathematis
    Centrum in Amsterdam and converted to MS-DOS by Don Kneller.
    
    Played on more than 26 levels against slavering monsters, master
    villains and very powerful magic, your job is to survive and prosper
    using all the skill you can muster.  Play as an explorer, warrior,
    magician, tourist, knight, or a caveman with all their associated
    strength, knowledge, and powers.
    
    This is a bonanza for the adventure-addicted enthusiast who loves to
    hack and slash. Unsheath your sword, grab your amulet and follow me!
    File Descriptions:
    
    HACK     CNF  Data file.
    HH            Data file.
    HACK     EXE  D & D adventure the ``Amulet of Yendor''.
    HACK     DOC  History and documentation for HACK.EXE.
    HACK     MSG  Hints on how to get through this adventure.
    DATA          List of objects and denizens of this empire.
    HELP          More documentation for the game.
    RECORD        Support file for HACK.EXE.
    RUMORS        Support file for HACK.EXE.
    README        Introduction file.
    TERMCAP       Data file.
    HINTS    DOC  Hints on staying alive.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES452.TXT

{% raw %}
```
Disk No:  452
Program Title:  HACK (The Amulet of Yendor) version 3.60
PC-SIG version 3

This Dungeons & Dragons type adventure comes from the Stichting
Mathematisch Centrum in Amsterdam.  Originally running on a Unix machine
it was converted to MS-DOS by Don Kneller.  This adventure game is
played on over 26 levels against many monsters and very powerful magic.
You can be an explorer, warrior, magician, tourist, knight or a caveman
with all their associated powers.  We recommend this game for the
adventure enthusiast who loves to hack and slash.

Usage:  Game/Adventure.

Special Requirements:  Two floppy disk drives.

How to Start:  Type GO (press enter).

File Descriptions:

HACK     CNF  Data file.
HH            Data file.
HACK     EXE  D & D adventure the 'Amulet of Yendor'.
HACK     DOC  History and documentation for HACK.EXE.
HACK     MSG  Hints on how to get through this adventure.
DATA          List of objects and denizens of this empire.
HELP          More documentation for the game.
RECORD        Support file for HACK.EXE.
RUMORS        Support file for HACK.EXE.
README        Introduction file.
TERMCAP       Data file.
HINTS    DOC  Hints on staying alive.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk #452 THE AMULET OF YENDOR (HACK)  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
║                                                                         ║
║ To Start the program type HACK (press enter)                            ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HACK.DOC

{% raw %}
```




                  PC HACK version 3.6 for MSDOS(tm) computers
                  -------------------------------------------

                             by Don Kneller
                                2 Panoramic Way #204
                                Berkeley, CA 94704
                                Oct 22, 1986


  Introduction
  ------------

       HACK is a display oriented dungeons and dragons type game.  It is
  similar in style to ROGUE played on UNIX(tm) systems but HACK is much
  richer in character.  HACK has many more monsters and highly varied magic.
  The motivation in HACK is to descend through the dungeon to find the Amulet
  of Yendor, then return to the surface.  As you travel you will meet various
  creatures (most of them nasty), find objects (some having magical proper-
  ties), and experience many hazards in the dungeon itself.

       PC HACK is the MSDOS version of UNIX HACK which was originally written
  by Jay Fenlason (Jay the Hacker), then heavily modified by people at the
  Stichting Mathematisch Centrum in Amsterdam.  This MSDOS version is called
  PC HACK 3.6.  When you are playing PC HACK, the `v' command will display
  the version number.

       For those who have played HACK on UNIX, this is a complete version
  1.03 with a few enhancements:

       1) You can specify the characters used to draw the dungeon instead of
          the -|+#.  See the GRAPHICS variable below.

       2) If your computer is IBM BIOS compatible, the numeric keypad can be
          used for moving as well as the usual "yuhjklbn" keys.  See the
          option "IBMBIOS".

       3) New options available through the 'O' command.
            "confirm"   If you try to hit tame or peaceful monsters (like
                        your dog) PC HACK asks for confirmation.

            "silent"    You can turn off the bell for a quieter game.

            "sortpack"  Your pack can be sorted by object class (ie. all
                        weapons will be displayed together).

            "packorder" The order to sort your pack in.

            "pickup"    You can change the option "pickup" so you look at
                        what is below you rather than pick it up.  Handy for
                        scare monster scrolls and avoiding picking up dead
                        cockatrices.  Also handy for browsing in shops.

            "rawio"     If you can use this option on your computer you will
                        get faster screen output and better input control.
                        ========  WARNING ========
                        This option may hang your computer !!  If this option
                        causes your computer to hang, do not use it!  It is
                        known that DEC Rainbows will hang with this option.
                        ==========================






            "IBMBIOS"   If your computer is IBM BIOS compatible, you can use
                        the numeric keypad for moving.

            "DECRainbow" If your computer is a DEC Rainbow, you *must*
                        specify this option for character graphics to work!!

       4) Floppy, HardDisk and RAMdisk support.  *Complete* (I hope)
          protection from disk full problems.  Version 3.6 is much smarter
          about handling disks than previous PC HACK versions -- if your
          RAMdisk gets filled, the old levels get swapped out.

       5) Configuration comes from a file instead of environment variables.
          See HACK.CNF below.

       6) PC HACK uses the ANSI.SYS driver, making it quite portable between
          MSDOS machines.

       7) Save files are portable between MSDOS machines.

       8) A few monsters have been changed slightly to test new features.  A
          few commands have been added.


  System requirements
  -------------------

       To play PC HACK you need the following:

       1) MSDOS computer running MSDOS (or PCDOS) 2.0 or newer.

       2) The ANSI.SYS driver must be installed.  Your CONFIG.SYS file must
          have a line like:
               DEVICE = ANSI.SYS

       3) 320K ram or more.  Extra memory can be used as a RAMdisk.

       4) 2 or more 360K floppies or a HardDisk.


  Changes from *all* previous versions of PC HACK:
  ------------------------------------------------

       1) All PC HACK 3.6 bones and save files are incompatible with versions
          older than 3.2 (this includes 1.01E, 1.03G and 3.0).  You should
          remove your old files.

       2) PC HACK uses time and date information in the game.  You should set
          the time and date when you boot up MSDOS.


  Changes from PC HACK 3.4
  ------------------------

       Rest_on_space was restored.  A bug in the object descriptions was
  fixed.  A copy of COMMAND.COM must always be available where COMSPEC says
  it is so PC HACK can copy bones files and do the shell escape.  A bug in
  restoring the hell hound from save games was fixed.  TERMCAP is now used so
  it is possible to set your own colors and other character attributes.








  TERMCAP
  -------

       HACK now uses the UNIX "termcap" to select escape sequences to be sent
  to the terminal driver (either ANSI.SYS or NANSI.SYS) to change video
  modes.  When HACK starts up, it checks in the environment for the variable
  called "TERM".  The DOS command:
       set TERM=ibmpc-ega
  will give the environment variable "TERM" the value "ibmpc-ega".  By
  default, HACK assumes the value of TERM is "ibmpc-mono".

       Then HACK looks in the file called "TERMCAP" for a terminal definition
  with the same name as the value of TERM.  HACK first looks for TERMCAP in
  the current directory, then in directory "\ETC" (the normal UNIX place),
  then in directories along your PATH.

       The TERMCAP file uses 2 letter codes to describe each escape sequence
  and \E to mean ESC (the escape character is decimal 27).  Each entry is
  enclosed in colons.  For example, to start underscore mode on a monochrome
  display, we want to send the sequence "ESC[4m".  This looks like
  ":us=\E4m:" as a termcap entry.

       The following sequences are used by HACK and can be changed:

       ti   terminal initialization.  You could have something like:
                 :ti=\E44;37m:
            which would mean to select blue background and white foreground.

       te   terminal end.  To reset your terminal to white on black:
                 :te=\E0m:

       so   stand out.  Select red forground, keeping the blue background:
                 :so=\E31m:
            This is used for displaying highlighted text.

       se   standout end.  Back to white on blue:
                 :se=\E44;37m:

       us,ue  underscore start; underscore end.  Used for highlighting the
            titles in the inventory.

       HACK also uses some sequences which you should not change: ho (home),
  cl (clear screen), bs (backspace), co (# of columns), li (# of lines), ce
  (clear to end of line), cm (cursor motion), xd (cursor down), nd (cursor
  forward), up (cursor up), bc (cursor back).

       If you want to make your own TERMCAP entry, copy the "ibmpc-mono"
  entry, replace the name (eg use "ibmpc-color" or "ibmpc-ega" or whatever),
  then replace the sequences with whatever you please.  The possible escape
  sequences are listed in Chapter 13 of the DOS 2.0 manual.  The NANSI.DOC
  file has a table of character attributes that you can use with NANSI.SYS.
  They are the same as used by ANSI.SYS.

       Remember to change the environment variable "TERM" to reflect which
  TERMCAP entry you want!  You should probably put a "set TERM=..." line in
  your AUTOEXEC.BAT file.  Also, make sure you put the TERMCAP file somewhere
  on your PATH.









  Commands new to PC HACK 3.4
  ---------------------------

       ^A `abort'.  Certain commands like waiting, searching, opening a tin,
          and digging can now be aborted.  Eg. if you do `20.' then see a
          monster appear in the doorway, you can use ^A (control-A) to stop
          your waiting.

       a  `again'.  Do the previous command again.  The apply command has
          been moved to `A' to accommodate `again'.

       gG `g' takes the place of `f' which will be "fight until wounded".
          Similarily, `G' takes the place of `F' which will be "fight to the
          death".  Neither of the `fight' commands have been installed yet.


  Commands new to PC HACK 3.0
  ---------------------------

       e  'eat' now lets you eat something you're standing on; you no longer
          have to be able to pick something up before you can eat it.

       I  selective inventories.  For example I= shows which rings you have
          in your inventory.

       :  look at what you're standing on without picking it up.

       #  lets you enter an extended command.  The only ones are "dip" and
          "pray".  Dip lets you put objects in potions.

       @  Toggles the "pickup" option so you don't have to do "O pickup" and
          "O !pickup".

       !  Starts up another COMMAND.COM if you have enough memory.


  Configuration of PC HACK for your MSDOS computer
  ------------------------------------------------

       The configuration of PC HACK is controlled by a configuration file
  HACK.CNF.  This configuration file should be in the directory you are
  playing from, or somewhere on the PATH.  When PC HACK starts up, it uses
  the PATH to find HACK.CNF.  You must also put the TERMCAP file on the PATH.

       The HACK.CNF file contains variables for configuring PC HACK to your
  system.  The variables are:


  HACKDIR
  -------

  HACKDIR is the directory name of the place where all support files go.

       example:       HACKDIR=c:\games\hack

  The support files are:

       HELP       - A description of commands and options.
       HH         - An abridged version of the above.
       DATA       - Information about monsters and objects in the game.






       RECORD     - The score file (it may start out empty, but it must
                    exist).  The top score for each name and class are saved,
                    but only the top 100 scores are kept.
       RUMORS     - Fortune cookie hints (some are true, some are not).
       
       Put all these files in the directory HACKDIR.  If HACKDIR is not set,
  the support files are assumed to be in the current directory.  If you don't
  have enough disk space, the only file you're required to have is RECORD,
  but try to have RUMORS and DATA on your disk also.


  LEVELS
  ------

  If the RAMDISK variable is not set, this is where the temporary dungeon
  levels get made.  Also, this is the directory where some temporary dungeon
  levels get left as bones files (a description of previous games).
  
       example:       LEVELS=C:\games\hack
       default:       the HACKDIR directory
  
  This path can be absolute or relative to the HACKDIR directory.


  SAVE
  ----

  The directory where any saved games will be kept.
  
            example:       SAVE=save;n
            default:       the HACKDIR directory

  If your player name is JOE, and the SAVE variable is save, then your saved
  game will be in HACKDIR\save\joe.sav.  Normally, HACK will prompt you to
  put in the SAVE disk if it can't find a save file when you first start the
  game.  Appending ";n" to the save path results in *no* prompt for diskette
  insertion.  This is useful if you have a HardDisk (eg SAVE=;n means save
  the game in the HACKDIR directory and don't prompt).

  After restoring your saved game, HACK will prompt you to put the GAME disk
  in only if it can't find RECORD and COMSPEC.


  RAMDISK
  -------

  The drive and directory where your RAMdisk is.  This is where PC HACK
  creates its temporary dungeon files.

       example:       RAMDISK=D:
       default:       none

  When PC HACK runs out of storage on the RAMdisk it swaps the oldest files
  out to your LEVELS directory.  A RAMdisk is very effective in speeding up
  the game, especially for floppy-only systems.  To override the RAMDISK
  variable, use the -R command line option (see below).










  GRAPHICS
  --------

  Rather than use -, |, +, # for drawing the dungeon you can use any
  characters from the character set.  The GRAPHICS variable has 9 arguments
  that describe the the rooms and corridors.  The arguments are all integers
  in the range from 0 to 255 and correspond to the ASCII values of the
  characters you want to use.  The order of the variables is:

       vertical wall, horizontal wall, top left corner, top right corner,
       bottom left corner, bottom right corner, door, floor, corridor.

  The HACK.CNF file has examples of the use of this variable for both IBM
  graphics characters and DEC Rainbow line-drawing characters.

       example:  GRAPHICS = 179 196 218 191 192 217 206 250 176
       default:  decimal equivalents of:   | - - - - - + . #

  If you have a DEC Rainbow, you can use any characters from the ASCII
  character set and from the "line-drawing character set".  To use the line-
  drawing characters, take the decimal value of the character and add 128 to
  it.  This makes the value of the line-drawing characters lie between
  decimal 128 and 255 and tells PC HACK you want a line-drawing character.
  See HACK.CNF for a GRAPHICS variable suitable for DECs.

  DEC Rainbow users must also have the DECRainbow option (see below) in the
  OPTIONS line or the graphics characters will not be drawn correctly.


  OPTIONS
  -------
  Determines many smaller aspects of the game.  Options can be set before the
  game in the HACK.CNF file and most can be modified during the game with the
  'O' command.  You can change several options at a time by separating the
  options with commas.  Generally, 4 characters are sufficient to identify
  the option, so 'O sort' is the same as 'O sortpack'.

  There are two kinds of options:

       1) BOOLEAN, which can be either TRUE or FALSE.
          For example, "sortpack".  To turn it ON, do 'O sortpack' while
          playing or have an "OPTIONS=sortpack" line in your HACK.CNF file.
          To turn it OFF, do 'O !sortpack' or have "OPTIONS=!sortpack" in
          your HACK.CNF file.

       2) COMPOUND, which have one or more values.
          For example, "packorder".  To change the displayed ordering of the
          pack you might have an "OPTIONS=pack:%)!?" line in your HACK.CNF
          file.  The compound option "name" can only be set in HACK.CNF.
          Also, "name" should only be made up of characters A-Z, 0-9, and _
          and "name" will be truncated to 10 characters in the RECORD file.

  When playing, type 'O help<RETURN>' to get a little help on these options.
  The HELP file has a short description of all options.












  Options new to PC HACK 3.0
  --------------------------

       confirm
          Whether you want confirmation before hitting tame monsters.  This
          can be very helpful if you have the problem that you hit your dog
          and the shopkeepers by accident.  If you are blind or confused,
          though, you don't get this protection!  By default, TRUE.

       silent
          If TRUE, the bell is silent on input errors.  By default, FALSE.

       sortpack
          Whether your pack should be ordered by object class when listed in
          an inventory.  Otherwise your pack is listed alphabetically by
          inventory letter.  By default, TRUE.

       packorder
          The order to display your inventory in.  By default, ")[%?/=!(*0
          To change the order, use 'O pack:<new order>' where <new order> is
          a set of characters representing the various object types.  If you
          don't give a character for each object type, the unspecified object
          classes are put at the end of the <new order>.

       pickup
          If FALSE, you look at things you step on without picking them up.
          You always pick up gold if it is the only thing there.  Pickup is
          toggled between TRUE and FALSE with the '@' key.  By default, TRUE.

       rawio
          ==========  WARNING ==========
          Some computers (notably DEC Rainbows) will hang if rawio is TRUE.
          If this happens to your computer, remove the OPTIONS=rawio line in
          the HACK.CNF file.  This option can only be set in HACK.CNF.
          ==============================
          
          If TRUE, the input and output of your computer will be switched to
          "raw" mode.  The advantage of this is faster output and better
          handling of the special characters ^S and ^P.
          
          If FALSE, PC HACK will *not* put your terminal into "raw" mode.
          This causes a problem with the ^P command.  When ^P is held until
          it repeats, MSDOS may see a ^P in the input buffer and toggle
          `output to printer'.  However, if the printer is not ready, you'll
          get a DOS error about your printer.  If you get this error, type a
          ^PrtSc, then `I' (ignore) the error.  You may have to repeat this
          several times then use ^R to redraw the screen.  The "solution" is
          not to hold down the ^P key.
          
          By default, FALSE.

       IBMBIOS  (only for very IBM compatible computers)
          As HACK had its origins as a ROGUE-like game, the keys for movement
          are the same (keys yuhjklbn).  Some people may prefer to use the
          arrow keys on the numeric keypad.  Setting the IBMBIOS option TRUE
          tells PC HACK it can use BIOS calls to access the numeric keypad.










          With Numlock *ENABLED* the translation from numeric pad keys to
          game commands is:
          
               Numeric Pad               Command
                 7  8  9  -        u+l(y)   up(k)    u+r(u)  move(m)
                  \ | /                  \    |    /
                 4 -5- 6  +       left(h)   go(g)  right(l)  pay(p)
                  / | \                  /    |    \
                 1  2  3           d+l(b)   down(j)  d+r(n)
               Ins    Del      inventory(i)     wait(.)

          The letter in () is the corresponding game command letter. 'u+l'
          means up and left.  The numeric pad '7' is translated to the game
          command for moving one space up and left.  From the keyboard, you
          would enter the command ^H (control-H) to run left until you see
          something interesting.  From the keypad, doing `gh' (the keys 5
          then 4) has the same effect.  With Shift the commands become:

                       u+l(Y)  up(K)    u+r(U)    previous message(^P)
                             \    |   /
                      left(H)  nothing  right(L)  put on a ring (P)
                             /    |   \
                       d+l(B)  down(J)  d+r(N)
          selective inventory(I)      look(;)

          Capital `H' means run left until you hit something.
          
          With NumLock *DISABLED*, shifted '5' does the go(g) and unshifted
          '5' does nothing.  All other keys are translated the same.
          
          By default, FALSE.

       DECRainbow
          This option must be set if your computer is a DEC Rainbow and you
          want to use characters from the line-drawing character set to draw
          the dungeon.  By default, FALSE.


  Sample configurations
  ---------------------

  Hard disk system:

       # Lines that start with `#' are comments.
       # HACKDIR is where all the support files go.
       HACKDIR=c:\games\hack
       
       # The `;n' means to not prompt for insertion of the save diskette.
       SAVE=;n
       RAMDISK=d:
       OPTIONS=name:Bert-C, silent

  Notice that in this example, no LEVELS variable was set.  PC HACK will then
  default to the same directory as HACKDIR.  Bert-C means your name is "Bert"
  and you'll play as a cave-person.











  Two floppy systems:

  Make a bootable GAME disk (by using format /s) and set up your disks as:
       GAME DISK:     COMMAND.COM, ANSI.SYS, CONFIG.SYS, HACK.EXE, HACK.CNF,
                      RECORD, TERMCAP
                      (optionally) RUMORS, DATA, HELP, HH, AUTOEXEC.BAT
       LEVELS DISK:   empty (or with previous bones files)

  And your variables as:

       LEVELS=b:\
       SAVE=b:\
       RAMDISK=c:     (optional)
       OPTIONS=name:Gerty-T, silent, time

  Boot from the GAME disk in drive A whenever you want to play PC HACK.  The
  LEVELS disk will be on drive B.  If there is no save file you will be
  prompted to put in the disk with the save file on it.  This is necessary
  because the save file may get too large to store on the LEVELS disk.  When
  this happens you can give an alternative file name for the save file.  For
  this example, you could answer "A:GERTY.SAV" at the prompt and PC HACK will
  look for "A:GERTY.SAV" rather than "B:\GERTY.SAV".

  *IMPORTANT NOTES*  In order to save a game, PC HACK must have access to the
  save file and all the level files at the same time.  When restoring, only
  after your save file has been properly restored will PC HACK remove it.  PC
  HACK will prevent you from saving the game if there is insufficient room.

  If you want to keep saved games on different floppies (perhaps for several
  players), one method is to make a bootable GAME disk (by using format /s)
  for each person and set up your diskettes as:
       GAME DISK(S):  COMMAND.COM, ANSI.SYS, CONFIG.SYS, HACK.EXE, TERMCAP
                      HACK.CNF (personalized for each player),
                      (optionally) AUTOEXEC.BAT
       LEVELS DISK:   RECORD,
                      (optionally) RUMORS, DATA, HELP, HH
                      previous bones files
       SAVE DISK(S):  COMMAND.COM, save games

  And your variables as:

       HACKDIR=b:\
       # LEVELS defaults to the same directory as HACKDIR
       SAVE=a:\
       RAMDISK=c:     (optional)
       OPTIONS=name:Gerty-T, silent, time

  Boot from the GAME disk in drive A whenever you want to play PC HACK.  The
  LEVELS disk will stay in drive B.  You will be prompted to put in the SAVE
  disk (into drive A).  The copy of COMMAND.COM on the SAVE disks satisfies
  the COMSPEC requirement, since COMSPEC is still A:\COMMAND.COM.















  Command line options
  --------------------

       -u name or -uname
          Specifies the name to use other than the value of the OPTIONS name.
          If you wish, you can append -C, -W, -S, -F, -K, or -T to the name
          to select the type of character you want to be.
          
                 or: A> hack -u Terminator-T
          
          This means you will play as a Tourist with the name Terminator.

       -C, -W, -S, -F, -K, or -T
          Select the character you will be playing as.  Choices are:
               Cave-person, Wizard, Spelunker, Fighter, Knight, or Tourist.
          This option can be lower or upper case (except for -S).  Thus:
          
                 A> hack -T
          
          means get your name from the OPTIONS line in the HACK.CNF file, and
          play as a tourist.  If PC HACK can't get your name from the
          HACK.CNF file, you will be asked "Who are you?".

       -s [name]
          List the scores of the person with this name.  If the name is not
          given, uses the value of the OPTIONS name.  If the name is "all",
          list all scores in the record file.  You can erase the contents of
          the record file if you wish, but it should exist.

       -R
          This tells PC HACK to ignore the RAMDISK variable in HACK.CNF.
          This command is a hold-over from a previous version.

       Once you have started PC HACK, type a '?' to get help on the available
  commands.  Long help will show you the HELP file, short help will show you
  the HH file.  You can also print the HELP file and keep it as a reference.
  Other useful commands are `/' to describe things you see on the screen
  (uses the DATA file), and `\' to list the objects thus far discovered.




























  If the dungeon collapses ....
  -----------------------------

       On rare occasions PC HACK gets an error and quits with a collapsing
  dungeon.  This may be due to a disk error or lack of enough memory (or,
  perhaps a program bug).  Even though there may be "level.*" files left
  behind, the game cannot be recovered because the information that was in
  RAM is lost.  You can delete the old level.* files before playing a new
  game, or PC HACK will do it for you next game.  However, if you do leave
  the level.* files behind, PC HACK will void the next game you play, then
  remove the old files.  You will then be able to play again.

       If you can find a way to consistently repeat the error, please let me
  know so I fix it.

       


  Finally
  -------

       You are encouraged to copy this program and give it to your friends
  and post it to BBS's.  If you repost PC HACK, please use the archiving
  program `ARC' to put all the PC HACK files in an archive called
  PCHACK36.ARC.  If you want to report a bug in PC HACK, or you just want to
  drop me a line with a suggestion, please let me know at any of the
  following locations.  Make sure you mention which version you are playing!

       UUCP:     ...ucbvax!ucsfcgl!kneller
       ARPANET:  kneller@ucsfcgl.ARPA
       BITNET:   kneller@ucsfcgl.BITNET
       
       US MAIL:  D. G. Kneller
                 2 Panoramic Way #204
                 Berkeley, CA 94704

       
       Good Luck and Happy Hacking !!

























```
{% endraw %}

## HINTS.DOC

{% raw %}
```




  Hints for beginner HACKERS
  --------------------------

       HACK is a Dungeons and Dragons like game where the object is to
  descend into a dungeon to retrieve the Amulet of Yendor and return to the
  surface with it.  The Amulet is harder to retrieve in PC HACK 3.x because
  it's in the possession of the Wizard of Yendor (more on this later).


  Your character

       You can be one of several character classes when you start the game.
  Each character starts with different attributes (strength, hit points) and
  a different inventory of items (armor, weapons, etc).  You should try the
  different classes to see which is best for you.  The class most likely to
  survive the first few dungeon levels is probably the cave-person.  However,
  each class has its strong and weak points so you should try them all.


  The status line

       At the bottom of the screen is displayed information about your state
  of being.  You see the dungeon level you are on, how many hit points you
  have now (and will have when fully recovered), what your armor class is
  (the lower the better), your strength, experience level and the state of
  your stomach.  If you have the "time" option ON, you will also see the
  number of moves you have taken.


  The little dog

       You start HACK accompanied by a little dog (nameable with the 'C'
  command) who can be very useful to you -- try not to kill him!  Your dog
  will follow you -- if you carry tripe rations, he will follow you even
  better.  Sometimes he gets in your way.  Either move around him, or wait
  (with the '.' command) until he moves.  If you want him to follow you to
  the next dungeon level, he must be on a square next to you when you descend
  or ascend the stairs.  Sometimes he gets hungry and confused and hits you.
  You can feed him by throwing food at him with the 't' command.

       Your dog may get mad at you if you move to a different dungeon level
  without taking him with you.  Although he may not hit you, he won't help
  you either.  You'll have to appease him somehow.

       Your dog is useful for his ability to fight and to pick up and carry
  objects.  Of course, your dog might be a female, so change all "he" and
  "him" to "she" and "her".


  The dungeon

       The dungeon is a set of levels connected through stairways and
  trapdoors.  Each level is an interconnected system of rooms and corridors.
  The rooms have doors that lead to the corridors.  You must walk straight
  through a door -- no diagonals allowed.  Some doors (and some corridors)
  are hidden and you must search for them (with the 's' command).  Usually
  you must search several times, so use a repeat count (eg '5s').  Some rooms
  are special and have no doors or connecting corridors.  There is a way to
  get in, though, but you will have to experiment.






       The Wizard resides below the normal dungeon levels and can't be
  reached by only taking the stairs.

       Some rooms have special contents -- some are shops (but be aware that
  the shopkeeper expects payment (the 'p' command) for the items you get
  there) and some are zoos, full of interesting monsters.  Some rooms are lit
  and you can see the entire room, and some rooms are dark so you can see
  only the floor near you.


  Monsters

       To fight monsters, move to occupy the same square they are in.  You
  can also throw things at them, or zap them with wands.  It is best to leave
  some monsters alone.


  Objects

       The objects you find may be enchanted (that's good) or cursed (that's
  bad) or normal.  Cursed items are generally less effective than normal and
  also, once you have them on your body they are impossible to remove unless
  you remove their curse.

       You use different objects in different ways:

       )  WEAPONS are wielded ('w') or thrown ('t')
          Some weapons are more effective when used together.  For example,
          you get more effect by wielding a bow before throwing arrows.
          'w-' means to wield nothing; ie. be barehanded

       [  ARMOR is worn ('W') and taken off ('T')
          You can wear more than 1 piece of armor, but there are some
          restrictions on the combinations.  For example, you can only wear 1
          SUIT of armor, but you can always wear an elven cloak.

       !  POTIONS are quaffed ('q')

       =  RINGS are put on ('P') and removed ('R')
          You only can only wear 2 rings at a time, one on each hand.  Also,
          wearing rings makes you to use up more food, so use them sparingly.

       /  WANDS are zapped ('z')
          Some wands need a direction to be zapped in, but others do not.

       ?  SCROLLS are read ('r')

       (  TOOLS are applied ('A')
          For example, to use a whistle, you apply it.

       Initially you will not know what the potions, rings, wands or scrolls
  do until you use them.  They will have names like "XIXIXI".  Some of these
  objects are identified as soon as you use them (for example, a scroll of
  light causes a dark room to be lit).

       Other objects have no noticeable effect.  If it's not immediately
  obvious what a scroll or potion does the first time you use it, you may be
  asked to give it a name.  HACK does this so that if you have an idea about
  what the object does you can name it something appropriate so the next time
  you find it you will know something about it.  Whenever HACK asks for a






  name it is possible to use ^H or back-arrow to erase the previous
  character, ^U to erase the entire line, and <Esc> to quit without supplying
  a name.

       Using some objects gives a message like "You have a strange feeling
  for a moment, but it passes".  This means the object would have done
  something but couldn't do it now (for example, some scrolls affect your
  weapon, but if you're not wielding a weapon you'll get this message).

       The call command 'c' can be used to name individual objects, or all
  objects of a certain type.  When you do a 'c', HACK asks if you want to
  name an individual object.  Answer 'y' if you do and 'n' if you want to
  name all objects of the same type.  Then HACK will prompt you for the
  inventory letter of the object you want to name.  For example, if you put
  on a silver ring that has inventory letter 's' and notice your strength
  increases by two then you do:
  
       'c' 'n' 's' 'strength<return>'
            (call all objects with the same type as item 's' "strength").
  
       then 'c' 'y' 's' '+2<return>'
            (call individual inventory item 's' "+2")
  
  When you do an inventory you will see
  
       s) a ring called strength named +2
  
  The next time you pick up a silver ring it will be called strength so you
  will know what it does.  However, you will not know if it will increase or
  decrease your strength!  You will have to put it on to find out or you will
  have to identify it.


  Enchanting objects

         If you enchant an object, it will be better than it was before.
  Enchanting armor changes your armor class by 1 (eg. you could go from class
  7 to class 6 -- the less positive the number, the better the armor class,
  as in Dungeons and Dragons).  For weapons, the more positive the number,
  the better.  Thus a +2 mace is better than a +1 mace.  Some armor is better
  than others -- normal plate mail is better than normal ring mail.  Some
  weapons are better than others, but factors such as experience and luck
  determine whether you can effectively use the better weapons.


  Identifying objects

       The scroll of identify will help you to identify many objects, but
  generally you just have to use them and see what happens.  Occasionally a
  scroll of identify will have the ability to identify several objects.  So
  it is to your advantage to have several unidentified objects before you use
  an identify scroll.  When you read a scroll of identify HACK will ask you
  which classes of objects you want identified.  If, for example, you answer
  '=/' then for each ring in your pack you will be asked if you want to
  identify it.  After going through all rings, you will be asked about the
  wands.  If you do not identify any of these objects you will get back to
  the question about which classes of objects you want identified.









       The effect of rings may not be obvious, and cursed rings can't be
  removed unless you remove their curse.  Thus scrolls of identify are
  probably best used to identify rings.


  Scoring

       When the game ends, either by your death, when you quit, or if you
  escape from the caves, HACK will give you (a fragment of) the list of top
  scorers.  The scoring is based on many aspects of your behavior but a rough
  estimate is obtained by taking the amount of gold you've found in the cave
  plus four times your (real) experience.  Precious gems may be worth a lot
  of gold when brought to the exit.  There is a 10% penalty for dying.


  What is "--More--"?

       Whenever there is a lot of information for you to see, HACK waits for
  you to read it all by giving you a "--More--".  If the "--More--" is
  displayed on the normal response line (the top line that most messages are
  shown on), then HACK is waiting for you to enter ' ' (the space character)
  or <return> (the ENTER key).

       If HACK has printed out a list of information (eg. you did an 'i'
  command), then HACK will accept ' ' or <return> as well as the inventory
  letter of anything in the list.  Where is this useful?  An example is when
  you want to quaff a potion but you can't remember the letter of the potion
  you want.  You do 'q' then '?' and HACK gives you the list of all your
  potions followed by a "--More--" message.  If you type ' ' or <return> you
  get back to the prompt about which potion you want to quaff.  If you type
  the inventory letter of the potion, you immediately quaff that potion.

       If the screen is completely cleared to give you information (eg.
  you're looking at the help documentation with the '?' command), then there
  will be more than one screen full of information.  In this case, ' ' or
  <return> mean "show the next screen" and 'q' or ESC mean "stop".


  Finally

       Of course, there is much about HACK to discover yourself.  The RUMORS
  file provides helpful clues for playing.  Also, saved games have no special
  protection so you can save a game and make a copy of the savefile.  Then if
  you die trying something risky you can use the copy to restart your game
  from the same place.


















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0452

     Volume in drive A has no label
     Directory of A:\

    DATA             10035  12-18-86
    FILES452 TXT      1327  11-21-88   8:49a
    GO       BAT        38   6-05-87   8:50a
    GO       TXT       540  11-02-88   1:30p
    HACK     CNF      1852  12-18-86
    HACK     DOC     26402  12-18-86
    HACK     EXE    253143  12-18-86
    HELP              6992  12-18-86
    HH                3267  12-18-86
    HINTS    DOC     10861  12-18-86
    MANUAL   BAT       147  11-02-88   1:30p
    README            6374  12-18-86
    RECORD              53  10-27-88   9:35a
    RUMORS           25585  12-18-86
    TERMCAP            984   3-07-87   6:56p
           15 file(s)     347600 bytes
                            7168 bytes free
