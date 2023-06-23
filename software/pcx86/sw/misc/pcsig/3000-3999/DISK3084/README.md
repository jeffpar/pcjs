---
layout: page
title: "PC-SIG Diskette Library (Disk #3084)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3084/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3084"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3084.TXT

{% raw %}
```
Disk No: 3084
Disk Title: LogIt!
PC-SIG Version: S1.0

Program Title: LogIt!
Author Version: 3.02S
Author Registration: $20.00
Special Requirements: No special requirements.

LOGIT! is a RAM resident program that tracks all computer activity and
usage on the computer.  For each program or application LOGIT! will
record the elapsed time and the amount of keystrokes.  By pressing a hot
key you can change the user's name or record text information for any
activity, even while running an application.  Information recorded by
LOGIT! includes total keystrokes, keys per hour, elapsed time per
activity, user account, and the program name or DOS activity.  LOGIT!
takes up less than 8K of memory.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## ERROR.TXT

{% raw %}
```
Unmatched number of parameters                                                  Has been defined private already                                                Cannot find procedure file                                                      Syntax error in filter expression                                               Cannot locate command file                                                      Not a Character expression                                                      File currently open                                                             No more variable space available                                                Maximum number of variables exceeded                                            File does not exist                                                             Data item not found                                                             Macro must be a character string                                                Either syntax error in expression, or data type mismatch,or variable undefined  Must operate on data type                                                       Invalid variable name                                                           Undefined variable encountered                                                  Invalid drive specifier                                                         Invalid report form file                                                        Report stack overflow                                                           You must use character string for file names, field names or variable names     Unrecognizable dCode, incompatible object file                                  Error creating file                                                             Error opening file                                                              Error closing file                                                              Error reading file                                                              Error writing file                                                              Error positioning in file                                                       BAD field name                                                                  BAD field type                                                                  Record out of range                                                             Not a dBASE III data base                                                       No such record in index                                                         Illegal key                                                                     No data base in use in area                                                     No INDEX file in use in area                                                    Creating from this file would end up with more than max. allowed # of fields!   Creating from this file would end up with more than max. allowed record size!   Index SYNC error                                                                Maximum allowed number of records reached                                       FIELD not found                                                                 Too many digits                                                                 Printer is either not connected or turned off                                   Not enough memory                                                               Mode error in forming file name                                                 Illegal work area number or alias                                               PARSER STACK OVERFLOW                                                           MACRO STACK OVERFLOW                                                            Not a LABEL file                                                                Illegal relation expression                                                     Editor stack overflow                                                           Filter expression not logical                                                   Cyclic relation not allowed                                                     No more file name space                                                         Too many relations in this chain                                                Bad path name                                                                   File server module error                                                        Binary file not found                                                           Memory allocation error                                                         Memory de-allocation error                                                      Maximum number of load modules exceeded                                         Feature not yet implemented                                                     Invalid function key or function number                                         Value out of range                                                              Stack underflow                                                                 Undefined function encountered                                                  Passing variable not defined                                                    Illegal function parameter(s)                                                   Expression stack overflow                                                       Maximum number of READs in a format file has been exceeded                      Structure invalid                                                               Syntax error in locate expression                                               Locate expression is not logical                                                Valid expression is either illegal or not of logical type                       Invalid order number                                                            Error sending message to                                                        Error sending task to                                                           File is in use by another:                                                      Record is in use by another                                                     Command requires RLOCK() or SET AUTOLOCK ON.                                    Command requires exclusive use of database:                                     File is in use by another:                                                      Your DBXL/Quicksilver session has been HALTED by:                               Error receiving screen:                                                         Error sending screen:                                                           Error in screen privacy                                                         No fields were found to copy                                                    Invalid subscript reference                                                     Invalid graph form file                                                         Subscript out of bounds                                                         Return statement in UDF not found                                               SET EVENT expression not of data type logical or syntax error in expression     
```
{% endraw %}

## LOGIT302.DOC

{% raw %}
```






                                  LogIt!(R)

           
             The fast, RAM-resident, computer use logging program.


                         DOCUMENTATION FOR LogIt!(R) 

                                VERSION 3.02S
                               January 22, 1989

         (C)opyright  1988, Alan E. Robertson & John W. Beasley
         "LogIt!" is a registered trademark of the authors.
	 LOGITRPT is compiled with Quicksilver(R) and portions of this
	 program are Copyright 1984, 1985, 1986 and 1987 by 
	 WordTech Systems, Inc.   


	          ** Please Support the Shareware Concept **

         If you find LogIt! to be useful, we ask you to follow the 
         registration instructions at the end of this document file.

	 You are encouraged to copy and distribute this program 
	 provided the following conditions are met.  First, the program
	 must be distributed as the intact archive (LOGIT302.ARC) with no 
	 modifications. Please upload it with the identification:
		  "Log computer use by time & keystrokes"

	 Second, you may charge a reasonable amount, not to exceed $6.00
	 per disk, for distributing this program.  Persons purchasing such
	 disks must not be led to think that they have paid the 
	 registration fee for LogIt!.   Site licenses are available.

	 Finally, please pay $20 for each copy in use to:

                            Robertson Software 
			    Dept. LS-3
			    P. O. Box 576
			    Geneva, IL, 60134

         Versions 3.0xS of LogIt! have new usage summarizing and reporting 
         features which are greatly improved over those in prior versions.  
	 LogIt!  was previously marketed by the University of Wisconsin
	 Software Development and Distribution Center (SDDC).  The rights
	 to the program have been returned to the authors.  See the notes
	 on History of LogIt!  (Page 7) for details.

	 DISCLAIMER:  You use LogIt! at your own risk.  We have worked hard
	 to make it compatible with most systems and programs and believe
	 it to be a good program.  However, we can accept no responsibility
	 for damages resulting or believed to result from its use except
	 to refund your registration fee.  






 
	                 ***   TABLE OF CONTENTS   ***



	I.    QUICK INSTRUCTIONS (If you really don't like reading)......1

	II.   INTRODUCTION ..............................................2
		A.   What is LogIt! ?                  
            	B.   What others say about LogIt!      
            	C.   How LogIt! works                   
            	D.   Equipment requirements
		E.   Limitations and conflicts 
		F.   The LogIt! files

	III.  HISTORY OF LogIt! (Why you've seen it before)..............7

	IV.   HOW TO INSTALL LogIt!......................................8
		A.   Hard disk systems
		B.   Floppy disk systems
		C.   How to set up the computer for LogIt!
		D.   Other operating notes

	V.    HOW TO START LogIt! AND ENTER INFORMATION.................12
     		A.   How to run LogIt!
		B.   How to make LogIt! entries
		C.   Tips for making INFORMATION entries

	VI.   HOW TO EXIT LogIt!........................................15

	VII.  HOW TO USE LOGITRPT TO SUMMARIZE LogIt! RECORDS...........16
		A.  What does LOGITRPT do?
		B.  How to use LOGITRPT
                C.  Notes on screen displays of data
                D.  Cleanup Procedures
		E.  Other notes regarding LOGITRPT
		F.  Other uses for LOGITLOG.TXT and .DBF files

	VIII. HOW TO USE LOGITDMP TO READ LogIt! RECORDS................20
		A.  General operations
		B.  How to use LOGITDMP
		C.  How to display and print files created by LOGITDMP
		D.  How to interpret records produced by LOGITDMP

	IX.   PROBLEMS AND ERRORS.......................................25
		A.  When LogIt! will not create a record
		B.  Common Error Messages
		C.  Who to contact if there are problems
		D.  Detailed list of known conflicts and limitations

	X.    REGISTRATION INSTRUCTIONS AND INVOICE.....................27



     I.   QUICK INSTRUCTIONS (For those expert with computers)

	A.   Make a directory (\LOGIT) on the hard disk.  Copy all the 
             files in this archive or distribution disk to that directory.

	B.   Copy LOGIT.COM to the root directory of your hard disk. 

	C.   Be sure CONFIG.SYS contains the line FILES=20

	D.   Modify your AUTOEXEC.BAT file with the following:
		1.    Add the command SET LOGIT.LOG=C:\LOGIT.LOG.  This
		      assures that all log data is in C:\LOGIT.LOG
		2.    Add the PATH statement PATH=C:\; to assure that 
		      the command LOGIT always works.
		3.    Add the command LOGIT  after the command which
		      sets the clock-calendar.  If there is nothing  
		      (not even a parameter) after "LOGIT" the window 
		      will come up, forcing an entry.

	E.   The first time LogIt! is invoked after booting, the
     	program will be loaded to RAM, and a prompt will display.  

	F.   LogIt! automatically records program entries and exits.  To
     	record information manually, either use the <ALT><INS> hotkey or
	enter information by typing (or including in a batch file) the 
     	command LOGIT and the information desired after the command.

	G.   Exit programs to DOS  * before *  shutting down the computer 
	so LogIt! can record the exit time and calculate the proper 
	elapsed times.  If the -^E switch (below) is used, it is necessary
	to use the <ALT><INS> hotkey or a "QUIT.BAT" batch file with the 
	command LOGIT in it to establish an exit time.

	H.  For a summarized report listing users, programs and percentages
	of use, use the command LOGITRPT and follow the prompts.  

	I.   For a quick, unsummarized report of log data, use LOGITDMP to 
        convert the log data from the original LOGIT.LOG file.  The command 
        LOGITDMP can be used to report to the screen, a printer or a disk 
        file.  As the default, LOGITDMP  will write text to the screen. 
        LOGITDMP will display times and keystrokes as "S>" (start),
	"I>" (information), "P>" (program in operation),  and 
	"D>" (in DOS) entries. 

	J.  Switches for LOGIT.COM  include:
		      -E     (default) - records "everything"
                      -^E   - record only START and INFORMATION
			     entries ("Not-Everything")
                      -H    (default)  - enables <ALT><INS> hotkey
                      -^H   - disables hotkey

	K. Switches for LOGITDMP.EXE include:
		      -I  - reports START and INFORMATION 
                            entries only (no PROGRAM/DOS)
                      -S  -displays clock times down in HR/MIN/SEC format
                      -D  -produces a file in DIF format 

	L. Send a check for $20 ($10 if upgrade) per copy in use to:
           Robertson Software, Dept LS-3, Box 576, Geneva, IL,  60134

				Page 1





     II.  INTRODUCTION:  

        A.  What is LogIt!(R) ? 

	LogIt!(R) is the RAM-resident logging program that automatically
        records clock time, elapsed times and keystrokes used while you 
        are using each program during the time spent in "Information" 
        entry categories such as user names or account identifiers.
     
        LogIt! is:

        * - FAST
	       - Automatic recording of program use
               - Automatic log-in from batch files
               - <ALT><INS> Hotkey entry of information 
               - No menus to call up
               - Automatic log-out

        * - EFFICIENT
               - Usually less than 25 bytes per entry in log file
               - Resident portion uses less than 10K of RAM
               - Records as much or little information as you wish

        * - VERSATILE
               - Produces secure, tamper-proof binary master log file
               - Reports detailed text record to screen, file or printer
               - Produces DIF file for export to database or spreadsheet 
	       - Calculates a summary report of all use and percentages 
		 of use by user or program used.

        * - EFFECTIVE
               - Records clock times
               - Records elapsed times
               - Records number of keystrokes used

	LogIt! is ideal for anyone wishing to keep a record of computer
	usage for either personal or business reasons.  LogIt! is
	especially useful for legal, accounting programming and other 
	professions which require a record of time for billing purposes.  
	It is also useful for documenting the use of a personal computer 
	for tax deduction purposes.


        B.  What others say about LogIt! 

	"Once installed, the 10K program is automatically invoked upon 
	booting the machine.  It counts .... each keystroke.  It starts 
	a new record each time the user returns to DOS or whenever he 
	or she switches applications.  The user can label activities 
	at any time, even from within applications...."  
             Technological Horizons In Education Journal, February, 1988




				Page 2
	



	"If you use your .... computer less than 100% for work (as 
	defined by our favorite agency, the IRS) you ought to keep 
	careful daily use records.   If you're at all like us, you'll
	love $40 LogIt!  .... LogIt! records the name of each 
	program used and the elapsed time using it.  You can annotate 
	the entries and once they're written they're nearly 
	tamper-proof....  (Here's how to find out if the kids are 
	playing games on your computer!)."
   	  Computer Talk, P/K Associates, Inc., September, 1987

	"LogIt!'s forte is tracking who uses your PC and at what time,
	for how long, and with what applications.....Users hit the 
	hotkey from within any application to record text information
	or a new user name in the LogIt! file.  This allows you to note
	any specific activities throughout the day and make the LogIt! 
	file clearer.
	Without too much difficulty, we loaded LogIt! onto the hard 
	disk of our Victor 286 machine.  After rebooting the machine, 
	the LogIt! window popped up asking for information.  We entered
	the user name and proceeded to go about the morning's activities
	....LogIt! recorded all the daily activities, including 
	information lines.
	LogIt! runs on any computer running ...DOS 2.0 or later."
	  InfoWorld, Short Looks, April 27, 1987


	C.  How LogIt! Works. 

	When LogIt! is in operation, the program LOGIT.COM is loaded to
	RAM and, once there, is transparent to the operations of other 
	programs.  LogIt! information is recorded in a file LOGIT.LOG 
	(default name).  As noted below, all programs run by DOS can be 
	logged automatically. Other information (such as a user ID or
	a project ID) can be logged by typing <ALT><INS> or from the 
	command line using the command LOGIT or a batch file procedure.  
	The elapsed time and the number of keystrokes used for PROGRAM/DOS 
	and each "INFORMATION" entry is recorded in the log file.  

	LogIt! simultaneously tracks two types of use data.  The first
	is "PROGRAM/DOS" usage where the time and keystrokes are tracked
	according to whatever program is in operation at the time.  The
	second is "INFORMATION" usage where the time and keystrokes are
	tracked according to information entered with the command LOGIT 
	or the <ALT><INS> hotkey.  











                                 Page 3





	To read the LogIt! log record there are two procedures for you 
	to use.
	
	First, for a summary report showing the total usage and 
	percentages of use by each PROGRAM/DOS or INFORMATION entry
	the program LOGITRPT.EXE is used.  The instructions screens are
	pretty much self-explanatory.  The report can be to either
	the screen or the printer.  See page 16.

	Second, for a quick, detailed, unsummarized view of the log record, 
	use LOGITDMP.EXE.  LOGITDMP.EXE will display the contents of the 
	binary LOGIT.LOG file on the screen, print it, or copy the data to 
	another file.  As a default, it will produce a text display on the 
	screen.  LOGITDMP.EXE can also create a text file on a disk or a 
	Data Interchange Format (DIF) file.  See page 20.

	When you first invoke LogIt! (usually from your AUTOEXEC.BAT file)
	LogIt! will make a "START" entry, recording the time of the START.



	D.  Equipment Requirements 

	LogIt! will work well on any IBM or true compatible computer running 
	PC DOS or MS DOS Ver. 2.1 or later.  LogIt! requires one or more disk 
	drives, and will work best with a hard disk and a clock-calendar.  
	When loaded, LOGIT.COM uses less than 10K of RAM. 

	LOGITRPT requires 384K or more of available RAM (after use by 
	system 	and RAM-resident programs).  If you intend to use 
	LOGITDMP only then just 64K of RAM is needed.

	A hard disk is nearly essential for the reporting functions
        since the data in the compact binary file generated by LogIt! 
        will expand about 50 times when it is processed and summarized.  

        Thus, if your LOGIT.LOG (or other file) generated 
        by LOGIT.COM is 10K in length, you will need up to a total of 
        nearly 500K of disk space.  Furthermore, while LOGIT will run 
        well on floppy disk systems, the data may become fragmented over 
        several disks as you change disks in the system.  If you haven't 
        already purchased a hard disk you might as well go ahead and do it 
	now!












				Page 4





	E.  Limitations and Incompatibilities 

	Every effort has been made to ensure LogIt! operates effectively 
	with as wide a range of programs as possible. LogIt! is compatible 
	with most common RAM-resident programs.
   
	However, there are circumstances when LogIt! will not work properly.  
	To date, there have been no documented instance of data or disk 
	damage related to LogIt! use.  However, the possibility of that 
	occurring (or seeming to occur) cannot be completely ruled out.  
	Therefore, the authors accept no responsibility for damages beyond 
	the refund of the price of LogIt!.   If you find incompatibilities 
	other than those in the detailed list (IX. D.) below, please let 
	us know about them.

	Some RAM-resident programs may conflict with the hotkey and 
	experimentation with order of loading may be needed to achieve the 
	maximum compatibility with other RAM-resident programs.  Known 
	compatibility problems (shareware and commercial) include:
	MS-Windows, VP-Info, and Software Carousel.  There are also some
	unverified reports of problems, and a few minor conflicts.  For
	a full list of limitations and conflicts, please see Chapter IX,
	section D, the detailed list of incompatibilities and limitations.

	LogIt! will record up to 99,999 keystrokes per entry.  After that
	it will indicate keystrokes as nnnK.  Thus, 124,000 keystrokes
	would be indicated as 124K.   LOGITRPT will handle only up to 
	99,999 total keystrokes over all entries of a particular type
	in its summation routines. 

	While LogIt! will not cause problems with programs using graphics 
	screen modes it will not bring up a readable entry window with the 
	hotkey while these programs are running.  In a future version full 
	window compatibility with graphics programs will be added. 

















				Page 5


	F.   The LogIt!(R)  Files

	The LogIt!(R) package (LOGIT300.ARC)  contains the following:

	README.1ST      A short description of the LogIt! programs
	LOGIT300.DOC    This documentation.
        PRINTDOC.BAT    Batch file to print this documentation
	LOGIT.COM:	RAM resident, this program generates the LOGIT.LOG 
			data files.
	LOGITDMP.EXE    This converts the log data to a screen display, 
			printed report, or another file.
	LOGITRPT.EXE    Summarizes the log data and calculates the 
                        percentages of keystroke and time use by 
                        INFORMATION and PROGRAM/DOS entry.  It runs 
                        LOGITDMP as a sub-routine.
        V3CFG.DBF       The configuration file 
        V3DB1FMT.DBF
        V3DB2FMT.DBF
        V3DB3FMT.DBF    Set of 3 .DBF format files LOGITRPT.EXE uses
        V3RPT.FRM
        V3PRNT.MEM
        V3RPTD.FRM      Set of 3 files for LOGITRPT.EXE print routines
        ERROR.TXT       File used by LOGITRPT.EXE for error messages
                        (comes with QuickSilver (R) programs)
        CLEANUP.BAT     Gets rid of extra working files when you are done

	When you use LogIt! you will create the following files (names 
	indicated are default names, other filenames can be used where 
	indicated by "*")

	LOGIT.LOG*      This is the binary file containing all log data 
                        which is created and added to by LOGIT.COM.
        LOGITLOG.TXT*   This is the text file record of the data which
                        is produced by LOGITDMP.EXE when it is run as part
                        of the LOGITRPT routine.  See also HOW TO USE 
			LOGITDMP.
     	LOGITLOG.DIF    This is the file produced on the default drive
			if LOGITDMP.EXE is invoked with the -D option.  
        V3DB1.DBF       6 dBase III(r) compatible files containing all
        V3DB2.DBF          log information created by LOGITRPT routine.
        V3DB2A.DBF
        V3DB3.DBF
        V3USAGE.NDX     
        V3SUMTMP.DBF    

	All of these 6 files are are temporary and will be overwritten 
        the next time you run  LOGITRPT. If you want to save these files 
        they should be renamed or copied.  LOGITRPT will NOT ask you 
        before overwriting them!  Running CLEANUP will delete all of 
        them if you wish to save disk space.

				Page 6



     III.  HISTORY OF THE LogIt! PROGRAMS:

	LogIt! was originally written for the authors' own since we 
	need a record of our computer use.  This turned into a rather
	large project and there was seemed to be enough interest to 
        make it worthwhile to release the program.

	You may have seen LogIt! before.  Here's why:

	Version 1.0 - Shareware.  Had bug; If you see it, delete it!

	Version 1.1 - Shareware. (LOGIT110.ARC) No bugs, but could 
                      not handle programs that invoked other programs 
                      or COMMAND.  Trademark "LogIt!" registered.

	Version 2.0 and 2.1 - Commercial versions marketed by the 
                      University of Wisconsin Software Development 
                      and Distribution Center (SDDC) 1986 to 
                      June 30, 1988.  These are the versions advertised 
                      and reviewed in InfoWorld and other publications.
                      Added features included the keystroke counter, the 
                      hotkey for information entry, improved handling 
		      for multiple levels of programs, and LOGITRPT
		      was added so percentages of use could be easily 
                      calculated for either user or program use.

                      In January, 1988, The Board of Reagents of the 
                      University of Wisconsin decided that SDDC should 
                      market only programs that have a clear "academic" 
                      orientation.  Thus SDDC has returned all rights to 
                      the program to us  (Alan E. Robertson and John W. 
                      Beasley, effective 9/1/1988.  We decided to release 
                      that commercial version as shareware. Thus the second 
                      shareware version, Version 2.50S, was identical with 
                      the commercial version with the exception of the 
                      copyright notices, this revised documentation, a 
                      couple of ancillary files and the request for $20.

      Version 3.0xS - The shareware version you're looking at right now! 
                      This has a major development of the reporting 
                      program making it possible to develop special reports 
                      by date interval, by selected user or program, and,
                      most importantly, it links the user and the program
                      in the printer report.  Detailed or summary reports
                      are available The LOGIT.COM and LOGIDMP.EXE programs 
                      are unchanged and this version is fully downward 
                      compatable with Version 2.xx log files.

      Version 4.x  -  Vaporware. Planned features include greater screen 
                      mode compatibility and a "time-out" feature and other 
                      enhancements. This may be done as commercial work, 
                      but in any case, persons paying the registration fee 
                      for version 2.50S or 3.0xS will receive substantial 
                      discount on the upgrade - as well as notification.



                                    Page 7





 	IV.  HOW TO INSTALL LogIt! 


	A.  Hard Disk Systems:   

	Make a directory with the name \LOGIT.  Copy all files from the 
	archive into that directory.  Copy (or move) LOGIT.COM to the 
	root directory of your hard disk.  See the notes below about 
	configuring your computer for LOGIT.  Both PATH and SET commands 
	in your AUTOEXEC.BAT file are necessary as noted below.  See your
	DOS manual if your don't know how to use the commands MD (Make
	Directory), PATH, and SET.


	B.  Floppy Disk Systems:

	If you are still using a two floppy (or single floppy) system
	LogIt! will still work, but to be honest, it's probably more 
	trouble than it's worth.  Just go ahead and break down and 
	buy a hard disk.  Its time to do so anyway!  But, if you still
	want to use it with a floppy-based system, here's what you do:

	Copy LOGIT.COM to all disks you use as boot disks or program 
	disks in your A: drive and be sure that PATH and SET commands
	are used as shown below.   The LOGITDMP.EXE and the LOGITRPT set
	of files need not be on the boot disk since they are needed only 
	to review the data.  If you're going to run this on a two floppy
	system, see the notes below about the amount of disk space that
	LOGITRPT will require.  Disk space should not be a major problem
	with LOGIT running alone since the log file size is reasonable 
	small - only about 25 bytes per entry.  


	C.  How to Set Up the Computer for LogIt! 

		1.  Be sure that your CONFIG.SYS file contains the
		statement:  FILES=20 

		2.  Use the SET command to tell the computer where to
    		put the file LOGIT.LOG (or other name) regardless of
    		which drive is the default rive.

		The LogIt! program will create a file named LOGIT.LOG on
		the disk in the default drive (or any drive chosen). It
		will do this as often as it does not find a file called
		LOGIT.LOG.  If subdirectories are being used, LogIt! will
		place this file in the root directory unless otherwise
		specified.








				Page 8



		Specify the drive, directory and name for the file which 
		LogIt! is to use to record data by using the DOS SET 
		command.  For example, if all data is to be recorded in a 
		file called LOGIT.LOG in the root directory in drive C:  
		include the following in your AUTOEXEC.BAT file prior to 
		invoking LOGIT;

		           SET LOGIT.LOG=C:\LOGIT.LOG


		Generally, for floppy disk users, it will be best to 
		specify:

		           SET LOGIT.LOG=A:\LOGIT.LOG

		You can use the SET command to put the log file anywhere
		you wish (e.g. into a \LOGIT subdirectory) and give it
		whatever name you wish (e.g. JIMS.LOG).  Thus:

			  SET LOGIT.LOG=C:\LOGIT\JIMS.LOG


		2.   Use the PATH command to tell the computer where to
     		find LOGIT.COM regardless of which drive and directory 
		is the default.

		The DOS command "PATH" specifies that the computer will
		search for LOGIT.COM on one or more specific drives and
		directories rather than on just the default drive.  For
		example, to type LOGIT at any DOS prompt (regardless of
		which drive is the default) have, as part of the
		AUTOEXEC.BAT file, the command:

		              PATH=C:\; [etc.]

		Floppy disk users should use:

			      PATH=A:\; 


		4.   How to set up the AUTOEXEC.BAT file:  

		For hard disk users:

		        [program to set system clock]
		        PATH=C:\;
		        SET LOGIT.LOG=C:\LOGIT.LOG
                        LOGIT

		For floppy disk users:

		        [program to set system clock]
		        PATH=A:\;
		        SET LOGIT.LOG=A:\LOGIT.LOG
		        LOGIT


				Page 9






		Note that if there is nothing (not even a space or a
		switch) after the command LOGIT the system will display
		a prompt for a Start entry.  If you wish to use a switch
		(e.g. -^E so that program use is not recorded) and still
		want to have the prompt, enter the command LOGIT twice as
		in the example below. 

		        [program to set system clock]
		        PATH=C:\;
		        SET LOGIT.LOG=C:\LOGIT.LOG
		        LOGIT -^E
		        LOGIT

		When the AUTOEXEC.BAT file execution
		reaches LOGIT, the LogIt!  prompt will be displayed:

			Enter your LOGIT information now:

		Alternatively,  whatever is to be recorded for 
		the "S>" (START) entry can be included in the
		AUTOEXEC batch file, e.g.:

		        [program to set system clock]
		        PATH=C:\;
		        SET LOGIT.LOG=C:\LOGIT.LOG
		        LOGIT -^E
		        LOGIT [this is a start information entry]

		This will avoid the need to enter data while the 
		batch file is executing.

		After you run LogIt! for the first time, the DOS prompt
		will return, and the initial message will not be shown
		again.  This is true even when LogIt! is recording data
		about program changes, when the <ALT><INS> hotkey is
		pressed or when the command "LOGIT" is typed to make an
		information entry.

		Once LogIt! is RAM resident, anything - even just a 
		space - after the command LOGIT will keep the 
		window from popping up.  Thus you will need to be
		careful while writing batch files to avoid 
		putting spaces after the LOGIT command which 
		would keep LogIt! from forcing an entry.









                               Page 10





	D.   Other operating notes:

	Be sure that enough room has been left on the disk chosen
	for the LOGIT.LOG log file that LogIt! will create and
	maintain.  As noted above, LogIt! will add about 25 bytes
	each time an INFORMATION or a PROGRAM/DOS entry is made.
	When available log file space is used up, you can use the 
	LOGITDMP to convert the data to a file on another disk for 
	archive purposes or you can summarize it with LOGITRPT. 

	It is possible to copy and concatenate the original binary files
	if needed for archive purposes.  See a DOS handbook for 
	instructions on these operations if you are not familiar with 
	them.  

	If LogIt! cannot create or write into a LOGIT.LOG file, due
	to a full disk or a write protect, this will not impede
	operation of programs.  An error message from LogIt! will
	be displayed, but your program will run without problems.



































				Page 11




     V.   HOW TO START LogIt! AND ENTER INFORMATION


	A.   How to run LogIt!

	LogIt! can be invoked at any DOS prompt by the command:

                            LOGIT

	There are several command-line switches that can be used
	to specify the way in which LogIt! will record information.
	They can be used when you first run LogIt! or any time 
	thereafter.   These are:  

		      -E     (default) - records PROGRAM/DOS entries
			     and exits ("everything")
                      -^E   - records only START and INFORMATION
			     entries ("Not-Everything")    This switch
			     is useful when you wish to limit the size 
			     of the LOGIT.LOG record - a feature 
			     especially handy for people like programmers
			     who are constantly in and out of many
			     programs or where program data is not 
			     desired.  However, note that when this switch
			     is used you must make an information entry
			     with the hotkey or the command LOGIT to record
			     a proper exit.
		      -H     (default)  - enables <ALT><INS> hotkey
                      -^H   - disables hotkey


	B.   How to make LogIt! entries:

	Remember that LogIt! tracks two types of data for you.  First,
	LogIt! tracks PROGRAM and DOS use (PROGRAM/DOS entries).  LogIt!
	will not, however, track the use of internal DOS commands such 
	as COPY, DEL, TYPE  and the like.

	Second, LogIt! tracks usage according to INFORMATION entries 
	(including the START entry which is really a special case of the
	INFORMATION entry).

	There is no need to enter program names since LogIt! records 
	program use automatically unless this feature is disabled.  
	If you don't want to record all program use, but still want
	some information entered you can either use a batch file to 
	run your program and include the command LOGIT with the 
	appropriate information after LOGIT on the command line or just
	have the command LOGIT in the batch file with nothing after it.
	In this case the window will come up and prompt you for 
	information.  Alternatively, you can use the <ALT><INS> hotkey.
	All of these alternatives will, however give you only 
	INFORMATION entries since the PROGRAM/DOS recording function has
	been disabled. 


				Page 12




	Information data can be entered in three ways.   

	First, an information entry can be made using the command LOGIT 
	with the entry following it.  This can be done either manually 
	or from a batch file.  e.g.:

			LOGIT [message]

	Second, the <ALT><INS> hotkey can be used to enter data at any
	time, including from within other programs without having to 
	exit them.  When <ALT><INS> is typed, a window will appear at 
	the top of the screen, and the information can be entered.  As 
	soon as the RETURN key is pressed, the window will disappear, the 
	information will be written to disk, and the computer will resume 
	its previous task.

	Note that if the hotkey is pressed after the beginning of a
	DOS entry (before the RETURN key is pressed for that entry), 
	it is necessary to press RETURN before the window will pop up.  
	This is because LogIt! will not "see" the <ALT><INS> combination 
	which is still in the keyboard buffer.  The window will pop up 
	immediately after RETURN is pressed, and the DOS command will be 
	processed as soon as LogIt! is done writing the entry to the disk.

	The third, and very useful way, is to include the command LOGIT 
	with nothing after it in a batch file to "force" an entry since
	it is easy to forget to make entries unless there is a reminder.   


	C.   Tips for making INFORMATION entries:

	To make it easier to total the elapsed times recorded in
	LogIt! records, be consistent in the use of the identification 
	codes used in making information entries.  LOGITRPT will 
	not distinguish between upper and lower case when making 
        summaries so the entries "1a" and "1A" will be seen as being
        the same.  

	It is suggested that a code be decided upon to help record
	information in a consistent manner such as the following:

		First Character   Second Character

		1 = George        A = Personal Use
		2 = Sally         B = Business (Smith Acct)
		3 = Robin         C = Business (Jones Acct)
		4 = (etc)

	Any number-letter combination will work.   Again, remember to
	be consistent in the use of upper or lower case.

	Thus, enter:
                               LOGIT 3B


				Page 13






	to show Robin working on Smith Account.   Of course, actual
	project or account numbers could be used as well if desired.

	Record more detailed information by adding notes to the
	entry following the code.  This will also be recorded as
	part of the entry for that time in LOGIT.LOG.  A maximum of 
	128 characters may be used for each LogIt! entry if the entry 
	is made with the command LOGIT, and a maximum of 57 using 
	the <ALT><INS> hotkey.  However -- LOGITRPT will truncate all
	entries to 20 characters, so information more than 20 characters
	will not appear in summary reports.

	If desired, you can use LogIt! to document the time individuals
	spend at various tasks by having them type <ALT><INS> or the
	command LOGIT with the appropriate string to identify the activity.
	Thus, an person can log his or her time towards various projects and 
	it is easy to generate LogIt! records even for non-computer
	related tasks.

	It is best to establish a code for each user and job and include 
	a text file with these codes as a reminder message in your 
	AUTOEXEC.BAT or other batch files in the line just before the 
	command "LOGIT", e.g.,

           		TYPE LOGIT.MSG
           		LOGIT

	where LOGIT.MSG is a text file containing the list of
	available codes identifying the various people and/or
	accounts.



        When entering LogIt! information whether from the command line,
        a batch file, or the window, you should not enter control codes
        of any kind since these will be transferred to the printer 
        and may then change the printer settings disrupt the printer's
        activity.   Enter letters or numbers only.  The LOGITRPT program
        will convert all letters to capital letters, so upper versus 
        lower case is not important unless you plan to do further
        processing on the text or DIF output of LOGITDMP.












				Page 14







     VI.   HOW TO EXIT LogIt!

	Once LogIt! has been invoked, there is no way to exit or stop the 
	logging process without rebooting the system or using one of the 
	utilities that allow you to release RAM resident programs.  
	This feature increases LogIt!'s value as an accounting tool.

	LogIt! records exit times automatically by assuming that
	the time of a return to DOS, followed by a reboot,
	indicates the end of machine usage.  If a long time is
	spent working in DOS after leaving the program and that
	time must be recorded, leave a time mark for the exit.
	This is done by using the <ALT><INS> hotkey or typing "LOGIT".

	Obviously, if you just shut down the computer without making
	an exit to DOS (or crash it) LogIt! has no way of figuring 
	out when the use of the machine ended and thus cannot calculate
	elapsed times and keystrokes for the last PROGRAM/DOS and 
	INFORMATION entries.   Thus you will see blanks for these 
        last entries -- and in any case for the last DOS entry of the 
        computer run.

	If you wish to use the -^E option to conserve file space, then 
	use the <ALT><INS> hotkey or incorporate the command LOGIT into 
	a "quit" batch file to make a final entry that will enable the 
	program to calculate times and keystrokes properly.

	If there will be an extended period of time away from the
	computer, use the <ALT><INS> hotkey or the LOGIT command to
	note the time leaving and the time returning.  The keystroke
	counter gives another, time-independent, means of determining
	computer usage.




















				Page 15




     VII.   HOW TO USE LOGITRPT TO SUMMARIZE LogIt! RECORDS

	LOGITRPT will take the data in the file LOGIT.LOG generated by 
	the LOGIT.COM  program of LogIt! and convert it into a summarized 
	record of computer use using LOGITDMP as a subroutine.

        The new LOGITRPT.EXE that comes with Version 3.02S has much 
        more sophisticated log processing and reporting routines.  You can:

                *   select date ranges to process 
                *   display the data just for selected users or programs 
                *   get either a summary report with all entries by one 
                    user/program combination combined for summary purposes 
                    or get a detailed report with every record displayed.
                *   set reporting defaults and change them at will

     A.  What does LOGITRPT do?

         LOGITRPT will produce a summarized report of your
         computer's use.  The report will include, summarized
         by INFORMATION and PROGRAM/DOS entries:

		*	total keystroke counts for each entry 
		*	keystrokes/hour for each entry
		*	keystrokes as percent of total for each entry
		*	total elapsed time for each entry
		*	elapsed time as percent of total for each entry

	LOGITRPT will group all activities of a specific type 
	together using INFORMATION entries and (if LogIt! was 
	enabled to record them) PROGRAM/DOS entries.  It will sort the 
	entries according to type of entry and summarize the data for 
	each discrete entry.  

        Upper and lower case entries are not all transformed to upper
        case so the use of case need not be consistent when making entries.

	LogIt! keeps track of two types of information;  the data related 
	to INFORMATION entries and the data related to the PROGRAM/DOS 
	entries.  If LOGIT was used with the -^E switch there will be 
	no PROGRAM/DOS entries summarize in a report.

	The files LOGITLOG.TXT and the created .DBF files are temporary 
	files and will be overwritten the next time you run  LOGITRPT.
	If you want to save these files they should be renamed or copied 
	to a different disk or directory.  LOGITRPT will NOT ask you 
	before overwriting these files.

	The created V3DB1.DBF AND V3DB2.DBF are standard dBase III+(R) 
        files which can be used by dBase III+(R) or a .DBF 
        file-compatible program if you have one.

	The file LOGITLOG.TXT is just the text output of LOGITDMP.EX 
	(See below for details as to how to use this file.)


				Page 16




     B.  How To Use LOGITRPT

	First, change your default drive and directory to \LOGIT, and
	then enter the following:

                              LOGITRPT

	You will see an opening screen.  If the defaults are satisfactory,
        simply press <ENTER> and log processing will proceed.  

        Defaults displayed on the screen are:

           LogIt! log file to report from   => C;\LOGIT.LOG
             (Selects drive, director, filename for LogIt! log file.
              Default is C;\LOGIT.LOG.)

           Limit report date range [Y] or report entire log [N] => N
             (Used if you wish to report only a portion of the LogIt! 
              file between two dates.  Default is "N".)

           Report for selected user/program only                => N
             (Used if you wish to report only for certain users or
              activities.  Default is "N".)

           Quick dump of untotaled LogIt! record                => N
             (Simply runs LOGITDMP.EXE as a fast routine and provides
              no summarization or other processing of data except for
              calculating elapsed times.  Will not allow either date
              limits or reports for selected users/programs. 
              Default is "N".)

           Detailed report of EVERY LogIT! record               => N
             (Does all the processing including percentages of time
              and keystrokes for used by each individual LogIt! 
              entry, but does not summarize all entries for each 
              user.  Allows for date and user/program limits. 
              Default is "N".)

           Summary report of LogIt! data                        => Y
             (Does all the processing, accepts limits, and 
              summarizes the computer usage for each user/program
              combination.  Default is "Y".)
                                            
           Report to  SCREEN                                    => N
             (Sends the report to the screen.  Default is "N".)

           Report to  PRINTER                                   => Y
             (Sends the report to the printer.  Default is "Y".)

           Report to FILE                                       => N
             (Sends the report to a text file.  The default 
              filename is C:\LOGIT\LOGRPT.TXT.  Default is "N".)



                               Page 17
                                                           
 

        If you wish to change any of these defaults, simply type "N"
        and you will see the same screen but with the ability to alter
        the defaults either temporarily or permanently.

        The default LogIt! log file is C:\LOGIT.LOG.
	If your log file is some other file, you can enter that file
	specification including drive, directory and file name.
	(e.g.  D:\LOGIT\JIMS.LOG).  

        If LOGIT.COM was always invoked with the -^E switch, there 
        will be no PROGRAM/DOS entries to report.


    C.  Notes on screen display of LOGITRPT report:   When the screen 
        display option is used with the "Report for selected user/program 
        only" option you will see that the screen will often display only
        a few records (or even none) at any one time.   All selected 
        records will be displayed, but you may have to hit the <RETURN> 
        key several times to see them.


    D.  Cleanup procedures:

        Because LOGITRPT generates very large working files while
        processing log data, it may be useful to delete these files 
        when you are done to free up disk space.  If not deleted, 
        these files will be overwritten the next time you run 
        LOGITRPT.  The working files increase the disk space used
        by LogIt! by an amount roughly equal to 50 times the size
        of the LOGIT.LOG file.  

        If you wish to save LOGITLOG.TXT or .DBF files for archival
        or other purposes you should rename or copy these.

        The original log file (Usually LOGIT.LOG) will not be deleted
        during the cleanup procedure and you should delete or rename
        this manually if you want to start a new log file.

        To run the cleanup procedure, simply enter:

                            CLEANUP

        at any DOS prompt while you are in the /LOGIT directory.


    E.  Other notes regarding LOGITRPT:   
	
	LOGITRPT does a great amount of file accessing while it 
	creates databases, indexes them and then sorts and processes 
	the LogIt! data, and therefore you should expect processing to 
	take a while, especially if the LOGIT.LOG file is large.

	Disk caching programs will also speed this type of operation 
	greatly but there have been problems with compatibility with 
	some of them.  The one that comes with PC-TOOLS (r) Ver 4.2 
        seems to have worked fine.

                              Page 18






     F.  Other uses for LOGITLOG.TXT, V3DB1.DBF and V3DB2.DBf

         1.   Displaying detailed data:  

         The most detailed level of record keeping is the text file 
         (LOGITLOG.TXT) generated by LOGITDMP from the original LogIt! 
         binary data file.  You can see the detailed entry by entry 
         record by entering

			TYPE LOGITLOG.TXT

	 after LOGITRPT has finished running and you are back at the
	 DOS prompt.  You can print this detailed data if you wish by 
	 simply using the command 

			COPY LOGITLOG.TXT PRN

	 Alternatively, you can look at this file with a word processor
	 (in the non-document mode) or a text editor.  The file can even
	 be altered with a word processor (in the non-document mode) or
 	 a text editor.  If you do this, you will still have the 
	 LogIt! binary file as a secure archive record if you need it. 

	 2.   Using V3DB1.DBF and V3DB2.DBF  

         These can be used in exactly the same manner as any other 
         dBASE III+(R) file.  The one other created .DBF file, 
         V3DB3.DBF could be used but has less useful information. 





















				Page 19




     VIII.   HOW TO USE LOGITDMP TO READ LogIt! RECORDS

	A.  General Operations:

	You can use the LOGITDMP program for a quick display of the log
	on the screen, to print a detailed entry-by-entry unsummarized 
        record, or to create a new text or DIF file of logged data.

	The following data reporting options are available for LOGITDMP.

	         -I   Displays information entries only
                 -S   Displays all times in "HR MN SEC" format
	         -D   Produces a DIF file in addition to text to the screen

        The -I option:
		The files generated by LOGITDMP can list either the total
		activity of the computer, including all program changes, 
		or can, by use of the command "LOGITDMP -I", display the
		elapsed times only for those entries with the "I>" and "S>"
		(information and start) record type codes, ignoring 
		the "P>" and "D>" (program and DOS) entries.  This option 
		is useful where the great detail provided by the program 
		and DOS entries is not needed.

		If the -^E switch was given with the command 
		LOGIT, there will be only information entries to report 
		from the LOGIT.LOG file regardless of which option is 
		used with LOGITDMP.

        The -S Option

		Adding an "S" after the "-" mark will cause LOGITDMP to
		display all entry and exit times in "HR MN SC" format
		and elapsed times in the same format but with the field 
		headings (added only if a DIF file is created) EH, EM, ES 
		to designate elapsed hours, minutes and seconds. As a 
		default, clock times will be reported in hours and
		minutes, but not seconds, and elapsed times will be
		reported as decimal hours.

        The -D Option

		Adding a "D" after the "-" mark will cause LOGITDMP to
		create a DIF file for use in a spreadsheet or database
		program if that works better in a particular application.
		If a DIF file is generated, field headings will be 
		provided as follows:

		        YR, MO, DA, HR, MN, TY, KEYS, ETIME, INFO

		As noted above, if the -S option is also used, the 
		structure will be:

		YR, MO, DA, HR, MN, SC, TY, KEYS, EH, EM, ES, INFO	


				Page 20




                Using Multiple Options

		To use more than one of the above options at one time, just
		put all options desired together after the "-".  Thus to
		show only information entries, the time to the nearest
		second in "HR MN SEC" format, and generate a DIF file,
		type:

		              LOGITDMP -ISD LOGIT.LOG



		Usually, as in the example above, the filename that is the
		operand for LOGITDMP will be C:\LOGIT.LOG unless another 
		name has been specified. The following examples
		assume that LOGIT.LOG is in the root directory of the
		C: drive (C:\) and LOGITDMP.EXE is in the \LOGIT 
		directory.  


	B.   How to use LOGITDMP:

	1.  To display a LogIt! log on the screen, enter:

		           LOGITDMP [drive:]log filename

	    For example, use (while in \LOGIT as the default directory):

  	                   LOGITDMP C:\LOGIT.LOG

	2.  To print a LogIt! log on the printer, type:

 	                   LOGITDMP [drive:]log filename>PRN

	    For example, use (while in \LOGIT as the default directory):

                           LOGITDMP C:\LOGIT.LOG>PRN


	3.  To convert the binary LOGIT.LOG file to an ASCII (text) file
    	    on a disk, type:

	                   LOGITDMP [drive:]log filename>[newdrive:]newfile

	   For example, use (while in \LOGIT as the default directory):

  	                   LOGITDMP C:\LOGIT.LOG>A:LOGIT.TXT

	    when a file called LOGIT.TXT is to be created on the 
	    disk in drive A.






				Page 21




	4.  To convert the binary LOGIT.LOG file to a Data
    	Interchange Format (DIF) file, use the "-D" option when
    	invoking LOGITDMP. Note the new DIF file, LOGITLOG.DIF
    	will be written to the default drive and directory.  Thus, type:

                       LOGITDMP -D [drive:]filename

	    For example, use:

        	       LOGITDMP -D C:\LOGIT.LOG
	

    	when a DIF file is to be created on the default
    	drive. It is not possible for the program to concatenate
    	(add to) a DIF file once it has been created.

	When you run LOGITDMP with the -D option, the log will
    	be displayed in text format on the screen (or the printer
    	if you typed ">PRN" after the command) while LOGITDMP
    	is creating a new file called LOGITLOG.DIF on the default
    	drive.  LOGITLOG.DIF can then be renamed to any desired
    	filename as long as the suffix ".DIF" is retained.
    	To create both a text and a DIF file, enter:

	               LOGITDMP -D LOGIT.LOG>[drive][newfile]

	This will create both a DIF file on the default drive and
   	a text file on the newly specified drive.


	C.   How to View and Print the Disk Files Created by LOGITDMP

	To view the text files created by LOGITDMP, use the TYPE command.  
	To print the text files the COPY command can be used with
	>PRN at the end which will redirect the output of the file to
	the printer.  e.g. 

			COPY LOGITLOG.TXT  PRN


	D.   How to Interpret Records Produced by LOGITDMP

	The LOGITDMP program will report the contents of the
	LOGIT.LOG file with four codes denoting starting and
	elapsed times for different types of information.  The
	report can go to either the screen (default), a text file
	on a disk, or the printer.  The LogIt! report will look
	like this if the default configuration of LOGITDMP (ASCII
	text file in readable format sent to the screen) is used.
	However, there will be no headers or line numbers, which
	are added here for clarity.   If the -S option switch has been
	used, there will be additional columns to display the
	data in HR-MN-SEC format.


				Page 22



	      SAMPLE LogIt! RECORD PRODUCED BY LOGITDMP


	     YR    MO  DA  HR  MN  TY  KEYS  ETIME  INFO  
   
	     1985  01  30  10  53  S>  6438  1.50654  3B  
	     1985  01  30  10  53  D>     8  0.00444     
	     1985  01  30  10  54  P>  6422  1.48412  C:\WP\WRITE  
	     1985  01  30  12  23  D>     8  0.00667     
	     1985  01  30  12  23  I>  3789  0.97306  2C smith widgits
	     1985  01  30  12  24  P>  2480  0.38722  C:\WP\WRITE  
	     1985  01  30  12  47  D>    10  0.02111     
	     1985  01  30  12  48  P>  1291  0.55417  C:\ACC\CALC   
	     1985  01  30  13  21  D>     8  0.00722     
	     1985  01  30  13  21  I>  1256  0.26806  2B  
	     1985  01  30  13  22  P>  1248  0.25083  C:\WP\WRITE  
	     1985  01  30  13  37  D>           
	     1985  02  01  08  45  S>                 1A                       
	     1985  02  01  09  25  P>                 C:\ACC\CALC
	     1985  02  01  09  59  S> (new entry here and record continues)


	The keystroke counts (KEYS) and elapsed times (ETIME) recorded by
	LogIt! are of two general types: PROGRAM/DOS and INFORMATION.

	  The "PROGRAM/DOS" KEYS and ETIME are recorded during the time
	  that a program was actually in operation on the computer; that
	  is, from the time the program was invoked until a return to
    	  DOS or to another program.

	  The "INFORMATION" KEYS and ETIME are recorded from the time one
	  information entry was made (using <ALT><INS> or the command
	  "LOGIT") until EITHER another "INFORMATION" entry was MADE or
	  the program senses that the computer was shut down by the fact
	  that an exit to DOS was followed by a "start".

	  If a program entry or an information entry is followed
	  by a start, then LogIt! has to assume that a proper
	  exit to DOS was not executed and therefore will show
	  a blank as the KEYS and ETIME entries since no reasonable
          calculation is possible.  An example of this is seen
	  in lines 13 and 14 of the sample record above.

	  LogIt! records are displayed with the type of record (TY)
	  indicated by one of four symbols to aid in calculations;
	  these are: S>, P>, D>, I>,.  They mean:

		     S>  =  LOGIT INVOKED 
		     I>  =  INFORMATION ENTRY  
		     D>  =  IN DOS  
		     P>  =  PROGRAM (program in operation)






				Page 23

	S> Start:

	This entry indicates a "START", which is the first invocation of 
	the LogIt! program after booting DOS.  It will contain (if supplied 
	by the user) an INFO entry. KEYS and ETIME will be calculated to 
	the next information (I>) entry or until the next return from a 
	program to DOS followed by a "start" (S>).  In a sense, the "S>" 
	elapsed time entry is a special case of the "I>" "INFORMATION"
	entry.

	I> Information entry:

	This entry contains the KEYS and ETIME of operation after entering
   	LogIt! information by typing <ALT><INS> or the command "LOGIT"
   	at any DOS prompt.  LOGITDMP will calculate the keystrokes (KEYS) 
	and time (ETIME) spent after each information entry by looking 
	ahead in LOGIT.LOG to either the next informational entry or 
	the time when a "D>" entry was followed by an "S>" entry, 
	indicating that the system was reset.

	P> Program:

   	This entry contains the KEYS and ETIME for the time that the
   	program listed was in operation.  Note that this calculation is not
  	possible unless the program exited to DOS.  If this was not done,
   	LOGITDMP will just display a blank for KEYS and ETIME.  LOGITDMP
   	will calculate the elapsed time for programs from the invocation of
   	a program to an exit to DOS regardless of whether or not any
   	intervening information entries were made.   Note that while the
	program name appears in the "INFO" field it is of the PROGRAM/DOS
	type of entry.

	D> DOS:

   	This entry contains the KEYS and ETIME for the time that the
   	computer was in DOS.  Note that if there is an exit to DOS and the
   	computer is shut down (as should be done), LOGITDMP cannot
   	determine the KEYS or ETIME in DOS, and a blank will appear as the
   	entry for KEYS and ETIME in the "D>" row as in row 12 of the
   	example above.

	There is special significance to the combination of a "D>"
	followed by an "S>", as this indicates an exit from a
	program and a reboot. In these instances, the program will
	assume that the time indicated by the "D>" is the time that
	all activities were completed and will use this in
	calculating KEYS and ETIME for the "information" and
	"program" entries.  If there is not a "D>" followed by an
	"S>" combination (as if, for example, the computer was shut
	down without exiting to DOS), then calculations of KEYS and ETIME
	are not possible.  LOGITDMP will indicate this by
	displaying a blank for KEYS and ETIME, as in lines 13 and 14 of
	the sample, above.  






				Page 24




     IX.  PROBLEMS AND ERRORS

	A.  When LogIt! will not create a record

	LogIt! cannot maintain a LogIt! log file if the disk in the
	default drive (or other drive specified by the SET command)
	is write protected or otherwise unavailable for the addition 
	of data to the log file.

	LogIt! will not record activities if DOS is not in
	operation (e.g. if BASIC is being used).  However, it will
	record the times BASIC was entered and DOS was re-entered.

	Some programs on protected disks require that either the
	system be booted from that disk to operate or DOS is not
	used. Thus, LogIt! will not work with these programs.


	B.  Common Error Messages

	Because of the large amount of memory required by LOGITRPT
	and its companion programs, errors will relate to this. 
	the first sign of a lack of sufficient free memory will be a 
	message stating:

		"Cannot Run LOGITDMP.EXE"

	Other common errors are

	ERROR 010  Cannot find a file.  This may refer to one of the
		   database format files, but can also occur if due to
		   a lack of memory or disk space LOGITRPT could not
		   write one of the data files.

	ERROR 042  Printer not ready.  


	BAD LOGIT RECORD FOUND  There was a corrupted record in the
			        LOGIT.LOG binary file and the dump
                                cannot continue.   It is necessary
                                to delete the old LOGIT.LOG record
			        and allow the program to make a new
				one.  All data in the old one will
				be lost beyond the point of the
			        error.
	
	Unable to write to LOGIT log file....Please correct.  The
				program was unable to write to the
				file either because the disk was full
				or otherwise inaccessible to LogIt!

        Printer problems/funny printing  Probably related to somebody
                                entering a control character to the
                                LogIt! window. See page 14.


				Page 25




	C.   Who to contact if there are problems:

	Please write to us at the address below giving the details
	of the problem, address and phone number, and we will reply
	by mail or phone.  We would appreciate knowing of any
	problems, as this will help us improve the program.

			Robertson Software
			Dept. LS-3
			P.O. Box 576
			Geneva, IL, 60134

	Needless to say, we will be more enthusiastic about providing
	support to people who have paid the registration fee.  If you
	want a reply to your inquiry, PLEASE INCLUDE A SELF-ADDRESSED
	STAMPED ENVELOPE FOR OUR REPLY.  

	If you are writing about problems, please include information 
	about your system, including the brand, the amount of memory, any 
	special features, a printout of your CONFIG.SYS and AUTOEXEC.BAT 
	files, and a listing of any other RAM resident programs you are 
	using in addition to information about the programs you are using.  
	A printscreen dump of any error messages that will illustrate the 
	problem will also be helpful.


	D.   Detailed list of known conflicts and limitations 

	MS-Windows (R) - Don't even bother trying it.  The system will hang 
		when you exit a program running under Windows.
	VP-INFO (R)- Completely incompatible.  Problem was verified.  
	DESQview (R)- Unverified report of hanging the system when used 
		      with LogIt!
	Software Carousel (R) -  ditto....
     	Relay Gold (R) -  ditto
	PC-TOOLS (R) - Unverified report of problems when PC-Tools used in 
		RAM-resident mode.  Attempts to replicate have failed to 
                show a problem.   No problems or reports of problems
                otherwise.
	Norton Utilities (R)- For some strange reason, there is a problem
		with the File Editor of the Norton Utilities.  If LogIt!
		is running and you enter a ^C  character into the 
		file, the program abruptly exits to DOS.  This does NOT 
		occur with the PC-TOOLS file editor.
   	Multimate (R) - A recent version of this program looks through 
		multiple directories for things and in doing so generates 
		many tiny logit files if you are logging program use.  
		There are also reported problems with keyboard in 
		Version 4. Earlier versions seem to work OK.
        CED - Loading order is important - Load LogIt! first. 
    	Compiled Basic Programs - Rarely,  a problem will occur where the
                bell will stay on for long times if the Hotkey is used.  
		No other problems.  It probably depends on which compiler 
		was used.


				Page 26


	Disk Caching programs - LOGIT.COM appears to work well with all
		disk caching programs tested so far.  However, some 
		disk caching programs have trouble with compiled dBASE
		programs such as LOGITRPT.EXE.  While PC-CACHE (which 
		comes with PC-TOOLS)(R) works well with LOGITRPT.EXE.
	Programs invoking other programs (or COMMAND) - Not really a 
		problem,  but when one program invokes another, the number 
		of keystrokes and time spent in the parent program are 
		divided among the programs that were run under it.  If you 
		want to attribute all time and keystrokes to the parent 
		program you can do this by using a batch file with the 
		LOGIT command contained in it to invoke the parent program.
		That information entry will then contain the proper time 
		and number of keystrokes.  (It is best to also use the
                command "LOGIT" in same batch file so that the information 
                exit is properly recorded upon leaving the parent program.)
	Loss of LogIt! SET commands:    There have been rare instances of 
		Logit putting the LOG file in strange places - e.g. when 
		a program is invoked from a floppy disk, LogIt!  may put the
	        file on that disk.  This may relate to the a secondary 
		program invoked by a primary program running out of 
		environment space when it tries to make a copy of the
		environment commands.  You may want to try increasing the
                environment space.  You can use the following line in 
                your CONFIG.SYS file:
                           SHELL=C:\COMMAND.COM /P /E:1200
                or refer to your DOS manual.
	Graphics Screen Modes:  These versions of LogIt! will not
		bring up the window in a readable form when the screen is
		in graphics mode.  


     X.	REGISTRATION INFORMATION AND INVOICE FOR LogIt! (R)

	Please help us make the shareware concept work by paying us for 
	this program if you find it to be useful.  We also hope that you 
	will make it available to others who might like it.  

	Your payment of $20.00 gives you the right to use one copy of 
	LogIt! on one machine.  We request payment for each additional 
	copy in use.   Please remember that site licenses are available 
	for 10 or more copies; contact the authors at the address below 
        for more information.

        If you have previously paid for LogIt!, either shareware or via
        our SDDC contract, we would appreciate a nominal upgrade 
        registration fee of $10.00 for this version.
         
        If you wish, you can use the fold-up mailer below for sending 
	your check along with a small amount of information.  Please tape 
	so that the check does not fall out!

	Please separate mailer from this document.  

	To fold, tape check to *back* of side 2, then place mailer 
	printed side down.  Fold side 1 back, and then cover it with 
	side 3 also folded back.   Staple or tape closed.

				Page 27
..............................................................................
Side 1.
Enclosed is payment for ___ copies of LogIt! V3.02S @ $20/copy.  $____.__
Please make check payable to Robertson Software, and tape inside this
mailer.  (Mark here // and insert check for $10/copy for upgrades.)

Payment by: Name______________________________________

            Company __________________________________

	    Street  __________________________________

	    City/State/Zip/Country ___________________________________

	    Phone (note if home or work) ______-______________ // H  // W
Planned use for LogIt! ________________________________________________
Where did you get your copy? __________________________________________
Any Comments?  (It's OK to use next side if you wish)
THANK YOU,   Alan Robertson and John Beasley
            fold back here and tuck this flap under first
 ------------------------------------------------------------------------------
Side 2.  (ok to use for comments - this is back of mailer)




















              fold next side over to make front of mailer
 -----------------------------------------------------------------------------
Side 3					                           1st Class
FROM ________________________				             stamp
     ________________________					      here
     ________________________
     ________________________

 



			TO   Robertson Software
			     Dept. LS-3
                             P. O. Box 576
		             Geneva, IL,  60134






LogIt!  Ver 3.02S 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3084

     Volume in drive A has no label
     Directory of A:\

    ARCE     COM      5804   1-06-87   3:37p
    LOGIT302 ARC    226287   1-22-89   3:05p
    README             675   1-22-89   3:21p
    GO       BAT        40   5-27-92   3:48a
    FILE3084 TXT       821   8-27-92   6:09a
            5 file(s)     233627 bytes
                           87040 bytes free
