---
layout: page
title: "PC-SIG Diskette Library (Disk #1608)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1608/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1608"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## @TELL.TXT

{% raw %}
```
Help is avalible for the following Commands / programs:
ARC             ASSIGN          BACKUP          CAT             CHD
CHDIR or CD     CHKDSK          CHMOD           CLS             COMP
COPY            CTTY            DATE            DEL             DI
DIR             DISKCOMP        DISKCOPY        ERASE           EXCLUDE
EXE2BIN         FI              FIND            FORMAT
GRAPHICS        INFODIR         MKDIR or MD     MODE            MORE
PATH            PAUSE           PRINT           PROMPT          RECOVER
REM             REN             RESTORE         RMDIR or RD     SIZE
SORT            SYS             TELL            TIME            TREE
TYPE            VER             VERIFY          VOLUME          XTREE
YESNO

Norton Utilities:
DS    DT    FA    FF    LP    NE   NU    QU    SA    SI    TM    TS    UD    VL
WIPEDISK        WIPEFILE


             This is a shareware program - if you like it please
             send $10 to P.O. Box 942 WODEN ACT 2606 AUSTRALIA

@ARC  [aufvxp]d:filename [filespecs]
        compress file specified in file specs
        FILENAME - name of archive file
        A - add all files to archive
        U - update existing archive - add non existent files,
                                    - rearchive files changed since last
        F - update existing archive with files that have changed
                                DO NOT ADD ANY NEW FILES
        V - view list of files in archive
        X - Extract files from archive matching filespecs
        P - Print an archived file without extracting
                        use >PRN: if you want a print of it
@ASSIGN [x=y[...]]
        (External)
        Routes a request to a different drive
@BACKUP [d:][path][filename[.ext]] d:  [/S][/M][/A][/D:date]
        (External)
        Backs up files on fixed disk - YOU MUST SPECIFY TARGET DRIVE
        /S - act on subdirectories as well
        /M
        /A - all files that were referenced after date
        /D - all files that were changed after date

@CAT /C/G/Q/U
     (External) To print covers for your floppy disks.
            It prompts for the  drive, and the title to print on  the
            cover. When it has printed a cover, it will prompt for
            another. Entering ESC will cause it to terminate.

            The program needs a file PR.DEF in the default drive that
            tells it how to set the printer to compressed print. You
            can edit this file from CAT

            /G - your monitor is not IBM compatible and the program
                 should use Bios calls
            /Q - your monitor is the old CGA type and displays snow
                 without this option
            /C - you have manually set your printer to compressed, so
                 the program is not to send any print commands
            /U - print all dates in US format (mm/dd/yy) and not
                 European format (dd/mm/yy)

        These switches MUST BE CAPITAL LETTERS if you use them. If you
        do not need them then do not specify them.
@CHD  <new directory> /B/G/L/Q
     (External)  Changes to the directory starting with the letters
     typed for its first parameter, or goes to full screen mode and
     displays all directories for you to select. It saves the
     directory in a file CHD.DIR for quick start.

     You can create new directories, delete them, or set them to be
     hidden from DOS commands, or Unhide them, or even rename them
     from the full screen mode.

        /B - use black and white colors
        /G - use Generic bios calls
        /L - load disk directory
        /Q - eliminate snow on older CGA
@CHKDSK [drive]
     (External)  Checks the directory of the disk in
     the current or specified drive for errors.

       CHKDSK B:

        /F allows fixing of errors encountered

@CHMOD d:[path][filename][.ext] [+-S][+-R][+-H][+-A][+-V]
     (external) Changes file attributes [see also FA]
     displays file attributes if not shown

@COPY source filename [target filename] [/A][/B][/V]
     (internal) Copies one or more files to the same directory as
     the  source (giving them different filenames) or to  another
     directory (giving them the same or different filenames).  To
     leave  the  filename the same,  omit the filename  from  the
     target filename. If you omit /A and /B, /B is used.

     /A  source file:  treats the file as an ASCII file (text  or
     data file). target file: adds an EOF character to the end of
     the file.

     /B  source file:  treats the file as a binary file  (program
     file).  target file:  does not add an EOF character tohe end
     of the file.

     /V verifies the sectors written to disk.

       COPY memos.txt /A B:corr.txt


@DATE [mm/dd/yy]
     (internal)  Enters or changes the system date,  or  displays
     the current date.

     mm/dd/yy  specifies the month,  day,  and year to set as the
     date.

       DATE 02/19/84

@DEL [filename]
      (internal) Deletes all files with the designated filename.

       DEL text.txt

@DI <drive> /B/G/R/U
     (External) This program is used to display a menu of programs,
     batch files, and directories on your hard disk. These may be
     saved in a file with prompts and parameters for subsequent use.

      /B    Black and white
      /G    Generic MSDOS - uses BIOS calls for all screen writes
      /Q    Wait  for  vertical  Retrace  on  screen  writes  - helps to
            prevent snow on older CGA boards.
      /U    Use  American  standard  date  format  (mm/dd/yy) instead of
            European  date  format  (dd/mm/yy).  The  batch file ensures
            this.

@DIR [drive:][filename][/P][/W]
     (Internal) Displays information about files that are on the curent
     disk or on the disk specified by filename, or information about the
     one file specified by filename.

     /P selects "page" mode.

     /W selects a wide display.

       DIR B:   DIR *.bat/P



@DISKCOPY [source drive][target drive][/M][/V]
     (external)  Copies  the contents of the disk in  the  source
     drive to the disk in the target drive.  The target disk need not
     be already formatted.

     /M forces enables 40 Track Disks to be made on 80 Track Drives.
     /V forces the verification of the tracks after formatting before
        copying the data. Data copyied is still verified anyway.

       DISKCOPY   DISKCOPY A: B:/V

@DS sort-order [directory-path] [/S]
      (external) Sorts directory

      sort order any of:     /S
      N name             subdirectories as well
      E extension        '-' after letter reverses order
      S size
      D date
      T time

@DT [d:] [option switches] [/LOG]
      /F = file test
      /D = disk test
      /B = both tests


@ERASE [filename]
      (internal) Deletes all files with the designated filename.

       ERASE text.txt
@EXCLUDE <filespecs> <dos command>
      (External) To exclude the files in <filespecs> from the DOS
      Command that follows <dos command> Exclude works by setting the
      hidden bits for all files in <filespecs>, and then load
      COMMAND.COM to execute <dos command>, which can be any DOS
      command. Once the command has executed, EXCLUDE resets the
      hidden bits on all the files that it hid. Most DOS commands such
      as delete and copy do not work on hidden files.

      EXCLUDE WF*.PAS COPY *.PAS A:

      will copy all files that have an extension of .PAS but do not
      start with WF
@EXE2BIN source filename [target filename]
     (External) Converts an .exe file to . com file format.
     source filename  specifies the .exe file.
     target  filename  specifies a file to receive the  converted
     program file.

       EXE2BIN testfile.exe B:

@FA [filespec] [changes] [/S][/P][/U][/T]
     (external) Sets file attributes
     changes are :
       /R       read only
       /A       archive
       /HID     hidden
       /SYS     system          follow by + to set - to reset

     /S Subdirectories acted on
     /P Pause when screen fills
     /U lists only unusual atts
     /T totals only

@FF [d:][filespec][d: ...] [/P][/W][/A]
     (external) shows where files are
     /P Pause when screen fills
     /W Wide display
     /A All drives searched
@FI <mask> /H/S/D/R/A/P/G/B/C/Q/I/1
     or FI /H/S/D/R/A/P/G/B/C/Q/I/1 <mask>

     (External)    A program to manage files in directories. It
     displays a browse list of files, and allows the addition of
     descriptions to files in full screen mode. Press Return to edit
     the description of highlighted file. The descriptions are stored
     in file FILEINFO.WF in the directory being browsed.

    <mask> directory mask with wildcards * or ? (eg b:e*.t??)
    /H - include Hidden files
    /S - include System files
    /D - include Directories
    /R - read only files
    /A - any files
    /P - pack the description file
    /G - use generic Bios calls
    /B - use black and white colors
    /C - clear screen at exit
    /Q - old CGA monitor - wait for vertical retrace
    /I - convert old INFO.DIR file
    /1 - use alternate colors
@FIND [/V][/C][/N] string [filespec ...]
        scans files in filespec for string, and displays filenames
                and lines containing string
        string must be enclosed in quotes "
        /V - display lines not conataining strings
        /N - display count of lines not containing string
        /C - display count of lines found
@FORMAT [drive][/S][/V][/B][/D][/1][/8]
     (floppy disk only; external)  Prepares the blank floppy disk
     in the specified drive for use.

     drive can be A: Thru D:

     /S copies the system files to the disk.
     /V prompts for volume label
     /B
     /D
     /1 single sided only
     /8 only 8 tracks per cylinder

       FORMAT    FORMAT B: /S

@FS [filespec] [d:] [/P][/T][/S]
     (external) lists and totals file sizes
     /S Subdirectories acted on
     /P Pause when screen fills
     /T totals only

@INFODIR
     creates a file INFO.DIR that contains a description of all files in
     a directory

             This is a shareware program - if you like it please
             send $10 to P.O. Box 942 WODEN ACT 2606 AUSTRALIA

@LD [d: ...] [/A][/P][/W][/T]
     (external)  Lists directory path names
     /A or d: show more than one drive
     /P Pause when screen fills
     /T totals only
     /W Wide display

@LP what [where] [how]
     (external) prints files and line numbers
     what  - specifies what files to print
     where - prints to a file or device
     how   - any of the following options
     /N         turn on line numbers
     /Tn        top margin size
     /Bn        bottom margin size
     /Ln        Left margin size
     /Rn        Right margin size
     /Hn        height of page size in lines
     /Wn        width of page in columns
     /Pn        starting page number
     /Sn        line spacing
     /80        80 column print width
     /132       132 column print width
     /NOH       no header option
     /EUR       European character option.

@NU [d:] [options]
     (external) Norton Utility program
     * disk exploring
     * Unerase files
     The options are
       /D0 /D1 /D2  screen driver options
       /Fn /Bn      color control options
       /NOC         no colour option
       /P           printable character option
       /EBCDIC      mainframe data option
       /EUR         European character option
       /TV          Top View option

     Special keys
     Alt F1 - no color toggle
     Alt F2 - printables only toggle
     Alt F3 - foreground colour
     Alt F4 - background colour
     Alt F5 - EBCDIC translation
     Alt F6 - European character option

@PAUSE [comment]
     (internal) Suspends execution of the batch file.

     comment is a message to be displayed when the file pauses.

       PAUSE insert disk

@QU [directory path] [/A]
    (external) Quick Unerase - easy recovery of files
    /A = automatic mode (not "all drives")

@REM [remark]
    (internal) Includes the specified remark in a batch file.

       REM This file is called Billfile.bat


@REN filename filename
     (internal)  Changes  the  name  of  the  file  specified  by
     filename to filename.

       REN B:GL1.dat GL2.dat

@SA [prefix] [main]
      or
 SA [prefix] [foreground] [ON background] [/N]
    (external) sets colours on screens
    prefix = BRIGHT    BOLD     BLINKING
    main   = NORMAL    REVERSE  UNDERLINE
    foreground & background may be:
      WHITE   BLACK   RED   MAGENTA   GREEN   CYAN   YELLOW   BLUE

@TELL <filename> <searchString> /G/Q
     filename is optional
     Search string is optional
     switches are optional
     if both omitted start of TELL.TXT is printed
     if filename is omitted TELL.TXT is searched for @searchstring
        and the text is listed
     if filename is given as well, then it is searched.

        /G - Generic bios calls for screen IO
        /Q - eliminate snow on older CGA

             This is a shareware program - if you like it please
             send $10 to P.O. Box 942 WODEN ACT 2606 AUSTRALIA

@TIME [hh:mm:ss.cc]
     (internal) Displays or sets the time.

     hh:mm:ss.cc  specifies  the time to  set.  If  omitted,  the
     current system time is displayed.

       TIME 14:30

@TS [search-text] /D or /E [options]
    or
 TS [filespec][searchtext] [/S][/T][options]
     (external) searches for search-text
     enclose search-text in quotes if more that one word
     /T lists file names, does not show context
     /D search all disk without regard to files
     /E search all erased space without regard to files
     options are : /LOG  /EUR  /EBCDIC   /N for non IBM compatible computers

@TYPE filename
     (internal) Displays the contents of the specified file.

       TYPE B:carfile

@VL [d:] [label]
     (external) changes volume label
     label in quotes if more than one word

@VOLUME [d:]
     (external) changes volume label
     this one prompts for new label, which may be redirected to a file

@WIPEDISK [d:] [/Vn][/Rn][/E][/G][/LOG]
     (external) security over-writes disk
     /Vn   wiping byte decimal
     /Rn   repetitions
     /E    only use erased space
     /G    US govt specs - 3 wipes, 1 test read

@WIPEFILE [filespec] [/Vn][/Rn][/P][/NOD][/][/G]/[LOG]
     (external) security over-writes files
     /Vn   wiping byte decimal
     /Rn   repetitions
     /P    pause at each file
     /NOD  no deletes of wiped files
     /N    no wipe - delete only automatic pause
     /G    US govt specs - 3 wipes, 1 test read

@YESNO <message>
     (external) get a yes or no answer into a batch file
     sets errorlevel to 1 for Yes
                     to 0 for no
         test it by
         IF ERRORLEVEL 1 command to do if Yes is entered

```
{% endraw %}

## ASK.DOC

{% raw %}
```
         ASK


         File Name:       ASK.EXE

         Syntax:          ASK [prompt line]

         Purpose:         This command allows the user to set the BATCH
                          environment ERRORLEVELS interactively.

         Remarks:         This command is designed to be used
                          interactively. It allows the user some manual
                          input into the BATCH envirionment. The 'prompt
                          line' parameter is optional.

         Example:         ASK Do you want to go to PAS2 ?

                          This command accepts a single character from
                          the user and sets ERRORLEVEL based on what
                          the character was. 0 to 9 will set
                          ERRORLEVEL to 0 to 9, while A to Z will
                          set it to 10 to 36. Lowercase letters are
                          converted to uppercase.

                          ASK

                          Displays '==> ' on the console and
                          waits for a keypress.

                          (Sample BATCH file)

                          :L
                          ECHO 1. Accounting
                          ECHO 2. Word processing
                          ECHO 3. Spread sheet
                          ASK
                          IF ERRORLEVEL 3 GOTO SS
                          IF ERRORLEVEL 2 GOTO WP
                          IF ERRORLEVEL 1 GOTO ACCT
                          ECHO You did not choose from menu
                          GOTO L
                          :SS
                          QUATRO
                          GOTO L
                          :WP
                          WP
                          GOTO L
                          :ACCT
                          SBMS
                          GOTO L

```
{% endraw %}

## CAT.DOC

{% raw %}
```

CAT
===

File name : CAT.EXE

Syntax    : CAT /C/F/G/Q/U

Purpose   : To print covers for your floppy disks.


Remarks   : It prompts for the  drive, and the title to print on  the
            cover. When it has printed a cover, it will prompt for
            another. Entering ESC will cause it to terminate.

            The program needs a file PR.DEF in the default drive that
            tells it how to set the printer to compressed print. You
            can edit this file from CAT

            The  program  prints  the  list  of  file  names  for
            each directory in alphabetic order, spread over 4 columns.
            The names run down columns, and the size of each file is
            printed beside it.

            Each directory  is printed separately,  under its name.
            The program can handle any level  of nested directories,
            and will print the contents of each one.

            The heading  of the print  also includes the  date of the
            print and the amount of free space on the disk.

            The program allows the storage of printer configuration 
            information in a file called CAT.PR  If the program 
            cannot find the file, it will prompt you to enter the 
            correct values. The default values are for an Epson 
            printer. You can also edit the configuration by typing 
            in 1 at the disk drive prompt.

            You will be prompted for 3 sequences:
                Compressed Print
                8 lines per inch
                Reset printer

            If you have a dot matrix printer, you will probably need 
            to enter non printable commands. For example compressed 
            print on an Epson is decimal 015 or Ctrl O. To enter 
            the character, you first press Ctrl P to signify that 
            the next character is to be read literally. Then you 
            type the character you want, eg ESC or Ctrl O and so on. 
            You must press ctrl P before each character. You can 
            either press the appropriate keyboard character, or hold 
            down the ALT key and press the decimal equivalent on the 
            numeric keypad on the RH side. (The numbers above the 
            letter part will not work for this). Whenever you press 
            the Ctrl P, the character under the cursor will change 
            color to let you know that the program is waiting for a 
            special character.

            In normal circumstances, ESC aborts the edit, and Return 
            accepts the changed value. If you press return on the 
            third field, those values will be saved in CAT.PR


Switches:

            /C - you have manually set your printer to compressed, so
                 the program is not to send any print commands

	    /F - Take a form feed (new page) between each print. The 
                 default is to print 2 blank lines.

            /G - your monitor is not IBM compatible and the program
                 should use Bios calls

            /Q - your monitor is the old CGA type and displays snow
                 without this option

            /U - print all dates in US format (mm/dd/yy) and not
                 European format (dd/mm/yy)

        These switches MUST BE CAPITAL LETTERS if you use them. If you
        do not need them then do not specify them.



```
{% endraw %}

## DI.DOC

{% raw %}
```
DI
==

File Name : DI.EXE

Syntax    : DI <drive> /B/G/R/U


Purpose   : An automated menu program for your hard disk

Remarks   :

This program is used to display a menu of programs, batch files, and
directories on your hard disk. These may be saved in a file with
prompts and parameters for subsequent use.

When run initially the program reads the current directory looking for
subdirectories, and files with the extensions of .COM, .EXE, and .BAT.
These are presented on a menu on the screen. Directories are
identified by a diamond (<>) before them. Moving the arrow keys
highlights different items on the menu. Pressing the return key will
select the highlighted item. If the item is a directory, the program
will change to that directory, and show its contents in a menu.

If the item is program or batch file, DI will invoke COMMAND.COM, and
run the file. You will be prompted for any parameters. When the
program finishes, you will be prompted to press any key to return to
DI. This is to permit you to read any output on the screen.

            Other keys are included on the bottom of the menu:

ESC  - Pressing  ESC on  any menu  causes the  program to  change to the
       parent directory, and display a menu. If you are currently at the
       parent directory, the program terminates.

F1   - Pressing F1 causes the program to display a help file that can be
       paged through.

F3   - Sometimes the file will get out of sequence with the directory,
       as files are moved around. To overcome this, pressing F3 once
       the file is loaded will cause the program to read the directory
       and check its contents against the file. Those files that are
       no linger in the directory will be removed from the list, while
       new ones will be added. You will then be put into edit mode as
       for F4, so that you can edit any additions to the list, and be
       prompted to save the modified list.

F4   - Pressing F4 permits  you to edit the menu  display. You may store
       explanations of  each menu item, prompts  to be displayed instead
       on the file name, and parameters to use on the programs.

       The menu is displayed as a list of files and directories that
       mey be paged through with the PG UP and PG DN keys. The item
       may be selected by pressing the associated function key (F1 ..
       F10). Once the item is selected, you will be prompted to edit


        1. Description - displayed on bottom line of menu
        2. Prompt      - displayed instead of file name
        3. Params      - stops you being prompted each time
        4. Delete      - allows you to remove that item from the menu

       Pressing ESC during edit will cause  the program to prompt you to
       save the file. The file will  be saved as @DIR.MNU in the current
       directory.  This will  permit the  program to  find it again next
       time  it enters  that directory.  The program  will look for this
       file and load it if found, instead of reading the directory.

F6   - Tells you how to Register

F8   - Log onto a new drive - you will be prompted for the new drive

F10  - Pressing F10 causes the program to exit to DOS immediately,
       instead of backing up to the root directory first.


The program displays a title for each menu - this defaults to the path
in use. It also shows the date and time at the top right of the menu.
In the bottom right it dislays the status of the Caps Lock key, the
Num Lock key, and the Scroll Lock key.

DI should run on most monitors. It knows about CGA and MONO screens,
as well as black and white on color video boards. It attempts to
detect the hardware you are using, but some times it can be fooled.
There are several parameters which help:


      /B    Black and white

      /G    Generic MSDOS - uses BIOS calls for all screen writes

      /Q    Wait  for  vertical  Retrace  on  screen  writes  - helps to
            prevent snow on older CGA boards.

      /U    Use  American  standard  date  format  (mm/dd/yy) instead of
            European  date  format  (dd/mm/yy).  The  batch file ensures
            this.


```
{% endraw %}

## EXCLUDE.DOC

{% raw %}
```
EXCLUDE
=======

File Name : EXCLUDE.COM

Syntax    : EXCLUDE <filespecs> <dos command>

Purpose   : To exclude the files in <filespecs> from the DOS Command
            that follows

Remarks   : Exclude works by setting the hidden bits for all files in
            <filespecs>, and then load COMMAND.COM to execute <dos
            command>. COMMAND.COM must be available, and you should
            use the COMSPEC environment variable to make sure that it
            points to where COMMAND.COM actually is. (Users with only
            floppy disks beware!).

            <dos command> can be any DOS command. Once the command has
            executed, EXCLUDE resets the hidden bits on all the files
            that it hid. Most DOS commands such as delete and copy do
            not work on hidden files.


```
{% endraw %}

## FI.DOC

{% raw %}
```
FI
==

Filename  : FI.EXE

Syntax    : FI <mask> /H/S/D/R/A/P/G/B/C/Q/I/1
         or FI /H/S/D/R/A/P/G/B/C/Q/I/1 <mask>

Purpose   : A program to manage files in directories.

Remarks   : It displays a browse list of files, and allows the
            addition of descriptions to files in full screen mode.
            Press Return to edit the description of highlighted file.
            The descriptions are stored in file FILEINFO.WF in the
            directory being browsed.

Parameters:

    <mask> directory mask with wildcards * or ? (eg b:e*.t??)

    /H - include Hidden files
    /S - include System files
    /D - include Directories
    /R - read only files
    /A - any files
    /P - pack the description file
    /G - use generic Bios calls
    /B - use black and white colors
    /C - clear screen at exit
    /Q - old CGA monitor - eliminate snow
    /I - convert old INFO.DIR file
    /1 - use alternate colors


```
{% endraw %}

## FILE1608.TXT

{% raw %}
```
Disk No: 1608
Disk Title: Management Utilities
PC-SIG Version: S2

Program Title: Management Utilities
Author Version: S2
Author Registration: $20.00
Special Requirements: Some utilities require Epson compatible printer.

MANAGEMENT UTILITIES is a collection of utilities for handling
directories and getting help on DOS commands.  @INFO is a useful and
simple utility keep track of all the files in your collection of
programs.  @INFO allows you to add descriptions to the file names that
appear in a directory.  The program first reads the directory of the
disk, and any descriptions you add are saved to a file on the
directory. Afterwards you may edit the file descriptions, and @INFO
will automatically keep the listing of file descriptions updated if any
files are added and deleted in the original directory.  @CAT prints
jacket covers for your floppy disks, and will print a list of files
from every directory in four columns on the cover. @DIR is a menu
system that will list all programs, batch files, and directories on a
drive.  If you select a program or batch file from the list, @DIR will
automatically execute it and prompt you for any parameter to add to the
command. After a program is executed @DIR will return you to the menu.
If you select a directory from the list, the program will switch you to
that directory.  @DIR allows you to add a description to each program
or directory, just like @INFO.  @DIR also allows you to change a file
name into a prompt, and add default parameters to a command.

Whereas @INFO is a utility for storing file information, @DIR is a
utilities that will allow you to easily execute programs and switch
between directories.  The other program included on this disk is @TELL,
which will list information on certain DOS commands and common DOS
utilities.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## FILTER.DOC

{% raw %}
```
FILTER
======

File Name : FILTER.EXE

Syntax    : FILT options <input_file >output_file

Purpose   : A text-filter program that performs some low-level
            formatting and translation functions.

Remarks   : As a filter, FILTER does its input and output through the
            console device (CON). Input and output files must be
            specified with the DOS redirection commands.

            The options consist of single letters and are described
            below. The input_file and output_file, in conjunction with
            the redirection characters < and >, tell DOS what files to
            use for input and output. If no input file is specified,
            the keyboard will be used. If no output file is specified,
            the screen will be used.

            The options are single, case-sensitive letters. Any number
            of options may be specified, and some of the options are
            followed by a number. All numbers are decimal and come
            immediately after the option letter (with no intervening
            spaces) numbers over 65,535 will cause an error.

Summary of options (# denotes number):

         Tab Replacement:                 Tab Assignment:

           x  = expands tabs to spaces      e  = erases all tab stops
           c  = compresses spaces to tabs   t# = sets tab stop at col #

         Character Replacement:           Line Format:

           S  = zeros high bits             m# = adds left margin
           C  = strips control chars        d# = deletes left margin
           H  = strips high (>127) bytes    l# = truncates long lines
                                                 after # characters
           U  = all letters to uppercase    r  = removes trailing spaces
           L  = all letters to lowercase    b# = byte to end input lines
           A  = capitalize 1st letter of    s  = saves carriage returns
                each word                        on input lines

         End of File:                     I/O Buffer:

           z  = ignores ^Z in input         i# = input buffer size (20000)
           Z  = suppresses ^Z in output     o# = output buffer size (20000)

       The following fully describes all options in alphabetical
       order (lowercase first):

         ?   Help.  Displays a summary of the options.

         b#  Byte to end input lines.  Defines the character that will
             identify an end of line (EOL).  For instance, b13 will cause
             a line to be ended when a carriage return is reached.  The
             default is b10.  This option does not effect how EOL's will
             be written; they are always ended with a CR+LF combination.

         c   Compresses spaces to tabs.  When possible, spaces will be
             replaced by tab characters (ASCII 9).  The default tab stops
             are every eight columns, but can be set manually with the e
             and t options.

         d#  Deletes left margin.  The specified number of characters will
             be deleted from the left side of all the lines.  Any
             characters will be deleted.  Note that tabs only count as
             one character.

         e   Erases all tab stops. All tab stops will be erased. Use
             this option to delete default tab stops before setting
             your own with the t option. User-defined tab stops (set
             with the t option) should come after the e option.

         h   Help.  Displays a summary of the options.

         i#  Input buffer size.  Sets the size of the input buffer.  The
             default is i20000.  Making it larger might improve the
             processing rate for a slow input device, while making it
             smaller will use less memory.

         l#  Truncate long lines.  Lines longer than the specified length
             will be truncated.  Normally any length lines (up to about
             600 characters) are acceptable.

         m#  Add left margin.  The specified number of spaces will be
             added to the left margin.

         o#  Output buffer size.  Set the size of the output buffer.  The
             default is o20000.  Making it larger might improve the
             processing rate for a slow output device, while making it
             smaller will use less memory.

         s   Saves carriage returns.  All carriage returns (ASCII 13) are
             normally deleted from the input.  This option might be
             useful in a file that contains line boundaries without
             carriage returns, but does contain carriage returns as some
             kind of special formatting code.

         r   Removes trailing spaces.  Any spaces (or tabs when using the
             c option) that come at the end of lines will be removed.
             Spaces at the end of lines, though superfluous, are often
             left over from word processors.

         t#  Sets a tab stop.  A tab stop will be set at the specified
             column number.  The leftmost column is column one.  Any
             number of tab stops can be specified.  The default tab stops
             are every eight columns, i.e., t9 t17 t25 etc.

         x   Expands tabs to spaces.  All tab characters (ASCII 9) will be
             replaced with an equivalent number of spaces.  The default
             tab stops are every eight columns, but can be set manually
             with the e and t options.

         z   Ignores ^Z in the input file.  A ^Z (ASCII 26) normally
             identifies the end of a file.  If this option is used, the
             full number of bytes recorded in the directory will be read.

         A   Capitalize words.  Letters that follow another letter will
             be converted to lowercase, all other letters will be
             converted to uppercase.

         C   Strips control characters.  All characters below ASCII 32
             will be removed. The exceptions are the CR, LF, and
             Ctrl-Z characters.

         H   Strips high bytes.  All characters above ASCII 127 will be
             removed.

         L   Converts all letters to lowercase.

         S   Strips high bits.  The high bit of all bytes above ASCII 127
             will be set to zero.

         U   Converts all letters to uppercase.

         Z   Suppresses ^Z in the output file. Normally a ^Z (ASCII
             26) is written to the end of the file. If this option is
             used, a ^Z will not be written.

       The following are some examples of FILTER option and file
       specifications:

         FILTER ?
           Displays a summary of all options to the screen.

         FILTER <spool.$%$ >text.new
           Copies the input file SPOOL.$%$ to the output file TEXT.NEW
           and terminates each output line with a CR LF pair. This is
           useful when spooled printing ends with LF CR pair in that
           order, which fools many word processors. (Some versions of
           the DOS print screen command reverse the order)

         FILTER cr <data.fil >data.new
           Means: c = compress spaces to tab characters; and r = remove
           trailing spaces.  The input file is DATA.FIL and the output
           file is DATA.NEW.  This combination of options may greatly
           reduce the size of a file by compressing or removing
           unnecessary spaces.

         FILTER zZCHi500o500 <a:text.xxx >c:\doc\text.txt
           Means: z = ignore any input ^Zs; Z = do not write a ^Z to the
           end of the file; C = remove all control characters; H = remove
           any characters with a value greater than 127; i500 = set the
           input buffer size to 500 bytes; and o500 = set the output
           buffer size to 500 bytes.  The input file is A:TEXT.XXX and
           the output file is C:\DOC\TEXT.TXT.  This combination of
           options converts the input file into a pure ASCII file with no
           control characters (except for the line boundaries).  Note
           that about 39,000 fewer bytes of memory are used during
           execution because of the buffer sizes, 500+500=1000 instead of
           the default 20000+20000=40000.


```
{% endraw %}

## INFO.DOC

{% raw %}
```
INFO
====

This  program stores  descriptions of  files in  a file called INFO.DIR,
stored in the  directory in which the files reside.  When the program is
run, it reads this file, and the directory, to build a new list of files
and  descriptions. Descriptions  for files  that have  been deleted  are
discarded.

The program initially prompts for the  drive and directory to read. When
the list is displayed, you may page through it by use of the Page Up and
Page  Down  keys.  Any  file  may  be  selected  to  have a 60 character
description  appended  to  it.  Existing  descriptions  may be modified.
During the  edit, pressing ESC  will restore the  original value of  the
description.

An option lets you run files that are displayed. This is accomplished by
loading  COMMAND.COM and  passing it  the  name  of the  file, plus  any
parameters you require.  The overhead in this approach  is about 15K for
@INFO itself,  plus about 2  - 5K for  the file list,  plus the size  of
COMMAND.COM. You are not restricted to  programs by this method, you may
also run BATch files.

@INFO should run  on most monitors. It defaults to  color CGA. There are
several parameters which permit it to do this:

    @INFO [/B/G/R]

      /B    Black and white

      /G    Generic MSDOS - uses BIOS calls for all screen writes

      /Q    Wait  for  vertical  Retrace  on  screen  writes  - helps to
            prevent snow on older CGA boards.



```
{% endraw %}

## REGIST.TXT

{% raw %}
```




To:

Fugue Software,
P.O. Box 942
WODEN   ACT   2606
AUSTRALIA





From:

___________________________________________________

___________________________________________________

___________________________________________________

___________________________________________________



[ ] I enclose $15 for registration as a user of Management Utilities
    Australian users - $A15
    Overseas users   - $US15


Please also send me my (free) trial version of the following software:


[ ]  WORD FUGUE - the heavy duty word processing program with
                  WORDSTAR 4 compatability.

[ ]  DISK SPOOL - the print spooler that spools to disk and prints in
                  background. Doesn't use the timer interrupt, so it
                  wont crash your programs

[ ]  DOSH       - command line editor for DOS commands that stacks
                  upto the last 15 commands, and lets you install all
                  of the function keys.

[ ]  VMS240     - Device driver that converts your Hard disk or Floppy
		  into standard LIM 4.0 memory
```
{% endraw %}

## TELL.DOC

{% raw %}
```
TELL
=====

Filename:  TELL.EXE

Sytnax  :  TELL <filename> <searchString> /G/Q
     filename is optional
     Search string is optional
     Switches are optional

Purpose : This  program is  designed to  display information  about
          key  words and phrases.


Remarks : The  information is contained  in a text  file (@TELL.TXT)
          that the program looks up. This file should be in the
          current directory.

          The  program accepts  as a  parameter the  text to  be
          looked  up. If no parameter is supplied,  the program will
          print the  first few lines from the file, which  contain
          information on how to use  the program, and the help items
          available.

          I have placed into the file @TELL.TXT  information on most
          of the MS DOS commands, and various useful programs.

          The file is  ASCII text, and can be updated  to add new
          information. The text for each help  item must start in
          column one, must  start with an @ sign,  and must  be in
          uppercase.  You  are restricted  to a  screen of information
          on the command. Text of other commands can also be changed.

          The  first line  of the  file is  the configuration  of the
          program. It defaults  to no  snow, but  uses direct  screen
          writes.  If you  wish to change it, alter the first line of
          the file as follows

Switches :

          /G    Generic MSDOS - uses BIOS calls for all screen writes

          /Q    Wait  for  vertical  Retrace  on  screen  writes  -
                helps to prevent snow on older CGA boards.



```
{% endraw %}

## WHEREIS.DOC

{% raw %}
```
WHEREIS
=======

FileName  : WHEREIS.EXE

Syntax    : WHEREIS filespecs

Purpose   : To search a disk for files that match a user-supplied file
            specification.

Remarks   : The utility performs a recursive search through any
            subdirectories it finds during its search, and reports on
            each file matching the specs.

            To search an entire disk for a particular file
            specification, you would execute WHEREIS like this:

                    whereis *.TXT

            This would search through the entire drive (the current
            drive) and display each instance of a file matching the
            file specification *.TXT.

            You can also provide an explicit drive specifier:

               whereis a:\*.TXT

            This will search drive A: for all matching files.

            If you don't want to search an entire disk, you can
            explicitly define the path from which to start the
            recursive search. For example,

               whereis c:\word\docs\*.txt

            will search for all files matching *.txt in the directory
            c:\word\docs and any subdirectories below it.

            You can halt execution of WHEREIS by pressing any key
            while it's running.




```
{% endraw %}

## XQT.DOC

{% raw %}
```
XQT
===

Filename  :  XQT.EXE

Syntax    :  XQT [d:]<batchfile> [<parameters>...]

Purpose   :  To call a batch file from another without terminating the
             first.

Remarks   :  Normally you cannot nest runs of batch files within
             other batch files - call the new batch file, and  the
             old one terminates. XQT handles all of this - it  takes
             the batch file name as a parameter, followed by any
             parameters to the batch  file. It runs the  batch file,
             and passes the parameters to it. It does require
             COMMAND.COM to achieve this.

             It will also run programs etc, and does not require
             COMMAND.COM for these purposes.

             eg

             XQT  b:zcmd parameter another third

             will run the batch file b:zcmd.bat, and pass the parameters
               paremeter  another  third
             to it.


```
{% endraw %}

## YES.DOC

{% raw %}
```
         YES


         File Name:       YES.EXE

         Syntax:          YES [prompt line]

         Purpose:         This command allows the user to set the BATCH
                          environment ERRORLEVELS interactively.

         Remarks:         This command is designed to be used
                          interactively. It allows the user some manual
                          input into the BATCH envirionment. The 'prompt
                          line' parameter is optional.

         Example:         YES Do you want to go to PAS2 ?

                          This command accepts a single character from
                          the user and sets ERRORLEVEL based on whether
                          Y or N was entered. Y or y will set ERRORLEVEL
                          1, N or n will set ERRORLEVEL 0

                          YES

                          Displays ' [Y/N] ' on the console and
                          waits for a keypress.

                          (Sample BATCH file)

                          YES press
                          IF ERRORLEVEL 1 GOTO PRESSEDYES
                          ECHO You pressed N or n
                          GOTO end
                          :PRESSEDYES
                          ECHO You pressed Y or y.
                          :end

         Notes:           YES accepts only Y, y, N, or n as a
                          response. If you need more you should use ASK

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1608

     Volume in drive A has no label
     Directory of A:\

    @DIR     HLP      2622   7-09-88   7:51p
    @TELL    TXT     15222  11-17-89   4:08p
    ASK      DOC      1911  11-21-89   3:27p
    ASK      EXE      3888  11-21-89   3:07p
    CAT      DOC      3492  11-20-89   5:16p
    CAT      EXE     29168  11-17-89  11:22p
    CAT      PR        132  11-20-89   5:16p
    CHD      DIR        51  11-17-89   7:15p
    CHD      DOC      1678  11-17-89   3:53p
    CHD      EXE     31120  11-17-89   7:13p
    DI       DOC      4237  11-17-89   3:41p
    DI       EXE     24992  11-17-89   7:18p
    DOCS     BAT       128  11-21-89   3:28p
    EXCLUDE  COM       746   6-30-87  10:44p
    EXCLUDE  DOC       839  11-17-89   4:08p
    FI       DOC       967  11-17-89   3:38p
    FI       EXE     37328  11-20-89   8:47p
    FILE1608 TXT      1949  12-14-89  12:28p
    FILEINFO WF       2490  11-27-89  10:20a
    FILTER   DOC      8387  11-27-89  10:38a
    FILTER   EXE      6192  11-22-89  12:02a
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       386  12-14-89  11:30a
    INFO     DIR       914  11-17-89   6:08p
    INFO     DOC      1478  11-17-89   2:47p
    INFO     EXE     15088  11-17-89   7:17p
    READ     ME       4987  11-22-89  12:52p
    REGIST   TXT      1115  11-13-89   5:37p
    TELL     DOC      1699  11-17-89   2:47p
    TELL     EXE      5504  11-17-89   7:16p
    WHEREIS  DOC      1331  11-22-89  12:35p
    WHEREIS  EXE      2357  11-22-89  12:02a
    XQT      DOC       959  11-22-89  12:50p
    YES      DOC      1495  11-21-89   3:22p
    YES      EXE      3856  11-21-89   3:06p
           35 file(s)     218746 bytes
                           86016 bytes free
