---
layout: page
title: "PC-SIG Diskette Library (Disk #585)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0585/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0585"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS EXTENSIONS 1 OF 2 (ALSO 586)"

    An interesting series of extremely flexible and useful DOS enhancements.
    These are not meant to replace standard DOS commands, but to add
    versatility and utility as powerful supersets of these commands.
    
    Features include: multiple file names on command lines; 16 new wild
    cards; visual file selection; more useful file/system information;
    retrieval of deleted files; measurement of elapsed time of programs or
    commands, and directory sorting. These extensions can also be combined
    to create new functions or process multiple files with one command.
    
    File Descriptions:
    
    The First Disk Contains:
    REF      DOC  Documentation -- reference manual for DOS Extensions.
    LS       EXE  DOS extension -- directory lister.
    USER     DOC  Documentation -- installation and use of extensions.
    
    The Second Disk Contains:
    ATT      EXE  DOS extension -- view or change file attributes.
    WHEREIS  EXE  DOS extension -- file locator.
    VOLM     EXE  DOS extension -- view or change volume name.
    CAT      EXE  DOS extension -- concatenate files.
    ALARM    EXE  DOS extension -- sound a controllable tone.
    INP      EXE  DOS extension -- input data to a DOS pipe.
    INFO     EXE  DOS extension -- display disk, or memory information.
    GPM      EXE  DOS extension -- find text patterns in files.
    DIRSRT   EXE  DOS extension -- directory sorter.
    CP       EXE  DOS extension -- copy files.
    CMD      EXE  DOS extension -- execute programs, commands, .bat files.
    CLK      EXE  DOS extension -- elapse time of programs or commands.
    UNIQ     EXE  DOS extension -- duplicate text line handler.
    UNDEL    EXE  DOS extension -- retreive a deleted file.
    TXLAT    EXE  DOS extension -- character translator.
    TEE      EXE  DOS extension -- DOS pipe output controller.
    STAT     EXE  DOS extension -- statistical text file information.
    SLEEP    EXE  DOS extension -- pause command.
    SELECT   EXE  DOS extension -- visual selector.
    SED      EXE  DOS extension -- file editor.
    RM       EXE  DOS extension -- delete files.
    RENM     EXE  DOS extension -- rename files.
    RENDIR   EXE  DOS extension -- rename a subdirectory.
    PRNT     EXE  DOS extension -- output selected text lines of files.
    MV       EXE  DOS extension -- move files.
    MERGE    EXE  DOS extension -- merge text lines from multiple files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES585.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  585  DOS EXTENSIONS (disk 1 of 2)                         v1 DS2
---------------------------------------------------------------------------
This disk contains the User Manual, Reference Manual and one of a series of
extremely flexible and useful DOS Extensions.  These do not necessarily re-
place resident DOS commands, which can still be used as is.  Rather, they
add more versatile and powerful supersets of these commands which greatly
add to their utility.
 
LS       EXE  DOS Extension - Directory lister
REF      DOC  Documentation - Reference Manual for DOS Extensions
USER     DOC  Documentation - Manual for Installation and use of extensions
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## NOTES585.TXT

{% raw %}
```
Program name: DOS EXTENSIONS  Version 1.2
 
Author name:  Daryll Shatz
Address:      Box 3282
              Redondo Beach, Ca 90277
 
Suggested Donation:  

$35.00 gets an unregistered copy of version 2.0. Registration fee for version 
2.0 is $55 or $20 if a contribution of $35 has already been made.  Registered 
users receive the following additional items: User ID number, IBM style printed
Reference Manual, one year of free updates and bug fixes, one year's subscrip-
tion to the "EXTENSIONS" newsletter, and the option to purchase a copy of the 
source code whenever it becomes available.
 
Program Description:  

This DOS EXTENSIONS package has been designed to enhance the features and flexi-
bility of DOS by adding over twenty new commands.  All the original DOS commands
remain available, but the extensions allow the user to eliminate redundancies
and thus do more work in less time.  Through a technique called 'prefixing', 
data from multiple files can be sent through a pipe, all on one line with one
command.  

The capabilities of this extension package are impressive. The CP command re-
quires only one command to copy files with multiple selection criteria. Like-
wise, the LS (List Directory) command also allows multiple selection criteria
to locate several different file or subdirectory names at a time, and the
output of the LS Command can be piped into many other commands to add greater
control over the files being processed.  

The five additional file handling commands, MV, ATT, CAT, DIRSRT, and WHEREIS 
provide the ability to view and change file attributes, concatenate files,
extended directory sorting, and the ability to locate files across subdirec-
tories. The task control commands, SLEEP, CMD, and CLK are useful to control or
time the execution of either DOS commands or programs.

The commands INP and TEE are used to start and end a pipe and the four powerful
file editing commands, SED, TXLAT, UNIQ, and MERGE can be used to edit multiple
items among multiple files.  Finally, there are four miscellaneous commands:  
ALARM simply produces a tone under the user's control; PRNT outputs selected 
lines from files; STAT provides a useful statistical report on text files, 
and SELECT is a Filter allowing  multiple input choices, making DOS file hand-
ling much friendlier.

Disk number one has the two documentation files, which can be sent out to the
printer, and are pre-formatted to print out as useable manuals.  This disk also
contains one of the utilities. Disk number two has the rest of the utilities.
The User's manual contains instructions on installation and use. The Reference 
Manual is organized by command, with examples.

System requirements are MS or PC DOS 2.1 or better.  A system with at least 
256K is recommended.
```
{% endraw %}

## REF.DOC

{% raw %}
```










				 DOS EXTENSIONS


				REFERENCE MANUAL












			   Copyright  (c) 1985, 1986



				 Daryll Shatz
				   Box 3282
			    Redondo Beach, Ca 90277










	This  document contains information which is the property of  the
	copyright owner.  It shall not be used or duplicated, in whole or
	in  part,  in any manner without expressed written permission  of
	the copyright owner.


	This program is provided on  an  "as is"  basis without  warranty
	of any kind, expressed or  implied,  including but not limited to
	the  implied  warranties  of  merchantability and fitness  for	a
	particular  purpose.   The  entire   risk   as	 to  quality  and
	performance of this program is	with  you.   Should  the  program
	prove defective, you assume the  entire  cost  of  all	necessary
	repair, servicing, or correction.  In no event will the author be
	liable to you for any  damages,  including any lost profits, lost
	savings, or other incidental or consequential damages arising out
	of the use or inability to use this program.






	DOS EXTENSIONS




				COMMAND/FILTER SUMMARY

	---------------------------------------------------------------------


		ALARM	- Sound a controlable tone
		ATT	- View or change file attributes
		CAT	- Concatenate files
		CLK	- Measure elapse time of programs or commands
		CMD	- Execute programs, commands, or batch files
		CP	- Copy files
		DIRSRT	- Directory sorter
		GPM	- Find text patterns in files
		INFO	- Display system, disk, or memory information
		INP	- Input data to a DOS pipe
		LS	- Directory lister
		MERGE	- Merge text lines from multiple files
		MV	- Move files
		PRNT	- Output selected text lines of files
		RENDIR	- Rename a subdirectory
		RENM	- Rename files
		RM	- Delete files
		SED	- File editor
		SELECT	- Visual selector
		SLEEP	- Pause command
		STAT	- Statistical text file information
		TEE	- DOS pipe output controller
		TXLAT	- Character translator
		UNDEL	- Retreive a deleted file
		UNIQ	- Duplicate text line handler
		VOLM	- View or change volume name
		WHEREIS - File locator




								      ALARM
								    Command

	 ------------------------------------------------------------------
	 Purpose:    Sounds a definable tone at a specified time.  Tone can
		     be repeated until stopped by pressing any key.  The
		     duration of the tone is controllable.


	 Format:     ALARM [options] [parameters]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     D = Set the tone duration (default: 1 sec).

		     R = Minutes to repeat tone (default: none)

		     @ = Sound tone at specified time (default: now)

		     ? = Display help message.


	 Parameters: Duration format:
			Positive whole number from 0 to 999.  Each multiple
			of 18 equals one second.

		     Time format:
			[H]H:[M]M (in 24 hour format).

		     Repeat format:
			[M]M:[S]S



	 Type:	     Internal	 External
				   ***

	 Remarks:    Repeat cycle can terminated by pressing any key.


		     Because STDIN is redirected during piping, any data
		     in the pipe will terminate the repeat cycle.


		     Computer is not usable while alarm is waiting.


		     Returns error code of 0 if all succeed, 1 if errors.



	 ALARM

	 Examples:   (1) Sound alarm, for 20 seconds every 5 minutes, when
			 a program finishes.  The program must not output
			 anything to STDOUT:

			   program-command | ALARM -dr 360 5:00


		     (2) Sound alarm at 10:15pm:

			   ALARM -@ 22:15


		     (3) Sound alarm at 9:51am for 10 seconds:

			   ALARM -@d 09:51 180




						      ATT  (File Attribute)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    View or change file attributes of one or more files.


	 Format:     ATT [options] [new-att] [file-list]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     C = Continue on minor errors.

		     P = Prefix each file (for piping).

		     S = Suppress file list.

		     W = Write NEW-ATT value into file's attribute field.

		     ? = Display help message.


	 New-Att:    Two digit hexadecimal value representing new attribute
		     byte.  Attribute Byte format:

			[- - Arch SubDir VolLabel Sys Hidden ReadOnly]


	 File-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 Type:	     Internal	 External
				   ***


	 Remarks:    NEW-ATT values must be a hexadecimal number.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.




	 ATT

	 Examples:   (1) Look at the file attributes of SAMPLE.DOC:

			   ATT SAMPLE.DOC


		     (2) Set the file attributes of SAMPLE.DOC to value 21:

			   ATT -w 21 SAMPLE.DOC


		     (3) Look at the file attributes of all files with a
			 ".EXE", ".COM", and ".BAS" extension.  Continue if
			 any minor errors occur:

			    ATT -c *.EXE *.COM *.BAS


		     (4) Backup a set of files and change archival bit to
			 off (used to reflect no change to file since last
			 backup).  Abort if any errors:

			   LS .C | CP -f A: | ATT -w 00


		     (6) Backup all files with archival bit on (indicates
			 file was changed since last backup) and set the
			 archival bit back to off:

			   LS -a 20 *.* | CP -f A: | ATT -w 00


		     (7) Set attribute value of all files in directory
			 \TOOLS\TEST to 21 and then display the files:

			   ATT -w 21 \TOOLS\TEST\*.* | CAT





						   CAT	(Concatenate Files)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Concatenate one or more files together.  Outputs, line
		     by line of each file listed, to STDOUT.


	 Format:     CAT [options] [file-list]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     A = Ask before doing each file.  Reply Y or N.

		     C = Continue on minor errors.

		     P = Prefix each file (for piping).

		     S = Suppress file list.

		     ? = Display help message.


	 File-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 Type:	     Internal	 External
				   ***



	 Remarks:    Files will be appended in the order of FILE-LIST.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.




	 CAT

	 Examples:   (1) List the contents of a file SAMPLE.DOC:

			   CAT SAMPLE.DOC

		     (2) List the contents of all files starting with
			 the letters AC and continue if minor errors
			 occur:

			   CAT -c AC*.*

		     (3) Concatenate files A.CAT, B.CAT, and C.END into
			 a file called RESULT.TXT:

			   CAT A.CAT B.CAT C.END > RESULT.TXT

		     (4) Concatenate all files which contain the word
			 TST in their name.  Verify each file name before
			 doing the append.  Sort the lines and save the
			 result into a file called SAV.RES:

			   LS TST | CAT -a | SORT > SAV.RES




					 CLK  (CLOCK - Measure Elapse Time)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Measure the elapse time of a program or a DOS command.


	 Format:     CLK [?] [program-or-command]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     ? = display help message


	 Program-or-Command:
		     Any legal DOS commands or program names.


	 Type:	     Internal	 External
				   ***

	 Remarks:    Commands/program names containing white space must
		     be entered via keyboard.  Keyboard entry is terminated
		     by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Produces a directory listing and measure time
			 required to execute the command:

			   CLK DIR	- or -	     CLK LS *.*


		     (2) Measure the time required to compile a list of
			 programs contained in a batch command file:

			   CLK	CCALL.BAT


		     (3) Measure the time required to run programs A.PRG,
			 B.PRG, and C.PRG

			   CLK A.PRG B.PRG C.PRG





		   CMD	(Execute a Program, a DOS Command, or a Batch File)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Used in pipings to execute a programs, DOS commands,
		     or DOS Batch Files.


	 Format:     CMD [options] [count] [tasks]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     B = execute a batch file.

		     R = Number of times to execute (default: 1).

		     S = Suppress any display output.

		     ? = display help message.


	 Count:      Number of time to repeat [1 to 99999].


	 Tasks:      Any legal DOS command(s) or program name(s) or
		     single batch file name


	 Type:	     Internal	 External
				   ***


	 Remarks:    Commands/program names containing white space must
		     be entered via keyboard.  Keyboard entry is
		     terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 CMD

	 Examples:   (1) Execute a program called DOIT.EXE three times:

			   CMD -r 3 DOIT.EXE


		     (2) Execute a program called TV.ON at 10:15am:

			   SLEEP -@ 10:15 | CMD TV.ON


		     (3) Execute the DOS command BACKUP and do not output
			 anything to the screen.  Use piping:

			   INP | CMD -s

			 Keyboard entry:

			   BACKUP C:\*.* A:
			   <CTRL-Z>


		     (4) Execute the DOS batch file, BATCH.BAT, on each
			 source file, *.C, in the current directory:

			   LS .C | CMD -b BATCH.BAT

			 BATCH.BAT:

			   CC %1 -les




							    CP	(File Copy)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Copy one or more files, text or binary, from one disk
		     and/or directory to a new disk and/or directory.  New
		     files can be a different name.


	 Format:     CP [options] [from-list] to


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     A = Ask before copying each file.	Reply Y or N.

		     C = Continue on minor errors.

		     E = Do not overwrite existing files.

		     F = List each FROM-FILE copied.

		     P = Prefix each file (for piping).

		     S = Suppress file list.

		     T = List each to TO-FILE copied.

		     ? = Display help message.


	 From-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 To:	     One DOS file specification or wild cards:
			[disk][path]file-name.extension


	 Type:	     Internal	 External
				   ***



	 CP

	 Remarks:    Some part of the TO specification is required.


		     New files will be tagged with current time and date.


		     Default display is FROM and TO file specifications.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Copy files A.WP, any file starting with the letter
			 B, all files with a ".EXE" extension to disk A:

			   CP  A.WP  B*.*  *.EXE  A:


		     (2) Copy all files from path \SYS\ETC\JUNK to disk B:
			 and path \MISC\STUFF.	Ask for permission before
			 copying each file and do not over write any
			 existing files:

			   CP -ae \SYS\ETC\JUNK\*.*  B:\MISC\STUFF


		     (3) Make a copy of the file INVENT.DAT in directory
			 \ACCT\DATA and change extension of the new file
			 to SAV:

			   CP INVENT.DAT  \ACCT\DATA\.SAV


		     (4) Copy all files in the current directory to disk
			 A: and list only the from file specifications.
			 Also do not abort if minor errors occur and ask
			 permission before copying each file:

			   CP -acf *.*	A:


		     (5) Copy all files, in the current directory, to
			 disk A: which have the word "BACKUP" contained
			 somewhere in the file:

			   GPM -z BACKUP *.* | CP A:




						 DIRSRT  (Directory Sorter)
								    Command

	 ------------------------------------------------------------------
	 Purpose:    Sorts one or more directories by file name, file size,
		     file date, or file time.  Also compacts directory by
		     removing deleted file entries.


	 Format:     DIRSRT [options] directory-list


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     C = Compact but do not sort.

		     E = Sort by file extensions.

		     D = Sort by file dates.

		     S = Sort by file sizes.

		     T = Sort by file times.

		     ? = Display help message.


	 Directory-List:
		     One or more DOS directory specifications:
			[disk][path]

		     Use * or *.* to indicate the current directory.


	 Type:	     Internal	 External
				   ***



	 DIRSRT

	 Remarks:    ROOT directory can NOT be sorted.


		     Sort default is by file names.


		     This Command creates a temporary directory \%TMP$$$
		     to perform compaction.   This temp directory must not
		     be present.


		     This Command will abort on any error condition.  This
		     may leave the files split among two directories, the
		     directory being sorted and the temporary directory.
		     To recover simply correct the error condition and then
		     move all the files in the temporary directory back to
		     the directory being sorted.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Sort the current directory by file names:

			   DIRSRT


		     (2) Sort directories B:\DOS and C:\SAMPLE\DATA by
			 file dates:

			   DIRSRT -d  B:\DOS  C:\SAMPLE\DATA




					     GPM  (General Pattern Matcher)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Searches one or more files for a specified search
		     pattern.  Pattern may contain special characters and
		     can span multiple lines.  Outputs resulting matches to
		     STDOUT or a specified file.


	 Format:     GPM [options] pattern [file-list]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     C = Continue on minor errors.

		     D = Pipe data is text lines (default: file names).

		     E = Match line exactly as specified (default: match
			 pattern anywhere in the text line).

		     K = Get PATTERN from keyboard.

		     N = Output line numbers.

		     P = Prefix each file (for piping).

		     S = Suppress file list.

		     W = Output whole file if a match is found.

		     X = Output non-matched text lines only.

		     Z = List file names containing at least one match.

		     ? = Display help message.



	 GPM

	 Pattern:    String of character to match and/or the following
		     wild cards:

			[] = match any single character in the enclosed
			     series (i.e. [c-s] match any character c to s)
			?  = match any single character
			*  = match any zero or more characters
			^  = match starts at first character of the line
			$  = match ends at the end of the line


		     Precede any wild card character with a backslash (\)
		     to remove wild card effect.

		     Special characters can be specified entering the two
		     digit hex value preceded by a tilide ~ character.
		     Useful values:  space = ~20    FF	= ~0C
				     tab   = ~09    ESC = ~1B
				     CR    = ~0D    LF	= ~0A

		     Maximum of 256 characters allowed in the pattern field.


	 File-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 Type:	     Internal	 External
				   ***


	 Remarks:    Remember to account for any hidden characters like
		     CR, TABS, etc.


		     Each Carriage Return that you enter to end a line of
		     text is converted to a LF (~0A) character by DOS and
		     is, therefore, the last character of each line.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



									GPM

	 Examples:   (1) Find all the text lines containing the word
			 "FOUND" in the file called TEST.TXT:

			   GPM FOUND TEST.TXT


		     (2) Find all the text lines that don't contain the
			 word "FOUND" in the files TEST.TXT and *.BAS:

			   GPM -x FOUND TEST.TXT *.BAS


		     (3) List all files, in the current directory, which
			 have the pattern "Daryll" as the last set of
			 characters on any text line:

			   GPM -z Daryll~0A$  *.*


		     (4) Output all text lines, of any file made since
			 March 28, 1985 in the directory \LOOK, which
			 don't have the pattern "DATE" in it somewhere.
			 Output the line number and continue if minor
			 errors occur:

			   LS -d 3/28/85 \LOOK\*.* | GPM -cnx DATE


		     (5) Pipe the contains of each file, containing the
			 exact text line "PIPE ME!!" in it somewhere,
			 to a user program called ABC.MK.  Use the files
			 from directory \LOOK which end with a file
			 extension of ".TXT":

			   GPM -ew PIPE~20ME!!~0A \LOOK\*.TXT | ABC.MK


		     (6) Pipe text lines into GPM and output only the
			 lines containing the word "PASS" as the first
			 characters of the line.  Sort the lines and
			 make a file, called RS.T, containing only one
			 copy of any duplicate lines:

			   CAT *.* | GPM -d PASS | SORT | UNIQ -d > RS.T


		     (7) Find the names of any files which do not contain
			 a star (*) character in the file:

			   GPM -zx \*  *.*





							  INP  (Pipe Input)
								     Filter

	 ------------------------------------------------------------------
	 Purpose:    Allows multiple lines to be input to a DOS pipe.


	 Format:     INP [option]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     ? = Display help message.


	 Type:	     Internal	 External
				   ***


	 Remarks:    This filter is useful when trying to input lines of
		     information into a DOS pipe since any white space
		     characters typed on the command line will terminate
		     the information.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Input a list of file names to a pipe:

			   INP | pipe-commands...

			 Keyboard entry:

			   FILES.C
			   ACCT.DAT
			   *.EXE
			   <CTRL-Z>


		     (2) Input text lines to a pipe:

			   INP | pipe-commands...

			 Keyboard entry:

			   This is text line one
			   This is text line two
			   This is text line three
			   <CTRL-Z>





		       INFO  (Display Disk, System, and Memory Information)
								     Filter

	 ------------------------------------------------------------------
	 Purpose:    Displays disk, system, and memory information.


	 Format:     INFO [options] [disk]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     D = Display disk information.

		     M = Display memory information.

		     S = Display system information.

		     ? = Display help message.


	 Type:	     Internal	 External
				   ***


	 Remarks:    Consult DOS manual on meaning of information provided.

		     Available memory is all memory above DOS.	Use the
		     DOS Command CHKDSK for usable memory amount.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Display information about the system:

			   INFO -s


		     (2) Display information about disk drive A:

			   INFO -d A:





						  LS  (List Directory Names)
								     Command

	 -------------------------------------------------------------------
	 Purpose:    Produces a list of file names, file information, and/or
		     directory statistics, to STDOUT, based on specified
		     criterion.  Criterion include any combination of file
		     name patterns, dates, times, attributes, and size.


	 Format:     LS [options] [parameters] [file-list]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     A = Match file attribute byte (default: hex 20).

		     D = Match file date (default: any date).

		     E = Match exactly as specified (default: match
			 search-pattern anywhere in the name).

		     L = Display file information (long format).

		     N = Disable file names and information.

		     S = Match file size (default: any size).

		     T = Match file time (default: any time).

		     V = Display file count and total file byte size.

		     X = Display non-matches only.

		     ? = Display help message.



	 LS

	 Parameters: Attribute format:

			[- - Arch SubDir VolLabel Sys Hidden ReadOnly]

		     Date format:  C[M]M/[D]D/YY[YY]
			where:	C = L for less than
				    E for equals to
				    G for greater than
			       MM = month  DD = day  YYYY = year

		     Size format:  C[#####]#
			where:	C = L for less than
				    E for equals to
				    G for greater than
			   ###### = byte number

		     Time format:  C[H]H:/[M]M	(24 hour format)
			where:	C = L for less than
				    E for equals to
				    G for greater than
			       HH = hour  MM = minute


	 File-List:  One or more DOS file specifications:
			[disk][path][file-names][file-extensions]

		     Wild cards:
			[] = match any single character in the enclosed
			     series (i.e. [c-s] match any character c to s)
			?  = match any single character
			*  = match zero or more characters
			^  = match starts at first character of the line
			$  = match ends at the end of the line


		     Precede any wild card character with a backslash (\)
		     to remove wild card effect.



	 Type:	     Internal	 External
				    ***


	 Remarks:    Keyboard entry of is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



									  LS

	 Examples:   (1) List all files in current directory and show a
			 count of the files and the total of file sizes:

			   LS -v *.*


		     (2) List all files in directory \SYS\WP which have
			 a file size of less than 10000 bytes:

			   LS -s L10000 \SYS\WP\*.*


		     (3) List all files, in the current directory, which
			 have an R, S, or T as the first character of the
			 file name and an file attribute of 21 hex:

			   LS -a 21 ^[R-T]


		     (4) Input, to a pipe, a list of files which do not
			 contain a "TST" in it somewhere and which was
			 not made after 9:15am, and before May 21, 1985:

			   LS -dtx L5/21/1985 G9:15 TST | pipe-commands...

		     (5) Backup all files with a date of March 8, 1985
			 and a file attribute of 20 hex.  Set the file
			 attribute to 00 hex after backup is made:

			   LS -da E3/8/85 20 *.* | CP -f A: | ATT -w 00


		     (6) Produce a sorted list of all files contained in
			 the directory \SYS\BASIC which have an extension
			 of ".BAS":

			   LS \SYS\BASIC\*.C | SORT


		     (7) Show all subdirectories off the current directory:

			   LS -a 10 *





								      MERGE
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Merges specified text lines from one or more files
		     with one or more pre-formatted files (called Control
		     Files) and outputs the result to STDOUT. Control Files
		     contain normal text and one or more merge indicators
		     (called Merge Markers) which specify the file name and
		     line numbers of a file to merge with the Control file.


	 Format:     MERGE [option] [out-file] [control-list]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     C = Continue on minor errors.

		     F = Force output to OUT-FILE.

		     P = Prefix each file (for piping).

		     ? = Display help message.


	 Out-File:   One DOS file specifications:
			[disk][path]file-name.extension


	 Control-list:
		     One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]



	 MERGE

	 Type:	     Internal	 External
				   ***


	 Remarks:    Merge Marker format:

			%MERGE file-specification start-line end-line%


		     Where file-specification:

			[disk][path]file-name.extension


		     Merge Markers are replaced by the requested text
		     lines if any text lines are found between the start.
		     and end line numbers specified.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



								      MERGE

	 Examples:   (1) Merge file NAMES.LST, which contains names and
			 address of computer owners, into a file called
			 LETTER.LET.  Print the combined files:

			   NAMES.LST looks like:

				Daryll Smith
				123 Main Street
				Oak View, CAL 90123
				DEC Rainbow 100
				<CTRL-Z>

			   LETTER.LET looks like:

			      %MERGE NAMES.LST 1 3%;

			      Dear %MERGE NAMES.LST 1 1%;

			      Thank you for your comments about our
			      new %MERGE NAMES.LST 4 4% version of the
			      DOS Extensions.
			      <CTRL-Z>

			 Command:

			   MERGE LETTER.LET | TEE -fos TMP | PRINT TMP


		     (2) Add a set of header lines to all files, in the
			 current directory, with file extensions of ".C":

			   HEADER.C file looks like:

			      /*
			      **    This is a header file
			      */
			      line four information
			      line five information
			      .
			      .
			      last line to be included in merger
			      <CTRL-Z>

			   *.C files looks like:

			      maybe some text lines here
			      %MERGE HEADER.C 4 999%
			      rest of text here
			      <CTRL-Z>

			Command:

			   MERGE -p *.C | TEE -os






							   MV  (Move Files)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Move one or more files from one directory to a new
		     directory.  Files can be either text or binary.  New
		     files can be a different name but must be on the same
		     disk.


	 Format:     MV [options] [from-list] [to]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     A = Ask before moving each file.  Reply Y or N.

		     C = Continue on minor errors.

		     F = List each FROM-FILE copied.

		     O = Overwrite existing files.

		     P = Prefix each file (for piping).

		     S = Suppress file list.

		     T = List each TO-FILE copied

		     ? = Display help message.


	 From-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 TO:	     One DOS file specifications:
			[disk][path]file-name.extension



	 MV

	 Type:	     Internal	 External
				   ***


	 Remarks:    Some part of the TO specification is required.


		     Default output is both from and to file specifications.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Move file called C:THIS.FIL to disk C:THAT.FIL:

			   MV C:THIS.FIL  C:THAT.FIL


		     (2) Move all files from path \SYS\ETC\JUNK to path
			 \MISC\STUFF.  Verify each file before moving
			 and do not over write any existing files:

			   MV -av \SYS\ETC\JUNK\*.*  \MISC\STUFF


		     (3) Move all files in the current directory to \NEW
			 and list only the from file specifications.
			 Also do not abort if minor errors occur and ask
			 permission before moving each file:

			   MV -acf *.*	\NEW


		     (4) Move a file called ABDS.SDF from the current
			 directory to directory \NEW\DATA.  Overwrite the
			 file (if it exists) in the new directory:

			   MV -o ABDS.SDF \NEW\DATA




							PRNT  (Print Lines)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Print one or more selected lines (or pages) of one or
		     more files to STDOUT.


	 Format:     PRNT [options] [page-size] range-list [file-list]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     C = Continue on minor errors.

		     D = Define lines per page & work with pages
			 (default: lines)

		     F = Output a form feed character <FF> after
			 each file.

		     S = Suppress file list.

		     P = Prefix each file (for piping).

		     ? = Display help message.


	 Page-Size:  Any number from 1 to 999.	A zero counts form feed
		     characters (hex 0C).


	 Range-List: One or more line/page numbers and/or start and end
		     line/page number pairs separated by commas.

		     Start and end pairs consist of a number, then a (-)
		     dash, and then a second number.  (example: 23-79).


	 From-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]



	 Type:	     Internal	 External
				   ***



	 PRNT

	 Remarks:    Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Print lines 1 through 34 and 66 of file CAT.C:

			   PRNT 1-34,66 CAT.C


		     (2) Print all lines after the 10th line of SAMPLE:

			   PRNT 11-9999 SAMPLE


		     (3) Print pages 20 through 43 of a 55 line per page
			 file called REPORT.DOC and sort and remove all
			 duplicate lines:

			   PRNT -d 55 20-43 REPORT.DOC | SORT | UNIQ -d


		     (4) Print all lines of files A.DOC, B.DOC, and C.DOC:

			   PRNT 1-* A.DOC B.DOC C.DOC




					      RENDIR  (Rename Subdirectory)
								    Command

	 ------------------------------------------------------------------
	 Purpose:    Renames a DOS subdirectory.


	 Format:     REDIR [options] old-name new-name


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     ? = Display help message.



	 Old-Name:   One DOS file specification:
			[disk][path][subdirectory-name]


	 New-Name:   One Subdirectory specification:
			[Subdirectory-name]


	 Type:	     Internal	 External
				   ***


	 Remarks:    This command only process one rename.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Rename the current subdirectory, "OLDDIR", to
			 "NEWDIR":

			   RENDIR  OLDDIR  NEWDIR


		     (2) Rename subdirectory "TESTDIR", on drive A:, with
			 path "\SYS\ETC\" to "SAMPLEDIR":

			   RENDIR  A:\SYS\ETC\TESTDIR  SAMPLEDIR





						       RENM  (Rename Files)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Rename one or more files.	Files can be either text or
		     binary.  Old file and corresponding new file must be
		     on the same disk.


	 Format:     RENM [options] [old-list] [rename-template]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     A = Ask before renaming each file.  Reply Y or N.

		     C = Continue on minor errors.

		     F = List each OLD-FILE name.

		     O = Overwrite existing files.

		     P = Prefix each file (for piping).

		     S = Suppress file list.

		     T = List each NEW-FILE name.

		     ? = Display help message.



	 Old-List:   One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 Rename-Template:
		     One file specifications:
			[disk][path][file-name][file-extension]


	 Type:	     Internal	 External
				   ***




	 RENM

	 Remarks:    Some part of the RENAME-TEMPLATE is required.


		     Default display is OLD and NEW file specifications.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Rename a file called C:THIS.FIL to disk C:THAT.FIL:

			   RENM C:THIS.FIL  C:THAT.FIL


		     (2) Rename all files from path \SYS\ETC with a file
			 extension of ".C" to ".TMP".  Verify each file
			 before renaming and do not over write any
			 existing files:

			   RENM -av \SYS\ETC\JUNK\*.C  .TMP


		     (3) Rename all files in the current directory to have
			 a file extension of ".CHG" and list only the old
			 file specifications.  Also do not abort if minor
			 errors occur and ask permission before renaming
			 each file:

			   LS -s G1000 ^ACC | RENM -a




							 RM  (Remove Files)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Remove one or more files.	Files can be either text or
		     binary.


	 Format:     RM [options] [file-list]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     A = Ask before doing each file.  Reply Y or N.

		     C = Continue on minor errors.

		     P = Prefix each file (for piping).

		     S = Suppress file list.

		     ? = Display help message.


	 File-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 Type:	     Internal	 External
				   ***


	 Remarks:    It is strongly recommended that the A (ask) option
		     always be used to avoid mistakes.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 RM

	 Examples:   (1) Remove the files C:THIS.FIL and B:*.*:

			   RM C:THIS.FIL  B:*.*


		     (2) Remove all files from path \SYS\ETC with a file
			 extension of ".C" or ".TMP".  Verify each file
			 before removing:

			   RM -a \SYS\ETC\*.C  \SYS\ETC\.TMP


		     (3) Remove all files in the current directory that
			 begin with the characters "ACC" and have a file
			 size greater than 1000 bytes.	Verify each file
			 before removing:

			   LS -s G1000 ^ACC | RM -a




						       SED  (Stream Editor)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    General purpose editor for use on one or more files.
		     Each file is passed through a list of edit commands
		     (called the Edit-List) which can perform add, modify,
		     and/or delete activities on the original files.  The
		     results are output to STDOUT only.


	 Format:     SED [options] [input-file] [edit-list] [file-list]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     C = Continue on minor errors.

		     D = Pipe data is text lines (default: file names).

		     F = Get EDIT-LIST from INPUT-FILE.

		     K = Get EDIT-LIST from keyboard.

		     L = Display list of edit commands.

		     S = Suppress file list.

		     P = Prefix each file (for piping).

		     ? = Display help message.


	 Input-File: One DOS file specification:
			[disk][path]file-name.extension


	 Edit-List:  See edit commands.


	 File-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 Type:	     Internal	 External
				   ***



	 SED

	 Remarks:    Edit-List commands are case sensitive.  The upper
		     case commands work on lines while the lower case
		     commands work on characters.  Any command not
		     restricted to lines or characters will accept
		     either case.


		     The Edit-List commands (A,F,G,I,J, and R), which
		     operate on strings use the first character, after
		     the command, as the string delimiter (start and end
		     markers).	The forward slash (/) character is used
		     in the examples below but any character will do.


		     Edit-List entry via keyboard entry is terminated by
		     an end-of-file-mark <CTRL-Z>.


		     Maximun of 256 characters in the edit-list allowed.
		     Maximun of 4096 characters allowed in the Buffer.


		     Returns error code of 0 if all succeed, 1 if errors.




						    SED  Edit-List Commands

	 ------------------------------------------------------------------

	 WRITE:   A/sss/      = output characters until string sss is found
		  W###	      = output next ### lines
		  w###	      = output next ### characters


	 INSERT:  I/sss/      = output string sss


	 MODIFY:  R/old/new/  = replace next occurrence of string old with
				string new
		  G/old/new/  = replace all occurrences of string old with
				string new

				(note: any command following the G command
				       will not be executed)


	 DELETE:  J/sss/      = jumpto next character after string sss
		  D###	      = delete next ### lines
		  d###	      = delete next ### characters


	 BUFFER:  B###	      = output & buffer next ### lines
		  b###	      = output & buffer next ### characters
		  C###	      = delete & buffer next ### lines
		  c###	      = delete & buffer next ### characters
		  P	      = paste (output) contents of buffer


	 MISC:	  [###ccc]    = repeat the enclosed ccc list of
				edit commands ### times.
		  L	      = output a new line (LF) character
		  F	      = output a form feed (FF) character
		  S###	      = output ### space characters
		  Q	      = quit this file without finishing
		  E	      = output rest of file as is



	 SED

	 Examples:   (1) Edit file C:\WP\A.DOC to add "INSERT-THIS<CR>"
			 after the tenth line.	Also replace the first three
			 occurrences of "CAT" with "DOG" and output the rest
			 of the file as is:

			   SED W3I/INSERT-THIS/L[3R/CAT/DOG/]E C:\WP\A.DOC


		     (2) Edit all files, in the current directory, such
			 that the first occurrence of the words "OLD WORDS"
			 are changed to "NEW WORDS" and add the phrase
			 "Version 2" after the line "Release goes here".
			 Output rest of the files as is.  Get the edit-list
			 from the keyboard and overwrite the original files
			 with the edited result:

			   LS *.* | SED -pk | TEE -o

			 Keyboard entry:
			      R/OLD WORDS/NEW WORDS/
			      A/Release goes here
			      /I/Version 2/E
			      <CTRL-Z>

			   (note that keyboard entry can have imbedded CR,
			    spaces, and special characters within strings.)


		     (3) Edit the file SMP.TXT to move the second and third
			 lines after the first occurrence of the phrase
			 "PLACE HERE".  Delete the next five characters,
			 insert a form feed character, and then write three
			 characters form the original file.  End without
			 outputting anything else:

			   SED W1C2J/PLACE~20HERE/Pd5Fc3Q  SMP.TXT


		     (4) Edit the file A.DOC to copy the second and third
			 lines after the first occurrence of the phrase
			 "PLACE HERE".  Copy the rest of the original file
			 as is:

			   SED W1B2J/PLACE~20HERE/PE  A.DOC


		     (5) Edit the file C:HACK.DTS to insert the prefix
			 string at the front of the file:

			   SED -p H00I"C:HACK.DTS"LE C:HACK.DTS | TEE -o

			 (note that the double quote character (") was
			  used to mark the start and end of the insert
			  string)




						  SELECT  (Visual Selector)
								     Filter

	 ------------------------------------------------------------------
	 Purpose:    Allows visual selection of multiple lines of data.


	 Format:     SELECT [width-count] [title]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     M = Monochrome Card

		     T = Title

		     W = Width (Number of Columns)

		     ? = Display help message.


	 Type:	     Internal	 External
				   ***


	 Remarks:    DOS 3.x owners should rename the DOS function
		     SELECT.COM as that name conflicts with this Filter.


		     Maximun number of columns is 5.  Maximun number of
		     pages is 1 for Monochrome and 3 for Color card.


		     A blinking letter P will appear next to the page counter
		     if there is more items than the Filter can handle.


		     Returns error code of 0 if all succeed, 1 if errors.




	 SELECT Commands

	 ------------------------------------------------------------------

	 Cursor Movement:

		  HOME	-  Go to page one, column one, first item.

		  END	-  Go to last page, last column, last item.

		  PgUp	-  Go to previous page (if exists), same column,
			   same item.

		  PgDn	-  Go to next page (if exists), same column,
			   same item.

		  UP	-  Go to previous item (if any) and previous page
			   and/or column (if needed).

		  DOWN	-  Go to next item (if any) and next page and/or
			   column (if needed).

		  LEFT	-  Go to previous column (if any), previous page
			   (if needed), same item.

		  RIGHT -  Go to next column (if any), next page (if
			   needed), same or last item.


	 Selecting Items:

		  INS	-  (YES)  Selects current item for output.

		  F1	-  (YES)  Selects current item for output.

		  DEL	-  (NO)   Deselects current item.

		  F2	-  (NO)   Deselects current item.


	 Done:

		  ENTER -  Output selected items



								     SELECT

	 Examples:   (1) Visually select files from the current directory,
			 to be copied to disk B:

			   LS *.* | SELECT | CP B:


		     (2) Visually select files to remove in the directory
			 \DOS.	Include a title:

			   LS \DOS\*.* | SELECT -t RM_DOS_FILES| RM


		     (3) Visually select data lines produced by PROGRAM1
			 and pipe them into PROGRAM2.  Use 2 columns to
			 display data lines:

			   PROGRAM1  |	SELECT -w 2  |	PROGRAM2





								      SLEEP
								    Command

	 ------------------------------------------------------------------
	 Purpose:    Causes computer to pause for a specified number of
		     seconds or until a specified time.


	 Format:     SLEEP [options] time


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     @ = Sleep until a given time (default: now).

		     ? = Display help message.


	 Time:	     @time:
			HH:MM  (in 24 hour format).

		     Pause time:
			positive whole number of seconds less than 999.


	 Type:	     Internal	 External
				   ***


	 Remarks:    When @ options not used, parameter must contains
		     the number of seconds to sleep (pause).


		     Computer is not usable while sleeping.


		     This command may be used us a filter but will not
		     pass file prefix information.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 SLEEP

	 Examples:   (1) Sleep for 20 seconds when run a program:

			   SLEEP 20 | program-name

		     (2) Run a program at 10:15pm:  (see cmd command)

			   SLEEP -@ 22:15 | program-name




					   STAT  (Statistics of a Text File)
							    Command / Filter

	 -------------------------------------------------------------------
	 Purpose:    Produces a separate report, to STDOUT, for one or more
		     text files.  Report consists of the following:
			total number of lines
			total number of words
			total number of characters
			total number of printable characters
			total number of control characters
			total number of alpha characters
			total number of digit characters
			average number of words per line
			maximum number of words per line
			average number of characters per line
			maximum number of characters per line

		     If a search character is specified, the total number
		     found will be included.


	 Format:     STAT [options] [search-character] [file-list]


	 Option:     Option indicator (-) followed by one or more of
		     the following characters:

		     C = Continue on minor errors.

		     P = Prefix each file (for piping).

		     S = Count SEARCH-CHARACTER.

		     ? = Display help message.


	 Search-Character:
		     Any single character to search for.

		     Special characters can be specified using a two
		     digit hex value preceded by a tilide ~ character.
		     Useful values:  space = ~20    FF	= ~0C
				     tab   = ~09    ESC = ~1B
				     CR    = ~0D    LF	= ~0A


	 File-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]



	 STAT

	 Type:	     Internal	 External
				   ***


	 Remarks:    This command may be used us a filter but will not
		     pass file prefix information.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Produce statistics for the text file SAMPLE.TXT:

			   STAT SAMPLE.TXT


		     (2) Produce statistics for the files \SYS\FILE1,
			 \WP\*.DOC, and A:LETTER.*.  Count all occurrences
			 of the comma character.  Continue if any minor
			 errors occur:

			   STAT -cs , \SYS\FILE1 \WP\*.DOC A:LETTER.*




									TEE
								     Filter

	 ------------------------------------------------------------------
	 Purpose:    Used in piping command strings to write pipe data to
		     one or more files as well as to STDOUT.  Pipe data
		     must contain at least one file prefix.



	 Format:     TEE [options] [out-file]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     A = Append data if file already exists.

		     F = Force output to OUT-FILE.

		     N = List file names.

		     O = Overwrite existing files.

		     T = Output text lines to STDOUT.

		     ? = Display help message.


	 Out-File:   One DOS file specification:
			[disk][path]file-name.extension


	 Type:	     Internal	 External
				   ***


	 Remarks:    The O (overwrite) option will destroy the original
		     file(s) - so be careful!  Create a backup or test
		     pipe commands before using this filter.


		     Unless the F (force) option is used, the command or
		     filter before the TEE must use the P (prefix) option.


		     The format of file prefixing is the hex character
		     FF followed by the file specification on the first
		     line.



	 TEE

	 Examples:   (1) Produce a new file called SAMPLE.NEW from lines
			 2 and 30 through 45 of file called SAMPLE.TXT:

			   PRTL 2,30-45 SAMPLE.TXT | TEE -of SAMPLE.NEW

			   (note prefix (p) option not required here!)


		     (2) Rewrite a set of files, in the current directory
			 so that all duplicate line are removed.  Suppress
			 output to the screen (STDOUT):

			   CAT *.TXT | UNIQ -p | TEE -o


		     (3) Edit a file, DIR.LST, to change any lines which
			 contain "DA" to "AD" and append the changed lines
			 to the end of the same file.  Display all lines
			 on the screen (STDOUT):

			   SED -p G"DA"AD" DIR.LST | TEE -at


		     (4) Edit all files in the current directory to change
			 all ocurrences of CAT to DOG.	Create a backup of
			 each file, in the directory \SAFETY, and overwrite
			 the original files.  List each of the file names
			 to STDOUT:

			   LS | CP -f \SAFETY | SED -p G/CAT/DOG/ | TEE -o





					      TXLAT  (Translate Characters)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Translates one or more individual characters of one or
		     more files and outputs the result to a specified file
		     or to STDOUT.  Any character value (between hex value
		     00 and FF) can be used.  A list of characters to be
		     translated (called the Search-List) and a list of
		     corresponding translations (called the Translate-List)
		     controls the translation action.


	 Format:     TXLAT [options] [out-file] search-list translate-list
			   [file-list]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     C = Continue on minor errors.

		     D = Pipe data is text lines (default: file names).

		     F = Force output to OUT-FILE.

		     P = Prefix each file (for piping).

		     S = Suppress file list.

		     ? = Display help message.


	 Out-File:   One DOS file specification:
			[disk][path]file-name.extension

	 Search-List:
		     Any list of single characters to search for.  At
		     least one character must be present.


	 Translate-List:
		     Any list of single characters to replace the
		     corresponding character (by position) in the Search
		     List.  At least one character must be present.


	 File-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]




	 TXLAT

	 Type:	     Internal	 External
				   ***


	 Remarks:    Both the SEARCH-LIST and the TRANSLATE-LIST must
		     be present with at least one item in each list.


		     Special characters can be specified by entering a two
		     digit hex value preceded by a tilide ~ character.
		     Useful values:  space = ~20    FF	= ~0C
				     tab   = ~09    ESC = ~1B
				     CR    = ~0D    LF	= ~0A


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Translate the characters "a" to "A" and "!" to
			 "#" in the file, SAMPLE.DOC:

			   TXLAT a! A# SAMPLE.DOC


		     (2) Translate all spaces in all files, in the
			 current directory, to form feeds.  Overwrite the
			 original files and do not abort if minor errors
			 occur:

			   TXLAT -p ~20 ~0C *.* | TEE -o


		     (3) Translate all occurrences of a dollar sign ($),
			 in the file AMER.DOC, into a British Pound sign
			 and put the result in the file ENGLND.DOC:

			   LS AMER.DOC | TXLAT ~20 ~9C | TEE -f ENGLSH.DOC

					    -  or  -

			   TXLAT -f ENGLSH.DOC ~20 ~9C	AMER.DOC




					   UNDEL  (Retrieve a Deleted File)
								    Command

	 ------------------------------------------------------------------
	 Purpose:    Retrieves a deleted file provided the file has not
		     been over-written or damaged.


	 Format:     UNDEL [options] target-file


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     L = List cluster numbers.

		     P = Update primary FAT table only.

		     S = Select clusters manually by displaying first
			 sector of each available cluster.

		     T = Test - do not update disk.

		     ? = Display help message.


	 Target-File:
		     One DOS file specification:
			[disk][path]file-name.extension


	 Type:	     Internal	 External
				   ***

	 Select Input:
		     Y = yes	(select this cluster)
		     N = no	(skip to next cluster)
		     E = end	(keep any selected cluster)
		     A = abort	(do not retrieve file)



	 UNDEL

	 Remarks:    This Command can destroy all or part of your disk!
		     Make a complete backup before using this Command.


		     This Command can not retrieve a file that was over-
		     written or damaged.


		     If more than one file has been deleted, the chances
		     of recovery are slim.  Try the S option or try to
		     recover each file in the reverse order of deletion.


		     The S (Select Manually) option can only help if the
		     TARGET-FILE is a text (ASCII) file.  The E and N
		     inputs to the select prompt can be used to retrieve
		     parts of a file, but be sure to run the DOS CHKDSK
		     Command to clean things up if you use them.


		     Do not use this Command on non-standard disks.


		     DOS maintains two FAT tables (a list of where each
		     file is located on disk).	As of DOS 3.1, the second
		     table is not used and thus can be used as a backup.
		     Should this second FAT table be used by future DOS
		     Commands, the P (Update Primary Only) option should
		     not be used.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Recover a deleted file called "LOST.HLP":

			   UNDEL  LOST.HLP


		     (2) Recover a deleted file called "LOST.HLP" that
			 was at A:\WRK\SYS.  Display all cluster numbers
			 used to restore the file:

			   UNDEL -l  A:\WRK\SYS\LOST.HLP


		     (3) Recover a deleted file called "FIND.ME" but
			 manually select each cluster (section of the
			 file) and update only the primary FAT table:

			   UNDEL -ps  FIND.ME


		     (4) Test if a deleted file called "GONE.S" could
			 be recovered but do not recover it yet:

			   UNDEL -tl  GONE.S




						  UNIQ	(Unique Text Lines)
							   Command / Filter

	 ------------------------------------------------------------------
	 Purpose:    Scans one or more files, individually, for duplicate
		     text lines.  Duplicate lines (or non-duplicate lines)
		     are output to a file or STDOUT.


	 Format:     UNIQ [options] [out-file] [skip] [file-list]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     C = Continue on minor errors.

		     D = Pipe data is text lines (default: file names).

		     F = Force output to OUT-FILE.

		     K = Number of characters to skip, on each line,
			 before starting comparison.

		     P = prefix each file (for piping)

		     S = Suppress file list.

		     X = Output only the duplicate lines.

		     ? = Display help message.


	 Out-File:   One DOS file specification:
			[disk][path]file-name.extension


	 Skip:	     Positive whole number indicating which column to
		     start comparsion.	Zero is first position.


	 File-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 Type:	     Internal	 External
				   ***



	 UNIQ

	 Remarks:    Duplicate text lines must follow each other.  If in
		     doubt, use the DOS Sort filter prior to using this
		     command/filter.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Uniq (remove duplicate lines) from a file called
			 SAMPLE.DOC:

			   UNIQ SAMPLE.DOC


		     (2) Uniq two files, A.DOC and B.DOC, and overwrite
			 the results onto the original files:

			   SORT A.DOC | SORT B.DOC | UNIQ -p | TEE -o


		     (3) Uniq all files, in the current directory, which
			 have ".DOC" extensions and are older than August
			 24, 1985.  Output only the duplicate lines and
			 continue minor error occur:

			   LS -d L24/08/85 *.* | UNIQ -xc


		     (4) Uniq duplicate lines in the file SAMPLE.DOC.
			 Ignore the first six characters of each line in
			 the comparsion:

			   UNIQ -k 6 SAMPLE.DOC




				    VOLM  (View or Change Disk Volume Name)
								    Command

	 ------------------------------------------------------------------
	 Purpose:    View or change disk volume name.


	 Format:     VOLM [options] [disk] [new-vol-name]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     W = Write NEW-VOL-NAME onto disk.

		     ? = Display help message.


	 Disk:	     One DOS disk specification:
			[disk]


	 NEW-VOL-NAME:
		     One DOS disk volume name [1 to 11 characters]


	 Type:	     Internal	 External
				   ***



	 VOLM

	 Remarks:    Duplicate of DOS 3.0 VOL Command.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 Examples:   (1) Display volume name of disk A:

			   VOLM -d A:


		     (2) Change volume name of disk C:

			   VOLM -d C: NEW-NAME




						    WHEREIS  (File Locator)
								    Command

	 ------------------------------------------------------------------
	 Purpose:    Outputs, to STDOUT, all disk and directory paths which
		     match one or more file names.  Start directory and
		     disk can be specified.


	 Format:     WHEREIS [options] [file-list]


	 Options:    Option indicator (-) followed by one or more of
		     the following characters:

		     ? = Display help message.


	 File-List:  One or more DOS file specifications or wild cards:
			[disk][path][file-names][file-extensions]


	 Type:	     Internal	 External
				   ***


	 Remarks:    Search begins at the current directory on the
		     current disk and progresses forward.


		     If a path is specified, the search will start from
		     that point forward.  If a disk is specified, only
		     that disk will searched.


		     Keyboard entry is terminated by a <CTRL-Z>.


		     Returns error code of 0 if all succeed, 1 if errors.



	 WHEREIS

	 Examples:   (1) Search for all occurances of the file "FIND.ME".
			 Start from current directory on the current disk:

			   WHEREIS FIND.ME


		     (2) Find all occurances of any file with a ".ME"
			 extension.  Search entire disk:

			   WHEREIS \*.ME


		     (3) Find all occurances of a file "SAMPLE.C" and all
			 occurances of any file matching a file spec of
			 "TEST??.*".  Start search for SAMPLE.C from the
			 directory "\BIN\SYS" and search all directories
			 for TEST??.*:

			   WHEREIS  \BIN\SYS\SAMPLE.C  \TEST??.*


```
{% endraw %}

## USER.DOC

{% raw %}
```










				 DOS EXTENSIONS


				   USER GUIDE












			   Copyright  (c) 1985, 1986



				 Daryll Shatz
				   Box 3282
			    Redondo Beach, Ca 90277










	This  document contains information which is the property of  the
	copyright owner.  It shall not be used or duplicated, in whole or
	in  part,  in any manner without expressed written permission  of
	the copyright owner.


	This program is provided on  an  "as is"  basis without  warranty
	of any kind, expressed or  implied,  including but not limited to
	the  implied  warranties  of  merchantability and fitness  for	a
	particular  purpose.   The  entire   risk   as	 to  quality  and
	performance of this program is	with  you.   Should  the  program
	prove defective, you assume the  entire  cost  of  all	necessary
	repair, servicing, or correction.  In no event will the author be
	liable to you for any  damages,  including any lost profits, lost
	savings, or other incidental or consequential damages arising out
	of the use or inability to use this program.



   DOS EXTENSIONS


      Table of Contents


	 Limited USE and Distribution License	   A

	 User-Supported Software		   B

	 How To Become a Registered User	   C

	 Introduction				   1

	 Installation Guide			   2

	 DOS Basics				   5

	 DOS Execution Cycle			   6

	 DOS Functions				   7

	 Using DOS Commands			   8

	 DOS Filters				   9

	 Using DOS Filters			   10

	 Creating New DOS Commands		   11

	 DOS Switches				   12

	 DOS Options				   13

	 Prefixing				   14

	 Group Specifiers			   15

	 Getting Started			   16

	 General Comments			   20

	 Acknowledgments			   21



   DOS EXTENSIONS


      Limited USE and Distribution License:


	 _______________________________ , hereafter called "The User",

	 is hereby granted a limited license to use, on a private non-

	 commercial basis, the DOS EXTENSIONS Package, hereafter called

	 "The Package".



	 The User of The Package is hereby granted a limited license to

	 distribute copies of The Package so long as each copy is whole

	 and complete with respect to the original.



	 This limited license expressly forbids any distribution of any

	 part of The Package in modified form.



	 The User acknowledges to have read this agreement and the copy-

	 right	notice	contained herein,  and to understanding it,  and

	 agrees to be bound by its terms and conditions.



	 Entered into this:   ______ day of ________________ ,	19____.


	 Licensee's Address:  _________________________________________

			      _________________________________________

			      _________________________________________



	 Please return a copy of this license to:

			      Daryll Shatz / DOS EXTENSIONS
			      Box 3282, Redondo Beach, Cal 90277





   DOS EXTENSIONS


      User-Supported Software:



	 This package is being distributed on a User-Supported basis.
	 The authors receive their compensation from the contributions
	 of those who use this package.


	 User-Supported software is a method of distributing computer
	 programs and is often attributed to Andrew Fluegelman.  It is
	 based on three principles:


	 First, that the value and utility of software is best assessed
	 by each user on his/her own system.


	 Second, that independent personal computer software can and
	 should be supported by each user and the computing community.


	 Finally, that copying of programs should be encouraged, rather
	 than restricted.  The ease with which software can be distributed
	 outside traditional commercial channels reflects the strength,
	 rather than the weakness, of electronic information.


	 Regardless of whether a contribution is made or not, each user
	 is encouraged to distribute this package to others as prescribed
	 by the Limited Use and Distribution License contained in this
	 document.  Payment for use is discretionary on the part of each
	 subsequent user.

	 The suggested contribution for release 2.0 of DOS EXTENSIONS
	 is $35.00 for non-registered users.





   DOS EXTENSIONS


      How To Become a Registered User:



	 Any user can become a registered user by submitting a signed
	 copy of the Limited Use and Distribution License together
	 with the registration fee.


	 The registration fee for release 2.0 is $55.  ($20 if the user
	 has made a contribution of $35 or more.)


	 Registered users will receive the following additional items:

	       -  User ID number

	       -  An IBM style printed Reference Manual

	       -  One year free updates and bug fixes
		  (subject to copy fee charge)

	       -  One year free of the "EXTENSIONS" newsletter

	       -  Option to purchase source code (when available)


	 Being a registered user is not required to use this package.




   DOS EXTENSIONS


      Introduction:


	 More and more people are using computers to assist them in their
	 daily lives.  And, as people become comfortable with computers,
	 they desire to do more work on their computers.


	 This desire to be more productive is hampered by the fact that most
	 micro-computers are supplied with only a basic set of operating
	 commands.  Having a limited set of commands is fine for a first time
	 computer user but quickly becomes a problem to a user who has even
	 a little expertise.   This problem is what the DOS EXTENSIONS
	 package attempts to solve.



	 The DOS EXTENSIONS package has been designed to enhance the features
	 and flexibility of your MS-DOS or PC-DOS (2.1 or above) operating
	 system.  It does this by adding over twenty new commands to your
	 existing MS-DOS or PC-DOS software.   Nothing in your original
	 software is changed so you can continue use all your original DOS
	 commands.


	 With DOS EXTENSIONS added to your computer, you can perform new
	 capabilities, eliminate redundant commands, do more work in less
	 time, and gain greater control over your computer.


	 This manual assumes that you understand the basic commands of your
	 operating system.  If you do not, please read your DOS manual
	 before utilizing this package.




   DOS EXTENSIONS


      Installation Guide:


	 The DOS EXTENSIONS package comes with several programs residing
	 on one floppy disk.  The procedures you will follow, below, simply
	 makes a copy of each program onto your DOS SYSTEM disk(1).  After
	 you have made a copy of these programs, you can use them as if
	 they where any other DOS commands.


	       If you are not familiar with the standard DOS
	       COPY command, please refer to your DOS manual
	       before preceding any further.


	 If you wish to copy only selected DOS EXTENSIONS, refer to your
	 DOS manual for the correct single file copy method (2).


	 The following pages describe two step by step installation
	 procedures; one for floppy disk based computers and one for hard
	 disk based computers.















	 (1) The DOS SYSTEM disk is the disk that contains all your the DOS
	     Command files (COPY.COM, TREE.COM, MODE.COM, COMP.COM, etc.).

	 (2) Space limitations on your SYSTEM disk may dictate that you
	     remove some DOS files and/or copy only selected DOS EXTENSIONS.
	     Please refer to your DOS manual on how to delete a program or
	     how to create a second SYSTEM diskette which contains only the
	     files you wish to use.




   DOS EXTENSIONS


      Installation Guide (cont)


	 Follow these steps if you have a floppy disk based system:


	    STEP 1:

	       Bring up your computer (boot) as you normally would and then
	       place the DOS EXTENSIONS diskette into the second disk drive.



	    STEP 2:

	       Replace your BOOT diskette with your SYSTEM diskette (if they
	       are not the same diskette).

	       Assuming your SYSTEM diskette is in disk drive A: and the
	       DOS EXTENSIONS diskette is in disk drive B:, type the
	       following command to DOS:

		  COPY	B:*.EXE  A:

			   = OR =

		  COPY	B:(filename that you want goes here)  A:


	    STEP 3:

	       Remove the DOS EXTENSIONS diskette and store it in a safe
	       place.  You should never use this diskette except to make
	       a backup or to reinstall it's programs onto some other disk.


	    STEP 4:

	       Insert the DOS EXTENSIONS Reference Manual pages into your
	       DOS Manual.  The Reference pages are designed to integrate
	       into your existing DOS Manual.




   DOS EXTENSIONS


      Installation Guide (cont)


	 Follow these steps if you have a hard disk based system:


	    STEP 1:

	       Bring up your computer (boot) as you normally would and then
	       place the DOS EXTENSIONS diskette into the floppy disk drive.



	    STEP 2:

	       Assuming your SYSTEM disk (hard disk) is disk drive C: and
	       the DOS EXTENSIONS diskette is in disk drive A:, type the
	       following command to DOS:

		  CD (path where you how have all the DOS command files)

		  COPY	A:*.*  C:

			   = OR =

		  COPY	A:(filename that you want goes here)  C:


	   STEP 3:

	       Remove the DOS EXTENSIONS diskette and store it in a safe
	       place.  You should never use this diskette except to make
	       a backup or to reinstall it's programs onto some other disk.


	    STEP 4:

	       Insert the DOS EXTENSIONS Reference Manual pages into your
	       DOS Manual.  The Reference pages are designed to integrate
	       into your existing DOS Manual.




   DOS EXTENSIONS


      DOS Basics:


	 How that you have the DOS EXTENSION files on your SYSTEM disk, let's
	 take at look at how DOS works and how your new programs can be
	 used.


	 The computer needs some way of communicating with you.  Most
	 computer designers accomplish this "interface" by supplying a
	 software program called an OS (for Operating System) which serves
	 as a translator between your computer and you.  Since most computer
	 systems run off a disk drive, the operating system software is
	 usually call DOS (for Disk Operating System).	MS/DOS and PC-DOS
	 (hereafter referred to as DOS) are both disk based Operating Systems.


	 DOS has three main functions in life: providing an interface with
	 you, controlling your computer's resources (memory, disk space,
	 etc.), and executing your requests.


	 DOS interfaces (communicates) with you by accepting input from the
	 keyboard and by returning some result to an output device (usually
	 the screen or printer).  You should already be familiar with this
	 aspects of DOS.


	 DOS controls your computer's resources by performing many hidden
	 housekeeping tasks such as maintaining various tables and handling
	 Interrupts.  Luckily, understanding any of these aspects of DOS is
	 NOT required.


	 The last aspects of DOS, executing commands, holds the most interest
	 for us.  DOS executes your requests in a three step process: getting
	 and interpiding the request, finding and loading the software
	 necessary to fulfill the request, and finally transferring control to
	 that software.




   DOS EXTENSIONS


      DOS Execution Cycle:


	 Lets look at this three step process, of how DOS executes your
	 request, a little closer.


	 DOS spends most of it's time waiting for a request, from you, to
	 do some activity.  The activity can be to run a program such as a
	 game or an account package, or it can be a call to a DOS function
	 like the COPY command or MKDIR command.  DOS functions are really
	 just software programs like games or business packages.  The only
	 difference is that DOS functions are programmed to work on/with
	 other programs.


	 As soon as you type a request on the keyboard, DOS initiates the
	 execution cycle which first tries to decide if your request was to
	 run a program or to perform a DOS function.


	 If you want to run a program, DOS attempts to locate a file on disk
	 with the name of the program.


	 If you want to perform a DOS function, DOS has to first decide
	 whether or not it is a built-in function(1) or whether it resides
	 on disk(2).  If the function is a built-in function, DOS simply
	 transfers control to a part of itself.  If the function resides on
	 disk, DOS attempts to locate a file on disk with the name of the
	 function.


	       This is how the DOS EXTENSIONS package adds
	       itself to DOS.


	 Once DOS has located the software it needs, it loads the software
	 into the computer's memory (sometimes called RAM).  A lot goes on
	 here but we need not be concerned about the details.


	 Assuming all has gone well to this point, DOS transfers control
	 of the computer over to the software just loaded.  Of course this
	 software may call upon DOS to perform various chores after it
	 receives control, but that is not our concern here.





	 (1) Indicated in the DOS manual as Internal.

	 (2) Indicated in the DOS manual as External.




   DOS EXTENSIONS


      DOS Functions:


	 Now that you have a basic idea of how DOS executes your requests,
	 let's address what a DOS function is.


	 DOS comes "out of the box" with several basic programs (called
	 Commands) to handle the primary tasks of your computer.  Some of
	 these tasks include copying files, listing directories, formatting
	 disks, and setting system parameters.	Look in your DOS manual for
	 a complete list of the commands (functions) that came with your DOS
	 package.


	 Some DOS Commands are designed to be used with other DOS Commands.
	 These commands are called DOS Filters.  Some DOS Commands can be
	 used with or without other DOS Commands.  These commands are called
	 DOS Command/Filters.  The important thing to remember is that they
	 are all still DOS Commands although some may have a second name.


	 The term Filter is also used to express whether or not a DOS
	 Command is being used with other DOS Commands to perform a task.
	 This is important to know because you may see a DOS Command, that
	 was not designated as a Filter, being used as a Filter.  It is
	 also important to know that the verse is true as well.





   DOS EXTENSIONS


      Using DOS Commands:


	 DOS Commands and Filters are easy to use.  You have already used many
	 of them several times by now.	Although you should consult your DOS
	 manual for details, the basic idea in executing a DOS Command (or a
	 DOS Filter used by itself) is to just type in it's name and any
	 required parameters that it needs.


	 Let's do an example.  Let's request your computer to list all the
	 files and subdirectories (if any) in your ROOT directory.


		type:	CD \		This requests DOS to locate and then
					execute the DOS Command called CD
					(change current directory).  Note
					that the backslash (\) is a parameter
					to the CD command. It tells CD which
					directory to change to (ROOT in this
					case).

		type:	DIR *.* 	This requests DOS to locate and then
					execute the DOS Command called DIR
					(list directory files).  Note the *.*
					parameter which informs DIR that you
					want all files.


	 Your computer should respond with a list of files and subdirectories
	 if any.


	 Notice that we didn't care if the DOS function was a DOS Command or
	 a Filter.  This is because all DOS functions are Commands when used
	 by themselves.


	 Using DOS Commands (or Filters by themselves) is simply a matter of
	 typing the DOS function's name (CD or DIR in the example above)
	 followed by any information that may be required by the function
	 (the backslash or *.* in the example above).




   DOS EXTENSIONS


      DOS Filters:


	 For basic operations, using DOS Commands by themselves is all that is
	 needed.  But as you become more comfortable with DOS, and try to
	 tackle more work, you will soon need to handle difficult situations
	 where single line DOS Commands are to cumbersome.


	 Luckily, DOS has a solution to this problem.  It's called Piping or
	 Pipes.  This is a built-in feature which allows you to connect the
	 output of one DOS Filter to the input of another DOS Filter and so
	 forth.  This powerful ability can be used to string together multiple
	 DOS Filters to form new commands.


	       The DOS EXTENSIONS package takes advantage
	       of this DOS feature.  This is why most of
	       the package is composed of Command/Filters.


	 Piping is simply a method whereby DOS redirects the output of
	 one DOS function into the input of another DOS function.  This
	 redirection can continue to more DOS functions.  Each DOS function
	 performs its usual task, such as sorting or file handling, and then
	 passes it's result onto the next DOS function.  The net result is
	 as if you had run one DOS Command which performed all the
	 individual DOS functions.




   DOS EXTENSIONS


      Using DOS Filters:


	 Remembering that DOS Filters are still DOS Commands, using them in
	 Pipes is simply a matter of learning how to connect them together.
	 Again you should consult your DOS manual for details.


	 The basic idea in connecting DOS Filters together is just typing
	 the names and parameters of each DOS Filter in the order that you
	 require them to be run.  DOS requires you to separate each DOS
	 Filter by a vertical bar character (|).


	 Let's do an example.  Let's request your computer to list all the
	 files and subdirectories (if any) in your ROOT directory.  This
	 is the same example as before, but this time let's sort the output:


		type:	CD \
		type:	DIR *.*  |  SORT

	 Your computer should respond with an alphabetical list of files and
	 subdirectories if any.


	 There are three DOS Commands in this example -  CD, DIR, and SORT.
	 The first DOS Command (CD) performs the same function as before - it
	 changes the current working directory to the ROOT directory.  The
	 second DOS Command (DIR) also perform the same function as before -
	 listing all files and subdirectories of ROOT.	But this time the
	 output of DIR is redirected from the screen to the input of the third
	 DOS Command (SORT - a Filter).  It is the output of SORT which is
	 displayed on the screen.


	 It is important that you realize that you could not have just typed
	 these three DOS Commands in separately.  If you did, the SORT Command
	 would not know what to sort since it needs input from something.


	 Although this was a simple example it illustrates how multiple DOS
	 functions can be combined to perform a task which one DOS function
	 could not do alone.


	 Using DOS Piping is no more complex than using a series of single
	 line DOS Commands.  The only trick is to plan out what you want to
	 accomplish and then type in the correct order of DOS functions (and
	 their parameters) which will each perform a part of your task.  It
	 is also important to remember to separate each DOS function (and
	 it's parameters) from each other with a vertical bar character.




   DOS EXTENSIONS


      Creating New DOS Commands:


	 If you understand the concept of DOS Piping you should understand
	 how you can create new DOS Commands(1) by combining existing DOS
	 functions.  What may be puzzling is how to save your new creations
	 so that you can use them in the future.  DOS has an answer to this
	 question.  Its called Batch Files.


	 Whenever DOS is asked to run a program which has a file extension
	 of ".BAT", DOS assumes that this file contains one or more lines
	 of DOS Commands (or DOS Pipe Commands).  DOS loads the lines into
	 memory an attempts to execute each line (whether or not the line
	 contains anything useable).


	 This is good news.  Let's see how we can use this by creating a new
	 DOS Command, called DIRSRT, to display a sorted directory list as
	 per our last example.


	 All we need to do is to type the last line of the last example
	 "DIR  *.*  |  SORT" into a file called "DIRSRT.BAT".  You can use
	 any text editor to do this or you can type it in directly by using
	 the DOS Command COPY Command(2).  Once the file is created, all
	 you need to do to produce a sorted directory listing is type the
	 name of the batch file; "DIRSRT.BAT"(3).


	 As you can see, batch files are a DOS feature that you should get
	 to know.  And the best way to learn about it is by reading your
	 friendly DOS manual.  There you will find all the options and
	 features of the batch files facility.






	 (1) It is more correct to use DOS Command than DOS function.  This
	     is because batch files can not be used as DOS Filters, which
	     are included in the definition of a DOS function.

	 (2) Refer to you DOS manual for details on using this technique.

	 (3) Or just type "DIRSRT" if no other file by that name exists.  In
	     this simple example only the current directory could locate the
	     batch file.  Your DOS manual explains how you can access a
	     batch file from any directory.




   DOS EXTENSIONS


      DOS Switches:


	 If you look through you DOS manual you'll notice that several of
	 the DOS Commands have optional features which change what or how
	 the command performs.	These features are called Switches.


	 Switches let you alter the normal behavior of a command.  Look at
	 the COPY Command pages in your DOS manual.  It indicates that there
	 are three Switches, /A, /B, and /V (your DOS may vary).  The "/A"
	 Switch alters the COPY Command such that it will produce something
	 called ASCII files.  The "/B" Switch alters the COPY Command such
	 that it will produce something called Binary files.  The "/V" Switch
	 alters the COPY Command such that it will verify each file that it
	 creates; something it normally does not do.


	 Another thing that is indicated, on these pages, is that each
	 Switch can be used several times within a COPY Command as if it
	 were a light switch being turned ON and OFF.


	 DOS Switches, then, are a way of turning ON and OFF temporary
	 adjustments to a DOS function (while the function is being used).


	 The DOS EXTENSIONS use a feature called Options which are used
	 instead of Switches.




   DOS EXTENSIONS


      DOS Options:


	 DOS Switches are very handy as they allow you to customize a
	 particular DOS function went need.  Their use, though, can be a
	 bit cumbersome and messy.  The DOS EXTENSIONS package uses a
	 different feature, called Options, which provide similar
	 functionality.


	 Options are temporary changes to a DOS function, just like Switches,
	 but they can not be switched ON and OFF once the command starts.


	 Now look at the CP Command pages.  This Command, like all of the
	 other DOS EXTENSIONS, uses the Options format to alter the behavior
	 of the command.


	 The CP command has eight Options (A, C, E, F, P, S, T, and ?).  A
	 few examples are the C Option which causes the CP command to continue
	 if any minor errors occur, and the E Option which prevents the CP
	 command from overwriting files that already exist.


	 Unlike DOS Switches, Options must follow the name of the DOS function
	 and start with an Option Indicator (a dash character).  There can be
	 any number of Options specified after the Option Indicator but only
	 one list is allowed.


	 Also, unlike DOS Switches, Options themselves may require parameters
	 which follow the list of Options(1).  The Option parameters follow in
	 the order of how you typed in the Options.  Each Option parameter is
	 separated by white space(2).


	 The best illustrations of Options are the examples listed with each
	 DOS EXTENSION reference page.




	 (1) One example is the PRNT Command which uses the F (Force output
	     a file) Option.  The Options needs a parameter which names the
	     file to output to.

	 (2) White Space is a computer term meaning any number of non-printing
	     characters.  Examples include spaces, tabs, LF, etc.




   DOS EXTENSIONS


      Prefixing:


	 The DOS EXTENSIONS package uses a technique called Prefixing.	This
	 technique is required whenever data from multiple files is being
	 sent through a pipe.  If Prefixing was not available, receiving DOS
	 Filters could not differentiate what data when with what files.


	 The correct manner to use Prefixing is to include the P (Prefix)
	 Options in the DOS EXTENSION immediately preceding the function
	 which uses Prefixing (such as TEE).


	 Non DOS EXTENSION functions can simulate Prefixing by adding a
	 Prefix Header before all data lines.  A Prefix Header is composed
	 of a hexadecimal FF byte followed by the full file specification.
	 The Prefix Header must be the first line of the datum.


	       Version 1.2 - The only function which can
	       utilize Prefixing is the TEE function.




   DOS EXTENSIONS


      Group Specifiers:


	 The DOS EXTENSIONS package adds a new dimension to DOS functions
	 by introducing Group Specifiers.


	 Group Specifiers allow many of the DOS EXTENSIONS to accept multiple
	 file specifications, each of which can contain a file name and/or
	 DOS wild cards.  This exclusive feature greatly reduces redundant
	 commands.


	 This feature is best understood via an example.  Let's copy the
	 files below to drive B: using the COPY Command and then the CP
	 Command:

	       all files with a ".BAT" extension
	       any files starting with the character A
	       the file SAMPLE.TST


	 The COPY Command requires three separate commands to succeed:

	       COPY  *.BAT B:
	       COPY  A*.*  B:
	       COPY  SAMPLE.TST  B:



	 The DOS EXTENSION CP Command requires only one command to succeed:

	       CP  *.BAT  A*.*	SAMPLE.TST  B:




   DOS EXTENSIONS


      Getting Started:


	 If you have read and understood the preceding pages, it is time
	 to apply what you have learned.


	 The DOS EXTENSIONS package has several Commands which are intended
	 to replace equivalent DOS Commands.  These new Commands offer you
	 all the features of the originals plus many new features.  Let's
	 start by studying these Commands first.


	       Make a complete backup of your files
	       before experimenting with these new
	       commands.


	 The LS (List Directory) Command is intended to be used whenever you
	 would use the DOS DIR Command.  This Command is very powerful because
	 it allows you to specify multiple selection criterion when trying to
	 locate one or more file or subdirectory names.  In addition, the
	 output of the LS Command can be piped into many other Commands to add
	 greater control over which files they process.


	 Find the LS Reference pages.  You should have inserted them into your
	 DOS manual.  Look at LS Command example #3.  This example shows that
	 LS has four parts to it's format.  The Command's name (LS).  A list
	 of Options (Option A in this case, which tells LS to test all files
	 for a particular file attribute value).  A white spaced separated
	 list of Option parameters (number 21 in this case, which supplies a
	 value to Option A).  And a file list (^[R-T] in this case,
	 which tells the LS Command to only consider files which have file
	 names in which the first character is either an R, an S, or a T).


	 Look closely at the Format description of the LS Command page.  It
	 shows the same four parts to the command.  Notice that only the
	 name (LS) is required for this Command to work(1).


	 Now look closely at the Options description.  It describes what
	 options (the single letters) the LS Command will recognize.  The
	 first Option listed is the A Option.  Read some of the others and
	 then see if you can apply them to some of the other LS examples.






	 (1) This is because all the other parts are optional, as shown by
	     the surrounding [] symbols.




   DOS EXTENSIONS


      Getting Started (cont):


	 Next, look closely at the Parameters description.  This section
	 describes what each Option needs and the format to use.  The D
	 (Date) Option, for example, needs an L, an E, or a G followed by
	 a date value.	The date value consists of one or two digits for
	 the month, a forward slash character, one or two digits for the
	 day, a forward slash character again, and finally upto four digits
	 for the year.	Look at LS example #4 to see how the D Option can
	 be used.


	 Finally, look at the File-List description.  This section describes
	 what can be used to specify which files to work with.	Notice the
	 description of the Wild Cards.  These are characters with special
	 meaning to LS when used in this part of the command.  Here is where
	 we find the meaning of the funny ^ and [] characters.


	 Using the LS Reference pages, take some time to experiment on your
	 own.  Try listing directories on your own computer.  Try each
	 Options.  You should be able to understand all the LS examples
	 before you continue on (at least the LS parts of the examples).


	 The DOS EXTENSION package also has Commands which can replace the
	 original DOS Commands RENAME, COPY, DELETE (ERASE), and FIND.	Let's
	 look at the CP Command which can replace DOS COPY.


	 The DOS COPY Command is intended to be used when you need to make a
	 copy of one or more files.  With the COPY Command you can
	 concatenate files, rename the result copies, and span directories.
	 The CP Command also handles these functions (file concatenation
	 must be done with the CAT Command) and adds the ability of Group
	 Specifiers to control which files are acted on.


	 Look closely at the CP Reference pages.  The Format description
	 indicates that CP has two required parts and two optional parts.


	 The first required part is the command name (CP).  This is always
	 required.


	 The second required part is the TO specification which tells CP
	 where to put the copy (or copies).  A review of the To description
	 shows that any standard DOS file specification can go here.  This
	 is equivalent to the target file parameter in the DOS COPY Command.
	 Notice that CP example #5 shows that even if the From-List is piped
	 into CP, CP still needs a To specification.




   DOS EXTENSIONS


      Getting Started (cont):


	 The first optional part is a list of Options for CP.  The Options
	 section details the Options available to CP.  Take a look at these.
	 You can prevent overwriting existing files and choose whether the
	 From file(s) or the To file(s) are displayed.


	 The second optional part, of the CP Command, is a Group Specifier,
	 called the From-List.	This is analogous to the DOS COPY source
	 file parameter except that multiple DOS file specifications, each
	 separated by white space, can be used.  CP example #1 shows this
	 well.


	 Using the CP Reference pages, take some time to experiment on your
	 own.  Try copying files on your own computer.	Try each Option.
	 When you understand the CP Command try to figure out example #5 of
	 the LS example.  It illustrates how the LS Command can output a
	 selected list of file names into another command, such as the CP
	 Command.  This is an example of piping.  Also notice how the output
	 from the CP Command (list of the From file names) is fed into the
	 ATT command.  This is a good example of how CP can be used as a
	 Filter.


	 RENM, RM, GPM, LS, and CP are the DOS EXTENSIONS intended to replace
	 their DOS counterparts.  Read the Reference pages and experiment
	 with each these commands.


	 The DOS EXTENSIONS package contains five additional file handling
	 commands: MV, ATT, CAT, SRTDIR, WHEREIS.  These commands provide
	 additional capabilities while working on/with your files.  Read
	 their Reference pages and experiment with each of them.


	 Task control commands are also include in the DOS EXTENSIONS
	 package.  These three commands, SLEEP, CMD, and CLK are useful
	 when you need to control or time the execution of DOS Commands or
	 programs.  Try some of the example shown on their Reference pages.




   DOS EXTENSIONS


      Getting Started (cont)


	 If you write programs or have the need to change existing ones,
	 take a close look at the four file editing commands: SED, TXLAT,
	 UNIQ, and MERGE.  These powerful commands can be used to edit
	 multiple items among multiple files.  They can become a real time
	 saver.  Study them well and make sure you try each of SED's edit
	 commands.  These commands soon become a programmer's companion
	 when fully mastered.


	 There are four miscellaneous DOS EXTENSION commands: ALARM, PRNT,
	 STAT, and SELECT.  ALARM simply produces a tone under your control.
	 PRNT outputs selected lines from files.  STAT provides a useful
	 statistical report for text files.  Select is a unique Filter which
	 allows you to select among input choices.  Select offers you a
	 method to make all your DOS file handling commands more friendly.



	 The DOS EXTENSIONS package provides two commands to enhance piping:
	 INP and TEE.  These two commands are used to start and end a pipe.
	 Review these two commands after you thoroughly understand all the
	 other commands.



	 The key to learning these new commands is to first experiment with
	 each one and then to remember to use them whenever the situation
	 arises.




   DOS EXTENSIONS


      General Comments:


	 Version 1.2 attempts to provide a prompt when a Command is ready
	 for keyboard input.  However, since the first Command of a pipe
	 can not always tell if it's input stream is comming from the keyboard
	 or a pipe, the prompt may not be given.


	 You can always tell when to start keyboard input (when no prompt
	 is given) by observing your disk drives.  Keyboard input can begin
	 after your disk drive activity stops; which indicates that a command
	 is waiting for input.


	 Any comments regarding throughput, we feel, should be directed to
	 the designers of DOS.	We had to "work around" several DOS "design
	 features" which greatly impacted performance.


	 The authors welcome any constructive comments and suggestions and
	 look forward toward adding to, as well as improving, this package.




   DOS EXTENSIONS


      Acknowledgments:


	 The following software products were used in the design and/or
	 production of DOS EXTENSIONS.	Both the companies and their
	 products provided us with outstanding service.


	    MWC86 Compiler  by Mark Williams Company,
			       Chicago Illinois

	    The C Utility Library by Essential Software, Inc.,
			       Maplewood, New Jersey.








	 The following trademarks are referred to within this User Guide:

	    MS-DOS which is a trademark of MicroSoft, Inc.

	    PC-DOS which is a trademark of IBM Corp.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0585

     Volume in drive A has no label
     Directory of A:\

    FILES585 TXT       859   8-16-86   3:47p
    GO       BAT       334   1-03-80   4:32a
    LS       EXE     19393   6-10-86   9:04p
    NOTES585 TXT      2837   1-03-80   4:18a
    REF      DOC     58422   6-07-86   6:59p
    USER     DOC     35525   6-09-86  11:05p
            6 file(s)     117370 bytes
                           41472 bytes free
