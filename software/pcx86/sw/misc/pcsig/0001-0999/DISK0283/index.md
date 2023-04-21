---
layout: page
title: "PC-SIG Diskette Library (Disk #283)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0283/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0283"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 15"

    This disk contains a wide variety of different file and system tools.
    DTK and CWEEP13 are powerful file handlers.  DOCUFILE lets you develop
    callable help screens for your programs, RAM is a nice RAM-disk program,
    installable as a device driver, (exercise caution when using with other
    RAM-resident software, and it will serve you well).  Other utilities
    give Epson owners good letter-quality print, generate interrupts on
    demand, find files, and more.
    
    CWEEP 2.31a is a file-manager similar to the CP/M program SWEEP which
    lets the user move through a list of files, tag ones to be worked on,
    and then copy, delete, or rename them.  It will also allow the user to
    view files, make and remove directories.
    
    A very fast, single keystroke way to work through a directory of files,
    copying, viewing, and deleting them.  Has a protected copy feature,
    which will warn the user if a file of the same name is about to be
    over-written.  After a file is copied, it will (optionally) be re-opened
    and a CRC done to verify the copy.
    
    Special Requirements:  None.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  DTK $10.00.
    
    File Descriptions:
    
    -------- ---  KWSEARCH by Patrick Teti
    KWSEARCH DOC  Documentation for KWSEARCH (13K).
    KWSEARCH EXE  Copies text using search criteria.
    -------- ---  3 Utilities by John White
    INT      COM  Program interrupt.
    INT      DOC  Documentation for INT.
    INT      A    Part of INT.
    -------- ---  Famous Sweep program from CPM
    CWEEP    DSC  Introductory text file.
    CWEEP    EXE  Main program file.
    CWEEP    TXT  Manual.
    -------- ---  Directory Toolkit
    DTK      DOC  Documentation for DTK (8K).
    DTK      EXE  Sort directory, change attributes, etc.
    MAKERAM  BAT  Batch file to install RAM.
    MAKEINT  BAT  Batch file to install INT.
    FFIND    DOC  Documentation for FFIND.
    FFIND    C    Part of FFIND.
    FFIND    EXE  Finds files by scanning for specific argument.
    INT_PORT DOC  Additional Documentation for INT.
    SETRAM   EXE  Sets up RAM.
    RAM      DOC  Documentation for RAM.
    RAM      A    Part of RAM.
    RAM      SYS  RAM drive installer.
    -------- ---  Docufile
    KILLER   EXE  Deletes files.
    AUTOEXEC BAT  Batch file to diskcopy.
    README   BAS  BASIC version of README.TXT.
    README   TXT  Documentation for DOCUFILE.
    DOCUFILE BAS  Creates BASIC program of text file.
    CATALOG  EXE  Demonstration of multiple file searcher.
    HELP     BAT  DOCUFILE help screen generator.
    DOCUFILE BAT  Batch file to bring up DOCUFILE in BASIC.
    -------- ---  Letter Quality print routine
    LQ       COM  Letter quality print on Epson MX printer.
    LQ       DOC  Documentation for LQ (9K).
    SETRAM   C    Part of SETRAM.EXE.
    MESSAGE  EXE  Displays message at bootup.
    LABELS   FIL  Part of LABELS.EXE.
    LABELS   DOC  Documentation for LABELS.EXE.
    LABELS   EXE  Envelope label making program.
    MESSAGE  DOC  Documentation for MESSAGE.EXE.
    MESSAGE  FIL  Part of MESSAGE.EXE.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CWEEP.TXT

{% raw %}
```
                    CWEEP  --  A SWEEP-like program for MS-DOS        Page 1


                                   By Gary M. Berg

                                 3707 Silver Oak St
                                Dayton, Ohio   45424

                                         or
                                 c/o Chemineer Inc.
                                    P.O. Box 1123
                                  Dayton, OH  45401
                                   (513) 454-3213


                                 C.I.S. # 70106,1624

                                   Date: 17-Jan-88

                Copyright (C) 1984-87 by Gary M. Berg/Chemineer Inc.


                                     Disclaimer

           This software has been released to the public domain by the
        author.  All commercial rights are retained by the author.  It may be
        freely passed on to others as long as no charge is made except for
        possibly a small copying charge.  Although this software is thought to
        work as described, no warranty of fitness is made for this software.



           CWEEP is a program which provides the same capabilities for the
        MS-DOS user as the program SWEEP does for the CP/M user.  It provides
        the ability to take a sorted list of the files on a disk and move
        forward and backward in the list.  Files can be viewed, copied,
        deleted individually and in groups.

           CWEEP is invoked at the MS-DOS command line by:

                          CWEEP {d:}{path}{afn} {-sw} {-sw}

          {d:}      an optional drive letter, the default being the currently
                    logged drive

          {path}    an optional path.  Valid only for the 2.x version.

          {afn}     an optional ambiguous filename of what files to look at,
                    the default begin "*.*" (in the currently logged
                    directory under DOS 2.x).

          {-sw}     an optional switch or switches.  Switches begin with a
                    '-' character.

                    CWEEP  --  A SWEEP-like program for MS-DOS        Page 2

           CWEEP will then look up all files matching the specified files,
        and prompt with the first file name.  At this point, commands can be
        entered to move around in the list, tag files, copy files, etc.  The
        display on the next page was generated by starting CWEEP with no
        filename specified:


             CWEEP

                          CWEEP version 2.31a as of 17-Jan-88
                 Copyright (C) 1984-87 by: Gary M. Berg/Chemineer Inc.

           sp/cr Advance to next file          <O>  Output list (-+ only)
            [A]  Again tag '#' files (-+)      [P]  Protected mass copy
            [B]  Back up one file              <Q>  Query files (-+ only)
            [C]  Copy file to drive (-)        [R]  Rename a file
            [D]  Delete a file                 [S]  Sort directory
            [E]  Erase (un)tagged files        [T]  Tag a file
            [F]  Free space on a drive         [U]  Untag a file
            [H]  Hexadecimal display (-+~)     [V]  View a file (-+~)
            [I]  Inquire file size/time (-+)   [W]  Wildcard file tag (-+)
            [J]  Jump to a named entry         [X]  Exit program
            [L]  Log new drive/filename (-+)   [Y]  Modify attributes (-+)
            [M]  Mass copy tagged files        [Z]  Change subdirectory(-)
            [N]  Calculate CRC (-+)            [!]  Goto DOS
          [?],[/]Print this message            [=]  Goto settings menu

          [-?], [+?] other help messages, [@] for printer, [~] for search

           55 files, using 1284128 bytes (1283K) -- 1837056 bytes free (1794K)
                Volume label: <Data>         Path = 'D:\CWEEP\'

          1. D:CWEEP   .TXT 03-Nov-1987    32K =[ ]


           The files matching what was specified (in this case *.*) are
        sorted in alphabetic order, and the first file in the list is listed
        on the screen with the date and the size rounded up to the nearest 1K. 
        In addition, the amount of space free and the amount of space used in
        the selected files is displayed.

           Note that in the display the period "." following the file
        sequence number on the left will display as: "r" if the file is read-
        only, "h" if it is hidden, and "s" if the files is a system file.  The
        colon ":" following the file size will display as an equals sign "="
        if the file does NOT have the archive bit set.  Thus, we can have
        displays such as:

          1. D:CWEEP   .HST 18-Jul-1987     4K :[ ]  Read/write, archive on
          1r D:CWEEP   .HST 18-Jul-1987     4K :[ ]  Read-only,  archive on
          1. D:CWEEP   .HST 18-Jul-1987     4K =[ ]  Read/write, archive off
          1r D:CWEEP   .HST 18-Jul-1987     4K =[ ]  Read-only,  archive off

                    CWEEP  --  A SWEEP-like program for MS-DOS        Page 3

           The characters following a command description on the menu are the
        allowed prefix characters for that command.  For example, the [V]iew
        command may be prefixed with a '+', '-', or a '~' character, in
        addition to be used without any prefix character at all.  Those
        commands with a command letter surrounded with '<' and '>', (such as
        <O>utput), can be used by the prefix characters, but cannot be used by
        themselves.

                       --------------------------------------

           The following is a list of commands with a short explanation:

          [@]       This character may be prefixed to a command to cause the
                    output of the command to also go to the printer.  This
                    works with the [?] help, [H]ex, [N] CRC, [Q]uery, and
                    [V]iew commands.  If the command is a "paged" display,
                    form-feeds will automatically be added to the printer
                    output every 60 lines, and a page heading will be printed
                    for the view and hex dump commands.

          [~]       This character may be prefixed to the view and hex dump
                    command to cause a search for the "search target" to be
                    done.  The search target is entered with "+V" or "+H", as
                    explained below.  The ~ may be combined with other prefix
                    characters to get paged view/hex dump output.

          <sp>
          <cr>      Advance to the next file on the list.  Go to the first
                    file on the list if you are at the last file on the list.

          [A]       Re-tag all files which are marked with a "#" in the list.

          [-A]      Reverse the status of tagged/untagged files.  All files
                    which have tags of ' ' are tagged with an '*', and all
                    files with a tag of '*' are tagged with a ' '.  All files
                    which are tagged with a '#' (from previous mass copying)
                    are left unchanged.

          [+A]      Set all tags on files to blank (untagged).

          <bs>
          [B]       Back up to the previous file in the list.  Go to the last
                    file in the list if B is entered when you are waiting at
                    the first file on the list.

                    CWEEP  --  A SWEEP-like program for MS-DOS        Page 4

          [C]       Copy this file to another drive.  Prompt for the drive to
                    copy to.  Destination drive can be entered in the form
                    "d[:[v]]".  The if the "v" is specified, then the copy
                    will be verified.  If the file already exists, the user
                    will be queried about whether to delete it or not.  In
                    version 2.x, the destination may be given as a
                    subdirectory.  The default drive will be the current one.

                    "A"               - Copy to drive A
                    "A:"              - Copy to drive A
                    "B:V"             - Copy to drive B, and verify copy
                    "B:\GARY:V"       - Copy to subdirectory "\GARY" on drive
                                        B.  Verify the copy.
                    "OTHER\SOME:V"    - Copy to subdirectory "OTHER\SOME" on
                                        the logged drive.  Note that this is
                                        a relative subdirectory, relative to
                                        the current subdirectory on the
                                        logged drive.

                    A copy operation may be interupted by hitting a key; the
                    IBM extended keys such as arrows and functions keys will
                    not interupt a copy, however.  If the verify operation is
                    interupted, the file is left on disk.

          [-C]      Copy file to another file name.  Need to specify what the
                    new drive and file name are.  Append a ":V" to the end of
                    the new name if you want the copy verified.  Specify the
                    destination subdirectory if required.  Wild cards may be
                    used in the output file name if desired, and the
                    characters will be filled in as you would expect.

          [D]       Delete file or subdirectory.  You are asked to verify
                    deletion.

          [E]       Erase all tagged or untagged files.  User is prompted for
                    which type of files to erase, and whether the user should
                    be prompted about each file or not.  At most options an
                    "A" will abort the operation.

                    If the user requests that to be queried on each file the
                    file name and date is listed and a response requested. 
                    Valid responses are:

                    Y    Yes, erase the file.
                    N    No, don't erase this file.  Go on to the next one. 
                         Leaves the file tagged.
                    V    View this file.  Displays the same way a View
                         command would, although paging is always used.
                    !    Go to DOS, to let the user do whatever they want.
                    A    Abort the erase operation and return to the main
                         menu.

          [F]       Check free space on any drive.

          [H]       Dump the file in hex format one page at a time (affected
                    by paging flag).  The escape and return keys abort the
                    dump, any other key pauses it.
                    CWEEP  --  A SWEEP-like program for MS-DOS        Page 5


          [+H]      This allows the user to set the search object for a later
                    [V]iew or [H]ex command.  When '+H' is entered, the user
                    will be prompted to enter a search object, which will be
                    used to search the file for a starting point before
                    printing or viewing if the '~' is used to prefix a view or
                    hex dump command.  This command will NOT cause a search; a
                    normal view or hex dump command (prefixed with a ~) must
                    be used later.

                    The format of the search object is the same as that used
                    by the DEBUG utility to enter a string:  strings are
                    surrounded by single quotes ('), and numbers are entered
                    as hex digits.  For example:

                              FF FE 'Hello'' there' 00

                    would look for the sequence of FF(255) FE(254), followed
                    by a string consisting of "Hello' there" followed by a
                    character having the value of 00(0).

                              FF FE Hello' there 00

                    The "+V" command is interchangeable with the "+H"
                    command.  The search string is remembered until it is
                    changed, so multiple searches may be made for the same
                    search string.

          [-H]      Dump the file in hex without pausing.  Affected by the
                    paging flag.

          [I]       Display the file size in bytes and the creation time. 
                    Also displays the file attributes.

          [-I]      Display the file information on all tagged files.

          [+I]      Display the file information on all untagged files.

          [J]       Jump to the file in the list.  Specify name and
                    extension, it will jump to the closest point in the list.

          [L]       Log in a new drive (directory on V2.x) and ambiguous
                    filename.  Will replace the list currently being used by
                    one matching what was entered.  If no period (".") is in
                    the string, a "*.*" will be appended to the string for
                    the ambiguous filename.

          [-L]      Log in the subdirectory currently displayed.

          [+L]      Log into the directory one higher than where we are.

          [M]       Copy all files which have been tagged to a specified
                    drive.  The syntax is the same as for the Copy option. 
                    This option WILL delete (without warning) any files
                    existing on the destination if they match a file which is
                    being copied.

                    CWEEP  --  A SWEEP-like program for MS-DOS        Page 6

          [N]       Calculate a CRC for this file.  This is the same CRC as
                    the CP/M program CRCK returns.

          [-N]      Calculate CRC's for all tagged files.

          [+N]      Calculate CRC's for all untagged files.

          [-O]      Output a list of all tagged files to a disk file.

          [+O]      Output a list of all untagged files to a disk file.

          [P]       Protected mass copy option.  Same as "M" option except
                    that the user will be queried before existing files are
                    deleted.  If the output file exists, there will be a menu
                    similar to that presented under the queried erase
                    command.  The same options apply, including viewing the
                    file and going to DOS.  You can view both the input and
                    output files to determine what steps to take.

          [-Q]      Display a list of tagged files.

          [+Q]      Display a list of untagged files.

          [R]       Rename the file to something else.  A wildcard new name
                    is allowed.  If just "*" is entered, a wild card may be
                    entered for the old and new names.

          [S]       Sort the directory in order by name, extension, date, or
                    size.  Preceed the sort field by "-" to invert the normal
                    order.  Can be sorted by:

                    n    Name and extension
                    e    Extension and name
                    d    Date
                    s    Size
                    t    Tag marker
                    #    Re-sort by the last specified order

          [T]       Tag a file.  It will appear in the listing marked with a
                    "*", and will be used in any operations which work on
                    tagged files.

          [U]       Untag a file.  Clears the "*" marker.

          [V]       Display the file a page at a time.  It ignores line
                    feeds, and converts returns and vertical tabs to
                    return/linefeed.  This allows listing files created by
                    programs which only put returns in the file, such as
                    Spellbinder.  The listing can be controlled by using
                    return or escape to terminate, and any other key to
                    pause.

                    If the file is a .WKS, .WRK, or .WK1 file (Lotus
                    spreadsheets), CWEEP will display the contents of the
                    worksheet in a readable form.  This displays information
                    about the spreadsheet, including ranges, graphs, and the
                    contents of each cell.
                    CWEEP  --  A SWEEP-like program for MS-DOS        Page 7


                    The paging flag controls whether this command pages the
                    display or if -V does.

                    See the documentation on the mini-menu for setting the
                    file viewing program

          [+V]      Set search object.  Same as "+H" command.

          [-V]      Display file without paging.  Affected by paging flag.

          [W]       Tag all files matching a wildcard.
          [+W]      Untag all files matching a wildcard.
          [-W]      Tag all files not matching a wildcard.

                    In the "W" and "+W" commands, the wildcard may be entered
                    as "wildcard;attributes".  The match test will require
                    that the wildcard match and that the file have (at least)
                    the attributes specified in the attribute string.  The
                    attribute string is in the same format as in the "Y"
                    command below.

                    Note that matching all attributes specified means that a
                    match will occur if the specified set attributes are on
                    and the specified clear attributes are off.  The state of
                    attributes not specified as set or cleared doesn't matter.

                    If a question mark is included in the archive string, then
                    the user will be queried on whether to tag or untag each
                    file.  You may also view the file, drop to DOS, tag/untag
                    the rest of the files, or abort the wildcard operation.

          [Y]       Modify the attributes associated with a file.  The user
                    will be prompted for attributes to add (+) and subtract
                    (-) for the file.  The user can input a string consisting
                    of "+", "-", "a", "r", "h", "s" in any combination.  The
                    characters mean:

                         +    Set the following attributes.  There is an
                              implied "+" at the start of the input, so the
                              default is to set the file attributes entered.

                         -    Clear the following attributes.  Will remain in
                              effect to the end of the input string or until a
                              "+" is found.

                         a    Set/clear the archive bit.

                         r    Set/clear the read-only bit.

                         h    Set/clear the hidden bit.

                         s    Set/clear the system bit.

                    Note that the attributes on a file are NOT copied to a new
                    file by any of the copy commands; the only way to do that
                    is to use the "Y" command to set the attributes.
                    CWEEP  --  A SWEEP-like program for MS-DOS        Page 8


          [-Y]      Set/clear attributes for all tagged files.

          [+Y]      Set/clear attributes for all untagged files.

          [Z]       Enter a CHDIR command.  Note that this will only change
                    the DOS default directory.  It will NOT change the
                    directory which CWEEP has logged.  However, now that you
                    have changed the default directory, you can refer to it
                    just a D: instead of having to put out the entire path
                    (unless you are copying to the same drive as the source
                    files are on).

          [-Z]      Create a subdirectory (MKDIR).

          [?]
          [/]       Print help text for all commands with no "+" or "-"
                    prefix.

          [-?]
          [-/]      Print help text for all commands with a "-" prefix.

          [+?]
          [+/]      Print help text for all commands with a "+" prefix.



        If the display output is paged, then if a "+" or "-" is typed at the
        "[more]" prompt, the display will be scrolled up a single line and
        the prompt re-displayed.  Using the "+"/"-" with the hex dump is not
        recommended, since pages are defined in terms of a number of lines,
        and using the "+"/"-" will shift a page of the hex dump to break in
        the middle of an address range.

                    CWEEP  --  A SWEEP-like program for MS-DOS        Page 9


          [=]       This will take you to a settings menu controlling several
                    program flags.  These are:

                    [8]  Select whether 8-bit characters are displayed
                         unchanged, or if the 8th bit is stripped off.  If
                         8-bit characters are displayed, only special
                         characters like <cr>, <lf>, <tab>, etc are handled
                         specially, and all others are displayed as text
                         characters.  If 8-bit characters are not being
                         displayed, then the 8th bit is removed, and
                         everything outside of the range of 32-127 is
                         considered to be non-printable.

                    [A]  Select whether time for the Info command is displayed
                         as AM/PM or 24-hour.  The choice is toggled between
                         the two options each time this option is selected.

                    [B]
                    [I]  Select how I/O is done.  You will be prompted if you
                         want to use Standard DOS, IBM compatible bios, or
                         Z-100 bios to do the output.  Using the bios
                         routines will improve the display speed about 33%
                         (IBM) or nearly 50%(Z-100).

                         Note to Z-100 users: if PERKS is brought up while
                         running CWEEP, using the bios I/O gives a jerky
                         scroll until CWEEP is exited again.  It's no slower,
                         just strange.  I have no explanation.

                    [C]  Control clearing the screen while viewing a file. 
                         If on,  the screen will be cleared each time
                         "[more]" is displayed at the bottom of the screen if
                         a bios I/O method is being used.

                    [H]
                    [S]  Control whether or not logging in files on a drive
                         will list files with the hidden and/or system
                         attribute.  The normal default is to not display
                         those files.  If this ability is turned on, the drive
                         must be re-logged to list any hidden/system files.

                    [M]  Turn the menu printing on/off.  Turning it off will
                         suppress printing the menu when logging a new file
                         specification.  Same as the command line option "-?"
                         or "-/".

                    [P]  Turn the paged display on/off.  Controls whether the
                         output from the view and hex dump commands will be
                         paged or not by default.  If this is active, then
                         "-V" will NOT page the display, and vice-versa.

                    CWEEP  --  A SWEEP-like program for MS-DOS       Page 10

                    [V]  Turn special viewing on/off.  When active, the
                         program named in the environment variable CWEEP:V
                         will be used to display the file, instead of CWEEP's
                         own view routine.  This allows using a program such
                         as Vernon Buerg's LIST.COM to page through files. 
                         You can set the environment variable by including a
                         command such as:

                              SET CWEEP:V=C:\BIN\LIST.COM

                         in your autoexec.bat file, or from the keyboard. 
                         Note that the entire path and full program name MUST
                         be included.  This could also be any program that
                         expects the file name on the command line, such as a
                         text editor.

                    [W]  Turn on/off extended display of Lotus and Symphony
                         spreadsheets.  If on, files with the appropriate
                         extension will be displayed as worksheets.

                    [Z]  Turn ctrl/Z processing on/off.  When on, viewing a
                         file will stop on ctrl/Z.  When off, ctrl/Z is not
                         considered an end of file.

                    [=]
                    [Q]
                    [X]  Exit the settings menu and return to normal
                         operations.

                    [?]
                    [/]  Print a help message.

        On IBM-PC compatible computers, the following special keys have
        meaning:

          <Down>    Go to next entry (same as <CR>).

          <Up>      Go to previous entry (same as B).

          <PgUp>    Go back 16 entries.

          <PgDn>    Go forward 16 entries.

          <Home>    Go to top of list (entry 1).

          <End>     Go to last entry in list.

          <Delete>  Delete file/directory (Same as D).

          <Insert>  Create a subdirectory (Same as -Z).

          <Left>
          <Right>   Ignored.  This allows the user of a mouse driver which
                    produces arrow keystrokes without confusion.

          <Alt>A    Set file attributes (Same as Y).

                    CWEEP  --  A SWEEP-like program for MS-DOS       Page 11


                                COMMAND LINE SWITCHES

        The following is a list of valid command line switches for CWEEP. 
        They may follow or preceed the file specification to be logged in.

          [-?]
          [-/]      Toggle the main help menus on/off.  If menus are off, the
                    main help menus will only be displayed when requested. 
                    This setting may be altered from the mini-menu.

          [-8]      Toggle 8-bit display.  Will reverse the current setting
                    for whether 8-bit characters are displayed as is or with
                    the parity bit removed.

          [-a]      Toggle AM/PM or 24-hour time display for the Info command.

          [-b]
          [-i]      Select the type of I/O routines to use.  The switches
                    work as follows (-i and -b are interchangeable):

                    -b   IBM Bios on (or off if patched on)
                    -bi  Same as -b or -i
                    -bz  Z-100 Bios on (or off if patched on)
                    -bs  Standard DOS I/O.  Only DOS I/O can be redirected
                         from the command line.

          [-c]      Toggle whether the screen is cleared at the beginning of
                    each page of text when viewing to the screen if using a
                    bios I/O method.

          [-h]      Toggle looking up hidden/system files.

          [-p]      Toggle the paged display on/off.

          [-v]      Disable the use of an external file viewing program, if
                    one was specified with a SET command.

          [-z]      Toggle control/Z processing.  If present on the command
                    line, control/Z will be ignored when encountered in a
                    file being viewed.  This setting may be altered from the
                    mini-menu.

          [-d]
          [-e]
          [-n]
          [-s]      Set the initial sort order to ascending whatever.  The
                    options are the same as in the [S] command.  If the
                    switch is entered as [--x] then the order will be
                    descending (i.e., [--d] will sort by descending date, or
                    most recent first).

                    CWEEP  --  A SWEEP-like program for MS-DOS       Page 12


           For the user who does not like the default settings of some of the
        command-line switches in CWEEP (not for the faint of heart), it is
        possible to patch the values with DEBUG.  If you unassemble the
        beginning of the code, you will find several move word and move byte
        instructions.  By changing the value moved to 1 (true) or 0 (false)
        the default may be changed (note that sort-order is an ascii
        character).  To do the patching, rename CWEEP.EXE to CWEEP.BIN and
        type:

                  DEBUG CWEEP.BIN

           Then, disassemble the beginning of CWEEP by typeing:

                  -u310 l60

           DEBUG will then display everything to the right of the patch addr
        entry in the table below (???? means some address we are not
        concerned with):

        Fcn  Patch   Address   Hex code      Disassembled instructions
              Addr

                     ????:0310 33C0          XOR     AX,AX
                     ????:0312 E8????        CALL    ????
                     ????:0315 C706????0100  MOV     WORD PTR [????],0001
                     ????:031B C706????0000  MOV     WORD PTR [????],0000
        ( 1)  325    ????:0321 C706????0100  MOV     WORD PTR [????],0001
        ( 2)  32B    ????:0327 C606????6E    MOV     BYTE PTR [????],6E
        ( 3)  330    ????:032C C606????00    MOV     BYTE PTR [????],00
        ( 4)  335    ????:0331 C606????00    MOV     BYTE PTR [????],00
        ( 5)  33A    ????:0336 C606????00    MOV     BYTE PTR [????],00
        ( 6)  33F    ????:033B C706????0100  MOV     WORD PTR [????],0001
        ( 7)  345    ????:0341 C706????0100  MOV     WORD PTR [????],0001
        ( 8)  34B    ????:0347 C706????0000  MOV     WORD PTR [????],0000
        ( 9)  351    ????:034D C706????0100  MOV     WORD PTR [????],0001
        (10)  357    ????:0353 C706????0000  MOV     WORD PTR [????],0000
        (11)  35D    ????:0359 C706????0000  MOV     WORD PTR [????],0000
        (12)  363    ????:035F C706????0000  MOV     WORD PTR [????],0000
        (13)  369    ????;0365 C706????0000  MOV     WORD PTR [????],0000

           1)  Menu display        The "M" in the settings menu
                                     01 00 - Menu will be displayed
                                     00 00 - Menu will not be displayed

           2)  Initial sort order
           3)
           4)                      Place the desired original sort order
                                   here, using upper case for descending and
                                   lower case for ascending sort.  Use one
                                   character per MOV instruction.  The same
                                   letters are used as in the set sort
                                   command, but the '-'s have been applied to
                                   the letters which follow them.

           5) Terminates string    (Don't change this at all!!)
                    CWEEP  --  A SWEEP-like program for MS-DOS       Page 13


           6)  Ctrl/Z handling     The "Z" in the settings menu
                                     00 00 - Ignore ctrl/Z
                                     01 00 - Ctrl/Z means EOF

           7)  Paged display       The "P" in the settings menu
                                     00 00 - Unpaged view by default
                                     01 00 - Paged view by default

           8)  I/O display         What display routines to use:
                                     00 00 - Standard DOS (can redirect)
                                     01 00 - IBM Bios
                                     02 00 - Z100 Bios

           9)  Worksheet display   Controls whether worksheets will be
                                   displayed in a special manner or not:
                                     01 00 - Special interpreted display
                                     00 00 - As if it was text

          10)  Clear screen        Is screen cleared during viewing (only
                                   works if using a bios I/O method):
                                     00 00 - No screen clear after [more]"
                                     01 00 - Screen is cleared after "[more]"

          11)  Display 8-bit       Are 8-bit character displayed as is, or
                                   with the 8th bit removed:
                                     00 00 - 8th bit removed
                                     01 00 - 8th bit unchanged

          12)  Lookup sys/hidden   Are system/hidden files found when a disk
                                   is logged in:
                                     00 00 - Not found
                                     01 00 - Are found

          13) Time AM/PM or 24-hr  Is the time for the Info command displayed
                                   as AM/PM or 24-hour:
                                     00 00 - 24-hour
                                     01 00 - AM/PM

           Using the DEBUG "E" command, modify the bytes in each instruction
        which control the feature desired (at the "patch addr" address).  For
        example, to turn on IBM bios usage, and not display the menu except
        when requested:

                  E34B 01 00
                  E325 00 00

           The best way to check that you made the changes correctly is to go
        back and use the "u" command to unassemble the same section of the
        program and make sure that the only things changed are what you
        expected to change.  If the instructions don't look at all like they
        used to, you probably placed the code in the wrong location.

                    CWEEP  --  A SWEEP-like program for MS-DOS       Page 14

           When all of the changes have been made, use the "w" command to
        write the file back to disk, quit DEBUG with the "q" command.  Rename
        CWEEP.BIN back to CWEEP.EXE and try it out.  Be sure to test this
        version where it can't get to any files in case you make a mistake.







           CWEEP is written in the C language, and compiled with the Microsoft
        C V5.0 compiler.  Development has been done at different times using a
        Zenith Z-100, Zenith Z-151, and a Multitech Accel 900.  Custom
        routines for reading and writing files and handling all I/O to the
        keyboard and printer.  These avoid the use of the standard I/O
        library which would increase the size of the program.

           If the standard DOS I/O routines are used, the output of CWEEP may
        be re-directed to a file or to the printer.  However, the output will
        not be displayed on the screen, making it rather difficult to use.  It
        is nice for obtaining a copy of the menus in a file, however.

                    CWEEP  --  A SWEEP-like program for MS-DOS       Page 15


        Modification history of released versions:

          1.30    Jul 1984    o    Original version, supports DOS v1.x
                                   directories only.

          2.14    Jan 1985    o    Supported DOS 2.x subdirectories.

          2.30h   Dec 1987    o    Supported faster display output with bios
                                   options.
                              o    Lotus Worksheet displayed in the view
                                   command.
                              o    Reverse default sense of the "-" for
                                   display paging.
                              o    Added ability to search for text before
                                   viewing.
                              o    Added CRC of a file option.
                              o    External viewing program and ability to go
                                   to DOS added.
                              o    Larger copy buffer added (63K).
                              o    Added ability to go up/down directory
                                   trees with the log command.
                              o    Display subdirectories in the file list. 
                                   Can also delete them.
                              o    Ability to view files during protected
                                   copies and queried erases added.
                              o    Display volume label.
                              o    Lookup hidden/system files.
                              o    Add ability to modify attributes.
                              o    Wildcard tag/untag based on attributes.
                              o    Display Info on tagged or untagged files.

          2.31a     Jan 1988  o    Support IBM arrow keys, PgUp, PgDn, Home,
                                   End, Insert, Delete, <Alt>A.
                              o    Print error if doing a protected copy over
                                   an existing subdirectory.
                              o    Fix problem with program hanging (need
                                   ctrl/C to exit) if doing a protected copy
                                   and user tells it to abort or not delete
                                   the output file.  (Did a close of the stdin
                                   handle).

```
{% endraw %}

## DOCUFILE.BAS

{% raw %}
```bas
10 ' docufile
20 ' (c) 1984 by Global Technologies Corporation
30 ' author: W. French
100 CLS
110 PRINT "DocuFile - (c) 1984 by Global Technologies"
120 PRINT "------------------------------------------"
130 PRINT
140 INPUT "Enter source text file name............ ",INFILE$
150 PRINT
160 INPUT "Enter help screen program file name.... ",OUTFILE$
170 PRINT
180 INPUT "Enter starting line number............. ",L
190 PRINT
192 CLS
194 PRINT "DocuFile - (c) 1984 by Global Technologies"
196 PRINT "------------------------------------------"
198 PRINT:PRINT "Creating help screen, please stand by..."
200 ' file i/o
210 GOSUB 800:' open source file for reading...
220 GOSUB 900:' open destination file for writting...
300 ' build help screen from source file...
301 TOP=L:PTOP=L
310 IF EOF(1) THEN 350
320 INPUT #1,TEXT$
322 IF LEFT$(TEXT$,1)="*" THEN GOSUB 400:GOTO 340
325 TEXT$=STR$(L)+" print "+CHR$(34)+TEXT$+CHR$(34)
330 PRINT #2,TEXT$
335 L=L+2
340 GOTO 310
350 TEXT$=STR$(L)+" return"
360 L=L+2
370 PRINT #2,TEXT$
380 CLS                 
390 SYSTEM
400 ' page break subr...
420 TEXT$=STR$(L)+" print "         
422 L=L+2
430 PRINT #2,TEXT$
440 TEXT$=STR$(L)+" print "+CHR$(34)+"N)ext page, P)revious page, or C)ancel "+CHR$(34)+";"
442 L=L+2
450 PRINT #2,TEXT$
460 TEXT$=STR$(L)+" a$=inkey$:if a$="+CHR$(34)+CHR$(34)+" then "+STR$(L)
462 L=L+2
470 PRINT #2,TEXT$
480 TEXT$=STR$(L)+" if a$="+CHR$(34)+"C"+CHR$(34)+" or a$="+CHR$(34)+"c"+CHR$(34)+" then cls:return"
490 L=L+2
500 PRINT #2,TEXT$
510 TEXT$=STR$(L)+" if a$="+CHR$(34)+"P"+CHR$(34)+" or a$="+CHR$(34)+"p"+CHR$(34)+" then cls:goto "+STR$(PTOP)
512 L=L+2
520 PRINT #2,TEXT$
530 TEXT$=STR$(L)+" cls"
540 L=L+2
550 PRINT #2,TEXT$
555 PTOP=TOP
560 TOP=L
570 RETURN
800 ' open source file
810 OPEN INFILE$ FOR INPUT AS 1
820 RETURN
900 ' open destination file
910 OPEN OUTFILE$ FOR OUTPUT AS #2
920 RETURN
```
{% endraw %}

## FFIND.DOC

{% raw %}
```
ffind - written by John N. White
ffind scans files whose names are entered through stdin (until end-of-file).
If the args match a line in a file, then the name of the file and all lines
with matches are printed.
The args are considered to match a line if all the args are contained in the
line and in the correct order.
The filenames fed in may be separated by spaces, tabs, commas, or new-lines.
Example:
	ffind if ( ){
matches:
	if(i==0){
	if  ( i == 0 ){
but not
	if(i==0) {
	(i==0){ if

Note that if a set of files are to be searched many times, The names of those
files can be put in a file (say, "list") and a macro can be
defined (say, "f.bat") that scans those files. f.bat whould contain:
	ffind %1 %2 %3 %4 %5 %6 %7 %8 %9 < list

When entering filenames by hand remember end-of-file is CTRL Z.
```
{% endraw %}

## FILES283.TXT

{% raw %}
```
Disk No:  283
Program Title: DOS Utilities No 15
PC-SIG version: 1.2

This disk contains a wide variety of different file and system tools.
DTK and CWEEP13 are powerful file handlers.  DOCUFILE lets you develop
callable help screens for your programs, RAM is a nice RAM-disk program,
installable as a device driver, (exercise caution when using with other
RAM-resident software, and it will serve you well).  Other utilities
give Epson owners good letter-quality print, generate interrupts on
demand, find files, and more.

CWEEP 2.31a is a file-manager similar to the CP/M program SWEEP which
lets the user move through a list of files, tag ones to be worked on,
and then copy, delete, or rename them.  It will also allow the user to
view files, make and remove directories.

A very fast, single keystroke way to work through a directory of files,
copying, viewing, and deleting them.  Has a protected copy feature,
which will warn the user if a file of the same name is about to be
over-written.  After a file is copied, it will (optionally) be re-opened
and a CRC done to verify the copy.

Usage:  DOS/System Utilities.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  DTK $10.00.

File Descriptions:

-------- ---  KWSEARCH by Patrick Teti
KWSEARCH DOC  Documentation for KWSEARCH (13K).
KWSEARCH EXE  Copies text using search criteria.
-------- ---  3 Utilities by John White
INT      COM  Program interrupt.
INT      DOC  Documentation for INT.
INT      A    Part of INT.
-------- ---  Famous Sweep program from CPM
CWEEP    DSC  Introductory text file.
CWEEP    EXE  Main program file.
CWEEP    TXT  Manual.
-------- ---  Directory Toolkit
DTK      DOC  Documentation for DTK (8K).
DTK      EXE  Sort directory, change attributes, etc.
MAKERAM  BAT  Batch file to install RAM.
MAKEINT  BAT  Batch file to install INT.
FFIND    DOC  Documentation for FFIND.
FFIND    C    Part of FFIND.
FFIND    EXE  Finds files by scanning for specific argument.
INT_PORT DOC  Additional Documentation for INT.
SETRAM   EXE  Sets up RAM.
RAM      DOC  Documentation for RAM.
RAM      A    Part of RAM.
RAM      SYS  RAM drive installer.
-------- ---  Docufile
KILLER   EXE  Deletes files.
AUTOEXEC BAT  Batch file to diskcopy.
README   BAS  BASIC version of README.TXT.
README   TXT  Documentation for DOCUFILE.
DOCUFILE BAS  Creates BASIC program of text file.
CATALOG  EXE  Demonstration of multiple file searcher.
HELP     BAT  DOCUFILE help screen generator.
DOCUFILE BAT  Batch file to bring up DOCUFILE in BASIC.
-------- ---  Letter Quality print routine
LQ       COM  Letter quality print on Epson MX printer.
LQ       DOC  Documentation for LQ (9K).
SETRAM   C    Part of SETRAM.EXE.
MESSAGE  EXE  Displays message at bootup.
LABELS   FIL  Part of LABELS.EXE.
LABELS   DOC  Documentation for LABELS.EXE.
LABELS   EXE  Envelope label making program.
MESSAGE  DOC  Documentation for MESSAGE.EXE.
MESSAGE  FIL  Part of MESSAGE.EXE.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## INT_PORT.DOC

{% raw %}
```
	The program int.com is not necessarily portable between different
ms-dos machines. The unportability is due to the value of EXTRA in the source.
If int 1Ch was a hardware interupt, the value of EXTRA is 0. But int 1Ch is
usually a software interupt invoked from the timer tick interupt handler
(int 8) and thus int.com must reach deeper into the stack to find the programs
cs:ip values. The value of extra can be found in two ways.
	The debugger can be used to look through the interupt code that calls
int 1Ch and the value of EXTRA can be guessed. There are 6 bytes for an
extra interupt, 2 bytes for each push, 16 bytes for a pushall on the 186.
The Tandy 2000 has int 8, a pushall, and 2 pushes in effect so
6+16+(2*2)=26 (=1Ah)    is the value of EXTRA.
The IBM has int 8, and 3 pushes in effect so
6+(2*3)=12 (=0Ch)       is the value of EXTRA.

Another way is to enter the debugger and type: (The int3 should end up at 113)
a100
cli
mov ax,0
mov ds,ax
mov word [70],113
mov [72],cs
sti
jmp 111
int3

r
g

Now, if everything is working properly, you will have two register dumps
to compare. Subtracting the SP value of the second from the first gives the
number of bytes added to the stack by the interupts. Subtract 6 from this
value to get the value EXTRA should have. (Be sure to do the arithmetic
carefully, The SP values are in hex). By the way, your machine will need
to be rebooted now.
Example:
For the Tandy 2000 the SP=FFEE and FFCE. (hex)
EEh-CEh=20h, 20h-6=1Ah and the value for EXTRA is 1Ah
For the IBM the SP=FFEE and FFDC. (hex)
EEh-DCh=12h, 12h-6=0Ch and the value for EXTRA is 0Ch

Note that int.com only interupts a program when the cs:ip values are
larger than the end of the int.com code and smaller than C0000 (hex).
I don't know whether this is appropriate for all ms-dos machines.
```
{% endraw %}

## INT.DOC

{% raw %}
```
int.com  ---  written by John N. White for the Tandy 2000 with ms-dos 2.x
int.com allows a program to be interupted at any time (not just when a
function call is being processed).

To use, just run int.com (note: only run it one time after a bootup).
Then, to interupt a program, hold down both shift keys and the alt key all
at the same time untill the program terminates. The cs and ip registers
will be displayed.

This is a terminate and stay resident program. Every time an int 1C (hex)
occures, (from the timer, about 20 times a second) the location of the
routine that was being executed is examined. If the code follows the
end of the int.com code then a bios call (16h with ah=2) is done to check
the shift status of the keyboard. If the appropriate keys are being held
down, then the return address to the program is modified to point to
a program terminate function call in int.com .
If more than one terminate-and-stay-resident programs will be run, this
should be the last one because it may interupt any program that follows it.
int.com will not interupt code preceeding it so dos function calls and
system interupt handlers will not be interupted. This means that no interupt
will occur if a program is waiting for keyboard input as a bios call handles
that. Also, no interupt will occur if the keyboard hold is on.
Interupts must be enabled or the timer tick won't be seen. Normally programs
start with interupts enabled but in debug they start disabled. Interupts
can be enabled in debug by typeing rf followed by ei .
```
{% endraw %}

## KWSEARCH.DOC

{% raw %}
```
       ++++++++++++++++++++++++++++++++++++++++++++++++++++

       DOCUMENTATION FOR KWSEARCH version 1.3, January 1985

       ++++++++++++++++++++++++++++++++++++++++++++++++++++


If you have a printer, you may prefer to print this documentation
instead of viewing it on the screen.  If you are using IBM-DOS,
you can print this file by returning to DOS, and then typing the
command,   

                   COPY KWSEARCH.DOC LPT1:

Alternatively, if you have an ASCII compatible word processor,
you could use it to format and print this file.


Before You Use KWSEARCH
-----------------------

You should have a diskette with your "system" in drive A while
running this program.  This can be accomplished by formatting a
new diskette with the /s option (see your DOS manual), copying
KWSEARCH.EXE to that diskette, and then using it in drive A.


NOTE: The symbol which you see at the end of paragraphs if you
      view this file on your screen is an unprintable word
      processor control character. 



What KWSEARCH Does
------------------

KWSEARCH reads text from one or more "source files", and
transfers those "records" matching your "search criteria" to a
"destination file".  A "record" can be thought of as simply a
paragraph. 


    Source File                                  Destination File
   +------------+                                +--------------+
   |            |                                |              |
   | "Records"  |                                |   Records    |
   |            |                                |   Matching   |
   |            |    ----->  KWSEARCH  ----->    |    Search    |
   |            |                                |   Criteria   |
   |            |                                |              |
   +------------+                                +--------------+




Advantages of KWSEARCH
----------------------

KWSEARCH searches regular sequential text files for records and
key words.  No key or index files are used and no "importing" of
text files is necessary before performing a search, as long as
the file is in ASCII format.  This allows efficient use of disk
space and lets you conduct searches on files that would not
otherwise be useable as databases.


Source Files
------------

The source files contain the text which you wish to search.  They
can be any regular text files in ASCII format, created with your
word processor, downloaded through a modem, or generated by
another program.  Many word processing programs store files in
this format, and those which do not generally have utility
programs for conversion into ASCII format.

To determine if a file is in this format, you could use the DOS
command, TYPE filename.  If the resulting screen output consists
of normal, legible text, then the file is an ASCII file.  The
file you are reading now is an ASCII file.

You can search up to 10 source files during a single run.  Simply
enter the names of the files when prompted.  You can use the disk
drive prefixes A:, B:, etc. to specify files but subdirectory and
path parameters (.. and \) are not recognized by this version of
KWSEARCH.  Therefore, if you have files organized into
subdirectories, all referenced files must be in the default
subdirectory of each drive.


Records
-------

A record is the basic unit of related information read by
KWSEARCH from a source file.  Most database management programs
break a record down into fields, and require that a certain
amount of disk space be set aside for each field, whether that
space is used or not.  Some programs have pre-defined limits on
field structure and field size.  Others require that you define
the fields and their sizes for each database.

KWSEARCH is much simpler.  It recognizes a record as a series of
up to 50 lines of text, separated from other records by a blank
line.  Therefore a record is like a paragraph.  In fact, you can
use KWSEARCH to search for paragraphs in a document as if they
were records in a database.

Key word lines are the only part of a record that are analogous
to fields, and they are optional.  However, restricting a search
to words on key word lines makes the search run faster.  In
either case, if a records' key words match the search criteria,
the entire record will be copied to the destination file, up to a
maximum of 50 lines per record.

If a record contains more than 50 lines, or more than 600 key
words, then the record is broken at that point and subsequent
lines are treated like another record.

The default definition of a key word line is any line beginning
with the characters "KW:".  There can be up to 10 key word lines
in a record.  All words on the key word lines in a record will be
compared with the search criteria to determine if the record is
to be saved.

You can redefine the identifier for your key word lines (e.g.
lines beginning with KEY:) or you can search the full text.
For this option, records must contain no more than 600 words
each.


Search Criteria
---------------

The search criteria describe the conditions which must be met by
a record in order for it to be saved.  It consists of three types
of information, 

1) up to 10 key words, 

2) a combination of those key words using the operators AND, OR,
   and NOT, 

3) instructions as to which lines in a record which will be used
   as key word lines.

The last "search set" defined will be the one used as the basis
for a search, although search statistics will be listed for all
other key words and search sets.

The best method of defining search criteria depends on the nature
of your source files and on your information retrieval
requirements.  An example of a search for a recipe is used for
illustration.


Here are two sample records...


Guacamole
---------
2 medium avocados
2 T. lemon juice
1/4 t. pepper
1/2 small onion, chopped
1 clove garlic, minced
1/2 t. salt
...
Mix in a blender until smooth.  Makes 1 and 1/4 cups.
KW: GUACAMOLE, AVOCADOS, GARLIC, ONION, MEXICAN

Enchilada Sauce
---------------
1 pound fresh ripe tomatoes
1 large red bell pepper
2 med. red onions
2 large cloves garlic
1/2 t salt
1/2 t crushed red pepper
1/4 t cumin
1/4 t black pepper
...
Cut tomatoes, peppers, and onion into small chunks.  Combine in a
blender and puree.
KW: ENCHILADA SAUCE, TOMATOES, ONIONS, GARLIC, MEXICAN


Now, suppose you want to search for all recipes that contain the
key words AVOCADO or TOMATO.  Run KWSEARCH, specify AVOCADO and
TOMATO as key words, then combine those key words with OR.
Lastly, specify the names of the source and a destination files.
When the search begins, the following will occur:

     KWSEARCH will read the guacamole recipe and will recognize
     the words on the line beginning with "KW:" as the record's
     key words.  It will then compare those key words with the
     search criteria.  Since they meet the search criteria, the
     recipe will be copied to the destination file.  Then the
     next recipe will be saved as well since its key words also
     match the search criteria.


You have the option to print descriptive information in the
destination file along with the records themselves.  Descriptive
information includes the date, starting time of the search, names
of source files, search criteria, and finishing time.


In version 1.3 of KWSEARCH, the following rules apply:

1. Key words can be either upper or lower case in the source
   files and you can enter the search criteria in either upper
   or lower case.

2. Key words in a record are truncated to the length of the
   search criterion word before a comparison is made.  Therefore,
   if you are searching for AVOCADO, you will find AVOCADOES.  It
   is recommended that you specify the roots of words as search
   criteria, for example, use GEO in order to be able to detect
   both GEOLOGY and GEOCHEMISTRY.  Note that comparisons are made
   in a left justified field based on the length of the search
   criterion word.

   The search criterion word, GEO, is contained in each of the
   following source file words:

                            GEOLOGY,
                       and  GEOCHEMISTRY

   However, if the search criterion word is CHEMISTRY, then
   GEOCHEMISTRY does not match.  


There are two types of "errors" that can occur when conducting a
search: 

1) failure to save a record that you would like to have saved,
   and 

2) saving a record that was not really desired.

Errors 1 and 2 can be minimized by carefully selecting the key
words for defining records and for conducting a search.  Error 1
can also be reduced by searching the full text instead of just
key word lines although this results in slower program
execution.

The approach you use to minimize these errors also depends on
the time required for a search, and the time required to manually
edit the destination file.

Careful assignment of key words can allow you to conduct
effective searches that are moderately fast.  A way to ensure
that a desired record is found is to use consisistency or
redundancy when assigning key words to a record.  For example,
you can assign the words GEO and CHEMISTRY, or GEOCHEMISTRY and
CHEMISTRY instead of the single word GEOCHEMISTRY.  Similarly,
you could specify (GEO OR CHEM) as part of the search criteria.

If execution time is a factor, it is more efficient to limit your
search to words on key word lines and specify more words in the
search criteria, than to search the full text.  However, it may
be desirable to search the full text in order to make sure that
no records are missed, or it may be necessary to do so if special
key word lines are not present in the source file.

One tactic for effective searching is to divide it into stages.
In the first stage, conduct an "inflated" search to make sure all
possible records of interest are saved.  This can be accomplished
by specifying lots of key words and combining them with OR's.
You can then browse through this file before using it as the
source file for more selective searches.


The sequence of defining search criteria might be as follows:

Key Word 1 = ? <AVOCADO>

Key Word 2 = ? <TOMATO>

Key Word 3 = ? <ONIONS>

Key Word 4 = ? <GARLIC>


Are the search words correct?  (Y or N)  <y>


SET 5 = ? <1>                    ...1 represents AVOCADO.

SET 5 = AVOCADO ? <o>            ...o represents OR.

SET 5 = AVOCADO OR ? <2>         ...2 represents TOMATO.

SET 5 = (AVOCADO OR TOMATO)      ...  Set 5 is now defined.

SET 6 = ? <3>                    ...3 represents ONIONS.

SET 6 = ONIONS ? <o>             ...o represents OR.

SET 6 = ONIONS OR ? <4>          ...4 represents GARLIC.

SET 6 = (ONIONS OR GARLIC)       ...  Set 6 is now defined


The symbols "<>" indicate that the enclosed character or word is
typed, and then the enter key is pressed.  Note that a prompt at
the bottom of the screen tells you what to do.

The search critera used in the search will be those defined by
the last search set.  When the search is completed, the number of
occurrences of each word and each search set are tabulated on the
screen.  You might find it useful to define search sets that are
not actually part of the final search criteria.  You can use this
to find out how many records meet various search criteria without
necessarily saving those records.

With practice, you will find that you can construct a sorted
destination file by running more than one search.  For example,
you could search for records containing

             AVOCADO AND (ONIONS OR GARLIC),

then conduct another search for

            AVOCADO AND NOT(ONIONS OR GARLIC).

Note that the two above sets are mutually exclusive, that is they
do not share any records in common.  In combination, they include
all recipes with AVOCADO.  By appending the second search to the
end of the first search, you would have a file with avocado
recipes sorted according to whether or not they contained onions
or garlic.


Destination File
----------------

Any valid text file name can be specified as the destination
file, with the exception of subdirectories and paths.  For faster
program execution, it is recommended that the destination file be
on a different disk drive than the source files.


For Fastest Performance
-----------------------

If you have a RAM disk, conduct your search from source files in
the RAM disk.


Improvements to KWSEARCH
------------------------

KWSEARCH is being redesigned for easier use and higher
performance.  A future version will provide more detailed search
statistics.  Any comments you may have will be appreciated and
will be considered for implementation.  Please send comments to:



         Geoplot Computer Projects
         PO Box 46173, station G
         Vancouver, BC  Canada  V6R 4G5

```
{% endraw %}

## LABELS.DOC

{% raw %}
```


                                LABELS.EXE
                         A LABEL PRINTING PROGRAM
                                    BY
                               GARY W. MORRIS
                               3317 COLUMBINE
                               LEBANON, OR 97355
                               503-259-1462


INTRODUCTION/BACKGROUND
=======================

    I have spent many, many months rewriting a program I purchased from Radio

Shack, called Budget Management.  After first translating it from Radio Shack

Basic to IBM Basic, I then proceeded to add many new enhancements, such as

Graphing of Accounts for the year and a Label Printing program described

below. I wanted to place the new updated version of this fine Program in

the public domain but, found that Tandy wanted too much red tape to even find

out who the origional author was, so I could get his permission. So I'll just

keep enjoying what I consider to be the best HomeBudget/CheckBook Program

around until I can find the time to fill out all the red tape to get Tandy

to even talk to me about the new enhanced version. For those interested the

Radio Shack part number for their origional Budget Management program is

26-1603 published in 1979. I bought it for my first computer the TRS-80

Model I, and was impressed with not only the program but the fact that

source code was supplied. Enough about what really triggered the label

program.


HOW TO USE LABELS.EXE
=====================

     Labels.exe allows you to print labels of the bills you have to pay that

you don't get self addressed envelopes for.

     This simple label printing program allows multiple labels to be printed

of the names and addresses that are stored in a simple text file. Any pure

ASCII text editor can be used to modify the file (LABELS.FIL) to include as

many names, (in my case the names and addresses of bills to pay), as desired.

     The first number in the file must be the number of labels. The next number

is the number of lines to print on the label. You can mix the number of lines

in the file from 3 to 5.

     The program expects to find labels such as Avery #4146 (4" X 1 7/16"),

for the proper spacing between labels.

     These labels can be purchased at your local computer supply house or

I get mine from MISCO phone 800-631-2227. They are located in N.J.

     I use FRED (The FRee EDitor) to enter my data in the LABELS.FIL.


EXAMPLE OF THE LABELS.FIL:
==========================

4                      <===== The number of Names and Addresses in this file
3                      <===== The number of lines to print for this entry
The Bank of Oregon
122 Main Street
Anywhere, Or 97300
4                      <===== The number of lines to print for this entry
Sears, Roebuck & Co.
144 S. 1st Street
P.O. Box 111
Anywhere, Or 97300
3                      <===== The number of lines to print for this entry
BankAmericard
P.O. Box 222
This town, Or. 99999
3                      <===== The number of lines to print for this entry
J.C. Penneys
333 N. 2nd Ave.
MyTown, Or. 93333


             
```
{% endraw %}

## LQ.DOC

{% raw %}
```

.fo LQ-Print Version 0.1        -#-            (C)Copyright 1984
                        LQ-Print

LQ-Print  was  written to provide letter quality printing  on  an 
Epson MX printer (with Graftrax) or IBM Graphics printer.  A main 
part  of  the  effort was to make WordStar files look  good  with 
these  printers.   Another  function of the program is  to  allow 
access  to  the  printers  internal  functions,   therefore  this 
document  refers to the printers mode and Letter Quality mode  as 
if  two  totally  separate  programs  exist.   Any  questions  or 
comments should be given to:  Steve Lass (408)732-8987.

The Menu

Typing in the letters  LQ  will display the following menu:

     CHANGE PRINTER MODE:

          R - Reset printer
          C - Condensed (not for Letter Quality)
          E - Emphasized (not for Letter Quality)
          D - Double strike
          M - Microjustification (Letter Quality only)
          N - eNlarged print
          S - proportional Spacing
          8 - 1/8 inch line spacing

     P - Print file (Letter Quality)

     X - eXit to system

Descriptions of Menu Commands

R - Reset printer

     The  reset command puts the printer into its power up  state 
     (determined  by dip switches internal to the  printer).   It 
     will  also reset all letter quality modes  including:   1/8" 
     line  spacing,   proportional  spacing,  microjustification, 
     enlarged, and doublestrike.

C - Condensed (not for Letter Quality)

     This puts the printer into condensed mode (17 characters per 
     inch).  This will not effect the Letter Quality mode.

E - Emphasized (not for Letter Quality)

     This  command puts the printer into emphasized mode and will 
     not effect the Letter Quality mode.
D - Double strike

     The  double strike command will put the printer into  double 
     strike  mode and also set the Letter Quality mode to  double 
     strike.    
.pa
.fo                            -#-
M - Microjustification (Letter Quality only)

     Microjustification works with WordStar files to evenly space 
     the words and characters accros a line.  WordStar puts soft-
     spaces (hex A0) into the line to justify the right  margins.  
     LQ-Print replaces the soft-spaces with incremental spaces so 
     the  output  looks much  more  evenly  distributed.   Micro-
     justification  will  be turned off for any line with a  hard 
     carriage return (one not entered by WordStar).

N - eNlarged print

     This  command puts the printer into enlarged (double  width) 
     mode.   It will also make the Letter Quality files print  in 
     enlarged mode until turned off by ^T in the file.

S - proportional Spacing

     This  puts the printer into proportional spacing mode  (each 
     character  takes up a different amount of space depending on 
     its size).   It will also make Letter Quality files print in 
     proportional  spacing  mode  intil turned  off  by  a  Reset 
     command (or exit from the program).

8 - 1/8 inch line spacing

     Line  spacing is normally 1/6" and can be changed to 1/8" in 
     the printer and also in Letter Quality mode.

P - Print file (Letter Quality)

     This  command  takes an ascii DOS file and prints it  (using 
     high  resolution graphics) in Letter Quality.   Any  of  the 
     above  commands  (not  those specifically  marked  "not  for 
     Letter  Quality") entered before the "P" command will be  in 
     effect.  Note: on entry all modes are cleared.

Control Characters

Print  control characters can be entered into the ascii file  and 
have the following meanings:

     Boldface  is  achieved  by using a ^B.   This  is  a  toggle 
     command so the first ^B turns on boldface, the next ^B turns 
     it off.

     Doublestrike  is  achieved by using a ^D.   This is  also  a 
     toggle command.

     Underline is achieved by using a ^S.   This is also a toggle 
     command.   Underline  is setup to not underline  the  spaces 
     between words.
.pa
     Enlarged  mode is initiated by a ^N and terminated by a  ^T.  
     These  are the same control codes that put the Epson printer 
     into enlarged mode.  For some reason WordStar will not allow 
     the  ^N  to remain in the file through the "print  to  file" 
     command  so  you  must enter a ^A before the ^N  when  using 
     WordStar  (^N  normally changes  the  character  pitch,  but 
     doesn't work with the Epson printer anyway).  (^T is normal-
     ly  used  for superscripts which are not supported  in  this 
     program,  however  if  the  file is going to be  printed  by 
     WordStar,  another  ^T should be entered to toggle  off  the 
     superscript mode.)
     WARNING:   Enlarged  mode takes twice the  width  of  normal 
     characters.   If an entire line is written in enlarged mode, 
     or you forget to turn it off, the type may run off the page.

     Strikeout can be achieved by entering a soft carriage return
    ---------
     (no line feed) which is a ^M.  Whatever is typed on the next 
     line is combined with the line above before printing.  There 
     will  be  no microjustification on the line  with  the  soft 
     carriage return.


Getting a WordStar file ready for LQ-Print

     From  WordStar  you must print the file into  another  file.  
     After  editing  type  a ^KD to finish the  editing  session.  
     Then from the main menu type a  P  for print.  Then the file 
     name  must be entered followed by a carriage  return.   Then 
     you are asked "DISK FILE OUTPUT?" and must answer Y for yes.  
     Then  you are asked what to call the output file (I  usually 
     use the extension DOC for the WordStar file and TXT for  the 
     output  file).    All  other  print  control  questions  are 
     answered  the  same as if you were sending the file  to  the 
     printer (press <Esc> for default settings).
.pa
Invoking LQ-Print

Type:

     LQ   
          This  brings up the menu,   all commands can be entered 
          through  the  menu.   If  the  command  is  understood, 
          another "Make Selection" line will be displayed, if not 
          the menu will be redisplayed.

     LQ/R
          This will reset the printer, then exit the program.

     LQ/C
          This puts the printer into condensed mode.

     LQ/E
          This puts the printer into emphasized mode.

     LQ/D
          This puts the printer into doublestrike mode.

     LQ/N
          This puts the printer into enlarged mode.

     LQ/S
          This puts the printer into proportional spacing mode.

     LQ file.ext
          This  prints  the  file in  letter  quality  mode.   An 
          optional drive may be specified as follows:
          LQ b:file.ext

     LQ/M file.ext
          This  prints the file in microjustified letter  quality 
          mode.

     LQ/M/S file.ext
          This  prints  the  file in  proportional  justification 
          letter quality mode.


Note:  All legal commands may be entered on one line:

       LQ/R/C/E/D/N/S

Note:   Certain  print modes cannot be mixed in the Epson,  check 
        your manual for details.

Note:  Upper or lower case characters may be used.

.pa
Initialization

     My experience has shown that "sometimes" when the printer is 
     not  powered  up  when the IBM PC is turned on  the  printer 
     cannot  be turned on later wihtout re-booting the  PC.   LQ-
     Print allows the printer to be initialized wihtout rebooting 
     the  PC.   If  the  printer is not ready  when  LQ-Print  is 
     invoked the following message will be displayed:

          PRINTER NOT READY, Retry or Initialize (R or I)?

     At this point you must check to see if the printer is turned 
     off or just "off line".  If it is off, turn the power on and 
     check  to see if the "on line" LED comes on.   If  not,  the 
     printer needs to be initialized (type I).   The next message 
     displayed will be:

          Monochrome/printer board or Printer adapter (M or P)?

     If your not sure try one.

     If your printer was just off line when the PRINTER NOT READY 
     message was displayed you have two options.  The first is to 
     turn the printer on line by pressing the "on line" button on 
     the  printer  then type R for Retry and you should  see  the 
     menu.   The  second method to get the printer on line is  to 
     type I for Initialize.  This will initialize the printer and 
     put it "on line" automatically.

     If  you have a non standard board and LQ-Print's  initiliza-
     tion doesn't work, you must re=boot.

     Note:   The  initialization program will not be used if  the 
     printer is ready when LQ-Print was invoked.

     Note:   LQ-Print can be executed from WordStar to initialize 
     the printer or setup any of the printers internal functions.


rint can be executed from WordStar to initialize 
     the printer or se
```
{% endraw %}

## MESSAGE.DOC

{% raw %}
```


                              MESSAGE MINDER
                                    BY
                              GARY W. MORRIS

                              3317 COLUMBINE
                              LEBANON, OR 97355
                              503-259-1462


    This program was written to fill a need where I worked a few years ago.

I was in charge of the data processing department and there were times that

I didn't get a chance to see each of the people that brought up the system,

and I wanted to be able to leave them a message that I could be sure they

wouldn't miss. At first I thought of just writing a short batch file and

putting it in the autoexec.bat file, but then I also wanted to make it easy

for each operator to leave messages for the next shift/operator.

    Just add Message.exe to your autoexec.bat file and each time the computer

is booted up, the message program will display the latest message.

    This is a public domain program so feel free to share it with your friends.


ogram will display the latest message.

    This is a public domain program so feel free to sha
```
{% endraw %}

## RAM.DOC

{% raw %}
```
This ramdisk starts out with no memory. To allocate memory for it use:
	setram drive kbytes
where drive is the drive letter and kbytes is the number of kbytes to alloc.
Memory can only be allocated when there is currently no memory allocated
to the ramdisk.
example, if the ramdisk is drive e and a 68k ramdisk is desired
	setram e 68

To deallocate the memory that was allocated for the ramdisk, use:
	setram drive
where drive is the drive letter.
example, if the ramdisk is drive e
	setram e

This ramdisk allows up to 32 directory entries in the root directory.
To use it, there must be a line in the config.sys file
	device=ram.sys
and if an initial ramdisk is desired, the line
	setram drive kbytes
can be put in the autoexec.bat file.

Don't allocate memory if there is currently in memory a program that will
terminate and free up its memory, as the setram memory will be allocated after
this program and memory will become segmented. Also, don't run a
terminate-and-stay-resident program when memory is allocated for the ramdisk
because when the ramdisk memory is deallocated memory will be segmented.
If memory is deallocated in a .bat file, then memory will be segmented until
the .bat file terminates, so don't do anything in that bat file after
a deallocation if this segmentation could cause a problem (such as
reallocating memory with setram or running a terminate and stay resident
program).
```
{% endraw %}

## README.BAS

{% raw %}
```bas
1000 PRINT "DocuFile - Help Screen Generator         	            General Information"
1002 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1004 PRINT ""
1006 PRINT "DocuFile will take any standard text file and create a basic program to"
1008 PRINT "display the text file. This allows you to create help screens from your"
1010 PRINT "favorite text editor and then add all the PRINT statements automatically."
1012 PRINT "This is beneficial for two reasons. 1 - if you need to insert portions of text"
1014 PRINT "you do so with your text editor and then regenerate the help screens with  "
1016 PRINT "DocuFile. 2 - all the prompts for next page and previous page are added"
1018 PRINT "wherever you indicate a page break."
1020 PRINT ""
1022 PRINT "This program was developed by Global Technologies Corporation and has been "
1024 PRINT "placed in public domain for the benefit of all. If you feel this program is"
1026 PRINT "beneficial to your needs please send a check for $10.00 to Global Technologies"
1028 PRINT "P.O. Box 441000 Aurora Colorado 80044."
1030 PRINT ""
1032 PRINT "Please copy this program and give it to as many people as you want."
1034 PRINT 
1036 PRINT "N)ext page, P)revious page, or C)ancel ";
1038 A$=INKEY$:IF A$="" THEN  1038
1040 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1042 IF A$="P" OR A$="p" THEN CLS:GOTO  1000
1044 CLS
1046 PRINT "DocuFile - Help Screen Generator         	               Source Text File"
1048 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1050 PRINT ""
1052 PRINT "The source text file is the word processing file that you are going to"
1054 PRINT "convert to Basic language file code for purposes of generating easy"
1056 PRINT "to use help screens that may be called from Basic applications.             "
1058 PRINT ""
1060 PRINT "Enter the file name with a disk drive letter if it does not reside on"
1062 PRINT "the drive you are currently defaulted to. For Example [B:TEXTFILE.EXT]."
1064 PRINT ""
1066 PRINT "The source text file must be a standard ASCII file and must not contain"
1068 PRINT "special control characters single or double quotation marks asemi colons"
1070 PRINT "or commas! If you must have commas or special punctuation in the help"
1072 PRINT "screen add it after DocuFile has created the help screen program."
1074 PRINT 
1076 PRINT "N)ext page, P)revious page, or C)ancel ";
1078 A$=INKEY$:IF A$="" THEN  1078
1080 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1082 IF A$="P" OR A$="p" THEN CLS:GOTO  1000
1084 CLS
1086 PRINT "Docufile - Help Screen Generator         		    Help Screen Program"
1088 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1090 PRINT ""
1092 PRINT "The destination help screen is the Basic program file that will contain the "
1094 PRINT "text from your source file converted into Basic source code. This file "
1096 PRINT "should be named as the help program you will be running from your Basic"
1098 PRINT "application program."
1100 PRINT ""
1102 PRINT "Enter the file name with a disk drive letter if it will not reside on"
1104 PRINT "the drive you are currently defaulted to. For example [B:DESTFILE.BAS]."
1106 PRINT ""
1108 PRINT "The output code file will be generated with Basic PRINT statements and"
1110 PRINT "may be executed from any Basic application as a subroutine. The program        "
1112 PRINT "generated will contain RETURN statements on every page and at the end of"
1114 PRINT "the entire subroutine to facilitate use with other programs and appli-"
1116 PRINT "cations without modifications. If you need to run the help screen as a free"
1118 PRINT "standing program simply replace all RETURN statements with SYSTEM statements."
1120 PRINT 
1122 PRINT "N)ext page, P)revious page, or C)ancel ";
1124 A$=INKEY$:IF A$="" THEN  1124
1126 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1128 IF A$="P" OR A$="p" THEN CLS:GOTO  1046
1130 CLS
1132 PRINT "DocuFile - Help Screen Generator                                       AutoPage"
1134 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1136 PRINT ""
1138 PRINT "The AutoPage function automatically places pause/continue prompts wherever"
1140 PRINT "an [*] is found in the document text file. The asterix [*] must be in the "
1142 PRINT "first column of any line in the text file. When used a prompt will appear"
1144 PRINT "when the listing reaches that point and three options will be offered. "
1146 PRINT ""
1148 PRINT "(N)ext page (P)revious Page or C)ancel"
1150 PRINT ""
1152 PRINT "If you choose not to have AutoPage enter these features for you may"
1154 PRINT "place such prompts as you desire using whatever text editor is available."
1156 PRINT "This may be necessary if you want to chain to other programs from a help"
1158 PRINT "screen."
1160 PRINT ""
1162 PRINT "AutoPage will RETURN program control to where it was called from with the"
1164 PRINT "RETURN statement."
1166 PRINT 
1168 PRINT "N)ext page, P)revious page, or C)ancel ";
1170 A$=INKEY$:IF A$="" THEN  1170
1172 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1174 IF A$="P" OR A$="p" THEN CLS:GOTO  1086
1176 CLS
1178 SYSTEM
```
{% endraw %}

## README.TXT

{% raw %}
```
DocuFile - Help Screen Generator         	            General Information
═══════════════════════════════════════════════════════════════════════════════

DocuFile will take any standard text file and create a basic program to
display the text file. This allows you to create help screens from your
favorite text editor and then add all the PRINT statements automatically.
This is beneficial for two reasons. 1 - if you need to insert portions of text
you do so with your text editor and then regenerate the help screens with  
DocuFile. 2 - all the prompts for next page and previous page are added
wherever you indicate a page break.

This program was developed by Global Technologies Corporation and has been 
placed in public domain for the benefit of all. If you feel this program is
beneficial to your needs please send a check for $10.00 to Global Technologies
P.O. Box 441000 Aurora Colorado 80044.
      
Please copy this program and give it to as many people as you want.
*
DocuFile - Help Screen Generator         	               Source Text File
═══════════════════════════════════════════════════════════════════════════════

The source text file is the word processing file that you are going to
convert to Basic language file code for purposes of generating easy
to use help screens that may be called from Basic applications.             

Enter the file name with a disk drive letter if it does not reside on
the drive you are currently defaulted to. For Example [B:TEXTFILE.EXT].

The source text file must be a standard ASCII file and must not contain
special control characters single or double quotation marks asemi colons
or commas! If you must have commas or special punctuation in the help
screen add it after DocuFile has created the help screen program.
*
Docufile - Help Screen Generator         		    Help Screen Program
═══════════════════════════════════════════════════════════════════════════════

The destination help screen is the Basic program file that will contain the 
text from your source file converted into Basic source code. This file 
should be named as the help program you will be running from your Basic
application program.

Enter the file name with a disk drive letter if it will not reside on
the drive you are currently defaulted to. For example [B:DESTFILE.BAS].

The output code file will be generated with Basic PRINT statements and
may be executed from any Basic application as a subroutine. The program        
generated will contain RETURN statements on every page and at the end of
the entire subroutine to facilitate use with other programs and appli-
cations without modifications. If you need to run the help screen as a free
standing program simply replace all RETURN statements with SYSTEM statements.
*
DocuFile - Help Screen Generator                                       AutoPage
═══════════════════════════════════════════════════════════════════════════════

The AutoPage function automatically places pause/continue prompts wherever
an [*] is found in the document text file. The asterix [*] must be in the 
first column of any line in the text file. When used a prompt will appear
when the listing reaches that point and three options will be offered. 

(N)ext page (P)revious Page or C)ancel

If you choose not to have AutoPage enter these features for you may
place such prompts as you desire using whatever text editor is available.
This may be necessary if you want to chain to other programs from a help
screen.

AutoPage will RETURN program control to where it was called from with the
RETURN statement.
*
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0283

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        17   2-23-84   5:02p
    CATALOG  EXE      7424   2-23-84   5:00p
    CWEEP    DSC      2250   2-15-89   1:33p
    CWEEP    EXE     54309   1-17-88   3:32p
    CWEEP    TXT     38553   1-18-88   2:00p
    DISKCOPY COM      2008   5-07-82  12:00p
    DOCUFILE BAS      1792  12-27-83   7:52a
    DOCUFILE BAT       128  12-27-83   7:43a
    DTK      DOC      8704  11-09-86   9:19a
    DTK      EXE     57856  11-09-86   9:19a
    FFIND    C        2098   1-23-85   6:55p
    FFIND    DOC       826   1-23-85   7:13p
    FFIND    EXE      7680   1-23-85   6:55p
    FILES283 TXT      3173   3-02-89   9:29a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   2-28-89   8:48a
    HELP     BAT       128  12-27-83   7:09a
    INT      A        3080   1-25-85  12:31p
    INT      COM       512   1-25-85  12:31p
    INT      DOC      1561   1-17-85  10:00a
    INT_PORT DOC      1854   1-29-85   9:01p
    KILLER   EXE      1920   2-23-84   5:00p
    KWSEARCH DOC     13135   1-31-85  10:22a
    KWSEARCH EXE     39424   1-31-85  11:59a
    LABELS   DOC      3200   1-09-87  11:45p
    LABELS   EXE     23936   1-09-87  11:45p
    LABELS   FIL       256   1-09-87  11:45p
    LQ       COM      5760   1-01-80   1:42a
    LQ       DOC      9216   1-01-80   1:44a
    MAKEINT  BAT       126   1-25-85  11:15a
    MAKERAM  BAT       445   1-25-85  11:16a
    MANUAL   BAT       163   2-28-89   8:45a
    MESSAGE  DOC      1152   1-09-87  10:39p
    MESSAGE  EXE     20352   1-09-87  10:39p
    MESSAGE  FIL       128   1-09-87  10:39p
    RAM      A        4492   1-18-85   1:00p
    RAM      DOC      1438   1-27-85   9:36p
    RAM      SYS       512   1-11-85  10:27p
    README   BAS      4736  12-27-83   7:52a
    README   TXT      3712  12-27-83   7:41a
    SETRAM   C        2034   1-27-85   8:09p
    SETRAM   EXE      2048   1-27-85   9:13p
           42 file(s)     333024 bytes
                            6144 bytes free
