---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Appendix A: MS-DOS Version 3.3"
permalink: /documents/books/programming/msdos/encyclopedia/appendix-a/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-a/
---

### Appendix A: MS-DOS Version 3.3

{% raw %}

```none
    For the MS-DOS user, version 3.3 incorporates some long-awaited
    capabilities, runs faster in places, and requires about 9 KB more
    memory than version 3.2. Its most apparent changes, however, relate to
    a new, more flexible method of supporting different national
    languages. For the MS-DOS programmer, version 3.3 offers several
    enhancements in the areas of file management and internationalization
    support. This appendix offers an overview of these new features.


Version 3.3 User Considerations

    MS-DOS version 3.3 has introduced several changes at the user level. A
    new external command, FASTOPEN, speeds up the filing system by keeping
    file locations in memory. A new batch command, CALL, lets a batch file
    call another batch file and, when that file terminates, continue
    execution with the next command in the original batch file rather than
    return to MS-DOS as in previous versions. Two commands previously
    present only in PC-DOS, COMP and SELECT, have been added to MS-DOS.
    Five commands have additional capabilities: APPEND, ATTRIB, BACKUP,
    FDISK, and MODE. In addition, the TIME and DATE commands automatically
    set the CMOS clock-calendar on the IBM PC/AT and PS/2 machines, making
    use of the separate SETUP program unnecessary for these functions.
    Changes to the national language support involve four new commands,
    three new options to the MODE command, two new or modified system
    information files, and two new device drivers. Each of these new or
    modified commands is discussed individually below.

The FASTOPEN command

    When MS-DOS searches for a program file, it searches each directory
    specified in the PATH search path. A lengthy path that has to search
    many levels of a directory structure can make this a slow process. The
    FASTOPEN command loads a terminate-and-stay-resident (TSR) program
    that caches the locations of the most recently accessed directories
    and files on one or more fixed disks in the system. The number of
    files and directories to be cached is under the user's control; the
    default is 10. When it needs a file, MS-DOS looks first in the
    FASTOPEN list; if the file is found in the list, MS-DOS can bypass
    inspection of the search path specified by PATH. When the FASTOPEN
    list is filled and a new file is opened, the new file replaces the
    least recently used file on the FASTOPEN list.

    The improvement in file-system performance depends on the number of
    open files and the frequency of file access. The FASTOPEN command can
    be entered only once during a session and, if desired, can be placed
    in the AUTOEXEC.BAT file.

    The FASTOPEN command has two parameters:

    FASTOPEN drive:[=entries][...]

    The drive parameter is the drive letter, followed by a colon, of a
    fixed disk for which FASTOPEN is to keep track of the most recently
    accessed directories and files. More than one drive can be specified
    by separating the drive identifiers with spaces; the maximum is four
    drives. A drive associated with a JOIN, SUBST, or ASSIGN command
    cannot be specified, nor can a drive assigned to a network.

    The optional entries parameter is the number of directory entries
    FASTOPEN is to keep in memory. The value of entries can be from 10
    through 999; the default is 34. If more than one entries value is
    specified, their sum cannot exceed 999. Each entry subtracts 40 bytes
    from the RAM normally available to run application programs.

    Examples: The following command tells MS-DOS to keep track of the last
    50 directories and files on drive C:

    C>FASTOPEN C:=50  <Enter>

    The next command tells MS-DOS to keep track of the last 34 files on
    drives C and D:

    C>FASTOPEN C: D:  <Enter>

Changes to batch-file processing

    Batch-file processing also gains power in MS-DOS version 3.3. The user
    can now suppress the echo of all batch commands and call one batch
    file from another without terminating the first batch file.

@
    With MS-DOS version 3.3, any line in a batch file preceded by @ is not
    echoed to the screen when the batch file is executed.

CALL
    A batch file no longer needs to load an additional copy of COMMAND.COM
    in order to execute another batch file and return control to the
    calling batch file. The CALL command executes a batch file and returns
    to the next command in the calling batch file.

    CALL commands can be nested. If an exit condition is provided, a batch
    file can even call itself; however, the input or output of a called
    batch file cannot be redirected or piped.

    The CALL command has two parameters:

    CALL batch-file [parameters]

    The batch-file parameter is the name of the batch file to be executed.
    The file must be in the current drive and directory or in a drive
    and/or directory specified in the command path.

    The optional parameters parameter represents any parameters that may
    be required by batch-file.

    Example: Suppose the batch file SORTFILE.BAT accepts one parameter.
    The following command calls SORTFILE.BAT, specifying NAMES.TXT as the
    parameter:

    CALL SORTFILE NAMES.TXT

    If NAMES.TXT was specified as a command-line parameter to the calling
    batch file, the CALL command could be

    CALL SORTFILE %1

Commands from PC-DOS

    Two commands have been added to MS-DOS from earlier versions of
    PC-DOS: COMP, present in PC-DOS version 1.0, and SELECT, present in
    PC-DOS version 2.0.

COMP
    The COMP command compares two files or sets of files and reports any
    differences encountered. FC, a similar file-comparison command present
    in MS-DOS versions 2.0 and later, is still included with MS-DOS 3.3.
    See USER COMMANDS: COMP; FC.

    Syntax for the COMP command is

    COMP [drive:][filename1] [drive:][filename2]

    The optional drive parameter is the drive letter, followed by a colon,
    of the drive containing the file to be compared. The filename1
    parameter is the name and location of the file to compare to
    filename2; filename2 is the name and location of the file to be
    compared against. Both filenames can be preceded by a path; wildcard
    characters are permitted in either filename.

    Example: The following command tells MS-DOS to compare the file
    NEWFILE.TXT in the current drive and directory to the file OLDFILE.TXT
    in the \ARCHIVE directory on drive D and report any differences
    encountered:

    C>COMP NEWFILE.TXT D:\ARCHIVE\OLDFILE.TXT  <Enter>

SELECT
    The SELECT command creates a system disk with the time format, date
    format, and keyboard layout configured for a selected country. The
    syntax for SELECT is

    SELECT [[drive1:] [drive2:][path]] [country][keyboard]

    The optional drive1 parameter is the drive containing a disk with the
    MS-DOS operating-system files, the FORMAT program, and the country
    configuration files. The drive2 parameter is the drive containing the
    disk to be formatted with the country-specific information; this drive
    specifier can be followed by a path. The country parameter is a code
    that selects the date and time format; the information is taken from
    the COUNTRY.SYS system file. The keyboard parameter is a code that
    selects the desired keyboard layout. See KEYB below.

    The SELECT command

    ■  Formats the target disk.

    ■  Creates CONFIG.SYS and AUTOEXEC.BAT files on the target disk.

    ■  Copies the contents of the source disk to the destination disk.

    Example: The following command, which assumes drive A contains a valid
    system disk and drive B contains the disk to be formatted, creates a
    bootable system disk that includes country-specific information and
    keyboard layout for Germany:

    C>SELECT A: B: 049 GR  <Enter>

Enhanced commands

    Several existing MS-DOS user commands have been given expanded
    capabilities in version 3.3. These are presented alphabetically in the
    next few pages. See USER COMMANDS: APPEND; ATTRIB; BACKUP; FDISK;
    MODE.

APPEND
    The APPEND command specifies a search path for data files--files whose
    extensions are neither .COM, .EXE, nor .BAT--similar to the command
    path specified by the PATH command, which searches only for executable
    files with those extensions. APPEND has three forms, depending on
    whether it is being entered for the first time. When it is entered the
    first time, the APPEND command now has two optional switches:

    APPEND [/E] [/X]

    The /E switch makes the data path part of the environment, like the
    command path. The data path can then be displayed or changed with both
    the SET and APPEND commands and is inherited by child processes.
    (However, any changes made to the data path by the child process are
    lost when the child returns to its parent process.)

    The /X switch causes calls to the Find First File functions (Interrupt
    21H Functions 11H and 4EH) and the EXEC function (Interrupt 21H
    Function 4BH) to search the data path. If /X is not specified, only
    Interrupt 21H Function 0FH (Open File with FCB), Interrupt 21H
    Function 23H (Get File Size), and Interrupt 21H Function 3DH (Open
    File with Handle) system calls search the data path.

    If either /X or /E is specified the first time APPEND is entered, a
    pathname cannot be included.

    Subsequent uses of the command must take the form

    APPEND [[drive:]path] [;[drive:]path ...]

    or

    APPEND;

    The path parameter is the name of a directory that is to be made part
    of the data path. The user can specify as many directory names as will
    fit in the 128 characters of the command line. Entries must be
    separated by semicolons. If APPEND is followed only by a semicolon,
    any previous APPEND paths are deleted.

    Example: The following two APPEND commands make the data path part of
    the environment and put the directories C:\WORD\PROPOSAL,
    C:\WORD\REPORTS, and C:\123\BUDGET in the data path:

    C>APPEND /E  <Enter>
    C>APPEND C:\WORD\PROPOSAL;C:\WORD\REPORTS;C:\123\BUDGET  <Enter>

    Because the data path usually involves frequently used directories,
    the APPEND command ordinarily is placed in the AUTOEXEC.BAT file.

    Note: APPEND is a new command in PC-DOS version 3.3.

ATTRIB
    The /S switch has been added to the ATTRIB command so that any
    attribute changes can be applied to all files in subdirectories
    contained in the specified directory.

    Example: The following command sets the read-only attribute of all
    files in the directory C:\DOS and in all its subdirectories:

    C>ATTRIB +R C:/DOS /S  <Enter>

BACKUP
    A formatting parameter has been added to the BACKUP command in MS-DOS
    version 3.3. The /F switch tells MS-DOS to format the backup diskette
    if it hasn't been formatted. The /F switch formats the backup diskette
    to the maximum capacity of the backup drive, so a disk of lower
    capacity, such as a 360 KB diskette in a 1.2M drive, should not be
    used. If this switch is used, FORMAT.COM must be available in the
    current drive and directory or in one of the directories named in the
    environment's PATH string.

    Performance of the BACKUP command has also been improved. Instead of
    storing each file separately on the backup disk, BACKUP stores only
    two files: BACKUP.nnn, which contains all the backed-up files, and
    CONTROL.nnn, which contains the pathnames of the backed-up files.

FDISK
    FDISK can now create a new type of MS-DOS partition called an extended
    partition on a fixed disk. An extended partition can contain multiple
    logical drives and allows the use of very large fixed disks. Each
    logical drive is still limited to 32 MB.

    An extended partition is not bootable. In order for the fixed disk to
    be bootable, it must also contain a primary MS-DOS partition that has
    been formatted using the FORMAT command with the /S switch so that it
    contains a system boot record and the operating-system files.

MODE
    The MODE command now supports two additional serial ports (COM3 and
    COM4) and increases the maximum serial transmission rate to 19,200
    baud.

    Some additional options have been added to MODE to support code-page
    switching. See MODE Command Changes below.

New national language support

    The new national language support in MS-DOS version 3.3 replaces the
    methods used in previous versions to change the keyboard layout and
    the display and printer character sets so that more than one language
    could be used. These changes are extensive: four new or modified
    system files, three new commands, four new options for the MODE
    command, a new parameter for the GRAFTABL command, and a new parameter
    for the COUNTRY and DEVICE configuration commands.

Code pages and code-page switching
    The key element of the new national language support is the code page,
    a table of 256 character correspondence codes. MS-DOS recognizes both
    a hardware code page, which is the character correspondence table
    built into a device, and a prepared code page, which is an alternate
    character correspondence table available through MS-DOS. The current
    code page is the code page most recently selected.

    The hardware code page for a device is determined by the country for
    which the device was manufactured. The user selects a prepared code
    page, from a list of five included with MS-DOS version 3.3, by using
    the new CP PREPARE option of the MODE command. See MODE Command
    Changes below.

    The new national language support is often referred to as code-page
    switching because, after the devices and code pages required by the
    system have been defined, the only commands the user must deal with
    simply switch from one code page to another. In order to use the new
    national language support, device drivers must support code-page
    switching and the devices must be able to display the full character
    sets.

    Code pages are numbered. The identifying numbers have no relationship
    to the country code introduced with previous versions of MS-DOS and
    used by the COUNTRY configuration command. Five code pages are
    included with version 3.3:

╓┌───────────────────────┌───────────────────────────────────────────────────╖
    Page Number        Configuration
    ──────────────────────────────────────────────────────────────────
    437                United States
    850                Multilingual
    860                Portugal
    863                Canadian French
    865                Norway/Denmark

    Code page 437 is the character correspondence table used in previous
    versions of MS-DOS. Its character set supports United States English
    and includes many accented characters used in other languages. It is
    the hardware code page for most countries.

    Code page 850 replaces two of the four box-drawing sets and some of
    the mathematical symbols in code page 437 with additional accented
    characters. It supports English and most Latin-based European
    languages.

    Code page 860 is for Portuguese, code page 863 is for Canadian French,
    and code page 865 is for Norwegian/Danish. These pages are the
    hardware code pages for the specified countries.

Setting up the system for code-page switching
    Although several commands are required to manage national language
    support, the process is fairly straightforward. Setting up the system
    requires the following:

    ■  A DEVICE configuration command in CONFIG.SYS to load a driver for
        each device that supports code-page switching.

    ■  An NLSFUNC command in AUTOEXEC.BAT to load the memory-resident
        national language support functions.

    ■  A MODE CP PREPARE command in AUTOEXEC.BAT to prepare code pages for
        each device that supports code-page switching.

    ■  A CHCP command in AUTOEXEC.BAT to select the initial code page.

    ■  Optionally, a KEYB command in AUTOEXEC.BAT to select the initial
        keyboard layout.

    After starting the system with these commands in CONFIG.SYS and
    AUTOEXEC.BAT, only a MODE CP SELECT command is required to change to a
    different language during an MS-DOS session.

    The COUNTRY configuration command is still used to control country-
    specific characteristics such as the time and date format and currency
    symbol. An added parameter in the COUNTRY command lets the user also
    specify a code page. See Modified National Language Support Commands
    below.

The system files
    MS-DOS version 3.3 includes four system files that support the
    national language functions: two device drivers and two system
    information files.

    The device drivers are PRINTER.SYS and DISPLAY.SYS. These drivers
    implement code-page switching for the IBM Proprinter Model 4201 and
    Quietwriter III Model 5202 printers and for the EGA, PC Convertible
    LCD, and PS/2 display adapters. They also support all display adapters
    compatible with the EGA.

    The information files are COUNTRY.SYS, which contains information such
    as time and date formats and currency symbols, and KEYBOARD.SYS, which
    contains the scan-code-to-ASCII translation tables for the various
    keyboard layouts.

The new support commands
    The new national language support in MS-DOS version 3.3 adds three
    MS-DOS commands: Change Code Page (CHCP), Keyboard (KEYB), and
    National Language Support Functions (NLSFUNC).

    CHCP
    The Change Code Page (CHCP) command tells MS-DOS which code page to
    use for all devices that support code-page switching.

    The NLSFUNC command must be executed before the CHCP command can be
    used.

    CHCP is a system-wide command: It specifies the code page used by MS-
    DOS and each device attached to the system that supports code-page
    switching. The CP SELECT option of the MODE command, on the other
    hand, specifies the code page for a single device.

    If the code page specified with CHCP is not compatible with a device,
    CHCP responds

    Code page nnn not prepared for all devices

    If the code page specified with CHCP was not first identified with the
    CP PREPARE option of the MODE command, CHCP responds

    Code page nnn not prepared for system

    The CHCP command has one optional parameter:

    CHCP [code-page]

    The code-page parameter is the three-digit number that specifies the
    code page MS-DOS is to use. If code-page is omitted, CHCP displays the
    current MS-DOS code page.

    Examples: The following command changes the system code page to 850:

    C>CHCP 850  <Enter>

    If the current code page is 850 and CHCP is entered without
    parameters, MS-DOS responds:

    Active code page: 850

    KEYB
    The Keyboard (KEYB) command selects a keyboard layout by changing the
    scan-code-to-ASCII translation table used by the keyboard driver. It
    replaces the KEYBxx commands used in earlier versions of MS-DOS to
    select keyboard layouts.

    The first time KEYB is executed, it loads the memory-resident keyboard
    driver and the translation table, thereby increasing the size of MS-
    DOS by slightly more than 7 KB. Subsequent executions simply load a
    different translation table, which replaces the previously loaded
    translation table and accommodates a different country-specific
    keyboard layout.

    The KEYB command has three optional parameters:

    KEYB [country[,[code-page],kbdfile]]

    The country parameter is one of the following two-character country
    codes:

╓┌───────────────────────┌───────────────────┌───────────────────┌───────────╖
    Country            Code                Country             Code
    ──────────────────────────────────────────────────────────────────
    Australia          US                  Netherlands         NL
    Belgium            BE                  Norway              NO
    Canada                                 Portugal            PO
    English          US                  Spain               SP
    French           CF                  Sweden              SV
    Denmark            DK                  Switzerland
    Finland            SU                    French            SF
    France             FR                    German            SG
    Germany            GR                  United Kingdom      UK
    Italy              IT                  United States       US
    Latin America      LA

    The code-page parameter is the three-digit number that specifies the
    code page defining the character set that MS-DOS is to use.

    If the specified country code and code page aren't compatible, KEYB
    responds:

    Code page requested nnn is not valid for given keyboard code

    If KEYB is entered with no parameters, MS-DOS displays the currently
    active keyboard country code, keyboard code page, and console device
    code page.

    Examples: The following command selects the French keyboard layout,
    code page 850, and the keyboard definition file named
    C:\DOS\KEYBOARD.SYS:

    C>KEYB FR,850,C:\DOS\KEYBOARD.SYS  <Enter>

    If the code page is omitted but the keyboard definition file is
    specified, the comma must be included to show the missing parameter:

    C>KEYB FR,,C:\DOS\KEYBOARD.SYS  <Enter>

    NLSFUNC
    The National Language Support Function (NLSFUNC) command loads a
    memory-resident program that implements code-page switching. It also
    allows the user to name the file that contains country-specific
    information--such as date format, time format, and currency symbol--
    if there is no COUNTRY configuration command in CONFIG.SYS. NLSFUNC
    must be used before the Change Code Page (CHCP) command.

    If national language support is needed for every session, NLSFUNC
    should be placed in the AUTOEXEC.BAT file.

    The NLSFUNC command has one optional parameter:

    NLSFUNC [country-file]

    The country-file parameter is the name of the country information file
    (in most implementations of MS-DOS, COUNTRY.SYS). If country-file is
    omitted, MS-DOS defaults to the name of the country information file
    specified in the COUNTRY configuration command in CONFIG.SYS; if there
    is no COUNTRY configuration command in CONFIG.SYS, MS-DOS looks for a
    file named COUNTRY.SYS in the root directory of the current drive.

    Example: The following command loads the NLSFUNC program and specifies
    C:\DOS\COUNTRY.SYS as the country information file:

    C>NLSFUNC C:\DOS\COUNTRY.SYS  <Enter>

The modified support commands
    The new national language support changes two configuration commands--
    COUNTRY and DEVICE--and two general MS-DOS commands--GRAFTABL and
    MODE.

    COUNTRY
    The COUNTRY configuration command now has three parameters:

    COUNTRY=country-code,[code-page],[country-file]

    The country-code parameter is one of the following three-digit country
    codes (identical to the specified country's international telephone
    prefix):

╓┌───────────────────────┌───────────────────┌───────────────────┌───────────╖
    Country            Code                Country             Code
    ──────────────────────────────────────────────────────────────────
    Arabia             785                 Latin America       003
    Australia          061                 Netherlands         031
    Belgium            032                 Norway              047
    Canada                                 Portugal            351
    English          001                 Spain               034
    French           002                 Sweden              046
    Denmark            045                 Switzerland
    Finland            358                   French            041
    France             033                   German            041
    Germany            049                 United Kingdom      044
    Israel             972                 United States       001
    Italy              039

    The code-page parameter is the three-digit number that specifies the
    code page defining the character set that MS-DOS is to use.

    The country-file parameter is the name of the file that contains the
    country-specific information; the name of the file can be preceded by
    a drive and/or path. If country-file is omitted, MS-DOS defaults to
    the file COUNTRY.SYS, which it looks for in the root directory of the
    current drive.

    The COUNTRY command is not required; if it is not included in
    CONFIG.SYS, MS-DOS defaults to country 001 (US), code page 437, and
    country information file COUNTRY.SYS in the root directory of the
    current drive.

    Example: The following CONFIG.SYS command specifies the French country
    code, code page 850, and C:\DOS\COUNTRY.SYS as the country information
    file:

    COUNTRY=033,850,C:\DOS\COUNTRY.SYS

    DEVICE
    Two options have been added to the DEVICE configuration command that
    allow the user to specify the display and printer drivers that support
    code-page switching.

    The display driver that supports code-page switching is DISPLAY.SYS.
    It supports the IBM Enhanced Graphics Adapter (EGA), the IBM Personal
    System/2 display adapter, and all display adapters compatible with
    either of these. The Monochrome Display Adapter (MDA) and the
    Color/Graphics Adapter (CGA) do not support code-page switching.

    If the ANSI.SYS display driver is also used, the DEVICE command that
    defines it must precede the DEVICE command that defines DISPLAY.SYS.

    When used to specify the display driver, the DEVICE command has five
    parameters:

    DEVICE=driver CON=(type[,[hwcp][,prepcp[,sub-fonts]]])

    The driver parameter is the name of the file that contains the display
    driver; the filename can be preceded by a drive and/or path. If driver
    is omitted, MS-DOS defaults to the file DISPLAY.SYS, which it looks
    for in the root directory of the current drive.

    The type parameter defines the type of display adapter attached to the
    system. It must be one of the following:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Code      Adapter
    ──────────────────────────────────────────────────────────────────
    MONO      Monochrome display/printer adapter
    CGA       Color/graphics adapter
    EGA       Enhanced graphics adapter or IBM Personal System/2 display
            adapter
    LCD       IBM PC Convertible liquid crystal display

    The hwcp parameter is the three-digit number that specifies the
    hardware code page supported by the display adapter:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Code      Configuration
    ──────────────────────────────────────────────────────────────────
    437       United States (default)
    850       Multilingual
    860       Portugal
    863       Canadian French
    865       Norway/Denmark

    The prepcp parameter is the number of additional code pages the
    display can support. These are referred to as prepared code pages and
    must be defined by the CP PREPARE option of the MODE command. If type
    is either MONO or CGA, prepcp must be 0; the default is 0. If type is
    either EGA or LCD, prepcp can be any value from 1 through 12; the
    default is 1. If hwcp is 437, prepcp should be allowed to default to
    1; if hwcp is not 437, prepcp should be set to 2.

    The sub-fonts parameter is the number of subfonts supported for each
    code page. If type is either MONO or CGA, sub-fonts must be 0; the
    default is 0. If type is EGA, sub-fonts can be 1 or 2; the default is
    2. If type is LCD, sub-fonts can be 1 or 2; the default is 1.

    Example: The following CONFIG.SYS command specifies C:\DOS\DISPLAY.SYS
    as the display driver for an EGA whose hardware code page is 437. The
    parameter for prepared code pages is allowed to default to 1 and the
    parameter for subfonts is allowed to default to 2.

    DEVICE=C:\DOS\DISPLAY.SYS CON=(EGA,437)

    The printer driver that supports code-page switching is PRINTER.SYS.
    It supports the IBM Proprinter Model 4201, the IBM Quietwriter III
    Printer Model 5202, and all printers compatible with either of these.

    When used to specify the printer driver, the DEVICE configuration
    command has five parameters:

    DEVICE=driver port=(type[,[hwcp][,prepcp]])

    The driver parameter is the name of the file that contains the printer
    driver; the filename can be preceded by a drive and/or path. If driver
    is omitted, MS-DOS defaults to the file PRINTER.SYS, which it looks
    for in the root directory of the current drive.

    The port parameter is the MS-DOS device name of the printer port being
    defined: LPT1 (or PRN), LPT2, or LPT3. A different set of type, hwcp,
    and prepcp parameters can be specified for each of the three printer
    ports.

    The type parameter defines the type of printer attached to the printer
    port. It must be one of the following:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Code      Printer
    ──────────────────────────────────────────────────────────────────
    4201      IBM Proprinter Model 4201
    5202      IBM Quietwriter III Printer Model 5202

    The hwcp parameter is a three-digit number that specifies the hardware
    code page supported by the hardware:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Code      Configuration
    ──────────────────────────────────────────────────────────────────
    437       United States (default)
    850       Multilingual
    860       Portugal
    863       Canadian French
    865       Norway/Denmark

    If type is 5202, two hardware code-page numbers can be specified,
    enclosed in parentheses and separated by a comma. If two hardware code
    pages are specified, prepcp must be 0.

    The prepcp parameter is the number of additional code pages (referred
    to as prepared code pages) for which MS-DOS must reserve buffer space;
    its value can be from 0 through 12. These additional code pages must
    be defined by the CP PREPARE option of the MODE command. If hwcp is
    437, prepcp should be set to 1; if hwcp is not 437 and only one hwcp
    value is specified, prepcp should be set to 2.

    Examples: The following CONFIG.SYS command defines C:\DOS\PRINTER.SYS
    as the printer driver for the PRN device. The printer is an IBM
    Proprinter Model 4201 whose hardware code page is 437, and MS-DOS is
    instructed to allow for one prepared code page:

    DEVICE=C:\DOS\PRINTER.SYS PRN=(4201,437,1)

    The next CONFIG.SYS command defines C:\DOS\PRINTER.SYS as the printer
    driver for ports LPT1 and LPT2. The printer attached to LPT1 is the
    same as in the previous command; the printer attached to LPT2 is an
    IBM Quietwriter III Printer Model 5202 with two hardware code pages
    (437 and 850). For the second printer, MS-DOS is instructed to allow
    for no prepared code pages.

    DEVICE=C:\DOS\PRINTER.SYS LPT1=(4201,437,1) LPT2=(5202,(437,850),0)

    GRAFTABL
    The GRAFTABL command now has two forms:

    GRAFTABL  [code-page]

    or

    GRAFTABL /STATUS

    The first form of the command loads a code page for the color/graphics
    adapter (CGA) so that its character set matches that used by MS-DOS
    and other devices when displaying the upper 128 characters. The code-
    page parameter is the three-digit number that specifies the code page
    defining the character set that GRAFTABL is to use.

    The /STATUS switch causes GRAFTABL to display the name of the graphics
    character set table currently in use.

    MODE
    National language support adds four options to the MODE command:

╓┌───────────────────────────┌───────────────────────────────────────────────╖
    Option                 Action
    ──────────────────────────────────────────────────────────────────
    CODEPAGE               Displays the code pages available and active.
    CODEPAGE PREPARE       Defines the code pages selected for use.
    CODEPAGE REFRESH       Restores code-page contents damaged by hardware
                            error or other causes.
    CODEPAGE SELECT        Selects a code page for a particular device.

    (CODEPAGE can be abbreviated to CP in the command line.)

    When used to display the status of the code pages, the MODE command
    has one parameter:

    MODE device CP

    The device parameter is the name of the device whose code-page status
    is to be displayed. It can be CON, PRN, LPT1, LPT2, or LPT3.

    Example: The following command displays the status of the console
    device:

    C>MODE CON CP  <Enter>

    When used to define the code page or pages to be used with a device,
    the MODE command has three parameters:

    MODE device CP PREPARE=(code-page font-file)

    The device parameter is the name of the device for which the code page
    or pages are to be prepared. It can be CON, PRN, LPT1, LPT2, or LPT3.

    The code-page parameter is one or more of the three-digit numbers,
    enclosed in parentheses, that specify the code page to be used with
    device. If more than one code-page number is specified, the numbers
    must be separated with spaces.

    The font-file parameter is the name of the code-page file that
    contains the font information for device. The files provided for IBM
    devices include

╓┌─────────────────┌─────────────────────────────────────────────────────────╖
    File         Device
    ──────────────────────────────────────────────────────────────────
    EGA.CPI      IBM Enhanced Graphics Adapter (EGA) and EGA-compatible
                display adapters
    4201.CPI     IBM Proprinter Model 4201
    5202.CPI     IBM Quietwriter III Printer Model 5202
    LCD.CPI      IBM Convertible liquid crystal display

    Example: Assume the display is attached to an EGA. The following
    command prepares code pages 437 and 850 for the console, specifying
    C:\DOS\EGA.CPI as the code-page information file:

    C>MODE CON CP PREPARE=((437 850) C:\DOS\EGA.CPI)  <Enter>

    When used to select a code page for a device, the MODE command has two
    parameters:

    MODE device CP SELECT=code-page

    The device parameter is the name of the device for which the code page
    is to be selected. Permissible values are CON, PRN, LPT1, LPT2, and
    LPT3.

    The code-page parameter is the three-digit number that specifies the
    code page to be used with device.

    Example: The following command selects code page 850 for the console:

    C>MODE CON CP SELECT=850  <Enter>

Setting up code-page switching for an EGA-only system
    Figure A-1 shows the commands required to implement the new national
    language support for a system that includes only a display attached to
    an EGA or EGA-compatible adapter. The hardware code page of the EGA is
    437 (United States English) and the system is set up to handle code
    pages 437 and 850. All MS-DOS files are assumed to be in the directory
    \DOS on the disk in drive C. If the ANSI.SYS driver is not used, the
    configuration command DEVICE=C:\DOS\ANSI.SYS should be omitted from
    CONFIG.SYS; if ANSI.SYS is used, however, the DEVICE configuration
    command that defines it must precede the DEVICE configuration command
    that defines DISPLAY.SYS.


    Commands in CONFIG.SYS:
    COUNTRY=001,437,C:\DOS\COUNTRY.SYS
    DEVICE=C:\DOS\ANSI.SYS
    DEVICE=C:\DISPLAY.SYS CON=(EGA,437,1)

    Commands in AUTOEXEC.BAT:
    NLSFUNC C:\DOS\COUNTRY.SYS
    MODE CON CP PREPARE=((437 850) C:\DOS\EGA.CPI)
    MODE CON CP SELECT=437
    KEYB US,437,C:\DOS\KEYBOARD.SYS

    Figure A-1. Setup commands for a system with an EGA only.


    When the system is started, code page 437 is selected for MS-DOS, the
    display, and the keyboard. To change to code page 850 during the
    session, simply type

    C>CHCP 850  <Enter>

Setting up code-page switching for a PS/2 and printer
    Figure A-2 shows the commands required to implement the new national
    language support for an IBM Personal System/2 or compatible system
    that includes both a PS/2, EGA, or EGA-compatible display adapter and
    an IBM Proprinter Model 4201. The hardware code page of both devices
    is 437 (United States English) and the system is set up to handle code
    pages 437 and 850.


    Commands in CONFIG.SYS:
    COUNTRY=001,437,C:\DOS\COUNTRY.SYS
    DEVICE=C:\DOS\ANSI.SYS
    DEVICE=C:\DISPLAY.SYS CON=(EGA,437,1)
    DEVICE=C:\DOS\PRINTER.SYS PRN=(4201,437,1)

    Commands in AUTOEXEC.BAT:
    NLSFUNC C:\DOS\COUNTRY.SYS
    MODE CON CP PREPARE=((437 850) C:\DOS\EGA.CPI)
    MODE PRN CP PREPARE=((437 850) C:\DOS\4202.CPI)
    MODE CON CP SELECT=850
    MODE PRN CP SELECT=850
    KEYB US,850,C:\DOS\KEYBOARD.SYS

    Figure A-2. Setup commands for a PS/2 with display and printer.


    Again, all MS-DOS files are assumed to be in the directory \DOS on the
    disk in drive C. If the ANSI.SYS driver is not used, the configuration
    command DEVICE=C:\DOS\ANSI.SYS should be omitted from CONFIG.SYS; if
    ANSI.SYS is used, however, the DEVICE configuration command that
    defines it must precede the DEVICE configuration command that defines
    DISPLAY.SYS.


Version 3.3 Programming Considerations

    The changes introduced in MS-DOS version 3.3 that are of primary
    interest to the programmer include

    ■  New Interrupt 21H function calls for file management and
        internationalization support

    ■  An extension to the definition of the MS-DOS IOCTL function for
        code-page switching, plus the addition of the underlying device-
        driver support

    ■  Support for extended MS-DOS partitions on fixed disks

    Each of these areas is discussed in detail below.

New file-management functions

    MS-DOS version 3.3 includes two new Interrupt 21H file-management
    functions: Set Handle Count (Function 67H) and Commit File (Function
    68H).

Set Handle Count
    The Set Handle Count function (Interrupt 21H Function 67H) allows a
    single process to have more than 20 handles for files or devices open
    simultaneously. Function 67H is invoked by issuing a software
    Interrupt 21H with

    AH   = 67H
    BX   = number of desired handles

    On return,

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX   = error code

    For each process, the operating system maintains a table that relates
    handle numbers for the process to MS-DOS's internal global table for
    all open files in the system. In MS-DOS versions 3.0 and later, the
    per-process table is ordinarily stored within the reserved area of the
    program segment prefix (PSP) and has only enough room for 20 handle
    entries. If 20 or fewer handles are requested in register BX, Function
    67H takes no action and returns a success signal. If more than 20
    handles are requested, however, Function 67H allocates on behalf of
    the calling program a new block of memory that is large enough to hold
    the expanded table of handle numbers and then copies the process's old
    handle table to the new table. Because the function will fail if the
    system does not have sufficient free memory to allocate the new block,
    most programs need to make a call to Interrupt 21H Function 4AH
    (Resize Memory Block) to "shrink" their initial memory block
    allocations before calling Function 67H.

    Function 67H does not fail if the number requested is larger than the
    available entries in the system's global table for file and device
    handles. However, a subsequent attempt to open a file or device or to
    create a new file will fail if all the entries in the system's global
    file table are in use, even if the requesting process has not used up
    all its own handles. (The size of the global table is controlled by
    the FILES entry in the CONFIG.SYS file. See USER COMMANDS: CONFIG.SYS:
    FILES; PROGRAMMING IN THE MS-DOS ENVIRONMENT: PROGRAMMING FOR MS-DOS:
    File and Record Management.)

    Example: Set the maximum handle count for the current process to 30,
    so that the process can have as many as 25 files or devices open
    simultaneously (5 of the handles are already expended by the MS-DOS
    standard devices when the process starts up). Note that a FILES=30 (or
    greater value) entry in the CONFIG.SYS file also is required for the
    process to successfully open 30 files or devices.

        .
        .
        .
        mov     ah,67h          ; Function 67H = set handle count.
        mov     bx,30           ; Maximum number of handles.
        int     21h             ; Transfer to MS-DOS.
        jc      error           ; Jump if function failed.
        .
        .
        .

Commit File
    The Commit File function (Interrupt 21H Function 68H) forces all data
    in MS-DOS's internal buffers that is associated with a given handle to
    be written to disk and forces the corresponding disk directory and
    file allocation table (FAT) information to be updated. By calling this
    function at appropriate points within its execution, a program can
    ensure that newly entered data will not be lost if there is a power
    failure, if the program crashes, or if the user fails to terminate the
    program properly before turning off the machine. Function 68H is
    called by issuing a software Interrupt 21H with

    AH   = 68H
    BX   = handle for previously opened file.

    On return,

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX = error code

    The effect of Function 68H is equivalent to closing and reopening the
    file or to duplicating a file handle with Interrupt 21H Function 45H
    (Duplicate File Handle) and then closing the duplicate. See
    PROGRAMMING IN THE MS-DOS ENVIRONMENT: PROGRAMMING FOR MS-DOS: File
    and Record Management. However, Function 68H has the advantages that
    the application will not lose control of the file (as could happen
    with the close-open sequence in a networking environment) and that it
    will not fail because of a lack of handles (as the duplicate handle
    method might).

    Note: Function 68H operations requested on a handle associated with a
    character device return a success flag but have no effect.

    Example: Assume that the file MYFILE.DAT has been opened previously
    and that the handle for the file is stored in the variable fhandle.
    Call Function 68H to ensure that any data in MS-DOS's internal buffers
    associated with the handle is written out to disk and that the
    directory and FAT are up-to-date.

    fname   db      'MYFILE.DAT',0  ; ASCIIZ filename.
    fhandle dw      ?               ; Handle from Open operation.
            .
            .
            .
            mov     ah,68h          ; Function 68H = commit file.
            mov     bx,fhandle      ; Handle from previous open.
            int     21h             ; Transfer to MS-DOS.
            jc      error           ; Jump if function failed.
            .
            .
            .

New internationalization support functions

    MS-DOS version 3.3 includes two new Interrupt 21H internationalization
    support functions: Get Extended Country Information (Function 65H) and
    Select Code Page (Function 66H).

Get Extended Country Information
    The Get Extended Country Information function (Interrupt 21H Function
    65H) returns a superset of the internationalization information
    obtained with Interrupt 21H Function 38H (Get/Set Current Country).
    Function 65H is called by issuing a software Interrupt 21H with

    AH      = 65H
    AL      = information ID code:
            = 01H    get general internationalization information
            = 02H    get pointer to uppercase table
            = 04H    get pointer to filename uppercase table
            = 06H    get pointer to collating sequence table
    BX      = code page of interest (active CON device = -1)
    CX      = length of buffer to receive information (error returned
            if less than 5)
    DX      = country ID (default = -1)
    ES:DI   = address of buffer to receive information

    On return,

    If function is successful:

    Carry flag is clear.

    Requested data is in calling program's buffer.

    If function is not successful:

    Carry flag is set.

    AX      = error code

    Function 65H may fail if either the country code or the code-page
    number is invalid or if the code page does not match the country code.
    If the buffer to receive the information is at least 5 bytes but is
    too short for the requested information, the data is truncated and no
    error is returned.

    The format of the data returned by Subfunction 01H in the calling
    program's buffer is

╓┌─────────────────────────────────────────────────┌─────────────────────────╖
    Field                                        Size
    ──────────────────────────────────────────────────────────────────
    Information ID code (01H)                    Byte
    Length of following buffer (38 or less)      Word
    Country ID                                   Word
    Code-page number                             Word
    Date format                                  Word
    Currency symbol                              5 bytes
    Thousands separator                          Word
    Decimal separator                            Word
    Date separator                               Word
    Time separator                               Word
    Currency format flags                        Byte
    Digits in currency                           Byte
    Time format                                  Byte
    Monocase routine entry point                 Doubleword
    Data list separator                          Word
    Reserved                                     10 bytes

    See SYSTEM CALLS: INTERRUPT 21H: Function 38H.

    The format of the data returned by Subfunctions 02H, 04H, and 06H is

╓┌─────────────────────────────────────────────────┌─────────────────────────╖
    Field                                        Size
    ──────────────────────────────────────────────────────────────────
    Information ID code (02H, 04H, or 06H)       Byte
    Pointer to table                             Doubleword

    The uppercase and filename uppercase tables are 130 bytes. The first 2
    bytes contain the size of the table; the subsequent 128 bytes contain
    the uppercase equivalents, if any, for character codes 80H through
    0FFH. The main use of these tables is to map accented or otherwise
    modified vowels to their plain vowel equivalents. Text translated
    using these tables can be sent to devices that do not support the IBM
    graphics character set or can be used to create filenames that do not
    require a special keyboard configuration for entry.

    The collating table is 258 bytes. The first 2 bytes contain the table
    length and the next 256 bytes contain the values to be used for the
    corresponding character codes (0-0FFH) during a sort operation. Among
    other things, this table maps uppercase and lowercase ASCII characters
    to the same collating codes (so that sorts will be case insensitive)
    and maps accented vowels to their plain vowel equivalents.

    Note: In some cases, a truncated translation table might be presented
    to the program by MS-DOS. Applications should always check the length
    specified at the beginning of the table to be sure the table contains
    a translation code for the character of interest.

    Example: Obtain the extended country information associated with the
    default country and code page 437.

    buffer  db      41 dup (0)      ; Receives country information.
            .
            .
            .
            mov     ax,6501h        ; Function = get extended info.
            mov     bx,437          ; Code page.
            mov     cx,41           ; Length of buffer.
            mov     dx,-1           ; Default country.
            mov     di,seg buffer   ; ES:DI = buffer address.
            mov     es,di
            mov     di,offset buffer
            int     21h             ; Transfer to MS-DOS.
            jc      error           ; Jump if function failed.
            .
            .
            .

    In this case, MS-DOS fills the following extended country information
    into the buffer:

    buffer  db      1               ; Information ID code
            dw      38              ; Length of following buffer
            dw      1               ; Country ID (USA)
            dw      437             ; Code-page number
            dw      0               ; Date format
            db      '$',0,0,0,0     ; Currency symbol
            db      ',',0           ; Thousands separator
            db      '.',0           ; Decimal separator
            db      '-',0           ; Date separator
            db      ':',0           ; Time separator
            db      0               ; Currency format flags
            db      2               ; Digits in currency
            db      0               ; Time format
            dd      026ah:176ch     ; Monocase routine entry point
            db      ',',0           ; Data list separator
            db      10 dup (0)      ; Reserved

    Example: Obtain the pointer to the uppercase table associated with the
    default country and code page 437.

    buffer  db      5 dup (0)       ; Receives pointer information.
            .
            .
            .
            mov     ax,6502h        ; Function = get pointer to
                                    ; uppercase table.
            mov     bx,437          ; Code page.
            mov     cx,5            ; Length of buffer.
            mov     dx,-1           ; Default country.
            mov     di,seg buffer   ; ES:DI = buffer address.
            mov     es,di
            mov     di,offset buffer
            int     21h             ; Transfer to MS-DOS.
            jc      error           ; Jump if function failed.
            .
            .
            .

    In this case, MS-DOS fills the following values into the buffer:

    buffer  db      2               ; Information ID code
            dw      0204h           ; Offset of uppercase table
            dw      1140h           ; Segment of uppercase table

    The table at 1140:0204H contains the following data:

        0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F  0123456789ABCDEF
1140:0200             80 00 80 9A 45 41 8E 41 8F 80 45 45      ....EA.A..EE
1140:0210 45 49 49 49 8E 8F 90 92 92 4F 99 4F 55 55 59 99  EIII.....O.OUUY.
1140:0220 9A 9B 9C 9D 9E 9F 41 49 4F 55 A5 A5 A6 A7 A8 A9  ......AIOU......
1140:0230 AA AB AC AD AE AF B0 B1 B2 B3 B4 B5 B6 B7 B8 B9  ................
1140:0240 BA BB BC BD BE BF C0 C1 C2 C3 C4 C5 C6 C7 C8 C9  ................
1140:0250 CA CB CC CD CE CF D0 D1 D2 D3 D4 D5 D6 D7 D8 D9  ................
1140:0260 DA DB DC DD DE DF E0 E1 E2 E3 E4 E5 E6 E7 E8 E9  ................
1140:0270 EA EB EC ED EE EF F0 F1 F2 F3 F4 F5 F6 F7 F8 F9  ................
1140:0280 FA FB FC FD FE FF                                ......

Select Code Page
    The Select Code Page function (Interrupt 21H Function 66H) queries or
    selects the current code page. Function 66H is called by issuing a
    software Interrupt 21H with

    AH   = 66H
    AL   = subfunction:
        = 01H    get code page
        = 02H    select code page
    BX   = code page to select if AL = 02H

    On return,

    If function is successful:

    Carry flag is clear.

    If AL was 01H on call:

    BX   = active code page
    DX   = default code page

    If function is not successful:

    Carry flag is set.

    AX   = error code

    When Subfunction 02H is used, MS-DOS gets the new code page from the
    COUNTRY.SYS file. The device must be previously prepared for code-page
    switching by including the appropriate DEVICE command in the
    CONFIG.SYS file and by issuing the NLSFUNC and MODE CP PREPARE
    commands (usually by placing them in the AUTOEXEC.BAT file).

    Example: Force the active code page to be the same as the system's
    default code page-that is, return to the code page that was active
    when the system was first booted.

            .
            .
            .
            mov     ax,6601h        ; Function = get code page.
            int     21h             ; Transfer to MS-DOS.
            jc      error           ; Jump if function failed.

            mov     bx,dx           ; Force active page = default.

            mov     ax,6602h        ; Function = set code page.
            int     21h             ; Transfer to MS-DOS.
            jc      error           ; Jump if function failed.
            .
            .
            .

Extension of IOCTL

    The MS-DOS IOCTL service (Interrupt 21H Function 44H) and its device-
    driver underpinnings have been extended to support code-page switching
    by the interactive CHCP and MODE commands or by application programs.
    The relevant IOCTL subfunction is 0CH (Generic IOCTL for Handles). An
    MS-DOS utility or application program gains access to this subfunction
    by executing a software Interrupt 21H with

    AH      = 44H
    AL      = 0CH
    BX      = handle for character device
    CH      = category code:
            = 00H    unknown
            = 01H    COM1, COM2, COM3, or COM4
            = 03H    CON (keyboard and video display)
            = 05H    LPT1, LPT2, or LPT3
    CL      = function (minor) code:
            = 4AH    select code page
            = 4CH    start code-page preparation
            = 4DH    end code-page preparation
            = 6AH    query selected code page
            = 6BH    query prepare list
    DS:DX   = pointer to Generic IOCTL parameter block

    On return,

    If function is successful:

    Carry flag is clear.

    If function is not successful:

    Carry flag is set.

    AX      = error code:
            = 01H    invalid function number
            = 19H    bad data read from font file
            = 22H    unknown command
            = 26H    code page not prepared or selected
            = 27H    code page conflict or device or code page not
                    found in file
            = 29H    device error
            = 31H    file contents not a valid font or no previous
                    "start code-page preparation" call

    Additional information about the cause of the error can be obtained
    with a call to Interrupt 21H Function 59H (Get Extended Error
    Information).

    The parameter blocks for minor codes 4AH, 4DH, and 6AH have the
    following format:

╓┌───────────────────────────────────────────────┌───────────────────────────╖
    Field                                      Size
    ──────────────────────────────────────────────────────────────────
    Length of following data                   Word
    Code page ID                               Word

    The parameter block for minor code 4CH has the following format:

╓┌────────────────────────────────────────────────┌──────────────────────────╖
    Field                                       Size
    ──────────────────────────────────────────────────────────────────
    Flags                                       Word

    Length of remainder of parameter            Word
    block (2[n+1])

    Number of code pages in the
    following list (n)                          Word

    Code page 1                                 Word

    Code page 2                                 Word
    .
    .
    .
    Code page n                                 Word

    The parameter block for minor code 6BH has the following format,
    assuming n hardware code pages and m prepared code pages (n <= 12,
    m <= 12):

╓┌─────────────────────────────────────────────────┌─────────────────────────╖
    Field                                        Size
    ──────────────────────────────────────────────────────────────────
    Length of following data (2[n+m+2])          Word
    Number of hardware code pages (n)            Word
    Hardware code page 1                         Word
    Hardware code page 2                         Word
    .
    .
    .
    Hardware code page n                         Word
    Number of prepared code pages (m)            Word
    Prepared code page 1                         Word
    Prepared code page 2                         Word
    .
    .
    .
    Prepared code page m                         Word

    After a Start Code-Page Preparation (minor code 4CH) call, the program
    must write the data defining the code-page font to the driver using
    one or more IOCTL Send Control Data to Character Device (Interrupt 21H
    Function 44H Subfunction 03H) calls. The format of the data is both
    device-specific and driver-specific. After the font data has been
    written to the driver, the program must issue an End Code-Page
    Preparation (minor code 4DH) call. If no data is written to the driver
    between the start and end calls, the driver interprets the newly
    prepared code pages as hardware code pages.

    A special variation of Start Code-Page Preparation, called "refresh,"
    is required to actually load the peripheral device with the prepared
    code pages. The refresh operation is obtained by calling minor code
    4CH with each code-page position in the parameter block set to -1 and
    then immediately calling minor code 4DH.

    The device-driver support that corresponds to IOCTL Subfunction 0CH is
    invoked by the MS-DOS kernel via the Generic IOCTL function (driver
    command code 19). The category (major) and function (minor) codes
    described above, along with a pointer to the parameter block, are
    passed to the driver in the request header. See  PROGRAMMING IN THE
    MS-DOS ENVIRONMENT: CUSTOMIZING MS-DOS: Installable Device Drivers.

Extended MS-DOS partitions

    An extended MS-DOS partition is indicated by a system indicator byte
    value of 05 in the partition table of the fixed disk's master boot
    record. See  PROGRAMMING IN THE MS-DOS ENVIRONMENT: STRUCTURE OF
    MS-DOS: MS-DOS Storage Devices. An extended partition is not
    bootable and can be created on a bootable fixed-disk drive only
    if that drive already contains a primary MS-DOS partition (system
    indicator type 01 or 04). Fixed disks that are not bootable can
    contain an extended partition without a primary partition.

    An extended partition is subdivided into extended logical disk
    volumes, each consisting of an extended boot record and a logical
    block device. The extended boot record is analogous in structure to
    the partition table for the fixed disk as a whole; it contains a
    logical drive table describing the volume and a pointer to the next
    extended logical volume. The logical block device is an image of a
    normal MS-DOS disk, including a master block (logical sector 0
    containing the BPB describing the device), root directory, FAT, and
    files area. Each extended volume must start and end on a cylinder
    boundary.

                                                            Van Wolverton
                                                                Ray Duncan
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
