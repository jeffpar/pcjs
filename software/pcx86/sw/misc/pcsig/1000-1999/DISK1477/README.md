---
layout: page
title: "PC-SIG Diskette Library (Disk #1477)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1477/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1477"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "QIP  1 OF 4  (ALSO 1478, 1479, 1480)"

    QIP is first and foremost a wordprocessor.  If you are accustomed to
    using wordprocessors and text editors, you will find all the commands
    found in a good wordprocessor, such as marking and copying blocks,
    search and replace, etc.  A few more pleasant surprises lie in wait for
    you in the form of features such as effects. Effects gives you easy and
    flexible control of both display colors and printout fonts.
    
    QIP is also a table processor.  Create tables, graphs or lists, large
    and small, anywhere in your document.  These tables, graphs, or lists
    are managed along with your text to help you produce attractive reports,
    or to create large databases.  More than that, QIP provides many
    powerful table processing functions, ranging from the simple extract and
    sort commands, to the enormously versatile update and calculation
    commands.
    
    When you first start to use QIP, you'll probably view it as a
    wordprocessor, and experiment with its on-screen formatting, line
    drawing, color-processing, on-line help system, and printer control
    capabilities. As you start to work with tables, adding simple lists or
    charts to your reports, you'll see how all your data can be smoothly
    collated and updated.  Before very long, you'll be using the more
    powerful table processing features to generate sales summaries,
    prepare work schedules, create form letters, or update stock lists.
    Ultimately, QIP may become your best tool for the most critical task
    of all -- turning volumes of raw data into that essential element of
    modern life -- useful information.
    File Descriptions:
    
    First Disk:
    
    MANUAL   TXT  Full documentation.
    QSETUP   TXT  Setup information.
    
    Second Disk:
    
    QIP      ZIP  Main program in an archived format.
    
    Third Disk:
    
    PRINTERS TXT  Listing of printers supported by QIP.
    QPROG    V01  Contains QPL programs and macros.
    QPRTDEFS V01  Contains printer definitions.
    TEMPLATE      Function key template.
    
    Fourth Disk:
    
    PKUNZIP  EXE  Unarchiving utility.
    QSYSTEM  V01  Contains system.
    SUPPORT       Support information.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1477.TXT

{% raw %}
```
Disk No: 1477
Disk Title: QIP #1 (1478-1479-1480)
PC-SIG Version: 1.1

Program Title: QIP - The Quick Information Processor
Author Version: 1.1
Author Registration: None stated.
Special Requirements: 500K free memory, hard disk drive.  286 or faster

QIP is first and foremost a wordprocessor.  If you are accustomed to
using wordprocessors and text editors, you will find all the commands
found in a good wordprocessor, such as marking and copying blocks,
search and replace, etc.  A few more pleasant surprises lie in wait for
you in the form of features such as effects. Effects gives you easy and
flexible control of both display colors and printout fonts.

QIP is also a table processor.  Create tables, graphs or lists, large
and small, anywhere in your document.  These tables, graphs, or lists
are managed along with your text to help you produce attractive reports,
or to create large databases.  More than that, QIP provides many
powerful table processing functions, ranging from the simple extract and
sort commands, to the enormously versatile update and calculation
commands.

When you first start to use QIP, you'll probably view it as a
wordprocessor, and experiment with its on-screen formatting, line
drawing, color-processing, on-line help system, and printer control
capabilities. As you start to work with tables, adding simple lists or
charts to your reports, you'll see how all your data can be smoothly
collated and updated.  Before very long, you'll be using the more
powerful table processing features to generate sales summaries,
prepare work schedules, create form letters, or update stock lists.
Ultimately, QIP may become your best tool for the most critical task
of all -- turning volumes of raw data into that essential element of
modern life -- useful information.
File Descriptions:

First Disk:

MANUAL   TXT  Full documentation.
QSETUP   TXT  Setup information.

Second Disk:

QIP      ZIP  Main program in an archived format.

Third Disk:

PRINTERS TXT  Listing of printers supported by QIP.
QPROG    V01  Contains QPL programs and macros.
QPRTDEFS V01  Contains printer definitions.
TEMPLATE      Function key template.

Fourth Disk:

PKUNZIP  EXE  Unarchiving utility.
QSYSTEM  V01  Contains system.
SUPPORT       Support information.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```

       ╔═══════════════════════════════════════════════════════╗
       ║              >>>> Disk #1477  QIP <<<<                ║
       ╟───────────────────────────────────────────────────────╢
       ║                                                       ║
       ║       To install program to hard drive type:          ║
       ║                    INSTALL C                          ║
       ║                                                       ║
       ║          To print out documentation type:             ║
       ║               COPY MANUAL.TXT PRN                     ║
       ║                                                       ║
       ╚═══════════════════════════════════════════════════════╝

```
{% endraw %}

## MANUAL.TXT

{% raw %}
```
  



                   T A B L E  O F   C O N T E N T S


1.0  Introduction
-----------------
    1.1  How to use this manual ..................................   1
    1.2  The QIP Information Processor ...........................   2
    1.3  Getting Started .........................................   3
    1.3  Loading Files  ..........................................   3
    1.3  Getting Help ............................................   4

2.0  Overview of QIP Concepts
-----------------------------
    2.1  The QIP Screen ..........................................   6
    2.2  System Windows ..........................................   6
    2.3  Keyboard handling, Function keys and Editing.............  10
    2.4  Mouse Handling ..........................................  18
    2.5  QIP Files ...............................................  19
    2.6  Text and Table Modes ....................................  20
    2.7  QIP Buffers .............................................  21
    2.8  Specifying Data Positions and Ranges ....................  22
    2.9  QIP Expressions .........................................  25

3.0  Command Descriptions
-------------------------
    3.1  Access Menu .............................................  27
    3.2  Block Menu ..............................................  32
    3.3  Column Menu .............................................  34
    3.4  Effects Menu ............................................  38
    3.5  File Menu ...............................................  40
    3.6  Layout Menu .............................................  44
    3.7  Output Menu .............................................  47
    3.8  Process Menu ............................................  54
    3.9  Row Menu ................................................  58
    3.10 Search Menu .............................................  61
    3.11 Table Menu ..............................................  64

Appendices
----------
    QPL and Macro programming ....................................  68
    Built-in Functions and System Variables ......................  85
    Error Codes and Messages .....................................  94
    QSETUP Utility ...............................................  98
    QIP sizes and Limits ......................................... 107

Index ............................................................ 
  
                              Page --1-- 
 
                       1. I N T R O D U C T I O N


1.1  HOW TO USE THIS MANUAL 
---------------------------
If you have not yet printed this manual, please TYPE or PRINT the file called 
README for information on how to do so.  You may prefer to browse through the
MANUAL.QIP file before printing anything, in which case simply press <PgDn> 
when you have read each screen of text (this assumes that you are already 
looking at this file from within QIP).  When you have finished, exit QIP using
<Alt>F (File) followed by Q (Quit) followed by N (No, don't save changes).

The QIP Reference Manual is organized into four sections, plus an index and 
several appendices.  Before you start using QIP, we strongly recommend that 
you read the Introduction and Overview (sections 1 and 2).  These will give 
you a general idea of just what QIP is, how it organizes and manages your 
data, and how to use it.

Section 3 is an alphabetically-ordered description of all the menus in QIP.
You should skim this section initially, then dip into it whenever you need 
more information concerning a particular menu or menu option.

Section 4 is devoted to the QIP Programming Language (QPL).  Those who wish to
program (or automate) their own text- and data-processing applications will 
probably make heavy use of this section.  However, many people will not need 
to refer to Section 4 at all.

Of the appendices, those covering the QSETUP utility and Calculation functions
are likely to be of the greatest immediate use.  Also in the appendices are 
details of how to get support, and Feedback forms so you can send us your 
suggestions for improving QIP.  We strongly encourage you to use these forms 
to let us know of any problems, limitations or discrepancies you find, whether
in this manual or in QIP itself.

QIP has a 'context-sensitive' cross-referenced HELP system, available at any 
time by pressing the <F1> key.  This means that, in practice, you may not need
to refer to the manual very much at all.  However, we still think you will 
pick up QIP more quickly if you begin by reading Sections 1 and 2 as suggested
above.

We thank you for taking an interest in QIP, and wish you every success in 
applying it to your daily needs.

Overseas Development Group,
SORD Computer Corporation.

Administrative Notes
--------------------
The contents of this manual may change without prior notice.

SORD Computer Corporation assumes no responsibility for any consequences
which may arise from the use of QIP or this manual, or for any errors it 
may contain.

QIP is a trademark of SORD Computer Corporation.
  
                              Page --2-- 
 
1.2  QIP  (INFORMATION PROCESSOR)
---------------------------------
Before you launch into the Overview in Section 2, it will help to get an idea
of what QIP was designed to do, and how to get the most out of it your 
purposes.

QIP is first and foremost a Text Processor.  If you are accustomed to using 
Word Processors and Text Editors already, you will find it easy to use QIP for
the same kind of tasks.  A few pleasant surprises lie in wait for you in the 
form of features such as Effects, which give you easy and flexible control of
both display colors and printout fonts.

QIP is also a Table Processor.  This means it allows you to create tables, 
graphs or lists, both small and large, anywhere in your document.  These are 
managed along with your text to help you produce attractive reports, or to 
create large databases.  More than that, QIP provides many powerful Table 
Processing functions, ranging from the simple Subtotal and Sort commands, to
the enormously versatile Update and Calculation commands.

QIP is an Information Processor.  By closely combining the functions of Word
Processor and Table Processor, it provides you with one, consistent environ-
ment in which you can enter, process and produce reports from raw data.

This differs significantly from 'Integrated Software' packages which are 
generally a loose connection of two or three independent systems, each 
managing your data in their own way.  With QIP, there is only one consistent
system, and one storage place for your data.  This makes QIP easy to learn 
and quick to apply, avoiding the complexity and mistakes that can arise from
using several independent systems.

When you first start to use QIP, you'll probably view it as a Word Processor,
and experiment with its on-screen formatting, line drawing, color-processing
and printer control capabilities.  As you start to work with tables, adding
simple lists or charts to your reports, you'll see how all your data can be
smoothly collated and updated.

Before very long, you'll be using the more powerful Table Processing features
to generate sales summaries, prepare work schedules, create form letters or 
update stock lists.  Ultimately QIP may become your best tool for the most 
critical task of all -- turning volumes of raw data into that essential 
element of modern life -- useful information.
  
                              Page --3-- 
 
1.3  GETTING STARTED
--------------------
This section assumes that you have successfully installed QIP in accordance 
with the notes in the file called README.  The QIP executable files must
either be in the current directory, or accessible through the defintion of 
the QIP environment variable, or by means of the DOS "PATH" variable.

QIP requires DOS 3.1 or above, and about 1 megabyte of disk space.  Also,
QIP is a large program, and while it will run in 512K, we strongly recommend
at least 640K.  The most noticeable effect of limited memory will be the
inability to execute some commands in the DOS shell.

You may also need to modify your CONFIG.SYS file to ensure that the following
minimums are met.  Remember to reboot if you do change your CONFIG.SYS

  FILES=20
  BUFFERS=8


1.4  LOADING QIP DATA FILES
---------------------------

If you type QIP filename, (e.g. QIP MYFILE) where there is a QIP format file 
in the current directory called "filename", QIP will load it for editing. If 
there is no file of that name, QIP will immediately create a new file named 
"filename" (with a .QIP extension if you didn't specify one explicitly) for 
you to edit (e.g. MYFILE.QIP).


1.4.1  LOADING ASCII TEXT FILES
-------------------------------
If, in the above instance, there is a text file (non QIP format file) called
"filename", QIP will automatically create "filename.qip" containing the same 
data, and load it ready for you to edit.  The original file will be unaltered.

Note:  The Import option on the File menu (section 3.5.6) provides another 
       way to read ASCII and Wordstar(tm) files into a QIP document.


1.4.2  LOADING QIP (NO DATA FILE)
---------------------------------
If you simply type QIP, the last file edited will automatically be loaded. 
QIP can, optionally, "remember" the name of the last file edited (this can
be activated or deactivated with the QSETUP utility, see Appendix D).  If it 
is disabled, QIP will create a new file named "UNTITLED" (you may want to 
change this name with the File menu "Write as" option, see section 3.5.6).

When a file has been loaded into memory, QIP will display the standard QIP 
screen, described in the following sections.

1.4.3  LOAD ERRORS
------------------
Each time QIP is loaded, it performs a series of startup self-tests.  If for 
some reason you get an error when QIP is loading, you should get a new copy 
of the QIP system file "QSYSTEM.V01" from the original distribution disk (you
may also want to run QSETUP to set any configuration paramters you may have 
changed).  If this does not fix the problem, support is available to 
registered users (see the "SUPPORT" file on the distribuiton disk for more
details).
  
                              Page --4-- 
 
1.5  QIP HELP
-------------
Qip's help system is both context-sensitive and cross-referenced.  It is 
accessed with the <F1> key, and controlled with the cursor movement keys, 
<Enter>, <PgUp>, <PgDn>, <F1>, <Shift><F1>, and <Esc> keys.  The Help system 
can also be navigated easily with a mouse.

QIP help is context and mode sensitive.  If you press <F1> during Text or 
Table editing, you will automatically be given help on the appropriate mode.
When you press <F1> from within any prompt or menu you will be presented with
a help screen pertaining to the current subject.

At the bottom of each HELP screen is a list of the available keys.  Pressing 
<F1> at any time will bring you back to the main HELP menu.  This is a list 
of all the principal HELP topics.  Pressing <Shift><F1> will return you to 
the top-most menu related to the current topic.  Hitting <Esc> at any time 
will exit the HELP system and return you to where you left off in QIP.

Many topics use a series of related HELP screens.  The <PgUp> and <PgDn> keys 
are used to move "UP" and "DOWN" through the screens.  If there is no previous 
screen then only <PgDn> will be available, when there are no further HELP 
screens only <PgUp> will be displayed at the bottom of the screen.

On most HELP screens certain keywords or phrases will be highlighted.  If the
cursor is moved to one of these areas and you press <F10>, <Enter>, or 
"click"it with the mouse, a help screen related to that key phrase will be 
displayed.

This cross-referencing feature combined with context-sensitivity and a
hierarchical menu system is designed to provide relevant help with the 
minimum amount of keystrokes.
  
                              Page --5-- 
 
                   2. O V E R V I E W  O F  Q I P

This section provides an introduction to several important aspects of QIP - 
how it organizes your data, its use of the screen, keyboard and mouse, 
different editing modes, and much more. If you read this first, you will find
it easy to "dip into" the Menu-by-Menu documentation in Section 3 when you 
need to check how to perform a particular operation.

Below are two diagrams showing the way QIP organizes and divides your data.
Several of the key words introduced here will be used and explained throughout
the remainder of the section.

BUFFER ------+ DOCUMENT  - Contains the particular file you are editing
 A work area |
 in memory   + WORK AREA - Temporary storage for data generated during editing
             |
             + PROGRAM   - Holds QPL (QIP Program Language) programs and macros


DOCUMENT + PAGES --+
         |         | 
         |         + LINES --+ RULERS  - Control document margins & tab 
         | The TEXT portion  |           positions.
         | of your Document  |                                               
         | is divided into   + TEXT LINES  - The actual text of your document.
         | PAGES and LINES.  | 
         |                   + PAGE BREAKS - Markers showing the end of each 
         |                                   page.
         |                   
         | 
         + TABLES +
                  |
                  + SECTIONS + TABLE HEADERS  - Title lines labeling each
           Each table has    |                  section of a Table.
           one or more       |
           sections, which   + COLUMNS  - Divisions of table rows into data
           can be spread     |            cells.  Columns are defined by their
           throughout the    |            positions, widths and attributes.         
           document.         |
                             |
                             + RULED LINE COLUMNS - One character wide
                             |                      columns containing 
                             |                      vertical ruled lines.
                             |                      Skipped during processing.
                             |
                             + COLUMN HEADER ROWS - Rows at the top of each 
                             |                      section containing a
                             |                      title for each column in
                             |                      the section.
                             |
                             + DATA ROWS  - Rows in a section containing data
                             |              cells.
                             |
                             + RULED LINE ROWS  - Rows ruled with horizontal 
                                                  lines. 
  
                              Page --6-- 
 
2.1  THE QIP SCREEN
-------------------
QIP divides the screen into a number of areas, known as System Windows, which
are visible most or all of the time.  Other windows such as Pull down menus 
and Prompt Boxes appear according to the operation you are performing.  The 
diagram below shows the standard QIP screen, and the following pages describe
each of the windows.

  + Current mode (TEXT or TABLE)
  |   + Information window                           Scale Line +
  |   |  + Menu bar                                             |
+-|---|--|------------------------------------------------------|---------+
|TEXT | File  Block  Effects  Layout  Search  Access  Output    |    SORD |
|Pg1--+ +.*....1....*....2....*....3....*...+-------------+..*.......7...+|
|Rlr .                                      | Calculator  |               |
|   2.                                      | Alarm Clock |               |
|   3.+                                     | Text mode   |  Menu         |
|   4.|                                     | Programs    |               |
|   5.+ Scale Column                        | Simulation  |               |
|   6.|                                     +-------------+               |
|   7.+                                                                   |
|   8.                                                                    |
|   9.<----------------------- Document Window -------------------------->|
|  10.                                                                    |
|  11.                                                                    |
|  12.         +--------------- QIP Calculator ------------------+        |
|  13.         | Calculation 1:                                  |        |
|  14.         | ................................................| Prompt |
|  15.         | RSLT: 0                                         | Box    |
|  16.         |                                                 |        |
|  17.         | F10:paste  SH+F10: make simulation  ESC: cancel |        |
|  18.         +-------------------------------------------------+        |
|  19.                                                                    |
|  20.          Status Line                                               |
|  21.<------------------------------>                                    |
|  <data.qip>   Page 1, Line 1, Xpos 1               10:30      D... Ins..|
|  F1:Help  F2:Calc  F3:Record  F5:Hide  F6:Paste  F7:Goto  F10:Mark  |F10|
+----|----------------------------------------------------------------|---+
     |                                                  Effect window +
     + Reminder line


2.2  SYSTEM WINDOWS
-------------------
MENU BAR
The top line on the QIP screen is the Menu bar, which changes according to 
which mode or which buffer you are using (see sections 2.6 and 2.7). At the 
far left of the window is the "TEXT" or "TABLE" mode display, which indicates
the current processing mode.

Following this are the names of the QIP menus available in the current mode 
and the current buffer.  The first letter of each is highlighted in some way
(e.g. "File") to indicate the 'hot key' used to activate that menu (see 
section 2.3.2).

The current buffer is indicated by the area at the far right - it normally 
contains the word "SORD" but changes to "PROGRAM" when you are editing a 
program.
  
                              Page --7-- 

SCALE LINE (RULER)
As its name suggests, this contains a graduated scale, with digits placed 
every 10 characters (e.g. 1 for 10, 2 for 20) and an asterisk halfway between
each pair of digits.  Normally, ruler information is superimposed on the 
scale, such as left ("+") and right ("+") margins and tab positions ("T") 
(see section 3.6.1).  In Table mode other information such as column numbers,
widths or titles can be shown. The <Alt>= keys can be used to change this 
information in table mode.


SCALE COLUMN
This five-character wide window runs down the left edge of the screen, but 
may be turned off (with the <Alt>- key) if you prefer to edit with a full 
80-character wide display.

If present, the Scale Column displays text and/or table line numbers, and 
sometimes special information about each line.  For example, a line following
a new ruler will have "Rlr" displayed in the Scale Column, and page break 
lines will be display Spb (soft page break) or Hpb (hard page break).  Table
indicators include:

  "Tnnn"      The first Table header line, where nnn is the Table number
  "THdr"      A Table Header Line
  "Snnn"      The first Column Header Line, where nnn is the Section number
  "CHdr"      A Column Header Line
  "+   "      Ruled line preceding the first data row of a table.
  "   +"      Ruled line following the last data row of a table

The last two indicators will change to up or down arrows if there is another 
section of the same table above or below the current section.

When the Scale Column displayed, a small one-line window appears at the top 
of the Scale Line.  This is the Information Window, and contains the current
page number ("Pg1") or table number ("Tb1").  It disappears if the Scale 
Column display is turned off (<Alt>-).


DOCUMENT WINDOW
All editing of your data takes place in this window, which occupies most of
the screen.  Its width is either 75 or 80 characters, depending on whether or
not the Scale Column is displayed.   In Text mode, a blinking cursor is 
displayed -- this is an underscore ("_") in Insert mode and a block in 
overwrite mode.  In Table mode, there is no blinking cursor but the current
table cell is highlighted with a block cursor the width of the cell.


STATUS LINE
Information about the current document and cursor position is shown here.  
The document name appears at the left.  This changes to "Programs" when you
are editing in the Program buffer.

Next to this is the current cursor position, expressed either as a Page/Line/
X (character) position for text mode, or as a Table/Section/Column/Row 
position for table mode. Additional information may also be displayed, 
depending on the mode:
  
                              Page --8-- 

   Text mode - the amount of free memory available, expressed in Kilobytes.
   If this value becomes less than 10K, it is advisable to stop editing the 
   current document, exit QIP and either split the document into two smaller 
   ones, or increase the amount of available memory, e.g. by removing any 
   Terminate-and-Stay-Resident programs in your system.

   Table mode - if the current column has a Numeric, Date or Time attribute
   this will be displayed (see section 3.3.7).

The current time is shown at the right-hand end of the Status Line.


REMINDER LINE
This line is sensitive to the current context and operation and will change 
to give you reminders concerning which keys to use or what to do next.  
Normally, it reminds you of the most important Function keys as shown in the
example screen in section 2.2


EFFECT WINDOW
This small window at the far right of the Status Line is used to show several
indicators concerning QIP's current editing mode and status.  The exploded 
view below will make this clearer (an indicator which is "off" is either blank
or displayed as a period):

                 Q p l   D . . .   I n s . .
                 --+--   ---+---   --+-- | +------  Table Cursor direction
                   |        |        |   |
    Qpl/Macro mode +        |        |   + Ruled line mode
                            |        |
             Current Effect +        + Insert/Overwrite mode

The Qpl/Macro mode indicator is normally blank, but changes to "Qpl" when a 
QPL program is running, "Mac" when a macro is playing, "Inp" when a macro is
in "user Input" mode, "Rec" when a macro is being recorded, or "Sim" when a
simulation program is running.

The Current Effect shows the current color ("D" for default, "R" for red 
etc.) and the on/off status of Underline ("U"), Highlight  ("H") and Expand 
("E").

Insert/Overwrite mode can be "Ins" for insert or "Ovr" for overwrite.

Ruled line mode (2.3.4) is usually off but can be single ("|") or double 
("||").

The Table Cursor movement direction (2.3.5) can be right (right arrow), down 
(down arrow) or off.


2.2.1  MENUS
------------
QIP menus are accessed from the Menu bar at the top of the screen, or from a 
menu which has already been displayed.  Each menu has a list of options which
can be selected to perform certain operations.  When an option is selected 
(section 2.3.2) the menu will usually disappear, to be replaced by another 
menu or by a Prompt Box pertaining to the operation you have selected.
  
                              Page --9-- 

Some menu options (called toggles) are provided to let you change certain 
settings which control QIP.  Usually, a toggle will have one of several 
possible values shown next to it (e.g. "On" or "Off" as in the example shown
below).
                     +-----------------+
                     | Create          |    +
                     | Goto            |    |   These are
                     | Join            |    |   all menu 
                     | Split           |    |   options
                     | Indent          |    |
  This is a toggle:  | Auto Append  On |    +                  
                     +-----------------+


2.2.2  PROMPT BOXES
-------------------
These are more complicated than menus because they allow both input of text 
and setting of toggles.  Many QIP operations will start by 
displaying a prompt box requesting the information they need to process your
data, e.g.:

       +---------------- Insert/Append Column(s) ------------------+
       | Width(s) of Column(s) to insert:                          |
       | ......................................................... |
       |                                                           |
       | Append   Off                                              |
       |                                                           |
       | F10:execute  ESC:cancel  F5:hide                          |
       +-----------------------------------------------------------+

The prompt box form is usually:
  - Any input fields (which can be entered and edited in accordance with 
    section 2.3.3)
  - Any related toggles

A reminder line on the bottom line lists useful keys including any special 
keys associated with this particular operation.

When a prompt box appears, its input fields and toggles may already be set to
show default or last-used values - these can be accepted, edited or cleared 
as required.  Refer to section 2.3.3 for more detail on editing prompt box
lines and selecting options in prompt boxes.


2.2.3  POPUP WINDOWS
--------------------
In addition to menus and prompts, several other kinds of windows may appear 
from time to time.  These include Notice windows which display messages such 
as "Sorting" while an operation is in progress, Message windows reporting the
result of an operation, Error windows which display processing or data entry 
errors, and Verify windows, which request confirmation before some operation
is carried out (see the example below).

For each of these windows, a reminder line message will be displayed if you 
are required to press a key in order to clear the window before proceeding.
  
                              Page --10-- 

                   +---------------------+
                   |Save changes? .      |
                   |                     |
                   |Yes:  No:  ESC:cancel|
                   +---------------------+

2.3  KEYBOARD HANDLING, FUNCTION KEYS and EDITING
-------------------------------------------------

FUNCTION KEYS
-------------
Below is a list of the function keys which are available in QIP.  Certain 
keys may not be available or applicable to particular operations.  Function 
key templates are provided in the document named TEMPLATE on the distribution
disk.

Refer to section 2.4 for a detailed description of MOUSE handling in QIP.

Key           Description                                           

<F1>          HELP key, also supported by <Ctrl>J.  This provides context- 
              sensitive help and access to the main HELP system at all times.

<Shift><F1>   During HELP, displays the 'topic' menu for the current help.

<F2>          QIP Calculator.  This is equivalent to the Calculator option of
              the  Access menu (3.1.1).

<Shift><F2>   During cell editing or line input, evaluate the input as a 
              numeric or string expression (2.9).

<F3>          Start or stop recording of keyboard macros (Appendix A).

<F4>          Play last macro (Appendix A).

<Shift><F4>   Display Programs menu.  This is the same as selecting the 
              Programs option on the Access menu (3.1.5).

<F5>          Hide windows (if any prompt, menu, or other popup windows are 
              showing).  The next key pressed will make the windows visible
              again.

<F6>          Paste.  Pastes contents of Work area to current position 
              in current buffer.

<Shift><F6>   Yank current line.  Copies current line to Work Area.  Note 
              this will overwrite current contents of Work Area.

<F7>          Goto.  This is the same as Goto on either the Search or Table 
              menu (3.9.4, 3.10.2).  Attempting to Goto a page past the end of
              a Document will Goto the top of the last page in the Document.

<Shift><F7>   Go directly to the Document buffer (2.7).

<F8>          Switch between Text and Table modes (2.6).
  
                              Page --11-- 

<F9>          Change ruled-line editing mode (2.3.4, 2.3.5).

<F10>         Execute and Marking key (2.3.4, 2.3.5).


CONTROL and EDITING KEYS
------------------------
Below is a list of the control and editing keys which are available in QIP.

Key           Description                                           

<Alt>X            Exit QIP  - same as Quit on the File menu (3.5.1).
<Alt>-            Toggle display of the Scale Column (2.2.1).
<Alt>=            Change Scale Line (Ruler) contents in Table Mode (2.2.1).
<Alt>Q            Display the QIP Copyright notice.

<Ins>             Change Insert/Overwrite mode.  Also supported by <Ctrl>V.

<Esc>             Exit or cancel any menu, prompt or operation.
<Shift><Esc>      Exit all menus or windows currently open.

Backspace         Delete the character to the left of the cursor.
                  <Ctrl>H also.
<Del>             Delete the character at the cursor position.
<Shift><Del>      Delete or clear to the end of the current line.
<Ctrl>Y           Delete or clear the current line.
<Ctrl>T           Delete the current word, or clear the current table cell.

<Ctrl>K char      Drop a bookmark (any single character) at the current 
                  location (a quick version of the bookmarks in 3.10.5).
<Ctrl>Q char      Goto a bookmark (any single char).  A quick version of the
                  Goto Bookmark feature explained in 3.10.4).

<Ctrl>P           Insert a hard page break.
<Ctrl>N           Insert a new line before the current line and move to it.
<Ctrl>Space       Enter a hard-space character.

<Ctrl>L           Repeat last Search (same as Search Next, 3.10.3).

<Ctrl><Break>     Halt or abort the current QIP operation, including Print, 
                  Sort, Update, and QPL programs.

<Enter>           Accept the current line, and move to start of next 
                  line (or next cell in Table mode).  Please refer to 
                  sections 2.3.5 and 2.3.7 for more information.

<Shift><Enter>    Append a new line after the current line and move to it.


CURSOR MOVEMENT and SCROLLING KEYS
----------------------------------
"Cursor" generally means the blinking text cursor or the block table cursor, 
but can also include the currently highlighted menu or prompt option.  The 
"current" window may refer to a menu or prompt window, the document window, 
or the cell editing window (2.3.9).
  
                              Page --12-- 

Many movement keys have extended forms which use the <Shift> or <Ctrl> keys 
in conjunction with the key.  In these cases, <Ctrl> will normally result in 
more movement (or movement on a larger scale) than <Shift>.

QIP TIP
-------
Some non-IBM computers (notably the Toshiba T5100 and J3100 series) do not
generate some of the shifted key combinations described below.  Specifically,
the <Shift><Home>, <Shift><End>, <Shift><PgUp>, <Shift><PgDn>, <Shift><Ins>, 
<Shift><Del>, and the four <Shift>arrow keys.  

Note that the Toshiba computers will produce these key combinations when
<Num Lock>, or <Scroll Lock> is on, but <Num Lock>, and <Scroll Lock> also 
have an affect on many other keys.

You can use the <Ctrl>O key to generate these shifted keys on those computers
that do not automatically produce them.  Pressing <Ctrl> O then a key will 
generate a <Shift>ed key.  Press <Ctrl>O then a key, DO NOT press them all
simultaneously.

Note this is only for the keys listed above, <Ctrl>O will have no effect on 
other keys.  


Key               Description                                        
------            -----------
Arrows            Move the cursor in the indicated direction.  Also supported 
                  by <Ctrl>E (up), <Ctrl>X (down), <Ctrl>S (left) and <Ctrl>D 
                  (right), but NOT in menus (2.3.2).

<Shift>Arrows     Move the current window in the indicated direction or 
                  scroll the Document buffer.

<Tab>             In Overwrite mode will move the cursor to the next tab 
                  position, table cell or menu/prompt option.  In Insert mode 
                  will insert spaces up to the next Tab position.  Also 
                  supported by <Ctrl>I.

<Shift><Tab>      Move the cursor to the previous tab position, table     
                  cell or menu/prompt option.

<Ctrl>left        In Text mode will move to the previous word.  <Ctrl>A also.
                  Refer to section 2.3.5 for Table mode usage.

<Ctrl>right       In Text mode will, move to the next word.  <Ctrl>F also.
                  Refer to section 2.3.5 for Table mode usage.
                  
<Home>            In Text mode, moves to the start of the text on the line, 
                  if already at the start of text, moves to the left margin,
                  if already at the left margin, moves to the far left edge 
                  of the Document window.

<Shift><Home>     Move to the Document left margin.

<End>             Move to end of the text on the line.  If already there, 
                  moves to the right margin, if already there moves back to
                  the end of the text line.
  
                              Page --13-- 

<Shift><End>      Move to the right margin of the Document.

<PgUp>            Move up one screen (22 lines).  <Ctrl>R also.

<PgDn>            Move down one screen (22 lines).  <Ctrl>C also.

<Shift><PgUp>     Move to the top of the current page or section.  If already 
                  there, move to the top of the previous page or section. 

<Shift><PgDn>     Move to the top of the next page or section.

<Ctrl><PgUp>      Move to the top of the document or current table.  If 
                  already at the top of the current table, move to the top of 
                  the previous table (if any).

<Ctrl><PgDn>      Move to the last line of the document or current table.  If 
                  already at the end of the current table, move to the end of 
                  the next table (if any).


2.3.2  MENU KEYS
----------------
Menus and menu options are normally accessed using the <Alt> key in 
combination with the one capitalized and highlighted letter of the option name
(known as the 'hot key'). The hot key is usually the first capitalized letter 
option name, and is also displayed in a different color.  Thus, to open the 
Access menu, simply type <Alt>A.

While a top-level menu is open, the left or right arrow keys can be used to 
move back and forth across the Menu bar.

On an open menu, one option (usually the last one executed on that menu) will 
be highlighted.  The up and down arrows, <Tab> and <Shift><Tab> and the space 
bar may be used to move from one highlighted option to another.

The <Enter> key executes the current option (whichever one is highlighted), 
or changes the value of a toggle, generally without exiting from the menu
(2.2.2).  The menu may disappear at this point, particularly if a sub-menu or
prompt box is opened.  

The <F10> key is the "Accept" or "Execute" key.  Pressing <F10> always closes
the menu and executes the option.  This is so the <F10> key can be used (as 
indeed it must be) for cases such as the Effect menu (3.4) where several
toggles may be changed (with the <Enter> key) before being "accepted" with 
the <F10> key.

The <Esc> key can be used to exit the menu -- it has the effect of restoring
any changed toggles to their previous values.

You can move directly to a particular option without executing it by pressing
the <Ctrl> key together with the option's hot key.  This is useful to
ensure the right option is selected for keystroke macros.
NOTE: A few <Ctrl> keys are equivalent to other keys. For example, <Ctrl>M is
the same as <Enter>,  <Ctrl>I is <Tab> and, in QIP, <Ctrl>J is <F1>

  
                              Page --14-- 

Typing an option's hot key will move to the option AND execute it.
The effect of the <Alt>Hotkey combination differs depending on the type of
option. If the Hotkey is for a toggle, it will change the toggle value
without moving the cursor. For other menu options, it moves the cursor and
executes the option.

Toggles may be set to a particular value with the plus (+) and minus (-)
keys (for toggles with only 2 possible values), or with the numbers 0 to 3.
For example, 
   '-' or '0' will force the toggle to its initial value, usually OFF.


2.3.3  PROMPT BOX KEYS
----------------------
Prompt boxes combine single-line text editing with toggles.  A prompt box is 
executed by pressing <F10> at any time, or pressing <Enter> on the last input
line.  The prompt box will remain open until it is either executed, or 
aborted using <Esc> or <Shift><Esc>.

Options on the prompt box have hot keys in the same way as menus (2.3.2).
Movement between options is possible using the up and down arrows, <Tab> and 
<Shift><Tab>. 

The effect of the <Alt>Hotkey combination differs depending on the type of
option. If the Hotkey is for a toggle, it will change the toggle value
without moving the cursor. For an Input line hotkey, it moves the cursor
to the required field.

Toggles can be set to a specific value (e.g. with the plus and minus keys).
Refer to the "Menu Keys" section above (2.3.2) for more details.


INPUT LINE EDITING
Each input line has a number of dots indicating the maximum number of 
characters you may enter.  While entering or editing data, you can use the 
line-based cursor movement and editing keys defined in section 2.3.1, 
including combinations such as <Ctrl>Y or <Shift><Del> to clear all or part 
of the line.

When you accept a line or prompt box with <Enter> or <F10>, it will normally 
be checked for an erroneous or missing entry.  If one is found, an Error 
window will appear and the flashing cursor will be placed at the position 
where the error is suspected.  The Error window will remain visible, and you 
will not be able to move off the input line until the error is corrected.


2.3.4 TEXT EDITING and MARKING
------------------------------
When editing text, you can use all of the keys described in 2.3.1.  More 
detail on certain keys is given below.

The behavior of the <Enter> key differs depending on whether you are in 
Insert or Overwrite mode.  If <Enter> is pressed in Overwrite mode, the 
cursor always moves to the start of the next line -- no text is moved or 
inserted. In Insert mode, the current line is broken at the cursor position - 
any text after that point will be moved with the cursor to the start of the 
next line, and a newline symbol will appear at the end of the original line.
  
                              Page --15-- 

Text which is entered in Overwrite mode (replacing existing text) will 
always keep the effect (3.4) given to the original text - it will not be 
changed. Text entered in Insert mode will be given an effect according to the 
Effect Priority (3.4.1).

When editing lines within a table in Text mode, it is best to use Overwrite 
mode so as to avoid shifting the positions of table columns -- it is possible 
to do this but not recommended, as subsequent column accesses in Table mode 
will read incorrect data.

MARKING
Many text operations apply to marked ranges of text (3.2, 3.4).  Marking of 
text areas is very straightforward:  To start marking, press the <F10> key. 
You can then move the cursor backwards or forwards to highlight the range of 
text you want to mark.  You can use any of the cursor movement keys such as 
<Home>, <End>, <Tab> and the arrow keys for this.  You may type in new text 
during marking and also use editing keys such as <Del> and <Ctrl>Y.

To finish marking, either select the operation you wish to perform (e.g. 
Copy, Move) or press <F10> again, which will leave the range marked until you 
select an operation at a later time.

Pressing <Esc> at any time will clear the marked area and abort any operation 
you have selected.

RULED-LINE EDITING
Drawing boxes, Ruled-lines, and graphic editing is possible in QIP.  The <F9>
key controls the current Ruled Line mode.  This may be off, single or double 
(see the Effect Window in section 2.2.1).  

To draw a box or line, place the cursor at the upper-left corner and press 
<Shift><F9>.  Use any cursor movement keys to move to where you want the 
lower-right corner to be then press either <Shift><F9> again or a character 
key.  A box (or line) will be drawn with either single or double ruled lines
(depending on the ruled line mode) or with the character you pressed.

When the Rule line mode is active and the <Num Lock> key is on, keys on the 
numeric keypad are redefined to generate the following characters (note the 
actual graphics characters cannot be shown in this file):

                                 Single                     Double
 7: +   8: -   9: +      *: c (cent symbol)           *: L (pound)

 4: |   5: |   6: |      -: * (block symbol 1)        -: @ (block symbol 3)

 1: +   2: -   3: +

 0: -   .: |             +: + (block symbol 2)        +: $ (block symbol 4)

If you need to generate characters which are the INTERSECTION of single and 
double ruled-lines, simply turn on the <Scroll Lock> key in addition to the 
<Num Lock> key.  This will generate characters with VERTICAL lines matching 
the CURRENT mode (e.g. vertical lines will be single when the Ruled Line mode 
is single), and HORIZONTAL lines in the OPPOSITE mode (e.g. horizontal lines 
will be double when the Ruled Line mode is single).
  
                              Page --16-- 


2.3.5  TABLE EDITING and MARKING
--------------------------------
When editing in Table mode, QIP changes the cursor to a reverse block the 
width of the cell -- this can be moved around with the normal cursor movement
keys listed in section 2.3.1, with some minor differences noted below.

<PgUp> and         These will still attempt to move the cursor one screen at 
<PgDn>             a time, but this behavior is modified so as to ensure 
                   that the cursor remains within table limits.

<Shift><PgUp> and  Move to the top or bottom of the current section.  If 
<Shift><PgDn>      already at that position, move to the top or bottom of 
                   the previous or next section (if any).

<Ctrl><PgUp> and   Move to the top or bottom of the current table.  If 
<Ctrl><PgDn>       already at that position, move to the top or bottom of 
                   the previous or next table (if any).

<Ctrl>left         Does NOT move the cursor.  Instead, it toggles automatic 
                   cursor movement on or off - this controls what occurs when
                   the <Enter> key is pressed.  The cursor movement indicator 
                   displayed in the Effect Window (2.2.1) will change to a 
                   ".", meaning "off". If you press <Ctrl>left again, it will
                   return to its previous value (right or down arrow).

<Ctrl>right        Does NOT move the cursor.  This changes the direction of 
                   automatic cursor movement.  The indicator will change from a 
                   right arrow to a down arrow or vice versa.  If the 
                   indicator was turned off using <Ctrl>left, this key will
                   turn it on.

<Enter>            Accepts the current cell (if it was being edited) and 
                   moves in the current cursor movement direction, if any.  
                   In Auto Append mode (3.11.6), a new row may be appended if
                   the cursor is at the end of the section.

Ruled Lines, Section Boundaries and Column Headers

The table cursor automatically skips all ruled lines during editing.  Thus, 
if the next column to the left is a ruled line column and you press the left 
arrow key, the cursor will move to the column BEFORE the ruled line column.

The arrows and the <Enter> key will never move the cursor outside the current
section.  The <Enter> key moves to the start of the next row or column 
(depending on the cursor movement direction) and the arrow keys will have no 
effect when the cursor is at a section boundary.  If you wish to move to 
another section, use Goto (3.10.2) or one of the <PgUp> or <PgDn> combinations
described above.

Column header rows (containing column titles) are often shared by several 
sections of the same table.  This means that if you edit one section's column 
header you will be asked if you want to replicate the changes in other 
sections sharing the same header.

MARKING
The <F10> key is used in Table mode, as in Text mode, to start and end 
marking of a range of data.  In Table mode, marking is done on a cell-by-cell
basis, and only the start and end cells in the range are highlighted.
  
                              Page --17-- 
 
It is not necessary to mark both ends of a range -- if the end cell has not 
yet been specified, the current cell (the one occupied by the cursor) is 
assumed to be the end point.  Furthermore, if you select an operation which 
expects a marked range without having first marked anything, the current 
column (or row) will always be assumed. Thus, selecting Column Delete (3.2) 
without marking anything will indicate that you wish to delete the current 
column.

Existing Marks can be cleared at any time by pressing <Esc>.  They are 
cleared automatically when an operation which uses those marks is completed. 
Marks are also cleared if you exit Table mode or move to another section 
(i.e. it is not possible to mark a range extending over more than one 
section).

When an operation has been selected, the range will be highlighted and 
subsequently processed according to the type of operation you have selected. 
Thus, Column menu operations will highlight and process the marked range as a 
group of columns, Row menu operations will work in a similar fashion for 
rows, and Effect changing will apply to the rectangular block of cells 
defined by treating the start and end cells as corner points.

The Ruled-line options on the Column and Row menus require that you mark the 
data columns or rows next to where the ruled lines are to be inserted or 
deleted.  This is necessary because it is not possible to move the cursor
onto the ruled line rows and columns themselves.  See section 3.3.1 for more
detail on this subject.


2.3.6 TABLE CELL EDITING
------------------------
When editing the contents of a cell, a small editing window covers the actual 
cell. It shows the current contents (if any), with dots filling the unused 
area. This may be edited in a similar fashion to prompt input lines (2.3.3).
Other details concerning cell editing are given below.

There are two ways to start editing the current cell:

1. Press <Shift><Ins> or <Ctrl>G to Get the existing data for editing -- it 
   will be displayed in the editing window with the cursor placed at the end,
   ready for editing.

2. Type any valid data character (i.e. not a control or cursor movement key).
   The editing window will open for input, showing the character you typed.  
   When you press <Enter> the new data will replace any previous data the 
   cell may have had.

There are several ways to end editing of a cell.  The <Esc> or <Ctrl>U keys 
will abort cell entry, restoring the previous contents of the cell, if any.  
The <F10> key will accept the new contents without cursor movement.  The 
<Enter> key will accept and move in the current cursor direction, if any.  
The UP and DOWN arrows will accept and move in their respective directions.

Incorrect data will cause an error when you try to enter it into a column 
which has a special Column attribute (3.3.5).  For example, if you try to 
enter alphabetic data into a cell with a numeric attribute, a bell will sound
and the editing window will remain open, waiting for you to correct the data.
  
                              Page --18-- 

Column attributes also provide a few shortcuts when entering data.  You can 
type expressions (2.9) in numeric, date and time attribute columns.  These 
will be evaluated and, if valid, their results stored in the cell.  For 
example, typing TODAY in a date attribute column will cause today's date to 
be stored.  It is important to note that the the evaluation takes place ONLY 
at the time you enter the data -- QIP does not store the expression for 
future recalculation like a spreadsheet.

A shortcut is provided to allow you to copy existing cells when entering data
into a cell.  If you type only a double quote (") before pressing <Enter>, 
the contents of the LAST NON-EMPTY DATA CELL above the current cell in the 
current column will be copied.  If you type "r where r is a row number in the
current section, the contents of the current column in that row will be 
copied.  Finally, you can type "c,r where c is a column number and r is a row 
number, the contents of that cell will be copied, e.g. "2,4 will copy the 
contents of the cell in column 2, row 4 into the current cell.

It is also possible to manually get data from one cell and put it into 
another -- use the <Shift>arrow keys to move the editing window to another 
cell before you press <Enter>.


2.4  MOUSE HANDLING
-------------------
QIP supports the use of a mouse if one is installed and if the mouse driver 
has been loaded before QIP is started.  Though a mouse is not always the best
tool for typing-intensive tasks such as word processing and data entry, it 
can be very useful when the work involves menu selections, cursor movement 
and data marking, which is often the case in QIP.

QIP can handle either a two-button or three-button mouse.  The left-hand 
button is used to select or execute an item (equivalent to <F10>), the right-
hand button is equivalent to pressing the <Esc> key.  On a three-button 
mouse, the middle button calls up Help just as the <F1> key does -- on a two-
button mouse you do this by depressing both buttons at once.

The mouse cursor is a blinking block which is independent of the Text or 
Table mode cursor.  To select something with the mouse, just move the mouse 
cursor to the desired location and push the left button.  Areas on the screen
which will react if you do this are called "hot areas" and are described 
below.

Menu bar:     The TEXT/TABLE label at the far left can be selected to switch 
              modes.  Menu names can be selected to display a menu, and 
              options on an open menu may also be selected.  The SORD logo or
              buffer indicator at the far right of the Menu bar can also be 
              selected -- its behavior depends on which is the current buffer.

Scale Line:   Scroll the screen left or right.  Selecting a point to the left
              of the center is the same as pressing <Shift>left.  Selecting 
              to the right of the center is the same as pressing <Shift>
              right.  Selecting the Information window (or the leftmost five 
              characters of the Scale Line if there is no Information window)
              toggles Scale Column display.

Scale Column: Scrolls the screen vertically, one screenful at a time.  
              Selecting a point above the center is the same as pressing 
              <PgUp>.  Selecting below the center is the same as pressing
              <PgDn>.
  
                              Page --19-- 

Reminder Line: If any highlighted function keys are shown, selecting one is 
               equivalent to pressing that key.  A small <F10> symbol will 
               always be available at the far right of the Reminder line
               when the mouse is active.

Effect window: The current effect, Insert/Overwrite mode, Ruled line mode and 
               table cursor direction indicator may all be selected.

Prompts:       Toggles and input lines may be selected -- the effect is the 
               same as if <Alt>hotkey was used (2.3.3).  The special keys 
               shown at the bottom of a prompt box may also be selected.

Windows:       The frames of any menu, prompt, message or help windows may be 
               selected to move that window -- for example, selecting the top 
               frame of the window will move the entire window up, (equivalent
               to <Shift>up arrow).

Help:          Highlighted phrases and special keys can be selected.

Points in the Document window can also be selected with the mouse.  In Text 
mode, selecting a point will move the cursor to that point.  If marking is 
active when this is done, the area between the original cursor position and 
the new one will be marked.  For example, to mark a range of text:
  -  select a start point with left mouse button
  -  select F10 hot area on reminder line or press <F10> key
  -  select an end point with left mouse button (as above)
  -  select F10 hot area on reminder line or press <F10> key (as above)
  -  for move and copy (not needed for "Delete", or "Yank") select a 
     destination point with left mouse button
  -  select option from BLOCK menu. e.g. Move, Copy, Delete, or Yank.

Selecting a table cell when in Table mode will mark that cell without moving
the table cursor (2.3.5).  Selecting a cell twice in succession will move 
the table cursor to that cell, clearing any existing marks.


2.5  QIP FILES
--------------
QIP uses several system files for managing its own operations and will create 
files associated with the particular data file you are using.

System Files
------------
QIP.EXE          - The QIP program.
QSYSTEM.V01      - QIP setup information, help, and error messages.  If 
                   deleted, it will be automatically re-created with default
                   setup information but with NO help or error messages -- 
                   you should re-copy the original file from the standard QIP
                   distribution disk.
QSETUP.EXE       - Setup program which reads or creates QSETUP.TXT and writes 
                   the setup information into QSYSTEM.V01.  See Appendix D.
QSETUP.TXT       - Text file containing QIP's setup information in editable 
                   form.
QPRTDEFS.V01     - Printer database for all printers in standard distribution
                   database.  

Note: The ".TXT" files are not required to run QIP, but are useful for setup.
  
                              Page --20-- 

Data and Work files
-------------------   
filename.QIP     - QIP document file, containing text, table, and effects 
                   data, plus any QPL programs for this document (Appendix A).
filename.QBK     - Backup of the previous copy of filename.QIP.  If you Quit 
                   without saving changes or Restore from the backup, the 
                   contents of this file will be used (3.5).
filename.Pnn     - nn = number from 01 to 99.  This is a PRINT TO DISK file. 
                   Each time you send print output to disk, the number will 
                   be incremented so you can easily keep track of printer
                   files.
filename.Snn     - nn = number from 01 to 99.  This is a SPOOLed file created
                   by QIP.  Each time you send output to the spooler, the 
                   number will be incremented.  Delete these files as 
                   necessary.


2.6 TEXT and TABLE MODES
------------------------
As discussed already in sections 2.2 and 2.3, many menu operations and 
editing procedures differ depending on whether you are in Text or Table mode.

Text mode menus provide editing and word processing operations such as block 
copy, ruler editing and search and replace.  Table mode menus provide many 
editing, calculating and processing operations for working with table data. 
Several 'utility' menus (such as File and Output) are available in both modes.

Text editing can be performed on any part of the document including table 
data, although it is important that you maintain the table column positions 
and overall structure in the process.  The easiest way to do this when 
editing tables in text mode is to always use Overwrite mode, with Wordwrap 
"Off" and without deleting individual characters or words.

You can use Block menu operations to work with table rows.  This is very 
useful when Importing data from a database.  You can create an empty table 
with the correct column widths then Move the (text) database rows into the 
table to allow them to be processed with any of the table operations.

Text formatting is always governed by the current Ruler (3.6.1), displayed on
the Scale Line.  Words, line and paragraphs are formatted in accordance with
the ruler.  Since it is possible to have many rulers in a document, you can
vary the layout of your text at any point.  Rulers can be altered and removed
only in the Document buffer.

Table editing is always done on a cell-by-cell basis.  The Table mode cursor
movement keys will never move past the boundaries of a table or section.  
Depending on the cursor movement keys you use (<PgUp> and <PgDn>), the cursor
may move to another section but is still within the bounds of the Table.

Tables are also special in that they always consist of 'whole' sections.  If
a section is divided by a page boundary, it is automatically split into two
sections of the same table.

Because a table can extend throughout a document (for example, with one 
section on every page), it is important to realize that many table operations
affect the entire table, especially those on the Process menu.  Some Process
  
                              Page --21-- 
 
menu options have toggles which control whether they will apply to the 
current section or to the entire table -- thus you can SORT just a few rows,
or every row in the table.

While you may have up to 50 tables in a document, each with up to 250 
sections, it is not possible to interleave sections from different tables -- 
all sections of a given table must appear in sequence.  Text, however, can be
placed between sections at will --  whether one line or one thousand lines.

Tables are always numbered in the order they appear in the document.  Thus, 
Table 1 is the first table in the document, not necessarily the first table 
you create. Sections are also numbered in ascending order (within each 
table).


2.7  QIP BUFFERS
----------------
QIP uses three work areas in memory to manage your document.  These are the 
Document buffer, Work area and Program buffer.

DOCUMENT BUFFER
This is where the actual document data is stored and processed.  The full 
range of QIP functions are available for use here, whether in Text or Table 
mode.  You can tell you are in the Document buffer in a number of ways: the 
"SORD" logo appears at right of the menu bar, the document name is displayed 
at the left of the status line, and the menu bar shows all the menus for the 
current mode.

When you save a QIP document, the data which is actually saved is the current 
contents of the Document buffer, together with all programs (see below). The 
contents of the Work area are never saved -- if you want to preserve 
its contents, paste them into the Document buffer before exiting QIP.

If you select the SORD logo with the mouse, a special notice appears (also 
displayable with <Alt>Q).


WORK AREA
The Work area is used as temporary workspace by QIP itself and is not
directly accessible to the user.  The <F6> key can be used to paste the 
contents of the Work area to the current position in the Document.

It maintains a copy of all data (text data, and rows) copied, moved or deleted
from the Document buffer with block operations involving marked areas, such as
those on the Block (3.2), and Row (3.9) menus.


PROGRAM BUFFER
There are two ways to enter the Program buffer.  One is via the Program option
of the Access menu (3.1.5), the other is the <Shift><F4> key.  If you Create 
a new program or Edit an existing one, you will be placed in the Program 
buffer with the cursor on the first line of the program.  You may also be 
placed in the Program buffer if an error occurs in an executing program, in 
which case the cursor will be on the line containing the error.  

When you are in the Program buffer, the word "PROGRAM" appears at the right 
of the menu bar, and the word "Programs" will be displayed at the left of the 
Scale line.  If you select the word "PROGRAM" with a mouse, the Program menu 
will be displayed.
  
                              Page --22-- 

The Access menu or <Shift><F7> may be used to return to the Document buffer 
when you have finished editing.

All keyboard macros which are assigned hot keys are stored as QPL programs,
these may be edited, extended or deleted in accordance with the information 
given in Appendix A.  Please refer to that section for more information on QIP 
macros and QPL programming.


2.8  SPECIFYING DATA POSITIONS and RANGES
-----------------------------------------
Many QIP operations require the entry of data positions or ranges.  For 
example, many Table operations require column numbers or column ranges, and 
Output menu options often require page and table ranges.


2.8.1  SPECIFYING DATA ITEMS
----------------------------
Any item (page, line, column etc.) in a QIP document can be specified using 
one of the prefixes given below followed by a number, e.g.  P1 for Page one.
You may also use a "C" referring to the CURRENT Page, Line, Table, Section,
or Row.  When specifying Table positions you may use the letter "E" to refer 
to the END (last) Table, Section, or Row.  

Note that that "C" and "E" may not be used by themselves, only in combination
with "P", "T", "S", "R". etc.  Also that "E" may may be used only for Table
positions, e.g:
  
  PC  -  the current page.
  CC  -  the current column.
  TE  -  the end (last) table.
  RE  -  the end (last) row.

You can also use an expression (2.9) instead of the number, so long as it is 
enclosed in parentheses, e.g.  R(E-1)  -- the next to last row, P(N1)  -- the 
page whose number is stored in the numeric variable N1 (Appendix A).


SPECIFYING TEXT ITEMS
Pages:                      P, e.g.  P1 or P6 
Lines (within a page):      L, e.g.  L1 or L(N2)
X Offset (within a line):   X, e.g.  X4


SPECIFYING TABLE ITEMS
Tables:                     T, e.g.  T5 or TC or TE
Sections (within a table):  S, e.g.  S2 or S(N5)
Columns:                    C, e.g.  C1 or CC or C(E-2)
                       or:  [title], e.g. [COST PER UNIT] -- see below.
Rows:                       R, e.g.  R1 or R15


SPECIFYING COLUMNS BY THEIR TITLES
Each section may have up to three rows of column headers containing titles for 
the columns in that section.  The example below has two column header rows:
  
                              Page --23-- 

Column Nos: 1    2    3    4    5     6     7   8  9   10  11  Note that ruled
            +---------+---------+-----------+------+--------+  line columns
Col Hdr 1:  |         | Cost Per| Price Per | Qty  |        |  are really one
Col Hdr 2:  | Product |   Unit  |   Unit    | Sold | Profit |  character wide
            +---------+---------+-----------+------+--------+  columns and 
Data        |Shoehorns|    15.23|      27.76|    13|  162.89|  are numbered 
rows:       |Umbrellas|     3.55|      12.31|   122| 1068.72|  like any other
            ~..etc    |         |           |      |        ~  column (3.3.1) 
            +---------+---------+-----------+------+--------+

Columns can be referenced by their titles by enclosing the title in square 
brackets, e.g.: [Cost Per Unit].  It is not important to have the correct 
capitalization, nor is it necessary to spell out the entire title when a 
unique abbreviation will do.  Thus: [COST], [C] and [cost per unit] all 
reference the same column.

If the title specified is NOT unique (e.g.: [PRO]), QIP will first look for a 
column title which exactly matches the entry (in the above example, there is
no column called just "PRO", but if there was, [PRO] would match that column).  
If there is no exact match, QIP uses the FIRST column (moving from left to 
right) which matches the abbreviation  -- the "PRODUCT" column in the above 
example.

You may find it best to refer to columns by name in this fashion as the 
column numbers will change whenever you insert or delete any columns in the 
table -- including ruled line columns.   Please note, however, that column 
titles themselves may change from section to section of the same table if 
you explicitly change the column headers in a new section.


2.8.2  SPECIFYING DATA POSITIONS
--------------------------------
In operations such as Goto (3.10.4) you may need to specify not just an item 
(such as a column or page number) but a specific position.  It is possible to 
specify positions in text or table mode by using the item specifications given 
above, so long as the correct order is followed.  It is usually possible to
omit (or assume 'current' values for) one or more of the entries.

TEXT:  Page  Line  X-Offset
 e.g.: P1L13X20 - page 1, line 13, x-offset 20
       PCLC     - current page, start of current line
       P5       - start of page 5
       L1X20    - Line 1 offset 20 of current page

TABLE: Table Section Column Row
 e.g.: T3S1C3R5   - Cell in table 3, at section 1, column 3, row 5
       T3C3R100   - The cell at table 3, column 3, TABLE-RELATIVE row 100. If
                    a table number is specified but NOT a section number, row
                    numbers are taken as table-relative, i.e. rows are counted 
                    starting from the first row of the TABLE not just within 
                    one current section (see next example).
      S2[ABC]R19  - The cell at section 2, column [ABC], SECTION-RELATIVE row
                    19 of the current table.
      T2          - start of table 2 (section 1, column 1, row 1)
      C3RE        - The cell at column 3, end row of the current section.
      TEC3RE      - The cell in the last table, column 3, end row
  
                              Page --24-- 

2.8.3  SPECIFYING DATA RANGES
-----------------------------
Many operations require you to specify lists or ranges of data, e.g. page 
ranges for OUTPUT options (3.7), column ranges for PROCESS options (3.8) and
cell ranges for calculations (3.1.1).

A data range consists of a start position followed by two dots ".." followed
by an end number, e.g.  P1..5  -- pages one to five (current buffer is 
assumed). 

Although the start position may be specified with great detail, the end of 
the range must be a number or numeric expression.  As a convenience, the
letter 'A' for ALL may be used instead of a numeric expression.  For example;

PA     -  PageAll, ALL Pages
RA     -  RowAll, ALL Rows -- Note that RA is all DATA rows,
                              does NOT include Column header rows.
TA     -  TableAll, ALL Tables

As a special case, used ONLY for the CALC command, the letter "X" used to 
mean eXtend, e.g. CX, RX or CXRX (automatically append a new column and/or 
row).  Note that you may only use 'X' only for Columns and Rows.
 
Some Examples of ranges are:

P1L1..5        -- Page 1, lines 1 to 5.
T2C5R9..E      -- Table 2, column 5, from row 9 to the last (table) row.
SCC2..5        -- Current section, columns 2 to 5.
S2C2R3..(C-1)  -- Section 2 column 2, between rows 3 and current row minus 1.
S1[A]..[E]R1   -- Section 1 columns [A] to [E] in row 1.  This is a special
                  case for calculations only as the R1 specification at the 
                  end is permitted, and refers to to the entire column range 
                  given.
CAR1           -- Cells from all columns in row 1.  Same as C1..ER1.
C1RA           -- Column 1, all rows (in the current section).  Same as 
                  C1R1..E.

When specifying a COLUMNS/ROWS or PAGES/LINES a range is allowed only for one
or the other, but not both.  For example, when the the COLUMN specification
contains a range the ROW specification must be a single row (and vice versa).

     C1..10RE     --  okay
     C1..10R1..5  --  incorrect
     P3L1..50     --  okay
     P1..8LA      --  incorrect ("A" is actually a range equivalent to L1..E)
     S1..EC1..3   --  SECTION/COLUMN ranges okay 
     S1..5C1RC..E --  SECTION/ROW ranges okay

A list of ranges, positions or items is constructed by separating the 
elements in the list with commas, e.g.  P1..3,P5,P9..12  -- Pages 1 to 3 and
5 and 9 to 12. If you read the dots as "TO" or "THROUGH" and read the commas 
as "AND" or "THEN" you will find it easy to understand and use QIP ranges and
lists.

  
                              Page --25-- 

2.9  QIP EXPRESSIONS
--------------------
QIP supports a wide variety of expressions dealing with numeric and alpha
numeric (string) data.  These are used in calculations, in QPL programs, in
specifying data positions and ranges, and in some PROCESS commands such as 
UPDATE (3.8.1).


2.9.1  EXPRESSION STRUCTURE
---------------------------
Expressions are constructed from OPERATORS e.g. +, -, /, *, MOD, and OPERANDS
such as the following:

OPERAND TYPE                   Examples:
CONSTANTS                      3      "hello"
FUNCTIONS (Appendix B)         INT()  LEFT$()   NOW()
SYSTEM VARIABLES (Appendix B)  CPAGE  CDOC$
VARIABLES (Appendix A)         N1     A3 
                               (N = numeric, A = Alpha, i.e. string)
DATA POSITIONS (2.8.2)         C2RE   T1[C]

QIP Expressions combine OPERANDS and OPERATORS together just as in regular
mathematics:
e.g.        3        +       5         -        7
          CHR$(34)   +      "ABC"      +    CHR$(34)
i.e.     OPERAND  operator OPERAND  operator OPERAND ...

Parentheses can be used to force certain parts of the expression to be 
evaluated before the rest -- this is important when the OPERATOR PRECEDENCE
(Appendix A) would otherwise lead to a different result, e.g.
    2+3/4         (result is 2.75 because 3/4 is evaluated first)
    (2+3)/4       (result is 1.25, i.e. 5/4)

Parentheses are also required in some data ranges when the meaning would be 
unclear unless they were used, e.g.
    C3..E-1    (subtract one from columns in the range 3 to the last  -- 
               illegal)
    C3..(E-1)  (columns in the range 3 to next-to-last  -- ok)

Assignment expressions assign the result to a variable or data position, e.g.
    C2R4 = C2R1/C3R5       or      C3R5 = LEFT$(A1,5)+RIGHT$(A1,2)


2.9.2  EXPRESSION TYPES
-----------------------
An expression can be one of three 'types' corresponding to the kind of result 
being produced:  Numeric (evaluates to a number), String (evaluates to a 
string of characters) or Logical (evaluates to a TRUE/FALSE condition).

An expression's type can usually be determined by the kind of data it
references, e.g.  3+4 is a numeric calculation returning 7; "3"+"4" is a 
string concatenation returning "34".  However, expressions involving only 
table cell references are always regarded by QIP as numeric.

For example, QIP will always evaluate C1=C2+C3 as a numeric expression.  If 
you want it to be evaluated as a string expression, a "$" suffix must be 
applied to the destination or to any one of the operands, e.g. C1$ = C2+C3 or
C1 = C2$+C3.
  
                              Page --26-- 

2.9.3  LOGICAL EXPRESSIONS
--------------------------
Logical expressions cannot be assigned -- they are only evaluated to determine
whether or not to perform a certain operation (as in UPDATE). Logical 
expressions may be optionally prefixed by "IF", and can contain the special 
logical' operators 
   "="  -  Equal                 ">"   -  Greater Than
  "<",  -  Less Than             ">="  -  Greater Than or Equal
  "<="  -  Less Than or Equal   "<>"  -  Not Equal
  "AND" -  Logical AND          "OR"  -  Logical OR
  "NOT" -  Logical NOT

For example:

 IF [NAME] = "Rob" OR [AGE] > 45  -- True if AGE is over 45 or the NAME is 
                                     "Rob"
 N1 > 3 AND (N2 = 5 OR A1="DONE") -- True if N1 is over 3 and EITHER N2 is 5 
                                     OR A1 is "DONE"
 IF C1 <> C2                  --  True if the C1 data is not equal to the C2 
                                  data in the current row.
 IF NOT [A] >= 2 OR [C] < 5   --  True if [A] is not over 2 or if [C] is under
                                  5
 IF NOT ([A] > 2 OR [C] <= 5) --  True if [A] is not over 2 and [C] is not 
                                  under 5
 IF N1 OR N2                  --  True if either N1 or N2 is non-zero
 IF C1 OR VAL(C2)             --  True if either C1 is not EMPTY or if the 
                                  value of the C2 data is not zero (in the 
                                  current row).

Note:  For assignments, as mentioned previously, expressions involving only
table cells are treated as numeric because this is the most common 
requirement.  For logical expressions the reverse holds true:  IF C2 > C1  is
treated as a string comparison because this is what is usually required.  If
you want the comparison to be numeric, use the VAL() function, e.g.  IF 
VAL(C2) > VAL(C1).

A string comparison will return the same result as a numeric comparison if 
both columns contain only numbers, but can returns a different result if one 
or the other column contains non-numeric or mixed alphabetic & numeric data.
  
                              Page --27-- 
 
                       3.1  A C C E S S  M E N U

          DOCUMENT           PROGRAM     
      +-------------+    +-------------+
      | Calculator  |    | Calculator  |
      | Alarm Clock |    | Alarm Clock |
      | Text mode   |    | Programs    |
      | Programs    |    | Document    |
      | Simulation  |    | Simulation  |
      +-------------+    +-------------+

The ACCESS menu allows you to switch between TEXT and TABLE modes, and 
between the DOCUMENT, and PROGRAM, buffers.  The PROGRAMS option lets you 
manage QPL programs.  The ACCESS menu options also provide access to the 
pop-up CALCULATOR and ALARM CLOCK features from all modes and buffers.  A
SIMULATION program may only be run while in TABLE mode.


3.1.1  CALCULATOR
-----------------
This is one of the most important and useful options in QIP.  It is 
functionally identical to the pop-up calculator (<F2> key) and gives you 
access to ALL of QIP's built-in Date/Time, String, Numeric, and Financial 
functions.  See Appendix B for a complete list of all built-in functions, and
sections 2.8 and 2.9 for a detailed explanation of QIP expressions.  

Note that all QIP numeric computations are done in a BCD representation, this
means you have 16 decimal place accuracy with NO ROUNDOFF ERROR.

           +---------------- QIP Calculator -----------------+
           | Calculation 1:                                  |
           | ......................................          |
           | RSLT: 0                                         |
           |                                                 |
           | F10:paste  SH+F10:make simulation  ESC:cancel   |
           +-------------------------------------------------+

The calculator remembers up to 20 calculations; you can move "up and down" the 
list of calculations using the UP and DOWN arrow keys.  <Shift><PgUp> takes
you to the first calculation in the list, <Shift><PgDn> goes to the last one.
You may edit any of these expressions, or press <Enter> to recalculate it as
displayed. <Shift><Enter> will copy the current calculation formula and append
it to the end of the list.

You may reference data from any Column, Row, or Cell of any Table in the 
document as part of a calculation and likewise assign the results to a Column,
Row, or Cell (see section 2.8.1 and 2.8.2 for a complete description of how 
to specify data positions).  You can also use the <F10> key to "paste" the
results of a calculation to the CURRENT cursor position (either in to Text or
a Table cell).

Note that unless specified otherwise all COLUMN and ROW references are to 
the CURRENT SECTION of the CURRENT TABLE. You may of course explicitly refer 
to any Section(s) of any Table by entering the full QIP specification (e.g.
TESA[BALANCE], or T1S2R3). 
  
                              Page --28-- 

The result of any numeric calculation which does not contain an explicit 
destination (i.e 345.78+122.4, PI*COS(60), is stored in the RSLT variable 
(displayed just below the prompt line).  The current value of RSLT may be used
in any subsequent calculations.  For example, T2S1C3R1 = RSLT / 4.
 
Pressing <F10> will paste the current RSLT value into your Document at the 
cursor position (either a Table cell or into Text).

Pressing <Shift><F10> will automatically turn the existing calculations into 
a Simulation program (3.1.6).  You will be prompted for the name for a new
program.

          +--------------- Simulation -----------------+
          | Simulation program name:.................. |
          |                                            |
          | F10:execute   ESC:cancel   F5:hide         |
          +--------------------------------------------+

Program names may be up to 10 characters long.  Simulation programs are just
like any other QPL program and may later be accessed, edited, or executed via
the Programs option on the Access menu (3.1.5).

Note that <Shift><F10> not only creates the Simulation program, but also 
turns simulation mode "On", with the newly created program.

QIP TIPS
--------
Using <Shift><F10> in the Calculator prompt to create a simulation program 
transforms each CALCulation in the calculator's stack into a CALC() command 
(see Appendix A), the syntax of which is CALC('...') with the arguments
enclosed in SINGLE quotes.  

If you have a calculation in the stack of the form C1R5 = "Hello" in
DOUBLE quotes then the CALC command created will be CALC('"Hello"'), which 
will execute correctly because there is no confusion or ambiguity with quote
marks.  If however, your calculation is of the form C1R5 = 'Hello" in SINGLE
quotes then the CALC command created will be CALC(''Hello''), and will not 
execute.
Even though C1R5 = 'Hello' in SINGLE quotes is legitimate as a stand-alone
calculation, it will not work as part of a SIMULATION.


3.1.2  ALARM CLOCK
------------------ 
The ALARM CLOCK option is a simple one-message-at-a-time reminder 
feature.  Given a date, a time, and a message, QIP will pop up a window 
with your message and beep at the specified time.  For example:

              +------------- Alarm Clock -------------+
              | Date:   ....................          |
              | Time:   ....................          |
              | Message:............................  |
              |                                       |
              | F10:execute   ESC:cancel    F5:hide   |
              +---------------------------------------+
  
                              Page --29-- 

The Date field defaults to the current day so that pressing <Enter> at the 
Date prompt will automatically use the current date.  You can enter a date in
the current date format or use date expressions such as TODAY() or DATE(). 
You may not enter an alarm date prior to the current day.

The Time prompt has no default, therefore you must enter a valid time.  Note
that the time format used for the Alarm clock (HH:MM or HHMM) is slightly 
different from the time formats used in calculations.  For convenience, 
seconds are omitted in Alarm clock time specifications (e.g. 15:16 or 1516 
will be interpreted as 15:16:00, 3:16 in the afternoon, instead of 00:15:16,
15 minutes 16 seconds past midnight). 

You may also use one of QIP's time functions to specify the alarm time such 
as MTIME(NOW,15) (15 minutes from now). You may not enter a time earlier than
the current time on the current day (the time may be earlier than the current
time if the date is later). 

Alarm messages may be up to 30 characters long.

When the alarm goes off it will pop up a window with your message and beep 
to get your attention -- you must then press <ESC> to close the window and 
clear the alarm time and message.  The ALARM CLOCK stores only one message at
a time, setting it with a new date or time overrides any existing (or pending)
alarm.  An example ALARM message is shown below.

     +-------------------------------------+
     | ALARM Date: 02/15/1990  Time: 16:45 |
     | ET Phone Home                       |
     |                                     |
     | F10:Snooze   ESC:cancel             |
     +-------------------------------------+

Pressing <F10> is similar to the snooze button on a real alarm clock.  
The Alarm Clock will wait five minutes (snooze time set in QSETUP) and notify
you again.


3.1.3  TABLE MODE / TEXT MODE
-----------------------------
This option toggles between TEXT and TABLE modes (identical to <F8> key).  
Selecting this option will switch from the current mode into the other.  See
section 2.6 for a detailed explanation of TEXT and TABLE modes. 

When you are in TEXT mode and the cursor is inside a table you will go 
directly into TABLE mode in that Table.  If the cursor was not inside a table,
The Table menu will be opened with the cursor on the "Create" option so you 
can easily enter the information needed to create a new table, or you can 
move down to the "Goto" option to move to an existing Table.  


3.1.4  DOCUMENT and PROGRAM BUFFERS
-----------------------------------
The ACCESS menu is also sensitive to the current buffer and will modify its 
displayed options to let you switch form one to the other.  When you are in 
the DOCUMENT buffer, the ACCESS menu displays the Programs option.  When you 
are in the PROGRAM buffer the menu shows the Document option.  Note that when
you are in the PROGRAM buffer, both Programs, Document are available. 
  
                              Page --30-- 

There are no restrictions on switching buffers -- you may freely switch
between the buffers in any order.  If you select the Programs option (from 
either the DOCUMENT or PROGRAM buffers) the PROGRAM menu will be opened 
automatically.

 
3.1.5  PROGRAMS
---------------
Selecting this option opens the Programs menu.  Program options include the 
creation, editing, listing, and executing of QPL programs.  QPL programs may
also be executed directly (from the Document buffer) by selecting their
"HOT KEY" (4.2).  Note that these "HOT KEYS" take precedence (override) the
normal QIP definition of those keys.

        +-----------------+
        | List            |
        | eXecute         |
        | Edit            |
        | Create          |
        +-----------------+

All Programs menu options bring up the Program List window to help you select
the name of the program you want to use.  This prompt box is functionally 
identical to a Directory listing (see section 3.5.8) except that it lists QPL
program names and their "HOT KEYS".

Example:
   +--------------- Program Titles:  EDIT ----------------+
   | Program name: *.........                             |
   |                                                      |
   | ENTER:accept  ESC:cancel  TAB:programs               |
   +------------------------------------------------------+
   +------------------------------------------------------+
   | PROG1  ()           DEMO    (~D)        FORM-1   ()  |
   | SAVE   (^S)         BACKUP  ()                       |
   |                                                      |
   +------------------------------------------------------+


LIST
Selecting List opens a Program titles window and lists all existing QPL
programs and their assigned "HOT KEY".

EXECUTE
Selecting the eXecute option lets you choose which QPL program you want to 
run.

EDIT
Choosing the Edit option lets you specify the name of an existing QPL
program you want to Edit.  Once you have selected the program you will be 
placed in the PROGRAM buffer with the cursor placed on the first line of the 
program ready for editing.

CREATE
The Create option is slightly different from the other Program Menu options 
in that the Program Titles window cannot list programs which have not yet been
Created.  For the Create option only you must specify an actual program name.
QPL program names may be a maximum of 10 characters.  Once you have entered
the program name you will be placed in the PROGRAM buffer with the cursor on 
the first line of the new program.
  
                              Page --31-- 
 
QIP TIP
-------
For the EDIT and CREATE options on the Program menu, entering a "." (period)
on the file name prompt will move you directly to the Program Buffer.

Note also that any QPL program can be "Exported" (section 3.5.7) to a disk 
file and then "Imported" (3.5.6) into another Document.


3.1.6  SIMULATION
-----------------
Simulation enables or disables the execution of a QPL program whenever a cell 
is changed during table editing.  When Simulation is "On" a QPL program will 
automatically execute whenever a table cell value changes.  If Simulation is
currently disabled, then selecting Simulation will bring up the Simulation
prompt box.

          +--------------- Simulation -----------------+
          | Simulation program name:.................. |
          |                                            |
          | F10:execute   ESC:cancel   F5:hide         |
          +--------------------------------------------+

You must enter the name of an existing program to the Simulation program name
prompt.  Simulation programs may be created and edited like any other QPL 
program (see section 3.1.5 on accessing the Program buffer) or can be created 
by pressing <Shift><F10> in the QIP Calculator.

To create a Simulation with the Calculator you first perform any series of
calculation(s) you want on your data.  Pressing the <Shift><F10> key will 
automatically turn the list of calculations you entered into a QPL program.
This program can be used as-is or edited like any QPL program.

The range of functions available to the Simulation program is the same as 
any QPL program (Appendix A) you may use any of the Date/Time, QPL system 
access functions, string, mathematical, and financial functions built into
QIP (see Appendix B).

QIP TIPS
--------
There are several shortcuts available for moving between buffers and
switching modes.
   The <F8> key can be used to switch between TEXT and TABLE modes.
   The <Ctrl>\ (Control Backslash) key also switches between TEXT and 
       TABLE modes.
   The Goto key <F7> can be used to move to any location or table in
       a buffer or to switch between TEXT and TABLE modes.
   The <Shift><F7> key will put you directly into the DOCUMENT buffer 
   The <Shift><F4> key will display the PROGRAMS menu.

  
                              Page --32-- 
 
                      3.2  B L O C K  M E N U 

       DOCUMENT            PROGRAMS
    +------------+      +------------+
    | Delete     |      | Delete     |
    | Copy       |      | Copy       |
    | Move       |      | Move       |
    | Paste      |      | Paste      |
    | Yank       |      | Yank       |
    +------------+      +------------+

The BLOCK menu is used to perform operations on marked ranges of data 
(see section 2.3.4 for more detail on marked ranges).  For all the block 
operations, with the exception of Paste, you can either mark a block 
first then choose the operation, or choose an operation first then mark 
the block.


3.2.1  DELETE
-------------
The Delete option deletes blocks of text in a single operation.  If there is
a range of text marked when you select the Delete option that text is 
immediately deleted.  If there is nothing currently marked when you select 
Delete then "Delete What?" appears on the reminder line.

The current cursor position is used as the starting position of the range.
You can use any of the cursor positioning keys to move the cursor to the end 
position.  The marked text will be highlighted so that you can easily see 
exactly what is marked.  The <F10> key finishes the marking operation and 
deletes the marked text.  As with all QIP commands pressing <Esc> at any time
aborts the operation and clears the marks.

A copy of the Deleted text is also written to the Work area and may be Pasted 
back into the Document buffer as often as you wish (with the paste key <F6>).


3.2.2  COPY
-----------
Copy will make copies of marked ranges of text anywhere within a buffer.  Like
the other Block menu options you may mark a block of text before selecting the
Copy option or select Copy first and then mark the text.  

If there is an existing marked block when you select Copy then the marked text
will be immediately copied to the current cursor position with no further 
prompting.

When you select Copy with no block marked the "Copy What?" prompt appears on 
the reminder line.  You may use any cursor movement keys to move the cursor to
a new position.  When you are finished marking text press the <F10> key, and 
the "Copy To where?" prompt will be displayed on the reminder line.  Use the 
cursor movement keys to put the cursor where you want the marked text to be 
inserted and press the <F10> key to perform the copy operation.

A copy of the marked text is also written to the Work area and may be Pasted 
back into the Document buffer as often as you wish (with the paste key <F6>).
  
                              Page --33-- 

3.2.3  MOVE
-----------
The Move option is almost identical to Copy.  The only difference between them
is that Move deletes the block of marked text from its original position after
it has been inserted into the new position.  The sequence of operations and 
use of keys is identical to Copy.


3.2.4  PASTE
------------
The Paste option is used to immediately copy a marked range of text from the 
Work area into the Document buffer.  Paste differs from Delete, Copy, and
Move in that there must be something in the Work area before you select the 
Paste option. 

Generally Paste will be used in conjunction with the "Yank" option which is
used to copy a range of text into the Work area.


3.2.5  YANK
-----------
Yank is used to write blocks of text to the Work area and leave them marked 
for subsequent use by the Paste option.  The Yank option is identical to the
Copy option with the exception that it copies ONLY to the Work area. 

Note that the Block options always OVERWRITE the current contents of the 
Work area.

Although Paste and Yank are generally used together, Paste will actually use 
whatever is in the Work area, not necessarily what was last "Yank"ed.


QIP TIP
-------
The <F6> (paste key), <Shift><F6> (yank key), and <Ctrl>Y (delete line key)
are very useful shortcuts for some of the BLOCK options.  For example, to 
quickly move or copy a single line, you can delete it or yank it (<Ctrl>Y,
or <Shift><F6>)then paste it back (<F6>) somewhere else (as many times as you
need).


VERY IMPORTANT POINT
--------------------
You may mark a range containing a table and perform any of the BLOCK options
on that range, however, a table copied as TEXT will no longer be recognized by
QIP as a TABLE.  Notice also that the table ruled-lines are NOT copied.

  
                              Page --34-- 
 
                       3.3  C O L U M N  M E N U

          DOCUMENT    
      +--------------+
      |  Lines       |
      |  Delete      |
      |  Insert      |
      |  Width       |
      |  Attributes  |
      +--------------+

The Column menu is available only in the DOCUMENT buffers and only in TABLE 
mode.  It can be used for performing block operations on Tables, setting or 
modifying table column widths and attributes, and managing ruled line columns.

Note that all Column menu options work with either the CURRENT column (by 
default) or a marked range of columns.

3.3.1  Lines
------------
Lines is used to manage the ruled-line columns in a Table.  Vertical ruled 
lines in a Table are actually one-character-wide columns and are treated as
data columns.  For example, if your original Table had column 1 as [Name] and
column 2 as [Address] and you inserted a ruled-line column between them, the
ruled line would be column 2 and [Address] would become column 3.

     +----------+
     |  Insert  |
     |  Append  |
     |  Delete  |
     +----------+

Use the Lines Insert option to insert a ruled-line column to the left of the
current (or marked) column.  Use Lines append to append a ruled-line column to
the right of a column.

For single columns the Lines Delete option will first try to delete a ruled-
line column on the left.  If there is not a ruled line on the left it will 
delete the ruled-line column on the right, if one exists. 

The Lines options work similarly on a marked range of columns.  The Insert 
option will insert ruled lines to the left of all the columns in the range.
The Append option will insert ruled lines to the right of each column in the 
range.  The Delete option will delete all ruled lines between the columns in 
the marked range.  

As a special case, if the marked range includes all the columns in a table 
the Insert, Append, and Delete options insert or delete ruled line columns 
throughout the table. including the extreme left and right edges.

 
3.3.2  DELETE
-------------
The Delete option will delete either a marked range of columns, the current
column (the default when no range is marked).  The columns which will be 
deleted are highlighted so you can see exactly what will be deleted, and a 
verify prompt will be displayed in the upper right corner of the screen.
  
                              Page --35-- 

     +-------------------------+
     |  Delete marked area: .  |
     |  YES:  NO:  ESC:cancel  |
     +-------------------------+

You must respond with either Y, N, or <Esc>.  No other keys are accepted.  A 
Y means YES, delete the marked column(s).  An N or an <Esc> means NO, do not 
delete the marked column(s), abort the Delete operation and exit the Column 
menu.


3.3.3  INSERT
-------------
The Insert option is used to insert or append new columns into a Table.  When 
you select the Insert option the INSERT/APPEND prompt box will appear.

+---------------- Insert/Append Column(s) --------------------+
| Width(s) of Column(s) to insert (Default = 10):             |
| ..........................................................  |
|                                                             |
| Append       Off                                            |
|                                                             |
| F10:execute     ESC:cancel      F5:hide                     |        
+-------------------------------------------------------------+

The INSERT/APPEND prompt box lets you specify the width(s) of the new 
column(s).  If you specify a single width value, then one column will be 
inserted or appended.  If you specify more than one width value, then more 
than one column will be inserted or appended.

If Append is "Off" then all column insertions will be to the left of the 
current or marked column(s). If Append is "On" then all insertions will be to
the right of the highlighted column(s).

If there is a range of columns marked when you select Insert then all 
INSERT/APPEND operations will apply to the entire range. The new columns will
be inserted to the left or appended to the right of each of the columns in the
range.  


3.3.4  WIDTH
------------
The Width option is used to change the width(s) of column(s) in a Table.  New
width values are entered through the CHANGE COLUMN WIDTHS prompt box.  You 
must enter at least one width value, there is no default for this prompt.

         +-------------- Change Column Widths --------------+
         | New column width(s)?:                            |
         | ................................................ |
         |                                                  |
         | F10:execute  ESC:cancel  F5:hide                 |
         +--------------------------------------------------+

The Width option will operate on the current column (by default) or on a 
marked range of columns.  If there are several columns marked and you then 
enter a series of width values, each successive width will be applied to one 
column in the range proceeding from left to right. If you specify fewer widths
than the number of columns, then the remaining columns will all use the last 
  
                              Page --36-- 
 
width value.  Entering more widths than the number of columns will cause an 
error.

For example, if columns 1, 2 and 3 are marked:

  Specify new widths: 5,10,5   -  Columns 1 and 3 will be 5 characters wide
                                  and Column 2 will be 10 characters wide.

  Specify new widths: 5   -  Columns 1, 2, and 3 will all be 5 characters 
                             wide.

VERY IMPORTANT POINT 
--------------------
If you specify a width narrower than the data currently in the column, data 
will be truncated (and lost forever) without warning.

 
3.3.5  ATTRIBUTES
-----------------
The Attributes option lets you set or change column data attributes. The 
column attributes control how data is stored and how it is displayed on the 
screen, but do not restrict how the data may later be processed.

       +---------------------+
       | Numeric             |
       | Alpha         On    |
       | Date                |
       | Time                |
       | Justify       Left  |
       +---------------------+

When you open this menu the attributes of the current column are shown on 
the menu.  If you have marked a range of columns the attributes of the first 
column in the range are used.

The Attributes menu is slightly different than most other QIP menus in that 
you use <F10> to close the menu and perform the requested operation(s).  This
is so that you can set or change more than one attribute at a time without 
having to close and re-open the Attributes menu.

You may choose any one of Numeric, Alphabetic, Date, or Time -- they are 
mutually exclusive.  Data with any of those attributes may be justified to 
the left, to the right, or centered.

Selecting the Numeric attribute opens up the NUMERIC ATTRIBUTE prompt box.

        +--------- Numeric Attribute ----------+
        |  Number of decimal places (0-15): 0. |
        |                                      |
        |  Rounding         Down               |
        |  Comma            Off                |
        |                                      |
        |  F10:execute  ESC:cancel  F5:hide    |
        +--------------------------------------+            

The Number of decimal places can be from 0 to 15 (the number of places to the
right of the decimal point).  The current column attribute values are shown
on the prompt and will be used as the default.
  
                              Page --37-- 

Rounding of decimal data can be one of "UP", "DOWN", or "NEAREST".  For 
example, if your data is 3.57 in a two decimal place column, then Rounding 
"UP" will display 3.58, Rounding "Down" will display 3.57, and Rounding 
"NEAREST" will display 3.58

The Comma toggle controls the display of commas in numeric data (e.g. 
1,000,000 vs. 1000000).

Notice that column numeric attributes are "encoded" on the Status Line.  For 
example, if Comma is set to "OFF", the word "Rounding" is displayed followed 
by one of "U", "D", or "N" and a number representing the number of decimal 
places.

   Rounding: U3   -  Rounding is "UP" with 3 decimal places
   Rounding: D10  -  Rounding is "DOWN" with 10 decimal places
   Rounding: N0   -  Rounding is "NEAREST" with 0 decimal places

When Comma is set to "ON", one of "U", "D", or "N", the number of decimal 
places, and the word "Comma" are displayed. For example:

   U0, Comma  -  Rounding is "UP" with 0 decimal places and commas
   D12, Comma -  Rounding is "DOWN" with 12 decimal places and commas
   N2, Comma  -  Rounding is "NEAREST" with 2 decimal places and commas

VERY IMPORTANT POINT
--------------------
Any "rounded off" or "truncated" digits will be lost (irretrievably) without 
warning.  Setting the attribute of high-precision data to fewer decimal place
accuracy changes the ACTUAL VALUE stores not just its displayed value,  re-
setting the attribute back to a higher number of decimal places will only pad
with zeros to the right.

The Alpha attribute signifies free-format -- the data is stored and displayed
just as it was entered.

The Date and Time attributes are used to store and display data in the current
(user settable) date and time formats.  See Appendix D on the QSETUP program 
for more detail on QIP's date and time handling. 

Examples: 01/10/1989, 89-01-10, 08:55:00, 08.55.00

Data within a cell may be right or left justified, or centered regardless 
of the data attributes assigned.  Even Numeric, Date, and Time 
data may be centered or left justified.
  
                              Page --38-- 
 
                     3.4  E F F E C T S  M E N U

                 DOCUMENT
        +-----------------------+
        |  Priority        Data |
        |  default All          |
        |  Underline       Off  |
        |  Highlight       Off  |
        |  Expand          Off  |
        |  Red                  |
        |  Green                |
        |  Yellow               |
        |  Blue                 |
        |  Magenta              |
        |  Cyan                 |
        |  Default color   On   |
        +-----------------------+

The Effects menu options control how data is displayed on the screen and on 
printouts.  The Effects options allow you to set and change characteristics 
such as Highlighting, Underlining, and color (within any limits imposed by 
your monitor).  All of the Effects options can be used to set effects for new 
data or to set attributes for marked ranges of text or tables.  The current 
effects settings are displayed in the effects window near the bottom right 
edge of the screen.

The Effects menu, like a few others in QIP, uses the <F10> key to close the 
menu and perform the specified operations.  This is so you can easily modify 
several effects at one time (e.g. turning off Underline and setting Highlight
and Red) without having to exit and re-opening the menu for each change.


3.4.1  PRIORITY
---------------
Priority is the one of the most important of all the Effects options. Setting 
Priority to "As Set" means that all text and table data entered will have 
those characteristics explicitly set from the Effects menu.  

Setting Priority to "Data" means that new text (insert mode only) will use
the effects of the data currently under the cursor.

As an example, assuming INSERT mode, with Green and Expanded as the current 
effect selected on the Effects menu, and Red text (or table) data, then any 
new data INSERTED will be Green and Expanded if Priority is "As Set", and Red
if Priority is set to "Data". 

When insert/overwrite mode is set to "overwrite" then the new text will ALWAYS
use the effect of the original data.

QIP TIP
-------
Note that Expanded effect text is displayed as two characters, the character
you typed and a special expansion character (hard space).  This is to simulate
what will actually be a double width character when printed.

Note also that when overwriting with Expanded effect text, it will overwrite
TWO characters at a time.
  
                              Page --39-- 

3.4.2  DEFAULT ALL
------------------
Selecting default All will reset all effects to their current defaults. This
is an easy way to set several variables with a single keystroke.


3.4.3  UNDERLINE / HIGHLIGHT / EXPAND
-------------------------------------
You may set any combination of these.  They are independent of each other and
of color.


3.4.4  Red/Green/Yellow/Blue/Magenta/Cyan/White/Black/Default color
--------------------------------------------------------------------
These are used to set the display color.  You may choose any one of them.  The
text color is always Default until you choose a new one. All data in QIP has 
an effect, even if it is only Default color.

The default foreground and background colors are set externally with the 
QSETUP program, the remaining six (plus default) are displayed on the menu.
The list of colors may therefore change, but there will always be seven 
available.
  
                              Page --40-- 
 
                        3.5  F I L E  M E N U 

         DOCUMENT             PROGRAM
     +---------------+    +-------------+
     |  Quit         |    |  Quit       |
     |  Open         |    |  Save       |
     |  Save         |    |  Import     |
     |  Restore      |    |  Export     |
     |  Write As     |    +-------------+
     |  Import       |
     |  Export       |
     |  Directory    |   
     |  DOS Commands |   
     +---------------+

The FILE menu options give you access to QIP's document and file handling 
features.  Document Save and Restore, Import and Export of data files in ASCII
or WORDSTAR format, and access to DOS commands are all File menu options.

Note that most File menu options which require a file name allow you to choose
a file from a directory window with a mouse or with the arrow keys.  If 
however you choose to type in the file name you must be sure to enter a valid
DOS path and file name.


3.5.1  QUIT
-----------
Use Quit to exit from QIP (or <Alt>X).  Selecting Quit brings up a verify 
prompt box that gives you the option of saving any changes as you exit.

        +-------------------------+
        |   Save changes?: ..     |
        |                         |
        |   YES: NO: ESC:cancel   |
        +-------------------------+

Answering Y means YES, save all changes and exit QIP.  Entering an N means NO,
do not save changes before exiting.  Your file will be the same as before you
began editing.  Pressing <Esc> means ABORT the Quit option and return to QIP.


3.5.2  OPEN
-----------
Open allows you to save any changes to the current document (optional) and 
open a new document.  Open first displays a directory prompt box to let you 
"browse" through your directories and files so you can easily choose the file
to open.  You can either type in a file name at the "FILE" prompt and press 
<Enter> or hit <Enter> in the file window to choose the highlighted file.  
Refer to the Section on the Directory option (3.5.8) for a detailed 
description of how to "browse" through directories and use the <Pgup>, <Pgdn>
and ARROW keys (or mouse) to select files.
 
Open will then bring up a verify prompt box.

        +-------------------------+
        |   Save changes?: ..     |
        |                         |
        |   YES: NO: ESC:cancel   |
        +-------------------------+
  
                              Page --41-- 

Answering Y means YES, save all changes to the current Document before opening
the new document.  Entering an N means NO, do not save changes before opening
the new document.Your original file will be the same as before you began 
editing.  Pressing <Esc> means ABORT the Open option and return to QIP.

3.5.3  SAVE
-----------
Save makes an immediate backup copy of your document and returns you to QIP.


3.5.4  RESTORE
--------------
Restore re-loads the document from the backup copy.  The backup copy is 
current up to the last Save.  Any changes made to the document since then 
will be lost.  After Restore has re-loaded the document it returns you to QIP.


3.5.5  WRITE AS
---------------
Write as makes a copy of your document under a new name.  Write as first 
closes the current Document without saving any changes and without prompting.
If you want the current Document to retain any changes, you must explicitly 
"Save" before selecting the "Write As" operation. 

After closing the original Document, Write As opens a copy of the CURRENT 
Document (including any changes) as a NEW file with the given name and returns
you to QIP ready for editing the NEW file.  Any changes made to the Document 
from this point onward, are made to the NEW Document.

3.5.6  IMPORT
-------------
Import allows you to read ASCII or WORDSTAR format files into QIP.  Import 
prompts for the name of the file.  The file must already exist (it cannot be 
automatically created). 
Note: The current Directory is specified as part of the prompt title.

       +------------- Import   [C:\QIP] --------------+
       |  File: ....................................  |
       |                                              |
       |  ENTER:accept      ESC:cancel                |
       +----------------------------------------------+

Note that some graphics characters (8th bit on) may not be handled correctly.

3.5.7  EXPORT
-------------
Export allows you to write QIP format files to disk in either WORDSTAR or 
ASCII format.  Export displays the following prompt box.

    +------------------ Export  [C:\QIP] ------------------+
    |  Export Filename:        ..........................  |
    |  Range (Whole Document): ..........................  |
    |                                                      |
    |  Data Type to export           Both Text and Tables  |
    |  File Format                   ASCII                 |
    |                                                      |
    |  F10:execute   ESC:cancel   F5:hide                  |
    +------------------------------------------------------+
  
                              Page --42-- 

You will first be prompted to enter a name for the Export file.  If the file 
already exists a verify window will be displayed.

      +----------------------------------------------+
      | This File already exists - overwrite it?: .  |
      |                                              |
      | YES:   NO:   ESC:cancel                      |
      +----------------------------------------------+

Answering Y means YES, overwrite the file (this will destroy its original 
contents).  Pressing an N means NO do not overwrite the file, return to the 
prompt line to enter another file name.  Hitting <Esc> means ABORT the Export
option and return to QIP.

Next you will be prompted for a range of text and/or table data to Export.  
The default range is either the "Whole Document" or a "Marked Range" if one 
exists when you select Export.  Note that the prompt text ("Whole Document",
or "Marked Range") changes accordingly.  

The ranges accepted are identical to the Print Data range specifications
(3.7.1) on the OUTPUT menu. You may enter any combination of Pages and Lines
or Tables and Sections, but you may not specify Table data by row number.

The Data type to Export toggle allows you to select or suppress the output of
certain types of data.

The Export Format toggle is used to specify either ASCII or WORDSTAR format 
output.

 
3.5.8  DIRECTORY
----------------
The Directory prompt box lets you easily list the contents of your disk 
directories.  You can enter any valid DOS path or file specification on the 
prompt line.
Note: The name of the current Directory is shown as part of the title line.

   +------------- Directory List   [C:\QIP] --------------+
   | File: *.*.......................................     |  Directory
   |                                                      |  prompt
   | ENTER:accept  ESC:cancel  TAB:file list  PGDN:       |  box
   +------------------------------------------------------+
   +------------------------------------------------------+
   | QIP.EXE       QSETUP.TXT     QSYSTEM.V01             |  File
   | QSETUP.EXE    QPROG.V01      QPRTDEFS.V01            |  window
   |                                                      |
   +------------------------------------------------------+

When you enter a valid DOS path, the file window is opened and will display a
list of the files in that directory. The default Path is *.* (settable with
QSETUP), so just hitting <Enter> on the prompt line will display a list of 
all the files in the current directory.
  
                              Page --43-- 

Pressing the <Tab> key in the directory prompt box lets you "browse" through
the file list using the 4 <Arrow> keys.  The <PgUp> and <PgDn> keys display
the previous and next pages of the file list (if any). Pressing the <Tab> key
in the file window returns you back to the directory prompt box.


3.5.9  DOS COMMANDS
-------------------
Use DOS Commands to temporarily exit QIP and use DOS.  You may enter any valid
DOS command(s), however since QIP is a large program you may be limited by the
amount of memory available.  The exact amount of memory will depend on your 
system configuration.

         +-------------- DOS Command --------------+
         | Command:............................... |
         |                                         |
         | F10:execute   ESC:cancel   F5:hide      |
         +-----------------------------------------+

Entering a DOS command on the prompt line will temporarily exit QIP, clear 
the screen, and execute the DOS command you specified.  After the DOS command
has completed hitting any key will return you to exactly where you left off 
in QIP.

Just pressing <Enter> will put you into a DOS shell where you may execute as 
many commands as you wish.  Typing "EXIT" in the DOS shell will return you to
where you left off in QIP.
  
                              Page --44-- 
 
                     3.6  L A Y O U T  M E N U

               DOCUMENT
      +-----------------------+
      |  Edit ruler           |
      |  New ruler            |
      |  Delete ruler         |
      |  Page break           |
      |  Wordwrap          On |
      +-----------------------+

The Layout menu options are used to control screen layout and document 
formatting.


3.6.1  EDIT RULER / NEW RULER
-----------------------------
Rulers control the right and left margins, paragraph margins, and tab stops.
These two options give you control over the placing and modification of ruler
lines in the document.

All documents have at least one ruler.  New documents are created with a 
default ruler but you may Edit rulers or insert New rulers anywhere within the
document.

When editing rulers the cursor will be placed at the beginning of the nearest
ruler line above the cursor position and "Edit ruler, F10 to end, ESC to 
abort, SHIFT+F10 to Save as New Default" will be highlighted on the reminder
line.  

When you press the <F10> key your document will be reformatted up to the next
ruler (if any) according to the new ruler settings.  The <Shift><F10> key will 
save the edited ruler as the new system default (for all New Rulers and New 
Documents).  Pressing <Esc> will abort ruler editing and restore the original
ruler settings.

You can use the <Tab> key, the <Left Arrow>, <Right Arrow>, <Home>, and <End> 
keys to move along the ruler line.  The L, P, R, T, [, ] characters and the 
<Enter> key have a special meaning on ruler lines. The asterisks, digits, and
dots are just to help you count column positions. 

L, or "[" are used to mark the LEFT margin, and R, or "]" marks the RIGHT 
margin. There must be a minimum of 20 characters between the LEFT and RIGHT 
margin marks.  Note that when you enter an L or an R, special margin
characters appear instead of the L, [, R, and ].

The P marks the PARAGRAPH margin. This is separate from the left margin so 
you can set up indented areas easily.  When a text line ends with an <Enter> 
(hard carriage return), the next line of text will start at the PARAGRAPH
margin.  If the text line does not end with an <Enter> (soft carriage return)
the text will "wrap around" to the LEFT margin.

Note that a "W" displayed at the right-hand end of the ruler line indicates
that wordwrapping is "ON".  If no "W" is displayed wordwrapping is "OFF".  
Please refer to section 3.6.6 for more detail on the "Wordwrap" toggle.
 
The T character marks a TAB stop.  When you are finished with ruler editing
and press <F10> or <Shift><F10>, TABS will be automatically replicated out to
  
                              Page --45-- 
 
the right margin using the same spacing as the last TAB stop entered (if any).
For example, with TABS set at columns 5, 10, and 18.  The last spacing is 8
characters so TABS will be inserted automatically EVERY 8 COLUMNS from 26 out
to the right margin.  If there are no TABS set, none will be automatically 
created.

Use the <Space Bar>, or <Del> key to erase margin or tab marks. If you erase
the LEFT margin mark it automatically moves to the left edge of the document.
Similarly if you erase the RIGHT margin mark it is automatically moved to the
maximum width of the document until you must then use the L, [, R or ] keys 
to reset them.

You should notice that when you are in TEXT mode, TABLES have their own rulers
whose RIGHT margins are exactly the same width as the Table.  If you want to 
create text to the right of a table you will need to edit the ruler which 
controls that area and extend it.


3.6.2  DELETE RULER
-------------------
Use Del ruler to delete ruler lines.  When you delete a ruler, the document 
will be reformatted according to the next PREVIOUS ruler.  You may not delete
the first (topmost) ruler.


3.6.3  PAGE BREAK
-----------------
This will insert a hard page break into your document BEFORE the current line.
Note that the <Ctrl>P key will also insert a hard page break into your 
Document, but AFTER the current line.

These can be used to override QIP's soft page breaks.  Text or Tables will not
wrap over a hard page break.  Instead the hard page break will be "pushed" 
down as text is inserted so that there will always be a new page at the point
you specified.
 
You can change soft page breaks into hard page breaks, and vice versa, with
either the <Ctrl>Y, or <Del> key.  If you change a hard page break into a
soft page break, your Document will automatically be reformatted (text will
wrap into any "empty" space before the page break line).

QIP TIP
-------
When text is deleted, lines "wrap up" from the page below one line at a time.
This is fine for Text, and adjacent Sections of a Table, but is not correct 
for the first line of a Table or Sections separated by text lines.  

Many Tables will have a header line (Table title), and all Tables will have 
column header(s), and ruled lines which should not "wrap" one line at a time 
(you would not want to ses the Table header, one ruled line, and a column 
header on one page, and the rest of the Table on another page).

In these cases (when the first line of a page is part of a Table and the lines
above it are Text), QIP will automatically insert a hard page break line above
the Table, and will not wrap the table across it as you delete text on a page
above a table.  You may, in these situations have to manually change the hard
page breaks into soft page breaks by using <Ctrl>Y, or <Del> as described in
section 3.6.3 above.
  
                              Page --46-- 

3.6.4  WORDWRAP
---------------
This is used to toggle word wrapping "ON" or "OFF".  If Wordwrap is "OFF" 
then text will wrap from line to line by characters instead of whole words.  
Conversely, when Wordwrap is "ON" text will wrap by whole words.  Wordwrapping
uses only the space character as the delimiter between words.

When wordwrapping is "ON" a capital "W" will be displayed at the right end of
the ruler line.
  
                              Page --47-- 
 
                     3.7  O U T P U T  M E N U 

           DOCUMENT                PROGRAM
     +------------------+    +------------------+
     | Print Data       |    | Print Data       |
     | Format Page      |    | Format Page      |
     | To Where         |    | To Where         |
     | Colors and Fonts |    | Colors and Fonts |
     | Merge Print      |    | Merge Print      |
     | Save as Defaults |    | Save as Defaults |
     | Restore Defaults |    | Restore Defaults |
     +------------------+    +------------------+

The Output Menu options control the printout of QIP text and table data, as 
well as Merge Printing and QPL program listings.  Most of the parameters that
affect printouts can be set here, although some may only be changed externally
with the QSETUP program.  For convenience the options have been grouped 
together and ordered with the most often changed items first.


3.7.1  PRINT DATA
-----------------
Print Data is used to do the actual printing of text, table, and QPL programs.
Controlling information is entered through the Print Data prompt box.

  +----------------------- Print Data --------------------------+
  | Range (Whole Document): ..................................  |
  | Number of copies:               1...                        |
  |                                                             |
  | Data type to print              Both Text and Tables        |
  |                                                             |
  | F10:print  SHIFT+F10:exit no print  ESC:cancel  F5:hide     |
  +-------------------------------------------------------------+

Use Range to print to specify what you want to print.  You may enter any valid
QIP range specification for PAGE, LINE, TABLE, or SECTIONS. You may not 
specify a range of ROWS as part of a TABLE range, however you can print a 
range of table rows by using their corresponding PAGE and LINE numbers.  Refer
back to the Overview section on Range Specifications for a more detailed 
explanation (section 2.8).  

When there is marked text in the current buffer, the Range to print default
changes to "Marked Range".  Pressing <F10> will print the marked block of 
text.  Note that Range to print accepts only whole lines.  Even though the
marked range may begin or end in the middle of a line, the entire line will
be printed.
 
QPL programs are printed by specifying the name of the program enclosed in 
angle brackets e.g. <PROG1>.  

The Number of copies defaults to one.  You may enter any number of copies up 
to 99.

Using the Data type to print toggle you can choose to print both the Text and
Tables within the range or you may choose to print only the Text or Table 
portions.
  
                              Page --48-- 

3.7.2  FORMAT PAGE
------------------
The parameters for controlling page layout and formatting are set from the 
Format Page prompt box.

       +-------------- Format Page --------------+
       |  Left Margin (0 to 20 chars):...        |
       |  Top Margin (0 to 20 lines): ...        |
       |  Start Page Number:          ........   |
       |                                         |
       |  Justification            Standard      |
       |  Graphics Characters     Translated    |
       |                                         |
       |  F10:execute   ESC:cancel   F5:hide     |
       +-----------------------------------------+

The Left margin value is specified in units of characters (1/10 of an inch 
per character).  The right margin is not a Layout menu option, it can be set 
to the required position using ruler lines in the document.

The Top margin is in units of lines (single spaced, about 1/6 of an inch for 
most printers).  The bottom margin is not a Layout option, it is calculated
internally by QIP (bottom margin = paper length - lines per page - top margin).  

The Start page number defaults to one, but may be set to any value (up to 
32767).  This is useful when you need to print various sections or chapters of
a document separately, and still get the page numbering in the correct order.
Note that this is the start number for PAGE NUMBERING and is not related to 
the number of pages that will be printed.
 
QIP supports left page/right page printing for document pages that will be
printed on two sides or bound together as a book.  The "Justification"
toggle can be set to "Alternating" to shift the printed text to the right
on odd-numbered (right hand) pages.

It does not change your margin settings, the whole printable area is shifted
to the right.  The distance it is shifted defaults to five characters (about
1/2 inch), and can only be set externally with the QSETUP program.

GRAPHICS CHARACTERS
------------------
IBM PC's and compatibles all support some level of screen graphics. QIP uses
this capability for the ruled lines in tables, the different shades in bar 
graphs, and other special characters displayed on the scale lines.  

Most printers also support graphics character printing, but not all printers 
use the same codes as the IBM PC for the graphics characters. The Graphics 
characters option allows for three different methods of printing graphics 
characters, at least one of which will work with your printer.

Select "As graphics" if you have a 100% IBM compatible printer which uses the
same character codes as an IBM PC.  "As graphics" means that QIP will not 
alter the output character in any way.  The character codes used to represent
the character on the screen are sent as-is to the printer.
  
                              Page --49-- 

If your printer supports graphics printing but uses different character
codes then select "Translated" and QIP will use the codes defined by you in
QSETUP.TXT.  For each IBM graphics character you will have to put in the 
equivalent code for your printer (all 56 of them, but you only have to do it
once).

The third method (and perhaps easiest to start with) is "Generic".  The
"Generic" method uses simple non-graphics characters that are the same basic 
shape as the true graphics characters and which should work on all printers.
For example ruled-lines would be printed as

         +-------+----------+-------+
         |       |          |       |
         +-------+----------+-------+
         |       |          |       |
         +-------+----------+-------+

Note that the example translation codes in QSETUP.TXT are for this generic
set.


3.7.3  TO WHERE
---------------
The To Where options allow you select a printer and configure some of its 
characteristics.  To Where parameters are entered from the prompt box.

       +-------- Printer Configuration ---------+  
       |  Printer Selection:      Generic       |
       |  Output Data to:         Printer       |
       |  Eject extra pages       0             |
       |  Color Printer           No            |
       |  Sheet Feeder            Yes           |
       |  Wait between Pages      No            |
       |                                        |
       |  F10:execute  ESC:cancel  F5:hide      |
       +----------------------------------------+

QIP allows you to access any of three different printers.  The three choices
are made externally with QSETUP.  Within QIP you choose the one you want to 
use with the Printer selection option.  It will cycle between the three 
printers until you stop on the one you want.
 

OUTPUT DATA TO
Output data to lets you choose where to send the data.  The available choices
here are "Printer", "Disk file", or "Spooler".  When you send data  to a
"Disk file" the file will have the same name as the document from which it 
was printed, but with an extension of ".Pnn" (where nn is a two digit number
from 00 to 99).  Each time you send data to a disk file the number will be 
incremented so that you will not overwrite any saved data.

The "Spooler" option allows you to make use of the DOS background printing
capability.  When you send your data to the spooler it will print in the
background while you continue to work.  Spooler files are named similarly to 
disk files except that their extension is ".Snn".  Note that spool files are 
not deleted after they are printed so you will need to manage them yourself.
  
                              Page --50-- 

DOS requires that the resident part of PRINT.COM be loaded in order for 
background spooling to work.  QIP will always create the spool file with your
data, but if PRINT.COM is not loaded QIP will notify you that the file was 
created but could not be printed.


EJECT EXTRA PAGES
This option lets you control the number of pages ejected when your printout 
is complete.  QIP will always "advance" to the bottom of the last page 
printed.  You may set Eject extra pages to "0", "1", "2", or "3" pages.  This
can be quite convenient if you have a printer which requires you to eject 
pages before tearing off the paper.


SHEET FEEDER
Sheet feeder tells QIP whether you have a sheet feeder type printer or
whether your printer uses continuous (fan fold) paper.  A "Yes" means you
have a sheet feeder and QIP will use the special control codes you define in
QSETUP.TXT to load and eject the pages.  A "No" means you are using continuous
type paper (QIP will not use the control sequences from QSETUP.TXT even if 
they are defined there).

Note that only one set of codes is defined in QSETUP.TXT.  Although QIP allows
you to access three printers, you can define control codes for only one sheet
feeder.


WAIT BETWEEN PAGES
Many printers have a manual paper feed, or a single sheet feeder.  In order to
accommodate these types of printers set this toggle to "Yes" and QIP will 
prompt you with the message

       +-----------------------------------------+
       |  Put next sheet into printer - ready?:  |
       |                                         |
       |  Press any key to continue              |
       +-----------------------------------------+
 
and wait until you press a key before loading the next sheet into the printer.


3.7.4  COLORS AND FONTS
-----------------------
Use the Colors and fonts option to assign printer fonts to screen colors. 
Your first choice will be from a colors menu (Note that this list may change
depending on the default color, but that there will always be seven available
colors).

       +-----------------+
       |  Red            |
       |  Green          |
       |  Yellow         |
       |  Blue           |
       |  Magenta        |
       |  Cyan           |
       |  Default color  |
       +-----------------+
  
                              Page --51-- 

You may assign any or all of these colors to a printer font with the 
Colors and fonts prompt.
 
       +--------------- RED --------------+
       |  Letter Style           Upright  |
       |  Typeface               Draft    |
       |  Characters per inch    10       |
       |  Proportional Spacing   No       |
       |  Use on this Pass       Yes      |
       |                                  |
       |  F10:execute ESC:cancel F5:hide  |
       +----------------------------------+

For Letter style choose one of "Upright", "Italic", "Subscript", or
"Superscript".

The Typeface can be any one of "Draft", "Prestige", or "Courier".

Characters per inch may be any one of "10", "12", or "16".

Any of these may be proportionally spaced by setting Proportional spacing to
Yes".  Proportional spacing is turned off for all printing within tables since
it would affect the alignment of column data and ruled lines.  Note that 
selecting "12" or "16" character per inch type may also affect column 
alignment.

Note that all the above choices may be limited by what capabilities of your 
printer.  If you choose a font that is not available on your printer, the
closest matching font will be used instead.


USE ON THIS PASS
This may be toggled "On" or "Off" to suppress printing for a specific color.
If set to "Off" then spaces will be printed (in the correct spacing and 
character size) so you can print in two or more passes.  This is useful for
multi-pass printing on printers that require you change ribbons or cartridges
between fonts.


3.7.5  MERGE PRINTING
---------------------
Merge printing combines Text and Table data for printout.  It can be used to
generate form letters, invoices, stock lists, and similar reports. Text and 
Table ranges are entered from the Merge print prompt box. 

        +---------------- Merge Print -----------------+
        |  Page Range: ..............................  |
        |  Table Data Range: ........................  |
        |                                              |
        |  Use Effects            From Text            |
        |                                              |
        |  F10:execute   ESC:cancel   F5:hide          |
        +----------------------------------------------+

The Page range may be any valid QIP TEXT specification, but it must be in 
terms of PAGES and/or LINES.  You may not refer to TABLES, SECTIONS, or ROWS
as part of the Page range.  Similarly, the Table data range can be entered 
only in terms of TABLES, SECTIONS, and ROWS.
  
                              Page --52-- 
 
The Page range may refer to TEXT in any part of your document and may contain 
multiple range specifications separated by commas.  For example "P1,P2..4" or 
"P3L1..10,P5".  The Table data range may contain only a single range  speci-
fication.  For example "T1", or "SA", or "T3R1..100", or "T1S2..3".  One pass
through the Page range(s) will be generated for each row in the Table data 
range.

When you specify multiple page ranges they are processed one a time from left
to right.  As an example, with a Page range of "P1..3" and a Table data range
of "T1S1R1..10" a total of 30 pages will be generated, 3 pages from row 1, 3
pages from row 2, 3 pages from row 3, etc. in that order.

The way Merge printing works can best be described by means of an example.  
Given the text and table shown below:

Dear [TITLE] [last name],
    According to our records your account in the amount of $[Amt] is
more than [D] days overdue.  Please remit as soon as possible.

                                        Sincerely yours,

  +-------+------------+------------------------+------+----------+
  | TITLE | FIRST NAME |       LAST NAME        | DAYS |   AMT    |
  +-------+------------+------------------------+------+----------+
  | Mr.   |Peter       |Wallman                 |  103 |    407.85|
  +-------+------------+------------------------+------+----------+
  | Miss  |Sally       |Bolland                 |   95 |     27.66|
  +-------+------------+------------------------+------+----------+
  | Mr.   |Michael     |Jameson                 |  134 |   1028.39|
  +-------+------------+------------------------+------+----------+

Merge print will generate three form letters.  The first will look like this:

Dear Mr. Wallman,
    According to our records your account in the amount of $407.85 is  
more than 103 days overdue.  Please remit as soon as possible

                                        Sincerely yours,
 

Wherever a [column header] enclosed in square brackets appears in the text, 
the table data from that column (of each row) will be substituted when 
printed. As can be seen from the example there may be more than one 
substitution per line and the columns may be accessed in any order (or more 
than one time for each pass).

You can control the spacing and justification of the substituted data in the
following way:

     [A]      -  If there are no spaces between the column title and the []'s
                 then the Table data will be substituted "as-is".
                 
     [A    ]  -  If there is at least one space between the column title and
                 the RIGHT bracket then the Table data will be LEFT justified
                 within the number of spaces between the brackets.
                 
     [    A]  -  If there is at least one space between the column title and
                 the LEFT bracket then the Table data will be RIGHT justified
                 within the number of spaces specified.
  
                              Page --53-- 
 
     [  A  ]  -  If there is at least one space between the column title and
                 BOTH brackets then the Table data will be CENTERED within the
                 the space.
                 
Note that if the Table data is longer than the number of spaces specified, it
will be substituted "as-is".

If you need to use "[]" square brackets within your text the opening bracket 
must be immediately preceded by the "\" backslash character (there must be no
spaces between the "\" and the "[").  Closing brackets "]" do not need to be 
preceded by a backslash, but they must not occur within a column header.

Effects, may be taken from either the original Text or the substituted Table 
data.

Note the use of abbreviations in the [column header] names.


3.7.6  SAVE AS DEFAULTS
-----------------------
Selecting Save as defaults will make all the current OUTPUT setup values 
replace the existing defaults.  The next time you use QIP (even on a different
document) Output will use these values.


3.7.7  RESTORE DEFAULTS
-----------------------
Restore defaults replaces the current Output  settings with their last-saved 
(current default) values.  This is useful if you want to temporarily change 
some values -- You can then Restore them all in one operation instead of 
having to change them back one by one.
  
                              Page --54-- 
 
                     3.8  P R O C E S S  M E N U

             DOCUMENT
         +--------------+
         |  Update      |
         |  Sort        |
         |  subTotal    |
         +--------------+

The Process menu options are available only in TABLE mode.  The Process menu 
options are all conventional, yet powerful, functions for use on table data.


3.8.1  UPDATE
-------------
Update is an extremely useful and flexible option that allows you to Update 
or modify an existing table "in place".  You may enter up to three search 
(select) conditions.  For each condition you then specify one or more 
execution functions which will be applied whenever the search condition is 
satisfied.

   +----------------------- Update --------------------------+
   | Search Condition 1:                                     |
   | ....................................................... |
   | Update Function(s) for Condition 1:                     |
   | ....................................................... |
   | Search Condition 2:                                     |
   | ....................................................... |
   | Update Function(s) for Condition 2:                     |
   | ....................................................... |
   | Search Condition 3:                                     |
   | ....................................................... |
   | Update Function(s) for Condition 3:                     |
   | ....................................................... |
   |                                                         |
   | Verify                No                                |
   | Mode                  Section only                      |
   | Ignore case           No                                |
   | Wildcards (* or ?)    No                                |
   |                                                         |
   | F10:execute     ESC:cancel     F5:hide                  |
   +---------------------------------------------------------+

The Search condition is a logical expression (2.9.3).  You may refer to
items (2.8.1) in any Table position e.g.:

   C1 < 0
   [NAME] > "A" AND [NAME] < "N"
   C3 > C4 OR [OVERDRAFT] <> 0

Note that all search expressions MUST reference a DATA item from the CURRENT
Table.  You may not use any of the built-in functions on the Lefthand side of
a search condition (but you may on the right e.g C1 = TODAY).   

You may enter one or more UPDATE functions (separated by ";" semicolons) for
each search condition, e.g.:BELL(3); EFFECT([BALANCE],RED).  Update functions
may be "mixed and matched" except for "DELETE" which must be alone, and 
"REPEAT" which must be the last function on the line.
  
                              Page --55-- 

The following is a complete list of all Update functions:

Function name     Example(s)         Description
-------------     ----------         -----------
DELETE            DELETE             Deletes the CURRENT row
EDIT              EDIT(C6..8)        The user is placed in Table editing
                  EDIT([COMMENT])    mode and allowed to edit the specified
                                     columns in the CURRENT row.
REPLACE           REPLACE(C6,"Old string","New string")
                                     Replaces "Old string" with "New 
                                     string in the column specified.
                                     Note: Replace respects column widths
                                     and will truncate strings which are
                                     too long.
CALC            C3=C5*C2R4           General calculations.  Note that 
                C7=BGRAPH$(C3,0,100) although the result(s) are stored 
                                     in the CURRENT row, references may 
                                     be made to any row(s) in the Table.
EFFECT          EFFECT(C4..7,RED+HL) Sets the effect(s) on the specified   
                                     columns. Note the compound effect 
                                     specification RED+HL.
                                     Color modifiers may be any combination of
                                       HL  -  Highlight
                                       UL  -  Underline
                                       EX  -  Expanded
                                     If a Color is specified it MUST be first.
                                     e.g.:   RED+HL+UL  --  okay
                                             HL         --  okay
                                             HL+YELLOW  --  invalid         
BELL            BELL                 Rings a bell.  Note that N must be
                BELL(N)              0, 1, 2, 3, or 4 one of the special 
                                     predefined bell tones.
REPEAT          REPEAT               This will cause ALL the other update 
                                     functions on the line to be repeated 
                                     until the search condition is no 
                                     longer true.  This can be useful in 
                                     conjunction with EDIT when searching 
                                     for incorrect entries you want the 
                                     user to correct.

Once all Search conditions and Update functions have been entered the Update 
will be performed.

If you set Verify to "Yes" then each matching row will be highlighted and the
following verification window will be displayed:

      +------------------------------------------------------+
      | Update this row with:..(update function displayed).. |
      | Skip                                                 |
      | Continue without verifying                           |
      | Quit Update (ESC)                                    |
      +------------------------------------------------------+

Pressing <F10> will execute the update functions for the row and move to the 
next matching row (if any).  Selecting Skip will NOT apply the update 
functions and move to the next matching row.  Choosing Continue without 
verifying will set Verify to "No", the update will be performed WITHOUT 
further prompting.  Selecting Quit aborts the Update and returns to document
editing.
  
                              Page --56-- 

Note that any Update functions executed BEFORE selecting Quit will not be 
"undone".
 
If mode is set to "Section only", then UPDATE will process only the CURRENT 
section of the CURRENT table.

The Ignore case toggle is used to control how conditions and data items are 
compared and matched.  If set to "Yes" then case will be ignored and both 
upper and lower case letters will be treated as matching.  If it is set to 
"No" then an upper and lower case letter will not match.
 
The Wildcards toggle may be set either "Yes" or "No".  When you set Wild 
cards to "Yes" any wildcard character(s) (* or ?) in the search condition 
will be treated much the same way in which these characters are 
interpreted by DOS.  The "*" character will match any character(s) and the 
"?" will match any single character in the same position.


3.8.2  SORT
-----------
The Sort option performs a conventional multi-key sort operation on table 
data.  Unlike most of the other table data options Sort processes the data 
"in place".  No new table is created.

       +----------------- Sort -----------------+
       |  Key column 1:  .................      |
       |  Sort Order      Ascending             |
       |  Data Type       Alpha                 |
       |                                        |
       |  Key column 2:  .................      |
       |  Sort Order      Ascending             |
       |  Data Type       Alpha                 |
       |                                        |
       |  Key column 3:  .................      |
       |  Sort Order      Ascending             |
       |  Data Type       Alpha                 |
       |                                        |
       |  Mode            Section only          |
       |  Ignore case     No                    |
       |                                        |
       |  F10:execute   ESC:cancel   F5:hide    |
       +----------------------------------------+

Sort keys must be entered in order.  You must enter Key column 1 before moving
down to Key column 2 although you may go "backwards" and modify any previously
entered Key column or toggle before executing the Sort.  You may enter less 
than three sort keys but there must be at least one.

The Sort order toggle may be set to "Ascending" or "Descending" independently
for each of the three sort keys.

The Data type toggle can be set to either "Alpha" or "Numeric" for each key.
It will override the type of the actual data attribute just for the purposes 
of sorting.  Sort does NOT use the actual column data attribute when sorting.
  
                              Page --57-- 

If mode is set to "Section only", then SORT will process only the CURRENT 
section of the CURRENT table.

The Ignore case toggle is used to control how conditions and data items are 
compared and matched.  If set to "Yes" then case will be ignored and both 
upper and lower case letters will be treated as matching.  If it is set to 
"No" then an upper and lower case letter will not match.
 
Note that any text data to the right or left of the Table will NOT be moved 
as a result of a Sort nor will any ruled line rows.

VERY IMPORTANT POINT
--------------------
Due to the constraints of limited memory, the MAXIMUM number of rows that can
be sorted is 600 (about 10 sections).  This means that a table with more than
600 lines cannot be sorted. 

3.8.3  SUBTOTAL
---------------
subTotal performs a conventional multi-key subtotal function on SORTED data.
The calculated subtotals are placed "in-line" in their correct positions in
the original table.

  +---------------------- Subtotal -----------------------+
  | Key column 1:                  ............           |
  | Key column 2:                  ............           |
  | Key column 3:                  ............           |
  | Subtotal which column(s)?:                            |
  | ..................................................... |
  |                                                       |
  | Label for key column(s)                  "Subtotal"   |
  | Ruled line after major totals            No           |
  |                                                       |
  | F10:execute   ESC:cancel   F5:hide                    |
  +-------------------------------------------------------+

You must enter at least one Key column and you may not "skip over" one.  That
is, you are required to enter Key column 1 before Key column 2, and Key column
2 before Key column 3.  Note that, like any prompt, once a Key column has been
entered and accepted you may still go back and modify it before executing.

You may subtotal any or all table column(s) except those which have been
specified as key columns.  Note that subTotal handles non-calculated and ruled
line columns in a controlled way, i.e. maintains them in the results table.

The Label for key columns toggle may be set to either "Subtotal" or "Column 
Title".  If you choose "Subtotal" then the subtotal rows will be labeled 
"Subtotal 1", "Subtotal 2", and "Subtotal 3" corresponding to the three key 
columns (if specified).

The Ruled line toggle controls whether or not a ruled line row is inserted 
AFTER the subtotal row.  This toggle may be set to either "Yes", or "No".

QIP TIPS
--------
Since the Process menu options use only COLUMN numbers or ranges, when a 
prompt specifically asks for a column or column range you may use  a "1" or
"3..6,7,9" instead of "C1" and "C3..6,C7,C9".
  
                              Page --58-- 
 
                         3.9  R O W  M E N U

          DOCUMENT     
      +--------------+ 
      |  Lines       |  
      |  Delete      | 
      |  Copy        | 
      |  Move        |
      |  Insert      |
      +--------------+    

The Row Menu is in every way analogous to the Column Menu (section 3.3).  Row
ranges for block operations are all specified in identical fashion.  The two 
exceptions are that you cannot specify ROW widths or attributes, and that you
may Move and Copy rows.

Note also that rows will wrap over soft page breaks as they are inserted or 
deleted.  If another section of the same table already exists on the page then
the rows will wrap into it (forwards or backwards).  If no section exists then
a new one will automatically be created.

The selection of ROW Insert and Delete ranges is limited to a single section.
The destinations for ROW Move and Copy however may be any Section.

 
3.9.1  LINES
------------
Lines is used to manage the ruled-line rows in a Table.  Horizontal ruled 
lines in a Table are actually one-character-wide rows and are counted as data
rows.  Note that ruled line rows are ALWAYS ignored during processing.

     +----------+
     |  Insert  |
     |  Append  |
     |  Delete  |
     +----------+

Use the Lines Insert option to insert a ruled-line row above the current (or 
marked) row.  Use Lines append to append a ruled-line below a row.

For single rows the Lines Delete option will first try to delete a ruled-line
row above.  If there is not a ruled line above it will delete the ruled-line 
row below, if one exists. 

The Lines options work similarly on a marked range of rows.  The Insert option
will insert ruled lines above all the rows in the range.  The Append option 
will insert ruled lines below each row in the range.  The Delete option will 
delete all ruled lines between the rows in the marked range.  


3.9.2  DELETE
-------------
The Delete option will delete either a marked range of rows, or the current 
row (the default when no range is marked).  The rows which will be deleted are 
highlighted so you can see exactly what will be deleted, and a verify prompt 
will be displayed in the upper right corner of the screen.
  
                              Page --59-- 

     +-------------------------+
     |  Delete marked area: .  |
     |  YES:  NO:  ESC:cancel  |
     +-------------------------+

You must respond with either Y, N, or <Esc>.  No other keys are accepted.  A 
Y means YES, delete the marked row(s).  An N or an <Esc> means NO, do not 
delete the marked row(s), abort the Delete operation and exit the Row 
menu.

The Delete option is also used to delete entire sections.  If your marked 
range includes EVERY ROW in the section when you select Delete, then the 
following verify prompt will be displayed:

     +----------------------------+
     |  Delete entire Section: .  |
     |  YES:  NO:  ESC:cancel     |
     +----------------------------+

Responding with a Y, means YES, delete the entire Section.  An N or an <Esc> 
means NO, do not delete the Section, abort the Delete operation and exit the 
Row menu.

Note that deleting the last remaining row of a section (either as part of a
block delete, or singly with <Ctrl>Y, will also delete the entire section.


3.9.3 COPY
----------
Copy will copy the current row (the default if no range is marked) or a marked
range of rows.  Once you have selected Copy, the message "Move to destination
and press F10 (SH+F10 to append)" will be displayed on the reminder line.  You
can use any of the Table mode cursor movement keys to move to the destination
row, even into another Section or Table (assuming the Table format is the
same).

Pressing F10 will copy the original row(s) above the destination row, pressing
<Shift><F10> will copy below the destination row.

Note that a copy of the original rows(s) is automatically put into the Work 
area.


3.9.4 MOVE
----------
The Move option is very similar to the Copy option above except that it 
deletes the original row(s) BEFORE copying to the destination.  Move will 
move the current row (the default if no range is marked) or a marked
range of rows.  

Once you have selected Move, the selected row(s) are copied to the Work area
and deleted from Table, then the message "Move to destination and press F10 
(SH+F10 to append)" will be displayed on the reminder line.  You can use any 
of the Table mode cursor movement keys to move to the destination row, even 
into another Section or Table (assuming the Table format is the same).
  
                              Page --60-- 

Pressing F10 will copy the original row(s) above the destination row, pressing
<Shift><F10> will copy below the destination row.

Note that the marked rows are deleted BEFORE the destination is specified. If
the move operation fails for some reason, or you press <Esc> to abort the move
option, the deleted rows are not restored.  You must restore them yourself by
pressing the <F6> key to "paste" them back into the Table.


3.9.5  INSERT
-------------
The Insert option is used to insert or append new rows into a Table.  When 
you select the Insert option the Insert/Append prompt box will appear.

     +---------------- Insert/Append Row(s) ----------------+
     | Number of Row(s) to insert (Default: 1):  .......... | 
     |                                                      |
     | Append       Off                                     |
     |                                                      |
     | F10:execute    ESC:cancel    F5:hide                 |
     +------------------------------------------------------+

The Insert/Append prompt box lets you specify the number of rows to Insert. 
You may insert up to a maximum of 60 rows at a time. 

If Append is "Off" then all row insertions will be above the current or marked
row(s). If Append is "On" then all insertions will be below the highlighted 
row(s).

If there is a range of rows marked when you select Insert then all INSERT and
APPEND operations will apply to the entire range. The new rows will be 
inserted above or appended below each of the rows in the range.  

  
                              Page --61-- 
 
                    3.10  S E A R C H  M E N U

      DOCUMENT            PROGRAM    
    +-----------+      +-----------+ 
    |  Search   |      |  Search   | 
    |  Next     |      |  Next     | 
    |  Replace  |      |  Replace  | 
    |  Goto     |      |  Goto     | 
    |  Bookmark |      |  Bookmark | 
    +-----------+      +-----------+ 

The Search Menu is available only in TEXT mode, but in both buffers.  The 
Search Menu provides access to the Search and Replace options.  The Goto and 
Bookmark options allow you to move around documents quickly and easily.


3.10.1  SEARCH
--------------
Selecting this option brings up the Search prompt box.

      +----------------- Search -------------------+
      |  Search for: ............................. |
      |                                            |
      |  Direction                 Forward         |
      |  Ignore case               Yes             |
      |  Wildcards (* or ?)        Yes             |
      |  Full words only           Yes             |
      |                                            |
      |  F10:execute   ESC:cancel    F5:hide       |
      +--------------------------------------------+

The "Search for" string may be up to 25 characters long.  The previous search
string, if any, will be displayed on the prompt line as a default.

The search Direction may be toggled to either "Forward" or "Backward". 
"Forward" will search from the current cursor position to the end of the 
document.  "Backward" searches from the cursor position towards the beginning
of the document.

Ignore case may be set to either "Yes" or "No".  If set to "Yes" then upper 
and lower case letters will be treated as equal.  If set to "No" then upper 
and lower case will be considered unique.

Setting Wildcards to "Yes" means that the "*" and "?" asterisk and question 
mark characters will be treated as wildcard characters similar to the way 
they are by DOS.  The asterisk "*" will be interpreted as matching any string
of characters.  The "?" question mark will match any single character in that
position.

Toggling Full words only to "Yes" tells QIP to match the search string only 
when it is preceded and followed by a space.  Search strings embedded inside
longer words will not be matched.


3.10.2  NEXT
------------
This option finds the Next occurrence of the search string in the current 
search direction.  <Ctrl>L is a quick way to do the same operation.
  
                              Page --62-- 
 
3.10.3  REPLACE
---------------
The Replace option is very similar to Search (section 3.10.1).  The main
difference is that Replace will substitute a new string whenever it finds a 
match for the search string.  Selecting this option brings up the Replace 
prompt box.

      +------------ Search & Replace --------------+
      |  Search for :    ......................... |
      |  Replace with :  ......................... |
      |                                            |
      |  Verify                    No              |
      |  Direction                 Forward         |
      |  Ignore case               Yes             |
      |  Wildcards (* or ?)        Yes             |
      |  Full words only           Yes             |
      |                                            |
      |  F10:execute   ESC:cancel    F5:hide       |
      +--------------------------------------------+

The search and replace strings may be up to 25 characters long.  The previous
search and replace strings, if any, will be displayed on the prompt lines as
defaults. 

If Verify is set to "Yes" then Replace will prompt for verification before 
replacing a string.

       +------------------------------+
       |  Replace                     |
       |  Skip                        |
       |  Continue without verifying  |
       |  Quit Replace (ESC)          |
       +------------------------------+

Answering R, <F10>, or <Enter> means replace the string and move to the next
match if any.  An S means do not replace this string and continue to the next
match, for convenience the cursor will remain on the Skip option.  A C means 
replace this string and continue replacing strings without pausing for further
verification.  Entering a Q or <Esc> terminates the Replace option and returns
you to editing the document.

The meanings of the  Direction, Ignore case, Wildcards, and Full words only 
toggles are identical to the Search option.


3.10.4  GOTO
------------
Goto is used to move around quickly within a document, and change between 
TEXT and TABLE modes.  Goto displays the following prompt box.

   +----------------------- Goto --------------------------+
   |  Goto where?  ......................................  |
   |                                                       |
   |  F10:execute   ESC:cancel   F5:hide                   |
   +-------------------------------------------------------+
  
                              Page --63-- 

This can be used to move to any Text position within a buffer.  You may want 
to refer to section 2.8 on specifying Text and Table positions.  You can use 
Goto in either the DOCUMENT or  PROGRAM buffers, but you may NOT use it to 
move from one buffer to the other. 

Goto accepts any valid Text or Table position in terms of PAGES, and LINES, 
TABLES, SECTIONS, and ROWS. You can use Goto to move to any Position in your
Document. To move to a Table reference (for example, "T1C3R5") however, you
must be in Table mode. Attempting to Goto a page past the end of your Document
will move only to the top line of the last page in the Document.

Goto also accepts marker names, which are prefixed with an "M".  Thus M1 (no 
space between "M" and marker name) will move to a position previously Marked 
as "1".

Goto can also be used to change between TEXT and TABLE modes by just pressing
<Enter>. 

Note that there are Goto (and Bookmark) options on BOTH the Search and Table
menus (3.11.2, 3.11.3).  The Search menu Bookmark and Goto options are used
in TEXT mode and the Table menu equivalents are used in TABLE mode.  Note 
you can move to a Table bookmark while in TEXT mode but you will remain in
TEXT mode (use <F8> to switch into TABLE mode).


3.10.5  BOOKMARK
----------------
The Search menu Bookmark is used to label TEXT positions so you can easily 
return to that position later.

         +----------- Bookmark -------------+
         |  Label: .................        |
         |                                  |
         |  F10:execute ESC:cancel F5:hide  |
         +----------------------------------+

Bookmark labels may be up to 10 characters.  You may mark any 
position in any buffer in either a Text or Table position.  Any existing 
marker of the same name (or number) will be superseded.

A Document may contain up to 10 bookmarks, if you declare more than 10
bookmarks, the oldest ones will be "re-used".

QIP TIPS
--------
There are shortcuts for many of the options on the SEARCH MENU.
   <Ctrl>L       -  search for next occurrence of the search string
   <F7>          -  pop up the Goto prompt box
   <Shift><F7>   -  go directly to the Document buffer.
   <F8>          -  switch from TABLE to TEXT modes and vice versa
   <Ctrl>K char  -  place a single character marker.  Note that bookmarks
                    placed with <Ctrl>K are counted as one of the 10 active
                    markers. 
   <Ctrl>Q char  -  move to single character marker 

  
                              Page --64-- 
 
                      3.11  T A B L E  M E N U

                DOCUMENT
        +----------------------+
        |  Create              |
        |  Goto                |
        |  Bookmark            |
        |  Join                |
        |  Indent              |
        |  Auto append     Off |
        +----------------------+

Table Menu options deal primarily with the creation, splitting, and joining 
of Tables.  If, when you change into TABLE mode, a table does not currently 
exist, or the cursor is not within one of the existing Tables, you will auto-
matically be put into the Table menu with the Create option highlighted so 
you can create a new table.  This makes it quite easy to create new Tables or
move to existing ones.


3.11.1  CREATE
--------------
This option will Create a new table BEFORE the current line or BEFORE the 
current table (if the cursor is within an existing Table).  The left edge will
be at the current cursor Xpos.

       +------------- Create Table --------------+
       |  Title:                                 |
       |  .....................................  |
       |  Column Widths:                         |
       |  .....................................  |
       |                                         |
       |  F10:execute   ESC:cancel   F5:hide     |
       +-----------------------------------------+

The Title may be up to 57 characters long if specified here, but may be 
edited in TEXT mode after the Table has been created.  Table headers may be 
a maximum of one line.

You may specify a maximum of 50 columns with widths from 1 to 75 characters,
but the total of all column widths (including ruled lines) cannot exceed 215
characters (QIP maximum Table width).  The Table will be created and the 
cursor will be placed on the leftmost column header ready for column title 
entry.  A sample table is shown below.

The default for Column widths is a table with  5 columns, each one 10 
characters wide.  When you use the default, the columns are automatically 
labeled "A" through "E"

      [   10    ][          25           ][ 5 ][      15     ]
T1   .   Table Title  
S1   .-------------------------------------------------------
CHdr .   Column Headers
    +.-------------------------------------------------------
    +.-------------------------------------------------------
 
During column header entry, any system menu may be opened so you can do things
such as insert columns, change widths and attributes (Column menu), or set new
  
                              Page --65-- 
 
effects (Effects menu).  Extra column header lines may be added (up to a 
maximum of three) by pressing <Shift><Enter>

When you move the cursor out of the column header area QIP assumes you are 
going to begin data entry and the first data row opens ready for input.

QIP TIP
-------
If you create a table on the first line of a page (the table header line is on
line 1 of the page), the only way to insert text above the table header line
(in TEXT mode) is to place the cursor on the table header line (line 1 of the 
page) and press <Ctrl>N to insert a blank line ABOVE the cursor position.  You
may then move the cursor above the Table and edit Text as normal.

You may also edit Table header lines in TEXT mode.  After you have changed a 
Table header line and move the cursor off the header line you will be asked
whether you wish to replicate the changes throughout the rest of the header
lines for that Table.

     +-------------------------------------+
     |  Replicate through rest of file: .  |
     |                                     |
     |  Yes:    No:    Esc:cancel          |
     +-------------------------------------+

Answering "Yes" will update all the following header lines for that Table with
any changes you made.  Answering "No" will not update the following header 
lines.  Answering "Esc" will undo the changes you just made to the Table
header.


3.11.2  GOTO
------------
Goto is used to move around quickly within a document, and change between 
TEXT and TABLE modes.  Goto displays the following prompt box.

   +----------------------- Goto --------------------------+
   |  Goto where?  ......................................  |
   |                                                       |
   |  F10:execute   ESC:cancel   F5:hide                   |
   +-------------------------------------------------------+

This can be used to move to any cell in any Table in the Document buffer.  You
may want to refer to section 2.8 on specifying Text and Table positions.  You
can use the Table menu Goto only in the DOCUMENT buffer.

Goto accepts any valid Text or Table position in terms of PAGES, and LINES, 
TABLES, SECTIONS, and ROWS.  You can use Goto to move to any Position in your
Document.  Attempting to Goto a page past the end of your Document will move 
only to the top line of the last page in the Document.

Goto also accepts marker names, which are prefixed with an "M".  Thus M1 (no 
space between "M" and marker name) will move to a position previously Marked 
as "1".

Goto can also be used to change between TEXT and TABLE modes by just pressing
<Enter>.
  
                              Page --66-- 

Note that there are Goto (and Bookmark) options on BOTH the Search and Table
menus (3.10.4, 3.10.5).  The Search menu Bookmark and Goto options are used
in TEXT mode and the Table menu equivalents are used in TABLE mode.  Note 
you cannot move to a Text bookmark while in Table mode.


3.11.3  BOOKMARK
----------------
This is identical to the Search menu Bookmark option (section 3.10.5).
The Table menu Bookmark is convenient for labelling TABLE positions so you
can easily return to that cell later.

         +----------- Bookmark -------------+
         |  Label: .................        |
         |                                  |
         |  F10:execute ESC:cancel F5:hide  |
         +----------------------------------+

Bookmark labels may be up to 10 characters.  You may mark any cell in any
Table.  Any existing marker of the same name (or number) will be superseded.


3.11.4  JOIN
------------
This will combine two or more separate SECTIONS of a Table (VERTICALLY).  
Note that you may not join different Tables only sections of the same Table.

SECTIONS to be joined must be exactly adjacent (have no text lines between 
them).  Only the CURRENT section and the NEXT section can be "joined".  You 
cannot join a range of sections in a single "join" operation.

If the column widths do not match exactly or if the specified sections belong
to different Tables the Join will not be executed.


3.11.4  INDENT
--------------
Indent will set the horizontal position of the current Table.

     +-------- Change Section Indent ---------+
     |  New indent position ? (max: 165): ... |
     |                                        |
     |  F10:execute  ESC:cancel  F5:hide      |
     +----------------------------------------+

The current indent value will be displayed on the prompt line.  After a new
value has been entered the current section will be moved horizontally (left or
right, to the NEW indent position) including all column and Table header 
lines.

Note that Indent does not reformat any Text which may be to the right or left
of the Table and it could be truncated.


3.11.5  AUTO APPEND
-------------------
The Auto append toggle controls what happens when the cursor is on the last 
line of a Table and you finish cell editing.  
  
                              Page --67-- 

Cursor movement, when editing in TABLE mode, is dependent on the current 
cursor movement direction (see sections 2.3.5 and 2.3.6) and whether you 
terminate cell editing by pressing the <Down Arrow> or <Enter> key.

When Auto append is "Off" the cursor will move to the first row of the next 
column, if any, and stop when it is in the last row of the last column.

If Auto append is "On" a new row will automatically be appended to the Table 
in the following way:
 
-   When editing a cell in the last row and you terminate cell editing 
    by pressing the <down arrow> key.  The cursor will be placed in the 
    same column of a new (appended) row.

-   When the cursor is in the rightmost cell of the last row.  If the 
    current cursor movement direction is RIGHT and you terminate cell 
    editing by pressing <Enter>, the cursor will be in the first column 
    of the new row.

-   When the cursor is in the leftmost cell of the last row.  If the 
    current cursor movement direction is DOWN and you terminate cell 
    editing by pressing <Enter>.  The cursor will be placed in the 
    first (leftmost) column of the new row.

QIP TIPS
--------
There are shortcuts for many of the options on the TABLE MENU.
   <F7>          -  pop up the Goto prompt box
   <F8>          -  switch from TABLE to TEXT modes and vice versa
   <Ctrl>K char  -  place a single character marker.  Note that bookmarks
                    placed with <Ctrl>K are counted as one of the 10 active
                    markers. 
   <Ctrl>Q char  -  move to single character marker 
 
  
                              Page --68-- 
 
                         A P P E N D I X  A

QPL and MACRO PROGRAMMING
-------------------------
QPL is a real programming language with access to all of QIP features, and 
functions.  It has its own local and global variables, commands, control 
statements, command syntax, and system access functions. QPL is case 
insensitive except for the contents of quoted strings.  QPL resembles and is
loosely based on BASIC. 

QIP provides two levels of automation:
  Macros, which are a recording or exact representation of a series of 
  keystrokes.

  QIP Programming Language, which is a full programming language with its own
  commands, control statements, variables, and access to the principal QIP
  options.


MACROS
-------
Macros are an exact recording or representation of key sequences which can be
saved and named, then played-back at any time.  Macros are interpreted as if
the sequence of keystrokes were coming from the keyboard, they may in fact be
"recorded" as you are actually performing an operation or created and edited
in the Program buffer (3.1.5).  Macros therefore allow you access to virtually
ALL QIP operations.


MACRO RECORDING
The <F3> key is the Macro record key.  Pressing <F3> begins recording of all
subsequent keystrokes until <F3> is pressed again to finish recording.  When
you are through recording you will be prompted for a "key" to assign the 
recorded macro to.

    +------------------------------------------------------+
    |                                                      |
    | Assign to which Key? (ENTER or F4 = temporary macro) |
    |                                                      |
    +------------------------------------------------------+

The default is the <F4> key (temporary Macro key).  Assigning a new Macro to
<F4> will override any existing macro assigned to <F4>.  This is primarily
useful as a "play last macro" feature for use with one-time, off-the-cuff
Macros.

Alternatively, you can assign the recorded Macro to any key on the keyboard 
(including <Alt>, and <Ctrl> keys), even keys normally used by QIP (with the 
EXCEPTION of <F10>, and <ESC>).  Your Macro assignment will OVERRIDE any QIP 
function(s) assigned to that key, so be careful.

  
                              Page --69-- 
 
MACRO KEY REPRESENTATION
------------------------
Most QIP operations require the use of non-printing keys (e.g <Alt>keys for
opening a menu, or <F10> to execute an option).  There is a representation
for all active keys.

Any characters that can be displayed by the editor are represented in their 
literal form.  This includes ruled-line characters, hard spaces, and others.

Special characters (e.g. ", or ~) may be "escaped" with the "\" backslash 
character (including "\" itself).  However, certain backslash sequences are
reserved for control, and function keys as shown below.

The following table shows the representation of all non-printing keys:

       Key          Representation         Comment
     -------       ----------------       ---------
     CTRL                ^                ^G   for CTRL-G
     SHIFT               _                _\1  for SHIFT-F1
     ESC                 ^[               ^[   for ESCAPE
     ALT                 ~                ~A   for ALT-A
     Literal             \                \~   for ~ character
     HOME                \h
     END                 \e
     UP arrow            \u               _\u  for SHIFT-UP arrow
     DOWN arrow          \d               note \U and \D below
     LEFT arrow          \l               
     RIGHT arrow         \r
     INS                 \i
     BACKSPACE           \b
     TAB                 \t
     BACKTAB            _\t               _\t  is SHIFT-TAB
     F1 .. F9            \1 .. \9          \1 to \9  for F1 to F9
     F10                 \0                \0  for F10
     PGUP                \U                Case is important
     PGDN                \D                for these two
     DEL                 \x
     ENTER               ^m
     SHIFT-ENTER        _^m

As a special case, when recording or editing a Macro, the <F4> key 
(represented as \4) can be used to start data input from the keyboard.  The 
keys entered at this time will not be stored as part of the Macro.  When the 
Macro is executed, it will pause at this point and wait for input from the 
user.  Exit from this manual input mode is controlled by two QPL functions:

    KBBRK()  -  defines the keys that break out of manual input mode (AND
                ALSO out of the Macro).  The default value is <Esc>.

                KBBRK("\x1b")  use <Esc> (hex 1b) as "break" key

    KBDONE() -  defines the maximum number of keys that can be entered, or
                the keys which terminate input from the keyboard.
 
                KBDONE(1,"")      - get any 1 key from keyboard, then 
                                    continue.
                KBDONE(0,"^m\0")  - get any number of keys, terminated by
                                    <Enter> or <F10>

  
                              Page --70-- 
 
MACRO() STATEMENT
-----------------
All QIP macros are written and stored in editable form as MACRO() statements
in the Program buffer.  They may be created, edited, and executed through the
"Programs" option on the ACCESS menu (3.1.5).

Optionally any Macro can be assigned to a key, so that pressing a Macro's
assigned "hot-key" will immediately playback the Macro.  Note that Macros 
assigned to the "temporary Macro key" <F4> are not saved in the Program 
buffer.


MACRO PROGRAM STRUCTURE
-----------------------
<NAME=HotKey>         defines the name of the Macro and optional hot-key. 
MACRO(".....")        ALL macros must be enclosed in " " double quotes.
  .
  .
  .
MACRO(".....")     
END                   End of macro


The following are examples of Macros created according to the above rules:

<REP>                   Macro named REP with no hot-key assignment
MACRO ("~S~R\d\4")     ~S opens Search menu, ~R selects Replace option,
END                    \d DOWN arrows past search string prompt(uses existing
                       search string), \4 starts user input of replacement 
                       string

<MAKETBL=~M>           Macro named MAKETBL assigned to <Alt>M key
MACRO("~A~T~CTest Table^M10,10,10,20^M")
END                    ~A opens Access menu, ~T selects Table Mode, ~C 
                       selects Create option, "Test Table" is title, ^M
                       terminated with <Enter>, 10,10,10,20 are column widths,
                       ^M terminated by <Enter>

QIP TIPS
--------
Many QIP commands (Search, Print Data, Calc) "remember" their last inputs.
When you open the Search prompt it "remembers" and displays the previous 
search string.  The cursor for the prompt line(s) is at the END of the input
string.  When using Macros to invoke commands that remember their previous
inputs be sure to CLEAR the input line, otherwise it will be APPENDED to the
existing string.  For example:

    Search string: "Accounts Receivable"
    MACRO("~SSPayable^M")
    The actual search string will be "Accounts ReceivablePayable"

    The correct macro is MACRO("~SS^YPayable^M")  -  The <Ctrl>Y clears the 
    input line before entering "Payable".
  
  
                              Page --71-- 
 
QPL PROGRAMMING LANGUAGE 
------------------------
QPL the QIP Programming Language provides added functionality in a more
understandable form than Macros.  Although the Macro() statement (see above) 
may be used in a QPL program, QPL programs are intended for long-term use and
ease of maintenance.


CREATING QPL PROGRAMS
---------------------
All QPL programs are created and stored in editable form in the Program 
buffer.  They may be created, edited, and executed through the "Programs" 
option on the ACCESS menu (3.1.5).

Optionally, you can assign the QPL program to any key on the keyboard 
(including <Alt>, and <Ctrl> keys), even keys normally used by QIP (with the 
EXCEPTION of <F10>, and <Esc>).  Your QPL program assignment will OVERRIDE
any QIP function(s) assigned to that key, so be careful.


QPL PROGRAM STRUCTURE
---------------------
The structure of a QPL program is almost identical to a QIP Macro.

<NAME=Hotkey>        defines name of Program and optional hot-key assignment.
.....QPL statements, commands, or functions.....
END                   End of Program

<NAME>                Program with no key assignment.
.....QPL statements, commands, or functions....
END                   End of Program


QPL programs may be up to 100 lines long.  The length of a program is measured
from the <NAME> line to the start of the next program (or last text line).  
For example: 

         <PROG1>
1        for n1 = 1 to 5
2          disp n1
3        next
4        disp "Finished", wait(0)
5        END
6         
7
         <PROG2>   

The above program (PROG1) is seven lines long.


QPL VARIABLES
-------------
There are two types of variables in a QPL program:
   Alpha (string)  -  Labeled A1 through A50

   Numeric         -  Labeled N1 through N50, each capable of 16 BCD digits 
                      of precision.
  
                              Page --72-- 

Note that it is also possible to reference, and assign Table cells and Text
elements from within QPL programs.  For example:
   C3R5 = "100"    - Column 3 Row 5 (current Table) set to "100"
   C1R1 = A10      - may assign to TABLE cells as STRING ONLY

   P10L12 = "Hello, World"  - Page 10 Line 12

                      

QPL OPERATORS and EXPRESSIONS
-----------------------------
The standard arithmetic operators (+, -, *, /) are available, evaluated in 
standard precedence (first * /, then + -).  

The highest precedence operators are ^ (exponentiation with base number > 0),
and ** (exponentiation with an INTEGER base).  

Next highest precedence are the unary plus and minus operators, which have
have higher precedence than *, or /.



PROGRAM FORMAT
--------------
All statements and commands in a QPL program must be seperated by a ';'
or by the end of a line.
e.g.   INPUT "Enter a number",N1
       CALC("C4 = C4*N1"); UPDATE("C4 > 100","EDIT(C4);REPEAT")
  

Comments may be included in your program. Anything between the /* and */
comment delimiters will be ignored when the program is executed.
e.g.   FOR N7 = 1 TO EROW   /* for every row in the current table */
       ...; NEXT            /* table now contains updated data */

  
                              Page --73-- 
 
QPL STATEMENTS
--------------
The following statements are used to control the flow of execution of QPL
programs.  They are the standard structured programming constructs.

End of Program Statements
-------------------------
STOP        Immediately halts execution of the program.

END         If a subroutine is being executed, the subroutine is stopped and
            control is returned to the parent program.
            In the main (parent) program, it immediately stops execution.


Hint:  Use an END statement to terminate all programs which you may want
       to call as subroutines or execute by themselves.
          
<Ctrl><Break> may be pressed at any stage while a program is being executed.
This will immediately halt the program.

If a fatal error occurs in the program, a message will be displayed and the
program will immediately be stopped.


Test a Condition
----------------
IF < expression > THEN < statement(s) >
    { ELSE < statement(s) > }
IEND

   If a condition is TRUE then do something ( else do something else )
   e.g.  IF N1 < 0 OR N1 > 100 THEN DISP "Invalid Number. Try again",wait
         IEND


Loops
-----
FOR numeric-variable = <expression> TO <expression> { STEP <expression> }
    <statement(s)>
NEXT

WHILE <expression> DO
    <statement(s)>
WEND

   Repeat a set of QIP commands or QPL statements a certain number of times.
   You must specify the start and end values. The increment value (step)
   defaults to 1 or -1. 
   e.g.  FOR N1 = 1 TO EROW    /* for all rows in the current table section */
            CALC("C1R(N1) = DATE(TODAY,N1)")
         NEXT
      
   Repeat a set of QIP commands or QPL statements while something is TRUE
   e.g.  WHILE N5 > 0 DO
            DISP "Loop Count: ",N5;  N5--;
         WEND

Note: There is a MAXIMUM nesting level of 5 IF's, 5 FOR's, and 5 WHILE's
  
                              Page --74-- 

Loop Control statements
-----------------------
EXIT LOOP     /* terminate the loop and continue with the program */
CONTINUE      /* skip all commands to end of loop then continue loop */

   e.g.  FOR N1 = N2 TO N3 STEP 10
            IF N1.... THEN CONTINUE
            ...
         NEXT


Program Control statements
--------------------------
GOTO <label-reference>
GOSUB <program name> 

   GOTO jumps to the specified label, ignoring all commands in between, and
   continues program execution from there.
   Note: A label must be preceded by a '$' and followed by a ':'
   The GOTO value can be the label name or the value of a string variable.
      e.g.  GOTO "FINISH"  or  GOTO A3

   GOSUB executes another program (subroutine) then returns to the current
   program and continues from after the GOSUB command. The subroutine must
   be another program in the current document.

   e.g.   <MAIN>
          IF N1 <= 0 then GOTO FINISH
          DISP "parent program"; GOSUB SUB1; DISP "returned from subroutine"
          $FINISH: DISP "end of program",wait
          END

          <SUB1>
          DISP "subroutine"
          END



Variable Handling
-----------------
LET         Assign a value to a variable   e.g.  LET A1 = "New Zealand"
            Note that the "LET" is optional in an assignment statement.
            e.g.   N5 = 10;  N6 = 25;  A2 = "America"



VCLEAR      Clear the contents of ALL QPL variables.
            Numeric variables (N1 to N50) are set to 0
            Alpha variables (A1 to A50) are set to an empty string ("")
            Note that all variables are assigned these values when you
            start running QIP. Variables retain their current value until
            they are cleared or given a new value, or you exit QIP.

  
                              Page --75-- 
 
Input and Output Control Commands
---------------------------------
PRINT  {PF (n),}  {LF (n),}  {SP (n),}  {"message string",}  {variable}

   Print a message or contents of a variable on current printer.
   e.g.  PRINT "do a page feed", PF,
               "print the contents of the variable A1", SP(5), A1



DISP   {@(x,y),}  {BELL(n),}  {CLEAR, or CLR,}  {LF (n),}  {SP (n),}
       {WAIT(n),}  {"message string",} {variable}

   Display a message or contents of a variable on the screen.
   e.g.  DISP "how does this work", LF(3), "3 lines later:  A2=", A2
              BELL(1,3), WAIT



INPUT  {@(x,y),}  {USING "format-string",}  {CLEAR, or CLR,}  {LF (n),} 
       {SP (n),}  {"prompt-string",}   variable

   Display a prompt (optional) and accept input from the keyboard. This input
   is assigned to the specified variable.
   e.g.  INPUT USING "NNN", "Enter a number up to 3 digits", N1



where:
   BELL(tone,count)  - Ring the specified bell as many times as required.
       tone values:  0 = simple beep tone  (default)
                     1 = short high-low beep 
                     2 = long high-low beep
                     3 = ascending beeps 
       Both values are optional.
       e.g.  BELL,  BELL(3),  BELL(,5),  BELL(3,5)
 

   SP(n)  -  Move 'n' spaces.
             e.g. "abc",sp(3),"def"  => "abc   def"
   LF(n)  -  Move down 'n' lines (will move to the start of the new line).
             e.g. "line 1",lf(2),"line 4"
   PF(n)  -  Do 'n' page feeds (will move to the start of the new page).
             Page Feeds are only applicable to the printer.


   CLEAR or CLR  -  Clear the screen.

   @(X,Y)  - Move the cursor to the specified position on the screen.
             X = horizontal (column) position
             Y = vertical (row) position
             The top left corner of the screen is (0,0)

   WAIT(n) - Pause for 'n' seconds, or until the next key press, before
             continuing the program.
             The default value, if 'n' is omitted, is 10 seconds.
             If 'n' is 0, QIP continues to wait until a key is pressed
             e.g.  DISP "press a key to continue",WAIT(0)
                   DISP "read this message",WAIT(30)
  
                              Page --76-- 
 
   USING  -  Control user input. The format field controls the type of
             data that can be entered and the maximum number of characters.
             e.g.  USING "NNN" accepts a number of up to 3 digits.

             Note: The user may edit the input as they are entering it
             (Delete a digit, etc) and must press <Enter> to accept it.

   Format String:
             The format string must be enclosed in quotes and may use any
             combination of the following characters.

        "<"  Left justify input data.  (default for Alpha data)        
        ">"  Right justify input data. (default for Numeric data        

             Note that the justify symbols must be the FIRST character in a
             USING format string.

        "A"  Alphabetic data only (a to z, A to Z, and spaces) 
             Note that the maximum length of an alpha string is 80 
             characters or the width of the current display window.

        "N"  Accepts only Numeric data (0 to 9, a single '.', or a
             "+" or "-" in the first position)
             Note that the maximum length of a numeric field is 16 digits.

        "S"  Accepts symbol character only  (e.g. ':',  '*'  or  '/') 
             This is useful for ensuring date or time formats, "NNSNNSNN"
             Note that any actual symbols entered at the start of the
             format string will be displayed "as is". This is useful, for
             example, to indicate money is required:  "$NNNNN"
             
        "X"  Accepts any character in this position.


        A series of '_' (underscore) characters is displayed on the screen
        for the user, showing the maximum length of the input field.
        This character may be changed using the QSETUP program  (Appendix D).

        Some examples of USING strings are:
          ">NNNNN"   -  accepts any 5 digits, right justified in 5 spaces.
          "NNSNNSNN" -  can be used to input Date, or Time format.
          "$NNNNSNN" -  for dollars and cents inputs.
          ">AAAAAA"  -  any string of up to 6 characters, right justified in
                        a six character field, no digits or symbols.
          "X"        -  ANY single character .  Note <Enter> is still
                        required to terminate input.

        Note that the PRINT and DISP parameters may occur in any order, and 
        may be repeated. They are executed in the order you specify them.
        INPUT requires one format field only (if any). You must specify
        a variable - this must be the last entry in the INPUT command.



INPUT  {@(x,y),}  {USING "format-string",}  {CLEAR, or CLR,}  {LF (n),} 
       {SP (n),}  {"prompt-string",}   variable
  
                              Page --77-- 

   Display a prompt (optional) and accept input from the keyboard. This input
   is assigned to the specified variable.
   e.g.  INPUT USING "NNN", "Enter a number up to 3 digits", N1

 
Display Window Functions
------------------------
WINDOW(width,lines)
   
   Defines a display window for use with the DISP and INPUT commands.
   e.g.  N1 = WINDOW (45,15)
   QIP will use a default window (the same size as your screen) if you do
   not specifically create one.  Creating a new window overwrites any
   previous window.


WHIDE()     Make the display window invisible. You can still write to it
            using DISP or INPUT while it is hidden. Hiding the window
            enables you to view the document underneath it.

WSHOW()     Restore the window visibility again.

WCLOSE()    Close the display window.  A new window will be created next time
            you do another DISP or INPUT command.

  
                              Page --78-- 
 
QPL SYSTEM ACCESS FUNCTIONS
---------------------------
These functions implement the major QIP operations within QPL as a controlled
alternative to using Macros.  Note that in some cases an access function is
not provided, so that a Macro is the only way to access that operation.

Parameters may be omitted by using a comma as a "placeholder", trailing commas
may be omitted completely.  Omitted parameters will take on default values
whatever they may be.

There must be NO SPACES between the function name and the opening parenthesis,
e.g:

  CREATE("Foo Bar","10,10,20,15")  is acceptable, whereas
  CREATE ("Foo Bar","10,10,20,15") will cause an "Invalid Command Name" error.

However, any spaces between the parameter(s) are okay.

VERY IMPORTANT POINTS
---------------------
ALL ARGUMENTS to QPL Functions are STRINGS and MUST be enclosed in quotation
marks, either single or double. If you need to refer to a string within the
argument, you must use the alternative set of quotation marks.
e.g.   CALC("C1R1$='hello'")

The parameters to the QPL system access functions follow the prompts for the 
corresponding command.  Refer to sections on each menu and prompt above for 
more detail on the use of each input and toggle.


Toggle Parameters can be set in one of several ways.
   "", or "-", or "0"           - will set the toggle OFF
   "Hot-Key", or, "+", or "1"   - will set the toggle ON
   "N"    - where N is 0, 1, 2, or 3 will set the a multi-valued toggle to
            value number N (when legal for that toggle, otherwise ignored)      

If Toggle parameters are ommitted, the CURRENT DEFAULT value will be used.
For example:
   REPLACE("abc","def")         -- use defaults for all toggle parameters
   REPLACE("abc","def","0")     -- set only first toggle parameter
   REPLACE("abc","def",,,"1")   -- set only last toggle parameter, ommitted 
                                   parameters must be sparated by commas

                                        
All QPL system access functions set the ERR variable with a value of 0 (zero)
for success, or a negative value for an error condition.  ERR values greater
than 99 correspond to the QIP error codes (Appendix C).  Note that ERR values
less than 100 are recoverable (or informational), and values greater than 100
are fatal.

In addition many of the System Access functions set the STATUS variable with a
value related to the command.
e.g.   SEARCH("July 22, 1990")
       IF STATUS == 0 then DISP "No matching string",WAIT
       ELSE SNEXT(); IEND
  
                              Page --79-- 

Note that because QPL programs may be executed from the either the DOCUMENT 
buffer or the PROGRAM buffer, your program should use the DOC() function to 
explicitly move to the Document buffer before any Document buffer Text or 
Table references are made (this should only need to be done once at the 
beginning of a program).

 
LIST OF QPL COMMANDS
--------------------
DOS("command")  -  Executes a DOS command. 
                   Note that DOS("") with no command exits to a DOS shell.
                   Refer to section 3.5.9 (DOS COMMANDS) for more details.

CALC("calculation-expression(s)") 
     The parameter may contain multiple expressions separated by semicolons.
     Refer to section 3.1.1  (CALCULATOR) for more details.

     A calculation-expression may also contain quoted strings such as 
     C1 = "Foo Bar".  Because the calc-expression itself is also a string,
     you must be use DIFFERENT types of quotation marks (single and double) 
     for delimiting the calc-expression and any embedded strings. Use one set
     for the calc-expression and another for the embedded string, e.g:

     e.g. CALC("C1R5$='HEAD OFFICE'; C2R5 = 800")
     e.g. CALC('C3 = SEQ$("ABC001",1)')


DELETE() -  Deletes the currently marked range  (section 3.2.1 DELETE)
            (see the MARK() command below). It puts a copy of the deleted
            data in the Work Area where it may later be retrieved by PASTE.


DOC()    -  Move to Document buffer.
            This ensures that any text or table references in your program
            use the data in the Document, while still allowing you to
            execute it from either buffer (Document or Program).


GOTO("position") 
     Immediate jump to the specified position. (3.10.4).
     Refer to section 3.10.4 (GOTO) for more details.

     Note that GOTO jumps to the given position in the current buffer.
     Therefore it is wise to use the DOC() command at the start of your
     program to ensure you go to the place you want in your document,
     regardless of where you are when you execute the program.


INSERT(string)
     Inserts the specified text at the CURRENT cursor position. 
     To force a new line (carriage return) after the inserted text, put a
     "^M" ( <Ctrl>M or <Enter> ) at the end of the string to be inserted.
     If you want to insert a quote as part of the text string, you must use
     the alternative quote marks to those surrounding the full text string.

     e.g.  GOTO("P1L5"); INSERT("enter this 'quote' into the document^M")
     e.g.  INSERT(P1L5)    /* copies the data from Page 1, Line 5 */
     e.g.  INSERT(A1)      /* insert the current contents of the variable */

  
                              Page --80-- 

     Note that INSERT() ignores the current Insert/Overwrite mode. It always
     inserts. Therefore, INSERT() may not be used to insert data into a Table.
     You must use CALC() or a Macro instead.

MACRO("macro-string")  - execute the keys recorded in the Macro-string.
     Refer to the MACRO section at the start of Appendix A for details.

 
MARK("start","end")
     Both start and end positions must be valid TEXT positions (section 2.8).
     To mark a complete line of text or a table row, you must explicitly
     specify the full cursor position.
     e.g.  MARK( "L5X1", "L5XE")   /* mark Line 5 of the current page */
     e.g.  MARK( "C1R3", "CER3")   /* mark Row 3 of the current table */

     Note that MARK refers to the data positions in the current buffer.
     Therefore it is wise to use the DOC() command at the start of your
     program to ensure you mark the data you expect from your document,
     regardless of where you are when you execute the program.


OUTPUT("Range-to-print","Number-of-copies","Data-type toggle")

     Print text or table data, or a QPL program, from within a program.
     Refer to section 3.7.1  (PRINT DATA) for more details of this command.

     Any of these parameters may be omitted.
     The "Range-to-print" defaults to the currenly marked data (if any)
     or the current buffer (Document or Programs).    
     The "Number-of-copies" defaults to 1.
     The toggle defaults to its current value. Possible settings are:
         "0" for BOTH,  "1" for TEXT ONLY,  "2" for TABLES ONLY.

     e.g.  OUTPUT("P1L1..5")
     e.g.  OUTPUT("T1","3","2")   /* print 3 copies of the table */


PASTE()  -  Pastes data from the Work area to the CURRENT cursor position.
            (section 3.2.4 PASTE).  It may be used to restore data that has
            been deleted, or with DELETE() to do a Move or Copy operation.
            e.g.   MARK("P1L5X1","P1L10XE"); DELETE()
                   GOTO("P2L1"); PASTE()
     

REPLACE("Search-string","Replace-string","Verify toggle","Direction toggle",
        "Ignore-case toggle","Wildcards toggle","Full-words-only toggle")

        Search for every occurence of a string and replace it with another.
        It can only be used for replacing text data (not tables).
        Refer to section 3.10.3  (REPLACE) for more details of this command.
 
        Any of these parameters may be omitted. The search and replace strings
        default to the values used in a previous REPLACE command.
        The toggle defaults to its current value. Possible settings are:
           Verify:       "0" for NO,       "1" for YES.
           Direction:    "1" for FORWARDS, "0" for BACKWARDS.
           Ignore case:  "0" for NO,       "1" for YES.
           Wildcards:    "0" for NO,       "1" for YES.
           Full words:   "0" for NO,       "1" for YES.
  
                              Page --81-- 

       Note that QPL mode is stopped temporarily to accept input from the
       keyboard for Verify responses.

        e.g.  REPLACE("colour","color")
        e.g.  REPLACE("abcde","test data","1",,"1",,"1")

SEARCH("Search-string","Direction toggle","Ignore-case toggle",
       "Wildcards toggle", "Full-words-only toggle")

        Search for the first occurence of a particular string. 
        Refer to section 3.10.1  (SEARCH) for more details of this command.

        Any of these parameters may be omitted. The search string defaults
        to the value used in a previous SEARCH command.
        The toggles default to current values. Possible settings are:
           Direction:    "1" for FORWARDS, "0" for BACKWARDS.
           Ignore case:  "0" for NO,       "1" for YES.
           Wildcards:    "0" for NO,       "1" for YES.
           Full words:   "0" for NO,       "1" for YES.

SNEXT() - This is used with SEARCH() to find every occurence of the string.

           SEARCH() and SNEXT() both return the STATUS variable = 1  when a 
           match is found and STATUS = 0 when it cannnot find a match.

          e.g.    <SEARCH1>
                  DOC(); GOTO("P1L1"); N1 = 0
                  SEARCH("test 'quote'",,"1")    /* find "test 'quote'" */
                  WHILE ( STATUS <> 0 ) DO
                      N1++          /* increment count */
                      SNEXT()       /* find next occurence */
                  WEND
                  DISP "Number of Matches was ", N1, WAIT(0)
                  END



SORT("Key column 1","Sort-order toggle","Data-type toggle",  
     "Key column 2","Sort-order toggle","Data-type toggle",  
     "Key column 3","Sort-order toggle","Data-type toggle",
     "Mode toggle", "Ignore-case toggle")

     Sort the data in a table. Refer to section 3.8.2  (SORT) for details.
     This command can only be executed from Table mode (see TABLE() below).
     The toggles default to current values. Possible settings are:
         Sort order:   "0" for ASCENDING, "1" for DESCENDING.
         Data type:    "0" for ALPHA,     "1" for NUMERIC.
         Mode:         "0" for SECTION,   "1" for FULL TABLE.
         Ignore case:  "0" for NO,        "1" for YES.

     e.g.  SORT("C3","1","1")
     e.g.  SORT("C1","0","0","C2","0","1",,,,"1","1")



SUBTOTAL("Key column 1","Key column 2","Key column 3","Column(s)-to-calc",
         "Label toggle","Ruled-lines-after-totals toggle")

  
                              Page --82-- 

     Calculate Subtotals for table data. Refer to section 3.8.3  (SUBTOTAL).
     This command can only be executed from Table mode (see TABLE() below).
     The toggles default to current values. Possible settings are:
         "Label:       "0" for SUBTOTAL, "1" for COLUMN TITLE
         "Ruled-lines: "0" for NO,       "1" for YES
      e.g.  SUBTOTAL("C1",,,"C4..6")
      e.g.  SUBTOTAL("C3","C4","C5","C8,C10..12","1","1")

TABLE() -  Switch to TABLE mode. You must be in the Document buffer when
           you try to change modes (see DOC() above).

           e.g.  DOC();  TABLE();  GOTO("T1");  SORT(.....)


TEXT()  -  Switch to TEXT mode. You must be in the Document buffer when
           you try to change modes (see DOC() above).

           e.g.  DOC();  TEXT();  GOTO("P1");  SEARCH(.....)


UPDATE("Condition 1","Function 1","Condition 2","Function 2",
       "Condition 3","Function 3","Verify toggle","Mode toggle",
       "Ignore-case toggle", "Wildcards toggle")

       Search for specific table data and apply the given Update function.
       Refer to section 3.8.1  (UPDATE) for details about this command.
       This command can only be executed from Table mode (see TABLE() above).
       The toggles default to current values. Possible settings are:
         Verify:       "0" for NO,      "1" for YES.
         Mode:         "0" for SECTION, "1" for FULL TABLE.
         Ignore case:  "0" for NO,      "1" for YES.
         Wildcards:    "0" for NO,      "1" for YES.

       Note that QPL mode is stopped temporarily to accept input from the
       keyboard for Verify responses and for the EDIT Update function.
 
       e.g.  UPDATE("C5 < 0", "EFFECT(C5,RED)")
       e.g.  UPDATE("C3='east' AND C4='smith'","DELETE",,,,,"1",,"1")

  
                              Page --83-- 
 
DEBUG FUNCTIONS
---------------
DEBUG is used as an aid to help find problems in your QPL program. It lets
you see what the program is doing as it executes.
The DEBUG(n) function is used to set and read the current DEBUG mode.  The 
parameter 'n' determines which of several DEBUG options are invoked.

   N1 = DEBUG(n)
   
   where n = 1  -  DUMP program variables when program terminates (either
                   normally or abnormally)
             2  -  TRACE execution of each statement or command
             4  -  PRINT the DUMP or TRACE information rather than displaying
                   on the screen
             8  -  BELL rings if non-fatal error
            16  -  STOP program execution on non-fatal errors

    special case if N = 0  -  reset DEBUG mode (no options invoked)
                       -1  -  Immediate "SNAPSHOT" DUMP of all program
                              variables.

    Note that the above values of n may be "added" to set multiple options.
      e.g.  N1 = DEBUG(3)      -  set DUMP and TRACE
            N1 = DEBUG(1+4+16) -  set DUMP, PRINT, and STOP

DUMP
----
DUMP if activated, is invoked on normal termination of a program, or if the
program terminates abnormally as a result of an error or via a SNAPSHOT.

If PRINT is on, the value of all non-zero, non-empty variables will be 
printed.  e.g.  A1 = "Test"
                A2 = "String"
                N1 = 1990
                N2 = 3

If print is off, then a SNAPSHOT Dump window will be displayed on the screen:

           +------ SNAPSHOT Dump of Testprog/14, Error = 0 -----+
           |  Expression: ...................................   |
           |                                                    |
           +----------------------------------------------------+

You can evaluate any numeric or string expression, such as LEN(A1), or 
N3 + VAL(A5).  The result will be shown on the line below the expression
line, with string values in quotes.

The window will remain open, allowing more expressions to be entered, until
you close it with <Esc>, or <F10>.  If the DUMP arose from a SNAPSHOT, then
program execution will continue.

Note the name of the QPL program, the current line number, and the error
status displayed in the window title line.

TRACE
-----
TRACE shows the line number and name of every QPL statement or command as the
program executes.  
  
                              Page --84-- 

If the PRINT option is on the output will be printed.  e.g.

   TESTPROG1/17 - DISP
   TESTPROG1/18 - IF

If the PRINT option is off the output will be displayed in a message window
for EVERY statement and will close only when you press <Esc>, or <F10>.  For
this reason, you will probably only use this combination of options on 
limited sections of your program.

PRINT
-----
PRINT is used to control the destination of other DEBUG options (DUMP, and 
TRACE).  If the currently setup printer is off-line any TRACE and DUMP 
information intended for the printer will be IGNORED.

BELL
----
This BELL option is used to check whether non-fatal calculation or 
conversion errors may be affecting your program.  An alarm will sound each 
time a non-fatal error occurs, but will not suspend or stop execution of the 
program.

STOP
----
Programmers who may want to locate non-fatal errors more precisely can turn
on the STOP option.  This will force all non-fatal errors to be treated as if
they were actual fatal, causing program execution to halt and displaying an
error window citing the line number where the error occurred.

  
                              Page --85-- 
 
                         A P P E N D I X   B

QIP SYSTEM VARIABLES
--------------------
These QIP system variables may be referenced (but not assigned) by the 
Calculator, QPL programs, most Table processing commands (e.g. UPDATE), 
and in the GOTO prompt.

   CTAB, ETAB  -  CURRENT Table number 
                  Note ETAB is not available to Calculator
   CSEC        -  CURRENT Section number
   COL,  ECOL  -  CURRENT and END Column number
   CROW, EROW  -  CURRENT and END Row number
   CTROW       -  CURRENT Table-Relative Row number
   CPAGE       -  CURRENT Page number
   CLINE       -  CURRENT Line Number
   CDOC$       -  CURRENT Document name (string)

   ERR         -  Error code
                     00 -  99 Non Fatal
                    100 - 999 Fatal 

                  ALL QIP commands set the ERR variable.  These correspond to
                  the error numbers displayed with the messages in error 
                  windows.  Refer to Appendix C for a list of error codes and
                  messages.

   STATUS      -  Exit status of last command executed, STATUS is a value 
                  representing status of the operation (e.g. the number of 
                  rows matched by UPDATE).  Note that not all commands set
                  the STATUS variable (only set where appropriate).


EXAMPLES:
   Assign the cell at Column 1 Row 1 to be the current Document name
      C1R1 = CDOC$
   As the destination of a GOTO - Move to the last Section of the Last Table
      T(ETAB)S2R(CROW)
   Used as a condition for UPDATE 
      IF CROW <> EROW AND C1RC = "YES" OR CCRE = "MAYBE"
   

Note the difference between the Item specifications CC, and RC (CONTENTS
of a cell in the current Column or current Row) and the System Variables
COL, and CROW which are the VALUES of the current Column and Row 
numbers.



QIP BUILT-IN FUNCTIONS
----------------------
The following is a list of all the functions built-in to QIP.  These functions 
can be used anywhere a number or string is required.  They may be evaluated, 
used in an expression, assigned to a table position, and assigned to a QPL 
string or numeric variable
 
ABS()         Return the absolute value of a given number.
ADD()         Add the data in the specified table column.
  
                              Page --86-- 
 
SUM()         Add       (alternative function name)
ASCII()       Return the ascii value of the first character in a string
ATN()         Arc Tangent
ATAN()        Arc Tangent  (alternative function name)
AVE()         Calculate the average value of the data in a column.
AVG()         Average   (alternative function name)
BALANCE()     Calculate a running balance.
BGRAPH$()     Generate a stacked Bar graph using column data.
CHR$()        Return the ascii character of the given number
COS()         Cosine
COUNT()       Count the number of data values in each specified column.
CNT()         Count     (alternative function name)
DATE()        Calculate the date 'n' days before or after a given date.
DAY$()        Return the day of the week on which a given date falls.
DAYS()        Calculate the number of days between 2 dates.
DEBUG()       Set the current Mode for debugging QPL Programs.
DEGREES()     Specify Radians or Degrees (for trigonometric functions).
DIV()         Divide the data values in each row.
DNUM$()       Convert a numeric date to string format.
DVAL()        Convert a date string to a numeric date.
EXP()         Calculate the exponential. The constant (e) to a specified power.
FIX()         Return the truncated integer value of a given number.
IGRAPH$()     Generate an Interval graph of the data in your table.
INKEY$()      Control input from the keyboard from within a QPL program.
INSTR()       Finds the first position of 'string 2' within 'string 1'.
INT()         Return the lowest integer value of a given number.
LEFT$()       Return the 'n' characters from the left of a string.
LEN()         Return the length of a string.
LN()          Calculate the natural logarithm (log e) of a number.
LOG()         Calculate the base 10 logarithm of a given number.
MATCH$()      Find a given string in a specified 'search' column.
MAX()         Determine the maximum data value in a column.
MID$()        Return 'n' characters from a given start position.
MIN()         Determine the minimum data value in a column.
MONTH$()      Return the name of a given month.
MTIME()       Calculate time in minutes before or after a given time.
MUL()         Multiply together the data values from each row
MLT()         Multiply  (alternative function name)
NOW()         Return the current time.
NUM$()        Convert a numeric value to string format
PGRAPH$()     Generate a Point graph of the data in your table.
PI            A variable with value 3.141592653589793
RANDOMIZE()   Initializes the random number generator.
RIGHT$()      Return the rightmost 'n' characters of a given string.
RND()         Generate pseudo-random numbers.
ROUND(        Rounds a given number to the nearest power of 10.
SECS()        Calculate the number of seconds between two times.
SEQ$()        Assign a series of sequential values to a column.
SGN()         Return the sign value of a given number.
SIN()         Sine
SQR()         Calculate the square root of a number.
STD()         Calculate the Standard deviation of data in a column.
STRING$()     Return a string of specified length using the given character
SUB()         Subtract the data values in the specified column.
SYS$()        Read relevant system information (string format).
SYS()         Read status information about the current system.
TAN()         Tangent
TIME()        Calculate time in seconds before or after a given time.
TNUM$()       Convert a numeric time to string format.
  
                              Page --87-- 
 
TODAY()       Return the current date.
TVAL()        Convert a time string to a numeric time.
VAL()         Convert a string to its numeric value
WIDTH()       Return the width of the specified column.
 
The following section is a list of the QIP built-in functions grouped by
similar functionality.  This list provides detailed information on return
values, argument syntax, and data types.

Note that there is a description of each of these functions available on QIP
Help screens.  The Help screens also include an example of the use of each 
function.

 

DATE AND TIME FUNCTIONS
-----------------------
Date formats may be either YYMMDD or YYYYMMDD.  They can be set with QSETUP. 

A NUMERIC_TIME is always specified in HHMMSS format.

A NUMERIC_DATE must be specified in YYMMDD or YYYYMMDD format regardless of 
current date format setting (assumes 20th century).
 
The format of a DATE_STRING may be YY/MM/DD, MM/DD/YY, or DD/MM/YY, where the
separator character (e.g. '/' ) and the year YY or YYYY is set with QSETUP.

The format of a TIME_STRING is always "HH:MM:SS", where the actual separator
character (e.g. ':') is set with QSETUP.    


DATE()     Calculate a new date by adding (or subtracting) a specified
           number of days to a given date.
           NUMERIC_DATE_2 = DATE( NUMERIC_DATE_1, NUMBER_OF_DAYS ) 

DAY$()     Return the day of the week on which a given date falls
           DAY_STRING - DAY$( NUMERIC_DATE )
          
DAYS()     Calculate the difference (number of days) between 2 dates.
           NUMBER_OF_DAYS = DAYS( NUMERIC_DATE_1, NUMERIC_DATE_2 )

DNUM$()    Convert a numeric date to string format
           DATE_STRING = DNUM$( NUMERIC_DATE )

DVAL()     Convert a date string to a numeric date
           NUMERIC_DATE = DVAL( DATE_STRING )

MONTH$()   Return the name of a given month
           MONTH_STRING = MONTH$( NUMERIC_MONTH )
          
MTIME()    Calculate a new time by adding or subtracting a specified
           number of minutes to a given time
           NUMERIC_TIME_2 = TIME( NUMERIC_TIME_1, NUMBER_MINUTES ) 

           This function is useful for setting the ALARM time where seconds
           are not important.
  
                              Page --88-- 

NOW()      Return the current time
           NUMERIC_TIME = NOW

           The result will always be in HHMMSS format.
 
SECS()     Calculate the difference (number of seconds) between the
           two times.
           NUMBER_SECONDS = SECS( NUMERIC_TIME_1, NUMERIC_TIME_2 )

TIME()     Calculate a new time by adding or subtracting a specified
           number of seconds to a given time
           NUMERIC_TIME_2 = TIME( NUMERIC_TIME_1, NUMBER_SECONDS ) 

TNUM$()    Convert a numeric time to string format
           TIME_STRING = TNUM$( NUMERIC_TIME )

TODAY()    Return the current date 
           NUMERIC_DATE = TODAY
           NUMERIC_DATE = TODAY()

TVAL()     Convert a time string to a numeric time
           NUMERIC_TIME = TVAL( TIME_STRING )


CONVERSION FUNCTIONS
--------------------
 
ASCII()    Return the ascii value of the first character in a string
           NUMBER = ASCII ( STRING )

CHR$()     Return the ascii character of the given number
           STRING = CHR$( NUMBER )

STRING$()  Return a string of the specified length using the given
           character.
           STRING = STRING$( LENGTH, CHARACTER )
       or  STRING = STRING$( LENGTH, ASCII_VALUE )
 
NUM$()     Convert a numeric value to string format
           STRING = NUM$( NUMBER )

VAL()      Convert a string to its numeric value
           NUMBER = VAL( STRING )


STRING FUNCTIONS
----------------

INSTR()    Finds the first position of 'string 2' within 'string 1'.
           NUMBER = INSTR( STRING_1, STRING_2 )

LEFT$()    Return the left 'n' characters of a given string.
           RESULT_STRING = LEFT$( STRING, NUMBER_CHARS )

MATCH$()   Looks for a given string in a specified 'search' column in
           the current table. When it finds a match, it returns the value 
           from the 'target' column in the same row, otherwise it returns
           an empty string.
  
                              Page --89-- 

           The 'target' column is optional - if it is not specified,
           the value from the next column in the table is returned.
           STRING = MATCH$( SEARCH_STRING, SEARCH_COLUMN, TARGET_COL )
   
MID$()     Returns a string of 'n' characters, starting from a 
           specified position of the given string.  String positions
           start from character 1.
           RESULT_STRING = MID$( STRING, POSITION, NUMBER_CHARS )

RIGHT$()   Return the right 'n' characters of a given string.
           RESULT_STRING = RIGHT$( STRING, NUMBER_CHARS )


NUMERIC FUNCTIONS
-----------------

ABS()      Return the absolute value of a given number
           RESULT_NUMBER = ABS( NUMBER )

INT()      Return the lowest integer value of a given number
           RESULT_NUMBER = INT( NUMBER )

EXP()      The exponential function  --  e to the specified power
           e.g.  N1 = EXP(2) is equivalent to  e**2
           RESULT_NUMBER = EXP( POWER )

FIX()      Return the truncated integer value of a given number
           RESULT_NUMBER = FIX( NUMBER )

LEN()      Return the length of a given string
           NUMBER = LEN( STRING )

LN()       Calculate the natural logarithm (log e) of the given number
           RESULT_NUMBER = LN( NUMBER )

LOG()      Calculate the base 10 logarithm of the given number
           RESULT_NUMBER = LOG( NUMBER )

RANDOMIZE()   Initializes the random number generator. If a value is
              not specified or is 0, a standard initial value will be
              used. This occurs automatically whenever QIP is loaded.
              Otherwise, a time-based randomizer is used to generate
              a random initial value.
              RESULT = RANDOMIZE   or   RESULT = RANDOMIZE (NUMBER)

RND()      Generate pseudo-random numbers. If a 'limit' value is not
           specified or is 0, random numbers between 0 and 1 will be
           generated. Otherwise, integers between  1 and the specified
           limit will be randomly generated.
           RESULT = RND     or    RESULT = RND( LIMIT )

ROUND()    Rounds a given number to the nearest power of 10.
           If the specified 'power' factor is negative, the number
           will be rounded to that many decimal places. If the 'power'
           is positive it will be rounded to the nearest integer value
           to the 'power' of 10. The 'mode' is used to determine the
           rounding   (-1 = round down, 0 = to nearest, 1 = round up)
           RESULT_NUMBER = ROUND( NUMBER, MODE, POWER )
  
                              Page --90-- 

SGN()      Return the sign value of a given number
            (-1 = negative,   0 = 0,   1 = positive)
           SIGN_VALUE = SGN( NUMBER )

SQR()      Return the square root of the given number.
           RESULT_NUMBER = SQR( NUMBER )


TRIGONOMETRIC FUNCTIONS
-----------------------

ATN() or ATAN()     Arc Tangent
COS()               Cosine
SIN()               Sine
TAN()               Tangent

                    RESULT = function( NUMBER )

DEGREES()  Set a switch to control whether the trigonometric
           functions use interpret their arguments as radians (switch = 0)
           or degrees (switch = 1)
           It also returns the previous setting of the switch.
           PREVIOUS_SWITCH = DEGREES( SWITCH )

PI    A system variable containing the value 3.141592653589793


TABLE BLOCK FUNCTIONS
---------------------

These calculations can be applied to any table column (or a range of rows 
within a column). Any valid table reference may be specified.  Note however
that the TABLE BLOCK Functions work only on a SINGLE SECTION at a time. Refer
to section 2.8 for a detailed explanation of Table range specifications.

ADD()     Add the data in the specified table column.
SUM()     RESULT = ADD( TABLE_RANGE )
       or RESULT = SUM( TABLE_RANGE )

AVE()     Calculate the average value of the data in a column.
AVG()     RESULT = AVE( TABLE_RANGE ) 
       or RESULT = AVG( TABLE_RANGE )

CNT()     Count the number of data values in each specified column.
COUNT()   RESULT = CNT( TABLE_RANGE )
       or RESULT = COUNT( TABLE_RANGE )

DIV()     Divide the data values in each row.
          RESULT = DIV( TABLE_RANGE )

MAX()     Determine the maximum value in the specified table column.
MIN()     Determine the minimum data value in a column.
          RESULT = MAX( TABLE_RANGE )
          RESULT = MIN( TABLE_RANGE )

MUL()     Multiply all the data values from each row in the 
MLT()     specified table column.
          RESULT = MUL( TABLE_RANGE )
       or RESULT = MLT( TABLE_RANGE )
  
                              Page --91-- 

SEQ$()    Return a sequence of values, starting from an initial value
          and incremented in regular steps.  The starting value can
          be a string (in quotes) or a number. 
          The default increment (if not specified) is 1.
          COLUMN = SEQ$( START_VALUE, INCREMENT )
       or COLUMN = SEQ$( START_VALUE )

STD()     Calculate the Standard deviation of data in a column.
          RESULT = STD( TABLE_RANGE )

SUB()     Subtract the data values in the specified column.
          RESULT = SUB( TABLE_RANGE )
 
WIDTH()   Return the width of the specified column in the current
          table. The column is specified as a number.
          RESULT = WIDTH( COLUMN_NUMBER )
 
GRAPH FUNCTIONS
---------------

BGRAPH$()  Generate a stacked Bar graph of the data in your table.
           You may graph one column of data (e.g. C2  or  [COST]) or a
           range of consecutive columns. The width of the resulting
           graph is 75 characters (if it is assigned to a string) or
           the width of the destination table column.
           DESTINATION = BGRAPH$( COLUMN_RANGE, MIN, MAX)

IGRAPH$()  Generate an Interval graph of the data in your table.
           This displays an arrow ("<------->") showing the difference
           between the start and end columns. If the value in the
            start column is greater than in the end, the arrowheads
           will be reversed (">-------<")
           Refer to BGRAPH$() above for further details
           DESTINATION = IGRAPH$( START_COL, END_COL, MIN, MAX)

PGRAPH$()  Generate a Point graph of the data in your table.
           You may graph one column of data (e.g. C2  or  [COST]) or a
           range of consecutive columns. The width of the resulting
           graph is 75 characters (if it is assigned to a string) or
           the width of the destination table column.
           DESTINATION = PGRAPH$( COLUMN_RANGE, MIN, MAX)

 
FINANCIAL FUNCTIONS
-------------------

BALANCE()  Calculate a running balance by evaluating the specified
           expression and adding the result to the previous value.
           The results are written to a table column (or a range of
           rows within a column). Any valid Table Reference may be
           specified.  A `brought_forward' value may be specified as
           the initial balance. If omitted, an initial balance of $0 is 
           assumed.
           RESULT = BALANCE( EXPRESSION )
        or RESULT = BALANCE( EXPRESSION, BROUGHT_FORWARD )
  
                              Page --92--

SYSTEM FUNCTIONS
----------------

SYS()      Return numeric status information about the current system
           depending on the value you specify.
           STATUS = SYS( VALUE )

SYS$()     Returns a string containing relevant system information
           according to the value you specify.
           STRING = SYS$( VALUE )
 
   SYS() VALUES     Return numeric system status information

           0  => QIP major Version number        e.g.  1   
           1  => Printer Status    [0 = online,  -1 = offline]
           2  => Current Buffer    [0 = Document,  1 = Program]
           3  => Current Mode      [0 = Text,      1 = Table]
           4  => Ovr/Ins Mode      [0 = Overwrite, 1 = Insert]
           5  => Table Cursor Direction [0 = Right, 1 = Down, 2 = No movement]
           6  => Table Append Row Mode  [0 = Off,   1 = On]
           7  => Effect Priority   [0 = As Set,    1 = Data]      
           8  => Executing a Simulation Program   [0 = No,  1 = Yes]

   SYS$() VALUES    Return system information in string format

           0  => QIP Version number        e.g. "V1.00" 
           1  => Current Cursor Location   e.g. "P1L5X20"  or  "T1S2C4R3"
           2  => Current Date Format       e.g. "MM/DD/YY" or  "YYYY-MM-DD"
           3  => Simulation Program Name   e.g. "SIMUL1"
           4  => Alarm Message (as set)    e.g. "Marketing Meeting"
           5  => Alarm Date (as set)       e.g. "06/05/89"
           6  => Alarm Time (as set)       e.g. "10:30:00"
           7  => Search string             e.g. "receive"
           8  => Replace string            e.g. "return"
           9  => Current Printer Name      e.g. "Toshiba P351"
          10  => Current Print Range       e.g. "P1..3"
          11  => Current File Path         e.g. "C:\ZIP\MY.QIP"
          12  => Characters (4) used for Bar Graphs        e.g. "#@*$"
          13  => Characters (4) used for Point Graphs      e.g. "*+#x"


PROGRAMMING FUNCTIONS
---------------------

DEBUG()    Set the current Mode for debugging QPL Programs. You
           may set any combination of modes by adding them together.
           DEBUG() modes can be set in advance from the Calculator
           as well as from the actual program. The only exception is
           mode -1 which has an immediate effect on the program.
           DEBUG( MODE )
        or CURRENT = DEBUG( MODE )

           Refer to "DEBUG FUNCTIONS" in Appendix A for more details.

           DEBUG MODES
             0   Turn debug mode off.
             1   Dump program variables whenever the program stops.
  
                              Page --93-- 
 
             2   Trace execution of every QPL statement or command.
             4   Print the Debug information rather than displaying it.
             8   Ring a bell whenever a non-fatal error occurs.
            16   Stop program execution if a non-fatal error occurs.
            -1   Do an IMMEDIATE snapshot dump of the program Variables
                 This option can only be set within the program, and does not 
                 change the current mode.  This cannot be combined with other 
                 modes.

INKEY$()   Control input from the keyboard in a QPL program.
           
           CHAR = INKEY$()
           Scans the keyboard buffer. If a key is waiting, it returns
           the actual key pressed, else returns an empty string.

           CHAR = INKEY$( NUM ) where NUM = 0, 1 or 2               
           0  -  Scan the keyboard buffer to test if a key has been pressed.
                 Returns CHR$(1) if a key is waiting, else an empty string.
           1  -  Wait for key input. Returns the actual key pressed.
           2  -  Returns the last key pressed. 
  
                              Page --94-- 
 
                       A P P E N D I X   C

QIP ERROR CODES
---------------

The following is a list of all QIP error codes and their associated
messages.  In most cases corrective action can be discerned from context.
In other cases suggestions or examples are included in the error message text
itself.  Note that QIP Help screens exist for all QIP commands, options,
prompts and menus.  Help screens also contain examples where appropriate.


NON-FATAL ERRORS
----------------
  1    "No numeric data in cell (empty)"
  4    "Divide by zero"
  8    "Calculation overflow"
 10    "Could not successfully converge on an IRR"
 11    "Zero or negative 'b' in a = b^c"
 12    "Number is outside legal range for function"
 13    "Numeric conversion error"
 14    "DATE() result is BC"
 15    "TIME() result is not on the same day"
 16    "Calculation underflow"
 17    "User-definable window already exists"
 18    "Reqd cursor position is outside window"
 19    "Maximum numeric length (16 digits) exceeded"
 20    "Maximum string length exceeded"
 21    "No match in LOOKUP$ statement"


QPL ERRORS
----------
100    "Syntax error"
101    "Out of memory: cannot continue program "
102    "String not terminated before end of line"
103    "Unexpected end of program"
104    "Macro syntax error"
105    "Error in program command"
106    "This command/function is not available here"
107    "Invalid command name"
108    "Invalid Assignment"
109    "Invalid loop command - No loop (FOR or WHILE) open"
110    "Invalid character for prompt switch"
111    "Text string for prompt input is too long"
112    "Invalid data in prompt"
113    "Stack overflow. Too many nested loops or subroutines"
114    "Requires an input variable (e.g. A1, N1)"
115    "String must contain a valid value"
116    "Invalid increment operator for NUM command"
117    "Invalid or missing label for GOTO"
118    "Expected a string within quote marks"
119    "Justify char must be at start of format field"
120    "Not a valid format character"
121    "Invalid format string - does not allow input "
122    "Format string is too long to fit display window"
123    "Invalid format string for Numeric variable"
124    "Expects a row reference after a column range"
  
                              Page --95-- 
 
125    "Must be the current table section"
126    "Must be the current table"
127    "Must be in the Document buffer"
128    "Variable name must be last entry in INPUT command"
129    "Cannot use nested IF statements"
130    "Cannot use NEXT or WEND inside an IF statement"
131    "Must be in Table mode"
132    "Invalid expression"
133    "Invalid effect (color and/or UL,HL,EX)"
134    "Invalid data reference"
135    "Expected a data position to be specified"
136    "Invalid data specification or variable name"
137    "Expected a data range to be specified"
138    "Expected a reference to a table position"
140    "Variable type must be numeric (N1..N50)"
141    "Variable type must be string (A1..A50)"
142    "Number too large (max=16 digits)"
143    "Invalid expression"
144    "Must be a numeric function"
145    "Not a valid string expression"
146    "Missing '('"
147    "Expected a ')' here"
148    "Missing comma"
149    "Invalid comparison"
150    "Missing command separator ';'"
151    "Missing '='"
152    "Missing keyword ("TO") in FOR loop"
153    "Missing keyword ("DO") in WHILE loop"
154    "Missing keyword ("IEND") after IF"
155    "Invalid label/label not found"
156    "Missing '<' at start of program title"
157    "Missing '>' at end of program title"
158    "Invalid program name"
159    "Invalid hot key in program title"
160    "Program already exists"
161    "Program does not exist"
162    "A program name must be entered"
163    "Cannot execute a program with more than 100 lines"
164    "Cannot Create - 100 programs already exist"
165    "More than 100 programs - Program ignored"


BUFFER and WORD PROCESSING ERRORS
---------------------------------
200    "Not enough memory - cannot insert Effects"
201    "Cannot create this Header/Footer"
202    "A Header/Footer already exists on this Page"
203    "Cannot Delete Default Ruler"
204    "This ruler cannot be reloaded"
205    "Cannot setup default Document ruler"
206    "Cannot delete soft Pagebreak"
207    "Cannot insert Pagebreak on virtual Line"
208    "Cannot add text to Pagebreak line"
209    "No data exists in the Work area"
210    "Cannot Switch buffers during a Block operation"
211    "Cannot Move or Copy into the Marked Area"
212    "Marked area is bigger than one page"
213    "Cannot Expand more than 1 line of text"
214    "No data has been Marked"
  
                              Page --96--
 
215    "Cannot find Bookmark "
216    "Must specify a Search pattern"
217    "Cannot Add or Delete lines to Table Title"
218    "Invalid string (max length = 70 chars)"


FILER ERRORS
--------------
250    "Not enough memory for the Shell"
251    "Cannot find program"
252    "Disk Space Exhausted"
253    "File Error"
254    "File already exists"
255    "File does not exist!"
257    "No Pages available - Last page truncated"
258    "Data file is damaged. Attempting to restore..."
259    "Cannot change files while in a macro"
260    "Invalid file or directory"
261    "Cannot create File "


TABLE PROCESSING ERRORS
-----------------------
300    "Can't create a table here"
301    "Too many tables - can't create another"
302    "Not enough memory to proceed!"
303    "Illegal column width entry"
304    "Cannot insert column - Table is too wide."
305    "Cannot have more than 50 columns"
306    "Illegal indent position"
307    "Illegal range entry"
308    "Can't join - tables have differing column widths"
309    "Can't join - sections are not contiguous"
310    "Illegal decimal place entry"
311    "Illegal number of rows to insert"
312    "Illegal Goto destination"
313    "Copy/Move operation already selected"
314    "Illegal Search condition"
315    "Illegal Update function"
316    "Illegal column specification"
317    "Illegal column range input"
318    "Column range must not include key column(s)"
319    "Must enter a value for this field"
320    "Invalid MAX or MIN entry"
321    "Illegal row range"
322    "Memory or Disk full - can't complete SORT!"
323    "Unable to save in Work area - aborted"
324    "Can't copy to the Work area"
325    "Can't copy to a table of differing format"
326    "Can't join tables containing multiple sections    "
327    "Range reference is not available in a Search condition"
328    "Total table width plus table indent position > 215"
329    "Cannot Copy/Move into a table header"
330    "Cannot do that operation at this point"
331    "Cannot do this to a Column Header row"
332    "There is no existing table"
333    "Too many lines to Sort"
  
                              Page --97-- 

PRINTER ERRORS
--------------
350    "Incorrect data range specification"
351    "Incorrect line number"
352    "Incorrect table number"
353    "Incorrect section number"
354    "Incorrect row number"
355    "Incorrect QPL program name"
356    "Unable to find closing delimiter "
357    "Unable to match column "
358    "Number of copies value incorrect"
359    "Start page number value incorrect"
360    "Lines per page value incorrect or out of bounds"
361    "Left margin value incorrect or out of bounds"
362    "Top margin value incorrect or out of bounds"
363    "Error loading printer or device"
364    "Printer database QPRTDEFS.V01 not found"
365    "Unable to load specified font"
366    "Incorrect file name specification"
367    "Printer open error"
368    "Page range cannot be empty"
369    "Table range cannot be empty"
370    "Data specification not valid in this context"
371    "Substitution error or Illegal characters in substitution string "
372    "Error writing to disk or spool file"
373    "Error writing to network printer"


GENERAL ERRORS
--------------
400    "Fatal error QIP ABORTING:"
401    "Keyboard initialization error"
402    "Filer initialization/loading error"
403    "Printer initialization error"
404    "Window initialization error"
405    "QPL initialization error"
406    "Menu initialization error"
407    "Editor initialization error"
410    "Out of memory"
411    "Help data is not available"
412    "Illegal date specified"
413    "Illegal time specified"
414    "Alarm date cannot be earlier than today"
415    "Alarm time must be after current time"
416    "Alarm message must be entered"
  
                              Page --98-- 
 
                       A P P E N D I X   D

QSETUP CUSTOMIZATION PROGRAM
----------------------------

This is a stand-alone utility which allows user configuration of QIP's 
display colors    " default settings, and other system parameters.  Most setup "
items may be modified within QIP    " although some cannot.  "

                    QSETUP MAIN MENU
             +-----------------------------+
             |  Load from QSETUP.TXT       |
             |  Modify SETUP               |
             |  Change Colors              |
             |  Write System File and Exit |
             |  Save to QSETUP.TXT (only)  |
             |  Exit without writing       |
             +-----------------------------+

Normally there are two versions of QIP's system setup parameters.  One is 
the QIP system file named QSYSTEM.V01, and the other is an ASCII text file 
named QSETUP.TXT.  

The usual procedure is to change a parameter value by running the QSETUP
utility to modify configuration parameters and create a new system file with 
the updated settings.

There are however a few parameters which cannot be set interactively within
QSETUP.  For these cases, you must edit the QSETUP.TXT file and manually 
change the values.

QSETUP.TXT may be edited with any editor or word processor which can read 
and write ASCII files (including QIP itself). QSETUP.TXT contains numerous 
comments and descriptions for each settable item, noting its purpose, its 
default value, and range of legal values. Reading these comments can provide
a good understanding of QSETUP and its effect on QIP.

Since the two files generally contain the same information (just in different
formats), QSETUP provides options to generate one from the other should either
of them be lost for any reason.  They also act as "backups" for each other.

    To generate a new QSYSTEM.V01 -- Run QSETUP, select "Load From 
    QSETUP.TXT", then choose "Write setup and exit", and reply with an "N" 
    (no) when it asks if you want to write a new QSETUP.TXT file.  

    Note that a system file generated this way will NOT contain either HELP
    or ERROR messages.  It is probably preferable to re-copy QSYSTEM,V01
    from the original distribution disk and then run QSETUP to update all
    settings with the current values in QSETUP.TXT.

    To generate a new QSETUP.TXT -- run QSETUP, then immediately select 
    "Write setup and exit", and reply with a "Y" (yes) when it asks if you 
    want to write a new QSETUP.TXT file.


LOAD FROM QSETUP.TXT
--------------------
This option is used to read setup values from QSETUP.TXT.  These values will
OVERRIDE all current settings in the system file QSYSTEM.V01.
  
                              Page --99-- 
 
When you have edited QSETUP.TXT you should be sure to select this option so 
that the updated values will be written to the new system file.


MODIFY SETUP
------------
This option is used to modify QIP's configuration parameters. The new values 
will OVERRIDE all current settings in the system file QSYSTEM.V01.

The MODIFY SETUP menu shows how similar items are grouped together.  Selecting
one of these categories will bring up one or more sub-menus that will lead you
through the SETUP process.

        +---------------------------------+
        |  General Items                  |
        |  Date and Time Formats          |
        |  Printer Selection              |
        |  Fonts and Colors               |
        |  Color Printer Codes            |
        |  Sheet Feeder Codes             |
        |  Translate Graphics Characters  |
        |  Key Customization              |
        +---------------------------------+

General Items
-------------
This category contains an assortment of miscellaneous items.  Selecting the
General Items option brings up the following sub-menu.

        +-----------+
        |  Misc     |
        |  Search   |
        |  Table    |
        |  Display  |
        |  Qpl      |
        |  Alarm    |
        |  Files    |
        +-----------+

Selecting any of these brings up a menu or prompt which allows you to set
various related paramters.

Date and Time Formats
---------------------
Selecting the Date and Time Formats option brings up the following sub-menu
which allows you to set Date and Time format parameters.

        +------ Date and Time ------+
        |  Date Field Separator: .. |  
        |  Time Field Separator: .. |  
        |                           |
        |  Date Order   MM/DD/YY    |
        |  Year System  YYYY        |
        +---------------------------+
  
                              Page --100-- 

Printer Selection
-----------------
This category contains several printer related items.  Selecting the Printer
Selection option brings up the following sub-menu.

        +------ Printer Setup and Select ------+
        |  Setup Printer 0                     |
        |  Setup Printer 1                     |
        |  Setup Printer 2                     |
        |  Default Printer No (0-2)   ....     |
        |  Paper Length (0-84)        ....     |
        |  Top Margin (0-20)          ....     |
        |  Left Margin (0-20)         ....     |
        |  Eject Pages at End (0-3)   ....     |
        |  Right Page Shift (1-20)    ....     |
        |                                      |
        |  Wait Between Pages         No       |
        |  Output Data to             Printer  |
        +--------------------------------------+

Selecting any of these brings up a menu or prompt which allows you to set
various related paramters.

Fonts and Colors
----------------
Selecting the Fonts and Colors option brings up the following sub-menus.  For
each color you may set any or all of the font, typeface, size, and type size
options.

        +-----------+        
        |  Red      |         +---------------------------------+
        |  Green    |         |  Letter Style           Upright | 
        |  Yellow   |         |  Typeface               Draft   |
        |  Blue     |         |  Characters Per Inch    10      |
        |  Magenta  |         |  Proportional Spacing   No      |
        |  Cyan     |         |  Use on this Pass       Yes     |
        |  Default  |         +---------------------------------+
        +-----------+

Note that fonts for BLACK and WHITE are not settable interactively, you can
set these only by editing QSETUP.TXT.

Color Printer Codes
-------------------
This category is used to input the HEXADECIMAL control code sequences for 
selecting colors on a color printer.  Selecting the Color Printer Codes 
option brings up the following sub-menus.

                                   +------- Color Codes -------+
                                   | Color On   .............. |
 +----- Color Printer -----+       | Black      1B5B33306D.... |
 |  Use Color Printer   No |       | Red        1B5B33316D.... |
 |  Setup Color Codes      |       | Green      1B5B33326D.... |
 +-------------------------+       | Yellow     1B5B33336D.... |
                                   | Blue       1B5B33346D.... |
                                   | Magenta    1B5B33356D.... |
                                   | Cyan       1B5B33366D.... |
                                   | White      1B5B33376D.... |
                                   | Color Off  .............. |
                                   +---------------------------+
  
                              Page --101-- 

Sheet Feeder Codes
------------------
This category is used to input the actual HEXADECIMAL control code sequences 
for a Cut Sheet Feeder. Selecting the Sheet Feeder Codes option brings up the 
following sub-menus.

 +------ Cut Sheet Feeder -----+     +--------- Feeder Codes ---------+
 |  Use Cut Sheet Feeder    No |     | Load First Sheet ............. |
 |  Set Feeder Codes           |     | Feed Next Sheet  912146....... |
 +-----------------------------+     | Eject Last Sheet 912147....... |
                                     +--------------------------------+

Translate Graphics Characters
-----------------------------
This category is used to input the actual HEXADECIMAL codes for graphics 
characters.  Selecting the Translate Graphics Characters option brings up the 
following sub-menus.

 +- Translate Graphics -+
 |  Map       To Setup  |       +-- R1: From --+--- Map To ---+-----+
 |  Row 1               |       |   - [ c4 ]   |  Char 1:  2D |  -  |
 |  Row 2               |       |   | [ b3 ]   |  Char 2:  7C |  |  |
 |  Row 3               |       |   + [ c0 ]   |  Char 3:  2B |  +  |
 |  Row 4               |       |   - [ c1 ]   |  Char 4:  2D |  -  |
 |  Row 5               |       |   + [ d9 ]   |  Char 5:  2B |  +  |
 |  Row 6               |       |   | [ c3 ]   |  Char 6:  7C |  |  |
 |  Row 7               |       |   + [ c5 ]   |  Char 7:  2B |  +  |
 |  Row 8               |       +--------------+--------------+-----+
 +----------------------+


Key Customization
-----------------
This option lets you assign a key to a QIP function.  Using this option you
can customize QIP so that most of the editing and word processing keys you
are familiar with can have the same meanings within QIP.  Selecting the
Key Customization option brings up the following menus:

 +----------------+     +------------------ 1:1 Keymap -------------------+
 | Clear All      |     | Mapped Key       Operation                      |
 | Reset Defaults |     +---------------+---------------------------------+
 | Print to File  |     | <Ctrl>A       | Left one word                   |
 | 1:1 Keymap     |     | <Ctrl>C       | Forward one screen              |
 | 1:2 Keymap     |     | <Ctrl>D       | Right one character             |
 | 2:1 Keymap     |     | <Ctrl>E       | Up one line                     |
 | 2:2 Keymap     |     | <Ctrl>F       | Right one word                  |
 +----------------+     | <Ctrl>G       | Delete character                |
                        | <Ctrl>J       | Help key                        |
                        | <Ctrl>R       | Back one screen                 |
                        +---------------+---------------------------------+
                        |ESC:Abort  F10:Accept  INS:Map new key  DEL:Clear|
                        +-------------------------------------------------+

Clear All      - erases all existing key mappings
Reset Defaults - loads the QIP default key mappings (Wordstar keys, etc)
Print to File  - writes a list of all existing key mappings to the file
                 QKEYBIND.TXT in your current directory.
n:n Keymap     - allows you to view existing mappings, clear an old key 
                 assignment, or add a new key (map key to operation).
  
                              Page --102-- 

When you have selected the required Keymap, a list of matching key
assignments will be displayed. You may Arrow up and down, or use <PgUp> and
<PgDn> to move through the list.  Press <Ins> to add a new key assignment,
or <Del> to clear an existing one.
When prompted to specify the "Key(s) to Insert", simply press the key(s) you
want to use for the operation. (For "Key(s) to Clear", press the key already
assigned to the operation, as shown in the displayed list). 
When asked to specify the "QIP Keycode(s)", press the key corresponding to the
required operation, as shown in the following table.
You will then be given a chance to confirm the key assignment, or deassignment.

If the selected operation is a menu option, the operation corresponding to the
first key will be shown, followed by "***".  
eg.  Map <Ctrl>S to <Alt>F S  will display the operation as "File menu ***"

QIP OPERATIONS
The following is a list of all the QIP operations and equivalent keycodes.
Key Name             Operation
---------            ---------
<Esc>                "Abort key" 
<Enter>              "Enter key" 
<Home>               "Move to beginning of line" 
<End>                "Move to end of line" 
<Ins>                "Toggle Insert/Overwrite mode" 
<Del>                "Delete character" 
Left Arrow           "Move left one character 
Right Arrow          "Right one character" 
Up Arrow             "Up one line" 
Down Arrow           "Move down one line" 
<PgUp>               "Back one screen" 
<PgDn>               "Forward one screen" 
<TAB>                "Forward tab" 

<Shift><Esc>         "Save and exit" 
<Shift><Esc>         "Exit all menus"
<Shift><Enter>       "Insert line below" 
<Shift><Home>        "Move to left margin"
<Shift><End>         "Move to right margin"
<Shift><Ins>         "Edit cell" 
<Shift>Del           "Delete to end of line" 
<Shift>Left Arrow    "Left scroll" 
<Shift>Right Arrow   "Right scroll" 
<Shift>Up Arrow      "Up scroll" 
<Shift>Down Arrow    "Scroll down one page" 
<Shift><PgUP>        "Back one Page" 
<Shift><PgDn>        "Forward one page" 
<Shift><Tab>         "Back Tab" 

<Ctrl><Home>         "Cursor to top of screen" 
<Ctrl><End>          "Cursor to bottom of screen" 
<Ctrl>Left Arrow     "Left one word" 
<Ctrl>Right Arrow    "Move right one word" 
<Ctrl><PgUp>         "Move to start of document" 
<Ctrl><PgDn>         "Move to end of document" 

<Alt>A               "Access menu" 
<Alt>B               "Block menu" 
<Alt>C               "Column menu" 
<Alt>E               "Effects menu" 
  
                              Page --103-- 

<Alt>F               "File menu" 
<Alt>L               "Layout menu" 
<Alt>O               "Output menu" 
<Alt>P               "Process menu" 
<Alt>Q               "Display SORD information" 
<Alt>R               "Row menu" 
<Alt>S               "Search menu" 
<Alt>T               "Table menu" 
<Alt>X               "Exit" 
<Alt>=               "Toggle scale line" 
<Alt>-               "Toggle scale column" 
                     
<Ctrl>B              "Reformat buffer" 
<Ctrl>C              "Cursor to middle of screen " 
<Ctrl>D              "Move line to middle of screen" 
<Ctrl>E              "Move line to to end of screen" 
<Ctrl>F              "Refresh screen" 
<Ctrl>K              "Set mark at cursor pos" 
<Ctrl>L              "Find next" 
<Ctrl>N              "Insert line above" 
<Ctrl>P              "Insert page break" 
<Ctrl>Q              "Goto previously set mark" 
<Ctrl>R              "Replace" 
<Ctrl>S              "Search" 
<Ctrl>T              "Swap next two characters" 
<Ctrl>U              "Undo Key" 
<Ctrl>W              "Delete one word" 
<Ctrl>X              "Move line to bottom of screen" 
<Ctrl>Y              "Delete line" 
<Ctrl>\              "Swap text/table modes" 
<Ctrl>_              "Swap next two characters" 
<Ctrl>^              "Temporary indent" 
           
<F1>                 "Help key" 
<F2>                 "QIP calculator" 
<F3>                 "Start/End macro recording" 
<F4>                 "Playback a macro" 
<F5>                 "Hide menus" 
<F6>                 "Paste Key" 
<F7>                 "Goto prompt" 
<F8>                 "Swap text/table modes" 
<F9>                 "Start ruled line drawing mode" 
<F10>                "Execute key" 

<Shift><F2>          "Evaluate input line" 
<Shift><F4>          "Open to program menu" 
<Shift><F6>          "Yank current line" 
<Shift><F7>          "Goto document buffer" 
<Shift><F9>          "Ruled line mode" 
<Shift><F10>         "Shifted execute Key" 


DEFAULT KEYMAPPINGS
<Ctrl>A              "Wordstar: left one word" 
<Ctrl>C              "Wordstar: forward one screen" 
<Ctrl>D              "Wordstar: right one character" 
<Ctrl>E              "Wordstar: up one line" 
<Ctrl>F              "Wordstar: right one word" 
<Ctrl>G              "Wordstar: delete character" 
  
                              Page --104-- 
                     
<Ctrl>J              "Wordstar: help key" 
<Ctrl>R              "Wordstar: move to end of screen" 
<Ctrl>S              "Wordstar: left one character" 
<Ctrl>T              "Wordstar: delete one word" 
<Ctrl>V              "Wordstar: Insert/Overwrite mode" 
<Ctrl>W              "Wordstar: scroll up" 
<Ctrl>X              "Wordstar: down one line" 
<Ctrl>Z              "Wordstar: scroll down" 

<Ctrl>O+<Del>        "Alternative: delete to end of line" 
<Ctrl>O+<PgUp>       "Alternative: move up one page" 
<Ctrl>O+<PgDn>       "Alternative: move down one page" 
<Ctrl>O+<Home>       "Alternative: move to left margin"
<Ctrl>O+<End>        "Alternative: move to right margin" 
<Ctrl>O+Left Arrow   "Alternative: scroll left" 
<Ctrl>O+Right Arrow  "Alternative: scroll right" 
<Ctrl>O+Up Arrow     "Alternative: scroll up" 
<Ctrl>O+Down Arrow   "Alternative: scroll down" 

Note: These alternative key mappings are designed for use on keyboards which
do not support Shifted Special-Function keys  eg. T5100, J3100SGT
For example:  <Shift><Del> is remapped onto <Ctrl>O+<Del>



CHANGE COLORS
--------------
The screen colors used by QIP can be chosen interactively with QSETUP.  When 
you select the Change Colors option, QSETUP will display a mockup of the QIP
screen and the following menu:

             +----------------------+
             |  Change Current Set  |
             |  First Color Set     |
             |  Second Color Set    |
             |  Monochrome Set      |
             |  LCD/Plasma Set      |
             +----------------------+

The First Color Set and Second Color Set are predefined for color monitors 
(the QIP default colors are the "First" color set).  The Monochrome Set and 
LCD/Plasma Set have also been pre-defined to be suitable for monochrome and 
plasma screens.

These pre-defined sets should provide a good match for each screen type.  If 
not, (or if you want to choose your own colors) you should select Change 
Current Set.  This will bring up another menu which has options that allow 
you to change text, menu, prompt, and system window colors.

Note that this menu and its sub-menus remain open until they are explicitly 
closed by hitting the <Esc> key.

              +----------------+
              | Text / Effects |
              | Popup Windows  |
              | System Windows |
              +----------------+
  
                              Page --105-- 

The Text / Effects option allows you to change items such as the default text
color, the color used to show underlining (which cannot be displayed on a 
color monitor), and the colors used for marked text areas and block cursors.

The Popup Windows option lets you set colors for all of QIP's menus, prompts 
(also their Hot Key, Selected, and Lowlight colors), error message windows, 
help text, and QPL windows.

The System Windows option allows you to change the colors of the system 
information windows like the status, effect and reminder lines, and the scale
line and scale column.

All of these options allow you to modify colors interactively by displaying 
sample text, windows, menus, or prompts along with a color palette.  As you 
select colors from the palette the screen colors change to illustrate the 
current foreground and background choices.  This makes it quite easy to see 
how the QIP screen will finally look.

The color palette displays as two rows of 16 colors each.  Use the UP and DOWN
arrow keys to switch between the upper and lower rows, and the RIGHT and LEFT
arrow keys to move back and forth across the row.  The current selection in 
each row is shown by the "box" cursor.

When you have finished with a section hit <F10> to accept the current settings
or <Esc> to cancel any changes and restore previous values.  In either case 
you will be returned to the menu you selected that option from.  You should 
then use the arrow keys or a hot-key to select another option from the same 
menu, or hit <Esc> to close the menu and return to the previous menu.

Note that it is possible to change colors by editing QSETUP.TXT but it is 
somewhat tedious (and difficult to visualize what the screen will actually 
look like).  The recommended method is to use QSETUP and modify them 
"interactively".


WRITE SYSTEM FILE AND EXIT
--------------------------
Use this option to exit QSETUP and write your modifications into the system 
file -- QSYSTEM.V01.  Selecting this option will unconditionally update the 
system file.  You will however, be asked if you want to write a new QSETUP.TXT
file at this time as well. 

      +-------------------------------------------+
      | Write new QSETUP.TXT file also (Y/N): ... |
      +-------------------------------------------+

Answering "Y" (yes) will write a new QSETUP.TXT file with the current 
settings for all setup parameters.  Answering "N" (no) will not write a new 
QSETUP.TXT file.

If you have just edited QSETUP.TXT and then run QSETUP to create a new system
file, you need not write QSETUP.TXT again because its values were not changed
inside QSETUP (although you may if you want to -- it won't hurt anything).

If you used QSETUP to change colors, you should answer "Y" (yes) to write 
QSETUP.TXT at this time because some values have been changed inside 
QSETUP.  It is generally a good idea to assure that both files contain the 
same (most current) information.
  
                              Page --106-- 


SAVE TO QSETUP.TXT (ONLY)
-------------------------
Use this option to exit QSETUP and write your modifications into the text file 
QSETUP.TXT.  Selecting this option will unconditionally update the text file.
This option will NOT update the system file QSYSTEM.V01.


EXIT WITHOUT WRITING
--------------------
This is an immediate EXIT from QSETUP.  No changes will be applied and no 
files will be written.  QIP and its setup parameters will be exactly as they 
were before you loaded QSETUP.



NOTES
-----
When modifying the colors of the system windows no "special example" is 
displayed on the screen, instead the actual system windows of the mockup 
screen will change to reflect the colors as you select them.

QSETUP reads and writes the QIP system file QSYSTEM.V01.  If for some 
reason this file is lost (or does not exist when you run QSETUP), a new one 
can be created by QSETUP from the information in QSETUP.TXT or its own 
internal defaults for each parameter.  

However, this new file will NOT contain the HELP and ERROR messages normally 
stored in the system file.  Therefore it is preferable to copy QSYSTEM.V01
from the original distribution disk then update it with the current values
in QSETUP.TXT if your system file should be lost.

  
                              Page --107-- 
 
                     A P P E N D I X   E

QIP SIZES and LIMITS
--------------------

The following is a list of some important QIP size limits. 


Screen Display Width             75/80 Characters
                                       5 used for Scale Column (optional)  

Screen Display Height               21 Lines 
                                    39 Lines in EGA 43-line mode


Minimum Document Width              20 Characters

Maximum Document Width             220 Characters

Maximum Document Length            100 Pages (depends on available memory)

  Note that as you approach this limit, warning messages will be displayed.
  If you exceed this limit, data will lost from the end of the Document. 

Maximum Lines per Page              84 Lines (14" legal size paper at 6 lpi)

Minimum Lines per Page              22 Lines

Maximum Tables per Document         50 Tables (depending on memory) 

Maximum Rows per Table            8000 Rows

Minimum Sections per Table           1 Section

Maximum Sections per Table         100 Sections

Minimum Table Column Width           1 Character

Maximum Table Column Width          75 Characters (1 screen width)

Maximum Columns per Table           50 Columns (including ruled-lines)

Maximum Table Width                215 Characters

Maximum Column Header Lines          3 Lines

Maximum Program Buffer Length      840 Lines - Maximum 10 pages of 84 lines

Maximum QPL Program Length         100 Lines 
  
                              Page --108-- 

                                I N D E X


ACCESS
   Menu        27 

ALARM CLOCK     6, 27, 28, 29

APPENDICES
   Built-in functions  85
   Error codes         94
   Macro programming   68
   QPL programming     68
   QSETUP              98
   Sizes and Limits   107

ASCII          
   ASCII()     86, 88
   Import      40, 41, 42
   Export      40, 41
   Files        3, 98

ATTRIBUTES      5,  8, 17, 34, 36, 37, 56, 58, 64
   Prompt      36, 37
               
BLOCK
   Menu        32

BUFFER          3,  5,  6,  7, 18, 22, 27, 30, 31, 32, 47, 61, 65,
               71, 87
   Document    10, 12, 20, 21, 29, 30, 31, 32, 33, 34, 63, 65, 79, 80
   Program      7, 21, 29, 30, 31, 63, 68, 70, 71, 79
   Switching   10, 31 

CALC()         80

CALCULATOR      6, 10, 27, 28, 31, 79, 85, 92 
   Prompt      27
   QPL         79

CELL            5,  7, 10, 11, 12, 20, 23, 24, 25, 26, 27, 28, 31, 
               37, 65, 66, 67, 72, 85, 94, 99
   Editing     16, 17, 18, 19, 20
   Marking     16, 17

COLUMN
   menu        34

DELETE()       79

DOC()          79

DOCUMENT        2,  3,  5,  6,  7,  8, 10, 11, 12,  13, 19, 20, 21, 
               22, 27, 28, 29, 30, 31, 32, 33, 34,  38, 40, 41, 42,
               44, 45, 47, 49, 52, 53, 54, 55, 58,  61, 62, 63, 64, 
               65, 74, 77, 79, 80, 82, 85, 92, 95, 107

 
DOS()          79
 
EDITING         2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 14, 15, 16,
               17, 18, 19, 20, 21, 27, 28, 30, 31, 40, 41, 44, 45, 
               55, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 76, 82, 
               97, 98, 99 
   Keys        10, 11, 14, 15, 16
   Programs    30
   Table        5,  7,  8, 11, 15, 16, 20, 31, 55
   Text         2,  7,  8, 11, 14, 16, 20

EFFECT          2,  3,  6,  8, 12, 13, 14, 15, 16, 17,  19, 20, 38, 
               39, 51, 53, 54, 55, 65, 82, 92, 95, 98, 104
   Menu        38
   Printing    50, 51

EXPRESSIONS    10, 18, 22, 24, 25, 26, 27, 29, 54, 72, 73, 79, 
               83, 85, 91, 95
   Numeric     24, 25
   Logical     25, 26, 54
   Precedence  25, 72, 73
   
FILE
   Loading      3
   Menu        40,   
   QIP         19, 20    

FILES           3, 19, 20, 40, 41, 42, 49, 96, 98, 99, 105

FUNCTIONS       2,  8, 10, 19, 21, 25, 26, 27, 29, 30, 31, 54, 55, 
               56, 57, 68, 69, 71, 77, 78, 79, 82, 83, 85, 86, 87, 
               88, 89, 90, 91, 92, 94, 95, 96
   Built-in    85
   Conversion  88
   Date        87, 88
   Financial   91, 92
   Graph       91
   Numeric     89, 90
   Progamming  92, 93
   QPL         78, 79, 80, 81, 82
   String      88, 89
   System      92
   Time        87, 88

GOTO()         79

GRAPHICS Characters
               15, 41, 48, 49, 101

INSERT()       79

KEYS           
   Control     11
   Editing     10
   Function    10, 11
   Menu        13
   Table Editing  
               16, 17, 18

KEY CUSTOMIZATION
               101, 102, 103, 104

LAYOUT
   Menu        44

LINE            2,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 
               17, 18, 19, 20, 21, 22, 23, 24, 28, 30, 32, 33, 34, 
               37, 38, 39, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 
               54, 55, 57, 58, 59, 61, 62, 63, 64, 65, 66, 69, 70, 
               71, 72, 75, 77, 79, 80, 81, 83, 84, 85, 86, 92, 94, 
               95, 96, 97, 107

LOGICAL 
   Expressions 25, 26, 54
   Operators   25, 26

MACROS          5,  8, 10, 13, 22, 68, 69, 70, 71, 78, 79, 80, 94, 96
   Keys        68, 69, 70
   Program     68, 69, 70 

MACRO()        80

MARK()         80

MARKING         5,  6, 11, 14, 15, 16, 17, 18, 19, 21, 28, 32, 33, 
               34, 35, 36, 38, 42, 44, 45, 47, 58, 59, 60, 61, 63, 
               64, 65, 66, 67, 78, 79, 80, 92, 94, 95, 96

MENUS           3, 4, 5, 6, 8,  9, 11, 12, 13, 14, 17, 18,  19,  20,
               21, 22, 27, 28, 29, 30, 31, 32, 34, 35, 36,  38,  39, 
               40, 42, 44, 47, 48, 50, 54, 57, 58, 59, 61,  63,  64, 
               65, 66, 67, 69, 70, 71, 78, 94, 97, 98, 99

MODES
   Auto Append 16 
   Insert       7,  8,  9, 11, 12, 14, 17, 18, 23, 32, 33, 34, 35, 
               38, 80 
   Overwrite    7,  8, 11, 12, 14, 18, 20, 33, 38, 80
   Ruled Line  11, 15, 18 

MOUSE           4, 5, 10, 18, 19, 21, 40

OUTPUT
   Menu        47
   QPL         80

OUTPUT()       80

PAGE            5,  6,  7, 10, 13,  20,  22, 23, 24, 25, 42, 43, 44, 
               45, 47, 48, 49, 50,  51,  52, 58, 63, 65, 72, 75, 79,
               80, 85, 95, 96, 97, 100, 107
               
PAGE BREAKS     5,  7, 11, 44, 45, 58

PASTE()        80

PROCESS
   Menu        54 


PROMPTS         4,  6,  8,  9, 10, 11, 12, 13, 14, 17, 19, 28, 29, 
               30, 31, 32, 34, 35, 36, 40, 41, 42, 43, 47, 48, 49, 
               50, 51, 55, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 
               68, 70, 75, 76, 77, 78, 85, 94, 99
               
QPL             5,  8, 11, 20, 22, 25, 27, 28, 30, 31, 47, 68, 69, 
               71, 72, 73, 74, 78, 79, 80, 82, 83, 85, 86, 92, 93,
               94, 97, 99, 107
   Commands    75, 76, 77, 80, 81, 82, 83, 84
   Functions   79, 80, 81, 82, 83, 84
   Programs    71
   Statements  73
   Windows     77

REMINDER LINE   6,  8,  9, 18, 19, 28, 32, 44, 59

REPLACE         9, 17, 20, 53, 55, 61, 62, 70, 78, 80

REPLACE()      80

ROW
   Menu        58 

RULED LINES     5,  7,  8, 15, 16, 17, 19, 23, 34, 45, 48, 51, 57, 
               58, 64

RULERS          5,  7, 11, 20, 44, 45, 46, 48, 95
   Editing     44, 45

SCALE LINE      6,  7, 11, 12, 18, 20, 21, 48, 107

SCALE COLUMN    6,  7, 11, 18, 107
               
SEARCH
       Menu    61 
       QPL     81

SEARCH()       81
             
SECTION         3,  5,  6,   7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 
               17, 18, 20,  21, 22, 23, 24, 27, 29, 30, 31, 32, 40, 
               42, 44, 45,  47, 48, 51, 54, 56, 57, 58, 59, 62, 63,
               65, 66, 67,  73, 78, 79, 80, 81, 82, 84, 85, 87, 90, 
               95, 96, 97, 107

SNEXT()        81

SORT()         81

STATUS          6,  7,  8, 21, 37, 78, 81, 83, 85, 86, 92
   Line         6,  7,  8, 21, 37
   Variable     78, 83, 85

SUBTOTAL()     81


SYSTEM
   Menus       
      Access      27 
      Block       32 
      Column      34 
      Effects     38 
      File        40 
      Layout      44 
      Output      47 
      Process     54 
      Row         58 
      Search      61 
      Table       64 
   Variables      71, 86

TABLE()        82

TABLE           2,  3,  4,  5,  6,  7,  8, 11, 12,  13,  15,  16,  17,
               18, 19, 20, 21, 22, 23, 24, 25, 26,  27,  28,  29,  31,
               33, 34, 35, 37, 38, 41, 42, 45, 47,  48,  51,  52,  53,
               54, 55, 56, 57, 58, 59, 60, 62, 63,  64,  65,  66,  67,
               69, 70, 71, 72, 73, 78, 79, 80, 81,  82,  85,  86,  88,
               89, 90, 91, 92, 95, 96, 97, 98, 99, 100, 107
   Editing     12, 13, 15, 16, 17, 18
   Menu        64
   Mode         7,  8, 11, 12, 15, 16, 18, 19, 20, 23, 27, 29, 31, 54, 
               59, 62, 63, 64, 65, 66, 70, 78 
   Positions   22, 23
   Ranges      23, 24

TEXT()         82

TEXT            2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 14, 15, 16,
               18, 19, 20, 21, 22, 23, 27, 28, 29, 31, 32, 33, 38, 39,
               41, 42, 44, 45, 46, 47, 48, 51, 53, 57, 61, 62, 63, 64,
               65, 66, 67, 71, 72, 79, 80, 82, 92, 94, 95, 97, 98
   Editing     10, 11  12, 14, 15, 18
   Mode         6,  7,  8, 12, 14, 16, 20, 27, 29, 45, 61, 63, 64, 
               65, 67, 79
   Positions   22, 23
   Ranges      23, 24
               
TOGGLES         9, 11, 13, 14, 16, 18, 19, 21, 29, 37, 42, 44, 46, 47,
               48, 49, 50, 51, 56, 57, 61, 62, 66, 78, 80, 81, 82

UPDATE()       82

VERIFY          9, 34, 40, 42, 54, 55, 58, 59, 62, 80, 82
   Prompts     34, 40, 58, 59

WILD CARDS     54, 55, 61, 62, 80, 81, 82

WINDOWS         6,  7,   8,  9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 28,
               29,  30, 38, 40, 42, 43, 55, 76, 77, 83, 84, 85, 94, 97


WORDSTAR       4, 40, 41, 42, 103

WORDWRAP       20, 44, 46

WORK AREA      5, 10, 21, 32, 33, 59, 79, 80, 95, 96

```
{% endraw %}

## QSETUP.TXT

{% raw %}
```
# QIP -- The Quick Information Processor, V1.0
#
# QSETUP.TXT - This file contains information used to customize
#	QIP V1.0.  To use it, edit the values in this file according
#	to the information noted here, then run QSETUP.EXE and select
#	the following options:
#	         Load from QSETUP.TXT    (loads this file)
#	  then   Write setup & exit      (writes to QSYSTEM.V01)
#	  then   N                       (no need to make a new QSETUP.TXT)
#
#	If you select the 'Change Colors' option, you should probably
#	reply Y (Yes) rather than N (No) to the final prompt, as it will then
#	make a new copy of this file containing the colors you selected.
#	That will save you from having to change colors again next time you
#	run QSETUP with this file...
#
# When working with this file, you should refer to the manual for
# extra information on some of the settings made here.  If you edit this
# file using QIP, be sure to Import and Export it as an ASCII file.


#################################
#  G E N E R A L   S E T U P S  #
#################################

# The first group of values are those which can be changed inside QIP,
# but whose DEFAULT values (the values they hold when QIP is loaded),
# are decided here.  Of them all, the most important is the first,
# which controls the lines/page of new documents:
LINES PER PAGE = 60  # min 22, max 84

# The next few are 'toggles', defaulting to either 1 (ON) or 0 (OFF):
USE WILD CARDS = 0  # 1 means '*' and '?' are wildcard characters
IGNORE CASE = 0     # 1 means 'A' = 'a' in searches
INSERT MODE = 1     # Edit mode, 1 = insert, 0 = overwrite
FULL TABLE = 0      # 0 limits some processes to the current SECTION only
AUTO APPEND = 0     # 1 appends an extra row when you reach a table's end
DISPLAY SCALE COLUMN = 1    # 1 = display (Doc't window width will be 75)

# This one determines whether the default Effect handling should be
# 'As Set' priority or 'Data' priority (see the EFFECTS menu in the manual):
EFFECT PRIORITY = 0 # 0 = AS SET, 1 = DATA

# This controls where the table cursor moves when you press ENTER:
CURSOR MOVE = 0     # 0 = RIGHT, 1 = DOWN, 2 = NO MOVEMENT

# Next are a number of display controls which cannot be changed
# inside QIP.  However, the first, which selects 43-line mode if you
# have an EGA adaptor, can be overridden when QIP is loaded by
# specifying either QIP -43 or QIP -25:
EGA 43-LINE SCREEN = 0  # 1 = 43, 0 = 25
SCREEN WON'T SNOW = 1   # Use 0 if your screen snows
DISPLAY CURSOR POS = 1  # 1 = keep updated
DISPLAY REMINDERS = 1   # 1 = display them
DISPLAY CLOCK = 1       # 1 = display it

# There are several controls for the way dates and times are formatted
# by QIP.  Whatever you choose, you should stick with it henceforth as
# dates generated with one format (eg: table data) may not be automatically
# recognized if you later change to another format.
DATE ORDER = 1        # 0 = YY/MM/DD, 1 = MM/DD/YY, 2 = DD/MM/YY
YEAR SYSTEM = 0       # 0 = YYYY (eg: 1991), 1 = YY (eg: 91)
DATE SEPARATOR = '/'  # eg: 03/06/91  vs.  03.06.91
TIME SEPARATOR = ':'  # eg: 13:21:00  vs.  13-21-00

# These values give the default size of the window created by
# the QPL WINDOW() function, and the character used for filling
# the input field in the INPUT USING statement.
QPL WINDOW WIDTH = 78   # min 1, max 78
QPL WINDOW HEIGHT = 21  # min 1, max 21

# QIP's alarm function is configured with the following.  The first value
# determines how many times the ALARM function will ring the bell to try and
# get your attention.  The second determines how long it will go to sleep
# before reminding you again, should you ask it to do so.
ALARM BELL COUNT = 1   # min 0, max 10
SNOOZE TIME      = 5   # in minutes.  min 1, max 60

# The next item controls the default filespec used for directory
# listings in QIP.  You can change it at will (eg: C:\WORK\*.QIP).
DIRECTORY FILESPEC = '*.*'  # min 1, max 50 chars

# Rulers control the margins and tab positions in QIP.  The default
# ruler for every new Document can be roughly set here and also changed in
# QIP.  The tab settings for the Program buffer can only be set here.
# NB: These values count from 0, eg: 3 will give tabs every 4 characters.
DEFAULT RIGHT MARGIN = 74  # min 10, max 210
DEFAULT TAB SPACING = 7    # min 1, max 40
PROGRAM TAB SPACING = 3    # min 1, max 40


#################################
#  P R I N T E R   S E T U P S  #
#################################

# QIP has a large number of printer controls, and the DEFAULT values
# for most of them can be set here.  In addition,  the choice of printers
# provided by QIP is controlled here, as are several special control
# sequences which can be used (eg: for Color Printing or Cut Sheet Feeders).

# Many printers cannot print the 8-bit pseudo-graphic characters
# used by QIP.  If your printer cannot, choose 'Generic' output for graphic
# characters on the To Where option of the OUTPUT menu.  If your printer is
# able to print graphics characters, but uses different codes for those 
# characters (ie: not 100% IBM compatible) you should select 'Translated' 
# output.  Then edit the list below to specify which code your printer uses 
# for each of the IBM characters shown immediately beneath it.
# Note that the codes defined here are for the Generic translation...
#
# Codes can be entered in hex (0xhh, eg: 0x9b) or decimal (nnn, eg: 155).
# The default codes are 7-bit only, exactly the same as the 'Generic' map.
MAP TYPE = 0  # 0 = TRANSLATED, 1 = DIRECT (as is), 2 = GENERIC
MAP ROW 1 = 0x2d 0x7c 0x2b 0x2d 0x2b 0x7c 0x2b  # printer codes, exactly 7
#            ─    │    └    ┴    ┘    ├    ┼    # QIP display characters
MAP ROW 2 = 0x7c 0x2b 0x2d 0x2b 0x23 0x40 0x63  # printer codes, exactly 7
#            ┤    ┌    ┬    ┐    ░    ▒    ¢    # QIP display characters
MAP ROW 3 = 0x2d 0x7c 0x2b 0x2d 0x2b 0x7c 0x2b  # printer codes, exactly 7
#            ═    ║    ╚    ╩    ╝    ╠    ╬    # QIP display characters
MAP ROW 4 = 0x7c 0x2b 0x2d 0x2b 0x2a 0x24 0x4c  # printer codes, exactly 7
#            ╣    ╔    ╦    ╗    ▓    █    £    # QIP display characters
MAP ROW 5 = 0x2d 0x7c 0x2b 0x2d 0x2b 0x7c 0x2b  # printer codes, exactly 7
#            ═    │    ╘    ╧    ╛    ╞    ╪    # QIP display characters
MAP ROW 6 = 0x7c 0x2b 0x2d 0x2b 0x7c 0x7c 0x59  # printer codes, exactly 7
#            ╡    ╒    ╤    ╕    ▌    ▐    ¥    # QIP display characters
MAP ROW 7 = 0x2d 0x7c 0x2b 0x2d 0x2b 0x7c 0x2b  # printer codes, exactly 7
#            ─    ║    ╙    ╨    ╜    ╟    ╫    # QIP display characters
MAP ROW 8 = 0x7c 0x2b 0x2d 0x2b 0x22 0x3d 0x50  # printer codes, exactly 7
#            ╢    ╓    ╥    ╖    ▀    ▄    ₧    # QIP display characters

# If you have a printer with an automatic or semi-automatic Cut Sheet
# Feeder, turn the CUT SHEET FEEDER control on, and specify the codes for
# your printer. Each sequence is represented as a series of hex (0xhh)
# or decimal (nnn) values.  Enter 0 or 0x00 for an unused sequence.
# Be sure to test the result for your printer.
CUT SHEET FEEDER = 0  # 1 = yes, use the codes given below
LOAD FIRST SHEET = 0x91 0x21 0x46  # min 1, max 8 codes
FEED NEXT SHEET  = 0x91 0x21 0x46  # min 1, max 8 codes
EJECT LAST SHEET = 0x91 0x21 0x47  # min 1, max 8 codes

# If you have a color printer, you'll certainly want to turn on the
# COLOR PRINTER option and then specify the codes for your printer.
# Two special codes, COLOR SELECT and COLOR DESELECT, are provided in case
# the printer requires color mode selection/deselection.  Most don't,
# so simply put a 0 or 0x00 entry, which means 'not used'.
COLOR PRINTER  = 0   # 1 = yes, use the codes given below
COLOR SELECT   = 0x00  # min 1, max 8 codes
COLOR DESELECT = 0x00  # min 1, max 8 codes
SELECT BLACK   = 0x1b 0x5b 0x33 0x30 0x6d  # min 1, max 8 codes
SELECT RED     = 0x1b 0x5b 0x33 0x31 0x6d  # min 1, max 8 codes
SELECT GREEN   = 0x1b 0x5b 0x33 0x32 0x6d  # min 1, max 8 codes
SELECT YELLOW  = 0x1b 0x5b 0x33 0x33 0x6d  # min 1, max 8 codes
SELECT BLUE    = 0x1b 0x5b 0x33 0x34 0x6d  # min 1, max 8 codes
SELECT MAGENTA = 0x1b 0x5b 0x33 0x35 0x6d  # min 1, max 8 codes
SELECT CYAN    = 0x1b 0x5b 0x33 0x36 0x6d  # min 1, max 8 codes
SELECT WHITE   = 0x1b 0x5b 0x33 0x37 0x6d  # min 1, max 8 codes

# A few standard printer defaults follow.  The first tells QIP the
# total length (in lines) of your printer's paper so that a formfeed
# will move to the top of the next page correctly.
PAPER LENGTH = 66  # min 22, max 84
TOP MARGIN   =  3  # (lines), min 0, max 20
LEFT MARGIN   = 6  # (1/10" increments), min 0, max 20
LINE SPACING  = 0  # 0 = 1 line, 1 = double-spaced, 1 = 1.5 lines, 
EJECT EXTRA PAGES  = 0  # Eject 0, 1, 2, or 3 pages when done printing

# QIP can print in 'left-page', 'right-page' sequence if required.
# The 'right pages' will be shifted rightwards by the amount specified
# here, thus increasing their left margin by that amount.
RIGHT-PAGE SHIFT = 4     # (1/10" increments), min 0, max 20
PAUSE BETWEEN PAGES = 0  # 1 = wait for a key (for manual paper feed)
PRINT TO = 0             # 0 = Printer device, 1 = File, 2 = Spooler
PRINTER NUMBER = 0       # from choices below, 0,1,2 = PRINTER 0,1,2

# Here is where the three printers supported INSIDE QIP are specified.
# The standard QIP printer database has 20 models to choose from.  You can
# also get the extended printer database which supports over 300 printers.
# In either case, you need to specify HERE which three QIP printers will
# support with the To Where option of the OUTPUT menu.
#
# In order to do this, please refer to the file called PRINTERS.TXT.  It
# should contain a list of all the printers in the database you
# have.  If you can't find this file, refer to Appendix D of the
# manual for a listing of the PRINTERS.TXT file.
#
# Find your printer's name and model in the PRINTER.TXT file.  If you
# can't find it, choose one which you think is very similar.  You will
# need to make a note of the PTRID number for the printer, so that you can
# specify it below.  If you specify an incorrect number, or one which is
# not actually in the database, QIP will be unable to output to the
# printer when you try to print to it.
#
# Other things you specify here are the printer name (anything goes),
# the output device (parallel, serial or Novell(tm) network) and finally,
# the port number (1 is normal).
#
# Do this for any or all of the three printers below.  It is probably best
# to leave one as Generic, suitable for basic printing to almost any printer
PRINTER 0 PTRID = 1  # from PRINTERS.TXT
PRINTER 0 NAME = 'Generic'  # any name from 1 to 19 chars long
PRINTER 0 DEVICE = 0    # 0 = Parallel, 1 = Serial, 2= Network
PRINTER 0 PORT NO = 1   # eg: 1 = LPT1, max is 3
PRINTER 1 PTRID = 1027  # from PRINTERS.TXT
PRINTER 1 NAME = 'Epson MX-80'  # any name from 1 to 19 chars long
PRINTER 1 DEVICE = 0    # 0 = Parallel, 1 = Serial, 2= Network
PRINTER 1 PORT NO = 1   # eg: 1 = LPT1, max is 3
PRINTER 2 PTRID = 1550  # from PRINTERS.TXT
PRINTER 2 NAME = 'HP Laser Jet II'  # any name from 1 to 19 chars long
PRINTER 2 DEVICE = 0    # 0 = Parallel, 1 = Serial, 2= Network
PRINTER 2 PORT NO = 1   # eg: 1 = LPT1, max is 3

# Below are the COLOR --> FONT controls for each of the 8 colors.
# You will find it easier to change them inside QIP, but they are in this
# file so that you can, for example, send your font settings to someone
# else by means of this file.
BLACK STYLE = 0  # 0=Upright, 1=Italic, 2=Subscript, 3=Superscript
BLACK FACE  = 0  # 0=Draft, 1=Courier, 2=Prestige
BLACK CPI   = 0  # characters per inch, 0=10, 1=12, 2=16
BLACK PROPORTIONAL = 0  # 1=proportionally spaced, 0=not
BLACK ENABLED = 1       # 1=use this font setting, 0=ignore it
RED STYLE = 0
RED FACE  = 0
RED CPI   = 0
RED PROPORTIONAL = 0
RED ENABLED = 1
GREEN STYLE = 0
GREEN FACE  = 0
GREEN CPI   = 0
GREEN PROPORTIONAL = 0
GREEN ENABLED = 1
YELLOW STYLE = 0
YELLOW FACE  = 0
YELLOW CPI   = 0
YELLOW PROPORTIONAL = 0
YELLOW ENABLED = 1
BLUE STYLE = 0
BLUE FACE  = 0
BLUE CPI   = 0
BLUE PROPORTIONAL = 0
BLUE ENABLED = 1
MAGENTA STYLE = 0
MAGENTA FACE  = 0
MAGENTA CPI   = 0
MAGENTA PROPORTIONAL = 0
MAGENTA ENABLED = 1
CYAN STYLE = 0
CYAN FACE  = 0
CYAN CPI   = 0
CYAN PROPORTIONAL = 0
CYAN ENABLED = 1
WHITE STYLE = 0
WHITE FACE  = 0
WHITE CPI   = 0
WHITE PROPORTIONAL = 0
WHITE ENABLED = 1


#############################
#  C O L O R   S E T U P S  #
#############################

# Finally, the display color settings.  It is very easy to change
# these interactively with QSETUP, using the Change Current Set option
# of the Change Colors menu.  These are only stored here, like the
# FONT mappings above, to allow the colors to be easily conveyed
# between QIP users.
#
# Most of the color settings below consist of a Background,Foreground
# pair.  Each can be in the range 0-15 as shown below.  A couple of the
# settings use only the Background or the Foreground.  These are
# noted specifically.
#
# Value:        0    1    2     3     4     5      6     7        8-15
# BACKGROUND: BLACK RED GREEN YELLOW BLUE MAGENTA CYAN WHITE   BLINKING 0-7
# FOREGROUND:    -- as   above  --                             INTENSE 0-7

# First we have the colors used for display of data:
DEFAULT COLOR = 0,7  # Both BG and FG must be min 0, max 7 for this
FG IS BG ALTERNATIVE = 7,0  # eg: used when displaying red fg on red bg
UNDERLINE = 1,0  # Background color ONLY is used to indicate underline
FG IS UL ALTERNATIVE = 1,0  # eg: used when displaying red fg on red ul
TEXT MARKED =  7,0  # used to show marked data
TABLE CURSOR = 3,0  # used for data under the table cursor

# Now colors for Popup windows:
MENU/PROMPT TEXT = 7,1
SELECTED MENU/PROMPT TEXT = 0,7
MENU/PROMPT HOTKEYS = 7,4
MENU/PROMPT LOWLIGHTED = 7,3
HELP TEXT = 7,1
HELP KEYWORD = 7,0
SELECTED HELP KEYWORD = 0,7
NOTICE TEXT = 7,1
HIGHLIGHTED NOTICE = 15,0
ERROR MESSAGE = 4,7
HIGHLIGHTED ERROR MESSAGE = 4,0
PROGRAM WINDOW = 0,7  # Foreground used only (BG same as DEFAULT TEXT)

# To wrap it all up, colors for QIP System windows:
REMINDERS = 1,8
HIGHLIGHTED REMINDERS = 1,15
SCALE COLUMN = 0,6
SCALE ROW = 0,6
EFFECT TEXT = 0,7
HIGHLIGHTED EFFECT TEXT = 0,15
STATUS TEXT = 1,7
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1477

     Volume in drive A has no label
     Directory of A:\

    FILE1477 TXT      2444   9-18-89   8:56a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       731   9-12-89  10:23a
    INSTALL  BAT       733   5-09-89  10:44a
    MANUAL   TXT    276635   8-18-89   2:11p
    QSETUP   TXT     14508   8-18-89   2:14p
            6 file(s)     295089 bytes
                           23552 bytes free
