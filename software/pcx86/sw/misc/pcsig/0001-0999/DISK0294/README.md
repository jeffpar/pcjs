---
layout: page
title: "PC-SIG Diskette Library (Disk #294)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0294/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0294"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EDIT"

    EDIT is a general purpose text editor and word processing program.  It
    supports a wide array of editing operations, including powerful
    commands that are often not available even in very expensive word
    processors.  For example, it supports not only "word wrapping", but
    fully automatic paragraph reformatting as well.  Under versions 2.0 or
    later of DOS, EDIT even allows you to execute DOS commands, or start
    another program without leaving EDIT.  Files are limited to about
    50,000 characters (25 single-spaced pages).
    
    How to Start: Consult the README and .TXT files for documentation; use
    the PRINTDOC.BAT file to print it.  To run EDIT.EXE, just type EDIT
    <ENTER>.
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    EDIT     EXE  Main program - type "edit" to start
    ???      TXT  Documentation files (70K total)
    ???      SET  Print format files
    PRINTDOC BAT  Batch file to print documentation
    READ     ME   Brief description
    ???      EXE  Various PC file and disk tools
    MESSAGE? DOC  Notes on EDIT
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EDITDOC0.TXT

{% raw %}
```








        
	
	
	
	                                  
									EDIT
	
	
	
			   A Public Domain Text Editor and Word Processor
	
						For The IBM Personal Computer
	
				
								Version 1.37

	
	
	
									 by



	
							 Thomas N. Thurston


					1111 W. El Camino Real, Suite 109-115
							Sunnyvale, CA  94087














	
	
			

			Copyright 1983, 84, 85, 86, 87 by Thomas N. Thurston.

	
	
							  TABLE OF CONTENTS
        
        
	1.  INTRODUCTION..................................................1-1
	1.1.  Simple, Consistent Command Organization.....................1-1
	1.2.  Extensive Commands..........................................1-2
	1.3.  System Requirements.........................................1-3
	1.4.  Installation................................................1-3
	
	2.  COMMAND OVERVIEW..............................................2-1
	2.1.  Basic Concepts..............................................2-1
	2.2.  How to Start EDIT...........................................2-2
	2.3.  Screen Organization.........................................2-3
	2.4.  Command Basics..............................................2-4
	2.5.  Command Repetition..........................................2-6
	2.6.  Input to Command Prompts....................................2-6
	2.7.  Settings....................................................2-7
	2.8.  Files.......................................................2-8
	
	3.  COMMANDS......................................................3-1
	3.1.  Basic Text Insertion and Deletion...........................3-1
	3.2.  Basic Cursor Movements......................................3-3
	3.3.  Setting Display, Editing, and Formatting Options............3-5
	3.4.  File Selection and/or Exiting EDIT..........................3-6
	3.4.1.  Retrieving Setting Files..................................3-8
	3.4.2.  Protection Against Losing Your Work.......................3-9
	3.5.  Printing and Miscelleneous Word Processing.................3-10
	3.5.1.  Background Printing......................................3-12
	3.6.  Block Commands:  Save, Delete, Get, and Move Text..........3-13
	3.7.  GoTo, Find, and Replace....................................3-14
	3.8.  Help, Macros, and DOS Commands.............................3-16
	3.9.  Windows and Dual File Editing..............................3-18
	
	4.  SETTINGS......................................................4-1
	4.1.  Settings That Affect the File Being Edited..................4-1
	4.2.  Settings That Only Affect the Editing Enrironment...........4-5
	
	A.  COMMAND SUMMARY...............................................A-1
	A.1.  Basic Text Insertion and Deletion...........................A-1
	A.2.  Basic Cursor Movements......................................A-2
	A.3.  Setting Display, Editing, and Printing Options..............A-3
	A.4.  File Selection and/or Exit to DOS...........................A-4
	A.5.  Block Commands:  Save, Delete, Get, & Move Text.............A-5
	A.6.  Goto, Find, and Replace.....................................A-6
	A.7.  Miscelleneous Word Processing & Printing....................A-7
	A.8.  Help, Macros, DOS Commands, Windows, and Dual File Editing..A-7
	A.9.  Alternate Command Keys......................................A-8

	B.  INTERNAL INFORMATION..........................................B-1
```
{% endraw %}

## EDITDOC1.TXT

{% raw %}
```
		1.  INTRODUCTION
	
		    EDIT is a general-purpose text editor and word processor for the
		IBM Personal Computer.  It also runs on other computers that are 100%
		compatible with the IBM PC.  It is very easy use, and easy to learn. 
		It does everything most people need from a word processor.  It has
		all of the basic text editing and word word processing operations
		that allow you to easily create and modify nicely formatted
		documents.  It even includes some important features that are not
		available even in many expensive word processors.
	
		    EDIT is also fast.  This is because most of the time-critical
		sections of EDIT are written in assembly language.  
	
		    All this makes EDIT a very nice program to use, either as a
		general purpose text editor or as a personal word processor.  Yet
		EDIT's author has placed it in the public domain.  You may copy and
		use it freely.  You are encouraged to share it with others.  However,
		if you use EDIT, please do your part to support good public domain
		software by sending a donation to EDIT's author at the following
		address:
	
				Thomas N. Thurston
				1111 W. El Camino Real, Suite 109-115
				Sunnyvale, California  94087
	
				Suggested donation:  25 dollars
	
		    If you do send a donation, be sure to include your name and
		address.  Everyone who donates at least 15 dollars will be notified
		when major updates of EDIT are available, and how to get a current
		copy.  
		
		    The author also appreciates comments, criticisms, and suggestions
		for improvements to EDIT.  
	
	
		1.1.  Simple, Consistent Command Organization
		
		    EDIT's command organization is intuitive and "friendly".  The
		cursor control keys on the right side of the keyboard all perform the
		action designated on the keycap.  A prompt line on the screen
		indicates the command for each of the function keys F1 through F10. 
		The text keys in the center of the keyboard are used to enter text. 
		In addition to the basic commands, most commands also have a
		"stronger" version, that use the same key, but with Ctrl or Shift
		held down.  For example, the cursor control key labeled with a left
		arrow moves the cursor left one character.  By holding down Shift or
		Ctrl with the left arrow key, the cursor will move left by one word.
	
		    For more extensive commands, like those that set up margins, tab
		stops, lines per page, and such, EDIT provides menus to make the
		selection of different options easier.  It also gives a brief
		explanation of each option to help you remember what it does.  
	
		    One aspect of EDIT that is not often found in a text editor or
		word processor is the fact that it is "modeless".  This means that
		each command always means the same thing, regardless of when the
		command is given.  Even if EDIT is in the middle of one command (like
		selecting options from a menu), when you press another command key,
		EDIT will immediately execute the new command.  Of course, this isn't
		the only way to leave a menu, but it's nice, because you don't have
		to remember different commands for different contexts.  This also
		allows you to be able to immediately do what you want, without having
		to give some explicit command that means "stop this, so I can do
		something else".
	
	
		1.2.  Extensive Commands
		
		    EDIT supports approximately 100 commands, some of which have
		several options.  The following list gives an overview of the range
		and power of these commands:
	
			Cursor movements:		Relative movements by character, line,
									screen, word, sentence, paragraph, and
									indentation level.
	
									Direct movements to a specific line,
									column, or to the beginning or end of the
									file.
	
			Editing:				Deletions by character left or right;
									word left or right; to beginning or end
									of line; or entire line.
	
									Both insert and overstrike forms of text
									insertion.
	
			Block operations:		Mark block, delete block, save block,
									insert saved or deleted block (copy or
									move block), write block to file, insert
									block from file.
	
			Search and Replace:		Search forward and backward, global
									search and replace, and conditional
									replace.
	
			Page format control:	Set tab stops, margins, page layout,
									headers, footers, page number, right
									justification, and spacing.
	
			On screen display:		Bold, underline, centering, tab stops,
									margins, etc.  "What you see is what you
									get."
	
			Word wrap:				Full support of word wrap; automatic
									reformatting of a paragraph when text is
									inserted or deleted.
	
			DOS commands:			Execute any DOS command directly from
									EDIT, even execute another program or
									another copy of EDIT (DOS 2.0 or later
									only).
	
			Macros:					Keystoke macros, to simplify repetitive
									tasks.
	
			Windows:				Split the screen into two windows, to
									view and edit two different files, or two
									different places in the same file.  
		
		
		1.3.  System Requirements
		
			System:				IBM-PC or system that is 100% compatible with
								the IBM-PC.  The XT, AT, and COMPAQ are all
								okay.  The PCjr works with some restrictions,
								due to its different keyboard.
								
			Monitor:			80 column graphics or monochrome monitor.
								
			Memory:				At least 96K bytes.  128K bytes is
								recommended.  
								
			Operating System:	DOS.  Version 1.1 is okay, but 2.0 or later
								is recommended.

			Printer:			IBM matrix printer or compatible (any printer
								that supports the ASCII printable characters
								plus CR, LF, and FF).
								

		1.4.  Installation
		
		    The EDIT distribution diskette contains the following files:
		
				EDIT.EXE  (the EDIT program itself)
				EDIT.HLP  (the text used by EDIT's Help command)
	
		    To install EDIT, you should copy both of these files onto the
		diskette or hard disk that will be used as the default drive when you
		use EDIT.  Generally, the current "default drive" is indicated by the
		DOS prompt.  If the DOS prompt is
		
				A>
		
		then the current default drive is drive A.
		
		    To install EDIT on a computer with two diskette drives, place a
		DOS diskette in drive A, place the EDIT diskette in drive B, and type
		the following command:
		
				copy b:edit.* a:
		
		    After copying these two files onto the diskette in drive A, that
		diskette contains everything neccessary to run EDIT.  The new EDIT
		diskette should be used to run EDIT.  The original EDIT diskette
		should be kept in a safe place in case the new EDIT diskette is
		accidently ruined.  
		
		    To run EDIT, make sure that the EDIT diskette is in the current
		default drive, and then type
		
				edit filename
		
		where filename is the name of the file to create or edit.  Section
		2.2 describes how to run EDIT in greater detail.
		
		    The procedure to install EDIT on a hard disk is very similar. 
		You should copy both files from the EDIT distribution diskette onto
		the hard disk.  Copy them into the directory that will be used as the
		default directory when EDIT is executed, or in a directory that is in
		your command seach path.
		
		    Section 2.8 explains you to create an EDIT.SET file in order to
		configure EDIT to your particular hardware environment.  You can use
		this file customize your screen colors, and to specify strings to
		make EDIT work better with your printer.
		
		    For instructions on how to create a DOS diskette, and a more
		complete explanation of the "default drive", "default directory", and
		"command search path", consult the DOS section of the Guide To
		Operations manual, or the Disk Operating System User's Guide.
		
```
{% endraw %}

## EDITDOC2.TXT

{% raw %}
```
		2.  COMMAND OVERVIEW
		
		    One of the nice things about EDIT is how easy it is to use.  To
		start EDIT and create a document named memo1, simply type
	
				edit memo1
		
		    EDIT will start executing, and then you can start typing.  There
		is no need to wade through a hierarchy of menus just to get started. 
		To delete a character, just press the backspace key.  To move the
		cursor, press one of the the arrow keys on the right side of the
		keyboard.  EDIT's commands are simple, and they are easy to use (just
		one or two keystrokes), but they are powerful.
		
	
		2.1.  Basic Concepts
		
		    EDIT is a program that runs on the IBM Personal Computer or a
		computer that is 100% compatible with the IBM PC.  It allows you to
		create and edit documents containing arbitary text.  To do this, you
		must first start EDIT (explained in section 2.2).  Once EDIT is
		started, you can immediately begin to type, using the text keys in
		the center of the keyboard.  As you press each key, EDIT displays the
		character on the CRT screen of the computer.  The place where the
		character is displayed is indicated by the small, blinking dash on
		the screen.  This dash is called the "cursor".  After the character
		is displayed, the cursor moves one position to the right.  When you
		press the Enter key, the cursor moves one line down and to the left
		side of the screen (like carriage return on a typewriter).
		
		    EDIT stores each character you type in a large storage area in
		the computer called its "editing buffer", or just "buffer".  The
		buffer holds many more characters than EDIT can display on the screen
		at once.  EDIT only displays 23 lines of the text at any one time. 
		When you type more lines of text than will fit on the screen, the
		cursor can no longer be moved down when you press Enter.  Instead,
		all the lines on the screen are "scrolled" up one line, the top line
		disappears, and the cursor stays on the bottom line.  You don't need
		to worry about the line that disappears from the top of the screen. 
		It is still stored in the editing buffer.
		
		    EDIT also allows you to modify the text you have typed.  For
		example, when the you type the Backspace key, the character
		immediately to the left of the cursor will be erased from the screen,
		and the cursor will move one position to the left.  EDIT has other
		commands for modifying the text adjacent to the cursor -- deleting
		the character to the right of the cursor, the entire line containing
		the cursor, or an arbitrary block of text before or after the cursor,
		etc.  In fact, all EDIT commands that change the text do so by
		inserting or deleting characters immediately adjacent to the cursor.
		
		    Thus, there are commands for moving the cursor to a place in the
		text that you want to change.  This allows you to go back to
		characters typed previously and delete them, or insert new text. 
		Whenever you give a command that would move the cursor off the top or
		bottom of the screen (like the up command when the cursor is on the
		top line of the screen), the screen is scrolled up or down instead,
		so that the cursor always stays on the screen.  Some EDIT commands
		(like the Find command) may move the cursor to any point in the text,
		even to lines a long ways before or after the lines displayed on the
		screen.  When you give one of these commands, EDIT will completely
		update the text displayed on the screen, so that the 23 lines
		adjacent to the new position of the cursor are displayed.
		
		    As explained above, EDIT stores all the text you are editing in
		its editing buffer.  However, this storage of the text is only
		temporary, while you are running EDIT.  For a more long-term storage
		of the text, you must save it in a DOS file.  EDIT's Quit command
		allows you to save text in a file and retrieve text from a file. 
		EDIT will warn you if you attempt to give a command that might cause
		you to lose the text in the editing buffer if you have not already
		saved it in a file.
		
	
		2.2.  How to Start EDIT
		
		    To start EDIT, first make sure DOS is ready to accept your
		commands.  Generally, DOS indicates this by printing a message like
		the following on the screen:
		
				A>
		
		    Instead of A, you may see a different letter.  Then place your
		EDIT diskette in disk in drive A, and type
		
				edit [ filename ]
	
		where filename is the name of a file you want to create, or the name
		of a file you previously created that you want to edit.  The brackets
		around filename indicate that the file is optional.  You should not
		type the brackets.  
		
		    If you don't give a file, EDIT will be started with an empty
		editing buffer and the message "No file specified" is displayed in
		the lower left corner of the screen.
		
		    If you give a file that already exists, it is read into EDIT's
		buffer and the cursor is positioned at the beginning of the file. 
		EDIT displays the message "Editing: filename" in the lower left
		corner of the screen.
		
		    If the file does not yet exist, EDIT is started with an empty
		buffer, and EDIT displays the message "Creating: filename" in the
		lower left corner of the screen.
		
		    The following are several examples of how to start EDIT:
		
				edit
	
				edit memo.txt
	
				edit b:prog1.c
	
				edit \letters\george
		
		    The last example uses a file from a subdirectory.  Subdirectories
		are a feature that was added to version 2.0 of DOS.  If you are using
		version 2.0 or a later version of DOS, EDIT allows you to access
		files in subdirectories.  
		
	
		2.3.  Screen Organization
		
		    EDIT organizes the screen as follows:
		
			    Text area:		top 23 lines
			    Prompt line:	next to the bottom line
			    Status line:	bottom line
		
		    EDIT uses the top 23 lines of the screen to display the portion
		of the file that contains the cursor.  Lines that are longer than 80
		characters will only have their first 80 characters displayed,
		although all commands operate on long lines normally.
		
		    EDIT uses the 24th line on the screen (the next to the bottom
		line) for prompts regarding the use of function keys, for input of
		file names, search strings, and such, and for messages.
		
		    The bottom line on the screen displays the name of the file being
		edited and various status indicators.  On the far right side of the
		bottom line EDIT displays the line and column numbers of the current
		cursor position within the file.  To the left of the line and column
		numbers on the bottom line, EDIT displays the amount of free space
		currently available in its editing buffer as a percentage of the
		total space available.
		
		
		2.4.  Command Basics
		
		    Basic Rules.  The basic rules for using EDIT are quite simple. 
		The light-colored cursor control keys (the right arrow, PgUp, etc) on
		the right side of the keyboard move the cursor.  The function keys F1
		through F10 are command keys; they perform the action indicated by
		the prompt line on the screen.  The keys next to the cursor control
		keys (like the Del key) are also used as command keys.  Many of the
		cursor control keys and command keys have both a basic version, where
		you press the key all by itself, and a stronger version, where you
		press the command key while holding down Shift.  For example, End
		moves the cursor to the end of the current line, and Shift-End moves
		the cursor to the end of the current sentence.
		
		    Every command key in EDIT always does the same thing, no matter
		when you give that command.  This is one of the things that makes
		EDIT easy to learn, and easy to use.  
		
		    The text keys in the center of the keyboard are used to enter
		text at the current cursor location, or to provide input to a command
		prompt.  When the blinking cursor is in the text area (the top 23
		lines on the screen), each text key you type will be inserted at the
		current cursor location, and then the cursor will move one position
		to the right.  
		
	
		    Insert mode and Replace mode.  EDIT has two ways to handle what
		happens to the text to the right of the cursor when you type a text
		key while the cursor is in the middle of a line.  In insert mode, the
		character is inserted into the text at the cursor position and the
		characters to the right of the cursor are moved over one position to
		make room for the inserted character.  In replace mode, the character
		you type replaces the character that was at the cursor position. 
		Some other text editors and word processors call replace mode
		"overstrike mode".  
		
		    It is easy to think of insert mode as pushing characters out of
		the way to make room for each new character as you type it. 
		Likewise, you can think of replace mode as simply typing on top of
		the characters that are already there, with each new character
		erasing old character before typing on top of it.
		
		    EDIT indicates whether it is current in insert mode or replace
		mode by displaying "Insert" or "Replace" near the right side of the
		status line on the bottom of the screen.  You can switch from insert
		mode to replace mode (or vice versa) by pressing the Ins key, located
		just below the cursor control keys on the right side of the keyboard. 
		You can also set EDIT to insert or replace mode via the Set command,
		explained in section 3.3 and chapter 4.  
		
	
		    Word Processing mode.  EDIT may be used either as a word
		processor or as general-purpose text editor.  In word processing
		mode, EDIT will automatically reformat the text in a paragraph when
		you insert or delete characters, in order to always keep the right
		margin of your text neat.  EDIT reformats a paragraph in one of two
		ways.  When you insert text so that the current line extends past the
		right margin, EDIT automatically moves any words that extend past the
		margin down to the beginning of the next line.  When you delete text
		so that the current line is short enough, EDIT automatically moves
		the first word (or words) from the beginning of the next line of the
		paragraph up to the end of the current line.  Thus, you don't need to
		type Enter at the end of every line in a paragraph.  EDIT
		automatically adjusts the lines for you.  In fact, you should only
		type Enter at the end of a paragraph, to start a new paragraph.  
		
		    If EDIT is not in word processing mode, it will not reformat a
		paragraph (or line) when you insert or delete characters, even if you
		insert text that extends past the right margin (or even the right
		side of the screen).
		
		    Normally, you should use word processing mode whenever you are
		creating a file that consists of some form of paragraph.  It is best
		to leave word processing mode off if you are editing something like a
		program source file.
		
		    EDIT indicates that it is in word processing mode by displaying
		"WP-Yes" near the center of the status line on the bottom of the
		screen.  If EDIT is not in word processing mode, it will display
		"WP-No".  You can switch word processing mode on or off by holding
		down Alt and pressing the W key.  You can also turn word processing
		mode on or off via the Set command, explained in section 3.3 and
		chapter 4.
		
	
		    Other Command Keys.  For convenience, you may use Alt or Ctrl
		instead of Shift to get the modified version of the function keys on
		the left side of the keyboard.
		
		    A few additional commands are obtained by pressing Alt and one of
		the text keys in the center of the keyboard.  Generally the key
		pressed with Alt is the first letter of the desired command.  For
		example, Alt-C is the Center command, which causes EDIT to center the
		current line between the left and right margins.
		
	
		    Using the Numeric Pad.  Note that it is also possible to use the
		cursor control keys as a numeric pad, for ease of entering numbers,
		"+", and "-".  To do so, press the Num Lock key.  After pressing this
		key, the keys in the numeric pad area will act as a text keys, rather
		than cursor control keys.  To return to the keys to their use as
		cursor control keys, press Num Lock again.
		
	
		2.5.  Command Repetition
		
		    For some of EDIT's commands, you can specify a repetition count
		that indicates the number of times the command should be executed. 
		The repetition count is entered by pressing Esc, followed by a
		positive number, and then typing the command key.  For example, to
		move the cursor down ten lines, type the following:
		
			    Esc 10 Down
		
		    There is a default value for the repetition count that is used if
		you simply type Esc followed by the command.  The initial value for
		this default is 5.  The default value may be changed by typing Esc,
		then the new value, and then Enter.  The maximum repetition count is
		9999.  The count may not be negative.
		
		    The commands that accept a repetition count include the
		following:
		
	  			- basic cursor movement commands
	  	    	- find commands
	  	    	- replace commands
	  	    	- get command
	  	    	- macro execution
		
		    The deletion commands do not accept a repetition count.
		
	
		2.6.  Input to Command Prompts
		
		    A few of EDIT's commands require you to enter a text string - a
		file name, a word or phrase to search for, etc.  Other commands
		require you to type a single character to select an option from a
		menu.  In both of these cases, EDIT moves the blinking cursor out of
		the main text area, and down to the prompt line.  To help you
		remember where the cursor was before it was moved down to the prompt
		line, EDIT marks the old cursor position in reverse video.  
		
	
		    String Input to Command Prompts.  Some of EDIT's command require
		you to type a string of text, like the name of a file, or a word or
		phrase to find.  In these commands, EDIT will move the cursor down to
		the prompt line and print a message like the following:
		
				Output file: 
		
		    The cursor will appear at the end of this line.  You should type
		each character in the string, and then press Enter to execute the
		command.  If you make a mistake when you are typing the string, you
		may use the Backspace key to delete the last character of the string. 
		To delete the entire string and start over, press Shift-Backspace.  
		
		    Note that the Enter key is the large key on the right side of the
		text keys, just to the left of the cursor control keys.  The
		Backspace key is at the top right corner of the text keys, just to
		the left of the cursor control keys and above the Enter key.
		
		    To abort a command that requests string input, type Esc (Escape).  

		
		    Selecting an Option From a Menu.  Several of EDIT's command allow
		you to select an option from a menu.  EDIT indicates this by moving
		the cursor down to the the prompt line, and printing a message like
		the following:
		
				GoTo.  Select (Beginning, End, Line, Column):
	
		    The cursor will appear at the end of this line.  To select the
		desired option, press the key that is the first character of the
		option you want.  For example, to select the "Beginning" option,
		press the "B" key.  If you press any other key, EDIT will simply
		return to what it was doing before the current command.  
		
	
		    Implicitly Leaving a Command.  You do not need to explicitly
		leave a command when the cursor is in the prompt line.  If you press
		one of the cursor control or command keys, EDIT will automatically
		leave the current command perform the new one.  
		
		
		2.7.  Settings
		
		    Via EDIT's Set command you can specify various parameters that
		affect how EDIT handles the file you are editing, or how EDIT
		operates.  You can also configure EDIT to your printer.  For
		convenience, these parameters (or "settings") are divided into two
		groups, "file settings" (or settings that are specific to the file
		you are editing), and "editor settings".
		
		
		    File Settings.  File settings allow you to control margins, tab
		stops, page layout, headers and footers, page numbering, and such. 
		These settings are all "global".  In other words, they apply to the
		entire file.  For example, you can't start the file with one header,
		and then change to a different header half way through the file. 
		Thus, when you create a file, you should be careful to use settings
		that work for the entire file.  If you use word processing mode, it
		is best to set the tab stops and margins before you enter the text of
		the file.  
		
		    However, EDIT does allow you to control how some of the settings
		work at various points in the file.  For example, as part of a header
		or footer, you specify the number of the first page that it should be
		printed on.  You can override the margin setting for any one line by
		centering that line, or you can override the left margin for a
		paragraph by using the tab key to indent the first line of the
		paragraph to a tab stop.  The page setting not only specifies the
		number of lines per page, but the conditions under which EDIT should
		automatically skip to a new page.  This gives you some control over
		"widow" lines -- lines which start a paragraph or section, but are
		so close to the bottom of the page that it really is better to start
		the section or paragraph on the next page.
		
		
		    Editor Settings.  Editor settings settings allow you to configure
		various aspects of EDIT to your taste, or to your hardware
		environment.  For example, if you have a color monitor on your
		computer, you can specify the color EDIT should use for different
		regions of the screen.  You can also configure EDIT to work better
		with your printer, by specifying the control codes to initialize the
		printer, or make it print bold or underline.
		
		
		2.8.  Files
		
		    Text Files.  As explained above, EDIT stores all your text while
		you are working with it in an editing buffer.  If you want to save
		your work, you must use EDIT's Quit command to store it in a file. 
		Otherwise, your work will be lost after you leave the EDIT program,
		or when you turn off the computer.  
		
		    You can use up to eight characters for the name of your file. 
		You can also use an extension as part of the file name.  The
		extension consists of a dot, followed by up to three characters. 
		Normally, the extension is used to identify the type of file.  For
		example, you might use the extension ".MEM" to identify all files
		containing memos, or the extension ".TXT" for general text files.
		
		    EDIT allows you to use files in subdirectories if you use version
		2.0 or a later version of DOS.
		
		    With EDIT, you cannot create files bigger than will fit in its
		editing buffer.  The maximum size file is about 55,000 characters. 
		This is about 15 to 20 single spaced pages of text.  If you need to
		create documents larger than this, you can break the document into
		smaller sections, and use a single file for each section.
		
		
		    Setting Files.  EDIT does not save the file settings in the same
		file used to save the text of a document.  Instead, it allows you to
		save the settings in separate files called "setting files".  When
		EDIT retrieves a text file, it automatically looks for the setting
		file that goes with that file.  First it looks for a file with the
		same name as the file being retrieved, but with the extension changed
		to ".SET".  It will look for this setting file in the same directory
		as the text file.  If it cannot this setting file, EDIT looks for a
		setting file whose name is the extension of the text file, and the
		extension is ".SET".  
		
		    For example, if you retrieve a text file named
		
				proposal.txt
		
		EDIT will first look for a setting file with the name
		
				proposal.set
		
		EDIT will look for this file in the same directory (or on the same
		disk) as the directory containing the text file.  If EDIT cannot find
		this setting file, it will look for a setting file with the name
		
				txt.set
		
		EDIT will first look for this file in the current directory, and if
		it is not found there, it will look through each of the directories
		specified in the DOS PATH command.  If this setting file is not
		found, EDIT will use its current settings for the text file.  (For an
		explanation of directories, and the PATH command, refer to the DOS
		Reference Manual.)
		
		
		    This technique for handling setting files has several advantages. 
		Since setting files are stored as normal text, it is possible for you
		to edit a setting file directly, rather than use the Set command to
		change settings.  This is particularly useful for changing long
		settings, like the header or footer.
		
		    Another advantage of this technique is that it allows you to
		create settings files not only for a specific new file, but for
		groups of files, all with the same extension.  This way you don't
		always have to use the Set command to specify the settings for each
		new file you create.  EDIT will automatically retrieve the right
		settings for the new file, using the extension to determine which
		settings you want.
		
		    This is useful not only when you are using EDIT as a word
		processor, but also when you use EDIT as a general purpose text
		editor.  For example, if you write programs in both C and assembly
		language, you may want to create general setting files with two
		different tab sizes -- tabs of 4 for C, and tabs of 8 for assembly
		language.  These settings files might be named:
		
				C.SET
		    	ASM.SET
		
		
		    When EDIT first starts executing, it looks for a setting file
		named
		
				EDIT.SET
		
		and retreives the settings from this file.  If you want to change any
		of EDIT's default settings, you should put these changes in this
		file.  This is a convenient place to put settings changes that affect
		the way EDIT works, like the colors EDIT uses on your screen, or
		whether EDIT starts in Replace mode or Insert mode.  This is also
		where you should put setting commands that configure EDIT to your
		particular printer.  
	
		    Several standard printer configuration setting files are supplied
		on the EDIT distribution diskette.  These include:
		
				C-ITOH.SET	  -	for printers compatible to the C-Itoh 8510,
								like the NEC prowriter
				EPSON.SET	  -	for printers compatible with the EPSON MX-80
								or IBM Graphics printer
				LASERJET.SET  -	for the HP LASERJET printer
				OKIDATA.SET	  -	for printers compatible with the OKIDATA-92
								printer
				
		    If your printer is compatible with one of these printers, you can
		copy the appropriate file onto into the same directory or disk where
		you have installed EDIT, and name it 
		
				EDIT.SET
		
		    The following command illustrates how to do this when EDIT is
		installed on a hard disk.  
		
				copy a:epson.set c:edit.set
		
```
{% endraw %}

## EDITDOC3.TXT

{% raw %}
```
		3.  COMMANDS
		
		    The following sections describe each of EDIT's commands in
		detail.  These sections are organized as tables of related commands. 
		The command key is given at the left of the table.  On the right is
		the name of the command, followed by a description of the action
		performed by that command.  Some commands require you to press a key
		to select from a set of options or subcommands.  In general, these
		subcommands are indented under the primary command, and the
		description of each subcommand is preceeded by the letter you must
		type for that subcommand.  
		
		
		3.1.  Basic Text Insertion and Deletion
		
			Command Key		Command Description

		    Ins 			Toggle Insert/Replace mode.  If the current mode
							is Insert mode, this command switches EDIT to
							Replace mode, and vice versa.

			
			text character	Insert character (Insert mode).  All characters
							to the right of the cursor are moved to the
							right, and the character is inserted at the
							cursor position.

							Replace character (Replace mode).  The character
							typed replaces the character at the current
							cursor location.

			Shift-Ins		Insert special character.  The following single
							keystroke is inserted into the buffer, even if it
							would normally be interpreted as a command.  This
							is useful for inserting characters like Esc into
							a file, which many printers require in order to
							specify printer options, like line spacing.

			Enter			Insert line.  A carriage return is inserted at
							the cursor position, and the current line is
							broken into two pieces.  The rest of the line to
							the right of the cursor is moved to the next line
							down, and the rest of the lines below the cursor
							are moved one position down to make room for this
							line.

							The new line is indented according to the
							following rule.  In Word-Processing mode, the
							line is indented at the left margin setting plus
							the indentation specified (which may be a
							positive or negative number).  The margins may be
							set via the Set command, explained below.

							Otherwise, the new line is indented at the same
							level as the preceeding line.  This is
							particularly useful for editing text that has a
							hierarchical structure, like programs or
							outlines.

							Note that the carriage return inserted by Enter
							indicates the end of a paragraph.  There are a
							variety of commands that operate on paragraphs,
							including both cursor movements, and re-adjusting
							lines so that they fit nicely between the left
							and right margins.

							Also note that the Enter key is sometimes called
							"Return".
		
			Tab				Insert Tab.  A tab character is inserted, the
							cursor is moved right to the next tab stop, and a
							temporary left margin is set at that tab stop. 
							The temporary left margin is used to re-adjust
							the lines in a paragraph in Word-Processing mode
							when they are modified so that they extend beyond
							the right margin or do not reach to the right
							margin.  Word-Processing mode is explained in
							greater detail below, under the "Set Word
							processing mode" command.

							Tabs may be set via the Set command, explained
							below.  The default tab stops are in columns 0,
							4, 8, ...  Note that the Tab key is near the left
							side of the keyboard, just left of the "Q" key.
        
			Shift-Tab		Insert spaces to tab stop.  Insert spaces to next
							tab stop.  Note that this allows tabbing without
							resetting the temporary left margin.
		
			Ctrl-L			Insert form feed (new page).  A form feed
							character is inserted.  This character is
							displayed as a small circle with a plus sign
							underneath.  When this character is printed, it
							causes the printer to skip to the next page
							before printing any subsequent pages.
		
			Del				Delete right.  Delete the character at the
							cursor.  When the cursor is at the right end of a
							line, this character is the carriage return that
							separates the current line from the following
							line.
        
			Backspace		Delete left.  Delete the character to the left of
							the cursor.  When the cursor is in column 0, the
							character left of the cursor is the carriage
							return that separates the current line from the
							previous line.
		
			Shift-Del		Delete line.  Delete the entire line containing
							the cursor, leaving the cursor at the same
							position in the following line.
		
			pad-minus		Delete word left.  Delete the word to the left of
							the cursor, including any intervening spaces,
							tabs, and line breaks.  Note that a word is
							defined as a contigious sequence of letters and
							digits, or any other single non-blank character.
		
							Note that pad-minus refers to the darker colored
							"minus" ("-") key in the numeric pad area on the
							right side of the keyboard, just right of the key
							labeled PgUp.  It should not be confused with the
							normal minus key, which is in the lighter colored
							central region of the keyboard.  Similarly,
							pad-plus refers to the large, darker colored,
							large "plus" ("+") key in the numeric pad area.
		
			pad-plus		Delete word right.  Delete the word at the
							cursor, including any trailing spaces, tabs, and
							line breaks.
		
			Shift-pad-minus	Delete to beginning of line.  Delete all the
							characters between the cursor position and the
							beginning of the current line.
		
			Shift-pad-plus	Delete to end of line.  Delete all the characters
							between the cursor position and the end of the
							current line.
		

		3.2.  Basic Cursor Movements
		
			Command Key		Command Description

			Left			Move left.  Move the cursor one character to the
							left.  When the cursor is at the beginning of a
							line, it moves to the end of the previous line.
		
							Note that the Left key is located at the right
							side of the keyboard in the numeric pad and
							cursor-control key area (as are the keys Right,
							Up, and Down).  If a number is inserted when you
							press one of the cursor control keys, press Num
							Lock once, to switch to the cursor control
							meaning of these keys.
		
			Right			Move right.  Move the cursor one character to the
							right.
		
			Up				Move up.  Move the cursor one line up, scrolling
							the screen as needed to keep the cursor on the
							screen.
	
			Down			Move down.  Move the cursor one line down,
							scrolling the screen as needed to keep the cursor
							on the screen.
		
			Home			Move to beginning of line.  Move the cursor to
							the column 0 in the current line.
		
			End				Move to end of line.  Move the cursor to the
							right end of the current line (just past the last
							character in the line).
		
			PgUp			Move page up.  Move the cursor 23 lines up,
							redisplaying the screen with the cursor in the
							same position on the screen as it was before
							giving this command.
		
			PgDn			Move page down.  Move the cursor 23 lines down,
							redisplaying the screen with the cursor in the
							same position on the screen as it was before
							giving this command.
		
			Shift-Left		Move word left.  Move the cursor one "word" to
							the left.  Note that a word is defined as a
							contigious sequence of letters and digits, or any
							other single non-blank character.
		
			Shift-Right		Move word right.  Move the cursor one "word" to
							the right.
		
			Shift-Up		Move structure up.  Move the cursor back one
							"structure".  In general, this moves the cursor
							to the beginning of the previous line that is
							indented at the same level as the current line or
							the first line indented less than the current
							line.  If the cursor is to the left of the first
							non-blank character in the line, then this
							command moves the cursor to the previous line
							that is indented at the same level as the current
							cursor position.
		
							Note that this command and the Move structure
							down command are useful for moving around
							structured text like source code written in a
							programming language like Pascal or "C", provided
							that you are careful to use indentation to
							indicate the levels of structure in your program.
		
							This command may also be used to move to first
							line of the current paragraph, or the previous
							paragraph that is indented at the same level as
							the current paragraph.
		
			Shift-Down		Move structure down.  Move the cursor forward one
							"structure".  The meaning of "structure" is
							defined above, under the Shift-Up command.
		
			Shift-Home		Move sentence left.  Move the cursor one
							"sentence" to the left.  The beginning a sentence
							is defined to be the first non-blank character
							following a period (".").
		
			Shift-End		Move sentence right.  Move the cursor one
							"sentence" to the right.
		
			Shift-PgUp		Move paragraph up.  Move the cursor one
							"paragraph" up.  The beginning of a paragraph is
							defined as the first non-blank character
							following a carriage return inserted by typing
							the Enter key.
		
			Shift-PgDn		Move paragraph down.  Move the cursor one
							"paragraph" down.
		

		3.3.  Setting Display, Editing, and Formatting Options
		
			Command Key		Command Description

			F3				Set.  The Set command allows you to change
							various settings that affect the operation of
							EDIT, such as tabs, margins, page size, and such. 
							There are two groups of settings, settings that
							effect the file being edited (like changing tab
							stops), and settings that effect the editing
							environment (like changing the color of the
							screen).
		                    
							At the beginning of the Set command, EDIT
							displays two tables that show the current values
							of each setting in these two groups.  At the left
							side of the tables, EDIT displays a letter or
							number that is used to select the corresponding
							setting.  Generally, this is the first letter of
							the setting name (for example, "t" or "T" for
							setting tabs).  
		
							To select a setting, press the indicated letter
							or number for that setting.  EDIT then prompts
							you to enter new values for the selected item. 
							Chapter 4, SETTINGS, describes each of the
							settings in detail.  Section 4.1 explains each
							of the file settings and section 4.2 explains the
							editor settings.
							
			Shift-F3		Get Settings from file.  This command allows you
							to retrieve setting values from a file.  Note
							that setting values may be saved in a file via
							the Save Settings option of the Quit command,
							explained in section 3.4.
	
							In response to the prompt for this command, enter
							the name of a file.  EDIT will read the specified
							file and change its settings according to the
							commands in the file.  
		
							Each setting command in the file should be a
							single line long.  The first character of the
							line should be the first character of the setting
							to change (for example, 'h' to change the
							header).  The remaining characters in the line
							specify the value for the setting, using the same
							format as if the setting value were changed
							interactively with the Set command.  
		
							The following is an example of a setting file
							that contains commands that change the margins
							and header:
		
								m 10, 5, 75
								h 2,,,Page #
		
				
		3.4.  File Selection and/or Exiting EDIT
		
			Command Key		Command Description

			F1				Quit.  The Quit command allows you to stop
							editing the current file, save it, initialize
							editing of a different file, and/or exit EDIT and
							return to DOS.  In response to the prompt for
							this command, select the desired subcommand by
							pressing a single key, as follows:
		
							E.	Quit-Exit.  This subcommand writes the
								current contents of the editing buffer to the
								file being edited and then exits EDIT to DOS. 
								This is the normal way to exit EDIT, saving
								the work done while editing a file.
								
							U.	Quit-Update.  This subcommand simply writes
								out the buffer contents to the file, but does
								not exit to DOS.  This subcommand, together
								with the Initialize subcommand, is used when
								you want to edit several files, one after
								another, without leaving EDIT.  
								
							W.	Quit-Write.  This subcommand prompts you to
								enter the name of a file.  The contents of
								the editing buffer will be saved in the file. 
								This subcommand is used to save your work in
								a file other that the file currently being
								edited. 
			
							A.	Quit-Abort.  This subcommand directs EDIT to
								simply exit to DOS.
								
							S.	Quit-Save-Settings.  This subcommand allows
								you to save in a file the current values of
								the settings that affect editing and
								printing.  The settings are saved in a form
								so that they can be read by the "Get Settings
								from file" command described above.  
		
								This subcommand prompts you to enter the name
								of a file in which the settings are to be
								saved.  The default name for this file is the
								same name as the file currently being edited,
								except that the extension is changed to
								"SET".  
			
								After you have entered the file name, EDIT
								prompts prompts to select which group of
								settings should be saved in the file.  In
								response to this prompt, enter a single key,
								as follows:
		
								F.	The settings that affect the file being
									edited are saved in the file.
		
								E.	The settings that only affect the editing
									environment are saved in the file.
		
								After you have selected one group of settings
								to be saved, EDIT will continue to prompt you
								to select the other groups that have not yet
								been saved.  If you type any other key, EDIT
								will leave the Save Settings command.
		
								Chapter 4 describes settings in detail, and
								specifies which settings belong to each of
								these two groups of settings. 
		
								Note that EDIT uses certain naming
								conventions for the files in which settings
								are saved.  These conventions determine when
								EDIT will automatically retrieve the settings
								from a file.  These conventions are described
								after the Quit-Initialize subcommand.
	
							I.	Quit-Initialize.  This subcommand prompts you
								to type the name of a file.  This text in the
								file is then loaded into the editing buffer
								(replacing the previous buffer contents) and
								the cursor is placed at the beginning of the
								file.  
		
								After EDIT reads the file, it will also look
								for a "setting file" that gives tab settings,
								margins, page length specifications, headers,
								and such.  The Quit-Save-Settings subcommand,
								above, describes the format of "setting
								files", and how to create them. 
		
		
		3.4.1.  Retrieving Setting Files
		
		    As explained above, EDIT will automatically retrieve a setting
		file whenever it initializes its buffer with a new file.  This
		happens not only as with the Quit-Initialize command, but also
		whenever EDIT is first started, and a file is specified.
		
		    The following example illustrates the rules EDIT follows when it
		retrieves a Setting file.  Suppose you specify the following file
		with the Quit-Initialize command:
		
			    b:memo.txt
		
		After reading "memo.txt" from drive "b" EDIT will look to see if it
		can find the file
		
		    	b:memo.set
		
		If this file exists, EDIT will read the settings from this file. 
		Otherwise, it will look for the file
		
		    	txt.set
		
		If this file exists, EDIT will read the settings from this file.  
		
		    Thus, the settings that apply to a particular file should be
		saved in a file with the same name as that file, but with the
		extension changed to ".set".  This setting file should reside on the
		same drive as the file to which it applies.
		
		    However, you may use a single, "generic" setting file for all the
		files having the same extension.  This "generic" setting file should
		reside on the current default drive.  For example, you could create
		the setting files
		
		    	rep.set
		    	mem.set
		
		    The first file might contain settings specifying margins, page
		length, and such for reports, and the second file might contain
		settings for memos.  Then you would name all files that contain
		reports with the extension 
		
		    	.rep
		
		and all files containing memos would be named with the extension
		
		    	.mem
		
		The following would be example names of files containing reports:
		
		    	a:yearend.rep
		    	january.rep
		
		Sample names of files containing memos might be:
		
		    	bill.mem
		    	b:staff.mem
		
		
		3.4.2.  Protection Against Losing Your Work
								
		    If you select the Initialize or Abort option and the contents of
		the buffer have been modified without saving them or the current file
		settings have been modified without saving them, EDIT will display
		one or both of the following two messages:
	
		    	File settings modified.  Okay to lose changes?  Select (Yes
				or No):
							
		    	Text is modified.  Okay to lose changes?  Select (Yes or No):
							
		    If you select yes (by typing "Y" or "y"), then the Initialize or
		Abort operation will proceed.  If you type anything else, the
		operation will not proceed, and EDIT will go back to the Quit
		command.  This gives you another chance to save the work you have
		done before losing it.
		
			
		3.5.  Printing and Miscelleneous Word Processing
		
			Command Key		Command Description

			Shift-PrtSc		Print.  The Print command is used to produce a
							printed version of the file currently being
							edited (the contents of the editing buffer).  The
							current settings (explained in chapter 4)
							determine how EDIT will break the printed file
							into pages, whether it will right justify lines,
							and such.  
		
							The print command allows you to specify that the
							printed output should go to a file or device
							other than the standard printer device (PRN:). 
							You may want to print to a file for one of two
							reasons.  First, the "printed" file will be
							divided into pages, with headers and footers, and
							possibly justified.  Thus, you can look at the
							file to see if it is formatted exactly the way
							you want before actually printing it on the
							printer.  Also, you can use DOS's PRINT command
							to print the file as a background task, and
							continue to use EDIT in the foreground (DOS 2.0
							or later only).
		
							The Print command also allows you to specify the
							starting page and maximum last page to print. 
							The default starting page is generally page 1. 
							The default last page is page 9999 (or the last
							page of the file, whichever comes first).  This
							is useful when one or two minor changes have been
							made to a file after it has already been printed,
							since it allows you to print only those pages
							that have changed.
		
							EDIT prompts you for each of these options by
							displaying the current default for the option. 
							To use the default, just press Enter.  To select
							a value other than the default, type the new
							value and then press Enter.  To cancel the Print
							command, type Esc.  After all three options have
							been selected, EDIT will display the message
		
								Printing to: file-or-device  
		
							and begin printing.  As each page is printed,
							EDIT will display the message

								Page: #

							to the right of the file-or-device name.

							You may abort the Print command after it has
							started by typing Ctrl-Break.


			Alt-W			Toggle Word-processing mode.  This command causes
							EDIT to change the Word-Processing mode without
							having to use the Set command.  If the
							Word-Processing mode is currently "Yes", this
							command will switch the Word-Processing mode to
							"No", and vice versa.  The effect of the
							Word-Processing mode is explained above, in
							section 4.1, under the Set command, and in
							section 3.1, under the Enter command.
		
							The current Word-processing mode setting is
							indicated on the staus line.  
		
			Alt-P			Paragraph.  Append all the lines up to the next
							blank line to the current paragraph, then
							reformat the paragraph using the current left,
							indent, and right margin values.  You can use
							this command to convert standard ASCII files with
							a CR and LF at the end of every line into EDIT's
							paragraph format.
		
			Alt-C			Center.  Reformat the current line so that it is
							centered between the current left and right
							margins.
		
			Alt-R			Right-justify line.  Expand or shrink the line
							containing the cursor so that it is flush with
							the right margin.  The expansion or contraction
							is made by expanding only the character left of
							the cursor. All other characters in the line will
							remain unchanged.   Note that for most uses of
							this command (a table of contents, for example)
							the character expanded or contracted will be
							either a space or a period (".").
		
			Alt-B			Toggle boldface on/off.  This command allows you
							to indicate whether text should be boldface or
							not.  Initially all text entered is "normal
							text", neither boldface nor underlined.  When the
							Alt-B command is given, all text entered will be
							boldface until a subsequent Alt-B command is
							given.  When you turn the boldface option on,
							EDIT actually inserts two special characters into
							the text, a Ctrl-B, which turns boldface on, and
							a Ctrl-A, which turns boldface off.  You may also
							insert or delete either of these two characters
							directly to change change whether existing text
							is to be boldface or not.  Boldface is also
							turned off automatically at the end of a
							paragraph.

							Whenever the cursor is a region of boldface text,
							EDIT indicates this by displaying the letter "B"
							on the status line, just left of the
							Word-Processing mode indicator.

			Alt-U			Toggle underline on/off.  This command functions
							similar to the the Alt-B command, except that it
							turns underlining on or off.  The special
							characters EDIT stores in the text for
							underlining are:  Ctrl-D (for underline) to turn
							underlining on, and Ctrl-C to turn underlining
							off.  Like boldface, underlining is automatically
							turned off at the end of a paragraph.  When the
							cursor is in a region of underlined text, EDIT
							indicates this by displaying the letter "U" on
							the status line, adjacent to where the boldface
							status is displayed.


		3.5.1.  Background Printing
		
		    Note that under version 2.0 (or later) of DOS, it possible to use
		the System command to print files in the background while continuing
		to edit other files using EDIT.  The following is the recommended way
		to this:

			-	Before starting EDIT, enter the DOS PRINT command.  This
				causes the background print program to be loaded into memory
				so that it is accessible to EDIT.  A convenient way to this
				is to put the PRINT command in the AUTOEXEC.BAT so that it
				will be automatically executed when the computer is turned
				on.  The following line in an AUTOEXEC.BAT file will
				accomplish this:

					print

			-	Use EDIT's Print command to print to a file.  For example,
				when editing the file memo.txt, you may want to print to a
				file named memo.prn.

			-	After EDIT has finished creating the print file, use EDIT's
				System command to start printing the print file in the
				background.  The following command would print the file
				created in the last example:

					DOS Command: print memo.prn

			-	It is then possible to continue working with EDIT while the
				file prints in the background.

		    Note that EDIT's System command is explained in section 3.8,
		below.

		
		3.6.  Block Commands:  Save, Delete, Get, and Move Text
		
			Command Key		Command Description

			F7				Mark block.  Mark the character at the cursor
							position as one end of a block of text.  This
							"marked" character is used to indicate one end of
							a block of text for the Delete and Save commands
							described below.  The block is defined to always
							consist of the characters between the last
							character marked and the current cursor position. 
							For convenience in describing the commands below,
							this region of text is refered to as "the marked
							text".
		
			F9				Delete and save block.  If less than 2000
							characters are in the marked text, delete all
							those characters and save them in a special
							buffer (the block buffer).  If there are more
							than 2000 characters print a message indicating
							that there is not room to save the deleted
							characters and do not delete them.
		
			Shift-F9		Delete block without saving.  Delete all
							characters in the marked text (regardless of how
							many there are).  The characters will not be
							saved.
		
			F10				Save block.  If there are less than 2000
							characters in the marked text, copy them into the
							"block buffer".  Otherwise, print a message
							indicating that there is not room to save the
							characters.
		
			Shift-F10		Save block in file.  Enter the name of a file
							into which the marked text is to be saved.  A
							copy of the marked text is then saved in the
							file.
		
			F8				Get block.  Insert the current contents of the
							block buffer at the cursor position, leaving the
							cursor at the beginning of the inserted text.
		
			Shift-F8		Get block from file.  Enter the name of a file. 
							The contents of that file are inserted into the
							buffer at the current cursor position, leaving
							the cursor at the beginning of the inserted text.
		
							Note that a "block move" may be accomplished for
							small blocks by the Delete and Save command, then
							moving the cursor to the new location and using
							the Get command.  For blocks larger than 2000
							characters, a block move is done by Save in File,
							Delete without saving, moving the cursor to the
							new position, and then Get from file.
		

		3.7.  GoTo, Find, and Replace
		
			Command Key		Command Description

			Shift-num-pad-5	GoTo.  The GoTo command allows you to move the
							cursor directly to a position in the file.  EDIT
							prompts you to select from one of the following
							options:
		
							B.	Goto beginning of file.  The cursor will be
								moved to the beginning of the file.
								
							E.	Goto end of file.  The cursor will be moved
								to the end of the file.
								
							L.	Goto line.  Enter an positive integer value. 
								The cursor will be moved to that line in the
								file.  The column position of the cursor is
								not changed.  Specifying a line beyond the
								end of the file will move the cursor to the
								end of the file.
								
							C.	Goto column.  Enter a positive integer value. 
								The cursor will be moved to that column in
								the current line.  Specifying a column beyond
								the end of the line will move the cursor to
								the end of the line.
								
							Note that the GoTo command is located in the
							center of the cursor control keys (right between
							the left and right keys).  Thus, althougth this
							key is not labeled, it should be easy to
							remember, since it allows you to "center in" on a
							particular position in the file.
		
			F6				Find.  Enter a target string.  Type Enter at the
							end of the string to enter it and execute the
							Find command.  EDIT will search for the first
							instance of the target string following the
							cursor and move the cursor to the first character
							after that string.
		
							During string entry, typing Esc will abort the
							Find command.
		
			Shift-F6		Reverse Find.  This command is exactly the same
							as the "find" command, execpt that EDIT will
							search backwards for the first instance of the
							target string preceeding the cursor.
		
			F5				Replace.  Enter a target string, then a
							replacement string.  EDIT will execute the
							Replace command as soon as the  second string is
							entered, by searching for the first instance of
							the target string following the cursor and
							replacing it with the replacement string.
		
			Shift-F5		Conditional Replace.  Enter a target string, then
							a replacement string, as in the Replace command.
							After the second string has been entered, EDIT
							will search for the first instance of the target
							string following the cursor, and move the cursor
							to the first character after that string.  EDIT
							will then prompt you to select from the following
							set of options:
		
							Y.	Yes.  The target string should be replaced by
								the replacement string.
								
							N.	No.  The target string should not be replaced
								by the replacement string.
								
							S.	Stop.  The target string should be replaced
								by the replacement string.  Then EDIT will
								exit the conditional replacement command.
								
							A.	Abort.  The target string is not replaced and
								EDIT will exit the conditional replacement
								command.
								
							Note that the Stop and Abort options are designed
							for use with a repeat count applied to the
							conditional replacement command.
		
		
		3.8.  Help, Macros, and DOS Commands
		
			Command Key		Command Description

			F2				Help.  This command allows you to view a file of
							"help" information.  This information lists each
							EDIT command, together with a brief description
							of what it does.  Subcommands and options are
							listed indented under each command.  The
							information also describes briefly any values
							that the commands may require you to enter, and
							what those values mean.  
		
							The information in the Help file is displayed one
							page at a time.  To view the next page of the
							help list, press the space bar.  To abort the
							Help command and return to EDIT's normal
							operation, type any other key.
		
							As the first screen of the Help text, EDIT
							displays a message regarding EDIT's status as
							free software.  The actual Help text follows this
							first screen.

							Note that EDIT obtains the information it
							displays in the Help command from a file called
							"EDIT.HLP".  For the Help command to operate
							properly, this file must be on the current
							"default" disk while EDIT is running.  For an
							explanation of default disks, refer to the
							documentation provided by IBM.
		
			Shift-F4		Macro define.  Start or end a macro definition. 
							When a macro definition is started, "Macro" is
							displayed near the right side of the bottom line
							on the screen.  All subsequent commands up to the
							next Macro Shift-F4 command are saved in a macro
							buffer in addition to being executed.
		
							Typing Shift-F4 again ends the macro definition,
							and erases "Macro" from the bottom line of the
							screen. The sequence of commands may then be
							re-executed by typing F4.
		
			F4				Macro Execute.  Execute the macro most recently
							defined via the Macro command.  Prior to defining
							a macro, the current macro is null. 

			Alt-V			View.  Redisplay the contents of the screen with
							the line containing the cursor centered on the
							screen, and the current version number of EDIT
							displayed on the message line.  If the cursor is
							in the first 12 lines of the file or it is
							already centered on the screen, then the contents
							of the screen will not change.  
		
			Shift-F1		DOS Command.  This command allows you to execute
							any DOS command from EDIT.  EDIT prompts you to
							enter a command.  Enter the command exactly as it
							would be entered in response to the DOS prompt. 
							After you enter the command, EDIT clears the
							screen and executes the DOS command.  When the
							command has completed, EDIT prompts you to press
							any key to return to EDIT.  Then EDIT restores
							the screen as it was before executing the DOS
							command and you can continue editing.


							If you simply type ENTER in response to EDIT's
							prompt to enter a DOS command, EDIT will start a
							nested copy of the DOS command interpreter.  This
							will allow you to execute multiple DOS commands
							or other programs before returning to EDIT.  To
							return to EDIT from the nested command
							interpreter, enter the EXIT command.
	
							The following examples illustrate the use of
							EDIT's System command:

								DOS Command: dir *.txt

								DOS Command: print chap1.prn

								DOS Command: cd \memos

								DOS Command: rename memo1.txt memo1.bak

	 
								DOS Command:
								>dir
								>rename memo.txt memo.bak
								>copy newmemo.txt memo.txt
								>exit
	
							The last example shows how multiple DOS commands
							may be entered, followed by typing EXIT to return
							to EDIT.
	
							Note that EDIT only supports the System command
							with DOS version 2.0 or later.  In order for the
							System command to work, there should be at least
							128K bytes of free memory before running EDIT. 
							Some additional memory may be required to execute
							non-resident DOS commands from EDIT.  
			
							Caution:  Certain DOS commands stay resident in
							memory when they are first executed after DOS has
							been started.  The DOS PRINT and GRAPHICS
							commands are in this category.  It is not good to
							execute such commands for the first time from
							EDIT.  This is because they reserve not only the
							memory they use themselves, but also the memory
							of any other program that is currently executing
							(like EDIT), even if that program normally
							releases the memory it uses when it exits. 
							Before using such commands from EDIT, they should
							be executed before EDIT is started.  Putting them
							in the AUTOEXEC.BAT file is one way to do this.

							For a further explanation of DOS commands,
							consult the DOS reference manual.

		
		3.9.  Windows and Dual File Editing
		
			Command Key		Command Description

			pad-asterisk	Switch Window.  This command will switch the
							active cursor between the upper and lower windows
							on the screen.  If you give this command when an
							upper window has not been created, EDIT will
							automatically create one, using the line the
							cursor is in as the last line of the upper window
							(provided that this gives each window at least
							five lines).
		
							Note that pad-asterisk refers to the darker
							colored "asterisk" ("*") key in the numeric pad
							area on the right side of the keyboard, near the
							cursor control keys.  It should not be confused
							with the normal asterisk key, which is in the
							lighter colored central region of the keyboard. 
		
							On older PC keyboards, this key is labeled
							"PrtSc" (Print Screen).  Since this is about the
							only key that refers to the screen, it should be
							easy to remember that this key is used for
							switching between windows on the screen.
		
			Alt-O			Other Buffer.  This command allows you to create
							a second editing buffer, and to switch from one
							buffer to the other.  When you first give this
							command, the screen is cleared, but what was on
							the screen before is not lost; you can bring it
							back by giving another Other-Buffer command. 
							Each buffer simply has its own screen, and EDIT
							displays the screen for the buffer that is
							currently active.  
		
							The second buffer acts just like the first; you
							can create and edit a second file, or retrieve a
							second file with the Quit-Initialize command. 
							Although EDIT maintains two separate file
							buffers, it has only one block buffer.  Thus,
							text that you save in the block buffer when you
							are editing in one file buffer will be available
							to get from the block buffer after you press
							Alt-O and switch to the other buffer.   Thus, you
							can easily use the block buffer to copy or move
							text from one file to the other.  
		
							It is often convenient to use this command in
							conjunction with the window command explained
							above.  If you have created a window on the
							screen when you give the Other-Buffer command,
							EDIT will use initially only the current window
							for the new file buffer, and leave the other file
							in the other window.  With the windows like this,
							the Switch-Window command will switch not only
							between windows, but also between files, since
							each window has a different file.
		
							When you have a second editing buffer active, the
							Quit-Exit and Quit-Abort commands do not exit
							from EDIT, but only from the second buffer.  You
							must give a second Quit-Edit or Quit-Abort
							command to exit from EDIT.
		
```
{% endraw %}

## EDITDOC4.TXT

{% raw %}
```
		4.  SETTINGS
		
		    As explained in chapter 3, EDIT's SET command (the F3 function
		key) allows you to set various options that affect how EDIT processes
		the file you are editing, or that affect the editing environment (the
		colors on the screen, how EDIT tells the printer to print bold or
		underlined characters, and so forth).  This chapter explains each of
		these settings in detail.  It has one section describing each of the
		settings that affect the file being edited, and one for settings that
		affect the editing environment.  These sections are organized as
		tables.  The letter used to select a setting is given at the left. 
		On the right is the name of the setting, followed by a description of
		that setting.  
		
		
		4.1.  Settings That Affect the File Being Edited
		
			Key		Setting Description
		
			W.		Word processing mode.  EDIT's word processing mode
					determines what happens when a line is modified so that
					it does not fit neatly between the left and right
					margins.  The word processing mode also determines how a
					new line will be indented when you type Enter to insert a
					carriage return into the text, as explained in section
					3.1.  
		
					In response to the prompt for this setting, you should
					select an option by pressing a single character, as
					follows:
		                    
					N.	No.  In this mode, EDIT completely ignores the
						margins, and allows lines to extend arbitrarily long. 
						However, this mode is useful for editing things like
						the source text for programs.  
		                    
					Y.	Yes.  Whenever a line is edited (either extending or
						decreasing its length), that line and any following
						lines in the current paragraph are adjusted so that
						each line is as long as possible without extending
						past the right margin.
		
			T.		Tab stops.  EDIT will prompt you to enter a list of tab
					stops.  Tab stops will automatically continue past the
					last one entered in the list, every n'th column, where
					"n" is the number of columns between the last two stops
					specified.  For example, the following list of specified
					tab stops
	
						10, 14, 24, 28
	
					will effectively set tab stops in columns
	
						10, 14, 24, 28, 32, 36, ...
	
					Giving a single tab stop value of "n" will simply set tab
					stops every "n" columns, starting with column "n".  The
					maximum number of tab stops that may be set is 16.
	
					It is recommended that you set a tab stop at the left
					margin column when EDIT is being used in word processing
					mode.  For example, if your left margin is 10, you ought
					to have a tab stop set in column 10.
	
			M.		Margins.  The margin setting consists of three values,
					the left margin, indent value, and right margin.  You may
					enter enter new values for the margins by typing the
					values separated by commas, followed by return.  The
					indent value specifies the indentation level for the
					first line of a paragraph.  It may be negative, to make
					the first line of the paragraph start to the left of the
					left margin.  The margin values are given in columns. 
					For example, a left margin of 10 means that the left
					margin is at the 10th character position on a line.
								
					You may omit any of the three values of the margin
					setting to use the current value for that setting, while
					changing the other values.  For example, if the current
					margin settings are
							
						8, 0, 77
							
					(left margin = 8, indentation = 0, right margin = 77),
					then entering
							
						12
							
					will change only the left margin to 12, leaving the other
					values unchanged.  Entering
							
						,4
							
					will leave the left and right margins unchanged but
					change the indentation to 4.
			
			P.		Page options.  The page options consist of four values -
					the number of lines per page, and three values that
					control when EDIT will automatically skip to a new page
					near the bottom of a page, based on encountering the end
					of a paragraph, 1 blank line, or two blank lines.  (These
					latter three values allow some control over "widows",
					single lines from a paragraph or section occuring at the
					bottom of a page.)  Enter new values for the page options
					by typing the values separated by commas, followed by
					Enter, as in the Margin setting.
								
					The meaning of the values in the pagination control is as
					follows:
				
					-	lines:  the maximum number of lines that will be
						printed on a page.
								
					-	new page (para):  the distance from the end of a page
						that will cause a new page to be automatically
						generated if the end of a paragraph is encountered.
		
					-	new page (1 line):  the distance from the end of a
						page that will cause a new page to be automatically
						generated if a single blank line is encountered.
				
					-	new page (2 lines):  the distance from the end of a
						page that will cause a new page to be automatically
						generated if two blank lines are encountered.
								
			H.		Header.  This option allows you to specify a line of text
					to be printed at the top each printed page.  You can
					specify the first page on which the header is to be
					printed.  It also allows you to optionally specify the
					position that the page number should be printed within
					the header text.  In response to the Header prompt, you
					should enter a line containing four sections separated by
					commas.  These four sections are:
		                    
					-	Start page.  This value should be a number specifying
						the first page on which the header is to be printed.
		                    
					-	Left text.  This text will be printed starting in the
						left margin.
		                    
					-	Center text.  This text will be printed centered
						between the left and right margins.
		                    
					-	Right text.  This text will be printed justified to
						the right margin.
		                    
					The position in the header where the page number should
					be printed is indicated by the character "#" in the
					header.  For example, the header
							
						2,,,Page #
							
					will print page numbers right justified at top of the
					page, starting on page 2.  Note that two blank lines are
					automatically produced after the header.
		       
					If you have previously specified a header, and you do
					not want that header, press "N" (for None) in response to
					the Header prompt.
		                    
			F.		Footer.  This option allows you to specify a line of text
					to be printed at the bottom of each page, similar to the
					Header option.  The line that you enter in response to
					the prompt for this option has the same sections and
					meaning as the line entered for the Header option.  The
					footer will be printed preceeded by at least two blank
					lines.
		                    
			N.		Number.  This option allows you to specify number of the
					first page printed.  In response to the prompt for this
					option, enter a single number.  Note, however, that no
					number will be printed on any page, unless you have
					defined a header or footer containing the "#" character,
					as explained above under the Header setting.
	
			S.		Spacing.  This option allows you to specify whether the
					document should be printed with single spacing, or double
					spacing.  In response to this prompt, select one of these
					two options by typing a single character as follow:
							
					S.	Single spacing.
							
					D.	Double spacing.
							
			J.		Justify.  This option allows you to specify whether EDIT
					should print your file with lines within a paragraph
					right justified or not.  Edit performs right
					justification by expanding the spaces following the last
					tab character or first non-blank character in a line.  In
					response to this prompt, type a single character to
					select whether or not EDIT should perform right
					justification, as follows:
							
					Y.	Yes.  EDIT should right justify lines within
						paragraphs.
							
					N.	No.  EDIT should print each line exactly as it
						appears on the screen.
			
				
		4.2.  Settings That Only Affect The Editing Environment
		
			Key		Setting Desrciption
							
			I.		Insert/Replace mode.  This option allows you to select
					whether EDIT should be in Insert mode or Replace mode. 
					These two modes are explained above, under the Toggle
					Insert/Replace mode command in section 3.1.  In response
					to the prompt for this option, select the mode by typing
					a single character, as follows:
							
					I.	Insert mode.  
							
					R.	Replace mode.

			D.		Default repetition count.  This option allows you to
					specify the default value that will be used when the Esc
					key is pressed to repeat an EDIT command.  EDIT commands
					that may be repeated include the cursor movement
					commands, the Find and Reverse Find commands, the Replace
					and Conditional Replace commands, the Get command, and
					the Macro Execute command.
	
			C.		Color.  This option allows you to specify the display
					color (or attribute on monochrome displays) for different
					sections of the CRT screen.  It also allows you to
					specify color for boldface or underlined text.  The
					default colors (attributes) are different for systems
					using the IBM monochrome adaptor (or compatible), and the
					color/graphics adaptor.  You may want to experiment to
					determine what actual colors are displayed for different
					color values on a particular color monitor.  
							
					In response to the prompt for the Set Color option, enter
					up to six values separated by commas.  Any of the three
					values may be optionally omitted.  Each value determines
					the color EDIT uses for a different regions of the
					screen, or different kinds of text, as follows:
							
					-	Normal text display.  This is the color EDIT uses for
						normal text displayed on the top 23 lines of the
						screen.
							
					-	Prompt area.  This is the color EDIT uses for the
						bottom two lines on the screen contain EDIT's prompt
						and message lines.
							
					-	Marker.  This is the color EDIT uses to mark the
						character at the cursor position in the text display
						area when the screen cursor is moved down to the
						prompt area for you to enter a character or line of
						text in response to a command prompt.

					-	Bold text display.  This is the color or attribute
						EDIT uses to display text which will be "boldface"
						when printed.

					-	Underlined text display.  This is the color or
						attribute EDIT uses to display text which will be
						underlined when printed.

					-	Bold-Underlined text display.  This is the color or
						attribute EDIT uses to display text which will be
						printed both "boldface" and underlined.
			
			U.		Upper Window Size.  This option create an additional
					"window" into the file you are editing.  The window must
					be at least five lines long.  Setting the window to a
					size of zero will remove the window.  Each of the two
					windows has a separate cursor; thus, using to windows
					into a file allows you to look at one part of the file
					while you are editing another part of the file.  To
					switch between windows, press the numeric-pad-asterisk
					key, as explained in section in section 3.9.
		
			0.		Top of Page Printer Output Codes.  This option allows you
					to specify a sequence of ASCII codes that will be sent to
					the printer before printing each new page.  This may be
					used to output several LF (line feed) characaters to
					adjust the position where the first line of text (or the
					first line of the header) will be printed.  
		
					In response to the prompt for this option, enter up to 16
					positive decimal numbers separated by commas.  These
					numbers should not be larger than 255.  To clear this
					option, enter 'n' or 'N' in response to the prompt.
		
					For example, to cause the printer to move down three
					lines before starting to print on each page, specify the
					following for this option:
		
						10, 10, 10
		
					Note that "10" is the ASCII code for the LF character.
		
			1.		Bold ON Printer Output Codes.  This option allows you to
					specify a sequence of ASCII codes that will cause your
					printer to start printing bold characters.
		
					In response to the prompt for this option, enter up to 16
					positive decimal numbers separated by commas.  These
					numbers should not be larger than 255.  To clear this
					option, enter 'n' or 'N' in response to the prompt.
		
					EDIT will not use the codes you have specified for this
					option unless you also specify codes to turn bold off. 
					If you do not specify any values for these two options,
					EDIT will print bold characters by reprinting the line.
		
			2.		Bold OFF Printer Output Codes.  This option allows you to
					specify a sequence of ASCII codes that will cause your
					printer to stop printing bold characters.
		
					In response to the prompt for this option, enter up to 16
					positive decimal numbers separated by commas.  These
					numbers should not be larger than 255.  To clear this
					option, enter 'n' or 'N' in response to the prompt.
		
					EDIT will not use the codes you have specified for this
					option unless you also specify codes to turn bold on.  If
					you do not specify any values for these two options, EDIT
					will print bold characters by reprinting the line.
		
			3.		Underline ON Printer Output Codes.  This option allows
					you to specify a sequence of ASCII codes that will cause
					your printer to start underlining.
		
					In response to the prompt for this option, enter up to 16
					positive decimal numbers separated by commas.  These
					numbers should not be larger than 255.  To clear this
					option, enter 'n' or 'N' in response to the prompt.
		
					EDIT will not use the codes you have specified for this
					option unless you also specify codes to turn underline
					off.  If you do not specify any values for these two
					options, EDIT will underline by reprinting the line,
					using the ASCII underline character.
		
			4.		Underline OFF Printer Output Codes.  This option allows
					you to specify a sequence of ASCII codes that will cause
					your printer to stop underlining.
		
					In response to the prompt for this option, enter up to 16
					positive decimal numbers separated by commas.  These
					numbers should not be larger than 255.  To clear this
					option, enter 'n' or 'N' in response to the prompt.
		
					EDIT will not use the codes you have specified for this
					option unless you also specify codes to turn underline
					on.  If you do not specify any values for these two
					options, EDIT will underline by reprinting the line,
					using the ASCII underline character.
		
			9.		Printer Initialization Printer Output Codes.  This option
					allows you to specify a sequence of ASCII codes that will
					be sent to your printer before printing your entire
					document.  This is useful for sophisticated printers,
					like the HP LaserJet, that may be initialized (for
					example, by specifying the font) before you start
					printing.
		
					In response to the prompt for this option, enter up to 16
					positive decimal numbers separated by commas.  These
					numbers should not be larger than 255.  To clear this
					option, enter 'n' or 'N' in response to the prompt.
		
		
		
```
{% endraw %}

## EDITDOCA.TXT

{% raw %}
```
	A.  COMMAND SUMMARY
		
	    The following tables summarize EDIT's commands.  The tables are
	organized according to groups of related commands.  At the left side
	of the tables is listed the key the user must type to activate each
	command.  Indented under the command key the table gives whatever the
	user must type select subcommands or options, or enter values used
	used by the command.  At the right, the table gives the actions
	performed by that command.
		
		
	A.1.  Basic Text Insertion and Deletion
		
	Command						Action

	Ins							Switch between Insert and Replace modes
		
	any text character  		Insert or Replace character at cursor

	Shift-Ins c					Insert character "c", even if a command
		
	Enter  						Insert new line at cursor

	tab  						Insert tab, set temporary Auto-format
								left margin
		
	Shift-tab  					Insert spaces to next tab stop
		
	Ctrl-L						Insert form feed character (new page)

	Del							Delete character at cursor
	backspace  					Delete character left of cursor
		
	Shift-Del		  			Delete line containing cursor
		
	numeric pad minus  			Delete word left of cursor
	numeric pad plus  			Delete word right of cursor
		
	Shift-numeric pad minus  	Delete to beginning of line
	Shift-numeric pad plus  	Delete to end of line

		
	A.2.  Basic Cursor Movements
		
	Command						Action

	left  						Move cursor left  one character
	right  						Move cursor right one character
	up  						Move cursor up   one line
	down  						Move cursor down one line
		
	Home						Move cursor to beginning of line
	End							Move cursor to end       of line
	PgUp						Move cursor back    one screen
	PgDn						Move cursor forward one screen
		
	Shift-left  				Move cursor left  one word
	Shift-right  				Move cursor right one word

	Shift-up  					Move cursor up   one structure
	Shift-down  				Move cursor down one structure
		
								(structures are defined by indentation)
		
	Shift-Home					Move cursor left  one sentence
	Shift-End					Move cursor right one sentence
	Shift-PgUp					Move cursor back    one paragraph
	Shift-PgDn					Move cursor forward one paragraph

		
	A.3.  Setting Display, Editing, and Printing Options
		
	Command						Action

	F3							Set
		
	  W (y or n)				  Word processing mode (Yes or No)
		
	  T n1, n2, ...	 Enter  	  Tab stops (at columns n1, n2, ...)
		
	  M l, i, r   	 Enter  	  Margins:	left, indent, right
		
	  P l, p, n1, n2 Enter  	  Page:		lines, paragraph skip range,
											1 blank line skip range,
											2 blank lines skip range
	  H text       	 Enter  	  Header:	start page, left, center,
											right
	  F text      	 Enter  	  Footer:	start page, left, center,
											right
	  N n         	 Enter  	  Number to put on first page
		
	  S (s or d)				  Spacing (single or double)
		
	  J (y or n)				  Justify when printing (Yes or No)
		
	  I (i or r)				  Insert/Replace mode (Insert or Replace)
		
	  D n Enter	  				  Default repetition count

	  C d, p, m, b, u, bu Enter   Color:	display area, prompt area,
											marker, bold, underline,
											bold-underline
		
	  U n						  Upper window size (number of lines)
	
	  0 n1, n2, ... Enter	  	  Top of page    printer output codes
  	
	  1 n1, n2, ... Enter	  	  Bold ON        printer output codes
  	  2 n1, n2, ... Enter	  	  Bold OFF       printer output codes
  	
	  3 n1, n2, ... Enter	  	  Underline ON   printer output codes
  	  4 n1, n2, ... Enter	  	  Underline OFF  printer output codes
  	
	  9 n1, n2, ... Enter	  	  Initialization printer output codes

		
	A.4.  File Selection and/or Exit to DOS
		
	Command						Action

	F1							Quit
	  E							  Exit		  -	update file, then exit to
												DOS 

	  U						  	  Update	  -	save file
		  
	  W file Enter  			  Write	  	  -	write buffer contents to
												new file

	  I file Enter  			  Initialize  -	get new file
		  
	  A							  Abort	  	  -	exit to DOS without
												saving file

	  S file Enter  	  		  Save settings to file.
		F						    Settings affecting file being edited
		E						    Settings affecting editor only

	Shift-F3 file Enter			Retrieve settings from file
	
				
	A.5.  Block Commands:  Save, Delete, Get, & Move Text
		
	Command						Action

	F7							Mark character at cursor as one end of
	 							block (move cursor to other end)
		
	F9							Delete block (save it in block buffer)
		
	Shift-F9					Delete block (without saving)
		
	F10							Save block in block buffer
		
	Shift-F10 file Enter  		Save block in file
		
	F8							Get text from block buffer and insert at
								cursor

	Shift-F8  file Enter  		Get text from file and insert at cursor
		
								To move text, Save it, move cursor; then
								Get it

								To copy text, Delete it, move cursor;
								then Get it
		
	
	A.6.  Goto, Find, and Replace
		
	Command						Action

	Shift-numeric pad "5"  		Goto
	  B							  Go to beginning  (of file)
	  E							  Go to end        (of file)
	  L n Enter  				  Go to line "n"   (in file)
	  C n Enter  				  Go to column "n" (in line)
	
	F6       s Enter  			Find string "s" (search forward)
		
	Shift-F6 s Enter  			Find string "s" (search backward)
		
	F5 s Enter s Enter  		Replace 1st string with 2nd (search
								forward)
		
	Shift-F5 s Enter s Enter	Conditional Replace (search forward)
	  Y							   Yes   (replace)
	  N							   No    (do not replace)
	  S							   Stop  (replace, then stop)
	  A							   Abort (abort without replacing)

	Ctrl-M						(in strings) enter Carriage-Return 
	Ctrl-J						(in strings) enter Line-Feed
	
	
	A.7.  Printing and Miscelleneous Word Processing
		
	Command						Action

	Shift-PrtSc dev Enter  		Print (using current settings) to file or
		  		n 	Enter  		or device from page n through page m
		  		m 	Enter  
	
	Alt-W						Toggle Word-Processing mode on/off
		
	Alt-P						Paragraph reformat
		
	Alt-C						Center line
		
	Alt-R						Right-justify line (expanding char left
								of cursor)

	Alt-B						Toggle boldface on/off

	Alt-U						Toggle underline on/off

		
	A.8.  Help, Macros, Command Repetition, and DOS Commands
		
	Command						Action

	F2							Display help screens

	Alt-H						Turn menu line on/off
		
	Shift-F4					Start/Stop macro definition

	F4							Execute macro
			
	Esc n command  				Repeat command "n" times
		
	Esc n Enter  				Set default repetition count to "n"

	Esc command  				Repeat command using default repetition
								count
		
	Esc							Abort string input; type Esc instead of
								Enter  
		
	Alt-V						View. Rewrite screen with cursor on
								center line
		
	Shift-F1 dos-command Enter	Execute DOS command
	
	Numeric-Pad-Asterisk		Switch Windows.  Move cursor between
								upper and lower windows on screen
	
	Alt-O						Other Buffer.  Switch between two
								different files being created or edited
	
	
	A.9.  Alternate Command Keys

	Command						Action

	Alt-G						Goto

	Alt-H						Delete to beginning of line
	Alt-J						Delete word left
	Alt-K						Delete word right
	Alt-L						Delete to end of line

	Alt-D						Delete entire line

	Alt-M						Move "structure" down
	Alt-N						Move "structure" up

	Alt-Fn						Same as Shift-Fn for function key "n"
	Ctrl-Fn						Same as Shift-Fn for function key "n"

	Ctrl-"x"					Same as Shift-"x" where "x" is 
				  				Home, End, PgUp, PgDn, <Left>, or <Right>
	
```
{% endraw %}

## EDITDOCB.TXT

{% raw %}
```
	B.  INTERNAL INFORMATION
	
	    This appendix describes the meaning EDIT assigns to each possible
	byte stored in a file it is editing or printing.  
	
	    In general, EDIT stores files a normal characters.  A line feed
	(LF) is stored at the end of each line, and each line that ends a
	paragraph also has a carriage return (CR) preceeding the line feed. 
	Characters in the range 128 through 255 which include normal printing
	characters, but also greek characters, box-drawing characters, and
	other extensions to the ASCII character set are also stored normally
	and may be used in EDIT.  The only characters that EDIT treats
	specially are the characters in the range 0 (NUL) through 13 (CR). 
	EDIT does not display anything on the screen for any of these codes,
	also some of them affect the display of the text that follows them. 
	For example, LF is not displayed itself; instead, it causes the
	following character to be displayed at the beginning of the next
	line.  EDIT uses each of these characters as follows:
	
		Character			Usage in EDIT
	
		0 					Used as a marker of the cursor position
							during paragraph reformatting.  If the
							paragraph already contains this character,
							the cursor may be positioned incorrectly
							after the paragraph has been reformatted.
	
		1  (Ctrl-A)			End Bold.  Marks the end of a BOLD section of
							text.
	
		2  (Ctrl-B)			Begin Bold.  Marks the beginning of a BOLD
							section of text.  Note that it is legal to
							insert Ctrl-B and Ctrl-A around a section of
							existing text to make that text BOLD.  This
							may sometimes be easier than using Alt-B, and
							then typing the text.
	
		3  (Ctrl-C)			End Underline.  Marks the end of an
							UNDERLINED section of text.
	
		4  (Ctrl-D)			Begin Underline.  Marks the beginning of an
							UNDERLINED section of text.  Note that is
							legal to insert Ctrl-D and Ctrl-C around a
							section of existing text to make that text
							UNDERLINED.
	
	    5, 6, 7, 8			Not used by EDIT at this time, but reserved
							for future expansion.
	
		9  (HT or Ctrl-I)	Tab.  Causes the following character to be
							printed at the next tab stop.  Note that a
							tab in a line sets the left margin for the
							following lines in a paragraph.  In general,
							tab is used in the first line of a paragraph
							to set a local left margin for that
							paragraph.  
	
							It is not a good idea to insert a tab in a
							line other than the first line of a
							paragraph, because when the paragraph is
							reformatted (because characters preceeding
							the tab in the paragraph are inserted or
							deleted), the tab will be moved along with
							the other characters being reformatted, and
							this may cause the left margin to move to
							wherever the tab was moved to.
	
							It is good practice to set the tab stops and
							margins so that there will be a tab stop
							exactly at the left margin.  
	
		10	(LF or Ctrl-J)	Line Feed.  Causes the following character to
							be printted at the beginning of the next
							line.  Note that EDIT stores a LF without a
							preceeding CR on lines inside a paragraph,
							but a CR-LF pair at the end of a paragraph. 
							Thus, when a file is printed, EDIT will right
							justify lines that end with LF only (no CR).
	
		11					Not used at this time, but reserved for
							future expansion.
	
		12	(FF or Ctrl-L)	Form Feed.  Causes the following character to
							be printted at the beginning of the next
							page.  Note that the FF character is
							displayed on the screen of the PC as a little
							circle with a plus-sign under it.
	
		13  (CR or Ctrl-M)	Carriage Return.  Signals the end of the
							paragraph.  If a line of text has a CR
							character immediately preceeding the LF at
							the end of the line, that line will never be
							right justified when it is printed.
	
							CR will also turn off BOLD and/or UNDERLINE. 
							Thus, BOLD and UNDERLINE are always turned
							off at the end of each paragraph.
	
		14 through 255		Printable Characters.  All characters in this
							range may be used as the text to be displayed
							and printed by EDIT.  For a description of
							the image displayed or printed for each of
							these values, you should consult the
							appropriate PC or printer documentation.
	
	
```
{% endraw %}

## FILES294.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No  294   EDIT - V1.37                                          v1.2
--------------------------------------------------------------------------
EDIT is a general purpose text editor and word processing program.  It
supports a wide array of editing operations, including powerful commands
that are often not available even in very expensive word processors.
 
EDIT     EXE  Main program - type "edit" to start
EDIT     SET  Setup parameter file
EDIT     HLP  Help text
*        TXT  Documentation files (70K total)
*        SET  Print format files
PRINTDOC BAT  Batch file to print documentation
*        PRN  Documentation files to print
READ     ME   Brief description which may be "typed" or copied to "lpt1:"
 
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## MESSAGE1.DOC

{% raw %}
```
COMMAND OVERVIEW

    EDIT's commands are simple and easy to remember.  The cursor  control  keys
on  the  right  side  of  the keyboard all perform the action designated on the
keycap.  A prompt line on the screen indicates the  command  for  each  of  the
function keys on the left side of the keyboard.  The text keys in the center of
the keyboard are used to enter text.  In addition to the basic  commands,  most
commands  also have a "stronger" version, that uses the same key, but with Ctrl
or Shift held down.

    Yet EDIT is very powerful, both as a general purpose text editor and  as  a
word  processing  program.    It  supports  a wide array of editing operations,
including powerful commands that are often not available even in very expensive
word  processors.    Naturally, EDIT gives you a wide range of control over the
final layout of your printed file, including headers and  footers,  page  size,
tab  stops,  margins,  right justification, spacing, etc.  It supports not just
"word wrapping", but automatic paragraph reformatting.  Under versions  2.0  or
later  of  DOS,  EDIT even allows you to execute DOS commands, or start another
program without leaving EDIT.



```
{% endraw %}

## MESSAGE2.DOC

{% raw %}
```
USERS MANUAL

    To print a copy of the Users Manual for EDIT, first place the EDIT disk  in
drive  A.   Then prepare your printer for printing.  For most printers, all you
need to do is turn on the power.  However, with serial printers, you  may  need
to  give  a  MODE  command  to set the communication speed, etc.  Refer to your
printer manual for details. Also, be sure that the  paper  in  the  printer  is
aligned  at  the  top  of  a page.  Next, give the DOS command to make drive A,
(which contains the EDIT disk) your current disk.  To do this, type

    A:

Then, type the command

    printdoc

This will print the Users Manual.  The manual is about  50  pages  long.    The
manual is in several chapters, each printed from a separate file.  To abort the
printing, press Ctrl-Break to stop printing the current file,  and  then  press
Ctrl-Break again to stop EDIT before it starts printing the next file.


```
{% endraw %}

## MESSAGE3.DOC

{% raw %}
```
USER SUPPORT

    EDIT has been placed in the public domain by it's author.  You may copy  it
freely, and you are encouraged to share it with others.

    However,  EDIT  is a sophisticated, high quality program.  If you use EDIT,
please do your part to  support  good  public  domain  software  by  sending  a
donation to EDIT's author at the following address:

    Thomas N. Thurston
    1111 W. El Camino Real, Suite 109-115
    Sunnyvale, California 94087

    Suggested donation:  25 dollars

    If  you  do  send  a  donation,  be  sure to include your name and address.
Everyone who donates at least 15 dollars will be notified when major updates of
EDIT  are  available,  and how to get a current copy.  Comments and suggestions
are also greatly appreciated.



```
{% endraw %}

## TOOLS.TXT

{% raw %}
```
							   A Set of Tool Programs
		
								   For the IBM PC
		
		
		    This document describes a set of UNIX-like tool programs for use
		on MS-DOS systems.  They are handy for general file management, and
		obtaining information about text files.  They are especially useful
		on systems that have a hard disk.  A summary of the tools is given on
		this page.  The following pages contain a more detailed explanation
		of each tool.  
		
			Tool		Function
			
			CALC		Simple calculator program
			CHMOD		Change file mode (hidden, write protected, etc.)
			CP			A more general COPY program
			CRYPT		File encryption/decryption program
			DELETE		A more general DEL or ERASE program
			FD			Find Directory
			FF			Find File (anywhere on the disk)
			FL			Find Lines in files containing specified strings
			LF			List directory with File types
			LINES		Count lines
			LOG			Obtain a log file (in a pipe)
			LS			List Sorted directory of files
			MOVE		Move files between directories
			PAGES		Count pages
			READ		Read file (for use in pipe)
			RUNTIME		Give execution time of a specified program
			SIZE		Give total size (in bytes) of specified files
			STRINGS		Display ASCII strings in file
			UNWS		Convert a WordStar file to ASCII format
			WORDS		Count words
		
		    In the decriptions that follow, whenever the term filespec is
		used, you may give any name that refers to a single a file or a group
		of files (using the DOS wildcard characters * and ?).  When the term
		dirspec is used, you may give any name that refers to a directory or
		device.  As with a filespec, you may use DOS wildcard characters in a
		dirspec.
		
		CALC
		
			Synopsis:	CALC [/01234567] expression
					 or	
						CALC [/01234567]
						expression
						expression
						...
			
			Examples:	CALC 40k - 16
						CALC
						1.23-4.56
						12*5 + 3*(234 - 13*6)
						99/7
						'%'
		
			CALC is a simple calculator program.  It accepts a single
			expression on its invocation line, or a sequence of input lines
			from standard input (terminated by a blank line or end of file). 
			CALC accepts numbers in hex (H suffix) or decimal (with optional
			K suffix meaning to multiply the value by 1024), or character
			constants (surrounded by single quotes).  The result of each
			expression is sent to standard output on a line with the value
			printed in decimal, hex, and (optionally) a quoted character
			value.  
		
			By default, CALC displays decimal numbers with 2 digits after the
			decimal point, but a different number of digits can be specified
			by an option when CALC is started.  CALC accepts the following
			option:
		
			/0	Display the number without a decimal point.
		
			/n	Display n digits after the decimal point, where n is a
				decimal number from 0 to 7.  
		
			
		CHMOD
		
			Synopsis:	CHMOD [-rhsa] [+rhsa] filespec ...
		
			Examples:	CHMOD *.exe *.com +r
						CHMOD secret.txt +h
						CHMOD *.* -h +r
		
			CHMOD (Change mode) sets the file attributes for the matching
			files.  If there is no directory component of a filespec, the
			current directory is assumed.  If there is no file portion of a
			filespec, the directory itself is used.  A plus sign preceeding
			the options will set the corresponding attribute.  A minus sign
			preceeding the option will clear the attribute.  The following
			options may be given:
		
			-a	Clear Archive Bit.  This bit is set on whenever a file has
				been written to and closed.  It is used by BACKUP and
				RESTORE.  
		
			+a	Set Archive Bit.  
		
			-h	Clear Hidden Bit.  If this bit is set, the file will be
				excluded from normal directory searches.
		
			+h	Set Hidden Bit.  
		
			-r	Clear Read-Only Bit.  If this bit is set, the file may not be
				modified (written to, or deleted).
		
			+r	Set Read-Only Bit.  
		
			-s	Clear System Bit.  If this bit is set, the file is considered
				a "system" file, and the file will be excluded from normal
				directory searches.
		
			+s	Set System Bit.  
			
			
		CP
		
			Synopsis:	CP [-q] filespec
					 or
						CP [-fq] dirspec 
					 or
						CP [-q] filespec ... dirspec
		
			Examples:	CP \work \tools -q
						CP *.txt *.doc a:
						FF *.c |cp a: -f
		
			CP (Copy) copies the matching files to another directory
			(possibly on another device).  If there is no directory component
			of a filespec, the current directory is assumed.  If there is no
			file portion of a filespec, *.* is assumed.  If no dirspec is
			given, the current directory is assumed to be the target
			directory.  A dirspec is required if more than one filespec is
			given.  The following options may be given:
		
			-q	Query.  CP prompts the user for confirmation of each file to
				copy.  
		
			-f	Files.  A list of files to copy will be read from standard
				input, and the target directory must be specified as the
				single argument on the command line.  
		
			The options may be preceeded by a dash '-' or a slash '/'
			character.  They may occur at any point among the arguments.
		
		
		CRYPT
		
			Synopsis:	CRYPT [-fq] filespec ...
			
			Examples:	CRYPT *.txt *.doc -q
						CRYPT file1 file2 file3 -f
						CRYPT \private -q
		
			CRYPT is a file encryption/decryption program.  After it starts
			executing, it prompts you to enter a key.  The key must be at
			least two characters long.  The key is not echoed as you enter
			it.  It then requests that you enter the key again.  If the
			second key is the same as the first, CRYPT will encrypt the
			matching files, using the key.  To decrypt the files, use CRYPT
			again with the same key.  Do not forget your key!  If you do, it
			will be impossible to decrypt the files.
		
			If there is no directory component of the filespec, the current
			directory is assumed.  If there is no file portion of the
			filespec, *.* is assumed.  
		
			CRYPT accepts the following options:
		
			-f	Fast.  Process the file using a faster (but not quite as
				safe) algorithm.  If the "f" option is not selected, CRYPT
				makes a copy of the file being processed, encrypts the copy,
				and then renames the files so to avoid any risk of leaving
				the file in a partially encrypted state if an I/O error
				occurs during processing.  
		
				However, with the "f" option, the file is encrypted without
				making a backup copy of it first.  As a result, the file is
				processed much faster, but there is a small chance that an
				I/O error will leave the file partially encrypted.  In
				addition, the "f" option requires less disk space, since it
				does not make of a copy of the file before processing it.
		
				The problem with leaving a file in a partially encrypted
				state is that CRYPT will not be able to tell which part is
				encrypted and which part isn't, and thus will be unable to
				decrypt the file.
		
			-q	Query.  CRYPT prompts the user for confirmation of each file
				to process.
		
		
		DELETE
		
			Synopsis:	DELETE [-b] filespec ... 
		
			Examples:	DELETE *.bak
						DELETE -b *.o badfile.tmp oldfile.*
		
			DELETE deletes the matching files.  If there is no directory
			component of the filespec, the current directory is assumed.  If
			there is no file portion of the filespec, *.* is assumed.  By
			default, DELETE prompts the user for confirmation of each
			deletion.  The following option is available:
		
			-b	Brief.  DELETE does not prompt for a confirmation of each
				deletion (unless the filespec contains *.*).
		
			The option may be preceeded by a dash '-' or a slash '/'
			character.  It may occur at any point among the arguments.
		
		
		FD
		
			Synopsis:	FD [dirspec ...]
		
			Examples:	FD
						FD \usr | SIZE
		
			FD (Find Directory) returns a list of matching directory names
			including the specified directory and any directories within that
			directory (and so on).  If no dirspec is given, the root
			directory is assumed.  The dirspec can have * or ? as wildcard
			specifiers.  The list of matching directories is sent to standard
			output.  The output list gives full pathnames for the
			directories.
		
		
		FF
		
			Synopsis:	FF [filespec ...]
		
			Examples:	FF *.bak
						FF *.c *.h | SORT
						FF \tom | LINES
		
			FF (Find File) returns a list of matching file names starting the
			the directory portion of the filespec, and including any matching
			file names in any contained directories.  If there is no
			directory given in the filespec, the root directory is assumed. 
			If there is no filename portion of the filespec, then *.* is
			assumed.  The list of matching files is sent to standard output. 
			The output list gives full pathnames for the filenames.
		
		
		FL
				
			Synopsis:	FL [-fpl] [filespec ...] [string ...]
		
			Examples:	FL /f *.c *.h "longjmp" "setjmp" | LOG jmps | MORE
						FF *.txt | FL "current" > wordlist
						FL -fpl *.prn "fish" "fowl" |more
		
			FL reads the matching files and sends all lines containing one of
			the specified strings to standard output.  If there is no
			directory component of the filespec, the current directory is
			assumed.  If there is no filename component of the filespec, *.*
			is assumed.  If invocation does not give a filespec, the list of
			filespec's will be read from standard input.  The following
			options are available:
		
			-f	File.  Each line sent to standard output is to be labeled
				with the name of the file from which it was read.  
		
			-p	Page.  Each output line is to be labeled with the page number
				in which it occurs in the file.  Pages are assumed to be
				delimited by Form-Feed characters.  
		
			-l	Line.  Each line is to be labeled with the number of that
				line.  Lines are assumed to be delimited by Line-Feed
				characters.  If both the 'p' and 'l' options are given, then
				the line number will be the line number on the current page,
				otherwise, the line number will be the line within the file.
		
			The options may be preceeded by a dash '-' or a slash '/'
			character.  More than one option may be given after a single
			dash (or slash).  The options, filespecs, and strings may be
			given in any order.
		
		
		LINES
		
			Synopsis:	LINES [filespec ...]
		
			Examples:	LINES *.txt
						FF \tom\*.txt | READ | LINES
		
			LINES counts the lines (delimited by Line Feed characters) in its
			input and prints the number of lines on standard output.  If
			there is no directory component of the filespec, the current
			directory is assumed.  If there is no filename component of the
			filespec, *.* is assumed.  If no filespec is given, the lines in
			standard input are counted.
		
		
		LOG
		
			Synopsis:	LOG file
		
			Examples:	FF *.tmp | LOG tmpfiles | LINES
						LS -l *.txt | LOG txtfiles | MORE
		
			LOG simply copies standard input to a file as well as to standard
			output.  It is useful for capturing intermediate information from
			a pipe in a file as well as passing it on down the pipe.
		
		
		LF
		LS
		
			Synopsis:	LF [-aceflrst] [filespec ...]
						LS [-aceflrst] [filespec ...]
		
			Examples:	LF
						LS/l b:
						LS *.c *.h | READ | LINES
		
			LF (List directory with File type) is simply LS with the f (file
			type) and the c (columns) options enabled.
		
			LS (List directory) lists the matching files.  Normally, the
			files are sorted by filename.  If there is no directory component
			of the filespec, the current directory is assumed.  If there is
			no filename component of the filespec, *.* is assumed.  The list
			of files is sent to standard output.  The following options are
			available:
		
			-a	All.  All files are included in the directory list, including
				hidden, directory, and system files, and the pseudo-file that
				represents the volume name.  
		
			-c	Columns.  The files are listed in columns.  If only file
				names are being listed, 5 columns are used.  If the long form
				of the list is used ('l' option), 2 columns will be used
				(unless the 'a' option is given, and only 1 column will fit).  
		
			-e	Extension.  The files are sorted first by extension, then by
				filename.
		
			-f	File type.  Directory files will be indicated by appending a
				backslash character to the filename in the list.
		
			-l	Long.  The list will include various information about the
				file, including the size of the file, and the date and time
				the file was last modified.  If the 'a' option is also given,
				the file attributes will be also listed for each file.  The
				meaning of each attribute is as follows:
		
				 r	Read Only.  The file may only be read; not written to or
					deleted.
		
				 h	Hidden.  The file is normally hidden (not listed in
					directory searches).
		
				 s	System.  The file is a hidden file reserved for special
					system functions.
		
				 a	Archive.  Indicates that the file has been modified since
					it was archived using the DOS BACKUP command.
		
			-r	Reverse.  The sorting order is reversed.
		
			-s	Sort by Size.  The sorting order is by file size.
		
			-t	Sort by Time.  The sorting order is by the date and time the
				file was last modified.
		
			The options may be preceeded by a dash '-' or a slash '/'
			character.  They may occur at any point among the arguments.
		
		
		MOVE
		
			Synopsis:	MOVE [-q] filespec
					 or
						MOVE [-fq] dirspec
					 or
						MOVE [-q] filespec filespec ... dirspec
		
			Examples:	MOVE /q \work \tools
						MOVE *.txt *.doc \text -q
						FF *.txt *.doc |move \usr\txt
		
			MOVE moves the matching files from directory to another on the
			same device.  If there is no directory component of a filespec,
			the current directory is assumed.  If there is no file portion of
			a filespec, *.* is assumed.  If no dirspec is given, the current
			directory is assumed to be the target directory.  A dirspec is
			required if more than one filespec is given.  The following
			options are available:
		
			-q	Query.  MOVE prompts the user for confirmation of each file
				to move.  
		
			-f	Files.  A list of files to move will be read from standard
				input, and the target directory must be specified as the
				single argument on the command line.  
		
			The options may be preceeded by a dash '-' or a slash '/'
			character.  They may occur at any point among the arguments.
		
		
		PAGES
		
			Synopsis:	PAGES [filespec ...]
		
			Examples:	PAGES *.lst
						FF *.txt | LOG txtfiles | READ | PAGES
		
			PAGES counts the pages (delimited by Form Feed characters) in its
			input and prints the number of pages on standard output.  If
			there is no directory component of the filespec, the current
			directory is assumed.  If there is no filename component of the
			filespec, *.* is assumed.  If no filespec is given, the pages in
			standard input are counted.
		
		
		READ
		
			Synopsis:	READ [-fl] [filespec ...]
		
			Examples:	READ *.c *.h | LINES
						FF \tom\*.lst | READ | PAGES
		
			READ reads the matching files and sends the contents of the files
			to standard output.  If there is no directory component of the
			filespec, the current directory is assumed.  If there is no
			filename component of the filespec, *.* is assumed.  If
			invocation does not give a filespec, the list of filespec's will
			be read from standard input.  The following options are
			available:
		
			-f	File.  Each line sent to standard output is to be labeled
				with the name of the file from which it was read.  
		
			-l	Line.  Each line is to be labeled with the number of that
				line.  Lines are assumed to be delimited by Line-Feed
				characters.  
		
			The options may be preceeded by a dash '-' or a slash '/'
			character.  More than one option may be given after a single
			dash (or slash).  The options, filespecs, and strings may be
			given in any order.
		
			
		RUNTIME
		
			Synopsis:	RUNTIME program [argument ...]
		
			Examples:	RUNTIME plm86 prog1.plm
						RUNTIME batchfil arg1 arg2
		
			RUNTIME executes another program or batch file and times the
			execution of it.  When the other program has finished its
			execution, the total execution time is displayed in the form of
			HH:MM:SS.SS.  Although the time includes hundredths of seconds,
			the resolution is accurate only to the nearest 10th of a second
			or so.  The runtime includes the time taken to load the program. 
			Since the time is computed by subtracting the time of day at the
			start from the time of day at the end, the number of hours will
			be off by 24 for each time midnight is passed.
		
		
		SIZE
		
			Synopsis:	SIZE [-f] [filespec ...]
		
			Examples:	SIZE .
						FD \tools | SIZE
						SIZE *.c *.h
		
			SIZE sends the total size (in bytes) of the matching files to
			standard output.  If the filespec does not contain a directory
			component, the current directory is assumed.  If the filespec
			does not include a filename component, *.* is assumed.  If no
			filespec is given, the size of all the files in the current
			directory is given.  The following option is available:
		
			-f	Files.  A list of files will be read from standard input.  
		
			The option may be preceeded by a dash '-' or a slash '/'
			character.  It may occur at any point among the arguments.
		
		
		STRINGS
		
			Synopsis:	STRINGS [-afl] [filespec ...]
		
			Examples:	STRINGS command.com -l4
						STRINGS *.exe /f
		
			STRINGS reads the specified file(s) and displays any text (ASCII)
			strings found in the file to standard output.  By default, only
			those strings that end in a null character are included, but this
			can be changed with the -a option.  If there is no directory
			component of the filespec, the current directory is assumed.  If
			there is no filename component of the filespec, *.* is assumed. 
			If invocation does not give a filespec, the list of filespec's
			will be read from standard input.  The following options are
			available:
		
			-a	All.  All strings are included, not just those that end in a
				null character.
		
			-f	File.  Each line sent to standard output is to be labeled
				with the name of the file from which it was read.  
		
			-ln	Length.  Only strings with length n or greater (where n is a
				positive integer) will be displayed.  
		
			The options may be preceeded by a dash '-' or a slash '/'
			character.  More than one option may be given after a single
			dash (or slash).  The options, filespecs, and strings may be
			given in any order.
		
		
		UNWS
		
			Synopsis:	UNWS [-fq] filespec ...
			
			Examples:	UNWS *.txt *.doc -q
						UNWS file1 file2 file3 -f
						UNWS \private -q
		
			UNWS is a program that strips converts WordStar files into a pure
			ASCII (pure text) format.  When WordStar creates a file, it
			stores some of the characters in a way so that they do not appear
			as normal text to another word processor.  UNWS converts these
			characters back to their normal text form.  
		
			If there is no directory component of the filespec, the current
			directory is assumed.  If there is no file portion of the
			filespec, *.* is assumed.  
		
			UNWS accepts the following option:
		
			-q	Query.  UNWS prompts the user for confirmation of each file
				to process.
		
		
		WORDS
		
			Synopsis:	WORDS [-lns] [filespec ...]
		
			Examples:	WORDS a:*.txt
						FF chap*.txt | READ | WORDS -l | SORT | LOG t1 | MORE
						WORDS *.c -snl
		
			WORDS reads the text of all matching files, and processes the
			words in that text.  If the filespec does not contain a directory
			component, the current directory is assumed.  If the filespec
			does not contain a filename component, *.* is assumed.  If no
			filespec is given, then the words in standard input are
			processed.  The following options are available:
		
			-l	Long.  If the L option is not given, the total number of
				words is sent to standard output.  If the L option is given,
				standard output is sent a sorted list where each line
				contains one of the words found in the input, preceeded by
				the number of times that word occured.  
		
			-n	Numbers.  Numbers are also counted as words.  
		
			-s	Strings.  Each string (using C syntax) is to be counted as a
				single word.  
		
			The options may be preceeded by a dash '-' or a slash '/'
			character.  They may occur at any point among the arguments.  Any
			number of options may be given after a single dash.
		
		
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0294

     Volume in drive A has no label
     Directory of A:\

    EDIT     EXE     52224   1-07-87  10:34p
    EDIT     HLP      6554   1-03-87   8:53p
    EPSON    SET        56   3-03-86  10:55a
    C-ITOH   SET        50   3-03-86  10:55a
    OKIDATA  SET        46   3-03-86  10:52a
    LASERJET SET        99   3-03-86  10:55a
    EDITDOC0 TXT      3492   1-14-87   1:22a
    EDITDOC0 SET        85  11-07-85  10:06a
    EDITDOC1 TXT      7901  12-06-86  12:32p
    EDITDOC1 SET       100   1-21-86   4:46p
    EDITDOC2 TXT     23298  12-13-86  11:44a
    EDITDOC2 SET       104   1-21-86   4:48p
    EDITDOC3 TXT     39069  12-16-86   1:34a
    EDITDOC3 SET        96  12-16-86   1:31a
    EDITDOC4 TXT     16006  12-13-86  11:47a
    EDITDOC4 SET        95  12-13-86  11:49a
    EDITDOCA TXT      7925  12-04-86  10:57p
    EDITDOCA SET       121  11-07-85  10:20a
    EDITDOCB TXT      4562   3-03-86  12:01p
    EDITDOCB SET       126  11-07-85  10:24a
    PRINTDOC BAT       175   1-02-87   8:49a
    MESSAGE0 DOC      1259   1-01-87  11:05p
    MESSAGE1 DOC      1214   1-01-87  11:05p
    MESSAGE2 DOC       944   1-20-87   9:42a
    MESSAGE3 DOC       794   1-01-87  11:05p
    GO       BAT       161   3-06-86   3:09p
    EGA43    COM        26  12-02-86   7:48p
    EGA25    COM        13   1-03-87  11:52a
    CALC     EXE     15360   1-02-87  12:15a
    CHMOD    EXE      5120   1-02-87  12:29a
    CP       EXE     10240   1-14-87  12:35a
    CRYPT    EXE      6144   1-14-87  12:39a
    DELETE   EXE      4608   1-14-87  12:51a
    FD       EXE      3584   1-02-87  12:31a
    FF       EXE      3584   1-02-87  12:32a
    FL       EXE     11264   1-02-87  12:32a
    LF       EXE     11264   1-02-87  12:33a
    LINES    EXE      4096   1-02-87  12:33a
    LOG      EXE      2560   1-02-87  12:34a
    LS       EXE     11264   1-02-87  12:35a
    MOVE     EXE     10752   1-14-87  12:55a
    PAGES    EXE      4096   1-02-87  12:36a
    READ     EXE     10240   1-02-87  12:37a
    RUNTIME  EXE      3072   1-02-87  12:37a
    SIZE     EXE      9216   1-02-87  12:38a
    STRINGS  EXE     10240   1-02-87  12:38a
    UNWS     EXE      5120   1-14-87   1:15a
    WORDS    EXE      6656   1-02-87  12:45a
    TOOLS    TXT     20826   1-23-87   3:55p
    TOOLS    SET        83   8-18-86  11:05a
    READ     ME        862   1-02-87  12:06a
    FILES294 TXT       908   1-30-87   9:03a
           52 file(s)     337754 bytes
                               0 bytes free
