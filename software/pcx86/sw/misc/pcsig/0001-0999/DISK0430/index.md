---
layout: page
title: "PC-SIG Diskette Library (Disk #430)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0430/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0430"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANALYTICALC 1 OF 3 (ALSO 431, 432)"

    AnalytiCalc is a complete Spreadsheet/Database/Graphics/Word Processor
    program.  Written in FORTRAN, it is quite fast and has attractive
    features.  The author's goal is an inexpensive, highly integrated
    package.  The complete system comes on three disks.  Disk one is the
    primary disk for a computer that is limited to 256K memory.  Disk two
    is the supplemental disk with documentation and extra files.  Disk
    three is the primary disk for a computer with more than 320K memory.
    
    ALL THREE DISKS ARE NEEDED TO USE THE SYSTEM.  This is a complex
    package, and the user should be sure to read the documentation before
    using it.
    
    Features:
    
    ~ Number of Columns......................................18000
    ~ Number of Rows.........................................18000
    ~ Maximum Length of Formulas (characters)..................109
    ~ Number of cells that can be full at once...............18000
    ~ Number of simultaneous named areas permitted.............300
    ~ Number of scratch cells outside spreadsheet...............60
    ~ Precision of calculations (digits; 8 bytes used)..........16
    ~ Total maximum storage managed (bytes)..............2,113,020
    ~ Maximum depth of document nesting (outline processor)......4
    ~ Maximum number of parameters varying to goal seek..........8
    ~ Maximum record size for data files accessed as database..128
    ~ Maximum number of files namable in one sheet..........>18000
    ~ Maximum cell columns displayable on one screen............20
    ~ Maximum number of rows displayable in one display.........75
    ~ Maximum simultaneous different cell display formats per
    sheet (taken from large set)...........................76
    ~ Length of format specification (characters)................9
    
    System Requirements:  256K, two disk drives and monochrome display
    
    How to Start: Read and print the document files ACSTART.DOC,
    README.DOC, MANUSQ.HLP, PKGINS.DOC, and ANALY.TUT.  MANUSQ.HLP will
    describe how to unsqueeze the manual file.  Unsqueeze it and read it
    before starting.  When you have read the manuals, boot Disk 1 and type
    ANALY to fire up the spreadsheet system.  Then run through the
    tutorial to get a feel for it.
    
    Suggested Registration: $49.95 includes update notification, latest vers
    with auxiliary programs and features
    
    File Descriptions:
    The First Disk Contains:
    ANALY    EXE  Main program of Spreadsheet/DB/WP system
    AUTOEXEC BAT  Demo Autoexec.bat that types AUXKPD.TXT to set up BIGANSI.
    ANALY    TQT  Tutorial on use of AnalytiCalc as spreadsheet
    AUXKPD   TXT  File of escape sequences to initialize BIGANSI.SYS when ty
    PIE      BAS  Piechart program for sections of AnalytiCalc spreadsh eet
    PCCHELP  HQP  Online direct access HELP file
    NOTICE   TXT  Documents new features and distribution policy/price
    KEYPAD   DOC  Documentation on function key usage
    GRF      BAT  Batch file that goes with GRF.CMD
    EDIT     DQC  Editor manual (condensed) for EDIT.EQE on Disk 2. Squeezed
    DPATH30  DQC  Squeezed documentation of above (Use USQ.EXE to unsqueez e
    DPATH30  COM  DOS PATH command extension: handy to run ANALY off RAM dis
    DIFF     EQE  Squeezed executable (Use USQ to unsqueeze)
    DIFF     DOC  Intelligent differences between 2 text files (or saved she
    CPM      EQE  CP/M-86 SSDD disk read/write/etc. under MSDOS. Squeezed .
    CONFIG   SYS  CONFIG.SYS that loads BIGANSI.SYS
    BIGANSI  SYS  Modified ANSI.SYS that supports more defs than standard
    BER      PCC  Business expense report template.
    LST      DQC  Listing documentation-squeezed
    ANALYCL  CQD  Pocket reference card-squeezed
    V21      NOT  Version notice
    
    The Second Disk Contains:
    ACINIT   PRM  Part of main program
    USQ      EXE  Unsqueeze utility
    MANUSQ   HLP  Documentation on what's here and how to unsqueeze
    DTC      DQC  Desktop Calendar documentaion, squeezed. Handy appointment
    EDIT     EQE  A screen editor. Simple but fast and handles any size file
    ANALY    MQN  AnalytiCalc manual file, squeezed. Full reference manual +
    GRF      BQS  Line chart, fitting, and scattergram program.
    ACSTART  DOC  More startup information
    PKGINS   DOC  How to install the package
    F1040    PQC  Part of US Federal Income Tax system; saved worksheet, squ
    DTC      EQE  DeskTop Calendar program. Use for all your timekeeping, ap
    DTC      HQP  DeskTop Calendar online HELP screen. Unsqueeze.
    IDENT    TXT  Identifies the disk.
    ACGRAF   EXE  Histogram and scatterplot utility for AnalytiCalc.
    ZERO     EQE  CP/M-86 SSDD disk initialize CP/M directory structure, squ
    
    The Third Disk Contains:
    1040     PCC  Part of US Federal Income Tax spreadsheet template
    AKDA     CMD  One of the command files executing a keypad command
    AKD      CMD  One of the command files executing a keypad command
    AKB      CMD  One of the command files executing a keypad command
    AKA      CMD  One of the command files executing a keypad command
    BUFEXTEN COM  Keyboard buffer extender (allows type ahead of 150 chars)
    BUF160   COM  Keyboard buffer extender
    BUF160   AQM  Source to keyboard buffer extender; may be better than
    BIGANSI  SYS  Modified ANSI.SYS that supports more defs than standard
    AUXKPD   TXT  File of escape sequences to initialize BIGANSI.SYS when ty
    AUTOEXEC BAT  Demo Autoexec.bat that types AUXKPD.TXT to set up BIGANSI.
    ANALY    TQC  Approximate table of contents for AnalytiCalc manual (sque
    ANALY    EXE  Main program of Spreadsheet/DB/WP system
    CCO      CMD  One of the command files executing a keypad command
    CPR      CMD  One of the command files executing a keypad command
    CONFIG   SYS  CONFIG.SYS that loads BIGANSI.SYS
    DIFRW    DOC  Documentation for DIFRW.EXE
    DIFRDWRT FQR  sources for DIFRW.EXE, squeezed. Use USQ to unsqueeze.
    CRWA     CMD  One of the command files executing a keypad command
    CRW      CMD  One of the command files executing a keypad command
    DIFRW    EXE  Utility to read or write DIF files from AnalytiCalc saved
    F1040    DOC  Documentation on the pieces of US Income Tax template
    F1040    CMD  Part of US Federal Income Tax template
    INCENT   CMD  One of the command files executing a keypad command
    HTXT     CMD  One of the command files executing a keypad command
    HTX      CMD  One of the command files executing a keypad command
    GRF      CMD  Line chart, fitting, and scattergram program
    SCHEDB   PCC  Part of US Federal Income Tax template for AnalytiCalc
    SCHEDA   PCC  Part of US Federal Income Tax template for AnalytiCalc
    PIE      BAS  Piechart program for sections of AnalytiCalc spreadsheets
    PCCHELP  HQP  Online direct access HELP file
    NOTICE   TXT  Documents new features and distribution policy/price
    LST      COM  Screen lister. Very fast listings to screen of a file.
    KER      EQE  Communications program, an old Kermit using IBM BIOS only
    KER      DOC  Documentation for generic Kermit communications program
    SCHEDY   PCC  Part of US Federal Income Tax template for AnalytiCalc
    SCHEDX   PCC  Part of US Federal Income Tax template for AnalytiCalc
    WND      CMD  One of the command files executing a keypad command
    TOEND    CMD  One of the command files executing a keypad command
    SRCH     CMD  One of the command files executing a keypad command
    SETUP    CMD  How to configure ANSI.SYS for aux keypad definitions
    ANNOT    NOT  Cell annotation instructions
    README   1ST  Notes from author
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AUXKPD.TXT

{% raw %}
```
Type this file to configure ANSI.SYS for aux keypad definitions
for AnalytiCalc.
First the cursor controls
[0;72;"1";13p
[0;80;"2";13p
[0;75;"3";13p
[0;77;"4";13p
Next the F1 key as help
[0;59;"//";13;"H0";13p
CTRL F1 to fill in line 25 with help
[0;94;"@HTX.CMD";13p
Next F2 as SEarch
[0;60;"@SRCH.CMD";13p
Then alt F1 as keypad picture
[0;104;"//";13;"H9";13p
Define home as going to top left
[0;71;"//";13;"OA A1";13;"LA1";13p
Define INS as enter key (for enter mode)
[0;82;"@AKD.CMD";13p
Define CTRL 4 as scroll left
[0;115;"//";13;"SC";13;"LD#-20#-20";13;"OAD P#-7#0";13p
Define PgDn as scroll down (15 rows)
[0;81;"//";13;"LD#-20#-20";13;"SC";13;"OAD P#0#18";13p
Define CTRL 6 as scroll right
[0;116;"//";13;"LD#-20#-20";13;"SC";13;"OAD P#7#0";13p
Define PgUp as scroll up
[0;73;"//";13;"LD#-20#-20";13;"SC";13;"OAD P#0#-18";13p
Define F3 as the copy range key
[0;61;"//";13;"LA1";13;"%Enter src-rng Dst-rng>%CR %\%\%";13p
Define Alt F3 as copy cell to range
[0;106;"@CPR.CMD";13p
Define F10 as recalculate
[0;68;"//";13;"R";13p
Define ALT F10 as recalculate force
[0;113;"//";13;"RR";13p
Define F4 as SAVE sheet
[0;62;"//";13;"PPX";13p
Define Alt F4 as save numeric
[0;107;"//";13;"PPN";13p
Define F5 as GET sheet
[0;63;"//";13;"LA1";13;"GP";13p
Define Alt F5 as Get Relocating
[0;108;"//";13;"GPR";13p
Define F6 as Set Enter Motion Direction
[0;64;"@AKB.CMD";13p
Define ALT F6 as copy row to area
[0;109;"@CRW.CMD";13p
Define CTRL F6 as copy col to area
[0;99;"@CCO.CMD";13p
Define F7 as set window (OR cmd)
[0;65;"@WND.CMD";13p
Define F8 as ins/del row/col
[0;66;"@AKA.CMD";13p
Define F9 as exit enter mode
[0;67;"//";13p
Define Alt F9 as alternate Enter mode
[0;112;"@AKDA.CMD";13p
Define END as goto end
[0;79;"@TOEND.CMD";13p
Define Ctrl-F2 as graph
[0;95;"@GRF.CMD";13p

```
{% endraw %}

## FILES430.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No 430   AnalytiCalc SYSTEM (Disk #1 of 3)                      v1.2
--------------------------------------------------------------------------
AnalytiCalc is a complete Spreadsheet/Database/Graphics/Word Processor
program.  It is written in FORTRAN, is quite fast and feature-full.
For those who want an 'integrated' package without a high price.  The
complete system comes on three diskettes.  This is disk #1 and is for
an IBM-PC or clone limited to 256K memory.
 
ANALY    EXE  Main program of Spreadsheet/DB/WP system
ANALY    TQT  Tutorial on use of AnalytiCalc as spreadsheet
ANALYTCL CRD  Pocket Reference Card summary of cmds, functs
AUTOEXEC BAT  Demo Autoexec.bat that types AUXKPD.TXT to set up BIGANSI.SYS
AUXKPD   TXT  File of escape sequences to initialize BIGANSI.SYS when typed
BER      PCC  Business expense report template.
BIGANSI  SYS  Modified ANSI.SYS that supports more defs than standard
CONFIG   SYS  CONFIG.SYS that loads BIGANSI.SYS
CPM      EQE  CP/M-86 SSDD disk read/write/etc. under MSDOS. Squeezed.
DIFF     DOC  Intelligent differences between 2 text files (or saved sheets)
DIFF     EQE  Squeezed executable (Use USQ to unsqueeze)
DPATH30  COM  DOS PATH command extension: handy to run ANALY off RAM disk
DPATH30  DQC  Squeezed documentation of above (Use USQ.EXE to unsqueeze)
EDIT     DQC  Editor manual (condensed) for EDIT.EQE on Disk 2. Squeezed.
GRF      BAT  Batch file that goes with GRF.CMD
KEYPAD   DOC  Documentation on function key usage
LSTX     EXE  A very fast text file editor with online help
NOTICE   TXT  Documents new features and distribution policy/price
PCCHELP  HQP  Online direct access HELP file
PIE      BAS  Piechart program for sections of AnalytiCalc spreadsheets
SCRNCOLR AQM  source code for SCRNCOLR.COM
SCRNCOLR DOC  Documentation for SCRNCOLR.COM
SCRNCOLR COM  Program to change screen colors.
```
{% endraw %}

## KEYPAD.DOC

{% raw %}
```
Initially on running AnalytiCalc for the first time, reply No to the
question about entering a NEW floating point format default. Reply
22 and 22 to rows/columns to be used and reply 1 and 1 to sizes of
formula and value files. This uses in memory storage, which is sufficient
for 800 cells with about 30 characters formula each.
	The manual will provide guidance on how to answer these questions
for larger sheets.
	The title can be anything, up to 80 characters and normally appears
on printouts. Just pick something descriptive.

	Keypad Key Meanings

	Keypad keys are used to automate frequently used commands. You can
add more commands by editing AUXKPD.TXT (see the Chapter 13 area describing
ANSI.SYS in the DOS manual).

Key		Action

F1		HELP - displays short menu of available HELP pages and
			permits selection of one for further display.
Alt-F1		Displays keypad diagram
Ctrl-F1		Displays one liner reminder of how to get help on line 25

F2		Search - allows you to enter text to search for. Will move
			current cell to the cell whose formula STARTS
			WITH the string you entered. (There is another
			search variant available that will let you find
			cells CONTAINING the string you enter; see the >
			command in the manual.)

F3		Copy Range - allows you to copy a row or column area
			(e.g., B5:B20) to another row or column area
			(e.g., C5:C20) relocating formulas therein. You
			enter the two ranges separated by a space.
Alt-F3		Copy cell to area - allows you to copy a single cell to a
			rectangular area which you delimit by entering
			the upper left and right coordinates and then
			the lower left coordinate in response to prompts.
			Assumes that the cell is at the upper left corner of
			the area to be copied into.

F4		Save sheet - saves sheet on a file. You enter filename and
			how much to save. Saves formulas.
Alt-F4		Save sheet numbers - saves sheet but as numbers (for graphics).

F5		Get sheet. Loads sheet from file.
Alt F5		Get sheet and relocate formulas so that current cursor position
			is equivalent to A1 in saved file. Allows merging
			sheets.

F6		Set Auto Motion Direction. Allows you to set what direction the
			cursor will move in after an Enter of cell contents.
			Use prior to getting into Enter mode.
Alt-F6		Copy Row to area. You reply to further questions giving the
			upper left and right corners of the area and the
			lower left corner. Assumes the row to be copied is the
			top row of the area.
Ctrl-F6		Copy Column to area. You reply to further questions giving the
			upper left and right corners of the area and the
			lower left corner. Assumes the column to be copied is
			the leftmost column of the area.


F7		Set Window - allows you to make the cell at the cursor and
			all cells right and down from it point at the region
			of the spreadsheet whose upper left corner is the
			cell you name.

F8		Insert/Delete Rows or Columns - Allows you to add any number
			of rows or columns. If the number is negative, rows
			or columns are deleted. E.G. 4R would add 4 Rows,
			-2C would delete 2 columns, all at the current cursor
			position.

F9		Exit ENTER mode.

F10		Recalculate sheet
Alt F10		Recalculate, Force recalculation of constants too.


INSert key gets into Enter mode where the "E " command is not needed. Arrow
keys, HOME, END, PgUp, PgDown, and control left and right arrows do the
standard motions around the sheet. HOME in particular goes to the upper
left corner of the sheet. END sets the cursor to the lower right row
and column used currently. If you have used, let us say, 10 columns in row
1 and 11 rows in column 1, the END key will take you to cell J11, since
that is the lower right edge of the rectangular region used. You should
leave ENTER mode (INSert key) by typing F9.



		N O T E

	If running in a 256K system, file open operations sometimes are
tight on room and echos may act strangely. Recover by typing Control-Z
followed by 2 or 3 returns. This will free up the system. If your CONFIG.SYS
file in 256K includes too many buffers or files, it can create problems of
this type. On larger systems this is not a problem.
	You may add additional function keys by editing AUXKPD.TXT. The
PCDOS 2.0 manual's Chapter 13 gives the formats for the needed escape
sequences.


```
{% endraw %}

## NOTICE.TXT

{% raw %}
```
	AnalytiCalc Introduction and Notice:

	This disk is Distribution Disk #1 for AnalytiCalc - 256K.

	AnalytiCalc requires at least 256K of RAM memory, at least one
360K diskette drive, and DOS 2.0 or 2.1 or later, on an IBM PC, XT, or
AT or compatible computer. It can support displays of widths from 40
to 132 characters (defaulting to 80). In some versions of MSDOS or
PCDOS, more than 256K is required, and the "320K version" of AnalytiCalc
requires at least that amount of memory to run. An 8087 or 80287 will be
used if present.
	YOU NEED ALL 3 DISKS OF THE KIT TO RUN ANALYTICALC. A number of
required files are on disk 3 (PC SIG number 432, G.C.E. distribution 3)
and if you do not have all 3 disks, please stop, get all, then try to
use AnalytiCalc. Repeated pleas by the author to have PC-SIG correct its
printed statement that only 2 disks are needed have been ignored. If you
the user have been inconvenienced, I regret it, but it is their doing,
NOT MINE. Please obtain all disks. Registered users automatically get
all 3 with a number of extras not found here.

	To see the documentation you need either a printer 80 columns wide
to print it, or an 80 column screen to view it on.
NOTE:	If this disk is from public domain sources, it is a version which
is usually somewhat slower than the version for registered users.

        SOME DO-NOT'S

        1.  DO NOT use AnalytiCalc until you have read the documentation.

        2.  DO NOT forget to make regular backup copies of your database.

        3.  DO NOT exit (X) the program without saving your work if you
	    want it saved. (You will be asked to confirm you really want
	    to leave, however.)

        GETTING STARTED.

        If you haven't already printed the documentation, please do so
        before trying to operate AnalytiCalc. Then, READ IT!  You should
        also make sure that you have placed a "write-protect" tab on your
        AnalytiCalc distribution diskettes, so that they can't be
        accidentally erased or overwritten.

        You should now make a copy of your AnalytiCalc disks.  These will
        also serve as your "run-time" system diskettes.

		Now print the document files ACSTART.DOC, README.DOC,
	MANUSQ.HLP, PKGINS.DOC, and ANALY.TUT. MANUSQ.HLP will describe how
	to unsqueeze the manual file. Unsqueeze it and READ IT before starting.
		When you have read the manuals, boot Disk 1 and type
	ANALY to fire up the spreadsheet system. Then run through the
	tutorial to get a feel for it.

        SOME MAXIMUMS AND MINIMUMS.
             Minimum RAM Memory required ............................256K
             Minimum Disk Drives required...............................1
             Minimum Disk Storage required...........................360K
	     Number of Columns......................................18000
	     Number of Rows.........................................18000
	     Maximum Length of Formulas (characters)..................109
	     Number of cells that can be full at once...............18000
	     Number of simultaneous named areas permitted.............300
	     Number of scratch cells outside spreadsheet...............60
	     Precision of calculations (digits; 8 bytes used)..........16
	     Total maximum storage managed (bytes)..............2,113,020
	     Maximum depth of document nesting (outline processor)......4
	     Maximum number of parameters varying to goal seek..........8
	     Maximum record size for data files accessed as database..128
	     Maximum number of files namable in one sheet..........>18000
	     Maximum cell columns displayable on one screen............20
	     Maximum number of rows displayable in one display.........75
	     Maximum simultaneous different cell display formats per
		sheet (taken from large set)...........................76
	     Length of format specification (characters)................9

        INFORMATION ABOUT THE FILES ON THE ANALYTICALC DISKS

        This information is provided so that you'll know the function of
        each file in the AnalytiCalc system.
		Files marked with * are part of the AnalytiCalc system; 
	others are extra utilities, included to help you in your use of
	a PC. Files with + after them are believed to work only on close
	compatibles of the IBM PC, XT, or AT. AnalytiCalc itself runs
	on most MSDOS machines.

  Distribution Disk 1,3 Files (two disks, one for AnalytiCalc-256K and another
				for AnalytiCalc-320K, have these files with some
				variations and omissions in each, covered in
				the other. 3 disks are needed for a full kit.)
Approximate directory: some variations occur due to product enhancements.

ANALYTCL CQD * Pocket Reference Card summary of cmds, functs (squeezed)
BUFEXTEN COM   Keyboard buffer extender. Allows type ahead of 150 chars
ANALY    EXE * Main program of Spreadsheet/DB/WP system
CONFIG   SYS   CONFIG.SYS that loads BIGANSI.SYS
BIGANSI  SYS * Modified ANSI.SYS that supports more defs than std.
AUXKPD   TXT * File of escape sequences to initialize BIGANSI.SYS when typed
PCCHELP  HLP * Online direct access HELP file
AKA      CMD * One of the command files executing a keypad command
AKB      CMD * ditto
AKD      CMD * ditto
AKDA     CMD * ditto
CPR      CMD * ditto
TOEND    CMD * ditto
WND      CMD * ditto
SRCH     CMD * ditto
HTX      CMD * ditto
CCO      CMD * ditto
CRW      CMD * ditto
KER      EQE   Communications program, an old Kermit using IBM BIOS only.
SCHEDA   PCC   Part of US Federal Income Tax template for AnalytiCalc
KEYPAD   DOC * Documentation on function key usage
ANALY    TUT * Tutorial on use of AnalytiCalc as spreadsheet
AUTOEXEC BAT   Demo Autoexec.bat that types AUXKPD.TXT to set up BIGANSI.SYS
SCHEDB   PCC   Part of US Federal Income Tax template for AnalytiCalc
SCHEDX   PCC   ditto
SCHEDY   PCC   ditto
1040     PCC   ditto. Use @1040.PCC to fill in sheet if desired.
F1040    DOC   ditto. Documentation on the pieces of US Income Tax template
PIE      BAS * Piechart program for sections of AnalytiCalc spreadsheets
NOTICE   TXT * This file. Documents new features and distribution policy/price.
F1040    CMD   Part of US Federal Income Tax template
DPATH30  COM   DOS PATH command extension. Handy if you run ANALY off mem disk
DPATH30  DQC   Squeezed documentation of above. Use USQ.EXE to unsqueeze.
DIFF     DOC   Intelligent differences between 2 text files (or saved sheets)
DIFF     EQE   Squeezed executable. Use USQ to unsqueeze.
PPLN*    *   * Project Planning System (Not on demonstration system; registered
			users only.)
EDIT     DQC   Editor manual (condensed) for EDIT.EQE on Disk 2. Squeezed.

 Distribution Disk 2 Files:
Approximate listing: some files move due to growth of the manual.

MANUSQ   HLP * Documentation on what's here and how to unsqueeze the .*Q* files.
USQ      EXE * Unsqueeze utility to unsqueeze any file that's squeezed here.
DTC      DQC   Desktop Calendar documentaion, squeezed. Handy appointment keeper
DTC      HQP   DeskTop Calendar online HELP screen. Unsqueeze.
DTC      EQE   DeskTop Calendar program. Use for all your timekeeping, appts.
README   1ST * Initial documentation
F1040    PQC   Part of US Federal Income Tax system; saved worksheet, squeezed
PKGINS   DOC * How to install the package
ACSTART  DOC * More startup information
GRF      BQS * Line chart, fitting, and scattergram program.
ANALY    MQN * AnalytiCalc manual file, squeezed. Full reference manual + index.
EDIT     EQE + A screen editor. Simple but fast and handles any size file.
ANALY    TQC * Approximate table of contents for AnalytiCalc manual (squeezed)
LST      COM + Screen lister. Very fast listings to screen of a file.
CPM      EQE   CP/M-86 SSDD disk read/write/etc. under MSDOS. Squeezed.
ZERO     EQE   CP/M-86 SSDD disk initialize CP/M directory structure, squeezed
EDIT     DQC   Brief doc file for EDIT above. Squeezed.
ACGRAF   EXE * Histogram and scatterplot utility for AnalytiCalc.
IDENT    TXT * Identifies the disk.
GRF      CMD * Command file to generate graphs from inside AnalytiCalc
GRF      BAT * BATch file that goes with GRF.CMD
AUXKPD   TXT * BIGANSI.SYS setup that binds Control F2 to @GRF.CMD

        SOME FREQUENTLY ASKED QUESTIONS:


        1.  Why are you marketing AnalytiCalc in this way? ANSWER: We wanted
	    to sell AnalytiCalc at $49.95 but advertising is quite expensive
	    and dealers are reluctant to sell good inexpensive software and
	    make smaller per-sale profits when they can sell the $500 + 
	    programs and make more per sale. We felt that programs like 1-2-3
	    are grossly overpriced and wanted to provide a far more powerful
	    one at a reasonable price as a service to other PC users. So we're
	    trying the user-supported route in the hope the user community will
	    appreciate this and support the effort. The package is available
	    in the full version only direct from G.C.E. either by purchase
            or registration.

        2.  "Will it help if I buy more RAM memory for my PC?"  ANSWER:
	    Extra memory beyond 256K (or 320K if you have that version)
	    is useful for handling other DOS commands under control of
	    AnalytiCalc, but is not otherwise used. If you want to speed
	    the program up, you can use additional memory as a memory disk
	    and keep AnalytiCalc's page files there (by making the memory
	    disk your default when you run Analy). You can also speed the
	    program considerably by adding an 8087 to your system.

        3.  "In what language was AnalytiCalc written?"  ANSWER: It was
            written in FORTRAN, then compiled with the Microsoft Fortran 77
            Compiler, V3.3. There are also some assembler language subroutines.

        4.  "Can I obtain the source code for the program?" ANSWER: Yes, if
            you are willing to sign a license agreement and pay $2000.
	    A more limited source kit, containing the object libraries
	    and enough sources to add commands and functions, is available
	    (once you sign a license) for $1000.

        5.  "What is your update policy?"  ANSWER:  I'll notify all
            registered (contributing) users whenever a new version of
            AnalytiCalc becomes available.  The cost of an update will
            usually be $10 (to registered users).  If you aren't a
            contributing user you won't receive notification of updates
	    and will miss out on some programs to be offered to registered
	    users only. Registered users get the latest version of the
	    program plus some extras not available on the demonstration
	    system. Also, registered users will generally get replies to
	    questions or problems; nonregistered users will not. As an
            additional incentive, the registered-user version of AnalytiCalc
            differs from the version in public domain libraries by being
            faster as well as more capable.

        6.  "What else are you working on?"  ANSWER: There is now a
	    full blown relational DBMS which should soon have an interface
            to AnalytiCalc from it.
                The current version (with sources, manuals, and an .EXE for
            a 400K or so system) is available for $25.00 from G.C.E. with
            AnalytiCalc orders, or $30.00 by itself.
	    Several other utilities are also in the works. The database
	    interface will be quite comprehensive.

        7.  "What computers does AnalytiCalc run on?"  ANSWER: It's known
            to run on the following "MS-DOS" computers:
                  RUNS ON:
                  ------------------
                  CHAMELEON
                  COLUMBIA 1600-4
                  COMPAQ
                  CORONA
                  EAGLE 1630
                  IBM PC,XT,AT,jr
		  LEADING EDGE
		  SPERRY
                  TANDY 2000
		  TAVA

	Please let us know what other computers the program does or does not
	run on. We believe it will run also on DEC Rainbow, AT&T PC, and
	most other MSDOS machines. Either ANSI controls via a driver like
	ANSI.SYS or firmware, or an IBM compatible BIOS call for writing
	directly to screen, are all that is required for screen operation.
		Up to an extra 128K of RAM may be required for some 8088
	based machines to run AnalytiCalc over the quoted sizes. This
	depends on the machine's use of memory. The Tandy 2000 and IBM PCjr
	are two that need extra memory due to large demands by their BIOS
	and/or display systems. The Sanyo PC also needs more memory.

	8. "Why should I pay?" ANSWER: First, because it's the right thing
	to do. We aren't cheating you; don't cheat us. But also, those who
	register get the latest release of the program and some items that
	are not available on demo releases (e.g., project planning software).
	The $49.95 fee is not excessive. We charge slightly more (adding
	$5.00 shipping/handling) for direct orders, because direct orders
	receive ALL files. On registration, some auxiliary files that have
	not changed may not be sent. The new executables and extra software
	will however be sent to those who pay. New features and fixes are
	made continually, and if you do not register, your version will be
	less capable. You will also not be notified of upgrades, new items,
	or anything else, and we will not attempt to handle problems unless
	you register. The public domain libraries generally receive somewhat
        slower versions of AnalytiCalc than registered users.


        DISCLAIMER.

        In no event will the Author be liable to you for any damages,
        including any lost profits, lost savings or other incidental or
        consequential damages arising out of the use of or inability to use
        these programs, even if the Author has been advised of the
        possibility of such damages, or for any claim by any other party.


        PERMISSION TO COPY:

        Individuals are granted permission by the author to freely copy the
        AnalytiCalc programs and documentation for their own use or to
        share with others, so long as no price or other consideration is
        charged. (However, all PPLN*.* files must be deleted prior to copy
        for others.)

        Computer clubs and other non-profit organizations are granted
        permission by the author to freely copy the AnalytiCalc programs
        and documentation and share it with their members, so long as:

        1.  No price or other consideration is charged.  However, a
            distribution cost may be charged for the cost of the diskettes,
            so long as it is not more than $30 total for the 3 disks.

        2.  Club members are informed of the user-supported concept and
            encouraged to support it with their donations.

        3.  The program or documentation are not modified in any way and
            are distributed together.

	4.  The author must be informed of insertion of AnalytiCalc into any
	    library that sells diskettes (regardless of price) to nonmembers
	    and must be permitted to update AnalytiCalc in those libraries.
	    (This permits more current versions to be kept in these libraries
	    than might otherwise be possible.) Instructions on how to make
	    these updates must be supplied to the author.

        Companies are granted permission by the author to copy the Analyti-
        Calc programs and documentation for use on other computers and at
        other locations in the company, so long as:

        1.  The full registration fee of $49.95 has been paid for the original
            copy of the program.

        2.  A usage fee of $45 is paid for each additional "building" where
            AnalytiCalc will be used.  Within any building for which the
            usage fee has been paid, AnalytiCalc may be copied freely for
            use on any computer in that building.



        THE USER-SUPPORTED CONCEPT.

                               User-Supported Software
           You are encouraged to copy and share this program with others.
             If after evaluating this program you find it to be useful,
                         I trust you to send a $49.95 payment.

			       Glenn C. Everhart
                                  409 High St.
			      Mt. Holly, NJ 08060


        User-supported software is an experiment in distributing computer
        programs, based on these beliefs:

        1.  That the value and utility of software is best assessed by the
            user on his/her own system.

        2.  That the creation of personal computer software can and should
            be supported by the computing community.

        3.  That copying of programs should be encouraged, rather than
            restricted.

        Anyone may legally obtain an evaluation copy of the program from a
        friend or computer club.  After you've had a chance to use and
        evaluate the program in your own environment, you're trusted to
        either forward a payment to the author, or to discontinue use of
        the program.  In any case, you are encouraged to copy the program
        for evaluation by others.

        Free distribution of software and voluntary payment for its use
        eliminates costs for advertising and copy protection schemes.
        Users obtain quality software at greatly reduced cost. They can try
        it out before buying, and do so at their own pace and in the
        comfort of their own home or office.  The best programs will
        survive, based purely on their quality and usefulness.

        Please join the experiment.

        If you believe in these ideals, your contribution is solicited to
        help make them work.




	Many prefer a written invoice so that payment can be initiated
	through company accounting systems. The following invoice is
	provided for those in this category. You may keep it for your
	tax records if desired.




                               --------------------
                                      INVOICE
                               --------------------




           Purchased from:
                Glenn C. Everhart  	Federal ID # 221329700
                General Cybernetic Engineering
		409 High St.
                Mt. Holly, NJ 08060


           DATE:     /     /                        Invoice No. 850715
           -----------------------------------------------------------
                                             PRICE      PRICE
           PRODUCT                    QTY    EACH      EXTENDED
           -------------------------  ---    -----     --------

           "AnalytiCalc - 88"
             version 21.4             ---     $49.95   $  49.95
                                                        -------

           Usage fee for additional
           copies (each building)             $40      $
                                      ---               -------


           PCRIM DBMS kit (3 disks)
            (in "AS IS" condition)    ---     $25.00   $
	    ($30.00 if no AnalytiCalc			-------
             order accompanies)

           6.0% state sales tax                        $
           (New Jersey state residents)                 -------



                                             TOTAL:    $
                                                        -------



           Please make check payable to : Glenn C. Everhart
           You may retain this Invoice for your tax records.


```
{% endraw %}

## PIE.BAS

{% raw %}
```bas
300 DIM R(100),A$(100)
500 LINE INPUT "Saved sheet filename>";LFNM$
1000 KEY OFF
1010 WIDTH 40:CLS
1410 FOR I=1 TO 30
1412 R(I)=0:A$(I)=" "
1414 NEXT I
1420 SCREEN 1,0:COLOR 0,7
1440 LR=50:SR=44
1444 OPEN LFNM$ FOR INPUT AS #1
1450 LINE INPUT #1,T$
1451 T$=LEFT$(T$,40)
1452 ON ERROR GOTO 1470
1454 N=1:M=1:S=1.000000e-9
1456 INPUT #1,I1$,I2
1457 LINE INPUT #1,L$
1458 INPUT #1,TP,F$,TY
1460 IF TP < 0 THEN A$(N)=LEFT$(L$,8):N=N+1 ELSE R(M)=VAL(L$):M=M+1
1462 GOTO 1456
1470 IF M > N THEN N=M
1480 FOR I=1 TO N
1500 S=S+R(I)
1510 NEXT I
1515 N=N-1
1520 FOR I=1 TO N:R(I)=R(I)/S:NEXT
1530 A2=0
1550 LOCATE 2,1:PRINT T$
1570 FOR C=1 TO N
1580 A1=A2:A2=A2+R(C)*2*3.1415926#
1590 AA=(A1+A2)/2
1600 CX=160+COS(AA)*(LR-SR)
1610 CY=100-SIN(AA)*(LR-SR)
1620 CIRCLE (CX,CY),SR,1,-A1-0.001,-A2,5/6
1630 IF N < 8 THEN PAINT (CX+COS(AA)*0.8*SR,CY-SIN(AA)*0.8*SR),C MOD 4,1
1640 LX=CX+COS(AA)*(16+SR)-4*LEN(A$(C)):LY=CY-SIN(AA)*(SR+16)
1650 LOCATE 1+(LY\8),1+(LX\8):PRINT A$(C);
1660 LINE ((LX\8)*8,8*((LY\8)+1))-((LX\8)*8+8*LEN(A$(C)),8*((LY\8)+1)),1
1670 NEXT C
1680 LOCATE 22,1:PRINT "Total=";S
1700 LOCATE 23,1
1750 END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0430

     Volume in drive A has no label
     Directory of A:\

    ANALY    EXE    210737   9-05-86   2:56p
    ANALY    TQT     16312   2-11-86   5:08p
    ANALYTCL CQD     13689   4-14-86  11:25a
    AUTOEXEC BAT       146   7-20-85  10:47p
    AUXKPD   TXT      1878   3-24-86   9:54a
    BER      PCC      7361   8-08-85   5:07p
    BIGANSI  SYS      2176   9-18-84   2:43p
    CONFIG   SYS        34   6-19-85   4:15p
    CPM      EQE     18851  11-10-84  11:58p
    DIFF     DOC      3712   7-09-85   4:25p
    DIFF     EQE     13208   7-09-85  10:20p
    DPATH30  COM      2816   7-09-85   4:26p
    DPATH30  DQC      6231   7-09-85  10:21p
    EDIT     DQC      2968  11-25-84   9:21p
    FILES430 TXT      1977   1-31-87   1:36p
    GRF      BAT       105   7-22-85   8:10a
    KEYPAD   DOC      4383  10-21-84  10:56a
    LST      DQC     17634   1-08-87   9:59a
    NOTICE   TXT     19804   1-08-87  10:05a
    PCCHELP  HQP      5959   8-09-85   9:09p
    PIE      BAS       898  11-05-84   9:43a
    V21      NOT      1013   9-09-86   3:56p
           22 file(s)     351892 bytes
                               0 bytes free
