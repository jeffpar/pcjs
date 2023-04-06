---
layout: page
title: "PC-SIG Diskette Library (Disk #1634)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1634/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1634"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FUGUE UTILITIES"

    FUGUE UTILITIES is a package of useful file management utilities that
    are missing from MS-DOS: INFO, CAT, TELL, DIR, FI, CHD, EXCLUDE, ASK,
    YES, WHEREIS, FILTER, and XQT.
    
    INFO lets you integrate descriptions of files (up to 66 chars) right
    into the directory listing. Descriptions you enter are stored in a file
    called INFO.DIR, in the directory where the files reside. When the
    program is run, the directory is displayed with each file's descriptive
    text. The list permits menu-like selection to run a file or edit its
    special narrative text. No more running or editing a file just to know
    what it's for.
    
    CAT prints floppy diskette covers on EPSON compatible printers in
    compressed mode. A disk title is printed with available disk space,
    volume name, and all the filenames and sizes on the diskette. There are
    four columns of output and the files are grouped by directory. Note
    that these are diskette covers, not labels, so much more space is used.
    
    TELL is a context sensitive help program for DOS. Put away your DOS
    manuals because DOS help is only a keystroke away. The help is invoked
    from the command line and gives a brief summary of DOS commands and
    utility programs (format, assign, etc). This is helpful if you have
    forgotten the order of the DOS chmod parameters and don't feel like
    digging through the reference manual.
    
    DIR is half DOS shell and half menu system for running programs or
    batch files and changing directories. Activating DIR generates a menu
    of batch files, executable programs and directory names for the current
    directory. Depending on the item selected DIR will change the current
    directory or run a selected program, pausing to accept any command line
    parameters. All valid keystrokes are displayed at the bottom of the
    screen and there is online help. DIR is perfect for the novice user
    who just wants to run programs and is confused by the MS-DOS directory
    structure.
    
    FI displays a browse list of files and allows the addition of
    descriptions to files in full screen mode. Press Return to edit the
    description of the highlighted file. The descriptions are stored in
    file FILEINFO.WF in the directory being browsed.
    
    CHD changes to the directory starting with the letters typed for its
    first parameter, or goes to full screen mode and displays all
    directories for you to select. It saves the directory in a file CHD.DIR
    for quick start.
    
    You can create new directories, delete them, or set them to be hidden
    from DOS commands, or Unhide them, or even rename them from the full
    screen mode.
    
    EXCLUDE is used to exclude files from DOS commands.
    
    ASK accepts a character from the keyboard and sets ERRORLEVEL
    accordingly.
    
    YES accepts Y or N from the keyboard and sets the ERRORLEVEL
    accordingly.
    
    WHEREIS searches your disk for a file matching the file specs.
    
    FILTER filters an input file to produce an output file.
    
    XQT calls batch files from within batch files.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1634

     Volume in drive A has no label
     Directory of A:\

    XQT      DOC       959  11-22-89  12:50p
    @DIR     HLP      2622   7-09-88   7:51p
    @TELL    TXT     15222  11-17-89   4:08p
    CAT      DOC      3492  11-20-89   5:16p
    CAT      EXE     29168  11-17-89  11:22p
    CHD      DOC      1678  11-17-89   3:53p
    CHD      EXE     31120  11-17-89   7:13p
    DI       DOC      4237  11-17-89   3:41p
    DI       EXE     24992  11-17-89   7:18p
    EXCLUDE  COM       746   6-30-87  10:44p
    EXCLUDE  DOC       839  11-17-89   4:08p
    FI       DOC       967  11-17-89   3:38p
    FI       EXE     37328  11-20-89   8:47p
    GO       BAT        38   1-01-80   1:37a
    FILEINFO WF       2490  11-27-89  10:20a
    GO       TXT      1346   1-01-80   8:55a
    INFO     DIR       914  11-17-89   6:08p
    INFO     DOC      1478  11-17-89   2:47p
    INFO     EXE     15088  11-17-89   7:17p
    READ     ME       4987  11-22-89  12:52p
    REGIST   BAK      1115  11-13-89   5:37p
    DOCS     BAT       128  11-21-89   3:28p
    TELL     DOC      1699  11-17-89   2:47p
    TELL     EXE      5504  11-17-89   7:16p
    CHD      DIR        51  11-17-89   7:15p
    CAT      PR        132  11-20-89   5:16p
    WHEREIS  DOC      1331  11-22-89  12:35p
    ASK      DOC      1911  11-21-89   3:27p
    YES      DOC      1495  11-21-89   3:22p
    ASK      EXE      3888  11-21-89   3:07p
    YES      EXE      3856  11-21-89   3:06p
    FILTER   DOC      8387  11-27-89  10:38a
    WHEREIS  EXE      2357  11-22-89  12:02a
    FILTER   EXE      6192  11-22-89  12:02a
    FILE1634 TXT      6143   7-13-90   9:01a
    REGIST   TXT      1115   1-01-80   7:40a
           36 file(s)     225015 bytes
                           78848 bytes free
