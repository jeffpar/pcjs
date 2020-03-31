---
layout: page
title: PFM (Paul's File Manager)
permalink: /software/pcx86/util/other/pfm/3.14/
redirect_from: /disks/pcx86/tools/other/pfm/
machines:
  - id: ibm5160-pcdos200
    type: pcx86
    config: /configs/pcx86/xml/machine/5160/cga/256kb/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: PFM (Paul&apos;s File Manager) 3.14
    autoType: $date\r$time\r$10B:\rDIR\r
---

On June 19, 2018, while meeting with a number of former COMPAQ engineers in Houston, one of them (Norm) brought an
old COMPAQ Portable LTE/486, which contained a copy of an internally developed -- and fondly remembered -- program
called `PFM`, aka "Paul's File Manager".  With the help of a few other engineers (Jeff and Ted), we were
able to copy it to a 3.5-inch diskette, which I've archived at PCjs.

In October 2018, I contacted the author, Paul Culley, who provided a brief history of PFM:

> I wrote PFM back in the late 1980s because I am a poor typist.  When I worked at Texas Instruments,
> they had a program called DFM which ran on the 990 minicomputers which was in some respects a precursor
> of PFM.  It had the same basic screen layout, but many fewer commands.  When I started work on the first
> TI Personal computer (in some ways similar to the IBM PC) I wanted to be able to use MSDOS a bit easier,
> so in my spare time I began work on PFM.  When I left TI, they claimed everything I wrote belonged to
> them, so I had to start over, when I started working for Compaq.  I think the rewrite worked out much better.

> It evolved over the early years a bit but stagnated when Windows XP became popular.  Since it is based on
> MSDOS, it only runs on MSDOS VMs or 32-bit versions of Windows that still have the MSDOS compatibility layer
> (XP did, so did versions up to Vista).

> I'm attaching the manual.  I guess you could have the source code if you wanted it as well, let me know.

> FYI; Ted Emerson (still works for HP in Houston) took the source code and adapted it to the win32 APIs and
> created a version that runs on Windows, the last time I spoke with him he said he still uses it to this day.
> I never had a copy though.  I don't think he distributed it widely.

The manual was a Microsoft Word document.  Using a modern version of Word, I was able to load the file in Compatibility
Mode and then save it as plain text, which I've pasted below and modified slightly for the proper display on the website.

`PFM.COM` is version 3.14 with an internal date of February 14, 1991, and according to Microsoft Word, `PFM.DOC`
was last modified on January 2, 1997.

{% include machine.html id="ibm5160-pcdos200" %}

PFM Documentation
-----------------

PFM INFORMATION MANUAL version 3.16

Copyright Paul R. Culley 1983 to 1997

### 1 WHAT IS PFM?

PFM is a personal file management system to help you to deal with DOS.  It is used to make common file maintenance chores easier and faster.  PFM is a "Front End" for the DOS command processor.  It is a visual directory maintenance tool with pointer and single character menu driven interface.  It is many good things which users have requested.  To find out more, read the rest of this manual, or, (If you are like me) just start running it and see what it does.

### 2 REQUIREMENTS FOR USE

*	MSDOS or PCDOS versions 2.0 or greater.
*	IBM pc's or compatible machines.
*	The IBM monochrome adapter, CGA, EGA, VGA or other color adapter in the 80 column text mode, or an adapter that is compatible with one of the above.  (Note that PFM.COM produces flicker with the IBM CGA adapter, Compaq and other compatible's color adapters work properly.  If you have an IBM CGA adapter use the file IBMPFM.COM instead of PFM.COM.)  
*	PFM requires a minimum of a two disk system (or a system connected to a network) and is most useful with large (hard) disks.
*	128k to 640k of memory (more is better!)

### 3 FIRST TIME INSTALLATION

To install PFM on your disk, just copy it from the distribution floppy to your disk.  If you already have a copy of PFM that you have been using, put the new copy somewhere else (temporarily).  If (and only if) you have an IBM color graphics adapter (CGA) then copy the special IBM version of PFM to your disk using the standard DOS command;

EXAMPLE: `copy a:ibmpfm.com c:pfm.com`

Otherwise, copy the standard version of PFM to your disk using the standard DOS command;

EXAMPLE: `copy a:pfm.com c:`

Then begin executing PFM as a command.

EXAMPLE: `c:pfm`

When PFM starts up for the first time, it will display a sign-on message and instruct you to enter the location where PFM has been placed.  If you do not want to run PFM at this time, just hit **ESC** on the keyboard to exit.  If you do, you should enter the entire pathname, including the drive letter, the path and the filename of PFM itself.  For example; if you placed PFM in the root directory on drive C: your response would be;

	Enter the complete new pathname of PFM:  c:\pfm.com

Note that the cursor, **Ins**, and **Del** keys work for changing the response.  PFM must remain in the drive where it is installed in order for correct operation of the "Help" and "Configuration" facilities.  If you move PFM or attempt to restart it from another drive, it will ask the installation questions again.

### 4 UPDATE INSTALLATION

If you already have a copy of PFM that you have been using, then you may want to do the update installation.  This allows you to keep your old 'Y' commands and editor filename configuration information.

To install the update PFM on your disk, just copy it from the distribution floppy to a temporary place on your disk (somewhere different from where the old PFM resides).  If (and only if) you have an IBM color graphics adapter (CGA) then copy the special IBM version of PFM to your disk using the standard DOS command;

EXAMPLE: `copy a:ibmpfm.com c:\temp\pfm.com` (old PFM version is at C:\PFM.COM)

Otherwise, copy the standard version of PFM to your disk using the standard DOS command;

EXAMPLE: `copy a:pfm.com c:\temp`

Then begin executing PFM as a command.

EXAMPLE: `c:\temp\pfm`

When PFM starts up for the first time, it will display a sign-on message and instruct you to enter the location where PFM has been placed.  If you do not want to run PFM at this time, just hit **ESC** on the keyboard to exit.  If you do, you should enter the entire pathname, including the drive letter, the path and the filename of the OLD version of PFM.  For example; if you placed the update PFM in the temp directory on drive C: and your old version was at the root, your response would be;

	Enter the complete new pathname of PFM:  c:\pfm.com

The update PFM will first examine your old PFM, pick up your configured 'Y' commands and your editor pathname, configure itself with them and then install itself at the old PFM's location.  The PFM.COM file must remain in the drive where it is installed in order for correct operation of commands and the "Help" and "Configuration" facilities.  If you move PFM or remove it from it's installed location, then it will be unable to restart itself after running a command.  If you move the PFM.COM file and then quit and restart it, it will ask the installation questions again.

### 5 AFTER THE INSTALLATION

PFM will then put up it's title message and a prompt line asking for you to hit one of the characters **H** for help, **E** for editor name, **C** for color, **U** for cUrsor, **Y** for Your commands, or **ESC** to exit from this menu.

#### 5.1 Help

If you enter "H" a help screen will appear which will remind you how to answer the other questions and configuration information.  (To exit HELP, hit the **F10**, **Enter**, or **ESC** keys).

#### 5.2 Editor name

If you enter "E", PFM asks the name of the text editor that you generally use.

The requirements for the editor are that it be started as a ".COM" or ".EXE" file, it must accept the file to be edited as a command line input, and it must be able to locate it's own overlays and help files (if any) when they are not on the current disk or in the current directory.  The DOS editor EDLIN.COM can be used but there are many better ones available (such as PMATE, Microsoft WORD, or WordPerfect).

Enter the name and location of your editor as the example shows. Remember to type the entire pathname including drive.

EXAMPLE: `Editor pathname: C:\DOS\EDLIN.COM`

This entry specifies the editor used by PFM when you want to edit a file.

#### 5.3 Cursor configuration

If you enter a "U" for cursor, then PFM asks is whether you want to keep the original cursor provided by DOS when you return to DOS later on.  Since I happen to like a large blinking cursor (the better to find it on the screen) PFM will make the cursor that way unless you specifically answer "Y" to this question.

EXAMPLE: `Keep original cursor? (Y/N): N`

#### 5.4 Color choice

If you enter a "C" for color choice, then PFM will put up several lines of text in the current color scheme.  You are then asked if you like the scheme.  If you do, answer "Y" to the question.  PFM then uses the scheme from then on until you change it with another configuration.  If you don't like the colors, answer "N".  There are several choices of color schemes available, if you don't like any of them, pick the one you hate the least and write me a letter describing what you would like.  If you send lots of money and I am in a good mood, maybe I'll add your scheme to an upcoming version of PFM.

#### 5.5 Your commands

The remaining configuration item is "Y" for Your commands.  This refers to the setup of your own special commands.  This is described in detail in a later section (YOUR COMMANDS).  If you decide to try it now, then you can get out by just hitting the "ESC" key.

EXAMPLE: `ESC or Your command Char?  **ESC**`

#### 5.6 **ESC**, **Enter** begin normal operation

If all of the other configuration items are to your liking, then hit **ESC** or **Enter** from the menu line.  PFM then asks is if the above configuration answers are correct. The answers to all these questions and other settings will be saved with PFM if you answer "Y".  If you don't answer "Y", then the answers will only last until you quit.  (You can come back and change your mind later before you quit).

PFM will now begin normal operation by displaying the sign-on advertisement.  Hit **F10**, **Enter**, or **ESC** to begin operation and PFM will display the main directory and menu screen.

### 6 OPERATION OF PFM (MAIN MENU)

After PFM is installed, it can be restarted by typing "PFM" on the DOS command line.  Note that if you start PFM with a drive/path on the command line that PFM will begin by displaying the indicated path.  If you want a small reminder about some system function or perhaps a personalization for your computer listed on the main screen of PFM, then start PFM with the text of your reminder following a "/".

EXAMPLE: `PFM c:\dos`

EXAMPLE: `PFM  /Goodstuff Inc.`

The main menu displayed by PFM consists of several sections.

The main section of the screen in the middle to the left is a listing of the directory at the current drive/path.  This listing contains the file names, sizes of the files, date and time of last write, and the attributes of the files.  This listing is sorted in some order (the initial order is alphabetic with extensions given priority over names).  You can move the cursor to point to any entry on this screen with the cursor keys.  If you get too close to the beginning or the end, the display will scroll to show you more files in the directory (as long as there are some more).

On the top line of the screen is a list of commands which are available at the moment.  These commands are activated by hitting the highlighted letter from each command (usually the first letter) on the keyboard.  If that command works in the current situation, then it will do it's thing.  If not, or if the command key is not legal, and the key you hit is not one of your personal commands, then nothing will happen, good or bad (No, bells, buzzes or error messages here!).  Many of the commands act on the file that the cursor is next to (pointing to) allowing you to do these commands on these files with only a few keystrokes.

On the second line of the screen is the pathname of the current drive and directory.

On the last line of the screen is a set of commands which are activated by hitting the function keys (more on this later).

On the right side of the screen is some other miscellaneous information about the directory and disk drive and the date and time.

### 7 MAIN MENU SINGLE FILE COMMANDS

Following are the commands which are activated from the main menu. In general they will involve the file name that the cursor is pointing to when the command is hit.  At this point I should note that if you start something that you do not want to finish, just hit the **ESC** key.  This will get you back to the main menu.

Many of the commands require some kind of typed in response.  To make this easier, PFM supplies an initial input or saves your last input to the response to save typing.  To edit these responses see the section on LINE EDITING.

#### 7.1 Copy **FILES**

Copy the pointed file to somewhere.  If the cursor is pointing to a file, the following applies.  PFM will prompt you for a "destination".  This prompt may be answered with a complete pathname (drive, path, file, ext) or just some of these. If an element is missing, then PFM will assume the current pathname component for the missing element.  You can also use wildcards ("?" or "*") as DOS does in the file or extension portion of the pathname.  PFM behaves much like DOS in all these examples.  Other keys available are **F1** (name; same as "*" at beginning of filename), **F2** (name.ext; same as "*.*"), **F3** (current directory), **F4** (current drive), **F5** (swap drive), and **F7** (extension; same as "*" after the ".").  The PFM **F5** key allows you to use the full pathname of the most recently referred to "SWAP" directory (see **F7** key).  This option is used by hitting the **F5** key in place of a drive and path.  PFM will then automatically replace the funny character (up/down arrow) with the drive and pathname of the swap directory.

If the destination of the copy is an explicit directory (the destination string ends in "\") then the file will be placed there if the directory exists.  If the destination is not explicit, then PFM checks to see if it is a directory.  If it is, the file is copied with the same name as the source to the destination directory.  If the destination is not a directory, the file will be copied to the destination with a new file name (the last part of the destination).

In the following examples we will copy the file "test.123" from the current drive/directory "c:\exam\" to several different places;

	a:		(to a:\xxx\test.123 if last dir accessed on a: was "xxx")
	a:\		(to a:\test.123)
	\ouch		(to c:\ouch if c: does not contain a dir called ouch)
	\ouch		(to c:\ouch\test.123 if c: does contain a dir called ouch)
	\ouch\		(to c:\ouch\test.123)
	a:\*.		(to a:\test)
	a:\*.xyz	(to a:\test.xyz)
	a:\*		(to a:\test.123)
	?z*.?4?		(to c:\exam\tzst.143)
	*.*		(to itself {an error})
	**F1**		(to c:\exam\test.)
	a:**F2**		(to a:\xxx\test.123 if last dir accessed on a: was "xxx")
	a:**F3**		(to a:\exam\test.123 if directory "exam" exists on drive a:)
	**F4**\		(to c:\test.123)
	**F5**		(to a:\test.123 if the last accessed swap directory was a:\)
	**F7**		(to c:\exam\123.)

When the destination has been fully specified, a return will cause the file to be copied.  The destination file name will be displayed on the second line of the screen and a "C" will appear where the cursor was in the main part of the screen.  If an error occurs it will be displayed at the top of the screen.  Note: Since copying a file to itself would erase most of the file, PFM considers this an error and does it's best to prevent this occurrence.  PFM saves the last several copy destinations for you.  To use them, hit the uparrow and/or downarrow keys to find the one you want.

#### 7.2 Copy **DIRECTORIES**

Copy the pointed directory to somewhere.  If the cursor is pointing to a Directory when you hit "C" for copy, then the following applies.  PFM will prompt you for a "destination".  This prompt may be answered with a complete directory pathname (drive and path) or just the drive or path. If an element is missing, then PFM will assume the current pathname component for the missing element.

The entire directory will be copied from the current location to the destination.  If there are files, they will be copied.  If there are subdirectories, then they and all of their files will be copied.  Copying the special directory "." results in copying all of the files at the current directory level as well as any subdirectories.  This is especially useful for the root directory of a drive.  PFM tries to prevent you from copying into a subdirectory of the current directory (this would result in what is called infinite recursion or more likely a "disk full" error as the same files were copied deeper and deeper into the subdirectory tree).

If the destination of the copy is an explicit directory (the destination string ends in "\") then the copied directory will be placed there if the destination directory exists.  If the destination is not explicit, then PFM checks to see if it is a directory.  If it is, the source directory is copied with it's original name to the destination directory.  If the destination is not a directory, the source directory will be copied to the destination with a new name (the last part of the destination).

PFM's directory copy behaves much like the DOS XCOPY command.  Some special keys available are **F1** (dir name), **F2** (name.ext), **F3** (current directory), **F4** (current drive), **F5** (swap drive), and **F7** (extension).  The PFM **F5** key allows you to use the full pathname of the most recently referred to "SWAP" directory (see main menu **F7** key).  This option is used by hitting the **F5** key in place of a drive and path.  PFM will then automatically replace the funny character (up/down arrow) with the drive and pathname of the swap directory.  In the following examples we will copy the directory "test.123" from the current drive/directory "c:\exam\" to several different places;

	a:		(to a:\xxx\test.123 if last dir accessed on a: was "xxx")
	a:\		(to a:\test.123)
	\ouch		(to c:\ouch if c: does not contain a dir called ouch)
	\ouch		(to c:\ouch\test.123 if c: does contain a dir called ouch)
	\ouch\		(to c:\ouch\test.123)
	**F1**		(to c:\exam\test.)
	a:**F2**		(to a:\xxx\test.123 if last dir accessed on a: was "xxx")
	a:**F3**		(to a:\exam\test.123 if directory "exam" exists on drive a:)
	**F4**\		(to c:\test.123)
	**F5**		(to a:\test.123 if the last accessed swap directory was a:\)
	**F7**		(to c:\exam\123.)

When the destination has been fully specified, a return will cause the directory to be copied.  The destination directory and file name will be displayed on the second line of the screen and a "C" will appear where the cursor was in the main part of the screen.  If an error occurs it will be displayed at the top of the screen.  PFM saves the last several copy destinations for you.  To use them, hit the uparrow and/or downarrow keys to find the one you want.

Note: DOS and PFM only allow a directory tree to go to a certain depth, the depth that can be displayed in 63 characters.  In addition PFM limits the number of directories in a tree to 12 deep.  Attempts to create (via directory copy) trees deeper than this will result in PFM producing an error **8** "Insufficient memory".  The tree will be copied up to the point of failure.

For example; if the directory "c:\wxyz" contains the subdirectories

	"abcdef\ghijkl\mnopqr\stuvwx\yzabcd\efghij"

so that the total path of the last subdirectory was

 	"c:\wxyz\abcdef\ghijkl\mnopqr\stuvwx\yzabcd\efghij"

for a total depth of 7 directories and 49 characters, then copying "c:\wxyz" to the directory "d:\123456\789012\345678" will result in problems because the total depth of the combined result would be 70 characters long.  The 15 level depth could only occur if the average directory name at each level was 3 characters or less.

#### 7.3 Edit

Edit the pointed file with your editor.  PFM starts up your editor on this file name.  When you are done editing quit the edit and PFM will restart right where it left off (Neat Huh?) Note that Writeprotected or Hidden/System files may not be editable by your editor.

#### 7.4 Attribute

Change the file attributes of the file.  The attributes of a file are displayed in the main part of the screen as follows: "B" not backed up, "D" directory, "W" write protected, "S" system type, "H" hidden.  The Backup, Write protect, Hidden and System attributes may be changed.  PFM prompts you with a line as follows:

	B= W= H= S=

To add an attribute, change the "=" to a "+".  To remove an attribute change the "=" to a "", or use the "=" to leave it as it is.

#### 7.5 More

Allows operations not related to the displayed directory. Use to config PFM, edit a new file, make a new directory, or show a pathname.  See the MORE MENU section for details.

#### 7.6 Time

Change the file's date and time.  The date and time of a file are displayed in the main part of the screen.  PFM prompts you with a line as follows:

	Date/Time: 07-30-90, 12:00:00

You cannot change the date or time of a write protected file.  If a file is write protected (a "W" in the attributes column) then an error will occur.  In this case use the Attribute command to first un-protect the file.

#### 7.7 Delete **FILES** (use "D" key or "Delete" key)

Delete a pointed file.  You must answer the "Are you sure" prompt with a "Y" to actually delete the file.  If a file is write protected (a "W" in the attributes column) then an error will occur.  In this case use the Attribute command to first un-protect the file.

#### 7.8 Delete **DIRECTORIES** (use "D" key or "Delete" key)

Delete a pointed directory.  You must answer the "Are you sure" prompt with a "Y" to actually delete the directory.  If the directory contains files, an additional question is asked "Totally erase a Non-empty directory [Affirmative/Negative]?"  You must respond with an "A" if you really want to delete it.  If the directory contains any subdirectories, they will also be deleted.  Deleting the special directory "." results in deleting all of the files at the current directory level as well as any subdirectories.  Deleting the special directory ".." does nothing (for protection against unwanted deletes).

Warning: Deleting the "." directory in the root of a drive (i.e. C:\) will remove ALL of the files on the drive.  It is not possible to recover from this operation (Short of time consuming and careful use of a program like Norton Utilities).  Even with such utility, it may not be possible!

Note: even if files in the directory or subdirectory are WRITE-PROTECTED, they will still be DELETED!

Note: DOS and PFM only allow a directory tree to go to a certain depth, the depth that can be displayed in 63 characters.  In addition PFM limits the number of directories in a tree to 12 deep.  Attempts to delete (via directory delete) trees deeper than this will result in PFM producing an error **8** "Insufficient memory".  The files in the tree will be deleted up to the point of failure, continuing to delete the unfinished directories past this point will eventually allow a complete delete.

#### 7.9 cOmmand

Allows the execution of DOS commands.  PFM prompts for the text of the DOS command.  A blank entry will activate DOS until the DOS "EXIT" command is entered so that you can temporarily use DOS as you used to.  If you try to run a "TSR" (Terminate and Stay Resident) program from PFM, then PFM will have to remove it before continuing.  It will give you the following message before removing the command however;

    Error 24: TSR in memory, Hit the 'ESC' key to have PFM remove it

After hitting the ESC key PFM returns to normal operation.

When entering the command string, you can specify portions of the current (pointed to) pathname by entering on of the keys **F1** to **F4**.  Use the **F1** key for the first part of a filename, and the **F2** key for the entire file name and the **F7** key for the extension.  If you want to include the current path or drive in the command string, use the **F3** and/or **F4** keys.  The **F5** key is used to refer to the "SWAP" directory path (the last directory you looked at with the **F7** key).  If you do not want to see a "Hit any key to continue" message after the command, use the **F6** key.

When you do this, strange characters will be entered on the command line which will later be replaced by their corresponding pathname parts.  When you complete the command, PFM will execute it just as DOS would.  When the command is finished running, a message "Hit any key to continue" will appear.  When you strike a key, the system will return to PFM.  In the following examples the current drive/directory is "c:\exam", the file name is "test.asm", and the swap directory is "a:\xxx\";

* `type **F4****F3****F2**` results in `"type C:\EXAM\TEST.ASM"`
* `**F1**` results in executing the command `"TEST"`.
* `xtalk` results in executing the command `"xtalk"`.
* `masm **F1**,**F1**,**F1**;` results in `"masm TEST,TEST,TEST;"`.
* `comp **F5****F2** **F2**` results in `"comp A:\XXX\TEST.ASM TEST.ASM"`.

The command line also has the ability to remember the last several commands that you have used.  To look at and use them, use the cursor down arrow and/or up arrow to find the one you want.

#### 7.10 Go or **Enter**

Allows the execution of DOS commands.  PFM uses the name portion of the pointed file as the command.  If you try to run a "TSR" (Terminate and Stay Resident) program from PFM, then PFM will have to remove it before continuing.  It will give you the following message before removing the command however;

    Error 24: TSR in memory, Hit the 'ESC' key to have PFM remove it

After hitting the ESC key PFM returns to normal operation.

#### 7.11 Print

Print the pointed file on system printer.  The "lines per page" prompt allows you to specify a page length for files which do not have form feeds imbedded.  If your file is already paged, specify "0".  If the file has some form feeds, then setting the lines per page will insure that no page is longer than the specified amount.

If you want more than one copy of the item being printed, set the number of copies parameter to the appropriate number.  If you want a left margin added to the printout, enter the size you want in response to the "Left Margin size:" question.  PFM will show a "PRINTING" status in the upper left corner of the screen until printing is complete unless you hit another key on the keyboard.  If you do, printing halts and you are given a chance to abort or continue the printout.  (Hitting the space key is the best way to stop printing a file).

PFM expands TAB characters to every eighth column, recognizes Carriage return (CR), Line Feed (LF), and Form Feed (FF) characters.  All other characters are sent to the printer unchanged.  Note that PFM PRINT command should not be used to print files containing graphics or formatting commands from more sophisticated programs (Word processors, Spreadsheets, Windows etc.) these should only be sent to the printer directly by the package or via the DOS "copy /b file lpt1" type of command.

#### 7.12 Rename **FILES**

Change the name of the file or move file to a different directory on the same drive.  The pathname and filename syntax is the same as that for the copy command.

If the destination of the rename is an explicit directory (the destination string ends in "\") then the source file will be moved there if the destination directory exists.  If the destination is not explicit, then PFM checks to see if it is a directory.  If it is, the source file is moved with it's original name to the destination directory.  If the destination is not a directory, the source file will be moved to the destination with a new name (the last part of the destination).

#### 7.13 Rename **DIRECTORIES**

Change the name of the directory or move it to a different directory on the same drive.  The pathname and filename syntax is the same as that for the copy command.

Renaming a directory to "." has no effect.  Renaming a directory to ".." moves it one level closer to the root directory.  Trying to rename "." or ".." has no effect.

Attempting to rename (move) a directory from one drive to another is illegal; you can only rename on the same drive.  If you want to do this, use the Copy command followed by the Delete command on the source.  (Please be sure that everything worked before doing your delete!).

If the destination of the copy is an explicit directory (the destination string ends in "\") then the source directory will be moved there if the destination directory exists.  If the destination is not explicit, then PFM checks to see if it is a directory.  If it is, the source directory is moved with it's original name to the destination directory.  If the destination is not a directory, the source directory will be moved to the destination with a new name (the last part of the destination).

Note: DOS and PFM only allow a directory tree to go to a certain depth, the depth that can be displayed in 63 characters.  In addition PFM limits the number of directories in a tree to 12 deep.  Attempts to rename trees deeper than this will result in PFM producing an error **8** "Insufficient memory".  The files in the tree will be renamed up to the point of failure, continuing to rename the unfinished directories past this point will eventually allow a complete rename.

#### 7.14 Show

Displays the contents of the current file or directory on the screen.  If you are showing a directory, then you are also changing to that directory as the current directory.  See the section on SHOW for more details on showing a file.

#### 7.15 Your command

Like "O" command above, except uses your pre-configured commands.  See the More Config command section for details on how to configure your own commands.

#### 7.16 siZe **DIRECTORIES**

This command calculates the size of a directory and all of it's subdirectories.  The size is rounded to the allocated unit size of the disk, a strict addition of file sizes, would in general result in a smaller number.

#### 7.17 Quit

Exit PFM and return to DOS.  You will be prompted with "Are you Sure".

#### 7.18 Other command keys

PFM allows you to define other unused standard keys and most of the control (CTRL) keys as user definable commands.  These keys are defined from the "More Config Your command" menu with the other user commands.  When one of these keys is depressed, it will immediately activate the associated command just as though you had pressed the 'Y' command first.  For example, if the Your command list had 'W' defined as "WORD" (starting your word processor), then you could start the word processor either by pressing 'Y' and 'W', or you could start it by pressing 'W' alone.  This works with the unused alphabetic characters, numbers, punctuation marks, and control characters (except for CTRL B, J, M).  See the More Config command section for details on how to configure your own commands.

### 8 MAIN MENU SPECIAL KEYS
	
#### 8.1 Function and cursor keys

* F1: down.  This key moves the cursor (pointer) downward through the directory listing by 20 lines.
* F2: up.  This key moves the cursor (pointer) upward through the directory listing by 20 lines.
* F3: down.  This key moves the pointer downward through the directory listing by 10 lines.
* F4: up.  This key moves the pointer upward through the directory listing by 10 lines.
* F5: reread dir.  This key causes the current directory to be reread to update the screen.  This is done automatically after each PFM command unless files are marked (see MULTIFILE operations). This can be used when a disk has been changed or you are finished with any marks on the screen.  If files are marked, you will be prompted "Are You Sure".
* F6: sort.  This key allows you to resort the directory listing.  See the section on SORTING for more details.
* F7: swap display.   PFM has the ability to keep all the information about the directory that you are currently viewing (the primary display) while showing an entirely different drive or directory (the secondary display).  I call the process of saving the current display and switching to the new "swapping displays".  When you hit **F7** the first time, PFM prompts you for a new drive/path to display.  When this is done, the third line of the screen changes to reverse video to indicate that you are using the secondary display. You can do anything while the secondary display is shown that you can do normally.  To return to the primary display, hit **F7** again. When switching back, the original contents are displayed unchanged.  The last several directories that you referred to can be accessed by the cursor up and down arrows.
* F8: in/exclude.  This key toggles the include flag on an individual file.  See the MULTIFILE section for more information.
* F9: backup directory tree.  This shows the "parent" directory of the current directory (the one closer to the "root"). If you at the "root" (x:\), this just rereads the current directory.
* F10: multi.  This key is used to switch between singlefile and multifile mode.  See the MULTIFILE section for more information.
* ESC: Escape from the current operation or backup the directory tree if the menu is displayed.
* Home: The Home key goes to the beginning of the directory listing.
* End: The End key moves the pointer to the end of the directory listing.
* Up arrow: Use the cursor up arrow key to move the pointer up by one line.
* Down arrow: Use the cursor down arrow key to move the pointer down by one line.
* Right arrow: Use the cursor right arrow key to Show a file or directory.
* Left arrow: Use the cursor left arrow key to back up the directory tree (towards the root [c:\]).
* Pg Up: This key moves the cursor (pointer) upward through the directory listing by 20 lines.
* Pg Dn: This key moves the cursor (pointer) downward through the directory listing by 20 lines.
* Tab: Use the Tab key to Show a file and continue a search that was previously tried on another file (see Showfile F6, F7 keys).

#### 8.2 ALT key Name search

PFM allows you to search for a file or directory name within the currently displayed directory.  This is done by pressing the ALT key and simultaneously pressing the first few letters of the name you are looking for.  The first time this is done, PFM re-sorts the directory according to the filename order.  If there is a match, the search name is put in the header bar to allow you to add additional characters to search for.  If there is no match, then PFM will move the cursor to a point alphabetically after the search name and will return the header bar to it's normal appearance.  Note that if there are both subdirectories and files within the directory, then the search will find the first match after the current cursor location.

### 9 MULTIFILE OPERATIONS

PFM has the ability to do operations on more than one file at one time.  This I call "multifile" operation.  Multifile operation is useful for many operations.  An example of this would be to copy a group of files to another place.  In DOS, you would use the DOS "copy" command once with a wildcard filename or several times with different file names.  If the files you want to copy are not easily related by a wildcard, then typing the individual names soon gets tiresome.

In PFM, to copy these files, you can simply mark the files you want in one of several ways and then switch to multifile mode and hit "C" for the copy command.

One way of marking files is with the **F8** key.  You just move the cursor (pointer) to the file you want and hit **F8**.  This will put an asterisk "*" next to the file.  If the file is already marked, then **F8** will remove the mark.  This can be used if you have only a few files or they are very different in name.

#### 9.1 Include/Exclude

Another way to mark files is with the "Include command".  This command marks groups of files according your specification.  There is a corresponding command to un-mark files called the "eXclude command".  The excluding of files is especially useful if you want to copy everything except ".BAK" files, for example.  When you hit "I" or "X" for the include or exclude commands you will be prompted for your choice of the method to mark (un-mark) the files.

Following is a list of the choices to be had with the include or exclude commands;

##### 9.1.1 Before

This choice allows you to select files before a specified date/time.  If you select this choice, you will be prompted for the date and time.  After entering the time, you will be prompted for a wildcard ("?" or "*") filename to match against (see below).

##### 9.1.2 After

This choice allows you to select files after a specified date/time in the same manner as "Before".

##### 9.1.3 Ignore

This choice allows you to select files regardless of the date/time or attribute.  You will be prompted for a wildcard ("?" or "*") filename to match against (see below). 

##### 9.1.4 aTtribute

This choice allows you to select files depending on attributes.  You will be prompted with:

	B= W= H= S=

A "=" indicates that the particular attribute does not matter.
A "+" requires that a file have an attribute to be selected.
A "" requires that a file NOT have an attribute to be selected.

After entering the attribute selection, you will be prompted for a wildcard ("?" or "*") filename to match against (see below). 

##### 9.1.5 Oldmarks

This choice re-selects any files which were selected before the last multifile operation.  (The files marked with a ".")  Use this to do multifile operations on a group of files more than once.  For example if you want to copy a group of files to another place and then delete them from the original place, use "I", "O" for include oldmarks to remark the files for the delete operation.

##### 9.1.6 Wildcard filename

When you are prompted for the wildcard filename, you should follow the standard MSDOS wildcard name conventions.  If you want all files with the previously specified attribute, for example, use "*.*" for the wildcard.  PFM saves the last several wildcard filenames that you have used.  To reuse them, hit the up or down arrow keys to find the one you want, and hit return. 

#### 9.2 Multifile commands

The following commands operate on files which have been marked with the "include" flag (an "*" in the 1st column next to the file entry).  All of the files are done in the same operation.  If you wish to abort the operation, hit any key on the keyboard.

##### 9.2.1 Copy

Copy a group of marked files to a new destination. The destination filename MUST be an incompletely specified or wildcard type name for reasonable operation.  If not, then you would end up copying several files to the same place, writing over each other.

##### 9.2.2 Delete

Delete a group of marked files.  You must answer "Y" to the "Are You Sure" prompt.

##### 9.2.3 Attribute

Change the file attributes of the marked files. The Backup, Writeprotect, Hidden and System attributes may be changed.  To add an attribute, use a "+", to remove an attribute use "", use an "=" to leave it alone.

##### 9.2.4 Time

Change the file's date and time.  The date and time of a file are displayed in the main part of the screen.  PFM prompts you with a line as follows:

	Date/Time: 07-30-90, 12:00:00

You cannot change the date or time of a write protected file.  If a file is write protected (a "W" in the attributes column) then an error will occur.  In this case use the Attribute command to first un-protect the file.

##### 9.2.5 cOmmand

Allows execution of DOS commands on the marked files.   Use the F1 and F2 keys to indicate insertion of the filename into your command.  Do not change the current directory or default disk within your command without restoring it or PFM will get very confused.

##### 9.2.6 Print

Print the marked files.  The "lines per page" prompt allows you to specify a page size for files which do not have form feeds imbedded.  If your file is already paged, specify "0".

##### 9.2.7 Rename

Change the name on the marked files to that specified.   The new filename MUST be a wildcard type name or a new directory on the same disk.

##### 9.2.8 Your command

Like "cOmmand" above, except uses your pre-configured commands.

### 10 MORE MENU

These commands are accessed by hitting "M" on the main menu.  They are generally not related to the directory being shown.

#### 10.1 Show

This command allows selection of a new directory path and/or drive to display.  You will be prompted for the new path which does not require a trailing "\".  The last several directories that you have used are available with the cursor up and down keys.

#### 10.2 Config PFM

This command allows you to setup PFM with your own system configuration.  The editor PFM uses can be changed and you can also configure some of your own commands through here.  See the section on YOUR COMMANDS for more information on their configuration.  PFM also saves many of the "text" entries which you type while using PFM (such as old commands, copy destinations, show file search strings, etc.)  You may want to check and clean up some of these before answering 'Y' to the "OK" question at the end of the config process.  The final configuration is saved on disk (in the PFM.COM file itself) only when you answer 'Y' to the "OK" question. 

#### 10.3 Edit

This command allows you to edit a file that you specify.   Enter the file name in response to the `Pathname:' prompt.   This is useful for creating new text files with your editor.  If you specify a file on another drive or path, PFM changes to that directory before starting the editor.  This means the editor does not require an understanding of pathnames.

#### 10.4 Make new Directory (MKDIR)

This command allows the creation of a new subdirectory.   The path should not be terminated by a "\".  The new directory will be displayed.

Note: DOS and PFM only allow a directory tree to go to a certain depth, the depth that can be displayed in 63 characters.  In addition PFM limits the number of directories in a tree to 12 deep.  Attempts to create (via MKDIR) trees deeper than this may result in PFM producing an error **8** "Insufficent memory".

#### 10.5 siZe

This command calculates the size of all directories and all of their subdirectories starting from the current level.  The size is rounded to the allocated unit size of the disk, a strict addition of file sizes, would in general result in a smaller number.

### 11 SORTING

The sort command **F6** is used to sort the directory listing in some useful order.  Unless the directory is left unsorted, any subdirectories present in a directory are placed at the top of the display and any files that are marked to be included in a multifile operation are placed next.  Beyond that, the following orders are provided:

#### 11.1 Name

The directory listing is sorted in alphanumeric order with the filename given first priority.  That is, all files with the same first name will be together.

#### 11.2 Extension

The directory list is sorted in alphanumeric order with the file extension given first priority.  That is, all of the files with the same extension will be together.

#### 11.3 Size

The directory list is sorted in reverse order of file size.   The largest files will appear closest to the top of the listing.

#### 11.4 Time

The directory list is sorted in reverse order of the file date and time.  The newest files will appear closest to the top of the listing.  Files with the same time will appear in alphanumeric order with the filename given first priority.

#### 11.5 Don't sort

Files are left in their unsorted order (the order that they are on the disk.)  Since PFM default is to sort files, you must use **F5** to reread the directory in order to see the files in the original order after you first select this sort method.

### 12 PFM CONFIGURATION

To change some of the configurable items for PFM, use the "More Config" ("MC" characters) from the main PFM screen.  PFM will then put up it's title message and a prompt line asking for you to hit one of the characters **H** for help, **E** for editor name, **C** for color, **U** for cUrsor, **Y** for Your commands, or **ESC** to exit from this menu.

#### 12.1 Help

If you enter "H" a help screen will appear which will remind you how to answer the other questions and configuration information.  (To exit HELP, hit the **F10**, **Enter**, or **ESC** keys).

#### 12.2 Editor name

If you enter "E", PFM asks the name of the text editor that you generally use.

The requirements for the editor are that it be started as a ".COM" or ".EXE" file, it must accept the file to be edited as a command line input, and it must be able to locate it's own overlays and help files (if any) when they are not on the current disk or in the current directory.  The DOS editor EDLIN.COM can be used but there are many better ones available (such as PMATE, Microsoft WORD, or WordPerfect).

Enter the name and location of your editor as the example shows. Remember to type the entire pathname including drive.

EXAMPLE: `Editor pathname: C:\DOS\EDLIN.COM`

This entry specifies the editor used by PFM when you want to edit a file.

#### 12.3 Cursor configuration

If you enter a "U" for cursor, then PFM asks is whether you want to keep the original cursor provided by DOS when you return to DOS later on.  Since I happen to like a large blinking cursor (the better to find it on the screen) PFM will make the cursor that way unless you specifically answer "Y" to this question.

EXAMPLE: `Keep original cursor? (Y/N): N`

#### 12.4 Color choice

If you enter a "C" for color choice, then PFM will put up several lines of text in the current color scheme.  You are then asked if you like the scheme.  If you do, answer "Y" to the question.  PFM then uses the scheme from then on until you change it with another configuration.  If you don't like the colors, answer "N".  There are several choices of color schemes available, if you don't like any of them, pick the one you hate the least and write me a letter describing what you would like.  If you send lots of money and I am in a good mood, maybe I'll add your scheme to an upcoming version of PFM.

#### 12.5 Your commands

The remaining configuration item is "Y" for Your commands.  This refers to the setup of your own special commands.  This is described in detail in a later section (YOUR COMMANDS).  If you decide to try it now, then you can get out by just hitting the "ESC" key.

EXAMPLE: `ESC or Your command Char?  **ESC**`

#### 12.6 **ESC**, **Enter** begin normal operation

If all of the other configuration items are to your liking, then hit **ESC** or **Enter** from the menu line.  PFM then asks is if the above configuration answers are correct. The answers to all these questions and other settings will be saved with PFM if you answer "Y".  If you don't answer "Y", then the answers will only last until you quit.  (You can come back and change your mind later before you quit).

PFM will begin normal operation by displaying the sign-on advertisement.  Hit **F10**, **Enter**, or **ESC** to begin operation and PFM will display the main directory and menu screen.

Note: PFM saves several items other than those listed above when it is configured.  These include the cOmmand line stack; the Copy and Rename stack; the More Show directory and **F7** Swap directory stack; the show file Show mode, Line size, **F6** search stack, and + or - line count; the Print options; Include or eXclude options and filename stack; most recently used Attribute input, and Time/date input.  When you configure PFM, you might make sure that these are set to desirable settings because each time you restart PFM it will come up with the same settings.  If you have been working with PFM for a while and many of these settings have been changed, it might be easier to quit and restart PFM before doing the configure than to reset them.

### 13 SHOW FILE

The show file portion of PFM is one of it's best features (I think) in that you can show most any file, regardless of content.  Many files, particularly binary or executable ones, will appear as so much garbage with this utility, but even then, you can still see some interesting things.  Note: This version of PFM has some new limits on the size of the files that can be shown.  This is due to changes made to allow for word wrap.  The main limit is in the number of lines that can be viewed - the size of memory available to PFM minus about 80000.  (Your line count may vary!)  In the various modes this corresponds to different file sizes.

#### 13.1 Show file commands

Following are a list of the commands available from the Show file menu;

##### 13.1.1 Top

This command shows the file starting at the beginning.

##### 13.1.2 Bottom

This command shows the end of the file.

##### 13.1.3 Line size

This command tells PFM how many characters per line you like for the Fixed and Wrap modes.  Values less than 80 leave some space on the edge of the screen, values greater than 80 require the use of the left and right arrow keys to see the entire length of the lines.  The default line size is 80 when PFM is shipped, but this may be changed and the change saved by doing a Config PFM after the change.  The maximum line size is 254.

##### 13.1.4 Quit

This command ends Show File and returns to the PFM main menu.

##### 13.1.5 +n lines

This command allows you to move forward through the file by the number of lines that you specify.  Simply press the + key and enter the number that you want followed by a return.

##### 13.1.6 n lines

This command allows you to move backward through the file by the number of lines that you specify.  Simply press the  key and enter the number that you want followed by a return.

##### 13.1.7 Variable lines

This command displays the file in text mode, that is, CR, LF, and TAB are interpreted in the usual manner. If you select this mode, PFM will show all subsequent files in this mode until another mode is selected.  Variable lines is the default mode.  The maximum length of any line is 254 characters.  If any line is longer it wraps to the next line.  If some of those characters are Tabs, then the line may be longer than 254 on the display.  (In earlier versions of PFM, the line length was not limited or limited to 2048 characters).

##### 13.1.8 Word Wrap

This command displays the file in text mode, that is, CR, LF, and TAB are interpreted in the usual manner.  However, if the line being displayed is longer than "Line size", the last word or words are wrapped to the next line.  If there are no convenient breaks for the word wrap in the last 1/4 of the line, then the line is just cut at the end and wrapped to the next line.  If you select this mode, PFM will show all subsequent files in this mode until another mode is selected.  If you want to wrap at other than the default 80 characters, change the Line size.

##### 13.1.9 Fixed lines

This command displays the file "Line size" chars per line ignoring the meaning of the characters.  Use this mode to display binary data files or files without any carriage returns.  If you select this mode, PFM will show all subsequent files in this mode until another mode is selected.  This may be particularly useful for showing some database files with fixed record length.

##### 13.1.10 Showmode

This command allows you to change the way files are displayed.  Once you select a mode, PFM will show all subsequent files in the mode.  The available modes are:

* 7 bit ASCII codes.  This is the default mode.
* 8 bit IBMPC codes.
* 7 bit ASCII with highlight on eighth bit set and tab and space filling.  Carriage Returns and Line feeds and Nulls are displayed so that they can be easily distinguished in the text modes; in the Fixed and heX modes, only Nulls are special.

#### 13.2 Show file special keys

* ESC: This command ends Show File and returns to the PFM main menu.
* Home: This command shows the file starting at the beginning.  
* End: This command shows the end of the file.
* Down arrow: Moves the cursor down one line.
* Up arrow: Moves the cursor up one line.
* Right arrow: Move the screen window sideways to the right by eight columns to see long lines.
* Left arrow: Move the screen window sideways to the left by 8 columns.
* Pg Dn: Move the pointer forward through the file by 20 lines.
* Pg Up: Move the pointer backward through the file by 20 lines.
* F1: Move the pointer forward through the file by 20 lines.
* F2: Move the pointer backward through the file by 20 lines.
* F3: Move the screen window sideways to the left by 8 columns.
* F4: Move the screen window sideways to the right by eight columns to see long lines.
* F5: Move the screen window sideways all the way to the left.
* '/' or F6: Search for a string in the file.  You will be prompted for the search string.  The cursor will stop on the line containing the beginning of the string or the end of the file if not found.
    * In Fixed or heX modes, matching is exact.  You must enter your search string with the correct case and any other characters exactly as in the file.  The search string can include all characters from 0 to 255 decimal or 0 to FF hex.
    * In Variable or Wrapped modes, matching is case insensitive, the high bit of all characters is ignored, and a single space matches one or more tabs, spaces, or other control characters.  Do not enter control characters, or those with the high bit set, or more than one sequential space in your search string.  This would prevent PFM from finding anything.
    * If you want to enter special characters in hex, hit F1 while editing the search string and enter the numbers that correspond to the characters to be searched.  Separate additional hex inputs by a single space.  To return to ASCII entry, enter F1 or any non hex input.  Any other characters after that will be matched directly.  If you want to enter special characters in decimal, hit F4 instead of F1.
    * For example, in Fixed or heX mode, to search for the string "CR,LF,'hello',BS,Null" enter "F10d 0aF1helloF48 0".  This would be displayed as ":)0d 0a:)hello?8 0".
    * In Variable or Wrapped modes, the string "HELLO WORLD" would match "hello ",TAB,"  world", "Hello",CR,LF,TAB,"World", or 0C8h,"ELLO����",0D7h,"ORLD" (the first character of each word has high bit set).
* Tab or F7: Repeat the last Search, "+", or "-" command again.  When used for Searches, this can even be used to find a string in more than one file.  By using "Tab" in the main screen, a file will be shown and the last search repeated in a single operation.  See "Shift-Tab" below for an easy two key file search operation.
* Shift Tab: This key exits Show file and advances the cursor to the next file on the main screen.  When used with Tab this will enable easier multiple file searches for a string.

### 14 YOUR COMMANDS

PFM allows the user to configure a set of commonly used one line commands as part of itself so that lazy typists (like me) can use a one or two character sequence instead of a longer command line entry.  To use one of these sequences, hit "Y" from the main menu.  The available commands will be displayed along the right side of the screen preceded by their command characters.  To select one, just hit the appropriate command character.

If the defined command uses a character that is otherwise unused by PFM for a command, then you can also run the command by just hitting that character.  It is also possible to use control (CTRL) characters in the command list.  These are set up and used just like any other character except that they display with inverse video in the command list.

To set up or change your own "Y" commands, use the "M", "C", "Y" (More Configure Your) commands from the main menu to get to the configuration screen.  When the following line prompts, enter a command character which will go with the "Y";

	ESC or Your command Char? 

If you do not want to enter or change your own commands, hit **ESC**. Otherwise you will then be prompted for the text of your command. Enter as you would on the usual command line, including the **F1** to **F7** keys.  Delete everything on the line if you want to remove an old command.  When you are finished entering the command hit return.  If you have more commands to enter, repeat the process.  When you are done, hit **ESC** twice and you will be prompted with an "OK (Y/N)?".  Your configured commands and other changeable settings will be saved with PFM if you answer "Y" to the OK? at the end of the configuration. If you don't answer "Y", then the new settings will only last until you quit.

### 15 LINE EDITING

Whenever PFM prompts you for a response which requires more than a single character, it allows you to use the keys on the cursor pad and some others to help you change the line you are entering.  The entry fields are generally long enough for their normal use, but if you try to go beyond the end, the cursor will refuse to do it.  Input data can be entered in upper or lower case, for cOmmands the case will be preserved, for all others the entry will be converted to upper case.

#### 15.1 Special line editing keys

Following are the keys and what they do:

* Right arrow: move the cursor to the right nondestructively until the end of the current entry is reached.
* ctrl Right arrow: move the cursor to the next "word" to the right or the end of the line if this is the last word.
* Left arrow: move the cursor to the left nondestructively until the beginning of the entry is reached.
* ctrl Left arrow: move the cursor to the beginning of the previous word or the beginning of the entry if appropriate.
* Backspace: delete the character to the left of the cursor.
* Del: delete the character under the cursor.
* Ins: go into insert mode until a special character is entered.  Characters are inserted before the current cursor location.
* Tab right: move the cursor to the end of the entry.
* Tab left: move the cursor to the beginning of the entry.
* Home: move the cursor to the beginning of the entry.
* End: move the cursor to the end of the entry.
* Ctrl End: delete from the cursor to the end of the line.
* Ctrl Enter: delete from the cursor to the end of the line and return.
* Enter: take the current entry as it is.  (return does not need to be at the end of the line).
* Esc: Ignore the current entry and exit from command.
* Up arrow: For those prompts which "remember" your last several entries, this goes through them in order of age.
* Down arrow: Like the Up arrow  above, except that your next newest entry is displayed.
* Ctrl Home: For those prompts which "remember" your last several entries, this will remove all of the remembered entries (usually used before configuring to "clean house").

#### 15.2 Line editing Function Keys

The following function key usage is only applicable when entering or viewing a cOmmand, Copy, or Rename input line.

* **F1**: This produces an open face character while editing the input which will be replaced with the name portion of the pointed file.
* **F2**: This produces a closed face character while editing the input which will be replaced with the name and extension (name.ext) portion of the pointed file.
* **F3**: This produces a heart character while editing the input which will be replaced with the currently viewed directory.  The directory is listed in the lower left corner of the screen along with the drive letter.
* **F4**: This produces a diamond character while editing the input which will be replaced with the currently viewed drive.  The drive is listed in the lower left corner of the screen along with the current directory.
* **F5**: This produces a up/down arrow character while editing the input which will be replaced with the swap drive and directory.  This is listed in the lower right corner of the screen.
* **F6**: This key (only useful for commands) prevents PFM from asking for you to 'Hit any key to continue' when the command is finished executing.  It produces a paragraph character when editing.
* **F7**: This produces a club character while editing the input which will be replaced with the extension portion of the pointed file.
* **F10**: Help.  This key is actives this help screen.

The keys **F1** to **F7** will put special characters into the entry which will only be meaningful in cOmmands, Copy, and Rename.  At other times, they may cause strange errors.  Other special keys will be ignored.

### 16 ERRORS

PFM tries to make error handling as easy as possible.  If an error occurs during normal operation which DOS would let you fix and retry, PFM also lets you fix and retry or abort.  If the error is such that a retry is not reasonable, an error code is displayed and you are given a chance to look at the error help list or just to return to the menu.  Following is a list of the error codes that you might get and what they might mean.  If you get a code that is not in the list, then try looking up the code in your DOS manual (you may have a different DOS than I do).

* 1: DOS invalid function.  This shouldn't happen, contact program support.
* 2: File not found.  The disk has been changed or perhaps the editor is not present where it was configured to be.
* 3: Path not found.  Possibly invalid syntax, remember, no trailing "\" on "More MKDIR" command.
* 4: DOS error, too many files open.  See your DOS manual on system configuration. (CONFIG.SYS)
* 5: Access Denied or protection violation.  This usually means you are trying to write or delete a "writeprotected" file. Use the "Attribute" command to un-protect the file.  It can also happen with "Network" disk drives for which you have no access rights.
* 6: DOS error, Invalid file handle.  This shouldn't happen, contact program support.
* 7: DOS error, Memory control blocks destroyed.  Something has gone very wrong, you had better reboot.
* 8: DOS/PFM error, Insufficient memory for program.  When running a command, the program might work if you "Quit" PFM first to open up some more memory and then run in the old fashioned DOS way.  If you get this error in Show file, then the file is too large for PFM to completely display.  You may also get this error while doing operations on very large directories, with very large numbers of files.  You may also get this error while doing operations on very deep directory trees, if so, retry the operation on deeper portions of the tree first.
* 10: DOS error, Invalid environment.  Something has gone very wrong, you had better reboot.
* 11: DOS error, Invalid format.  Who Knows???
* 12: DOS error, Invalid Access code.  Who Knows???
* 13: DOS error, Invalid Data.  Who Knows???
* 15: Invalid Drive number specified.  You probably specified a drive letter higher than you should have.
* 16: Cannot delete the current directory.  If you really want to, first delete all the files and other directories in it first.
* 17: Cannot rename from one device to another.  The only way to do this is to copy to the other device and then delete the original.
* 18: No more files available in the directory.  That just about says it all.
* 19: No more room on the disk.  That just about says it all.
* 21: Incorrect syntax in operator entry.  PFM doesn't like the syntax of the Date/time entry or maybe of an attribute spec.
* 22: Cannot copy a file to itself.  Since this would generally destroy the file, PFM will not let you do this.
* 23: Cannot show an empty file.
* 24: Cannot load a permanent memory resident task from PFM. Some programs (like PFM) leave parts of themselves in memory all the time after they are loaded.  An example is the DOS PRINT utility. Since PFM uses memory in a simple minded way, programs such as these can not be run from PFM.  Sometimes programs such as the PRINT utility can be loaded once before starting PFM (like in an AUTOEXEC.BAT) and will then run normally when called by PFM afterwards.  PFM will remove the program from memory when you "Hit any key".
* 55: Operator abort of a disk error operation.  If you get a disk error and specify the "abort" or "ignore" choices, then you will also get this error message.  Just hit the **Esc** key and keep going.

### 17 REVISION HISTORY

The following items have changed since version 2.22 of PFM:

2.23  If screen modes are switched by a command, the message "Hit any key to continue" is not properly displayed. (fixed).

2.24  Would like to be able to rename directories.  (Directory rename added **but not Move**)

2.25  Would like to be able to refer to the other (swap) directory from where I am in the copy, rename, and command operations.  (added F5 function to Command, Copy, Rename) 

2.26  Would like a stack of directory names to refer to for F7 and More Show commands.  Would be nice if the standard default was A: though. (Added)

2.27  Would like to see PFM work right with 43 line EGA displays. (fixed [but causes problems with ATT machines, see v2.30 and v3.10]).

2.26  Disk size displayed by PFM on my optical drive (144 mbyte) is messed up.  First digit is an unusual character, last digits appear to be correct. (fixed by increasing to max of 999,999,999)

2.28  DOS gets confused following a delete operation to a write protected disk.  The displayed directory is incorrect and other strange behavior occurs.  Fixed by using Disk reset to clear DOS after an unusual error.

2.29  Don't want to hit CR after all my commands to get back to PFM.  (use F6 on command line) 

2.29  Fix problem where more than one screen full of multifile commands does not scroll up correctly.  (Fixed by correcting Mixed DOS/PFM screen handlers). 

2.30  It has been reported that some of the newer versions of PFM do not work properly with ATT machines.  The problem seems to stem from an incompatibility with the IBM standard regarding the location in memory of the size of the screen.  PFM picks up a value which is apparently not the correct number of screen rows.  To fix this problem a patch is required.  Starting with an original copy of PFM.COM or IBMPFM.COM;   !!! DO NOT ATTEMPT THIS WITHOUT SAVING YOUR ORIGINAL COPY OF PFM.  SUGGEST ONLY EXPERIENCED PEOPLE ATTEMPT THIS !!! Search for the following sequence with a debugger (DOS debug works):

	3C 19 77 03 B8 19 00 A3

Starting at the last byte (A3) change three bytes to:

	90 90 90

The sequence should now look like this: 

	3C 19 77 03 B8 19 00 90 90 90

This should force PFM to always set up the screen for 25 line mode and prevent the problems reported. 

2.31  Showing a binary file which contains many characters before the first line feed in variable line mode can take forever (especially with very large files).  The fix is to limit line length to 2048 chars in variable mode, the show then displays an error and switches to fixed mode. 

3.00  Allow F1... to be used in Copy and rename commands. 

3.00  Copying to a file that already exists but has a newer date/time PFM now asks for permission.

3.00  Allowed copy, delete, and rename of subdirectories.

3.00  Get 'Y' commands and editor pathname from old PFM when doing an update.

3.00  Added code to remove TSRs from memory following a command.

3.07  Greatly reduced PFM's memory requirement when running commands or the editor.  This was done at the expense of reloading PFM's code after the command thus slowing operations slightly.

3.07  Make Enter key run the pointed file as a command (also Go).

3.07  Added file date/time modify.

3.07  Would like a method of configuring color choice, and user settings from a file so that upgrades can be accomplished more easily.  Color choice configuration should be much easier.  (added several color schemes and method of selecting them).

3.07  PFM does not properly display disk and file size greater than 999,999,999 bytes.  This is fixed by switching to Kb displayed above this limit.

3.07  PFM does not properly show dates after year 1999.  Fixed; year 2000 now shows 01-01-00.

3.09  Would like a mode of Showfile like 'F'ixed, but where CRLFs (and TABs ?) are understood.  This would be useful for viewing crazy word processor output that has milelong paragraphs which contain no explicit CRLFs.  It would 'F'ix (wrap) the text of the paragraphs but leave other line formatting alone.  This was fixed by adding Wrap to show file.

3.09  Would like a mode of Showfile like 'F'ixed, but where the binary data is displayed in Hex.  This was fixed by adding heX to show file.

3.09  Searching for text and binary data is made easier and more robust with the Show file search command F6.

3.09  Attempts to rename a directory to a different drive are now considered errors.

3.10  Corrected bug in Time entry; corrected bug in showfile heX mode address display;

3.10  Fixed up screen size (number of rows) operations for certain partly compatible (ATT) machines.  Added screen border.

3.10  Can move directly to the file or directory by typing the first few characters of the file name with the ALT key pressed.

3.10  Allow otherwise unused letters/numbers to be configured by user. 

3.10  F8 key marks file and then moves to the next file.

3.10  Rename and Copy directory now lists each file during operation (makes it easier to see where errors occur).

3.10  Moving up/down directory tree on a single drive and between drives has been improved for better handling of the cursor; it tends to stay where you left it for each drive.  It is now possible to config and have main screen cursor to return to where it was on config.

3.10  Increase Show File line limit to depend on available memory, new limit is PFM's available memory size - ~80000 with variation for the number of files in the current directory and versions of PFM.

3.10  Make new directory leaves cursor at end of current directory.

3.10  Fixed bug where screen gets messed up following a command.

3.10  Put error checking on memory usage so that trying to display an excessive number of files doesn't crash.

3.10  Increased screen size for 'Y' command display, can now handle 3 columns.

3.11  Increased memory available for 'Y' commands and reduced the memory penalty for small numbers of 'Y' commands.

3.11  "More siZe" updates current directory size on main screen and no longer sizes the "." directory, increasing speed on slow hard disks.

3.11  Fixed failure/crash caused by doing directory operations on very deep directory trees.

3.12  Fixed failure/crash caused when working with CGA screens (bug created in PFM 3.10).

3.12  Fixed failure/crash caused when using HELP when in installation or config 'Y'our commands.

3.12  Fixed main screen polling of keyboard so that screen blanker programs can sense no activity (bug created in 3.10).

3.14  Fixed bugs that caused screen corruption in certain rare situations; fixed Alt key name search where search would not roll back to top if cursor landed on last item on screen.

3.14  Added cursor key control of directory/file show (Right arrow) and directory parent (left arrow).  Added Delete key for delete functions.  Added Tab and Shift Tab key to main screen and Showfile.

3.15  Fixed bug in directory copy which prevented copying a directory into a directory with a similar name.

3.16  Fixed a bug in the display of years on the main screen for after 1999.

### 18 IDEAS FOR FUTURE ENHANCEMENTS

If copying to a file which already exists and is marked hidden or system should not complete the copy or delete the destination file. 

Would like to add a selection mask to the show directory command, This might also include the attributes. 

Add an "update" function that allows copy of a file to a second directory only if it does not exist or is not up to date based on the time-stamp.  This would be faster that a complete copy (which does the same thing). 

Would like the swap screen to operate as a split screen, possibly full time. 

Would like a short form of directory display with more names on screen (configurable or on command) 

Status display of RAM memory. 

Would like to see the volume label displayed (in with the files ?), if it's in the directory being viewed (root).  It would also be handy to manipulate the volume label (add, rename, delete) if that's easy to do. 

If backup past root directory, show drive letters and allow selection. 

Pop-up PFM additions (can do all but edit, command) when entered (via ctrlbreak?) and can return to previous program. 

Speaking of OnScreen keyboard status, how 'bout NumLock, Scroll Lock, and Caps Lock below the date ? 

Could you add an option that allows "SHOW" to expand tabs to something other than eight.  All of my "C" programs use a tab setting of four.  This would be a big help to me and some (a few) others.

How about Long file name support under WIN NT and Win95?

I do not expect to do any major updates to this program; if anyone would like to obtain the source code for this purpose, please contact me.

### 19 NOTICE TO USERS

This is the latest release of PFM.  This and other versions are distributed via bulletin boards and other "grapevine" methods to people interested in the software package.  As I am not in the business to mass produce or market this or any other software and have no interest in doing so, I am unable to provide this program on any media directly.

If you need a copy of the program, and are not able to find it via the "grapevine", then you may send me a selfaddressed, stamped floppy mailer with an IBM compatible 3" diskette in it on which I will put the latest copy of the program and it's documentation.  I will return this to you typically within one work week of receiving it if postage, floppy, mailer, and address are all present (I once received a stamped mailer with floppy and with a letter and NO return address.  This is difficult to return.)

As an alternative, I will send via e-mail a file encoded with PKZIP and UUENCODE, if requested via e-mail to do so.

Due to this limited support, I do not expect much in the way of compensation from users.  A contribution of up to $45 from individual users will be greatly appreciated and provides incentive to continue improving the product.

The following provisions apply:

* Upgrades, automatic, onetime or otherwise are not available except as indicated above.

* I am not interested in doing customized versions of PFM.

* I would like to hear about any BUGs in the software and any suggestions for improvements (most new versions are due to this input) but will not be responsible for any consequential damages caused by bugs.

* My phone number is not listed for a good reason.

For those users who have already contributed, I am sorry if there has been any misunderstanding about the level of support offered and I thank you for your contribution.

Paul R. Culley  
11210 Olde Mint House Lane  
Tomball Tx, 77375-7029  
paulc@bangate.compaq.com
