---
layout: page
title: "PC-SIG Diskette Library (Disk #2636)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2636/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2636"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```

╔═══════════════════════════════════════════════════════════════════════════╗
║                <<<<  #2636 POWER BASIC LIBRARY #6  >>>>                   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                           ║
║ To print documentation, type:  COPY LIBRARY.DOC PRN  (press Enter)        ║
║                                                                           ║
║ To unzip the files, you will need PKUNZIP, which is one of the files      ║
║ in the self-extracting file PKZ102.EXE.  Extract the files by typing      ║
║ "PKZ102."                                                                 ║
║                                                                           ║
║ To unzip the utilities on this disk, type:  PKUNZIP [filename.ZIP) (Enter)║
║                                                                           ║
║                                                                           ║
║                                         (c) Copyright 1991, PC-SIG Inc.   ║
╚═══════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LIBRARY.DOC

{% raw %}
```
12-04-90    Spectra Publishing - BBS & Compuserve Library

[74017,2570]
MASKIN.ZIP/binary         02-Dec-90 1792               Accesses: 1

    Title   : MASKINPUT.ZIP - masking entry routine / simple
    Keywords: ENTRY INPUT MASK POWERBASIC PUBLIC_DOMAIN

    Masked input for PowerBASIC 2.1 (should work w/2.0). Useful for entry of
    phone numbers, social sec #'s and dates. Generic enough to fold into most
    libraries. Not designed to replace regular text or unformatted entry.
    Dedicated to public domain.  --Tim

[72250,2551]
CRSBAS.ZIP/binary         01-Dec-90 76799              Accesses: 6

    Title   : crossbas version 1.00P
    Keywords: CROSS-REFERENCE TABLE LIST NON-RESERVED WORDS CREF XREF

    CrossBas will read a Power-BASIC source file and create an alphabetized
    cross-referenced listing of non-reserved words, i.e., variable,
    subprogram, function, and label-names, along with the physical line numbers
    where they appear.  The list is printed to file.  Handy for cleaning up
    unused variable names, labels, etc.  Un-archive with PKUNZIP.  Includes
    source, exe and doc files.

APLIB.ZIP/binary          24-Nov-90 73728              Accesses: 25

    Title   : HB's ALL-PURPOSE PB programmers' lib 11-90 version
    Keywords: MENUS WINDOWS MOUSE LIB

    Now for PBas, an ALL PURPOSE LIBRARY of programming tools. You can write
    complete pulldown menu interfaces, rodent-aware, just by copying demo. Also
    fancy entry routines for string or num data, phone #s, dates &c (never use
    INPUT again!), date arith., get file dirs & diskspace, open a data-entry
    window, dialog box, let users customize colors, push & pop screens, much
    more! All in PB units. Free for personal use. Update 11-90, MAKEDEMO.BAT
    added



[72540,2315]
TTDIR1.ZIP/binary         24-Nov-90 91008              Accesses: 7

    Title   : Version 1.05 - Addn. to DIR$ function of PowerBasi
    Keywords: DIRECTORY

    Version 1.05 of the additional directory function for PowerBasic 2.10. This
    fixes a few problems with the original sub-routine and changed to run
    somewhat faster.

[76467,3355]
SPOOLK.ZIP/binary         23-Nov-90 34048              Accesses: 11

    Title   : Print spooling toolbox for PowerBasic
    Keywords: PRINT SPOOL PRT SUBMIT QUEUE OUTPUT SYSTEM LISTING PRINTER
    PRINTING

    SPOOLKIT is a .PBU file that provides routines that interface with the DOS
    PRINT spooler.  With DOS PRINT installed and SPOOLKIT, your PowerBasic
    programs can create an output file, queue it for print, and continue to
    work while the file prints.  Queue management functions include start &
    stop, submit file, "unsubmit" file, get current queue list, etc. Requires
    PowerBasic 2.1 and the PowerPak.  Public Domain.  Nathan Durland, auth


[73300,2444]
RESWOR.ZIP/binary         22-Nov-90 33792              Accesses: 7

    Title   : Resword   Translating tool for PowerBasic 2.10 w/P
    Keywords: FIND RESERVED WORDS USED AS VARIABLES IN EARLIER BASIC SOURCE
    CODE.

    Finds reserved words for PowerBasic 2.10 w/PowerPak used in other Basics
    source code. Works with Turbo, Quick, Power 2.00 and interpreted (GW) code.
    Sends report to file,printer,sceen. free for personal use only. Enjoy !

[74365,1716]
OPSYS1.ZIP/binary         19-Nov-90 57670              Accesses: 10

    Title   : OPSYS 1.03 is a DOS Multi-Config Menu Utility
    Keywords: AUTOEXEC CONFIG BATCH DOS AUTOEXEC.BAT CONFIG.SYS CONFIGURATION
    WINDOWS

    OPSYS 1.03 is a DOS Multi-Configuration Menu Utility.  OPSYS will maintain
    up too 12 AUTOEXEC and CONFIG file sets for you.  OPSYS will allow you to
    use your own ASCII file editor.  OPSYS allows a custom batch file to be run
    at boot time.  Includes BOOT, a multi-option batch file reboot utility.
    OPSYS display system memory stats in the upper right hand corner.  OPSYS
    was written using PowerBASIC.  Shareware by mcTRONic Systems - Houston, TX

[72227,3201]
ARC2ZI.BAS                11-Nov-90 3648               Accesses: 11

    Title   : Archive to Zip file format converter
    Keywords: PB POWER BASIC ARC ZIP CONVERT DOS RECURSIVE SHELL SOURCE V2.1
    POWERPAK

    Source code for a program to convert .ARC files in current dir to .ZIP.
    Shells to DOS to run ARCE.COM, PKZIP.EXE and itself (ARC2ZIP.EXE!), so
    those must be available (and avail. thro PATH).  You can pass it something
    other than ARCE from cmmdline, if desired.  Not the prettiest display while
    running, but gets the job done.  Uses DOS shell recursively!  Too bad SHELL
    doesn't return DOS's exit-error level code.  Uploaded by author. Good luck!
    For PBv2.1

[71131,3256]
JGFRAC.ZIP/binary         07-Nov-90 145408             Accesses: 9

    Title   : Fractal generator using ega and vga graphics.
    Keywords: EGA VGA GRAPHICS FRACTAL MANDELBROT

    A fractal generator using ega and screen 12 vga modes. Includes zooming,
    saving and retrieving pictures, color cycleing, change single colors or
    most other parameters and replot.  Set up to create Mandelbrot fractal but
    easy to change.  Includes picture of the Mandelbrot fractal and 2 zoomed
    pictures from it.  Also a rock bottom description of what a fractal is and
    how to make them.


ERASCN.BAS  : Erase from cursor location to end of line.  Erase in middle
    Title   : of line.  Erase a vertical column.


PATCH4.ZIP  : PowerBasic 2.10a patch for serial port time out &
    Title   : chdrive (out of memory problem).


DIABLO.BAS  : Assembly Language TSR.  Provides X-ON, X-OFF support
    Title   : for com port.  Knowledge of assembly, a must.


READ123.BAS : Code to assist in reading Lotus files.
    Title   :


SCANP2.ZIP  : Scan your EGA screen 9 and print to Epson, Citizen
    Title   : compatible printer.  Program can be adapted for VGA.


PASSWORD.BAS:                       xxxxxk
    Title   : Insert a new Password, in to a compiled program with
            : provisions for a password without having to recompile.

BARCODE.BAS :                       XXXXK
    Title   :How to do Barcode printing from PB


CRSBAS.ARC  :                       108240k
    Title   : Cross reference program lister for Turbo Basic
            : source included, can be modified for PowerBasic


COMSET.ZIP
    Title   : Comset set com 3 & com 4 in memory for xt's & At's
            : Used with PB 2.1 allows access to ports 3 & 4
            : from Compuserve IBMHW forum

[73210,611]
Diablo.zip                20-Oct-90 6441               Accesses: 1
    Title   : Diablo.zip  X-On, O-off TSR Driver, works with PB
    KeyWords: XON XOFF, RS232, SERIAL

    Diablo.zip is a TSR driver that will provide X-On & X-Off support
    for your serial port.  Assembly language source included.



[75300,214]
PBWND2.EXE/binary         30-Sep-90 98947              Accesses: 11

    Title   : PBWindows 2.1 : Windows for PowerBASIC 2.10
    Keywords: WINDOWS MENUES TITLES POWERBASIC ASP CPU


     PBWindows 2.1 for PowerBASIC 2.10 only. PBWindows provides many routines
    to make and manage windows. Zoom windows, Titles, Borders, Time, Cpu type,
    and much more in this fully functional program.
     Free for indivual use. Print your own manual from the doc file included.
    Source and a printed manual is available as shareware. ASP Member.



[73077,1265]
PBERR.ZIP/binary          28-Sep-90 37912              Accesses: 12

    Title   : pberr.zip
    Keywords: ERROR UTIL POWERBASIC TURBO COMPILER

    Complete explaination of all errors documented in PowerBASIC.  Includes new
    errors from ver 2.1.  Access from DOS by typing PBERROR <number>.
    Especially handy when using the command-line compiler with your own text
    editor.  Uploaded by author.

[76114,637]
MAKE2.ZIP/binary          27-Sep-90 6868               Accesses: 12

    Title   : Make Utility - Upgrade
    Keywords: MAKE UTILITY FREE


       This is an upgrade to the MAKE Utility.  It fixes a small bug and adds a
    few enhancements (explained in the file).  This is the complete utility -
    you do not have to download MAKE.ZIP first!!!
       Make is a utility which checks the time of last compilation of a unit
    vs. time of last change of the unit file.  If it is outdated, it is
    automatically recompiled.


[75300,214]
WHACPU.ZIP/binary         23-Sep-90 941                Accesses: 20

    Title   : What Cpu Does this machine have
    Keywords: GETCPU CPU CPUTYPE WHACPU OBJ DEMO SHORT

    What Cpu is a object code function that reports the cpu in your machine.
    Unlike the one publiched in PC Magazine, this one does not cause an
    Exception 13 error if you have the QEMM-386 Memory Manager installed.
    Included is a huge, 3 line, demo program. The comments are bigger than the
    program.



[71530,2640]
GRAPH3.ZIP/binary         22-Sep-90 107526             Accesses: 7     01-Oct-90

    Title   : Graph3.zip
    Keywords: GRAPHICS FLASHCODE CHART ANALOG PCOPY

    More interesting graphics applications, alalog, pcopy replacement 8 day
    Industrial recording chart, how to load flash code screens.



[71530,2640]
GRAPH2.ZIP/binary         21-Sep-90 49484              Accesses: 11    29-Sep-90

    Title   : Graph2.zip
    Keywords: GRAPHICS ANIMATION

    Graphics animation using Power Basic.



[71530,2640]
GRAPH1.ZIP/binary         20-Sep-90 80533              Accesses: 14    03-Oct-90

    Title   : Graph1.zip
    Keywords: GRAPHICS SCROLL CLOCK PAINT

    Contins interesting graphic applications, display system clock in large sen
    numbers, scrolling sign, how to capture and display Deluxe Paint images.
    with example.



[75300,214]
PB210.ZIP/binary          20-Sep-90 1857               Accesses: 41

    Title   : Announcing PowerBASIC 2.10 - Archive of forum ann.
    Keywords: POWERBASIC 2.10 UPGRADE INFO ANNOUNCEMENT NEW FORUM MESSAGE
    THREAD

    Full propaganda from the official fourm messages on the release of
    PowerBASIC ver 2.10. This is the thread as in the message base and contains
    information on upgrading to PowerBASIC 2.10 from PB 2.0 or from TurboBasic.
    PowerBASIC is an excellent program. Read about it in this archive of the
    announcement.



[71121,776]
APLIB.ZIP/binary          16-Sep-90 69632              Accesses: 42

    Title   : "All-Purpose" programmers lib now for
    Keywords: PULLDOWN MENUS DATA WINDOWS NEW

    Now for PBas, an ALL PURPOSE LIBRARY of programming tools. You can write
    complete pulldown menu interfaces, rodent-aware, just by copying demo. Also
    fancy entry routines for string or num. data, phone #s, dates &c (never use
    INPUT again!), date arith., get file dirs & diskspace, open a data-entry
    window, dialog box, let users customize colors, push & pop screens, much
    more! All in PB units. Free! Updated 9-90; 22 prev accesses.





[73760,751]
RATS.ZIP/binary           15-Sep-90 4436               Accesses: 22

    Title   : TAMMING THE RATS
    Keywords: MOUSE MICE RATS SCREEN SCROLL

    This is the source code for a screen builder program that has mouse
    support. Shows how to make calls to the mouse driver. Has a screen saver &
    scroll routine/exit



[75300,214]
PRSCMD.ZIP/binary         09-Sep-90 1057               Accesses: 19

    Title   : Parse Command Line: Get parameters and the number
    Keywords: PARSE COMMAND PARSECOMMAND COMMAND$ DEMO

    This demo and sub will parse the command line parameters. The available
    switches on the command line are Space, Tab, "/" and "-". Returned are the
    number of parameters and the parameters. From a message and original code
    by Henry Piper, 72330,1721. Modified to its present state by Barry Erick,
    75300,214.



[72330,1721]
GETCWD.ZIP/binary         07-Sep-90 33792              Accesses: 13

    Title   : getcwd.zip
    Keywords: DIRECTORY DOS POWERWINDOWS

    This program will display the current drive and directory using Power
    Basic. The program uses Power Windows, but can easily be changed to work
    without. Demonstrates use of DOS calls, some string functions, and some
    Power Windows functions. The windows attributes may need to be changed for
    your display.



[75300,214]
INDENT.ZIP/binary         26-Aug-90 23552              Accesses: 10

    Title   : INDENT - Indents PB Source code
    Keywords: INDENT FORMATTING UTILITY

    Basic Code formatting utility. This indents only, does not change the case
    of reserved words, variables, etc. By K. Diggins of KGD Solutions. A $1
    contribution is asked if you like this work. Includes the DOC file and the
    EXE file.



[76114,637]
ZIP.ZIP/binary            22-Aug-90 3561               Accesses: 23

    Title   : Zip all include files together
    Keywords: PKZIP BACKUP


       This utility allows you to store all of the files required to compile a
    project into 1 zip file.

[76166,2542]
MICE.ZIP/binary           18-Aug-90 4992               Accesses: 47

    Title   : Use a mouse with your PowerBasic programs.
    Keywords: MOUSE MICE POWERBASIC

    Routines to enable mouse usage in PowerBasic progrms.



[76304,1303]
PBNEWS.ZIP/binary         17-Aug-90 9088               Accesses: 106

    Title   : PBNEWS: The PowerBASIC Newsletter - Issue #3
    Keywords: NEW INFORMATION POWER BASIC TIPS FIXES

    PowerBASIC News:  The latest information (plus a little propaganda) from
    the authors of PowerBASIC.  This file will be updated on a regular basis to
    provide PowerBASIC users with important news, error reports, programming
    tips, and other useful information.  Watch the library posting date to
    learn of each newly published issue.  While some important items will be
    repeated, we'll have new information whenever the date changes.



[76166,2542]
REBOOT.ZIP/binary         16-Aug-90 1408               Accesses: 24

    Title   : Routine to reboot your computer from a PB program.
    Keywords: REBOOT WARM BOOT

    Reboot your computer from within a PowerBasic program.



[74046,1556]
LRWIND.ZIP/binary         19-Jul-90 4608               Accesses: 39

    Title   : Window PBU for PowerBASIC
    Keywords: POWERBASIC WINDOW WINDOWS SMALL SIMPLE

    Small, simple, window routine (PBU) for PowerBASIC.



[75300,214]
BAR39.ZIP/binary          19-Jul-90 19972              Accesses: 11

    Title   : Print 3 of 9 Barcodes on an Epson type printer
    Keywords: BARCODES BARCODE 3OF9 BAR CODE PRINTER

    Bar3of9 prints the 3of9 type barcodes on a Epson compatible printer. A
    printer with a good ribbon and 9 or 24 pins prints best. Source code for
    the code driver, a pbu for the window routine. This is a replacement for a
    buggy version which has CASE 1 thru 4 repeated. The First CASE 1 thru 4 are
    deleted in this file.



[73707,2545]
HUFFMA.ZIP/binary         14-Jul-90 2048               Accesses: 32

    Title   : Huffman Encoding File Compression
    Keywords: COMPRESSION ARCHIVING ALGORITHMS HUFFMAN

    Huffman Encoding file compression technique from Sedgwick's "Algorithms"
       (pages 286 - 293).



[76304,1303]
PATCH3.ZIP/binary         18-Jun-90 2048               Accesses: 124

    Title   : PATCH3.ZIP:  to install fixes and enhancements
    Keywords: PATCH FIX CHAIN NUMERIC INP

    This is an official update, from the developers, for PowerBASIC #2.00b.
    This patch corrects reported problems with the CHAIN statement, erroneous
    floating point results when numeric error checking is disabled, and
    incorrect code generation when the INP() function is referenced in certain
    complex expressions.  It is recommended that this patch, as well as the
    first two, be implemented by all users of PowerBASIC version #2.00b.



[71521,1311]
DEFSEG.ZIP/binary         13-Jun-90 1284               Accesses: 33

    Title   : Get current DEF SEG
    Keywords: PRESERVE DEF SEG GET CURRENT DEF SEG

    function CurDefSeg% returns the most recent DEG SEG.  Use to preserve DEF
    SEG across functions and subroutines.  Example shows how to read keyboard
    status from BIOS data area.  Well commented.
        Michael Flenniken



[71521,1311]
LSTRAN.ZIP/binary         08-Jun-90 4911               Accesses: 14

    Title   : Read Lotus 123 named ranges
    Keywords: READ LOTUS 123 RANGE NAMES REDIRECT OUTPUT STDOUT

    LSTRANGE.BAS ver 1.0.  Display named ranges from a Lotus 1-2-3 file. Output
    can be redirected to the printer or to a file with standard DOS redirection
    symbols.  Requires PKZIP ver 1.02 to uncompress.
       Michael Flenniken



[76166,2542]
DISK.ZIP/binary           04-Jun-90 28672              Accesses: 72

    Title   : Disk routines for PowerBasic
    Keywords: DISK POWERBASIC

    Disk Routines for PowerBasic.



[71121,776]
LISVAR.ZIP/binary         13-May-90 4096               Accesses: 36

    Title   : PUBVARS.BAS
    Keywords: PUBLIC-EXTERNAL VARIABLES LISTING UTILITY

    When your POWER-BASIC units contain EXTERNAL variables, you have to declare
    them all PUBLIC in the main file. This utility does it for me! The output
    file is a tidy alphabetized list of these variables, to be $INCLUDE'ed in
    the main file. No more ERROR 503's !!
     5-12-90: Just as soon as I uploaded this, I knew I had to improve on it.
    Now it gets the name of your MAIN program file, searches it for the $LINK
    statements, converts the filenames from *.PBU

[75300,214]
PBWNDO.EXE/binary         13-May-90 93353              Accesses: 39

    Title   : PBWindows - Windows for PowerBasic
    Keywords: WINDOWS MENUES TITLES ZOOM POWERBASIC PBU INC BAS POPUP ASP


     PBWindows provides over 22 routines to make and manage windows. Windows,
    Zoom windows, Titles, menues, Time and Date, Horiz menues, and much more.
    The program is complete and fully functional.
     Free for individual use. Print your own manual from the doc file included.
     Source code to the .pbu and a printed manual is available  as Shareware.
     ASP Member. Only change is to the docs. Prev dl's = 22



[76304,1303]
PBPLUS.ZIP/binary         12-May-90 4864               Accesses: 76

    Title   : PBPLUS96.ZIP: 96k More Memory for Compilation
    Keywords: MEMORY ERROR 406

    Use PBPLUS96 to increase the capacity of PowerBASIC!  If you have an EGA or
    VGA video card, PBPLUS96 can be used with PowerBASIC to "steal" 96k of
    memory from the card, to be used during compilation, running, or debugging
    in the PowerBASIC environment.  Depending upon your programming style, the
    extra 96k of memory may increase your maximum program size by 35-120%.
    PBPLUS96 is free to all licensed users of PowerBASIC #2.00.



[76530,1452]
EMSINF.ZIP/binary         12-May-90 2191               Accesses: 30

    Title   : EMS information
    Keywords: EMS

    Update to EMSFRM.ZIP.  Includes a few new EMS informational items like
    version, number of pages, number of handles, etc.  I was just playing
    around with the original and found some old ASM code and wanted to see if I
    could make it work.



[76304,1303]
EMSFRM.ZIP/binary         10-May-90 1408               Accesses: 38

    Title   : EMSFRM.ZIP: EMS Analysis Program for PowerBASIC
    Keywords: EMS EXPANDED MEMORY PAGE FRAME

    This program, provided as PowerBASIC source code, will help you determine
    the usefulness of an Expanded Memory (EMS) driver when used with PowerBASIC
    #2.00.  It determines whether EMS is available, and if so, it displays the
    segment of the page frame and an analysis.



[76304,1303]
PATCH2.ZIP/binary         08-May-90 2048               Accesses: 136

    Title   : PATCH2.ZIP to install fixes and enhancements
    Keywords: PATCH MEMORY CORRUPT LINK RESUME OBJ 242

    This is the second in a series of patches to be applied to PowerBASIC
    version #2.00b.  It requires PBPATCH.EXE, which may be downloaded in
    PATCH1.ZIP.  This patch corrects incompatibilities linking certain
    OBJ files, problems with error addresses (ERADR/RESUME/NEXT) in emulated
    float mode, and incorrect generation of string/array memory corrupt errors
    (error #242).  It should be implemented by all users of PowerBASIC Rev.
    #2.00b.



[76304,1303]
BTRIEV.ZIP/binary         03-May-90 2688               Accesses: 39

    Title   : BTRIEV.ZIP: An interface to Novell's BTRIEVE
    Keywords: ISAM BTRIEVE BTRV KEY DATABASE

    Novell's BTRIEVE is an efficient and easy-to-use ISAM file manager, or
    indexed file system.  It may be directly interfaced to PowerBASIC programs
    to allow fast, database-style access to files via alphanumeric keywords
    rather than just record numbers.  This file contains a single PowerBASIC
    procedure, in source code format, which provides everything necessary to
    interface BTRIEVE to any PowerBASIC program.



[72236,154]
CCTRAN.ARC/binary         21-Apr-90 32768              Accesses: 6

    Title   : COCOTRAN - BASIC token to ASCII converter
    Keywords: BINARY FILE INDEXED DIM BASIC CONVERSION

    COCOTRAN reads tokenized Radio Shack Color Computer BASIC files which have
    been transferred to an MSDOS disk and converts them to ASCII BASIC suitable
    for editing or for transfer over a 7-bit transmission path. CCTRAN.ARC
    includes the source and the .exe file.  COCOTRAN uses the binary file and
    indexed DIM capabilities of Power Basic.  Conversion is FAST, with 130
    tokenized files converted to 960K bytes of ascii in 50 minutes.



[75300,214]
EQUIP.ZIP/binary          11-Apr-90 2757               Accesses: 74

    Title   : EQUIPment shows how to use OBJ files with PB
    Keywords: OBJ DEMO SOURCE ASM TUTOR DEBUGGER TINY

    EQUIP.ZIP consists of a OBJ file (with its ASM source) and a Basic program
    that will show your computers configuration. The main purpose of this very
    heavily commemted source code is to show you how to generate an OBJ file
    how to link it safely within a PowerBASIC program. This tells how to keep
    from bombing with the integrated debugger when $LINKing Obj code and
    tracing the code.



[73237,3114]
ERROR.ZIP/binary          09-Apr-90 21808              Accesses: 40

    Title   : ERROR v1.00 - Describes PB run-time error codes
    Keywords: ERROR DOS POWER BASIC JONES

    ERROR v1.00  by Rodney Jones.  This utility program prints the meaning of
    the run-time error codes produced by Power Basic.  It is particularly
    useful for tracking down program errors when outside the Power Basic
    environment.  The program requires the user to specify the error number,
    e.g. by typing ERROR 53 at the DOS prompt, the message 'File not found' is
    printed.



[76304,1303]
PWRBAS.ZIP/binary         09-Apr-90 3328               Accesses: 60

    Title   : PowerBASIC 2.0: Its history, features, advantages.
    Keywords: POWER BASIC UPGRADE FEATURES TURBO ORDER DEALER

    This file provides a description of PowerBASIC 2.0, its features and
    availability.  It is primarily directed towards the new prospective user of
    the product, who may wish to learn a little more about the history,
    features, and advantages of PowerBASIC.  Also included is ordering
    information for current users of Borland's Turbo Basic, who can upgrade for
    the special price of just $59.00.



[74776,1017]
JULIAN.BAS                08-Apr-90 430                Accesses: 40

    Title   : Short routine to calculate Julian date.
    Keywords: JULIAN DATE POWER BASIC

    Routine to calculate the Julian date. Used by database programmers and
    others to calculate the number of days between two dates.



[75300,214]
PTOUCH.ZIP/binary         08-Apr-90 5174               Accesses: 29

    Title   : PBTouch Touches a files Date and Time
    Keywords: TOUCH DATE TIME FILES SOURCE

    PBTouch will "touch" any specified file and update its timestamp, either
    from DOS or a passed date and time spec. Type PBTouch ? to see the options
    once compiled. Also, routines in the Touch.PBU allow you to get a files
    current timestamp, then alter the file and go back in to restore the
    timestamp to the orginal date and time.
    Full source is included in for the main program and the two pbu's used to
    make this program.



[75300,214]
TB2PB.INF/binary          08-Apr-90 1372               Accesses: 79

    Title   : Converting from TB to PB
    Keywords: CONVERSION TB2PB TIPS INFORMATION

    This is a message from the PBSection that has tips on converting from TB to
    PB by the author, Bob Zale



[75300,214]
UPGRAD.INF/binary         08-Apr-90 555                Accesses: 80

    Title   : Upgrade Info from PB 2.00a to PB 2.00b
    Keywords: UPGRADE LATEST INFO

    This contains information from the author of PowerBASIC on upgrading from
    PB version 2.00a to the current version, 2.00b. Basically, it's free!



[75300,214]
USING.FIX/binary          07-Apr-90 2131               Accesses: 65

    Title   : Print using explained and a Ref Manual correction
    Keywords: MANUAL PRINTUSING FIX REFERENCEGUIDE SPECTRA OFFICIAL NOTICE

    This official Spectra release explains Print Using and one difference in it
    from TB to PB. The bug is not in PB, but was in PB. Since you may have a
    workaround in TB, you may think PB is at fault. This also has a correction
    to the Reference Guide that is not covered in the ReadMe file on your
    PowerBASIC master disk.



[76164,3215]
LJLBAR.ZIP/binary         04-Apr-90 4239               Accesses: 23

    Title   : CODE39 Barcode LaserJet font print subroutines
    Keywords: BARCODE 3-OF-9 CODE39 LASER PRINT LANDSCAPE FONTS

    PowerBASIC subroutines for creating LaserJet-II fonts to print CODE39
    (3-of-9) barcode in landscape mode.  Source code.



[75300,214]
SPOOL.ZIP/binary          02-Apr-90 2304               Accesses: 45

    Title   : Use Dos's PRINT Spooler from within PowerBASIC
    Keywords: SPOOL DOS PRINT ASM PB SOURCE

    A ASM and PB Source file that will use DOS's PRINT from within a PB
    Program. The ASM file has to be assembled into object code, so this does
    require either MASM or TASM to compile. Program by Brett Jones.



[75300,214]
TOOLFX.ZIP/binary         31-Mar-90 3094               Accesses: 72

    Title   : FIX File to allow TB Toolboxes to run under PB
    Keywords:
     TOOLBOX TB TO PB DATABASE FIX PATCH

    Here are the changes that need to be made to the database toolbox files so
    that you may compile and run under PowerBASIC.  There are five "blocks" of
    changes that need to be made. The assembly routines that are commented in
    changes 2 and 4 need not be written into your code, but we suggest that you
    do so for future reference. Please call me if you have any questions or
    comments.  Good programming!
     Tim McFarland
     Technical Support
     (408) 730-9291



[76304,1303]
PATCH1.ZIP/binary         31-Mar-90 30464              Accesses: 149

    Title   : PBPATCH.EXE to install fixes and enhancements
    Keywords: PATCH MEMORY CVF CBCD REMOVE REPLACE FN FUNCTION

    This file contains PBPATCH.EXE, to allow you to install modifications, bug
    fixes, and enhancements to PowerBASIC.  This patch corrects problems with
    premature "out of memory" errors, CVF/CBCD/REMOVE$/REPLACE, public
    references from chained programs, single precision functions/fn's, and
    other fixes and enhancements.  It should be implemented by all users of
    PowerBASIC #2.00b, and is also available on disk from Spectra Tech Support.



[75300,214]
FNDFIL.ZIP/binary         28-Mar-90 4352               Accesses: 46

    Title   : Find First, Find All of the files.
    Keywords:
     FINDFILE DIRECTORY FILES DIR GET FILE PBU SOURCE DEMO UTILITY

    FindFile is a .pbu (with source included) that uses DOS functions to Find
    the first matching file to a filespec or filemask, and to find the next
    files until no more exist. A short demo, FF.Bas, is included along with a
    short README file.



[75300,214]
TODAY.ZIP/binary          28-Mar-90 19456              Accesses: 23

    Title   : Today, retreive todays date, weekday, month, year
    Keywords:
     DATE TODAY YEAR MONTH DAY UNIT SOURCE EXE

    This unit and demo will retrieve the time and date from DOS. While all
    source is provided, a EXE file is also proivided to let those without
    PowerBASIC to run this program.



[75300,214]
VPRNT.ZIP/binary          28-Mar-90 25367              Accesses: 26

    Title   : ViewPrint for PowerBASIC
    Keywords: VIEWPRINT COMMAND

    PowerBASIC 2.x does not have View Print command for Text modes as yet. Is
    it promissed for the next version? If so, until then this library of a demo
    and .pbu (along with an included .EXE file and .DOC) can be used.



[75300,214]
EXISTS.ZIP/binary         27-Mar-90 21381              Accesses: 51

    Title   : Exists, Findfile and see how to access strings.
    Keywords:
     STRINGSEGMENT STRINGPOINTER STRSEG STRPTR STRINGS


     This example includes the source code for a PBU file, and a demo with full
    remarks. Shown is how to access the new strings in PowerBASIC. These new
    ways are necessary because of the unlimited string space in PowerBASIC (no
    more 64k limit).
     Also shown is how this was accomplished in Turbo Basic.
     The demo, DemoEx.Bas (or DemoEx.EXE to see it run if you don't have
    PowerBASIC) is a simple sample to show how to access the unit.




```
{% endraw %}

## PARSECMD.BAS

{% raw %}
```bas
$IF 0
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 This code is based on an example from Henry Piper's (72330,1721)
 posting in the Spectra area of the PCVenB forum on Compurserve of
 September 6, 1990

 Made into a sub 9/9/90 by Barry Erick 75300,214
 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 The code between the 'Here and 'ToHere should be included to use this.
 Two variables result. NumArgs% returns the number of parameters on
 the command line. The string array Args$() returns the actual arguments.

 Testing this demo can be done this way:  compile and run from
  the command line as
	ParseDemo First Second /another /stillanother andmore last

 The demo code will print the number of parameters and the actual
 parameters.

 This can also be run from within the IDE my using Alt/O/P and entering
 the parameters before running with F9

 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
$ENDIF

 DEFINT a-z
'Here
 %False = 0
 %True = -1

SUB ParseCmds
SHARED Args$(),NumArgs%
LOCAL Included%,StrLen%
 NumArgs% = 0
 Included% = %False
 REDIM  Args$(25)
 Cmd$ = COMMAND$
 StrLen% = LEN(cmd$)
 FOR I = 1 TO StrLen
     Temp$ = MID$(Cmd$,i,1)
     IF (Temp$ <> " " AND Temp$ <> CHR$(9) AND_
         Temp$ <> "/" AND Temp$<>"-") THEN
        IF NOT Included% THEN
           NumArgs% = NumArgs% + 1
           Included% = %True
        END IF
        Args$(NumArgs%) = Args$(NumArgs%) + Temp$
     ELSE
        Included% = %False
     END IF
 NEXT
END SUB
'ToHere

' Main Demo
 CALL ParseCmds



 PRINT "There are";numargs; "commands on the command line"
 FOR i = 1 TO numargs
     PRINT "Argument number";i;" is:  ";args$(i)
 NEXT
 END
```
{% endraw %}

## RATS.BAS

{% raw %}
```bas
' The following is a program I wrote to teach myself how to program the mouse.
' It doesn't use all of the mouse functions but I think the ones it does use
' will handle about any task you will need if kept simple.
'
' If you have any questions you can drop me a line.
' Not that I can answer them, but you can still ask.	John Watts
'											73760,751
' NOTE:										PCVENB LIB 12 Spectra
' Set TAB's to five (5) ... Alt-O E T 5 <Enter>

gosub setup					' Set up some variables

'──────────────────────────────────────────┐
mode% = fVideoMode%                       '│   This function & routine will
								  '│   determine whether you are
select case mode%                         '│   running a color or monochrome
	case 3                               '│   monitor and set the foreground
		foreground% = 14	'CGA/EGA/VGA │   color for the work area.
		videobufferabs& = &hb800 * 16   '│   The foreground color must be
	case 7                               '│   set   ──┐
		foreground% = 7	'MONO/HERC   │           │  NOTE: This is for
		videobufferabs& = &hb000 * 16   '│           │        monochrome
end select                                '│           │        compatibility
'──────────────────────────────────────────┘           │
call MainScreen							    '│
color foreground%,0 '──────────────────────────────────┴─before you initilize
locate 4,1                                            '  the mouse.──┐
													   '│
for x% = 1 to 13                                                    '│
		print scrn$(x%);                                          '│
next x%                                                             '│
													   '│
call rat.init(m%,b%) '───────────────────────────────────────────────┘
if not m% then print "Mouse not installed":end

call rat.min.max.vert(24,176)

call rat.show

first.loop:

call rat.min.max.vert(24,176)

call rat.min.max.horz(0,632)

do
	call rat.pos.but(but.status%,row%,col%)

	if (row% > 120) and (but.status% = 0) then goto skip
	locate 2,9

	r% = ((row% + l% ) / 8) + (tl% - 1)
	c% = (col% + 8 ) / 8
	print using "###";r%;
	locate ,21
	print using "###";c%;

	if but.status% then
		but% = -1
		select case but.status%

		case 1
			locate 2,75
			print chr$(219);
			gosub place.character
			goto skip
		case 2
			locate 2,79
			print chr$(219);
			gosub scroll.up
		case 4
			locate 2,77
			print chr$(219);
			gosub scroll.down
		case 3
			locate 2,75
			print chr$(219);
			locate ,79
			print chr$(219)
			gosub place.character
			gosub scroll.up
		case 5
			locate 2,75
			print chr$(219);
			locate ,77
			print chr$(219)
			gosub place.character
			gosub scroll.down

		end select

	elseif but% then
		locate 2,75
		print "L";
		locate ,77
		print "M";
		locate ,79
		print "R";
		but% = 0
	end if
skip:
	if row% > 120 then
		select case col%
		case 0 to 416
			if but% then exit if
			goto second.loop
		case 424 to 632
			if but% then exit if
			goto third.loop
		end select
	end if

loop while not instat

goto finish

second.loop:
locate 25,1
print "Select character";string$(40,32);
call rat.min.max.horz(0,416)

do

	call rat.pos.but(but.status%,row%,col%)


	if row% < 128 then
		locate 25,1
		print "Place character";string$(40,32);
		goto first.loop
	end if

	if but.status% and row% > 128 then
		char.selected% = screen((row%+8)/8,(col%+8)/8)
		select case char.selected%
		case 69,84,88
			gosub text
		case else
			locate 23,77
			print chr$(char.selected%);
		end select
	end if
loop while not instat

goto finish

third.loop:

call rat.min.max.vert(24,136)

call rat.min.max.horz(432,624)

		locate 25,1
		print "Select task";string$(40,32);

do

	call rat.pos.but(but.status%,row%,col%)

	if row% < 128 then
		locate 25,1
		print "Place character";string$(40,32);
		goto first.loop
	end if

	if but.status% then
		select case col%

		case 432 to 472				'Save screen
			open "o", 1, "tbscreen.fil"
			for x% = 1 to 25
				write #1,scrn$(x%)
			next x%
			close #1

		case 480 to 520				'Load screen
			open "i", 1, "tbscreen.fil"
			for x% = 1 to 25
				input #1,scrn$(x%)
			next x%
			close  #1
			locate 4,1
			for x% = 1 to 13
				print scrn$(x%);
			next x%

		case 528 to 568                    'View screen
			call rat.hide
			call SaveScreen
			cls
			for x% = 1 to 24
				print scrn$(x%);
			next x%
			locate 25,1
			print "Press any key to continue.";
			while not instat:wend
			cls
			call RestoreScreen
			call rat.show

		case 576 to 624				'Clear screen
			for x% = 1 to 25
				scrn$(x%) = string$(80,32)
			next x%
			locate 4,1
			for x% = 1 to 13
				print scrn$(x%);
			next x%

		end select
	end if
loop while not instat

goto finish

'********************************** sub-routines *****************************

place.character:
	if row% > 120 then return second.loop
	locate (row%+8)/8,c%
	call rat.hide
	print chr$(char.selected%);
	call rat.show
	mid$(scrn$(r%),c%,1) = chr$(char.selected%)
return

scroll.up:
	if bl% = 25 then beep:delay 1:return
	call rat.hide
	call scroll(1,4,1,16,80,7,-1)
	incr tl%
	incr bl%
	locate 16,1
	print scrn$(bl%);
	call rat.show
	delay .1						' You may want to change this delay
return							' or even remove it

scroll.down:
	if tl% = 1 then beep:delay 1:return
	call rat.hide
	call scroll(1,4,1,16,80,7,0)
	decr tl%
	decr bl%
	locate 4,1
	print scrn$(tl%);
	call rat.show
	delay .1						' Same here
return

text:
	locate 25,1
	print "Position cursor and type.   Press Esc to exit.";

	call rat.min.max.vert(24,120)
	call rat.min.max.horz( 0,632)

	do
		while not instat
			call rat.pos.but(b%,row%,col%)
			r% = ((row% + l% ) / 8) + (tl% - 1)
			c% = (col% + 8 ) / 8
			locate 2,9
			print using "###";r%;
			locate ,21
			print using "###";c%;
		wend
		txt$ = inkey$
		if txt$ = chr$(27) then
			char.selected% = 32
			call rat.min.max.vert(24,176)
			return
		end if
		locate (row% + 8) / 8,(col% + 8) / 8
		call rat.hide
		print txt$;
		mid$(scrn$(r%),c%,1) = txt$
		call rat.move(row%,col%+8)
		call rat.show
	loop
return

setup:
dim scrn$(1:25)
'─────────────────────────────────────────────────────────────┐ Set up a
screenbuffer$ = string$(4000,32)                             '│ string to
screenbufferseg& = strseg(screenbuffer$)                     '│hold the video
screenbufferofs& = strptr(screenbuffer$)                     '│buffer and get
screenbufferabs& = screenbufferseg& * 16 + screenbufferofs&  '│20 bit address
'─────────────────────────────────────────────────────────────┘ of string
for x% = 1 to 25
	scrn$(x%) = string$(80,32)
next x%

l% = -16
tl% = 1
bl% = 13
return

finish:
	while instat:ans$ = inkey$:wend
	select case ans$
		case chr$(27)				' If Esc key is pressed
			call rat.hide
			cls
			end
		case chr$(0)+chr$(59)		' If F1 key is pressed ( HELP )
			call rat.hide
			call SaveScreen
			call Help
			cls
			call RestoreScreen
			call rat.show
			goto skip
		case chr$(0)+chr$(72)		' Alternate scroll down
			gosub scroll.down
			goto skip
		case chr$(0)+chr$(80)		' Alternate scroll up
			gosub scroll.up
			goto skip
	end select
goto skip
'*****************************************************************************

sub MainScreen
cls
color 15,1,1

print "┌─────┬─────┬─────┬─────┬────────────────────────────────────────────────┬─┬─┬─┐";
print "│ Row │     │ Col │     │   SCREEN BUILDER                               │L│M│R│";
print "└─────┴─────┴─────┴─────┴────────────────────────────────────────────────┴─┴─┴─┘";
locate 17,1
color 0,7
print "┌────────────────────────────────────────────────────┬─────────────────────────┐";
print "│ ┌  ┬  ┐   ╒  ╤  ╕   ╓  ╥  ╖     ╔  ╦  ╗    ░  ▒  ▓ │ Save  Load  View  Clear │";
print "│                                                    ├─────────────────────────┤";
print "│ ├  ┼  ┤ │ ╞  ╪  ╡   ╟  ╫  ╢  ║  ╠  ╬  ╣    █  ▄  ▌ │ Written by:             │";
print "│         │                    ║                     │ John T. Watts           │";
print "│ └  ┴  ┘   ╘  ╧  ╛   ╙  ╨  ╜     ╚  ╩  ╝    ▐  ▀  ■ │ 2027 Saturn Dr.         │";
print "│   ───       ═══       TEXT        ═══              │ Bastrop, La. 71220      │";
print "└────────────────────────────────────────────────────┴─────────────────────────┘";
end sub

'rat.init(mouse%,button%)

'rat.show

'rat.hide

'rat.pos.but(but.status%,row%,col%)

'rat.move(row%,col%)

'rat.move(row%,col%)

'rat.min.max.horz(min%,max%)

'rat.min.max.vert(min%,max%)



sub rat.init(mouse%,button%)
	reg 1,&h3533					' Make DOS call to see if mouse driver
	call interrupt &h21				' is installed

	if reg(9) and reg(2) then		' YES
		mouse% = -1
	else							' NO
		mouse% = 0
		exit sub
	end if

	reg 1,0						' From now on you can talk to the mouse
	call interrupt &h33				' by loading reg 1 (REG AX) with the
	mouse% = reg(1)				' mouse function and making a call to
	button% = reg(2)				' the mouse driver (interrupt &h33).
end sub							' Function 0 initilizes and returns
								' the number of buttons on the mouse.

sub rat.show                            ' Function 1 unhides the cursor
	reg 1,1
	call interrupt &H33
end sub

sub rat.hide						' Function 2 hides the cursor
	reg 1,2
	call interrupt &h33
end sub

sub rat.pos.but(but.status%,row%,col%)	' Function 3 tells you if a button
	reg 1,3						' is down and where the cursor is
	call interrupt &h33
	but.status% = reg(2)
	col% = reg(3)
	row% = reg(4)
end sub

sub rat.move(row%,col%)				' Function 4 will relocate the cursor
	reg 1,4
	reg 3,col%
	reg 4,row%
	call interrupt &h33
end sub

sub rat.min.max.horz(hmin%,hmax%)		' Function 7 sets horizonal boundries.
	reg 1,7						' The cursor will be restricted to
	reg 3,hmin%					' the boundries set here. RIGHT/LEFT
	reg 4,hmax%
	call interrupt &h33
end sub

sub rat.min.max.vert(vmin%,vmax%)		' Function 8 sets vertical boundries.
	reg 1,8						' Same as above except UP/DOWN
	reg 3,vmin%
	reg 4,vmax%
	call interrupt &h33
end sub

'───────────────────────────────────────────────────────────────────────────┐
' The following routine allows you to scroll the screen up and down.		 │
' This is another example of the power of PowerBasic.  To easily make Dos   │
' calls gives the PowerBasic programer easy access to all DOS functions.	 │
'───────────────────────────────────────────────────────────────────────────┘


'L%  = Number of lines to scroll ( usually set to one )
'TR% = Top row of scrolling area
'LC% = Left column of scrolling area
'BR% = Bottom row of scrolling area
'RC% = Right column of scrolling area
'A%  = Attribute of characters on blank line
'UP% = -1 if you want to scroll up    0 to scroll down

SUB SCROLL (L%,TR%,LC%,BR%,RC%,A%,UP%)
LOCAL UD%
    %AX = 1
    %BX = 2
    %CX = 3
    %DX = 4
    %H  = 256

    IF UP% THEN UD% = 6 : ELSE UD% = 7

    REG %AX, L% + %H * UD%
    REG %BX, A% * %H
    REG %CX, (LC%-1) + %H * (TR%-1)
    REG %DX, (RC%-1) + %H * (BR%-1)

    CALL INTERRUPT &H10

    IF UD% = 6 THEN LOCATE BR%,LC% : ELSE LOCATE TR%,LC%

END SUB

function fVideoMode%
	reg 1,&h0f00
	call interrupt &h10
	fVideoMode% = reg(1) and &b0000000011111111
end function

'───────────────────────────────────────────────────────────────────────────┐
' The following two subs save and restore the screen.  In CGA/EGA/VGA we	 │
' could just change pages, but HERC boards have only one page in test mode. │
' Study these routines to see the power of PowerBasic 2.x.				 │
'───────────────────────────────────────────────────────────────────────────┘

sub SaveScreen
	shared videobufferabs&,screenbufferabs&
	def seg = 0
	poke$ screenbufferabs&, peek$(videobufferabs&,4000)
	def seg
end sub

sub RestoreScreen
	shared videobufferabs&,screenbufferabs&
	def seg = 0
	poke$ videobufferabs&, peek$(screenbufferabs&,4000)
	def seg
end sub

' The following sub displays help

sub Help
	locate 3,1
	Print "┌────────────────────────────────────────────────────────────────┐"
	print "│                             HELP                               │"
	print "│                                                                │"
	print "│ Left Button   - Select and place    Right Button - Scroll up   │"
	print "│ Middle Button - Scroll down(if you haven't up graded from the  │"
	print "│ Micro Soft two button mouse all is not lost, you can use the   │"
	print "│ up and down arrow keys.)                                       │"
	print "│ Button combinations are possible- Place character and scroll   │"
	print "│                                   at the same time-Left & Right│"
	print "│ F1 - gives you this page                                       │"
	print "│ Esc - to exit                                                  │"
	print "│                                                                │"
	print "│ To type text- place cursor on the word TEXT & press left button│"
	print "│               then position cursor where you want the text to  │"
	print "│               be and start typing.                             │"
	print "│                    PRESS ANY KEY TO CONTINUE                   │"
	print "└────────────────────────────────────────────────────────────────┘"
	while not instat:wend
	junk$ = inkey$
end sub
```
{% endraw %}

## REBOOT.BAS

{% raw %}
```bas
$link "rebot.obj"

declare sub reboot()

call reboot

```
{% endraw %}

## REBOOT.DOC

{% raw %}
```
**** NOTICE ****
  This is a potentially hazardous routine, and I make no claims whatsoever
  about it's functionability or suitability for a given purpose.  By using
  this routine, you accept any problems that may occur by said use.
****************


Subroutine:  Reboot
Purpose:     Allow user to perform a warm start during program execution
Warnings:    You should ensure that all files have been closed properly
	     before calling this subroutine.  Mis-use can (and probably
	     will) result in corrupt data files.
Setup:	     Link the object file into the main program and declare the
	     subroutine:
	       $link "REBOT.OBJ"
	       declare sub Reboot()
Calling:     CALL Reboot


While other methods can be used to reboot a computer, this one takes
up only 9 bytes.  This is the only method that I have found that will
reliably reboot my computers.  Following is the .ASM code.....

	Public Reboot		; declare Reboot as a public subroutine

Code	Segment	Byte		; define code segment
	assume cs:code		; tell the compiler about the code segment

Reboot	Proc	Far		; reboot is a far process

	mov	ax,0ffffh	; push the segment
	push	ax		; and the offset
	mov	ax,0000h	; of the bios warm start routine
	push	ax		; onto the stack.
	retf			; run the routine.

Reboot	EndP			; end of reboot process

Code	EndS			; end of code segment

	End			; end of .asm program


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2636

     Volume in drive A has no label
     Directory of A:\

    PKZ102   EXE    136192  11-14-89  11:07a
    PRSCMD   ZIP      1057   9-18-90   8:02a
    RATS     ZIP      4436   9-18-90   7:46a
    REBOOT   ZIP      1408   9-18-90   7:51a
    GO       BAT        28  11-13-90   9:23a
    GO       TXT      1188   6-27-91   2:25p
    LIBRARY  DOC     30241   6-27-91  11:49a
            7 file(s)     174550 bytes
                          143360 bytes free
