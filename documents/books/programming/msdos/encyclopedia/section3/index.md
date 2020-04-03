---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Section III: User Commands"
permalink: /documents/books/programming/msdos/encyclopedia/section3/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/section3/
---

### Section III: User Commands

{% raw %}

```none
INTRODUCTION


    This section of The MS-DOS Encyclopedia describes the standard
    internal and external MS-DOS commands available to the user who is
    running MS-DOS (versions 1.0 through 3.2). System configuration
    options, special batch-file directives, the line editor (EDLIN), and
    the installable device drivers normally included with MS-DOS are also
    covered.

    Entries are arranged alphabetically by the name of the command or
    driver. The configuration, batch-file, and line-editor directives
    appear alphabetically under the headings CONFIG.SYS, BATCH, and EDLIN,
    respectively. Each entry includes

    ■  Command name
    ■  Version dependencies and network information
    ■  Command purpose
    ■  Prototype command and summary of options
    ■  Detailed description of command
    ■  One or more examples of command use
    ■  Return codes (where applicable)
    ■  Informational and error messages

    The experienced user can find information with a quick glance at the
    first part of a command entry; a less experienced user can refer to
    the detailed explanation and examples in a more leisurely fashion. The
    next two pages contain an example of a typical entry from the User
    Commands section, with explanations of each component. This example is
    followed by listings of the commands by functional group.

    The following terms are used for command-line variables in the sample
    syntax:

    drive       a letter in the range A-Z, followed by a colon, indicating
                a logical disk drive.

    path        a specific location in a disk's hierarchical directory
                structure; can include the special directory names . and
                ..; elements are separated by backslash characters (\).

    pathname    a file specification that can include a path and/or drive
                and/or filename extension.

    filename    the name of a file, generally with its extension; cannot
                include a drive or path.

    Note: PC-DOS, though not an official product name, is used in this
    section to indicate IBM's version of the disk operating system
    originally provided by Microsoft. Commands sometimes have slightly
    different options or appear for the first time in different versions
    of MS-DOS and PC-DOS. When a command appears only in the IBM ver-
    sions, the abbreviation IBM appears in the heading area. Significant
    differences between MS-DOS and PC-DOS versions of a command are
    indicated in the Syntax and Description portions of the entry.

    Below is a typical command entry. Footnotes identify and describe the
    various elements.



REPLACE                                                    3.2
Update Files                                              External

Purpose
    Selectively adds or replaces files on a disk.


Syntax
    REPLACE [drive:]pathname [drive:][path] [/A][/D][/P][/R][/S][/W]

    where:

    pathname        is the name and location of the source files to be
                    transferred, optionally preceded by a drive;
                    wildcard characters are permitted in the filename.

    drive:path      is the destination for the file being transferred;
                    filenames are not permitted in the destination
                    parameter.

    /A              transfers only those source files that do not exist
                    at the destination (cannot be used with /S or /D).

    /D              transfers only those source files with a more recent
                    date than their destination counterparts (cannot be
                    used with /A).

    /P              prompts the user for confirmation before each file is
                    transferred.

    /R              allows REPLACE to overwrite destination read-only
                    files.

    /S              searches all subdirectories of the destination
                    directory for a match with the source files (cannot
                    be used with /A).

    /W              causes REPLACE to wait for the disk to be changed
                    before transferring files.


Description

    The REPLACE utility allows files to be updated easily to more recent
    versions. REPLACE examines the source and destination directories and,
    depending on the switches used in the command line, selectively
    updates matching files or copies only those files that exist on the
    source disk but not the destination disk.

    The pathname parameter (the source) specifies the name and location
    of the files to be transferred (optionally preceded by a drive);
    wildcards are permitted in the filename. The drive:path parameter
    (the destination) specifies the location of the files to be replaced
    and can consist of a drive, a path, or both. If only a drive is
    specified as the destination, REPLACE assumes the current directory of
    the disk in that drive. If the destination is omitted completely,
    REPLACE assumes the current drive and directory. The /S switch causes
    REPLACE to also search all subdirectories of the destination directory
    for files to be replaced.

    The /A, /D, and /P switches allow selective replacement of files on
    the destination disk. When the /A switch is used, REPLACE transfers
    only those files on the source disk that do not exist in the
    destination directory. When the /D switch is used, REPLACE transfers
    only those source files that match the destination filenames but have
    a more recent date than their destination counterparts. (The /D switch
    is not available with the PC-DOS version of REPLACE.) The /P switch
    causes REPLACE to prompt the user for confirmation before each file is
    transferred.

    The /R switch allows the replacement of read-only as well as normal
    files. If the /R switch is not used and one of the destination files
    that would otherwise be replaced is marked read-only, the REPLACE
    program terminates with an error message. (REPLACE cannot be used to
    update hidden or system files.)

    The /W switch causes REPLACE to pause and wait for the user to press
    any key before beginning the transfer of files. This allows the user
    to change disks in floppy-disk systems with no fixed disk and in those
    cases where the REPLACE program itself is present on neither the
    source nor the destination disk.


Return Codes

    0     The REPLACE operation was successful.
    1     An error was found in the REPLACE command line.
    2     No matching files were found to replace.
    3     The source or destination path was invalid or does not
            exist.
    5     One of the files to be replaced was marked read-only and
            the /R switch was not included in the command line.
    8     Memory was insufficient to run the REPLACE command.
    15     An invalid drive was specified in the command line.
    Other  Standard MS-DOS error codes (returned on a failed Interrupt
            21H file-function request).


Examples

    To replace the files in the directory \SOURCE on the current drive
    with all matching files on the disk in drive A that have a more recent
    date, type

    C>REPLACE A:*.* \SOURCE /D  <Enter>

    To transfer from the disk in drive A only those files that are not
    already present in the current directory, type

    C>REPLACE A:*.* /A  <Enter>


Messages

    n File(s) added
    After the replacement operation is completed, if the /A switch was
    used in the command line, REPLACE displays the total number of files
    added.

    n File(s) replaced
    After the replacement operation is completed, REPLACE displays the
    total number of files processed.
───────────────────────────────────────────────────────────────────────────



CONTENTS BY FUNCTIONAL GROUP


    The MS-DOS commands can be divided into several distinct groups
    according to the functions they perform. These are listed on the
    following pages.

╓┌────────────────────┌──────────────────────────────────────────────────────╖
    Command         Action
    ──────────────────────────────────────────────────────────────────────
    System Configuration and Control
    BREAK           Set Control-C check.
    COMMAND         Install secondary copy of command processor.
    DATE            Set date.
    EXIT            Terminate command processor.
    PROMPT          Define system prompt.
    SELECT          Configure system disk for a specific country.
    SET             Set environment variable.
    SHARE           Install file-sharing support.
    TIME            Set system time.
    VER             Display version.
    ──────────────────────────────────────────────────────────────────────
    Character-Device Management
    CLS             Clear screen.
    CTTY            Assign standard input/output.
    GRAFTABL        Load graphics character set.
    GRAPHICS        Print graphics screendump program.
    KEYBxx          Define keyboard.
    MODE            Configure device.
    PRINT           Print file (background print spooler).
    ─────────────────────────────────────────────────────────────────
    File Management
    ATTRIB          Change file attributes.
    BACKUP          Back up files.
    COMP            Compare files.
    COPY            Copy file or device.
    DEL/ERASE       Delete file.
    EDLIN           Create or modify text file (see also commands below).
    FC              Compare files.
    RECOVER         Recover files.
    RENAME          Change filename.
    REPLACE         Update files.
    RESTORE         Restore backup files.
    TYPE            Display file.
    XCOPY           Copy files.
    ─────────────────────────────────────────────────────────────────────
    Filters
    FIND            Find string.
    MORE            Display by screenful.
    SORT            Sort file or character stream alphabetically.
    ─────────────────────────────────────────────────────────────────────
    Directory Management
    APPEND          Set data-file search path.
    CHDIR           Change current directory.
    DIR             Display directory.
    MKDIR           Make directory.
    PATH            Define command search path.
    RMDIR           Remove directory.
    TREE            Display directory structure.
    ─────────────────────────────────────────────────────────────────────
    Disk Management
    ASSIGN          Assign drive alias.
    CHKDSK          Check disk status.
    DISKCOMP        Compare floppy disks.
    DISKCOPY        Copy floppy disks.
    FORMAT          Initialize disk.
    FDISK           Configure fixed disk.
    JOIN            Join disk to directory.
    LABEL           Display volume label.
    SUBST           Substitute drive for subdirectory.
    SYS             Transfer system files.
    VERIFY          Set verify flag.
    VOL             Display disk name.
    ─────────────────────────────────────────────────────────────────────
    Installable Device Drivers
    ANSI.SYS        ANSI console driver.
    DRIVER.SYS      Configurable external-disk-drive driver.
    RAMDRIVE.SYS    Virtual disk.
    VDISK.SYS       Virtual disk.
    ─────────────────────────────────────────────────────────────────────
    System-Configuration File Directives
    BREAK           Configure Control-C checking.
    BUFFERS         Configure internal disk buffers.
    COUNTRY         Set country code.
    DEVICE          Install device driver.
    DRIVPARM        Set block-device parameters.
    FCBS            Set maximum open files using File Control
                    Blocks(FCBs).
    FILES           Set maximum open files using handles.
    LASTDRIVE       Set highest logical drive.
    SHELL           Specify command processor.
    STACKS          Configure internal stacks.
    ─────────────────────────────────────────────────────────────────────
    Batch-File Directives
    AUTOEXEC.BAT    System startup batch file.
    ECHO            Display text.
    FOR             Execute command on file set.
    GOTO            Jump to label.
    IF              Perform conditional execution.
    PAUSE           Suspend batch-file execution.
    REM             Include comment line.
    SHIFT           Shift replaceable parameters.
    ─────────────────────────────────────────────────────────────────────
    EDLIN Commands
    linenumber      Edit line.
    A               Append lines from disk.
    C               Copy lines.
    D               Delete lines.
    E               End editing session.
    I               Insert lines.
    L               List lines.
    M               Move lines.
    P               Display in pages.
    Q               Quit.
    R               Replace text.
    S               Search for text.
    T               Transfer another file.
    W               Write lines to disk.




ANSI.SYS
2.0 and later
ANSI Console Driver
External


Purpose

    Allows the user to employ a subset of the American National Standards
    Institute (ANSI) standard escape sequences for control of the
    console.

Syntax

    DEVICE=[drive:][path]ANSI.SYS

    where:

    drive:path      is the drive and/or path to search for ANSI.SYS if it
                    is not in the root directory of the startup disk.

Description

    The ANSI.SYS file contains an installable character-device driver that
    supersedes the system's default driver for the console device (video
    display and keyboard). After ANSI.SYS is installed by means of a
    DEVICE=ANSI.SYS command in the CONFIG.SYS file of the disk used to
    start the system, programs can use a subset of the ANSI 3.64-1979
    standard escape sequences to erase the display, set the display mode
    and attributes, and control the cursor in a hardware-independent
    fashion. (A supplementary set of escape sequences that are not part of
    the ANSI standard allows reprogramming of the keyboard.)

    Programs that use ANSI.SYS for control of the screen can run on any
    MS-DOS machine without modification, regardless of its hardware
    configuration. However, most popular application programs for the IBM
    PC and compatibles circumvent ANSI.SYS and manipulate the video
    controller and its video buffer directly to achieve maximum
    performance.

    The ANSI.SYS device driver detects ANSI escape sequences in a
    character stream and interprets them as commands to control the
    keyboard and display. An ANSI escape sequence is a sequence of ASCII
    characters, the first two of which must be the Escape character (1BH)
    and the left-bracket character (5BH). The characters following the
    Escape and left-bracket characters vary with the type of control
    function being performed; most consist of an alphanumeric code
    followed by a letter. In some cases this code is a single character;
    in others it is more than one character or a two-part string separated
    by a semicolon. Each ANSI escape sequence ends in a unique letter
    character that identifies the sequence; case is significant for these
    letters. The escape sequences supported by the ANSI.SYS driver are
    summarized in the tables on the following pages.

    An escape sequence cannot be entered directly at the system prompt
    because each ANSI escape sequence must begin with an Escape character,
    and pressing the Esc key (or Alt-27 on the numeric keypad) causes MS-
    DOS to cancel the command line. There are three methods of executing
    ANSI escape sequences that do not require writing a program:

    ■  Include the escape sequences in a PROMPT command.

    ■  Enter the escape sequences into a word processor or text editor,
        save the file as an ASCII text file, and then execute the file by
        using the TYPE or COPY command (specifying CON as the destination
        for COPY) from the MS-DOS system prompt. (If the escape sequences
        are echoed on the screen when the file is executed, a
        DEVICE=ANSI.SYS command was not included in the CONFIG.SYS file
        when the system was turned on.)

    ■  Place the escape sequences in a batch (.BAT) file as part of an
        ECHO command. When the batch file is executed, the sequences are
        sent to the console.

    When escape sequences are entered using the PROMPT command, the Escape
    character is entered as $e. When escape sequences are entered using a
    word processor to create an ASCII text or batch file, the Escape
    character is usually entered by pressing the Esc key or by holding
    down the Alt key while typing 27 on the numeric keypad. (See the
    documentation provided with the word-processor for specific
    instructions.) In most cases, the escape character will appear in the
    word processor or text editor as a back-arrow character () or a
    caret-left bracket combination (^[).

    Note: When the escape character is represented as ^[ (as it is in
    EDLIN, for example), an additional left-bracket character must still
    be added to properly begin an ANSI escape sequence. Thus, the
    beginning of a valid ANSI escape sequence in EDLIN appears as ^[[.

    The tables in this section use the abbreviation ESC to show where the
    ASCII escape character 27 (1BH) appears in the string.

    Note: Case is significant for the terminal character in the string.

    The following escape sequences control cursor movement:


╓┌───────────────────────┌───────────────────┌───────────────────────────────╖
    Operation          Escape Sequence     Effect
    ──────────────────────────────────────────────────────────────────────
    Cursor Up          ESC[numberA         Moves the cursor up number
                                            rows (1-24, default = 1). Has
                                            no effect if cursor is on the
                                            top row.

    Cursor Down        ESC[numberB         Moves the cursor down number
                                            rows (1-24, default = 1). Has
                                            no effect if cursor is on the
                                            bottom row.

    Cursor Right       ESC[numberC         Moves the cursor right number
                                            rows (1-79, default = 1). Has
                                            no effect if cursor is in the
                                            far right column.

    Cursor Left        ESC[numberD         Moves the cursor left number
                                            rows (1-79, default = 1). Has
                                            no effect if cursor is in the
                                            far left column.

    Position Cursor    ESC[row;columnH     Moves the cursor to the
                                            specified row (1-25, default =
                                            1) and column (1-80, default =
                                            1). If row is omitted, the
                                            semicolon before column must
                                            be specified.

    Position Cursor    ESC[row;columnf     Same as above.

    Save Cursor        ESC[s               Stores the current row and
    Position                               column position of the cursor.
                                            Cursor can be restored to this
                                            position later with a Restore
                                            Cursor Position escape
                                            sequence.

    Restore Cursor     ESC[u               Moves the cursor to the
    Position                               position of the most recent
                                            Save Cursor Position escape
                                            sequence.


    The following two escape sequences are used to erase all or part of
    the display:


╓┌───────────────────────┌───────────────────┌───────────────────────────────╖
    Operation          Escape Sequence     Effect
    ──────────────────────────────────────────────────────────────────────
    Erase Display      ESC[2J              Clears the screen and places
                                            the cursor at the home
                                            position.

    Erase Line         ESC[K               Erases from the cursor position
                                            to the end of the same row.


    The following escape sequences control the width and the color
    capability of the display. The use of any of these sequences clears
    the screen.


╓┌───────────────────────┌───────────────────┌───────────────────────────────╖
    Operation          Escape Sequence     Effect
    ──────────────────────────────────────────────────────────────────────
    Set Mode           ESC[=0h             Sets display to 40 x 25
                                            monochrome (text).

                        ESC[=1h             Sets display to 40 x 25 color
                                            (text).

                        ESC[=2h             Sets display to 80 x 25
                                            monochrome (text).

                        ESC[=3h             Sets display to 80 x 25 color
                                            (text).

                        ESC[=4h             Sets display to 320 x 200
                                            4-color (graphics).

                        ESC[=5h             Sets display to 320 x 200
                                            4-color (graphics, color burst
                                            disabled).

                        ESC[=6h             Sets display to 640 x 200
                                            2-color (graphics).


    The following escape sequences control whether characters will wrap
    around to the first column of the next row after the rightmost column
    in the current row has been filled:


╓┌───────────────────────┌───────────────────┌───────────────────────────────╖
    Operation          Escape Sequence     Effect
    ──────────────────────────────────────────────────────────────────────
    Enable Character   ESC[=7h             Sets character wrap.
    Wrap

    Disable Character  ESC[=7l             Disables character wrap. (Note
    Wrap                                   that the terminating letter is
                                            a lowercase L.)


    The following escape sequence controls specific graphics attributes
    such as intensity, blinking, superscript, and subscript, as well as
    the foreground and background colors:

    ESC[attrib;...;attribm

    where:

    attrib     is one or more of the following values. Multiple values
                must be separated by semicolons.

╓┌────────────┌──────────────────────┌──────┌────────────┌──────┌────────────╖
    Value   Attribute              Value  Foreground   Value  Background
                                        Color               Color
    ──────────────────────────────────────────────────────────────────────
    0       All attributes off     30     Black        40     Black
    1       High intensity (bold)  31     Red          41     Red
    2       Normal intensity       32     Green        42     Green
    4       Underline (mono-
            chrome only)           33     Yellow       43     Yellow
    5       Blink                  34     Blue         44     Blue
    7       Reverse video          35     Magenta      45     Magenta
    8       Concealed (invisible)  36     Cyan         46     Cyan
                                    37     White        47     White

    Note: Values 30 through 47 meet the ISO 6429 standard.

    The following escape sequence allows redefinition of keyboard keys to
    a specified string:

    ESC[code;string;...p

    where:

    code       is one or more of the following values that represent
                keyboard keys. Semicolons shown in this table must be
                entered in addition to the required semicolons in the
                command line.

    string     is either the ASCII code for a single character or a
                string contained in quotation marks. For example, both 65
                and "A" can be used to represent an uppercase A.

╓┌───────────────────────┌─────────┌─────────┌─────────┌─────────────────────╖
    Key                               Code
    ──────────────────────────────────────────────────────────────────────
                        Alone     Shift-    Ctrl-     Alt-
    ──────────────────────────────────────────────────────────────────────
    F1                 0;59      0;84      0;94      0;104
    F2                 0;60      0;85      0;95      0;105
    F3                 0;61      0;86      0;96      0;106
    F4                 0;62      0;87      0;97      0;107
    F5                 0;63      0;88      0;98      0;108
    F6                 0;64      0;89      0;99      0;109
    F7                 0;65      0;90      0;100     0;110
    F8                 0;66      0;91      0;101     0;111
    F9                 0;67      0;92      0;102     0;112
    F10                0;68      0;93      0;103     0;113
    Home               0;71      55        0;119      -
    Up Arrow           0;72      56         -         -
    Pg Up              0;73      57        0;132      -
    Left Arrow         0;75      52        0;115      -
    Down Arrow         0;77      54        0;116      -
    End                0;79      49        0;117      -
    Down Arrow         0;80      50         -         -
    Pg Dn              0;81      51        0;118      -
    Ins                0;82      48         -         -
    Del                0;83      46         -         -
    PrtSc               -         -        0;114      -
    A                  97        65        1         0;30
    B                  98        66        2         0;48
    C                  99        67        3         0;46
    D                  100       68        4         0;32
    E                  101       69        5         0;18
    F                  102       70        6         0;33
    G                  103       71        7         0;34
    H                  104       72        8         0;35
    I                  105       73        9         0;23
    J                  106       74        10        0;36
    K                  107       75        11        0;37
    L                  108       76        12        0;38
    M                  109       77        13        0;50
    N                  110       78        14        0;49
    O                  111       79        15        0;24
    P                  112       80        16        0;25
    Q                  113       81        17        0;16
    R                  114       82        18        0;19
    S                  115       83        19        0;31
    T                  116       84        20        0;20
    U                  117       85        21        0;22
    V                  118       86        22        0;47
    W                  119       87        23        0;17
    X                  120       88        24        0;45
    Y                  121       89        25        0;21
    Z                  122       90        26        0;44
    1                  49        33         -        0;120
    2                  50        64         -        0;121
    3                  51        35         -        0;122
    4                  52        36         -        0;123
    5                  53        37         -        0;124
    6                  54        94         -        0;125
    7                  55        38         -        0;126
    8                  56        42         -        0;127
    9                  57        40         -        0;128
    0                  48        41         -        0;129
    -                  45        95         -        0;130
    =                  61        43         -        0;131
    Tab                9         0;15       -         -
    Null               0;3        -         -         -

Examples

    The following examples use ESC or $e to show where the ASCII escape
    character 27 (1BH) appears in the string. The PROMPT examples can be
    typed as shown, but for the examples that use ESC to denote the escape
    character, the actual escape character should be typed in its
    place.

    To move the cursor to row 10, column 30 and display the string Main
    Menu, use the escape sequence

    ESC[10;30fMain Menu

    or

    ESC[10;30HMain Menu

    To move the cursor to row 5, column 10 and display the letter A
    (ESC[5;10fA), move the cursor down one row (ESC[B), move the cursor
    back one space and display the letter B (ESC[DB), move the cursor down
    one row (ESC[B), and move the cursor back one space and display the
    letter C (ESC[DC), use the escape sequence

    ESC[5;10fAESC[BESC[DBESC[BESC[DC

    To use ANSI escape sequences with the PROMPT command to save the
    current cursor position ($e[s), move the cursor to row 1, column 69
    ($e[1;69f), display the current time using the PROMPT command's $t
    function, restore the cursor position ($e[u), and then display the
    current path using the PROMPT command's $p function and display a
    greater-than sign using the PROMPT command's $g function, use the
    escape sequence

    C>PROMPT $e[s$e[1;69f$t$e[u$p$g  <Enter>

    To erase the display (ESC[2J), then move the cursor to row 10, column
    30 and display the string Main Menu (ESC[10;30fMain Menu), use the
    escape sequence

    ESC[2JESC[10;30fMain Menu

    To move the cursor to row 5, column 40 (ESC[5;40f) and erase the
    remainder of the row starting at the current cursor position (ESC[K),
    use the escape sequence

    ESC[5;40fESC[K

    To move the cursor to row 3 (ESC[3;f), erase the entire row (ESC[K),
    move the cursor down one row (ESC[B), erase that entire row (ESC[K),
    move the cursor down one row and erase that entire row, use the escape
    sequence

    ESC[3;fESC[KESC[BESC[KESC[BESC[K

    To set the display mode to 25 rows of 80 columns in color (ESC[=3h)
    and disable character wrap (ESC[=7l), use the escape sequence

    ESC[=3hESC[=7l

    Note that ESC[=3h will also clear the screen.

    To enable character wrap, use the escape sequence

    ESC[=7h

    To set the foreground color to black and the background color to blue
    (ESC[30;44m), clear the display (ESC[2J), then position the cursor at
    row 10, column 30 and display the string Main Menu (ESC[10;30fMain
    Menu), use the escape sequence

    ESC[30;44mESC[2JESC[10;30fMain Menu

    To (effectively) exchange the backslash and question-mark keys using
    literal strings to denote the keys, use the escape sequence

    ESC["\";"?"pESC["?";"\"p

    To exchange the backslash and question-mark keys using each key's
    ASCII value to denote the key, use the escape sequence

    ESC[92;63pESC[63;92p

    To restore the backslash and question-mark keys to their original
    meanings, use the escape sequence

    ESC["\";"\"pESC["?";"?"p

    or

    ESC[92;92pESC[63;63p

    To redefine the Alt-F9 key combination (ESC[0;112) so that it issues a
    CLS command (;"CLS") plus a carriage return (;13) to execute the CLS
    command, then issues a DIR command piped through the SORT filter
    starting at column 24 (;"DIR|SORT /+24") followed by another
    carriage return, use the escape sequence

    ESC[0;112;"CLS";13;"DIR | SORT /+24";13p

    To restore the Alt-F9 key combination to its original meaning, use the
    escape sequence

    ESC[0;112;0;112p



APPEND
3.2
Set Data-File Search Path
External


Purpose

    Specifies a search path for open operations on data files. (Also
    supported with some implementations of version 3.1, for use with
    networks.)

Syntax

    APPEND [[drive:]path] [;[drive:]path ...]

    or

    APPEND ;

    where:

    path    is the name of a valid directory, optionally preceded by a
            drive.

Description

    APPEND is a terminate-and-stay-resident program that is used to
    specify a path or paths to be searched for data files (in contrast
    with the PATH command, which specifies a path to be searched for
    executable or batch files). The search path can include a network
    drive. If a program attempts to open a file and the file is not found
    in the current or specified directory, each path given in the APPEND
    command is searched.

    If the APPEND command is entered with a path consisting of only a
    semicolon character (;), a "null" search path for data files is set;
    that is, no directory other than the current or specified directory is
    searched. This effectively cancels any search paths previously set
    with an APPEND command but does not free the memory used by
    APPEND.

    An APPEND command without any parameters displays the current search
    path(s) for data files.

    Note that a program cannot detect whether an opened file was found
    where it was expected (in the current or specified directory) or in
    some other directory specified in the APPEND command.

    Warning: When an assigned drive is to be part of the search path,
    the ASSIGN command must be used before the APPEND command. Use of the
    ASSIGN command should be avoided whenever possible because it hides
    drive characteristics from those programs that require detailed
    knowledge of the drive size and format.

Examples

    To cause the directories C:\SYSTEM and C:\SOURCE to be searched for a
    file during an open operation if the file is not found in the current
    or specified directory, type

    C>APPEND C:\SYSTEM;C:\SOURCE  <Enter>

    To display the current search path for data files, type

    C>APPEND  <Enter>

    MS-DOS then displays

    APPEND=C:\SYSTEM;C:\SOURCE

    To ensure that no directories other than the current or specified
    directory are searched during a file open operation, type

    C>APPEND ;  <Enter>

Messages

    APPEND / ASSIGN Conflict
    APPEND was used before ASSIGN.

    Incorrect DOS version
    The version of APPEND is not compatible with the version of MS-DOS
    that is running.

    No appended directories
    The APPEND command had no parameters and no APPEND search path is
    active.



ASSIGN
3.0 and later
Assign Drive Alias
External


Purpose

    Redirects requests for disk operations on one drive to a different
    drive. (Available with PC-DOS beginning with version 2.0.)

Syntax

    ASSIGN [x=y [...]]

    where:

    x          is a valid designator (A, B, C, etc.) for a disk drive
                that physically exists in the system.

    y          is a valid designator for the drive to be accessed by
                references to x.

Description

    ASSIGN is a terminate-and-stay-resident program that redirects all
    references to drive x or files on drive x to drive y. The ASSIGN
    command is intended for use with application programs that require
    files to reside on drive A or B and have no provision within the
    program for changing those drives.

    Multiple drive assignments can be requested in the same ASSIGN command
    line; the drive pairs must be separated with spaces, commas, or
    semicolons. Unlike the form in most other MS-DOS commands, the drive
    letters are not followed by colon characters (:). When a single drive
    is assigned, the equal sign is optional.

    ASSIGN commands are not incremental. Each new ASSIGN command replaces
    assignments made with the previous ASSIGN command and cancels any
    assignments not specifically replaced. Entering ASSIGN with no
    parameters cancels all current drive assignments.

    Warning: Use of the ASSIGN command should be avoided whenever
    possible because it hides drive characteristics from those programs
    that require detailed knowledge of the drive size and format; in
    particular, drives redirected with an ASSIGN statement should never be
    used with a BACKUP, RESTORE, LABEL, JOIN, SUBST, or PRINT command.
    ASSIGN can also defeat the checking performed by the COPY command to
    prevent a file from being copied onto itself. The FORMAT, SYS,
    DISKCOPY, and DISKCOMP commands ignore any drive reassignments made
    with ASSIGN.

    With MS-DOS versions 3.1 and later, the SUBST command should be used
    instead of ASSIGN. For example, the command

    C>ASSIGN A=C  <Enter>

    should be replaced with the command

    C>SUBST A: C:\  <Enter>

Examples

    To redirect all requests for drive A to drive C, type

    C>ASSIGN A=C  <Enter>

    To redirect all requests for drives A and B to drive C, type

    C>ASSIGN A=C B=C  <Enter>

    To cancel all drive redirections currently in effect, type

    C>ASSIGN  <Enter>

Messages

    Incorrect DOS version
    The version of ASSIGN is not compatible with the version of MS-DOS
    that is running.

    Invalid parameter
    One of the specified drive designators refers to a drive that does not
    exist in the system.



ATTRIB
3.0 and later
Change File Attributes
External


Purpose

    Sets, removes, or displays a file's read-only and/or archive
    attributes.

Syntax

    ATTRIB [+R|-R] [+A|-A] [drive:]pathname

    where:

    +R          marks the file read-only.

    -R          removes the read-only attribute.

    +A          sets the file's archive flag (version 3.2).

    -A          removes the file's archive flag (version 3.2).

    pathname   is the name and location, optionally preceded by a drive,
                of the file whose attributes are to be changed or
                displayed; wildcard characters are permitted in the
                filename.

Description

    Each file has an entry in the disk's directory that contains its name,
    location, and size; the date and time it was created or last modified;
    and an attribute byte. For normal files, bits 0, 1, 2, and 5 in the
    attribute byte designate, respectively, whether the file is read-only,
    hidden, or system and whether it has been changed since it was last
    backed up.

    The ATTRIB command provides a way to alter the read-only and archive
    bits from the MS-DOS command level. If a file is marked read-only, it
    cannot be deleted or modified; thus, crucial programs or data can be
    protected from accidental erasure. A file's archive flag can be used
    together with the /M switch of the BACKUP command or the /M or /A
    switch of the XCOPY command to allow an incremental or selective
    backup of files from one disk to another.

    If the ATTRIB command is entered with only a pathname, the current
    attributes of the selected file are displayed. An R is displayed next
    to the name of a file that is marked read-only and an A is displayed
    if the file has the archive flag set.

Examples

    To make the file MENUMGR.C in the current directory of the current
    drive a read-only file, type

    C>ATTRIB +R MENUMGR.C  <Enter>

    To display the attributes of the file LETTER.DOC in the directory
    \SOURCE on the disk in drive D, type

    C>ATTRIB D:\SOURCE\LETTER.DOC  <Enter>

    MS-DOS then displays

    R A      D:\SOURCE\LETTER.DOC

    to indicate that the file is marked read-only and the archive flag has
    been set.

    To set the archive flag on all files in the directory \SYSTEM on drive
    C and mark them as read-only, type

    C>ATTRIB +A +R C:\SYSTEM\*.*  <Enter>

Messages

    Access denied
    ATTRIB cannot be used to alter or replace the attributes of a file in
    use across a network.

    DOS 2.0 or later required
    ATTRIB does not work with versions of MS-DOS earlier than 2.0.

    Incorrect DOS version
    The version of ATTRIB is not compatible with the version of MS-DOS
    that is running.

    Invalid number of parameters
    More than two attributes were used before the pathname.

    Invalid path or file not found
    The file named in the command line or one of the directories in the
    given path does not exist.

    Syntax error
    An invalid attribute was supplied or the attribute was not properly
    placed before the pathname in the command line.



BACKUP
2.0 and later
Back Up Files
External


Purpose

    Creates backup copies of files, along with the associated directory
    information necessary to restore the files to their original
    locations.

Syntax

    BACKUP source destination [/A] [/D:date] [/L:filename] [/M] [/P]
    [/S] [/T:time]

    where:

    source       is the location (drive and/or path) and, optionally, the
                name of the files to be backed up; wildcard characters
                are permitted in the filename.

    destination  is the drive to receive the backup files.

    /A           adds the files to existing files on the destination disk
                without erasing the destination disk.

    /D:date      backs up only those files modified on or after date.

    /L:filename  creates a log file with the specified name in the root
                directory of the disk being backed up. If filename is
                not specified, BACKUP creates a file named BACKUP.LOG
                and places the log entries there. Use of the
                /L:filename switch may cause loss of IBM com-
                patibility.

    /M           backs up only those files modified since the last
                backup.

    /P           packs the destination disk with as many files as
                possible, creating subdirectories, if necessary, to
                hold some of the files. Use of the /P switch causes
                loss of IBM compatibility.

    /S           backs up the contents of all subdirectories of the
                source directory.

    /T:time      backs up only those files modified on or after time.

    Note: Not all switches are supported by all implementations of
    MS-DOS.

Description

    The BACKUP command creates a backup copy of the specified file or
    files, transferring them from either a floppy disk or a fixed disk to
    another removable or fixed disk. The backup file is in a special
    format that includes information about the original file's location in
    the directory structure. Files created by BACKUP can be restored to
    their original form only with the RESTORE command.

    BACKUP can back up a single file or many files in the same operation.
    If only a drive letter is given as the source, all the files in the
    current directory of that disk are backed up. If only a path is given
    as the source, all the files in the specified directory are backed up.
    If the /S switch is used, all the files in the current or specified
    directory are backed up, and the files in all its subdirectories as
    well. If both a path and a filename are entered as the source, the
    specified file or files in the named directory are backed up.

    If the source file is marked read-only, the resulting backup file will
    also be marked read-only. If the source file's archive bit is set, it
    will be cleared for both the source and the destination files. BACKUP
    also backs up hidden files; the files will remain hidden on the
    destination disk.

    If the destination disk is a floppy disk, its previous contents are
    erased as part of the backup operation (unless the /A switch is
    included in the command line and the destination disk has already been
    used as a backup disk--that is, the disk contains a valid BACKUPID.@@@
    file). If the files being backed up do not fit onto a single floppy
    disk, the user will be prompted to insert additional disks until the
    backup operation is complete.

    If the destination disk is a fixed disk, the backed-up files are
    placed in a directory named \BACKUP. If a \BACKUP directory already
    exists on the fixed disk, any files previously contained in it are
    erased as part of the backup operation (unless the /A switch is
    included in the command line and the destination disk has already been
    used as a backup disk_ that is, the \BACKUP directory contains a valid
    BACKUPID.@@@ file). Other files on the destination fixed disk are not
    disturbed.

    A control file named BACKUPID.@@@ is placed on every floppy disk onto
    which files are backed up or in the /BACKUP directory if the files are
    backed up onto a fixed disk. The BACKUPID.@@@ file has the following
    format:

╓┌──────────────┌──────────┌─────────────────────────────────────────────────╖
    Byte      Value      Use
    ──────────────────────────────────────────────────────────────────────
    00H       00 or FFH  Not last floppy disk/last floppy disk

    01-02H    nn         Floppy disk number in low-byte/high-byte decimal
                        format
    03-04H    nnnn       Full year in low-byte/high-byte order

    05H       1-31       Day of the month

    06H       1-12       Month of the year

    07-0AH    nnnn       Standard MS-DOS system time if the /T:time
                        switch was used; otherwise 0

    0B-7FH    00         Not used

    Each backed-up file also has a 128-byte header added to it when it is
    created. The header has the following format:

╓┌──────────────┌──────────┌─────────────────────────────────────────────────╖
    Byte      Value      Use
    ──────────────────────────────────────────────────────────────────────
    00H       00 or FFH  Not last floppy disk/last floppy disk on which
                        this file resides

    01H       nn         Floppy disk number

    02-04H    00         Not used

    05-44H    nn         File's full pathname, except for drive designator

    45-52H    00         Not used

    53H       nn         Length of the file's pathname plus one

    54-7FH    00         Not used

    The /T:time, /D:date, and /M switches allow incremental or partial
    backups. The /T:time switch excludes files modified or created before
    a certain time and should be used in the form of the COUNTRY command
    in effect. For the USA, the format is /T:hh:mm:ss. (The /T:time
    switch is not supported in all implementations of BACKUP.) The /D:date
    switch excludes files modified or created before a certain date and
    should be used in the form of the COUNTRY command in effect. For the
    USA, the format is /D:mm-dd-yy. The /M switch selects only those files
    that have been modified since the last backup operation.

    The /L:filename switch causes a log file to be created on the source
    disk. This file includes the name of each file backed up, the time and
    date, and the number of the destination disk that received that backup
    file. If filename is omitted, the name defaults to BACKUP.LOG. Use of
    the /L:filename switch can cause compatibility problems between MS-
    DOS and PC-DOS because the backup log file may match the search
    pattern and be backed up, too, resulting in an extra file on the
    backup disk.

    The /P switch causes backup files to be packed as densely as possible
    on the destination disk. When many short files are being backed up to
    floppy disks, the number of files that fit on the destination disk may
    exceed the number of entries that will fit in the destination's root
    directory. If the /P switch is included in the command line,
    subdirectories are created on the destination disk as needed to use
    the disk space more effectively. The /P switch is not supported under
    PC-DOS; backup disks created with the /P switch will not be compatible
    with IBM's BACKUP and RESTORE commands.

    Warning: BACKUP should not be used on disk directories or drives
    that have been redirected with an ASSIGN, JOIN, or SUBST
    command.

Return Codes

    0  Backup operation was successful.
    1  No files were found to back up.
    2  Some files were not backed up because of sharing conflicts
        (versions 3.0 and later).
    3  Backup operation was terminated by user.
    4  Backup operation was terminated because of error.

Examples

    To back up the file REPORT.TXT in the current directory on the current
    drive, placing the backup file on the disk in drive A, type

    C>BACKUP REPORT.TXT A:  <Enter>

    To back up all the files in the subdirectory B:\V2\SOURCE, placing the
    backup files on the disk in drive A, type

    C>BACKUP B:\V2\SOURCE A:  <Enter>

    To back up all the files with extension .C in the directory \V2\SOURCE
    on the current drive, placing the backup files on the disk in drive A,
    type

    C>BACKUP \V2\SOURCE\*.C A:  <Enter>

    To back up all the files with the extension .ASM from the current
    directory on the current drive and from all its subdirectories,
    placing the backup files on the disk in drive A, type

    C>BACKUP *.ASM A: /S  <Enter>

    To back up all the files that have been modified since the last backup
    from all the subdirectories on drive C, placing the backup files on
    the disk in drive A, type

    C>BACKUP C:\ A: /S /M  <Enter>

    To back up all the files with the extension .C from the directory
    C:\V2\SOURCE that were modified on or after October 16, 1985, placing
    the backup files on the disk in drive A, type

    C>BACKUP C:\V2\SOURCE\*.C A: /D:10-16-85  <Enter>

Messages

    *** Backing up files to drive X: ***
    Diskette Number:n
    This informational message informs the user of the progress of the
    BACKUP command.

    *** Last file not backed up ***
    The destination drive does not have enough space to back up the last
    file.

    *** Not able to back up file ***
    One of the system calls used by BACKUP failed unexpectedly; for
    example, a file could not be opened, read, or written.

    Cannot create Subdirectory BACKUP on drive X:
    Drive X is full or its root directory is full.

    DOS 2.0 or later required
    BACKUP does not work with versions of MS-DOS earlier than 2.0.

    Error trying to open backup log file
    Continuing without making log entries
    The /L switch was used and BACKUP is unable to create the backup log
    file.

    Files cannot be added to this diskette
    unless the PACK (/P) switch is used
    Set the switch (Y/N)?
    The root directory of the destination disk is full and a subdirectory
    must be created to hold the remaining files. Respond with Y to cause
    BACKUP to create a subdirectory and continue backing up files into it;
    respond with N to return to MS-DOS.

    Incorrect DOS version
    The version of BACKUP is not compatible with the version of MS-DOS
    that is running.

    Insert backup diskette in drive X:
    Strike any key when ready
    This message prompts the user to insert a disk to receive the backup
    files into the specified destination drive.

    Insert backup diskette n in drive X:
    Strike any key when ready
    The files being backed up will not fit onto a single floppy disk; this
    message prompts the user to insert the next floppy disk. Multiple-
    floppy-disk backup disks should be labeled and numbered to match the
    number displayed in this message.

    Insert backup source diskette in drive X:
    Strike any key when ready
    This message prompts the user to insert the floppy disk to be backed
    up into the specified source drive.

    Insert last backup diskette in drive X:
    Strike any key when ready
    This message prompts the user to insert the final disk that will
    receive the backup files into the specified destination drive.

    Insufficient memory
    Available system memory is insufficient to run the BACKUP
    program.

    Invalid argument
    One of the switches specified in the command line is invalid or is not
    supported in the version of BACKUP being used.

    Invalid Date/Time
    An invalid date or time was given with the /D:date or /T:time
    switch.

    Invalid drive specification
    The source or destination drive specified in the command line is not
    available or is not valid.

    Invalid number of parameters
    At least two parameters, the source and the destination, must be
    specified in the command line; a maximum of seven switches can be
    specified after the source and destination.

    Invalid parameter
    One of the switches supplied in the command line is invalid.

    Invalid path
    The path specified as the source is invalid or does not exist.

    Last backup diskette not inserted
    Insert last backup diskette in drive X:
    Strike any key when ready
    The backup disk inserted as the last backup disk was not the correct
    disk. Insert the correct disk.

    No space left on device
    The destination disk is full.

    No such file or directory
    The source specified is invalid or does not exist.

    Source and target drives are the same
    The disks specified as the source and destination disks are
    identical.

    Source disk is Non-removable
    The disk containing the files to be backed up is a fixed disk.

    Target can not be used for backup
    The disk specified as the destination disk is damaged or the /A switch
    was used in the command line and the disk does not contain a valid
    BACKUPID.@@@ file.

    Target disk is Non-removable
    The disk that will contain the backed-up files is a fixed disk.

    Target is a floppy disk

    or

    Target is a hard disk
    This informational message indicates which type of disk was specified
    as the destination disk.

    Too many open files
    Too many files are open. Increase the value of the FILES command in
    the CONFIG.SYS file.

    Unable to erase filename
    BACKUP is unable to erase an older version of a backed-up file because
    the file is read-only or is in use by another program.

    Warning! Files in the target drive
    X:\root directory will be erased
    Strike any key when ready
    The destination is a floppy-disk drive and this message warns the user
    that all files in its root directory will be erased before the backup
    operation.

    Warning! Files in the target drive
    C:\BACKUP directory will be erased
    Strike any key when ready
    BACKUP is ready to begin backing up files to the \BACKUP directory on
    drive C. All existing files in the \BACKUP directory will be deleted.
    Press Crtl-Break to terminate the backup operation or press any key to
    continue.

    Warning! No files were found to back up
    No files were found on the source disk in the current or specified
    directory or no files were found matching the filename supplied.



BATCH
1.0 and later
System Batch-File Interpreter
Internal


Purpose

    Sequentially executes commands stored in a batch file (a text-only
    file with a .BAT extension).

Syntax

    filename [[parameter1 [parameter2 [...]]]]

    where:

    filename        is the name of the batch file to be executed, without
                    the .BAT extension. (The filename is always %0 in
                    the list of replaceable parameters.)

    parameter1      is the filename, switch, or string that is the value
                    of the first replaceable parameter (%1).

    parameter2      is the filename, switch, or string that is the value
                    of the second replaceable parameter (%2). As many
                    additional replaceable parameters can be specified
                    as the command line will hold.

Description

    A batch file is an ASCII text file that contains one or more MS-DOS
    commands. It is a useful way to perform sequences of frequently used
    commands without having to type them all each time they are needed.
    When a batch file is invoked by entering its name, the commands it
    contains are carried out in sequence by a special batch-file
    interpreter built into COMMAND.COM. Additional information entered in
    the batch-file command line can be passed to other programs by means
    of replaceable parameters (see below).

    A batch file must always have the extension .BAT. The file can contain
    any number of lines of ASCII text; each line can contain a maximum of
    128 characters. Batch files can be created with EDLIN or another text
    editor or with a word processor in nondocument mode. (Formatted
    document files cannot be used as batch files because they contain
    special control codes or escape sequences that cannot be processed by
    the batch-file interpreter.) Batch files can also be created with the
    MS-DOS COPY command by specifying the CON device (keyboard) as the
    source file and the desired batch-file name as the destination file.
    For example, after the command

    C>COPY CON MYFILE.BAT  <Enter>

    each line that is typed will be placed into MYFILE.BAT. This form of
    the COPY command is terminated by pressing Ctrl-Z or the F6 key,
    followed by the Enter key.

    The commands in a batch file can be any combination of internal MS-DOS
    commands (such as DIR or COPY), external MS-DOS commands (such as
    CHKDSK or BACKUP), the names of other programs or batch files, or the
    following special batch-file directives:

╓┌─────────────┌─────────────────────────────────────────────────────────────╖
    Command  Action
    ──────────────────────────────────────────────────────────────────────
    ECHO     Displays a message on standard output (versions 2.0 and
            later).

    FOR      Executes a command on each of a set of files (versions 2.0
            and later).

    GOTO     Transfers control to another point in a batch file (versions
            2.0 and later).

    IF       Conditionally executes a command based on the existence of a
            file, the equality of two strings, or the return code of a
            previously run program (versions 2.0 and later).

    PAUSE    Waits for the user to press a key before executing the
            remainder of the batch file.

    REM      Allows comment lines to be placed in batch files for internal
            documentation.

    SHIFT    Provides access to more than 10 command-line parameters
            (versions 2.0 and later).

    These special batch commands are discussed individually, with
    examples, in the following pages.

    A batch file is executed by entering its name, without the .BAT
    extension, in response to the MS-DOS prompt. The system's command
    processor, COMMAND.COM, searches the current directory and then each
    directory named in the PATH environment variable for a file with the
    specified name and the extension .COM, .EXE, or .BAT, in that order.
    If a .COM or .EXE file is found, it is loaded into memory and receives
    control; if a .BAT file is found, it is assumed to be a text file and
    is passed to the batch-file interpreter. (If two files with the same
    name exist in the same directory, one with a .COM or .EXE extension
    and the other with a .BAT extension, it is not possible to execute the
    .BAT file--the .COM or .EXE file is always loaded instead.)

    If the disk that contains a batch file is removed before all the
    commands in the batch file are executed, COMMAND.COM will prompt the
    user to replace the disk so that the batch file can be completed.
    Execution of a batch file can be terminated by pressing Ctrl-C or
    Ctrl-Break, causing COMMAND.COM to issue the message Terminate batch
    job? (Y/N). If the user responds with Y, the batch file is abandoned
    and COMMAND.COM displays its usual prompt.

    The input redirection (<), output redirection (> or >>), and piping (|)
    characters have no effect when they are used in a command line that
    invokes a batch file. However, they can be used in individual command
    lines within the file.

    Ordinarily, if a batch file includes the name of another batch file,
    control passes to the second batch file and never returns. That is,
    when the commands in the second batch file are completed, the batch
    file interpreter terminates and any remaining commands in the first
    batch file are not processed. However, a batch file can execute
    another batch file without itself being terminated by first loading a
    secondary copy of the system's command processor. To accomplish this,
    the first batch file must contain a command of the form

    COMMAND /C batch2

    where batch2 is the name of the second batch file. When all the
    commands in the second batch file have been processed, the secondary
    copy of COMMAND.COM exits and the first batch file continues where it
    left off. (See USER COMMANDS: COMMAND for details on the use
    of the /C switch with COMMAND.COM.)

    A batch file can be made more flexible by including replaceable
    parameters inside the file. A replaceable parameter takes the form %n,
    where n is a numeral in the range 0 through 9. Replaceable parameters
    simply hold places in the batch file for filenames or other
    information that the user will supply in the command line when the
    batch file is invoked.

    When a batch file is interpreted and a command containing a
    replaceable parameter is encountered, the corresponding value
    specified in the batch-file command line is substituted for the
    replaceable parameter and the command is then executed. The %0
    replaceable parameter is replaced by the name of the batch file
    itself; parameters %1 through %9 are replaced sequentially with the
    remaining values specified in the command line. If a replaceable
    parameter references a command-line entry that does not exist, the
    parameter is replaced with a null (zero-length) string.

    For example, if the batch file MYBATCH.BAT contains the single
    line

    COPY %1.COM %2.SAV

    and is executed by entry of

    C>MYBATCH FILE1 FILE2  <Enter>

    the actual command that is carried out is

    COPY FILE1.COM FILE2.SAV

    (The SHIFT batch command makes it possible to use more than 10
    replaceable parameters. See USER COMMANDS: BATCH:SHIFT)

    An environment variable is a special case of a replaceable parameter.
    If the SET command is used in the form

    SET name=value

    to add an environment variable to the system's environment block, the
    string value will be substituted for the string %name% wherever the
    latter is encountered during the interpretation of a batch file. This
    capability is available only in versions 2.x, 3.1, and 3.2.



BATCH: AUTOEXEC.BAT
1.0 and later
System Startup Batch File


Description

    The AUTOEXEC.BAT file is an optional batch file containing a series of
    MS-DOS commands that automatically execute when the system is turned
    on or restarted.

    When the system's default command processor, COMMAND.COM, is first
    loaded, it looks in the root directory of the current drive for a file
    named AUTOEXEC.BAT. If AUTOEXEC.BAT is not found, COMMAND.COM prompts
    the user to enter the current time and date and then displays the MS
    DOS copyright notice and command prompt. If AUTOEXEC.BAT is found,
    COMMAND.COM sequentially executes the commands within the file. No
    prompts to enter the time and date are issued unless the TIME and DATE
    commands are explicitly included in the batch file; no copyright
    notice is displayed.

    Typical uses of the AUTOEXEC.BAT file include

    ■  Running a program to set the system time and date from a real-time
        clock/calendar located on a multipurpose expansion board (IBM PC,
        PC/XT, or compatibles only)

    ■  Using the MODE command to configure a serial port or to redirect
        printing

    ■  Executing SET commands to configure environment variables

    ■  Setting display colors on a color monitor (if the command
        DEVICE=ANSI.SYS has been included in the CONFIG.SYS file)

    ■  Installing terminate-and-stay-resident (TSR) utilities

    ■  Using the PATH command to tell COMMAND.COM where to find executable
        program files if they are not in the current drive and/or
        directory

    ■  Defining a custom prompt using the PROMPT command

    ■  Invoking an application program such as a database, spreadsheet, or
        word processor

    A secondary copy of the command processor can also be loaded from
    within the AUTOEXEC.BAT file. If this copy of COMMAND.COM is loaded
    with the /P switch, it too searches for an AUTOEXEC.BAT file on the
    current drive and processes the file if it is found. This feature can
    be useful for performing special operations. For example, on very old
    PCs that are unable to start from a fixed disk, a secondary copy of
    the command processor can be used to make the fixed disk's copy of
    COMMAND.COM the copy used by the system from that point on (at the
    expense of some system memory). If the AUTOEXEC.BAT file containing
    the lines

    C:
    COMMAND C:\ /P

    is stored on the floppy disk in drive A when the system is turned on
    or restarted, the first line of the file causes drive C to become the
    current drive; then the second line permanently loads a secondary copy
    of COMMAND.COM from drive C and instructs COMMAND.COM to reload its
    transient portion from the root directory of drive C when necessary.
    This in turn triggers the execution of the AUTOEXEC.BAT file on the
    fixed disk to perform the actual system configuration. Because the
    transient part of COMMAND.COM will be reloaded from the fixed disk
    when necessary, rather than from the floppy disk, system performance
    is improved considerably.

Example

    The following example illustrates several common uses of the
    AUTOEXEC.BAT file to configure the MS-DOS system at startup time. (The
    line numbers are included for reference and are not part of the actual
    file.)

    1    ECHO OFF
    2    SETCLOCK
    3    PROMPT $p$g
    4    MD D:\BIN
    5    COPY C:\SYSTEM\*.* D:\BIN > NUL
    6    PATH=D:\BIN;C:\WP\WORD;C:\MSC\BIN;C:\ASM
    7    APPEND D:\BIN;C:\WP\WORD;C:\ASM
    8    SET INCLUDE=C:\MSC\INCLUDE
    9    SET LIB=C:\MSC\LIB
    10   SET TMP=C:\TEMP
    11   MODE COM1:9600,n,8,1,p
    12   MODE LPT1:=COM1:

    Line 1 causes the batch-file processor to operate silently; that is,
    the commands in the batch file are not displayed on the screen as they
    are executed.

    Line 2 runs a utility program called SETCLOCK, which reads the current
    time and date from a real-time clock chip on a multifunction board and
    sets the system time and date accordingly.

    Line 3 configures COMMAND.COM's user prompt so that it displays the
    current drive and directory.

    Line 4 creates a directory named \BIN on drive D, which in this case
    is a RAMdisk that was created by an entry in the system's CONFIG.SYS
    file.

    Line 5 copies all the programs in the \SYSTEM directory on drive C to
    the \BIN directory on drive D. The normal output of this COPY command
    is redirected to the NUL device--in effect, the output is thrown away
    to avoid cluttering the screen.

    Line 6 sets the search path for executable files and line 7 sets the
    search path for data files. Note that the RAMdisk directory D:\BIN is
    specified as the first directory in the PATH command; therefore, if
    the name of a program is entered and it cannot be found in the current
    directory, COMMAND.COM will look next in the directory D:\BIN. This
    strategy allows commonly used programs (in this example, the programs
    in the \SYSTEM directory that were copied into D:\BIN) to be located
    and loaded quickly.

    Lines 8 through 10 add the environment variables INCLUDE, LIB, and TMP
    to the system's environment. These variables are used by the Microsoft
    C Compiler and the Microsoft Object Linker.

    Line 11 configures the first serial communications port (COM1) and
    line 12 causes program output to the system's first parallel port
    (LPT1) to be redirected to the first serial port. This pair of
    commands allows a serial-interface Hewlett Packard LaserJet printer to
    be used as the system list device.

    Note: Depending on the version of MS-DOS in use, some commands in
    this example may not be available or may support different options.
    See the individual command entries for more detailed
    information.



BATCH: ECHO
2.0 and later
Display Text
Internal


Purpose

    Displays a message during the execution of a batch file and controls
    whether or not batch-file commands are listed on the screen as they
    are executed.

Syntax

    ECHO [ON|OFF|message]

    where:

    ON          enables the display of all subsequent batch-file commands
                as they are executed.

    OFF         disables the display of all subsequent batch-file commands
                as they are executed.

    message     is a text string to be displayed on standard output.

Description

    Each command line of a batch file is ordinarily displayed on the
    screen as it is executed. The ECHO command has a dual usage: to
    control the display of these commands and to display a message to the
    user.

    ECHO is used with ON or OFF to enable or disable the display of
    commands during batch-file processing. If the ECHO command is used
    with no parameter, the current status of the batch processor's ECHO
    flag is displayed. Note that the ECHO flag is always forced on at the
    start of any batch-file processing, even if that batch file was
    invoked by another batch file.

    The ECHO command is not limited to batch files; an ECHO command can
    also be issued at the command prompt. ECHO OFF entered at the command
    prompt prevents the prompt from subsequently being displayed. ECHO ON
    entered interactively restores the display. If ECHO is entered
    interactively without a parameter, the current status of the ECHO flag
    is displayed.

    ECHO can also be followed by a message to be sent to standard output
    regardless of the status of the ECHO flag (on or off). Note that if
    ECHO is on, two copies of the message are actually displayed, the
    first copy preceded by the word ECHO. ECHO message is frequently
    used to display prompts and informative text during the execution of a
    batch file because text following REM or PAUSE commands is not
    displayed if ECHO is off.

    ECHO message can also be used to build lists or other batch files
    dynamically while the batch file is executing. For example, the
    messages in the following ECHO commands are used to build the file
    STARTUP.BAT:

    ECHO CHKDSK > STARTUP.BAT
    ECHO DIR /W >> STARTUP.BAT
    ECHO PROMPT $p$g >> STARTUP.BAT

    The first ECHO command causes the message CHKDSK to be redirected to
    the file STARTUP.BAT. The second and third ECHO commands cause the
    messages DIR /W and PROMPT $p$g to be appended to the existing
    contents of STARTUP.BAT. The completed STARTUP.BAT file contains the
    following:

    CHKDSK
    DIR /W
    PROMPT $p$g

    Note: When the pipe symbol (|) is used in message, the symbol and any
    characters following it are ignored until a redirection symbol (<, >,
    or >>) is encountered, at which point the redirection symbol and the
    remaining characters are recognized. For example, if the line

    ECHO DIR | SORT > STARTUP.BAT

    was placed in a batch file and subsequently executed, the only
    characters echoed to the file STARTUP.BAT would be DIR; the pipe
    symbol and the characters between it and the redirection symbol >
    would be ignored.

Examples

    To disable the display of each batch-file command as it is executed,
    include the following line as the first line in the batch file:

    ECHO OFF

    To display the message Now formatting disk on standard output,
    include the following line in the batch file:

    ECHO Now formatting disk

    To display the current status of the ECHO flag, include the following
    line in the batch file:

    ECHO

    If the ECHO flag is currently off, MS-DOS displays:

    ECHO is off

    To echo a blank line to the screen with versions 2.x, type a space
    after the ECHO command and press Enter. To echo a blank line with
    versions 3.x, type the ECHO command and a space, then hold down Alt
    and type 255 on the numeric keypad; finally, release the Alt key and
    press Enter.

Messages

    ECHO is off

    or

    ECHO is on

    If the ECHO command is entered without a parameter, one of these lines
    is displayed to give the current status of the batch processor's ECHO
    flag.



BATCH: FOR
2.0 and later
Execute Command on File Set
Internal


Purpose

    Executes a command or program for each file in a set of files.

Syntax

    FOR %%variable IN (set) DO command    (batch processing)

    or

    FOR %variable IN (set) DO command     (interactive processing)

    where:

    variable      is a variable name that can be any single character
                except the numerals 0 through 9, the redirection
                symbols (<, >, and >>), and the pipe symbol (|); case is
                significant.

    set           is one or more filenames, pathnames, character strings,
                or metacharacters, separated by spaces, commas, or
                semicolons; wildcard characters are permitted in
                filenames.

    command       is any MS-DOS command or program except the FOR command;
                the variable name %%variable (or %variable in
                interactive mode) can be part of the command.

Description

    The FOR command allows sequential execution of the same command or
    program on each member of a set of files.

    The set parameter can contain multiple filenames (including
    wildcards), pathnames, character strings, or metacharacters such as
    the replaceable parameters %0 through %9. Each of the following lines
    is an example of a valid set:

    (FILE1.TXT %1 %2 B:\PROG\LISTING?.TXT)
    (A:\%1 A:\%2 C:\LETTERS\*.TXT C:MEMO?.*)
    (%PATH%)

    Each filename from set is assigned in turn to %variable and then the
    specified command or program is executed. (When the FOR command line
    is executed in a batch file, the leading percent sign of %%variable
    is removed, leaving %variable.) If a filename in set contains
    wildcards, each matching file is used before the batch processor goes
    on to the next member of set.

    Note: In versions 2.x, set can consist only of a list of single
    filenames, a single filename with wildcard characters, or a
    combination of single filenames and metacharacters. In versions 3.x,
    however, all combinations of these are allowed in the same set.

    The FOR command can also be used interactively at the MS-DOS prompt to
    perform a single command on several files without entering the same
    command for each file. When FOR is used in this manner, only one
    percent sign (%) should be used before the dummy alphabetic variable;
    in this case, the percent sign is not removed during processing. When
    the FOR command is used interactively, environment variables such as
    %PATH% cannot be used as part of the filename set.

Examples

    To view all the files with the extension .TXT in the current
    directory, include the following line in the batch file:

    FOR %%X IN (*.TXT) DO TYPE %%X

    To perform the same function interactively, type

    C>FOR %X IN (*.TXT) DO TYPE %X  <Enter>

    To copy up to nine files to the disk in drive A, specifying the names
    of the files in the batch-file command line, include the following
    line in the batch file:

    FOR %%Y IN (%1 %2 %3 %4 %5 %6 %7 %8 %9) DO COPY %%Y A:

    (Recall that %0 is the name of the batch file.)

    To execute successive batch files under the control of one batch file,
    use the /C switch with COMMAND, as in the following batch-file
    line:

    FOR %%Z IN (BAT1 BAT2 BAT3) DO COMMAND /C %%Z

Message

    FOR cannot be nested
    The command or program performed by a FOR command cannot be another
    FOR command.



BATCH: GOTO
2.0 and later
Jump to Label
Internal


Purpose

    Transfers program control to the batch-file line following the
    specified label.

Syntax

    GOTO name

    where:

    name       is a batch-file label declared elsewhere in the file in
                the form :name.

Description

    The GOTO command causes the batch-file processor to transfer its point
    of execution to the line following the specified label. If the label
    does not exist in the file, execution of the batch file is terminated
    with the message Label not found.

    A batch-file label is defined as a line with a colon character (:) in
    the first column, followed by any text (including spaces but not other
    separator characters such as semicolons or equal signs). Only the
    first eight characters following the colon are significant; spaces are
    not counted in the eight characters.

Examples

    The GOTO command is frequently used in combination with the IF and
    SHIFT batch commands to perform some action based on the return code
    from a program. For example, the following batch file will back up a
    variable number of files or directories, whose names are specified in
    the batch-file command line, to a floppy disk in drive A. The batch
    file accomplishes this by executing the BACKUP program with successive
    pathnames specified in the command line until BACKUP returns a nonzero
    (error) code. Control is then transferred to the label :DONE, and the
    batch file is terminated.

    1    ECHO OFF
    2    :START
    3    BACKUP %1 A:
    4    IF ERRORLEVEL 1 GOTO DONE
    5    SHIFT
    6    GOTO START
    7    :DONE

    Note that the batch file includes two labels, :START and :DONE, in
    lines 2 and 7, respectively. It also includes two GOTO commands, in
    lines 4 and 6. (The line numbers in the listing above are
    included only for reference and are not present in the actual batch
    file.) If the condition in line 4 is true (the BACKUP program returned
    an exit code of 1 or higher), the remainder of line 4 is executed and
    program control passes to the :DONE label in line 7. If the condition
    is false, program control passes to line 5, the SHIFT command is
    executed, and program control goes to line 6, where the GOTO statement
    returns program control to line 2.

Message

    Label not found
    The specified label does not exist in the batch file.



BATCH: IF
2.0 and later
Perform Conditional Execution
Internal


Purpose

    Tests a condition and executes a command or program if the condition
    is met.

Syntax

    IF [NOT] condition command

    where:

    condition       is one of the following:

                    ERRORLEVEL number
                    The condition is true if the exit code of the program
                    last executed by COMMAND.COM was equal to or greater
                    than number. Note that not all MS-DOS commands
                    return explicit exit codes.

                    string1==string2
                    The condition is true if string1 and string2 are
                    identical after parameter substitution; case is
                    significant. The strings cannot contain separator
                    characters such as commas, semicolons, equal signs,
                    or spaces.

                    EXIST pathname
                    The condition is true if the specified file exists.
                    The pathname can include metacharacters.

    command         is the command or program to be executed if the
                    condition is true.

Description

    The IF command provides conditional execution of a command or program
    in a batch file. When condition is true, IF executes the specified
    command, which can be another IF command, any other MS-DOS internal
    command, or a program. When condition is not true, MS-DOS ignores
    command and proceeds to the next line in the batch file. The sense of
    any condition can be reversed by preceding the test or expression with
    NOT.

Examples

    To branch to the label :ERROR if the file LEDGER.DAT does not exist,
    include the following line in the batch file:

    IF NOT EXIST LEDGER.DAT GOTO ERROR

    To branch to the label :ONEPAR if the batch-file command line does
    not contain at least two parameters, include the following line in the
    batch file:

    IF "%2"==""GOTO ONEPAR

    or

    IF %2~==~ GOTO ONEPAR

    Note that the existence of a replaceable parameter can be determined
    by concatenating it to another string. In the first example, quotation
    marks are concatenated on either side of the replaceable parameter; if
    %2 doesn't exist, "%2"=="" evaluates to ""=="", which is true and
    will allow GOTO ONEPAR to be executed. In the second example, a tilde
    character is concatenated to the end of the replaceable parameter; if
    %2 doesn't exist, the argument becomes ~==~.

    To copy the file specified by the first replaceable batch-file
    parameter to drive A only if it does not already exist on the disk in
    drive A, include the following line in the batch file:

    IF NOT EXIST A:%1 COPY %1 A:

    To branch to the label :DONE if the first replaceable batch-file
    parameter exists in the \PROG directory on drive C and in the \BACKUP
    directory on drive C, include the following line in the batch
    file:

    IF EXIST C:\PROG\%1 IF EXIST C:\BACKUP\%1 GOTO DONE

Messages

    Bad command or filename
    The command following the condition in the IF statement was
    misspelled, does not exist, or was represented by a replaceable
    parameter that was not supplied in the command line that invoked the
    batch file.

    Syntax error
    The condition specified in the IF statement cannot be tested.



BATCH: PAUSE
1.0 and later
Suspend Batch-File Execution
Internal


Purpose

    Displays a message, suspends execution of a batch file, and waits for
    the user to press a key.

Syntax

    PAUSE  [message]

    where:

    message    is a text string to be displayed on standard output.

Description

    The PAUSE command displays the message Strike a key when ready... and
    suspends execution of a batch file until the user presses a key. This
    command can be used to allow time for the operator to change disks,
    change the type of forms on the printer, or take some other action
    that is necessary before the batch file can continue.

    If the batch processor's ECHO flag is on when the PAUSE command is
    executed, the entire line containing the PAUSE statement is displayed
    on the screen so that the optional message is visible to the user. The
    message Strike a key when ready... is then displayed on a new line and
    the system waits. Note that Strike a key when ready... is always
    displayed, even if the ECHO flag is off. When the user presses a key,
    execution of the batch file resumes.

    Note: Redirection symbols should not be used within message. They
    prevent the message Strike a key when ready... from being displayed on
    the screen.

    If the user presses Ctrl-C or Ctrl-Break while a PAUSE command is
    waiting for a key to be pressed, a prompt is displayed that gives the
    user the opportunity to terminate the execution of the batch file.
    This same message is displayed whenever the user presses Ctrl-C or
    Ctrl-Break during the execution of a batch file; however, using PAUSE
    commands supplemented by appropriate ECHO commands at strategic points
    within a batch file provides the user with clearly defined breakpoints
    for terminating the file.

Examples

    To display the message Put an empty disk in drive A and then wait
    until the user has pressed a key, include the following line in the
    batch file:

    PAUSE Put an empty disk in drive A

    When this line of the batch file is executed, if the ECHO flag is on,
    the user sees the following messages on the screen:

    C>PAUSE Put an empty disk in drive A
    Strike a key when ready . . .

    If the ECHO flag is off, only the message Strike a key when ready...
    appears.

    To display the message without the prompt and command, the PAUSE
    command can be used immediately after an ECHO command, as
    follows:

    ECHO OFF
    CLS
    ECHO Put an empty disk in drive A
    PAUSE

    This batch file will display the following message on the
    screen:

    Put an empty disk in drive A
    Strike a key when ready . . .

    Note that the message must be included in an ECHO command. With ECHO
    off, a PAUSE message is not displayed.



BATCH: REM
1.0 and later
Include Comment Line
Internal


Purpose

    Designates a remark, or comment, line in a batch file.

Syntax

    REM [message]

    where:

    message    is any text.

Description

    The REM command allows inclusion of remarks, or comments, within a
    batch file. Remarks are often used to document the purpose of other
    commands within the file for the benefit of those who may wish to
    modify the file later.

    If the ECHO flag is on, remarks are displayed on the screen during the
    execution of a batch file. Thus, remarks can also be used to provide
    information, guidance, or prompts to the user; however, the ECHO and
    PAUSE commands are more suitable for these purposes.

    REM can also be used alone to insert blank lines in a batch file to
    improve readability. (If ECHO is on, the word REM will still be
    displayed.)

    Note: The redirection symbols (<,>, and >>) and piping character (|)
    produce no meaningful results with the REM command and should not be
    used.

Example

    To document a batch file's revision history with the internal comment
    This batch file last modified on 6/18/87, include the following line
    in the batch file:

    REM This batch file last modified on 6/18/87



BATCH: SHIFT
2.0 and later
Shift Replaceable Parameters
Internal


Purpose

    Changes the position of the replaceable parameters in a batch-file
    command line, thereby allowing more than 10 replaceable
    parameters.

Syntax

    SHIFT

Description

    Ordinarily only 10 replaceable parameters (%0 through %9, where %0 is
    the name of the batch file) can be referenced within a batch file. The
    SHIFT command allows access to additional parameters specified in the
    command line by shifting the contents of each of the previously
    assigned parameters to a lower number (%1 becomes %0, %2 becomes %1,
    and so on). The previous contents of %0 are lost and are not
    recoverable. The eleventh parameter in the batch-file command line is
    then moved into %9. This allows more than 10 parameters to be
    specified in the batch-file command line and subsequently processed in
    the batch file.

Example

    The following batch file will copy a variable number of files, whose
    names are entered in the batch-file command line, to the disk in drive
    A:

    ECHO OFF
    :NEXT
    IF "%1" == "" GOTO DONE
    COPY %1 A:
    SHIFT
    GOTO NEXT
    :DONE



BREAK
2.0 and later
Set Control-C Check
Internal


Purpose

    Sets or clears MS-DOS's internal flag for Control-C checking.

Syntax

    BREAK [ON|OFF]

Description

    Pressing Ctrl-C or Ctrl-Break while a program is running ordinarily
    terminates the program, unless the program itself contains
    instructions that disable MS-DOS's Control-C handling. As a rule, MS-
    DOS checks the keyboard for a Control-C only when a character is read
    from or written to a character device (keyboard, screen, printer, or
    auxiliary port). Therefore, if a program executes for long periods
    without performing such character I/O, detection of the user's entry
    of a Control-C may be delayed. The BREAK ON command causes MS-DOS to
    also check the keyboard for a Control-C at the time of each system
    call (which slows the system somewhat); the BREAK OFF command disables
    such extended Control-C checking. The default setting for BREAK is
    off.

    If the BREAK command is entered alone, the current status of MS-DOS's
    internal BREAK flag is displayed.

Examples

    To display the current status of the MS-DOS internal flag for extended
    Control-C checking, type

    C>BREAK  <Enter>

    MS-DOS displays

    BREAK is off

    or

    BREAK is on

    depending on the status of the BREAK flag.

    To enable extended checking for Control-C during disk operations,
    type

    C>BREAK ON  <Enter>

Messages

    BREAK is on

    or

    BREAK is off
    Extended Control-C checking is enabled or disabled, respectively.
    These messages occur in response to a BREAK status check.

    Must specify ON or OFF
    An invalid parameter was supplied in a BREAK command.



CHDIR or CD
2.0 and later
Change Current Directory
Internal


Purpose

    Changes the current directory or displays the current path of the
    specified or default disk drive.

Syntax

    CHDIR [drive:][path]

    or

    CD [drive:][path]

    where:

    drive      is the letter of the drive for which the current directory
                will be changed or displayed, followed by a colon. Note
                that use of the drive parameter does not change the
                currently active drive.

    path       is one or more directory names, separated by backslash
                characters (\), that define an existing path.

Description

    The CHDIR command, when followed by an existing path, is used to set
    the working directory for the default or specified disk drive.

    The path parameter consists of the name of an existing directory,
    optionally followed by the names of existing subdirectories, each
    separated from the next by a backslash character. If path begins with
    a backslash, CHDIR assumes that the first named directory is a
    subdirectory of the root directory; otherwise, CHDIR assumes that the
    first named directory is a subdirectory of the current directory. The
    special directory name .., which is an alias for the parent directory
    of the current directory, can be used as the path.

    When CHDIR is entered alone or with only a drive letter followed by a
    colon, the full path of the current directory for the default or
    specified drive is displayed.

    CD is simply an alias for CHDIR; the two commands are identical.

Examples

    To change the current directory for the current (default) disk drive
    to the path \V2\SOURCE, type

    C>CD \V2\SOURCE  <Enter>

    To display the name of the current directory for the disk in drive D,
    type

    C>CD D:  <Enter>

    To return to the parent directory of the current directory, type

    C>CD ..  <Enter>

Messages

    Invalid directory
    One of the directories in the specified path does not exist.

    Invalid drive specification
    An invalid drive letter was given or the named drive does not exist in
    the system.



CHKDSK
1.0 and later
Check Disk Status
External


Purpose

    Analyzes the allocation of storage space on a disk and displays a
    summary report of the space occupied by files and directories.

Syntax

    CHKDSK [drive:][pathname] [/F] [/V]

    where:

    drive     is the letter of the drive containing the disk to be
            analyzed, followed by a colon.

    pathname  is the location and, optionally, the name of the file(s) to
            be checked for fragmentation; wildcard characters are
            permitted in the filename.

    /F        repairs errors (versions 2.0 and later).

    /V        "verbose mode," reports the name of each file as it is
            checked (versions 2.0 and later).

Description

    The CHKDSK command analyzes the disk directory and file allocation
    table for consistency and reports any errors. If the /V switch is
    included in the command line, the name of each file processed is
    displayed as the disk is being analyzed.

    After analyzing the disk, CHKDSK displays a summary of the disk and
    RAM space used and available. The disk-space report includes

    ■  Total disk space in bytes

    ■  Number of bytes allocated to hidden files

    ■  Number of bytes contained in directories

    ■  Number of bytes contained in user files

    ■  Number of bytes contained in bad (unusable) sectors

    ■  Number of available bytes on the disk

    (Hidden files are files that do not appear in a directory listing. A
    bootable MS-DOS or PC-DOS disk always contains two hidden files--
    MSDOS.SYS and IO.SYS or IBMDOS.COM and IBMBIO.COM, respectively--that
    contain the operating system. A volume label, if present, counts as a
    hidden file. In addition, some application programs create hidden
    files for copy protection or other purposes.)

    Directory errors detected by CHKDSK include

    ■  Invalid pointers to data areas

    ■  Bad file attributes in directory entries

    ■  Damage to a portion of the directory that makes it impossible to

        check one or more paths

    ■  Damage to an entire directory that makes the files contained in
        that directory inaccessible

    File allocation table (FAT) errors detected by CHKDSK include

    ■  Defective disk sectors in the FAT
    ■  Invalid cluster (disk allocation unit) numbers in the FAT
    ■  Lost clusters
    ■  Cross-linking of files on the same cluster

    If the /F switch is included in the command line, CHKDSK will attempt
    to repair errors in disk allocation and recover as much data as
    possible. Because repairs usually involve changes to the disk's file
    allocation table that may cause a loss of information, the user is
    prompted for confirmation. Lost clusters are collected into files in
    the root directory with names of the form FILEnnnn.CHK.

    If the command line contains a file specification, CHKDSK will examine
    all files that match the specification and report on their
    fragmentation--that is, on whether or not their sectors are contiguous
    on the disk. (Fragmented files can degrade the performance of the
    system because of the time required to move the drive head back and
    forth across the disk to reach the various parts of the file.) Files
    on a floppy disk can be collected into contiguous sectors by copying
    them to an empty floppy disk. Files on a fixed disk can be collected
    into contiguous sectors by backing them all up to floppy disks,
    erasing all files and subdirectories on the fixed disk, and then
    restoring the files from the floppy disk.

    Warning: CHKDSK should not be used on a network drive or on a drive
    created or affected by an ASSIGN, JOIN, or SUBST command.

Examples

    To check the disk in the current drive, type

    C>CHKDSK  <Enter>

    If CHKDSK finds no errors, a report such as the following is
    displayed:

    Volume HARDDISK    created Jun 8, 1986 9:34a

    21204992 bytes total disk space
        38912 bytes in 3 hidden files
        116736 bytes in 53 directories
    17055744 bytes in 715 user files
        20480 bytes in bad sectors
    3973120 bytes available on disk

        655360 bytes total memory
        566576 bytes free

    Note that the line containing the volume name and creation date does
    not appear if the disk has not been assigned a volume name.

    If CHKDSK finds errors, a message such as the following is
    displayed:

    Errors found, F parameter not specified.
    Corrections will not be written to disk.

    10 lost clusters found in 3 chains.
    Convert lost chains to files  (Y/N)?

    A Y response at this point does not convert the lost chains to files;
    to do this, enter the CHKDSK command again with the /F switch
    specified.

    To correct any allocation errors found by the CHKDSK command,
    type

    C>CHKDSK /F  <Enter>

    In this example, CHKDSK displays its usual report, followed by an
    error message:

    Volume HARDDISK    created Jun 8, 1986 9:34a

    21204992 bytes total disk space
        38912 bytes in 3 hidden files
        116736 bytes in 53 directories
    17055744 bytes in 715 user files
        20480 bytes in bad sectors
    3973120 bytes available on disk

        655360 bytes total memory
        566576 bytes free

    10 lost clusters found in 3 chains.
    Convert lost chains to files (Y/N) ?

    A Y response causes CHKDSK to recover the lost chains of clusters
    into files in the root directory, giving the files the names
    FILE0000.CHK, FILE0001.CHK, FILE0002.CHK, and so on. An N response
    causes CHKDSK to free the lost chains of clusters without saving the
    contents to files.

    To check all files in the directory C:\SYSTEM with the extension .COM
    for fragmentation, type

    C>CHKDSK C:\SYSTEM\*.COM  <Enter>

    CHKDSK displays its usual report, followed by a list of fragmented
    files:

    Volume HARDDISK    created Jun 8, 1986 9:34a

    21204992 bytes total disk space
        38912 bytes in 3 hidden files
        116736 bytes in 53 directories
    17055744 bytes in 715 user files
        20480 bytes in bad sectors
    3973120 bytes available on disk

        655360 bytes total memory
        566576 bytes free

    C:\SYSTEM\ALUSQ.COM
        Contains 2 non-contiguous blocks.

    C:\SYSTEM\EJECT.COM
        Contains 4 non-contiguous blocks.

Messages

    . Does not exist.

    or

    .. Does not exist.
    The . (alias for the current directory) or the .. (alias for the
    parent directory) entry is missing.

    filename is cross linked on cluster n
    Two or more files have been assigned the same cluster. Make a copy of
    both files on another disk and then delete them from the disk
    containing the error. One or both of the resulting files may contain
    information belonging to the other file.

    x lost clusters found in y chains.
    Convert lost chains to files (Y/N)?
    Clusters have been identified that are not assigned to any existing
    file. If the /F switch was included in the original command line,
    respond with Y to convert the lost clusters to files in
    the root directory of the disk with names of the form
    FILEnnnn.CHK. If desired, the recovered clusters can then
    be returned to the free-disk-space pool by erasing the .CHK files.

    Allocation error, size adjusted.
    The size of the file indicated in the disk directory is not consistent
    with the number of clusters allocated to the file. If the /F switch
    was included in the command line, the file is truncated to the size
    indicated in the disk directory.

    All specified file(s) are contiguous.
    The clusters belonging to the specified file(s) are allocated
    contiguously (without fragmentation).

    Cannot CHDIR to pathname
    tree past this point not processed.
    The tree directory structure of the disk being checked cannot be
    traveled to the specified directory. This message indicates severe
    damage to the disk's directories or files.

    Cannot CHDIR to root
    Processing cannot continue.
    In traversing the tree directory structure of the disk being checked,
    CHKDSK was unable to return to the root directory. This message
    indicates severe damage to the disk's directories or files.

    Cannot CHKDSK a Network drive
    The drive containing the disk to be checked has been assigned to a
    network.

    Cannot CHKDSK a SUBSTed or ASSIGNed drive
    The drive containing the disk to be checked has been substituted or
    assigned.

    Cannot recover . entry, processing continued.
    The special directory entry . (alias for the current directory) is
    defective.

    Cannot recover .. entry,
    Entry has a bad attribute

    or

    Cannot recover .. entry,
    Entry has a bad link

    or

    Cannot recover .. entry,
    Entry has a bad size
    The special directory entry .. (alias for the parent directory of the
    current directory) is defective due to a bad attribute, link, or
    size.

    CHDIR .. failed, trying alternate method.
    While checking the tree structure, CHKDSK was unable to return to the
    parent directory of the current directory. It will attempt to return
    to that directory by starting over at the root directory and searching
    again.

    Contains n non-contiguous blocks.
    The clusters assigned to the specified file are not allocated
    contiguously on the disk.

    Directory is joined
    CHKDSK cannot process directories that have been joined using the JOIN
    command. Use the JOIN /D command to unjoin the directories, then run
    CHKDSK again.

    Directory is totally empty, no . or ..
    The specified directory does not contain the usual aliases for the
    current and parent directories. This message indicates severe damage
    to the disk's directories or files. Delete the directory and recreate
    it.

    Disk error reading FAT n

    or

    Disk error writing FAT n
    One of the file allocation tables for the disk being checked contains
    a defective sector. MS-DOS will use the alternate FAT if one is
    available. It is advisable to copy all the files on the disk
    containing the defective sector to another disk.

    Errors found, F parameter not specified.
    Corrections will not be written to disk.
    Errors were found on the disk being checked, but the /F switch was not
    included in the command line.

    File allocation table bad drive X:
    The disk is not an MS-DOS disk. Repeat CHKDSK with the /F option; if
    this message is displayed again, reformat the disk.

    File not found.
    CHKDSK was unable to find the specified file.

    First cluster number is invalid, entry truncated.
    The directory entry for the specified file contains an invalid pointer
    to the disk's data area. If the /F switch was included in the command
    line, the file is truncated to a zero-length file.

    General Failure error reading drive X:
    The format of the disk being checked is not compatible with MS-DOS or
    the disk has not been formatted for use by MS-DOS.

    Has invalid cluster, file truncated.
    The file directory contains an invalid pointer to the disk's data
    area. If the /F switch was included in the command line, the file is
    truncated to a zero-length file.

    Incorrect DOS version
    The version of CHKDSK is not compatible with the version of MS-DOS
    that is running.

    Insufficient memory
    Processing cannot continue.
    The computer does not have enough memory to contain the tables
    necessary for CHKDSK to process the specified disk.

    Insufficient room in root directory.
    Erase files in root and repeat CHKDSK.
    The root directory is full and does not have room for the entries for
    recovered files. Delete some files from the root directory of the disk
    being checked and rerun the CHKDSK program.

    Invalid current directory
    Processing cannot continue.
    The directory structure of the disk is so badly damaged that the disk
    is unusable.

    Invalid drive specification
    The CHKDSK command contained an invalid disk drive.

    Invalid parameter
    One of the switches in the command line is invalid.

    Invalid sub-directory entry.
    The directory name specified in the command line does not exist or is
    invalid.

    Path not found.
    One of the directories in the path specified in the command line does
    not exist or is invalid.

    Probable non-DOS disk
    Continue (Y/N) ?
    The disk being checked was not formatted by MS-DOS or the file
    allocation table has been severely damaged or destroyed.

    Unrecoverable error in directory.
    Convert directory to file (Y/N)?
    The specified directory is damaged and unusable. If the /F switch was
    included in the original command line, respond with Y to convert the
    damaged directory to a file in the root directory of the disk with a
    name of the form FILEnnnn.CHK. If desired, the .CHK file can then be
    deleted. Any files that were previously reached through the damaged
    directory will be lost.



CLS
2.0 and later
Clear Screen
Internal


Purpose

    Clears the video display.

Syntax

    CLS

Description

    The CLS command clears the video display and displays the current
    prompt.

    In some implementations of MS-DOS, proper operation of the CLS command
    may require installation of the ANSI.SYS console driver with a
    DEVICE=ANSI.SYS command in the CONFIG.SYS file.

Examples

    To clear the screen, type

    C>CLS  <Enter>

    To save the ANSI escape sequence used by the CLS command (ESC[2J) into
    a file named CLEAR.TXT, type

    C>CLS > CLEAR.TXT  <Enter>



COMMAND
1.0 and later
Command Processor
External


Purpose

    Loads a secondary copy of the MS-DOS default command processor.

Syntax

    COMMAND [drive:][path] [device] [/E:n] [/P] [/C string]

    where:

    path       is the name of the directory to be searched for
                COMMAND.COM when the transient portion needs to be
                reloaded; a drive letter can be included with versions
                2.0 and later.

    device     is the name of a character device to be used instead of
                CON for the command processor's input and output
                (versions 2.0 and later).

    /E:n       is the initial size, in bytes, of the command processor's
                environment block (160-32768, default = 160) (version
                3.2).

    /P         fixes the newly loaded command processor permanently in
                memory (versions 2.0 and later).

    /C string  causes the command processor to behave as a transient
                program and execute the command or program specified by
                string (versions 2.0 and later).

Description

    The command processor is the module of the operating system that is
    responsible for issuing prompts to the user, interpreting commands,
    loading and executing transient application programs, and interpreting
    batch files. The file COMMAND.COM contains the MS-DOS default command
    processor, or shell. It is ordinarily loaded from the root directory
    of the system disk when the system is turned on or restarted, unless
    the SHELL command is used in the CONFIG.SYS file to specify another
    command processor or an alternate location for COMMAND.COM.

    With versions 1.x, COMMAND.COM is invoked by the COMMAND command in
    response to a shell prompt or within a batch file. A second copy of
    the resident portion of COMMAND.COM is loaded and the memory occupied
    by the original resident portion is lost. The second copy of the
    transient portion simply overlays the original transient portion.
    (Versions 1.x of COMMAND support no switches or other parameters and
    any specified in the command line are ignored.) With versions 2.0 and
    later, the new copy of COMMAND.COM is loaded in addition to the
    parent command processor and serves as a secondary command
    processor.

    The path parameter specifies the location of the COMMAND.COM file
    that is used to reload the transient part of the command processor if
    it is overlaid by application programs. If absent, path defaults to
    the root directory of the system (startup) disk.

    The device parameter allows a character device other than CON to be
    used by the command processor for input and output. For example, use
    of AUX as the device parameter allows a personal computer to be
    controlled from a terminal attached to a serial port, instead of from
    the usual built-in keyboard and memory-mapped video display.

    The secondary copy of COMMAND.COM ordinarily remains in memory and
    serves as the active command processor until an EXIT command is
    entered. If a /P switch is used with the COMMAND command, the new copy
    of COMMAND.COM is fixed in memory and the EXIT command is disabled. In
    such cases, the memory occupied by previously loaded copies of
    COMMAND.COM is simply lost.

    The /E:n switch controls the size of the environment block initially
    allocated for the command processor. The default size of the block is
    160 bytes, but the /E:n switch allows the initial allocation to be as
    large as 32768 bytes. This switch is frequently used when COMMAND.COM
    is included in the SHELL command in the CONFIG.SYS file.

    When the /C string switch is included in the command line, followed
    by a string designating a command or program name, the new copy of
    COMMAND.COM carries out the operation specified by string and then
    exits, returning control to its parent command processor or other
    program. This option allows a batch file to invoke another batch file
    and then resume its own execution. (If a batch file names another
    batch file directly without using COMMAND /C string as an
    intermediary, the first batch file is terminated.) Note that when the
    /C string switch is used in combination with other switches, it must
    be the last switch in the command line.

    A secondary copy of COMMAND.COM always inherits a copy of the
    environment of the command processor or other program that loaded it.
    Changes made to the new COMMAND.COM's environment with a SET, PROMPT,
    or PATH command do not affect the environment of any previously loaded
    program or command processor.

Examples

    To execute the batch file MENU2.BAT from the batch file MENU1.BAT and
    then resume execution of MENU1.BAT, include the following line in
    MENU1.BAT:

    COMMAND /C MENU2

    To cause COMMAND.COM to be loaded from the directory \SYSTEM on drive
    C rather than from the root directory and to allocate an initial
    environment block of 1024 bytes, include the following line in the
    CONFIG.SYS file:

    SHELL=C:\SYSTEM\COMMAND.COM C:\SYSTEM /P /E:1024

Messages

    Bad or missing command interpreter
    The file COMMAND.COM is not present in the root directory of the
    system disk and no SHELL command is present to specify an alternate
    command processor file or location, or the location specified for
    COMMAND.COM in a SHELL command is not correct. This message may also
    be seen if COMMAND.COM is moved from its original location after the
    system is booted.

    Invalid device
    The character device specified in the command line is not valid or
    does not exist.

    Invalid environment size specified
    The value supplied with the /E:n switch was less than 160 bytes or
    greater than 32768 bytes.



COMP
IBM
Compare Files
External


Purpose

    Compares two files or sets of files. This command is available only
    with PC-DOS.

Syntax

    COMP [primary] [secondary]

    where:

    primary         is the name of the file to be compared against and
                    can be preceded by a drive and/or path; wildcard
                    characters are permitted in the filename.

    secondary       is the name of the file to be compared with primary
                    and can be preceded by a drive and/or path; wildcard
                    characters are permitted in the filename.

Description

    The COMP command compares one file or set of files with another. As
    each pair of files is compared, the program reports whether the files
    are identical, different in size, or the same size but different in
    content.

    The primary and secondary parameters can be any combination of
    drive, path, and filename, optionally including wildcards to allow
    sets of files to be compared. (With versions 1.x, using wildcards does
    not cause multiple file comparisons--only the first secondary file
    whose name matches the first primary filename is compared.) The
    primary parameter generally designates the specific files to be
    compared; the secondary parameter is usually only a drive and/or
    path, except when the files being compared have different names or
    extensions.

    If both primary and secondary are omitted from the command line, the
    COMP program prompts for them interactively. If primary is given as a
    drive or path only, COMP assumes *.* to be the primary file. If
    secondary is given as a drive or path only, COMP compares all files
    on that drive or path whose filenames match those of the primary
    files.

    The COMP command is included only with PC-DOS. MS-DOS versions 2.0 and
    later provide a similar function in the FC command, which also
    displays the differences between files.

Examples

    To compare the file MYFILE.DAT on the disk in drive A with the file
    LEDGER.DAT on the disk in drive B, type

    C>COMP A:MYFILE.DAT B:LEDGER.DAT  <Enter>

    To compare all the files in the current directory of the disk in
    drive A with the corresponding files in the current directory of the
    disk in drive D, type

    C>COMP A:*.* D:  <Enter>

    To compare all the files with the extension .ASM in the directory
    C:\SOURCE with the corresponding files with extension .BAK on the disk
    in drive B, type

    C>COMP C:\SOURCE\*.ASM B:*.BAK  <Enter>

Messages

    10 mismatches - ending compare
    The primary and secondary files are the same size but have more than
    10 internal differences. The compare operation on this pair of files
    is aborted and COMP proceeds to the next pair of files, if any.

    filename and filename
    This informational message shows the full filenames of the two files
    currently being compared.

    Access Denied
    An attempt was made to compare a locked file.

    Cannot compare file to itself
    An attempt was made to compare a file with itself.

    Compare error at OFFSET nn
    File 1 = nn
    File 2 = nn
    This informational message itemizes the first 10 differences in data
    between the two files being compared (if the files are the same size),
    displaying the file offset and the differing bytes from each file as
    hexadecimal values.

    Compare more files (Y/N)?
    After all specified pairs of files have been compared, the COMP
    program allows the entry of another pair of file specifications.
    Respond with Y or press Enter to continue; respond with N to
    terminate the COMP program.

    Enter 2nd file name or drive id
    If the secondary filename was not specified in the COMP command, this
    message prompts the user to enter it (or a path, if the secondary file
    has the same name as the primary file).

    Enter primary file name
    If no parameter was entered after COMP, this message prompts the user
    to enter the primary filename. If a drive or path is specified, COMP
    assumes *.* for the primary filename.

    EOF mark not found
    The last byte at the logical end of the file was not a Control-Z
    character (^Z, or 1AH). This message is commonly seen during
    comparison of two files that are not ASCII text files, such as
    executable program files.

    Files compare OK
    The files being compared were the same length and contained identical
    data.

    File not found
    The specified filename was invalid or the file does not exist.

    Files are different sizes
    The two files being compared have different sizes recorded in the
    directory. No comparison on the data within the files is
    attempted.

    File sharing conflict
    COMP is unable to compare the two current files because one of the
    files is in use by another process.

    Incorrect DOS version
    The version of COMP is not compatible with the version of PC-DOS that
    is running.

    Insufficient memory
    The available system memory is insufficient to run the COMP
    program.

    Invalid drive specification
    The drive specification in primary or secondary is invalid or does
    not exist.

    Invalid path
    The path or directory in primary or secondary is invalid or does not
    exist.

    Too many files open
    No more system file handles are available. Increase the value of the
    FILES command in the CONFIG.SYS file and restart the system.



CONFIG.SYS
2.0 and later
System Configuration File


Purpose

    Allows the user to configure the operating system.

Description

    The CONFIG.SYS file is an ASCII text file that MS-DOS processes during
    initialization (when the system is turned on or restarted). It allows
    the user to configure certain aspects of the operating system, such as
    the number of internal disk buffers allocated, the number of files
    that can be open at one time, the formats for date and currency, and
    the name and location of the executable file containing the command
    processor. CONFIG.SYS can also contain commands that extend the system
    with installable device drivers for terminal emulation, virtual disks
    or RAMdisks, extended or expanded memory, and other special peripheral
    devices.

    The CONFIG.SYS file can be created or modified with EDLIN or with any
    other editor or word processor that can produce ordinary ASCII text
    files (nondocument files) and save them to disk. The CONFIG.SYS file
    must be in the root directory of the disk that is used to start the
    operating system in order for it to be processed during system
    initialization. When changes are made to the CONFIG.SYS file, they do
    not take effect until the system is restarted.

    Commands in the CONFIG.SYS file take the form

    command[=]value

    (Note that the equal sign is optional; any other valid MS-DOS
    separator [semicolon, tab, or space] can be used instead.) The
    commands supported are

╓┌──────────────────┌────────────────────────────────────────────────────────╖
    Command       Action
    ──────────────────────────────────────────────────────────────────────
    BREAK         Controls extended checking for Control-C.

    BUFFERS       Specifies the number of internal disk-sector buffers
                available for use by MS-DOS when reading from or writing
                to a disk.

    COUNTRY       Controls date, time, and currency formatting.

    DEVICE        Specifies the filename of an installable device driver.

    DRIVPARM      Redefines the default characteristics of the resident
                MS-DOS block device(s) (version 3.2).

    FCBS          Specifies the maximum number of simultaneously open file
                control blocks (versions 3.0 and later).

    FILES         Specifies the maximum number of simultaneously open
                files controlled by handles.

    LASTDRIVE     Sets the highest valid drive letter (versions 3.0 and
                later).

    SHELL         Specifies the filename (and optionally the drive and/or
                path) of the system command processor.

    STACKS        Sets the number and size of stack frames for the system.

    Each of these commands is discussed in detail on the following
    pages.

Message

    Unrecognized command in CONFIG.SYS
    A command in the CONFIG.SYS file was misspelled, an invalid parameter
    was used, or a command was included that is not compatible with the
    version of MS-DOS that is running. Correct the CONFIG.SYS file and
    restart the system.



CONFIG.SYS: BREAK
2.0 and later
Configure Control-C Checking


Purpose

    Sets or clears MS-DOS's internal flag for Control-C checking.

Syntax

    BREAK=ON |OFF

Description

    Pressing Ctrl-C or Ctrl-Break while a program is running ordinarily
    terminates the program, unless the program itself contains
    instructions that disable MS-DOS's Control-C handling. As a rule, MS-
    DOS checks the keyboard for a Control-C only when a character is read
    from or written to a character device (keyboard, screen, printer, or
    auxiliary port). Therefore, if a program executes for long periods
    without performing such character I/O, detection of the user's entry
    of a Control-C may be delayed. The BREAK=ON command causes MS-DOS to
    also check the keyboard for a Control-C at the time of each system
    call (which slows the system somewhat); the BREAK=OFF command disables
    such extended Control-C checking. The default setting for BREAK is
    off.

    Extended Control-C checking can also be enabled or disabled at the
    command prompt with the interactive form of the BREAK command whenever
    the system is running.

Example

    To enable extended Control-C checking during MS-DOS disk operations,
    insert the line

    BREAK=ON

    into the CONFIG.SYS file and restart the system.

Message

    Unrecognized command in CONFIG.SYS
    The setting supplied for the BREAK command was not ON or OFF. Correct
    the CONFIG.SYS file and restart the system.



CONFIG.SYS: BUFFERS
2.0 and later
Configure Internal Disk Buffers


Purpose

    Sets the number of MS-DOS's internal disk buffers.

Syntax

    BUFFERS=nn

    where:

    nn         is the number of buffers (1-99, default = 2; default = 3
                for IBM PC/AT and compatibles).

Description

    MS-DOS maintains a set of internal buffers (sometimes referred to as a
    disk cache) in which it keeps copies of the sectors most recently read
    from or written to the disk. Whenever a program requests a disk read,
    MS-DOS first searches the disk buffers to determine whether a copy of
    the disk sector containing the required data is already present in
    RAM. If the sector is found, the actual disk access is bypassed. This
    technique can significantly improve the overall performance of the
    disk operating system.

    By using the BUFFERS command in the CONFIG.SYS file, the user can
    control the number of buffers in MS-DOS's disk cache. The default
    number of buffers is 2 for an IBM PC, PC/XT, or compatible and 3 for
    an IBM PC/AT or compatible. The optimum number of buffers varies,
    depending in part on the characteristics and types of the system disk
    drives, the types of application programs used on the system, the
    number and levels of subdirectories in the file structure, and the
    amount of RAM in the system.

    If the system has only floppy-disk drives, the default setting of 2
    buffers is sufficient. If the system includes a fixed disk, increasing
    the number of buffers to 10 or so typically speeds up overall system
    operation. Configuring the system for too many buffers, however, can
    actually degrade the performance of the system.

    Increases in the number of buffers should be tailored to the type of
    application most frequently used. For example, allocation of extra
    disk buffers will not improve the performance of programs that use
    primarily sequential file access but may considerably enhance the
    execution times of programs that perform random access on a relatively
    small number of disk records (such as the index for a database file).
    In addition, if the system has many subdirectories organized in
    several levels, increasing the number of buffers can significantly
    increase the speed of disk operations.

    The ideal number of buffers for a given system is difficult to predict
    because of the interactions between the access time of the disk, the
    speed of the central processing unit, and the RAM requirements and
    disk access behavior of the mix of application programs. However, a
    reasonably optimal number of buffers can be quickly estimated
    experimentally by increasing the number of buffers in increments of
    five or so, restarting the system, performing some simple timing tests
    on the most frequently used application programs, and observing at
    what number of buffers system performance begins to degrade.

Example

    To allocate 20 internal disk buffers, insert the line

    BUFFERS=20

    into the CONFIG.SYS file and restart the system.

Message

    Unrecognized command in CONFIG.SYS
    The value supplied for the BUFFERS command was not a number in the
    range 1 through 99.



CONFIG.SYS: COUNTRY
2.1 and later
Set Country Code


Purpose

    Configures MS-DOS's internationalization support for a specific
    country.

Syntax

    COUNTRY=nnn

    where:

    nnn     is the international telephone dialing prefix for the country
            (001-999, default = 001):

            Australia        061
            Belgium          032
            Denmark          045
            Finland          358
            France           033
            Israel           972
            Italy            039
            Netherlands      031
            Norway           047
            Spain            034
            Sweden           046
            Switzerland      041
            United Kingdom   044
            USA              001
            West Germany     049

    Note: In versions 2.x (except 2.0), nnn is 01 through 99. Individual
    computer manufacturers determine the specific codes supported by their
    versions of MS-DOS.

Description

    The COUNTRY command enables the user to tailor MS-DOS's date, time,
    and currency displays for a specific country. This capability, termed
    internationalization support, is achieved through use of a country
    code that controls the contents of the table MS-DOS uses to format
    these displays (including numeric separators). (The
    internationalization table is made available to application programs
    through Interrupt 21H Function 38H.) Beginning with version 3.0, PC-
    DOS also supports the COUNTRY command.

Example

    In West Germany, the format for the date is dd.mm.yy. To configure MS-
    DOS to use this date format, insert the line

    COUNTRY=049

    into the CONFIG.SYS file and restart the system.

Message

    Invalid country code
    The specified country code is not supported by the version of MS-DOS
    that is running.



CONFIG.SYS: DEVICE
2.0 and later
Install Device Driver


Purpose

    Loads and links an installable device driver into the operating system
    during initialization.

Syntax

    DEVICE=[drive:][path]filename [options]

    where:

    filename   is the name of the device-driver file, optionally preceded
                by a drive and/or path.

    options    specifies any switches or other parameters needed by the
                device driver; the DEVICE command itself has no switches.

Description

    Device drivers are the modules of the operating system that control
    the interface between the operating system and peripheral devices such
    as disk drives, magnetic-tape drives, CRT terminals, and printers.

    As supplied, MS-DOS already contains device drivers for the keyboard,
    video display, serial port, printer, real-time clock and disk devices.
    Device drivers for additional peripheral devices can be linked into
    the operating system by adding a DEVICE command to the CONFIG.SYS
    file, placing the file containing the device driver on the system
    startup disk (or at the location specified by the drive: and/or path
    parameter), and restarting the computer.

    If a drive other than the one containing the system disk is named as
    the location of the device driver, that drive must either be
    accessible via the system's default disk driver or be a drive
    configured with a previous DEVICE command.

    Most OEM implementations of version 3.2 provide three installable
    device drivers: ANSI.SYS, which allows the video display and keyboard
    to be controlled by ANSI standard escape sequences; DRIVER.SYS, which
    supports external disk drives; and RAMDRIVE.SYS (VDISK.SYS with PC-
    DOS), which uses a portion of the machine's RAM to emulate a disk
    drive. See USER COMMANDS: ANSI.SYS; DRIVER.SYS; RAMDRIVE.SYS;
    VDISK.SYS.

    Many manufacturers of add-on products for MS-DOS machines (such as
    network interfaces or Lotus/Intel/Microsoft Expanded Memory boards)
    also supply installable device drivers for use with their hardware.
    For information concerning these drivers, see the product
    manufacturer's user's manual.

Examples

    To load the ANSI standard console driver, insert the line

    DEVICE=ANSI.SYS

    into the CONFIG.SYS file, place the file ANSI.SYS in the root
    directory of the system disk, and restart the system.

    To load the RAMDRIVE.SYS driver located in the \DRIVERS directory on
    the disk in drive A, configuring it for 1024 KB in extended memory,
    insert the line

    DEVICE=A:\DRIVERS\RAMDRIVE.SYS 1024 /E

    into the CONFIG.SYS file and restart the system.

Messages

    Bad or missing filename
    The filename specified in the DEVICE command is invalid or does not
    exist or the file does not contain a valid MS-DOS installable device
    driver.

    Sector size too large in file filename
    The specified installable device driver uses a sector size that is
    larger than the sector size used by any of the system's default disk
    drivers. Such a driver cannot be used because MS-DOS's internal disk
    buffers will not be large enough to hold a sector read from the
    device.



CONFIG.SYS: DRIVPARM
3.2
Set Block-Device Parameters


Purpose

    Alters the system's list of characteristics for an existing block
    device.

Syntax

    DRIVPARM=/D:n[/C] [/F:n] [/H:n] [/N] [/S:n] [/T:n]

    where:

    /D:n     is the drive number (0-255; 0 = A, 1 = B, etc.) and must
            always be the first switch in the command line

    /C       indicates that the device provides door-lock-status support.

    /F:n     is a form-factor index from the following table (default = 2
            if the DRIVPARM command is present but this switch is
            omitted):

            0   320 KB or 360 KB
            1   1.2 MB
            2   720 KB
            3   8-inch single-density floppy disk
            4   8-inch double-density floppy disk
            5   Fixed disk
            6   Tape drive
            7   Other

    /H:n     is the number of read/write heads (1-99).

    /N       indicates that the block device is not removable.

    /S:n     is the number of sectors per track (1-99).

    /T:n     is the number of tracks per side (1-999).

    Note: The DRIVPARM command must not be used to specify device
    characteristics that the device driver is not capable of
    supporting.

Description

    Whenever the device driver for a block device such as a disk drive or
    magnetic-tape drive performs input or output, it refers to an internal
    table of characteristics for the device that allows it to convert
    logical addresses to physical addresses. The DRIVPARM command modifies
    the default MS-DOS values in the table of characteristics for a
    particular block device during system initialization (when the
    computer is turned on or restarted). Multiple DRIVPARM commands, each
    modifying the characteristics of a different block device, can be
    included in the same CONFIG.SYS file. Any characteristics not
    specifically altered in the DRIVPARM command for a particular device
    retain their original values, except for /F:n, which defaults to 2.

    DRIVPARM commands that alter the characteristics for block devices
    controlled by installable device drivers must follow the DEVICE
    command that loads the device driver itself.

Example

    Assume that drive B is a floppy-disk drive originally configured for
    40 tracks with 8 sectors per track. To reconfigure the drive to read
    or write 80 tracks of 9 sectors each, insert the line

    DRIVPARM=/D:1 /S:9 /T:80

    into the CONFIG.SYS file and restart the system. For this command to
    be valid the drive must be capable of supporting these
    parameters.

Message

    Unrecognized command in CONFIG.SYS
    An invalid parameter was specified in a DRIVPARM command.



CONFIG.SYS: FCBS
3.0 and later
Set Maximum Open Files Using File Control Blocks (FCBs)


Purpose

    Configures the maximum number of files that can be open concurrently
    using file control blocks (FCBs). This command has no practical effect
    unless either the file-sharing support module SHARE.EXE or networking
    support has been loaded.

Syntax

    FCBS=m,p

    where:

    m    is the maximum number of files that can be open concurrently
        using FCBs (1 - 255, default = 4).

    p    is the number of files opened with FCBs that are protected
        against automatic closure (0 - m, default = 0).

Description

    MS-DOS supports two methods of file access: file control blocks and
    file handles. A file control block is a data structure that stores
    information about an open file. It resides inside an application
    program's memory space and is accessed by both MS-DOS and the
    application. (See USER COMMANDS: CONFIG.SYS: FILES for information
    on file handles.)

    In a network environment, a large number of active FCBs or improper
    use of FCBs by an application can seriously degrade the performance of
    the network as a whole. Consequently, MS-DOS versions 3.0 and later
    provide the FCBS command to enable the user to limit the number of
    files that can be open concurrently using FCBs if either the file-
    sharing support module SHARE.EXE (see USER COMMANDS: SHARE) or
    network support has been loaded. If an application program attempts
    to exceed the specified number of files, MS-DOS closes the file with
    the least recently used FCB.

    The p parameter in the FCBS command line allows the user to protect
    files from unilateral closure by MS-DOS. The value of p is the number
    of files, counting from the first file opened using an FCB, that
    cannot be closed automatically.

    If the current value of FCBS is 4,0 (the default) when the file-
    sharing module SHARE.EXE or network support is loaded, MS-DOS
    automatically increases the maximum number of files that can be open
    concurrently to 16 and the number of files protected against automatic
    closure to 8. (When multiple FCBs refer to the same file, the file is
    counted only once.)

Examples

    To set the maximum number of files that can be concurrently open using
    FCBs to 10 and protect none of the FCB-opened files against automatic
    closure by MS-DOS, insert the line

    FCBS=10,0

    into the CONFIG.SYS file and restart the system.

    To set the maximum number of files that can be concurrently open using
    FCBs to 8 but protect the first 4 FCB-opened files against automatic
    closure by MS-DOS, insert the line

    FCBS=8,4

    into the CONFIG.SYS file and restart the system.

Message

    Unrecognized command in CONFIG.SYS
    An invalid number was specified as one of the parameters in the FCBS
    command.



CONFIG.SYS: FILES
2.0 and later
Set Maximum Open Files Using Handles


Purpose

    Configures the maximum number of files and/or devices that can be open
    concurrently using file handles.

Syntax

    FILES=n

    where:

    n   is the maximum number of files and devices that can be open
        concurrently using file handles (8-255, default = 8).

Description

    MS-DOS supports two methods of file access: file handles and file
    control blocks (FCBs).

    During initialization, MS-DOS allocates a data structure that holds
    information about files and/or devices opened with the handle, or
    extended-file-management, function calls. This structure resides
    inside the operating system's memory space and is accessed only by MS-
    DOS. (See USER COMMANDS: CONFIG.SYS: FCBS.) The default size of this
    data structure allows 8 files and/or devices to be open
    concurrently using the file-handle functions. The FILES command
    enables the user to change the size of the data structure. (Note that
    increasing the size of the data structure decreases the amount of RAM
    available to application programs.)

    The FILES command controls the maximum number of files and/or devices
    opened with handles for all active processes in the system combined.
    The limit on the number of files and/or devices opened for a single
    process using handles is 20 or the number of entries in the allocated
    data structure, whichever is less. Five of the 20 possible handles for
    a given process are automatically assigned to standard input, standard
    output, standard error, standard auxiliary, and standard list.
    However, since standard input, standard output, and standard error all
    default to the same device (CON), only three of the allocated data-
    structure entries are actually expended. In addition, the preassigned
    standard device handles for a process can be closed and reused for
    other files and devices, if necessary.

Example

    To set the maximum number of files and/or devices that can be
    concurrently open using the handle functions to 20, insert the
    line

    FILES=20

    into the CONFIG.SYS file and restart the system.

Message

    Unrecognized command in CONFIG.SYS
    An invalid number was specified in the FILES command.



CONFIG.SYS: LASTDRIVE
3.0 and later
Set Highest Logical Drive


Purpose

    Defines the highest letter that MS-DOS will recognize as a disk-drive
    code.

Syntax

    LASTDRIVE=drive

    where:

    drive     is a single letter (A-Z).

Description

    MS-DOS block devices (floppy-disk drives, fixed-disk drives, and
    magnetic-tape drives) are referred to by logical drive codes
    consisting of a single letter from A through Z. In most MS-DOS
    systems, drives A and B are floppy-disk drives, drive C is a fixed
    disk, and drives D and above are such devices as additional fixed
    disks, RAMdisks, or network volume. In some cases, a single physical
    drive (such as a very large fixed disk) is partitioned into two or
    more logical drives, each of which is assigned a drive letter.

    MS-DOS validates the drive code in a command or filename before
    carrying out a command. In the default case, MS-DOS recognizes a
    maximum of five drives (A-E), depending on the total number of default
    devices and devices incorporated into the system using installable
    device drivers. (MS-DOS does not consider a drive letter valid unless
    it refers to a physical or logical device.) The LASTDRIVE command
    configures MS-DOS to accept additional drive codes, to a total of 26
    (A-Z). This also makes it possible to use fictitious drive letters
    with the SUBST command to assign a drive letter to a
    subdirectory.

    If the letter code for a LASTDRIVE command specifies fewer drives than
    are physically present in the system (including installed device
    drivers), MS-DOS uses the actual number of physical drives.

Example

    To configure MS-DOS to recognize a maximum of eight logical disk
    drives, insert the line

    LASTDRIVE=H

    into the CONFIG.SYS file and restart the system.

Message

    Unrecognized command in CONFIG.SYS
    An illegal value was specified in the LASTDRIVE command.



CONFIG.SYS: SHELL
2.0 and later
Specify Command Processor


Purpose

    Defines the name and, optionally, the location of the file that
    contains the operating system's command processor.

Syntax

    SHELL=[drive:][path]filename [options]

    where:

    filename  is the name of the file containing the command processor,
            optionally preceded by a drive and/or path.

    options   specifies any switches and other parameters needed by the
            designated command processor; the SHELL command itself
            has no switches.

Description

    The command processor, or shell, is the user's interface to the
    operating system. It is responsible for parsing and carrying out the
    user's commands, including the loading and execution of other programs
    from the disk. MS-DOS uses the SHELL command in the CONFIG.SYS file to
    locate and load the command interpreter for the system during its
    initialization process.

    The default shell for MS-DOS is the file COMMAND.COM. This file is
    loaded by MS-DOS from the root directory of the system disk if no
    SHELL command is found in the CONFIG.SYS file or if no CONFIG.SYS file
    exists.

    The most common use of the SHELL command is simply to advise MS-DOS
    that COMMAND.COM is stored in a location other than the root
    directory; MS-DOS then sets the COMSPEC variable in the environment
    block to COMMAND.COM, preceded by the location specified in the SHELL
    command. (This can be verified by typing the SET command at the
    command prompt.) Another common use of SHELL is to specify switches or
    other parameters for COMMAND.COM itself (see USER COMMANDS: COMMAND).

Example

    To specify the file VISUAL.COM in the root directory of drive C as the
    system's command processor, insert the line

    SHELL=C:\VISUAL.COM

    into the CONFIG.SYS file and restart the system.

Message

    Bad or missing command interpreter
    The path or filename in the SHELL command is invalid or the file does
    not exist.



CONFIG.SYS: STACKS
3.2
Configure Internal Stacks


Purpose

    Defines the number and size of stacks for system interrupt
    handlers.

Syntax

    STACKS=number,size

    where:

    number     is the number of stacks allocated for use by interrupt
                handlers (8-64, default = 9).

    size       is the size of each stack in bytes (32-512, default =
                128).

Description

    Each time certain hardware interrupts occur (02H, 08-0EH, 70H, and 72-
    77H), MS-DOS version 3.2 switches to an internal stack before
    transferring control to the handler that will service the interrupt.
    In the case of nested interrupts, MS-DOS checks to ensure that both
    interrupts do not get the same stack. After the interrupt has been
    processed, the stack is released. This protects the stacks owned by
    application programs or system device drivers from overflowing when
    several interrupts occur in rapid succession.

    The STACKS command configures the number and size of internal stacks
    available for interrupt handling and thus controls the number of
    interrupts that can exist only partially processed while still
    allowing another interrupt to occur.

    The number parameter sets the number of internal stacks to be
    allocated; number must be in the range 8 through 64. The size
    parameter is the number of bytes allocated per stack frame; size must
    be in the range 32 through 512.

    If too many interrupts occur too quickly and the pool of internal
    stack frames is exhausted, the system halts with the message Internal
    Stack Overflow. Increasing the number parameter in the STACKS command
    usually corrects the problem.

Example

    To configure 10 stacks of 256 bytes each for use by interrupt
    handlers, insert the line

    STACKS=10,256

    into the CONFIG.SYS file and restart the system.

Message

    Unrecognized command in CONFIG.SYS
    An invalid number was specified in the STACKS command.



COPY
1.0 and later
Copy File or Device
Internal


Purpose

    Copies one or more files from one disk, directory, or filename to
    another. Can also copy files to or from character devices.

Syntax

    COPY source[/A][/B][+source[/A][/B]...][destination][/A][/B][/V]

    where:

    source          is the names of the file(s) to be copied, optionally
                    preceded by a drive and/or path; wildcard characters
                    are permitted in filenames. The source can also be a
                    device.

    destination     is the location and, optionally, the name(s) for the
                    copied file(s) and can be preceded by a drive;
                    wildcard characters are permitted in the filename.
                    The destination can also be a device.

    /A              indicates that the previous file is an ASCII text
                    file.

    /B              indicates that the previous file is a binary file.

    /V              performs read-after-write verification of destination
                    file(s).

Description

    The COPY command copies one or more source files to one or more
    destination files. When multiple files are copied, the name of each
    source file is displayed as it is processed. The COPY command can also
    be used to send the contents of a file to a character device or to
    copy input from a character device into a file.

    The source parameter identifies the file or files to be copied. It can
    consist of any combination of drive, path, and filename or it can be a
    device name. If a path without a filename is specified, all files in
    the named directory are copied. Several source files can be
    concatenated into a single destination file by placing a + operator
    between their names; if the source filename contains a wildcard but
    the destination name does not, all the source files are concatenated
    into the specified destination.

    Warning: When multiple source files are concatenated into a
    destination file with the same name as one of the source files, that
    filename should be specified as the first source file. Otherwise, the
    contents of the source file will be destroyed before the file is
    copied.

    When a device is specified as the source, it is usually the console
    (CON), for copying keyboard input to a file or another device.
    Keyboard input is terminated by pressing Ctrl-Z or F6 (on IBM PCs or
    compatibles) and then the Enter key.

    The destination parameter also can consist of any combination of
    drive, path, and filename or be a device name. Unless the source files
    are being renamed as part of the operation, destination is usually
    simply a drive and/or path specifying where to place the copied files.
    If no destination is specified, the source file is copied to a file
    with the same name in the current directory of the default disk drive;
    if the source file in this case is itself in the current directory of
    the current drive, an error message is displayed and the copy
    operation is aborted. If files are being concatenated and no
    destination is specified, the source files are copied sequentially
    into one file in the current directory with the same name as the first
    source file. If the first source file already exists, the second file
    and any additional specified files are appended sequentially to the
    first source file.

    The /A and /B switches control the manner in which the COPY command
    operates on a file. Both switches affect the file specification
    immediately preceding them and any subsequent file specifications in
    the command until another /A or /B switch is encountered, at which
    point the new /A or /B switch takes effect for the file immediately
    preceding it and for any subsequent files.

    The /A switch indicates that a file is an ASCII text file. When the /A
    switch is applied to a source file, the file is copied up to, but not
    including, the first Control-Z (^Z) character in the file. When the /A
    switch is applied to a destination file, a Control-Z character is
    appended by the COPY command as the last character of the new
    file.

    The /B switch indicates a binary file. When /B is applied to a source
    file, the exact number of bytes in the original file are copied
    without regard to Control-Z or any other control characters. When the
    /B switch is applied to a destination file, no Control-Z character is
    appended to the newly created file.

    The default values for the /A and /B switches for file-to-file copies
    are /A when source files are being concatenated and /B otherwise. When
    a file is being copied to or from a character device, the /A switch is
    the default.

    The /V switch causes a read-after-write verification of each block of
    the destination file. Its effect is equivalent to that of the VERIFY
    ON command. No comparison is made between the source and destination
    files--the /V switch simply causes MS-DOS to verify that the
    destination file has been written correctly.

Examples

    To copy the file REPORT.TXT from the root directory of the disk in
    drive B to a file named FINAL.RPT in the \WP\DOCS directory on the
    current drive, type

    C>COPY B:\REPORT.TXT \WP\DOCS\FINAL.RPT  <Enter>

    To make a copy of the file A:\V2\SOURCE\MENUMGR.C in the current
    directory of the current drive, type

    C>COPY A:\V2\SOURCE\MENUMGR.C  <Enter>

    To copy all files with the extension .DOC in the current directory of
    the disk in drive A to files with the same filenames but a .TXT
    extension in the current directory of the current drive, type

    C>COPY A:*.DOC *.TXT  <Enter>

    To combine the files PROLOG.C, MENUMGR.C, and EPILOG.C in the current
    directory of the current drive into a single file named VISUAL.C in
    the current directory of the current drive, type

    C>COPY PROLOG.C+MENUMGR.C+EPILOG.C VISUAL.C  <Enter>

    To append the files MENUMGR.C and EPILOG.C to an existing file named
    PROLOG.C in the current directory of the current drive, type

    C>COPY PROLOG.C+MENUMGR.C+EPILOG.C  <Enter>

    To copy the file MENUMGR.MAP in the current directory of the current
    drive to the system printer, type

    C>COPY MENUMGR.MAP PRN  <Enter>

    To copy input from the keyboard (CON) to a file named MENU.BAT in the
    current directory of the current drive, type

    C>COPY CON MENU.BAT  <Enter>

    Text subsequently entered from the keyboard is placed into the file
    MENU.BAT until a Ctrl-Z or F6 is pressed.

    To copy all files in the \MEMOS directory on the current drive to the
    \ARCHIVE directory on the disk in drive B, type

    C>COPY \MEMOS\*.* B:\ARCHIVE  <Enter>

    or

    C>COPY \MEMOS B:\ARCHIVE  <Enter>

Messages

    n File(s) copied
    This informational message is displayed at the completion of a COPY
    command and indicates the total number of source files
    processed.

    Cannot do binary reads from a device
    The COPY command specified a copy from a character device in binary
    mode. Reenter the command without a /B switch.

    Content of destination lost before copy
    One of the source files specified as a destination file was
    overwritten prior to completion of the copy. When the destination name
    is the same as one of the source names, that file should be specified
    as the first source file.

    File cannot be copied onto itself
    The source directory and filename of a file being copied are the same
    as the destination directory and filename.

    File not found
    A file specified in the COPY command is invalid or does not
    exist.

    Invalid directory
    A directory specified in the COPY command is invalid or does not
    exist.



CTTY
2.0 and later
Assign Standard Input/Output Device
Internal


Purpose

    Specifies the character device to be used as standard input and
    output.

Syntax

    CTTY device

    where:

    device     is the logical character-device name.

Description

    MS-DOS ordinarily uses the computer's built-in keyboard and screen
    (CON) as standard input and output. The CTTY command allows another
    character device to be assigned instead.

    CTTY allows MS-DOS commands to be issued from a terminal attached to
    the computer's serial port or from another custom device with a screen
    and keyboard. Although PRN and NUL are valid MS-DOS device names, they
    should not be used with this command, as they have no input
    capability.

    Programs that do not use MS-DOS function calls to perform their input
    and output will not be affected by the CTTY command. Microsoft BASIC
    is an example of such a program.

Examples

    To use a terminal connected to the serial port as standard input and
    output for programs, type

    C>CTTY AUX  <Enter>

    To reinstate the normal keyboard and video display (CON) as standard
    input and output for programs, type

    C>CTTY CON  <Enter>

    on the currently assigned console device.

Message

    Invalid device
    The specified device is not a legal character-device name or does not
    exist in the system.



DATE
1.0 and later
Set Date
Internal


Purpose

    Sets or displays the system date.

Syntax

    DATE mm-dd-yy

    or

    DATE mm/dd/yy

    or

    DATE mm.dd.yy   (versions 3.0 and later)

    where:

    mm         is the month (1-12).

    dd         is the day (1-31).

    yy         is the year (80-99 or 1980-1999; 80-79 or 1980-2079 with
                versions 3.0 and later).

Description

    All computers that run MS-DOS have as part of their hardware
    configuration a timer, or clock, that maintains the current system
    date and time. Among other uses, the current date and time are
    inserted into a file's directory entry when the file is created or
    modified.

    The DATE command allows the user to display or modify the current date
    that is being maintained by the system's real-time clock. The command
    is executed automatically by MS-DOS when the system is initialized,
    unless there is an AUTOEXEC.BAT file on the system disk, in which case
    DATE is executed only if it is included in the file.

    A date entered using the DATE command does not permanently change the
    system date; the newly entered date will be lost when the system is
    turned off or reset. On IBM PC/ATs and compatibles, which have a
    built-in battery-backed clock/calendar, the system setup program
    (found on the Diagnostics for IBM Personal Computer AT disk or
    equivalent) must be used to permanently alter the date stored in the
    machine. On IBM PCs, PC/XTs, and compatibles equipped with add-on
    cards containing battery-backed clock/calendar circuitry, it is
    generally necessary to run a time/date installation program (included
    with the card) when the system is turned on to set the system date and
    time from the clock/ calendar on the card. The DATE command usually
    has no effect on these card-mounted clock/calendars.

    The order of the day, month, and year in the DATE command depends on
    the country code, which is set with the COUNTRY command in the
    CONFIG.SYS file. The format shown here is for the USA.

Examples

    To set the system date to October 15, 1987, type

    C>DATE 10-15-87  <Enter>

    or

    C>DATE 10/15/87  <Enter>

    or

    C>DATE 10.15.87  <Enter>

    To display the current system date, type

    C>DATE  <Enter>

    and MS-DOS will respond in the form

    Current date is Thu 10-15-1987
    Enter new date (mm-dd-yy):

    To leave the date unchanged, press the Enter key.

Messages

    Current date is day  mm-dd-yyyy
    Enter new date (mm-dd-yy):
    This informational message and prompt are displayed when MS-DOS is
    started and there is no AUTOEXEC.BAT file on the system disk, when the
    DATE command is entered alone, or when the DATE command is included in
    the AUTOEXEC.BAT file.

    Invalid date
    Enter new date (mm-dd-yy):
    The date entered in the command line or in response to the prompt from
    the DATE command was not formatted properly or was invalid.



DEL or ERASE
1.0 and later
Delete File
Internal


Purpose

    Deletes a file or set of files. DEL and ERASE are synonymous.

Syntax

    DEL [drive:][path]filename

    or

    ERASE [drive:][path]filename

    where:

    filename   is the name of the file(s) to be deleted, optionally
                preceded by a drive and/or path; wildcard characters are
                permitted in the filename.

Description

    The DEL command marks the directory entry for the specified file as
    deleted and frees the disk sectors occupied by the file. If the
    command line ends with *.* or a directory name (including the special
    directory names . and ..), MS-DOS prompts the user for confirmation
    before deleting all the files in the current or specified directory.
    Note that in the case of a directory name, the directory itself is not
    removed; only the files within it are deleted.

    Warning: If the filename specification begins with an * wildcard and
    the extension is also * (for example, *xyz.*), DEL interprets the
    specification as  *.* and prompts the user for confirmation before
    deleting all files from the current or specified directory.

Examples

    To delete the file HELLO.C from the current directory on the current
    drive, type

    C>DEL HELLO.C  <Enter>

    To delete all files with the extension .OBJ from the \SOURCE directory
    on the disk in drive D, type

    C>DEL D:\SOURCE\*.OBJ  <Enter>

    To delete all files from the current directory on the current drive,
    type

    C>DEL *.*  <Enter>

    or

    C>DEL .  <Enter>

    In this case, MS-DOS will prompt for confirmation that all files
    should be deleted.

    To delete all files from the directory \WORD\LETTERS on the current
    drive, type

    C>DEL \WORD\LETTERS  <Enter>

    Again, MS-DOS will prompt for confirmation that all files should be
    deleted.

Messages

    Access denied
    The specified file is read-only. Use the ATTRIB command with the -R
    switch to remove the file's read-only status.

    Are you sure (Y/N)?
    This message prompts the user for confirmation if the command would
    delete all files in a directory (if the command line ends with a
    directory name or  *.*). Respond with Y to delete all files in the
    directory; respond with N to terminate the command.

    File not found
    The filename in the command is invalid or the file does not exist in
    the specified directory.

    Invalid directory
    One of the directories named in the file specification is invalid or
    does not exist.

    Invalid drive specification
    The drive code in the file specification is invalid or the named drive
    does not exist in the system.



DIR
1.0 and later
Display Directory
Internal


Purpose

    Displays a list of a directory's files and subdirectories.

Syntax

    DIR  [drive:][path][filename] [/P] [/W]

    where:

    filename   is the name of the file, optionally preceded by a drive
                and/or path, whose directory entry is to be displayed;
                wildcard characters are permitted.

    /P         causes a pause after each screen page of display.

    /W         causes a wide display of filenames formatted five across.

Description

    The DIR command displays information about the files in a directory.
    It also displays information about the volume name of the disk that
    contains the directory, the total number of files and subdirectories
    in the directory, and the amount of free space remaining on the
    disk.

    The normal format of the DIR command's output is

    Volume in drive C is HARDDISK
    Directory of  C:\ASM
    .            <DIR>      9-19-85   7:09p
    ..           <DIR>      9-19-85   7:09p
    LIB          <DIR>      9-17-86  11:31p
    SOURCE       <DIR>      9-17-86  11:31p
    AT86     EXE    41146   5-13-85   5:18p
    CREF     EXE    15028  10-16-85   4:00a
    DEBUG    COM    15552   3-07-85   1:43p
    EXE2BIN  EXE     2816   3-07-85   1:43p
    EXEMOD   EXE    11034  10-16-85   4:00a
    EXEPACK  EXE    10848  10-16-85   4:00a
    LIB      EXE    28716  10-16-85   4:00a
    LINK     EXE    43988  10-16-85   4:00a
    MAKE     EXE    24300  10-16-85   4:00a
    MAPSYM   EXE    18026  10-16-85   4:00a
    MASM     EXE    85566  10-16-85   4:00a
    SYMDEB   EXE    37021  10-16-85   4:00a
    T86      EXE    49024  12-06-84   4:03p
            17 File(s)   4022272 bytes free

    The first line shows the volume label of the disk that contains the
    directory being displayed; the second line gives the full pathname of
    the directory. The subsequent lines are the names of the files and
    subdirectories within the current or specified directory. Each entry
    includes the time and date the file or subdirectory was created or
    last modified.

    Files are shown with their exact size in bytes; directories are shown
    with the symbol <DIR>. If the directory being listed is not the root
    directory of the disk, it always contains the two special directory
    entries . and .., which are aliases for the current directory and the
    parent directory, respectively. These aliases are included in the
    total file count in the last line of the display.

    Subsets of the files and subdirectories in the current or specified
    directory of the current or specified drive can be listed by including
    a filename with wildcards in the command line. For example, the
    filename *.DOC will cause DIR to list only the files with a .DOC
    extension.

    If the command line ends with a drive or path, DIR automatically
    appends an *.*, causing all files and subdirectories in the current or
    specified directory of the current or specified drive to be listed. If
    a filename is included but no extension is given, DIR appends a .* to
    the filename, causing all files with that name to be listed,
    regardless of their extension. If a filename ending with a . is
    included, nothing is appended and all matching subdirectories and
    filenames without extensions are listed.

    The /P switch causes a pause in the display after each screen page (23
    lines plus a message). The listing resumes when the user presses a
    key.

    The /W switch causes the list to be in a more compact format by
    omitting size and date/time information and by displaying the
    filenames five across:

    Volume in drive C is HARDDISK
    Directory of  C:\ASM

    .             ..            LIB           SOURCE        AT86     EXE
    CREF     EXE  DEBUG    COM  EXE2BIN  EXE  EXEMOD   EXE  EXEPACK  EXE
    LIB      EXE  LINK     EXE  MAKE     EXE  MAPSYM   EXE  MASM     EXE
    SYMDEB   EXE  T86      EXE
            17 File(s)   4022272 bytes free

    When the /W form of the listing is displayed, subdirectories are not
    easily distinguished from files because the <DIR> symbol is not
    shown.

Examples

    To list all files in the current directory on the current drive,
    type

    C>DIR  <Enter>

    To list all files in the current directory on the disk in drive B,
    type

    C>DIR B:  <Enter>

    or

    C>DIR B:*.*  <Enter>

    To list all files in the directory \SOURCE on the current drive, type

    C>DIR \SOURCE  <Enter>

    or

    C>DIR \SOURCE\*.*  <Enter>

    To list all files with the extension .OBJ in the \LIB directory on the
    disk in drive D, type

    C>DIR D:\LIB\*.OBJ  <Enter>

    To list all files in the parent directory of the current directory on
    the current drive, type

    C>DIR ..  <Enter>

    To list all files in the current directory on the current drive,
    sorted by filename and extension, type

    C>DIR | SORT  <Enter>

    To list all files in the current directory on the current drive,
    sorted by extension, type

    C>DIR | SORT /+10  <Enter>

    The /+10 instructs SORT to sort the directory entries starting at
    the tenth column, which is the first column of the filename
    extension.

    To list the subdirectories and files without extensions in the current
    directory, type

    C>DIR *.  <Enter>

    To print the directory on an attached printer instead of displaying it
    on the screen, type

    C>DIR > PRN  <Enter>

    To make a copy of the directory in a file called FILES.TXT, type

    C>DIR > FILES.TXT  <Enter>

Messages

    File not found
    A filename was included in the command line and no matching files were
    found.

    Invalid directory
    An element of the path included in the command line does not
    exist.

    Invalid drive specification
    The specified drive is invalid or is not present in the system.

    Strike a key when ready...
    If the DIR command includes the /P switch, the display is suspended
    after each 23 lines and this message prompts the user to press a key
    to see the next screenful of entries.



DISKCOMP
3.2
Compare Floppy Disks
External


Purpose

    Compares two entire floppy disks on a sector-by-sector basis and
    reports any differences. This command was included with PC-DOS
    beginning with version 1.0. To compare individual files, see USER
    COMMANDS: COMP; FC.

Syntax

    DISKCOMP [drive1:] [drive2:] [/1] [/8]

    where:

    drive1     is the drive containing the first disk to be compared.

    drive2     is the drive containing the second disk to be compared.

    /1          compares only the first sides of the disks.

    /8          compares only the first eight sectors of each track.

Description

    The DISKCOMP command compares the physical sectors of one floppy disk
    with those of another. The drive1 and drive2 parameters designate the
    drives holding the two disks to be compared; the drives should always
    be of the same type. If drive2 is omitted, DISKCOMP uses the current
    drive. If both drive1 and drive2 are omitted or are identical,
    DISKCOMP performs the comparison using a single drive, prompting the
    user to swap disks as required.

    Ordinarily, DISKCOMP determines the disk format by inspecting the disk
    in drive1. The /1 and /8 switches override this check so that only one
    side of the disks or only the first eight sectors of each track are
    compared, regardless of the actual format of the disks.

    If all the sectors on all the tracks are identical, DISKCOMP displays
    the message Compare OK. If differences are found, DISKCOMP reports
    them by issuing a message that includes the numbers of the track and
    disk side (read/write head) where the differences occur. Because
    DISKCOMP works at the level of the disks' physical sectors and is
    ignorant of the control areas and file structures imposed on a disk by
    MS-DOS, it also reports as errors bad sectors that were marked during
    the FORMAT process.

    When DISKCOMP finishes comparing two disks, it displays a prompt that
    allows the user to choose between comparing another pair of disks and
    returning to the MS-DOS command level.

    DISKCOMP cannot be used with a network drive or with a drive created
    or affected by an ASSIGN, JOIN, or SUBST command, nor can it be used
    with fixed disks.

Return Codes

    0  Compared disks were identical.
    1  Differences were found between the compared disks.
    2  DISKCOMP was terminated with a Control- C.
    3  Bad sector was found on one of the disks being compared.
    4  Initialization error was encountered: not enough memory, syntax
        error in command line, or invalid drive specified in command line.

    Note: Return codes are not present in the PC-DOS version of DISKCOMP.

Examples

    To compare the disk in drive A with the disk in drive B, type

    C>DISKCOMP A: B:  <Enter>

    To compare two disks using only drive A, type

    C>DISKCOMP A: A:  <Enter>

    To compare only the first side of the disk in drive A with the first
    side of the disk in drive B, type

    C>DISKCOMP A: B: /1  <Enter>

    To compare only the first eight sectors of each track on one side of
    one disk with the first eight sectors of each track on one side of
    another disk using only drive A, type

    C>DISKCOMP A: A: /1 /8  <Enter>

Messages

    Cannot DISKCOMP to or from
    an ASSIGNed or SUBSTed drive
    One of the specified drives has been affected by an ASSIGN or SUBST
    command.

    Cannot DISKCOMP to or from
    a network drive
    One of the specified drives is a network device.

    Compare another diskette (Y/N) ?
    This prompt allows comparison of another pair of disks. Respond with Y
    to cause DISKCOMP to prompt for insertion of the next pair of disks to
    be compared; respond with N to exit to MS-DOS.

    Compare error on side n, track n
    A difference was detected between the two disks being compared.

    Compare OK
    The two disks being compared are identical.

    Compare process ended
    The disk comparison was terminated as the result of a fatal
    error.

    Comparing n tracks,
    n sectors per track, n side(s)
    This informational message specifies the format of the two disks being
    compared.

    DEVICE Support Not Present
    The disk drive does not support MS-DOS 3.2 device control.

    Drive X not ready
    Make sure a diskette is inserted into
    the drive and the door is closed
    DISKCOMP was unable to read the disk in the specified drive.

    Drive types or diskette types
    not compatible
    Single-sided disks cannot be compared with double-sided disks, nor
    high-density disks with double-density disks.

    FIRST diskette bad or incompatible
    DISKCOMP is unable to determine the format of the first disk.

    Incorrect DOS version
    The version of DISKCOMP is not compatible with the version of MS-DOS
    that is running.

    Insert diskette with directory that contains
    COMMAND.COM in drive X and strike any key when ready
    If the system was booted from a floppy disk and the system disk was
    then removed in order to use DISKCOMP, the user must replace the
    system disk after the compare operation is complete.

    Insert FIRST diskette in drive X:
    Press any key when ready...
    This message prompts the user to insert the first disk of a pair to be
    compared.

    Insert SECOND diskette in drive X:
    Press any key when ready...
    This message prompts the user to insert the second disk of a pair to
    be compared.

    Insufficient memory
    The available system memory is insufficient to load and execute the
    DISKCOMP program.

    Invalid drive specification
    Specified drive does not exist
    or is non-removable
    One of the drives specified in the command line is invalid or does not
    exist.

    Invalid parameter
    Do not specify filename(s)
    Command format: DISKCOMP d: d: [/1][/8]
    A syntax error was detected in the command line, usually caused by an
    incorrect switch.

    SECOND diskette bad or incompatible
    The second disk of a pair to be compared does not have the same format
    as the first disk or has bad sectors preventing DISKCOMP from
    determining its format.

    Unrecoverable read error on drive X:
    The disk in the specified drive contains an unreadable sector.



DISKCOPY
2.0 and later
Copy Floppy Disks
External


Purpose

    Performs a sector-by-sector copy of one entire floppy disk to another
    floppy disk. This command was included with PC-DOS beginning with
    version 1.0. To copy individual files, see USER COMMANDS:
    COPY.

Syntax

    DISKCOPY [drive1:] [drive2:] [/1]

    where:

    drive1    is the drive containing the disk to be copied.

    drive2    is the drive containing the disk that will become the copy.

    /1        copies only the first side of the disk in drive1 (MS-DOS
            version 3.2).

Description

    The DISKCOPY command duplicates a floppy disk, performing the copy on
    a physical sector-by-sector basis. The drive1 parameter specifies the
    location of the disk to be copied (the source disk). The drive2
    parameter specifies the location of the disk that will become the copy
    (the destination disk). If drive2 is omitted, the current drive is
    used as the destination drive; if both drive1 and drive2 parameters
    are omitted or are the same, DISKCOPY performs the copy operation
    using a single drive, prompting the user to swap the disks as
    necessary.

    DISKCOPY examines the destination disk before writing any information
    and terminates with an error message if it does not have the same
    format as the source disk. If the destination disk is not formatted,
    DISKCOPY formats it with the same format as the source disk, as part
    of the DISKCOPY operation.

    Note: With MS-DOS versions 2.0 through 3.1, the destination disk must
    be formatted using the FORMAT command before DISKCOPY can be used. All
    PC-DOS versions of DISKCOPY will automatically format the destination
    disk, if necessary.

    When DISKCOPY finishes copying a disk, it displays a prompt that
    allows the user to choose between copying another disk and returning
    to the MS-DOS command level.

    Because DISKCOPY creates an exact duplicate of the source disk, any
    file fragmentation present on the source disk is also present on the
    destination disk after the DISKCOPY process is complete. To eliminate
    fragmentation of the source files, they should be copied to the
    destination disk individually using COPY or XCOPY.

    The DISKCOPY command cannot be used with a network drive or with a
    drive created or affected by an ASSIGN, JOIN, or SUBST command, nor
    can it be used with fixed disks.

Return Codes

    0  Disk was copied successfully.
    1  Nonfatal but unrecoverable read or write error occurred (no
        Interrupt 24H generated).
    2  DISKCOPY was terminated with a Control-C.
    3  Fatal error was encountered: unreadable source disk or
        unformattable destination disk.
    4  Initialization error was encountered: not enough memory, syntax
        error in command line, or invalid drive specified in command
        line.

    Note: Return codes are not present in the PC-DOS version of DISKCOPY.

Examples

    To copy the contents of the disk in drive A to the disk in drive B,
    type

    C>DISKCOPY A: B:  <Enter>

    To copy the contents of the disk in drive A using only one drive,
    type

    C>DISKCOPY A: A:  <Enter>

    To copy only the first side of the disk in drive A to the first side
    of the disk in drive B, type

    C>DISKCOPY A: B: /1  <Enter>

Messages

    Cannot DISKCOPY to or from
    an ASSIGNed or SUBSTed drive
    One of the specified drives has been affected by an ASSIGN or SUBST
    command.

    Cannot DISKCOPY to or from
    a network drive
    One of the specified drives is a network device.

    Copy another diskette (Y/N) ?
    This prompt allows copying of another disk. Respond with Y to cause
    DISKCOPY to prompt for insertion of the next set of disks; respond
    with N to exit to MS-DOS.

    Copying n tracks
    n sectors per track, n side(s)
    This informational message specifies the format of the source disk
    being copied.

    Copy process ended
    The DISKCOPY process has been successfully completed or has been
    terminated by a fatal error. In the latter case, this message is
    preceded by another message explaining the error.

    DEVICE Support Not Present
    The disk drive does not support MS-DOS version 3.2 device
    control.

    Disk error while reading drive X:
    Abort, Retry, Ignore?
    A bad sector was detected on the source disk. This does not
    necessarily invalidate the disk copy; the bad sector may originally
    have been detected and flagged by the FORMAT program and therefore not
    included in any file. One solution is to copy the files individually
    using the COPY command.

    Drive X: not ready
    Make sure a diskette is inserted into
    the drive and the door is closed
    DISKCOPY was unable to read the disk in the specified drive.

    Drive types or diskette types
    not compatible
    Single-sided disks cannot be copied to or from double-sided disks, nor
    high-density disks to or from double-density disks.

    Formatting while copying
    The destination disk was not previously formatted. It is given the
    same format as the source disk as part of the DISKCOPY operation (MS-
    DOS version 3.2).

    Incorrect DOS version
    The version of DISKCOPY is not compatible with the version of MS-DOS
    that is running.

    Insert diskette with directory that contains
    COMMAND.COM in drive X and strike any key when ready
    If the system was booted from a floppy disk and the system disk was
    then removed in order to use DISKCOPY, the user must replace the
    system disk after the copy operation is complete.

    Insert SOURCE diskette in drive X:
    Press any key when ready...

    or

    Insert TARGET diskette in drive X:
    Press any key when ready...
    These messages prompt the user to insert the source and destination
    disks before beginning the copy operation.

    Insufficient memory
    The available system memory is insufficient to load and execute the
    DISKCOPY program.

    Invalid drive specification
    Specified drive does not exist,
    or is non-removable
    One of the drives specified in the command line is invalid or does not
    exist. A fixed disk cannot be the source or destination disk for a
    DISKCOPY operation.

    Invalid parameter
    Do not specify filename(s)
    Command Format: DISKCOPY d: d: [/1]
    A syntax error was detected in the command line, usually caused by an
    incorrect switch or by the use of a filename instead of (or in
    addition to) a disk drive.

    SOURCE diskette bad or incompatible

    or

    TARGET diskette bad or incompatible
    The source disk could not be read or the destination disk could not be
    formatted.

    Target diskette is write protected
    The destination disk has a write-protect tab on it.

    Target diskette may be unusable
    Unrecoverable read or write errors were encountered while copying the
    source disk to the destination disk. The newly copied disk may not be
    an accurate copy.

    Unrecoverable read error on drive X:
    side n, track n

    or

    Unrecoverable write error on drive X:
    side n, track n
    The disk in the specified drive contained a sector that could not be
    successfully read or written.



DRIVER.SYS
3.2
Configurable External-Disk-Drive Driver
External


Purpose

    Installs and configures external disk drives or assigns logical drive
    letters to existing floppy-disk drives.

Syntax

    DEVICE=DRIVER.SYS /D:n [/C] [/F:n] [/H:n] [/N] [/S:n] [/T:n]

    where:

    /D:n       is the drive number (0-127 for floppy disks, 128-255 for
                fixed disks) and must always be the first switch in the
                command line.

    /C         specifies that door-lock-status support is available.

    /F:n       is the form-factor index for the device (default = 2):

                0     320/360 KB
                1     1.2 MB
                2     720 KB
                3     8" single-density floppy disk
                4     8" double-density floppy disk
                5     fixed disk
                6     magnetic-tape drive
                7     other

    /H:n       is the number of heads supported by the disk drive (1-99).

    /N         specifies a nonremovable block device.

    /S:n       is the number of sectors per track (1-40).

    /T:n       is the tracks per read/write head (1-999).

Description

    When the computer is turned on or restarted, MS-DOS assigns numbers to
    all existing internal disk drives. The DRIVER.SYS file--an
    installable, configurable block-device driver for external disk drives
    and other mass-storage devices--allows installation of peripheral
    devices that are not supported by the resident drivers in the MS-DOS
    BIOS module. DRIVER.SYS can also assign a logical drive letter to an
    existing disk drive, thus giving the device two drive letters. (This
    allows such activities as copying files between like media--for
    example, copying files from one 1.2 MB 5.25-inch disk to another--
    using the same drive.)

    The /D:n switch assigns a unit number to the additional disk drive or
    specifies the number of the existing disk drive that is to be assigned
    a logical drive letter. (Floppy-disk unit numbers begin at 0; fixed-
    disk numbers begin at 80H.) For example, if the system contains two
    floppy-disk drives (0 and 1), an external floppy-disk drive requiring
    DRIVER.SYS would be assigned the value 2; MS-DOS would then assign
    that drive the next available drive letter. If the number used with
    the /D:n switch references an existing drive (for example, 0, the
    first floppy-disk drive), MS-DOS assigns the drive the next available
    drive letter, allowing the one drive unit to be referenced by two
    drive letters. The /D:n switch is not optional and must precede all
    other switches in the command line.

    The /C, /F:n, and /N switches describe characteristics of the disk
    drive that is being selected for use with DRIVER.SYS. The /C switch is
    included only if the device has a status line indicating whether the
    disk in the drive has been changed. (This information is used by the
    driver to optimize disk accesses to the directory and file allocation
    table.) If the device does not have a status line, /C will have no
    effect. The /F:n option describes the form-factor index used by the
    device. The permissible values for n are given in the preceding
    table; the default type is a 720 KB disk. The /N switch indicates that
    the block device is nonremovable. Access to such devices is more
    efficient than access to removable media because MS-DOS can eliminate
    calls to the driver for a media-change check.

    The /H:n, /S:n, and /T:n switches describe the physical layout of the
    recording medium. /H:n specifies the number of recording surfaces, or
    read-write heads, supported by the drive (1-99). /S:n is the number
    of sectors per track (1-40) and /T:n is the tracks per side (1-999).
    (The total number of physical sectors on a given disk is found by
    multiplying the number of heads by the tracks per side and the sectors
    per track.)

    Note: The values used with these switches must be supported by the
    device being installed. If DRIVER.SYS is used to assign a logical
    drive letter to an existing physical device, the values used with the
    switches must be identical to the characteristics imposed by the
    default device driver.

Examples

    To install a driver for an external 720 KB disk drive in a system that
    already has two 5.25-inch floppy-disk drives, insert the line

    DEVICE=DRIVER.SYS /D:02

    into the CONFIG.SYS file and restart the system.

    Assume that an IBM PC/AT or compatible has three disk drives
    installed: Drive A is a 1.2 MB 5.25-inch floppy-disk drive; drive B is
    a 360 KB 5.25-inch floppy-disk drive; drive C is a 30 MB fixed-disk
    drive. To assign the logical drive letter D to the existing drive A,
    effectively giving the one drive two drive letters, insert the
    line

    DEVICE=DRIVER.SYS /D:0 /F:1 /H:2 /S:15 /T:80 /C

    into the CONFIG.SYS file and restart the system.

Messages

    Bad or missing DRIVER.SYS
    The file DRIVER.SYS could not be found in the root or specified
    directory or has been damaged.

    ERROR - Incorrect DOS version
    The version of DRIVER.SYS is not compatible with the version of MS-DOS
    that is running.

    ERROR - No drive specified
    The /D:n switch was not included in the command line.

    Loaded External Disk Driver for Drive X
    The device driver has been successfully installed and this message
    informs the user of the drive letter assigned to the device.

    Sector size too large in file DRIVER.SYS
    DRIVER.SYS uses a sector size that is larger than the sector size used
    by any of the system's default disk drivers. The driver cannot be used
    because MS-DOS's internal disk buffers will not be large enough to
    hold a sector read from the device.



EDLIN
1.0 and later
Line Editor
External


Purpose

    Creates and changes ASCII text files.

Syntax

    EDLIN  [drive:][path] filename [/B]

    where:

    filename     is the name of an ASCII text file to be created or
                edited, optionally preceded by a drive and/or path.

    /B           causes logical end-of-file marks within the file to be
                ignored (versions 2.0 and later).

Description

    The EDLIN program is a simple line-oriented editor that can be used to
    create or maintain short text files. The user references and edits
    text by line number; EDLIN displays these numbers for convenience but
    they do not become part of the file. Each line of the file being
    edited can be a maximum of 253 characters.

    The filename parameter specifies a plain ASCII text file; if the file
    does not already exist, EDLIN creates it. (EDLIN cannot be used on
    most files created by word-processing programs because such document
    files have embedded formatting codes and other formatting information
    that EDLIN cannot interpret.) EDLIN does not assume any extensions;
    the user must type the complete filename. (EDLIN does not permit
    editing of a .BAK file.)

    If filename is a previously existing text file, EDLIN loads lines
    from the file into memory until the editing buffer is 75 percent full
    or until a logical end-of-file mark or the physical end of the file is
    reached. The /B switch forces EDLIN to ignore any logical end-of-file
    marks (1AH, or Control-Z) the file may contain. If the file is too
    large for the edit buffer, the Write Lines to Disk (W) and Append
    Lines from Disk (A) commands are used during the edit session to
    process the remaining portions of the file.

    Once the file is created or loaded into the editing buffer, EDLIN
    displays its asterisk prompt (*) and the user can begin entering
    editing commands.

    EDLIN commands consist of a single character, in either uppercase or
    lowercase, usually preceded by one or more line numbers. More than one
    command can be entered on a single line by separating the commands
    with semicolons. EDLIN does not execute a command until the Enter key
    is pressed.

    The EDLIN commands are

╓┌───────────────────────┌───────────────────────────────────────────────────╖
    Command            Action
──────────────────────────────────────────────────────────────────────
    linenumber         Edit line.
    A                  Append lines from disk.
    C                  Copy lines (versions 2.0 and later).
    D                  Delete lines.
    E                  End editing session.
    I                  Insert lines.
    L                  List lines.
    M                  Move lines (versions 2.0 and later).
    P                  Display in pages (versions 2.0 and later).
    Q                  Quit without saving changes.
    R                  Replace text.
    S                  Search for text.
    T                  Transfer another file into the edit buffer
                        (versions 2.0 and later).
    W                  Write lines to disk.

    Each of these commands is discussed in detail in the following
    pages.

    All EDLIN commands that accept a line number or range of line numbers
    can also recognize the following symbolic references:

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    Symbol       Meaning
──────────────────────────────────────────────────────────────────────
    #            The line after the last line in the edit buffer
    .            The current line
    +n or -n     A line number relative to the current line (for example,
                +5 = five lines past the current line)

    When the user terminates the editing session with the E command, EDLIN
    gives the new file the same name as the original file and renames the
    original (unchanged) file with the extension .BAK. Any previous file
    with the same name and the extension .BAK is lost. When the user
    terminates the editing session with the Q command, the original
    filename remains unchanged.

Example

    To edit the file AUTOEXEC.BAT in the root directory of the current
    drive, type

    C>EDLIN \AUTOEXEC.BAT  <Enter>

Messages

    Cannot edit .BAK file--rename file
    Files with the extension .BAK cannot be edited with EDLIN. Rename the
    file or copy it to a file with the same name but a different
    extension.

    End of input file
    The entire file has been read into memory.

    File is READ-ONLY
    Files marked with the read-only attribute cannot be edited. Remove the
    read-only attribute with the ATTRIB command or copy the file to a file
    with a different name.

    File name must be specified
    The command line did not include a filename.

    File not found
    The file named in the command line could not be found or does not
    exist.

    Incorrect DOS version
    The version of EDLIN is not compatible with the version of MS-DOS that
    is running.

    Insufficient memory
    Not enough memory is available to carry out the requested
    command.

    Invalid drive or file name
    The command line included a drive that is invalid or does not exist in
    the system or the filename is not valid.

    Invalid Parameter
    The command line contained an illegal switch or other invalid
    parameter.

    New file
    The file named in the command line did not previously exist. The file
    is created and the edit buffer is emptied.

    Read error in: filename
    MS-DOS was unable to read the entire file. Run CHKDSK to determine
    whether the file or disk has been damaged.



EDLIN: linenumber
1.0 and later
Edit Line


Purpose

    Selects a line of text for editing.

Syntax

    linenumber

    where:

    linenumber       is the number assigned by EDLIN to the text line to
                    be edited (1-65534).

Description

    The command to edit a particular line of text is simply the line's
    number or one of the special symbols or expressions that evaluate to a
    line number, followed by the Enter key. EDLIN displays the current
    contents of the specified line and copies them to a special editing
    buffer called the template, then moves the cursor to a new line and
    displays a prompt in the form of the line number followed by a colon
    and an asterisk. If a line number is not specified (that is, if the
    Enter key alone is pressed in response to the EDLIN prompt), EDLIN
    displays the line following the current line and makes it the current
    line.

    The user can change the text of the specified line by simply entering
    new text followed by a press of the Enter key, leave the text
    unchanged by pressing Enter alone, or modify the text by using special
    editing keys to change a portion of the text that has been placed in
    the template. These editing keys and their actions are

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    Key          Action
──────────────────────────────────────────────────────────────────────
    F1           Copies one character from the template to the new line.

    F2char       Copies all characters up to the specified character from
                the template to the new line.

    F3           Copies all remaining characters in the template to the
                new line.

    Del          Does not copy (skips over) one character.

    F4char       Does not copy (skips over) all characters up to the
                specified character.

    Esc          Restarts editing for the current line, leaving the
                template unchanged.

    Ins          Enters/exits character-insert mode.

    F5           Makes the newly edited line the new template.

                Copies one character from the template to the new line.

                Deletes one character from the new line.

    Backspace    Deletes one character from the new line.

    Note: Computers that are not IBM-compatible may use a different set
    of editing keys to perform these actions.

    Control characters (those characters with ASCII codes in the range 0-
    1FH) cannot be inserted into text with the usual Control-key
    combinations. Instead, the user must press the sequence Ctrl-V,
    followed by an uppercase character or symbol. For example, Ctrl-C
    (ASCII code 03H) is entered into text by pressing Ctrl-V followed by a
    capital C; the Escape character (ASCII code 1BH) is generated by
    pressing Ctrl-V followed by a left square-bracket character ([).

Examples

    To edit line 4, type

    *4  <Enter>

    To edit the line two lines ahead of the current line, type

    *+2  <Enter>



EDLIN: a
1.0 and later
Append Lines from Disk


Purpose

    Reads lines from the file being edited into the edit buffer.

Syntax

    [n]A

    where:

    n          is the number of lines to be read from the file.

Description

    If the file being edited is too large to fit into the edit buffer,
    EDLIN ordinarily reads only enough text to fill 75 percent of the
    buffer when it opens the file, reserving 25 percent of the buffer for
    additions and changes to the text. The user must then employ the Write
    Lines to Disk (W) and Append Lines from Disk (A) commands to write and
    read successive blocks of text until the entire file has passed
    through the edit buffer.

    The A command alone has no effect if the edit buffer is 75 percent or
    more full. The W command must be used to write lines to the output
    file and delete them from the buffer; then the A command can read new
    lines from the input file and append them to the end of the text
    remaining in the buffer.

    The n parameter specifies the number of lines to be read from the
    file. If n is omitted or is too large, EDLIN reads only enough lines
    to fill the editing buffer to 75 percent of its capacity.

Examples

    To append 200 lines from the disk file to the edit buffer, type

    *200A  <Enter>

    To append as many lines from the file as possible (until the edit
    buffer is 75 percent full), type

    *A  <Enter>

Message

    End of input file
    The last section of the file being edited has been read into the edit
    buffer.



EDLIN: C
2.0 and later
Copy Lines


Purpose

    Copies one or more lines from one location in the edit buffer to
    another.

Syntax

    [first],[last],destination[,count]C

    where:

    first           is the number of the first line to be copied.

    last            is the number of the last line to be copied.

    destination     is the number of the line before which the copied
                    lines are to appear.

    count           is the number of times to execute the copy operation.

Description

    The Copy Lines (C) command copies one or more text lines, inserting
    the copied lines at another location in the edit buffer. The original
    lines that were copied are unchanged. EDLIN then renumbers the edit
    buffer and makes the first copied line at the destination the new
    current line.

    The first and last line-number parameters define the block of lines
    to be copied. (Note that the first line number must be less than or
    equal to the last line number.) Either or both of these numbers can be
    omitted (in which case the current line number is used), but the
    commas must still be entered as placeholders. The destination
    parameter specifies the line before which the copied lines are to be
    inserted; it is not optional and must not fall within the range of
    line numbers specified by first and last. One of the special symbols .
    (current line) or # (end of buffer) or an expression relative to the
    current line number (+n or -n) can be used instead of absolute line
    numbers.

    To replicate the line or lines multiple times, the copy operation can
    be repeated automatically with the optional parameter count. The
    default value for count is one.

Examples

    If the current line is line 10, to copy lines 10 through 15 and place
    the copied lines before line 5, type

    *10,15,5C  <Enter>

    or

    *,15,5C  <Enter>

    or

    *,+5,-5C  <Enter>

    If the current line is line 10, to place three copies of lines 10
    through 15 before line 1, type

    *10,15,1,3C  <Enter>

    or

    *,15,1,3C  <Enter>

    or

    *,+5,1,3C  <Enter>

Messages

    Entry error
    The command line contained an error such as a first line number that
    was greater than the last line number or a destination line number
    that fell within the range first,last.

    Insufficient memory
    The edit buffer does not have sufficient room for EDLIN to carry out
    the specified command.

    Must specify destination line number
    No destination line number was specified in the command line;
    therefore, no changes were made to the edit buffer.



EDLIN: D
1.0 and later
Delete Lines


Purpose

    Deletes one or more lines from the edit buffer.

Syntax

    [first][,last]D

    where:

    first      is the number of the first line to delete.

    last       is the number of the last line to delete.

Description

    The Delete Lines (D) command removes one or more text lines from the
    edit buffer. The line after the last line deleted becomes the new
    current line.

    The first and last line-number parameters define the block of lines
    to be deleted. (Note that the first line number must be less than or
    equal to the last line number.) Either or both of these numbers can be
    omitted (in which case the current line number is used), but a leading
    comma is required as a placeholder if first is omitted when last is
    present. One of the special symbols . (current line) or # (end of
    buffer) or an expression relative to the current line number (+n or
    -n) can be used instead of absolute line numbers.

Examples

    If the current line is line 10, to delete the current line, type

    *10D  <Enter>

    or%

    *D  <Enter>

    If the current line is line 10, to delete lines 10 through 15,
    type

    *10,15D  <Enter>

    or

    *,15D  <Enter>%

    or

    *,+5D  <Enter>

    If the current line is line 10, to delete all lines from the current
    line to the end of the buffer, type

    *10,#D  <Enter>

    or

    *,#D  <Enter>

Message

    Entry error
    The command line contained an error such as a first line number that
    was greater than the last line number.



EDLIN: E
1.0 and later
End Editing Session


Purpose

    Saves the edited file to disk and exits from EDLIN.

Syntax

    E

Description

    The End Editing Session (E) command writes the contents of the edit
    buffer to the current directory of the disk in the current drive. If a
    previously existing file was being edited and there is any text
    remaining in the original file that has not yet passed through the
    edit buffer, EDLIN copies this text to the output file. EDLIN gives
    the newly edited file the same name as the original file and renames
    the original (unchanged) file with the extension .BAK. Any previous
    file with the same name and the extension .BAK is lost. EDLIN then
    returns to MS-DOS.

    If the disk does not have enough space to hold the edited file in
    addition to the original file, EDLIN writes as much of the edited file
    as possible into a file with the extension .$$$; the remainder of the
    edited text is lost. The name and contents of the original file are
    left unchanged.

Example

    To end an editing session, type

    *E  <Enter>

Messages

    Disk full. Edits lost.
    The disk does not contain enough free space for the edited file. A
    partial file may have been created with the extension .$$$.

    File Creation Error
    The .BAK file is marked read-only, the root directory is full or
    cannot contain any more files, or the filename is the same as a volume
    label or directory name.

    No room in directory for file
    The file could not be saved because its destination was the root
    directory and the root directory is full.

    Too many files open
    MS-DOS was unable to open the .BAK file due to a lack of available
    system file handles. Increase the value of the FILES command in the
    CONFIG.SYS file.



EDLIN: I
1.0 and later
Insert Lines


Purpose

    Inserts new lines into the edit buffer.

Syntax

    [destination]I

    where:

    destination    is the number of the line before which text is to be
                    inserted.

Description

    The Insert Lines (I) command enables insert mode and allows new text
    to be placed between previously existing lines of text. When insert
    mode is terminated, the first line following the inserted lines
    becomes the new current line.

    EDLIN places the new text before the line specified by the destination
    parameter. If destination is omitted, EDLIN assumes the current line;
    if destination is larger than the number of lines in the edit buffer,
    EDLIN simply appends the new text after the actual last line. One of
    the special symbols . (current line) or # (end of buffer) or an
    expression relative to the current line number (+n or -n) can be
    used instead of an absolute line number.

    After an I command, EDLIN issues a prompt consisting of the line
    number for the inserted text followed by a colon and an asterisk and
    continues to issue such prompts each time the Enter key is pressed
    until the user terminates insert mode by pressing Ctrl-C or Ctrl-
    Break.

Examples

    If the current line is line 10, to insert text before line 7,
    type

    *7I  <Enter>

    or

    *-3I  <Enter>

    To insert lines at the beginning of the buffer, type

    *1I  <Enter>

    To insert lines at the end of the buffer, type

    *#I  <Enter>

Message

    Insufficient memory
    The edit buffer does not have sufficient room for EDLIN to complete
    the specified command.



EDLIN: L
1.0 and later
List Lines


Purpose

    Displays one or more lines from the edit buffer.

Syntax

    [first][,last]L

    where:

    first      is the number of the first line to be displayed.

    last       is the number of the last line to be displayed.

Description

    The List Lines (L) command displays text lines on standard output. If
    the current line lies within the range of lines listed, EDLIN displays
    an asterisk next to its number. The current line is not changed.

    The first and last line-number parameters define the block of lines
    to be listed. (Note that the first line number must be less than or
    equal to the last line number.) Either or both of these numbers can be
    omitted, but a leading comma is required as a placeholder if first is
    omitted when last is present. One of the special symbols . (current
    line) and # (end of buffer) or an expression relative to the current
    line number (+n or -n) can be used instead of absolute line
    numbers.

    If only the first line number is specified, EDLIN displays text in 23-
    line increments starting with that number. If only the last line
    number is specified, EDLIN displays text beginning 11 lines before the
    current line and continuing to the specified last line. If no line
    numbers are specified in the command, EDLIN lists the 23 lines
    centered around the current line; if the current line number is less
    than 13, EDLIN lists the first 23 lines in the buffer.

Examples

    To display lines 20 through 30, type

    *20,30L  <Enter>

    If the current line is 20, to display the 23 lines centered around the
    current line, type

    *L  <Enter>

    EDLIN displays lines 9 through 31.

Message

    Entry error
    The command line contained an error such as a first line number that
    was greater than the last line number.



EDLIN: M
2.0 and later
Move Lines


Purpose

    Moves lines from one place in the edit buffer to another.

Syntax

    [first],[last],destinationM

    where:

    first           is the number of the first line to be moved.

    last            is the number of the last line to be moved.

    destination     is the number of the line before which the moved
                    lines are to be inserted.

Description

    The Move Lines (M) command transfers one or more text lines from one
    location in the edit buffer to another. EDLIN then deletes the
    original lines and renumbers the edit buffer. The first moved line
    becomes the new current line.

    The first and last line-number parameters define the block of lines
    to be moved. (Note that the first line number must be less than or
    equal to the last line number.) Either or both of these numbers can be
    omitted (in which case the current line number is used), but the
    commas must still be entered as placeholders. The destination
    parameter specifies the line before which the moved lines are to be
    inserted; it is not optional and must not fall within the range of
    line numbers specified by first and last. One of the special symbols
    . (current line) or # (end of buffer) or an expression relative to the
    current line number (+n or -n) can be used instead of absolute line
    numbers.

Example

    If the current line is line 10, to move lines 10 through 15 and place
    them before line 5, type

    *10,15,5M  <Enter>

    or

    *,15,5M  <Enter>

    or

    *,+5,-5M  <Enter>


Messages

    Entry error
    The command line contained an error such as a first line number that
    was greater than the last line number or a destination line number
    that fell within the range first,last.

    Must specify destination line number
    No destination line number was specified in the command line;
    therefore, no changes were made to the edit buffer.



EDLIN: P
2.0 and later
Display in Pages


Purpose

    Displays lines for viewing in successive screenfuls (pages).

Syntax

    [first][,last]P

    where:

    first      is the number of the first line to be displayed.

    last       is the number of the last line to be displayed.

Description

    The Display in Pages (P) command displays text lines on standard
    output one screenful at a time. Unlike the List Lines (L) command,
    which has no effect on the current line, P causes the last line
    displayed to become the new current line. Thus, although the edit
    buffer is not actually organized into pages, the user can employ
    repeated P commands to sequentially view successive groups of
    lines.

    The first and last line-number parameters define the block of lines
    to be listed; the display starts with the line specified by first.
    (Note that the first line number must be less than or equal to the
    last line number.) Either or both of these numbers can be omitted, but
    a leading comma is required as a placeholder if first is omitted when
    last is present. If omitted, first defaults to the line after the
    current line and last defaults to the line 23 lines after the current
    line. One of the special symbols . (current line) or # (end of buffer)
    or an expression relative to the current line number (+n or -n) can
    be used instead of absolute line numbers.

Examples

    If the current line is 20, to view the next page of lines in the edit
    buffer, type

    *P  <Enter>

    EDLIN displays 23 lines, beginning with line 21, and changes the
    current line to line 43.

    To view successive pages of 23 lines, repeatedly type

    *P  <Enter>

Message

    Entry error
    The command line contained an error such as a first line number that
    was greater than the last line number.



EDLIN: Q
1.0 and later
Quit


Purpose

    Terminates the editing session without saving the revised file.

Syntax

    Q

Description

    The Quit (Q) command causes EDLIN to exit without saving any of the
    changes made to the edited file during the session. The original
    file's name and contents are left unchanged and no new file is
    created.

    To reduce the danger of accidentally losing the contents of the edit
    buffer, EDLIN prompts the user for confirmation before carrying out
    the Q command.

Example

    To quit an editing session, type

    *Q  <Enter>

    EDLIN issues a prompt for confirmation and, if the response from the
    user is Y, exits to MS-DOS without saving any changes made to the file
    during the session.

Message

    Abort edit (Y/N)?
    This prompt is displayed in response to the Q command. Respond with Y
    to exit to MS-DOS without saving changes made to the file; respond
    with N to continue the editing session.



EDLIN: R
1.0 and later
Replace Text


Purpose

    Replaces one string in the edit buffer with another.

Syntax

    [first][,last][?]R[string1][^Zstring2]

    where:

    first      is the number of the first line to be searched.

    last       is the number of the last line to be searched.

    ?          causes the user to be prompted for confirmation before
                each replacement is made.

    string1    is the sequence of characters to be searched for.

    ^Z         is a Control-Z character.

    string2    is the sequence of characters to be substituted for
                string1.

    Note: The character limit for the Replace Text command is 127
    characters, including both strings and all other parameters.

Description

    The Replace Text (R) command substitutes one character string for
    another within a specified range of lines. The last line in which a
    replacement occurs becomes the new current line.

    The first and last line-number parameters define the range of lines
    to be searched for strings to replace. (Note that the first line
    number must be less than or equal to the last line number.) Either or
    both of these numbers can be omitted, but a leading comma is required
    as a placeholder if first is omitted when last is present. If
    omitted, first defaults to the line after the current line and last
    defaults to the last line in the buffer. One of the special symbols .
    (current line) or # (end of buffer) or an expression relative to the
    current line number (+n or -n) can be used instead of absolute line
    numbers.

    If string1 is omitted, EDLIN uses the string1 from the preceding R
    command; if there was no preceding R command, EDLIN displays an error
    message. If string2 is omitted, EDLIN deletes all occurrences of
    string1. string1 must be separated from string2 by a Control-Z (^Z)
    character. If string1 is omitted, a Control-Z character must still be
    included to mark the beginning of string2, but if string2 is omitted
    when string1 is present, the Control-Z character has no effect and is
    therefore optional. (The Control-Z character is entered by pressing
    Ctrl-Z or the F6 key.)

    If the ? option is not included in the command line, EDLIN displays
    each line that contains a match after the replacement is carried out.
    If the ? option is used, EDLIN displays each line containing a match
    as it is found and prompts the user for confirmation before the
    string is replaced.

    The matching operation is case sensitive; EDLIN carries out the
    substitution only on sequences of characters that match string1
    exactly. Wildcards are not permitted.

Examples

    If the current line is line 10, to replace all occurrences of the
    string logical with the string bitwise in lines 11 through 20,
    type

    *11,20Rlogical^Zbitwise  <Enter>

    or

    *,20Rlogical^Zbitwise  <Enter>

    To cause EDLIN to prompt for confirmation before replacing each
    string, type

    *11,20?Rlogical^Zbitwise  <Enter>

    or

    *,20?Rlogical^Zbitwise  <Enter>

    To delete all occurrences of the string 00H in line 20, type

    *20,20R00H^Z  <Enter>

Messages

    Entry error
    The command line contained an error such as a first line number that
    was greater than the last line number.

    Insufficient memory
    The edit buffer has insufficient room for EDLIN to carry out the
    specified Replace Text command.

    Line too long
    The replacement would cause the line being edited to expand beyond 253
    characters.

    Not found
    No occurrence or further occurrences of the string to be replaced were
    found in the specified range of lines.

    O.K.?
    If the ? option is used in the command line, this prompt is displayed
    each time a matching string is found. Respond with Y or press the
    Enter key to replace the string and continue searching; press any
    other key to leave the string unchanged and continue searching.



EDLIN: S
1.0 and later
Search for Text


Purpose

    Searches the edit buffer for a character string.

Syntax

    [first][,last][?]S[string]

    where:

    first      is the number of the first line to be searched.

    last       is the number of the last line to be searched.

    ?          causes the user to be prompted for confirmation before the
                search is terminated.

    string     is the sequence of characters to be searched for (maximum
                126 characters).

Description

    The Search for Text (S) command searches for a character string within
    a specified range of lines. When a match is found, EDLIN displays the
    line containing the match and that line becomes the new current line.
    If no lines containing the specified string are found, EDLIN displays
    the message Not found and the current line number remains
    unchanged.

    The first and last line-number parameters define the block of lines
    to be searched for strings. (Note that the first line number must be
    less than or equal to the last line number.) Either or both of these
    numbers can be omitted, but a leading comma is required as a
    placeholder if first is omitted when last is present. If omitted,
    first defaults to the line after the current line and last defaults
    to the last line in the buffer. One of the special symbols . (current
    line) or # (end of buffer) or an expression relative to the current
    line number (+n or -n) can be used instead of absolute line
    numbers.

    If string is omitted, EDLIN uses the string from the last S command
    or string1 from the last Replace Text (R) command instead.

    If the ? option is not included in the command line, EDLIN displays
    the first line that contains a match for string, makes this the new
    current line, and terminates the search. If the ? option is used,
    EDLIN displays each line containing a match for string as it is
    found, followed by an O.K.? prompt. If the user responds with Y or
    presses the Enter key, EDLIN terminates the search; if the user
    presses any other key, the search continues.

    The matching operation is case sensitive; EDLIN reports only sequences
    of characters that match string exactly. Wildcards are not
    permitted.

Examples

    If the current line is line 10, to find the first occurrence of the
    string xyz in lines 11 through 20, type

    *11,20Sxyz  <Enter>

    or

    *,20Sxyz  <Enter>

    To find a particular occurrence of proc in the edit buffer,
    type

    *1,#?Sproc  <Enter>

    EDLIN displays the first line containing proc and prompts with

    O.K.?

    Type Y or press Enter to stop the search; press any other key to
    continue the search.

Messages

    Entry error
    The command line contained an error such as a first line number that
    was greater than the last line number.

    Not found
    No match or no further matches for string were found in the specified
    range of lines.

    O.K.?
    If the ? option is used in the command line, this prompt is displayed
    each time a matching string is found. Respond with Y or press the
    Enter key to stop searching; press any other key to continue
    searching.



EDLIN: T
2.0 and later
Transfer Another File


Purpose

    Merges the contents of another file with the file in the edit
    buffer.

Syntax

    [destination]T[drive:][path]filename

    where:

    destination     is the number of the line before which the text from
                    filename is to be inserted.

    path            is the location of the file to be merged (versions
                    3.0 and later).

    filename        is the name of the disk file from which text is to be
                    merged.

Description

    The Transfer Another File (T) command merges the contents of a text
    file with the current contents of the edit buffer and then renumbers
    the contents of the edit buffer. The first line of the merged text
    becomes the current line.

    The destination parameter specifies the line before which the
    transferred lines are to be inserted. If omitted, destination
    defaults to the current line. One of the special symbols . (current
    line) or # (end of buffer) or an expression relative to the current
    line number (+n or -n) can be used instead of an absolute line
    number.

    The filename parameter specifies the file from which text is to be
    merged and can include a drive and, in versions 3.0 and later, a path.
    If a drive or path is not specified, the file to be merged into the
    edit buffer with the T command must be in the current directory of
    the current drive.

Example

    If the current line is line 10, to merge the contents of the file
    named KEYDEFS.C before line 10 of the edit buffer, type

    *10Tkeydefs.c  <Enter>

    or

    *Tkeydefs.c  <Enter>

Messages

    File not found
    The specified filename does not exist in the current or specified
    location.

    Not enough room to merge the entire file
    The space available in the edit buffer is not sufficient to hold the
    entire file named in the T command. Use the Write Lines to Disk (W)
    command to partially empty the edit buffer.



EDLIN: W
1.0 and later
Write Lines to Disk


Purpose

    Writes lines from the edit buffer to the disk.

Syntax

    [n]W

    where:

    n   is the number of lines to be written to the file.

Description

    If the file being edited is too large to fit into the edit buffer,
    EDLIN ordinarily reads only enough text to fill 75 percent of the
    buffer when it opens the file, reserving 25 percent of the buffer for
    changes and additions to the text. The user must then employ the Write
    Lines to Disk (W) command and the Append Lines from Disk (A) command
    to transfer successive blocks of text from the disk until the entire
    file has passed through the edit buffer. The W command causes EDLIN to
    write lines to the disk file and delete them from the buffer; then the
    A command can read new lines from the input file, placing them after
    the end of the text remaining in the buffer.

    The n parameter specifies the number of lines to be written to the
    output file; if n is omitted or is larger than the number of lines in
    the edit buffer, EDLIN writes only enough lines to leave the edit
    buffer about 25 percent full. EDLIN then renumbers the lines remaining
    in the edit buffer so that the first remaining line becomes line
    number one.

Examples

    To write 200 lines from the edit buffer to disk (effectively deleting
    those lines from the buffer), type

    *200W  <Enter>

    To write lines from the edit buffer to the disk until the edit buffer
    is only 25 percent full, type

    *W  <Enter>



EXIT
2.0 and later
Terminate Command Processor
Internal


Purpose

    Terminates a secondary copy of the command processor.

Syntax

    EXIT

Description

    Many communications programs, word processors, database managers, and
    other application programs load and execute a secondary copy of the
    system's command processor (COMMAND.COM) to let the user carry out MS-
    DOS commands without losing the context of the work in progress.
    Secondary copies of the command processor are also commonly used to
    execute one batch file under the control of another. (For more
    information about secondary copies of the command processor, see USER
    COMMANDS: COMMAND.)

    The EXIT command cancels a secondary command processor. The
    terminating processor displays no message and control returns directly
    to the parent program or command processor.

    EXIT has no effect on the currently executing command processor if it
    was loaded with the /P (permanent) switch or if it is the original
    command processor (the one loaded during system initialization, when
    the computer was turned on or restarted).

    The EXIT command also allows the user to choose Close from the system
    menu if a COMMAND window is open under Microsoft Windows.

Example

    To terminate the currently executing command processor, type

    C>EXIT  <Enter>

Message

    Bad command or filename
    The EXIT command did not exist in versions earlier than 2.0, so MS-DOS
    attempted to execute a nonexistent program named EXIT instead.



FC
2.0 and later
Compare Files
External


Purpose

    Compares two files and lists the differences on standard output.

Syntax

    FC [/A] [/C] [/L] [/LBn] [/N] [/nnnn] [/T] [/W] [drive:]pathname1
    [drive:]pathname2

    or

    FC [/B] [drive:]pathname1 [drive:]pathname2

    where:

    pathname1        is the name and location of the first file to be
                    compared, optionally preceded by a drive; wildcard
                    characters are not permitted.

    pathname2        is the name and location of the second file to be
                    compared, optionally preceded by a drive; wildcard
                    characters are not permitted.

    /A               causes FC to abbreviate the output when comparing
                    ASCII text files (version 3.2).

    /B               causes a byte-by-byte (binary) comparison; may not be
                    used with any other switch (default when file
                    extension is .EXE, .COM, .SYS, .OBJ, .LIB, or .BIN).

    /C               causes FC to ignore case when comparing alphabetic
                    characters.

    /L               causes a line-by-line comparison of two ASCII text
                    files (default when file extension is not .EXE, .COM,
                    .SYS, .OBJ, .LIB, or .BIN) (version 3.2).

    /LBn             sets the size of the internal line buffer to n lines
                    (default = 100) (version 3.2).

    /N               includes line numbers on the output of an ASCII file
                    comparison (version 3.2).

    /nnnn            is the number of lines that must match to resyn-
                    chronize during an ASCII file comparison (default=2;
                    in versions 2.0 through 3.1, range = 1-9, default=3).

    /T               causes FC to compare tabs in text files literally
                    (default = tabs expanded to spaces, with stops at
                    each eighth character position) (version 3.2).

    /W               causes FC to ignore spaces, tabs, and blank lines in
                    text files.

Description

    The FC utility compares two text files containing lines of ASCII text
    delimited by new-line characters or two binary files containing data
    of any type (such as executable programs). The differences between the
    two files are listed on standard output, which defaults to the video
    display but can be redirected to another character device or a file or
    can be piped to another program.

    The FC program first examines the extensions of the two files being
    compared and, in most cases, selects the appropriate type of
    comparison automatically. However, the /B switch can be used to force
    a binary, or byte-by-byte, comparison of the two files named; the /L
    switch can be used to force a line-by-line comparison. When the /B
    switch is present, use of the /L, /N, and /nnnn switches causes an
    error message to be displayed; any other switches in the command line
    are ignored.

    When comparing ASCII text files, FC loads a buffer with sequential
    sets of lines from each file and compares the two sets. The size of
    this buffer defaults to 100 lines but can be modified by including the
    /LBn switch in the command line. If differences are found, the name
    of the first file, the last matched line, and any mismatched lines
    from that file are displayed, followed by the first rematched line;
    then the name of the second file, the last matched line, and any
    mismatched lines are displayed, followed by the first rematched line
    from that file. The number of consecutive matching lines that must be
    detected in order for FC to consider the files resynchronized is
    controlled with the /nnnn switch; the default is 2.

    If no lines match, if no lines match after the first mismatch, or if
    the number of mismatched lines exceeds the size of the line buffer, FC
    displays the message Resynch failed. Files are too different (or
    ***Files are different*** in versions 2.x and 3.0) and terminates.

    The /C, /T, and /W switches modify the way in which two text files are
    compared. The /C switch causes FC to ignore case when comparing
    alphabetic characters. The /T switch causes FC to compare tab
    characters (ASCII code 09H) literally, rather than expand them to
    spaces before comparing corresponding lines. Finally, the /W, or
    whitespace, switch causes FC to ignore spaces, tabs, and blank lines
    during the comparison.

    The /A and /N switches control the format of the listing of
    differences between the two text files. The /A switch causes FC to
    compress the listing of each mismatched set of lines to the first and
    last lines of each set, separated by ellipsis points. The /N switch
    causes FC to include the line numbers of the mismatched lines in the
    display.

    During a binary comparison of two files, FC's buffer is reloaded as
    many times as is necessary to compare the complete files. Unlike the
    procedure with text-file comparisons, no attempt is made to
    resynchronize the data if a mismatch is detected and, regardless of
    the number of mismatches, the comparison process is not terminated.
    Any differences are displayed with the offset from the start of the
    file and the actual data from each file. If one file is shorter than
    the other, FC also displays a warning message at the end of the
    comparison.

    The FC command is present only in MS-DOS. PC-DOS versions 1.0 and
    later provide a similar function in the COMP command.

Examples

    Assume that FILE1.TXT and FILE2.TXT are in the current directory on
    the disk in the current drive and that they contain the following
    lines:

    FILE1.TXT               FILE2.TXT

    First line.             First line.
    Second line.            Second line.
    Third line.             Third line.
    Fourth line.            Fourth line.
    Fifth line.             Sixth line.
    Sixth line.             Fifth line.
    Seventh line.           Seventh line.
    Eighth line.            Eighth line.
    Ninth line.             Ninth line.
    Tenth line.             Tenth line.

    To compare these files line by line, type

    C>FC FILE1.TXT FILE2.TXT  <Enter>

    This will result in the following display:

    ***** file1.txt
    Fourth line.
    Fifth line.
    Sixth line.
    Seventh line.
    ***** file2.txt
    Fourth line.
    Sixth line.
    Fifth line.
    Seventh line.
    *****

    To compare the same two files and produce an abbreviated listing of
    differences that includes line numbers, type

    C>FC /A /N FILE1.TXT FILE2.TXT  <Enter>

    This will result in the following display:

    ***** file1.txt
        4:  Fourth line.
    ...
        7:  Seventh line.
    ***** file2.txt
        4:  Fourth line.
    ...
        7:  Seventh line.
    *****

    Assume that two binary files, FILE1.BIN and FILE2.BIN, are the same
    length and contain only the following three differences:

    Offset      FILE1.BIN   FILE2.BIN

    19H         04H         03H
    33H         4AH         4BH
    42H         52H         51H

    To compare these two binary files, type

    C>FC /B FILE1.BIN FILE2.BIN  <Enter>

    This will result in the following display:

    00000019: 04 03
    00000033: 4A 4B
    00000042: 52 51

    Note: The use of the /B switch in this example is optional; binary
    comparison is the default when .BIN files are compared.

Messages

    filename longer than filename
    After all the corresponding data in the two files was compared, data
    remained in one of the files.

    cannot open filename - No such file or directory
    The specified file cannot be found or does not exist.

    DOS 2.0 or later required
    FC does not work with versions of MS-DOS earlier than 2.0.

    Incompatible switches
    The /B switch was used in combination with one or more of the other
    switches.

    Incorrect DOS version
    The version of FC is not compatible with the version of MS-DOS that is
    running.

    no differences encountered
    The two files being compared are identical.

    out of memory
    The available memory in the transient program area is insufficient to
    compare the two files.

    Resynch failed. Files are too different
    The number of mismatched lines in an ASCII file comparison exceeded
    the number of lines that can be loaded into FC's comparison buffer
    (which by default is 100 lines). Rerun the comparison using the /LBn
    switch to allocate a larger buffer.

    usage: fc [/a] [/b] [/c] [/l] [/lbNN] [/w] [/t] [/n] [/NNNN] file1
        file2
    The command line included an invalid switch or FC was entered without
    any switches or other parameters.



FDISK
3.2
Configure Fixed Disk
External   No Net


Purpose

    Configures an MS-DOS partition on a fixed disk. This command is
    included with PC-DOS beginning with version 2.0.

Syntax

    FDISK

Description

    A fixed disk can be divided into areas of contiguous tracks, or
    partitions, that are used by different operating systems. A master
    control record (partition table) on the disk specifies the ID number
    and the starting and ending disk tracks for each partition. Each fixed
    disk can have as many as four partitions, but only one partition can
    be active (bootable) at any given time.

    The FDISK utility is a menu-driven program that adds or deletes an MS-
    DOS partition on a fixed disk, selects one partition as active, and
    displays the size and status of all partitions. With most
    implementations of MS-DOS, each fixed disk can contain only one MS-
    DOS partition.

    After an MS-DOS partition is created, the FORMAT command must be used
    to initialize the partition's directory structure. To make it possible
    to start the computer from the MS-DOS partition on the fixed-disk
    drive, the /S switch must be used with FORMAT to transfer the
    operating-system files and the MS-DOS partition must be the active
    partition.

    Warning: If the MS-DOS partition is deleted, any files stored in the
    partition are irretrievably lost.

Examples

    To display the current partitioning of the fixed disk, type

    C>FDISK  <Enter>

    The FDISK utility then displays the following menu:

    Fixed Disk Setup Program Version 0.02
    (C) Copyright Microsoft, 1985.

    FDISK Options

    Choose one of the following:

        1.  Create DOS Partition
        2.  Change Active Partition

        3.  Delete DOS Partition
        4.  Display Partition Data

    Enter choice:[1]

    Press ESC to return to DOS

    Note: A fifth option, Select Next Fixed Drive, will appear if more
    than one fixed disk is installed in the system.

    Choose option 4 (Display Partition Data). FDISK then displays the
    partition data for the disk in the following form:

    Display Partition Information

    Partition Status  Type   Start  End  Size
        1       A      DOS       0  613   614
    Total disk space is 614 cylinders.

    Press ESC to return to FDISK Options

    Assume that the low-level (hardware) formatting for fixed-disk drive C
    has just been completed by using the drive manufacturer's setup
    utility. To establish a bootable MS-DOS partition on the disk,
    type

    A>FDISK  <Enter>

    When the menu is displayed, press Enter to choose option 1 (Create DOS
    Partition). FDISK responds with the following message:

    Create DOS Partition

    Do you wish to use the entire fixed
    disk for DOS (Y/N)....................?[Y]

    Press ESC to return to FDISK Options

    To partition the entire fixed disk for MS-DOS, press Enter to select Y
    (the default). When the FDISK main menu is again displayed, choose
    option 4 (Display Partition Data) to verify that the MS-DOS partition
    has in fact been established on the fixed disk.

Messages

    n is not a choice. Please enter Y or N.
    The response to an FDISK prompt requiring a yes or no answer was not Y
    or N.

    n is not a choice. Please enter a choice
    The response to an FDISK prompt requiring a number was not in the
    proper range or was not a number.

    DOS partition created
    A new MS-DOS partition has been established on the fixed disk. Use the
    FORMAT utility to create a directory structure in that
    partition.

    DOS partition deleted
    The previously existing MS-DOS partition on the fixed disk has been
    deleted. Any files contained in the partition are irretrievably
    lost.

    DOS 2.0 or later required
    FDISK does not work with versions of PC-DOS earlier than 2.0.

    Do you wish to use the entire fixed
    disk for DOS (Y/N)..............?[Y]
    Option 1, Create DOS Partition, has been chosen from the main menu.
    Respond with Y or press Enter to use all available cylinders for a
    single DOS partition; respond with N to specify that only part of the
    fixed disk should be used.

    Enter starting cylinder number..:[n]
    Option 1, Create DOS Partition, has been chosen from the main menu and
    the user has responded N to the Do you wish to use the entire fixed
    disk for DOS? prompt. This message then prompts for the starting
    cylinder number of the DOS partition being created.

    Enter the number of the partition you
    want to make active................:[n]
    Option 2, Change Active Partition, has been chosen from
    the main menu and this message prompts the user to enter the number of
    the partition that will become the active partition.

    Error loading operating system
    An error occurred while attempting to start the system from the fixed
    disk. Attempt to restart the system. If that fails, start the system
    from a floppy disk and use the SYS command to copy a new set of the
    operating-system files to the fixed disk.

    Error reading fixed disk
    An unrecoverable hardware error was encountered while FDISK was
    reading data from the fixed disk. The disk may require a low-level
    (hardware) formatting operation before FDISK can be used; this is
    usually performed with a special utility program provided by the drive
    manufacturer.

    Error writing fixed disk
    An unrecoverable hardware error was encountered while FDISK was
    writing the new partition control record to the fixed disk. Test the
    fixed disk with hardware diagnostics before further use.

    Fixed disk already has a DOS partition.
    The specified fixed disk already contains an MS-DOS partition. Be sure
    that the correct fixed disk has been selected before proceeding.

    Incorrect DOS version
    The version of FDISK is not compatible with the version of MS-DOS that
    is running.

    Invalid partition table
    The fixed disk's partition table is invalid and the operating system
    could not be loaded from the fixed disk during system initialization.
    Restart the computer using a floppy disk and rerun FDISK to determine
    and correct the problem.

    Missing operating system
    The DOS partition is the active partition, but it does not contain the
    operating system. (This message occurs only during system startup.)
    Use the SYS command to install the operating system.

    No DOS partition to delete.
    The fixed disk does not contain an MS-DOS partition.

    No fixed disks present
    FDISK cannot detect a fixed disk in the system. This may reflect a
    hardware problem with the fixed disk or its controller.

    No partitions defined.
    This informational message is displayed after the user has chosen
    option 4, Display Partition Data, to indicate that no partitions
    are currently defined.

    No partitions to make active
    The fixed disk has not been previously partitioned using FDISK;
    therefore, an active partition cannot be selected.

    No space for a nnn cylinder partition.
    The fixed disk does not have enough free cylinders to create the
    desired partition.

    No space to create a DOS partition.
    The fixed disk does not have enough free cylinders to create an MS-DOS
    partition.

    Partition n is already active
    The selected partition is already active (bootable); therefore, no
    action was taken.

    Partition n made active
    This informational message indicates that the selected partition has
    been made the active partition.

    System will now restart
    Insert DOS diskette in drive A:
    Press any key when ready...
    The DOS partition has successfully been created. Strike any key and
    the system will restart from the disk in drive A.

    The current active partition is n.
    This informational message indicates which partition is currently
    bootable.

    The table partition can't be made active.
    The master partition record cannot be made bootable.

    Total disk space is nnn cylinders.
    This informational message indicates the total number of cylinders on
    the fixed disk.

    Total disk space is nnn cylinders.
    Maximum available space is nnn
    cylinders at n.
    The user has responded N to the Do you wish to use
    the entire fixed disk for DOS? prompt and this informational
    message indicates how much space is available for the DOS partition.

    Warning: Data in the DOS partition
    will be lost. Do you wish to
    continue........................?[N]
    If the MS-DOS partition is deleted, all files within the partition are
    lost. Be sure that the files are backed up to another disk before
    proceeding. Respond with N to return to the FDISK main menu; respond
    with Y to delete the DOS partition and lose any files within it.



FIND
2.0 and later
Find Character String
External


Purpose

    Searches the character stream from a file or from standard input for a
    string and displays any lines that contain the string on standard
    output.

Syntax

    FIND [/C] [/N] [/V] "string" [[drive:][path]filename]
    [[drive:][path]filename ...]

    where:

    string     is the character string to be searched for, always
                enclosed in quotation marks; case is significant.

    filename   is the name of the file to be searched, optionally
                preceded by a drive and/or path; wildcard characters are
                not permitted.

    /C         displays only the count of the lines containing string.

    /N         includes the relative line number with each line.

    /V         displays only those lines that do not contain string.

Description

    The FIND command searches for all occurrences of a specified string in
    one or more files (or from standard input). Normally, FIND copies each
    line in which the string is found to standard output, which defaults
    to the video display but can be redirected to a file or another
    character device or can be piped to another program.

    The string to be searched for must be enclosed in quotation marks. If
    the search string itself contains sets of quotation marks, each of
    those sets of quotation marks must be surrounded by an additional set
    of quotation marks. FIND's string search is case sensitive.

    The search string can be followed by the names of one or more source
    files; these filenames cannot include wildcards. If no filename is
    supplied, FIND reads lines from standard input; unless input has been
    redirected from a file or from the output of another program, this
    means that FIND reads input from the keyboard. (Keyboard input is
    terminated by pressing Ctrl-Z or F6 followed by Enter.)

    The /C switch counts the total number of lines in which the string
    appears and sends the count, rather than the lines themselves, to
    standard output. If the /C switch is used with /V, only the total
    count of lines that do not contain the specified search string is
    displayed. If both /C and /N are included in the same FIND command,
    the /N is ignored.

    The /N switch includes a relative line number with each line sent to
    standard output. This is especially helpful when the output of FIND is
    to be used as a guide to editing the files.

    The /V switch reverses the action of FIND so that it copies to
    standard output all lines that do not include the specified
    string.

Examples

    To find and display all lines in the files BREAK.ASM, TALK.ASM, and
    SHELL.ASM that contain the string es:, type

    C>FIND "es:" BREAK.ASM TALK.ASM SHELL.ASM  <Enter>

    To find and display all lines in the file STORY.TXT that contain the
    string he said "no", type

    C>FIND "he said ""no""" STORY.TXT  <Enter>

    To search the file \SOURCE\MENUMGR.ASM on the current drive and
    display all lines that do not contain the string Error, type

    C>FIND /V "Error" \SOURCE\MENUMGR.ASM  <Enter>

    To obtain a listing on the printer of the lines in the file SHELL.ASM
    in the current directory of the current drive that contain the string
    proc, including line numbers, type

    C>FIND /N "proc" SHELL.ASM > PRN  <Enter>

    To search for all lines that contain two strings, pipe the output of
    one FIND command to be the input of another. For example, to find only
    those lines in the file MENUMGR.ASM in the current directory of the
    current drive that contain both the strings MOV and AX, type

    C>FIND "MOV" MENUMGR.ASM | FIND "AX"  <Enter>

Messages

    ----------filename
    This informational message gives the name of the file that is
    currently being searched.

    FIND: Access denied
    The specified file is locked or being accessed by another
    application.

    FIND: File not found filename
    The specified file does not exist or the path or drive is not
    correct.

    FIND: Invalid number of parameters
    The command line did not include a search string.

    FIND: Invalid Parameter option
    The command line included an invalid switch.

    FIND: Read error in filename
    A disk error occurred during processing of the specified file.

    FIND: Syntax error
    The command line included an invalid search string. The string must be
    enclosed in quotation marks.

    Incorrect DOS version
    The version of FIND is not compatible with the version of MS-DOS that
    is running.



FORMAT
1.0 and later
Initialize Disk
External   No Net


Purpose

    Prepares a disk for use by initializing the directory and file
    allocation table (FAT).

Syntax

    FORMAT [drive:] [/S]                                (versions 1.x)

    or

    FORMAT [drive:] [/O] [/V] [/S]                      (versions 2.0-3.1)

    or

    FORMAT drive: [/1] [/4] [/8] [/N:n] [/T:n] [/V] [/S](version 3.2)

    or

    FORMAT drive: [/1] [/B] [/N:n] [/T:n]               (version 3.2)

    where:

    drive    is the location of the disk to be formatted.

    /1       formats a single-sided disk in a double-sided disk drive.

    /4       formats a standard double-sided, double-density disk (360 KB)
            on a quad-density disk drive.

    /8       formats a disk with 8 sectors per track.

    /B       formats a disk with 8 sectors per track and preallocates
            space for the hidden operating-system files.

    /N:n     formats a disk with n sectors per track.

    /O       formats a disk that is compatible with PC-DOS versions 1.x.

    /S       creates a system (bootable) disk; for most implementations of
            FORMAT, this must be the last switch in the command line.

    /T:n     formats a disk with n tracks.

    /V       allows a volume label to be assigned to the disk after
            formatting.

    Note: Each OEM determines which switches will be supported by the
    FORMAT utility included with the versions of MS-DOS sold with its
    computers.

Description

    The FORMAT command effectively erases any existing data on a disk and
    creates a new root directory and file allocation table. Each sector of
    the disk is checked for defects and unusable sectors are marked so
    that they will not be assigned to files.

    If the drive parameter is not supplied, the current or default drive
    is formatted. (A drive letter must be specified with version 3.2.)
    With versions 3.0 and later, the FORMAT program displays a warning if
    the drive to be formatted is a fixed disk and asks for confirmation
    before continuing.

    When the formatting operation is complete, FORMAT displays the total
    amount of disk space, the number of bytes lost to defective sectors,
    the space reserved for or occupied by the hidden operating-system
    files (if the /B or /S switch was used), and the remaining free disk
    space. If a floppy disk was formatted, FORMAT then prompts the user to
    select between formatting another disk and returning to MS-DOS.

    Normally, the type of disk drive determines the format that is given
    to a disk. For example, if a disk is formatted in a standard double-
    sided, double-density drive, the format defaults to double-sided, 40
    tracks per side, 9 sectors per track. The version-specific default
    formats are 9 or 15 sectors per track with versions 3.0 and later,
    depending on the drive type; 9 sectors per track with versions 2.x;
    and 8 sectors per track with versions 1.x. The /1, /4, /8, /N:n, and
    /T:n switches can be used to override the default format in some
    cases. (Not all combinations of /N:n and /T:n are supported on all
    hardware.)

    Note: A disk formatted with the /4 switch might not be reliably read
    on a single- or double-sided double-density drive.

    The /S switch creates a system (bootable) disk that contains a copy of
    the operating system. After the format operation is complete, the two
    hidden files IO.SYS and MSDOS.SYS (or IBMBIO.COM and IBMDOS.COM in PC-
    DOS) and the nonhidden file COMMAND.COM are copied to the newly
    formatted disk. Most implementations of FORMAT require that the /S
    switch, if used, be the last switch in the command line.

    The /V switch allows a volume label to be assigned to the new disk.
    After formatting is complete, FORMAT prompts the user for a volume
    name, which can be as many as 11 characters. (The characters * ? / | .
    , ; : + = < > [] and tab are not permitted in a volume label.) Volume
    labels are displayed by the DIR, CHKDSK, TREE, and VOL commands and,
    with MS-DOS versions 3.1 and later and PC-DOS versions 3.0 and later,
    can be modified with the LABEL command after the disk has been
    formatted.

    The /O switch causes FORMAT to write an 0E5H byte at the start of each
    directory entry so that the resulting disk is compatible with MS-DOS
    and PC-DOS versions 1.x.

    The /B switch formats a disk for 8 sectors per track and reserves room
    on the disk for the operating-system files. The operating system can
    then be transferred to the disk with the SYS command to make the disk
    bootable. The /B switch cannot be used in the same FORMAT command line
    as the /V or /S switch.

    Warning: Disks in drives affected by an ASSIGN, JOIN, or SUBST
    command should not be formatted. Disks cannot be formatted over a
    network.

Return Codes

    0     The FORMAT operation was successful.
    3     The program was terminated by entry of a Ctrl-C or Ctrl-Break.
    4     The program was terminated because of a fatal system error (any
        error other than 0, 3, or 5).
    5     The program was terminated by an N response to the fixed-disk
        prompt Proceed with FORMAT (Y/N)?

    Note: Return codes are available with MS-DOS version 3.2.

Examples

    To format the disk in drive B, type

    C>FORMAT B:  <Enter>

    In response, FORMAT displays the following message:

    Insert new diskette for drive B:
    and strike ENTER when ready

    With versions earlier than 3.2, FORMAT then displays the message

    Formatting ...

    after the Enter key is pressed, to show that the formatting operation
    is in progress. With version 3.2, FORMAT displays the message

    Head: n Cylinder: nn

    instead, to show the progress of the formatting operation. With all
    versions, FORMAT displays the following messages if the formatting
    operation is successful:

    Format complete
        362496 bytes total disk space
        362496 bytes available on disk

    Format another (Y/N)?

    The byte values may vary depending on the drive type or the switches
    used in the command line. If bad sectors were encountered during the
    format operation, FORMAT also displays the number of bytes in bad
    sectors.

    Note: The Format complete message overwrites the head/cylinder
    status line but is appended to the Formatting ... status line.

    To format and assign a volume label to the disk in drive B, type

    C>FORMAT B: /V  <Enter>

    After the usual formatting messages, FORMAT prompts as follows:

    Volume label (11 characters, ENTER for none) ?

    The user can then enter a volume name of as many as 11 characters
    (except * ? / | . , ; : + = < > [] or tab), followed by a press of the
    Enter key.

    To format the disk in drive B and make it a system (bootable) disk,
    type

    C>FORMAT B: /S  <Enter>

    FORMAT initializes the disk in the usual manner and then copies the
    two files containing the operating system (IO.SYS and MSDOS.SYS or
    IBMBIO.COM and IBMDOS.COM) and the file COMMAND.COM onto the disk.
    When the formatting operation is completed on a 360 KB floppy disk,
    the following messages appear:

    Format complete
    System transferred

        362496 bytes total disk space
        62464 bytes used by system
        300032 bytes available on disk

    Format another (Y/N)?

    The number of bytes used by the system will vary with the version of
    MS-DOS in use.

Messages

    n bytes total disk space
    n bytes used by system
    n bytes in bad sectors
    n bytes available on disk

    When formatting is complete, FORMAT displays this message with
    information about space available on the disk. The bytes used by
    system line will not appear if the /S switch was not
    specified; the bytes in bad sectors line will not appear
    if no bad sectors were found.

    Attempted write-protect violation
    The disk to be formatted is write protected. Remove the write-protect
    tab and respond with a Y to the Format another (Y/N)? prompt.

    Cannot find System Files
    The /S switch was used and FORMAT was unable to find the necessary
    system files in the default drive or in drive A.

    Cannot FORMAT a Network drive
    An attempt was made to format a disk in a drive that has been assigned
    to a network.

    Cannot format an ASSIGNed or SUBSTed drive.
    An attempt was made to format a disk in a drive affected by an ASSIGN
    or SUBST command.

    Disk unsuitable for system disk
    Defective sectors were detected on the tracks where the operating-
    system files would normally reside on a bootable disk. Such a disk
    should be used only for data files, if at all.

    Drive letter must be specified
    A drive letter must be specified when using version 3.2.

    Drive not ready
    The floppy-disk drive is empty or the drive door is not closed.

    Enter current Volume Label for drive X:
    The specified drive is a fixed disk, so FORMAT prompts the user to
    enter the current volume label for verification.

    Error in IOCTL call
    An internal system error occurred when a pre-version-3.2 block-device
    driver was used with version 3.2 of FORMAT.

    Error reading partition table
    FORMAT was unable to read the fixed disk's partition table. Use FDISK
    on the fixed disk and then try the FORMAT command again.

    Error writing directory
    FORMAT was unable to create a directory on the disk it is attempting
    to format. The disk is defective.

    Error writing FAT
    FORMAT was unable to create the FAT on the disk it is attempting to
    format. The disk is defective.

    Error writing partition table
    FORMAT was unable to write the fixed disk's partition table. Use FDISK
    on the fixed disk and then try the FORMAT command again.

    Format another (Y/N)?
    At the end of a successful formatting operation or after a nonfatal
    error, this prompt offers the user the opportunity to format another
    disk using the same switches specified in the original FORMAT command.
    Respond with Y to format another disk; respond with N to return to
    MS-DOS.

    Format complete
    The formatting operation has ended. This message contains a number of
    space characters after it and is printed over the top of the
    head/cylinder status message, effectively erasing it.

    Format failure
    The formatting operation was not successful. (This message is usually
    preceded by another message telling the user why the format failed.)
    This message contains a number of space characters after it and is
    printed over the top of the head/cylinder status message, effectively
    erasing it.

    Format not supported on drive X:
    Device parameters that the computer cannot support were specified in
    the FORMAT command line.

    Formatting...
    This informational message indicates that the FORMAT operation is in
    progress (versions 1.0 through 3.1).

    Head: n Cylinder: nn
    This informational message indicates the progress of the FORMAT
    command during the formatting operation (version 3.2).

    Incorrect DOS version
    The version of FORMAT is not compatible with the version of MS-DOS
    that is running.

    Insert DOS disk in drive X:
    and strike ENTER when ready
    The /S switch was specified in the FORMAT command line and the disk
    containing the FORMAT command does not also contain the hidden system
    files.

    Insert new diskette for drive X:
    and strike ENTER when ready
    This prompt allows the user to change disks before the FORMAT
    operation continues.

    Insufficient memory for system transfer
    The command line included the /S switch, but available RAM is
    insufficient to hold the system files during the FORMAT
    operation.

    Invalid characters in volume label
    Certain characters (* ? / | . , ; : + = < > [] and tab) are not
    allowed in a volume name.

    Invalid device parameters from device driver
    The DEVICE or DRIVPARM device-driver parameters in the CONFIG.SYS file
    were incorrectly set or the fixed disk specified in the command line
    was formatted using MS-DOS versions 2.x without first running FDISK.
    FORMAT displays this message when the number of hidden sectors is not
    evenly divisible by the number of sectors per track (meaning that the
    partition does not start on a track boundary).

    Invalid drive specification
    The drive specified after the FORMAT command is not a valid
    drive.

    Invalid media or Track 0 bad - disk unusable
    One of the switches supplied in the command line is not valid for the
    drive containing the disk to be formatted (for example, the /8 switch
    for a quad-density floppy disk) or track 0 of the disk being formatted
    is unusable to the point that FORMAT is unable to create a directory
    or file allocation table (FAT).

    Invalid parameter
    One of the switches supplied in the command line is not valid or is
    not supported by the version of FORMAT being used.

    Invalid volume ID
    The volume label entered in response to the Enter current Volume Label
    for drive X: prompt was not the same as the current volume label. Use
    the VOL command to determine the current volume label.

    Non-System disk or disk error
    Replace and strike any key when ready
    The command line contained a /S or /B switch, but the source disk does
    not contain the operating-system files.

    Not a block device
    The drive containing the disk to be formatted is not recognized by MS-
    DOS as a valid block device.

    Parameters not compatible
    Switches that cannot be used together were specified in the command
    line.

    Parameters not compatible with fixed disk
    One of the switches specified in the command line is not compatible
    with the specified drive.

    Parameters not supported
    One of the parameters specified in the command line is not supported
    by the version of FORMAT being used.

    Parameters not Supported by Drive
    The device driver for the specified drive does not support generic
    IOCTL function requests.

    Re-insert diskette for drive X:
    This message prompts the user to reinsert the disk being formatted
    into the specified drive.

    System transferred
    The system files IO.SYS and MSDOS.SYS (or IBMBIO.COM and IBMDOS.COM in
    PC-DOS) and the file COMMAND.COM have been successfully transferred to
    the newly formatted disk.

    Too many open files
    FORMAT was unable to write the volume label because insufficient
    system file handles were available. Increase the value of FILES in the
    CONFIG.SYS file.

    Volume label (11 characters, ENTER for none)?
    After formatting a disk with the /V option, FORMAT offers the user the
    opportunity to enter a volume label for the disk.

    Unable to write BOOT
    The first track of the disk or MS-DOS partition is bad and cannot be
    made bootable.

    WARNING, ALL DATA ON NON-REMOVABLE DISK
    DRIVE X: WILL BE LOST!
    Proceed with Format (Y/N)?
    If a fixed disk is specified as the disk to be formatted, FORMAT
    warns the user and gives the opportunity to cancel the FORMAT command
    (versions 3.0 and later).



GRAFTABL
3.0 and later
Load Graphics Character Set
External


Purpose

    Installs a RAM-resident table of bitmaps that defines the screen
    appearance of character codes 128 through 255 in graphics mode.

Syntax

    GRAFTABL

Description

    On IBM PCs and compatibles in graphics display modes, the video-
    display BIOS routines (Interrupt 10H) display characters by writing
    bitmapped matrices of dots to the display. The dot pattern of each
    screen character's matrix is defined by an entry in a table of
    bitmaps. The table of bitmaps for the regular ASCII characters, coded
    0 through 7FH (0-127), is permanently located in ROM and is always
    available for use by the system's video driver. The GRAFTABL utility
    contains a similar table of bitmaps for the upper (extended)
    characters, coded 80H through 0FFH (128-255). The GRAFTABL command
    loads this table into RAM and places the address of the table in the
    vector for Interrupt 1FH.

    The GRAFTABL command is not needed for the IBM PCjr or for an enhanced
    graphics adapter; their ROM BIOS already contains tables of bitmaps
    for the extended character set.

    GRAFTABL is a terminate-and-stay-resident (TSR) program; therefore,
    its installation reduces the amount of RAM available for use by
    application programs.

    The GRAFTABL command can be executed only once after the computer has
    been turned on or restarted. An attempt to execute it again will
    result in an informational message stating that the graphics
    characters are already loaded.

Example

    To load the table of bitmaps for characters 80H through 0FFH (128-255)
    for use in graphics mode, type

    C>GRAFTABL  <Enter>

Messages

    DOS 2.0 or later required
    GRAFTABL does not work with versions of MS-DOS earlier than 2.0.

    Graphics characters already loaded
    The GRAFTABL command has already been executed since the system was
    turned on or restarted.

    Graphics characters loaded
    The table of bitmaps has been successfully loaded into RAM and the
    interrupt vector that points to the table has been initialized.

    Incorrect DOS version
    The version of GRAFTABL is not compatible with the version of MS-DOS
    that is running.



GRAPHICS
3.2
Load Graphics Screen-Dump Program
External


Purpose

    Installs a resident program that can dump screen contents to the
    printer in graphics mode. This command is also available with PC-DOS
    versions 2.0 and later.

Syntax

    GRAPHICS                                                  (PC-DOS 2.x)

    or

    GRAPHICS [printer] [/B] [/R]                    (PC-DOS 3.0 and above)

    or

    GRAPHICS [printer] [/B] [/C] [/F] [/P port] [/R]          (MS-DOS 3.2)

    where:

    printer     is the type of printer to be supported, from the following
                list:

                COLOR1     IBM Personal Computer Color Printer with black
                            ribbon

                COLOR4     IBM Personal Computer Color Printer with red-
                            green-blue-black (RGB) ribbon

                COLOR8     IBM Personal Computer Color Printer with cyan-
                            magenta-yellow-black (CMY) ribbon

                COMPACT    IBM Personal Computer Compact Printer

                GRAPHICS   IBM Personal Computer Graphics Printer or
                            compatible (the default)

    /B          prints the background in color; valid only with the COLOR4
                and COLOR8 printers.

    /C          centers the printout on the page.

    /F          flips (rotates) the printout 90 degrees.

    /P port     specifies which port the printer is attached to (1-3,
                where 1 = LPT1, 2 = LPT2, and 3 = LPT3).

    /R          prints the image as it appears on the screen (white
                characters on a black background) rather than reversed
                (the default, black characters on a white background).

Description

    The default system routine for dumping the screen to the printer
    (invoked by Shift-PrtSc) cannot interpret the display in graphics
    modes. The GRAPHICS command loads a more sophisticated routine that
    can dump CGA-compatible graphics displays to several models of IBM
    graphics printers or compatibles.The GRAPHICS command is not
    compatible with the Hercules monochrome graphics card or with an
    enhanced graphics adapter in its enhanced display modes.

    If the display is in 640 x 200 graphics mode, the screen dump is
    printed sideways (rotated 90 degrees). A 320 x 200 graphic can be
    rotated manually by specifying the /F switch in the command line;
    however, the image will be elongated horizontally. A rotated image is
    printed along the left side of the page, which is actually the top of
    the page in terms of image orientation. The /C option can be used to
    center a rotated 320 x 200 image on the page.

    When used with a printer with a black ribbon, GRAPHICS produces screen
    dumps with as many as four shades of gray to represent the colors.
    When used with a printer with a color ribbon (type COLOR4 or COLOR8),
    GRAPHICS prints all the colors except the background color. With
    printer types COLOR4 and COLOR8, the /B switch can be used to print
    the background color also.

    Ordinarily, the screen image being dumped is reversed from its
    appearance on the screen; that is, the light areas on the screen are
    dark on the printed output and vice versa. The /R switch produces a
    screen dump that is not reversed in this manner.

    If the printer parameter is not included in the command line, the
    GRAPHICS program assumes an IBM Personal Computer Graphics Printer or
    compatible.

    If two or more printers are attached to the system, the /P switch can
    be used to specify which printer GRAPHICS should use.

    The GRAPHICS command is a terminate-and-stay-resident (TSR) program;
    therefore, its installation reduces the amount of RAM available for
    use by application programs.

Examples

    To load the graphics printing program for use with an IBM Personal
    Computer Graphics Printer or compatible connected to LPT2, type

    C>GRAPHICS /P 2  <Enter>

    Note: A tab, a semicolon character (;), or an equal sign (=) can be
    used between the /P and the port number instead of a space.

    To load the graphics printing program for use with the IBM Personal
    Computer Color Printer with an RGB ribbon and specify that the
    background color be printed, type

    C>GRAPHICS COLOR4 /B  <Enter>

    To load the graphics printing program for use with the IBM Personal
    Computer Compact Printer and specify that the images be printed
    sideways and centered on the page, type

    C>GRAPHICS COMPACT /F /C  <Enter>

Messages

    DOS 2.0 or later required
    GRAPHICS does not work with versions of MS-DOS earlier than 2.0.

    Incorrect DOS version
    The version of GRAPHICS is not compatible with the version of MS-DOS
    that is running.

    Unrecognized printer
    The printer type specified in the command line is invalid or the
    printer is not supported.

    Unrecognized printer port
    The port specified with the /P switch is not a number in the range 1
    through 3 or an invalid separator character was used.



JOIN
3.0 and later
Join Disk to Directory
External   No Net


Purpose

    Joins the directory structure of a disk drive to a subdirectory on
    another drive.

Syntax

    JOIN [drive1: drive2:path]

    or

    JOIN drive1: /D

    where:

    drive1          is the drive whose directory structure will be joined
                    to a subdirectory of another drive.

    drive2:path     is the drive and directory that will be used to
                    reference files on drive1.

    /D              cancels the effect of a previous JOIN command on
                    drive1.

Description

    The JOIN command allows the directory structure of a disk in one drive
    to be joined, or spliced, into an empty subdirectory of a disk in
    another drive. After a JOIN, the entire directory structure of the
    disk in drive1, starting at the root, together with all the files that
    it contains, appears to be the directory structure of the specified
    subdirectory on the disk in drive2; the drive letter for drive1 is
    no longer available. If the directory at the end of the path on drive2
    already exists, it must not contain any files; if it does not exist,
    JOIN will attempt to create it.

    The current directory status of drive1 has no effect on the JOIN
    operation. Regardless of which directory or subdirectory is active
    when the JOIN command is entered, the entire directory structure,
    including the root directory, is joined to the subdirectory on the
    disk in drive2.

    The /D switch cancels any previous JOIN command for a specific
    drive.

    If the JOIN command is entered without parameters, it displays a list
    of all joins currently in effect.

    Warning: The JOIN command should not be used on drives affected by a
    SUBST or ASSIGN command. Similarly, the BACKUP, RESTORE, FORMAT,
    DISKCOPY, and DISKCOMP commands should not be used on drives affected
    by the JOIN command. Drives that have been redirected over a network
    cannot be joined.

Examples

    To join drive B to the subdirectory \DRIVEB on drive C, type

    C>JOIN B: C:\DRIVEB  <Enter>

    A subsequent JOIN command without parameters displays

    B: => C:\DRIVEB

    To then list the files in the root directory of the disk in drive B,
    type

    C>DIR C:\DRIVEB  <Enter>

    To cancel a previous JOIN command affecting drive B, type

    C>JOIN B: /D  <Enter>

Messages

    Cannot JOIN a network drive
    A drive assigned to a network cannot be joined to another drive.

    Directory not empty
    A drive cannot be joined to a directory that already contains
    files.

    DOS 2.0 or later required
    JOIN does not work with versions of MS-DOS earlier than 2.0.

    Incorrect DOS version
    The version of JOIN is not compatible with the version of MS-DOS that
    is running.

    Incorrect number of parameters
    There were missing, extra, or incorrect parameters in the command
    line.

    Invalid parameter
    A drive cannot be joined to the root directory of any drive.

    Not enough memory
    The available system memory is insufficient for MS-DOS to run the JOIN
    command.



KEYBxx
3.2
Define Keyboard
External


Purpose

    Installs a table that defines the translation of keys to the extended
    character codes, replacing the default table in the ROM BIOS. This
    command is included with PC-DOS beginning with version 3.0.

Syntax

    KEYBxx

    where:

    xx     is a code that selects a keyboard configuration:

            DV     Dvorak keyboard (MS-DOS only)
            FR     French
            GR     German
            IT     Italian
            SP     European Spanish
            UK     United Kingdom English

    Note: KEYBxx is hardware dependent; therefore, implementation of
    this command may vary for different OEM versions of MS-DOS.

Description

    The KEYBxx utility configures the keyboard for use with a language
    other than United States English, making available special characters
    that are appropriate for the specified country's language and
    currency. These special characters are represented by the extended
    character codes (128-255) that correspond to the characters
    implemented on the OEM's display adapter. (Both the KEYBxx and the
    GRAFTABL commands must be used to make these characters available in
    graphics modes on a color/graphics adapter.)

    After KEYBxx is loaded, special accented characters not part of the
    language in use are also available through the use of dead keys--keys
    that are pressed and released before the letter key is pressed. The
    following dead keys are available on a United States English keyboard
    for an IBM PC, PC/XT, PC/AT, or strict compatible:

╓┌───────────────────────────────────┌──────────────────┌────────────────────╖
    Keyboard                       Dead               Resulting Accent
    Program                        Key                Shown with Character
    ──────────────────────────────────────────────────────────────────────
    KEYBGR (Germany)               +                  à
                                    =                  á
    KEYBFR (France)                [                  â
                                    {                  ä
    KEYBSP (Spain)                 [                  á
                                    ]                  à
                                    {                  ä
                                    }                  â
    KEYBUK (United Kingdom)        Not supported
    KEYBIT (Italy)                 Not supported

    The dead-key combinations supported are

╓┌──────────────────────────┌────────────────────────────────────────────────╖
    Keyboard              Combinations
    Program               Supported
    ──────────────────────────────────────────────────────────────────────
    Germany               á é É í ó ú à è ì ò ù
    France                ä Ä ë ï ö Ö ü Ü ÿ â ê î ô û
    Spain                 ä Ä ë ï ö Ö ü Ü ÿ á é É í ó ú
                        à è ì ò ù â ê î ô û
    United Kingdom        Dead key not supported
    Italy                 Dead key not supported

    On an IBM PC, PC/XT, PC/AT, or strict compatible, the key sequence
    Ctrl-Alt-F1 can be used at any time to return the keyboard to the
    default (United States English) configuration; the sequence Ctrl-Alt-
    F2 then returns the keyboard to the selected configuration.

    KEYBxx should be loaded only once during an MS-DOS session; the
    computer should be restarted if KEYBxx is loaded for use with a
    different language.

    KEYBxx is a terminate-and-stay-resident (TSR) utility and therefore
    reduces the amount of memory available to transient application
    programs (by approximately 2 KB). The only way to reclaim this memory
    is to restart the system.

Example

    To configure the keyboard for Germany, type

    C>KEYBGR  <Enter>

Messages

    Bad command or filename
    The selected keyboard does not exist or the program that configures
    the keyboard is not present on the disk.

    Incorrect DOS version
    The version of KEYBxx is not compatible with the version of MS-DOS
    that is running.



LABEL
3.1 and later
Modify Volume Label
External   No Net


Purpose

    Adds, alters, or deletes a volume label on a disk. This command is
    included with PC-DOS beginning with version 3.0.

Syntax

    LABEL [drive:][label]

    where:

    drive           is any valid disk drive.

    label           is a name up to 11 characters long.

Description

    With MS-DOS versions 2.0 and later, each disk can have a name called a
    volume label, which is implemented as a special type of entry in the
    disk's root directory. With MS-DOS versions 2.x, this volume label can
    be assigned to a disk only at the time the disk is formatted, using
    the FORMAT command's /V switch. However, with PC-DOS versions 3.0 and
    later and MS-DOS versions 3.1 and later, the volume label can be
    added, modified, or deleted at any time using the LABEL command. (A
    disk's volume label can be displayed with the VOL command; the label
    is also included as part of the output from the CHKDSK, DIR, and TREE
    commands.)

    If a new volume name is included in the LABEL command line, the disk's
    label is changed immediately. If LABEL is entered alone or with only a
    drive letter, a message is displayed giving the current volume label
    of the disk in the specified drive (or the default drive, if no drive
    letter is given) and prompting the user for a new label. (A volume
    label can be from 1 to 11 characters; it cannot contain any of the
    characters * ? / \ | . , ; : + = < > [] or tab.) If no new volume name
    is supplied (the user did not type a volume label before pressing
    Enter), LABEL prompts the user to indicate whether the previous volume
    label should be deleted. Existing files on the disk are in no way
    affected by the LABEL command.

    The LABEL command cannot be used on a network drive. With MS-DOS
    version 3.2, the LABEL command also cannot be used on a disk in a
    drive that is affected by an ASSIGN or SUBST command.

Examples

    To give the volume label PAYROLL to the disk in drive B, type

    C>LABEL B:PAYROLL  <Enter>

    Note that LABEL immediately overwrites any existing volume label on
    drive B with the new name; no warning of an existing volume label is
    given.

    To remove the volume label LEDGER from the disk in drive A, type

    C>LABEL A:  <Enter>

    The LABEL command displays

    Volume in drive A is LEDGER
    Volume label (11 characters, ENTER for none)?

    Press the Enter key to receive the additional prompt

    Delete current volume label (Y/N)?

    Then respond with Y and Enter to remove the volume label from the
    disk in drive A.

Messages

    Cannot LABEL a Network drive
    The disk drive specified in the command line cannot be a network
    drive.

    Cannot LABEL a SUBSTed or ASSIGNed drive
    The disk drive specified in the command line is currently affected by
    a SUBST or ASSIGN command (MS-DOS version 3.2).

    Delete current volume label (Y/N)?
    No volume label was entered in response to the volume-label prompt and
    a volume label already exists on the disk. Respond with Y to delete
    the current label; respond with N to terminate the command.

    Incorrect DOS version
    The version of LABEL is not compatible with the version of MS-DOS that
    is running.

    Invalid characters in volume label
    The characters * ? / \ | . , ; : + = < > [] and tab cannot be part of
    a volume label.

    Invalid drive specification
    The drive specified in the command line is not valid or does not exist
    in the system.

    No room in root directory
    The root directory of the disk in the designated drive is full and a
    volume label cannot be added. Delete a file or subdirectory from the
    root directory to make room for the label.

    Too many files open
    LABEL was unable to write the volume label because no system file
    handles were available. Increase the value of FILES in the CONFIG.SYS
    file.

    Volume in drive X has no label
    Volume label (11 characters, ENTER for none)?

    or

    Volume in drive X is xxxxxxxxxxx
    Volume label (11 characters, ENTER for none)?
    This informational message informs the user of the current volume
    label and prompts the user to add, change, or delete it.



MKDIR or MD
2.0 and later
Make Directory
Internal


Purpose

    Creates a new directory.

Syntax

    MKDIR [drive:][path]new_directory

    or

    MD [drive:][path]new_directory

    where:

    new_directory          is a valid directory name, optionally preceded
                            by an existing path and/or a disk drive.

Description

    The MKDIR command creates a directory, adding a branch to the
    hierarchical directory structure of the disk. If the name of the new
    directory is preceded by a path, indicating that the new directory is
    to be a subdirectory of that path, the specified path must already
    exist.

    If new_directory is not preceded by an existing path or a backslash
    character (\), it is presumed to be relative to the current directory.
    If new_directory is preceded by a backslash alone, the directory
    created will be a subdirectory of the root directory, regardless of
    the current directory. The length of the full path (including
    new_directory) must not exceed 63 characters.

    Warning: The MKDIR command should not be used to create new
    directories on drives affected by an ASSIGN, JOIN, or SUBST
    command.

Examples

    To create a directory named SOURCE in the current directory of the
    disk in the current drive, type

    C>MKDIR SOURCE  <Enter>

    or

    C>MD SOURCE  <Enter>

    To create a directory named LETTERS in the existing directory named
    WORD (which is a subdirectory of the root directory) on the disk in
    drive D, type

    C>MKDIR D:\WORD\LETTERS  <Enter>

    or

    C>MD D:\WORD\LETTERS  <Enter>

Messages

    Invalid drive specification
    The drive specified in the command line is not valid or does not exist
    in the system.

    Invalid number of parameters
    The name of the new directory was not included in the MKDIR command
    line.

    Unable to create directory
    The specified directory cannot be created. This may be caused by a
    full disk (if the new directory would cause the current directory to
    be extended), a full root directory (if the new directory's parent is
    the root directory), the existence of a file or directory with the
    same name, or an invalid new_directory name.



MODE
3.2
Configure Device
External


Purpose

    The MODE command has four distinct uses:

    ■  To reconfigure a printer attached to a parallel port (LPT1, LPT2,
        or LPT3) for printing at 80 or 132 characters per line, 6 or 8
        lines per inch, or both (if the printer supports these features).
        In this form, MODE can also be used to select a parallel printer
        other than the one attached to LPT1 for use as the default
        printer.

    ■  To select another display or reconfigure the current display.
        Reconfiguration includes changing between 40-column and 80-column
        display, changing between monochrome and color display, centering
        the display on the screen, or any combination of these.

    ■  To configure the baud rate, parity, and number of databits and stop
        bits of a serial communications port (COM1 or COM2) for use with a
        specific printer, modem, or other serial device.

    ■  To redirect printer output from a parallel port to one of the
        serial ports, so that the serial port becomes the system's default
        printer port.

    Because the syntax for each of these uses of MODE is different, they
    are discussed separately on the following pages.

    Although each form of the MODE command can be issued at the system
    prompt, MODE commands are commonly used within the AUTOEXEC.BAT file
    to automatically perform any necessary reconfiguration each time the
    system is turned on or restarted.

    The MODE command is included with PC-DOS beginning with version
    1.0.

Message

    Incorrect Version of MODE
    The version of MODE is not compatible with the version of MS-DOS that
    is running.



MODE
3.2
Configure Printer
External


Purpose

    Sets characteristics for IBM-compatible printers connected to a
    parallel printer port (LPT1, LPT2, or LPT3). This form of the MODE
    command is included with PC-DOS beginning with version 1.0.

Syntax

    MODE LPTn[:][cpl][,[lpi][,P]]

    where:

    LPTn      is the parallel printer port (n = 1, 2, or 3).

    cpl       is the number of characters per line (80 or 132,
            default = 80).

    lpi       is the number of lines per inch (6 or 8, default = 6).

    P         causes continuous retries when the printer is not ready.

Description

    This form of the MODE command configures an IBM or compatible printer
    connected to parallel port n. Its effect on other printer types may
    vary. The command has the side effect of canceling any redirection
    that was previously applied to the specified port with a Redirect
    Printing MODE command.

    The first parameter, LPTn, designates the parallel printer port to be
    configured (LPT1, LPT2, or LPT3). All the other parameters are
    optional.

    The cpl parameter selects between printing 80 characters on a line
    (the default) and 132 characters on a line. The lpi parameter selects
    between 6 lines per inch (the default) and 8 lines per inch. (Note
    that the attached printer must be capable of printing 132 characters
    per line or 8 lines per inch and of understanding IBM-compatible
    printer-control codes; otherwise, specifying these values will have no
    effect.)

    The last parameter in the command line, P, configures the system to
    retry output continuously (or until Ctrl-Break is pressed) if the
    printer is not ready or not on line (interpreted by the computer as a
    time-out error), rather than display an error message. (Note that if P
    is used and lpi is omitted, the comma preceding lpi must be
    specified.) Use of the P option causes part of the MODE program to
    become permanently resident in memory. (This option is not available
    in PC-DOS version 1.0.)

Examples

    To configure the printer on the first parallel port to print 132
    characters per line, with 8 lines per inch, type

    C>MODE LPT1:132,8  <Enter>

    To configure the system to continually send output to the printer on
    the second parallel port if a time-out error occurs but to leave the
    other values at their defaults, type

    C>MODE LPT2:,,P  <Enter>

Messages

    DOS 2.0 or later required
    MODE does not work with versions of MS-DOS earlier than 2.0.

    Incorrect DOS version
    The version of MODE is not compatible with the version of MS-DOS that
    is running.

    Infinite retry of parallel printer timeout
    The P option was included in the command line and the system will
    continuously retry to send output to the printer attached to the
    specified port if it is not ready or not on line.

    INTERNAL ERROR in MODE application
    An internal error occurred in the MODE utility and the requested
    reconfiguration was not carried out.

    Invalid parameters
    The command line included an incorrect parallel-port specification or
    one of the configuration parameters was not correct.

    LPTn: set for 80
    The specified printer has been configured for 80 characters per
    line.

    LPTn: set for 132
    The specified printer has been configured for 132 characters per
    line.

    Printer error
    The configuration command could not be carried out because the printer
    is turned off, not ready, or not on line.

    Printer lines per inch set
    The printer has successfully been configured for the specified 6 or 8
    lines per inch.

    Resident portion of MODE loaded
    The P option was specified in the command line and part of the MODE
    command has become permanently resident in memory, decreasing slightly
    the amount of memory available to other programs.



MODE
3.2
Set Display Mode
External


Purpose

    Selects the active video adapter and its display mode or reconfigures
    the current display. This form of the MODE command is included with
    PC-DOS beginning with version 2.0.

Syntax

    MODE display

    or

    MODE [display],shift[,T]

    where:

    display     is a video adapter and display mode from the following
                list:

                40    Color/graphics adapter, 40 characters per line

                80    Color/graphics adapter, 80 characters per line

                BW40  Color/graphics adapter, 40 characters per line,
                    color disabled from composite output

                BW80  Color/graphics adapter, 80 characters per line,
                    color disabled from composite output

                CO40  Color/graphics adapter, 40 characters per line,
                    color enabled

                CO80  Color/graphics adapter, 80 characters per line,
                    color enabled

                MONO  Monochrome adapter

    shift       is R or L, to shift the display left or right one
                (40-column display) or two (80-column display) character
                positions.

    T           causes a test pattern to be displayed for screen
                alignment.

Description

    This form of the MODE command has two uses. The first is to select the
    active video adapter and its display mode (if more than one adapter is
    present in the system) or to reconfigure the current adapter. The
    second is to shift the screen display to the left or right to center
    it. In both cases, the screen is cleared as a side effect of the
    command.

    The display parameter selects the active video adapter and mode or
    reconfigures the current adapter. If a display adapter that is not
    available is specified, MODE displays an error message.

    The shift parameter is simply the single character R or L preceded by
    a comma. Each shift command causes the screen image to be shifted by
    two characters if the display adapter is in 80-column mode or by one
    character if it is in 40-column mode. When the T option is also
    included in the command line, the screen image is shifted, a test
    pattern is displayed, and the user is prompted to indicate whether the
    screen should be shifted again. Note that use of shift causes part of
    the MODE program to become permanently resident in memory.

Examples

    In a system with both a color/graphics adapter and a monochrome
    display adapter, to select the monochrome display as the active
    display, type

    C>MODE MONO  <Enter>

    To select a color 80-column text mode on the color/graphics adapter,
    shift the screen image two characters to the left, and display a test
    pattern, type

    C>MODE CO80,L,T  <Enter>

Messages

    DOS 2.0 or later required
    MODE does not work with versions of MS-DOS earlier than 2.0.

    Do you see the leftmost 0? (Y/N)

    or

    Do you see the rightmost 9? (Y/N)
    When the shift and T options are used together, this message allows
    the user to shift the test-pattern display successive positions until
    it is properly centered.

    Incorrect DOS version
    The version of MODE is not compatible with the version of MS-DOS that
    is running.

    INTERNAL ERROR in MODE application
    An internal error occurred in the MODE utility and the requested
    reconfiguration was not carried out.

    Invalid parameter
    The specified display adapter or mode is not available.

    Requested Screen Shift out of range
    The display cannot be shifted any further.

    Unable to shift Screen left
    The screen has already been shifted as far left as possible or the
    active display adapter cannot be shifted (monochrome or enhanced
    graphics adapter).

    Unable to shift Screen right
    The screen has already been shifted as far right as possible or the
    active display adapter cannot be shifted (monochrome or enhanced
    graphics adapter).



MODE
3.2
Configure Serial Port
External


Purpose

    Controls the configuration of the serial communications adapter. This
    form of the MODE command is included with PC-DOS beginning with
    version 1.1.

Syntax

    MODE COMn[:]baud[,parity[,databits[,stopbits[,P]]]]

    where:

    COMn       is the serial port (n = 1 or 2).

    baud       is the baud rate (110, 150, 300, 1200, 2400, 4800, or
                9600).

    parity     is the type of parity checking (N = none, O = odd, E =
                even, default = E).

    databits   is the number of bits per character (7 or 8, default = 7).

    stopbits   is the number of stop bits (1 or 2, default = 1, except
                with 110 baud where default = 2).

    P          causes continuous retries when the output device is not
                ready.

Description

    This form of the MODE command configures the specified serial port for
    communication with an external device such as a printer, a terminal,
    or a modem.

    The first parameter, COMn, designates the serial port to be configured
    (COM1 or COM2). Except for the port number and the baud rate, which
    are required, a parameter can be left unchanged by entering a comma
    without a value in its position in the command line. (If all optional
    parameters are to be left unchanged and P is not used in the command
    line, no commas are required.)

    The baud rate must be one of the values 110, 150, 300, 600, 1200,
    2400, 4800, or 9600. The first two digits can be used as an
    abbreviation for the full value.

    The parity parameter specifies the type of parity checking to be done
    on each character and must be one of the characters N, O, or E (for
    none, odd, or even, respectively); the default is even parity. The
    databits parameter specifies the length of a character and must be
    either 7 or 8; the default is 7. The stopbits parameter is either 1
    or 2. If baud is set for 110, the default number of stopbits is 2;
    otherwise, the default is 1.

    The last parameter in the command line, P, configures the system to
    retry output continuously (or until Ctrl-Break is pressed) if the
    device interfaced to the serial port is not ready or not on line,
    rather than display an error message. Use of the P option causes part
    of the MODE program to become permanently resident in memory.

    Consult the user's manual for the specific printer, modem, terminal,
    or other device to determine the proper settings for the MODE
    parameters.

    If a serial printer is to be used instead of LPT1 as the system's
    default printer, the Redirect Printing MODE command must be specified
    after the Configure Serial Port MODE command.

Example

    To configure the first serial port for 9600 baud, no parity, 8
    databits, and 1 stop bit, type

    C>MODE COM1:9600,N,8,1  <Enter>

Messages

    COMn: baud,parity,databits,stopbits,timeout
    After the serial port is configured successfully, MODE displays an
    advisory message confirming the settings. If the P option was not used
    in the command line, a hyphen character (-) is displayed for timeout,
    to indicate no continuous retries if the printer is not ready or is
    not on line.

    COM port does not exist
    The serial port specified in the command line does not exist in the
    system.

    DOS 2.0 or later required
    MODE does not work with versions of MS-DOS earlier than 2.0.

    Incorrect DOS version
    The version of MODE is not compatible with the version of MS-DOS that
    is running.

    INTERNAL ERROR in MODE application
    An internal error occurred in the MODE utility and the requested
    reconfiguration was not carried out.

    Invalid baud rate specified
    The baud rate included in the command line was not one of the allowed
    values or was abbreviated incorrectly.

    Invalid parameters
    The command line specified a COM port that does not exist in the
    system or one of the configuration parameters for the COM port was not
    valid.

    No COM: ports
    The computer does not have any serial ports installed.

    Resident portion of MODE loaded
    The P option was specified in the command line and part of the MODE
    command has become permanently resident in memory, decreasing slightly
    the amount of memory available to other programs.



MODE
3.2
Redirect Printing
External


Purpose

    Redirects output from a parallel port to a serial communications port.
    This form of the MODE command is included with PC-DOS beginning with
    version 1.1.

Syntax

    MODE LPTn[:][=COMn[:]]

    where:

    LPTn       is the parallel port to be redirected (n = 1, 2, or 3).

    COMn       is the serial port (n = 1 or 2) to be used for output
                instead of LPTn.

Description

    This form of the MODE command redirects any output for the specified
    parallel port, sending it to the specified serial communications port
    instead. The parallel port can be LPT1, LPT2, or LPT3; the serial port
    can be either COM1 or COM2. A Configure Serial Port MODE command is
    required before the Redirect Printing MODE command, to configure the
    serial port for the proper baud rate, parity, word length, and stop
    bits.

    Redirection can be canceled by entering MODE LPTn alone.

    Use of MODE to redirect printer output causes part of the MODE program
    to become permanently resident in memory. Canceling the redirection
    will not remove this resident portion from memory.

Example

    To cause all output to the first parallel port (LPT1) to be redirected
    to the first serial port (COM1), type

    C>MODE LPT1:=COM1:  <Enter>

Messages

    DOS 2.0 or later required
    MODE does not work with versions of MS-DOS earlier than 2.0.

    Illegal device name
    Either the parallel port or the serial port specified in the command
    line does not exist in the system.

    Incorrect DOS version
    The version of MODE is not compatible with the version of MS-DOS that
    is running.

    INTERNAL ERROR in MODE application
    An internal error occurred in the MODE utility and the requested
    reconfiguration was not carried out.

    LPTn: not redirected
    No serial port was specified and any previous redirection from the
    specified parallel port was canceled.

    LPTn: redirected to COMn:
    The MODE command has successfully redirected the output for the
    specified parallel port to the specified serial port.

    Resident portion of MODE loaded
    Part of the MODE command has become permanently resident in memory,
    decreasing slightly the amount of memory available to other
    programs.



MORE
2.0 and later
Display by Screenful
External


Purpose

    Displays output one screenful at a time on standard output.

Syntax

    MORE

Description

    The MORE filter reads lines of text from standard input and sends them
    to standard output one screenful (23 lines) at a time. At the end of
    each screenful, MORE displays the message -- More -- and then waits
    for any key to be pressed before it continues. (Pressing Crtl-C or
    Ctrl-Break terminates the MORE filter.)

    The default input device is the keyboard; the default output device is
    the video display. Because standard input can be redirected, the MORE
    filter can also accept input from another character device or a file
    or from the piped output of another program or filter. Similarly, the
    output of MORE can be redirected to any character device or file or
    can be piped to another program (however, the message -- More -- will
    be included with the redirected or piped output).

Examples

    To display the file SHELL.C one screenful at a time, type

    C>MORE < SHELL.C  <Enter>

    To display the directory of  \MASM\SOURCE in the current drive one
    screenful at a time, pipe the output of the DIR command to the MORE
    filter by typing

    C>DIR \MASM\SOURCE  MORE  <Enter>

Messages

    -- More --
    This informational message is displayed at the end of each screenful
    of text. Press any key to resume output.

    MORE: Incorrect DOS version
    The version of MORE is not compatible with the version of MS-DOS that
    is running.



PATH
2.0 and later
Define Command Search Path
Internal


Purpose

    Specifies one or more additional drives and/or directories to be
    searched for a program or batch file if the file cannot be found in
    the current or specified drive and directory.

Syntax

    PATH [drive:][path][;[drive:][path]...]

    or

    PATH ;

    where:

    drive      is the drive containing the disk to be searched for the
                executable file.

    path       is the name of the directory to be searched for the
                executable file.

Description

    When a command line is entered at the MS-DOS system prompt, the
    command processor first checks to see if the specified command is one
    of its internal commands. If it is not, the command processor searches
    the current directory of the current drive for a file with the same
    name and the extension .COM, .EXE, or .BAT, in that order. If found,
    the file is loaded into memory and executed (if the extension is .COM
    or .EXE) or interpreted by the resident batch-file processor (if the
    extension is .BAT); otherwise, MS-DOS displays the message Bad command
    or file name,  followed by the system prompt. In versions 3.0 and
    later, a path can precede the command name, causing MS-DOS to make the
    initial search for a program or batch file under the specified
    path.

    The PATH command designates one or more disk drives and/or directory
    paths to be searched sequentially for a program or batch file if the
    file cannot be found in the current or specified drive and directory.
    The drives and/or directory paths are searched in the order they
    appear in the PATH command. Multiple drive:path pairs can be
    specified, separated by semicolons. A copy of the PATH string is
    passed to each executing process as a part of the process's
    environment.

    If the drive parameter is specified without an associated path, MS-
    DOS assumes the root directory of drive. If the PATH command is
    followed only by a semicolon, MS-DOS deletes the existing path. If the
    PATH command is entered with no parameters, MS-DOS displays the
    existing path.

    Invalid or nonexistent drives and/or paths in the PATH command do not
    result in an error message but are ignored when the PATH string is
    inspected later during a search for a program or batch file.

    The PATH command is generally placed in the AUTOEXEC.BAT file on the
    system disk so that the search order will be defined each time the
    system is turned on or restarted.

Examples

    To define the directory \BIN on the disk in drive A as the directory
    to be searched for a program or batch file if the file is not found in
    the current or specified directory, type

    C>PATH A:\BIN  <Enter>

    Subsequent entry of the command

    C>PATH  <Enter>

    results in the display

    PATH=A:\BIN

    To define the root, \BIN, \DOS, and \DATA directories on drive C and
    the \UTIL directory on the disk in drive B as the locations to be
    searched for a program or batch file if the file is not found in the
    current or specified directory, type

    C>PATH C:\;C:\BIN;C:\DOS;C:\DATA;B:\UTIL  <Enter>

    To delete the current search path, type

    C>PATH ;  <Enter>

Message

    No Path
    The PATH command was entered without parameters and no search path is
    currently in effect.



PRINT
2.0 and later
Print Spooler
External


Purpose

    Loads and configures the background print spooler or adds or deletes
    files from the print spooler's queue.

Syntax

    PRINT [/D:device] [/B:n] [/M:n] [/Q:n] [/S:n] [/U:n]
    [[drive:][path]filename] [/C][/P]
    [[[drive:][path]filename] [/C][/P]...]

    or

    PRINT /T

    where:

    filename   is the name of the file to be added to or deleted from the
                print queue, optionally preceded by a drive (and a path
                with versions 3.0 and later); wildcard characters are
                permitted.
    /B:n       sets the print-buffer size in bytes (1-32767, default = 512)
                (versions 3.0 and later).
    /C         deletes the immediately preceding file and all subsequent
                files from the print queue (until a /P switch is
                encountered).
    /D:device  is the character device to be used for printing (default =
                PRN); must be the first switch, if used (versions 3.0 and
                later).
    /M:n       is the length of time in timer ticks that PRINT keeps
                control during each of its time slices (1-255, default = 2)
                (versions 3.0 and later).
    /P         adds the immediately preceding file and all subsequent
                files to the print queue (until a /C switch is
                encountered).
    /Q:n       is the maximum number of files allowed in the print queue
                (1-32, default = 10) (versions 3.0 and later).
    /S:n       is the number of time slices per second that PRINT gives
                control to the foreground process (1-255, default = 8)
                (versions 3.0 and later).
    /T         terminates printing and empties the print queue.
    /U:n       is the number of timer ticks that PRINT waits for a busy or
                unavailable printer or for a disk access or MS-DOS function
                call to terminate before giving up the time slice (1-255,
                default = 1) (versions 3.0 and later).

Description

    The PRINT utility is a terminate-and-stay-resident (TSR) program that
    can print files from disk while other programs are running. PRINT
    maintains a first-in, first-out (FIFO) queue that can hold the names
    of as many as 32 files. PRINT does not attempt to interpret the
    contents of a file, except to expand tab characters (ASCII code 09H)
    with spaces to the next eight-column boundary and to interpret 1AH
    characters as end-of-file marks. (A program such as PRINT that can
    transfer files to a printer without any special knowledge of their
    contents or origin is called a print spooler.)

    Note: The PRINT utility continues printing a file until it encounters
    an end-of-file character (1AH). Therefore, if PRINT is used with
    nontext files, it may encounter a 1AH character before reaching the
    end of the file and terminate printing before the entire file has been
    processed. In such cases, files should be printed using the COPY
    command, with PRN as the destination.

    The PRINT program employs a technique called time-slicing, which is
    based on its use of the timer-tick interrupt and its detailed
    knowledge of MS-DOS. PRINT uses this interrupt, which occurs 18.2
    times per second on IBM PC-compatible machines, to divide the
    processor's time between an application or utility program (such as a
    word processor or a spreadsheet) and the print spooler. Because the
    application program typically controls the display screen and the
    keyboard and receives most of the CPU time, it is called the
    foreground program. The print spooler, which receives a lesser part of
    the CPU time and usually operates without indicating its status or
    progress to the operator, is called the background program.

    The /B:n, /D:device, /Q:n, /M:n, /S:n, and /U:n switches configure
    the PRINT utility. These switches are used only the first time the
    PRINT command is entered after the system has been turned on or
    restarted.

    The /D:device switch, which must be the first switch in the command
    line if used, specifies the peripheral device the print spooler is to
    use for output. This can be any legal character-output device that is
    present in the system. If /D:device is not included in the first
    PRINT command, PRINT prompts the user to select an output device
    (default = PRN). Once an output device has been assigned, a new device
    cannot be selected without restarting the system.

    The /B:n switch sets the size of PRINT's file buffer, which controls
    the amount of data that is read from a file at one time for printing.
    The value of n must be between 1 and 32767 bytes (default value =
    512). Large file buffers reduce the amount of extra disk activity
    caused by the print spooler, but they also reduce the amount of memory
    available for use by other programs. The /Q:n switch controls the
    size of PRINT's queue--that is, the number of files that can be held
    in the buffer pending printing. The queue can be configured to hold 1
    to 32 files (default = 10).

    The /S:n, /M:n, and /U:n switches, available only with versions 3.0
    and later, control the time-slicing behavior of PRINT. The /S:n
    switch sets the number of time slices per second--that is, how many
    times per second--PRINT will be given control; n is in the range 1
    through 255 (default = 8). The /M:n switch sets the length of time
    (in timer ticks) that PRINT will keep control during each of its time
    slices; n is in the range 1 through 255 (default = 2). The /U:n
    switch specifies how long (in timer ticks) PRINT should wait for a
    busy or unavailable printer or for a disk access or MS-DOS function
    call to terminate before giving up its time slice; again, n is in the
    range 1 through 255 (default = 1). Unless there are special
    circumstances, the default values for these switches will give
    acceptable performance.

    Files are added to the print queue by entering PRINT followed by one
    or more pathnames. Files are printed in the order they are placed in
    the queue. At the end of each file, the print spooler advances the
    paper to the top of the next page. If a filename containing wildcards
    is used, all matching files are added to the queue in the order in
    which they appear in the directory. After a file is queued for
    printing, it should not be renamed or erased, nor should the disk
    containing the file be removed, until the printing is complete.

    Note: Each print queue entry can be a maximum of 63 characters,
    including the drive and path.

    The /P and /C switches allow files to be added to and deleted from the
    print queue in the same command line. The /P switch (the default) adds
    to the print queue the immediately preceding file in the command line
    and all subsequent files until a /C switch is encountered. Conversely,
    the /C switch cancels printing for the immediately preceding file in
    the command line and for all subsequent files until a /P switch is
    encountered. If a canceled file is currently being printed, PRINT
    prints the message File filename canceled by operator on the
    listing, sounds the printer's alarm (if it has one), and advances the
    paper to the top of the next page.

    The /T switch terminates printing by deleting all files from the print
    queue. If a file is currently being printed, PRINT prints the message
    All files canceled by operator on the listing, sounds the printer's
    alarm (if it has one), and advances the paper to the top of the next
    page.

    If PRINT encounters a disk error while attempting to print a
    particular file, it cancels that file, prints an error message on the
    printer, sounds the printer's alarm (if it has one), advances the
    paper to the top of the next page, and goes to the next file in the
    print queue.

    If the PRINT command is entered with no parameters, the contents of
    the print queue are displayed.

    Because PRINT is a TSR utility, it reduces the amount of memory
    available for use by other programs. The only way to recover the
    memory occupied by PRINT, even after printing is complete, is to
    restart the system.

Examples

    To install and configure the PRINT program and specify the auxiliary
    device (AUX) as the printing device, with a print queue that can hold
    as many as 32 filenames and with a buffer size of 2048 bytes, type

    C>PRINT /D:AUX /Q:32 /B:2048  <Enter>

    To add the file DOC.TXT in the current directory of the current drive
    to the print spooler's queue, type

    C>PRINT DOC.TXT  <Enter>

    To delete the file READY.TXT from the print queue and simultaneously
    add the files FINAL.TXT and REPORT.TXT to the queue, type

    C>PRINT READY.TXT /C FINAL.TXT /P REPORT.TXT  <Enter>

    To cancel the file being printed and remove all pending files from the
    print queue, type

    C>PRINT /T  <Enter>

Messages

    filename File not found
    A disk was changed or the file was renamed or erased after the PRINT
    command was entered but before the file was actually printed.

    filename File not in print queue
    A command line with a /C switch specified a file that is not in the
    print queue.

    filename is currently being printed
    This informational message shows which file PRINT is currently
    printing.

    filename is in queue
    This informational message shows which file is in the queue waiting to
    be printed.

    filename Pathname too long
    The pathname of a file to be printed exceeded 63 characters.

    Access denied
    An attempt was made to print a locked file.

    All files canceled by operator
    The /T switch was included in the command line. PRINT terminates
    printing of the current file, empties the print queue, sounds the
    printer alarm (if it has one), and advances the paper to the top of
    the next page.

    Cannot use PRINT - Use NET PRINT
    If network support has been installed, the NET PRINT command must be
    used to print files.

    Errors on list device indicate that it
    may be off-line. Please check it.
    The printer has been turned off or placed off line while files are
    still in the print queue.

    File filename canceled by operator
    A PRINT command was entered with the /C switch to cancel a specific
    file. If the specified file is currently being printed, PRINT
    terminates printing of the file, sounds the printer alarm (if it has
    one), advances the paper to the top of the next page, and resumes
    printing with the next file in the queue.

    Incorrect DOS version
    The version of PRINT is not compatible with the version of MS-DOS that
    is running.

    Invalid drive specification
    A drive letter specified in the command line is invalid or does not
    exist in the system.

    Invalid parameter
    The command line included an invalid switch or configuration switches
    were used after the first time the PRINT command was used.

    List output is not assigned to a device
    An invalid destination device was previously entered. Restart the
    system and specify a valid device in the PRINT command.

    Name of list device [PRN]:
    This message is displayed in response to the first PRINT command line
    if the /D:device switch was not included. Specify any valid character-
    output device (default = PRN).

    No paper error writing device device
    An out-of-paper device error was detected while printing on the
    specified device.

    PRINT queue is empty
    No files are waiting to be printed.

    PRINT queue is full
    No additional files can be added to the print queue until the current
    file is printed. To increase the size of the print queue, restart the
    system and use the /Q:n  switch in the PRINT command.

    Resident part of PRINT installed
    This informational message is displayed on the first entry of a PRINT
    command to indicate that the PRINT utility is now resident in memory.
    The amount of memory available to application programs is reduced
    accordingly.



PROMPT
2.0 and later
Define System Prompt
Internal


Purpose

    Defines the form of the command processor's prompt. This command is
    included in PC-DOS beginning with version 2.1.

Syntax

    PROMPT  [string]

    where:

    string     is a combination of ordinary printable characters and the
                following special display codes:

    ──────────────────────────────────────────────────────────────────────
                Code        Meaning

    ──────────────────────────────────────────────────────────────────────

                $b         | character
                $d         Current date (in the form Day mm-dd-yyyy)
                $e         Escape character (1BH)
                $g         > character
                $h         Backspace character (erases the previous
                            character)
                $l         < character
                $n         Current drive
                $p         Current drive and path
                $q         = character
                $t         Current time (in the form hh:mm:ss.hh)
                $v         MS-DOS version number
                $_         Carriage return/linefeed pair (starts a new
                            line)
                $$         $ character

Description

    The system's default command processor, COMMAND.COM, displays a prompt
    on the screen whenever it is ready to accept a command from the user.
    The command processor determines the format of the prompt from the
    PROMPT environment variable, if it exists. Otherwise, it uses the
    default format, which in most OEM implementations of MS-DOS is the
    letter of the current drive followed by a greater-than sign (for
    example, C>).

    The PROMPT command allows the user to customize the system prompt.
    This command is usually included in the AUTOEXEC.BAT file so that MS-
    DOS displays the custom prompt when the system is turned on or
    restarted.

    The string parameter can be any combination of printable characters
    and the special $ control codes listed in the preceding table. The
    special $ codes allow certain variable information, such as the date
    and time, to be obtained from the operating system and displayed as
    part of the prompt. Such system information can be edited in the
    prompt with the backspace function, which is invoked with the code
    $h.

    Note: When the time is displayed as part of a prompt, it is updated
    only when the command processor redisplays the prompt.

    The escape character, invoked with the code $e, can be used to include
    standard ANSI escape sequences in string to control the appearance of
    text or its position on the screen. See USER COMMANDS:
    ANSI.SYS for further information on the ANSI escape sequences
    and the ANSI device driver.

    If PROMPT is entered with no parameters, the system prompt is reset to
    the default format.

    The PROMPT command works by modifying the PROMPT environment variable.
    The same result can be obtained using the SET command with
    PROMPT=string as its argument. See USER COMMANDS: SET for
    further discussion of the environment block and environment
    variables.

Examples

    To define the system prompt as the word Command followed by a colon,
    type

    C>PROMPT Command:  <Enter>

    On fixed-disk-based systems it is desirable to display the current
    drive and path as part of the prompt. To define such a prompt followed
    by a > character, type

    C>PROMPT $p$g  <Enter>

    To define the system prompt to display the time, date, and current
    drive and path followed by a > character, each on a separate line,
    type

    C>PROMPT $t$ $d$ $p$g  <Enter>

    The system will respond with a display in the following form:

    16:07:31.56
    Thu  6-18-1987
    C:\BIN\DOS>

    To create a prompt that displays the time without the seconds and
    hundredths of a second, followed by a space and the date without the
    year, followed by a space and the current drive and a > character,
    type

    C>PROMPT $t$h$h$h$h$h$h $d$h$h$h$h$h $n$g  <Enter>

    The system will respond with

    16:07 Thu  6-18 C>

    To define a prompt that always displays the current time and date in
    the upper right corner of the screen before displaying the current
    drive and the > character on the current line, type

    C>PROMPT $e[s$e[0;60H$t$h$h$h$h$h$h $d$e[u$n$g  <Enter>

    The escape sequence $e[s saves the current cursor position; the
    sequence $e[0;60H positions the cursor at row 0, column 60; the next
    several codes format the date and time; the sequence $e[u restores
    the original cursor position. (This example requires that the ANSI
    driver be loaded to interpret the escape sequences.)



RAMDRIVE.SYS
3.2
Virtual Disk
External


Purpose

    Creates a virtual disk in memory.

Syntax

    DEVICE=[drive:][path]RAMDRIVE.SYS [size] [sector] [directory] [/A|/E]

    where:

    size           is the size of the virtual disk in kilobytes (minimum
                    = 16, default = 64).

    sector         is the sector size in bytes (128, 256, 512, or 1024;
                    default = 128).

    directory      is the maximum number of entries in the virtual
                    disk's root directory (3-1024, default = 64).

    /A             causes RAMDRIVE to use Lotus/Intel/Microsoft Expanded
                    Memory for storage (cannot be used with /E).

    /E             causes RAMDRIVE to use extended memory for storage
                    (cannot be used with /A).

    Note: Unless a /A or /E switch is used, the virtual disk is created
    in conventional memory.

Description

    The RAMDRIVE.SYS installable device driver allows the configuration of
    one or more virtual disks (sometimes referred to as electronic disks
    or RAMdisks). A virtual disk is implemented by mapping a disk's
    structure--directory, file allocation table, and files area--onto an
    area of random-access memory, rather than onto actual sectors located
    on a magnetic recording medium. Access to files stored on a virtual
    disk is very fast, because no moving parts are involved and the "disk"
    operates at the speed of the system's memory.

    Warning: Because a RAMdisk resides entirely in RAM and is therefore
    volatile, any information stored there is irretrievably lost when the
    computer loses power or is restarted.

    RAMDRIVE.SYS can create a virtual disk in conventional memory,
    extended memory, or Lotus/Intel/Microsoft Expanded Memory.
    Conventional memory is the term for the up-to-640 KB of RAM that
    contain MS-DOS and any application programs. Extended memory is the
    term for the memory at addresses above 1 MB (100000H) that is
    available on 80286-based personal computers such as the IBM PC/AT.
    Expanded memory is the term for a subsystem of bank-switched memory
    boards (and a driver to manage them) that is compatible with the
    Lotus/Intel/Microsoft Expanded Memory Specification (LIM EMS).

    A virtual disk can be installed in conventional memory by simply
    inserting the line DEVICE=RAMDRIVE.SYS into the system's CONFIG.SYS
    file and restarting the system. A new "drive" then becomes available
    in the system, with a default size of 64 KB, 128-byte sectors, and 64
    available directory entries (assuming memory is sufficient). The
    virtual disk is assigned the next available drive letter (which is
    displayed in RAMDRIVE's sign-on message). The drive letter assigned
    depends on the number of other physical and virtual disks in the
    system and also on the position of the DEVICE=RAMDRIVE.SYS line in
    the CONFIG.SYS file relative to other installed block devices.
    Available memory permitting, multiple virtual disks can be created by
    using multiple DEVICE=RAMDRIVE.SYS lines. Several optional parameters
    allow the user to customize the size and configuration of the virtual
    disk and to use extended memory or expanded memory if it is
    available.

    The size parameter specifies the amount of RAM, in kilobytes, to be
    allocated to the virtual disk. The default is 64 KB, but any size from
    16 KB to the total amount of available memory can be specified.

    The sector parameter sets the virtual sector size used within the
    virtual disk. The sector value can be 128, 256, 512, or 1024 bytes
    (default = 128 bytes). Selection of the smallest sector size results
    in a minimum of wasted virtual disk space per file but also results in
    a somewhat slower transfer of data. Physical disk devices on IBM PC-
    compatible systems always use 512-byte sectors.

    Warning: The 1024-byte sector size is not supported in most
    implementations of MS-DOS and will terminate the installation of
    RAMDRIVE.SYS if it is used. Check the documentation included with the
    computer to see if this value is supported.

    The directory parameter sets the number of available entries in the
    virtual disk's root directory. The allowed range is 3 to 1024 (default
    = 64). Each directory entry requires 32 bytes. RAMDRIVE rounds the
    number of available directory entries up, if necessary, so that an
    integral number of sectors are assigned to the root directory.

    The /A switch causes Lotus/Intel/Microsoft Expanded Memory to be used
    for the virtual disk, rather than conventional memory; the /E switch
    causes extended memory to be used. Either option allows very large
    virtual disks to be configured while still leaving the maximum amount
    of conventional memory available for use by application programs. The
    /A and /E switches cannot be used together.

    Note: If RAMDRIVE uses conventional memory for virtual disk storage,
    the memory cannot be reclaimed except by modifying the CONFIG.SYS file
    and restarting the system.

Examples

    To create a virtual disk drive with the default values of 64 KB disk
    size, 128-byte sectors, and 64 available directory entries, include
    the following command

    DEVICE=RAMDRIVE.SYS

    in the CONFIG.SYS file and restart the system.

    To create a 4 MB virtual disk drive in Lotus/Intel/Microsoft Expanded
    Memory, with 512-byte sectors and 224 available directory entries,
    when RAMDRIVE.SYS is located in a directory named \DRIVERS on drive C,
    include the command

    DEVICE=C:\DRIVERS\RAMDRIVE.SYS 4096 512 224 /A

    in the CONFIG.SYS file and restart the system.

Messages

    Microsoft RAMDrive version n.nn virtual disk X:
        Disk size: nnk
        Sector size: nnn bytes
        Allocation unit: n sectors
        Directory entries: nnn

    RAMDRIVE.SYS was successfully installed and this message informs the
    user of the version of RAMDRIVE.SYS that created the virtual disk, the
    drive letter assigned to the disk, and the characteristics of the
    disk.

    RAMDrive: Above Board Memory Manager not present
    The /A switch was used in the command line and the
    Lotus/Intel/Microsoft Expanded Memory Manager is not present in the
    system. Place the DEVICE command that loads the memory manager
    before the DEVICE=RAMDRIVE.SYS command in the CONFIG.SYS
    file.

    RAMDrive: Above Board Memory Status shows errors
    The Above Board device driver is bad or damaged or the board itself is
    defective. Consult the Above Board manual or the manufacturer.

    RAMDrive: Computer must be PC-AT, or PC-AT compatible.
    The /E switch was used in the command line and the computer is not an
    80286-based IBM PC/AT or compatible.

    RAMDrive: Incorrect DOS version
    The version of RAMDRIVE.SYS is not compatible with the version of MS-
    DOS that is running.

    RAMDrive: Insufficient memory
    Available memory is insufficient for RAMDRIVE.SYS to create a virtual
    drive.

    RAMDrive: Invalid parameter
    One of the parameters supplied in the command line is incorrect or is
    not supported by the computer.

    RAMDrive: I/O error accessing drive memory
    The Expanded Memory Manager device driver is bad or damaged or the
    board itself is defective. Consult the board's manual or contact the
    manufacturer.

    RAMDrive: No extended memory available
    The /E switch was specified but the system does not contain extended
    memory.



RECOVER
2.0 and later
Recover Files
External   No Net


Purpose

    Reconstructs files from a disk that has developed unreadable sectors
    or has a damaged directory.

Syntax

    RECOVER drive:

    or

    RECOVER [drive:][path]filename

    where:

    drive      is the letter of the drive holding the disk with a damaged
                directory.

    filename   is the name of the file that will be reconstructed,
                optionally preceded by a drive and/or path; wildcard
                characters are not permitted.

Description

    The RECOVER command partially rescues a file on a disk that has
    developed bad sectors by deleting the bad sectors from the file.
    RECOVER can also reconstruct files (including files stored in
    subdirectories) from a disk that has a damaged directory.

    When RECOVER is used with a filename, the file is read allocation unit
    by allocation unit; unreadable allocation units are marked as bad and
    are no longer allocated to the file. The resulting file is usable,
    although the data contained in the bad allocation units is lost. (The
    recovered file may or may not be reusable by the specific application
    that created it.) The directory entry for filename is also adjusted
    to reflect the sectors that were lost and the bad sectors are marked
    in the disk's file allocation table so that they are not reused for
    another file.

    If a disk's directory is damaged, it still may be possible to recover
    all the files on the disk and build a new directory by using RECOVER
    with drive as the only command-line parameter. RECOVER completely
    erases the previous contents of the damaged directory and constructs
    new directory entries for each of the original files by inspecting the
    disk's file allocation table. The recovered files receive names of the
    form FILEnnnn.REC, starting with FILE0001.REC. Each recovered file's
    size is always a multiple of the disk cluster size, so recovered files
    may require editing to eliminate spurious data at the ends of the
    files.

    RECOVER restores each subdirectory as an individual file that contains
    the names of the files originally stored in it. The actual files
    contained within those subdirectories are also reconstructed, although
    they are no longer associated with the subdirectory in which they
    originally resided. Restored files and subdirectories, regardless of
    their location on the damaged disk, are placed in the new root
    directory. If there are more files on the damaged disk than can be
    contained in the new root directory (for example, more than 112 for a
    5.25-inch, 360 KB floppy disk), the user must repeat the RECOVER
    command after copying the already-recovered files to another disk and
    deleting them from the damaged disk.

Examples

    To recover the file MENUMGR.C in the current directory of the current
    drive, type

    C>RECOVER MENUMGR.C  <Enter>

    To recover all files on the disk in drive B, which has a damaged
    directory, type

    C>RECOVER B:  <Enter>

Messages

    n file(s) recovered
    When RECOVER is used on a disk with a damaged directory, this
    informational message is displayed at the conclusion of processing to
    indicate how many files of the form FILEnnnn.REC were
    constructed.

    n of n bytes recovered
    When RECOVER is used on a damaged file, this informational message is
    displayed at the conclusion of processing to advise how many bytes of
    the file were recovered.

    Cannot RECOVER a Network drive
    Files on a drive assigned to a network cannot be recovered.

    File not found
    The file specified in the command line cannot be found or does not
    exist.

    Incorrect DOS version
    The version of RECOVER is not compatible with the version of MS-DOS
    that is running.

    Invalid drive or file name
    An invalid drive letter was specified or the filename contains a
    wildcard.

    Invalid number of parameters
    More than one drive letter or filename was specified in the command
    line.

    Press any key to begin recovery of the
    file(s) on drive X
    This prompt message gives the user the opportunity to change disks
    after the RECOVER program is loaded but before processing
    begins.

    Warning - directory full
    New directory entries for the reconstructed files cannot be created
    because the root directory is full. Copy the recovered files to
    another disk, delete them from the damaged disk, and then repeat the
    RECOVER command on the damaged disk.



RENAME or REN
1.0 and later
Change Filename
Internal


Purpose

    Changes the name of a file or set of files.

Syntax

    RENAME [drive:][path]oldname newname

    or

    REN [drive:][path]oldname newname

    where:

    oldname         is the name of an existing file or set of files,
                    optionally preceded by a drive and/or path; wildcard
                    characters are permitted.

    newname         is the new name to be assigned to oldname; wildcard
                    characters are permitted, but a drive and/or path
                    cannot be specified.

Description

    The RENAME command changes the name of an existing file or set of
    files. It does not make copies of files or move files from one
    location in the disk's directory structure to another or from one
    drive to another.

    The oldname parameter can refer to a single file or can include
    wildcards to specify a set of files; a drive and path can be included
    as part of oldname.

    The newname parameter specifies the new name to be given to the file
    or files; it cannot include a drive or path. A wildcard in newname
    causes that portion of the original filename to be left unchanged. If
    the new name for a file is the same as the name of an existing file,
    RENAME terminates with an error message.

Examples

    To rename the file REVS.DOC, located in the current directory of the
    current drive, to CHANGES.TXT, type

    C>RENAME REVS.DOC CHANGES.TXT  <Enter>

    or

    C>REN REVS.DOC CHANGES.TXT  <Enter>

    To rename all files with a .DOC extension in the \SOURCE directory on
    the disk in drive D to have a .TXT extension, type

    C>REN D:\SOURCE\*.DOC *.TXT  <Enter>

Messages

    Duplicate file name or File not found
    The new name specified for a file already exists or a file with the
    old name cannot be found or does not exist.

    Invalid directory
    The command line included a reference to a directory that is invalid
    or does not exist.

    Invalid drive specification
    The command line included a reference to a disk drive that is invalid
    or does not exist in the system.

    Invalid number of parameters
    The command line included too few or too many filenames.

    Invalid parameter
    The newname parameter in the command line included a drive and/or
    path.



REPLACE
3.2
Update Files
External


Purpose

    Selectively adds or replaces files on a disk.

Syntax

    REPLACE [drive:]pathname [drive:][path] [/A][/D][/P][/R][/S][/W]

    where:

    pathname        is the name and location of the source files to be
                    transferred, optionally preceded by a drive;
                    wildcard characters are permitted in the filename.

    drive:path      is the destination for the file being transferred;
                    filenames are not permitted in the destination
                    parameter.

    /A              transfers only those source files that do not exist
                    at the destination (cannot be used with /S or /D).

    /D              transfers only those source files with a more recent
                    date than their destination counterparts (cannot be
                    used with /A).

    /P              prompts the user for confirmation before each file is
                    transferred.

    /R              allows REPLACE to overwrite destination read-only
                    files.

    /S              searches all subdirectories of the destination
                    directory for a match with the source files (cannot
                    be used with /A).

    /W              causes REPLACE to wait for the disk to be changed
                    before transferring files.

Description

    The REPLACE utility allows files to be updated easily to more recent
    versions. REPLACE examines the source and destination directories and,
    depending on the switches used in the command line, selectively
    updates matching files or copies only those files that exist on the
    source disk but not the destination disk.

    The pathname parameter (the source) specifies the name and location
    of the files to be transferred (optionally preceded by a drive);
    wildcards are permitted in the filename. The drive:path parameter
    (the destination) specifies the location of the files to be replaced
    and can consist of a drive, a path, or both. If only a drive is
    specified as the destination, REPLACE assumes the current directory of
    the disk in that drive. If the destination is omitted completely,
    REPLACE assumes the current drive and directory. The /S switch causes
    REPLACE to also search all subdirectories of the destination directory
    for files to be replaced.

    The /A, /D, and /P switches allow selective replacement of files on
    the destination disk. When the /A switch is used, REPLACE transfers
    only those files on the source disk that do not exist in the
    destination directory. When the /D switch is used, REPLACE transfers
    only those source files that match the destination filenames but have
    a more recent date than their destination counterparts. (The /D switch
    is not available with the PC-DOS version of REPLACE.) The /P switch
    causes REPLACE to prompt the user for confirmation before each file is
    transferred.

    The /R switch allows the replacement of read-only as well as normal
    files. If the /R switch is not used and one of the destination files
    that would otherwise be replaced is marked read-only, the REPLACE
    program terminates with an error message. (REPLACE cannot be used to
    update hidden or system files.)

    The /W switch causes REPLACE to pause and wait for the user to press
    any key before beginning the transfer of files. This allows the user
    to change disks in floppy-disk systems with no fixed disk and in those
    cases where the REPLACE program itself is present on neither the
    source nor the destination disk.

Return Codes

    0     The REPLACE operation was successful.
    1     An error was found in the REPLACE command line.
    2     No matching files were found to replace.
    3     The source or destination path was invalid or does not
            exist.
    5     One of the files to be replaced was marked read-only and
            the /R switch was not included in the command line.
    8     Memory was insufficient to run the REPLACE command.
    15     An invalid drive was specified in the command line.
    Other  Standard MS-DOS error codes (returned on a failed Interrupt
            21H file-function request).

Examples

    To replace the files in the directory \SOURCE on the current drive
    with all matching files on the disk in drive A that have a more recent
    date, type

    C>REPLACE A:*.* \SOURCE /D  <Enter>

    To transfer from the disk in drive A only those files that are not
    already present in the current directory, type

    C>REPLACE A:*.* /A  <Enter>

Messages

    n File(s) added
    After the replacement operation is completed, if the /A switch was
    used in the command line, REPLACE displays the total number of files
    added.

    n File(s) replaced
    After the replacement operation is completed, REPLACE displays the
    total number of files processed.

    Access denied `pathname'
    One of the files to be replaced on the destination disk is marked
    read-only and the /R switch was not included in the command
    line.

    Add pathname? (Y/N)
    The /A and /P switches were specified in the command line and REPLACE
    prompts the user for confirmation before adding each file.

    Adding pathname
    The /A switch was specified in the command line and REPLACE displays
    the name of each file it adds.

    File cannot be copied onto itself `pathname'
    The source and destination command-line parameters specified the same
    file in the same location.

    Incorrect DOS Version
    The version of REPLACE is not compatible with the version of MS-DOS
    that is running.

    Insufficient disk space
    The destination disk does not have enough available space to hold the
    files being added or replaced.

    Insufficient memory
    The system does not have enough RAM available to process the REPLACE
    command.

    Invalid drive specification `X:'
    The command line specified a disk drive that is invalid or does not
    exist in the system.

    Invalid parameter `switch'
    The command line included a switch that is not supported by the
    REPLACE command.

    No files added
    The /A switch was used and the specified file(s) already exist on the
    destination disk.

    No files found `pathname'
    The files to be added or replaced on the destination disk were not
    found on the source disk.

    No files replaced
    The files at the destination are identical with the files on the
    source disk or do not meet the criteria specified by the
    switches.

    Parameters not compatible
    The command line included two or more switches that cannot be used
    together.

    Path not Found `pathname'
    The source or destination parameter included a nonexistent path or
    directory.

    Path too long
    The source or destination parameter included a path element that is
    too large (probably because of a missing backslash character
    [\]).

    Press any key to begin adding file(s)
    The /W and /A switches were specified in the command line and REPLACE
    waits for the user to press a key before proceeding, allowing disks to
    be changed.

    Press any key to begin replacing file(s)
    The /W switch was specified in the command line and REPLACE waits for
    the user to press a key before proceeding, allowing disks to be
    changed.

    Replace pathname? (Y/N)
    The /P switch was specified in the command line and REPLACE prompts
    the user for confirmation before replacing the file.

    Replacing pathname
    This informational message indicates the progress of the REPLACE
    command by displaying the name of each file as it is being
    replaced.

    Source path required
    Although the destination parameter can usually be omitted and defaults
    to the current drive and directory, the source location for the files
    to be replaced must always be specified.

    Unexpected DOS Error n
    This message usually indicates a bad or damaged disk. Use the CHKDSK
    command to determine the problem.



RESTORE
2.0 and later
Restore Backup Files
External


Purpose

    Restores files from a disk created with the BACKUP command.

Syntax

    RESTORE drive1: [drive2:][pathname] [/A:date] [/B:date] [/E:time]
    [/L:time][/M][/N][/S][/P]

    where:

    drive1          is the drive that contains the backup files created
                    by the BACKUP command.

    drive2          is the drive to which the backup files will be
                    restored.

    pathname        is the name of the file(s) to be restored from
                    drive1;  wildcard characters are permitted in the
                    filename. If a path is used, a filename must be
                    specified.

    /A:date         restores files that were modified on or after date.

    /B:date         restores files that were modified on or before date.

    /E:time         restores files modified at or before time.

    /L:time         restores files modified at or after time.

    /M              restores only files modified since the last backup.

    /N              restores only files that no longer exist on the
                    destination disk.

    /P              prompts the user for confirmation before restoring
                    hidden or read-only files or before overwriting
                    files that have changed since they were last backed
                    up.

    /S              restores all files in the subdirectories of the
                    specified directory, in addition to the files in the
                    specified directory.

    Note: The PC-DOS version of RESTORE supports only the /P and /S
    switches.

Description

    The RESTORE command restores files from a backup disk or directory
    created with the BACKUP command to their original location in a
    directory structure. Before version 3.1, the RESTORE command could
    restore files only  from one floppy disk to another or from a floppy
    disk to a fixed disk. With later versions, RESTORE can also restore
    files from one fixed disk to another or from a fixed disk to a floppy
    disk.

    The drive1 parameter specifies the source for the backed-up files. If
    the source disk is a fixed disk, the backup files are always obtained
    from the directory \BACKUP. If multiple floppy disks were used to hold
    the backed-up files, RESTORE prompts the user for each disk as it is
    required.

    The destination can be any combination of a drive, a path, and a
    filename; the filename can include wildcards. If the destination drive
    is omitted, MS-DOS assumes the current drive. If a path is not
    specified, the files are restored to the current directory. (Note that
    files must be restored to the same directory they were backed up
    from.) If a path is specified, a filename must be specified as well.
    If neither a path nor a filename is included in the command line, all
    directories, subdirectories, and files on the backup disk(s) are
    restored to the destination disk. The /S switch can be used to force
    restoration of the files in all the subdirectories of a named
    directory.

    Files are restored in the order they were backed up, regardless of
    their current order on the destination disk. If files with the same
    name and location already exist on the destination disk, they are
    replaced by the backup copies.

    The RESTORE program supports a number of switches that allow selective
    restoration of files from the backup disk. The /A:date, /B:date,
    /E:time, and /L:time switches allow files to be restored based on
    the time and/or date they were backed up. The /M switch restores only
    those files that have been changed on the destination disk since the
    backup disk was created. The /P switch prompts the user before
    restoring a hidden or read-only file or a file that has been changed
    since it was last backed up.

    The MS-DOS and PC-DOS RESTORE programs are compatible except when a
    /A:date, /B:date, /E:time, /L:time, /M, or /N switch is used. These
    switches are not supported in the PC-DOS version.

    Warning: The RESTORE command should not be used on a disk drive
    affected by an ASSIGN, SUBST, or JOIN command.

Return Codes

    0     The restore operation was successful.
    1     No files were found to restore.
    2     Some files were not restored because of a file-sharing conflict
        (versions 3.0 and later).
    3     The restore operation was terminated by the user.
    4     The program was terminated by an unrecoverable (critical)
        hardware error.

Examples

    To restore the file named MENUMGR.C from the backup disk in drive A to
    the directory named \SOURCE on the disk in drive B, type

    C>RESTORE A: B:\SOURCE\MENUMGR.C  <Enter>

    To restore all the files on the backup disk in drive A to their
    original locations in the directory structure of drive C, type

    C>RESTORE A: C:\*.* /S  <Enter>

    To restore all the files with the extension .C from the backup disk in
    drive A to the directory named \SOURCE on drive C, requesting
    confirmation for those files that are read-only or hidden, type

    C>RESTORE A: C:\SOURCE\*.C /P  <Enter>

Messages

    *** Files were backed up at time on date ***
    This informational message shows when the BACKUP command was used on
    the backed-up files.

    *** Not able to restore file ***
    The backup file or the destination disk contains an error. Use the
    CHKDSK command to determine the problem.

    *** Restoring files from drive X: ***
    Diskette: n
    This informational message indicates the progress of the RESTORE
    command.

    DOS 2.0 or later required
    RESTORE does not work with versions of MS-DOS earlier than 2.0.

    File creation error
    The destination directory is full. This usually occurs only if the
    destination is the root directory but can also happen if a file is
    being restored to a subdirectory and the disk itself is full.

    Incorrect DOS version
    The version of RESTORE is not compatible with the version of MS-DOS
    that is running.

    Insert backup diskette n in drive X:
    Strike any key when ready
    This message prompts the user to insert the next backup disk in
    sequence. Disks used in multidisk backups should always be labeled and
    numbered during a BACKUP operation.

    Insert restore target diskette in drive X:
    Strike any key when ready
    This prompt is displayed when files are being restored to a floppy
    disk.

    Insufficient memory
    Available memory is not sufficient for the RESTORE program to
    execute.

    Invalid drive specification
    The command line included a drive that is invalid or does not exist in
    the system.

    Invalid number of parameters
    The command line included too many or too few parameters.

    Invalid parameter
    The command line included an invalid switch or other parameter.

    Invalid path
    The destination parameter included a path that is invalid or does not
    exist.

    Restore file sequence error
    Files are being restored from a multidisk set of backup disks and a
    floppy disk was used out of order.

    Source and target drives are the same
    Files cannot be restored from a drive to the same drive.

    Source does not contain backup files
    The files on the backup disk are not in the special format used by the
    BACKUP and RESTORE programs.

    System files restored
    Target disk may not be bootable
    The backup disk included copies of the hidden operating-system files
    MSDOS.SYS and IO.SYS (or IBMDOS.COM and IBMBIO.COM in PC-DOS) and
    these files were restored to the destination disk. The destination
    disk is bootable only if these two files are the first files on the
    disk and IO.SYS (or IBMBIO.COM) is written into contiguous
    clusters.

    Target is full
    The destination disk is full and no further files can be
    restored.

    Target is Non-Removable
    The disk to which files are being restored is not removable.

    The last file was not restored
    The destination disk is full or the last file on the backup disk was
    bad.

    Warning!  Diskette is out of sequence
    Replace diskette or continue if okay
    Files are being restored from a multidisk set of backup disks and a
    floppy disk was used out of order.

    Warning! File filename
    is a hidden file
    Replace the file (Y/N)?
    The backed-up file has the same filename as a hidden file on the
    destination disk, which may be overwritten. (This message appears
    only if the /P switch was used.) Respond with Y to overwrite the
    file on the destination disk; respond with N to leave the destination
    file unchanged and continue the RESTORE operation.

    Warning! File filename
    is a read-only file
    Replace the file (Y/N)?
    The backed-up file has the same name as a read-only file on the
    destination disk, which may be overwritten. (This message appears only
    if the /P switch was used.) Respond with Y to overwrite the file on
    the destination disk; respond with N to leave the destination file
    unchanged and continue the RESTORE operation.

    Warning! File filename
    was changed after it was backed up
    Replace the file (Y/N)?
    Data has been changed or added to the destination file since the
    backup disk was created and this data will be lost if the file is
    restored. (This message appears only if the /P switch was used.)
    Respond with Y to restore the backed-up file; respond with N to
    leave the destination file unchanged and continue the RESTORE
    operation.

    Warning! No files were found to restore
    No files were found on the backup disk that matched the destination
    file specification.



RMDIR or RD
2.0 and later
Remove Directory
Internal


Purpose

    Removes an empty directory from the hierarchical file structure.

Syntax

    RMDIR [drive:][path]directory_name

    or

    RD [drive:][path]directory_name

    where:

    directory_name         is the name of the directory to be removed,
                            optionally preceded by a drive and/or path.

Description

    The RMDIR command removes an empty directory from a disk's
    hierarchical file structure. The directory being deleted cannot
    contain any files or subdirectories (except for the special . and ..
    entries). The root directory or current directory of a disk cannot be
    deleted.

    If the path parameter is used, it must specify a valid existing path.
    If no path is specified and directory_name is not preceded by a
    backslash (\), MS-DOS assumes that the directory to be removed is a
    subdirectory of the current directory. If no path is specified and
    directory name is preceded by a backslash, MS-DOS assumes that the
    directory is a subdirectory of the root directory. The length of the
    full path (including the drive designator and directory name) must not
    exceed 63 characters.

    The RMDIR command should not be used to remove subdirectories from
    drives affected by an ASSIGN or JOIN command. A directory affected by
    the SUBST command cannot be removed.

    Note: If a directory contains files marked as hidden or system, that
    directory cannot be removed even though no files appear to exist when
    the directory contents are viewed using the DIR command.

Example

    To remove the empty directory \LIB, which is a subdirectory of the
    \MSC directory on the disk in drive A, type

    C>RMDIR A:\MSC\LIB  <Enter>

    or

    C>RD A:\MSC\LIB  <Enter>

Message

    Invalid path, not directory, or directory not empty
    The named directory cannot be deleted because it does not exist, some
    element of the path to the directory does not exist, or the directory
    contains files or subdirectories.



SELECT
IBM
Configure System Disk for a Specific Country
External


Purpose

    Creates a system disk with time, date, and keyboard configured for a
    selected country. This command is available only with PC-DOS.

Syntax

    SELECT [[drive1:] drive2:[path]] country keyboard

    where:

    drive1          is a floppy-disk drive (A or B) containing the
                    distribution disk or, at a minimum, the PC-DOS
                    system files, COMMAND.COM, and the FORMAT and XCOPY
                    utilities (default = drive A) (version 3.2).

    drive2          is the drive containing the disk to receive the PC-
                    DOS system files and country information and can
                    include a path (default = drive B) (version 3.2).

    country         is a code from the table below that controls the
                    time, date, and currency formats.

    keyboard        is a code from the table below that controls the
                    keyboard configuration.

╓┌───────────────────────────┌────────────────┌──────────────────────────────╖
    Country                Country Code     Keyboard Code
    ──────────────────────────────────────────────────────────────────────
    Australia              061
    Belgium                032
    Canadian French        002
    Denmark                045
    Finland                358
    France                 033              FR
    West Germany           049              GR
    Israel                 972
    Italy                  039              IT
    Middle East            785
    Netherlands            031
    Norway                 047
    Portugal               351
    Spain                  034              SP
    Sweden                 046
    Switzerland            041
    United Kingdom         044              UK
    United States          001              US

Description

    The SELECT utility allows the user to create a bootable system disk
    configured for a particular country's keyboard layout and date, time,
    and currency formats without performing these steps separately.

    Version 3.2 of SELECT uses the FORMAT command to format the disk in
    drive2, then uses the XCOPY command to copy all files on the disk in
    drive1 (including the hidden system files) to drive2. If a country
    configuration other than one of the six KEYBxx utilities supplied on
    the distribution disk is specified, SELECT prompts the user to insert
    the disk containing the appropriate file.

    Versions 3.0 and 3.1 of SELECT use the DISKCOPY program to copy all
    files on the disk in drive A (including the hidden system files) to
    the disk in drive B, formatting the disk if necessary.

    All versions then add the appropriate CONFIG.SYS and AUTOEXEC.BAT
    files to the new disk to configure PC-DOS for use with the specified
    keyboard and country configuration. The specified configuration does
    not take effect until the computer is turned on or restarted using the
    new disk.

Examples

    To create a PC-DOS system disk configured for West Germany using
    version 3.0 or 3.1, place a copy of the original PC-DOS distribution
    disk in drive A and a blank disk in drive B; then type

    A>SELECT 049 GR  <Enter>

    During the copy operation, the usual DISKCOPY prompts and messages are
    displayed. When the copy operation is complete, the two disks are
    compared using DISKCOMP, producing the usual DISKCOMP prompts and
    messages. The resulting disk includes all the files from the
    distribution disk (including the hidden system files), a CONFIG.SYS
    file that contains the line

    COUNTRY=049

    and an AUTOEXEC.BAT file that contains the following lines:

    KEYBGR
    ECHO OFF
    CLS
    DATE
    TIME
    VER

    To create a PC-DOS system disk configured for West Germany using
    version 3.2, place a copy of the original PC-DOS distribution disk in
    drive A and a blank disk in drive B; then type

    A>SELECT 049 GR  <Enter>

    SELECT first uses the FORMAT command to format the disk in drive B,
    then uses XCOPY to copy all files on the distribution disk (including
    the system files), and finally creates a CONFIG.SYS file that contains
    the line

    COUNTRY=049

    and an AUTOEXEC.BAT file that contains the following lines:

    PATH \;
    KEYBGR
    ECHO OFF
    CLS
    DATE
    TIME
    VER

Messages

    Cannot execute X:filename
    One of the files needed by SELECT (FORMAT, DISKCOPY, DISKCOMP, or
    XCOPY) is not on the source disk or is a version that is not
    compatible with the version of PC-DOS that is running.

    File creation error
    The root directory of the destination disk is full or unable to
    contain any more files or one of the files being created has the same
    name as a directory already on the destination disk.

    Incorrect DOS version
    The version of SELECT is not compatible with the version of PC-DOS
    that is running (version 3.2).

    Incorrect number of parameters
    Too many or too few parameters were specified in the command line or a
    separator character was omitted between two parameters (version
    3.2).

    Insert DOS diskette in drive A:
    Strike any key when ready
    This message prompts the user to insert the distribution disk
    containing the system files and COMMAND.COM into drive A (version
    3.2).

    Insert KEYBxx.COM diskette in drive X
    Strike any key when ready
    The user responded Y to a previous prompt asking if KEYBxx is on
    another disk. This message prompts the user to insert that disk into
    the specified drive (version 3.2).

    Insert target diskette in drive A:
    Strike any key when ready
    This message prompts the user to insert the disk that will become the
    country-specific system disk into drive A (versions 3.0 and
    3.1).

    Insert target diskette in drive B:
    Strike any key when ready
    This message prompts the user to insert the disk that will become the
    country-specific system disk into drive B (version 3.2).

    Invalid country code
    The country code given in the command line is not supported by this
    version of PC-DOS or is not a valid country code.

    Invalid drive specification
    One of the drives specified in the command line is invalid or does not
    exist in the system (version 3.2).

    Invalid keyboard code
    The keyboard code given in the command line is not supported by this
    version of PC-DOS or is not a valid keyboard code.

    Invalid parameter
    One of the parameters specified in the command line is invalid or is
    not supported by the version of SELECT that is running (version
    3.2).

    Invalid path
    The path specified for drive2 is invalid, contains invalid
    characters, or is longer than 63 characters (version 3.2).

    Is KEYBxx.COM on another diskette (Y/N)?
    The keyboard reconfiguration file for the specified country is not on
    the source disk. Respond with Y to cause SELECT to prompt for the
    disk containing the keyboard file after the FORMAT operation is
    completed; respond with N to terminate the SELECT command (version
    3.2).

    Keyboard routine not found.
    The user responded N to a previous prompt asking if KEYBxx is on
    another disk (version 3.2).

    SELECT is used to install DOS the first
    time. Select erases everything on the
    specified target and then installs DOS.
    Do you want to continue (Y/N)
    This message warns the user that the specified disk will be formatted
    and all files on the source disk will be copied over. Respond with Y
    to continue; respond with N to terminate the SELECT command (version
    3.2).

    Unable to copy keyboard routine
    An error occurred while the KEYBxx.COM program was being copied. Use
    the CHKDSK command to check the keyboard program on the source disk
    for damage (version 3.2).

    Unable to create directory
    The directory specified in the command line was not created because a
    directory with the same name already exists on the destination disk,
    the root directory of the destination disk is full, one of the
    directory names specified in the path does not exist, or a file with
    the same name already exists (version 3.2).



SET
2.0 and later
Set Environment Variable
Internal


Purpose

    Defines an environment variable and a string that is its value.

Syntax

    SET [name=value]

    or

    SET name=

    where:

    name       is a string of characters that defines an environment
                variable; lowercase letters are automatically converted
                to uppercase.

    value      is a string of characters, a pathname, or a filename that
                defines the current value of name; no case conversion is
                made for value.

Description

    The environment is a series of null-terminated ASCII (ASCIIZ) strings
    that contains environment variables and their values. (An environment
    variable associates a string consisting of a filename, a pathname, or
    other literal data with a symbolic name that can be referenced by
    programs. The form of the association is name=value.) The original, or
    master, environment belongs to the command processor and is
    established when the system is turned on or restarted. When a program
    is subsequently executed by the command processor or by another
    program, the new program inherits a private copy of its parent's
    environment.

    The SET command enables the user to add, change, or delete an
    environment variable from the command processor's environment. If
    value is not included in the SET command, MS-DOS deletes the
    environment variable name from the environment. If the SET command is
    issued with no parameters, MS-DOS displays the values of all the
    variables in the environment.

    With MS-DOS versions 2.x and 3.x, two particular variables are always
    found in an environment: PATH and COMSPEC. These variables are
    initialized during the system startup process and tell COMMAND.COM
    which subdirectories to search for executable files and where to find
    the transient portion of COMMAND.COM for reloading (versions 3.0 and
    later). (By default, PATH is a null string and therefore searches only
    the current or specified directory.) These special environment
    variables are influenced by the PATH and SHELL commands, respectively,
    but can also be changed with SET commands. Note, however, that
    changing the value of COMSPEC with SET will serve no useful purpose
    changing to a different command processor must be done using an
    appropriate SHELL command in the CONFIG.SYS file (the system must be
    restarted for it to take effect). Note also that it is not necessary
    to use the SET command with the PATH or PROMPT commands--MS-DOS will
    automatically add their new values to the environment if they are
    changed.

    The environment, which can be as large as 32 KB, can be an effective
    source of global configuration information to executing programs. For
    instance, the Microsoft C Compiler and Microsoft Object Linker use
    environment variables to locate include and object library files.
    Environment variables can also be referenced as replaceable parameters
    in batch files, using the form %name%.

    Under normal circumstances, MS-DOS expands the environment as
    necessary when SET commands are entered. However, when a batch file is
    being interpreted or when terminate-and-stay-resident (TSR) utilities
    have been loaded, the size of the command processor's environment
    becomes fixed. Under these circumstances, a SET command may result in
    the error message Out of environment space.

    With version 3.2, the initial size of the environment can be increased
    either by using the COMMAND command with the /P and /E:nnnn switches
    at the system prompt or by including a SHELL command specifying
    COMMAND.COM followed by the /E:nnnn switch in the CONFIG.SYS file.
    See USER COMMANDS: COMMAND; CONFIG.SYS: SHELL.

Examples

    To define the environment variable USER and set its value to FRED,
    type

    C>SET USER=FRED  <Enter>

    To change the value of the environment variable USER to SALLY,
    type

    C>SET USER=SALLY  <Enter>

    To delete the environment variable USER and its value from the
    environment, type

    C>SET USER=  <Enter>

    To display all the environment variables, type

    C>SET  <Enter>

    The output of this command will be in the following form:

    COMSPEC=C:\DOS3\COMMAND.COM
    PROMPT=$p$_$n$g
    PATH=D:\BIN;C:\DOS3;C:\WP\WORD;C:\ASM;C:\MSC\BIN
    INCLUDE=c:\msc\include;c:\windows\lib
    LIB=c:\msc\lib;c:\windows\lib
    TMP=c:\temp
    PCF32=c:\forth\pc32
    PROCOMM=c:\procomm\

Message

    Out of environment space
    The command processor's environment is full and cannot be expanded
    (usually because the SET command was issued from a batch file or the
    system has terminate-and-stay-resident [TSR] utilities
    installed).



SHARE
3.0 and later
Install File-Sharing Support
External


Purpose

    Loads the resident file-sharing support module required by Microsoft
    Networks.

Syntax

    SHARE [/F:n] [/L:n]

    where:

    /F:n       allocates n bytes of memory to hold file-sharing
                information (default = 2048).

    /L:n       configures support for n simultaneous file-region locks
                (default = 20).

Description

    The code that supports file sharing and locking in a networking
    environment is isolated in the user-installable SHARE module. After
    SHARE is loaded, MS-DOS checks all read and write requests against the
    file-sharing module. On personal computers that do not utilize network
    services, the SHARE module need not be loaded, leaving more memory for
    application programs.

    The /F:n switch controls the amount of buffer space allocated for
    file-sharing information. Each open file requires the length of its
    full name, including the path, plus some overhead; the average
    pathname is approximately 20 bytes long. If the /F:n switch is not
    included in the command line, the buffer size defaults to 2048 bytes
    (sufficient for approximately 100 files with pathnames of average
    length).

    The /L:n switch controls the number of entries to be allocated for an
    internal table containing file-locking information. Each active lock
    on a region of a file occupies one entry in the table. If the /L:n
    switch is absent, the default is support for 20 simultaneously active
    locks.

Example

    To install the file-sharing support module, allocating 4096 bytes of
    space for file-sharing information and 40 file-region locks,
    type

    C>SHARE /F:4096 /L:40  <Enter>

Messages

    Incorrect DOS version
    The version of SHARE is not compatible with the version of MS-DOS that
    is running.

    Incorrect parameter
    The command line included an invalid switch.

    Not enough memory
    System memory is insufficient to load the SHARE module or to reserve
    the designated file-sharing information space or file-region locks.

    SHARE already installed
    The SHARE command has already been executed since the system was
    turned on or restarted; additional executions have no effect.



SORT
2.0 and later
Alphabetic Sort Filter
External


Purpose

    Reads records from standard input, sorts them alphabetically, and
    writes the sorted records to standard output.

Syntax

    SORT [/R][/+column]

    where:

    /R              specifies a reverse, or descending, alphabetic sort.

    /+column        specifies the first column to be used for sorting
                    each line (default = 1).

Description

    The SORT program is a filter that reads lines from standard input
    until an end-of-file marker is reached, sorts the lines into
    alphabetic order, and writes the sorted lines to standard
    output.

    Standard input defaults to the keyboard; standard output defaults to
    the video display. Because standard input can be redirected, the SORT
    filter can also accept input from another character device, a file, or
    the piped output of another program or filter. (The most common use of
    SORT is to sort the redirected input from an ASCII text file.)
    Similarly, the output of SORT can be redirected to any character
    device or file or can be piped to another program.

    SORT normally orders the lines of the input text stream alphabetically
    using the entire line, starting with column 1 as the sort key. Tab
    characters are not expanded to spaces. If the character in the sort-
    key column of one line is identical with the character in the sort-key
    column of the next line, SORT checks the next column to the right to
    determine which line will go before the other. If the second columns
    are also identical, the search continues to the right until a
    differing column is found. The maximum amount of data that can be
    sorted is 63 KB.

    The /R switch causes SORT to arrange the set of lines in reverse
    alphabetic order. The /+column switch lets the user specify a column
    other than column 1 as the first sort key.

    With versions 2.x, SORT arranges the input lines based on the ASCII
    value of the character in each line's sort-key column; the sort
    operation is therefore case sensitive. With versions 3.0 and later,
    SORT assigns lowercase letters the same ASCII value as uppercase
    letters; hence, case is effectively ignored. Depending on the COUNTRY
    command in effect (see USER COMMANDS: CONFIG.SYS: COUNTRY), versions
    3.0 and later map accented characters with ASCII codes in the range
    80H through 0E1H (128-225) to their unaccented equivalents for
    sorting.

    Warning: If the output of the SORT command is redirected to a file
    with the same name as the input file, the contents of the input file
    may be destroyed.

Examples

    The examples in this entry operate on an ASCII text file named
    RECORDS.TXT that contains the following lines:

    Smith    Seattle
    Adams    New York
    Zoole    Bellevue
    Jones    Boston

    Each line of the file contains a person's surname, starting in column
    1, and a city name, starting in column 10.

    To sort the file RECORDS.TXT by surname and display the sorted lines
    on standard output, type

    C>SORT < RECORDS.TXT  <Enter>

    This will result in the following display:

    Adams    New York
    Jones    Boston
    Smith    Seattle
    Zoole    Bellevue

    To sort the file RECORDS.TXT by surname and write the sorted lines
    into the file READY.DOC, type

    C>SORT < RECORDS.TXT > READY.DOC  <Enter>

    To sort the file RECORDS.TXT by surname in reverse alphabetic order
    and display the sorted lines on standard output, type

    C>SORT /R < RECORDS.TXT  <Enter>

    This will result in the following display:

    Zoole    Bellevue
    Smith    Seattle
    Jones    Boston
    Adams    New York

    To sort the file RECORDS.TXT by city name and display the sorted lines
    on standard output, type

    C>SORT /+10 < RECORDS.TXT  <Enter>

    This will result in the following display:

    Zoole    Bellevue
    Jones    Boston
    Adams    New York
    Smith    Seattle

    To use SORT as a filter to arrange a directory listing alphabetically,
    type

    C>DIR | SORT  <Enter>

    To use SORT as a filter to arrange a directory listing alphabetically
    based on the first character of each file's extension, type

    C>DIR | SORT /+10  <Enter>

Messages

    Invalid parameter
    One of the parameters specified in the command line is invalid or the
    syntax is incorrect.

    SORT: Incorrect DOS version
    The version of SORT is not compatible with the version of MS-DOS that
    is running.

    SORT: Insufficient disk space
    The output of the SORT filter has been redirected to a file and the
    disk is full.

    SORT: Insufficient memory
    The available system memory is insufficient to run the SORT
    program.



SUBST
3.1 and later
Substitute Drive for Subdirectory
External   No Net


Purpose

    Causes a drive letter to be substituted for a directory name. SUBST is
    present in MS-DOS to support older application programs that do not
    accept pathnames.

Syntax

    SUBST [drive1:[drive2:]path]

    or

    SUBST drive1: /D

    where:

    drive1     is the drive letter to be used to reference the files in
                path.

    drive2     is a drive letter other than drive1 that can optionally
                precede the name of the subdirectory being substituted.

    path       is the subdirectory to be accessed when drive1 is
                referenced, optionally preceded by drive2.

    /D         cancels the effect of a previous SUBST command for drive1.

Description

    The SUBST command allows a drive letter to be substituted for a
    subdirectory name.

    The drive1 parameter can be any valid drive letter except the current
    drive or drive2. Drive letters A through E are always available; drive
    letters beyond E require that an appropriate LASTDRIVE command be
    added to the CONFIG.SYS file and the system be restarted (see USER
    COMMANDS: CONFIG.SYS: LASTDRIVE).

    After a SUBST command, the files on the disk normally referenced by
    drive1 are no longer accessible. However, the files in the location
    specified by path can still be referenced by the usual methods (using
    their actual drive and path) as well as by the substituted drive
    designator.

    If the SUBST command is entered without parameters, MS-DOS displays
    the substitutions currently in effect.

    Warning: The SUBST command masks the actual disk-drive
    characteristics from commands that perform critical disk operations.
    Therefore, ASSIGN, BACKUP, CHKDSK, DISKCOMP, DISKCOPY, FDISK, FORMAT,
    JOIN, LABEL, and RESTORE should not be used on a drive affected by a
    SUBST command. CHDIR, MKDIR, RMDIR, and PATH commands that include the
    affected drive should be used with caution. A network drive cannot be
    named in a SUBST command.

Examples

    To substitute drive B for the directory C:\ASM\SOURCE, type

    C>SUBST B: C:\ASM\SOURCE  <Enter>

    To display the substitutions currently in effect, type

    C>SUBST  <Enter>

    In this case, the SUBST command displays

    B: => C:\ASM\SOURCE

    To cancel the effect of a previous SUBST command that substituted
    drive B for a subdirectory, type

    C>SUBST B: /D  <Enter>

Messages

    Cannot SUBST a network drive
    One or both of the drive parameters in the command line referred to a
    drive that is assigned to a network.

    DOS 2.0 or later required
    SUBST does not work with versions of MS-DOS earlier than 2.0.

    Incorrect DOS version
    The version of SUBST is not compatible with the version of MS-DOS that
    is running.

    Incorrect number of parameters
    The command line included too many or too few parameters.

    Invalid parameter
    The drive named in the command line is invalid, does not exist, is the
    default drive, or is the same as the drive in the path to be
    substituted.

    Not enough memory
    The available system memory is insufficient to run the SUBST
    command.

    Path not found
    An element of the path included in the command line is invalid or does
    not exist.



SYS
1.0 and later
Transfer System Files
External   No Net


Purpose

    Copies the hidden files that contain the operating system from the
    disk in the current drive to another formatted disk.

Syntax

    SYS drive:

    where:

    drive      is the location of the disk that will receive the system
                files. This parameter is required.

Description

    An MS-DOS system disk must contain three files to be bootable: the two
    operating-system files and the command processor. The operating system
    itself is contained in the files IO.SYS and MSDOS.SYS (or IBMBIO.COM
    and IBMDOS.COM in PC-DOS), which must always be the first two files in
    the disk's directory. Both have file attributes set for system and
    hidden (all versions) and read-only (versions 2.0 and later). IO.SYS
    (or IBMBIO.COM) contains the default set of device drivers for the
    system; it must occupy contiguous sectors in the disk's files area.
    MSDOS.SYS (or IBMDOS.COM) contains the kernel of the operating system
    proper. The third required file is the shell, or command processor,
    which by default is COMMAND.COM. This is an unrestricted file and can
    be located anywhere on the disk.

    The SYS command transfers the two operating-system files from the
    default drive to the specified destination disk. The destination disk
    that receives the files must meet one of the following
    requirements:

    ■  The disk is formatted but completely empty.

    ■  The disk currently contains hidden MS-DOS system files that are
        large enough to allow replacement by the new system files.

    ■  The disk has been formatted with the /B switch to reserve room for
        the system files. (Note that /B produces a disk with only eight
        sectors per track.)

    If the disk already contains the two hidden system files, the SYS
    command can be used to transfer an equivalent or later version of MS-
    DOS.

    After the two hidden operating-system files are installed with the SYS
    command, the COMMAND.COM file (or another command processor) must be
    transferred to the destination disk with the COPY command. The
    resulting disk is a bootable system disk.

    Note: Because the two system files have the hidden attribute, they do
    not appear on a directory listing produced by the DIR command. The
    CHKDSK command does report the presence of hidden files on a disk and
    will list their names if the /V switch is used but will not list such
    information as the file size or date and time of creation.

Example

    To transfer a copy of the system files to the disk in drive B,
    type

    C>SYS B:  <Enter>

Messages

    Cannot SYS to a Network drive
    The drive specified in the command line is currently assigned to a
    network.

    Destination disk cannot be booted
    The hidden operating-system files were transferred to the destination
    disk but could not be placed in contiguous sectors.

    Incompatible system size
    The destination disk already contains operating-system files and they
    are smaller than those being copied.

    Incorrect DOS version
    The version of SYS is not compatible with the version of MS-DOS that
    is running.

    Insert destination disk in drive X
    and strike any key when ready
    This message prompts the user to insert the disk onto which the
    operating-system files will be copied into the specified drive.

    Insert system disk in drive X
    and strike any key when ready
    This message prompts the user to insert a disk containing the
    operating-system files into the specified drive.

    Invalid drive specification
    The drive specified in the command line is invalid or does not exist
    in the system.

    Invalid parameter
    The command line contained an invalid drive letter.

    No room for system on destination disk
    Contiguous space at the beginning of the destination disk is
    insufficient for the operating-system files. This can occur when files
    already exist on the destination disk or when sections of the disk are
    marked as unusable by the FORMAT command.

    No system on default drive
    The disk in the default drive does not contain the two hidden system
    files. Replace the disk with a bootable system disk.

    System transferred
    The operating-system files have been successfully transferred to the
    destination disk.



TIME
1.0 and later
Set System Time
Internal


Purpose

    Sets or displays the system time. TIME is an external command with PC-
    DOS version 1.0.

Syntax

    TIME [hh:mm[:ss[.xx]]]

    where:

    hh          is hours (0-23).

    mm          is minutes (0-59).

    ss          is seconds (0-59).

    xx          is hundredths of a second (0-99).

    Note: No spaces are allowed between any of the time parameters.

Description

    All computers that run MS-DOS have as part of their hardware
    configuration a timer, or clock, that maintains the current system
    date and time. One use of this clock, among others, is to insert the
    current date and time into a file's directory entry when the file is
    created or modified.

    The TIME command allows the user to display or modify the current time
    that is being maintained by the system's real-time clock. TIME is also
    executed by MS-DOS when the system is turned on or restarted, unless
    an AUTOEXEC.BAT file is on the system disk, in which case the command
    is executed only if it is included in the AUTOEXEC.BAT file.

    On IBM PC/ATs and compatibles, the TIME command does not permanently
    change the system time stored in the built-in battery-backed
    clock/calendar; the newly entered time is lost when the system is
    turned off or restarted. On these machines, the SETUP program (found
    on the Diagnostics for IBM Personal Computer AT disk or equivalent)
    must be used to permanently alter the clock/calendar's current
    time.

    On IBM PCs, PC/XTs, and compatibles equipped with add-on cards
    containing battery-backed clock/calendar circuitry, it is usually
    necessary to run a time/date installation program (included with the
    card) to set the system date and time from the clock/calendar on the
    card. The TIME command generally has no effect on these card-mounted
    clock/calendars.

    The format of times displayed by the system depends on the current
    country code, which is determined by the optional COUNTRY command in
    the CONFIG.SYS file (see USER COMMANDS: CONFIG.SYS: COUNTRY).
    The default display format is the 24-hour format (00:00-23:59).

Examples

    To display the current time, type

    C>TIME  <Enter>

    This results in output of the following form:

    Current time is 12:49:04.93
    Enter new time:

    To leave the time unchanged, press the Enter key.

    To set the system time to 8:30 P.M., type

    C>TIME 20:30  <Enter>

Messages

    Current time is hh:mm:ss.xx
    This informational message is displayed in response to any valid TIME
    command.

    Invalid parameter
    The delimiter in the time parameter included in the command line was
    not a colon (:) or a period (.).

    Invalid time
    Enter new time:
    An invalid time, time format, or delimiter was specified in the
    command line or in response to the Enter new time: prompt. Note that
    no spaces are allowed around delimiters.



TREE
3.2
Display Directory Structure
External


Purpose

    Displays the hierarchical directory structure of a disk and,
    optionally, the names of the files in each subdirectory. This command
    is included with PC-DOS beginning with version 2.0.

Syntax

    TREE [drive:][/F]

    where:

    drive      is the location of the disk whose directory structure is
                to be displayed.

    /F         displays the filenames in each directory in addition to
                the directory names.

Description

    The TREE command displays on standard output the pathname of each
    directory on the disk in the specified drive, beginning with the
    subdirectories of the root directory. If a disk drive is not
    designated, TREE assumes the current, or default, drive. The name of
    each directory is followed by a list of its subdirectories. If the /F
    switch is included in the command line, the names of the files in each
    subdirectory are also displayed. (Prior to version 3.1, the PC-DOS
    TREE command does not list the files in the root directory if /F is
    used.)

    The output of the TREE command can be redirected to another output
    device or a file or can be piped to another program.

Examples

    Assume that the root directory of the disk in drive B contains three
    subdirectories: \SOURCE, \LIBS, and \DOC. The subdirectory \SOURCE in
    turn contains two subdirectories: \ASM and \PASCAL. To display the
    directory structure of this disk, type

    C>TREE B:  <Enter>

    The TREE command displays the following list:

    DIRECTORY PATH LISTING FOR VOLUME MYDISK

    Path: B:\SOURCE

    Sub-directories:  ASM
                    PASCAL


    Path: B:\SOURCE\ASM

    Sub-directories:  None


    Path: B:\SOURCE\PASCAL

    Sub-directories:  None


    Path: B:\LIBS

    Sub-directories:  None


    Path: B:\DOC

    Sub-directories:  None

    To display the directory structure of the disk in drive B and also
    display all files in each directory, type

    C>TREE B: /F  <Enter>

    To print the directory-structure listing of the disk in drive B on an
    attached printer, type

    C>TREE B: > PRN  <Enter>

    To display the directory structure of the disk in drive B one
    screenful at a time, type

    C>TREE B: | MORE  <Enter>

    For a more compressed listing of all subdirectories on the disk in
    drive B, type

    C>TREE B: | FIND "Path:"  <Enter>

    The output appears in the following form:

    Path: B:\SOURCE
    Path: B:\SOURCE\ASM
    Path: B:\SOURCE\PASCAL
    Path: B:\LIBS
    Path: B:\DOC

Messages

    DOS 2.0 or later required
    TREE does not work with versions of MS-DOS earlier than 2.0.

    Incorrect DOS version
    The version of TREE is not compatible with the version of MS-DOS that
    is running.

    Invalid drive specification
    The drive specified in the command line is invalid or does not exist
    in the system.

    Invalid parameter
    The command line contained a path or filename in addition to a disk
    drive or contained an invalid switch.

    No sub-directories exist
    The specified drive has no subdirectories.



TYPE
1.0 and later
Display File
Internal


Purpose

    Sends the contents of an ASCII text file to standard output.

Syntax

    TYPE [drive:][path]filename

    where:

    filename   is the name of the text file to be displayed, optionally
                preceded by a drive and/or path; wildcard characters are
                not permitted.

Description

    The TYPE command displays the contents of a text file on standard
    output (usually the video display) until it encounters an end-of-file
    character (ASCII code 1AH). Tab characters in the file are expanded to
    spaces with tab stops at each eighth character position. If a file
    contains characters with ASCII values less than 32 or greater than
    127, the resulting display includes graphics characters and other
    unintelligible information.

    The output of the TYPE command can be redirected to another file or
    character device or can be piped to another program.

Examples

    To display the file SHELL.C in the directory \SOURCE on the disk in
    drive A, type

    C>TYPE A:\SOURCE\SHELL.C  <Enter>

    To direct the output of the same file to the printer, type

    C>TYPE A:\SOURCE\SHELL.C > PRN  <Enter>

    The TYPE command can be used with the MORE filter to paginate output.
    For example, to display the contents of the file MENU.ASM one
    screenful at a time, type

    C>TYPE MENU.ASM | MORE  <Enter>

Messages

    File not found
    The file specified in the command line cannot be found or does not
    exist.

    Invalid drive specification
    The drive specified in the command line is invalid or does not exist
    in the system.

    Invalid path or file name
    The path specified in the command line is invalid or does not
    exist.



VDISK.SYS
IBM
Virtual Disk
External


Purpose

    Creates a virtual disk in memory. This installable driver is available
    only with PC-DOS.

Syntax

    DEVICE=[drive:][path]VDISK.SYS [size] [sector] [directory] [/E]
                                                            (version 3.0)
    or

    DEVICE=[drive:][path]VDISK.SYS [size] [sector] [directory] [/E[:max]]
                                                            (version 3.1)

    or

    DEVICE=[drive:][path]VDISK.SYS [comment] [size] [comment] [sector]
    [comment] [directory] [/E[:max]]                         (version 3.2)

where:

    comment         is a string of ASCII characters in the range 32
                    through 126, excluding the slash character (/)
                    (version 3.2).

    size            is the size of the virtual disk in kilobytes (minimum
                    = 1, default = 64).

    sector          is the sector size in bytes (128, 256, or 512;
                    default = 128).

    directory       is the maximum number of entries in the virtual
                    disk's root directory (2-512, default = 64).

    /E              causes VDISK to use extended memory.

    /E:max          causes VDISK to use extended memory and sets the
                    maximum number of sectors (1-8, default = 8) to
                    transfer from extended memory at one time (versions
                    3.1 and later).

    Note: Unless the /E switch is used, the virtual disk is created in
    conventional memory.

Description

    The VDISK.SYS installable device driver allows the configuration of
    one or more virtual disks (sometimes referred to as electronic disks
    or RAMdisks). A virtual disk is implemented by mapping a disk's
    structure--directory, file allocation table, and files area--onto an
    area of random-access memory, rather than onto actual sectors located
    on a magnetic recording medium. Access to files stored in a virtual
    disk is very fast, because no moving parts are involved and the "disk"
    operates at the speed of the system's memory. (The VDISK driver is
    available only with PC-DOS; a similar program named RAMDRIVE.SYS is
    included with MS-DOS.)

    Warning: Because a RAMdisk resides entirely in RAM and is therefore
    volatile, any information stored there is irretrievably lost when the
    computer loses power or is restarted.

    VDISK can create a virtual disk in either conventional memory or
    extended memory. Conventional memory is the term for the up-to-640 KB
    of RAM that contain PC-DOS and any application programs. Extended
    memory is the term for the memory at addresses above 1 MB (100000H)
    that is available on 80286-based personal computers such as the IBM
    PC/AT.

    A virtual disk can be installed in conventional memory by simply
    inserting the line DEVICE=VDISK.SYS into the system's CONFIG.SYS file
    and restarting the system. (If the file VDISK.SYS is not in the root
    directory of the startup disk, it may be preceded by a drive and/or
    path.) A new "drive" then becomes available in the system, with
    default values of 64 KB disk size, 128-byte sectors, and 64 available
    directory entries (assuming there is sufficient memory). The virtual
    disk is assigned the next available drive letter (which is displayed
    in VDISK's sign-on message). The drive letter assigned depends on the
    number of other physical and virtual disks in the system and also on
    the position of the DEVICE=VDISK.SYS line in the CONFIG.SYS file
    relative to other installed block devices. Available memory
    permitting, multiple virtual disks can be created by using multiple
    DEVICE=VDISK.SYS lines. Several optional parameters allow the user to
    customize the size and configuration of the virtual disk and to use
    extended memory if it is available.

    The size parameter specifies the amount of RAM, in kilobytes, to be
    allocated to the virtual disk. The default is 64 KB, but any size from
    1 KB to the total amount of available memory can be specified. If the
    size specified is greater than available memory or less than 1 KB,
    VDISK ignores it and creates a virtual disk of 64 KB. If necessary,
    VDISK also adjusts the size value to ensure that at least 64 KB of
    memory remain available in the system.

    The sector parameter sets the virtual sector size used within the
    virtual disk. The sector value may be 128, 256, or 512 bytes (default
    = 128 bytes). Selection of the smallest sector size results in a
    minimum of wasted virtual disk space per file but also results in
    somewhat slower transfer of data.

    Note: Physical disk devices in IBM PC-compatible systems always use
    512-byte sectors.

    The directory parameter sets the number of available entries in the
    virtual disk's root directory. The allowed range is 2 through 512
    (default = 64). Each directory entry requires 32 bytes. VDISK rounds
    the number of available directory entries up, if necessary, so that an
    integral number of sectors are assigned to the root directory.

    The /E switch causes VDISK to use extended memory for the virtual
    disk, rather than conventional memory. This allows very large virtual
    disks to be configured while still leaving the maximum amount of
    conventional memory available for use by application programs. If the
    /E switch is used and extended memory is not present in the system,
    the VDISK driver will not install itself.

    When /E is used in the form /E:max, the variable max controls how
    many virtual sectors can be transferred at a time from extended
    memory. The value of max must be in the range 1 through 8 (default =
    8). If VDISK operation appears to conflict with the communications
    port or other interrupt-driven peripheral devices, the max variable
    should be set to a smaller number. The max option is available only
    with versions 3.1 and 3.2.

    Note: If VDISK uses conventional memory for virtual disk storage, the
    memory cannot be reclaimed except by modifying the CONFIG.SYS file and
    restarting the system.

Examples

    To create a virtual disk drive with the default values of 64 KB disk
    size, 128-byte sectors, and 64 available directory entries, include
    the command

    DEVICE=VDISK.SYS

    in the CONFIG.SYS file and restart the system.

    To create a 360 KB virtual disk with 512-byte sectors and 112
    available directory entries when the file VDISK.SYS is located in a
    directory named \BIN on drive C, include the command

    DEVICE=C:\BIN\VDISK.SYS 360 512 112

    in the CONFIG.SYS file and restart the system. The directory for this
    virtual disk requires 3584 bytes (112 entries * 32 bytes), or 7
    sectors.

    With version 3.2, comments can be inserted between the values to
    identify them. For example, to create a 1 MB virtual disk drive in
    extended memory with 256-byte sectors and 128 directory entries,
    placing comments before the values to identify them, include the
    command

    DEVICE=VDISK.SYS DISK SIZE: 1024 SECTOR_SIZE: 256 DIR_ENTRIES: 128 /E

    in the CONFIG.SYS file and restart the system.

Messages

    Buffer size adjusted
    No size value was specified or the specified value was larger than
    the amount of available memory.

    Directory entries adjusted
    No directory value was specified, VDISK adjusted the directory value
    up to the nearest sector-size boundary, or the size value was too
    small to hold the file allocation table, the directory, and two
    additional sectors, in which case VDISK adjusted directory downward
    until these conditions were met.

    Invalid switch character
    A slash character (/) was included in a comment or the /E switch was
    entered incorrectly.

    Sector size adjusted
    The sector value was missing from the command line or an incorrect
    value was entered; therefore, VDISK used the default value of 128
    bytes.

    Transfer size adjusted
    A value outside the range 1 through 8 was specified with the /E:max
    switch; therefore, VDISK used the default value of 8.

    VDISK not installed - Extender Card switches
    do not match the system memory size
    The switch settings on the extender card are not correct or the
    extended memory exists in an expansion unit, which VDISK is not
    capable of using.

    VDISK not installed - insufficient memory
    Less than 64 KB of system memory remained after attempted
    installation, the /E switch was specified and the system does not
    contain extended memory, or the amount of available extended memory
    was too small to support the installation of VDISK.

    VDISK Version n.nn virtual disk X:
        Buffer size:nn KB
        Sector size:nnn
        Directory size:nnn
        Transfer size:n

    VDISK was successfully installed and this message informs the user of
    the drive letter assigned to the virtual disk, the version of VDISK
    that created the disk, and the characteristics of the disk. The
    Transfer size: message appears only in versions 3.1 and 3.2 and only
    if the /E switch was used.



VER
2.0 and later
Display Version
Internal


Purpose

    Displays the MS-DOS version number.

Syntax

    VER

Description

    The VER command displays on standard output (usually the video
    display) the number of the MS-DOS version that is running. The version
    number is also displayed as part of the copyright notice when the
    system is turned on or restarted, unless an AUTOEXEC.BAT file is on
    the system disk. (The VER command can be included in the AUTOEXEC.BAT
    file to display the version number, but it will not display the
    copyright information.)

Examples

    To display the MS-DOS version number, type

    C>VER  <Enter>

    On a system that is running MS-DOS version 3.2, the following message
    is displayed:

    MS-DOS Version 3.2

    To print the MS-DOS version number on an attached printer instead of
    displaying it on the screen, type

    C>VER > PRN  <Enter>



VERIFY
2.0 and later
Set Verify Flag
Internal


Purpose

    Sets the system's internal flag controlling verification of disk
    writes.

Syntax

    VERIFY [ON|OFF]

Description

    The VERIFY command sets or clears an internal MS-DOS flag that
    controls verification of data written to disks. (The actual
    verification process is usually carried out by the device driver and
    the disk-drive controller.) The VERIFY ON command has the same effect
    on a global basis as the /V switch has on COPY operations. (When
    VERIFY is on, use of the /V switch with COPY has no additional
    effect.) VERIFY ON remains in effect until a program turns it off with
    a Set Verify system call or until the user types VERIFY OFF at the
    command prompt. The VERIFY command does not affect the operation of
    character devices.

    When the VERIFY command is entered without an ON or OFF, MS-DOS
    displays the current state of the system's internal verify flag. The
    default setting of the verify flag is off.

Examples

    To turn on verification of disk writes, type

    C>VERIFY ON  <Enter>

    To display the current status of the verify flag, type

    C>VERIFY  <Enter>

Messages

    Must specify ON or OFF
    The command line contained an invalid parameter.

    VERIFY is off

    or

    VERIFY is on
    No setting was specified in the command line and VERIFY displays this
    informational message indicating the current status of the verify
    flag.



VOL
2.0 and later
Display Disk Name
Internal


Purpose

    Displays a disk's volume label if one exists.

Syntax

    VOL [drive:]

    where:

    drive     is the location of the disk whose volume label is to be
            displayed.

Description

    The VOL command displays a disk's name, or volume label. If drive is
    not included in the command line, the volume label of the disk in the
    current drive is displayed.

    A volume label can be assigned to a disk when it is formatted by using
    the /V switch with the FORMAT command. A volume label can be added,
    changed, or deleted after a disk has already been formatted by using
    the LABEL command (PC-DOS versions 3.0 and later, MS-DOS versions 3.1
    and later). The CHKDSK, DIR, and TREE commands also display a disk's
    volume label as part of their output.

Example

    To display the volume label for the disk in the current drive,
    type

    C>VOL  <Enter>

    If the disk's name is HARDDISK, the VOL command produces the following
    output:

    Volume in drive C is HARDDISK

Messages

    Invalid drive specification
    The drive specified in the command line is invalid or does not exist
    in the system.

    Volume in drive X has no label
    The disk in the current or specified drive was not previously assigned
    a volume label with the FORMAT or LABEL command.



XCOPY
3.2
Copy Files
External


Purpose

    Copies files and directories, optionally also copying subdirectories
    and the files they contain.

Syntax

    XCOPY source [destination][/A][/D:mm-dd-yy][/E][/M][/P][/S][/V][/W]

    where:

    source          is the name of the file(s) to be copied, optionally
                    preceded by a drive and/or path; wildcard characters
                    are permitted in the filename. If the path is
                    omitted, a drive letter must be specified; this
                    parameter is not optional.

    destination     is the destination location and, optionally, the name
                    for the copied files, and can be preceded by a drive;
                    wildcard characters are permitted in the filename.

    /A              copies only those source files with the archive bit
                    set.

    /D:mm-dd-yy     copies only files modified on or after the specified
                    date. (The date format depends on the COUNTRY command
                    in effect, if any.)

    /E              copies empty subdirectories; if this switch is used,
                    the /S switch must also be specified.

    /M              copies only those files with the archive bit set; also
                    turns off the archive bit of each source file after
                    it is copied.

    /P              prompts the user for confirmation before copying each
                    file.

    /S              copies all nonempty subdirectories of source and the
                    files they contain.

    /V              performs read-after-write verification of destination
                    file(s).

    /W              waits for the user to press a key before copying any
                    files, allowing disks to be changed.

Description

    The XCOPY command copies one or more source files to one or more
    destination files. Unlike the COPY command, however, a single XCOPY
    command can copy all files contained in the entire hierarchical file
    structure of the source disk to the destination disk, creating a
    corresponding set of directories and subdirectories at the destination
    to hold the copied files.

    The source parameter identifies the file or files to be copied. It
    can consist of any combination of a drive, path, and filename
    (optionally including wildcards) but must include either a drive or a
    pathname. If only a drive is specified, all files in the current
    directory of that drive are copied. If a path without a drive or
    filename is specified, all files in the named directory are copied
    from the current drive.

    The destination parameter can also consist of any combination of
    drive, path, and filename. Unless only a single file is being copied
    and it is also being renamed as part of the XCOPY operation,
    destination is usually simply a drive and/or path specifying where to
    place the copied file. If destination includes a filename, XCOPY
    displays a message asking if the specified destination is a file or a
    directory. Depending on the user's response, XCOPY then either copies
    the source file to a destination file with the specified name or
    creates a directory with the specified name and copies the source
    files into it. (Note that if the user responds that the destination is
    to be a file and multiple source files were specified in the command
    line, only the last source file is copied to the specified
    destination.) If no destination is specified, the source file is
    copied to a file with the same name in the current directory of the
    current drive.

    The /A, /D:mm-dd-yy, /M, and /P switches allow selective copying of
    files. The /A switch is used to copy only source files with the
    archive bit set; the /M switch also copies only source files with the
    archive bit set but turns off each source file's archive bit after the
    file is copied. The /D:mm-dd-yy switch is used to copy files that
    were modified on or after a selected date; the date must be entered in
    one of the formats discussed in the entry for the system's DATE
    command or in the format of the COUNTRY command currently in effect
    (see USER COMMANDS: CONFIG.SYS: COUNTRY). The /P switch causes
    XCOPY to prompt the user for confirmation before transferring
    each file.

    The /E and /S switches allow an entire branch of the source disk's
    hierarchical directory structure to be copied. If the /S switch is
    specified, XCOPY copies all nonempty subdirectories of source,
    creating equivalent destination subdirectories, if necessary, to hold
    the files. If the /E switch is specified, XCOPY also duplicates empty
    source subdirectories in the equivalent destination locations. If the
    /E switch is used, the /S switch must also be specified.

    The /V switch causes a Verify call to be issued on the destination
    file(s) to ensure that the data was written correctly. Its effect is
    equivalent to that of the VERIFY ON command.

    Finally, the /W switch causes XCOPY to wait for the user to press a
    key before copying any files, thus allowing an exchange of disks
    before the files are transferred. This is useful in systems without a
    fixed disk, because it allows XCOPY to be used when the program itself
    is not on either the source or the destination disk.

    Note: With MS-DOS versions of XCOPY, the related program MCOPY can be
    created by simply copying the file XCOPY.EXE to a file named MCOPY.EXE
    using the following command:

    C>COPY /B XCOPY.EXE MCOPY.EXE  <Enter>

    What distinguishes MCOPY from XCOPY is the program name; when either
    program is loaded, it looks at the name under which it was invoked and
    reconfigures itself accordingly. MCOPY's behavior is similar to
    XCOPY's, except that MCOPY automatically determines whether the name
    specified as the destination is a file or a directory according to the
    following rules:

    ■  If the source is a directory, the specified destination is a
        directory.

    ■  If the source includes multiple files, the specified destination is
        a directory.

    ■  If the destination name ends with a backslash character (\), the
        specified destination is a directory.

    MCOPY supports all the XCOPY switches.

    Not all implementations of XCOPY can be renamed to MCOPY and function
    accordingly. The PC-DOS version of XCOPY, for example, does not
    support this feature.

Return Codes

    0     No errors were detected during the copy operation.

    1     No files were found to copy.

    2     The copy operation was terminated by a Ctrl-C or Ctrl-Break.

    4     Initialization error occurred: not enough memory, file not
        found, or command-line syntax error.

    5     The copy operation was terminated by an A response to an Abort,
        Retry, Ignore? prompt.

Examples

    To copy all files in the directory C:\SOURCE to the directory
    C:\SOURCE\BACKUP, type

    C>XCOPY C:\SOURCE\*.* C:\SOURCE\BACKUP  <Enter>

    To copy all files and directories on drive C to the disk in drive D,
    type

    C>XCOPY C:\*.* D: /S /E  <Enter>

Messages

    nn File(s) copied
    This informational message is displayed at the completion of an XCOPY
    command and indicates the total number of source files
    processed.

    filename File not found
    The source file specified in the command line is invalid or does not
    exist.

    X:pathname (Y/N)?
    The /P switch was specified in the command line. XCOPY displays the
    name of each file, preceded by a drive (and path, if one was
    specified), and asks for confirmation before copying the file.

    Access denied
    A destination file could not be overwritten because it was marked
    read-only.

    Cannot COPY from a reserved device
    A character device such as AUX or COM1 cannot be the source of an
    XCOPY operation.

    Cannot COPY to a reserved device
    A character device such as PRN cannot be the destination of an XCOPY
    operation.

    Cannot perform a cyclic copy
    The command line included a /S switch and the destination directory is
    a subdirectory of the source directory. A subdirectory cannot be
    copied onto itself.

    Does name specify a file name
    or directory name on the target
    (F = file,  D = directory)?
    The specified destination directory does not already exist; the user
    is prompted to determine whether it should be created. Respond with
    F to copy the source file to a file named name; respond with D to
    create a subdirectory named name and copy the source file into it.

    File cannot be copied onto itself
    The name and location of the source file are the same as the name and
    location of the destination file.

    File creation error
    A destination file or directory could not be created. The destination
    disk may be full.

    Incorrect DOS version
    The version of XCOPY is not compatible with the version of MS-DOS that
    is running.

    Insufficient disk space
    The disk does not contain enough available space to perform the
    specified XCOPY operation.

    Insufficient memory
    The available system memory is insufficient to perform the XCOPY
    operation.

    Invalid date
    The command included a /D switch and the date was not formatted
    properly.

    Invalid drive specification
    The source or destination drive specified in the command line is not
    valid or does not exist in the system.

    Invalid number of parameters
    The command line contained too many or too few filenames or other
    parameters.

    Invalid parameter
    A switch supplied in the command line is not valid.

    Invalid path
    A directory specified in the command line is invalid or does not
    exist.

    Lock Violation
    XCOPY attempted to access a file in use by another program. Respond
    with A to the error-message prompt and try XCOPY later or wait for a
    few minutes and respond with R.

    Path not found
    One of the pathnames specified in the command line is invalid or does
    not exist.

    Path too long
    The path element of the source or destination parameter was longer
    than 63 characters.

    Press any key to begin copying file(s)
    The /W switch was specified in the command line and XCOPY waits for
    the user to press a key before beginning the copy process.

    Reading source file(s)...
    This informational message is displayed during the XCOPY
    operation.

    Sharing violation
    XCOPY attempted to access a file in use by another program. Respond
    with A to the error-message prompt and try XCOPY later or wait a few
    minutes and respond with R.

    Too many open files
    XCOPY failed due to a lack of available system file handles. Increase
    the size of the FILES command in the CONFIG.SYS file, restart the
    system, and attempt the XCOPY command again.

    Unable to create directory
    A destination directory cannot have the same name as an existing file
    in the prospective parent directory.
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
