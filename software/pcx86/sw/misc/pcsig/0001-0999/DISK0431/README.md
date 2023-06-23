---
layout: page
title: "PC-SIG Diskette Library (Disk #431)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0431/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0431"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ANALYTICALC 2 OF 3 (ALSO 430, 432)"

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

## ACSTART.DOC

{% raw %}
```
	Starting Up AnalytiCalc
	-------- -- -----------

This document is designed to help you get the AnalytiCalc system
installed and running.

NOTE:
	Be sure to make a backup copy of AnalytiCalc with DISKCOPY or
any other favorite method of copying the files prior to use. Keep the
backup in a safe place in case you accidentally damage the original
disk. AnalytiCalc is specifically NOT copy protected so you can use
it most conveniently. Rather, it is priced to make it easy to afford
and not rob you. Please register if you intend to use the product after
evaluating it and finding that it meets your needs.

Kit Contents
--- --------
	Your distribution will contain the following files on 2 disks:

	ANALY.EXE	AnalytiCalc executable program
	AUXKPD.TXT	Text to be typed to configure ANSI.SYS function
				keys
	CONFIG.SYS	Sample CONFIG.SYS program which loads BIGANSI.SYS
				on PCDOS V2 systems at boot time
	PCCHELP.HLP	Help file containing all AnalytiCalc help screens
				and needed online for any Help commands
				to work.
	ACGRAF.EXE	AnalytiCalc graphics task, used to produce graphs
				from saved spreadsheet files

	ANALY.MQN	Manual file for AnalytiCalc in machine readable format
				squeezed to allow inclusion of a few more
				utilities
	USQ.EXE		Unsqueezer utility to unsqueeze any file with Q as
				middle letter of extension (e.g., ANALY.MQN
				which is unsqueezed to ANALY.MAN)
	MANUSQ.HLP	Short description of how to unsqueeze the files that
				are in squeezed form and what some of the
				optional utilities are.
	ANALY.TUT	Tutorial for AnalytiCalc. Run through this first
				upon completion of this file.
	Several .CMD files (all normal text files that may be edited with
			any editor) to implement some keypad features
	AUTOEXEC.BAT	Startup command file that types AUXKPD.TXT at boot
			time
	BIGANSI.SYS	Large version of PC/MS DOS ANSI.SYS driver permitting
			more command definitions (from a PC SIG public domain
			disk)

	DTC.*		Desktop Calendar program (a free extra, in squeezed
			form to save space)
	F1040.PQC	Saved Form 1040 US Federal Income Tax form in squeezed
			form
	USQ.EXE		Unsqueezer program to reproduce the originals of
			squeezed files
	*.PCC		Additional command files to use with F1040.PCC (the
			unsqueezed version of F1040.PQC) to do your income
			taxes with AnalytiCalc
	F1040.DOC	Brief description of how to use the foregoing to do
			your taxes
	README.1ST	Brief description of some files on the disk
	PIE.BAS		BASIC Piecharter utility (demo) to piechart saved
				spreadsheet areas with labels.
	PKGINS.DOC	How to install AnalytiCalc and make a bootable disk
			out of the distribution disk 1.
	ACSTART.DOC	This file, directed mainly at how to RUN the program
			once you have put a system up on a copy of the
			first distribution disk and booted it.


Minimum Requirements
------- ------------
	You need at least 256K bytes of system memory and PCDOS V2.0 or
later or MSDOS V2.0 or later to run AnalytiCalc. In addition you need at
least one disk to load it from. Currently this must be double sided.

	Follow the directions in PKGINS.DOC and boot the now-bootable
copy of the first distribution disk.

	Your system is now ready to run AnalytiCalc.

Running AnalytiCalc
------- -----------

	Now load the disk containing AnalytiCalc (ANALY.EXE) onto your
machine and type

ANALY

which will load the program.
	(If you copied ACINIT.PRM onto your disk, it will answer the first
several questions for you; the ZA command allows you to change the defaults
it set up however.)

	AnalytiCalc will come up to its first screen, announcing its presence.

AnalytiCalc asks several questions then prior to bringing up the spreadsheet
picture proper. Note ALL REPLIES MUST BE TERMINATED BY A RETURN.

	Before using a full screen, AnalytiCalc asks whether to use ANSI
escape sequences (recommended) or IBM BIOS calls. Just reply either
A or I. If you don't have ANSI.SYS in your system and you reply A, the
program will generate numerous garbage characters on screen. If however
you answer all queries blind and then type the VI command, the screen will
be handled via the IBM BIOS.

	The first screen question is whether to enter a NEW numeric format.
If you need numbers wider than 9 characters (counting decimal point and
2 digits to the right of the decimal) or two decimal places is not what
you need, reply Y (followed by return). Anything other than a Y means
NO. (You can change your mind and use the S command later to go back and
reStart so don't worry about it too much.)
	If you answered Y, enter a new valid format. The normal one is
F9.2 meaning Floating point numbers (which most everything is), 9
characters total width, 2 decimal places. Default column width is 10
characters, but the output format may be chosen freely. Numbers too
wide to fit in a column are truncated, but the precision is kept
internally, and you can set column widths. The format you choose is
used as a default format whenever a new number is entered. A format
of F10.3 would have 10 characters' width and 3 decimal places, for
example. (Again, the S command to the spreadsheet screen will allow you
to select a new column width default and format if you like.) Most
of the time, a N answer (no) will do.

	Now AnalytiCalc asks for a spreadsheet title.
	Where some spreadsheets waste screen space by keeping a copyright
notice on screen at all times, AnalytiCalc lets you keep a text string
of your choice at the top. You enter it here, up to 80 characters. It will
be used as the first line of printouts, so pick something descriptive.

	AnalytiCalc can handle huge sheets by using disk as backup
memory. The next questions help you decide how much is needed.
	The first 2 questions ask what the most rows and columns to
be used at any time are.
	Make a guess what part of the total space you'll use and enter
the ending row and column numbers. If you will fill a screen, you might
say you'll use 7 columns and 20 rows, for instance.

	AnalytiCalc then will tell you minimum needs for the formula and
value files PROVIDED THE AREA YOU GAVE WOULD BE TOTALLY FILLED with numbers
and short formulas.

	Now AnalytiCalc will ask how much disk storage to allocate. The
guideline numbers are a good first guess. (If you run out, you will be
told on the top line and may save your work and reload with a larger
scratch area, so don't overstate your needs.)
	For most startup cases, just replying 1 and 1 (1K value and
1K formula) will do. This will use internal storage in memory only
and never go to disk. This storage is adequate for several totally
full screens with long formulas in each, so use it alone if possible.

	Once you reply, AnalytiCalc will display the spreadsheet screen.

Color Display Setup
----- ------- -----

	If you have a color display, the black and white display will be
dull. You may now type the View Color command (VC) to redraw the screen
in color. The command is just

VC (return)

and will repaint the screen in color. The VB (View Black and white) command
returns to black and white display.

You are now ready to go and may begin entering numbers and formulae.

CAVEAT
------

	Read the tutorial and a bit of the manual here. To put numbers into
AnalytiCalc, you need to use the Enter command (usually just abbreviated to
"E ") and you need decimal points in your numbers to flag them as numeric.
While the F2 key gets you to the help subsystem, the flavor of this program
is unique and you NEED to try the tutorial to get a feel for it.

A quick example set of commands to see how it looks might be typed in as
follows (comments parenthesized on the right are not typed in, and <CR> means
the return key.

M2<CR>		(Move down a column after entering anything)
E 12.34<CR>	(Place 12.34 into cell A1)
E 23.4565<CR>	(Place 23.4565 into cell A2)
E 76.356<CR>	(Place 76.356 into cell A3)
E 91.3<CR>	(Place 91.3 into cell A4)
E SUM[A1:A4]<CR> (Compute the sum and place in A5)
E AVG[A1:A4]<CR> (Compute the average and put in A6)
E SQRT(STD[A1:A4])<CR>  (Compute the standard deviation and put into A7)
E THIS SHOWS HOW A WIDE FORMULA GOES ACROSS COLUMNS<CR>
L A1<CR>	(Go back to cell A1)
CR A1:A7 C5:C12<CR> (Copy first part of column A into column C with relocation
			of formulas)
W<CR>		(Write a screen picture onto the printer)
LPT1:<CR>	(Select the printer by its DOS name (assuming it really is on
			LPT1:))
X<CR>		(Request exit to DOS)
Y<CR>		(Confirm that yes, you really DO want to leave.)

The above may be tried and will give a small flavor for using AnalytiCalc.
Once you get it running, you may use the ENTER MODE key (Insert) to avoid
the "E " commands, but this illustrates a way of operating that is always
usable.
	An alternative way of doing this is with the following commands:
(<Fn> means function key n)
<F6>2<CR>	(Move down a column after entering anything)
<INS key>
12.34<CR>	(Place 12.34 into cell A1)
23.4565<CR>	(Place 23.4565 into cell A2)
76.356<CR>	(Place 76.356 into cell A3)
91.3<CR>	(Place 91.3 into cell A4)
SUM[A1:A4]<CR> (Compute the sum and place in A5)
AVG[A1:A4]<CR> (Compute the average and put in A6)
SQRT(STD[A1:A4])<CR>  (Compute the standard deviation and put into A7)
THIS SHOWS HOW A WIDE FORMULA GOES ACROSS COLUMNS<CR>
<F9>
L A1<CR>	(Go back to cell A1)
<F3>A1:A7 C5:C12<CR> (Copy first part of column A into column C with relocation
			of formulas)
W<CR>		(Write a screen picture onto the printer)
LPT1:<CR>	(Select the printer by its DOS name (assuming it really is on
			LPT1:))
X<CR>		(Request exit to DOS)
Y<CR>		(Confirm that yes, you really DO want to leave.)

	IF YOU HAVE AN 8087
        -- --- ---- -- ----


	AnalytiCalc will attempt to use an 8087 if one is installed.
It makes assumptions about its interrupt locations, however, and may
fail if your 8087 is not installed as it is on the IBM PC.
	The program will also run correctly if you have an 80286 based
machine like the IBM AT with or without an 80287.


MAKING A BOOTABLE DISK
------ - -------- ----

	You may make up a DOS disk with a bootable ANALY on it by including
the files:
ANALY.EXE
PCCHELP.HLP
BIGANSI.SYS
CONFIG.SYS
*.CMD		(all files on the original distribution with type CMD)
AUTOEXEC.BAT
AUXKPD.TXT
	onto a disk formatted with the system on it. Files used by ANALY need
to be in your current directory as presently set up.

SYSTEM REQUIREMENTS
	AnalytiCalc uses terminal cursor controls from an ANSI standard,
and will work with the MSDOS/PCDOS ANSI.SYS driver or with a VT100 type
terminal. To handle extra definitions, a larger version of ANSI.SYS is
supplied called BIGANSI.SYS. It must be used.
	To ensure you have this control, if using PCDOS V2, place a file
named CONFIG.SYS in your boot directory and place in it the line

DEVICE=BIGANSI.SYS

which will ensure the BIGANSI.SYS driver is loaded. A suitable CONFIG.SYS
file is included in the distribution and may be just copied onto your
boot disk if desired. Be sure that the BIGANSI.SYS file itself is copied
from your DOS distribution onto your boot disk also.

	The BIGANSI.SYS driver also is used to define special key functions,
so define them by typing the file AUXKPD.TXT:

TYPE AUXKPD.TXT

This file is in your distribution. It may be typed at boot time by placing
the "TYPE AUXKPD.TXT" command into a file named AUTOEXEC.BAT on your
boot disk.

	At this point, if you just edited or moved CONFIG.SYS onto your
boot disk, reboot your system from it and type out AUXKPD.TXT, which will
not show any text (it is defining keys instead) but which will define the
keypad.

	AnalytiCalc will ask, prior to setting any screen, whether to use
IBM BIOS or ANSI.SYS to address the screen. You can use either but if you
use the BIOS, you need to be sure something defines the function keys for you
or you'll need the command-mode versions for all commands, including cursor
motion.
When you start ANALY up, if the screen doesn't look sensible, you most likely
DON'T have ANSI.SYS loaded properly. Go back and make sure you have a good copy 
of it and reboot with it in and CONFIG.SYS set up properly. If you are told you
have too little memory, you may have a version of MS/PCDOS that takes too
much memory (on a 256K machine) for ANALY to fit. It fits with PCDOS V2.0
into 256K, but if it does not, you may need another 64K or a smaller version
of MS/PCDOS. You MUST HAVE the ANSI.SYS for redefinition of command keys
and console control. The program is able (in the VI mode) to handle the
screen directly via the ROM BIOS on IBM machines, and has the ability to
recognize VT100/VT200 escape sequences.
	See the manual for further detail.

SCRATCH FILES
------- -----

AnalytiCalc writes its scratch files used for value and memory storage on the
current default disk. To provide maximum space for these, place files *.CMD
and PCCHELP.HLP from Distribution disk 1 on your default disk and run ANALY.EXE
from another disk. (For simplest use, have your PCDOS PATH set to allow
finding of ANALY.EXE automatically.) The disk containing the scratch files,
*.CMD, and PCCHELP.HLP could be a memory disk, your B: disk, or any other.
With sufficient memory, the entire program may be run from memory disk, but
this is not the optimum way to use it. It is worthwhile to use the included
DPATH program to set your default to a memory disk while allowing AnalytiCalc
to find its data files on hard or floppy disk however, if you have sufficient
memory to do so. If running PCDOS 3.1, some built-in PCDOS commands will allow
you to bypass the DPATH utility and gain the same functions.



```
{% endraw %}

## IDENT.TXT

{% raw %}
```
	This disk contains Distribution #2 for the AnalytiCalc system,
common to both the 256K and 320K versions. It also contains the manuals
for the system here (squeezed) and some additional utilities and
documents. Please read the documents. See NOTICE.TXT on distribution
disk #1 or #3 version for registration information. You need ALL 3.

	We trust you to send a registration fee of $49.95 if you use
this program after evaluating it. Please send the registration to:

	Glenn C. Everhart
	General Cybernetic Engineering
	P.O. Box 748
	Mt. Holly, NJ 08060

Please make checks payable to Glenn Everhart.

	We welcome letters of comment, suggestions, praise, or criticism. If
you find a problem and are registered, we'll try to help. If you register,
you'll be notified of updates and be given the opportunity to acquire them
well before others, at a low price (around $10).
	Whether or not you register, you are encouraged to pass the package
to others for evaluation.

```
{% endraw %}

## PKGINS.DOC

{% raw %}
```
	Installing AnalytiCalc

	Your distribution contains 3 disks. The one with ANALY.EXE
on it is your AnalytiCalc "system" disk. The other has manuals, the
AnalytiCalc graphics task, and a handy calendar utility.

	Before you go any further, WRITE PROTECT YOUR DISTRIBUTION
DISKS AND COPY THEM WITH DISKCOPY TO BLANK FLOPPIES. Keep the originals
and use the copies and NEVER write enable the masters. The Diskcopy
command is (for 2 disk systems)

DISKCOPY A: B:

where the master disk is in drive A: and the blank floppy is in drive
B:.  Follow the instructions and copy ALL distribution floppies. General
Cybernetic Engineering will NOT be responsible for damage to master
floppies. That is why they are copiable; you can make as many backups
as you need.

	Now put your master disks away. Use DOS and format a blank
disk with the /S switch:

FORMAT B:/S

	This generates a bootable PCDOS/MSDOS disk. (It must be V2.0 or
later). You need to boot with ANSI.SYS (normally), so you must make a
bootable version up now.

	Now copy the following files to your newly formatted disk from
Distribution Disks 1 and 3 (some on each, but pick the correct ANALY.EXE.)

	CONFIG.SYS   AUTOEXEC.BAT   AUXKPD.TXT   ANALY.EXE 
        PCCHELP.HLP  *.CMD          BIGANSI.SYS

(If you have PCCHELP.HQP instead of PCCHELP.HLP, copy USQ.EXE from disk
2 and use the command "USQ PCCHELP.HQP" to unsqueeze it; then delete
USQ.EXE and PCCHELP.HQP.)

	If there's room and you wish, copy ACGRAF.EXE from Disk 2 also
onto your disk. This will enable graphics to your screen during execution
if you have sufficient memory.

	You can now use AnalytiCalc by booting the system disk and
typing ANALY.

	Be sure to read the tutorial (ANALY.TUT) and follow it along
first to get an idea how to use your new system. It will show only a
few of the commands but is a good starting point. Then print the
manual file and glance through it. You will be using it as a reference
document, not a tutorial, but it will tell you all there is to know about
AnalytiCalc.

	For those interested, site licenses, educational discounts, and
source licenses are available. Those desiring such arrangements should
write to:

	General Cybernetic Engineering
		Attn: G. Everhart
	P.O. Box 748
	Mount Holly, N.J. 08060

giving requirements. We will be happy to help you. Partial source
kits permitting additional user functions are also available at costs
below those of full source kits.

	**** GENERAL ****

	There are two versions of AnalytiCalc, both in the distribution.
They are:

	1. 256K version. This is an overlaid version lacking logical
		names and in which unusual functions are in several
		overlays, which can slow calculation times, but all
		other functions work in 256K of memory (except the
		spawn commands, which require more).
	2. 320K version. This version is not overlaid and includes
		logical name support, but uses the same value access
		method as the 256K version. It is generally preferable
		if 320K is available.

The kit is priced at $49 to register it. Those who register will
receive a full kit including extras not on the evaluation kits and be
notified of extras and updates.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0431

     Volume in drive A has no label
     Directory of A:\

    ACGRAF   EXE     63898   2-28-86   3:57p
    ACINIT   PRM       478   1-04-86  12:39p
    ACSTART  DOC     13843  10-10-85   2:31p
    ANALY    MQN    148333   3-25-86   9:03a
    DTC      DQC      4815  10-25-84  10:15p
    DTC      EQE     40737   3-19-85   1:21p
    DTC      HQP      1021   1-02-86   7:32p
    EDIT     EQE     18293  11-29-84  10:09p
    F1040    PQC     11002   1-02-85   4:33p
    GRF      BQS     18362   2-28-85   7:25p
    IDENT    TXT       992   1-08-87  10:10a
    MANUSQ   HLP      4795   3-25-86   9:04a
    PKGINS   DOC      3243   1-08-87  10:17a
    USQ      EXE     16758   7-08-85  10:29a
    ZERO     EQE     10677   1-03-86   1:58p
           15 file(s)     357247 bytes
                               0 bytes free
