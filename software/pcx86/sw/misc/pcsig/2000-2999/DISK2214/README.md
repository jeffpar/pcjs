---
layout: page
title: "PC-SIG Diskette Library (Disk #2214)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2214/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2214"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "REFERENCE MGMNT SYS-RSX #2 (2213 ALSO)"

    Reference Management System is a self-explanatory, menu-driven system
    for handling bibliographic references:  data entry, viewing, searching,
    tabulation, and reporting.  It provides data and index file
    compatibility with dBase III and III+, and it is compiled to provide
    operational speed.  It is organized in five basic menus covering related
    operations.  Searches include scanning, single and multi-item, and
    output can be sent to printer or disk in linear or card formats, with
    user control of included fields.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## WEDIT.DOC

{% raw %}
```
    ============ WEDIT.DOC or READ_ME.WED describes WEDIT.EXE ===============

    Accompanies:  Quicksilver Diamond Release (1.2c), July 1988
                  Quicksilver User's Reference, 4th Edition

    Contents:     Introduction to WEDIT
                  WEDIT System Files
                  Installing WEDIT
                  Starting WEDIT
                  The WEDIT Screen
                  The WEDIT Selection Bar
                  File Editing Keys
                     Cursor Movement Keys
                     Text Insertion Keys
                     Movement or Insertion Keys
                     Text Deletion Keys
                     Block Manipulation Keys
                     Text Search Keys
                     Disk Read and Write Keys
                     "Type" Command Keys
                     Display Selection Bar Keys

    == Introduction to WEDIT ==

    WEDIT is WordTech Systems' stand-alone text editor. It is similar to dBASE
    III Plus and dBXL's MODIFY COMMAND. WEDIT creates or displays a specified
    command file and allows the editing of its contents. With WEDIT, you do not
    need to purchase dBASE III Plus, dBXL, or your own text editor to modify
    the text files you use with Quicksilver. WEDIT offers a number of features
    that facilitate file editing, including full-screen editing, block text
    manipulation, string searches, and disk reads and writes.

    WEDIT can be used to edit files within windows in Quicksilver-compiled
    applications. WEDIT is the default text editor used to edit the contents of
    memo fields when running Quicksilver-compiled applications.

    WEDIT may be freely distributed in conjunction with Quicksilver-compiled
    programs for use in editing memo files. WordTech Systems places no license
    restrictions upon use of WEDIT.EXE in conjunction with Quicksilver-compiled
    applications.

    WEDIT uses 79K of memory plus the amount of memory needed for your text
    file. WEDIT can create and access files up to 32K.

    == WEDIT System Files ==

    The following files are included with WEDIT:

    Filename            Contains
    ------------        -------------------------------------------------
    WEDIT.EXE           The WEDIT text editor
    WINSTALL.EXE        WEDIT's installation program
    WINSTALL.DAT        WEDIT's installation data
    READ_ME.WED         This file--describes how to install and use WEDIT

    Copy these files onto a directory on your computer's hard disk.

    == Installing WEDIT ==

    Depending on your computer, to use WEDIT, you may need to run WINSTALL,
    WEDIT's installation program. WINSTALL asks a series of questions about
    your computer. The information you provide enables WEDIT to display screens
    compatible with your computer and to read data from your keyboard.

    If your computer is not 100% IBM PC-compatible, you must run WINSTALL to be
    able to use WEDIT. If your computer is an IBM PC or is 100% IBM PC-
    compatible, you do not need to run WINSTALL. However, some computers will
    benefit from WINSTALL's optimization of WEDIT's screen displays.

    To invoke WINSTALL, enter the following at the DOS prompt:

    WINSTALL

    Then answer the questions that WINSTALL displays on the screen. If you wish
    to exit WINSTALL at any time, press Ctrl-C.

    If you decide not to run WINSTALL, you do not need to enter the WINSTALL
    command. After copying the WEDIT files onto your computer's hard disk,
    simply start WEDIT as described below.

    == Starting WEDIT ==

    The syntax for invoking WEDIT from the DOS prompt is as follows:

    WEDIT [<filename>] [-W<coordinates>] [-L<line #>] [-F]

    where <filename> is the name of either an existing file you wish to edit or
    a file you wish to create. You must enter the filename extension, if any.
    If you wish, you can also include a full path name to specify a drive
    and/or directory different from the current drive and/or directory. If you
    do not specify a filename at the DOS prompt, WEDIT prompts you for one.

    The -W option specifies coordinates of a Quicksilver window within which
    WEDIT will work. The default is window 0 (i.e. the regular screen
    coordinates).

    -L specifies a line number at which to commence editing. The default
    beginning line number is line 1.

    -F specifies that you wish to edit a full file. If this option is not used,
    WEDIT will only edit as much of a file as can fit in a single window (of
    the default size, or as specified with the -W option). This option
    specifies that WEDIT is to allow editing of a full file, rather than a
    single window-sized page.

    == The WEDIT Screen ==

    After you invoke WEDIT, the following screen display appears:

    anyfile.prg          total lines = 1              line=1   col=0
    * * * top of file * * *

    * * * end of file * * *

    If the file you specify when you invoke WEDIT does not exist, WEDIT creates
    it. If the file you specify when you invoke WEDIT already exists, WEDIT
    displays it between the "* * * top of file * * * " and "* * * end of file *
    * *" markers. In either case, the cursor is positioned on line 1 and column
    0 of the file. WEDIT awaits your editing instructions. You cannot edit the
    "* * * top of file * * *" and "* * * end of file * * *" markers, although
    you can position the cursor in these lines.

    At the top of the screen, WEDIT displays the name of the file you are
    editing, the total number of lines in the file, and the current line and
    column numbers.

    You can type as many as 254 characters on a line.

    == The WEDIT Selection Bar ==

    To simplify editing, WEDIT has a selection bar. Press Esc to display it.

    ========= WordTech Editor ==============================================
     Line #     Bottom     Top    Read Write       Find       Next    Quit
     Go to a specified line number.
    ========================================================================

    The top line of the selection bar displays eight options. Each option
    performs a specific editing action when selected. After you press Esc to
    invoke the selection bar, the highlight displays on the first option, "Line
    #". As you maneuver the highlight from one option to another on the
    selection bar by pressing the Right Arrow and Left Arrow keys, the talker
    line below the options changes. The talker line describes the action that
    will occur if you select the highlighted option. For example, "Go to a
    specified line number." is the talker line describing the action that will
    occur if you select "Line #".

    You can select an option from the selection bar by two different methods.
    You can press the first letter of an option to select it. Or, you can use
    the Right Arrow and Left Arrow keys to move the highlight to an option, and
    then press the Enter key to select that option.

    Each selection bar option and the action that occurs if you select the
    option are listed below:

    Line #    Displays "Edit line number:" and advances the cursor to the line
              number you specify.

    Bottom    Advances the cursor to the beginning of the last line of the file
              (the line before the "* * * end of file * * *" marker).

    Top       Moves the cursor to the beginning of the first line of the file
              the line after the "* * * top of file * * *" marker).

    Read      Prompts "File name:" and copies the contents of the file you
              specify into the current file at the current cursor position.
              "Read" is equivalent to Ctrl-KR, described below.

    Write     Prompts "File name:" and displays the current filename as the
              default. "Write" saves the file under the name you specify. By
              either entering a new filename or pressing the Enter key to
              accept the default filename, you ensure that changes are written
              to disk. (Selecting "Write" is similar to selecting "Quit"
              followed by "Save". The difference is that "Write" leaves the
              current file displayed for editing, whereas "Quit" followed by
              "Save" exits the text editor to DOS.) "Write" is equivalent to
              Ctrl-KW, described below.

    Find      Prompts "Search string" and searches from the beginning of the
              file for a match to the string you specify. Note that "Find" is
              not case-sensitive; it does not distinguish between upper- and
              lower-case letters. "Find" is equivalent to Ctrl-KF, described
              below.

    Next      Searches for the next occurrence of the last string you specified
              with "Find". "Next" is equivalent to Ctrl-KL, described below.

    Quit      Offers two options, "Save" and "Abandon", that exit the text
              editor to DOS. Select "Save" to save the file. "Save" then
              prompts "File name:" with the filename you specified when
              invoking WEDIT as the default. You can save the file under the
              default filename by pressing the Enter key, or you can enter
              another filename. "Save" then saves the file and exits the text
              editor to DOS. To exit without saving changes, select "Abandon".
              If you have not made any changes to the current file, "Abandon"
              exits the text editor to DOS. If you have made changes to the
              current file, "Abandon" prompts "Changes have been made. Do you
              still wish to Abandon?". Enter Y to exit the text editor to DOS
              without saving the changes; enter N to re-activate the current
              file.

    == File Editing Keys ==

    File editing keys or key combinations and their effects are grouped as
    follows:

      o  Cursor Movement Keys
      o  Text Insertion Keys
      o  Movement or Insertion Keys
      o  Text Deletion Keys
      o  Block Manipulation Keys
      o  Text Search Keys
      o  Disk Read and Write Keys
      o  "Type" Command Keys
      o  Display Selection Bar Keys

    = Cursor Movement Keys =

    Up Arrow or Ctrl-E       Moves the cursor up one line.

    Down Arrow or Ctrl-X     Moves the cursor down one line.
    or Ctrl-J

    Left Arrow or Ctrl-S     If the cursor is not at the beginning of the line,
                             moves the cursor left one character. If the cursor
                             is at the beginning of the line, moves the cursor
                             to the beginning of the previous line.

    Right Arrow or Ctrl-D    Moves the cursor right one character.
    or Ctrl-L

    Home or Ctrl-A           Moves the cursor left one word.

    End or Ctrl-F            Moves the cursor right one word.

    Ctrl-Right Arrow         Moves the cursor to the end of the current line.
    or Ctrl-B

    Ctrl-Left Arrow          Moves the cursor to the beginning of the current
    or Ctrl-Z                line.

    Pg Dn                    Moves the cursor down 23 lines.

    Pg Up                    Moves the cursor up 23 lines.


    = Movement or Insertion Keys =

    Enter or Ctrl-M          If insert mode is not active, moves the cursor to
                             the beginning of the subsequent line. If insert
                             mode is active, splits the current line at the
                             cursor and moves the cursor to the beginning of
                             the subsequent line. If the cursor is at the end
                             of the line before the "* * * end of file * * *"
                             marker, inserts a blank line, regardless of the
                             status of insert mode. (Insert mode is described
                             under Ins below.)

    Tab or Ctrl-I            If insert mode is not active, moves the cursor
                             four characters to the right. If insert mode is
                             active, inserts four spaces and moves the cursor
                             four characters to the right. (Insert mode is
                             described under Ins below.)

    = Text Insertion Keys =

    Ins or Ctrl-V            Toggles insert mode on and off. When you start
                             WEDIT, insert mode is not active; the character
                             you type overwrites the character at the current
                             cursor position. Once you press the Ins key,
                             insert mode is active; the character you type is
                             inserted at the current cursor position. (When
                             insert mode is active, the cursor appears taller
                             and flashes more rapidly.)

    Ctrl-N                   Inserts a blank line at the current line, moves
                             the cursor to the beginning of the blank line and
                             moves the current line down one row.

    Alt-A                    Inserts a blank line below the current line and
                             moves the cursor to the beginning of the new blank
                             line.

    Alt-S                    Splits the current line at the cursor and moves
                             the cursor to the beginning of the new line.

    = Text Deletion Keys =

    Del or Ctrl-G            Deletes the character under the cursor.

    Backspace or Ctrl-H      Deletes the character left of the cursor and moves
                             the cursor one character to the left.

    Ctrl-Y or Alt-D          Deletes the current line.

    Ctrl-T                   Deletes from the character under the cursor to the
                             beginning of the next word.

    Alt-J                    Deletes from the character under the cursor to the
                             end of the current line and joins the subsequent
                             line with the current line.


    = Block Manipulation Keys =

    Alt-L                    Highlights a block (a line or group of lines) for
                             manipulation. To highlight a block, move the
                             cursor to a line and press Alt-L. Then, if you
                             wish to highlight more than one line, move the
                             cursor to another line and press Alt-L. WEDIT
                             highlights the block beginning with the first line
                             you selected through the last line you selected.

    Alt-C                    Copies a highlighted block to the line after the
                             current line and removes the highlight from the
                             original block.

    Alt-K                    Copies a highlighted block to the line after the
                             current line and leaves the original block
                             highlighted.

    Alt-M                    Moves a highlighted block to the line after the
                             current line.

    Alt-G                    Deletes the highlighted block.

    Alt-U                    Removes the highlight from the currently
                             highlighted block.

    = Text Search Keys =

    Ctrl-KF                  Prompts "Search string" and searches from the
                             beginning of the file for a match to the string
                             you specify. Note that Ctrl-KF is not case-
                             sensitive; it does not distinguish between upper-
                             and lower-case letters. Pressing Ctrl-KF is
                             equivalent to selecting "Find" on the selection
                             bar, described above.

    Ctrl-KL                  Searches for the next occurrence of the last
                             string you specified with Ctrl-KF or "Find" on the
                             selection bar. Pressing Ctrl-KL is equivalent to
                             selecting "Next" on the selection bar, described
                             above.

    = Disk Read and Write Keys =

    Ctrl-KR                  Prompts "File name:" and copies the contents of
                             the file you specify into the current file at the
                             current cursor position. Pressing Ctrl-KR is
                             equivalent to selecting "Read" on the selection
                             bar, described above.

    Ctrl-KW                  Prompts "File name:" and displays the current
                             filename as the default. Ctrl-KW saves the file
                             under the name you specify. By either entering a
                             new filename or pressing the Enter key to accept
                             the default filename, you ensure that changes are
                             written to disk. Pressing Ctrl-KW is equivalent to
                             selecting "Write" on the selection bar, described
                             above.

    = "Type" Command Keys =

    When you press one of the following function keys, WEDIT "types" a commonly
    used dBASE or dBXL command at the current cursor position. If insert mode
    is not active, WEDIT overwrites any text beginning at the current cursor
    position with the command and advances the cursor to the beginning of the
    subsequent line. If insert mode is active, WEDIT inserts the command at the
    current cursor position, splits the line after the command, and advances
    the cursor to the beginning of the subsequent line. (Insert mode is
    described under Ins above.)

    Key       Command WEDIT "Types"
    ---       ---------------------
    F2        intro
    F3        list
    F4        dir
    F5        display structure
    F6        display status
    F7        display memory
    F8        display
    F9        append

    = Display Selection Bar Keys =

    Ctrl-Pg Up or Ctrl-W     Displays the selection bar with "Quit"
                             highlighted. If you then select "Quit", "Save"
                             appears as the default.

    Ctrl-Pg Dn or Ctrl-Home  Displays the selection bar with "Quit"
    or Ctrl-] or Ctrl-Q      highlighted. If you then select "Quit", "Abandon"
                             appears as the default.

    Esc or Ctrl-[            If the selection bar is not already displayed,
                             displays the selection bar with "Line #"
                             highlighted. If the selection bar is already
                             displayed, removes the selection bar from the
                             screen.

    ======================== End of READ_ME.WED File ========================

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2214

     Volume in drive A has no label
     Directory of A:\

    RSC      OVL     26000   1-21-90   6:51p
    RSU      OVL     52656   1-21-90   6:51p
    RSM      OVL     42640   1-21-90   6:52p
    RSS      OVL     34560   1-21-90   6:52p
    RSR      OVL     32752   1-21-90   6:52p
    MEMSETUP MEM       159   9-17-88  11:05p
    MEMDEFLT MEM       159   9-17-88  11:05p
    MEMEXSET MEM       329   1-23-90   6:05p
    MEMTRANS MEM      1540   9-25-89   3:51p
    COLORCOL MEM       852   8-01-89  11:04p
    COLORMON MEM       851   8-01-89  11:03p
    COLORGRY MEM       852   8-01-89  11:02p
    COLORDEF MEM       852   8-01-89  11:01p
    COLORSET MEM       852   8-01-89  11:04p
    MASTER1S DBI       469   1-20-87
    MASTER2S DBI       199   1-20-87
    MASTER_M DBI       198   1-20-87
    MASTER_N DBI       147   1-20-87  12:00p
    WEDIT    EXE    100416   6-15-88   5:00p
    WEDIT    DOC     19354   6-15-88   5:00p
    INSTALL  BAT     13254   1-09-90   7:00p
    CHOOSE   COM       161  10-20-85   4:36p
    DEMO     DBF      6714   7-09-87  11:07p
    DEMO     DBT      2817   7-09-87  11:07p
    DEMO     NDX      1024   7-09-87  11:21p
    DEMO     MEM       284   9-25-89   1:44p
    DEMO     D01       719   9-25-89   1:43p
    DEMO     N01      2048   9-25-89   1:43p
    DEMO     D02       287   9-25-89   1:44p
    DEMO     N02      1536   9-25-89   1:44p
    MEMSETUP 001       159   9-17-88  11:05p
    MEMSETUP 002       159   9-17-88  11:03p
    MEMSETUP 003       159   9-17-88  11:04p
    MEMSETUP 004       159   9-17-88  11:20p
           34 file(s)     345317 bytes
                               0 bytes free
