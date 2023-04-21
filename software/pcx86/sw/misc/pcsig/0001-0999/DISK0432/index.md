---
layout: page
title: "PC-SIG Diskette Library (Disk #432)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0432/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0432"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANALYTICALC 3 OF 3 (ALSO 430, 431)"

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
Add more as desired.
F1-F10 = 59-68
Shift F1-F10 = 84-93
Ctrl F1-F10 = 94-103
Alt F1-F10 = 104-113
120-131 are ALT 1,2,3,4,5,6,7,8,9,0,-,=
118,132=ctrl pg dwn,UP
73,81,71,79=pg up/dn/home/end
16-25 = alt QWERTYUIOP
30-38=alt ASDFGHJKL
44-50=ALT ZXCVBNM
82/83=INS/del

```
{% endraw %}

## DIFRW.DOC

{% raw %}
```
DIF Read / Write

The DIFRW program is able to convert DIF files to AnalytiCalc
(PortaCalc) save files, or to convert AnalytiCalc save files
to DIF files. Conventionally, AnalytiCalc save files are named
file.PCC and DIF files are named file.DIF. The program's
prompts use this convention.
	To run the program, just RUN DIFRW on VAX or PDP11;
on PC, just type DIFRW.
	The progam asks whether you want to Read DIF files
to PCC files or Write DIF files from PCC files. Reply R
or W to select one.
	The program then asks for the DIF filename and the
PCC (AnalytiCalc) filename to use. Enter each in response to
the prompt.
	If you said you wanted to Write DIF files, the program
asks whether to emit Values or Formulas. DIF is less general than
the normal AnalytiCalc save output, and the program can either
select the numerical value of each cell for the DIF file (useful
for graphing programs and the like) or the cell formula (useful
for moving to other spreadsheet type programs or for archival
purposes). Select F or V. In a sense, the formula save is more
general since it can be made again into a spreadsheet and once
computable cells are made numeric again, the values can be
recalculated. However, both are available. Use whichever you
need.
	If you said you wanted to Read DIF files (and write a
file for AnalytiCalc), the DIF format does not preserve the
formatting information for cells. The program therefore asks
for a default format to use. This can be any 9 characters of
Fortran format you like. Use the F9.2 format (i.e., reply
"F9.2", without the quotes) if you are uncertain of what to
use. This format will be placed in each cell of the AnalytiCalc
saved sheet.
	Some processing done by AnalytiCalc to flag numeric-only
cells is not done here, so spreadsheets loaded by this utility
will compute more slowly than native AnalytiCalc ones will. Dummy
EDits in AnalytiCalc to any cells that are pure numeric will
reset the flags so that speedups can be realized.
	It should be further noted that the DIF format is rather
inefficient in that it assumes that the area to be saved is a
complete rectangular region. DIFRW will fill in any cells that
are not really there with the NA numeric code, and on loading
back to an AnalytiCalc file, will discard all NA cells. The
result is that DIF saved sheets can be considerably larger than
AnalytiCalc saved files.
	All cells are treated equally here and the resulting DIF
files contain either number values or string values. This limitation
of DIF format is the reason why you must be asked whether you want
formulas or values from your AnalytiCalc saved sheet. The two cannot
be piggybacked.
	Nevertheless, this utility provides a fairly easy to use
way of converting AnalytiCalc data for other programs, or of
getting data from other utilities in a form that AnalytiCalc
can load.
	One final note:
	AnalytiCalc V18-04F is the first version of AnalytiCalc
that will work with this utility in converting AnalytiCalc
files to DIF files. If you have old .PCC files, reload them
and save them with the new AnalytiCalc to get this to work.
The cells used to be saved down columns first; now they are
saved across rows first. This has no effect on AnalytiCalc
since each record has its address, but makes conversion to DIF
of the old files quite difficult, since DIF files are specified
to be saved across rows.
		Glenn Everhart 8/9/85
```
{% endraw %}

## F1040.DOC

{% raw %}
```
Form 1040 on AnalytiCalc

To use this Form 1040 package to help with your taxes, first have a look
at the F1040.CMD file to see if you need to edit it. The file specifier
for F1040.PCC MUST be correct for where it will be while AnalytiCalc is
running on YOUR system. Therefore, add a drive letter (e.g. change it
from just F1040.PCC to B:F1040.PCC if it will be on drive B: while the
AnalytiCalc program runs from A:.)

	Now run AnalytiCalc and type

@F1040.CMD

(or just repeat its contents).

This will inhibit scrolling, set a display of 6 columns and 20 rows,
and load the F1040.PCC saved sheet. (Note: WAIT for it to finish; some
internal extra prompts are displayed during load; viewscreen update
is turned off during load.)

Now type @SCHEDX.PCC or @SCHEDY.PCC depending on whether you want to
use Schedule X or Y (depends on your filing status). Then type
@SCHEDA.PCC to do Schedule A and/or @SCHEDB.PCC to fill in Schedule
B. Finally type @1040.PCC to fill in the main Form 1040 form. Your
tax amounts will be computed and appear on the screen.

	The Schedule A and B are to the right of the main form on
the sheet, with the Schedule X or Y rates still further over. The
tax form extends for a few screens down.

	This tax form was exact for 1983 and has been updated for
1984. Schedule Y is for joint returns only. For married couples filing
separate returns, edit SCHEDY.PCC so the dollar amounts are 1/2 of
the current ones; percentages are the same. The VF command will show
the formulae used if there are questions.
	Note that the tax figured is approximate; use the tax tables
for the exact amount if income is under $50K.


```
{% endraw %}

## FILES432.TXT

{% raw %}
```
-----------------------------------------------------------------------
Disk No 432   AnalytiCalc SYSTEM (Disk #3 of 3)                 v1.2 DS2
-----------------------------------------------------------------------
The complete AnalytiCalc system comes on three diskettes.  This is disk
#3 and is for an IBM-PC or clone that has 320K or more of memory.
 
1040     PCC  Part of US Federal Income Tax spreadsheet template
AKA      CMD  One of the command files executing a keypad command
AKB      CMD  One of the command files executing a keypad command
AKD      CMD  One of the command files executing a keypad command
AKDA     CMD  One of the command files executing a keypad command
ANALY    EXE  Main program of Spreadsheet/DB/WP system
ANALY    TQC  Approximate table of contents for AnalytiCalc manual (squeezed)
AUTOEXEC BAT  Demo Autoexec.bat that types AUXKPD.TXT to set up BIGANSI.SYS
AUXKPD   TXT  File of escape sequences to initialize BIGANSI.SYS when typed
BIGANSI  SYS  Modified ANSI.SYS that supports more defs than standard
BUF160   AQM  Source to keyboard buffer extender; may be better than BUFEXTEND
BUF160   COM  Keyboard buffer extender
BUFEXTEN COM  Keyboard buffer extender (allows type ahead of 150 chars)
CCO      CMD  One of the command files executing a keypad command
CONFIG   SYS  CONFIG.SYS that loads BIGANSI.SYS
CPR      CMD  One of the command files executing a keypad command
CRW      CMD  One of the command files executing a keypad command
CRWA     CMD  One of the command files executing a keypad command
DIFF     DOC  Intelligent differences between 2 text files (or saved sheets)
DIFF     EQE  Squeezed executable (Use USQ to unsqueeze)
DIFRDWRT FQR  sources for DIFRW.EXE, squeezed. Use USQ to unsqueeze.
DIFRW    DOC  Documentation for DIFRW.EXE
DIFRW    EXE  Utility to read or write DIF files from AnalytiCalc saved files.
F1040    CMD  Part of US Federal Income Tax template
F1040    DOC  Documentation on the pieces of US Income Tax template
GRF      CMD  Line chart, fitting, and scattergram program
HTX      CMD  One of the command files executing a keypad command
HTXT     CMD  One of the command files executing a keypad command
INCENT   CMD  One of the command files executing a keypad command
KER      DOC  Documentation for generic Kermit communications program
KER      EQE  Communications program, an old Kermit using IBM BIOS only
LST      COM  Screen lister. Very fast listings to screen of a file.
NOTICE   TXT  Documents new features and distribution policy/price
PCCHELP  HQP  Online direct access HELP file
PIE      BAS  Piechart program for sections of AnalytiCalc spreadsheets
SCHEDA   PCC  Part of US Federal Income Tax template for AnalytiCalc
SCHEDB   PCC  Part of US Federal Income Tax template for AnalytiCalc
SCHEDX   PCC  Part of US Federal Income Tax template for AnalytiCalc
SCHEDY   PCC  Part of US Federal Income Tax template for AnalytiCalc
SETUP    CMD  How to configure ANSI.SYS for aux keypad definitions
SRCH     CMD  One of the command files executing a keypad command
TOEND    CMD  One of the command files executing a keypad command
WND      CMD  One of the command files executing a keypad command
```
{% endraw %}

## KER.DOC

{% raw %}
```
Generic KERMIT

This version of Kermit is fairly old but functional at least
up to 1200 baud. It uses the BIOS calls to set the communication
port. This has a few consequences:
1. It works on almost any PC lookalike.
2. The speed cannot be set from kermit; you must use the MODE
command to set the COM1: speed before running Kermit and make
your call; then Kermit will talk at the set speed.
3. The CD and CTS lights on your modem should be on. The BIOS
will not output unless it thinks a connection is established
already, so you may have to set modem switches to fool it. You'll
need to make up a suitable modem cable if you have a machine that
acts like a modem rather than a computer (e.g. the Chameleon)
in its RS232 interface. Dialing a manual modem out and getting
carrier up on the modem before starting to use Kermit works for
the author.
4. ANSI.SYS should be loaded; its escape sequences are used to
control screen output. Put DEVICE=ANSI.SYS in your CONFIG.SYS
that's used at boot time. Not all positioning is right but it's
close.
5. The SEND and RECEIVE commands are used to send and receive
files to/from remote Kermit systems. Connect will give you a
terminal connection. Works OK up to 1200 baud but because the
BIOS isn't interrupt driven it'll drop characters if you go
too fast. The STATUS command will try to tell you what commands
are available and their present state. The HELP command will
give a little more info.
6. No raw send or session logging is available here; to communicate
and send files you MUST have a remote Kermit. These exist for most
any machine in existence. You can write to Columbia Univ. Center
for Computing Activities in New York City for more info. and copies
of current Kermits. Also for a better manual.
6. Note that commands like SEND *.ASM or RECEIVE *.FOR work fine
so you don't need a command per file. SEND *.* or RECEIVE *.*
work too.
7. The backspace key sends the ASCII DEL character, not backspace.
Use control-H for backspace. Function keys can be changed via
key redefiners;  check out the public domain NEWKEY as a possible
one.


```
{% endraw %}

## NOTICE.TXT

{% raw %}
```
	AnalytiCalc Introduction and Notice:

	This is "DISK 3", the AnalytiCalc 320K version. "DISK 2"
is common to the two versions. The version of ANALY.EXE here needs
at least 320K to run. It is Disk 3 of the distribution kit as a whole.
	You need ALL 3 disks of AnalytiCalc to use the system properly.
Please obtain all three. Hopefully PC-SIG will heed my plea to correct
their printed statement that you don't need all 3, but be aware:
YOU HAVE TO HAVE THREE DISKS. The ANALY.EXE here is for 320K systems
and the ANALY.EXE on disk 1 is for 256K, BUT there are numerous other
files that are NOT on both disks 1 and 3. The manual grew too large,
and the program got too many functions, to fit everything on two
floppies even for a single memory size.

	AnalytiCalc requires at least 256K of RAM memory, at least one
360K diskette drive, and DOS 2.0 or 2.1 or later, on an IBM PC, XT, or
AT or compatible computer. It can support displays of widths from 40
to 132 characters (defaulting to 80). In some versions of MSDOS or
PCDOS, more than 256K is required, and the "320K version" of AnalytiCalc
requires at least that amount of memory to run. An 8087 or 80287 will be
used if present.
	To see the documentation you need either a printer 80 columns wide
to print it, or an 80 column screen to view it on.

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

  Distribution Disk 1,3 Files. (Note that Dist'n disk #1  and #3 files are
				similar for AnalytiCalc 256K and AnalytiCalc
				320K except that ANALY.EXE is different and some
				files are missing in each, so 3 disks are needed
				for a complete kit.)
 These are APPROXIMATE directories; as the program is enhanced, new files
may be added and files may be moved. These files will mostly be on disks 1
or 3, but frequently NOT on both.

ANALYTCL CQD * Reference card for AnalytiCalc, squeezed.
BUFEXTEN COM   Keyboard buffer extender. Allows type ahead of 150 chars
ANALY    EXE * Main program of Spreadsheet/DB/WP system
CONFIG   SYS   CONFIG.SYS that loads BIGANSI.SYS
BIGANSI  SYS * Modified ANSI.SYS that supports more defs than std.
AUXKPD   TXT * File of escape sequences to initialize BIGANSI.SYS when typed
		Note it also binds Ctrl F2 to @GRF.CMD to do graphs.
PCCHELP  HLP * Online direct access HELP file
		(Note: On this disk it's PCCHELP.HQP, squeezed. Use USQ
		to unsqueeze it before trying to use AnalytiCalc.)
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
		Uses RECEIVE and SEND, not GET and SEND, to talk to servers.
SCHEDA   PCC   Part of US Federal Income Tax template for AnalytiCalc
KEYPAD   DOC * Documentation on function key usage
ANALY    TQT * Tutorial on use of AnalytiCalc as spreadsheet, SQUEEZED
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
GRF      BAT * Batch file that is used by GRF.CMD
DIFRW    EXE * Utility to read or write DIF files from AnalytiCalc saved files.
DIFRDWRT FQR * sources for DIFRW.EXE, squeezed. Use USQ to unsqueeze.
SETUP    CMD * Sets up BIGANSI from Analy with @SETUP.CMD
BUF160   ASM   Source to keyboard buffer extender; may be better than BUFEXTEND
BUF160   COM   Executable of above
PPLN*     *  * Project Planner system (registered users only)
EDIT     DQC   Manual for EDIT, condensed. Squeezed also.

 Distribution Disk 2 Files:
  APPROXIMATE: Some files moved to other disks due to growth of the manual.

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
IDENT    TXT * Identifies disk.
GRF      CMD * Command file to generate graphs from inside AnalytiCalc
ACINIT   PRM * Sample auto start Analy file.

        SOME FREQUENTLY ASKED QUESTIONS:

        1.  Why are you marketing AnalytiCalc in this way? ANSWER: We wanted
	    to sell AnalytiCalc at $49.95 but advertising is quite expensive
	    and dealers are reluctant to sell good inexpensive software and
	    make smaller per-sale profits when they can sell the $500 + 
	    programs and make more per sale. We felt that programs like 1-2-3
	    are grossly overpriced and wanted to provide a far more powerful
	    one at a reasonable price as a service to other PC users. So we're
	    trying the user-supported route in the hope the user community will
	    appreciate this and support the effort. The full (and full speed)
            version is available to direct customers or those who register;
            PC public domain libraries receive a full function but somewhat
            slower version of AnalytiCalc.

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
            Compiler, V3.3. There are also some assembler subroutines.

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
	    users only. Registering users receive the latest and most debugged
	    version of AnalytiCalc, plus extra programs (e.g., a project planning
	    system) not placed on demonstration copies like this.

        6.  "What else are you working on?"  ANSWER: There is a
	    full blown relational DBMS which will soon have an interface to
	    AnalytiCalc from it. It will be available along with upgrades
	    to AnalytiCalc (so register!) but will work standalone also.
            The DBMS is available, with all sources and documents on disk
            plus an .EXE for a 400K or so system from G.C.E. for an additional
            $25.00 with an AnalytiCalc order or $30.00 by itself. It is in
            "AS IS" condition as it is undergoing continual improvements.
	    The database interface will be quite comprehensive. Some other
	    utilities will also be provided.

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
	to do. We're not cheating you. If you use the program regularly,
	you should reciprocate by not cheating us of a modest reward for
	the effort. Also, if you register, you get the latest version of
	the program plus some extra files not available in demonstration
	versions. We will also, IF you register, try to help you with any
	problems. Those who don't pay won't get answered. You'll also get
	a faster version of AnalytiCalc by registering.  We're trying to
	provide the best bargain in the industry. Help us out. We'll make
        it worth your while.

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
        charged. However, all PPLN*.* files must be deleted prior to copy
	for others.

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

	4.  The author must be informed of the insertion of AnalytiCalc into
	    any library that sells disks (regardless of price) to non
	    members and must have the right to update AnalytiCalc in such
	    a library. (This will permit us to keep AnalytiCalc relatively
	    current there.) Instructions on how to update AnalytiCalc in
	    such libraries must be provided.


        Companies are granted permission by the author to copy the Analyti-
        Calc programs and documentation for use on other computers and at
        other locations in the company, so long as:

        1.  The full registration fee of $49.95 has been paid for the original
            copy of the program.

        2.  A usage fee of $45 is paid for each additional "building" where
            AnalytiCalc will be used.  Within any building for which the
            usage fee has been paid, AnalytiCalc may be copied freely for
            use on any computer in that building.


	Users who register will obtain the latest version of the software,
	including some project management utilities that go with it, and
	all bug fixes to that point. The project management software is
	not part of the evaluation kits.


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
             version 20.4A            ---     $49.95   $  49.95
                                                        -------

           Usage fee for additional
           copies (each building)             $45      $
                                      ---               -------


           PCRIM DBMS kit (3 disks)   
           ($30 if no Acalc order)            $25.00   $
                                      ---               -------

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

### Directory of PC-SIG Library Disk #0432

     Volume in drive A has no label
     Directory of A:\

    1040     PCC      1868  10-23-84   5:44p
    AKA      CMD        67   3-24-86   9:38a
    AKB      CMD       174  12-16-85   1:30p
    AKD      CMD        71  12-16-85   1:31p
    AKDA     CMD        92  12-16-85   1:31p
    ANALY    EXE    201201   9-10-86  11:56a
    ANALY    TQC      3541   1-14-86   6:10p
    ANNOT    NOT      3256   1-08-87   9:31a
    AUTOEXEC BAT       146   7-20-85  10:48p
    AUXKPD   TXT      2157   3-24-86   9:45a
    BIGANSI  SYS      2176   9-18-84   2:43p
    BUF160   AQM      6262   8-16-85   8:58a
    BUF160   COM       687   8-15-85  11:21a
    BUFEXTEN COM       696  11-29-84  12:23p
    CCO      CMD       579  12-16-85   1:34p
    CONFIG   SYS        34   6-19-85   4:15p
    CPR      CMD       845  12-16-85   1:32p
    CRW      CMD       572  12-16-85   1:34p
    CRWA     CMD       594  12-16-85   1:35p
    DIFRDWRT FQR      8115   8-16-85   8:36p
    DIFRW    DOC      3455   8-12-85   2:36p
    DIFRW    EXE     35680   8-16-85  12:14p
    F1040    CMD        78  12-16-85   1:36p
    F1040    DOC      1678  12-28-84   1:23p
    FILES432 TXT      3231   1-04-80   3:52p
    GRF      CMD      2890  12-16-85   1:35p
    HTX      CMD        79  12-16-85   1:33p
    HTXT     CMD        76  11-04-85  10:22a
    INCENT   CMD       306   8-23-85  10:38a
    KER      DOC      2133   6-21-85  11:26a
    KER      EQE     10785  11-10-84   1:50p
    LST      COM      6585   8-31-86   4:10a
    NOTICE   TXT     20299   1-08-87   9:47a
    PCCHELP  HQP      5959   8-09-85   9:09p
    PIE      BAS       898  11-05-84   9:43a
    README   1ST      3822   1-08-87   9:39a
    SCHEDA   PCC       973  10-23-84   5:45p
    SCHEDB   PCC       355  10-23-84   5:45p
    SCHEDX   PCC       965   1-03-86   9:01a
    SCHEDY   PCC       938   1-03-86   9:03a
    SETUP    CMD      1152   3-24-86   9:48a
    SRCH     CMD        58  12-16-85   1:33p
    TOEND    CMD        84  12-16-85   1:32p
    WND      CMD        65  12-16-85   1:33p
           44 file(s)     335677 bytes
                            1024 bytes free
