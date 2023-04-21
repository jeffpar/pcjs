---
layout: page
title: "PC-SIG Diskette Library (Disk #4046)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4046/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4046"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MENUBAR.TXT

{% raw %}
```


                     MENUBAR Toolbar Program

                          Users Manual 
                Release  1.1 (Shareware Version)
 
                          May 10, 1992
                       Copyright (c) 1992 

                              by  
                              MRL 
  
                        1200 Stonehurst 
                   Huntsville, Alabama 35801  
                                 
                       All Rights Reserved

This file provides the information needed to utilize the shareware
distribution version of the MENUBAR program. MENUBAR is a
copyrighted product of MRL and all rights are reserved. Any and all
usage must be in accordance with terms discussed in Section III of
this documentation. No usage other than for evaluation is permitted
without registration. User feedback including comments/questions
is welcome. Please address your comments to MRL via Compuserve
electronic mail at user id [73637,737] or via mail to 1200
Stonehurst, Huntsville, AL., 35801. 
                  Restrictions and Warranties 
 
The software described herein is furnished under a license
agreement. The software may be used or copied only in accordance
with the terms of the applicable agreement. The purchaser may make
one copy of the software for backup purposes. Unregistered copies
of MENUBAR are for evaluation purposes only, and may be distributed
through normal shareware channels.  Please distribute these
evaluation copies to other bulletin boards and users. MENUBAR may
be uploaded to and downloaded from commercial systems such as
CompuServe, the Source, and BIX, as long as there is no charge for
the product itself.  Those copying, sharing, and/or electronically
transmitting this product are required not to delete or modify the
copyright notice and restrictive notices from the program or
documentation. Any distribution of MENUBAR must include all files
contained in the packed format. Commercial vendors and distributors
of "public domain" or user-supported software libraries may
distribute copies of MENUBAR unless notified by MRL to cease such
distribution of the product. Only nominal fees associated with
copying and handling (not to exceed $5 US) may be charged by anyone
providing unregistered copies. MENUBAR may not be utilized or
distributed as a promotion for any commercial venture. 
 
Information in this document is subject to change without notice
and does not represent a commitment on the part of MRL. 
 
To use MENUBAR, you need the following: 
  
          IBM PC (or compatible)-286 with 1 Mbyte. 
 
          Microsoft Windows (version 3.1 or later)  
  
		MS-DOS/PC-DOS (version 3.0 or a later version as required 
          by your version of Microsoft Windows)  
  
Use of this product for over 30 days constitutes your 
acceptance of this agreement and subjects you to its contents.   

  
EXCEPT AS PROVIDED IN PART III OF THIS MANUAL, MRL DISCLAIMS ALL 
WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED
TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE, WITH RESPECT TO THE PRODUCT. SHOULD THE PROGRAM
PROVE DEFECTIVE, THE PURCHASER ASSUMES THE RISK OF PAYING THE
ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION AND
ANY INCIDENTAL OR CONSEQUENTIAL DAMAGES.  IN NO EVENT WILL MRL BE
LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING WITHOUT LIMITATION
DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS
OF BUSINESS INFORMATION AND THE LIKE) ARISING OUT OF THE USE OR THE
INABILITY TO USE THIS PRODUCT. 



                           I. CONCEPT

MENUBAR may be utilized with Microsoft Windows to customize the
user environment by addition of menubars (or toolbars) that specify
a user selected icon/bitmap or text and associate this with
executable programs. MENUBAR provides a capability to define
toolbar controls that augment existing execution methods or create
a complete desktop environment based on the users own preferences. 




              II. Installation/Execution of MENUBAR

This section describes the various options relative to installing
MENUBAR as well the command line functions. Installation (Section
1.0) describes the initial setup process to configure MENUBAR
either as a user program or a program manager replacement shell.
The command line options(Section 2.0) describe the process for
creation, execution and editing of menubars. Detailed dialogue
options (Section 3.0) for creation and editing of menubars are
described, with the additional sections describing font selection
options (Section 4.0) and mouse/key usage (Section 5.0).

1.0 Installation Options

MENUBAR may be installed as a normal program or as a replacement
for program manager.

1.1 Normal Installation

Normal installation is accomplished by dearchiving the disk
contents into a DOS directory. The Directory should be added to
the default path if execution is to be done from other directories.
The directory will contain the MENUBAR program (menubar.exe),
sample menubars (*.mbr), and sample icons (*.ico) as well as
documentation files.

1.2 Program Manager Shell Replacement Option.

MENUBAR may be utilized as a replacement for the Windows Program
Manager if desired. This requires editing of the Windows
"system.ini" file. Be sure to create a backup of this file before
changing any portions of it. Edit it to replace the "shell="
parameter within the [boot] section. The recommend changes are:

	1)	Change the existing "shell=" line to "shellold="
	2)	Add a line of the form "shell=menubar.exe" (Note: Specify
          the full filename of the MENUBAR directory if the
          directory is not in the default path)
This will initiate Windows execution using the MENUBAR program as
shell and a default menubar-MAIN.MBR. A default is provided, which
may be edited or replaced. Removing MENUBAR as the Windows shell
can be accomplished by changing the shellold= and the shell= lines.

CAUTION: Terminating the shell menubar (main.mbr) will terminate
all programs immediately. Insure that updates have been saved prior
to termination.

1.3 Additional Program Shell Options

When using MENUBAR as a program shell, the user may specify other
actions including starting multiple menubars, running or loading
programs. These options are accomplished by specifications in the
menubar initialization file. This file (menubar.ini) must be
located in the Windows directory. It can be created with any edit
program that stores standard text. The file must contain [menubar]
as the first line and any of the following entries as the remaining
lines.

1.3.1 File

The "FILE=xxx" line allows for changing the default menubar file
(main.mbr). "xxx" is the new menubar file.

1.3.2 Menubars

The "MENUBARS=xxx" line specifies additional menubars to
initialize. Multiple menubar file names may be specified separated
by a semicolon(;). For example, the line:

			"menubars=appl1;appl2;time" 

will execute the specified menubars.

1.3.3 Run

The "RUN=xxx" line specifies DOS programs to be executed. Multiple
program file names (and parameters) may be specified separated by
a semicolon(;). For example,the line:

"run=notepad.exe read.me;clock.exe"

will execute the specified programs, displaying the clock and
read.me files.

1.3.4 Load

The "LOAD=xxx" line specifies MSDOS programs to be executed and
displayed in a minimized state. Multiple program file names (and
parameters) may be specified separated by a semicolon(;). For
example, the line:
 "load=winfile" 
will execute the Windows file manager displayed as an icon.

2.0 MENUBAR Command line options

This section discusses the options available by specification of
command line parameters upon execution of the MENUBAR program. 

2.1 Execution of an existing menubar definition.

The user may execute an existing menubar definition by providing
the definition name as the first parameter of the command line.
Note that each menubar definition is stored as a separate DOS file.
The command to execute an existing definition is "MENUBAR xxx",
where "xxx" is the menubar definition name. "xxx" must conform to
the filename portion of the DOS naming conventions. 
If the user does not specify the DOS filename extension, MENUBAR
utilizes the extension ".mbr". 

2.2 Creating a new menu definition.

The user creates a new definition file by entering the MENUBAR
command without any parameters. A Message Box will confirm that
this was the intended action, and a data dialogue will be provided
for entry of the definition name. The detailed definition dialogues
(see Section 3.0) are displayed for specification of the
characteristics.

2.3. Editing an existing definition

The user may edit an existing definition by specifying the "-E"
parameter followed by the definition name. For example,
"MENUBAR -E  menu1" would edit the menu1.mbr file in the current
directory. The detailed dialogues (see section 3.0) are displayed
to allow for changing the current characteristics.

3.0 Detailed dialogues

This Section describes dialogues for definition of the menubar. The
Menubar dialogue provides for specification of all parameters and
selection of individual command sets. The Command Set dialogue
allows for specification of the bitmap/icon file, the command,
associated parameters, and text. The File Open dialogue allows for
selection of a file via browsing.

3.1 Menubar dialogue

The fields on this dialogue allow for definition of a menubar. They
include window position, size, title bar and execution options.
Individual commands activate the command set dialogue to operate
on command sets. The following represent logical groups of dialogue
entries.

3.1.1 Command Set

The Command Set list box displays the currently defined command
sets. Each set is described in terms of the bitmap/icon file name,
followed by the command file and parameters, and any text.
Individual actions against command sets are shown at the bottom of
the list box and discussed below.

3.1.1.1 ADD command

The ADD button activates the command set dialogue to create a new
command entry following the currently selected entry in the list
box.

3.1.1.2 MODIFY command

The MODIFY button activates the command set dialogue to modify the
currently selected entry in the list box.

3.1.1.3 DELETE command

The DELETE button deletes the currently selected entry in the list
box.

3.1.2 Caption

The CAPTION edit box allows for entry of text to be placed at the
top of the menubar as a caption. This creates a title bar for the
MENUBAR window.

3.1.3 Menubar Characteristics

This section defines the menubar window level parameters.

3.1.3.1 Row

Entry to the ROW edit box is the row location in pixels of the
upper left hand corner of the menubar.

3.1.3.2 Column

Entry to the COLUMN edit box is the column location in pixels of
the upper left hand corner of the menubar.

3.1.3.3 Number of boxes per rows

The boxes per row edit box is the number of command boxes to place
on each row. This is a required field. A scroll bar is created when
the number of commands exceed the number of command boxes (rows
times columns).

3.1.3.4 Number of boxes per columns

The boxes per column edit box is the number of command boxes to
place on each column. This is a required field. A scroll bar is
created when the number of commands exceed the number of command
boxes (rows times columns).

3.1.3.5 Border

Selection of the BORDER button specifies that the menubar has a
border.

3.1.3.6 Maximize Box

Selection of the Maximize Box button creates a maximize box as part
of the title bar. This creates a title bar for the MENUBAR window.

3.1.3.7 Minimize Box

Selection of the Minimize Box button creates a minimize box as part
of the title bar. This creates a title bar for the MENUBAR window.


3.1.3.8 Reverse Scrollbar

Selection of the Reverse Scrollbar button reverses the type of
scroll bar (horizontal or vertical) generated when the number of
command sets exceeds the number of boxes.

3.1.3.7 System Menu

Selection of the System Menu button creates a system menu as part
of the title bar. This creates a title bar for the MENUBAR window.


3.1.3.8 Iconic

Selection of the ICONIC button minimizes the menubar upon
execution.

3.1.4 Box Characteristics

This set of characteristics describes the individual command boxes.

3.1.4.1 Height

Entry to the HEIGHT edit box is the height in pixels of each
command box. Bitmaps are sized within this box. Icons are truncated
if the size is insufficient. The default for this field is 32.

3.1.4.2 Width

The WIDTH edit box is the width in pixels of each command set box.
Bitmaps are sized within this box. Icons are truncated if the size
is insufficient. The default for this field is 32.

3.1.4.3 Border

The BORDER edit box is the width in pixels of the border around the
bitmap/icon in each command set box. Text from the command box may
extend into this area.
 
3.1.4.4 Double Click

Selection of the Double Click button requires the user to double
click to execute the commands. A single click then may be utilized
to select the command. This reduces the possibility of
inadvertently executing a command.

3.1.4.5 Shading

The SHADING set of group boxes allows for selection of command box
visual effects. The default for this option is NORMAL shading. The
user may select additional options for RECESSED or 3-D effects. The
recessed option slightly reduces the text display area.

3.1.5 Action After Command

The ACTION set of group boxes allow for selection of an action to
be taken when the user executes a command. No action is required,
but options allow for minimizing the menubar or termination of the
MENUBAR program.
 
3.1.6 Program Termination Commands

The following commands provide for terminating MENUBAR in edit or
create mode.

3.1.6.1 CANCEL command

The CANCEL button exits the edit/create processing without changing
the definition.

3.1.6.2 OK command

The OK button exits the edit/create processing after changing the
definition.

3.2 Command Set dialogue

The Command Set dialogue contains fields to modify/create an
individual command set consisting of a bitmap/icon file, a command
file, set of parameters and optional text. Select buttons are
provided to utilize the Windows standard file open dialogues for
selecting the files. Each command set is displayed within an
individual command box.

3.2.1 Bitmap/Icon file

Entry to the BITMAP/ICON edit box specifies the graphic file name
to be displayed as the graphic within the command box. This may be
standard Windows icon (.ICO) or bitmap (.BMP) files. The BROWSE
button may be utilized to display the file selection dialogue for
specifying the filename. This field is optional.

3.2.2 Command 

Entry to the COMMAND edit box specifies the program (or MENUBAR
function) to be executed by selection of the command box. This may
be any executable file that may be run under Windows. The BROWSE
button may be utilized to display the file selection dialogue for
specifying the filename. This field is required. 

Usage of additional MENUBAR features allow for selection of
predefined actions. These actions are specified by entry of "$xxx"
in this field and results in processing as described in the
following sections.

3.2.2.1 EXIT

The $EXIT option terminates the MENUBAR program upon execution.

3.2.2.2 LOAD

The $LOAD option allows for specification of one or more programs
to be run upon execution. Individual programs are separated by a
semicolon (;) and parameters are allowed. Each program is executed
displayed as an icon.

3.2.2.3 MENUBARS

The $menubars option allows for specification of one or more
menubars to be loaded upon execution. Menubars are separated by a
semicolon (;) character.

3.2.2.4 PROGRAMS

The $PROGRAMS option allows for specification of one or more
programs to be run upon execution. Programs are separated by a
semicolon (;) character and may contain parameters.

3.2.2.5 RUN

The $RUN option allows for execution of any program from a file
selection dialogue displayed upon execution. Parameters may be
specified by the parameter entry.

3.2.2.6 WEXIT

The $WEXIT option terminates Windows upon execution. The user
should insure all work is saved prior to executing this command.

3.2.3 Parameters

Entry to the PARAMETERS edit box is for specification of the
parameters associated with the command to be executed.
Specification of a "$" as the first character of the parameter
allows the user to input the value upon execution. Characters
following the "$" are displayed to the user before input.

3.2.4 Text

The TEXT edit box identifies a text string for display. The field
is optional. Usage of additional MENUBAR features allows for
selection of predefined menubars. These menubars are specified by
entry of "$xxx" in this field and results in display of a menubar
as described in the following sections.

3.2.4.1 DATE

The $DATE option displays a command box containing the current date
in a MM:DD YYYY (month,day,year) format.

3.2.4.1 TIME

The $TIME option displays a command box containing the current time
in a HH:MM:SS (hours,minutes,seconds) format. 

3.2.4.2 TIME1
The $TIME1 option displays a command box containing the current
time in a HH:MM (hours,minutes) format. 

3.2.5 Browse

The BROWSE button is utilized to display the file selection
dialogue for specifying a filename.

3.3 File Select Dialogue

The File Select dialogue allows for selection of a file by browsing
through directories and/or specified portions of the filename. A
set of default extensions is provided for each type of file.

4.0 Font Options

MENUBAR attempts to select a small font that is readable at
multiple screen resolutions. The user may override this default
font to generate unique settings for his monitor and usage. The
parameters "fontheight", "fontwidth" and "fontfacename" (font
height, width and facename) are provided to change the font
characteristics. To determine the available font options on your
system, run the Windows Control program and select fonts. To change
the default values, create (or update) the MENUBAR initialization
file (menubar.ini) in the default Windows directory. The first line
of the file should be [menubar] with the remaining lines of the
form "xxx=dddd", where "xxx" is one of the parameters and "yyy" is
the value. 

5.0 Mouse/key Usage

If a title bar exists, the mouse may be utilized to execute system
menu commands, minimize or maximize the menubar window, temporarily
reposition the menubar, or close the menubar.

Regardless of whether a title bar is present, the following mouse
actions are supported. When the mouse (left button) is clicked one
of the following occurs:

	1)	Clicking a command box either selects the command or
          executes the command depending on whether the double-
          click parameter is set for the menubar. 

	2)	Clicking the menubar border (not title bar) or clicking
          with the SHIFT key depressed closes the menubar. 

	3)	Clicking with the CONTROL key depressed minimizes the
          menubar. If the bar is minimized, a double click restores
          it to the original position.

Dragging with the mouse accomplishes two functions:

	1)	Dragging with the shift key depressed from within the
          menubar window will position the menubar to the release
          point. The user will be prompted to save the file upon
          MENUBAR termination. Note that menubars with title bars
          may be moved by dragging the title bar, however the save
          prompt will not be displayed.

	2) 	Execution of a program can be accomplished by dragging
          a file from the file manager and dropping it on a command
          box. The file is a parameter to the program.

If the number of command sets exceeds the number of display boxes,
a scroll bar is displayed that utilizes the mouse to position the
display.

Alternately, the keyboard may be utilized for selection and
execution of commands. The ARROW keys are utilized to select
individual command sets. Entry of a SPACEBAR or ENTER key executes
the selected command. The ESCAPE key terminates MENUBAR.

             III. REGISTRATION AND LICENSE FEES 
  
MENUBAR must be registered if utilized for other than 
evaluation purposes for a period not to exceed thirty (30) days.
A separate copy is required for each PC utilized. The file
menubar.frm provides a sample form to be printed and included with
payment or send your name, company, and address to MRL, 1200
Stonehurst Drive, Huntsville, Al, 35801. Registration using VISA/MC
may also be accomplished by transmitting this form using Compuserve
electronic mail to MRL at user id [73637,737].

Registration provides you with a version that includes the
following:

	-	No startup messages

  	-	Hardcopy users documentation

	-	90 day free consultation support

	-	Mailing list distribution of upgrades and new products

1.  Registration Costs  
  
Current rates for prepaid orders (in US dollars) are as follows: 
  
$24.95	Single user registration/license fee.

$1.00	Additional cost for 3.5 disk.

$5.00     Per Order Shipping and Handling fee.

$10.00	Purchase Order Handling (under $100.). Subject to company
          approval.

Residents of Alabama and the city of Huntsville must add
appropriate Sales Tax.   

The scheduled rates and charges are current as of the date of 
this manual.  All fees and charges are subject to change without
notice.  
  
Multiple Purchase registrations are available pursuant to the
following schedules.  

Total Copies Registered (on one order)   Percent Discount 
            ------------                  ------------  
             1 to    5                             0% 
 
             6 to    9                            15% 
  
            10 to   99                            30% 
   
           100 to  499                            40% 
           
           500 to  999                            50% 
 
          1000 or more                            60% 

Site licenses that allow for usage at a single physical address
with authorization to reproduce disks/documentation are available
for 50% of the maximum above cost for each range. For example, a
site license for 99 users or less would be $865.26 (24.95 less 30
percent) less 50 percent. Minimum number of users for a site
license is nine ($95.49). For over 1000 users, price is determined
by total number of users at the site. 

As stated herein, there are no warranties whatsoever associated 
with the MENUBAR software product, and MRL is not responsible for
its performance. You are the sole judge of the product's
effectiveness and suitability for your particular purposes, and are
given an opportunity to evaluate same via shareware distribution. 

We can only accept drafts, checks, international money orders or
travelers checks payable in U. S. dollars drawn on U.S. banks. 
Registration can also be paid by credit card, Visa or Master Card. 

Registered users will be notified when updates and new products 
are  available.  Anyone wishing to offer advice and suggestions 
is most welcome to do so.  
 
Questions, errors, and suggestions for product improvements are 
welcome, either mail these to MRL, 1200 Stonehurst Drive, 
Huntsville, AL, 35801 or transmit them via Compuserve electronic
mail to MRL at User id 73637,737. 

Compuserve electronic mail is the quickest method of receiving a
response. Be sure to include: 
  
-	The version of the copy of MENUBAR that you are using. 
-	DOS and Windows versions that you are using;  
-	hardware configuration (model, memory size, printer, etc.) 
-	Windows or standard DOS applications that you may be running
     or have loaded under Windows at the same time.  
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4046

     Volume in drive A has no label
     Directory of A:\

    MENUBAR  EXE     60928   5-11-92   5:30p
    MENUBAR  FRM      1669   4-19-92   2:42p
    CALC     ICO       766   4-18-92   3:15a
    CALENDER ICO       766   2-17-92   4:39p
    CARDFILE ICO       639   2-17-92   8:10a
    CLIPBRD  ICO       766   2-17-92   4:40p
    CLOCK    ICO       639   2-17-92   8:09a
    CONTROL  ICO       766   3-24-92   4:56a
    DOS      ICO       766   3-23-92   3:06p
    MENUBAR  ICO       766   2-16-92   7:38a
    MOUSE    ICO       639   2-17-92   8:12a
    NOTEPAD  ICO       766   3-21-92   7:25a
    PBRUSH   ICO       766   3-20-92   5:50p
    PIFEDIT  ICO       766   2-17-92   4:44p
    PRINTMAN ICO       766   2-17-92   4:45p
    README   ICO       766   2-23-92   8:38a
    RECORDER ICO       766   2-17-92   4:45p
    REVERSI  ICO       639   2-17-92   8:16a
    SETUP    ICO       766   3-21-92   6:45a
    SOL      ICO       639   2-17-92   8:16a
    STOP     ICO       766   3-23-92   3:26p
    SUB1     ICO       766   2-23-92   8:30a
    SUB2     ICO       766   2-23-92   8:32a
    SUB3     ICO       766   2-23-92   8:35a
    TERMINAL ICO       766   2-17-92   4:46p
    UMAN     ICO       766   2-23-92   8:40a
    WINFILE  ICO       766   2-17-92   4:46p
    WINHELP  ICO       766   2-17-92   4:47p
    WRITE    ICO       766   2-17-92   4:47p
    SUB1     MBR       208   2-23-92   8:12a
    SUB2     MBR       378   2-23-92   7:56a
    SUB3     MBR        98   2-23-92   8:15a
    SUB4     MBR       116   2-23-92   8:49a
    TEST     MBR      1014   4-29-92   5:25a
    TEST1    MBR       243   4-25-92   7:21p
    READ     ME       4459   5-12-92   1:45a
    MENUBAR  TXT     24331   5-10-92  12:44p
    BITMAP1  MBR       357   4-27-92   7:33p
    EDIT1    MBR       577   5-03-92   6:33a
    MASTER   MBR       409   5-03-92   6:14a
    TIME     MBR        81   5-02-92   6:41a
    FILE1    MBR        98   5-04-92   6:38p
    APP1     MBR       420   4-29-92   7:09p
    EDIT2    MBR       471   5-03-92   6:31a
    APP2     MBR       607   5-09-92   6:09p
    HELP     MBR       608   5-05-92   8:26p
    MENUBAR  MBR       621   4-30-92   7:15p
    PROGMAN  ICO       639   2-17-92   8:14a
    BLANK    ICO       766  12-30-91   3:18a
    NOTEPADS ICO       766   4-16-92   9:13a
    NOTEPADW ICO       766   4-16-92  10:23a
    MAIN     MBR       452   5-02-92   9:22a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1155   9-09-93  10:06a
           54 file(s)     122315 bytes
                           23040 bytes free
