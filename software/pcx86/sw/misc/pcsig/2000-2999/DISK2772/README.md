---
layout: page
title: "PC-SIG Diskette Library (Disk #2772)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2772/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2772"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ARJ_BBS.DOC

{% raw %}
```

   ARJ SUPPORT BBSes:					 May 1991


      The latest version of ARJ can be obtained from the following
      ARJ SUPPORT BBSes:

      Fidonet users can file request (FREQ) the latest released version
      of ARJ from Fidonet node 1:16/390 under the magic file name of ARJ.

      Zorro the Malamute BBS,	  MA, (508) 653-9628, 1:16/390 Fidonet
      Wonderland BBS,		  MA, (617) 965-3036  (New phone number)
      Bay State BBS,		  MA, (617) 598-6646, 1:101/370 Fidonet
      Dimensional Crossroads BBS, MA, (508) 427-5379
      BigTime BBS		  AZ, (602) 983-0480, 300-38400 baud
      The Cutting Edge BBS,	  CT, (203) 233-8993

      Tunnels of Vesarius BBS	   (San Diego, California)
	 Node I  (619) 587-9825, USRobotics HST/V32, 1:202/202 Fidonet
	 Node II (619) 453-1781, Compucom 9600, 1:202/208 Fidonet

      The Data Express BBS	   (AUSTRALIA)
	 61 2 564 2172 (V.32), 3:712/607 Fidonet

      Crystal Circuitry BBS	   (AUSTRALIA)
	 61 2 868 4490 (300-9600)

      CBBS CANAL VIP BBS	   (BRAZIL)
	 (011) 853-5333
	 Paulo Cesar Breim
	 Rua Fradique Coutinho 266
	 Sao Paulo     SP
	 CEP: 05416
	 Fone: (011) 64-7199

      C.A.T. Kommunikations-System (GERMANY)
	 49-6192-42054 (1200-2400)
	 49-6192-42057 (19200 PEP)
	 Packet switching networks: 45619270055

      B-Catel BBS		   (THE NETHERLANDS)
	 +31,33,612819

      Ensing-BBS		   (THE NETHERLANDS)
	 +31 5904-1913

   end of document


```
{% endraw %}

## ARJ.DOC

{% raw %}
```




     User's Manual for the ARJ archiver program,            May 1991



	ARJ software and manual copyright (c) 1990,91 by Robert K Jung.
	All rights reserved.

	ARJ version 2.10 release




     ** IMPORTANT NEWS ****************************************************

	Users of ARJ should read the WHATSNEW.DOC and UPDATE.DOC which
	contain information about the latest improvements to ARJ.

     **********************************************************************


     INTRODUCTION:

	ARJ is my first attempt to use my interest in compression
	technology to produce an archiver for personal use on my PC and on
	minicomputers.	ARJ is written in ANSI C and only uses ANSI
	standard libraries.  All machine dependent functions (file
	date-time modified, file attributes, etc.) are contained in a
	single environment source file using ifdefs to enable one to
	maintain a single version of the source code for multiple different
	machines.

	The DOS version has manually optimized compression, extraction,
	CRC, and output routines (in assembler).

	The current functionality of ARJ is patterned after that of AR and
	LHARC with additional features derived from those of the
	competition and from the many suggestions of ARJ users.

	I have created a new archive format for ARJ to support cross
	platform archives, multiple volume archives, and a new security
	envelope feature.  Trying to maintain compatibility with existing
	formats is very difficult.  Some users have wondered why I did not
	choose to use the ZIP format.  That might have been possible, but
	ZIP utilities would still be unable to extract the compressed data,
	because the compressed data is itself a new format.

	In addition, there are plans to port versions of ARJ to the AMIGA
	and ATARI ST platforms.  I expect those versions to be available
	late in 1991.  There will be a simplified version of ARJ in source
	code to be released for the UNIX platform late in 1991. There are
	plans for an OS/2 version of ARJ, also.  These plans all depend
	upon user support.  Already, there is a version of UNARJ developed
	in Holland for the ATARI ST.  And with this ARJ release comes a
	version of UNARJ that has been built and tested on a SUN UNIX box.


     TERMINOLOGY:

	The following terms are used through this manual.

	ARCHIVE - This is a file containing one or more files in a
	compressed or non-compressed state and containing file related
	information such as filename and date-time last modified, etc.

	ARJ FILE - This is an archive created by ARJ.

	COMPRESSION - The process of encoding redundant information into
	data requiring less storage space.

	COMPRESSION PERCENTAGE/RATIO - The percentage compression reported
	by ARJ is a variation of one of the TWO standard methods of
	expressing compression ratio in the technical literature.  ARJ uses
	the compressed size / original size ratio.  The other method is the
	inverse ratio.	When ARJ reports 96% as the compression ratio, that
	means that the compressed file is 96 percent of the original size
	(very little compression).  Other archivers use their own methods.
	LHARC uses the same ratio as ARJ.

	EXTRACTION or UNCOMPRESSION - The processing of recreating the
	exact information that was previously compressed.

	SELF-EXTRACTION MODULE (SFX) - This is an archive that is an
	executable file that is capable of extracting self-contained files.

	TEXT MODE - In text mode, ARJ inputs the file using the C library
	text mode which translates the carriage return, linefeed control
	characters of MS-DOS to a single linefeed character.  This saves
	space and provides the option for cross platform file extraction.
	On another platform, the host C library would change the single
	linefeed to the host text newline separator sequence.  In addition,
	for platforms such as PRIMOS which set bit 8 in ASCII text
	characters, ARJ sets/resets bit 8 according to the platform
	extracted to.  All input is stripped to 7-bit ASCII.

	VOLUMES - These are ARJ archives that are in sequence and have been
	created by a single ARJ command.  Files in the volumes may span
	volumes in a split format.  These volumes are usable archives.


     MAJOR FEATURES OF ARJ:

	Ranks with the best in compression in terms of size reduction of
	the currently available archivers including PKZIP 1.10, PAK
	2.51, LHARC 1.13c, and LHA 2.12.  Users have reported that ARJ
	also compresses slightly better than ARC 7.00.	ARJ is
	particularly effective with database files, graphics files, and
	large documents.  With the "-jm" option, ARJ usually compresses
	even smaller at a cost of time.

	Archive and individual file comments with option of inputting
	comments from a file.

	32 bit CRC file integrity check.

	DOS volume label support.

	Empty directory support.

	Test new archive before overwriting the original archive option.

	Multiple volume archives with one ARJ command.	This allows the
	user to backup a full hard disk drive to multiple floppies.
	Recovery of individual files is convenient because each volume is
	an individual archive.	No need to use SLICE with ARJ.

	File re-ordering facility with the option of sorting by file size,
	file extension, CRC value, date-time modified, filename, pathname,
	compression ratio, file attribute and more.

	String searching with context display within archive files.

	Built-in facility to recover files from broken archives.

	Self-extraction feature that is internal to the ARJ runfile.  The
	SFX module is full-featured with a built-in help screen.

	Internal string data integrity check in ARJ to resist hacking a la
	LHARC to ICE.

	Archive security envelope feature to resist tampering with secured
	archives.  This feature disallows ANY changes to a secured archive.
	Not even comments can be changed.

	Password option to encrypt archived files.

	Text mode data compression option to enable movement of text files
	from one host machine to another.  Text mode also results in
	slightly greater file size reduction on MS-DOS machines.

	File extraction to screen in a paged mode to permit browsing
	through an archive.

	Specification of the files to be added to an archive via one or
	more list files.  In addition, ARJ can generate a list file.

	Specification of files to be excluded from processing by ARJ.

	Sub-directory recursion during compression and extraction.


     ARCHIVER BENCHMARKS:

	This is information for those who plan to publish benchmark test
	results comparing ARJ with other file archivers.

	The ARJ -m1 (default) compression is meant to compete with LHA
	2.12.  The ARJ -m2 compression is meant to compete with PKZIP 1.10.
	The ARJ -m3 and -m4 are almost superfluous in that they only
	provide slightly better speed than -m2.

	The ARJ -e option is necessary during size benchmarks because ARJ
	by default stores the entire specified pathname in the archive as
	opposed to other archivers which strip path specs.

	The very size of the ARJ runfile adds significantly to the
	compression and extraction times when testing smaller archives.  It
	would be fairer to use larger archives or run the archivers from a
	RAMDISK.  Also, compressed executables affect the test times, so
	that all archivers should be tested in uncompressed form.

	The ARJ comment header adds bytes to the size of an ARJ archive.
	The larger file headers also add bytes to the size of an ARJ
	archive.  So, in size benchmarks compressing a large number of
	small files, the header size difference will be evident.


     RELEASE NOTES:

	This version does NOT include any expiration feature.  ARJ 2.10 is
	fully functional.  No function has been crippled.  The only
	difference between the registered version and the shareware version
	is the version/copyright message.

	This release states that it is NOT for commercial use.	Commercial,
	institutional and government users must purchase a site license to
	obtain a registered version of ARJ for their use.  However,
	commercial, institutional and government users may use ARJ for
	evaluation purposes for a period of 30 days.  See the LICENSE.DOC
	for details.

	While evaluating ARJ, you should use the "-jt" (test archive)
	option to verify new ARJ archives.

	This version has been tested under DOS 2.11, 3.3, and 4.01.  It has
	been lightly tested under DOS 5.0.

	The executables ARJ.EXE and REARJ.EXE can be compressed by DIET,
	LZEXE, and PKLITE.

	Here is a suggested command that will test ARJ on all of your files:

	ARJ a -r -jt -y "-vasdel a:\vol.*" a:\vol c:\*.*


     ARJR AND DEARJ PROGRAMS:

	The new programs ARJR and DEARJ are available only to registered
	users of ARJ.  ARJR is the ARJ program minus the help screen and
	SFX modules.  DEARJ is the ARJR program minus the archive
	creation/modification functions.  See the LICENSE.DOC and
	ORDERFRM.DOC for more information.


     GETTING STARTED:

	I assume that you have a copy of the self-extracting ARJ module
	named ARJ210.EXE.  Typing ARJ210 [RETURN] at the DOS command prompt
	will initiate the self-extraction feature.  ARJ210 will by default
	extract its files to the current directory.  When ARJ210 starts,
	you will see several lines of text describing ARJ and then a line
	asking if you wish to continue extraction.  Entering "yes" or "y"
	will continue the extraction.  If there are any duplicate filenames
	in the current directory, the program will prompt you for
	overwriting.  You can say "yes", "no", or "quit".

	Only the extracted ARJ.EXE file needs to be copied to a directory
	named in your "PATH" command in your autoexec.bat file.  On many
	PCs, this directory may be C:\DOS or C:\BIN.  With MS-DOS 3.0 and
	above, you can use path notation "\BIN\ARJ e archive" to use ARJ.

	You may, of course, prefer to use ARJ 0.15, 0.20, or higher to
	extract the contents of ARJ210.EXE file manually.

	Example:  ARJ e ARJ210.EXE \temp\


     QUICK START TO USING ARJ:

	Please note that switch options may be placed anywhere in the
	command line.

	To create an ARJ archive containing all of the files in the
	current directory:

	ARJ a archive

	To create an ARJ archive containing all files with the ".DOC"
	extension in the current directory:

	ARJ a archive *.DOC

	To create an ARJ archive containing all of the files in the
	named directory and all files in subdirectories of the named
	directory:

	ARJ a -r archive named_directory\*.*

	To create an archive containing files without path specs:

	ARJ a -e archive named_directory\*.*

	For maximum compression, use the "-jm" or "-jm1" options.
	For better speed, use the -m2 option.

	ARJ a -r -jm archive named_directory\*.*
	ARJ a -r -m2 archive named_directory\*.*

	To create an ARJ archive containing the full specified pathnames
	of the stored files including any drive and root specs.

	ARJ a -r -jf archive C:\top_directory\*.*

	To backup your hard disk to multiple volume archives on drive A
	with archive testing and archive bit resetting:

	ARJ a -r -jf -jt -a1 -b2 -vvas A:backup C:\*.*

	To extract all of the files in an archive to the current
	directory:

	ARJ e archive

	To extract all of the files in an archive to a named directory:

	ARJ e archive named_directory\

	To extract all files with the ".DOC" extension to the current
	directory:

	ARJ e archive *.DOC

	To extract all of the files in an archive recreating the
	original directory structure:

	ARJ x archive original_directory_name\

	The ending "\" character is optional.

	To extract all of the files in an archive containing absolute
	pathnames to the original paths:

	ARJ x -jf archive

	To list all of the files in an archive:

	ARJ l archive


     HOW TO CREATE AN EXECUTABLE SELF-EXTRACTING ARJ ARCHIVE

	The command "ARJ f -je archive ..." will create a full featured
	self-extracting archive from an already built archive.	No error
	message will be displayed concerning not finding "...".

	The command "ARJ f -je1 archive ..." will create a smaller
	self-extracting archive.

	Syntax:  ARJ f -je archive ...	    produces archive.exe

	Under DOS systems other than 2.11, 3.2, 3.3, 4,0, you may have to
	rename the self-extract module to ARJSFX.EXE to do the extraction.

	See the "-je" option for more information.


     CONVERTING OTHER ARCHIVE FILES TO ARJ FORMAT

	Included with this software is the program REARJ.  This program can
	be used to individually or collectively convert archive files from
	other formats to the ARJ format.

	REARJ *.ZIP *.ARC *.LZH    will convert all ZIP, ARC, and LZH
	archives in the current directory to the ARJ format.  See the
	REARJ.DOC for more information about REARJ.


     HOW TO USE ARJ:

	If you type ARJ [return], you will see a simple help screen.

	If you type ARJ -? [return], you will see more detailed help
	information.


     ARJ LIMITATIONS:

	ARJ will accept up to:	  64 filenames/wildnames on command line
			       16000 filenames resulting from wildnames
				8000 filenames/wildnames to exclude
				8000 ARJ filenames resulting from wildnames
				2048 character comments
				     (up to 25 lines or 1 file)

	ARJ requires approximately 282,000 bytes plus the memory necessary
	to store all of the pathnames to be archived when using the default
	compression method (-m1).

	There is no limitation on the number of files that can be stored in
	one archive.  However, each add command can only add a maximum of
	16000 files at a time depending upon memory availability.  I expect
	that a normal maximum of 5000 to 8000 filenames can be handled
	without running out of memory during the compress phase.

	If you do not have enough memory, you should use the "-l" switch to
	dump the filenames to a list file.  You can then break the list
	file into smaller files and use multiple ARJ commands to archive
	all of the files.

	Example:

	   ARJ a -r -lname.lst archive \*.*

	   If the above command fails due to lack of memory, split the
	   name.lst file into smaller pieces named name1.lst, name2.lst,
	   etc.  Then execute:

	   ARJ a archive !name1.lst
	   ARJ a archive !name2.lst
	   .
	   .

	ARJ currently does NOT differentiate between wildnames like "C:*.*"
	and "C:\*.*".  ARJ would expand each of those two wildnames into a
	list that could be up to twice as long as necessary.

	When updating an archive, ARJ creates a temporary file named
	ARJTEMP.$nn in the current directory or work directory.

	While ARJ is scanning a wildcard filespec, ARJ will change the name
	of the target archive to ARJTEMP.$nn while the scan is proceeding
	to avoid including the archive itself in an add or move command.
	Also, as a result, you cannot add a file named ARJTEMP.$nn to an
	ARJ archive.  Please note that the name of this temporary file may
	change at a future revision of ARJ.


     DIFFERENCES BETWEEN ARJ AND LHARC:

	The archive formats are NOT compatible.

	The compression and decompression algorithms are NOT compatible.

	ARJ only supports its own archive format.

	ARJ by default stores the full specified pathname of files
	archived minus any drive letter and root symbol.

	The "e" and "x" commands will by default extract all of the files
	in the archive without using date time stamps to select files.	You
	should specify "-u -y" to duplicate LHARC functionality.

	The "f" command in ARJ requires the -r switch to be identical to
	the LHARC f command.

	The ARJ archive suffix is ".ARJ".

	ARJ does NOT sort filenames when archiving.


     IMPORTANT NOTES:

	When using the "-w" working directory switch, ARJ does not check on
	space availability before overwriting the original archive if it
	exists.  Be sure that you have enough disk space for the new
	archive before using the "-w" switch.  If ARJ aborts in this
	situation because of disk space, ARJ will keep the temporary
	archive.

	By default, ARJ does not see hidden or system files when using
	wildnames.  ARJ will process system and hidden files when you
	either specify the exact filename or specify the "-a" switch.

	Like LHARC and PKZIP, ARJ requires extra disk space to UPDATE an
	archive file.  ARJ will backup the original archive while it
	creates the new archive, so enough room must be available for both
	archives at the same time.

	Currently, ARJ will not extract to a readonly file.


     THE FILESPEC "..."

	Several times in this document and the UPDATE.DOC file, there is
	mention of the filespec "...".	 This filespec is chosen so as to
	not match any existing filename.  ARJ will NOT generate an error or
	warning for not matching "..." specifically.


     ARJ ERROR SITUATIONS:

	ADD:

	If a user specified file is not found during an add, ARJ will
	continue processing, and will keep the archive and terminate with
	an error condition.

	In a disk full condition or any other file i/o error, ARJ will
	promptly terminate with an error condition and delete the temporary
	archive file unless the user has specified the "-jk" switch.


	MOVE:

	ARJ will only delete files that have been successfully added to the
	archive.  If you have specified the "-jt" (test) switch, ARJ will
	abort on any error.  If you specify the "-jk" switch, ARJ will not
	delete the temporary archive upon an abort.


	EXTRACT:

	In a disk full condition or any other file i/o error, ARJ will
	promptly terminate with an error condition and delete the current
	output file.


     ARJ DOS ERRORLEVELS:

	0 ->   success
	1 ->   warning (specified file to add to archive not found or
			specified file to list, extract, etc., not found)
	2 ->   fatal error
	3 ->   CRC error (header or file CRC error)
	4 ->   ARJ-SECURITY error or attempt to update an ARJ-SECURED archive
	5 ->   disk full or write error
	6 ->   can't open archive or file
	7 ->   simple user error (bad parameters)
	8 ->   not enough memory


     ARJ USER ACTION PROMPTS:

	ARJ prompts the user for action at certain times.  There are
	several types of prompts.  One is for yes/no permission, another is
	for a new filename, another is for archive comments, and one other
	is for search strings.	The yes/no prompts will also accept "quit"
	for program termination and "always" to bypass further user
	prompts.

	Since ARJ uses STDIN for user input, be careful about typing ahead
	anticipating prompts.  ARJ may prompt you for an unexpected action
	and use your earlier input.


     ARJ ENVIRONMENT VARIABLE:

	ARJ will first look for an environment variable named ARJ_SW and
	use its value as switch options for ARJ.  If ARJ finds such an
	environment variable, it will display a message to that effect.

	SET ARJ_SW=<switches>

	Example:  SET ARJ_SW=-w\temp -k -e

	Do NOT add any blanks after the variable name ARJ_SW.  As in LHARC,
	command line switches can be selected to override ARJ_SW settings.

	A problem to watch out for is using a different switch character
	for ARJ_SW and the command line.  This usually happens when using
	a program that calls ARJ.


     ARJ COMMAND LINE SYNTAX:

	ARJ <command> [-<switch>[-|+|<option>]...] <archive_name>[.ARJ]
	[<base_directory_name>\] [<!list_name>|<path_name>|<wild_name>...]

	Commands and switches can be entered in upper or lower case.
	Switches can be placed anywhere after the command ARJ.

	ARJ supports the use of either "-" or "/" as the switch option
	character.  The first occurrence of either "-" or "/" that ARJ
	encounters will determine the switch symbol.  You may NOT mix and
	match switch symbols.  This also includes the ARJ_SW environment
	variable.  ARJ_SW is checked first for switches.  Throughout this
	document, the symbol "/" may be substituted for "-" in switch
	usage.

	Examples:  ARJ a A:archive *.* /va /r	 is correct
		   ARJ a A:archive *.* /va -r	 IS INCORRECT USAGE!

	Switch options SHOULD NOT be combined.	At this time combinations
	such as "-ki" representing "-k" and "-i" will work, but may not in
	the future.

	The switch option "--" tells ARJ that there are no more switch
	options to process in the current command line.  This is useful
	when you need to enter filenames beginning with "-".
	Example:  ARJ a archive -- -testfile

	The standard ARJ file suffix is ".ARJ".  Subsequent multiple volume
	archives end in ".A01", ".A02", etc, up to .A99, .A00, .A01.

	The ARJ command must be the first non-switch argument after "ARJ".
	The ARJ archive name must be the first filename on the command
	line.  The base directory, if any, must be the second filename
	argument.  The switches and other filenames can be in any order.
	The base directory name should end with "\" (backslash) or ":"
	(colon).  However, ARJ will still accept directory names without
	the "\" character.

	For commands other than modifying or creating an archive, you can
	specify a wildcard for the archive name such as "*.ARJ".  If you
	also specify the "-r" switch,  ARJ will search sub-directories for
	ARJ archives (*.ARJ) also.

	Example:  ARJ l -r *  will list all of your *.ARJ files.

	Switches specified on the command line will either toggle or
	override switches specified with the ARJ_SW environment variable.
	Switch usage is identical to that of LHARC.

	"-s+"	     turns on switch "s".
	"-s-"	     turns off switch "s".
	"-s"	     toggles the state of switch "s".
	"-sname"     provides the name argument for switch "-s".
	"--"	     skip processing of any more switch options.

	Wild_names follow MS-DOS convention.  "*.*" means all files.
	"*.DOC" means all files with an extension of ".DOC".  "?B*.*"
	means all files with a second character of "B".

	The default for <wild_name> for all commands except for "d" is
	"*.*".

	For the add, move, freshen and update commands, filename matching
	in the archive requires an exact path match depending upon the "-e"
	option.  For non-update commands, specified filenames with paths
	will force a full pathname match.

	You can supply one or more filenames for files containing lists of
	files to be added to an archive.  The filenames must be listed one
	per line with no leading or trailing blanks.  The list filename(s)
	must be prefixed with "!".  If you want to archive a filename
	beginning with !, you must use the "-!" option to set a new list
	file character.

	You can exclude filenames/wildnames from the list of filenames to
	be processed by ARJ.

	Example:  ARJ a software *.* -x*.exe -x*.obj   adds all files
	in the current directory except .EXE and .OBJ files.


     ARJ COMMANDS:

	a: Add files to archive

	   This is the basic command to add disk files to an ARJ archive.
	   You can specify 0 to 64 filename arguments (one can be a
	   destination directory).  The arguments can be wildnames.  If
	   you specify the "-r" switch (recurse subdirectories), ARJ
	   will add all of the files in all of the subdirectories that
	   match the specified wildname.

	   Example:  ARJ a archive subdir\*.*
		     Archive all files in directory "subdir".

	   For maximum compression, use the "-jm" switch option.

	c: Comment archive files

	   This command allows you to comment the header and individual
	   files.  ARJ will prompt you for each comment.  The user will be
	   prompted for up to 25 lines for each comment.  A line containing
	   only a [return] will terminate the comment.

	   The user can elect to input comment data from a file by entering
	   the comment filename preceded by an "!" as in "!archive.txt"
	   starting in column 1 of the first comment line.  This file is
	   read as a text file.  The lines in the text can be up to 2048
	   bytes long.	Only the first 2048 bytes of the file will be
	   accepted by ARJ.

	   To erase a comment from an archive, type [space] [return] on the
	   first comment line and [return] on the second comment line.

	   You may also erase a comment with the following command:
	   "ARJ c archive -zerase.txt"	where erase.txt contains only a
	   [space] and [return].

	   To add only the archive comment and not file comments, use the
	   following command:

	   ARJ c archive -z

	   To add only the archive comment at the command line, use the
	   following command:

	   ARJ c archive -zcomment.txt

	d: Delete files from archive

	   This command allows you to delete files from the archive.  When
	   wildcard selection is not suitable, you can use the "-q" switch
	   which causes ARJ to prompt you for deletion for each file
	   selected.

	   Example:  ARJ d archive *.c
		     Delete all files in archive ending in ".c".

		     ARJ d -q archive *.c
		     Prompt before deleting each file ending in ".c".

	e: Extract files from archive

	   This command will extract one or more files from the archive to
	   the current directory or base directory if specified.  ARJ will
	   prompt the user before overwriting existing files unless the
	   user specifies the "-y" switch.  If the user gives a "no"
	   answer, ARJ will prompt for a new filename.	If the user enters
	   a single [return] instead of a filename, ARJ will skip the
	   current file extraction.

	   Example:  ARJ e archive soft\ *.c
		     Extract all files ending in ".c" to subdirectory
		     "soft".

	   When extracting a file located on multiple volumes, ARJ may
	   prompt the user with an "Append? " prompt.  This will usually
	   occur with files split across volumes.  You will also need to
	   specify the "-v" switch to force ARJ to continue to the next
	   volume of a series of volumes.  When extracting from one of a
	   series of multiple volumes on a diskette, it is easier to use
	   the wildcard "*.*" to specify the archive as in:

	   ARJ e archive A:*.* filespecs

	   If you wish to extract only a portion of an archive and that
	   portion is a directory containing directories, you should use
	   the "-p1" switch.  See the "-p" switch for more information.

	   If ARJ encounters a disk full during extraction, ARJ will abort
	   with an error.  You can bypass the abort by using the "-jd"
	   option.  Refer to the description of "-jd" for more
	   information.

	f: Freshen files in archive

	   Update matching files in the archive that are OLDER than the
	   selected disk files.

	   Example:  arj f archive *.c *.h

	   In freshening archives, you should use the same filename
	   specifications that you use to create the archive.

	   Example:  arj a archive \temp\ *.* -r
		     arj f archive \temp\ *.* -r

	i: check Integrity of ARJ

	   The "i" command allows the user to check the integrity of the
	   ARJ program.  ARJ will report CRC ERROR! if the tested ARJ
	   program does not pass its integrity check.  This indicates that
	   the program is probably corrupted.  Please note that the "i"
	   command should not be used on a compressed ARJ executable
	   (DIETed, LZEXEd, etc.), since the "i" command will then ALWAYS
	   report a CRC error.	If the program name is not specified, then
	   ARJ will check the current program being executed.

	   Syntax:  ARJ i ARJ.EXE
		    ARJ i	     at DOS 3.0 and up

	j: Join archives to archive

	   The "j" command allows the user to merge multiple ARJ
	   archives.  You should not use the "o" command to reorder a
	   merged multiple volume archive because of the split files.
	   ARJ expects to find the pieces of a split file in consecutive
	   order.

	   Syntax:  ARJ j archive archive1.arj archive2.arj
		    ARJ j archive *.arj -r

	   Some switches NOT supported by the "j" command are:	-o, -ob,
	   -f, -u, -c, -d.

	   Note that switches that do work like "-x" select the archives to
	   be merged and NOT the contents of the archives.

	   This command can be used to convert an SFX module to a regular
	   ARJ archive.

	   Example:  ARJ j new_name arjsfx.exe

	l: List contents of archive

	   List contents of archive to standard output.  The display can be
	   paused after each screenful with the "-jp" switch.  The files
	   are listed in stored order.	There are no sort options
	   currently.

	   The last field on the display TPMGVX stands for:
	       T -> text/binary/directory type
	       P -> path information available in "V" listing
	       M -> compression method used
	       G -> file has been garbled (encrypted)
	       V -> archive has been continued to another volume
	       X -> this file is an extended portion of a larger file

	   Example:  arj l archive *.c *.h

	   A "+" sign preceding the date-time field indicates that the date
	   is a 21st century date (20nn).

	   The original file size reported by the "l" and "v" commands is
	   the actual number of bytes input during text mode compression.
	   This is usually the MS-DOS file size minus the number of
	   carriage returns in the file, since C text mode strips a file of
	   carriage returns.

	m: Move files to archive

	   This command is similar to specifying the "a" command with the
	   "-d" switch.  The "m" commands adds the selected files to the
	   archive.  If the adds are successful, then the added files are
	   deleted.  The move command does not ask permission before
	   deleting the files.	Use the "ARJ a -d" command for that
	   feature.

	   Example:  ARJ m archive soft\*.*

	   The "m" command when used with "-f" and "-u" will delete any
	   successfully added files as well as any files that are already
	   up to date in the archive.

	n: reName files in archive

	   This command allows you to change the names of the files stored
	   in an ARJ archive.  ARJ will prompt for the new name of each
	   selected file.  You can skip changing the name of a particular
	   file by entering a blank line.

	   Example:  ARJ n archive *.c

	   In the above example, ARJ prompts for new names for all *.c
	   files.

	o: Order files in archive

	   This command allows you to re-order the files within the
	   archive.  You may specify the order of files on the command line
	   or you can use one or more list files.  Any files in the archive
	   that are not specified on the command line or in a list file
	   will be placed at the end of the archive in the same relative
	   order that they were originally.  No wildcard names can be used
	   as order specifications.  The filenames in the list file must be
	   entered one per line.

	   Example:  ARJ o archive file1 file2 file3

	   In the above example, the files "file1", "file2", and "file3"
	   will be ordered first in the archive.  Any remaining files will
	   follow those.

	   Example:  ARJ o archive !list

	   In the above example, the archive will be ordered according to
	   the order of the names in the file "list".

	   IMPORTANT:  For the "o"rder command, the list file option has
	   one special feature.  If the list file is named ARJSORT.$$$, ARJ
	   will expect the file to have been built with the ARJ v -jv1
	   command.  This ARJSORT.$$$ list file may be specified with a
	   pathspec.  See the ARJSORT.BAT batch file for an example of this
	   special feature.

	   To facilitate building list files, the "v" command in ARJ will
	   produce special outputs with the "-jv" switch and the "-jv1"
	   switch.

	   The "-jv" switch will display only the pathnames stored within
	   the archive.  No other listing data is displayed.  This output
	   can be re-directed to a file for manual sorting into a list
	   file.

	   The "-jv1" switch will display the standard verbose display with
	   a few modifications.  No comment field will be displayed.  The
	   pathname is appended to the archive file description data
	   instead of being on a separate line.  Displayed just before the
	   pathname field are the file extension and filename.	These
	   fields are available so that the user can sort the text lines by
	   date-time, file extension, CRC value, etc.  Text editors like
	   Qedit and SLED allow the user to sort text lines via an embedded
	   text field.

	   IMPORTANT:  You should NOT change the order of files in a
	   multiple volume archive.  ARJ expects the first file and the
	   last file in such an archive to have certain flags set.
	   Re-ordering the archive may cause problems with any split files.
	   At the next release of ARJ, re-ordering multiple volume archives
	   will be flagged as a error.

	p: Print files to standard output

	   Output files to standard output.  This function works such that
	   the output file will contain only the file data extracted.  This
	   is important for UNIX-like usage.

	   Example:  ARJ p archive manual.doc > output.fil

	   In the above example, output.fil will be an exact copy of
	   manual.doc.	There will be no extraneous header information in
	   output.fil.	All extraction phase information is written to the
	   STDERR device, which is normally the display screen.

	   NOTE:  Because of a problem using fwrite() and STDOUT, errors
	   occurring during redirection to serial and printer ports may not
	   be detected.  Errors during redirection to disk files will be
	   detected.

	r: Remove paths from filenames

	   This command causes ARJ to remove the path component from the
	   specified filenames stored in the archive.  The default is all
	   filenames stored in the archive.  This command is useful if you
	   forgot to specify "-e" to exclude paths.

	s: Sample files to screen with pause

	   This command is similar to the "p" command except that one
	   screenful of data is displayed to the user and a user action is
	   then requested.  The action prompt can be suppressed with the
	   "-y" switch.

	   The "s" command filters the text to output by truncating at 79
	   characters per line and displaying '?' for control characters.

	t: Test integrity of archive

	   Test the contents of the selected files for the correct CRC
	   value.  ARJ uses a 32 bit CRC to validate the contents of the
	   files.  The use of 32 bit CRCs is many times better than the
	   use of 16 bit CRCs for the detection of errors.

	   Use this command to fully test the security envelope on an
	   ARJ-SECURED archive.

	u: Update files to archive

	   Update older files in the archive and add files that are new to
	   the archive.

	   Example:  arj u software

	v: Verbosely list contents of archive

	   This command lists the full pathname and comments of the archive
	   files as well as the same information as the "l" command.

	   Use the "-jp" switch to pause the output after each screen.

	   The "-jv" switch will display only the pathnames to the screen.

	   The "-jv1" switch will display the archive data in a manner
	   suitable for sorting on various fields for use with the "o"
	   command.

	w: Where are text strings in archive

	   This option will cause ARJ to prompt the user whether to ignore
	   case when searching.  It will also prompt the user whether to
	   display the context of any string matches.  If so chosen, ARJ
	   will display the matched string and the following characters up
	   to 78 characters with all of the non-printable characters
	   including newlines replaced by question marks.  When the display
	   context option is chosen, ARJ will inhibit the progress
	   indicator.  When the option "-jv" is set in display context
	   mode, more context characters will be displayed up to the limits
	   shown below.

	   -jv = 6 lines, -jv1 = 12 lines, -jv2 = 18 lines, -jv3 = 24 lines

	   Then, this command will prompt the user for up to 20 text strings
	   to search for within the archive.  A count of all matches will be
	   displayed after each individual file is scanned.

	   Search strings are limited to 79 characters.

	   Matches that span archive volumes will not be detected by
	   this string search.

	   You can search multiple ARJ archives with a command like:

	   ARJ w \docs\*.arj

	x: eXtract files with full pathname

	   This command extracts one or more files from the archive to
	   their full paths in the current directory or to the base
	   directory if specified.  ARJ normally stores pathnames as if
	   they were children of the target directory.	Any drive or root
	   directory specifications are stripped before extracting unless
	   the "-jf" switch is specified with the "x" command.

	   Example:  arj x archive *.c

	   If you wish to extract only a portion of an archive and that
	   portion is a directory containing directories, you should use
	   the "-p1" switch.  See the "-p" switch for more information.

	   Refer to the description of the "e" command for more
	   information about extraction.


     ARJ SWITCH OPTIONS:

	The letters within the parentheses:

	   (All) - all commands
	   (afu) - add, freshen, update, move commands
	   (Upd) - any command that modifies/updates an archive
	   (ce)  - comment and extract commands
	   (ex)  - extract commands
	   (lv)  - list commands

	-: (All) skip any more switch options

	   The switch option "--" will cause ARJ to stop looking for any
	   more switch options on the command line.  This is useful for
	   entering filenames beginning with "-".

	   Example:  ARJ a archive -- -file

	!: (All) set list char

	   This option allows the user to set the character used for list
	   files.  The option "-!" with no specified character toggles
	   (turns off) the current list file character (default "!").

	   Syntax:  ARJ a archive -!@ @list.fil
		    ARJ a archive -! !.bat

	   The first example above sets the list file character to the one
	   used by LHA and PKZIP.

	$: (auex) add/extract volume label

	   This option allows the user to store or extract DOS volume
	   labels in ARJ archives.  It is possible to have multiple labels
	   in one archive.  At ARJ 2.10, you can only add or extract volumes
	   labels at DOS 2.0 and above.  The "-$" option may be specified
	   with or without a drive specification.  The drive can be
	   specified by appending the letter and optionally the ":" to
	   "-$".  If none is specified, ARJ assumes the current drive
	   unless a specified target base directory has a drive
	   specification.

	   WARNING:  Currently, ARJ allows multiple volume labels and
	   duplicate volume labels in the same archive.  You can delete one
	   or more duplicate labels with the "ARJ d -q archive label"
	   command.  ARJ will query you on each occurrence of "label".
	   This "faulty" mechanism allows a file and label of the same name
	   to be added to an archive.  The capability of having duplicate
	   labels in the same archive MAY NOT be present in future versions
	   of ARJ.

	   The SFX and SFXJR modules DO NOT support volume label extraction!

	   On the list screen, volume labels will be indicated by the "V"
	   under the "T" column.

	   Syntax:  ARJ a archive -$	       add all files and the label
					       of the current drive.
		    ARJ a archive ... -$B      add only the label of drive B
		    ARJ a archive ... -$B:     add only the label of drive B
		    ARJ u archive ... -$B:     add only the label of drive B

	   To extract volume labels, you must select the label by setting
	   "-$" and specifying a matching wildname/filename.

	   Syntax:  ARJ e archive doslabel -$  extract the label named
					       doslabel to the current drive.
		    ARJ e archive -$D:	       extract all files to the
					       current drive and extract the
					       label to drive D:.
		    ARJ e archive label B:\ -$ extract all files to B:\ and
					       the label to drive B.

	   ARJ will display all labels over 8 characters with a "." in it
	   like a normal DOS filename.	ARJ will only create standard
	   uppercase DOS volume labels.

	   Volume labels created by utilities other than standard DOS
	   commands like LABEL and FORMAT may cause label access problems
	   for ARJ.  For example, Norton's VL.EXE can create labels with
	   lowercase letters.  You will need to use LABEL.COM to delete
	   these labels in order to let ARJ set a new label.  Programs that
	   can delete unusual labels have to do absolute writes to disk or
	   use a wildcard ("*.*") delete of files with the label attribute
	   in the root directory.  A single bit corruption in the program
	   can result in the deletion of ALL files in the root.  ARJ
	   currently chooses not to take that risk.

	a: (afu) allow any file Attribute

	   By default ARJ will not select system or hidden files via
	   wildcarding unless the "-a" option is specified.

	   The "-a1" switch causes ARJ to add any directories in the
	   selected set of matching filespecs to the archive being built.
	   This switch also selects hidden and system files as in the "-a"
	   switch.  Even empty directories will be added.  The "l" command
	   will display such directories with a "D" under the "T" (file
	   type) header.

	   Older releases of ARJ will skip over empty directory entries.
	   The ARJSFX and ARJSFXJR modules CAN process empty directory
	   entries.

	   This option is useful for saving software directories with needed
	   empty directories.

	b: (afu) Backup changed files

	   The "-b" switch will select only files that have the archive bit
	   set.

	   If you specify the "-b1" option, files with the archive bit set
	   will be selected and the archive bits of all archived files will
	   be reset after a successful archive has been built.

	   Example:  arj a a:backup1 c:\*.* -b1 -r -va	 simulates BACKUP
	   command.

	   The "-b2" switch does NOT select files.  It causes ARJ to reset
	   the archive bits of added files.  If the "-f" or "-u" option has
	   been selected, ARJ will reset the archive bits of files that are
	   already duplicated in the archive.

	   Example:  arj a e:archive c:\*.* -b2 -r    archives all files on
	   the C drive and resets all archive bits.

	c: (All) skip time-stamp Check

	   Normally with the "u" and "f" commands, ARJ will only update
	   files to an archive which are newer.  The "-c" switch will cause
	   ARJ to update the archive regardless of the date-time modified
	   time stamps.

	   When extracting files from an archive with the "-y" and "-f"
	   switches set, ARJ would normally skip extracting older files.
	   The "-c" switch will force ARJ to extract these older files.

	d: (afu) with Delete (move)

	   This switch provides the standard MOVE command.  Successfully
	   added files will be deleted.  When used with the "-f" or "-u"
	   option, ARJ will also delete files that are already duplicated
	   in the archive.  ARJ will prompt the user before deleting the
	   files unless the "-y" switch is specified.  Also, you can use
	   the "m" command which does not prompt before deleting the files.

	   ARJ a archive filename -d -y       is equivalent to

	   ARJ m archive filename	      and

	   ARJ a archive filename
	   delete filename

	e: (afu) Exclude paths from filenames

	   By default ARJ always stores the pathname of the archived file.
	   This switch will cause ARJ to store only the filename component.

	   The "-e1" switch option causes ARJ to NOT store the base
	   directory name with the filenames in the archive.

	   Example:  ARJ a archive C:\SOFTWARE\ARJ\ *.* -r -e1

	   In the above example, ARJ will NOT store the C:\SOFTWARE\ARJ\ as
	   part of the filenames.

	   When updating files within an archive, ARJ uses the full
	   pathname to match against the full name of the selected files.
	   The "-e" and "-e1" option affect this exact matching.  If "-e"
	   is specified, only the filespecs of the selected files will be
	   matched against the full pathname of the files in the archive.
	   If "-e1" is specified, the full pathname minus the base
	   directory of the selected files is used to match against the
	   full pathname of the files in the archive.

	   In other words, ARJ will only update a file within an archive if
	   the name of the new file as stored in the archive would be
	   identical to the name of the original file stored in the
	   archive.

	f: (All) Freshen existing files

	   This switch used with the "e" or "x" commands causes ARJ to only
	   extract newer files from the archive.

	   This switch used with the "m" command causes ARJ to update only
	   input files with newer dates than the ones in the archive.
	   After the archive has been updated, all updated selected files
	   and all up to date selected files will be deleted.

	   The ARJ m -f command is very similar to the LHARC m command.

	g: (All) Garble with password

	   This switch followed by a password "-gpassword" will encrypt or
	   decrypt an archived file.  During a "l" or "v" command, a
	   garbled file will display an "G" after the method number.

	   Example:  ARJ e archive -gpassword

	i: (All) with no progress Indicator

	   Do not display the percentage progress indicator.  The progress
	   indicator appears during the add, extract, search, and test
	   operations.

	   The "-i1" option provides a bar type graphical progress
	   indicator for the compression, extraction, and testing type
	   commands of ARJ.  This provides an alternative to the simple
	   numeric increasing percentage progress indicator.

	j: (All) selects alternate set of switch characters.

	   This switch toggles the set of switch characters.  The toggle is
	   reset at end at of each separate switch sequence back to the
	   main set of switch characters.

	   For example, "-ja" is not the same function as "-a".  However,
	   "-jja" is the same as "-a" because of the double toggle.  Also,
	   "-jaje" is NOT the same as "-ja -je".  The switch sequence
	   "-jae" is the same as "-ja -je".

	k: (Upd) Keep archive file backup

	   Backup the original archive file during an update.  The old
	   archive will be suffixed with ".BAK".  Any existing ".BAK" file
	   will be overwritten.

	l: (All) create List_name file

	   This switch will cause ARJ to dump to the filename after the
	   "-l" switch all of the filenames to be processed by this ARJ
	   command.  This list contains all files that matched the file
	   wildnames given on the command line.  Other options do NOT
	   affect the output of filenames to this list file.  To get an
	   index file for backup purposes, use the "-ji" option.

	   This list file can be used as a listfile on the command line.

	   Example:  ARJ a -lname.lst archive *.exe

	   This example will create a file named "name.lst" with all *.exe
	   files.

	m: (afu) with Method 0, 1, 2, 3, 4

	   Method 0 = storing	(no compression)
	   Method 1 = maximum compression (default compression method)
				(requires 282,000 plus bytes memory)
	   Method 2 = slightly less compression and faster
				(requires 282,000 plus bytes memory)
	   Method 3 = less compression and less memory and faster
				(requires 249,000 plus bytes memory)
	   Method 4 = fastest compression
				(requires 235,000 plus bytes memory)

	   Method 2 (-m2) provides an excellent combination of speed
	   and size reduction.

	   Example:  ARJ a archive *.exe -m2

	   The "-jm" option will usually improve the size reduction of
	   methods 1 and 2 at the cost of speed and memory.  The behavior
	   of "-jm" with -m3 and -m4 is UNDEFINED.

	   Method 4 uses a different decoder than 1 to 3.

	n: (All) only New files (not exist)

	   With the "e" or "x" commands, extract files that do not exist in
	   the target directory.

	   WIth the "a" or "m" commands, archive files that do not exist in
	   the target archive.

	o: (All) On or after date YYMMDDHHMMSS

	   The switch "-o" by itself means select files modified today.  If
	   "-o" is followed by a date and optionally a time, ARJ will only
	   select files modified on or after that date-time.

	   Example:  ARJ a test -o9001021700	means select files modified
	   on or after Jan 2, 1990, 5:00 PM.

	   Years less than "80" will be considered as 21st century years.

	   There is no option for using other date-time formats.

	   The switch "-ob" selects files modified before today.  If "-ob"
	   is followed by a date and optionally a time, ARJ will only
	   select files modified before that date-time.

	p: (All) match using full Pathnames

	   When "-p" is specified, ARJ looks for an exact pathname match.
	   This can be modified by the "-e" option.

	   For non-update commands and specified filenames with paths, ARJ
	   will match the full path with or without the "-p" switch.

	   To match directory paths that contain subdirectories, you should
	   use the "-p1" switch.  This switch sets ARJ to match only the
	   initial portion of the pathnames against the wildnames
	   specified.  For example, if your archive contains the TURBOC++
	   directory named TC and you wish to extract the INCLUDE
	   subdirectory along with the subdirectory INCLUDE\SYS, you can
	   use the following command:

	   ARJ e archive TC\INCLUDE\*.* -p1

	   If you wanted to extract all of the INCLUDE\S*.* files including
	   the contents of the SYS subdirectory, you can use the following
	   command:

	   ARJ e archive TC\INCLUDE\S*.* -p1

	q: (All) Query on each file

	   This switch causes ARJ to prompt the user prior to acting upon
	   each archived file for all but the "j", "l", "t", "v", and "w"
	   commands.  This allows you to selectively delete, add, etc.

	r: (All) Recurse subdirectories

	   This switch will cause ARJ to recurse any wildcards specified on
	   the command line including ARJ archive filenames by traversing
	   all subdirectories scanning for matches.

	   ARJ will also recurse non-wildcard filenames as in:
	   ARJ a archive FILE.BBS -r

	s: (Upd) set archive time-Stamp

	   This switch causes ARJ to set the date-time stamp of the archive
	   to that of the newest file in the archive.

	   This option will also work with non-update commands as in:
	   ARJ l archive -s ...

	   The "-s1" switch is used to keep the old archive date-time
	   stamp.  The new archive will have the same timestamp as the
	   original archive.

	   The "-s2" switch is like the "-s" switch except that it only
	   works for archive modification commands.  This makes it more
	   suitable for use in the ARJ_SW environment variable.

	t: (afu) set file Type

	   This switch causes ARJ to open and read the file to be archived
	   in binary or text mode.  The default is binary mode (-t0).  To
	   archive in text mode, use the -t1 switch.  The "-t" switch is
	   equivalent to "-t0".

	   If you specify the switch "-t0", ARJ will always use the binary
	   mode even for freshening text mode files already in the archive.

	   The file type "text" is only needed for future cross platform
	   transfers of ARJ archives.  It enables ARJ to extract text files
	   to the host file system with the text newline sequence that is
	   correct for that operating system.

	   However, this mode may produce slightly better size reduction.
	   The "-t1" option combined with "-jh65000" can produce some of
	   the best size reduction numbers.  Extraction of files compressed
	   in text mode is significantly slower than the extraction of
	   binary files.

	   DO NOT use the text mode on non-text files!!!  On non-text files
	   ARJ will prematurely stop input if it finds an embedded EOF
	   character (CTL Z).  This will produce a LOSS of data on binary
	   files.  Graphics characters and some printer control characters
	   are considered non-text.  The "-t1" options strips the text to
	   7-bit characters.

	   ARJ will look at the first 4096 bytes of the input file looking
	   for 8-bit non-text data.  If ARJ finds any 8-bit data, it will
	   automatically backtrack and switch to "-t0" (default) binary
	   mode for that particular file.  In addition at the end of
	   compressing the input file, if ARJ finds that the input file
	   size is not greater than 75 percent of the binary file size
	   (size on disk), ARJ will report an error for that input file and
	   increment the error count.  This should help avoid the problem of
	   accidentally compressing executable files with the "-t1" option
	   which results in lost data.	These tests are not foolproof.

	   The original file size reported by the "l" and "v" commands is
	   the actual number of bytes input during text mode compression.
	   This is usually the MS-DOS file size minus the number of
	   carriage returns in the file, since C text mode strips a file of
	   carriage returns.

	u: (All) Update files (new and newer)

	   This switch used with the "e" and "x" commands causes ARJ to
	   extract newer and non-existing files.

	   This switch used with the "m" command causes ARJ to update only
	   input files with newer dates than the ones in the archive and
	   add new files to the archive.  After the archive has been
	   updated, all added files and updated selected files and all up
	   to date selected files will be deleted.

	v: (All) enable multiple Volumes

	   This switch is required to put ARJ into multiple volume mode.

	   This switch allows the creation of multiple volumes in the ADD
	   mode.  The command "arj a a:arjvol \*.* -b -r -v360000" allows a
	   user to backup up all files changed since the last backup to
	   multiple floppy disks.  ARJ will pause between volumes to allow
	   changing disks.  Subsequent volumes will be suffixed .A01, .A02,
	   .A03, ... , .A99, .A00, .A01, etc.

	   Archived files can be split across volumes.	ARJ will try to
	   fill each volume to within 200 to 3000 bytes of specified
	   maximum size.

	   The command "arj x a:arjvol -v" would restore files starting
	   from arjvol.arj.  You must specify the entire ARJ volume name
	   including the .Ann suffix when starting from the middle of a
	   series of volumes.

	   The pauses between volumes can be suppressed with the "-y"
	   switch.  You should not suppress the pauses when archiving to
	   diskettes or extracting from diskettes.  The "-jy" option will
	   allow you to suppress specific types of queries.

	   Because of the splitting process, archived split files with a
	   size of zero bytes are possible.  This is not an error.

	   If you comment your archives with long comments, you should take
	   that into account when specifying volume size.  You should
	   specify a smaller volume size during the "a" command before
	   adding the comments.

	   The "-v" switch will accept the abbreviations 360, 720, 1200,
	   and 1440.  These will be translated to 362,000, 730,000,
	   1,213,000, and 1,457,000 bytes, respectively.  Please note that
	   if the available disk space is less than the requested amount,
	   ARJ will prompt the user for permission to continue.

	   You can use the "K" modifier as a shortcut for "000".  For
	   example, 100K means 100000.	"K" does not mean 1024.

	   The "-vv" switch turns on the next volume beep option.  When you
	   select this option, ARJ will sound a beep prior to the next
	   volume.  The "v" modifier must come before any other modifier.

	   The "-va" switch sets the disk space auto-detect option.  ARJ
	   will check for the disk space available on the target directory
	   and try to use all or most of it.  This option is aimed at
	   diskette usage.  Please note that this switch option detects
	   free disk space.  It does not detect formatted disk space.

	   Examples:  ARJ a A:backup -b -va
		      ARJ a backup -v360

	   The switch modifier "s" can be used to make ARJ execute one
	   specified system command prior to each volume or make ARJ pause
	   for manual execution of system commands.  This is useful for
	   purging target diskettes before ARJ writes to them.	The "s"
	   modifier must follow the "a" modifier or the volume size.
	   Optionally, after the "s" modifier, you can specify a system
	   command or batch file name.	ARJ will automatically execute the
	   command or batch file before each volume.  If the command has
	   embedded blanks, then the entire switch option must be
	   surrounded by double quotes.  The system command is executed
	   before ARJ executes the auto-detect space option.

	   Examples:  ARJ a A:backup -vas
		      ARJ a A:backup -vvas
		      ARJ a A:backup -v360s
		      ARJ a A:backup -vv360s
		      ARJ a A:backup -vaspurge.bat
		      ARJ a A:backup -v360sdelete.bat
		      ARJ a A:backup "-vasFORMAT A:"
		      ARJ a A:backup "-vasDIR C:\ "

	   Note that the last example has a space before the last double
	   quote mark.	If the last space is missing, the internal command
	   line parser will make the double quote mark part of the DIR
	   command.

	   Volume archives can be used as stand-alone archives save for the
	   files that are split across volumes.

	   It is recommended that the "-jt" (test archive) option be used
	   with the "-v" switch to ensure perfectly built volumes as it is
	   tedious to retest volumes after they are built.

	   During ARJ operation in non-update commands, ARJ will not abort
	   when it cannot open the correct sequential ARJ volume archive.
	   It will report the open error and proceed to the "Ok to process
	   the next volume?" prompt.  At this point it is possible to swap
	   diskettes to put the correct volume in place.  This feature is
	   disabled if the "-y" option has been specified.

	   For those who have enough free hard disk space, the -v option
	   can be used to make backing up the hard disk fairly easy.  ARJ
	   can be set to create multiple floppy sized volumes on the hard
	   disk for later copy to diskettes.  So even if ARJ is slow, you
	   can fire up an ARJ backup and some time later, you can quickly
	   copy the volumes to floppies.  Below are sample backup commands:

	   arj a backup *.* -b2 -r -v360 -y -jt -js	full backup
	   arj a backup *.* -b1 -r -v360 -y -jt -js	incremental backup

	   See the "-jn" and "-jx" options to see how to recover from an
	   abort in the middle of a backup type operation.

	   WARNING:  Updating multiple volume archives with the "-v" switch
	   set is NOT recommended, especially if the new file sizes are not
	   identical.

	   TIP:

	   To pre-determine the number of diskettes required to archive a
	   set of data, you can take advantage of the "s" option of the
	   "-v" switch.  The "s" option lets you execute a DOS command
	   prior to each volume.  You can specify a command that deletes
	   the previously created archive volume.  This lets you use the
	   same floppy diskette/hard disk space to build the multiple
	   volumes.

	   Example:  ARJ a -r "-vasdel a:volume.a??" -y a:volume c:\*.*

	w: (Upd) assign Work directory

	   By default, ARJ builds a new ARJ archive file in the same
	   directory as the old archive file.  By specifying the "-w"
	   switch, you can specify the working directory where the
	   temporary archive file will be built.  After the temporary
	   archive file is built, it is copied over the original one and
	   deleted.

	   Normally ARJ requires enough disk space for the original archive
	   and the new temporary archive.  Specifying the "-w" switch
	   allows you to move some of that disk space requirement to
	   another directory.

	   If the copy of the temporary archive on top of the original
	   archive fails, you will have to manually do the copy.  ARJ will
	   not delete the temporary archive in this error situation.

	   Example:  ARJ a -we:\temp\ archive *.c

	x: (All) Exclude filenames

	   This switch is used to exclude filenames or wildnames from the
	   list of filenames to be processed.

	   Example:  ARJ a archive soft\*.* -r -x*.exe -x*.obj -xtest

	   This example will archive all files in the soft directory and
	   sub-directories with the exception of any files named "test"
	   or ending in ".exe" and ".obj".

	   You can also specify an exclude file list by preceding the
	   filename with the list character "!".  The exclude file list
	   must contain a list of filenames/wildnames one per line with no
	   leading or trailing blanks.

	   Example:  ARJ a archive soft\*.* -r -x!exclude.lst

	   The "-x" option also allows you to exclude an entire path
	   including subdirectories from being selected for processing.

	   Syntax:  ARJ a archive C:\*.* -xC:\TEMP\

	   The "\" after C:\TEMP indicates to ARJ that everything below
	   C:\TEMP\ is to be excluded.

	   Note that the exclude directory option requires that the
	   directory be specified in the same relative path that the
	   selected files use.

	   Example:

	   arj a archive \temp\*.* -x\temp\firstdir	is correct usage
	   arj a archive \temp\*.* -xC:\temp\firstdir	is NOT correct because
							of the C:

	   The "-x" switch also works for non-update commands like
	   "e"xtract and "l"ist.

	   Examples:

	   arj e archive -x*.exe	   extract all files except *.exe files
	   arj l archive -x*.exe -x*.obj   list all files except *.exe and *.obj

	   A maximum of 8000 filenames or wildnames can be excluded.

	y: (All) assume Yes on all queries

	   Use this switch for batch type uses of ARJ.	This switch
	   disables most of the normal user queries during ARJ execution.
	   Use this switch to suppress overwrite queries in the "e" and "x"
	   commands, to suppress the make new directory query in the "e"
	   and "x" commands, to suppress the new filename prompt when an
	   open file operation fails in the "e" and "x" commands, to
	   suppress the pause during the "s" command and to suppress the
	   next volume pause using the "-v" option.

	   Use this option with due caution, especially during extraction
	   as this sets ARJ to overwrite files.  However, the "-n" option
	   can be used to avoid any overwriting.

	   As an alternative, you can use the "-jy" option which lets you
	   suppress individual types of user queries.

	z: (ce) supply file for archive comment

	   The "-z" switch has been provided to facilitate batch commenting
	   of ARJ archives with the "c" command.  When the "-z" option has
	   been specified with or without a comment file, ARJ will only
	   process the archive header comment and will skip any file
	   commenting unless the "-jz" switch has been specified.

	   A comment file containing only a single blank can be used to
	   erase comments from ARJ archives.

	   Syntax:  arj c archive -z
		    arj c archive -zcomment.txt

	   The "-z" option also allows one to dump the ARJ archive header
	   comment to a file.  This will only extract the main archive
	   comment and not the individual file comments.

	   Syntax:  arj e archive ... -zcomment.txt    dumps only the comment
		    arj x archive -zcomment.txt        dumps comment and files

       ja: (All) show ANSI comments

	   Display any ANSI escape sequences unaltered.  By default, escape
	   characters in comments are not displayed.  Not displaying ANSI
	   command is the default because of ANSI BOMBS.  Using ANSI
	   commands, it is possible to redefine the keyboard of users using
	   certain ANSI drivers.  For example, a key could be redefined to
	   "echo y | del \*.*".

      jc1: (All) disable Console RAW mode check

	   ARJ tests the console device for RAW mode.  If the console is in
	   RAW mode, ARJ will use cgets() instead of fgets() for input.
	   This prevents ARJ from hanging the system.

	   If this feature causes a problem with your system, you can
	   disable this test feature with the "-jc1" switch.

       jd: (exlv) ensure free Disk space

	   In extraction mode, this option causes ARJ to always ensure that
	   it will leave the user specified amount of disk space available.
	   ARJ will skip files that would exceed the disk space available
	   limit.  Files that are skipped will each count as an error.	The
	   default free space is zero bytes.

	   Example:  ARJ e archive basedir\ *.doc -jd100K

	   In the above example, ARJ will not extract any files that will
	   cause the disk free space to be less than 100,000 bytes.  The
	   "K" is a synonym for "000".	For example, 100K means 100000.

	   In "l"ist or "v"erbose list mode, this option sets an error
	   check at the end of the listing screen based upon the total of
	   the original sizes of the files selected.  If the total size
	   would exceed the user specified free space limit, ARJ will
	   report an error at the end of the listing screen.

	   Example:  ARJ l archive *.doc -jd10000

	   In this example, ARJ will report an error if the current
	   available disk space minus the total of the *.doc files is less
	   than the specified minimum of 10,000 bytes.

	   Example:  ARJ e archive *.* -jd0

	   In this example, ARJ will skip extraction of any files that
	   would result in a disk full error.

       je: (Upd) create self-Extracting archive

	   This option causes ARJ to create a self-extracting .EXE file
	   instead of an .ARJ file.  This self-extractor is about 14500
	   bytes in size and supports full pathname extraction.  The "-je1"
	   switch creates a smaller self-extracting .EXE file.	The
	   ARJSFXJR module is less than 5400 bytes in size.

	   The SFX modules do NOT support multiple volume archives.  That
	   would serve little purpose because you would have to distribute
	   multiple files.  In this case, DEARJ (available to registered
	   users) would serve adequately.  DEARJ supports all of ARJ
	   extraction functionality including multiple volume archives.

	   At ARJ 2.10, the SFX executable modules are pre-compressed using
	   LZEXE.  This may cause false indications with EXE scanning
	   programs showing that an ARJ SFX archive is a LZEXE compressed
	   file. Only the executable header module is LZEXE compressed.
	   The actual archive is ARJ compressed, of course.

	   The current commands ARJSFX supports are:

	   Usage: ARJSFX [-command] [-switch(s)] [directory\] [file(s)]

	   Commands:
	   e: Extract files	       v: Verbosely list contents
	   l: List contents	       x: eXtract files with pathname (default)
	   t: Test contents

	   Switches:
	   a: show ANSI comments       n: only New files (not exist)
	   c: skip time stamp Check    p: match with Pathname
	   f: Freshen existing files   u: Update files (new + newer)
	   g: unGarble with password   y: assume Yes on queries

	   NOTE!!!  ARJSFX uses the "-" character before all commands and
	   switches.  This is to allow extraction of files named e, l, etc.

	   The default ARJSFX command is "-x" extract files with pathnames.
	   When extracting pathnames, ARJSFX will prompt for permission to
	   create new directories unless the "-y" option is specified.
	   ARJSFX will create absolute or relative directories depending
	   upon whether the root directory has been stored in the pathname
	   in the archive.  Saving the root is done using the "-jf" option.

	   To avoid extracting to paths, the archive creator should use the
	   "-e" option to exclude path specs.  The user extracting the SFX
	   module can specify the "-e" command to extract to the current
	   directory.

	   ARJSFX does not support compression method 4.

	   The ARJSFX module supports the ARJ-SECURITY envelope feature by
	   itself.  The ARJ-SECURITY feature is only available as a
	   licensed option.  It is intended as a feature for software
	   developers.

	   ARJ will create a self-extracting module without an intermediate
	   archive file.

	   Example:  ARJ a software *.* -je

	   If you want to make a self-extracting module from an ARJ
	   archive, use the freshen command with a non-existent filename
	   argument such as "...".  In this case, ARJ will report the
	   self-extractor created with 0 file(s).  The 0 file(s) indicates
	   that no files were modified during the self-extractor creation.

	   Example:  ARJ f software ... -je

	   IMPORTANT:  When executing an ARJSFX module on a system with the
	   CONSOLE device set to RAW mode, the ARJSFX module will abort on
	   user input to avoid hanging the system.  Use of the "-y" switch
	   on the command line will avoid the problem.

	   Example:  ARJ210 -y

	   The ARJSFXJR module created with the "-je1" switch is a
	   stripped-down version of ARJSFX.  ARJSFXJR does not accept any
	   command line options.  It does not support method 4 or text mode
	   "-t1" or garbled "-g" archives.  An ARJSFXJR module containing
	   files with pathnames will extract to the paths.  ARJSFXJR will
	   automatically create directories as needed to build the paths.

	   Example:  ARJ f software ... -je1

	   Both the ARJSFX and ARJSFXJR modules will by default extract to
	   relative/absolute path specs if the archive contains
	   relative/absolute path specs.

	   More examples:

	   Build an SFX module with absolute pathnames for extraction to
	   the absolute pathnames:

	   ARJ a -r -je -jf DISTRIB \product\*.*

	   The user need only type "DISTRIB -y" to automatically recreate
	   the "product" directory on the current drive.

	   Build an SFX module with relative pathnames for extraction to
	   relative pathnames:

	   ARJ a -r -je DISTRIB \product\*.*

	   The user need only type "DISTRIB -y" to automatically recreate
	   the "product" subdirectory in the current directory.

	   Build an SFX module with relative pathnames for extraction to
	   relative pathnames excluding the base directory:

	   ARJ a -r -e1 -je DISTRIB \product\	*.*

	   The user need only type "DISTRIB -y" to automatically recreate
	   the files and subdirectories of the "product" directory in the
	   current directory.

	   Build an SFXJR module with filenames (no path specs).

	   ARJ a -e -je1 DISTRIB \product\*.*

	   The user need only type "DISTRIB" to automatically extract the
	   entire contents of "DISTRIB.EXE" to the current directory.

       jf: (afux) store/use Full specified path

	   Normally, ARJ will strip all pathnames of drive letter and root
	   symbol.  This switch disables this action.  When extracting with
	   the "x" command from an archive that was built with this switch,
	   ARJ will normally strip any drive letter and root symbol, unless
	   the "-jf" option is specified again.

	   The "-jf1" option will strip only the drive spec and NOT the root
	   symbol.  You can use either the "-jf" or "-jf1" option during
	   extraction to force use of the root directory.

       jh: (afu) set Huffman buffer size

	   ARJ has a default static Huffman buffer size of 16384 bytes.
	   This buffer size is better for compressing executable files.
	   The buffer size in ARJ 0.15 and earlier was set to 65500 bytes.
	   That size is better for large text files.  You may specify a
	   buffer size from 2048 to 65535 bytes.

	   Example:  ARJ a archive *.txt -jh65500

       ji: (afu) set Index filename

	   The "-ji" switch is used to create an index file containing the
	   filenames archived.	This is especially helpful when using ARJ
	   to do multiple floppy type archives.  This file SHOULD NOT be
	   created on the floppy diskette if the floppy diskette is changed
	   during the archival process.

	   The index file contains two types of text lines.  The first type
	   is the volume name record.  It contains the date, time, starting
	   file position, and the archive name.  The second type is the
	   filename record.  It contains only the filename.

	   This information is also useful for restarting "-v" multiple
	   volume archives.  You need the filename and the starting file
	   position.

       jk: (Upd) Keep temp archive on error

	   When the "-jk" switch has been specified, ARJ will keep the
	   temporary archive during an aborted archive build/update.  During
	   a failed build, ARJ will modify the temporary archive to make it
	   useable by removing the broken portion.

       jm: (afu) set Maximum compression

	   The "-jm" switch sets the maximum compression mode.	This mode
	   changes both method 1 and method 2 to the maximum compression for
	   those methods.  This may increase compression time significantly.

	   You can get a 1 to 8 percent improvement in compression with
	   ARJ -m1 -jm.

	   The "-jm1" option provides slightly less compression than "-jm"
	   at a faster speed.  This can range from slightly faster to much
	   faster.

	   Usage of "-jm" with "-m3" or "-m4" is NOT to be relied on.

       jn: (afu) set restart Name

	   The "-jn" switch is used to restart interrupted multiple volume
	   archives in conjunction with the "-jx" switch.  All selected files
	   are skipped up to but not including the named file.

	   Example:  ARJ a volume -v360 -r -jn\BIN\TREE.COM -jx1230

	   In the above example, all files scanned up to \BIN\TREE.COM are
	   skipped.  Archiving will start at file position 1230 of file
	   \BIN\TREE.COM.

	   IMPORTANT!!!  The exact name of the starting file must be specified
	   according to the wildnames/filespecs specified.  This name is the
	   same as displayed by the Adding filename display and the same as
	   written to the "-ji" index file.  Please note that \DOS\TREE.COM is
	   not considered the same as DOS\TREE.COM with this option.

       jo: (am)  query when updating file

	   The "-jo" switch is used to query the user when using the ARJ "a"
	   or "m" commands to add files to an archive.	Before ARJ
	   overwrites an existing internal archive file when using "-jo",
	   ARJ will query the user with "Update <filename>? ".	Without this
	   option, ARJ will overwrite the internal archive file without
	   querying.

       jp: (lv)  Pause after each screenful

	   This switch will cause ARJ to pause after listing each screenful
	   of data for the "l" and "v" commands.  Press the ENTER key to
	   continue the listing.  You can also enter "quit" to exit ARJ.

	   In one special case, "ARJ -? -jp", the use of the -jp switch
	   toggles page pauses off, because by default in help mode,
	   pausing is on.

       jr: (All) Recover broken archive files

	   This switch is used to access headers and files in an archive
	   that has been corrupted either with bad data or missing data.
	   This switch lets ARJ find the next valid header for listing,
	   extraction or testing.  ARJ will continue to look for headers
	   until it finds the end of file.  At that point ARJ will print an
	   error message stating that it encountered the end of file
	   unexpectedly.  This is to be expected.

	   If file header data has been corrupted, ARJ will be unable to
	   recover any file data associated with that header.  If file data
	   has been corrupted, ARJ will abort but not delete any extracted
	   file data.  To continue recovering from such a corrupted
	   archive, simply specify one filename to extract at a time or use
	   the "-q" query switch to prompt for individual files.

	   Example:  ARJ e archive -jr -q

       js: (afu) Store archives by suffix

	   This switch is used to force ARJ to store and not compress files
	   with the following extensions: .ARJ, .ZIP, .LZH, .PAK, .ARC.

	   The file extensions can be specified as follows:

	   ARJ a archive -js.zoo.ice.gif

	   The above command will store files with extensions ending in
	   .ZOO, .ICE, and .GIF.  This overrides the defaults.

	   You can use the environment variable ARJ_SW to set up your own
	   defaults as follows:

	   set arj_sw = -js.arj.zip.lzh -js-

	   The "-js-" turns off the option by default so that when you
	   specify the "-js" switch on the command line, ARJ will already
	   know what extensions you want to store.

       jt: (Upd) Test temporary archive

	   This switch causes ARJ to execute an archive integrity check on
	   the intermediate temporary archive before overwriting any
	   pre-existing original archive.  If any error occurs, ARJ will
	   not overwrite the original archive.	When used with the "-w"
	   switch option, ARJ will also test the final archive file as well
	   as the temporary archive before deleting any input files.

	   Example:  ARJ m archive *.c -jt

       ju: (All) translate UNIX style paths

	   This switch causes ARJ to translate any subsequently encountered
	   pathnames to MS-DOS style from UNIX style.  This switch also
	   causes translation of filenames entered as a result of ARJ
	   prompts such as in comment filenames.

	   Example:  ARJ a archive -ju /soft/*.c

       jv: (All) set Verbose display

	   This switch sets ARJ to display more information during the
	   "t"est, "l"ist, and "ex"tract commands.

	   Example:  ARJ t archive -jv

	   The "-jv" switch causes the "v" command to display only the
	   pathnames to the screen.

	   The "-jv1" switch causes the "v" command to display the archive
	   data in manner suitable for sorting on various fields.

	   The "-jv" ... "-jv3" options can be used with the "w" (where is
	   text) command to set a larger context display.  See the "w"
	   command for more information on using "-jv".

       jx: (afu) start at eXtended position

	   This switch is used to continue a file on another archive
	   manually.  This switch is normally for use when a multiple
	   volume "a" command has aborted.

	   Example:  ARJ a arjvol.a01 manual.doc -jx100000

	   This example archives manual.doc starting from file byte
	   position 100000 and on.

       jy: (All) set individual Yes flags

	   This switch is used to suppress individual ARJ user prompts.

	   Syntax:  ARJ e archive -jy<flags>

	   where <flags> is one or more of the following characters:
	   a, c, d, k, n, o, s, v.  ARJ will assume YES for each flag
	   selected.

	   A - skip append query during a multi-volume extraction
	   C - skip create directory query
	   D - skip delete files query
	   K - skip disk space availability query
	   N - skip new filename prompt
	   O - skip overwriting existing file query
	   S - skip scanned enough text query
	   V - skip ok to proceed to next volume query

	   Example:  ARJ x volume -v -jyaco
		     selected append, create, and overwrite "yes"es.

       jz: (c) supply file for file comment

	   The "-jz" switch has been provided to facilitate batch
	   commenting of one or more files within an ARJ archive.  Only one
	   comment file can be specified.  That file will be used to
	   comment each file specified on the command line.

	   A comment file containing only a single blank can be used to
	   erase comments from ARJ archives.

	   Syntax:  arj c archive file1 -jzcomment.txt
		    arj c archive file1 -zheader.cmt -jzfile.cmt


     ARJ_SECURITY ENVELOPE:

	The ARJ-SECURITY ENVELOPE feature provides a facility similar to
	other archivers.  This feature disallows any type of modification,
	even commenting, to an ARJ-SECURED archive by ARJ.  Moreover, there
	are additional internal checks to determine if the ARJ-SECURED
	archive has been modified in any way.  This feature is intended for
	use by software developers who distribute their software in
	archived format and is only available for a special fee.  However,
	there can be no guarantee that this mechanism cannot be defeated.

	In normal use, ARJ will display one of two messages when processing
	an archive with a valid ARJ-SECURITY envelope.	ARJ will either
	state that the archive MAY have a valid ARJ-SECURITY envelope or
	that the archive HAS a valid ARJ-SECURITY envelope.  ARJ can only
	be sure that the envelope is valid when the "t", "e", or "x"
	command is executed on ALL of the archived files.  In order to
	fully test the security envelope of an archive, use the "t" command
	as in "ARJ t archive".

	If the security envelope has been tampered with or the archive has
	suffered data corruption, ARJ will display a message stating that
	the security envelope has been violated.


     KNOWN ARJ ISSUES/PROBLEMS:

	When using a working directory, ARJ does not check for disk space
	before overwriting the original archive.  Be sure you have enough
	space before updating an archive using the "-w" switch.

	DO NOT continue to use older versions of ARJ earlier than 0.15a.
	ARJ archives that have been created with 2048 byte sized comments
	will produce unpredictable results when processed by older versions
	of ARJ.

	Because of a bug with extended archive header processing, you
	should convert to ARJ 2.10 as soon as practical.  This bug is NOT a
	current problem because no version of ARJ supports the use of the
	extended header.

	There is a reported problem using ARJ and floppy disk drives when
	using the disk cache program SUPER PCKWIK 3.30 with advanced
	diskette support (/D+).  The system will occasionally hang when ARJ
	attempts to read/write the diskette.  Disabling the SUPER PCKWIK
	option with /D- appears to remove this problem.  Other programs
	have similar problems with this feature of SUPER PCKWIK.  Other
	cache programs like PC-TOOLS PC-CACHE 5.5 and 6.0 do not have this
	problem with ARJ.


     ARJ TECHNICAL SUPPORT:

	I have received many useful suggestions from users all over the
	world.	Many of those suggestions are in this version or will be
	incorporated in later versions of ARJ.

	I will try to resolve software problems with ARJ as they are made
	known to me.  Please notify me of any ARJ problems by mail, email
	or via the ARJ support BBSes mentioned below.  Despite the fact
	that ARJ is free for many users, I will strive to make ARJ a
	robust, stable and useful product for all users.

	To ensure a reply when using the postal system, please enclose a
	stamped self-addressed envelope with your correspondence.  Keeping
	up with the ARJ mail has become expensive.  Foreign corresponders
	should include currency or postal coupons instead of stamps.
	Otherwise, I may be unable to answer your correspondence.

	As of this ARJ version, only users who have provided some form of
	support to ARJ should request technical support.

	Your financial support is needed for the ARJ archiver and format to
	succeed.


     ARJ AVAILABILITY:

	The latest version of ARJ can be obtained from the following
	sources:

	ARJ SUPPORT BBSes:  See ARJ_BBS.DOC

	ARJ is available from a number of other BBS's, but I can only vouch
	for the integrity of the archive if the ARJ210.EXE verifies its
	ARJ-SECURITY envelope as valid.  If no security envelope exists,
	then the data has been re-archived and there is no assurance of
	data integrity.

	If none of the above sources are suitable, you may order a copy of
	the latest version of ARJ directly from the author.

	Send a check or money order for five dollars (US) to cover the
	costs of shipping and handling for U.S. delivery.  For foreign
	delivery, send ten dollars (US) to cover shipping and handling.
	Please specify diskette size (3.5 or 5.25 inch);  otherwise, a 5.25
	inch diskette will be shipped.	Please allow a few weeks for
	delivery, longer for foreign deliveries.

	Robert Jung, 2606 Village Road West, Norwood, Massachusetts 02062


     DISTRIBUTORS:

	The following are my authorized distributors for ARJ:

	In Germany:

	C.A.T. Kommunikations-System	   Internet: arj@cat.de
	Systemberatung A. Dunkel	     SubNet: arj@cat.sub.org
	Robert-Schuman-Ring 37		    FidoNet: 2:243/12
	D 6239 Kriftel, Germany 	    Mailbox: (06192) 42054 (2400 Baud)
						     (06192) 42057 (19200 PEP)
						NUA: 45619270055


     ACKNOWLEDGEMENTS:

	LHARC is the name of an archiver by Haruyazu Yoshizaki.
	PKZIP and ZIP are trademarks of PKWare, Inc.
	PAK is trademark of NoGate Consulting.

	I wish to express my gratitude to Haruyasu Yoshizaki (Yoshi) for
	developing LHARC and distributing its source code.  LHARC gave me
	the impetus to start studying data compression.  I also wish to
	thank Haruhiko Okumura for providing additional ideas.	His AR001
	and AR002 program provided the basic design for the early versions
	of ARJ.  Much has happened to the ARJ design since then.  In fact,
	only a small percentage of ARJ is derived from AR source code.	The
	most important part of ARJ, the LZ77 compression routine, is new
	and original.

	I also wish to thank Fabrice BELLARD for LZEXE which is used to
	squish the ARJ SFX modules.

	I wish to thank those who have helped in the development of ARJ.
	Those include Ron Freimuth, Michael Lawler, Arkady Kleyner, Joseph
	Teller, Mike McCombs, Brian Godette, Robb Hufalt, Axel Dunkel and
	Jonathan Forbes.  And to the many others who have helped or
	provided messages of support, THANKS!

	I wish to thank my wife, Susan, and my son, Timothy, for putting up
	with this ARJ obsession for the last several months.  Without their
	encouragement and support, ARJ would never have come to be.

	But my greatest thanks goes to Almighty God for His inspiration and
	great salvation.


     USAGE AND DISTRIBUTION POLICY:

	See LICENSE.DOC file for license policy.

	ARJ, REARJ, ARJSFX, and ARJSFXJR contain no DES technology or any
	other government protected technology.	As far as I can determine,
	ARJ, REARJ, ARJSFX, and ARJSFXJR may be exported and used outside
	the U.S. and Canada.


     FINAL COMMENTS:

	I do hope that you find this program as useful as I have.  I would
	appreciate any suggestions to improve this archiver.


	I can be reached at:

	Robert Jung at the Wonderland BBS (617) 965-3036

	Robert Jung at the Dimensional Crossroads BBS (508) 427-5379

	Robert Jung at the Bay State BBS (617) 598-6646

	Robert Jung at FIDONET address:  1:16/390.7

	Robert Jung in the COMPRESS (ILINK), LHARC / COMPRESSIONS
	(SMARTNET), SHARE (RIME) or ARCHIVERS (RELAYNET) echo conferences.

	2606 Village Road West
	Norwood, Massachusetts 02062

	Internet address:  robjung@world.std.com

	Compuserve users can enter   >INTERNET: robjung@world.std.com
	at the "Send to" prompt.  I prefer CompuServe users to send mail
	to this address as opposed to my CompuServe userid below.

	CompuServe userid: 72077,445  (Checked once or twice a week)


     End of document


```
{% endraw %}

## ARJSORT.DOC

{% raw %}
```

    ARJSORT					   April 1991


    ARJSORT.BAT is a batch file provided to give the user the facility to
    sort the files in an ARJ archive.  ARJSORT allows sorting by file
    attribute, CRC value, date-time modified, file extension, filename,
    pathname, and compression ratio.  The sort order can be set for
    ascending or descending order.

    Usage:  ARJSORT archive [/order] [/r]
	    Where /order is one of the following:

		  /a = attribute       /o = ratio
		  /c = crc	       /p = pathname
		  /d = date/time       /s = size
		  /e = extension       /t = time
		  /f = filename

	    [/r]everse, if specified, must be the last option.

    ARJSORT has been designed to work at MS-DOS 3.3 and up.  The @ECHO
    command in ARJSORT.BAT may cause problems with other versions of DOS.

    ARJSORT uses the special ARJSORT.$$$ feature of the order command.	A
    list file named ARJSORT.$$$ is expected to be in a special format by
    the order command.	That format is produced by the ARJ v -jv1 command.
    ARJSORT requires the MS-DOS SORT program to be available for ARJSORT to
    work.  ARJSORT creates several temporary files named ARJSORT.$$?.
    These temporary files will be deleted at the end of the program.


    ARJSORT Examples:

    ARJSORT archive	  - Sort files in ascending alphabetical pathname
			    order.

    ARJSORT archive /r	  - Sort files in descending pathname order.

    ARJSORT archive /d	  - Sort files in chronological date-time modified
			    order.

    ARJSORT archive /d /r - Sort files in descending chronological
			    date-time modified order.

    ARJSORT archive /s	  - Sort files in ascending file size order.


    At ARJ release 1.10, ARJSORT.COM (compiled version of ARJSORT.BAT) is
    included with the ARJ software.  This program can be used in place of
    the ARJSORT.BAT.  This COM version is better for use in DOS BATCH files
    than ARJSORT.BAT.


    HISTORY:

    1.21 - Fixed deletion of temporary files.

    1.20 - Improved ARJSORT.$$$ processing so that EDLIN is not needed.

    1.10 - Added ARJSORT.COM.


    end of document


```
{% endraw %}

## LICENSE.DOC

{% raw %}
```

     ARJ LICENSE POLICY 				   May 1991
     ------------------


     The ARJ archiver, the REARJ program, the ARJSFX module, the ARJSFXJR
     module, and its documentation are copyright (c) 1990,91 Robert K Jung,
     all rights reserved.  The ARJ programs may not be circulated in any
     incomplete or modified form, nor sold for profit, without written
     permission of the author.

     The ARJ archiver contains proprietary processes for which patent
     rights are being sought by the author.  Please note that ARJ
     compatible archivers can be built without infringing on any ARJ
     2.10 proprietary processes.  ARJ 1.10 is such a compatible
     archiver.

     If you distribute this software to others, you are required to
     distribute the ENTIRE package consisting of the following files:

     UNARJ.ARJ	  - UNARJ C source, UNARJ.EXE and documentation
     ARJ.EXE
     ARJ.DOC
     ARJ_BBS.DOC
     ARJSORT.BAT
     ARJSORT.COM
     ARJSORT.DOC
     LICENSE.DOC
     ORDERFRM.DOC
     README.DOC
     REARJ.CFG
     REARJ.DOC
     REARJ.EXE
     REGISTER.EXE
     TECHNOTE.DOC
     UPDATE.DOC
     WHATSNEW.DOC
     WHY_ARJ.DOC

     I strongly prefer that the files be distributed in the format
     originally released:  ARJ210.EXE with the ARJ-SECURITY envelope as
     created by the author.  If you must distribute the archive in ZIP
     format, please archive the ARJ210.EXE as one file inside the ZIP
     archive.

     You may not distribute the registered versions of ARJ, ARJR, and DEARJ
     except as noted in your ARJ license agreement.  ARJR is the ARJ
     program minus the help screens and SFX/SFXJR modules.  DEARJ is the
     ARJR program minus the archive modification/creation functions.  ARJR
     and DEARJ are available only to ARJ LICENSEES.  See the ORDERFRM.DOC
     for ordering information.	Those who have made donations to ARJ may
     upgrade to a SITE LICENSE with full credit for your previous donation.
     Please note that on your order.


     The use and/or sale of ARJ, ARJR, DEARJ, REARJ, UNARJ, ARJSFX, and
     ARJSFXJR (ARJ package) is subject to the following terms:


     PERSONAL USE:

     For personal non-commercial use, ARJ, ARJSFX, and ARJSFXJR may be
     freely used and shared with others.  There is no REQUIRED registration
     fee for non-commercial/non-institutional personal use.

     For personal non-commercial use, the program REARJ may be freely used
     only by ARJ users.  An ARJ user is one who uses ARJ on a regular
     basis.  Others who wish to use REARJ must purchase a site license for
     the ARJ package.

     However, if you find the ARJ package of value, a gift of ten dollars
     or any amount would be greatly appreciated.  Please remember that
     improvements to the ARJ package cannot happen without your support.
     At least help by sharing ARJ with others.


     BULLETIN BOARD SYSTEM (BBS) USE:

     ARJ and REARJ may be freely used on non-commercial computer bulletin
     board systems where ARJ is one of the supported primary archive
     formats.  The use of ARJ and/or REARJ on a BBS where ARJ is not one of
     the supported primary archive formats requires a site license.


     INSTITUTIONAL/COMMERCIAL SITE LICENSE:

     The UNARJ.EXE program may be used freely without a license.

     Any corporation, institution, government agency or business wishing to
     use the ARJ software in the course of its internal business must
     purchase a SITE LICENSE.  A sample SITE LICENSE for the internal use
     of the ARJ software is included at the end of this document.  Please
     see the ORDERFRM.DOC or write for terms.

     Any corporation, institution, government agency or business may use
     the unregistered shareware version of ARJ only for evaluation purposes
     and only for a thirty day period.	After the thirty day period, you
     must either register ARJ or discontinue its use.  If you register ARJ,
     you may continue to use the unregistered ARJ program until you receive
     the registered version.

     For the purposes of this license, a SITE is considered a group of
     computers provided technical support from one location.

     Examples of institutional or commercial use of ARJ:

     1)  Using ARJ to backup your business programs and/or data.
     2)  Using ARJ to create archives for storing or transporting data.
     3)  Using ARJ on a company supplied home computer for company
	 business.
     4)  Using ARJ to backup your research programs and/or data.
     5)  Using ARJ on your home business computer for business purposes.

     The above examples should NOT be construed as the ONLY types of
     institutional or commercial use of ARJ.


     DISTRIBUTION LICENSE:

     Standard file archives (*.ARJ) created by ARJ may be distributed
     without a license.  The UNARJ.EXE program may be freely used and
     distributed without a license.

     Any corporation, institution, government agency or business wishing to
     include DEARJ, ARJSFX or ARJSFXJR as an integral part of a software
     and/or hardware package to be distributed externally for the purpose
     of saving diskette space must purchase a DISTRIBUTION LICENSE.

     Please write for terms providing details of expected distribution
     numbers per year, required diskettes before and after compression, a
     description of the software/hardware and the specific ARJ software to
     be used in the distribution.

     If you wish to use the archiver ARJ or the conversion program REARJ in
     your application software, the pricing is similar to the INTERNAL SITE
     LICENSE price schedule.  Please write for terms.


     RELIGIOUS ORGANIZATIONAL USE:

     To obtain the donation of a SITE LICENSE and/or DISTRIBUTION LICENSE,
     please write providing details of your organization's religious and
     charitable activities and the intended use for ARJ.  A free license
     will be provided to qualifying organizations.  Qualifications will be
     determined on a purely subjective basis.  Non-qualifying organizations
     can always obtain licenses by purchase.


     COMMERCIAL SALE:

     Any software dealer or library may distribute the entire ARJ package
     without ARJR and DEARJ in an unmodified form for a fee as long as the
     price charged for the disk containing ARJ does not exceed US $10.00.

     With this single exception, the sale of ARJ or its parts for profit,
     either alone or together with other software or hardware, requires a
     licensing agreement providing for royalty payments.  Please write for
     terms.


     UNARJ SOURCE CODE:

     You may freely use the UNARJ C source code provided the end product is
     NOT a file archiver.  This source code is intended to promote the
     building of utilities to support the use of ARJ and ARJ archives.

     The UNARJ.EXE program is built from this source using Turbo C++ 1.0.
     UNARJ.EXE may be freely used and freely distributed.


     CUSTOM VERSIONS OF ARJ:

     Customized versions of ARJ can be licensed.  Please write for terms
     describing your requirements.  Customized versions will take several
     weeks or more to build.


     ARJ SOURCE CODE:

     The ANSI C source code for ARJ may be obtained under a license
     arrangement with a non-disclosure policy.	I am currently limiting
     source licenses to large firms.

     Please write for terms.


     ARJ-SECURITY ENVELOPE USE:

     This feature is intended for but not limited to software developers
     who wish to distribute archived software with some assurance that the
     archived software in a validated ARJ-SECURED archive will be secure.
     I reserve the right to limit the distribution of ARJ-SECURITY serial
     numbers.

     This feature may ONLY be used by those who have purchased an
     ARJ-SECURITY serial number.

     Please see the ORDERFRM.DOC or write for terms.


     DISCLAIMER:

     This software (ARJ, ARJR, DEARJ, REARJ, ARJSFX, ARJSFXJR,
     ARJ-SECURITY, and UNARJ) is provided on an "as is" basis without
     warranty of any kind, expressed or implied, including but not limited
     to the implied warranties of merchantability and fitness for a
     particular purpose.  The person using the software bears all risk as to
     the quality and performance of the software.  Should the software
     prove defective, the user assumes the entire cost of all necessary
     repair, servicing, or correction.	The author will not be liable for
     any special, incidental, consequential, indirect or similar damages
     due to loss of data or any other reason, even if the author or an
     agent of the author has been advised of the possibility of such
     damages.  In no event shall the author's liability for any damages
     ever exceed the price paid for the license to use the software,
     regardless of the form of the claim.


     SAMPLE SITE LICENSE
     -------------------

     LICENSOR:

     ROBERT K JUNG
     2606 VILLAGE ROAD WEST
     NORWOOD, MASSACHUSETTS 02062
     USA


     Robert K Jung herein referred to as the LICENSOR hereby grants
     [ORGANIZATION NAME] ----------------------- a site license for
     [NUMBER OF COMPUTERS LICENSED] computers for the use of the following
     software programs:  ARJ, ARJR, DEARJ, REARJ, ARJSFX, ARJSFXJR.

     This is a perpetual license for the use of the software within your
     organization, and is not transferable.  This license allows internal
     use and copying of the software by as many users/computers as
     contracted for.  Distribution, repackaging, or reselling of the
     software to third parties is not allowed under this agreement.

     The LICENSOR warrants that it is sole owner of the software and has
     full power and authority to grant this license herein without consent
     of any other party.

     The LICENSOR hereby disclaims all warranties relating to this
     software, whether expressed or implied, including without
     limitation any implied warranties of merchantability or fitness for
     a particular purpose.  The person using the software bears all risk
     as to the quality and performance of the software.  Should the
     software prove defective, the user assumes the entire cost of all
     necessary repair, servicing, or correction.  The LICENSOR will not
     be liable for any special, incidental, consequential, indirect or
     similar damages due to loss of data or any other reason, even if
     the LICENSOR or an agent of the LICENSOR has been advised of the
     possibility of such damages.  In no event shall the LICENSOR's
     liability for any damages ever exceed the price paid for the
     license to use the software, regardless of the form of the claim.

     This agreement shall be construed and enforced in accordance with the
     laws of the STATE OF MASSACHUSETTS.  Any action or proceeding brought
     by either party against the other arising out of or related to this
     agreement shall be brought only in a STATE or FEDERAL COURT of
     competent jurisdiction located in MASSACHUSETTS.  The parties hereby
     consent to in personam jurisdiction of said courts.


     COMPANY:  [ORGANIZATION NAME]
     ADDRESS:  [ORGANIZATION ADDRESS]
     CITY:     [ORGANIZATION'S CITY]  STATE:  XX   ZIP CODE: 00000
     COUNTRY:  [ORGANIZATION'S COUNTRY]

     AUTHORIZED SIGNATURE: ______________________________________

     TITLE: ______________________________  DATE: _______________


     Robert K Jung    SIGNATURE: ________________________________

     LICENSOR		  DATE: ________________________________



```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```

    ARJ ORDER FORM (rev 3):	  Prices subject to change without notice.

    TO: 				  Date: ____________________
	    Robert K Jung
	    2606 Village Road West
	    Norwood, Massachusetts 02062
	    USA

    FROM:
	       Name: _______________________________________________

	  [Company]: _______________________________________________

	    [Title]: _______________________________________________

	    Address: _______________________________________________

	       City: _______________________________________________

	      State: ______________________ Zip Code: ______________

	    Country: ______________________ Phone: _________________

    ========================================================================

    INTERNAL SITE LICENSE for the use of ARJ, REARJ, ARJSFX, and ARJSFXJR
    for MS-DOS:  (Choose ONLY ONE of the following ARJ price schedules)

	  1	   computer	 at $30.00			 30   ______
    or	  2 to	10 computers ... at $25 each, nbr computers ___x 25   ______
    or	 11 to	50 computers ... at $20 each, nbr computers ___x 20   ______
    or	 51 to 100 computers ... at $16 each, nbr computers ___x 16   ______
    or	101 to 200 computers ... at $12 each, nbr computers ___x 12   ______
    or	201 or more computers .. at $2000 total fee		      ______

    ========================================================================

    ARJ-SECURITY ENVELOPE serial number(s) at $50 each,     ___x 50   ______

    List the exact name(s) that you want displayed by ARJ.
    The display will look like the following line:

    ARJ archive created by (this is where your name is placed)

    ____________________________________________________________
    (Exact name, 60 characters max, add more sheets if necessary)

    ========================================================================

    SITE LICENSEES receive the ARJR and DEARJ program in additional to the
    normal ARJ software when ordering software diskettes.

    Current software & documentation diskette(s) at  $5 each ___x  5  ______
    Next ARJ release software & docs diskette(s) at  $5 each ___x  5  ______

    Diskette format (choose one)   5.25" disk ____    3.5" disk ____

    ========================================================================




    TOTAL PRODUCTS						      ______

    Massachusetts residents add 5% sales tax.			      ______

    Please add $5.00 for shipping & handling for this order	      _5.00_

    Please add an additional $5.00 for overseas orders		  5   ______

    TOTAL ORDER 						      ______

    Surcharge for non-U.S.A funds   (TEN % of subtotal, $10 minimum)  ______

			TOTAL ENCLOSED	(Be sure S & H is included)   ______

    ========================================================================

    NOTE:

    No software & documentation diskettes are shipped unless purchased.


    TERMS:

    Check, US POSTAL Money Order or Money Order drawn on a U.S.A. bank in
    U.S. funds.  Corporate purchase orders (net 30) accepted from FORTUNE
    500 corporations within the USA & Canada.  All orders outside of the
    United States & Canada must be prepaid.  Personal checks require two
    weeks to clear.  Please allow a few weeks for delivery.

    If necessary, checks drawn on a non-U.S.A. bank in non-U.S.A funds
    will be accepted.  Please add a TEN percent surcharge with a $10
    minimum surcharge to cover currency exchange costs.  Please allow
    several weeks for the check to clear and for delivery.


```
{% endraw %}

## README.DOC

{% raw %}
```

   README.DOC					      May 1991


   This archive contains ARJ version 2.10.  This is a full featured
   shareware release.  ARJ is free for non-commercial personal use.


   MAJOR FEATURES OF ARJ INCLUDE:

   ARJ 2.10 now ranks as the best in overall compression in terms of
   resulting archive size.

   Option to create multiple volume archives with one command making ARJ
   useful for making backups to multiple floppies or archiving a very large
   file to several floppies without "SLICE"ing.

   A separate conversion utility called REARJ to facilitate wholesale
   conversion of archives to the ARJ format.

   Option to store empty directories.

   Multiple string searching and context display within archives.

   Archive security envelope to resist tampering.

   A myriad of commands and options to provide outstanding flexibility in
   archiver usage.


   THIS ARCHIVE CONTAINS THE FOLLOWING FILES:

   ARJ210.EXE	- An ARJ-SECURED self-extracting archive containing the
		  following files:

		  UNARJ.ARJ	 - UNARJ C source, UNARJ.EXE and documentation
		  ARJ.DOC	 - ARJ user manual
		  ARJ.EXE	 - Version 2.10
		  ARJ_BBS.DOC	 - List of ARJ support BBSes.
		  ARJSORT.BAT	 - Sort archive by various parameters
		  ARJSORT.COM	 - Compiled ARJSORT.BAT file
		  ARJSORT.DOC	 - ARJSORT user manual
		  LICENSE.DOC	 - License policy
		  ORDERFRM.DOC	 - Order form for ARJ
		  README.DOC	 - This file
		  REARJ.CFG	 - Default REARJ configuration file
		  REARJ.DOC	 - REARJ user manual
		  REARJ.EXE	 - Archive conversion utility
		  REGISTER.EXE	 - Program to register ARJ
		  TECHNOTE.DOC	 - Technical information about ARJ
		  UPDATE.DOC	 - Update to ARJ user manual
		  WHATSNEW.DOC	 - Changes to ARJ from 1.00 to now
                  WHY_ARJ.DOC    - ARJ commercial

   To verify the ARJ-SECURITY envelope and contents of ARJ210.EXE, type:

      ARJ210 -t

   To extract the files in ARJ210.EXE, type:

      ARJ210

      This will extract the files in ARJ210.EXE to the current directory.

   To extract the files in ARJ210.EXE using ARJ.EXE:

      ARJ e ARJ210.EXE

   For users with unusual DOS systems (not 2.11, 3.2, 3.3, 4.0), you may
   have to rename ARJ210.EXE to ARJSFX.EXE to do the extraction.

   end of readme.doc

```
{% endraw %}

## REARJ.DOC

{% raw %}
```




     User's Manual for the REARJ archive conversion program,   May 1991



	REARJ software and manual copyright (c) 1991 by Robert K Jung.
	All rights reserved.

	REARJ version 1.21 release



     INTRODUCTION:

     REARJ is an archive conversion program designed to facilitate the
     conversion of LZH, ZIP, PAK, ARC, DWC, HYP, LZS, and ZOO archives to
     the ARJ format.  In addition, this converter has been designed to
     convert to any of the aforementioned archive formats.


     MAJOR FEATURES:

     Supports all major archiver programs (PAK, LHARC, PKZIP, ZOO,
     ARJ, PKPAK, DWC, HYPER, LARC, LHA).

     Supports file attributes within archives.

     Supports directories within archives.

     Supports converting archives within archives (ZIPs in a ZIP).

     Ensures reliable archive conversion with a file count and total
     size check.

     Supports the use of virus checkers.

     Supports pathnames with drive letters.

     Is command line driven.

     Supports recursive scanning through subdirectories.

     Optional logging of conversions.

     Simulation option.


     A WORD OF CAUTION:

     If you plan to convert many archives at one time, it is STRONGLY
     suggested that you make a backup of your hard disk.  This is a wise
     precaution to take anytime that you make major modifications to data
     on your hard disk drive.

     REARJ will not work properly for those archivers/archives that produce
     absolute directory paths when extracting.	In other words, REARJ
     expects to find all extracted data in its created temporary directory.

     I have discovered that LHA using the "x" command does not return an
     error when encountering a DISK FULL situation.  This will cause data
     loss!!!  You should scan the log file after a conversion to look for
     any major archive size differences.

     REARJ's default configuration does not support volume labels.  You can
     modify the ZIP and ARJ configurations by adding -$D where "D" is a
     drive where the archivers can change/access the volume label.  Please
     note that this will only work correctly when every archive to be
     converted has a volume label in it.  Volumes that do not have volume
     labels will be converted into one with a volume label!!!

     The archiver executables must be located in the DOS PATH directories.
     This is due to REARJ creating and using a temporary directory.

     If you have changed the MS-DOS switch character from "/" to another
     character via an undocumented MS-DOS interrupt or the TurboC
     setswitchar() function, REARJ may not work properly with the default
     REARJ.CFG configuration file.

     The most thorough testing was done with ARJ as the target format and
     ZIP as the original format.  In any case, you should verify that the
     extract commands of your favorite archive formats in the configuration
     file are correct.	The extract commands are the most important to get
     right because REARJ has a built-in verification procedure to ensure
     that the ADD commands executed properly.

     Be sure you have enough disk space on your working directory to
     extract the largest archive that you want to convert!!!


     The versions of archivers tested:

     ARJ   1.00, 1.10, 2.00, 2.10
     LHA   2.12
     PAK   2.51
     PKZIP 1.10
     PKPAK 3.61
     ZOO   2.01
     DWC   A5.01
     LARC  3.33
     HYPER 2.5


     INSTALLATION:

     Copy REARJ.EXE and REARJ.CFG to one of the PATH directories.  They do
     not have to be placed in the same directory.  The PATH directories are
     usually set by the PATH command in your AUTOEXEC.BAT file.

     Be sure the archivers are installed in a PATH directory.


     OPERATION OF REARJ:

     REARJ will build a temporary directory in the current directory and
     extract the archive(s) to this directory.	REARJ will then build the
     target archive(s) with the files in this directory.  If the target
     archiver does not support reading of hidden or system files, REARJ
     will reset those bits and then re-archive the files without those
     attributes.  If the original archive has directories in it, REARJ will
     extract it with full paths and re-archive it with full paths if the
     target archiver supports directories.  In this case, if the archiver
     does not support directories, REARJ will skip converting this archive.

     If the "/a" option has been selected, REARJ will execute REARJ to
     convert any internal archives of the same type to the target format.
     Any "/s" option will be carried over to the recursive REARJ command.

     As an extra test, REARJ will count the files extracted from the
     original archive and total their sizes.  Then REARJ will extract the
     new archive and count the files and total the sizes.  If the count and
     size do not match, REARJ will skip converting the archive.

     REARJ assumes that the supported archivers will pass a non-zero error
     code when there is an operation failure.


     COMMAND SYNTAX:

     REARJ [switch options] filespec(s) or wildspec(s)

     You can specify one or more filespecs on the command line.  These
     filespecs can have paths and wildcards.  Up to 100 filespecs can be
     accepted by REARJ.  If you specify *.* as a wildspec, REARJ will look
     at all filenames, but will skip those filenames not ending in standard
     archive suffixes.	If you specify the /r switch, REARJ will look for
     filenames matching the filespec(s) in the current directory and all
     subdirectories of the current directory.

     If you want to use a RAMDRIVE as the temporary directory, you must
     make the RAMDRIVE the current drive and directory and execute REARJ
     commands from there.

     The switch options and filespecs can be entered in any order.  REARJ
     uses the default MS-DOS switch character "/".  REARJ uses the Turbo
     C++ function getswitchar() to determine the MS-DOS switch character.
     If the switch character is "-", REARJ will translate any UNIX style
     pathnames to MS-DOS syntax ("dir/file" to "dir\file").


     SWITCH OPTIONS:

     /a - convert archives within archives

	  This option causes REARJ to recursively execute REARJ to convert
	  any archives of the original type found within the original
	  archive (ex. ZIPs within a ZIP).  This option requires additional
	  memory to execute successfully.

	  NOTE!!!  When using this option, REARJ.EXE and REARJ.CFG must be
	  installed in a DOS PATH directory because the recursive REARJ
	  will be executed within a temporary directory and NOT in the
	  original directory.

     /d - delete the original archive

	  This option causes REARJ to delete the original archive after a
	  successful conversion to the target format.  This option will NOT
	  delete read-only archives.

     /e - do not return error if no archives were found

	  This option is used by the internal recursive REARJ.	This option
	  will cause REARJ to return a zero exit code if no matching
	  archives were found.	Usually, REARJ returns a non-zero exit
	  code for this condition.

     /i - check program integrity

	  This option causes REARJ to validate the REARJ program on disk.
	  If you are using a pre-3.0 MS-DOS revision, you will have to
	  specify the full program name as in "REARJ /i\util\rearj.exe".

     /l - write conversion data to log file

	  This option causes REARJ to open a log file and record each
	  successful conversion in the log file.  The default log file name
	  is REARJ.LOG.  You can specify the log file name as in
	  "REARJ /lfilename *.ZIP".  If the log file already exists, REARJ
	  will append logging data to it.

     /o - overwrite existing target archive

	  This switch is used to delete already existing target archives.
	  This is not used for updating archives.  Use the /u option for
	  updating an archive.

     /q - query for each archive to convert

	  This switch causes REARJ to pause and prompt the user for
	  permission to convert individual archives.  Note that REARJ will
	  not prompt when skipping archives.

     /r - recurse through subdirectories

	  This switch causes REARJ to look for archives in all included
	  subdirectories as well as in the current directory.  This switch
	  allows the user to convert all archives on a hard disk with one
	  command.

     /s - skip verify of file count and total size

	  Skip the overhead of the file count and total size verification
	  process.  This verification costs an extra extraction, but this
	  check is worth the time, especially when converting a large
	  number of archives.

     /t - specify the target archive type

	  The default target archive format is normally ARJ.  This can be
	  changed by building an external REARJ.CFG file.  The first
	  archive type is always the default format.  To override the
	  default format, the user can specify the /t switch as in
	  "REARJ *.ZIP /tlzh".	The previous example has specified that LZH
	  is the target format.

     /u - allow update of archive with backup

	  This switch is used to re-archive an archive, possibly to take
	  advantage of improved compression.  The original archive is
	  backed up by renaming it with the backup suffix which by default
	  is "BAK".  You may specify another backup suffix with the /u
	  option as in "REARJ *.ARJ /uar$" where the backup suffix is
	  "ar$".  Since this option creates a brand new archive, archive
	  comments will be lost.  Do NOT specify a "." in the suffix.

     /v - execute configured command on extracted files

	  This switch is used to execute a configure command on the files
	  extracted from the original archive.	The intent is to allow
	  virus scanning of the archive contents.  The command must be
	  specified in the REARJ.CFG file.

	  The command may be placed in the REARJ.CFG file by inserting one
	  line ahead of the archive commands.  The line must start with the
	  word "VIRUS" followed by a blank and the external command.

	  Example:  VIRUS scan /nomem *.*

	  If the invoked command returns a non-zero error code, REARJ will
	  skip the conversion of that archive and log the error as code 13.

	  REARJ *.* /v

     /x - exclude filenames or wildnames from the conversion process

	  You can exclude one or more files from the conversion process.
	  The filenames can contain wildcards.

	  REARJ *.ZIP /xONE.ZIP /xTWO.ZIP

     /z - simulate conversion process

	  This switch causes REARJ to simulate the conversion process.	No
	  archives will be extracted, built, or deleted.


     EXAMPLES:

     REARJ *.ZIP		   this converts all ZIP files in the current
				   directory to ARJ files.

     REARJ *.ZIP *.ARC		   this converts ZIP and ARC files to ARJ
				   files.

     REARJ SOFT.ZIP		   this converts only SOFT.ZIP to SOFT.ARJ.

     REARJ *.ZIP /d /l		   this converts ZIP files with logging and
				   deletion of each original archive upon
				   successful conversion.

     REARJ *.ARC /r		   this converts all ARC files in the current
				   directory and in subdirectories of the
				   current directory to ARJ files.

     REARJ SOFT.ARJ /tZIP	   this converts SOFT.ARJ to SOFT.ZIP.

     REARJ *.ARJ /u		   re-archive all ARJ archives.

     REARJ *.* /v		   re-archive all archives and execute
				   configured command on extracted files


     EXTERNAL CONFIGURATION FILE

     REARJ comes with a configuration file, REARJ.CFG, which supports
     conversion between the ARJ, ARC, LZH, PAK, ZIP, DWC, LZS, HYP, and ZOO
     formats.  The commands PKPAK and PKUNPAK are used for ARC files.  The
     command LHA is used for LZH files.  You can change these defaults by
     editing the configuration file.

     The format of the configuration file is fairly simple.

     The first line can optionally specify an external command to be
     executed by REARJ when the "/v" option is selected.  This line must
     start with the word "VIRUS" minus the quotes, followed by a space,
     followed by the external command.

     Example:  VIRUS SCAN /nomem *.*

     If you do not want to configure this item, DO NOT insert a blank line.

     Each archive format requires four lines in the file.

     The first line is the format suffix.

     The second line is the archive ADD command with a %s in the place of
     the archive name.	Any other percent signs in the command must be
     preceded by "\" as in "\%".  The ADD command should support directory
     inclusion and reading of hidden and/or system files.  REARJ will parse
     this command line using the space character as the token separator.

     If your ADD command requires DOS piping as the ZOO archiver requires,
     you must precede the ADD command with the text "COMMAND /C ".

     Example:  ARJ a -a -r -jt %s
	       COMMAND /C STUFF *.* | ZOO aI %s

     The third line is the archive EXTRACT command with a %s in the
     place of the archive name.  Any other percent signs in the command
     must be preceded by "\" as in "\%".  The EXTRACT command should
     support directory recreation if the archive contains directories.
     The extraction of directories must be to child directories within the
     current directory.  REARJ will parse this command line using the space
     character as the token separator.

     If your EXTRACT command requires DOS piping, you must precede the
     EXTRACT command with the text "COMMAND /C ".  Beware that command exit
     codes are not passed back to REARJ when using COMMAND /C.

     The fourth line contains the letters "A" and/or "D" or no letters.
     The "A" stands for the ability to process files with the hidden and/or
     system attribute.	The "D" stands for full support of directory trees
     within archives.  No letters (blank line) stands for no support for
     hidden or system files or for archive containing directories.

     There must be NO EXTRA blank lines or comments in the file.  You may
     use leading blanks for clarity.

     The first format type declared in the configuration file is used by
     REARJ as its default target format.   REARJ.CFG is currently setup
     with ARJ as its default target format.

     The following is the current REARJ.CFG configuration:

     VIRUS scan /nomem *.*
     ARJ
      ARJ a -a+ -r+ -y+ -jt+ %s
      ARJ x -y+ %s
      AD
     ZIP
      PKZIP -a -r -p -wHS %s
      PKUNZIP -d %s
      AD
     ARC
      PKPAK -a %s
      PKUNPAK %s

     LZH
      LHA a /a+ /r+ /x+ %s
      LHA x /a+ %s
      AD
     PAK
      PAK a /i %s
      PAK e /path %s
      AD
     ZOO
      COMMAND /C STUFF *.* | ZOO aI %s
      ZOO x.// %s *
      D
     HYP
      HYPER -a -r -p %s
      HYPER -x -p %s .
      AD
     DWC
      DWC a %s *.*
      DWC e %s

     LZS
      LARC a /r %s *.*
      LARC e /x %s *.*
      D

     If you use a different archiver program, you will need to either
     rename the program to one of the supported ones or you will need to
     modify the installed REARJ.CFG file.

     DWC does not allow duplicate filenames even within a directory
     structure, so "D" is not set for DWC.

     LARC may or may not work correctly for archives with directories.	I
     was unable to stop LARC from querying on making directories.

     If your original archive format supports extraction to absolute
     directory paths as opposed to relative directory paths and you have
     such archives containing absolute paths, you should not put directory
     extraction in the REARJ.CFG file.


     LOG FILE DATA

     When logging is enabled, REARJ will log the action on each selected
     file.  For successful conversions, REARJ logs the date-time, target
     archive type, original archive size, new archive size, bytes saved,
     and original archive name.

     When selected files are skipped for any reason, REARJ will log an
     entry in the log file (when logging is enabled) which specifies the
     reason code for skipping the file.  The following are the codes:

     1	= File not found
     2	= File is not a configured archive type
     3	= Target archive already exists
     4	= Not enough disk space       (currently unimplemented)
     5	= User skipped or user did not select update option
     6	= UNPACK error
     7	= PACK error
     8	= Target cannot support directories
     9	= Wrong file count
     10 = Wrong total size
     11 = Internal archive REARJ error
     12 = Rename archive error
     13 = Invoked /v command error (found a virus?)


     LICENSE POLICY:

     REARJ has an unusual license policy.
     Please refer to the LICENSE.DOC for license information.


     TECHNICAL SUPPORT:

     Please report any bugs.  I will TRY to fix them.

     I can be reached at:

     Robert Jung at Wonderland BBS	       (508) 663-6220

     Robert Jung at Dimensional Crossroads BBS (508) 427-5379

     Robert Jung at Bay State BBS	       (617) 598-6646

     Robert Jung at FIDONET address:  1:16/390.7

     Robert Jung in the COMPRESS (ILINK), LHARC / COMPRESSIONS
     (SMARTNET), SHARE (RIME) or ARCHIVERS (RELAYNET) echo conferences.

     2606 Village Road West
     Norwood, Massachusetts 02062
     USA

     Internet address:	robjung@world.std.com  (Checked daily)

     Compuserve users can enter   >INTERNET: robjung@world.std.com
     at the "Send to" prompt.  I prefer CompuServe users to send mail
     to this address as opposed to my CompuServe userid below.

     CompuServe userid: 72077,445  (Checked infrequently)


     HISTORY:

     1.21 - Added error message when executables are not in DOS PATH.
	    Added further tests to rename function to avoid bugs in Windows.
	    Added /v option to support virus scanning.
	    Allowed more heap space in link of REARJ.

     1.20 - Fixed path processing with drive letters.  Fixed alternate drive
	    processing.  Removed disk space checking.

	    Fixed REARJ.CFG for LZH and HYP archives.
	    Added /u option.  Changed /o option.

     end document


```
{% endraw %}

## TECHNOTE.DOC

{% raw %}
```

     ARJ TECHNICAL INFORMATION				     May 1991


     ** IMPORTANT NEWS ****************************************************

     There is an extended header bug in older versions of ARJ, AV.C and
     UNARJ.C.  The extended header processing in read_header() should
     skip 4 bytes for the extended header CRC and not 2.  This is NOT a
     current problem as no versions of ARJ use the extended header.

     **********************************************************************


     Modification history:
     Date      Description of modification:
     --------  ------------------------------------------------------
     05/19/91  Improved the description of extended header processing.
     05/11/91  Simplified this document.  Added volume label type.
     03/11/91  Added directory file type.
     02/23/91  Added more comments.
     01/10/91  Corrected timestamp description and header order of file mode.
     10/30/90  Corrected values of flags in ARJ flags.


     ARJ archives contains two types of header blocks:

	Archive main header - This is located at the head of the archive
	Local file header   - This is located before each archived file

     Structure of archive block (low order byte first):

     Bytes Description
     ----- -------------------------------------------------------------------
       2   header id (main and local file) = 0xEA60 or 60000U
       2   basic header size (from 'first_hdr_size' thru 'comment' below)
		 = first_hdr_size + strlen(filename) + 1 + strlen(comment) + 1
		 = 0 if end of archive

       1   first_hdr_size (size up to and including 'extra data')
       1   archiver version number
       1   minimum archiver version to extract
       1   host OS   (0 = MSDOS, 1 = PRIMOS, 2 = UNIX, 3 = AMIGA, 4 = MACDOS)
       1   arj flags (0x01 = GARBLED_FLAG) indicates passworded file
		     (0x02 = RESERVED)
		     (0x04 = VOLUME_FLAG)  indicates continued file to next
					   volume
		     (0x08 = EXTFILE_FLAG) indicates file starting position
					   field
		     (0x10 = PATHSYM_FLAG) indicates path translated
					   ("\" changed to "/")
       1   method    (0 = stored, 1 = compressed most ... 4 compressed fastest)
       1   file type (0 = binary, 1 = 7-bit text, 2 = comment header)
		     (3 = directory, 4 = volume label)
       1   reserved
       4   date time modified
       4   compressed size
       4   original size (this will be different for text mode compression)
       4   original file's CRC
       2   filespec position in filename
       2   file access mode
       2   host data (currently not used)
       ?   extra data
	   4 bytes for extended file starting position when used
	   (this is present when EXTFILE_FLAG is set)

       ?   filename (null-terminated string)
       ?   comment  (null-terminated string)

       4   basic header CRC

       2   1st extended header size (0 if none)
       ?   1st extended header (currently not used)
       4   1st extended header's CRC (not present when 0 extended header size)

       ...

       ?   compressed file


     Time stamp format:

	31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16
       |<---- year-1980 --->|<- month ->|<--- day ---->|

	15 14 13 12 11 10  9  8  7  6  5  4  3	2  1  0
       |<--- hour --->|<---- minute --->|<- second/2 ->|



     Compression methods:


     ARJ methods 1 to 3 use Lempel-Ziv 77 sliding window with static Huffman
     encoding.

     ARJ method 4 uses Lempel-Ziv 77 sliding window with pointer/length
     unary encoding.

     There is one decoder for methods 1 to 3 and one decoder for method 4.



     Encryption technology:


     ARJ does NOT use DES encryption algorithms.  It uses a combination of
     simple exclusive-or operations.


     end of document


```
{% endraw %}

## UPDATE.DOC

{% raw %}
```

     UPDATE.DOC, ARJ 2.10					May 1991


     This documents new or updated information since ARJ 2.00.


     ** IMPORTANT NEWS ****************************************************

	ARJ utility developers should refer to UNARJ.DOC in UNARJ.ARJ
	concerning a bug in extended header processing in UNARJ.C and an
	ambiguous statement in DECODE.C.

	ARJ and UNARJ versions prior to ARJ 2.10 will NOT properly handle
	ARJ archives with extended headers.  Please note that NO current
	version of ARJ creates archives with extended headers.

	ARJ is now released as a non-commercial use version.  Commercial
	users MUST purchase a site license to get a registered version of
	ARJ.  Commercial users may use the unregistered version of ARJ for
	evaluation purposes for a period of 30 days.  Current SITE
	LICENSED ARJ users will automatically receive a free registration
	kit.  Please allow a few weeks for delivery.

	The ARJ SFX (-je) and SFXJR (-je1) modules have been modified
	because of an undesirable interaction with TSR DIET 1.02b.  TSR DIET
	truncates ARJ SFX and SFXJR modules.  You SHOULD REDO any ARJ SFX
	type archives with ARJ 2.10!!!	Here is a fast way to do it without
	recompressing:

	ARJ j newsfx oldsfx.exe -je   OR   ARJ j newsfxjr oldsfxjr.exe -je1

	The ARJ SFX (-je) module has been changed so that the default
	command is "-x" extract files with pathnames.

	If the first filename after the archive name specifies a directory,
	ARJ will treat it as the base directory whether or not the filename
	has an appended "\".  This has an impact upon the "-p1" option.
	You can avoid a problem with the "-p1" option by specifying the
	path to extract with an appended "*.*" or "\*.*".

	The matching of selected filenames has been changed to cause fewer
	user problems when modifying an existing archive.  When updating an
	existing archive, the ARJ modified pathname of the selected input
	file MUST MATCH EXACTLY the pathname of the file in the archive.  An
	ARJ modified pathname is the resulting pathname that ARJ actually
	stores in an archive.

	The temporary "-jg" option to extract certain encrypted files
	archived with the "-g" garble option with older test versions of ARJ
	(0.15 and earlier) has been removed.

	The ARJ m -f and ARJ m -u commands delete added files and files that
	are already update to date in the archive.  This also applies to
	archives bits and the "-b2" option.

     **********************************************************************


     COMMON PROBLEMS USING ARJ

	DO NOT use the "-t1" option with binary files!!!

	ARJ by default stores the pathname specified by the user and not just
	the filespec as is the manner of other archivers such as LHARC.  You
	can exclude the path portion of the filename by specifying the "-e"
	option as in "ARJ a -e archive temp\*.*".  You can also remove the
	path information from an already built archive with the command
	"ARJ r archive".

	The "f"reshen command in ARJ works slightly differently from the
	"f"reshen command in LHARC.  If the ARJ archive was created using the
	"-r" option, the ARJ freshen command requires the "-r" option.


     ARJR and DEARJ programs

	The new programs ARJR and DEARJ are available only to registered
	users of ARJ.  ARJR is the ARJ program minus the help screen and
	SFX modules.  DEARJ is the ARJR program minus the archive
	creation/modification functions.  See the LICENSE.DOC and
	ORDERFRM.DOC for more information.


     REARJ archive convertor

	REARJ has been revised to allow a virus checking program to be
	executed during each archive conversion.  See REARJ.DOC for more
	information.


     UNARJ Portable C source code

	A couple of potentially SERIOUS bugs have been fixed.  See the
	UNARJ.DOC for more information.

	Now included is the C source code for a simple UNARJ extractor
	program.  It has been portabilized courtesy of Mark Adler for
	platforms that do not support ANSI C.  This new version of UNARJ
	replaces the old AV program by supporting the "e", "l", "t", and "x"
	commands.  However, this UNARJ is NOT meant to be a production
	quality ARJ extractor.	It is meant for the use of 3rd party
	developers who want to build file readers, etc., for ARJ.

	See UNARJ.DOC in UNARJ.ARJ for more information.


     ARJ COMMAND LINE

	ARJ a archive base_directory

	The base_directory no longer requires an appended "\".	ARJ will
	interpret the first filename after the archive name as a directory
	if it exists as a directory.


     ARJ COMMANDS

     "m" command and "-f or -u" option

	The ARJ m -f and ARJ m -u commands now purge all selected files
	duplicated in the archive including ones that did not need to be
	updated because they were already up to date.


     "w" command

	The "w" command will prompt for two additional queries before
	requesting the search strings.	The first query is whether to ignore
	case when searching.  The second query asks whether to display the
	matched string in context.  This command uses the "-jv" option to
	display more lines of context text.

	-jv = 6 lines, -jv1 = 12 lines, -jv2 = 18 lines, -jv3 = 24 lines


     ARJ SWITCHES

     "-?" switch

	This option displays more detailed help screen.  You may suppress the
	screen pauses by specifying "ARJ -? -jp" or by redirecting the output to
	a file as in "ARJ -? > filename".


     "-$" switch

	This option allows the user to store or extract DOS volume labels in
	ARJ archives.  You can only add or extract volume labels
	at DOS 2.0 and above.  The "-$" option may be specified with or
	without a drive specification.	The drive can be specified by
	appending the letter and optionally the ":" to "-$".  If none is
	specified, ARJ assumes the current drive unless a specified target
	base directory ha a drive specification.

	Only standard DOS labels are supported by ARJ.

	Syntax:  ARJ a archive -$	     add all files and the label of
					     the current drive.
		 ARJ a archive ... -$B	     add only the label of drive B
		 ARJ a archive ... -$B:      add only the label of drive B

	To extract volume labels, you must select the label by setting "-$"
	and specifying a matching wildname/filename.

	Syntax:  ARJ e archive doslabel -$   extract the label named doslabel
					     to the current drive.
		 ARJ e archive -$D:	     extract all files to the current
					     drive and extract the label to
					     drive D:.
		 ARJ e archive label B:\ -$  extract all files to B:\ and the
					     label to drive B.


     "-e1" switch

	When using the "-e1" and "-p" options at the same time, ARJ will not
	include the specified base directory in the pathname comparison.


     "-i1" switch

	This option provides a bar type graphical progress indicator for the
	compression, extraction, and testing type commands of ARJ.  This
	provides an alternative to the simple numeric increasing percentage
	progress indicator.


     "-p" switch

	This option is no longer needed when "f"reshening or "u"pdating
	archives because that is now the default for these operations.


     "-s2" switch

	The "-s2" option has been added for users who want to use a "-s"
	type switch in the ARJ_SW environment variable.  The "-s" switch
	has the side effect of always updating the date-time stamp even when
	used in list or extract mode.  The "-s2" switch is ignored during
	non-modification commands.


     "-t1" switch

	ARJ will scan the first 4096 bytes of the input file looking for
	8-bit non-text data.  If ARJ finds any 8-bit data, it will
	automatically backtrack and switch to "-t0" (default) binary mode for
	that particular file.  In addition at the end of compressing the
	input file, if ARJ finds that the input file size is not greater than
	75 percent of the binary file size (size on disk), ARJ will report an
	error for that input file and increment the error count.  This should
	help avoid the problem of accidentally compressing executable files
	with the "-t1" option which results in lost data.


     "-jf1" switch

	This switch option causes ARJ to only strip the drive spec and not
	the root symbol from any pathnames.


     "-jm1" switch

	This switch option provides slightly less compression at greater
	speed than "-jm".


     "-jo" switch

	The "-jo" switch is used to query the user when using the ARJ "a" or
	"m" commands to add files to an archive.  Before ARJ overwrites an
	existing internal archive file when using "-jo", ARJ will query the
	user with "Update <filename>? ".  Without this option, ARJ will
	overwrite the internal archive file without querying.


     "-jy" switch

	This switch is used to suppress individual ARJ user prompts.

	Syntax:  ARJ e archive -jy<flags>

	where <flags> is one or more of the following characters:
	a, c, d, k, n, o, s, v.  ARJ will assume YES for each flag selected.

	A - skip append query during a multi-volume extraction
	C - skip create directory query
	D - skip delete files query
	K - skip disk space availability query
	N - skip new filename prompt
	O - skip overwriting existing file query
	S - skip scanned enough text query
	V - skip ok to proceed to next volume query

	Example:  ARJ x volume -v -jyaco
		  selected append, create, and overwrite "yes"es.


     end document


```
{% endraw %}

## WHATSNEW.DOC

{% raw %}
```

     WHATSNEW.DOC					May 1991


     This lists the user visible changes to ARJ from previous versions.


     ARJ 2.10

     ** IMPORTANT NEWS ****************************************************

	ARJ utility developers should refer to UNARJ.DOC in UNARJ.ARJ
	concerning a bug in extended header processing in UNARJ.C and an
	ambiguous source statement in DECODE.C.

	The ARJ SFX (-je) and SFXJR (-je1) modules have been modified
	because of an undesirable interaction with TSR DIET 1.02b.  You
	should redo any ARJ SFX type archives with ARJ 2.10.  Here is a
	fast way to do it without recompressing:

	ARJ j newsfx oldsfx.exe -je

	The default command for ARJ SFX modules (-je) has been changed to
	"-x" extract files with pathnames.

	If the first filename after the archive name specifies a directory,
	ARJ will treat it as the base directory whether or not the filename
	has an appended "\".

	The matching of selected filenames has been changed to cause fewer
	user problems when modifying an existing archive.  When updating an
	existing archive, the ARJ modified pathname of the selected input
	file MUST MATCH EXACTLY the pathname of the file in the archive.

	ARJ m -f archive and ARJ m -u now will purge all selected input
	files that are added to or already duplicated in the archive.

	The ARJ w command prompts for caseless search and context display.

     **********************************************************************

     The version and copyright message has been changed to indicate that the
	unregistered version is not for commercial use.  It can be used for
	evaluation use for 30 days in a commercial environment.
     Registered users can obtain the new ARJR and DEARJ programs.
     ARJ.DOC has been updated and revised extensively.
     Added directory type checking to command line processing.
     Added caseless search and context display option to "w" command.
     Added "-t1" checking for input file type.
     Added "-$" volume label option.
     Added "-i1" option to display bar graph progress indicators.
     Added "-jf1" option to strip only the drive spec from a pathname.
     Added "-jm1" option as a faster "-jm".
     Added "-jo" option to query on updating when using "a" command.
     Added "-jy" option to select types of user queries to skip.
     Added "-s2" option to set date-time stamp only during modifications.
     Added extra checks to rename functions to avoid Windows 3.0 bugs.
     The UNARJ source package has been translated to Portable C and now
	supports the "e", "l", "t", and "x" commands.  UNARJ.EXE is included.
     Improved appearance of progress indicators with extra spaces.
     Changed default ARJSFX command to "-x".
     Modified ARJ freshen and update functions to work like PKZIP and LHARC.
     Modified file date-time stamping to work in OS/2 DOS emulation.
     Modified "ARJ -? > filename" to not pause per screenful.
     Modified ARJ l *.* to not abort on non-ARJ archives.
     Added error messages for ! usage.
     Added new error messages to REARJ.EXE.
     Removed "-jg" switch.
     Modified pathname matching in freshen and update commands.
     Modified pathname matching to account for use of "-e1" option.
     Modified wildcard matching to handle "???" according to DOS conventions.
     Modified handling of the 0 file(s) warning during wildcarded scans of
	archives.
     Fixed password handling so that archives can have passworded and
	unpassworded files in the same archive.
     Fixed extender header processing in ARJ and UNARJ.
     Fixed ambiguous statement in DECODE.C in UNARJ.
     Fixed "-jd" option with ARJ l command.
     Fixed problem with ARJ self-extractors when DIET 1.02 is memory resident.
     Fixed problem with ARJ exiting early when processing archives with "-v".
     Fixed first line display problem with ARJ "s" command.
     Fixed errorlevel code processing for Bad Huffman code.


     ARJ 2.00

     Speeded up compression methods 1 and 2 over 100 percent to close to
	PKZIP speed.  Improved compression of methods 1 and 2.
	Decreased memory usage of method 1 by almost 60,000 bytes.
     Added full ANSI C source code for simple UNARJ extractor program.
     Added extraction of archive header comments via "-z" option.
     Added "-jm" option to set maximum compression mode.
     Added "-jn" option to skip selected files up to named file.
     Added "-ji" option to create a file containing the filenames archived.
     Modified "x" command to require "-jf" for absolute extract.
     Modified ARJ to handle merged ("j" command) multiple volume archives.
     Modified options of REARJ to use "/o" to delete a target archive and
	"/u" for updating an archive to the same format.
     Fixed handling of ..\ type pathnames.
     Fixed redundant delete error messages when using "m" with "-v".
     Fixed REARJ.EXE for paths with drive letters.
     Removed disk space checking in REARJ.EXE.
     Fixed REARJ.CFG for LZH files.


     ARJ 1.10

     Provided archive conversion program, REARJ.
     Speeded up extraction functions closer to LHA 2.10 speed.
     Speeded up method 1 and 2 compression by 20 percent.
     Added more frequent checking of CTL C.
     Added new UPDATE.DOC to document new changes.
     Added directory creation to ARJSFXJR module (-je1).
     Added "i" command to verify ARJ program.
     Added "j" command to join archives.
     Added "-!" option to set list file character (!).
     Added "-a1" option to add empty directories.
     Added "-s1" option to keep original archive timestamp.
     Added "-z" option to name the comment file on command line for header.
     Added "-jz" option to name the comment file on command line for files.
     Added errorlevel support.
     Modified AV.C to handle directory entries.
     Modified ARJ to recognize "..." filespec as a special case.
     Modified "-x" to work for non-update commands and for subdirectories.
     Modified "-v" usage during extraction to allow correcting the
	insertion of the wrong diskette.
     Improved temporary file usage with unique filenames.
     Fixed improper "Can't reset archive bit" message.
     Fixed "-p" handling in ARJSFX self-extract module.
     Fixed "-p" handling with base dir and non-update commands.
     Fixed display of years over 1999 in "l" and "v" commands.
     Fixed "-o" and "-ob" options to interpret 80 as 1980.
     Fixed handling of new lines in comments in ARJSFXJR.


     ARJ 1.00

     First production release.


     end of WHATSNEW.DOC


```
{% endraw %}

## WHY_ARJ.DOC

{% raw %}
```

     WHY_ARJ.DOC					     May 1991


     This document describes the benefits of ARJ.  Pardon the commercial.
     Compression benchmark results are at the end of this document.


     1)  ARJ provides superior size compression to the other products
	 available on the PC.  This includes PKZIP 1.10, LHArc 2.12, PAK
	 2.51, ARC 7.00 and HYPER 2.5.	In a few particular cases, other
	 archivers may produce slightly smaller archives than ARJ. But in
	 most cases ARJ provides 1 to 20 percent better compression.

	 ARJ is particularly strong compressing databases, uncompressed
	 graphics files, and large documents.  One user reported that in
	 compressing a 9.0 megabyte database, PKZIP produced a compressed
	 file of size 1.8 megabytes.  ARJ produced a compressed file of
	 size 1.1 megabytes.  Using the maximum compression option, ARJ
	 produced a compressed file of size 0.8 megabytes.

     2)  Of PKZIP, LHArc, PAK, ARC, ARJ, and HYPER, only ARJ provides the
	 capability of archiving files to multiple volume archives.  In
	 other words, ARJ can archive files directly to diskettes no matter
	 how large or how numerous the input files are.

	 It is possible to archive a 10 megabyte file to several diskettes
	 and to recover the file directly from the diskettes. Other
	 archivers require that you compress the large file to hard disk
	 or large RAM drive and then slice the compressed file to fit on
	 diskettes.  To recover the original file involves reassembling the
	 compressed file on the hard disk from the diskettes and then
	 extracting the original file from the reassembled compressed file.
	 This option is not even possible if you lack the hard disk space.

	 This feature makes ARJ especially suitable for distributing large
	 software packages without the concerns about fitting entire files
	 on one diskette.  ARJ will automatically split files when
	 necessary and will reassemble them upon extraction.

	 This multiple volume feature of ARJ makes it suitable as a "poor
	 man's" backup utility.  ARJ saves pathname information, file
	 date-time stamps, and file attributes in the archive volumes.	ARJ
	 can also create an index file with information about the contents
	 of each volume.  Files contained entirely within one volume are
	 easily extracted using just the one volume.

     3)  ARJ provides the facility to store EMPTY directories within its
	 archives.  This makes it easier to do FULL backups and also to
	 distribute software products that come with EMPTY directories.

     4)  Both ARJ self-extracting modules provide default pathname support.
	 That means that you can build self-extracting archives of software
	 directories containing sub-directories.  The end user of the
	 self-extracting archive does not have to type any command line
	 options to restore the full directory structure of the software.
	 This greatly simplifies software distribution.

     5)  The ARJ archive data structure with its header structure and 32
	 bit CRC provide excellent archive stability and recovery
	 capabilities.

     6)  ARJ provides a security envelope facility to "lock" ARJ archives.
	 A "locked" ARJ archive cannot be modified by ARJ.  This provides
	 some level of assurance to the user receiving a "locked" ARJ
	 archive that the contents of the archive have not been tampered
	 with.	Data integrity checks contribute to the security of the
	 ARJ "lock".

     7)  The myriad number of ARJ commands and options allow the user
	 outstanding flexibility in archiver usage.



     COMPRESSION COMPARISON TEST RESULTS		May 26, 1991


     This benchmark archiver test uses the original PKZIP 1.10 distribution
     archive, PKZ110.EXE, as the base data to compress.  The PKZIP 1.10
     distribution archive totals 302196 bytes.


     ARCHIVER		PACKED SIZE   COMPRESS TIME   EXTRACT TIME
     ----------------	-----------   -------------   ------------

     ARJ   2.10  -m4	  145374	  1:30.9	 0:52.0

     PAK   2.51 	  138309	  2:26.2	 0:53.0
     LHARC 1.13c	  137450	  4:05.7	 1:46.1
     HYPER 2.50 	  136543	  2:30.4	 1:54.7
     PKZIP 1.10 	  136245	  2:12.0	 0:34.5
     ARJ   2.10  -m3	  135185	  1:47.2	 0:52.1

     ARJ   2.10  -m2	  130994	  1:49.5	 0:50.4
     LHA   2.10 	  130606	  2:39.1	 0:50.4

     ARJ   2.10 (-m1)	  129002	  2:14.0	 0:49.5
     ARJ   2.10  -jm1	  128120	  2:33.0	 0.49.3
     ARJ   2.10  -jm	  127992	  3:51.8	 0.49.3


     ARJ 2.10 produced the best COMPRESSION SPEED and COMPRESSION SIZE
     results in this test.  PKZIP had the fastest EXTRACTION SPEED.

     PAK, HYPER, LHARC, and PKZIP compression size results are very
     similar.  LHA and ARJ performed significantly better at size
     reduction.

     This test was run on a 8 MHz 8088 PC with 20 MB hard drive and 512 K
     ram.  The archives were created on and extracted from a ram disk.

     end document


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2772

     Volume in drive A has no label
     Directory of A:\

    UNARJ    ARJ     30920   5-30-91   8:37a
    ARJ      DOC     87289   5-30-91   8:37a
    ARJ      EXE     99940   5-30-91   8:37a
    ARJ_BBS  DOC      1452   5-30-91   8:37a
    ARJSORT  BAT      3205   5-30-91   8:37a
    ARJSORT  COM      6378   5-30-91   8:37a
    ARJSORT  DOC      2176   5-30-91   8:37a
    LICENSE  DOC     11943   5-30-91   8:37a
    ORDERFRM DOC      3586   5-30-91   8:37a
    README   DOC      2326   5-30-91   8:37a
    REARJ    CFG       439   5-30-91   8:37a
    REARJ    EXE     35432   5-30-91   8:37a
    REARJ    DOC     18529   5-30-91   8:37a
    REGISTER EXE     12260   5-30-91   8:37a
    TECHNOTE DOC      3879   5-30-91   8:37a
    UPDATE   DOC      9477   5-30-91   8:37a
    WHATSNEW DOC      6663   5-30-91   8:37a
    WHY_ARJ  DOC      4976   5-30-91   8:37a
    PREVIEW  EXE      7347   4-18-91   1:15p
    GO       BAT       121   8-03-91  12:48a
           20 file(s)     348338 bytes
                            2048 bytes free
