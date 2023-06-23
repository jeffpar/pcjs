---
layout: page
title: "PC-SIG Diskette Library (Disk #278)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0278/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0278"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "QSYS DOS MENU 2 OF 2 (#118 FIRST DISK)"

    Who needs to get organized? Not everyone, certainly. But if you do feel
    the need, QSYS DOS MENU may be just what you're looking for. The program
    is an operating environment of its own, a menu system, an appointment
    calendar, and a message system. One of the major features of the program
    is its password capability for up to 24 users.
    
    QSYS DOS MENU is an excellent choice whaere a business may include non-
    computer-literate (NCL) employees, because the system does much of the
    more complicated operations by means of its won DOS system.
    
    System Requirements: Color graphics, two disk drives, (hard disk
    recommended)
    
    How to Start: Consult the .DOC and README files on Disk 278 for
    directions and documentation.  To run QSYS.EXE, just type its name,
    i.e., QSYS and press <ENTER>.
    
    Suggested Registration:   QSYS $50.00 for full documentation and update
    
    File Descriptions:
    
    The First Disk Contains:
    QSYS     EXE  Main QSYS program
    QINST    EXE  Part of QSYS
    AUTOEXEC BAT  Installation startup procedure batch file
    QLDR     COM  Part of QSYS
    QINT     EXE  Part of QSYS
    QCNFG    EXE  Part of QSYS
    QMSG     EXE  Message handler
    MEMBRAIN SYS  RAMdisk initial bootup file
    CONFIG   SYS  Initial bootup file MEMBRAIN EXE  RAMdisk
    MEMBRAIN EXE  Disk examination utility
    
    The Second Disk Contains:
    MAKEDOC  TXT  Instructions for printing documentation
    MAKEDOC  BAT  Batch file to print documentation
    READ     ME!  Read this first ________
    Q_*      DOC  Documentation files (17 files)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MAKEDOC.TXT

{% raw %}
```

	 The QSYS documentation is provided in several files. This may seem
    a bit strange at first, but really, there's a very good reason. Most
    printers available for personal computers are not designed to withstand
    continuous duty. I found this to be true with my own printer. It seems
    that the heat associated with extremely lengthy print jobs has a very
    adverse effect on printheads. For this reason, I thought it appropriate
    to provide the documentation file in the form of several smaller files.
    There is also a provision for combining the files into one large file,
    or to print all of the smaller files at once, for those of you who feel
    that your printer is up the task. If in doubt, assume that your printer
    is only as good as mine was.
	 Regardless of which of the following methods you decide to use for
    printing the documentation, a few things are assumed. Each page of the
    documentation is 66 lines long. This means that on standard 8.5" x 11"
    forms, at 6 lines/inch, each page will finish at top-of-form, it it
    started at top-of-form. The documentation files all have an extension
    of '.DOC ', and are on the QSYS DOCUMENTATION diskette in the order in
    which they should be printed and assembled.


    - Light-Duty Printers:

	 Use the 'COPY ' command to print each '.DOC ' file. For example,
    the command 'COPY Q_TITLE.DOC LPT1: ', would print the first file to a
    printer connected to the first parallel port.
	 The 'PRINT ' command could also be used, but since the spooler
    outputs a top-of-form at the end of each file, a blank page would be
    ejected after each file that was printed.


    - Continuous-Duty Printers

	 A batch file named 'MAKEDOC.BAT ' is provided for combining the
    documentation files, or for printing all of the files at once. This
    batch file uses two parameters. The first parameter tells MAKEDOC where
    the QSYS documentation files can be found, and the second parameter
    tells MAKEDOC where to output them. Enter the command in the following
    format.

	 d:MAKEDOC parm1 parm2

	 d: - The drive in which QSYS DOCUMENTATION is inserted, if not the
	      default drive.
      parm1 - The drive in which QSYS DOCUMENTATION is inserted. Must be
	      specified if not the default drive, or if parm2 is specified.
      parm2 - The output device or file specification to which the combined
	      QSYS documentation files will be copied. Any valid device
	      name, such as 'LPT1: ' or 'COM1: ' may be specified. May also
	      be a file specification, including drive, path, and filename.
	      This parameter defaults to 'd:QSYS.DOC ' if omitted.

    For example, 'B:MAKEDOC B: LPT1: ' invokes MAKEDOC from drive B:, and
    copies all of the QSYS documentation files from drive B: to the device
    connected to the first parallel port. The command 'MAKEDOC ' without
    any parameters assumes that QSYS DOCUMENTATION is in the default drive,
    and copies all of the documentation files to a file named 'QSYS.DOC '
    on the QSYS DOCUMENTATION diskette. The latter example would be most
    useful for printing the documentation file using the 'PRINT ' command.







```
{% endraw %}

## Q_APPA.DOC

{% raw %}
```
				   APPENDIX A
			     MEMBRAIN DOCUMENTATION


    - Description

	 MEMBRAIN.EXE creates a file named 'MEMBRAIN.SYS ', a DOS device
    driver for an emulated disk drive configured to your specifications.
    MEMBRAIN is installed through the DOS device driver interface using
    a 'DEVICE= ' statement in 'CONFIG.SYS '. DOS will assign to the drive
    the next available drive letter. For example, if your system has disk
    drives A: and B:, MEMBRAIN will be drive C:. On a PC-XT with drives A:
    and C:, MEMBRAIN will be drive D:.


    - System Requirements

	 An IBM PC or XT with at least 128K of memory and DOS 2.X


    - Installation

    1) Enter on the DOS or QSYS command line:

    MEMBRAIN  disk size,sector size,cluster size,directory entries,path

	 disk size - The requested size of the emulated drive in Kbytes.
	      An error is returned if the resulting configuration would
	      leave less than 64K of free memory. If this parameter is
	      omitted, the default disk size is 160K.

	 sector size - The size of each logical sector in bytes. Sector
	      size should be a multiple of 128 and will be rounded up to
	      the next 128 byte multiple. For example, if the parameter
	      is entered as 150, then the actual sector size will be 256
	      bytes. The default is 512 bytes per sector.

	 cluster size - The number of sectors per cluster. An error will
	      be returned if the number of bytes per cluster exceeds 2048.
	      Refer to 'Configuration Tips ' for more information. The
	      default is 1 sector per cluster.

	 directory entries - The maximum number of filenames that the disk
	      directory can hold. This parameter will be adjusted upward as
	      necessary to a multiple of sector size. The default is 64.

	 path - The drive and directory path in which MEMBRAIN.SYS is to be
	      created. This parameter is entered in the form 'd:\path '. If
	      drive is omitted, then the default drive will be used. If the
	      path is omitted, then the current directory will be used.

    NOTES:
	 - MEMBRAIN.EXE passes a return code upon termination that can be
	   tested in a batch file with the 'IF ERRORLEVEL ' batch file
	   command. A non-zero return code indicates that an error occurred.





								APP - A1





				   APPENDIX A
			     MEMBRAIN DOCUMENTATION


    2) To create a CONFIG.SYS file:

	 Enter on the DOS command line:

	  COPY CON: CONFIG.SYS	      'Copies keyboard input to CONFIG.SYS
	  DEVICE=MEMBRAIN.SYS	      ' this goes into the file
	  Press F6 and then <ENTER>   ' this writes the file to disk

    NOTES:
	 - CONFIG.SYS must be on the drive used to boot DOS.
	 - If you already use CONFIG.SYS, then edit it to include the
	   statement 'DEVICE=MEMBRAIN.SYS '.
	 - Multiple 'DEVICE= ' statements can be used in CONFIG.SYS to load
	   more than 1 MEMBRAIN device driver. This is less efficient than
	   using a single, larger device driver, and is not supported by
	   the QSYS INSTALLATION AID.

    3) Re-boot DOS either by powering the system off and then back on, or
       with the key sequence 'Ctrl-Alt-Del '. The MEMBRAIN.SYS device
       driver is automatically loaded and initialized by DOS.


    - Configuration Tips

	 MEMBRAIN.EXE displays a summary of disk space utilization as it
    creates MEMBRAIN.SYS. The following example illustrates how to use
    the data provided.

    MEMBRAIN 20,128,1,8,C:\	       'Command used to invoke MEMBRAIN.EXE

    <<<< M e m	B r a i n >>>>	       'Title
       (C) 1984 Dennis Lee
       20K MemBrain Created	       'disk size       \   These are the
							 \  values created,
      128  bytes per sector	       'sector size       \ and may differ
	1  sectors per cluster	       'cluster size      / from requested
	8  directory entries	       'directory entries/  values.

	1  reserved sector	       'boot record          \
	2  FAT sectors		       'file allocation table > overhead
	2  directory sectors	       'directory            /
      155  data sectors 	       'usable file space
    --------------------------
      160  total sectors	       '160 sectors X 128 bytes/sect = 20K

    This summary can be used to analyze the overhead of the configuration.
    Since a change in the configuration has no effect until the next time
    DOS boots, MEMBRAIN.EXE may be executed several times to analyze the
    effects of different parameters. The following notes are general tips.







								APP - A2





				   APPENDIX A
			     MEMBRAIN DOCUMENTATION


    1) Sector and Cluster Sizes

	 Each cluster requires 1.5 bytes of space for the file allocation
    table, and the total is rounded up to next multiple of the sector size.
    The general rule for adjusting sector size and cluster size is to use
    small sector and cluster sizes for smaller drives, or when small files
    will be stored, since less space will be wasted when part of a cluster
    is left unused between files. Larger sector and/or cluster sizes may
    provide more usable disk space per Kbyte of disk size, and a slight
    performance gain with larger drives, or when a few large files are to
    to be stored, since less space will be used for FAT sectors, wasted
    space between files is less of a consideration, and DOS will spend less
    time finding a given amount of data.

    2) Directory Entries

	 Each directory entry requires 32 bytes of space, and the total is
    rounded up to the next multiple of sector size. For example, with 128
    byte sectors, you get 4 directory entries per sector. Any request for
    directory entries would be rounded up to a multiple of 4. The only key
    to allocating directory entries is to allocate slightly more than you
    think you'll need, because it's frustrating to have free disk space and
    no available directory entries, but not too many, since extra entries
    are wasted space. MEMBRAIN uses one directory entry for a volume label.


    - Operational Characteristics

	 MEMBRAIN looks to DOS like a non-IBM fixed disk. This device type
    is used because it provides an operational interface to DOS consistent
    with it's performance characteristics. The following list outlines it's
    important operational characteristics.

	 1) Since MEMBRAIN is a non-IBM device, the 'FORMAT ' command will
	    not work with it. It doesn't need to be formatted!
	 2) Since MEMBRAIN can be any non-standard size, and is considered
	    fixed media, 'DISKCOPY ' will not work with it.



















								APP - A3






```
{% endraw %}

## Q_APPB.DOC

{% raw %}
```
				  APPENDIX B
			      QLDR DOCUMENTATION



    - Description

	 QLDR.COM is a program used by QSYS to enhance it's ability to load
    programs, batch files and DOS commands through a DOS batch file. It
    handles the tasks of checking for the required files, prompting for
    required media, handling errors associated with missing directories and
    files, and even for the execution of batch files and BASIC programs. It
    also provides services for interrupting the execution of a batch file,
    the ability to move forward and backward between tasks in a batch file,
    and the ability to temporarily load the DOS command processor at any
    point within the batch file, execute any program, batch file, or DOS
    command, and return to the interrupted batch file at the point at which
    execution was suspended.
	 QLDR can be used in any batch file that is executed in the QSYS
    environment. It receives it's input from command line parameters, and
    passes it's output to the calling batch file through the DOS 2.X return
    code mechanism. This output can be determined by the calling batch file
    through use of 'IF ERRORLEVEL ' statements.

    - Input Parameters

	 QLDR is loaded and passed parameters through use of the following
    command line. Each parameter passed to QLDR is discussed in detail.

	 QLDR Program type,Drive,Vol-id,Path,Filename.ext,Parameters

	 - Program Type

	      The program type describes to QLDR the type of file which
	 will be loaded. It is a single character, a number between 0 and
	 5. The action that QLDR takes depends upon this parameter. The
	 table below describes what each program type means, and the action
	 which QLDR takes for each program type.

	      BLANK - Instructs QLDR to interrupt batch file execution and
		      display the option menu. All other parameters are
		      discarded if present. Once a menu option is selected,
		      QLDR terminates and passes a return code equal to the
		      menu option selected, unless the selection was 4. In
		      this case, the command processor is loaded and QLDR
		      passes control to it. After the command processor is
		      terminated with the 'EXIT ' command, QLDR re-displays
		      the option menu.

		0   - Instructs QLDR to test for a user interrupt (Escape),
		      and interrupt execution and display the option menu
		      only if an interrupt is requested. If an interrupt is
		      detected, the action taken by QLDR is the same as if
		      the program type parameter was blank.

		1   - The 'Filename.ext ' parameter is an internal DOS
		      command. QLDR action is the same as for type 0.



								APP - B1





				  APPENDIX B
			      QLDR DOCUMENTATION



		2   - The 'Filename.ext ' parameter is a .COM or .EXE file.
		      QLDR tests for media in the specified drive with the
		      specified volume label, changes to the indicated
		      directory, checks for the existence of the specified
		      file, tests for a user interrupt, and terminates
		      passing a return code.

		3   - The 'Filename.ext ' parameter is a batch file. QLDR
		      tests for media in the specified drive with the
		      specified volume label, changes to the indicated
		      directory, checks for the existence of the specified
		      file, loads COMMAND.COM from the drive and directory
		      from which DOS was booted, and passes the batch file
		      name and parameters to it for execution. After the
		      command processor executes the batch file, it passes
		      control back to QLDR which then terminates and passes
		      a return code back to the calling batch file.

		4   - The 'Filename.ext ' parameter is a BASIC program. The
		      actions taken by QLDR are the same as those for type
		      3 programs, except that BASIC.COM is loaded instead
		      of COMMAND.COM.

		5   - The 'Filename.ext ' parameter is an advanced BASIC
		      program. The actions taken by QLDR are the same as
		      those for type 4 programs, except that BASICA.COM is
		      loaded instead of BASIC.COM.

	 - Drive

	      The drive parameter is passed in the form of a drive letter
	 followed by a colon. For example 'A: '. This is the drive on which
	 QLDR can find the requested file. If this parameter is omitted,
	 then QLDR will assume the drive from which DOS was booted.

	 - Vol-id

	      This is the volume label of the media that is expected to be
	 in the specified drive. If this parameter is omitted, then QLDR
	 will not check for a volume label.

	 - Path

	      This is the directory path, specified from the root directory
	 to the file, in which the specified file can be found. If this
	 parameter is omitted, then QLDR will assume the root directory.

	 - Filename.ext

	      This is the filename and extension of the file to loaded. It
	 may contain global filename characters. This parameter cannot be
	 omitted if the program type is greater than 1.



								APP - B2





				  APPENDIX B
			      QLDR DOCUMENTATION



	 - Parameters

	      This is the parameter string to be passed to the program to
	 be loaded. This parameter may be omitted if no parameters are to
	 be passed.


    - Output Return Code

	 If all necessary resources are available, and the program type is
    not blank, QLDR will terminate passing a return code of 0. If resources
    are unavailable, or the Escape key has been pressed requesting a user
    interrupt, the following menu will be displayed, and QLDR will halt
    awaiting operator intervention.

		     1) Re-run Previous Task
		     2) Cancel Current Task
		     3) Cancel the Batch File
		     4) DOS Command Processor

		   Press <ENTER> to Continue or Select Option: _

    Option 4 will only be displayed if the current user is a primary user.
    Once an option, other than option 4, which loads the command processor,
    has been selected, QLDR will terminate passing a return code equal to
    the number of the menu selection. The following example batch file
    entries illustrate how the return codes are used to control batch file
    execution.
				       ' assume previous tasks exist
	 :JOB02 		       ' batch file label
	 CD C:\ 		       ' change to QLDR directory
	 C:QLDR 1,,,,DIR, B:	       ' load QLDR and pass parameters
	 IF ERRORLEVEL 3 GOTO END      ' if selection 3 then end batch file
	 IF ERRORLEVEL 2 GOTO JOB3     ' if selection 2 then next task
	 IF ERRORLEVEL 1 GOTO JOB1     ' if selection 1 then previous task
	 DIR B: 		       ' if <ENTER> then proceed
	 :JOB03 		       ' batch file label
	 ECHO Loading QSYS	       ' say what we're loading
	 CD C:\ 		       ' change to QLDR directory
	 C:QLDR 2,C:,,\,QSYS.EXE       ' load QLDR and pass parameters
	 IF ERRORLEVEL 3 GOTO END      ' if selection 3 then end batch file
	 IF ERRORLEVEL 2 GOTO JOB4     ' if selection 2 then next task
	 IF ERRORLEVEL 1 GOTO JOB2     ' if selection 1 then previous task
	 C:QSYS.EXE		       ' if <ENTER> then proceed
	 :JOB04 		       ' batch file label
				       ' assume more tasks follow
	 :END			       ' end of batch file








								APP - B3






```
{% endraw %}

## Q_APPC.DOC

{% raw %}
```
				  APPENDIX C
				THE BASE MENU



	 The base QSYS menu can be thought of as a reference point from
    which all other QSYS menus are created and accessed. The installation
    procedure creates a default base menu and names it 'SYSTEM MENU '.
    This menu is created in the same directory as QSYS. It is not only
    possible to rename the base menu, but also to relocate it, as long as
    any changes are made prior to creation of new QSYS menus. Once new
    menus have been created, it is not advisable to rename or relocate the
    base menu or any other parent menu.
	 In order to change the base menu, changes will have to be made to
    the AUTOEXEC.BAT file that the installation procedure created. In this
    file, there will be an entry similar to the example below. This entry
    is used to load QINT.EXE. The parameters passed to QINT set the base
    menu location when QSYS is booted.

	       QINT SYSTEM MENU,SYS1,A:\SYSTEM.MNU,9
			 |	 |	   |	   |
			 |	 |	   |	   Security Level
			 |	 |	   Menu File Specification
			 |	 Volume label
			 Menu name

    As you can see, the parameters passed to QINT are in the same format
    as a menu descriptor! Get the picture?

	 As mentioned previously, the base menu can be thought of as a
    reference point from which all other menus are accessed. It is also
    possible to tell QSYS that a menu, other than the real base menu, is
    the base menu. Confusing? Well, don't try this until you're no longer
    confused. What all this really means, is that to QSYS, the base menu
    is only a menu that is used for a default. It doesn't really have to
    be the very first menu, it can be any menu. It should be a menu with
    a security level of 9, so that every user has a menu to look at when
    first signed-on, but it can be in the middle or at the end of the menu
    structure, as well as at the beginning.

	 I purposely didn't go into much detail on this subject. It is an
    area that most installations will never play with, and indeed no-one
    should ever have to change. I mention it because the mechanism exists,
    and someone, somewhere will find a need to use it. If this is the case,
    then they'd better know what they're doing. It is quite possible to
    really screw things up if you don't! Study the MENU SYSTEM section of
    this documentation until you really feel that you know how it works
    before taking chances with the menu system that you've spent hours,
    days, or however long setting up.











								APP - C1






```
{% endraw %}

## Q_CLOCK.DOC

{% raw %}
```
				 CLOCK/CALENDAR



	 The CLOCK/CALENDAR screen is the default screen of QSYS, and will
    be displayed anytime that a user is not signed-on to the system. This
    screen will be the first QSYS screen displayed after the startup proc-
    edure executes. It can be reached from the MENU SYSTEM by pressing F10,
    or from any other QSYS screen by pressing Ctrl-Break. Following is a
    a summary of the functions available from the CLOCK/CALENDAR.


	 - Calendar Browsing

	      The range of DOS' calendar is 1/1/1980 to 12/31/2099. In the
	 interest of consistency, this is also the range of the calendar
	 used in QSYS.

	      F1 - Moves the Calendar back one month.
	      F2 - Moves the Calendar forward one month.
	      F3 - Moves the calendar back continuously one month at a
		   time until another function key is pressed.
	      F4 - Moves the calendar forward continuously one month at a
		   time until another function key is pressed.
	      F5 - Prompts for you to enter the month and year to be
		   displayed.
	      F6 - Returns the calendar to the current month and year.
	     F10 - Terminates F3,F4,F5, and F7 functions


	 - Display the MSGQ

	      F7 - A summary of Messages for the current system date will
		   be displayed. If no Messages are in the MSGQ, then an
		   informational system message will be displayed.


	 - MSGQ Alarm Control

	     F17 - Toggle action key that switches the current state of
		   the MSGQ Alarm. A 'note ' symbol is displayed on line
		   25 of the screen when the alarm is activated. When
		   activated, the MSGQ Alarm will sound two loud, high-
		   pitched tones once per minute when a message is due.
		   This control is reset to the default state as set by
		   the 'CLOCK/CALENDAR Configuration ' whenever the
		   CLOCK/CALENDAR screen is exited.


	 - Sign-on

	      Entering your password allows access to the QSYS menu system.
	 If you are the last user that was signed-on to the system, then
	 QSYS will return you to the same place in the menu structure as
	 you were when you signed-off. Otherwise, QSYS will return to the
	 base QSYS menu.




								CLK - 1






```
{% endraw %}

## Q_CNFG.DOC

{% raw %}
```
			       QSYS CONFIGURATION



    - Description

	 In order to simplify the installation procedure, default options
    are taken for as many of the QSYS configuration parameters as possible.
    The installation aid configures only those parameters necessary for the
    system hardware on which QSYS is installed. QCNFG.EXE allows real-time
    configuration of the system parameters that make QSYS fit the operating
    environment in which it is to be used. Facilities are provided for user
    control, and screen, keyboard, and clock configuration. All changes to
    the configuration made in QCNFG are effective immediately, and effect
    all applicable QSYS program modules. Any alterations to configuration
    parameters are written to QSYS.SYS when QCNFG terminates. If QSYS.SYS
    is not available at that time, QCNFG will prompt for the proper media.
    It is possible to abort all changes by terminating QCNFG using the
    Ctrl-Break sequence.
	 The QSYS security system restricts access to some QCNFG functions
    altogether, and merely controls the way which other functions perform.
    The following sub-sections detail the operation of each function.


    - QCNFG.EXE Loading Options

	 QCNFG incorporates it's own function menu, allowing access to all
    configuration functions from within the program. It is also possible to
    access each function directly by passing the menu option number to
    QCNFG using a command line parameter. For example, 'USER CONTROL ' is
    option 1 on the Configuration Menu. The User Control function can be
    directly accessed, bypassing the Configuration Menu by appending a '1 '
    to the command line used to load QCNFG.EXE. This is illustrated in the
    default base QSYS menu created by the installation procedure. Refer to
    QSYS COMMAND LINE and MENU EDITOR in the MENU SYSTEM section for more
    information on QSYS command and filespec format.


    - Configuration Menu

	 The Configuration Menu currently contains the following options.

			     1) USER CONTROL MENU
			     2) KEYBOARD/DISPLAY CONFIG.
			     3) CLOCK/CALENDAR CONFIG.

    Each function is accessed by entering the number of the menu option.
    F10 terminates the configuration program and writes any changes to the
    configuration file.











								CNFG - 1





			       QSYS CONFIGURATION



    - USER CONTROL MENU

	 This selection provides access to all system user options. The
    functions provided vary with the user's security level. Following is
    an explanation of each function.


	 1) ADD NEW USERS

	      All users may sponsor new users to the system. The system
	 will prompt for the new users name and password. A default
	 security clearance of 9 will be assigned. The sponsoring user
	 will remain signed on.


	 2) DELETE USERS

	      Selection of this option will cause the cursor to move to
	 left of the current users name. A prompt will instruct the user
	 to enter a ` D ' to delete the user. The up and down arrows are
	 active to primary users, allowing repositioning of the cursor to
	 the left of another user's name. Any other keys will cancel this
	 option. Only a primary user (security level 0), may delete another
	 user. Any user may delete himself, unless that user is the only
	 primary user on the system. In the event that a user deletes
	 himself from the system, an immediate sign-off will occur, and
	 any messages on file for the deleted user will automatically be
	 purged from the message file during the next file reorganization
	 procedure.


	 3) CHANGE USER NAME

	      A user may change the name which the QSYS system uses for
	 identification. Care should be taken in doing so, since concurrent
	 changes are not automatically made in the message file. If it is
	 necessary to change the name of a user, known to have messages on
	 file, it is advised that the user FIRST add himself as a new user,
	 and reassign his messages to the new user. Failure to do so could
	 cause the user's messages to become inaccessible. All references
	 in the message file to users not currently in the QSYS user list
	 are deleted during file reorganization.


	 4) CHANGE PASSWORD

	      A user may change his password at any time. In the interest
	 of security, the password entry will not display. New passwords
	 are effective immediately. The password must consist of 5 data
	 keys. No function or cursor control keys are allowed. The default
	 shift state is CAPS LOCK, but may be overridden. Shift of the
	 characters in a password entry is significant. For example, a
	 password of 'IBMPC ' is considered to be different from 'ibmpc '.



								CNFG - 2





			       QSYS CONFIGURATION



	 5) CHANGE SECURITY CLEARANCE

	      Selection of this option will move the cursor to the current
	 user's security clearance field. The up and down arrows are active
	 to primary users (security level 0), allowing repositioning of the
	 cursor to another user's security field for alteration. A user may
	 not use this option to upgrade his own clearance. In addition, the
	 only primary user's clearance may not be altered. The system must
	 retain at least one primary user at all times.


    - Function Keys

	 F9 Menu

	      Pressing F9 on the command line re-displays the Configuration
	 Menu. The operation of F9 differs from that of F10 only if the a
	 function was originally accessed directly, without the aid of the
	 Configuration Menu.

	 F10 End

	      The F10 key terminates the current function. If the original
	 access to the configuration program was through the Configuration
	 Menu, then the menu is re-displayed. Otherwise, any changes are
	 written to the configuration file, and QCNFG is terminated.






























								CNFG - 3





			       QSYS CONFIGURATION



    - KEYBOARD/DISPLAY CONFIGURATION

	 This selection, available only to primary users, allows alteration
    of the parameters that control the display colors, cursor size, and
    keyboard timer. Changes made here affect only the QSYS programs. The
    DOS screen and all other programs loaded from the JOBQ are unaffected.


	 1) DISPLAY PARAMETERS

	      The display parameters allow the QSYS display colors to be
	 altered to suite the taste and monitor type of the user. During
	 installation, the display was configured for a black background
	 and border, with a white foreground and bright white highlights.
	 The attributes conform to the colors as described in the BASIC
	 reference manual under the 'COLOR ' statement. Since all changes
	 are effective as they are entered, it is possible, under some
	 circumstances, that data will not display as it is keyed. After
	 all display parameter fields have been entered, the screen will
	 be adjusted to the new values. This makes it possible to test
	 different combinations of colors before making permanent changes.
	 It is generally a good idea to make the foreground, highlight,
	 and background attributes differ, since non-display of data is
	 possible by setting the foreground and background to the same
	 attribute.

	 - Foreground Attribute

	      A value between 0 and 31. This is the attribute used to
	 display data on the QSYS screens.

	 - Highlight Attribute

	      A value between 0 and 31. This attribute is used to highlight
	 input fields and certain other areas of the QSYS screens. Certain
	 QSYS functions, such as the MSGQ screen, require that this color
	 differ from the foreground attribute in order to provide maximum
	 function.

	 - Background Attribute

	      A value between 0 and 15. Even though only values of 0 to 7
	  will actually display as the background color, values of 8 to 15
	  will cause changes in other areas of the screen.

	 - Border Attribute

	      A value between 0 and 15. Setting of this parameter will
	 cause the overscan area of the screen to change color.







								CNFG - 4





			       QSYS CONFIGURATION



	 2) KEYBOARD PARAMETERS

	 - Numeric Lock

	      This parameter allows setting the default state of the
	 numeric keypad shift. In the 'ON ' state, the numeric values of
	 each key are used. The cursor controls may be activated by hold-
	 ing down either shift key while the desired numeric keypad key is
	 pressed. In the 'OFF ' state, the cursor controls are active, and
	 the numeric keys can be activated by pressing pressing either
	 shift key. In either state, the default may be overridden for the
	 duration of the current field by pressing 'Num Lock '.

	 - Cursor Size

	      A value between 0 and 7. This is actually the value used to
	 set the top scan line of the cursor. A value of 0 produces a full
	 height cursor, where a value of 7 produces the smallest possible
	 cursor. For example, DOS uses a value of 6.

	 - Keyboard Timer

	      A value between 0 and 59 minutes. The default setting of 0
	 disables the keyboard timer. Setting the value above 0 enables the
	 keyboard timer. When enabled, inactivity at the keyboard for the
	 specified number of minutes causes the current user to be signed-
	 off, the current function to be terminated, and CLOCK/CALENDAR is
	 displayed. The keyboard timer is only active in the QSYS system
	 programs, and will not terminate other programs loaded through the
	 JOBQ.


    - Function Keys

	 F9 Menu

	      Pressing F9 on the command line re-displays the Configuration
	 Menu. The operation of F9 differs from that of F10 only if the a
	 function was originally accessed directly, without the aid of the
	 Configuration Menu.

	 F10 End

	      The F10 key terminates the current function. If the original
	 access to the configuration program was through the Configuration
	 Menu, then the menu is re-displayed. Otherwise, any changes are
	 written to the configuration file, and QCNFG is terminated.









								CNFG - 5





			       QSYS CONFIGURATION



    - CLOCK/CALENDAR CONFIGURATION

	 This selection, available only to primary users, is used to
    configure the CLOCK/CALENDAR screen.


	 1) SET TIME

	      Used to set the system time. The time is always entered in 24
	 hour format, even though the clock may be configured to display 12
	 hour format. The time will always be displayed using the format
	 'HH:MM:SS ', but may be entered using any standard DOS format.


	 2) SET DATE

	      Used to set the system date. The date will always display in
	 in the format ' MM-DD-YYYY ', but may be entered in any standard
	 DOS format. If the system date is changed, a MSGQ update will be
	 performed at the next sign-off.


	 3) DISPLAY OPTIONS

	 - Foreground Character

	      The ASCII value of the character used to form the characters
	 of the system clock. May be a value between 0 and 255. The default
	 is 4. The BASIC reference manual contains a complete list of the
	 ASCII character set.

	 - Foreground Attribute

	      The color of the system clock characters. May be a value
	 between 0 and 31. The default is 15.

	 - Background Character

	      The ASCII value of the character used to make up the back-
	 ground of the CLOCK/CALENDAR screen. May be a value between 0 and
	 255. The default is 0.

	 - Background Attribute

	      The color of the background characters. May be a value
	 between 0 and 31. The default is 0.










								CNFG - 6





			       QSYS CONFIGURATION



	 4) FORMAT OPTIONS

	 - Time Format

	      The values 12 or 24 are valid. The default is 12. In the 12
	 hour format the time will be displayed as 00:00 to 12:00. In the
	 24 hour format the time will be displayed as 00:00 to 24:00.

	 - Clock Format

	      Allows the user to configure the system clock to display the
	 time as 'HH:MM:SS ', which is the default, or as 'HH:MM '.


	 5) SOUND OPTIONS

	 - Hourly Chimes

	      A response of 'Y ' activates the chimes, and a response of
	 'N ' deactivates them. When activated, and the CLOCK/CALENDAR
	 screen is displayed, the chimes will sound on the hour.

	 - Hourly Tones

	      A response of 'Y ' activates the tones, and a response of
	 'N ' deactivates them. When activated, and the CLOCK/CALENDAR
	 screen is displayed, the tones will indicate the hour currently
	 displayed immediately following the Hourly Chimes, if also active.

	 - MSGQ Alarm

	      A response of 'Y ' sets the default state of the MSGQ alarm
	 to on. Two loud, high pitched tones will sound each minute while
	 the CLOCK/CALENDAR is displayed and messages are due. A response
	 of 'N ' sets the default state of the MSGQ alarm to off. Either
	 state may be overridden at the CLOCK/CALENDAR screen with the F17
	 function key.


    - Function Keys

	 F9 Menu

	      Pressing F9 on the command line re-displays the Configuration
	 Menu. The operation of F9 differs from that of F10 only if the a
	 function was originally accessed directly, without the aid of the
	 Configuration Menu.

	 F10 End

	      The F10 key terminates the current function. If the original
	 access to the configuration program was through the Configuration
	 Menu, then the menu is re-displayed. Otherwise, any changes are
	 written to the configuration file, and QCNFG is terminated.


								CNFG - 7






```
{% endraw %}

## Q_CONT.DOC

{% raw %}
```
			       TABLE OF CONTENTS



    PREFACE
      QSYS Description..........................................PREF - 1
      System Requirements.......................................PREF - 1
      Voluntary Support.........................................PREF - 2
      Limited License...........................................PREF - 2
      List of QSYS Files........................................PREF - 3
    GENERAL INFORMATION
      Security System...........................................GEN  - 1
      Screen Format.............................................GEN  - 2
      QSYS Editor...............................................GEN  - 3
    QSYS INSTALLATION
      Before Installation.......................................INST - 1
	Backing up your system..................................INST - 1
	Backing up QSYS.........................................INST - 2
      Installation..............................................INST - 3
	User Configuration Files................................INST - 3
	QSYS Installation Aid...................................INST - 5
      After Installation........................................INST - 11
	Required Operating Files................................INST - 11
	Default SYSTEM MENU.....................................INST - 11
	MEMBRAIN Configuration..................................INST - 11
    SYSTEM STARTUP
      Startup Sequence..........................................STRT - 1
    CLOCK/CALENDAR
      Description and Functions.................................CLK  - 1
    MENU SYSTEM
      Description...............................................MENU - 1
      Task Selection............................................MENU - 2
      Menu Selection............................................MENU - 2
      Available Functions.......................................MENU - 3
      QSYS Command Line.........................................MENU - 4
	Executing .COM, .EXE, or .BAT files.....................MENU - 4
	Executing BASIC Programs................................MENU - 5
      Menu Editor...............................................MENU - 6
	Task or Menu Descriptors................................MENU - 6
	General Information.....................................MENU - 7
	Adding Descriptors......................................MENU - 8
	Editing Existing Descriptors............................MENU - 8
	Deleting Descriptors....................................MENU - 8
	Selecting a Menu........................................MENU - 8
	Creating a New Menu.....................................MENU - 9
	Deleting a Menu.........................................MENU - 9
	Relocating a Menu.......................................MENU - 9
    JOBQ
      Description...............................................JOBQ - 1
      Special JOBQ Commands.....................................JOBQ - 1
      DOS Batch File Commands and Labels in the JOBQ............JOBQ - 1
      Use of QLDR in User Batch Files...........................JOBQ - 1
      JOBQ Functions............................................JOBQ - 2
	Pre-Release JOBQ Functions..............................JOBQ - 2
	JOBQ Execution Services.................................JOBQ - 3
	JOBQ Execution Control..................................JOBQ - 3
    MSGQ
      Description and Functions.................................MSGQ - 1


								CONT - 1





			       TABLE OF CONTENTS



    MESSAGE SYSTEM
      Description...............................................MSG  - 1
      Loading Options...........................................MSG  - 1
      Common Editing Features...................................MSG  - 1
      Message Data Fields.......................................MSG  - 2
      Messages Menu.............................................MSG  - 3
      Help Facility.............................................MSG  - 3
      DISPLAY Message Function..................................MSG  - 4
      PREVIEW Message Function..................................MSG  - 5
      ENTER NEW Message Function................................MSG  - 6
      SEARCH/EDIT Message Function..............................MSG  - 7
      SET TIME & DATE Function..................................MSG  - 8
      FILE REORGANIZATION Procedure.............................MSG  - 8
    QSYS CONFIGURATION
      Description...............................................CNFG - 1
      Loading Options...........................................CNFG - 1
      Configuration Menu........................................CNFG - 1
	User Control Menu.......................................CNFG - 2
	  Add New Users.........................................CNFG - 2
	  Delete Users..........................................CNFG - 2
	  Change User Name......................................CNFG - 2
	  Change Password.......................................CNFG - 2
	  Change Security Clearance.............................CNFG - 3
	  Function Keys.........................................CNFG - 3
	Keyboard/Display Configuration..........................CNFG - 4
	  Display Parameters....................................CNFG - 4
	  Keyboard Parameters...................................CNFG - 5
	  Function Keys.........................................CNFG - 5
	Clock Configuration.....................................CNFG - 6
	  Set Time..............................................CNFG - 6
	  Set Date..............................................CNFG - 6
	  Display Options.......................................CNFG - 6
	  Format Options........................................CNFG - 7
	  Sound Options.........................................CNFG - 7
	  Function Keys.........................................CNFG - 7
    SYSTEM MESSAGES
      Description...............................................ERR  - 1
      Informational Messages....................................ERR  - 2
      Procedural Error Messages.................................ERR  - 3
      System Error Messages.....................................ERR  - 8
    APPENDIXES
      A - MEMBRAIN Documentation................................APP  - A1
	Description.............................................APP  - A1
	System Requirements.....................................APP  - A1
	Installation............................................APP  - A1
	Configuration Tips......................................APP  - A2
	Operational Characteristics.............................APP  - A3
      B - QLDR Documentation....................................APP  - B1
	Description.............................................APP  - B1
	Input Parameters........................................APP  - B1
	Output Return Code......................................APP  - B3
      C - QSYS Base Menu........................................APP  - C1
    GLOSSARY....................................................GLOS - 1



								CONT - 2






```
{% endraw %}

## Q_ERR.DOC

{% raw %}
```
				SYSTEM MESSAGES



	 All QSYS system programs incorporate a comprehensive set of error
    trapping and recovery routines. The System Messages returned by these
    routines can be classified into three distinct groups. The group
    classification of a particular message can be distinguished by the
    accompanying tone(s) and the duration of display.


	 INFORMATIONAL MESSAGES

	      System Messages of this group are not posted as the result
	 of an error condition, but simply to convey the status of the
	 current function. They are characterized by the accompanying short
	 duration tone of medium pitch, unless the message is meant as a
	 warning, in which case the duration will be longer and the pitch
	 higher to draw your attention to the message line. This type of
	 message will be displayed for approximately 3 seconds. Recovery
	 action is not necessary.


	 PROCEDURAL ERRORS

	      System Messages of this group are posted as the result of an
	 incorrect operator action, such as an invalid data field entry.
	 They are characterized by a long duration, low-pitched tone and
	 are displayed for approximately 6 seconds. Recovery is usually
	 automatic.


	 SYSTEM ERRORS

	      System Messages of this group are posted as the result of a
	 critical error condition, such as a hardware or program failure.
	 They are characterized by the typical DOS ' beep ', sometimes
	 accompanied by a long low-pitched tone. These errors require an
	 operator response, and the available recovery options are listed
	 on the prompt line.


	 If the active screen at the time a message is posted happens to be
    the DOS screen, then the message will display on the next available
    line and processing will continue immediately. On any other screen, the
    message will display on line 25 for the specified time and only then
    will processing continue. In this case, the display of a message may be
    terminated by pressing the <ENTER> key, unless the message includes
    options for recovery.











								ERR - 1





			     INFORMATIONAL MESSAGES



    ' task ' Placed in JOBQ

	      The task initiated from a menu or the command line has been
	 successfully added the JOBQ.

    ' task ' Placed in JOBQ * JOBQ Now Full

	      The last task initiated caused the JOBQ to reach it's
	 operational limit. Any attempt to initiate further tasks will
	 result in a JOBQ overrun.

    JOBQ Empty

	      The JOBQ is empty. This message will be posted if an attempt
	 is made to display an empty JOBQ, a task is deleted from the JOBQ
	 leaving it empty, or if an attempt is made to release an empty
	 JOBQ for execution.

    MSGQ Update Required * JOBQ Active

	      The system date has changed and QSYS is attempting to execute
	 the Message File Reorganization procedure, but the system has been
	 signed-off with tasks present in the JOBQ. The JOBQ tasks must be
	 deleted or released for execution before QSYS will automatically
	 initiate the file reorganization.

    Message Added to MSGQ * MSGQ Now Full

	      The last message added to the MSGQ caused it to reach it's
	 operational limit. Any action which causes QMSG to attempt to add
	 another message to the queue will result in a MSGQ overrun.

    MSGQ Empty

	      The MSGQ is empty. This message is posted if an attempt is
	 made to display an empty MSGQ, initiate the DISPLAY or PREVIEW
	 functions of QMSG when no messages are due for the active user,
	 or to signal the end of the DISPLAY or PREVIEW functions after
	 the last message due or pending has been displayed.

    No Messages in File for 'user name '

	      An attempt was made to initiate the SEARCH/EDIT function of
	 QMSG, and no messages to which the active user is allowed access
	 exist.

    Message File Empty

	      The message file is empty. This message is posted when any
	 attempt is made to initiate the SEARCH/EDIT function of QMSG and
	 the file contains no messages.





								ERR - 2





				PROCEDURAL ERRORS



    SYS001 - PARAMETER OUT OF SPECIFIED RANGE

	      The data entered is outside the range of valid parameters
	 specified for this field.

	 Recovery:  Enter a value inside the specified range.

    SYS002 - INVALID RESPONSE

	      A response of other than the indicated valid choices for
	 the current field been entered.

	 Recovery:  Retry the entry using a valid response.

    SYS003 - INVALID TIME

	      The time entered is in an invalid format, or is outside the
	 range of the DOS 24 hour clock. This message might also be posted
	 in QMSG if the time entered on a message input screen is prior to
	 the current system time.

	 Recovery:  Consult your DOS reference manual for information
	      concerning the format and range of valid time entries. Also,
	      if entering a time into a message, use the HELP function to
	      obtain the current system time. Retry the entry.

    SYS004 - INVALID DATE

	      The date entered is in an invalid format, or is outside the
	 range of the DOS Calendar. This message might also be posted in
	 QMSG if the date is prior to the current system date.

	 Recovery:  Consult your DOS reference manual for information
	      concerning the format and range of valid date entries. Also,
	      if entering a date into a message, use the HELP function to
	      obtain the current system date.

    SYS010 - INCORRECT PASSWORD * ACCESS DENIED

	      The password entered does not match the password of any user
	 in the QSYS user list.

	 Recovery:  Re-enter the correct password. If you are sure that the
	      password has been entered correctly, then press <Caps Lock>
	      and retry the entry. Consult a primary user if still
	      unsuccessful.

    SYS011 - ACCESS DENIED TO THIS FUNCTION

	      Your Security Level is insufficient to access this function.

	 Recovery:  Consult a Primary User to secure the necessary Security
	      Level for this function.



								ERR - 3





				PROCEDURAL ERRORS



    SYS012 - USER UNKNOWN TO SYSTEM

	      An attempt was made to send a message to a user that is not
	 currently in the QSYS user list.

	 Recovery:  Use the HELP function to check the list of QSYS users
	      and correct the entry.

    SYS015 - INVALID NAME * BLANK OR DUPLICATE

	      An attempt has been made to log another user into the system
	 using a name that is already in use. QSYS requires that all user
	 names be unique.

	 Recovery:  Retry the entry using a name different from those
	      already in use.

    SYS016 - INVALID PASSWORD * MUST BE 5 DATA KEYS

	      An invalid key was pressed in a user password field while
	 attempting to log a new user into the system. QSYS will not allow
	 the use of cursor control, programmed function, or special purpose
	 keys when entering a password.

	 Recovery:  Retry the entry using another password.


    SYS017 - NO USER ENTRIES AVAILABLE

	      An attempt was made to log a new user into the system, but
	 QSYS already supports the maximum number of users.

	 Recovery:  Consult a Primary User. A user must be deleted before
	      a new user can be logged in.

    SYS018 - CANNOT ALTER PRIMARY USER

	      An attempt was made to delete or downgrade the security level
	 of the only primary user logged into the system. QSYS must retain
	 at least one primary user at all times.

	 Recovery:  Assign a second primary user before attempting to alter
	      the first.

    SYS020 - JOBQ OVERRUN * JOB CANCELLED

	      An attempt was made to initiate a task when the JOBQ was
	 already at it's operational limit. The new task was cancelled.

	 Recovery:  Delete a JOBQ entry or release the JOBQ for execution
	      before attempting to initiate additional tasks.





								ERR - 4





				PROCEDURAL ERRORS



    SYS030 - MSGQ OVERRUN * ENTRY LOST

	      QMSG attempted to add a message to the MSGQ, but it was
	 already at it's operational limit. This error can occur while
	 entering new messages for the current system date, editing
	 existing messages to include the current system date, or if more
	 than 50 messages are in the message file for the current system
	 date during the file reorganization procedure.

	 Recovery:  If entering or editing messages, the message file will
	      be updated, but the MSGQ will not. If this error occurred
	      during file reorganization, allow the procedure to complete.
	      After displaying any messages that may be due, the message
	      file reorganization procedure can be executed a second time
	      to pick up any lost messages.

    SYS031 - INVALID UPDATE FREQUENCY

	      An update frequency was entered that does not comply with
	 the format detailed for this field, or use of the specified update
	 frequency will result in a date which is outside the range of the
	 DOS calendar.

	 Recovery:  Refer to 'Message Data Fields ' in the MESSAGES section
	      for the proper format of this field. Make sure that the year
	      of the date resulting from use of this frequency is less than
	      2100. Retry the entry.

    SYS040 - CANNOT DELETE ACTIVE MENU

	      An attempt was made to delete a menu that contained active
	 task or menu descriptors.

	 Recovery:  All descriptors must first be deleted from the menu
	      before QSYS will allow the menu to be deleted. Refer to
	      'Deleting Descriptors ' and 'Deleting a Menu ' in the MENU
	      SYSTEM section for more information.

    SYS050 - INVALID VOLUME LABEL

	      The data entered is not valid for a DOS Volume Label.

	 Recovery:  Consult your DOS reference manual under the 'VOL '
	   command for information concerning volume labels and then retry
	   the entry.











								ERR - 5





				PROCEDURAL ERRORS



    SYS051 - INVALID DRIVE SPECIFICATION

	      The drive specified in a path or filespec is not known by
	 QSYS to exist, or the specified drive is an emulated drive and
	 only hardware drives may be specified for the current function.

	 Recovery:  Correct the path or filespec entry to reflect a drive
	      specification that is valid for the current field.

    SYS052 - INVALID DIRECTORY PATH

	      The directory path specified in a path or filespec entry is
	   not a valid DOS directory path. It contains illegal path names
	   or is more than 63 characters in length.

	 Recovery:  Consult your DOS reference manual for information
	   concerning 'Tree Structured Directories '. Also note that in
	   QSYS, all directory paths must include the entire path from the
	   root directory to the file. Correct the entry.

    SYS053 - INVALID FILENAME

	      The 'filename.ext ' specified is not a valid DOS filename.

	 Recovery:  Consult your DOS reference manual for information
	      concerning 'Files and Filenames ' and retry the entry.

    SYS054 - INVALID COMMAND

	      An internal DOS or JOBQ command, specified in a filespec
	 entry, is preceded by a drive and/or path specification.

	 Recovery:  If the filespec is meant to be an internal DOS command,
	      then re-enter it without the drive and path specifications.
	      If the filespec entry reflects a filename that is the same as
	      one of the internal DOS commands, then QSYS will not support
	      this file.

    SYS055 - INVALID PARAMETERS

	      An invalid parameter was passed to a program or command from
	 the DOS or QSYS command line. All parameters passed are discarded.

	 Recovery: If this error occurred in QLDR, the <ENTER> option is
	      unavailable, and the associated task, if any, is discarded
	      from the JOBQ. If the task must be executed, then select
	      option 4, DOS Command Processor, to execute the task.









								ERR - 6





				PROCEDURAL ERRORS



    SYS058 - PATH 'directory path ' NOT FOUND

	      The indicated directory path was not found while searching
	 for a file.

	 Recovery:  If this error occurred while attempting to change the
	      active menu, then the change is aborted and the parent menu
	      is reloaded. If a volume label is specified for the menu
	      descriptor, then the integrity of this generation of menus
	      is questionable.
		    If this error occurred while attempting to create a
	      new menu, then the create is aborted. QSYS will only create
	      menus in existing directories. The sub-directory will have to
	      be created using the DOS 'MD ' command from the command line,
	      or the menu descriptor will have to be changed to reflect an
	      existing directory.

    SYS059 - FILE 'filename ' NOT FOUND

	      The indicated file does not exist in the directory that was
	 searched.

	 Recovery:  If this error occurred while attempting to change the
	      active menu, then the change is aborted and the parent menu
	      is reloaded. If a volume label is specified for the menu
	      descriptor, then the integrity of this generation of menus
	      is questionable.
		    This error is normal while attempting to create a new
	      menu. No action need be taken.

    SYS060 - INSUFFICIENT DISK SPACE

	      This error can occur while attempting to create a menu, or
	 during the message file reorganization procedure. It indicates
	 that the creation of a file cannot be performed because the media
	 to be used doesn't have enough free space.

	 Recovery:  If this error occurs while attempting to create a menu,
	      then either the menu descriptor will have to be changed to
	      reflect a drive with sufficient free space, or space on the
	      indicated drive will have to be cleared before the menu can
	      be created.
		    If this error occurs during the file reorganization
	      procedure, it indicates that space, equal to the size of the
	      message file, could not be found on any of the installed
	      drives. The procedure will be aborted. Supply enough free
	      space for the procedure to be run on any drive, and retry
	      the procedure.








								ERR - 7





				 SYSTEM ERRORS



    ASM001 - ENVIRONMENT STRING ' string ' NOT FOUND

	      The indicated environment string was not found in the system
	 environment space. The program is terminated. This error can be
	 caused by improper installation of QSYS, an untrapped error in the
	 IPL sequence, modification of the AUTOEXEC.BAT, or modification of
	 the QSYS system environment strings.

	 Recovery:  Re-IPL the system and retry the failing operation. If
	      the error persists it may be necessary to reinstall QSYS. If
	      a program error is suspected, please contact the author with
	      complete information about the error.

    ASM002 - ERROR ## IN DIR FUNC ##

	      The directory operation identified by 'FUNC ## ' has failed
	 due the indicated error. The program is terminated. The causes of
	 this error can be the same as for ASM001. The following list of
	 errors can be used to help determine the cause of the error.

	   02 - file not found		   26 - seek error
	   03 - path not found		   27 - unknown media type
	   08 - insufficient memory	   28 - sector not found
	   10 - invalid environment	   29 - printer out of paper
	   15 - invalid drive		   30 - write fault
	   20 - write protected 	   31 - read fault
	   22 - drive not ready 	   32 - general hardware failure
	   24 - data CRC error

	 The function being performed at the time of the error can be
	 referenced in the following table.

			   57 - Make Directory
			   58 - Remove Directory
			   59 - Change Directory
			   47 - Get Current Directory

	 Recovery:  If the indicated error condition points to a hardware
	      failure, then correct the cause and retry the failing
	      operation. Otherwise, the recovery action is the same as
	      for ASM001.

    ASM003 - ERROR ## IN FIND PROC

	      An error occurred while attempting to search a directory. The
	 program is terminated. The causes of this error are the same as
	 ASM001. Use the error descriptions listed under ASM002 to aid in
	 determining the cause of the error.

	 Recovery:  Same as for ASM002.






								ERR - 8





				 SYSTEM ERRORS



    BAS001 - ERROR ### IN LINE #####

	      The indicated error has occurred. This is a 'catch all ' for
	 unexpected type errors. The program is halted awaiting an operator
	 response.

	 Recovery:  Consult your BASIC reference manual under ' Error
	      Codes ' for a description of the error condition. If a
	      hardware error is indicated, then correct the cause and
	      select the 'Retry ' option from the choices given on the
	      screen. If the error condition persists, then it may be
	      necessary to take the 'Abort ' option and follow the
	      recovery procedure for ASM001. The 'Ignore ' option is
	      seldom desirable, and should only be taken if you KNOW
	      WHAT YOU'RE DOING!

    INS001 - HARDWARE CONFIGURATION ERROR

	      The installation configuration program has determined that
	 the installed system equipment does not meet the requirements
	 necessary for the installation of QSYS. This error can also be
	 caused by incorrect setting of the system hardware switches, or
	 by the absence of both MEMBRAIN and a fixed disk.

	 Recovery:  Refer to 'System Requirements ' in the PREFACE of this
	      document for information on the minimum configuration which
	      QSYS will support. If your equipment configuration meets this
	      criteria, it is possible that the memory size switches are
	      set incorrectly.	If the cause is the absence of MEMBRAIN.SYS
	      from the installation diskette, then use MEMBRAIN.EXE and the
	      information supplied in APPENDIX A to recreate this device
	      with the parameters '20,128,1,16 ', and then restart the
	      installation from step 1.

    INS002 - TOO MANY CONFIG.SYS ENTRIES

	      The Installation Configuration program found more than 20
	 entries in either the 'UCONFIG.SYS ' or 'CONFIG.SYS ' file. The
	 only option available is to abort the program.

	 Recovery:  If a 'UCONFIG.SYS ' file is being used, then recreate
	      it with 20 or fewer entries. If no 'UCONFIG.SYS ' file is
	      being used, then the configuration program will correct the
	      error in the 'CONFIG.SYS ' file during termination. Restart
	      the installation from step 1.











								ERR - 9





				 SYSTEM ERRORS



    INS003 - #####K INSUFFICIENT MEMORY

	      The Installation Configuration program has determined that,
	 due to the QSYS file locations, or to the cumulative sizes of the
	 emulated drives on the system, the indicated amount of memory
	 must be recovered in order to execute QSYS.

	 Recovery:  If the size of MEMBRAIN can be reduced by eliminating
	      the number of emulated QSYS files, then take the 'Retry '
	      option. Otherwise, the installation will have to be aborted.
	      If emulated drives, other than MEMBRAIN, are being used, it
	      may be possible to install QSYS without them.

    INS004 - TOO MANY SUB-DIRECTORIES SPECIFIED

	      The QSYS file locations, as you have specified them in the
	 installation configuration program, contain more than the maximum
	 20 sub-directory names that the program can handle.

	 Recovery:  Take the 'Retry ' option and respecify the QSYS file
	      locations using fewer sub-directories.

    INS005 - #####K INSUFFICIENT FREE SPACE ON DRIVE d:

	      The specified drive does not contain enough free space for
	 all of the QSYS files that are to be located there, as specified
	 in the installation configuration program. This error can also
	 occur if the specified drive has been chosen as the drive for
	 creating the QSYS working diskettes and it's size is insufficient
	 to hold all of the files to be located on one of the other drives.


	 Recovery:  Take the 'Retry ' option and re-specify the QSYS file
	      locations, requesting that fewer files be located on the
	      drive suspected of causing the error. The amount of free
	      space which must be recovered is indicated in the message.




















								ERR - 10





				 SYSTEM ERRORS



    IPL001 - RESOURCES UNAVAILABLE

	      The required QSYS files are not present in the drives or
	 directories in which they where originally installed by the QSYS
	 INSTALLATION AID.

	 Recovery:  If the QSYS files are located on removable media, then
	      you will be prompted in insert the correct diskette and press
	      <ENTER>. Execution of the AUTOEXEC.BAT will resume.
		    If the QSYS files are located on fixed media, then this
	      error is considered to be unrecoverable, and execution of the
	      AUTOEXEC.BAT is terminated. In this case, the QSYS files have
	      been moved from the locations assigned during installation,
	      and the QSYS system has been rendered unusable. The files
	      must be copied back to the correct drive and directories, or
	      QSYS must be re-installed.

    IPL002 - QINT FAILURE

	      A failure occurred during the initialization of QINT. Either
	 no base menu specification was passed from the command line in the
	 AUTOEXEC.BAT file, or the specification was invalid.

	 Recovery:  AUTOEXEC.BAT execution is aborted and control is passed
	      to the DOS command processor. The base menu specification
	      must be corrected, or QSYS must be re-installed.

    IPL003 - QINT FAILURE

	      A failure occurred during the initialization of QINT. The
	 system environment space contained no 'QSPEC= ' parameter, or the
	 parameter was invalid. This parameter is used to locate QSYS.SYS.

	 Recovery:  AUTOEXEC.BAT execution is aborted and control is passed
	      to the DOS command processor. The 'SET QSPEC= ' statement in
	      the AUTOEXEC.BAT file must be corrected, or QSYS must be
	      re-installed.

    IPL004 - QINT FAILURE

	      An error occurred during the initialization of QINT while
	 attempting to open, read, or close QSYS.SYS. The most probable
	 cause is that QSYS.SYS was not found.

	 Recovery:  AUTOEXEC.BAT execution is aborted and control is passed
	      to the DOS command processor. QSYS.SYS must be copied back to
	      the directory path indicated by 'QSPEC= ' in the environment,
	      or QSYS must be re-installed.








								ERR - 11





				 SYSTEM ERRORS



    IPL005 - QINT FAILURE

	      During initialization, QINT has determined that it has been
	 previously installed, or that another resident program conflicts
	 with it's operation. The most probable cause of this error is that
	 another program was executed before the QSYS startup procedure.

	 Recovery:  AUTOEXEC.BAT execution is aborted and control is passed
	      to the DOS command processor. If AUTOEXEC.BAT execution was
	      not initiated from a DOS boot, then simply re-IPL the system.
	      Otherwise, QSYS may have been installed incorrectly, or one
	      of the device drivers specified in CONFIG.SYS conflicts with
	      the operation of QSYS.











































								ERR - 12






```
{% endraw %}

## Q_GEN.DOC

{% raw %}
```
			      GENERAL INFORMATION



	 This section will describe functions common to all of the QSYS
    system programs, including the INSTALLATION AID. This section should
    be read by all users. It may provide a more clear understanding of
    the installation and operation of the system in conjunction with the
    more specific sections detailing each function. If a term is used in
    this documentation with which you are unfamiliar, you may find it in
    the GLOSSARY.


    SECURITY SYSTEM


	 The QSYS security system provides a means of controlling access
    to the various functions provided by the QSYS system. It is configured
    through the use of security levels assigned to each user, task, and
    menu.
	 Security levels might be thought of as the amount of restriction
    which QSYS will provide for a given function. For example, a security
    level of 9, assigned to a user, provides the most restriction, and a
    security level of 0 provides no restrictions. A user with a security
    level of 0 is known as a primary user. Primary users have access to
    all functions of the system without restriction. Some QSYS functions,
    for example, the QSYS Command Line and most system configuration func-
    tions, are only accessible to primary users. There is no limitation,
    other than the maximum of 24 QSYS users, on the number of users which
    can be assigned primary user status.
	 Each user selects a private password for access to the system.
    Passwords are never displayed, even while they are being entered. They
    may be changed at any time, but only by the owning user. Each user is
    assigned a security level by a primary user. No user has the ability to
    upgrade his or her own security level.
	 Task and menu security levels are similar to user security levels.
    A task with a security level of 0 is only accessible to primary users,
    and a task with a security level of 9 is accessible to all users. In
    general, a task or menu may only be accessed by users with a security
    level equal to, or below the task or menu security level.
	 The message system treats all users equally. No user, including a
    primary user, can access the private messages of another user, or the
    private messages between users.
	 Details pertaining to the function of the security system, as
    it applies to each area of QSYS operation, will be discussed in the
    appropriate sections of this document.














								GEN - 1





			      GENERAL INFORMATION



    SCREEN FORMAT


		======================================
		=		TITLE		     = <-- Line 1
		=------------------------------------= <-- Line 2
		=				     = <--
		=	      Data Area 	     =	   Lines 3-22
		=				     = <--
		=------------------------------------= <-- Line 23
		=	     PROMPT LINE	     = <-- Line 24
		=	 STATUS/MESSAGE LINE	     = <-- Line 25
		======================================

	 All QSYS programs share a common display interface. Above is an
    abbreviated diagram outlining the significant areas of the display
    screen as used by QSYS.

	 The TITLE line is used to identify the current screen name. It
    may be the name of a menu or the name of the function currently being
    performed. The screens to some similar functions may be identical
    except for the TITLE.

	 The DATA AREA of the screen is, as you might expect, used for
    displaying the details of the function being performed. For example,
    in the Menu System, this area would be used to display the current
    menu. Similarly, in the Message System, this is where the text of the
    message is entered and displayed. Lines 2 and 23 are usually used as
    separators between the the separate sections of the screen.

	 The PROMPT line is used to display a prompt indicating the action
    that currently needs to be taken by the user. The prompt may contain
    information pertaining to the allowable entries in the current field,
    or it may be used for inputting data or commands. Some error messages
    will display the available recovery options on this line.

	 The STATUS/MESSAGE line serves a dual purpose. Normally, this line
    indicates which functions are currently available, and the keys which
    are used to activate them. QSYS may also use this line to display a
    message to the user. The message may be of an informational nature, or
    it may be the result of an error. Refer to the SYSTEM MESSAGES section
    of this document for more information on messages.














								GEN - 2





			      GENERAL INFORMATION



    QSYS EDITOR

	 QSYS utilizes a keyboard input routine capable of functions
    including the input of only certain classes of keys, controlling the
    keyboard shift, formatting the input data, controlling the display
    attribute of the input field, and measuring the time span between
    keystrokes. It can manage field sizes of 0 characters a full page of
    text, and offers the user control similar to that of the editor used
    in the BASIC interpreter. This section will describe the use of, and
    the keys supported by the QSYS editor.


    - Cursor Control Keys

	 Left Arrow  - Moves the cursor one character to the left if not
		       already at the beginning of the field.

	 Ctrl-Left   - Moves the cursor to the beginning of the previous
		       word in a field, unless already at the first word,
		       in which case the cursor is moved to the beginning
		       of the current word.

	 Right Arrow - Moves the cursor one character to the right if not
		       already to the right of the rightmost character in
		       a field.

	 Ctrl-Right  - Moves the cursor to the beginning of the next word
		       in a field, unless already at the last word, in
		       which case the cursor is moved to the end of the
		       field.

	 Up Arrow    - Moves the cursor to the start of the previous field
		       if one is present.

	 Down Arrow  - Moves the cursor to the start of the next field if
		       one is present.

	 Tab Left    - Moves the cursor to the beginning of the field,
		       unless already at the beginning, in which case it
		       moves the cursor to the beginning of the previous
		       field if one is present.

	 Tab Right   - Moves the cursor to the right of the last
		       significant character of a field, unless already
		       there, in which case it moves it to the beginning of
		       the next field if one is present.

	 Home	     - Moves the cursor to the beginning of the first
		       field of a data entry screen.

	 End	     - Signals the end of editing on a data entry screen.





								GEN - 3





			      GENERAL INFORMATION



    - Editing Keys

	 Backspace   - Erases the character to the left of the cursor,
		       moves the cursor, the character at the current
		       cursor position, and all characters to the right
		       of the cursor position left one character.

	 Esc	     - Erases the field and positions the cursor at the
		       beginning of the field.

	 Ctrl-End    - Erases the character at the cursor position and all
		       characters to the right of the cursor position
		       without changing the cursor position.

	 Ins	     - Toggle action key. Turns Insert mode on with the
		       first depression and off with the next. The cursor
		       size will change to indicate Insert mode. Insert
		       mode causes all characters entered to be inserted at
		       the current cursor position.

	 Del	     - Deletes the character at the current cursor position
		       and moves all characters to the right of the cursor
		       position one character left.

	 Enter	     - Terminates editing of the field. The field will be
		       assumed to contain the value seen on the screen
		       including any trailing spaces up to the cursor
		       position.

	 +	     - The long grey ` + ' key on the numeric keypad acts
		       as a combination of Ctrl-End and Enter. Pressing
		       this key erases the character at the current cursor
		       position and all characters to the right of the
		       cursor and terminates editing of the field.


    - Function Keys

	 The programmed function keys will be referenced as F1 thru F40
    where F1 thru F10 are as designated on the keyboard. The Shift keys add
    a value of 10, the Ctrl key adds a value of 20, and the Alt key adds a
    value of 30 to the values marked on the keys. In most cases, the active
    function keys will be displayed at the bottom of the screen.


    - Special Purpose Keys

	 The Ctrl-Break sequence serves a special purpose in all of the
    QSYS system programs. This key can be used in any input field, at any
    time to sign-off the current user. However, caution should be exercised
    in it's usage, since it's effect is immediate, and no system action is
    taken to complete the current task. This key usually has the effect of
    aborting the current function.



								GEN - 4






```
{% endraw %}

## Q_GLOS.DOC

{% raw %}
```
				    GLOSSARY



    BASE MENU
	 The first or default menu used by QSYS. This is the menu to which
    all users initially sign-on after system startup.

    CHILDREN
	 Menus which are accessed from other menus. Refer to the example
    given in the 'MENU SYSTEM ' section.

    GENERATION
	 A group of menus which includes the PARENT menu and it's CHILDREN.
    Refer to the example given in the 'MENU SYSTEM ' section.

    IPL
	 Initial Program Load, sometimes referred to as boot-up. Starting
    the system from a power-off condition or a system reset such as the
    Ctrl/Alt/Del sequence.

    JOBQ
	 A batch file of user tasks to be performed in sequence. May
    consist of programs, DOS commands or other batch files.

    MSGQ
	 An area in storage containing pointers to pending messages for
    the current system date.

    PARENT
	 A menu which contains references to other menus. Refer to the
    example given in the 'MENU SYSTEM ' section.

    PRIMARY USER
	 A user with a security level of 0.

    WINCHESTER DRIVE
	 A fixed disk. A storage device from which the media cannot be
    removed.





















								GLOS - 1






```
{% endraw %}

## Q_INST.DOC

{% raw %}
```
			       QSYS INSTALLATION



	 The QSYS INSTALLATION AID was designed to minimize the task of
    installing QSYS. For more standard equipment configurations, all that
    may be necessary to install QSYS is for the installer to know his or
    her name, and be able to make up a 5 letter password. Default options
    will be provided, based upon information gathered by the configuration
    program, for every other required field, and can be accepted by simply
    pressing the <ENTER> key. The installation procedure will prompt for
    any operator action necessary.
	 The less standard your equipment configuration, the more complex
    the task of installation will become. The QSYS INSTALLATION AID has
    facilities for handling very complex installations, but greater demands
    are made on the knowledge of the installer when the complexity of the
    installation increases.
	 Read the entire QSYS INSTALLATION section before attempting the
    first installation. This will help you to understand the capabilities
    of the installation procedure. It may also be helpful to run through
    the installation once or twice before planning the final configuration.
    It is possible to preview the installation without building any files
    if the installation is aborted, by pressing Ctrl-Break, before termin-
    ating step 2j. The installation procedure can be executed as often as
    desired.
	 On a diskette system, the same diskettes may be used to install
    QSYS many times. They will be reformatted during each installation.
	 Installation of QSYS on a PC-XT, or any system using a Winchester
    disk involves a little more risk. It is imperative that your disk is
    backed-up before attempting installation. If a trial installation is
    made, installing the QSYS files in a new sub-directory will be helpful
    if deletion of the QSYS files becomes necessary. It is not necessary
    to create the sub-directory prior to installation. The installation
    procedure will create sub-directories as needed. Be aware that all of
    the startup files, AUTOEXEC.BAT, CONFIG.SYS, ANSI.SYS, MEMBRAIN.SYS,
    and MODE.COM, plus any user defined files, will be located in the root
    directory.
	 If an error occurs during the installation procedure, an error
    message will be displayed indicating the type of error that occurred.
    Refer to the SYSTEM MESSAGES section for a detailed explanation of the
    cause of the error, and possible recovery actions.


    BEFORE INSTALLATION


    - Backup Your System

	 If you are installing QSYS on a Winchester drive, it is YOUR
    responsibility to backup your present files. Also, make sure that the
    root directory and any already existing directories into which QSYS
    files will be copied, contain no files with filenames that match the
    filenames of any of the QSYS files. Refer to the list of QSYS files
    in the PREFACE of this document.






								INST - 1





			       QSYS INSTALLATION



    - Backup QSYS

	 Use the following procedure to make a working copy of the QSYS
    INSTALLATION and QSYS DOCUMENTATION diskettes. These copies will not
    only provide a measure of insurance against loss, but are necessary
    to provide a copy of DOS and the DOS utility files that are required
    by the installation procedure.

	 1) FORMAT a Blank Diskette

	      Use the 'FORMAT ' command and include the '/S ' parameter
	 so that DOS will be copied to the formatted diskette.

	 2) COPY the QSYS Files

	      Use the 'COPY ' command with the global filename of '*.* '
	 to copy all of the QSYS files from the QSYS installation diskette
	 to the diskette formatted in step 1.

			  **  Do NOT use 'DISKCOPY ' **

	 3) COPY DOS Files

	      Copy the 'FORMAT.COM ', 'MODE.COM ', and  'ANSI.SYS ' files
	 to the diskette formatted in step 1.

	 4) Backup QSYS DOCUMENTATION

	      Use 'COPY *.* ' or 'DISKCOPY ' to make a backup copy of the
	 QSYS DOCUMENTATION diskette.



	 Store the original copies of the QSYS INSTALLATION and QSYS
    DOCUMENTATION diskettes in a safe place. All future references will
    be to the working copies made in the previous steps.




















								INST - 2





			       QSYS INSTALLATION



    INSTALLATION


    1) USER CONFIGURATION FILES

	 The following preliminary steps in the installation process are
    necessary to ensure that the QSYS configuration program is able to
    correctly evaluate all system equipment to be used with QSYS. This
    is especially important in the area of storage devices, such as
    device drivers for other than IBM Winchester drives, emulated disks
    other than MEMBRAIN, which is included with QSYS, and other devices
    that require a 'DEVICE= ' entry in 'CONFIG.SYS ', or a setup program
    to be run as part of the system startup procedure. Any devices that
    are not defined when the installation program evaluates the system
    equipment may not be usable with QSYS. Steps 1a, 1b, and 1c provide
    an interface for user defined CONFIG.SYS and AUTOEXEC.BAT entries.


	 1a) CONFIG.SYS Entries

	      The QSYS INSTALLATION diskette created in the previous steps
	 contains a default  'CONFIG.SYS ' file containing the following
	 entries:
			     BUFFERS=5
			     DEVICE=ANSI.SYS
			     DEVICE=MEMBRAIN.SYS

	 This file will be used by DOS for configuration information during
	 the installation procedure, and will then be copied to the QSYS
	 media for use by DOS when QSYS is IPL'ed. Most installations will
	 not require additional DOS configuration and may skip this step.
	 However, if you desire to alter this minimum configuration, the
	 necessary entries should be copied to a file on the installation
	 diskette called  'UCONFIG.SYS '. The 'CONFIG.SYS ' file should not
	 be altered. The following example illustrates how to create this
	 file.

	      COPY CON: UCONFIG.SYS    'Type this DOS command
	      BUFFERS=10	       'Enter the necessary entries
		 ''                    '            ''
	      ^Z		       'Press F6 and <ENTER>















								INST - 3





			       QSYS INSTALLATION



	 1b) USEREXEC.BAT File

	      The 'USEREXEC.BAT ' file is a mechanism for introducing user
	 defined programs into the installation IPL sequence. This file
	 will be called from the installation 'AUTOEXEC.BAT ', if it exists.
	 The file specifications and parameters for programs required to
	 install drivers for storage devices, such as emulated disks, that
	 will be used in conjunction with QSYS, must be specified in this
	 file on the installation diskette. The following example shows the
	 steps necessary to create this file.

	      COPY CON: USEREXEC.BAT   'Type this DOS command
	      EXAMPLE.COM	       'Enter the necessary entries
		  ''                   '            ''
	      ^Z		       'Press F6 and <ENTER>


	 1c) AUTOEXEC.BAT Entries

	      The QSYS configuration program will create an 'AUTOEXEC.BAT '
	 file that DOS will execute every time QSYS is booted. Any files
	 specified in steps 1a and 1b should be copied to the installation
	 diskette.
	      In addition, the configuration program will prompt for the
	 file specifications of programs or batch files that are to be
	 included in the QSYS startup procedure. The configuration program
	 will test for the existence of all files specified, and will not
	 accept internal DOS commands. If this type of entry is desired in
	 the IPL sequence, a batch file must be created on the installation
	 diskette in this step, containing these entries. It is not good
	 practice to specify other than internal DOS commands in a user
	 batch file, since doing so will hinder the ability of the config-
	 uration program to correctly evaluate the required free space on
	 the IPL drive.
	      In short, any files that will be used in the installation
	 of QSYS, or in the QSYS startup procedure, must be present on the
	 installation diskette.


    NOTE: It is not possible to define the correct procedure for installing
    every possible non-standard device available for the IBM-PC. The above
    interfaces are provided to handle most situations, but in some cases,
    the installation procedure will have to be modified in order to ensure
    that certain devices are usable with QSYS. The key is to be sure that
    any device that is to be used with QSYS is installed at the time that
    the QSYS INSTALLATION AID performs it's equipment determination.










								INST - 4





			       QSYS INSTALLATION



    2) QSYS INSTALLATION AID

	 The following installation procedure will create all of the system
    files that QSYS will require. The configuration program will prompt for
    the necessary information. Default data for most fields is available by
    leaving the field blank and pressing the <ENTER> key. Any fields that
    are not required will automatically be skipped. The up-arrow can be
    used to back up to a previous field and change an entry. In extreme
    cases, the Ctrl-Break sequence can be used to abort the installation.
    If the installation is aborted it must be restarted from step 1.


	 2a) Re-IPL the System

	      Insert the backup copy of QSYS created in the previous steps
	 into drive A. Insert media into all remaining drives if necessary.
	 Any dual-sided diskette drives should contain diskettes formatted
	 as 2D diskettes so that the configuration program can correctly
	 determine the type of drive installed.
	      Press ' Ctrl,Alt,Del ' or power the system off and then back
	 on. The installation 'AUTOEXEC.BAT 'will begin execution.
	      If you created a 'UCONFIG.SYS ' file in the previous steps,
	 and this is the first time at this step, then proceed to step 2b.
	 Otherwise, if you created a 'USEREXEC.BAT ' file in the previous
	 steps, it will be executed now.


	 2b) System Configuration Check

	      The configuration program will first check the installed
	 hardware on your system. This equipment determination assumes
	 that all hardware configuration switches in your system are set
	 correctly. If the required hardware, as described in the PREFACE
	 of this document, is found, then the QSYS logo will appear.
	 Otherwise, an error message will be posted and the installation
	 procedure will abort.


	 2c) Create 'CONFIG.SYS ' File

	      If you created a 'UCONFIG.SYS ' file in step 1a, then it's
	 contents and the default 'CONFIG.SYS ' entries will be combined,
	 the 'UCONFIG.SYS ' file will be deleted, and the configuration
	 program will auto-IPL the system, restarting the installation with
	 step 2a. Otherwise, this step is omitted.











								INST - 5





			       QSYS INSTALLATION



	 2d) Resource Determination

	      The installation diskette will be checked for the presence
	 of the files necessary for the installation of QSYS. If any are
	 missing, an error message will be posted naming the missing file
	 and the installation will be aborted. If the file named in the
	 error message was 'CONFIG.SYS ', then the default file will be
	 recreated during termination of the configuration program and the
	 installation may be restarted at step 1. Otherwise, the missing
	 file must be copied to the installation diskette before restarting
	 the procedure.


	 2e) Drive Configuration

	      The configuration program will attempt to determine the type
	 and size of all installed drives. If an error is encountered due
	 to a drive not ready condition, the configuration program will
	 prompt for you to install media in the drive and press <ENTER>.
	 If the mother board configuration switches in your system indicate
	 more drives than are actually installed, this prompt may request
	 media for the non-existent drives. If this occurs, pressing F10
	 will bypass the test for the erroneous drive. F10 should not be
	 used to bypass tests for installed drives, since doing so will
	 render the drive unusable with QSYS.
	      After the determination is made, a summary of the system
	 hardware configuration is displayed, with a prompt asking if the
	 configuration is correct. The determination procedure cannot
	 distinguish between emulated and hardware drives, except in the
	 case of MEMBRAIN. If all of the drives installed on your system
	 have been determined correctly, then press <ENTER> and proceed to
	 the next step.
	      If any of your double-sided diskette drives contained single-
	 sided media, you can change to double-sided media now and press
	 the up-arrow, causing the drive determination to be repeated.
	      Entering an 'N ' and pressing <ENTER> will display an arrow
	 pointing to the configuration entry for the first drive which is
	 a possible emulated drive with a prompt asking if that particular
	 drive is an emulated drive. Entering a 'Y ' and pressing <ENTER>
	 will change the configuration entry to indicate that this drive is
	 emulated. Pressing <ENTER> alone will repeat the above prompt for
	 the next possible emulated drive until all possible drives have
	 been confirmed. The up-arrow may be used to repeat the prompt for
	 a previous drive. After the prompt is repeated for all possible
	 drives, you will again be asked if the configuration is correct.











								INST - 6





			       QSYS INSTALLATION



	 2f) Monitor Type

	      Attempting to display color on a monochrome display attached
	 to the Color/Graphics Display Adapter will, in some cases, degrade
	 resolution, resulting in unreadable characters being displayed.
	 This parameter will allow QSYS to disable color burst if necessary
	 in order to provide the highest quality display.
	      If you have a color monitor connected to your Color/Graphics
	 Display Adapter, then enter a '1 ' and press <ENTER>. Otherwise,
	 just press <ENTER> to accept the default of 0.


	 2g) Primary User

	 - Primary User Name:

	      Enter the name that the system will use to distinguish you
	 from other users. This entry can be up to 10 characters in length.

	 - Password:

	      Enter a password to be used for access to the system. It must
	 be 5 data keys. No control keys or programmed function keys are
	 allowed. The characters will not be displayed as they are entered.


	 2h) File Locations

	      The following prompts will ask you to identify where the
	 installation procedure should locate the necessary QSYS system
	 files. Leaving a field blank will result in the configuration
	 program determining a default, based upon information gathered
	 in the equipment determination. Any files that are located on
	 MEMBRAIN will automatically increase the size of MEMBRAIN to
	 accommodate the added file, and consequently decrease the amount
	 of available memory for program execution. If the resulting
	 memory size is insufficient to execute QSYS, then an error will
	 be posted and you will be given the opportunity to re-specify
	 the file locations. Similarly, if the total size of the files
	 located on a particular drive exceeds the space available on
	 that drive, then an error will be posted and a retry of the file
	 location specifications will be available.

	  - QSYS Path:

	      This field identifies the drive and directory path used to
	 locate QSYS.EXE, QSYS.SYS, SYSTEM.MNU, and the default locations
	 for JOBQ.BAT and QLDR.COM. All path parameters are entered in the
	 format 'd:\directory\directory... '. For example, if QSYS is to
	 be installed on drive A, in a directory called 'QSYS ' then you
	 would enter 'A:\QSYS '. If you want it to be installed in the root
	 directory, then you would enter only 'A:\ '. QSYS must be located
	 on the drive from which DOS will be booted. Only entries which
	 specify the drive from which the installation aid was booted, or
	 a fixed disk, are considered valid.

								INST - 7





			       QSYS INSTALLATION



	 - QSYS Vol-id:

	      The Volume Label of the diskette on which the files specified
	 under QSYS Path will be installed. It can be up to 11 characters
	 in length. If the QSYS path indicates a fixed disk, this field is
	 bypassed. A default is given if the field is left blank.



	 - QSYS Emulated Path:

	      Entering a path name in this field will cause the path to be
	 created, if necessary, and QSYS.EXE to be copied to the indicated
	 emulated drive during 'AUTOEXEC.BAT ' execution. This allows QSYS
	 to be reloaded very quickly when necessary, but costs memory.

	 - JOBQ Path:

	      The drive and directory path used to locate JOBQ.BAT and it's
	 associated QLDR.COM file. This path must equate to either a fixed
	 disk or an emulated drive. The default is the root directory of
	 MEMBRAIN.

	 - QCNFG Path:

	      The drive and directory path used to locate the QCNFG.EXE.
	 The specified drive must equate to a hardware drive. The default
	 is QSYS' path.

	 - QCNFG Volid:

	      The Volume Label of the diskette on which QCNFG.EXE is to be
	 installed. It can be up to 11 characters in length. If QCNFG path
	 indicates a fixed disk, then this field is bypassed. A default is
	 given if necessary.

	 - QCNFG Emulated Path:

	      Entering a path name in this field will cause the path to be
	 created, if necessary, and QCNFG.EXE to be copied to the indicated
	 emulated drive during 'AUTOEXEC.BAT ' execution. This allows QCNFG
	 to be reloaded very quickly when necessary, but costs memory.

	 - QMSG Path:

	      The drive and directory path used to locate the QMSG.EXE,
	 QINT.EXE, and MSGS.DAT. The specified drive must equate to a
	 hardware drive. The default is QSYS' path.

	 - QMSG Volid:

	     The Volume Label of the diskette on which QMSG.EXE is to be
	 installed. It can be up to 11 characters in length. If QMSG path
	 indicates a fixed disk, then this field is bypassed. A default is
	 provided if necessary.

								INST - 8





			       QSYS INSTALLATION



	 - QMSG Emulated Path:

	      Entering a path name in this field will cause the path to be
	 created, if necessary, and QMSG.EXE to be copied to the indicated
	 emulated drive during 'AUTOEXEC.BAT ' execution. This allows QMSG
	 to be reloaded very quickly when necessary, but costs memory.


	 2j) User AUTOEXEC.BAT Files

	      This section allows you to insert a message to be echoed to
	 the display during 'AUTOEXEC.BAT ' execution on the first line
	 of each entry, followed by the file specification and parameters
	 necessary for DOS to execute the programs that were copied to the
	 installation diskette in step 1c on the next line. Files named in
	 'USEREXEC.BAT ' in step 1b must be respecified in this step.

	      The following example installs an in memory spooler during
	 'AUTOEXEC.BAT ' execution.

	     ==========================================================
	     =			QSYS INSTALLATION AID		      =
	     = ====================================================== =
	     =	1) Loading Print Spooler			      =
	     =	   SPOOLER.EXE parm1,parm2,etc			      =
	     =	2) _						      =
	     =							      =
	     =	3)						      =

	     = ====================================================== =
	     = Enter User Autoexec Loading Message		      =
	     =	      QSYS 3.00 (C) Copyright 1984 Dennis Lee	      =
	     ======================================================== =

	 - User Autoexec Loading Message

	      This field allows you to enter a remark that will be echoed
	 to the screen prior to execution of the associated file specified
	 on the following line. It may be up to 70 characters in length, or
	 may be omitted.

	 - User Autoexec File Specification

	      This field allows the specification of files to be executed
	 during the QSYS startup procedure. The entire filename and exten-
	 sion of the file must be specified, followed by any parameters to
	 be passed to the file. The drive and path for each file is assumed
	 to be the IPL drive's root directory, and must not be entered.
	      It is recommended that batch files specified in this field
	 only contain internal DOS commands. The configuration program will
	 not correctly evaluate the free space required on the QSYS disks
	 for files named in a batch file, nor will these files be copied to
	 the QSYS disks.



								INST - 9





			       QSYS INSTALLATION



	      BASIC programs specified in this field must be specified in
	 the format 'BASIC(A).COM filename.ext '. With this type of file,
	 the configuration program will allocate file space on the QSYS
	 diskettes only for BASIC(A), not for the file specified in the
	 parameter of the command, and the file will not be copied to the
	 QSYS diskettes.

	      Either entry may be omitted, but if both are left blank, it
	 is assumed that entry of user autoexec items is complete. Up to
	 20 messages and/or associated files may be entered, 10 on the
	 first page, and 10 more on the second. The up-arrow may be used
	 to back-up to a previous entry or even to the previous screen.
	      After entry is completed, the installation diskette will be
	 searched for each specified file. If any of the specified files
	 are not found, an error message is displayed momentarily, and you
	 will be asked to correct the missing file specification.


	 2k) Build QSYS Files

	      Unless errors are found due to insufficient memory or file-
	 space, the rest of the installation procedure should run to
	 completion without intervention, except for prompts to insert
	 diskettes as needed. The prompts will vary from one installation
	 to the next, due to differences in system configuration and file
	 locations. Follow the prompts on the display as the installation
	 procedure creates the necessary files and installs QSYS on the
	 proper media.


	 2l) Installation Housekeeping

	      After installation of the QSYS files, the installation
	 procedure will clean up the installation diskette, removing any
	 temporary files created in the process. Only the QSYS files and
	 and the DOS files installed in during the BEFORE INSTALLATION
	 steps should remain.


	 2m) Re-IPL the System

	      The last step of the installation procedure instructs you
	 to press 'Ctrl,Alt,Del ' or power off and then back on. Refer to
	 the SYSTEM STARTUP section for detailed information on the startup
	 procedure. Read the AFTER INSTALLATION section.











								INST - 10





			       QSYS INSTALLATION



    AFTER INSTALLATION


    - Required Operating Files

	 QSYS will expect that 'COMMAND.COM ' and any versions of BASIC
    that will be required to load your programs are present in the root
    directory of the drive from which the system is booted. On diskette
    systems, these may reside on any available diskette. QSYS will prompt
    for these files as they are required in the loading process.


    - Default SYSTEM MENU

	 As a result of the installation procedure, the base menu of the
    system was created. This menu was named 'SYSTEM MENU ' and was located
    on the same drive and in the same directory as QSYS.EXE. The base menu
    initially contains references to the Message System and to the QSYS
    Configuration program modules. Although none of the QSYS system files
    should be relocated without the aid of the installation procedure, the
    menu references may be relocated as desired. Refer to APPENDIX C for
    technical information concerning the base QSYS menu.


    - MEMBRAIN Configuration

	 The installation procedure will adjust MEMBRAIN to the minimum
    size necessary for operation of the QSYS system in the configuration
    that you have specified. It will be configured with 128 bytes/sector,
    1 sector/cluster, and the minimum number of directory entries. Refer
    to APPENDIX A for detailed instructions on configuring MEMBRAIN to
    your specifications. It is not recommended that MEMBRAIN's size be
    adjusted downward even though free space may appear to exist. Upward
    adjustment will be limited by the amount of available memory in your
    system. QSYS may not execute dependably in less than approximately
    130K. 'CHKDSK ' can be used to aid in determining the amount of free
    memory that may be allocated to MEMBRAIN.



















								INST - 11






```
{% endraw %}

## Q_JOBQ.DOC

{% raw %}
```
				     JOBQ



    - JOBQ Description

	 The JOBQ is a dynamic batch file from which all other programs,
    batch files, and commands are located and executed. QSYS executes all
    tasks through this facility. The JOBQ can operate in one of two modes,
    as controlled from the menu system, using the F18 function key. In
    immediate or 'Execute ' mode, any task selected from a menu, or entered
    on the QSYS command line, is executed immediately. In batch or 'Queue '
    mode, up to 20 tasks selected for execution, are stacked, allowing a
    batch of tasks to be executed sequentially with little or no operator
    intervention. In either mode, the JOBQ will automatically reload QSYS
    after the last task in the queue has terminated.
	 After the JOBQ is released for execution, a QSYS module called
    QLDR.COM provides resource availability services, such as prompting
    for media changes as required, supplies the loading services required
    for executing batch files and BASIC programs, as well as providing
    error recovery routines. QLDR also allows extensive user control over
    JOBQ execution, including the ability to re-execute previous tasks,
    cancel tasks in the JOBQ awaiting execution, cancel the JOBQ and return
    to QSYS, or call the DOS command processor to execute any other task
    while the JOBQ is temporarily suspended.


    - Special JOBQ Commands

	 - EXIT

	      The EXIT command terminates QSYS and passes control to the
	 DOS command line. QSYS can be restarted by invoking the JOBQ. QSYS
	 should never be invoked directly, since doing so will disable all
	 JOBQ execution functions.

	 - QLDR jt,d:,volid,path,filename.ext,parms

	      The QLDR command causes QLDR.COM to be invoked from the JOBQ
	 directly. Refer to 'JOBQ Execution Services ' and APPENDIX B for
	 detailed information concerning QLDR.


    - Use of DOS Batch File Commands and Labels in the JOBQ

	 Since JOBQ.BAT is a DOS batch file, it is also possible to inter-
    mix DOS batch file commands and labels with other tasks, providing
    even greater user control. QSYS reserves two labels for it's own use
    in the JOBQ. The first consists of the word 'JOB ' plus a number from
    00 to 20. The second is the label ':END '. Refer to your DOS manual for
    detailed information on the use of DOS batch file commands and labels.


    - Use of QLDR.COM in User Batch Files

	 Refer to APPENDIX B for technical information concerning the use
    of QLDR.COM in your own batch files.



								JOBQ - 1





				     JOBQ



    - Pre-Release JOBQ Functions

	   The following functions are available only when the JOBQ is in
    'Queue ' mode. These functions are made available to the user through
    the JOBQ screen. The JOBQ screen is accessed by pressing F8 at any QSYS
    menu. From this screen, tasks in the JOBQ can be viewed, deleted, or
    their sequence of execution changed before the JOBQ is released.

    Following is a list of the functions available.

	 - PgUp or PgDn

	      If more entries are in the JOBQ than can be displayed on one
	 screen, the PgUp and PgDn keys will allow you to move forward and
	 backward from page to page as necessary. In the event that JOBQ
	 entries are deleted to the point that all entries can be displayed
	 on one screen, the PgUp and PgDn keys will be deactivated.

	 - F5 Change Sequence

	      Press F5, enter the current sequence number of the JOBQ
	 entry to be moved, a dash (-), and then the sequence number you
	 want it moved to. The JOBQ entry will be removed from it's current
	 position and inserted immediately before the the designated target
	 entry. The screen will be updated and the cursor will return to
	 the command line awaiting the next command.
	      Any error in the sequence number entries, including an empty
	 JOBQ entry specified as either source or target will produce an
	 error message momentarily and then the sequence number entries
	 may be retried.

	 - F6 Delete

	      After pressing F6, QSYS will prompt for the sequence number
	 of the JOBQ entry you would like to delete. After you enter the
	 sequence number, QSYS will echo the number you have entered and
	 ask you to confirm the entry. If the number is correct enter a
	 'Y ' and press <ENTER>. The entry will be deleted, the screen
	 updated, and the cursor will return to the command line awaiting
	 the next command. If the number is not correct, any entry besides
	 'Y ' will cancel the delete command.
	      If an invalid sequence number is entered, an error message
	 will be displayed momentarily and then the sequence number entry
	 may be retried.

	 - F38 Release JOBQ

	      Passes control to DOS for execution of the JOBQ.

	 - F10 End

	      Returns you to the menu system.




								JOBQ - 2





				     JOBQ



    - JOBQ Execution Services

	 A QSYS module named QLDR.COM provides services for checking the
    existence of all files that are placed in the JOBQ before allowing DOS
    to attempt execution. This allows QSYS to prompt for proper media when
    possible, and to alert the operator of missing resources and provide
    error recovery for those conditions that would otherwise cause JOBQ
    task execution to be aborted without user control. If an error occurs,
    a message indicating the operator action that needs to be taken, or
    indicating the condition that caused the halt is posted, followed by
    the following menu.

		   1) Re-run Previous Task
		   2) Cancel Current Task
		   3) Cancel the Batch File
		   4) DOS Command Processor

		 Press <ENTER> to Continue or Select Option: _

    Note that option 4 is only available to primary users. Options are
    selected from the menu by entering the number of the desired option.
    The <ENTER> key is not required for options 1-4. All other keys are
    ignored. The following chart explains each available option.

    <ENTER> - Continues execution of the JOBQ, after the error condition
	      which caused the halt is corrected.
	  1 - Re-executes the previous task in the JOBQ.
	  2 - Cancels the current task, and continues execution of the
	      JOBQ with the next task in the queue.
	  3 - Cancels the entire JOBQ and returns to the QSYS menu system.
	  4 - Temporarily suspends JOBQ execution, and loads the DOS
	      Command Processor. While in the DOS command processor, any
	      program, batch file, or DOS command can be executed. Entering
	      the 'EXIT ' command will exit DOS, re-display the option menu,
	      and allow further option selection, including continuation of
	      the JOBQ at the point at which it was interrupted.


    - JOBQ Execution Control

	 All options available due to an error condition, as explained
    under 'JOBQ Execution Services ', are also available through a user
    JOBQ interrupt mechanism provided in QLDR. Pressing the Esc key as a
    task is terminating, will activate the user interrupt. QLDR will post
    a message, indicating that the halt is a result of a user request,
    followed by the option menu. All options listed on the menu are avail-
    able. It is possible to move forward or backward several tasks within
    the JOBQ by selecting the appropriate option and immediately pressing
    the Esc key again to re-display the option menu. Each time QLDR halts
    it will display the current task to be performed, allowing the user to
    track the current position within the JOBQ.





								JOBQ - 3






```
{% endraw %}

## Q_MENU.DOC

{% raw %}
```
				  MENU SYSTEM



    - DESCRIPTION

	 The QSYS menu system is the interface between the system users
    and DOS. It provides a means of cataloging any task that DOS 2.X is
    capable of executing. A task can be a program, batch file, or DOS
    command. The menu system allows any task to be executed immediately,
    or placed in the JOBQ for execution as a batch, by simply selecting
    an option from any of an unlimited number of user defined menus. The
    menu system is tree-structured in design, similar to the DOS tree-
    structured directory system. This design allows totally free-form
    creation of menus to suite almost any need. The following example
    menu system illustrates the tree-structured concept.

			     .....................
			     :	  SYSTEM MENU	 :
			     :-------------------:
			     :	   Parent of	 :
			     :	  MENU 1,2 & 3	 :
			     :...................:
	     __________________________|__________________________
   ..........|..........     ..........|..........     ..........|..........
   :	   MENU 1      :     :	     MENU 2	 :     :       MENU 3	   :
   :-------------------:     :-------------------:     :-------------------:
   :  Child of SYSTEM  :     :	Child of SYSTEM  :     :  Child of SYSTEM  :
   : Parent of MENU 1A :     : Parent of 2A & 2B :     : Parent of MENU 3A :
   :...................:     :...................:     :...................:
   ..........|..........	       |	       ..........|..........
   :	  MENU 1A      :	       |	       :      MENU 3A	   :
   :-------------------:	       |	       :-------------------:
   :  Child of MENU 1  :	       |	       :  Child of MENU 3  :
   :		       :	       |	       :		   :
   :...................:	       |	       :...................:
		       ________________|________________
	     ..........|..........	     ..........|..........
	     :	    MENU 2A	 :	     :	    MENU 2B	 :
	     :-------------------:	     :-------------------:
	     :	Child of MENU 2  :	     :	Child of MENU 2  :
	     :			 :	     :			 :
	     :...................:	     :...................:


	 The above example illustrates only a small part of one possible
    structure. The basic concept of the QSYS menu system is the relation-
    ship between 'parent ' menus and their 'children '. This relationship
    forms a 'generation '. For example, in the illustration above, the
    SYSTEM MENU is the 'parent ' of MENU 1, MENU 2, and MENU 3. Together
    these menus form a 'generation '. Even though MENU 1,2, and 3 each have
    'children ' of their own, the children are outside of SYSTEM MENU's
    generation, and may not be directly affected by changes to SYSTEM MENU.
    Similarly, MENU 2A and MENU 2B are children of MENU2, and together
    these three menus form a separate generation. All of the generations
    put together form a sort of menu tree. This relationship accounts for
    the term 'tree-structured '.



								MENU - 1





				  MENU SYSTEM



    - TASK SELECTION

	 The primary function of the menu system is to provide the user
    with a quick and easy method of loading and executing tasks. This
    function is accomplished in one of two ways. Once a task has been
    defined on a QSYS menu, using the MENU EDITOR, it can be selected for
    execution by simply entering the number to the left of the task name.
	 In addition to this method, tasks may be executed directly from
    the QSYS command line, which is available on every menu. Refer to the
    detailed explanation of the QSYS Command Line in this section for more
    information concerning the use of the command line.
	 All tasks selected, regardless of which method is used, are
    executed through the JOBQ either in immediate mode or in batch mode.
    With the JOBQ in 'Queue ' or batch mode, an informational message will
    be momentarily displayed indicating the status of the task in the JOBQ.
    In 'Execute ' or immediate mode, the task is placed in the JOBQ, and
    QSYS immediately passes control back to DOS for execution of the JOBQ.
    Refer to the JOBQ section for detailed information concerning the JOBQ
    and task execution control.


    - MENU SELECTION

	 The selection of menus is accomplished similarly to the selection
    of tasks. A menu that has been pre-defined using the MENU EDITOR, can
    be selected from it's parent menu by entering the number to the left
    of the menu name, while viewing the parent menu. If a change of media
    is required to access the selected menu, QSYS will prompt for it by
    volume label. The name of the menu, as displayed on the parent menu,
    will be used in the title line at the top of the selected menu.
	 A menu can also be accessed directly from the QSYS command line by
    entering the drive, path, and filename of the menu. In this case, QSYS
    cannot prompt for a change of diskettes, if one is required. Instead,
    an error message indicating that the file was not found is issued, and
    the request is ignored. If the requested menu is found, the filename
    will be used in the title line followed by the word 'MENU '.
	 Regardless of how a menu was accessed, the F9 key will return you
    to the parent menu, unless the current menu is the base menu. F19 will
    return you to the base QSYS menu from any other menu.

















								MENU - 2





				  MENU SYSTEM



    - AVAILABLE FUNCTIONS

	 The bottom line of every menu lists, in an abbreviated format,
    most of the functions available from the menu system. Following is a
    short explanation of each function, and a reference to the section
    containing more detailed information on the use of that function.

	 KEY	   FUNCTION DESCRIPTION
	 ---	   --------------------
	 F7	   If messages are available, pressing F7 will display a
		   summary of the MSGQ. Otherwise, an informational message
		   will be displayed to inform the user that the MSGQ is
		   empty. Refer to the MSGQ section for more information.

	 F8	   If tasks have been placed in the JOBQ, then pressing
		   F8 will display the contents of the JOBQ and activate
		   the JOBQ functions. Otherwise, an informational message
		   is displayed to inform the user that the JOBQ is empty.
		   Refer to the JOBQ section for more information.

	 F9	   Returns to the current menu's parent menu. If this menu
		   has no parent, then the request is ignored.

	 F10	   Signs-off the current user and returns to the Clock-
		   Calendar.

	 F18	   This is a toggle action key which toggles the current
		   mode of the JOBQ. The current mode is displayed on line
		   25 as either 'F18 Execute ', if the JOBQ is in immediate
		   mode, or 'F18 Queue ' if tasks selected for execution
		   are to be executed as a batch. Refer to the JOBQ section
		   for more information.

	 F19	   Returns to the base QSYS menu, regardless of the current
		   position in the menu system.

	 F39	   Invokes the MENU EDITOR, if the current user has primary
		   user security. This option is not displayed on line 25.
		   Refer to the MENU EDITOR section for more information.

	 F48	   If tasks have been sent to the JOBQ, then pressing F48
		   will release the JOBQ for execution. Otherwise, an
		   informational message is momentarily displayed, and the
		   request is ignored. Refer to the JOBQ section for more
		   information.











								MENU - 3





				  MENU SYSTEM



    - QSYS COMMAND LINE

	 The QSYS command line is similar to the DOS command line. It
    provides a means of executing tasks that are not defined in the menu
    system. Any DOS command that can be executed from the DOS command line
    can be entered on the QSYS command line. In addition, batch commands
    and labels may be entered on the QSYS command line for use in the JOBQ.
    Refer to the JOBQ section for information concerning the use of DOS
    batch file commands and labels in the JOBQ.
	 Since any task or menu can be directly accessed from the command
    line, it is necessary that the QSYS security system assume that all
    tasks and menus accessed in this manner have a security level of 0.
    This restricts the use of the QSYS command line to only primary users.
	 The format of commands entered on the QSYS command line is the
    same as that of the DOS command line with a couple of exceptions. The
    following example will illustrate these differences.


    - Executing '.COM ', '.EXE ', or '.BAT ' Files

    EXAMPLE:

	 Suppose that you wanted to execute a program named 'PROG1.EXE '
    from drive A, in a sub-directory named 'SUBDIR1 '.

	 On the DOS command line you would insert the proper diskette, if
    necessary, and enter the following commands.

	 CD A:\SUBDIR1		     ' Change to the proper directory
	 PROG1			     ' Execute the program


	 On the QSYS command line you would enter the following command.

	 A:\SUBDIR1\PROG1.EXE

	 QSYS will notify you if either the sub-directory or the requested
    program is not found, and allow you to change media as necessary. QSYS
    will then change to the indicated sub-directory, and load the requested
    program. The significant difference is, that all requests for executing
    programs, batch files, and external DOS commands, that are not resident
    in the root directory of the default drive, are entered in the format
    illustrated below.

	       d:\directory\filename.ext parameters
	       |      | 	  |	      |
	       |      | 	  |	      Parameters to be passed
	       |      | 	  Filename and extension
	       |      Directory path
	       Drive






								MENU - 4





				  MENU SYSTEM



	 NOTES:

	 1) QSYS will always assume the default drive, if one is not
	    specified, except when loading 'COMMAND.COM ', 'BASIC.COM ',
	    or 'BASICA.COM ', which are assumed to be on the drive from
	    which QSYS was booted, regardless of which drive is the
	    default.
	 2) QSYS will assume the root directory, if one is not specified,
	    regardless of which directory was last used. The directory path
	    may include multiple sub-directory names, but must always be
	    specified starting at the root directory.
	 3) QSYS will assume an extension of '.BAT ', if one is not
	    specified. Therefore, it is good practice to always specify a
	    filename extension.
	 4) Note 3 does not apply to external DOS commands. QSYS knows, and
	    will automatically add the proper extension, if necessary, to
	    all utilities supplied with DOS.


    - Executing BASIC Programs

	 The format of commands necessary to load BASIC programs remains
    identical to that of the DOS command line, since the above conventions
    are also used by DOS. It is important to note however, that QSYS will
    assume that BASIC or BASICA, whichever is specified in the command,
    will always reside in the root directory of the drive from which DOS
    was booted. The following example illustrates the format used for
    executing BASIC programs.

    EXAMPLE:

	 Suppose that you wanted to execute the BASIC program 'PROG2.BAS '
    from drive B, in a sub-directory named 'SUBDIR2 ', that required BASICA
    (advanced BASIC).

	 On either the QSYS or DOS command lines you would enter the
	 following command.

	 BASICA B:\SUBDIR2\PROG2

	 Again, QSYS will assume that 'BASICA.COM ' can be found in the
    root directory of the drive from which DOS was booted, and no drive
    or directory path should be specified.

	 NOTES:

	 1) QSYS will assume an extension of '.BAS ' for BASIC programs,
	 unless one is specified.
	 2) The '.COM ' extension for BASIC or BASICA need not be entered.







								MENU - 5





				  MENU SYSTEM




    - MENU EDITOR

	 The MENU EDITOR provides functions for adding and deleting tasks
    from the currently displayed menu, as well as for creating new menus
    and deleting existing menus from the menu system.
	 The MENU EDITOR is accessed by pressing F39 (Ctrl-F9) at any menu.
    Only primary users are allowed access to the MENU EDITOR. This is
    necessary to prevent unauthorized access to existing tasks or menus by
    creating a duplicate entry with a lower security level.
	 Upon entering the MENU EDITOR, the title line will display the
    current menu name, plus the word 'EDITOR ' to identify the function
    currently being performed. You will be prompted to enter the selection
    number of the menu item to be edited.


    - Task or Menu Descriptors

	 Before discussing the functions available in the editor, it is
    important that you understand what kind of information is associated
    with a menu entry. The following paragraphs describe each of the four
    fields that make up a task or menu descriptor.

	 MENU NAME:

	      This is the name of the task or menu as it is to appear on
	 the menu. It may be up to 30 characters long, and any displayable
	 characters may be used, including graphics characters. For tasks,
	 this name describes the task that is performed when this menu
	 entry is selected for execution. It has no meaning to QSYS. For
	 menus, this name is used by QSYS for the title line of the menu
	 when displayed.

	 FILESPEC:

	      This field describes to QSYS, the drive, directory path, and
	 filename of the task or menu file that this menu entry describes.
	 The format for this entry is the same as that of the QSYS command
	 line. A menu file entry is distinguished from a task entry by the
	 use of an extension of '.MNU ' on the filename. If this descriptor
	 describes another menu file, then a filespec indicating the use
	 of an emulated drive will result in an error. QSYS will not allow
	 it's menus to be located on emulated drives. Up to 127 characters
	 may be used to describe the filespec and associated parameters.
	 Refer to QSYS COMMAND LINE in this section for details about file
	 specifications.










								MENU - 6





				  MENU SYSTEM



	 VOLUME ID:

	      If the drive specified in the filespec entry indicates
	 removable media, such as a diskette drive, then QSYS will prompt
	 for the volume label of the media on which this file can be
	 located. This allows QSYS to prompt for the proper media by name
	 if the file is not found, thus relieving the users from having to
	 remember the location of files cataloged in the QSYS menu system.
	 Entering the global search character '* ', will tell QSYS not to
	 test for the Volume ID of the media associated with this file,
	 allowing the same file to be accessed from different media. This
	 should only be used if necessary, since it disables QSYS' ability
	 to prompt for the required media by name.
	      Up to 11 characters may be used in the Volume ID. Any volume
	 label that is valid in DOS may be used in this field. QSYS will
	 not allow this field to be left blank if the specified drive uses
	 removable media.

	 SECURITY LEVEL:

	      This is the security level required by the active user to
	 access this menu entry. This field allows restricted access to
	 tasks or even entire menus to those users with a security level
	 equal to or below the security level specified.
	      Refer to SECURITY SYSTEM in the PREFACE for a description of
	 the QSYS security system.


    - General Information

	 Once the MENU EDITOR has been entered using F39, QSYS will prompt
    for the number of the menu entry to be edited. Pressing F10 in this
    field will terminate the editor and return you to task selection mode
    and the command line. Selecting a menu entry, while in editor mode,
    begins editing of that entry, and the functions available are covered
    in detail in the following sub-sections.
	 Whenever a task or menu descriptor is either added to a menu, or
    or an existing descriptor is edited, QSYS will prompt for the fields
    that make up the task or menu descriptor. The up-arrow may be used to
    back up to a previously entered field, or out of the selected entry.
    Simply pressing the <ENTER> key will proceed to the next field without
    altering the contents of the current field. As in all QSYS data fields,
    what you see on the screen is what you've got in the field, but no data
    is actually changed in the menu file until the 'SECURITY LEVEL ' field
    has been entered. This allows changes to an entry to be nullified by
    backing out of the entry using the up-arrow.










								MENU - 7





				  MENU SYSTEM



    - Adding Descriptors

	 A task or menu descriptor is added to the currently displayed menu
    by selecting a blank menu entry and entering the descriptor fields as
    QSYS prompts for them. After the last field has been entered, QSYS will
    update the menu file to include the added descriptor, and prompt for
    the next menu entry to be edited.
	 Note that adding a descriptor for a new menu does not create the
    menu. After the descriptor has been added, proceed to 'Creating a New
    Menu ' for the steps necessary to create the menu file.


    - Editing Existing Descriptors

	 A task or menu descriptor can be edited (changed) by selecting
    it's menu entry number. QSYS will display the current contents of each
    field and allow changes. After the last field has been updated, the
    new descriptor will be written to the menu file.
	 Note that altering a descriptor will not change the location of
    a task or menu file. The actual location of the file must be changed
    using the DOS 'COPY ' and 'ERASE ' commands from the command line to
    copy the file to it's new location, and to delete the old file. If
    the descriptor is a menu descriptor, refer to 'Relocating a Menu '.


    - Deleting Descriptors

	 A task or menu descriptor is deleted by selecting it's menu entry
    number and blanking the 'MENU NAME ' field by pressing the '+ ' key on
    the numeric keypad or by holding down the Ctrl key and pressing the End
    key while the cursor is positioned at the beginning of the field. QSYS
    will then ask for confirmation before deleting the entry. Entering a
    'Y ' will delete the descriptor. Any other key will cause QSYS to re-
    display the original contents of the field and abort the delete. Note
    that filling the field with spaces does NOT blank the field.
	 Note also, that deleting a descriptor does not delete the task or
    menu file. Refer to 'Deleting a Menu ' if deletion of a menu file is
    desired. Tasks must be erased using the DOS 'ERASE ' command from the
    command line.


    - Changing the Current Menu

	 Since the editor assumes that selection of a menu entry is for the
    purpose of editing the descriptor, a mechanism is provided for changing
    the current menu without exiting the editor. This is accomplished by
    first selecting the desired menu file's descriptor from the current
    menu, inserting the media containing the menu file, if necessary, and
    pressing the F9 Menu key. In the event that the requested menu file is
    not found, the editor will ask if you want to create this menu. Type
    'N ' to abort the create procedure and retry the operation using the
    correct media.




								MENU - 8





				  MENU SYSTEM



    - Creating a New Menu

	 Creating a new menu requires that the descriptor has already been
    added to the current menu using the procedure outlined under 'Adding
    Descriptors '. After this procedure has been performed, select the
    descriptor for editing, insert the media to contain the new menu file,
    if necessary, and press the F9 Menu key. QSYS will check the directory
    of the target drive for any files whose names match the requested menu
    name. If a file is found, the create procedure is aborted, and QSYS
    will attempt make this file the current menu file. If no matching files
    are found, then QSYS will momentarily display a message indicating this
    fact and ask you to confirm that the new menu file should be created.
    Responding to the prompt with a 'Y ' will create the new menu file, and
    the newly created file will become the current menu. Any other response
    will cancel the create procedure and editing of the current menu will
    resume.


    - Deleting a Menu

	 The current menu may be deleted by pressing the F6 Delete key only
    after all descriptors have been deleted using the procedure discussed
    under 'Deleting Descriptors '. QSYS will ask for confirmation before
    deleting the requested menu. Any response except 'Y ' will abort the
    delete procedure. After deletion of a menu, the parent menu will become
    the current menu.
	 The base menu cannot be deleted under any circumstances from
    within QSYS. Refer to APPENDIX C for information concerning changing
    the base menu.


    - Relocating a Menu

	 QSYS Version 3.0X does not directly support the relocation of task
    or menu files. Extreme caution should be exercised in the relocation of
    menu files. Parent menus cannot be safely relocated, since pressing F9
    at any of the children will result in QSYS attempting to back up to a
    non-existent member of that generation of menus. Entire branches in the
    menu system's tree-structure could be rendered unreliable.
	 It is possible to relocate a parent menu file by recreating it,
    and all of it's children. It should only be necessary to recreate one
    generation of menus in order to preserve the integrity of the menu
    system.













								MENU - 9






```
{% endraw %}

## Q_MSG.DOC

{% raw %}
```
				   MESSAGES



    - Description

	 The QSYS message system provides personal calendar functions for
    each QSYS user, as well as facilities for message exchange between
    users. All messages are confidential between the message sender and
    the intended recipient of the message. No other user, including the
    primary users, are allowed access to messages not intended for them.
    Up to five 'targets ' may be specified per message. A 'target ' is a
    group of fields specifying the recipient of the message, the date and
    time that the message is due, and a frequency, used to automatically
    update the target date and time, once the message has been displayed.
    The five target specifications may, for example, be used to send the
    same message to five different users simultaneously, or to the same
    user at five different dates and times, if desired. Each message may
    contain up to three lines of text. Information indicating the sender
    of the message, and the date and time that the message was sent or
    last updated is maintained by the system. QMSG.EXE provides routines
    for entering and editing messages, displaying and previewing messages,
    reorganizing the message file, and updating the MSGQ. Refer to the
    MSGQ section for information pertaining to the contents of the MSGQ.
	 QSYS also incorporates an interrupt driven message alarm system,
    to allow monitoring of the MSGQ concurrently with all other system
    tasks. QSYS will sound a subtle, but distinctive tone once per minute
    while messages are due. The alarm system is designed not to interrupt
    the use of the speaker by other applications. QINT.EXE provides the
    necessary routines for initialization of the MSGQ, and for all MSGQ
    monitoring and alarm functions.


    - QMSG.EXE Loading Options

	 QMSG incorporates it's own function menu, allowing access to all
    message system functions from within the program. It is also possible
    to access each function directly by passing the menu option number to
    QMSG using a command line parameter. For example, 'DISPLAY MESSAGES '
    is option 1 on the Message Menu. The message display function can be
    directly accessed, bypassing the Message Menu, by appending a '1 ' to
    the command line used to load QMSG.EXE. This is illustrated in the
    default base QSYS menu created by the installation procedure. Refer to
    QSYS COMMAND LINE and MENU EDITOR in the MENU SYSTEM section for more
    information on QSYS command and filespec format.


    - Common Editing Features

	 All cursor control and editing keys, described in QSYS EDITOR in
    the GENERAL INFORMATION section, are active while entering or editing
    a message. In particular, the <End> key can be used in any data field
    to terminate the editing function and update the message file. All data
    is checked for validity as it is entered. If invalid data is entered,
    an error message will be momentarily displayed on line 25, and QMSG
    will force re-entry of the field.




								MSG - 1





				   MESSAGES



    - Message Data Fields

	 Before discussing the functions available in the message system,
    it is necessary to understand the fields that make-up a message record.
    Following, is an explanation of the contents of each of these fields.


	 RECIPIENT

	      The name of the QSYS user for which this message is intended.

	 DATE

	      The date on which the recipient, named in the associated
	 target entry, is to be notified of the message. May be entered
	 in any valid DOS format, but must be equal to, or greater than,
	 the current system date.

	 TIME

	      The time of day, in 24 hour format, at which the recipient,
	 named in the associated target entry, is to be notified of the
	 message. May be entered in any valid DOS format. However, this
	 field, and the associated date, must not be prior to the current
	 system date and time.

	 FREQUENCY

	      The frequency at which the recipient, named in the associated
	 target entry, is to be notified of the message. The frequency is
	 entered as a number, up to three digits, followed by a time period
	 specifier. The following table shows the valid time periods.

				  MN - Minutes
				  HR - Hours
				  DY - Days
				  WK - Weeks
				  MO - Months
				  YR - Years

	 For example, '3DY ' would increment the target date which caused
	 the message to be due, by three days when the associated message
	 was displayed by the recipient using the DISPLAY function. An
	 entry of '10WK ' would automatically make the message come due
	 in another 10 weeks after being displayed. Time periods may not
	 be combined. A blank frequency field will cause the associated
	 target entry to be deleted when the message is displayed.

	 MESSAGE

	      The actual text of the message. Up to three lines of text
	 can be entered. The keyboard will automatically be shifted into
	 lower case for this field.



								MSG - 2





				   MESSAGES



    - MESSAGES MENU

	 The Messages Menu currently contains the following 5 options.

	      1) DISPLAY MESSAGES
		   Allows the active user to display only those messages
	      which are currently due.

	      2) PREVIEW MESSAGES
		   Allows the active user to display messages that are
	      pending for the current system date.

	      3) ENTER NEW MESSAGES
		   Allows the active user to enter new messages into the
	      message file.

	      4) SEARCH-EDIT MESSAGES
		   Allows the active user to search, delete or update
	      messages which he has sent or in which he is named as a
	      recipient.

	      9) FILE REORGANIZATION
		   Reorganizes the message file and updates the MSGQ.

	 QMSG.EXE may be terminated from the Messages Menu by pressing F10.
    Ctrl-Break will terminate QMSG, sign-off the current user, and return
    to the Clock/Calendar.


    - HELP Facility

	 The F7 key can be used from any command line or data field in
    the message system to display a help screen. This screen provides the
    current time, in the 24 hour format required for messages, calendar
    browsing functions, identical to those of the Clock/Calendar, to aid
    in entering message target dates, and a list of the current QSYS user
    names. Refer to the CLOCK/CALENDAR section for detailed information
    concerning the use of calendar browsing functions.
	 F10 terminates the help screen, and returns you to the beginning
    of the field in which help was requested.
















								MSG - 3





				   MESSAGES



    - DISPLAY MESSAGES

	 Displays only those messages which are currently due for the
    active user. Pending messages in the MSGQ are not accessible through
    this function. If no messages are due for the current user, an infor-
    mational system message is posted to the active screen.


    - Available Functions

	 <ENTER> or Ctrl-<ENTER>

	      Updates the target entry which caused the message to be due,
	 according to the instructions contained in the 'FREQUENCY ' field.
	 If no update frequency is specified, the associated target entry
	 will be deleted. The next message in the MSGQ, due for the active
	 user, will then be displayed. If no more messages are available,
	 an informational message is displayed to notify the user, and the
	 DISPLAY function is terminated.

	 F5 - EDIT

	      Allows editing of only the target entry which caused the
	 message to be due. After the update frequency field has been
	 updated, or the <End> key is pressed, the EDIT function will
	 terminate, the message file will be updated, and processing
	 continues as described in the <ENTER> function.

	 F7 - HELP

	      Pressing F7, either on the command line or in a data field,
	 will invoke the HELP facility.

	 F9 - MENU

	      Terminates the DISPLAY function and returns to the Messages
	 Menu. This option differs from F10 only when the original access
	 to QMSG was not through the Messages Menu, in which case, F9 will
	 force a return to the menu so that another selection can be made.

	 F10 - END

	      Terminates the DISPLAY function. If QMSG was originally
	 accessed through the Messages Menu, then the menu will be re-
	 displayed, otherwise, QMSG is terminated.











								MSG - 4





				   MESSAGES



    - PREVIEW MESSAGES

	 Displays only those messages which are pending or due in the MSGQ
    for the active user. If no messages are in the MSGQ for the current
    user, an informational system message is posted to the active screen.


    - Available Functions

	 <ENTER>

	      Proceeds to the next message pending in the MSGQ for the
	 active user, if one is available. No action is taken on the
	 currently displayed message.

	 Ctrl-<ENTER>

	      Functions as described under 'DISPLAY '. Temporarily switches
	 to DISPLAY mode for this message.

	 F5 - EDIT

	      Functions as described under ' DISPLAY '.

	 F7 - HELP

	      Functions as described under ' DISPLAY '.

	 F9 - MENU

	      Functions similarly to F10 except that return to the Messages
	 Menu is mandatory.

	 F10 - END

	      Terminates the PREVIEW function. If QMSG was originally
	 accessed through the Messages Menu, then the menu will be re-
	 displayed, otherwise, QMSG is terminated.


















								MSG - 5





				   MESSAGES



    - ENTER NEW MESSAGES

	 Allows entering of new messages into the message file. If messages
    are entered for the current system date, the MSGQ is also updated.
    Refer to 'Common Editing Features ' and 'Message Data Fields ' in this
    section for more information.
	 The command level functions described below are available in every
    data field.


    - Available Functions

	 F7 - HELP

	      Functions as described under ' DISPLAY '.

	 F9 - MENU

	      Functions similarly to F10 except that return to the Messages
	 Menu is mandatory.

	 F10 - END

	      Pressing F10 will abort the record currently being entered.
	 Information already entered in the current record will be lost.
	 If the original access to QMSG was through the Messages Menu, then
	 the menu will be re-displayed, otherwise, QMSG will be terminated.





























								MSG - 6





				   MESSAGES



    - SEARCH/EDIT

	 Allows direct access to existing records in the message file by
    record number, or sequential access to the file through the use of
    browsing functions similar to those used in the Clock/Calendar. Users
    are only allowed access to those records which they entered into the
    message file, and those records in which they are named as a recipient.
    Once the desired record is displayed, it may be edited, or the record
    may be deleted. The MSGQ is automatically updated to reflect any
    pertinent changes.


    - Available Functions

	 F1 - RECORD ADVANCE

	      Advances to the next sequential record in the file to which
	 the active user is allowed access, unless already at the last
	 record.

	 F2 - RECORD BACKSPACE

	      Record backspaces to a previous record in the file to which
	 the active user is allowed access, unless already at the first
	 record.

	 F3 - SCAN FORWARD

	      Continuously record advances until another function key is
	 pressed, or until the end of file. Records to which the active
	 user is denied access are not displayed.

	 F4 - SCAN BACKWARD

	      Continuously record backspaces until another function key
	 is pressed, or until the beginning of file. Records to which the
	 active user is denied access are not displayed.

	 F5 - EDIT

	      Allows full screen editing of the message record currently
	 displayed. The updated record is written to the file after the
	 text of the message is entered or the <End> key is pressed. The
	 message time/date stamp and name of the sender are updated.

	 F6 - DELETE

	      Allows deletion of the currently displayed record from the
	 message file. The message text is blanked and the record will be
	 removed from the file during the next file reorganization.






								MSG - 7





				   MESSAGES



    - SEARCH/EDIT (continued)


	 F7 - HELP

	      Functions as described under ' DISPLAY '.

	 F9 - MENU

	      Functions similarly to F10 except that return to the Messages
	 Menu is mandatory.

	 F10 - END

	      Pressing F10 will abort the record being edited. Changes will
	 not be written to the file. If the SEARCH/EDIT function was orig-
	 inally accessed through the Messages Menu, then the menu will be
	 re-displayed. Otherwise, QMSG will be terminated.



    - SET DATE & TIME

	 This screen only appears during the system startup procedure, and
    then, only if the system date and time have not already been set by a
    clock feature. All line editing functions are activated including the
    up and down arrows. F7 HELP is active to assist in setting of the date.
    F10 END is disabled.


    - FILE REORGANIZATION

	 This procedure is executed automatically during system startup or
    at the first sign-off following a change in the system date. You may,
    on occasion, catch this procedure running at midnight when the system
    date rolls over to a new day. Reorganization of the message file is
    totally automatic and will require no operator intervention unless a
    system error occurs. DO NOT INTERRUPT IT !!!
	 Reorganization of the message file requires free space, equal to
    the size of the message file, to be available on any installed drive.
    QMSG will evaluate the available space on each installed drive that is
    in a ready state, and select the fastest possible device.
	 This procedure sorts the target entries within each record by date
    and time, deleting those target entries containing a recipient name not
    currently in the QSYS user list. Records with no active targets are
    deleted from the message file. Pointers to those records with a target
    date equal to, or before, the current system date are placed in the
    MSGQ. If the target date is prior to the system date, then the time is
    entered into the MSGQ as '00:00 '. This has the effect of making the
    message due immediately. At termination, if this procedure was invoked
    from the Messages Menu, then the menu will be re-displayed. Otherwise,
    QMSG will be terminated.




								MSG - 8






```
{% endraw %}

## Q_MSGQ.DOC

{% raw %}
```
				     MSGQ



	 The MSGQ is a data area in storage initialized by QINT and main-
    tained by QMSG. This data area contains information about messages
    that will come due during the current system date. A summary of the
    contents of the MSGQ can be viewed from either the CLOCK/CALENDAR
    or from any menu in the QSYS menu system by pressing F7. You do not
    have to be signed-on to view the MSGQ summary. This screen is meant
    to be a quick reference window into the MSGQ. Message text cannot be
    displayed from this screen.
	 The MSGQ is listed in chronological order, with those messages
    that are currently due, displayed in the highlighted attribute, while
    those messages still pending are displayed in the normal foreground
    attribute. The summary lists the message recipient, the time, in 24
    hour format, that the message is due, and the record number of the
    message in the MSGS.DAT file. The message text cannot be displayed
    from this screen. An active clock is also displayed on line 23 to aid
    in the evaluation of the displayed information. This clock is always
    displayed in 24 hour format, regardless of QSYS system clock config-
    uration, in order to remain consistent with the message time format.
	 In the event that no messages are pending for the current date,
    pressing F7 will trigger an informational message indicating that the
    MSGQ is empty.


    - Available Functions

	 PgUp or PgDn

	      If more messages are pending than can be displayed on one
	 screen, the PgUp and PgDn keys will be activated allowing you to
	 move forward and backward from one page to another as necessary.

	 F10 will return you to the screen from which you gained access to
    the MSGQ screen.























								MSGQ - 1






```
{% endraw %}

## Q_PREF.DOC

{% raw %}
```
				    PREFACE



	 QSYS is a set of programs designed to help you integrate your
    existing program library into a menu driven system supporting multiple
    users who need not have a working knowledge of DOS.
	 QSYS was originally designed for my own use. I needed a means of
    allowing every member of my family the use of a personal computer,
    while providing some protection against accidental file modifications
    or erasures. QSYS incorporates a security system that probably won't
    be effective against an experienced programmer, but will certainly
    provide some protection from the usually more dangerous inexperienced
    user. If you have children, you'll soon learn it's value.
	 The other members of my family want to use the computer, but they
    don't especially care to read the documentation. They don't know which
    diskettes the programs are on, and even if they did, they don't have
    the knowledge of DOS necessary to load them. I'm afraid that if they
    had to learn DOS to use the computer, they wouldn't use the computer!
    QSYS makes it possible for them to select the program they want to run
    from a menu. If the program isn't on a diskette already mounted, QSYS
    will prompt for it by name. When they finish, they simply terminate the
    program and DOS will reload QSYS. If they forget to sign-off, QSYS will
    do it for them.
	 QSYS also incorporates a concurrent message handling system. This
    was written mostly for my benefit. I have a terrible memory, and the
    message system allows me to keep appointments and pay my bills on time.
    It will notify me even if I have the computer tied up doing something
    else, as I often do.


    SYSTEM REQUIREMENTS

	 - IBM PC or PC-XT
	      QSYS will probably also work on some IBM compatibles, but no
	   guarantee is made.

	 - DOS 2.X
	      QSYS will not work with the previous versions of DOS.

	 - 192K of Memory

	 - IBM Compatible Color/Graphics Monitor Adapter
	      QSYS operates in 80 column mode. You don't need a color
	   monitor, but will not work with the Monochrome Display Adapter.

	 - Two Double-sided, Double-density Diskette Drives
				 or
	 - A Winchester Disk and One Double-sided Diskette Drive
	      QSYS supports drives A-Q, but requires at least the minimum
	   configuration.









								PREF - 1





				    PREFACE



    HOW TO GET QSYS

	 QSYS is made available through Voluntary Support. This means that
    I will volunteer to send it to you FREE for evaluation. If you use it,
    you should volunteer to send me the suggested $50 contribution.
	 What this all comes right down to, is that nobody knows the value
    of a particular program until they've had time to use it. Most software
    is just too complex to evaluate in a store. Voluntary support gives you
    the opportunity to evaluate programs on your own system, in conjunction
    with software that you already use, and for as long as it takes to make
    a good decision. If you use QSYS, then the $50 contribution is cheap!!!
    However, if you don't use it, or can't use it, then don't pay for it!

	 1) Volunteer to send me the $50 contribution and I'll voluntarily
	    send you (2) diskettes of my very own full of QSYS. Also, I'll
	    respond to requests for assistance in the installation and use
	    of QSYS, and offer future releases for a minimal update fee.

	 2) Volunteer to send me $10 to cover the cost of the necessary
	    diskettes, mailer, and postage, and I'll volunteer to send you
	    QSYS to evaluate. If you use it, you can volunteer to send the
	    additional $40 at your convenience. If you don't like QSYS, at
	    least you got some diskettes. No support will be made available
	    without the suggested contribution.

	 3) Volunteer to send me (2) diskettes with pre-addressed, postage-
	    paid diskette mailer(s) of your very own, and I'll volunteer to
	    return them to you full of QSYS to evaluate absolutely FREE! As
	    with method #2, I won't volunteer my time to support QSYS for
	    anyone who hasn't volunteered the suggested contribution. Keep
	    in mind that I'll * GIVE * you a copy to evaluate, but I won't
	    * PAY * to send it to you. If you select this method to obtain
	    QSYS, please be sure to include TWO (2) diskettes, complete
	    with mailer(s) and sufficient return postage.

				   DENNIS LEE
			      906 GREENBRIAR LOOP
			      ROUND ROCK, TX 78664
			     CompuServe # 70376,452


    LIMITED LICENSE

	 Feel free to distribute unaltered copies of the QSYS installation
    and documentation diskettes to friends, enemies, or people you don't
    even know, for the purpose of evaluation, as long as you do it FREE!
    Anyone incurring an expense in the distribution of QSYS, is granted
    permission to recover only the actual expense involved, and then only
    when notice is provided that a contribution to the author is requested.
    QSYS may not be sold by itself, or in conjunction with another product,
    without written permission of the author.


    GUARANTEE - NONE


								PREF - 2





				    PREFACE



    LIST OF QSYS FILES

	 The QSYS system consists of the following files:

	   *  QSYS.EXE	   - main program module
	   *  QCNFG.EXE    - configuration utility
	   *  QINT.EXE	   - concurrent message interrupt handler
	   *  QMSG.EXE	   - message program module
	   *  QLDR.COM	   - batch file loader utility
	   *  MEMBRAIN.EXE - configures and creates MEMBRAIN.SYS
	      MEMBRAIN.SYS - emulated drive device driver
	      JOBQ.BAT	   - dynamic JOBQ batch file
	      QSYS.SYS	   - configuration information file
	      SYSTEM.MNU   - base menu file
	      MSGS.DAT	   - message file
	      AUTOEXEC.BAT - system startup procedure batch file
	      CONFIG.SYS   - DOS system configuration parameter file


	 The QSYS INSTALLATION AID consists of the following files:

	   *  QINST.EXE    - installation configuration program
	   *  AUTOEXEC.BAT - installation startup procedure batch file
	   *  CONFIG.SYS   - default system configuration parameter file
	   *  MEMBRAIN.SYS - default emulated drive device driver


	 The QSYS Documentation consists of the following files:

	   *  MAKEDOC.TXT  - how to print the documentation
	   *  MAKEDOC.BAT  - combines or prints the documentation files
	   *  Q_TITLE.DOC  - title page
	   *  Q_CONT.DOC   - table of contents
	   *  Q_PREF.DOC   - preface
	   *  Q_GEN.DOC    - general information
	   *  Q_INST.DOC   - installation instructions
	   *  Q_START.DOC  - startup procedure
	   *  Q_CLOCK.DOC  - clock/calendar
	   *  Q_MENU.DOC   - menu system
	   *  Q_JOBQ.DOC   - JOBQ
	   *  Q_MSGQ.DOC   - MSGQ
	   *  Q_MSG.DOC    - message system
	   *  Q_CNFG.DOC   - QSYS configuration
	   *  Q_ERR.DOC    - system messages
	   *  Q_APPA.DOC   - APPENDIX A
	   *  Q_APPB.DOC   - APPENDIX B
	   *  Q_APPC.DOC   - APPENDIX C
	   *  Q_GLOS.DOC   - glossary


	 Files marked with an asterisk (*) are included with the system,
    and are necessary for installation. All other files will be created as
    required.



								PREF - 3






```
{% endraw %}

## Q_START.DOC

{% raw %}
```
				SYSTEM STARTUP



	 Provided that QSYS is installed on the drive from which DOS boots
    at power-up, the following sequence of events will occur.

	 o DOS loads
	      + Initializes file buffers as defined in 'CONFIG.SYS '
	      + Loads and initializes 'ANSI.SYS '
	      + Loads and initializes 'MEMBRAIN.SYS '
	      + Loads and initializes user device drivers if installed
	      + Begins execution of 'AUTOEXEC.BAT '

	 o 'AUTOEXEC.BAT ' executes
	      + Sets Video mode
	      + Tests for IPL Resources
		   - Posts error if resources are unavailable
			- If resources are missing from removable
			  media then prompts for proper diskette,
			  waits for operator intervention, and
			  restarts 'AUTOEXEC.BAT '
			- If resources are missing from fixed media,
			  or if the file is missing from the IPL drive,
			  then terminates 'AUTOEXEC.BAT '
	      + Sets the system environment
		   - Defines QSYS file locations and volume labels
		   - Sets cursor to backspace character
	      + Executes QINT.EXE
		   - Initializes MSGQ and QSYS data areas
		   - Initializes QSYS interrupts
	      + Executes user defined startup programs
	      + Copies QSYS files to emulated drives if necessary
		   - Makes sub-directories as necessary
	      + Executes Message Reorganization Procedure
		   - Allows setting of system date and time if necessary
		   - Reorganizes Message File
		   - Puts today's messages in MSGQ
	      + Executes JOBQ.BAT

	 o JOBQ executes
	      o Loads QSYS.EXE
		   - Clock/Calendar appears awaiting sign-on

















								STRT - 1






```
{% endraw %}

## Q_TITLE.DOC

{% raw %}
```










		 QQQQQQQQQQQ	  SSSSSSSSSS	YYY    YYY     SSSSSSSSSS
		QQQ	QQQ	 SSS	SSS	YYY   YYY     SSS    SSS
	       QQQ     QQQ	SSS		YYY  YYY     SSS
	      QQQ     QQQ      SSS		YYY YYY     SSS
	     QQQ     QQQ      SSSSSSSSSS	YYYYYY	   SSSSSSSSSS
	    QQQ  Q  QQQ 	    SSS 	YYYYY		 SSS
	   QQQ	  QQQQ		   SSS		YYYY		SSS
	  QQQ	  QQQ		  SSS		YYY	       SSS
	 QQQ	 QQQQ	  SSS	 SSS	       YYY    SSS     SSS
	QQQQQQQQQQQ  Q	 SSSSSSSSSS	   YYYYYY    SSSSSSSSSSS

			       Version 3.00

		       (C) Copyright 1984 Dennis Lee











































```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0278

     Volume in drive A has no label
     Directory of A:\

    MAKEDOC  BAT       254
    MAKEDOC  TXT      3274
    Q_TITLE  DOC       634
    Q_CONT   DOC      7072
    Q_PREF   DOC      7313
    Q_GEN    DOC      9260
    Q_INST   DOC     24895
    Q_START  DOC      1651
    Q_CLOCK  DOC      2217
    Q_MENU   DOC     22028
    Q_JOBQ   DOC      7682
    Q_MSGQ   DOC      1869
    Q_MSG    DOC     14850
    Q_CNFG   DOC     13641
    Q_ERR    DOC     23699
    Q_APPA   DOC      6727
    Q_APPB   DOC      7318
    Q_APPC   DOC      2608
    Q_GLOS   DOC      1224
    READ     ME!      4291   2-05-85  10:37p
           20 file(s)     162507 bytes
                          147456 bytes free
