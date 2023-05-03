---
layout: page
title: "PC-SIG Diskette Library (Disk #829)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0829/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0829"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NEW YORK EDIT (PROGRAMMERS EDITOR)"

    NEW YORK EDIT is a program editor, written by the author of NEW YORK
    WORD, containing a C-like macro programming language which can be used
    to extend the editor.
    
    Sample macros are included and you can create other macros to define
    your own commands.  Other features of interest to programmers are:
    multiple windows, column cut-and-paste, capturing DOS output, line
    marking, regular expression search and substitute, EGA support
    (forty-three-line display), and a keyboard remapper.
    
    Up to 12 windows can be displayed simultaneously, with a different
    file in each window.  You can enlarge any window to occupy the whole
    screen.  Place bookmarks at various points in the document, and return
    to any point at any time.  Scroll continuously up or down the document,
    with user-selectable scrolling speed.  There are 10 buffers which you
    can use to temporarily store text.  A configuration file is included to
    change the program parameters.
    File Descriptions:
    
    ARCE     COM  Unarchiving program.
    CHANGES  DOC  Text file outlining changes in new version.
    CONFIG   ME   Sample configuration file.
    CTAGS    EXE  File used by main program.
    INSTALL  BAT  Installation batch file.
    KEYCHART      Keychart descriptions.
    MANUAL   ARC  Archived version of the manual.
    ME       EXE  Main program.
    HELP     ARC  Archived help files.
    MACROS   ARC  Archived macro files.
    READ     ME   Information from the author.
    REGISTER DOC  Registration form.
    WP       DOC  Sales pitch for NEW YORK WORD.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHANGES.DOC

{% raw %}
```
                      CHANGES TO ME VERSION 2.1

Virtual/EMS memory support!!!
  The really big news for this release is that ME now supports virtual 
memory and expanded memory (if you have an expanded memory driver in
your system). This means that you can edit files as large as the free
space on your disk!!!

  ME still relies on the memory management routines found in the
Microsoft C run-time library (ie - malloc()) to allocate blocks to
hold the lines in. When malloc() returns a NULL to ME, signifying that 
DOS no longert has any free memory to give away, ME will try to
allocate pages from expanded memory. When expanded memory runs out, ME 
will start swapping to disk. ME creates a temporary swap file with the 
name VMxxxxxx. ME will delete this file when you exit back to DOS.

  The METEMP environment variable controls where the swap file will
be stored. By default, ME puts the swap file in your current
directory. If you want the swap file to be placed in another
directory, or on a RAM disk (for faster access), then you can set the
METEMP environment variable to the full DOS path name that you want to 
use. For instance, if you have a RAM disk on drive E:, then you can
have the following line in your autoexec.bat file :

  set METEMP=e:\


Real Tabs now supported!
  Thanks to user John Palmer, ME now supports real variable-length
tabs. The cursor will now jump over the virtual space represented by a
tab character. Using real tabs will probably save you some space on
your disk, especially if you tend to use a lot of blanks for padding. 

  You can control whether ME will use real tabs or not by altering the 
'rt' parameter in the CONFIG.ME file.


Customizable word delimiters
  Three commands need to know what constitutes a word; these commands
are <NEXTWORD>, <PREVWORD>, and <DELWORD>. By default, ME considers a
word to be a series of alpha-numeric characters. Through the macro
language, you can tell ME what it thinks a word should consist of. See
the section below on the macro language additions for more in-
formation. 


New option for Block Indent
    The amount of space a block moves when you indent/undent is now con-
trolled by the 'sh' parameter in the options menu (and CONFIG.ME file). 


Support for enhanced keyboard.
  ME now supports the extended keyboard. Previously, ME did not
recognize the keys on the separate cursor keypads. Now, those keys
invoke the same functions as their counterparts on the numeric keypad.


New arguments for the DOS command line
  You can now give wildcards on command line. ME will find all
matching files and will attempt to load in as many files as it can
before it runs out of window space. (Unfortunately, ME will not load
the remaining files into "invisible" buffers. Let us know if you want
this capability.)

  If ME is started with a command line argument of -g<n> where <n> is
a number, then upon loading the first file on the command line, ME
will jump to line <n> in that file. This is useful for programs which
analyze the error messages generated by a compiler, and wish to invoke
the editor and bring it immediately to the error line. As an example,
the command line "me -g25 ed.c" will load file ed.c and immediately
jump to line 25.

    Two new command line arguments, -c<num> and -r<num>, tell ME how
many rows and columns are supported on the video display. Some video
adapters are able to display more than 80 columns and more than 25
rows in normal operation. If ME is invoked with these options, then it 
will start up assuming that your display is already set at the
specified number of rows and/or columns.

    For instance, the Everex enhanced EGA board is capable of
displaying 132 columns of text on one row. If your display is already
set up in this mode, then you must put the argument "-c132" on the ME
command line. It is probably easiest to do this within a BAT file.


Support for Video Boards
    In the paragraph above, we mentioned that the -c and -r options will
work only if you are in the alternate video mode when you enter ME. Many
people would also like to use alternate video modes in conjunction with the
<TOGGLE EGA> command (CTRL-E).

    In version 2.0 and below, the <TOGGLE EGA> command would simply toggle
between the normal 25 line mode and the 43 line mode produced by the EGA
when you load in the EGA's 8X8 font. Now, we offer video drivers which ME
can load in when it starts up. The video driver contains information about
the alternate video mode, such as the number of rows and columns it
supports, the code to turn the alternate mode on, and the code to turn it
off.

    A video driver is loaded into ME by specifying the "-v<drivername>"
option on the ME command line. ME will perform its normal searching
algorithm to find the driver (first search the current directory, then the
paths specified by the ME environment variable, then search through the DOS
path). 

    If you have a need for a video driver, or information on ow to write
your own, please contact us.


Command-line history using up and down keys
    We have enhanced the prompting mechanism by allowing you to recall 
previously entered responses. Responses are saved in a circular queue 
in a last-in-first-out fashion. When ME prompts you for a response
(such as when you invoke the <SEARCH> command), you can use the up and 
down arrow keys to scroll backwards and forwards through the previous
responses. You can press <ENTER> to accept that response, or you can
use the editing keys to modify the response before accepting it.

    The maximum number of responses which are saved is 16. When the
response queue gets full, the oldest response is discarded to make
room for the new response.


Current pick buffer displayed
    The number of the current pick buffer is now displayed on the status
line, right next to the "modified" indicator.


Desqview compatibility.
    ME now detects if DESQVIEW is loaded, and if it is, uses
DESQVIEW's alternate screen buffer when video accesses are done. This
enables you to use ME in a DESQVIEW window along side other processes. 
In addition, if DESQVIEW is loaded, ME will not continuously poll the
keyboard for the shift status. This will let other processes run
smoothly under DESQVIEW.
(DESQVIEW is a trademark of Quarterdeck Office Systems.)


Keyboard push/pop fixed
  The keyboard_push() and keyboard_pop() functions now work correctly. 
Thanks to Kirk Wyatt for pointing out some glitches.



                    MACROS LANGUAGE ENHANCEMENTS
                    ----------------------------

**************************************************************************
*         IMPORTANT     ATTENTION     ACHTUNG      ATTENZIONE            *
**************************************************************************

    You must recompile all of your existing macros with the new 2.1 macro
compiler!!! They will not work otherwise!!!

    In addition, we now recognize the difference between a carriage return
('\n', ascii 10) and a line feed ('\r', ascii 13). An ASCII 13 ('\r') is
generated when the user presses the ENTER key. An ASCII 10 ('\n') is
generated when the user presses the CTRL ENTER key combination. If any of
your macros test the keyboard for an ENTER key, you will need to change the 
test from a '\n' to a '\r'.


    We have added several new datatypes to the ME macro language which 
should help with calling external C functions. The new data types are
  unsigned        values range from 0 to +65,335
  long            values range from -2,147,483,647 to +2,147,483,647
  unsigned long   values range from 0 to +4,294,967,295

    You can now take get address of a variable and assign it to
another variable or pass it as an argument to an external C function.
Just like with the C language, an ampersand ('&') before a variable
will give you the address of the variable. 

    We added a new event (event number 9) which can be "hooked" into.
This new event occurs just after a command is processed. Event number
8 still occurs just before a command is processed. The new event will
let you perform any post-command processing that you need to do.


    We added new functions to let you access the delimiter table.
These functions are :

  void reset_word_delimiter()
    Resets the word-delimiter table to its default state.

  void set_word_delimiter(string delimiters, int value)
    For each character is the string 'delimiters', sets the
corresponding entry in the word-delimiters table to 'value' (usually 0
or 1). If entry 'i' has a value of 0, then it is *not* a word
delimiter. 

  void clr_word_delimiter(int value)
    Sets the entire word-delimiter table to the specified value
(usually 0 or 1). If entry 'i' has a value of 0, then it is *not* a
word delimiter.


New C functions added
    The following C functions can be accessed through the macro lan-
guage :

  void vidsetcursor(int start, int end)
    Sets the starting and ending scan lines for the cursor to 'start'
and 'end' respectively. This is useful for macros where you would like 
to hide the cursor (start=32,end=0) or change it from the default scan
lines for insert and overstrike modes.

  int get_window_color()
    Gets the color of the current window. The color returned has the
value of (background * 16 + foreground).
 


Mouse Support (DOS only)

    ME now supports the use of any mouse which has a Microsoft mouse
compatible driver.

    In the macro language, we have set up some new events which let
you trap mouse button presses. Event 11 is generated when you press
the left mouse button, event 12 is generated when you press the right
button, and event 13 is for the middle button. If the editor finds
that there is a hook defined on any one of these event, it will call
the hook macro. Otherwise, the default actions that it takes are :

  Left button click   - mark the current line
  Right button click  - set the cursor position to the clicked
                        coordinates
  Middle button click - no action

    If the mouse is moved while the left button is held down, then the 
marking of the lines which the mouse passes over will be toggled.


               CHANGES TO VERSION 2.0 OF THE ME TEXT EDITOR

Windows
-------

    The biggest change to ME's windowing is the addition of vertical
windows. When you press <ALT> 2 to open another window, ME will read the
specified file and then ask you if you want to split the file horizontally
or vertically. The default is a horizontal split; if you press 'v', the
window will be split vertically.

    In previous versions of ME, each window was approximately the same
size. So, if you had three windows open, then each window would take up 7
lines. Starting with version 2.0, when you open a window, the current
window will be divided in half.

    The addition of vertical windows also meant some difficulties for EGA
mode. Starting with version 2.0, you can only toggle in and out of 43-line
mode if there is one window open. It gets extremely difficult to determine
how a user wants windows resized when the characteristics of the screen
changes, so we took the easy way out.

    Windows now have window identifiers associated with them. A window
identifier is just an integer. This id can be used in the new window
oriented macro functions which are detailed below.


New Keyboard Handling
---------------------

    The entire method of handling the keyboard was changed. As much as we
have tried to avoid the EMACS model of editing, there are just some things
that Richard Stallman did that we can't ignore. The concept of "keymaps"
fits the concept of "extensibility" perfectly. Therefore, ME now supports
keymaps.

    A keystroke can be bound to an editor function, a user-defined macro, a 
keyboard macro, or another keymap. A keymap is just an array of 256
keystrokes, and can be referred to by an integer identifier (much the same
way that buffers and windows have ids). There is also a "current keymap"
which is active at any time. When a keystroke is pressed, the command
associated with the bindings of the current keymap will be executed.

    There are several new primitives in the macro language which allow you
to manipulate keymaps. You can push and pop keymaps from a stack. You can
create new keymaps and assign them default value. These new primitive are
outlined in the section below. 

    By using keymaps, we have been able to remedy some deficiencies that
were present with the macro language, as well as making the command
structure and keyboard handling more consistent.

    Some of the things we were able to fix/enhance are :

 - The repetition factor now works for all commands
 - A macro function can now be bound to more than one keystroke sequence
   (For instance, both F1 and ALT F1 can now invoke the same macro).
 - Assign_key() can now bind a macro or editor function to a keystroke
   sequence consisting of multiple keystrokes. For instance,

    #define CTRL_Q      17
    #define CTRL_G      7
     ......
    assign_key("goline", CTRL_Q, CTRL_G);

will assign to <GOTO LINE> function to the two-keystroke sequence <CTRL> Q, 
<CTRL> G. This will make it much easier to emulate other editors' keystroke 
bindings.

    In previous versions of ME, you could capture a sequence of keystrokes
using the F4 key and replay them using the F3 key. This meant that you
could only have one keyboard macro defined at one time. Starting with this
version, you can assign a keyboard macro to any key using the SHIFT-F4 key.


Macro Language
--------------

    Several enhancements to the syntax of the macro language were made.
Switch/case statements can now take strings. This means that you can have
the following switch statement :

  string s;
  ...
  switch (s)
  {
    case "HELLO" : ......
                   break;
    case "BYE"   : ......
                   break;
    default      : ......
                   break;
  }

    We have added labels and gotos to the macro language. These are exactly 
the same as the corresponding ones in C. The format of a label is

  label-name:

The format of a goto is

  goto label-name;

Of course, the label name must exist in the same function as the goto. An
example of a goto statement is the following :

  a: ......
     ......
     goto b;
     ......
     goto a;
     ......
  b: ......

A goto may backward or forward reference a label.


    Hexidecimal constants are now allowed in the macro language. These
constants have the same format as hex constants in C. The format is

    0x followed by a series of hex digits
    
For example, 0x10 is hexidecimal 16, and 0xFFF is hexidecimal 4095.


Keyboard Speedup
----------------

    If you have an AT-class machine, then you can take advantage of the
machines programmable typeamatic rate. There are two new parameters in the
options menu (and in the CONFIG.ME file as well). These parameters are :

  kr - keyboard typeamatic rate when a key is held down
  kd - delay until typeamatic takes effect

    In a normal computing environment, the rate is 12 and the delay is 1.
To get maximum keyboard speedup, set both of these values to 0.


New Macro Primitives
--------------------

    We have added a bunch of new primitives to the macro language.

id = create_window(r1,c1,r2,c2[,color])
  int  id;
  int  r1, c1, r2, c2;          /* coordinates of the window */
  int  color;

  Creates a "popup" window at the coordinates <r1,c1,r2,c2>. You may optionally 
specify a color as the last parameter. The color value should be :

   (background color * 8) + foreground color

    A window created with this function is considered to be a temporary
popup window for doing things like menus, messages, etc. One distinction
between this kind of window and a regular window is that a popup window
will not be replaced with another window when the popup window is killed.

    When the window is created, there is no buffer attached to it, so
nothing will be displayed. You must use attach_buffer() and show_buffer()
to display the buffer in the window.

    The value returned is the identifier of the created window. The
identifier can be used in various other window-related macro functions to
address that particular window.


window_id = attach_window(window_id, buffer_id)
  int window_id, buffer_id;


    Attaches the buffer whose id is 'buffer_id' to the window whose id is
'window_id'. If this function is successful, then the window_id is
returned, or else -1 is returned.

    This function is typically used to connect a buffer to a popup window
before displaying the buffer.

    Here is an example of its usage :

 int win_id, new_buf;

 new_buf = setcurrbuf(create_buffer("HELP.MNU"));
 win_id = create_window(MenuRow1+1,MenuCol1+1,MenuRow2-1,MenuCol2-1,MenuColor);
 attach_window(win_id, new_buf);
 show_buffer(new_buf);


Keymap macros ----

id = keyboard_push()
  int  id;

    Keyboard_push() will push the current keymap on the keymap stack. A
copy of the current keymap is created and is made the current keymap. The
id returned from this function is the identifier of the new keymap.

id = keyboard_pop(destroy_old)
  int  id;
  int  destroy_old;

    Keyboard_pop() will pop the top keymap on the keymap stack and will
make it the current keymap. The id returned is the id of the new keymap. In 
addition, the current keymap will be destroyed if the parameter 'destroy_old' 
is non-zero. If the current keymap is not destroyed, it can be recalled at
any time by the function keyboard_set().

id = keyboard_id()
  int  id;

    Keyboard_id() returns the id of the current keymap.

id = keyboard_set(id)
  int  id;

    Keyboard_set() sets the current keymap to the keymap whose identifier
is id. If this is successful, then the id will be echoed as a return value. 
If not successful (ie - the keymap with the specified id does not exist),
then -1 is returned.

keyboard_defaults()

    Keyboard_defaults() will bind all of the keys of the current keymap to
the default values. The default values are the keystroke bindings that
comes preset when you obtain ME.


change_option(option, value)
  string option;        /* the two-letter option name to alter */
  int    value;         /* the new value */

    Change_option() allows you to alter the value of any of the editor
parameters which you find in the options menu and in the CONFIG.ME file.
The first parameter is the two-letter code for the option and the second
parameter in the new value.

    Here are two examples :

  change_option("in", 'Y');     /* turns insert-mode on */
  change_option("sv", 200);     /* sets autosave to every 200 keystrokes */
  
pos = search_string(str, pattern)
  int    pos;           /* 0-based position that the pattern occured in */
  string str,           /* the string to search through */
         pattern;       /* the pattern to look for */


    Search_string searches through the string specified by the first argu-
ment for the regular expression specified by the second argument.

  if ((pos = search_string(currline(), "[0-9]")) >= 0)
    message("The current line contains a digit");
  else
    message("No digit present in the current line");


Miscellaneous changes
---------------------

    The "-4" option on the command line will start ME in 43 line mode if
you have an EGA. For example, the command line :

  me -4 ed.c

will edit the file ed.c starting in 43 line mode.


BUGS FIXED
----------
- Macro functions can now have names consisting of upper and lower case
letters.
- A bad EXM format on initial load will not cause a lockup.
- Entab won't compress blanks embedded in double-quoted strings. This
should make blank compression a little more reliable.


17) added tonum(str) in macro lang


Ability to link in external C functions
---------------------------------------

    If you have the source and/or object code for ME, you have the ability
to link in external large model C functions, or functions written in any
language which obey the conventions of the C large model calling sequence.

    There are only two kinds of parameters which you can pass to these
linked functions - integers and strings. You can only receive an integer
back as a return value (or any data item which fits in 16 bits).

    To link an external C function in, you must make an entry in the table
in file CFUNCTBL.C. Each entry in This table has two elements - the name of 
the function and a pointer to the function. You will use this name in the
macro language to refer to your function.

    After your entry has been inserted in the table, you must recompile
CFUNCTBL.C, and relink the editor modules.

    So far, the following C functions are available for use in the macro
language :

   display(row, col, maxcol, color, str)
     int  row, col, maxcol;
     int  color;
     string str;
   Displays a string on the screen in the specified color. Row and Col are
   0-based coordinates to display string at. Maxcol specifies the last
   column that a character from the string can be displayed. An example is:
  
  display(10, 20, 60, 0x2E, greeting);


   clear_screen()
   erases the entire screen.

   move_cursor(row, col) 
     int  row, col;
   moves the cursor to position <row,col> on the screen. Both row and col 
   are 0 based, so the top left corner is at <0,0>.
   
--------------------------------------------------------------------------

Argument processing for do_macro()
----------------------------------
Do_macro()  can  now  take  arguments.  This  allows  you  to build a macro
command line dynamically and invoke the macro with  the  passed  arguments.
Also,  a macro name entered by ALT P can take args. An arg beginning with a
digit is considered to be an integer, otherwise it's  considered  to  be  a
string.  Look  at  the  macro  called  'menu' to see how a command line for
do_macro() is built at run-time.

    Each argument can be separated by spaces or a comma.

    As an example :

  string macname, arg1, arg2;
  int    tab_amt, maxcol;

  macname = "shift_line";
  arg1    = tab_amt;
  arg2    = maxcol;
  .......
  do_macro(sprintf("%s %d %d", macname, arg1, arg2));


Enhanced formatting for message() and get_tty_str()
---------------------------------------------------
    Message()  and  get_tty_str() can now take sprintf()-type formats and a
variable number of arguments. This will make the debugging of macros a lit-
tle easier. For example : 

  message("Hello %s", username);
  foo = get_tty_str("Variable i is [%d]", i);

Hooks
-----
    A  "hook" is a user-defined macro which is executed when certain events
occur in the editor. The purpose of a hook is to allow the user  to  modify
or  "filter" the processing which the editor does when these events happen.
The following events are supported :

  Event Number          Event Type
  ------------          ----------
   0                    The user inserted a character into the text
   1                    The editor is terminating
   2                    An illegal command was pressed
   3                    The CTRL BREAK key was pressed

    We will add other event numbers as the need comes up  -  send  us  your
suggestions!

    There are two primitives which manipulate hooks - one for adding a hook
and the other for removing a hook.

add_hook(eventnum, macro)
  int  eventnum;
  string macro;

DESCRIPTION

    Add_hook()  will  cause  the user-defined 'macro' to be called whenever
the event 'eventnum' occurs. The macro should NOT expect any  arguments  to
be passed.

PARAMETERS

    'Eventnum'  is a number from 0 through 3. The event numbers are defined
as follows :

  Event Number          Event Type
  ------------          ----------
   0                    The user inserted a character into the text.
                        The hook will be called before the cursor is
                        advanced to the next column.
   1                    The editor is terminating
   2                    An illegal command was pressed
   3                    The CTRL BREAK key was pressed

    'Macro' is the name of a macro which should be called  when  the  event
occurs. 

RETURNS

    Nothing.

EXAMPLE

  init()
  {
     ......
     add_hook(0, "charhook");   /* called whenever a char is inserted */
     .......
  }

  charhook()
  {
    /* Map all lower case letters to upper case */
    if ((c = currchar()) >= 'a' && c <= 'z')    /* lower case letter */
    {
      c = 'A' + c - 'a';                        /* xlate to upper-case */
      delchar();                                /* remove the bad char */
      insert(chr(c));                           /* & insert the good one */
    }
  }


delete_hook(eventnum)
  int  eventnum;

DESCRIPTION

    Delete_hook() will remove the hook associated with event 'eventnum'.

PARAMETERS

    'Eventnum' is an integer defined in the table above.
    
RETURNS

    Nothing
    
EXAMPLE

  delete_hook(0);


File Searching
--------------
  rc = set_filespec(file_spec)
    string file_spec;
    
RETURNS

  If at least one file is found which matches the filespec, the number 
1 is returned or else 0 is returned.

  fname = next_filespec()
  string fname;

RETURNS

  If another file matching the filespec is found, the name of the file
is returned, or else the 0-length string is returned.

Example
-------
  /* Prompt for a file specification, and insert each file name matching */
  /* the filespec into the file                                          */

  if (set_filespec(get_tty_str("Input the filespec : ")))
  {
    while ((fname = next_filespec()) != "")
    {
      insert(fname);
      insert("\n");
    }
  }


timestr = time()
  string timestr;

  The time() function returns a string which has the system time in the
form hh:mm:ss. 


datestr = date()
  string datestr;
 
  The date() function returns a string which has the system date of the form
mm/dd/yy.

--------------------------------------------------------------------------
The TAGS function <CTRL T> is now implemented as a macro. To use this
facility, you must load the TAGS macro into the editor. If you do this
from the DOS command line, you would use the command :

   ME -lTAGS <filename>
   
When you invoke the TAGS macro, you will be asked for the name of the function
to look up. If you press <ENTER>, you will be presented with a menu of
functions in a full-screen window. You can use the UP and DOWN arrow keys to
move through the menu. Position the highlight over the desired function and
press <ENTER> to select that function.
--------------------------------------------------------------------------

ALT 4 now splits the window vertically

Pressing <ALT F7> at a marked line will now unmark it.
-----------------------------------------------------
i = get_option(param)
c = get_lastkey()
Hook number 8

```
{% endraw %}

## FILES829.TXT

{% raw %}
```
Disk No:  829
Program Title:  NEW YORK EDIT version 2.10
PC-SIG version: 1.1

NEW YORK EDIT is a program editor, written by the author of NEW YORK
WORD, containing a C-like macro programming language which can be used
to extend the editor.

Sample macros are included with this shareware version of the program,
and with registration you can create other macros to define your own
commands.  Other features which might interest programmers are multiple
windows, column cut-and-paste, brace checking, capturing DOS output,
line marking, regular expression search & substitute, EGA support
(forty-three-line display), and a keyboard remapper.

You may have up to twelve windows displayed simultaneously, with a
different file in each window.  You can also enlarge any window to
occupy the whole screen.  This program utilizes your system's main
memory for quick reformatting of your text.  The cursor movement
commands allow you to move up and down lines, paragraphs, and pages.
You can place bookmarks at various points in the document, and return to
any point at any time.  You can scroll continuously up or down the
document, with a user-selectable scrolling speed.  There are ten buffers
which you can use to store text temporarily.  With these buffers, you
can move or copy any portion of text from one place to another and
perform other block operations.  A configuration file is included, which
may be changed to configure the program's parameters and set-up upon
execution.

Usage:  Program Editor.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $39.95

File Descriptions:

ARCE     COM  Unarchiving program.
CHANGES  DOC  Text file outlining changes in new version.
CONFIG   ME   Sample configuration file.
CTAGS    EXE  File used by main program.
INSTALL  BAT  Installation batch file.
KEYCHART      Keychart discriptions.
MANUAL   ARC  Archived version of the manual.
ME       EXE  Main program.
HELP     ARC  Archived help files.
MACROS   ARC  Archived macro files.
READ     ME   Information from the author.
REGISTER DOC  Registration form.
WP       DOC  Sales pitch for NEW YORK WORD.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk #829 NEW YORK EDIT  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To obtain a copy of the documentation from this disk you must first     ║
║ unarchive it. To do this, insert this disk into drive A: and then       ║
║ insert a BLANK FORMATTED disk into drive B:. Then type,                 ║
║                  ARCE MANUAL.ARC B: (press enter)                       ║
║                                                                         ║
║ In order to read the documentation for NEW YORK EDIT you must now load  ║
║ the documentation file into the editor then print it out.               ║
║                                                                         ║
║ To start NEW YORK EDIT type, ME (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
            NEW YORK EDIT Text Editor    Registration Form
                
Date _________                                      Invoice No. ______

Purchased from :
  Marc Adler / Magma Systems
  15 Bodwell Terrace
  Millburn, New Jersey 07041



Name _______________________________________________

Company ____________________________________________

Address ____________________________________________

        ____________________________________________
        
City    __________________   State _________    Zip __________

Country _______________________

Phone   (home) __________________    (work) __________________

Product __________________    Version _____________

Serial No ________________    Date Purchased _________________
                                                              
How did you hear about this program? _________________________

What features would you like to see in future versions?

______________________________________________________________

______________________________________________________________

______________________________________________________________


Signature _____________________________


------------------------------------------------------------------------------
Product                  Qty        Unit Price          Total Price

New York Edit (DOS)                  79.00

New York Edit (OS/2)                 79.00

Source code for PERSONAL USE        110.00

Shipping & Handling                   3.00 (US)
                                     10.00 (outside)

                                                         ______________
 
Total Amount


IMPORTANT :
  Please make checks payable to Marc Adler. We will only accept checks
payable in US dollars and drawn on a US bank. We will also accept postal
money orders. Payment which is not acceptable will be returned.

VARS and OEMS :
  Please contact us directly if you would like to utilize portions of the
NYE source code within your applications.
```
{% endraw %}

## WP.DOC

{% raw %}
```
                  THE "NEW YORK WORD" WORD PROCESSOR


BACKGROUND

   The  New  York  Word  (NYW) was created in 1984 to run on computers
which  use the UNIX(TM) operating system. In late 1985, NYW was ported
to run under MS-DOS, the standard operating system for  the  IBM  Per-
sonal  Computer.  NYW  is  a  state-of-the-art word processing package
available at a low cost to end-users and OEMs.  Source  code  is  also
available at a reasonable cost. 


FLEXIBLE AND FAST

  NYW utilizes your system's main memory to the fullest. This way, you
can  have  complete random access to any part of your document. Opera-
tions like reformatting (global or paragraph) and  re-pagination  seem
to  happen  in  an  instant.  With the introduction of CPU's (like the
Intel 80386) which have built-in virtual memory hardware, you can edit
extremely large text files totally in memory. 

   When a user starts an NYW editing session, the NYW program examines
several files. These files  contain  the  default  values  of  several
parameters  which  affect  the  editing session. These parameters deal
with items like margin settings, tab settings, printer  options,  ses-
sion modes, etc. By changing the values in these default files, a user
can customize an editing session to suit his particular needs. 

GENERAL EDITING FEATURES

   NYW  has a full complement of editing features. The cursor movement
commands allow you to move up and down lines, paragraphs,  and  pages.
or can go directly to any line number, or any number of lines relative
from  where  the cursor currently is. You can place up to 26 bookmarks
at various points in the document, and return  to  any  point  at  any
time.  You  can  scroll  continuously  up or down the document, with a
user-selectable scrolling speed. 

   There are ten buffers which you can use to store text  temporarily.
By  using these buffers, you can move or copy any portion of text from
one place to another. You can mark a region of text  and  then  delete
it,  save  it, write it out to a file, draw a box around it, or change
the case of the letters in it. 

   To enhance your document, you can choose from special effects  like
boldfacing,  underlining,  overstriking, subscripts, and superscripts.
If your printer is capable of it, you can change fonts at any point in
the document. There are also several kinds of tabs  regular,  decimal,
center, and flush right. 

   Pagination is extremely fast. You can re-paginate a document at any
point  and  NYW will renumber the pages for you automatically. You can
choose to handle widow and orphan lines to produce a  cleaner  looking
document. 

   NYW  allows  you  to  have  multi-line  header  and footers in your
document. You can even put in "temporary" headers  and  footers  which
will  appear  on  the  printer,  but  will not be saved along with the
document. 

   Other desireable features are an escape to the UNIX/DOS shell,  and
the ability to redirect the output of a command into your document. 

FOOTNOTES

   NYW  has  full footnote capabilities, with the ability to automati-
cally renumber footnotes when you insert or  delete  a  footnote.  You
have  your choice of having the footnotes appear at the end of a page,
or the end of a document. You can  edit  footnotes  as  if  they  were
regular  text,  or  flash a listing of the currently defined footnotes
across the screen. 

MACROS

   NYW  has  full  macro  capabilities.  You  can  intermix  text  and
keystroke  commands  in  a  macro and replay them at any time. You can
also have libraries of macros, which you can read  at  any  time  into
your  editing  session.  Any macros you define in a file will be saved
along with that file thus you can build up  an  entire  dictionary  of
macros which can be inserted in a file at any time. This is useful for
"skeleton"  documents,  where  you can take an outline of a letter and
paste text (ie macros) at various points in the letter. 

   Another feature which greatly aids  the  user  is  the  ability  to
"capture" keystrokes. If the user must repeat a series of keystrokes a
few  times  in a row, then the user can type the series in once, watch
the effect the commands have, then replay the series an arbitrary num-
ber of times. 

TABLE OF CONTENTS & INDEX GENERATION

   NYW comes with an automatic table of contents and index  generator.
The  user  has  a  choice  of  having  the  toc/index generated at the
beginning/end of the file, or written out to another document. The in-
dex  generator  will  also  take  consecutively  numbered  pages   (ie
4,5,6,8,9,10) and express those pages as a range (ie 4-6,8-10). 

SPELLING CHECKER

   NYW  also interfaces with a UNIX-like spelling program, which is an
extremely powerful spelling checker. (See the Bell Labs memorandum  by
McIlroy). It also has a spelling corrector if you chose, you have have
suggested  correct spellings flash on the screen. The advantage of in-
terfacing to the UNIX-like spelling checker is that no extra space  is
required  for a massive English dictionary. The user can also maintain
his own private dictionary which is checked  along  with  the  regular
dictionary. 
AUTOMATIC HYPHENATION

   NYW  has  automatic  hyphenation. It uses a cross between the Knuth
algorithm (incorporated in his TEX system), and the Gimpel  algorithm.
This  provides  a  fast,  accurate hyphenator. This algorithm has been
tested on a dictionary of 2000 common words, and it performs virtually
without error. 

MAIL MERGE FACILITY

   The mail merge facility is extremely powerful, and gives the user a
small programming language to do run-time calculations. These calcula-
tions can be merged into a letter, and then recalculated for the  next
letter.  The  YACC compiler-generator was used to write this language,
which has a full complement of arithmetic and string operations, along
with block if-then-else statements. 

   There are several utility programs which come with NYW to make  the
mail  merge  program  more powerful. These programs take the output of
the mail merge program, and "filter" it in different ways so the  user
can use the results in another process. 

   One  is a label generating program, which gives the user parameters
for the number of columns in a row  of  labels,  the  height  of  each
label,  and  the width of each label. This program can intermix labels
which have a different  number  of  lines  this  was  traditionally  a
short-coming  of  many  mail  merge programs, as you had to maintain a
separate mailing list for addresses which had 3, 4 and 5 lines. 

   We also can interface the mail  merge  program  with  popular  UNIX
packages like Supercomp or Unify. We can write a custom program so the
output of the mail merge facility can be interfaced with your favorite
program. 


REGULAR EXPRESSIONS

     The  UNIX(TM)  operating  system pioneered the use of regular ex-
pressions in pattern matching. Regular expressions allow you to search
for a context, such as "all lines beginning with the  letter  a,b,  or
c",  or  "any  occurence of two numbers followed by a letter". NYW in-
corporates regular expressions into its search-and-substitute facility
to allow powerful pattern matching. You can also use  regular  expres-
sions in NYW's global substitution facility. 


MULTI-WINDOW EDITING

   Many  times when you edit a document, you may wish that you can see
another document on the screen at the same time. NYW can edit up to 12
documents or different parts of the same document simultaneously, each
document in its own separate window on the screen.  You  can  move  or
copy  text from one window to the another. An "explode" feature allows
you to zoom any window to the full size of the PC screen. 

    Multi-window editing is especially useful in conjunction with  the
Enhanced  Graphics  Adapter. NYWord will support 43-line displays when
used with the EGA.
MATH CALCULATIONS

   There are two kinds of calculators that come with  NYW.  One  is  a
desk   calculator  that  allows  fully  parenthesizes  arithmetic  ex-
pressions. You can enter this calculator from  the  middle  of  a  NYW
editing  session in order to do some quick calculations. The desk cal-
culator comes with memory that can be recalled at any instant. 

   The second calculator operates on numbers that you have embedded in
the document you are editing. You can intermix numbers in the document
with numbers you enter at the keyboard, use parenthesized expressions,
and do automatic horizontal or vertical totals at the touch of a key. 

GRAPHICS

   NYW allows you to intermix text and ASCII line-drawing graphics  in
the  same  document.  At  the  touch  of  a keystroke, you can go into
graphics mode, and use several keys to produce horizontal and vertical
lines, corners, and tees. This allows the user to create  charts,  and
integrate them into the document. 

MULTI COLUMN EDITING
 
   In  addition  to  the  block cut-and-paste facilities, NYW supports
cutting and pasting of columns of text. There is also a  facility  for
taking  existing  text,  and  rearranging it in a multi-column format.
This feature is useful to magazine and newspaper publishers. 

SAFETY FEATURES

   NYW gives the user an  automatic  checkpointing  facility  to  help
prevent  total  loss  of data in the event of system crashes. NYW will
also create a backup version of a file whenever you save your  current
editing session. 


INFORMATION

     For more information on NYW, contact :

                              Marc Adler
                            MAGMA Systems
                          15 Bodwell Terrace
                       Millburn, New Jersey   07041
                            (201) 912-0192

PRICING

    New York Word sells for $45.00 in the US and  Canada,  plus  $3.00
shipping.  Overseas  orders please add $10.00 for postage and handling.
Quantity discounts are available, as are site licenses. Please contact
us for details. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0829

     Volume in drive A has no label
     Directory of A:\

    ARCE     COM      5424   6-14-87   5:41p
    CHANGES  DOC     27551  10-11-88  10:51a
    CONFIG   ME       1732  10-11-88  11:06a
    CTAGS    EXE     24833   2-04-87   1:41a
    FILES829 TXT      2309   1-12-89   9:23a
    GO       BAT        38   9-29-87  11:58a
    GO       TXT      1002   1-06-89  12:17p
    HELP     ARC     10526  11-25-86  12:24a
    INSTALL  BAT      2296  12-11-88  10:06p
    KEYCHART          3096   1-18-87   1:29a
    MACROS   ARC     77947  10-11-88  10:56a
    MANUAL   ARC     59930   5-26-87  11:16p
    ME       EXE    105279  10-11-88  11:42a
    READ     ME       5367  10-11-88  10:37a
    REGISTER DOC      2059  10-11-88  10:48a
    WP       DOC     10180  10-11-88  10:49a
           16 file(s)     339569 bytes
                           13312 bytes free
