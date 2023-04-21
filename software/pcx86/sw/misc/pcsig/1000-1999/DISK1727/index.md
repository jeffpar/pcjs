---
layout: page
title: "PC-SIG Diskette Library (Disk #1727)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1727/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1727"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREE PACK"

    FREE PACK is a collection of six utilities which make any DOS user's
    life easier. Full screens, prompts and pop-up help screens make these
    utilities valuable additions to your utility library.
    
    ~ COMPARE -- Compares two files and shows exactly what the differences
    are.
    
    ~ COPYF -- Saves processing time by copying only files which have been
    changed or are not on the target disk. If files won't fit on disk, it
    prompts you for another disk.
    
    ~ FP -- Optional menu to run FREE PACK utilities. Displays descriptions
    of each utility. Great when using FREE PACK for the first time!
    
    ~ MENU -- Handy, easy-to-use hard disk menu program. Password
    protection.
    
    ~ SHELL -- Beats the DOS DIR command by a mile! Displays file listings.
    Options to tag files for delete, copy, move, print, rename, view or
    execution.
    
    ~ VIEW -- Displays ASCII text files to your screen. Options to scroll
    through text by line or by page.
    
    ~ WHERE-IS -- Searches all directories to find requested files. Can
    redirect to printer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1727.TXT

{% raw %}
```
Disk No: 1727                                                           
Disk Title: Free Pack                                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: FreePack                                                 
Author Version: 1.0                                                     
Author Registration: $39.00                                             
Special Requirements: None.                                             
                                                                        
FREE PACK is a collection of six utilities which make any DOS user's    
life easier.  Full screens, prompts and pop-up help screens make these  
utilities valuable additions to your utility library.                   
                                                                        
Utilities included are:                                                 
                                                                        
COMPARE:  Compares two files and shows exactly what the differences are.
                                                                        
COPYF: Saves processing time by copying only files which have been      
changed or are not on the target disk. If files won't fit on disk       
prompts you for another disk.                                           
                                                                        
FP:  Optional menu to run FREE PACK utilities.  Displays descriptions of
each utility.  Great when using FREE PACK for the first time!           
                                                                        
MENU:  Handy, easy to use hard disk menu program. Password protection.  
                                                                        
SHELL:  Beats the DOS DIR command by a mile!  Displays file listings.   
Options to tag files for delete, copy, move, print, rename, view or even
execution.                                                              
                                                                        
VIEW:  Displays ASCII text files to your screen.  Options to scroll     
through text by line or by page.                                        
                                                                        
WHERE-IS:  Searches all directories to find requested files. Can        
redirect to printer.                                                    
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
Thank You!  Please return both on disk and in hard copy form to:        
Shareware Magazine, att: Kisti Park, 1030D East Duane Ave.,             
Sunnyvale, CA 94086                                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FP.DOC

{% raw %}
```

		
		
		
		
		
		
		
		
		
		
		
		                   Free Pack
		
		
		
		
		
		
		
		
		
		     UTILITIES THAT INCLUDE:
		
		       ** Menu program
		       ** Shell - a hard disk manager program
		       ** Compare - compares two files
		       ** CopyFile - intelligent file copier
		       ** View - views ASCII text files
		       ** Where-Is - finds a file(s) on your disk
		
		                       
		               (C)Copyright 1989
		          Stilwell Software Products
		              All Rights Reserved
		
		
		
		
		REQUIREMENTS:  FreePack requires an IBM PC
		or compatible; 256K of RAM and can be used
		with either a color monitor or a monochrome
		monitor.  A hard disk is recommended.  DOS 2.0
		or later is required.  FreePack is not copied
		protected.  Any PC printer will work.  
		
		Features include: 
		     Menu Master - an easy to use menuing
		program that will allow you to set up menus for
		switching directories and starting your
		application programs.  You can just point to the
		name of the program you want to start (e.g.,
		Lotus 1-2-3), and press ENTER.  Menu Master
		will change directories and start the program for
		you.
		     SeeShell - a DOS shell that will do
		everything that the DOS command DIR will do -
		but will do it faster, and will give you a great
		deal more.  When you type SHELL you will get a
		sorted listing of the directory.  You will be told
		how much of the disk you are using, how much
		is available, how many files are in this current
		directory, and how much space they are using. 
		You can select one of eight procedures you can
		perform on any listing in the directory.  You can
		copy, delete, execute, move, print, rename, view
		or change directories.
		     Compare - Compares two files, byte by byte
		     CopyFile - An intelligent file copier. 
		Copies only the files that are either not on the
		target disk (or directory), or that have been
		changed since they were last copied.
		     View - Views an ASCII text file.
		     Where-Is - Searches each directory in your
		disk for a specific file.  You can also use wild
		card symbols like the "*" and the "?".  You can
		redirect output to either a file or your printer.
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		                   FreePack
		
		
		
		
		
		
		
		
		
		
		
		
		               (C)Copyright 1989
		          Stilwell Software Products
		              All Rights Reserved
		
		
		
		          Stilwell Software Products
		             1336 East Krista Way
		               Tempe, AZ  85284
		                (602) 820-4952
		
		
		
		
		                **** CONTENTS ****
		
		
		User Supported Software  . . . . . . . . .    1
		
		Introduction . . . . . . . . . . . . . . .    3
		
		FreePack Specifications  . . . . . . . . .    6
		
		Files on the Diskette: . . . . . . . . . .    6
		
		Getting Started  . . . . . . . . . . . . .    8
		
		Introduction to FreePack . . . . . . . . .   10
		
		Compare  . . . . . . . . . . . . . . . . .   11
		
		Copy File  . . . . . . . . . . . . . . . .   12
		
		FreePack . . . . . . . . . . . . . . . . .   14
		
		Menu Master  . . . . . . . . . . . . . . .   16
		
		See Shell  . . . . . . . . . . . . . . . .   20
		
		View . . . . . . . . . . . . . . . . . . .   26
		
		Where-Is . . . . . . . . . . . . . . . . .   28
		
		Disclaimer of Warranty . . . . . . . . . .   30
		
		Index  . . . . . . . . . . . . . . . . . .   31
		
		Other Products . . . . . . . . . . . . . .   32
		
		
		   
		    
		
		            USER SUPPORTED SOFTWARE
		
		
		     FreePack is a "user supported" program. 
		What is meant by that is, FreePack is available
		to anyone who wants to use it at a no cost (if
		you get the program from Stilwell Software
		Products we charge $10 to cover the cost of
		postage and handling). This method of
		distributing computer software allows you to try
		the program without having to pay for it in
		advance.  It also allows you to freely share the
		program with other users without the fear of
		prosecution by the owner of the program.  
		
		     If you find FreePack of use you are asked
		to send a contribution of $39 to its author:
		
		          Stilwell Software Products
		             1336 East Krista Way
		               Tempe, AZ  85284
		                (602) 820-4952
		
		     By sending a contribution you will become a
		register owner of FreePack.  You will received a
		printed copy of the manual and will be eligible
		for support from us.  You will also receive the
		current version of the program (the registered
		version of FreePack does not have the message
		at the end of the program requesting that you
		make a contribution).
		
		     By contributing you will also be supporting
		a means of software development that will give
		you quality software at a greatly reduced price.
		
		
					-1-
		
		     You may receive a copy of FreePack by one
		of three methods. First, you can send a $39
		contribution to Stilwell Software Products and
		we will mail you a diskette, which will contain
		the program, and the printed manual.  We accept
		checks, money orders, and VISA and Master Card
		(please include your account number, your name
		as it appears on the card, and the expiration
		date).
		
		     The second way is for you to send $10 to
		Stilwell Software Products.  We will send you a
		diskette with the program, and the document-
		ation on the diskette.  You will not receive the
		printed manual, nor will you be eligible for our
		support.  You may use the software and make a
		contribution later if you wish.  Once you mail
		the $39 contribution to Stilwell Software
		Products, we will send you the printed manual,
		the current version of the program, and you will
		be eligible for support.  The third way is to get
		a copy of the program from your local IBM-PC
		User's Group.  You can use the program and
		later make a contribution if you wish.  We will
		then send you all the items listed above.
		
		     You are always free to make copies of
		FreePack and to share them with others.  You
		are not permitted to sell FreePack nor can you
		include it with any product you are distributing. 
		You may not modify FreePack in any way.
		
		     Regardless of how you get the program, if
		you find FreePack useful, your contribution will
		be greatly appreciated.
		
		
		
		
		
		
					-2-
		
		
		                 INTRODUCTION
		
		
		     The programs in FreePack are designed to
		assist you in working with the many files on
		your disk.  Although FreePack's real advantage
		will be seen on a hard disk, you may use the
		program with floppy diskettes as well.  As the
		number of files on your hard disk increase, the
		job of managing those files becomes more
		difficult.  FreePack will make that job easier for
		you.
		
		     The programs that make up FreePack can
		be run in either stand-alone mode or from the
		FreePack menu.  You start FreePack by typing
		FP.  You will then see a menu with six options
		on it.  You can select any of the six programs
		to run and FreePack will start that program for
		you.  If you would rather, you can start the
		program directly, and not use the FreePack menu
		at all.
		
		     FreePack is made up of six different
		programs.  Those programs are:
		
		     Compare.  This option will compare two
		files character by character to see if the two
		files differ.  While the files are being compared,
		the two files will be displayed in the two
		windows on the screen.  When a difference is
		found, the two characters that are different will
		be highlighted.
		
		     CopyFile.  This program copies a file(s)
		from one disk or directory to another disk or
		directory.  If works much like the DOS copy
		command except that only files that need to be
		copied will be copied.  That is, if a current
		version of the file already exists on the target
		
					-3-
								
		disk, time will not be wasted by copying that
		file again.  This makes it very convenient to do
		backups of a given directory.  For example, if
		you are working in your spreadsheet directory,
		the following command will copy all the
		spreadsheets from your current directory that
		have changed to the A drive.
		
		               copyf *.wk1 a:
		
		     Menu Master.  The Menu Master program
		will allow you to create "menus" that will make
		it easier to start your various application
		programs.  You might create a menu to start all
		the programs that you usually use.  You then
		just highlight the program you want to start. 
		You do not have to worry about changing
		directories, or remembering the name that is
		used to start the application.
		
		     SeeShell.  This program is the one that I
		use the most.  I never use the DOS "dir"
		command anymore because SeeShell is faster and
		gives me so much more.  After typing SEESHELL
		you will see a sorted display on your screen of
		all the files in the current directory (you can
		also start SeeShell for another directory or drive
		- e.g., SHELL A: will give you a directory of
		your A drive).  At this point you can page up or
		page down to find the file you are looking for. 
		You can perform various action on any of the
		files listed.  You can; copy, delete, execute,
		move, print, rename, or view.  If the listing on
		the screen is actually a subdirectory, you can
		move to that directory.  You can also move up
		one level in the directory by pressing the Ctrl-
		PgUp key combination.  This is a very fast way
		of moving around on your hard disk.  Most shell
		programs have to read the entire hard disk to
		get all the file names.  That process wastes a
		great deal of time since you usually do not need
		to deal with every file on your disk.  SeeShell
		
					-4-
								
		offers the best of both worlds.  You can easily
		move around the hard disk and it is very fast.
		
		     View.  The view program will allow you to
		view any DOS ASCII text file.  This program
		also works very fast since it only needs to load
		one screen of information at a time (most text
		editors will load the entire file before it will
		allow you to move about in the file).  Most of
		the help screens in FreePack call View to load
		the help file.
		
		     Where-Is.  Have you ever been convinced
		that you created a file, but could not find in
		anywhere on your hard disk?  If you answered
		yes to this question then you need Where-Is. 
		This program will search all directories on your
		disk looking for a file.  You can use wild card
		characters (e.g., the "*" and the "?"), as well.  
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
					-5-
					
		
		            FREEPACK SPECIFICATIONS
		
		FreePack requires an IBM-PC, or compatible and
		the following;
		
		     (1)  256KB RAM, and DOS 2.0 or later.
		     (2)  Either monochrome or color monitor.
		     (3)  At least one double-sided disk drive
		          (you can use more diskette drives or a
		          hard disk).
		
		
		FILES ON THE DISKETTE:
		
		     FP.EXE -       This is the FreePack
		                    program.  This program will
		                    allow you to start all the
		                    other programs from a
		                    menu.  This program is not
		                    required since all the other
		                    programs will run by
		                    themselves, it just makes
		                    everything a bit easier. 
		
		     MENU.EXE -     This is the program that
		                    will start Menu Master.
		
		  MENU-EDT.EXE -    This is the program that
		                    will allow you to actually
		                    create or modify a menu for
		                    Menu Master.
		
		     MENU1.HLP -    This is the first help file
		                    for Menu Master.
		
		     MENU2.HLP -    This is the second help file
		                    for Menu Master.
		
		     VIEW.EXE  -    The View program.
		
					-6-
								
		  COMPARE.EXE  -    The Compare program.
		
		     COPYF.EXE -    The CopyFile program. 
		
		     SHELL.EXE -    The SeeShell program.
		
		     SHELL.HLP -    The help file for the
		                    SeeShell program.
		
		   WHERE-IS.EXE -   The Where-Is program.
		
		     INSTALL.EXE -  The installation program. 
		                    This file will not be copied
		                    to your hard disk during the
		                    installation process since
		                    you will not need to use it
		                    again.  Leave it on your
		                    diskette though, in case you
		                    have to reinstall FreePack,
		                    or install FreePack on
		                    another PC some day.
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
					-7-
					
		                GETTING STARTED
		
		     FreePack comes with an installation
		program.  After starting your computer, put the
		FreePack diskette in your A drive and type the
		following:
		
		               A:INSTALL
		
		     The installation program will start and
		display the opening menu.  Press the ENTER key
		to see the first screen.  This screen will ask you
		to enter the name of the floppy drive that has
		the FreePack program diskette in it (this will
		usually be your A drive).  Type in the letter of
		your floppy drive and press ENTER.
		
		     You will then be asked for the name of the
		hard drive you want to install FreePack on. 
		This will usually be your C drive, but it can be
		any valid drive on your system.  Type in the
		letter of your hard drive and press ENTER.
		
		     The next screen will ask you the directory
		in which you want to install the FreePack
		programs.  Most people will put these programs
		in a directory called UTIL (for utility).  You can
		put the programs in any directory that you like
		(you might want to put them in a directory
		called FreePack).  If the directory does not
		already exist, the installation program will create
		that directory for you.   Type the name of the
		directory to copy the FreePack programs to and
		press ENTER.
		
		     Next you are told to put the FreePack
		diskette in your floppy drive and press the
		ENTER key.  The installation program will now
		copy the files from the FreePack diskette to the
		desired directory on your hard disk.  
		
					-8-
								
		     After the programs are all copied to your
		hard disk, you will be asked if you would like
		for the installation program to modify your
		AUTOEXEC.BAT file.  The installation program
		will add your FreePack directory to your path
		command in your AUTOEXEC.BAT file if given
		permission.   This is very helpful since you will
		then be able to start any of the FreePack
		programs without having to reference the drive
		and directory they are in.  If you do not already
		have a AUTOEXEC.BAT file, the installation
		program will create one for you if you request
		this option.  If you have an AUTOEXEC.BAT file
		but not a path command, the installation program
		will add a path command to your
		AUTOEXEC.BAT file.  If you already have a path
		command, the installation program will append
		the FreePack directory to the end of the path
		command.
		
		     A message will be displayed to tell you
		when the installation process is completed.  If
		you selected to have the path command added to
		your AUTOEXEC.BAT file, you will need to
		reboot your machine before the path command
		will become effective.  
		
		
		     Most of the programs in FreePack need to
		have access to your COMMAND.COM file.  This
		file is loaded when your computer starts.  If you
		have a hard disk, your COMMAND.COM file will
		be in the root directory of your C drive.  If,
		however, you boot off of a floppy diskette and
		then remove that diskette and replace it with a
		diskette that does not have the COMMAND.COM
		on it, most of the FreePack programs will not
		run.  You will be given a error message when
		the program starts if it is unable to find the
		COMMAND.COM file.  To correct this situation,
		reboot your machine and leave the
		COMMAND.COM available to FreePack.
					-9-
					
		
		
		
		
		           INTRODUCTION TO FreePack
		
		     FreePack is a collection of separate utility
		programs to help you manage your computer's
		files.  You can run any of the programs by
		themselves, or you can use the actual FreePack
		program to assist you.
		
		     To start the FreePack program, type the
		letters FP.  The FreePack screen will be
		displayed.  There are six options on the left side
		of the screen (Compare, Copyf, Menu, SeeShell,
		View, and Where-Is).  You can select any of the
		six programs by moving the highlight bar either
		up or down with the corresponding arrow key. 
		On the right side of the screen is a brief
		description of the highlighted program.  
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     			-10-
		     			
		
		
		                 C O M P A R E
		
		
		USAGE:  This program will compare two files
		one character at a time.  While the files are
		being compared, the two files will be displayed
		in the two windows on the screen.  When a
		difference is found, the two characters that are
		different will be highlighted.  
		
		
		COMMAND FORMAT:  
		     COMPARE <filename 1> <filename 2>
		
		     Filename 1 and filename 2 are the names of
		the files to be compared.  If you omit either one
		of these, the COMPARE program will prompt you
		for their names.    
		
		DESCRIPTION:  Start Compare with the above
		command format.  After the two files are located
		on your disk, the Compare program will begin to
		examine them.  The program will stop any time a
		character from one file fails to match the
		character from the other file.
		
		     The program will highlight the difference
		when a difference between the two files is
		found.  At that point, you will be given three
		options.  You can (1) continue with the
		comparison with the next byte by pressing the
		ENTER key, (2) request that the process be
		suspended until the end of the current line by
		pressing the PgDn key, or (3) request that the
		process be terminated at this point by pressing
		the ESC key.
		
		
		
					-11-
					
		
		
		               C O P Y   F I L E
		
		
		USAGE:  This program copies a file (or group of 
		files) from one disk (or directory) to another.  
		
		COMMAND FORMAT:  
		     COPYF <file(s) to be copied> <target>
		     Enter the name of the file, or files to be
		copied.  You can include the two wild card
		characters (the *, and the ?) in the filename to
		be copied.  For example:
		
		               COPYF *.LTR A:
		will copy files with the extension of LTR to
		your A drive.
		
		     The target parameter can include the drive
		name and directory if you desire.
		
		DESCRIPTION:  This program will provide you
		with a convenient way of copying files. 
		CopyFile works very much like the DOS copy
		command except for the following: (1) You are
		provided with a display of the number of files to
		be copied and the amount of space needed, (2) if
		all the files will not fit on the target diskette,
		you will be prompted to insert another diskette
		into your floppy drive when the first one is full,
		(3) only files that have been changed, or are not
		on the target disk will be copied.  
		
		REMARKS:  CopyFile is a great way of making a
		quick backup of your working files from a
		specific directory.  For example, if you have just
		completed working with your spreadsheet and
		changed perhaps five of the 25 spreadsheet files
		you have in that directory.  If your spreadsheet
		uses the extension "WK1" for its spreadsheet
				
					-12-			
		files, you could use the following command to
		copy only those five files that you have changed
		to your A drive.
		
		          COPYF *.WK1 A:
		
		     The above command will copy only the five
		files that have changed rather than taking the
		time to copy all twenty-five files to your A
		drive backup diskette.
		
		     As with most of the programs in FreePack,
		CopyFile needs to have access to your
		COMMAND.COM file.  This file is loaded when
		your computer starts.  If you have a hard disk,
		your COMMAND.COM file will be in the root
		directory of your C drive, and CopyFile will
		have access to it.  If, however, you boot off of
		a floppy diskette and then remove that diskette
		and replace it with a diskette that does not have
		the COMMAND.COM on it, CopyFile will not run. 
		You will be given a error message when the
		program starts if it is unable to find the
		COMMAND.COM file.  To correct this situation,
		reboot your machine and leave the
		COMMAND.COM available to CopyFile.
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
					-13-			
		
		
		                F R E E P A C K
		
		
		USAGE:  The FreePack program ties together all
		of the other programs in this package.  All of
		the other programs can be run as stand-alones,
		or they can be run from the FreePack menu. 
		
		COMMAND FORMAT:  FP
		
		DESCRIPTION:  You start FreePack by typing
		FP.  You will then see a menu with six options
		on it.  You can select any of the six programs
		to run and FreePack will start that program for
		you.  If you would rather, you can start the
		program directly, and not use the FreePack menu
		at all.  On the right side of the FreePack screen
		is a brief description of the option that you
		have highlighted.  You can highlight a different
		option by moving the highlight bar either up or
		down with the arrow keys.
		
		     On the bottom of the screen is the
		"command line".  This command line will have
		the command that will start the program.  You
		can add to the command line any parameter that
		is needed to start the program.  For example, if
		the View program was highlighted, the word
		VIEW would appear in the command line.  You
		could then type the name of the file you wanted
		to view, and press ENTER.  FreePack will load
		the View program and pass to it the file you
		wanted to view.  When you have completed your
		work with the View program, you will be
		returned to FreePack.  You can then select
		another option, or press the ESC key to quit
		FreePack.
		
		
					-14-			
		REMARKS:  FreePack needs to have access to
		your COMMAND.COM file.  This file is loaded
		when your computer starts.  If you have a hard
		disk, your COMMAND.COM file will be in the
		root directory of your C drive, and FreePack
		will have access to it.  If, however, you boot off
		of a floppy diskette and then remove that
		diskette and replace it with a diskette that does
		not have the COMMAND.COM on it, FreePack
		will not run.  You will be given a error message
		when the program starts if it is unable to find
		the COMMAND.COM file.  To correct this
		situation, reboot your machine and leave the
		COMMAND.COM available to FreePack.
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
					-15-
		
		
		             M E N U   M A S T E R
		
		
		USAGE:  Menu Master is an easy to use menuing
		program that will allow you to set up menus for
		switching directories and starting your
		application programs.  You can just point to the
		name of the program you want to start (e.g.,
		Lotus 1-2-3), and press ENTER.  Menu Master
		will change directories and start the program for
		you.
		
		
		COMMAND FORMAT:  MENU
		     No other parameters are needed for this
		program.  
		
		DESCRIPTION:  This program will provide you
		with a convenient way of starting your
		application programs.  
		
		     Edit menu items.  The first time you use
		Menu Master you must inform Menu Master of
		the applications you want to use, and their
		locations.  After starting Menu Master, press the
		F2 key to edit the menu items.  This screen will
		allow you to add, change or delete any item that
		appears in the menu.  There is help available on
		this screen by pressing the F1 key.
		     You will be asked for four pieces of
		information for each menu item.  The "Menu
		Title" will be the name that appears on the Main
		Menu.  
		     The "Drive and Directory" will be the drive
		and directory on which the program file is
		found.    The "File Name"  is name of the
		executable file.  This would be the text that you
		would type if you were to start the program
		from the DOS prompt.  
		
					-16-			
		     The last item is an optional Password. If a
		menu item has a password, you will not be
		allowed to change anything about that menu item
		until you have correctly entered the password. 
		You will NOT have to enter the password when
		you select the item from the Main Menu - you
		only enter it to change something about the
		menu item. 
		     Although some menu programs limit the
		access of any item that has a password, Menu
		Master is designed more as a single user system. 
		We designed Menu Master to make it easy to use
		the computer, not to keep someone from using it
		(not that there may not be reasons for needing
		to keep people out of some areas of your
		computer - it is just that we choose not to go
		into that market).  The password is used only to
		keep an unknowing user from accidentally
		changing the menu.  You might want to, for
		example, set up a menu for a new user in your
		office.  You might choose to use passwords to
		keep that person from changing the menu while
		they were playing around with the program.
		
		    It is not necessary to enter items on every
		line.  You may want to group similar applications
		together on the same page.  For example, you
		might want to have all your word processing
		applications on a page together, and all your
		utilities on a page together.  You might create a
		Main Menu that would look something like this: 
		 
		         1.  W O R D   P R O C E S S I N G 
		         2.  Word Perfect 
		         3.  Word Star 
		         4.  Word 
		 
		    Page two might look like the following: 
		         17.  U T I L I T I E S 
		         18.  SeeShell 
		         19.  Where-is 
		         20.  Compare 
		         21.  Norton's Utility 
					-17-			     
		    Page three might be your spreadsheets:   
		         33.  S P R E A D S H E E T S 
		         34.  Excel 
		         35.  1-2-3 
		         36.  FreeCalc 
		 
		    Enter the applications that you will use the
		most frequently on the first page (the first 16
		items), since this will save you from having to
		page down to get to the desired application. 
		 
		     When you have completed creating the
		menu, press the F10 key.  This will save the
		menu file (the file will be saved as MENU.MNU). 
		If you choose not to save the menu, press the
		ESC key.
		
		     When you save a Menu, the MENU.MNU file
		will be saved in the current directory.  When
		starting the Menu Master, the program will first
		check the current directory for the MENU.MNU
		file, and then search the path.  The advantage
		to this is that you can have several menus set
		up on different parts of your disk.  When you
		move to one area, you can start Menu Master,
		and it will use the MENU.MNU from that
		directory.  In another directory, it would use the
		MENU.MNU file from that directory.  If you
		decide to have just one MENU.MNU (most people
		will just have one), you should move that file to
		the directory that has the rest of the FreePack
		programs in them (and be certain that directory
		is in your path).
		     
		     Selecting an application.  Use the Up and
		Down arrows to move the selection bar.  The
		PgUp and PgDn will move the selection bar up
		or down one page respectfully.  Press the ENTER
		key once the desired item is highlighted.
		
		
					-18-			
		     You can press the F9 key from the Main
		Menu to exit to DOS, and leave Menu Master
		running.
		
		     The F1 key will provide you the help
		screen.  The ESC key will terminate Menu
		Master.
		
		     
		
		REMARKS:  For some large applications, you may
		not have enough memory to load your application
		from within Menu Master.  If you find this to be
		the case, and if you started Menu Master from
		within the FreePack program, try running Menu
		Master as a stand-alone program (exit FreePack
		and type MENU). 
		
		     As with most of the programs in FreePack,
		Menu Master needs to have access to your
		COMMAND.COM file.  This file is loaded when
		your computer starts.  If you have a hard disk,
		your COMMAND.COM file will be in the root
		directory of your C drive, and Menu Master will
		have access to it.  If, however, you boot off of
		a floppy diskette and then remove that diskette
		and replace it with a diskette that does not have
		the COMMAND.COM on it, Menu Master will not
		run.  You will be given a error message when
		the program starts if it is unable to find the
		COMMAND.COM file.  To correct this situation,
		reboot your machine and leave the
		COMMAND.COM available to Menu Master.
		
		
		
		
		
		
		
		
					-19-
		
		
		               S E E   S H E L L
		
		
		
		USAGE:  SeeShell is a replacement for the DOS
		"dir" command.  SeeShell is faster and gives you
		the power to do a great deal more.  SeeShell
		creates a sorted directory.  You can page up or
		page down to find the file you are looking for, 
		and then perform various action on any of the
		files listed.  You can; copy, delete, execute,
		move, print, rename, or view.  If the listing on
		the screen is actually a subdirectory, you can
		move to that directory.  You can also move up
		one level in the directory by pressing the Ctrl-
		PgUp key combination.  This is a very fast way
		of moving around on your hard disk.  
		
		COMMAND FORMAT:  
		
		     SHELL <target drive and/or directory>
		
		     If you type SHELL without any parameters,
		SeeShell will provide you a sorted listing of the
		current directory.  If you include a drive and/or
		a directory name, SeeShell will give you a listing
		for the requested directory.
		     You can include the two wild card
		characters (the * and the ?) so that only certain
		files will be selected.  For example, the
		following command will display only files with
		the extension of EXE from the current directory:
		
		          SHELL *.EXE
		
		
		DESCRIPTION:  This program will provide you
		with a convenient way of visually seeing what is
		on your disk.  Once you see the listing of the
		
					-20-			
		files on the disk, SeeShell offers a very easy
		way of managing these files.  SeeShell will allow
		you to mark as many files as you like for
		whatever action you like.  For example, in
		reviewing a directory you might notice 3 files
		that need to be deleted, 2 that needed to be
		copied to a floppy, and 1 that you would like to
		print out.  You can enter a "1" next to the name
		of the files you want to copy, a "2" next to the
		names of the files that need delete, and a "5"
		next to the file to be printed.  
		
		     Press ENTER after you have marked the
		files and SeeShell will perform the desired
		action.
		
		     If you start SeeShell using one of the wild
		card characters (the * or ?), you can cause
		SeeShell to display all files by pressing the
		ALT_Z.
		
		     SeeShell supports the following actions on
		any of the files on the display: copy, delete,
		execute a program, move, print an ASCII text
		file, rename a file, view an ASCII text file.  
		     You can mark all files for any of the
		actions 1 - 7 (copy through viewing a file) by
		holding down the ALT key and pressing the
		number that corresponds to the desired action. 
		For example, ALT-2 will mark all files to be
		deleted.  If after marking the files, you decide
		that you do not want to perform that action, the
		ALT and the number key will toggle off that
		action.  For example, ALT-2 will mark all files
		to be deleted.  Pressing ALT-2 again will remove
		the "2" from each file so they will not be
		deleted.
		
		     If you select to delete a file, SeeShell will
		prompt you prior to actually deleting the file to
		verify that you do indeed want to delete that
		file.  You can press the ALT-A key combination
		
					-21-			
		to tell SeeShell that you want ALL marked files
		deleted without SeeShell verifying each file.  
		     When you select a group of files to be
		copied or moved, SeeShell will prompt you for
		the name of the file on the new target
		drive/directory, and the name of the target
		drive/directory.  After entering the target
		drive/directory once, you can press the ALT-A
		key combination to have SeeShell copy each file
		using its original name to the target drive
		without prompting you for the name of the
		target drive/directory.  If you select to use the
		ALT-A option, you will not be given a chance to
		avoid copying a file that already exists in the
		target drive/directory.
		
		     If during the copy process, the target disk
		does not have enough room to hold the next file,
		SeeShell will prompt you to insert a new disk
		(or to press ESC cancel the copying of this file).
		     
		     You can also move to a subdirectory (they
		are marked on the screen as "<DIR>"), put typing
		an "8" next to the name of the subdirectory.
		
		     You can easily select another drive to be
		displayed by holding down the ALT key and the
		letter that corresponds to the desired drive.  For
		example, ALT-D will create a display of drive D.
		
		     You can add a subdirectory to the current
		directory by pressing the ALT-M (for Make a
		subdirectory).  Likewise, ALT-R will Remove a
		directory (the directory must be empty).
		
		     Function of the keys:
		     F1:       Help key
		     ESC:      Quit
		     1:        Select a file to be copied
		     2:        Select a file to be deleted
		     3:        Select a file to be executed
		     4:        Select a file to be moved
		
					-22-			
		     5:        Select a file to be printed to
		               your default printer
		     6:        Select a file to be renamed
		     7:        Select a file to be viewed (must
		               be an ASCII text file)
		     8:        Move down one level to this
		               subdirectory (you can move up
		               one level with the Ctrl-Page-Up
		               keys)
		     ENTER:    You can mark as many files as
		               you want with the numbers 1 - 8. 
		               When you press the ENTER key,
		               your desired action will be
		               performed.
		     Right:    Right key will highlight the next
		               file in this directory 
		     Left:     Left key will highlight the
		               previous file in this directory 
		     Up:       Up key will move you to the line
		               above the current one 
		     Down:     Down key will move you to the
		               next line 
		     Page-Up:  Display previous screen of file
		               names for this directory (if there
		               is one) 
		    Page-Down: Display next screen of file names
		               for this directory (if there is
		               one) 
		    Home:      Highlight the first file on this
		               screen 
		    End:       Highlight the last file on this
		               screen 
		  Ctrl-Home:   Highlight the first file in this
		               directory 
		   Ctrl-End:   Highlight the last file in this
		               directory 
		  Ctrl-PgUp:   Move up one directory level
		               (unless currently at the root
		               directory).  You can move down
		               one level by marking the
		               subdirectory with an "8".
		    Alt-M:     Make a directory 
		    
		    			-23-    			
		    Alt-R:     Remove current directory and
		               move up one level.
		  Alt + drive: Used to display file information
		               about a different drive.
		    Alt-Z:     Used to change the program from
		               displaying just selected files (e.g.,
		               when you start SeeShell with a
		               command like SHELL *.EXE), to
		               displaying all files in the
		               directory. 
		    Alt-1:     Mark all files in this directory as
		               files to be copied.  If you press
		               ALT-1 again all files will that
		               have been marked to be copied
		               will be "unmarked".
		    Alt-2:     Mark all files in this directory as
		               files to be deleted.  If you press
		               ALT-2 again all files will that
		               have been marked to be deleted
		               will be "unmarked".
		    Alt-3:     Mark all files in this directory as
		               files to be executed.  If you
		               press ALT-3 again all files will
		               that have been marked to be
		               executed will be "unmarked".
		    Alt-4:     Mark all files in this directory as
		               files to be moved.  If you press
		               ALT-4 again all files will that
		               have been marked to be moved
		               will be "unmarked".   
		    Alt-5:     Mark all files in this directory as
		               files to be printed.  If you press
		               ALT-5 again all files will that
		               have been marked to be printed
		               will be "unmarked". 
		    Alt-6:     Mark all files in this directory as
		               files to be renamed.  If you press
		               ALT-6 again all files will that
		               have been marked to be printed
		               will be "unmarked". 
		    Alt-7:     Mark all files in this directory as
		               files to be viewed.  If you press
		               ALT-7 again all files will that
		               have been marked to be viewed
		               will be "unmarked".  
					-24-
		REMARKS:  SeeShell will not display hidden files
		or read-only files.  SeeShell supports drives A
		through G.
		
		     If you start SeeShell with a command like:
		
		          SHELL *.EXE
		
		you will only see files with the extension of
		EXE.  This will remain true as you move around
		to other directories.  If you want to see all files
		(not just those with the EXE extension), quit
		SeeShell and restart it without the *.EXE
		parameter.
		
		     As with most of the programs in FreePack,
		SeeShell needs to have access to your
		COMMAND.COM file.  This file is loaded when
		your computer starts.  If you have a hard disk,
		your COMMAND.COM file will be in the root
		directory of your C drive, and SeeShell will have
		access to it.  If, however, you boot off of a
		floppy diskette and then remove that diskette
		and replace it with a diskette that does not have
		the COMMAND.COM on it, SeeShell will not run. 
		You will be given a error message when the
		program starts if it is unable to find the
		COMMAND.COM file.  To correct this situation,
		reboot your machine and leave the
		COMMAND.COM available to SeeShell.
		
		
		
		
		
		
		
		
		
		
		
					-25-
		
		
		                    V I E W
		
		
		USAGE:  This options displays an ASCII text file
		on your screen.  Once displayed, you can roll
		through the document one line, or one page, at
		a time.
		
		COMMAND FORMAT:  VIEW <file to be viewed>
		
		DESCRIPTION:  You start VIEW by typing VIEW
		and the name of the file you want to display. 
		For example:
		
		          VIEW MYDOC.TXT
		     
		     The first line of each file displayed will
		say:
		     ********* B E G I N N I N G *********
		and the last line will say:
		          ********* E N D *********
		
		     
		     If a line of text is too long, the VIEW
		program will display the greater-than symbol
		(">") at the end of the line.  This will tell you
		that there is more on that line.  You can scroll
		the screen to the right by pressing the right
		arrow key.  The screen will be scrolled 20
		characters to the right.  On the left margin of
		the screen you will see the less-than symbol
		("<").  This will tell you that there is text to
		the left of the margin.
		
		     Function of the keys:
		     F1:       Help
		     ESC:      Quit
		     PgUp:     Move up one page
		     PgDn:     Move down one page
		
		     		-26-     		
		   Up arrow:   Move up one line
		 Down arrow:   Move down one line
		 Left arrow:   Scroll the screen to the right 20
		               characters (used to see a long
		               line).
		Right arrow:   Scroll the screen to the left 20
		               characters (used to see a long
		               line).
		  Ctrl-Left:   Return to the far left margin
		  Ctrl-Home:   Move to the beginning of the
		               document.
		
		
		REMARKS:  If the file you are viewing is not an
		ASCII text file, you may see a screen full of
		graphic characters.
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
					-27-			
		
		
		
		                W H E R E - I S
		
		
		USAGE:  This option will search all directories
		on a drive to find matching files.
		
		COMMAND FORMAT:  
		     WHERE-IS <files to be found>
		
		DESCRIPTION:  You start Where-Is by typing the
		command followed by the file you want to find. 
		You can use the wild card characters (the ? and
		*) in your search request.  For example, you
		would type the following to find a specific file
		called WP.EXE:
		
		               WHERE-IS WP.EXE
		Where-Is would search all the directories on the
		current drive to find the WP.EXE file.  Where-Is
		will display the name of each directory that has
		the matched file(s), the name of the file, the
		file size, and the last date the file was updated. 
		Where-Is will also display the number of files in
		each directory that match the search request and
		their total size (this information is useful when
		you are using a wild card in your search, e.g.,
		WHERE-IS *.EXE).  Once Where-Is has completed
		its task, it will inform you the number of files
		that matched the search request, and their total
		size.
		
		     Where-Is also supports DOS redirection. 
		You can redirect the output of the search to
		either your printer or a file.  You can send the
		search results to your printer by the following
		command:
		          
		          WHERE-IS *.* > PRN
		          
			          	-28-	          	
		If you wanted the results to go to a file named
		TEXT.OUT, use the following command:
		
		          WHERE-IS *.* > TEXT.OUT
		
		
		     You can search all directories in the
		current drive for any BUDGET89 file with the
		following command:
		
		          WHERE-IS BUDGET89.*
		
		     When you use the *.* for the search
		parameter, you will get a list of all files on your
		disk.
		
		
		REMARKS:  You can specify a drive other than
		the default by inserting the drive name and a
		colon prior to the search parameter.  For
		example:
		
		          WHERE-IS D:*.EXE
		
		     Do not put a slash after the colon.
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     
		     			-29-
		
		            DISCLAIMER OF WARRANTY
		
		
		     FreePack and the documentation are
		distributed "AS IS" and without warranties as to
		performance.  Any statements by the author do
		not constitute warranties and shall not be relied
		on by the user in deciding whether to purchase
		the product.
		
		     FreePack is distributed without any express
		or implied warranties whatsoever.  Because of
		the diversity of conditions and hardware under
		which this program may be used, no warranty of
		fitness for a particular purpose is offered.  The
		user is advised to test the program thoroughly
		before relying on it.  Any liability of the author
		will be limited exclusively to product replace-
		ment. 
		
		
		     All business application software is inher-
		ently complex.  You are cautioned to verify the
		result of your work.
		
		     If you have any questions, or comments,
		please write to:
		
		
		          Stilwell Software Products
		            1336 East Krista Way  
		               Tempe, AZ  85284
		                (602) 820-4952
		
		
		
		
		
		
		
					-30-
		                **** INDEX ****
		
		<  . . . . . . . . . . . . . . . . . . . . . 26
		>  . . . . . . . . . . . . . . . . . . . . . 26
		Autoexec.bat
		       . . . . . . . . . . . . . . . . . . .  9
		COMMAND.COM  . . . . . . . .  9, 13, 15, 19, 25
		Compare
		       . . . . . . . . . . . . . . . . . . . 11
		Contribution . . . . . . . . . . . . . . . .  1
		COPYF  . . . . . . . . . . . . . . . . . 12, 20
		CopyFile . . . . . . . . . . . . . . . . . . 12
		Edit menu items  . . . . . . . . . . . . . . 16
		FP . . . . . . . . . . . . . . . . . . . . . 10
		FreePack . . . . . . . . . . . . . . . . 10, 14
		Hidden files . . . . . . . . . . . . . . . . 25
		INDEX  . . . . . . . . . . . . . . . . . . . 31
		Introduction
		       . . . . . . . . . . . . . . . . . . . 10
		Make directory
		       . . . . . . . . . . . . . . . . . . . 22
		MENU . . . . . . . . . . . . . . . . . . . . 16
		Menu Master
		       . . . . . . . . . . . . . . . . . . . 16
		Password . . . . . . . . . . . . . . . . . . 17
		Read-only files  . . . . . . . . . . . . . . 25
		Remove directory
		       . . . . . . . . . . . . . . . . . . . 22
		See Shell
		       . . . . . . . . . . . . . . . . . . . 20
		SHELL  . . . . . . . . . . . . . . . . . . . 20
		User supported . . . . . . . . . . . . . . .  1
		View
		       . . . . . . . . . . . . . . . . . . . 26
		Warranty
		       . . . . . . . . . . . . . . . . . . . 30
		Where-Is
		       . . . . . . . . . . . . . . . . . . . 28
		
		
		
					-31-
		                       
		
		
		                OTHER PRODUCTS
		
		     Stilwell Software Products also has written
		a several other shareware programs in the
		"FREE" series.  The other programs include a
		flat-file database (FreeFile), a word processor
		(FreeWord), and a spreadsheet (FreeCalc).  
		
		REQUIREMENTS:  FreeFile, FreeWord, and
		FreeCalc require a PC or compatible; 256K of
		RAM and can be used with either a color
		monitor (colors can be selected), or a
		monochrome monitor.  DOS 2.0 or later is
		required.  The software is not copied protected. 
		Any PC printer will work.  
		
		Features from the FreeWord (a word processor)
		include: moving, copying and deleting of blocks;
		display of directories; search and replace; page
		breaks displayed on the screen; automatic
		reformatting of the document; forced paged
		breaks; background printing; print multiple
		copies; left and right justification; typewriter
		mode; spelling checker (when the registration fee
		is paid - $49); movement of the cursor by
		character, word, line, screen, or page.
		
		Features for the FreeCalc (a spreadsheet)
		program include: 250 rows by 50 columns; column
		widths of 0 to 70 characters; text can be
		centered, left or right justified; display of 0 to 6
		decimal places; macros (to save keystrokes); print
		spreadsheet to disk; export spreadsheet to other
		programs; load ASCII text files; supports the
		Intel 8087 and 80287 math coprocessors; up to 15
		significant digits; word processing mode; move,
		copy, delete or insert column(s) or row(s); audit
		
					-32-			
		program (when the registration fee of $47.50 is
		paid).
		
		
		Features for the FreeFile (a flat database)
		program include:  Each database can have up to
		2 billion records; up to 10 indexes per database;
		records can be 1000 characters long; each record
		can have 100 fields; fields can be up to 65
		characters; all 100 fields can be sorted for
		printing; computed fields (similar to formulas in
		spreadsheets); fields can be defined as date fields
		and then used by computed fields as part of a
		formula (e.g., TODAY - date rented); up to 25
		comparisons can be made when printing a report
		(e.g., Due date > 05/01/86); data can be easily
		exported for use by other programs; a utility to
		rebuild the index in case they every get damaged
		(you receive this when the registration fee of
		$45 is paid).
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
					-33-                         **********************
		         *       INVOICE      *
		         **********************
		
		Send payments to:
		Stilwell Software Products
		1336 East Krista Way
		Tempe, AZ  85284
		(602) 820-4952
		
		DATE                          Invoice #89247
		*********************************************
		
		                                        PRICE
		FreePack a package of utilities
		to ease the operation of your
		PC                                      $39.00
		
		
		FreeWord a word processor,
		SSP's SPELL, a spelling checker,
		and documentation                       $49.00 
		 
		
		FreeFile a database and
		documentation                           $45.00 
		
		
		FREECALC an electronic
		spreadsheet, The FreeCalc Auditor,
		and documentation                       $47.50 
		
		
		Arizona Sales Tax
		   (Arizona residents Only)         ________
		
		
		               Shipping and handling    $5.00  
		
		
		                         TOTAL  $    ________
		
		*********************************************
		You may keep this invoice for your records
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1727

     Volume in drive A has no label
     Directory of A:\

    FP       EXE     31879   8-01-89   6:59p
    READ     ME       1846   8-08-89   5:40p
    MENU     EXE     29867   7-28-89   7:22p
    MENU2    HLP      2582   7-16-89   9:01a
    MENU1    HLP       983   7-16-89   9:01a
    VIEW     EXE     22509   8-20-89  10:19a
    COMPARE  EXE     22253   8-04-89   4:21p
    COPYF    EXE     29553   8-03-89   6:49p
    SHELL    EXE     63359   8-25-89  11:30a
    MENU-EDT EXE     33361   7-25-89   8:37p
    WHERE-IS EXE     20767   7-24-89   7:26p
    INSTALL  EXE     29193   7-22-89   5:56p
    SHELL    HLP      4406   8-02-89   6:23p
    FP       DOC     51053   8-08-89   6:46p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   4:31a
    FILE1727 TXT      3627  12-22-89   3:41p
           17 file(s)     347816 bytes
                            7168 bytes free
