---
layout: page
title: "PC-SIG Diskette Library (Disk #2551)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2551/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2551"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## HELPME.DOC

{% raw %}
```

This file lists the most commonly asked questions about ALT. If 
you think you have a problem, consult this appendix first.  Then, 
if you cannot find an answer here you may call the Instinct 
Support Bulletin Board at (214) 368-2709.  Set your communication 
software to operate with 8 data bits, 1 stop, no parity, 
1200/2400/9600 baud. (For most communication software these are 
the default parameters.)  If you are unable to use the bulletin 
board, send written correspondence to:

                              Instinct Software
                       11311 N. Central Expy. Ste 300
                              Dallas, Tx 75243

Please include the following information: serial number, version 
of DOS, description of the problem, type of hardware involved, 
the make and model of computer, the version of ALT, and the name 
and version of the conflicting software (if applicable).

                               Kernel

Question: I load ALT from my AUTOEXEC.BAT file.  I notice that 
any commands I have after ALT in the batch file never get 
executed. How can I correct this?

Answer: ALT loads a new command.com shell when installed into 
memory.  This prevents DOS from continuing with commands in the 
AUTOEXEC.BAT. Any commands after ALT in the AUTOEXEC.BAT should 
be moved to an AUTOALT.BAT file in the ALT directory.  If the 
AUTOALT.BAT file is present, the batch file will run in the first 
partition when ALT is loaded into memory.  This serves as an 
excellent method to automatically run a program or DOS commands 
when loading ALT.

Question: Sometimes when I am trying to open an additional 
partition or accessory, a message is displayed that I am out of 
swap space.  What does this mean?

Answer: ALT provides the capability of running multiple programs 
and accessories by swapping (or writing) all information about 
these programs to disk or expanded memory.  The error message is 
displayed when ALT has used all available swap space.  The swap 
area available to ALT needs to be increased either by expanding 
the limits on the swap drives or adding an additional swap area.  
(See the next question for details of this process.)

Question: I want to change the drive and size of swap area where 
ALT stores the memory of programs and accessories.  Where do I 
specify these changes?

Answer: The swap drives can be changed in one of three ways: 
through the Setup program selection 'Swap Drives.', while loading 
ALT into memory with the command line parameter -D or with the 
ALTSWAP utility. The first two methods will provide you with the 
Swap Drive entry screen.  Simply specify the swap drive letter 
and the maximum space of each drive allowed to be used by ALT.  A 
blank swap drive size allows use of all the available space if 
required. 

Swap drive X informs ALT to use expanded memory as a swap area.  
Device driver ISMM.SYS is required on the last line of 
\CONFIG.SYS for ALT to use expanded memory as a swap area.  Add 
the following last line to the \CONFIG.SYS file:

DEVICE=C:\ALT\ISMM.SYS      (your path may differ)

Any changes in the Swap Drives will not take effect until the 
next time ALT is loaded into memory.

Question: Why is the mouse not working in ALT's Main 
Menu and accessories?

Answer: The mouse driver (i.e. MOUSE.COM) supplied with your 
mouse must be loaded into memory before ALT. The Mouse Emulation 
in the Setup program selection 'General Setup' must be set to Yes 
prior to loading ALT into memory.  The mouse can temporarily be 
enabled or disabled through the ALT Main Menu Other System Mouse 
selection.

Question: Why is the graphics screen of my program not restored 
correctly upon returning from an accessory or another program?

Answer: It is possible that the particular graphics mode of the 
program is not supported, or either the ALT partition was not 
specified as a graphics partition.  ALT supports a number of 
graphics mode ranging from the CGA, Hercules, and EGA, to the 
high-resolution VGA modes.  The ALT partition must be defined as 
a graphics partition for ALT to save and restore any graphics 
screen correctly.  A small 'g' will appear after the memory size 
of the partition in the ALT Main Menu if it is set to handle 
graphic programs.  e.g.,

| 1 C:\AC            autocad                524K g |

The graphics setting of a partition can be toggled off or on by 
pressing Alt-G while highlighted in the ALT Main Menu.

If you have an EGA or VGA monitor, you may be using a proprietary 
video mode. Try to set the program you are using to use a 
standard video mode, such as 640x480 VGA, 800x600 VGA, etc.

Question: What steps are necessary to use expanded memory as a 
swap drive?

Answer: There are two requirements for ALT to use expanded memory 
as a swap area; the device driver ISMM.SYS must be added to the 
CONFIG.SYS file on the boot drive, and the swap drive must be 
designated as X.  Copy the ISMM.SYS from the ALT directory to the 
boot drive root directory.  Add the following line to your 
CONFIG.SYS file,

DEVICE=ISMM.SYS

to install the device driver.  To load the driver, the computer 
must be rebooted by pressing Ctrl-Alt-Del.

Question: Tapping the ALT key to retrieve the ALT Main Menu 
conflicts with a program I use.  Can I change the ALT hotkey?

Answer: You can change the ALT hotkey to any key from AltA to 
AltZ or from CtrlA to CtrlZ.  Select the new key in the General 
Setup selection of the Setup.Exe program. 

Question: I have a program that seems to prevent ALT from 
popping-up.  ALT will pop-up normally before running the program, 
but it will not after.  After I exit the program, ALT will then 
continue again to behave as normal.  How can I solve this 
problem?

Answer: Some programs (e.g., Windows) completely take over the 
keyboard when they are run.  Programs, such as ALT, are thus 
prevented from taking control.  ALTPOP.COM provides a method for 
ALT to regain control from such programs.  When running these 
programs, precede the program command entered at the DOS prompt 
with ALTPOP. 

For example, to run Windows, you would normally enter,

WIN86

When using Windows with ALT, enter the following instead;

ALTPOP WIN86

Ensure that the ALT drive and directory are in the PATH! e.g.,

PATH=C:\;C:\DOS;C:\ALT;

Question: How can I change the memory size of a partition?

Answer: The memory size of a partition cannot be changed.  The 
only option is to delete the partition, and then redefine it with 
a different memory size.  To delete the partition, highlight the 
partition in the ALT Main Menu and press the DEL key.  Be sure to 
exit any program to the DOS prompt before removing the partition.

                               Address Book

Question: Why doesn't the auto phone dialing feature work 
properly?

Answer: The auto phone dialing feature requires proper settings 
of the communication port, and baud rate.  These parameters can 
be set either in the Setup.Exe program selection 'Address Book' 
or in the F9-Setup Modem selection in the Address Book. Remember 
that the '!' is used in the modem command strings to represent 
the CR or ENTER key.  Also, use of the '~' character results in a 
1/2 second pause.  Pauses may be required when initializing or 
hanging-up the modem, e.g.,

~+++~ATH0!~

Question: Why doesn't the standalone version of the address book 
find the address book data files, colors and modem setting?

Answer: The address book must find the directory where ALT is 
installed to operate properly.  The address book begins its 
search with the ALT environment variable and then looks at the 
PATH.

To set the variable, use the SET command at the DOS prompt, e.g.,

SET ALT=C:\ALT
or
SET PATH=C:\ALT

Question: How do I print my address book records to a file 
instead of the printer?

Answer: The device used by the address book for printing can be 
changed in the F9-Setup, Printer, Direction selection.  The 
default printer name is PRN.  The name can be changed to access 
another printer or changed to a DOS filename to direct output to 
a file on disk.

Question: How do I back up my address book?

Answer: For each address data book, there are two associated 
files.  One file to store all the information and another to 
store the indexing or the arrangement of the address cards.  The 
two files have the name of your address book and the file 
extensions IND and DAT. Suppose you have an address book named 
ADDRESS, then back up the two files ADDRESS.IND and ADDRESS.DAT 
in the ALT directory. 

                               Disk Filer

Question: How do I configure the disk filer to use my own editor 
and file viewer?

Answer: The editor and file viewer external programs can be 
configured either in the Setup.Exe program selection 'Filer, 
Appointment Options,' or through the F9-Setup Editor and View 
options within the program.  The command used to start the 
programs is entered along with one of the disk filer reserved 
keywords (e.g., $PN, $FN, $PT, etc.).  The keyword $PN, is 
usually used since it designates the full pathname of the 
selected file.

For example,

EDIT $PN
or
VIEW $PN

To use the default editor provided with ALT, clear the Editor 
option line (by pressing <Ctl-X>) and press <Enter>.

Similarly, to use the default viewer, clear the View option line 
(by pressing <Ctl-X>) and press <Enter>.

Question: How do I force the disk filer to display only .EXE 
files?

Answer: The wildcard or file selection criteria can be changed 
with the <F10>-Command, File, Wildcard  selection.  The default 
wildcard is *.* .  To view only .EXE files, change the wildcard 
to *.EXE .

Question: The amount of memory that is available to execute 
programs (editor, EXE, COM, or Program selection) from the filer 
seems to be limited.  This results in my not being able to edit 
large files or to run large programs.  Can I increase the 
available memory?

Answer: The extra memory that is given to the filer is specified 
in the Setup.Exe program.  Increase the value of the Extra Memory 
in the 'Filer, Appointment Options' selection of the Setup 
program.  Note, increasing the Extra Memory value will result in 
increased time to swap from the filer to another accessory or 
program.

                    Appointment Calendar, Alarms

Question: How do I stop the Alarm pop-up message from 
interrupting critical programs?

Answer: The Alarm pop-up can be disabled by specifying No to the 
'Alarm Pop-Up' option of the Setup.Exe program General Setup 
selection.  The pop-up can temporarily be disabled or enabled 
through the Main Menu Other, System, Alarm selection. The alarms 
due that are also displayed when first loading ALT into memory 
will be disabled by the same mechanism.

Question: I leave my computer on for days at a time without 
removing ALT from memory.  Sometimes I fail to receive alarms 
that are originally set a number of days ahead.  What is going 
wrong?

Answer: When ALT is loaded into memory, it checks for alarms over 
the next 7 days. If your computer is left on and ALT not removed 
from memory for a period of 7 days, then it is possible that it 
does not know of any future alarms.  The selection <F7> (Alarms) 
in the appointment calendar is used as both a method to view 
alarms due, and to check for any alarms set for the next week.  
The <F7> (Alarms) command should be exercised every few days if 
you routinely leave your computer running.

Question: Why doesn't the standalone version of the appointment 
book find the correct appointments and color settings?

Answer: The appointment book must find the directory where ALT is 
installed to operate properly.  The appointment book begins it 
search with the ALT environment variable and then looks at the 
PATH.

To set the variable, use the SET command at the DOS prompt, e.g.,

SET ALT=C:\ALT
or
SET PATH=C:\ALT

                Editor, Notepad, Macro Editor, Clipboard

Question:  I changed the assignments of keys to functions in the 
Editor setup; however, the editor doesn't recognize the changes.  
What's wrong?

Answer:  The keys assigned to editor functions are saved to a 
file when exiting the 'Assign Edit Keys' selection of the 
Setup.Exe program.  The drive, path, and name of the file (e.g.,  
c:\alt2\wp.key) must be specified in 'Edit Key Define File' field 
of the 'Editor, Notepad, Options' selection of the Setup.Exe 
program.  The changes will not be recognized until you run ALT 
again.

Question: I know how to display the general help of the different 
editors by pressing F1, but how do I get the help specific to the 
particular editor accessory I am using currently?  For example, 
in the macro editor, I wish to view help on the macro editor 
syntax and commands.

Answer:  Help, specific to the notepad, macro editor, or 
clipboard, is obtained by pressing F1 again while in the general 
help.

Question: Why is text that I typed in the Notepad still present 
even after I remove ALT from memory and load it again?

Answer: The Notepad automatically saves text to the file NOTES in 
your ALT directory when pressing <ESC> to exit the notepad.  The 
file is retrieved by the Notepad upon entering it the first time 
after ALT is loaded.  This provides an easy and convenient method 
to save notes and have them available for editing and viewing 
during each session.  This feature can be disabled in the 
Setup.Exe program by specifying No in the 'Notepad Auto 
Save/Load' field in the 'Editors, Notepad Options'.

Question: I appear to run out of memory when trying to edit large 
files with the editor.  Can the available memory be increased for 
it?

Answer: The memory for the editor can be changed in the Setup 
program by modifying the value of the 'Extra Memory' field in the 
'Editor, Notepad Options'.  Note: Increasing the Extra Memory 
value will result in increased time to swap from the editor to 
another accessory or program.

Question: It appears that the block move and copy feature work 
only within the same document.  How do I move a marked block of 
data from one document to another?

Answer: A block cannot be marked in one document and moved or 
copied directly to another document. The HOLD feature of the 
editor is required for such a move or copy operation.  The "HOLD 
Block,No Delete," "Delete and HOLD Block,"  and  "Copy HOLD Text" 
routines use a common file on disk for storage of block 
operations.  If you wish to copy a block from document 1 to 
document 2, mark the block in document 1 and select "HOLD 
Block,No Delete."  This operation will transfer the block 
contents to the HOLD file on disk. Proceed to document 2 and 
select "Copy HOLD Text".  The contents of the HOLD file (block 
contents) will then be inserted into document 2 at the cursor.

                          Keyboard Macros   

Question: Why do some keystrokes fail to get "played back" when 
executing a macro in certain programs?

Answer: When ALT supplies the keys to a program, it does so at a 
very fast rate.  Some programs cannot keep up with this rate and, 
as a result, lose keystrokes. The speed with which macro keys are 
played can either be controlled globally by the  Other, System, 
Slow or Fast selections in the ALT Main Menu; or they can be 
controlled more precisely with the <SLOW:n> macro command.  The 
<PAUSE:n> command may also be placed within a macro for a 
one-time delay. 

Question: How can I have a macro file automatically loaded when 
ALT is loaded into memory?

Answer: A macro file can be specified for automatic loading 
either with the -F command line parameter or in the Setup.Exe 
program.  The full pathname of the macro file should be specified 
in the 'Auto Macro Filename' of the Setup.Exe 'General Setup' 
selection.  It is important to remember that the macro file must 
not have been saved as a text file within the macro editor, but 
saved with the Other, Macros, Save selection of the ALT Main 
Menu.

Question: What am I doing wrong when I am recording a macro and I 
get the message "Out of Macro Memory"?

Answer: When ALT is loaded into memory, a fixed amount of memory 
is used to hold the keyboard macros The message will be displayed 
if you exhaust the memory that was allocated to hold the keyboard 
macros.  The solution is to instruct ALT to give you a greater 
amount of memory to hold keyboard macros.  The default amount of 
memory is 1 kilobyte.  A higher number can be specified in the 
Setup.Exe program 'General Setup' selection.  When increasing the 
value, remember that memory specified for macros detracts from 
that available to run programs. ALT will not recognize the 
changes until the next time you load it into memory.


Question: I use 4DOS as my command interpreter.  There appears to
be conflicts between ALT and 4DOS.

Answer:
ALT will work properly with 4DOS if configured correctly. 
Two steps must be taken, 4DOS's command line recall and editing 
must be disabled, and 4DOS must be made the primary shell when
the computer is started (booted).

The 4DOS command line recall and editing is disabled with the
4DOS command:

     SETDOS /L1

ALT will have its own command line recall and editing once installed
in memory.  Since the SETDOS /L1 command needs to be run each time
a new memory partition is opened, place the command in the 4DOS 
autoexec file 4START.BAT.  The 4START.BAT should be placed in your 
root directory of your boot drive.

It is very important that you create the 4START.BAT file and place
the SETDOS /L1 command within the file.  If not, ALT will have difficulty
"popping-up" and the menuing program will also fail to work 
properly.  See the 4DOS documentation on 4START.BAT and SETDOS /L1
for more information.

To make 4DOS the primary shell at boot time, the following line needs
to be in your CONFIG.SYS file,

     SHELL=C:\4DOS.COM /p

Your drive and path may differ.  This will load the 4DOS command 
interpreter when your computer is first booted.  The environment 
variable COMSPEC will also be set when used in this configuration.
For ALT to work properly with 4DOS, the COMSPEC variable is required
to be set to the full drive and pathname of 4DOS.  For example,
 
     COMSPEC=C:\4DOS.COM
```
{% endraw %}

## HLP.TXT

{% raw %}
```
            Command Summary - Press F1 for ALT General Help
 
     Example: Keys similar to CtrlK-X > press CtrlK, release, press X
 
     ──────────────────────── File and Directory ────────────────────
     Save Doc & Clear Doc  CtrlK-D     Insert File into Doc   CtrlK-R 
     Rename File on Disk   CtrlK-E     Save Doc & Continue    CtrlK-S 
     Show Directory        CtrlK-F     Save Block & Continue  CtrlK-W 
     Change Directory      CtrlK-L     Save Doc & Exit        CtrlK-X 
     Delete File on Disk   CtrlK-J     Menu for File Reads    CtrlK-I 
     Clear Document        CtrlK-Q     Menu for File Writes   CtrlK-T 

     ────────────────────── Travelling Up & Down ────────────────────
     Page Up        PgUp , CtrlR       Page Down       PgDn , CtrlC    
     Continuous Scroll Up  CtrlQ-W     Continuous Scroll Down CtrlQ-Z  
     Scroll Up One Line    CtrlW       Scroll Down One Line   CtrlZ    
     Go to Top of Display  CtrlQ-E  , CtrlPgUp
     Go to Bottom Display  CtrlQ-X  , CtrlPgDn
     Line Up               CtrlE       Line Down              CtrlX   
     Document Start        CtrlQ-R     Document End           CtrlQ-C 
     Go To Line            CtrlQ-L  



     ─────────────────────── Block Operations ───────────────────────
     Mark Start Block      CtrlK-B     Show/Hide Block        CtrlK-H 
     Mark End Block        CtrlK-K     Delete and HOLD Block  CtrlK-Z 
     HOLD Block,No Delete  CtrlK-U     Move Block             CtrlK-V 
     Copy Block            CtrlK-C     Copy HOLD Text         CtrlK-A 
     Delete Block: No HOLD CtrlK-Y     Toggle Column Mode     CtrlK-N 
     Go to Block Start     CtrlQ-B     Go to Block End        CtrlQ-K 

     ──────── Document ────────    ────────── Second Window ─────────
     Name/Rename Document  CtrlK-M     Open Second Window     CtrlO-O 
     Clear Document        CtrlK-Q     Change Window          CtrlO-G 
     Change Document       CtrlO-D     Close Second Window    CtrlO-Y 

     ────────────────────── Travelling Along Lines ──────────────────
     Next Word             CtrlF    , CtrlRight
     Previous Word         CtrlA    , CtrlLeft
     Next Character        CtrlD   
     Prev Character        CtrlS   
     Column 1 or EOL       CtrlJ    , CtrlEnter
     Go to End of Line     CtrlQ-D  , End     
     Go to Left Margin     CtrlQ-S  , Home    


     ──────────────────────── Line Operations ───────────────────────
     Delete to Line HOLD   CtrlY       New / Split Line     Enter
     Insert Blank Line     CtrlN       Delete to end of line  CtrlQ-Y 
     Insert Line HOLD      CtrlM       Center Line            CtrlO-C 

     ──────────────────── Find, Replace and Delete ──────────────────
     Forward Find/Rep/Del  CtrlQ-G     Backward Find/Rep/Del  CtrlQ-H 
         Options: I = Ignore Letter Case, W = Words Only

     ─────────────────────── Margins and Tabs ───────────────────────
     Tab Right             CtrlI       Tab Left               Shft-Tab
     Set Tab Interval      CtrlO-V     [0 for Tab Memory]
     Set Tab Memory        CtrlO-I     Unset Tab Memory       CtrlO-N 
     Set Left Margin       CtrlO-L     Set Right Margin       CtrlO-R 

     ──────── Mark Text ────────     ──────── Embedded Commands ─────
     Set Mark              CtrlK-0     Hard Page Break        Alt 1
     Goto Mark             CtrlQ-0     Soft Page Break        Alt 2
                                       Underline              Alt 3



     ───────────────────────── Miscellaneous ────────────────────────
     Delete Word/Space     CtrlT       ReCustomize            CtrlO-Z 
     Change Letter Case    F10         Auto-Indent Toggle     CtrlO-X 
     Reparagraph           CtrlB       Block Reparagraph      CtrlO-B 
     Word-Wrap Toggle      CtrlO-W     Delete Char            CtrlG   
     Paginate              CtrlO-P     Print Block or Text    CtrlK-P 
     Insert/OverWrite      CtrlV    , Ins       

     ───────────────────────   Dot Commands   ───────────────────────
     .Tn           n   blank lines at top of each page
     .Bn           n   blank lines at bottom of each page
     .Sn           n   lines skipped initially when first start print
     .Cn           n   maximum number of columns
     .Dn           n   number of blank lines between text lines
     .E                stop printing at preceding line
     .Htext     text   specifies header for each printed page
     .Ftext     text   specifies footer for each printed page
     .Nn           n   specifies starting page number
     .Ln           n   number of lines per page
     .Pn n1 n2     n   number of decimal arguments. Print Codes
     .U                toggle underline on or off
     .Z                Continuous print
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```


                          INTRODUCTION

Installing And Configuring ALT

                          Requirements

To install ALT, you must have a little over 2 megabytes of free 
hard-disk space.  ALT does not require this much, but it must 
have some extra space for installation overhead.  You must also 
have at least 256 Kilobytes of main system memory to use ALT 
effectively.

Begin the installation by inserting the ALT #1 disk into a floppy 
drive in your computer (usually drive A:).

        Type:  a:install (where a: is your floppy drive)
        Press: ENTER

Follow instructions until you see the message:

        Enter Source Drive

Enter the drive containing the ALT #1 disk and press Enter. 
e.g. A:\ . You should then see the message:

        Enter Destination Drive and Path

Respond by entering the drive and directory to contain ALT and 
press Enter. e.g. C:\ALT

The installation programs then begins copying files in ZIP'ed 
form to your hard disk. Momentarily, the installation program 
will ask you to insert the ALT #2 disk into drive A. Do this and
 
        Press: ENTER

Many of the ALT accessories can be run as standalone utilities.  
The installation programs gives you the option to give a name to 
these utilities in order to run them from the command line.  A 
series of prompts will appear giving you the chance to edit the 
default name for the standalone accessories.  You may either edit 
the name, press Enter to accept the default name, or press ESC to 
avoid creating the standalone accessory.

NOTE: **********************************************************

To install without the INSTALL program, simply copy all the files 
to a subdirectory on your hard drive, e.g. \ALT.  If the files 
are ZIPped or ARCed, then use either PKUNZIP or PKUNARC to 
uncompress the files, e.g.

        PKUNZIP ALT1
        PKUNZIP ALT2

The standalone programs can simply be created by copying the 
appropriate ACCessory files to an EXEcutable file.  This allows 
some of the accessories to be called from the DOS command line 
rather than having to access them through the ALT Main Menu.  The 
accessories that are able to be run separate from the Main Menu 
are the Disk Filer (FILER.ACC), Word Processor (EDIT.ACC), 
Appointment Calendar (APP.ACC), Calculator (CALC.ACC), and the 
Address Book (ROLODEX.ACC).  As an example, go to the ALT 
directory and 

        Type:  Copy Filer.Acc F.exe
        Press: Enter

The Disk Filer can now be accessed simply by,

        Type: F
        Press: Enter

It is important that the ALT directory is included in your PATH 
so they can be accessed from any drive or directory, e.g.

        SET PATH=C:\ALT



                Running ALT on a Hard-disk System

To load and run ALT:

        Type: c:
        Press:ENTER
        Type: cd \alt
        Press:ENTER
        Type: alt
        Press:ENTER


                   Configuring the Swap Drive

If ALT is being run for the first time, a screen for configuring 
the swap drive will be presented.  The swap drive is the disk 
drive used by ALT for temporarily storing programs run in other 
partitions while they are not being used.  It is this capability 
that allows ALT to give more than one program, the entire memory 
resources of your computer.  Thus, it is very important that you 
spend a few minutes setting up the swap drive configuration 
screen correctly.  The swap drive configuration screen appears 
similar to the following:

                Swap Drive     Maximum Swap Drive

                    _              ________ K
                    _              ________ K
                    _              ________ K
                    _              ________ K


The Swap Drive configuration screen contains two columns: a swap 
drive column in which you fill in drive letters for the disk 
drives available to ALT for memory swapping and a column 
specifying the corresponding maximum amount of storage ALT is 
allowed to use temporarily on the disk.  

Note that ALT's use of your disk space is temporary.  It will 
only be used as it needs it and then freed upon exiting ALT. You 
must enter at least one disk drive letter for ALT to operate.  We 
suggest using a RAM disk as the swap drive if you have one.  This 
will make swapping much faster.  Another good alternative is to 
use expanded memory. To use expanded memory, enter 'X' as the 
first swap drive letter. Then enter the maximum amount of disk 
space in kilobytes (1024 bytes) you can afford in the 
corresponding column to the right.  Allow for about 600K per 
partition you plan to use plus about 200K for each accessory you 
use.  You may leave this column blank if ALT is allowed to use 
all of the disk space available.  

You can specify as many as five different swap drives as 
available to ALT.  It is recommended that you specify your hard 
drive as the last swap drive if you are using a RAM disk or 
expanded memory.  This will give ALT some storage to use 
temporarily in case it runs out of space on the RAM disk or 
expanded memory.  Leave the Maximum Swap Size column blank for 
the last drive specified in order to avoid the "Out of Swap Space 
Error." For example suppose you have one hard disk C: and no RAM 
disk or expanded memory.  Then the following simple configuration 
will suffice:

               Swap Drive        Maximum Swap Drive
                    C                                  

As another example, suppose you have a RAM disk D: with 3 Megabytes 
and a hard disk C:.  Then a recommended swap drive configuration might 
be:
               Swap Drive        Maximum Swap Drive
                     D                 1500
                     C                       

This sets up drive D: as the principal swap drive of which ALT is 
only allowed to temporarily use 1500K or 1.5 Megabyte.  Drive C: 
is specified as the secondary swap drive. As a final example, 
suppose you have an expanded memory card with 4 Megabytes.  Then 
you might configure ALT in the following manner:

               Swap Drive        Maximum Swap Drive
                     X                 2000
                     C                       

This makes the expanded memory card the principal swap drive with 
enough memory to swap about three running programs and some 
accessories before running out of "disk" space on the expanded 
memory card.  If ALT needed more than 2000K it would then use 
drive C: 

NOTE: You must first add the line: 

        DEVICE = C:\ALT\ISMM.SYS      (your path may differ)

to the end of your config.sys file in order to use expanded 
memory for swapping or if desired, the install program will 
automatically edit the config.sys file if the Instinct memory 
manager is not already installed.


                        The ALT Main Menu

Tapping the <Alt> key very quickly will cause the ALT main menu to 
pop-up, whether you are at the DOS prompt , using an application 
program or using an ALT accessory.  Note: it is not sufficient to 
press down the <Alt> key to retrieve ALT - you must actually tap 
the key, leaving it depressed no more than a fraction of a 
second.  After tapping <Alt>, the screen should look similar to the 
following:

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Instinct Software\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
]                                ALT 2.00                                 ^
]Copyright (C) 1989 Instinct Software. Order(214)739-5543 BBS(214)368-2709^
___________________________________________________________________________

      IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
      :       Press ENTER to Select.  INS to Add.  DEL to Delete.      :
      LMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9
      : 1 C:\LOTUS              >123                            539 K g:
      : 2 C:\WP                 >WP                             539 K g:
      : 2 C:\                   >                               539 K g:
      HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<

IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
:Rolocards Menus Disk Calc Appointments Editor Notes Kut Paste OTHER Info :
:Names, addresses, phone numbers and an autodialer                        :
HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<

The main menu contains two distinct menu boxes:

* The top menu box contains a list of the currently active 
partitions. Each choice displays the drive and path prompt along 
with the currently executed command for each partition (123, Word 
Perfect and the DOS prompt in the above example).  The size of 
the partition is also displayed at the far right-hand side of the 
selection along with a 'g' if the partition restores graphics 
screens.  The current partition is marked with an arrow symbol in 
the leftmost column.  To switch to a new partition, either type 
the number of the partition or press the up or down arrow keys to 
position the highlighted bar in the top menu area.  Use the up 
and down arrow keys to select a partition and press Enter. To go 
back to the bottom menu box, press ESC or use the up and down 
arrow keys to move off of the edge of the top menu box.

* The bottom menu box contains selections for the ALT desk 
accessories, utilities and system functions.  Items from the menu 
can be chosen in one of two ways: either press the first letter 
of the desired menu choice or use the arrow keys to position the 
highlighted bar over the desired choice and press Enter.  The 
main menu contains the following choices:

                         Command Summary

Rolocards - Retrieves a personalized address book with autodialer
Menus - Brings up the program menu manager.  Lets you create your 
        own menus of executable programs that can be run at the 
        touch of a key
Disk -  Retrieves disk filer for moving, copying, renaming and 
        viewing files
Calc -  Retrieves the RPN, algebraic or paper tape calculator
Appointments - Brings up a calendar/clock with appointment pad
Editor - Presents the ALT word processor
Notes  - Retrieves a full-screen notepad editor for taking 
         on-going notes
Kut    - Initiates cut mode for the cut and paste facility
Paste  - Begins a paste operation of the most recently cut text
Other  - Presents a submenu of further ALT commands and 
         accessories: Clipboard, Key recording, Macro menu, Macro 
         editor, System functions and Quit
Info   - Order form for ALT 2.0!

                      Other Command Summary

Selecting the "Other" command above, presents you with the following 
menu choices:

Clipboard - Retrieves the clipboard for editing previously cut 
            text.
Record - Initiates learn mode for recording a keyboard macro
Ascii  - Retrieves an ASCII table program for viewing the 
         entire IBM character set
Keys   - Presents a list of defined macro keys along with their 
         descriptive titles
Macros - Allows you to edit, load, and save macro definitions
System - Retrieves a submenu of system commands. See section 1.3.
Quit   - Clears ALT from memory, removing any programs 
         running in partitions along with it.

CAUTION: When you quit ALT in this manner all running programs 
will be terminated and any unsaved data will be lost forever. 
Make sure all data is saved and all programs in the partitions 
are exited before using this option.  If you have recorded any 
macros that you wish to keep, these must also be saved before 
quitting.



Miscellaneous Features


                        Command History

ALT provides a command history mechanism for each partition thereby 
allowing you to retrieve, edit and re-issue past commands at the DOS 
prompt. ALT stores the last 10 commands you typed.  Use the <Up> 
and <Down> keys to move backward and forward through the previous 
command list until the desired command is located.  For example, pressing 
the <Up> key once retrieves the last command entered. Use the 
<Left> and <Right> keys to move around inside the command.  You 
can then make editing changes, inserting text as necessary and deleting 
text with the <Del> key. Use the <Ins> to toggle from 
insert mode to overstrike mode.  Command editing begins in insert 
mode.  A complete list of command editing keys follows:

                       Keyboard Speed-up

ALT provides a keyboard speed-up mechanism to increase the rate of 
auto-repeat when a key is held down.  This feature is especially useful 
during text editing sessions, dramatically increasing the speed of 
moving around while holding down the arrow keys.  The keyboard speed-up 
feature is activated via the setup program under General setup.  Enter 
a number from 1 (slowest) to 3 (fastest) in the Speed-up Keys field.  Enter 
0 to disable the feature altogether.  See Appendix A for more information 
about using the setup program.

                  Mouse Emulation of Keyboard 

If you have a mouse, it can be used with the ALT main menu and the 
accessories.  Moving the mouse left and right emulates <Left> 
and <Right> keystrokes, while moving the mouse up and down emulates 
<Up> and <Down> keystrokes.  In addition, pressing the 
Left mouse button simulates the <Enter> key and pressing the 
Right mouse button simulates the <ESC> key. This feature can 
be configured temporarily (i.e., for one ALT session) through 
the ALT System Menu (see the next section).  The default action can 
be set through the General Setup in the Mouse EMulation field.



                          The ALT Menus

The type of menu (bottom menu box) described above is common to 
all parts of ALT.  These contain an array of one or two word menu 
choices that perform a particular function.  Use the left and 
right arrow keys to highlight different menu choices.  A 
description of the highlighted choice appears on the line below 
the menu.  Pressing ENTER selects the currently highlighted 
choice.  A faster method of selecting a menu choice is to press 
the first letter of the choice.

              Deleting Partitions and Quitting ALT

Pressing the DEL key after highlighting a partition with the up 
and down arrow keys at the ALT main screen deletes the 
highlighted partition. Deleting a partition is very useful for 
removing an un-needed partition or when a program running in a 
partition no longer responds to keystrokes or "locks up".  With 
the delete partition capability, it is no longer necessary to 
reboot the machine under such conditions, as long as you can 
switch back to ALT and as long as the offending program has not 
corrupted ALT. ALT and all of the running partitions can be 
removed from memory at once by selecting the Quit option from the 
Other submenu.

CAUTION: The delete partition capability should not be viewed as 
an alternative means of exiting a program.  The option should 
only be used as means to remove an unneeded partition or a last 
resort when a program has "locked up".  Using this option to exit 
a program will sometimes result in lost data.



The ALT System Menu

                          The ALT Menus

The ALT system menu allows you to perform various system 
configuration functions.  To retrieve the system menu:

        Tap:    <Alt>
        Select: Other
        Select: System

The following system commands are available:

                         Command Summary

Disable - Disables playback of macro keys.  This is useful when 
        you have defined macro keys that conflict with the usage 
        of these keys by an application program
Enable- Re-enables macros after disabling with the above command
Fast  - Enables fast macro playback.  Keys are played back 
        without regard to the speed at which the application can 
        accept them. Some keystrokes may be lost in a few 
        applications
Slow -  Enables slower macro playback.  Choose this option if an 
        application program tends to lose keystrokes during macro 
        playback
Blank - Configures the screen blanking interval. Available 
        choices are one minute, two minutes, five minutes and 
        disable
Mouse - Enables/Disables the use of the mouse in the accessories
Clock - Enables/Disables the on-screen clock
Alarms- Enables/Disables pop-up alarm messages



For Those Who Hate Manuals

A commonly-heard complaint about software products is that it 
shouldn't be necessary to read the whole manual before using the 
product.  If you are sympathetic to this point of view, then a 
careful reading of this section should help to get you on your 
way with ALT, especially if you are already an experienced 
computer user. 

      The Concepts of User Partitions and Program Switching

Like many programs for the IBM PC family, ALT resides in memory so 
that it is instantly accessible.  However, ALT operates differently 
from most memory-resident software.  ALT divides the memory in your 
computer into one or more partitions.  This gives you the capability 
to run several programs simultaneously and allows you to switch at 
will among them. The partitions are numbered 1 through 8.  To switch 
to a new partition, tap the <Alt> key very quickly and then press the 
number of the partition desired.  For example, to go to partition 
2, tap the <Alt> key and then press 2.  Remember, in order to retrieve 
ALT, you must tap the <Alt> key very quickly, not press it.

                     Partition Configuration

If the partition you are switching to has never been visited before, 
then a partition configuration screen similar to the following will 
be displayed:

   IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
   :                                                   :
   :            Open Additional Partition ?            :
   :                                                   :
   :                     Yes/No  Y                     :
   :                                                   :
   : Press  Space  to  Change Memory Size and Graphics :
   :                                                   :
   :                Press ESC to Abort                 :
   :                                                   :
   HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<
                                                                                
Normally you will press ENTER at this point to define the new 
partition or ESC to abort.  However, several options are 
available for defining the new partition by pressing SPACE.


                       The ALT Accessories

To bring up the ALT main menu and select an accessory

        Tap:    <Alt>
        Select: the desired accessory

To simply return back to another partition or an accessory,

        Tap:    <Alt>
        Select: the accessory or partition.

Generally, ESC will exit you back to the ALT Main Menu while in 
an accessory.

                          Quitting ALT

Occasionally you may want to remove ALT from memory entirely.  
For example, you may want to free up the memory it is using to 
run a large program.  To do so:

        Tap:    <Alt>
        Select: Other
        Select: Quit
        Press:  Y

CAUTION: When you quit ALT in this manner all running programs 
will be terminated and any unsaved data will be lost forever. 
Make sure all data is saved and all programs in the partitions 
are exited before using this option.  If you have recorded any 
macros that you wish to keep, these must also be saved before 
quitting.


                           DISK FILER

Command Summary and Other Essentials

The ALT disk filer provides a powerful tool for managing and 
organizing the files on your disk.  With the filer, you can 
quickly view directories and subdirectories, make new 
directories, run programs, move files, tag multiple files for 
copying or deleting, find a file anywhere on the disk, change 
file attributes and much more.  In addition the disk filer 
provides "hyper-run" and "hyper-view" capabilities.  To enter the 
filer:

        Tap:   <Alt>
        Select:Disk

                         Command Summary

Edit   - Edits a single or tagged (multiple) files with the ALT 
         editor or any editor of your choice.
Copy   - Copies single or tagged files
Delete - Deletes a single file or tagged files
File   - Changes to a directory, makes a new directory, changes 
         the volume label, sets file selection criterion, rereads 
         the directory, displays disk free space and sorts the 
         files in the display
Program- Executes a DOS command or program
Move   - Relocates a file or a group of files to a different 
         directory or disk
Next   - Continues a search
Other  - Encrypts, decrypts files, sets file attributes and sends 
         files to the printer
Rename - Renames a file or a group of files matching a wildcard
Search - Locates a file in the current directory or on the entire 
         disk
Tag    - Marks multiple files for copying, deleting or moving
View   - Views the highlighted file or directory with the ALT 
         viewer or any file viewing program of your choice
2Xecute - Executes the currently highlighted file if its extension 
         is .bat, .exe or .com


The Directory Tree and Changing the Directory

Moving around in the disk filer is easy and swift.  A directory 
tree is always available to present a panoramic view of your 
directories. From here, selecting a directory to view is as easy 
as pressing the ENTER key or the left mouse button.  To retrieve 
the directory tree:

        Press:F2 or SPACE

Tree Keys

ENTER       - Select the highlighted directory
F2, SPACE   - View directory tree of a different disk drive
Left, Right - Move to next or previous sub-directory
Up, Down    - Move to next or previous directory
Home, End   - Move to the first or last entry
ESC         - Abort the directory search and return
A-Z         - Move through directories which begins with the 
              letter pressed
F10         - Re-read the directory tree

3.4 Tagging Files

Several operations, i.e. moving, copying, deleting, and printing 
allow you to perform the operation on a group of marked files as 
well as to a single file.  A single file can be "tagged" for 
these operations by using the arrow keys to highlight the file 
and pressing the '+' key ( a file can be un-tagged by pressing 
'-' ). Another method for marking larger groups of files is 
available from the filer main menu.  To access these marking 
operations:

        Press: F10
        Select: Tag


Executing Programs

ALT provides two ways to execute commands from within the disk 
filer: the Program command and the Xecute command.  The Program 
command pops up a prompt allowing you to enter a DOS command.  
The Xecute command allows you to execute the currently 
highlighted command ( if its extension is .exe, .com or .bat ), 
pausing only to let you edit the command line arguments.  
Re-stated, the Program command lets you type in program or DOS 
commands and the Xecute command provides a "point-and-shoot"  or 
"hyper-run" method of running commands.

                           Setting Up

For the Program, and Xecute commands to function properly, the 
disk filer must be given an additional amount of memory to run 
the programs in.  The default extra memory given to the disk 
filer is 250 Kilobytes.  This value can be changed via the 
Filer/Appointment options in the Setup program under the field 
"extra memory".  The new value will not be used until the next 
time ALT is loaded.  You may need to increase the amount of 
additional memory given to the disk filer if you encounter the 
following error:

Execution Error - 'Insufficient Memory'

Example

Run the DOS directory command from within the disk filer:

        Select: Program
        Press: Ctrl-X      (Clears the command line)
        Type: dir *.* 
        Press: Enter

                       Command Line Macros

Command Line Macros provide a powerful mechanism for supplying 
path, directory, and filename entries to the Xecute, Edit, 
Program and View commands.  Command line macros begin with a '$' 
character and are replaced with the appropriate file or directory 
information at runtime.  As a simple example, suppose that the 
file hlp.txt is currently highlighted in the disk filer in the 
directory \alt and you performed the following steps:

        Select: Program
        Type: type $PN 

then the filer would respond by executing

        type C:\ALT\HELP.TXT

since ALT reserves the keyword $PN as a macro for the pathname of 
the currently highlighted file.

The following command line macro keywords are reserved for use by 
the disk filer.  When a command line macro keyword is 
encountered, the disk filer replaces it with the appropriate 
entry before sending the command to DOS.  Assume for the sake of 
example that the file CHKDSK.COM is currently highlighted and the 
file COMMAND.COM is tagged in the directory C:\MSDOS.

Macro Keywords

$PN     - The Pathname of the highlighted file, in our example 
          would be replaced with C:\MSDOS\CHKDSK.COM
$FN     - The Filename of the highlighted file, here replaced 
          with CHKDSK.COM
$DR     - The current DRive, in our example, C:
$DIR    - The current DIRectory, in our example \MSDOS
$PT     - The pathnames of Tagged files, in our example,<R>
          C:\MSDOS\COMMAND.COM
$FT     - The filenames of Tagged files, in our example 
          COMMAND.COM
$PU     - The pathnames of Untagged files. Same format as $PT
$FU     - The filenames of Untagged files. Same format as $FT

3.8 Viewing and Editing Files

The disk filer allows you to point to a file and view or edit it.  To 
view a file, highlight the file you wish to view,

        Press: F10
        Select:View

You can also view a file (as long as it doesn't end in .bat, .com 
or .exe) by simply highlighting it and pressing ENTER.

To edit a file, highlight the file you wish to edit,

        Press: F10
        Select: Edit

By default, the ALT editor is retrieved to edit the text file.  
You may alter the choice of editors while ALT is running, 

        Press:  F9
        Select: Editor

At this point enter the name of the editor you wish to use as you 
would type it on the DOS command line.  Use the $PN command line 
macro keyword to send the editor the name of the file to edit.  
For example if your editor is named edit.exe, enter:

        edit $PN

Enter a blank line to restore use of the ALT editor by pressing 
Ctl-X.

                      Hyper-View Capability

The disk filer lets you specify an alternate "viewing" program to 
use in place of the ALT viewer.  This way, if you already have a 
favorite file viewing utility you needn't sacrifice using it to 
use the ALT disk filer.  Furthermore, you can configure ALT to 
automatically select a viewing program based on the extension of 
the file to be viewed.  For example, you can configure ALT to 
bring up Lotus 123 to view files with a ".WKS" extension, PKARC 
for files with an extension of ".ARC", and the ALT viewer for all 
other extensions.

                    Configuring "Hyper-View"

The Hyper-View configuration information is contained in the 
file, 'FILEVIEW.DAT', which must reside in the ALT directory.  
When the disk filer is first entered, it attempts to read 
'FILEVIEW.DAT' from the ALT directory for the "hyper-view" 
configuration . FILEVIEW.DAT is a pure ascii-text file in which 
each line in the file contains information on how to treat a 
different file extension. The following examples are for Word 
Perfect, ARC, and ZIP files,

        "DOC"  WP $PN
        "ARC"  PKARC -v $PN
        "ZIP"  PKZIP -v $PN

The FILEVIEW.DAT file consists of a line for each file extension 
to be managed by the HyperView facility.  The first field is the 
file extension and must be enclosed in double quotes. The rest of 
the line comprises the command to run when a file with the 
specified extension is viewed.  Any disk filer keyword except for 
tagged keywords may be used in the command specification.  Any 
file that does not match any of the supplied extensions is viewed 
with the default file viewer. The FILEVIEW.DAT file may be 
modified at any time.  To get the disk filer to recognize the 
changes, go into the disk filer and:

        Press:  F9
        Select: Update


                   CALENDAR / APPOINTMENT BOOK


Essentials of the Appointment Calendar

The appointment calendar provides a convenient way for you to 
keep track of your daily activities and meetings.  In addition, 
alarms can be set to remind you of important appointments ahead 
of time.  Alarms are functional so long as ALT is loaded.  You 
need not be in the appointment calendar to receive alarms.

To enter the appointment calendar:

        Tap:    <Alt>
        Select: Appointments

To enter the appointment scheduler, move to the appropriate day:

        Press: ENTER


Adding Appointments

New appointments can be set in two ways; you can modify an 
existing appointment time by moving the highlighted bar to the 
desired time and pressing Enter or you can insert a new 
appointment time by pressing Ins. In either case, a window 
appears for setting appointment information. 

                 Setting Appointments and Alarms

The top line of the notes is shown in the appointment window 
after leaving the appointment view window; therefore, it is 
important to enter a brief description about the appointment in 
the first line followed by any further explanatory text in the 
subsequent three lines.  At the bottom of the appointment view 
window are fields for the date and time for an appointment alarm.  
The date for the alarm defaults to today's date.  Leave the time 
field blank for no alarm or enter a time (usually a few minutes 
prior to the appointment time).  If you wish to receive a daily 
reminder for the appointment beginning several days in advance of 
the appointment, enter a date in the alarm date field which 
corresponds to the desired number of days ahead of the 
appointment.  



Handling Alarms

When the time comes for an alarm that you have previously set 
ALT, reminds you of the event with a "Pop-up" alarm message.

You can return to the application you were running by pressing 
ESC. At this point you should switch to the appointment calendar 
to review which alarm was activated:

        Tap:    <Alt>
        Select: Appointments 
        Press:  F7 
        Press:  Enter 
        Press:  Enter 

The appointment for the alarm due is displayed in a window for 
your review.
 


                         THE CALCULATORS

A Calculator for Every Need

ALT offers you three calculators:

 * An adding machine-like calculator with continuous printed tape

 * A Reverse Polish Notation (RPN) calculator with numerous 
   scientific, business and statistical functions

 * An algebraic (parentheses) calculator with scientific 
   functions

Choose the calculator that best suits your needs:

 * If you just need to do some simple calculations like adding a 
   column of numbers, choose the Tape calculator

 * If you are familiar with the operation of an RPN calculator, 
   and you need advanced business functions like loan payment 
   calculations, statistical or scientific functions, choose the 
   RPN calculator

 * If you are not familiar with the operation of an RPN 
   calculator and you need access to scientific functions, choose 
   the Algebraic calculator




                      EDITOR/WORD PROCESSOR


Editor Essentials

The ALT editor is a full-featured ascii text file editor.  Many 
commands are available for moving around a document, entering 
text, marking blocks, moving & deleting blocks, printing, 
document formatting, etc.  The editor is keystroke compatible 
with "Wordstar", but you can customize the program to match the 
operation of your favorite word processor.  For example, 
keystroke templates are included to mimic BRIEF, and Word 
Perfect. Information about configuring the editor is presented in 
the chapter on the setup program.

                    Capabilities and Options

The editor offers many options such as left and right margin 
adjust, word wrap, insert/overwrite mode, tab-settings, and 
auto-indent.  Advanced features include multiple-document 
editing, split screen editing, and document print formatting.  
The screen display may be split so that one document appears in 
the top half of the display and the other document in the lower 
half. There are a number of formatting commands that can be used 
to control pagination, page numbering, print headers, footers, 
multiple underlines, single underlines, etc.

The Editor Display

To retrieve the ALT editor:

        Tap:    <Alt>
        Select: Editor


Editor Keys

The editor defaults to WordStar keystroke compatibility.  For 
this discussion, the following conventions are used:

A triple keystroke combination is written as CtlK-Q, i.e.,

        Press: Ctrl     (continue holding the key)
        Press: K        (then let both keys up simultaneously)
        Press: Q   

Most editor operations which request input from the user can be 
aborted by pressing the ESC key.  The Ctrl-X key can be used to 
clear input lines.

                        Block Operations

A block is a contiguous section of text in the document that is 
marked by a starting location and an ending location within the 
document. Once the block is marked, a number of operations are 
available that use the section of text.  For example, Delete 
Block, Copy Block, Move Block, Print Block are available. 

The block is formed by marking the start and end positions in the 
text of the document.  The block will be highlighted in a 
different color. Note that the starting block position must 
precede the ending block position in the document.  The start 
position is marked with the  "Start Block" command (default 
CtlK-B). The end position is marked with the "End Block" command 
(default CtlK-K).  The two ends of the block can be changed at 
any time.

Window Commands

The edit screen can be divided into two windows, allowing you to 
edit different parts of the same document or more than one 
document at a time.  When you start the editor, there will be one 
window that occupies the entire display area.  A second window 
can be opened that will split the display area horizontally.  The 
advantage of using the two windows are:

  * You can view different parts of the same document.

  * Two documents containing related information can be displayed 
    simultaneously.

  * Text from one window can be easily moved to the document in 
    the other window using the Block HOLD capabilities.

Commands are available to switch between the two windows and to 
close a window if two windows exist.

Printing with Formatting Commands

Formatting commands are used for formatting the printed output of 
the document.  Commands are available to allow printed page 
output, headers, footers, specify number of lines per page, page 
breaks, line spacing, ....  Full details on the formatting 
commands are explained in the printed manual which is included 
with the ALT+ version.



                          ADDRESS BOOK


Essentials of the Address Book

The address book maintains an address card book and phone 
directory.  Among the features of the address book are:

  * Provides for two phone numbers, address, company name, title 
    and free form notes for each card.

  * Prints address labels or envelopes for some or all of the 
    cards in the address book.

  * Dials numbers automatically if you have a Hayes compatible 
    modem. You need only point at the person you want to call and 
    the number will be dialed for you.

  * Provides 26 dialing codes for dialing long sequences like a 
    SPRINT code or sequences like 9 + to get an outside line

  * Provides the capability for marking several names for calling 
    or printing.

  * Supports an unlimited number of separate address books. For 
    instance, you can have one for business contacts and one for 
    friends and relatives.

  * Shows the cards in two different views: index tab only and 
    expanded card.

To enter the address book:

        Tap:    <Alt>
        Select: Rolocards

The address book screen first appears in condensed telephone listing 
mode. In this mode only names and phone numbers are shown and appear 
in sorted order.  For example, the address book might look like:

The following commands are available from the address book menu:

                         Command Summary

Add     - Adds a new card
Call    - Dials the phone number on the current card
Delete  - Deletes the current card
Edit-Codes - Changes or adds dialing codes for inclusion into phone 
          numbers
File    - Changes address books
Modify  - Updates an existing card
Print   - Prints cards
Quit    - Closes the address book and returns
Search  - Finds the nearest matching card
Untag   - Removes the tag for all cards
View    - Displays the current card in expanded mode



Calling

The address book allows you to dial phone numbers automatically, 
if you have a Hayes-compatible modem. Calling options are located 
under the Call selection of the address book main menu. 


Using the Setup Command

Pressing the setup key, F9, provides you with the following 
options, 

Display         - Selects telephone or address-book mode
Modem           - Configures port number and phone type for autodialing
Printer         - Sets up printer characteristics
Modem options   - The modem options allow you configure the port 
                  number used by your modem and whether your 
                  phone is pulse or tone.


                             NOTEPAD


Notepad Essentials

The notepad is a smaller, faster version of the ALT editor. The 
notepad automatically loads in the file "NOTES" from the 
directory in which ALT is installed.  Pressing ESC in the notepad 
automatically saves the NOTES file and brings up the ALT main 
menu.  Please note that if the ALT key is tapped, the ALT main 
menu is retrieved without saving the NOTES file.  To enter the 
notepad:

        Tap:    <Alt>
        Select: Notepad

Once inside the notepad, press F1 to retrieve the notepad help.  
The notepad is functionally identical to the ALT editor except in 
one regard:  the notepad is capable of editing only small files ( 
20-30 Kilobytes ).  As with the editor, the notepad defaults to 
WordStar keystroke compatibility but this can be overridden with 
the setup program.  Chapter 9 should be consulted for information 
regarding the functionality and use of all of the ALT editors 
including the notepad.



                           USER MENUS

User Menus Essentials

ALT provides powerful, user-definable menus for organizing the 
use of your computer.  User menus are accessed by selecting the 
Program selection under the Accessories submenu.  In other words:

        Tap:   <Alt>
        Select:Menus

At this point the user-definable menus are shown.  Selections are 
chosen by pressing one of the letters 'A' to 'P' or by moving the 
highlighted bar to the desired selection and pressing ENTER.  
With user menus you can:

  * Set up your own menus for running programs automatically with 
    the touch of one key

  * Define a setup command sequence that is performed each time a 
    program is run from the user menu

  * Build submenus, to provide a separate menu for each of 
    several users or to layer a complex set of user menus in a 
    logical hierarchical fashion.  Submenus are distinguished 
    from program selections by the appearance of a DOWN ARROW to 
    the right of their description.

Selecting a program on the user menu will cause ALT to search for 
a partition large enough to run the program and will then load 
and execute it.



Defining User Menus

User menus are defined by pressing F10 while at the User Menu 
screen.  After pressing F10, you will be presented with two menu 
choices:

Add/Modify  - Add a new menu selection or modify an existing one
Delete      - Delete an existing menu item

                   Adding A Program Menu Item

As an example, consider adding a menu item which will run a copy of Lotus
123 which resides in a directory named C:\lotus:

Go to the ALT program menus

        Press: F10
        Select:Add/Modify

ALT will then ask whether you are defining a submenu or a program.

        Select: Program

You will then be presented with the following pop-up window which 
should be filled out as shown (if you have Lotus 123 on your 
disk, fill in the drive and directory for Lotus 123 as it exists 
on your disk):

        IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
        : Description of Program                     :
        :  Lotus 123                                 :
        :                                            :
        : Program Execution Command                  :
        :  123                                       :
        :                                            :
        : Program Directory                          :
        :  \lotus                                    :
        :                                            :
        : Drive C               Memory Size 500 K    :
        :                                            :
        : Pause After Program     (y/n) ?  N         :
        : Add Options To Command  (y/n) ?  N         :
        : Are Graphics Allowed    (y/n) ?  Y         :
        :                                            :
        :                                            :
        LMMMMMMPress F9 For Initial Keys RecordMMMMMM9
        :00000000000000000000000000000000000000000000:
        :00000000000000000000000000000000000000000000:
        :00000000000000000000000000000000000000000000:
        HMMMMMMMMMMMMMPress F10 To ExitMMMMMMMMMMMMMM<


This screen presents you with several items used to define the 
program menu selection:

Drive        - Enter the letter of the disk drive where the 
               program to be run resides, e.g. A,B, or C.  Leave 
               blank to the use default drive

Memory Size  - Enter the minimum amount of memory needed by your 
               program to run successfully. Leaving this item 
               blank will cause ALT to select the largest 
               available partition

Directory    - Enter the path where the program file can be 
               found.  For example, if your Lotus 123 program 
               resides in a directory named \LOTUS, enter \LOTUS.  
               Leave blank to use the default directory. Do not 
               enter a drive letter in the path

Description  - Enter a descriptive name of the program. This will 
               appear on the menu line.

Command      - Enter the name of the program file ALT will run.  
               For example, to run Lotus 123, enter 123

Pause        - Answer Yes, if you want a pause to occur after 
               exiting your application program before returning 
               to the program menu.  This is useful for menu 
               items which issue a DOS command such as dir

Add Options  - Allows you to add command line options to a 
               program menu command.  The program menu will pause 
               just prior to running your application so that you 
               can type any command line parameters.

Graphics     - Specify Yes if the program runs in graphics mode 
               on a color monitor

Swappable    - Specify No if running a communications program

Setup Sequence - A powerful option in the menu definition screen 
               is the setup command sequence.  This sequence is a 
               series of keystrokes that will be "played back" 
               after the program is loaded and run.
               


Running Programs from the ALT User Menus

Once your menu selections for running programs have been defined, 
it is easy to select a menu item.  Just press the letter key 
associated with the menu item (the associated letter appears to 
the left of the menu item) or use the arrow keys to position the 
highlighted bar over the desired selection and press ENTER.




                   THE USE OF KEYBOARD MACROS


Macro Essentials

A keyboard macro is a sequence of keystrokes that you can execute 
by pressing a single key.  The keystroke sequence is called the 
macro definition while the key used to execute the definition is 
called the macro key.  To explain macro operation in another way, 
pressing a macro key causes ALT to momentarily take over the 
keyboard and "type" the macro definition. As a simple example, if 
you were writing a large document that contained the phrase 
NUCLEAR REGULATORY COMMISSION in numerous places, you could 
"redefine" the F1 key as a macro key to "play back" the phrase 
NUCLEAR REGULATORY COMMISSION every time it is pressed.  This 
would save you from having to type the phrase repeatedly.

With keyboard macros, you can automate almost any task that you 
perform on a computer.  As you become more familiar with keyboard 
macros, you will learn to recognize keystroke sequences that you 
use frequently.  By saving such sequences as a macro definition, 
you can turn even the most monotonous or complex tasks into a 
streamlined, efficient operation.



Recording Keystrokes

A simple example will explain the use of keyboard macros more 
fully.  Begin this example at the DOS prompt (e.g.  C: ) with ALT 
loaded.

        Tap:    <Alt>
        Select: Other
        Select: Record

You will be prompted to press the key you wish to define

        Press: F3

You will then be prompted for an optional title

        Type: Do A Directory Listing
        Press: Enter

You are now back at the DOS prompt in record mode.  At this 
point, anything you type will be remembered by ALT.  A clicking 
sound will occur with each keystroke to remind you that you are 
in record mode.

        Type: dir *.*
        Press: Enter

The current directory listing should now be displayed. Next, 
terminate record mode and thus complete the macro definition for 
the F3 key:

        Tap:    <Alt>
        Select: Quit



Playing Macros Back

The recorded keystrokes can now be played back at any time by 
pressing the macro key F3.  Try this yourself:

        Press: F3

Notice that the keystrokes, dir *.*, were "played back" just as 
if you had typed them yourself and the computer responded with a 
directory listing. The only difference is, by using a keyboard 
macro, you only had to press one key instead of seven to perform 
the directory listing.

                   Using The Macro Titles Menu

A second way to play back a macro definition is to select it from 
the macro menu.  Return to the DOS prompt:

Tap:    <Alt>
Select: Other
Select: Keys
Select: F3....Do A Directory Listing
Press: Enter

The macro definition will play back just as if the F3 key was 
pressed.



Instant Macros

Sometimes you want to quickly record a sequence of keystrokes, 
but you don't want to bother with going through the macro menu 
and giving the macro a title.  For example, while in an editor 
you might need to create a macro which goes to the beginning of a 
line, inserts a tab and then moves to the next line. You can use 
an instant macro. An instant macro can be recorded without going 
through the normal ALT menus.  Ten keys available for instant 
recording: AltF1, AltF2,... AltF10.  To begin instant recording 
for AltFn, press Alt-Shift-Fn, where n is 1,2,...10.  For 
example, to begin instant recording of the AltF3 key, press 
Alt-Shift-F3.

                      Ending Instant Record

Recording will continue until the <Alt> key is tapped. Tapping <Alt>
will stop recording immediately.  No menu will appear.  To play 
the macro, simply press AltF3.  



               EDITING, SAVING AND LOADING MACROS



Edit, Load and Save Essentials

ALT supports the loading, saving and editing of macro definition 
files. These functions are accessed through the Macros selection 
of the ALT main menu.  To see the options available:

        Tap:    <Alt>
        Select: Other
        Select: Macros

The following choices are revealed:

Edit    - Retrieves the macro editor
Load    - Loads a file of pre-existing macros
Save    - Saves the current macros to a file



The Macro Editor

ALT provides a powerful editor for updating, maintaining and 
adding commands to macro definitions.  The editor contains many 
of the features of the ALT text editor.  In addition, the editor 
performs error checking upon exit to insure the correctness of 
the macro definitions.  If an error is found, the cursor is moved 
to the error and an appropriate message is given.

If any keys are defined, their macro definitions will be 
displayed.  There are three parts in a macro definition:

* The key or key combination defined
* A description of the key
* The macro definition

As a simple example, consider the simple macro definition of the 
last chapter.  It would appear as follows in the macro editor:

<MACRO:{F3}:Do A Directory Listing        >>dir *.*{Ret}

In this example, the keyword macro marks the beginning of a macro 
definition.  F3 is the defined key.  The title is "Do A Directory 
Listing" and the body of the definition is "dir *.*{Ret}".  All 
macro definitions look more or less like this example.  See the 
Advanced Macro Command section for a more detailed explanation of 
the symbols in the definition.

                  Macro Editor Command Summary

The operation of the macro editor is identical to that of the ALT 
editor except that the macro editor performs syntax checks on the 
contents of the editor before exiting.  See Chapter 9 for a 
description of the functions available in the macro editor. To 
exit the macro editor, press ESC.  The editor will give the 
option to Keep or Abort.  If errors are detected, the cursor will 
be positioned at the offending site and an appropriate error 
message will be displayed.



                           CUT / PASTE


Essentials of Cut / Paste

Cut & Paste Screen allows you to effectively cut out a portion of 
text on your screen at any time.  The cut portion of the screen 
can then be placed (or pasted) to another application (including 
ALT accessory functions). Furthermore, the cut text can be edited 
using the clipboard function in ALT before pasting.



Invoking the Cut Function

To begin a cut operation:

        Tap:    <Alt>
        Select: Kut

At this point the screen will appear exactly as it did before 
entering the record macro menu.  The cursor can be moved around 
to different areas of the screen with the arrow keys. To select a 
block of the screen, move the cursor to one corner and press the 
anchor key: the period ('.') or the plus key '+'.  Any subsequent 
movement of the cursor will highlight a block on the screen.  
This block marks the text that will be selected. Press ENTER to 
complete the Cut operation of the marked text.



The Paste Operation

To paste after a cut operation, go to the application where you 
want the cut portion to be pasted and move the cursor to where 
you want the upper left corner of the paste to begin.

        Tap:   <Alt>
        Select:Paste

The contents from the last cut operation are thus pasted back to 
another application.



Editing in the Clipboard

Sometimes you may want to edit the contents of a cut screen 
before pasting it to an application.  ALT provides a clipboard, 
(i.e. an editor), for doing just that.  To invoke the clipboard:

        Tap:    <Alt>
        Select: Other
        Select: Clipboard

To save the contents of the clipboard for paste back later:

        Press: Esc

You will be given the option to Save or Abort.  Select Abort if 
you do not wish to save the changes made.

The clipboard operates otherwise identically to the ALT editor. 
For more information see Chapter 9.

 
                        THE SETUP PROGRAM

A setup program is provided with ALT to enable you to configure 
various functions and operating parameters used by ALT and its 
accessories. The setup program allows you to specify such options 
as:

* The state of general operating modes including screen blanking, 
the ALT hot-key, mouse usage, and other miscellaneous functions.

* Colors, printer modes, and communication ports used by the 
Appointment Book.

* Colors and customization files for all the editors.

* Editor key assignments.

* Which drives are available to ALT for swapping and limits on 
individual drive usage.

* Filer and Appointment Calendar colors, memory usage, etc.

* Calculator, Menu Program and Ascii Table colors

* ALT main menu colors

Once you have made configuration choices in the setup program, 
they will remain in effect each time you run ALT unless 
overridden by a command line option or until changed with the 
setup program again.  The setup program, SETUP.EXE, was put into 
your ALT directory by the installation procedure. Any time you 
wish to make a change to the current ALT configuration simply run 
change to the ALT directory and run "setup". The changes will 
take effect the next time ALT is run. If you make a change with 
the setup program and ALT is currently installed, you must exit 
ALT and rerun it in order to see the effect of the changes made.

                    Running the Setup Program

Go to the DOS prompt
        Type: cd \alt    (or wherever ALT resides on your disk)
        Press: Enter
        Type: setup
        Press: Enter

                           Setup Keys

The following keys are active in the setup program:

        TAB - Move to next field
        ShiftTAB - Move to previous field
        Enter - Move to next field
        Up/Down - Move to field above or below
        CtrlHome - Move to first field in screen
        CtrlEnd - Move to last field in screen
        CtrlEnter - Bring up Exit Options
        F9 - Retrieve Color choices
        F10 - Bring up Exit Options
        ESC - Bring up Abort Options
        Home - Move to start of field
        End - Move to end of field
        Ctrl-X - Clear field

                          Setup Options

To configure ALT you must first choose the Setup screen containing 
the option you wish to configure.  The available screens are:

                          General Setup
                      Address Book Options
                    Editors, Notepad Options
                        Assign Edit Keys
                           Swap Drives
                   Filer, Appointment Options
                    Calc, Menu, Ascii Options
                        Main Menu colors

To select a setup screen use the up and down arrow to highlight 
the desired selection and press ENTER.  Alternatively, press the 
highlighted letter of the desired selection.  After selecting a 
setup screen to modify, use the tab key to move to the desired 
field(s) and make the desired change(s).  To save the newly 
changed setup data:

        Press: F10       (or press Ctrl-ENTER)
        Press:Y

To exit without saving changes:

        Press:ESC
        Press:Y

                         Changing Colors

You can configure the colors used by ALT for the main menu and 
most of the accessories.  This is done by selecting a color field 
from one of the setup screens and entering an attribute number 
from 0 to 127. Upon leaving the field, the chosen attribute is 
shown with a "musical note" character to show how the choice will 
look.  An easy way to select an attribute value is to press F9 
while in an color selection field. A window will appear 
displaying the 128 possible attributes. Use the PgUp, PgDn, Home, 
End and the arrow keys to move the red marker to the desired 
attribute.  Press Enter to select the attribute, or press ESC to 
abort the selection.  For example, to select a green character on 
a blue background:

        Press: F9
        Press: Down
        Press: Right
        Press: Right
        Press: ENTER

Color definitions made in the setup will take effect the next 
time ALT is run; however, you can often see the effect 
immediately by running the standalone version of the modified 
accessory.

                         Editors Options

This screen defines four sets of options, one for each of the four 
ALT editors: the Notepad, Editor, Clipboard and the Macro Editor.

Notepad AutoSave     

Entering 'Y' in this field causes notes to be loaded 
automatically into the Notepad when ALT is run and saved 
automatically when the Notepad is exited with the ESC key.

Colors       

All four editors can be configured separately to give a different 
look to each.

Extra Memory 

This field defines the amount of extra memory to be allocated 
for the editor (does not effect the notepad, etc.). This value determines 
the maximum size of text file that can be edited. The more memory 
allocated to the editor, the greater the size of file that can be 
loaded into the editor's memory.  The size specified is in kilobytes 
of memory and is approximately the size of the file that can be edited.

Custom File  

An editor customization file can be specified for each of the 
four editors.  Enter a valid pathname of a customization file in 
this field.  See section 9.5 for a description of the format of 
editor customization files.

Key Def. File        

Enter the name of an editor key definition file. Always specify 
the drive and full pathname to make certain the editor can find 
it.  Two such files were put in your alt directory at 


                        CONCLUSION

We hope this brief on-line manual helps you to get started with
ALT.  The 200 page manual distributed with the ALT+ (registered) 
version contains complete information on all aspects of using of 
ALT.  Only a few parts of the manual were used to form this 
document in order to conserve disk space.  Please see the file 
PROBLEMS.DOC.  The most commonly asked questions and answers on 
all parts of ALT are included in this file.


SHAREWARE NOTES:  The documentation is based upon the ALT+
(registered) version of ALT.  Only parts of the manual have been 
included here to form this document file. There are few 
differences between the ALT+ version and the ALT SHAREware version.  
Some limitations have placed on the Shareware version, none of 
which should at any time prevent you from experiencing the full 
power of ALT.  The limitations primarily are

        1) Only 2 partitions are available for switching from
        one program to another.  There are 8 partitions available
        in the ALT+ version.

        2) The address book has a limit of 20 names.

        3) The appointment book has a limit of 25 appointments 
        and alarms.

        4) Only the Algebraic calculator is distributed, the 
        Reverse-Polish-Notation (RPN) and the Tape calculator are 
        each shown in screen form.

        5) 500 bytes of keyboard macros.  ALT+ has a maximum limit 
        of 10 Kilobytes.


Orders can be placed through either the Instinct Order Line
(214)-739-5543 or the Instinct Bulletin Board System 
(214)-368-2709 (1200/2400/9600 Baud,8 data bit,1 stop bit,no parity).
ALT+ is available for $49.95 + Shipping/Handling + 8% sales tax if Texas 
Resident. The on-line ordering form can also be accessed by simply 
selecting Info from the ALT Main Menu.  Foreign checks must be 
payable by a U.S. bank.

Include Shipping & handling charges as follows ->  

    48 State Contiguous US                        $3.00
    Alaska, Hawaii, Mexico, Canada,               $6.00
    Europe                                        $8.00
    Other                                        $10.00

 
```
{% endraw %}

## FILE2551.TXT

{% raw %}
```
Disk No: 2551                                                           
Disk Title: ALT                                                         
PC-SIG Version: S2                                                      
                                                                        
Program Title: Alt                                                      
Author Version: 2.0                                                     
Author Registration: $49.95                                             
Special Requirements: Hard drive.                                       
                                                                        
ALT combines the best features of several well-known utility programs   
to do just about everything. ALT is a RAM-resident editor, disk         
manager, calculator, address book, appointment, calendar,               
multitasking                                                            
platform, and more.                                                     
                                                                        
Each of ALT's features is complete -- from the disk manager, with disk  
information and file-tagging capability, to the calculator with more    
functions than most $35 hand-held units. ALT can record keyboard        
macros to save common keystrokes. There is even a cut-and-paste         
feature to copy blocks of text from one program to another.             
                                                                        
ALT's multitasking platform swaps programs in and out of memory,        
letting you work on a spreadsheet and write a business letter at the    
same time. This, combined with the cut-paste function, makes it worth   
any price.                                                              
                                                                        
Rounding out ALT's functionality is a command menu for running commonly 
called programs. This menu can have submenus and each program           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #2551  ALT  >>>>                     ║
║                       Disk 2 of 2 (also #1189)                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To begin procedures, insert Disk 1 and type:  GO  (press Enter)        ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2551

     Volume in drive A has no label
     Directory of A:\

    ALT2     ZIP    316818   9-30-90   7:09a
    KEYSWAP  ACC        90  10-09-90   8:09a
    GO       BAT        43   1-01-80   3:08a
    GO       TXT       771   1-31-91  12:46a
    FILE2551 TXT      2517   1-21-91   9:07a
            5 file(s)     320239 bytes
                           38912 bytes free
