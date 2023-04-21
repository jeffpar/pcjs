---
layout: page
title: "PC-SIG Diskette Library (Disk #2667)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2667/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2667"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ACTAEON.DOC

{% raw %}
```






















             ActaeOn V1.60 - The Hard Disk manager






















                                                Jon Clempner
                                                Nov 1990



                 ActaeOn V1.60 - The Hard Disk manager

                          COPYRIGHT 1989,90

                                  by

                             Jon Clempner.

                         ALL RIGHTS RESERVED

    ActaeOn is a Shareware program, it is NOT free software. You
    are granted a limited licence to use ActaeOn for 30 days, for
    evaluation purposes only. Use beyond this evaluation requires
    you to register this software. See section 9 for registration
    details. See the file SHAREW.TXT for a definition of the
    Shareware concept.

    The program and the associated documentation on disk may be
    freely distributed on the following conditions

        No changes whatsoever are made to the program or its
        documentation.

        No charge is made for its distribution (exceptions will
        be made for authorised disk duplication services - No
        charge will be made for this authorisation but I need to
        know who is distributing it so that I can send out
        updates - Apply in writing to the address at the end of
        this document).


                           LIMITED WARRANTY

        For registered users, and users who have obtained ActaeOn
        directly from the author only, the author warrants that
        the distribution disk is an accurate reproduction of the
        software. In the event of any defect in the duplication
        process the author will replace the disk, as long as it
        is returned within 30 days of receipt.

        No other warranty, implicit or otherwise, including but
        not limited to merchantability or fitness for any
        particular purpose, is made. Under no circumstances will
        the author be liable for any loss or damage suffered by
        any user arising out of the supply, use, or operation of
        this software, whether such loss or damage be direct,
        consequential or otherwise.


    ActaeOn V1.60






                             Contents
                             ========


                         1. Introduction

                         2. Getting Started

                         3. Reference

                         4. Using ActaeOn with a Mouse

                         5. User Defined Commands

                         6. System Requirements

                         7. Future Enhancements

                         8. Acknowledgements

                         9. Registration

                        10. Association of Shareware
                            Professionals

    ActaeOn V1.60


    1. INTRODUCTION

    More and more people are using hard disks. While they have a
    number of advantages over floppy disks, their very size can
    cause problems when you want to find a particular file. It
    was this, coupled with the fact that MS-DOS is not the most
    friendly of operating systems that prompted the design of
    ActaeOn.

    ActaeOn is a hard disk management program. It is designed to
    make life easier, by having a menu interface to most of the
    DOS commands and being able to see your directory structure
    at a glance.

    In addition ActaeOn provides a number of facilities which are
    either not possible or are extremely difficult to do using
    native DOS.




    2. GETTING STARTED

    Before you do anything else you should look at the READ.ME
    file on your distribution disk. This contains any last minute
    amendments to this document and a list of changes since the
    last release. You may read this file by using the DOS command
    TYPE A:READ.ME or some equivalent utility.

    The first thing to do is to copy all the files on your
    distribution disk onto your hard disk. To gain most benefit
    from ActaeOn it is recommended that you place it in a
    directory that is on your PATH (See your DOS manual for
    details).

    Having done this just type ACTAEON followed by the ENTER key.
    If you wish to look at a disk other than the current one,
    then just type the drive letter after ACTAEON. eg ACTAEON D:

    All the cursor control keys, including the <HOME>, <END>,
    <PGUP> and <PGDN> keys may be used to move about the
    directory listing.

    You may obtain context sensitive help at any time by pressing
    the F1 key.


    ActaeOn V1.60

    3. REFERENCE

    3.1 Screen Layout

    The main screen display is divided into 6 main sections


     A. Current Path
   +----------------------------------+---------------+
   | B.                               | C. Disk Info  |
   |                                  |               |
   |                                  +---------------+
   |                                  | D.            |
   |      Directory Window            |               |
   |                                  |  File Window  |
   |                                  |               |
   |                                  |               |
   +----------------------------------+---------------+
   | E. No of Tagged Files            | F. Dir Info   |
   +----------------------------------+---------------+
    G. Commands


    A. Current Path
    This shows the full path name of the currently highlighted
    directory.

    B. Directory Window
    This shows a graphical display of the directory structure on
    the currently logged disk. When in directory mode a highlight
    bar shows the current directory. You may scroll up and down
    in this window by using the cursor control keys.

    C. Disk Info
    This shows the currently logged drive, its volume name, the
    total size of the disk and how much free space is left.

    D. File Window
    This shows a listing of all files in the current directory.
    When in file mode, a highlight bar shows the currently
    selected file. The display may be scrolled up and down by
    using the cursor control keys (or a mouse if you have one).

    E. No of Tagged Files
    This shows the number, and total size of all tagged files.

    F. Directory Info
    This shows the number of files and the total size of the
    currently selected directory.

    G. Commands
    These two lines show all the commands which are available.
    The commands shown will depend on whether you are in file
    mode or Directory mode.


    3.2 COMMANDS

    The commands are displayed on the last two lines of the
    screen. To select the command simply press the letter that is
    highlighted and in capitals.

    A number of the commands require further information (for
    example when requesting Find file you will need to enter the
    file to search for). In these cases a window will pop up for
    you to enter the data. You may press the <ESC> key to abandon
    these commands.

    Most commands, particularly those which may alter the
    contents of your disk, ask you for confirmation before the
    command is executed.

    The commands are split into 5 basic groups

     a) General Commands
     b) Directory mode commands
     c) File mode commands
     d) Control commands
     e) User defined commands

    The general commands are equally applicable to both Directory
    mode and File mode. Control commands become visible when you
    press down the <CTRL> key. User defined commands become
    visible when you press down the <ALT> key.

    Only the commands appropriate to the mode you are in are
    displayed on the command line.


    a) GENERAL COMMANDS

    These commands may be used in both Directory mode and File
    mode. Where commands exist in both Directory mode and File
    mode, but which have slightly different meanings depending on
    the mode, they are described in the appropriate section.


    QUIT -

    This exits the program. This command may also be activated by
    pressing the <ESC> key.

    CONFIGURE

    This option enables you to configure ActaeOn to suit your
    requirements. This includes the ability to change the screen's
    colors, the number of lines in the display (on EGA and VGA
    screens only), whether the bell is on or off, and the sort
    order of the files. It also allows you to assign your
    favorite utilities to ALT key combinations.

    On selecting this option a menu will pop up with the
    configuration options. You can select the option you are
    interested in by moving the highlight bar with the cursor
    keys, double clicking on the option with the mouse, or typing
    the first letter of the command and then pressing <ENTER>.

    Pressing F1 at any stage, either while an option is
    highlighted or while your are within an option, will give you
    full context sensitive help.

    For details of how to integrate your own commands into
    ActaeOn see Chapter 5.

    FIND FILE -

    This searches the entire disk for a specified file. A window
    pops up for you to enter the filename and extension which you
    wish to search for. You may use the '*' character as a
    wildcard. For example if you wish to search for a file which
    starts with the letters ACT and you don't care what the
    extension is then enter ACT* in the filename and * in the
    extension.

    GLOBAL

    This toggles the special form of File mode. All the files on
    the currently logged disk are sorted in to alphabetical
    order, regardless of the directory that they are in.

    HELP

    This command displays help information relevant to the mode
    you are in. For example when in Directory mode, only those
    commands that you may use are displayed. You may also obtain
    help by pressing the F1 function key.

    For help to be displayed the file ACTAEON.HLP must be in the
    same directory as the main program file.


    INFORMATION -

    This command displays the following information :

        The amount of free memory
        Number of files on the disk
        Number of directories on the disk

        The version of ActaeOn and the release date

        The amount of memory reported by DOS
        The amount of EMS memory (if installed)
        The number of serial  ports
        The number of logical drives
        The number of floppy drives
        The version of DOS
        Whether or not a maths co-processor is present
        The type of CPU in your machine

        The serial number of ActaeOn

    LOG DISK -

    This enables you to change the currently logged disk. A
    window will pop up with a list of all the drives installed on
    your machine.

    You can select the drive to log by simply entering the drive
    letter or positioning the highlight bar over the required
    drive with the cursor control keys and pressing ENTER.


    SHELL TO DOS -

    This temporarily exits ActaeOn allowing you to enter DOS
    commands at the familiar C> prompt. When you have finished,
    typing EXIT will return you to ActaeOn.

    Shell does not re-read the directory when you return to
    ActaeOn, nor does it release any memory. If the applications
    you intend to run require more memory then you should use
    Ctrl-Shell (see control commands).


    VOLUME LABEL -

    This command changes the disks volume label. A pop-up window
    will appear for you to enter the new volume label.


    WINDOW -

    This changes the currently active window. For example if you
    are in Directory mode (ie the highlight bar is in the
    directory window) then the program will switch to File mode
    and visa-versa. The TAB key performs the same effect.


    XPLORE

    This command searches the entire disk for a text string
    entered by yourself. The case is ignored when searching for
    the string.

    The number of files searched is displayed as it reads them.
    You can abort the command at any time by pressing the escape
    key.


    ZOOM

    When entering this mode, the file display is expanded to fill
    the entire screen in three columns. All of the file mode
    commands are available in Zoom Mode.

    Pressing the ENTER key toggles between Zoom Mode, Directory
    Mode and File Mode.



    b) DIRECTORY MODE COMMANDS

    The following commands are only applicable in directory mode.
    Directory mode is indicated by the highlight bar being
    visible in the directory window.


    DELETE DIRECTORY

    This command deletes the highlighted directory. A window pops
    up to confirm that you wish to proceed with the deletion. The
    directory must have no files or subordinate directories in it
    and must not be the root directory.


    NEW DIRECTORY

    This command creates a sub-directory in the currently
    highlighted directory. A window pops up for you to enter the
    name of the new directory.


    TAG FILES

    This tags all the files in the currently highlighted
    directory. See control commands for commands which operate on
    all tagged files.


    UNTAG FILES

    This command untags all the files in the currently
    highlighted directory.



    c) FILE MODE COMMANDS

    The following commands are only applicable in File mode. File
    mode is indicated by the highlight bar being visible in the
    file window.


    ATTRIBUTES -

    This command displays the file attributes of the currently
    highlighted file and the date and time of the last amendment.

    Press any key to return to the file mode display.

    COPY FILE -

    This copies the currently highlighted file. The system will
    display a pop up window for you to enter the drive to which
    the file is to be copied to. If the drive is the currently
    logged drive then you should just position the highlight bar
    on to the directory which you wish to copy to. If the drive
    is not the currently logged drive you should enter the full
    path name of the destination directory.


    DELETE -

    This command deletes the currently highlighted file. A window
    will pop up asking you for confirmation before the deletion
    is actioned.


    EDIT FILE -

    This command edits the currently highlighted file. The editor
    uses Wordstar type commands which are as follows :

        Exit Editor                     Ctrl-K D
        Top of Block                    Ctrl-Q B
        Bottom of Block                 Ctrl-Q K
        Jump to marker 0..3             Ctrl-Q 0 .. Ctrl-Q 3
        Set marker 0..3                 Ctrl-K 0 .. Ctrl-K 3
        New Line                        Ctrl-M
        Insert Line                     Ctrl-N
        Delete word                     Ctrl-T
        Delete to end of line           Ctrl-Q Y
        Delete line                     Ctrl-Y
        Find                            Ctrl-Q F
        Find and replace                Ctrl-Q A
        Find next                       Ctrl-L
        Begin Block                     Ctrl-K B
        End Block                       Ctrl-K K
        Copy Block                      Ctrl-K C
        Move Block                      Ctrl-K V
        Delete Block                    Ctrl-K Y
        Print Block                     Ctrl-K P
        Toggle Wordwrap                 Ctrl-O W
        Set right margin at cursor      Ctrl-O R

    Commands such as Read Block, Find etc can be cancelled by
    typing Ctrl-U

    The editor will only edit files up to 64Kb and requires that
    amount of free memory.

    You may display the above list of commands while in the
    editor by pressing the F1 function key.

    MOVE FILES -

    This moves the currently highlighted file. The system will
    display a pop up window for you to enter the drive to which
    the file is to be moved to. If the drive is the currently
    logged drive then you should just position the highlight bar
    on to the directory which you wish to move to. If the drive
    is not the currently logged drive you should enter the full
    path name of the destination directory. This command is the
    equivalent of copying the file and then deleting the
    original.


    RENAME FILE

    This command renames the currently highlighted file. A window
    will pop up asking you for the new name of the file. The new
    name must not contain any wildcard (* or ?) characters


    TAG FILE

    This command will tag the currently highlighted file. See
    Control Commands for commands which operate on all tagged
    files.


    UNTAG FILE

    This command untags the currently highlighted file.



    d) CONTROL COMMANDS

    Control commands are accessed by holding down the <CTRL> key.
    This will show you which commands are available.


    COPY

    This command copies all tagged files. The system will display
    a pop up window for you to enter the drive to which the files
    are to be copied to. If the drive is the currently logged
    drive then you should just position the highlight bar on to
    the directory which you wish to copy to. If the drive is not
    the currently logged drive you should enter the full path
    name of the destination directory.


    DELETE

    This command deletes all the tagged files. A window will pop
    up asking you for confirmation and then ActaeOn will ask you
    wether you wish to confirm each deletion individually. It you
    say No then all the tagged files will be deleted without
    further prompting. If you say Yes, then ActaeOn will ask for
    confirmation before deleting each file.


    FIND (AGAIN)

    This command repeats the last search criteria and will find
    the next file matching the name and extension entered.


    MOVE

    This command moves all tagged files. The system will display
    a pop up window for you to enter the drive to which the files
    are to be copied to. If the drive is the currently logged
    drive then you should just position the highlight bar on to
    the directory which you wish to copy to. If the drive is not
    the currently logged drive you should enter the full path
    name of the destination directory. This command is equivalent
    to copying all tagged files and then deleting the originals.


    SHELL TO DOS -

    This temporarily exits ActaeOn allowing you to enter DOS
    commands at the familiar C> prompt. When you have finished,
    typing EXIT will return you to ActaeOn.

    Ctrl-Shell re-reads the directory when you return to ActaeOn,
    and it releases as much memory as possible. If the
    applications you intend to run require more memory then you
    should use the normal Shell (see General commands).


    TAG

    This command prompts for a file filter and then tags all
    files on the disk matching the filter. For example if you
    wish to tag all files ending with a BAK extension, enter
    CTRL-T and then enter * for the filename and BAK for the
    extension.


    UNTAG

    This command untags either all files on the disk (if in
    Directory Mode) or all files in the current directory.  4.
    Using ActaeOn with a Mouse

    Although a mouse is not required to use ActaeOn it can make
    its use considerably easier.

    You may select a directory or file by simply positioning the
    mouse cursor over the object in question and clicking on it
    using the left mouse button, regardless of wether you are in
    directory mode or file mode. You can scroll the displays by
    dragging the scroll bar on the right of either window. To do
    this position the mouse cursor on the scroll bar and hold
    down the left mouse button. Move the mouse in the required
    direction and then release the button.

    Files may be tagged by positioning the mouse cursor on the
    file and pressing both mouse buttons together (or the centre
    button if you have a three button mouse)

    You may also select commands by clicking on them. If you wish
    to access Control commands then first click on CTRL (top
    right hand corner of the screen) and then click on the
    appropriate command.

    In general the Left mouse button is treated as the Enter key
    and the right button is treated as the Escape key.


    5. User Defined commands

    In ActaeOn you can assign you own commands to ALT key
    combinations. These are displayed, like other internal
    commands when you press down the ALT key.

    To define your own commands, go to the Configuration menu and
    select the Add command option.

    When you select this option a window will pop up which will
    allow you to enter details about the command. This includes
    the title of the command to be displayed in the <ALT> menu,
    the command itself and any parameters to the command.

    The parameter definition can include special characters to
    substitute the currently highlighted file, directory, cause a
    window to pop up for the user to enter details etc. Context
    sensitive help on each field is available.

    User defined commands are stored in a Command Definition File
    called ACTAEON.CDF

    An explanation of each field follows:


    COMMAND TITLE

    This is the name shown when the <ALT> key is pressed down. It
    must be 10 characters or less and the first character (which
    is used to select the command) must be unique. When you enter
    a command title which has already been used, the details
    are filled in the remaining fields.

    COMMAND

    This is the file name, including extension, of the command.
    You should generally enter the full pathname of the command,
    but if you don't then the command must either be in the
    current DOS directory, the directory from which ActaeOn was
    loaded or on the DOS PATH.

    PARAMETERS

    This field should contain the parameters which are to be
    passed to the command. In addition to normal text you may
    enter Special character sequences which will cause, for
    example the currently highlighted field, directory etc to be
    substituted.

    The following character sequences may be used in the
    parameter definition

    %F
    This is replaced by the currently highlighted file including
    directory

    %D
    This is replaced by the currently highlighted directory.

    %Pnn"text"
    This causes the user to be prompted for a field of length nn
    with "text" as the window title.


    %L
    This is replaced by the currently logged drive letter and
    colon

    %E
    This is substituted with the currently highlighted file's
    extension

    %N
    This is substituted with the currently highlighted file's
    name (no directory).


    HOME DIRECTORY

    ActaeOn will change the current DOS directory to the
    directory entered here before running the specified command.

    On return to ActaeOn, the DOS directory will be restored to
    that value it was when ActaeOn was first started.

    PAUSE

    This entry tells ActaeOn wether to wait for the user to press
    a key before redisplying the ActaeOn screen when the users
    command has finished.

    RE-READ

    This entry tells ActaeOn wether to re-read the disk after
    finishing the user's command. It the entry is Y, then more
    memory is freed up for the user's command and the directory
    display is guarenteed to reflect any changes made to the
    directory structure while executing the command.

    If your command does not require the memory and does not
    alter the disk (such as LIST.COM) then this should be set to
    N as re-entry to ActaeOn is much faster.


    6. System Requirements

    The program has been designed to run on IBM PC's and 100%
    compatibles.

        MS-DOS V3.01 or later

        256Kb of free memory

        A Hard Disk is recommended


    In addition ActaeOn will take advantage of the following
    hardware if it is available

        Microsoft Compatible mouse

        EGA or VGA Graphics card

        EMS memory (for overlays)

    There must be no more than 255 directories and 4096 files on
    any given disk.

 

    7. Future Enhancements

    ActaeOn is under constant development.

    Although no commitment can be made as to which features will
    appear in which future release, the following facilities are
    being actively considered for future versions of ActaeOn.

        Change file attributes

        Format Disk (Floppies only)

        Undelete File

        Print Directory

        View File (Look inside archives, Hex dump etc)

        Logging multiple drives

        Sorting directories

    If you have any suggestions for enhancements I would be glad
    to hear them.

    A release history may be found in the READ.ME file


    8. Acknowledgements

    IBM is a trademark of International Business Machines

    MS-DOS is a trademark of MicroSoft Inc.

    Turbo Pascal is a trademark of Borland International Inc.

    Wordstar is a trademark of Micropro International
    Corporation.


    All other trademarks are acknowledged


    The code to amend Volume Labels was written by Andy Dingley

    My thanks to the following who beta tested ActaeOn

        Graham Macleod
        James S Hooton
        Andy Dingley
        Mark Chamberlain
        Mel Pullen
        Ian Bevan


    9. Registration

    Registered users of ActaeOn will receive a laser printed
    manual and an advance copy of the next major release of the
    software. In addition Technical Support will be provided by
    post, on CIX the Compulink Information Exchange (userid
    jonc), and on CompuServe (userid 100013,57). Telephone
    support is not currently available.

    The registration cost is 34.95 dollars. Registration in
    dollars can only be accepted by Visa/Master Card. Details
    should be sent to :

        Jon Clempner
        20, Norleigh Road,
        Northenden,
        Manchester
        M22 4AZ
        ENGLAND

    Or via CompuServe (100013,57)

    The cost includes Despatch by surface mail and Packing, a
    printed manual and a copy of the next major release of the
    software when it becomes available. In addition bug clearance
    releases may be sent out, free of charge, at the discretion
    of the author.

    Site Licence agreements are available, contact the author for
    more details.

    Please let me know the current version and Serial number.
    Both of these may be found in the Information display.

    Software will be distributed on 5 1/4 inch 360Kb disks; 3 1/2
    inch 720Kb disks are available for an extra charge of 2
    dollars

    For Air Mail delivery please add 5.00 dollars

    An order form (ORDER.FRM) which will print on any printer is
    provided for your convienience.
    

    10. Association of Shareware Professionals

              _______
         ____|__     |               (tm)
      --|       |    |-------------------
        |   ____|__  |  Association of
        |  |       |_|  Shareware
        |__|   o   |    Professionals
      -----|   |   |---------------------
           |___|___|    MEMBER


    Jon Clempner is a member of the Association of Shareware
    Professionals (ASP). ASP wants to make sure that the
    shareware principle works for you. If you are unable to
    resolve a shareware-related problem with an ASP member by
    contacting the member directly, ASP may be able to help. The
    ASP Ombudsman can help you resolve a dispute or problem with
    an ASP member, but does not provide technical support for
    members' products. Please write to the ASP Ombudsman at P.O.
    Box 5786, Bellevue, WA 98006 or send a Compuserve message via
    easyplex to ASP Ombudsman 70007,3536




```
{% endraw %}

## FILE2667.TXT

{% raw %}
```
Disk No: 2667
Disk Title: ActaeOn
PC-SIG Version: S1

Program Title: ActaeOn
Author Version: 1.60
Author Registration: $39.95
Special Requirements: 512K RAM, and a hard drive.

ACTAEON is a hard disk manager that replaces the DOS command line with a
graphical, mouse-driven interface.  ACTAEON includes a wide array of
features such as context-sensitive Help and a text editor.

ACTAEON makes the chore of hard disk management easy with a mouse-driven
point-and-shoot interface.  With the standard views of the directory
tree and the file directory, ACTAEON provides functions such as File
Search and Text Search in a selected set of files.

Display the tree and file directories in scrollable windows and select
files using the mouse or the keyboard.  Also provided are
context-sensitive Help for all commands and a Wordstar-like text editor.

ACTAEON supports all video modes and makes use of EGA/VGA if present.
EGA/VGA users can also select the 43/50 line display modes.  ACTAEON can
also use Expanded Memory, if present.

ACTAEON is a newcomer in the world of hard disk managers that has
created its own niche with a fresh interface and an accessible set of
functions.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## SHAREW.TXT

{% raw %}
```

    DEFINITION OF SHAREWARE

    Shareware distribution gives users a chance to try software
    before buying it. If you try a Shareware program and continue
    using it, you are expected to register. Individual programs
    differ on details -- some request registration while others
    require it, some specify a maximum trial period. With
    registration, you get anything from the simple right to
    continue using the software to an updated program with
    printed manual.

    Copyright laws apply to both Shareware and commercial
    software, and the copyright holder retains all rights, with a
    few specific exceptions as stated below. Shareware authors
    are accomplished programmers, just like commercial authors,
    and the programs are of comparable quality. (In both cases,
    there are good programs and bad ones!) The main difference is
    in the method of distribution. The author specifically grants
    the right to copy and distribute the software, either to all
    and sundry or to a specific group. For example, some authors
    require written permission before a commercial disk vendor
    may copy their Shareware.

    Shareware is a distribution method, not a type of software.
    You should find software that suits your needs and pocket,
    whether it's commercial or Shareware. The Shareware system
    makes fitting your needs easier, because you can try before
    you buy. And because the overhead is low, prices are low
    also. Shareware has the ultimate money-back guarantee -- if
    you don't use the product, you don't pay for it.

    DISCLAIMER - AGREEMENT

    Users of ActaeOn must accept this disclaimer of warranty:

    "ActaeOn is supplied as is. The author disclaims all
    warranties, expressed or implied, including, without
    limitation, the warranties of merchantability and of fitness
    for any purpose. The author assumes no liability for damages,
    direct or consequential, which may result from the use of
    ActaeOn."

    ActaeOn is a "shareware program" and is provided at no charge
    to the user for evaluation. Feel free to share it with your
    friends, but please do not give it away altered or as part of
    another system. The essence of "user-supported" software is
    to provide personal computer users with quality software
    without high prices, and yet to provide incentive for
    programmers to

    

    continue to develop new products. If you find this program
    useful and find that you are using ActaeOn and continue to
    use ActaeOn after a reasonable trial period, you must make a
    registration payment of 34.95 US dollars to Jon Clempner. The
    34.95 US dollars registration fee will license one copy for
    use on any one computer at any one time. You must treat this
    software just like a book. An example is that this software
    may be used by any number of people and may be freely moved
    from one computer location to another, so long as there is no
    possibility of it being used at one location while it's being
    used at another. Just as a book cannot be read by two
    different persons at the same time.

    Commercial users of ActaeOn must register and pay for their
    copies of ActaeOn within 30 days of first use or their
    license is withdrawn. Site-License arrangements may be made
    by contacting Jon Clempner.

    Anyone distributing ActaeOn for any kind of remuneration must
    first contact Jon Clempner at the address below for
    authorization. This authorization will be automatically
    granted to distributors recognized by the Association of
    Shareware Authors - UK (ASA-UK) or the Association of
    Shareware Professionals (ASP) as adhering to its guidelines
    for shareware distributors, and such distributors may begin
    offering ActaeOn immediately (However Jon Clempner must still
    be advised so that the distributor can be kept up-to-date
    with the latest version of ActaeOn.).

    You are encouraged to pass a copy of ActaeOn along to your
    friends for evaluation. Please encourage them to register
    their copy if they find that they can use it. All registered
    users will receive a copy of the latest version of the
    ActaeOn system.


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
Program      : ActaeOn - The Shareware Hard Disk Manager
Version      : 1.60
Release date : 12th November 1990

Description  : ActaeOn is a Hard Disk Manager with a point and
               shoot interface to DOS. In addition to most DOS
               commands ActaeOn has many other features
               including:
                o  Graphical representation of directory tree
                o  Find file/Find string within files
                o  Mouse support with scroll bars
                o  Full context sensitive help
                o  Text Editor
                o  Multiple file Copy/Move/Delete
                o  Add you own commands
                o  43/50 line support on EGA/VGA

Author       : Jon Clempner
Contact      : Mail       - 20, Norleigh Road
                            Northenden
                            Manchester
                            M22 4AZ
                            England

               Phone      - +44 61 998 8592
               CompuServe - 100013,57

System       : IBM PC or compatable, DOS 3.xx or later, 512Kb RAM
               Hard Disk recommended, will support EMS, Mouse,
               EGA/VGA

Registration : $39.95, Visa/MC accepted

Benefits     : Air Mailed latest release, Support, Manual

Vendors who are not a corporate member of the Association of
Shareware Authors - UK or vendor members of the Association of
Shareware Professionals require written authorisation to
distribute. ASA-UK and ASP vendors are asked to let me know so
that I can send the latest release.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2667

     Volume in drive A has no label
     Directory of A:\

    VENDOR   DOC      1586  11-18-90   1:59a
    ACTAEON  EXE     62256  11-18-90   1:59a
    ACTAEON  HLP     15789  10-11-90   1:59a
    ACTAEON  OVR     91342  11-17-90   1:59a
    READ     ME       7455  11-13-90   1:59a
    SHAREW   TXT      4336  10-20-90   1:59a
    ORDER    FRM      2287  11-18-90   1:59a
    ACTAEON  DOC     28560  11-18-90   1:59a
    GO       BAT        28  10-04-90   5:21a
    GO       TXT      1001   7-16-91  12:19p
    FILE2667 TXT      1310   7-16-91   8:52a
           11 file(s)     215950 bytes
                          100352 bytes free
