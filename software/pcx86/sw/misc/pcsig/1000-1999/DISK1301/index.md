---
layout: page
title: "PC-SIG Diskette Library (Disk #1301)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1301/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1301"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FRONT END"

    FRONT END is a fairly technical menu-development system of primary
    interest to programmers.  Menus can be created for hard disks, or
    crowded floppies, allowing easy access to each program from the menu.
    The system lets you use nested menus (menu within a menu) for many more
    choices than would fit on the screen at once.  You can also change the
    display colors and the size of the menu window.
    
    FRONT END uses a unique programming language, similar in style to dBase
    III, and if you want to use this system's full potential, you should
    have at least brief exposure to some sort of programming; e.g., BASIC,
    dBase, or Pascal.  The documentation concerns itself mostly with
    command syntax reference rather than programming techniques.  There is
    a way provided to create menus without learning the language, but the
    full flexibility of the system is not truly available.  The
    documentation provided (23 pages) is technically-oriented.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1301.TXT

{% raw %}
```
Disk No: 1301
Program Title:  FRONT END version 1.0B
PC-SIG version 1

FRONT END is a fairly technical menu-development system of primary
interest to programmers.  Menus can be created for hard disks, or
floppies which have many programs on them, allowing easy access to each
program from the menu.  The system lets you use nested menus (menu
within a menu) for many more choices than would fit on the screen at
once.  You can also change the display colors and the size of the menu
window.

FRONT END uses a unique programming language, similar in style to dBase
III, and if you want to use this system's full potential, you should
have at least brief exposure to some sort of programming; e.g., BASIC,
dBASE, or Pascal, as the documentation concerns itself mostly with
command syntax reference, rather than programming techniques.  There is
provided a way to create menus without learning the language, but the
full flexibility of the system is not available this way.  The
documentation provided (23 pages) is technically-oriented, providing
brief descriptions of each of the programs and their functions.

Usage:  DOS Utility.

Special Requirements:  384K memory.

How to Start:  Type GO (press enter).

Suggested Registration:  Not Specified.

File Descriptions:

DOSNSTAL BAT  Creates a sample front end executable disk.
FRONTEND DOC  Documentation file.
HDNSTALL BAT  Hard disk installation.
INSTALL  DOC  Documentation file.
MCHECK   COM  Menu debugging tool.
MCOMPILE COM  Menu processor program.
MCOMPILE BAT  Batch file.
MEDIT    COM  Edit existing menus.
MEDIT    BAT  Batch file.
MLIST    COM  Display the contents of a menu file.
MRUN     COM  Run a menu.
MSET     COM  Change menu display characteristics.
MSYS     ENV  Created by medit.
README!  DOC  Message from the author.
SAMPLE   MCP  Sample menu file.
SAMPLE   SRC  Sample command file.
SAMPLE1  BAT  Batch file.
SAMPLE2  BAT  Batch file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FRONTEND.DOC

{% raw %}
```
FRONT END
A menu development system.

Written by:
Sherman R. White Jr. (c) 1987

INTRODUCTION

The Front End menu generator is a menu development system for organizing 
standard DOS applications into a friendly, easy to use, menu oriented format.  
It may be used for simplifying existing tasks or customizing new tasks.

Invoke your favorite applications with the touch of a button!  Front End's user 
friendly interface eliminates the need to learn complex DOS commands.  Simply 
select the program you wish from one of the onscreen menus and press the ENTER 
key.  It's THAT simple.  In addition, Front End is fully programmable to change 
as your needs change.

This package includes the following files:

MCOMPILE.COM, MEDIT.COM, MRUN.COM, MCHECK.COM, MLIST.COM, MSET.COM, SAMPLE.SRC,
SAMPLE.MCP, DOSNSTAL.BAT, FRONTEND.DOC





MCOMPILE.COM - this is the menu preprocessor program.  It takes text files 
created by any word processor or text editor and translates them into menu 
command data to be used with the various other menu utilities:

Each text file must contain a menu definition written in SMDL (Structured Menu 
Definition Language).  At the end of translation, an MCP (Menu Control Program) 
file is generated.  This file may then be executed, examined, or modified by 
the other menu utilities such as MRUN, MEDIT, MCHECK, and MLIST.  A complete 
list of SMDL commands is presented later in the text.


MEDIT.COM - this program allows the user to directly modify or create any MCP 
file without going through the translation process.  It is useful for the quick 
generation and modification of menu systems where detailed documentation is not 
an important consideration.  It may be used separate from or in conjunction 
with the MCOMPILE utility.


MRUN.COM - this is the menu execution utility.  This program takes a menu 
command program file and optionally executes the menus that the user selects.  
It can execute any standard DOS application as a child process and remains in 
control when the child process terminates.


MCHECK.COM - this utility is provided for "fixing" defective menu control 
program files.  This program is especially useful when menu command data has 
been shifted or modified, often leaving inaccurate menu pointers.


MLIST.COM - this utility displays the contents of any menu control program 
file.


MSET.COM - this utility is provided to modify the menu environment (background 
& foreground colors, and the background hue character) to the user's 
preferences.


SAMPLE.SRC - this is a sample preprocessor (text) source file written in SMDL.  
It is supplied for your inspection to help you learn SMDL and get going with 
the FRONT END menu development system.


SAMPLE.MCP - this its the menu command data file compiled from SAMPLE.SRC.  It 
is also provided for your inspection and may be executed with the menu 
execution utility (see MRUN.COM).  To examine or modify this file, use the menu 
editor (see MEDIT.COM).


DOSNSTAL.BAT - this is a DOS batch file that creates a sample FRONT END 
executable disk.

Chapter 1  Creating your own menus.


A complete menu system may be created in two ways.  The first way we will 
discuss is using MCOMPILE.COM.

As mentioned earlier, this program takes a text file containing menu 
definitions written in SMDL and creates the data file that is compatible with 
the other menu utilities including MEDIT, MRUN, MLIST, and MCHECK.

1.1 Starting MCOMPILE...

To start MCOMPILE, you must have a menu definition text file written in SMDL.  
You may use virtually any word processor or text editor capable of producing an 
ascii file to create your menu definitions.  Once you have created the 
definition file, at the DOS prompt type:

A>MCOMPILE filename <ENTER>

where 'filename' is the name of the text file containing the menu definitions.  
At this point, MCOMPILE will begin analyzing and translating the text file into 
a menu control program file (filename.MCP).  This process is automatic and will 
only discontinue if the preprocessor encounters an error.

1.2 The menu definition program and SMDL...

The text file read by MCOMPILE contains menu definitions expressed in the SMDL 
menu definition language.  The SMDL program consists of any of 13 or so 
commands arranged in a structured (Pascal-like) format.  The current version of 
MRUN supports up to 128 definitions per MCP file.

1.2.1  The general format for any menu definition is:

Menu "menu label"
 < optional menu description commands >
 Option "option label"
  < optional option description commands >
 enddef
enddef

1.2.2  A list of the SMDL commands is as follows:


MENU

Syntax:   Menu "menu name"
Example:  Menu "My first menu"
Purpose:

To establish a new menu with the title specified.  When defining a menu 
definition, this command must precede any of the other SMDL commands.  When 
invoked, a default menu configuration is selected.  To obtain customization, 
the programmer may use the other SMDL commands to modify the menu created by 
the MENU statement.



WINDOW

Syntax:   Window X1,Y1,X2,Y2
Example:  Window 1,1,15,15
Purpose:

To define the area on the screen that will contain the current menu.  The first 
two numbers represent the upper left hand corner of the menu box while the 
second two numbers represent the lower right hand corner.  The default settings 
are <insert the default settings>.


STYLE/KIND

Syntax:   Kind n         OR
          Style n
Example:  Kind 6         OR
          Style 6
Purpose:

To select the kind of menu that appears onscreen.  Both forms ("STYLE" & 
"KIND") do exactly the same thing where the value of 'n' determines the menu 
type.  The default setting is 1.

A table of the different menu types appears below:

n=1, menu will have no borders and be of uniform color.

n=2, menu will have a solid, thick border drawn in the current menu's 
foreground color.

n=3, menu will have a thin, single line border drawn in the current menu's 
foreground color.

n=4, menu will have a thin, double lined border drawn in the current menu's 
foreground color.

n=5, same as n=1, but menu will cast a "shadow" on the screen (provided that 
the background of the menu environment is not black).

n=6, same as n=2, but menu will cast a "shadow" on the screen (provided that 
the background of the menu environment is not black).

n=7, same as n=3, but menu will cast a "shadow" on the screen (provided that 
the background of the menu environment is not black).

n=8, same as n=4, but menu will cast a "shadow" on the screen (provided that 
the background of the menu environment is not black).



COLOR

Syntax:   Color f,b
Example:  Color 7,0
Purpose:

To set the foreground and background colors for the current menu.  The first 
number represents the foreground color, the second number represents the 
background color.  The default settings for the foreground and background 
colors respectively are 7 and 0.

A color table showing the available colors and their respective values appears 
below:

*Color table:

0 Black       8 Gray
1 Blue        9 Light blue
2 Green      10 Light green
3 Cyan       11 Light cyan
4 Red        12 Light red
5 Magenta    13 Light magenta
6 Brown      14 Yellow
7 White      15 High-Intensity White

* All sixteen colors are available as foreground colors, but only colors 0 thru 
7 are available as background colors.


UPPERCASE/LOWERCASE

Syntax:   Uppercase
          Lowercase
Example:  Uppercase
          Lowercase
Purpose:

To define the selection letter case for the current menu.  For instance:

A. My first option   (uppercase used)

a. My first option   (lowercase used)

Note that only the selection character (the first letter of the option line) is 
affected by either the uppercase or lowercase statements.  This feature is 
provided to express menu dependency, thus  a menu of a menu might use a 
lowercase statement while its parent menu might use an uppercase statement.  
The default setting is uppercase.



OPTION

Syntax:   Option "option name"
Example:  Option "My first option"
Purpose:

To define an option within the current menu with the name specified in 
quotation marks.  After execution of this command, all option definition 
commands will apply to the current option until an ENDDEF statement is 
encountered.


LINK

Syntax:   Link "menu name"      OR
          Link n
Example:  Link "My first menu"  OR
          Link 6
Purpose:

To invoke another menu from the current option.  A menu may be called by name 
(the name given to the menu in its MENU statement) or by number (its position 
within the menu file - 1).  When calling a menu by name, the named menu must be 
previously defined.  For most instances (example: forward menu referencing), it 
is easier to call the menu by number.


EXECUTE

Syntax:   Execute "command line"
Example:  Execute "dir"
Purpose:

To execute a DOS command line from the current option.  The command line may be 
any legal DOS command.

The command line has a special importance to the menu execution utility (see 
MRUN).  Before the execution utility passes a command line to DOS, it searches 
the line for any of the utility's special command set.  When the preprocessor 
finds one of its commands, it processes that command before sending the command 
line to DOS.  In addition to special functions, the preprocessor also supports 
concatenation to "customize" command lines before DOS gets them.  For instance, 
to edit a selected file using EDLIN (refer to your DOS manual) from an option, 
one would simply use:

Execute "Edlin file$"

File$ is a special command that allows the user to select a file from a set of 
files in a file window using the computer's arrow keys.  If the selected file 
was MYFILE.TXT then the command line will look like:

Edlin MYFILE.TXT

just BEFORE DOS gets it.  It is important to note that preprocessor commands 
have no meaning outside of the menu execution utility, for instance, they 
cannot be used in DOS or with any other program.  They must be inserted using 
the menu editing utilities or as a part of the translation process in order for 
them to be passed along to the execution utility.  They are provided to 
facilitate the execution of non-specific commands from a menu option.  A full 
list of the other special preprocessor commands follow:


DATE$

This function returns the current date in MM/DD/YYYY format.


DAY$

This function returns the current day of the week as a three to five letter 
abbreviation. (Mon, Tues, Wed, Thurs, Fri, Sat, Sun)


DIR$

This function returns the current directory name and is intended for use with 
concatenation.  Using this function, files may be shared across directories.


DISK$

This function returns the current disk drive name and is also intended for use 
with concatenation.  Using this files may be more easily shared between disk 
devices.


ENVIRON$(label)

This function returns the value of an environment variable.


FILE$, FILE$(filespec)

This function reads the named files within the current directory and allows the 
user to select a file from a window using the computer's arrow keys.



HALT$, HALT$(returncode)

This function allows the user to immediately terminate the menu executive 
utility from an option and return to DOS.  The optional returncode parameter
allows the program to send a code that may be used with 'IF ERRORLEVEL' 
statements in a batch file.


INPUT$(prompt)

This function allows the user to get a string directly from the keyboard before 
processing the current command line.  The prompt string is displayed above the 
input field.


PATH$

This function returns the current path string, if any.


PROMPT$ (message)

This function displays the given message at the upper middle portion of the 
screen before allowing command line processing to continue.  The display 
disappears and command line processing resumes when the user strikes a key.  
This function doesn't return any value and is best used with concatenation to 
avoid command line parameter confusion.


REBOOT$

Similar to HALT$, this function allows the user to directly reboot the computer 
from a menu option.


TIME$

This function returns the value of the system clock in HH:MM:SS format.


Concatenation and the preprocessor...

String concatenation is achieved via the ampersand (&) character between the 
strings in an expression.  For example:

DATE$&TIME$

will be processed as the date and the time appended to one another or

MM/DD/YYYYHH:MM:SS



HELP

Syntax:   HELP
Example:  HELP
Purpose:

To begin help definition for the current option.  An example HELP definition 
would look like:

HELP
 . "This is the first line of help text, help data appears when a user selects"
 . "the f1 key with the current option."
ENDDEF


., TEXT

Syntax:   . "Help information text"    OR
          TEXT "Help information text"
Example:  . "This is an example."
          TEXT "This is an example."
Purpose:

To define help documentation for the current option.  This command MUST be 
preceded by the HELP declaration (see HELP declaration).  The current version 
of FRONT END supports up to five lines of help text, which may be up to 72 
characters in length.

ENDDEF

Syntax:   ENDDEF
Example:  ENDDEF
Purpose:

To end a definition clause.  There must be an ENDDEF statement for each MENU, 
OPTION and HELP declaration in a menu definition.


1.2.3  Parameters and the command line...

A command line is a special string passed to the DOS command interpreter to 
invoke a DOS command or a program.  Command lines consist of parameters 
separated by spaces, commas, or plus signs.  Because command lines are 
preprocessed, the preprocessor command set may be substituted in place of or 
integrated along with regular DOS parameters.

When substituting a preprocessor command in place of a command line parameter 
(like a file name), simply replace the parameter with the preprocessor command. 
For example:

EDLIN MYFILE.DOC --> EDLIN FILE$

The above transformation takes a very specific DOS command and with the help of 

the preprocessor function, generalizes the command to apply to any file that 
the user might select from a file window.
To integrate a preprocessor command with a DOS parameter, include the 
preprocessor command in the parameter using concatenation.  For example:

EDLIN INPUT$(Enter pascal file name:)&.PAS

The above transformation allows the user to input a pascal name and have the 
EDLIN command attach the suffix '.PAS' to the file before opening the file to 
be edited.

The preprocessor supports nested commands, that is, commands with other 
commands as their operands.  While this may seem an attractive option for some 
applications, there are some areas where combining commands in this fashion 
will either not work or produce adverse effects.  The important thing to 
remember is that commands inside of parentheses are executed first, and 
subsequent commands are executed outwardly.

1.2.4  String processing...

String processing is handled at two levels of the FRONT END menu generator 
system.  The first level where strings are processed is when MCOMPILE processes 
an appropriate SMDL command (MENU, OPTION, EXECUTE, LINK, or .).  In these 
cases a string is defined by surrounding quotation marks.  Example:

Menu "my menu"

In this case, the string 'my menu' is passed to the MENU command for 
processing.

The other level at which strings are processed is when the menu execution 
utility preprocesses a command line before passing it to DOS.  Here a string is 
defined by surrounding parentheses.  Example:

FILE$(*.pas)

Notice the absence of quotation marks between parentheses.  In this case 
'*.pas' is passed to the function FILE$.

The two levels of the string processing are provided to avoid confusing 
information between the MCOMPILE and MRUN utilities.  With the exception of 
directly modifying menu characteristics via MEDIT, parentheses, concatenation, 
and other preprocessor commands must be ultimately surrounded by quotation 
marks.


1.3  Starting MEDIT...

The second way to define a menu definition that we will discuss is by using 
MEDIT.COM.  


[The following text will be a general description of how to use MEDIT, for 
further instruction concerning MEDIT, refer to the program's on-line help]

To invoke the MEDIT program, simply type:

A>MEDIT filename <ENTER>

at the command prompt.  Again as in MCOMPILE, filename refers to the menu 
control program file.  This is will be an output file generated by MCOMPILE, or 
if the file does not exist, MEDIT will create a default file with the given 
name on disk if space permits.

When MEDIT comes up onscreen, all of the menu definitions contained within the 
given file will be displayed within a selection window.  Using the cursor keys, 
select the menu that you wish to edit and press the ENTER key.

At this point, the menu characteristic editing page should appear.  Using the 
appropriate function keys, select the menu characteristic you wish to modify.  
Press the ENTER key to confirm your selection.

When you have completed modifying the current menu, you may either save your 
changes to disk and select another menu or abort your changes and start from 
scratch.


1.4  Creating your own menus using MEDIT...

As mentioned earlier, MEDIT can be used in place of MCOMPILE to create your own 
menus.  Unlike the other utilities, when MEDIT tries to read a file, if that 
file is not found, MEDIT will CREATE a file with the same name, containing one 
default menu.  This file is compatible with the rest of the menu utilities and 
resembles the output file generated by the menu compiler.

After a menu file is established, MEDIT will display its menu selection page.  
From it you can select the menu you want to edit.  (only 1 menu is available in 
a newly created menu file), add menus, or delete a menu.

To add a menu, press the INS key.  A menu will be added at the bottom of the 
current menu file.

To delete a menu, move the highlight bar over the menu you want to delete and 
press the DEL key.

To edit a menu, move the highlight bar over the menu you want to edit and press 
the ENTER key.


1.4.1  Modifying menus...

When MEDIT creates a menu, that menu is assigned the title 'Untitled' and given 
default values for each of its characteristic fields.  At this point, you must 
substitute your own values for the default values.  With MEDIT you can change a 

menu's title, size, position, color and contents.  Basically, MEDIT can be used 
with or in place of MCOMPILE.  The major difference between the two is that no 
source file is required to create the menu definitions.

To modify a menu, select the characteristic you want to change from the edit 
page (use function keys f3-f8 or ESC) and press ENTER.  

1.4.2  Changing menu characteristics...

As mentioned earlier, to change a menu characteristic, move the highlight bar 
over the characteristic you wish to change using the appropriate function key 
(f3-f8) and press the ENTER key to confirm your selection.

With the exception of f7, used to change the menu contents, changing the menu 
characteristics is a very straightforward and clearly described in the onscreen 
documentation of each modification area.  For your convenience, a brief 
description of the different modification areas is provided below:

o Change menu title (f3)

Invoke this function when you wish to change the title (appears at the very top 
of the menu) of the current menu.  The default title of any menu is "Untitled", 
to change the current title, simply type in  the new title name when the 
program asks for it. 

To leave a menu title unchanged, enter a blank line.  The program will warn you 
that no changes where made to the current title and allow you to return to the 
menu characteristic selection page.


o Change the menu size/position (f4)

Invoke this function when you want to change the menu's size or position on the 
screen.  

Changing the menu's size adjusts the amount of display area the menu has to 
work with on the screen. 

Changing the menu's position determines where the menu will appear on the 
screen when invoked by the menu execution utility (MRUN).


o Change the menu style (f5)

This function serves the same purpose as the KIND/STYLE command used with 
MCOMPILE.  Use this function to change the type of menu that appears on the 
screen.


o Change menu colors (f6)

Use this function to change the foreground and background colors for the 
current menu.

WARNING:  with monochrome displays, undesirable effects may result from some 
color combinations.  This is NOT an error, to correct any unwanted results, 
simply continue to select colors until a desired effect is achieved.
o Change menu contents (f7)

Use this function to modify option data within the current menu.  (see 
"Modifying option data" presented later in text)


o View changes (f8)

This function is provided to display the current menu as it might be seen in 
actual execution.  All changes to the current menu will be displayed.


o End edit/return to previous menu (ESC)

Using this function will return you to the menu selection page.  Before 
returning, the user is asked whether or not to save the current menu changes to 
disk.  

Pressing "Y" or the ENTER key will save the changes to disk and return to the 
menu selection page.  

Pressing "N" will return you to the menu selection page without saving the 
current changes.

Pressing ESC will abort the abort and return you to the menu characteristic 
selection page.


1.4.3  Modifying option data

When changing the menu contents, select "change menu contents" from the menu 
characteristic selection page (f7) and press the ENTER key.

The current menu will be displayed on the screen.  Use the arrow or letter keys 
(A-Z) to select the option you wish to edit and press the ENTER key again.  The 
"edit menu item" page will appear on the screen.

The edit menu item page contains three fields that are functionally identical 
to the OPTION, EXECUTE, LINK, and HELP commands used with MCOMPILE.  A 
description of each field, its importance, and how to modify it is provided 
below:

o Item label:

This field is used to name the current option and serves the same purpose as 
the "OPTION" statement used with MCOMPILE.  It allows the user to define how 
the option will appear in the current menu.  Labels are displayed as menu 
display space permits.

To modify this field, press the f2 key.  Type the new menu label followed by 
ENTER to accept.


o Destination:

This field allows the user to determine what type of response will be invoked 
when the current option is selected.  It serves essentially the same purpose as 
BOTH the LINK and EXECUTE commands used with MCOMPILE.

To modify this field press the f4 key.  At this point you may select the type 
of response you want by pressing "M" to invoke another menu, or "P" to pass a 
command line to DOS.  The "edit menu item" page will then allow you to enter 
the field you selected in the box directly below the "Destination" prompt.

If you selected "M" to invoke a child menu, enter the identification number 
(equal to the menu's position within the current menu file - 1) of the menu to 
invoke.  Unlike with the LINK command that MCOMPILE uses, all menus must be 
referenced by number.

If you selected "P" to pass a command line to DOS, enter the command line 
(without surrounding quotations) using the same rules as with the EXECUTE 
command that MCOMPILE recognizes (see EXECUTE, MCOMPILE).  All menu compiler 
commands are supported.


o Help:

This field allows you to define the documentation that is displayed when the 
current option is invoked using the f1 key.  The current version of MEDIT 
supports up to 5 lines of text.

To modify this field, press the f6 key.  Type in the appropriate 
documentation.  Text entry continues until a blank line is entered or 5 lines 
of text are filled.  All text is word wrapped at the end of each line to 
provide for the most attractive display so that the ENTER key need not be 
pressed at the end of each line of text.


TO ACCEPT ALL OPTION CHANGES AND RETURN TO THE PREVIOUS COMMAND LEVEL, press 
the ENTER key.

TO ABORT THE CURRENT OPTION CHANGES AND RETURN TO THE PREVIOUS COMMAND LEVEL, 
press the ESC key.

Once you have reached the option selection page, you may select another option 
to modify or return to the menu characteristic selection page.

To modify another option, position the arrow on the left side of the menu 
display to point to the option you wish to modify.  Press the ENTER key and 
repeat the instructions found at the beginning of this section.

To return to the menu characteristic selection page, press the ESC key.  All 
changes will remain in effect.

1.4.4  Summary of MEDIT organization...

                             +---------------+
                             |      DOS      |
                             +---------------+
                                     |
                        +-------------------------+
                        |   MENU SELECTION PAGE   |
                        |   -------------------   |<-------------+
                        | 1. Select menu to edit. |              |
                        |                         |              |
                        +-------------------------+              |
                                     |                           |
                    +---------------------------------+          |
                    |  CHARACTERISTIC SELECTION PAGE  |          |
                    |  -----------------------------  |          |
          +-------->|  2. Select menu characteristic  |----------+
          |         |     to edit...                  |
          |         |                                 |
          |         +---------------------------------+
          |                          |
          |              +----------------------+
          |              |       EDIT MENU      |
          +--------------|    CHARACTERISTICS   |
                         |         PAGES        |<---------+
                         | 3. follow directions |          |
                         |                      |          |
                         +----------------------+          |
                                     |                     |
                          +----------------------+         |
                          |  EDIT OPTION FIELDS  |         |
                          |         PAGE         |---------+
                          | 4. See section 1.4.3 |
                          +----------------------+


Menu selection page:

This page opens the current menu control program file and selects an individual 
menu definition to edit.


Characteristic selection page:

This page allows you to select an individual menu characteristic to edit. 
Modifiable  menu characteristics include menu title, size, position, style, 
color, and option response data.


Edit menu characteristics pages:

These pages vary with the characteristic being modified, follow the 
instructions provided with each modification area.


Edit option fields page:

This page is dedicated to entering an modifying option response data.  The 
three fields available for modification are Title, Destination, and Help.


Chapter 2  The other menu utilities...


2.1  Starting MLIST...

Use MLIST to examine any menu control program file.  MLIST reports the contents 
of each field in each menu definition.  To display the contents of a menu 
control program file, type

A>MLIST filename <ENTER>

where 'filename' is the name of the menu control program file to examine.  
MLIST will then start displaying menu data in a menu by menu format.  A 
description of the data provided is as follows:

Menu: ....            - Identifies the current menu by title.

Identification # .... - This field identifies the current menu by number, when
                        linking menus by number (via MCOMPILE or MEDIT), use 
                        this number to invoke the current menu.

Option ... is linked to menu ....

This message reports the response invoked (a child menu) when the current 
option is selected.  The letter following the 'option' identifies the current 
option, the number following the 'is linked to ' identifies the destination 
menu.  The destination menu's title is provided within the brackets following 
its numeric identifier.

Option ... executes:

This message reports the response invoked (a command line passed to DOS) when 
the current option is selected.  The letter following the 'option' identifies 
the current option, the expression displayed on the following line is the 
actual command line preprocessed by the menu execution utility.



2.2  Starting MCHECK...

Use this utility to repair damaged menu control program files.  MCHECK checks 
all pointers to make sure they are valid (point to the proper locations within 
the menu files).  When an invalid menu pointer is encountered, MCHECK remaps 
the pointer to point to a "best guess" of the true destination of the pointer.

To check/correct a menu control program file, type:

A>MCHECK filename <ENTER>

where 'filename' is the name of the menu control program file to operate on.  
MCHECK will then display menu analysis data from the current menu control 
program file.  A description of the analysis data commands follows:

Linking menu #... [], ... items:

This message indicates that the menu checker is examining a new menu.  The 
number following the '#' is the current menu identification number, the current 
menu's title is provided between the following brackets.  The number before the 
'items:' reports the number of defined options within the current menu 
definition.


Linking option ...

This message reports which option link within the current menu definition is 
being examined/corrected.  The letter following the 'option' indicates the 
current option.  If the destination menu has a lower identification number than 
the current menu the message:

WARNING:  Menu #... reverse linked to menu #...

is displayed to indicate a possible conflict.  As a matter of practice, menus 
should always reference menus with higher identification numbers and avoid 
referencing menus with lower identification numbers.  This is because, when a 
user aborts a menu using the ESC key, he is usually sent to a previous menu.  
Forward referencing may serve to confuse both the computer and the user and 
should be used with caution.


When MCHECK completes its analysis of the current menu control program file, it 
will display the message:

... corrections made.

where the number before 'corrections' will indicate how many pointers within 
the current menu control program file were remapped.


2.3  Starting MSET...

Unlike the other menu utilities, MSET does not modify or affect an MCP file.  
Instead, MSET modifies the file MSYS.ENV which controls the background 
displayed 'beneath' menus.  To invoke this program, type:

MSET <ENTER>

MSET will then display a block in the center of the screen that represents the 
menu environment.  Using 'H' for hue character, 'F' for foreground color, or 
'B' for background color, modify the environment by paging through different 
combinations.  Press the ENTER key to accept a given configuration.


Chapter 3  The Menu execution utility (MRUN.COM)...


3.1  Running your own menus from DOS...

Once you have finished developing a menu control program file, you may execute 
it from DOS using the menu execution utility (MRUN.COM).  To invoke the menu 
execution utility, type:

A>MRUN filename <ENTER>

where 'filename' is the name of the menu control program file to execute.  Use 
arrow or letter keys to select options, ENTER to invoke an option, and F1 to 
display any available help information for an option.  Pressing the ESC key 
will return you to previous menus, or to DOS if you are in the root menu (menu 
#0).


3.2  MRUN and your AUTOEXEC.BAT file...

On some machines, it may be advantageous to load the menu execution utility 
whenever the computer is turned on, so as to avoid DOS entirely.  This may be 
done by including the following line:

MRUN filename

where 'filename' is the name of the menu control program file to execute, in 
your system's AUTOEXEC.BAT file.  If your system already has an AUTOEXEC.BAT 
file, this line should appear as the very last line of the batch file.  (For 
more information, look for "BATCH FILES" in your DOS manual)  This can be done 
with any text editor and is fairly quick and painless.  If your system 
currently has no AUTOEXEC.BAT file, you may create one by following these 
simple steps:

1. At the DOS prompt, type:

A>COPY CON: AUTOEXEC.BAT <ENTER>



2. Next type in the following:

MRUN filename <ENTER>
^Z

3. DOS should respond with:

1 file(s) copied.

4. To test the batch file, at the current DOS prompt, type:

A>AUTOEXEC <ENTER>

DOS should now execute your menu.

* Notes:

Step 2 - ^Z should be read as "control-Z", this means hold down the Ctrl and Z 
         keys at the same time.

The AUTOEXEC.BAT file must be located within the root directory in order to be 
invoked when the computer is first turned on.

The expression 'filename' should be interpreted to mean the name of the menu 
control program file that you wish to execute.  In other words, substitute the 
name of the MCP file you want to execute in place of the expression 'filename'.

If the named file does not exist within the current directory, you must include 
the path name of the file as a part of its 'filename'.



Chapter 4  A sample source file...


The following menu control program can be found in the ascii file SAMPLE.SRC, 
and may be compiled using MCOMPILE.COM.


# Define Opening menu (see section 4.1)
menu "Opening menu"
uppercase
kind 3
color 7,0
window 4,4,44,10

# define dos functions option
 option "Quick DOS functions menu"
  link 1
 enddef

# define FRONT END system option
 option "FRONT END functions menu"
  link 2
 enddef
enddef

# define Quick DOS menu (see section 4.2)

menu "Quick DOS menu"
 window 25,10,55,18
 kind 3
 lowercase

# define list option
 option "directory"
  execute "dir input$(Enter search specification:)"
  help
   . "use this function to look at files"
  enddef
 enddef

# define type option
 option "type file"
  execute "type file$(*.*)"
  help
   . "use this feature to look at files"
  enddef
 enddef

# define copy option
 option "copy file"
  execute "copy file$(*.*) input$(Input destination specification:)"

SAMPLE.SRC continued...

  help
   . "use this feature to copy files"
  enddef
 enddef

# define print option
 option "print file"
  execute "copy file$(*.*) > prn:"
  help
   . "use this feature to send files to the printer"
  enddef
 enddef
enddef

# define FRONT END menu

menu "Quick FRONT END menu"
 kind 3
 window 10,10,48,19

# define menu compile option
 option "compile menu file"
  execute "mcompile file$(*.src)"
 enddef

# define menu edit option
 option "edit/examine menu"
  execute "medit file$(*.MCP)"
 enddef

# define change environment option
 option "change enviroment"
  execute "mset"
 enddef

# define list menu contents option
 option "examine menu file"
  execute "mlist file$(*.MCP)"
 enddef

# define check menu contents option
 option "correct menu file"
  execute "mcheck file$(*.MCP)"
 enddef
enddef


4.1  The Opening menu

The Opening menu is used to select either the Quick DOS menu or the Quick FRONT 
END menu.  ESCaping from this menu returns the user to DOS; selecting either of 

the two options will allow the user to enter a limited number of DOS commands 
or to execute the different FRONT END utilities.  This menu serves as the ROOT 
menu, and much like the roots of a tree, provides the foundation for all other 
menus.


4.2  The Quick DOS menu

The Quick DOS menu allows users to optionally execute a limited number of DOS 
commands.  These commands include copying a selected file, displaying a 
selected file, printing a selected file, or getting a directory of a disk 
device.

While only the most "harmless" of the DOS commands were selected for 
demonstration purposes, with a little modification, this particular menu 
definition could be expanded to execute up to 26 DOS commands directly.  
Another approach that could be taken would be to group DOS commands into their 
own executable menus.  Instead of executing DOS commands directly, the Quick 
DOS menu would then selectively execute the menus according to group.  In this 
manner, the Quick DOS menu could indirectly execute as many as 26^2 or 26*26 
DOS commands.


4.3  The Quick FRONT END menu

The Quick FRONT END menu allows users to access the FRONT END menu utilities 
without going through DOS.  After the completion of each command, control will 
be passed back to the menu execution utility.  In this manner, a user may 
perform a number of operations on a development file in a relatively short 
amount of time.

Because MSYS.ENV is read only when a menu utility is first loaded, adaptations 
made using MSET in this manner will not effect the current implementation of 
the execution utility.  However, utilities executed from the Quick FRONT END 
menu will be affected.

Chapter 5  Program limitations for FRONT END version 1.0


1. The file$ function will only read a finite amount (enough to fill the
   window) of file names per directory and does not support multiple pages of
   files.  While it is unlikely that you will exceed the limit set for the
   number of files displayed per window, this problem can be corrected by
   making better use of subdirectories.

2. Because a menu control program file and the menu execution utility can both
   fit onto a single floppy disk, it is possible to configure individual disks
   provided that any target programs exist on their destination drives.  In the
   case of double floppy systems, it is usually better to place the menu 
   executive and menu control program on one disk in drive A and any target
   programs on drive B.

3. The FRONT END was originally developed on a 640k PC compatible system.
   Because the development system is broken down into separate programs, memory
   consumption is kept to a minimum.  However, the menu execution utility
   requires a certain amount of memory set aside to execute other programs in 
   addition to the memory needed to keep track of menu data.  For these 
   reasons, it is not recommended that FRONT END be executed on any system with
   less than 384k.  If users experience allocation errors and so on, lack of
   memory on the host machine may well be the culprit.

4. FRONT END will only run under DOS versions 2.00 and greater.  If your system
   uses a version older than 2.00, you will have to upgrade to use FRONT END.

5. FRONT END behaves in a slightly different manner between DOS versions 2.xx
   and 3.xx.  Under DOS 2.xx, a COMMAND.COM disk must be present in the disk
   drive from which you booted the computer BEFORE any child processes may be
   executed.  Careful planning should be undertaken to insure that FRONT END
   has access to all of the files it will need to perform an operation (MENU
   CONTROL PROGRAMS, COMMAND.COM, AND ANY "TARGET" PROGRAM OR PROCESS).


Chapter 6  If you have problems or questions...


On-line support for the FRONT END menu development system is available to 
registered users (see file README.DOC for details) 24 hrs a day through:

CapeNet BBS
(804) 971-4947
300 or 1200 baud, 8 bits, no parity

Letters and other correspondence may be sent to:

Sherman R. White Jr.
INNOVATIVE SOFTWARE DESIGN
607 Beechwood Drive
Charlottesville, VA  22901

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk No 1301  FRONT END version 1.0B  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To install Front End to a hard drive, type:                           ║
║                                                                         ║
║             HDNSTALL (press enter)                                      ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```

Notes on installation:

Though the FRONTEND menu generation system comes with its own installation
batch files for both double floppy and hard disk systems, they may or may not
work on your particular system.  In the event that the automatic installation
batch files do NOT work, these notes are provided to assist in installing
FRONTEND on your system.

FRONTEND may be successfully installed on any system by placing all of the
files found in FRONTEND.ARC together on a boot disk with COMMAND.COM on it.

For most applications that you develop, it will suffice to put only MRUN, the
object file, and COMMAND.COM on the destination disk; the other utilities are
for development purposes only.


```
{% endraw %}

## README!.DOC

{% raw %}
```
FRONT END
A menu development system.

Copyright/Author:   (c) 1987 by Sherman R. White Jr.

Date:     October, November 1987
Version   1.0 Beta

Systems:  For MS-DOS 2.0 or greater on IBM PCs and close compatibles only.
          While a hard disk device is recommended, a double floppy disk unit
          may be used for customizing individual disks.

Purpose:  This program generates customized, menu oriented, user-friendly
          environments to greatly simplify computer usage.  It accomplishes
          this by acting as a "front end" (or translator) to insulate users
          from the many frustrations associated with DOS.


About the program...


FRONT END is a menu development system dedicated to the purpose of simplifying
computer usage.  A limited license is hereby granted for the personal/non-
commercial use and distribution of this program.  No fees may be accepted for
this program or its use without my written permission.  A separate license is
available for commercial software developers seeking to use FRONT END in
conjunction with their own products, and businesses interested in promoting
themselves through its use.  Interested parties should contact me at the
address given below.


User Supported Software and Innovative Software Design


Innovative Software Design was created as a means to help pay for my college
expenses.  The FRONT END menu development system was created to help simplify
computer usage and increase personal productivity.  If you like this program,
find it useful, are interested in the support I'm offering for it, or just want
to do something you can feel good about, please send a check or money order in
the amount of $35 to:


                       Sherman R. White Jr.
                       INNOVATIVE SOFTWARE DESIGN
                       607 Beechwood Drive
                       Charlottesville, VA  22901


make all checks payable to Sherman R. White Jr.


What do you get for your contribution?


You become a registered customer of Innovative Software Design entitled to
free* updates and access to various other related software products that I
develop.  You get all the support that I can offer you though mail, telephone,
and electronic bulletin board.  In addition to helping me afford the high price
of an education, your contributions also make it possible for me to buy the
tools to support and develop better software.

I enjoy computer programming and develop new programs all of the time.  Amongst
the software I have already developed to run with FRONT END is a programmer's
package to allow programmers to load, modify, and display menu files in their
own Turbo Pascal programs, and utilities to access certain DOS and BIOS
services from Turbo Pascal.

Coming attractions include various other utilities such as an examine utility
to display ascii text files in a window, limited "desk" accessories such as a
calendar, a calculator, and a notepad, an RS232 compatible version of the menu
execution utility to interface FRONT END menus to your bulletin board, and
much, much more.


*Note:

There is no charge for persons supplying their own disks or downloading
software from the support bulletin board, for those not supplying their own
disks, there will be a small $1.25 duplication/postage fee.


It is truly my belief that this software would be harmless, but of course no
README.DOC would be complete without the following disclaimer:

NOTICE:  This software is provided on an "as-is" basis without warranty of any
kind, expressed or implied, including but not limited to warranty of
merchantability, fitness for a particular purpose, performance, or otherwise.
Should the program prove defective, you assume the entire cost of all necessary
repair, servicing or correction.  In no event will the author be liable to you
for any damages, including any lost profits, lost savings or other incidental
or or consequential damages arising out of the use or inability to use this
program.


Bulletin Board Support is available through:

CapeNet BBS
Sysop:  Tom Allensworth
300/1200 Baud, 8 bits, No parity
Operated 24 hours a day, 7 days a week
(804) 971-4947


Special Thanks to:

Tom Allensworth for helping me support this beastie, Matt Crispin, Scott
Johnson, Mark Cagley and Pat Wilson for their ears, eyes, reviews, opinions,
help and advice.


BETA-RELEASE Modifications made to this program as of 11/3/87:

MEDIT.COM  modified to display color names as well as hexidecimal values during
           color selection routines. (11/3/87)

MRUN.COM   modified to allow the use of the ESC key to abort procedures using
           the file$ function...and to allow the entering of a null string to
           abort procedures using the input$ function.   (10/29/87)

           modified to allow a new function NOPAUSE$ (see addendum below) that
           optionally disables the key wait before return to menu control
           program. (11/3/87)

MSET.COM   modified to optionally disable the date display through the use of
           the 'd' toggle command.  (10/29/87)

           modified to include color alignment charts, as well as hue character
           verification.            (10/30/87)


MORE CHANGES TO COME!!!


* All other utilities were modified slightly to accomodate the changes in the
  three previously mentioned utilities.

* MRUN, MCOMPILE, and MLIST had their self documentation modified to include
  changes from last version.



ADDENDUM  (added: 11/3/87):


The following enhancements have been made to the functions recognized by
MRUN.COM.  These descriptions maintain compatibility with older versions of
and MRUN should be used in place of the function descriptions found in the
FRONTEND Manual.


FILE$, FILE$(filespec)

This function reads the named files within the current directory and allows the
user to select a file from a window using the computer's arrow keys.  This
function may be aborted by pressing the ESC key.  In this case, command line
execution will also be aborted and control will be passed back to the menu
control program.


INPUT$(prompt)

This function allows the user to get a string directly from the keyboard before
processing the current command line.  The prompt string is displayed above the
input field.  This function may be aborted by entering a NULL string.  In this
case, command line execution will also be aborted and control will be passed
back to the menu control program.


NOPAUSE$

This function disables the key wait before reentering the menu control program.
After executing a command line, the prompt

Hit any key to return to menu control program...

appears at the bottom of the screen.  Before returning to the menu control
program, the user must hit a key.  This feature is provided so that any text
generated by the child program may be read before being destroyed by the menu
control program screen display.  In some case however, the forced pause may be
superfluous.  By using the NOPAUSE$ option, the menu control program will be
executed immediately after execution of the child program terminates, allowing
for a smoother display transition.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1301

     Volume in drive A has no label
     Directory of A:\

    DOSNSTAL BAT      1304  10-05-87   3:39p
    FRONTEND DOC     40889  10-05-87   3:15p
    HDNSTALL BAT       985   2-21-89  10:14a
    INSTALL  DOC       713  11-03-87  10:58p
    MCHECK   COM     20371  10-29-87   1:01p
    MCOMPILE BAT        33  10-05-87   2:13a
    MCOMPILE COM     26877  11-03-87   5:35p
    MEDIT    BAT        30  10-05-87   2:12a
    MEDIT    COM     47672  11-03-87   5:11p
    MLIST    COM     19858  11-03-87   5:34p
    MRUN     COM     34589  11-03-87   5:40p
    MSET     COM     20022  10-30-87   2:53a
    MSYS     ENV         4  11-03-87   5:05p
    README!  DOC      7307  11-03-87  10:24p
    SAMPLE   MCP     48426  11-03-87   5:23p
    SAMPLE   SRC      1627  11-03-87   5:22p
    SAMPLE1  BAT        14  10-05-87   3:05p
    SAMPLE2  BAT        24  10-05-87   3:05p
    FILE1301 TXT      2066   2-23-89   1:25p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   2-21-89  10:16a
    MANUAL   BAT       147  12-15-88  12:39p
           22 file(s)     273998 bytes
                           34816 bytes free
