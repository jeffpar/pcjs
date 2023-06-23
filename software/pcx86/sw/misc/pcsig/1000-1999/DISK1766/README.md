---
layout: page
title: "PC-SIG Diskette Library (Disk #1766)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1766/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1766"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MEGA-STAR"

    This is a full-featured wordprocessor that has special abilities for
    programmers and persons who need to edit/examine numerous files.
    
    MEGA-STAR features macros, pulldown menus with learn-as-you-go help,
    on-line help, 6 text windows that can be easily resized and zoomed,
    style sheets, read and writes standard ASCII, Logitech mouse support,
    and more.
    
    This wordprocessor will impress you with its simplicity, yet win you
    with its power to work on several documents in different windows.  And
    if you are programming, DOS is always available through a back door
    exit.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MS.TXT

{% raw %}
```
@2

&GOTO WORD LEFT

    Keystroke sequence:   2
)    Alternate keystrokes: 2

The cursor is moved to the beginning of the word that is to
the left of the cursor. If there is no word to the left of
the cursor then the cursor will go to the end of the
previous line.
@3

&GOTO WORD RIGHT

    Keystroke sequence:   3
)    Alternate keystrokes: 3

The cursor is moved to the beginning of the word that is to
the right of the cursor. If there is no word to the right of
the cursor then the cursor will go to the beginning of the
next line.
@10

&GOTO BEGINNING OF FILE

    Keystroke sequence:   10
)    Alternate keystrokes: 10

The cursor is moved to the first character in the file.
@11

&GOTO END OF FILE

    Keystroke sequence:   11
)    Alternate keystrokes: 11

The cursor is moved past the last character in the file.
@12

&GOTO BEGINNING OF LINE

    Keystroke sequence:   12
)    Alternate keystrokes: 12

The cursor is moved to column 1 of the current line.
@13

&GOTO END OF LINE

    Keystroke sequence:   13
)    Alternate keystrokes: 13

The cursor is moved just passed the last character on the
current line.
@14

&GOTO BEGINNING OF WINDOW

    Keystroke sequence:   14
)    Alternate keystrokes: 14

The cursor is moved to the top line in the current window.
@15

&GOTO END OF WINDOW

    Keystroke sequence:   15
)    Alternate keystrokes: 15

The cursor is moved to the bottom line in the current
window.
@16

&GOTO PREVIOUS MATCHING INDENT

    Keystroke sequence:   16
)    Alternate keystrokes: 16

The cursor is moved to the previous line that matches the
indentation of the current line.
@17

&GOTO NEXT MATCHING INDENT

    Keystroke sequence:   17
)    Alternate keystrokes: 17

The cursor is moved to the next line that matches the
indentation of the current line.
@18

&GOTO LINE NUMBER

    Keystroke sequence:   18
)    Alternate keystrokes: 18

The cursor will be repositioned to the specified line number
of the current window. A prompt box will request the target
line number. Enter any number from 1 to 32767. If the value
is preceded by a plus (+) or minus (-) sign, the target line
number will be calculated relative to the current line.
@19

&GOTO COLUMN NUMBER

    Keystroke sequence:   19
)    Alternate keystrokes: 19

The cursor will be repositioned to the specified column
number of the current line. A prompt box will request the
target column number. Enter any number from 1 to 999. If the
value is preceded by a plus (+) or minus (-) sign, the
target column number will be calculated relative to the
current column.
@20

&GOTO WINDOW

    Keystroke sequence:   20
)    Alternate keystrokes: 20

The cursor will be moved to the current position in another
window on the screen. If only one window is available,
nothing will happen. Otherwise a menu will appear, showing
the available windows, and the files currently in each one.
Select one of these choices by moving the selection bar or
by pressing the number of the desired window.
@21

&GOTO PREVIOUS CURSOR POSITION

    Keystroke sequence:   21
)    Alternate keystrokes: 21

The cursor is moved to the last position that it occupied
(i.e. after a FIND command, issuing this command would
return you to where you were at before the find operation).
@22

&UNDO LAST DELETION

    Keystroke sequence:   22
)    Alternate keystrokes: 22

The line of text most recently deleted will be inserted into
the current text stream at the cursor position. Note that
this applies only to complete lines of text, and not to
character or word deletions. By default, 20 lines of deleted
text are stored for possible undeletion. The undo limit can
be adjusted via a Setup command.
@23

&RESTORE LINE

    Keystroke sequence:   23
)    Alternate keystrokes: 23

The current line of text will be restored to its appearance
just prior to when the cursor was moved onto the line. The
cursor position will also be restored to the value when it
entered the line.
@25

&INSERT CONTROL CHARACTER

    Keystroke sequence:   25
)    Alternate keystrokes: 25

This commands allows you to enter control characters, such
as "Line Feed", into your text. Enter this command and the
next control character that you type will be embedded into
your text. A control character is entered by holding down
the "Control" key and typing any alphabetic key. You can
also use the Menu system (Text, Attribute...) or Quick
keys (AltB - AltV) to enter specific control characters.
@27

&INSERT NEW LINE

    Keystroke sequence:   27
)    Alternate keystrokes: 27

Insert a new line at the current cursor location. If the
cursor is at column 1 or on a blank line, a new line will be
put there and any text on or after this line will be moved
down one line. If the cursor is in a line of text then the
text will be broken at that point and the text moved down
one line.
@30

&DELETE WORD RIGHT

    Keystroke sequence:   30
)    Alternate keystrokes: 30

Delete the word that is to the right of the cursor. If there
is no word to the immediate right then all spaces before the
next word will be deleted.
@31

&DELETE REST OF LINE

    Keystroke sequence:   31
)    Alternate keystrokes: 31

Delete everything to the right of the cursor.
@32

&DELETE LINE

    Keystroke sequence:   32
)    Alternate keystrokes: 32

Delete the current line. The line can be restored by using
the Undelete command.
@33

&DELETE LINE FOREVER

    Keystroke sequence:   33
)    Alternate keystrokes: 33

Delete the current line. The line cannot be restored.
@34

&SEARCH FOR PATTERN

    Keystroke sequence:   34
)    Alternate keystrokes: 34

The current window will be searched to find a specified
sequence of text. When the pattern is found, the cursor will
be positioned at the beginning of the pattern, and the
matched text highlighted until the next
keystroke.

A prompt box will allow entry of the text pattern and search
options. Enter any text or control characters just as they
would be typed in the body of the
file.
]

Search options control the behavior of the search. The
following options are available:

 U - ignore case (Upper-case) while searching
) B - search Backwards from the cursor
)     position.
) W - search for whole Words only.
) G - search Globally, starting at the
)     beginning of the file (or end, if
)     searching backwards).
) L - search Locally (only within marked block).
) n - search for the nth occurrence of the
)     string (n is an integer).
]

Enter the following sequence of keystrokes to search for the
end of each text line: <CtrlP><CtrlM><CtrlP><CtrlJ>. This
sequence enters Carriage return/Line feed into the search
pattern.

Note that each pattern must be found within a single line.
No match may span multiple lines.
@35

&SEARCH AND REPLACE

    Keystroke sequence:   35
)    Alternate keystrokes: 35

The current window will be searched for a specified sequence
of text. When the pattern is found, it will be replaced with
another specified text sequence.

A prompt box will allow entry of the search text,
replacement text, and search options. Enter any text or
control characters just as they would be typed in the body
of the file.
]

Search options control the behavior of the search. The
following options are available:

 U - ignore case (Upper-case) while searching
) B - search Backwards from the cursor
)     position.
) W - search for whole Words only.
) G - search Globally, starting at the extreme
)     end of the file.
) L - search Locally (only within marked block).
) N - do Not prompt for confirmation when the
)     pattern is found.
) n - replace n occurrences of the string
)     (n is an integer).
]

If the N option is not specified, a prompt will occur each
time the search pattern is found. This prompt will provide
the following options:

 Y - replace this text and continue searching.
) N - do Not replace, but continue searching.
) A - replace this text and replace All others
)     without prompting.
) Q - do not replace, and Quit searching.
]

Enter the following sequence of keystrokes to search for the
end of each text line: <CtrlP><CtrlM><CtrlP><CtrlJ>. This
sequence enters Carriage return/Line feed into the search
pattern.
@36

&SEARCH AND USE MACRO

    Keystroke sequence:   36
)    Alternate keystrokes: 36

The current window will be searched for a specified sequence
of text. When the pattern is found, the cursor will be
repositioned to that location, and a specified macro will be
played back.
]

A prompt box will allow entry of the search text, macro
selection, and search options. Enter any text or control
characters just as they would be typed in the body of the
file. The macro must have been defined prior to using the
search and apply macro command.
]

Search options control the behavior of the search. The
following options are available:

 U - ignore case (Upper-case) while searching
) B - search Backwards from the cursor
)     position.
) W - search for whole Words only.
) G - search Globally, starting at the extreme
)     end of the file.
) L - search Locally (only within marked block).
) N - do Not prompt for confirmation when the
)     pattern is found.
) n - apply macro for n occurrences of the
)     search string (n is an integer).
]

If the N option is not specified, a prompt will occur each
time the search pattern is found. This prompt will provide
the following options:

 Y - apply macro and continue searching.
) N - do Not apply macro, but continue searching.
) A - apply macro and apply at All matches
)     without prompting.
) Q - do not apply macro, and Quit searching.
]

Enter the following sequence of keystrokes to search for the
end of each text line: <CtrlP><CtrlM><CtrlP><CtrlJ>. This
sequence enters Carriage return/Line feed into the search
pattern.
@37

&SEARCH AGAIN

    Keystroke sequence:   37
)    Alternate keystrokes: 37

The previous search operation will be repeated. This will
repeat a plain search, a search and replace, or a search and
apply macro command.
@38

&OPERATING SYSTEM

    Keystroke sequence:   38
)    Alternate keystrokes: 38

Any DOS command or program may be executed. A prompt box
will ask for the name of the command or program to run.
Entering an empty line at the prompt box will cause a DOS
shell to be invoked. You may execute any sequence of DOS
commands from the shell, and finally return to the editor by
typing Exit.
]

The DOS shell requires that a copy of COMMAND.COM be present
in the normal drive and directory assigned by DOS.
Sufficient random-access memory must be available for the
shell and any command that you specify.

Do not execute any program that becomes memory resident
while within the DOS shell.
@39

&BACKWARD TAB

    Keystroke sequence:   39
)    Alternate keystrokes: 39

The cursor will be moved to the next tab left of the current
position. This command is available only in fixed tab mode.
@40

&EDIT ANOTHER FILE

    Keystroke sequence:   40
)    Alternate keystrokes: 40

The current window will be cleared, and a prompt box will
ask for the name of another file to edit. If the current
window already holds a file that has been modified, you will
be given the opportunity to save it.
]

When prompted for a file name, you may enter DOS wildcards
or the name of another drive or subdirectory. In this case,
another window will display the names of all matching files.
You can select from this list by using the cursor keypad, or
by pressing the first letter of the filename in which you
are interested.

By entering an empty line for the file name, you can edit a
file without specifying a name for it. A name can be
specified later when you want to write it out to disk.
@41

&FILE QUIT

    Keystroke sequence:   41
)    Alternate keystrokes: 41

The editing session will end and you will return to DOS. If
any windows have been modified, prompt boxes will appear and
you will be given the opportunity to save each modified
file. If you type <Esc> at any of the prompt boxes, the
FILE QUIT command will be interrupted and you will return to
the current text window.
@42

&READ BLOCK FROM FILE

    Keystroke sequence:   42
)    Alternate keystrokes: 42

A prompt box will ask for the name of a file to read. This
file will be read into the current window, starting at the
current cursor position. The newly read text will be marked
as a block.
]

When prompted for a file name, you may enter DOS wildcards
or the name of another drive or subdirectory. In this case,
another window will display the names of all matching files.
You can select from this list by using the cursor keypad, or
by pressing the first letter of the filename in which you
are interested.
@43

&SAVE AND CONTINUE EDIT

    Keystroke sequence:   43
)    Alternate keystrokes: 43

The contents of the current window will be saved to disk,
using the present file. If the file has not been named, a
prompt box will ask for a new name. If the disk file already
exists, a backup copy will be made before overwriting the
existing version. The cursor will remain in place after the
file is written to disk.
@44

&WRITE BLOCK TO FILE

    Keystroke sequence:   44
)    Alternate keystrokes: 44

The currently marked block will be written to a disk file.
If no block is marked, an error message will be produced. If
the disk file already exists, you will be given the choice
of overwriting it or appending to it.
@45

&SAVE ALL CHANGED FILES AND EXIT

    Keystroke sequence:   45
)    Alternate keystrokes: 45

Any files that have been modified during this session will
be saved to disk, using the current file name. If the file
has not been named, a prompt box will ask for a new name. If
the disk file already exists, a backup copy will be made
before overwriting the existing version. Then the editing
session will end and you will return to DOS.
@46

&FILE OPEN

    Keystroke sequence:   46
)    Alternate keystrokes: 46

A prompt box will ask for the name of a new file to read. If
another file is already being edited, the current window
will be split in half, and the new file will be read into
the new window.

By specifying a file name that matches an existing window,
you may look at two regions of the same file. Changes made
in one window will affect all other windows which contain
the same file.
]

When prompted for a file name, you may enter DOS wildcards
or the name of another drive or subdirectory. In this case,
another window will display the names of all matching files.
You can select from this list by using the cursor keypad, or
by pressing the first letter of the filename in which you
are interested.

By entering an empty line for the file name, you can edit a
file without specifying a name for it. A name can be
specified later when you want to write it out to disk.
@47

&RESIZE WINDOW

    Keystroke sequence:   47
)    Alternate keystrokes: 47

Use this command to change the height of the current window.
The up and down arrow keys will move the window dividing
lines. Press <Enter> when the window has the desired size.
@48

&SAVE/SWITCH FILES

    Keystroke sequence:   48
)    Alternate keystrokes: 48

The file in the current window will be stored to disk. A
prompt box will then ask for the name of another file to
edit. The new file will be read into the current window. All
window sizes will remain the same.
]

When prompted for a file name, you may enter DOS wildcards
or the name of another drive or subdirectory. In this case,
another window will display the names of all matching files.
You can select from this list by using the cursor keypad, or
by pressing the first letter of the filename in which you
are interested.

By entering an empty line for the file name, you can edit a
file without specifying a name for it. A name can be
specified later when you want to write it out to disk.
@49

&NEXT WINDOW

    Keystroke sequence:   49
)    Alternate keystrokes: 49

The cursor will be moved to the current position in the next
window down on the screen. If the cursor is already in the
lowest window, it will move to the topmost window. If there
is only one window, nothing will happen.
@51

&ZOOM WINDOW

    Keystroke sequence:   51
)    Alternate keystrokes: 51

The current window will grow to fill the screen. Other text
windows are kept in memory, but are not visible until zoom
is toggled off. The Next window and Previous window commands
will bring each window to the forefront in succession. Text
markers and blocks may be accessed as usual in the hidden
windows. The only exception is block delete: a block will
not be deleted from a hidden window.
]

When zoom is active, a letter Z will appear at the left edge
of the window status line. Toggling the zoom command again
will make all windows visible.
@52

&BLOCK BEGIN

    Keystroke sequence:   52
)    Alternate keystrokes: 52

The cursor position will become the start of a marked block.
@53

&BLOCK END

    Keystroke sequence:   53
)    Alternate keystrokes: 53

The cursor position will become the end of a marked block.
@54

&GOTO BEGINNING OF BLOCK

    Keystroke sequence:   54
)    Alternate keystrokes: 54

The cursor will be moved to the beginning of the current
block, whether it is visible or not.
@55

&GOTO END OF BLOCK

    Keystroke sequence:   55
)    Alternate keystrokes: 55

The cursor will be moved to the end of the marked block,
whether it is visible or not.
@56

&BLOCK COPY

    Keystroke sequence:   56
)    Alternate keystrokes: 56

A copy of the marked block will be inserted at the current
cursor position.
@57

&BLOCK MOVE

    Keystroke sequence:   57
)    Alternate keystrokes: 57

The marked block will be removed from its current location
and inserted at the current cursor position.
@58

&BLOCK DELETE

    Keystroke sequence:   58
)    Alternate keystrokes: 58

The marked block will be deleted from the text stream. If
the block spans more than one line, the deleted lines may be
recovered via the Undelete command.
@59

&HIDE BLOCK

    Keystroke sequence:   59
)    Alternate keystrokes: 59

The on-screen highlighting of the marked block is toggled on
or off. Blocks can be copied, moved, or deleted only when
the block is visibly marked. Movement to block start or end
is possible even when the block is not visible.
@60

&MARK WORD

    Keystroke sequence:   60
)    Alternate keystrokes: 60

Mark the word at the current cursor position as a block.
@61

&HIDE/SHOW MARKER

    Keystroke sequence:   61
)    Alternate keystrokes: 61

The on-screen display of the text marker(s) is toggled on or
off. The Goto Marker command will work even when the marker
is not displayed.
@82

&LOAD MACROS FROM DISK

    Keystroke sequence:   82
)    Alternate keystrokes: 82

A previously stored file of Mega-Star keyboard macros is
loaded into memory. The macro file is a binary file in a
special format used by Mega-Star. Macros may be recorded,
edited, and stored to disk from within Mega-Star. Each macro
file contains ten macros, each of which may hold up to 255
keystrokes. Mega-Star automatically loads the macro file
MS.MAC, if found, when the program is started.
@83

&STORE MACROS TO DISK

    Keystroke sequence:   83
)    Alternate keystrokes: 83

The current set of Mega-Star keyboard macros is written to a
disk file. A prompt box will ask for a file name. The macro
file is a binary file in a special format used by Mega-Star.
Macros may be recorded, edited, and stored to disk from
within Mega-Star. Each macro file contains ten macros, each
of which may hold up to 255 keystrokes. Mega-Star
automatically loads the macro file MS.MAC, if found, when
the program is started.
@84

&TOGGLE MACRO RECORD

    Keystroke sequence:   84
)    Alternate keystrokes: 84

Any keystrokes entered after this command is activated are
stored within a keyboard macro, which may be edited and
later played back within Mega-Star. To stop macro recording,
enter this command a second time. A prompt box will ask for
which of the ten macros should store the newly recorded one,
and for a descriptive name for the macro.

Each macro can hold up to 255 keystrokes. Macros can play
back other macros. Macros are played back by pressing one of
the installed keystroke combinations, or by choosing the
Mega-Star Macro Playback option from the menu system.
]

One of the macros is somewhat special. This macro is called
the "scrap". Whenever a new macro is recorded, it writes
over the scrap macro. The current scrap macro can be played
back once or many times using other macro commands.
@104

&GET INFORMATION

    Keystroke sequence:   104
)    Alternate keystrokes: 104

Various facts about Mega-Star and the current file are
displayed. Information shown includes the complete path name
of the current file; its size in bytes, words, lines, and
pages; whether it has been modified since last disk save;
the time and date; available RAM and disk space; the current
directory; and the DOS and Mega-Star version numbers.

Some of the statistics that Mega-Star presents take a while
to compute. By pressing any key while the Get Info window is
being updated, you can "short-circuit" the computation of
some items.
@105

&SHOW AVAILABLE MEMORY

    Keystroke sequence:   105
)    Alternate keystrokes: 105

Shows the amount of RAM memory that is available to hold
files for editing or to run DOS commands from inside of
Mega-Star.
@106

&TOGGLE INSERT MODE

    Keystroke sequence:   106
)    Alternate keystrokes: 106

When insert mode is active, newly typed text is inserted
into the current text line, pushing characters to the right
of the cursor aside to make room. When insert mode is off,
newly typed text overwrites existing text. Many commands,
such as block copy and insert line, operate in insert mode
independent of the setting of this toggle.
@107

&TOGGLE AUTOINDENT MODE

    Keystroke sequence:   107
)    Alternate keystrokes: 107

With Insert on and autoindent mode active, when the <Enter>
key is pressed, the new line of text will be indented the
same number of spaces as the line immediately above it. The
setting of this toggle also affects the operation of the
paragraph reformatting command.
@108

&TOGGLE CASE

    Keystroke sequence:   108
)    Alternate keystrokes: 108

The case of the character at the cursor location will be
toggled from upper to lower, or from lower to upper. If a
block is marked and visible, and the cursor is anywhere
within the marked block, the command will toggle the case of
the entire block.
@109

&LOWER CASE

    Keystroke sequence:   109
)    Alternate keystrokes: 109

The case of the character at the cursor location will be set
to lower-case. If a block is marked and visible, and the
cursor is anywhere within the marked block, the command will
change the case of the entire block.
@110

&UPPER CASE

    Keystroke sequence:   110
)    Alternate keystrokes: 110

The case of the character at the cursor location will be set
to upper-case. If a block is marked and visible, and the
cursor is somewhere within the marked block, the command
will change the case of the entire block.
@111

&SET RIGHT MARGIN

    Keystroke sequence:   111
)    Alternate keystrokes: 111

A prompt box will ask for a new value for the right margin.
Entering an empty prompt string will set the right margin to
the current cursor column. The right margin is used only
when Word Wrap mode is active. When that is so, text entered
in a column beyond the right margin will automatically be
wrapped to the next line. Paragraph formatting will move
words so that lines are as full as possible within, but not
exceeding, the right margin.
@112

&FORMAT PARAGRAPH

    Keystroke sequence:   112
)    Alternate keystrokes: 112

Format paragraph is available only when Word Wrap mode is
active. Paragraph reformatting will move words so that lines
are as full as possible within, but not exceeding, the
current left and right margins. If Justify mode is active,
the lines will also be evenly filled with spaces so that the
rightmost word ends on the right margin.

The paragraph reformat is terminated when a blank line, or a
line beginning with a format character (.), is reached.
@113

&TOGGLE WORD WRAP

    Keystroke sequence:   113
)    Alternate keystrokes: 113

When Word Wrap mode is active, paragraph reformatting and
automatic word wrap are available. Otherwise, left and right
margin settings are ignored, and text may be entered in any
column up to the maximum line length.
@114

&SET LEFT MARGIN

    Keystroke sequence:   114
)    Alternate keystrokes: 114

A prompt box will ask for a new value for the left margin.
Entering an empty prompt string will set the left margin to
the current cursor column.

When Word Wrap mode is active, the left margin controls the
leftmost position where text may be entered. The left margin
also controls the operation of the paragraph formatting
command.

The left and right margins can be made visible by toggling
the Tab Line Display.

Print formatting commands require that the format character
(.) be located in column 1 even if the left margin is set to
a number greater than one. To achieve this, enter the format
command starting at the left margin, move the cursor to
column 1 with the Left of Line command, and delete the
intervening spaces via Delete Word. Alternatively, activate
the Margin Release command while the format command is
entered.
@115

&DISPLAY TABS

    Keystroke sequence:   115
)    Alternate keystrokes: 115

Toggling Display Tabs ON reserves one line of the current
window for display of tab settings and margins. The tabs and
margins can be active whether or not the tab line is
visible.
@116

&INSERT UNDO BUFFER

    Keystroke sequence:   116
)    Alternate keystrokes: 116

The entire contents of the undo buffer are inserted into the
current text stream, prior to the current line. This empties
the undo buffer, that is, the operation can be used only
once for any set of deletions.
@117

&TOGGLE JUSTIFY

    Keystroke sequence:   117
)    Alternate keystrokes: 117

When Justify is active, word wrap and paragraph reformat
operations will cause each line to be filled in with spaces
such that the rightmost non-blank character is exactly on
the right margin.
]

By toggling Justify off, and reformatting lines or
paragraphs, the additional blanks will be automatically
removed from the text. Note that blanks manually inserted
(via the Tab command, etc.) will also be removed, unless the
Compress Wrap mode is turned off.

Mega-Star does not differentiate between "soft" blanks added
during justification and "hard" blanks manually entered.
However, the character <CtrlO> may be used in place of a
normal blank when non-changing spaces are desired. The
<CtrlO> will be printed as a normal space. To enter a
<CtrlO> in the text stream, press 25<CtrlO>.
@118

&TOGGLE PAGE BREAKS

    Keystroke sequence:   118
)    Alternate keystrokes: 118

When pagination is activated, the left two columns of the
text window will be devoted to showing page breaks. The
characters »» in those columns indicate that the
corresponding line is the first printing text line on its
page.

In addition, the status line for the window will indicate
what page number the cursor is on. The Jump to Page command
is available only when pagination is activated.
]

Mega-Star calculates page numbers while it is waiting for
you to enter keystrokes. As a result, if you enter new text
it may take a short period of time before the page break
markers are redrawn at their new positions.

Although the page breaks displayed on screen correspond to
those in a printout of the document, Mega-Star does not
store any special characters in the disk file. Page breaks
are recomputed each time the file is read into Mega-Star.

Pagination can be precisely controlled via the formatting
commands. See the help section under the Print pulldown
menu.
@119

&TOGGLE FONT DISPLAY

    Keystroke sequence:   119
)    Alternate keystrokes: 119

When Font Display is enabled, print formatting commands that
control font selections will not be displayed on-screen.
Instead the marked text will be displayed in a color or
attribute corresponding to the font. This "what you see is
what you get" mode allows more accurate alignment of tables,
and avoids multiple print cycles to correct formatting
commands.

The screen colors for each font may be adjusted on the
Options Colors menu.

When font display is enabled, the control characters that
select the fonts are not visible. However, the cursor can be
positioned over the control character, and it can be deleted
if desired. The Mega-Star hardware cursor grows to a large
block when it is positioned over the control character. The
value of the control character will be displayed at the
right hand edge of the window status line when the cursor is
positioned over it.

Mega-Star computes the display of on-screen fonts while it
is waiting for you to enter keystrokes. As a result, if you
enter new text it may take a short period of time before
control characters disappear and fonts are drawn in their
final colors.
@120

&CENTER LINE

    Keystroke sequence:   120
)    Alternate keystrokes: 120

The current line will be centered between the left and right
margins. This command is active only when Word Wrap mode is
on.
@121

&SET COLORS

    Keystroke sequence:   121
)    Alternate keystrokes: 121

All of the editor colors can be customized to your liking.
Independent color settings are available for normal text,
block marked text, window status lines, the prompt line at
the top of the screen, text in menus and prompt boxes, menu
frames, the highlighted character by which each menu item
may be selected, the currently selected menu item, the block
cursor (when active), and each of the five selectable fonts.
]

The colors that you select are saved with Mega-Star when you
execute the Options Save setup command.
@122

&SAVE SETUP

    Keystroke sequence:   122
)    Alternate keystrokes: 122

The toggles, settings, colors, and options are stored as
Mega-Star defaults when this command is executed. MS.EXE
must be present in the default directory or in the installed
home directory.
@123

&EASY PRINT

    Keystroke sequence:   123
)    Alternate keystrokes: 123

Any text file can be printed from within Mega-Star. Files
formatted with Mega-Star's page layout commands and font
controls will print with multiple fonts, headers, footers,
and page breaks.

Do not press <Enter> on the first menu selection, Print
file now, until the other items in the box have been set to
your satisfaction. Selecting Print file now starts the
print job.

After you select the second menu item, Name of file, a
prompt box will request entry of the name of the file to
print. When prompted for a file name, you may enter DOS
wildcards or the name of another drive or subdirectory. In
this case, another window will display the names of all
matching files. You can select from this list by using the
cursor keypad, or by pressing the first letter of the
filename in which you are interested.

If you wish to print a file that is currently loaded in
memory, be sure to save any recent changes to disk before
trying to print it. If you attempt to print a file that has
unsaved changes, Mega-Star will produce an error message.

Set Auto formatting OFF if you wish to have Mega-Star
ignore formatting commands (dot commands) in your text. In
this case, text will print continuously with no form feeds
or page breaks. Control codes embedded in the text will be
written to the output without interpretation.

By default, Mega-Star prints all pages of the document. You
can set starting and stopping pages if desired.

Select from any of the available printer driver files
(default extension .ESY) to find one that is appropriate for
your printer. You can then set the default printer driver
file to current printer driver file by using Options Save
setup.

You can also choose between sending the printed output to
LPT1, LPT2, or to a file. LPT1 and LPT2 refer to the
computer port where your printer is attached. If the printer
is attached to a serial port, you must use the DOS MODE
command in order to assign the serial port to one of the
print devices LPT1 or LPT2. Your choice between LPT1 and
LPT2 will be saved with Mega-Star when you Save Setup.

When output is printed to a file, all control codes are
written out just as when they are printed. In this case, you
must also specify the name of the output file using the
prompt window.

Set Manual paper feed ON if you wish to have Mega-Star
prompt you to insert a new sheet of paper after each page.
This choice is also stored as part of the printer driver
file for your selected printer.

Set Use formfeeds ON if your printer accepts ASCII
character #12 to eject each page. Otherwise, Mega-Star will
fill out the end of each page with blank lines. This choice
is also stored as part of the printer driver file for your
selected printer.

After making all selections, move the menu bar to the Print
file now item and press <Enter>. If you decide not to
print, just press <Esc>. Printing occurs as a background
task. You can continue editing with minimal loss of
performance while the print job continues.

To stop a print job at any time, execute the Print File
command sequence. Mega-Star will confirm whether you want to
stop the print job.
]

&PRINTER DRIVERS

Each type of printer is described to Mega-Star by a small
file with the extension ESY. This file contains information
regarding the control codes that enable the printer's
various fonts, as well as some additional information that
tells Mega-Star about the printer.

You can edit and store printer drivers from within
Mega-Star, using the Easy Print Setup menu. Existing ESY
files can be changed, and new ones created in this way.

Select a printer driver file (default extension .ESY)
using the Which printer menu item. Mega-Star will load this
printer file into memory.

Any of the command sequences that control various printer
fonts can be edited using the Edit printer codes menu
selection. Each font is associated with two strings - one to
turn the font ON, and another to turn it OFF.

When you choose a sequence to edit, it appears in another
window. It can be edited using the cursor keys, and the
<Del> or <Backspace> keys. Most characters you type will
be inserted literally into the string. <CtrlBksp> will
delete the existing string. <Enter> will end the session in
the string editor. In case you need to enter any of these
special keys as part of the control string, press the
<ScrollLock> key to enter Literal mode. In this mode, all
keystrokes will be inserted into the string without further
interpretation.

The printer driver currently held in memory can be
stored to a disk file using the Save printer setup menu
item. Mega-Star stores the printer command sequences for all
fonts, as well as the default settings for manual paper feed
and formfeeds, when you save the setup.

Mega-Star will prompt for a file name when you decide to
store the current driver. The default extension for
printer drivers is .ESY.
]

&Print Formatting Commands

Offset page to right by n columns
)      .PO n
)Start new page
)      .PA
)Start new page if fewer than n lines remain
)      .CP n
)Set page number to n
)      .PN n
)Omit page numbers
)      .OP
)Print page numbers
)      .PG
)Put page number in column n
)      .PC n
)Set page length to n lines
)      .PL n
)Set top margin to n lines
)      .MT n
)Set bottom margin to n lines
)      .MB n
)Set header margin to n lines
)      .HM n
)Set footer margin to n lines
)      .FM n
)Define header line
)      .HEline
)Define footer line
)      .FOline
]

&Special Codes within Headers and Footers

Insert current page number
)      #
)Ignore following spaces on even pages
)      <CtrlK>
)Take next character literally
)      \
]

&Typeface Selection Commands

)Select Bold
)    Main: 158    Alternate: 158
)Select DoubleStrike
)    Main: 159    Alternate: 159
)Select Underscore
)    Main: 160    Alternate: 160
)Select Superscript
)    Main: 161    Alternate: 161
)Select Subscript
)    Main: 162    Alternate: 162
)Select Compressed
)    Main: 163    Alternate: 163
)Select Italics
)    Main: 164    Alternate: 164
]

&Typeface Control Codes

Toggle Boldface
)      <CtrlB>
)Toggle Underscore
)      <CtrlS>
)Toggle Doublestrike
)      <CtrlD>
)Toggle Superscript
)      <CtrlT>
)Toggle Subscript
)      <CtrlV>
)Toggle Compressed
)      <CtrlA>
)Toggle Italic
)      <CtrlN>
@124

&FLUSH UNDO BUFFER

    Keystroke sequence:   124
)    Alternate keystrokes: 124

The contents of the undo buffer will be deleted, freeing up
whatever memory is being used. This command is useful in
combination with the Insert Undo Buffer command.
@127

&ACTIVE DIRECTORY

    Keystroke sequence:   127
)    Alternate keystrokes: 127

The current default drive or directory may be changed using
this command. Entering wildcards will cause a directory
window to appear showing possible choices.

Files previously opened in other directories will be
properly accessed even after the active directory is
changed.
@128

&FILE DIRECTORY

    Keystroke sequence:   128
)    Alternate keystrokes: 128

Use this command to browse through a file directory. Use
standard DOS pathname and wildcard notation to specify a
file mask for the directory.
@129

&JUMP TO PAGE NUMBER

    Keystroke sequence:   129
)    Alternate keystrokes: 129

The cursor will be repositioned to the first line of the
specified page of the current window. This command is
available only when pagination is active for the window. A
prompt box will request the target page number. Enter any
positive integer value. If the value is preceded by a plus
(+) or minus (-) sign, the target page number will be
calculated relative to the current page.
@130

&SET TOP MARGIN

    Keystroke sequence:   130
)    Alternate keystrokes: 130

This specifies the number of lines to leave blank at the top
of each page during printing or pagination of the file in
the current window. The top margin is a default value that
will be overridden by Mega-Star format (.) commands embedded
in the text. The value you specify in the prompt box is not
stored in the document file. It is a default value that
exists only while the file is being edited.
@131

&SET BOTTOM MARGIN

    Keystroke sequence:   131
)    Alternate keystrokes: 131

This specifies the number of lines to leave blank at the
bottom of each page during printing or pagination of the
file in the current window. The bottom margin is a default
value that will be overridden by Mega-Star format (.)
commands embedded in the text. The value you specify in the
prompt box is not stored in the document file. It is a
default value that exists only while the file is being
edited.
@132

&SET PAGE LENGTH

    Keystroke sequence:   132
)    Alternate keystrokes: 132

This specifies the total number of lines on each page during
printing or pagination of the file in the current window.
The page length is a default value that will be overridden
by Mega-Star format (.) commands embedded in the text. The
value you specify in the prompt box is not stored in the
document file. It is a default value that exists only while
the file is being edited.
@133

&SET UNDO LIMIT

    Keystroke sequence:   133
)    Alternate keystrokes: 133

This specifies the maximum number of lines of deleted text
that will be stored in the Undo buffer. If Undo limit is 10,
and you delete 15 lines, the first five lines deleted will
be lost. Whenever lines are Undeleted, that space is
recovered for the undo buffer to reuse.
@134

&TOGGLE TAB EXPANSION

    Keystroke sequence:   134
)    Alternate keystrokes: 134

When tab expansion is ON, any tabs encountered upon read-in
of a file are expanded into spaces, using a tab spacing that
you specify. If tab expansion is OFF, Mega-Star leaves the
tabs intact. However, Mega-Star does not expand tabs as it
displays them, so these will be displayed on the screen as
I.
@135

&SET FILE EXTENSION

    Keystroke sequence:   135
)    Alternate keystrokes: 135

If you edit many files with the same extension, such as
.DOC, you should enter that value for the default extension.
Mega-Star will automatically supply the default extension
whenever you respond to a filename prompt without entering
an extension. The extension you enter should not include a
period or any DOS wildcards, and is limited to three
characters.
@136

&SET TABS

    Keystroke sequence:   136
)    Alternate keystrokes: 136

The tab settings will be initialized based on the contents
of the current line of text. The start of each
blank-delimited word will set a tab at that column. Any
other tabs will be cleared. By using this command in concert
with the Put Tabs command, you can store a custom tab line
as part of a document and easily use it later.

You can return to the default evenly spaced tabs by
activating the Options Tabs Restore even menu selections.
@137

&SET TAB SIZE

    Keystroke sequence:   137
)    Alternate keystrokes: 137

By default, a tab is placed after every eight columns of
text. This tab size is also used when files containing tabs
are read into Mega-Star. Change the tab size and use the
Restore even command to initialize a different set of
regularly spaced tabs.
@138

&PUT TABS

    Keystroke sequence:   138
)    Alternate keystrokes: 138

The tab settings are stored into the current window as a
formatted text line. The line begins with the Mega-Star
formatting character (.), and will be ignored during
printing. Use this command in concert with the Set tabs
command to store a custom tab line as part of a document for
later use.
@139

&EDIT TABS

    Keystroke sequence:   139
)    Alternate keystrokes: 139

Tab positions can be interactively edited using this
command. The cursor will be moved to the current window's
tab line display. Use the cursor keys or the tab key to move
along the tab line. Pressing the space bar will toggle a tab
setting on or off, pressing the <Ins> key will add a tab,
pressing the <Del> key will delete a tab at the cursor
position. Press <Enter> when editing is complete, or <Esc>
to undo any changes made.
@140

&SET TEMPORARY MARGIN

    Keystroke sequence:   140
)    Alternate keystrokes: 140

The current left margin will be moved to the right by one
tab stop. This is useful in making indented lists. The
temporary margin will remain in force until you leave the
current paragraph.

The temporary margin is indicated by a right pointing arrow
on the window tab display.
@141

&FORMAT BLOCK

    Keystroke sequence:   141
)    Alternate keystrokes: 141

Paragraph formatting will be applied to all lines of text in
the currently marked block. The block must be highlighted,
and the cursor must be somewhere within the block, or an
error message will be produced.
@142

&FILE CLOSE

    Keystroke sequence:   142
)    Alternate keystrokes: 142

The current text window will be cleared. If it has been
modified since being saved to disk, you will be given the
opportunity to save it. The window will then be closed. If
the window is the only one on the screen, you will return to
the Mega-Star menu system.
@143

&SET MARKER

This command stores a record of the current cursor position
to which you can easily return later. Mega-Star supports up
to ten text markers, which are labeled with the numbers 0-9
when they are placed in the text. Shortcut commands for
using each of the ten markers are presented on a following
screen.

The text marker display writes over the character where it
is placed. It does not affect the actual text, but merely
hides it.
]

When a marker is set from the menu system, another menu will
appear showing which markers are already in use. Redefining
an existing marker erases the previously stored position.
Defining a marker at the same position where it is currently
located has the effect of erasing it.

The following screen provides shortcut keystrokes for
setting text markers without using menus.
]

The following commands will set any of the markers without
using a menu.

)Marker 0   Main: 62    Alternate: 62
)Marker 1   Main: 63    Alternate: 63
)Marker 2   Main: 64    Alternate: 64
)Marker 3   Main: 65    Alternate: 65
)Marker 4   Main: 66    Alternate: 66
)Marker 5   Main: 67    Alternate: 67
)Marker 6   Main: 68    Alternate: 68
)Marker 7   Main: 69    Alternate: 69
)Marker 8   Main: 70    Alternate: 70
)Marker 9   Main: 71    Alternate: 71
@144

&JUMP TO MARKER

This command moves the cursor to the position of a
previously stored text marker. If the marker has not been
set, an error will occur. Mega-Star supports up to ten text
markers, which are labeled with the numbers 0-9 when they
are placed in the text.

When you jump to a marker from the menu system, another menu
will appear showing which markers have previously been set.

The following screen provides shortcut keystrokes for
jumping to text markers without using menus.
]

The following commands will jump to any of the markers
without using a menu.

)Marker 0   Main: 72    Alternate: 72
)Marker 1   Main: 73    Alternate: 73
)Marker 2   Main: 74    Alternate: 74
)Marker 3   Main: 75    Alternate: 75
)Marker 4   Main: 77    Alternate: 77
)Marker 5   Main: 77    Alternate: 77
)Marker 6   Main: 78    Alternate: 78
)Marker 7   Main: 79    Alternate: 79
)Marker 8   Main: 80    Alternate: 80
)Marker 9   Main: 81    Alternate: 81
@145

&PLAYBACK MACRO

This command will play back a previously recorded macro. A
menu showing the name of all macros will appear; you should
choose the one desired.

The following screen gives shortcut commands which allow you
to playback macros without using the menu system.
]

The following commands will playback a macro without using
the menu system:

)Macro 1    Main: 85    Alternate: 85
)Macro 2    Main: 86    Alternate: 86
)Macro 3    Main: 87    Alternate: 87
)Macro 4    Main: 88    Alternate: 88
)Macro 5    Main: 89    Alternate: 89
)Macro 6    Main: 90    Alternate: 90
)Macro 7    Main: 91    Alternate: 91
)Macro 8    Main: 92    Alternate: 92
)Macro 9    Main: 93    Alternate: 93
@146

&TOGGLE FIXED TABS

    Keystroke sequence:   146
)    Alternate keystrokes: 146

When fixed tabs are ON, tab positions are taken from a table
of columns that you can set to even spacing or customize
through various tab commands. When fixed tabs are OFF, tab
positions are based on the contents of the text surrounding
the current line.
@147

&SET TEMPORARY MARGIN

    Keystroke sequence:   147
)    Alternate keystrokes: 147

The current cursor column will be assigned as the temporary
left margin. If the cursor is beyond the right margin, an
error will occur.
@148

&SET HOME DIRECTORY

    Keystroke sequence:   148
)    Alternate keystrokes: 148

Mega-Star uses several files in its operation. These contain
the printer drivers, style sheets, default macros, and this
help file. In order to run Mega-Star from a drive or
directory other than where these files are located, you will
need to set up a Home Directory. The home directory
specifies the location of the optional Mega-Star support
files on your system.
]

The following files should be kept in that directory:

)  MS.HLP  MS.MAC  MSPRT.EXE  *.ESY  *.PRO  *.STY

Mega-Star will operate without the use of these files, but
in that case certain program features will not be available.

After the home directory is set, it can be saved with
Mega-Star's Save Setup command.
@149

&TOGGLE HI-BIT STRIP

    Keystroke sequence:   149
)    Alternate keystrokes: 149

When Hi-bit strip is ON, the most significant bit of each
character read from the disk will be set to zero. This is
useful when reading in files previously generated in
WordStar document mode. Note that stripping the high bit
will also affect any usage of the IBM extended ASCII
character set, such as the line drawing characters.
@150

&EDIT MACRO

    Keystroke sequence:   150
)    Alternate keystrokes: 150

Macros recorded within Mega-Star can be edited on a
character by character basis using the built-in macro
editor.

First, a prompt box will ask for a new name for the macro,
which you can accept as is, or change.
]

The macro will appear in another window. It can be edited
using the cursor keys, and the <Del> or <Backspace> keys.
Most characters you type will be inserted literally into the
macro. <CtrlBksp> will delete the macro. <Enter> will end
the session in the macro editor. <Esc> will undo any
changes made to the macro. In case you need to enter any of
these special keys as part of the macro, press the
<ScrollLock> key to enter Literal mode. In this mode, all
keystrokes will be inserted into the macro without any
interpretation.
@151

&WRITE TO FILE

    Keystroke sequence:   151
)    Alternate keystrokes: 151

This command will store all text in the current window to
any file that you name. When you are editing in a window
that has not previously been named, you can use this command
to assign a name to the window. Using it in an already-named
window will cause the name of that window, and all other
windows sharing the same text stream, to be updated to the
new name.
@152

&TOGGLE KEY HELP

    Keystroke sequence:   152
)    Alternate keystrokes: 152

When Key Help is ON, Mega-Star will display the command
sequences that correspond to each menu selection while you
are browsing through the menu system. This can serve to
familiarize you with the quick keystrokes and speed up your
editing.
@153

&PREVIOUS WINDOW

    Keystroke sequence:   153
)    Alternate keystrokes: 153

The cursor will be moved to the current position in the next
window up the screen. If the cursor is already in the
topmost window, it will move to the bottom window. If there
is only one window, nothing will happen.
@154

&GOTO NEXT SENTENCE

    Keystroke sequence:   154
)    Alternate keystrokes: 154

The cursor will be moved to the beginning of the next
sentence. Sentences are delimited by periods, semicolons,
and other common punctuation marks, as well as by blank
lines and lines beginning with the Mega-Star format
character (.).
@155

&GOTO PREVIOUS SENTENCE

    Keystroke sequence:   155
)    Alternate keystrokes: 155

The cursor will be moved to the beginning of the previous
sentence. Sentences are delimited by periods, semicolons,
and other common punctuation marks, as well as by blank
lines and lines beginning with the Mega-Star format
character (.).
@156

&RESTORE EVEN TABS

    Keystroke sequence:   156
)    Alternate keystrokes: 156

Tabs will be set on an even spacing as determined by the
current default tab spacing. Any other tab settings will be
cleared.
@157

&WHICH FONT

    Keystroke sequence:   157
)    Alternate keystrokes: 157

Mega-Star will display the font type of the character at the
cursor position. If the character has more than one font
applied to it, Mega-Star will list all of them.
@158

&SELECT BOLD

    Keystroke sequence:   158
)    Alternate keystrokes: 158

If a block is marked and visible, Mega-Star will convert the
block to bold typeface. It does so by automatically placing
the Toggle Bold control character (<CtrlB>) at the
beginning and end of the block.

If no block is marked, Mega-Star will place a pair of print
control characters at the current cursor position, and
position the cursor between the two. Thus, while the cursor
remains between the control characters, newly entered text
will be in the selected typeface.
@159

&SELECT DOUBLESTRIKE

    Keystroke sequence:   159
)    Alternate keystrokes: 159

If a block is marked and visible, Mega-Star will convert the
block to double-strike typeface. It does so by automatically
placing the Toggle Double-strike control character
(<CtrlD>) at the beginning and end of the block.

If no block is marked, Mega-Star will place a pair of print
control characters at the current cursor position, and
position the cursor between the two. Thus, while the cursor
remains between the control characters, newly entered text
will be in the selected typeface.
@160

&SELECT UNDERSCORE

    Keystroke sequence:   160
)    Alternate keystrokes: 160

If a block is marked and visible, Mega-Star will convert the
block to underscore typeface. It does so by automatically
placing the Toggle Underscore control character (<CtrlS>)
at the beginning and end of the block.

If no block is marked, Mega-Star will place a pair of print
control characters at the current cursor position, and
position the cursor between the two. Thus, while the cursor
remains between the control characters, newly entered text
will be in the selected typeface.
@161

&SELECT SUPERSCRIPT

    Keystroke sequence:   161
)    Alternate keystrokes: 161

If a block is marked and visible, Mega-Star will convert the
block to superscript typeface. It does so by automatically
placing the Toggle Superscript control character (<CtrlT>)
at the beginning and end of the block.

If no block is marked, Mega-Star will place a pair of print
control characters at the current cursor position, and
position the cursor between the two. Thus, while the cursor
remains between the control characters, newly entered text
will be in the selected typeface.
@162

&SELECT SUBSCRIPT

    Keystroke sequence:   162
)    Alternate keystrokes: 162

If a block is marked and visible, Mega-Star will convert the
block to subscript typeface. It does so by automatically
placing the Toggle Subscript control character (<CtrlV>) at
the beginning and end of the block.

If no block is marked, Mega-Star will place a pair of print
control characters at the current cursor position, and
position the cursor between the two. Thus, while the cursor
remains between the control characters, newly entered text
will be in the selected typeface.
@163

&SELECT COMPRESSED

    Keystroke sequence:   163
)    Alternate keystrokes: 163

If a block is marked and visible, Mega-Star will convert the
block to compressed typeface. It does so by automatically
placing the Toggle Alternate 1 control character (<CtrlA>)
at the beginning and end of the block. For most printer
driver files, the Alternate 1 typeface is defined as
compressed print.

If no block is marked, Mega-Star will place a pair of print
control characters at the current cursor position, and
position the cursor between the two. Thus, while the cursor
remains between the control characters, newly entered text
will be in the selected typeface.
@164

&SELECT ITALICS

    Keystroke sequence:   164
)    Alternate keystrokes: 164

If a block is marked and visible, Mega-Star will convert the
block to italic typeface. It does so by automatically
placing the Toggle Alternate 2 control character (<CtrlN>)
at the beginning and end of the block. For most printer
driver files, the Alternate 2 typeface is defined as
italic print.

If no block is marked, Mega-Star will place a pair of print
control characters at the current cursor position, and
position the cursor between the two. Thus, while the cursor
remains between the control characters, newly entered text
will be in the selected typeface.
@165

&TOGGLE SNOW CONTROL

    Keystroke sequence:   165
)    Alternate keystrokes: 165

When Snow Control is ON, Mega-Star avoids the screen
interference patterns called "snow" that are produced by
certain display adapters, notably the IBM Color Graphics
Adapter. For other color adapters, the Snow Control can be
turned off. This improves screen updating performance
considerably.
@166

&TOGGLE BLOCK CURSOR

    Keystroke sequence:   166
)    Alternate keystrokes: 166

Mega-Star offers a choice between a blinking hardware cursor
and a solid unblinking cursor. The color of the block cursor
can be set via the Options Colors menu.
@167

&TOGGLE 43/50 LINE MODE

    Keystroke sequence:   167
)    Alternate keystrokes: 167

On computers equipped with an Enhanced Graphics Adapter,
Mega-Star can display 43 lines on the screen. On computers
equipped with VGA, Mega-Star can display 50 lines on the
screen. Toggle this option ON if a longer text display is
desired.
@168

&MARGIN RELEASE

    Keystroke sequence:   168
)    Alternate keystrokes: 168

Setting Margin Release ON allows you to type beyond the left
and right margins while Word Wrap mode is active. Margin
release remains effective until the cursor is moved to
another line. It can also be toggled off at any time.
@169

&SPELL CHECK

    Keystroke sequence:   169
)    Alternate keystrokes: 169

In combination with Turbo Lightning, Borland's RAM resident
spelling checker and thesaurus, Mega-Star will spell-check
any of your documents. Lightning must be installed, or an
error will occur.

Mega-Star checks the document in the current screen window.
By default, checking proceeds from the current cursor
position to the end of the file. If a block is marked and
visible, only that block will be checked.
]

Mega-Star contains a small built-in dictionary of the 500
most commonly used English words. This dictionary is kept in
memory at all times in order to accelerate the checking
process.

Once the operation begins, Mega-Star keeps you advised of
its progress on the status line. The line and column
counters tell you what part of the document is being
checked, as does the percentage indicator. These are updated
each time a new word is checked.
]

When Lightning finds a word that it does not recognize, the
screen will be updated to highlight the word, and a popup
menu will ask you to select an option. Select by moving the
bar and pressing <Enter> or by pressing the first character
of any of the options:

)  Skip once
)    Ignore the spelling of this word in only this
)    one instance.
)  Ignore for this document
)    Ignore the spelling of this word for the
)    duration of the check.
]

)  List Lightning sound-alikes
)    Display a list of sound-alike words from
)    Lightning's dictionary. Select one and press
)    <Enter>, or press <Esc> to return to the
)    previous menu.
)  Edit from the keyboard
)    A prompt box will appear to allow interactive
)    editing of the word. Press <Enter> to accept,
)    or <Esc> to return to the previous menu. You
)    may use Lightning's interactive modes at this
)    time. Mega-Star will recheck the word after
)    you finish editing it.
]

)  Mark with "~"
)    Place a tilde in front of the word. After
)    the document has been checked, you can use
)    the Find Pattern command to locate the marked
)    words.
)  Add to dictionary
)    Add the word to Lightning's auxiliary
)    dictionary (usually AUXI.DIC). A secondary
)    menu of case selections will appear. Press
)    <Esc> to return to the previous menu, or
)    <Enter> to add to the dictionary.
]

)  Batch mark rest of document
)    Cancel the interactive mode normally used
)    for spell-checking. From this point on, all
)    unrecognized words are marked with tildes
)    (~).

A spell-checking operation may be stopped by pressing <Esc>
at the corrections menu (once a misspelling is found) or by
pressing any key while a file is being checked. In the
latter case, a prompt box will be displayed, asking if you
want to stop. Press Y to stop, N to continue.
@171

&TOGGLE TAB WRITING

    Keystroke sequence:   171
)    Alternate keystrokes: 171

By default, Mega-Star does not write tab characters in files
saved from the editor. If Tab Writing is activated,
Mega-Star will translate sequences of spaces to tabs in
order to save disk space for the output file. Tabs are
computed using the fixed spacing currently set for fixed
tabs. Multiple spaces found within pairs of single or double
quotes (as used in Pascal or C source code) will not be
converted to tabs.

Tab writing is saved as a Mega-Star default.
@172

&TOGGLE WRAP COMPRESSION

    Keystroke sequence:   172
)    Alternate keystrokes: 172

By default, Mega-Star compresses extra spaces out of any
line before it is wrapped. This feature is required in order
to "unjustify" text that has previously been right
justified. However, in some cases the compression will
remove desired spaces, as in the case of aligned columns of
figures.

When this toggle is OFF, extra spaces will not be removed
from lines being wrapped. Wrap compression is saved as a
Mega-Star default.
@173

&TOGGLE INITIAL ZOOM STATE

    Keystroke sequence:   173
)    Alternate keystrokes: 173

The state of this toggle determines Mega-Star's default
behavior when more than one window is on the screen. When
Initial Zoom State is OFF, multiple windows will appear
simultaneously on the screen, that is, they will not be
zoomed.

When Initial Zoom State is ON, multiple windows will be
zoomed. The last file opened will be visible on the screen,
and others will be hidden behind it.

Initial Zoom State is saved as a Mega-Star default.

The normal zoom window command may be used at any time,
regardless of Initial Zoom State.
@174

&HELP SUMMARY

Mega-Star provides help in several ways. This section
describes how to use the help system.

Whenever the Mega-Star help system is on screen, you can use
the <PgUp> and <PgDn> keys to move from one screen to
another. <Home> and <End> will take you to the first and
last pages of the section. Press <Esc> when you are done
using help.
]

The Mega-Star Pulldown menu system is available at any time
by pressing 191. Most of Mega-Star's commands may be
selected from the menus. Within the menu system, you may
activate "Key help" by choosing Setup Display options Key
help. With Key help activated, the quick keystrokes that
activate each command will be displayed on the top row of
the screen while the selection bar is positioned over that
menu item.

Pressing 174 while within the Mega-Star menu system or
within any prompt box will bring up a window containing more
detailed help regarding the selected command. Pressing 174
while you are entering text will bring up a menu of help
topics.
@175

&HELP SUMMARY

Mega-Star provides help in several ways. This help section
describes how to use the help system.

Whenever the Mega-Star help system is on screen, you can use
the <PgUp> and <PgDn> keys to move from one screen to
another. <Home> and <End> will take you to the first and
last pages of the section. Press <Esc> when you are done
using help.
]

The Mega-Star menu system is available at any time by
pressing 191. Most of Mega-Star's commands may be selected
from the menus. Within the menu system, you may activate
"Key help" by choosing Setup Display options Key help. With
Key help activated, the quick keystrokes that activate each
command will be displayed on the top row of the screen while
the selection bar is positioned over that menu item.

Pressing 174 while within the Mega-Star menu system or
within any prompt box will bring up a window containing more
detailed help regarding the selected command. Pressing 174
while you are entering text will bring up a menu of help
topics.
]

&Help and Status Keystrokes

)Show help menu
)    Main: 174    Alternate: 174
)Show help summary
)    Main: 50    Alternate: 50
)Activate menu system
)    Main: 191    Alternate: 191
)Show system and file information
)    Main: 104    Alternate: 104
)Show available memory
)    Main: 105    Alternate: 105
@176

&Cursor Movement

Character left
)    Main: 0    Alternate: 0
)Character right
)    Main: 1    Alternate: 1
)Word left
)    Main: 2    Alternate: 2
)Word right
)    Main: 3    Alternate: 3
)Line up
)    Main: 4    Alternate: 4
)Line down
)    Main: 5    Alternate: 5
)Scroll up
)    Main: 6    Alternate: 6
)Scroll down
)    Main: 7    Alternate: 7
)Page up
)    Main: 9    Alternate: 9
)Page down
)    Main: 8    Alternate: 8
)Top of file
)    Main: 10    Alternate: 10
)Bottom of file
)    Main: 11    Alternate: 11
]
)Beginning of line
)    Main: 12    Alternate: 12
)End of line
)    Main: 13    Alternate: 13
)Top of screen
)    Main: 14    Alternate: 14
)Bottom of screen
)    Main: 15    Alternate: 15
@177

&Quick Movement Commands

Go to line
)    Main: 18    Alternate: 18
)Go to column
)    Main: 19    Alternate: 19
)Go to page
)    Main: 129    Alternate: 129
)Go to window
)    Main: 20    Alternate: 20
)Previous cursor position
)    Main: 21    Alternate: 21
)Up to equal indent
)    Main: 16    Alternate: 16
)Down to equal indent
)    Main: 17    Alternate: 17
)Next sentence
)    Main: 154    Alternate: 154
)Previous sentence
)    Main: 155    Alternate: 155
]

&Text Markers

Set a marker by menu
)    Main: 143    Alternate: 143
)Jump to marker by menu
)    Main: 144    Alternate: 144
)Toggle marker display
)    Main: 61    Alternate: 61
)Set marker 0
)    Main: 62    Alternate: 62
)Set marker 1
)    Main: 63    Alternate: 63
)Set marker 2
)    Main: 64    Alternate: 64
)Set marker 3
)    Main: 65    Alternate: 65
)Set marker 4
)    Main: 66    Alternate: 66
)Set marker 5
)    Main: 67    Alternate: 67
)Set marker 6
)    Main: 68    Alternate: 68
)Set marker 7
)    Main: 69    Alternate: 69
)Set marker 8
)    Main: 70    Alternate: 70
)Set marker 9
)    Main: 71    Alternate: 71
]
)Jump marker 0
)    Main: 72    Alternate: 72
)Jump marker 1
)    Main: 73    Alternate: 73
)Jump marker 2
)    Main: 74    Alternate: 74
)Jump marker 3
)    Main: 75    Alternate: 75
)Jump marker 4
)    Main: 76    Alternate: 76
)Jump marker 5
)    Main: 77    Alternate: 77
)Jump marker 6
)    Main: 78    Alternate: 78
]
)Jump marker 7
)    Main: 79    Alternate: 79
)Jump marker 8
)    Main: 80    Alternate: 80
)Jump marker 9
)    Main: 81    Alternate: 81
@178

&Text Insertion and Deletion

Undo last deletion
)    Main: 22    Alternate: 22
)Flush Undo buffer
)    Main: 124    Alternate: 124
)Restore line
)    Main: 23    Alternate: 23
)Insert undo buffer
)    Main: 116    Alternate: 116
)Tab
)    Main: 24    Alternate: 24
)Backward Tab
)    Main: 39    Alternate: 39
)New line
)    Main: 26    Alternate: 26
)Insert line
)    Main: 27    Alternate: 27
)Insert control character
)    Main: 25    Alternate: 25
)Delete current character
)    Main: 28    Alternate: 28
)Delete character left
)    Main: 29    Alternate: 29
)Delete word
)    Main: 30    Alternate: 30
)Delete to end of line
)    Main: 31    Alternate: 31
]
)Delete line
)    Main: 32    Alternate: 32
)Delete line (no undo)
)    Main: 33    Alternate: 33
)Abort current operation
)    Main: 192    Alternate: 192
@179

&Search and Replace

Search for pattern
)    Main: 34    Alternate: 34
)Search and replace
)    Main: 35    Alternate: 35
)Search and playback macro
)    Main: 36    Alternate: 36
)Search again
)    Main: 37    Alternate: 37
@180

&Files

Edit another file
)    Main: 40    Alternate: 40
)Abandon file
)    Main: 41    Alternate: 41
)Read file into window
)    Main: 42    Alternate: 42
)Save and continue edit
)    Main: 43    Alternate: 43
)Save and exit to DOS
)    Main: 45    Alternate: 45
)Write to named file
)    Main: 151    Alternate: 151
)Save/Switch files
)    Main: 48    Alternate: 48
@181

&Windows

Open file
)    Main: 46    Alternate: 46
)Close window
)    Main: 142    Alternate: 142
)Resize window
)    Main: 47    Alternate: 47
)Next window
)    Main: 49    Alternate: 49
)Previous window
)    Main: 153    Alternate: 153
)Zoom window
)    Main: 51    Alternate: 51
@182

&Block Commands

Begin block
)    Main: 52    Alternate: 52
)End block
)    Main: 53    Alternate: 53
)Start of block
)    Main: 54    Alternate: 54
)End of block
)    Main: 55    Alternate: 55
)Copy block
)    Main: 56    Alternate: 56
)Move block
)    Main: 57    Alternate: 57
)Delete block
)    Main: 58    Alternate: 58
)Hide block
)    Main: 59    Alternate: 59
)Mark current word
)    Main: 60    Alternate: 60
)Mark current sentence
)    Main: 195    Alternate: 195
)Mark current line as a block
)    Main: 196    Alternate: 196
)Mark last line of block
)    Main: 197    Alternate: 197
)Copy block of lines
)    Main: 198    Alternate: 198
]
)Move block of lines
)    Main: 199    Alternate: 199
)Duplicate line
)    Main: 200    Alternate: 200
)Print block
)    Main: 201    Alternate: 201
)Write block to file
)    Main: 44    Alternate: 44
@183

&Text Formatting

Format paragraph
)    Main: 112    Alternate: 112
)Format block
)    Main: 141    Alternate: 141
)Center line
)    Main: 120    Alternate: 120
)Margin release
)    Main: 168    Alternate: 168
)Toggle case
)    Main: 108    Alternate: 108
)Lower case
)    Main: 109    Alternate: 109
)Upper case
)    Main: 110    Alternate: 110
)Show current font
)    Main: 157    Alternate: 157
)Select Bold
)    Main: 158    Alternate: 158
)Select Double
)    Main: 159    Alternate: 159
)Select Underscore
)    Main: 160    Alternate: 160
)Select Superscript
)    Main: 161    Alternate: 161
)Select Subscript
)    Main: 162    Alternate: 162
]
)Select Compressed
)    Main: 163    Alternate: 163
)Select Italics
)    Main: 164    Alternate: 164
@184

&Tabs

)Tab
)    Main: 24    Alternate: 24
)Backward Tab
)    Main: 39    Alternate: 39
)Set tabs
)    Main: 136    Alternate: 136
)Put tabs
)    Main: 138    Alternate: 138
)Set tab size
)    Main: 137    Alternate: 137
)Edit tabs
)    Main: 139    Alternate: 139
)Tab temporary margin
)    Main: 140    Alternate: 140
)Set temporary margin
)    Main: 147    Alternate: 147
)Restore even tabs
)    Main: 156    Alternate: 156
@185

&Utility Commands

Easy print
)    Main: 123    Alternate: 123
Professional print
)    Main: 202    Alternate: 202
)Change active directory
)    Main: 127    Alternate: 127
)Directory
)    Main: 128    Alternate: 128
)Operating system
)    Main: 38    Alternate: 38
@186

&Settings and Toggles

Toggle initial Zoom state
)    Main: 173    Alternate: 173
)Toggle insert mode
)    Main: 106    Alternate: 106
)Toggle autoindent mode
)    Main: 107    Alternate: 107
)Toggle word wrap
)    Main: 113    Alternate: 113
)Toggle wrap compression
)    Main: 172    Alternate: 172
)Toggle tab line display
)    Main: 115    Alternate: 115
)Toggle justify
)    Main: 117    Alternate: 117
)Toggle page breaks
)    Main: 118    Alternate: 118
)Toggle attributes
)    Main: 119    Alternate: 119
)Toggle fixed tabs
)    Main: 146    Alternate: 146
)Toggle hi-bit strip
)    Main: 149    Alternate: 149
)Toggle tab expansion
)    Main: 134    Alternate: 134
)Toggle tab writing
)    Main: 171    Alternate: 171
]
)Toggle key help
)    Main: 152    Alternate: 152
)Toggle snow check
)    Main: 165    Alternate: 165
)Toggle block cursor
)    Main: 166    Alternate: 166
)Toggle 43 line mode
)    Main: 167    Alternate: 167
)Set left margin
)    Main: 114    Alternate: 114
)Set right margin
)    Main: 111    Alternate: 111
)Set top margin
)    Main: 130    Alternate: 130
]
)Set bottom margin
)    Main: 131    Alternate: 131
)Set page length
)    Main: 132    Alternate: 132
)Set undo limit
)    Main: 133    Alternate: 133
)Set default file extension
)    Main: 135    Alternate: 135
)Set colors
)    Main: 121    Alternate: 121
)Set home directory
)    Main: 148    Alternate: 148
)Save setup
)    Main: 122    Alternate: 122
@187

&Spell Checking

)    Main: 169    Alternate: 169

In combination with Turbo Lightning, Borland's RAM resident
spelling checker and thesaurus, Mega-Star will spell-check
any of your documents. Lightning must be installed, or an
error will occur.

Mega-Star checks the document in the current screen window.
By default, checking proceeds from the current cursor
position to the end of the file. If a block is marked and
visible, only that block will be checked.
]

Mega-Star contains a small built-in dictionary of the 500
most commonly used English words. This dictionary is kept in
memory at all times in order to accelerate the checking
process.

Once the operation begins, Mega-Star keeps you advised of
its progress on the status line. The line and column
counters tell you what part of the document is being
checked, as does the percentage indicator. These are updated
each time a new word is checked.
]

When Lightning finds a word that it does not recognize, the
screen will be updated to highlight the word, and a popup
menu will ask you to select an option. Select by moving the
bar and pressing <Enter> or by pressing the first character
of any of the options:

)  Skip once
)    Ignore the spelling of this word in only this
)    one instance.
)  Ignore for this document
)    Ignore the spelling of this word for the
)    duration of the check.
]

)  List Lightning sound-alikes
)    Display a list of sound-alike words from
)    Lightning's dictionary. Select one and press
)    <Enter>, or press <Esc> to return to the
)    previous menu.
)  Edit from the keyboard
)    A prompt box will appear to allow interactive
)    editing of the word. Press <Enter> to accept,
)    or <Esc> to return to the previous menu. You
)    may use Lightning's interactive modes at this
)    time. Mega-Star will recheck the word after
)    you finish editing it.
]

)  Mark with "~"
)    Place a tilde in front of the word. After
)    the document has been checked, you can use
)    the Find Pattern command to locate the marked
)    words.
)  Add to dictionary
)    Add the word to Lightning's auxiliary
)    dictionary (usually AUXI.DIC). A secondary
)    menu of case selections will appear. Press
)    <Esc> to return to the previous menu, or
)    <Enter> to add to the dictionary.
]

)  Batch mark rest of document
)    Cancel the interactive mode normally used
)    for spell-checking. From this point on, all
)    unrecognized words are marked with tildes
)    (~).

A spell-checking operation may be stopped by pressing <Esc>
at the corrections menu (once a misspelling is found) or by
pressing any key while a file is being checked. In the
latter case, a prompt box will be displayed, asking if you
want to stop. Press Y to stop, N to continue.
@188

&Macros

Load macros from disk
)    Main: 82    Alternate: 82
)Store macros to disk
)    Main: 83    Alternate: 83
)Record macro
)    Main: 84    Alternate: 84
)Edit macro
)    Main: 150    Alternate: 150
)Playback macro by menu
)    Main: 145    Alternate: 145
)Playback Macro 1
)    Main: 85    Alternate: 85
)Playback Macro 2
)    Main: 86    Alternate: 86
)Playback Macro 3
)    Main: 87    Alternate: 87
)Playback Macro 4
)    Main: 88    Alternate: 88
)Playback Macro 5
)    Main: 89    Alternate: 89
)Playback Macro 6
)    Main: 90    Alternate: 90
)Playback Macro 7
)    Main: 91    Alternate: 91
)Playback Macro 8
)    Main: 92    Alternate: 92
]
)Playback Macro 9
)    Main: 93    Alternate: 93
)Playback scrap macro
)    Main: 94    Alternate: 94
)Playback scrap macro 1 time
)    Main: 95    Alternate: 95
)Playback scrap macro 2 times
)    Main: 96    Alternate: 96
)Playback scrap macro 3 times
)    Main: 97    Alternate: 97
)Playback scrap macro 4 times
)    Main: 98    Alternate: 98
)Playback scrap macro 5 times
)    Main: 99    Alternate: 99
]
)Playback scrap macro 6 times
)    Main: 100    Alternate: 100
)Playback scrap macro 7 times
)    Main: 101    Alternate: 101
)Playback scrap macro 8 times
)    Main: 102    Alternate: 102
)Playback scrap macro 9 times
)    Main: 103    Alternate: 103
@189

&Printing a file

You can choose between three ways of printing your files
with Mega-Star. They are Print Block, Easy Print, and
Professional Print. I will start by describing the easiest
method. Note: For more details access the Pulldown menu
system by pressing 191, select the type of printing
desired, then press 174.
]

&PRINT BLOCK

)    Main: 201    Alternate: 201

Simply mark the part to be printed with Block Mark commands
and issue this command. This command is useful in quickly
printing out portions of your document. The text will be
printed out exactly as is with no formatting or margin
control.
]

&EASY PRINT

)    Main: 123    Alternate: 123

The Easy Print Text Formatter allows a more control over
your document. Any text file can be printed from within
Mega-Star. Easy print uses different on-screen colors to
represent your font (bold, underline, etc.) selections. In
this way, it is easier to visualize the resulting printout
(near-What You See Is What You Get). Files formatted with
Mega-Star's page layout commands and font controls will
print with desired margins, multiple fonts, headers,
footers, and page breaks.
]

&PROFESSIONAL PRINT

)    Main: 202    Alternate: 202

The Professional Print Text Formatter can be used to print
any document (i.e. Resumes, manuals, listings) were maximum
control of the resulting printout is desired. Professional
Print has macro capabilities, can take advantage of all your
printers abilities, can generate Table of Constants,
Glossary, and Index, can include file timestamp, current
time, current date, can draw boxes and borders, can include
special symbols in your text, and more.
@190

&Function Keys

|
@195

&MARK SENTENCE

    Keystroke sequence:   195
)    Alternate keystrokes: 195

Mark the sentence at the current cursor position as a block.
@196

&MARK FIRST LINE

    Keystroke sequence:   196
)    Alternate keystrokes: 196

Mark the line at the current cursor position as a block.
@197

&MARK LAST LINE

    Keystroke sequence:   197
)    Alternate keystrokes: 197

Mark the line at the current cursor position as the last
line of a block.
@198

&COPY BLOCK OF LINES

    Keystroke sequence:   198
)    Alternate keystrokes: 198

Copy the block of lines to the current cursor position and
move the text down to make room.
@199

&MOVE BLOCK OF LINES

    Keystroke sequence:   199
)    Alternate keystrokes: 199

Move the block of lines to the current cursor position and
move the text down to make room.
@200

&DUPLICATE LINE

    Keystroke sequence:   200
)    Alternate keystrokes: 200

Duplicate the current line.
@201

&PRINT BLOCK

    Keystroke sequence:   201
)    Alternate keystrokes: 201

Print the currently marked block. Note: Do not turn the
printer off once printing has started as the Quick Print
method used for block prints should not be interrupted.
@202

&PROFESSIONAL PRINT

    Keystroke sequence:   202
)    Alternate keystrokes: 202

The Professional Print Text Formatter can be used to print
any document were maximum control of the resulting printout
is desired.

Do not press <Enter> on the first menu selection, Print
file now, until the other items in the box have been set to
your satisfaction. Selecting Print file now starts the
print job.

After you select the second menu item, Name of file, a
prompt box will request entry of the name of the file to
print. When prompted for a file name, you may enter DOS
wildcards or the name of another drive or subdirectory. In
this case, another window will display the names of all
matching files. You can select from this list by using the
cursor keypad, or by pressing the first letter of the
filename in which you are interested.

You can also print out a group of files at once (i.e.
chapters of a book) by placing the name of each of these
file into a separate file proceeded by the Read File dot
command (.RF). Then enter the name of this separate file
at Name of file. See manual for examples.

Select from any of the available printer driver files
(default extension .PRO) to find one that is appropriate for
your printer. This choice will be saved with Mega-Star by
using menu Options-Save Setup.

You can preview print your document by either selecting
File at the Device menu item or by turning on Screen print
also or both.

Set Manual paper feed ON if you wish to have Mega-Star
prompt you to insert a new sheet of paper after each page.
This choice will be saved with Mega-Star by using menu
Options-Save Setup.

Set Use formfeeds ON if your printer accepts has formfeed
capability. Otherwise, Mega-Star will fill out the end of
each page with blank lines. This choice will be saved with
Mega-Star using menu Options-Save Setup.

Use Attach style sheet to set the type of printing to be
done (i.e. memos, listings, chapters of a book). Style
sheets can be created and edited as normal text files. When
in doubt use NORMAL.STY.

After making all selections, move the menu bar to the Print
file now item and press <Enter>.
]

&PROFESSIONAL PRINT DOT COMMANDS

)     Abort                      .AB
)     Auto Word Wrap             .AW ON/OFF
)     Begin Capture              .BC filename
)     Begin Macro                .BM name
)     Break                      .BR
)     Break with Justify         .BJ
)     Conditional Page Break     .CP number
)     Control Character          .CC symbol
)     Dot Commands               .DC ON/OFF
)     Define String Replacement  .DS /label/string/
)     Display Message            .DM message
)     End Capture                .EC
)     End Macro                  .EM
)     Even Footer                .EF /part1/part2/part3/
)     Even Header                .EH /part1/part2/part3/
)     Font Character             .FC symbol
)     Footer                     .FO /part1/part2/part3/
)     Footer Margin              .FM number
)     Form Feed                  .FF 0/1
)     Header                     .HE /part1/part2/part3/
)     Header Margin              .HM number
)     Ignore Comment             .IG or ..
)     Insert Character           .IC symbol
)     Left Margin                .LM number
)     Line Spacing               .LS number
)     Margin Bottom              .MB number
)     Margin Top                 .MT number
)     Odd Footer                 .OF /part1/part2/part3/
)     Odd Header                 .OH /part1/part2/part3/
)     Output Centered            .OC number
)     Output Justified           .OJ ON/OFF
)     Output Printer Sequence    .OU base numbers
)     Output Width               .OW number
)     Page Break                 .PA
)     Page Length                .PL number
)     Page Number                .PN number
)     Print Control              .PC character base #'s
)     Read File                  .RF filename
)     Register Variable          .RG name number
)     Right Margin               .RM number
)     Space Character            .SC character
)     Space Down                 .SP number
)     Special Font               .SF character base #'s
)     Stop at New Page           .ST 0/1
)     Turn Commands (embedded)   .TC ON/OFF
)     Temporary Indent           .TI number
]

&PREDEFINED MACROS

The following macros have been predefined to ease usage
of special features found in the Epson LQ printer. To
learn how to use macros see the User's Manual.

)     .reset            - reset the printer
)     .proportional     - turn proportional (^P)
)     .non-proportional - turn proportional off (^p)
)     .double           - turn double strike on (^D)
)     .non-double       - turn double strike off (^d)
)     .10-pitch         - use 10 pitch characters (^7)
)     .12-pitch         - use 12 pitch characters (^8)
)     .15-pitch         - use 15 pitch characters (^9)
)     .roman            - use roman font (^0)
)     .sans-serif       - use sans serif font (^1)
)     .quality          - select quality mode (^Q)
)     .draft            - select draft mode (^q)
]

&SPECIAL TEXT EMBEDDED COMMANDS

The following commands will insert time and date
information into your file. Use as shown in headers and
footer.

)     # - insert current page number
)     ! - insert system time here
)     @ - insert system date here
)     ~ - insert file time stamp here
]
)     │<─────────────── Output Width (.OW) ──────────────>│
) ─  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
) │  ░░                 Header Margin (.HM)               ░░
) │  ░░─────────────────Margin Top (.MT)──────────────────░░
) │  ░░<--Left-->|         Text Area           |<-Right-->░░
) │  ░░   Margin |           "   "             |  Margin  ░░
) .  ░░   (.LM)  |           "   "             |   (.RM)  ░░
) P  ░░          |           "   "             |          ░░
) L  ░░<---Temp--->|This line is indented.     |          ░░
) │  ░░   Indent |         Text Area           |          ░░
) │  ░░    (.TI) |           "   "             |          ░░
) │  ░░          |           "   "             |          ░░
) │  ░░─────────────────Margin Bottom (.MT)───────────────░░
) │  ░░                 Footer Margin (.FM)               ░░
) ─  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
]

&PROFESSIONAL PRINT BUILT-IN PRINTER CONTROL CODES
&(Partial list - see manual)

)  ^B    Start Boldface - strike each character three times
)  ^b    End Boldface
)  ^D    Start double strike - strike each character twice
)  ^d    End double strike
)  ^H    Backspace printer one character column
)  ^U    Start underscoring  - dash under each character
)  ^u    End underscoring
]

&PROFESSIONAL PRINT EXTERNAL PRINTER CONTROL CODES
&(will override built-in codes)
&(Partial list - see manual)

)  ^C    Start Condensed (smallest) mode printing
)  ^c    End Condensed mode printing
)  ^D    Start double strike - use micro-adjust
)  ^d    End double strike
)  ^E    Start Elite (small) mode printing
)  ^e    End Elite mode printing
)  ^F    Start emphasize print - Fat characters
)  ^f    End emphasize print
)  ^I    Start printing in Italics
)  ^i    End printing in Italics
)  ^P    Start Proportional printing
)  ^p    End Proportional printing
)  ^Q    Start Near Letter Quality printing
)  ^q    End Near Letter Quality printing
)  ^S    Start continuous underlining
)  ^s    End continuous underlining
)  ^T    Start Superscript mode - half sized characters
)  ^t    End Superscript mode
)  ^V    Start Subscript mode - half sized characters
)  ^v    End Subscript mode
)  ^W    Start enlarged (wide) mode printing
)  ^w    End enlarged mode printing
]

&PROFESSIONAL PRINT EXTENDED EXTERNAL PRINTER CONTROL CODES
&(Note: Printer must have the capability)
&(Partial list - see manual)

)  ^0    Use Roman font
)  ^1    Use Sans Serif font
)  ^2    Use Courier font (requires optional cartridge)
)  ^3    Use Prestige font (requires optional cartridge)
)  ^4    Use Script font (requires optional cartridge)
)  ^5    Use OCR-B font (requires optional cartridge)
)  ^6    Use Italics font (same as ^I code)
)  ^7    Set pitch = 10 characters per inch
)  ^8    Set pitch = 12 characters per inch
)  ^9    Set pitch = 15 characters per inch
)  ^G    Start double high (Giant) font size
)  ^g    End double high (Giant) font size
]

&PROFESSIONAL PRINT SPECIAL FONTS
&(Font Control Character - ~)
&(Partial list - see manual)

)  ~a      lower case Greek letter alpha    α
)  ~b      lower case Greek letter beta     ß
)  ~G      upper case Greek letter gamma    Γ
)  ~e      lower case Greek letter epsilon  ε
)  ~Z      upper case Greek letter theta    Θ
)  ~I      upper case Greek letter pi       ∩
)  ~S      upper case Greek letter sigma    Σ
)  ~t      lower case Greek letter tau      τ
)  ~P      upper case Greek letter phi      φ
)  ~O      upper case Greek letter omega    Ω
)  ~=      identical symbol                 ≡
)  ~|      Angstrom                         Å
)  ~_      plus/minus                       ±
)  ~>      greater than or equal > or =)    ≥
)  ~<      less than or equal < or =)       ≤
)  ~│      division sign                    ÷
)  ~~      double approximate               ≈
)  ~       degree symbol                    °
)  ~c      cent sign                        ¢
)  ~#      British Pound sign               £
)  ~H      fraction 1/2                     ½
)  ~Q      fraction 1/4                     ¼
)  ~/      square root                      √
)  ~'      filled square                    ■
)  ~*      dark border                      █
)  ~│      light border                     ░
)  ~1      bottom left corner               └
)  ~2      inverted T connecter             ┴
)  ~3      bottom right corner              ┘
)  ~4      left connecter                   ├
)  ~5      left and right connecter         ┼
)  ~6      right connecter                  ┤
)  ~7      top left corner                  ┌
)  ~8      T connecter                      ┬
)  ~9      top right corner                 ┐
)  ~-      horizontal line                  ─
)  ~+      vertical line                    │
@203

&SORT BLOCK

    Keystroke sequence:   203
)    Alternate keystrokes: 203

Alphabetically sort the currently marked block. Press <Esc>
to abort sort.
@204

&Welcome to
)      ╔═╗╔═╗ ╔══ ╔══╗ ╔══╗    ╔══ ══╦══ ╔══╗ ╔══╗ (TM)
)      ║ ╚╝ ║ ╠══ ║ ╔╗ ╠══╣ ═  ╚═╗   ║   ╠══╣ ╠═╦╝
)      ╩    ╩ ╚══ ╚══╝ ╩  ╩    ══╝   ╩   ╩  ╩ ╩ ╩

)COPYRIGHT (C) February 26, 1989 Schmitt Software (Ver 1.0)


You are using Mega-Star, a full featured word processor
that has special abilities for programmers and persons
who need to edit/examine numerous files. The novice will
appreciate the pulldown menu and on-line help.
]
)Mega-Star's Special Features:
) - Macros
) - Pulldown menu with "learn as you go" help
) - On-Line Help (general, specific) and Function key display
) - User definable Quick Keys that are linked to On-Line Help
) - 6 text windows that can be easily resized and zoomed
) - Back door exit to DOS
) - Easily adjustable screen colors
) - Generate Table of Contents and Index even for source code
) - Style Sheets
) - 3 ways to print to handle any printing task
) - Quick response even on slower systems
) - Read and writes standard ASCII
) - Book markers, goto page, line, column, block, etc.
) - Logitech Mouse support
]

&The ShareWare Concept

Mega-Star is distributed under a unique marketing approach
called ShareWare. With this fully functional copy, you are
free to try out the program. The disk can be freely copied
and shared with others to allow them to try Mega-Star. If
this product suits your need, please register as follows.

)  Send $49.95 to: Schmitt Software
)                  Attn: Customer Service
)                  1250 Carriage Hills Drive
)                  Eagan, MN  55123
]

)What you will receive when you register:

)   The latest version of Mega-Star which can be run
)     without going through the Greetings help screen.
)   The latest Users' Manual.
)   The complete set of macros (not all would fit on the
)     ShareWare Disk).
)   The complete set of Style Sheets (not all would fit on
)     the ShareWare Disk).
)   The mouse driver for the Logitech mouse (would not fit
)     on the ShareWare Disk).
]

&Free Registration

If you would like to qualify for free registation and you
have a printer that is not supported by Mega-Star then do
the following:

Use the supplied printer driver (EPSONLQ.PRO) to make a
Professional Print driver for your printer. Make a copy of
this file. Set up all the required print codes from your
printer manual into the copy. Please indicate the exact make
and model.

Use the On-Line help and the Easy Print menu to make an Easy
Print driver.

Send both drivers to the above address. If they check out,
you will receive full registration in 4 - 6 weeks. All such
printer drivers will become the property of Schmitt Software
to use as the company sees fit with no further remuneration.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1766

     Volume in drive A has no label
     Directory of A:\

    DATEPG   STY       287   3-01-89  10:52p
    DECLAS   PRO      1970   3-01-89  10:52p
    EPSON    ESY        61   3-01-89  10:52p
    EPSON    PRO      6800   3-01-89  10:52p
    EPSONLQ  PRO      9842   3-01-89  10:52p
    HPLASF   ESY       298   3-01-89  10:52p
    MS       EXE    160000   3-01-89  10:52p
    MS       MAC        93   3-01-89  10:52p
    MS       TXT     95199   3-01-89  10:52p
    MSINST   EXE     35392   3-01-89  10:52p
    MSPRT    EXE     32213   3-01-89  10:52p
    NOFORMAT STY       480   3-01-89  10:52p
    NORMAL   STY       116   3-01-89  10:52p
    NULL     ESY        27   3-01-89  10:52p
    NULL     PRO      3087   3-01-89  10:52p
    NULL     STY       179   3-01-89  10:52p
    OKI92    ESY        57   3-01-89  10:52p
    PASCAL   MAC       532   3-01-89  10:52p
    READ     ME       4081   3-02-89  12:12p
           19 file(s)     350714 bytes
                               0 bytes free
